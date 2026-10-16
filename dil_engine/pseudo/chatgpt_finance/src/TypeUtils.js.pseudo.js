// fn e  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_finance/src/TypeUtils
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=55B file=chatgpt_finance/src/TypeUtils
// args: e
function {
  if (!(("number" == typeof e))) goto L_36;
  return Number.isFinite(e);
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=4B file=chatgpt_finance/src/TypeUtils
// args: e
function {
  return (undefined !== e);
}

// fn n  args=2 vars=2 closure=1 cpool=0 bc=61B file=chatgpt_finance/src/TypeUtils
// args: t, r
// closure: e
function {
  if (!(!e(t))) goto L_3b;
  throw new TypeError("".concat(r, " must be an object"));
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=4B file=chatgpt_finance/src/TypeUtils
// args: e
// closure: t
function {
  return (e === t);
}

// fn o  args=2 vars=2 closure=0 cpool=1 bc=120B file=chatgpt_finance/src/TypeUtils
// args: e, t
function {
  if (!((Object.values(e).find(function <atom:0>) == null))) goto L_77;
  Object.values(e).find(function <atom:0>);
  return e.Unknown;
}

// fn i  args=2 vars=2 closure=0 cpool=0 bc=109B file=chatgpt_finance/src/TypeUtils
// args: e, t
function {
  if ((("string" != typeof e))) goto L_34;
  if (!((0 === e.trim().length))) goto L_6b;
  throw new TypeError("".concat(t, " must be a nonempty string"));
  return e;
}

// fn s  args=2 vars=2 closure=0 cpool=0 bc=119B file=chatgpt_finance/src/TypeUtils
// args: e, t
function {
  if ((("number" != typeof e))) goto L_3e;
  if ((!Number.isInteger(e))) goto L_3e;
  if (!((e < 0))) goto L_75;
  throw new TypeError("".concat(t, " must be a non-negative integer"));
  return e;
}

// fn u  args=2 vars=3 closure=1 cpool=0 bc=72B file=chatgpt_finance/src/TypeUtils
// args: e, t
// locals: r
// closure: s
function {
  let r;
  r = s(e, t);
  if (!((0 === r))) goto L_44;
  throw new TypeError("".concat(t, " must be a positive integer"));
  return r;
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=56B file=chatgpt_finance/src/TypeUtils
// args: e
function {
  if (!(("string" == typeof e))) goto L_36;
  if (!((e.trim().length > 0))) goto L_36;
  return e;
  return undefined;
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=14B file=chatgpt_finance/src/TypeUtils
// args: e
function {
  if (!(("string" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn g  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_finance/src/TypeUtils
// args: e
function {
  if (!(("number" == typeof e))) goto L_3d;
  if (!(Number.isInteger(e))) goto L_3d;
  if (!((e >= 0))) goto L_3d;
  return e;
  return undefined;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=11 bc=346B file=chatgpt_finance/src/TypeUtils
// args: require, module, exports
// locals: e, t, r, n, o, i, s, u, p, a, g
function {
  e = function e;
  t = function t;
  r = function r;
  n = function n;
  o = function o;
  i = function i;
  s = function s;
  u = function u;
  p = function p;
  a = function a;
  g = function g;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isRecord = undefined;
  exports.isFiniteNumber = undefined;
  exports.isDefined = undefined;
  exports.readObject = undefined;
  exports.toEnum = undefined;
  exports.readNonBlankString = undefined;
  exports.readNonNegativeInteger = undefined;
  exports.readPositiveInteger = undefined;
  exports.optionalNonBlankString = undefined;
  exports.stringValue = undefined;
  exports.optionalNonNegativeInteger = undefined;
  exports.isRecord = e;
  exports.isFiniteNumber = t;
  exports.isDefined = r;
  exports.readObject = n;
  exports.toEnum = o;
  exports.readNonBlankString = i;
  exports.readNonNegativeInteger = s;
  exports.readPositiveInteger = u;
  exports.optionalNonBlankString = p;
  exports.stringValue = a;
  exports.optionalNonNegativeInteger = g;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/TypeUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
