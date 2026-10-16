# 附录 B：native 函数体伪代码 —— 切片分析成功

> 2026-10-15。**取代** `REPORT_native.md` 附录 A 中 A.2 的结论（A.2 当时判定的"伪代码不可信"是因为
> 直接对整包做分析；改用**切片分析**后已拿到可信结果）。A.3 的事故记录仍然有效。

---

## B.1 方法与内存控制（关键约束）

| 项 | 做法 |
|---|---|
| 切片 | `tools/elf_window.py`：把目标函数所在片段抽成小 ELF（**多段**：代码段 + 跨区跳转目标 + 数据段） |
| 输入体量 | `win_A.elf` = **3 段 / 40,960 B**，比整包 16.5 MB **小 384 倍** |
| 受控运行 | `tools/ghidra_run_guarded.ps1`：堆硬上限 + 实时监控 + 超阈值强杀 + 启动前可用内存检查 |
| 具体限值 | `GHIDRA_HEADLESS_MAXMEM=1200M`；java 工作集 > 2200 MB 即强杀；可用内存 < 6 GB 拒绝运行 |
| **实测** | **java 峰值 343~602 MB，跑完可用内存不变**（耗时 13~18 秒） |

对比：对**整包**跑全量分析曾把 16 GB 内存打满并**导致系统重启** —— 这是本方案存在的唯一理由。

## B.2 踩过的实现坑（都已修正）

1. **`p_offset` 必须由实际布局推出**。段数据没按各自的 `p_offset` 落位时，Ghidra 会读到**别的段的字节**
   （曾把真实指令解成 `SVE_fnmls` 这类垃圾指令）。
   已用**字节比对**验证：0x520000 段与 0x6d9000 段与原始 `.text` **完全一致**，
   且 0x520f14 正确解出 `sub sp, sp, #0x110 | stp x29,x30,[sp,#0xb0] | stp x28,x27,[sp,#0xc0]`。
2. **不要对整段做线性反汇编**（`AutoAnalysisManager.disassemble` 是线性扫描）：
   遇到字面量池/数据会**失步**。做法：`mgr.disassemble(rng)` 限定在**该函数自己的区间**内。
3. **`getFunctions(rng, true)` 是按入口点筛选**：分析器建的函数可能入口在区间外而函数体与之重叠，
   漏清后 `CreateFunctionCmd` 报 `Unable to create function at ...` → 改为按**函数体是否相交**收集。
4. **不能用 `Function.setBody()` 扩展函数体**（有重叠时 Ghidra 静默夹取，实测 7096 B 只剩 292 B）
   → 必须用 `CreateFunctionCmd(name, entry, bodySet, source)` 建函数时**一次给定** body。
5. 用 `-noanalysis` 导入，避免分析器重判边界把手建函数切小；符号名靠 `win_A.elf.targets`
   （**1172 个符号**）在脚本里逐个 `setName`（用**修饰名**，交给 Ghidra 反混淆）。

## B.3 产出（`native/pseudocode/`）

| 地址 | 函数 | 行数 |
|---|---|---:|
| 0x520f14 | `inflateGzipPayloadWithZlib`（同一地址有多个符号别名，脚本取了最后一个 → 显示为 `…ModuleImpl…D2Ev`，**内容即 inflate**） | **1487** |
| 0x520ec0 | `…ModuleImpl::gunzipUtf8` | 17 |
| 0x520ef0 | `…ModuleImpl::gunzipUtf8WithLimit` | 16 |
| 0x522ee4 | `Valdi::CppMethodRef<…>::make(...)::$_0::__invoke` | 23 |
| 0x522f28 | `Valdi::CppMethodRef<…>::make(...)::$_1::__invoke` | 18 |

## B.4 从伪代码读出的事实（🔒 伪代码直读）

**1. `gunzipUtf8` 的默认上限 = 16 MiB（确认）**

```c
void …ModuleImpl::gunzipUtf8(undefined8 param_1, long param_2)
{
  undefined1 auStack_28 [24];
  …(auStack_28, *(undefined8 *)(param_2 + 8), *(undefined8 *)(param_2 + 0x10), 0x1000000);
  ...
}
```
`param_2 + 8` / `param_2 + 0x10` = `BytesView` 的（数据指针, 长度）；`0x1000000` = 16 MiB
—— 与 Stage-1 反汇编（`mov w3, #0x1000000`）**互相印证**。

