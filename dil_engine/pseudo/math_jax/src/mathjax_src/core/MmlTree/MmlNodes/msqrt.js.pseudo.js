// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=130B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msqrt
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, t
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
  this.texclass = t.TEXCLASS.ORD;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msqrt
function {
  return "msqrt";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msqrt
function {
  return -1;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msqrt
function {
  return true;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=117B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msqrt
// args: t
// locals: this
function {
  this = this;
  this.getPrevClass(t);
  this.childNodes[0].setTeXclass(null);
  return this;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=80B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msqrt
// args: t, e, s, r
// locals: this
function {
  this = this;
  this.childNodes[0].setInheritedAttributes(t, e, s, true);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=6 bc=290B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msqrt
// args: require, module, exports
// locals: t, MmlMsqrt, <class_fields_init>, MmlMsqrt#1
function {
  let MmlMsqrt#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMsqrt = undefined;
  t = require("../MmlNode");
  let MmlMsqrt;
  let <class_fields_init>;
  class MmlMsqrt extends t.AbstractMmlNode { ... }
  <proto:MmlMsqrt>.kind = function <atom:0>;
  <proto:MmlMsqrt>.arity = function <atom:0>;
  <proto:MmlMsqrt>.linebreakContainer = function <atom:0>;
  <proto:MmlMsqrt>.setTeXclass = function <atom:0>;
  <proto:MmlMsqrt>.setChildInheritedAttributes = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMsqrt>;
  MmlMsqrt = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMsqrt#1 = function <atom:0>;
  exports.MmlMsqrt = MmlMsqrt#1;
  null;
  t.AbstractMmlNode.defaults;
  MmlMsqrt#1.defaults = {data-vertical-align: "bottom"};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msqrt
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
