// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=164B file=dil_math/src/renderMathSvg
// args: t, e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, MathSvgRenderError
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.reason = t;
  Object.setPrototypeOf(this, MathSvgRenderError.prototype);
  this.name = "MathSvgRenderError";
  this.message = e;
  return this;
}

// fn a  args=2 vars=6 closure=6 cpool=0 bc=475B file=dil_math/src/renderMathSvg
// args: t, r
// locals: o, s, i, h
// closure: MathSvgRenderError, e, u, d, v, n
function {
  let h;
  let i;
  let o;
  if (!((0 === t.trim().length))) goto L_41;
  throw new MathSvgRenderError(1, "Cannot render an empty math expression.");
  o = undefined;
  try { // catch -> L_9b
  o = e.texToSvgOutput(t, (true === r.block));
  e.texToSvgOutput(t, (true === r.block));
  <?>;
  goto L_a6;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_a5
  throw u(s);
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(!o.hasSvg())) goto L_de;
  throw new MathSvgRenderError(3, "MathJax did not produce an SVG element.");
  i = d(o);
  if (!((r.color == null))) goto L_117;
  r.color;
  v(o, i, n);
  h = o.serializeSvg();
  if (!((undefined === h))) goto L_156;
  throw new MathSvgRenderError(3, "MathJax could not serialize the SVG element.");
  return {height: i.height, svg: h, viewBox: i.viewBox, width: i.width};
}

// fn u  args=1 vars=2 closure=3 cpool=0 bc=143B file=dil_math/src/renderMathSvg
// args: e
// locals: t
// closure: t, MathSvgRenderError, g
function {
  if (!((e instanceof t.MathJaxRenderError))) goto L_83;
  let t;
  if (!((0 === e.phase))) goto L_54;
  goto L_55;
  // [栈深重同步 1 -> 0]
  t = 3;
  return new MathSvgRenderError(t, e.message);
  return new MathSvgRenderError(0, g(e));
}

// fn g  args=1 vars=1 closure=0 cpool=0 bc=52B file=dil_math/src/renderMathSvg
// args: t
function {
  if (!((t instanceof Error))) goto L_2c;
  return t.message;
  return String(t);
}

// fn v  args=3 vars=3 closure=1 cpool=0 bc=486B file=dil_math/src/renderMathSvg
// args: t, e, n
// closure: r
function {
  t.removeSvgAttributeRecursively("style");
  t.removeZeroWidthCurrentColorStroke();
  t.setSvgAttribute("xmlns", r);
  t.setSvgAttribute("viewBox", e.viewBox);
  t.setSvgAttribute("width", "".concat(e.width, "px"));
  t.setSvgAttribute("height", "".concat(e.height, "px"));
  t.setSvgAttribute("color", n);
  return;
}

// fn d  args=1 vars=5 closure=5 cpool=0 bc=146B file=dil_math/src/renderMathSvg
// args: t
// locals: e, r, n, o
// closure: S, x, c, w, f
function {
  let o;
  let n;
  let r;
  let e;
  if (!((t.getSvgAttribute("viewBox") == null))) goto L_40;
  t.getSvgAttribute("viewBox");
  e = "0 0 24 18";
  r = S(e);
  if (!((x(t, "height") == null))) goto L_59;
  x(t, "height");
  n = c(r);
  if (!((x(t, "width") == null))) goto L_6f;
  x(t, "width");
  o = w(r, n);
  return {height: f(n), viewBox: e, width: f(o)};
}

// fn c  args=1 vars=1 closure=2 cpool=0 bc=92B file=dil_math/src/renderMathSvg
// args: t
// closure: h, i
function {
  if (((undefined === t))) goto L_2b;
  if (!((t.height <= 0))) goto L_31;
  return h;
  return ((t.height / 1000) * i);
}

// fn w  args=2 vars=2 closure=1 cpool=0 bc=161B file=dil_math/src/renderMathSvg
// args: t, e
// closure: s
function {
  if (((undefined === t))) goto L_53;
  if (((t.height <= 0))) goto L_53;
  if (!((t.width <= 0))) goto L_59;
  return s;
  return ((e * t.width) / t.height);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=dil_math/src/renderMathSvg
// args: t
function {
  return Number(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=42B file=dil_math/src/renderMathSvg
// args: t
function {
  return Number.isNaN(t);   // tail call
}

// fn S  args=1 vars=2 closure=0 cpool=4 bc=195B file=dil_math/src/renderMathSvg
// args: t
// locals: e
function {
  let e;
  e = t.trim().split(new RegExp("\\s+")).map(function <atom:0>);
  if (!((4 === e.length))) goto L_c2;
  if (!(!e.some(function <atom:0>))) goto L_c2;
  return {height: e[3], width: e[2]};
  return;
}

// fn x  args=2 vars=3 closure=1 cpool=0 bc=57B file=dil_math/src/renderMathSvg
// args: t, e
// locals: r
// closure: m
function {
  let r;
  r = t.getSvgAttribute(e);
  if (!((undefined !== r))) goto L_38;
  return m(r);   // tail call
  return;
}

// fn m  args=1 vars=4 closure=1 cpool=2 bc=270B file=dil_math/src/renderMathSvg
// args: t
// locals: e, r, n
// closure: i
function {
  let n;
  let r;
  let e;
  e = t.trim().match(new RegExp("^(-?\\d+(?:\\.\\d+)?)([a-z%]*)$"));
  if (!((null === e))) goto L_60;
  return;
  r = Number(e[1]);
  if ((!Number.isFinite(r))) goto L_a2;
  if (!((r <= 0))) goto L_a5;
  return;
  n = e[2].toLowerCase();
  if (!(("ex" === n))) goto L_e1;
  return (8 * r);
  if (!(("em" === n))) goto L_f4;
  return (r * i);
  if ((("" === n))) goto L_106;
  if (!(("px" === n))) goto L_10c;
  return r;
  return undefined;
}

// fn f  args=1 vars=1 closure=0 cpool=0 bc=90B file=dil_math/src/renderMathSvg
// args: t
function {
  return Math.max(1, (Math.round((100 * t)) / 100));   // tail call
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=12 bc=252B file=dil_math/src/renderMathSvg
// args: require, module, exports
// locals: t, e, r, n, o, i, h, s, MathSvgRenderError, <class_fields_init>, MathSvgRenderError#1, a, u, g, v, d, c, w, S, x, m, f
function {
  a = function a;
  u = function u;
  g = function g;
  v = function v;
  d = function d;
  c = function c;
  w = function w;
  S = function S;
  x = function x;
  m = function m;
  f = function f;
  let MathSvgRenderError#1;
  let s;
  let h;
  let i;
  let o;
  let n;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MathSvgRenderError = undefined;
  exports.renderMathSvg = undefined;
  t = require("math_jax/src/MathJax");
  e = require("math_jax/src/MathJaxSvg");
  r = "http://www.w3.org/2000/svg";
  n = "#000000";
  o = 8;
  i = 16;
  h = 18;
  s = 24;
  let MathSvgRenderError;
  let <class_fields_init>;
  class MathSvgRenderError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:MathSvgRenderError>;
  MathSvgRenderError = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc MathSvgRenderError
  MathSvgRenderError#1 = function <atom:0>;
  exports.MathSvgRenderError = MathSvgRenderError#1;
  exports.renderMathSvg = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_math/src/renderMathSvg
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