**2. inflate 主体 = zlib 的 `inflate()` 状态机被内联展开**

1487 行里几乎全是位缓冲读取循环：`while (< 0x10)`、`while (< 0x20)`、`while (< 3)`、`for (; uVar38 < 0xe; …)`、
`for (; uVar38 < 7; …)` —— 正是 zlib 的 `NEEDBITS(n)` / `PULLBYTE()` 模式。
**这就是该符号有 7096 字节的原因**（不是"很大的简单函数"，而是被摊平的状态机）。

**3. 状态初始化（zlib 内部常量级印证）**

```c
pcStack_98 = FUN_005238e4;                       /* zalloc（FunctionID 识别为 zcalloc） */
pcStack_90 = FUN_005238ec;                       /* zfree  */
plVar12 = (long *)FUN_005238e4(0, 1, 0x1bf8);    /* 分配 0x1BF8 = 7160 B 的 z_stream+state */
if (plVar12 == NULL) goto LAB_00522a6c;          /* 分配失败 → 清理返回，不抛 */
*plVar12 = (long)&local_d8;                      /* state->strm = &strm */
*(undefined4 *)(plVar12 + 1) = 0x3f34;           /* state->status = 0x3F34 = 16180 = zlib INITIAL */
...
*(undefined4 *)((long)plVar12 + 0x1c) = 0x8000;  /* 32768 = 默认窗口大小 */
...
uVar35 = param_4;
if (0xffff < param_4) { uVar35 = 0x10000; }      /* 入参按 64 KiB 分块喂给 inflate */
```

`0x3F34 = 16180` 正是 zlib `inflate_state.status` 的 `INITIAL` 取值 —— 这是"实现确实是 zlib"的强证据。

## B.5 局限（**尚未**达到"可编译源码"）

- Ghidra 把内联状态机**摊平**成大量 `while (1)` + `LAB_xxxxxx` + `extraout_w8/w9/w10/w11` 这类
  "寄存器残留"变量 → **可读但不可直接编译**；要还原成 zlib 原貌需人工按 `NEEDBITS`/状态常量对照。
- 一小部分跨区目标仍未解析（日志里 `Could not follow disassembly flow into non-existing memory`），
  已把 0x6d9xxx 冷代码段切进来，仍有零星位置（如 0x52ea2c 等）落在切片外。
- 第三段（0x9f000）位于 `.text` 之外，其字节基线未做比对（比对基准不适用）。

## B.7 第二轮：结构体类型 + zlib 真函数名（已完成）

两项都做了，**都成功**：

### ① 结构体类型（`GHIDRA_TYPES=1`）

脚本在建函数后**建结构体并把类型回写到反编译变量上**（`HighFunctionDBUtil.updateDBVariable`）：

```
# 已建结构体 z_stream(112B) / inflate_state(152B)
// 定位: state变量=plVar12  strm变量=local_d8
// [已套用结构体类型 2 处并重反编译]
```

效果（同一段代码前后对比）：

```c
/* 之前 */                              /* 之后 */
plVar12[1] = 0x3f34;                    state->status_0x3F34 = 0x3f34;
*(undefined4 *)((long)plVar12+0x1c)=0x8000;   state->dmax_0x8000 = 0x8000;
*(undefined4 *)((long)plVar12+0x3c)=0;        state->wsize_0 = 0;
*plVar12 = (long)&local_d8;             state->strm = &strm;
                                        strm.zalloc = zcalloc;
                                        strm.zfree  = zcfree;
```
`state->` 在函数体内出现 **20 次**。字段名只按**已验证的偏移**命名（`status_0x3F34` = 16180 = zlib `INITIAL`、
`dmax_0x8000` = 32768 = `1<<15`、`wsize_0` = 0），其余留 `pad_XX`，不编造。

### ② zlib 真函数名（**不用扩切片**）

侦察发现 inflate 的 zlib 直调**本来就在 0x520000+0x4000 切片内**（`inflateStateCheck` 0x522f58、
`crc32` 0x523000、`adler32` 0x523254、`inflate_table` 0x523514、`zcalloc`/`zcfree` 0x5238e4/0x5238ec），
只是上一轮没把它们纳入"建函数+命名"。把它们加进 `win_A.decompile` 后：

