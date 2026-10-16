// fn t  args=2 vars=2 closure=0 cpool=0 bc=29B file=math_jax/src/mathjax_src/util/string
// args: t, e
function {
  if (!((t.length !== e.length))) goto L_d;
  return (e.length - t.length);
  if (!((t === e))) goto L_14;
  return 0;
  if (!((t < e))) goto L_1b;
  return -1;
  return 1;
}

// fn e  args=1 vars=1 closure=0 cpool=2 bc=47B file=math_jax/src/mathjax_src/util/string
// args: t
function {
  return t.replace(new RegExp("([\\^$(){}.+*?\\-|[\\]:\\\\])"), "\$1");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/util/string
// args: t
function {
  return t.codePointAt(0);   // tail call
}

// fn r  args=1 vars=1 closure=0 cpool=1 bc=80B file=math_jax/src/mathjax_src/util/string
// args: t
function {
  return Array.from(t).map(function <atom:0>);   // tail call
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=50B file=math_jax/src/mathjax_src/util/string
// args: t
function {
  // append([], 0, t)
  t;
  return String.fromCodePoint.apply(String, []);
}

// fn o  args=1 vars=1 closure=0 cpool=2 bc=45B file=math_jax/src/mathjax_src/util/string
// args: t
function {
  return !!t.match(new RegExp("%\\s*$"));
}

// fn s  args=1 vars=1 closure=0 cpool=2 bc=78B file=math_jax/src/mathjax_src/util/string
// args: t
function {
  return t.trim().split(new RegExp("\\s+"));   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=71B file=math_jax/src/mathjax_src/util/string
// args: t, e, r
function {
  if (!(("\\" === t))) goto L_f;
  return "\";
  if ((e)) goto L_40;
  return String.fromCodePoint(parseInt(r, 16));
}

// fn i  args=1 vars=1 closure=0 cpool=3 bc=44B file=math_jax/src/mathjax_src/util/string
// args: t
function {
  return t.replace(new RegExp("\\\\U(?:([0-9A-Fa-f]{4})|\\{\\s*([0-9A-Fa-f]{1,6})\\s*\\})|\\\\."), function <atom:0>);   // tail call
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=158B file=math_jax/src/mathjax_src/util/string
// args: t
function {
  return "&#x".concat(t.codePointAt(0).toString(16).toUpperCase(), ";");   // tail call
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=8 bc=265B file=math_jax/src/mathjax_src/util/string
// args: require, module, exports
// locals: t, e, r, n, o, s, i, p
function {
  t = function t;
  e = function e;
  r = function r;
  n = function n;
  o = function o;
  s = function s;
  i = function i;
  p = function p;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.sortLength = undefined;
  exports.quotePattern = undefined;
  exports.unicodeChars = undefined;
  exports.unicodeString = undefined;
  exports.isPercent = undefined;
  exports.split = undefined;
  exports.replaceUnicode = undefined;
  exports.toEntity = undefined;
  exports.sortLength = t;
  exports.quotePattern = e;
  exports.unicodeChars = r;
  exports.unicodeString = n;
  exports.isPercent = o;
  exports.split = s;
  exports.replaceUnicode = i;
  exports.toEntity = p;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/string
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
