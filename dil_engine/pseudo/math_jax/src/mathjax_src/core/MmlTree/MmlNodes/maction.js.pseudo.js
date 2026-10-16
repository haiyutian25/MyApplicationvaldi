// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
function {
  return "maction";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
function {
  return 1;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=326B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
// locals: t, e, this
function {
  this = this;
  let e;
  let t;
  t = this.attributes.get("selection");
  e = (Math.max(1, Math.min(this.childNodes.length, t)) - 1);
  if ((this.childNodes[e])) goto L_145;
  return this.factory.create("mrow");
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
// locals: this
function {
  this = this;
  return this.selected.isEmbellished;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
// locals: this
function {
  this = this;
  return this.selected.isSpacelike;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
// locals: this
function {
  this = this;
  return this.selected.core();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
// locals: this
function {
  this = this;
  return this.selected.coreMO();   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=262B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
// args: t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["verifyAttributes"].call(this, t);
  if (!(("toggle" !== this.attributes.get("actiontype")))) goto L_105;
  if (!(this.attributes.hasExplicit("selection"))) goto L_105;
  this.attributes.unset("selection");
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=323B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
// args: t
// locals: e, this
function {
  this = this;
  let e;
  if (!(("tooltip" === this.attributes.get("actiontype")))) goto L_cb;
  if (!(this.childNodes[1])) goto L_cb;
  this.childNodes[1].setTeXclass(null);
  e = this.selected;
  t = e.setTeXclass(t);
  this.updateTeXclass(e);
  return t;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=259B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
// locals: t, this
function {
  this = this;
  let t;
  t = Math.max(1, (parseInt(this.attributes.get("selection")) + 1));
  if (!((t > this.childNodes.length))) goto L_b3;
  t = 1;
  1;
  this.attributes.set("selection", t);
  return;
}

// fn <atom:0>  args=4 vars=6 closure=0 cpool=0 bc=317B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
// args: t, e, s, i
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(("tooltip" === this.attributes.get("actiontype").toLowerCase()))) goto L_12c;
  if (!((this.childNodes[0] == null))) goto L_ab;
  this.childNodes[0];
  goto L_d3;
  undefined.setInheritedAttributes(t, e, s, i);
  if (!((this.childNodes[1] == null))) goto L_100;
  this.childNodes[1];
  goto L_13c;
  goto L_13c;
  // [栈深重同步 1 -> 0]
  super["setChildInheritedAttributes"].call(this, t, e, s, i);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
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

// fn <atom:0>  args=3 vars=7 closure=0 cpool=12 bc=344B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
// args: require, module, exports
// locals: t, MmlMaction, <class_fields_init>, MmlMaction#1
function {
  let MmlMaction#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMaction = undefined;
  t = require("../MmlNode");
  let MmlMaction;
  let <class_fields_init>;
  class MmlMaction extends t.AbstractMmlNode { ... }
  <proto:MmlMaction>.kind = function <atom:0>;
  <proto:MmlMaction>.arity = function <atom:0>;
  <proto:MmlMaction>.selected = function <atom:0>;
  <proto:MmlMaction>.isEmbellished = function <atom:0>;
  <proto:MmlMaction>.isSpacelike = function <atom:0>;
  <proto:MmlMaction>.core = function <atom:0>;
  <proto:MmlMaction>.coreMO = function <atom:0>;
  <proto:MmlMaction>.verifyAttributes = function <atom:0>;
  <proto:MmlMaction>.setTeXclass = function <atom:0>;
  <proto:MmlMaction>.nextToggleSelection = function <atom:0>;
  <proto:MmlMaction>.setChildInheritedAttributes = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMaction>;
  MmlMaction = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMaction#1 = function <atom:0>;
  exports.MmlMaction = MmlMaction#1;
  null;
  t.AbstractMmlNode.defaults;
  MmlMaction#1.defaults = {actiontype: "toggle", selection: 1};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/maction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
