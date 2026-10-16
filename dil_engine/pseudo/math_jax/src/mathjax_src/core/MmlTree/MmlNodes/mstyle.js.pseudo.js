// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mstyle
function {
  return "mstyle";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=115B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mstyle
// locals: this
function {
  this = this;
  if (!(this.childNodes[0])) goto L_72;
  return (1 === this.childNodes[0].childNodes.length);
}

// fn <atom:0>  args=4 vars=10 closure=0 cpool=0 bc=232B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mstyle
// args: t, e, s, i
// locals: t#1, e#1, s#1, i#1, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let i#1;
  let s#1;
  let e#1;
  let t#1;
  if (!((t === undefined))) goto L_1b;
  t;
  t = {};
  t#1 = {};
  if (!((e === undefined))) goto L_25;
  e;
  e = false;
  e#1 = false;
  if (!((s === undefined))) goto L_2e;
  s;
  s = 0;
  s#1 = 0;
  if (!((i === undefined))) goto L_38;
  i;
  i = false;
  i#1 = false;
  this.attributes.setInherited("displaystyle", e);
  this.attributes.setInherited("scriptlevel", s);
  super["setInheritedAttributes"].call(this, t, e, s, i);
  return;
}

// fn <atom:0>  args=4 vars=8 closure=0 cpool=2 bc=587B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mstyle
// args: t, e, s, i
// locals: l, r, d, this
function {
  this = this;
  let d;
  let r;
  let l;
  l = this.attributes.getExplicit("scriptlevel");
  if (!((null != l))) goto L_d6;
  l = l.toString();
  l.toString();
  if (!(l.match(new RegExp("^\\s*[-+]")))) goto L_c8;
  s = (s + parseInt(l));
  goto L_d2;
  // [栈深重同步 1 -> 0]
  s = parseInt(l);
  parseInt(l);
  i = false;
  false;
  r = this.attributes.getExplicit("displaystyle");
  if (!((null != r))) goto L_136;
  e = (true === r);
  i = false;
  false;
  d = this.attributes.getExplicit("data-cramped");
  if (!((null != d))) goto L_190;
  i = d;
  d;
  t = this.addInheritedAttributes(t, this.attributes.getAllAttributes());
  this.childNodes[0].setInheritedAttributes(t, e, s, i);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mstyle
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

// fn <atom:0>  args=3 vars=8 closure=0 cpool=5 bc=558B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mstyle
// args: require, module, exports
// locals: t, e, MmlMstyle, <class_fields_init>, MmlMstyle#1
function {
  let MmlMstyle#1;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMstyle = undefined;
  t = require("../MmlNode");
  e = require("../Attributes");
  let MmlMstyle;
  let <class_fields_init>;
  class MmlMstyle extends t.AbstractMmlLayoutNode { ... }
  <proto:MmlMstyle>.kind = function <atom:0>;
  <proto:MmlMstyle>.notParent = function <atom:0>;
  <proto:MmlMstyle>.setInheritedAttributes = function <atom:0>;
  <proto:MmlMstyle>.setChildInheritedAttributes = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMstyle>;
  MmlMstyle = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMstyle#1 = function <atom:0>;
  exports.MmlMstyle = MmlMstyle#1;
  null;
  t.AbstractMmlLayoutNode.defaults;
  MmlMstyle#1.defaults = {scriptlevel: e.INHERIT, displaystyle: e.INHERIT, scriptsizemultiplier: (1 / Math.sqrt(2)), scriptminsize: ".4em", mathbackground: e.INHERIT, mathcolor: e.INHERIT, dir: e.INHERIT, infixlinebreakstyle: "before"};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mstyle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
