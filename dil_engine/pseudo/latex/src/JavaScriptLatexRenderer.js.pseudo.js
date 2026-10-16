// fn <atom:0>  args=2 vars=4 closure=4 cpool=0 bc=315B file=latex/src/JavaScriptLatexRenderer
// args: r, s
// locals: t, i
// closure: e, a, t, n
function {
  try { // catch -> L_105
  let t;
  t = e.renderMathSvg(r, s);
  return {baseline: a(t.viewBox, t.height), height: t.height, shapes: [], svg: t.svg, width: t.width};
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_13a
  if (!(t.isVersionAtLeast(10))) goto L_138;
  throw n(i);
  throw i;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn a  args=2 vars=3 closure=0 cpool=2 bc=294B file=latex/src/JavaScriptLatexRenderer
// args: e, r
// locals: t
function {
  let t;
  t = e.trim().split(new RegExp("\\s+")).map(Number);
  if (((4 !== t.length))) goto L_bf;
  if ((!Number.isFinite(t[1]))) goto L_bf;
  if (!((t[3] <= 0))) goto L_c3;
  return r;
  return Math.min(r, Math.max(0, ((-t[1] * r) / t[3])));
}

// fn n  args=1 vars=2 closure=3 cpool=0 bc=238B file=latex/src/JavaScriptLatexRenderer
// args: t
// locals: s
// closure: e, r, i
function {
  let s;
  if (!(!(t instanceof e.MathSvgRenderError))) goto L_7a;
  return r.createLatexRenderError(0, r.readLatexRenderErrorMessage(t));   // tail call
  s = t.message;
  return r.createLatexRenderError(i(t.reason, s), s);   // tail call
}

// fn i  args=2 vars=2 closure=1 cpool=0 bc=105B file=latex/src/JavaScriptLatexRenderer
// args: e, t
// closure: r
function {
  if (!((e === 1))) goto L_8;
  return 2;
  if (!((e === 2))) goto L_35;
  return r.readLatexParseFailureReason(t);   // tail call
  if (!((e === 3))) goto L_61;
  return r.readLatexLayoutFailureReason();   // tail call
  if (!((e === 0))) goto L_68;
  return 0;
  e;
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=4 bc=137B file=latex/src/JavaScriptLatexRenderer
// args: require, module, exports
// locals: e, r, t, s, a, n, i
function {
  a = function a;
  n = function n;
  i = function i;
  let s;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.JAVASCRIPT_LATEX_RENDERER = undefined;
  e = require("dil_math/src/renderMathSvg");
  r = require("latex/src/LatexRenderErrors");
  t = require("valdi_core/src/CompilerIntrinsics");
  s = function <atom:0>;
  exports.JAVASCRIPT_LATEX_RENDERER = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=latex/src/JavaScriptLatexRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
