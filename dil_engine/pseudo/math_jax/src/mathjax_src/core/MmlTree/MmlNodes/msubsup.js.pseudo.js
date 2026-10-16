// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
function {
  return "msubsup";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
function {
  return 3;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
function {
  return 0;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
function {
  return 1;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
function {
  return 2;
}

// fn <atom:0>  args=4 vars=6 closure=0 cpool=0 bc=273B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
// args: s, t, e, u
// locals: r, this
function {
  this = this;
  let r;
  r = this.childNodes;
  r[0].setInheritedAttributes(s, t, e, u);
  if ((u)) goto L_ab;
  r[1].setInheritedAttributes(s, false, (e + 1), (1 === this.sub));
  if (!(r[2])) goto L_110;
  if ((u)) goto L_10d;
  r[2].setInheritedAttributes(s, false, (e + 1), (2 === this.sub));
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
function {
  return "msub";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
function {
  return 2;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
function {
  return "msup";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
function {
  return 2;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
function {
  return 1;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
function {
  return 2;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
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

// fn <atom:0>  args=3 vars=13 closure=0 cpool=15 bc=566B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
// args: require, module, exports
// locals: s, MmlMsubsup, <class_fields_init>, MmlMsubsup#1, MmlMsub, <class_fields_init>#1, MmlMsub#1, MmlMsup, <class_fields_init>#2, MmlMsup#1
function {
  let MmlMsup#1;
  let MmlMsub#1;
  let MmlMsubsup#1;
  let s;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMsubsup = undefined;
  exports.MmlMsub = undefined;
  exports.MmlMsup = undefined;
  s = require("../MmlNode");
  let MmlMsubsup;
  let <class_fields_init>;
  class MmlMsubsup extends s.AbstractMmlBaseNode { ... }
  <proto:MmlMsubsup>.kind = function <atom:0>;
  <proto:MmlMsubsup>.arity = function <atom:0>;
  <proto:MmlMsubsup>.base = function <atom:0>;
  <proto:MmlMsubsup>.sub = function <atom:0>;
  <proto:MmlMsubsup>.sup = function <atom:0>;
  <proto:MmlMsubsup>.setChildInheritedAttributes = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMsubsup>;
  MmlMsubsup = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMsubsup#1 = function <atom:0>;
  exports.MmlMsubsup = MmlMsubsup#1;
  null;
  s.AbstractMmlBaseNode.defaults;
  MmlMsubsup#1.defaults = {subscriptshift: "", superscriptshift: ""};
  let MmlMsub;
  let <class_fields_init>#1;
  class MmlMsub extends MmlMsubsup#1 { ... }
  <proto:MmlMsub>.kind = function <atom:0>;
  <proto:MmlMsub>.arity = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:MmlMsub>;
  MmlMsub = function <atom:0>;
  // close_loc <class_fields_init>#1
  MmlMsub#1 = function <atom:0>;
  exports.MmlMsub = MmlMsub#1;
  null;
  MmlMsubsup#1.defaults;
  MmlMsub#1.defaults = {};
  let MmlMsup;
  let <class_fields_init>#2;
  class MmlMsup extends MmlMsubsup#1 { ... }
  <proto:MmlMsup>.kind = function <atom:0>;
  <proto:MmlMsup>.arity = function <atom:0>;
  <proto:MmlMsup>.sup = function <atom:0>;
  <proto:MmlMsup>.sub = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:MmlMsup>;
  MmlMsup = function <atom:0>;
  // close_loc <class_fields_init>#2
  MmlMsup#1 = function <atom:0>;
  exports.MmlMsup = MmlMsup#1;
  null;
  MmlMsubsup#1.defaults;
  MmlMsup#1.defaults = {};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/msubsup
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
