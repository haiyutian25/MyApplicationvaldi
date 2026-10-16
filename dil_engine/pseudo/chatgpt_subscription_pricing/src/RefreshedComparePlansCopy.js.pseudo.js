// fn r  args=2 vars=6 closure=2 cpool=0 bc=2877B file=chatgpt_subscription_pricing/src/RefreshedComparePlansCopy
// args: e, r
// locals: t, o, n, r#1
// closure: s, i
function {
  let n;
  let o;
  let t;
  t = e.product.offeredPlanId;
  o = s.isSubscriptionPricingProPlan(t);
  n = ("plus" === t);
  if (!(!r)) goto L_5a0;
  let r#1;
  if (!(o)) goto L_b9;
  goto L_bc;
  // [栈深重同步 1 -> 0]
  r#1 = [];
  if (!(o)) goto L_10e;
  goto L_1a5;
  // [栈深重同步 2 -> 1]
  if (!(n)) goto L_15d;
  goto L_1a5;
  // [栈深重同步 2 -> 1]
  if (!(o)) goto L_1fa;
  goto L_291;
  // [栈深重同步 2 -> 1]
  if (!(n)) goto L_249;
  goto L_291;
  // [栈深重同步 2 -> 1]
  if (!(o)) goto L_349;
  if (!(e.assistantEnabled)) goto L_318;
  goto L_31b;
  // [栈深重同步 4 -> 3]
  // append([r#1[0]], 1, [])
  // append([r#1[0]], [], r#1.slice(1))
  r#1.slice(1);
  goto L_59a;
  // [栈深重同步 2 -> 1]
  if (!(n)) goto L_477;
  goto L_59a;
  // [栈深重同步 2 -> 1]
  return {title: i.default.subscriptionsPlanNameGo(), subtitle: i.default.subscriptionsGoSubtitle(), benefits: [i.default.subscriptionsGoTitleOne(), i.default.subscriptionsGoSimpleDescriptionTwo(), i.default.subscriptionsChoosePlanFeatureMoreFileUploads(), i.default.subscriptionsGoSimpleDescriptionFour()]};
  if (!(o)) goto L_5f1;
  goto L_688;
  // [栈深重同步 2 -> 1]
  if (!(n)) goto L_640;
  goto L_688;
  // [栈深重同步 2 -> 1]
  if (!(o)) goto L_6dd;
  goto L_774;
  // [栈深重同步 2 -> 1]
  if (!(n)) goto L_72c;
  goto L_774;
  // [栈深重同步 2 -> 1]
  if (!(o)) goto L_7c8;
  goto L_810;
  // [栈深重同步 2 -> 1]
  if (!(o)) goto L_976;
  if (!(e.assistantEnabled)) goto L_8da;
  goto L_8dd;
  // [栈深重同步 4 -> 3]
  // append([i.default.subscriptionsPricingCompareFrontierModels()], 1, [])
  [i.default.subscriptionsPricingCompareFrontierModels()][[]] = i.default.subscriptionsChooseWorkCodexUsage();
  [i.default.subscriptionsPricingCompareFrontierModels()][(i.default.subscriptionsChooseWorkCodexUsage() ++)] = i.default.subscriptionsIosProFileStorage();
  (i.default.subscriptionsIosProFileStorage() ++);
  goto L_b37;
  // [栈深重同步 2 -> 1]
  if (!(n)) goto L_a5c;
  goto L_b37;
  // [栈深重同步 2 -> 1]
  return {title: i.default.subscriptionsGoTitle(), subtitle: i.default.subscriptionsIosGoRefreshSubtitle(), benefitsTitle: i.default.subscriptionsChooseEverythingFree(), benefits: [i.default.subscriptionsGoRefreshedMessagesWithTools(), i.default.subscriptionsGoSimpleDescriptionFour(), i.default.subscriptionsChooseGoMemoryStorage()]};
}

// fn t  args=1 vars=1 closure=2 cpool=0 bc=656B file=chatgpt_subscription_pricing/src/RefreshedComparePlansCopy
// args: s
// closure: e, i
function {
  if (!((s === e.PricingBillingPeriod.Daily))) goto L_92;
  return i.default.subscriptionsProPackageDurationDay();   // tail call
  if (!((s === e.PricingBillingPeriod.Weekly))) goto L_123;
  return i.default.subscriptionsProPackageDurationWeek();   // tail call
  if (!((s === e.PricingBillingPeriod.Monthly))) goto L_1b4;
  return i.default.subscriptionsProPackageDurationMonth();   // tail call
  if (!((s === e.PricingBillingPeriod.Annual))) goto L_245;
  return i.default.subscriptionsProPackageDurationYear();   // tail call
  if (!((s === e.PricingBillingPeriod.Lifetime))) goto L_28f;
  s;
  return;
  // [栈深重同步 0 -> 1]
  return;
}

// fn o  args=1 vars=1 closure=0 cpool=3 bc=27B file=chatgpt_subscription_pricing/src/RefreshedComparePlansCopy
// args: e
function {
  if (!(("prolite" === e))) goto L_c;
  return "100";
  if (!(("pro" === e))) goto L_18;
  return "200";
  return "500";
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=169B file=chatgpt_subscription_pricing/src/RefreshedComparePlansCopy
// args: require, module, exports
// locals: e, s, i, r, t, o
function {
  r = function r;
  t = function t;
  o = function o;
  let i;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.refreshedComparePlanCopy = undefined;
  exports.comparisonBillingPeriod = undefined;
  exports.refreshedCompareProTierLabel = undefined;
  e = require("./PricingHost");
  s = require("./SubscriptionPricingProPresentation");
  i = require("./Strings");
  exports.refreshedComparePlanCopy = r;
  exports.comparisonBillingPeriod = t;
  exports.refreshedCompareProTierLabel = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/RefreshedComparePlansCopy
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
