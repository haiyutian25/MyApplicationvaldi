// fn <atom:0>  args=1 vars=6 closure=0 cpool=1 bc=527B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfrac
// args: e
// locals: t, i, s, e#1, this
function {
  this = this;
  let s;
  let i;
  let t;
  if (!(this.toEmbellishedSVG(e))) goto L_36;
  return;
  this.standardSvgNodes(e);
  if (((undefined === undefined))) goto L_ad;
  t = <to_object>(undefined).linethickness;
  i = <to_object>(undefined).bevelled;
  <to_object>(undefined);
  goto L_123;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_63;
  // [栈深重同步 1 -> 0]
  s = this.isDisplay();
  if (!(i)) goto L_17a;
  this.makeBevelled(s);
  return;
  let e#1;
  e#1 = this.length2em(String(t), 0.06);
  if (!((0 === e#1))) goto L_1e1;
  goto L_20d;
  // [栈深重同步 1 -> 0]
  this.makeFraction(s, e#1);
  return;
}

// fn <atom:0>  args=2 vars=19 closure=0 cpool=3 bc=1990B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfrac
// args: e, t
// locals: i, s, a, l, r, o, n, h, c, d, g, m, p, u, x, v, this
function {
  this = this;
  let v;
  let x;
  let u;
  let p;
  let m;
  let g;
  let d;
  let c;
  let h;
  let n;
  let o;
  let r;
  let l;
  let a;
  let s;
  let i;
  i = this.dom;
  if (((undefined === undefined))) goto L_a6;
  s = <to_object>(undefined).numalign;
  a = <to_object>(undefined).denomalign;
  <to_object>(undefined);
  goto L_11c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_5c;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_12e;
  const _it1 = undefined;
  <done(_it1)>;
  l = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_154;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_121;
  // [栈深重同步 1 -> 0]
  o = l.getOuterBBox();
  n = r.getOuterBBox();
  h = this.font.params;
  c = h.axis_height;
  if (!(this.node.getProperty("withDelims"))) goto L_263;
  goto L_287;
  // [栈深重同步 1 -> 0]
  d = h.nulldelimiterspace;
  g = Math.max((((o.L + o.w) + o.R) * o.rscale), (((n.L + n.w) + n.R) * n.rscale));
  m = ((this.getAlignX(g, o, s) + 0.1) + d);
  p = ((this.getAlignX(g, n, a) + 0.1) + d);
  if (((undefined === undefined))) goto L_4be;
  u = <to_object>(undefined).T;
  x = <to_object>(undefined).u;
  v = <to_object>(undefined).v;
  <to_object>(undefined);
  goto L_4ea;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_44f;
  // [栈深重同步 1 -> 0]
  l.toSVG(i);
  l.place(m, ((c + u) + Math.max((o.d * o.rscale), x)));
  r.toSVG(i);
  r.place(p, ((c - u) - Math.max((n.h * n.rscale), v)));
  this.adaptor.append(i[0], this.svg("rect", {width: this.fixed((g + 0.2)), height: this.fixed(t), x: this.fixed(d), y: this.fixed((c - (t / 2)))}));
  return;
}

// fn <atom:0>  args=1 vars=16 closure=0 cpool=0 bc=1350B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfrac
// args: e
// locals: t, i, s, a, l, r, o, n, h, c, d, g, m, p, this
function {
  this = this;
  let p;
  let m;
  let g;
  let d;
  let c;
  let h;
  let n;
  let o;
  let r;
  let l;
  let a;
  let s;
  let i;
  let t;
  t = this.dom;
  if (((undefined === undefined))) goto L_a0;
  i = <to_object>(undefined).numalign;
  s = <to_object>(undefined).denomalign;
  <to_object>(undefined);
  goto L_116;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_56;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_128;
  const _it1 = undefined;
  <done(_it1)>;
  a = <value(_it1)>;
  <done(_it1)>;
  l = <value(_it1)>;
  goto L_14e;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_11b;
  // [栈深重同步 1 -> 0]
  r = a.getOuterBBox();
  o = l.getOuterBBox();
  n = this.font.params;
  if (!(this.node.getProperty("withDelims"))) goto L_237;
  goto L_25b;
  // [栈深重同步 1 -> 0]
  h = n.nulldelimiterspace;
  c = Math.max((((r.L + r.w) + r.R) * r.rscale), (((o.L + o.w) + o.R) * o.rscale));
  d = (this.getAlignX(c, r, i) + h);
  g = (this.getAlignX(c, o, s) + h);
  if (((undefined === undefined))) goto L_469;
  m = <to_object>(undefined).u;
  p = <to_object>(undefined).v;
  <to_object>(undefined);
  goto L_493;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_41d;
  // [栈深重同步 1 -> 0]
  a.toSVG(t);
  a.place(d, m);
  l.toSVG(t);
  l.place(g, -p);
  return;
}

// fn <atom:0>  args=1 vars=11 closure=0 cpool=0 bc=1092B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfrac
// args: e
// locals: t, i, s, a, l, r, o, n, h, this
function {
  this = this;
  let h;
  let n;
  let o;
  let r;
  let l;
  let a;
  let s;
  let i;
  let t;
  t = this.dom;
  if (((undefined === undefined))) goto L_53;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  goto L_79;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_47;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_138;
  a = <to_object>(undefined).u;
  l = <to_object>(undefined).v;
  r = <to_object>(undefined).delta;
  o = <to_object>(undefined).nbox;
  n = <to_object>(undefined).dbox;
  <to_object>(undefined);
  goto L_163;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_81;
  // [栈深重同步 1 -> 0]
  h = (((o.L + o.w) + o.R) * o.rscale);
  i.toSVG(t);
  this.bevel.toSVG(t);
  s.toSVG(t);
  i.place((o.L * o.rscale), a);
  this.bevel.place((h - (r / 2)), 0);
  s.place((((h + this.bevel.getOuterBBox().w) + (n.L * n.rscale)) - r), l);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfrac
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=5 bc=247B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfrac
// locals: s, a, SvgMfrac, <class_fields_init>
// closure: t, e, i
function {
  let a;
  a = t.CommonMfracMixin(e.SvgWrapper);
  let SvgMfrac;
  let <class_fields_init>;
  class SvgMfrac extends a { ... }
  <proto:SvgMfrac>.toSVG = function <atom:0>;
  <proto:SvgMfrac>.makeFraction = function <atom:0>;
  <proto:SvgMfrac>.makeAtop = function <atom:0>;
  <proto:SvgMfrac>.makeBevelled = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMfrac>;
  SvgMfrac = function <atom:0>;
  // close_loc <class_fields_init>
  s = function <atom:0>;
  function <atom:0>.kind = i.MmlMfrac.prototype.kind;
  return s;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=114B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfrac
// args: require, module, exports
// locals: e, t, i
function {
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMfrac = undefined;
  e = require("../Wrapper");
  t = require("../../common/Wrappers/mfrac");
  i = require("../../../core/MmlTree/MmlNodes/mfrac");
  exports.SvgMfrac = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfrac
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
