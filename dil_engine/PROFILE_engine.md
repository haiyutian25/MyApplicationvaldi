# DIL 引擎架构解读（依据：伪 JS 产物）

- 依据：`pseudo/<模块>/src/*.pseudo.js`（85 模块 / 1,365,526 指令，栈效应一致 99.91%）
- 入口：`exports_map.txt`（模块导出面）、`structures/*.struct.txt`（函数/局部/闭包）
- 日期：2026-10-15 ｜ 分级：🔒 确定（伪码直读）｜🔍 确证（多文件互证）｜💡 推断

> 读法：本文每条结论都标了伪码出处。伪码里 `e`/`r`/`t` 等是**被压缩后的真实局部变量名**
> （局部名来自字节码 vardef，未被混淆工具改名），函数名多为 `<atom:0>`（匿名闭包）。

---

## 1. 一句话

DIL 是 **"JSON 描述 → 解析 → 源码求值（注入 JSX runtime）→ 渲染器对象树 → Valdi 视图"** 的
**生成式 UI 运行时**；`<Each>` / `<Show>` / `<Scope>` 是它的三件内建控制流。

## 2. 编译流水线（`dil_compiler`）

### 2.1 输入是 JSON，不是自定义二进制 🔒

`src/DILParser.js` 第一个函数：

```js
t = undefined;
try {
  t = JSON.parse(e);
  JSON.parse(e);
} catch (i) {
  if (!(i instanceof Error)) goto L_88;
  throw new r.DILDiagnosticError({
      phase: "DIL JSON parse",
      message: "Invalid DIL JSON: failed to parse JSON string.",
      sourceError: undefined});
}
return n(t, o);   // tail call → 交给下一阶段
```

→ DIL 组件以 **JSON 文档**下发给端上，解析失败抛 `DILDiagnosticError`（带 `phase` 字段，说明是分阶段流水线）。

### 2.2 编译器是个带依赖注入的类 🔒

`src/DILCompiler.js` 构造函数（7 个参数 → 7 个字段）：

```js
this.widgetsMap = e;
this.elementsMap = r;
this.elementRenderObserver = t;
this.celExpressionResolver = o;      // CEL 表达式求值器
this.errorReporter = i;
this.listener = n;
this.fixedTimeMs = s;                // 固定时间（可测试性/确定性渲染）
this.failedCompilationInputs = new WeakMap();
this.isCompiling = false;
this.didReportCompilationError = false;
this.reportError = function <atom:0>;
```

编译入口是薄封装 → **tail call** 进核心：

```js
return this.compileInternal(e, r);   // tail call
```

### 2.3 模块构成（`dil_compiler` 34 文件 / 85 导出名）

| 分组 | 文件 |
|---|---|
| 解析/校验 | `DILParser`、`DILTypes`、`DILJsonValidation`、`DILPropertiesSchema`、`DILNodePath` |
| **渲染状态族** | `DILRenderState`、`DILRenderChildState`、`DILStreamingRenderState`、`DILThemeRenderState`、`DILWarningRenderState`、`DILAutoSpacingRenderState`、`DILContainerGutterRenderState`、`DILTableCellRenderState` |
| **Widget 渲染器族** | `DILDiagnosticWidgetRenderer`、`DILEmptyWidgetRenderer`、`DILTransparentWidgetRenderer`、`DILInitialStateScopeWidgetRenderer`、`DILValdiComponentRenderer`、`DILWidgetRendererUnwrap`、`ComponentWidgetFactory`、`DILIntrinsicWidgets` |
| **内建（intrinsics）** | `intrinsics/Each`、`Show`、`ShowElse`、`Scope` |
| 增量/流式 | `DILIncrementalCompileJSONPatchVisitor`（17.6 KB）、`DILStreamingRenderState`、`DILTransientRenderAbort` |
| 错误/主题 | `DILCompilerErrorHandling`、`DILError`、`DILTheme`、`DILProperty` |

## 3. 内建控制流（intrinsics）🔒

### 3.1 `<Show>` / `<ShowElse>` —— 条件渲染，按**渲染器对象**实现

`intrinsics/Show.js` 构造函数与变更回调：

```js
this.primaryChildren = [];       // then 分支
this.elseChildren = [];          // else 分支

// onChildrenChanged(children)：
super["onChildrenChanged"].call(this, e);
this.primaryChildren.length = 0;
this.elseChildren.length = 0;
for (const r of e) {             // 遍历 children，逐个分类到 primary / else
  let e#1 = s(r);
  ...
}
```

`intrinsics/ShowElse.js` 的条件判定与渲染：

```js
return r.isTruthy(t(this.props, e));   // tail call —— 条件求值
// onRender：
for (const t of this.children) t.onRender(e, r);   // 渲染所有子节点
```

→ **不是字节码 VM**：`<Show>` 是一个渲染器对象，持有两类子节点，`onRender` 时按条件选一边渲染。

### 3.2 `<Each>` —— 循环，带 props 双写兼容

`intrinsics/Each.js`：

```js
t = e.getProperty(r);
if (!(Array.isArray(t))) goto L_5e;
return t;
return [];
```

```js
s = o(this.props, e);                 // 取 items
if (undefined === s) return;           // 空则直接返回
// itemName / item 与 indexName / index 互为回退（向后兼容旧写法）
if ((i(this.props, "itemName", e) == null)) i(this.props, "itemName", e);
if ((i(this.props, "item", e) == null)) i(this.props, "item", e);
a = "item";
if ((i(this.props, "indexName", e) == null)) i(this.props, "indexName", e);
if ((i(this.props, "index", e) == null)) i(this.props, "index", e);
```

### 3.3 `<Scope>` —— 变量作用域（文件存在，未逐行读）

## 4. 元素与渲染（`dil_renderer` + `dil_core`）

### 4.1 DIL 有自己的 **JSX runtime** 🔒

`src/DILElement.js` 导出：

```
DIL_FRAGMENT, TEXT_ELEMENT_TYPE, DIL_RENDERED_PROP_ELEMENT_TYPE, DIL_RENDERED_PROP_NAME,
createDilJsxRuntime, createDilElement, isDILRuntimeElement, propsWithChildren,
getDilComponentScope, getDilComponentResolver, createDilComponentPlaceholder,
setDilElementInteractionScope, getDilElementInteractionScope, readRuntimeElementKey
```

→ 组件源码里的 `__dil.jsx("box", {...})`（A 阶段从内嵌源码看到）就是接进这个 runtime。
这解释了为什么 `dil_generated_components` 必须携带**源码文本**：DIL 是 **运行时求值** JSX。

### 4.2 求值阶段：注入 facades 🔒

