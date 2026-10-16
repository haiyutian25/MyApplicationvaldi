// fn <atom:0>  args=0 vars=6 closure=1 cpool=0 bc=1188B file=math_jax/src/mathjax_src/output/svg/Wrappers/math
// locals: e, t, i, r, a, this
// closure: r
function {
  this = this;
  let t;
  let e;
  if (((undefined === undefined))) goto L_1a;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  t = <value(_it1)>;
  goto L_43;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_e;
  // [栈深重同步 1 -> 0]
  if (!(("center" !== e))) goto L_e6;
  this.adaptor.setAttribute(this.jax.container, "justify", e);
  if (!((this.bbox.pwidth === r.BBox.fullWidth))) goto L_474;
  this.adaptor.setAttribute(this.jax.container, "width", "full");
  if (!(this.jax.table)) goto L_4a3;
  let a;
  let r;
  let i;
  if (((undefined === undefined))) goto L_2d1;
  i = <to_object>(undefined).L;
  r = <to_object>(undefined).w;
  a = <to_object>(undefined).R;
  <to_object>(undefined);
  goto L_33d;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_263;
  // [栈深重同步 1 -> 0]
  if (!(("right" === e))) goto L_387;
  if ((a)) goto L_379;
  a = Math.max(-t, -t);
  goto L_411;
  // [栈深重同步 1 -> 0]
  if (!(("left" === e))) goto L_3ce;
  if ((i)) goto L_3c2;
  i = Math.max(t, t);
  goto L_411;
  // [栈深重同步 1 -> 0]
  if (!(("center" === e))) goto L_411;
  r = (r + (2 * Math.abs(t)));
  (r + (2 * Math.abs(t)));
  this.jax.minwidth = Math.max(0, ((i + r) + a));
  return;
  this.jax.shift = t;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=333B file=math_jax/src/mathjax_src/output/svg/Wrappers/math
// args: e
// locals: t, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  super["toSVG"].call(this, e);
  t = this.adaptor;
  if (!(("block" === this.node.attributes.get("display")))) goto L_14c;
  t.setAttribute(this.jax.container, "display", "true");
  this.handleDisplay();
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=0 bc=227B file=math_jax/src/mathjax_src/output/svg/Wrappers/math
// args: e, t, i
// locals: e#1, t#1, i#1, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let i#1;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_19;
  t;
  t = null;
  t#1 = null;
  if (!((i === undefined))) goto L_23;
  i;
  i = true;
  i#1 = true;
  if (!(this.parent)) goto L_57;
  goto L_de;
  // [栈深重同步 4 -> 3]
  return super["setChildPWidths"](e, (this.metrics.containerWidth / this.jax.pxPerEm), false);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/math
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=5 bc=504B file=math_jax/src/mathjax_src/output/svg/Wrappers/math
// locals: s, n, SvgMath, <class_fields_init>
// closure: r, t, e, i, a
function {
  let n;
  n = t.CommonMathMixin(e.SvgWrapper);
  let SvgMath;
  let <class_fields_init>;
  class SvgMath extends n { ... }
  <proto:SvgMath>.handleDisplay = function <atom:0>;
  <proto:SvgMath>.toSVG = function <atom:0>;
  <proto:SvgMath>.setChildPWidths = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMath>;
  SvgMath = function <atom:0>;
  // close_loc <class_fields_init>
  s = function <atom:0>;
  function <atom:0>.kind = i.MmlMath.prototype.kind;
  s.styles = {mjx-container[jax="SVG"] mjx-break: {white-space: "normal", line-height: "0", clip-path: "rect(0 0 0 0)", font-family: "MJX-ZERO ! important"}, mjx-break[size="0"]: {letter-spacing: "-0.999em"}, mjx-break[size="1"]: {letter-spacing: "-0.889em"}, mjx-break[size="2"]: {letter-spacing: "-0.833em"}, mjx-break[size="3"]: {letter-spacing: "-0.778em"}, mjx-break[size="4"]: {letter-spacing: "-0.722em"}, mjx-break[size="5"]: {letter-spacing: "-0.667em"}, mjx-container[jax="SVG"] mjx-break[newline]::before: {white-space: "pre", content: ""\A""}, mjx-break[newline] + svg[width="0.054ex"]: {margin-right: "-1px"}, mjx-break[prebreak]: {letter-spacing: "-.999em"}, @font-face /* zero */: {font-family: "MJX-ZERO", src: a.ZeroFontDataUrl}};
  return s;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=137B file=math_jax/src/mathjax_src/output/svg/Wrappers/math
// args: require, module, exports
// locals: e, t, i, r, a
function {
  let a;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMath = undefined;
  e = require("../Wrapper");
  t = require("../../common/Wrappers/math");
  i = require("../../../core/MmlTree/MmlNodes/math");
  r = require("../../../util/BBox");
  a = require("./zero");
  exports.SvgMath = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/math
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
