// fn <atom:0>  args=3 vars=10 closure=0 cpool=1 bc=850B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// args: t, e, s
// locals: i, o, n, l, h, a, this
function {
  this = this;
  let a;
  let h;
  let l;
  let n;
  let o;
  let i;
  i = this.childNodes[0].getOuterBBox();
  o = this.childNodes[1].getOuterBBox();
  n = this.font.params.axis_height;
  if (((undefined === undefined))) goto L_183;
  l = <to_object>(undefined).T;
  h = <to_object>(undefined).u;
  a = <to_object>(undefined).v;
  <to_object>(undefined);
  goto L_1af;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_114;
  // [栈深重同步 1 -> 0]
  t.combine(i, 0, ((n + l) + Math.max((i.d * i.rscale), h)));
  t.combine(o, 0, ((n - l) - Math.max((o.h * o.rscale), a)));
  t.w = (t.w + ((2 * this.pad) + 0.2));
  return;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=4 bc=326B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// args: t, e
// locals: s, i, o, this
function {
  this = this;
  let o;
  let i;
  let s;
  s = this.font.params;
  i = s.axis_height;
  if (!(t)) goto L_7b;
  goto L_7d;
  // [栈深重同步 1 -> 0]
  o = (1.5 * e);
  if (!(t)) goto L_88;
  goto L_8a;
  // [栈深重同步 2 -> 1]
  if (!(t)) goto L_ba;
  goto L_de;
  // [栈深重同步 2 -> 1]
  if (!(t)) goto L_114;
  goto L_138;
  // [栈深重同步 2 -> 1]
  return {T: (1.5 * e), u: ((s.num2 - i) - o), v: ((s.denom2 + i) - o)};
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=383B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// args: t, e
// locals: s, i, o, n, this
function {
  this = this;
  let n;
  let o;
  let i;
  let s;
  if (((undefined === undefined))) goto L_a7;
  s = <to_object>(undefined).u;
  i = <to_object>(undefined).v;
  o = <to_object>(undefined).nbox;
  n = <to_object>(undefined).dbox;
  <to_object>(undefined);
  goto L_d2;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_17;
  // [栈深重同步 1 -> 0]
  t.combine(o, 0, s);
  t.combine(n, 0, -i);
  t.w = (t.w + (2 * this.pad));
  return;
}

// fn <atom:0>  args=1 vars=9 closure=0 cpool=0 bc=719B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// args: t
// locals: e, s, i, o, n, l, h, this
function {
  this = this;
  let h;
  let l;
  let n;
  let o;
  let i;
  let s;
  let e;
  e = this.childNodes[0].getOuterBBox();
  s = this.childNodes[1].getOuterBBox();
  i = this.font.params;
  if (((undefined === undefined))) goto L_104;
  const _it1 = undefined;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_1a3;
  // [栈深重同步 4 -> 1]
  _it1;
  if (!(t)) goto L_155;
  goto L_f6;
  // [栈深重同步 1 -> 0]
  goto L_f6;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_1a9;
  goto L_1aa;
  // [栈深重同步 1 -> 0]
  l = (3 * i.rule_thickness);
  h = ((o - (e.d * e.scale)) - ((s.h * s.scale) - n));
  if (!((h < l))) goto L_2a4;
  o = (o + ((l - h) / 2));
  (o + ((l - h) / 2));
  n = (n + ((l - h) / 2));
  (n + ((l - h) / 2));
  h = l;
  l;
  return {u: o, v: n, q: h, nbox: e, dbox: s};
}

// fn <atom:0>  args=2 vars=9 closure=0 cpool=0 bc=536B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// args: t, e
// locals: s, i, o, n, l, h, this
function {
  this = this;
  let h;
  let l;
  let n;
  let o;
  let i;
  let s;
  if (((undefined === undefined))) goto L_d1;
  s = <to_object>(undefined).u;
  i = <to_object>(undefined).v;
  o = <to_object>(undefined).delta;
  n = <to_object>(undefined).nbox;
  l = <to_object>(undefined).dbox;
  <to_object>(undefined);
  goto L_fc;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  h = this.bevel.getOuterBBox();
  t.combine(n, 0, s);
  t.combine(h, (t.w - (o / 2)), 0);
  t.combine(l, (t.w - (o / 2)), i);
  return;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=2 bc=831B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// args: t
// locals: e, s, i, o, n, this
function {
  this = this;
  let n;
  let o;
  let i;
  let s;
  let e;
  e = this.childNodes[0].getOuterBBox();
  s = this.childNodes[1].getOuterBBox();
  if (!(t)) goto L_ad;
  goto L_af;
  // [栈深重同步 1 -> 0]
  i = 0.15;
  o = (Math.max((e.scale * (e.h + e.d)), (s.scale * (s.h + s.d))) + (2 * i));
  n = this.font.params.axis_height;
  return {H: o, delta: i, u: ((((e.scale * (e.d - e.h)) / 2) + n) + i), v: ((((s.scale * (s.d - s.h)) / 2) + n) - i), nbox: e, dbox: s};
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=217B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// locals: t, e, this
function {
  this = this;
  let e;
  let t;
  if (((undefined === undefined))) goto L_57;
  t = <to_object>(undefined).displaystyle;
  e = <to_object>(undefined).scriptlevel;
  <to_object>(undefined);
  goto L_cc;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_d8;
  return (0 === e);
}

// fn <atom:0>  args=3 vars=11 closure=2 cpool=0 bc=852B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// args: e, s, i
// locals: e#1, s#1, i#1, e#2, s#2, this.active_func, new.target, this
// closure: <class_fields_init>, t
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let i#1;
  let s#1;
  let e#1;
  e#1 = e;
  s#1 = s;
  if (!((i === undefined))) goto L_21;
  i;
  i = null;
  i#1 = null;
  this = new new.target(e, s, i);
  if (!(<class_fields_init>)) goto L_3e;
  <class_fields_init>.call(this);
  new new.target(e, s, i);
  this.bevel = null;
  if (!(this.node.getProperty("withDelims"))) goto L_a2;
  goto L_108;
  // [栈深重同步 2 -> 1]
  this.pad = this.font.params.nulldelimiterspace;
  if (!(this.node.attributes.get("bevelled"))) goto L_350;
  let s#2;
  let e#2;
  if (((undefined === undefined))) goto L_1b6;
  e#2 = <to_object>(undefined).H;
  <to_object>(undefined);
  goto L_207;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_18f;
  // [栈深重同步 1 -> 0]
  this.bevel = this.createMo("/");
  s#2 = this.createMo("/");
  s#2.node.attributes.set("symmetric", true);
  s#2.canStretch(t.DIRECTION.Vertical);
  s#2.getStretchedVariant([e#2], true);
  return this;
}

// fn <atom:0>  args=2 vars=10 closure=0 cpool=2 bc=691B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// args: t, e
// locals: t#1, e#1, s, i, o, n, e#2, this
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
  let o;
  let i;
  let s;
  t.empty();
  if (((undefined === undefined))) goto L_96;
  s = <to_object>(undefined).linethickness;
  i = <to_object>(undefined).bevelled;
  <to_object>(undefined);
  goto L_10c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_4c;
  // [栈深重同步 1 -> 0]
  o = this.isDisplay();
  n = null;
  if (!(i)) goto L_16a;
  this.getBevelledBBox(t, o);
  goto L_262;
  let e#2;
  e#2 = this.length2em(String(s), 0.06);
  n = (-2 * this.pad);
  (-2 * this.pad);
  if (!((0 === e#2))) goto L_1fe;
  goto L_236;
  // [栈深重同步 1 -> 0]
  this.getFractionBBox(t, o, e#2);
  n = (n - 0.2);
  (n - 0.2);
  n = (n + t.w);
  (n + t.w);
  t.clean();
  this.setChildPWidths(e, n);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// args: t
function {
  return false;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=180B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.node.attributes;
  if (!(e.get("bevelled"))) goto L_7d;
  return "left";
  return e.get(["numalign", "denomalign"][t]);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=422B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.node.attributes;
  if (!(e.get("bevelled"))) goto L_e1;
  return this.childNodes[t].getOuterBBox().w;
  if (!(this.length2em(e.get("linethickness")))) goto L_17e;
  goto L_17f;
  // [栈深重同步 2 -> 1]
  return ((this.getBBox().w - 0) - (2 * this.pad));
}

// fn e  args=1 vars=3 closure=1 cpool=12 bc=111B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// args: e
// locals: CommonMfracMixin, <class_fields_init>
// closure: t
function {
  let CommonMfracMixin;
  let <class_fields_init>;
  class CommonMfracMixin extends e { ... }
  <proto:CommonMfracMixin>.getFractionBBox = function <atom:0>;
  <proto:CommonMfracMixin>.getTUV = function <atom:0>;
  <proto:CommonMfracMixin>.getAtopBBox = function <atom:0>;
  <proto:CommonMfracMixin>.getUVQ = function <atom:0>;
  <proto:CommonMfracMixin>.getBevelledBBox = function <atom:0>;
  <proto:CommonMfracMixin>.getBevelData = function <atom:0>;
  <proto:CommonMfracMixin>.isDisplay = function <atom:0>;
  <proto:CommonMfracMixin>.computeBBox = function <atom:0>;
  <proto:CommonMfracMixin>.canStretch = function <atom:0>;
  <proto:CommonMfracMixin>.getChildAlign = function <atom:0>;
  <proto:CommonMfracMixin>.getWrapWidth = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMfracMixin>;
  CommonMfracMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// args: require, module, exports
// locals: t, e
function {
  e = function e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMfracMixin = undefined;
  t = require("../FontData");
  exports.CommonMfracMixin = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mfrac
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