`src/DILSourceEvaluator.js` 导出 `createDILJsxRuntimeFacade`、`createDILDateConstructor`、
`createDILRuntimeApiFacade` —— 即"把源码交给沙箱求值"时注入的 JSX runtime / Date / 运行时 API。

### 4.3 渲染器主体

| 文件 | 规模 | 导出要点 |
|---|---:|---|
| `DILRenderFunctionRuntime.js` | 37.9 KB（全模块最大） | `DILRenderFunctionRuntime`（唯一导出，即"渲染函数运行时"） |
| `DILRenderer.js` | 6.5 KB | `DILRenderer`、`DILStreamingAnimation`、`DILRenderErrorMode`、`DILSkippedChildReason/Error`、`DILElementChildrenMode`、`DILElementRenderNodeKind` |
| `DILRuntimeApiImpl.js` | 12.1 KB | `DILRuntimeApiImpl` |
| `DILStatePersistence.js` | 8.3 KB | `DILStatePersistence`、`DILStateSnapshotChangeOrigin` |
| `DILApiFacade.js` | 10.6 KB | `bindDILClientAction`、**`hardenApiFacade`**、`createDILGenUIFacade`、`createDILModelGenUIFacade`、`readDILModelPluginToolPayload`、`isDILModelEntityReference`、`readDILModelNamedEntity`、**`freezeObjectGraph`** |
| `DILDictationOwner` / `DILSpeechOwner` / `DILSpeechSynthesis` | — | 语音/听写 |
| `DILHtmlViewMessenger`(+`TransportRegistry`) | — | HTML 视图消息通道 |

### 4.4 沙箱加固（`dil_renderer` 侧）🔒

`hardenApiFacade` + `freezeObjectGraph` + `DILSourceEvaluator` 的 facade 注入，
与 `dil_sandbox` 里内嵌的 bootstrap 源码（删除非白名单 `RegExp` 属性、冻结全局）**互相印证** ——
DIL 在端上执行模型生成的 JS，因此有双重加固：**沙箱 realm 加固 + API facade 冻结**。

## 5. 规模分布（导出名数量，反映模块职责）

| 模块 | 文件（有导出） | 导出名 | 职责 |
|---|---:|---:|---|
| `dil_widgets` | 227 | 460 | 组件库/业务 widget |
| `dil_core` | 40 | 123 | 内核（元素、状态、交互、埋点） |
| `dil_text` | 37 | 89 | 文本/排版 |
| `dil_compiler` | 34 | 85 | JSON→源码求值→渲染器树 |
| `dil_renderer` | 25 | 84 | 渲染运行时、API facade、语音 |
| `dil_sandbox` | 34 | 49 | 沙箱/隔离执行 |
| `dil_cel` | 15 | 38 | CEL 表达式求值 |
| `dil_charts` | 5 | 6 | 图表 |
| `dil_math` | 1 | 2 | 数学渲染（SVG） |

## 6. 数据流总览（🔍 多文件互证）

```
服务端生成式 UI（JSON）
   │
   ├─（可选）gzip 压缩 → native CompressedWidgetStateInflaterModule.gunzipUtf8
   │                                    （见 native/REPORT_native.md）
   ▼
DILParser（JSON.parse → DILDiagnosticError）
   ▼
DILCompiler.compileInternal（widgetsMap / celExpressionResolver / fixedTimeMs …）
   ├─ DILSourceEvaluator：注入 JSX runtime(Date/runtimeApi) → 求值组件源码
   ├─ intrinsics：Each / Show / ShowElse / Scope
   └─ Widget 渲染器族 → 渲染器对象树（DILRenderState 族）
   ▼
DILRenderer（DILRenderFunctionRuntime）→ DILElement 树
   ▼
Valdi 视图（ComposeValdiRootView ↔ ValdiRootView，见 java_valdi/）
```

## 7. 深读：渲染运行时 `DILRenderFunctionRuntime`（37.9 KB，全模块最大）🔒

**方法面**（43 个别名，全在同一类上）：

| 分组 | 方法 |
|---|---|
| 生命周期 | `evaluate`、`render`、`dispose`、`clearRenderedRoot`、`didLastRenderFail` |
| 状态 | `setStateSnapshot`、`commitStateSnapshot` |
| 递归渲染 | `renderValue`、`renderRuntimeElement`、`renderFragment`、`renderChildren`、`renderComponent`、`renderElement`、`renderText` |
| **不透明渲染（不下钻）** | `renderOpaqueChildren`、`renderOpaqueValue`、`renderOpaqueRuntimeElement`、`renderOpaqueFragment`、`renderOpaqueComponent` |
| 解析 | `resolveComponent`、`resolveComponentOutput`、`resolveRenderableProps`、`resolveComponentStateIdentity` |
| 钩子身份 | `getHookFrame`、`getFunctionId`、`claimStableFunctionIdentity`、`createStableFunctionIdentity` |
| 错误 | `reportError`、`reportSubtreeError`（**子树级错误边界**） |

**关键实现**：

```js
// 构造：把 facades 注入 sourceEvaluator（沙箱注入点）
this.modelGenUIFacade = createDILModelGenUIFacade(u);
this.jsxRuntimeFacade  = createDILJsxRuntimeFacade(function <atom:0>);
this.sourceEvaluator   = R({dateConstructor, fixedTimeMs, genUIFacade, jsxRuntimeFacade,
                            modelGenUIFacade, reportUnhandledError, runtimeApiFacade,
                            createWidgetRuntimeApi, trace});

// evaluate(source)：代数递增 + 失败清空
this.sourceGeneration++; this.invalidationVersion++;
this.runtimeApi.clearRenderedRootValue();
try { this.sourceEvaluator.evaluate(e); }
catch (t) { this.runtimeApi.clearRenderedRootValue(); this.reportError(t); }

// setStateSnapshot(raw, widgetId)：恢复状态 → 挂到已挂载钩子 → 触发重渲染
if (!!this.statePersistence.setStateSnapshot(e, t)) {
  if (this.applyStateSnapshotToMountedHooks(this.rootNode, t)) this.scheduleRender();
  return true;
}

// render(...)（1302 B，最大方法）：栈式遍历
this.renderVersion = this.invalidationVersion;
this.runtimeApi.updateVariables(e, t, n, o);
this.pendingEffects = undefined; this.renderFailed = false; this.unmountCleanups = undefined;
this.nodeStack.length = 0; this.renderedParentStack.length = 0;
this.renderedParentStack.push(undefined); this.renderId++;
this.pushRenderNode(this.rootNode);
this.sourceEvaluator.beginRender();
```

→ 渲染模型 = **递归下降 + 栈式遍历 + 钩子身份稳定化 + effect/cleanup**（React 式），
外加 **`render*` / `renderOpaque*` 双套**：后者不下钻子树（跳过未变化分支的优化）。

