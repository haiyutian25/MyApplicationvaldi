// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=420B file=math_jax/src/mathjax_src/core/MathList
// args: t, s
function {
  if (((t.start.i < s.start.i))) goto L_1a3;
  if (!((t.start.i === s.start.i))) goto L_1a3;
  return (t.start.n < s.start.n);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MathList
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

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=161B file=math_jax/src/mathjax_src/core/MathList
// args: require, module, exports
// locals: t, AbstractMathList, <class_fields_init>, AbstractMathList#1
function {
  let AbstractMathList#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AbstractMathList = undefined;
  t = require("../util/LinkedList");
  let AbstractMathList;
  let <class_fields_init>;
  class AbstractMathList extends t.LinkedList { ... }
  <proto:AbstractMathList>.isBefore = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbstractMathList>;
  AbstractMathList = function <atom:0>;
  // close_loc <class_fields_init>
  AbstractMathList#1 = function <atom:0>;
  exports.AbstractMathList = AbstractMathList#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MathList
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
