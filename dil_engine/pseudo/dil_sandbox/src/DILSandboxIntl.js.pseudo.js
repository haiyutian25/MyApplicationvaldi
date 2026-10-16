// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=dil_sandbox/src/DILSandboxIntl
// args: t
// closure: f, r
function {
  return f(t, r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=dil_sandbox/src/DILSandboxIntl
// args: t
// closure: d, r
function {
  return d(t, r);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=dil_sandbox/src/DILSandboxIntl
// closure: r
function {
  return r;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=3 bc=92B file=dil_sandbox/src/DILSandboxIntl
// args: e
// locals: r
// closure: f, d, m, t
function {
  e = ...0;
  let r;
  r = m(e[0], e[1]);
  return t.hardenApiFacade({format: function <atom:0>, formatToParts: function <atom:0>, resolvedOptions: function <atom:0>});   // tail call
}

// fn s  args=1 vars=4 closure=4 cpool=1 bc=310B file=dil_sandbox/src/DILSandboxIntl
// args: e
// locals: r, n, i
// closure: f, d, m, t
function {
  let i;
  let n;
  let r;
  r = e.Intl;
  if (!((r == null))) goto L_3c;
  r;
  goto L_5d;
  if (!(("function" == typeof undefined.NumberFormat))) goto L_62;
  return;
  n = function <atom:0>;
  Object.setPrototypeOf(n.prototype, null);
  i = t.hardenApiFacade({NumberFormat: n});
  Object.defineProperty(e, "Intl", {configurable: false, enumerable: false, value: i, writable: false});
  return;
}

// fn m  args=2 vars=11 closure=5 cpool=2 bc=1287B file=dil_sandbox/src/DILSandboxIntl
// args: e, r
// locals: i, t, o, a, u, c, s, m, f
// closure: n, p, t, g, l
function {
  let f;
  let m;
  let s;
  let c;
  let u;
  let a;
  let o;
  let i;
  if (!((undefined !== e))) goto L_35;
  if (!(("en-US" !== e))) goto L_35;
  throw new RangeError("Intl.NumberFormat compatibility supports only en-US.");
  if (!((undefined !== r))) goto L_5a;
  if (((null === r))) goto L_49;
  if (!(("object" != typeof r))) goto L_5a;
  throw new TypeError("Intl.NumberFormat options must be an object.");
  if (!((r == null))) goto L_61;
  r;
  i = {};
  let t;
  for (const t of Object.keys(i)) {
    if (!(!n.has(t))) continue;
    throw new RangeError("Intl.NumberFormat option '".concat(t, "' is not supported."));
  }
  if (!((i.style == null))) goto L_131;
  i.style;
  o = "decimal";
  if (!(("decimal" !== o))) goto L_189;
  if (!(("currency" !== o))) goto L_189;
  throw new RangeError("Intl.NumberFormat style '".concat(String(o), "' is not supported."));
  if (!(("currency" === o))) goto L_225;
  if ((("string" != typeof i.currency))) goto L_214;
  if (!(!new RegExp("^[A-Za-z]{3}$").test(i.currency))) goto L_225;
  throw new RangeError("Intl.NumberFormat currency must be a three-letter code.");
  if (!(("currency" === o))) goto L_280;
  goto L_281;
  // [栈深重同步 1 -> 0]
  a = undefined;
  if (!((undefined !== i.useGrouping))) goto L_2e6;
  if (!(("boolean" != typeof i.useGrouping))) goto L_2e6;
  throw new TypeError("Intl.NumberFormat useGrouping must be a boolean.");
  u = p(i.maximumSignificantDigits);
  if (!((undefined !== u))) goto L_38b;
  if (!((i.useGrouping == null))) goto L_383;
  i.useGrouping;
  return t.hardenApiFacade({currency: a, maximumSignificantDigits: u, minimumSignificantDigits: 1, style: o, useGrouping: true});   // tail call
  if (!((undefined === a))) goto L_395;
  goto L_39a;
  // [栈深重同步 1 -> 0]
  c = g(a);
  s = l(i.maximumFractionDigits);
  if (!((l(i.minimumFractionDigits) == null))) goto L_436;
  l(i.minimumFractionDigits);
  if (!((c == null))) goto L_422;
  c;
  if (!((s == null))) goto L_433;
  s;
  if (!((c == null))) goto L_433;
  c;
  m = Math.min(0, 0);
  if (!((s == null))) goto L_475;
  s;
  if (!((c == null))) goto L_46f;
  c;
  f = Math.max(3, m);
  if (!((m > f))) goto L_48f;
  throw new RangeError("Intl.NumberFormat minimumFractionDigits cannot exceed maximumFractionDigits.");
  if (!((i.useGrouping == null))) goto L_4ff;
  i.useGrouping;
  return t.hardenApiFacade({currency: a, maximumFractionDigits: f, minimumFractionDigits: m, style: o, useGrouping: true});   // tail call
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=96B file=dil_sandbox/src/DILSandboxIntl
// args: t
// closure: e
function {
  if (!((undefined !== t))) goto L_5f;
  if ((("number" != typeof t))) goto L_4c;
  if ((!Number.isInteger(t))) goto L_4c;
  if (((t < 0))) goto L_4c;
  if (!((t > e))) goto L_5d;
  throw new RangeError("Intl.NumberFormat fraction digits must be an integer from 0 to 20.");
  return t;
  return;
}

// fn p  args=1 vars=1 closure=1 cpool=0 bc=96B file=dil_sandbox/src/DILSandboxIntl
// args: t
// closure: r
function {
  if (!((undefined !== t))) goto L_5f;
  if ((("number" != typeof t))) goto L_4c;
  if ((!Number.isInteger(t))) goto L_4c;
  if (((t < 1))) goto L_4c;
  if (!((t > r))) goto L_5d;
  throw new RangeError("Intl.NumberFormat significant digits must be an integer from 1 to 21.");
  return t;
  return;
}

// fn g  args=1 vars=1 closure=3 cpool=0 bc=134B file=dil_sandbox/src/DILSandboxIntl
// args: t
// closure: i, o, a
function {
  if (!(i.has(t))) goto L_2c;
  return 0;
  if (!(o.has(t))) goto L_58;
  return 3;
  if (!(a.has(t))) goto L_84;
  return 4;
  return 2;
}

// fn f  args=2 vars=4 closure=2 cpool=0 bc=348B file=dil_sandbox/src/DILSandboxIntl
// args: t, e
// locals: r, n
// closure: b, u
function {
  let n;
  let r;
  r = b(t, e);
  if (!((undefined === e.currency))) goto L_35;
  return r;
  if (!((u[e.currency] == null))) goto L_ac;
  u[e.currency];
  n = "".concat(e.currency, " ");
  if (!(r.startsWith("-"))) goto L_130;
  return "-".concat(n, r.slice(1));
  return "".concat(n, r);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=106B file=dil_sandbox/src/DILSandboxIntl
// args: t
// locals: e
// closure: c, r
function {
  let e;
  if (!((c[t] == null))) goto L_1e;
  c[t];
  if (!(r)) goto L_19;
  goto L_1e;
  // [栈深重同步 1 -> 0]
  e = "integer";
  if ((r)) goto L_2d;
  r = ("." === t);
  ("." === t);
  return Object.freeze({type: e, value: t});   // tail call
}

// fn d  args=2 vars=4 closure=2 cpool=3 bc=198B file=dil_sandbox/src/DILSandboxIntl
// args: t, e
// locals: r, n
// closure: c, b
function {
  let n;
  let r;
  if (!((undefined !== e.currency))) goto L_3b;
  throw new RangeError("Intl.NumberFormat currency formatToParts is not supported.");
  r = false;
  if (!((b(t, e).match(new RegExp("^-|\\d+|,|\\.")) == null))) goto L_73;
  b(t, e).match(new RegExp("^-|\\d+|,|\\."));
  n = [].map(function <atom:0>);
  return Object.freeze(n);   // tail call
}

// fn b  args=2 vars=6 closure=1 cpool=6 bc=723B file=dil_sandbox/src/DILSandboxIntl
// args: t, e
// locals: r, n, i, o
// closure: F
function {
  let o;
  let i;
  let n;
  let r;
  if (!(("bigint" == typeof t))) goto L_25;
  throw new TypeError("Intl.NumberFormat BigInt values are not supported.");
  r = Number(t);
  if ((!Number.isFinite(r))) goto L_8d;
  if (!((Math.abs(r) >= 1e+21))) goto L_9e;
  throw new RangeError("Intl.NumberFormat value is outside the supported range.");
  n = F(Math.abs(r), e.maximumFractionDigits, e.maximumSignificantDigits);
  if (((undefined === undefined))) goto L_128;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  if (!((<value(_it1)> === undefined))) goto L_124;
  <value(_it1)>;
  o = "";
  goto L_157;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_116;
  // [栈深重同步 1 -> 0]
  if (!((e.minimumFractionDigits == null))) goto L_1cd;
  e.minimumFractionDigits;
  o = o.replace(new RegExp("0+$"), "").padEnd(0, "0");
  o.replace(new RegExp("0+$"), "").padEnd(0, "0");
  if (!(e.useGrouping)) goto L_232;
  i = i.replace(new RegExp("\\B(?=(\\d{3})+(?!\\d))"), ",");
  i.replace(new RegExp("\\B(?=(\\d{3})+(?!\\d))"), ",");
  if (((r < 0))) goto L_28c;
  if (!(Object.is(r, -0))) goto L_295;
  goto L_296;
  // [栈深重同步 3 -> 2]
  if (!((0 === o.length))) goto L_2a4;
  goto L_2d0;
  // [栈深重同步 5 -> 4]
  return "".concat("", i, ".".concat(o));   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=1 bc=86B file=dil_sandbox/src/DILSandboxIntl
// args: t, e, r
function {
  return "".concat((Number(e) + 1), "0".repeat(r.length));   // tail call
}

// fn F  args=3 vars=13 closure=0 cpool=14 bc=942B file=dil_sandbox/src/DILSandboxIntl
// args: t, e, r
// locals: n, i, o, a, u, c, s, t#1, m, l
function {
  let l;
  let m;
  let s;
  let c;
  let u;
  let a;
  let o;
  let i;
  let n;
  if (((undefined === undefined))) goto L_33;
  const _it1 = undefined;
  <done(_it1)>;
  n = <value(_it1)>;
  <done(_it1)>;
  if (!((<value(_it1)> === undefined))) goto L_2f;
  <value(_it1)>;
  i = "0";
  goto L_66;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_20;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_7d;
  const _it2 = undefined;
  <done(_it2)>;
  o = <value(_it2)>;
  <done(_it2)>;
  if (!((<value(_it2)> === undefined))) goto L_79;
  <value(_it2)>;
  a = "";
  goto L_ac;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_6b;
  // [栈深重同步 1 -> 0]
  u = (o + a);
  c = (o.length + Number(i));
  if (!((e == null))) goto L_cc;
  e;
  s = 0;
  if (!((undefined !== r))) goto L_11c;
  let t#1;
  t#1 = u.search(new RegExp("[1-9]"));
  if (!((t#1 < 0))) goto L_10e;
  return "0";
  s = ((t#1 + r) - c);
  ((t#1 + r) - c);
  m = (c + s);
  l = u.slice(0, Math.max(0, m)).padEnd(Math.max(0, m), "0");
  if (!((m >= 0))) goto L_269;
  if (!((Number(u.charAt(m)) >= 5))) goto L_269;
  l = "0".concat(l).replace(new RegExp("([0-8])(9*)$"), function <atom:0>);
  "0".concat(l).replace(new RegExp("([0-8])(9*)$"), function <atom:0>);
  l = l.replace(new RegExp("^0+(?=\\d)"), "").padStart(1, "0");
  l.replace(new RegExp("^0+(?=\\d)"), "").padStart(1, "0");
  if (!((s <= 0))) goto L_2f9;
  return (l + "0".repeat(-s));
  l = l.padStart((s + 1), "0");
  l.padStart((s + 1), "0");
  return "".concat(l.slice(0, -s), ".", l.slice(-s));
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=9 bc=401B file=dil_sandbox/src/DILSandboxIntl
// args: require, module, exports
// locals: t, e, r, n, i, o, a, u, c, s, m, l, p, g, f, d, b, F
function {
  s = function s;
  m = function m;
  l = function l;
  p = function p;
  g = function g;
  f = function f;
  d = function d;
  b = function b;
  F = function F;
  let c;
  let u;
  let a;
  let o;
  let i;
  let n;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.installDILSandboxIntlGlobal = undefined;
  t = require("dil_renderer/src/DILApiFacade");
  e = 20;
  r = 21;
  n = new Set(["currency", "maximumFractionDigits", "maximumSignificantDigits", "minimumFractionDigits", "style", "useGrouping"]);
  i = new Set("ADP AFN ALL BIF BYR CLP COP DJF ESP GNF HUF IDR IQD IRR ISK ITL JPY KMF KPW KRW LAK LBP LUF MGA MGF MMK MRO PKR PYG RWF SLL SOS STD SYP TMM TRL UGX UYI VND VUV XAF XOF XPF YER ZMK ZWD".split(" "));
  o = new Set(["BHD", "JOD", "KWD", "LYD", "OMR", "TND"]);
  a = new Set(["CLF", "UYW"]);
  u = {EUR: "€", GBP: "�", JPY: "�", USD: "$"};
  c = {,: "group", -: "minusSign", .: "decimal"};
  exports.installDILSandboxIntlGlobal = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxIntl
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
