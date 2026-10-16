// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=388B file=math_jax/src/mathjax_src/output/common/Wrappers/maction
// locals: e, t, this
function {
  this = this;
  let t;
  let e;
  e = this.node.attributes.get("selection");
  t = (Math.max(1, Math.min(this.childNodes.length, e)) - 1);
  if ((this.childNodes[t])) goto L_183;
  return this.wrap(this.node.selected);
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=428B file=math_jax/src/mathjax_src/output/common/Wrappers/maction
// locals: t, i, s, this
// closure: e, exports
function {
  this = this;
  let s;
  let i;
  let t;
  t = this.node.attributes.get("data-offsets");
  if (((undefined === undefined))) goto L_89;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  goto L_b9;
  // [栈深重同步 4 -> 1]
  _it1;
  if ((t)) goto L_b6;
  goto L_7d;
  // [栈深重同步 1 -> 0]
  if ((i)) goto L_126;
  this.tipDx = this.length2em(exports.TooltipData.dx);
  if ((s)) goto L_19f;
  this.tipDy = this.length2em(exports.TooltipData.dy);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/output/common/Wrappers/maction
// args: e, t
function {
  return;
}

// fn <atom:0>  args=3 vars=13 closure=1 cpool=1 bc=406B file=math_jax/src/mathjax_src/output/common/Wrappers/maction
// args: e, t, i
// locals: e#1, t#1, i#1, s, o, r, a, this.active_func, new.target, this
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
  if (!((i === undefined))) goto L_21;
  i;
  i = null;
  i#1 = null;
  let a;
  let r;
  let o;
  let s;
  this = new new.target(e, t, i);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target(e, t, i);
  s = this.constructor.actions;
  o = this.node.attributes.get("actiontype");
  if (((undefined === undefined))) goto L_115;
  const _it1 = undefined;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  goto L_14c;
  // [栈深重同步 4 -> 1]
  _it1;
  if ((s.get(o))) goto L_107;
  goto L_107;
  // [栈深重同步 1 -> 0]
  this.action = r;
  this.data = a;
  this.getParameters();
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=200B file=math_jax/src/mathjax_src/output/common/Wrappers/maction
// args: e, t
// locals: e#1, t#1, this
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_13;
  t;
  t = false;
  t#1 = false;
  e.updateFrom(this.selected.getOuterBBox());
  this.selected.setChildPWidths(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=243B file=math_jax/src/mathjax_src/output/common/Wrappers/maction
// locals: this
function {
  this = this;
  if (!(this.node.isEmbellished)) goto L_af;
  return this.selected.coreMO().embellishedBreakCount;
  return this.selected.breakCount;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/output/common/Wrappers/maction
// args: e
// locals: this
function {
  this = this;
  return this.getChildLineBBox(this.selected, e);   // tail call
}

// fn t  args=1 vars=3 closure=2 cpool=6 bc=63B file=math_jax/src/mathjax_src/output/common/Wrappers/maction
// args: t
// locals: CommonMactionMixin, <class_fields_init>
// closure: e, exports
function {
  let CommonMactionMixin;
  let <class_fields_init>;
  class CommonMactionMixin extends t { ... }
  <proto:CommonMactionMixin>.selected = function <atom:0>;
  <proto:CommonMactionMixin>.getParameters = function <atom:0>;
  <proto:CommonMactionMixin>.computeBBox = function <atom:0>;
  <proto:CommonMactionMixin>.breakCount = function <atom:0>;
  <proto:CommonMactionMixin>.computeLineBBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMactionMixin>;
  CommonMactionMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=456B file=math_jax/src/mathjax_src/output/common/Wrappers/maction
// args: e, t
function {
  if (!(t.clearTimer.has(e))) goto L_e3;
  clearTimeout(t.clearTimer.get(e));
  t.clearTimer.delete(e);
  if (!(t.hoverTimer.has(e))) goto L_1c7;
  clearTimeout(t.hoverTimer.get(e));
  t.hoverTimer.delete(e);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=190B file=math_jax/src/mathjax_src/output/common/Wrappers/maction
// args: require, module, exports
// locals: e, t
function {
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TooltipData = undefined;
  exports.CommonMactionMixin = undefined;
  e = require("../../../util/string");
  exports.TooltipData = {dx: ".2em", dy: ".1em", postDelay: 600, clearDelay: 100, hoverTimer: new Map(), clearTimer: new Map(), stopTimers: function <atom:0>};
  exports.CommonMactionMixin = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/maction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
