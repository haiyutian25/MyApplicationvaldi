// fn t  args=7 vars=14 closure=0 cpool=0 bc=115B file=math_jax/src/mathjax_src/core/MathItem
// args: t, e, s, r, i, o, a
// locals: t#1, e#1, s#1, r#1, i#1, o#1, a#1
function {
  let a#1;
  let o#1;
  let i#1;
  let r#1;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  s#1 = s;
  r#1 = r;
  i#1 = i;
  o#1 = o;
  if (!((a === undefined))) goto L_33;
  a;
  a = null;
  a#1 = null;
  return {open: t, math: e, close: s, n: r, start: {n: i}, end: {n: o}, display: a};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/core/MathItem
// locals: this
function {
  this = this;
  return (null === this.display);
}

// fn <atom:0>  args=5 vars=11 closure=2 cpool=0 bc=366B file=math_jax/src/mathjax_src/core/MathItem
// args: t, e, s, r, i
// locals: t#1, e#1, s#1, r#1, i#1, this
// closure: <class_fields_init>, exports
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let i#1;
  let r#1;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((s === undefined))) goto L_2d;
  s;
  s = true;
  s#1 = true;
  if (!((r === undefined))) goto L_48;
  r;
  r = {i: 0, n: 0, delim: ""};
  r#1 = {i: 0, n: 0, delim: ""};
  if (!((i === undefined))) goto L_67;
  i;
  i = {i: 0, n: 0, delim: ""};
  i#1 = {i: 0, n: 0, delim: ""};
  this.root = null;
  this.typesetRoot = null;
  this.metrics = {};
  this.inputData = {};
  this.outputData = {};
  this._state = exports.STATE.UNPROCESSED;
  this.math = t;
  this.inputJax = e;
  this.display = s;
  this.start = r;
  this.end = i;
  this.root = null;
  this.typesetRoot = null;
  this.metrics = {};
  this.inputData = {};
  this.outputData = {};
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=75B file=math_jax/src/mathjax_src/core/MathItem
// args: t
// locals: this
function {
  this = this;
  t.renderActions.renderMath(this, t);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=243B file=math_jax/src/mathjax_src/core/MathItem
// args: t, e
// locals: t#1, e#1, this
// closure: exports
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_54;
  e;
  e = exports.STATE.RERENDER;
  e#1 = exports.STATE.RERENDER;
  if (!((this.state() >= e))) goto L_a8;
  this.state((e - 1));
  t.renderActions.renderMath(this, t, e);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=159B file=math_jax/src/mathjax_src/core/MathItem
// args: t, e
// locals: t#1, e#1, this
// closure: exports
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_54;
  e;
  e = exports.STATE.LAST;
  e#1 = exports.STATE.LAST;
  t.renderActions.renderConvert(this, t, e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=301B file=math_jax/src/mathjax_src/core/MathItem
// args: t
// locals: this
// closure: exports
function {
  this = this;
  if (!((this.state() < exports.STATE.COMPILED))) goto L_12c;
  this.root = this.inputJax.compile(this, t);
  this.state(exports.STATE.COMPILED);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=317B file=math_jax/src/mathjax_src/core/MathItem
// args: t
// locals: this
// closure: exports
function {
  this = this;
  if (!((this.state() < exports.STATE.TYPESET))) goto L_13c;
  if (!(this.isEscaped)) goto L_c0;
  goto L_c5;
  // [栈深重同步 3 -> 2]
  this.typesetRoot = t.outputJax["typeset"].call(t.outputJax, this, t);
  this.state(exports.STATE.TYPESET);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/core/MathItem
// args: t
function {
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=53B file=math_jax/src/mathjax_src/core/MathItem
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = false;
  t#1 = false;
  this.clear();
  return;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/core/MathItem
// args: t, e, s, r
// locals: this
function {
  this = this;
  this.metrics = {em: t, ex: e, containerWidth: s, scale: r};
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=690B file=math_jax/src/mathjax_src/core/MathItem
// args: t, e
// locals: t#1, e#1, this
// closure: exports
function {
  this = this;
  let e#1;
  let t#1;
  if (!((t === undefined))) goto L_10;
  t;
  t = null;
  t#1 = null;
  if (!((e === undefined))) goto L_1a;
  e;
  e = false;
  e#1 = false;
  if (!((null != t))) goto L_28e;
  if (!((t < exports.STATE.INSERTED))) goto L_101;
  if (!((this._state >= exports.STATE.INSERTED))) goto L_101;
  this.removeFromDocument(e);
  if (!((t < exports.STATE.TYPESET))) goto L_1c1;
  if (!((this._state >= exports.STATE.TYPESET))) goto L_1c1;
  this.outputData = {};
  {};
  if (!((t < exports.STATE.COMPILED))) goto L_281;
  if (!((this._state >= exports.STATE.COMPILED))) goto L_281;
  this.inputData = {};
  {};
  this._state = t;
  t;
  return this._state;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=121B file=math_jax/src/mathjax_src/core/MathItem
// args: t
// locals: t#1, this
// closure: exports
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = false;
  t#1 = false;
  this.state(exports.STATE.UNPROCESSED, t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/core/MathItem
function {
  return;
}

// fn e  args=2 vars=2 closure=1 cpool=0 bc=96B file=math_jax/src/mathjax_src/core/MathItem
// args: t, e
// closure: exports
function {
  if (!((t in exports.STATE))) goto L_3a;
  throw Error((("State " + t) + " already exists"));
  exports.STATE[t] = e;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=15 bc=342B file=math_jax/src/mathjax_src/core/MathItem
// args: require, module, exports
// locals: t, AbstractMathItem, <class_fields_init>, AbstractMathItem#1, e
function {
  t = function t;
  e = function e;
  let AbstractMathItem#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.protoItem = undefined;
  exports.AbstractMathItem = undefined;
  exports.STATE = undefined;
  exports.newState = undefined;
  exports.protoItem = t;
  let AbstractMathItem;
  let <class_fields_init>;
  class AbstractMathItem extends undefined { ... }
  <proto:AbstractMathItem>.isEscaped = function <atom:0>;
  <proto:AbstractMathItem>.render = function <atom:0>;
  <proto:AbstractMathItem>.rerender = function <atom:0>;
  <proto:AbstractMathItem>.convert = function <atom:0>;
  <proto:AbstractMathItem>.compile = function <atom:0>;
  <proto:AbstractMathItem>.typeset = function <atom:0>;
  <proto:AbstractMathItem>.updateDocument = function <atom:0>;
  <proto:AbstractMathItem>.removeFromDocument = function <atom:0>;
  <proto:AbstractMathItem>.setMetrics = function <atom:0>;
  <proto:AbstractMathItem>.state = function <atom:0>;
  <proto:AbstractMathItem>.reset = function <atom:0>;
  <proto:AbstractMathItem>.clear = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbstractMathItem>;
  AbstractMathItem = function <atom:0>;
  // close_loc <class_fields_init>
  AbstractMathItem#1 = function <atom:0>;
  exports.AbstractMathItem = AbstractMathItem#1;
  exports.STATE = {UNPROCESSED: 0, FINDMATH: 10, COMPILED: 20, CONVERT: 100, METRICS: 110, RERENDER: 125, TYPESET: 150, INSERTED: 200, LAST: 10000};
  exports.newState = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MathItem
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
