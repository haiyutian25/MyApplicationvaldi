// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.experiments = e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e
// closure: c
function {
  return (e.id === c.selectedPlanId);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e
// closure: c
function {
  return (e.id === c.selectedProductId);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e
function {
  return (e.text.length > 0);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e
function {
  return e.text;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=71B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e
// closure: c
function {
  return c.legalDocumentIds.includes(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=236B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e
// closure: u, d
function {
  null;
  u(e.id);
  return {id: e.id, approvedProducts: e.approvedProducts.map(d), selectedProductId: e.selectedProductId, isCurrent: e.isCurrent};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e
function {
  return ("pro" === e.id);
}

// fn <atom:0>  args=1 vars=17 closure=17 cpool=7 bc=4655B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: c
// locals: m, C, S, I, y, D, v, M, x, k, T, i, s, R, e, this
// closure: u, d, s, P, h, f, n, o, l, a, e, r, i, p, b, g, t
function {
  this = this;
  let R;
  let T;
  let k;
  let x;
  let M;
  let v;
  let D;
  let y;
  let I;
  let S;
  let C;
  let m;
  m = s.subscriptionPricingSignals(c);
  C = s.subscriptionPricingAndroidRefresh(c);
  if (!((m == null))) goto L_81;
  m;
  goto L_a2;
  if (!((undefined === undefined.entryPointId))) goto L_c9;
  goto L_121;
  // [栈深重同步 1 -> 0]
  if ((("image_gallery_toast_banner" === m.entryPointId))) goto L_121;
  S = ("image_gen_ghostrider_plus_branding" === m.entryPointId);
  I = c.plans.find(function <atom:0>);
  if (!((I == null))) goto L_176;
  I;
  goto L_1bd;
  y = undefined.approvedProducts.find(function <atom:0>);
  if (!((c.loadError == null))) goto L_208;
  c.loadError;
  D = c.purchaseError;
  if (!((D == null))) goto L_271;
  D;
  if (!((undefined === C))) goto L_245;
  goto L_271;
  // [栈深重同步 2 -> 1]
  v = {title: h(c, y, C.useChurnedPlusCopy)};
  M = f(S);
  x = [];
  k = undefined;
  T = undefined;
  if (!((undefined === C))) goto L_774;
  if (!((undefined !== y))) goto L_774;
  if (!(c.legalDocumentIds.includes(n))) goto L_3c2;
  if (!(this.showsPurchaseDisclosure())) goto L_3c2;
  x.push({id: n, title: o.default.subscriptionsPurchaseDisclosureLink(), isEnabled: !c.isPurchaseInProgress});
  if (!((I == null))) goto L_3d3;
  I;
  goto L_3f4;
  if (!(("go" === undefined.id))) goto L_6f1;
  if (!(c.legalDocumentIds.includes(l))) goto L_6f1;
  let s;
  let i;
  i = o.default.subscriptionsGoAdsDisclaimer();
  s = a.exec(i);
  if (!((null !== s))) goto L_697;
  k = {runs: [{text: i.slice(0, s.index)}, {text: s[1], legalDocumentId: l}, {text: i.slice((s.index + s[0].length))}].filter(function <atom:0>)};
  {runs: [{text: i.slice(0, s.index)}, {text: s[1], legalDocumentId: l}, {text: i.slice((s.index + s[0].length))}].filter(function <atom:0>)};
  T = k.runs.map(function <atom:0>).join("");
  k.runs.map(function <atom:0>).join("");
  goto L_6ed;
  // [栈深重同步 1 -> 0]
  if (!(e.isLoggingEnabled)) goto L_6ed;
  console.warn("[AndroidPricing] Go disclosure is missing its legal link.");
  goto L_774;
  if (!((I == null))) goto L_701;
  I;
  goto L_722;
  if (!(("pro" === undefined.id))) goto L_773;
  T = o.default.subscriptionsProUsageDisclaimerPlain();
  o.default.subscriptionsProUsageDisclaimerPlain();
  if (!((undefined !== C))) goto L_7f1;
  if (!(r.KoreaLegalDocumentIds.every(function <atom:0>))) goto L_7f1;
  goto L_7f2;
  // [栈深重同步 1 -> 0]
  R = undefined;
  let e;
  if (!((R == null))) goto L_802;
  R;
  goto L_823;
  if (!((undefined.runs == null))) goto L_82b;
  undefined.runs;
  for (const e of []) {
    if (!((undefined !== e.legalDocumentId))) goto L_900;
    x.push({id: e.legalDocumentId, title: e.text, isEnabled: !c.isPurchaseInProgress});
  }
  if (!((undefined !== R))) goto L_a4d;
  if (!(c.legalDocumentIds.includes(r.KoreaCompanyInformationId))) goto L_a4d;
  x.push({id: r.KoreaCompanyInformationId, title: o.default.subscriptionsKoreaCompanyInformation(), isEnabled: !c.isPurchaseInProgress});
  if (((undefined === C))) goto L_a6d;
  if (!((undefined === y))) goto L_a73;
  goto L_b32;
  // [栈深重同步 2 -> 1]
  if (!((y.billingPeriod === i.PricingBillingPeriod.Monthly))) goto L_b29;
  goto L_b32;
  // [栈深重同步 2 -> 1]
  if (!((m == null))) goto L_b42;
  m;
  goto L_b63;
  if (!((c.purchase == null))) goto L_edf;
  c.purchase;
  goto L_f00;
  if (!(S)) goto L_fd0;
  if (!(("plus" === c.selectedPlanId))) goto L_fd0;
  goto L_fd1;
  // [栈深重同步 2 -> 1]
  if (!((undefined === c.promotion))) goto L_1000;
  goto L_1128;
  // [栈深重同步 2 -> 1]
  return {androidRefresh: C, androidKoreaDisclosure: R, androidRefreshRenewalText: p(y, false), androidIsNoPaymentTrial: undefined.isNoPaymentTrial, plans: c.plans.map(function <atom:0>), selectedPlanId: c.selectedPlanId, selectedProductId: c.selectedProductId, completedPurchaseRequestId: c.completedPurchaseRequestId, strings: {closeAccessibilityLabel: o.default.designUpButton(), comparisonFeaturesTitle: o.default.subscriptionsPremiumComparisonHeader(), comparisonFreeTitle: o.default.subscriptionsPremiumComparisonFreeHeader(), proFeaturesTitle: o.default.subscriptionsProFeaturesHeader(), actionLoadingTitle: o.default.subscriptionsLoading(), restoreSubscription: {title: o.default.subscriptionsRestoreSubscriptionCta()}, featureCopy: M, checkout: b(v.title), androidPresentationCopy: g(c, y, D, S)}, checkout: {storeState: c.storeState, applePurchase: c.purchase, legalDocuments: x, canShowExternalPurchaseLink: false, isExternalCheckoutDisabled: true, isPrimaryPurchaseDisabled: (true !== undefined.isEnabled), isPlatformPurchaseInProgress: c.isPurchaseInProgress, isExternalCheckoutInProgress: false, isEmailVerificationInProgress: false, didPurchase: false}, personalization: undefined, promotion: {planId: c.promotion.planId, productId: c.promotion.productId, mastheadTitle: c.promotion.headline, mastheadSubtitle: c.promotion.summary, requiresExternalCheckout: false}, legalText: T, legalRichText: k, errors: {}, isDarkMode: c.isDarkMode, isProliteEnabled: c.plans.some(function <atom:0>), hasPlanTabs: (c.plans.length > 1), defaultBillingPeriod: o.default.subscriptionsProPackageDurationMonth()};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=185B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// locals: this
function {
  this = this;
  if (!((undefined === this.purchaseDisclosureEnabled))) goto L_95;
  if (!((this.experiments == null))) goto L_55;
  this.experiments;
  goto L_84;
  if (!((undefined.isFeatureFlagEnabled({flagName: "chatgpt-mobile-kr-pricing-page-disclaimer"}) == null))) goto L_8b;
  undefined.isFeatureFlagEnabled({flagName: "chatgpt-mobile-kr-pricing-page-disclaimer"});
  this.purchaseDisclosureEnabled = false;
  false;
  return this.purchaseDisclosureEnabled;
}

// fn u  args=1 vars=1 closure=1 cpool=0 bc=984B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e
// closure: o
function {
  if (!((e === "go"))) goto L_143;
  return {name: o.default.subscriptionsPlanNameGo(), defaultTitle: o.default.subscriptionsGoTitle(), defaultSubtitle: o.default.subscriptionsGoSubtitle(), tabbedSubtitle: o.default.subscriptionsGoSubtitle()};
  if (!((e === "plus"))) goto L_285;
  return {name: o.default.subscriptionsPlanNamePlus(), defaultTitle: o.default.subscriptionsPlusTitle(), defaultSubtitle: o.default.subscriptionsPlusSubtitle(), tabbedSubtitle: o.default.subscriptionsPlusSubtitle()};
  if (!((e === "pro"))) goto L_3c7;
  return {name: o.default.subscriptionsPlanNamePro(), defaultTitle: o.default.subscriptionsProUpsellBrandTitle(), defaultSubtitle: o.default.subscriptionsProUpsellSubtitleRefreshed(), tabbedSubtitle: o.default.subscriptionsProUpsellSubtitleRefreshed()};
  throw new Error(("Unsupported Android pricing plan: " + e));
}

// fn d  args=1 vars=2 closure=3 cpool=0 bc=644B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e
// locals: i
// closure: p, c, o
function {
  let i;
  i = p(e, false);
  if (!((undefined === e.usageMultiplier))) goto L_108;
  goto L_172;
  // [栈深重同步 2 -> 1]
  if (!((undefined === e.usageMultiplier))) goto L_1a0;
  goto L_20a;
  // [栈深重同步 2 -> 1]
  return {id: e.id, offeredPlanId: e.offeredPlanId, billingCyclePrice: e.billingCyclePrice, monthlyPrice: e.monthlyPrice, billingPeriod: c(e.billingPeriod), renewalText: i, renewalTextWithoutPrice: i, usageMultiplierLabel: o.default.subscriptionsProUsageMultiplier(e.usageMultiplier), featureUsageLabel: o.default.subscriptionsProUsageMoreThanPlus(e.usageMultiplier), isCurrent: e.isCurrent, currentPlanLabel: o.default.subscriptionsChoosePlanScreenCurrentPlanText()};
}

// fn c  args=1 vars=1 closure=2 cpool=0 bc=656B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e
// closure: i, o
function {
  if (!((e === i.PricingBillingPeriod.Daily))) goto L_92;
  return o.default.subscriptionsProPackageDurationDay();   // tail call
  if (!((e === i.PricingBillingPeriod.Weekly))) goto L_123;
  return o.default.subscriptionsProPackageDurationWeek();   // tail call
  if (!((e === i.PricingBillingPeriod.Monthly))) goto L_1b4;
  return o.default.subscriptionsProPackageDurationMonth();   // tail call
  if (!((e === i.PricingBillingPeriod.Annual))) goto L_245;
  return o.default.subscriptionsProPackageDurationYear();   // tail call
  if (!((e === i.PricingBillingPeriod.Lifetime))) goto L_28f;
  e;
  return;
  // [栈深重同步 0 -> 1]
  return;
}

// fn p  args=2 vars=3 closure=2 cpool=0 bc=1323B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e, s
// locals: r
// closure: o, i
function {
  let r;
  if (!((undefined !== e.introductoryPrice))) goto L_71;
  return o.default.subscriptionsRenewIntroNoPrice();   // tail call
  r = e.billingCyclePrice;
  if (!((e.billingPeriod === i.PricingBillingPeriod.Daily))) goto L_19a;
  if (!(s)) goto L_151;
  return o.default.subscriptionsAmountPerDay(r);
  return o.default.subscriptionsRenewDailyNoPrice();
  if (!((e.billingPeriod === i.PricingBillingPeriod.Weekly))) goto L_27e;
  if (!(s)) goto L_235;
  return o.default.subscriptionsAmountPerWeek(r);
  return o.default.subscriptionsRenewWeeklyNoPrice();
  if (!((e.billingPeriod === i.PricingBillingPeriod.Monthly))) goto L_362;
  if (!(s)) goto L_319;
  return o.default.subscriptionsAmountPerMonth(r);
  return o.default.subscriptionsRenewMonthlyNoPrice();
  if (!((e.billingPeriod === i.PricingBillingPeriod.Annual))) goto L_446;
  if (!(s)) goto L_3fd;
  return o.default.subscriptionsAmountPerYear(r);
  return o.default.subscriptionsRenewYearlyNoPrice();
  if (!((e.billingPeriod === i.PricingBillingPeriod.Lifetime))) goto L_52a;
  if (!(s)) goto L_4e1;
  return o.default.subscriptionsAmountPerLifetime(r);
  return o.default.subscriptionsLifetimePurchaseNoPrice();
  e.billingPeriod;
  return;
}

// fn P  args=3 vars=3 closure=1 cpool=0 bc=435B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e, i, s
// closure: o
function {
  if (!((undefined !== i))) goto L_c8;
  if ((!s)) goto L_32;
  if (!((undefined !== i.introductoryPrice))) goto L_c8;
  if (!((i.introductoryPrice == null))) goto L_c5;
  i.introductoryPrice;
  return o.default.subscriptionsSubscribeUpgradeForPriceCta(i.billingCyclePrice);   // tail call
  if (!((e === "go"))) goto L_11a;
  return o.default.subscriptionsSubscribeGetGoCta();   // tail call
  if (!((e === "plus"))) goto L_16b;
  return o.default.subscriptionsSubscribeCta();   // tail call
  return o.default.subscriptionsSubscribeUpgradeCta();   // tail call
}

// fn b  args=1 vars=3 closure=0 cpool=0 bc=96B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e
// locals: i, s
function {
  let s;
  let i;
  i = {title: e};
  s = {title: ""};
  return {purchase: i, applePurchase: i, skipOffer: i, subscribe: i, payWithApple: i, webPurchase: s, webLink: s, webCheckout: s, upgradeOnWeb: s};
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=1762B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e
// closure: o
function {
  if (!(e)) goto L_9b;
  goto L_e3;
  // [栈深重同步 2 -> 1]
  if (!(e)) goto L_303;
  goto L_34b;
  // [栈深重同步 2 -> 1]
  return {basicModels: o.default.subscriptionsGoSimpleDescriptionOne(), coreModel: o.default.subscriptionsPremiumSimpleDescriptionOne(), moreMessages: o.default.subscriptionsGoSimpleDescriptionTwo(), moreUploads: o.default.subscriptionsGoSimpleDescriptionThree(), goImageCreation: o.default.subscriptionsGoSimpleDescriptionFour(), longerMemory: o.default.subscriptionsGoSimpleDescriptionSix(), smarterModels: o.default.subscriptionsPremiumSimpleDescriptionTwo(), moreMessagesAndUploads: o.default.subscriptionsPremiumSimpleDescriptionThree(), plusImageCreation: o.default.subscriptionsPlusAdvancedImageCreation(), moreMemory: o.default.subscriptionsPremiumSimpleDescriptionSeven(), agentsAndDeepResearch: o.default.subscriptionsPremiumSimpleDescriptionSix(), earlyAccess: o.default.subscriptionsPremiumSimpleDescriptionFive(), proFrontierModel: o.default.subscriptionsProFeatureFrontierModel(), proCodex: o.default.subscriptionsProFeatureCodexAgent(), proDeepResearch: o.default.subscriptionsChoosePlanFeatureDeepResearch(), proUnlimitedModel: o.default.subscriptionsProFeatureUnlimitedCoreModel(), proMaximumMemory: o.default.subscriptionsProFeatureMaximumMemory(), advancedImageQualityWithThinking: o.default.subscriptionsPlusAdvancedImageCreationWithThinking(), multiImageOutput: o.default.subscriptionsPlusMultiImageOutputs(), noWatermarks: o.default.subscriptionsPlusSaveAndShareWithNoLogo(), noAds: "", advancedChatIntelligence: "", expandedCodexTokenUsage: "", advancedCodingModels: "", expandedDataAnalysisTools: "", moreParallelTasks: "", advancedIntelligence: "", connectToBankAccounts: "", spendingBreakdowns: "", billPayReminders: "", subscriptionManagement: ""};
}

// fn g  args=4 vars=5 closure=4 cpool=0 bc=1847B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e, i, s, r
// locals: t
// closure: o, P, p, m
function {
  let t;
  if (!(r)) goto L_138;
  goto L_180;
  // [栈深重同步 2 -> 1]
  if (!((s == null))) goto L_24d;
  s;
  if (!((undefined === i))) goto L_25f;
  goto L_264;
  // [栈深重同步 2 -> 1]
  t = {title: o.default.subscriptionsWorkPricingPlusTitle(), subtitle: o.default.subscriptionsWorkPricingPlusSubtitle(), closeAccessibilityLabel: o.default.contentDescriptionClose(), coreModel: o.default.subscriptionsWorkPricingCoreModel(), smarterModels: o.default.subscriptionsChoosePlanFeatureAdvancedModels(), moreMemory: o.default.subscriptionsChoosePlanFeatureExpandedMemory(), purchase: {title: P(e.selectedPlanId, i, true)}, renewalText: p(i, true), accentForegroundColor: m(e.accentPreference, e.isDarkMode)};
  if (!((undefined !== i))) goto L_728;
  if (!(("plus" === e.selectedPlanId))) goto L_728;
  if (!((undefined === s))) goto L_728;
  if (!((i.introductoryPrice == null))) goto L_71e;
  i.introductoryPrice;
  goto L_729;
  // [栈深重同步 2 -> 1]
  return {refreshedPlusUnlimitedTextChat: o.default.subscriptionsPlusRefreshedUnlimitedTextChat(), refreshedPlusAdvancedModels: o.default.subscriptionsChoosePlanFeatureAdvancedModels(), refreshedPlusWorkAgent: o.default.subscriptionsPlusRefreshedWorkAgent(), refreshedPlusCodexAgent: o.default.subscriptionsPlusRefreshedCodexAgent(), refreshedPlusFileStorage: o.default.subscriptionsPlusRefreshedFileStorage(), refreshedPlusImageCreation: o.default.subscriptionsPlusRefreshedImageCreation(), refreshedPlusEmailCalendarConnections: o.default.subscriptionsPlusRefreshedEmailCalendarConnections(), refreshedGoUnlimitedTextChat: o.default.subscriptionsGoRefreshedUnlimitedTextChat(), refreshedGoMessagesWithTools: o.default.subscriptionsGoRefreshedMessagesWithTools(), refreshedGoFileStorage: o.default.subscriptionsGoRefreshedFileStorage(), refreshedGoVoiceChats: o.default.subscriptionsGoRefreshedVoiceChats(), plusRejoinSubtitle: o.default.subscriptionsPlusRejoinSubtitle(), plusRejoinPurchase: undefined, work: t};
}

// fn m  args=2 vars=2 closure=0 cpool=0 bc=106B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e, i
function {
  if (!((e === "black"))) goto L_19;
  if (!(i)) goto L_13;
  return "#FFFFFF";
  return "#000000";
  if (!((e === "green"))) goto L_28;
  return "#53B559";
  if (!((e === "yellow"))) goto L_37;
  return "#F6C543";
  if (!((e === "pink"))) goto L_46;
  return "#F077AF";
  if (!((e === "orange"))) goto L_55;
  return "#EE7C37";
  if (!((e === "purple"))) goto L_64;
  return "#8952EE";
  return "#3A83F7";
}

// fn h  args=3 vars=3 closure=2 cpool=0 bc=566B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: e, i, s
// closure: t, o
function {
  if (!((undefined === i))) goto L_104;
  if (!((e.storeState === t.SubscriptionPricingNativeStoreState.Loading))) goto L_bb;
  return o.default.subscriptionsLoading();
  return o.default.subscriptionsErrorGenericUnavailable();
  if (!(s)) goto L_17a;
  if (!(("plus" === e.selectedPlanId))) goto L_17a;
  return o.default.subscriptionsRefreshRejoinPlusCta();
  if (!(("go" === e.selectedPlanId))) goto L_1ed;
  return o.default.subscriptionsSubscribeGetGoCta();
  return o.default.subscriptionsSubscribeCta();
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=15 bc=300B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// args: require, module, exports
// locals: e, i, s, r, t, o, n, l, a, AndroidSubscriptionPricingPresentation, <class_fields_init>, AndroidSubscriptionPricingPresentation#1, u, d, c, p, P, b, f, g, m, h
function {
  u = function u;
  d = function d;
  c = function c;
  p = function p;
  P = function P;
  b = function b;
  f = function f;
  g = function g;
  m = function m;
  h = function h;
  let AndroidSubscriptionPricingPresentation#1;
  let a;
  let l;
  let n;
  let o;
  let t;
  let r;
  let s;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AndroidSubscriptionPricingPresentation = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("./PricingHost");
  s = require("./SubscriptionPricingCapabilities");
  r = require("./AndroidPricingKoreaDisclosure");
  t = require("./SubscriptionPricingNativeState");
  o = require("./Strings");
  n = "purchase-disclosure";
  l = "go-ads-learn-more";
  a = new RegExp("\\[([^\\]]+)\\]\\(legal_disclosure\\)");
  let AndroidSubscriptionPricingPresentation;
  let <class_fields_init>;
  class AndroidSubscriptionPricingPresentation extends undefined { ... }
  <proto:AndroidSubscriptionPricingPresentation>.project = function <atom:0>;
  <proto:AndroidSubscriptionPricingPresentation>.showsPurchaseDisclosure = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AndroidSubscriptionPricingPresentation>;
  AndroidSubscriptionPricingPresentation = function <atom:0>;
  // close_loc <class_fields_init>
  AndroidSubscriptionPricingPresentation#1 = function <atom:0>;
  exports.AndroidSubscriptionPricingPresentation = AndroidSubscriptionPricingPresentation#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/AndroidSubscriptionPricingPresentation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
