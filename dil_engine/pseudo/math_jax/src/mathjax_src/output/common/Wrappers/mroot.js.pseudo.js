// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/output/common/Wrappers/mroot
function {
  return 1;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=201B file=math_jax/src/mathjax_src/output/common/Wrappers/mroot
// args: t, o, e
// locals: r, s, this
function {
  this = this;
  let s;
  let r;
  r = this.childNodes[this.root].getOuterBBox();
  s = this.getRootDimens(o, e)[1];
  t.combine(r, 0, s);
  return;
}

// fn <atom:0>  args=2 vars=10 closure=0 cpool=2 bc=537B file=math_jax/src/mathjax_src/output/common/Wrappers/mroot
// args: t, o
// locals: e, r, s, i, n, h, c, this
function {
  this = this;
  let c;
  let h;
  let n;
  let i;
  let s;
  let r;
  let e;
  e = this.surd;
  r = this.childNodes[this.root].getOuterBBox();
  if (!((e.size < 0))) goto L_d4;
  goto L_d6;
  // [栈深重同步 1 -> 0]
  s = (0.6 * t.w);
  if (((undefined === undefined))) goto L_14a;
  i = <to_object>(undefined).w;
  n = <to_object>(undefined).rscale;
  <to_object>(undefined);
  goto L_150;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_ff;
  // [栈深重同步 1 -> 0]
  h = Math.max(i, (s / n));
  c = Math.max(0, (h - i));
  return [((h * n) - s), this.rootHeight(r, t, e.size, o), c];
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=2 bc=207B file=math_jax/src/mathjax_src/output/common/Wrappers/mroot
// args: t, o, e, r
// locals: s
function {
  let s;
  s = (o.h + o.d);
  if (!((e < 0))) goto L_52;
  goto L_58;
  // [栈深重同步 1 -> 0]
  return (((0.55 * s) - (s - r)) + Math.max(0, (t.d * t.rscale)));
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=188B file=math_jax/src/mathjax_src/output/common/Wrappers/mroot
// locals: t, this
function {
  this = this;
  let t;
  t = this.childNodes[this.root].getOuterBBox();
  return (0.4 + (t.w * t.rscale));
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/mroot
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

// fn t  args=1 vars=3 closure=0 cpool=6 bc=63B file=math_jax/src/mathjax_src/output/common/Wrappers/mroot
// args: t
// locals: CommonMrootMixin, <class_fields_init>
function {
  let CommonMrootMixin;
  let <class_fields_init>;
  class CommonMrootMixin extends t { ... }
  <proto:CommonMrootMixin>.root = function <atom:0>;
  <proto:CommonMrootMixin>.combineRootBBox = function <atom:0>;
  <proto:CommonMrootMixin>.getRootDimens = function <atom:0>;
  <proto:CommonMrootMixin>.rootHeight = function <atom:0>;
  <proto:CommonMrootMixin>.rootWidth = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMrootMixin>;
  CommonMrootMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=math_jax/src/mathjax_src/output/common/Wrappers/mroot
// args: require, module, exports
// locals: t
function {
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMrootMixin = undefined;
  exports.CommonMrootMixin = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mroot
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
