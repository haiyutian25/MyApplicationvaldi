// fn l  args=1 vars=1 closure=0 cpool=0 bc=82B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: e
function {
  if (!(("plus" === e.selectedPlanId))) goto L_51;
  return (true === e.androidIsNoPaymentTrial);
}

// fn u  args=0 vars=4 closure=2 cpool=0 bc=514B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// locals: e, i, r, s
// closure: t, c
function {
  let s;
  let r;
  let i;
  let e;
  e = t.default.subscriptionsPlanNamePlus();
  i = t.default.subscriptionsNoPaymentTrialPlusTitle(c);
  r = i.indexOf(c);
  s = t.default.subscriptionsNoPaymentTrialPlusSubtitle();
  if (((-1 === r))) goto L_14f;
  if (!((-1 !== i.indexOf(c, (r + 1))))) goto L_1ab;
  return {title: t.default.subscriptionsNoPaymentTrialPlusTitle(e), subtitle: s};
  return {title: i.replace(c, e), subtitle: s, titleAccentRange: {start: r, end: (r + e.length)}};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: e
// closure: t
function {
  return (e.id === t.selectedPlanId);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: e
// closure: t
function {
  return (e.id === t.selectedProductId);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=23B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: e, i
function {
  return {title: e, isIncluded: true, isIncludedInComparisonPlan: (0 === i)};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=129B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: e
// closure: i, s
function {
  if (!((e.id === i.id))) goto L_7f;
  null;
  e;
  return {features: s.map(function <atom:0>)};
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=177B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: e
// closure: i, P, _
function {
  if (!((e.id === i.id))) goto L_af;
  null;
  e;
  if (!((P == null))) goto L_7a;
  P;
  if (!((_ == null))) goto L_a9;
  _;
  return {features: e.features, subtitle: e.subtitle};
  return e;
}

// fn p  args=4 vars=22 closure=5 cpool=4 bc=3399B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: i, t, s, n
// locals: a, e, i#1, o, d, r, s#1, c, u, p, h, P, n#1, f, b, _, v, o#1
// closure: e, r, l, g, u
function {
  let o#1;
  let a;
  a = i;
  if (!(e.isVersionAtLeast(39))) goto L_d18;
  let c;
  let d;
  let o;
  let i#1;
  let e;
  e = t.strings.androidPresentationCopy;
  if (!((t.plans.find(function <atom:0>) == null))) goto L_f8;
  t.plans.find(function <atom:0>);
  i#1 = t.plans[0];
  if (!((i#1 == null))) goto L_104;
  i#1;
  goto L_14b;
  o = undefined.approvedProducts.find(function <atom:0>);
  d = t.promotion;
  if (!(n)) goto L_3d8;
  if (!((i#1 == null))) goto L_186;
  i#1;
  goto L_1a7;
  if (!(("plus" === undefined.id))) goto L_3d8;
  if (!((t.personalization == null))) goto L_1d7;
  t.personalization;
  goto L_1f8;
  if (!((undefined.planId !== i#1.id))) goto L_3d8;
  if (!((undefined !== e))) goto L_3d8;
  let s#1;
  let r;
  r = t.strings.featureCopy;
  s#1 = [r.coreModel, r.smarterModels, e.refreshedPlusWorkAgent, e.refreshedPlusCodexAgent, r.moreMessagesAndUploads, r.plusImageCreation, r.moreMemory];
  null;
  a;
  a = {plans: a.plans.map(function <atom:0>)};
  {plans: a.plans.map(function <atom:0>)};
  // close_loc s#1
  if (!((undefined !== d))) goto L_4b4;
  if (!((i#1 == null))) goto L_413;
  i#1;
  goto L_434;
  if (!((d.planId === undefined.id))) goto L_4b4;
  if (((undefined === d.productId))) goto L_4b4;
  if (!((o == null))) goto L_492;
  o;
  goto L_4b3;
  c = (d.productId === undefined.id);
  if (((undefined === i#1))) goto L_623;
  if (((i#1.id !== t.selectedPlanId))) goto L_623;
  if (((undefined === s))) goto L_623;
  if (((undefined === e))) goto L_623;
  if (!(("go" !== i#1.id))) goto L_57e;
  if ((("plus" !== i#1.id))) goto L_623;
  if (!(("plus" === i#1.id))) goto L_623;
  if (!((t.personalization == null))) goto L_5dd;
  t.personalization;
  goto L_5fe;
  if (!(!(undefined.planId === i#1.id))) goto L_d15;
  let v;
  let _;
  let b;
  let f;
  let P;
  let h;
  let p;
  let u;
  u = s.pricingPageVariant();
  p = r.androidPricingContent(i#1.id, u, e, t.strings.featureCopy);
  if (!(!c)) goto L_7a3;
  if (!(!l(t))) goto L_7a3;
  if (!((undefined !== o))) goto L_7a3;
  if (!(("plus" === i#1.id))) goto L_7a3;
  if (!(!n)) goto L_7a3;
  if (!((undefined !== e.plusRejoinPurchase))) goto L_7a3;
  h = s.usesChurnedPlusCopy();
  if (!((p == null))) goto L_7b0;
  p;
  goto L_7d1;
  P = undefined.features;
  if (!((undefined === P))) goto L_a7b;
  if (!(!c)) goto L_a7b;
  let n#1;
  n#1 = r.AndroidPricingPageVariant.Control;
  if (!(("go" === i#1.id))) goto L_8d4;
  if (!(s.usesRefreshedGoFeatureList())) goto L_9b8;
  n#1 = r.AndroidPricingPageVariant.Refreshed;
  goto L_9b8;
  // [栈深重同步 1 -> 0]
  if (!(s.usesImagesAndConnectorsFeatureList())) goto L_946;
  n#1 = r.AndroidPricingPageVariant.Reordered;
  goto L_9b8;
  // [栈深重同步 1 -> 0]
  if (!(s.usesRefreshedPlusFeatureList())) goto L_9b8;
  n#1 = r.AndroidPricingPageVariant.Refreshed;
  r.AndroidPricingPageVariant.Refreshed;
  if (!((r.androidPricingContent(i#1.id, n#1, e, t.strings.featureCopy) == null))) goto L_a55;
  r.androidPricingContent(i#1.id, n#1, e, t.strings.featureCopy);
  goto L_a76;
  P = undefined.features;
  undefined.features;
  if (!((p == null))) goto L_a86;
  p;
  goto L_aa7;
  if (!((undefined.title == null))) goto L_ad0;
  undefined.title;
  f = a.title;
  if (!((p == null))) goto L_add;
  p;
  goto L_afe;
  if (!((undefined.subtitle == null))) goto L_b27;
  undefined.subtitle;
  b = a.subtitle;
  if (!(h)) goto L_b54;
  goto L_b55;
  // [栈深重同步 1 -> 0]
  _ = undefined;
  if (!(h)) goto L_b96;
  f = a.title;
  a.title;
  if (!((_ == null))) goto L_b92;
  _;
  b = b;
  b;
  if (!(c)) goto L_c56;
  if (!((d == null))) goto L_bad;
  d;
  goto L_bce;
  if (!((undefined !== undefined.mastheadTitle))) goto L_bfb;
  f = a.title;
  a.title;
  if (!((d == null))) goto L_c08;
  d;
  goto L_c29;
  if (!((undefined !== undefined.mastheadSubtitle))) goto L_c56;
  b = a.subtitle;
  a.subtitle;
  null;
  a;
  if (((undefined !== P))) goto L_c7c;
  if (!(h)) goto L_cca;
  goto L_cee;
  // [栈深重同步 2 -> 1]
  v = {title: f, subtitle: b, plans: a.plans};
  if (!(h)) goto L_d07;
  goto L_d0a;
  // [栈深重同步 1 -> 0]
  a = v;
  v;
  // close_loc _
  // close_loc P
  // close_loc i#1
  if (!(!n)) goto L_d27;
  if (!(l(t))) goto L_d27;
  goto L_d28;
  // [栈深重同步 1 -> 0]
  o#1 = undefined;
  if (!((undefined === o#1))) goto L_d35;
  return a;
  null;
  a;
  null;
  o#1;
  return {};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.experimentService = e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: i
// closure: e
function {
  return (i.id === e.selectedPlanId);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: i
// closure: e
function {
  return (i.id === e.selectedProductId);
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=2 bc=571B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: e
// locals: i, this
// closure: l
function {
  this = this;
  let i;
  i = e.plans.find(function <atom:0>);
  if (!((undefined !== i))) goto L_23a;
  if (!(("pro" !== i.id))) goto L_23a;
  if (!((undefined === e.promotion))) goto L_23a;
  if (!(!l(e))) goto L_23a;
  if ((("plus" !== i.id))) goto L_164;
  if ((!i.approvedProducts.some(function <atom:0>))) goto L_164;
  if (!(!this.usesChurnedPlusCopy())) goto L_23a;
  if (!((undefined === this.workEnabled))) goto L_217;
  this.workEnabled = this.experimentService.getLayer("chatgpt_android_free_work_tab").getBoolean("enabled", false);
  this.experimentService.getLayer("chatgpt_android_free_work_tab").getBoolean("enabled", false);
  return this.workEnabled;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=375B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// locals: this
function {
  this = this;
  if (!((undefined === this.blueAccents))) goto L_153;
  if ((this.churnedLayer.getBoolean("android_pricing_blue_accents_enabled", false))) goto L_149;
  if ((this.layer.getBoolean("android_pricing_blue_accents_enabled", false))) goto L_149;
  this.blueAccents = this.experimentService.getLayer("chatgpt-android-colors").getBoolean("is_upsell_blue_enabled", true);
  this.experimentService.getLayer("chatgpt-android-colors").getBoolean("is_upsell_blue_enabled", true);
  return this.blueAccents;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=634B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// locals: e, this
// closure: r
function {
  this = this;
  if (!((undefined === this.pairedVariant))) goto L_257;
  let e;
  e = this.layer.getString("android_pricing_page_variant", "control");
  if (((e === r.AndroidPricingPageVariant.Refreshed))) goto L_1f8;
  if (((e === r.AndroidPricingPageVariant.Reordered))) goto L_1f8;
  if (((e === r.AndroidPricingPageVariant.MinorUpdates))) goto L_1f8;
  if (((e === r.AndroidPricingPageVariant.NewTaglines))) goto L_1f8;
  if (!((e === r.AndroidPricingPageVariant.VerbPhrases))) goto L_207;
  this.pairedVariant = e;
  goto L_256;
  this.pairedVariant = r.AndroidPricingPageVariant.Control;
  e;
  return this.pairedVariant;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=246B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// locals: this
// closure: a
function {
  this = this;
  if (!((undefined === this.refreshedGoFeatureList))) goto L_d2;
  if ((this.churnedLayer.getBoolean(a, false))) goto L_c8;
  this.refreshedGoFeatureList = this.layer.getBoolean(a, false);
  this.layer.getBoolean(a, false);
  return this.refreshedGoFeatureList;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=66B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// locals: e, this
function {
  this = this;
  let e;
  e = this.plusFeatureListVariant();
  if ((("refreshed" === e))) goto L_41;
  return ("images_and_connectors" === e);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=46B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// locals: this
function {
  this = this;
  return ("images_and_connectors" === this.plusFeatureListVariant());
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=277B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// locals: e, this
// closure: o
function {
  this = this;
  if (!((undefined === this.refreshedPlusFeatureList))) goto L_f2;
  let e;
  e = this.churnedLayer.getString(o, "control");
  if ((("refreshed" === e))) goto L_94;
  if (!(("images_and_connectors" === e))) goto L_9b;
  goto L_e9;
  // [栈深重同步 2 -> 1]
  this.refreshedPlusFeatureList = this.layer.getString(o, "control");
  return this.refreshedPlusFeatureList;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=173B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// locals: this
// closure: d
function {
  this = this;
  if (!((undefined === this.churnedPlusCopy))) goto L_89;
  this.churnedPlusCopy = ("rejoin" === this.churnedLayer.getString(d, "control"));
  ("rejoin" === this.churnedLayer.getString(d, "control"));
  return this.churnedPlusCopy;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=162B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// locals: this
// closure: n
function {
  this = this;
  if (!((undefined === this.churnedPricingLayer))) goto L_7e;
  this.churnedPricingLayer = this.experimentService.getLayer(n);
  this.experimentService.getLayer(n);
  return this.churnedPricingLayer;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=145B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// locals: e, i, this
// closure: s
function {
  this = this;
  let i;
  let e;
  e = this.pricingLayer;
  if (!((undefined !== e))) goto L_36;
  return e;
  i = this.experimentService.getLayer(s);
  this.pricingLayer = i;
  return i;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=198B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: e
// closure: i, n
function {
  if (!((e.kind === i.SubscriptionPricingActionKind.Purchase))) goto L_c4;
  null;
  e;
  return {title: n.title, accessibilityLabel: n.accessibilityLabel};
  return e;
}

// fn g  args=3 vars=5 closure=2 cpool=1 bc=268B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: r, t, s
// locals: n, a
// closure: i, e
function {
  let a;
  let n;
  n = s.plusRejoinPurchase;
  if (!((undefined === n))) goto L_32;
  return r;
  a = r.footerText;
  if (!(e.isVersionAtLeast(39))) goto L_ae;
  if (!((t.renewalTextWithoutPrice == null))) goto L_aa;
  t.renewalTextWithoutPrice;
  a = a;
  a;
  null;
  r;
  return {actions: r.actions.map(function <atom:0>), footerText: a};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=122B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: i
// closure: e, t
function {
  if (!((i.id === e.selectedProductId))) goto L_78;
  null;
  i;
  return {renewalText: t.renewalText};
  return i;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=259B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: i
// closure: e, t
function {
  null;
  i;
  if (!(("plus" === i.id))) goto L_af;
  goto L_b0;
  // [栈深重同步 2 -> 1]
  null;
  {};
  return {approvedProducts: i.approvedProducts.map(function <atom:0>)};
}

// fn h  args=3 vars=6 closure=0 cpool=1 bc=936B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: e, i, r
// locals: t, s, i#1
function {
  let s;
  let t;
  if (!(i)) goto L_77;
  if (!((e.strings.androidPresentationCopy == null))) goto L_54;
  e.strings.androidPresentationCopy;
  goto L_78;
  goto L_78;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (!((e.isDarkMode == null))) goto L_a2;
  e.isDarkMode;
  s = false;
  if (!((undefined === t))) goto L_14f;
  let i#1;
  if (!((r == null))) goto L_b9;
  r;
  goto L_dd;
  if (!((undefined.usesBlueAccents() == null))) goto L_e4;
  undefined.usesBlueAccents();
  i#1 = true;
  null;
  e;
  if (!(i#1)) goto L_105;
  if (!(s)) goto L_fe;
  goto L_116;
  // [栈深重同步 3 -> 2]
  goto L_116;
  // [栈深重同步 3 -> 2]
  if (!(s)) goto L_111;
  goto L_116;
  // [栈深重同步 3 -> 2]
  if (!(i#1)) goto L_133;
  if (!(s)) goto L_12c;
  goto L_144;
  // [栈深重同步 3 -> 2]
  goto L_144;
  // [栈深重同步 3 -> 2]
  if (!(s)) goto L_13f;
  goto L_144;
  // [栈深重同步 3 -> 2]
  return {accentPalette: {accentForegroundColor: "#5856D6", accentSurfaceColor: "#F3F3F9"}};
  null;
  e;
  if (!(s)) goto L_18c;
  goto L_191;
  // [栈深重同步 3 -> 2]
  null;
  e.strings;
  null;
  e.strings.featureCopy;
  null;
  e.strings.checkout;
  return {accentPalette: {accentForegroundColor: t.accentForegroundColor, accentSurfaceColor: "#F3F3F9"}, plans: e.plans.map(function <atom:0>), strings: {closeAccessibilityLabel: t.closeAccessibilityLabel, featureCopy: {coreModel: t.coreModel, smarterModels: t.smarterModels, moreMemory: t.moreMemory}, checkout: {purchase: t.purchase, applePurchase: t.purchase}}};
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=16 bc=383B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// args: require, module, exports
// locals: e, i, r, t, s, n, a, o, d, c, l, u, p, SubscriptionPricingAndroidPresentationExperiments, <class_fields_init>, SubscriptionPricingAndroidPresentationExperiments#1, g, h
function {
  l = function l;
  u = function u;
  p = function p;
  g = function g;
  h = function h;
  let SubscriptionPricingAndroidPresentationExperiments#1;
  let c;
  let d;
  let o;
  let a;
  let n;
  let s;
  let t;
  let r;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.trialPlusHeader = undefined;
  exports.resolvePricingOverrides = undefined;
  exports.SubscriptionPricingAndroidPresentationExperiments = undefined;
  exports.androidPricingState = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  i = require("./SubscriptionPricingModels");
  r = require("./SubscriptionPricingAndroidVariants");
  t = require("./Strings");
  s = "chatgpt_android_pricing_page_updates_layer";
  n = "chatgpt_android_churned_pricing_page_updates_layer";
  a = "android_go_pricing_value_props_refreshed_enabled";
  o = "android_plus_pricing_value_props_variant";
  d = "churned_plus_pricing_vision_variant";
  c = "￼";
  exports.trialPlusHeader = u;
  exports.resolvePricingOverrides = p;
  let SubscriptionPricingAndroidPresentationExperiments;
  let <class_fields_init>;
  class SubscriptionPricingAndroidPresentationExperiments extends undefined { ... }
  <proto:SubscriptionPricingAndroidPresentationExperiments>.usesWorkPricing = function <atom:0>;
  <proto:SubscriptionPricingAndroidPresentationExperiments>.usesBlueAccents = function <atom:0>;
  <proto:SubscriptionPricingAndroidPresentationExperiments>.pricingPageVariant = function <atom:0>;
  <proto:SubscriptionPricingAndroidPresentationExperiments>.usesRefreshedGoFeatureList = function <atom:0>;
  <proto:SubscriptionPricingAndroidPresentationExperiments>.usesRefreshedPlusFeatureList = function <atom:0>;
  <proto:SubscriptionPricingAndroidPresentationExperiments>.usesImagesAndConnectorsFeatureList = function <atom:0>;
  <proto:SubscriptionPricingAndroidPresentationExperiments>.plusFeatureListVariant = function <atom:0>;
  <proto:SubscriptionPricingAndroidPresentationExperiments>.usesChurnedPlusCopy = function <atom:0>;
  <proto:SubscriptionPricingAndroidPresentationExperiments>.churnedLayer = function <atom:0>;
  <proto:SubscriptionPricingAndroidPresentationExperiments>.layer = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscriptionPricingAndroidPresentationExperiments>;
  SubscriptionPricingAndroidPresentationExperiments = function <atom:0>;
  // close_loc <class_fields_init>
  SubscriptionPricingAndroidPresentationExperiments#1 = function <atom:0>;
  exports.SubscriptionPricingAndroidPresentationExperiments = SubscriptionPricingAndroidPresentationExperiments#1;
  exports.androidPricingState = h;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingOverrides
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
