// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=226B file=math_jax/src/mathjax_src/adaptors/NodeMixin
// args: e
// locals: o, this.active_func, new.target, this
// closure: <class_fields_init>, t
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  e = ...0;
  let o;
  this = new new.target(e[0]);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  new new.target(e[0]);
  this.canMeasureNodes = false;
  o = this.constructor;
  this.options = t.userOptions(t.defaultOptions({}, o.OPTIONS), e[1]);
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=123B file=math_jax/src/mathjax_src/adaptors/NodeMixin
// args: t
// locals: this, <home_object>
// closure: n
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(n.badCSS)) goto L_6d;
  return this.options.fontSize;
  return super["fontSize"].call(this, t);
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=123B file=math_jax/src/mathjax_src/adaptors/NodeMixin
// args: t
// locals: this, <home_object>
// closure: n
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(n.badCSS)) goto L_6d;
  return this.options.fontFamily;
  return super["fontFamily"].call(this, t);
}

// fn <atom:0>  args=3 vars=10 closure=2 cpool=0 bc=517B file=math_jax/src/mathjax_src/adaptors/NodeMixin
// args: t, e, o
// locals: t#1, e#1, o#1, s, i, this, <home_object>
// closure: n, r
function {
  <home_object> = <special_object 4>;
  this = this;
  let o#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_1a;
  e;
  e = 1;
  e#1 = 1;
  if (!((o === undefined))) goto L_23;
  o;
  o = null;
  o#1 = null;
  let i;
  let s;
  if (!(!n.badSizes)) goto L_60;
  return super["nodeSize"](t, e, o);   // tail call
  s = this.textContent(t);
  i = Array.from(s.replace(r.cjkPattern, "")).length;
  return [(((Array.from(s).length - i) * this.options.cjkCharWidth) + (i * this.options.unknownCharWidth)), this.options.unknownCharHeight];
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=81B file=math_jax/src/mathjax_src/adaptors/NodeMixin
// args: t
// locals: this, <home_object>
// closure: n
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(n.badSizes)) goto L_43;
  return {left: 0, right: 0, top: 0, bottom: 0};
  return super["nodeBBox"].call(this, t);
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=52B file=math_jax/src/mathjax_src/adaptors/NodeMixin
// args: t, e
// locals: t#1, e#1, this
// closure: <class_fields_init>, n
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_1f;
  e;
  e = {};
  e#1 = {};
  this.worker = new n(t, e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=math_jax/src/mathjax_src/adaptors/NodeMixin
// args: t, e
// locals: this
function {
  this = this;
  this.worker.on(t, e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=80B file=math_jax/src/mathjax_src/adaptors/NodeMixin
// args: t
// locals: this
function {
  this = this;
  this.worker.postMessage({data: t});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/adaptors/NodeMixin
// locals: this
function {
  this = this;
  this.worker.terminate();
  return;
}

// fn <atom:0>  args=2 vars=9 closure=1 cpool=4 bc=400B file=math_jax/src/mathjax_src/adaptors/NodeMixin
// args: t, o
// locals: n, r, s, i, a, LiteWorker, <class_fields_init>
// closure: e
function {
  let a;
  let i;
  let s;
  let r;
  let n;
  if (((undefined === undefined))) goto L_3b;
  n = <to_object>(undefined).Worker;
  <to_object>(undefined);
  goto L_69;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_14;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_b8;
  r = <to_object>(undefined).path;
  s = <to_object>(undefined).maps;
  <to_object>(undefined);
  goto L_bc;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_6e;
  // [栈深重同步 1 -> 0]
  i = "".concat(r, "/", o.worker);
  let LiteWorker;
  let <class_fields_init>;
  class LiteWorker extends undefined { ... }
  <proto:LiteWorker>.addEventListener = function <atom:0>;
  <proto:LiteWorker>.postMessage = function <atom:0>;
  <proto:LiteWorker>.terminate = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LiteWorker>;
  LiteWorker = function <atom:0>;
  // close_loc <class_fields_init>
  a = new function <atom:0>(i, {type: "module", workerData: {maps: s}});
  a.addEventListener("message", t);
  return a; // async
}

// fn o  args=2 vars=7 closure=3 cpool=8 bc=480B file=math_jax/src/mathjax_src/adaptors/NodeMixin
// args: o, n
// locals: o#1, n#1, r, NodeAdaptor, <class_fields_init>
// closure: t, e, exports
function {
  let n#1;
  let o#1;
  o#1 = o;
  if (!((n === undefined))) goto L_10;
  n;
  n = {};
  n#1 = {};
  n = t.userOptions(t.defaultOptions({}, exports.NodeMixinOptions), n);
  let NodeAdaptor;
  let <class_fields_init>;
  class NodeAdaptor extends o { ... }
  <proto:NodeAdaptor>.fontSize = function <atom:0>;
  <proto:NodeAdaptor>.fontFamily = function <atom:0>;
  <proto:NodeAdaptor>.nodeSize = function <atom:0>;
  <proto:NodeAdaptor>.nodeBBox = function <atom:0>;
  <proto:NodeAdaptor>.createWorker = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NodeAdaptor>;
  NodeAdaptor = function <atom:0>;
  // close_loc <class_fields_init>
  r = function <atom:0>;
  if (!(n.badCSS)) goto L_f9;
  goto L_fa;
  // [栈深重同步 3 -> 2]
  null;
  {};
  if (!(n.badSizes)) goto L_13a;
  goto L_13b;
  // [栈深重同步 3 -> 2]
  null;
  {};
  function <atom:0>.OPTIONS = {};
  r.cjkPattern = new RegExp(["[", "ᄀ-ᅟ", "〈〉", "⺀-〾", "぀-㉇", "㉐-䶿", "一-꓆", "ꥠ-ꥼ", "가-힣", "豈-﫿", "︐-︙", "︰-﹫", "！-｠￠-￦", "𛀀-𛀁", "🈀-🉑", "𠀀-𿿽", "]"].join(""), "gu");
  return r;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=140B file=math_jax/src/mathjax_src/adaptors/NodeMixin
// args: require, module, exports
// locals: t, e, o
function {
  o = function o;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NodeMixinOptions = undefined;
  exports.NodeMixin = undefined;
  t = require("../util/Options");
  e = require("../util/AsyncLoad");
  exports.NodeMixinOptions = {badCSS: true, badSizes: true};
  exports.NodeMixin = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/adaptors/NodeMixin
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
