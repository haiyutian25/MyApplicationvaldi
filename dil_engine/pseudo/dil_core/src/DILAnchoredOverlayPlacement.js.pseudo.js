// fn o  args=4 vars=21 closure=9 cpool=0 bc=1615B file=dil_core/src/DILAnchoredOverlayPlacement
// args: e, i, h, r
// locals: n, o, u, a, c, g, m, O, v, I, T, L, _, D, P, W, E
// closure: t, f, l, w, s, p, d, x, y
function {
  let E;
  let W;
  let P;
  let D;
  let _;
  let L;
  let T;
  let I;
  let v;
  let O;
  let m;
  let g;
  let c;
  let a;
  let u;
  let o;
  let n;
  n = (true === r.tooltip);
  if (!(n)) goto L_84;
  goto L_85;
  // [栈深重同步 1 -> 0]
  o = 0;
  null;
  e;
  u = {width: (e.width - (2 * o)), height: (e.height - (2 * o))};
  null;
  i;
  a = {x: (i.x - o), y: (i.y - o)};
  c = f(r.side);
  g = l(r.align);
  if (!((r.sideOffset == null))) goto L_1bb;
  r.sideOffset;
  if (!(n)) goto L_1e6;
  goto L_1e7;
  // [栈深重同步 2 -> 1]
  m = (8 + 0);
  if (!((r.alignOffset == null))) goto L_216;
  r.alignOffset;
  O = w(g);
  v = s(e, r);
  I = {width: p(a, h, v.width, v.minWidth, r.minWidth), height: h.height};
  if (!((false === r.avoidCollisions))) goto L_2ef;
  goto L_304;
  // [栈深重同步 1 -> 0]
  T = d(u, a, I, c, m);
  L = x(a, I, T, m, g, O);
  if (!((false === r.avoidCollisions))) goto L_34c;
  goto L_359;
  // [栈深重同步 1 -> 0]
  _ = y(u, I, L);
  if ((("top" === T))) goto L_371;
  D = ("bottom" === T);
  if (!(D)) goto L_39e;
  goto L_3c2;
  // [栈深重同步 1 -> 0]
  P = I.height;
  if (!(D)) goto L_43b;
  goto L_4ab;
  // [栈深重同步 1 -> 0]
  W = ((a.y + (a.height / 2)) - _.top);
  E = (t.TOOLTIP_CORNER_RADIUS + (t.TOOLTIP_POINTER_BASE / 2));
  if (!((P < (2 * E)))) goto L_515;
  goto L_574;
  // [栈深重同步 2 -> 1]
  return {side: T, anchorOffset: Math.max(E, Math.min((P - E), W)), left: (_.left + o), top: (_.top + o), width: v.width, minWidth: v.minWidth, maxWidth: v.maxWidth};
}

