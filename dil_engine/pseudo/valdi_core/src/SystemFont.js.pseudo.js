// fn o  args=2 vars=2 closure=0 cpool=0 bc=44B file=valdi_core/src/SystemFont
// args: t, e
function {
  return "".concat(t, " ", e);   // tail call
}

// fn n  args=2 vars=2 closure=0 cpool=0 bc=44B file=valdi_core/src/SystemFont
// args: t, e
function {
  return "".concat(t, " semantic ", e);   // tail call
}

// fn i  args=1 vars=2 closure=2 cpool=0 bc=377B file=valdi_core/src/SystemFont
// args: s
// locals: o
// closure: t, e
function {
  let o;
  if (!(s)) goto L_d;
  goto L_e;
  // [栈深重同步 1 -> 0]
  o = "";
  if (!(t.isVersionAtLeast(241))) goto L_14c;
  if (!(e.Device.isIOS())) goto L_14c;
  if (!(!e.Device.isDesktop())) goto L_14c;
  if (!(!e.Device.isWeb())) goto L_14c;
  return "monospace-unslashed-zero".concat(o);
  return "monospace".concat(o);
}

// fn r  args=2 vars=3 closure=3 cpool=0 bc=252B file=valdi_core/src/SystemFont
// args: s, o
// locals: i
// closure: n, t, e
function {
  let i;
  i = n(s, o);
  if (!(t.isVersionAtLeast(136))) goto L_f8;
  if (!(e.Device.isIOS())) goto L_f8;
  if (!(!e.Device.isWeb())) goto L_f8;
  return "".concat(i, " tight");
  return i;
}

// fn _  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_core/src/SystemFont
// closure: t
function {
  return t.isVersionAtLeast(113);   // tail call
}

// fn M  args=0 vars=0 closure=2 cpool=0 bc=194B file=valdi_core/src/SystemFont
// closure: e, t
function {
  if (!(e.Device.isAndroid())) goto L_c1;
  if (!(!e.Device.isWeb())) goto L_c1;
  return t.isVersionAtLeast(169);
}

// fn p  args=1 vars=1 closure=2 cpool=0 bc=39B file=valdi_core/src/SystemFont
// args: t
// closure: o, exports
function {
  return o(exports.SYSTEM_FONT_NAME, t);   // tail call
}

// fn S  args=1 vars=1 closure=2 cpool=0 bc=39B file=valdi_core/src/SystemFont
// args: t
// closure: o, exports
function {
  return o(exports.SYSTEM_MEDIUM_FONT_NAME, t);   // tail call
}

// fn T  args=1 vars=1 closure=2 cpool=0 bc=39B file=valdi_core/src/SystemFont
// args: t
// closure: o, exports
function {
  return o(exports.SYSTEM_SEMIBOLD_FONT_NAME, t);   // tail call
}

// fn E  args=1 vars=1 closure=2 cpool=0 bc=39B file=valdi_core/src/SystemFont
// args: t
// closure: o, exports
function {
  return o(exports.SYSTEM_BOLD_FONT_NAME, t);   // tail call
}

// fn c  args=1 vars=1 closure=2 cpool=0 bc=39B file=valdi_core/src/SystemFont
// args: t
// closure: o, exports
function {
  return o(exports.SYSTEM_ITALIC_FONT_NAME, t);   // tail call
}

// fn x  args=1 vars=1 closure=2 cpool=0 bc=39B file=valdi_core/src/SystemFont
// args: t
// closure: o, exports
function {
  return o(exports.SYSTEM_MEDIUM_ITALIC_FONT_NAME, t);   // tail call
}

// fn l  args=1 vars=1 closure=2 cpool=0 bc=39B file=valdi_core/src/SystemFont
// args: t
// closure: o, exports
function {
  return o(exports.SYSTEM_SEMIBOLD_ITALIC_FONT_NAME, t);   // tail call
}

