# A 阶段报告：DIL 静态深挖（含源码级突破）

- 目标：把上一轮 diff 出的"新版差异"读透，并尽可能还原 DIL 的可读结构
- 数据源：**动态下发版**（`eb163560…`，设备实测在跑的那一版）+ APK 基线版对照
- 日期：2026-10-15 ｜ 分级：🔒 确定 ｜ 🔍 确证 ｜ 💡 推断 ｜ ❓ 未知

---

## 1. 最大成果：DIL **组件库源码**已恢复（无需反编译字节码）

### 1.1 为什么能拿到源码

DIL 是**运行时编译**的 UI 语言：`dil_compiler` + `dil_sandbox` 在端上编译组件。因此组件源码必须随包携带——它以**长字符串常量**的形式内嵌在 `dil_generated_components` 的字节码里，并用打包器留下的 `//#region <file>.dil.tsx` / `//#endregion` 保留了原始文件边界。🔒

所以对**这一层**而言，"TS 源码拿不到"的结论不成立——不需要 QuickJS 反编译。

### 1.2 恢复结果

| 项 | 数量 |
|---|---|
| 生成组件模块文件（有内嵌源码） | 210 |
| **切分还原出的原始源文件** | **299**（244 `.tsx` + 53 `.ts` + 2 `.js`） |
| 体积 | **约 2.1 MB** |
| 覆盖率 | 组件层近乎逐行（保留 tab 缩进、注释、`@__PURE__` 标记） 🔒 |

**质量抽样**（`recovered_sources/WeatherWidgetWithSource.dil.tsx`）：

```tsx
function logOption(target, value) {
    GenUI.dispatchAction({
        type: "log_event", handler: "client",
        payload: { event_name: "chatgpt_widget_action",
            event_data: { widget_affordance: "OPTION", widget_action_target: target, ... } }
    });
}
function ResolvedWeather({ state, componentKey }) {
    const liveActivity = useIsLiveActivity();
    const { isDark } = DIL.useTheme();
    const [unit, setUnit] = DIL.useState(state.unit ?? state.initial_unit ?? "F");
    ...
    return /* @__PURE__ */ __dil.jsx("box", { width: "100%", padding: 2, theme: "dark", background: "surface" }, ...)
}
```

**组件族分布**（按文件名关键字，近似统计，完整清单见 `recovered_inventory.txt`）：

| 族 | 数量 | 代表文件 |
|---|---:|---|
| 金融/账务 | 28 | `LedgerCreditScoreWidget.dil.tsx`、`LedgerSpendSoFarThisMonthWidget.dil.tsx` |
| 学习/测验/记忆卡 | 21 | `internal/learning-flashcards.dil.tsx`(33 KB)、`internal/learning-quiz.dil.tsx`(29 KB) |
| 健康/评分/风险类小工具 | 98* | `CalculatorApacheIiScoreWidget`、`CalculatorTimiRiskWidget`、`internal/clinical-scorecards` |
| 天气 | 4 | `WeatherWidgetV3WithSource`、`WeatherCurrentWithSource`、`WeatherSidebarTitleWidget` |
| 航班/旅行 | 6 | `FlightResults`、`FlightSearchForm`、`FlightTracker`、`ReservationVoiceCard` |
| 股票/行情 | 5 | `StockComparisonChart`、`StockQuoteComparisonWidget` |
| 自动化/计划 | 7 | `AutomationPlanSummary` |
| 位置/地图 | 4 | `AskUserLocationV2` |
| 商品/购物 | 4 | `AsyncImageGroup`（含商品埋点链路） |

\* 该数字受关键字（`Score`/`Risk`）泛匹配影响，实际是"健康类小工具 + 共享 internal 文件"的合计。

### 1.3 复现路径（3 步，全部可重复执行）

```powershell
python tools\carve_sources.py <解包后的模块目录> <carved 输出>      200   # 捞长字符串常量
python tools\split_regions.py <carved 输出> <recovered_sources>          # 按 //#region 切回原文件
```

### 1.4 边界（诚实说明）

| 层 | 源码可得性 |
|---|---|
| `dil_generated_components`（组件层，288 条目） | ✅ **已恢复 299 个源文件** |
| `dil_core` / `dil_renderer` / `dil_compiler` / `dil_sandbox` / `dil_text` / `dil_charts` / `dil_cel` / `dil_math` / `dil_widgets`（引擎层） | ❌ 纯字节码，**需 C 阶段** |
| `valdi_core` 等框架模块 | ❌ 纯字节码（但上游开源仓库有同源代码，可对照） |
| 其它 73 个模块 | ❌ 未发现内嵌源码（唯一例外 `math_jax` 内嵌 MathJax SVG 字体数据）🔒 |

---

## 2. DIL 运行时结构（从原子流还原，🔍 确证）

原子按字节流出现顺序排列，能相当准确地还原 import 与调用顺序。

### 2.1 分层

