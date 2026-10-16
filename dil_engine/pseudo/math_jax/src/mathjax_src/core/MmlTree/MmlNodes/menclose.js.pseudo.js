// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=130B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/menclose
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, e
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
  this.texclass = e.TEXCLASS.ORD;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/menclose
function {
  return "menclose";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/menclose
function {
  return -1;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/menclose
function {
  return true;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=152B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/menclose
// args: e
// locals: this
function {
  this = this;
  e = this.childNodes[0].setTeXclass(e);
  this.updateTeXclass(this.childNodes[0]);
  return e;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=5 bc=282B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/menclose
// args: require, module, exports
// locals: e, MmlMenclose, <class_fields_init>, MmlMenclose#1
function {
  let MmlMenclose#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMenclose = undefined;
  e = require("../MmlNode");
  let MmlMenclose;
  let <class_fields_init>;
  class MmlMenclose extends e.AbstractMmlNode { ... }
  <proto:MmlMenclose>.kind = function <atom:0>;
  <proto:MmlMenclose>.arity = function <atom:0>;
  <proto:MmlMenclose>.linebreakContainer = function <atom:0>;
  <proto:MmlMenclose>.setTeXclass = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMenclose>;
  MmlMenclose = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMenclose#1 = function <atom:0>;
  exports.MmlMenclose = MmlMenclose#1;
  null;
  e.AbstractMmlNode.defaults;
  MmlMenclose#1.defaults = {notation: "longdiv"};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/menclose
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
