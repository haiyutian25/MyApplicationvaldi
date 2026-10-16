# 组件渲染层清单（"根据 JSON 用组件渲染 UI"这条链）

> 2026-10-16。回答"还原出的引擎里有没有用于渲染服务端 JSON 的组件"。
> 结论：**有，且成体系** —— 内置元素渲染器 + widget 组件 + 文本层 + 动态客户端组件机制。

---

## 0. 链路总览

```
服务端 JSON（model_dil_v2 / clientDefinedWidgets）
        ↓  chatgpt_services/src/generated_ui/ModelWrittenDILDecoder
           （校验 d.code 是 string → addChatGPTClientDefinedWidgetFallbacks）
        ↓  dil_compiler/src/DILCompiler
        ↓  dil_widgets/src/ElementsRegistry        ← 按 node.type 找渲染器
   ┌─────────────┬─────────────────┬──────────────────────┐
   内置元素渲染器     文本/markdown 层      客户端定义组件（动态）
   (40 个类)        (dil_text, 3 文件)     (DILClientDefinedWidget*)
        ↓                 ↓                        ↓
   Valdi UI 组件（widgets 113 个 / 动画 11 个 / 图表 ValdiChart …）
```

## 1. 元素注册表 → 渲染器：**72 / 72 全部有还原源，0 缺失**

`dil_widgets/src/ElementsRegistry.js` 共 **72 条**元素类型条目，逐条都能在还原出的源里找到对应渲染器类：

| 类别 | 例子（type → 类） |
|---|---|
| 容器/布局 | `box`→`DILBoxElementRenderer`、`col`/`grid`/`flow`/`grid-item`/`flow-item`→`DILComponentElementRenderer` |
| 卡片/列表 | `card`→`DILCardElementRenderer`、`list`→`DILListElementRenderer`、`list-item`→`DILListItemElementRenderer` |
| 交互 | `button`→`DILButtonElementRenderer`、`checkbox`→`DILCheckboxElementRenderer`、`form`→`DILFormElementRenderer`、`input`→`DILComponentElementRenderer` |
| 文本（同渲染器多 type） | `bold`/`italic`/`label`/`link`/`caption`/`code`→`DILTextElementRenderer` |
| 媒体/图表 | `image`→`DILImageElementRenderer`、`icon`→`DILIconElementRenderer`、`chart`→`DILComponentElementRenderer("chart", ValdiChart)`、`favicon`/`date-picker`/`divider`/`celebration`… |
| 轮播/动画 | `carousel`/`carousel-item`/`carousel-media-item`、`animate`/`animate-group`/`animate-item`、`flashcard-flip` |

**40 个渲染器类文件**（`dil_widgets/src/elements_renderer/`，262 KB）——其中 `DILComponentElementRenderer` 是**通用桥接**：
用 `new DILComponentElementRenderer("chart", ValdiChart)` 这种方式把多个 type 接到同一个 Valdi 原生组件。

## 2. widget 组件层

| 目录 | 文件数 | 体量 |
|---|---:|---:|
| `dil_widgets/src/widgets` | **113** | 1,129 KB |
| `dil_widgets/src/animation` | 11 | 142 KB |
| `dil_core/src`（布局/核心） | 27 | 225 KB |
| `dil_text/src`（文本/markdown） | 3 | 49 KB |
| `dil_charts/src` / `dil_math/src` | 1 / 1 | 1.6 / 6.9 KB |

`dil_widgets/src/WidgetsRegistry.js`：**117 条「名字 → 工厂」**（`Animate: a.AnimateWidgetFactory`、
`AudioPlayer: r.makeWidgetFactory…` …），并引用**三张** map：
`INTRINSICS_WIDGETS_MAP`、`DIL_TEXT_WIDGETS_MAP`、以及本地主表。

## 3. 文本节点（`heading` / `paragraph` 这类）

不在元素注册表，而在 **`dil_text/src/markdown/DILMarkdownComponent.js`**（该文件里出现
`heading`/`paragraph` ✓）。这类节点走 markdown/文本渲染层，不进元素渲染器表。

## 4. 🔒 动态组件机制：服务端可以"定义"新节点类型

`dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer.js`（10.5 KB）：

```js
this = new new.target(l.CLIENT_DEFINED_WIDGET_TYPE, l.ClientDefinedWidget);
```

- 该渲染器专门处理 **`CLIENT_DEFINED_WIDGET_TYPE`** 元素（即 `ElementsRegistry` 里
  `[CLIENT_DEFINED_WIDGET_TYPE] = new DILClientDefinedWidgetElementRenderer(...)` 那一条）
- 它读取响应里的 **`clientDefinedWidgets`**（`ChatGPTClientDefinedWidgetFallbacks` 里同样是
  `n = e.clientDefinedWidgets`）
- `dil_widgets/src/DILClientDefinedWidgetMapping.js` 负责 `type → widget` 的**动态映射**（`type` 判定 + 动态键访问）

⟹ **不在内置注册表里的 `type`，只要响应里带了定义，也能被渲染**。

`chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks.js` 的字面量显示它处理的是
一类**可视化组件**：`recharts-json`、`line`、`pie-chart`、`linear`、`blue`/`orange`、
`demand`/`supply`/`quantity`、`scrollable`、`resolved`。

## 5. 对用户示例载荷（`{type:"document", version:"v2", code:"intelligent-ui-demo", children:[…]}`）的落点

| 载荷 `type` | 落点 |
|---|---|
| `card` / `list` / `list-item` / `button` / `code` | ✅ **内置元素渲染器**（见 §1，均已还原） |
| `heading` / `paragraph` | ✅ **文本/markdown 层**（`DILMarkdownComponent`） |
| `document` / `progress` | ❓ 在还原出的引擎里**查不到同名节点类型**（全局搜只有无关功能里的 `"document"`=文档文件）⟹ 要么由 §4 的**服务端 `clientDefinedWidgets` 动态注册**，要么属**比本机 `1.2026.279` 更新的 schema** |
| `code: "intelligent-ui-demo"` | 走 `ModelWrittenDILDecoder` 的 `d.code` 分支 → `clientDefinedWidgets` 查表 |

## 6. 相关模块（同一条链上的其它环节）

- `dil_widgets/src/DILEntryPointComponent.js`、`DILRootComponent`（`dil_core`）—— 入口/根组件
- `DILCopyContentCollector` / `DILV2CopyContentCollector` / `DILCopyContentProvider` —— V2 复制内容收集
- `DILStateSnapshotCodec`（8192 B / 128 / 512 条目）—— 状态快照限额（与 native 的 16 MiB 构成两层限额）
