// fn <atom:0>  args=3 vars=3 closure=8 cpool=0 bc=231B file=chatgpt_subscription_pricing/src/SubscriptionPricingCheckoutProjection
// args: e, r, c
// closure: m, s, t, i, b, d, C, n
function {
  if (!((undefined !== e))) goto L_e6;
  if (!(e.isEnabled)) goto L_da;
  if (!((undefined !== b))) goto L_da;
  if ((!c)) goto L_da;
  if ((!d.isExternalCheckoutDisabled)) goto L_da;
  m.push(s(t, i.SubscriptionPricingActionKind.Purchase, e, r, C, n, C));
  return;
}

// fn <atom:0>  args=2 vars=4 closure=10 cpool=0 bc=659B file=chatgpt_subscription_pricing/src/SubscriptionPricingCheckoutProjection
// args: t, r
// locals: o, u
// closure: a, d, e, p, h, m, s, c, i, n
function {
  if (!((undefined !== t))) goto L_292;
  let u;
  let o;
  if (!((a == null))) goto L_19;
  a;
  goto L_3a;
  if (!((true === undefined.requiresExternalCheckout))) goto L_11a;
  if (!((d.storeState !== e.SubscriptionPricingNativeStoreState.Empty))) goto L_11a;
  o = (d.storeState !== e.SubscriptionPricingNativeStoreState.Disabled);
  if (!(p)) goto L_195;
  if (!((h === e.SubscriptionPricingNativeCheckoutTreatment.InAppPurchasePrimary))) goto L_195;
  if (!((undefined === a))) goto L_195;
  goto L_211;
  // [栈深重同步 1 -> 0]
  if (!(t.isEnabled)) goto L_211;
  if (!(!d.isExternalCheckoutDisabled)) goto L_211;
  if ((!o)) goto L_211;
  u = !d.isPrimaryPurchaseDisabled;
  m.push(s(c, i.SubscriptionPricingActionKind.OpenExternalCheckout, t, r, u, n, false));
  return;
}

// fn n  args=7 vars=18 closure=8 cpool=2 bc=2344B file=chatgpt_subscription_pricing/src/SubscriptionPricingCheckoutProjection
// args: n, a, h, p, b, l, P
// locals: d, k, S, g, v, C, m, E, y, L, i
// closure: s, t, i, e, c, o, r, u
function {
  let y;
  let E;
  let m;
  let C;
  let v;
  let g;
  let S;
  let k;
  let d;
  d = n.checkout;
  k = n.strings.checkout;
  S = d.applePurchase;
  if ((d.canShowExternalPurchaseLink)) goto L_d7;
  if (!(p)) goto L_d7;
  g = (undefined === a);
  if (!((undefined !== d.webCheckoutPlanId))) goto L_12b;
  if (!(g)) goto L_12b;
  goto L_12c;
  // [栈深重同步 1 -> 0]
  v = undefined;
  if (!(P)) goto L_23d;
  if (!((undefined === a))) goto L_23d;
  if (!(d.canShowExternalPurchaseLink)) goto L_23d;
  if (!(d.isExternalCheckoutInProgress)) goto L_23d;
  if (!((d.webCheckout == null))) goto L_1c6;
  d.webCheckout;
  goto L_1e7;
  if (!((true === undefined.isLoading))) goto L_23d;
  if (!((b == null))) goto L_21b;
  b;
  goto L_23c;
  C = (d.webCheckoutPlanId === undefined.offeredPlanId);
  m = [];
  E = function <atom:0>;
  y = function <atom:0>;
  if (!((a == null))) goto L_261;
  a;
  goto L_282;
  if (!((true === undefined.requiresExternalCheckout))) goto L_2fd;
  if (!((undefined !== v))) goto L_2fd;
  y(v, o(n));
  if (!((S == null))) goto L_2a6;
  S;
  goto L_2c7;
  if (!((true === undefined.isEnabled))) goto L_2f9;
  E(S, k.skipOffer, true);
  goto L_8c3;
  if (!((undefined !== a))) goto L_363;
  if (!((undefined !== S))) goto L_363;
  if (!((k.promotionPurchase == null))) goto L_35c;
  k.promotionPurchase;
  E(S, k.purchase, false);
  goto L_8c3;
  if (!(p)) goto L_4e5;
  if (!((h === e.SubscriptionPricingNativeCheckoutTreatment.InAppPurchasePrimary))) goto L_4e5;
  if (!((undefined === a))) goto L_4e5;
  if (!((undefined !== v))) goto L_4e5;
  L = v;
  m.push(s(r, i.SubscriptionPricingActionKind.OpenExternalCheckout, L, k.purchase, !d.isPrimaryPurchaseDisabled, n, false));
  if (!(d.canShowExternalPurchaseLink)) goto L_4e1;
  y(v, k.webLink);
  goto L_8c3;
  if (!((undefined === S))) goto L_522;
  if (!((undefined !== v))) goto L_522;
  y(v, k.webLink);
  goto L_8c3;
  if (!((undefined === v))) goto L_55a;
  E(S, k.purchase, false);
  goto L_8c3;
  if (!((h === e.SubscriptionPricingNativeCheckoutTreatment.InAppPurchasePrimary))) goto L_601;
  E(S, k.purchase, false);
  y(v, k.webLink);
  goto L_8c2;
  if (!((h === e.SubscriptionPricingNativeCheckoutTreatment.WebCheckoutPrimary))) goto L_730;
  if (!(("plus" === n.selectedPlanId))) goto L_6a6;
  goto L_6ca;
  // [栈深重同步 4 -> 3]
  y(v, k.webPurchase);
  if (!((S == null))) goto L_6d9;
  S;
  goto L_6fa;
  if (!((true === undefined.isEnabled))) goto L_72c;
  E(S, k.applePurchase, true);
  goto L_8c2;
  if (!((h === e.SubscriptionPricingNativeCheckoutTreatment.InAppPurchasePrimaryHorizontal))) goto L_7d6;
  y(v, k.webCheckout);
  E(S, k.subscribe, true);
  goto L_8c2;
  if (((h === e.SubscriptionPricingNativeCheckoutTreatment.EqualHorizontal))) goto L_868;
  if (!((h === e.SubscriptionPricingNativeCheckoutTreatment.EqualVerticalWebFirst))) goto L_8c2;
  y(v, k.upgradeOnWeb);
  E(S, k.payWithApple, true);
  h;
  let i;
  for (const i of d.legalDocuments) {
    m.push(u(i));
  }
  return m;
}

