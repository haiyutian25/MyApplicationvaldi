// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=245B file=math_jax/src/mathjax_src/output/common/Wrappers/math
// args: t
// locals: this
function {
  this = this;
  if (!(this.parent)) goto L_6d;
  return this.getBBox().w;
  return (this.metrics.containerWidth / this.jax.pxPerEm);
}

// fn <atom:0>  args=2 vars=8 closure=0 cpool=0 bc=586B file=math_jax/src/mathjax_src/output/common/Wrappers/math
// args: t, e
// locals: t#1, e#1, i, e#2, this, <home_object>
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
  let i;
  super["computeBBox"].call(this, t, e);
  i = this.node.attributes;
  if (!(!this.parent)) goto L_249;
  if (!(this.jax.math.display)) goto L_249;
  if (!(("linebreak" === i.get("overflow")))) goto L_249;
  let e#2;
  e#2 = this.containerWidth;
  if (!((t.w > e#2))) goto L_1d9;
  this.childNodes[0].breakToWidth(e#2);
  t.updateFrom(this.childNodes[0].getBBox());
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/math
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

// fn t  args=1 vars=3 closure=0 cpool=3 bc=39B file=math_jax/src/mathjax_src/output/common/Wrappers/math
// args: t
// locals: CommonMathMixin, <class_fields_init>
function {
  let CommonMathMixin;
  let <class_fields_init>;
  class CommonMathMixin extends t { ... }
  <proto:CommonMathMixin>.getWrapWidth = function <atom:0>;
  <proto:CommonMathMixin>.computeBBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMathMixin>;
  CommonMathMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=math_jax/src/mathjax_src/output/common/Wrappers/math
// args: require, module, exports
// locals: t
function {
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMathMixin = undefined;
  exports.CommonMathMixin = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/math
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
