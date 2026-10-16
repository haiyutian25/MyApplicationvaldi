// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtd
function {
  return "mtd";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtd
function {
  return -1;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtd
function {
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtd
function {
  return "columnalign";
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=217B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtd
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if ((!this.parent)) goto L_77;
  if (!(this.parent.isKind("mtr"))) goto L_88;
  goto L_d8;
  // [栈深重同步 1 -> 0]
  this.mError((this.kind + " can only be a child of an mtr or mlabeledtr"), e, true);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=117B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtd
// args: e
// locals: this
function {
  this = this;
  this.getPrevClass(e);
  this.childNodes[0].setTeXclass(null);
  return this;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtd
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

// fn <atom:0>  args=3 vars=8 closure=0 cpool=7 bc=445B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtd
// args: require, module, exports
// locals: e, t, MmlMtd, <class_fields_init>, MmlMtd#1
function {
  let MmlMtd#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMtd = undefined;
  e = require("../MmlNode");
  t = require("../Attributes");
  let MmlMtd;
  let <class_fields_init>;
  class MmlMtd extends e.AbstractMmlBaseNode { ... }
  <proto:MmlMtd>.kind = function <atom:0>;
  <proto:MmlMtd>.arity = function <atom:0>;
  <proto:MmlMtd>.linebreakContainer = function <atom:0>;
  <proto:MmlMtd>.linebreakAlign = function <atom:0>;
  <proto:MmlMtd>.verifyChildren = function <atom:0>;
  <proto:MmlMtd>.setTeXclass = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMtd>;
  MmlMtd = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMtd#1 = function <atom:0>;
  exports.MmlMtd = MmlMtd#1;
  null;
  e.AbstractMmlBaseNode.defaults;
  MmlMtd#1.defaults = {rowspan: 1, columnspan: 1, rowalign: t.INHERIT, columnalign: t.INHERIT, groupalign: t.INHERIT, data-vertical-align: "top"};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtd
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
