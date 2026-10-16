// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mpadded
function {
  return "mpadded";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mpadded
function {
  return true;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=260B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mpadded
// args: t
// locals: this, <home_object>
// closure: e
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(this.getProperty("vbox"))) goto L_f6;
  this.getPrevClass(t);
  this.texClass = e.TEXCLASS.ORD;
  this.childNodes[0].setTeXclass(null);
  return this;
  return super["setTeXclass"].call(this, t);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mpadded
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

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=294B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mpadded
// args: require, module, exports
// locals: e, MmlMpadded, <class_fields_init>, MmlMpadded#1
function {
  let MmlMpadded#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMpadded = undefined;
  e = require("../MmlNode");
  let MmlMpadded;
  let <class_fields_init>;
  class MmlMpadded extends e.AbstractMmlLayoutNode { ... }
  <proto:MmlMpadded>.kind = function <atom:0>;
  <proto:MmlMpadded>.linebreakContainer = function <atom:0>;
  <proto:MmlMpadded>.setTeXclass = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMpadded>;
  MmlMpadded = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMpadded#1 = function <atom:0>;
  exports.MmlMpadded = MmlMpadded#1;
  null;
  e.AbstractMmlLayoutNode.defaults;
  MmlMpadded#1.defaults = {width: "", height: "", depth: "", lspace: 0, voffset: 0};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mpadded
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
