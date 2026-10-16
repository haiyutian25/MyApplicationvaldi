// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=23B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshCopy
// args: i, e
function {
  return {title: i, isIncluded: true, isIncludedInComparisonPlan: (0 === e)};
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=259B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshCopy
// args: e
// closure: r, l, n, i, c
function {
  if (!((e.id === r))) goto L_101;
  null;
  e;
  if (!(l)) goto L_5c;
  goto L_f3;
  // [栈深重同步 2 -> 1]
  if (!(n)) goto L_ab;
  goto L_f3;
  // [栈深重同步 2 -> 1]
  return {title: i.default.subscriptionsPlanNamePlus(), features: c};
  return e;
}

// fn s  args=3 vars=8 closure=3 cpool=2 bc=2222B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshCopy
// args: s, o, u
// locals: r, l, n, p, c
// closure: i, e, t
function {
  let c;
  let p;
  let n;
  let l;
  let r;
  r = o.selectedPlanId;
  l = u.usesNewCopy;
  if (!(("go" !== r))) goto L_6d;
  if (!(("plus" !== r))) goto L_6d;
  return s;
  n = ("go" === r);
  if (!(u.useTrialPlusCopy)) goto L_c2;
  goto L_c3;
  // [栈深重同步 1 -> 0]
  p = undefined;
  if (!(l)) goto L_487;
  if (!(n)) goto L_28a;
  goto L_48c;
  // [栈深重同步 1 -> 0]
  goto L_48c;
  // [栈深重同步 1 -> 0]
  c = t(n).map(function <atom:0>);
  null;
  s;
  if (!((undefined !== p))) goto L_4e9;
  goto L_623;
  // [栈深重同步 2 -> 1]
  if (!(l)) goto L_58c;
  if (!(n)) goto L_541;
  goto L_623;
  // [栈深重同步 2 -> 1]
  goto L_623;
  // [栈深重同步 2 -> 1]
  if (!(n)) goto L_5db;
  goto L_623;
  // [栈深重同步 2 -> 1]
  if (!((p == null))) goto L_633;
  p;
  goto L_654;
  if (!((undefined !== p))) goto L_687;
  goto L_7c1;
  // [栈深重同步 2 -> 1]
  if (!(l)) goto L_72a;
  if (!(n)) goto L_6df;
  goto L_7c1;
  // [栈深重同步 2 -> 1]
  goto L_7c1;
  // [栈深重同步 2 -> 1]
  if (!(n)) goto L_779;
  goto L_7c1;
  // [栈深重同步 2 -> 1]
  return {title: i.default.subscriptionsPlusTitle(), titleAccentRange: undefined.titleAccentRange, subtitle: i.default.subscriptionsPlusSubtitle(), featuresTitle: i.default.subscriptionsPremiumComparisonHeader(), comparisonPlanTitle: i.default.subscriptionsPremiumComparisonFreeHeader(), plans: s.plans.map(function <atom:0>)};
}

// fn t  args=1 vars=1 closure=1 cpool=0 bc=878B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshCopy
// args: e
// closure: i
function {
  if (!(e)) goto L_172;
  return [i.default.subscriptionsGoSimpleDescriptionOne(), i.default.subscriptionsGoSimpleDescriptionTwo(), i.default.subscriptionsGoSimpleDescriptionThree(), i.default.subscriptionsGoSimpleDescriptionFour(), i.default.subscriptionsGoSimpleDescriptionSix()];
  return [i.default.subscriptionsPremiumSimpleDescriptionOne(), i.default.subscriptionsPremiumSimpleDescriptionTwo(), i.default.subscriptionsPremiumSimpleDescriptionThree(), i.default.subscriptionsPremiumSimpleDescriptionFour(), i.default.subscriptionsPremiumSimpleDescriptionSeven(), i.default.subscriptionsPremiumSimpleDescriptionFive(), i.default.subscriptionsPremiumSimpleDescriptionSix()];
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=107B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshCopy
// args: require, module, exports
// locals: i, e, s, t
function {
  s = function s;
  t = function t;
  let e;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.applyAndroidPricingRefreshCopy = undefined;
  i = require("./Strings");
  e = require("./SubscriptionPricingOverrides");
  exports.applyAndroidPricingRefreshCopy = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshCopy
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
