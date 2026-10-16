// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=433B file=math_jax/src/mathjax_src/core/OutputJax
// args: s
// locals: s#1, r, this
// closure: <class_fields_init>, t, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let s#1;
  if (!((s === undefined))) goto L_1a;
  s;
  s = {};
  s#1 = {};
  let r;
  this.adaptor = null;
  r = this.constructor;
  this.options = t.userOptions(t.defaultOptions({}, r.OPTIONS), s);
  this.preFilters = new e.FunctionList(this.options.preFilters);
  this.postFilters = new e.FunctionList(this.options.postFilters);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/core/OutputJax
// locals: this
function {
  this = this;
  return this.constructor.NAME;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/core/OutputJax
// args: t
// locals: this
function {
  this = this;
  this.adaptor = t;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/core/OutputJax
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=5B file=math_jax/src/mathjax_src/core/OutputJax
// args: t
function {
  t = ...0;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/core/OutputJax
// args: t
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/OutputJax
// args: t
function {
  return null;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/OutputJax
// args: t
function {
  return null;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=101B file=math_jax/src/mathjax_src/core/OutputJax
// args: t, e, s, r
// locals: i
function {
  let i;
  i = {math: e, document: s, data: r};
  t.execute(i);
  return i.data;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=9 bc=240B file=math_jax/src/mathjax_src/core/OutputJax
// args: require, module, exports
// locals: t, e, AbstractOutputJax, <class_fields_init>, AbstractOutputJax#1
function {
  let AbstractOutputJax#1;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AbstractOutputJax = undefined;
  t = require("../util/Options");
  e = require("../util/FunctionList");
  let AbstractOutputJax;
  let <class_fields_init>;
  class AbstractOutputJax extends undefined { ... }
  <proto:AbstractOutputJax>.name = function <atom:0>;
  <proto:AbstractOutputJax>.setAdaptor = function <atom:0>;
  <proto:AbstractOutputJax>.initialize = function <atom:0>;
  <proto:AbstractOutputJax>.reset = function <atom:0>;
  <proto:AbstractOutputJax>.getMetrics = function <atom:0>;
  <proto:AbstractOutputJax>.styleSheet = function <atom:0>;
  <proto:AbstractOutputJax>.pageElements = function <atom:0>;
  <proto:AbstractOutputJax>.executeFilters = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbstractOutputJax>;
  AbstractOutputJax = function <atom:0>;
  // close_loc <class_fields_init>
  AbstractOutputJax#1 = function <atom:0>;
  exports.AbstractOutputJax = AbstractOutputJax#1;
  AbstractOutputJax#1.NAME = "generic";
  AbstractOutputJax#1.OPTIONS = {preFilters: [], postFilters: []};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/OutputJax
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
