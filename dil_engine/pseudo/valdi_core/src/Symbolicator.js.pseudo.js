// fn c  args=1 vars=1 closure=3 cpool=0 bc=84B file=valdi_core/src/Symbolicator
// args: e
// closure: o, t, module
function {
  if (!(o)) goto L_52;
  return o(e, t.getModuleLoader(module).getOrCreateSourceMap);
  return e;
}

// fn a  args=1 vars=3 closure=2 cpool=0 bc=266B file=valdi_core/src/Symbolicator
// args: e
// locals: r, t
// closure: o, c
function {
  let t;
  let r;
  if ((!o)) goto L_31;
  if (!(!e.stack)) goto L_35;
  return e;
  if (!(e.originalStack)) goto L_5b;
  return e;
  r = c(e.stack);
  t = new e.constructor(e.message);
  t.stack = r;
  t.originalStack = e.stack;
  return t;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=404B file=valdi_core/src/Symbolicator
// args: require, module, exports
// locals: e, r, t, o, i, c, a
function {
  c = function c;
  a = function a;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.symbolicateErrorStack = undefined;
  exports.symbolicate = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  r = require("source_map/src/StackSymbolicator");
  t = require("./ModuleLoaderGlobal");
  o = undefined;
  try { // catch -> L_d2
  o = r.symbolicateStack;
  r.symbolicateStack;
  <?>;
  goto L_17b;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_17a
  if (!(e.isLoggingEnabled)) goto L_176;
  console.log("symbolicateStackFunction error: ".concat(i.message));
  <?>;
  goto L_17b;
  // [栈深重同步 0 -> 1]
  throw <?>;
  exports.symbolicateErrorStack = c;
  exports.symbolicate = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Symbolicator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