## 8. 深读：增量编译协议（`DILIncrementalCompileJSONPatchVisitor`）🔒

**方法面** = 一个 JSON Patch 访问者：

```
applyInitialStateUpdates, beginSubObject, endSubObject
on{Append,Insert,Replace,Remove,Truncate}         ← 子对象操作
on{Append,Replace,Remove,Truncate}Root            ← 根操作
```

**操作枚举**（伪码直读）：
```js
e.Append = 0;   e[0] = "Append";
e.Remove = 1;   e[1] = "Remove";
e.Truncate = 2; e[2] = "Truncate";
e.Write = 3;    e[3] = "Write";
```

**约束与错误信息**（揭示协议边界）：

| 错误信息 | 含义 |
|---|---|
| `DIL incremental JSON patch visitor paths ended out of order.` | 有**上下文栈**（`contextStack`），路径必须有序 |
| `DIL incremental compile cannot remove the root widget.` | **根不可删** |
| `DIL incremental compile cannot truncate the root widget.` | **根不可截断** |
| `Cannot write property "X" on a non-container value.` | `Write` 目标必须是容器 |
| `Cannot write array index N past length L.` | 数组索引不得越界 |

依赖 `DILNodePath`（JSON 树路径）+ `DILInitialStateScopeWidgetRenderer` + `DILWidgetRendererUnwrap`；
上下文种类枚举含 `Node` / `Children`。

→ **这就是"流式生成式 UI"的机制**：模型边生成边下发 JSON Patch（Append/Insert/Replace/Remove/Truncate/Write），
端上按路径增量更新，而不是每次全量重解析。与 `dil_core` 导出的
`DILStreamingJSONPatchOperationKind` / `makeDILStreamingJSONPatch` 互相印证 🔍。

## 9. 深读：状态持久化 + 快照编解码（`DILStatePersistence` / `DILStateSnapshotCodec`）

### 9.1 `DILStateSnapshotCodec` 🔒 —— 严格限额的校验器

```js
parseDILStateSnapshot(json, maxEntries):
  try { return normalize(JSON.parse(json), maxEntries); } catch { return null; }

normalize(state, maxEntries):
  if (isPlainObject(state)) {                       // proto === Object.prototype || null
    if (!walk(state, 0, new WeakSet(), {entries:0, maxEntries})) return null;  // 防环 + 条目上限
    s = JSON.stringify(state);
    if (new TextEncoder().encode(s).byteLength > 8192) return null;            // 字节上限
    state = JSON.parse(s);                          // 往返规范化
  }
```

| 限额 | 值 |
|---|---|
| `DIL_ROOT_STATE_MAX_ENTRIES` | **128** |
| `DIL_WIDGET_STATE_MAX_ENTRIES` | **512** |
| 字节上限 | **8192** |

辅助判定：`isPlainObject`（原型必须是 `Object.prototype` 或 `null`）、
`encodeURIComponent` 探测（检测孤立代理项/非法 UTF-16）。**校验失败一律返回 `null`，不抛异常。**

> **与 ① 的衔接**：`validate` 的入口是"**JSON 字符串**"。服务端下发的 widget 状态若被压缩，
> 就先经 native `CompressedWidgetStateInflaterModule.gunzipUtf8`（默认上限 16 MiB）解压成 UTF-8，
> 再交给本 codec（8192 B / 128–512 条目）。**两层限额串起来** —— native 侧防解压炸弹，JS 侧防状态膨胀。🔍

### 9.2 `DILStatePersistence` 🔒 —— 分层持久化状态（每 widget 一个 scope）

方法面：`createStateHook`、`releaseStateHook`、`setStateSnapshot`、`applySnapshotToHook`、
`commitStateSnapshot`、`updatePersistedHookValue`、`notifyStateChange`、`resolveSlot`、
`updateRenderedRootIdentity`、`widgetScope`、`maxSnapshotEntries`

```js
// createStateHook(...)：槽位由 ownerKey + 递增序号组成
if (s.widgetId !== undefined)
    return this.widgetScope(s.widgetId).createStateHook(e, i, {key: s.key}, o);   // 委派子 widget
if (s.key !== undefined && (typeof s.key !== "string" || s.key.length === 0))
    throw new Error("DIL state keys must be nonempty strings.");                  // 键必须非空字符串
(a.nextStateSlot++);
r = "".concat(d, "", a.ownerKey);
h = this.resolveSlot(r, n, undefined, (a !== undefined));
p = {kind: 5, defaultValue: i, ownerId: r, slot: h, widgetId: this.widgetId,
     value: l, setter: function <atom:0>};
if (l === undefined) t.setDILStateSnapshotValue(this.snapshot, h, i, this.maxSnapshotEntries);
```

```js
// releaseStateHook(hook, unmounting)：
s = this.allocationByOwner.get(hook.ownerId);
if (s.retainAfterUnmount) { this.allocationByOwner.delete(...); this.allocatedSlots.delete(s.slot); }
if (unmounting) removeDILStateSnapshotValue(this.snapshot, s.slot, this.maxSnapshotEntries);
```

```js
// setStateSnapshot(raw, widgetId)：
if (widgetId !== undefined) return this.widgetScope(widgetId).setStateSnapshot(e);
s = parseDILStateSnapshot(e, this.maxSnapshotEntries);     // ← 走 codec
if (s !== null) { this.snapshot = s; this.pendingInitialSnapshot = false; return true; }
```

→ **状态系统设计**：hook 结构含 `kind`（值 5＝状态钩子）、`ownerId`/`slot`（字符串键）、`setter`；
`allocationByOwner` / `allocatedSlots` 两张表管分配；`retainAfterUnmount` 决定卸载后是否保留；
值写入前先过 codec 的限额校验 → 超限则 `null`（静默丢弃，不崩）。

## 10. 深读：`<Scope>` 内建 🔒

```js
// onRender(props, ctx)：
o = t(this.props, e);
if (undefined === o) return;
s = e.subscopeWithValues(o);                 // ★ 创建 CEL 子作用域
for (const t of this.children) t.onRender(s, r);

// getDILTransparentWidgetChildren：把子作用域透传给子节点
return {celScope: e.subscopeWithValues(r), children: this.children};

// t(props, ctx)：取 values
o = r.getPropertyValue("values", t);
if (undefined !== o) {
    if (!e.isCELMap(o))
        throw new Error("Invalid Scope node: expected \"values\" or \"$values\" prop as an object.");
    return o;
}
```
→ `<Scope>` 是 **CEL 作用域的构造点**：`values` 必须是 CEL map，通过 `ctx.subscopeWithValues()`
生成子作用域并向下传递。类名 `ScopeWidgetRenderer` / 工厂 `ScopeWidgetFactory`，
基类 `ADILWidgetRendererInternal`。

