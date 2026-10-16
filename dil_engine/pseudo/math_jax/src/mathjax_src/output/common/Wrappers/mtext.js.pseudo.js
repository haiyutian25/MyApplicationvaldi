// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=64B file=math_jax/src/mathjax_src/output/common/Wrappers/mtext
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
  this.breakPoints = [];
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=498B file=math_jax/src/mathjax_src/output/common/Wrappers/mtext
// args: t
// locals: e, t#1, this
function {
  this = this;
  let e;
  e = this.textNode;
  if (!(!e)) goto L_135;
  let t#1;
  t#1 = this.node.factory.create("text");
  t#1.parent = this.node;
  this.textNode = this.factory.wrap(t#1);
  e = this.factory.wrap(t#1);
  this.factory.wrap(t#1);
  e.parent = this;
  e.node.setText(t);
  e.invalidateBBox(false);
  return e.getBBox().w;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/output/common/Wrappers/mtext
// locals: this
function {
  this = this;
  return this.breakPoints.length;
}

// fn <atom:0>  args=0 vars=8 closure=0 cpool=0 bc=1044B file=math_jax/src/mathjax_src/output/common/Wrappers/mtext
// locals: t, e, i, o, r, n, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  let e;
  let t;
  t = this.jax.options;
  e = this.jax.math.outputData;
  if ((!!e.merrorFamily)) goto L_10b;
  if (!(!!t.merrorFont)) goto L_17c;
  i = this.node.Parent.isKind("merror");
  if ((e.mtextFamily)) goto L_1d0;
  if ((t.mtextFont)) goto L_1d0;
  if (!(i)) goto L_405;
  let n;
  let r;
  let o;
  o = this.node.attributes.get("mathvariant");
  if ((this.constructor.INHERITFONTS[o])) goto L_303;
  r = this.jax.font.getCssFont(o);
  if ((r[0])) goto L_3b0;
  if (!(i)) goto L_364;
  if ((e.merrorFamily)) goto L_3b0;
  goto L_3b0;
  // [栈深重同步 1 -> 0]
  if ((e.mtextFamily)) goto L_3b0;
  n = t.mtextFont;
  if (!(r[2])) goto L_3e8;
  goto L_3e9;
  // [栈深重同步 5 -> 4]
  if (!(r[1])) goto L_3f7;
  goto L_3f8;
  // [栈深重同步 6 -> 5]
  this.variant = this.explicitVariant(n, "", "");
  return;
  super["getVariant"].call(this);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/output/common/Wrappers/mtext
// args: t
// locals: this
function {
  this = this;
  this.breakPoints.push(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=16B file=math_jax/src/mathjax_src/output/common/Wrappers/mtext
// locals: this
function {
  this = this;
  this.breakPoints = [];
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=3 bc=479B file=math_jax/src/mathjax_src/output/common/Wrappers/mtext
// args: e
// locals: i, this
// closure: t
function {
  this = this;
  let i;
  i = t.LineBBox.from(this.getOuterBBox(), this.linebreakOptions.lineleading);
  if (!(this.breakCount)) goto L_1db;
  i.w = this.getBreakWidth(e);
  if (!((0 === e))) goto L_14c;
  i.R = 0;
  goto L_1d6;
  // [栈深重同步 1 -> 0]
  i.L = 0;
  i.indentData = [["left", "0"], ["left", "0"], ["left", "0"]];
  if (!((e === this.breakCount))) goto L_1d6;
  this.addRightBorders(i);
  return i;
  return i;
}

// fn <atom:0>  args=1 vars=9 closure=0 cpool=4 bc=956B file=math_jax/src/mathjax_src/output/common/Wrappers/mtext
// args: t
// locals: e, i, o, r, n, s, a, this
function {
  this = this;
  let a;
  let s;
  let n;
  let r;
  let o;
  let i;
  let e;
  e = this.childNodes;
  if (((undefined === undefined))) goto L_4d;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  goto L_80;
  // [栈深重同步 4 -> 1]
  _it1;
  if ((this.breakPoints[(t - 1)])) goto L_41;
  goto L_41;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_92;
  const _it2 = undefined;
  <done(_it2)>;
  r = <value(_it2)>;
  <done(_it2)>;
  n = <value(_it2)>;
  goto L_c6;
  // [栈深重同步 4 -> 1]
  _it2;
  if ((this.breakPoints[t])) goto L_85;
  goto L_85;
  // [栈深重同步 1 -> 0]
  s = e[i].node.getText().split(new RegExp(" "));
  if (!((i === r))) goto L_1c2;
  return this.textWidth(s.slice(o, n).join(" "));   // tail call
  a = this.textWidth(s.slice(o).join(" "));
  i = (i ++);
  if (!(((i ++) < r))) goto L_2ac;
  if (!((i < e.length))) goto L_2ac;
  a = (a + e[i].getBBox().w);
  (a + e[i].getBBox().w);
  goto L_23d;
  if (!((i < e.length))) goto L_3b7;
  s = e[i].node.getText().split(new RegExp(" "));
  e[i].node.getText().split(new RegExp(" "));
  a = (a + this.textWidth(s.slice(0, n).join(" ")));
  (a + this.textWidth(s.slice(0, n).join(" ")));
  return a;
}

// fn e  args=1 vars=4 closure=1 cpool=8 bc=143B file=math_jax/src/mathjax_src/output/common/Wrappers/mtext
// args: e
// locals: i, CommonMtextMixin, <class_fields_init>
// closure: t
function {
  let CommonMtextMixin;
  let <class_fields_init>;
  class CommonMtextMixin extends e { ... }
  <proto:CommonMtextMixin>.textWidth = function <atom:0>;
  <proto:CommonMtextMixin>.breakCount = function <atom:0>;
  <proto:CommonMtextMixin>.getVariant = function <atom:0>;
  <proto:CommonMtextMixin>.setBreakAt = function <atom:0>;
  <proto:CommonMtextMixin>.clearBreakPoints = function <atom:0>;
  <proto:CommonMtextMixin>.computeLineBBox = function <atom:0>;
  <proto:CommonMtextMixin>.getBreakWidth = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMtextMixin>;
  CommonMtextMixin = function <atom:0>;
  // close_loc <class_fields_init>
  i = function <atom:0>;
  function <atom:0>.INHERITFONTS = {normal: ["", false, false], bold: ["", false, true], italic: ["", true, false], bold-italic: ["", true, true]};
  return i;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=math_jax/src/mathjax_src/output/common/Wrappers/mtext
// args: require, module, exports
// locals: t, e
function {
  e = function e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMtextMixin = undefined;
  t = require("../LineBBox");
  exports.CommonMtextMixin = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mtext
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
