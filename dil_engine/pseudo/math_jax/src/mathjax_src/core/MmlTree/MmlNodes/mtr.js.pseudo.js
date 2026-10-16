// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtr
function {
  return "mtr";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtr
function {
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtr
function {
  return "";
}

// fn <atom:0>  args=4 vars=9 closure=1 cpool=0 bc=1188B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtr
// args: t, e, r, s
// locals: i, l, a, i#1, this
// closure: i
function {
  this = this;
  let a;
  let l;
  let i;
  for (const i of this.childNodes) {
    if ((i.isKind("mtd"))) goto L_103;
    this.replaceChild(this.factory.create("mtd"), i).appendChild(i);
  }
  l = i.split(this.attributes.get("columnalign"));
  a = i.split(this.attributes.get("data-break-align"));
  if (!((1 === this.arity))) goto L_2de;
  l.unshift(this.parent.attributes.get("side"));
  a.unshift("top");
  t = this.addInheritedAttributes(t, {rowalign: this.attributes.get("rowalign"), columnalign: "center", data-break-align: "top"});
  let i#1;
  for (const i#1 of this.childNodes) {
    if ((l.shift())) goto L_40b;
    t.columnalign[1] = t.columnalign[1];
    if ((a.shift())) goto L_46a;
    t["data-vertical-align"] = [this.kind, t["data-break-align"][1]];
    i#1.setInheritedAttributes(t, e, r, s);
  }
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=602B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtr
// args: t
// locals: e, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if ((!this.parent)) goto L_77;
  if (!(this.parent.isKind("mtable"))) goto L_208;
  let e;
  for (const e of this.childNodes) {
    if (!(!e.isKind("mtd"))) continue;
    this.replaceChild(this.factory.create("mtd"), e).appendChild(e);
    if ((t.fixMtables)) goto L_1ef;
    e.mError((("Children of " + this.kind) + " must be mtd"), t);
  }
  super["verifyChildren"].call(this, t);
  return;
  this.mError((this.kind + " can only be a child of an mtable"), t, true);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=131B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtr
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

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtr
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtr
function {
  return "mlabeledtr";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtr
function {
  return 1;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtr
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=10 bc=516B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtr
// args: require, module, exports
// locals: t, e, i, MmlMtr, <class_fields_init>, MmlMtr#1, MmlMlabeledtr, <class_fields_init>#1, MmlMlabeledtr#1
function {
  let MmlMlabeledtr#1;
  let MmlMtr#1;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMtr = undefined;
  exports.MmlMlabeledtr = undefined;
  t = require("../MmlNode");
  e = require("../Attributes");
  i = require("../../../util/string");
  let MmlMtr;
  let <class_fields_init>;
  class MmlMtr extends t.AbstractMmlNode { ... }
  <proto:MmlMtr>.kind = function <atom:0>;
  <proto:MmlMtr>.linebreakContainer = function <atom:0>;
  <proto:MmlMtr>.linebreakAlign = function <atom:0>;
  <proto:MmlMtr>.setChildInheritedAttributes = function <atom:0>;
  <proto:MmlMtr>.verifyChildren = function <atom:0>;
  <proto:MmlMtr>.setTeXclass = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMtr>;
  MmlMtr = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMtr#1 = function <atom:0>;
  exports.MmlMtr = MmlMtr#1;
  null;
  t.AbstractMmlNode.defaults;
  MmlMtr#1.defaults = {rowalign: e.INHERIT, columnalign: e.INHERIT, groupalign: e.INHERIT, data-break-align: "top"};
  let MmlMlabeledtr;
  let <class_fields_init>#1;
  class MmlMlabeledtr extends MmlMtr#1 { ... }
  <proto:MmlMlabeledtr>.kind = function <atom:0>;
  <proto:MmlMlabeledtr>.arity = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:MmlMlabeledtr>;
  MmlMlabeledtr = function <atom:0>;
  // close_loc <class_fields_init>#1
  MmlMlabeledtr#1 = function <atom:0>;
  exports.MmlMlabeledtr = MmlMlabeledtr#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtr
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