## 11. `dil_core` 123 个导出全貌 🔒

| 主题 | 代表导出 |
|---|---|
| **安全（资源 URL）** | `DIL_LOCAL_ASSET_URL_REGEXES`、`isDILLocalAssetURL`、**`DENY_REMOTE_DIL_ASSETS`**、`isDILAssetSourceAllowed`、`getDILAssetURLRegexes`、`supportsPerElementAssetURLFiltering` |
| **颜色/主题** | `DIL_COLORS_DEFINITION`、`DIL_SEMANTIC_COLORS_DEFINITION`、`DIL_LIGHT/DARK_COLOR_PALETTE`、`reconfigureDILColorPalettes`、`initializeDILColors`、`resolveDILColor/TextColor/BackgroundColor/BorderColor` |
| **布局/样式解析** | `resolveDILAlignment/Justification/Wrap/Flex/Radius/AspectRatio/Border/BorderSides`、`DIL_SPACING_UNIT`、`resolveDILSpacing/Padding/Margin`、`populateAttributesFromStyle`、`getDILStyleLineHeight/Typography` |
| **自动间距 V2** | `runWithDILV2ResponseAutoSpacing`、`beginDILV2AutoSpacingElement`、`resolveDILV2ChildRenderOptions`、`normalizeDILV2Radius` |
| **字体/文本** | `DILDynamicTextStyle`、`DILSystemFontWeight`、`dynamicSystemFont*`、`parseCSSValue/parseLengthValue` |
| **流式** | `DILStreamingJSONPatchOperationKind`、`makeDILStreamingJSONPatch` |
| **组件/状态** | `DILComponent`、`DILStatefulComponent`、`DIL_COMPONENT_PROPERTIES`、`DILRootComponent`、`DILRootStateChangeOrigin` |
| **交互** | `observeDILControlInteraction`、`runDILControlInteraction`、`DILPressFeedback`、`DILTextSelectionSuppressed` |
| 其它 | `DILSandboxCrashView`、`DILDebugEventsRecorder`、`DILTimerProvider`、`renderMathSvg`、`XmlBuilder`、`DILWorkingStatus` |

## 12. 渲染跳过判据（结论：**不是**按 invalidationVersion 做子树递归比较）🔒

### 12.1 组件输出复用（memo）—— 6 条合取

`resolveComponentOutput` 里逐条判定，全中才复用 `d.value`：

```js
d = n.componentOutput;
s = this.getHookFrame(n);
if (d === undefined)             goto 重算;
if (d.version !== this.renderVersion)   goto 重算;   // ① 本帧版本
if (<父/hookFrame 相关>)         ...
if (undefined.lastExecutionId !== this.renderId) goto 重算;  // ② 本帧未执行过
if (d.component !== o)           goto 重算;   // ③ 组件函数同一性
if (d.props !== i)               goto 重算;   // ④ props 引用相等
if (!t.areDependenciesEqual(d.children, r)) goto 重算;  // ⑤ children 依赖等价
if (s.dataDependencies == null)  ...
if (!<every(依赖判定)>)          goto 重算;   // ⑥ 数据依赖全部相等
return d.value;                               // 命中：不下钻
// 未命中：
s.dataDependencies = []; s.lastExecutionId = this.renderId;
h = o(e.propsWithChildren(i, r));             // 执行组件函数
n.componentOutput = {component: o, props: i, children: r, value: h, version: this.renderVersion};
```

→ **版本号 + 引用相等 + 依赖等价**，即 React `memo` 语义；**没有**子树递归比较。

### 12.2 `renderOpaque*` —— 由**元素元数据**声明，非运行时比较

```js
s = this.elementsMetadata[t];
if (s.childrenMode === n.DILElementChildrenMode.OpaqueTree)
    t#1 = this.renderOpaqueChildren(i);       // ★ 不下钻子树
a.elementOutput = {interactionScope: this.interactionScope, metadata: s,
                   opaqueChildren: t#1, primitiveTextValue: r#1, props: {}};
```

→ 判据是 **`elementsMetadata[type].childrenMode === DILElementChildrenMode.OpaqueTree`**
（元素类型元数据里声明"子节点按不透明处理"）。Opaque 分支下用
`"opaque-array:<key>"` / `"opaque-element:<type>:<key>"` / `"opaque-prop:<json>"` 等**合成节点键**建节点。

## 13. `onXxx` 如何落到渲染器树 🔒

```js
// beginSubObject(...)（600 B）：上下文栈 push
t = this.currentContext();
if (t.kind !== i.Node) … if (t.kind !== i.Children) …
this.contextStack.push(this.enterNodeProperty(t.nodeRef, e, r));

// endSubObject()：pop（带顺序校验）
if (this.contextStack.length <= 1)
    throw new Error("DIL incremental JSON patch visitor paths ended out of order.");
this.contextStack.pop();

// 根操作
onReplaceRoot(w):  this.replaceRoot(f(e));
onAppendRoot(w):   this.replaceRoot(f(P(this.rootNode, e)));
onRemoveRoot / onTruncateRoot:  throw（根不可删/不可截断）

// 子对象操作全部统一到一处
onAppend(a, b, c):   this.applyOperation(e, r, p.Append,   t);
onInsert / onReplace / onRemove / onTruncate: 同理，仅枚举不同
```

→ **非根操作**一律 `applyOperation(target, key, kind, value)`（kind ∈ Append/Insert/Replace/Remove/Truncate/Write），
**根操作**走 `replaceRoot`；路径通过 `contextStack`（`enterNodeProperty` 帧）维护。

## 14. 函数身份构造（`getHookFrame` / `claimStableFunctionIdentity`）🔒

```js
// getHookFrame(node)：挂在渲染节点上
if (e.hookFrame !== undefined) return e.hookFrame;
t = {id: this.nextFrameId, isMounted: true, hookIndex: 0, hooks: [], stateIdentity: undefined};
this.nextFrameId++; e.hookFrame = t; return t;

// getFunctionId(fn)：函数对象 → 数字 id
t = this.componentFunctionIds.get(e); if (t !== undefined) return t;
n = this.claimStableFunctionIdentity(e.name);
o = (c++); this.componentFunctionIds.set(e, o); return o;

// claimStableFunctionIdentity(name)：**每代只认领一次**
if ("" !== e) {                                   // 具名
    t = this.namedFunctionIdentities.get(e);
    if (t === undefined) { t#1 = createStableFunctionIdentity(); namedFunctionIdentities.set(e, t#1); return t#1; }
    if (t.claimedGeneration !== this.sourceGeneration) { t.claimedGeneration = this.sourceGeneration; return t; }
    return undefined;                             // ★ 同代已认领 → 拒绝
}
t#2 = this.firstAnonymousFunctionIdentity;        // 匿名只允许一个
if (t#2 === undefined) { e#1 = createStableFunctionIdentity(); this.firstAnonymousFunctionIdentity = e#1; return e#1; }
if (t#2.claimedGeneration !== this.sourceGeneration) { t#2.claimedGeneration = this.sourceGeneration; return t#2; }
return;                                           // ★ 同代已认领 → 拒绝

// createStableFunctionIdentity()
c = <new id counter>; return {id: (c++), claimedGeneration: this.sourceGeneration};

// getComponentNodeKey(fn, key)
return "c:".concat(this.getFunctionId(e), ":", t);      // "c:<函数id>:<key>"
```

