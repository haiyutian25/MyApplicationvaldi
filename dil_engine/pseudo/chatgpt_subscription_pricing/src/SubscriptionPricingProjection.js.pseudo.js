// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: e
// closure: i
function {
  if (!(i.isLoggingEnabled)) goto L_57;
  console.warn("[SubscriptionPricing] Native account-state observation failed:", e);
  return;
}

// fn P  args=2 vars=2 closure=2 cpool=1 bc=162B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: r, t
// closure: i, e
function {
  return e.convertBridgeObservableToObservable(r.stateProvider.observeState()).subscribe({next: t, error: function <atom:0>});   // tail call
}

// fn p  args=3 vars=3 closure=2 cpool=0 bc=76B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i, e, r
// closure: S, n
function {
  return S(i, e, n.SubscriptionPricingFeatureProfile.IOS, r);   // tail call
}

// fn b  args=3 vars=3 closure=2 cpool=0 bc=76B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i, e, r
// closure: S, n
function {
  return S(i, e, n.SubscriptionPricingFeatureProfile.IOSWork, r);   // tail call
}

// fn g  args=2 vars=2 closure=2 cpool=0 bc=77B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i, e
// closure: S, n
function {
  return S(i, e, n.SubscriptionPricingFeatureProfile.Android, false);   // tail call
}

