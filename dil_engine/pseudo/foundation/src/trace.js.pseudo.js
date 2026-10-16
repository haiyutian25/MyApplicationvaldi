// fn t  args=2 vars=2 closure=1 cpool=0 bc=15B file=foundation/src/trace
// args: e, t
// closure: r
function {
  if (!(r)) goto L_c;
  return r(e, t);
  return t();
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=355B file=foundation/src/trace
// args: require, module, exports
// locals: e, r, o, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.trace = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  r = undefined;
  try { // catch -> L_b0
  r = require("valdi_core/src/utils/Trace").trace;
  require("valdi_core/src/utils/Trace").trace;
  <?>;
  goto L_157;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_156
  if (!(e.isLoggingEnabled)) goto L_152;
  console.log("Could not load Trace module: ".concat(o.message));
  <?>;
  goto L_157;
  // [栈深重同步 0 -> 1]
  throw <?>;
  exports.trace = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/trace
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
