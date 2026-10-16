# DIL 逆向还原 · 总交付报告

> 2026-10-16。**本文是唯一入口**；其余报告（`PROFILE_*.md` / `RECON_*.md` / `REPORT*.md` / `COVERAGE.md`）
> 都是本文的支撑材料，索引见 §8。
> 对象：ChatGPT Android 里的 **DIL**（Declarative Interface Language，OpenAI 自研声明式 UI 渲染引擎）。

---

## 0. 一句话

把 ChatGPT 的 DIL 引擎从**宿主胶水（Java）→ 引擎（QuickJS 字节码）→ native 解压模块（ARM64）**三层
全部还原到**可读、可复核**的程度；其中**组件层是源码级、native 关键函数是逐语句级**，
引擎 9 模块是**全量伪 JS + 架构解读**。

## 1. 范围与口径

| 编号 | 层 | 口径 | 状态 |
|---|---|---|---|
| ① | native 模块（`dil_compiler` 的解压器） | 接口契约 → 函数体 → **逐语句对齐** | ✅ **完成**（远超原定"契约 + 行为刻画"） |
| ② | 9 个引擎模块的 TS 源码 | 全量**伪 JS 重建**（可读） | ✅ 产出完成；**非可编译源码**（见 §7） |
| ③ | 宿主胶水 `com.openai.valdi/**` | 反编译 Java 源码 | ✅ 388/388 |
| ④ | Valdi 运行时 + QuickJS 本体 | — | ⏸ 用户决定缓做（上游开源同源） |
| ⑤ | 运行时动态验证（Frida） | — | ⏸ 用户决定缓做 |

**"保真度"三档**（本文统一用它标注）：
- **源码级** = 拿到/复原出源码文本（组件层、宿主胶水、native 的官方依赖）
- **逐语句级** = 每条机器码/字节码都能对应到源码语句，附可复核证据（native 三个函数）
- **伪码级** = 结构正确但需人工再整理才能编译（引擎 9 模块）

## 2. 交付清单

| 层 | 规模 | 保真度 | 产物 |
|---|---|---|---|
| DIL 的 11 个 JS 模块（字节码） | 723 文件 / 6,966 函数 / **305,428 条指令** | 结构 100% 字节精确 + 指令级 | `disasm/`（86 文件）、`structures/`（14 文件）、`valdimodules/` |
| 其中 `dil_generated_components` | 288 文件 | **源码级**（299 个 `.tsx/.ts`） | `recovered_sources/` |
| 9 个引擎模块 | **433 文件** / 296,556 指令 | **伪码级**（伪 JS） | `pseudo/`（1834 份 / 22.7 MB）、`PROFILE_pseudo.md` |
| 引擎的**导出面与语义** | **936 导出名** / **479 个导出函数摘要** / **117 个常量真值** | 源码级（从伪码逐条读） | `exports_*.txt`、`fndigest_dil_*.txt`、`const_dil_*.txt` |
| 引擎**架构解读** | 9 模块 | 源码级 | `PROFILE_engine.md`（25 项深读 / 269+ 行） |
| native 解压模块 | 11 个函数（核心 7,096 B） | **逐语句级** | `native/RECON_*.md`、`native/pseudocode/`（13 文件） |
| native 参考源码 | zlib **1.3.1** 官方 C 源 | 源码级 | `native/zlib-1.3.1/`（15 文件 / 252 KB） |
| 宿主胶水 | **388 类** / 1.11 MB | 源码级（反编译 Java） | `java_valdi/` |
| 原子/字符串 | `atoms/`(11) + `strutures/` | — | `PROFILE_atom_diff.txt` |

**合计**：`dil_engine/` ≈ 234 MB / 7,300+ 文件。

## 3. 关键结论（实质发现）

### 3.1 引擎（`PROFILE_engine.md` 详述）🔒

