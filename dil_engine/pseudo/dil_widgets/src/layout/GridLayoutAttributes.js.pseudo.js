// fn r  args=2 vars=4 closure=2 cpool=2 bc=422B file=dil_widgets/src/layout/GridLayoutAttributes
// args: r, t
// locals: o, n
// closure: m, e
function {
  let n;
  let o;
  o = m(r.gap);
  if (!((o == null))) goto L_5c;
  o;
  goto L_80;
  if (!((undefined.toString() == null))) goto L_86;
  undefined.toString();
  n = new RegExp("^\\s*(\\S+)\\s+(\\S+)\\s*$").exec("");
  if (!((r.columnGap == null))) goto L_112;
  r.columnGap;
  if (!((n == null))) goto L_e1;
  n;
  goto L_e3;
  if (!((undefined[2] == null))) goto L_112;
  undefined[2];
  if (!((o == null))) goto L_112;
  o;
  if (!((r.rowGap == null))) goto L_19f;
  r.rowGap;
  if (!((n == null))) goto L_16e;
  n;
  goto L_170;
  if (!((undefined[1] == null))) goto L_19f;
  undefined[1];
  if (!((o == null))) goto L_19f;
  o;
  return {columnGap: e.resolveDILSpacing(t.columnGap), rowGap: e.resolveDILSpacing(t.rowGap)};
}

// fn t  args=2 vars=3 closure=5 cpool=0 bc=57B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e, r
// locals: t
// closure: m, c, y, G, h
function {
  let t;
  t = m(e);
  if (!((undefined === t))) goto L_12;
  return c(r);
  if (!(("number" == typeof t))) goto L_24;
  return c(t);
  if (!(y(t))) goto L_31;
  return G(t);
  return h(t);
}

// fn n  args=2 vars=4 closure=3 cpool=0 bc=111B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e, r
// locals: t, n
// closure: m, c, o
function {
  let n;
  let t;
  if (!((m(e) == null))) goto L_13;
  m(e);
  t = "md";
  if (!(("sm" !== t))) goto L_36;
  if (!(("md" !== t))) goto L_36;
  if (!(("lg" !== t))) goto L_36;
  return;
  if (!((r == null))) goto L_3d;
  r;
  n = 0;
  if (!((n >= 768))) goto L_56;
  goto L_6b;
  // [栈深重同步 3 -> 2]
  if (!((n >= 576))) goto L_66;
  goto L_6b;
  // [栈深重同步 3 -> 2]
  return c(o[t]["base"]);   // tail call
}

// fn s  args=1 vars=2 closure=5 cpool=0 bc=54B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e
// locals: r
// closure: m, v, y, G, h
function {
  let r;
  r = m(e);
  if (!((undefined !== r))) goto L_35;
  if (!(("number" == typeof r))) goto L_20;
  return v(r);
  if (!(y(r))) goto L_2d;
  return G(r);
  return h(r);
  return;
}

// fn i  args=2 vars=2 closure=2 cpool=0 bc=48B file=dil_widgets/src/layout/GridLayoutAttributes
// args: r, t
// closure: e, m
function {
  if (!((m(r) == null))) goto L_2d;
  m(r);
  return e.resolveDILSpacing(t);   // tail call
}

// fn u  args=3 vars=7 closure=4 cpool=0 bc=254B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e, r, t
// locals: o, n, s, i
// closure: f, d, c, x
function {
  let i;
  let s;
  let n;
  let o;
  if (!((undefined === e))) goto L_23;
  return {columnCount: 1, templateColumns: "1fr"};
  o = f(r);
  n = d(t);
  if (!((n == null))) goto L_34;
  n;
  s = 0;
  i = Math.max(1, Math.floor(((e + s) / (o + s))));
  if (!((undefined === n))) goto L_b1;
  return {columnCount: i, templateColumns: c(i)};
  return {columnCount: i, templateColumns: x(i, "".concat(((e - (s * (i - 1))) / i), "px"))};
}

// fn a  args=1 vars=4 closure=1 cpool=0 bc=184B file=dil_widgets/src/layout/GridLayoutAttributes
// args: <atom:0>
// locals: e, r, t
// closure: l
function {
  e = <to_object>(<atom:0>).authoredSpan;
  r = <to_object>(<atom:0>).adaptiveColumnCount;
  <to_object>(<atom:0>);
  let t;
  t = l(e);
  if (!((undefined === t))) goto L_58;
  return;
  if (!((undefined === r))) goto L_88;
  goto L_b5;
  // [栈深重同步 3 -> 2]
  return "span ".concat(Math.min(t, r));   // tail call
}

// fn p  args=1 vars=2 closure=1 cpool=0 bc=59B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e
// locals: r
// closure: l
function {
  let r;
  r = l(e);
  if (!((undefined !== r))) goto L_3a;
  return "span ".concat(r);   // tail call
  return;
}

// fn l  args=1 vars=2 closure=1 cpool=0 bc=155B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e
// locals: r
// closure: m
function {
  let r;
  r = m(e);
  if (!(("number" == typeof r))) goto L_9a;
  if (!(Number.isFinite(r))) goto L_9a;
  return Math.max(1, Math.floor(r));   // tail call
  return;
}

