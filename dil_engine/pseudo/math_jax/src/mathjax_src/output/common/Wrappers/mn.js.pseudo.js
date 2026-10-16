// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=278B file=math_jax/src/mathjax_src/output/common/Wrappers/mn
// args: n
// locals: e, t, this
function {
  this = this;
  if (!(n.length)) goto L_114;
  let e;
  e = this.font.getRemappedChar("mn", n[0]);
  if (!(e)) goto L_114;
  let t;
  t = this.unicodeChars(e, this.variant);
  if (!((1 === t.length))) goto L_c5;
  n[0] = t[0];
  goto L_113;
  // [栈深重同步 1 -> 0]
  n = t.concat(n.slice(1));
  t.concat(n.slice(1));
  return n;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/mn
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

// fn n  args=1 vars=3 closure=0 cpool=2 bc=31B file=math_jax/src/mathjax_src/output/common/Wrappers/mn
// args: n
// locals: CommonMnMixin, <class_fields_init>
function {
  let CommonMnMixin;
  let <class_fields_init>;
  class CommonMnMixin extends n { ... }
  <proto:CommonMnMixin>.remapChars = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMnMixin>;
  CommonMnMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=math_jax/src/mathjax_src/output/common/Wrappers/mn
// args: require, module, exports
// locals: n
function {
  n = function n;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMnMixin = undefined;
  exports.CommonMnMixin = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mn
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
