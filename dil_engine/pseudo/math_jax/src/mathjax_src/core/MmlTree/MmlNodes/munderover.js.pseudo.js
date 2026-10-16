// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
function {
  return "munderover";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
function {
  return 3;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
function {
  return 0;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
function {
  return 1;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
function {
  return 2;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
function {
  return true;
}

// fn <atom:0>  args=4 vars=8 closure=0 cpool=0 bc=703B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
// args: e, t, r, s
// locals: n, i, u, this
function {
  this = this;
  let u;
  let i;
  let n;
  n = this.childNodes;
  if ((s)) goto L_84;
  n[0].setInheritedAttributes(e, t, r, !!n[this.over]);
  if ((t)) goto L_101;
  i = !!n[0].coreMO().attributes.get("movablelimits");
  u = this.constructor.ACCENTS;
  if ((s)) goto L_1c7;
  n[1].setInheritedAttributes(e, false, this.getScriptlevel(u[1], i, r), (1 === this.under));
  this.setInheritedAccent(1, u[1], t, r, s, i);
  if (!(n[2])) goto L_2be;
  if ((s)) goto L_289;
  n[2].setInheritedAttributes(e, false, this.getScriptlevel(u[2], i, r), (2 === this.under));
  this.setInheritedAccent(2, u[2], t, r, s, i);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=89B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
// args: e, t, r
// locals: this
function {
  this = this;
  if (!(!t)) goto L_4f;
  if ((this.attributes.get(e))) goto L_56;
  r = <r_new>;
  (r++);
  return r;
}

// fn <atom:0>  args=6 vars=9 closure=0 cpool=0 bc=519B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
// args: e, t, r, s, n, i
// locals: u, e#1, this
function {
  this = this;
  let u;
  u = this.childNodes[e];
  if (!(!this.attributes.hasExplicit(t))) goto L_206;
  if (!(u.isEmbellished)) goto L_206;
  let e#1;
  e#1 = u.coreMO().attributes.get("accent");
  this.attributes.setInherited(t, e#1);
  if (!((e#1 !== this.attributes.getDefault(t)))) goto L_205;
  u.setInheritedAttributes({}, r, this.getScriptlevel(t, i, s), n);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
function {
  return "munder";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
function {
  return 2;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
function {
  return "mover";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
function {
  return 2;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
function {
  return 1;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
function {
  return 2;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
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

// fn <atom:0>  args=3 vars=13 closure=0 cpool=18 bc=654B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
// args: require, module, exports
// locals: e, MmlMunderover, <class_fields_init>, MmlMunderover#1, MmlMunder, <class_fields_init>#1, MmlMunder#1, MmlMover, <class_fields_init>#2, MmlMover#1
function {
  let MmlMover#1;
  let MmlMunder#1;
  let MmlMunderover#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMunderover = undefined;
  exports.MmlMunder = undefined;
  exports.MmlMover = undefined;
  e = require("../MmlNode");
  let MmlMunderover;
  let <class_fields_init>;
  class MmlMunderover extends e.AbstractMmlBaseNode { ... }
  <proto:MmlMunderover>.kind = function <atom:0>;
  <proto:MmlMunderover>.arity = function <atom:0>;
  <proto:MmlMunderover>.base = function <atom:0>;
  <proto:MmlMunderover>.under = function <atom:0>;
  <proto:MmlMunderover>.over = function <atom:0>;
  <proto:MmlMunderover>.linebreakContainer = function <atom:0>;
  <proto:MmlMunderover>.setChildInheritedAttributes = function <atom:0>;
  <proto:MmlMunderover>.getScriptlevel = function <atom:0>;
  <proto:MmlMunderover>.setInheritedAccent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMunderover>;
  MmlMunderover = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMunderover#1 = function <atom:0>;
  exports.MmlMunderover = MmlMunderover#1;
  null;
  e.AbstractMmlBaseNode.defaults;
  MmlMunderover#1.defaults = {accent: false, accentunder: false, align: "center"};
  MmlMunderover#1.ACCENTS = ["", "accentunder", "accent"];
  let MmlMunder;
  let <class_fields_init>#1;
  class MmlMunder extends MmlMunderover#1 { ... }
  <proto:MmlMunder>.kind = function <atom:0>;
  <proto:MmlMunder>.arity = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:MmlMunder>;
  MmlMunder = function <atom:0>;
  // close_loc <class_fields_init>#1
  MmlMunder#1 = function <atom:0>;
  exports.MmlMunder = MmlMunder#1;
  null;
  MmlMunderover#1.defaults;
  MmlMunder#1.defaults = {};
  let MmlMover;
  let <class_fields_init>#2;
  class MmlMover extends MmlMunderover#1 { ... }
  <proto:MmlMover>.kind = function <atom:0>;
  <proto:MmlMover>.arity = function <atom:0>;
  <proto:MmlMover>.over = function <atom:0>;
  <proto:MmlMover>.under = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:MmlMover>;
  MmlMover = function <atom:0>;
  // close_loc <class_fields_init>#2
  MmlMover#1 = function <atom:0>;
  exports.MmlMover = MmlMover#1;
  null;
  MmlMunderover#1.defaults;
  MmlMover#1.defaults = {};
  MmlMover#1.ACCENTS = ["", "accent", "accentunder"];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/munderover
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
