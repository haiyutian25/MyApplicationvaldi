// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSGoFeatures
// args: e
function {
  return ("go" === e.id);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=23B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSGoFeatures
// args: e, i
function {
  return {title: e, isIncluded: true, isIncludedInComparisonPlan: (0 === i)};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=98B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSGoFeatures
// args: e
// closure: l
function {
  if (!(("go" === e.id))) goto L_60;
  null;
  e;
  return {features: l.map(function <atom:0>)};
  return e;
}

// fn <atom:0>  args=3 vars=8 closure=5 cpool=2 bc=1286B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSGoFeatures
// args: t, n, a
// locals: e, u, c, l, this
// closure: r, i, s, e, o
function {
  this = this;
  let l;
  let c;
  if ((!r.Device.isIOS())) goto L_174;
  if ((r.Device.isWeb())) goto L_174;
  if ((("go" !== n.selectedPlanId))) goto L_174;
  if ((("go" !== t.selectedPlanId))) goto L_174;
  if (((undefined !== n.personalization))) goto L_174;
  if (!(!t.plans.some(function <atom:0>))) goto L_178;
  return t;
  if (!((undefined === this.refreshEnabled))) goto L_2d9;
  try { // catch -> L_26a
  let e;
  if (!((s.subscriptionPricingPlatformServices(a) == null))) goto L_1fc;
  s.subscriptionPricingPlatformServices(a);
  goto L_21d;
  e = i.experimentLayer(undefined.experimentService, "ios_plus_pricing_value_props_refresh");
  if (!((undefined === e))) goto L_22e;
  return t;
  this.refreshEnabled = e.getBoolean("go_refresh_v1", false);
  <?>;
  goto L_2d9;
  // [栈深重同步 0 -> 1]
  u = <?>;
  try { // catch -> L_2d8
  this.refreshEnabled = false;
  if (!(e.isLoggingEnabled)) goto L_2d4;
  console.warn("[SubscriptionPricing] Could not read the iOS Go refresh; keeping native control copy:", u);
  <?>;
  goto L_2d9;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(!this.refreshEnabled)) goto L_301;
  return t;
  c = n.strings.featureCopy;
  l = [o.default.subscriptionsIosGoUnlimitedTextChat(), o.default.subscriptionsIosGoMessagesWithTools(), o.default.subscriptionsIosGoFileStorage(), c.goImageCreation, o.default.subscriptionsIosGoVoiceChats(), c.longerMemory];
  null;
  t;
  return {plans: t.plans.map(function <atom:0>)};
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSGoFeatures
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=210B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSGoFeatures
// args: require, module, exports
// locals: e, i, r, s, o, SubscriptionPricingIOSGoFeatures, <class_fields_init>, SubscriptionPricingIOSGoFeatures#1
function {
  let SubscriptionPricingIOSGoFeatures#1;
  let o;
  let s;
  let r;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscriptionPricingIOSGoFeatures = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("oai_platform_services/src/OAIExperimentService");
  r = require("valdi_core/src/Device");
  s = require("./SubscriptionPricingCapabilities");
  o = require("./Strings");
  let SubscriptionPricingIOSGoFeatures;
  let <class_fields_init>;
  class SubscriptionPricingIOSGoFeatures extends undefined { ... }
  <proto:SubscriptionPricingIOSGoFeatures>.apply = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscriptionPricingIOSGoFeatures>;
  SubscriptionPricingIOSGoFeatures = function <atom:0>;
  // close_loc <class_fields_init>
  SubscriptionPricingIOSGoFeatures#1 = function <atom:0>;
  exports.SubscriptionPricingIOSGoFeatures = SubscriptionPricingIOSGoFeatures#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSGoFeatures
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
