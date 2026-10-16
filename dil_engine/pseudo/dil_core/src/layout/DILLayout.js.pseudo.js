// fn t  args=1 vars=1 closure=0 cpool=0 bc=36B file=dil_core/src/layout/DILLayout
// args: e
function {
  if (!(e)) goto L_23;
  if (!(("start" === e))) goto L_12;
  return "flex-start";
  if (!(("end" === e))) goto L_21;
  return "flex-end";
  return e;
  return;
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=90B file=dil_core/src/layout/DILLayout
// args: e
function {
  if (!(e)) goto L_59;
  if (!(("start" === e))) goto L_12;
  return "flex-start";
  if (!(("end" === e))) goto L_21;
  return "flex-end";
  if (!(("between" === e))) goto L_30;
  return "space-between";
  if (!(("around" === e))) goto L_3f;
  return "space-around";
  if (!(("evenly" === e))) goto L_4e;
  return "space-evenly";
  if (!(("stretch" !== e))) goto L_59;
  return e;
  return;
}

// fn i  args=1 vars=1 closure=0 cpool=0 bc=21B file=dil_core/src/layout/DILLayout
// args: e
function {
  if (!(e)) goto L_14;
  if (!(("nowrap" === e))) goto L_12;
  return "no-wrap";
  return e;
  return;
}

// fn n  args=1 vars=3 closure=2 cpool=0 bc=350B file=dil_core/src/layout/DILLayout
// args: r
// locals: t, o
// closure: e, s
function {
  if (!((null != r))) goto L_15d;
  if (!(("" !== r))) goto L_15d;
  if (!(("number" == typeof r))) goto L_60;
  if (!(!Number.isFinite(r))) goto L_48;
  return;
  return {basis: "0%", grow: r, shrink: r};
  if (!(("string" == typeof r))) goto L_15d;
  let o;
  let t;
  t = r.trim();
  if (!((0 === t.length))) goto L_a2;
  return;
  if (!(("auto" === t))) goto L_c5;
  return {basis: "auto", grow: 1, shrink: 1};
  if (!(("none" === t))) goto L_e8;
  return {basis: "auto", grow: 0, shrink: 0};
  if (!(("initial" === t))) goto L_10b;
  return {basis: "auto", grow: 0, shrink: 1};
  o = e.parseFiniteNumber(t);
  if (!((undefined !== o))) goto L_157;
  return {basis: "0%", grow: o, shrink: o};
  return s(t);
  return;
}

// fn s  args=1 vars=7 closure=2 cpool=2 bc=351B file=dil_core/src/layout/DILLayout
// args: r
// locals: t, o, r#1, i, i#1, n
// closure: e, u
function {
  let n;
  let i#1;
  let o;
  let t;
  t = r.split(new RegExp("\\s+"));
  if (!((2 !== t.length))) goto L_48;
  if (!((3 !== t.length))) goto L_48;
  return;
  o = e.parseFiniteNumber(t[0]);
  if (!((undefined === o))) goto L_7b;
  return;
  if (!((2 === t.length))) goto L_100;
  let i;
  let r#1;
  r#1 = e.parseFiniteNumber(t[1]);
  if (!((undefined !== r#1))) goto L_d7;
  return {basis: "0%", grow: o, shrink: r#1};
  i = u(t[1]);
  if (!((undefined === i))) goto L_e8;
  return undefined;
  return {basis: i, grow: o, shrink: 1};
  i#1 = e.parseFiniteNumber(t[1]);
  n = u(t[2]);
  if (!((undefined !== i#1))) goto L_15d;
  if (!((undefined !== n))) goto L_15d;
  return {basis: n, grow: o, shrink: i#1};
  return undefined;
}

// fn u  args=1 vars=1 closure=1 cpool=0 bc=50B file=dil_core/src/layout/DILLayout
// args: r
// closure: e
function {
  if (!(("auto" === r))) goto L_b;
  return r;
  return e.parseCSSValue(r);
}

// fn f  args=1 vars=5 closure=2 cpool=0 bc=289B file=dil_core/src/layout/DILLayout
// args: e
// locals: r, t, o, i
// closure: l, p
function {
  let i;
  let o;
  let t;
  let r;
  if (((null == e))) goto L_16;
  if (!(("" === e))) goto L_19;
  return;
  if (!(("object" != typeof e))) goto L_28;
  return l(e);   // tail call
  r = l(e.topLeft);
  t = l(e.topRight);
  o = l(e.bottomRight);
  i = l(e.bottomLeft);
  if (((undefined !== r))) goto L_dc;
  if (((undefined !== t))) goto L_dc;
  if (((undefined !== o))) goto L_dc;
  if (!((undefined !== i))) goto L_11f;
  return [p(r), p(t), p(o), p(i)].join(" ");
  return undefined;
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=35B file=dil_core/src/layout/DILLayout
// args: e
// closure: r
function {
  if (!((null != e))) goto L_22;
  if (!(("" !== e))) goto L_22;
  if (!(("number" == typeof e))) goto L_16;
  return e;
  if (!((r[e] == null))) goto L_21;
  r[e];
  return e;
  return;
}

// fn p  args=1 vars=1 closure=0 cpool=1 bc=16B file=dil_core/src/layout/DILLayout
// args: e
function {
  if (!((undefined === e))) goto L_8;
  return "0";
  return String(e);
}

// fn a  args=1 vars=5 closure=1 cpool=2 bc=277B file=dil_core/src/layout/DILLayout
// args: r
// locals: t, o, r#1, t#1
// closure: e
function {
  let o;
  let t;
  if (!(("number" == typeof r))) goto L_12;
  return r;
  if (!(!r)) goto L_17;
  return;
  t = r.trim();
  o = t.split(new RegExp("[/:]"));
  if (!((2 === o.length))) goto L_eb;
  let t#1;
  let r#1;
  r#1 = e.parseFiniteNumber(o[0]);
  t#1 = e.parseFiniteNumber(o[1]);
  if (!((undefined !== r#1))) goto L_eb;
  if (!((undefined !== t#1))) goto L_eb;
  if (!((0 !== t#1))) goto L_eb;
  return (r#1 / t#1);
  return e.parseFiniteNumber(t);   // tail call
}

// fn c  args=1 vars=1 closure=1 cpool=0 bc=207B file=dil_core/src/layout/DILLayout
// args: e
// closure: v
function {
  if (!((null != e))) goto L_ce;
  if (!(("boolean" == typeof e))) goto L_29;
  if (!(e)) goto L_27;
  return {color: "alpha-10", width: 1};
  return undefined;
  if (!(("number" == typeof e))) goto L_45;
  return {color: "alpha-10", width: e};
  if (!(v(e))) goto L_ce;
  if (!((e.color == null))) goto L_7a;
  e.color;
  return {color: "alpha-10", style: e.style, width: e.size};
  return;
}

// fn d  args=1 vars=5 closure=2 cpool=0 bc=423B file=dil_core/src/layout/DILLayout
// args: e
// locals: r, t, o, i
// closure: v, b
function {
  let i;
  let o;
  let t;
  let r;
  if (((null == e))) goto L_2e;
  if ((("boolean" == typeof e))) goto L_2e;
  if ((("object" != typeof e))) goto L_2e;
  if (!(v(e))) goto L_31;
  return;
  if (!((e.top == null))) goto L_7b;
  e.top;
  r = b(e.y);
  if (!((e.right == null))) goto L_c7;
  e.right;
  t = b(e.x);
  if (!((e.bottom == null))) goto L_113;
  e.bottom;
  o = b(e.y);
  if (!((e.left == null))) goto L_15f;
  e.left;
  i = b(e.x);
  if (((undefined !== r))) goto L_181;
  if (((undefined !== t))) goto L_181;
  if (((undefined !== o))) goto L_181;
  if (!((undefined !== i))) goto L_1a5;
  return {bottom: o, left: i, right: t, top: r};
  return undefined;
}

// fn v  args=1 vars=1 closure=0 cpool=0 bc=27B file=dil_core/src/layout/DILLayout
// args: e
function {
  if (!((null !== e))) goto L_1a;
  if (!(("object" == typeof e))) goto L_1a;
  return ("size" in e);
}

// fn b  args=1 vars=1 closure=1 cpool=0 bc=11B file=dil_core/src/layout/DILLayout
// args: e
// closure: c
function {
  if (!((undefined !== e))) goto L_a;
  return c(e);   // tail call
  return;
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=14 bc=393B file=dil_core/src/layout/DILLayout
// args: require, module, exports
// locals: e, r, t, o, i, n, s, u, f, l, p, a, c, d, v, b
function {
  t = function t;
  o = function o;
  i = function i;
  n = function n;
  s = function s;
  u = function u;
  f = function f;
  l = function l;
  p = function p;
  a = function a;
  c = function c;
  d = function d;
  v = function v;
  b = function b;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveDILAlignment = undefined;
  exports.resolveDILJustification = undefined;
  exports.resolveDILWrap = undefined;
  exports.resolveDILFlex = undefined;
  exports.resolveDILRadius = undefined;
  exports.resolveDILAspectRatio = undefined;
  exports.resolveDILBorder = undefined;
  exports.resolveDILBorderSides = undefined;
  require("./DILSpacing");
  e = require("../utils/AttributeParser");
  r = {none: 0, 2xs: 2, xs: 4, sm: 6, md: 8, lg: 10, xl: 12, 2xl: 16, 3xl: 20, 4xl: 24, full: "100%"};
  exports.resolveDILAlignment = t;
  exports.resolveDILJustification = o;
  exports.resolveDILWrap = i;
  exports.resolveDILFlex = n;
  exports.resolveDILRadius = f;
  exports.resolveDILAspectRatio = a;
  exports.resolveDILBorder = c;
  exports.resolveDILBorderSides = d;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/layout/DILLayout
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
