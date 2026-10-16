// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mathchoice
function {
  return "MathChoice";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mathchoice
function {
  return 4;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mathchoice
function {
  return true;
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=0 bc=339B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mathchoice
// args: t, e, r, s
// locals: a, i, this
function {
  this = this;
  let i;
  let a;
  if (!(e)) goto L_e;
  goto L_65;
  // [栈深重同步 1 -> 0]
  a = (Math.max(0, Math.min(r, 2)) + 1);
  if ((this.childNodes[a])) goto L_db;
  i = this.factory.create("mrow");
  this.parent.replaceChild(i, this);
  i.setInheritedAttributes(t, e, r, s);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mathchoice
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

// fn <atom:0>  args=3 vars=7 closure=0 cpool=5 bc=272B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mathchoice
// args: require, module, exports
// locals: t, MathChoice, <class_fields_init>, MathChoice#1
function {
  let MathChoice#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MathChoice = undefined;
  t = require("../MmlNode");
  let MathChoice;
  let <class_fields_init>;
  class MathChoice extends t.AbstractMmlBaseNode { ... }
  <proto:MathChoice>.kind = function <atom:0>;
  <proto:MathChoice>.arity = function <atom:0>;
  <proto:MathChoice>.notParent = function <atom:0>;
  <proto:MathChoice>.setInheritedAttributes = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MathChoice>;
  MathChoice = function <atom:0>;
  // close_loc <class_fields_init>
  MathChoice#1 = function <atom:0>;
  exports.MathChoice = MathChoice#1;
  null;
  t.AbstractMmlBaseNode.defaults;
  MathChoice#1.defaults = {};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mathchoice
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
