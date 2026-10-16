// fn e  args=1 vars=1 closure=1 cpool=0 bc=20B file=dil_sandbox/src/DILSandboxCallbackValue
// args: e
// closure: t
function {
  if (!((undefined !== e))) goto L_13;
  return t(e, new Set());   // tail call
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=6B file=dil_sandbox/src/DILSandboxCallbackValue
// args: e
// closure: t, r
function {
  return t(e, r);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=20B file=dil_sandbox/src/DILSandboxCallbackValue
// args: <atom:0>
// locals: e, o
// closure: t, r
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  return [e, t(o, r)];
}

// fn t  args=2 vars=2 closure=1 cpool=2 bc=667B file=dil_sandbox/src/DILSandboxCallbackValue
// args: e, r
// closure: t
function {
  if (((null === e))) goto L_1b;
  if ((("string" == typeof e))) goto L_1b;
  if (!(("boolean" == typeof e))) goto L_1f;
  return e;
  if (!(("number" == typeof e))) goto L_57;
  if (!(Number.isFinite(e))) goto L_57;
  return e;
  if ((("object" != typeof e))) goto L_11f;
  if (((null === e))) goto L_11f;
  if (!(!Array.isArray(e))) goto L_130;
  if (!((Object.getPrototypeOf(e) !== Object.prototype))) goto L_130;
  if (!((null !== Object.getPrototypeOf(e)))) goto L_130;
  throw new TypeError("DIL callback results must be plain JSON data or undefined.");
  if (!(r.has(e))) goto L_167;
  throw new TypeError("DIL callback results cannot contain cyclic data.");
  r.add(e);
  try { // catch -> L_26d
  if (!(Array.isArray(e))) goto L_1ed;
  goto L_266;
  // [栈深重同步 1 -> 0]
  // gosub (finally 块) 627
  return Object.fromEntries(Object.entries(e).map(function <atom:0>));
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 627
  throw <?>;
  r.delete(e);
  // ret (finally 块) 
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=85B file=dil_sandbox/src/DILSandboxCallbackValue
// args: require, module, exports
// locals: e, t
function {
  e = function e;
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.copyDILSandboxCallbackValue = undefined;
  exports.copyDILSandboxCallbackValue = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxCallbackValue
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
