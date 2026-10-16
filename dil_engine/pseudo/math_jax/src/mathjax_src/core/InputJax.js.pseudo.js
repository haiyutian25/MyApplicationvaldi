// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=444B file=math_jax/src/mathjax_src/core/InputJax
// args: e
// locals: e#1, r, this
// closure: <class_fields_init>, t, s
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let e#1;
  if (!((e === undefined))) goto L_1a;
  e;
  e = {};
  e#1 = {};
  let r;
  this.adaptor = null;
  this.mmlFactory = null;
  r = this.constructor;
  this.options = t.userOptions(t.defaultOptions({}, r.OPTIONS), e);
  this.preFilters = new s.FunctionList(this.options.preFilters);
  this.postFilters = new s.FunctionList(this.options.postFilters);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/core/InputJax
// locals: this
function {
  this = this;
  return this.constructor.NAME;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/core/InputJax
// args: t
// locals: this
function {
  this = this;
  this.adaptor = t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/core/InputJax
// args: t
// locals: this
function {
  this = this;
  this.mmlFactory = t;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/core/InputJax
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=5B file=math_jax/src/mathjax_src/core/InputJax
// args: t
function {
  t = ...0;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/InputJax
function {
  return true;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=math_jax/src/mathjax_src/core/InputJax
// args: t, s
function {
  return [];
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=101B file=math_jax/src/mathjax_src/core/InputJax
// args: t, s, e, r
// locals: i
function {
  let i;
  i = {math: s, document: e, data: r};
  t.execute(i);
  return i.data;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=9 bc=240B file=math_jax/src/mathjax_src/core/InputJax
// args: require, module, exports
// locals: t, s, AbstractInputJax, <class_fields_init>, AbstractInputJax#1
function {
  let AbstractInputJax#1;
  let s;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AbstractInputJax = undefined;
  t = require("../util/Options");
  s = require("../util/FunctionList");
  let AbstractInputJax;
  let <class_fields_init>;
  class AbstractInputJax extends undefined { ... }
  <proto:AbstractInputJax>.name = function <atom:0>;
  <proto:AbstractInputJax>.setAdaptor = function <atom:0>;
  <proto:AbstractInputJax>.setMmlFactory = function <atom:0>;
  <proto:AbstractInputJax>.initialize = function <atom:0>;
  <proto:AbstractInputJax>.reset = function <atom:0>;
  <proto:AbstractInputJax>.processStrings = function <atom:0>;
  <proto:AbstractInputJax>.findMath = function <atom:0>;
  <proto:AbstractInputJax>.executeFilters = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbstractInputJax>;
  AbstractInputJax = function <atom:0>;
  // close_loc <class_fields_init>
  AbstractInputJax#1 = function <atom:0>;
  exports.AbstractInputJax = AbstractInputJax#1;
  AbstractInputJax#1.NAME = "generic";
  AbstractInputJax#1.OPTIONS = {preFilters: [], postFilters: []};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/InputJax
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