// fn u  args=1 vars=1 closure=2 cpool=0 bc=39B file=valdi_core/src/SystemFont
// args: t
// closure: o, exports
function {
  return o(exports.SYSTEM_BOLD_ITALIC_FONT_NAME, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=166B file=valdi_core/src/SystemFont
// args: t
function {
  t.LargeTitle = "largetitle";
  t.Title1 = "title1";
  t.Title2 = "title2";
  t.Title3 = "title3";
  t.Headline = "headline";
  t.Body = "body";
  t.Callout = "callout";
  t.Subheadline = "subheadline";
  t.Footnote = "footnote";
  t.Caption1 = "caption1";
  t.Caption2 = "caption2";
  return;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=15 bc=674B file=valdi_core/src/SystemFont
// args: require, module, exports
// locals: t, e, s, o, n, i, r, _, M, p, S, T, E, c, x, l, u
function {
  o = function o;
  n = function n;
  i = function i;
  r = function r;
  _ = function _;
  M = function M;
  p = function p;
  S = function S;
  T = function T;
  E = function E;
  c = function c;
  x = function x;
  l = function l;
  u = function u;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SYSTEM_FONT_NAME = undefined;
  exports.SYSTEM_MEDIUM_FONT_NAME = undefined;
  exports.SYSTEM_SEMIBOLD_FONT_NAME = undefined;
  exports.SYSTEM_BOLD_FONT_NAME = undefined;
  exports.SYSTEM_ITALIC_FONT_NAME = undefined;
  exports.SYSTEM_MEDIUM_ITALIC_FONT_NAME = undefined;
  exports.SYSTEM_SEMIBOLD_ITALIC_FONT_NAME = undefined;
  exports.SYSTEM_BOLD_ITALIC_FONT_NAME = undefined;
  exports.SemanticFontTextStyle = undefined;
  exports.semanticFont = undefined;
  exports.unslashedMonospaceFontName = undefined;
  exports.tightLeadingSemanticFont = undefined;
  exports.supportsSemanticFontResolution = undefined;
  exports.supportsScaledLineHeight = undefined;
  exports.systemFont = undefined;
  exports.systemMediumFont = undefined;
  exports.systemSemiboldFont = undefined;
  exports.systemBoldFont = undefined;
  exports.systemItalicFont = undefined;
  exports.systemMediumItalicFont = undefined;
  exports.systemSemiboldItalicFont = undefined;
  exports.systemBoldItalicFont = undefined;
  t = require("./CompilerIntrinsics");
  e = require("./Device");
  exports.SYSTEM_FONT_NAME = "system";
  exports.SYSTEM_MEDIUM_FONT_NAME = "system-medium";
  exports.SYSTEM_SEMIBOLD_FONT_NAME = "system-semibold";
  exports.SYSTEM_BOLD_FONT_NAME = "system-bold";
  exports.SYSTEM_ITALIC_FONT_NAME = "system-italic";
  exports.SYSTEM_MEDIUM_ITALIC_FONT_NAME = "system-medium-italic";
  exports.SYSTEM_SEMIBOLD_ITALIC_FONT_NAME = "system-semibold-italic";
  exports.SYSTEM_BOLD_ITALIC_FONT_NAME = "system-bold-italic";
  if ((s)) goto L_203;
  s = {};
  exports.SemanticFontTextStyle = {};
  function <atom:0>({});
  exports.semanticFont = n;
  exports.unslashedMonospaceFontName = i;
  exports.tightLeadingSemanticFont = r;
  exports.supportsSemanticFontResolution = _;
  exports.supportsScaledLineHeight = M;
  exports.systemFont = p;
  exports.systemMediumFont = S;
  exports.systemSemiboldFont = T;
  exports.systemBoldFont = E;
  exports.systemItalicFont = c;
  exports.systemMediumItalicFont = x;
  exports.systemSemiboldItalicFont = l;
  exports.systemBoldItalicFont = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/SystemFont
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