// fn d  args=5 vars=6 closure=4 cpool=0 bc=176B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t, e, i, h, r
// locals: n
// closure: a, x, u, c
function {
  let n;
  if (((t.width <= 0))) goto L_4f;
  if (!((t.height <= 0))) goto L_53;
  return h;
  if (!(a(t, i, x(e, i, h, r, "center", 0), h))) goto L_6e;
  return h;
  n = u(h);
  if ((a(t, i, x(e, i, n, r, "center", 0), n))) goto L_a8;
  if (!((c(t, e, n, r) > c(t, e, h, r)))) goto L_ae;
  return n;
  return h;
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=52B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t
function {
  if (!((t === "top"))) goto L_10;
  return "bottom";
  if (!((t === "right"))) goto L_1f;
  return "left";
  if (!((t === "left"))) goto L_2e;
  return "right";
  return "top";
}

// fn a  args=4 vars=4 closure=0 cpool=0 bc=316B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t, e, i, h
function {
  if ((("left" === h))) goto L_12;
  if (!(("right" === h))) goto L_ab;
  if (!((i.left >= 0))) goto L_13b;
  return ((i.left + e.width) <= t.width);
  if (!((i.top >= 0))) goto L_13b;
  return ((i.top + e.height) <= t.height);
}

// fn c  args=4 vars=4 closure=0 cpool=0 bc=316B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t, e, i, h
function {
  if (!((i === "top"))) goto L_2f;
  return (e.y - h);
  if (!((i === "right"))) goto L_a3;
  return (t.width - ((e.x + e.width) + h));
  if (!((i === "left"))) goto L_d1;
  return (e.x - h);
  return (t.height - ((e.y + e.height) + h));
}

// fn s  args=2 vars=3 closure=3 cpool=0 bc=337B file=dil_core/src/DILAnchoredOverlayPlacement
// args: e, i
// locals: h
// closure: t, g, m
function {
  let h;
  if (!((true === i.tooltip))) goto L_50;
  goto L_51;
  // [栈深重同步 1 -> 0]
  h = 0;
  if (!(("number" == typeof i.width))) goto L_a2;
  goto L_a3;
  // [栈深重同步 2 -> 1]
  null;
  e;
  return {width: undefined, minWidth: g(i.minWidth), maxWidth: m({width: (e.width - (2 * h))}, i.maxWidth, i.avoidCollisions)};
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=43B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t
// closure: e
function {
  if (((t === "top"))) goto L_25;
  if (((t === "right"))) goto L_25;
  if (((t === "bottom"))) goto L_25;
  if (!((t === "left"))) goto L_27;
  return t;
  return e;
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=34B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t
// closure: i
function {
  if (((t === "start"))) goto L_1c;
  if (((t === "center"))) goto L_1c;
  if (!((t === "end"))) goto L_1e;
  return t;
  return i;
}

// fn w  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t
function {
  if (!(("center" === t))) goto L_b;
  return 0;
  return -5;
}

// fn g  args=1 vars=1 closure=1 cpool=0 bc=20B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t
// closure: r
function {
  if (!(("auto" !== t))) goto L_13;
  if (!((t == null))) goto L_12;
  t;
  return r;
  return;
}

// fn m  args=3 vars=4 closure=1 cpool=0 bc=184B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t, e, i
// locals: h
// closure: n
function {
  let h;
  if (!((e == null))) goto L_c;
  e;
  h = n;
  if (((false === i))) goto L_39;
  if (!((t.width <= 0))) goto L_3f;
  return h;
  return Math.max(0, Math.min(h, t.width));
}

// fn p  args=5 vars=5 closure=1 cpool=0 bc=175B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t, e, i, h, n
// closure: r
function {
  if (!((undefined !== i))) goto L_7;
  return i;
  if (!((e.width > 0))) goto L_50;
  return e.width;
  if (!((undefined !== h))) goto L_57;
  return h;
  if (!(("auto" === n))) goto L_ab;
  if (!((t.width > 0))) goto L_ab;
  return t.width;
  return r;
}

// fn x  args=6 vars=6 closure=1 cpool=0 bc=577B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t, e, i, h, r, n
// closure: O
function {
  if ((("left" === i))) goto L_12;
  if (!(("right" === i))) goto L_12c;
  if (!(("right" === i))) goto L_6a;
  goto L_b1;
  // [栈深重同步 2 -> 1]
  return {left: ((t.x - e.width) - h), top: O(t.y, t.height, e.height, r, n)};
  if (!(("bottom" === i))) goto L_1f4;
  goto L_23b;
  // [栈深重同步 2 -> 1]
  return {left: O(t.x, t.width, e.width, r, n), top: ((t.y - e.height) - h)};
}

// fn O  args=5 vars=5 closure=0 cpool=0 bc=47B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t, e, i, h, r
function {
  if (!((h === "start"))) goto L_10;
  return (t + r);
  if (!((h === "end"))) goto L_23;
  return (((t + e) - i) + r);
  return ((t + ((e - i) / 2)) + r);
}

// fn y  args=3 vars=3 closure=1 cpool=0 bc=296B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t, e, i
// closure: v
function {
  return {left: v(i.left, 0, (t.width - e.width), t.width), top: v(i.top, 0, (t.height - e.height), t.height)};
}

// fn v  args=4 vars=4 closure=0 cpool=0 bc=135B file=dil_core/src/DILAnchoredOverlayPlacement
// args: t, e, i, h
function {
  if (!((h <= 0))) goto L_7;
  return t;
  return Math.max(e, Math.min(t, Math.max(e, i)));
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=16 bc=218B file=dil_core/src/DILAnchoredOverlayPlacement
// args: require, module, exports
// locals: t, e, i, h, r, n, o, d, u, a, c, s, f, l, w, g, m, p, x, O, y, v
function {
  o = function o;
  d = function d;
  u = function u;
  a = function a;
  c = function c;
  s = function s;
  f = function f;
  l = function l;
  w = function w;
  g = function g;
  m = function m;
  p = function p;
  x = function x;
  O = function O;
  y = function y;
  v = function v;
  let n;
  let r;
  let h;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveDILAnchoredOverlayLayout = undefined;
  exports.resolveDILAnchoredOverlaySurfaceConstraints = undefined;
  t = require("./DILTooltipGeometry");
  e = "bottom";
  i = "center";
  h = 8;
  r = 300;
  n = 700;
  exports.resolveDILAnchoredOverlayLayout = o;
  exports.resolveDILAnchoredOverlaySurfaceConstraints = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILAnchoredOverlayPlacement
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
