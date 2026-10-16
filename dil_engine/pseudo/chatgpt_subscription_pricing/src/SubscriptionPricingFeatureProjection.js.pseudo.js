// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=23B file=chatgpt_subscription_pricing/src/SubscriptionPricingFeatureProjection
// args: e, r
function {
  return {title: e, isIncluded: true, isIncludedInComparisonPlan: (0 === r)};
}

// fn s  args=5 vars=5 closure=1 cpool=1 bc=49B file=chatgpt_subscription_pricing/src/SubscriptionPricingFeatureProjection
// args: e, r, i, n, o
// closure: t
function {
  return t(e, r, i, n, o).map(function <atom:0>);   // tail call
}

// fn t  args=5 vars=12 closure=6 cpool=0 bc=1768B file=chatgpt_subscription_pricing/src/SubscriptionPricingFeatureProjection
// args: i, s, t, d, l
// locals: u, p, r, i#1, g, P, e
// closure: o, n, e, c, r, a
function {
  let P;
  let g;
  let p;
  let u;
  u = t.strings.featureCopy;
  p = (l === o.Android);
  if (!((l === o.IOS))) goto L_163;
  if (!(n.isSubscriptionPricingProPlan(i.id))) goto L_163;
  if (!((s == null))) goto L_118;
  s;
  goto L_139;
  if (!((undefined.offeredPlanId == null))) goto L_160;
  undefined.offeredPlanId;
  return n.subscriptionPricingProFeatureTitles(i.id);   // tail call
  if (!(("go" === i.id))) goto L_248;
  return [u.basicModels, u.moreMessages, u.moreUploads, u.goImageCreation, u.longerMemory];
  if ((("pro" === i.id))) goto L_29c;
  if (!(("prolite" === i.id))) goto L_452;
  let i#1;
  let r;
  if (!((s == null))) goto L_2b0;
  s;
  goto L_2d1;
  r = undefined.usageMultiplierLabel;
  if (!(p)) goto L_33a;
  if (!(e.isVersionAtLeast(39))) goto L_33a;
  if (!((s == null))) goto L_30d;
  s;
  goto L_32e;
  if (!((undefined.featureUsageLabel == null))) goto L_336;
  undefined.featureUsageLabel;
  r = r;
  r;
  if (!((undefined === r))) goto L_347;
  goto L_34d;
  // [栈深重同步 1 -> 0]
  i#1 = [r];
  i#1.push(u.proFrontierModel, u.proCodex, u.proDeepResearch, u.proUnlimitedModel, u.proMaximumMemory, u.earlyAccess);
  return i#1;
  if (!(("plus" !== i.id))) goto L_480;
  return [];
  g = (i.id === t.selectedPlanId);
  if (!(g)) goto L_563;
  if (!((t.personalization == null))) goto L_4f9;
  t.personalization;
  goto L_51a;
  if (!((undefined.planId === i.id))) goto L_563;
  goto L_564;
  // [栈深重同步 1 -> 0]
  P = undefined;
  if (!((undefined !== P))) goto L_598;
  return c(u, P.intent);   // tail call
  if (!(p)) goto L_6a0;
  return [u.coreModel, u.smarterModels, u.moreMessagesAndUploads, u.plusImageCreation, u.moreMemory, u.earlyAccess, u.agentsAndDeepResearch];
  if (!(g)) goto L_6db;
  let e;
  e = r.subscriptionPricingRefreshedPlusFeatureTitles(d);
  if (!((undefined !== e))) goto L_6db;
  return e;
  return a(u, d, g);   // tail call
}

// fn a  args=3 vars=4 closure=0 cpool=0 bc=451B file=chatgpt_subscription_pricing/src/SubscriptionPricingFeatureProjection
// args: e, r, i
// locals: n
function {
  let n;
  n = [e.basicModels];
  if (!(i)) goto L_a0;
  if (!(r.noAdsEnabled())) goto L_a0;
  n.push(e.noAds);
  if (!(i)) goto L_133;
  goto L_155;
  // [栈深重同步 5 -> 4]
  n.push(e.smarterModels, e.moreMessagesAndUploads, e.plusImageCreation, e.moreMemory, e.agentsAndDeepResearch, e.earlyAccess);
  return n;
}

// fn c  args=2 vars=2 closure=1 cpool=0 bc=956B file=chatgpt_subscription_pricing/src/SubscriptionPricingFeatureProjection
// args: e, r
// closure: i
function {
  if (!((r === i.SubscriptionPricingNativePersonalizationIntent.Coding))) goto L_13f;
  return [e.coreModel, e.advancedChatIntelligence, e.expandedCodexTokenUsage, e.advancedCodingModels, e.expandedDataAnalysisTools, e.moreParallelTasks, e.earlyAccess];
  if (!((r === i.SubscriptionPricingNativePersonalizationIntent.ImageGeneration))) goto L_27d;
  return [e.coreModel, e.plusImageCreation, e.advancedImageQualityWithThinking, e.multiImageOutput, e.noWatermarks, e.moreMessagesAndUploads, e.earlyAccess];
  if (!((r === i.SubscriptionPricingNativePersonalizationIntent.PersonalFinance))) goto L_3bb;
  return [e.coreModel, e.advancedIntelligence, e.connectToBankAccounts, e.spendingBreakdowns, e.billPayReminders, e.subscriptionManagement, e.earlyAccess];
  r;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_subscription_pricing/src/SubscriptionPricingFeatureProjection
// args: e
function {
  e.IOS = 0;
  e[0] = "IOS";
  e.Android = 1;
  e[1] = "Android";
  e.IOSWork = 2;
  e[2] = "IOSWork";
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=5 bc=176B file=chatgpt_subscription_pricing/src/SubscriptionPricingFeatureProjection
// args: require, module, exports
// locals: e, r, i, n, o, s, t, a, c
function {
  s = function s;
  t = function t;
  a = function a;
  c = function c;
  let n;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscriptionPricingFeatureProfile = undefined;
  exports.subscriptionPricingFeaturesForPlan = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  r = require("./SubscriptionPricingCapabilities");
  i = require("./SubscriptionPricingNativeState");
  n = require("./SubscriptionPricingProPresentation");
  if ((o)) goto L_a0;
  o = {};
  exports.SubscriptionPricingFeatureProfile = {};
  !function <atom:0>({});
  exports.subscriptionPricingFeaturesForPlan = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingFeatureProjection
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