// fn m  args=1 vars=1 closure=0 cpool=0 bc=99B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e
function {
  if (!((undefined !== e))) goto L_62;
  if ((("object" != typeof e))) goto L_3b;
  if (!(Array.isArray(e))) goto L_3f;
  return e;
  return e.default;
  return;
}

// fn c  args=1 vars=1 closure=1 cpool=0 bc=93B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e
// closure: x
function {
  return x(Math.max(1, Math.floor(e)), "1fr");   // tail call
}

// fn f  args=1 vars=1 closure=0 cpool=0 bc=65B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e
function {
  if (((undefined === e))) goto L_39;
  if ((!Number.isFinite(e))) goto L_39;
  if (!((e <= 0))) goto L_3f;
  return 220;
  return e;
}

// fn d  args=1 vars=3 closure=0 cpool=2 bc=232B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e
// locals: r, t
function {
  let t;
  let r;
  if (!(("number" == typeof e))) goto L_6a;
  if (!(Number.isFinite(e))) goto L_68;
  return Math.max(0, e);
  return 0;
  if (!(("string" != typeof e))) goto L_75;
  return;
  r = new RegExp("^\\s*(\\d+(?:\\.\\d+)?)\\s*(?:px|pt)?\\s*$").exec(e);
  if (!((null === r))) goto L_a8;
  return;
  t = Number(r[1]);
  if (!(Number.isFinite(t))) goto L_e6;
  return t;
  return 0;
}

// fn v  args=1 vars=1 closure=1 cpool=0 bc=93B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e
// closure: x
function {
  return x(Math.max(1, Math.floor(e)), "auto");   // tail call
}

// fn x  args=2 vars=4 closure=0 cpool=0 bc=82B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e, r
// locals: t, o
function {
  let t;
  t = r;
  let o;
  o = 1;
  if (!((o < e))) goto L_4e;
  t = (t + " ".concat(r));
  (t + " ".concat(r));
  o = <o_new>;
  (o++);
  goto L_a;
  return t;
}

// fn G  args=1 vars=3 closure=1 cpool=0 bc=80B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e
// locals: r, t
// closure: b
function {
  let r;
  r = "";
  let t;
  t = 0;
  if (!((t < e.length))) goto L_43;
  if (!((t > 0))) goto L_28;
  r = (r + " ");
  (r + " ");
  r = (r + b(e[t]));
  (r + b(e[t]));
  t = <t_new>;
  (t++);
  goto L_a;
  if ((r)) goto L_4f;
  return "1fr";
}

// fn b  args=1 vars=1 closure=0 cpool=0 bc=98B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e
function {
  if (!(("number" == typeof e))) goto L_60;
  return "".concat(Math.max(0, e), "fr");
  return e;
}

// fn y  args=1 vars=1 closure=0 cpool=0 bc=42B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e
function {
  return Array.isArray(e);   // tail call
}

// fn h  args=1 vars=2 closure=1 cpool=2 bc=188B file=dil_widgets/src/layout/GridLayoutAttributes
// args: e
// locals: r
// closure: x
function {
  let r;
  r = new RegExp("^repeat\\(\\s*(\\d+)\\s*,\\s*(.+)\\s*\\)$").exec(e.trim());
  if (!((null === r))) goto L_5b;
  return e;
  return x(Math.max(1, Number(r[1])), r[2].trim());
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=19 bc=424B file=dil_widgets/src/layout/GridLayoutAttributes
// args: require, module, exports
// locals: e, r, t, o, n, s, i, u, a, p, l, m, c, f, d, v, x, G, b, y, h
function {
  r = function r;
  t = function t;
  n = function n;
  s = function s;
  i = function i;
  u = function u;
  a = function a;
  p = function p;
  l = function l;
  m = function m;
  c = function c;
  f = function f;
  d = function d;
  v = function v;
  x = function x;
  G = function G;
  b = function b;
  y = function y;
  h = function h;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveGridAxisGaps = undefined;
  exports.resolveGridTemplate = undefined;
  exports.resolveGridPresetTemplate = undefined;
  exports.resolveOptionalGridTemplate = undefined;
  exports.resolveGridGap = undefined;
  exports.resolveAdaptiveGridLayout = undefined;
  exports.resolveGridColumnSpan = undefined;
  exports.resolveGridSpan = undefined;
  exports.resolveGridSpanNumber = undefined;
  e = require("dil_core/src/layout/DILSpacing");
  exports.resolveGridAxisGaps = r;
  exports.resolveGridTemplate = t;
  o = {sm: {base: 2, sm: 3, md: 4}, md: {base: 2, sm: 3, md: 3}, lg: {base: 1, sm: 1, md: 2}};
  exports.resolveGridPresetTemplate = n;
  exports.resolveOptionalGridTemplate = s;
  exports.resolveGridGap = i;
  exports.resolveAdaptiveGridLayout = u;
  exports.resolveGridColumnSpan = a;
  exports.resolveGridSpan = p;
  exports.resolveGridSpanNumber = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/layout/GridLayoutAttributes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
