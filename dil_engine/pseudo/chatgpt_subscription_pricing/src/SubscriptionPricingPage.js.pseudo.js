// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
function {
  e.LegacyAndroid = 0;
  e[0] = "LegacyAndroid";
  e.Existing = 1;
  e[1] = "Existing";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
function {
  e.Primary = 0;
  e[0] = "Primary";
  e.Secondary = 1;
  e[1] = "Secondary";
  e.EqualHorizontal = 2;
  e[2] = "EqualHorizontal";
  e.EqualVertical = 3;
  e[3] = "EqualVertical";
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=621B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: e, i
// closure: this
function {
  let i;
  let e;
  if (!(this.isDestroyed())) goto L_30;
  return;
  if (!((this.selectedPlanOptionRef.single() == null))) goto L_80;
  this.selectedPlanOptionRef.single();
  goto L_a1;
  e = undefined.frame;
  i = this.state.planIndicatorFrame;
  if (((undefined === e))) goto L_26c;
  if (!((i == null))) goto L_ff;
  i;
  goto L_120;
  if (!((undefined.x === e.x))) goto L_232;
  if (!((i.y === e.y))) goto L_232;
  if (!((i.width === e.width))) goto L_232;
  if (((i.height === e.height))) goto L_26c;
  null;
  e;
  this.setState({planIndicatorFrame: {}});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=105B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: this
function {
  return this.context.host.dismiss();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=144B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: this, vi
function {
  if (!(!this.dismissalDisabled)) goto L_8f;
  if (!(!vi.isVersionAtLeast(27))) goto L_60;
  throw new Error("Subscription pricing requires the current native purchase host.");
  this.invokeHostOperation("dismissal", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=42B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: e, t
function {
  return e.restorePurchases(t);   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=1 bc=456B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: e, i, t
// closure: Si, vi, this, Je
function {
  if (!(Si.Device.isAndroid())) goto L_1c7;
  if (!(vi.isVersionAtLeast(31))) goto L_1c7;
  let t;
  let i;
  let e;
  e = this.context.restoreHost;
  i = this.nativeState.strings.restoreSubscription;
  if (((undefined === e))) goto L_13d;
  if (!((undefined === i))) goto L_140;
  return;
  t = Je.v4();
  this.invokeHostOperation("purchase restoration (".concat(t, ")"), function <atom:0>);
  // close_loc t
  // close_loc e
  return;
}

// fn <atom:0>  args=0 vars=4 closure=7 cpool=3 bc=260B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this, this.active_func, new.target, arguments
// closure: vi, Si, Je, <class_fields_init>, Hi, Bi, yi
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
  this.iosGoFeatures = new Hi.SubscriptionPricingIOSGoFeatures();
  this.iosProFeatures = new Bi.SubscriptionPricingIOSProFeatures();
  this.selectedPlanOptionRef = new yi.ElementRef();
  this.handlePlanPickerLayoutComplete = function <atom:0>;
  this.dismiss = function <atom:0>;
  this.restorePurchases = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=276B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: i, t, o
// closure: this
function {
  let o;
  let t;
  let i;
  i = this.presentation;
  t = this.projectPresentation(e);
  this.presentation = t;
  o = this.reconciledActiveActionId(i, t, e);
  if (!((undefined === o))) goto L_c2;
  goto L_105;
  // [栈深重同步 4 -> 3]
  this.setState({activeActionId: o, activePurchaseRequestId: this.state.activePurchaseRequestId, observedNativeState: e});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=304B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this
// closure: Si, bi, zi, Pi, Mi
function {
  this = this;
  if (!(Si.Device.isIOS())) goto L_c0;
  bi.overrideLocales(zi.default, Pi.getCurrentLocales, "en");
  this.registerDisposable(Mi.subscribeToSubscriptionPricingState(this.context, function <atom:0>));
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=524B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: i, t, this
function {
  this = this;
  let t;
  let i;
  if (!((undefined !== this.state.observedNativeState))) goto L_50;
  return;
  if (!((undefined === e))) goto L_58;
  goto L_7e;
  // [栈深重同步 1 -> 0]
  i = this.projectPresentation(e);
  this.presentation = this.projectPresentation(this.viewModel);
  t = this.reconciledActiveActionId(i, this.pricingPresentation, this.viewModel);
  if (!((t !== this.state.activeActionId))) goto L_20b;
  if (!((undefined === t))) goto L_1c0;
  goto L_203;
  // [栈深重同步 4 -> 3]
  this.setState({activeActionId: t, activePurchaseRequestId: this.state.activePurchaseRequestId});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=274B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: e, e#1, this
// closure: vi
function {
  this = this;
  let e;
  e = this.presentation;
  if (!((undefined !== e))) goto L_33;
  return e;
  if (!(vi.isVersionAtLeast(27))) goto L_103;
  let e#1;
  if (!((this.state.observedNativeState == null))) goto L_ee;
  this.state.observedNativeState;
  e#1 = this.projectPresentation(this.viewModel);
  this.presentation = e#1;
  return e#1;
  throw new Error("Subscription pricing requires the current native account state.");
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: o
function {
  return (e.id === o);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: o
function {
  return (e.id === o);
}

// fn <atom:0>  args=3 vars=11 closure=2 cpool=2 bc=935B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, i, t
// locals: o, n, r, s, a, d, c, this
// closure: Si, vi
function {
  this = this;
  let c;
  let d;
  let a;
  let s;
  let r;
  let n;
  let o;
  o = this.state.activeActionId;
  if (((undefined === o))) goto L_69;
  if (!((undefined === e))) goto L_6f;
  return o;
  n = i.actions.find(function <atom:0>);
  r = e.actions.find(function <atom:0>);
  if (!(e.isPurchasing)) goto L_14a;
  s = !i.isPurchasing;
  if (!((r == null))) goto L_158;
  r;
  goto L_179;
  if (!((true === undefined.isLoading))) goto L_1ad;
  if (!((n == null))) goto L_18b;
  n;
  goto L_1ac;
  a = (true !== undefined.isLoading);
  if (!((undefined !== i.errorMessage))) goto L_21c;
  d = (i.errorMessage !== e.errorMessage);
  c = false;
  if (!(Si.Device.isAndroid())) goto L_354;
  if (!(vi.isVersionAtLeast(39))) goto L_354;
  if (!((undefined !== this.state.activePurchaseRequestId))) goto L_350;
  c = (t.completedPurchaseRequestId === this.state.activePurchaseRequestId);
  (t.completedPurchaseRequestId === this.state.activePurchaseRequestId);
  if (((undefined === n))) goto L_39f;
  if ((!n.isEnabled)) goto L_39f;
  if ((s)) goto L_39f;
  if ((a)) goto L_39f;
  if ((d)) goto L_39f;
  if (!(c)) goto L_3a3;
  return undefined;
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: this
function {
  return this.selectPlan(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: this
function {
  return this.selectPackage(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: this
function {
  return this.executeNativeIntent(e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, i
// closure: this
function {
  return this.isActionDisabled(e, i);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=379B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: i, ji, o, n, d, p, this
function {
  i.beginComponent(ji.AndroidPricingRefreshSurface, o, undefined, undefined);
  i.setViewModelProperty("surface", n);
  i.setViewModelProperty("plan", d);
  i.setViewModelProperty("primaryAction", p);
  i.setViewModelProperty("openComparePlans", this.context.openComparePlans);
  i.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=1 bc=140B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: i, ji, o, n, d, p, this, ki, c, u
function {
  if (!((undefined !== this.nativeState.androidRefresh))) goto L_55;
  if (!((undefined !== d))) goto L_55;
  goto L_8b;
  // [栈深重同步 1 -> 0]
  ki.renderAndroidSubscriptionPricingSurface(n, d, c, p, u);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=13 cpool=0 bc=1464B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: i, s, Zi, Si, ti, a, g, v, y, this, d, c, S
function {
  i.beginRender(s, undefined);
  i.setAttributeStyle("style", Zi.scroll);
  if (!(Si.Device.isIOS())) goto L_138;
  goto L_139;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("marginTop", undefined);
  i.beginRender(a, undefined);
  i.setAttributeStyle("style", Zi.body);
  if (!(g)) goto L_22f;
  goto L_27c;
  // [栈深重同步 4 -> 3]
  if (!(v)) goto L_27b;
  goto L_27c;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("gap", undefined);
  if (!(g)) goto L_2b1;
  goto L_2fe;
  // [栈深重同步 4 -> 3]
  if (!(v)) goto L_2fd;
  goto L_2fe;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingLeft", undefined);
  if (!(g)) goto L_333;
  goto L_380;
  // [栈深重同步 4 -> 3]
  if (!(v)) goto L_37f;
  goto L_380;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingRight", undefined);
  if (!(g)) goto L_3b6;
  goto L_448;
  // [栈深重同步 4 -> 3]
  if (!(Si.Device.isIOS())) goto L_447;
  goto L_448;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingTop", undefined);
  if (!(y)) goto L_47a;
  goto L_4a4;
  // [栈深重同步 1 -> 0]
  this.renderHero(d);
  if ((y)) goto L_4dd;
  if ((g)) goto L_4dd;
  this.renderPlanPicker(d);
  if (!((undefined !== d))) goto L_514;
  this.renderPlan(d, c);
  this.renderError();
  this.renderContentLegalDisclosure(S);
  i.endRender();
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=16 cpool=1 bc=878B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: i, s, Zi, Si, ti, a, g, v, y, this, d, c, S, r, p, u
function {
  i.beginRender(r, undefined);
  i.setAttributeStyle("style", Zi.root);
  if (!(this.usesNativeIOSDarkAppearance)) goto L_113;
  goto L_114;
  // [栈深重同步 4 -> 3]
  i.setAttributeString("backgroundColor", undefined);
  if (!(Si.Device.isIOS())) goto L_1d2;
  goto L_217;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingBottom", ti.OAISpacing.Two);
  this.renderHeader();
  if (!(y)) goto L_278;
  if (!((undefined === S))) goto L_278;
  goto L_27b;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  this.renderPurchaseRestriction();
  this.renderFooter(p, u);
  if (!(Si.Device.isIOS())) goto L_345;
  this.renderDismissButton();
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=12 closure=17 cpool=6 bc=2002B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: e, d, c, l, p, u, n, g, v, S, y, this
// closure: i, ji, o, ki, s, Zi, Si, ti, a, r, Vi, Wi, ii, t, Fi, Ti, n
function {
  this = this;
  let y;
  let S;
  let v;
  let g;
  let u;
  let p;
  let l;
  let c;
  let d;
  let e;
  e = this.pricingPresentation;
  d = Vi.selectedSubscriptionPricingPlan(e);
  c = Vi.selectedSubscriptionPricingPackage(d, e.selectedPackageId);
  l = Vi.availableSubscriptionPricingActions(e.actions);
  p = Vi.primarySubscriptionPricingAction(l);
  if (!((p == null))) goto L_161;
  p;
  goto L_182;
  u = Vi.secondarySubscriptionPricingActions(l, undefined.id);
  if (!((this.presentationVariant === Wi.LegacyAndroid))) goto L_4c2;
  let n;
  null;
  {presentation: e, nativeState: this.nativeState, activeActionId: this.state.activeActionId, interactionDisabled: this.interactionDisabled, dismissalDisabled: this.dismissalDisabled, dismiss: this.dismiss, selectPlan: function <atom:0>, selectPackage: function <atom:0>, executeNativeIntent: function <atom:0>, isActionDisabled: function <atom:0>};
  n = {restoreSubscriptionCopy: this.restoreSubscriptionCopy, accentPalette: this.nativeAccentPalette, iconAssets: this.androidIconAssets, restorePurchases: this.restorePurchases};
  i.beginComponent(ii.OAITheme, t, undefined, undefined);
  i.setViewModelProperty("fill", true);
  i.setViewModelProperty("mode", this.themeMode);
  i.setUnnamedSlot(function <atom:0>);
  i.endComponent();
  return;
  if (!(Si.Device.isIOS())) goto L_55f;
  if (!((d == null))) goto L_53d;
  d;
  goto L_55e;
  g = Fi.isSubscriptionPricingProPlan(undefined.id);
  if (!(Si.Device.isIOS())) goto L_615;
  if (!((d == null))) goto L_5bd;
  d;
  goto L_5de;
  if ((("go" === undefined.id))) goto L_615;
  if (!((d == null))) goto L_5f3;
  d;
  goto L_614;
  v = ("plus" === undefined.id);
  S = Ti.subscriptionPricingLegalMarkdown(this.nativeState);
  if (!(this.pricingPresentation.isLoading)) goto L_6ae;
  y = (undefined === d);
  i.beginComponent(ii.OAITheme, n, undefined, undefined);
  i.setViewModelProperty("fill", true);
  i.setViewModelProperty("mode", this.themeMode);
  i.setUnnamedSlot(function <atom:0>);
  i.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=352B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this
// closure: ii
function {
  this = this;
  if (!((undefined === this.pricingPresentation.isDarkMode))) goto L_8f;
  return ii.OAIThemeMode.System;
  if (!(this.pricingPresentation.isDarkMode)) goto L_11a;
  return ii.OAIThemeMode.Dark;
  return ii.OAIThemeMode.Light;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=144B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: Si, Wi
function {
  if (!(Si.Device.isAndroid())) goto L_6d;
  return Wi.LegacyAndroid;
  return Wi.Existing;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=149B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this
// closure: Si
function {
  this = this;
  if (!(Si.Device.isIOS())) goto L_94;
  return (true === this.pricingPresentation.isDarkMode);
}

// fn <atom:0>  args=1 vars=5 closure=4 cpool=0 bc=1099B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: i, i#1, t, this
// closure: Si, _i, Mi, vi
function {
  this = this;
  let t;
  let i#1;
  if (!(Si.Device.isAndroid())) goto L_23a;
  let i;
  i = e.androidRefresh;
  if (!((undefined !== i))) goto L_118;
  return _i.applyAndroidPricingRefreshCopy(Mi.projectAndroidSubscriptionPricingNativeState(e, this.context.experiments), e, i);
  if (!(vi.isVersionAtLeast(28))) goto L_1d0;
  return Mi.projectAndroidSubscriptionPricingNativeStateWithPresentationExperiments(e, this.context.experiments, this.presentationExperiments);
  return Mi.projectAndroidSubscriptionPricingNativeState(e, this.context.experiments);
  i#1 = false;
  if (!(vi.isVersionAtLeast(70))) goto L_2df;
  if (!((this.context.host.supportsAppleCheckoutFallback == null))) goto L_2d7;
  this.context.host.supportsAppleCheckoutFallback;
  this.context.host;
  goto L_2da;
  // [栈深重同步 2 -> 3]
  i#1 = (true === <?>.call(undefined));
  (true === <?>.call(undefined));
  t = Mi.projectSubscriptionPricingNativeState(e, this.context.experiments, i#1);
  this.readIOSPlanTabTone(t);
  return this.iosProFeatures.apply(this.iosGoFeatures.apply(t, e, this.context), e, this.context);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=6 cpool=0 bc=505B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: i
// locals: e, t, this
// closure: Si, Ti, oi, Qi, Ui, e
function {
  this = this;
  if (!(Si.Device.isIOS())) goto L_1f8;
  if (!(!(i.plans.length < 2))) goto L_1f8;
  if (!((undefined === this.highContrastInactivePlanLabels))) goto L_1f8;
  try { // catch -> L_18b
  let e;
  if (!((Ti.subscriptionPricingPlatformServices(this.context) == null))) goto L_fa;
  Ti.subscriptionPricingPlatformServices(this.context);
  goto L_11b;
  e = undefined.experimentService;
  if (!((oi.experimentLayer(e, Qi) == null))) goto L_150;
  oi.experimentLayer(e, Qi);
  goto L_179;
  if (!((undefined.getBoolean(Ui, false) == null))) goto L_180;
  undefined.getBoolean(Ui, false);
  this.highContrastInactivePlanLabels = false;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_1f7
  this.highContrastInactivePlanLabels = false;
  if (!(e.isLoggingEnabled)) goto L_1f4;
  console.warn("[SubscriptionPricingPage] Could not read the iOS tab tone; using native contrast:", t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=5 closure=4 cpool=0 bc=443B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: e, i, t, e#1, this
// closure: Si, Ti, vi, Oi
function {
  this = this;
  let t;
  let i;
  let e;
  if (!(!Si.Device.isAndroid())) goto L_58;
  return;
  e = this.context.presentationExperiments;
  if (!((undefined !== e))) goto L_a8;
  return e;
  i = this.androidPresentationExperiments;
  if (!((undefined !== i))) goto L_d7;
  return i;
  if (!((Ti.subscriptionPricingPlatformServices(this.context) == null))) goto L_127;
  Ti.subscriptionPricingPlatformServices(this.context);
  goto L_148;
  t = undefined.experimentService;
  if (!((undefined !== t))) goto L_1ba;
  if (!(vi.isVersionAtLeast(28))) goto L_1ba;
  let e#1;
  e#1 = new Oi.SubscriptionPricingAndroidPresentationExperiments(t);
  this.androidPresentationExperiments = e#1;
  return e#1;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=109B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this
function {
  this = this;
  if (!((this.state.observedNativeState == null))) goto L_6c;
  this.state.observedNativeState;
  return this.viewModel;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=300B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this
// closure: Si, vi
function {
  this = this;
  if (!(Si.Device.isAndroid())) goto L_12b;
  if (!(vi.isVersionAtLeast(31))) goto L_129;
  if (!((undefined === this.context.restoreHost))) goto L_c4;
  return undefined;
  return this.nativeState.strings.restoreSubscription;
  return undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=188B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this
// closure: Si, vi
function {
  this = this;
  if (!(Si.Device.isAndroid())) goto L_bb;
  if (!(vi.isVersionAtLeast(31))) goto L_b9;
  return this.nativeState.accentPalette;
  return undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=50B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: Ji
function {
  return {check: Ji("check"), checkLg: Ji("check-lg"), externalLink: Ji("external-link"), minus: Ji("minus")};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=217B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this
function {
  this = this;
  if ((this.pricingPresentation.isLoading)) goto L_d8;
  if ((this.pricingPresentation.isPurchasing)) goto L_d8;
  return (undefined !== this.state.activeActionId);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=143B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this
function {
  this = this;
  if ((this.pricingPresentation.isPurchasing)) goto L_8e;
  return (undefined !== this.state.activeActionId);
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=0 bc=1741B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this
// closure: i, d, Zi, Si, ti, c, l, p
function {
  this = this;
  i.beginRender(d, undefined);
  i.setAttributeStyle("style", Zi.header);
  if (!(Si.Device.isIOS())) goto L_f9;
  goto L_fa;
  // [栈深重同步 4 -> 3]
  i.setAttributeString("alignSelf", undefined);
  if (!(Si.Device.isIOS())) goto L_1b8;
  goto L_1b9;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingLeft", undefined);
  if (!(Si.Device.isIOS())) goto L_277;
  goto L_278;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingRight", undefined);
  if (!(Si.Device.isIOS())) goto L_37f;
  goto L_380;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("width", undefined);
  if (!(Si.Device.isAndroid())) goto L_3f6;
  goto L_49a;
  // [栈深重同步 1 -> 0]
  i.beginRender(c, undefined);
  i.setAttributeStyle("style", Zi.headerSpacer);
  i.endRender();
  i.beginRender(l, undefined);
  i.setAttributeStyle("style", Zi.headerTitle);
  i.endRender();
  if (!(Si.Device.isAndroid())) goto L_633;
  i.beginRender(p, undefined);
  i.setAttributeStyle("style", Zi.headerSpacer);
  goto L_6a4;
  // [栈深重同步 1 -> 0]
  if ((Si.Device.isIOS())) goto L_6a4;
  this.renderDismissButton();
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=0 bc=1185B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this
// closure: Si, i, fi, u, Zi, ci, g
function {
  this = this;
  if (!(Si.Device.isIOS())) goto L_297;
  i.beginComponent(fi.SubscriptionPricingDismissButton, u, undefined, undefined);
  i.setViewModelProperty("accessibilityLabel", this.pricingPresentation.closeAccessibilityLabel);
  i.setViewModelProperty("disabled", this.dismissalDisabled);
  i.setViewModelProperty("onPress", this.dismiss);
  if (!(this.usesNativeIOSDarkAppearance)) goto L_246;
  if (!(!this.dismissalDisabled)) goto L_246;
  goto L_26a;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("style", Zi.nativeIOSDismissAction);
  i.endComponent();
  return;
  i.beginComponent(ci.IconButton, g, undefined, undefined);
  i.setViewModelProperty("accessibilityLabel", this.pricingPresentation.closeAccessibilityLabel);
  i.setViewModelProperty("disabled", this.dismissalDisabled);
  i.setViewModelProperty("onPress", this.dismiss);
  if (!(Si.Device.isAndroid())) goto L_470;
  goto L_475;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("symbol", "�");
  i.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=514B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this
// closure: i, v, Zi, ri, S
function {
  this = this;
  i.beginRender(v, undefined);
  i.setAttributeStyle("style", Zi.loading);
  i.beginComponent(ri.ActivityIndicator, S, undefined, undefined);
  i.setViewModelProperty("accessibilityLabel", this.pricingPresentation.title);
  i.setViewModelProperty("size", ri.ActivityIndicatorSize.Medium);
  i.endComponent();
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=310B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: i, A, Ei, this
function {
  i.beginRender(A, undefined);
  i.setAttributeStyle("style", Ei.subscriptionPricingIOSProStyles.subtitle);
  i.setAttributeString("value", this.pricingPresentation.subtitle);
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=687B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: i, ui, O, this, t, n, ti
function {
  i.beginComponent(ui.Text, O, undefined, undefined);
  i.setViewModelProperty("value", this.pricingPresentation.subtitle);
  i.setViewModelProperty("align", t);
  if (!((n == null))) goto L_125;
  n;
  goto L_146;
  i.setViewModelProperty("font", undefined.font);
  if (!((n == null))) goto L_17e;
  n;
  goto L_19f;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.BodyMedium);
  i.setViewModelProperty("tone", ui.TextTone.Secondary);
  i.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=18 cpool=2 bc=3315B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: t, o, n, this
// closure: i, A, Ei, ui, O, ti, Si, Fi, y, b, Ni, P, h, m, Di, I, Zi, w
function {
  this = this;
  let n;
  let o;
  let t;
  if (!(Si.Device.isIOS())) goto L_4b8;
  if (!((e == null))) goto L_85;
  e;
  goto L_a6;
  if (!(Fi.isSubscriptionPricingProPlan(undefined.id))) goto L_4b8;
  i.beginRender(y, undefined);
  i.setAttributeStyle("style", Ei.subscriptionPricingIOSProStyles.hero);
  i.beginRender(b, undefined);
  i.beginComponent(Ni.SubscriptionPricingHeroMark, P, undefined, undefined);
  i.setViewModelProperty("isGo", false);
  i.endComponent();
  i.endRender();
  i.beginRender(h, undefined);
  i.setAttributeStyle("style", Ei.subscriptionPricingIOSProStyles.headerText);
  i.beginRender(m, undefined);
  i.setAttributeStyle("style", Ei.subscriptionPricingIOSProStyles.title);
  i.setAttributeString("value", this.pricingPresentation.title);
  i.endRender();
  if (!((undefined !== this.pricingPresentation.subtitle))) goto L_466;
  function <atom:0>();
  i.endRender();
  i.endRender();
  return;
  if (!(Si.Device.isAndroid())) goto L_509;
  goto L_50e;
  // [栈深重同步 1 -> 0]
  t = "center";
  o = Di.subscriptionPricingTextStyle(Di.SubscriptionPricingTextRole.HeroTitle);
  n = Di.subscriptionPricingTextStyle(Di.SubscriptionPricingTextRole.HeroSubtitle);
  i.beginRender(I, undefined);
  i.setAttributeStyle("style", Zi.hero);
  if (!(Si.Device.isAndroid())) goto L_6dc;
  goto L_6dd;
  // [栈深重同步 4 -> 3]
  i.setAttributeString("alignItems", undefined);
  if (!(Si.Device.isIOS())) goto L_84b;
  if (!((e == null))) goto L_765;
  e;
  goto L_786;
  if ((("go" === undefined.id))) goto L_7bb;
  if (!((e == null))) goto L_799;
  e;
  goto L_7ba;
  if (!(("plus" === undefined.id))) goto L_804;
  goto L_84c;
  // [栈深重同步 4 -> 3]
  goto L_84c;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingBottom", undefined);
  if (!(Si.Device.isIOS())) goto L_90a;
  goto L_90b;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingLeft", undefined);
  if (!(Si.Device.isIOS())) goto L_9c9;
  goto L_9ca;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingRight", undefined);
  if ((Si.Device.isAndroid())) goto L_a40;
  this.renderHeroMark(e);
  i.beginComponent(ui.Text, w, undefined, undefined);
  i.setViewModelProperty("value", this.pricingPresentation.title);
  i.setViewModelProperty("align", t);
  if (!((o == null))) goto L_b66;
  o;
  goto L_b87;
  i.setViewModelProperty("font", undefined.font);
  if (!((o == null))) goto L_bbf;
  o;
  goto L_be0;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.HeadlineMedium);
  i.endComponent();
  if (!((undefined !== this.pricingPresentation.subtitle))) goto L_cca;
  function <atom:0>();
  i.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=11 cpool=0 bc=1387B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: Si, i, k, Zi, ti, C, Ni, f, di, x, Ze
function {
  if ((!Si.Device.isIOS())) goto L_50;
  if (!((undefined === e))) goto L_1fe;
  i.beginRender(k, undefined);
  i.setAttributeStyle("style", Zi.heroMark);
  if (!(Si.Device.isIOS())) goto L_18c;
  goto L_1d1;
  // [栈深重同步 4 -> 3]
  i.setAttributeString("color", ti.OAIColor.ThemeBlueDefault);
  i.endRender();
  return;
  i.beginRender(C, undefined);
  i.setAttributeStyle("style", Zi.heroIcon);
  if ((("go" === e.id))) goto L_2cf;
  if (!(("plus" === e.id))) goto L_3a4;
  i.beginComponent(Ni.SubscriptionPricingHeroMark, f, undefined, undefined);
  i.setViewModelProperty("isGo", ("go" === e.id));
  goto L_542;
  // [栈深重同步 1 -> 0]
  i.beginComponent(di.Icon, x, undefined, undefined);
  i.setViewModelProperty("color", ti.OAIColor.IconAccent);
  if ((("pro" === e.id))) goto L_508;
  if (!(("prolite" === e.id))) goto L_511;
  goto L_516;
  // [栈深重同步 5 -> 4]
  i.setViewModelProperty("src", Ze.getIconAsset("sparkles-filled"));
  i.endComponent();
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=1095B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: i, pi, M, o, ni, ti, e, this
function {
  i.beginComponent(pi.SlidingSelectionIndicator, M, "plan-indicator-".concat(o.width, "-", o.height), undefined);
  i.setViewModelProperty("animation", ni.resolveOAISelectionIndicatorAnimation());
  i.setViewModelProperty("borderRadius", ti.OAIRadius.Pill);
  if (!(e.isEnabled)) goto L_1dc;
  goto L_1de;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("opacity", 0.5);
  if (!(this.usesNativeIOSDarkAppearance)) goto L_278;
  goto L_2bd;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("backgroundColor", ti.OAIColor.BgPrimary);
  i.setViewModelProperty("frame", {x: o.x, y: (o.y + ti.OAISpacing.Half), width: o.width, height: (o.height - ti.OAISpacing.One)});
  i.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=42B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: i
// closure: this, e, n
function {
  return this.renderPlanOption(i, e, n);   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=8 cpool=2 bc=1393B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: t, o, n, this
// closure: i, pi, M, ni, ti, Si, T, Zi
function {
  this = this;
  let n;
  let o;
  let t;
  if (!((this.pricingPresentation.plans.length < 2))) goto L_54;
  return;
  if (!(Si.Device.isIOS())) goto L_e9;
  t = !Si.Device.isWeb();
  o = this.state.planIndicatorFrame;
  if (!(t)) goto L_1d8;
  if (!((undefined !== o))) goto L_1d8;
  if (!((o.width > 0))) goto L_1d8;
  n = (o.height > ti.OAISpacing.One);
  i.beginRender(T, undefined);
  i.setAttributeStyle("style", Zi.planPicker);
  if (!(this.usesNativeIOSDarkAppearance)) goto L_2ea;
  goto L_2eb;
  // [栈深重同步 4 -> 3]
  i.setAttributeString("backgroundColor", undefined);
  if (!(Si.Device.isIOS())) goto L_3a9;
  goto L_3aa;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingBottom", undefined);
  if (!(Si.Device.isIOS())) goto L_468;
  goto L_469;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingTop", undefined);
  if (!(t)) goto L_4bf;
  goto L_4c0;
  // [栈深重同步 4 -> 3]
  i.setAttributeFunction("onLayoutComplete", undefined);
  if (!(n)) goto L_4de;
  if (!((undefined !== e))) goto L_4de;
  if (!((undefined !== o))) goto L_4de;
  function <atom:0>();
  this.pricingPresentation.plans.map(function <atom:0>);
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: this, e
function {
  return this.selectPlan(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=14 cpool=0 bc=909B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: n, r, o, i, D, Zi, s, ui, R, e, this, Ti, a, ti
function {
  if (!(n)) goto L_f1;
  if (!(r)) goto L_f1;
  if (!(!o)) goto L_f1;
  i.beginRender(D, undefined);
  i.setAttributeStyle("style", Zi.nativePlanOptionBackground);
  i.setAttributeString("backgroundColor", s);
  i.endRender();
  i.beginComponent(ui.Text, R, undefined, undefined);
  i.setViewModelProperty("value", e.title);
  if (!(n)) goto L_23c;
  if (!(!r)) goto L_23c;
  if (!((true !== this.highContrastInactivePlanLabels))) goto L_23c;
  goto L_23d;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("color", undefined);
  if (!((a == null))) goto L_275;
  a;
  goto L_296;
  i.setViewModelProperty("font", undefined.font);
  if (!((a == null))) goto L_2ce;
  a;
  goto L_2ef;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.LabelLarge);
  i.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=9 closure=11 cpool=3 bc=2057B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t, o
// locals: n, r, s, a, d, this
// closure: i, D, Zi, ui, R, Ti, ti, Si, Di, xi, V
function {
  this = this;
  let d;
  let a;
  let s;
  let r;
  let n;
  n = Si.Device.isIOS();
  if (!((t == null))) goto L_86;
  t;
  goto L_a7;
  r = (e.id === undefined.id);
  if (!(r)) goto L_164;
  if (!(this.usesNativeIOSDarkAppearance)) goto L_11d;
  goto L_165;
  // [栈深重同步 1 -> 0]
  goto L_165;
  // [栈深重同步 1 -> 0]
  s = undefined;
  a = Di.subscriptionPricingTextStyle(Di.SubscriptionPricingTextRole.PlanOption);
  if ((this.pricingPresentation.isPurchasing)) goto L_286;
  if (((undefined !== this.state.activeActionId))) goto L_286;
  d = !e.isEnabled;
  i.beginComponent(xi.SubscriptionPricingPlanButton, V, e.id, undefined);
  i.setViewModelProperty("disabled", d);
  i.setViewModelProperty("style", Zi.planOption);
  i.setViewModelProperty("accessibilityId", "subscription-pricing-plan-".concat(e.id));
  i.setViewModelProperty("accessibilityLabel", e.title);
  i.setViewModelProperty("accessibilityStateDisabled", d);
  i.setViewModelProperty("accessibilityStateSelected", r);
  if (!(n)) goto L_4d3;
  goto L_4d6;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("backgroundColor", s);
  if (!(n)) goto L_50f;
  goto L_510;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("height", undefined);
  if (!(n)) goto L_589;
  goto L_58a;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("minHeight", undefined);
  if (!(d)) goto L_5bf;
  goto L_5c1;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("onTap", function <atom:0>);
  if (!(r)) goto L_668;
  if (!(n)) goto L_668;
  if (!(!Si.Device.isWeb())) goto L_668;
  goto L_669;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("elementRef", undefined);
  if (!(e.isEnabled)) goto L_6bd;
  goto L_6bf;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("opacity", 0.5);
  if (!(n)) goto L_738;
  goto L_739;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("paddingBottom", undefined);
  if (!(n)) goto L_7b2;
  goto L_7b3;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("paddingTop", undefined);
  i.setUnnamedSlot(function <atom:0>);
  i.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=525B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: i, ui, N, this, n, ti
function {
  i.beginComponent(ui.Text, N, undefined, undefined);
  i.setViewModelProperty("value", this.pricingPresentation.featuresTitle);
  if (!((n == null))) goto L_f5;
  n;
  goto L_116;
  i.setViewModelProperty("font", undefined.font);
  if (!((n == null))) goto L_14e;
  n;
  goto L_16f;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.LabelLarge);
  i.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=78B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: i, t
// closure: this, r, e
function {
  return this.renderFeature(i, t, r, e.title, false);   // tail call
}

// fn <atom:0>  args=2 vars=7 closure=11 cpool=2 bc=3017B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t
// locals: o, n, r, s, this
// closure: i, ui, N, ti, Si, Fi, Di, wi, L, Zi, H
function {
  this = this;
  let s;
  let r;
  let n;
  let o;
  if (!(Si.Device.isIOS())) goto L_cc;
  if (!(Fi.isSubscriptionPricingProPlan(e.id))) goto L_cc;
  this.renderProPlan(e, t);
  return;
  o = e.originalPrice;
  n = Di.subscriptionPricingTextStyle(Di.SubscriptionPricingTextRole.ProHeading);
  if (!((undefined !== this.pricingPresentation.featuresTitle))) goto L_1ea;
  r = (undefined !== this.pricingPresentation.comparisonPlanTitle);
  if (!(r)) goto L_31c;
  if (((undefined !== o))) goto L_31c;
  if (((this.pricingPresentation.checkoutLayout === wi.SubscriptionPricingCheckoutLayout.EqualHorizontal))) goto L_31c;
  s = (this.pricingPresentation.checkoutLayout === wi.SubscriptionPricingCheckoutLayout.EqualVertical);
  i.beginRender(L, undefined);
  i.setAttributeStyle("style", Zi.plan);
  i.setAttributeString("accessibilityId", "subscription-pricing-selected-plan-".concat(e.id));
  if (!(Si.Device.isAndroid())) goto L_488;
  goto L_489;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("borderRadius", undefined);
  if (!(Si.Device.isAndroid())) goto L_503;
  goto L_504;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("borderWidth", undefined);
  if (!(Si.Device.isIOS())) goto L_5c7;
  if (!(r)) goto L_5c7;
  goto L_5c8;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("gap", undefined);
  if (!(Si.Device.isAndroid())) goto L_642;
  goto L_643;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingBottom", undefined);
  if (!(Si.Device.isAndroid())) goto L_6be;
  goto L_755;
  // [栈深重同步 4 -> 3]
  if (!(Si.Device.isIOS())) goto L_754;
  if (!(r)) goto L_754;
  goto L_755;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingLeft", undefined);
  if (!(Si.Device.isAndroid())) goto L_7d0;
  goto L_867;
  // [栈深重同步 4 -> 3]
  if (!(Si.Device.isIOS())) goto L_866;
  if (!(r)) goto L_866;
  goto L_867;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingRight", undefined);
  if (!(Si.Device.isAndroid())) goto L_8e1;
  goto L_8e2;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingTop", undefined);
  if (!(s)) goto L_917;
  this.renderSelectedPrice(e, o);
  if (!(r)) goto L_946;
  goto L_970;
  // [栈深重同步 1 -> 0]
  this.renderPlanHeading(e, o);
  this.renderPackages(e, t);
  if ((r)) goto L_9ee;
  if (((undefined === this.pricingPresentation.featuresTitle))) goto L_9ee;
  function <atom:0>();
  i.beginRender(H, undefined);
  i.setAttributeStyle("style", Zi.featureList);
  if (!(Si.Device.isIOS())) goto L_b2b;
  if (!(r)) goto L_b2b;
  goto L_b2c;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("gap", undefined);
  e.features.map(function <atom:0>);
  i.endRender();
  i.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: this
function {
  return this.selectPackage(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=417B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: this, i, qi, q, e, t
function {
  i.beginComponent(qi.SubscriptionPricingIOSTierPicker, q, undefined, undefined);
  i.setViewModelProperty("packages", e.packages);
  if (!((t == null))) goto L_d6;
  t;
  goto L_f7;
  i.setViewModelProperty("selectedPackageId", undefined.id);
  i.setViewModelProperty("disabled", this.interactionDisabled);
  i.setViewModelProperty("onSelectPackage", function <atom:0>);
  i.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=310B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: i, z, Ei, this
function {
  i.beginRender(z, undefined);
  i.setAttributeStyle("style", Ei.subscriptionPricingIOSProStyles.featureHeading);
  i.setAttributeString("value", this.pricingPresentation.featuresTitle);
  i.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=77B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: i, t
// closure: this, e
function {
  return this.renderFeature(i, t, false, e.title, true);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=9 cpool=3 bc=1148B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t
// locals: this
// closure: i, qi, q, z, Ei, B, E, F, _
function {
  this = this;
  i.beginRender(B, undefined);
  i.setAttributeStyle("style", Ei.subscriptionPricingIOSProStyles.plan);
  i.setAttributeString("accessibilityId", "subscription-pricing-selected-plan-".concat(e.id));
  this.renderPlanPicker(e);
  if (!((e.packages.length > 0))) goto L_16b;
  function <atom:0>();
  i.beginRender(E, undefined);
  i.setAttributeStyle("style", Ei.subscriptionPricingIOSProStyles.benefitsContainer);
  i.beginRender(F, undefined);
  i.setAttributeStyle("style", Ei.subscriptionPricingIOSProStyles.benefits);
  if (!((undefined !== this.pricingPresentation.featuresTitle))) goto L_2f4;
  function <atom:0>();
  i.beginRender(_, undefined);
  i.setAttributeStyle("style", Ei.subscriptionPricingIOSProStyles.featureList);
  e.features.map(function <atom:0>);
  i.endRender();
  i.endRender();
  i.endRender();
  i.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=10 cpool=0 bc=1514B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t
// locals: this
// closure: i, j, Zi, K, ui, W, ti, si, G, Q
function {
  this = this;
  i.beginRender(j, undefined);
  i.setAttributeStyle("style", Zi.planHeading);
  i.beginRender(K, undefined);
  i.setAttributeStyle("style", Zi.planTitleRow);
  i.beginComponent(ui.Text, W, undefined, undefined);
  i.setViewModelProperty("value", e.title);
  i.setViewModelProperty("size", ti.OAITextSize.TitleLarge);
  i.endComponent();
  if (!((undefined !== e.badge))) goto L_39a;
  i.beginComponent(si.Badge, G, undefined, undefined);
  i.setViewModelProperty("tone", si.BadgeTone.Accent);
  i.setViewModelProperty("value", e.badge);
  i.endComponent();
  i.endRender();
  if (!((undefined !== e.subtitle))) goto L_599;
  i.beginComponent(ui.Text, Q, undefined, undefined);
  i.setViewModelProperty("value", e.subtitle);
  i.setViewModelProperty("size", ti.OAITextSize.BodyMedium);
  i.setViewModelProperty("tone", ui.TextTone.Secondary);
  i.endComponent();
  this.renderSelectedPrice(e, t);
  i.endRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=9 cpool=0 bc=1243B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t
// locals: o, this
// closure: Di, i, U, Zi, X, Si, ui, $, ti
function {
  this = this;
  let o;
  o = Di.subscriptionPricingTextStyle(Di.SubscriptionPricingTextRole.HeadlinePrice);
  i.beginRender(U, undefined);
  i.setAttributeStyle("style", Zi.priceRow);
  if (!((undefined !== t))) goto L_239;
  i.beginRender(X, undefined);
  if (!(Si.Device.isIOS())) goto L_1bc;
  goto L_1e0;
  // [栈深重同步 4 -> 3]
  i.setAttributeStyle("style", Zi.originalPrice);
  i.setAttributeString("value", t);
  i.endRender();
  i.beginComponent(ui.Text, $, undefined, undefined);
  i.setViewModelProperty("value", e.price);
  if (!((o == null))) goto L_30e;
  o;
  goto L_32f;
  i.setViewModelProperty("font", undefined.font);
  if (!((o == null))) goto L_367;
  o;
  goto L_388;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.HeadlineMedium);
  i.endComponent();
  this.renderBillingPeriod(e.billingPeriod, Di.SubscriptionPricingTextRole.HeadlineBillingPeriod);
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=239B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: i, Li, te, this
function {
  i.beginComponent(Li.SubscriptionPricingComparisonColumnWidth, te, undefined, undefined);
  if (!((this.pricingPresentation.comparisonPlanTitle == null))) goto L_c3;
  this.pricingPresentation.comparisonPlanTitle;
  i.setViewModelProperty("title", "");
  i.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=16 cpool=1 bc=3414B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: t, o, this
// closure: i, Li, te, Di, Si, ui, Y, Zi, Z, J, ti, ee, ie, oe, ne, re
function {
  this = this;
  let o;
  let t;
  t = Di.subscriptionPricingTextStyle(Di.SubscriptionPricingTextRole.ComparisonHeading);
  if (!(Si.Device.isIOS())) goto L_104;
  goto L_149;
  // [栈深重同步 1 -> 0]
  o = ui.TextTone.Secondary;
  i.beginRender(Y, undefined);
  if (!(Si.Device.isIOS())) goto L_20f;
  goto L_233;
  // [栈深重同步 4 -> 3]
  i.setAttributeStyle("style", Zi.comparisonHeading);
  i.beginRender(Z, undefined);
  i.setAttributeStyle("style", Zi.comparisonFeatureHeading);
  i.beginComponent(ui.Text, J, undefined, undefined);
  if (!((this.pricingPresentation.featuresTitle == null))) goto L_377;
  this.pricingPresentation.featuresTitle;
  i.setViewModelProperty("value", "");
  if (!((t == null))) goto L_3af;
  t;
  goto L_3d0;
  i.setViewModelProperty("font", undefined.font);
  if (!((t == null))) goto L_408;
  t;
  goto L_429;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.LabelLarge);
  i.setViewModelProperty("tone", o);
  i.endComponent();
  i.endRender();
  i.beginRender(ee, undefined);
  if (!(Si.Device.isIOS())) goto L_5e4;
  goto L_608;
  // [栈深重同步 4 -> 3]
  i.setAttributeStyle("style", Zi.comparisonValue);
  i.beginComponent(ui.Text, ie, undefined, undefined);
  if (!((this.pricingPresentation.comparisonPlanTitle == null))) goto L_6cf;
  this.pricingPresentation.comparisonPlanTitle;
  i.setViewModelProperty("value", "");
  if (!((t == null))) goto L_707;
  t;
  goto L_728;
  i.setViewModelProperty("font", undefined.font);
  if (!((t == null))) goto L_760;
  t;
  goto L_781;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.LabelLarge);
  i.setViewModelProperty("tone", o);
  i.endComponent();
  if (!(Si.Device.isIOS())) goto L_89e;
  function <atom:0>();
  i.endRender();
  i.beginRender(oe, undefined);
  if (!(Si.Device.isIOS())) goto L_98c;
  goto L_9b0;
  // [栈深重同步 4 -> 3]
  i.setAttributeStyle("style", Zi.comparisonValue);
  i.beginComponent(ui.Text, ne, undefined, undefined);
  i.setViewModelProperty("value", e.title);
  i.setViewModelProperty("color", this.planAccentColor);
  if (!((t == null))) goto L_ad7;
  t;
  goto L_af8;
  i.setViewModelProperty("font", undefined.font);
  if (!((t == null))) goto L_b30;
  t;
  goto L_b51;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.LabelLarge);
  i.endComponent();
  if (!(Si.Device.isIOS())) goto L_d05;
  i.beginComponent(Li.SubscriptionPricingComparisonColumnWidth, re, undefined, undefined);
  i.setViewModelProperty("title", e.title);
  i.endComponent();
  i.endRender();
  i.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=0 bc=621B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t
// locals: o
// closure: Di, i, ui, se, ti
function {
  let o;
  if (!((undefined === e))) goto L_9;
  return;
  o = Di.subscriptionPricingTextStyle(t);
  i.beginComponent(ui.Text, se, undefined, undefined);
  i.setViewModelProperty("value", e);
  if (!((o == null))) goto L_e3;
  o;
  goto L_104;
  i.setViewModelProperty("font", undefined.font);
  if (!((o == null))) goto L_13c;
  o;
  goto L_15d;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.BodyMedium);
  i.setViewModelProperty("tone", ui.TextTone.Secondary);
  i.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: this, t
function {
  return this.renderPackage(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=1 bc=284B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t
// locals: this
// closure: i, ae, Zi
function {
  this = this;
  if (((e.packages.length < 2))) goto L_11b;
  i.beginRender(ae, undefined);
  i.setAttributeStyle("style", Zi.packages);
  e.packages.map(function <atom:0>);
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: this, e
function {
  return this.selectPackage(e);   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=4 cpool=2 bc=1335B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t
// locals: o, n, r, this
// closure: i, de, Zi, ti
function {
  this = this;
  let r;
  let n;
  let o;
  if (!((t == null))) goto L_36;
  t;
  goto L_57;
  o = (e.id === undefined.id);
  if ((this.interactionDisabled)) goto L_a2;
  n = !e.isEnabled;
  if (!((undefined === e.billingPeriod))) goto L_13a;
  goto L_1cf;
  // [栈深重同步 1 -> 0]
  r = "".concat(e.title, ", ", e.price, " ", e.billingPeriod);
  i.beginRender(de, e.id);
  i.setAttributeStyle("style", Zi.package);
  i.setAttributeString("accessibilityId", "subscription-pricing-package-".concat(e.id));
  i.setAttributeString("accessibilityLabel", r);
  i.setAttribute("accessibilityStateDisabled", n);
  i.setAttribute("accessibilityStateSelected", o);
  if (!(o)) goto L_3eb;
  goto L_430;
  // [栈深重同步 4 -> 3]
  i.setAttributeString("borderColor", ti.OAIColor.BorderDefault);
  if (!(n)) goto L_465;
  goto L_467;
  // [栈深重同步 4 -> 3]
  i.setAttributeFunction("onTap", function <atom:0>);
  if (!(e.isEnabled)) goto L_4bb;
  goto L_4bd;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("opacity", 0.5);
  this.renderPackageTitle(e);
  this.renderPackagePrice(e);
  i.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=8 cpool=0 bc=836B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: i, ce, Zi, ui, le, ti, si, pe
function {
  i.beginRender(ce, undefined);
  i.setAttributeStyle("style", Zi.packageTitle);
  i.beginComponent(ui.Text, le, undefined, undefined);
  i.setViewModelProperty("value", e.title);
  i.setViewModelProperty("size", ti.OAITextSize.LabelLarge);
  i.endComponent();
  if (!((undefined !== e.badge))) goto L_31b;
  i.beginComponent(si.Badge, pe, undefined, undefined);
  i.setViewModelProperty("tone", si.BadgeTone.Success);
  i.setViewModelProperty("value", e.badge);
  i.endComponent();
  i.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=8 cpool=0 bc=1197B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: t, this
// closure: Di, i, ue, Zi, ge, ui, ve, ti
function {
  this = this;
  let t;
  t = Di.subscriptionPricingTextStyle(Di.SubscriptionPricingTextRole.PackagePrice);
  i.beginRender(ue, undefined);
  i.setAttributeStyle("style", Zi.packagePrice);
  if (!((undefined !== e.originalPrice))) goto L_20b;
  i.beginRender(ge, undefined);
  i.setAttributeStyle("style", Zi.originalPrice);
  i.setAttributeString("value", e.originalPrice);
  i.endRender();
  i.beginComponent(ui.Text, ve, undefined, undefined);
  i.setViewModelProperty("value", e.price);
  if (!((t == null))) goto L_2e0;
  t;
  goto L_301;
  i.setViewModelProperty("font", undefined.font);
  if (!((t == null))) goto L_339;
  t;
  goto L_35a;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.LabelLarge);
  i.endComponent();
  this.renderBillingPeriod(e.billingPeriod, Di.SubscriptionPricingTextRole.PackageBillingPeriod);
  i.endRender();
  return;
}

// fn <atom:0>  args=5 vars=8 closure=16 cpool=1 bc=3583B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t, o, n, r
// locals: s, a, this
// closure: Si, Di, i, Se, Zi, Ei, ti, ye, di, be, Ze, Pe, he, ui, me, Ae
function {
  this = this;
  let a;
  let s;
  if (!(Si.Device.isIOS())) goto L_55;
  s = o;
  if (!(o)) goto L_c4;
  goto L_109;
  // [栈深重同步 2 -> 1]
  a = Di.subscriptionPricingTextStyle(Di.SubscriptionPricingTextRole.ProFeature);
  i.beginRender(Se, "".concat(e.title, "-", t));
  if (!(s)) goto L_1d7;
  goto L_247;
  // [栈深重同步 4 -> 3]
  if (!(r)) goto L_223;
  goto L_247;
  // [栈深重同步 4 -> 3]
  i.setAttributeStyle("style", Zi.feature);
  i.setAttributeString("accessibilityId", "subscription-pricing-feature-".concat(t));
  if (!(s)) goto L_317;
  goto L_318;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("minHeight", undefined);
  if (!(e.isIncluded)) goto L_36c;
  goto L_36e;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("opacity", 0.55);
  if (!(r)) goto L_583;
  i.beginRender(ye, undefined);
  i.setAttributeStyle("style", Ei.subscriptionPricingIOSProStyles.featureIcon);
  i.beginComponent(di.Icon, be, undefined, undefined);
  i.setViewModelProperty("color", ti.OAIColor.IconAccent);
  i.setViewModelProperty("src", Ze.getIconAsset("check"));
  i.endComponent();
  goto L_5d2;
  // [栈深重同步 1 -> 0]
  if ((o)) goto L_5d2;
  this.renderFeatureAvailability(e.isIncluded, false, n);
  i.beginRender(Pe, undefined);
  i.setAttributeStyle("style", Zi.featureText);
  if (!(s)) goto L_712;
  if (!(Si.Device.isRTL())) goto L_712;
  goto L_713;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingLeft", undefined);
  if (!(s)) goto L_7da;
  if (!(!Si.Device.isRTL())) goto L_7da;
  goto L_7db;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingRight", undefined);
  if (!(r)) goto L_8fe;
  i.beginRender(he, undefined);
  i.setAttributeStyle("style", Ei.subscriptionPricingIOSProStyles.featureText);
  i.setAttributeString("value", e.title);
  goto L_ae9;
  // [栈深重同步 1 -> 0]
  i.beginComponent(ui.Text, me, undefined, undefined);
  i.setViewModelProperty("value", e.title);
  if (!((a == null))) goto L_9d2;
  a;
  goto L_9f3;
  i.setViewModelProperty("font", undefined.font);
  if (!((a == null))) goto L_a2b;
  a;
  goto L_a4c;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.BodyMedium);
  i.endComponent();
  if (!((undefined !== e.subtitle))) goto L_cc0;
  i.beginComponent(ui.Text, Ae, undefined, undefined);
  i.setViewModelProperty("value", e.subtitle);
  i.setViewModelProperty("size", ti.OAITextSize.BodySmall);
  i.setViewModelProperty("tone", ui.TextTone.Secondary);
  i.endComponent();
  i.endRender();
  if (!(o)) goto L_d86;
  if (!((this.pricingPresentation.comparisonPlanTitle == null))) goto L_d83;
  this.pricingPresentation.comparisonPlanTitle;
  this.renderFeatureAvailability((true === e.isIncludedInComparisonPlan), false, "");
  if (!(o)) goto L_dd6;
  this.renderFeatureAvailability(e.isIncluded, true, n);
  i.endRender();
  return;
}

// fn <atom:0>  args=3 vars=8 closure=11 cpool=0 bc=1313B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t, o
// locals: n, r, s, a, this
// closure: Si, ti, i, Ie, Zi, Ri, we, di, Oe, Li, ke
function {
  this = this;
  let a;
  let s;
  let r;
  let n;
  if (!(e)) goto L_5f;
  if ((t)) goto L_5f;
  n = (undefined === this.pricingPresentation.comparisonPlanTitle);
  if (!(Si.Device.isIOS())) goto L_f2;
  r = (undefined !== this.pricingPresentation.comparisonPlanTitle);
  if (!(e)) goto L_fd;
  goto L_102;
  // [栈深重同步 1 -> 0]
  s = "−";
  if (!(n)) goto L_12d;
  goto L_172;
  // [栈深重同步 1 -> 0]
  a = ti.OAIColor.IconTertiary;
  i.beginRender(Ie, undefined);
  if ((t)) goto L_213;
  if (!((undefined !== this.pricingPresentation.comparisonPlanTitle))) goto L_266;
  if (!(r)) goto L_240;
  goto L_28a;
  // [栈深重同步 4 -> 3]
  goto L_28a;
  // [栈深重同步 4 -> 3]
  i.setAttributeStyle("style", Zi.featureIcon);
  if (!(r)) goto L_36f;
  i.beginComponent(Ri.SubscriptionPricingComparisonMark, we, undefined, undefined);
  i.setViewModelProperty("isIncluded", e);
  i.setViewModelProperty("color", a);
  goto L_447;
  // [栈深重同步 1 -> 0]
  i.beginComponent(di.Icon, Oe, undefined, undefined);
  i.setViewModelProperty("color", a);
  i.setViewModelProperty("symbol", s);
  i.endComponent();
  if (!(r)) goto L_4f8;
  i.beginComponent(Li.SubscriptionPricingComparisonColumnWidth, ke, undefined, undefined);
  i.setViewModelProperty("title", o);
  i.endComponent();
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=358B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: Si, ti
function {
  if (!(Si.Device.isIOS())) goto L_90;
  return ti.OAIColor.TextAccent;
  if (!(Si.Device.isAndroid())) goto L_120;
  return ti.OAIColor.ThemePurpleDefault;
  return ti.OAIColor.ThemeBlueDefault;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=0 bc=783B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this
// closure: Si, i, Ce, Zi, ui, fe, ti
function {
  this = this;
  if ((Si.Device.isIOS())) goto L_30e;
  if (((undefined === this.pricingPresentation.errorMessage))) goto L_30e;
  i.beginRender(Ce, undefined);
  i.setAttributeStyle("style", Zi.error);
  i.beginComponent(ui.Text, fe, undefined, undefined);
  i.setViewModelProperty("value", this.pricingPresentation.errorMessage);
  i.setViewModelProperty("size", ti.OAITextSize.BodyMedium);
  i.setViewModelProperty("tone", ui.TextTone.Danger);
  i.endComponent();
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=8 cpool=0 bc=1112B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: e, t, this
// closure: Si, Di, i, xe, Zi, ui, Te, ti
function {
  this = this;
  let t;
  let e;
  if (!(!Si.Device.isIOS())) goto L_54;
  return;
  if (!((this.state.observedNativeState == null))) goto L_be;
  this.state.observedNativeState;
  e = this.viewModel.errors.disabledPurchase;
  if (!((undefined === e))) goto L_109;
  return;
  t = Di.subscriptionPricingTextStyle(Di.SubscriptionPricingTextRole.Footer);
  i.beginRender(xe, undefined);
  i.setAttributeStyle("style", Zi.nativeIOSPurchaseRestriction);
  i.beginComponent(ui.Text, Te, undefined, undefined);
  i.setViewModelProperty("value", e);
  if (!((t == null))) goto L_2a6;
  t;
  goto L_2c7;
  i.setViewModelProperty("font", undefined.font);
  if (!((t == null))) goto L_2ff;
  t;
  goto L_320;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.BodySmall);
  i.setViewModelProperty("tone", ui.TextTone.Secondary);
  i.endComponent();
  i.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: i
// closure: e
function {
  return (i.legalDocumentId === e.id);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=74B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: n
function {
  return n.runs.some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=80B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: r
function {
  if (!((r == null))) goto L_2d;
  r;
  goto L_4e;
  return (e.id !== undefined.id);
}

// fn <atom:0>  args=2 vars=13 closure=8 cpool=2 bc=3049B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t
// locals: o, n, r, s, a, d, c, l, p, u, this
// closure: Vi, Si, Zi, Fi, ti, ii, i, Me
function {
  this = this;
  let u;
  let p;
  let l;
  let c;
  let d;
  let a;
  let s;
  let r;
  let n;
  let o;
  o = Vi.subscriptionPricingFooterActions(t, this.pricingPresentation.disclosureText);
  n = this.pricingPresentation.disclosureRichText;
  if (!((undefined === n))) goto L_fe;
  goto L_148;
  // [栈深重同步 1 -> 0]
  r = o.legal.find(function <atom:0>);
  s = this.footerText;
  a = o.legal.filter(function <atom:0>);
  if (!(Si.Device.isIOS())) goto L_25e;
  if (!((undefined === s))) goto L_238;
  if (!((0 === a.length))) goto L_238;
  goto L_282;
  // [栈深重同步 1 -> 0]
  goto L_282;
  // [栈深重同步 1 -> 0]
  d = Zi.secondaryActions;
  if (!(Si.Device.isIOS())) goto L_383;
  if (!((this.state.observedNativeState == null))) goto L_340;
  this.state.observedNativeState;
  c = (undefined === this.viewModel.errors.disabledPurchase);
  if (!(Si.Device.isIOS())) goto L_46a;
  if (!((Vi.selectedSubscriptionPricingPlan(this.pricingPresentation) == null))) goto L_448;
  Vi.selectedSubscriptionPricingPlan(this.pricingPresentation);
  goto L_469;
  l = Fi.isSubscriptionPricingProPlan(undefined.id);
  if (!(this.usesNativeIOSDarkAppearance)) goto L_4d8;
  goto L_51d;
  // [栈深重同步 1 -> 0]
  p = ti.OAIColor.BgPrimary;
  if (!((ii.resolveOAIThemeName(this.themeMode) === ii.OAI_DARK_THEME))) goto L_5d6;
  goto L_5fa;
  // [栈深重同步 3 -> 2]
  u = "".concat(ii.OAI_LIGHT_COLOR_PALETTE[p], "00");
  i.beginRender(Me, undefined);
  i.setAttributeStyle("style", Zi.footer);
  if (!(c)) goto L_6f6;
  goto L_6f7;
  // [栈深重同步 4 -> 3]
  i.setAttributeString("background", undefined);
  if (!(c)) goto L_72c;
  goto L_72f;
  // [栈深重同步 4 -> 3]
  i.setAttributeString("backgroundColor", p);
  if (!(l)) goto L_7a9;
  goto L_83b;
  // [栈深重同步 4 -> 3]
  if (!(Si.Device.isIOS())) goto L_83a;
  goto L_83b;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("gap", undefined);
  if (!(c)) goto L_8b5;
  goto L_8b6;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("marginTop", undefined);
  if (!(Si.Device.isIOS())) goto L_974;
  goto L_975;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingLeft", undefined);
  if (!(Si.Device.isIOS())) goto L_a33;
  goto L_a34;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingRight", undefined);
  if (!(Si.Device.isIOS())) goto L_af2;
  goto L_af3;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("paddingTop", undefined);
  this.renderCheckoutActions(e, o.checkout, d);
  this.renderFooterText(r, s);
  this.renderSecondaryActions(a, Zi.secondaryActions);
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=6 closure=3 cpool=0 bc=753B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: e, i, t, o, n, this
// closure: Si, Ci, Ti
function {
  this = this;
  let n;
  let o;
  let t;
  let i;
  let e;
  if (!((this.state.observedNativeState == null))) goto L_7e;
  this.state.observedNativeState;
  e = this.viewModel;
  if (!(Si.Device.isIOS())) goto L_159;
  i = (e.checkout.storeState === Ci.SubscriptionPricingNativeStoreState.Disabled);
  if (!(i)) goto L_1a6;
  goto L_1ea;
  // [栈深重同步 1 -> 0]
  t = this.pricingPresentation.footerText;
  if (!(i)) goto L_1f3;
  goto L_237;
  // [栈深重同步 1 -> 0]
  o = this.pricingPresentation.disclosureText;
  if (!(Si.Device.isIOS())) goto L_2bd;
  if (!(!i)) goto L_2bd;
  if (!((undefined === o))) goto L_2bd;
  n = Ti.subscriptionPricingReservesLegalFooterSpace(e);
  if (((undefined !== t))) goto L_2d4;
  if (((undefined !== o))) goto L_2d4;
  if (!(n)) goto L_2f0;
  return {renewalText: t, disclosureText: o, reservesDisclosure: n};
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=208B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: i, De, Zi, this
function {
  i.beginRender(De, undefined);
  i.setAttributeStyle("style", Zi.nativeIOSEmptyDisclosure);
  this.renderDisclosureText(" ");
  i.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=1 bc=639B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t
// locals: this
// closure: i, De, Zi, Si, Ve
function {
  this = this;
  if (!((undefined !== t))) goto L_27e;
  if (!(!Si.Device.isIOS())) goto L_f0;
  if (!((undefined !== t.renewalText))) goto L_c7;
  this.renderRenewalText(t.renewalText);
  this.renderDisclosure(e);
  return;
  i.beginRender(Ve, undefined);
  i.setAttributeStyle("style", Zi.nativeIOSFooterText);
  if (!((undefined !== t.renewalText))) goto L_1dc;
  this.renderRenewalText(t.renewalText);
  if (!((undefined !== t.disclosureText))) goto L_22b;
  this.renderDisclosure(e);
  if (!(t.reservesDisclosure)) goto L_255;
  function <atom:0>();
  i.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=828B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: t
// closure: Di, i, ui, Re, ti, Si
function {
  let t;
  t = Di.subscriptionPricingTextStyle(Di.SubscriptionPricingTextRole.Footer);
  i.beginComponent(ui.Text, Re, undefined, undefined);
  i.setViewModelProperty("value", e);
  if (!((t == null))) goto L_121;
  t;
  goto L_142;
  i.setViewModelProperty("font", undefined.font);
  if (!((t == null))) goto L_17a;
  t;
  goto L_19b;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.BodySmall);
  if (!(Si.Device.isIOS())) goto L_2cb;
  goto L_310;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("tone", ui.TextTone.Tertiary);
  i.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: wi
function {
  return (e.kind === wi.SubscriptionPricingActionKind.OpenExternalCheckout);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: this, s
function {
  return this.renderAction(e, s);   // tail call
}

// fn <atom:0>  args=3 vars=10 closure=9 cpool=2 bc=2759B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t, o
// locals: n, r, s, n#1, r#1, s#1, this
// closure: wi, Si, Vi, Ci, i, Le, Zi, Gi, Ne
function {
  this = this;
  let s#1;
  let r#1;
  let n#1;
  if (!(Si.Device.isIOS())) goto L_730;
  let s;
  let r;
  let n;
  if (!((undefined === Vi.selectedSubscriptionPricingPlan(this.pricingPresentation)))) goto L_af;
  return;
  if (!((this.state.observedNativeState == null))) goto L_11b;
  this.state.observedNativeState;
  n = this.viewModel;
  r = n.promotion;
  if (!((e == null))) goto L_14a;
  e;
  goto L_16b;
  if (!((undefined.kind === wi.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_2d1;
  if (!((r == null))) goto L_1c5;
  r;
  goto L_1e6;
  if (!((true === undefined.requiresExternalCheckout))) goto L_2d1;
  if (!((r.planId === n.selectedPlanId))) goto L_2d1;
  if (((undefined === r.productId))) goto L_2d1;
  s = (r.productId === this.pricingPresentation.selectedPackageId);
  if (((n.checkout.storeState === Ci.SubscriptionPricingNativeStoreState.Loading))) goto L_3a9;
  if (!((n.checkout.storeState === Ci.SubscriptionPricingNativeStoreState.Failed))) goto L_407;
  if (!(!s)) goto L_72f;
  this.renderStoreLoadingPurchase();
  this.renderUnavailableStoreCheckoutActions(e, t, o);
  n.checkout.storeState;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === Ci.SubscriptionPricingNativeStoreState.Disabled))) goto L_52c;
  this.renderDisabledPurchase(n.strings.checkout.purchase.title);
  this.renderUnavailableStoreCheckoutActions(e, t, o);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === Ci.SubscriptionPricingNativeStoreState.Empty))) goto L_6e7;
  if (!((e == null))) goto L_581;
  e;
  goto L_5a2;
  if (((undefined.kind === wi.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_613;
  if (!(t.some(function <atom:0>))) goto L_641;
  goto L_6e5;
  // [栈深重同步 2 -> 1]
  i.beginRender(Le, undefined);
  i.setAttributeStyle("style", Zi.emptyStorePurchase);
  i.endRender();
  return;
  // [栈深重同步 0 -> 1]
  (<?> === Ci.SubscriptionPricingNativeStoreState.Available);
  <?>;
  if (!((undefined === e))) goto L_736;
  return;
  n#1 = this.pricingPresentation.checkoutLayout;
  if (!((t.length > 0))) goto L_81c;
  if (((n#1 === wi.SubscriptionPricingCheckoutLayout.EqualHorizontal))) goto L_81c;
  if (!(!(n#1 === wi.SubscriptionPricingCheckoutLayout.EqualVertical))) goto L_895;
  this.renderAction(e, Gi.Primary);
  this.renderSecondaryActions(t, o);
  return;
  r#1 = (n#1 === wi.SubscriptionPricingCheckoutLayout.EqualHorizontal);
  if (!(r#1)) goto L_90b;
  goto L_92f;
  // [栈深重同步 1 -> 0]
  s#1 = Gi.EqualVertical;
  i.beginRender(Ne, undefined);
  i.setAttributeStyle("style", Zi.checkoutActions);
  if (!(r#1)) goto L_9e3;
  goto L_9e8;
  // [栈深重同步 4 -> 3]
  i.setAttributeString("flexDirection", "column");
  if (!(Si.Device.isIOS())) goto L_a6b;
  if (!(r#1)) goto L_a6b;
  goto L_a6c;
  // [栈深重同步 4 -> 3]
  i.setAttributeString("flexWrap", undefined);
  // append([e], 1, t)
  t;
  [e].map(function <atom:0>);
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=400B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: i, He, Zi, ri, Be
function {
  i.beginRender(He, undefined);
  i.setAttributeStyle("style", Zi.storeLoadingPurchase);
  i.beginComponent(ri.ActivityIndicator, Be, undefined, undefined);
  i.setViewModelProperty("size", ri.ActivityIndicatorSize.Small);
  i.endComponent();
  i.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=789B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: t
// closure: Si, i, ai, qe, Zi, ti
function {
  let t;
  t = Si.Device.isIOS();
  i.beginComponent(ai.Button, qe, undefined, undefined);
  i.setViewModelProperty("accessibilityLabel", e);
  i.setViewModelProperty("block", true);
  i.setViewModelProperty("disabled", true);
  i.setViewModelProperty("label", e);
  if (!(t)) goto L_1ab;
  goto L_1ac;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("labelStyle", undefined);
  i.setViewModelProperty("size", ti.OAIControlSize.Lg);
  if (!(t)) goto L_276;
  goto L_277;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("style", undefined);
  i.setViewModelProperty("variant", ai.ButtonVariant.Primary);
  i.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: wi
function {
  return (e.kind === wi.SubscriptionPricingActionKind.OpenExternalCheckout);
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=1 bc=108B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, i, t
// locals: o, this
// closure: wi
function {
  this = this;
  let o;
  if (!((undefined === e))) goto L_13;
  // append([], 0, i)
  i;
  goto L_1b;
  // [栈深重同步 1 -> 0]
  // append([e], 1, i)
  i;
  o = [e];
  this.renderSecondaryActions(o.filter(function <atom:0>), t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: this, e
function {
  return this.executeNativeIntent(e);   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=1 bc=646B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: t, o, n, this
// closure: i, Ee, Zi
function {
  this = this;
  let n;
  let o;
  let t;
  t = this.pricingPresentation.disclosureText;
  if (!((undefined === t))) goto L_57;
  return;
  if (!((undefined === e))) goto L_86;
  this.renderDisclosureText(t);
  return;
  o = this.isActionDisabled(e, false);
  n = this.pricingPresentation.disclosureRichText;
  i.beginRender(Ee, undefined);
  i.setAttributeStyle("style", Zi.disclosureLink);
  i.setAttributeString("accessibilityLabel", t);
  i.setAttribute("accessibilityStateDisabled", o);
  if (!(o)) goto L_201;
  goto L_203;
  // [栈深重同步 4 -> 3]
  i.setAttributeFunction("onTap", function <atom:0>);
  if (!((undefined === n))) goto L_238;
  goto L_25d;
  // [栈深重同步 1 -> 0]
  this.renderLocalizedDisclosureText();
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=75B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: Ii, i
function {
  return Ii.platformBrowser.openURL(i);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=248B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: i
// closure: Ii, li
function {
  let i;
  i = e.href;
  if (!((undefined === i))) goto L_75;
  goto L_ba;
  // [栈深重同步 2 -> 1]
  if (!((undefined === i))) goto L_f0;
  goto L_f2;
  // [栈深重同步 2 -> 1]
  return {kind: li.InlineTextSpanKind.Link, text: e.text, onPress: function <atom:0>};
}

// fn <atom:0>  args=1 vars=5 closure=9 cpool=1 bc=1295B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: t, o, n, this
// closure: Ii, li, ei, Di, ti, i, Fe, Zi, ze
function {
  this = this;
  let n;
  let o;
  let t;
  if (!((undefined === e))) goto L_11;
  return;
  t = ei.Markdown.parseInlines(e).map(function <atom:0>);
  o = Di.subscriptionPricingTextStyle(Di.SubscriptionPricingTextRole.Footer);
  if (!(this.usesNativeIOSProLayout)) goto L_157;
  goto L_158;
  // [栈深重同步 1 -> 0]
  n = undefined;
  i.beginRender(Fe, undefined);
  i.setAttributeStyle("style", Zi.contentLegalDisclosure);
  i.setAttributeNumber("paddingLeft", n);
  i.setAttributeNumber("paddingRight", n);
  i.beginComponent(li.InlineText, ze, undefined, undefined);
  i.setViewModelProperty("color", ti.OAIColor.TextSecondary);
  if (!((o == null))) goto L_32d;
  o;
  goto L_34e;
  i.setViewModelProperty("font", undefined.font);
  if (!((o == null))) goto L_386;
  o;
  goto L_3a7;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("linkColor", ti.OAIColor.TextSecondary);
  i.setViewModelProperty("size", ti.OAITextSize.BodySmall);
  i.setViewModelProperty("spans", t);
  i.endComponent();
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=6 closure=6 cpool=0 bc=1203B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: e, t, o, n, i, this
// closure: Di, ti, Ai, i, _e, Zi
function {
  this = this;
  let n;
  let o;
  let t;
  let e;
  e = this.pricingPresentation.disclosureRichText;
  if (!((undefined === e))) goto L_5c;
  return;
  t = Di.subscriptionPricingTextStyle(Di.SubscriptionPricingTextRole.Footer);
  o = ti.resolveOAITextStyle(ti.OAITextSize.BodySmall);
  n = new Ai.AttributedTextBuilder();
  let i;
  for (const i of e.runs) {
    if (!((undefined === i.legalDocumentId))) goto L_1fb;
    goto L_206;
    // [栈深重同步 7 -> 6]
    n.append(i.text, {textDecoration: "underline"});
  }
  i.beginRender(_e, undefined);
  i.setAttributeStyle("style", Zi.localizedDisclosureText);
  i.setAttributeString("accessibilityLabel", this.pricingPresentation.disclosureText);
  if (!((t == null))) goto L_335;
  t;
  goto L_356;
  if (!((undefined.font == null))) goto L_37f;
  undefined.font;
  i.setAttributeString("font", o.font);
  if (!((undefined === t))) goto L_3d9;
  goto L_3da;
  // [栈深重同步 4 -> 3]
  i.setAttributeNumber("lineHeight", undefined);
  if (!((t == null))) goto L_412;
  t;
  goto L_433;
  i.setAttributeNumber("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setAttribute("value", n.build());
  i.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=683B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: t
// closure: Di, i, ui, je, ti
function {
  let t;
  t = Di.subscriptionPricingTextStyle(Di.SubscriptionPricingTextRole.Footer);
  i.beginComponent(ui.Text, je, undefined, undefined);
  i.setViewModelProperty("value", e);
  if (!((t == null))) goto L_121;
  t;
  goto L_142;
  i.setViewModelProperty("font", undefined.font);
  if (!((t == null))) goto L_17a;
  t;
  goto L_19b;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  i.setViewModelProperty("size", ti.OAITextSize.BodySmall);
  i.setViewModelProperty("tone", ui.TextTone.Secondary);
  i.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=72B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// closure: this, Gi
function {
  return this.renderAction(e, Gi.Secondary);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=1 bc=183B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t
// locals: this
// closure: Gi, i, Ke
function {
  this = this;
  if (!((0 !== e.length))) goto L_b6;
  i.beginRender(Ke, undefined);
  i.setAttributeStyle("style", t);
  e.map(function <atom:0>);
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=18 cpool=0 bc=2235B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: i, We, Zi, ui, Ge, I, O, C, ti, Si, Qe, Ue, Xe, Ze, di, $e, r, s
function {
  i.beginRender(We, undefined);
  i.setAttributeStyle("style", Zi.externalCheckoutActionLabel);
  i.beginComponent(ui.Text, Ge, undefined, undefined);
  i.setViewModelProperty("value", I);
  if (!((O == null))) goto L_132;
  O;
  goto L_153;
  i.setViewModelProperty("align", undefined.textAlign);
  i.setViewModelProperty("color", C);
  if (!((O == null))) goto L_1bb;
  O;
  goto L_1dc;
  i.setViewModelProperty("font", undefined.font);
  if (!((O == null))) goto L_214;
  O;
  goto L_235;
  i.setViewModelProperty("letterSpacing", undefined.letterSpacing);
  if (!((O == null))) goto L_26d;
  O;
  goto L_28e;
  i.setViewModelProperty("lineHeight", undefined.lineHeight);
  if (!((O == null))) goto L_2c6;
  O;
  goto L_2e7;
  i.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  if (!((O == null))) goto L_31f;
  O;
  goto L_340;
  i.setViewModelProperty("numberOfLines", undefined.numberOfLines);
  i.setViewModelProperty("size", ti.OAITextSize.BodyStrong);
  if (!((O == null))) goto L_3ea;
  O;
  goto L_40b;
  i.setViewModelProperty("textDecoration", undefined.textDecoration);
  i.endComponent();
  if (!(Si.Device.isIOS())) goto L_755;
  i.beginRender(Qe, undefined);
  i.setAttributeStyle("style", Zi.nativeIOSExternalCheckoutIcon);
  i.beginRender(Ue, undefined);
  i.setAttributeStyle("style", Zi.nativeIOSExternalCheckoutIconMeasure);
  if (!((O == null))) goto L_5b2;
  O;
  goto L_5d3;
  i.setAttributeString("font", undefined.font);
  i.endRender();
  i.beginRender(Xe, undefined);
  i.setAttributeStyle("style", Zi.nativeIOSExternalCheckoutIconImage);
  i.setAttribute("src", Ze.getIconAsset("external-link"));
  i.setAttributeString("tint", C);
  i.endRender();
  goto L_892;
  // [栈深重同步 1 -> 0]
  i.beginComponent(di.Icon, $e, undefined, undefined);
  i.setViewModelProperty("color", C);
  if (!(r)) goto L_80e;
  if (!(!s)) goto L_80e;
  goto L_810;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("size", 14);
  i.setViewModelProperty("src", Ze.getIconAsset("external-link"));
  i.endComponent();
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: this, e
function {
  return this.executeNativeIntent(e);   // tail call
}

// fn <atom:0>  args=2 vars=28 closure=19 cpool=2 bc=6153B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, t
// locals: o, n, r, s, a, d, c, l, p, u, g, v, S, y, b, P, h, m, A, I, w, O, k, C, f, this
// closure: i, We, Zi, ui, Ge, ti, Si, Qe, Ue, Xe, Ze, di, $e, Gi, wi, ai, Ei, Di, Ye
function {
  this = this;
  let f;
  let C;
  let k;
  let O;
  let w;
  let I;
  let A;
  let m;
  let h;
  let P;
  let b;
  let y;
  let S;
  let v;
  let g;
  let u;
  let p;
  let l;
  let c;
  let d;
  let a;
  let s;
  let r;
  let n;
  let o;
  o = (this.state.activeActionId === e.id);
  if ((e.isLoading)) goto L_127;
  if (!(o)) goto L_127;
  n = this.pricingPresentation.isPurchasing;
  r = (t !== Gi.Secondary);
  s = (t === Gi.EqualHorizontal);
  if ((s)) goto L_1a3;
  a = (t === Gi.EqualVertical);
  if (!(Si.Device.isIOS())) goto L_1f4;
  d = r;
  if (!(Si.Device.isIOS())) goto L_2b2;
  if (!(!r)) goto L_2b2;
  c = (e.kind === wi.SubscriptionPricingActionKind.Purchase);
  if (!(Si.Device.isIOS())) goto L_370;
  if (!(!r)) goto L_370;
  l = (e.kind === wi.SubscriptionPricingActionKind.OpenExternalCheckout);
  if (!(a)) goto L_474;
  if (!((e.kind === wi.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_42c;
  goto L_505;
  // [栈深重同步 1 -> 0]
  goto L_505;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_4c0;
  goto L_505;
  // [栈深重同步 1 -> 0]
  p = ai.ButtonVariant.Ghost;
  if (!(r)) goto L_675;
  if (!((e.kind === wi.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_675;
  if (!((this.pricingPresentation.checkoutLayout === wi.SubscriptionPricingCheckoutLayout.PrimaryAndSecondary))) goto L_675;
  u = (e.id !== this.pricingPresentation.externalCheckoutIconActionId);
  if (!(n)) goto L_6f5;
  if (!(!u)) goto L_6f5;
  if ((r)) goto L_6f5;
  g = (e.kind === wi.SubscriptionPricingActionKind.OpenExternalCheckout);
  if ((this.isActionDisabled(e, o))) goto L_728;
  v = o;
  if (!((e.kind === wi.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_91d;
  if (!(e.isEnabled)) goto L_91d;
  if ((this.pricingPresentation.isPurchasing)) goto L_89f;
  if (!(Si.Device.isIOS())) goto L_89f;
  if (!((undefined !== this.state.activeActionId))) goto L_91d;
  if (!(!n)) goto L_91d;
  if (((t === Gi.Primary))) goto L_91d;
  S = Si.Device.isIOS();
  if (!((t === Gi.Secondary))) goto L_a22;
  if (!((e.kind === wi.SubscriptionPricingActionKind.Purchase))) goto L_a22;
  if (!(e.isEnabled)) goto L_a22;
  y = this.pricingPresentation.isPurchasing;
  if (!((this.state.observedNativeState == null))) goto L_a90;
  this.state.observedNativeState;
  b = this.viewModel.checkout;
  if (!(!b.isPrimaryPurchaseDisabled)) goto L_bf2;
  if ((u)) goto L_bf2;
  if (!((e.kind === wi.SubscriptionPricingActionKind.Purchase))) goto L_bf2;
  if (!((b.applePurchase == null))) goto L_b86;
  b.applePurchase;
  goto L_ba7;
  if (!((true === undefined.isEnabled))) goto L_bf2;
  P = (undefined !== this.pricingPresentation.selectedPackageId);
  if (!((t === Gi.Primary))) goto L_c49;
  if (!(b.isExternalCheckoutInProgress)) goto L_c49;
  h = P;
  if (!(v)) goto L_c6e;
  if (!(!g)) goto L_c6e;
  if (!(!S)) goto L_c6e;
  if (!(!y)) goto L_c6e;
  m = !h;
  if (!(Si.Device.isIOS())) goto L_d5f;
  if (!(a)) goto L_d5f;
  if (!((e.kind === wi.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_d5f;
  if (!(e.isEnabled)) goto L_d5f;
  A = !m;
  I = e.title;
  if (!(d)) goto L_e4d;
  if (!(s)) goto L_db9;
  goto L_ef1;
  // [栈深重同步 1 -> 0]
  if (!(this.usesNativeIOSProLayout)) goto L_e26;
  goto L_ef1;
  // [栈深重同步 1 -> 0]
  goto L_ef1;
  // [栈深重同步 1 -> 0]
  if (!(c)) goto L_ec5;
  if (!(Di.supportsNativeIOSFooterFonts())) goto L_e9f;
  goto L_ef1;
  // [栈深重同步 1 -> 0]
  goto L_ef1;
  // [栈深重同步 1 -> 0]
  if (!(l)) goto L_ef0;
  goto L_ef1;
  // [栈深重同步 1 -> 0]
  w = undefined;
  if (!((w == null))) goto L_efe;
  w;
  goto L_f1f;
  O = undefined.attributes;
  if (!(A)) goto L_f97;
  if (!(this.usesNativeIOSDarkAppearance)) goto L_f71;
  goto L_fbb;
  // [栈深重同步 1 -> 0]
  goto L_fbb;
  // [栈深重同步 1 -> 0]
  k = Zi.nativeIOSCheckoutAction;
  if (!(m)) goto L_100a;
  goto L_1115;
  // [栈深重同步 1 -> 0]
  if (!((O == null))) goto L_1015;
  O;
  goto L_1036;
  if (!((undefined.color == null))) goto L_1115;
  undefined.color;
  if (!((p === ai.ButtonVariant.Primary))) goto L_10d0;
  goto L_1115;
  // [栈深重同步 1 -> 0]
  C = ti.OAIColor.InteractiveLabelSecondaryDefault;
  if (((e.id !== this.pricingPresentation.externalCheckoutIconActionId))) goto L_1185;
  if (!(n)) goto L_118a;
  goto L_118c;
  // [栈深重同步 1 -> 0]
  f = function <atom:0>;
  i.beginComponent(ai.Button, Ye, e.id, undefined);
  i.setViewModelProperty("accessibilityId", "subscription-pricing-action-".concat(e.id));
  if (!((e.accessibilityLabel == null))) goto L_12ea;
  e.accessibilityLabel;
  i.setViewModelProperty("accessibilityLabel", e.title);
  i.setViewModelProperty("accessibilityStateDisabled", v);
  if (!(s)) goto L_139a;
  if (!(!Si.Device.isIOS())) goto L_139a;
  goto L_139b;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("basis", undefined);
  if (!(r)) goto L_13d3;
  i.setViewModelProperty("block", !s);
  i.setViewModelProperty("children", f);
  i.setViewModelProperty("disabled", m);
  if (!(s)) goto L_1468;
  goto L_1469;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("grow", undefined);
  i.setViewModelProperty("label", I);
  i.setViewModelProperty("labelStyle", w);
  i.setViewModelProperty("loading", g);
  if (!(s)) goto L_157c;
  if (!(Si.Device.isIOS())) goto L_157c;
  goto L_157d;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("maxWidth", undefined);
  if (!(s)) goto L_1600;
  if (!(Si.Device.isIOS())) goto L_1600;
  goto L_1601;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("minWidth", undefined);
  if (!(v)) goto L_1636;
  goto L_1638;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("onPress", function <atom:0>);
  if (!(s)) goto L_16b2;
  goto L_1743;
  // [栈深重同步 4 -> 3]
  if (!(r)) goto L_16fe;
  goto L_1743;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("size", ti.OAIControlSize.Sm);
  if (!(d)) goto L_177a;
  goto L_17ad;
  // [栈深重同步 4 -> 3]
  if ((c)) goto L_1784;
  if (!(l)) goto L_17ac;
  goto L_17ad;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("style", undefined);
  i.setViewModelProperty("variant", p);
  i.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=231B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: this
// closure: Si, Fi, Vi
function {
  this = this;
  if (!(Si.Device.isIOS())) goto L_e6;
  if (!((Vi.selectedSubscriptionPricingPlan(this.pricingPresentation) == null))) goto L_c4;
  Vi.selectedSubscriptionPricingPlan(this.pricingPresentation);
  goto L_e5;
  return Fi.isSubscriptionPricingProPlan(undefined.id);
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=761B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e, i
// locals: this
// closure: wi, Si, Ki
function {
  this = this;
  if ((!e.isEnabled)) goto L_2f8;
  if ((e.isLoading)) goto L_2f8;
  if (!(this.pricingPresentation.isLoading)) goto L_25f;
  if (!((e.kind === wi.SubscriptionPricingActionKind.OpenLegal))) goto L_25e;
  if ((Si.Device.isIOS())) goto L_25e;
  if (!((undefined !== this.nativeState.androidRefresh))) goto L_25e;
  if ((Ki.KoreaLegalDocumentIds.includes(e.id))) goto L_25e;
  if ((!(e.id === Ki.KoreaCompanyInformationId))) goto L_2f8;
  if ((this.pricingPresentation.isPurchasing)) goto L_2f8;
  if (!((undefined !== this.state.activeActionId))) goto L_2f8;
  return !i;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=137B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: this, e
function {
  return this.context.host.selectPlan(e.id);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=361B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: this
// closure: vi
function {
  this = this;
  if (!(!this.pricingPresentation.isPurchasing)) goto L_168;
  if (!((undefined === this.state.activeActionId))) goto L_168;
  if (!(e.isEnabled)) goto L_168;
  if (!(!vi.isVersionAtLeast(27))) goto L_f5;
  throw new Error("Subscription pricing requires the current native purchase host.");
  this.invokeHostOperation("plan selection ".concat(e.id), function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=137B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// closure: this, e
function {
  return this.context.host.selectPackage(e.id);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=361B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: this
// closure: vi
function {
  this = this;
  if (!(!this.interactionDisabled)) goto L_168;
  if (!(e.isEnabled)) goto L_168;
  if (!((e.id !== this.pricingPresentation.selectedPackageId))) goto L_168;
  if (!(!vi.isVersionAtLeast(27))) goto L_f5;
  throw new Error("Subscription pricing requires the current native purchase host.");
  this.invokeHostOperation("package selection ".concat(e.id), function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=7 closure=4 cpool=0 bc=1814B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: i
// locals: t, o, e, e#1, n, this
// closure: wi, Je, vi, e
function {
  this = this;
  let o;
  let t;
  if ((this.isActionDisabled(i, false))) goto L_58;
  if (!(i.isLoading)) goto L_5b;
  return;
  t = (i.kind === wi.SubscriptionPricingActionKind.Purchase);
  o = Je.v4();
  if (!(t)) goto L_147;
  this.setState({activeActionId: i.id, activePurchaseRequestId: o});
  try { // catch -> L_622
  if (!(!vi.isVersionAtLeast(27))) goto L_186;
  throw new Error("Subscription pricing requires the current native purchase host.");
  if (!((i.kind === wi.SubscriptionPricingActionKind.Purchase))) goto L_2ec;
  let e;
  e = this.pricingPresentation.selectedPackageId;
  if (!((undefined === e))) goto L_27a;
  this.setState({activeActionId: undefined, activePurchaseRequestId: undefined});
  return undefined;
  // [栈深重同步 0 -> 1]
  this.context.host.purchaseWithApple(e, o);
  goto L_61f;
  if (!((<?> === wi.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_465;
  let e#1;
  if (!((this.state.observedNativeState == null))) goto L_3a7;
  this.state.observedNativeState;
  e#1 = this.viewModel.checkout.webCheckoutPlanId;
  if (!((undefined !== e#1))) goto L_461;
  this.context.host.purchaseOnWeb(e#1, o);
  goto L_61f;
  if (!((<?> === wi.SubscriptionPricingActionKind.OpenLegal))) goto L_542;
  this.context.host.openLegalDocument(i.id, o);
  goto L_61f;
  if (((<?> === wi.SubscriptionPricingActionKind.RestorePurchases))) goto L_61f;
  if (((<?> === wi.SubscriptionPricingActionKind.Retry))) goto L_61f;
  (<?> === wi.SubscriptionPricingActionKind.Dismiss);
  <?>;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_715
  if (!(t)) goto L_663;
  this.setState({activeActionId: undefined, activePurchaseRequestId: undefined});
  if (!(e.isLoggingEnabled)) goto L_712;
  console.warn("[SubscriptionPricingPage] Native host rejected action ".concat(i.id, " (", o, "):"), n);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=149B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: i, t
// locals: o
// closure: e
function {
  try { // catch -> L_a
  t();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_94
  if (!(e.isLoggingEnabled)) goto L_91;
  console.warn("[SubscriptionPricingPage] Native host rejected ".concat(i, ":"), o);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn Ji  args=1 vars=2 closure=1 cpool=0 bc=105B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: e
// locals: i
// closure: Ze
function {
  let i;
  i = Ze.getIconAsset(e);
  if (!((undefined === i))) goto L_65;
  throw new Error("Subscription pricing is missing required Android icon asset: ".concat(e));
  return i;
}

// fn <atom:0>  args=3 vars=168 closure=0 cpool=63 bc=20250B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// args: require, module, exports
// locals: e, i, t, o, n, r, s, a, d, c, l, p, u, g, v, S, y, b, P, h, m, A, I, w, O, k, C, f, x, T, M, V, D, R, L, N, H, B, q, E, F, z, _, j, K, W, G, Q, U, X, $, Y, Z, J, ee, ie, te, oe, ne, re, se, ae, de, ce, le, pe, ue, ge, ve, Se, ye, be, Pe, he, me, Ae, Ie, we, Oe, ke, Ce, fe, xe, Te, Me, Ve, De, Re, Le, Ne, He, Be, qe, Ee, Fe, ze, _e, je, Ke, We, Ge, Qe, Ue, Xe, $e, Ye, Ze, Je, ei, ii, ti, oi, ni, ri, si, ai, di, ci, li, pi, ui, gi, vi, Si, yi, bi, Pi, hi, mi, Ai, Ii, wi, Oi, ki, Ci, fi, xi, Ti, Mi, Vi, Di, Ri, Li, Ni, Hi, Bi, qi, Ei, Fi, zi, _i, ji, Ki, Wi, Gi, Qi, Ui, SubscriptionPricingPage, <class_fields_init>, SubscriptionPricingPage#1, Xi, $i, Yi, Zi, Ji
function {
  Ji = function Ji;
  let Zi;
  let Yi;
  let $i;
  let Xi;
  let SubscriptionPricingPage#1;
  let Ui;
  let Qi;
  let Ki;
  let ji;
  let _i;
  let zi;
  let Fi;
  let Ei;
  let qi;
  let Bi;
  let Hi;
  let Ni;
  let Li;
  let Ri;
  let Di;
  let Vi;
  let Mi;
  let Ti;
  let xi;
  let fi;
  let Ci;
  let ki;
  let Oi;
  let wi;
  let Ii;
  let Ai;
  let mi;
  let hi;
  let Pi;
  let bi;
  let yi;
  let Si;
  let vi;
  let gi;
  let ui;
  let pi;
  let li;
  let ci;
  let di;
  let ai;
  let si;
  let ri;
  let ni;
  let oi;
  let ti;
  let ii;
  let ei;
  let Je;
  let Ze;
  let Ye;
  let $e;
  let Xe;
  let Ue;
  let Qe;
  let Ge;
  let We;
  let Ke;
  let je;
  let _e;
  let ze;
  let Fe;
  let Ee;
  let qe;
  let Be;
  let He;
  let Ne;
  let Le;
  let Re;
  let De;
  let Ve;
  let Me;
  let Te;
  let xe;
  let fe;
  let Ce;
  let ke;
  let Oe;
  let we;
  let Ie;
  let Ae;
  let me;
  let he;
  let Pe;
  let be;
  let ye;
  let Se;
  let ve;
  let ge;
  let ue;
  let pe;
  let le;
  let ce;
  let de;
  let ae;
  let se;
  let re;
  let ne;
  let oe;
  let te;
  let ie;
  let ee;
  let J;
  let Z;
  let Y;
  let $;
  let X;
  let U;
  let Q;
  let G;
  let W;
  let K;
  let j;
  let _;
  let z;
  let F;
  let E;
  let q;
  let B;
  let H;
  let N;
  let L;
  let R;
  let D;
  let V;
  let M;
  let T;
  let x;
  let f;
  let C;
  let k;
  let O;
  let w;
  let I;
  let A;
  let m;
  let h;
  let P;
  let b;
  let y;
  let S;
  let v;
  let g;
  let u;
  let p;
  let l;
  let c;
  let d;
  let a;
  let s;
  let r;
  let n;
  let o;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscriptionPricingPage = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("valdi_core/src/JSX").jsx;
  t = i.makeComponentPrototype(undefined, "ny6OpHXCeNHg_V_N");
  o = i.makeComponentPrototype(undefined, "s_uGgO_DqAagjaIr");
  n = i.makeComponentPrototype(undefined, "5-8mRgvmhOTkUNDK");
  r = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-page"], "IJ7dNp0jUQgE38vH");
  s = i.makeNodePrototype("scroll", ["accessibilityId", "subscription-pricing-scroll"], "Xx_UgUNK9_Iudud1");
  a = i.makeNodePrototype("view", undefined, "GoAfyvTKG5qV3qoJ");
  d = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-header"], "Q6GoLR9tDk_d-hfl");
  c = i.makeNodePrototype("view", undefined, "VVmwUSTHRI59ZI8-");
  l = i.makeNodePrototype("view", undefined, "iJrPCyX3nBUapdqb");
  p = i.makeNodePrototype("view", undefined, "I3uwtUao0rSceJL5");
  u = i.makeComponentPrototype(undefined, "BubCBVL3a34_QQlJ");
  g = i.makeComponentPrototype(["accessibilityId", "subscription-pricing-dismiss"], "hxQFnt7sgzVpR18Z");
  v = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-loading"], "gMXZqi852k4hlbwL");
  S = i.makeComponentPrototype(undefined, "oRUbhEYTa7eb9V2E");
  y = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-hero"], "Y66pLnG37q3YfiSL");
  b = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-plan-icon", "accessibilityNavigation", "ignored"], "tWWAYtVDZ6PiygyE");
  P = i.makeComponentPrototype(["size", 64, "verticalOffset", 0], "ZIEASQ_w-xZ8D6gs");
  h = i.makeNodePrototype("layout", undefined, "C2NIlnT01aiI8USq");
  m = i.makeNodePrototype("label", undefined, "qohdu-Xgb6sinVxf");
  A = i.makeNodePrototype("label", undefined, "KGndDTtIGFa5zwFy");
  I = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-hero"], "QSqp9ksPaBoWcfrd");
  w = i.makeComponentPrototype(["lines", 0], "ihqsywX1jOLWSovc");
  O = i.makeComponentPrototype(["lines", 0], "yD980YDtI2mrwp2c");
  k = i.makeNodePrototype("label", ["value", "✦"], "JTVAn9Z5wgtd2q6q");
  C = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-plan-icon"], "dF6zZoQbe4wL4E91");
  f = i.makeComponentPrototype(undefined, "Dc_3mKFKA2rrv8Rk");
  x = i.makeComponentPrototype(["size", 42], "hSWP4wHlr2amsTc0");
  T = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-plan-picker"], "PzmQdjoLfqPlk98l");
  M = i.makeComponentPrototype(["accessibilityNavigation", "ignored"], "mrRJj_5Va2kRtVDU");
  V = i.makeComponentPrototype(["accessibilityCategory", "radio"], "m1dKYX99eNSaUqDF");
  D = i.makeNodePrototype("view", undefined, "W3CoaLAgnEVt1Tzo");
  R = i.makeComponentPrototype(["align", "center"], "1i_tStWF8x2ZZcuB");
  L = i.makeNodePrototype("view", undefined, "YEmAzcoNj5X5fCgL");
  N = i.makeComponentPrototype(["lines", 0], "xjra4Jqq934Jx6qm");
  H = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-features"], "Rn2a05hQgfpNDw73");
  B = i.makeNodePrototype("view", undefined, "yQWG-61QUKIwj738");
  q = i.makeComponentPrototype(undefined, "MGNYWN9EW7PRjMYK");
  E = i.makeNodePrototype("layout", undefined, "H-OQaimEap97LNZz");
  F = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-pro-benefits"], "Y7yT0bu9Vx_dVZEZ");
  z = i.makeNodePrototype("label", ["accessibilityId", "subscription-pricing-pro-feature-heading"], "9YkHHTlIB-Wi9tAV");
  _ = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-features"], "TvYKcV_0IymPIxfU");
  j = i.makeNodePrototype("view", undefined, "8EyU790iXIvdNnmH");
  K = i.makeNodePrototype("view", undefined, "YLVmriKkjDLMnlgy");
  W = i.makeComponentPrototype(undefined, "RASCr-1Gp2ZRk660");
  G = i.makeComponentPrototype(undefined, "nxpu7nbUsk7ng4TS");
  Q = i.makeComponentPrototype(["lines", 0], "TzTYR0DuwIvyrlk9");
  U = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-plan-price"], "5D5amVMWfo2DJhwu");
  X = i.makeNodePrototype("label", undefined, "YtK8D-kFaeGMCCh7");
  $ = i.makeComponentPrototype(undefined, "5hLeVtPF7PHutNMB");
  Y = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-comparison-header"], "5RARjY9n0WY-ETpt");
  Z = i.makeNodePrototype("view", undefined, "B-8v6rkGVRyTDVZD");
  J = i.makeComponentPrototype(undefined, "wER-oduQz6bJuLfG");
  ee = i.makeNodePrototype("view", undefined, "NITGw9PPWdmn5BRN");
  ie = i.makeComponentPrototype(["align", "center"], "Lw6jQm296dgl0UB-");
  te = i.makeComponentPrototype(undefined, "yeWuXAR_Cr2jSOcj");
  oe = i.makeNodePrototype("view", undefined, "LaI5OB2sLZjO4r2q");
  ne = i.makeComponentPrototype(["align", "center"], "JwAGSamImssy5Lka");
  re = i.makeComponentPrototype(undefined, "7UttwoLSBReDUl1i");
  se = i.makeComponentPrototype(["lines", 0], "j2KOf7vNz2KDD-90");
  ae = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-packages"], "v8dldXmfx-duP5ob");
  de = i.makeNodePrototype("view", ["accessibilityCategory", "radio"], "vy_qDYUlQBDbXE3p");
  ce = i.makeNodePrototype("view", undefined, "TpaFvc4tJclWFjgA");
  le = i.makeComponentPrototype(undefined, "dNQ_q1I_wsqw07TZ");
  pe = i.makeComponentPrototype(undefined, "IAl4rlmFZVOic61l");
  ue = i.makeNodePrototype("view", undefined, "82jR3HwkEF90A4tj");
  ge = i.makeNodePrototype("label", undefined, "VXa9uBvRDnKGLbQ_");
  ve = i.makeComponentPrototype(undefined, "VWHYyY2kLVA_fmDJ");
  Se = i.makeNodePrototype("view", undefined, "9robWdxtQy-FNFbl");
  ye = i.makeNodePrototype("layout", undefined, "jNbwo_dWCH_zotxk");
  be = i.makeComponentPrototype(["size", 24], "nd80WGyhXksH27Q4");
  Pe = i.makeNodePrototype("view", undefined, "IXUfRAfjJ1n9hes8");
  he = i.makeNodePrototype("label", undefined, "tK0BFoO6zOzp9__p");
  me = i.makeComponentPrototype(["lines", 0], "z0BLlXlRKY3grXNC");
  Ae = i.makeComponentPrototype(["lines", 0], "ZmOWjyX8hKe5KEUJ");
  Ie = i.makeNodePrototype("view", undefined, "JtqvNV1cmHOU1bcT");
  we = i.makeComponentPrototype(undefined, "70UlNOkq5PaJviiT");
  Oe = i.makeComponentPrototype(["size", 20], "4QdzrEv4V_CQ6o4F");
  ke = i.makeComponentPrototype(undefined, "28w6vNXke1nWFiGG");
  Ce = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-error"], "_YKVVypCBCSW5jfd");
  fe = i.makeComponentPrototype(["align", "center", "lines", 0], "BhsWU--Sw-LKjmVs");
  xe = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-purchase-restriction"], "FE1n8XA7Xge1Q_Re");
  Te = i.makeComponentPrototype(["align", "center", "lines", 0], "aK1L7RfHQ_ou4Anu");
  Me = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-footer"], "d2FBWZ8o2xi1QFVS");
  Ve = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-footer-text"], "d2V5sWaG_BBpraYy");
  De = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-empty-disclosure"], "LT7Izf5zuaOTd40I");
  Re = i.makeComponentPrototype(["align", "center", "lines", 0], "a3KrDpOGsBATb-ln");
  Le = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-empty-store-space"], "SArfnVqX6bDy7CI9");
  Ne = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-checkout-actions"], "6fzgWN4sQbDSQBs8");
  He = i.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-store-loading"], "ZOGbtwuiqWZtfjFZ");
  Be = i.makeComponentPrototype(undefined, "OGmvEQXKdpxt5Oka");
  qe = i.makeComponentPrototype(["accessibilityId", "subscription-pricing-disabled-purchase"], "VrjtzAVokvSZBqox");
  Ee = i.makeNodePrototype("view", undefined, "Aw4G1gUzT4ZQknFw");
  Fe = i.makeNodePrototype("view", undefined, "ElKf_P_Likku7Uc-");
  ze = i.makeComponentPrototype(["accessibilityId", "subscription-pricing-content-disclosure-text", "align", "center", "linkTextDecoration", "underline"], "0dyAXLm9PqYPmcKR");
  _e = i.makeNodePrototype("label", undefined, "-i0uBo9Tf4-UsaKt");
  je = i.makeComponentPrototype(["align", "center", "lines", 0], "rZ7CkCeJ5s-9MaXp");
  Ke = i.makeNodePrototype("view", undefined, "wdlCQXvY-o55z22e");
  We = i.makeNodePrototype("view", undefined, "xY6Y5_qi0rmVODz0");
  Ge = i.makeComponentPrototype(undefined, "ojVACBykfJqR_fX5");
  Qe = i.makeNodePrototype("view", undefined, "Xd72WE7fTp2VyS0s");
  Ue = i.makeNodePrototype("label", ["value", "M"], "qLYD-4TSmxmaFCY9");
  Xe = i.makeNodePrototype("image", undefined, "MxE9XF_fQauuD5G9");
  $e = i.makeComponentPrototype(undefined, "eVnlkWsSMow7Q7hp");
  Ye = i.makeComponentPrototype(undefined, "Y5l1dQ4WZwS5kgiR");
  Ze = require("dil_icon_assets/src/IconAssets");
  Je = require("foundation/src/uuid");
  ei = require("markdown/src/Markdown");
  ii = require("oai_core/src/OAITheme");
  ti = require("oai_core/src/OAITokens");
  oi = require("oai_platform_services/src/OAIExperimentService");
  ni = require("oai_ui/src/animation/OAIControlAnimations");
  ri = require("oai_ui/src/components/ActivityIndicator");
  si = require("oai_ui/src/components/Badge");
  ai = require("oai_ui/src/components/Button");
  di = require("oai_ui/src/components/Icon");
  ci = require("oai_ui/src/components/IconButton");
  li = require("oai_ui/src/components/InlineText");
  pi = require("oai_ui/src/components/SlidingSelectionIndicator");
  ui = require("oai_ui/src/components/Text");
  gi = require("valdi_core/src/Component");
  vi = require("valdi_core/src/CompilerIntrinsics");
  Si = require("valdi_core/src/Device");
  yi = require("valdi_core/src/ElementRef");
  bi = require("valdi_core/src/LocalizableStrings");
  Pi = require("valdi_core/src/localization/LocaleResolver");
  hi = require("valdi_core/src/Style");
  mi = require("valdi_core/src/SystemFont");
  Ai = require("valdi_core/src/utils/AttributedTextBuilder");
  Ii = require("valdi_platform_browser/src/PlatformBrowser");
  wi = require("./SubscriptionPricingModels");
  Oi = require("./SubscriptionPricingOverrides");
  ki = require("./SubscriptionPricingAndroidSurface");
  Ci = require("./SubscriptionPricingNativeState");
  fi = require("./SubscriptionPricingDismissButton");
  xi = require("./SubscriptionPricingPlanButton");
  Ti = require("./SubscriptionPricingCapabilities");
  Mi = require("./SubscriptionPricingProjection");
  Vi = require("./SubscriptionPricingState");
  Di = require("./SubscriptionPricingTypography");
  Ri = require("./SubscriptionPricingComparisonMark");
  Li = require("./SubscriptionPricingComparisonColumnWidth");
  Ni = require("./SubscriptionPricingHeroMark");
  Hi = require("./SubscriptionPricingIOSGoFeatures");
  Bi = require("./SubscriptionPricingIOSProFeatures");
  qi = require("./SubscriptionPricingIOSTierPicker");
  Ei = require("./SubscriptionPricingIOSProStyles");
  Fi = require("./SubscriptionPricingProPresentation");
  zi = require("./Strings");
  _i = require("./AndroidPricingRefreshCopy");
  ji = require("./AndroidPricingRefreshSurface");
  Ki = require("./AndroidPricingKoreaDisclosure");
  if ((Wi)) goto L_1ad7;
  Wi = {};
  !function <atom:0>({});
  if ((Gi)) goto L_1ae5;
  Gi = {};
  function <atom:0>({});
  Qi = "ios_subscription_pricing_tab_tone";
  Ui = "high_contrast_inactive_tab_labels";
  let SubscriptionPricingPage;
  let <class_fields_init>;
  class SubscriptionPricingPage extends gi.StatefulComponent { ... }
  <proto:SubscriptionPricingPage>.onCreate = function <atom:0>;
  <proto:SubscriptionPricingPage>.onViewModelUpdate = function <atom:0>;
  <proto:SubscriptionPricingPage>.pricingPresentation = function <atom:0>;
  <proto:SubscriptionPricingPage>.reconciledActiveActionId = function <atom:0>;
  <proto:SubscriptionPricingPage>.onRender = function <atom:0>;
  <proto:SubscriptionPricingPage>.themeMode = function <atom:0>;
  <proto:SubscriptionPricingPage>.presentationVariant = function <atom:0>;
  <proto:SubscriptionPricingPage>.usesNativeIOSDarkAppearance = function <atom:0>;
  <proto:SubscriptionPricingPage>.projectPresentation = function <atom:0>;
  <proto:SubscriptionPricingPage>.readIOSPlanTabTone = function <atom:0>;
  <proto:SubscriptionPricingPage>.presentationExperiments = function <atom:0>;
  <proto:SubscriptionPricingPage>.nativeState = function <atom:0>;
  <proto:SubscriptionPricingPage>.restoreSubscriptionCopy = function <atom:0>;
  <proto:SubscriptionPricingPage>.nativeAccentPalette = function <atom:0>;
  <proto:SubscriptionPricingPage>.androidIconAssets = function <atom:0>;
  <proto:SubscriptionPricingPage>.interactionDisabled = function <atom:0>;
  <proto:SubscriptionPricingPage>.dismissalDisabled = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderHeader = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderDismissButton = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderLoading = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderHero = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderHeroMark = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderPlanPicker = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderPlanOption = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderPlan = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderProPlan = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderPlanHeading = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderSelectedPrice = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderComparisonHeading = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderBillingPeriod = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderPackages = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderPackage = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderPackageTitle = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderPackagePrice = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderFeature = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderFeatureAvailability = function <atom:0>;
  <proto:SubscriptionPricingPage>.planAccentColor = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderError = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderPurchaseRestriction = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderFooter = function <atom:0>;
  <proto:SubscriptionPricingPage>.footerText = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderFooterText = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderRenewalText = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderCheckoutActions = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderStoreLoadingPurchase = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderDisabledPurchase = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderUnavailableStoreCheckoutActions = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderDisclosure = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderContentLegalDisclosure = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderLocalizedDisclosureText = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderDisclosureText = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderSecondaryActions = function <atom:0>;
  <proto:SubscriptionPricingPage>.renderAction = function <atom:0>;
  <proto:SubscriptionPricingPage>.usesNativeIOSProLayout = function <atom:0>;
  <proto:SubscriptionPricingPage>.isActionDisabled = function <atom:0>;
  <proto:SubscriptionPricingPage>.selectPlan = function <atom:0>;
  <proto:SubscriptionPricingPage>.selectPackage = function <atom:0>;
  <proto:SubscriptionPricingPage>.executeNativeIntent = function <atom:0>;
  <proto:SubscriptionPricingPage>.invokeHostOperation = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscriptionPricingPage>;
  SubscriptionPricingPage = function <atom:0>;
  // close_loc <class_fields_init>
  SubscriptionPricingPage#1 = function <atom:0>;
  exports.SubscriptionPricingPage = SubscriptionPricingPage#1;
  Xi = new hi.Style({accessibilityPriority: 1, position: "absolute", right: ti.OAISpacing.Two, top: ti.OAISpacing.Two});
  $i = new hi.Style({height: "auto", minHeight: ti.OAISpacing.Seven, paddingBottom: ti.OAISpacing.Two, paddingTop: ti.OAISpacing.Two});
  Yi = new hi.Style({alignItems: "center", flexDirection: "row", gap: ti.OAISpacing.One, justifyContent: "center", width: "100%"});
  null;
  Di.nativeIOSSecondaryCheckoutTextStyle;
  Zi = {root: new hi.Style({backgroundColor: ti.OAIColor.BgPrimary, flexDirection: "column", height: "100%", width: "100%"}), header: new hi.Style({alignItems: "center", flexDirection: "row", flexShrink: 0, height: ti.OAISpacing.Seven, justifyContent: "space-between", paddingLeft: ti.OAISpacing.One, paddingRight: ti.OAISpacing.One, width: "100%"}), headerSpacer: new hi.Style({height: ti.OAISpacing.Five, width: ti.OAISpacing.Five}), nativeIOSDismissAction: Xi, nativeIOSDarkDismissAction: hi.Style.merge(Xi, new hi.Style({backgroundColor: ti.OAIColor.BgPrimaryInverse})), headerTitle: new hi.Style({alignItems: "center", flexGrow: 1, flexShrink: 1, justifyContent: "center"}), scroll: new hi.Style({flexBasis: 0, flexGrow: 1, flexShrink: 1, minHeight: 0, width: "100%"}), body: new hi.Style({flexDirection: "column", gap: ti.OAISpacing.Three, paddingBottom: ti.OAISpacing.Three, paddingLeft: ti.OAISpacing.Three, paddingRight: ti.OAISpacing.Three, paddingTop: ti.OAISpacing.Two, width: "100%"}), loading: new hi.Style({alignItems: "center", flexGrow: 1, justifyContent: "center", width: "100%"}), hero: new hi.Style({alignItems: "center", flexDirection: "column", gap: ti.OAISpacing.OneAndHalf, paddingBottom: ti.OAISpacing.One, paddingTop: ti.OAISpacing.Two, width: "100%"}), heroIcon: new hi.Style({accessibilityNavigation: "ignored", alignItems: "center", height: ti.OAISpacing.Seven, justifyContent: "center", width: ti.OAISpacing.Seven}), heroMark: new hi.Style({accessibilityNavigation: "ignored", font: mi.systemBoldFont(38), height: ti.OAISpacing.Seven, textAlign: "center", width: ti.OAISpacing.Seven}), planPicker: new hi.Style({backgroundColor: ti.OAIColor.BgTertiary, borderRadius: ti.OAIRadius.Pill, flexDirection: "row", paddingBottom: ti.OAISpacing.Half, paddingLeft: ti.OAISpacing.Half, paddingRight: ti.OAISpacing.Half, paddingTop: ti.OAISpacing.Half, width: "100%"}), planOption: new hi.Style({alignItems: "center", borderRadius: ti.OAIRadius.Pill, flexBasis: 0, flexGrow: 1, height: ti.OAISpacing.Five, justifyContent: "center", minWidth: 0}), nativePlanOptionBackground: new hi.Style({accessibilityNavigation: "ignored", borderRadius: ti.OAIRadius.Pill, bottom: ti.OAISpacing.Half, left: 0, position: "absolute", right: 0, top: ti.OAISpacing.Half, touchEnabled: false}), plan: new hi.Style({borderColor: ti.OAIColor.BorderDefault, borderRadius: ti.OAIRadius.Xl, borderWidth: 1, flexDirection: "column", gap: ti.OAISpacing.Three, paddingBottom: ti.OAISpacing.Three, paddingLeft: ti.OAISpacing.TwoPointFive, paddingRight: ti.OAISpacing.TwoPointFive, paddingTop: ti.OAISpacing.Three, width: "100%"}), planHeading: new hi.Style({flexDirection: "column", gap: ti.OAISpacing.One, width: "100%"}), planTitleRow: new hi.Style({alignItems: "center", flexDirection: "row", gap: ti.OAISpacing.One, justifyContent: "space-between", width: "100%"}), comparisonHeading: new hi.Style({alignItems: "center", flexDirection: "row", gap: ti.OAISpacing.One, width: "100%"}), nativeIOSComparisonHeading: new hi.Style({alignItems: "center", flexDirection: "row", gap: ti.OAISpacing.Two, width: "100%"}), comparisonFeatureHeading: new hi.Style({flexGrow: 1, flexShrink: 1, minWidth: 0}), comparisonValue: new hi.Style({alignItems: "center", flexShrink: 0, justifyContent: "center", width: ti.OAISpacing.Five}), nativeIOSComparisonValue: new hi.Style({alignItems: "center", flexShrink: 0, justifyContent: "center", minWidth: ti.OAISpacing.Four}), priceRow: new hi.Style({alignItems: "center", flexDirection: "row", gap: ti.OAISpacing.ThreeQuarters, paddingTop: ti.OAISpacing.Half}), originalPrice: new hi.Style({color: ti.OAIColor.TextTertiary, font: mi.systemBoldFont(16), marginRight: ti.OAISpacing.One, textDecoration: "strikethrough"}), originalHeadlinePrice: new hi.Style({color: ti.OAIColor.TextTertiary, font: "".concat(mi.systemFont(28), " title1"), marginRight: ti.OAISpacing.One, textDecoration: "strikethrough"}), packages: new hi.Style({flexDirection: "column", gap: ti.OAISpacing.One, width: "100%"}), package: new hi.Style({alignItems: "center", borderRadius: ti.OAIRadius.Lg, borderWidth: 1, flexDirection: "row", justifyContent: "space-between", minHeight: ti.OAISpacing.Six, paddingBottom: ti.OAISpacing.One, paddingLeft: ti.OAISpacing.OneAndHalf, paddingRight: ti.OAISpacing.OneAndHalf, paddingTop: ti.OAISpacing.One, width: "100%"}), packageTitle: new hi.Style({alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, gap: ti.OAISpacing.One, minWidth: 0}), packagePrice: new hi.Style({alignItems: "center", flexDirection: "row", flexShrink: 0, gap: ti.OAISpacing.ThreeQuarters}), featureList: new hi.Style({flexDirection: "column", gap: ti.OAISpacing.OneAndHalf, width: "100%"}), feature: new hi.Style({alignItems: "flex-start", flexDirection: "row", gap: ti.OAISpacing.One, width: "100%"}), nativeIOSComparisonFeature: new hi.Style({alignItems: "center", flexDirection: "row", gap: ti.OAISpacing.Two, width: "100%"}), featureIcon: new hi.Style({alignItems: "center", flexShrink: 0, justifyContent: "center", width: ti.OAISpacing.Three}), featureText: new hi.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: ti.OAISpacing.Quarter, minWidth: 0}), error: new hi.Style({backgroundColor: ti.OAIColor.BgStatusError, borderRadius: ti.OAIRadius.Lg, paddingBottom: ti.OAISpacing.OneAndHalf, paddingLeft: ti.OAISpacing.Two, paddingRight: ti.OAISpacing.Two, paddingTop: ti.OAISpacing.OneAndHalf, width: "100%"}), nativeIOSPurchaseRestriction: new hi.Style({alignItems: "center", paddingLeft: ti.OAISpacing.Four, paddingRight: ti.OAISpacing.Four, paddingTop: ti.OAISpacing.Two, width: "100%"}), footer: new hi.Style({alignItems: "center", flexDirection: "column", flexShrink: 0, gap: ti.OAISpacing.One, paddingLeft: ti.OAISpacing.Three, paddingRight: ti.OAISpacing.Three, paddingTop: ti.OAISpacing.OneAndHalf, width: "100%"}), nativeIOSFooterText: new hi.Style({alignItems: "center", flexDirection: "column", gap: ti.OAISpacing.Half, width: "100%"}), nativeIOSEmptyDisclosure: new hi.Style({accessibilityNavigation: "ignored", opacity: 0, width: "100%"}), storeLoadingPurchase: new hi.Style({alignItems: "center", justifyContent: "center", minHeight: ti.OAISpacing.Seven, width: "100%"}), emptyStorePurchase: new hi.Style({accessibilityNavigation: "ignored", height: ti.OAISpacing.Seven, opacity: 0, width: "100%"}), secondaryActions: Yi, nativeIOSSecondaryCheckoutActions: Yi.extend({marginBottom: -ti.OAISpacing.One, marginTop: -ti.OAISpacing.One}), nativeIOSFinalSecondaryCheckoutActions: Yi.extend({marginTop: -ti.OAISpacing.One}), checkoutActions: new hi.Style({alignItems: "stretch", gap: ti.OAISpacing.One, width: "100%"}), externalCheckoutActionLabel: new hi.Style({alignItems: "center", flexDirection: "row", flexShrink: 1, gap: ti.OAISpacing.Half, justifyContent: "center", minWidth: 0}), nativeIOSExternalCheckoutIcon: new hi.Style({aspectRatio: 1, flexShrink: 0}), nativeIOSExternalCheckoutIconMeasure: new hi.Style({accessibilityNavigation: "ignored", opacity: 0, touchEnabled: false}), nativeIOSExternalCheckoutIconImage: new hi.Style({accessibilityNavigation: "ignored", bottom: ti.OAISpacing.None, left: ti.OAISpacing.None, objectFit: "contain", position: "absolute", right: ti.OAISpacing.None, top: ti.OAISpacing.None, touchEnabled: false}), nativeIOSCheckoutAction: $i, nativeIOSLightSecondaryCheckoutAction: hi.Style.merge($i, new hi.Style({borderColor: ti.OAIColor.BorderHeavy})), nativeIOSDarkSecondaryCheckoutAction: hi.Style.merge($i, new hi.Style({backgroundColor: ti.OAIColor.BgGrouped, borderColor: ti.OAIColor.BorderDefault})), nativeIOSCheckoutLabel: new hi.Style({font: "".concat(mi.systemSemiboldFont(17), " body"), lineHeightMultiple: (22 / 17), numberOfLines: 0, textAlign: "center"}), nativeIOSHorizontalCheckoutLabel: new hi.Style({font: "".concat(mi.systemSemiboldFont(15), " subheadline"), lineHeightMultiple: (20 / 15), numberOfLines: 0, textAlign: "center"}), nativeIOSSecondaryCheckoutAction: new hi.Style({height: "auto", minHeight: ti.OAISpacing.Four, paddingBottom: ti.OAISpacing.One, paddingTop: ti.OAISpacing.One}), nativeIOSSecondaryCheckoutLabel: new hi.Style({font: "".concat(mi.systemSemiboldFont(13), " footnote"), lineHeightMultiple: (18 / 13), numberOfLines: 0, textAlign: "center", textDecoration: "underline"}), nativeIOSPreferredSecondaryCheckoutLabel: new hi.Style({numberOfLines: 0, textAlign: "center", textDecoration: "underline"}), nativeIOSBrowserLinkLabel: new hi.Style({font: "".concat(mi.systemSemiboldFont(17), " body"), lineHeightMultiple: (22 / 17), numberOfLines: 0, textAlign: "center", textDecoration: "underline"}), disclosureLink: new hi.Style({accessibilityCategory: "link", accessibilityId: "subscription-pricing-disclosure", alignItems: "center", justifyContent: "center", width: "100%"}), localizedDisclosureText: new hi.Style({color: ti.OAIColor.TextSecondary, flexShrink: 1, numberOfLines: 0, textAlign: "center"}), contentLegalDisclosure: new hi.Style({width: "100%", paddingTop: ti.OAISpacing.OneAndHalf, paddingBottom: ti.OAISpacing.OneAndHalf, accessibilityId: "subscription-pricing-content-disclosure"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingPage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
