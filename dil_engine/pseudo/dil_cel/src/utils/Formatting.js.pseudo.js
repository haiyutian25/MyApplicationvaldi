// fn i  args=4 vars=7 closure=3 cpool=0 bc=439B file=dil_cel/src/utils/Formatting
// args: r, e, n, i
// locals: o, u, c
// closure: g, $, t
function {
  let c;
  let u;
  let o;
  o = g(n);
  if (!((null == i))) goto L_15;
  goto L_1e;
  // [栈深重同步 1 -> 0]
  u = $(r, i, "round() precision");
  if (!(!Number.isFinite(o))) goto L_b5;
  t.emitWarning(r, new Error("round() defaulted invalid value "".concat(String(n), "" to 0")));
  return 0;
  c = Math.pow(10, u);
  if (!(Number.isFinite(c))) goto L_14e;
  if (!((0 !== c))) goto L_14e;
  return (Math.round((o * c)) / c);
  t.emitWarning(r, new Error("round() ignored invalid precision "".concat(String(i), """)));
  return o;
}

// fn o  args=5 vars=6 closure=2 cpool=0 bc=272B file=dil_cel/src/utils/Formatting
// args: r, e, n, i, o
// locals: u
// closure: $, t
function {
  let u;
  u = $(r, i, "slice() start");
  if ((("string" == typeof n))) goto L_43;
  if (!(Array.isArray(n))) goto L_a9;
  if (!((null == o))) goto L_75;
  return n.slice(u);
  return n.slice(u, $(r, o, "slice() end"));
  t.emitWarning(r, new Error("slice() returned original value because "".concat(String(n), "" is not sliceable")));
  return n;
}

// fn u  args=3 vars=4 closure=2 cpool=0 bc=166B file=dil_cel/src/utils/Formatting
// args: r, e, n
// locals: i
// closure: g, t
function {
  let i;
  i = g(n);
  if (!(Number.isFinite(i))) goto L_3f;
  return String(i);
  t.emitWarning(r, new Error("localeNumberToString() defaulted invalid value "".concat(String(n), "" to empty string")));
  return "";
}

// fn c  args=3 vars=4 closure=3 cpool=0 bc=162B file=dil_cel/src/utils/Formatting
// args: r, e, n
// locals: i
// closure: g, E, t
function {
  let i;
  i = g(E(n));
  if (!(Number.isFinite(i))) goto L_3b;
  return i;
  t.emitWarning(r, new Error("localeStringToNumber() defaulted invalid value "".concat(String(n), "" to 0")));
  return 0;
}

// fn s  args=3 vars=3 closure=1 cpool=0 bc=5B file=dil_cel/src/utils/Formatting
// args: r, t, e
// closure: E
function {
  return E(e);   // tail call
}

// fn a  args=5 vars=7 closure=6 cpool=0 bc=342B file=dil_cel/src/utils/Formatting
// args: r, e, n, i, o
// locals: u, c
// closure: d, t, g, p, m, l
function {
  let c;
  let u;
  u = d(n);
  if (!(!Number.isFinite(u))) goto L_a0;
  t.emitWarning(r, new Error("localeConvertCurrency() defaulted invalid value "".concat(String(n), "" to empty string")));
  return "";
  c = g(i);
  if (!(Number.isFinite(c))) goto L_e4;
  return p(r, m((u * c)), o);
  t.emitWarning(r, new Error("localeConvertCurrency() defaulted invalid rate "".concat(String(i), "" to 0")));
  return l(r, e, 0, o);
}

// fn l  args=4 vars=5 closure=3 cpool=0 bc=164B file=dil_cel/src/utils/Formatting
// args: r, e, n, i
// locals: o
// closure: d, p, t
function {
  let o;
  o = d(n);
  if (!(Number.isFinite(o))) goto L_3d;
  return p(r, o, i);
  t.emitWarning(r, new Error("localeFormatCurrency() defaulted invalid value "".concat(String(n), "" to empty string")));
  return "";
}

