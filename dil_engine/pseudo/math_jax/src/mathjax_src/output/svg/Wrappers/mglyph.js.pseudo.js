// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=819B file=math_jax/src/mathjax_src/output/svg/Wrappers/mglyph
// args: t
// locals: e, r, i, s, h, a, this
function {
  this = this;
  let a;
  let h;
  let s;
  let i;
  let r;
  let e;
  e = this.standardSvgNodes(t);
  if (!(this.charWrapper)) goto L_ae;
  this.charWrapper.toSVG(e);
  return;
  if (((undefined === undefined))) goto L_fd;
  r = <to_object>(undefined).src;
  i = <to_object>(undefined).alt;
  <to_object>(undefined);
  goto L_173;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_b3;
  // [栈深重同步 1 -> 0]
  s = this.fixed(this.height);
  if ((this.valign)) goto L_287;
  h = {width: this.fixed(this.width), height: s, transform: (("translate(0 " + this.fixed((this.height + 0))) + ") matrix(1 0 0 -1 0 0)"), preserveAspectRatio: "none", aria-label: i, href: r};
  a = this.svg("image", h);
  this.adaptor.append(e[0], a);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/mglyph
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=223B file=math_jax/src/mathjax_src/output/svg/Wrappers/mglyph
// locals: i, s, SvgMglyph, <class_fields_init>
// closure: e, t, r
function {
  let s;
  s = e.CommonMglyphMixin(t.SvgWrapper);
  let SvgMglyph;
  let <class_fields_init>;
  class SvgMglyph extends s { ... }
  <proto:SvgMglyph>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMglyph>;
  SvgMglyph = function <atom:0>;
  // close_loc <class_fields_init>
  i = function <atom:0>;
  function <atom:0>.kind = r.MmlMglyph.prototype.kind;
  return i;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=114B file=math_jax/src/mathjax_src/output/svg/Wrappers/mglyph
// args: require, module, exports
// locals: t, e, r
function {
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMglyph = undefined;
  t = require("../Wrapper");
  e = require("../../common/Wrappers/mglyph");
  r = require("../../../core/MmlTree/MmlNodes/mglyph");
  exports.SvgMglyph = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/mglyph
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
