// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=347B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this
// closure: t, WorkPricingSurface, i
function {
  this = this;
  t.beginComponent(WorkPricingSurface, i, undefined, undefined);
  if ((t.hasContext())) goto L_c7;
  t.setContext(this.context.pricing);
  t.setViewModelProperties(this.viewModel.nativeState);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=105B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: this
function {
  return this.context.host.dismiss();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=144B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: this, W
function {
  if (!(!this.dismissalDisabled)) goto L_8f;
  if (!(!W.isVersionAtLeast(27))) goto L_60;
  throw new Error("Subscription pricing requires the current native purchase host.");
  this.invokeHostOperation("dismissal", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=42B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: e, i
function {
  return e.restorePurchases(i);   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=1 bc=456B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: e, t, i
// closure: B, W, this, O
function {
  if (!(B.Device.isAndroid())) goto L_1c7;
  if (!(W.isVersionAtLeast(31))) goto L_1c7;
  let i;
  let t;
  let e;
  e = this.context.restoreHost;
  t = this.nativeState.strings.restoreSubscription;
  if (((undefined === e))) goto L_13d;
  if (!((undefined === t))) goto L_140;
  return;
  i = O.v4();
  this.invokeHostOperation("purchase restoration (".concat(i, ")"), function <atom:0>);
  // close_loc i
  // close_loc e
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=2 bc=90B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this, this.active_func, new.target, arguments
// closure: W, B, O, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.state = {};
  this.dismiss = function <atom:0>;
  this.restorePurchases = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=276B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e
// locals: t, i, r
// closure: this
function {
  let r;
  let i;
  let t;
  t = this.presentation;
  i = this.projectPresentation(e);
  this.presentation = i;
  r = this.reconciledActiveActionId(t, i, e);
  if (!((undefined === r))) goto L_c2;
  goto L_105;
  // [栈深重同步 4 -> 3]
  this.setState({activeActionId: r, activePurchaseRequestId: this.state.activePurchaseRequestId, observedNativeState: e});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=113B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this
// closure: Z
function {
  this = this;
  this.registerDisposable(Z.subscribeToSubscriptionPricingState(this.context, function <atom:0>));
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=524B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e
// locals: t, i, this
function {
  this = this;
  let i;
  let t;
  if (!((undefined !== this.state.observedNativeState))) goto L_50;
  return;
  if (!((undefined === e))) goto L_58;
  goto L_7e;
  // [栈深重同步 1 -> 0]
  t = this.projectPresentation(e);
  this.presentation = this.projectPresentation(this.viewModel);
  i = this.reconciledActiveActionId(t, this.pricingPresentation, this.viewModel);
  if (!((i !== this.state.activeActionId))) goto L_20b;
  if (!((undefined === i))) goto L_1c0;
  goto L_203;
  // [栈深重同步 4 -> 3]
  this.setState({activeActionId: i, activePurchaseRequestId: this.state.activePurchaseRequestId});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=274B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: e, e#1, this
// closure: W
function {
  this = this;
  let e;
  e = this.presentation;
  if (!((undefined !== e))) goto L_33;
  return e;
  if (!(W.isVersionAtLeast(27))) goto L_103;
  let e#1;
  if (!((this.state.observedNativeState == null))) goto L_ee;
  this.state.observedNativeState;
  e#1 = this.projectPresentation(this.viewModel);
  this.presentation = e#1;
  return e#1;
  throw new Error("Subscription pricing requires the current native account state.");
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e
// closure: r
function {
  return (e.id === r);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e
// closure: r
function {
  return (e.id === r);
}

// fn <atom:0>  args=3 vars=11 closure=2 cpool=2 bc=935B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e, t, i
// locals: r, o, n, s, c, a, d, this
// closure: B, W
function {
  this = this;
  let d;
  let a;
  let c;
  let s;
  let n;
  let o;
  let r;
  r = this.state.activeActionId;
  if (((undefined === r))) goto L_69;
  if (!((undefined === e))) goto L_6f;
  return r;
  o = t.actions.find(function <atom:0>);
  n = e.actions.find(function <atom:0>);
  if (!(e.isPurchasing)) goto L_14a;
  s = !t.isPurchasing;
  if (!((n == null))) goto L_158;
  n;
  goto L_179;
  if (!((true === undefined.isLoading))) goto L_1ad;
  if (!((o == null))) goto L_18b;
  o;
  goto L_1ac;
  c = (true !== undefined.isLoading);
  if (!((undefined !== t.errorMessage))) goto L_21c;
  a = (t.errorMessage !== e.errorMessage);
  d = false;
  if (!(B.Device.isAndroid())) goto L_354;
  if (!(W.isVersionAtLeast(39))) goto L_354;
  if (!((undefined !== this.state.activePurchaseRequestId))) goto L_350;
  d = (i.completedPurchaseRequestId === this.state.activePurchaseRequestId);
  (i.completedPurchaseRequestId === this.state.activePurchaseRequestId);
  if (((undefined === o))) goto L_39f;
  if ((!o.isEnabled)) goto L_39f;
  if ((s)) goto L_39f;
  if ((c)) goto L_39f;
  if ((a)) goto L_39f;
  if (!(d)) goto L_3a3;
  return undefined;
  return r;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=352B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this
// closure: D
function {
  this = this;
  if (!((undefined === this.pricingPresentation.isDarkMode))) goto L_8f;
  return D.OAIThemeMode.System;
  if (!(this.pricingPresentation.isDarkMode)) goto L_11a;
  return D.OAIThemeMode.Dark;
  return D.OAIThemeMode.Light;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=149B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this
// closure: B
function {
  this = this;
  if (!(B.Device.isIOS())) goto L_94;
  return (true === this.pricingPresentation.isDarkMode);
}

// fn <atom:0>  args=1 vars=5 closure=4 cpool=0 bc=593B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e
// locals: t, t#1, i, this
// closure: B, Z, Y, W
function {
  this = this;
  let i;
  let t#1;
  if (!(B.Device.isAndroid())) goto L_111;
  let t;
  t = Z.projectAndroidSubscriptionPricingNativeState(e, this.context.experiments);
  return Y.resolvePricingOverrides(t, e, this.presentationExperiments, true);   // tail call
  t#1 = false;
  if (!(W.isVersionAtLeast(70))) goto L_1b6;
  if (!((this.context.host.supportsAppleCheckoutFallback == null))) goto L_1ae;
  this.context.host.supportsAppleCheckoutFallback;
  this.context.host;
  goto L_1b1;
  // [栈深重同步 2 -> 3]
  t#1 = (true === <?>.call(undefined));
  (true === <?>.call(undefined));
  i = Z.projectWorkSubscriptionPricingNativeState(e, this.context.experiments, t#1);
  this.readIOSPlanTabTone(i);
  return i;
}

// fn <atom:0>  args=1 vars=4 closure=6 cpool=0 bc=505B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: t
// locals: e, i, this
// closure: B, U, q, re, oe, e
function {
  this = this;
  if (!(B.Device.isIOS())) goto L_1f8;
  if (!(!(t.plans.length < 2))) goto L_1f8;
  if (!((undefined === this.highContrastInactivePlanLabels))) goto L_1f8;
  try { // catch -> L_18b
  let e;
  if (!((U.subscriptionPricingPlatformServices(this.context) == null))) goto L_fa;
  U.subscriptionPricingPlatformServices(this.context);
  goto L_11b;
  e = undefined.experimentService;
  if (!((q.experimentLayer(e, re) == null))) goto L_150;
  q.experimentLayer(e, re);
  goto L_179;
  if (!((undefined.getBoolean(oe, false) == null))) goto L_180;
  undefined.getBoolean(oe, false);
  this.highContrastInactivePlanLabels = false;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_1f7
  this.highContrastInactivePlanLabels = false;
  if (!(e.isLoggingEnabled)) goto L_1f4;
  console.warn("[WorkPricingPage] Could not read the iOS tab tone; using native contrast:", i);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=5 closure=4 cpool=0 bc=443B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: e, t, i, e#1, this
// closure: B, U, W, Y
function {
  this = this;
  let i;
  let t;
  let e;
  if (!(!B.Device.isAndroid())) goto L_58;
  return;
  e = this.context.presentationExperiments;
  if (!((undefined !== e))) goto L_a8;
  return e;
  t = this.androidPresentationExperiments;
  if (!((undefined !== t))) goto L_d7;
  return t;
  if (!((U.subscriptionPricingPlatformServices(this.context) == null))) goto L_127;
  U.subscriptionPricingPlatformServices(this.context);
  goto L_148;
  i = undefined.experimentService;
  if (!((undefined !== i))) goto L_1ba;
  if (!(W.isVersionAtLeast(28))) goto L_1ba;
  let e#1;
  e#1 = new Y.SubscriptionPricingAndroidPresentationExperiments(i);
  this.androidPresentationExperiments = e#1;
  return e#1;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=109B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this
function {
  this = this;
  if (!((this.state.observedNativeState == null))) goto L_6c;
  this.state.observedNativeState;
  return this.viewModel;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=300B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this
// closure: B, W
function {
  this = this;
  if (!(B.Device.isAndroid())) goto L_12b;
  if (!(W.isVersionAtLeast(31))) goto L_129;
  if (!((undefined === this.context.restoreHost))) goto L_c4;
  return undefined;
  return this.nativeState.strings.restoreSubscription;
  return undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=188B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this
// closure: B, W
function {
  this = this;
  if (!(B.Device.isAndroid())) goto L_bb;
  if (!(W.isVersionAtLeast(31))) goto L_b9;
  return this.nativeState.accentPalette;
  return undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=50B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: se
function {
  return {check: se("check"), checkLg: se("check-lg"), externalLink: se("external-link"), minus: se("minus")};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=217B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this
function {
  this = this;
  if ((this.pricingPresentation.isLoading)) goto L_d8;
  if ((this.pricingPresentation.isPurchasing)) goto L_d8;
  return (undefined !== this.state.activeActionId);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=143B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this
function {
  this = this;
  if ((this.pricingPresentation.isPurchasing)) goto L_8e;
  return (undefined !== this.state.activeActionId);
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=494B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e, t
// locals: this
// closure: B, J
function {
  this = this;
  if ((!e.isEnabled)) goto L_1ed;
  if ((e.isLoading)) goto L_1ed;
  if (!(this.pricingPresentation.isLoading)) goto L_154;
  if (!(B.Device.isIOS())) goto L_153;
  if ((!(e.kind === J.SubscriptionPricingActionKind.OpenLegal))) goto L_1ed;
  if ((this.pricingPresentation.isPurchasing)) goto L_1ed;
  if (!((undefined !== this.state.activeActionId))) goto L_1ed;
  return !t;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=137B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: this, e
function {
  return this.context.host.selectPlan(e.id);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=361B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e
// locals: this
// closure: W
function {
  this = this;
  if (!(!this.pricingPresentation.isPurchasing)) goto L_168;
  if (!((undefined === this.state.activeActionId))) goto L_168;
  if (!(e.isEnabled)) goto L_168;
  if (!(!W.isVersionAtLeast(27))) goto L_f5;
  throw new Error("Subscription pricing requires the current native purchase host.");
  this.invokeHostOperation("plan selection ".concat(e.id), function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=137B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: this, e
function {
  return this.context.host.selectPackage(e.id);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=361B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e
// locals: this
// closure: W
function {
  this = this;
  if (!(!this.interactionDisabled)) goto L_168;
  if (!(e.isEnabled)) goto L_168;
  if (!((e.id !== this.pricingPresentation.selectedPackageId))) goto L_168;
  if (!(!W.isVersionAtLeast(27))) goto L_f5;
  throw new Error("Subscription pricing requires the current native purchase host.");
  this.invokeHostOperation("package selection ".concat(e.id), function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=7 closure=4 cpool=0 bc=1814B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: t
// locals: i, r, e, e#1, o, this
// closure: J, O, W, e
function {
  this = this;
  let r;
  let i;
  if ((this.isActionDisabled(t, false))) goto L_58;
  if (!(t.isLoading)) goto L_5b;
  return;
  i = (t.kind === J.SubscriptionPricingActionKind.Purchase);
  r = O.v4();
  if (!(i)) goto L_147;
  this.setState({activeActionId: t.id, activePurchaseRequestId: r});
  try { // catch -> L_622
  if (!(!W.isVersionAtLeast(27))) goto L_186;
  throw new Error("Subscription pricing requires the current native purchase host.");
  if (!((t.kind === J.SubscriptionPricingActionKind.Purchase))) goto L_2ec;
  let e;
  e = this.pricingPresentation.selectedPackageId;
  if (!((undefined === e))) goto L_27a;
  this.setState({activeActionId: undefined, activePurchaseRequestId: undefined});
  return undefined;
  // [栈深重同步 0 -> 1]
  this.context.host.purchaseWithApple(e, r);
  goto L_61f;
  if (!((<?> === J.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_465;
  let e#1;
  if (!((this.state.observedNativeState == null))) goto L_3a7;
  this.state.observedNativeState;
  e#1 = this.viewModel.checkout.webCheckoutPlanId;
  if (!((undefined !== e#1))) goto L_461;
  this.context.host.purchaseOnWeb(e#1, r);
  goto L_61f;
  if (!((<?> === J.SubscriptionPricingActionKind.OpenLegal))) goto L_542;
  this.context.host.openLegalDocument(t.id, r);
  goto L_61f;
  if (((<?> === J.SubscriptionPricingActionKind.RestorePurchases))) goto L_61f;
  if (((<?> === J.SubscriptionPricingActionKind.Retry))) goto L_61f;
  (<?> === J.SubscriptionPricingActionKind.Dismiss);
  <?>;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_715
  if (!(i)) goto L_663;
  this.setState({activeActionId: undefined, activePurchaseRequestId: undefined});
  if (!(e.isLoggingEnabled)) goto L_712;
  console.warn("[WorkPricingPage] Native host rejected action ".concat(t.id, " (", r, "):"), o);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=149B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: t, i
// locals: r
// closure: e
function {
  try { // catch -> L_a
  i();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_94
  if (!(e.isLoggingEnabled)) goto L_91;
  console.warn("[WorkPricingPage] Native host rejected ".concat(t, ":"), r);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e
// closure: this
function {
  return this.selectPlan(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e
// closure: this
function {
  return this.selectPackage(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e
// closure: this
function {
  return this.executeNativeIntent(e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e, t
// closure: this
function {
  return this.isActionDisabled(e, t);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=4 bc=319B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this
function {
  this = this;
  return {presentation: this.pricingPresentation, nativeState: this.nativeState, activeActionId: this.state.activeActionId, interactionDisabled: this.interactionDisabled, dismissalDisabled: this.dismissalDisabled, dismiss: this.dismiss, selectPlan: function <atom:0>, selectPackage: function <atom:0>, executeNativeIntent: function <atom:0>, isActionDisabled: function <atom:0>};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=199B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this
function {
  this = this;
  null;
  this.surface;
  return {restoreSubscriptionCopy: this.restoreSubscriptionCopy, accentPalette: this.nativeAccentPalette, iconAssets: this.androidIconAssets, restorePurchases: this.restorePurchases};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=302B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: this
// closure: B, L
function {
  this = this;
  if (!(B.Device.isAndroid())) goto L_e8;
  if (!((this.nativeAccentPalette == null))) goto L_79;
  this.nativeAccentPalette;
  goto L_9a;
  if (!((undefined.accentForegroundColor == null))) goto L_12d;
  undefined.accentForegroundColor;
  return L.OAIColor.ThemeBlueDefault;
  return L.OAIColor.ThemeBlueDefault;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=322B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: t, _, a, V, L
function {
  t.beginComponent(_.Icon, a, undefined, undefined);
  t.setViewModelProperty("src", V.getIconAsset("x"));
  t.setViewModelProperty("color", L.OAIColor.IconPrimary);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=1 bc=1041B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: t, g, ne, e, i, L, P, ee, h, this
function {
  t.beginRender(g, undefined);
  t.setAttributeStyle("style", ne.workPlan);
  if ((e)) goto L_d4;
  if (!((true !== i.isDarkMode))) goto L_d9;
  goto L_11e;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("backgroundColor", L.OAIColor.BgGrouped);
  t.setAttributeString("accessibilityId", "subscription-pricing-selected-plan-".concat(P.id));
  if (!(e)) goto L_1cd;
  goto L_1cf;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("marginLeft", 8);
  if (!(e)) goto L_204;
  goto L_206;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("marginRight", 8);
  if (!(e)) goto L_23b;
  goto L_23d;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("borderWidth", 0.5);
  t.beginComponent(ee.WorkPricingComparison, h, undefined, undefined);
  if (!((i.featuresTitle == null))) goto L_2e5;
  i.featuresTitle;
  t.setViewModelProperty("featuresTitle", "");
  if (!((i.comparisonPlanTitle == null))) goto L_33c;
  i.comparisonPlanTitle;
  t.setViewModelProperty("comparisonTitle", "");
  t.setViewModelProperty("plan", P);
  t.setViewModelProperty("accentColor", this.accentColor);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=15 cpool=1 bc=1288B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: t, g, ne, e, i, L, P, ee, h, this, p, u, v, H, b
function {
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", ne.scroll);
  if (!(e)) goto L_af;
  goto L_b0;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("marginTop", undefined);
  t.beginRender(u, undefined);
  t.setAttributeStyle("style", ne.workBody);
  if (!(e)) goto L_163;
  goto L_164;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingTop", 4);
  if (!(e)) goto L_19a;
  goto L_19c;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingLeft", 24);
  if (!(e)) goto L_1d2;
  goto L_1d4;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingRight", 24);
  this.renderHero(P);
  this.renderPlanPicker();
  if (!((undefined !== P))) goto L_237;
  function <atom:0>();
  if (!((undefined !== i.errorMessage))) goto L_4b7;
  t.beginRender(v, undefined);
  t.setAttributeStyle("style", ne.error);
  t.beginComponent(H.Text, b, undefined, undefined);
  t.setViewModelProperty("value", i.errorMessage);
  t.setViewModelProperty("size", L.OAITextSize.BodyMedium);
  t.setViewModelProperty("tone", H.TextTone.Danger);
  t.endComponent();
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=31 cpool=2 bc=2613B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: t, _, a, V, L, g, ne, e, i, P, ee, h, this, p, u, v, H, b, o, n, s, E, c, F, d, T, l, S, A, y, z
function {
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", ne.root);
  if (!((true === i.isDarkMode))) goto L_116;
  goto L_117;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("backgroundColor", undefined);
  if (!(e)) goto L_14c;
  goto L_14e;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingBottom", 32);
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", ne.workHeader);
  if (!(e)) goto L_201;
  goto L_203;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("height", 96);
  if (!(e)) goto L_239;
  goto L_23b;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingLeft", 14);
  if (!(e)) goto L_271;
  goto L_273;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingRight", 14);
  if (!(e)) goto L_2a8;
  goto L_2aa;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingTop", 24);
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", ne.workHeaderSpacer);
  t.endRender();
  t.beginComponent(E.Pressable, c, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", i.closeAccessibilityLabel);
  t.setViewModelProperty("disabled", this.dismissalDisabled);
  t.setViewModelProperty("onPress", this.dismiss);
  t.setViewModelProperty("style", ne.workDismissAction);
  if (!(e)) goto L_519;
  goto L_55e;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("background", L.OAIColor.BgPrimary);
  if (!(e)) goto L_593;
  goto L_5d8;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("disabledStyle", F.subscriptionPricingAndroidStyles.nativeAndroidDisabledDismissAction);
  if (!(e)) goto L_60d;
  goto L_652;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("pressedStyle", F.subscriptionPricingAndroidStyles.nativeAndroidPressedDismissAction);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  if (!(i.isLoading)) goto L_8e5;
  if (!((undefined === P))) goto L_8e5;
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", ne.loading);
  t.beginComponent(T.ActivityIndicator, l, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", i.title);
  t.setViewModelProperty("size", T.ActivityIndicatorSize.Medium);
  t.endComponent();
  goto L_8e8;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  if (!((undefined !== S))) goto L_919;
  S.renderPurchaseRestriction();
  if (!((undefined !== S))) goto L_951;
  goto L_a0c;
  // [栈深重同步 1 -> 0]
  new z.SubscriptionPricingAndroidCheckout(this.androidSurface, z.AndroidPricingCheckoutAppearance.Work).render(A, y);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=8 closure=29 cpool=1 bc=751B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: e, i, P, m, A, y, S, this
// closure: t, _, a, V, L, g, ne, ee, h, p, u, v, H, b, o, n, s, E, c, F, d, T, l, z, B, G, te, D, r
function {
  this = this;
  let S;
  let y;
  let A;
  let m;
  let P;
  let i;
  let e;
  e = B.Device.isIOS();
  i = this.pricingPresentation;
  P = G.selectedSubscriptionPricingPlan(i);
  m = G.availableSubscriptionPricingActions(i.actions);
  A = G.primarySubscriptionPricingAction(m);
  if (!((A == null))) goto L_154;
  A;
  goto L_175;
  y = G.secondarySubscriptionPricingActions(m, undefined.id);
  if (!(e)) goto L_1ca;
  goto L_1cb;
  // [栈深重同步 1 -> 0]
  S = undefined;
  t.beginComponent(D.OAITheme, r, undefined, undefined);
  t.setViewModelProperty("fill", true);
  t.setViewModelProperty("mode", this.themeMode);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=513B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: t, m, ne, _, A, V, e, this
function {
  t.beginRender(m, undefined);
  t.setAttributeStyle("style", ne.iosArtwork);
  t.beginComponent(_.Icon, A, undefined, undefined);
  if (!((e == null))) goto L_12b;
  e;
  goto L_14c;
  if (!(("go" === undefined.id))) goto L_156;
  goto L_15b;
  // [栈深重同步 5 -> 4]
  t.setViewModelProperty("src", V.getIconAsset("sparkles-filled"));
  t.setViewModelProperty("color", this.accentColor);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=2 bc=1221B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: t, y, ne, S, _, k, N, this, I, w
function {
  t.beginRender(y, undefined);
  t.setAttributeStyle("style", ne.workArtwork);
  t.beginRender(S, undefined);
  t.setAttributeStyle("style", ne.workLargeSparkle);
  t.beginComponent(_.Icon, k, undefined, undefined);
  t.setViewModelProperty("src", N.default.workSparkle);
  t.setViewModelProperty("size", 57.6);
  t.setViewModelProperty("color", this.accentColor);
  t.endComponent();
  t.endRender();
  t.beginRender(I, undefined);
  t.setAttributeStyle("style", ne.workSmallSparkle);
  t.beginComponent(_.Icon, w, undefined, undefined);
  t.setViewModelProperty("src", N.default.workSparkle);
  t.setViewModelProperty("size", 22.4);
  t.setViewModelProperty("color", this.accentColor);
  t.endComponent();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=580B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: t, H, M, this, o, i
function {
  t.beginComponent(H.Text, M, undefined, undefined);
  t.setViewModelProperty("value", this.pricingPresentation.subtitle);
  if (!((o == null))) goto L_f5;
  o;
  goto L_116;
  t.setViewModelProperty("font", undefined.font);
  if (!((o == null))) goto L_14e;
  o;
  goto L_16f;
  t.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  if (!(i)) goto L_1a4;
  goto L_1a6;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("letterSpacing", 0.25);
  t.setViewModelProperty("tone", H.TextTone.Secondary);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=9 closure=20 cpool=3 bc=1585B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e
// locals: i, r, o, n, s, c, a, this
// closure: t, m, ne, _, A, V, y, S, k, N, I, w, H, M, B, X, Q, K, P, C
function {
  this = this;
  let a;
  let c;
  let s;
  let n;
  let o;
  let r;
  let i;
  i = B.Device.isIOS();
  r = X.workPricingTextStyle(Q.SubscriptionPricingTextRole.HeroTitle);
  o = X.workPricingTextStyle(Q.SubscriptionPricingTextRole.HeroSubtitle);
  n = this.pricingPresentation.title;
  s = new K.AttributedTextBuilder();
  if (!((e == null))) goto L_1af;
  e;
  goto L_1d0;
  c = undefined.title;
  if (!(!i)) goto L_24b;
  if (!((e == null))) goto L_1e8;
  e;
  goto L_209;
  if (!(("go" === undefined.id))) goto L_24b;
  if (!((undefined !== c))) goto L_24b;
  if (!((c.length > 0))) goto L_24b;
  a = n.endsWith(c);
  if (!(a)) goto L_30b;
  if (!((undefined !== c))) goto L_30b;
  s.append(n.slice(0, -c.length));
  s.append(c, {color: this.accentColor});
  t.beginRender(P, undefined);
  t.setAttributeStyle("style", ne.workHero);
  if (!(i)) goto L_3bb;
  goto L_3bd;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("gap", 8);
  if (!(i)) goto L_3f3;
  goto L_3f4;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingBottom", undefined);
  if (!(i)) goto L_402;
  goto L_405;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.beginRender(C, undefined);
  if (!((r == null))) goto L_466;
  r;
  goto L_487;
  t.setAttributeString("font", undefined.font);
  if (!((r == null))) goto L_4bf;
  r;
  goto L_4e0;
  t.setAttributeNumber("lineHeightMultiple", undefined.lineHeightMultiple);
  t.setAttributeStyle("style", ne.workTitle);
  if (!(a)) goto L_58c;
  goto L_58f;
  // [栈深重同步 4 -> 3]
  t.setAttribute("value", n);
  t.endRender();
  if (!((undefined !== this.pricingPresentation.subtitle))) goto L_608;
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/WorkPricingPage
// closure: this, r
function {
  return this.selectPlan(r);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=10 cpool=1 bc=1781B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: r
// locals: o, n
// closure: this, t, R, ne, e, L, H, x, U, i
function {
  let n;
  let o;
  o = (r.id === this.pricingPresentation.selectedPlanId);
  if ((this.pricingPresentation.isPurchasing)) goto L_120;
  if (((undefined !== this.state.activeActionId))) goto L_120;
  n = !r.isEnabled;
  t.beginRender(R, r.id);
  t.setAttributeStyle("style", ne.workPlanOption);
  t.setAttributeString("accessibilityId", "subscription-pricing-plan-".concat(r.id));
  t.setAttributeString("accessibilityLabel", r.title);
  t.setAttribute("accessibilityStateDisabled", n);
  t.setAttribute("accessibilityStateSelected", o);
  if (!(e)) goto L_318;
  goto L_319;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("minHeight", undefined);
  if (!(e)) goto L_34f;
  goto L_350;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingTop", undefined);
  if (!(e)) goto L_386;
  goto L_387;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingBottom", undefined);
  if (!(o)) goto L_46e;
  if (!(this.usesNativeIOSDarkAppearance)) goto L_427;
  goto L_46f;
  // [栈深重同步 4 -> 3]
  goto L_46f;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("backgroundColor", undefined);
  if (!(n)) goto L_4a4;
  goto L_4a6;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onTap", function <atom:0>);
  t.beginComponent(H.Text, x, undefined, undefined);
  t.setViewModelProperty("value", r.title);
  if (!(e)) goto L_5ee;
  if (!(!o)) goto L_5ee;
  if (!((true !== this.highContrastInactivePlanLabels))) goto L_5ee;
  goto L_5ef;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("color", undefined);
  if (!((i == null))) goto L_627;
  i;
  goto L_648;
  t.setViewModelProperty("font", undefined.font);
  if (!((i == null))) goto L_680;
  i;
  goto L_6a1;
  t.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=11 cpool=1 bc=908B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: e, i, this
// closure: t, R, ne, L, H, x, U, B, X, Q, f
function {
  this = this;
  let i;
  let e;
  if (!((this.pricingPresentation.plans.length < 2))) goto L_51;
  return;
  e = B.Device.isIOS();
  i = X.workPricingTextStyle(Q.SubscriptionPricingTextRole.PlanOption);
  t.beginRender(f, undefined);
  t.setAttributeStyle("style", ne.workPlanPicker);
  if (!(e)) goto L_1b3;
  goto L_1b5;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("marginLeft", 32);
  if (!(e)) goto L_1ea;
  goto L_1ec;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("marginRight", 32);
  if (!(e)) goto L_225;
  goto L_227;
  // [栈深重同步 4 -> 3]
  t.setAttribute("height", 44);
  if (!(e)) goto L_25c;
  goto L_25d;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("padding", 3);
  if (!(this.usesNativeIOSDarkAppearance)) goto L_2f5;
  goto L_2f6;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("backgroundColor", undefined);
  this.pricingPresentation.plans.map(function <atom:0>);
  t.endRender();
  return;
}

// fn se  args=1 vars=2 closure=1 cpool=0 bc=105B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: e
// locals: t
// closure: V
function {
  let t;
  t = V.getIconAsset(e);
  if (!((undefined === t))) goto L_65;
  throw new Error("Subscription pricing is missing required Android icon asset: ".concat(e));
  return t;
}

// fn <atom:0>  args=3 vars=70 closure=0 cpool=30 bc=2613B file=chatgpt_subscription_pricing/src/WorkPricingPage
// args: require, module, exports
// locals: e, t, i, r, o, n, s, c, a, d, l, p, u, g, h, v, b, P, m, A, y, S, k, I, w, C, M, f, R, x, N, V, O, D, L, q, T, _, E, H, W, j, B, K, z, Y, F, U, J, Z, $, G, Q, X, ee, te, ie, re, oe, ne, WorkPricingPage, <class_fields_init>, WorkPricingPage#1, WorkPricingSurface, <class_fields_init>#1, WorkPricingSurface#1, se
function {
  se = function se;
  let WorkPricingSurface#1;
  let WorkPricingPage#1;
  let ne;
  let oe;
  let re;
  let ie;
  let te;
  let ee;
  let X;
  let Q;
  let G;
  let $;
  let Z;
  let J;
  let U;
  let F;
  let Y;
  let z;
  let K;
  let B;
  let j;
  let W;
  let H;
  let E;
  let _;
  let T;
  let q;
  let L;
  let D;
  let O;
  let V;
  let N;
  let x;
  let R;
  let f;
  let M;
  let C;
  let w;
  let I;
  let k;
  let S;
  let y;
  let A;
  let m;
  let P;
  let b;
  let v;
  let h;
  let g;
  let u;
  let p;
  let l;
  let d;
  let a;
  let c;
  let s;
  let n;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WorkPricingPage = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeComponentPrototype(undefined, "VJSxT6QELIjo4VVT");
  r = t.makeComponentPrototype(undefined, "YKCAv7I2JIA5EHHF");
  o = t.makeNodePrototype("view", ["accessibilityId", "work-pricing-page"], "dgsSJk2EfZMO_6mx");
  n = t.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-header"], "JFL4OjKfL9Sj9inO");
  s = t.makeNodePrototype("layout", undefined, "TQ8vzMwM_LVQMURb");
  c = t.makeComponentPrototype(["accessibilityId", "subscription-pricing-dismiss"], "DOSftPLWefRNgjxW");
  a = t.makeComponentPrototype(["size", 24], "WHNuWpbM2OZhbCRN");
  d = t.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-loading"], "KGMRZAG4DKKQtNs3");
  l = t.makeComponentPrototype(undefined, "Z7PZ_13mKHNoXc6U");
  p = t.makeNodePrototype("scroll", ["accessibilityId", "subscription-pricing-scroll"], "Uu_NU_MMaEqeugGB");
  u = t.makeNodePrototype("layout", ["gap", 16], "8Uh7eD0QbFzYAcek");
  g = t.makeNodePrototype("view", undefined, "CHFkVzcgeRSFvD6O");
  h = t.makeComponentPrototype(undefined, "-OD7rQ1Nu67hhuIt");
  v = t.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-error"], "Nj-Lr2RV3wtL3Pzh");
  b = t.makeComponentPrototype(["align", "center", "lines", 0], "sPd0aYlWs0cYBo9q");
  P = t.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-hero"], "Rtl-uYVBEms8ndRi");
  m = t.makeNodePrototype("layout", undefined, "ZIhjYoAs3A98HagO");
  A = t.makeComponentPrototype(["size", 42], "5Ft--yY5u09453_T");
  y = t.makeNodePrototype("layout", undefined, "SX6kgoA9xVcrW-rT");
  S = t.makeNodePrototype("layout", undefined, "yooN2MYbaYrY5ZrT");
  k = t.makeComponentPrototype(undefined, "pOwNjCvk6sqcJ4fT");
  I = t.makeNodePrototype("layout", undefined, "4jehx8FOeESP4R9J");
  w = t.makeComponentPrototype(undefined, "_uMYJcJE14YfN6Br");
  C = t.makeNodePrototype("label", undefined, "EaBrohGho36exhrI");
  M = t.makeComponentPrototype(["align", "center", "lines", 0], "kbcqdtUVECMhXbgA");
  f = t.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-plan-picker"], "8HnyiSFwMl-kpVE7");
  R = t.makeNodePrototype("view", ["accessibilityCategory", "radio"], "dMhjZg1CEZAtUQL3");
  x = t.makeComponentPrototype(["align", "center"], "LjrpyHK3KSAPj-Bt");
  N = require("chatgpt_subscription_pricing/res");
  V = require("dil_icon_assets/src/IconAssets");
  O = require("foundation/src/uuid");
  D = require("oai_core/src/OAITheme");
  L = require("oai_core/src/OAITokens");
  q = require("oai_platform_services/src/OAIExperimentService");
  T = require("oai_ui/src/components/ActivityIndicator");
  _ = require("oai_ui/src/components/Icon");
  E = require("oai_ui/src/components/Pressable");
  H = require("oai_ui/src/components/Text");
  W = require("valdi_core/src/CompilerIntrinsics");
  j = require("valdi_core/src/Component");
  B = require("valdi_core/src/Device");
  K = require("valdi_core/src/utils/AttributedTextBuilder");
  z = require("./SubscriptionPricingAndroidCheckout");
  Y = require("./SubscriptionPricingOverrides");
  F = require("./SubscriptionPricingAndroidStyles");
  U = require("./SubscriptionPricingCapabilities");
  J = require("./SubscriptionPricingModels");
  Z = require("./SubscriptionPricingProjection");
  $ = require("./SubscriptionPricingSharedStyles");
  G = require("./SubscriptionPricingState");
  Q = require("./SubscriptionPricingTypography");
  X = require("./WorkPricingAppearance");
  ee = require("./WorkPricingComparison");
  te = require("./WorkPricingIOSCheckout");
  ie = require("./WorkPricingStyles");
  re = "ios_subscription_pricing_tab_tone";
  oe = "high_contrast_inactive_tab_labels";
  null;
  $.subscriptionPricingSharedStyles;
  null;
  ie.workPricingStyles;
  ne = {};
  let WorkPricingPage;
  let <class_fields_init>;
  class WorkPricingPage extends j.Component { ... }
  <proto:WorkPricingPage>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WorkPricingPage>;
  WorkPricingPage = function <atom:0>;
  // close_loc <class_fields_init>
  WorkPricingPage#1 = function <atom:0>;
  exports.WorkPricingPage = WorkPricingPage#1;
  let WorkPricingSurface;
  let <class_fields_init>#1;
  class WorkPricingSurface extends j.StatefulComponent { ... }
  <proto:WorkPricingSurface>.onCreate = function <atom:0>;
  <proto:WorkPricingSurface>.onViewModelUpdate = function <atom:0>;
  <proto:WorkPricingSurface>.pricingPresentation = function <atom:0>;
  <proto:WorkPricingSurface>.reconciledActiveActionId = function <atom:0>;
  <proto:WorkPricingSurface>.themeMode = function <atom:0>;
  <proto:WorkPricingSurface>.usesNativeIOSDarkAppearance = function <atom:0>;
  <proto:WorkPricingSurface>.projectPresentation = function <atom:0>;
  <proto:WorkPricingSurface>.readIOSPlanTabTone = function <atom:0>;
  <proto:WorkPricingSurface>.presentationExperiments = function <atom:0>;
  <proto:WorkPricingSurface>.nativeState = function <atom:0>;
  <proto:WorkPricingSurface>.restoreSubscriptionCopy = function <atom:0>;
  <proto:WorkPricingSurface>.nativeAccentPalette = function <atom:0>;
  <proto:WorkPricingSurface>.androidIconAssets = function <atom:0>;
  <proto:WorkPricingSurface>.interactionDisabled = function <atom:0>;
  <proto:WorkPricingSurface>.dismissalDisabled = function <atom:0>;
  <proto:WorkPricingSurface>.isActionDisabled = function <atom:0>;
  <proto:WorkPricingSurface>.selectPlan = function <atom:0>;
  <proto:WorkPricingSurface>.selectPackage = function <atom:0>;
  <proto:WorkPricingSurface>.executeNativeIntent = function <atom:0>;
  <proto:WorkPricingSurface>.invokeHostOperation = function <atom:0>;
  <proto:WorkPricingSurface>.surface = function <atom:0>;
  <proto:WorkPricingSurface>.androidSurface = function <atom:0>;
  <proto:WorkPricingSurface>.accentColor = function <atom:0>;
  <proto:WorkPricingSurface>.onRender = function <atom:0>;
  <proto:WorkPricingSurface>.renderHero = function <atom:0>;
  <proto:WorkPricingSurface>.renderPlanPicker = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:WorkPricingSurface>;
  WorkPricingSurface = function <atom:0>;
  // close_loc <class_fields_init>#1
  WorkPricingSurface#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/WorkPricingPage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