| 主题 | 结论 |
|---|---|
| **组件输出复用（memo）判据** | **6 条合取**：`version === renderVersion` + 本帧未执行 + `component` 同一性 + **`props` 引用相等** + `areDependenciesEqual(children)` + 数据依赖全等。**不是**按 invalidationVersion 做子树递归比较（原先的猜测被推翻） |
| **`renderOpaque*` 判据** | 由**元素元数据**声明：`elementsMetadata[type].childrenMode === DILElementChildrenMode.OpaqueTree`（非运行时版本比较） |
| **函数身份模型** | `{id, claimedGeneration}`，`claimedGeneration === sourceGeneration`（每次 `evaluate` 自增）；具名按名字表、匿名只允许一个；**同代重复认领返回 `undefined`**（防两个闭包共用身份）；节点键 = `"c:<函数id>:<key>"` |
| **依赖比较** | `areDependenciesEqual` = 长度相等 + 逐项 `Object.is`（React 式浅比较） |
| **增量 patch 落点** | 非根统一 `applyOperation(target,key,kind,value)`，根走 `replaceRoot`；属性类生成 `{…, mutation}`（`RecompileOwnerNode`/`UpdateInitialStateScope`/`UpdateRendererProps`）；子节点类**直接 `renderer.children.splice(...)` + `onChildrenChanged`**；重编译经 DI 回调 `options.compileNode`（注入点 `DILCompiler.js:225`） |
| **沙箱边界（四层）** | ① `DILApiFacade.hardenApiFacade` = `setPrototypeOf(api,null)` + `freezeObjectGraph`；模型代码只有两个 facade（GenUI / Model GenUI）；② 资源 URL 白名单 `DENY_REMOTE_DIL_ASSETS`；③ 状态限额（`DILStateSnapshotCodec`：8192 B / 128 / 512 条目）；④ `dil_sandbox` realm 加固 |
| **状态持久化** | CEL 状态按 `DIL_LOCAL_STATE_ROOT_KEY → widgetId` 分层（`{"$local": {widgetId: …}}`）；数组变更用 `DIL_ARRAY_APPEND/PREPEND_PATH_SEGMENT` |
| **安全相关导出** | `isAllowedModelWrittenDILHostActionType`、`renderStateWithDILTrustedNetworkPolicy`、`isDILSandboxURL`、`isSafeCalculatorExprInput`（白名单正则 `^[0-9+\-*/%().,\sA-Za-z]*$`） |
| **能力名（权限词汇表）** | `open_url_sandbox_read_only`、`open_url_sandbox_literal_path`、`open_entity_detail_reference(_ready/_read_only)`、`open_entity_detail_pinned_image`、`request_media_upload_resolved_widget`、`start_voice_mode_resolved_widget`、`shared_conversation_actions`、`shared_personality_quiz_actions` |
| **引擎内置 widget 注册表** | `INTRINSICS_WIDGETS_MAP = {Each, Scope, Show, "Show.Else"}`（注意带点的键名） |

### 3.2 native 解压模块（`native/RECON_*.md` 详述）🔒🔒

| 主题 | 结论 |
|---|---|
| **实现识别** | `0x520f14`（7,096 B）= **zlib `inflateInit2_(strm, 31, …)` + 完整 `inflate()` + 内联 `inflate_fast()`** |
| **版本锁定** | **zlib 1.3.1**（① Valdi `dependencies.bzl:318` 钉 madler v1.3.1；② 本机同版本源码 `ZLIB_VERSION "1.3.1"`） |
| **参数反推** | `wrap = (windowBits>>4)+5 = 6`、`wbits = windowBits&15 = 15` ⟹ **`windowBits = 31` = 只接受 gzip 头 + 校验 check** |
| **调用上限** | native `gunzipUtf8` 的默认上限 `0x1000000` = **16 MiB**（防解压炸弹）；★ **JS 侧调用点是 `gunzipUtf8(e)` 只传 1 个参数** ⟹ 实际生效的正是这个默认值；与 JS 侧 8192 B 快照限额构成**两层限额** |
| **结构体** | `z_stream`(112 B) / `inflate_state`(**7160 B = 0x1BF8**，与 `zcalloc` 分配量**精确相等**) / `gz_header` 逐字段确认 |
| **状态机** | `inflate_mode` 枚举原文，28 个 case 全在（`switch` 分支实测 `0x3f34…0x3f51`） |
| **错误文案** | 13 条 `strm->msg` 与 zlib 原文逐字一致；另有 2 条 **Valdi 层异常**：`"Failed to initialize gzip inflater"` / `"Failed to inflate gzip widget state"` |
| **跨层调用点（JS→native，已对齐）** | `dil_compiler/src/CompressedWidgetState.js`：`parseWidgetInitialStateValue(s)` 先判 `{__encoding:"gzip-json-base64url-v1", __compressed:<base64url 字符串>}` → `Base64.toByteArray` → **`gunzipUtf8(e)`**（版本门控 `isVersionAtLeast(15)`）→ `JSON.parse`；失败抛 `DILDiagnosticError{phase:"DIL JSON parse"}`。消费方：`DILCompiler` / `DILInitialStateScopeWidgetRenderer`（关联 `__chatgptWidgetViewState` / `initialState`） |
| **逐语句对齐** | `inflate_table`（213 行伪码 ↔ `inftrees.c:36-303`，**4 张静态表数据级一致**）、`inflate()` 本体（1,512 行 ↔ `inflate.c:594-1267`）、内联 `inflate_fast()`（294 行 ↔ `inffast.c:54-300`） |
| **三个结构性发现** | ① `OS→HCRC` 的 fallthrough 链被合并成一块；② `inflate_fast` 内联（门控被改写为 `>5 && >257`）；③ `fixedtables`/`updatewindow` 内联，而 `inflate_table`/`inflateStateCheck` 保持独立符号 |

