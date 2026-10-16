// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=235B file=math_jax/src/mathjax_src/output/svg/Wrappers/TeXAtom
// args: e
// locals: this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  super["toSVG"].call(this, e);
  this.adaptor.setAttribute(this.dom[0], "data-mjx-texclass", r.TEXCLASSNAMES[this.node.texClass]);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/TeXAtom
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

// fn <atom:0>  args=0 vars=4 closure=4 cpool=2 bc=223B file=math_jax/src/mathjax_src/output/svg/Wrappers/TeXAtom
// locals: s, m, SvgTeXAtom, <class_fields_init>
// closure: r, t, e, o
function {
  let m;
  m = t.CommonTeXAtomMixin(e.SvgWrapper);
  let SvgTeXAtom;
  let <class_fields_init>;
  class SvgTeXAtom extends m { ... }
  <proto:SvgTeXAtom>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgTeXAtom>;
  SvgTeXAtom = function <atom:0>;
  // close_loc <class_fields_init>
  s = function <atom:0>;
  function <atom:0>.kind = o.TeXAtom.prototype.kind;
  return s;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=125B file=math_jax/src/mathjax_src/output/svg/Wrappers/TeXAtom
// args: require, module, exports
// locals: e, t, o, r
function {
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgTeXAtom = undefined;
  e = require("../Wrapper");
  t = require("../../common/Wrappers/TeXAtom");
  o = require("../../../core/MmlTree/MmlNodes/TeXAtom");
  r = require("../../../core/MmlTree/MmlNode");
  exports.SvgTeXAtom = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/TeXAtom
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
