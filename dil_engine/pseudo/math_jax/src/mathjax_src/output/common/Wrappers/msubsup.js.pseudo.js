// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=105B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// locals: this
function {
  this = this;
  return this.childNodes[this.node.sub];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=120B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// locals: this
function {
  this = this;
  if (!(this.baseIsChar)) goto L_29;
  goto L_4e;
  // [栈深重同步 1 -> 0]
  return [this.getAdjustedIc(), -this.getV()];
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
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

// fn t  args=1 vars=4 closure=0 cpool=3 bc=52B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// args: t
// locals: s, CommonMsubMixin, <class_fields_init>
function {
  let CommonMsubMixin;
  let <class_fields_init>;
  class CommonMsubMixin extends t { ... }
  <proto:CommonMsubMixin>.scriptChild = function <atom:0>;
  <proto:CommonMsubMixin>.getOffset = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMsubMixin>;
  CommonMsubMixin = function <atom:0>;
  // close_loc <class_fields_init>
  s = function <atom:0>;
  function <atom:0>.useIC = false;
  return s;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=105B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// locals: this
function {
  this = this;
  return this.childNodes[this.node.sup];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=154B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// locals: this
function {
  this = this;
  if (!(this.baseRemoveIc)) goto L_4e;
  goto L_70;
  // [栈深重同步 2 -> 1]
  return [(this.getAdjustedIc() - this.baseIc), this.getU()];
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
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

// fn s  args=1 vars=3 closure=0 cpool=3 bc=39B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// args: t
// locals: CommonMsupMixin, <class_fields_init>
function {
  let CommonMsupMixin;
  let <class_fields_init>;
  class CommonMsupMixin extends t { ... }
  <proto:CommonMsupMixin>.scriptChild = function <atom:0>;
  <proto:CommonMsupMixin>.getOffset = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMsupMixin>;
  CommonMsupMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=62B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
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
  this.UVQ = null;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=105B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// locals: this
function {
  this = this;
  return this.childNodes[this.node.sub];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=105B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// locals: this
function {
  this = this;
  return this.childNodes[this.node.sup];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// locals: this
function {
  this = this;
  return this.supChild;
}

// fn <atom:0>  args=2 vars=17 closure=0 cpool=1 bc=1721B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// args: t, s
// locals: t#1, s#1, e, i, h, r, n, u, o, d, a, c, p, t#2, this
function {
  this = this;
  let s#1;
  let t#1;
  if (!((t === undefined))) goto L_57;
  t;
  t = this.subChild.getOuterBBox();
  t#1 = this.subChild.getOuterBBox();
  if (!((s === undefined))) goto L_a6;
  s;
  s = this.supChild.getOuterBBox();
  s#1 = this.supChild.getOuterBBox();
  let p;
  let c;
  let a;
  let d;
  let o;
  let u;
  let n;
  let r;
  let h;
  let i;
  let e;
  e = this.baseCore;
  i = e.getLineBBox(e.breakCount);
  if (!(this.UVQ)) goto L_181;
  return this.UVQ;
  h = this.font.params;
  r = (3 * h.rule_thickness);
  n = this.length2em(this.node.attributes.get("subscriptshift"), h.sub2);
  u = this.baseCharZero(((i.d * this.baseScale) + (h.sub_drop * t.rscale)));
  o = (s.d * s.rscale);
  d = (t.h * t.rscale);
  if (((undefined === undefined))) goto L_401;
  const _it1 = undefined;
  <done(_it1)>;
  a = <value(_it1)>;
  <done(_it1)>;
  c = <value(_it1)>;
  goto L_45c;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_3f3;
  // [栈深重同步 1 -> 0]
  p = ((a - o) - (d - c));
  if (!((p < r))) goto L_4db;
  let t#2;
  c = (c + (r - p));
  (c + (r - p));
  t#2 = ((0.8 * h.x_height) - (a - o));
  if (!((t#2 > 0))) goto L_4da;
  a = (a + t#2);
  (a + t#2);
  c = (c - t#2);
  (c - t#2);
  a = Math.max(this.length2em(this.node.attributes.get("superscriptshift"), a), a);
  Math.max(this.length2em(this.node.attributes.get("superscriptshift"), a), a);
  c = Math.max(this.length2em(this.node.attributes.get("subscriptshift"), c), c);
  Math.max(this.length2em(this.node.attributes.get("subscriptshift"), c), c);
  p = ((a - o) - (d - c));
  ((a - o) - (d - c));
  this.UVQ = [a, -c, p];
  return this.UVQ;
}

// fn <atom:0>  args=1 vars=9 closure=0 cpool=0 bc=835B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// args: t
// locals: s, e, i, h, r, n, u, this
function {
  this = this;
  let u;
  let n;
  let r;
  let h;
  let i;
  let e;
  let s;
  if (((undefined === undefined))) goto L_2a;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  e = <value(_it1)>;
  goto L_bf;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  i = this.getBaseWidth();
  h = this.getAdjustedIc();
  if (((undefined === undefined))) goto L_120;
  const _it2 = undefined;
  <done(_it2)>;
  r = <value(_it2)>;
  <done(_it2)>;
  n = <value(_it2)>;
  goto L_149;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_112;
  // [栈深重同步 1 -> 0]
  u = (t.d - this.baseChild.getLineBBox(this.baseChild.breakCount).d);
  if (!(this.baseIsChar)) goto L_26a;
  goto L_26d;
  // [栈深重同步 5 -> 4]
  t.combine(s, (i + h), (n - u));
  t.combine(e, (i + h), (r - u));
  t.w = (t.w + this.font.params.scriptspace);
  return t;
}

// fn e  args=1 vars=4 closure=0 cpool=6 bc=76B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// args: t
// locals: s, CommonMsubsupMixin, <class_fields_init>
function {
  let CommonMsubsupMixin;
  let <class_fields_init>;
  class CommonMsubsupMixin extends t { ... }
  <proto:CommonMsubsupMixin>.subChild = function <atom:0>;
  <proto:CommonMsubsupMixin>.supChild = function <atom:0>;
  <proto:CommonMsubsupMixin>.scriptChild = function <atom:0>;
  <proto:CommonMsubsupMixin>.getUVQ = function <atom:0>;
  <proto:CommonMsubsupMixin>.appendScripts = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMsubsupMixin>;
  CommonMsubsupMixin = function <atom:0>;
  // close_loc <class_fields_init>
  s = function <atom:0>;
  function <atom:0>.useIC = false;
  return s;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=132B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// args: require, module, exports
// locals: t, s, e
function {
  t = function t;
  s = function s;
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMsubMixin = undefined;
  exports.CommonMsupMixin = undefined;
  exports.CommonMsubsupMixin = undefined;
  exports.CommonMsubMixin = t;
  exports.CommonMsupMixin = s;
  exports.CommonMsubsupMixin = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/msubsup
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
