# ChatGPT Android 1.2026.279 — Valdi 集成形态分析报告

- 样本：`ChatGPT-com.openai.chatgpt-1.2026.279.apks`（MD5 `32853224F89048C1BC7FFACC721CA4B7`，83 MB）
- 包名：`com.openai.chatgpt` ｜ versionCode `2627911` ｜ targetSdk/compileSdk **37**
- 分析方式：静态（aapt2 / zip / DEX & ELF 字节级扫描），对照上游 `d:/valdi/Valdi` 源码与官方文档
- 分析日期：2026-10-15

---

## 0. 结论

**是"原生 Android 工程 + 内嵌 Valdi 框架"，不是"独立（standalone）Valdi 框架实现"。**

更精确地说，它走的是 Valdi 官方的 **`valdi_exported_library` 外部构建系统集成模式**（文档 `docs/docs/workflow-external-build-system.md`）：OpenAI 把一整套 Valdi 模块编译成一个自包含的 native 库 `libopenai_xplat_export.so`（内含 Valdi 运行时 + QuickJS 引擎 + 84 个 `.valdimodule`），再通过 `System.loadLibrary` 挂进一个体量远大于它的原生 App（KMP + Jetpack Compose）里，仅由 Valdi 承载部分业务界面。

证据分级：🔒 确定 ｜ 🔍 确证 ｜ 💡 推断 ｜ ❓ 未知

---

## 1. 判定依据

### 1.1 宿主是原生工程（该形态即排除 standalone）

| 证据 | 内容 | 等级 |
|---|---|---|
| 入口组件 | `AndroidManifest` 中 Application = `com.openai.chatgpt.app.MainApplication`，启动 Activity = `com.openai.chatgpt.MainActivity` —— 均为 OpenAI 自有业务命名空间，**不是** Valdi 生成的应用壳 | 🔒 |
| 自研业务框架 | `com.openai.feature.auth.impl.*`（含 `ChatGptAuthTokenService`）、`com.openai.feature.artifactlibrary.impl`、`com.openai.platform.appstate.AppState`、`com.openai.serialization.Fallback` | 🔒 |
| 体量 | 8 个 DEX（`classes.dex`~`classes8.dex`）合计 **66.7 MB**，`resources.arsc` + 2242 条 `res/` | 🔒 |
| 第三方栈 | Google Play services（30+ 模块）、MLKit、Stripe、WorkManager、CustomTabs、`com.google.android.finsky` 计费、Samsung/HeyTap/vivo 归因 Provider | 🔒 |
| 主 UI 栈 | Compose Multiplatform 资源 `assets/composeResources/**`；KMP 包名 `com.openai.apps.app.base.impl.kmp`、`com.openai.kmp.platform.charts`；DEX 中 `androidx/compose` 类引用 115+63+44+31+56+30 次 | 🔒 |

→ 该 App 是标准的大型原生工程，Valdi **不**是它的工程骨架。

### 1.2 Valdi 以"导出库"形式内嵌（官方 external-build-system 模式）

| 证据 | 内容 | 等级 |
|---|---|---|
| 导出库命名 | `lib/arm64-v8a/libopenai_xplat_export.so`（17.3 MB）—— 遵循官方约定 `System.loadLibrary("<valdi_exported_library 名>_export")` | 🔍 |
| 代码侧加载名 | `classes7.dex` 中存在字符串 `openai_xplat_export`（与上述 .so 同名，即 `loadLibrary` 的目标） | 🔒 |
| native 运行时在库内 | 该 .so 内含 DJinni/CppProxy JNI 符号 `Java_com_snapchat_client_valdi_RuntimeMessageHandler_00024CppProxy_nativeDestroy`；`valdi` 字符串 1958 处；`RuntimeManager` 87 处；`ModuleLoader` 2 处；`Invalid JS engine VM provided`、`com.snap.valdi.views.ValdiView` | 🔒 |
| 模块归档 | `base.apk` 的 `assets/` 下有 **84 个 `.valdimodule`**（Valdi 模块编译产物），合计 4.5 MB；含 `valdi_core.valdimodule` 这类框架模块 | 🔒 |
| Java 侧运行时 | DEX 中 `com/snap/valdi/**` 类引用 361 次（29 个包：`utils`/`navigation`/`views`/`callable`/`promise`/`context`/`modules/*`/`bridge_observables`/`snapdrawing`…） | 🔒 |
| C++ 侧绑定 | `com/snapchat/client/valdi_core/**` 75 次（`Cancelable`/`HTTPHeader`/`HTTPRequest`/`Asset`…） | 🔒 |