| 模块 | 职责（据原子与文件骨架） |
|---|---|
| `dil_core` | 根组件 `DILRootComponent`、`DILComponent`、状态与可见性、`DILStreamingJSONPatch`（流式增量）、`DILAnchoredOverlay*`、`DILPressFeedback`、`DILTimer`、`DILAssetURLAuthorization` |
| `dil_compiler` | 把组件源码编译为可渲染结构；产出 `DILError`/`DILRenderState`/`DILThemeRenderState`/`DILContainerGutterRenderState` |
| `dil_renderer` | `DILRenderer`、`DILRenderFunctionRuntime`、`DILUserInteraction`、`DILApiFacade`、`PolyfilledTracer` |
| `dil_sandbox` | 沙箱执行、崩溃隔离、路径/网络策略校验（`DIL_LITERAL_SANDBOX_PATH_CAPABILITY`） |
| `dil_text` / `dil_charts` / `dil_cel` / `dil_math` | 富文本渲染、图表、CEL 表达式求值、数学排版 |
| `dil_widgets` | 宿主侧 widget（`DILSelectView`/`DILPopoverSheetView` 等原生组件 + `DILHostActionsHandler` 动作校验与派发） |
| `dil_generated_components` | **组件源码 + 解析包装**（`ResolvedComponent*`、`OpGenuiResolvedComponentBoundary`） |

### 2.2 组件侧 API 面（从恢复的源码直接读到）🔒

```ts
DIL.useState / useTheme / useAppData / useRef / useMemo / useEffect
__dil.jsx("box" | "row" | "image" | "pressable" | "label" | ...)
GenUI.dispatchAction({type, handler, payload})
GenUI.dispatchWidgetAction({..., nativeWidgetResolutionId, componentName})
GenUI.refreshWidget({...}) / GenUI.openImageLightbox(images, index)
DIL.useAppData((d) => d.opGenui)        // ← opGenui = 服务端下发的界面状态
```

### 2.3 动作与能力协商（🔒）

- 动作类型：`open_url`、`open_entity_detail`、`share`、`log_event`、`start_voice_mode`
- `handler` 三分：`client`（本地处理）/ `server` / 未指定；`share` 在 `handler=client` 且带 `share_options` 时由客户端接管
- 能力白名单：`opGenui.supportedClientActions`（如 `genui_link_impressions`、`DIL_ENTITY_REFERENCE_CAPABILITY`、`DIL_ENTITY_REFERENCE_READY_CAPABILITY`）
- 信任/沙箱：`DILTrustedNetworkPolicy`、`DILTrustedNetworkRenderState`、`DILAssetURLAuthorization`、`DIL_LITERAL_SANDBOX_PATH_CAPABILITY`

### 2.4 Widget 解析模型（🔒）

组件由 `props.__resolutionId` 与 `componentDataKey(componentName, props)` 双路查找 `opGenui.componentResults[id|key]`，状态含 `pending / resolved / failed`（`component_unavailable` / `tool_failed` / `invalid_tool_result`），外层由 `OpGenuiResolvedComponentBoundary` 兜底；widget 作用域通过 `widgetDIL/widgetGenUI` 注入 `widgetId` 与 `nativeWidgetResolutionId`。

### 2.5 埋点体系（🔒）

| 事件 | 载体 |
|---|---|
| `chatgpt_product_interaction` | Statsig（`__statsig_event_name`）+ protobuf `openai.buf.dev/openai/protobuf-analytics-events/protobuf_analytics_events.v1.ChatgptProductInteractionEvent` |
| `genui_link_shown` | link 曝光（`LinkImpression`，去重 `shownUrls`） |
| `chatgpt_widget_action` | widget 交互（`widget_affordance` / `target` / `value` / `surface_location`） |
| `dil.widget.legacy_android_root_height`、`dil.widget.native_fallback.selected` | 指标上报（经 `oai_metrics_service/src/ValdiMetricsReporting`） |

---

## 3. 动态版带来的能力变化（原子级 diff，🔒）

完整 diff 见 `PROFILE_atom_diff.txt`。要点：

