// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/output/common/Wrappers/mspace
// locals: this
function {
  this = this;
  return this.node.canBreak;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=42B file=math_jax/src/mathjax_src/output/common/Wrappers/mspace
// locals: this
function {
  this = this;
  if (!(this.breakStyle)) goto L_28;
  return 1;
  return 0;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=189B file=math_jax/src/mathjax_src/output/common/Wrappers/mspace
// args: e
// locals: e#1, this
function {
  this = this;
  let e#1;
  if (!((e === undefined))) goto L_d;
  e;
  e = "";
  e#1 = "";
  if ((e)) goto L_b3;
  if ((this.node.hasNewline)) goto L_a9;
  if (!(this.node.getProperty("forcebreak"))) goto L_b2;
  goto L_b3;
  // [栈深重同步 2 -> 1]
  this.breakStyle = "";
  return;
}

// fn <atom:0>  args=3 vars=9 closure=1 cpool=0 bc=106B file=math_jax/src/mathjax_src/output/common/Wrappers/mspace
// args: e, t, i
// locals: e#1, t#1, i#1, this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let i#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((i === undefined))) goto L_20;
  i;
  i = null;
  i#1 = null;
  this = new new.target(e, t, i);
  if (!(<class_fields_init>)) goto L_3c;
  <class_fields_init>.call(this);
  new new.target(e, t, i);
  this.setBreakStyle();
  return this;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=368B file=math_jax/src/mathjax_src/output/common/Wrappers/mspace
// args: e, t
// locals: e#1, t#1, i, this
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_13;
  t;
  t = false;
  t#1 = false;
  let i;
  i = this.node.attributes;
  e.w = this.length2em(i.get("width"), 0);
  e.h = this.length2em(i.get("height"), 0);
  e.d = this.length2em(i.get("depth"), 0);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=598B file=math_jax/src/mathjax_src/output/common/Wrappers/mspace
// args: i
// locals: n, o, s, this
// closure: t, e
function {
  this = this;
  let s;
  let o;
  let n;
  n = this.node.attributes.get("data-lineleading");
  o = this.length2em(n, this.linebreakOptions.lineleading);
  s = t.LineBBox.from(e.BBox.zero(), o);
  if (!((1 === i))) goto L_251;
  s.getIndentData(this.node);
  s.w = this.getBBox().w;
  s.isFirst = (0 === s.w);
  (0 === s.w);
  return s;
}

// fn i  args=1 vars=3 closure=2 cpool=6 bc=63B file=math_jax/src/mathjax_src/output/common/Wrappers/mspace
// args: i
// locals: CommonMspaceMixin, <class_fields_init>
// closure: t, e
function {
  let CommonMspaceMixin;
  let <class_fields_init>;
  class CommonMspaceMixin extends i { ... }
  <proto:CommonMspaceMixin>.canBreak = function <atom:0>;
  <proto:CommonMspaceMixin>.breakCount = function <atom:0>;
  <proto:CommonMspaceMixin>.setBreakStyle = function <atom:0>;
  <proto:CommonMspaceMixin>.computeBBox = function <atom:0>;
  <proto:CommonMspaceMixin>.computeLineBBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMspaceMixin>;
  CommonMspaceMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=math_jax/src/mathjax_src/output/common/Wrappers/mspace
// args: require, module, exports
// locals: e, t, i
function {
  i = function i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMspaceMixin = undefined;
  e = require("../../../util/BBox");
  t = require("../LineBBox");
  exports.CommonMspaceMixin = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mspace
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
