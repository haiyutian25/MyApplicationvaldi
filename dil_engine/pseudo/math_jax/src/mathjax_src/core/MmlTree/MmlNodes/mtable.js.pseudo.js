// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=150B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtable
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
  this.properties = {useHeight: true};
  this.texclass = t.TEXCLASS.ORD;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtable
function {
  return "mtable";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtable
function {
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtable
function {
  return "";
}

// fn <atom:0>  args=4 vars=7 closure=1 cpool=0 bc=316B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtable
// args: e, i, s, r
// locals: l, this, <home_object>
// closure: t
function {
  <home_object> = <special_object 4>;
  this = this;
  let l;
  for (const l of t.indentAttributes) {
    if (!(e[l])) goto L_8a;
    this.attributes.setInherited(l, e[l][1]);
    if (!(this.attributes.hasExplicit(l))) goto L_121;
    this.attributes.unset(l);
  }
  super["setInheritedAttributes"].call(this, e, i, s, r);
  return;
}

// fn <atom:0>  args=4 vars=9 closure=1 cpool=0 bc=1050B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtable
// args: t, i, s, r
// locals: e, l, a, e#1, this
// closure: e
function {
  this = this;
  let a;
  let l;
  let e;
  for (const e of this.childNodes) {
    if ((e.isKind("mtr"))) goto L_103;
    this.replaceChild(this.factory.create("mtr"), e).appendChild(e);
  }
  if (!(!this.attributes.getExplicit("displaystyle"))) goto L_1ab;
  i = !!this.attributes.getDefault("displaystyle");
  t = this.addInheritedAttributes(t, {columnalign: this.attributes.get("columnalign"), rowalign: "center", data-break-align: this.attributes.get("data-break-align")});
  l = this.attributes.getExplicit("data-cramped");
  a = e.split(this.attributes.get("rowalign"));
  let e#1;
  for (const e#1 of this.childNodes) {
    if ((a.shift())) goto L_3df;
    t.rowalign[1] = t.rowalign[1];
    e#1.setInheritedAttributes(t, i, s, !!l);
  }
  return;
}

// fn <atom:0>  args=1 vars=9 closure=0 cpool=0 bc=954B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtable
// args: t
// locals: e, i, s, r, l, s#1, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  let e;
  e = null;
  i = this.factory;
  let s;
  s = 0;
  if (!((s < this.childNodes.length))) goto L_3aa;
  let r;
  r = this.childNodes[s];
  if (!(r.isKind("mtr"))) goto L_c7;
  e = null;
  null;
  goto L_39f;
  let l;
  l = r.isKind("mtd");
  if (!(e)) goto L_130;
  this.removeChild(r);
  s = <s_new>;
  goto L_189;
  // [栈深重同步 1 -> 0]
  e = this.replaceChild(i.create("mtr"), r);
  this.replaceChild(i.create("mtr"), r);
  if (!(l)) goto L_1b8;
  goto L_1eb;
  // [栈深重同步 3 -> 2]
  e.appendChild(i.create("mtd", {}, [r]));
  if (!(!t.fixMtables)) goto L_39f;
  let s#1;
  r.parent.removeChild(r);
  r.parent = this;
  if (!(l)) goto L_2ce;
  e.appendChild(i.create("mtd"));
  s#1 = r.mError((("Children of " + this.kind) + " must be mtr or mlabeledtr"), t, l);
  e.childNodes[(e.childNodes.length - 1)].appendChild(s#1);
  s = <s_new>;
  (s++);
  goto L_38;
  super["verifyChildren"].call(this, t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=131B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtable
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

// fn <atom:0>  args=3 vars=8 closure=0 cpool=8 bc=486B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtable
// args: require, module, exports
// locals: t, e, MmlMtable, <class_fields_init>, MmlMtable#1
function {
  let MmlMtable#1;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMtable = undefined;
  t = require("../MmlNode");
  e = require("../../../util/string");
  let MmlMtable;
  let <class_fields_init>;
  class MmlMtable extends t.AbstractMmlNode { ... }
  <proto:MmlMtable>.kind = function <atom:0>;
  <proto:MmlMtable>.linebreakContainer = function <atom:0>;
  <proto:MmlMtable>.linebreakAlign = function <atom:0>;
  <proto:MmlMtable>.setInheritedAttributes = function <atom:0>;
  <proto:MmlMtable>.setChildInheritedAttributes = function <atom:0>;
  <proto:MmlMtable>.verifyChildren = function <atom:0>;
  <proto:MmlMtable>.setTeXclass = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMtable>;
  MmlMtable = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMtable#1 = function <atom:0>;
  exports.MmlMtable = MmlMtable#1;
  null;
  t.AbstractMmlNode.defaults;
  MmlMtable#1.defaults = {align: "axis", rowalign: "baseline", columnalign: "center", groupalign: "{left}", alignmentscope: true, columnwidth: "auto", width: "auto", rowspacing: "1ex", columnspacing: ".8em", rowlines: "none", columnlines: "none", frame: "none", framespacing: "0.4em 0.5ex", equalrows: false, equalcolumns: false, displaystyle: false, side: "right", minlabelspacing: "0.8em", data-break-align: "top"};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
