// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=64B file=valdi_test_utils/src/TestRenderer
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.resolveElementFrame = e;
  this.tree = t;
  this.layoutCompleteCallbacks = [];
  this.nextDrawCallbacks = [];
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e
function {
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t, r
function {
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t
function {
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t
function {
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t
function {
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e
function {
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t, r
function {
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t, r
function {
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t, r
function {
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t
function {
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t
function {
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t
function {
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t, r
function {
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t, r
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=16B file=valdi_test_utils/src/TestRenderer
// closure: l, e
function {
  // append([], 0, e)
  e;
  return l.apply(undefined, []);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=76B file=valdi_test_utils/src/TestRenderer
// args: e
// closure: l, this
function {
  e = ...0;
  return this.tree.withCurrent(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=7 closure=3 cpool=2 bc=470B file=valdi_test_utils/src/TestRenderer
// args: e
// locals: n, a, o, l, s, this
// closure: t, r, module
function {
  this = this;
  let s;
  let l;
  let o;
  let a;
  let n;
  if (!(t.Device.isWeb())) goto L_8c;
  if (!((e.webModuleLoader == null))) goto L_87;
  e.webModuleLoader;
  e;
  goto L_f8;
  // [栈深重同步 1 -> 2]
  goto L_f8;
  // [栈深重同步 1 -> 0]
  n = r.getModuleLoader(module).load(e.modulePath);
  if (!((n == null))) goto L_104;
  n;
  goto L_148;
  a = undefined.mainThreadCallbacks[e.callbackIndex];
  if (!(!a)) goto L_15e;
  throw new Error("Expected a main-thread callback factory");
  o = Array.from({length: e.captureCount}, function <atom:0>);
  l = a(o);
  s = function <atom:0>;
  s.__testMainThreadCallbackClosure = o;
  return s;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=66B file=valdi_test_utils/src/TestRenderer
// args: e, t, r
// locals: n
function {
  let n;
  n = e.__testMainThreadCallbackClosure;
  if (!(!n)) goto L_3b;
  throw new Error("Expected a test main-thread callback");
  n[t] = r;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=valdi_test_utils/src/TestRenderer
// args: e
// locals: this
function {
  this = this;
  this.layoutCompleteCallbacks.push(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=valdi_test_utils/src/TestRenderer
// args: e
// locals: this
function {
  this = this;
  this.nextDrawCallbacks.push(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=valdi_test_utils/src/TestRenderer
// locals: this
function {
  this = this;
  this.error = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=74B file=valdi_test_utils/src/TestRenderer
// locals: this
function {
  this = this;
  if (!(this.error)) goto L_49;
  throw this.error;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e, t
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e
function {
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=valdi_test_utils/src/TestRenderer
// args: e, t
function {
  t(undefined);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
// args: e
function {
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=40B file=valdi_test_utils/src/TestRenderer
// args: e
// locals: this
function {
  this = this;
  return this.resolveElementFrame(e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=43B file=valdi_test_utils/src/TestRenderer
// args: e, t
// locals: this
function {
  this = this;
  t(this.getCachedElementFrame(e));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=valdi_test_utils/src/TestRenderer
// args: e, t
function {
  t(undefined);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=53B file=valdi_test_utils/src/TestRenderer
// args: e, t
// locals: this
function {
  this = this;
  if ((this.error)) goto L_34;
  this.error = t;
  t;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_test_utils/src/TestRenderer
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=valdi_test_utils/src/TestRenderer
// args: e
function {
  return e();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=95B file=valdi_test_utils/src/TestRenderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.layoutCompleteCallbacks;
  this.layoutCompleteCallbacks = [];
  e.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=valdi_test_utils/src/TestRenderer
// args: t
// closure: e
function {
  return t(e);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=95B file=valdi_test_utils/src/TestRenderer
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.nextDrawCallbacks;
  this.nextDrawCallbacks = [];
  t.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_test_utils/src/TestRenderer
// closure: this
function {
  return this.renderer;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=85B file=valdi_test_utils/src/TestRenderer
// args: e
// closure: a, r
function {
  if (!((r.current == null))) goto L_2d;
  r.current;
  goto L_52;
  return a(undefined.getElementForId(e));   // tail call
}

// fn <atom:0>  args=1 vars=6 closure=5 cpool=2 bc=221B file=valdi_test_utils/src/TestRenderer
// args: t
// locals: r, o, l, s, this
// closure: a, <class_fields_init>, n, TestRendererDelegate, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let s;
  let l;
  let o;
  let r;
  r = {};
  o = new n.TestRenderedElementTree(function <atom:0>);
  l = new TestRendererDelegate(function <atom:0>, o);
  this.delegate = l;
  if (!((t == null))) goto L_94;
  t;
  goto L_b5;
  s = new e.Renderer("", undefined.allowedRootElementTypes, l, undefined, false);
  r.current = s;
  this.renderer = s;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=295B file=valdi_test_utils/src/TestRenderer
// args: e
// locals: t, this
function {
  this = this;
  let t;
  this.renderer.renderRoot(e);
  t = this.renderer.getRootVirtualNode();
  if (!((t == null))) goto L_a0;
  t;
  goto L_c1;
  if (!((undefined === undefined.element))) goto L_123;
  if (!((t == null))) goto L_d0;
  t;
  goto L_f2;
  if (!((1 === undefined.children.length))) goto L_123;
  t = t.children[0];
  t.children[0];
  goto L_94;
  return t;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=valdi_test_utils/src/TestRenderer
// locals: this
function {
  this = this;
  this.delegate.flushLayout();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=86B file=valdi_test_utils/src/TestRenderer
// args: e
// locals: e#1, this
function {
  this = this;
  let e#1;
  if (!((e === undefined))) goto L_d;
  e;
  e = 0;
  e#1 = 0;
  this.delegate.flushDraw(e);
  return;
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=75B file=valdi_test_utils/src/TestRenderer
// args: e
function {
  if (!((e == null))) goto L_8;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.element.frame;
}

// fn o  args=2 vars=3 closure=0 cpool=0 bc=100B file=valdi_test_utils/src/TestRenderer
// args: e, t
// locals: r
function {
  let r;
  if (!((e == null))) goto L_c;
  e;
  goto L_35;
  r = undefined.getAttribute("style");
  if (!((r == null))) goto L_40;
  r;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.attributes[t];
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=43 bc=526B file=valdi_test_utils/src/TestRenderer
// args: require, module, exports
// locals: e, t, r, n, TestRendererDelegate, <class_fields_init>, TestRendererDelegate#1, TestRenderer, <class_fields_init>#1, TestRenderer#1, a, o
function {
  a = function a;
  o = function o;
  let TestRenderer#1;
  let TestRendererDelegate#1;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TestRenderer = undefined;
  exports.getAttributeFromStyle = undefined;
  e = require("valdi_core/src/Renderer");
  t = require("valdi_core/src/Device");
  r = require("valdi_core/src/ModuleLoaderGlobal");
  n = require("./TestRenderedElementTree");
  let TestRendererDelegate;
  let <class_fields_init>;
  class TestRendererDelegate extends undefined { ... }
  <proto:TestRendererDelegate>.setRenderCompleteScheduler = function <atom:0>;
  <proto:TestRendererDelegate>.onElementBecameRoot = function <atom:0>;
  <proto:TestRendererDelegate>.onElementMoved = function <atom:0>;
  <proto:TestRendererDelegate>.onElementCreated = function <atom:0>;
  <proto:TestRendererDelegate>.onCustomElementCreated = function <atom:0>;
  <proto:TestRendererDelegate>.attachElementHandle = function <atom:0>;
  <proto:TestRendererDelegate>.sendElementCommand = function <atom:0>;
  <proto:TestRendererDelegate>.onElementDestroyed = function <atom:0>;
  <proto:TestRendererDelegate>.onElementDestroyedFromParent = function <atom:0>;
  <proto:TestRendererDelegate>.onElementAttributeChangeAny = function <atom:0>;
  <proto:TestRendererDelegate>.onElementAttributeChangeNumber = function <atom:0>;
  <proto:TestRendererDelegate>.onElementAttributeChangeString = function <atom:0>;
  <proto:TestRendererDelegate>.onElementAttributeChangeTrue = function <atom:0>;
  <proto:TestRendererDelegate>.onElementAttributeChangeFalse = function <atom:0>;
  <proto:TestRendererDelegate>.onElementAttributeChangeUndefined = function <atom:0>;
  <proto:TestRendererDelegate>.onElementAttributeChangeStyle = function <atom:0>;
  <proto:TestRendererDelegate>.onElementAttributeChangeFunction = function <atom:0>;
  <proto:TestRendererDelegate>.createMainThreadCallback = function <atom:0>;
  <proto:TestRendererDelegate>.setMainThreadCallbackClosureArg = function <atom:0>;
  <proto:TestRendererDelegate>.onNextLayoutComplete = function <atom:0>;
  <proto:TestRendererDelegate>.onNextDraw = function <atom:0>;
  <proto:TestRendererDelegate>.onRenderStart = function <atom:0>;
  <proto:TestRendererDelegate>.onRenderEnd = function <atom:0>;
  <proto:TestRendererDelegate>.onAnimationStart = function <atom:0>;
  <proto:TestRendererDelegate>.onAnimationEnd = function <atom:0>;
  <proto:TestRendererDelegate>.onAnimationCancel = function <atom:0>;
  <proto:TestRendererDelegate>.registerVisibilityObserver = function <atom:0>;
  <proto:TestRendererDelegate>.getNativeView = function <atom:0>;
  <proto:TestRendererDelegate>.getNativeNode = function <atom:0>;
  <proto:TestRendererDelegate>.getCachedElementFrame = function <atom:0>;
  <proto:TestRendererDelegate>.getElementFrame = function <atom:0>;
  <proto:TestRendererDelegate>.takeElementSnapshot = function <atom:0>;
  <proto:TestRendererDelegate>.onUncaughtError = function <atom:0>;
  <proto:TestRendererDelegate>.onDestroyed = function <atom:0>;
  <proto:TestRendererDelegate>.flushLayout = function <atom:0>;
  <proto:TestRendererDelegate>.flushDraw = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TestRendererDelegate>;
  TestRendererDelegate = function <atom:0>;
  // close_loc <class_fields_init>
  TestRendererDelegate#1 = function <atom:0>;
  let TestRenderer;
  let <class_fields_init>#1;
  class TestRenderer extends undefined { ... }
  <proto:TestRenderer>.render = function <atom:0>;
  <proto:TestRenderer>.flushLayout = function <atom:0>;
  <proto:TestRenderer>.flushDraw = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:TestRenderer>;
  TestRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  TestRenderer#1 = function <atom:0>;
  exports.TestRenderer = TestRenderer#1;
  exports.getAttributeFromStyle = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_test_utils/src/TestRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
