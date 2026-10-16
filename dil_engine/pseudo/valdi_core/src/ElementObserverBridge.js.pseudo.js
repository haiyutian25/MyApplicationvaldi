// fn <atom:0>  args=4 vars=5 closure=1 cpool=0 bc=60B file=valdi_core/src/ElementObserverBridge
// args: e, t, r, s
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.x = e;
  this.y = t;
  this.width = r;
  this.height = s;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/ElementObserverBridge
// locals: this
function {
  this = this;
  return this.y;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/ElementObserverBridge
// locals: this
function {
  this = this;
  return this.x;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=valdi_core/src/ElementObserverBridge
// locals: this
function {
  this = this;
  return (this.x + this.width);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=valdi_core/src/ElementObserverBridge
// locals: this
function {
  this = this;
  return (this.y + this.height);
}

// fn <atom:0>  args=0 vars=9 closure=0 cpool=0 bc=395B file=valdi_core/src/ElementObserverBridge
// locals: e, t, r, s, o, i, h, n, this
function {
  this = this;
  let n;
  let h;
  let i;
  let o;
  let s;
  let r;
  let t;
  let e;
  if (((undefined === undefined))) goto L_143;
  e = <to_object>(undefined).x;
  t = <to_object>(undefined).y;
  r = <to_object>(undefined).width;
  s = <to_object>(undefined).height;
  o = <to_object>(undefined).top;
  i = <to_object>(undefined).right;
  h = <to_object>(undefined).bottom;
  n = <to_object>(undefined).left;
  <to_object>(undefined);
  goto L_149;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_23;
  // [栈深重同步 1 -> 0]
  return {x: e, y: t, width: r, height: s, top: o, right: i, bottom: h, left: n};
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=144B file=valdi_core/src/ElementObserverBridge
// args: e
// closure: ObserverRect
function {
  return new ObserverRect(e.x, e.y, e.width, e.height);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=117B file=valdi_core/src/ElementObserverBridge
// args: e
// locals: e#1
// closure: this
function {
  try { // catch -> L_6a
  let e#1;
  e#1 = this.takeRecords();
  if (!((0 !== e#1.length))) goto L_60;
  this.callback(e#1);
  <?>;
  // gosub (finally 块) 112
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 112
  throw <?>;
  e();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=4 vars=7 closure=4 cpool=1 bc=394B file=valdi_core/src/ElementObserverBridge
// args: r, s, o, i
// locals: h, n, this
// closure: <class_fields_init>, e, t, ElementObserverBridge
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let h;
  this.options = r;
  this.hydrate = o;
  this.callback = i;
  this.records = [];
  this.onNotify = function <atom:0>;
  if (!(!e.isVersionAtLeast(278))) goto L_86;
  throw new Error("This host does not support Element observers");
  h = t.getValdiRuntime();
  if (!((undefined === h.createElementObserver))) goto L_e3;
  throw new Error("This runtime does not support native Element observers");
  try { // catch -> L_157
  null;
  r;
  ElementObserverBridge.nextOrder = (ElementObserverBridge.nextOrder ++);
  this.native = h.createElementObserver(s, {order: (ElementObserverBridge.nextOrder ++)});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_189
  throw new TypeError(n.message);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=167B file=valdi_core/src/ElementObserverBridge
// args: e, t
// locals: r, this
function {
  this = this;
  try { // catch -> L_74
  this.native.observe(e, t, this.onNotify);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_a6
  throw new TypeError(r.message);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=169B file=valdi_core/src/ElementObserverBridge
// args: e
// locals: t, this
function {
  this = this;
  try { // catch -> L_76
  this.collectRecords(this.native.unobserve(e));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_a8
  throw new TypeError(t.message);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=196B file=valdi_core/src/ElementObserverBridge
// locals: this
function {
  this = this;
  this.collectRecords(this.native.disconnect());
  if (!(this.options.resize)) goto L_c3;
  this.records = [];
  [];
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=165B file=valdi_core/src/ElementObserverBridge
// locals: e, this
function {
  this = this;
  let e;
  this.collectRecords(this.native.takeRecords());
  e = this.records;
  this.records = [];
  return e;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=128B file=valdi_core/src/ElementObserverBridge
// args: e
// locals: t, this
function {
  this = this;
  let t;
  for (const t of e) {
    this.records.push(this.hydrate(t));
  }
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=13 bc=306B file=valdi_core/src/ElementObserverBridge
// args: require, module, exports
// locals: e, t, ObserverRect, <class_fields_init>, ObserverRect#1, r, ElementObserverBridge, <class_fields_init>#1, ElementObserverBridge#1
function {
  r = function r;
  let ElementObserverBridge#1;
  let ObserverRect#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ObserverRect = undefined;
  exports.observerRect = undefined;
  exports.ElementObserverBridge = undefined;
  e = require("./CompilerIntrinsics");
  t = require("./ValdiRuntimeProvider");
  let ObserverRect;
  let <class_fields_init>;
  class ObserverRect extends undefined { ... }
  <proto:ObserverRect>.top = function <atom:0>;
  <proto:ObserverRect>.left = function <atom:0>;
  <proto:ObserverRect>.right = function <atom:0>;
  <proto:ObserverRect>.bottom = function <atom:0>;
  <proto:ObserverRect>.toJSON = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ObserverRect>;
  ObserverRect = function <atom:0>;
  // close_loc <class_fields_init>
  ObserverRect#1 = function <atom:0>;
  exports.ObserverRect = ObserverRect#1;
  exports.observerRect = r;
  let ElementObserverBridge;
  let <class_fields_init>#1;
  class ElementObserverBridge extends undefined { ... }
  <proto:ElementObserverBridge>.observe = function <atom:0>;
  <proto:ElementObserverBridge>.unobserve = function <atom:0>;
  <proto:ElementObserverBridge>.disconnect = function <atom:0>;
  <proto:ElementObserverBridge>.takeRecords = function <atom:0>;
  <proto:ElementObserverBridge>.collectRecords = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ElementObserverBridge>;
  ElementObserverBridge = function <atom:0>;
  // close_loc <class_fields_init>#1
  // close_loc ElementObserverBridge
  ElementObserverBridge#1 = function <atom:0>;
  exports.ElementObserverBridge = ElementObserverBridge#1;
  ElementObserverBridge#1.nextOrder = 0;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/ElementObserverBridge
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
