// fn <atom:0>  args=1 vars=12 closure=0 cpool=0 bc=786B file=math_jax/src/mathjax_src/output/svg/Wrappers/munderover
// args: e
// locals: t, s, i, r, o, n, d, h, u, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let u;
  let h;
  let d;
  let n;
  let o;
  let r;
  let i;
  let s;
  let t;
  if (!(this.toEmbellishedSVG(e))) goto L_4c;
  return;
  if (!(this.hasMovableLimits())) goto L_85;
  super["toSVG"].call(this, e);
  return;
  t = this.standardSvgNodes(e);
  if (((undefined === undefined))) goto L_be;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  goto L_10a;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_b2;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_11c;
  const _it2 = undefined;
  <done(_it2)>;
  r = <value(_it2)>;
  <done(_it2)>;
  o = <value(_it2)>;
  goto L_170;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_10f;
  // [栈深重同步 1 -> 0]
  s.toSVG(t);
  i.toSVG(t);
  if (!(this.isLineBelow)) goto L_1ee;
  goto L_239;
  // [栈深重同步 1 -> 0]
  n = this.getDelta(this.scriptChild, true);
  d = this.getUnderKV(r, o)[1];
  if (((undefined === undefined))) goto L_27e;
  const _it3 = undefined;
  <done(_it3)>;
  h = <value(_it3)>;
  <done(_it3)>;
  u = <value(_it3)>;
  goto L_2b8;
  // [栈深重同步 4 -> 1]
  _it3;
  goto L_270;
  // [栈深重同步 1 -> 0]
  s.place(h, 0);
  i.place(u, d);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/munderover
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=223B file=math_jax/src/mathjax_src/output/svg/Wrappers/munderover
// locals: i, r, SvgMunder, <class_fields_init>
// closure: t, e, s
function {
  let r;
  r = t.CommonMunderMixin(e.SvgMsub);
  let SvgMunder;
  let <class_fields_init>;
  class SvgMunder extends r { ... }
  <proto:SvgMunder>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMunder>;
  SvgMunder = function <atom:0>;
  // close_loc <class_fields_init>
  i = function <atom:0>;
  function <atom:0>.kind = s.MmlMunder.prototype.kind;
  return i;
}

// fn <atom:0>  args=1 vars=12 closure=0 cpool=0 bc=783B file=math_jax/src/mathjax_src/output/svg/Wrappers/munderover
// args: e
// locals: t, s, i, r, o, n, d, h, u, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let u;
  let h;
  let d;
  let n;
  let o;
  let r;
  let i;
  let s;
  let t;
  if (!(this.toEmbellishedSVG(e))) goto L_4c;
  return;
  if (!(this.hasMovableLimits())) goto L_85;
  super["toSVG"].call(this, e);
  return;
  t = this.standardSvgNodes(e);
  if (((undefined === undefined))) goto L_be;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  goto L_10a;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_b2;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_11c;
  const _it2 = undefined;
  <done(_it2)>;
  r = <value(_it2)>;
  <done(_it2)>;
  o = <value(_it2)>;
  goto L_170;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_10f;
  // [栈深重同步 1 -> 0]
  s.toSVG(t);
  i.toSVG(t);
  if (!(this.isLineAbove)) goto L_1ee;
  goto L_237;
  // [栈深重同步 1 -> 0]
  n = this.getDelta(this.scriptChild);
  d = this.getOverKU(r, o)[1];
  if (((undefined === undefined))) goto L_27c;
  const _it3 = undefined;
  <done(_it3)>;
  h = <value(_it3)>;
  <done(_it3)>;
  u = <value(_it3)>;
  goto L_2b5;
  // [栈深重同步 4 -> 1]
  _it3;
  goto L_26e;
  // [栈深重同步 1 -> 0]
  s.place(h, 0);
  i.place(u, d);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/munderover
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=223B file=math_jax/src/mathjax_src/output/svg/Wrappers/munderover
// locals: i, r, SvgMover, <class_fields_init>
// closure: t, e, s
function {
  let r;
  r = t.CommonMoverMixin(e.SvgMsup);
  let SvgMover;
  let <class_fields_init>;
  class SvgMover extends r { ... }
  <proto:SvgMover>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMover>;
  SvgMover = function <atom:0>;
  // close_loc <class_fields_init>
  i = function <atom:0>;
  function <atom:0>.kind = s.MmlMover.prototype.kind;
  return i;
}

// fn <atom:0>  args=1 vars=17 closure=0 cpool=0 bc=1151B file=math_jax/src/mathjax_src/output/svg/Wrappers/munderover
// args: e
// locals: t, s, i, r, o, n, d, h, u, l, v, a, g, p, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let p;
  let g;
  let a;
  let v;
  let l;
  let u;
  let h;
  let d;
  let n;
  let o;
  let r;
  let i;
  let s;
  let t;
  if (!(this.toEmbellishedSVG(e))) goto L_5b;
  return;
  if (!(this.hasMovableLimits())) goto L_94;
  super["toSVG"].call(this, e);
  return;
  t = this.standardSvgNodes(e);
  if (((undefined === undefined))) goto L_d1;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_140;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_c1;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_158;
  const _it2 = undefined;
  <done(_it2)>;
  o = <value(_it2)>;
  <done(_it2)>;
  n = <value(_it2)>;
  <done(_it2)>;
  d = <value(_it2)>;
  goto L_1d4;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_145;
  // [栈深重同步 1 -> 0]
  s.toSVG(t);
  r.toSVG(t);
  i.toSVG(t);
  h = this.getDelta(this.overChild);
  u = this.getDelta(this.underChild, true);
  l = this.getOverKU(o, n)[1];
  v = this.getUnderKV(o, d)[1];
  if (((undefined === undefined))) goto L_366;
  const _it3 = undefined;
  <done(_it3)>;
  a = <value(_it3)>;
  <done(_it3)>;
  g = <value(_it3)>;
  <done(_it3)>;
  p = <value(_it3)>;
  goto L_3f7;
  // [栈深重同步 4 -> 1]
  _it3;
  if (!(this.isLineBelow)) goto L_3bf;
  goto L_3c3;
  // [栈深重同步 5 -> 4]
  if (!(this.isLineAbove)) goto L_3eb;
  goto L_3ee;
  // [栈深重同步 6 -> 5]
  goto L_352;
  // [栈深重同步 1 -> 0]
  s.place(a, 0);
  r.place(g, v);
  i.place(p, l);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/munderover
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=223B file=math_jax/src/mathjax_src/output/svg/Wrappers/munderover
// locals: i, r, SvgMunderover, <class_fields_init>
// closure: t, e, s
function {
  let r;
  r = t.CommonMunderoverMixin(e.SvgMsubsup);
  let SvgMunderover;
  let <class_fields_init>;
  class SvgMunderover extends r { ... }
  <proto:SvgMunderover>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMunderover>;
  SvgMunderover = function <atom:0>;
  // close_loc <class_fields_init>
  i = function <atom:0>;
  function <atom:0>.kind = s.MmlMunderover.prototype.kind;
  return i;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=162B file=math_jax/src/mathjax_src/output/svg/Wrappers/munderover
// args: require, module, exports
// locals: e, t, s
function {
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMunder = undefined;
  exports.SvgMover = undefined;
  exports.SvgMunderover = undefined;
  e = require("./msubsup");
  t = require("../../common/Wrappers/munderover");
  s = require("../../../core/MmlTree/MmlNodes/munderover");
  exports.SvgMunder = function <atom:0>();
  exports.SvgMover = function <atom:0>();
  exports.SvgMunderover = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/munderover
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