// fn v  args=3 vars=4 closure=2 cpool=0 bc=54B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i, e, r
// locals: o
// closure: g, t
function {
  let o;
  o = g(i, e);
  return t.resolvePricingOverrides(o, i, r, false);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i
// closure: e
function {
  return (i.id === e.selectedPlanId);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i
// closure: e
function {
  return (i.id === e.selectedProductId);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=124B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i
// closure: c, A, C
function {
  if (!((i.kind === c.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_7b;
  if (!(A)) goto L_7a;
  return !(i === C[0]);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=181B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i
// closure: c
function {
  if (!((i.kind === c.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_b4;
  if ((i.isEnabled)) goto L_b4;
  return i.isLoading;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=147B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i
// closure: c, d
function {
  if (!((i.kind === c.SubscriptionPricingActionKind.OpenLegal))) goto L_92;
  return (i.id === d);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i
function {
  return (i.text.length > 0);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i
function {
  return i.text;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: e
// closure: i
function {
  return (e.id === i.selectedProductId);
}

// fn <atom:0>  args=1 vars=1 closure=7 cpool=1 bc=173B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i
// closure: h, g, v, e, j, t, P
function {
  if (!((g == null))) goto L_2f;
  g;
  goto L_50;
  if (!((i.id === undefined.id))) goto L_58;
  goto L_a0;
  // [栈深重同步 3 -> 2]
  return h(i, i.approvedProducts.find(function <atom:0>), e, j, t, P);   // tail call
}

// fn S  args=4 vars=26 closure=14 cpool=10 bc=4669B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: e, t, P, p
// locals: b, g, v, S, f, m, T, A, C, L, F, N, O, E, j, q, y, w, M, e#1, r, t#1
// closure: c, d, h, n, k, x, s, o, u, I, r, a, l, i
function {
  let M;
  let w;
  let y;
  let q;
  let j;
  let E;
  let O;
  let N;
  let F;
  let L;
  let C;
  let A;
  let T;
  let m;
  let f;
  let S;
  let v;
  let g;
  let b;
  b = (P === n.SubscriptionPricingFeatureProfile.Android);
  if (!((e.plans.find(function <atom:0>) == null))) goto L_f2;
  e.plans.find(function <atom:0>);
  g = e.plans[0];
  if (!((g == null))) goto L_fe;
  g;
  goto L_145;
  v = undefined.approvedProducts.find(function <atom:0>);
  S = k(g, v, e);
  f = x(g, e);
  if (!(e.checkout.canShowExternalPurchaseLink)) goto L_234;
  if (!((undefined !== e.checkout.webCheckout))) goto L_234;
  m = (undefined !== e.checkout.webCheckoutPlanId);
  if (!((undefined === S))) goto L_2ba;
  if (!((undefined !== v))) goto L_2ba;
  if (!(m)) goto L_2ba;
  if (!((undefined !== e.checkout.applePurchase))) goto L_2ba;
  goto L_2ff;
  // [栈深重同步 1 -> 0]
  T = s.SubscriptionPricingNativeCheckoutTreatment.InAppPurchasePrimary;
  if (!((undefined === S))) goto L_466;
  if (!((undefined !== v))) goto L_466;
  if (!((T === s.SubscriptionPricingNativeCheckoutTreatment.InAppPurchasePrimary))) goto L_466;
  if (!((undefined !== e.checkout.webCheckout))) goto L_466;
  if (!((undefined !== e.checkout.webCheckoutPlanId))) goto L_466;
  A = t.prefersWebPurchase(e.checkout.webCheckoutPlanId);
  C = o.subscriptionPricingCheckoutActions(e, S, T, A, v, t, p);
  if (!((T === s.SubscriptionPricingNativeCheckoutTreatment.EqualHorizontal))) goto L_4ee;
  goto L_517;
  // [栈深重同步 1 -> 0]
  L = C.find(function <atom:0>);
  if (!((g == null))) goto L_529;
  g;
  goto L_54a;
  if ((("go" === undefined.id))) goto L_581;
  if (!((g == null))) goto L_55f;
  g;
  goto L_580;
  F = ("plus" === undefined.id);
  if (!(e.isProliteEnabled)) goto L_611;
  if (!((g == null))) goto L_5b9;
  g;
  goto L_5da;
  if ((("pro" === undefined.id))) goto L_611;
  if (!((g == null))) goto L_5ef;
  g;
  goto L_610;
  N = ("prolite" === undefined.id);
  if (!((P === n.SubscriptionPricingFeatureProfile.IOS))) goto L_6af;
  if (!((g == null))) goto L_68d;
  g;
  goto L_6ae;
  O = u.isSubscriptionPricingProPlan(undefined.id);
  E = C.some(function <atom:0>);
  if (!(!e.checkout.isPlatformPurchaseInProgress)) goto L_768;
  j = !e.checkout.didPurchase;
  if (!((undefined === g))) goto L_774;
  goto L_77c;
  // [栈深重同步 1 -> 0]
  q = I(g, e);
  y = undefined;
  w = undefined;
  M = e.legalText;
  if (!(b)) goto L_834;
  if (!(r.isVersionAtLeast(39))) goto L_834;
  if (!((S == null))) goto L_7e4;
  S;
  goto L_805;
  y = undefined.mastheadSubtitle;
  undefined.mastheadSubtitle;
  w = e.legalRichText;
  e.legalRichText;
  goto L_b3e;
  if (!(!b)) goto L_b3e;
  if (!((g == null))) goto L_84d;
  g;
  goto L_86e;
  if (!(("go" === undefined.id))) goto L_b3e;
  let e#1;
  e#1 = C.find(function <atom:0>);
  if (!((undefined !== e#1))) goto L_b3e;
  let t#1;
  let r;
  r = a.default.subscriptionPricingGoAdsDisclosure().replace(new RegExp("[\\t ]*\\r?\\n[\\t ]*"), " ");
  t#1 = l.exec(r);
  if (!((null !== t#1))) goto L_ae7;
  w = {runs: [{text: r.slice(0, t#1.index)}, {text: t#1[1], legalDocumentId: e#1.id}, {text: r.slice((t#1.index + t#1[0].length))}].filter(function <atom:0>)};
  {runs: [{text: r.slice(0, t#1.index)}, {text: t#1[1], legalDocumentId: e#1.id}, {text: r.slice((t#1.index + t#1[0].length))}].filter(function <atom:0>)};
  M = w.runs.map(function <atom:0>).join("");
  goto L_b3d;
  // [栈深重同步 1 -> 0]
  if (!(i.isLoggingEnabled)) goto L_b3d;
  console.warn("[SubscriptionPricing] Go ads disclosure is missing its localized legal link.");
  if (!(O)) goto L_b8f;
  goto L_c23;
  // [栈深重同步 2 -> 1]
  if (!((f == null))) goto L_b9a;
  f;
  goto L_bbb;
  if (!((undefined.title == null))) goto L_c23;
  undefined.title;
  if (!((S == null))) goto L_bcb;
  S;
  goto L_bec;
  if (!((undefined.mastheadTitle == null))) goto L_c23;
  undefined.mastheadTitle;
  if (!((g == null))) goto L_bfc;
  g;
  goto L_c1d;
  if (!((undefined.defaultTitle == null))) goto L_c23;
  undefined.defaultTitle;
  if (!(O)) goto L_c87;
  if (!((g == null))) goto L_c5c;
  g;
  goto L_c7e;
  if (!((undefined.approvedProducts.length == null))) goto L_c84;
  undefined.approvedProducts.length;
  goto L_cc3;
  // [栈深重同步 2 -> 1]
  if (!((f == null))) goto L_c92;
  f;
  goto L_cb3;
  if (!((undefined.subtitle == null))) goto L_cc3;
  undefined.subtitle;
  if (!((y == null))) goto L_cc3;
  y;
  if (!(O)) goto L_d18;
  goto L_dad;
  // [栈深重同步 2 -> 1]
  if (!(F)) goto L_d62;
  goto L_dad;
  // [栈深重同步 2 -> 1]
  if (!(N)) goto L_dac;
  goto L_dad;
  // [栈深重同步 2 -> 1]
  if (!(F)) goto L_dfc;
  goto L_dfd;
  // [栈深重同步 2 -> 1]
  if (!((v == null))) goto L_e81;
  v;
  goto L_ea2;
  if (!((L == null))) goto L_eeb;
  L;
  goto L_f0c;
  if (!((S == null))) goto L_f1c;
  S;
  goto L_f3d;
  if (!((undefined.renewalText == null))) goto L_f6e;
  undefined.renewalText;
  if (!((v == null))) goto L_f4d;
  v;
  goto L_f6e;
  if (!((e.errors.alert == null))) goto L_1059;
  e.errors.alert;
  if (!((e.errors.disabledPurchase == null))) goto L_1059;
  e.errors.disabledPurchase;
  if (!((e.checkout.storeState === s.SubscriptionPricingNativeStoreState.Loading))) goto L_10ef;
  if ((e.checkout.isPlatformPurchaseInProgress)) goto L_11c8;
  if ((e.checkout.isEmailVerificationInProgress)) goto L_11c8;
  return {title: "", subtitle: q, featuresTitle: undefined, comparisonPlanTitle: undefined, plans: e.plans.map(function <atom:0>), selectedPlanId: e.selectedPlanId, selectedPackageId: undefined.id, actions: C, checkoutLayout: o.subscriptionPricingCheckoutLayout(e, S, T), externalCheckoutIconActionId: undefined.id, footerText: undefined.renewalText, disclosureText: M, disclosureRichText: w, errorMessage: e.errors.store, isLoading: !E, isPurchasing: e.checkout.didPurchase, isDarkMode: e.isDarkMode, closeAccessibilityLabel: e.strings.closeAccessibilityLabel};
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=8B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: e
// closure: f, i, t, c
function {
  return f(e, i, t, c);   // tail call
}

// fn h  args=6 vars=10 closure=5 cpool=1 bc=562B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i, e, r, t, o, c
// locals: s, a, u, d
// closure: f, k, x, I, n
function {
  let d;
  let u;
  let a;
  let s;
  s = k(i, e, r);
  a = x(i, r);
  if (!((e == null))) goto L_20;
  e;
  goto L_41;
  u = undefined.monthlyPrice;
  if (!((s == null))) goto L_4d;
  s;
  goto L_6e;
  d = undefined.discountedMonthlyPrice;
  if (!((a == null))) goto L_c9;
  a;
  goto L_ea;
  if (!((undefined.subtitle == null))) goto L_f3;
  undefined.subtitle;
  if (!((d == null))) goto L_109;
  d;
  if (!((u == null))) goto L_109;
  u;
  if (!((undefined === d))) goto L_118;
  goto L_11b;
  // [栈深重同步 2 -> 1]
  if (!((undefined === u))) goto L_12a;
  goto L_17d;
  // [栈深重同步 2 -> 1]
  if (!((s == null))) goto L_135;
  s;
  goto L_156;
  if (!((undefined.billingPeriod == null))) goto L_17d;
  undefined.billingPeriod;
  return {id: i.id, title: i.name, subtitle: I(i, r), price: "", originalPrice: u, billingPeriod: r.defaultBillingPeriod, features: n.subscriptionPricingFeaturesForPlan(i, e, r, o, c), packages: i.approvedProducts.map(function <atom:0>), isEnabled: t, isCurrent: i.isCurrent};
}

// fn f  args=4 vars=5 closure=3 cpool=0 bc=678B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i, e, t, o
// locals: c
// closure: n, u, r
function {
  let c;
  if (!((i.usageMultiplierLabel == null))) goto L_4c;
  i.usageMultiplierLabel;
  c = e.name;
  if (!((o === n.SubscriptionPricingFeatureProfile.IOS))) goto L_130;
  if (!(u.isSubscriptionPricingProPlan(e.id))) goto L_130;
  c = u.subscriptionPricingProTierDetail(i.offeredPlanId);
  goto L_220;
  // [栈深重同步 1 -> 0]
  if (!((o === n.SubscriptionPricingFeatureProfile.Android))) goto L_220;
  if (!(r.isVersionAtLeast(39))) goto L_220;
  if (!((true === i.isCurrent))) goto L_220;
  if (!((undefined !== i.currentPlanLabel))) goto L_220;
  c = i.currentPlanLabel;
  i.currentPlanLabel;
  return {id: i.id, title: c, price: i.billingCyclePrice, billingPeriod: i.billingPeriod, isEnabled: t};
}

// fn k  args=3 vars=4 closure=0 cpool=0 bc=334B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i, e, r
// locals: t
function {
  let t;
  t = r.promotion;
  if (!((undefined !== t))) goto L_14d;
  if (!((undefined !== i))) goto L_14d;
  if (!((t.planId === i.id))) goto L_14d;
  if (!((r.selectedPlanId === i.id))) goto L_14d;
  if (((undefined === t.productId))) goto L_147;
  if (!((e == null))) goto L_125;
  e;
  goto L_146;
  if (!((t.productId === undefined.id))) goto L_14d;
  return t;
  return;
}

// fn x  args=2 vars=3 closure=0 cpool=0 bc=249B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i, e
// locals: r
function {
  let r;
  r = e.personalization;
  if (!((i == null))) goto L_34;
  i;
  goto L_55;
  if (!(("plus" === undefined.id))) goto L_f7;
  if (!((e.selectedPlanId === i.id))) goto L_f7;
  if (!((r == null))) goto L_ad;
  r;
  goto L_ce;
  if (!((undefined.planId === i.id))) goto L_f7;
  return r;
  return undefined;
}

// fn I  args=2 vars=2 closure=0 cpool=0 bc=106B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: i, e
function {
  if (!(e.hasPlanTabs)) goto L_47;
  return i.tabbedSubtitle;
  return i.defaultSubtitle;
}

// fn <atom:0>  args=3 vars=26 closure=0 cpool=13 bc=388B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// args: require, module, exports
// locals: i, e, r, t, o, n, c, s, a, u, d, l, P, p, b, g, v, S, h, f, k, x, I
function {
  P = function P;
  p = function p;
  b = function b;
  g = function g;
  v = function v;
  S = function S;
  h = function h;
  f = function f;
  k = function k;
  x = function x;
  I = function I;
  let l;
  let d;
  let u;
  let a;
  let s;
  let c;
  let n;
  let o;
  let t;
  let r;
  let e;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.subscribeToSubscriptionPricingState = undefined;
  exports.projectSubscriptionPricingNativeState = undefined;
  exports.projectWorkSubscriptionPricingNativeState = undefined;
  exports.projectAndroidSubscriptionPricingNativeState = undefined;
  exports.projectAndroidSubscriptionPricingNativeStateWithPresentationExperiments = undefined;
  i = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("bridge_observables/src/utils/convertBridgeObservableToObservable");
  r = require("valdi_core/src/CompilerIntrinsics");
  t = require("./SubscriptionPricingOverrides");
  o = require("./SubscriptionPricingCheckoutProjection");
  n = require("./SubscriptionPricingFeatureProjection");
  c = require("./SubscriptionPricingModels");
  s = require("./SubscriptionPricingNativeState");
  a = require("./Strings");
  u = require("./SubscriptionPricingProPresentation");
  d = "legal_disclosure";
  l = new RegExp("\\[([^\\]]+)\\]\\(legal_disclosure\\)");
  exports.subscribeToSubscriptionPricingState = P;
  exports.projectSubscriptionPricingNativeState = p;
  exports.projectWorkSubscriptionPricingNativeState = b;
  exports.projectAndroidSubscriptionPricingNativeState = g;
  exports.projectAndroidSubscriptionPricingNativeStateWithPresentationExperiments = v;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingProjection
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
