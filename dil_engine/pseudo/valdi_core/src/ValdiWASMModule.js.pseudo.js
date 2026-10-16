// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=valdi_core/src/ValdiWASMModule
// args: e
function {
  e.Promise = 0;
  e[0] = "Promise";
  e.CancelablePromise = 1;
  e[1] = "CancelablePromise";
  e.Void = 2;
  e[2] = "Void";
  return;
}

// fn r  args=0 vars=0 closure=1 cpool=0 bc=38B file=valdi_core/src/ValdiWASMModule
// closure: i
function {
  return i().slice();   // tail call
}

// fn i  args=0 vars=1 closure=2 cpool=0 bc=45B file=valdi_core/src/ValdiWASMModule
// locals: e
// closure: t, o
function {
  let e;
  e = t[o];
  if (!((undefined === e))) goto L_28;
  e = [];
  [];
  t[o] = e;
  e;
  return e;
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=40B file=valdi_core/src/ValdiWASMModule
// args: e
// closure: i
function {
  i().push(e);
  return;
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=72B file=valdi_core/src/ValdiWASMModule
// args: e
function {
  if (!(("object" == typeof e))) goto L_47;
  if (!((null !== e))) goto L_47;
  if (!(("then" in e))) goto L_47;
  return ("function" == typeof e.then);
}

// fn d  args=3 vars=5 closure=3 cpool=0 bc=198B file=valdi_core/src/ValdiWASMModule
// args: e, o, r
// locals: i, n
// closure: t, SynchronousValdiWASMModuleController, l
function {
  let n;
  let i;
  if (!(("" === r))) goto L_5d;
  goto L_8d;
  // [栈深重同步 3 -> 2]
  i = Symbol.for("ValdiWASMModule:".concat(o, ":", r));
  n = t[i];
  if (!((undefined === n))) goto L_c1;
  n = new SynchronousValdiWASMModuleController(e, o, r);
  new SynchronousValdiWASMModuleController(e, o, r);
  t[i] = n;
  l(n);
  return n;
}

// fn s  args=3 vars=5 closure=3 cpool=0 bc=198B file=valdi_core/src/ValdiWASMModule
// args: e, o, r
// locals: i, n
// closure: t, AsyncValdiWASMModuleController, l
function {
  let n;
  let i;
  if (!(("" === r))) goto L_5d;
  goto L_8d;
  // [栈深重同步 3 -> 2]
  i = Symbol.for("ValdiWASMModule:".concat(o, ":", r));
  n = t[i];
  if (!((undefined === n))) goto L_c1;
  n = new AsyncValdiWASMModuleController(e, o, r);
  new AsyncValdiWASMModuleController(e, o, r);
  t[i] = n;
  l(n);
  return n;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=61B file=valdi_core/src/ValdiWASMModule
// args: e, o, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.moduleFactory = e;
  this.packageName = o;
  this.wasmModuleId = t;
  this.isAsync = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=188B file=valdi_core/src/ValdiWASMModule
// locals: this
// closure: require, n
function {
  this = this;
  if (!((undefined === this.module))) goto L_99;
  this.module = this.moduleFactory({__valdiWasmLongClass: require("./Long")});
  if (!(n(this.module))) goto L_99;
  throw new Error("Valdi WASM initialization unexpectedly returned a Promise");
  return this.module;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=131B file=valdi_core/src/ValdiWASMModule
// args: e
// locals: o, this
// closure: h, a
function {
  this = this;
  try { // catch -> L_53
  return this.getValdiWASMModule().getExportedModule(e);
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_82
  throw h(a(e, this.wasmModuleId), o);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=80B file=valdi_core/src/ValdiWASMModule
// args: e, o, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.loadFactory = e;
  this.packageName = o;
  this.wasmModuleId = t;
  this.isAsync = true;
  this.exportedModules = new Map();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/ValdiWASMModule
// locals: this
function {
  this = this;
  return this.loadError;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=79B file=valdi_core/src/ValdiWASMModule
// locals: this
function {
  this = this;
  if (!((this.modulePromise == null))) goto L_4e;
  this.modulePromise;
  return this.startLoading();
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=valdi_core/src/ValdiWASMModule
// args: o
// closure: this, e
function {
  return this.resolveExportedModule(o, e);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=289B file=valdi_core/src/ValdiWASMModule
// args: e
// locals: o, this
function {
  this = this;
  if (!((undefined !== this.module))) goto L_d6;
  try { // catch -> L_a3
  return Promise.resolve(this.resolveExportedModule(this.module, e));
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_d5
  return Promise.reject(o);
  // [栈深重同步 0 -> 1]
  throw <?>;
  return this.getValdiWASMModule().then(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/ValdiWASMModule
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=77B file=valdi_core/src/ValdiWASMModule
// locals: this
function {
  this = this;
  return this.getValdiWASMModule().then(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=66B file=valdi_core/src/ValdiWASMModule
// locals: this
function {
  this = this;
  if (!((undefined !== this.loadError))) goto L_41;
  this.modulePromise = undefined;
  this.loadError = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=89B file=valdi_core/src/ValdiWASMModule
// args: e, o
// locals: t, r, i, this
function {
  this = this;
  let t;
  t = {};
  let i;
  let r;
  const _it1 = o;
  goto L_4f;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  r = <value(_it2)>;
  <done(_it2)>;
  i = <value(_it2)>;
  t[r] = this.createExportedFunction(e, r, i);
  if (!(<done(_it1)>)) goto L_11;
  <value(_it1)>;
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=17B file=valdi_core/src/ValdiWASMModule
// args: e
// closure: require
function {
  return e({__valdiWasmLongClass: require("./Long")});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=13B file=valdi_core/src/ValdiWASMModule
// args: e
// closure: this
function {
  this.module = e;
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=61B file=valdi_core/src/ValdiWASMModule
// args: e
// locals: o
// closure: h, this
function {
  let o;
  o = h(this.loadingErrorContext(), e);
  this.loadError = o;
  throw o;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=3 bc=209B file=valdi_core/src/ValdiWASMModule
// locals: this
// closure: require, h
function {
  this = this;
  this.loadError = undefined;
  this.modulePromise = this.loadFactory().then(function <atom:0>).then(function <atom:0>).catch(function <atom:0>);
  return this.modulePromise;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=62B file=valdi_core/src/ValdiWASMModule
// args: t
// closure: r, c, this, e, o
function {
  if (!((undefined === r))) goto L_39;
  r = c(this.resolveExportedModule(t, e), o);
  c(this.resolveExportedModule(t, e), o);
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=168B file=valdi_core/src/ValdiWASMModule
// args: e
// closure: this, i, t, l
function {
  e = ...0;
  if (!((undefined !== this.module))) goto L_7a;
  return this.invokeFunction(this.module, i, t, e, l);
  return this.loadAndInvokeFunction(i, t, e, l);
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=2 bc=78B file=valdi_core/src/ValdiWASMModule
// args: e, o, t
// locals: r, i, l, this
// closure: c
function {
  this = this;
  let l;
  let i;
  let r;
  r = undefined;
  i = function <atom:0>;
  l = "Failed to invoke Valdi WASM module '".concat(e, "' function '", o, "'");
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=5B file=valdi_core/src/ValdiWASMModule
// args: e
// closure: h, l
function {
  throw h(l, e);
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=8B file=valdi_core/src/ValdiWASMModule
// closure: M, h, l, n
function {
  return M(h(l, n));   // tail call
}

// fn <atom:0>  args=5 vars=8 closure=3 cpool=2 bc=365B file=valdi_core/src/ValdiWASMModule
// args: o, t, r, i, l
// locals: n, n#1, this
// closure: h, M, e
function {
  this = this;
  if (!((r === e.Promise))) goto L_c9;
  try { // catch -> L_91
  // append([], 0, i)
  i;
  return Promise.resolve(t(o).apply(undefined, [])).catch(function <atom:0>);
  // [栈深重同步 0 -> 2]
  n = <?>;
  try { // catch -> L_c8
  return Promise.reject(h(l, n));
  // [栈深重同步 0 -> 2]
  throw <?>;
  if (!((<?> === e.CancelablePromise))) goto L_11a;
  return this.invokeCancelableFunction(o, t, i, l);   // tail call
  if (!((<?> === e.Void))) goto L_16c;
  try { // catch -> L_157
  // append([], 0, i)
  i;
  t(o).apply(undefined, []);
  <?>;
  return;
  // [栈深重同步 0 -> 2]
  n#1 = <?>;
  try { // catch -> L_16b
  queueMicrotask(function <atom:0>);
  // close_loc n#1
  <?>;
  return;
  // [栈深重同步 0 -> 2]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=16B file=valdi_core/src/ValdiWASMModule
// args: e
// closure: o, r
function {
  // append([], 0, r)
  r;
  return o(e).apply(undefined, []);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=5B file=valdi_core/src/ValdiWASMModule
// args: e
// closure: h, i
function {
  throw h(i, e);
}

// fn <atom:0>  args=4 vars=6 closure=3 cpool=2 bc=280B file=valdi_core/src/ValdiWASMModule
// args: o, t, r, i
// locals: l, this
// closure: h, e, M
function {
  this = this;
  let l;
  if (!((t === e.CancelablePromise))) goto L_53;
  return this.loadAndInvokeCancelableFunction(o, r, i);   // tail call
  l = this.getValdiWASMModule().then(function <atom:0>).catch(function <atom:0>);
  if (!((t !== e.Void))) goto L_ef;
  return l;
  l.catch(M);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=5B file=valdi_core/src/ValdiWASMModule
// args: e
// closure: h, r
function {
  throw h(r, e);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=90B file=valdi_core/src/ValdiWASMModule
// closure: i
function {
  if (!((i == null))) goto L_a;
  i;
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?>.cancel == null))) goto L_32;
  <?>.cancel;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.call(i);
}

// fn <atom:0>  args=4 vars=7 closure=2 cpool=2 bc=194B file=valdi_core/src/ValdiWASMModule
// args: e, o, t, r
// locals: i, l, n
// closure: h, u
function {
  let l;
  let i;
  i = undefined;
  l = undefined;
  try { // catch -> L_7d
  // append([], 0, t)
  t;
  i = o(e).apply(undefined, []);
  o(e).apply(undefined, []);
  l = Promise.resolve(i).catch(function <atom:0>);
  Promise.resolve(i).catch(function <atom:0>);
  <?>;
  goto L_b9;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_b8
  l = Promise.reject(h(r, n));
  Promise.reject(h(r, n));
  <?>;
  goto L_b9;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return u(l, function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/ValdiWASMModule
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=41B file=valdi_core/src/ValdiWASMModule
// args: t
// closure: i, r, e, o
function {
  if (!(i)) goto L_11;
  return new Promise(function <atom:0>);
  // append([], 0, o)
  o;
  r = e(t).apply(undefined, []);
  e(t).apply(undefined, []);
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=5B file=valdi_core/src/ValdiWASMModule
// args: e
// closure: h, t
function {
  throw h(t, e);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=99B file=valdi_core/src/ValdiWASMModule
// closure: i, r
function {
  i = true;
  true;
  if (!((r == null))) goto L_12;
  r;
  goto L_62;
  if (!((undefined.cancel == null))) goto L_3b;
  undefined.cancel;
  goto L_62;
  undefined.call(r);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=2 cpool=3 bc=132B file=valdi_core/src/ValdiWASMModule
// args: e, o, t
// locals: r, i, this
// closure: h, u
function {
  this = this;
  let i;
  let r;
  r = undefined;
  i = false;
  return u(this.getValdiWASMModule().then(function <atom:0>).catch(function <atom:0>), function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=321B file=valdi_core/src/ValdiWASMModule
// args: e, o
// locals: t, t#1, this
// closure: h, a
function {
  this = this;
  if (!(this.exportedModules.has(o))) goto L_92;
  return this.exportedModules.get(o);   // tail call
  try { // catch -> L_111
  let t;
  t = e.getExportedModule(o);
  this.exportedModules.set(o, t);
  return t;
  // [栈深重同步 0 -> 1]
  t#1 = <?>;
  try { // catch -> L_140
  throw h(a(o, this.wasmModuleId), t#1);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=241B file=valdi_core/src/ValdiWASMModule
// locals: this
function {
  this = this;
  if (!(("" === this.wasmModuleId))) goto L_79;
  return "Failed to load Valdi WASM package '".concat(this.packageName, "'");
  return "Failed to load Valdi WASM package '".concat(this.packageName, "' module '", this.wasmModuleId, "'");
}

// fn a  args=2 vars=2 closure=0 cpool=0 bc=107B file=valdi_core/src/ValdiWASMModule
// args: e, o
function {
  if (!(("" === o))) goto L_35;
  return "Failed to load Valdi WASM module '".concat(e, "'");
  return "Failed to load Valdi WASM module '".concat(e, "' from group '", o, "'");
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=17B file=valdi_core/src/ValdiWASMModule
// closure: t, o
function {
  if ((t)) goto L_10;
  t = true;
  true;
  o();
  return;
}

// fn u  args=2 vars=4 closure=0 cpool=1 bc=29B file=valdi_core/src/ValdiWASMModule
// args: e, o
// locals: t, r
function {
  let r;
  let t;
  t = false;
  r = e;
  r.cancel = function <atom:0>;
  return r;
}

// fn c  args=2 vars=2 closure=0 cpool=0 bc=4B file=valdi_core/src/ValdiWASMModule
// args: e, o
function {
  return e[o];
}

// fn h  args=2 vars=4 closure=0 cpool=0 bc=132B file=valdi_core/src/ValdiWASMModule
// args: e, o
// locals: t, r
function {
  let r;
  let t;
  if (!((o instanceof Error))) goto L_33;
  goto L_3a;
  // [栈深重同步 1 -> 0]
  t = String(o);
  r = new Error("".concat(e, ": ", t));
  r.cause = o;
  return r;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=valdi_core/src/ValdiWASMModule
// closure: e
function {
  throw e;
}

// fn M  args=1 vars=2 closure=0 cpool=1 bc=105B file=valdi_core/src/ValdiWASMModule
// args: e
// locals: o
function {
  let o;
  o = globalThis;
  if (!(("function" != typeof o.reportError))) goto L_40;
  goto L_68;
  // [栈深重同步 1 -> 0]
  o.reportError(e);
  return;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=30 bc=446B file=valdi_core/src/ValdiWASMModule
// args: require, module, exports
// locals: e, o, t, r, i, l, n, d, s, SynchronousValdiWASMModuleController, <class_fields_init>, SynchronousValdiWASMModuleController#1, AsyncValdiWASMModuleController, <class_fields_init>#1, AsyncValdiWASMModuleController#1, a, u, c, h, M
function {
  r = function r;
  i = function i;
  l = function l;
  n = function n;
  d = function d;
  s = function s;
  a = function a;
  u = function u;
  c = function c;
  h = function h;
  M = function M;
  let AsyncValdiWASMModuleController#1;
  let SynchronousValdiWASMModuleController#1;
  let t;
  let o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AsyncWASMFunctionKind = undefined;
  exports.getValdiWASMModules = undefined;
  exports.createValdiWASMModule = undefined;
  exports.createAsyncValdiWASMModule = undefined;
  if ((e)) goto L_af;
  e = {};
  exports.AsyncWASMFunctionKind = {};
  function <atom:0>({});
  o = Symbol.for("ValdiWASMModuleRegistry");
  t = globalThis;
  exports.getValdiWASMModules = r;
  exports.createValdiWASMModule = d;
  exports.createAsyncValdiWASMModule = s;
  let SynchronousValdiWASMModuleController;
  let <class_fields_init>;
  class SynchronousValdiWASMModuleController extends undefined { ... }
  <proto:SynchronousValdiWASMModuleController>.getValdiWASMModule = function <atom:0>;
  <proto:SynchronousValdiWASMModuleController>.getExportedModule = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SynchronousValdiWASMModuleController>;
  SynchronousValdiWASMModuleController = function <atom:0>;
  // close_loc <class_fields_init>
  SynchronousValdiWASMModuleController#1 = function <atom:0>;
  let AsyncValdiWASMModuleController;
  let <class_fields_init>#1;
  class AsyncValdiWASMModuleController extends undefined { ... }
  <proto:AsyncValdiWASMModuleController>.error = function <atom:0>;
  <proto:AsyncValdiWASMModuleController>.getValdiWASMModule = function <atom:0>;
  <proto:AsyncValdiWASMModuleController>.getExportedModule = function <atom:0>;
  <proto:AsyncValdiWASMModuleController>.preload = function <atom:0>;
  <proto:AsyncValdiWASMModuleController>.clearError = function <atom:0>;
  <proto:AsyncValdiWASMModuleController>.createAsyncExportedModule = function <atom:0>;
  <proto:AsyncValdiWASMModuleController>.startLoading = function <atom:0>;
  <proto:AsyncValdiWASMModuleController>.createExportedFunction = function <atom:0>;
  <proto:AsyncValdiWASMModuleController>.invokeFunction = function <atom:0>;
  <proto:AsyncValdiWASMModuleController>.loadAndInvokeFunction = function <atom:0>;
  <proto:AsyncValdiWASMModuleController>.invokeCancelableFunction = function <atom:0>;
  <proto:AsyncValdiWASMModuleController>.loadAndInvokeCancelableFunction = function <atom:0>;
  <proto:AsyncValdiWASMModuleController>.resolveExportedModule = function <atom:0>;
  <proto:AsyncValdiWASMModuleController>.loadingErrorContext = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AsyncValdiWASMModuleController>;
  AsyncValdiWASMModuleController = function <atom:0>;
  // close_loc <class_fields_init>#1
  AsyncValdiWASMModuleController#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/ValdiWASMModule
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
