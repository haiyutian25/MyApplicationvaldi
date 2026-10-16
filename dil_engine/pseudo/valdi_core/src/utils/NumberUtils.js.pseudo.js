// fn i  args=3 vars=8 closure=2 cpool=0 bc=123B file=valdi_core/src/utils/NumberUtils
// args: t, i, n
// locals: t#1, i#1, n#1, o, m
// closure: r, e
function {
  let n#1;
  let i#1;
  let t#1;
  t#1 = t;
  if (!((i === undefined))) goto L_13;
  i;
  i = -1;
  i#1 = -1;
  n#1 = n;
  let m;
  let o;
  if (!(r)) goto L_2a;
  return r(t, i, n);   // tail call
  o = undefined;
  if (!((-1 !== i))) goto L_44;
  o = {minimumFractionDigits: i, maximumFractionDigits: i};
  {minimumFractionDigits: i, maximumFractionDigits: i};
  if (!(n)) goto L_4d;
  goto L_4e;
  // [栈深重同步 1 -> 0]
  m = undefined;
  return t.toLocaleString(m, o);   // tail call
}

// fn e  args=1 vars=1 closure=0 cpool=2 bc=90B file=valdi_core/src/utils/NumberUtils
// args: r
function {
  return r.split("@")[0].replace(new RegExp("_"), "-");   // tail call
}

// fn n  args=3 vars=4 closure=2 cpool=0 bc=422B file=valdi_core/src/utils/NumberUtils
// args: r, i, n
// locals: o
// closure: t, e
function {
  let o;
  if (!(t)) goto L_91;
  if (!((n == null))) goto L_19;
  n;
  goto L_3a;
  if (!((n == null))) goto L_43;
  n;
  goto L_64;
  if (!((n == null))) goto L_6d;
  n;
  goto L_8e;
  return t(r, i, undefined.minimumFractionDigits, undefined.maximumFractionDigits, undefined.localeIdentifier);   // tail call
  if (!((n == null))) goto L_9a;
  n;
  goto L_bb;
  if (!(undefined.localeIdentifier)) goto L_e3;
  goto L_e4;
  // [栈深重同步 1 -> 0]
  o = undefined;
  if (!((n == null))) goto L_129;
  n;
  goto L_14a;
  if (!((n == null))) goto L_158;
  n;
  goto L_179;
  return new Intl.NumberFormat(o, {style: "currency", currency: i, minimumFractionDigits: undefined.minimumFractionDigits, maximumFractionDigits: undefined.maximumFractionDigits}).format(r);   // tail call
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=55B file=valdi_core/src/utils/NumberUtils
// args: r
function {
  if (!(("number" == typeof r))) goto L_35;
  return Long.fromNumber(r);
  return r;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=4 bc=263B file=valdi_core/src/utils/NumberUtils
// args: require, module, exports
// locals: r, t, i, m, i#1, e, n, o
function {
  i#1 = function i;
  e = function e;
  n = function n;
  o = function o;
  let t;
  let r;
  r = undefined;
  t = undefined;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.formatNumber = undefined;
  exports.formatNumberWithCurrency = undefined;
  exports.serializeLong = undefined;
  try { // catch -> L_d8
  let i;
  i = require("NumberFormatting");
  r = i.formatNumber;
  i.formatNumber;
  t = i.formatNumberWithCurrency;
  i.formatNumberWithCurrency;
  <?>;
  goto L_e2;
  // [栈深重同步 0 -> 1]
  m = <?>;
  try { // catch -> L_e1
  <?>;
  goto L_e2;
  // [栈深重同步 0 -> 1]
  throw <?>;
  exports.formatNumber = i#1;
  exports.formatNumberWithCurrency = n;
  exports.serializeLong = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/NumberUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
