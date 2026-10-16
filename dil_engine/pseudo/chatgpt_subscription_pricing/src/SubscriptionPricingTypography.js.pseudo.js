// fn o  args=0 vars=0 closure=2 cpool=0 bc=191B file=chatgpt_subscription_pricing/src/SubscriptionPricingTypography
// closure: e, t
function {
  if (!(e.Device.isIOS())) goto L_be;
  if (!(!e.Device.isWeb())) goto L_be;
  return t.supportsSemanticFontResolution();
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=253B file=chatgpt_subscription_pricing/src/SubscriptionPricingTypography
// args: e
function {
  e.HeroTitle = 0;
  e[0] = "HeroTitle";
  e.HeroSubtitle = 1;
  e[1] = "HeroSubtitle";
  e.PlanOption = 2;
  e[2] = "PlanOption";
  e.ComparisonHeading = 3;
  e[3] = "ComparisonHeading";
  e.ComparisonFeature = 4;
  e[4] = "ComparisonFeature";
  e.ProHeading = 5;
  e[5] = "ProHeading";
  e.ProFeature = 6;
  e[6] = "ProFeature";
  e.HeadlinePrice = 7;
  e[7] = "HeadlinePrice";
  e.HeadlineBillingPeriod = 8;
  e[8] = "HeadlineBillingPeriod";
  e.PackagePrice = 9;
  e[9] = "PackagePrice";
  e.PackageBillingPeriod = 10;
  e[10] = "PackageBillingPeriod";
  e.PackageValue = 11;
  e[11] = "PackageValue";
  e.Footer = 12;
  e[12] = "Footer";
  return;
}

// fn r  args=1 vars=1 closure=5 cpool=0 bc=128B file=chatgpt_subscription_pricing/src/SubscriptionPricingTypography
// args: t
// closure: i, o, n, e, l
function {
  if (!((t === i.Footer))) goto L_2e;
  if (!(o())) goto L_2e;
  return n;
  if (!(e.Device.isIOS())) goto L_7e;
  return l[t];
  return undefined;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=5 bc=2216B file=chatgpt_subscription_pricing/src/SubscriptionPricingTypography
// args: require, module, exports
// locals: e, t, i, o, n, l, r
function {
  o = function o;
  r = function r;
  let l;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscriptionPricingTextRole = undefined;
  exports.supportsNativeIOSFooterFonts = undefined;
  exports.nativeIOSSecondaryCheckoutTextStyle = undefined;
  exports.subscriptionPricingTextStyle = undefined;
  e = require("valdi_core/src/Device");
  t = require("valdi_core/src/SystemFont");
  if ((i)) goto L_9b;
  i = {};
  exports.SubscriptionPricingTextRole = {};
  !function <atom:0>({});
  exports.supportsNativeIOSFooterFonts = o;
  n = {font: t.semanticFont(t.SYSTEM_FONT_NAME, t.SemanticFontTextStyle.Footnote)};
  exports.nativeIOSSecondaryCheckoutTextStyle = {font: t.semanticFont(t.SYSTEM_SEMIBOLD_FONT_NAME, t.SemanticFontTextStyle.Footnote)};
  {}[i.HeroTitle] = {font: "".concat(t.systemMediumFont(34), " largeTitle"), lineHeightMultiple: (41 / 34)};
  {font: "".concat(t.systemMediumFont(34), " largeTitle"), lineHeightMultiple: (41 / 34)};
  {}[i.HeroSubtitle] = {font: "".concat(t.systemFont(17), " body"), lineHeightMultiple: (22 / 17)};
  {font: "".concat(t.systemFont(17), " body"), lineHeightMultiple: (22 / 17)};
  {}[i.PlanOption] = {font: "".concat(t.systemSemiboldFont(15), " subheadline"), lineHeightMultiple: (20 / 15)};
  {font: "".concat(t.systemSemiboldFont(15), " subheadline"), lineHeightMultiple: (20 / 15)};
  {}[i.ComparisonHeading] = {font: "".concat(t.systemBoldFont(16), " callout"), lineHeightMultiple: 1.375};
  {font: "".concat(t.systemBoldFont(16), " callout"), lineHeightMultiple: 1.375};
  {}[i.ComparisonFeature] = {font: "".concat(t.systemFont(16), " callout"), lineHeightMultiple: 1.375};
  {font: "".concat(t.systemFont(16), " callout"), lineHeightMultiple: 1.375};
  {}[i.ProHeading] = {font: "".concat(t.systemSemiboldFont(13), " footnote"), lineHeightMultiple: (18 / 13)};
  {font: "".concat(t.systemSemiboldFont(13), " footnote"), lineHeightMultiple: (18 / 13)};
  {}[i.ProFeature] = {font: "".concat(t.systemFont(15), " subheadline"), lineHeightMultiple: (20 / 15)};
  {font: "".concat(t.systemFont(15), " subheadline"), lineHeightMultiple: (20 / 15)};
  {}[i.HeadlinePrice] = {font: "".concat(t.systemBoldFont(28), " title1"), lineHeightMultiple: (34 / 28)};
  {font: "".concat(t.systemBoldFont(28), " title1"), lineHeightMultiple: (34 / 28)};
  {}[i.HeadlineBillingPeriod] = {font: "".concat(t.systemFont(11), " caption2"), lineHeightMultiple: (13 / 11)};
  {font: "".concat(t.systemFont(11), " caption2"), lineHeightMultiple: (13 / 11)};
  {}[i.PackagePrice] = {font: "".concat(t.systemSemiboldFont(18), " headline"), lineHeightMultiple: (22 / 18)};
  {font: "".concat(t.systemSemiboldFont(18), " headline"), lineHeightMultiple: (22 / 18)};
  {}[i.PackageBillingPeriod] = {font: "".concat(t.systemFont(13), " footnote"), lineHeightMultiple: (18 / 13)};
  {font: "".concat(t.systemFont(13), " footnote"), lineHeightMultiple: (18 / 13)};
  {}[i.PackageValue] = {font: "".concat(t.systemFont(13), " footnote"), lineHeightMultiple: (18 / 13)};
  {font: "".concat(t.systemFont(13), " footnote"), lineHeightMultiple: (18 / 13)};
  {}[i.Footer] = {font: "".concat(t.systemFont(13), " footnote"), lineHeightMultiple: (18 / 13)};
  {font: "".concat(t.systemFont(13), " footnote"), lineHeightMultiple: (18 / 13)};
  l = {};
  exports.subscriptionPricingTextStyle = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingTypography
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
