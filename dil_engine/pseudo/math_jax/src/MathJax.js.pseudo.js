// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=164B file=math_jax/src/MathJax
// args: r, e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, MathJaxRenderError
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.phase = r;
  Object.setPrototypeOf(this, MathJaxRenderError.prototype);
  this.name = "MathJaxRenderError";
  this.message = e;
  return this;
}

// fn x  args=0 vars=0 closure=2 cpool=0 bc=20B file=math_jax/src/MathJax
// closure: i, p
function {
  if (!((undefined === i))) goto L_f;
  i = p();
  p();
  return i;
}

// fn h  args=2 vars=2 closure=1 cpool=0 bc=40B file=math_jax/src/MathJax
// args: r, e
// closure: x
function {
  return x().texToMathML(r, e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=12B file=math_jax/src/MathJax
// args: r, e
// closure: MathJaxRenderError, c
function {
  throw new MathJaxRenderError(0, c(e));
}

// fn u  args=0 vars=0 closure=6 cpool=1 bc=254B file=math_jax/src/MathJax
// closure: MathJaxRenderError, c, n, a, o, s
function {
  if (!(!n.BaseMappingsLoaded)) goto L_36;
  throw new Error("MathJax base mappings failed to load.");
  return new a.TeX({packages: [o.BaseConfiguration.name, s.BoldsymbolConfiguration.name], formatError: function <atom:0>});
}

// fn c  args=1 vars=2 closure=0 cpool=0 bc=122B file=math_jax/src/MathJax
// args: r
// locals: e
function {
  if (!((r instanceof Error))) goto L_2c;
  return r.message;
  if (!(("object" == typeof r))) goto L_71;
  if (!((null !== r))) goto L_71;
  let e;
  e = r.message;
  if (!(("string" == typeof e))) goto L_71;
  return e;
  return String(r);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=0 bc=204B file=math_jax/src/MathJax
// args: r, t
// locals: a, a#1
// closure: o, e, MathJaxRenderError, c
function {
  try { // catch -> L_b0
  let a;
  a = o.convert(r, {display: t, end: e.STATE.COMPILED});
  a.setTeXclass(null);
  return a;
  // [栈深重同步 0 -> 1]
  a#1 = <?>;
  try { // catch -> L_cb
  if (!((a#1 instanceof MathJaxRenderError))) goto L_bf;
  throw a#1;
  throw new MathJaxRenderError(0, c(a#1));
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn p  args=0 vars=2 closure=6 cpool=1 bc=109B file=math_jax/src/MathJax
// locals: a, o
// closure: e, MathJaxRenderError, c, r, t, u
function {
  let o;
  let a;
  a = r.liteAdaptor();
  o = new t.HTMLDocument("", a, {InputJax: u()});
  return {texToMathML: function <atom:0>};
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=6 bc=315B file=math_jax/src/MathJax
// args: require, module, exports
// locals: r, e, t, a, o, n, s, MathJaxRenderError, <class_fields_init>, MathJaxRenderError#1, i, x, h, u, c, p
function {
  x = function x;
  h = function h;
  u = function u;
  c = function c;
  p = function p;
  let i;
  let MathJaxRenderError#1;
  let s;
  let n;
  let o;
  let a;
  let t;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MathJaxRenderError = undefined;
  exports.getMathJax = undefined;
  exports.texToMathML = undefined;
  exports.createMathJaxTeX = undefined;
  exports.readMathJaxErrorMessage = undefined;
  r = require("./mathjax_src/adaptors/liteAdaptor");
  e = require("./mathjax_src/core/MathItem");
  t = require("./mathjax_src/handlers/html/HTMLDocument");
  a = require("./mathjax_src/input/tex");
  o = require("./mathjax_src/input/tex/base/BaseConfiguration");
  n = require("./mathjax_src/input/tex/base/BaseMappings");
  s = require("./mathjax_src/input/tex/boldsymbol/BoldsymbolConfiguration");
  let MathJaxRenderError;
  let <class_fields_init>;
  class MathJaxRenderError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:MathJaxRenderError>;
  MathJaxRenderError = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc MathJaxRenderError
  MathJaxRenderError#1 = function <atom:0>;
  i = undefined;
  exports.MathJaxRenderError = MathJaxRenderError#1;
  exports.getMathJax = x;
  exports.texToMathML = h;
  exports.createMathJaxTeX = u;
  exports.readMathJaxErrorMessage = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/MathJax
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
