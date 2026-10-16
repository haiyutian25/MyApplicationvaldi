// fn <atom:0>  args=3 vars=9 closure=1 cpool=0 bc=106B file=math_jax/src/mathjax_src/output/common/Wrappers/mglyph
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
  this.getParameters();
  return this;
}

// fn <atom:0>  args=0 vars=8 closure=0 cpool=1 bc=846B file=math_jax/src/mathjax_src/output/common/Wrappers/mglyph
// locals: t, e, i, h, s, t#1, e#1, this
function {
  this = this;
  let s;
  let h;
  let i;
  let e;
  let t;
  if (((undefined === undefined))) goto L_cf;
  t = <to_object>(undefined).width;
  e = <to_object>(undefined).height;
  i = <to_object>(undefined).valign;
  h = <to_object>(undefined).src;
  s = <to_object>(undefined).index;
  <to_object>(undefined);
  goto L_154;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  if (!(h)) goto L_21b;
  if (!(("auto" === t))) goto L_16c;
  goto L_195;
  // [栈深重同步 2 -> 1]
  this.width = this.length2em(t);
  if (!(("auto" === e))) goto L_1ae;
  goto L_1d7;
  // [栈深重同步 2 -> 1]
  this.height = this.length2em(e);
  if ((i)) goto L_20e;
  this.valign = this.length2em("0");
  return;
  let e#1;
  let t#1;
  t#1 = String.fromCodePoint(parseInt(s));
  e#1 = this.node.factory;
  this.charWrapper = this.wrap(e#1.create("text").setText(t#1));
  this.charWrapper.parent = this;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=336B file=math_jax/src/mathjax_src/output/common/Wrappers/mglyph
// args: t, e
// locals: t#1, e#1, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_13;
  e;
  e = false;
  e#1 = false;
  if (!(this.charWrapper)) goto L_a6;
  goto L_14f;
  // [栈深重同步 1 -> 0]
  t.w = this.width;
  t.h = (this.height + this.valign);
  t.d = -this.valign;
  -this.valign;
  return;
}

// fn t  args=1 vars=3 closure=0 cpool=3 bc=39B file=math_jax/src/mathjax_src/output/common/Wrappers/mglyph
// args: t
// locals: CommonMglyphMixin, <class_fields_init>
function {
  let CommonMglyphMixin;
  let <class_fields_init>;
  class CommonMglyphMixin extends t { ... }
  <proto:CommonMglyphMixin>.getParameters = function <atom:0>;
  <proto:CommonMglyphMixin>.computeBBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMglyphMixin>;
  CommonMglyphMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=math_jax/src/mathjax_src/output/common/Wrappers/mglyph
// args: require, module, exports
// locals: t
function {
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMglyphMixin = undefined;
  exports.CommonMglyphMixin = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mglyph
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
