// fn s  args=1 vars=3 closure=2 cpool=0 bc=203B file=valdi_core/src/IntersectionObserver
// args: e
// locals: s, i
// closure: t, r
function {
  let s;
  if (!(!t.isVersionAtLeast(278))) goto L_3d;
  throw new Error("This host does not support Element observers");
  s = String(e);
  try { // catch -> L_98
  return r.getValdiRuntime().parseElementObserverMargin(s);
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_ca
  throw new SyntaxError(i.message);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=44B file=valdi_core/src/IntersectionObserver
// args: e
function {
  return !Number.isFinite(e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=11B file=valdi_core/src/IntersectionObserver
// args: e
function {
  if (((e < 0))) goto L_a;
  return (e > 1);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=valdi_core/src/IntersectionObserver
// args: e, r
function {
  return (e - r);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=277B file=valdi_core/src/IntersectionObserver
// args: r
// closure: e
function {
  null;
  r;
  if (!((null === r.rootBounds))) goto L_30;
  goto L_77;
  // [栈深重同步 2 -> 1]
  return {rootBounds: e.observerRect(r.rootBounds), boundingClientRect: e.observerRect(r.boundingClientRect), intersectionRect: e.observerRect(r.intersectionRect)};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=40B file=valdi_core/src/IntersectionObserver
// args: e
// closure: r, this
function {
  return r.call(this, e, this);   // tail call
}

// fn <atom:0>  args=2 vars=9 closure=3 cpool=5 bc=1380B file=valdi_core/src/IntersectionObserver
// args: r, t
// locals: i, o, n, c, l, e, this
// closure: e, <class_fields_init>, s
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let l;
  let c;
  let n;
  let o;
  let i;
  if (!(("function" != typeof r))) goto L_39;
  throw new TypeError("IntersectionObserver callback must be a function");
  if (!((t == null))) goto L_44;
  t;
  goto L_65;
  if (!((undefined.root == null))) goto L_6b;
  undefined.root;
  this.root = null;
  if (!((t == null))) goto L_7f;
  t;
  goto L_a0;
  if (!((undefined === undefined.rootMargin))) goto L_aa;
  goto L_cc;
  // [栈深重同步 2 -> 1]
  i = s(t.rootMargin);
  if (!((t == null))) goto L_d9;
  t;
  goto L_fa;
  if (!((undefined === undefined.scrollMargin))) goto L_104;
  goto L_126;
  // [栈深重同步 2 -> 1]
  o = s(t.scrollMargin);
  this.rootMargin = i.text;
  this.scrollMargin = o.text;
  if (!((t == null))) goto L_18f;
  t;
  goto L_1b0;
  if (!((undefined.threshold == null))) goto L_1b6;
  undefined.threshold;
  n = 0;
  if (!(Array.isArray(n))) goto L_1ea;
  goto L_1f0;
  // [栈深重同步 1 -> 0]
  c = [n].map(Number);
  if (!(c.some(function <atom:0>))) goto L_254;
  throw new TypeError("IntersectionObserver thresholds must be finite");
  if (!(c.some(function <atom:0>))) goto L_28e;
  throw new RangeError("IntersectionObserver thresholds must be between 0 and 1");
  if (!((0 === c.length))) goto L_2c4;
  goto L_2ed;
  // [栈深重同步 4 -> 3]
  this.thresholds = Object.freeze(c.sort(function <atom:0>));
  if (!((t == null))) goto L_309;
  t;
  goto L_32a;
  this.trackVisibility = Boolean(undefined.trackVisibility);
  if (!((t == null))) goto L_343;
  t;
  goto L_364;
  if (!((undefined.delay == null))) goto L_36a;
  undefined.delay;
  l = (0 | Number(0));
  if (!(this.trackVisibility)) goto L_3c5;
  goto L_3c8;
  // [栈深重同步 2 -> 1]
  this.delay = l;
  this.bridge = new e.ElementObserverBridge({resize: false, rootMargin: i.values, scrollMargin: o.values, thresholds: this.thresholds, trackVisibility: this.trackVisibility, delay: this.delay}, this.root, function <atom:0>, function <atom:0>);
  let e;
  for (const e of ["root", "rootMargin", "scrollMargin", "thresholds", "trackVisibility", "delay"]) {
    Object.defineProperty(this, e, {writable: false});
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=75B file=valdi_core/src/IntersectionObserver
// args: e
// locals: this
function {
  this = this;
  this.bridge.observe(e, 0);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=valdi_core/src/IntersectionObserver
// args: e
// locals: this
function {
  this = this;
  this.bridge.unobserve(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=valdi_core/src/IntersectionObserver
// locals: this
function {
  this = this;
  this.bridge.disconnect();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=valdi_core/src/IntersectionObserver
// locals: this
function {
  this = this;
  return this.bridge.takeRecords();   // tail call
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=6 bc=178B file=valdi_core/src/IntersectionObserver
// args: require, module, exports
// locals: e, r, t, s, IntersectionObserver, <class_fields_init>, IntersectionObserver#1
function {
  s = function s;
  let IntersectionObserver#1;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IntersectionObserver = undefined;
  e = require("./ElementObserverBridge");
  r = require("./ValdiRuntimeProvider");
  t = require("./CompilerIntrinsics");
  let IntersectionObserver;
  let <class_fields_init>;
  class IntersectionObserver extends undefined { ... }
  <proto:IntersectionObserver>.observe = function <atom:0>;
  <proto:IntersectionObserver>.unobserve = function <atom:0>;
  <proto:IntersectionObserver>.disconnect = function <atom:0>;
  <proto:IntersectionObserver>.takeRecords = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:IntersectionObserver>;
  IntersectionObserver = function <atom:0>;
  // close_loc <class_fields_init>
  IntersectionObserver#1 = function <atom:0>;
  exports.IntersectionObserver = IntersectionObserver#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/IntersectionObserver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
