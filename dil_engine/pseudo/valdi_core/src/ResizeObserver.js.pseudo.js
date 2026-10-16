// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=234B file=valdi_core/src/ResizeObserver
// args: r
// closure: e
function {
  return {target: r.target, contentRect: e.observerRect(r.contentRect), contentBoxSize: r.contentBoxSize, borderBoxSize: r.borderBoxSize, devicePixelContentBoxSize: r.devicePixelContentBoxSize};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=40B file=valdi_core/src/ResizeObserver
// args: e
// closure: t, this
function {
  return t.call(this, e, this);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=2 bc=99B file=valdi_core/src/ResizeObserver
// args: t
// locals: this
// closure: e, <class_fields_init>, r
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  if (!(("function" != typeof t))) goto L_28;
  throw new TypeError("ResizeObserver callback must be a function");
  this.bridge = new e.ElementObserverBridge(r, null, function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=282B file=valdi_core/src/ResizeObserver
// args: e, r
// locals: t, o, this
function {
  this = this;
  let o;
  let t;
  if (!((r == null))) goto L_12;
  r;
  goto L_33;
  if (!((undefined === undefined.box))) goto L_3d;
  goto L_5f;
  // [栈深重同步 1 -> 0]
  t = r.box;
  o = undefined;
  if (!((t === "content-box"))) goto L_76;
  o = 0;
  0;
  goto L_ce;
  if (!((t === "border-box"))) goto L_87;
  o = 1;
  1;
  goto L_ce;
  if (!((t === "device-pixel-content-box"))) goto L_98;
  o = 2;
  2;
  goto L_ce;
  throw new TypeError("Invalid ResizeObserver box: ".concat(t));
  t;
  this.bridge.observe(e, o);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=valdi_core/src/ResizeObserver
// args: e
// locals: this
function {
  this = this;
  this.bridge.unobserve(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=valdi_core/src/ResizeObserver
// locals: this
function {
  this = this;
  this.bridge.disconnect();
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=4 bc=192B file=valdi_core/src/ResizeObserver
// args: require, module, exports
// locals: e, r, ResizeObserver, <class_fields_init>, ResizeObserver#1
function {
  let ResizeObserver#1;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ResizeObserver = undefined;
  e = require("./ElementObserverBridge");
  r = {resize: true, rootMargin: [], scrollMargin: [], thresholds: [], trackVisibility: false, delay: 0};
  let ResizeObserver;
  let <class_fields_init>;
  class ResizeObserver extends undefined { ... }
  <proto:ResizeObserver>.observe = function <atom:0>;
  <proto:ResizeObserver>.unobserve = function <atom:0>;
  <proto:ResizeObserver>.disconnect = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ResizeObserver>;
  ResizeObserver = function <atom:0>;
  // close_loc <class_fields_init>
  ResizeObserver#1 = function <atom:0>;
  exports.ResizeObserver = ResizeObserver#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/ResizeObserver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
