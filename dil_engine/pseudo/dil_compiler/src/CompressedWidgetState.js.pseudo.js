// fn o  args=1 vars=1 closure=1 cpool=0 bc=46B file=dil_compiler/src/CompressedWidgetState
// args: e
// closure: a
function {
  return a(JSON.parse(e));   // tail call
}

// fn a  args=1 vars=4 closure=6 cpool=0 bc=417B file=dil_compiler/src/CompressedWidgetState
// args: s
// locals: e, o, o#1
// closure: p, t, r, i, n, e
function {
  if (!(!p(s))) goto L_8;
  return s;
  try { // catch -> L_131
  let o;
  let e;
  e = t.Base64.toByteArray(s.__compressed);
  o = undefined;
  if (!(r.isVersionAtLeast(15))) goto L_d6;
  goto L_fe;
  // [栈深重同步 1 -> 0]
  o = i.gunzipUtf8(e);
  i.gunzipUtf8(e);
  return JSON.parse(o);
  // [栈深重同步 0 -> 1]
  o#1 = <?>;
  try { // catch -> L_1a0
  throw new e.DILDiagnosticError({phase: "DIL JSON parse", message: "Failed to decode compressed widget state: ".concat(String(o#1))});
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn p  args=1 vars=1 closure=2 cpool=0 bc=93B file=dil_compiler/src/CompressedWidgetState
// args: e
// closure: u, s
function {
  if (!(!!u(e))) goto L_5c;
  if (!((e.__encoding === s))) goto L_5c;
  return ("string" == typeof e.__compressed);
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_compiler/src/CompressedWidgetState
// args: e
function {
  if (!((null !== e))) goto L_3e;
  if (!(("object" == typeof e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=4 bc=183B file=dil_compiler/src/CompressedWidgetState
// args: require, module, exports
// locals: e, t, r, i, s, n, o, a, p, u
function {
  o = function o;
  a = function a;
  p = function p;
  u = function u;
  let n;
  let s;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.parseWidgetInitialStateJson = undefined;
  exports.parseWidgetInitialStateValue = undefined;
  e = require("./DILError");
  t = require("coreutils/src/Base64");
  r = require("valdi_core/src/CompilerIntrinsics");
  i = require("./CompressedWidgetStateInflater");
  s = "gzip-json-base64url-v1";
  n = 16777216;
  exports.parseWidgetInitialStateJson = o;
  exports.parseWidgetInitialStateValue = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/CompressedWidgetState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
