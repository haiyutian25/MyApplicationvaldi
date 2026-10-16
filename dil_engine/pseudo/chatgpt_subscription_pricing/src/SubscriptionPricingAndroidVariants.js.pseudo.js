// fn r  args=4 vars=8 closure=3 cpool=0 bc=3364B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidVariants
// args: r, n, t, o
// locals: d, l, u, a
// closure: s, i, e
function {
  let a;
  let u;
  let l;
  let d;
  if (!((n === s.Control))) goto L_33;
  return;
  d = ("go" === r);
  if (((n === s.Refreshed))) goto L_87;
  if (!((n === s.Reordered))) goto L_37d;
  if (!(d)) goto L_168;
  goto L_376;
  // [栈深重同步 3 -> 2]
  if (!((n === s.Reordered))) goto L_285;
  goto L_376;
  // [栈深重同步 3 -> 2]
  return {features: i([t.refreshedPlusUnlimitedTextChat, t.refreshedPlusAdvancedModels, t.refreshedPlusWorkAgent, t.refreshedPlusCodexAgent, t.refreshedPlusFileStorage, t.refreshedPlusImageCreation, t.refreshedPlusEmailCalendarConnections])};
  l = (n === s.MinorUpdates);
  u = (n === s.VerbPhrases);
  a = undefined;
  if (!(d)) goto L_687;
  if (!(u)) goto L_58f;
  goto L_b38;
  // [栈深重同步 1 -> 0]
  goto L_b38;
  // [栈深重同步 1 -> 0]
  if (!(u)) goto L_88d;
  goto L_b38;
  // [栈深重同步 1 -> 0]
  if (!(l)) goto L_9af;
  goto L_b38;
  // [栈深重同步 1 -> 0]
  a = [t.refreshedPlusUnlimitedTextChat, e.default.subscriptionsPricingPlusThinking(), e.default.subscriptionsPricingPlusWorkAssistant(), t.refreshedPlusImageCreation, e.default.subscriptionsPricingPlusUploadsImages(), t.refreshedPlusFileStorage, e.default.subscriptionsPricingPlusCodingFinance()];
  [t.refreshedPlusUnlimitedTextChat, e.default.subscriptionsPricingPlusThinking(), e.default.subscriptionsPricingPlusWorkAssistant(), t.refreshedPlusImageCreation, e.default.subscriptionsPricingPlusUploadsImages(), t.refreshedPlusFileStorage, e.default.subscriptionsPricingPlusCodingFinance()];
  if (!(d)) goto L_b8d;
  goto L_bd5;
  // [栈深重同步 2 -> 1]
  if (!(d)) goto L_c7d;
  if (!(l)) goto L_c32;
  goto L_d14;
  // [栈深重同步 2 -> 1]
  goto L_d14;
  // [栈深重同步 2 -> 1]
  if (!(l)) goto L_ccc;
  goto L_d14;
  // [栈深重同步 2 -> 1]
  return {title: e.default.subscriptionsPricingPlusTitle(), subtitle: e.default.subscriptionsPricingPlusFullExperience(), features: i(a)};
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=23B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidVariants
// args: e, s
function {
  return {title: e, isIncluded: true, isIncludedInComparisonPlan: (0 === s)};
}

// fn i  args=1 vars=1 closure=0 cpool=1 bc=39B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidVariants
// args: e
function {
  return e.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=91B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidVariants
// args: e
function {
  e.Control = "control";
  e.Refreshed = "refreshed";
  e.Reordered = "reordered";
  e.MinorUpdates = "minor_updates";
  e.NewTaglines = "new_taglines";
  e.VerbPhrases = "verb_phrases";
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=130B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidVariants
// args: require, module, exports
// locals: e, s, r, i
function {
  r = function r;
  i = function i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AndroidPricingPageVariant = undefined;
  exports.androidPricingContent = undefined;
  e = require("./Strings");
  if ((s)) goto L_73;
  s = {};
  exports.AndroidPricingPageVariant = {};
  !function <atom:0>({});
  exports.androidPricingContent = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidVariants
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
