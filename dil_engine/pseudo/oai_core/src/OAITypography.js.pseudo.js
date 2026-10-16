// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=157B file=oai_core/src/OAITypography
// closure: e, o, i
function {
  if (!(e.Device.isIOS())) goto L_99;
  if (!(!e.Device.isWeb())) goto L_99;
  return o;
  return i;
}

// fn p  args=3 vars=3 closure=0 cpool=0 bc=154B file=oai_core/src/OAITypography
// args: e, t, n
function {
  null;
  e;
  if (!((e.native == null))) goto L_3f;
  e.native;
  goto L_60;
  if (!((undefined.font == null))) goto L_87;
  undefined.font;
  return {lineHeight: n, lineHeightScalesWithFont: true, native: {font: e.font, lineHeightMultiple: (n / t)}};
}

// fn _  args=2 vars=6 closure=2 cpool=0 bc=1148B file=oai_core/src/OAITypography
// args: n, i
// locals: o, l, S, a
// closure: e, t
function {
  let a;
  let S;
  let l;
  let o;
  if (!((undefined !== i.font))) goto L_d5;
  if (!((undefined === i.lineHeight))) goto L_ce;
  goto L_cf;
  // [栈深重同步 2 -> 1]
  return {font: i.font, lineHeight: i.lineHeight, lineHeightMultiple: undefined};
  if ((!e.Device.isIOS())) goto L_210;
  if ((e.Device.isWeb())) goto L_210;
  if (!(!t.supportsSemanticFontResolution())) goto L_215;
  if (!((n.native == null))) goto L_1c6;
  n.native;
  goto L_210;
  if (!(undefined.font.includes(" semantic "))) goto L_215;
  goto L_237;
  // [栈深重同步 1 -> 0]
  o = n.native;
  if (!((undefined !== o))) goto L_265;
  goto L_2b0;
  // [栈深重同步 1 -> 0]
  if (!((undefined === n.lineHeightMultiple))) goto L_2af;
  goto L_2b0;
  // [栈深重同步 1 -> 0]
  l = undefined;
  if (!((i.lineHeight == null))) goto L_304;
  i.lineHeight;
  if (!((undefined === i.lineHeightMultiple))) goto L_303;
  goto L_304;
  // [栈深重同步 1 -> 0]
  S = undefined;
  if (!((o == null))) goto L_311;
  o;
  goto L_332;
  if (!((undefined.font == null))) goto L_359;
  undefined.font;
  if (!((undefined !== S))) goto L_370;
  goto L_3e6;
  // [栈深重同步 2 -> 1]
  if (!((i.lineHeightMultiple == null))) goto L_3e6;
  i.lineHeightMultiple;
  if (!((undefined !== o))) goto L_3c4;
  goto L_3e6;
  // [栈深重同步 2 -> 1]
  a = {font: n.font, lineHeight: S, lineHeightMultiple: n.lineHeightMultiple};
  if (!((true === n.lineHeightScalesWithFont))) goto L_478;
  if (!((undefined === i.lineHeight))) goto L_478;
  if (!((undefined !== S))) goto L_478;
  if (!(t.supportsScaledLineHeight())) goto L_478;
  null;
  a;
  return {lineHeightScalesWithFont: true};
  return a;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=157B file=oai_core/src/OAITypography
// closure: e, r, i
function {
  if (!(e.Device.isIOS())) goto L_99;
  if (!(!e.Device.isWeb())) goto L_99;
  return r;
  return i;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=4 bc=4608B file=oai_core/src/OAITypography
// args: require, module, exports
// locals: e, t, n, i, o, l, S, a, s, F, m, T, y, c, d, h, M, g, f, v, u, H, r, p, _
function {
  p = function p;
  _ = function _;
  let r;
  let H;
  let u;
  let v;
  let f;
  let g;
  let M;
  let h;
  let d;
  let c;
  let y;
  let T;
  let m;
  let F;
  let s;
  let a;
  let S;
  let l;
  let o;
  let i;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Typography = undefined;
  exports.DesignTypography = undefined;
  exports.resolveOAITypography = undefined;
  e = require("valdi_core/src/Device");
  t = require("valdi_core/src/SystemFont");
  n = require("./OAITokens");
  i = n.resolveOAITextStyle(n.OAITextSize.Body);
  o = {font: t.systemFont(17), lineHeight: 24, native: {font: t.semanticFont(t.SYSTEM_FONT_NAME, t.SemanticFontTextStyle.Body)}};
  l = {font: t.systemFont(17), lineHeight: 20, native: {font: "".concat(t.systemFont(17), " ", t.SemanticFontTextStyle.Headline)}};
  S = {font: t.systemSemiboldFont(17), lineHeight: 22, native: {font: "".concat(t.systemSemiboldFont(17), " ", t.SemanticFontTextStyle.Headline, " 21"), lineHeight: 22}};
  a = {font: t.systemFont(15), lineHeight: 20, native: {font: t.semanticFont(t.SYSTEM_FONT_NAME, t.SemanticFontTextStyle.Subheadline)}};
  s = {font: t.systemMediumFont(15), lineHeight: 20, native: {font: t.semanticFont(t.SYSTEM_MEDIUM_FONT_NAME, t.SemanticFontTextStyle.Subheadline)}};
  F = {font: t.systemFont(12), lineHeight: 16, native: {font: t.semanticFont(t.SYSTEM_FONT_NAME, t.SemanticFontTextStyle.Caption1)}};
  m = {font: t.systemMediumFont(17), lineHeight: 22, native: {font: t.semanticFont(t.SYSTEM_MEDIUM_FONT_NAME, t.SemanticFontTextStyle.Body)}};
  T = {font: t.systemSemiboldFont(20), lineHeight: 24, native: {font: t.semanticFont(t.SYSTEM_SEMIBOLD_FONT_NAME, t.SemanticFontTextStyle.Title3)}};
  y = {font: t.systemFont(34), lineHeight: 41, native: {font: t.semanticFont(t.SYSTEM_FONT_NAME, t.SemanticFontTextStyle.LargeTitle)}};
  c = {font: t.systemFont(28), lineHeight: 34, native: {font: t.semanticFont(t.SYSTEM_FONT_NAME, t.SemanticFontTextStyle.Title1)}};
  d = {font: t.systemFont(22), lineHeight: 28, native: {font: t.semanticFont(t.SYSTEM_FONT_NAME, t.SemanticFontTextStyle.Title2)}};
  h = {font: t.systemFont(20), lineHeight: 24, native: {font: t.semanticFont(t.SYSTEM_FONT_NAME, t.SemanticFontTextStyle.Title3)}};
  M = {font: t.systemSemiboldFont(17), lineHeight: 22, native: {font: t.semanticFont(t.SYSTEM_FONT_NAME, t.SemanticFontTextStyle.Headline)}};
  g = {font: t.systemFont(16), lineHeight: 21, native: {font: t.semanticFont(t.SYSTEM_FONT_NAME, t.SemanticFontTextStyle.Callout)}};
  f = {font: t.systemFont(13), lineHeight: 18, native: {font: t.semanticFont(t.SYSTEM_FONT_NAME, t.SemanticFontTextStyle.Footnote)}};
  v = {font: t.systemSemiboldFont(13), lineHeight: 18, native: {font: t.semanticFont(t.SYSTEM_SEMIBOLD_FONT_NAME, t.SemanticFontTextStyle.Footnote)}};
  u = {font: t.systemFont(11), lineHeight: 13, native: {font: t.semanticFont(t.SYSTEM_FONT_NAME, t.SemanticFontTextStyle.Caption2)}};
  exports.Typography = {LargeTitle: y, Title1: c, Title2: d, Title3: h, Headline: M, Callout: g, Footnote: f, FootnoteSemibold: v, Caption2: u, Body: function <atom:0>, HeadlineRegular: l, InlineTitle: S, Subheadline: a, SubheadlineMedium: s, Caption: F, BodyMedium: m, Title3Semibold: T};
  H = n.resolveOAITextStyle(n.OAITextSize.BodyMedium);
  r = p(o, 17, 24);
  null;
  H;
  null;
  H;
  exports.DesignTypography = {CompactSubheadline: p({native: {font: "".concat(H.font, " ", t.SemanticFontTextStyle.Subheadline)}}, 14, 20), CompactSubheadlineMedium: p({font: t.systemMediumFont(14), native: {font: "".concat(t.systemMediumFont(14), " ", t.SemanticFontTextStyle.Subheadline)}}, 14, 20), Subheadline: p(a, 15, 20), SubheadlineMedium: p(s, 15, 20), Headline: p(M, 17, 24), Body: function <atom:0>, Footnote: p(f, 13, 18)};
  exports.resolveOAITypography = _;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_core/src/OAITypography
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
