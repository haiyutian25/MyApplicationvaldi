// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=100B file=latex/src/NativeLatexRenderer
// args: r, a
// locals: n
// closure: e, t, s
function {
  try { // catch -> L_2e
  return e.renderMathExpression(r, a);
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_63
  if (!(t.isVersionAtLeast(10))) goto L_61;
  throw s(n);
  throw n;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn s  args=1 vars=2 closure=2 cpool=0 bc=90B file=latex/src/NativeLatexRenderer
// args: e
// locals: t
// closure: r, n
function {
  let t;
  t = r.readLatexRenderErrorMessage(e);
  return r.createLatexRenderError(n(e, t), t);   // tail call
}

// fn n  args=2 vars=2 closure=2 cpool=0 bc=142B file=latex/src/NativeLatexRenderer
// args: t, a
// closure: e, r
function {
  if (!((e.readMathRenderFailureReason(t) === 1))) goto L_2d;
  return 2;
  if (!((e.readMathRenderFailureReason(t) === 2))) goto L_5a;
  return r.readLatexParseFailureReason(a);   // tail call
  if (!((e.readMathRenderFailureReason(t) === 3))) goto L_86;
  return r.readLatexLayoutFailureReason();   // tail call
  if (!((e.readMathRenderFailureReason(t) === 0))) goto L_8d;
  return 0;
  e.readMathRenderFailureReason(t);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=133B file=latex/src/NativeLatexRenderer
// args: require, module, exports
// locals: e, r, t, a, s, n
function {
  s = function s;
  n = function n;
  let a;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NATIVE_LATEX_RENDERER = undefined;
  e = require("math_renderer/src/MathRenderer");
  r = require("latex/src/LatexRenderErrors");
  t = require("valdi_core/src/CompilerIntrinsics");
  a = function <atom:0>;
  exports.NATIVE_LATEX_RENDERER = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=latex/src/NativeLatexRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
