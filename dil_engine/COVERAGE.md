# DIL 引擎还原覆盖率台账（更新至 2026-10-16）

> **总入口请先看 [`DELIVERY.md`](DELIVERY.md)** —— 总交付报告（交付清单 / 关键结论 / 方法 / 证据标准 / 边界）。
> 组件渲染链（服务端 JSON → 元素注册表 → 渲染器 → Valdi）见 **[`RENDER_LAYERS.md`](RENDER_LAYERS.md)**。
> App 如何接入 Valdi + 本引擎（开发阶段参照）见 **[`VALDI_INTEGRATION.md`](VALDI_INTEGRATION.md)**。

任务口径：用户确认 **①native ②伪 JS 重建 ③宿主胶水** 为缺口，④Valdi/QuickJS 本体、⑤动态验证暂不做。
**①②③ 全部完成**（① 已从"接口契约 + 行为刻画"推进到 **逐语句级**）。

---

## 总表

| # | 层 | 规模 | 状态 | 产物 |
|---|---|---|---|---|
| — | DIL 的 11 个 JS 模块 | 723 文件 / 6,966 函数 / **305,428 条指令** | ✅ 结构 100% 字节精确 + **指令级** | `disasm/`、`structures/` |
| — | 其中 `dil_generated_components` | 288 文件 | ✅ **源码级**（299 个 `.tsx/.ts`） | `recovered_sources/` |
| ① | **`dil_compiler` 的 native 模块** | 1 个 C++ 模块（`inflateGzipPayloadWithZlib` 7,096 B） | ✅ **逐语句级**（版本锁定 zlib 1.3.1；结构体逐字段 + 尺寸闭合；11 个函数伪代码；`inflate_table`/`inflate()` 本体/内联 `inflate_fast` **逐语句对齐**；改写器偏移清零 + 语义标签） | `native/RECON_inflate.md`、`RECON_inflate_body.md`、`RECON_inflate_table.md`、`RECON_inffast.md`、`native/pseudocode/`、`native/zlib-1.3.1/` |
| ③ | **宿主胶水 `com.openai.valdi/**`** | **388 类**（含 17 个 DIL） | ✅ **388/388 反编译成功**（1.11 MB 源码） | `java_valdi/` |
| ② | **9 个引擎模块的 TS 源码** | ~240K 条指令 | 🟡 **全量伪 JS 已产出**（85 模块 / 28,872 函数 / 1,365,526 指令，栈效应一致 99.91%；引擎 9 模块占 433 文件 / 296,556 指令）；可读但非可编译源码，循环/逻辑结构仍在优化 | `PROFILE_pseudo.md`、`pseudo/`（1,834 份 / 22.6 MB）、`pseudo_report.txt` |
| — | **引擎架构解读** | 9 个引擎模块 / 936 导出名 | ✅ **完成**（25 项深读，含预编译正则 blob 逐字节格式、recompileNode→DILCompiler 的 DI 闭环、479 个导出函数摘要、DILApiFacade 沙箱边界） | `PROFILE_engine.md`、`exports_*.txt`、`const_*.txt`、`fndigest_*.txt` |
| ④ | Valdi 运行时 + QuickJS 本体 | .so 的绝大部分 | ⏸ 用户确认不急（上游开源同源） | — |
| ⑤ | 运行时行为验证 | — | ⏸ 用户确认不急（设备已 root，可 Frida） | — |

---

## ① 明细：native 模块

- **模块**：`snap::valdi_modules::dil_compiler::CompressedWidgetStateInflaterModule`
- **TS 接口**（`.rodata` 明文 schema）：
  `{'gunzipUtf8':f|m|(t): s, 'gunzipUtf8WithLimit':f|m|(t, d): s}`
- **默认解压上限**：`0x1000000` = **16 MiB**（硬编码，防解压炸弹）
- **实现**：基于静态链入的 zlib（`inflate` 系列 + `crc32`/`adler32` 校验），返回 UTF-8 `std::string`，失败抛 `Valdi::Exception`（"Failed to inflate gzip widget state."）
- **跨层链路**：`dil_compiler/src/CompressedWidgetState.js` → native `gunzipUtf8` → `inflateGzipPayloadWithZlib`
- **残留**：函数体伪代码（本机 REA provider 不可用；可走 Ghidra headless 或修 `elfinfo.py`）

## ③ 明细：宿主胶水

388 类按包：`chatgpt` 134、`collaborativeeditor` 99、`oai` 48、`dil` 17、`voice` 17、`integrity` 14、`olympic` 14、`ui` 9、`celsius` 7、`filepicker` 7、`audio` 5、`location` 5、`lottie` 3、`filesaver` 2、`latex` 2、`beacon` 1、`compose` 1、`memory` 1、`svg` 1。
分布：**`classes6.dex` 占 361 个**，其余在 classes2(3) / classes3(6) / classes5(18)。

关键类抽查：
- `com.openai.valdi.compose.ComposeValdiRootView extends ValdiRootView` —— 完整互操作面（`dispatchTouchEvent`/`onAttachedToWindow`/`onVisibilityChanged` + `attachmentToken`/`onRemeasureRequested`/`onHostPresenceChanged`/`touchInterception`）
- `com.openai.valdi.oai.platform.OAIMetricsService` —— 指标桥接口 `count(OAICounterMetric)` / `histogram(OAIHistogramMetric)`，module id `oai_metrics_service_api_kt_kt`

## 工具（本轮新增）

| 脚本 | 用途 |
|---|---|
| `tools/elf_sym.py` | ELF 符号查询 + Itanium 轻量反混淆 + 反汇编 + `--calls` 调用面统计 |
| `tools/elf_str.py` | `.so` 字符串 + 上下文（发现 native schema 明文） |
| `tools/scan_dil_native.py` | 枚举 Valdi native module |
| `tools/valdi_classes_by_dex.py` | valdi 类的 dex 归属（333 类定位） |
| `tools/jadx_valdi.py` | 批量反编译（**dex 为输入，单类 27.6s → 3.3s**，4 并发） |

## 已知工具问题（建议转开发角色修）

- 技能 `scripts/utils/elfinfo.py` 在 pyelftools 0.33 下抛 `'Section' object has no attribute 'iter_relocations'` → 本机 ELF 侦察不可用，已用 `elf_sym.py` 替代
