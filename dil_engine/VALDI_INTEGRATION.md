# App 如何接入 Valdi + DIL 引擎（接入地图）

> 2026-10-16。目的：**把 ChatGPT(Android) 的接入方式讲清**，作为"自己开发"的参照。
> 证据来源：① 设备上 `libopenai_xplat_export.so` 的符号表（85,801 符号）② 宿主 388 个 Java 源
> ③ 本机官方 Valdi 仓库 `D:\valdi\Valdi` ④ 我们此前捕获的真机运行时事件。

---

## 1. 三层结构（谁是"Valdi 运行时"，谁在宿主管）

```
┌─ Java/Kotlin 宿主（388 个源，包名 com.openai.valdi.*）
│    · 每个界面 = Android 布局里放 **生成的** com.snap.valdi.views.ValdiGeneratedRootView
│    · 数据/回调经 ValdiMarshaller / ValdiFunctionNative 与 JS 互通
│    · 生命周期/上下文经 ValdiContext、Promise、BridgeObservable
│
├─ JNI 边界：**92 个 `Java_com_snapchat_client_valdi_1core_*` 入口**（Valdi 的 CppProxy 模式）
│
├─ 单个 native 库：libopenai_xplat_export.so（17.3 MB，85,801 符号）
│    · Valdi 运行时本体：**13,707 个含 Valdi 的符号**（其中 `snap::valdi` 内核 1,531）
│    · **QuickJS 静态链入**：910 个（`JS_*` API 184 + `js_*` 内部 726）—— **无 Hermes/V8**
│    · `zoo::` Valdi 基础设施（反射/类型/序列化）1,895
│    · native 模块宿主：520 个 `*ModuleFactory` / `RegisterModuleFactory` 相关符号
│
└─ JS/DIL 层（QuickJS 里跑）
     · Valdi stdlib + 引擎模块（`dil_core`/`dil_renderer`/`dil_compiler`/`dil_sandbox`/`dil_text`/
       `dil_widgets`/`dil_charts`/`dil_cel`/`dil_math` …）
     · DIL 渲染链：服务端 JSON → ModelWrittenDILDecoder → DILCompiler → ElementsRegistry → Valdi 组件
```

**要点**：Valdi 的**运行时（含 JS 引擎）不在 Java 侧，也不在独立的 libquickjs.so 里，而是全部静态打进这一个 `.so`**；Java 侧只通过生成的 JNI 代理访问它。这也解释了为什么这个 App 的 APK 里没有 `libquickjs.so` / `libvaldi.so` 之类的独立库。

## 2. 打包/加载事实（决定"怎么接"）

| 事实 | 值 | 影响接入的地方 |
|---|---|---|
| `lib/arm64-v8a/` 下 11 个 `.so` | 其中 `libopenai_xplat_export.so` = 17,298,088 B | 接入方只需关心这一个（+ 系统库依赖） |
| **`extractNativeLibs=false`** | `/data/app/.../lib/arm64/` 为空 | 库**不落地**，直接从 `split_config.arm64_v8a.apk` 内 **mmap** |
| 该 .so 的 `DT_NEEDED` | `libandroid/libdl/liblog/libm/libz/libEGL/libGLESv3/libjnigraphics/libc` | **只有系统库**，可独立加载（我们据此在真机上 dlopen 成功） |
| **懒加载** | 冷启动后 243 个模块里没有它 | 只有**首次渲染 Valdi/DIL 界面**时才由引擎 `dlopen` |
| 真机实测 | `dlopen("<apk>!/lib/arm64-v8a/libopenai_xplat_export.so")` → `base=0x7cd8291000` | 打开 DIL 对话瞬间触发（已捕获事件） |

## 3. 宿主 Java 侧的接入面（388 个源实测用量）

包分布（前几）：

