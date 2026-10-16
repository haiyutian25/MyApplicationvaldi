// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/MmlTree/MmlFactory
// locals: this
function {
  this = this;
  return this.node;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlFactory
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

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=221B file=math_jax/src/mathjax_src/core/MmlTree/MmlFactory
// args: require, module, exports
// locals: e, t, MmlFactory, <class_fields_init>, MmlFactory#1
function {
  let MmlFactory#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlFactory = undefined;
  e = require("../Tree/NodeFactory");
  t = require("./MML");
  let MmlFactory;
  let <class_fields_init>;
  class MmlFactory extends e.AbstractNodeFactory { ... }
  <proto:MmlFactory>.MML = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlFactory>;
  MmlFactory = function <atom:0>;
  // close_loc <class_fields_init>
  MmlFactory#1 = function <atom:0>;
  exports.MmlFactory = MmlFactory#1;
  MmlFactory#1.defaultNodes = t.MML;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlFactory
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
