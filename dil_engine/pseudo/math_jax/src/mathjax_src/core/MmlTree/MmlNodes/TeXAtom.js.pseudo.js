// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/TeXAtom
function {
  return "TeXAtom";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/TeXAtom
function {
  return -1;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/TeXAtom
function {
  return true;
}

// fn <atom:0>  args=3 vars=6 closure=2 cpool=0 bc=204B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/TeXAtom
// args: t, s, r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, e
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(t, s, r);
  if (!(<class_fields_init>)) goto L_24;
  <class_fields_init>.call(this);
  new new.target(t, s, r);
  this.texclass = e.TEXCLASS.ORD;
  this.setProperty("texClass", this.texClass);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=114B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/TeXAtom
// args: e
// locals: this
function {
  this = this;
  this.childNodes[0].setTeXclass(null);
  return this.adjustTeXclass(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/TeXAtom
// args: e
function {
  return e;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=6 bc=439B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/TeXAtom
// args: require, module, exports
// locals: e, t, TeXAtom, <class_fields_init>, TeXAtom#1
function {
  let TeXAtom#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TeXAtom = undefined;
  e = require("../MmlNode");
  t = require("./mo");
  let TeXAtom;
  let <class_fields_init>;
  class TeXAtom extends e.AbstractMmlBaseNode { ... }
  <proto:TeXAtom>.kind = function <atom:0>;
  <proto:TeXAtom>.arity = function <atom:0>;
  <proto:TeXAtom>.notParent = function <atom:0>;
  <proto:TeXAtom>.setTeXclass = function <atom:0>;
  <proto:TeXAtom>.adjustTeXclass = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TeXAtom>;
  TeXAtom = function <atom:0>;
  // close_loc <class_fields_init>
  TeXAtom#1 = function <atom:0>;
  exports.TeXAtom = TeXAtom#1;
  null;
  e.AbstractMmlBaseNode.defaults;
  TeXAtom#1.defaults = {};
  TeXAtom#1.prototype.adjustTeXclass = t.MmlMo.prototype.adjustTeXclass;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/TeXAtom
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
