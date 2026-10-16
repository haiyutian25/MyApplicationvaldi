// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=87B file=math_jax/src/mathjax_src/core/Tree/WrapperFactory
// args: r, t
// locals: this
function {
  this = this;
  t = ...1;
  // append([r.kind, r], 2, t)
  t;
  return this.create.apply(this, [r.kind, r]);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/Tree/WrapperFactory
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

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=161B file=math_jax/src/mathjax_src/core/Tree/WrapperFactory
// args: require, module, exports
// locals: r, AbstractWrapperFactory, <class_fields_init>, AbstractWrapperFactory#1
function {
  let AbstractWrapperFactory#1;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AbstractWrapperFactory = undefined;
  r = require("./Factory");
  let AbstractWrapperFactory;
  let <class_fields_init>;
  class AbstractWrapperFactory extends r.AbstractFactory { ... }
  <proto:AbstractWrapperFactory>.wrap = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbstractWrapperFactory>;
  AbstractWrapperFactory = function <atom:0>;
  // close_loc <class_fields_init>
  AbstractWrapperFactory#1 = function <atom:0>;
  exports.AbstractWrapperFactory = AbstractWrapperFactory#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/Tree/WrapperFactory
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
