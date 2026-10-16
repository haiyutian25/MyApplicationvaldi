// fn o  args=0 vars=0 closure=1 cpool=0 bc=44B file=dil_sandbox/src/DILSandboxGlobals
// closure: t
function {
  return Array.from(t);   // tail call
}

// fn a  args=1 vars=1 closure=1 cpool=0 bc=49B file=dil_sandbox/src/DILSandboxGlobals
// args: e
// closure: l
function {
  l(e, true);
  Object.freeze(e);
  return;
}

// fn n  args=2 vars=2 closure=2 cpool=0 bc=94B file=dil_sandbox/src/DILSandboxGlobals
// args: r, t
// closure: l, e
function {
  l(r, false);
  if (!(t)) goto L_33;
  goto L_5d;
  // [栈深重同步 1 -> 0]
  Object.freeze(r);
  return;
}

// fn l  args=2 vars=4 closure=2 cpool=0 bc=259B file=dil_sandbox/src/DILSandboxGlobals
// args: e, r
// locals: o, e#1
// closure: t, i
function {
  let o;
  o = e;
  if (!((null !== o))) goto L_102;
  if (!((o !== Object.prototype))) goto L_102;
  let e#1;
  for (const e#1 of Reflect.ownKeys(o)) {
    if (!(("string" == typeof e#1))) goto L_bb;
    if ((r)) goto L_8d;
    if (!(("onmessage" !== e#1))) goto L_bb;
    if ((t.has(e#1))) goto L_c7;
    i(o, e#1);
  }
  o = Object.getPrototypeOf(o);
  Object.getPrototypeOf(o);
  goto L_5;
  return;
}

// fn i  args=2 vars=5 closure=0 cpool=0 bc=299B file=dil_sandbox/src/DILSandboxGlobals
// args: e, r
// locals: o, o#1, t
function {
  let t;
  try { // catch -> L_38
  Reflect.set(e, r, undefined);
  <?>;
  goto L_42;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_41
  <?>;
  goto L_42;
  // [栈深重同步 0 -> 1]
  throw <?>;
  try { // catch -> L_76
  Reflect.deleteProperty(e, r);
  <?>;
  goto L_80;
  // [栈深重同步 0 -> 1]
  o#1 = <?>;
  try { // catch -> L_7f
  <?>;
  goto L_80;
  // [栈深重同步 0 -> 1]
  throw <?>;
  t = Object.getOwnPropertyDescriptor(e, r);
  if (((undefined === t))) goto L_e8;
  if (!(("value" in t))) goto L_e8;
  if (!(!(undefined === t.value))) goto L_12a;
  throw new Error("Failed to remove sandbox global '".concat(String(r), "'."));
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=5 bc=753B file=dil_sandbox/src/DILSandboxGlobals
// args: require, module, exports
// locals: e, r, t, o, a, n, l, i
function {
  o = function o;
  a = function a;
  n = function n;
  l = function l;
  i = function i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getDILSandboxAllowedGlobalNames = undefined;
  exports.lockDownSandboxGlobal = undefined;
  exports.hardenSandboxGlobal = undefined;
  e = require("dil_renderer/src/DILApiFacade");
  r = require("./DILComponentNames");
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483465>>] = "Promise";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483466>>] = "Proxy";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483467>>] = "RangeError";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483468>>] = "ReferenceError";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483469>>] = "Reflect";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483470>>] = "RegExp";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483471>>] = "Set";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483472>>] = "SharedArrayBuffer";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483473>>] = "String";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483474>>] = "Symbol";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483475>>] = "SyntaxError";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483476>>] = "TextEncoder";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483477>>] = "TEMPORARY";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483478>>] = "PERSISTENT";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483479>>] = "TypeError";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483480>>] = "URIError";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483481>>] = "Uint8Array";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483482>>] = "Uint8ClampedArray";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483483>>] = "Uint16Array";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483484>>] = "Uint32Array";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483485>>] = "WeakMap";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483486>>] = "WeakRef";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483487>>] = "WeakSet";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483488>>] = "decodeURI";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483489>>] = "decodeURIComponent";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483490>>] = "encodeURI";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483491>>] = "encodeURIComponent";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483492>>] = "escape";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483493>>] = "eval";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483494>>] = "globalThis";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483495>>] = "isFinite";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483496>>] = "isNaN";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483497>>] = "onmessage";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483498>>] = "parseFloat";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483499>>] = "parseInt";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483500>>] = "undefined";
  ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"][<<bad:2147483501>>] = "unescape";
  // append(["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"], 69, r.getDILComponentNames())
  r.getDILComponentNames();
  t = new Set(["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "DebuggerInternal", "Error", "EvalError", "FinalizationRegistry", "Float16Array", "Float32Array", "Float64Array", "Function", "HermesES6Internal", "HermesInternal", "Infinity", "Intl", "Int8Array", "Int16Array", "Int32Array", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object"]);
  exports.getDILSandboxAllowedGlobalNames = o;
  exports.lockDownSandboxGlobal = a;
  exports.hardenSandboxGlobal = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxGlobals
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
