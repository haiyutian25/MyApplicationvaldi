// fn v  args=2 vars=2 closure=4 cpool=1 bc=2080B file=oai_ui/src/components/settings/SettingsTheme
// args: o, i
// closure: a, c, t, e
function {
  if (!(o.separatorAtRowBottom)) goto L_2d9;
  goto L_2da;
  // [栈深重同步 5 -> 4]
  if (!(o.separatorAtRowBottom)) goto L_306;
  goto L_307;
  // [栈深重同步 5 -> 4]
  return {header: new a.Style({justifyContent: "center", marginBottom: o.sectionTitleBottomInset, minHeight: o.sectionHeaderHeight, paddingTop: o.sectionHeaderVerticalInset, paddingBottom: o.sectionHeaderVerticalInset, paddingLeft: o.sectionLabelInset, paddingRight: o.sectionLabelInset, translationY: o.sectionTitleTranslationY, width: "100%"}), footer: new a.Style({paddingBottom: o.footerBottomInset, paddingLeft: o.sectionFooterLabelInset, paddingRight: o.sectionFooterLabelInset, paddingTop: o.footerTopInset, width: "100%"}), separator: new a.Style({backgroundColor: i, height: o.separatorHeight, left: o.rowSeparatorInset, position: "absolute", right: 0, top: 0, bottom: undefined}), disclosure: new a.Style({flexShrink: 0, marginRight: o.disclosureTrailingInset, translationY: o.disclosureTranslationY}), menuIndicator: new a.Style({src: c.default.oaiChevronUpDownSystem, tint: t.OAIColor.TextSystemSecondary, width: o.menuIndicatorWidth, height: o.menuIndicatorHeight, objectFit: "contain", flexShrink: 0, translationX: (-1 / 3)}), menuAccessory: new a.Style({flexDirection: "row", alignItems: "center", gap: o.menuAccessoryGap}), menuValue: new a.Style({translationY: o.menuValueTranslationY}), stackedMenuContent: new a.Style({alignItems: "flex-start", width: "100%", paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6}), navigationAccessory: new a.Style({flexDirection: "row", alignItems: "center", gap: 6, marginRight: o.navigationAccessoryTrailingInset}), navigationDisclosure: new a.Style({src: c.default.oaiChevronRightSystem, tint: t.OAIColor.IconSystemDisclosure, width: e.remFromPoints(18), height: e.remFromPoints(18), objectFit: "contain", flexShrink: 0, opacity: 0.5}), toggleAccessory: new a.Style({accessibilityNavigation: "ignored", alignItems: "flex-end", flexShrink: 0, justifyContent: "center", marginRight: o.toggleTrailingInset, touchEnabled: false, minWidth: o.toggleAccessoryWidth})};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=oai_ui/src/components/settings/SettingsTheme
// args: e
function {
  e.Sheet = 0;
  e[0] = "Sheet";
  e.Page = 1;
  e[1] = "Page";
  return;
}

// fn V  args=0 vars=0 closure=4 cpool=0 bc=238B file=oai_ui/src/components/settings/SettingsTheme
// closure: n, f, B, x
function {
  if (!(n.Device.isWeb())) goto L_4e;
  return f;
  if (!(n.Device.isAndroid())) goto L_9c;
  return B;
  if (!(n.Device.isIOS())) goto L_ea;
  return x;
  return f;
}

// fn F  args=0 vars=3 closure=4 cpool=0 bc=494B file=oai_ui/src/components/settings/SettingsTheme
// locals: e, t, o
// closure: V, l, r, i
function {
  let o;
  let t;
  let e;
  e = V().colors;
  t = l.resolveValdiUITheme();
  if (!((r.resolveProviderSource() == null))) goto L_82;
  r.resolveProviderSource();
  goto L_ee;
  o = (true === undefined.hasValue(l.ValdiUIThemeProvider.getProviderKey()));
  if (((t === i.OPENAI_UI_THEME))) goto L_14a;
  if (!((t === l.DEFAULT_VALDI_UI_THEME))) goto L_150;
  if (!(!o)) goto L_150;
  return e;
  null;
  e;
  return {canvas: t.colors.canvas, groupedSurface: t.colors.groupedSurface};
}

// fn E  args=1 vars=2 closure=1 cpool=0 bc=153B file=oai_ui/src/components/settings/SettingsTheme
// args: e
// locals: t
// closure: V
function {
  let t;
  t = V().layout;
  if (!((e >= t.wideListMinimumWidth))) goto L_74;
  return t.wideListHorizontalInset;
  return t.listHorizontalInset;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=36B file=oai_ui/src/components/settings/SettingsTheme
// closure: V
function {
  return V().preview;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=oai_ui/src/components/settings/SettingsTheme
// closure: o
function {
  return o.Typography.Body;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=oai_ui/src/components/settings/SettingsTheme
// closure: o
function {
  return o.Typography.InlineTitle;
}

// fn _  args=0 vars=0 closure=4 cpool=0 bc=111B file=oai_ui/src/components/settings/SettingsTheme
// closure: V, w, L, exports
function {
  if (!((V().editorPresentation === w.Page))) goto L_4c;
  return L;
  return exports.SettingsEditorAppearance;
}

// fn <atom:0>  args=3 vars=40 closure=0 cpool=18 bc=9796B file=oai_ui/src/components/settings/SettingsTheme
// args: require, module, exports
// locals: e, t, o, i, n, r, a, s, l, c, g, d, p, I, m, u, S, y, h, T, A, w, v, x, O, f, C, H, B, V, F, E, M, P, b, L, _
function {
  v = function v;
  V = function V;
  F = function F;
  E = function E;
  _ = function _;
  let L;
  let b;
  let P;
  let M;
  let B;
  let H;
  let C;
  let f;
  let O;
  let x;
  let A;
  let T;
  let h;
  let y;
  let S;
  let u;
  let m;
  let I;
  let p;
  let d;
  let g;
  let c;
  let l;
  let s;
  let a;
  let r;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IOS_SETTINGS_UI_THEME = undefined;
  exports.SettingsEditorPresentation = undefined;
  exports.resolveSettingsTheme = undefined;
  exports.resolveSettingsColors = undefined;
  exports.resolveSettingsHorizontalInset = undefined;
  exports.SettingsAppearance = undefined;
  exports.SettingsEditorAppearance = undefined;
  exports.resolveSettingsEditorAppearance = undefined;
  e = require("oai_core/src/OAIAttributes");
  t = require("oai_core/src/OAITokens");
  o = require("oai_core/src/OAITypography");
  i = require("oai_core/src/OAIUITheme");
  n = require("valdi_core/src/Device");
  r = require("valdi_core/src/provider/resolveProviderSource");
  a = require("valdi_core/src/Style");
  s = require("valdi_core/src/SystemFont");
  l = require("valdi_ui_theme/src/ValdiUITheme");
  c = require("oai_ui/res");
  g = require("valdi_ui/src/ControlMaterial");
  null;
  i.OPENAI_UI_THEME;
  null;
  i.OPENAI_UI_THEME.colors;
  exports.IOS_SETTINGS_UI_THEME = {colors: {canvas: t.OAIColor.BgGrouped, groupedSurface: t.OAIColor.BgSystemElevated}};
  d = {listHorizontalInset: 16, wideListHorizontalInset: 20, wideListMinimumWidth: 414, listVerticalInset: 43, sectionGap: (53 / 3), sectionEmptyFooterAdditionalGap: (52 / 3), sectionHeaderHeight: (118 / 3), sectionHeaderVerticalInset: 9.5, sectionTitleBottomInset: 1, sectionTitleTranslationY: (2 / 3), sectionRadius: 25.5, sectionLabelInset: 16, sectionLabelGap: 0, rowHorizontalInset: 16, rowVerticalInset: 14, emptyTextPreviewVerticalInset: (47 / 3), actionRowVerticalInset: 17, menuRowVerticalInset: (47 / 3), menuAccessoryGap: (14 / 3), menuValueTranslationY: (1 / 3), menuScalesWithText: true, menuIndicatorWidth: 12, menuIndicatorHeight: 18, menuDefaultTextHeight: (61 / 3), selectionMinimumHeight: 52, selectionValueBelowTitle: false, stackedContentMinimumRootFontSize: 25, navigationAccessoryTopAligned: false, navigationMinimumHeight: 52, navigationMultilineMinimumHeight: 52, navigationMultilineVerticalInset: 17, navigationShowsDisclosure: true, navigationAccessoryTrailingInset: -2, separatorHeight: 1, separatorAtRowBottom: true, toggleRowVerticalInset: 12, toggleLabelVerticalInset: (47 / 3), rowMinimumHeight: 52, rowContentGap: 16, rowLabelGap: 4, rowLeadingContentGap: 12, rowImageWidth: 40, rowSupportingTextGap: 2, describedNavigationAccessoryGap: 32, richRowVerticalInset: 17, rowSeparatorInset: 16, rowPressedOpacity: 0.6, rowDisabledOpacity: 0.55, toggleAccessoryWidth: 63, toggleTrailingInset: -2, disclosureSize: e.remFromPoints((41 / 3)), disclosureTrailingInset: (29 / 6), disclosureTranslationY: (1 / 3), textInputHeight: 52, textInputHorizontalPadding: 14, textInputVerticalPadding: 15, footerTopInset: (23 / 3), footerBottomInset: 6, listBottomInset: undefined, rowGap: 0, rowRadius: 0, sectionTitleTopMargin: (-53 / 3), sectionFooterLabelInset: 16, previewLines: 6};
  null;
  d;
  p = {listVerticalInset: 0, listBottomInset: 16, wideListHorizontalInset: 16, sectionGap: 22, sectionEmptyFooterAdditionalGap: 8, sectionHeaderHeight: 20, sectionHeaderVerticalInset: 0, sectionTitleBottomInset: 7, sectionTitleTranslationY: 0, sectionTitleTopMargin: 0, sectionRadius: 27, sectionFooterLabelInset: 18, rowMinimumHeight: 56, rowVerticalInset: 16, emptyTextPreviewVerticalInset: 16, actionRowVerticalInset: 8, menuRowVerticalInset: 8, selectionMinimumHeight: 72, selectionValueBelowTitle: true, stackedContentMinimumRootFontSize: undefined, disclosureSize: (41 / 3), navigationAccessoryTopAligned: true, navigationMinimumHeight: 72, navigationMultilineMinimumHeight: 88, navigationMultilineVerticalInset: 12, navigationShowsDisclosure: false, navigationAccessoryTrailingInset: 0, describedNavigationAccessoryGap: 16, richRowVerticalInset: 8, toggleRowVerticalInset: 8, toggleLabelVerticalInset: undefined, rowLabelGap: 0, rowGap: 2, rowRadius: 4, toggleAccessoryWidth: 52, toggleTrailingInset: 0, textInputHeight: 56, textInputHorizontalPadding: 16, textInputVerticalPadding: 0, footerTopInset: 7, footerBottomInset: 8};
  I = {font: s.systemFont(17), lineHeight: 20, native: {font: s.semanticFont(s.SYSTEM_FONT_NAME, s.SemanticFontTextStyle.Body)}};
  m = {font: s.systemSemiboldFont(17), lineHeight: 20, native: {font: s.semanticFont(s.SYSTEM_FONT_NAME, s.SemanticFontTextStyle.Headline)}};
  u = {font: s.systemFont(13), lineHeight: 16, native: {font: s.tightLeadingSemanticFont(s.SYSTEM_FONT_NAME, s.SemanticFontTextStyle.Footnote)}};
  S = {font: s.systemFont(13), lineHeight: 18, native: {font: s.semanticFont(s.SYSTEM_FONT_NAME, s.SemanticFontTextStyle.Footnote)}};
  null;
  t.resolveOAITextStyle(t.OAITextSize.BodyMedium);
  y = {native: {font: s.semanticFont(s.SYSTEM_FONT_NAME, s.SemanticFontTextStyle.Body)}};
  h = {verticalInset: (47 / 3), imageSize: 24, overlap: -4, companionSize: 32, emptyColor: t.OAIColor.TextPrimary, emptyOpacity: 0.5, emptyTypography: o.Typography.HeadlineRegular};
  T = {sectionGap: undefined, showsGroupTitle: true, listVerticalInset: undefined, listBottomInset: undefined, listBottomInsetWithFooter: undefined, sectionMargin: undefined, lastSectionBottomMargin: undefined, toggleVerticalInset: undefined, previewVerticalInset: undefined};
  A = {sectionGap: 24, showsGroupTitle: false, listVerticalInset: 35, listBottomInset: 20, listBottomInsetWithFooter: 0, sectionMargin: 0, lastSectionBottomMargin: 0, toggleVerticalInset: 15, previewVerticalInset: 15};
  if ((w)) goto L_b22;
  w = {};
  exports.SettingsEditorPresentation = {};
  !function <atom:0>({});
  x = {editorPresentation: w.Sheet, layout: d, form: A, detailListVerticalInset: 35, preview: h, colors: {canvas: t.OAIColor.BgGroupedElevated, groupedSurface: t.OAIColor.BgGroupedSurface, text: t.OAIColor.ThemeText, description: t.OAIColor.TextTertiary, header: t.OAIColor.TextSystemSecondary, footer: t.OAIColor.TextSystemSecondary, link: t.OAIColor.TextIOSLink, value: t.OAIColor.TextSystemSecondary, pickerValue: t.OAIColor.TextTertiary, separator: t.OAIColor.BorderSystemSeparator}, typography: {Row: I, Field: I, Value: y, SectionHeader: m, Footer: u, Description: S, NavigationValue: y, NavigationRow: I}, styles: v(d, t.OAIColor.BorderSystemSeparator)};
  null;
  d;
  O = {sectionEmptyFooterAdditionalGap: (52 / 3), sectionTitleTranslationY: (1 / 3), separatorAtRowBottom: false, menuAccessoryGap: 6, menuValueTranslationY: 0, menuScalesWithText: false, sectionHeaderVerticalInset: 0, rowVerticalInset: 14, emptyTextPreviewVerticalInset: 14, toggleLabelVerticalInset: undefined, textInputVerticalPadding: 0};
  null;
  x;
  null;
  h;
  null;
  x.colors;
  f = {layout: O, form: T, preview: {verticalInset: 15}, colors: {canvas: t.OAIColor.BgGroupedElevated, groupedSurface: t.OAIColor.BgGroupedSurface, link: t.OAIColor.TextSystemLink, value: t.OAIColor.TextSecondary, pickerValue: t.OAIColor.TextSecondary, separator: t.OAIColor.BorderLight}, styles: v(O, t.OAIColor.BorderLight)};
  C = {font: s.systemFont(17), lineHeight: 26, letterSpacing: 0.1};
  H = {font: s.systemFont(14), lineHeight: 20, letterSpacing: 0.1};
  null;
  x;
  null;
  T;
  null;
  h;
  null;
  C;
  null;
  C;
  B = {editorPresentation: w.Page, layout: p, form: {listBottomInset: 16, listBottomInsetWithFooter: 16}, detailListVerticalInset: 0, preview: {verticalInset: 15, overlap: 4, emptyColor: t.OAIColor.TextSecondary, emptyOpacity: 1, emptyTypography: C}, colors: {canvas: t.OAIColor.BgCanvas, groupedSurface: t.OAIColor.BgLayer3, text: t.OAIColor.TextPrimary, description: t.OAIColor.TextSecondary, header: t.OAIColor.TextTertiary, footer: t.OAIColor.TextSecondary, link: t.OAIColor.TextAndroidLink, value: t.OAIColor.TextSecondary, pickerValue: t.OAIColor.TextSecondary, separator: t.OAIColor.BorderLight}, typography: {Row: C, Field: C, Value: C, SectionHeader: {lineHeight: 20}, Footer: H, Description: H, NavigationValue: {font: s.systemMediumFont(12), lineHeight: 14, letterSpacing: 0.2}, NavigationRow: {lineHeight: 20}}, styles: v(p, t.OAIColor.BorderLight)};
  exports.resolveSettingsTheme = V;
  exports.resolveSettingsColors = F;
  exports.resolveSettingsHorizontalInset = E;
  exports.SettingsAppearance = {toggleDimensions: {width: 63, height: 28, thumbSize: 26, thumbInset: 1}, toggleColors: {checkedTrack: t.OAIColor.InteractiveBgSwitchSelected, track: t.OAIColor.InteractiveBgControlDefault, thumb: t.OAIColor.InteractiveBgSwitchThumb}, preview: function <atom:0>, textPreview: {emptyLines: 1}, notice: new a.Style({gap: 8, padding: 16, width: "100%"}), search: {color: t.OAIColor.TextAccent, radius: 12, opacity: 0.28}};
  M = {x: t.OAISpacing.Two, top: t.OAISpacing.OneAndHalf, bottom: t.OAISpacing.One};
  null;
  M;
  P = {top: t.OAISpacing.One};
  b = 28;
  exports.SettingsEditorAppearance = {contentPadding: M, contentPaddingWithDescription: P, background: t.OAIColor.BgSystemElevated, radius: t.OAIRadius.Md, text: t.OAIColor.ThemeText, descriptionSize: t.OAITextSize.BodySmall, inputSize: t.OAIControlSize.Lg, suggestionSize: t.OAIControlSize.Sm, finishMaterial: g.ControlMaterial.Glass, typography: function <atom:0>, titleTypography: function <atom:0>, root: new a.Style({backgroundColor: t.OAIColor.BgSystemElevated, alignItems: "stretch", flexDirection: "column", height: "100%", justifyContent: "space-between", width: "100%"}), editorContent: new a.Style({alignItems: "stretch", flexGrow: 1, flexShrink: 1, flexDirection: "column", minHeight: 0}), inlineTitle: new a.Style({alignItems: "center", flexDirection: "row", height: 70, justifyContent: "center", paddingTop: t.OAISpacing.ThreeQuarters, width: "100%"}), headerOverlay: new a.Style({position: "absolute", top: 0, left: 0, right: 0, zIndex: 1, flexDirection: "column"}), description: new a.Style({paddingLeft: b, paddingRight: b, paddingTop: t.OAISpacing.Two}), suggestions: new a.Style({alignItems: "center", flexDirection: "row", flexWrap: "wrap", gap: t.OAISpacing.One, paddingBottom: t.OAISpacing.One, paddingLeft: b, paddingRight: b}), suggestionButton: new a.Style({backgroundColor: t.OAIColor.InteractiveBgControlDefault}), bottomActions: new a.Style({alignItems: e.OAIAlign.Center, flexDirection: "row", gap: t.OAISpacing.Two, justifyContent: "flex-end", paddingBottom: t.OAISpacing.Two, paddingLeft: t.OAISpacing.Two, paddingRight: t.OAISpacing.Two}), finishAction: new a.Style({alignItems: "center", borderRadius: t.OAIRadius.Pill, height: e.remFromPoints(54), justifyContent: "center", width: e.remFromPoints(54)}), finishActionIcon: new a.Style({flexShrink: 0, height: e.remFromPoints(28), objectFit: "contain", width: e.remFromPoints(28)}), finishActionLayout: new a.Style({alignItems: "center", height: e.remFromPoints(54), justifyContent: "center", width: e.remFromPoints(68)})};
  null;
  exports.SettingsEditorAppearance;
  L = {background: t.OAIColor.BgElevatedSecondary, radius: t.OAIRadius.Xxl, text: t.OAIColor.TextPrimary, contentPadding: {x: 16, y: 16}, contentPaddingWithDescription: {x: 16, y: 16}, typography: C, root: new a.Style({backgroundColor: t.OAIColor.BgCanvas, flexDirection: "column", height: "100%", padding: 16, width: "100%"}), suggestions: new a.Style({flexDirection: "row", flexWrap: "wrap", gap: 8, paddingTop: 8}), bottomActions: new a.Style({alignItems: "flex-end"})};
  exports.resolveSettingsEditorAppearance = _;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/settings/SettingsTheme
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
