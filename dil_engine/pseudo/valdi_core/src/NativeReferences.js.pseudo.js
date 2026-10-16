// fn n  args=1 vars=1 closure=1 cpool=0 bc=71B file=valdi_core/src/NativeReferences
// args: t
// closure: s
function {
  return s(t.renderer.contextId);   // tail call
}

// fn s  args=1 vars=1 closure=2 cpool=0 bc=43B file=valdi_core/src/NativeReferences
// args: t
// closure: r, o
function {
  return r.protectNativeRefs(o, t);   // tail call
}

// fn c  args=0 vars=0 closure=2 cpool=0 bc=43B file=valdi_core/src/NativeReferences
// closure: r, o
function {
  return r.protectNativeRefs(o, 0);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=6B file=valdi_core/src/NativeReferences
// closure: e
function {
  return e();   // tail call
}

// fn i  args=1 vars=3 closure=1 cpool=1 bc=67B file=valdi_core/src/NativeReferences
// args: t
// locals: e, r
// closure: c
function {
  let e;
  e = c();
  try { // catch -> L_35
  return t().finally(function <atom:0>);
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_42
  e();
  throw r;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=6B file=valdi_core/src/NativeReferences
// closure: r
function {
  return r();   // tail call
}

// fn a  args=2 vars=4 closure=1 cpool=1 bc=68B file=valdi_core/src/NativeReferences
// args: t, e
// locals: r, o
// closure: s
function {
  let r;
  r = s(t);
  try { // catch -> L_36
  return e().finally(function <atom:0>);
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_43
  r();
  throw o;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn x  args=1 vars=1 closure=2 cpool=0 bc=105B file=valdi_core/src/NativeReferences
// args: t
// closure: r, o
function {
  r.pushCurrentContext(o, undefined);
  try { // catch -> L_3a
  // gosub (finally 块) 64
  return t();
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 64
  throw <?>;
  r.popCurrentContext();
  // ret (finally 块) 
}

// fn u  args=2 vars=2 closure=2 cpool=0 bc=105B file=valdi_core/src/NativeReferences
// args: t, e
// closure: r, o
function {
  r.pushCurrentContext(o, t);
  try { // catch -> L_3a
  // gosub (finally 块) 64
  return e();
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 64
  throw <?>;
  r.popCurrentContext();
  // ret (finally 块) 
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=14B file=valdi_core/src/NativeReferences
// closure: t, e
function {
  // append([], 0, e)
  e;
  return t.apply(undefined, []);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=10B file=valdi_core/src/NativeReferences
// args: e
// closure: t, i
function {
  e = ...0;
  return i(function <atom:0>);   // tail call
}

// fn f  args=1 vars=1 closure=1 cpool=1 bc=3B file=valdi_core/src/NativeReferences
// args: t
// closure: i
function {
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_core/src/NativeReferences
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.contextId = t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=76B file=valdi_core/src/NativeReferences
// locals: this
// closure: r
function {
  this = this;
  r.destroyContext(this.contextId);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=40B file=valdi_core/src/NativeReferences
// args: t
// locals: this
// closure: u
function {
  this = this;
  u(this.contextId, t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=50B file=valdi_core/src/NativeReferences
// closure: NativeReferencesContext, r, o
function {
  return new NativeReferencesContext(r.createContext(o));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=75B file=valdi_core/src/NativeReferences
// args: t
// closure: NativeReferencesContext
function {
  return new NativeReferencesContext(t.renderer.contextId);
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=13 bc=503B file=valdi_core/src/NativeReferences
// args: require, module, exports
// locals: t, e, r, o, n, s, c, i, a, x, u, f, NativeReferencesContext, <class_fields_init>, NativeReferencesContext#1
function {
  n = function n;
  s = function s;
  c = function c;
  i = function i;
  a = function a;
  x = function x;
  u = function u;
  f = function f;
  let NativeReferencesContext#1;
  let o;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.protectNativeRefs = undefined;
  exports.protectNativeRefsForContextId = undefined;
  exports.protectNativeRefsForCurrentContextId = undefined;
  exports.asyncWithProtectedRefsForCurrentContextId = undefined;
  exports.asyncWithProtectedRefsForContextId = undefined;
  exports.withGlobalNativeRefs = undefined;
  exports.withLocalNativeRefs = undefined;
  exports.withCurrentContextProtected = undefined;
  exports.NativeReferencesContext = undefined;
  t = require("./ValdiRuntimeProvider");
  e = require("./ModuleLoaderGlobal");
  r = t.getValdiRuntime();
  o = e.getModuleLoader(module).package;
  exports.protectNativeRefs = n;
  exports.protectNativeRefsForContextId = s;
  exports.protectNativeRefsForCurrentContextId = c;
  exports.asyncWithProtectedRefsForCurrentContextId = i;
  exports.asyncWithProtectedRefsForContextId = a;
  exports.withGlobalNativeRefs = x;
  exports.withLocalNativeRefs = u;
  exports.withCurrentContextProtected = f;
  let NativeReferencesContext;
  let <class_fields_init>;
  class NativeReferencesContext extends undefined { ... }
  <proto:NativeReferencesContext>.destroy = function <atom:0>;
  <proto:NativeReferencesContext>.makeCurrent = function <atom:0>;
  function <atom:0>.create = function <atom:0>;
  function <atom:0>.fromComponent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeReferencesContext>;
  NativeReferencesContext = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc NativeReferencesContext
  NativeReferencesContext#1 = function <atom:0>;
  exports.NativeReferencesContext = NativeReferencesContext#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/NativeReferences
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
