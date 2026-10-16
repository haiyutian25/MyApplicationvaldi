// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/math
function {
  return "math";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/math
function {
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/math
function {
  return "";
}

// fn <atom:0>  args=4 vars=6 closure=0 cpool=0 bc=800B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/math
// args: t, e, i, s
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(("display" === this.attributes.get("mode")))) goto L_aa;
  this.attributes.setInherited("display", "block");
  t = this.addInheritedAttributes(t, this.attributes.getAllAttributes());
  if ((!!this.attributes.get("displaystyle"))) goto L_20d;
  if (!(!this.attributes.get("displaystyle"))) goto L_20d;
  e = ("block" === this.attributes.get("display"));
  this.attributes.setInherited("displaystyle", e);
  if ((this.attributes.get("scriptlevel"))) goto L_30e;
  i = this.constructor.defaults.scriptlevel;
  super["setChildInheritedAttributes"].call(this, t, e, i, s);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=115B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/math
// args: t
// locals: t#1, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_10;
  t;
  t = null;
  t#1 = null;
  super["verifyTree"].call(this, t);
  if (!(this.parent)) goto L_72;
  this.mError("Improper nesting of math tags", t, true);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/math
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

// fn <atom:0>  args=3 vars=7 closure=0 cpool=6 bc=556B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/math
// args: require, module, exports
// locals: t, MmlMath, <class_fields_init>, MmlMath#1
function {
  let MmlMath#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMath = undefined;
  t = require("../MmlNode");
  let MmlMath;
  let <class_fields_init>;
  class MmlMath extends t.AbstractMmlLayoutNode { ... }
  <proto:MmlMath>.kind = function <atom:0>;
  <proto:MmlMath>.linebreakContainer = function <atom:0>;
  <proto:MmlMath>.linebreakAlign = function <atom:0>;
  <proto:MmlMath>.setChildInheritedAttributes = function <atom:0>;
  <proto:MmlMath>.verifyTree = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMath>;
  MmlMath = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMath#1 = function <atom:0>;
  exports.MmlMath = MmlMath#1;
  null;
  t.AbstractMmlLayoutNode.defaults;
  MmlMath#1.defaults = {mathvariant: "normal", mathsize: "normal", mathcolor: "", mathbackground: "transparent", dir: "ltr", scriptlevel: 0, displaystyle: false, display: "inline", maxwidth: "", overflow: "linebreak", altimg: "", altimg-width: "", altimg-height: "", altimg-valign: "", alttext: "", cdgroup: "", scriptsizemultiplier: (1 / Math.sqrt(2)), scriptminsize: ".4em", infixlinebreakstyle: "before", lineleading: "100%", linebreakmultchar: "⁢", indentshift: "auto", indentalign: "auto", indenttarget: "", indentalignfirst: "indentalign", indentshiftfirst: "indentshift", indentalignlast: "indentalign", indentshiftlast: "indentshift"};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/math
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
