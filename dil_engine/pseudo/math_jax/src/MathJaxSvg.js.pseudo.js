// fn d  args=0 vars=0 closure=2 cpool=0 bc=20B file=math_jax/src/MathJaxSvg
// closure: s, n
function {
  if (!((undefined === s))) goto L_f;
  s = n();
  n();
  return s;
}

// fn a  args=2 vars=2 closure=1 cpool=0 bc=46B file=math_jax/src/MathJaxSvg
// args: t, e
// closure: d
function {
  return d().texToSvgOutput(t, {display: e});   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=6 cpool=0 bc=369B file=math_jax/src/MathJaxSvg
// args: t, e
// locals: r, d, r#1
// closure: MathJaxSvgOutput, s, a, o, i, h
function {
  try { // catch -> L_111
  let d;
  let r;
  r = new MathJaxSvgOutput(s, a.convert(t, {display: e.display, end: o.STATE.TYPESET}));
  d = r.readError();
  if (!((undefined !== d))) goto L_10c;
  throw new i.MathJaxRenderError(1, d);
  return r;
  // [栈深重同步 0 -> 1]
  r#1 = <?>;
  try { // catch -> L_170
  if (!((r#1 instanceof i.MathJaxRenderError))) goto L_141;
  throw r#1;
  throw new i.MathJaxRenderError(1, h(r#1));
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn n  args=0 vars=3 closure=7 cpool=1 bc=218B file=math_jax/src/MathJaxSvg
// locals: s, d, a
// closure: MathJaxSvgOutput, o, i, h, t, e, r
function {
  let a;
  let d;
  let s;
  s = t.liteAdaptor();
  d = i.createMathJaxTeX();
  a = new e.HTMLDocument("", s, {InputJax: d, OutputJax: new r.SVG({fontCache: "none", linebreaks: {inline: false}})});
  return {texToSvgOutput: function <atom:0>};
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=94B file=math_jax/src/MathJaxSvg
// args: t, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.adaptor = t;
  this.root = e;
  if (!((undefined === e))) goto L_2e;
  goto L_54;
  // [栈深重同步 2 -> 1]
  this.svgNode = this.findSvgNode(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=146B file=math_jax/src/MathJaxSvg
// args: t
// locals: this
function {
  this = this;
  if (!((undefined !== this.svgNode))) goto L_91;
  return this.adaptor.getAttribute(this.svgNode, t);   // tail call
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=math_jax/src/MathJaxSvg
// locals: this
function {
  this = this;
  return (undefined !== this.svgNode);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=115B file=math_jax/src/MathJaxSvg
// args: t
// locals: this
function {
  this = this;
  if (!((undefined !== this.svgNode))) goto L_72;
  this.removeAttributeRecursively(this.svgNode, t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=114B file=math_jax/src/MathJaxSvg
// locals: this
function {
  this = this;
  if (!((undefined !== this.svgNode))) goto L_71;
  this.removeZeroWidthCurrentColorStrokeFromNode(this.svgNode);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=145B file=math_jax/src/MathJaxSvg
// locals: this
function {
  this = this;
  if (!((undefined !== this.svgNode))) goto L_90;
  return this.adaptor.serializeXML(this.svgNode);   // tail call
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=112B file=math_jax/src/MathJaxSvg
// locals: this
function {
  this = this;
  if (!((undefined !== this.root))) goto L_6f;
  return this.readErrorFromNode(this.root);   // tail call
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=149B file=math_jax/src/MathJaxSvg
// args: t, e
// locals: this
function {
  this = this;
  if (!((undefined !== this.svgNode))) goto L_94;
  this.adaptor.setAttribute(this.svgNode, t, e);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=194B file=math_jax/src/MathJaxSvg
// args: t
// locals: e, t#1, this
function {
  this = this;
  if (!(("svg" === this.adaptor.kind(t)))) goto L_53;
  return t;
  let e;
  for (const e of this.getElementChildren(t)) {
    let t#1;
    t#1 = this.findSvgNode(e);
    if (!((undefined !== t#1))) continue;
    return t#1;
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=375B file=math_jax/src/MathJaxSvg
// args: t
// locals: e, r, t#1, this
function {
  this = this;
  let e;
  e = this.adaptor.getAttribute(t, "data-mjx-error");
  if (!((undefined !== e))) goto L_5d;
  return e;
  if (!(("merror" === this.adaptor.getAttribute(t, "data-mml-node")))) goto L_108;
  if (!((this.adaptor.getAttribute(t, "title") == null))) goto L_107;
  this.adaptor.getAttribute(t, "title");
  return "MathJax rendered an error node.";
  let r;
  for (const r of this.getElementChildren(t)) {
    let t#1;
    t#1 = this.readErrorFromNode(r);
    if (!((undefined !== t#1))) continue;
    return t#1;
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=169B file=math_jax/src/MathJaxSvg
// args: t, e
// locals: r, this
function {
  this = this;
  this.adaptor.removeAttribute(t, e);
  let r;
  for (const r of this.getElementChildren(t)) {
    this.removeAttributeRecursively(r, e);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=424B file=math_jax/src/MathJaxSvg
// args: t
// locals: e, this
function {
  this = this;
  if (!(("currentColor" === this.adaptor.getAttribute(t, "stroke")))) goto L_14a;
  if (!(("0" === this.adaptor.getAttribute(t, "stroke-width")))) goto L_14a;
  this.adaptor.removeAttribute(t, "stroke");
  this.adaptor.removeAttribute(t, "stroke-width");
  let e;
  for (const e of this.getElementChildren(t)) {
    this.removeZeroWidthCurrentColorStrokeFromNode(e);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=177B file=math_jax/src/MathJaxSvg
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.adaptor.kind(t);
  if ((("#text" === e))) goto L_63;
  if (!(("#comment" === e))) goto L_69;
  return [];
  return this.adaptor.childNodes(t);
}

// fn h  args=1 vars=1 closure=1 cpool=0 bc=59B file=math_jax/src/MathJaxSvg
// args: t
// closure: u
function {
  if (((t instanceof Error))) goto L_e;
  if (!(u(t))) goto L_33;
  return t.message;
  return String(t);
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=61B file=math_jax/src/MathJaxSvg
// args: t
function {
  if (!(("object" == typeof t))) goto L_3c;
  if (!((null !== t))) goto L_3c;
  return ("string" == typeof t.message);
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=18 bc=310B file=math_jax/src/MathJaxSvg
// args: require, module, exports
// locals: t, e, r, o, i, s, d, a, n, MathJaxSvgOutput, <class_fields_init>, MathJaxSvgOutput#1, h, u
function {
  d = function d;
  a = function a;
  n = function n;
  h = function h;
  u = function u;
  let MathJaxSvgOutput#1;
  let s;
  let i;
  let o;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getMathJax = undefined;
  exports.texToSvgOutput = undefined;
  t = require("./mathjax_src/adaptors/liteAdaptor");
  e = require("./mathjax_src/handlers/html/HTMLDocument");
  r = require("./mathjax_src/output/svg");
  o = require("./mathjax_src/core/MathItem");
  i = require("./MathJax");
  s = undefined;
  exports.getMathJax = d;
  exports.texToSvgOutput = a;
  let MathJaxSvgOutput;
  let <class_fields_init>;
  class MathJaxSvgOutput extends undefined { ... }
  <proto:MathJaxSvgOutput>.getSvgAttribute = function <atom:0>;
  <proto:MathJaxSvgOutput>.hasSvg = function <atom:0>;
  <proto:MathJaxSvgOutput>.removeSvgAttributeRecursively = function <atom:0>;
  <proto:MathJaxSvgOutput>.removeZeroWidthCurrentColorStroke = function <atom:0>;
  <proto:MathJaxSvgOutput>.serializeSvg = function <atom:0>;
  <proto:MathJaxSvgOutput>.readError = function <atom:0>;
  <proto:MathJaxSvgOutput>.setSvgAttribute = function <atom:0>;
  <proto:MathJaxSvgOutput>.findSvgNode = function <atom:0>;
  <proto:MathJaxSvgOutput>.readErrorFromNode = function <atom:0>;
  <proto:MathJaxSvgOutput>.removeAttributeRecursively = function <atom:0>;
  <proto:MathJaxSvgOutput>.removeZeroWidthCurrentColorStrokeFromNode = function <atom:0>;
  <proto:MathJaxSvgOutput>.getElementChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MathJaxSvgOutput>;
  MathJaxSvgOutput = function <atom:0>;
  // close_loc <class_fields_init>
  MathJaxSvgOutput#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/MathJaxSvg
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
