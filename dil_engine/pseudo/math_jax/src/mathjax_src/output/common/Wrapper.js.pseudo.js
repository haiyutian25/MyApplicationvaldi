// fn m  args=3 vars=3 closure=2 cpool=0 bc=32B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e, i
// closure: d, c
function {
  if (!(e)) goto L_e;
  if (!(t)) goto L_a;
  return d;
  return c;
  if (!(t)) goto L_1e;
  if (!((i < d))) goto L_1a;
  return 0;
  return d;
  return i;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e
// locals: this
function {
  this = this;
  t.addStyles(this.styles);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: this
function {
  this = this;
  return this.factory.jax;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=103B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: this
function {
  this = this;
  return this.factory.jax.adaptor;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=136B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: this
function {
  this = this;
  return this.factory.jax.math.metrics;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=174B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: this
function {
  this = this;
  if (!(this.parent)) goto L_6a;
  return this.parent.containerWidth;
  return this.jax.containerWidth;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: this
function {
  this = this;
  return this.jax.linebreaks;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=103B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: this
function {
  this = this;
  return this.jax.options.linebreaks;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=143B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: this
function {
  this = this;
  if (!(!this.node.notParent)) goto L_8e;
  return !this.node.isToken;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=465B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: t, this
function {
  this = this;
  if (!((this._breakCount < 0))) goto L_1ae;
  let t;
  t = this.node;
  if (!(t.isEmbellished)) goto L_c1;
  goto L_1a5;
  // [栈深重同步 2 -> 1]
  if (!((t.arity < 0))) goto L_1a4;
  if (!(!t.linebreakContainer)) goto L_1a4;
  if (!(this.childNodes[0].isStack)) goto L_1a4;
  goto L_1a5;
  // [栈深重同步 2 -> 1]
  this._breakCount = 0;
  return this._breakCount;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=185B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e
// locals: this
function {
  this = this;
  if ((this.node.linebreakContainer)) goto L_6c;
  if (!(!this.parent)) goto L_70;
  return t;
  return this.parent.breakTop(t, this);
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=324B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: i
// closure: this, e, a
function {
  let i;
  i = this.wrap(t);
  if (!(i.bbox.pwidth)) goto L_13f;
  if ((e.notParent)) goto L_c8;
  if (!(e.isKind("math"))) goto L_13f;
  this.bbox.pwidth = a.BBox.fullWidth;
  a.BBox.fullWidth;
  return i;
}

// fn <atom:0>  args=3 vars=9 closure=3 cpool=1 bc=708B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e, i
// locals: t#1, e#1, i#1, this, this.active_func, new.target
// closure: a, <class_fields_init>, l
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
  if (!((i === undefined))) goto L_21;
  i;
  i = null;
  i#1 = null;
  this = new new.target(t, e);
  if (!(<class_fields_init>)) goto L_3d;
  <class_fields_init>.call(this);
  new new.target(t, e);
  this.parent = null;
  this.dom = null;
  this.removedStyles = null;
  this.styles = null;
  this.styleData = null;
  this.variant = "";
  this.bboxComputed = false;
  this._breakCount = -1;
  this.lineBBox = [];
  this.stretch = l.NOSTRETCH;
  this.font = null;
  this.parent = i;
  this.font = t.jax.font;
  this.bbox = a.BBox.zero();
  this.getStyles();
  this.getStyleData();
  this.getVariant();
  this.getScale();
  this.getSpace();
  this.childNodes = e.childNodes.map(function <atom:0>);
  return this;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=291B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e
// locals: t#1, e#1, i, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_12;
  e;
  e = null;
  e#1 = null;
  let i;
  if ((e)) goto L_60;
  i = this.factory.wrap(t, this);
  if (!(e)) goto L_b2;
  e.childNodes.push(i);
  this.jax.nodeMap.set(t, i);
  return i;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=257B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: t#1, e, this
// closure: a
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = true;
  t#1 = true;
  let e;
  if (!(this.bboxComputed)) goto L_59;
  return this.bbox;
  if (!(t)) goto L_80;
  goto L_c8;
  // [栈深重同步 1 -> 0]
  e = a.BBox.zero();
  this.computeBBox(e);
  this.bboxComputed = t;
  return e;
}

// fn <atom:0>  args=1 vars=9 closure=1 cpool=0 bc=471B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: t#1, e, i, s, r, o, n, this
// closure: a
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_f;
  t;
  t = true;
  t#1 = true;
  let r;
  let s;
  let i;
  let e;
  e = this.getBBox(t);
  if (!(!this.styleData)) goto L_6e;
  return e;
  i = this.styleData.padding;
  if (!((this.styleData.border == null))) goto L_ff;
  this.styleData.border;
  goto L_120;
  if ((undefined.width)) goto L_12b;
  s = [0, 0, 0, 0];
  r = e.copy();
  let n;
  let o;
  const _it1 = a.BBox.boxSides;
  goto L_1cd;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  <value(_it2)>;
  <done(_it2)>;
  o = <value(_it2)>;
  <done(_it2)>;
  n = <value(_it2)>;
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] + (i[o] + s[o]));
  if (!(<done(_it1)>)) goto L_1a3;
  <value(_it1)>;
  return r;
}

// fn <atom:0>  args=0 vars=7 closure=0 cpool=0 bc=261B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: t, e, i, s, t#1, r, this
function {
  this = this;
  let i;
  let e;
  let t;
  t = (this.breakCount + 1);
  e = 0;
  i = 0;
  let s;
  s = 0;
  if (!((s < t))) goto L_fb;
  let r;
  let t#1;
  if (((undefined === undefined))) goto L_9e;
  t#1 = <to_object>(undefined).h;
  r = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_ca;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_52;
  // [栈深重同步 1 -> 0]
  if (!((t#1 > e))) goto L_dc;
  e = t#1;
  t#1;
  if (!((r > i))) goto L_ef;
  i = r;
  r;
  s = <s_new>;
  (s++);
  goto L_3b;
  return [e, i];
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=341B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e
// locals: t#1, e#1, i, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_13;
  e;
  e = false;
  e#1 = false;
  t.empty();
  let i;
  for (const i of this.childNodes) {
    t.append(i.getOuterBBox());
  }
  t.clean();
  if (!(this.fixesPWidth)) goto L_154;
  if (!(this.setChildPWidths(e))) goto L_154;
  this.computeBBox(t, true);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=896B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: e, i, e#1, this
// closure: h
function {
  this = this;
  if (!(!this.lineBBox[t])) goto L_35b;
  let e;
  e = this.breakCount;
  if (!(e)) goto L_27f;
  let i;
  if ((this.embellishedBBox(t))) goto L_ad;
  i = this.computeLineBBox(t);
  this.lineBBox[t] = i;
  if (!((0 === t))) goto L_21e;
  if (!(!this.node.isKind("mo"))) goto L_1cb;
  if (!(this.node.isEmbellished)) goto L_1cb;
  i.originalL = this.getBBox().L;
  goto L_21e;
  // [栈深重同步 1 -> 0]
  i.L = this.getBBox().L;
  this.getBBox().L;
  if (!((t === e))) goto L_27b;
  i.R = this.getBBox().R;
  this.getBBox().R;
  goto L_35b;
  let e#1;
  e#1 = this.getOuterBBox();
  this.lineBBox[t] = h.LineBBox.from(e#1, this.linebreakOptions.lineleading);
  return this.lineBBox[t];
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=307B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: e, this
function {
  this = this;
  let e;
  if ((!this.node.isEmbellished)) goto L_98;
  if (!(this.node.isKind("mo"))) goto L_9c;
  return null;
  e = this.coreMO();
  return e.moLineBBox(t, e.embellishedBreakStyle, this.getOuterBBox());   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=76B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: this
function {
  this = this;
  return this.getChildLineBBox(this.childNodes[0], t);   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=701B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: e, i, s, this
function {
  this = this;
  let s;
  let i;
  let e;
  if (!(!t.start)) goto L_36;
  return [this, null];
  if (((undefined === undefined))) goto L_47;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  goto L_6c;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_3b;
  // [栈深重同步 1 -> 0]
  if (!(this.node.isEmbellished)) goto L_db;
  return [this, this.coreMO()];
  if (!((this.childNodes[0] == null))) goto L_107;
  this.childNodes[0];
  goto L_151;
  if (!((undefined.node == null))) goto L_130;
  undefined.node;
  goto L_151;
  if ((undefined.isInferred)) goto L_1a0;
  if (!(this.node.isKind("semantics"))) goto L_1e9;
  goto L_20b;
  // [栈深重同步 1 -> 0]
  s = this.childNodes;
  if ((this.node.isToken)) goto L_25b;
  if (!(!s[e])) goto L_263;
  return [this, null];
  return s[e].getBreakNode(s[e].getLineBBox(i));
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=684B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e
// locals: i, s, this
function {
  this = this;
  let s;
  let i;
  i = this.breakCount;
  s = t.getLineBBox(e);
  if ((this.styleData)) goto L_105;
  if ((this.bbox.L)) goto L_105;
  if (!(this.bbox.R)) goto L_134;
  s = s.copy();
  s.copy();
  this.addMiddleBorders(s);
  if (!((0 === e))) goto L_202;
  s.L = (s.L + this.bbox.L);
  goto L_2a7;
  // [栈深重同步 1 -> 0]
  if (!((e === i))) goto L_2a7;
  s.R = (s.R + this.bbox.R);
  this.addRightBorders(s);
  return s;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=305B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  if (!(!this.styleData)) goto L_2e;
  return;
  e = this.styleData.border;
  i = this.styleData.padding;
  if (!((e == null))) goto L_e3;
  e;
  goto L_10e;
  if (!((undefined.width == null))) goto L_10c;
  undefined.width;
  goto L_10e;
  if ((undefined[3])) goto L_113;
  if (!((i == null))) goto L_11e;
  i;
  goto L_120;
  if ((undefined[3])) goto L_125;
  t.w = (t.w + (0 + 0));
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=427B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  if (!(!this.styleData)) goto L_2e;
  return;
  e = this.styleData.border;
  i = this.styleData.padding;
  if (!((e == null))) goto L_e3;
  e;
  goto L_10e;
  if (!((undefined.width == null))) goto L_10c;
  undefined.width;
  goto L_10e;
  if ((undefined[0])) goto L_113;
  if (!((i == null))) goto L_11e;
  i;
  goto L_120;
  if ((undefined[0])) goto L_125;
  t.h = (t.h + (0 + 0));
  if (!((e == null))) goto L_15d;
  e;
  goto L_188;
  if (!((undefined.width == null))) goto L_186;
  undefined.width;
  goto L_188;
  if ((undefined[2])) goto L_18d;
  if (!((i == null))) goto L_198;
  i;
  goto L_19a;
  if ((undefined[2])) goto L_19f;
  t.d = (t.d + (0 + 0));
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=305B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  if (!(!this.styleData)) goto L_2e;
  return;
  e = this.styleData.border;
  i = this.styleData.padding;
  if (!((e == null))) goto L_e3;
  e;
  goto L_10e;
  if (!((undefined.width == null))) goto L_10c;
  undefined.width;
  goto L_10e;
  if ((undefined[1])) goto L_113;
  if (!((i == null))) goto L_11e;
  i;
  goto L_120;
  if ((undefined[1])) goto L_125;
  t.w = (t.w + (0 + 0));
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=0 bc=334B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e, i
// locals: t#1, e#1, i#1, s, r, o, this
function {
  this = this;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_16;
  e;
  e = null;
  e#1 = null;
  if (!((i === undefined))) goto L_20;
  i;
  i = true;
  i#1 = true;
  let s;
  if (!(t)) goto L_2a;
  return false;
  if (!(i)) goto L_5d;
  this.bbox.pwidth = "";
  "";
  s = false;
  let r;
  for (const r of this.childNodes) {
    let o;
    o = r.getBBox();
    if (!(o.pwidth)) goto L_140;
    if (!((null === e))) goto L_131;
    goto L_132;
    // [栈深重同步 7 -> 6]
    if (!(r.setChildPWidths(t, e, i))) goto L_140;
    s = true;
    true;
  }
  return s;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
function {
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=246B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = true;
  t#1 = true;
  if ((this.bboxComputed)) goto L_59;
  if (!((this._breakCount >= 0))) goto L_f5;
  this.bboxComputed = false;
  this.lineBBox = [];
  this._breakCount = -1;
  if (!(this.parent)) goto L_f5;
  if (!(t)) goto L_f5;
  this.parent.invalidateBBox();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=709B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  e = this.childNodes[0];
  if (!((e == null))) goto L_38;
  e;
  goto L_82;
  if (!((undefined.bbox == null))) goto L_61;
  undefined.bbox;
  goto L_82;
  if (!(undefined.sk)) goto L_d6;
  t.sk = e.bbox.sk;
  e.bbox.sk;
  if (!((e == null))) goto L_e2;
  e;
  goto L_12c;
  if (!((undefined.bbox == null))) goto L_10b;
  undefined.bbox;
  goto L_12c;
  if (!(undefined.dx)) goto L_180;
  t.dx = e.bbox.dx;
  e.bbox.dx;
  i = this.childNodes[(this.childNodes.length - 1)];
  if (!((i == null))) goto L_1d5;
  i;
  goto L_21f;
  if (!((undefined.bbox == null))) goto L_1fe;
  undefined.bbox;
  goto L_21f;
  if (!(undefined.ic)) goto L_2c4;
  t.ic = i.bbox.ic;
  t.w = (t.w + t.ic);
  (t.w + t.ic);
  return;
}

// fn <atom:0>  args=0 vars=6 closure=2 cpool=0 bc=525B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: t, e, i, s, t#1, this
// closure: o, CommonWrapper
function {
  this = this;
  let e;
  let t;
  t = this.node.attributes.getExplicit("style");
  if (!(!t)) goto L_7e;
  return;
  this.styles = new o.Styles(t);
  e = new o.Styles(t);
  let s;
  let i;
  i = 0;
  s = CommonWrapper.removeStyles.length;
  if (!((i < s))) goto L_20c;
  let t#1;
  t#1 = CommonWrapper.removeStyles[i];
  if (!(e.get(t#1))) goto L_200;
  if ((this.removedStyles)) goto L_182;
  this.removedStyles = {};
  {};
  this.removedStyles[t#1] = e.get(t#1);
  e.set(t#1, "");
  i = <i_new>;
  (i++);
  goto L_e4;
  return;
}

// fn <atom:0>  args=0 vars=12 closure=1 cpool=0 bc=936B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: t, e, i, s, r, o, n, h, a, l, d, this
// closure: a
function {
  this = this;
  let o;
  let r;
  let s;
  let i;
  let e;
  let t;
  if (!(!this.styles)) goto L_3c;
  return;
  t = Array(4).fill(0);
  e = Array(4).fill(0);
  i = Array(4);
  s = Array(4);
  r = false;
  o = false;
  let h;
  let n;
  const _it1 = a.BBox.boxSides;
  goto L_355;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  n = <value(_it2)>;
  <done(_it2)>;
  h = <value(_it2)>;
  let d;
  let l;
  let a;
  a = ("border" + n);
  l = this.styles.get((a + "Width"));
  if (!(l)) goto L_296;
  o = true;
  true;
  e[h] = Math.max(0, this.length2em(l, 1));
  if ((this.styles.get((a + "Style")))) goto L_23c;
  i[h] = "solid";
  s[h] = this.styles.get((a + "Color"));
  this.styles.get((a + "Color"));
  d = this.styles.get(("padding" + n));
  if (!(d)) goto L_354;
  r = true;
  true;
  t[h] = Math.max(0, this.length2em(d, 1));
  Math.max(0, this.length2em(d, 1));
  if (!(<done(_it1)>)) goto L_fd;
  <value(_it1)>;
  if ((r)) goto L_36a;
  if (!(o)) goto L_39d;
  if (!(o)) goto L_395;
  goto L_396;
  // [栈深重同步 4 -> 2]
  _it2.next.border = null;
  goto L_39e;
  // [栈深重同步 2 -> 1]
  _it2.styleData = null;
  return;
}

// fn <atom:0>  args=0 vars=5 closure=2 cpool=2 bc=1826B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: e, i, t, e#1, this
// closure: t, CommonWrapper
function {
  this = this;
  let i;
  let e;
  if (!(!this.node.isToken)) goto L_51;
  return;
  e = this.node.attributes;
  i = e.get("mathvariant");
  if (!(e.hasExplicit("mathvariant"))) goto L_1d0;
  if ((this.font.getVariant(i))) goto L_1cc;
  if (!(t.isLoggingEnabled)) goto L_1c2;
  console.warn("Invalid variant: ".concat(i));
  i = "normal";
  "normal";
  goto L_713;
  let t;
  t = e.getList("fontfamily", "fontweight", "fontstyle");
  if (!(this.removedStyles)) goto L_367;
  let e#1;
  e#1 = this.removedStyles;
  if (!(e#1.fontFamily)) goto L_2b2;
  t.family = e#1.fontFamily;
  e#1.fontFamily;
  if (!(e#1.fontWeight)) goto L_30c;
  t.weight = e#1.fontWeight;
  e#1.fontWeight;
  if (!(e#1.fontStyle)) goto L_366;
  t.style = e#1.fontStyle;
  e#1.fontStyle;
  if (!(t.fontfamily)) goto L_3c0;
  t.family = t.fontfamily;
  t.fontfamily;
  if (!(t.fontweight)) goto L_41a;
  t.weight = t.fontweight;
  t.fontweight;
  if (!(t.fontstyle)) goto L_474;
  t.style = t.fontstyle;
  t.fontstyle;
  if (!(t.weight)) goto L_53a;
  if (!(t.weight.match(new RegExp("^\\d+$")))) goto L_53a;
  if (!((parseInt(t.weight) > 600))) goto L_52b;
  goto L_530;
  // [栈深重同步 2 -> 1]
  t.weight = "normal";
  "normal";
  if (!(t.family)) goto L_5fd;
  i = this.explicitVariant(t.family, t.weight, t.style);
  goto L_712;
  // [栈深重同步 1 -> 0]
  if (!(this.node.getProperty("variantForm"))) goto L_656;
  i = "-tex-variant";
  "-tex-variant";
  if ((CommonWrapper.BOLDVARIANTS[t.weight])) goto L_6a5;
  if (({}[i])) goto L_6b0;
  i = i;
  i;
  if ((CommonWrapper.ITALICVARIANTS[t.style])) goto L_703;
  if (({}[i])) goto L_70e;
  i = i;
  i;
  this.variant = i;
  return;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=257B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e, i
// locals: s, this
// closure: o
function {
  this = this;
  let s;
  s = this.styles;
  if ((s)) goto L_66;
  this.styles = new o.Styles();
  s = new o.Styles();
  new o.Styles();
  s.set("fontFamily", t);
  if (!(e)) goto L_c7;
  s.set("fontWeight", e);
  if (!(i)) goto L_fa;
  s.set("fontStyle", i);
  return "-explicitFont";
}

// fn <atom:0>  args=0 vars=9 closure=0 cpool=2 bc=1223B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: t, e, i, s, r, o, n, e#1, this
function {
  this = this;
  let n;
  let o;
  let r;
  let s;
  let i;
  let e;
  let t;
  t = 1;
  e = this.parent;
  if (!(e)) goto L_8a;
  goto L_8b;
  // [栈深重同步 1 -> 0]
  i = 1;
  s = this.node.attributes;
  r = Math.min(s.get("scriptlevel"), 2);
  o = s.get("fontsize");
  if ((this.node.isToken)) goto L_1eb;
  if (!(this.node.isKind("mstyle"))) goto L_21b;
  goto L_247;
  // [栈深重同步 1 -> 0]
  n = s.getInherited("mathsize");
  if (!((0 !== r))) goto L_2ae;
  t = Math.pow(s.get("scriptsizemultiplier"), r);
  Math.pow(s.get("scriptsizemultiplier"), r);
  if (!(this.removedStyles)) goto L_371;
  if (!(this.removedStyles.fontSize)) goto L_371;
  if (!(!o)) goto L_371;
  o = this.removedStyles.fontSize;
  this.removedStyles.fontSize;
  if (!(o)) goto L_3b1;
  if (!(!s.hasExplicit("mathsize"))) goto L_3b1;
  n = o;
  o;
  if (!(("1" !== n))) goto L_3ef;
  t = (t * this.length2em(n, 1, 1));
  (t * this.length2em(n, 1, 1));
  if (!((0 !== r))) goto L_464;
  let e#1;
  e#1 = this.length2em(s.get("scriptminsize"), 0.4, 1);
  if (!((t < e#1))) goto L_463;
  t = e#1;
  e#1;
  this.bbox.scale = t;
  this.bbox.rscale = (t / i);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=316B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: t, e, this
function {
  this = this;
  let e;
  let t;
  t = this.isTopEmbellished();
  e = this.node.hasSpacingAttributes();
  if ((this.jax.options.mathmlSpacing)) goto L_e0;
  if (!(e)) goto L_110;
  if (!(t)) goto L_13b;
  goto L_13b;
  // [栈深重同步 1 -> 0]
  this.getTeXSpacing(t, e);
  return;
}

// fn <atom:0>  args=0 vars=10 closure=1 cpool=0 bc=1453B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: t, e, i, s, r, o, n, a, h, this
// closure: m
function {
  this = this;
  let h;
  let a;
  let n;
  let o;
  let r;
  let s;
  let i;
  let e;
  let t;
  t = this.node.coreMO();
  e = t.coreParent();
  i = e.parent;
  if ((!i)) goto L_113;
  if ((!i.isKind("mrow"))) goto L_113;
  if (!((1 === i.childNodes.length))) goto L_116;
  return;
  s = i.childIndex(e);
  if (!((null === s))) goto L_149;
  return;
  r = t.getProperty("noDictDef");
  o = t.attributes;
  n = (o.get("scriptlevel") > 0);
  if (!(o.isSet("lspace"))) goto L_29c;
  goto L_2c8;
  // [栈深重同步 2 -> 1]
  this.bbox.L = m(n, r, t.lspace);
  if (!(o.isSet("rspace"))) goto L_3a0;
  goto L_3cc;
  // [栈深重同步 2 -> 1]
  this.bbox.R = m(n, r, t.rspace);
  if (!(!s)) goto L_3dc;
  return;
  a = i.childNodes[(s - 1)];
  if (!(!a.isEmbellished)) goto L_430;
  return;
  h = this.jax.nodeMap.get(a).getBBox();
  if (!(h.R)) goto L_5ac;
  this.bbox.L = Math.max(0, (this.bbox.L - h.R));
  Math.max(0, (this.bbox.L - h.R));
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=732B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e
// locals: t#1, t#2, this
function {
  this = this;
  if (!(!e)) goto L_af;
  let t#1;
  t#1 = this.node.texSpacing();
  if (!(t#1)) goto L_ae;
  this.bbox.L = this.length2em(t#1);
  this.length2em(t#1);
  if ((t)) goto L_b5;
  if (!(e)) goto L_2db;
  let t#2;
  t#2 = this.node.coreMO().attributes;
  if (!(t#2.isSet("lspace"))) goto L_1ff;
  this.bbox.L = Math.max(0, this.length2em(t#2.get("lspace")));
  Math.max(0, this.length2em(t#2.get("lspace")));
  if (!(t#2.isSet("rspace"))) goto L_2da;
  this.bbox.R = Math.max(0, this.length2em(t#2.get("rspace")));
  Math.max(0, this.length2em(t#2.get("rspace")));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=249B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: this
function {
  this = this;
  if (!(this.node.isEmbellished)) goto L_f8;
  if (!(this.node.parent)) goto L_f7;
  return !this.node.parent.isEmbellished;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=175B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: this
function {
  this = this;
  return this.jax.nodeMap.get(this.node.core());   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=175B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: this
function {
  this = this;
  return this.jax.nodeMap.get(this.node.coreMO());   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=255B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: t, e, this
function {
  this = this;
  let e;
  let t;
  t = this.bbox.rscale;
  e = this.coreMO();
  if (!((e !== this))) goto L_fb;
  if (!(e)) goto L_fb;
  t = (t * e.bbox.rscale);
  (t * e.bbox.rscale);
  e = e.parent;
  e.parent;
  goto L_72;
  return t;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=142B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: t, e, this
function {
  this = this;
  let e;
  let t;
  t = 1;
  e = this;
  if (!(e)) goto L_8a;
  t = (t * e.bbox.rscale);
  (t * e.bbox.rscale);
  e = e.parent;
  e.parent;
  goto L_c;
  return t;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=255B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: t, e, this
// closure: i
function {
  this = this;
  let t;
  t = "";
  if (!(this.node.isToken)) goto L_fb;
  let e;
  for (const e of this.node.childNodes) {
    if (!((e instanceof i.TextNode))) goto L_f4;
    t = (t + e.getText());
    (t + e.getText());
  }
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=476B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: e, this
// closure: l
function {
  this = this;
  this.stretch = l.NOSTRETCH;
  if (!(this.node.isEmbellished)) goto L_152;
  let e;
  e = this.core();
  if (!(e)) goto L_151;
  if (!((e.node !== this.node))) goto L_151;
  if (!(e.canStretch(t))) goto L_151;
  this.stretch = e.stretch;
  e.stretch;
  return (this.stretch.dir !== l.DIRECTION.None);
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=361B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: t, e, i, s, this
function {
  this = this;
  let s;
  let i;
  let e;
  let t;
  if (((undefined === undefined))) goto L_a7;
  t = <to_object>(undefined).indentalign;
  e = <to_object>(undefined).indentshift;
  i = <to_object>(undefined).indentalignfirst;
  s = <to_object>(undefined).indentshiftfirst;
  <to_object>(undefined);
  goto L_113;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_17;
  // [栈深重同步 1 -> 0]
  if (!(("indentalign" !== i))) goto L_127;
  t = i;
  i;
  if (!(("indentshift" !== s))) goto L_13c;
  e = s;
  s;
  return this.processIndent(t, e);   // tail call
}

// fn <atom:0>  args=5 vars=11 closure=0 cpool=5 bc=1002B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e, i, s, r
// locals: t#1, e#1, i#1, s#1, r#1, this
function {
  this = this;
  let r#1;
  let s#1;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((i === undefined))) goto L_1e;
  i;
  i = "";
  i#1 = "";
  if (!((s === undefined))) goto L_27;
  s;
  s = "";
  s#1 = "";
  if (!((r === undefined))) goto L_77;
  r;
  r = this.metrics.containerWidth;
  r#1 = this.metrics.containerWidth;
  if (!(!this.jax.math.display)) goto L_eb;
  return ["left", 0];
  if (!(i)) goto L_f7;
  if ((("auto" !== i))) goto L_1fb;
  if (!(this.jax.math.root.getProperty("inlineMarked"))) goto L_195;
  goto L_1fa;
  // [栈深重同步 1 -> 0]
  i = this.jax.options.displayAlign;
  this.jax.options.displayAlign;
  if (!(s)) goto L_208;
  if ((("auto" !== s))) goto L_309;
  if (!(this.jax.math.root.getProperty("inlineMarked"))) goto L_2a3;
  goto L_308;
  // [栈深重同步 1 -> 0]
  s = this.jax.options.displayIndent;
  this.jax.options.displayIndent;
  if (!(("auto" === t))) goto L_317;
  t = i;
  i;
  if (!(("auto" === e))) goto L_3ba;
  e = s;
  if ((("right" !== t))) goto L_3ba;
  if ((e.match(new RegExp("^\\s*0[a-z]*\\s*$")))) goto L_3ba;
  e = ("-" + e.trim()).replace(new RegExp("^--"), "");
  ("-" + e.trim()).replace(new RegExp("^--"), "");
  return [t, this.length2em(e, r)];
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=269B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e, i
function {
  if (!(("right" === i))) goto L_74;
  return (t - ((e.w + e.R) * e.rscale));
  if (!(("left" === i))) goto L_c3;
  return (e.L * e.rscale);
  return ((t - (e.w * e.rscale)) / 2);
}

// fn <atom:0>  args=5 vars=5 closure=0 cpool=0 bc=53B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e, i, s, r
function {
  if (!(("top" === r))) goto L_f;
  return (t - i);
  if (!(("bottom" === r))) goto L_1e;
  return (s - e);
  if (!(("center" === r))) goto L_33;
  return (((t - i) - (e - s)) / 2);
  return 0;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=108B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: this
function {
  this = this;
  return this.childNodes[t].getBBox().w;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
function {
  return "left";
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// closure: r
function {
  return r.percent(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// closure: r
function {
  return r.em(t);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=163B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e
// locals: t#1, e#1, this
// closure: r
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_36;
  e;
  e = -r.BIGDIMEN;
  e#1 = -r.BIGDIMEN;
  return r.px(t, e, this.metrics.em);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=2 cpool=0 bc=405B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e, i
// locals: t#1, e#1, i#1, s, o, this
// closure: n, r
function {
  this = this;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_16;
  e;
  e = 1;
  e#1 = 1;
  if (!((i === undefined))) goto L_1f;
  i;
  i = null;
  i#1 = null;
  let o;
  let s;
  if (!((null === i))) goto L_72;
  i = this.bbox.scale;
  this.bbox.scale;
  s = this.font.params.rule_thickness;
  o = n.lookup(t, {medium: 1, thin: (2 / 3), thick: (5 / 3)}, 0);
  if (!(o)) goto L_126;
  return (o * s);
  return r.length2em(t, e, i, this.jax.pxPerEm);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=62B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: e
// closure: t
function {
  if (!((t[e] == null))) goto L_d;
  t[e];
  goto L_38;
  if (!((undefined[3] == null))) goto L_17;
  undefined[3];
  goto L_38;
  if ((undefined.smp)) goto L_3d;
  return e;
}

// fn <atom:0>  args=2 vars=8 closure=1 cpool=1 bc=312B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e
// locals: t#1, e#1, i, r, t#2, this
// closure: s
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_35;
  e;
  e = this.variant;
  e#1 = this.variant;
  let r;
  let i;
  i = s.unicodeChars(t);
  r = this.font.getVariant(e);
  if (!(r)) goto L_134;
  if (!(r.chars)) goto L_134;
  let t#2;
  t#2 = r.chars;
  i = i.map(function <atom:0>);
  i.map(function <atom:0>);
  // close_loc t#2
  return i;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
function {
  return t;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=147B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: this
function {
  this = this;
  return this.node.factory.create("text").setText(t);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=139B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e, i
// locals: t#1, e#1, i#1, this
function {
  this = this;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_15;
  e;
  e = {};
  e#1 = {};
  if (!((i === undefined))) goto L_20;
  i;
  i = [];
  i#1 = [];
  return this.node.factory.create(t, e, i);   // tail call
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=440B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t
// locals: e, i, s, r, this
function {
  this = this;
  let r;
  let s;
  let i;
  let e;
  e = this.node.factory;
  i = e.create("text").setText(t);
  s = e.create("mo", {stretchy: true}, [i]);
  s.inheritAttributesFrom(this.node);
  s.parent = this.node.parent;
  r = this.wrap(s);
  r.parent = this;
  return r;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=119B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e
// locals: i, this
function {
  this = this;
  let i;
  if ((this.font.getChar(t, e))) goto L_5f;
  i = [0, 0, 0, {unknown: true}];
  if (!((3 === i.length))) goto L_72;
  i[3] = {};
  {};
  return i;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=106B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: t, e, i
// locals: t#1, e#1, i#1, this
function {
  this = this;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_15;
  e;
  e = {};
  e#1 = {};
  if (!((i === undefined))) goto L_20;
  i;
  i = [];
  i#1 = [];
  return this.jax.html(t, e, i);   // tail call
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=67 bc=1505B file=math_jax/src/mathjax_src/output/common/Wrapper
// args: require, module, exports
// locals: t, e, i, s, r, o, n, a, h, l, d, c, m, CommonWrapper, <class_fields_init>, CommonWrapper#1
function {
  m = function m;
  let CommonWrapper#1;
  let c;
  let d;
  let l;
  let h;
  let a;
  let n;
  let o;
  let r;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SPACE = undefined;
  exports.CommonWrapper = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("../../core/Tree/Wrapper");
  i = require("../../core/MmlTree/MmlNode");
  s = require("../../util/string");
  r = require("../../util/lengths");
  o = require("../../util/Styles");
  n = require("../../util/Options");
  a = require("../../util/BBox");
  h = require("./LineBBox");
  l = require("./FontData");
  d = (2 / 18);
  c = (5 / 18);
  {}[r.em(0)] = "0";
  "0";
  {}[r.em((2 / 18))] = "1";
  "1";
  {}[r.em((3 / 18))] = "2";
  "2";
  {}[r.em((4 / 18))] = "3";
  "3";
  {}[r.em((5 / 18))] = "4";
  "4";
  {}[r.em((6 / 18))] = "5";
  "5";
  exports.SPACE = {};
  let CommonWrapper;
  let <class_fields_init>;
  class CommonWrapper extends e.AbstractWrapper { ... }
  function <atom:0>.addStyles = function <atom:0>;
  <proto:CommonWrapper>.jax = function <atom:0>;
  <proto:CommonWrapper>.adaptor = function <atom:0>;
  <proto:CommonWrapper>.metrics = function <atom:0>;
  <proto:CommonWrapper>.containerWidth = function <atom:0>;
  <proto:CommonWrapper>.linebreaks = function <atom:0>;
  <proto:CommonWrapper>.linebreakOptions = function <atom:0>;
  <proto:CommonWrapper>.fixesPWidth = function <atom:0>;
  <proto:CommonWrapper>.breakCount = function <atom:0>;
  <proto:CommonWrapper>.breakTop = function <atom:0>;
  <proto:CommonWrapper>.wrap = function <atom:0>;
  <proto:CommonWrapper>.getBBox = function <atom:0>;
  <proto:CommonWrapper>.getOuterBBox = function <atom:0>;
  <proto:CommonWrapper>.getUnbrokenHD = function <atom:0>;
  <proto:CommonWrapper>.computeBBox = function <atom:0>;
  <proto:CommonWrapper>.getLineBBox = function <atom:0>;
  <proto:CommonWrapper>.embellishedBBox = function <atom:0>;
  <proto:CommonWrapper>.computeLineBBox = function <atom:0>;
  <proto:CommonWrapper>.getBreakNode = function <atom:0>;
  <proto:CommonWrapper>.getChildLineBBox = function <atom:0>;
  <proto:CommonWrapper>.addLeftBorders = function <atom:0>;
  <proto:CommonWrapper>.addMiddleBorders = function <atom:0>;
  <proto:CommonWrapper>.addRightBorders = function <atom:0>;
  <proto:CommonWrapper>.setChildPWidths = function <atom:0>;
  <proto:CommonWrapper>.breakToWidth = function <atom:0>;
  <proto:CommonWrapper>.invalidateBBox = function <atom:0>;
  <proto:CommonWrapper>.copySkewIC = function <atom:0>;
  <proto:CommonWrapper>.getStyles = function <atom:0>;
  <proto:CommonWrapper>.getStyleData = function <atom:0>;
  <proto:CommonWrapper>.getVariant = function <atom:0>;
  <proto:CommonWrapper>.explicitVariant = function <atom:0>;
  <proto:CommonWrapper>.getScale = function <atom:0>;
  <proto:CommonWrapper>.getSpace = function <atom:0>;
  <proto:CommonWrapper>.getMathMLSpacing = function <atom:0>;
  <proto:CommonWrapper>.getTeXSpacing = function <atom:0>;
  <proto:CommonWrapper>.isTopEmbellished = function <atom:0>;
  <proto:CommonWrapper>.core = function <atom:0>;
  <proto:CommonWrapper>.coreMO = function <atom:0>;
  <proto:CommonWrapper>.coreRScale = function <atom:0>;
  <proto:CommonWrapper>.getRScale = function <atom:0>;
  <proto:CommonWrapper>.getText = function <atom:0>;
  <proto:CommonWrapper>.canStretch = function <atom:0>;
  <proto:CommonWrapper>.getAlignShift = function <atom:0>;
  <proto:CommonWrapper>.processIndent = function <atom:0>;
  <proto:CommonWrapper>.getAlignX = function <atom:0>;
  <proto:CommonWrapper>.getAlignY = function <atom:0>;
  <proto:CommonWrapper>.getWrapWidth = function <atom:0>;
  <proto:CommonWrapper>.getChildAlign = function <atom:0>;
  <proto:CommonWrapper>.percent = function <atom:0>;
  <proto:CommonWrapper>.em = function <atom:0>;
  <proto:CommonWrapper>.px = function <atom:0>;
  <proto:CommonWrapper>.length2em = function <atom:0>;
  <proto:CommonWrapper>.unicodeChars = function <atom:0>;
  <proto:CommonWrapper>.remapChars = function <atom:0>;
  <proto:CommonWrapper>.mmlText = function <atom:0>;
  <proto:CommonWrapper>.mmlNode = function <atom:0>;
  <proto:CommonWrapper>.createMo = function <atom:0>;
  <proto:CommonWrapper>.getVariantChar = function <atom:0>;
  <proto:CommonWrapper>.html = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonWrapper>;
  CommonWrapper = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc CommonWrapper
  CommonWrapper#1 = function <atom:0>;
  exports.CommonWrapper = CommonWrapper#1;
  CommonWrapper#1.kind = "unknown";
  CommonWrapper#1.styles = {};
  CommonWrapper#1.removeStyles = ["fontSize", "fontFamily", "fontWeight", "fontStyle", "fontVariant", "font"];
  CommonWrapper#1.skipAttributes = {fontfamily: true, fontsize: true, fontweight: true, fontstyle: true, color: true, background: true, class: true, href: true, style: true, xmlns: true};
  CommonWrapper#1.BOLDVARIANTS = {bold: {normal: "bold", italic: "bold-italic", fraktur: "bold-fraktur", script: "bold-script", sans-serif: "bold-sans-serif", sans-serif-italic: "sans-serif-bold-italic"}, normal: {bold: "normal", bold-italic: "italic", bold-fraktur: "fraktur", bold-script: "script", bold-sans-serif: "sans-serif", sans-serif-bold-italic: "sans-serif-italic"}};
  CommonWrapper#1.ITALICVARIANTS = {italic: {normal: "italic", bold: "bold-italic", sans-serif: "sans-serif-italic", bold-sans-serif: "sans-serif-bold-italic"}, normal: {italic: "normal", bold-italic: "bold", sans-serif-italic: "sans-serif", sans-serif-bold-italic: "bold-sans-serif"}};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrapper
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
