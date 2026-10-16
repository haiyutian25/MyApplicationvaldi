// fn <atom:0>  args=2 vars=18 closure=0 cpool=0 bc=785B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtr
// args: t, e
// locals: s, i, r, l, o, n, a, c, p, h, d, S, g, u, x, this
function {
  this = this;
  let x;
  let u;
  let g;
  let S;
  let d;
  let h;
  let p;
  let c;
  let a;
  let n;
  let o;
  let l;
  let r;
  let i;
  let s;
  if (((undefined === undefined))) goto L_134;
  s = <to_object>(undefined).x;
  i = <to_object>(undefined).y;
  r = <to_object>(undefined).lSpace;
  l = <to_object>(undefined).w;
  o = <to_object>(undefined).rSpace;
  n = <to_object>(undefined).lLine;
  a = <to_object>(undefined).rLine;
  <to_object>(undefined);
  goto L_139;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_38;
  // [栈深重同步 1 -> 0]
  c = (1 / this.getBBox().rscale);
  if (((undefined === undefined))) goto L_197;
  const _it1 = undefined;
  <done(_it1)>;
  p = <value(_it1)>;
  <done(_it1)>;
  h = <value(_it1)>;
  goto L_1eb;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_189;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_1fe;
  const _it2 = undefined;
  <done(_it2)>;
  d = <value(_it2)>;
  <done(_it2)>;
  S = <value(_it2)>;
  goto L_252;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_1f0;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_265;
  const _it3 = undefined;
  <done(_it3)>;
  g = <value(_it3)>;
  <done(_it3)>;
  u = <value(_it3)>;
  goto L_2a0;
  // [栈深重同步 4 -> 1]
  _it3;
  goto L_257;
  // [栈深重同步 1 -> 0]
  x = ((r + l) + o);
  t.placeColor(-((g + r) + (n / 2)), -((h + S) + u), (x + ((n + a) / 2)), (((p + h) + d) + S));
  return (x + a);
}

// fn <atom:0>  args=1 vars=10 closure=0 cpool=0 bc=634B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtr
// args: t
// locals: e, s, i, r, l, o, n, e#1, this
function {
  this = this;
  let o;
  let l;
  let r;
  let i;
  let s;
  let e;
  e = this.parent;
  s = e.getColumnHalfSpacing();
  // append([e.fLine], 1, e.cLines)
  [e.fLine][e.cLines] = e.fLine;
  (e.fLine ++);
  i = [e.fLine];
  r = e.getComputedWidths();
  l = (1 / this.getBBox().rscale);
  o = i[0];
  let n;
  n = 0;
  if (!((n < this.numCells))) goto L_279;
  let e#1;
  e#1 = this.getChild(n);
  e#1.toSVG(t);
  o = (o + this.placeCell(e#1, {x: o, y: 0, lSpace: (s[n] * l), rSpace: (s[(n + 1)] * l), w: (r[n] * l), lLine: (i[n] * l), rLine: (i[(n + 1)] * l)}));
  (o + this.placeCell(e#1, {x: o, y: 0, lSpace: (s[n] * l), rSpace: (s[(n + 1)] * l), w: (r[n] * l), lLine: (i[n] * l), rLine: (i[(n + 1)] * l)}));
  n = <n_new>;
  (n++);
  goto L_156;
  return;
}

// fn <atom:0>  args=0 vars=10 closure=0 cpool=0 bc=973B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtr
// locals: t, e, s, i, r, l, o, n, a, this
function {
  this = this;
  let s;
  let e;
  let t;
  t = (1 / this.getBBox().rscale);
  e = this.adaptor;
  s = this.firstChild();
  if (!(s)) goto L_3cc;
  if (!(("rect" === e.kind(s)))) goto L_3cc;
  if (!(e.getAttribute(s, "data-bgcolor"))) goto L_3cc;
  let a;
  let n;
  let o;
  let l;
  let r;
  let i;
  if (((undefined === undefined))) goto L_136;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_18e;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_129;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_1a1;
  const _it2 = undefined;
  <done(_it2)>;
  l = <value(_it2)>;
  <done(_it2)>;
  o = <value(_it2)>;
  goto L_1f5;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_193;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_208;
  const _it3 = undefined;
  <done(_it3)>;
  n = <value(_it3)>;
  <done(_it3)>;
  a = <value(_it3)>;
  goto L_25c;
  // [栈深重同步 4 -> 1]
  _it3;
  goto L_1fa;
  // [栈深重同步 1 -> 0]
  e.setAttribute(s, "y", this.fixed(-((a + o) + r)));
  e.setAttribute(s, "width", this.fixed((this.parent.getWidth() * t)));
  e.setAttribute(s, "height", this.fixed((((((i + l) + n) + a) + o) + r)));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=123B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtr
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.standardSvgNodes(t);
  this.placeCells(e);
  this.placeColor();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtr
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=5 bc=247B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtr
// locals: i, r, SvgMtr, <class_fields_init>
// closure: e, t, s
function {
  let r;
  r = e.CommonMtrMixin(t.SvgWrapper);
  let SvgMtr;
  let <class_fields_init>;
  class SvgMtr extends r { ... }
  <proto:SvgMtr>.placeCell = function <atom:0>;
  <proto:SvgMtr>.placeCells = function <atom:0>;
  <proto:SvgMtr>.placeColor = function <atom:0>;
  <proto:SvgMtr>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMtr>;
  SvgMtr = function <atom:0>;
  // close_loc <class_fields_init>
  i = function <atom:0>;
  function <atom:0>.kind = s.MmlMtr.prototype.kind;
  return i;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=176B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtr
// args: t
// locals: e, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  super["toSVG"].call(this, t);
  e = this.childNodes[0];
  if (!(e)) goto L_af;
  e.toSVG([this.parent.labels]);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtr
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=221B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtr
// locals: t, i, SvgMlabeledtr, <class_fields_init>
// closure: e, exports, s
function {
  let i;
  i = e.CommonMlabeledtrMixin(exports.SvgMtr);
  let SvgMlabeledtr;
  let <class_fields_init>;
  class SvgMlabeledtr extends i { ... }
  <proto:SvgMlabeledtr>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMlabeledtr>;
  SvgMlabeledtr = function <atom:0>;
  // close_loc <class_fields_init>
  t = function <atom:0>;
  function <atom:0>.kind = s.MmlMlabeledtr.prototype.kind;
  return t;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=138B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtr
// args: require, module, exports
// locals: t, e, s
function {
  let s;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMtr = undefined;
  exports.SvgMlabeledtr = undefined;
  t = require("../Wrapper");
  e = require("../../common/Wrappers/mtr");
  s = require("../../../core/MmlTree/MmlNodes/mtr");
  exports.SvgMtr = function <atom:0>();
  exports.SvgMlabeledtr = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtr
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
