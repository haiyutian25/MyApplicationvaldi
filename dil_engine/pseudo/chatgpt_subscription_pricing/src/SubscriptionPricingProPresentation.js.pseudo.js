// fn i  args=1 vars=1 closure=0 cpool=0 bc=30B file=chatgpt_subscription_pricing/src/SubscriptionPricingProPresentation
// args: r
function {
  if ((("prolite" === r))) goto L_1d;
  if ((("pro" === r))) goto L_1d;
  return ("promax" === r);
}

// fn e  args=1 vars=1 closure=3 cpool=0 bc=276B file=chatgpt_subscription_pricing/src/SubscriptionPricingProPresentation
// args: i
// closure: o, s, r
function {
  if (!((i > 1))) goto L_cb;
  if (!((r.getCurrentLocales()[0] == null))) goto L_a2;
  r.getCurrentLocales()[0];
  goto L_c6;
  return o.default.subscriptionsIosProTierCountSubtitle(s.formatNumber(i, -1, undefined.toString()));
  return o.default.subscriptionsIosProSubtitle();
}

// fn t  args=1 vars=1 closure=1 cpool=0 bc=246B file=chatgpt_subscription_pricing/src/SubscriptionPricingProPresentation
// args: r
// closure: o
function {
  if (!((r === "prolite"))) goto L_52;
  return o.default.subscriptionsIosProStandardTier();   // tail call
  if (!((r === "pro"))) goto L_a3;
  return o.default.subscriptionsIosProMoreUsageTier();   // tail call
  if (!((r === "promax"))) goto L_f4;
  return o.default.subscriptionsIosProMaxUsageTier();   // tail call
  return "";
}

// fn u  args=1 vars=2 closure=1 cpool=0 bc=538B file=chatgpt_subscription_pricing/src/SubscriptionPricingProPresentation
// args: r
// locals: s
// closure: o
function {
  let s;
  if (!(("promax" === r))) goto L_57;
  goto L_f2;
  // [栈深重同步 1 -> 0]
  if (!(("pro" === r))) goto L_aa;
  goto L_f2;
  // [栈深重同步 1 -> 0]
  s = o.default.subscriptionsIosProWorkAndCodexUsage();
  return [o.default.subscriptionsIosProFrontierModels(), s, o.default.subscriptionsProFeatureMaximumMemory(), o.default.subscriptionsIosProFileStorage(), o.default.subscriptionsIosProEarlyAccess()];
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=4 bc=196B file=chatgpt_subscription_pricing/src/SubscriptionPricingProPresentation
// args: require, module, exports
// locals: r, s, o, i, e, t, u
function {
  i = function i;
  e = function e;
  t = function t;
  u = function u;
  let o;
  let s;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isSubscriptionPricingProPlan = undefined;
  exports.subscriptionPricingProSubtitle = undefined;
  exports.subscriptionPricingProTierDetail = undefined;
  exports.subscriptionPricingProFeatureTitles = undefined;
  r = require("valdi_core/src/localization/LocaleResolver");
  s = require("valdi_core/src/utils/NumberUtils");
  o = require("./Strings");
  exports.isSubscriptionPricingProPlan = i;
  exports.subscriptionPricingProSubtitle = e;
  exports.subscriptionPricingProTierDetail = t;
  exports.subscriptionPricingProFeatureTitles = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingProPresentation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
