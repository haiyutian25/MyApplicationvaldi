// fn <atom:0>  args=3 vars=9 closure=1 cpool=0 bc=117B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
// args: t, e, i
// locals: t#1, e#1, i#1, this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((i === undefined))) goto L_20;
  i;
  i = null;
  i#1 = null;
  this = new new.target(t, e, i);
  if (!(<class_fields_init>)) goto L_3c;
  <class_fields_init>.call(this);
  new new.target(t, e, i);
  this.rscale = this.getRScale();
  return this;
}

// fn <atom:0>  args=2 vars=10 closure=0 cpool=0 bc=411B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
// args: t, e
// locals: t#1, e#1, i, s, o, l, n, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_14;
  e;
  e = false;
  e#1 = false;
  let n;
  let l;
  let o;
  let s;
  let i;
  i = this.node.getXML();
  s = this.getHDW(i, "use", "force");
  if (((undefined === undefined))) goto L_115;
  o = <to_object>(undefined).h;
  l = <to_object>(undefined).d;
  n = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_173;
  // [栈深重同步 0 -> 1]
  <?>;
  if (!(s)) goto L_147;
  goto L_a5;
  // [栈深重同步 1 -> 0]
  goto L_a5;
  // [栈深重同步 1 -> 0]
  t.w = n;
  t.h = o;
  t.d = l;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=519B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
// locals: t, e, this
function {
  this = this;
  let e;
  let t;
  t = this.adaptor.clone(this.node.getXML());
  e = this.getFontStyles();
  if ((this.getHDW(t, "force"))) goto L_152;
  if (!((1 !== this.jax.options.scale))) goto L_185;
  t = this.addHDW(t, e);
  this.addHDW(t, e);
  return this.html("mjx-html", {variant: this.parent.variant, style: e}, [t]);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=0 bc=242B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
// args: t, e, i
// locals: t#1, e#1, i#1, s, o, this
function {
  this = this;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((i === undefined))) goto L_1a;
  i;
  i = e#1;
  i#1 = e#1;
  let o;
  let s;
  s = this.jax.options.htmlHDW;
  o = this.adaptor.getAttribute(t, "data-mjx-hdw");
  if ((!o)) goto L_ea;
  if (!((s !== e))) goto L_ee;
  if (!((s !== i))) goto L_ee;
  return null;
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
// args: t
// closure: this, i
function {
  if ((t)) goto L_29;
  return (this.length2em("0") * i);
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=1 bc=212B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
// args: e
// locals: i, s, o, l, this
// closure: t
function {
  this = this;
  let l;
  let o;
  let s;
  let i;
  i = (1 / this.metrics.scale);
  if (((undefined === undefined))) goto L_6b;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  l = <value(_it1)>;
  goto L_ba;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_5b;
  // [栈深重同步 1 -> 0]
  return {h: s, d: o, w: l};
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=623B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
// locals: t, e, this
function {
  this = this;
  let e;
  let t;
  t = this.adaptor;
  e = this.metrics;
  if (!((this.parent.styles == null))) goto L_9a;
  this.parent.styles;
  goto L_c3;
  if ((undefined.get("font-family"))) goto L_1d1;
  if ((e.family)) goto L_1d1;
  if ((t.fontFamily(t.parent(this.jax.math.start.node)))) goto L_1d1;
  return {font-family: "initial", font-size: (this.jax.fixed((e.em * this.rscale)) + "px")};
}

// fn <atom:0>  args=1 vars=17 closure=0 cpool=0 bc=1272B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
// args: t
// locals: e, i, s, o, l, n, a, m, h, r, d, c, p, x, u, this
function {
  this = this;
  let u;
  let x;
  let p;
  let c;
  let d;
  let r;
  let h;
  let m;
  let a;
  let n;
  let l;
  let o;
  let s;
  let i;
  let e;
  e = this.adaptor;
  i = this.html("mjx-xml-block", {style: {display: "inline-block"}}, [e.clone(t)]);
  s = this.html("mjx-baseline", {style: {display: "inline-block", width: 0, height: 0}});
  o = this.getFontStyles();
  l = this.html("mjx-measure-xml", {style: o}, [s, i]);
  n = this.jax.container;
  e.append(e.parent(this.jax.math.start.node), n);
  e.append(n, l);
  a = this.metrics;
  m = ((a.em * a.scale) * this.rscale);
  if (((undefined === undefined))) goto L_3e7;
  h = <to_object>(undefined).left;
  r = <to_object>(undefined).right;
  d = <to_object>(undefined).bottom;
  c = <to_object>(undefined).top;
  <to_object>(undefined);
  goto L_415;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_353;
  // [栈深重同步 1 -> 0]
  p = ((r - h) / m);
  x = ((e.nodeBBox(s).top - c) / m);
  u = (((d - c) / m) - x);
  e.remove(n);
  e.remove(l);
  return {w: p, h: x, d: u};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
function {
  return;
}

// fn e  args=1 vars=4 closure=1 cpool=10 bc=283B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
// args: e
// locals: CommonXmlNodeMixin, <class_fields_init>, CommonXmlNodeMixin#1
// closure: t
function {
  let CommonXmlNodeMixin#1;
  let CommonXmlNodeMixin;
  let <class_fields_init>;
  class CommonXmlNodeMixin extends e { ... }
  <proto:CommonXmlNodeMixin>.computeBBox = function <atom:0>;
  <proto:CommonXmlNodeMixin>.getHTML = function <atom:0>;
  <proto:CommonXmlNodeMixin>.getHDW = function <atom:0>;
  <proto:CommonXmlNodeMixin>.splitHDW = function <atom:0>;
  <proto:CommonXmlNodeMixin>.getFontStyles = function <atom:0>;
  <proto:CommonXmlNodeMixin>.measureXmlNode = function <atom:0>;
  <proto:CommonXmlNodeMixin>.getStyles = function <atom:0>;
  <proto:CommonXmlNodeMixin>.getScale = function <atom:0>;
  <proto:CommonXmlNodeMixin>.getVariant = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonXmlNodeMixin>;
  CommonXmlNodeMixin = function <atom:0>;
  // close_loc <class_fields_init>
  CommonXmlNodeMixin#1 = function <atom:0>;
  CommonXmlNodeMixin#1.autoStyle = false;
  CommonXmlNodeMixin#1.styles = {mjx-measure-xml: {position: "absolute", left: 0, top: 0, display: "inline-block", line-height: "normal", white-space: "normal"}, mjx-html: {display: "inline-block", line-height: "normal", text-align: "initial", white-space: "initial"}, mjx-html-holder: {display: "block", position: "absolute", top: 0, left: 0, bottom: 0, right: 0}};
  return CommonXmlNodeMixin#1;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
// args: require, module, exports
// locals: t, e
function {
  e = function e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonXmlNodeMixin = undefined;
  t = require("../../../util/string");
  exports.CommonXmlNodeMixin = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/XmlNode
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
