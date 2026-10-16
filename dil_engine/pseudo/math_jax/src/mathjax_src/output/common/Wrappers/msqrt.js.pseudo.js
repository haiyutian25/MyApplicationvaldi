// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/output/common/Wrappers/msqrt
function {
  return 0;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/output/common/Wrappers/msqrt
function {
  return null;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/output/common/Wrappers/msqrt
// args: t, s, e
function {
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=673B file=math_jax/src/mathjax_src/output/common/Wrappers/msqrt
// args: t
// locals: s, e, i, this
function {
  this = this;
  let i;
  let e;
  let s;
  s = this.font.params.rule_thickness;
  e = this.font.params.surd_height;
  if (!(this.node.attributes.get("displaystyle"))) goto L_1a9;
  goto L_1ac;
  // [栈深重同步 1 -> 0]
  i = s;
  if (!(((t.h + t.d) > this.surdH))) goto L_294;
  goto L_29d;
  // [栈深重同步 2 -> 1]
  return [i, (e + (i / 4))];
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=8B file=math_jax/src/mathjax_src/output/common/Wrappers/msqrt
// args: t, s
function {
  return [0, 0, 0, 0];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=1 bc=3B file=math_jax/src/mathjax_src/output/common/Wrappers/msqrt
function {
  return 1.25;
}

// fn <atom:0>  args=0 vars=6 closure=0 cpool=0 bc=782B file=math_jax/src/mathjax_src/output/common/Wrappers/msqrt
// locals: t, s, e, i, r, this
function {
  this = this;
  let r;
  let i;
  let e;
  let s;
  let t;
  t = this.font.params.rule_thickness;
  s = this.font.params.surd_height;
  if (!(this.node.attributes.get("displaystyle"))) goto L_1b4;
  goto L_1b7;
  // [栈深重同步 1 -> 0]
  e = t;
  if (((undefined === undefined))) goto L_208;
  i = <to_object>(undefined).h;
  r = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_277;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1bd;
  // [栈深重同步 1 -> 0]
  this.surdH = ((((i + r) + t) + s) + (e / 4));
  this.surd.getStretchedVariant([(this.surdH - r), r], true);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=2 cpool=0 bc=304B file=math_jax/src/mathjax_src/output/common/Wrappers/msqrt
// args: t, e, i
// locals: t#1, e#1, i#1, this.active_func, new.target, this
// closure: <class_fields_init>, s
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
  this.surd = this.createMo("√");
  this.surd.canStretch(s.DIRECTION.Vertical);
  this.getStretchedSurd();
  return this;
}

// fn <atom:0>  args=2 vars=12 closure=1 cpool=0 bc=965B file=math_jax/src/mathjax_src/output/common/Wrappers/msqrt
// args: s, e
// locals: s#1, e#1, i, r, o, h, n, d, u, this
// closure: t
function {
  this = this;
  let e#1;
  let s#1;
  s#1 = s;
  if (!((e === undefined))) goto L_14;
  e;
  e = false;
  e#1 = false;
  let u;
  let d;
  let n;
  let h;
  let o;
  let r;
  let i;
  s.empty();
  i = this.surd.getBBox();
  r = new t.BBox(this.childNodes[this.base].getOuterBBox());
  o = this.getPQ(i)[1];
  h = this.font.params.rule_thickness;
  n = this.font.params.surd_height;
  d = ((r.h + o) + h);
  if (((undefined === undefined))) goto L_263;
  const _it1 = undefined;
  <done(_it1)>;
  u = <value(_it1)>;
  goto L_292;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_25a;
  // [栈深重同步 1 -> 0]
  s.h = (d + n);
  this.combineRootBBox(s, i, d);
  s.combine(i, u, (d - i.h));
  s.combine(r, (u + i.w), 0);
  s.clean();
  this.setChildPWidths(e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=124B file=math_jax/src/mathjax_src/output/common/Wrappers/msqrt
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["invalidateBBox"].call(this);
  this.surd.childNodes[0].invalidateBBox();
  return;
}

// fn e  args=1 vars=3 closure=2 cpool=10 bc=95B file=math_jax/src/mathjax_src/output/common/Wrappers/msqrt
// args: e
// locals: CommonMsqrtMixin, <class_fields_init>
// closure: s, t
function {
  let CommonMsqrtMixin;
  let <class_fields_init>;
  class CommonMsqrtMixin extends e { ... }
  <proto:CommonMsqrtMixin>.base = function <atom:0>;
  <proto:CommonMsqrtMixin>.root = function <atom:0>;
  <proto:CommonMsqrtMixin>.combineRootBBox = function <atom:0>;
  <proto:CommonMsqrtMixin>.getPQ = function <atom:0>;
  <proto:CommonMsqrtMixin>.getRootDimens = function <atom:0>;
  <proto:CommonMsqrtMixin>.rootWidth = function <atom:0>;
  <proto:CommonMsqrtMixin>.getStretchedSurd = function <atom:0>;
  <proto:CommonMsqrtMixin>.computeBBox = function <atom:0>;
  <proto:CommonMsqrtMixin>.invalidateBBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMsqrtMixin>;
  CommonMsqrtMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=math_jax/src/mathjax_src/output/common/Wrappers/msqrt
// args: require, module, exports
// locals: t, s, e
function {
  e = function e;
  let s;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMsqrtMixin = undefined;
  t = require("../../../util/BBox");
  s = require("../FontData");
  exports.CommonMsqrtMixin = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/msqrt
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
