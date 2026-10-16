// fn n  args=1 vars=1 closure=3 cpool=0 bc=119B file=chatgpt_subscription_pricing/src/WorkPricingAppearance
// args: i
// closure: e, t, o
function {
  if (!(e.Device.isIOS())) goto L_71;
  return t.subscriptionPricingTextStyle(i);
  return o[i];
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=749B file=chatgpt_subscription_pricing/src/WorkPricingAppearance
// args: require, module, exports
// locals: e, i, t, o, n
function {
  n = function n;
  let o;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.workPricingTextStyle = undefined;
  e = require("valdi_core/src/Device");
  i = require("valdi_core/src/SystemFont");
  t = require("./SubscriptionPricingTypography");
  {}[t.SubscriptionPricingTextRole.HeroTitle] = {font: i.systemBoldFont(32), lineHeightMultiple: 1.25};
  {font: i.systemBoldFont(32), lineHeightMultiple: 1.25};
  {}[t.SubscriptionPricingTextRole.HeroSubtitle] = {font: i.systemFont(14), lineHeightMultiple: (20 / 14)};
  {font: i.systemFont(14), lineHeightMultiple: (20 / 14)};
  {}[t.SubscriptionPricingTextRole.PlanOption] = {font: i.systemFont(14), lineHeightMultiple: (20 / 14)};
  {font: i.systemFont(14), lineHeightMultiple: (20 / 14)};
  {}[t.SubscriptionPricingTextRole.ComparisonHeading] = {font: i.systemSemiboldFont(12), lineHeightMultiple: (16 / 12)};
  {font: i.systemSemiboldFont(12), lineHeightMultiple: (16 / 12)};
  {}[t.SubscriptionPricingTextRole.ComparisonFeature] = {font: i.systemFont(14), lineHeightMultiple: (20 / 14)};
  {font: i.systemFont(14), lineHeightMultiple: (20 / 14)};
  o = {};
  exports.workPricingTextStyle = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/WorkPricingAppearance
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
