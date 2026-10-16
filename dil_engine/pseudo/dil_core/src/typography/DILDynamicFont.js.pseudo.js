// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=166B file=dil_core/src/typography/DILDynamicFont
// args: t
function {
  t.Body = "body";
  t.Callout = "callout";
  t.Caption1 = "caption1";
  t.Caption2 = "caption2";
  t.Footnote = "footnote";
  t.Headline = "headline";
  t.LargeTitle = "largeTitle";
  t.Subheadline = "subheadline";
  t.Title1 = "title1";
  t.Title2 = "title2";
  t.Title3 = "title3";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=dil_core/src/typography/DILDynamicFont
// args: t
function {
  t.Normal = 0;
  t[0] = "Normal";
  t.Medium = 1;
  t[1] = "Medium";
  t.Semibold = 2;
  t[2] = "Semibold";
  t.Bold = 3;
  t[3] = "Bold";
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=46B file=dil_core/src/typography/DILDynamicFont
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.fonts = new Map();
  this.fontName = t;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=211B file=dil_core/src/typography/DILDynamicFont
// args: t
// locals: e, o, this
// closure: d, x
function {
  this = this;
  let o;
  let e;
  e = this.fonts.get(t);
  if (!((undefined !== e))) goto L_5b;
  return e;
  o = d(this.fontName, t, x(t));
  this.fonts.set(t, o);
  return o;
}

// fn a  args=2 vars=2 closure=1 cpool=0 bc=107B file=dil_core/src/typography/DILDynamicFont
// args: t, e
// closure: l
function {
  return l(t, e.textStyle, e.weight, e.italic);   // tail call
}

// fn l  args=4 vars=4 closure=2 cpool=0 bc=10B file=dil_core/src/typography/DILDynamicFont
// args: t, e, o, n
// closure: d, N
function {
  return d(N(o, n), t, e);   // tail call
}

// fn d  args=3 vars=7 closure=1 cpool=0 bc=379B file=dil_core/src/typography/DILDynamicFont
// args: t, e, o
// locals: i, r, s, S
// closure: n
function {
  let S;
  let s;
  let r;
  let i;
  i = n.get(t);
  if (!((undefined === i))) goto L_77;
  i = new Map();
  new Map();
  n.set(t, i);
  r = i.get(o);
  if (!((undefined === r))) goto L_e3;
  r = new Map();
  new Map();
  i.set(o, r);
  s = r.get(e);
  if (!((undefined !== s))) goto L_118;
  return s;
  S = "".concat(t, " ", e, " ", o);
  r.set(e, S);
  return S;
}

// fn m  args=2 vars=5 closure=1 cpool=0 bc=267B file=dil_core/src/typography/DILDynamicFont
// args: t, e
// locals: o, n, i
// closure: r
function {
  let i;
  let n;
  let o;
  o = r.get(t);
  if (!((undefined === o))) goto L_74;
  o = new Map();
  new Map();
  r.set(t, o);
  n = o.get(e);
  if (!((undefined !== n))) goto L_a9;
  return n;
  i = "".concat(t, " ", e, " unscaled");
  o.set(e, i);
  return i;
}

// fn u  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_core/src/typography/DILDynamicFont
// args: t
// closure: s
function {
  return s.fontForSize(t);   // tail call
}

// fn y  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_core/src/typography/DILDynamicFont
// args: t
// closure: S
function {
  return S.fontForSize(t);   // tail call
}

// fn M  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_core/src/typography/DILDynamicFont
// args: t
// closure: F
function {
  return F.fontForSize(t);   // tail call
}

// fn T  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_core/src/typography/DILDynamicFont
// args: t
// closure: c
function {
  return c.fontForSize(t);   // tail call
}

// fn _  args=1 vars=1 closure=2 cpool=0 bc=41B file=dil_core/src/typography/DILDynamicFont
// args: e
// closure: m, t
function {
  return m(t.SYSTEM_FONT_NAME, e);   // tail call
}

// fn p  args=1 vars=1 closure=2 cpool=0 bc=41B file=dil_core/src/typography/DILDynamicFont
// args: e
// closure: m, t
function {
  return m(t.SYSTEM_BOLD_FONT_NAME, e);   // tail call
}

// fn x  args=1 vars=3 closure=2 cpool=0 bc=110B file=dil_core/src/typography/DILDynamicFont
// args: t
// locals: e, o
// closure: i, E
function {
  let o;
  let e;
  e = i.get(t);
  if (!((undefined !== e))) goto L_3a;
  return e;
  o = E(t);
  i.set(t, o);
  return o;
}

// fn E  args=1 vars=1 closure=1 cpool=0 bc=404B file=dil_core/src/typography/DILDynamicFont
// args: t
// closure: e
function {
  if (!((t <= 11))) goto L_29;
  return e.Caption2;
  if (!((t <= 12))) goto L_52;
  return e.Caption1;
  if (!((t <= 13))) goto L_7b;
  return e.Footnote;
  if (!((t <= 15))) goto L_a4;
  return e.Subheadline;
  if (!((t <= 17))) goto L_cd;
  return e.Body;
  if (!((t <= 18))) goto L_f6;
  return e.Headline;
  if (!((t <= 20))) goto L_11f;
  return e.Title3;
  if (!((t <= 24))) goto L_148;
  return e.Title2;
  if (!((t <= 32))) goto L_171;
  return e.Title1;
  return e.LargeTitle;
}

// fn N  args=2 vars=2 closure=2 cpool=0 bc=530B file=dil_core/src/typography/DILDynamicFont
// args: e, n
// closure: o, t
function {
  if (!(n)) goto L_10c;
  if (!((e === o.Medium))) goto L_51;
  return t.SYSTEM_MEDIUM_ITALIC_FONT_NAME;
  if (!((e === o.Semibold))) goto L_9c;
  return t.SYSTEM_SEMIBOLD_ITALIC_FONT_NAME;
  if (!((e === o.Bold))) goto L_e7;
  return t.SYSTEM_BOLD_ITALIC_FONT_NAME;
  return t.SYSTEM_ITALIC_FONT_NAME;
  if (!((e === o.Medium))) goto L_157;
  return t.SYSTEM_MEDIUM_FONT_NAME;
  if (!((e === o.Semibold))) goto L_1a2;
  return t.SYSTEM_SEMIBOLD_FONT_NAME;
  if (!((e === o.Bold))) goto L_1ed;
  return t.SYSTEM_BOLD_FONT_NAME;
  return t.SYSTEM_FONT_NAME;
}

// fn <atom:0>  args=3 vars=29 closure=0 cpool=17 bc=710B file=dil_core/src/typography/DILDynamicFont
// args: require, module, exports
// locals: t, e, o, DILSystemFontForSizeCache, <class_fields_init>, DILSystemFontForSizeCache#1, n, i, r, s, S, F, c, a, l, d, m, u, y, M, T, _, p, x, E, N
function {
  a = function a;
  l = function l;
  d = function d;
  m = function m;
  u = function u;
  y = function y;
  M = function M;
  T = function T;
  _ = function _;
  p = function p;
  x = function x;
  E = function E;
  N = function N;
  let c;
  let F;
  let S;
  let s;
  let r;
  let i;
  let n;
  let DILSystemFontForSizeCache#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILDynamicTextStyle = undefined;
  exports.DILSystemFontWeight = undefined;
  exports.dynamicSystemFont = undefined;
  exports.dynamicSystemFontForTextStyle = undefined;
  exports.dynamicFont = undefined;
  exports.unscaledFont = undefined;
  exports.dynamicSystemFontForSize = undefined;
  exports.dynamicMediumSystemFontForSize = undefined;
  exports.dynamicSemiboldSystemFontForSize = undefined;
  exports.dynamicBoldSystemFontForSize = undefined;
  exports.unscaledSystemFont = undefined;
  exports.unscaledBoldSystemFont = undefined;
  exports.resolveDILDynamicTextStyleForFontSize = undefined;
  t = require("valdi_core/src/SystemFont");
  if ((e)) goto L_132;
  e = {};
  exports.DILDynamicTextStyle = {};
  !function <atom:0>({});
  if ((o)) goto L_149;
  o = {};
  exports.DILSystemFontWeight = {};
  function <atom:0>({});
  let DILSystemFontForSizeCache;
  let <class_fields_init>;
  class DILSystemFontForSizeCache extends undefined { ... }
  <proto:DILSystemFontForSizeCache>.fontForSize = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSystemFontForSizeCache>;
  DILSystemFontForSizeCache = function <atom:0>;
  // close_loc <class_fields_init>
  DILSystemFontForSizeCache#1 = function <atom:0>;
  n = new Map();
  i = new Map();
  r = new Map();
  s = new DILSystemFontForSizeCache#1(t.SYSTEM_FONT_NAME);
  S = new DILSystemFontForSizeCache#1(t.SYSTEM_MEDIUM_FONT_NAME);
  F = new DILSystemFontForSizeCache#1(t.SYSTEM_SEMIBOLD_FONT_NAME);
  c = new DILSystemFontForSizeCache#1(t.SYSTEM_BOLD_FONT_NAME);
  exports.dynamicSystemFont = a;
  exports.dynamicSystemFontForTextStyle = l;
  exports.dynamicFont = d;
  exports.unscaledFont = m;
  exports.dynamicSystemFontForSize = u;
  exports.dynamicMediumSystemFontForSize = y;
  exports.dynamicSemiboldSystemFontForSize = M;
  exports.dynamicBoldSystemFontForSize = T;
  exports.unscaledSystemFont = _;
  exports.unscaledBoldSystemFont = p;
  exports.resolveDILDynamicTextStyleForFontSize = x;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/typography/DILDynamicFont
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