对照官方文档原文："The built framework is **self contained**: it has the compiled Valdi modules including compiled TS sources, **as well as the Valdi runtime itself**" —— 与观测完全一致。

### 1.3 OpenAI 在其上做了深度定制（不是简单套壳）

| 证据 | 内容 | 等级 |
|---|---|---|
| 自研 Valdi 层 | `com/openai/valdi/**` 类引用 **1178 次**，覆盖 38 个包 | 🔒 |
| 业务模块 | `collaborativeeditor`(424)、`oai/platform`(144)、`chatgpt/subscription/pricing`(103)、`chatgpt/multiplayer`(60)、`chatgpt/wallet/core`(57)、`dil`(45)、`chatgpt/finance/connections`(44)、`voice`(36)、`chatgpt/maps`(22)、`integrity`(19)、`olympic/records`(19)、`celsius`(16)、`filepicker`(15)、`audio`(13)、`lottie`(10)、`location`(10)、`ui/safearea`(7)、`memory/settings/ui`(6)… | 🔒 |
| 把自研指标塞进框架命名空间 | `com/snap/valdi/oai/platform/OAIHistogramMetric`、`OAIMetricsService`、`OAICounterMetric` | 🔒 |
| Compose 互操作 | `com/openai/valdi/compose/ComposeValdiRootView` —— 自研组件，把 Valdi 的 RootView 包装成 Compose 节点，实现 Compose 页面内嵌 Valdi 视图 | 🔒 |
| 自建生命周期 | `ValdiRuntimeProvider`、`getInitializedRuntime()Lcom/snap/valdi/IValdiRuntime;`、`createLazyValdiContext(Lcom/snap/valdi/IValdiRuntime;…)`；而公开示例中的 `SupportValdiRuntimeManager` 在 DEX 中**未出现** → 他们用了内部/定制版运行时接入层 | 🔍 ／ 💡 |

### 1.4 运行时细节

| 项 | 结论 | 等级 |
|---|---|---|
| JS 引擎 | **QuickJS**（符号 `Valdi::QuickJS::QuickJSJavaScriptContextFactory`、`Valdi::QuickJS::QuickJSJavaScriptContext`、`Valdi::IJavaScriptBridge`）。字符串 `Requested Hermes VM, which is not available on this build type.` / `Requested JSCore VM, which is not available on this build type.` 表明 Hermes/JSCore 仅为编译期可选项，本版本未启用 | 🔍 |
| `.valdimodule` 容器 | **zstd 压缩归档**（magic `28 B5 2F FD`，解压成功）。头部为索引，内嵌条目如 `src/ChatGPTApplication.js`、`strings/strings-zh-Hant.json`、`tsconfig.json`；上游 `bzl/android/package_aar.bzl` 亦使用 `//tools/zstd:zstd` | 🔒 |
| 打包模式 | `chatgpt_family.valdimodule` 解压 5.05 MB、可打印字符 89.5%、含 `function(`×178 / `return`×822 → **JS 源码模式**；而 `valdi_core.valdimodule` 可打印字符仅 23.6% → 疑为字节码模式。**按模块混用** | 💡 |

---

## 2. 三层结构

