// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=510B file=math_jax/src/mathjax_src/output/svg/Wrappers/scriptbase
// args: e
// locals: t, s, i, r, this
function {
  this = this;
  let r;
  let i;
  let s;
  let t;
  if (!(this.toEmbellishedSVG(e))) goto L_39;
  return;
  t = this.standardSvgNodes(e);
  s = this.getBaseWidth();
  if (((undefined === undefined))) goto L_99;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_c2;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_8d;
  // [栈深重同步 1 -> 0]
  this.baseChild.toSVG(t);
  this.baseChild.place(0, 0);
  this.scriptChild.toSVG([t[(t.length - 1)]]);
  this.scriptChild.place((s + i), r);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/scriptbase
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

// fn <atom:0>  args=0 vars=4 closure=2 cpool=2 bc=126B file=math_jax/src/mathjax_src/output/svg/Wrappers/scriptbase
// locals: s, i, SvgScriptbase, <class_fields_init>
// closure: t, e
function {
  let i;
  i = t.CommonScriptbaseMixin(e.SvgWrapper);
  let SvgScriptbase;
  let <class_fields_init>;
  class SvgScriptbase extends i { ... }
  <proto:SvgScriptbase>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgScriptbase>;
  SvgScriptbase = function <atom:0>;
  // close_loc <class_fields_init>
  s = function <atom:0>;
  function <atom:0>.kind = "scriptbase";
  return s;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=103B file=math_jax/src/mathjax_src/output/svg/Wrappers/scriptbase
// args: require, module, exports
// locals: e, t
function {
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgScriptbase = undefined;
  e = require("../Wrapper");
  t = require("../../common/Wrappers/scriptbase");
  exports.SvgScriptbase = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/scriptbase
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
