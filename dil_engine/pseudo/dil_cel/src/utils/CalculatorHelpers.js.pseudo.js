// fn n  args=3 vars=6 closure=1 cpool=0 bc=874B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n, r
// locals: e, u, t#1
// closure: v
function {
  let e;
  if (!(("string" != typeof r))) goto L_f;
  return "";
  e = [];
  let u;
  u = 0;
  if (!((u < r.length))) goto L_33e;
  let t#1;
  t#1 = r.charAt(u);
  if ((("s" !== t#1))) goto L_8f;
  if (!(("sin⁻¹" !== r.substring(u, (u + 5))))) goto L_2fc;
  if ((("c" !== t#1))) goto L_d4;
  if (!(("cos⁻¹" !== r.substring(u, (u + 5))))) goto L_2c4;
  if ((("t" !== t#1))) goto L_119;
  if (!(("tan⁻¹" !== r.substring(u, (u + 5))))) goto L_28c;
  if (!(("π" !== t#1))) goto L_25d;
  if (!(("�" !== t#1))) goto L_22e;
  if (!(("�" !== t#1))) goto L_1ff;
  if (!(("√" !== t#1))) goto L_1d0;
  if (!(("
" !== t#1))) goto L_332;
  if (!(("" !== t#1))) goto L_332;
  if (!(("�" !== t#1))) goto L_332;
  if (!((" " !== t#1))) goto L_332;
  if (!((" " !== t#1))) goto L_332;
  goto L_332;
  // [栈深重同步 1 -> 0]
  goto L_332;
  // [栈深重同步 1 -> 0]
  goto L_332;
  // [栈深重同步 1 -> 0]
  goto L_332;
  // [栈深重同步 1 -> 0]
  goto L_332;
  // [栈深重同步 1 -> 0]
  e.push("atan");
  u = (u + 4);
  goto L_332;
  // [栈深重同步 1 -> 0]
  e.push("acos");
  u = (u + 4);
  goto L_332;
  // [栈深重同步 1 -> 0]
  e.push("asin");
  u = (u + 4);
  (u + 4);
  u = <u_new>;
  (u++);
  goto L_18;
  return v(e.join(""));   // tail call
}

// fn r  args=3 vars=7 closure=4 cpool=2 bc=326B file=dil_cel/src/utils/CalculatorHelpers
// args: r, e, u
// locals: s, n, r#1, e#1
// closure: n, L, O, t
function {
  let s;
  s = n(r, e, u);
  if (!(!new RegExp("^[0-9+\\-*/%().,\\sA-Za-z]*$").test(s))) goto L_3b;
  return false;
  let n;
  n = 0;
  if (!((n < s.length))) goto L_143;
  let e#1;
  let r#1;
  if ((!L(s.charAt(n)))) goto L_138;
  r#1 = n;
  n = <n_new>;
  (n++);
  if (!((n < s.length))) goto L_d3;
  if (!(O(s.charAt(n)))) goto L_d3;
  n = <n_new>;
  (n++);
  goto L_91;
  e#1 = s.substring(r#1, n);
  if (!((undefined === t.MATH_HELPERS[e#1]))) goto L_130;
  return false;
  n = <n_new>;
  (n--);
  n = <n_new>;
  (n++);
  goto L_40;
  return true;
}

// fn e  args=3 vars=5 closure=0 cpool=6 bc=285B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n, r
// locals: e, u
function {
  let u;
  let e;
  if ((("" === r))) goto L_10;
  if (!((null == r))) goto L_14;
  return "";
  e = Number(r);
  if (!(!Number.isFinite(e))) goto L_4d;
  return "";
  if (!(Object.is(e, -0))) goto L_80;
  return "0";
  u = e.toFixed(8).replace(new RegExp("(\\.\\d*?[1-9])0+$"), "$1").replace(new RegExp("\\.0+$"), "");
  if ((("" === u))) goto L_114;
  if (!(("-0" === u))) goto L_119;
  return "0";
  return u;
}

// fn c  args=3 vars=8 closure=4 cpool=1 bc=608B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n, r
// locals: e, s, c, a, t#1
// closure: i, u, o, p
function {
  let a;
  let c;
  let s;
  let e;
  if ((("string" != typeof r))) goto L_1c;
  if (!((0 === r.length))) goto L_20;
  return "";
  if (!(!i.test(r))) goto L_4d;
  return r;
  e = r.startsWith("-");
  if (!(e)) goto L_a5;
  goto L_a6;
  // [栈深重同步 1 -> 0]
  s = r;
  if (((undefined === undefined))) goto L_c5;
  const _it1 = undefined;
  <done(_it1)>;
  if (!((<value(_it1)> === undefined))) goto L_b7;
  <value(_it1)>;
  c = "0";
  <done(_it1)>;
  if (!((<value(_it1)> === undefined))) goto L_c1;
  <value(_it1)>;
  a = "";
  goto L_f5;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_ac;
  // [栈深重同步 1 -> 0]
  if (!(((c.length + a.length) <= u))) goto L_176;
  if (!((a.length <= o))) goto L_110;
  return r;
  if (!(e)) goto L_13e;
  goto L_13f;
  // [栈深重同步 3 -> 2]
  return "".concat("", c, ".", a.substring(0, o));
  if (!((a.length > 0))) goto L_256;
  if (!((c.length < u))) goto L_256;
  let t#1;
  t#1 = Math.min(o, Math.max(1, (u - c.length)));
  if (!(e)) goto L_21f;
  goto L_220;
  // [栈深重同步 3 -> 2]
  return "".concat("", c, ".", a.substring(0, t#1));   // tail call
  return p(s, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=dil_cel/src/utils/CalculatorHelpers
// args: t
function {
  return ("whitespace" !== t.type);
}

// fn <atom:0>  args=2 vars=2 closure=5 cpool=0 bc=321B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n
// closure: g, l, x, e, a
function {
  if (!(("number" === t.type))) goto L_4f;
  return g(t.value);
  if (!(("operator" === t.type))) goto L_11e;
  if (!(l.has(t.value))) goto L_11e;
  if (!(!x(e, n))) goto L_11e;
  return "".concat(a, t.value, a);
  return t.value;
}

// fn f  args=3 vars=4 closure=5 cpool=2 bc=145B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n, r
// locals: e
// closure: g, l, x, a, $
function {
  let e;
  if ((("string" != typeof r))) goto L_13;
  if (!((0 === r.length))) goto L_17;
  return "";
  e = $(r).filter(function <atom:0>);
  return e.map(function <atom:0>).join("");   // tail call
}

// fn p  args=2 vars=8 closure=3 cpool=1 bc=545B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n
// locals: r, e, u, i, c, a
// closure: h, s, o
function {
  let a;
  let c;
  let i;
  let u;
  let e;
  let r;
  r = h(t);
  if (!((undefined === r))) goto L_20;
  return "0";
  if (!(n)) goto L_2a;
  goto L_2b;
  // [栈深重同步 1 -> 0]
  e = "";
  u = "e".concat(r.exponent);
  i = Math.max(1, ((s - e.length) - u.length));
  if (!((i >= 3))) goto L_118;
  goto L_119;
  // [栈深重同步 1 -> 0]
  c = 1;
  a = r.significantDigits.substring(0, c);
  if (!((a.length <= 1))) goto L_1a0;
  return "".concat(e, a, u);
  return "".concat(e, a.charAt(0), ".", a.substring(1), u);
}

// fn h  args=1 vars=5 closure=0 cpool=7 bc=355B file=dil_cel/src/utils/CalculatorHelpers
// args: t
// locals: n, r, e, u
function {
  let u;
  let e;
  let r;
  let n;
  if (((undefined === undefined))) goto L_2a;
  const _it1 = undefined;
  <done(_it1)>;
  if (!((<value(_it1)> === undefined))) goto L_1c;
  <value(_it1)>;
  n = "0";
  <done(_it1)>;
  if (!((<value(_it1)> === undefined))) goto L_26;
  <value(_it1)>;
  r = "";
  goto L_58;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_11;
  // [栈深重同步 1 -> 0]
  e = n.replace(new RegExp("^0+(?=\\d)"), "");
  if (!(new RegExp("[1-9]").test(e))) goto L_f1;
  return {exponent: (e.length - 1), significantDigits: "".concat(e, r)};
  u = r.search(new RegExp("[1-9]"));
  if (!((u < 0))) goto L_127;
  return undefined;
  return {exponent: -(u + 1), significantDigits: r.substring(u)};
}

// fn g  args=1 vars=7 closure=1 cpool=2 bc=555B file=dil_cel/src/utils/CalculatorHelpers
// args: t
// locals: n, r, e, u, s, o
// closure: A
function {
  let o;
  let s;
  let u;
  let e;
  let r;
  let n;
  if (!(t.includes("_"))) goto L_40;
  return t;
  n = new RegExp("^(?<mantissa>(?:\\d+(?:\\.\\d*)?|\\.\\d+))(?<exponent>[eE][+-]?\\d*)?$").exec(t);
  if (!((n == null))) goto L_77;
  n;
  goto L_98;
  if (!((undefined === undefined.groups))) goto L_9d;
  return t;
  if (((undefined === undefined))) goto L_f2;
  r = <to_object>(undefined).mantissa;
  if (!((<to_object>(undefined).exponent === undefined))) goto L_ee;
  <to_object>(undefined).exponent;
  e = "";
  <to_object>(undefined);
  goto L_119;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_a2;
  // [栈深重同步 1 -> 0]
  if ((("" !== e))) goto L_14e;
  if (!(r.startsWith("."))) goto L_17b;
  return "".concat(r, e);   // tail call
  if (((undefined === undefined))) goto L_18d;
  const _it1 = undefined;
  <done(_it1)>;
  u = <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  goto L_1bd;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_180;
  // [栈深重同步 1 -> 0]
  o = A(u);
  if (!((undefined === s))) goto L_1f7;
  return "".concat(o, e);
  return "".concat(o, ".", s, e);
}

// fn A  args=1 vars=1 closure=1 cpool=2 bc=45B file=dil_cel/src/utils/CalculatorHelpers
// args: t
// closure: a
function {
  return t.replace(new RegExp("\\B(?=(\\d{3})+(?!\\d))"), a);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=2 bc=42B file=dil_cel/src/utils/CalculatorHelpers
// args: t
function {
  return new RegExp("\\s").test(t);   // tail call
}

// fn $  args=1 vars=8 closure=7 cpool=3 bc=797B file=dil_cel/src/utils/CalculatorHelpers
// args: t
// locals: n, r, e, e#1, e#2, e#3, e#4
// closure: E, M, d, L, O, m, _
function {
  let r;
  let n;
  n = [];
  r = 0;
  if (!((r < t.length))) goto L_319;
  let e;
  e = t.charAt(r);
  if (!(new RegExp("\\s").test(e))) goto L_ed;
  let e#1;
  e#1 = E(t, (r + 1), function <atom:0>);
  n.push({type: "whitespace", value: t.substring(r, e#1)});
  r = e#1;
  e#1;
  goto L_c;
  if (!(M(t, r))) goto L_16e;
  let e#2;
  e#2 = d(t, r);
  n.push({type: "number", value: t.substring(r, e#2)});
  r = e#2;
  e#2;
  goto L_c;
  if (!(L(e))) goto L_1f3;
  let e#3;
  e#3 = E(t, (r + 1), O);
  n.push({type: "identifier", value: t.substring(r, e#3)});
  r = e#3;
  e#3;
  goto L_c;
  if (((""" === e))) goto L_209;
  if (!(("'" === e))) goto L_286;
  let e#4;
  e#4 = m(t, r);
  n.push({type: "string", value: t.substring(r, e#4)});
  r = e#4;
  e#4;
  goto L_c;
  if (!(_(e))) goto L_2d3;
  n.push({type: "operator", value: e});
  r = <r_new>;
  goto L_315;
  // [栈深重同步 1 -> 0]
  n.push({type: "punctuation", value: e});
  r = <r_new>;
  (r++);
  goto L_c;
  return n;
}

// fn x  args=2 vars=4 closure=0 cpool=0 bc=308B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n
// locals: r, e
function {
  let e;
  let r;
  r = t[n];
  if (!((r == null))) goto L_1a;
  r;
  goto L_3b;
  if ((("operator" !== undefined.type))) goto L_96;
  if (!(("-" !== r.value))) goto L_9b;
  if (!(("+" !== r.value))) goto L_9b;
  return false;
  e = t[(n - 1)];
  if (((undefined === e))) goto L_133;
  if ((("operator" === e.type))) goto L_133;
  if ((("(" === e.value))) goto L_133;
  return ("," === e.value);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=15B file=dil_cel/src/utils/CalculatorHelpers
// args: t
// closure: R
function {
  if ((R(t))) goto L_e;
  return ("_" === t);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=15B file=dil_cel/src/utils/CalculatorHelpers
// args: t
// closure: R
function {
  if ((R(t))) goto L_e;
  return ("_" === t);
}

// fn d  args=2 vars=4 closure=2 cpool=2 bc=385B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n
// locals: r, n#1
// closure: R, E
function {
  let r;
  r = n;
  if (!(("." === t.charAt(r)))) goto L_3e;
  r = <r_new>;
  (r++);
  r = E(t, r, function <atom:0>);
  E(t, r, function <atom:0>);
  if (!(("." === t.charAt(r)))) goto L_92;
  r = <r_new>;
  (r++);
  r = E(t, r, function <atom:0>);
  E(t, r, function <atom:0>);
  if ((("e" === t.charAt(r)))) goto L_f3;
  if (!(("E" === t.charAt(r)))) goto L_17d;
  let n#1;
  n#1 = (r + 1);
  if (!(("+" !== t.charAt(n#1)))) goto L_161;
  if ((("-" !== t.charAt(n#1)))) goto L_16c;
  n#1 = <n#1_new>;
  (n#1++);
  n#1 = E(t, n#1, R);
  E(t, n#1, R);
  return n#1;
  return r;
}

// fn m  args=2 vars=5 closure=0 cpool=0 bc=148B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n
// locals: r, e, n#1
function {
  let r;
  r = t.charAt(n);
  let e;
  e = (n + 1);
  if (!((e < t.length))) goto L_91;
  let n#1;
  n#1 = t.charAt(e);
  if (!(("\" !== n#1))) goto L_7f;
  if (!((n#1 === r))) goto L_87;
  return (e + 1);
  e = <e_new>;
  (e++);
  e = <e_new>;
  (e++);
  goto L_31;
  return t.length;
}

// fn b  args=2 vars=3 closure=0 cpool=0 bc=82B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n
// locals: r
function {
  let r;
  r = (n + 2);
  if (!((r < t.length))) goto L_4f;
  if (!((""" === t.charAt(r)))) goto L_45;
  return (r + 1);
  r = <r_new>;
  (r++);
  goto L_7;
  return t.length;
}

// fn v  args=1 vars=8 closure=5 cpool=0 bc=551B file=dil_cel/src/utils/CalculatorHelpers
// args: t
// locals: n, r, e, e#1, e#2, u, s
// closure: m, b, C, R, y
function {
  let n;
  n = "";
  let r;
  r = 0;
  if (!((r < t.length))) goto L_223;
  let s;
  let u;
  let e;
  e = t.charAt(r);
  if (((""" === e))) goto L_5d;
  if (!(("'" === e))) goto L_aa;
  let e#1;
  e#1 = m(t, r);
  n = (n + t.substring(r, e#1));
  (n + t.substring(r, e#1));
  r = (e#1 - 1);
  (e#1 - 1);
  goto L_218;
  if (!(("r" === e))) goto L_133;
  if (!((""" === t.charAt((r + 1))))) goto L_133;
  let e#2;
  e#2 = b(t, r);
  n = (n + t.substring(r, e#2));
  (n + t.substring(r, e#2));
  r = (e#2 - 1);
  (e#2 - 1);
  goto L_218;
  if (!(("." !== e))) goto L_14d;
  n = (n + e);
  (n + e);
  goto L_218;
  u = C(t, (r - 1));
  if (!((u < 0))) goto L_16f;
  n = (n + "0.");
  (n + "0.");
  goto L_218;
  s = t.charAt(u);
  if (!(R(s))) goto L_1ad;
  n = (n + e);
  goto L_217;
  // [栈深重同步 1 -> 0]
  if (!(("(" !== s))) goto L_1fa;
  if (!(("," !== s))) goto L_1fa;
  if (!(("*" !== s))) goto L_1fa;
  if (!(("/" !== s))) goto L_1fa;
  if (!(("+" !== s))) goto L_1fa;
  if ((("-" !== s))) goto L_206;
  if (!(y(t, u))) goto L_20d;
  goto L_212;
  // [栈深重同步 2 -> 1]
  n = (n + "0.");
  (n + "0.");
  r = <r_new>;
  (r++);
  goto L_a;
  return n;
}

// fn C  args=2 vars=3 closure=0 cpool=2 bc=112B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n
// locals: r
function {
  let r;
  r = n;
  if (!((r >= 0))) goto L_6e;
  if (!(!new RegExp("\\s").test(t.charAt(r)))) goto L_64;
  return r;
  r = <r_new>;
  (r--);
  goto L_5;
  return -1;
}

// fn y  args=2 vars=6 closure=2 cpool=0 bc=270B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n
// locals: r, e, u, s
// closure: C, R
function {
  let s;
  let u;
  let e;
  let r;
  r = t.charAt(n);
  if (!(("+" !== r))) goto L_4c;
  if (!(("-" !== r))) goto L_4c;
  return false;
  e = C(t, (n - 1));
  if (!((e < 0))) goto L_5d;
  return false;
  u = t.charAt(e);
  if (!(("E" !== u))) goto L_9f;
  if (!(("e" !== u))) goto L_9f;
  return false;
  s = C(t, (e - 1));
  if (!((s >= 0))) goto L_10d;
  if ((R(t.charAt(s)))) goto L_10d;
  return ("." === t.charAt(s));
}

// fn E  args=3 vars=4 closure=0 cpool=0 bc=71B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n, r
// locals: e
function {
  let e;
  e = n;
  if (!((e < t.length))) goto L_43;
  if (!(r(t.charAt(e)))) goto L_43;
  e = <e_new>;
  (e++);
  goto L_5;
  return e;
}

// fn M  args=2 vars=3 closure=1 cpool=0 bc=107B file=dil_cel/src/utils/CalculatorHelpers
// args: t, n
// locals: r
// closure: R
function {
  let r;
  r = t.charAt(n);
  if ((R(r))) goto L_6a;
  if (!(("." === r))) goto L_6a;
  return R(t.charAt((n + 1)));
}

// fn R  args=1 vars=2 closure=0 cpool=0 bc=59B file=dil_cel/src/utils/CalculatorHelpers
// args: t
// locals: n
function {
  let n;
  n = t.charCodeAt(0);
  if (!((n >= 48))) goto L_3a;
  return (n <= 57);
}

// fn _  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_cel/src/utils/CalculatorHelpers
// args: t
// closure: l
function {
  return l.has(t);   // tail call
}

// fn L  args=1 vars=2 closure=0 cpool=0 bc=89B file=dil_cel/src/utils/CalculatorHelpers
// args: t
// locals: n
function {
  let n;
  n = t.charCodeAt(0);
  if (!((n >= 65))) goto L_3a;
  if (((n <= 90))) goto L_58;
  if (!((n >= 97))) goto L_4e;
  if (((n <= 122))) goto L_58;
  return (95 === n);
}

// fn O  args=1 vars=2 closure=1 cpool=0 bc=66B file=dil_cel/src/utils/CalculatorHelpers
// args: t
// locals: n
// closure: L
function {
  let n;
  n = t.charCodeAt(0);
  if ((L(t))) goto L_41;
  if (!((n >= 48))) goto L_41;
  return (n <= 57);
}

// fn <atom:0>  args=3 vars=33 closure=0 cpool=25 bc=421B file=dil_cel/src/utils/CalculatorHelpers
// args: require, module, exports
// locals: t, n, r, e, u, s, o, i, c, a, l, f, p, h, g, A, $, x, d, m, b, v, C, y, E, M, R, _, L, O
function {
  n = function n;
  r = function r;
  e = function e;
  c = function c;
  f = function f;
  p = function p;
  h = function h;
  g = function g;
  A = function A;
  $ = function $;
  x = function x;
  d = function d;
  m = function m;
  b = function b;
  v = function v;
  C = function C;
  y = function y;
  E = function E;
  M = function M;
  R = function R;
  _ = function _;
  L = function L;
  O = function O;
  let l;
  let a;
  let i;
  let o;
  let s;
  let u;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CALCULATOR_HELPERS = undefined;
  exports.normalizeCalculatorExprInput = undefined;
  exports.isSafeCalculatorExprInput = undefined;
  exports.formatCalculatorResult = undefined;
  exports.formatCalculatorOutputValue = undefined;
  exports.formatCalculatorDisplayValue = undefined;
  t = require("./MathHelpers");
  exports.CALCULATOR_HELPERS = {formatCalculatorDisplayValue: f, formatCalculatorOutputValue: c, formatCalculatorResult: e, isSafeCalculatorExprInput: r, normalizeCalculatorExprInput: n};
  exports.normalizeCalculatorExprInput = n;
  exports.isSafeCalculatorExprInput = r;
  exports.formatCalculatorResult = e;
  u = 18;
  s = 18;
  o = 8;
  i = new RegExp("^-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)$");
  exports.formatCalculatorOutputValue = c;
  a = "�";
  l = new Set(["+", "-", "*", "/", "%", "^", "�", "�"]);
  exports.formatCalculatorDisplayValue = f;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/utils/CalculatorHelpers
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
