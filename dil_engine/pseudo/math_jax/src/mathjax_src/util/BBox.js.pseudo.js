// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=27B file=math_jax/src/mathjax_src/util/BBox
// closure: BBox
function {
  return new BBox({h: 0, d: 0, w: 0});
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=8B file=math_jax/src/mathjax_src/util/BBox
// closure: BBox
function {
  return new BBox();
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=450B file=math_jax/src/mathjax_src/util/BBox
// args: h
// locals: h#1, this
// closure: <class_fields_init>, t
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let h#1;
  if (!((h === undefined))) goto L_74;
  h;
  h = {w: 0, h: -t.BIGDIMEN, d: -t.BIGDIMEN};
  h#1 = {w: 0, h: -t.BIGDIMEN, d: -t.BIGDIMEN};
  if ((h.w)) goto L_9d;
  this.w = 0;
  if (!(("h" in h))) goto L_d4;
  goto L_f9;
  // [栈深重同步 2 -> 1]
  this.h = -t.BIGDIMEN;
  if (!(("d" in h))) goto L_130;
  goto L_155;
  // [栈深重同步 2 -> 1]
  this.d = -t.BIGDIMEN;
  this.dx = 0;
  this.sk = 0;
  this.oc = 0;
  this.ic = 0;
  this.R = 0;
  this.L = 0;
  this.rscale = 1;
  this.scale = 1;
  this.pwidth = "";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=73B file=math_jax/src/mathjax_src/util/BBox
// locals: this
// closure: t
function {
  this = this;
  this.w = 0;
  this.d = -t.BIGDIMEN;
  this.h = -t.BIGDIMEN;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=269B file=math_jax/src/mathjax_src/util/BBox
// locals: this
// closure: t
function {
  this = this;
  if (!((this.w === -t.BIGDIMEN))) goto L_5a;
  this.w = 0;
  0;
  if (!((this.h === -t.BIGDIMEN))) goto L_b3;
  this.h = 0;
  0;
  if (!((this.d === -t.BIGDIMEN))) goto L_10c;
  this.d = 0;
  0;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=138B file=math_jax/src/mathjax_src/util/BBox
// args: t
// locals: this
function {
  this = this;
  this.w = (this.w * t);
  this.h = (this.h * t);
  this.d = (this.d * t);
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=0 bc=452B file=math_jax/src/mathjax_src/util/BBox
// args: t, h, s
// locals: t#1, h#1, s#1, i, e, d, o, this
function {
  this = this;
  let s#1;
  let h#1;
  let t#1;
  t#1 = t;
  if (!((h === undefined))) goto L_16;
  h;
  h = 0;
  h#1 = 0;
  if (!((s === undefined))) goto L_1f;
  s;
  s = 0;
  s#1 = 0;
  let o;
  let d;
  let e;
  let i;
  i = t.rscale;
  e = (h + (i * ((t.w + t.L) + t.R)));
  d = (s + (i * t.h));
  o = ((i * t.d) - s);
  if (!((e > this.w))) goto L_14d;
  this.w = e;
  e;
  if (!((d > this.h))) goto L_188;
  this.h = d;
  d;
  if (!((o > this.d))) goto L_1c3;
  this.d = o;
  o;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=446B file=math_jax/src/mathjax_src/util/BBox
// args: t
// locals: h, this
function {
  this = this;
  let h;
  h = t.rscale;
  this.w = (this.w + (h * ((t.w + t.L) + t.R)));
  if (!(((h * t.h) > this.h))) goto L_13e;
  this.h = (h * t.h);
  (h * t.h);
  if (!(((h * t.d) > this.d))) goto L_1bd;
  this.d = (h * t.d);
  (h * t.d);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=218B file=math_jax/src/mathjax_src/util/BBox
// args: t
// locals: this
function {
  this = this;
  this.h = t.h;
  this.d = t.d;
  this.w = t.w;
  if (!(t.pwidth)) goto L_d9;
  this.pwidth = t.pwidth;
  t.pwidth;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=63B file=math_jax/src/mathjax_src/util/BBox
// locals: t, this
// closure: BBox
function {
  this = this;
  let t;
  t = new BBox();
  Object.assign(t, this);
  return t;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=10 bc=285B file=math_jax/src/mathjax_src/util/BBox
// args: require, module, exports
// locals: t, BBox, <class_fields_init>, BBox#1
function {
  let BBox#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BBox = undefined;
  t = require("./lengths");
  let BBox;
  let <class_fields_init>;
  class BBox extends undefined { ... }
  function <atom:0>.zero = function <atom:0>;
  function <atom:0>.empty = function <atom:0>;
  <proto:BBox>.empty = function <atom:0>;
  <proto:BBox>.clean = function <atom:0>;
  <proto:BBox>.rescale = function <atom:0>;
  <proto:BBox>.combine = function <atom:0>;
  <proto:BBox>.append = function <atom:0>;
  <proto:BBox>.updateFrom = function <atom:0>;
  <proto:BBox>.copy = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BBox>;
  BBox = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc BBox
  BBox#1 = function <atom:0>;
  exports.BBox = BBox#1;
  BBox#1.fullWidth = "100%";
  BBox#1.boxSides = [["Top", 0, "h"], ["Right", 1, "w"], ["Bottom", 2, "d"], ["Left", 3, "w"]];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/BBox
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
