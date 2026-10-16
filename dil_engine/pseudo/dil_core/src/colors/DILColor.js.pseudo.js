// fn t  args=2 vars=2 closure=3 cpool=0 bc=81B file=dil_core/src/colors/DILColor
// args: o, e
// closure: C, r, s
function {
  return C(o, e, r.DIL_SEMANTIC_COLOR_REGISTRY.base, "color", s);   // tail call
}

// fn n  args=2 vars=2 closure=3 cpool=0 bc=81B file=dil_core/src/colors/DILColor
// args: o, e
// closure: C, r, I
function {
  return C(o, e, r.DIL_SEMANTIC_COLOR_REGISTRY.text, "text", I);   // tail call
}

// fn l  args=2 vars=2 closure=3 cpool=0 bc=81B file=dil_core/src/colors/DILColor
// args: o, e
// closure: C, r, a
function {
  return C(o, e, r.DIL_SEMANTIC_COLOR_REGISTRY.background, "background", a);   // tail call
}

// fn i  args=2 vars=2 closure=3 cpool=0 bc=81B file=dil_core/src/colors/DILColor
// args: o, e
// closure: C, r, L
function {
  return C(o, e, r.DIL_SEMANTIC_COLOR_REGISTRY.border, "border", L);   // tail call
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=135B file=dil_core/src/colors/DILColor
// args: o
function {
  if ((o.startsWith("linear-gradient("))) goto L_86;
  if ((o.startsWith("radial-gradient("))) goto L_86;
  return o.startsWith("url(");
}

// fn s  args=2 vars=2 closure=2 cpool=0 bc=75B file=dil_core/src/colors/DILColor
// args: o, e
// closure: _, r
function {
  return _(o, e, r.DIL_SEMANTIC_COLOR_REGISTRY.base);   // tail call
}

// fn I  args=2 vars=2 closure=2 cpool=0 bc=75B file=dil_core/src/colors/DILColor
// args: o, e
// closure: _, r
function {
  return _(o, e, r.DIL_SEMANTIC_COLOR_REGISTRY.text);   // tail call
}

// fn a  args=2 vars=2 closure=2 cpool=0 bc=75B file=dil_core/src/colors/DILColor
// args: o, e
// closure: _, r
function {
  return _(o, e, r.DIL_SEMANTIC_COLOR_REGISTRY.background);   // tail call
}

// fn L  args=2 vars=2 closure=2 cpool=0 bc=75B file=dil_core/src/colors/DILColor
// args: o, e
// closure: _, r
function {
  return _(o, e, r.DIL_SEMANTIC_COLOR_REGISTRY.border);   // tail call
}

// fn C  args=5 vars=5 closure=2 cpool=0 bc=38B file=dil_core/src/colors/DILColor
// args: o, e, r, t, n
// closure: c, T
function {
  if (!(o)) goto L_1a;
  if (!(("string" == typeof o))) goto L_12;
  return c(o, r);
  return T(o, t, n);
  if (!((undefined !== e))) goto L_24;
  return c(e, r);
  return undefined;
}

// fn T  args=3 vars=6 closure=2 cpool=0 bc=667B file=dil_core/src/colors/DILColor
// args: r, t, n
// locals: l, i, t#1
// closure: o, e
function {
  let i;
  let l;
  l = "".concat(t, "
", r.light, "
", r.dark);
  if (!((undefined === global.dilThemeValueColorTokenByKey))) goto L_b7;
  global.dilThemeValueColorTokenByKey = {};
  {};
  i = global.dilThemeValueColorTokenByKey[l];
  if (!((undefined === i))) goto L_297;
  let t#1;
  if (!((global.dilThemeValueColorTokenCount == null))) goto L_11c;
  global.dilThemeValueColorTokenCount;
  t#1 = 0;
  i = "dil-theme-value-".concat(t#1);
  "dil-theme-value-".concat(t#1);
  global.dilThemeValueColorTokenCount = (t#1 + 1);
  global.dilThemeValueColorTokenByKey[l] = i;
  o.DIL_LIGHT_COLOR_PALETTE[i] = n(r.light, o.DIL_LIGHT_COLOR_PALETTE);
  o.DIL_DARK_COLOR_PALETTE[i] = n(r.dark, o.DIL_DARK_COLOR_PALETTE);
  e.reconfigureDILColorPalettes();
  return i;
}

// fn _  args=3 vars=4 closure=1 cpool=0 bc=64B file=dil_core/src/colors/DILColor
// args: o, e, r
// locals: t
// closure: c
function {
  let t;
  t = c(o, r);
  if (!((undefined === t))) goto L_32;
  return e.none;
  if (!((e[t] == null))) goto L_3f;
  e[t];
  return t;
}

// fn d  args=1 vars=2 closure=0 cpool=2 bc=107B file=dil_core/src/colors/DILColor
// args: o
// locals: e
function {
  let e;
  if (!(!o.startsWith("var(--"))) goto L_31;
  return;
  e = o.match(new RegExp("^var\\(--([a-z0-9-]+)\\)$"));
  if (!((null !== e))) goto L_69;
  return e[1];
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_core/src/colors/DILColor
// args: e
// closure: o
function {
  return o.startsWith(e);   // tail call
}

// fn c  args=2 vars=5 closure=1 cpool=1 bc=205B file=dil_core/src/colors/DILColor
// args: o, e
// locals: r, t, n
// closure: d
function {
  let n;
  let t;
  let r;
  r = d(o);
  if (!((r == null))) goto L_16;
  r;
  t = o;
  n = e.aliases[t];
  if (!((undefined !== n))) goto L_49;
  return n;
  if (!((true === e.tokens[t]))) goto L_78;
  return t;
  if (!((undefined === r))) goto L_cb;
  if (!(e.literalPrefixes.some(function <atom:0>))) goto L_cb;
  return o;
  return undefined;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=14 bc=259B file=dil_core/src/colors/DILColor
// args: require, module, exports
// locals: o, e, r, t, n, l, i, u, s, I, a, L, C, T, _, d, c
function {
  t = function t;
  n = function n;
  l = function l;
  i = function i;
  u = function u;
  s = function s;
  I = function I;
  a = function a;
  L = function L;
  C = function C;
  T = function T;
  _ = function _;
  d = function d;
  c = function c;
  let r;
  let e;
  let o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveDILColor = undefined;
  exports.resolveDILTextColor = undefined;
  exports.resolveDILBackgroundColor = undefined;
  exports.resolveDILBorderColor = undefined;
  exports.isDILCSSBackground = undefined;
  o = require("./DILColorsDefinition");
  e = require("./DILColorsInit");
  r = require("./DILSemanticColorRegistry");
  exports.resolveDILColor = t;
  exports.resolveDILTextColor = n;
  exports.resolveDILBackgroundColor = l;
  exports.resolveDILBorderColor = i;
  exports.isDILCSSBackground = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/colors/DILColor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
