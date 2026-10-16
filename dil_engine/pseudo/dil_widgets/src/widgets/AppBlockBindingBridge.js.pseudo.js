// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=91B file=dil_widgets/src/widgets/AppBlockBindingBridge
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.options = t;
  this.callbacks = new Map();
  this.disposed = false;
  this.payload = null;
  this.revision = 0;
  this.updateJson = "";
  return;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=519B file=dil_widgets/src/widgets/AppBlockBindingBridge
// args: t
// locals: i, e, n, this
// closure: h, f
function {
  this = this;
  let n;
  let e;
  let i;
  if (!((undefined === t))) goto L_37;
  if (!((undefined === this.payloadSnapshot))) goto L_37;
  return;
  if (!((t == null))) goto L_41;
  t;
  goto L_62;
  i = h(undefined.value);
  this.callbacks = i.callbacks;
  if (!((undefined === t))) goto L_9b;
  goto L_14c;
  // [栈深重同步 1 -> 0]
  e = f(this.options.bridgeId, i.values, i.callbacks.keys());
  n = JSON.stringify(e);
  if (!((n !== this.payloadSnapshot))) goto L_1e3;
  this.payload = e;
  this.payloadSnapshot = n;
  this.publish();
  return this.updateJson;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=147B file=dil_widgets/src/widgets/AppBlockBindingBridge
// closure: this
function {
  if ((this.disposed)) goto L_92;
  this.publish();
  this.options.requestRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=73B file=dil_widgets/src/widgets/AppBlockBindingBridge
// closure: this
function {
  this.options.scheduleTask(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=80B file=dil_widgets/src/widgets/AppBlockBindingBridge
// args: t
// closure: this, i, n
function {
  this.reportCallbackFailure(i.name, t);
  n();
  return;
}

// fn <atom:0>  args=1 vars=6 closure=2 cpool=2 bc=738B file=dil_widgets/src/widgets/AppBlockBindingBridge
// args: t
// locals: i, e, n, r, this
// closure: d, p
function {
  this = this;
  let n;
  let e;
  let i;
  if ((this.disposed)) goto L_58;
  if (!((null === this.payload))) goto L_5b;
  return;
  i = d(t, this.options.bridgeId);
  if (!((undefined === i))) goto L_ff;
  if (!((this.options.reportWarning == null))) goto L_f7;
  this.options.reportWarning;
  this.options;
  goto L_fd;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, p);
  return;
  e = this.callbacks.get(i.name);
  if (!((undefined === e))) goto L_1f4;
  if (!((this.options.reportWarning == null))) goto L_1c2;
  this.options.reportWarning;
  this.options;
  goto L_1f2;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, p, {bindingName: i.name});
  return;
  n = function <atom:0>;
  try { // catch -> L_288
  // append([], 0, i.args)
  i.args;
  Promise.resolve(e.apply(undefined, [])).then(n, function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_2e1
  this.reportCallbackFailure(i.name, r);
  n();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=85B file=dil_widgets/src/widgets/AppBlockBindingBridge
// locals: this
function {
  this = this;
  this.disposed = true;
  this.callbacks.clear();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=185B file=dil_widgets/src/widgets/AppBlockBindingBridge
// locals: t, this
function {
  this = this;
  let t;
  this.revision = (this.revision + 1);
  t = {revision: this.revision, payload: this.payload};
  this.updateJson = JSON.stringify(t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=149B file=dil_widgets/src/widgets/AppBlockBindingBridge
// args: t, i
// locals: this
// closure: u
function {
  this = this;
  if (!((this.options.reportWarning == null))) goto L_4e;
  this.options.reportWarning;
  this.options;
  goto L_94;
  // [栈深重同步 1 -> 2]
  if (!((i instanceof Error))) goto L_85;
  goto L_8c;
  // [栈深重同步 5 -> 4]
  return;
}

// fn d  args=2 vars=3 closure=6 cpool=0 bc=641B file=dil_widgets/src/widgets/AppBlockBindingBridge
// args: t, e
// locals: r
// closure: k, i, n, g, y, l
function {
  let r;
  r = undefined;
  try { // catch -> L_3c
  r = JSON.parse(t);
  JSON.parse(t);
  <?>;
  goto L_46;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_45
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(k(r))) goto L_280;
  if (!((r.protocol === i))) goto L_280;
  if (!((1 === r.version))) goto L_280;
  if (!((r.bridgeId === e))) goto L_280;
  if (!(("binding:call" === r.type))) goto L_280;
  if (!(("string" == typeof r.name))) goto L_280;
  if (!(n.test(r.name))) goto L_280;
  if (!(Array.isArray(r.args))) goto L_280;
  if (!(g(r.args))) goto L_280;
  if (!(y(r.args, l))) goto L_280;
  return {args: r.args, name: r.name};
  return;
}

// fn h  args=1 vars=9 closure=8 cpool=0 bc=763B file=dil_widgets/src/widgets/AppBlockBindingBridge
// args: i
// locals: e, s, o, a, r, i#1, a#1, c
// closure: k, r, n, t, g, y, l, c
function {
  let a;
  let o;
  let s;
  let e;
  if (!(!k(i))) goto L_28;
  return {callbacks: new Map(), values: {}};
  e = new Map();
  s = {};
  o = Object.entries(i);
  a = Math.min(o.length, r);
  let r;
  r = 0;
  if (!((r < a))) goto L_26c;
  let c;
  let a#1;
  let i#1;
  if (((undefined === undefined))) goto L_be;
  const _it1 = undefined;
  <done(_it1)>;
  i#1 = <value(_it1)>;
  <done(_it1)>;
  a#1 = <value(_it1)>;
  goto L_c8;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_b0;
  // [栈深重同步 1 -> 0]
  if ((!n.test(i#1))) goto L_fd;
  if ((!k(a#1))) goto L_261;
  if (!(("callback" === a#1[t]))) goto L_193;
  if (!(("function" == typeof a#1.value))) goto L_193;
  e.set(i#1, a#1.value);
  goto L_261;
  if ((("value" !== a#1[t]))) goto L_1cf;
  if ((("string" != typeof a#1.value))) goto L_261;
  c = undefined;
  try { // catch -> L_231
  c = JSON.parse(a#1.value);
  JSON.parse(a#1.value);
  <?>;
  goto L_23b;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_23a
  <?>;
  goto L_261;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(g(c))) goto L_260;
  if (!(y(c, l))) goto L_260;
  s[i#1] = c;
  c;
  r = <r_new>;
  (r++);
  goto L_96;
  if (!(y({bindings: s, callbacks: Array.from(e.keys())}, c))) goto L_2e5;
  return {callbacks: e, values: s};
  return {callbacks: new Map(), values: {}};
}

// fn f  args=3 vars=3 closure=1 cpool=0 bc=75B file=dil_widgets/src/widgets/AppBlockBindingBridge
// args: t, e, n
// closure: i
function {
  return {protocol: i, version: 1, bridgeId: t, bindings: e, callbacks: Array.from(n)};
}

// fn g  args=1 vars=1 closure=2 cpool=0 bc=15B file=dil_widgets/src/widgets/AppBlockBindingBridge
// args: t
// closure: b, o
function {
  return b(t, 0, {remaining: o});   // tail call
}

// fn b  args=3 vars=6 closure=3 cpool=0 bc=387B file=dil_widgets/src/widgets/AppBlockBindingBridge
// args: t, i, e
// locals: n, n#1, r
// closure: a, b, k
function {
  e.remaining = (e.remaining - 1);
  if (!((e.remaining < 0))) goto L_56;
  return false;
  if (!((null === t))) goto L_5e;
  return true;
  if (!(("boolean" == typeof t))) goto L_6b;
  return true;
  if (!(("number" == typeof t))) goto L_9f;
  return Number.isFinite(t);   // tail call
  if (!(("string" == typeof t))) goto L_b0;
  return (t.length <= a);
  if (((i >= 8))) goto L_c0;
  if (!(("object" != typeof t))) goto L_c5;
  return false;
  if (!(Array.isArray(t))) goto L_115;
  let n;
  for (const n of t) {
    if (!(!b(n, (i + 1), e))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
  if (!(!k(t))) goto L_11e;
  return false;
  let r;
  let n#1;
  const _it2 = Object.entries(t);
  goto L_17a;
  const _it3 = <value(_it2)>;
  <done(_it3)>;
  n#1 = <value(_it3)>;
  <done(_it3)>;
  r = <value(_it3)>;
  if (((n#1.length > a))) goto L_171;
  if (!(!b(r, (i + 1), e))) goto L_17a;
  return false;
  // [栈深重同步 0 -> 3]
  if (!(<done(<?>)>)) goto L_151;
  <value(<?>)>;
  return true;
}

// fn y  args=2 vars=3 closure=0 cpool=0 bc=79B file=dil_widgets/src/widgets/AppBlockBindingBridge
// args: t, i
// locals: e
function {
  try { // catch -> L_44
  let e;
  e = JSON.stringify(t);
  if (!((undefined !== e))) goto L_42;
  return (e.length <= i);
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_4e
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn k  args=1 vars=2 closure=0 cpool=0 bc=164B file=dil_widgets/src/widgets/AppBlockBindingBridge
// args: t
// locals: i
function {
  let i;
  if (((null === t))) goto L_40;
  if ((("object" != typeof t))) goto L_40;
  if (!(Array.isArray(t))) goto L_45;
  return false;
  i = Object.getPrototypeOf(t);
  if (((null === i))) goto L_a3;
  return (i === Object.prototype);
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=15 bc=276B file=dil_widgets/src/widgets/AppBlockBindingBridge
// args: require, module, exports
// locals: t, i, e, n, r, s, o, a, l, c, p, u, AppBlockBindingBridge, <class_fields_init>, AppBlockBindingBridge#1, d, h, f, g, b, y, k
function {
  d = function d;
  h = function h;
  f = function f;
  g = function g;
  b = function b;
  y = function y;
  k = function k;
  let AppBlockBindingBridge#1;
  let u;
  let p;
  let c;
  let l;
  let a;
  let o;
  let s;
  let r;
  let n;
  let e;
  let i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AppBlockBindingBridge = undefined;
  t = "__appBlockBindEntry";
  i = "app-block-messenger";
  e = 1;
  n = new RegExp("^[A-Za-z][A-Za-z0-9_]{0,63}$");
  r = 32;
  s = 8;
  o = 256;
  a = 4096;
  l = 16384;
  c = 16384;
  p = "Ignored an invalid AppBlock binding callback message.";
  u = "AppBlock binding callback failed.";
  let AppBlockBindingBridge;
  let <class_fields_init>;
  class AppBlockBindingBridge extends undefined { ... }
  <proto:AppBlockBindingBridge>.update = function <atom:0>;
  <proto:AppBlockBindingBridge>.handleMessage = function <atom:0>;
  <proto:AppBlockBindingBridge>.dispose = function <atom:0>;
  <proto:AppBlockBindingBridge>.publish = function <atom:0>;
  <proto:AppBlockBindingBridge>.reportCallbackFailure = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AppBlockBindingBridge>;
  AppBlockBindingBridge = function <atom:0>;
  // close_loc <class_fields_init>
  AppBlockBindingBridge#1 = function <atom:0>;
  exports.AppBlockBindingBridge = AppBlockBindingBridge#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/AppBlockBindingBridge
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
