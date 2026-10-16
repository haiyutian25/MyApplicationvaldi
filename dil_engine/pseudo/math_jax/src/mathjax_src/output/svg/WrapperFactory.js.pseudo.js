// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/WrapperFactory
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

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=213B file=math_jax/src/mathjax_src/output/svg/WrapperFactory
// args: require, module, exports
// locals: r, e, SvgWrapperFactory, <class_fields_init>, SvgWrapperFactory#1
function {
  let SvgWrapperFactory#1;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgWrapperFactory = undefined;
  r = require("../common/WrapperFactory");
  e = require("./Wrappers");
  let SvgWrapperFactory;
  let <class_fields_init>;
  class SvgWrapperFactory extends r.CommonWrapperFactory { ... }
  <class_fields_init> = undefined;
  <proto:SvgWrapperFactory>;
  SvgWrapperFactory = function <atom:0>;
  // close_loc <class_fields_init>
  SvgWrapperFactory#1 = function <atom:0>;
  exports.SvgWrapperFactory = SvgWrapperFactory#1;
  SvgWrapperFactory#1.defaultNodes = e.SvgWrappers;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/WrapperFactory
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
