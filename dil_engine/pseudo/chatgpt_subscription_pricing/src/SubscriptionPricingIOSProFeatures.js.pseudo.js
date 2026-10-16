// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSProFeatures
// args: i
// closure: a
function {
  return (i.id === a.selectedPlanId);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSProFeatures
// args: i
// closure: a
function {
  return (i.id === a.selectedPackageId);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=333B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSProFeatures
// args: i
// closure: a, n
function {
  if (!((i.id === a.selectedPlanId))) goto L_14b;
  null;
  i;
  // append([], 0, i.features.slice(0, 1))
  [][i.features.slice(0, 1)] = {title: n.default.subscriptionsIosProAlwaysOnAssistant(), isIncluded: true, isIncludedInComparisonPlan: false};
  // append([], ({title: n.default.subscriptionsIosProAlwaysOnAssistant(), isIncluded: true, isIncludedInComparisonPlan: false} ++), i.features.slice(1))
  i.features.slice(1);
  return {features: []};
  return i;
}

// fn <atom:0>  args=3 vars=8 closure=6 cpool=3 bc=1035B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSProFeatures
// args: a, o, c
// locals: l, p, u, i, this
// closure: n, r, t, e, s, i
function {
  this = this;
  let u;
  let p;
  let l;
  if ((!r.Device.isIOS())) goto L_a1;
  if (!(r.Device.isWeb())) goto L_a5;
  return a;
  l = o.plans.find(function <atom:0>);
  if (!((l == null))) goto L_f9;
  l;
  goto L_140;
  p = undefined.approvedProducts.find(function <atom:0>);
  if (!((p == null))) goto L_14c;
  p;
  goto L_16d;
  u = undefined.offeredPlanId;
  if (!((l == null))) goto L_19d;
  l;
  goto L_1be;
  if ((!t.isSubscriptionPricingProPlan(undefined.id))) goto L_1f6;
  if (((undefined === u))) goto L_1f6;
  if (!(!t.isSubscriptionPricingProPlan(u))) goto L_1fa;
  return a;
  if (!((undefined === this.dotsValuePropAvailablePlans))) goto L_368;
  try { // catch -> L_2f9
  let i;
  if (!((s.subscriptionPricingPlatformServices(c) == null))) goto L_27e;
  s.subscriptionPricingPlatformServices(c);
  goto L_29f;
  i = e.experimentLayer(undefined.experimentService, "chatgpt-ios-pro-pricing-page-dots-value-prop");
  if (!((i == null))) goto L_2b7;
  i;
  goto L_2e3;
  if (!((undefined.getStringList("available_plans", []) == null))) goto L_2eb;
  undefined.getStringList("available_plans", []);
  // append([], 0, [])
  [];
  this.dotsValuePropAvailablePlans = [];
  <?>;
  goto L_368;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_367
  this.dotsValuePropAvailablePlans = [];
  if (!(i.isLoggingEnabled)) goto L_363;
  console.warn("[SubscriptionPricing] Could not read the Dots pricing config; keeping the value prop hidden.");
  <?>;
  goto L_368;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(this.dotsValuePropAvailablePlans.includes(u))) goto L_409;
  null;
  a;
  return {plans: a.plans.map(function <atom:0>)};
  return a;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSProFeatures
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=222B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSProFeatures
// args: require, module, exports
// locals: i, e, r, s, t, n, SubscriptionPricingIOSProFeatures, <class_fields_init>, SubscriptionPricingIOSProFeatures#1
function {
  let SubscriptionPricingIOSProFeatures#1;
  let n;
  let t;
  let s;
  let r;
  let e;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscriptionPricingIOSProFeatures = undefined;
  i = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("oai_platform_services/src/OAIExperimentService");
  r = require("valdi_core/src/Device");
  s = require("./SubscriptionPricingCapabilities");
  t = require("./SubscriptionPricingProPresentation");
  n = require("./Strings");
  let SubscriptionPricingIOSProFeatures;
  let <class_fields_init>;
  class SubscriptionPricingIOSProFeatures extends undefined { ... }
  <proto:SubscriptionPricingIOSProFeatures>.apply = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscriptionPricingIOSProFeatures>;
  SubscriptionPricingIOSProFeatures = function <atom:0>;
  // close_loc <class_fields_init>
  SubscriptionPricingIOSProFeatures#1 = function <atom:0>;
  exports.SubscriptionPricingIOSProFeatures = SubscriptionPricingIOSProFeatures#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSProFeatures
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