→ 身份 = `{id, claimedGeneration}`，**`claimedGeneration === sourceGeneration`**（`sourceGeneration` 每次
`evaluate` 自增）。因为 DIL 每次求值都产生**新的函数对象**，所以身份必须**按名字/序号在每代重新认领**，
且**同代内重复认领返回 `undefined`**（防止两个不同闭包共用同一身份）。渲染节点键 = `"c:<函数id>:<key>"`。

## 15. `dil_text` / `dil_widgets` 导出全貌 🔒

### 15.1 `dil_text`（37 文件 / 89 导出）—— 文本·Markdown·列表·数学

| 分组 | 导出 |
|---|---|
| 组件 | `DILTextComponent`、`DILTextOnlyMarkdownComponent`、`DILMarkdownComponent`、`DILListComponent`、`DILListItemComponent`、`DILMathWidget` |
| 加载态 | `DILTextLoadingLine`、`DILTextLoadingType`、`buildDILTextLoadingLineDelays` |
| 注册/工厂 | `DIL_TEXT_WIDGETS_MAP`、`MarkdownWidgetRendererFactory`、`CodeWidgetFactory`、`DILTextMathWidgetFactory` |
| 排版 | `DIL_IOS/ANDROID/WEB/PLATFORM_TYPOGRAPHY`、`DIL_TEXT_LINE_HEIGHT`、`DIL_CODE_*`、`DIL_HIGHLIGHT_*`、`resolveDIL{Title,Text,Caption}*` |
| **流式文本** | `DIL_TEXT_STREAMING_PART_PATTERN`、`remember/push/popDILStreamingTextAnimation` |
| 渲染细节 | `DILAttributedTextBuilder`、`DILTextLink`、`DILTextActionTap`、`DILTextWhitespaceMode`、`DILTextFontResolver`、`DILFontRole`、`DILTableTypography*` |

### 15.2 `dil_widgets`（227 文件 / 460 导出）—— 组件库

| 分组 | 数量 | 代表 |
|---|---:|---|
| `*WidgetFactory` | **38** | Box、Card、Table(+Row/Section/Cell)、Popover(+Trigger/Content)、Select、Carousel(+Item/MediaItem)、List、ListView、Image、Icon、Badge、Animate*(Group/Item)、Transition、DatePicker、Favicon、Flow、SegmentedControl、SpeechSynthesizer、Divider、Pressable |
| `DIL*ElementRenderer` | **44** | Box、Button、Card、Carousel*、Checkbox、Choice、ClientDefinedWidget、Component(Content)、FlashcardFlip、FlowItem、Form、Icon、Image、List(+Item)、**Lottie**、Markdown、Math、Popover*、Pressable、Radio、RenderedProp、ShimmerText、Svg、Table*、Text、TextOnlyMarkdown、Tooltip、Transition、Transparent、**YouTube** |
| 常量 | 56 | `CHART_WIDGET_PROPERTIES`、`CONFETTI_PARTICLES`、`DIL_THEME_ATTRIBUTES`、`BASE_CAROUSEL_ITEM_DIL_V2_PROPERTIES`、`CELEBRATION_*` |
| `resolve*` | 多 | 布局/尺寸/图标/地图视口/日期/URL（`resolveFaviconURL`、`resolveMapViewport`、`resolveGrid*`） |
| **安全相关** | — | **`isAllowedModelWrittenDILHostActionType`**、**`renderStateWithDILTrustedNetworkPolicy`**、`isDILSandboxURL`、`resolveIconAsset` |
| 序列化/复制 | — | `serializeDILRendererForCopy`、`serializeDILCopyContentNodesForCopy`、`serializeSvg` |
| 编解码 | — | `normalizeDILLinkHref`、`parseDILWidgetActionMessage`、`normalizeMapMarkers/Routes`、`parseISODateSeconds` |

完整清单：`exports_dil_text.txt` / `exports_dil_widgets.txt`（`tools/exports_digest.py` 生成，自动按命名归类）。

## 16. 本轮修掉一个**静默丢语句**的 bug（影响全语料）🔒

读 `DILIncrementalCompileJSONPatchVisitor` 时发现一个 43 B 的函数体只解出 `this = this; return;`，
回原始反汇编核对：

```asm
 0  push_this / put_loc0 0: this
 2  get_loc0 0: this
 3  get_field2 replaceRoot  ;+28B
36  get_var_ref0 0: f / get_arg0 0: e / call1 / call_method
42  return_undef
```

真实语句是 `this.replaceRoot(f(e))`，但被丢了。**根因**：QuickJS 把**函数体最后一条表达式语句**的值留在栈上，
由 `return_undef` 直接丢弃（**不再补 `drop`**）；我原先只发射 `return;`，于是这类语句全部消失。

**修复**：`return_undef` 时把栈上残留值回吐为表达式语句（过滤 VM 簿记项）。

**影响面：全语料恢复 6,534 条语句**（此前静默丢失）。修复后同一函数解出：

```js
function {
  this = this;
  this.replaceRoot(f(e));
  return;
}
```

> 这条也解释了此前若干"看起来是空函数"的方法体 —— 不是它们真的空，而是尾部语句被丢了。
> 顺带印证：`§13` 的 `applyOperation` / `replaceRoot` 结论只有在修掉此 bug 后才读得出来。

## 17. 依赖比较：`areDependenciesEqual`（`DILHookRuntime`）🔒

`DILRenderFunctionRuntime` 里的 `t.areDependenciesEqual(...)` 来自 `require("./DILHookRuntime")`。全文实现：

```js
function areDependenciesEqual(e, r) {
  if (e.length !== r.length) return false;
  for (t = 0; t < e.length; t++) if (!Object.is(e[t], r[t])) return false;
  return true;
}

function runCleanup(fn, reporter) {
  try { fn(); } catch (n) { reporter.reportError(toError(n)); }   // 清理异常上报，不抛出
}
```

