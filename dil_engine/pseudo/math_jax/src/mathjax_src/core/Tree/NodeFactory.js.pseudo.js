// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/core/Tree/NodeFactory
// args: t, e, r
// locals: t#1, e#1, r#1, this
function {
  this = this;
  let r#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_15;
  e;
  e = {};
  e#1 = {};
  if (!((r === undefined))) goto L_20;
  r;
  r = [];
  r#1 = [];
  return this.node[t](e, r);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/Tree/NodeFactory
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

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=161B file=math_jax/src/mathjax_src/core/Tree/NodeFactory
// args: require, module, exports
// locals: t, AbstractNodeFactory, <class_fields_init>, AbstractNodeFactory#1
function {
  let AbstractNodeFactory#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AbstractNodeFactory = undefined;
  t = require("./Factory");
  let AbstractNodeFactory;
  let <class_fields_init>;
  class AbstractNodeFactory extends t.AbstractFactory { ... }
  <proto:AbstractNodeFactory>.create = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbstractNodeFactory>;
  AbstractNodeFactory = function <atom:0>;
  // close_loc <class_fields_init>
  AbstractNodeFactory#1 = function <atom:0>;
  exports.AbstractNodeFactory = AbstractNodeFactory#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/Tree/NodeFactory
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
