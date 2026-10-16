// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_renderer/src/DILRenderFunctionRuntime
// closure: this
function {
  return this.scheduleRender();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=71B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// closure: this
function {
  return this.errorReporter.reportError(e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// closure: v
function {
  return v.createSession(e, t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=118B file=dil_renderer/src/DILRenderFunctionRuntime
// closure: this, v
function {
  if (!((0 === this.nodeStack.length))) goto L_75;
  if (!(!this.isFlushingEffects)) goto L_75;
  return v.isUserInteraction();
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// closure: this
function {
  return this.registerKeyedComponent(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=216B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// closure: this
function {
  if (!((undefined !== this.errorReporter.reportUnhandledError))) goto L_90;
  goto L_d7;
  // [栈深重同步 1 -> 0]
  this.errorReporter.reportError(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=74B file=dil_renderer/src/DILRenderFunctionRuntime
// closure: r, this
function {
  return r.createDILRuntimeApiFacade(this.runtimeApi, {});   // tail call
}

// fn <atom:0>  args=14 vars=15 closure=5 cpool=7 bc=1099B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t, n, s, h, a, c, l, p, u, m, f, v, R
// locals: this
// closure: r, <class_fields_init>, i, o, d
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.elementsMetadata = e;
  this.delegate = t;
  this.errorReporter = n;
  this.errorMode = s;
  this.scheduler = a;
  this.trace = c;
  this.dateConstructor = l;
  this.fixedTimeMs = p;
  this.genUIFacade = u;
  this.committedRootChildren = [];
  this.nextFrameId = 0;
  this.nextNodeId = 1;
  this.nodeStack = [];
  this.pendingDestroyedNodes = [];
  this.renderId = 0;
  this.renderFailed = false;
  this.sourceGeneration = 0;
  this.invalidationVersion = 0;
  this.renderVersion = 0;
  this.rootNode = {key: "root", kind: 4, lastRenderId: 0, parentIndex: 0};
  this.nextRootChildren = [];
  this.componentFunctionIds = new WeakMap();
  this.namedFunctionIdentities = new Map();
  this.keyedComponents = new Map();
  this.renderedParentStack = [];
  this.resolvedComponents = new WeakMap();
  this.resolvedComponentScopes = new WeakMap();
  this.isFlushingEffects = false;
  this.statePersistence = new i.DILStatePersistence(function <atom:0>, m, function <atom:0>);
  if (!((undefined === v))) goto L_22f;
  goto L_248;
  // [栈深重同步 8 -> 7]
  this.runtimeApi = new o.DILRuntimeApiImpl(h, this, this.statePersistence, f, {createSession: function <atom:0>, isUserInteraction: function <atom:0>});
  this.runtimeApiFacade = r.createDILRuntimeApiFacade(this.runtimeApi);
  if (!((undefined === u))) goto L_2b0;
  goto L_2d8;
  // [栈深重同步 2 -> 1]
  this.modelGenUIFacade = d.createDILModelGenUIFacade(u);
  this.jsxRuntimeFacade = r.createDILJsxRuntimeFacade(function <atom:0>);
  this.sourceEvaluator = R({dateConstructor: this.dateConstructor, fixedTimeMs: this.fixedTimeMs, genUIFacade: this.genUIFacade, jsxRuntimeFacade: this.jsxRuntimeFacade, modelGenUIFacade: this.modelGenUIFacade, reportUnhandledError: function <atom:0>, runtimeApiFacade: this.runtimeApiFacade, createWidgetRuntimeApi: function <atom:0>, trace: this.trace});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=359B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, this
function {
  this = this;
  this.sourceGeneration = (this.sourceGeneration ++);
  this.invalidationVersion = (this.invalidationVersion ++);
  this.runtimeApi.clearRenderedRootValue();
  try { // catch -> L_f0
  this.sourceEvaluator.evaluate(e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_166
  this.runtimeApi.clearRenderedRootValue();
  this.reportError(t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_renderer/src/DILRenderFunctionRuntime
// locals: this
function {
  this = this;
  this.runtimeApi.clearRenderedRootValue();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=197B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: this
function {
  this = this;
  if (!(!!this.statePersistence.setStateSnapshot(e, t))) goto L_c4;
  if (!(this.applyStateSnapshotToMountedHooks(this.rootNode, t))) goto L_c1;
  this.scheduleRender();
  return true;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_renderer/src/DILRenderFunctionRuntime
// locals: this
function {
  this = this;
  this.statePersistence.commitStateSnapshot();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_renderer/src/DILRenderFunctionRuntime
// locals: this
function {
  this = this;
  return this.renderFailed;
}

// fn <atom:0>  args=4 vars=9 closure=0 cpool=0 bc=1302B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t, n, o
// locals: e#1, i, i#1, i#2, this
function {
  this = this;
  this.renderVersion = this.invalidationVersion;
  this.runtimeApi.updateVariables(e, t, n, o);
  this.pendingEffects = undefined;
  this.renderFailed = false;
  this.unmountCleanups = undefined;
  this.nodeStack.length = 0;
  this.renderedParentStack.length = 0;
  this.renderedParentStack.push(undefined);
  this.renderId = (this.renderId ++);
  this.pushRenderNode(this.rootNode);
  try { // catch -> L_2fb
  let e#1;
  this.sourceEvaluator.beginRender();
  e#1 = this.runtimeApi.renderedRootValue;
  this.statePersistence.updateRenderedRootIdentity(this.getRenderedRootIdentity(e#1));
  this.renderValue(e#1, "root", undefined);
  <?>;
  // gosub (finally 块) 824
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_332
  this.reportError(i);
  <?>;
  // gosub (finally 块) 824
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 824
  throw <?>;
  try { // catch -> L_38a
  this.endRenderNode(this.rootNode);
  <?>;
  goto L_3bc;
  // [栈深重同步 0 -> 1]
  i#1 = <?>;
  try { // catch -> L_3bb
  this.reportError(i#1);
  <?>;
  goto L_3bc;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(!this.renderFailed)) goto L_443;
  try { // catch -> L_411
  this.commitUpdates();
  <?>;
  goto L_443;
  // [栈深重同步 0 -> 1]
  i#2 = <?>;
  try { // catch -> L_442
  this.reportError(i#2);
  <?>;
  goto L_443;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(this.renderFailed)) goto L_4be;
  this.invalidationVersion = (this.invalidationVersion ++);
  this.discardPendingEffectsFrom(0);
  this.renderedParentStack.length = 0;
  this.scheduleEffectFlush(undefined);
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=dil_renderer/src/DILRenderFunctionRuntime
// closure: this
function {
  return this.sourceEvaluator.dispose();   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=1 bc=350B file=dil_renderer/src/DILRenderFunctionRuntime
// locals: e, t, this
function {
  this = this;
  let e;
  this.pendingEffects = undefined;
  this.unmountCleanups = undefined;
  e = this.rootNode.children;
  if (!((undefined !== e))) goto L_ef;
  let t;
  for (const t of e.children) {
    this.destroyRenderNode(t);
  }
  this.rootNode.children = undefined;
  this.runtimeApi.clearRenderedRootValue();
  this.scheduleEffectFlush(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=3 cpool=0 bc=680B file=dil_renderer/src/DILRenderFunctionRuntime
// args: t, n, o
// locals: e, e#1, n#1, i, e#2, this
// closure: h, f, e
function {
  this = this;
  if (!((null != t))) goto L_2a7;
  if (!(("boolean" != typeof t))) goto L_2a7;
  if (!(Array.isArray(t))) goto L_168;
  let e;
  e = this.beginRenderNode(0, "array:".concat(n));
  try { // catch -> L_136
  let n#1;
  let e#1;
  if (!((undefined === o))) goto L_af;
  goto L_d5;
  // [栈深重同步 1 -> 0]
  e#1 = h.getSinglePotentialHostRootIndex(t);
  n#1 = 0;
  let i;
  for (const i of t) {
    if (!((n#1 === e#1))) goto L_11a;
    goto L_11b;
    // [栈深重同步 8 -> 7]
    this.renderValue(i, f(i, n#1), undefined);
    n#1 = <n#1_new>;
    (n#1++);
  }
  <?>;
  // gosub (finally 块) 316
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 316
  throw <?>;
  this.endRenderNode(e);
  // ret (finally 块) 
  return;
  if (!(e.isDILRuntimeElement(t))) goto L_1bb;
  this.renderRuntimeElement(t, n, o);
  return;
  if (!(("function" == typeof t))) goto L_24f;
  let e#2;
  e#2 = this.resolveComponent(t);
  this.renderComponent(e#2, undefined, [], this.getComponentNodeKey(e#2, n), undefined, undefined);
  return;
  this.renderText(String(t), "t:".concat(n));
  return;
}

// fn <atom:0>  args=3 vars=9 closure=1 cpool=0 bc=727B file=dil_renderer/src/DILRenderFunctionRuntime
// args: t, n, o
// locals: i, r, d, s, e, this
// closure: e
function {
  this = this;
  let s;
  let d;
  let r;
  let i;
  i = t.type;
  r = e.readRuntimeElementKey(t);
  if (!((o == null))) goto L_62;
  o;
  d = r;
  if (!((i === e.DIL_FRAGMENT))) goto L_db;
  this.renderFragment(t.children, n, d);
  return;
  if (!((undefined === r))) goto L_e5;
  goto L_120;
  // [栈深重同步 1 -> 0]
  s = "k:".concat(typeof r, ":", String(r));
  if (!(("function" == typeof i))) goto L_232;
  let e;
  e = this.resolveComponent(i);
  if (!((undefined === r))) goto L_1fe;
  goto L_22a;
  // [栈深重同步 7 -> 6]
  this.renderComponent(e, t.props, t.children, this.getComponentNodeKey(e, s), this.getComponentStateIdentity(e, r), d);
  return;
  this.renderElement(i, t.props, t.children, "e:".concat(i, ":", s), d);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=2 cpool=0 bc=143B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t, n
// locals: o, i, r, this
// closure: h, v
function {
  this = this;
  let i;
  let o;
  if (!((undefined === n))) goto L_10;
  goto L_36;
  // [栈深重同步 1 -> 0]
  o = h.getSinglePotentialHostRootIndex(e);
  i = 0;
  let r;
  for (const r of e) {
    if (!((i === o))) goto L_7b;
    goto L_7c;
    // [栈深重同步 8 -> 7]
    this.renderValue(r, v(r, i, t), undefined);
    i = <i_new>;
    (i++);
  }
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=80B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, n, this
// closure: f
function {
  this = this;
  let t;
  t = 0;
  let n;
  for (const n of e) {
    this.renderValue(n, f(n, t), undefined);
    t = <t_new>;
    (t++);
  }
  return;
}

// fn <atom:0>  args=6 vars=12 closure=0 cpool=0 bc=609B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t, n, o, i, r
// locals: d, s, h, o#1, a, this
function {
  this = this;
  let h;
  let s;
  let d;
  d = this.beginRenderNode(1, o);
  d.hookFrame.stateIdentity = this.resolveComponentStateIdentity(i, d, o);
  if (!((this.pendingEffects == null))) goto L_ba;
  this.pendingEffects;
  goto L_bb;
  if (!((undefined.length == null))) goto L_c1;
  undefined.length;
  s = 0;
  h = this.interactionScope;
  if (!((this.resolvedComponentScopes.get(e) == null))) goto L_138;
  this.resolvedComponentScopes.get(e);
  this.interactionScope = h;
  try { // catch -> L_1b1
  let o#1;
  o#1 = this.resolveComponentOutput(d, e, t, n);
  this.renderValue(o#1, "rendered", r);
  <?>;
  // gosub (finally 块) 551
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_221
  d.componentOutput = undefined;
  this.discardPendingEffectsFrom(s);
  this.reportSubtreeError(a);
  <?>;
  // gosub (finally 块) 551
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 551
  throw <?>;
  this.interactionScope = h;
  this.endRenderNode(d);
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=494B file=dil_renderer/src/DILRenderFunctionRuntime
// args: t
// locals: n, o, i, this
// closure: e, r
function {
  this = this;
  let o;
  let n;
  n = e.getDilComponentResolver(t);
  if (!((undefined === n))) goto L_38;
  return t;
  o = this.resolvedComponents.get(t);
  if (!((undefined === o))) goto L_1ea;
  let i;
  o = n(r.createDILRuntimeApiFacade(this.runtimeApi, {}), this.jsxRuntimeFacade, this.genUIFacade);
  n(r.createDILRuntimeApiFacade(this.runtimeApi, {}), this.jsxRuntimeFacade, this.genUIFacade);
  this.resolvedComponents.set(t, o);
  i = e.getDilComponentScope(t);
  if (!((undefined !== i))) goto L_1e9;
  this.resolvedComponentScopes.set(o, i);
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=112B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
function {
  return Object.is(e.value, e.getSnapshot());   // tail call
}

// fn <atom:0>  args=4 vars=8 closure=2 cpool=1 bc=804B file=dil_renderer/src/DILRenderFunctionRuntime
// args: n, o, i, r
// locals: d, s, h, this
// closure: t, e
function {
  this = this;
  let h;
  let s;
  let d;
  d = n.componentOutput;
  s = this.getHookFrame(n);
  if (!((undefined !== d))) goto L_262;
  if (!((d.version === this.renderVersion))) goto L_262;
  if (!((n.parent == null))) goto L_d5;
  n.parent;
  goto L_11f;
  if (!((undefined.hookFrame == null))) goto L_fe;
  undefined.hookFrame;
  goto L_11f;
  if (!((undefined.lastExecutionId !== this.renderId))) goto L_262;
  if (!((d.component === o))) goto L_262;
  if (!((d.props === i))) goto L_262;
  if (!(t.areDependenciesEqual(d.children, r))) goto L_262;
  if (!((s.dataDependencies == null))) goto L_215;
  s.dataDependencies;
  goto L_23b;
  if (!(undefined.every(function <atom:0>))) goto L_262;
  return d.value;
  n.componentOutput = undefined;
  s.dataDependencies = [];
  s.lastExecutionId = this.renderId;
  h = o(e.propsWithChildren(i, r));
  n.componentOutput = {component: o, props: i, children: r, value: h, version: this.renderVersion};
  return h;
}

// fn <atom:0>  args=5 vars=18 closure=4 cpool=0 bc=1933B file=dil_renderer/src/DILRenderFunctionRuntime
// args: t, o, i, r, d
// locals: s, h, c, a, t#1, r#1, c#1, p, e, u, t#2, c#2, this
// closure: n, R, l, e
function {
  this = this;
  let a;
  let h;
  let s;
  s = this.elementsMetadata[t];
  if (!((undefined === s))) goto L_99;
  this.reportSubtreeError(new Error("Unknown DIL element type "".concat(t, "".")));
  return;
  h = undefined;
  try { // catch -> L_123
  if (!((undefined !== s.renderedPropNames))) goto L_11a;
  if (!((undefined !== o))) goto L_11a;
  goto L_11b;
  // [栈深重同步 1 -> 0]
  h = undefined;
  undefined;
  <?>;
  goto L_155;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_154
  this.reportSubtreeError(c);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  a = this.beginRenderNode(2, r);
  try { // catch -> L_722
  let u;
  let p;
  let c#1;
  let r#1;
  let t#1;
  t#1 = undefined;
  r#1 = undefined;
  c#1 = true;
  if (((s.childrenMode === n.DILElementChildrenMode.RenderedNodes))) goto L_32f;
  if (!((s.childrenMode === n.DILElementChildrenMode.PrimitiveText))) goto L_26a;
  r#1 = R(i);
  R(i);
  c#1 = (undefined === r#1);
  (undefined === r#1);
  goto L_32f;
  if (((s.childrenMode === n.DILElementChildrenMode.ResolvedValues))) goto L_32f;
  if (!((s.childrenMode === n.DILElementChildrenMode.OpaqueTree))) goto L_32f;
  c#1 = false;
  false;
  t#1 = this.renderOpaqueChildren(i);
  this.renderOpaqueChildren(i);
  s.childrenMode;
  if (!((undefined === h))) goto L_33a;
  goto L_35e;
  // [栈深重同步 1 -> 0]
  p = h.props;
  if (!((undefined !== s.childIdentitiesPropName))) goto L_3cf;
  let e;
  e = [];
  l(i, "", e);
  null;
  p;
  {}[s.childIdentitiesPropName] = e;
  e;
  p = {};
  {};
  if (!((undefined === s.semanticKeyPropName))) goto L_440;
  goto L_472;
  // [栈深重同步 3 -> 2]
  null;
  p;
  {}[s.semanticKeyPropName] = d;
  d;
  a.elementOutput = {interactionScope: this.interactionScope, metadata: s, opaqueChildren: t#1, primitiveTextValue: r#1, props: {}};
  u = this.getRenderedElement(a);
  u.lastResolvedRenderId = this.renderId;
  u.resolvedParent = this.renderedParentStack[(this.renderedParentStack.length - 1)];
  this.renderedParentStack.push(u);
  try { // catch -> L_6ca
  if (!((undefined !== h))) goto L_691;
  let t#2;
  for (const t#2 of h.elements) {
    if (!((t#2.props == null))) goto L_655;
    t#2.props;
    goto L_67a;
    this.renderRuntimeElement(t#2, "prop:".concat(JSON.stringify([undefined[e.DIL_RENDERED_PROP_NAME]])), undefined);
  }
  if (!(c#1)) goto L_6bf;
  this.renderChildren(i);
  <?>;
  // gosub (finally 块) 1744
  undefined;
  goto L_719;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1744
  throw <?>;
  this.renderedParentStack.pop();
  // ret (finally 块) 
  <?>;
  // gosub (finally 块) 1889
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  c#2 = <?>;
  try { // catch -> L_75b
  this.reportSubtreeError(c#2);
  <?>;
  // gosub (finally 块) 1889
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1889
  throw <?>;
  this.endRenderNode(a);
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=352B file=dil_renderer/src/DILRenderFunctionRuntime
// args: t, n
// locals: o, i, t#1
// closure: e
function {
  let o;
  o = undefined;
  let i;
  for (const i of t) {
    let t#1;
    t#1 = n[i];
    if (!(e.isDILRuntimeElement(t#1))) goto L_152;
    if (!((o == null))) goto L_63;
    o;
    null;
    n;
    o = {elements: [], props: {}};
    {elements: [], props: {}};
    delete i;
    {}[e.DIL_RENDERED_PROP_NAME] = i;
    i;
    // [栈深重同步 5 -> 4]
    o.props;
  }
  return o;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=295B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: n, t#1, this
function {
  this = this;
  let n;
  n = this.beginRenderNode(5, t);
  try { // catch -> L_f6
  let t#1;
  n.textOutput = e;
  t#1 = this.getRenderedText(n);
  t#1.lastResolvedRenderId = this.renderId;
  t#1.resolvedParent = this.renderedParentStack[(this.renderedParentStack.length - 1)];
  <?>;
  // gosub (finally 块) 252
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 252
  throw <?>;
  this.endRenderNode(n);
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=93B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, n, o, this
// closure: f
function {
  this = this;
  let n;
  let t;
  t = [];
  n = 0;
  let o;
  for (const o of e) {
    this.renderOpaqueValue(o, f(o, n), t, undefined);
    n = <n_new>;
    (n++);
  }
  return t;
}

// fn <atom:0>  args=4 vars=10 closure=3 cpool=0 bc=700B file=dil_renderer/src/DILRenderFunctionRuntime
// args: t, n, o, i
// locals: e, e#1, n#1, r, e#2, this
// closure: h, f, e
function {
  this = this;
  if (!((null != t))) goto L_2bb;
  if (!(("boolean" != typeof t))) goto L_2bb;
  if (!(Array.isArray(t))) goto L_169;
  let e;
  e = this.beginRenderNode(0, "opaque-array:".concat(n));
  try { // catch -> L_137
  let n#1;
  let e#1;
  if (!((undefined === i))) goto L_af;
  goto L_d5;
  // [栈深重同步 1 -> 0]
  e#1 = h.getSinglePotentialHostRootIndex(t);
  n#1 = 0;
  let r;
  for (const r of t) {
    if (!((n#1 === e#1))) goto L_11b;
    goto L_11c;
    // [栈深重同步 9 -> 8]
    this.renderOpaqueValue(r, f(r, n#1), o, undefined);
    n#1 = <n#1_new>;
    (n#1++);
  }
  <?>;
  // gosub (finally 块) 317
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 317
  throw <?>;
  this.endRenderNode(e);
  // ret (finally 块) 
  return;
  if (!(e.isDILRuntimeElement(t))) goto L_1bd;
  this.renderOpaqueRuntimeElement(t, n, o, i);
  return;
  if (!(("function" == typeof t))) goto L_252;
  let e#2;
  e#2 = this.resolveComponent(t);
  this.renderOpaqueComponent(e#2, undefined, [], this.getComponentNodeKey(e#2, n), undefined, o, undefined);
  return;
  if (!(("string" != typeof t))) goto L_294;
  if (!(("number" != typeof t))) goto L_294;
  goto L_2ba;
  // [栈深重同步 1 -> 0]
  o.push(t);
  return;
}

// fn <atom:0>  args=4 vars=17 closure=2 cpool=0 bc=1354B file=dil_renderer/src/DILRenderFunctionRuntime
// args: t, n, o, i
// locals: r, d, s, h, e, a, n#1, i#1, d#1, t#1, n#2, e#1, this
// closure: e, p
function {
  this = this;
  let a;
  let h;
  let s;
  let d;
  let r;
  r = t.type;
  d = e.readRuntimeElementKey(t);
  if (!((i == null))) goto L_65;
  i;
  s = d;
  if (!((r === e.DIL_FRAGMENT))) goto L_df;
  this.renderOpaqueFragment(t.children, n, o, s);
  return;
  if (!((undefined === d))) goto L_e9;
  goto L_124;
  // [栈深重同步 1 -> 0]
  h = "k:".concat(typeof d, ":", String(d));
  if (!(("function" == typeof r))) goto L_237;
  let e;
  e = this.resolveComponent(r);
  if (!((undefined === d))) goto L_202;
  goto L_22e;
  // [栈深重同步 7 -> 6]
  this.renderOpaqueComponent(e, t.props, t.children, this.getComponentNodeKey(e, h), this.getComponentStateIdentity(e, d), o, s);
  return;
  a = this.beginRenderNode(3, "opaque-element:".concat(r, ":", h));
  try { // catch -> L_518
  let d#1;
  let i#1;
  let n#1;
  n#1 = this.elementsMetadata[r];
  if (!((n#1 == null))) goto L_2d6;
  n#1;
  goto L_2f7;
  i#1 = undefined.semanticKeyPropName;
  d#1 = p(t.props);
  let t#1;
  if (!((n#1 == null))) goto L_32d;
  n#1;
  goto L_34e;
  if (!((undefined.renderedPropNames == null))) goto L_356;
  undefined.renderedPropNames;
  for (const t#1 of []) {
    let n#2;
    n#2 = d#1[t#1];
    if (!(e.isDILRuntimeElement(n#2))) continue;
    let e#1;
    e#1 = [];
    this.renderOpaqueValue(n#2, "opaque-prop:".concat(JSON.stringify(t#1)), e#1, undefined);
    null;
    d#1;
    if (!((0 === e#1.length))) goto L_437;
    goto L_449;
    // [栈深重同步 6 -> 5]
    if (!((1 === e#1.length))) goto L_446;
    goto L_449;
    // [栈深重同步 6 -> 5]
    {}[t#1] = e#1;
    e#1;
    d#1 = {};
    {};
  }
  if (!((undefined === s))) goto L_48e;
  goto L_497;
  // [栈深重同步 4 -> 3]
  null;
  {key: s};
  if (!((undefined === i#1))) goto L_4a8;
  goto L_4b9;
  // [栈深重同步 4 -> 3]
  null;
  d#1;
  {}[i#1] = s;
  s;
  o.push({type: r, props: {}, children: this.renderOpaqueChildren(t.children)});
  <?>;
  // gosub (finally 块) 1310
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1310
  throw <?>;
  this.endRenderNode(a);
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=4 vars=8 closure=2 cpool=0 bc=144B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t, n, o
// locals: i, r, d, this
// closure: h, v
function {
  this = this;
  let r;
  let i;
  if (!((undefined === o))) goto L_10;
  goto L_36;
  // [栈深重同步 1 -> 0]
  i = h.getSinglePotentialHostRootIndex(e);
  r = 0;
  let d;
  for (const d of e) {
    if (!((r === i))) goto L_7c;
    goto L_7d;
    // [栈深重同步 9 -> 8]
    this.renderOpaqueValue(d, v(d, r, t), n, undefined);
    r = <r_new>;
    (r++);
  }
  return;
}

// fn <atom:0>  args=7 vars=13 closure=0 cpool=0 bc=491B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t, n, o, i, r, d
// locals: s, h, a, o#1, c, this
function {
  this = this;
  let a;
  let h;
  let s;
  s = this.beginRenderNode(1, o);
  s.hookFrame.stateIdentity = this.resolveComponentStateIdentity(i, s, o);
  h = r.length;
  if (!((this.pendingEffects == null))) goto L_bf;
  this.pendingEffects;
  goto L_c0;
  if (!((undefined.length == null))) goto L_c6;
  undefined.length;
  a = 0;
  try { // catch -> L_13a
  let o#1;
  o#1 = this.resolveComponentOutput(s, e, t, n);
  this.renderOpaqueValue(o#1, "rendered", r, d);
  <?>;
  // gosub (finally 块) 447
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_1b9
  s.componentOutput = undefined;
  r.length = h;
  this.discardPendingEffectsFrom(a);
  this.reportSubtreeError(c);
  <?>;
  // gosub (finally 块) 447
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 447
  throw <?>;
  this.endRenderNode(s);
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=233B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: this
// closure: n, s
function {
  this = this;
  if (!((this.errorMode === n.DILRenderErrorMode.ReportAndAbortRender))) goto L_7b;
  this.renderFailed = true;
  true;
  this.errorReporter.reportError(s.toError(e));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=123B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: this
// closure: s
function {
  this = this;
  this.renderFailed = true;
  this.errorReporter.reportError(s.toError(e));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=207B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (!((undefined !== e.hookFrame))) goto L_4e;
  return e.hookFrame;
  t = {id: this.nextFrameId, isMounted: true, hookIndex: 0, hooks: [], stateIdentity: undefined};
  this.nextFrameId = (this.nextFrameId ++);
  e.hookFrame = t;
  return t;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=302B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, n, o, this
// closure: c
function {
  this = this;
  let o;
  let n;
  let t;
  t = this.componentFunctionIds.get(e);
  if (!((undefined !== t))) goto L_5e;
  return t;
  n = this.claimStableFunctionIdentity(e.name);
  if (!((n == null))) goto L_b1;
  n;
  goto L_d2;
  if (!((undefined.id == null))) goto L_de;
  undefined.id;
  c = <c_new>;
  o = (c++);
  this.componentFunctionIds.set(e, o);
  return o;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=575B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, t#1, t#2, e#1, this
function {
  this = this;
  let t#2;
  if (!(("" !== e))) goto L_15a;
  let t;
  t = this.namedFunctionIdentities.get(e);
  if (!((undefined === t))) goto L_db;
  let t#1;
  t#1 = this.createStableFunctionIdentity();
  this.namedFunctionIdentities.set(e, t#1);
  return t#1;
  if (!((t.claimedGeneration !== this.sourceGeneration))) goto L_158;
  t.claimedGeneration = this.sourceGeneration;
  return t;
  return undefined;
  t#2 = this.firstAnonymousFunctionIdentity;
  if (!((undefined === t#2))) goto L_1c1;
  let e#1;
  e#1 = this.createStableFunctionIdentity();
  this.firstAnonymousFunctionIdentity = e#1;
  return e#1;
  if (!((t#2.claimedGeneration !== this.sourceGeneration))) goto L_23e;
  t#2.claimedGeneration = this.sourceGeneration;
  return t#2;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=55B file=dil_renderer/src/DILRenderFunctionRuntime
// locals: this
// closure: c
function {
  this = this;
  c = <c_new>;
  return {id: (c++), claimedGeneration: this.sourceGeneration};
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=87B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: this
function {
  this = this;
  return "c:".concat(this.getFunctionId(e), ":", t);   // tail call
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=233B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: n, o, i, r, this
function {
  this = this;
  let o;
  let n;
  n = "".concat(typeof t, ":", String(t));
  o = 1;
  let r;
  let i;
  const _it1 = this.keyedComponents;
  goto L_c5;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  i = <value(_it2)>;
  <done(_it2)>;
  r = <value(_it2)>;
  if (!((r === e))) goto L_c4;
  if (!(("".concat(typeof i, ":", String(i)) < n))) goto L_c4;
  o = <o_new>;
  (o++);
  if (!(<done(_it1)>)) goto L_6b;
  <value(_it1)>;
  return {key: t, nextStateSlot: 0, ownerKey: n, siblingOrdinal: o};
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=248B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t, n
function {
  if (((undefined === e))) goto L_2b;
  if (!((t.key === n))) goto L_2f;
  return e;
  return {key: e.key, nextStateSlot: 0, ownerKey: "".concat(e.ownerKey, " ", t.key), siblingOrdinal: e.siblingOrdinal};
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=249B file=dil_renderer/src/DILRenderFunctionRuntime
// args: t
// locals: n, this
// closure: e
function {
  this = this;
  let n;
  n = e.readRuntimeElementKey(t);
  if (!((undefined !== n))) goto L_f8;
  if (!(("function" == typeof t.type))) goto L_f8;
  this.keyedComponents.set(n, this.resolveComponent(t.type));
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=630B file=dil_renderer/src/DILRenderFunctionRuntime
// args: t
// locals: n, o, this
// closure: e
function {
  this = this;
  if (!(e.isDILRuntimeElement(t))) goto L_1c2;
  let o;
  let n;
  n = e.readRuntimeElementKey(t);
  if (!((undefined === n))) goto L_64;
  goto L_9b;
  // [栈深重同步 1 -> 0]
  o = "".concat(typeof n, ":", String(n));
  if (!(("function" == typeof t.type))) goto L_168;
  return "component:".concat(this.getFunctionId(this.resolveComponent(t.type)), ":", o);
  return "element:".concat(String(t.type), ":", o);
  if (!(("function" == typeof t))) goto L_241;
  return "component:".concat(this.getFunctionId(this.resolveComponent(t)));
  if (!(Array.isArray(t))) goto L_273;
  return "array";
  return typeof t;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=111B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.getCurrentHookFrame();
  if (!((undefined === t))) goto L_6b;
  throw new Error("DIL.".concat(e, " can only be called while rendering a DIL component."));
  return t;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=115B file=dil_renderer/src/DILRenderFunctionRuntime
// locals: this
function {
  this = this;
  if (!((this.nodeStack[(this.nodeStack.length - 1)] == null))) goto L_51;
  this.nodeStack[(this.nodeStack.length - 1)];
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.hookFrame;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=240B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: n, o, this
function {
  this = this;
  let o;
  let n;
  n = this.getCurrentRenderNode();
  o = this.resolveRenderNode(n, e, t, undefined);
  if (!((1 === e))) goto L_93;
  this.getHookFrame(o).hookIndex = 0;
  goto L_c3;
  o.hookFrame = n.hookFrame;
  this.pushRenderNode(o);
  return o;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=204B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: this
function {
  this = this;
  if (!((undefined !== e.children))) goto L_57;
  e.children.insertionIndex = 0;
  0;
  e.lastRenderId = this.renderId;
  this.nodeStack.push(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=130B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: this
function {
  this = this;
  if (!((this.nodeStack.pop() !== e))) goto L_5b;
  throw new Error("Unbalanced DIL render node stack.");
  this.processChildrenUpdate(e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=104B file=dil_renderer/src/DILRenderFunctionRuntime
// locals: e, this
function {
  this = this;
  let e;
  e = this.nodeStack[(this.nodeStack.length - 1)];
  if (!((undefined === e))) goto L_64;
  throw new Error("Unbalanced DIL render node stack.");
  return e;
}

// fn <atom:0>  args=4 vars=9 closure=0 cpool=0 bc=610B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t, n, o
// locals: i, r, d, o#1, this
function {
  this = this;
  let d;
  let r;
  let i;
  if (!((undefined === o))) goto L_14;
  goto L_40;
  // [栈深重同步 1 -> 0]
  i = "".concat(n, "-", o);
  r = undefined;
  d = e.children;
  if (!((undefined === d))) goto L_97;
  d = {childByKey: {}, children: [], insertionIndex: 0};
  {childByKey: {}, children: [], insertionIndex: 0};
  e.children = d;
  goto L_c3;
  // [栈深重同步 1 -> 0]
  r = d.childByKey[i];
  d.childByKey[i];
  if (!((undefined === r))) goto L_142;
  r = {key: i, kind: t, lastRenderId: this.renderId, parent: e, parentIndex: 0};
  {key: i, kind: t, lastRenderId: this.renderId, parent: e, parentIndex: 0};
  d.childByKey[i] = r;
  goto L_231;
  if (((r.kind !== t))) goto L_1b4;
  if (!((r.lastRenderId === this.renderId))) goto L_231;
  let o#1;
  o#1 = ((d.insertionIndex - r.parentIndex) + 1);
  return this.resolveRenderNode(e, t, n, o#1);   // tail call
  this.insertRenderNodeInParent(r, d);
  return r;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=420B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: n, o
function {
  let n;
  n = t.insertionIndex;
  t.insertionIndex = (t.insertionIndex ++);
  e.parentIndex = n;
  if (!((t.children === t.previousChildren))) goto L_15b;
  if (!((t.children[n] !== e))) goto L_1a3;
  let o;
  o = t.children.slice(0, n);
  o.push(e);
  t.children = o;
  return;
  t.children.push(e);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=610B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, e#1, n, o, this
function {
  this = this;
  let n;
  let t;
  t = e.children;
  if (!((undefined === t))) goto L_34;
  return;
  if (!((t.children === t.previousChildren))) goto L_12e;
  let e#1;
  e#1 = t.insertionIndex;
  if (!((e#1 === t.children.length))) goto L_d6;
  return;
  t.children = t.children.slice(0, e#1);
  n = t.previousChildren;
  if (!((undefined !== n))) goto L_231;
  let o;
  for (const o of n) {
    if (!((o.lastRenderId !== this.renderId))) goto L_227;
    delete o.key;
    // [栈深重同步 5 -> 4]
    t.childByKey;
  }
  t.previousChildren = t.children;
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=671B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, t#1, n, e#1, this
function {
  this = this;
  let n;
  let t;
  t = e.renderedNode;
  if (!((t == null))) goto L_37;
  t;
  goto L_58;
  if (!(undefined.committed)) goto L_a6;
  this.pendingDestroyedNodes.push(t);
  if (!((1 === e.kind))) goto L_1f8;
  if (!((undefined !== e.hookFrame))) goto L_1f8;
  e.hookFrame.isMounted = false;
  e.hookFrame.dataDependencies = undefined;
  let t#1;
  for (const t#1 of e.hookFrame.hooks) {
    if (!((undefined !== t#1.hook))) goto L_1f1;
    this.disposeHook(t#1, false);
  }
  e.hookFrame = undefined;
  e.componentOutput = undefined;
  n = e.children;
  if (!((undefined !== n))) goto L_29e;
  let e#1;
  for (const e#1 of n.children) {
    this.destroyRenderNode(e#1);
  }
  e.children = undefined;
  return;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=542B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: n, i, o, i#1, this
function {
  this = this;
  let o;
  let n;
  n = false;
  if (!((1 === e.kind))) goto L_18a;
  if (!((undefined !== e.hookFrame))) goto L_18a;
  let i;
  for (const <v> of e.hookFrame.hooks) {
    i = <to_object>(<value(_it1)>).hook;
    <to_object>(<value(_it1)>);
    if (!((i == null))) goto L_d9;
    i;
    goto L_fa;
    if (!((5 === undefined.kind))) goto L_180;
    if (!((i.widgetId === t))) goto L_180;
    if (!(this.statePersistence.applySnapshotToHook(i))) goto L_180;
    n = true;
    true;
  }
  o = e.children;
  if (!((undefined !== o))) goto L_21a;
  let i#1;
  for (const i#1 of o.children) {
    if (!(this.applyStateSnapshotToMountedHooks(i#1, t))) goto L_213;
    n = true;
    true;
  }
  return n;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=495B file=dil_renderer/src/DILRenderFunctionRuntime
// locals: t, e, this
function {
  this = this;
  let e;
  let t;
  for (const t of this.pendingDestroyedNodes) {
    this.delegate.onNodeDestroyed(t.id);
    t.committed = false;
  }
  this.pendingDestroyedNodes.length = 0;
  this.commitChildUpdates(undefined, this.committedRootChildren, this.nextRootChildren, this.rootNode);
  e = this.committedRootChildren;
  this.committedRootChildren = this.nextRootChildren;
  this.nextRootChildren = e;
  this.nextRootChildren.length = 0;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=6 cpool=0 bc=759B file=dil_renderer/src/DILRenderFunctionRuntime
// args: o
// locals: d, e
// closure: i, t, this, e, r, n
function {
  let d;
  d = o.renderedNode;
  if (!((i < t.length))) goto L_b3;
  if (((t[i].lastResolvedRenderId !== this.renderId))) goto L_a6;
  if (!((t[i].resolvedParent !== e))) goto L_b3;
  i = <i_new>;
  (i++);
  goto L_26;
  this.emitRenderedNodeChanges(d, o);
  if (!((d !== t[i]))) goto L_18a;
  if (!((e == null))) goto L_15b;
  e;
  goto L_17c;
  if (!((undefined.id == null))) goto L_182;
  undefined.id;
  goto L_191;
  // [栈深重同步 1 -> 0]
  i = <i_new>;
  (i++);
  n.push(d);
  if (!((2 === d.kind))) goto L_2ef;
  let e;
  this.commitChildUpdates(d, d.children, d.nextChildren, o);
  e = d.children;
  d.children = d.nextChildren;
  d.nextChildren = e;
  d.nextChildren.length = 0;
  r = <r_new>;
  (r++);
  return;
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=1 bc=53B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t, n, o
// locals: i, r, this
function {
  this = this;
  let r;
  let i;
  i = 0;
  r = 0;
  this.forEachDirectRenderedChild(o, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=444B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: n, this
function {
  this = this;
  if (!((5 === e.kind))) goto L_72;
  this.emitRenderedTextChanges(e, t.textOutput);
  return;
  let n;
  this.emitRenderedElementChanges(e, t.elementOutput);
  if (!((t.elementOutput == null))) goto L_e8;
  t.elementOutput;
  goto L_109;
  n = undefined.interactionScope;
  if (!((e.interactionScope !== n))) goto L_1ba;
  if (!((this.delegate.onNodeInteractionScopeChanged == null))) goto L_183;
  this.delegate.onNodeInteractionScopeChanged;
  this.delegate;
  goto L_1ab;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e.id, n);
  e.interactionScope = n;
  n;
  return;
}

// fn <atom:0>  args=2 vars=13 closure=3 cpool=0 bc=1880B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: o, i, r, n, d, n#1, t#1, n#2, r#1, n#3, this
// closure: n, a, u
function {
  this = this;
  let d;
  let r;
  let i;
  let o;
  o = e.metadata;
  i = t.props;
  if (!((o.childrenMode === n.DILElementChildrenMode.PrimitiveText))) goto L_e7;
  goto L_e8;
  // [栈深重同步 1 -> 0]
  r = undefined;
  if (!(e.committed)) goto L_243;
  let n;
  for (const n of e.propNames) {
    if (!(("key" !== n))) goto L_236;
    if (!((n !== r))) goto L_236;
    if (!((i == null))) goto L_164;
    i;
    goto L_168;
    if (!((undefined === undefined[n]))) goto L_236;
    if (!((undefined !== e.props[n]))) goto L_236;
    this.delegate.onNodePropChanged(e.id, n, undefined);
    e.props[n] = undefined;
    undefined;
  }
  goto L_2d1;
  this.delegate.onElementNodeCreated(e.id, o.typeId);
  if (!((undefined === i))) goto L_2dd;
  goto L_309;
  // [栈深重同步 1 -> 0]
  d = Object.keys(i);
  e.propNames = d;
  if (!((undefined !== i))) goto L_44f;
  let n#1;
  for (const n#1 of d) {
    let t#1;
    if ((("key" === n#1))) goto L_345;
    if (((n#1 === r))) continue;
    t#1 = i[n#1];
    if (!(e.committed)) goto L_3a3;
    if (((e.props[n#1] === t#1))) goto L_445;
    this.delegate.onNodePropChanged(e.id, n#1, t#1);
    e.props[n#1] = t#1;
    t#1;
  }
  if (!((o.childrenMode === n.DILElementChildrenMode.PrimitiveText))) goto L_5ea;
  let r#1;
  let n#2;
  n#2 = o.primitiveTextProp;
  if (!((t.primitiveTextValue == null))) goto L_520;
  t.primitiveTextValue;
  if (!((i == null))) goto L_51c;
  i;
  goto L_520;
  r#1 = undefined[n#2];
  if (!((e.props[n#2] !== r#1))) goto L_5bf;
  this.delegate.onNodePropChanged(e.id, n#2, r#1);
  e.props[n#2] = r#1;
  if (!((o.childrenMode === n.DILElementChildrenMode.OpaqueTree))) goto L_74b;
  let n#3;
  n#3 = t.opaqueChildren;
  if (!(e.committed)) goto L_6cd;
  if ((u(e.opaqueChildren, n#3))) goto L_73d;
  this.delegate.onNodeOpaqueChildrenChanged(e.id, n#3);
  e.opaqueChildren = n#3;
  e.committed = true;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=331B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: this
function {
  this = this;
  if (!(!e.committed)) goto L_ac;
  this.delegate.onTextNodeCreated(e.id, t);
  e.value = t;
  e.committed = true;
  return;
  if (!((e.value !== t))) goto L_14a;
  this.delegate.onTextNodeChanged(e.id, t);
  e.value = t;
  t;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=256B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, n, this
// closure: a
function {
  this = this;
  let n;
  let t;
  t = e.renderedNode;
  if (!((undefined !== t))) goto L_36;
  return t;
  this.nextNodeId = <this.nextNodeId_new>;
  n = {id: (this.nextNodeId++), kind: 2, metadata: e.elementOutput.metadata, children: [], committed: false, lastResolvedRenderId: 0, nextChildren: [], opaqueChildren: undefined, props: {}, propNames: a, resolvedParent: undefined};
  e.renderedNode = n;
  return n;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=154B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, n, this
function {
  this = this;
  let n;
  let t;
  t = e.renderedNode;
  if (!((undefined !== t))) goto L_36;
  return t;
  this.nextNodeId = <this.nextNodeId_new>;
  n = {id: (this.nextNodeId++), kind: 5, committed: false, lastResolvedRenderId: 0, resolvedParent: undefined, value: ""};
  e.renderedNode = n;
  return n;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=235B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: n, o, this
function {
  this = this;
  let n;
  n = e.children;
  if (!((undefined !== n))) goto L_ea;
  let o;
  for (const o of n.children) {
    if (((2 === o.kind))) goto L_ae;
    if (!((5 === o.kind))) goto L_b7;
    goto L_e0;
    // [栈深重同步 4 -> 3]
    this.forEachDirectRenderedChild(o, t);
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=117B file=dil_renderer/src/DILRenderFunctionRuntime
// locals: this
function {
  this = this;
  this.invalidationVersion = (this.invalidationVersion ++);
  this.scheduler.scheduleRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=658B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: n, this
function {
  this = this;
  let n;
  n = e.hook;
  e.hook = undefined;
  if (!((n == null))) goto L_3f;
  n;
  goto L_60;
  if (!((0 === undefined.kind))) goto L_ee;
  if (!((undefined !== n.cleanup))) goto L_291;
  this.enqueueUnmountCleanup(n.cleanup);
  n.cleanup = undefined;
  goto L_291;
  // [栈深重同步 1 -> 0]
  if (!((n == null))) goto L_fa;
  n;
  goto L_11b;
  if (!((3 === undefined.kind))) goto L_169;
  goto L_291;
  // [栈深重同步 1 -> 0]
  if (!((n == null))) goto L_175;
  n;
  goto L_196;
  if (((6 === undefined.kind))) goto L_1c9;
  if (!((n == null))) goto L_1a7;
  n;
  goto L_1c8;
  if (!((7 === undefined.kind))) goto L_215;
  goto L_291;
  // [栈深重同步 1 -> 0]
  if (!((n == null))) goto L_221;
  n;
  goto L_242;
  if (!((5 === undefined.kind))) goto L_291;
  this.statePersistence.releaseStateHook(n, t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=129B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: this
function {
  this = this;
  if (!((undefined === this.pendingEffects))) goto L_38;
  this.pendingEffects = [];
  [];
  this.pendingEffects.push(e);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=273B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, e#1, this
function {
  this = this;
  if (!((undefined !== this.pendingEffects))) goto L_110;
  let t;
  t = (this.pendingEffects.length - 1);
  if (!((t >= e))) goto L_e4;
  let e#1;
  e#1 = this.pendingEffects[t];
  e#1.hook.deps = e#1.previousDeps;
  t = <t_new>;
  (t--);
  goto L_54;
  this.pendingEffects.length = e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=129B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: this
function {
  this = this;
  if (!((undefined === this.unmountCleanups))) goto L_38;
  this.unmountCleanups = [];
  [];
  this.unmountCleanups.push(e);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=5 cpool=0 bc=841B file=dil_renderer/src/DILRenderFunctionRuntime
// locals: i, e, e#1, t, r
// closure: this, o, t, n, e
function {
  let i;
  i = this.isFlushingEffects;
  this.isFlushingEffects = true;
  try { // catch -> L_334
  if (!((undefined !== o))) goto L_99;
  let e;
  for (const e of o) {
    t.runCleanup(e, this.errorReporter);
  }
  if (!((undefined !== n))) goto L_31e;
  let e#1;
  for (const e#1 of n) {
    if (!(e#1.frame.isMounted)) continue;
    if (!((e#1.slot.hook === e#1.hook))) continue;
    if (!((undefined !== e#1.hook.cleanup))) goto L_271;
    t.runCleanup(e#1.hook.cleanup, this.errorReporter);
    e#1.hook.cleanup = undefined;
    undefined;
    try { // catch -> L_2e2
    let t;
    t = e#1.effect();
    if (!(("function" == typeof t))) goto L_2d5;
    goto L_2d6;
    // [栈深重同步 5 -> 4]
    e#1.hook.cleanup = undefined;
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    r = <?>;
    try { // catch -> L_314
    this.reportError(r);
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  if (!((e == null))) goto L_329;
  e;
  goto L_32a;
  undefined();
  <?>;
  // gosub (finally 块) 826
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 826
  throw <?>;
  this.isFlushingEffects = i;
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=151B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: n, o, this
// closure: t
function {
  this = this;
  let o;
  let n;
  n = this.pendingEffects;
  o = this.unmountCleanups;
  this.scheduler.scheduleFlush(function <atom:0>);
  return;
}

// fn l  args=3 vars=7 closure=2 cpool=0 bc=401B file=dil_renderer/src/DILRenderFunctionRuntime
// args: t, n, o
// locals: i, r, d, t#1
// closure: l, e
function {
  let i;
  i = 0;
  if (!((i < t.length))) goto L_190;
  let d;
  let r;
  r = t[i];
  d = "".concat(n, ":", i);
  if (!(Array.isArray(r))) goto L_86;
  l(r, d, o);
  goto L_185;
  if (!((null != r))) goto L_185;
  if (!(("boolean" != typeof r))) goto L_185;
  let t#1;
  if (!(e.isDILRuntimeElement(r))) goto L_f6;
  goto L_f7;
  // [栈深重同步 1 -> 0]
  t#1 = undefined;
  if (!((undefined === t#1))) goto L_14f;
  goto L_181;
  // [栈深重同步 3 -> 2]
  o.push("key:".concat(String(t#1)));
  i = <i_new>;
  (i++);
  goto L_5;
  return;
}

// fn p  args=1 vars=3 closure=0 cpool=0 bc=55B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, n
function {
  let t;
  t = {};
  if (!((undefined !== e))) goto L_33;
  let n;
  for (const n of e) {
    if (!(("key" !== n))) goto L_2d;
    t[n] = e[n];
    e[n];
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return t;
}

// fn u  args=2 vars=5 closure=2 cpool=0 bc=426B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: n, o, i
// closure: m, u
function {
  if (((undefined === e))) goto L_c;
  if (!((e.length !== t.length))) goto L_11;
  return false;
  let n;
  n = 0;
  if (!((n < e.length))) goto L_1a7;
  let i;
  let o;
  o = e[n];
  i = t[n];
  if (!(("object" == typeof o))) goto L_190;
  if (!(("object" == typeof i))) goto L_190;
  if (((o.type !== i.type))) goto L_18b;
  if (((o.key !== i.key))) goto L_18b;
  if ((!m(o.props, i.props))) goto L_18b;
  if (!(!u(o.children, i.children))) goto L_19c;
  return false;
  if (!((o !== i))) goto L_19c;
  return false;
  n = <n_new>;
  (n++);
  goto L_16;
  return true;
}

// fn m  args=2 vars=5 closure=0 cpool=0 bc=145B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t
// locals: n, o, i
function {
  let o;
  let n;
  n = Object.keys(e);
  o = Object.keys(t);
  if (!((n.length !== o.length))) goto L_6a;
  return false;
  let i;
  for (const i of n) {
    if (!((e[i] !== t[i]))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
}

// fn f  args=2 vars=3 closure=1 cpool=0 bc=266B file=dil_renderer/src/DILRenderFunctionRuntime
// args: t, n
// locals: n#1
// closure: e
function {
  if (!(e.isDILRuntimeElement(t))) goto L_e0;
  if (!((t.type !== e.DIL_FRAGMENT))) goto L_e0;
  let n#1;
  n#1 = e.readRuntimeElementKey(t);
  if (!((undefined !== n#1))) goto L_e0;
  return "k:".concat(typeof n#1, ":", String(n#1));   // tail call
  return "i:".concat(n);   // tail call
}

// fn v  args=3 vars=3 closure=1 cpool=0 bc=59B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e, t, n
// closure: f
function {
  if (!((0 === t))) goto L_7;
  return n;
  return "f:".concat(n, ":", f(e, t));
}

// fn R  args=1 vars=3 closure=0 cpool=0 bc=97B file=dil_renderer/src/DILRenderFunctionRuntime
// args: e
// locals: t, n
function {
  let t;
  if (!((0 === e.length))) goto L_a;
  return;
  t = "";
  let n;
  for (const n of e) {
    if (!((null != n))) continue;
    if (!(("boolean" != typeof n))) continue;
    if (!(("string" != typeof n))) goto L_45;
    if (!(("number" != typeof n))) goto L_45;
    return undefined;
    // [栈深重同步 0 -> 3]
    t = (t + String(n));
    (t + String(n));
  }
  return t;
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=66 bc=761B file=dil_renderer/src/DILRenderFunctionRuntime
// args: require, module, exports
// locals: e, t, n, o, i, r, d, s, h, a, c, DILRenderFunctionRuntime, <class_fields_init>, DILRenderFunctionRuntime#1, l, p, u, m, f, v, R
function {
  l = function l;
  p = function p;
  u = function u;
  m = function m;
  f = function f;
  v = function v;
  R = function R;
  let DILRenderFunctionRuntime#1;
  let c;
  let a;
  let h;
  let s;
  let d;
  let r;
  let i;
  let o;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILRenderFunctionRuntime = undefined;
  e = require("./DILElement");
  t = require("./DILHookRuntime");
  n = require("./DILRenderer");
  o = require("./DILRuntimeApiImpl");
  i = require("./DILStatePersistence");
  r = require("./DILSourceEvaluator");
  d = require("./DILApiFacade");
  s = require("./DILRuntimeUtils");
  h = require("./DILSemanticKey");
  a = Object.freeze([]);
  c = 0;
  let DILRenderFunctionRuntime;
  let <class_fields_init>;
  class DILRenderFunctionRuntime extends undefined { ... }
  <proto:DILRenderFunctionRuntime>.evaluate = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.clearRenderedRoot = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.setStateSnapshot = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.commitStateSnapshot = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.didLastRenderFail = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.render = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.dispose = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.renderValue = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.renderRuntimeElement = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.renderFragment = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.renderChildren = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.renderComponent = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.resolveComponent = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.resolveComponentOutput = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.renderElement = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.resolveRenderableProps = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.renderText = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.renderOpaqueChildren = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.renderOpaqueValue = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.renderOpaqueRuntimeElement = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.renderOpaqueFragment = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.renderOpaqueComponent = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.reportSubtreeError = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.reportError = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.getHookFrame = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.getFunctionId = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.claimStableFunctionIdentity = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.createStableFunctionIdentity = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.getComponentNodeKey = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.getComponentStateIdentity = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.resolveComponentStateIdentity = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.registerKeyedComponent = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.getRenderedRootIdentity = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.requireCurrentHookFrame = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.getCurrentHookFrame = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.beginRenderNode = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.pushRenderNode = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.endRenderNode = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.getCurrentRenderNode = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.resolveRenderNode = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.insertRenderNodeInParent = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.processChildrenUpdate = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.destroyRenderNode = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.applyStateSnapshotToMountedHooks = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.commitUpdates = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.commitChildUpdates = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.emitRenderedNodeChanges = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.emitRenderedElementChanges = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.emitRenderedTextChanges = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.getRenderedElement = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.getRenderedText = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.forEachDirectRenderedChild = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.scheduleRender = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.disposeHook = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.enqueuePendingEffect = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.discardPendingEffectsFrom = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.enqueueUnmountCleanup = function <atom:0>;
  <proto:DILRenderFunctionRuntime>.scheduleEffectFlush = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILRenderFunctionRuntime>;
  DILRenderFunctionRuntime = function <atom:0>;
  // close_loc <class_fields_init>
  DILRenderFunctionRuntime#1 = function <atom:0>;
  exports.DILRenderFunctionRuntime = DILRenderFunctionRuntime#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILRenderFunctionRuntime
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
