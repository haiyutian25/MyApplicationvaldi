# ChatGPT 自研 DIL 引擎 — 提取完整度报告

- 样本：`com.openai.chatgpt` 1.2026.279（arm64，`base.apk` + `split_config.arm64_v8a.apk`）
- 手段：静态提取（容器格式从上游 Valdi 源码逆向还原）+ jadx 反编译
- 产出位置：`D:\valdi\com.openai.chatgpt\dil_engine\`
- 分析日期：2026-10-15

---

## 0. 结论：能"完整弄出来"，但要说清是哪种完整

| 层面 | 状态 | 说明 |
|---|---|---|
| DIL 的 11 个 Valdi 模块容器 | ✅ **100% 完整** | 全部原始 `.valdimodule` + 解包后 **871 个内部条目 / 9.2 MB** |
| 模块内的**文件与类清单** | ✅ **100% 完整** | 条目名未混淆（`src/DILRootComponent.js` 之类），引擎的全量文件树可见 |
| 字符串/标识符原子表 | ✅ **完整** | **19,535 条**唯一原子（类名、方法名、事件名、文案键） |
| Java/Kotlin 侧 | ✅ **100% 覆盖** | DEX 中 `com.openai.valdi.dil.**` **已定义类 17 个，全部反编译成功** |
| Valdi 生成的绑定类 | ✅ 已定位 | `com.snap.modules.dil_core.*` / `dil_compiler.*` 共 7 个 |
| **DIL 的 TypeScript 源码** | ⚠️ **分层不同** | **组件层已恢复源码**（见 §7 与 `PROFILE_A.md`）；**引擎层**仍为 QuickJS 预编译字节码，需反编译 |

一句话：**引擎的"全部素材 + 完整骨架 + Java 侧源码"已经拿到；但 TS 源码级还原需要额外做 QuickJS 字节码反编译。**

判定 TS 为字节码（而非源码）是**确定级**证据：所有 `.js` 条目以 `34 c6 00 01` 开头，即 Valdi 的 `kPreCompiledJsModuleMagic = 0x0100C634`（`valdi/src/valdi/runtime/JavaScript/JavaScriptUtils.cpp:811`），与资源类条目使用的 `0x0100C633`（`ValdiPacket`）区分开。

---

## 1. 交付物

```
dil_engine/
├── REPORT.md                       ← 本文件
├── valdimodules/
│   ├── dil_*.valdimodule  (11 个原始容器, 1.19 MB)
│   └── dil_*/…                     (解包后的 871 个条目, 9.2 MB)
├── atoms/  (11 个 *.atoms.txt)      ← 从字节码提取的字符串原子表
└── java/sources/com/openai/valdi/dil/…  (17 个 .java)
```

### 1.1 容器格式（逆向自上游源码，可复现）

```
.valdimodule = zstd( ValdiPacket )
ValdiPacket := u32 magic(0x0100C633) | u32 dataLen | data[dataLen]
data := entry*
entry := u32 nameLen(bit31=4 字节对齐填充) | name
       | pad(alignUp(len,4)-len)
       | u32 dataLen(bit31=4 字节对齐填充) | payload
       | pad(alignUp(len,4)-len)