// fn a  args=3 vars=3 closure=2 cpool=0 bc=876B file=chatgpt_subscription_pricing/src/SubscriptionPricingCheckoutProjection
// args: t, r, c
// closure: i, e
function {
  if (((undefined !== r))) goto L_e3;
  if ((!t.checkout.canShowExternalPurchaseLink)) goto L_e3;
  if (((undefined === t.checkout.webCheckout))) goto L_e3;
  if (!((undefined === t.checkout.webCheckoutPlanId))) goto L_12b;
  return i.SubscriptionPricingCheckoutLayout.PrimaryAndSecondary;
  if (((c === e.SubscriptionPricingNativeCheckoutTreatment.EqualHorizontal))) goto L_1be;
  if (!((c === e.SubscriptionPricingNativeCheckoutTreatment.InAppPurchasePrimaryHorizontal))) goto L_204;
  return i.SubscriptionPricingCheckoutLayout.EqualHorizontal;
  if (!((c === e.SubscriptionPricingNativeCheckoutTreatment.EqualVerticalWebFirst))) goto L_293;
  return i.SubscriptionPricingCheckoutLayout.EqualVertical;
  if (((c === e.SubscriptionPricingNativeCheckoutTreatment.InAppPurchasePrimary))) goto L_325;
  if (!((c === e.SubscriptionPricingNativeCheckoutTreatment.WebCheckoutPrimary))) goto L_36b;
  return i.SubscriptionPricingCheckoutLayout.PrimaryAndSecondary;
  c;
  return;
}

// fn o  args=1 vars=2 closure=1 cpool=0 bc=663B file=chatgpt_subscription_pricing/src/SubscriptionPricingCheckoutProjection
// args: i
// locals: t
// closure: e
function {
  let t;
  t = i.strings.checkout;
  if (((i.checkout.storeState === e.SubscriptionPricingNativeStoreState.Empty))) goto L_11c;
  if (!((i.checkout.storeState === e.SubscriptionPricingNativeStoreState.Disabled))) goto L_16a;
  if (!((t.promotionLink == null))) goto L_169;
  t.promotionLink;
  return t.webLink;
  if (((i.checkout.storeState === e.SubscriptionPricingNativeStoreState.Loading))) goto L_248;
  if (((i.checkout.storeState === e.SubscriptionPricingNativeStoreState.Available))) goto L_248;
  if (!((i.checkout.storeState === e.SubscriptionPricingNativeStoreState.Failed))) goto L_296;
  if (!((t.promotionPurchase == null))) goto L_295;
  t.promotionPurchase;
  return t.webPurchase;
  i.checkout.storeState;
  return;
}

// fn s  args=7 vars=7 closure=0 cpool=0 bc=294B file=chatgpt_subscription_pricing/src/SubscriptionPricingCheckoutProjection
// args: i, e, t, r, c, n, a
function {
  if (!(c)) goto L_f9;
  if ((!n.checkout.isExternalCheckoutInProgress)) goto L_f9;
  return {id: i, title: r.title, accessibilityLabel: r.accessibilityLabel, loadingTitle: n.strings.actionLoadingTitle, kind: e, isEnabled: a, isLoading: t.isLoading};
}

// fn u  args=1 vars=1 closure=1 cpool=0 bc=200B file=chatgpt_subscription_pricing/src/SubscriptionPricingCheckoutProjection
// args: e
// closure: i
function {
  return {id: e.id, title: e.title, kind: i.SubscriptionPricingActionKind.OpenLegal, isEnabled: e.isEnabled, isLoading: false};
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=5 bc=173B file=chatgpt_subscription_pricing/src/SubscriptionPricingCheckoutProjection
// args: require, module, exports
// locals: i, e, t, r, c, n, a, o, s, u
function {
  n = function n;
  a = function a;
  o = function o;
  s = function s;
  u = function u;
  let c;
  let r;
  let t;
  let e;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.subscriptionPricingCheckoutActions = undefined;
  exports.subscriptionPricingCheckoutLayout = undefined;
  i = require("./SubscriptionPricingModels");
  e = require("./SubscriptionPricingNativeState");
  t = "apple-purchase";
  r = "direct-web-purchase";
  c = "web-checkout";
  exports.subscriptionPricingCheckoutActions = n;
  exports.subscriptionPricingCheckoutLayout = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingCheckoutProjection
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
