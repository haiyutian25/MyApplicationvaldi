// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=dil_text/src/rendering/DILTextTypography
// closure: l
function {
  return l;
}

// fn D  args=0 vars=0 closure=0 cpool=0 bc=6B file=dil_text/src/rendering/DILTextTypography
function {
  return "md";
}

// fn T  args=1 vars=1 closure=1 cpool=0 bc=140B file=dil_text/src/rendering/DILTextTypography
// args: e
// closure: h
function {
  if (!(("number" == typeof e))) goto L_62;
  if (!(Number.isFinite(e))) goto L_38;
  return e;
  return h("text", undefined).fontSize;
  return h("text", e).fontSize;
}

// fn S  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_text/src/rendering/DILTextTypography
// args: e
// closure: h
function {
  return h("title", e).fontSize;
}

// fn a  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_text/src/rendering/DILTextTypography
// args: e
// closure: h
function {
  return h("text", e).lineHeight;
}

// fn I  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_text/src/rendering/DILTextTypography
// args: e
// closure: h
function {
  return h("title", e).lineHeight;
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_text/src/rendering/DILTextTypography
// args: e
// closure: h
function {
  return h("title", e).letterSpacing;
}

// fn c  args=1 vars=2 closure=1 cpool=0 bc=86B file=dil_text/src/rendering/DILTextTypography
// args: e
// locals: t
// closure: h
function {
  let t;
  t = h("text", e);
  return (t.lineHeight / t.fontSize);
}

// fn L  args=1 vars=2 closure=1 cpool=0 bc=86B file=dil_text/src/rendering/DILTextTypography
// args: e
// locals: t
// closure: h
function {
  let t;
  t = h("title", e);
  return (t.lineHeight / t.fontSize);
}

// fn m  args=2 vars=2 closure=1 cpool=0 bc=54B file=dil_text/src/rendering/DILTextTypography
// args: e, t
// closure: i
function {
  if (!((undefined !== e))) goto L_35;
  if (!((undefined !== t))) goto L_35;
  if (!(i.supportsScaledLineHeight())) goto L_35;
  return (e * t);
  return;
}

// fn s  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_text/src/rendering/DILTextTypography
// args: e
// closure: h
function {
  return h("caption", e).fontSize;
}

// fn _  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_text/src/rendering/DILTextTypography
// args: e
// closure: h
function {
  return h("caption", e).lineHeight;
}

// fn d  args=1 vars=1 closure=1 cpool=0 bc=88B file=dil_text/src/rendering/DILTextTypography
// args: e
// closure: x
function {
  return Math.max(4, Math.round((e * x)));   // tail call
}

// fn H  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_text/src/rendering/DILTextTypography
// args: e
// closure: h
function {
  return h("text", e).dynamicTextStyle;
}

// fn g  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_text/src/rendering/DILTextTypography
// args: e
// closure: h
function {
  return h("title", e).dynamicTextStyle;
}

// fn p  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_text/src/rendering/DILTextTypography
// args: e
// closure: h
function {
  return h("caption", e).dynamicTextStyle;
}

// fn h  args=2 vars=4 closure=2 cpool=0 bc=121B file=dil_text/src/rendering/DILTextTypography
// args: e, t
// locals: i, n
// closure: exports, D
function {
  let n;
  let i;
  i = exports.DIL_PLATFORM_TYPOGRAPHY.current[e];
  if (!(("title" === e))) goto L_59;
  goto L_5e;
  // [栈深重同步 1 -> 0]
  n = "md";
  if (!((t == null))) goto L_6b;
  t;
  if (!((i[n] == null))) goto L_78;
  i[n];
  return i[n];
}

// fn f  args=0 vars=0 closure=2 cpool=0 bc=253B file=dil_text/src/rendering/DILTextTypography
// closure: t, exports
function {
  if (!(t.Device.isWeb())) goto L_6d;
  return exports.DIL_WEB_TYPOGRAPHY;
  if (!(t.Device.isAndroid())) goto L_da;
  return exports.DIL_ANDROID_TYPOGRAPHY;
  return exports.DIL_IOS_TYPOGRAPHY;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=29 bc=7733B file=dil_text/src/rendering/DILTextTypography
// args: require, module, exports
// locals: e, t, i, n, l, o, y, x, D, T, S, a, I, r, c, L, m, s, _, d, H, g, p, h, f
function {
  D = function D;
  T = function T;
  S = function S;
  a = function a;
  I = function I;
  r = function r;
  c = function c;
  L = function L;
  m = function m;
  s = function s;
  _ = function _;
  d = function d;
  H = function H;
  g = function g;
  p = function p;
  h = function h;
  f = function f;
  let x;
  let y;
  let o;
  let l;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_CAPTION_LINE_HEIGHT_RATIO = undefined;
  exports.DIL_IOS_TYPOGRAPHY = undefined;
  exports.DIL_ANDROID_TYPOGRAPHY = undefined;
  exports.DIL_WEB_TYPOGRAPHY = undefined;
  exports.DIL_PLATFORM_TYPOGRAPHY = undefined;
  exports.DIL_TEXT_LINE_HEIGHT = undefined;
  exports.DIL_CODE_BACKGROUND_PADDING = undefined;
  exports.DIL_CODE_VIEW_BACKGROUND_PADDING = undefined;
  exports.DIL_CODE_BACKGROUND_BORDER_RADIUS = undefined;
  exports.DIL_CODE_FONT_SIZE = undefined;
  exports.DIL_CODE_FONT_FAMILY = undefined;
  exports.DIL_CODE_FONT = undefined;
  exports.DIL_CODE_LINE_HEIGHT = undefined;
  exports.DIL_HIGHLIGHT_BACKGROUND_PADDING = undefined;
  exports.DIL_HIGHLIGHT_BACKGROUND_BORDER_RADIUS = undefined;
  exports.resolveDILDefaultTitleSize = undefined;
  exports.resolveDILTextFontSize = undefined;
  exports.resolveDILTitleFontSize = undefined;
  exports.resolveDILTextLineHeight = undefined;
  exports.resolveDILTitleLineHeight = undefined;
  exports.resolveDILTitleLetterSpacing = undefined;
  exports.resolveDILTextLineHeightRatio = undefined;
  exports.resolveDILTitleLineHeightRatio = undefined;
  exports.resolveDILScaledLineHeight = undefined;
  exports.resolveDILCaptionFontSize = undefined;
  exports.resolveDILCaptionLineHeight = undefined;
  exports.resolveDILTextLoadingBlockHeight = undefined;
  exports.resolveDILTextDynamicTextStyle = undefined;
  exports.resolveDILTitleDynamicTextStyle = undefined;
  exports.resolveDILCaptionDynamicTextStyle = undefined;
  e = require("dil_core/src/typography/DILDynamicFont");
  t = require("valdi_core/src/Device");
  i = require("valdi_core/src/SystemFont");
  exports.DIL_CAPTION_LINE_HEIGHT_RATIO = 1.3;
  n = {text: {3xs: {fontSize: 9, lineHeight: 12, dynamicTextStyle: e.DILDynamicTextStyle.Caption2}, 2xs: {fontSize: 9, lineHeight: 12, dynamicTextStyle: e.DILDynamicTextStyle.Caption2}, xs: {fontSize: 12, lineHeight: 16, dynamicTextStyle: e.DILDynamicTextStyle.Caption1}, sm: {fontSize: 14, lineHeight: 20, dynamicTextStyle: e.DILDynamicTextStyle.Subheadline}, md: {fontSize: 16, lineHeight: 26, dynamicTextStyle: e.DILDynamicTextStyle.Body}, lg: {fontSize: 18, lineHeight: 29, dynamicTextStyle: e.DILDynamicTextStyle.Headline}, xl: {fontSize: 18, lineHeight: 28, dynamicTextStyle: e.DILDynamicTextStyle.Title3}}, title: {xs: {fontSize: 16, lineHeight: 24, dynamicTextStyle: e.DILDynamicTextStyle.Body}, sm: {fontSize: 16, lineHeight: 26, dynamicTextStyle: e.DILDynamicTextStyle.Headline}, md: {fontSize: 18, lineHeight: 28, dynamicTextStyle: e.DILDynamicTextStyle.Title3}, lg: {fontSize: 20, lineHeight: 28, dynamicTextStyle: e.DILDynamicTextStyle.Title2}, xl: {fontSize: 24, lineHeight: 32, dynamicTextStyle: e.DILDynamicTextStyle.Title1}, 2xl: {fontSize: 36, lineHeight: 40, dynamicTextStyle: e.DILDynamicTextStyle.LargeTitle}, 3xl: {fontSize: 48, lineHeight: 48, dynamicTextStyle: e.DILDynamicTextStyle.LargeTitle}, 4xl: {fontSize: 60, lineHeight: 60, dynamicTextStyle: e.DILDynamicTextStyle.LargeTitle}, 5xl: {fontSize: 72, lineHeight: 72, dynamicTextStyle: e.DILDynamicTextStyle.LargeTitle}}, caption: {sm: {fontSize: 10, lineHeight: (10 * exports.DIL_CAPTION_LINE_HEIGHT_RATIO), dynamicTextStyle: e.DILDynamicTextStyle.Caption2}, md: {fontSize: 12, lineHeight: (12 * exports.DIL_CAPTION_LINE_HEIGHT_RATIO), dynamicTextStyle: e.DILDynamicTextStyle.Caption1}, lg: {fontSize: 14, lineHeight: (14 * exports.DIL_CAPTION_LINE_HEIGHT_RATIO), dynamicTextStyle: e.DILDynamicTextStyle.Footnote}}, code: {fontSize: 15, lineHeight: 18, dynamicTextStyle: undefined, fontFamily: "Menlo-Regular"}, markdown: {headingSizes: ["2xl", "xl", "xl", "lg", "md", "md"], headingWeight: "bold", strongWeight: "bold"}};
  exports.DIL_IOS_TYPOGRAPHY = {text: {3xs: {fontSize: 11, lineHeight: 13, dynamicTextStyle: e.DILDynamicTextStyle.Caption2}, 2xs: {fontSize: 11, lineHeight: 13, dynamicTextStyle: e.DILDynamicTextStyle.Caption2}, xs: {fontSize: 13, lineHeight: 18, dynamicTextStyle: e.DILDynamicTextStyle.Footnote}, sm: {fontSize: 15, lineHeight: 20, dynamicTextStyle: e.DILDynamicTextStyle.Subheadline}, md: {fontSize: 17, lineHeight: 24, dynamicTextStyle: e.DILDynamicTextStyle.Body}, lg: {fontSize: 17, lineHeight: 24, dynamicTextStyle: e.DILDynamicTextStyle.Headline}, xl: {fontSize: 20, lineHeight: 26, dynamicTextStyle: e.DILDynamicTextStyle.Title3}}, title: {xs: {fontSize: 17, lineHeight: 24, dynamicTextStyle: e.DILDynamicTextStyle.Body}, sm: {fontSize: 17, lineHeight: 24, dynamicTextStyle: e.DILDynamicTextStyle.Headline}, md: {fontSize: 17, lineHeight: 24, dynamicTextStyle: e.DILDynamicTextStyle.Headline}, lg: {fontSize: 20, lineHeight: 26, dynamicTextStyle: e.DILDynamicTextStyle.Title3}, xl: {fontSize: 22, lineHeight: 28, dynamicTextStyle: e.DILDynamicTextStyle.Title2}, 2xl: {fontSize: 28, lineHeight: 34, dynamicTextStyle: e.DILDynamicTextStyle.Title1}, 3xl: {fontSize: 34, lineHeight: 40, dynamicTextStyle: e.DILDynamicTextStyle.LargeTitle}, 4xl: {fontSize: 34, lineHeight: 40, dynamicTextStyle: e.DILDynamicTextStyle.LargeTitle}, 5xl: {fontSize: 34, lineHeight: 40, dynamicTextStyle: e.DILDynamicTextStyle.LargeTitle}}, caption: {sm: {fontSize: 11, lineHeight: (11 * exports.DIL_CAPTION_LINE_HEIGHT_RATIO), dynamicTextStyle: e.DILDynamicTextStyle.Caption2}, md: {fontSize: 12, lineHeight: (12 * exports.DIL_CAPTION_LINE_HEIGHT_RATIO), dynamicTextStyle: e.DILDynamicTextStyle.Caption1}, lg: {fontSize: 13, lineHeight: (13 * exports.DIL_CAPTION_LINE_HEIGHT_RATIO), dynamicTextStyle: e.DILDynamicTextStyle.Footnote}}, code: {fontSize: 13, lineHeight: 18, dynamicTextStyle: e.DILDynamicTextStyle.Footnote, fontFamily: "Menlo-Regular"}, markdown: {headingSizes: ["xl", "lg", "sm", "xs", "xs", "xs"], headingWeight: "semibold", strongWeight: "semibold"}};
  exports.DIL_ANDROID_TYPOGRAPHY = {text: {3xs: {fontSize: 11, lineHeight: 16, dynamicTextStyle: e.DILDynamicTextStyle.Caption2}, 2xs: {fontSize: 11, lineHeight: 16, dynamicTextStyle: e.DILDynamicTextStyle.Caption2}, xs: {fontSize: 12, lineHeight: 16, dynamicTextStyle: e.DILDynamicTextStyle.Caption1}, sm: {fontSize: 14, lineHeight: 20, dynamicTextStyle: e.DILDynamicTextStyle.Subheadline}, md: {fontSize: 17, lineHeight: 26, dynamicTextStyle: e.DILDynamicTextStyle.Body}, lg: {fontSize: 17, lineHeight: 26, dynamicTextStyle: e.DILDynamicTextStyle.Headline}, xl: {fontSize: 22, lineHeight: 28, dynamicTextStyle: e.DILDynamicTextStyle.Title3}}, title: {xs: {fontSize: 14, lineHeight: 20, letterSpacing: 0.1, dynamicTextStyle: e.DILDynamicTextStyle.Body}, sm: {fontSize: 17, lineHeight: 26, letterSpacing: 0.1, dynamicTextStyle: e.DILDynamicTextStyle.Headline}, md: {fontSize: 17, lineHeight: 26, letterSpacing: 0.1, dynamicTextStyle: e.DILDynamicTextStyle.Headline}, lg: {fontSize: 22, lineHeight: 28, letterSpacing: 0.1, dynamicTextStyle: e.DILDynamicTextStyle.Title3}, xl: {fontSize: 24, lineHeight: 32, letterSpacing: 0.1, dynamicTextStyle: e.DILDynamicTextStyle.Title2}, 2xl: {fontSize: 28, lineHeight: 36, letterSpacing: -0.32, dynamicTextStyle: e.DILDynamicTextStyle.Title1}, 3xl: {fontSize: 36, lineHeight: 44, letterSpacing: -0.32, dynamicTextStyle: e.DILDynamicTextStyle.LargeTitle}, 4xl: {fontSize: 60, lineHeight: 60, dynamicTextStyle: e.DILDynamicTextStyle.LargeTitle}, 5xl: {fontSize: 72, lineHeight: 72, dynamicTextStyle: e.DILDynamicTextStyle.LargeTitle}}, caption: {sm: {fontSize: 10, lineHeight: (10 * exports.DIL_CAPTION_LINE_HEIGHT_RATIO), dynamicTextStyle: e.DILDynamicTextStyle.Caption2}, md: {fontSize: 12, lineHeight: 16, dynamicTextStyle: e.DILDynamicTextStyle.Caption1}, lg: {fontSize: 14, lineHeight: 20, dynamicTextStyle: e.DILDynamicTextStyle.Footnote}}, code: {fontSize: 13, lineHeight: 18, dynamicTextStyle: undefined, fontFamily: "Menlo-Regular"}, markdown: {headingSizes: ["xl", "lg", "sm", "xs", "xs", "xs"], headingWeight: "semibold", strongWeight: "semibold"}};
  exports.DIL_WEB_TYPOGRAPHY = n;
  l = f();
  exports.DIL_PLATFORM_TYPOGRAPHY = {current: function <atom:0>};
  exports.DIL_TEXT_LINE_HEIGHT = (l.text.md.lineHeight / l.text.md.fontSize);
  exports.DIL_CODE_BACKGROUND_PADDING = {left: 4, top: 0, right: 4, bottom: 2};
  exports.DIL_CODE_VIEW_BACKGROUND_PADDING = {left: 4, top: 1, right: 4, bottom: 1};
  exports.DIL_CODE_BACKGROUND_BORDER_RADIUS = 4;
  exports.DIL_CODE_FONT_SIZE = l.code.fontSize;
  exports.DIL_CODE_FONT_FAMILY = l.code.fontFamily;
  o = l.code.dynamicTextStyle;
  if (!((undefined === o))) goto L_1c85;
  goto L_1cf1;
  // [栈深重同步 2 -> 1]
  exports.DIL_CODE_FONT = e.dynamicFont(exports.DIL_CODE_FONT_FAMILY, exports.DIL_CODE_FONT_SIZE, o);
  exports.DIL_CODE_LINE_HEIGHT = l.code.lineHeight;
  exports.DIL_HIGHLIGHT_BACKGROUND_PADDING = {top: 0.5, right: 3, bottom: 0.5, left: 3};
  exports.DIL_HIGHLIGHT_BACKGROUND_BORDER_RADIUS = 5;
  y = 4;
  x = 0.75;
  exports.resolveDILDefaultTitleSize = D;
  exports.resolveDILTextFontSize = T;
  exports.resolveDILTitleFontSize = S;
  exports.resolveDILTextLineHeight = a;
  exports.resolveDILTitleLineHeight = I;
  exports.resolveDILTitleLetterSpacing = r;
  exports.resolveDILTextLineHeightRatio = c;
  exports.resolveDILTitleLineHeightRatio = L;
  exports.resolveDILScaledLineHeight = m;
  exports.resolveDILCaptionFontSize = s;
  exports.resolveDILCaptionLineHeight = _;
  exports.resolveDILTextLoadingBlockHeight = d;
  exports.resolveDILTextDynamicTextStyle = H;
  exports.resolveDILTitleDynamicTextStyle = g;
  exports.resolveDILCaptionDynamicTextStyle = p;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/rendering/DILTextTypography
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
