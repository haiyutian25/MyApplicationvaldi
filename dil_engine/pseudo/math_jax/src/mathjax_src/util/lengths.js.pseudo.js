// fn e  args=4 vars=11 closure=1 cpool=3 bc=526B file=math_jax/src/mathjax_src/util/lengths
// args: e, t, r, p
// locals: e#1, t#1, r#1, p#1, s, a, n
// closure: exports
function {
  let p#1;
  let r#1;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_16;
  t;
  t = 0;
  t#1 = 0;
  if (!((r === undefined))) goto L_1f;
  r;
  r = 1;
  r#1 = 1;
  if (!((p === undefined))) goto L_29;
  p;
  p = 16;
  p#1 = 16;
  let n;
  let a;
  let s;
  if (!(("string" != typeof e))) goto L_47;
  e = String(e);
  String(e);
  if ((("" === e))) goto L_52;
  if (!((null == e))) goto L_56;
  return t;
  if (!(exports.MATHSPACE[e])) goto L_a1;
  return exports.MATHSPACE[e];
  s = e.match(new RegExp("^\\s*([-+]?(?:\\.\\d+|\\d+(?:\\.\\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?"));
  if ((!s)) goto L_dc;
  if (!(("" === s[0]))) goto L_e0;
  return t;
  if ((s[1])) goto L_f0;
  a = parseFloat("1");
  n = s[2];
  if (!(Object.hasOwn(exports.UNITS, n))) goto L_179;
  return (((a * exports.UNITS[n]) / p) / r);
  if (!(Object.hasOwn(exports.RELUNITS, n))) goto L_1f4;
  return (a * exports.RELUNITS[n]);
  if (!(("%" === n))) goto L_208;
  return ((a / 100) * t);
  return (a * t);
}

// fn t  args=1 vars=1 closure=0 cpool=2 bc=90B file=math_jax/src/mathjax_src/util/lengths
// args: e
function {
  return ((100 * e).toFixed(1).replace(new RegExp("\\.?0+$"), "") + "%");
}

// fn r  args=1 vars=1 closure=0 cpool=4 bc=137B file=math_jax/src/mathjax_src/util/lengths
// args: e
function {
  if (!((Math.abs(e) < 0.001))) goto L_32;
  return "0";
  return (e.toFixed(3).replace(new RegExp("\\.?0+$"), "") + "em");
}

// fn p  args=3 vars=6 closure=1 cpool=4 bc=220B file=math_jax/src/mathjax_src/util/lengths
// args: e, t, r
// locals: e#1, t#1, r#1
// closure: exports
function {
  let r#1;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_35;
  t;
  t = -exports.BIGDIMEN;
  t#1 = -exports.BIGDIMEN;
  if (!((r === undefined))) goto L_3f;
  r;
  r = 16;
  r#1 = 16;
  e = (e * r);
  if (!(t)) goto L_52;
  if (!((e < t))) goto L_52;
  e = t;
  t;
  if (!((Math.abs(e) < 0.1))) goto L_85;
  return "0";
  return (e.toFixed(1).replace(new RegExp("\\.0$"), "") + "px");
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=12 bc=571B file=math_jax/src/mathjax_src/util/lengths
// args: require, module, exports
// locals: e, t, r, p
function {
  e = function e;
  t = function t;
  r = function r;
  p = function p;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BIGDIMEN = undefined;
  exports.UNITS = undefined;
  exports.RELUNITS = undefined;
  exports.MATHSPACE = undefined;
  exports.length2em = undefined;
  exports.percent = undefined;
  exports.em = undefined;
  exports.px = undefined;
  exports.BIGDIMEN = 1000000;
  exports.UNITS = {px: 1, in: 96, cm: (96 / 2.54), mm: (96 / 25.4)};
  exports.RELUNITS = {em: 1, ex: 0.431, pt: 0.1, pc: 1.2, mu: (1 / 18)};
  exports.MATHSPACE = {veryverythinmathspace: (1 / 18), verythinmathspace: (2 / 18), thinmathspace: (3 / 18), mediummathspace: (4 / 18), thickmathspace: (5 / 18), verythickmathspace: (6 / 18), veryverythickmathspace: (7 / 18), negativeveryverythinmathspace: (-1 / 18), negativeverythinmathspace: (-2 / 18), negativethinmathspace: (-3 / 18), negativemediummathspace: (-4 / 18), negativethickmathspace: (-5 / 18), negativeverythickmathspace: (-6 / 18), negativeveryverythickmathspace: (-7 / 18), thin: 0.04, medium: 0.06, thick: 0.1, normal: 1, big: 2, small: (1 / Math.sqrt(2)), infinity: exports.BIGDIMEN};
  exports.length2em = e;
  exports.percent = t;
  exports.em = r;
  exports.px = p;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/lengths
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