```
┌─────────────────────────────────────────────────────────────┐
│ 原生宿主 App  com.openai.chatgpt 1.2026.279                 │
│  MainApplication / MainActivity（自有）                      │
│  KMP + Jetpack Compose（主 UI，androidx.compose 数百处引用） │
│  Compose Resources / MLKit / Play services / Stripe …        │
│                                                             │
│   ┌───────────────────────────────────────────────────────┐ │
│   │ Valdi 层（OpenAI 自建胶水 com.openai.valdi.**）        │ │
│   │  ComposeValdiRootView ←→ ValdiRootView                │ │
│   │  com.snap.valdi.** Java 运行时（361 次引用）           │ │
│   │  libopenai_xplat_export.so（17.3 MB）                  │ │
│   │    └ Valdi C++ 运行时 + QuickJS 引擎                   │ │
│   │    └ JNI: Java_com_snapchat_client_valdi_*             │ │
│   │    └ assets/*.valdimodule × 84（4.5 MB，zstd 归档）    │ │
│   │        chatgpt_* / oai_* / dil_* / valdi_core / …      │ │
│   └───────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Valdi 承载的业务面（84 个模块）

| 分类 | 模块 | 说明 |
|---|---|---|
| 框架自带（与上游 `src/valdi_modules` 同名） | `valdi_core`、`valdi_http`、`valdi_navigation`、`valdi_rxjs`、`valdi_tsx`、`valdi_webview`、`bridge_observables`、`coreutils`、`foundation`、`persistence`、`source_map`、`worker` | 12 个，可确认为框架模块 🔍 |
| 框架风格但上游公开仓库未见 | `valdi_ui`、`valdi_ui_theme`、`valdi_platform_alert`、`valdi_platform_browser`、`valdi_root_safe_area`、`valdi_test_utils` | 可能是 Valdi 内部更新版自带，也可能是自建 ❓ |
| ChatGPT 业务 | `chatgpt_application`、`chatgpt_family`、`chatgpt_finance{,_accounts,_connections,_transactions}`、`chatgpt_wallet{,_core,_approval}`、`chatgpt_maps`、`chatgpt_multiplayer`、`chatgpt_explore_feed`、`chatgpt_library`、`chatgpt_global_search`、`chatgpt_services`、`chatgpt_subscription_pricing`、`chatgpt_beacon_artwork` | 明确自建 🔒 |
| OAI 平台/工具 | `oai_authentication{,_session}`、`oai_core`、`oai_ui`、`oai_data_sources`、`oai_device_integrity`、`oai_file_picker`、`oai_location_service`、`oai_metrics_service`、`oai_platform_services`、`oai_reasoning_api`、`oai_voice_service`、`oai_web_launcher`、`oai_celsius` | 明确自建 🔒 |
| 内容渲染/编辑器 | `markdown`、`markdown_diff`、`math_jax`、`math_renderer`、`latex`、`svg`、`cel`、`collaborative_editor`、`settings_text_editor`、`custom_instructions_ui`、`memory_settings_ui`、`personalization_settings_ui` | 明确自建 🔒 |
| 自研 UI 引擎 `dil_*`（11 个） | `dil_core`、`dil_cel`、`dil_charts`、`dil_compiler`、`dil_generated_components`、`dil_icon_assets`、`dil_math`、`dil_renderer`、`dil_sandbox`、`dil_text`、`dil_widgets` | 自研，规模可观（`dil_widgets` 331 KB、`dil_icon_assets` 426 KB） 🔒 |
| 其他 | `audio_player`、`client_sql`、`json_patch`、`mobile_file_saver`、`native_menu`、`ecosystem_instrumentation`、`web_platform`、`olympic_{analytics,connections,health_home,records}` | 自建 🔒 |

> `dil_*` 系列（含 `DILValdiActionHandler`、`DILWidgetActionRequest`、`DILInteractionAttribution`）推测是 ChatGPT 的**生成式 UI / widget 渲染子系统**（💡 推断，命名与 `generated_components`+`sandbox`+`compiler` 组合符合"服务端下发界面、端上编译渲染"的形态）。

---

## 4. 未决项与下一步

| 未决项 | 建议取证路径 | 等级 |
|---|---|---|
| `valdi_ui*` / `valdi_platform_*` 能否归入框架自带 | 与 Valdi 内部版本（非公开 beta）对照，或查 `.valdimodule` 内 `tsconfig.json` 的 `extends` 路径 | ❓ |
| `System.loadLibrary("openai_xplat_export")` 的确切调用点与 runtime 初始化位置 | `jadx` 反编译 `classes7.dex`，检索 `loadLibrary` 与 `getInitializedRuntime` 交叉引用 | ❓ |
| JS 源码 vs 字节码的精确模块分布 | 批量解压 84 个 `.valdimodule`，统计可打印率与 QuickJS 字节码头 | ❓ |
| 动态验证（如热更/模块加载时机） | 设备 **非 root**（Redmi 6 Pro / Android 9），只能走 gadget 注入或 Termux 侧方案 | — |

---

## 5. 证据文件与截图建议表

| 结论 | 证据载体 | 建议截图 |
|---|---|---|
| 是原生工程 | `manifest_facts` / `aapt2 dump badging` 输出 | 终端 `aapt2 dump badging` → `package:`/`launchable-activity:` 行 |
| 内嵌 Valdi 导出库 | `lib/arm64-v8a/libopenai_xplat_export.so` + DEX 字符串 `openai_xplat_export` | 压缩包内 `lib/` 列表；`integration_scan.txt` 的 JNI 符号行 |
| 84 个 Valdi 模块 | `base.apk!/assets/*.valdimodule` | 资产清单（84 行）截图 |
| OpenAI 深度定制 | `com/openai/valdi/**` 类引用统计 | `inventory.txt` 的 [A]/[B] 表 |
| QuickJS 引擎 | `Valdi::QuickJS::*` 符号、`Invalid JS engine VM provided` | `details.txt` 的 `QuickJS` 上下文 |
| zstd 容器 | `.valdimodule` magic `28b52ffd` + 解压后条目名 | `details.txt` 的 `.valdimodule 容器` 段 |

### 本目录文件

| 文件 | 用途 |
|---|---|
| `REPORT.md` | 本报告 |
| `splits/` | 解包后的 4 个 split APK（base / arm64_v8a / xxhdpi / zh） |
| `dil_engine/` | **DIL 引擎提取产物 + 专项报告**（见 `dil_engine/REPORT.md`） |
| `evidence_raw.txt` | 全部扫描脚本的原始输出汇总 |
| `tools/scan_valdi_markers.py` | Valdi 指纹初筛（DEX + ELF） |
| `tools/scan_integration.py` | 集成形态定性（JNI 桥 / 导出库 / 宿主 UI 栈） |
| `tools/scan_inventory.py` | Valdi 类引用清点 + JS 引擎识别 |
| `tools/scan_details.py` | 引擎归属与 `.valdimodule` 容器确认 |
| `tools/scan_payload.py` | payload 形态（源码 vs 字节码）与加载点 |
| `tools/extract_dil.py` | `.valdimodule` 容器解包（zstd + ValdiPacket + ValdiArchive） |
| `tools/extract_atoms.py` | 从预编译字节码提取字符串原子表 |
| `tools/dex_classdefs.py` | 解析 DEX class_defs，输出权威「已定义类」清单 |
| `tools/list_dil_classes.py` / `list_dil_bindings.py` | 枚举 DIL 类与 Valdi 生成绑定类 |
| `tools/run_jadx_batch.py` | 受控并发调用 jadx 反编译目标类 |
| `tools/inspect_dil.py` / `check_epvm.py` | 产物形态核查 |
