// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=42B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// locals: this
function {
  this = this;
  if (!(this.breakStyle)) goto L_28;
  return 1;
  return 0;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=42B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// locals: this
function {
  this = this;
  if (!(this.embellishedBreakStyle)) goto L_28;
  return 1;
  return 0;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// locals: this
function {
  this = this;
  if ((this.breakStyle)) goto L_4d;
  return this.getBreakStyle();
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=1080B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: e
// locals: i, this, <home_object>
// closure: r, t
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  i = (this.stretch.dir !== r.DIRECTION.None);
  if (!(i)) goto L_ea;
  if (!((null === this.size))) goto L_ea;
  this.getStretchedVariant([0]);
  if (!(i)) goto L_116;
  if (((this.size < 0))) goto L_437;
  super["computeBBox"].call(this, e);
  if (((0 !== e.w))) goto L_410;
  if ((!this.node.attributes.hasExplicit("fence"))) goto L_410;
  if ((("" !== this.node.getText()))) goto L_410;
  if (!((this.node.texClass !== t.TEXCLASS.OPEN))) goto L_332;
  if (((this.node.texClass !== t.TEXCLASS.CLOSE))) goto L_410;
  if ((this.jax.options.mathmlSpacing)) goto L_410;
  e.R = this.font.params.nulldelimiterspace;
  this.font.params.nulldelimiterspace;
  this.copySkewIC(e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=159B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// locals: t, this
// closure: e
function {
  this = this;
  let t;
  t = e.BBox.empty();
  this.protoBBox(t);
  return (-t.w / 2);
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=317B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t
// locals: t#1, this, <home_object>
// closure: e
function {
  <home_object> = <special_object 4>;
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_10;
  t;
  t = null;
  t#1 = null;
  if ((t)) goto L_6c;
  t = e.BBox.empty();
  super["computeBBox"].call(this, t);
  return ((((t.h + t.d) / 2) + this.font.params.axis_height) - t.h);
}

// fn <atom:0>  args=2 vars=17 closure=1 cpool=0 bc=1558B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t, e
// locals: t#1, e#1, i, s, h, n, o, a, l, c, d, u, m, r, this
// closure: r
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_14;
  e;
  e = false;
  e#1 = false;
  let m;
  let u;
  let d;
  let c;
  let l;
  let a;
  let o;
  let n;
  let h;
  let s;
  let i;
  if (!((this.stretch.dir === r.DIRECTION.None))) goto L_c3;
  return;
  i = this.getWH(t);
  s = this.getSize("minsize", 0);
  h = this.getSize("maxsize", (1 / 0));
  n = this.node.getProperty("mathaccent");
  i = Math.max(s, Math.min(h, i));
  Math.max(s, Math.min(h, i));
  o = (this.font.params.delimiterfactor / 1000);
  a = this.font.params.delimitershortfall;
  if ((s)) goto L_2d0;
  if (!(e)) goto L_2d7;
  goto L_34c;
  // [栈深重同步 1 -> 0]
  if (!(n)) goto L_315;
  goto L_34c;
  // [栈深重同步 1 -> 0]
  l = Math.max((i * o), (i - a));
  c = this.getText().codePointAt(0);
  d = this.stretch;
  if (!(this.size)) goto L_44d;
  d = this.font.getDelimiter(c);
  this.stretch = this.font.getDelimiter(c);
  this.size = null;
  null;
  if ((d.c)) goto L_479;
  u = c;
  m = 0;
  if (!(d.sizes)) goto L_533;
  let r;
  for (const r of d.sizes) {
    if (!((r >= l))) goto L_525;
    if (!(n)) goto L_4f1;
    if (!(m)) goto L_4f1;
    m = <m_new>;
    (m--);
    this.setDelimSize(u, m);
    return undefined;
    // [栈深重同步 0 -> 3]
    m = <m_new>;
    (m++);
  }
  if (!(d.stretch)) goto L_5e7;
  this.size = -1;
  this.invalidateBBox();
  goto L_615;
  // [栈深重同步 1 -> 0]
  this.setDelimSize(u, (m - 1));
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=400B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t, e
// locals: i, s, this
function {
  this = this;
  let s;
  let i;
  i = this.stretch;
  this.variant = this.font.getSizeVariant(t, e);
  this.size = e;
  if (!(i.schar)) goto L_126;
  if ((i.schar[Math.min(e, (i.schar.length - 1))])) goto L_12b;
  s = t;
  null;
  i;
  this.stretch = {c: s};
  this.childNodes[0].invalidateBBox();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=200B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t, e
// locals: i, this
function {
  this = this;
  let i;
  i = this.node.attributes;
  if (!(i.isSet(t))) goto L_c5;
  e = this.length2em(i.get(t), 1, 1);
  this.length2em(i.get(t), 1, 1);
  return e;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=327B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t
// locals: e, i, s, this
function {
  this = this;
  let s;
  let i;
  let e;
  if (!((0 === t.length))) goto L_13;
  return 0;
  if (!((1 === t.length))) goto L_1d;
  return t[0];
  if (((undefined === undefined))) goto L_2e;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  goto L_32;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_22;
  // [栈深重同步 1 -> 0]
  s = this.font.params.axis_height;
  if (!(this.node.attributes.get("symmetric"))) goto L_13f;
  return (2 * Math.max((e - s), (i + s)));
  return (e + i);
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=0 bc=1024B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t, e, i
// locals: s, h, n, t#1, this
// closure: r
function {
  this = this;
  let n;
  let h;
  let s;
  if (!(Object.hasOwn(i, "min"))) goto L_8a;
  if (!((i.min > e))) goto L_8a;
  e = i.min;
  i.min;
  if (((undefined === undefined))) goto L_a0;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  h = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_c5;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_90;
  // [栈深重同步 1 -> 0]
  if (!((this.stretch.dir === r.DIRECTION.Vertical))) goto L_19d;
  goto L_16e;
  const _it2 = <?>;
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  goto L_199;
  // [栈深重同步 4 -> 0]
  goto L_153;
  this.getBaseline(t, e, i);
  goto L_372;
  n = e;
  e;
  if (!(this.stretch.hd)) goto L_372;
  if (!(!this.jax.options.mathmlSpacing)) goto L_372;
  let t#1;
  t#1 = this.font.params.extender_factor;
  s = ((s * (1 - t#1)) + (this.stretch.hd[0] * t#1));
  ((s * (1 - t#1)) + (this.stretch.hd[0] * t#1));
  h = ((h * (1 - t#1)) + (this.stretch.hd[1] * t#1));
  ((h * (1 - t#1)) + (this.stretch.hd[1] * t#1));
  this.bbox.h = s;
  this.bbox.d = h;
  this.bbox.w = n;
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=2 bc=536B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t, e, i
// locals: s, r, h, n, o, a, t#1, t#2, e#1, this
function {
  this = this;
  let a;
  let o;
  let n;
  let h;
  let r;
  let s;
  if (!((2 === t.length))) goto L_26;
  s = ((t[0] + t[1]) === e);
  r = this.node.attributes.get("symmetric");
  if (((undefined === undefined))) goto L_a6;
  const _it1 = undefined;
  <done(_it1)>;
  h = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_b6;
  // [栈深重同步 4 -> 1]
  _it1;
  if (!(s)) goto L_af;
  goto L_9a;
  // [栈深重同步 1 -> 0]
  goto L_9a;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_c9;
  const _it2 = undefined;
  <done(_it2)>;
  o = <value(_it2)>;
  <done(_it2)>;
  a = <value(_it2)>;
  goto L_d7;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_bb;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_19e;
  let t#1;
  t#1 = this.font.params.axis_height;
  if (!(s)) goto L_18d;
  o = (2 * Math.max((h - t#1), (n + t#1)));
  (2 * Math.max((h - t#1), (n + t#1)));
  a = ((o / 2) - t#1);
  ((o / 2) - t#1);
  goto L_20a;
  if (!(s)) goto L_1ad;
  a = n;
  n;
  goto L_20a;
  let e#1;
  let t#2;
  if (((undefined === undefined))) goto L_1c6;
  const _it3 = undefined;
  <done(_it3)>;
  t#2 = <value(_it3)>;
  <done(_it3)>;
  e#1 = <value(_it3)>;
  goto L_1f6;
  // [栈深重同步 4 -> 1]
  _it3;
  if ((i.HDW)) goto L_1b8;
  goto L_1b8;
  // [栈深重同步 1 -> 0]
  a = (e#1 * (o / (t#2 + e#1)));
  (e#1 * (o / (t#2 + e#1)));
  return [(o - a), a];
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=202B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t, e
// locals: i, s
function {
  if (!(e.fullExt)) goto L_c8;
  let s;
  let i;
  if (((undefined === undefined))) goto L_3e;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  goto L_63;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_32;
  // [栈深重同步 1 -> 0]
  t = (s + (Math.ceil((Math.max(0, (t - s)) / i)) * i));
  return t;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=623B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t
// locals: t#1, t#2, e, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_d;
  t;
  t = "";
  t#1 = "";
  if (!((this.node.parent == null))) goto L_5a;
  this.node.parent;
  goto L_7b;
  if (!(undefined.isEmbellished)) goto L_84;
  if (!(!t)) goto L_84;
  goto L_aa;
  // [栈深重同步 2 -> 1]
  this.breakStyle = this.getBreakStyle(t);
  if (!(this.breakCount)) goto L_26e;
  if (!(this.multChar)) goto L_26e;
  let e;
  let t#2;
  t#2 = this.parent.node.childIndex(this.node);
  e = this.parent.node.childNodes[(t#2 + 1)];
  if (!(e)) goto L_26d;
  e.setTeXclass(this.multChar.node);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=339B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t
// locals: t#1, e, i, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_d;
  t;
  t = "";
  t#1 = "";
  let i;
  let e;
  e = this.node.attributes;
  if ((t)) goto L_112;
  if ((("newline" === e.get("linebreak")))) goto L_e1;
  if (!(this.node.getProperty("forcebreak"))) goto L_111;
  goto L_112;
  // [栈深重同步 1 -> 0]
  i = "";
  if (!(("infixlinebreakstyle" === i))) goto L_14e;
  i = e.get(i);
  e.get(i);
  return i;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=233B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// locals: t, this
function {
  this = this;
  let t;
  t = this.node.attributes.get("linebreakmultchar");
  if (!(t)) goto L_e8;
  if (!(("⁢" === this.getText()))) goto L_e8;
  if (!(("⁢" !== t))) goto L_e8;
  this.multChar = this.createMo(t);
  this.createMo(t);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=1 cpool=0 bc=240B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
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
  this.size = null;
  this.isAccent = this.node.isAccent;
  this.getMultChar();
  this.setBreakStyle();
  return this;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=726B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t, e
// locals: t#1, e#1, e#2, this
// closure: r
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_13;
  e;
  e = false;
  e#1 = false;
  this.protoBBox(t);
  if (!(this.node.attributes.get("symmetric"))) goto L_1c2;
  if (!((this.stretch.dir !== r.DIRECTION.Horizontal))) goto L_1c2;
  let e#2;
  e#2 = this.getCenterOffset(t);
  t.h = (t.h + e#2);
  t.d = (t.d - e#2);
  if (!(this.node.getProperty("mathaccent"))) goto L_2d5;
  if (((this.stretch.dir === r.DIRECTION.None))) goto L_2c5;
  if (!((this.size >= 0))) goto L_2d5;
  t.w = 0;
  0;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t
// locals: this
function {
  this = this;
  return this.moLineBBox(t, this.breakStyle);   // tail call
}

// fn <atom:0>  args=3 vars=11 closure=2 cpool=0 bc=1095B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t, s, r
// locals: t#1, s#1, r#1, h, n, t#2, o, this
// closure: i, e
function {
  this = this;
  let r#1;
  let s#1;
  let t#1;
  t#1 = t;
  s#1 = s;
  if (!((r === undefined))) goto L_18;
  r;
  r = null;
  r#1 = null;
  let o;
  let n;
  let h;
  h = this.node.attributes.get("lineleading");
  n = this.length2em(h, this.linebreakOptions.lineleading);
  if (!((0 === t))) goto L_22c;
  if (!(("before" === s))) goto L_22c;
  let t#2;
  t#2 = i.LineBBox.from(e.BBox.zero(), n);
  t#2.originalL = this.bbox.L;
  this.bbox.L = 0;
  return t#2;
  if ((r)) goto L_29c;
  o = i.LineBBox.from(this.getOuterBBox(), n);
  if (!((1 === t))) goto L_442;
  if (!(("after" === s))) goto L_31d;
  o.d = 0;
  o.h = 0;
  o.w = 0;
  o.isFirst = true;
  this.bbox.R = 0;
  goto L_3f7;
  // [栈深重同步 1 -> 0]
  if (!(("duplicate" === s))) goto L_337;
  o.L = 0;
  goto L_3f7;
  // [栈深重同步 1 -> 0]
  if (!(this.multChar)) goto L_3f7;
  o = i.LineBBox.from(this.multChar.getOuterBBox(), n);
  i.LineBBox.from(this.multChar.getOuterBBox(), n);
  o.getIndentData(this.node);
  return o;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=766B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t
// locals: e, i, this
// closure: r
function {
  this = this;
  let i;
  let e;
  if (!((this.stretch.dir !== r.DIRECTION.None))) goto L_d9;
  return (this.stretch.dir === t);
  if (!(!this.node.attributes.get("stretchy"))) goto L_14b;
  return false;
  e = this.getText();
  if (!((1 !== Array.from(e).length))) goto L_1a5;
  return false;
  i = this.font.getDelimiter(e.codePointAt(0));
  if (!(i)) goto L_247;
  if (!((i.dir === t))) goto L_247;
  goto L_26b;
  // [栈深重同步 2 -> 1]
  this.stretch = r.NOSTRETCH;
  return (this.stretch.dir !== r.DIRECTION.None);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=477B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(this.node.attributes.get("largeop"))) goto L_fe;
  if (!(this.node.attributes.get("displaystyle"))) goto L_ec;
  goto L_f1;
  // [栈深重同步 2 -> 1]
  this.variant = "-smallop";
  goto L_1dc;
  // [栈深重同步 1 -> 0]
  if ((this.node.attributes.hasExplicit("mathvariant"))) goto L_1bc;
  if (!((false !== this.node.getProperty("pseudoscript")))) goto L_1cc;
  goto L_1dc;
  // [栈深重同步 1 -> 0]
  this.variant = "-tex-variant";
  "-tex-variant";
  return;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=515B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: t
// locals: e, e#1, i, s, this
// closure: s
function {
  this = this;
  let e;
  e = this.node.getProperty("primes");
  if (!(e)) goto L_82;
  return s.unicodeChars(e);   // tail call
  if (!((1 === t.length))) goto L_201;
  let s;
  let i;
  let e#1;
  e#1 = this.node.coreParent().parent;
  if (!(this.isAccent)) goto L_158;
  if (!(!e#1.isKind("mrow"))) goto L_158;
  goto L_15d;
  // [栈深重同步 1 -> 0]
  i = "mo";
  s = this.font.getRemappedChar(i, t[0]);
  if (!(s)) goto L_200;
  t = this.unicodeChars(s, this.variant);
  this.unicodeChars(s, this.variant);
  return t;
}

// fn h  args=1 vars=3 closure=5 cpool=23 bc=199B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: h
// locals: CommonMoMixin, <class_fields_init>
// closure: r, t, e, i, s
function {
  let CommonMoMixin;
  let <class_fields_init>;
  class CommonMoMixin extends h { ... }
  <proto:CommonMoMixin>.breakCount = function <atom:0>;
  <proto:CommonMoMixin>.embellishedBreakCount = function <atom:0>;
  <proto:CommonMoMixin>.embellishedBreakStyle = function <atom:0>;
  <proto:CommonMoMixin>.protoBBox = function <atom:0>;
  <proto:CommonMoMixin>.getAccentOffset = function <atom:0>;
  <proto:CommonMoMixin>.getCenterOffset = function <atom:0>;
  <proto:CommonMoMixin>.getStretchedVariant = function <atom:0>;
  <proto:CommonMoMixin>.setDelimSize = function <atom:0>;
  <proto:CommonMoMixin>.getSize = function <atom:0>;
  <proto:CommonMoMixin>.getWH = function <atom:0>;
  <proto:CommonMoMixin>.getStretchBBox = function <atom:0>;
  <proto:CommonMoMixin>.getBaseline = function <atom:0>;
  <proto:CommonMoMixin>.checkExtendedHeight = function <atom:0>;
  <proto:CommonMoMixin>.setBreakStyle = function <atom:0>;
  <proto:CommonMoMixin>.getBreakStyle = function <atom:0>;
  <proto:CommonMoMixin>.getMultChar = function <atom:0>;
  <proto:CommonMoMixin>.computeBBox = function <atom:0>;
  <proto:CommonMoMixin>.computeLineBBox = function <atom:0>;
  <proto:CommonMoMixin>.moLineBBox = function <atom:0>;
  <proto:CommonMoMixin>.canStretch = function <atom:0>;
  <proto:CommonMoMixin>.getVariant = function <atom:0>;
  <proto:CommonMoMixin>.remapChars = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMoMixin>;
  CommonMoMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=140B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// args: require, module, exports
// locals: t, e, i, s, r, h
function {
  h = function h;
  let r;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMoMixin = undefined;
  t = require("../../../core/MmlTree/MmlNode");
  e = require("../../../util/BBox");
  i = require("../LineBBox");
  s = require("../../../util/string");
  r = require("../FontData");
  exports.CommonMoMixin = h;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mo
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
