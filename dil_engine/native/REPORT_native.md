# ① DIL 的 native 实现分析报告（`dil_compiler` 的 C++ 模块）

- 目标：补上 DIL 引擎唯一的**结构性缺口** —— native 侧实现
- 载体：`libopenai_xplat_export.so`（16.5 MB，arm64，**符号未剥离** —— `.symtab` 共 85,801 个符号）
- 日期：2026-10-15 ｜ 分级：🔒 确定 ｜ 🔍 确证 ｜ 💡 推断 ｜ ❓ 未知

---

## 0. 结论

DIL **不是纯 JS/TS**：`dil_compiler` 模块有一个 C++ 实现，负责把服务端下发的**压缩 widget 状态**解压成 UTF-8。JS 侧封装在 `dil_compiler/src/CompressedWidgetState.js`，跨层链路已闭合验证。

## 1. 对 TS 暴露的接口（`.rodata` 明文 schema，🔒）

```
'snap::valdi_modules::dil_compiler::CompressedWidgetStateInflaterModule'
{'gunzipUtf8':f|m|(t): s, 'gunzipUtf8WithLimit':f|m|(t, d): s}
Failed to inflate gzip widget state.
```

| TS 方法 | schema | 参数 | 返回 | 语义 |
|---|---|---|---|---|
| `gunzipUtf8` | `f\|m\|(t): s` | `t` = TypedArray/BytesView | `s` = string | 解压，**默认上限 16 MiB** |
| `gunzipUtf8WithLimit` | `f\|m\|(t, d): s` | `t` + `d` = double | `s` = string | 解压，显式上限 |

错误常量字符串：`Failed to inflate gzip widget state.`

## 2. 符号与规模（`.symtab`，🔒）

| 符号 | 地址 | 大小 |
|---|---|---|
| `...::dil_compiler::{anonymous}::inflateGzipPayloadWithZlib(Valdi::BytesView const&, unsigned long)` | `0x520f14` | 7,096 B |
| `Valdi::CppGeneratedModuleFactory<...CompressedWidgetStateInflaterModule>::loadModule()` | `0x520b74` | 696 B |
| `...CompressedWidgetStateInflaterModuleFactoryImpl::onLoadModule()` | `0x520e2c` | 140 B |
| `...CompressedWidgetStateInflaterModule::getRegisteredClass()` | `0x522b3c` | 100 B |
| `...::{lambda}::CompressedWidgetStateInflaterModuleImpl::gunzipUtf8(Valdi::BytesView)` | `0x520ec0` | 48 B |
| `...::{lambda}::CompressedWidgetStateInflaterModuleImpl::gunzipUtf8WithLimit(Valdi::BytesView, double)` | `0x520ef0` | 36 B |
| `...dil_compiler::registerCompressedWidgetStateInflaterModule` | — | 注册入口 |

注册机制：`Valdi::RegisterModuleFactory::registerTyped<CompressedWidgetStateInflaterModuleFactoryImpl>()`。

## 3. 实现分析（🔒 部分）

### 3.1 默认上限 = 16 MiB（反汇编证据）

```asm
; gunzipUtf8(BytesView)  @0x520ec0
  00520ec8  ldp   x9, x2, [x1, #8]      ; 拆 BytesView（ptr / size）
  00520ecc  add   x0, sp, #8
  00520ed0  mov   w3, #0x1000000        ; ← 0x1000000 = 16,777,216 = 16 MiB
  00520ed8  mov   x1, x9
  00520edc  bl    #0x520f14             ; -> inflateGzipPayloadWithZlib
  
; gunzipUtf8WithLimit(BytesView, double)  @0x520ef0
  00520ef8  fcvtzu x3, d0               ; double limit -> u64
  00520f00  bl    #0x520f14             ; -> inflateGzipPayloadWithZlib
```

→ 默认路径硬编码 **16 MiB 解压上限**（防解压炸弹）；带 limit 的版本把 double 转 u64 传入。

### 3.2 zlib 被静态链入，inflater 自带校验

`inflateGzipPayloadWithZlib`（7,096 B）的调用面统计：

| 被调用 | 次数 | 说明 |
|---|---|---|
| `crc32` | 10 | gzip CRC32 校验 |
| `adler32` | 4 | zlib ADLER32 校验 |
| `inflateStateCheck` / `inflate_table` / `zcalloc` | 4 / 3 / 1 | **zlib 内部函数** → zlib 已静态链入 |
| `Valdi::Exception::Exception(char const*)` | 3 | 错误路径（对应 §1 的 `Failed to inflate gzip widget state.`） |
| `std::basic_string<...>::resize(unsigned long)` | 3 | 构造输出 UTF-8 字符串 |
| `OUTLINED_FUNCTION_*` | 多个 | 构建期函数外提（LLVM/env 优化产物） |

→ 这是一个**自实现的 gzip 解压器（基于 zlib inflate + crc32/adler32 校验）**，返回 `std::string`，失败抛 `Valdi::Exception`。💡

## 4. 跨层链路（🔒 已闭合）

```
服务端下发「压缩 widget 状态」
   ↓
dil_compiler/src/CompressedWidgetState.js        (JS 封装，1,579 B / 6 函数)
   原子表含: gunzipUtf8, gunzipUtf8WithLimit, __compressed, DILDiagnosticError
   ↓  Valdi 跨语言调用
native CompressedWidgetStateInflaterModule.gunzipUtf8(bytes)         [C++]
   ↓  默认 16 MiB 上限
inflateGzipPayloadWithZlib(BytesView, limit)  @0x520f14              [zlib]
   ↓
UTF-8 字符串 → 回到 JS，交给 DIL 渲染管线
```

