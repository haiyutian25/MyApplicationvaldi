// fn <atom:0>  args=3 vars=6 closure=2 cpool=0 bc=243B file=dil_sandbox/src/DILSandboxError
// args: r, e, t
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, DILSandboxTimeoutError
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r.message);
  if (!(<class_fields_init>)) goto L_43;
  <class_fields_init>.call(this);
  new new.target(r.message);
  this.mainThreadTraces = e;
  this.workerTraces = t;
  Object.setPrototypeOf(this, DILSandboxTimeoutError.prototype);
  this.name = "DILSandboxTimeoutError";
  this.stack = r.stack;
  return this;
}

// fn t  args=1 vars=6 closure=2 cpool=0 bc=286B file=dil_sandbox/src/DILSandboxError
// args: t
// locals: o, n, s, a, o#1
// closure: r, e
function {
  try { // catch -> L_108
  if (!((t instanceof r))) goto L_f8;
  let a;
  let s;
  let n;
  let o;
  o = t.message;
  n = t.stack;
  s = t.name;
  if (!(("string" == typeof o))) goto L_99;
  goto L_9e;
  // [栈深重同步 3 -> 2]
  a = new r("DIL sandbox error");
  if (!(("string" == typeof s))) goto L_d3;
  e(a, "name", {value: s, configurable: true, writable: true});
  if (!(("string" == typeof n))) goto L_f2;
  a.stack = n;
  n;
  return a;
  return new r(String(t));
  // [栈深重同步 0 -> 1]
  o#1 = <?>;
  try { // catch -> L_11d
  return new r("DIL sandbox threw an error that could not be inspected.");
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=193B file=dil_sandbox/src/DILSandboxError
// args: require, module, exports
// locals: r, e, DILSandboxTimeoutError, <class_fields_init>, DILSandboxTimeoutError#1, t
function {
  t = function t;
  let DILSandboxTimeoutError#1;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSandboxTimeoutError = undefined;
  exports.toDILSandboxError = undefined;
  r = Error;
  e = Object.defineProperty;
  let DILSandboxTimeoutError;
  let <class_fields_init>;
  class DILSandboxTimeoutError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:DILSandboxTimeoutError>;
  DILSandboxTimeoutError = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILSandboxTimeoutError
  DILSandboxTimeoutError#1 = function <atom:0>;
  exports.DILSandboxTimeoutError = DILSandboxTimeoutError#1;
  exports.toDILSandboxError = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
