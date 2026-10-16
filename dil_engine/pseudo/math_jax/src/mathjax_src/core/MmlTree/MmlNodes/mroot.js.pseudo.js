// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=130B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mroot
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mroot
function {
  return "mroot";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mroot
function {
  return 2;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mroot
function {
  return true;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=191B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mroot
// args: t
// locals: this
function {
  this = this;
  this.getPrevClass(t);
  this.childNodes[0].setTeXclass(null);
  this.childNodes[1].setTeXclass(null);
  return this;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=160B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mroot
// args: t, e, s, r
// locals: this
function {
  this = this;
  this.childNodes[0].setInheritedAttributes(t, e, s, true);
  this.childNodes[1].setInheritedAttributes(t, false, (s + 2), r);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=6 bc=290B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mroot
// args: require, module, exports
// locals: t, MmlMroot, <class_fields_init>, MmlMroot#1
function {
  let MmlMroot#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMroot = undefined;
  t = require("../MmlNode");
  let MmlMroot;
  let <class_fields_init>;
  class MmlMroot extends t.AbstractMmlNode { ... }
  <proto:MmlMroot>.kind = function <atom:0>;
  <proto:MmlMroot>.arity = function <atom:0>;
  <proto:MmlMroot>.linebreakContainer = function <atom:0>;
  <proto:MmlMroot>.setTeXclass = function <atom:0>;
  <proto:MmlMroot>.setChildInheritedAttributes = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMroot>;
  MmlMroot = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMroot#1 = function <atom:0>;
  exports.MmlMroot = MmlMroot#1;
  null;
  t.AbstractMmlNode.defaults;
  MmlMroot#1.defaults = {data-vertical-align: "bottom"};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mroot
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
