// fn <atom:0>  args=0 vars=3 closure=0 cpool=2 bc=366B file=math_jax/src/mathjax_src/output/common/Wrappers/mpadded
// locals: t, e, this
function {
  this = this;
  let e;
  let t;
  t = this.node.attributes;
  e = t.get("width").toString();
  if ((e.match(new RegExp("^[-+]|%$")))) goto L_ff;
  if (!(("linebreak" !== t.get("data-overflow")))) goto L_145;
  return this.parent.containerWidth;
  return this.length2em(e);
}

// fn <atom:0>  args=0 vars=13 closure=0 cpool=0 bc=1239B file=math_jax/src/mathjax_src/output/common/Wrappers/mpadded
// locals: t, e, i, s, h, n, d, o, a, r, l, g, this
function {
  this = this;
  let g;
  let l;
  let r;
  let a;
  let o;
  let d;
  let n;
  let h;
  let s;
  let i;
  let e;
  let t;
  t = this.node.attributes.getList("width", "height", "depth", "lspace", "voffset");
  e = this.childNodes[0].getOuterBBox();
  if (((undefined === undefined))) goto L_166;
  i = <to_object>(undefined).w;
  s = <to_object>(undefined).h;
  h = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_16c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_f8;
  // [栈深重同步 1 -> 0]
  n = i;
  d = s;
  o = h;
  a = 0;
  r = 0;
  l = 0;
  if (!(("" !== t.width))) goto L_205;
  i = this.dimen(t.width, e, "w", 0);
  this.dimen(t.width, e, "w", 0);
  if (!(("" !== t.height))) goto L_287;
  s = this.dimen(t.height, e, "h", 0);
  this.dimen(t.height, e, "h", 0);
  if (!(("" !== t.depth))) goto L_309;
  h = this.dimen(t.depth, e, "d", 0);
  this.dimen(t.depth, e, "d", 0);
  if (!(("" !== t.voffset))) goto L_385;
  r = this.dimen(t.voffset, e);
  this.dimen(t.voffset, e);
  if (!(("" !== t.lspace))) goto L_401;
  a = this.dimen(t.lspace, e);
  this.dimen(t.lspace, e);
  g = this.node.attributes.get("data-align");
  if (!(g)) goto L_4ab;
  l = this.getAlignX(i, e, g);
  this.getAlignX(i, e, g);
  return [d, o, n, (s - d), (h - o), (i - n), a, r, l];
}

// fn <atom:0>  args=4 vars=12 closure=0 cpool=4 bc=332B file=math_jax/src/mathjax_src/output/common/Wrappers/mpadded
// args: t, e, i, s
// locals: t#1, e#1, i#1, s#1, h, n, d, this
function {
  this = this;
  let s#1;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((i === undefined))) goto L_1b;
  i;
  i = "";
  i#1 = "";
  if (!((s === undefined))) goto L_24;
  s;
  s = null;
  s#1 = null;
  let d;
  let n;
  let h;
  t = String(t);
  h = String(t).match(new RegExp("width|height|depth"));
  if (!(h)) goto L_94;
  goto L_9d;
  // [栈深重同步 1 -> 0]
  if (!(i)) goto L_9c;
  goto L_9d;
  // [栈深重同步 1 -> 0]
  n = 0;
  if ((this.length2em(t, n))) goto L_ce;
  d = 0;
  if (!(t.match(new RegExp("^[-+]")))) goto L_10e;
  if (!(i)) goto L_10e;
  d = (d + n);
  (d + n);
  if (!((null != s))) goto L_147;
  d = Math.max(s, d);
  Math.max(s, d);
  return d;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=149B file=math_jax/src/mathjax_src/output/common/Wrappers/mpadded
// args: t
// locals: e, i, s, h, n, d, this
function {
  this = this;
  let d;
  let n;
  let h;
  let s;
  let i;
  let e;
  if (((undefined === undefined))) goto L_38;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  h = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  <done(_it1)>;
  d = <value(_it1)>;
  goto L_61;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  t.w = (s + d);
  t.h = (e + h);
  t.d = (i + n);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=754B file=math_jax/src/mathjax_src/output/common/Wrappers/mpadded
// args: t, e
// locals: t#1, e#1, e#2, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_13;
  e;
  e = false;
  e#1 = false;
  this.setBBoxDimens(t);
  if (!((this.childNodes[0].getOuterBBox().w > t.w))) goto L_2a9;
  let e#2;
  e#2 = this.node.attributes.get("data-overflow");
  if ((("linebreak" === e#2))) goto L_210;
  if (!(("auto" === e#2))) goto L_210;
  if (!(("linebreak" === this.jax.math.root.attributes.get("overflow")))) goto L_2a8;
  this.childNodes[0].breakToWidth(t.w);
  this.setBBoxDimens(t);
  this.setChildPWidths(e, t.w);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/output/common/Wrappers/mpadded
// args: t
// locals: this
function {
  this = this;
  return this.getBBox().w;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=120B file=math_jax/src/mathjax_src/output/common/Wrappers/mpadded
// args: t
// locals: this
function {
  this = this;
  if ((this.node.attributes.get("data-align"))) goto L_77;
  return "left";
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/mpadded
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

// fn t  args=1 vars=3 closure=0 cpool=8 bc=79B file=math_jax/src/mathjax_src/output/common/Wrappers/mpadded
// args: t
// locals: CommonMpaddedMixin, <class_fields_init>
function {
  let CommonMpaddedMixin;
  let <class_fields_init>;
  class CommonMpaddedMixin extends t { ... }
  <proto:CommonMpaddedMixin>.containerWidth = function <atom:0>;
  <proto:CommonMpaddedMixin>.getDimens = function <atom:0>;
  <proto:CommonMpaddedMixin>.dimen = function <atom:0>;
  <proto:CommonMpaddedMixin>.setBBoxDimens = function <atom:0>;
  <proto:CommonMpaddedMixin>.computeBBox = function <atom:0>;
  <proto:CommonMpaddedMixin>.getWrapWidth = function <atom:0>;
  <proto:CommonMpaddedMixin>.getChildAlign = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMpaddedMixin>;
  CommonMpaddedMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=math_jax/src/mathjax_src/output/common/Wrappers/mpadded
// args: require, module, exports
// locals: t
function {
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMpaddedMixin = undefined;
  exports.CommonMpaddedMixin = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mpadded
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