### 3.3 宿主胶水（`dil_engine/java_valdi/`）

388 类，按包：`chatgpt` 134 / `collaborativeeditor` 99 / `oai` 48 / **`dil` 17** / `voice` 17 / `integrity` 14 / …
其中关键互操作面：`com.openai.valdi.compose.ComposeValdiRootView extends ValdiRootView`
（`dispatchTouchEvent` / `onAttachedToWindow` / `onVisibilityChanged` / `attachmentToken` / `onRemeasureRequested` / `touchInterception`）。

## 4. 方法与工具链

| 层 | 方法 | 关键工具 |
|---|---|---|
| 字节码 | QuickJS 字节码解析 → **栈式反编译** → 伪 JS | `qjs_bc.py`（解析，**100% 对齐校验**）、`qjs_pseudo.py`（反编译）、`pseudo_all.py`（批量+指标） |
| 结构 | 类型/类/原型恢复 | `structures/`、`valdi_classes.txt` |
| 常量/导出 | 导出名 → 函数体摘要；常量真值抽取 | `exports_digest.py`、`fn_digest.py`、`const_extract.py`、`cpool_dump.py`、`re_bytecode.py` |
| Java | dex → 反编译 | `jadx_valdi.py`（4 并发，单类 27.6s → 3.3s） |
| native | **切片 ELF + 受控 Ghidra 分析 + 表驱动改写** | `elf_window.py`、`window_plan.py`、`ghidra_run_guarded.ps1`、`ghidra/DecompileTargets.java`、`ghidra_annotate.py`、`ghidra_extract.py` |
| ELF 侦察 | 符号/反汇编/调用面 | `elf_sym.py`、`elf_str.py` |

**native 切片分析（本次的关键方法）**：把目标函数所在片段抽成**几十 KB 的小 ELF**（含跨区跳转目标与数据段），
只对小产物做**受控** Ghidra 分析 —— 输入比整包小 **384 倍**，java 峰值 **379~602 MB**（限堆 1200M、超 2200M 强杀）。
> 背景：直接对 16.5 MB 整包做全量分析曾把本机（16 GB）内存打满、**导致系统重启**。
> 该约束已固化为长期记忆（`feedback_no_unbounded_heavy_analysis`），此后所有 Ghidra 运行都带三重限制与内存监控。

## 5. 证据标准："确认"是什么意思

本文所有 🔒 结论至少满足下列之一（多数满足多项）：
1. **指纹**：源码独有常量/字符串（如 `0xe000`、`ZSWAP32` 的 `0xff00ff00`、`0x8b1f`、`"invalid bit length repeat"`）
2. **数据级**：二进制里的数据与源码逐项比对一致（如 `lbase/lext/dbase/dext` 四张表）
3. **布局闭合**：结构体尺寸/字段偏移与运行时分配合计相等（如 `inflate_state` = 7160 = `zcalloc(0,1,0x1bf8)`）
4. **多路互证**：两条独立路径得到同一结论（如调用面统计 = 反编译出的调用次数；仓库钉版 = 本机源码版本）
5. **对齐校验**：解析器对字节码作 100% 消费校验（`qjs_bc` 栈效应一致率 **99.91%**）

## 6. 复现

```powershell
# 引擎：字节码 → 伪 JS（全量，含指标）
python tools\pseudo_all.py                       # 输出 pseudo/ + pseudo_report.txt

# native：切片 → 受控分析 → 抽取 → 改写
python tools\window_plan.py <so> inflateGzipPayloadWithZlib     # 规划切片
python tools\elf_window.py <so> native\win_A.elf 0x520000:0x4000 0x6d9000:0x4000 0x9f000:0x2000
& tools\ghidra_run_guarded.ps1 -Bat <analyzeHeadless.bat> -CmdArgs @(...) -Out native\ghidra_winA.txt
python tools\ghidra_extract.py native\ghidra_winA.txt native\pseudocode
python tools\ghidra_annotate.py <原始伪码.c> <so> native\pseudocode\inflate.ANNOTATED.c

# 证据核对
python tools\re_bytecode.py <js>                 # 预编译正则 blob 解码
python tools\cpool_dump.py <js> 1 out.txt        # 常量池转储
```
（每次 Ghidra 运行前 `ghidra_run_guarded.ps1` 都会打印可用内存并强制限堆。）

