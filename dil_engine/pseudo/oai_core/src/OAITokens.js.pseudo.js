// fn n  args=1 vars=1 closure=2 cpool=0 bc=1404B file=oai_core/src/OAITokens
// args: t
// closure: o, e
function {
  if (!((t == null))) goto L_28;
  t;
  if (!((o.BodyLarge === o.LabelSmall))) goto L_83;
  return {font: e.systemFont(11), lineHeight: 16};
  if (!((o.BodyLarge === o.LabelMedium))) goto L_de;
  return {font: e.systemSemiboldFont(12), lineHeight: 16};
  if (!((o.BodyLarge === o.LabelLarge))) goto L_139;
  return {font: e.systemSemiboldFont(14), lineHeight: 20};
  if (!((o.BodyLarge === o.BodySmall))) goto L_194;
  return {font: e.systemFont(12), lineHeight: 16};
  if (!((o.BodyLarge === o.BodyMedium))) goto L_1ef;
  return {font: e.systemFont(14), lineHeight: 20};
  if (!((o.BodyLarge === o.TitleSmall))) goto L_24a;
  return {font: e.systemMediumFont(16), lineHeight: 22};
  if (!((o.BodyLarge === o.TitleMedium))) goto L_2a5;
  return {font: e.systemSemiboldFont(18), lineHeight: 24};
  if (!((o.BodyLarge === o.TitleLarge))) goto L_300;
  return {font: e.systemSemiboldFont(20), lineHeight: 28};
  if (!((o.BodyLarge === o.HeadlineSmall))) goto L_35b;
  return {font: e.systemBoldFont(24), lineHeight: 32};
  if (!((o.BodyLarge === o.HeadlineMedium))) goto L_3b6;
  return {font: e.systemBoldFont(28), lineHeight: 36};
  if (!((o.BodyLarge === o.HeadlineLarge))) goto L_411;
  return {font: e.systemBoldFont(32), lineHeight: 40};
  if (!((o.BodyLarge === o.DisplaySmall))) goto L_46c;
  return {font: e.systemBoldFont(36), lineHeight: 44};
  if (!((o.BodyLarge === o.DisplayMedium))) goto L_4c7;
  return {font: e.systemBoldFont(45), lineHeight: 52};
  if (!((o.BodyLarge === o.DisplayLarge))) goto L_522;
  return {font: e.systemBoldFont(57), lineHeight: 64};
  (o.BodyLarge === o.BodyLarge);
  return {font: e.systemFont(16), lineHeight: 24};
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=162B file=oai_core/src/OAITokens
// args: e
// closure: i
function {
  if (!((e == null))) goto L_28;
  e;
  if (!((i.Md === i.Sm))) goto L_51;
  return 32;
  if (!((i.Md === i.Lg))) goto L_7a;
  return 48;
  (i.Md === i.Md);
  return 40;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1741B file=oai_core/src/OAITokens
// args: e
function {
  e.BgCanvas = "oai-bg-canvas";
  e.BgCanvasSubtle = "oai-bg-canvas-subtle";
  e.BgCanvasTransparent = "oai-bg-canvas-transparent";
  e.BgPrimary = "oai-bg-primary";
  e.BgPrimaryInverse = "oai-bg-primary-inverse";
  e.BgSecondary = "oai-bg-secondary";
  e.BgTertiary = "oai-bg-tertiary";
  e.BgLayer3 = "oai-bg-layer-3";
  e.BgUserMessage = "oai-bg-user-message";
  e.BgCodeBlock = "oai-bg-code-block";
  e.BgScrim = "oai-bg-scrim";
  e.BgElevatedPrimary = "oai-bg-elevated-primary";
  e.BgElevatedSecondary = "oai-bg-elevated-secondary";
  e.BgGrouped = "oai-bg-grouped";
  e.BgGroupedElevated = "oai-bg-grouped-elevated";
  e.BgGroupedSurface = "oai-bg-grouped-surface";
  e.BgSystemElevated = "oai-bg-system-elevated";
  e.BgStatusError = "oai-bg-status-error";
  e.BgStatusSuccess = "oai-bg-status-success";
  e.BgStatusWarning = "oai-bg-status-warning";
  e.BorderDefault = "oai-border-default";
  e.BorderHeavy = "oai-border-heavy";
  e.BorderLight = "oai-border-light";
  e.BorderSystemSeparator = "oai-border-system-separator";
  e.BorderStatusError = "oai-border-status-error";
  e.BorderStatusSuccess = "oai-border-status-success";
  e.BorderStatusWarning = "oai-border-status-warning";
  e.IconPrimary = "oai-icon-primary";
  e.IconSecondary = "oai-icon-secondary";
  e.IconTertiary = "oai-icon-tertiary";
  e.IconSystemDisclosure = "oai-icon-system-disclosure";
  e.IconInverted = "oai-icon-inverted";
  e.IconInvertedStatic = "oai-icon-inverted-static";
  e.IconAccent = "oai-icon-accent";
  e.IconStatusError = "oai-icon-status-error";
  e.IconStatusSuccess = "oai-icon-status-success";
  e.IconStatusWarning = "oai-icon-status-warning";
  e.TextPrimary = "oai-text-primary";
  e.TextSecondary = "oai-text-secondary";
  e.TextSystemSecondary = "oai-text-system-secondary";
  e.TextSystemLink = "oai-text-system-link";
  e.TextIOSLink = "oai-text-ios-link";
  e.TextAndroidLink = "oai-text-android-link";
  e.TextTertiary = "oai-text-tertiary";
  e.TextInverse = "oai-text-inverse";
  e.TextInverseStatic = "oai-text-inverted-static";
  e.TextAccent = "oai-text-accent";
  e.TextStatusError = "oai-text-status-error";
  e.TextStatusSuccess = "oai-text-status-success";
  e.TextStatusWarning = "oai-text-status-warning";
  e.InteractiveBgPrimaryDefault = "oai-interactive-bg-primary-default";
  e.InteractiveBgPrimaryHover = "oai-interactive-bg-primary-hover";
  e.InteractiveBgPrimaryPress = "oai-interactive-bg-primary-press";
  e.InteractiveBgSecondaryDefault = "oai-interactive-bg-secondary-default";
  e.InteractiveBgTertiaryDefault = "oai-interactive-bg-tertiary-default";
  e.InteractiveBgTertiaryHover = "oai-interactive-bg-tertiary-hover";
  e.InteractiveBgTertiaryPress = "oai-interactive-bg-tertiary-press";
  e.InteractiveBgRowHover = "oai-interactive-bg-row-hover";
  e.InteractiveBgRowPress = "oai-interactive-bg-row-press";
  e.InteractiveBgDangerPrimaryDefault = "oai-interactive-bg-danger-primary-default";
  e.InteractiveBgSystemDestructive = "oai-interactive-bg-system-destructive";
  e.InteractiveBgControlDefault = "oai-interactive-bg-control-default";
  e.InteractiveBgSwitchSelected = "oai-interactive-bg-switch-selected";
  e.InteractiveBgSwitchThumb = "oai-interactive-bg-switch-thumb";
  e.InteractiveBorderFocus = "oai-interactive-border-focus";
  e.InteractiveBorderSecondaryDefault = "oai-interactive-border-secondary-default";
  e.InteractiveBorderDangerSecondaryDefault = "oai-interactive-border-danger-secondary-default";
  e.InteractiveLabelPrimaryDefault = "oai-interactive-label-primary-default";
  e.InteractiveLabelSecondaryDefault = "oai-interactive-label-secondary-default";
  e.InteractiveLabelTertiaryDefault = "oai-interactive-label-tertiary-default";
  e.InteractiveLabelAccentDefault = "oai-interactive-label-accent-default";
  e.InteractiveLabelDangerPrimaryDefault = "oai-interactive-label-danger-primary-default";
  e.InteractiveLabelDangerSecondaryDefault = "oai-interactive-label-danger-secondary-default";
  e.ThemeDefault = "oai-theme-default";
  e.ThemeBackground = "oai-theme-background";
  e.ThemeText = "oai-theme-text";
  e.ThemeStatic = "oai-theme-static";
  e.ThemeCodexDefault = "oai-theme-codex-default";
  e.ThemeCodexBackground = "oai-theme-codex-background";
  e.ThemeCodexText = "oai-theme-codex-text";
  e.ThemeBlueDefault = "oai-theme-blue-default";
  e.ThemeBlueBackground = "oai-theme-blue-background";
  e.ThemeBlueText = "oai-theme-blue-text";
  e.ThemeGreenDefault = "oai-theme-green-default";
  e.ThemeGreenBackground = "oai-theme-green-background";
  e.ThemeGreenText = "oai-theme-green-text";
  e.AccentMintBackgroundSubtle = "oai-accent-mint-background-subtle";
  e.AccentMintTextOnSubtle = "oai-accent-mint-text-on-subtle";
  e.ThemeOrangeDefault = "oai-theme-orange-default";
  e.ThemeOrangeBackground = "oai-theme-orange-background";
  e.ThemeOrangeText = "oai-theme-orange-text";
  e.ThemePurpleDefault = "oai-theme-purple-default";
  e.ThemePurpleBackground = "oai-theme-purple-background";
  e.ThemePurpleText = "oai-theme-purple-text";
  e.ThemeYellowDefault = "oai-theme-yellow-default";
  e.ThemeYellowBackground = "oai-theme-yellow-background";
  e.ThemeYellowText = "oai-theme-yellow-text";
  e.Canvas = "oai-bg-primary";
  e.Surface = "oai-bg-primary";
  e.SurfaceSubtle = "oai-bg-tertiary";
  e.SurfaceElevated = "oai-bg-elevated-primary";
  e.Primary = "oai-interactive-bg-primary-default";
  e.PrimaryHover = "oai-interactive-bg-primary-hover";
  e.Secondary = "oai-interactive-bg-tertiary-default";
  e.SecondaryHover = "oai-interactive-bg-tertiary-hover";
  e.Accent = "oai-text-accent";
  e.AccentSoft = "oai-bg-status-success";
  e.Danger = "oai-interactive-bg-danger-primary-default";
  e.DangerSoft = "oai-bg-status-error";
  e.WarningSoft = "oai-bg-status-warning";
  e.InfoSoft = "oai-theme-codex-background";
  e.TextDanger = "oai-text-status-error";
  e.TextWarning = "oai-text-status-warning";
  e.BorderSubtle = "oai-border-light";
  e.BorderStrong = "oai-border-heavy";
  e.Transparent = "transparent";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=456B file=oai_core/src/OAITokens
// args: e
function {
  e.None = 0;
  e[0] = "None";
  e.Px = 1;
  e[1] = "Px";
  e.Quarter = 2;
  e[2] = "Quarter";
  e.Half = 4;
  e[4] = "Half";
  e.ThreeQuarters = 6;
  e[6] = "ThreeQuarters";
  e.One = 8;
  e[8] = "One";
  e.OnePointTwentyFive = 10;
  e[10] = "OnePointTwentyFive";
  e.OneAndHalf = 12;
  e[12] = "OneAndHalf";
  e.OnePointFive = 12;
  e[12] = "OnePointFive";
  e.OnePointSeventyFive = 14;
  e[14] = "OnePointSeventyFive";
  e.Two = 16;
  e[16] = "Two";
  e.TwoPointFive = 20;
  e[20] = "TwoPointFive";
  e.Three = 24;
  e[24] = "Three";
  e.Four = 32;
  e[32] = "Four";
  e.FourPointFive = 36;
  e[36] = "FourPointFive";
  e.Five = 40;
  e[40] = "Five";
  e.FivePointFive = 44;
  e[44] = "FivePointFive";
  e.Six = 48;
  e[48] = "Six";
  e.Seven = 56;
  e[56] = "Seven";
  e.Eight = 64;
  e[64] = "Eight";
  e.Nine = 72;
  e[72] = "Nine";
  e.Ten = 80;
  e[80] = "Ten";
  e.Twelve = 96;
  e[96] = "Twelve";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=159B file=oai_core/src/OAITokens
// args: e
function {
  e.None = 0;
  e[0] = "None";
  e.Xs = 4;
  e[4] = "Xs";
  e.Sm = 6;
  e[6] = "Sm";
  e.Md = 8;
  e[8] = "Md";
  e.Lg = 12;
  e[12] = "Lg";
  e.Xl = 16;
  e[16] = "Xl";
  e.Xxl = 24;
  e[24] = "Xxl";
  e.Pill = 999;
  e[999] = "Pill";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=oai_core/src/OAITokens
// args: e
function {
  e.Sm = "sm";
  e.Md = "md";
  e.Lg = "lg";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=316B file=oai_core/src/OAITokens
// args: e
function {
  e.LabelSmall = "labelSmall";
  e.LabelMedium = "labelMedium";
  e.LabelLarge = "labelLarge";
  e.BodySmall = "bodySmall";
  e.BodyMedium = "bodyMedium";
  e.BodyLarge = "bodyLarge";
  e.TitleSmall = "titleSmall";
  e.TitleMedium = "titleMedium";
  e.TitleLarge = "titleLarge";
  e.HeadlineSmall = "headlineSmall";
  e.HeadlineMedium = "headlineMedium";
  e.HeadlineLarge = "headlineLarge";
  e.DisplaySmall = "displaySmall";
  e.DisplayMedium = "displayMedium";
  e.DisplayLarge = "displayLarge";
  e.Caption = "bodySmall";
  e.Body = "bodyLarge";
  e.BodyStrong = "labelLarge";
  e.Title = "titleMedium";
  e.Heading = "headlineSmall";
  e.Display = "displaySmall";
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=7 bc=292B file=oai_core/src/OAITokens
// args: require, module, exports
// locals: e, t, a, r, i, o, n, l
function {
  n = function n;
  l = function l;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAIColor = undefined;
  exports.OAISpacing = undefined;
  exports.OAIRadius = undefined;
  exports.OAIControlSize = undefined;
  exports.OAITextSize = undefined;
  exports.resolveOAITextStyle = undefined;
  exports.resolveOAIControlHeight = undefined;
  e = require("valdi_core/src/SystemFont");
  if ((t)) goto L_ac;
  t = {};
  exports.OAIColor = {};
  !function <atom:0>({});
  if ((a)) goto L_c3;
  a = {};
  exports.OAISpacing = {};
  function <atom:0>({});
  if ((r)) goto L_d9;
  r = {};
  exports.OAIRadius = {};
  function <atom:0>({});
  if ((i)) goto L_f1;
  i = {};
  exports.OAIControlSize = {};
  function <atom:0>({});
  if ((o)) goto L_109;
  o = {};
  exports.OAITextSize = {};
  function <atom:0>({});
  exports.resolveOAITextStyle = n;
  exports.resolveOAIControlHeight = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_core/src/OAITokens
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