→ **长度相等 + 逐项 `Object.is`**（含 `NaN`/`-0` 语义），即 React 依赖数组的浅比较。
`DILRuntimeApiImpl` 里也用它做 `useEffect` 依赖判定（`if (!areDependenciesEqual(hook.deps, deps))`）。

## 18. `applyOperation` 落到渲染器树的最终形态 🔒

### 18.1 mutation 枚举（决定"改动后要做什么"）

```js
e.RecompileOwnerNode = 0;        e[0] = "RecompileOwnerNode";
e.UpdateInitialStateScope = 1;   e[1] = "UpdateInitialStateScope";
// 另有 UpdateRendererProps（在 PropertyValue 构造里出现）
```

生成的变更描述对象：

```js
{kind: i.PropertyValue, value: n, ownerNodeRef: e,
 propertyNameForRendererUpdate: r, mutation: p}
{kind: i.PropertyValue, value: u(t), ownerNodeRef: e,
 propertyNameForRendererUpdate: undefined, mutation: d.UpdateRendererProps}
```

### 18.2 落点：**直接改渲染器对象**，或触发重编译

```js
// applyOperation：按上下文 kind 分派
n = this.currentContext();
if (n.kind !== i.Node) … if (n.kind !== i.Children) …
this.applyNodePropertyOperation(n.nodeRef, e, r, t, o);      // Node 上下文
// Children 上下文 → this.applyChildrenPropertyOperation(e, n, i)

// applyNodePropertyOperation：先落值，再按 mutation 决定
s(e.value, r, t, o, n);
if (e.ownerNodeRef.isErrorState) return;
if (e.mutation !== UpdateInitialStateScope && e.mutation !== RecompileOwnerNode)
    … this.recompileNode(e.ownerNodeRef);                    // ★ 结构性改动 → 重编译

// applyChildrenPropertyOperation / children 补丁：
if (r !== p.Remove) { s(e.node, "children", undefined, r, t); this.recompileChildren(e); return; }
e.renderer.onChildrenChanged([]);                             // ★ renderer 直接通知

// children 数组补丁（必须数字下标）
if (r === undefined) throw new Error("DIL children patches must target a numeric child index.");
t#1 = e.renderer.children.slice(); t#1.splice(r, 1);   e.renderer.onChildrenChanged(t#1);
i    = e.renderer.children.slice(); …                  e.renderer.onChildrenChanged(i);
e.renderer.children[r]                                 // 直接取值
e.parentRenderer.children.slice();  e.parentRenderer.onChildrenChanged(i);
```

→ **完整链路**：JSON Patch op → `applyOperation` → 按 Node/Children 上下文分派 →
① **属性类**：生成 `{kind, value, ownerNodeRef, propertyNameForRendererUpdate, mutation}`，
   `mutation ∈ {RecompileOwnerNode, UpdateInitialStateScope, UpdateRendererProps}`；
② **子节点类**：直接 `renderer.children.splice(...)` + `renderer.onChildrenChanged(...)`
   （必要时 `recompileNode`/`recompileChildren` 走结构性重编译）。

## 19. `dil_cel` 全貌（15 文件 / 38 导出）🔒

**入口 `createCELRuntimeForDIL(options)`**：

```js
p = new CELState();
E = {localeConvertCurrency, localeFormatCurrency, formatSigFigs, localeNumberToString,
     localeSanitizeNumberString, localeStringToNumber, replace_all, round, slice,
     state: p.value};                                  // ← globalValues
S = {replace_all};                                     // ← receiverFunctions
m = new CELRuntime({globalValues: E, receiverFunctions: S});   // 来自 cel/src/CELRuntime
setDILCELWarningReporter(m, options.warningReporter);
return m;
```

| 文件 | 要点 |
|---|---|
| `CELState` | `this.value = {}`；`set(path, v)` / `get(path)` 走路径解析 |
| `CELStatePath` | `resolveValueAtPath` / `resolveWritableValueAtPath` |
| **`DILScopedState`** | 键 `DIL_LOCAL_STATE_ROOT_KEY` / `DIL_LOCAL_STATE_SCOPE_KEY` / `DIL_WIDGET_ID_SCOPE_KEY`；`{"$local": {widgetId: {...}}}` 分层 |
| **`DILStateMutation`** | `DIL_ARRAY_APPEND_PATH_SEGMENT` / `DIL_ARRAY_PREPEND_PATH_SEGMENT`（CEL 内数组变更的路径段） |
| **`utils/CalculatorHelpers`** | `CALCULATOR_HELPERS` + **`isSafeCalculatorExprInput`**：白名单正则 **`^[0-9+\-*/%().,\sA-Za-z]*$`**（安全相关） |
| `utils/Formatting` | `round`、`slice`、`localeNumberToString`、`localeStringToNumber`、`localeSanitizeNumberString`、`localeConvertCurrency`、`localeFormatCurrency`、`formatSigFigs`、`toNumber` |
| `utils/{Math,State,Environment,Expression,String}Helpers` | `MATH_HELPERS` / `STATE_HELPERS` / `createEnvironmentHelpers` / `createExpressionHelpers` / `replace_all` |
| `WidgetBinding` / `DILWidgetState` | `DILWidgetBinding`；`copyDILWidgetState`、`areDILWidgetStateValuesEqual` |
| `utils/Warnings` | `setDILCELWarningReporter` / `emitWarning`（表达式求值告警） |

## 20. `dil_math`（1 文件 / 16 函数）🔒 —— MathJax → SVG

```js
if (t.trim().length === 0) throw new MathSvgRenderError(1, "Cannot render an empty math expression.");
try { o = texToSvgOutput(t, (true === opts.block)); } catch (s) { throw u(s); }
if (!o.hasSvg()) throw new MathSvgRenderError(3, "MathJax did not produce an SVG element.");
i = <取尺寸>(o);
if (opts.color == null) … v(o, i, n);                       // 着色
h = o.serializeSvg();
if (h === undefined) throw new MathSvgRenderError(3, "MathJax could not serialize the SVG element.");
return {height: i.height, svg: h, viewBox: i.viewBox, width: i.width};
```

错误类 `MathSvgRenderError(reason, message)`，`reason` 为数字枚举（1=空表达式、3=无 SVG/序列化失败）。

## 21. `dil_charts`（5 文件 / 316 函数）🔒 —— SVG 图表

- `widgets.js` 是 barrel：`Chart`←`SvgChart`、`PieChart`、`ValdiChart`、`ValdiPieChart`（lazy getter）
- **`SvgChart`**：DIL 组件类（`super.apply(new.target, [])` + `<class_fields_init>`），
  `isScrollable() = (viewModel.scrollable === true)`，`scrollRef = new ElementRef()`；主渲染函数 3749 B