## 7. 已知边界（诚实清单）

| # | 边界 | 说明 |
|---|---|---|
| 1 | 引擎 9 模块是**伪 JS**，非可编译源码 | 循环/逻辑结构经优化改写，需人工再整理；`PROFILE_pseudo.md` 有明细 |
| 2 | `inflate()` 本体的**变量类型**未全标注 | 字段已按 zlib 命名，但局部变量仍为 `uVar38` 之类 |
| 3 | 29 个"同 case 内内部块"仍是**位置命名**（`L_LEN_7` 等） | 它们在源码里也没有名字（编译器拆基本块的产物），**映射不到有意义标识符**，属可达上限 |
| 4 | 动态验证：**native 侧已完成**；引擎侧未做（⑤） | native：真机 frida 验证通过（字节一致 + 4 参 ABI + 解压逐字节一致 + 16 MiB 上限），并**捕获到引擎 `dlopen` 该库的真实时刻**，见 `native/RECON_inflate_realtime.md`。**真实调用（`gunzipUtf8`/`inflate`）未能观测，且已确认「场景不存在」**：服务端实发为**明文 `model_dil_v2` JSON**（`{type:"document",version:"v2",code:"…",children:[…]}`，经 `ModelWrittenDILDecoder` → `DILCompiler` → `ElementsRegistry` 渲染），**全链路不含压缩**；压缩路径需 `{__encoding:"gzip-json-base64url-v1"}` 形态，本流程不产生 ⟹ native inflater 属"**已注册、可调用、行为已验证，但当前移动端流程未触发**"。引擎侧（QuickJS/DIL 内部）仍需 hook，未做 |
| 5 | Valdi 运行时 / QuickJS 本体未还原（④） | 上游开源同源，按用户决定缓做 |
| 6 | 预编译正则 blob 的解码器只覆盖实际遇到的指令子集 | 格式已完全确定（`libregexp` 头 + 操作码表），但未实现全部操作码 |
| 7 | 三处工具的历史问题 | 技能自带 `elfinfo.py` 在 pyelftools 0.33 下报 `iter_relocations`（已用 `elf_sym.py` 替代） |

## 8. 支撑材料索引

| 想了解 | 看 |
|---|---|
| 引擎架构（渲染/身份/patch/沙箱/模块） | **`PROFILE_engine.md`**（25 项深读） |
| 伪 JS 方法与工具链 | `PROFILE_pseudo.md` |
| 字节码/结构还原 | `PROFILE_A.md`、`PROFILE_C.md`、`disasm/`、`structures/` |
| native 全貌（版本/结构/证据链/行号地图） | **`native/RECON_inflate.md`** |
| native `inflate()` 本体逐语句 | `native/RECON_inflate_body.md` |
| native `inflate_table()` 逐语句 | `native/RECON_inflate_table.md` |
| native 内联 `inflate_fast()` 逐语句 | `native/RECON_inffast.md` |
| native 伪代码成品 | `native/pseudocode/inflate.ANNOTATED.c`（1518 行） |
| native **真机运行时验证** | `native/RECON_inflate_realtime.md`（字节一致 / ABI / 解压逐字节一致 / 16 MiB 上限；含 7 个踩坑与复现） |
| 原始尝试与事故记录 | `native/REPORT_native.md`、`native/APPENDIX_B_pseudocode.md` |
| 覆盖率台账 | `COVERAGE.md` |
| **组件渲染层清单**（"按 JSON 的 type 用组件渲染"这条链） | **`RENDER_LAYERS.md`**（元素注册表 72/72 → 40 渲染器；widget 113；文本层；动态客户端组件机制） |
| **App 接入 Valdi + 引擎的地图**（开发阶段参照） | **`VALDI_INTEGRATION.md`**（三层结构 / 打包加载事实 / 宿主 Java 接入面 / native 模块注册机制 / 时序 / 官方仓库起步路径） |
| 导出面 / 函数摘要 / 常量真值 | `exports_*.txt`、`fndigest_dil_*.txt`、`const_dil_*.txt` |
| 组件层源码 | `recovered_sources/`（299 文件） |
| 宿主胶水 | `java_valdi/`（388 类） |
