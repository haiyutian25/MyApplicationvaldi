// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=130B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mspace
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
  this.texclass = t.TEXCLASS.NONE;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mspace
// args: t
function {
  return t;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mspace
function {
  return "mspace";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mspace
function {
  return 0;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=117B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mspace
// locals: this
function {
  this = this;
  if (!(!this.attributes.hasExplicit("linebreak"))) goto L_74;
  return this.canBreak;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=142B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mspace
// locals: t, this
function {
  this = this;
  let t;
  t = this.attributes.get("linebreak");
  if (!(this.canBreak)) goto L_8d;
  if ((("newline" === t))) goto L_8d;
  return ("indentingnewline" === t);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=277B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mspace
// locals: this
// closure: MmlMspace
function {
  this = this;
  if (!(!this.attributes.hasOneOf(MmlMspace.NONSPACELIKE))) goto L_114;
  return ("-" !== String(this.attributes.get("width")).trim().charAt(0));
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=7 bc=437B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mspace
// args: require, module, exports
// locals: t, MmlMspace, <class_fields_init>, MmlMspace#1
function {
  let MmlMspace#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMspace = undefined;
  t = require("../MmlNode");
  let MmlMspace;
  let <class_fields_init>;
  class MmlMspace extends t.AbstractMmlTokenNode { ... }
  <proto:MmlMspace>.setTeXclass = function <atom:0>;
  <proto:MmlMspace>.kind = function <atom:0>;
  <proto:MmlMspace>.arity = function <atom:0>;
  <proto:MmlMspace>.isSpacelike = function <atom:0>;
  <proto:MmlMspace>.hasNewline = function <atom:0>;
  <proto:MmlMspace>.canBreak = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMspace>;
  MmlMspace = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc MmlMspace
  MmlMspace#1 = function <atom:0>;
  exports.MmlMspace = MmlMspace#1;
  MmlMspace#1.NONSPACELIKE = ["height", "depth", "style", "mathbackground", "background"];
  null;
  t.AbstractMmlTokenNode.defaults;
  MmlMspace#1.defaults = {width: "0em", height: "0ex", depth: "0ex", linebreak: "auto", indentshift: "auto", indentalign: "auto", indenttarget: "", indentalignfirst: "indentalign", indentshiftfirst: "indentshift", indentalignlast: "indentalign", indentshiftlast: "indentshift"};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mspace
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
