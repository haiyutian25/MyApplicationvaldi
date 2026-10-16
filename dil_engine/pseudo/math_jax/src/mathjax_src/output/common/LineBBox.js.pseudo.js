// fn <atom:0>  args=3 vars=8 closure=0 cpool=0 bc=118B file=math_jax/src/mathjax_src/output/common/LineBBox
// args: t, i, n
// locals: t#1, i#1, n#1, e, this
function {
  this = this;
  let n#1;
  let i#1;
  let t#1;
  t#1 = t;
  i#1 = i;
  if (!((n === undefined))) goto L_18;
  n;
  n = null;
  n#1 = null;
  let e;
  e = new this();
  Object.assign(e, t);
  e.lineLeading = i;
  if (!(n)) goto L_71;
  e.indentData = n;
  n;
  return e;
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=0 bc=152B file=math_jax/src/mathjax_src/output/common/LineBBox
// args: t, i
// locals: t#1, i#1, this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let i#1;
  let t#1;
  t#1 = t;
  if (!((i === undefined))) goto L_1a;
  i;
  i = null;
  i#1 = null;
  this = new new.target(t);
  if (!(<class_fields_init>)) goto L_33;
  <class_fields_init>.call(this);
  new new.target(t);
  this.indentData = null;
  this.isFirst = false;
  this.originalL = this.L;
  if (!(i)) goto L_93;
  this.start = i;
  i;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=321B file=math_jax/src/mathjax_src/output/common/LineBBox
// args: t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(this.isFirst)) goto L_85;
  t.originalL = (t.originalL + t.L);
  t.L = 0;
  0;
  if (!(t.indentData)) goto L_d9;
  this.indentData = t.indentData;
  t.indentData;
  this.lineLeading = t.lineLeading;
  super["append"].call(this, t);
  this.isFirst = t.isFirst;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=176B file=math_jax/src/mathjax_src/output/common/LineBBox
// locals: t, this
// closure: LineBBox
function {
  this = this;
  let t;
  t = LineBBox.from(this, this.lineLeading);
  t.indentData = this.indentData;
  t.lineLeading = this.lineLeading;
  return t;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=589B file=math_jax/src/mathjax_src/output/common/LineBBox
// args: t
// locals: i, n, e, s, a, d, this
function {
  this = this;
  let d;
  let a;
  let s;
  let e;
  let n;
  let i;
  if (((undefined === undefined))) goto L_f5;
  i = <to_object>(undefined).indentalign;
  n = <to_object>(undefined).indentshift;
  e = <to_object>(undefined).indentalignfirst;
  s = <to_object>(undefined).indentshiftfirst;
  a = <to_object>(undefined).indentalignlast;
  d = <to_object>(undefined).indentshiftlast;
  <to_object>(undefined);
  goto L_13f;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  if (!(("indentalign" === e))) goto L_19b;
  e = t.attributes.getInherited("indentalign");
  t.attributes.getInherited("indentalign");
  if (!(("indentshift" === s))) goto L_1f8;
  s = t.attributes.getInherited("indentshift");
  t.attributes.getInherited("indentshift");
  if (!(("indentalign" === a))) goto L_20d;
  a = i;
  i;
  if (!(("indentshift" === d))) goto L_222;
  d = n;
  n;
  this.indentData = [[e, s], [i, n], [a, d]];
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=17B file=math_jax/src/mathjax_src/output/common/LineBBox
// args: <atom:0>
// locals: t, i
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  return [t, i];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=72B file=math_jax/src/mathjax_src/output/common/LineBBox
// args: t
function {
  return t.indentData.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=6 bc=198B file=math_jax/src/mathjax_src/output/common/LineBBox
// args: require, module, exports
// locals: t, LineBBox, <class_fields_init>, LineBBox#1
function {
  let LineBBox#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LineBBox = undefined;
  t = require("../../util/BBox");
  let LineBBox;
  let <class_fields_init>;
  class LineBBox extends t.BBox { ... }
  function <atom:0>.from = function <atom:0>;
  <proto:LineBBox>.append = function <atom:0>;
  <proto:LineBBox>.copy = function <atom:0>;
  <proto:LineBBox>.getIndentData = function <atom:0>;
  <proto:LineBBox>.copyIndentData = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LineBBox>;
  LineBBox = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc LineBBox
  LineBBox#1 = function <atom:0>;
  exports.LineBBox = LineBBox#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/LineBBox
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
