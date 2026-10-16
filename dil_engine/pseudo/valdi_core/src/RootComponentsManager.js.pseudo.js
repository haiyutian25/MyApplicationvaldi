// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=78B file=valdi_core/src/RootComponentsManager
// args: e, o
// closure: i, module
function {
  return i.getModuleLoader(module).load(e, o, true);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=83B file=valdi_core/src/RootComponentsManager
// args: e
// closure: this
function {
  if (!((e == null))) goto L_29;
  e;
  if (!((this.rootComponents[""] == null))) goto L_31;
  this.rootComponents[""];
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.renderer;
}

// fn <atom:0>  args=3 vars=4 closure=3 cpool=1 bc=207B file=valdi_core/src/RootComponentsManager
// args: e, o, t
// locals: this
// closure: <class_fields_init>, p, c
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.rendererFactory = e;
  this.daemonClientManager = o;
  this.submitDebugMessage = t;
  this.rootComponents = {};
  this.performanceTraceMessageHandler = new p.PerformanceTraceMessageHandler(function <atom:0>);
  if (!(o)) goto L_ce;
  o.addListener(this);
  this.nativeAppearanceDebugSettings = new c.NativeAppearanceDebugSettings();
  new c.NativeAppearanceDebugSettings();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/RootComponentsManager
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=219B file=valdi_core/src/RootComponentsManager
// locals: o
// closure: n, e
function {
  n.disposeFunction();
  try { // catch -> L_7a
  n.renderer.renderRoot(function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_da
  if (!(e.isLoggingEnabled)) goto L_d7;
  console.error("Error while disposing component before hot reloading:", o);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=597B file=valdi_core/src/RootComponentsManager
// locals: o, t, n, this
// closure: e, a
function {
  this = this;
  let o;
  o = [];
  let t;
  for (const t of this.rootComponents) {
    let n;
    n = this.rootComponents[t];
    o.push({contextId: n.contextId, componentPath: n.componentPath, componentContext: n.componentContext, initialViewModel: n.initialViewModel, latestViewModel: n.latestViewModel});
    a.withLocalNativeRefs(t, function <atom:0>);
    // close_loc n
  }
  <catch>;
  if (!(this.daemonClientManager)) goto L_1f6;
  this.daemonClientManager.removeListener(this);
  if (!((this.nativeAppearanceDebugSettings == null))) goto L_221;
  this.nativeAppearanceDebugSettings;
  goto L_245;
  undefined.dispose();
  this.nativeAppearanceDebugSettings = undefined;
  return o;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=443B file=valdi_core/src/RootComponentsManager
// closure: this, t
function {
  this.createWithComponentPath(t.contextId, t.componentPath, t.initialViewModel, t.componentContext);
  if (!((t.latestViewModel !== t.initialViewModel))) goto L_170;
  this.render(t.contextId, t.latestViewModel);
  this.onHotReloaded(t.contextId);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=237B file=valdi_core/src/RootComponentsManager
// args: e
// locals: o, t, this
// closure: a
function {
  this = this;
  let o;
  o = e;
  if (!(Array.isArray(o))) goto L_ec;
  let t;
  // close_loc t
  for (const t of o) {
    if ((this.rootComponents[t.contextId])) goto L_dc;
    a.withLocalNativeRefs(t.contextId, function <atom:0>);
    // close_loc t
  }
  // close_loc t
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=66B file=valdi_core/src/RootComponentsManager
// closure: r, c, p, d
function {
  if (!(r)) goto L_7;
  r();
  if (!((c == null))) goto L_13;
  c;
  goto L_14;
  undefined();
  p();
  d.onDestroy();
  return;
}

// fn <atom:0>  args=6 vars=12 closure=2 cpool=1 bc=451B file=valdi_core/src/RootComponentsManager
// args: e, t, r, s, i, a
// locals: d, c, p, l, m, this
// closure: o, n
function {
  this = this;
  let m;
  let l;
  let p;
  let c;
  let d;
  d = this.rendererFactory.makeRenderer(e);
  if (!((this.nativeAppearanceDebugSettings == null))) goto L_86;
  this.nativeAppearanceDebugSettings;
  goto L_ad;
  c = undefined.addRenderer(d);
  p = o.registerLogMetadataProvider("Valdi Runtime", d.dumpLogMetadata.bind(d));
  l = new n.ComponentRef();
  m = {contextId: e, renderer: d, componentPath: t, componentContext: a, initialViewModel: i, latestViewModel: i, rootRef: l, disposeFunction: function <atom:0>, renderFunction: s};
  this.rootComponents[e] = m;
  return m;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=109B file=valdi_core/src/RootComponentsManager
// closure: e, n
function {
  e.renderFunction(e.rootRef, n, e.componentContext);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=1 bc=345B file=valdi_core/src/RootComponentsManager
// locals: t, n
// closure: e, o, m
function {
  let n;
  let t;
  if (!(o)) goto L_77;
  goto L_e3;
  // [栈深重同步 1 -> 0]
  t = "updateRoot.".concat(e.componentPath.symbolName);
  if (!(o)) goto L_10b;
  goto L_12d;
  // [栈深重同步 1 -> 0]
  n = e.latestViewModel;
  m.trace(t, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=1 bc=73B file=valdi_core/src/RootComponentsManager
// args: e, o
// closure: m
function {
  e.renderer.renderRoot(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=43B file=valdi_core/src/RootComponentsManager
// closure: t, h, e
function {
  return t.resolveComponentConstructor(h, e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=113B file=valdi_core/src/RootComponentsManager
// args: e
// locals: this
// closure: t, h, r
function {
  this = this;
  return r.makeEntryPointRenderFunction(function <atom:0>, !!this.daemonClientManager, this.daemonClientManager);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=valdi_core/src/RootComponentsManager
// closure: this
function {
  this.showHotReloadedMessage();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=118B file=valdi_core/src/RootComponentsManager
// args: e
// locals: o, this
function {
  this = this;
  let o;
  o = this.reloadedContextIds;
  if ((o)) goto L_4c;
  o = [];
  [];
  this.reloadedContextIds = o;
  setTimeout(function <atom:0>);
  o.push(e);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=500B file=valdi_core/src/RootComponentsManager
// locals: e, o, t, e#1, this
function {
  this = this;
  let o;
  let e;
  e = this.reloadedContextIds;
  if (!(!e)) goto L_34;
  return;
  this.reloadedContextIds = undefined;
  o = {};
  let t;
  for (const t of e) {
    let e#1;
    e#1 = this.rootComponents[t];
    if ((!e#1)) continue;
    o["".concat(e#1.componentPath.symbolName, "@", e#1.componentPath.filePath)] = true;
  }
  this.submitDebugMessage(0, "Reloaded ".concat(e.length, " from ", Object.keys(o).join(", ")));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/RootComponentsManager
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=362B file=valdi_core/src/RootComponentsManager
// closure: o, this, e
function {
  o.renderer.renderRoot(function <atom:0>);
  o.renderFunction = this.makeRenderFunction(o.componentPath);
  this.renderRoot(o, true);
  if (!((o.latestViewModel !== o.initialViewModel))) goto L_142;
  this.renderRoot(o, false);
  this.onHotReloaded(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=90B file=valdi_core/src/RootComponentsManager
// args: e
// locals: o, this
// closure: a
function {
  this = this;
  let o;
  o = this.rootComponents[e];
  if (!(o)) goto L_59;
  a.withLocalNativeRefs(e, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=120B file=valdi_core/src/RootComponentsManager
// args: e
// locals: o, this
function {
  this = this;
  let o;
  o = this.rootComponents[e];
  if (!(o)) goto L_77;
  return o.renderer.getRootComponent();   // tail call
  return;
}

// fn <atom:0>  args=5 vars=7 closure=0 cpool=0 bc=94B file=valdi_core/src/RootComponentsManager
// args: e, o, t, n, r
// locals: s, this
function {
  this = this;
  let s;
  s = this.createHandle(e, o, undefined, t, n, r);
  this.renderRoot(s, true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=39B file=valdi_core/src/RootComponentsManager
// closure: this, e
function {
  this.hotReload(e);
  return;
}

// fn <atom:0>  args=4 vars=8 closure=2 cpool=1 bc=253B file=valdi_core/src/RootComponentsManager
// args: e, o, t, n
// locals: r, s, a, this
// closure: i, module
function {
  this = this;
  let a;
  let s;
  let r;
  r = i.getModuleLoader(module).onHotReload(module, o.filePath, function <atom:0>);
  s = this.makeRenderFunction(o);
  a = this.createHandle(e, o, r, s, t, n);
  this.renderRoot(a, true);
  return;
}

// fn <atom:0>  args=4 vars=6 closure=1 cpool=0 bc=88B file=valdi_core/src/RootComponentsManager
// args: e, o, n, r
// locals: s, this
// closure: t
function {
  this = this;
  let s;
  s = t.parseComponentPath(o);
  this.createWithComponentPath(e, s, n, r);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=105B file=valdi_core/src/RootComponentsManager
// args: e, o
// locals: t, this
function {
  this = this;
  let t;
  t = this.rootComponents[e];
  if (!(t)) goto L_68;
  t.latestViewModel = o;
  this.renderRoot(t, false);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/RootComponentsManager
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=152B file=valdi_core/src/RootComponentsManager
// closure: this, e, o
function {
  delete e;
  o.disposeFunction();
  this.rootComponents;
  o.renderer.renderRoot(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=202B file=valdi_core/src/RootComponentsManager
// args: e
// locals: o, this
// closure: m
function {
  this = this;
  let o;
  o = this.rootComponents[e];
  if (!(o)) goto L_c9;
  m.trace("destroyRoot.".concat(o.componentPath.symbolName), function <atom:0>);
  return;
}

// fn <atom:0>  args=4 vars=6 closure=0 cpool=0 bc=125B file=valdi_core/src/RootComponentsManager
// args: e, o, t, n
// locals: r, this
function {
  this = this;
  let r;
  r = this.rootComponents[e];
  if (!(r)) goto L_7c;
  r.renderer.attributeUpdatedExternally(o, t, n);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=218B file=valdi_core/src/RootComponentsManager
// args: e, o, t
// locals: n, this
function {
  this = this;
  let n;
  if (!((this.rootComponents[e] == null))) goto L_31;
  this.rootComponents[e];
  goto L_76;
  n = undefined.rootRef.single();
  if (!(!n)) goto L_b1;
  throw new Error("Could not resolve component for id ".concat(e));
  return n.forwardCall(o, t);   // tail call
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=1 bc=344B file=valdi_core/src/RootComponentsManager
// args: e, o, t, n
// locals: e#1, r, this
function {
  this = this;
  let r;
  if (!(("0" == "".concat(e)))) goto L_e0;
  let e#1;
  for (const e#1 of Object.values(this.rootComponents)) {
    if (!((e#1 == null))) goto L_90;
    e#1;
    goto L_d8;
    undefined.renderer.onRuntimeIssue(o, t, n);
  }
  return;
  r = this.rootComponents[e];
  if (!(r)) goto L_157;
  r.renderer.onRuntimeIssue(o, t, n);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=76B file=valdi_core/src/RootComponentsManager
// args: e
// closure: d, o
function {
  return d.Messages.performanceTraceStatusResponse(e, o);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=111B file=valdi_core/src/RootComponentsManager
// args: e
// closure: d, l, o
function {
  return d.Messages.errorResponse(e, l.toError(o));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=76B file=valdi_core/src/RootComponentsManager
// args: e
// closure: d, o
function {
  return d.Messages.performanceTraceStartResponse(e, o);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=111B file=valdi_core/src/RootComponentsManager
// args: e
// closure: d, l, o
function {
  return d.Messages.errorResponse(e, l.toError(o));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=76B file=valdi_core/src/RootComponentsManager
// args: e
// closure: d, o
function {
  return d.Messages.performanceTraceStopResponse(e, o);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=111B file=valdi_core/src/RootComponentsManager
// args: e
// closure: d, l, o
function {
  return d.Messages.errorResponse(e, l.toError(o));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=76B file=valdi_core/src/RootComponentsManager
// args: e
// closure: d, o
function {
  return d.Messages.listContextsResponse(e, o);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=117B file=valdi_core/src/RootComponentsManager
// args: e
// closure: d, o
function {
  return d.Messages.errorResponse(e, "No context with id ".concat(o));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=78B file=valdi_core/src/RootComponentsManager
// args: e
// closure: d
function {
  return d.Messages.errorResponse(e, "No root node");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=76B file=valdi_core/src/RootComponentsManager
// args: e
// closure: d, r
function {
  return d.Messages.getContextTreeResponse(e, r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=117B file=valdi_core/src/RootComponentsManager
// args: e
// closure: d, o
function {
  return d.Messages.errorResponse(e, "No context with id ".concat(o));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=117B file=valdi_core/src/RootComponentsManager
// args: e
// closure: d, n
function {
  return d.Messages.errorResponse(e, "No node with id ".concat(n));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=80B file=valdi_core/src/RootComponentsManager
// args: e
// closure: d, o
function {
  if (!((o == null))) goto L_4d;
  o;
  return d.Messages.takeElementSnapshotResponse(e, "");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=40B file=valdi_core/src/RootComponentsManager
// args: o
// closure: d, e
function {
  e.respond(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=20 closure=3 cpool=13 bc=2382B file=valdi_core/src/RootComponentsManager
// args: e
// locals: o, o#1, o#2, o#3, o#4, o#5, o#6, e#1, t, n, o#7, t#1, n#1, r, o#8, t#2, n#2, r#1, this
// closure: d, l, s
function {
  this = this;
  if (!((6 === e.message.type))) goto L_fe;
  try { // catch -> L_ca
  let o;
  o = this.performanceTraceMessageHandler.getStatus();
  e.respond(function <atom:0>);
  // close_loc o
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o#1 = <?>;
  try { // catch -> L_fd
  e.respond(function <atom:0>);
  // close_loc o#1
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((7 === e.message.type))) goto L_23c;
  try { // catch -> L_208
  let o#2;
  o#2 = this.performanceTraceMessageHandler.startRecording(e.message.body);
  e.respond(function <atom:0>);
  // close_loc o#2
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o#3 = <?>;
  try { // catch -> L_23b
  e.respond(function <atom:0>);
  // close_loc o#3
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((8 === e.message.type))) goto L_33a;
  try { // catch -> L_305
  let o#4;
  o#4 = this.performanceTraceMessageHandler.stopRecording();
  e.respond(function <atom:0>);
  // close_loc o#4
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o#5 = <?>;
  try { // catch -> L_339
  e.respond(function <atom:0>);
  // close_loc o#5
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((2 === e.message.type))) goto L_51b;
  let o#6;
  o#6 = [];
  let e#1;
  for (const e#1 of this.rootComponents) {
    let n;
    let t;
    t = this.rootComponents[e#1].rootRef.single();
    if (!((t == null))) goto L_437;
    t;
    goto L_4a2;
    if (!((undefined.rootComponent == null))) goto L_460;
    undefined.rootComponent;
    goto L_4a2;
    if (!((undefined.constructor.name == null))) goto L_4ac;
    undefined.constructor.name;
    n = "<undefined>";
    o#6.push({id: e#1, rootComponentName: n});
  }
  <catch>;
  e.respond(function <atom:0>);
  // close_loc o#6
  return;
  if (!((3 === e.message.type))) goto L_703;
  let r;
  let n#1;
  let t#1;
  let o#7;
  o#7 = e.message.body.id;
  t#1 = this.rootComponents[o#7];
  if (!(!t#1)) goto L_62f;
  e.respond(function <atom:0>);
  return;
  n#1 = t#1.renderer.getRootVirtualNode();
  if (!(!n#1)) goto L_6a8;
  e.respond(function <atom:0>);
  return;
  r = s.fromRenderedVirtualNode(n#1, true);
  e.respond(function <atom:0>);
  // close_loc r
  // close_loc o#7
  return;
  if (!((4 === e.message.type))) goto L_94d;
  let r#1;
  let n#2;
  let t#2;
  let o#8;
  o#8 = e.message.body.contextId;
  t#2 = this.rootComponents[o#8];
  if (!(!t#2)) goto L_817;
  e.respond(function <atom:0>);
  return;
  n#2 = e.message.body.elementId;
  r#1 = t#2.renderer.getElementForId(n#2);
  if (!(!r#1)) goto L_8f9;
  e.respond(function <atom:0>);
  return;
  r#1.takeSnapshot().then(function <atom:0>);
  // close_loc n#2
  // close_loc o#8
  return;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=20 bc=454B file=valdi_core/src/RootComponentsManager
// args: require, module, exports
// locals: e, o, t, n, r, s, i, a, d, c, p, l, m, h, RootComponentsManager, <class_fields_init>, RootComponentsManager#1
function {
  let RootComponentsManager#1;
  let h;
  let m;
  let l;
  let p;
  let c;
  let d;
  let a;
  let i;
  let s;
  let r;
  let n;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RootComponentsManager = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  o = require("./BugReporter");
  t = require("./ComponentPath");
  n = require("./ComponentRef");
  r = require("./EntryPointComponent");
  s = require("./IRenderedVirtualNodeData");
  i = require("./ModuleLoaderGlobal");
  a = require("./NativeReferences");
  d = require("./debugging/Messages");
  c = require("./debugging/NativeAppearanceDebugSettings");
  p = require("./debugging/PerformanceTraceMessageHandler");
  l = require("./utils/ErrorUtils");
  m = require("./utils/Trace");
  h = function <atom:0>;
  let RootComponentsManager;
  let <class_fields_init>;
  class RootComponentsManager extends undefined { ... }
  <proto:RootComponentsManager>.stashData = function <atom:0>;
  <proto:RootComponentsManager>.restoreData = function <atom:0>;
  <proto:RootComponentsManager>.createHandle = function <atom:0>;
  <proto:RootComponentsManager>.renderRoot = function <atom:0>;
  <proto:RootComponentsManager>.makeRenderFunction = function <atom:0>;
  <proto:RootComponentsManager>.onHotReloaded = function <atom:0>;
  <proto:RootComponentsManager>.showHotReloadedMessage = function <atom:0>;
  <proto:RootComponentsManager>.hotReload = function <atom:0>;
  <proto:RootComponentsManager>.getComponentForContextId = function <atom:0>;
  <proto:RootComponentsManager>.createWithRenderFunction = function <atom:0>;
  <proto:RootComponentsManager>.createWithComponentPath = function <atom:0>;
  <proto:RootComponentsManager>.create = function <atom:0>;
  <proto:RootComponentsManager>.render = function <atom:0>;
  <proto:RootComponentsManager>.destroy = function <atom:0>;
  <proto:RootComponentsManager>.attributeChanged = function <atom:0>;
  <proto:RootComponentsManager>.callComponentFunction = function <atom:0>;
  <proto:RootComponentsManager>.onRuntimeIssue = function <atom:0>;
  <proto:RootComponentsManager>.onMessage = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:RootComponentsManager>;
  RootComponentsManager = function <atom:0>;
  // close_loc <class_fields_init>
  RootComponentsManager#1 = function <atom:0>;
  exports.RootComponentsManager = RootComponentsManager#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/RootComponentsManager
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
