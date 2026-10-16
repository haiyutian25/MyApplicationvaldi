// fn <atom:0>  args=0 vars=8 closure=2 cpool=0 bc=687B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// locals: i, o, e, n, i#1, o#1, e#1, this
// closure: t, s
function {
  this = this;
  let n;
  let e;
  let o;
  let i;
  i = this.node.attributes;
  o = i.get("data-padding");
  if (!((undefined !== o))) goto L_e3;
  this.padding = this.length2em(o, t.PADDING);
  this.length2em(o, t.PADDING);
  e = i.get("data-thickness");
  if (!((undefined !== e))) goto L_173;
  this.thickness = this.length2em(e, t.THICKNESS);
  this.length2em(e, t.THICKNESS);
  n = i.get("data-arrowhead");
  if (!((undefined !== n))) goto L_2ae;
  let e#1;
  let o#1;
  let i#1;
  if (((undefined === undefined))) goto L_1cc;
  const _it1 = undefined;
  <done(_it1)>;
  i#1 = <value(_it1)>;
  <done(_it1)>;
  o#1 = <value(_it1)>;
  <done(_it1)>;
  e#1 = <value(_it1)>;
  goto L_1f7;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_1b9;
  // [栈深重同步 1 -> 0]
  if (!(i#1)) goto L_20a;
  goto L_22e;
  // [栈深重同步 3 -> 2]
  if (!(o#1)) goto L_243;
  goto L_267;
  // [栈深重同步 3 -> 2]
  if (!(e#1)) goto L_27c;
  goto L_2a0;
  // [栈深重同步 3 -> 2]
  this.arrowhead = {x: t.ARROWX, y: t.ARROWY, dx: t.ARROWDX};
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=422B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// locals: t, i, s, this
// closure: s
function {
  this = this;
  let t;
  t = this.constructor.notations;
  let i;
  for (const i of s.split(this.node.attributes.get("notation"))) {
    let s;
    s = t.get(i);
    if (!(s)) goto L_19b;
    this.notations[i] = s;
    if (!(s.renderChild)) goto L_19b;
    this.renderChild = s.renderer;
    s.renderer;
  }
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=2 bc=314B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// locals: t, s, t#1, this
function {
  this = this;
  let t;
  for (const t of Object.keys(this.notations)) {
    if (!(this.notations[t])) continue;
    let s;
    if ((this.notations[t].remove)) goto L_cf;
    s = "";
    let t#1;
    for (const t#1 of s.split(new RegExp(" "))) {
      delete t#1;
      // [栈深重同步 4 -> 6]
    }
  }
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=179B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// locals: t, s, this
function {
  this = this;
  let t;
  for (const t of Object.keys(this.notations)) {
    let s;
    s = this.notations[t].init;
    if (!(s)) goto L_ab;
    s(this);
  }
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=221B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// locals: t, s, this
function {
  this = this;
  let t;
  t = [0, 0, 0, 0];
  let s;
  for (const s of Object.keys(this.notations)) {
    this.maximizeEntries(t, this.notations[s].bbox(this));
  }
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=43B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// args: s
// closure: this, t
function {
  return (this.TRBL[s] - t[s]);
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=1 bc=278B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// locals: t, s, i, this
function {
  this = this;
  let t;
  t = [0, 0, 0, 0];
  let s;
  for (const s of Object.keys(this.notations)) {
    let i;
    i = this.notations[s].border;
    if (!(i)) goto L_df;
    this.maximizeEntries(t, i(this));
  }
  return [0, 1, 2, 3].map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=52B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// args: t, s
// locals: i
function {
  let i;
  i = 0;
  if (!((i < t.length))) goto L_33;
  if (!((t[i] < s[i]))) goto L_28;
  t[i] = s[i];
  s[i];
  i = <i_new>;
  (i++);
  goto L_5;
  return;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=1 bc=165B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// args: t
// locals: s, i, o, e, n, this
function {
  this = this;
  let n;
  let e;
  let o;
  let i;
  let s;
  if (((undefined === undefined))) goto L_2b;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  e = <value(_it1)>;
  goto L_51;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_17;
  // [栈深重同步 1 -> 0]
  if (!(("X" === t))) goto L_63;
  goto L_6a;
  // [栈深重同步 1 -> 0]
  n = ((o - s) / 2);
  if (!((Math.abs(n) > 0.001))) goto L_a3;
  return n;
  return 0;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=95B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// args: t, s
function {
  return [Math.atan2(s, t), Math.sqrt(((t * t) + (s * s)))];
}

// fn <atom:0>  args=5 vars=10 closure=0 cpool=0 bc=46B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// args: t, s, i, o, e
// locals: t#1, s#1, i#1, o#1, e#1
function {
  let e#1;
  let o#1;
  let i#1;
  let s#1;
  let t#1;
  t#1 = t;
  s#1 = s;
  i#1 = i;
  if (!((o === undefined))) goto L_1d;
  o;
  o = "";
  o#1 = "";
  if (!((e === undefined))) goto L_2a;
  e;
  e = 0;
  e#1 = 0;
  return null;
}

// fn <atom:0>  args=0 vars=13 closure=0 cpool=0 bc=802B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// locals: t, s, i, o, e, n, r, h, a, d, c, l, this
function {
  this = this;
  let l;
  let c;
  let d;
  let a;
  let h;
  let r;
  let n;
  let e;
  let o;
  let i;
  let s;
  let t;
  if (((undefined === undefined))) goto L_38;
  const _it1 = undefined;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  goto L_84;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_2c;
  // [栈深重同步 1 -> 0]
  i = (s * (this.arrowhead.x + Math.max(1, this.arrowhead.dx)));
  if (((undefined === undefined))) goto L_1b0;
  o = <to_object>(undefined).h;
  e = <to_object>(undefined).d;
  n = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_1fd;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_141;
  // [栈深重同步 1 -> 0]
  r = (o + e);
  h = Math.sqrt(((r * r) + (n * n)));
  a = Math.max(t, ((i * n) / h));
  d = Math.max(t, ((i * r) / h));
  if (((undefined === undefined))) goto L_2c5;
  const _it2 = undefined;
  <done(_it2)>;
  c = <value(_it2)>;
  <done(_it2)>;
  l = <value(_it2)>;
  goto L_300;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_2b7;
  // [栈深重同步 1 -> 0]
  return {a: c, W: l, x: a, y: d};
}

// fn <atom:0>  args=0 vars=8 closure=0 cpool=0 bc=345B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// locals: t, s, i, o, e, n, r, this
function {
  this = this;
  let r;
  let n;
  let e;
  let o;
  let i;
  let s;
  let t;
  if (((undefined === undefined))) goto L_8a;
  t = <to_object>(undefined).h;
  s = <to_object>(undefined).d;
  i = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_d7;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_f3;
  const _it1 = undefined;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_119;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_dc;
  // [栈深重同步 1 -> 0]
  return this.getArgMod(((r + i) + e), (((o + t) + s) + n));   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=322B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// args: t
// locals: s, i, this
function {
  this = this;
  let i;
  let s;
  s = this.node.factory.create("msqrt");
  s.inheritAttributesFrom(this.node);
  s.childNodes[0] = t.node;
  i = this.wrap(s);
  i.parent = this;
  return i;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=409B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// locals: t, s, this
function {
  this = this;
  let s;
  let t;
  t = this.msqrt.getBBox();
  s = this.msqrt.childNodes[0].getBBox();
  return [(t.h - s.h), 0, (t.d - s.d), (t.w - s.w)];
}

// fn <atom:0>  args=3 vars=9 closure=2 cpool=0 bc=567B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// args: s, i, o
// locals: s#1, i#1, o#1, this.active_func, new.target, this
// closure: <class_fields_init>, t
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let o#1;
  let i#1;
  let s#1;
  s#1 = s;
  i#1 = i;
  if (!((o === undefined))) goto L_20;
  o;
  o = null;
  o#1 = null;
  this = new new.target(s, i, o);
  if (!(<class_fields_init>)) goto L_3c;
  <class_fields_init>.call(this);
  new new.target(s, i, o);
  this.notations = {};
  this.renderChild = null;
  this.msqrt = null;
  this.padding = t.PADDING;
  this.thickness = t.THICKNESS;
  this.arrowhead = {x: t.ARROWX, y: t.ARROWY, dx: t.ARROWDX};
  this.TRBL = [0, 0, 0, 0];
  this.getParameters();
  this.getNotations();
  this.removeRedundantNotations();
  this.initializeNotations();
  this.TRBL = this.getBBoxExtenders();
  return this;
}

// fn <atom:0>  args=2 vars=10 closure=0 cpool=0 bc=402B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// args: t, s
// locals: t#1, s#1, i, o, e, n, r, this
function {
  this = this;
  let s#1;
  let t#1;
  t#1 = t;
  if (!((s === undefined))) goto L_14;
  s;
  s = false;
  s#1 = false;
  let r;
  let n;
  let e;
  let o;
  let i;
  if (((undefined === undefined))) goto L_3f;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_65;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_29;
  // [栈深重同步 1 -> 0]
  r = this.childNodes[0].getBBox();
  t.combine(r, n, 0);
  t.h = (t.h + i);
  t.d = (t.d + e);
  t.w = (t.w + o);
  this.setChildPWidths(s);
  return;
}

// fn i  args=1 vars=3 closure=2 cpool=16 bc=143B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// args: i
// locals: CommonMencloseMixin, <class_fields_init>
// closure: t, s
function {
  let CommonMencloseMixin;
  let <class_fields_init>;
  class CommonMencloseMixin extends i { ... }
  <proto:CommonMencloseMixin>.getParameters = function <atom:0>;
  <proto:CommonMencloseMixin>.getNotations = function <atom:0>;
  <proto:CommonMencloseMixin>.removeRedundantNotations = function <atom:0>;
  <proto:CommonMencloseMixin>.initializeNotations = function <atom:0>;
  <proto:CommonMencloseMixin>.getBBoxExtenders = function <atom:0>;
  <proto:CommonMencloseMixin>.getPadding = function <atom:0>;
  <proto:CommonMencloseMixin>.maximizeEntries = function <atom:0>;
  <proto:CommonMencloseMixin>.getOffset = function <atom:0>;
  <proto:CommonMencloseMixin>.getArgMod = function <atom:0>;
  <proto:CommonMencloseMixin>.arrow = function <atom:0>;
  <proto:CommonMencloseMixin>.arrowData = function <atom:0>;
  <proto:CommonMencloseMixin>.arrowAW = function <atom:0>;
  <proto:CommonMencloseMixin>.createMsqrt = function <atom:0>;
  <proto:CommonMencloseMixin>.sqrtTRBL = function <atom:0>;
  <proto:CommonMencloseMixin>.computeBBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMencloseMixin>;
  CommonMencloseMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// args: require, module, exports
// locals: t, s, i
function {
  i = function i;
  let s;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMencloseMixin = undefined;
  t = require("../Notation");
  s = require("../../../util/string");
  exports.CommonMencloseMixin = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/menclose
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
