// fn <atom:0>  args=0 vars=15 closure=1 cpool=0 bc=893B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// locals: t, o, e, s, o#1, n, h, t#1, e#1, e#2, i, s#1, e#3, t#2, this
// closure: i
function {
  this = this;
  let s;
  let e;
  let t;
  t = [];
  let o;
  for (const o of this.childNodes) {
    if (!(o.canStretch(i.DIRECTION.Vertical))) goto L_d5;
    t.push(o);
  }
  e = t.length;
  s = this.childNodes.length;
  if (!(e)) goto L_37c;
  if (!((s > 1))) goto L_37c;
  let h;
  let n;
  let o#1;
  o#1 = 0;
  n = 0;
  if (!((e > 1))) goto L_13a;
  h = (e === s);
  let t#1;
  const _it2 = this.childNodes;
  goto L_2d5;
  t#1 = <value(_it2)>;
  let e#1;
  e#1 = (t#1.stretch.dir === i.DIRECTION.None);
  if ((h)) goto L_202;
  if (!(e#1)) goto L_2d5;
  let s#1;
  let i;
  let e#2;
  e#2 = t#1.getBBox().rscale;
  if (((undefined === undefined))) goto L_26d;
  const _it3 = undefined;
  <done(_it3)>;
  i = <value(_it3)>;
  <done(_it3)>;
  s#1 = <value(_it3)>;
  goto L_297;
  <value(_it3)>;
  goto L_25f;
  // [栈深重同步 4 -> 3]
  i = (i * e#2);
  (i * e#2);
  s#1 = (s#1 * e#2);
  (s#1 * e#2);
  if (!((i > o#1))) goto L_2c1;
  o#1 = i;
  i;
  if (!((s#1 > n))) goto L_2d4;
  n = s#1;
  s#1;
  if (!(<done(_it3)>)) goto L_166;
  <value(_it3)>;
  let e#3;
  for (const e#3 of t) {
    let t#2;
    t#2 = e#3.coreRScale();
    e#3.coreMO().getStretchedVariant([(o#1 / t#2), (n / t#2)]);
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
function {
  return false;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: t, e
function {
  return (t + e.breakCount);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=202B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// locals: this
function {
  this = this;
  if (!((this._breakCount < 0))) goto L_a6;
  if (!(this.childNodes.length)) goto L_9b;
  goto L_9c;
  // [栈深重同步 2 -> 1]
  this._breakCount = 0;
  0;
  return this._breakCount;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=124B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: t, e
// locals: i, this
function {
  this = this;
  let i;
  i = this;
  if (!(this.isStack)) goto L_78;
  return this.parent.breakTop(i, i);
  return i;
}

// fn <atom:0>  args=3 vars=11 closure=2 cpool=0 bc=613B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: e, i, s
// locals: e#1, i#1, s#1, o, n, this.active_func, new.target, this
// closure: <class_fields_init>, t
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let s#1;
  let i#1;
  let e#1;
  e#1 = e;
  i#1 = i;
  if (!((s === undefined))) goto L_21;
  s;
  s = null;
  s#1 = null;
  let o;
  this = new new.target(e, i, s);
  if (!(<class_fields_init>)) goto L_41;
  <class_fields_init>.call(this);
  new new.target(e, i, s);
  this.dh = 0;
  o = this;
  if ((!this.parent)) goto L_13f;
  if ((this.parent.node.isInferred)) goto L_13f;
  this.isStack = (this.parent.breakTop(o, o) !== o);
  this.stretchChildren();
  let n;
  for (const n of this.childNodes) {
    if (!(n.bbox.pwidth)) continue;
    this.bbox.pwidth = t.BBox.fullWidth;
    goto L_260;
  }
  return this;
}

// fn <atom:0>  args=2 vars=8 closure=1 cpool=2 bc=810B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: t, i
// locals: t#1, i#1, s, e, i#2, this
// closure: e
function {
  this = this;
  let i#1;
  let t#1;
  t#1 = t;
  if (!((i === undefined))) goto L_14;
  i;
  i = false;
  i#1 = false;
  let s;
  s = this.breakCount;
  if (!(s)) goto L_8a;
  goto L_8d;
  // [栈深重同步 2 -> 1]
  this.lineBBox = [];
  t.empty();
  let e;
  for (const e of this.childNodes.keys()) {
    let i#2;
    i#2 = this.childNodes[e];
    t.append(i#2.getOuterBBox());
    if (!(s)) goto L_1b7;
    this.computeChildLineBBox(i#2, e);
  }
  t.clean();
  if (!(s)) goto L_285;
  if (!(!this.coreMO().node.isEmbellished)) goto L_285;
  this.computeLinebreakBBox(t);
  if (!(this.fixesPWidth)) goto L_301;
  if (!(this.setChildPWidths(i))) goto L_301;
  this.computeBBox(t, true);
  this.vboxAdjust(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: t
function {
  return t.w;
}

// fn <atom:0>  args=1 vars=10 closure=1 cpool=3 bc=1567B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: e
// locals: i, s, o, t, e#1, n, t#1, i#1, this
// closure: t
function {
  this = this;
  let n;
  let o;
  let s;
  let i;
  e.empty();
  i = this.isStack;
  s = this.lineBBox;
  o = (s.length - 1);
  if (!(i)) goto L_162;
  let t;
  for (const t of s.keys()) {
    let e#1;
    e#1 = s[t];
    this.addMiddleBorders(e#1);
    if (!((0 === t))) goto L_123;
    this.addLeftBorders(e#1);
    if (!((t === o))) goto L_158;
    this.addRightBorders(e#1);
  }
  n = 0;
  let t#1;
  for (const t#1 of s.keys()) {
    let i#1;
    i#1 = s[t#1];
    e.combine(i#1, 0, n);
    if (!((s[(t#1 + 1)] == null))) goto L_27e;
    s[(t#1 + 1)];
    goto L_29f;
    if ((undefined.h)) goto L_2a4;
    n = (n - ((Math.max(0.25, i#1.d) + i#1.lineLeading) + Math.max(0.75, 0)));
    (n - ((Math.max(0.25, i#1.d) + i#1.lineLeading) + Math.max(0.75, 0)));
  }
  if (!(i)) goto L_369;
  s[0].L = this.bbox.L;
  s[o].R = this.bbox.R;
  goto L_5f8;
  // [栈深重同步 1 -> 0]
  // append([], 0, this.lineBBox.map(function <atom:0>))
  this.lineBBox.map(function <atom:0>);
  e.w = Math.max.apply(Math, []);
  this.shiftLines(e);
  if ((this.jax.math.display)) goto L_5f8;
  if ((this.linebreakOptions.inline)) goto L_5f8;
  e.pwidth = t.BBox.fullWidth;
  if (!(this.node.isInferred)) goto L_5f8;
  this.parent.bbox.pwidth = t.BBox.fullWidth;
  t.BBox.fullWidth;
  e.clean();
  return;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=0 bc=807B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: t
// locals: e, i, e#1, i#1, s, this
function {
  this = this;
  let i;
  let e;
  if (!(!this.parent)) goto L_30;
  return;
  e = this.breakCount;
  i = this.parent.node.attributes.get("data-vertical-align");
  if (!(e)) goto L_17c;
  if (!(("bottom" === i))) goto L_17c;
  if (!(e)) goto L_16f;
  goto L_170;
  // [栈深重同步 2 -> 1]
  this.dh = 0;
  goto L_288;
  if ((("center" === i))) goto L_199;
  if (!(e)) goto L_199;
  if (!(!("middle" === i))) goto L_1a9;
  this.dh = 0;
  return;
  let s;
  let i#1;
  let e#1;
  if (((undefined === undefined))) goto L_201;
  e#1 = <to_object>(undefined).h;
  i#1 = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_205;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1b7;
  // [栈深重同步 1 -> 0]
  s = this.font.params.axis_height;
  this.dh = ((((e#1 + i#1) / 2) + s) - e#1);
  t.h = (t.h + this.dh);
  t.d = (t.d - this.dh);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=2 bc=521B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: t, i
// locals: s, o, n, s#1, this
// closure: e
function {
  this = this;
  let o;
  let s;
  s = this.lineBBox[(this.lineBBox.length - 1)];
  s.end = [i, 0];
  s.append(t.getLineBBox(0));
  o = (t.breakCount + 1);
  if (!((1 !== o))) goto L_208;
  let n;
  n = 1;
  if (!((n < o))) goto L_208;
  let s#1;
  s#1 = new e.LineBBox({h: 0.75, d: 0.25, w: 0});
  s#1.end = [i, n];
  s#1.start = [i, n];
  s#1.isFirst = true;
  s#1.append(t.getLineBBox(n));
  this.lineBBox.push(s#1);
  n = <n_new>;
  (n++);
  goto L_e7;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=270B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: t
// locals: this, <home_object>
// closure: e
function {
  <home_object> = <special_object 4>;
  this = this;
  this.getBBox();
  if (!(this.isStack)) goto L_5d;
  return super["getLineBBox"].call(this, t);
  return e.LineBBox.from(this.getOuterBBox(), this.linebreakOptions.lineleading);
}

// fn <atom:0>  args=1 vars=14 closure=0 cpool=2 bc=659B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: t
// locals: e, i, s, o, n, h, r, d, a, c, l, x, this
function {
  this = this;
  let n;
  let o;
  let s;
  let i;
  let e;
  e = t.w;
  i = this.lineBBox;
  s = (i.length - 1);
  if (((undefined === undefined))) goto L_72;
  const _it1 = undefined;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_b3;
  // [栈深重同步 4 -> 1]
  _it1;
  if (!((i[1].indentData == null))) goto L_a1;
  i[1].indentData;
  goto L_a3;
  if ((undefined[0])) goto L_65;
  goto L_65;
  // [栈深重同步 1 -> 0]
  let h;
  const _it2 = i.keys();
  goto L_289;
  h = <value(_it2)>;
  let x;
  let l;
  let c;
  let a;
  let d;
  let r;
  r = i[h];
  if (((undefined === undefined))) goto L_111;
  const _it3 = undefined;
  <done(_it3)>;
  d = <value(_it3)>;
  <done(_it3)>;
  a = <value(_it3)>;
  goto L_16e;
  <value(_it3)>;
  if (!((0 === h))) goto L_124;
  goto L_103;
  // [栈深重同步 4 -> 3]
  if (!((r.indentData == null))) goto L_150;
  r.indentData;
  goto L_15e;
  if (!((h === s))) goto L_15c;
  goto L_15d;
  // [栈深重同步 5 -> 4]
  if ((undefined[1])) goto L_103;
  goto L_103;
  // [栈深重同步 4 -> 3]
  if (((undefined === undefined))) goto L_181;
  const _it4 = undefined;
  <done(_it4)>;
  c = <value(_it4)>;
  <done(_it4)>;
  l = <value(_it4)>;
  goto L_1b9;
  <value(_it4)>;
  goto L_173;
  // [栈深重同步 4 -> 3]
  r.L = 0;
  r.L = (this.getAlignX(e, r, c) + l);
  x = (r.L + r.w);
  if (!((x > t.w))) goto L_288;
  t.w = x;
  x;
  if (!(<done(_it4)>)) goto L_e1;
  <value(_it4)>;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=0 bc=303B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: t, e, i
// locals: t#1, e#1, i#1, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_19;
  e;
  e = null;
  e#1 = null;
  if (!((i === undefined))) goto L_23;
  i;
  i = true;
  i#1 = true;
  if (!(this.breakCount)) goto L_11e;
  if (!(!t)) goto L_12e;
  if (!((null !== e))) goto L_11a;
  if (!((this.bbox.w !== e))) goto L_11a;
  this.bbox.w = e;
  this.shiftLines(this.bbox);
  return true;
  return super["setChildPWidths"].call(this, t, e, i);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=75B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: t
// locals: this
function {
  this = this;
  this.linebreaks.breakToWidth(this, t);
  return;
}

// fn s  args=1 vars=3 closure=3 cpool=13 bc=119B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: s
// locals: CommonMrowMixin, <class_fields_init>
// closure: i, t, e
function {
  let CommonMrowMixin;
  let <class_fields_init>;
  class CommonMrowMixin extends s { ... }
  <proto:CommonMrowMixin>.stretchChildren = function <atom:0>;
  <proto:CommonMrowMixin>.fixesPWidth = function <atom:0>;
  <proto:CommonMrowMixin>.breakCount = function <atom:0>;
  <proto:CommonMrowMixin>.breakTop = function <atom:0>;
  <proto:CommonMrowMixin>.computeBBox = function <atom:0>;
  <proto:CommonMrowMixin>.computeLinebreakBBox = function <atom:0>;
  <proto:CommonMrowMixin>.vboxAdjust = function <atom:0>;
  <proto:CommonMrowMixin>.computeChildLineBBox = function <atom:0>;
  <proto:CommonMrowMixin>.getLineBBox = function <atom:0>;
  <proto:CommonMrowMixin>.shiftLines = function <atom:0>;
  <proto:CommonMrowMixin>.setChildPWidths = function <atom:0>;
  <proto:CommonMrowMixin>.breakToWidth = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMrowMixin>;
  CommonMrowMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=190B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// locals: this
function {
  this = this;
  this.bbox.scale = this.parent.bbox.scale;
  this.bbox.rscale = 1;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
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

// fn o  args=1 vars=3 closure=0 cpool=2 bc=31B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: t
// locals: CommonInferredMrowMixin, <class_fields_init>
function {
  let CommonInferredMrowMixin;
  let <class_fields_init>;
  class CommonInferredMrowMixin extends t { ... }
  <proto:CommonInferredMrowMixin>.getScale = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonInferredMrowMixin>;
  CommonInferredMrowMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=142B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// args: require, module, exports
// locals: t, e, i, s, o
function {
  s = function s;
  o = function o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMrowMixin = undefined;
  exports.CommonInferredMrowMixin = undefined;
  t = require("../../../util/BBox");
  e = require("../LineBBox");
  i = require("../FontData");
  exports.CommonMrowMixin = s;
  exports.CommonInferredMrowMixin = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mrow
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