- **`PieChart`** 依赖：`valdi_core/src/JSX`.jsx、**`makeNodePrototype("image", undefined, "KvuH_jp22LOY92bm")`**（哈希化的原生节点原型 id）、
  `coreutils/src/unicode/TextCoding`、`dil_core/src/colors/{DILColor,DILColorsDefinition,DILColorsInit}`、
  `dil_core/src/layout/DILLayout`、`dil_core/src/utils/XmlBuilder`、`valdi_core/src/{Asset,Style}`；`u = 180`、`h = 360`（度）
- 渲染模式由常量选定：`DIL_CHART_RENDERER_MODE_HOST_NATIVE = "hostNative"` / `..._VALDI = "valdi"` / `..._WEB = "web"`

→ 图表是**生成 SVG 字符串（`XmlBuilder`）→ 作为 `image` 节点渲染**；三种模式对应宿主原生 / Valdi / Web。

## 22. `dil_widgets` 常量真值（57 个，`const_dil_widgets.txt`）🔒

| 常量 | 值 |
|---|---|
| `CELEBRATION_DELAY_MS` / `CELEBRATION_DURATION_MS` | **160** / **5200** |
| `DIL_CONTROL_CHECKMARK_{LONG,SHORT}_ARM_DELAY_MS` | **160** / **80** |
| `DEFAULT_CARD_PADDING_UNIT` | **4** |
| `CLIENT_DEFINED_WIDGET_TYPE` | `"__chatgptClientDefinedWidget"` |
| `DEFAULT_MAP_VIEW_STATE` | `{latitude: 37.769, longitude: -122.404, zoom: 12}` ← 旧金山坐标 |
| `DIL_CHART_RENDERER_MODE_*` | `"hostNative"` / `"valdi"` / `"web"` |
| `DIL_BOX_ATTRIBUTE_PROPERTIES` | `["aspectRatio","border","clip","flex","height","margin","maxHeight","maxSize",…]` |
| `DIL_ROW/COLUMN_AUTO_SPACING_CONTEXT` | `{direction:"row"/"column", spacing: …}` |
| `DIL_CONTROL_*_ANIMATION` | `{beginFromCurrentState:true, curve: AnimationCurve.EaseInOut, duration: …}` |
| `CONFETTI_PARTICLES` | 礼花粒子物理参数（`left/top/vx/vy/ax/…` 浮点） |
| `CHART_WEB_WIDGET_RENDERER_OPTIONS` | `{actionBridgeResolver: …, disableDocumentScroll: true}` |

**能力名（security-relevant）** —— 这些是 DIL widget 可申请的**权限能力标识**：

```
open_entity_detail_reference          open_entity_detail_reference_read_only
open_entity_detail_reference_ready    open_entity_detail_pinned_image
open_url_sandbox_literal_path         open_url_sandbox_read_only
request_media_upload_resolved_widget  start_voice_mode_resolved_widget
shared_conversation_actions           shared_personality_quiz_actions
```

## 23. 本轮修的 3 个保真度问题（伪码可读性）

| # | 问题 | 影响 |
|---|---|---|
| 1 | **cpool 字符串未还原**（只打印 `<cpool[i]:string>`） | 正则字面量、长字符串字面量全部不可读 → 修正后 `isSafeCalculatorExprInput` 的白名单正则 `^[0-9+\-*/%().,\sA-Za-z]*$` 完整可读 |
| 2 | **float64 未解码**（按 u64 显示） | 常量里的浮点变成整数串 → 修正后 `DEFAULT_MAP_VIEW_STATE = {latitude: 37.769, longitude: -122.404, zoom: 12}`、礼花粒子参数可读 |
| 3 | `regexp` 的第二操作数被当 flags 渲染 | 该 fork 的 cpool[1] 是**预编译正则字节码 blob**（非 flags）→ 改为 `new RegExp(src)` 呈现（若确实是 flags 仍渲染 `/src/flags`） |

> 校验方法：对可疑处一律**回原始反汇编/原始字节核对**。例：cpool[1] 报非法 UTF-8 → 查 `BC_TAG` 枚举（`quickjs.c:32723`，确认无 REGEXP tag）→ 转储原始字节（见到 UTF-16 的字符范围表 `%%(9AZaz`）→ 判定为预编译 blob。

## 24. 原四项 ❓ 已全部解决

### 24.1 预编译正则 blob 的逐字节格式 🔒🔒

**格式（源码依据 `libregexp.c:280 lre_dump_bytecode` / `RE_HEADER_*`）**：

```
[u8 re_flags][u8 capture_count][u8 stack_size][u32 小端 bytecode_len][bytecode …]
       ↑ RE_HEADER_FLAGS=0  ↑ CAPTURE_COUNT=1   ↑ STACK_SIZE=2       ↑ RE_HEADER_LEN = 7 = 1+1+1+4
（若 flags & LRE_FLAG_NAMED_GROUPS：尾部接 NUL 分隔的具名组名字符串）
```

**字节码操作码**：`libregexp-opcode.h` 的 `DEF(id, size)` **顺序即编号**；
多字节操作数**小端**；字符范围表 = `[u16 小端 n][n × (u16 小端 start, u16 小端 end)]`。

**实测完整解码**（`CalculatorHelpers.js` 的 `^[0-9+\-*/%().,\sA-Za-z]*$`）：

```
header: 00 01 00 | 5f 00 00 00 (bc_len=95)          总长 = 7 + 95 = 102B ✓ 自洽
   0 split_goto_first -> +6     11 save_start #0
   5 any                        13 line_start              ← ^
   6 goto -> -11                14 simple_greedy_quant 60 0 2147483647 1
  31 range n=14  0009-000D 0020-0020 0025-0025 0028-0039 0041-005A 0061-007A
                 00A0-00A0 1680-1680 2000-200A 2028-2029 202F-202F 205F-205F 3000-3000 FEFF-FEFF
  90 match                      91 line_end                ← $
  92 save_end #0                94 match
```

范围表 14 对 = 28 字节，**精确落在 offset 34..90**，随后正好接 `match/line_end/save_end/match` 到 95 —— 字节级对齐验证通过。
解出的字符集与正则的 `[0-9+\-*/%().,A-Za-z]` + 完整 `\s` 集（TAB/CR/SP/NBSP/U+1680/U+2000-200A/U+2028-2029/U+202F/U+205F/U+3000/BOM）**完全一致**。

工具：`tools/re_bytecode.py`（另有 `tools/cpool_dump.py` 转储常量池原始字节）。

### 24.2 `recompileNode` → `DILCompiler` 的完整链路 🔒