// fn f  args=5 vars=10 closure=7 cpool=2 bc=469B file=dil_cel/src/utils/Formatting
// args: r, t, e, n, i
// locals: o, u, c, s, a
// closure: g, $, x, C, w, M, W
function {
  let a;
  let s;
  let c;
  let u;
  let o;
  o = g(e);
  if (!(!Number.isFinite(o))) goto L_44;
  return "";
  u = $(r, n, "formatSigFigs() digits");
  if (!((u < 1))) goto L_90;
  throw new Error("Significant digits '".concat(u, "' must be a positive integer."));
  c = Math.abs(o);
  if (!((0 === c))) goto L_c7;
  return "0";
  s = Math.pow(10, -u);
  if (!(x(i))) goto L_10a;
  if (!((c < s))) goto L_10a;
  return "0";
  a = C(w(o, ((u - Math.floor(Math.log10(c))) - 1)).toPrecision(u));
  if (!(a.includes("e"))) goto L_1cd;
  return M(a);
  return W(a);
}

// fn g  args=1 vars=3 closure=0 cpool=0 bc=241B file=dil_cel/src/utils/Formatting
// args: r
// locals: t, e
function {
  if (!(("number" == typeof r))) goto L_c;
  return r;
  if (!(("boolean" == typeof r))) goto L_1d;
  if (!(r)) goto L_1b;
  return 1;
  return 0;
  if (!(("string" == typeof r))) goto L_e8;
  let e;
  let t;
  t = r.trim();
  if (!((0 === t.length))) goto L_85;
  return Number.NaN;
  e = Number(t);
  if (!(Number.isFinite(e))) goto L_c1;
  return e;
  return Number.NaN;
  return Number(r);   // tail call
}

// fn d  args=1 vars=1 closure=2 cpool=0 bc=20B file=dil_cel/src/utils/Formatting
// args: r
// closure: g, E
function {
  if (!(("string" == typeof r))) goto L_10;
  goto L_11;
  // [栈深重同步 2 -> 1]
  return g(r);   // tail call
}

// fn m  args=1 vars=2 closure=1 cpool=2 bc=86B file=dil_cel/src/utils/Formatting
// args: r
// locals: t
// closure: w
function {
  let t;
  t = Math.abs(r);
  if (!((t >= 1))) goto L_3a;
  return w(r, 2);
  if (!((t >= 0.01))) goto L_47;
  return w(r, 4);
  if (!((t >= 1e-06))) goto L_54;
  return w(r, 6);
  return r;
}

