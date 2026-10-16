// fn <atom:0>  args=1 vars=9 closure=0 cpool=0 bc=601B file=math_jax/src/mathjax_src/output/svg/Wrappers/mpadded
// args: e
// locals: d, t, r, s, i, a, o, this
function {
  this = this;
  let o;
  let a;
  let i;
  let s;
  let r;
  let t;
  let d;
  if (!(this.toEmbellishedSVG(e))) goto L_42;
  return;
  d = this.standardSvgNodes(e);
  if (((undefined === undefined))) goto L_98;
  const _it1 = undefined;
  <done(_it1)>;
  <value(_it1)>;
  <done(_it1)>;
  <value(_it1)>;
  <done(_it1)>;
  <value(_it1)>;
  <done(_it1)>;
  <value(_it1)>;
  <done(_it1)>;
  <value(_it1)>;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  goto L_c1;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_6f;
  // [栈深重同步 1 -> 0]
  if ((this.node.attributes.get("data-align"))) goto L_137;
  a = "left";
  if (!((t < 0))) goto L_169;
  if (!(("left" !== a))) goto L_169;
  if (!(("center" === a))) goto L_164;
  goto L_16a;
  // [栈深重同步 2 -> 1]
  goto L_16a;
  // [栈深重同步 2 -> 1]
  o = ((r + i) - 0);
  if ((o)) goto L_177;
  if (!(s)) goto L_22e;
  d = [this.adaptor.append(d[0], this.svg("g"))];
  [this.adaptor.append(d[0], this.svg("g"))];
  this.place(o, s, d[0]);
  this.addChildren(d);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/mpadded
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=223B file=math_jax/src/mathjax_src/output/svg/Wrappers/mpadded
// locals: r, s, SvgMpadded, <class_fields_init>
// closure: d, e, t
function {
  let s;
  s = d.CommonMpaddedMixin(e.SvgWrapper);
  let SvgMpadded;
  let <class_fields_init>;
  class SvgMpadded extends s { ... }
  <proto:SvgMpadded>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMpadded>;
  SvgMpadded = function <atom:0>;
  // close_loc <class_fields_init>
  r = function <atom:0>;
  function <atom:0>.kind = t.MmlMpadded.prototype.kind;
  return r;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=114B file=math_jax/src/mathjax_src/output/svg/Wrappers/mpadded
// args: require, module, exports
// locals: e, d, t
function {
  let t;
  let d;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMpadded = undefined;
  e = require("../Wrapper");
  d = require("../../common/Wrappers/mpadded");
  t = require("../../../core/MmlTree/MmlNodes/mpadded");
  exports.SvgMpadded = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/mpadded
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
