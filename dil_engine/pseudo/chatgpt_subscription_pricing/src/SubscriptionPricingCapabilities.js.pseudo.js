// fn r  args=1 vars=1 closure=1 cpool=0 bc=79B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: i
// closure: e
function {
  if (!(e.isVersionAtLeast(259))) goto L_4d;
  return i.openComparePlans;
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=125B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: e
function {
  // append([], 0, e.revenuecatOfferingIds)
  e.revenuecatOfferingIds;
  return {id: e.id, eplEnabled: e.eplEnabled, revenuecatOfferingIds: []};
}

// fn t  args=1 vars=2 closure=1 cpool=1 bc=306B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: i
// locals: e
// closure: e
function {
  if (!(e.isVersionAtLeast(240))) goto L_131;
  let e;
  e = i.eligibleOffers;
  if (!((undefined !== e))) goto L_131;
  if (!((undefined === e.eligiblePurchasePlatforms))) goto L_b2;
  goto L_dc;
  // [栈深重同步 2 -> 1]
  // append([], 0, e.eligiblePurchasePlatforms)
  e.eligiblePurchasePlatforms;
  return {defaultOfferId: e.defaultOfferId, eligiblePurchasePlatforms: [], offers: e.offers.map(function <atom:0>)};
  return;
}

// fn n  args=1 vars=2 closure=1 cpool=0 bc=176B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: i
// locals: e
// closure: e
function {
  if (!(e.isVersionAtLeast(126))) goto L_af;
  let e;
  e = i.signals;
  if (!((undefined === e))) goto L_5b;
  return undefined;
  return {entryPointId: e.entryPointId, isNoPaymentTrial: e.isNoPaymentTrial};
  return;
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=77B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: i
// closure: e
function {
  if (!(e.isVersionAtLeast(39))) goto L_4c;
  return i.platformServices;
  return;
}

// fn a  args=1 vars=1 closure=2 cpool=0 bc=88B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: i
// closure: e, s
function {
  if (!(e.isVersionAtLeast(79))) goto L_54;
  if (!((i.inactivePlanLabelColor == null))) goto L_57;
  i.inactivePlanLabelColor;
  return s;
  return s;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: e
function {
  return ("go" === e.id);
}

// fn c  args=1 vars=2 closure=1 cpool=1 bc=246B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: i
// locals: e
// closure: e
function {
  if (!(e.isVersionAtLeast(139))) goto L_5b;
  let e;
  e = i.reservesLegalFooterSpace;
  if (!((undefined !== e))) goto L_5b;
  return e;
  if (!(("plus" === i.selectedPlanId))) goto L_f5;
  if (!(i.hasPlanTabs)) goto L_f5;
  return i.plans.some(function <atom:0>);
}

// fn p  args=1 vars=1 closure=1 cpool=0 bc=88B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: i
// closure: e
function {
  if (!(e.isVersionAtLeast(116))) goto L_57;
  if (!((i.refreshedPlusFeatureTitles == null))) goto L_53;
  i.refreshedPlusFeatureTitles;
  i;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>);
  return;
}

// fn l  args=0 vars=0 closure=2 cpool=0 bc=194B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// closure: i, e
function {
  if (!(i.Device.isIOS())) goto L_c1;
  if (!(!i.Device.isWeb())) goto L_c1;
  return e.isVersionAtLeast(140);
}

// fn u  args=1 vars=1 closure=1 cpool=0 bc=78B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: i
// closure: e
function {
  if (!(e.isVersionAtLeast(204))) goto L_4d;
  return i.legalMarkdown;
  return;
}

// fn d  args=1 vars=1 closure=1 cpool=0 bc=124B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: i
// closure: e
function {
  if (!(e.isVersionAtLeast(240))) goto L_7b;
  if (!((i.host.loadComparisonPlans == null))) goto L_78;
  i.host.loadComparisonPlans;
  i.host;
  goto L_7b;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=197B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: e
function {
  return {product: e.product, offeringId: e.offeringId, periodUnit: e.periodUnit, periodCount: e.periodCount, isDefaultPackage: e.isDefaultPackage};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=235B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: e
function {
  return {planId: e.planId, products: e.products.map(function <atom:0>), storeState: e.storeState, error: e.error, externalCheckoutIsLoading: e.externalCheckoutIsLoading};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=392B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: e
function {
  return {offeredPlanId: e.offeredPlanId, productId: e.productId, kind: e.kind, purchaseTitle: e.purchaseTitle, linkTitle: e.linkTitle, mastheadTitle: e.mastheadTitle, mastheadSubtitle: e.mastheadSubtitle, discountedMonthlyPrice: e.discountedMonthlyPrice, billingPeriod: e.billingPeriod, renewalText: e.renewalText};
}

// fn P  args=1 vars=3 closure=1 cpool=2 bc=675B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: i
// locals: e, r
// closure: e
function {
  if (!(e.isVersionAtLeast(240))) goto L_2a2;
  let r;
  let e;
  e = i.comparisonContext;
  if (!((undefined === e))) goto L_5e;
  return;
  r = i.comparisonCatalog;
  if (!((undefined === e.subscription))) goto L_d8;
  goto L_16d;
  // [栈深重同步 3 -> 2]
  if (!((undefined === r))) goto L_1fd;
  goto L_29c;
  // [栈深重同步 2 -> 1]
  return {context: {receiptRestriction: e.receiptRestriction, subscription: {purchaseOrigin: e.subscription.purchaseOrigin, expirationTimestamp: e.subscription.expirationTimestamp}, restrictedPlanId: e.restrictedPlanId, pendingExternalCheckoutPlanId: e.pendingExternalCheckoutPlanId, staticRejoinCheckout: e.staticRejoinCheckout}, catalog: {entries: r.entries.map(function <atom:0>), promotions: r.promotions.map(function <atom:0>)}};
  return;
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=78B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: i
// closure: e
function {
  if (!(e.isVersionAtLeast(240))) goto L_4d;
  return i.currentOfferedPlanId;
  return;
}

// fn g  args=1 vars=2 closure=1 cpool=0 bc=388B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: i
// locals: r
// closure: e
function {
  if (!(e.isVersionAtLeast(257))) goto L_183;
  let r;
  r = i.androidRefresh;
  if (!((undefined === r))) goto L_5c;
  return undefined;
  if (!(e.isVersionAtLeast(259))) goto L_102;
  return {accentTextColor: r.accentTextColor, accentIconColor: r.accentIconColor, canOpenComparePlans: (true === r.canOpenComparePlans), usesNewCopy: r.usesNewCopy, useTrialPlusCopy: r.useTrialPlusCopy, useChurnedPlusCopy: r.useChurnedPlusCopy};
  return;
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=13 bc=437B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// args: require, module, exports
// locals: e, i, r, s, t, n, o, a, c, p, l, u, d, P, f, g
function {
  r = function r;
  t = function t;
  n = function n;
  o = function o;
  a = function a;
  c = function c;
  p = function p;
  l = function l;
  u = function u;
  d = function d;
  P = function P;
  f = function f;
  g = function g;
  let s;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.subscriptionPricingOpenComparePlans = undefined;
  exports.subscriptionPricingEligibleOffers = undefined;
  exports.subscriptionPricingSignals = undefined;
  exports.subscriptionPricingPlatformServices = undefined;
  exports.subscriptionPricingInactivePlanLabelColor = undefined;
  exports.subscriptionPricingReservesLegalFooterSpace = undefined;
  exports.subscriptionPricingRefreshedPlusFeatureTitles = undefined;
  exports.supportsSubscriptionPricingNativePlanButton = undefined;
  exports.subscriptionPricingLegalMarkdown = undefined;
  exports.loadSubscriptionPricingComparisonPlans = undefined;
  exports.subscriptionPricingComparisonFacts = undefined;
  exports.subscriptionPricingCurrentOfferedPlanId = undefined;
  exports.subscriptionPricingAndroidRefresh = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  i = require("valdi_core/src/Device");
  exports.subscriptionPricingOpenComparePlans = r;
  s = "#8E8E93";
  exports.subscriptionPricingEligibleOffers = t;
  exports.subscriptionPricingSignals = n;
  exports.subscriptionPricingPlatformServices = o;
  exports.subscriptionPricingInactivePlanLabelColor = a;
  exports.subscriptionPricingReservesLegalFooterSpace = c;
  exports.subscriptionPricingRefreshedPlusFeatureTitles = p;
  exports.supportsSubscriptionPricingNativePlanButton = l;
  exports.subscriptionPricingLegalMarkdown = u;
  exports.loadSubscriptionPricingComparisonPlans = d;
  exports.subscriptionPricingComparisonFacts = P;
  exports.subscriptionPricingCurrentOfferedPlanId = f;
  exports.subscriptionPricingAndroidRefresh = g;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingCapabilities
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
