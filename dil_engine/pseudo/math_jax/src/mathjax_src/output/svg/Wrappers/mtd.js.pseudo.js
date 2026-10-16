// fn <atom:0>  args=5 vars=13 closure=0 cpool=2 bc=603B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtd
// args: t, e, i, r, s
// locals: o, d, n, a, h, l, u, this
function {
  this = this;
  let u;
  let l;
  let h;
  let a;
  let n;
  let d;
  let o;
  o = this.getBBox();
  d = Math.max(o.h, 0.75);
  n = Math.max(o.d, 0.25);
  a = this.node.attributes.get("columnalign");
  h = this.node.attributes.get("rowalign");
  l = this.getAlignX(i, o, a);
  u = this.getAlignY(r, s, d, n, h);
  this.place((t + l), (e + u));
  return [l, u];
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=0 bc=544B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtd
// args: t, e, i, r
// locals: s, o, this
function {
  this = this;
  let o;
  let s;
  s = this.adaptor;
  o = this.firstChild();
  if (!(o)) goto L_21f;
  if (!(("rect" === s.kind(o)))) goto L_21f;
  if (!(s.getAttribute(o, "data-bgcolor"))) goto L_21f;
  s.setAttribute(o, "x", this.fixed(t));
  s.setAttribute(o, "y", this.fixed(e));
  s.setAttribute(o, "width", this.fixed(i));
  s.setAttribute(o, "height", this.fixed(r));
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtd
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=3 bc=231B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtd
// locals: r, s, SvgMtd, <class_fields_init>
// closure: e, t, i
function {
  let s;
  s = e.CommonMtdMixin(t.SvgWrapper);
  let SvgMtd;
  let <class_fields_init>;
  class SvgMtd extends s { ... }
  <proto:SvgMtd>.placeCell = function <atom:0>;
  <proto:SvgMtd>.placeColor = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMtd>;
  SvgMtd = function <atom:0>;
  // close_loc <class_fields_init>
  r = function <atom:0>;
  function <atom:0>.kind = i.MmlMtd.prototype.kind;
  return r;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=114B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtd
// args: require, module, exports
// locals: t, e, i
function {
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMtd = undefined;
  t = require("../Wrapper");
  e = require("../../common/Wrappers/mtd");
  i = require("../../../core/MmlTree/MmlNodes/mtd");
  exports.SvgMtd = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtd
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