```
依据：`valdi_core/cpp/Resources/ValdiPacket.cpp:20`、`ValdiArchive.cpp:17-63`。
每个 `payload` 若以 `0x0100C634` 开头即为 QuickJS 预编译模块（`JavaScriptUtils.cpp:811-816`）。

### 1.2 模块清单

| 模块 | 压缩 | 解压 | 条目 | `.js` 条目 | 唯一原子 |
|---|---:|---:|---:|---:|---:|
| `dil_core` | 56 KB | 239 KB | 107 | 42 | 1,180 |
| `dil_widgets` | 331 KB | 1.65 MB | 293 | 228 | 5,850 |
| `dil_generated_components` | 195 KB | 5.25 MB | 289 | 288 | 8,960 |
| `dil_icon_assets` | 426 KB | 494 KB | 5 | 2 | 36 |
| `dil_sandbox` | 51 KB | 213 KB | 38 | 37 | 1,066 |
| `dil_text` | 43 KB | 195 KB | 40 | 39 | 764 |
| `dil_charts` | 37 KB | 155 KB | 6 | 5 | 419 |
| `dil_renderer` | 34 KB | 126 KB | 27 | 26 | 529 |
| `dil_compiler` | 28 KB | 105 KB | 37 | 36 | 467 |
| `dil_cel` | 17 KB | 57 KB | 16 | 15 | 233 |
| `dil_math` | 2 KB | 4.5 KB | 2 | 1 | 31 |
| **合计** | **1.19 MB** | **8.5 MB** | **860+** | **719** | **19,535** |

### 1.3 从条目名恢复的引擎骨架（示例：`dil_core`）

条目名未混淆，因此**引擎的模块/类结构完整可见**：

```
dil_core/src/DILRootComponent.js          49,722 B   ← 根组件
dil_core/src/DILComponent.js              10,838 B
dil_core/src/DILAnchoredOverlayComponent.js 21,386 B
dil_core/src/DILPressFeedback.js           6,394 B
dil_core/src/DILAnchoredOverlayPlacement.js 6,170 B
dil_core/src/DILElicitationVisibility.js   3,484 B
dil_core/src/DILAnchoredOverlay.js         3,588 B
dil_core/src/DILDebugEventsRecorder.js     3,349 B
dil_core/src/DILSandboxCrashView.js        3,068 B
dil_core/src/DILStreamingJSONPatch.js      2,372 B
dil_core/src/DILCopyContentResolver.js     2,136 B
dil_core/src/DILTimer.js / DILInteraction.js / DILTextSelection.js / …
dil_core/strings/…                        (64 个字符串资源条目)
```

### 1.4 Java/Kotlin 侧（17/17）

| 类 | 大小 | 作用（据反编译观察） |
|---|---:|---|
| `DILValdiActionHandler` | 3.0 KB | **TS→Kotlin 回调契约**：`interaction` / `renderFailure` / `renderWarning` / `textSelectionCopyCompleted` / `copyContentResponse` |
| `DILWidgetActionHandler` | 1.6 KB | widget 动作回调 |
| `DILWidgetActionRequest` | 3.4 KB | 动作请求 DTO |
| `DILInteractionAttribution` / `DILMessageMetadata` | 2.5 / 5.3 KB | 交互归因、消息元数据 |
| `DILRenderMetricsContext` / `DILRenderFailureAction` / `DILRenderWarningAction` | 2.2 / 4.3 / 2.0 KB | 渲染指标与失败/告警上报 |
| `DILErrorMode` / `DILWidgetAction` / `DILInteractionAction` / `DILEntryPointComponent` / `DILEntryPointContainerGutter` | 1.8–3.5 KB | 枚举 / 动作 / 入口组件 |
| `widgets/DILSelectView` | **34.9 KB** | 原生下拉选择组件（Valdi 自定义 View） |
| `widgets/DILPopoverSheetView` | **21.1 KB** | 原生浮层组件 |
| `widgets/*AttributesBinder` ×2 | 4.0 / 4.6 KB | 属性绑定器 |

反编译质量示例（`DILValdiActionHandler`，Kotlin `@Metadata` 与 Valdi marshalling schema 均保留）：
```java
@prz0(propertyReplacements = "", proxyClass = ygs.class,
      schema = "'interaction':f|m|(r:'[0]'),'renderFailure':f|m|(r:'[1]'),…",
      typeReferences = {DILInteractionAction.class, DILRenderFailureAction.class, …})
public interface DILValdiActionHandler extends ValdiMarshallable { … }
// module id: modules_dil_widgets-dil_widgets_api_kt_kt
```

### 1.5 Valdi 代码生成绑定类（7 个）

`com.snap.modules.dil_core.{DILClientActionsUpdate, DILCopyContentRequest, DILCopyContentResponse, DILEventJSONPatch, DILEventRegistration, DILHostStateUpdate}`、`com.snap.modules.dil_compiler.DILErrorMode` —— 这些是 Valdi 从 TS `.d.ts` 自动生成的 Java 类（对应上游 `android_class_path = "com.snap.modules.<module>"`）。它们与 §1.4 接口一起，构成 **TS ↔ Kotlin 的完整契约面**。

---

## 2. 一个副产品结论

`DILEntryPointViewModel` 只在 `classes5.dex` 中以**返回类型描述符**出现一次（`prepareViewModelForContextCreation()Lcom/openai/valdi/dil/DILEntryPointViewModel;`），**DEX 的 class_defs 里没有它的定义**（全 APK 共 81,071 个类定义，`com/openai/valdi/dil` 下只有 17 个）。→ 💡 该类型定义已被 R8 剥离，仅遗留签名引用。

---

## 3. 还差什么：TS 源码还原的三条路

| 路径 | 做法 | 本机可行性 |
|---|---|---|
| A. 用 Valdi 自带 QuickJS 反序列化 | 构建上游 Valdi → 用其 QuickJS fork 加载 `0x0100C634` 负载，hook `JS_ReadObject` 拿 AST / 反汇编输出 | ❌ 本机是 Windows 且无法启用 WSL，构不了 Valdi |
| B. 对齐上游 QuickJS 字节码 | diff `JavaScriptUtils.cpp` 的序列化实现，用上游 `qjsc` / `qjs` 工具链尝试解析 | ⚠️ 需先确认 Valdi 对 QuickJS 字节码格式的改动幅度 |
| C. 动态还原 | 真机跑 ChatGPT，hook Valdi 加载 `.valdimodule` 的时机，在引擎内下发/转储 | ⚠️ 设备为 Android 9 **非 root**，需 gadget 注入或 Termux 侧方案 |

现阶段最实用的替代：**用 `atoms/*.atoms.txt` 读结构**（类名、方法名、事件名、文案键都在），配合 §1.3 的文件骨架和 §1.4 的接口契约，足以理解 DIL 的运行模型。

---

## 3.5 动态下发（设备实测，2026-10-15 补充）

用 root 检查真机（Redmi 6 Pro / Android 9 / Magisk）后发现：**App 实际运行的 DIL 模块不是 APK 里那份**，而是走 Valdi **动态下发（dynamic delivery）**拉取的更新版本。

### 3.5.1 设备侧证据

| 项 | 值 |
|---|---|
| 缓存目录 | `/data/data/com.openai.chatgpt/no_backup/valdi/dynamic_delivery/cache/` |
| 缓存包 | 2 个 `.bundle`：`1e4fb636….bundle`（4,877,664 B）、`8eeae3e7….bundle`（4,865,488 B） |
| 生效包 | `shared_prefs/valdi_last_active_runtime_selection.xml` → `release_id=eb163560f70afe62ab608aaeee821c951d90806f-vcd-…-38086557517-1`，即 **`1e4fb636….bundle`** |
| 兼容区间 | `compatible_app_versions`: `[1.2026.202, 1.2026.300)`，本机 1.2026.279 命中 |

### 3.5.2 下发包的元数据（`package/metadata.json`）

```json
{"package_format_version":1,"platform":"android",
 "release_id":"eb163560f70afe62ab608aaeee821c951d90806f-vcd-8002f577…-38086557517-1",
 "signature_algorithm":"ES256",
 "source_commit":"eb163560f70afe62ab608aaeee821c951d90806f",
 "strip_restricted":true}
```
包内另有 `package/signature.es256`（64 B）、`package/signing-key-id.txt`。**下发包经 ES256 签名**，非明文可改。

### 3.5.3 内容与 APK 的差异

- 容器同样是 `ValdiArchive`（magic `0x0100C633`），含 **85 个模块**（APK 内置 84 个）
- 多出的模块：**`widgets.valdimodule`（108,691 B）**，APK 里没有
- **11 个 DIL 模块里 5 个内容不同（动态版更新）**：

| 模块 | APK | 动态下发 | 逐条目差异 |
|---|---:|---:|---|
| `dil_core` | 56,313 | 56,836 | 新增 `src/layout/DILLegacyAndroidRootHeight.js`；`src/DILComponent.js` 变更 |
| `dil_widgets` | 331,453 | 334,749 | 新增 `DILProductAnalytics.js`、`DILProductAnalyticsMetadata.js`、`DILLegacyAndroidRootHeightMetrics.js`；9 个文件变更（`DILHostActionsHandler.js`、`widgets/{Box,Icon,Input,ClientDefinedWidget,SearchImage}.js`、`DILTextElementRenderer.js`、`DILEntryPointComponent.js`、`DILLinkMetadata.js`） |
| `dil_generated_components` | 195,258 | 196,238 | — |
| `dil_icon_assets` | 425,730 | 426,221 | — |
| `dil_renderer` | 34,313 | 34,340 | — |

### 3.5.4 结论：动态路线**不能**换来 TS 源码

- 动态下发的全部 85 个模块，其 `.js` 条目**依旧是 QuickJS 字节码**（同 `0x0100C634` 容器）
- 全包搜索 **无 `.map`**、无 `sourceMappingURL`（唯一命中是 `source_map` 模块自身）
- 上游 `JavaScriptUtils.cpp` 显示运行时**两种形态都支持**：`formatJsModule()` 用于纯 JS 源码、`getPreCompiledJsModuleData()` 用于字节码 → OpenAI 是**主动选择**对全部模块做 AOT 预编译，并非缺失能力

**净收益**：拿到了**真正在跑的那一版** DIL 引擎（比 APK 新），以及一个 APK 里没有的 `widgets` 模块；但**没有改变"TS 源码需靠字节码反编译"这个约束**。

---

## 7. 组件层源码已恢复（A 阶段成果，详见 `PROFILE_A.md`）

`dil_generated_components` 因 **DIL 运行时编译**的需要，把组件源码以长字符串常量内嵌在字节码中，并保留 `//#region <file>.dil.tsx` 原始文件边界。据此**无需反编译**即可还原：

- **299 个原始源文件**（244 `.tsx` + 53 `.ts`，约 2.1 MB），含 tab 缩进、注释、`@__PURE__` 标记
- 覆盖天气/航班/股票/账务/学习卡/临床评分小工具等 ChatGPT 生成式 UI 组件
- 复现：`tools/carve_sources.py` → `tools/split_regions.py`
- **边界**：仅 `dil_generated_components` 有效；`dil_core`/`renderer`/`compiler`/`sandbox`/`text` 等**引擎层仍是纯字节码**

## 8. 引擎层字节码已逆向（C 阶段 Stage-1，详见 `PROFILE_C.md`）

`0x0100C634` 负载 = **QuickJS `JS_WriteObject` 原始输出**（Valdi 仅加 4 字节 magic）。据仓库内 vendored QuickJS 源码逐字段还原格式并实现解析器 `tools/qjs_bc.py`：

- 🔒 **1051/1051 文件字节级完全对齐、0 失败**（8.53 MB 字节码）
- 提取 **10,387 个函数**：名称、参数数、局部/参数名、闭包变量、常量池、字节码长度、调试文件名
- 关键坑：动态原子基准实测为 **215**（非仓库 `quickjs-atom.h` 推出的 226），按"根函数 debug.filename → 动态原子 0"自动标定
- 产物：`structures/*.struct.txt`（14 份，含 11 个 `dil_*` + `widgets` + `valdi_core` + `foundation`）
- 未做：操作码级反汇编（Stage 2），材料已齐备（`quickjs-opcode.h` + short-opcode 重映射）

---

## 4. 证据与截图建议

| 结论 | 证据文件 | 建议截图 |
|---|---|---|
| 11 个模块全部提取 | `valdimodules/*.valdimodule` + 各模块目录树 | 目录树总览 |
| 静态字节码而非源码 | 任一 `.js` 条目前 4 字节 `34c6 0001` | 十六进制首行 + 上游 `JavaScriptUtils.cpp:811` 对照 |
| 原子表 | `atoms/dil_core.atoms.txt` | 前 30 行（可见 `DILRootComponent` 等标识符） |
| Java 侧完整 | `java/sources/.../DILValdiActionHandler.java` | 反编译源码前 27 行 |
| `DILEntryPointViewModel` 未定义 | `evidence_raw.txt` 中 `check_epvm.py` 输出 + `dex_classdefs` 结果 | 两段输出并排 |
