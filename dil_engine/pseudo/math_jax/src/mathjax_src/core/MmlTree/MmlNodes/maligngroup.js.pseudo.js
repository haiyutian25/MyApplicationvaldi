// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maligngroup
function {
  return "maligngroup";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maligngroup
function {
  return true;
}

// fn <atom:0>  args=4 vars=6 closure=0 cpool=0 bc=131B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maligngroup
// args: t, e, r, i
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  t = this.addInheritedAttributes(t, this.attributes.getAllAttributes());
  super["setChildInheritedAttributes"].call(this, t, e, r, i);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maligngroup
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

// fn <atom:0>  args=3 vars=8 closure=0 cpool=4 bc=317B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maligngroup
// args: require, module, exports
// locals: t, e, MmlMaligngroup, <class_fields_init>, MmlMaligngroup#1
function {
  let MmlMaligngroup#1;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMaligngroup = undefined;
  t = require("../MmlNode");
  e = require("../Attributes");
  let MmlMaligngroup;
  let <class_fields_init>;
  class MmlMaligngroup extends t.AbstractMmlLayoutNode { ... }
  <proto:MmlMaligngroup>.kind = function <atom:0>;
  <proto:MmlMaligngroup>.isSpacelike = function <atom:0>;
  <proto:MmlMaligngroup>.setChildInheritedAttributes = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMaligngroup>;
  MmlMaligngroup = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMaligngroup#1 = function <atom:0>;
  exports.MmlMaligngroup = MmlMaligngroup#1;
  null;
  t.AbstractMmlLayoutNode.defaults;
  MmlMaligngroup#1.defaults = {groupalign: e.INHERIT};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maligngroup
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
