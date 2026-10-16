// fn <atom:0>  args=4 vars=9 closure=0 cpool=0 bc=241B file=math_jax/src/mathjax_src/output/svg/Wrappers/mroot
// args: o, e, r, t
// locals: s, n, i, c, this
function {
  this = this;
  let c;
  let i;
  let n;
  let s;
  e.toSVG(o);
  if (((undefined === undefined))) goto L_4b;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  goto L_76;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_3b;
  // [栈深重同步 1 -> 0]
  c = e.getOuterBBox();
  e.place((i * c.rscale), n);
  return s;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/mroot
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=223B file=math_jax/src/mathjax_src/output/svg/Wrappers/mroot
// locals: t, s, SvgMroot, <class_fields_init>
// closure: o, r, e
function {
  let s;
  s = o.CommonMrootMixin(r.SvgMsqrt);
  let SvgMroot;
  let <class_fields_init>;
  class SvgMroot extends s { ... }
  <proto:SvgMroot>.addRoot = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMroot>;
  SvgMroot = function <atom:0>;
  // close_loc <class_fields_init>
  t = function <atom:0>;
  function <atom:0>.kind = e.MmlMroot.prototype.kind;
  return t;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=114B file=math_jax/src/mathjax_src/output/svg/Wrappers/mroot
// args: require, module, exports
// locals: o, e, r
function {
  let r;
  let e;
  let o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMroot = undefined;
  o = require("../../common/Wrappers/mroot");
  e = require("../../../core/MmlTree/MmlNodes/mroot");
  r = require("./msqrt");
  exports.SvgMroot = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/mroot
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
