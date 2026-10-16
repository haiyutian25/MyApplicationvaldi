// fn r  args=2 vars=2 closure=0 cpool=0 bc=58B file=latex/src/LatexRenderErrors
// args: e, r
function {
  return Object.assign(new Error(r), {reason: e});   // tail call
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=52B file=latex/src/LatexRenderErrors
// args: e
function {
  if (!((e instanceof Error))) goto L_2c;
  return e.message;
  return String(e);
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=52B file=latex/src/LatexRenderErrors
// args: e
function {
  if (!((e instanceof Error))) goto L_32;
  if (!((e.reason == null))) goto L_33;
  e.reason;
  return 0;
  return 0;
}

// fn a  args=0 vars=0 closure=1 cpool=0 bc=45B file=latex/src/LatexRenderErrors
// closure: e
function {
  if (!(e.isVersionAtLeast(24))) goto L_2b;
  return 6;
  return 0;
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=94B file=latex/src/LatexRenderErrors
// args: e
function {
  if (!(e.startsWith("Undefined control sequence"))) goto L_2e;
  return 3;
  if (!(e.startsWith("Unknown environment"))) goto L_5c;
  return 4;
  return 5;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=5 bc=197B file=latex/src/LatexRenderErrors
// args: require, module, exports
// locals: e, r, t, n, a, o
function {
  r = function r;
  t = function t;
  n = function n;
  a = function a;
  o = function o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createLatexRenderError = undefined;
  exports.readLatexRenderErrorMessage = undefined;
  exports.readLatexRenderFailureReason = undefined;
  exports.readLatexLayoutFailureReason = undefined;
  exports.readLatexParseFailureReason = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  exports.createLatexRenderError = r;
  exports.readLatexRenderErrorMessage = t;
  exports.readLatexRenderFailureReason = n;
  exports.readLatexLayoutFailureReason = a;
  exports.readLatexParseFailureReason = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=latex/src/LatexRenderErrors
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