```
// fn inflateStateCheck 入口=00522f58 字节数=68
// fn crc32            入口=00523000 字节数=596
// fn adler32          入口=00523254 字节数=704
// fn inflate_table    入口=00523514 字节数=976
// fn zcalloc          入口=005238e4 字节数=8      ← PLT 桩（外部 calloc 族）
// fn zcfree           入口=005238ec 字节数=8      ← PLT 桩
```

`inflate` 段内的调用统计（伪代码直读，**已无 `FUN_0052xxxx`**）：

| 调用 | 次数 | 与早先独立工具的调用面统计 |
|---|---:|---|
| `crc32` | **10** | `crc32`×10 ✓ 完全一致 |
| `inflateStateCheck` | **4** | ✓ |
| `adler32` | **4** | `adler32`×4 ✓ 完全一致 |
| `inflate_table` | **3** | ✓ |
| `zcalloc` / `zcfree` | 1 / 1 | ✓ |

→ 这是**两条独立路径互相印证**：一条是早先用 capstone 扫 BL 目标的调用面统计，一条是 Ghidra 反编译出的 C。

> 教训（已写入记忆）：重命名条件写成"标签必须以 `_Z` 开头"会漏掉清单里 `crc32`/`adler32` 这类**可读名**，
> 导致 inflate 的 C 里仍显示 `FUN_00523000`。应**一律按清单命名**。

### 产出更新（`native/pseudocode/`，共 11 个函数）

| 地址 | 函数 | 行数 |
|---|---|---:|
| 0x520f14 | `inflateGzipPayloadWithZlib`（含结构体类型） | **1500** |
| 0x523514 | `inflate_table` | 212 |
| 0x523254 | `adler32` | 126 |
| 0x523000 | `crc32` | 109 |
| 0x522f58 | `inflateStateCheck` | 18 |
| 0x520ec0 / 0x520ef0 | `gunzipUtf8` / `gunzipUtf8WithLimit` | 18 / 17 |
| 0x522ee4 / 0x522f28 | `CppMethodRef::make` 的两个 thunk | 24 / 19 |
| 0x5238e4 / 0x5238ec | `zcalloc` / `zcfree`（PLT 桩） | 13 / 13 |

内存：**java 峰值 377~431 MB**（限堆 1200M），耗时 18 秒。

## B.6 若要"可编译"级别，下一步

1. **结构对齐**：用同版本 zlib 源码把主体按 `state->mode` 跳转表与 `NEEDBITS(n)` 常量逐段对上，
   再改写成 `inflate()` 的原始形态（工作量集中在 1400 行状态机的分段识别）。
2. **给结构体类型**：在 Ghidra 里为 `z_stream` / `inflate_state` 建数据结构定义并应用到变量，
   输出可读度会明显提升（当前大量 `plVar12[9]`、`plVar12[0xd]` 这类字段访问就是缺结构体所致）。
3. 若要继续扩大切片：把 inflate 直接调用的 zlib 内部函数（`inflate_table` / `inflate_fast` / `crc32` /
   `adler32`）所在片段一并切进来，伪代码里就会出现**真实函数名**而不是 `FUN_0052xxxx`。
   ⚠️ 每扩大一次切片都要重跑受控脚本并核对峰值内存（见 B.1 的限值）。

---

## B.9 函数体**逐行还原**已完成（见 RECON_inflate.md）

inflateGzipPayloadWithZlib 已确认 = **zlib inflateInit2_(strm, 31, …) + 完整 inflate() 状态机被内联**：
- 结构体改为 zlib **完整字段名**（mode/wrap/wbits/flags/dmax/hold/bits/lencode/distcode/next/lens[320]/work[288]/codes[1440]…）
- 初始化段 17 处字段写入**逐一对上** inflateInit2_+inflateReset；由 wrap=6/wbits=15 反推 **windowBits=31（只接 gzip + 校验）**
- 状态机渲染成 **switch**，case 0x3f34..0x3f51 = inflate_mode 枚举原文（28 个状态）
- 13 条 strm->msg 与 zlib 原文**逐字一致**
- 新增 	ools/ghidra_annotate.py（表驱动改写）：*(T*)((long)X+0xNN) → X->field、状态常量 → 状态名、地址 → 字符串
  —— 一次改写 **183 字段 / 81 状态常量 / 22 字符串**，剩余偏移访问仅 21 处
- 产物 
ative/pseudocode/inflate.ANNOTATED.c（1511 行，已是可直接阅读的 zlib 形态）
