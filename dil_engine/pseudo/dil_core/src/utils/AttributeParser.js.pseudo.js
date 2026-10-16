// fn e  args=1 vars=2 closure=0 cpool=0 bc=63B file=dil_core/src/utils/AttributeParser
// args: e
// locals: r
function {
  let r;
  r = Number(e);
  if (!(Number.isFinite(r))) goto L_3d;
  return r;
  return undefined;
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=5B file=dil_core/src/utils/AttributeParser
// args: r
// closure: e
function {
  return e(r);   // tail call
}

// fn t  args=1 vars=1 closure=1 cpool=0 bc=74B file=dil_core/src/utils/AttributeParser
// args: r
// closure: e
function {
  if (!(("number" == typeof r))) goto L_3a;
  if (!(Number.isFinite(r))) goto L_38;
  return r;
  return undefined;
  if (!(("string" == typeof r))) goto L_48;
  return e(r);
  return undefined;
}

// fn s  args=1 vars=2 closure=2 cpool=0 bc=289B file=dil_core/src/utils/AttributeParser
// args: r
// locals: t
// closure: e, i
function {
  if (!(r.endsWith("%"))) goto L_5b;
  if (!((undefined !== e(r.slice(0, -1))))) goto L_5b;
  return r;
  if (!(r.endsWith("rem"))) goto L_c6;
  let t;
  t = e(r.slice(0, -3));
  if (!((undefined === t))) goto L_be;
  return undefined;
  return (t * i);
  if (!(r.endsWith("px"))) goto L_11d;
  goto L_11e;
  // [栈深重同步 2 -> 1]
  return e(r);   // tail call
}

// fn n  args=1 vars=1 closure=1 cpool=0 bc=74B file=dil_core/src/utils/AttributeParser
// args: e
// closure: s
function {
  if (!(("number" == typeof e))) goto L_3a;
  if (!(Number.isFinite(e))) goto L_38;
  return e;
  return undefined;
  if (!(("string" == typeof e))) goto L_48;
  return s(e);
  return undefined;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=5 bc=192B file=dil_core/src/utils/AttributeParser
// args: require, module, exports
// locals: e, r, t, i, s, n
function {
  e = function e;
  r = function r;
  t = function t;
  s = function s;
  n = function n;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.parseFiniteNumber = undefined;
  exports.parseNumberValue = undefined;
  exports.parseNumericValue = undefined;
  exports.parseLengthValue = undefined;
  exports.parseCSSValue = undefined;
  exports.parseFiniteNumber = e;
  exports.parseNumberValue = r;
  exports.parseNumericValue = t;
  i = 16;
  exports.parseLengthValue = s;
  exports.parseCSSValue = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/utils/AttributeParser
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
