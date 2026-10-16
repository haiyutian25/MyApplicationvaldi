// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
function {
  return "mmultiscripts";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
function {
  return 1;
}

// fn <atom:0>  args=4 vars=11 closure=0 cpool=0 bc=819B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
// args: e, t, s, r
// locals: i, l, n, t#1, e#1, i#1, this
function {
  this = this;
  let i;
  this.childNodes[0].setInheritedAttributes(e, t, s, r);
  i = false;
  let n;
  let l;
  l = 1;
  n = 0;
  if (!((l < this.childNodes.length))) goto L_213;
  let t#1;
  t#1 = this.childNodes[l];
  if (!(t#1.isKind("mprescripts"))) goto L_1be;
  if (!(!i)) goto L_208;
  i = true;
  true;
  if (!(((l % 2) == 0))) goto L_208;
  let e#1;
  e#1 = this.factory.create("none");
  this.childNodes.splice(l, 0, e#1);
  e#1.parent = this;
  l = <l_new>;
  (l++);
  goto L_208;
  let i#1;
  if ((r)) goto L_1cd;
  i#1 = ((n % 2) == 0);
  t#1.setInheritedAttributes(e, false, (s + 1), i#1);
  n = <n_new>;
  (n++);
  l = <l_new>;
  (l++);
  goto L_61;
  if (!(i)) goto L_241;
  goto L_242;
  // [栈深重同步 2 -> 1]
  if (!(((this.childNodes.length % 2) == 0))) goto L_332;
  this.appendChild(this.factory.create("none"));
  this.childNodes[(this.childNodes.length - 1)].setInheritedAttributes(e, false, (s + 1), r);
  return;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=0 bc=523B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
// args: e
// locals: t, s, r, i, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let s;
  let t;
  t = false;
  s = e.fixMmultiscripts;
  let r;
  r = 0;
  if (!((r < this.childNodes.length))) goto L_193;
  let i;
  i = this.childNodes[r];
  if (!(i.isKind("mprescripts"))) goto L_187;
  if (!(t)) goto L_142;
  goto L_187;
  // [栈深重同步 1 -> 0]
  t = true;
  true;
  if ((((r % 2) != 0))) goto L_187;
  if ((s)) goto L_187;
  this.mError("There must be an equal number of prescripts of each type", e);
  r = <r_new>;
  (r++);
  goto L_38;
  if (!(t)) goto L_1c1;
  goto L_1c2;
  // [栈深重同步 2 -> 1]
  if ((((this.childNodes.length % 2) != 0))) goto L_1fa;
  if ((s)) goto L_1fa;
  this.mError("There must be an equal number of scripts of each type", e);
  super["verifyChildren"].call(this, e);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
function {
  return "mprescripts";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
function {
  return 0;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=221B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["verifyTree"].call(this, e);
  if (!(this.parent)) goto L_dc;
  if (!(!this.parent.isKind("mmultiscripts"))) goto L_dc;
  this.mError((this.kind + " must be a child of mmultiscripts"), e, true);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
function {
  return "none";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
function {
  return 0;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=221B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["verifyTree"].call(this, e);
  if (!(this.parent)) goto L_dc;
  if (!(!this.parent.isKind("mmultiscripts"))) goto L_dc;
  this.mError((this.kind + " must be a child of mmultiscripts"), e, true);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
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

// fn <atom:0>  args=3 vars=14 closure=0 cpool=13 bc=682B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
// args: require, module, exports
// locals: e, t, MmlMmultiscripts, <class_fields_init>, MmlMmultiscripts#1, MmlMprescripts, <class_fields_init>#1, MmlMprescripts#1, MmlNone, <class_fields_init>#2, MmlNone#1
function {
  let MmlNone#1;
  let MmlMprescripts#1;
  let MmlMmultiscripts#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMmultiscripts = undefined;
  exports.MmlMprescripts = undefined;
  exports.MmlNone = undefined;
  e = require("../MmlNode");
  t = require("./msubsup");
  let MmlMmultiscripts;
  let <class_fields_init>;
  class MmlMmultiscripts extends t.MmlMsubsup { ... }
  <proto:MmlMmultiscripts>.kind = function <atom:0>;
  <proto:MmlMmultiscripts>.arity = function <atom:0>;
  <proto:MmlMmultiscripts>.setChildInheritedAttributes = function <atom:0>;
  <proto:MmlMmultiscripts>.verifyChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMmultiscripts>;
  MmlMmultiscripts = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMmultiscripts#1 = function <atom:0>;
  exports.MmlMmultiscripts = MmlMmultiscripts#1;
  null;
  t.MmlMsubsup.defaults;
  MmlMmultiscripts#1.defaults = {};
  let MmlMprescripts;
  let <class_fields_init>#1;
  class MmlMprescripts extends e.AbstractMmlNode { ... }
  <proto:MmlMprescripts>.kind = function <atom:0>;
  <proto:MmlMprescripts>.arity = function <atom:0>;
  <proto:MmlMprescripts>.verifyTree = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:MmlMprescripts>;
  MmlMprescripts = function <atom:0>;
  // close_loc <class_fields_init>#1
  MmlMprescripts#1 = function <atom:0>;
  exports.MmlMprescripts = MmlMprescripts#1;
  null;
  e.AbstractMmlNode.defaults;
  MmlMprescripts#1.defaults = {};
  let MmlNone;
  let <class_fields_init>#2;
  class MmlNone extends e.AbstractMmlNode { ... }
  <proto:MmlNone>.kind = function <atom:0>;
  <proto:MmlNone>.arity = function <atom:0>;
  <proto:MmlNone>.verifyTree = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:MmlNone>;
  MmlNone = function <atom:0>;
  // close_loc <class_fields_init>#2
  MmlNone#1 = function <atom:0>;
  exports.MmlNone = MmlNone#1;
  null;
  e.AbstractMmlNode.defaults;
  MmlNone#1.defaults = {};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mmultiscripts
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