// fn p  args=3 vars=7 closure=8 cpool=0 bc=175B file=dil_cel/src/utils/Formatting
// args: e, n, i
// locals: o, u, t, c
// closure: b, N, h, r, F, S, t, y
function {
  let u;
  let o;
  o = b(i);
  u = N(o);
  if (!((undefined !== o))) goto L_a5;
  try { // catch -> L_6a
  let t;
  t = h(r.formatNumberWithCurrency(n, o));
  if (!((t.length > 0))) goto L_67;
  if (!(F(t, u))) goto L_67;
  return t;
  <?>;
  goto L_a5;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_a4
  if ((S(c))) goto L_a0;
  t.emitWarning(e, c);
  <?>;
  goto L_a5;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return y(n, u);   // tail call
}

// fn b  args=1 vars=2 closure=0 cpool=2 bc=104B file=dil_cel/src/utils/Formatting
// args: r
// locals: t
function {
  let t;
  if (!(("string" != typeof r))) goto L_e;
  return;
  t = r.toUpperCase();
  if (!(new RegExp("^[A-Z]{3}$").test(t))) goto L_66;
  return t;
  return undefined;
}

// fn N  args=1 vars=1 closure=1 cpool=0 bc=182B file=dil_cel/src/utils/Formatting
// args: r
// closure: n
function {
  if (!((undefined === r))) goto L_7;
  return 2;
  if (!(("undefined" != typeof Intl))) goto L_aa;
  try { // catch -> L_a0
  return new Intl.NumberFormat(undefined, {style: "currency", currency: r}).resolvedOptions().maximumFractionDigits;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_a9
  <?>;
  goto L_aa;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((n[r] == null))) goto L_b5;
  n[r];
  return 2;
}

// fn h  args=1 vars=4 closure=1 cpool=2 bc=314B file=dil_cel/src/utils/Formatting
// args: r
// locals: t, e, n
// closure: v
function {
  let n;
  let e;
  let t;
  t = r.trim();
  e = 0;
  if (!((e < t.length))) goto L_74;
  if (!(!v(t.charAt(e)))) goto L_74;
  e = <e_new>;
  (e++);
  goto L_31;
  n = (t.length - 1);
  if (!((n >= e))) goto L_bd;
  if (!(!v(t.charAt(n)))) goto L_bd;
  n = <n_new>;
  (n--);
  goto L_7b;
  return t.slice(e, (n + 1)).replace(new RegExp("[^0-9.,+\\-\\s]"), "").trim();   // tail call
}

// fn v  args=1 vars=2 closure=0 cpool=0 bc=103B file=dil_cel/src/utils/Formatting
// args: r
// locals: t
function {
  let t;
  t = r.charCodeAt(0);
  if (!((t >= 48))) goto L_3a;
  if (((t <= 57))) goto L_66;
  if ((("+" === r))) goto L_66;
  if ((("-" === r))) goto L_66;
  if ((("." === r))) goto L_66;
  return ("," === r);
}

// fn F  args=2 vars=3 closure=0 cpool=0 bc=151B file=dil_cel/src/utils/Formatting
// args: r, t
// locals: e
function {
  let e;
  e = Math.max(r.lastIndexOf("."), r.lastIndexOf(","));
  if (!((-1 === e))) goto L_8c;
  return (0 === t);
  return (((r.length - e) - 1) === t);
}

// fn y  args=2 vars=6 closure=0 cpool=3 bc=315B file=dil_cel/src/utils/Formatting
// args: r, t
// locals: e, n, i, o
function {
  let o;
  let i;
  let n;
  let e;
  if (!((r < 0))) goto L_18;
  goto L_19;
  // [栈深重同步 1 -> 0]
  e = "";
  n = Math.abs(r).toFixed(t).split(".");
  if (!((n[0] == null))) goto L_9f;
  n[0];
  i = "0".replace(new RegExp("\\B(?=(\\d{3})+(?!\\d))"), ",");
  o = n[1];
  if (!((undefined === o))) goto L_107;
  return "".concat(e, i);
  return "".concat(e, i, ".", o);
}

// fn S  args=1 vars=1 closure=0 cpool=0 bc=48B file=dil_cel/src/utils/Formatting
// args: r
function {
  return String(r).includes("Intl");   // tail call
}

// fn $  args=3 vars=4 closure=2 cpool=0 bc=255B file=dil_cel/src/utils/Formatting
// args: r, e, n
// locals: i
// closure: g, t
function {
  let i;
  i = g(e);
  if (!(Number.isFinite(i))) goto L_96;
  if (!((i < 0))) goto L_69;
  return Math.ceil(i);
  return Math.floor(i);
  t.emitWarning(r, new Error("".concat(n, " defaulted invalid value "", String(e), "" to 0")));
  return 0;
}

// fn x  args=1 vars=1 closure=0 cpool=0 bc=5B file=dil_cel/src/utils/Formatting
// args: r
function {
  return (true === r);
}

// fn w  args=2 vars=5 closure=0 cpool=1 bc=223B file=dil_cel/src/utils/Formatting
// args: r, t
// locals: r#1, t#1, e
function {
  let t#1;
  let r#1;
  r#1 = r;
  if (!((t === undefined))) goto L_10;
  t;
  t = 0;
  t#1 = 0;
  let e;
  e = Math.pow(10, t);
  if (!(!Number.isFinite(e))) goto L_a9;
  throw new Error("Precision '".concat(t, "' is out of range."));
  return (Math.floor(((r * e) + 0.5)) / e);
}

// fn C  args=1 vars=1 closure=0 cpool=2 bc=47B file=dil_cel/src/utils/Formatting
// args: r
function {
  return r.replace(new RegExp("e\\+?(-?)0*(\\d+)"), "e$1$2");   // tail call
}

// fn M  args=1 vars=2 closure=1 cpool=2 bc=110B file=dil_cel/src/utils/Formatting
// args: r
// locals: t
// closure: W
function {
  let t;
  t = new RegExp("^([+-]?(?:\\d+|\\d*\\.\\d+))e([+-]?\\d+)$").exec(r);
  if (!((null === t))) goto L_37;
  return r;
  return "".concat(W(t[1]), "e", t[2]);
}

// fn W  args=1 vars=1 closure=0 cpool=4 bc=89B file=dil_cel/src/utils/Formatting
// args: r
function {
  return r.replace(new RegExp("(\\.\\d*?[1-9])0+$"), "$1").replace(new RegExp("\\.0+$"), "");   // tail call
}

// fn E  args=1 vars=7 closure=0 cpool=0 bc=255B file=dil_cel/src/utils/Formatting
// args: r
// locals: t, e, n, i, r#1, o
function {
  let n;
  let e;
  let t;
  if (!((r == null))) goto L_15;
  r;
  t = String("");
  e = "";
  n = false;
  let i;
  i = 0;
  if (!((i < t.length))) goto L_fb;
  let o;
  let r#1;
  r#1 = t.charAt(i);
  o = r#1.charCodeAt(0);
  if (!((o >= 48))) goto L_a7;
  if (!((o <= 57))) goto L_a7;
  e = (e + r#1);
  goto L_ef;
  // [栈深重同步 1 -> 0]
  if ((("-" !== r#1))) goto L_ba;
  if (!((0 !== e.length))) goto L_e4;
  if ((("." !== r#1))) goto L_ef;
  if ((n)) goto L_ef;
  e = (e + r#1);
  (e + r#1);
  n = true;
  goto L_ef;
  // [栈深重同步 1 -> 0]
  e = (e + r#1);
  (e + r#1);
  i = <i_new>;
  (i++);
  goto L_21;
  return e;
}

// fn <atom:0>  args=3 vars=33 closure=0 cpool=26 bc=532B file=dil_cel/src/utils/Formatting
// args: require, module, exports
// locals: r, t, e, n, i, o, u, c, s, a, l, f, g, d, m, p, b, N, h, v, F, y, S, $, x, w, C, M, W, E
function {
  i = function i;
  o = function o;
  u = function u;
  c = function c;
  s = function s;
  a = function a;
  l = function l;
  f = function f;
  g = function g;
  d = function d;
  m = function m;
  p = function p;
  b = function b;
  N = function N;
  h = function h;
  v = function v;
  F = function F;
  y = function y;
  S = function S;
  $ = function $;
  x = function x;
  w = function w;
  C = function C;
  M = function M;
  W = function W;
  E = function E;
  let n;
  let e;
  let t;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.round = undefined;
  exports.slice = undefined;
  exports.localeNumberToString = undefined;
  exports.localeStringToNumber = undefined;
  exports.localeSanitizeNumberString = undefined;
  exports.localeConvertCurrency = undefined;
  exports.localeFormatCurrency = undefined;
  exports.formatSigFigs = undefined;
  exports.toNumber = undefined;
  r = require("valdi_core/src/utils/NumberUtils");
  t = require("./Warnings");
  e = 2;
  n = {BHD: 3, CLF: 4, CLP: 0, DJF: 0, GNF: 0, IQD: 3, JPY: 0, KMF: 0, KRW: 0, KWD: 3, LYD: 3, OMR: 3, PYG: 0, RWF: 0, TND: 3, UGX: 0, UYI: 0, VND: 0, VUV: 0, XAF: 0, XOF: 0, XPF: 0};
  exports.round = i;
  exports.slice = o;
  exports.localeNumberToString = u;
  exports.localeStringToNumber = c;
  exports.localeSanitizeNumberString = s;
  exports.localeConvertCurrency = a;
  exports.localeFormatCurrency = l;
  exports.formatSigFigs = f;
  exports.toNumber = g;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/utils/Formatting
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
