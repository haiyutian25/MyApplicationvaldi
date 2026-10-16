// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=105B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// locals: this
function {
  this = this;
  return this.childNodes[this.node.under];
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=90B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// args: t
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  t = ...0;
  // append([], 0, t)
  t;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2c;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.stretchChildren();
  return this;
}

// fn <atom:0>  args=2 vars=12 closure=0 cpool=0 bc=840B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// args: t, e
// locals: t#1, e#1, i, s, o, r, h, n, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_18;
  e;
  e = false;
  e#1 = false;
  let n;
  let h;
  let r;
  let o;
  let s;
  let i;
  if (!(this.hasMovableLimits())) goto L_65;
  super["computeBBox"].call(this, t, e);
  return;
  t.empty();
  i = this.baseChild.getOuterBBox();
  s = this.scriptChild.getOuterBBox();
  o = this.getUnderKV(i, s)[1];
  if (!(this.isLineBelow)) goto L_173;
  goto L_1be;
  // [栈深重同步 1 -> 0]
  r = this.getDelta(this.scriptChild, true);
  if (((undefined === undefined))) goto L_1d3;
  const _it1 = undefined;
  <done(_it1)>;
  h = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_20d;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_1c5;
  // [栈深重同步 1 -> 0]
  t.combine(i, h, 0);
  t.combine(s, n, o);
  t.d = (t.d + this.font.params.big_op_spacing5);
  t.clean();
  this.setChildPWidths(e);
  return;
}

// fn t  args=1 vars=3 closure=0 cpool=3 bc=39B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// args: t
// locals: CommonMunderMixin, <class_fields_init>
function {
  let CommonMunderMixin;
  let <class_fields_init>;
  class CommonMunderMixin extends t { ... }
  <proto:CommonMunderMixin>.scriptChild = function <atom:0>;
  <proto:CommonMunderMixin>.computeBBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMunderMixin>;
  CommonMunderMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=105B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// locals: this
function {
  this = this;
  return this.childNodes[this.node.over];
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=90B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// args: t
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  t = ...0;
  // append([], 0, t)
  t;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2c;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.stretchChildren();
  return this;
}

// fn <atom:0>  args=1 vars=9 closure=0 cpool=0 bc=1120B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// args: t
// locals: e, i, s, o, r, h, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let h;
  let r;
  let o;
  let s;
  let i;
  let e;
  if (!(this.hasMovableLimits())) goto L_52;
  super["computeBBox"].call(this, t);
  return;
  t.empty();
  e = this.baseChild.getOuterBBox();
  i = this.scriptChild.getOuterBBox();
  if (!(this.node.attributes.get("accent"))) goto L_25f;
  e.h = Math.max(e.h, (this.font.params.x_height * this.baseScale));
  Math.max(e.h, (this.font.params.x_height * this.baseScale));
  s = this.getOverKU(e, i)[1];
  if (!(this.isLineAbove)) goto L_2b7;
  goto L_300;
  // [栈深重同步 1 -> 0]
  o = this.getDelta(this.scriptChild);
  if (((undefined === undefined))) goto L_314;
  const _it1 = undefined;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  h = <value(_it1)>;
  goto L_34d;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_306;
  // [栈深重同步 1 -> 0]
  t.combine(e, r, 0);
  t.combine(i, h, s);
  t.h = (t.h + this.font.params.big_op_spacing5);
  t.clean();
  return;
}

// fn e  args=1 vars=3 closure=0 cpool=3 bc=39B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// args: t
// locals: CommonMoverMixin, <class_fields_init>
function {
  let CommonMoverMixin;
  let <class_fields_init>;
  class CommonMoverMixin extends t { ... }
  <proto:CommonMoverMixin>.scriptChild = function <atom:0>;
  <proto:CommonMoverMixin>.computeBBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMoverMixin>;
  CommonMoverMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=105B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// locals: this
function {
  this = this;
  return this.childNodes[this.node.under];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=105B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// locals: this
function {
  this = this;
  return this.childNodes[this.node.over];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// locals: this
function {
  this = this;
  return this.underChild;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// locals: this
function {
  this = this;
  return this.overChild;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=90B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// args: t
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  t = ...0;
  // append([], 0, t)
  t;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2c;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.stretchChildren();
  return this;
}

// fn <atom:0>  args=1 vars=14 closure=0 cpool=0 bc=1486B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// args: t
// locals: e, i, s, o, r, h, n, d, c, u, l, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let l;
  let u;
  let c;
  let d;
  let n;
  let h;
  let r;
  let o;
  let s;
  let i;
  let e;
  if (!(this.hasMovableLimits())) goto L_61;
  super["computeBBox"].call(this, t);
  return;
  t.empty();
  e = this.overChild.getOuterBBox();
  i = this.baseChild.getOuterBBox();
  s = this.underChild.getOuterBBox();
  if (!(this.node.attributes.get("accent"))) goto L_2b6;
  i.h = Math.max(i.h, (this.font.params.x_height * this.baseScale));
  Math.max(i.h, (this.font.params.x_height * this.baseScale));
  o = this.getOverKU(i, e)[1];
  r = this.getUnderKV(i, s)[1];
  h = this.getDelta(this.overChild);
  n = this.getDelta(this.underChild, true);
  if (((undefined === undefined))) goto L_3c7;
  const _it1 = undefined;
  <done(_it1)>;
  d = <value(_it1)>;
  <done(_it1)>;
  c = <value(_it1)>;
  <done(_it1)>;
  u = <value(_it1)>;
  goto L_458;
  // [栈深重同步 4 -> 1]
  _it1;
  if (!(this.isLineBelow)) goto L_420;
  goto L_424;
  // [栈深重同步 5 -> 4]
  if (!(this.isLineAbove)) goto L_44c;
  goto L_44f;
  // [栈深重同步 6 -> 5]
  goto L_3b3;
  // [栈深重同步 1 -> 0]
  t.combine(i, d, 0);
  t.combine(e, u, o);
  t.combine(s, c, r);
  l = this.font.params.big_op_spacing5;
  t.h = (t.h + l);
  t.d = (t.d + l);
  t.clean();
  return;
}

// fn i  args=1 vars=3 closure=0 cpool=6 bc=63B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// args: t
// locals: CommonMunderoverMixin, <class_fields_init>
function {
  let CommonMunderoverMixin;
  let <class_fields_init>;
  class CommonMunderoverMixin extends t { ... }
  <proto:CommonMunderoverMixin>.underChild = function <atom:0>;
  <proto:CommonMunderoverMixin>.overChild = function <atom:0>;
  <proto:CommonMunderoverMixin>.subChild = function <atom:0>;
  <proto:CommonMunderoverMixin>.supChild = function <atom:0>;
  <proto:CommonMunderoverMixin>.computeBBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMunderoverMixin>;
  CommonMunderoverMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=132B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// args: require, module, exports
// locals: t, e, i
function {
  t = function t;
  e = function e;
  i = function i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMunderMixin = undefined;
  exports.CommonMoverMixin = undefined;
  exports.CommonMunderoverMixin = undefined;
  exports.CommonMunderMixin = t;
  exports.CommonMoverMixin = e;
  exports.CommonMunderoverMixin = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/munderover
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