## 5. 工具与方法

| 工具 | 说明 |
|---|---|
| `tools/elf_sym.py` | pyelftools + capstone：符号查询（Itanium 轻量反混淆）、按地址反汇编、`--calls` 调用面统计、就近符号解析 |
| `tools/elf_str.py` | `.so` 字符串 + 上下文（发现 schema 明文的关键） |
| `tools/scan_dil_native.py` | 枚举 Valdi native module（Itanium 长度前缀解析） |

**环境限制（如实说明）**：
- REA 的 3 个分析 provider 在本机均不可用（Ghidra 侧仅接受 PE、Hopper 为 macOS、IDA 未配置）→ 无法直接取伪代码
- 技能自带 `scripts/utils/elfinfo.py` **有 bug**（pyelftools 0.33 下 `Section` 无 `iter_relocations`）→ 已改用自研 `elf_sym.py`；该 bug 建议作为独立开发任务修补（详见 §6）

## 6. 仍差的一步（❓）

`inflateGzipPayloadWithZlib` **只做了调用面与行为刻画，未做函数体伪代码还原**（本机无可用反编译器）。补齐路径：

1. **Ghidra headless**（本机已有 `D:\ReverseTools\ghidra`）：`analyzeHeadless` 导入 .so + 对 `0x520f14` 生成 Decompiler 输出 —— 可行，但 16.5 MB 库的自动分析耗时较长（建议只分析该地址附近或先裁剪段）
2. 修补技能 `elfinfo.py`（开发角色），让 ELF 侦察工具链在本机恢复可用
3. 配置 REA 的 IDA provider（`REA_IDA_MCP_CONFIG`）走 IDA 路线

**注意**：Z 阶段目标（读懂 DIL 引擎）而言，现状已足够 —— 接口契约（§1）、默认上限（§3.1）、算法与校验（§3.2）、跨层链路（§4）都已确认，只差逐行实现细节。

## 附录 A：函数体伪代码的尝试与结论（2026-10-15）

### A.1 方法与约束（有界）
- 工具：`tools/ghidra/DecompileTargets.java`（Ghidra 12.1.3 headless）
- 目标清单：`native/ghidra_targets.txt`（6 个符号：inflate 主体 / 两个 gunzip 包装 / 注册函数 / 两个 CppMethodRef thunk）
- 路径：`-noanalysis` 导入 → 批量反汇编 + `CreateFunctionCmd(名, 入口, 完整符号区间, IMPORTED)` → 反编译
- **内存必须显式限制**：`GHIDRA_HEADLESS_MAXMEM=1500M`（见 A.3）
- 耗时约 30 秒（限堆后）

### A.2 结论：产出的伪代码**不可信**，故不采纳
- 独立校验（`tools/elf_sym.py --dis`）：0x520f14 的入口是**干净的 C++ 序言**
  `sub sp,sp,#0x110` / 保存 x19–x28 / 4 个入参（x0..x3）/ `mov w2,#0x1bf8`（0x1bf8=7160，z_stream 相关尺寸）
- 而 Ghidra 的 C 输出以 `code_r0x00520f14:` 开头、使用 `in_ZR`/`unaff_x23`（未识别入参），
  并调用 Rust taffy 的 panic 符号（`__valdi_taffy_private__ZN4core5slice5index24_slice_end_index_len_fail`）
  —— **与入口指令矛盾**，判定为函数未被正确建立 / 反汇编中途失步
- 旁证：分析器（`reAnalyzeAll`）把该函数体从 7096B 又切成 292B，说明其边界判定也不稳定
- 原始产物另存 `ghidra_pseudo_UNVERIFIED.txt`（**不作为结论使用**）

### A.3 事故记录（重要）
去掉 `-noanalysis` 做**全量分析**时内存被占满，**导致系统重启**（本机 16 GB）。
此后所有 Ghidra 操作均显式限堆（1500M）并在运行前检查可用内存；
该约束已写入长期记忆（`feedback_no_unbounded_heavy_analysis`）。

### A.4 该函数**已确证**的信息（全部来自有界工具，可直接引用）
- 符号大小 **7096 B**，类型为 `STT_NOTYPE` 的本地符号（因此 Ghidra 不为其自动建函数）
- 默认解压上限 **16 MiB**（`gunzipUtf8` 内 `mov w3,#0x1000000`）
- 调用面：`crc32`×10 / `adler32`×4 / `inflate_table` / `inflateStateCheck` / `zcalloc`（zlib **静态链入**）、
  `Valdi::Exception`×3、`std::string::resize`×3
- TS 契约（`.rodata` schema 明文）：`{'gunzipUtf8':f|m|(t): s, 'gunzipUtf8WithLimit':f|m|(t, d): s}`
- JS 调用点：`dil_compiler/src/CompressedWidgetState.js`

### A.5 拿到函数体伪代码的有界方案（待定，需用户同意后再执行）
1. **切片分析（推荐）**：把该函数及若干直调所在的 `.text` 片段（如 64 KB 窗口）抽成一个小 ELF，
   仅对这个小产物做**全量分析** —— 体量与内存都可控（几分钟内、堆 2G 足够）
2. **换机**：在内存更大的机器/VM 上对 16.5 MB 的 .so 做全量分析（本机 16 GB 不适合）

---

## 附录 B（新增，取代 A.2 的结论）

函数体伪代码已通过**切片分析**拿到可信结果（多段小 ELF + 受控运行，java 峰值 343~602 MB）。
详见 **APPENDIX_B_pseudocode.md**，伪代码产物在 
ative/pseudocode/。
附录 A 的 A.2 结论（"伪代码不可信"）作废；**A.3 的事故记录与内存约束仍然有效**。
