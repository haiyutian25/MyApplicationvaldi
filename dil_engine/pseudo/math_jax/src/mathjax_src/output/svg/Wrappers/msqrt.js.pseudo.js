// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=62B file=math_jax/src/mathjax_src/output/svg/Wrappers/msqrt
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
  this.dx = 0;
  return this;
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/output/svg/Wrappers/msqrt
// args: t, s, e, r
function {
  return 0;
}

// fn <atom:0>  args=1 vars=13 closure=0 cpool=0 bc=1451B file=math_jax/src/mathjax_src/output/svg/Wrappers/msqrt
// args: t
// locals: s, e, r, o, i, d, h, a, n, p, c, this
function {
  this = this;
  let c;
  let p;
  let n;
  let a;
  let h;
  let d;
  let i;
  let o;
  let r;
  let e;
  let s;
  s = this.surd;
  e = this.childNodes[this.base];
  if (!(this.root)) goto L_fe;
  goto L_ff;
  // [栈深重同步 1 -> 0]
  r = null;
  o = s.getBBox();
  i = e.getOuterBBox();
  d = this.getPQ(o)[1];
  h = (this.font.params.surd_height * this.bbox.scale);
  a = ((i.h + d) + h);
  n = this.standardSvgNodes(t);
  s.toSVG(n);
  p = this.addRoot(n, r, o, a);
  c = this.adaptor.append(n[0], this.svg("g"));
  e.toSVG([c]);
  s.place(p, (a - o.h));
  e.place((p + o.w), 0);
  this.adaptor.append(n[(n.length - 1)], this.svg("rect", {width: this.fixed(i.w), height: this.fixed(h), x: this.fixed((p + o.w)), y: this.fixed((a - h))}));
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=3 bc=231B file=math_jax/src/mathjax_src/output/svg/Wrappers/msqrt
// locals: r, o, SvgMsqrt, <class_fields_init>
// closure: s, t, e
function {
  let o;
  o = s.CommonMsqrtMixin(t.SvgWrapper);
  let SvgMsqrt;
  let <class_fields_init>;
  class SvgMsqrt extends o { ... }
  <proto:SvgMsqrt>.addRoot = function <atom:0>;
  <proto:SvgMsqrt>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMsqrt>;
  SvgMsqrt = function <atom:0>;
  // close_loc <class_fields_init>
  r = function <atom:0>;
  function <atom:0>.kind = e.MmlMsqrt.prototype.kind;
  return r;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=114B file=math_jax/src/mathjax_src/output/svg/Wrappers/msqrt
// args: require, module, exports
// locals: t, s, e
function {
  let e;
  let s;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMsqrt = undefined;
  t = require("../Wrapper");
  s = require("../../common/Wrappers/msqrt");
  e = require("../../../core/MmlTree/MmlNodes/msqrt");
  exports.SvgMsqrt = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/msqrt
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