| 包 | 文件 |
|---|---:|
| `com.openai.valdi.collaborativeeditor` | 99 |
| `com.openai.valdi.oai.platform` | 47 |
| `com.openai.valdi.chatgpt.subscription.pricing` | 41 |
| `com.openai.valdi.chatgpt.multiplayer` | 19 |
| `com.openai.valdi.voice` | 17 |
| `com.openai.valdi.chatgpt.finance.connections` | 14 |
| `com.openai.valdi.integrity` | 14 |
| `com.openai.valdi.chatgpt.wallet.core` | 13 |
| **`com.openai.valdi.dil`** | **13**（如 `DILPopoverSheetView.java`） |
| `com.openai.valdi.chatgpt.maps` | 11 |

被 Java 侧引用的 **Valdi API**（Top）：

| API | 次数 | 作用 |
|---|---:|---|
| `com.snap.valdi.callable.ValdiFunctionNative` | **357** | JS ↔ native 函数桥（每个生成类的回调都走它） |
| `com.snap.valdi.utils.ValdiMarshaller` | 78 | **值编组**（Java ↔ Valdi 值/对象传递） |
| `com.snap.valdi.utils.ValdiMarshallable` | 71 | 可编组类型标记 |
| `com.snap.valdi.views.ValdiGeneratedRootView` | **32** | **界面根视图**（生成类；放进布局即接入） |
| `com.snap.valdi.views.ValdiTextView` | 17 | 原生文本视图（自定义视图场景） |
| `com.snap.valdi.promise.Promise` | 12 | 异步桥 |
| `com.snap.valdi.bridge_observables.BridgeObservable` | 9 | 可观察数据桥 |
| `com.snap.valdi.context.ValdiContext` | 5 | **运行时上下文**（视图挂载/生命周期） |
| `ValdiRootView` / `ValdiView` / `ValdiScrollView` | 各 1 | 基础视图 |

**接入模式（可照抄）**：

1. Valdi 组件（TS）经 **Valdi 编译器**生成 Java 类 → 其中根视图是 `ValdiGeneratedRootView` 子类；
2. Activity/Fragment 的布局里放这个生成视图（App 里 32 处这么用，涵盖 Explore/GlobalSearch/Finance/Maps/订阅页…）；
3. 需要往 JS 传数据 / 接 JS 回调 → `ValdiMarshaller` + `ValdiFunctionNative`；
4. 视图生命周期与运行时上下文 → `ValdiContext`。

## 4. native 模块注册机制（"这个引擎"怎么挂进去）

我们在真机与反汇编中都验证过：

```asm
; 库加载时（_GLOBAL__sub_I_CompressedWidgetStateInflater.cpp @0x460dd4）
bl  #0x69705c   → Valdi::RegisterModuleFactory(...)          /* 自注册 */
; 引擎装载模块时（工厂 onLoadModule @0x520e2c）
bl  #0x522b3c   → CompressedWidgetStateInflaterModule::getRegisteredClass()
bl  #0x6971c0   → Valdi::CppGeneratedInterface::CppGeneratedInterface(RegisteredCppGeneratedClass*)
```

⟹ **`dlopen` → 静态初始化里 `RegisterModuleFactory` → 引擎调 `onLoadModule()` →
`getRegisteredClass()` → `CppGeneratedInterface`** → JS 侧 `require("dil_compiler/src/CompressedWidgetStateInflater")`
即可拿到 native 方法（如我们的 `gunzipUtf8`）。**接入方不需要写 JNI**，只要用 Valdi 的模块脚手架。

## 5. 时序（冷启动 → 首次 DIL 渲染）

