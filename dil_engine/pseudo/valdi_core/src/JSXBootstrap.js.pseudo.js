// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=42B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: w
function {
  w.submitRawRenderRequest(e, t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/JSXBootstrap
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/JSXBootstrap
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/JSXBootstrap
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/JSXBootstrap
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=valdi_core/src/JSXBootstrap
// args: e
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=valdi_core/src/JSXBootstrap
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=108B file=valdi_core/src/JSXBootstrap
// args: e
// closure: this
function {
  return this.attributeCache.get(e.substr(1));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=713B file=valdi_core/src/JSXBootstrap
// locals: this
// closure: <class_fields_init>, w, e, m
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.resolvedViewClasses = {};
  this.messageHandlers = [];
  this.currentPlatform = w.getCurrentPlatform();
  if (!((1 !== this.currentPlatform))) goto L_16f;
  if (!((2 !== this.currentPlatform))) goto L_16f;
  if (!((3 !== this.currentPlatform))) goto L_16f;
  if (!((4 !== this.currentPlatform))) goto L_16f;
  throw Error("Unrecognized platform type ".concat(this.currentPlatform.toString()));
  this.stringCache = new e.StringCache(w.internString);
  this.attributeCache = new e.StringCache(w.getAttributeId);
  this.injectedAttributeCache = new e.StringCache(function <atom:0>);
  this.daemonClientManager = new m.DaemonClientManager();
  this.daemonClientManager.addListener(this);
  return;
}

// fn <atom:0>  args=4 vars=6 closure=0 cpool=0 bc=123B file=valdi_core/src/JSXBootstrap
// args: e, t, r, i
// locals: s, this
function {
  this = this;
  let s;
  s = e;
  if ((s)) goto L_4c;
  s = this.makeNodePrototype("custom-view", ["iosClass", t, "androidClass", r], undefined);
  this.makeNodePrototype("custom-view", ["iosClass", t, "androidClass", r], undefined);
  this.beginRender(s, i);
  return s;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=valdi_core/src/JSXBootstrap
// closure: v
function {
  return v().getCurrentComponentInstance();   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: v
function {
  v().beginElement(e, t);
  return;
}

// fn <atom:0>  args=4 vars=4 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e, t, r, i
// closure: n
function {
  return n.valdiMainThreadCallbackDescriptor(e, t, r, i);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  v().beginMainThreadCallback(e);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: v
function {
  v().setMainThreadCallbackClosureArg(e, t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=valdi_core/src/JSXBootstrap
// closure: v
function {
  return v().endMainThreadCallback();   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=44B file=valdi_core/src/JSXBootstrap
// args: e, t, r
// closure: v
function {
  v().beginElementWithViewFactory(e, t, r);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=42B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: v
function {
  return v().beginElementIfNeeded(e, t);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e, t, r
// closure: v
function {
  return v().beginElementWithViewFactoryIfNeeded(e, t, r);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_core/src/JSXBootstrap
// closure: v
function {
  v().endElement();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: v
function {
  v().setAttributeBool(e, t);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: v
function {
  v().setAttributeNumber(e, t);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: v
function {
  v().setAttributeStyle(e, t);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: v
function {
  v().setAttributeString(e, t);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: v
function {
  v().setAttributeFunction(e, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  v().setAttributeRef(e);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: v
function {
  v().setAttribute(e, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  return v().hasAttribute(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  v().setAttributes(e);
  return;
}

// fn <atom:0>  args=4 vars=4 closure=1 cpool=0 bc=45B file=valdi_core/src/JSXBootstrap
// args: e, t, r, i
// closure: v
function {
  v().beginComponent(e, t, r, i);
  return;
}

// fn <atom:0>  args=4 vars=5 closure=3 cpool=0 bc=140B file=valdi_core/src/JSXBootstrap
// args: e, t, i, s
// locals: n
// closure: r, v, DummyComponent
function {
  if (!(t)) goto L_5d;
  let n;
  n = r.resolveComponentConstructor(e, t);
  v().beginComponentWithoutPrototype(n, i, s);
  return;
  v().beginComponentWithoutPrototype(DummyComponent, i, undefined);
  return;
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=44B file=valdi_core/src/JSXBootstrap
// args: e, t, r
// closure: v
function {
  v().beginComponentWithoutPrototype(e, t, r);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=valdi_core/src/JSXBootstrap
// closure: v
function {
  return v().hasComponentContext();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  v().setComponentContext(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  v().setComponentOnCreateObserver(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  v().setComponentOnDestroyObserver(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_core/src/JSXBootstrap
// closure: v
function {
  v().endComponent();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=valdi_core/src/JSXBootstrap
// args: e, t
function {
  e(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  return v().hasViewModelProperty(e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: v
function {
  v().setViewModelProperty(e, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  v().setViewModelProperties(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  v().setViewModelFull(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  return v().hasInjectedAttribute(e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: v
function {
  v().setInjectedAttribute(e, t);
  return;
}

// fn <atom:0>  args=4 vars=4 closure=1 cpool=0 bc=45B file=valdi_core/src/JSXBootstrap
// args: e, t, r, i
// closure: v
function {
  v().renderNamedSlot(e, t, r, i);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: v
function {
  v().setNamedSlot(e, t);
  return;
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=44B file=valdi_core/src/JSXBootstrap
// args: e, t, r
// closure: v
function {
  v().renderUnnamedSlot(e, t, r);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  v().setUnnamedSlot(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  v().setNamedSlots(e);
  return;
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=1B file=valdi_core/src/JSXBootstrap
// args: e, t, r, i
function {
  return;
}

// fn <atom:0>  args=3 vars=8 closure=2 cpool=0 bc=834B file=valdi_core/src/JSXBootstrap
// args: e, t, r
// locals: i, s, n, i#1, this
// closure: c, a
function {
  this = this;
  let i#1;
  if (!(("custom-view" === e))) goto L_2b6;
  let n;
  let s;
  let i;
  i = undefined;
  s = undefined;
  n = undefined;
  if (!(t)) goto L_b8;
  i = c.removeProperty(t, "androidClass");
  c.removeProperty(t, "androidClass");
  s = c.removeProperty(t, "iosClass");
  c.removeProperty(t, "iosClass");
  n = c.removeProperty(t, "macosClass");
  c.removeProperty(t, "macosClass");
  if (!((4 === this.currentPlatform))) goto L_111;
  return new a.NodePrototype(e, "custom-view", t, r);
  if (!((2 === this.currentPlatform))) goto L_198;
  if (!(s)) goto L_16c;
  return new a.NodePrototype(e, s, t, r);
  return new a.DeferredNodePrototype(e, t, r);
  if (!((3 === this.currentPlatform))) goto L_256;
  if (!(n)) goto L_1f6;
  return new a.NodePrototype(e, n, t, r);
  if (!(s)) goto L_22a;
  return new a.NodePrototype(e, s, t, r);
  return new a.DeferredNodePrototype(e, t, r);
  if (!(i)) goto L_28a;
  return new a.NodePrototype(e, i, t, r);
  return new a.DeferredNodePrototype(e, t, r);
  i#1 = this.resolvedViewClasses[e];
  if (!(!i#1)) goto L_313;
  throw Error("No view class mapping registered for class ".concat(e));
  return new a.NodePrototype(e, i#1, t, r);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=120B file=valdi_core/src/JSXBootstrap
// args: e, t
// closure: i
function {
  if (!((t == null))) goto L_73;
  t;
  return new i.ComponentPrototype(i.ComponentPrototype.newId(), e);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/JSXBootstrap
// args: e
// locals: this
// closure: h
function {
  this = this;
  return this.makeRendererWithAllowedRootElementTypes(h, e);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=5 cpool=0 bc=325B file=valdi_core/src/JSXBootstrap
// args: e, t
// locals: r, i, this
// closure: w, g, l, o, C
function {
  this = this;
  let i;
  let r;
  if (!(("boolean" == typeof w.useTopDownMoveOrder))) goto L_5b;
  r = w.useTopDownMoveOrder;
  i = g.isRendererTracingEnabledByDefault();
  return new l.Renderer(t, e, new o.JSXRendererDelegate(t, this.stringCache, this.attributeCache, this.injectedAttributeCache, C), r, i);
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=176B file=valdi_core/src/JSXBootstrap
// args: e, t, r
// locals: i, this
function {
  this = this;
  let i;
  i = undefined;
  if (((2 === this.currentPlatform))) goto L_53;
  if (!((3 === this.currentPlatform))) goto L_58;
  goto L_82;
  // [栈深重同步 1 -> 0]
  if (!((1 === this.currentPlatform))) goto L_81;
  goto L_82;
  // [栈深重同步 1 -> 0]
  i = e;
  e;
  this.resolvedViewClasses[e] = i;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=49B file=valdi_core/src/JSXBootstrap
// args: e
// closure: v
function {
  if (!(e)) goto L_2d;
  return v().render(e);
  return [];
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=76B file=valdi_core/src/JSXBootstrap
// args: e, t, r
// locals: this
function {
  this = this;
  this.daemonClientManager.onEvent(e, t, r);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=valdi_core/src/JSXBootstrap
// args: e
// locals: this
function {
  this = this;
  this.messageHandlers.push(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=161B file=valdi_core/src/JSXBootstrap
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.messageHandlers.indexOf(e);
  if (!((t >= 0))) goto L_a0;
  this.messageHandlers.splice(t, 1);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=87B file=valdi_core/src/JSXBootstrap
// args: e
// closure: p, t
function {
  return p.Messages.customMessageResponse(e, {handled: true, data: t});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=40B file=valdi_core/src/JSXBootstrap
// args: t
// closure: p, e
function {
  e.respond(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=74B file=valdi_core/src/JSXBootstrap
// args: e
// closure: p, t
function {
  return p.Messages.errorResponse(e, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=40B file=valdi_core/src/JSXBootstrap
// args: t
// closure: p, e
function {
  e.respond(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=87B file=valdi_core/src/JSXBootstrap
// args: e
// closure: p
function {
  return p.Messages.customMessageResponse(e, {handled: false, data: undefined});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=78B file=valdi_core/src/JSXBootstrap
// args: e
// closure: p
function {
  return p.Messages.errorResponse(e, "Runtime does not support dumping heap");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=123B file=valdi_core/src/JSXBootstrap
// args: e
// closure: p, t, i
function {
  return p.Messages.dumpHeapResponse(e, {memoryUsageBytes: t.memoryUsageBytes, heapDumpJSON: i});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=111B file=valdi_core/src/JSXBootstrap
// args: e
// closure: p, u, i
function {
  return p.Messages.errorResponse(e, u.toError(i));   // tail call
}

// fn <atom:0>  args=0 vars=5 closure=4 cpool=2 bc=227B file=valdi_core/src/JSXBootstrap
// locals: t, r, e, i, i#1
// closure: p, u, w, e
function {
  let r;
  let t;
  t = w.dumpMemoryStatistics();
  r = undefined;
  try { // catch -> L_a0
  let i;
  let e;
  e = w.dumpHeap();
  i = w.bytesToString(e);
  r = function <atom:0>;
  function <atom:0>;
  // close_loc i
  <?>;
  goto L_ba;
  // [栈深重同步 0 -> 1]
  i#1 = <?>;
  try { // catch -> L_b9
  r = function <atom:0>;
  function <atom:0>;
  // close_loc i#1
  <?>;
  goto L_ba;
  // [栈深重同步 0 -> 1]
  throw <?>;
  e.respond(r);
  return;
}

// fn <atom:0>  args=1 vars=7 closure=3 cpool=5 bc=781B file=valdi_core/src/JSXBootstrap
// args: e
// locals: t, r, i, t#1, r#1, this
// closure: p, u, w
function {
  this = this;
  if (!((1000 === e.message.type))) goto L_1c1;
  let t;
  t = e.message.body;
  let r;
  for (const r of this.messageHandlers) {
    let i;
    i = r.messageReceived(t.identifier, t.data);
    if (!(i)) continue;
    i.then(function <atom:0>).catch(function <atom:0>);
    return undefined;
    // [栈深重同步 0 -> 3]
  }
  e.respond(function <atom:0>);
  return;
  if (!((5 === e.message.type))) goto L_30c;
  let r#1;
  let t#1;
  t#1 = e.message.body;
  if (!(!w.dumpHeap)) goto L_2a5;
  e.respond(function <atom:0>);
  return;
  r#1 = function <atom:0>;
  if (!(t#1.performGC)) goto L_307;
  w.performGC();
  goto L_30b;
  // [栈深重同步 1 -> 0]
  r#1();
  return;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=59 bc=2555B file=valdi_core/src/JSXBootstrap
// args: require, module, exports
// locals: e, t, r, i, s, n, o, a, d, l, m, p, u, c, g, w, C, DummyComponent, <class_fields_init>, DummyComponent#1, v, h, JSXModule, <class_fields_init>#1, JSXModule#1
function {
  let JSXModule#1;
  let h;
  let v;
  let DummyComponent#1;
  let C;
  let w;
  let g;
  let c;
  let u;
  let p;
  let m;
  let l;
  let d;
  let a;
  let o;
  let n;
  let s;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.jsx = undefined;
  e = require("valdi_core/src/StringCache");
  t = require("./BuildType");
  r = require("./ComponentPath");
  i = require("./ComponentPrototype");
  s = require("./ValdiRuntimeProvider");
  n = require("./MainThreadCallback");
  o = require("./JSXRendererDelegate");
  a = require("./NodePrototype");
  d = require("./Renderer");
  l = require("./Renderer");
  m = require("./debugging/DaemonClientManager");
  p = require("./debugging/Messages");
  u = require("./utils/ErrorUtils");
  c = require("./utils/PropertyList");
  g = require("./utils/Trace");
  w = s.getValdiRuntime();
  C = function <atom:0>;
  let DummyComponent;
  let <class_fields_init>;
  class DummyComponent extends undefined { ... }
  <proto:DummyComponent>.renderer = function <atom:0>;
  <proto:DummyComponent>.onCreate = function <atom:0>;
  <proto:DummyComponent>.onRender = function <atom:0>;
  <proto:DummyComponent>.onDestroy = function <atom:0>;
  <proto:DummyComponent>.onViewModelUpdate = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DummyComponent>;
  DummyComponent = function <atom:0>;
  // close_loc <class_fields_init>
  DummyComponent#1 = function <atom:0>;
  v = d.getRenderer;
  if (!(t.isDevBuild())) goto L_1d3;
  goto L_1d4;
  // [栈深重同步 1 -> 0]
  h = undefined;
  let JSXModule;
  let <class_fields_init>#1;
  class JSXModule extends undefined { ... }
  <proto:JSXModule>.beginRenderCustomView = function <atom:0>;
  <proto:JSXModule>.getCurrentComponentInstance = function <atom:0>;
  <proto:JSXModule>.beginRender = function <atom:0>;
  <proto:JSXModule>.valdiMainThreadCallbackDescriptor = function <atom:0>;
  <proto:JSXModule>.beginMainThreadCallback = function <atom:0>;
  <proto:JSXModule>.setMainThreadCallbackClosureArg = function <atom:0>;
  <proto:JSXModule>.endMainThreadCallback = function <atom:0>;
  <proto:JSXModule>.beginRenderWithViewFactory = function <atom:0>;
  <proto:JSXModule>.beginRenderIfNeeded = function <atom:0>;
  <proto:JSXModule>.beginRenderWithViewFactoryIfNeeded = function <atom:0>;
  <proto:JSXModule>.endRender = function <atom:0>;
  <proto:JSXModule>.setAttributeBool = function <atom:0>;
  <proto:JSXModule>.setAttributeNumber = function <atom:0>;
  <proto:JSXModule>.setAttributeStyle = function <atom:0>;
  <proto:JSXModule>.setAttributeString = function <atom:0>;
  <proto:JSXModule>.setAttributeFunction = function <atom:0>;
  <proto:JSXModule>.setAttributeRef = function <atom:0>;
  <proto:JSXModule>.setAttribute = function <atom:0>;
  <proto:JSXModule>.hasAttribute = function <atom:0>;
  <proto:JSXModule>.setAttributes = function <atom:0>;
  <proto:JSXModule>.beginComponent = function <atom:0>;
  <proto:JSXModule>.beginComponentFromPath = function <atom:0>;
  <proto:JSXModule>.beginComponentWithoutPrototype = function <atom:0>;
  <proto:JSXModule>.hasContext = function <atom:0>;
  <proto:JSXModule>.setContext = function <atom:0>;
  <proto:JSXModule>.setComponentOnCreateObserver = function <atom:0>;
  <proto:JSXModule>.setComponentOnDestroyObserver = function <atom:0>;
  <proto:JSXModule>.endComponent = function <atom:0>;
  <proto:JSXModule>.renderFnComponent = function <atom:0>;
  <proto:JSXModule>.hasViewModelProperty = function <atom:0>;
  <proto:JSXModule>.setViewModelProperty = function <atom:0>;
  <proto:JSXModule>.setViewModelProperties = function <atom:0>;
  <proto:JSXModule>.setViewModelFull = function <atom:0>;
  <proto:JSXModule>.hasInjectedAttribute = function <atom:0>;
  <proto:JSXModule>.setInjectedAttribute = function <atom:0>;
  <proto:JSXModule>.renderNamedSlot = function <atom:0>;
  <proto:JSXModule>.setNamedSlot = function <atom:0>;
  <proto:JSXModule>.renderUnnamedSlot = function <atom:0>;
  <proto:JSXModule>.setUnnamedSlot = function <atom:0>;
  <proto:JSXModule>.setNamedSlots = function <atom:0>;
  <proto:JSXModule>.willEvaluate = function <atom:0>;
  <proto:JSXModule>.makeNodePrototype = function <atom:0>;
  <proto:JSXModule>.makeComponentPrototype = function <atom:0>;
  <proto:JSXModule>.makeRenderer = function <atom:0>;
  <proto:JSXModule>.makeRendererWithAllowedRootElementTypes = function <atom:0>;
  <proto:JSXModule>.registerNativeElement = function <atom:0>;
  <proto:JSXModule>.render = function <atom:0>;
  <proto:JSXModule>.onDaemonClientEvent = function <atom:0>;
  <proto:JSXModule>.addCustomMessageHandler = function <atom:0>;
  <proto:JSXModule>.removeCustomMessageHandler = function <atom:0>;
  <proto:JSXModule>.onMessage = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:JSXModule>;
  JSXModule = function <atom:0>;
  // close_loc <class_fields_init>#1
  JSXModule#1 = function <atom:0>;
  exports.jsx = new JSXModule#1();
  exports.jsx.registerNativeElement("layout", "Layout", "Layout");
  exports.jsx.registerNativeElement("view", "SCValdiView", "com.snap.valdi.views.ValdiView");
  exports.jsx.registerNativeElement("label", "SCValdiLabel", "com.snap.valdi.views.ValdiTextView");
  exports.jsx.registerNativeElement("scroll", "SCValdiScrollView", "com.snap.valdi.views.ValdiScrollView");
  exports.jsx.registerNativeElement("image", "SCValdiImageView", "com.snap.valdi.views.ValdiImageView");
  exports.jsx.registerNativeElement("video", "SCValdiVideoView", "com.snap.valdi.views.ValdiVideoView");
  exports.jsx.registerNativeElement("webview", "SCValdiWebView", "com.snap.valdi.modules.webview.ValdiWebView");
  exports.jsx.registerNativeElement("button", "UIButton", "android.widget.Button");
  exports.jsx.registerNativeElement("spinner", "SCValdiSpinnerView", "com.snap.valdi.views.ValdiSpinnerView");
  exports.jsx.registerNativeElement("switch", "UISwitch", "com.snap.valdi.views.ValdiView");
  exports.jsx.registerNativeElement("blur", "SCValdiBlurView", "com.snap.valdi.views.ValdiView");
  exports.jsx.registerNativeElement("glass", "SCValdiGlassView", "com.snap.valdi.views.ValdiView");
  exports.jsx.registerNativeElement("glassgroup", "SCValdiGlassContainerView", "com.snap.valdi.views.ValdiView");
  exports.jsx.registerNativeElement("textfield", "SCValdiTextField", "com.snap.valdi.views.ValdiEditText");
  exports.jsx.registerNativeElement("textview", "SCValdiTextView", "com.snap.valdi.views.ValdiEditTextMultiline");
  exports.jsx.registerNativeElement("textanimationgroup", "SCValdiTextAnimationGroup", "com.snap.valdi.views.ValdiTextAnimationGroup");
  exports.jsx.registerNativeElement("textselectiongroup", "SCValdiTextSelectionGroup", "com.snap.valdi.views.ValdiTextSelectionGroup");
  exports.jsx.registerNativeElement("shape", "SCValdiShapeView", "com.snap.valdi.views.ShapeView");
  exports.jsx.registerNativeElement("animatedimage", "SCValdiAnimatedContentView", "com.snap.valdi.views.AnimatedImageView");
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/JSXBootstrap
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
