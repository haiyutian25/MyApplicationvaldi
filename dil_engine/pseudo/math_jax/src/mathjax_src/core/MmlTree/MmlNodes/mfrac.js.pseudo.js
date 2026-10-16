// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfrac
function {
  return "mfrac";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfrac
function {
  return 2;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfrac
function {
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfrac
function {
  return "";
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=131B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfrac
// args: t
// locals: e, this
function {
  this = this;
  this.getPrevClass(t);
  let e;
  for (const e of this.childNodes) {
    e.setTeXclass(null);
  }
  return this;
}

// fn <atom:0>  args=4 vars=9 closure=0 cpool=4 bc=543B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfrac
// args: t, e, i, n
// locals: s, r, d, l, this
function {
  this = this;
  let l;
  let d;
  let r;
  let s;
  if ((!e)) goto L_18;
  if (!((i > 0))) goto L_1f;
  i = <i_new>;
  (i++);
  s = this.attributes.get("numalign");
  r = this.attributes.get("denomalign");
  null;
  t;
  d = this.addInheritedAttributes({}, {numalign: s, indentshift: "0", indentalignfirst: s, indentshiftfirst: "0", indentalignlast: "indentalign", indentshiftlast: "indentshift"});
  null;
  t;
  l = this.addInheritedAttributes({}, {denalign: r, indentshift: "0", indentalignfirst: r, indentshiftfirst: "0", indentalignlast: "indentalign", indentshiftlast: "indentshift"});
  this.childNodes[0].setInheritedAttributes(d, false, i, n);
  this.childNodes[1].setInheritedAttributes(l, false, i, true);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfrac
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

// fn <atom:0>  args=3 vars=7 closure=0 cpool=7 bc=325B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfrac
// args: require, module, exports
// locals: t, MmlMfrac, <class_fields_init>, MmlMfrac#1
function {
  let MmlMfrac#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMfrac = undefined;
  t = require("../MmlNode");
  let MmlMfrac;
  let <class_fields_init>;
  class MmlMfrac extends t.AbstractMmlBaseNode { ... }
  <proto:MmlMfrac>.kind = function <atom:0>;
  <proto:MmlMfrac>.arity = function <atom:0>;
  <proto:MmlMfrac>.linebreakContainer = function <atom:0>;
  <proto:MmlMfrac>.linebreakAlign = function <atom:0>;
  <proto:MmlMfrac>.setTeXclass = function <atom:0>;
  <proto:MmlMfrac>.setChildInheritedAttributes = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMfrac>;
  MmlMfrac = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMfrac#1 = function <atom:0>;
  exports.MmlMfrac = MmlMfrac#1;
  null;
  t.AbstractMmlBaseNode.defaults;
  MmlMfrac#1.defaults = {linethickness: "medium", numalign: "center", denomalign: "center", bevelled: false};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mfrac
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
