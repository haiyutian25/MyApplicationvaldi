// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=229B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfenced
// args: e
// locals: r, this
function {
  this = this;
  let r;
  r = this.standardSvgNodes(e);
  this.setChildrenParent(this.mrow);
  this.mrow.toSVG(r);
  this.setChildrenParent(this);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=63B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfenced
// args: e
// locals: r, this
function {
  this = this;
  let r;
  for (const r of this.childNodes) {
    r.parent = e;
  }
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfenced
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=3 bc=231B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfenced
// locals: n, s, SvgMfenced, <class_fields_init>
// closure: r, e, t
function {
  let s;
  s = r.CommonMfencedMixin(e.SvgWrapper);
  let SvgMfenced;
  let <class_fields_init>;
  class SvgMfenced extends s { ... }
  <proto:SvgMfenced>.toSVG = function <atom:0>;
  <proto:SvgMfenced>.setChildrenParent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMfenced>;
  SvgMfenced = function <atom:0>;
  // close_loc <class_fields_init>
  n = function <atom:0>;
  function <atom:0>.kind = t.MmlMfenced.prototype.kind;
  return n;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=114B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfenced
// args: require, module, exports
// locals: e, r, t
function {
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMfenced = undefined;
  e = require("../Wrapper");
  r = require("../../common/Wrappers/mfenced");
  t = require("../../../core/MmlTree/MmlNodes/mfenced");
  exports.SvgMfenced = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/mfenced
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