`pseudo_index.py` 给出"类方法别名顺序 ↔ 函数体下标"的一一映射（本文件：方法 = 函数体 `[4]..[30]`）。

```js
// recompileNode(node)：
r = unwrapDILWidgetRenderer(node.parentRenderer);
t = this.options.compileNode(node.node, node.isChildNode, node.nodePath, r, node.inlineTextFlow);  // ★ 注入的编译器
node.renderer = t;
node.isErrorState = y(t);
if (node.parentRenderer === undefined) {          // 根
    pendingInitialStateUpdates.clear(); rootRenderer = t; rootNode = node.node;
    contextStack[0] = makeRootContext(); return;
}
node.parentRenderer.children.splice(node.childIndex, 1, t);   // 非根：替换子槽
node.parentRenderer.onChildrenChanged(...);

// recompileChildren(children) → compileChildNode(node)：
if (typeof node.node === "string") return this.recompileNode(node);
if (node.node.children != null) node.renderer.onChildrenChanged(node.node.children.map(<编译每个子节点>));
```

**DI 接线**（`DILCompiler.js:225`）：

```js
i = new DILIncrementalCompileJSONPatchVisitor({
      rootNode: o.node, rootRenderer: o.renderer,
      compileNode: function <atom:0>,            // ← DILCompiler 的方法
      updateRendererProps: function <atom:0>});  // ← 第二个注入回调（UpdateRendererProps 用）
```

→ **闭环**：`DILCompiler` 自身有 `compileNode(node, isChild, nodePath, errorMode, inlineTextFlow, …)`
（并递归 tail-call 编译子节点），构造 patch 访问者时把它作为 `options.compileNode` 注入；
访问者在 `recompileNode`/`compileChildNode`/`replaceRoot` 处回调它完成重编译。

### 24.3 `dil_widgets` 的 `resolve*` 与全部导出函数语义

**系统化读法**：`tools/fn_digest.py` 把 `exports.NAME = X;` 与 `// fn X …` 接起来，
输出"导出名 → 函数体摘要"。已为 **9 个引擎模块生成 479 个导出函数摘要**：

| 模块 | 摘要数 | 产物 |
|---|---:|---|
| `dil_widgets` | 187（其中 `resolve*` 46） | `fndigest_dil_widgets.txt` / `fndigest_dil_widgets_resolve.txt` |
| `dil_core` | 88 | `fndigest_dil_core.txt` |
| `dil_compiler` | 56 | `fndigest_dil_compiler.txt` |
| `dil_renderer` | 53 | `fndigest_dil_renderer.txt` |
| `dil_text` | 38 | `fndigest_dil_text.txt` |
| `dil_cel` | 28 | `fndigest_dil_cel.txt` |
| `dil_sandbox` | 26 | `fndigest_dil_sandbox.txt` |
| `dil_charts` / `dil_math` | 2 / 1 | 同上 |

代表样例（`resolve*` 的真实语义）：

| 函数 | 行为 |
|---|---|
| `resolveGridSpanNumber` | `Math.max(1, Math.floor(n))`（数字 span 下界 1） |
| `resolveGridSpan` | `"span " + n`（CSS 串） |
| `resolveGridGap` | 复用 `resolveDILSpacing(t)` |
| `resolveAdaptiveGridLayout` | 无输入 → `{columnCount: 1, templateColumns: "1fr"}` |
| `resolveMapViewport` | 有 `initialViewState` → `{center:{latitude,longitude}, fitBounds:false, zoom}`；否则遍历 `markers` |
| `resolveDILButtonPressScale` | 按尺寸分段（`≤80 → 0.96`，`≤150 → …`） |
| `resolveTransitionAnimationOptions` | 解析 `initial`/`enter` 两组过渡参数 |
| `resolveClientDefinedWidgetMapping` | 按字符串键查表 + 校验 `status` |

### 24.4 `DILRuntimeUtils` / `DILSemanticKey` / `DILApiFacade` 🔒

```js
// DILRuntimeUtils（全文）
isPromiseLike(r) = (null !== r && "object" == typeof r && "function" == typeof r.then)
isRecord(r)      = (null !== r && "object" == typeof r)
toError(r)       = r instanceof Error ? r : new Error(String(r))

// DILSemanticKey：getSinglePotentialHostRootIndex(children)
//   递归统计子树里"潜在 host root"数量（数组/片段展开累加），>1 返回 -1
//   n(x)：null/boolean → 0；"" → 0；数组或 DIL_FRAGMENT 元素 → 递归求和（>1 即 2）；否则 1

// DILApiFacade —— 沙箱的安全边界
hardenApiFacade(api)  = { Object.setPrototypeOf(api, null); freezeObjectGraph(api, false); return api; }
freezeObjectGraph(o)  = 带 WeakSet 防环的递归冻结
createDILGenUIFacade()      = harden({dispatchAction, dispatchWidgetAction, logEvent,
                                      issueNewTurn, openEntityDetail, openImageLightbox, openUrl})
createDILModelGenUIFacade() = harden({copy, issueNewTurn, openEntityDetail, openUrl, runPluginTool})
bindDILClientAction(...)    = 生成绑定的客户端 action 对象
readDILModelPluginToolPayload(o) / isDILModelEntityReference(s) / readDILModelNamedEntity(e)
                            = 带类型/正则/长度校验的读取器（不合法抛 TypeError）
```

→ **模型生成的代码能拿到的全部能力只有两个 facade**，且都**去原型 + 深冻结**：
GenUI（`dispatchAction`/`dispatchWidgetAction`/`logEvent`/`issueNewTurn`/`openEntityDetail`/`openImageLightbox`/`openUrl`）
与 Model GenUI（`copy`/`issueNewTurn`/`openEntityDetail`/`openUrl`/`runPluginTool`）。
结合 §11 的资源 URL 白名单、§9.1 的状态限额、`dil_sandbox` 的 realm 加固 —— **四层沙箱边界**齐了。

## 25. 仍未做的（真正的边界外）

1. **native 侧函数体伪代码**（① 的残留）：`inflateGzipPayloadWithZlib` 只做了符号级/调用面分析
   （本机 REA 三 provider 不可用；可走 `D:\ReverseTools\ghidra` analyzeHeadless）
2. **运行时动态验证**（⑤，按你要求缓做）
3. Valdi 运行时本体 / QuickJS 本体（④，上游开源同源）

## 8. 复现

```powershell
python tools\exports_map.py dil_engine\pseudo dil_engine\exports_map.txt   # 导出面
Get-Content dil_engine\pseudo\dil_compiler\src\intrinsics\Show.js.pseudo.js  # 读某文件伪码
python tools\qjs_pseudo.py <预编译.js> --all                                 # 单文件
```