| 文件 | APK → 动态 | 变化实质 |
|---|---|---|
| `dil_core/src/DILComponent.js` | 10,838 → 12,659 B | **可见性/视口测量重构**：`dispatchVisibleAction`、`onNextDraw`、`measureVisibilityAfterDraw`、`onViewportChanged`、`onVisibleKey`、`handleVisibilityLayout`，并接入 `elicitationShownHandler`/`elicitationHostUpdates`（征询弹层对可见性的影响） |
| `dil_widgets/src/DILProductAnalytics.js` | **新增** | 商品展示埋点：`enrichDILProductShownEvent`，把 `productId/Title/Url/Hostname/Merchants/Provider/Index/EventUuid` 等转成下划线命名的 protobuf 字段（`product_entity`、`message_id`、`conversation_id`…），补 `contentReferenceType/Id`，依赖 `coreutils/src/url`+`foundation/src/uuid` |
| `dil_widgets/src/DILProductAnalyticsMetadata.js` | **新增** | 从 `payload.category === "product"` 的动作里抽取 `analytics_meta` 与 `product_event_uuid`（`findLegacyProductEventUuid`） |
| `dil_widgets/src/DILLegacyAndroidRootHeightMetrics.js` | **新增** | 上报 `dil.widget.legacy_android_root_height`，含 `observation_version`/`dil_version`/`runtime_cohort`/`near_limit`/`tolerance` 等标签 |
| `dil_core/src/layout/DILLegacyAndroidRootHeight.js` | **新增** | `getDILLegacyAndroidRootMaxHeight`，按 `Device.isAndroid/isVersionAtLeast/getDisplayScale` 计算 |
| `dil_widgets/src/DILHostActionsHandler.js` | 30,298 → 30,506 B | 接入 `enrichDILProductShownEvent` 与新依赖 |
| `dil_generated_components/src/DILPublicComponentSources.generated.js` | 378,976 → 400,470 B | 新增 `LinkImpression` 组件与 `product-interaction-analytics.dil.ts` / `product-analytics.dil.ts`，含 `careProvider` 归属校验与 `telemetryUrl` 归一 |
| `LearningFlashcards` / `OpenLearningFlashcards` / `UpdateLearningFlashcards` | 各 ~80 KB → **各 ~39.8 KB** | **体积砍半**：抽公共 `internal/learning-flashcards.dil.tsx` + `shared.dil.ts`，改为 `createComponent(DIL, GenUI)` 作用域工厂 |
| `dil_widgets/src/widgets/ClientDefinedWidget.js` | 5,500 → 6,709 B | 新增 `native fallback` 指标（`dil.widget.native_fallback.selected`）、`AppBlockBindingBridge`/messenger |
| `elements_renderer/DILTextElementRenderer.js` | 35,237 → 36,010 B | 新增 `normalizeDILLinkHref` |
| `widgets/Box.js` / `Icon.js` / `Input.js` / `SearchImage.js` | 小幅 | 新增 `onVisibleKey`、`ariaHidden`+`ignored.accessibilityNavigation`、`minHeight`；`SearchImage` 加 webp base64 前缀处理 |

---

## 4. 新模块 `widgets`（APK 里完全没有）

`widgets.valdimodule`（108,691 B，140 条目 / 2,441 原子）——**不是 DIL，而是通用组件库**：

```
src/ColorSpec.js, Theme.js, InitSemanticColors.js, RegisterSemanticColors.js
src/styles/{gradients,semanticColors,semanticColorsGen,shadows}.js
src/components/animation/{AnimationRotate,Shimmer,Sliding,Squishy,VerticallyOpenable…}
src/components/button/{CoreButton,PillButton,Checkbox,ConfirmationButton,FloatingActionButton}
src/components/card/{Card,CollapsibleCard}   src/components/cell/{Cell,subtitle/*,title/*}
src/components/grid/GridView  src/components/indexview/*  src/components/inputs/{CoreTextField,PillTextField,FloatLabeledTextField,FormTextView}
src/components/dragdrop/DragDropController   src/components/image/{FadeImage,FadeView}
… 共 126 个组件文件
```

特征：语义色系统（`ColorSpec` + 生成式 `semanticColorsGen`）、动画、拖拽、IndexView（字母索引）、CoreTextField 等 —— 与 Snap 开源的 **Valdi_Widgets** 组件库同名同构。💡 推断：ChatGPT 把 Snap 的 Valdi 组件库作为动态模块下发使用。

---

## 5. 产物索引

| 路径 | 内容 |
|---|---|
| `recovered_sources/` | **299 个还原的 `.ts/.tsx` 源文件（2.1 MB）** |
| `recovered_inventory.txt` | 每个恢复文件的路径与大小 |
| `carved_sources/` | 未切分的原文片段（210 文件，2.59 MB） |
| `profiles/*.profile.txt` | 11 个 DIL 模块 + `widgets` 的逐文件原子流画像 |
| `PROFILE_atom_diff.txt` | APK↔动态 的原子级 diff（谁新增/消失哪些标识符） |
| `dynamic_modules/` | 动态版 85 个模块解包树（35.6 MB） |
| `dynamic_bundles/` | 2 个原始签名 bundle + `package/`（metadata/签名） |

---

## 6. A 阶段结论 & 交给 C 阶段的问题

**结论**：DIL 的**组件层已经是源码级可得**；引擎层仍是未解字节码。

**C 阶段目标**（字节码 → 可读代码）：
1. 先判定 Valdi 的 `0x0100C634` 负载是否为**上游 QuickJS `JS_WriteObject` 原格式**——`getPreCompiledJsModuleData()` 去掉 4 字节 magic 后直接交给 `JS_ReadObject`，🔍 高度可能一致。
2. 观察到的 payload 头部字段（`magic | 0x01 | <1–3 字节变长字段> | <模块路径> | <原子表>`）需与 QuickJS 的 `bc_version` + 原子表写法对齐，确认后即可手写解析器。❓ 待解
3. 若格式对齐，可用上游 `quickjs-opcode.h` 的语义实现**字节码反汇编器**（拿到可读指令流 + 原子引用），这是引擎层最现实的可读化路径。
4. 备选：Frida 侧调用引擎内已存在的字节码读取路径做 dump/反汇编（需 push frida-server）。

**优先级建议**：先做 1→2（纯静态、成本低、结论决定后续路线），再决定是否投入 3。