```
App 冷启动 ──► 宿主 Activity/布局（此时**不需要** Valdi native）
      │
      ├─ 用户进入某个 Valdi/DIL 界面
      │        │
      │        ├─ 引擎 dlopen("<apk>!/lib/arm64-v8a/libopenai_xplat_export.so")   ← 真机已捕获
      │        ├─ 静态初始化 → Valdi::RegisterModuleFactory（各 native 模块自注册）
      │        ├─ 引擎 onLoadModule() → getRegisteredClass() → CppGeneratedInterface
      │        └─ QuickJS 起 + 载入 JS 模块（dil_* stdlib/引擎模块）
      │
      └─ 服务端 JSON（model_dil_v2 / clientDefinedWidgets）
               └─ ModelWrittenDILDecoder → DILCompiler → ElementsRegistry → Valdi 组件 → 原生视图
```

## 6. 自己开发时的起步路径（本机就有官方仓库）

仓库：**`D:\valdi\Valdi`**（官方 Valdi，MIT，beta；TS → iOS/Android/macOS 原生 UI，无 WebView/无 JS bridge）

| 想要 | 看这里 |
|---|---|
| 环境安装 | `docs/INSTALL.md`（README 里链接） |
| **Android 接入原生**（最相关） | **`docs/codelabs/integration_with_native/android/`**（含 5 个步骤，如 `5-android_testing.md`） |
| 原生绑定/注解 | `docs/docs/native-bindings.md`、`docs/docs/native-annotations.md`、`docs/docs/native-customviews.md` |
| 元素/样式 API | `docs/api/api-reference-elements.md`（62 KB）、`docs/api/api-style-attributes.md`（41 KB）、`docs/api/api-quick-reference.md` |
| 从其它框架迁 | `docs/docs/start-from-react.md`、`migrate-from-compose.md`、`migrate-from-flutter.md` |
| 示例工程 | `apps/helloworld`（56 文件，最小可用）、`apps/valdi_gpt`（31）、`apps/webview_example`、`apps/navigation_example`、`apps/managed_context_example`、`apps/snapshot_tests`（79） |
| 编译器/CLI/工具 | `compiler/`（841）、`tools/`（563）、`docs/docs/command-line-references.md` |
| stdlib 模块（可放自己的 `dil_*`） | `src/valdi_modules`（908） |
| 给 AI/协作者的仓库约定 | `AGENTS.md`（36 KB） |

**与 App 的对应关系**（把 App 的做法映射到开源侧）：

| App 里看到的 | 开源 Valdi 侧 |
|---|---|
| `com.snap.valdi.views.ValdiGeneratedRootView` | Valdi 编译器为每个组件生成的 Java 根视图 |
| `ValdiMarshaller` / `ValdiFunctionNative` | 官方"值与函数桥"（见 `native-bindings.md`） |
| `ValdiContext` | 官方运行时上下文 |
| `libopenai_xplat_export.so`（Valdi+QuickJS+模块 一体） | 开源构建里对应的 Valdi 运行时产物（+ 官方 CLI 构建链） |
| `RegisterModuleFactory` / `CppGeneratedInterface` | 官方 native module 脚手架（`docs/docs/native-bindings.md`） |

## 7. 给"开发阶段"的三条最短路径

1. **先跑通官方 Hello World**：`apps/helloworld` + `docs/INSTALL.md` → 确认本机编译链（Bazel）能出 Android 包。
2. **照 Android 接入 codelab 做一遍**：`docs/codelabs/integration_with_native/android/` → 这一步产出的就是"自有 App 里嵌 Valdi 界面"的最小骨架。
3. **对齐样式/元素 API**：`api-reference-elements.md` + `api-style-attributes.md`（我们还原出的 `ElementsRegistry` 72 条元素类型与之同源，可直接对照；`dil_widgets/src/elements_renderer` 40 个渲染器是这些元素的生产实现）。

> 若目标是把**DIL 引擎**（服务端 JSON → 组件渲染）也复刻进自己的 App：需三样 ——
> ① Valdi 运行时（开源仓库构建）② native 模块宿主 `.so`（模块工厂 + `CppGeneratedInterface`）
> ③ DIL 引擎 JS 包（我们已还原的 `dil_*` 9 个模块）。第 ③ 条正是本项目 ② 号任务的全部内容。
