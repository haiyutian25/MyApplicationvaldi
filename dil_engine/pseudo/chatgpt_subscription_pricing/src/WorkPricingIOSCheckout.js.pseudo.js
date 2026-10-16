// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.surface = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=418B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// locals: this
// closure: m
function {
  this = this;
  if (!((undefined === this.surface.presentation.isDarkMode))) goto L_b0;
  return m.OAIThemeMode.System;
  if (!(this.surface.presentation.isDarkMode)) goto L_15c;
  return m.OAIThemeMode.Dark;
  return m.OAIThemeMode.Light;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=182B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// locals: this
// closure: T
function {
  this = this;
  if (!(T.Device.isIOS())) goto L_b5;
  return (true === this.surface.presentation.isDarkMode);
}

// fn <atom:0>  args=0 vars=3 closure=8 cpool=0 bc=1106B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// locals: r, o, this
// closure: T, E, e, t, z, M, i, C
function {
  this = this;
  let o;
  let r;
  if (!(!T.Device.isIOS())) goto L_54;
  return;
  r = this.surface.nativeState.errors.disabledPurchase;
  if (!((undefined === r))) goto L_e2;
  return;
  o = E.subscriptionPricingTextStyle(E.SubscriptionPricingTextRole.Footer);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.nativeIOSPurchaseRestriction);
  e.beginComponent(M.Text, i, undefined, undefined);
  e.setViewModelProperty("value", r);
  if (!((o == null))) goto L_2a0;
  o;
  goto L_2c1;
  e.setViewModelProperty("font", undefined.font);
  if (!((o == null))) goto L_2f9;
  o;
  goto L_31a;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", C.OAITextSize.BodySmall);
  e.setViewModelProperty("tone", M.TextTone.Secondary);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: t
// closure: e
function {
  return (t.legalDocumentId === e.id);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=74B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: e
// closure: n
function {
  return n.runs.some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=80B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: e
// closure: s
function {
  if (!((s == null))) goto L_2d;
  s;
  goto L_4e;
  return (e.id !== undefined.id);
}

// fn <atom:0>  args=2 vars=9 closure=7 cpool=2 bc=2501B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: t, i
// locals: o, n, s, c, a, d, this
// closure: L, T, C, m, e, r, z
function {
  this = this;
  let d;
  let a;
  let c;
  let s;
  let n;
  let o;
  o = L.subscriptionPricingFooterActions(i, this.surface.presentation.disclosureText);
  n = this.surface.presentation.disclosureRichText;
  if (!((undefined === n))) goto L_134;
  goto L_17e;
  // [栈深重同步 1 -> 0]
  s = o.legal.find(function <atom:0>);
  if (!(T.Device.isIOS())) goto L_256;
  c = (undefined === this.surface.nativeState.errors.disabledPurchase);
  if (!(this.usesNativeIOSDarkAppearance)) goto L_2c3;
  goto L_308;
  // [栈深重同步 1 -> 0]
  a = C.OAIColor.BgPrimary;
  if (!((m.resolveOAIThemeName(this.themeMode) === m.OAI_DARK_THEME))) goto L_3c1;
  goto L_3e5;
  // [栈深重同步 3 -> 2]
  d = "".concat(m.OAI_LIGHT_COLOR_PALETTE[a], "00");
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.footer);
  if (!(c)) goto L_502;
  goto L_503;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("background", undefined);
  if (!(c)) goto L_538;
  goto L_53b;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", a);
  if (!(T.Device.isIOS())) goto L_5f9;
  goto L_5fa;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("gap", undefined);
  if (!(c)) goto L_674;
  goto L_675;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("marginTop", undefined);
  if (!(T.Device.isIOS())) goto L_733;
  goto L_734;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingLeft", undefined);
  if (!(T.Device.isIOS())) goto L_7f2;
  goto L_7f3;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingRight", undefined);
  if (!(T.Device.isIOS())) goto L_8b1;
  goto L_8b2;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingTop", undefined);
  this.renderCheckoutActions(t, o.checkout);
  this.renderFooterText(s);
  this.renderSecondaryActions(o.legal.filter(function <atom:0>));
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: e
function {
  return ("go" === e.id);
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=241B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// closure: e, n, z, this
function {
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.nativeIOSEmptyDisclosure);
  this.renderDisclosureText(" ");
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=7 closure=6 cpool=2 bc=1404B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: t
// locals: i, r, s, c, a, this
// closure: e, n, z, T, R, o
function {
  this = this;
  let a;
  let c;
  let s;
  let r;
  let i;
  if (!(!T.Device.isIOS())) goto L_183;
  if (!((undefined !== this.surface.presentation.footerText))) goto L_159;
  this.renderRenewalText(this.surface.presentation.footerText);
  this.renderDisclosure(t);
  return;
  i = this.surface.nativeState;
  r = (i.checkout.storeState === R.SubscriptionPricingNativeStoreState.Disabled);
  if (!(r)) goto L_2a0;
  goto L_305;
  // [栈深重同步 1 -> 0]
  s = this.surface.presentation.footerText;
  if (!(r)) goto L_30e;
  goto L_373;
  // [栈深重同步 1 -> 0]
  c = this.surface.presentation.disclosureText;
  if (!(!r)) goto L_42b;
  if (!((undefined === c))) goto L_42b;
  if (!(("plus" === i.selectedPlanId))) goto L_42b;
  if (!(i.hasPlanTabs)) goto L_42b;
  a = i.plans.some(function <atom:0>);
  if (((undefined !== s))) goto L_442;
  if (((undefined !== c))) goto L_442;
  if (!(a)) goto L_57b;
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.nativeIOSFooterText);
  if (!((undefined !== s))) goto L_519;
  this.renderRenewalText(s);
  if ((r)) goto L_548;
  this.renderDisclosure(t);
  if (!(a)) goto L_553;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=828B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: t
// locals: i
// closure: E, e, M, s, C, T
function {
  let i;
  i = E.subscriptionPricingTextStyle(E.SubscriptionPricingTextRole.Footer);
  e.beginComponent(M.Text, s, undefined, undefined);
  e.setViewModelProperty("value", t);
  if (!((i == null))) goto L_121;
  i;
  goto L_142;
  e.setViewModelProperty("font", undefined.font);
  if (!((i == null))) goto L_17a;
  i;
  goto L_19b;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", C.OAITextSize.BodySmall);
  if (!(T.Device.isIOS())) goto L_2cb;
  goto L_310;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("tone", M.TextTone.Tertiary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: e
// closure: V
function {
  return (e.kind === V.SubscriptionPricingActionKind.OpenExternalCheckout);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: e
// closure: this, n
function {
  return this.renderAction(e, n);   // tail call
}

// fn <atom:0>  args=2 vars=9 closure=9 cpool=2 bc=2985B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: t, i
// locals: r, o, n, r#1, o#1, n#1, this
// closure: V, T, L, R, e, c, z, N, a
function {
  this = this;
  let n#1;
  let o#1;
  let r#1;
  if (!(T.Device.isIOS())) goto L_76b;
  let n;
  let o;
  let r;
  if (!((undefined === L.selectedSubscriptionPricingPlan(this.surface.presentation)))) goto L_d0;
  return;
  r = this.surface.nativeState;
  o = r.promotion;
  if (!((t == null))) goto L_143;
  t;
  goto L_164;
  if (!((undefined.kind === V.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_2ee;
  if (!((o == null))) goto L_1be;
  o;
  goto L_1df;
  if (!((true === undefined.requiresExternalCheckout))) goto L_2ee;
  if (!((o.planId === r.selectedPlanId))) goto L_2ee;
  if (((undefined === o.productId))) goto L_2ee;
  n = (o.productId === this.surface.presentation.selectedPackageId);
  if (((r.checkout.storeState === R.SubscriptionPricingNativeStoreState.Loading))) goto L_3c6;
  if (!((r.checkout.storeState === R.SubscriptionPricingNativeStoreState.Failed))) goto L_423;
  if (!(!n)) goto L_76a;
  this.renderStoreLoadingPurchase();
  this.renderUnavailableStoreCheckoutActions(t, i);
  r.checkout.storeState;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === R.SubscriptionPricingNativeStoreState.Disabled))) goto L_547;
  this.renderDisabledPurchase(r.strings.checkout.purchase.title);
  this.renderUnavailableStoreCheckoutActions(t, i);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === R.SubscriptionPricingNativeStoreState.Empty))) goto L_722;
  if (!((t == null))) goto L_59c;
  t;
  goto L_5bd;
  if (((undefined.kind === V.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_62e;
  if (!(i.some(function <atom:0>))) goto L_65b;
  goto L_720;
  // [栈深重同步 2 -> 1]
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.emptyStorePurchase);
  e.endRender();
  return;
  // [栈深重同步 0 -> 1]
  (<?> === R.SubscriptionPricingNativeStoreState.Available);
  <?>;
  if (!((undefined === t))) goto L_771;
  return;
  r#1 = this.surface.presentation.checkoutLayout;
  if (!((i.length > 0))) goto L_878;
  if (((r#1 === V.SubscriptionPricingCheckoutLayout.EqualHorizontal))) goto L_878;
  if (!(!(r#1 === V.SubscriptionPricingCheckoutLayout.EqualVertical))) goto L_914;
  this.renderAction(t, N.SubscriptionPricingActionPresentation.Primary);
  this.renderSecondaryActions(i);
  return;
  o#1 = (r#1 === V.SubscriptionPricingCheckoutLayout.EqualHorizontal);
  if (!(o#1)) goto L_9ab;
  goto L_9f0;
  // [栈深重同步 1 -> 0]
  n#1 = N.SubscriptionPricingActionPresentation.EqualVertical;
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.checkoutActions);
  if (!(o#1)) goto L_ac5;
  goto L_aca;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("flexDirection", "column");
  if (!(T.Device.isIOS())) goto L_b4d;
  if (!(o#1)) goto L_b4d;
  goto L_b4e;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("flexWrap", undefined);
  // append([t], 1, i)
  i;
  [t].map(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=433B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// closure: e, d, z, w, l
function {
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.storeLoadingPurchase);
  e.beginComponent(w.ActivityIndicator, l, undefined, undefined);
  e.setViewModelProperty("size", w.ActivityIndicatorSize.Small);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=855B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: t
// locals: i
// closure: T, e, x, u, z, C
function {
  let i;
  i = T.Device.isIOS();
  e.beginComponent(x.Button, u, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", t);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("disabled", true);
  e.setViewModelProperty("label", t);
  if (!(i)) goto L_1cc;
  goto L_1cd;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("labelStyle", undefined);
  e.setViewModelProperty("size", C.OAIControlSize.Lg);
  if (!(i)) goto L_2b8;
  goto L_2b9;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("style", undefined);
  e.setViewModelProperty("variant", x.ButtonVariant.Primary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: e
// closure: V
function {
  return (e.kind === V.SubscriptionPricingActionKind.OpenExternalCheckout);
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=1 bc=107B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: e, t
// locals: i, this
// closure: V
function {
  this = this;
  let i;
  if (!((undefined === e))) goto L_13;
  // append([], 0, t)
  t;
  goto L_1b;
  // [栈深重同步 1 -> 0]
  // append([e], 1, t)
  t;
  i = [e];
  this.renderSecondaryActions(i.filter(function <atom:0>));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// closure: this, t
function {
  return this.surface.executeNativeIntent(t);   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=1 bc=778B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: t
// locals: i, r, o, this
// closure: e, p, z
function {
  this = this;
  let o;
  let r;
  let i;
  i = this.surface.presentation.disclosureText;
  if (!((undefined === i))) goto L_78;
  return;
  if (!((undefined === t))) goto L_a7;
  this.renderDisclosureText(i);
  return;
  r = this.surface.isActionDisabled(t, false);
  o = this.surface.presentation.disclosureRichText;
  e.beginRender(p, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.disclosureLink);
  e.setAttributeString("accessibilityLabel", i);
  e.setAttribute("accessibilityStateDisabled", r);
  if (!(r)) goto L_285;
  goto L_287;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", function <atom:0>);
  if (!((undefined === o))) goto L_2bc;
  goto L_2e1;
  // [栈深重同步 1 -> 0]
  this.renderLocalizedDisclosureText();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=6 closure=6 cpool=0 bc=1302B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// locals: t, i, r, o, e, this
// closure: E, C, D, e, S, z
function {
  this = this;
  let o;
  let r;
  let i;
  let t;
  t = this.surface.presentation.disclosureRichText;
  if (!((undefined === t))) goto L_7d;
  return;
  i = E.subscriptionPricingTextStyle(E.SubscriptionPricingTextRole.Footer);
  r = C.resolveOAITextStyle(C.OAITextSize.BodySmall);
  o = new D.AttributedTextBuilder();
  let e;
  for (const e of t.runs) {
    if (!((undefined === e.legalDocumentId))) goto L_21c;
    goto L_227;
    // [栈深重同步 7 -> 6]
    o.append(e.text, {textDecoration: "underline"});
  }
  e.beginRender(S, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.localizedDisclosureText);
  e.setAttributeString("accessibilityLabel", this.surface.presentation.disclosureText);
  if (!((i == null))) goto L_398;
  i;
  goto L_3b9;
  if (!((undefined.font == null))) goto L_3e2;
  undefined.font;
  e.setAttributeString("font", r.font);
  if (!((undefined === i))) goto L_43c;
  goto L_43d;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("lineHeight", undefined);
  if (!((i == null))) goto L_475;
  i;
  goto L_496;
  e.setAttributeNumber("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setAttribute("value", o.build());
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=683B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: t
// locals: i
// closure: E, e, M, y, C
function {
  let i;
  i = E.subscriptionPricingTextStyle(E.SubscriptionPricingTextRole.Footer);
  e.beginComponent(M.Text, y, undefined, undefined);
  e.setViewModelProperty("value", t);
  if (!((i == null))) goto L_121;
  i;
  goto L_142;
  e.setViewModelProperty("font", undefined.font);
  if (!((i == null))) goto L_17a;
  i;
  goto L_19b;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", C.OAITextSize.BodySmall);
  e.setViewModelProperty("tone", M.TextTone.Secondary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=107B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: e
// closure: this, N
function {
  return this.renderAction(e, N.SubscriptionPricingActionPresentation.Secondary);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=1 bc=251B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: t
// locals: this
// closure: N, e, P, z
function {
  this = this;
  if (!((0 !== t.length))) goto L_fa;
  e.beginRender(P, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.secondaryActions);
  t.map(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=18 cpool=0 bc=2278B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// closure: e, h, z, M, b, _, H, B, C, T, g, v, k, O, f, I, n, s
function {
  e.beginRender(h, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.externalCheckoutActionLabel);
  e.beginComponent(M.Text, b, undefined, undefined);
  e.setViewModelProperty("value", _);
  if (!((H == null))) goto L_153;
  H;
  goto L_174;
  e.setViewModelProperty("align", undefined.textAlign);
  e.setViewModelProperty("color", B);
  if (!((H == null))) goto L_1dc;
  H;
  goto L_1fd;
  e.setViewModelProperty("font", undefined.font);
  if (!((H == null))) goto L_235;
  H;
  goto L_256;
  e.setViewModelProperty("lineHeight", undefined.lineHeight);
  if (!((H == null))) goto L_28e;
  H;
  goto L_2af;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  if (!((H == null))) goto L_2e7;
  H;
  goto L_308;
  e.setViewModelProperty("numberOfLines", undefined.numberOfLines);
  e.setViewModelProperty("size", C.OAITextSize.BodyStrong);
  if (!((H == null))) goto L_3b2;
  H;
  goto L_3d3;
  e.setViewModelProperty("textDecoration", undefined.textDecoration);
  e.endComponent();
  if (!(T.Device.isIOS())) goto L_780;
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.nativeIOSExternalCheckoutIcon);
  e.beginRender(v, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.nativeIOSExternalCheckoutIconMeasure);
  if (!((H == null))) goto L_5bc;
  H;
  goto L_5dd;
  e.setAttributeString("font", undefined.font);
  e.endRender();
  e.beginRender(k, undefined);
  e.setAttributeStyle("style", z.workPricingIOSCheckoutStyles.nativeIOSExternalCheckoutIconImage);
  e.setAttribute("src", O.getIconAsset("external-link"));
  e.setAttributeString("tint", B);
  e.endRender();
  goto L_8bd;
  // [栈深重同步 1 -> 0]
  e.beginComponent(f.Icon, I, undefined, undefined);
  e.setViewModelProperty("color", B);
  if (!(n)) goto L_839;
  if (!(!s)) goto L_839;
  goto L_83b;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("size", 14);
  e.setViewModelProperty("src", O.getIconAsset("external-link"));
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// closure: this, t
function {
  return this.surface.executeNativeIntent(t);   // tail call
}

// fn <atom:0>  args=2 vars=27 closure=17 cpool=2 bc=6665B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: t, i
// locals: r, o, n, s, c, a, d, l, u, p, S, y, P, m, w, D, R, L, E, _, q, H, B, K, this
// closure: e, h, z, M, b, C, T, g, v, k, O, f, I, N, V, x, A
function {
  this = this;
  let K;
  let B;
  let H;
  let q;
  let _;
  let E;
  let L;
  let R;
  let D;
  let w;
  let m;
  let P;
  let y;
  let S;
  let p;
  let u;
  let l;
  let d;
  let a;
  let c;
  let s;
  let n;
  let o;
  let r;
  r = (this.surface.activeActionId === t.id);
  if ((t.isLoading)) goto L_145;
  if (!(r)) goto L_145;
  o = this.surface.presentation.isPurchasing;
  n = (i !== N.SubscriptionPricingActionPresentation.Secondary);
  s = (i === N.SubscriptionPricingActionPresentation.EqualHorizontal);
  if ((s)) goto L_224;
  c = (i === N.SubscriptionPricingActionPresentation.EqualVertical);
  if (!(T.Device.isIOS())) goto L_275;
  a = n;
  if (!(T.Device.isIOS())) goto L_333;
  if (!(!n)) goto L_333;
  d = (t.kind === V.SubscriptionPricingActionKind.Purchase);
  if (!(T.Device.isIOS())) goto L_3f1;
  if (!(!n)) goto L_3f1;
  l = (t.kind === V.SubscriptionPricingActionKind.OpenExternalCheckout);
  if (!(c)) goto L_4f5;
  if (!((t.kind === V.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_4ad;
  goto L_586;
  // [栈深重同步 1 -> 0]
  goto L_586;
  // [栈深重同步 1 -> 0]
  if (!(n)) goto L_541;
  goto L_586;
  // [栈深重同步 1 -> 0]
  u = x.ButtonVariant.Ghost;
  if (!(n)) goto L_73b;
  if (!((t.kind === V.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_73b;
  if (!((this.surface.presentation.checkoutLayout === V.SubscriptionPricingCheckoutLayout.PrimaryAndSecondary))) goto L_73b;
  p = (t.id !== this.surface.presentation.externalCheckoutIconActionId);
  if (!(o)) goto L_7bb;
  if (!(!p)) goto L_7bb;
  if ((n)) goto L_7bb;
  S = (t.kind === V.SubscriptionPricingActionKind.OpenExternalCheckout);
  if ((this.surface.isActionDisabled(t, r))) goto L_80f;
  y = r;
  if (!((t.kind === V.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_a4c;
  if (!(t.isEnabled)) goto L_a4c;
  if ((this.surface.presentation.isPurchasing)) goto L_9a7;
  if (!(T.Device.isIOS())) goto L_9a7;
  if (!((undefined !== this.surface.activeActionId))) goto L_a4c;
  if (!(!o)) goto L_a4c;
  if (((i === N.SubscriptionPricingActionPresentation.Primary))) goto L_a4c;
  P = T.Device.isIOS();
  if (!((i === N.SubscriptionPricingActionPresentation.Secondary))) goto L_b96;
  if (!((t.kind === V.SubscriptionPricingActionKind.Purchase))) goto L_b96;
  if (!(t.isEnabled)) goto L_b96;
  m = this.surface.presentation.isPurchasing;
  w = this.surface.nativeState.checkout;
  if (!(!w.isPrimaryPurchaseDisabled)) goto L_d5f;
  if ((p)) goto L_d5f;
  if (!((t.kind === V.SubscriptionPricingActionKind.Purchase))) goto L_d5f;
  if (!((w.applePurchase == null))) goto L_cd2;
  w.applePurchase;
  goto L_cf3;
  if (!((true === undefined.isEnabled))) goto L_d5f;
  D = (undefined !== this.surface.presentation.selectedPackageId);
  if (!((i === N.SubscriptionPricingActionPresentation.Primary))) goto L_dd7;
  if (!(w.isExternalCheckoutInProgress)) goto L_dd7;
  R = D;
  if (!(y)) goto L_dfc;
  if (!(!S)) goto L_dfc;
  if (!(!P)) goto L_dfc;
  if (!(!m)) goto L_dfc;
  L = !R;
  if (!(T.Device.isIOS())) goto L_eed;
  if (!(c)) goto L_eed;
  if (!((t.kind === V.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_eed;
  if (!(t.isEnabled)) goto L_eed;
  E = !L;
  _ = t.title;
  if (!(a)) goto L_fb0;
  if (!(s)) goto L_f68;
  goto L_1049;
  // [栈深重同步 1 -> 0]
  goto L_1049;
  // [栈深重同步 1 -> 0]
  if (!(d)) goto L_ffc;
  goto L_1049;
  // [栈深重同步 1 -> 0]
  if (!(l)) goto L_1048;
  goto L_1049;
  // [栈深重同步 1 -> 0]
  q = undefined;
  if (!((q == null))) goto L_1056;
  q;
  goto L_1077;
  H = undefined.attributes;
  if (!(L)) goto L_10c6;
  goto L_11d1;
  // [栈深重同步 1 -> 0]
  if (!((H == null))) goto L_10d1;
  H;
  goto L_10f2;
  if (!((undefined.color == null))) goto L_11d1;
  undefined.color;
  if (!((u === x.ButtonVariant.Primary))) goto L_118c;
  goto L_11d1;
  // [栈深重同步 1 -> 0]
  B = C.OAIColor.InteractiveLabelSecondaryDefault;
  if (((t.id !== this.surface.presentation.externalCheckoutIconActionId))) goto L_1262;
  if (!(o)) goto L_1267;
  goto L_1269;
  // [栈深重同步 1 -> 0]
  K = function <atom:0>;
  e.beginComponent(x.Button, A, t.id, undefined);
  e.setViewModelProperty("accessibilityId", "subscription-pricing-action-".concat(t.id));
  if (!((t.accessibilityLabel == null))) goto L_13c7;
  t.accessibilityLabel;
  e.setViewModelProperty("accessibilityLabel", t.title);
  e.setViewModelProperty("accessibilityStateDisabled", y);
  if (!(s)) goto L_1477;
  if (!(!T.Device.isIOS())) goto L_1477;
  goto L_1478;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("basis", undefined);
  if (!(n)) goto L_14b0;
  e.setViewModelProperty("block", !s);
  e.setViewModelProperty("children", K);
  e.setViewModelProperty("disabled", L);
  if (!(s)) goto L_1545;
  goto L_1546;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("grow", undefined);
  e.setViewModelProperty("label", _);
  e.setViewModelProperty("labelStyle", q);
  e.setViewModelProperty("loading", S);
  if (!(s)) goto L_1659;
  if (!(T.Device.isIOS())) goto L_1659;
  goto L_165a;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("maxWidth", undefined);
  if (!(s)) goto L_16dd;
  if (!(T.Device.isIOS())) goto L_16dd;
  goto L_16de;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("minWidth", undefined);
  if (!(y)) goto L_1713;
  goto L_1715;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onPress", function <atom:0>);
  if (!(s)) goto L_178f;
  goto L_1820;
  // [栈深重同步 4 -> 3]
  if (!(n)) goto L_17db;
  goto L_1820;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("size", C.OAIControlSize.Sm);
  if (!(a)) goto L_1959;
  if (!(E)) goto L_1912;
  if (!(this.usesNativeIOSDarkAppearance)) goto L_18ca;
  goto L_19ad;
  // [栈深重同步 4 -> 3]
  goto L_19ad;
  // [栈深重同步 4 -> 3]
  goto L_19ad;
  // [栈深重同步 4 -> 3]
  if ((d)) goto L_1963;
  if (!(l)) goto L_19ac;
  goto L_19ad;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("style", undefined);
  e.setViewModelProperty("variant", u);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=44 closure=0 cpool=16 bc=1783B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// args: require, module, exports
// locals: e, t, i, r, o, n, s, c, a, d, l, u, p, S, y, P, h, b, g, v, k, I, A, O, m, C, w, x, f, M, T, D, V, R, L, E, N, z, WorkPricingIOSCheckout, <class_fields_init>, WorkPricingIOSCheckout#1
function {
  let WorkPricingIOSCheckout#1;
  let z;
  let N;
  let E;
  let L;
  let R;
  let V;
  let D;
  let T;
  let M;
  let f;
  let x;
  let w;
  let C;
  let m;
  let O;
  let A;
  let I;
  let k;
  let v;
  let g;
  let b;
  let h;
  let P;
  let y;
  let S;
  let p;
  let u;
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
  exports.WorkPricingIOSCheckout = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-purchase-restriction"], "OpNkLMs65GN-nAoT");
  i = e.makeComponentPrototype(["align", "center", "lines", 0], "wukc86gSUowYQ5W1");
  r = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-footer"], "AUY_CIijxGh5cDY2");
  o = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-footer-text"], "N_IIY8nmFqEmHxoO");
  n = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-empty-disclosure"], "MUBnjxCABS1Q8-vW");
  s = e.makeComponentPrototype(["align", "center", "lines", 0], "1v1yxkRdFp_5j_me");
  c = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-empty-store-space"], "pFfzTKMFe9wOvfIM");
  a = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-checkout-actions"], "b14XBV0f7z97XJao");
  d = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-store-loading"], "VyQYYK0Ash21UsBV");
  l = e.makeComponentPrototype(undefined, "D0Qe7zo_enyau7EE");
  u = e.makeComponentPrototype(["accessibilityId", "subscription-pricing-disabled-purchase"], "HMDene34MGUltZpm");
  p = e.makeNodePrototype("view", undefined, "k6cojG4B9KSn212C");
  S = e.makeNodePrototype("label", undefined, "lSt3EFIgQUEBz3m_");
  y = e.makeComponentPrototype(["align", "center", "lines", 0], "OnaZbgf506za4VGU");
  P = e.makeNodePrototype("view", undefined, "mAGKccLv7C4lyjWE");
  h = e.makeNodePrototype("view", undefined, "hCgYmHt90AcqEc1x");
  b = e.makeComponentPrototype(undefined, "0devZZ0l9_O4WgFy");
  g = e.makeNodePrototype("view", undefined, "ZpRZCZn8woIcOXPI");
  v = e.makeNodePrototype("label", ["value", "M"], "n4DTCNG4eYkasdja");
  k = e.makeNodePrototype("image", undefined, "JCHKbI8y2lAhD3rA");
  I = e.makeComponentPrototype(undefined, "OuTxSTTJ3mUd4aWJ");
  A = e.makeComponentPrototype(undefined, "H8LjxVIq7SbBFhQx");
  O = require("dil_icon_assets/src/IconAssets");
  m = require("oai_core/src/OAITheme");
  C = require("oai_core/src/OAITokens");
  w = require("oai_ui/src/components/ActivityIndicator");
  x = require("oai_ui/src/components/Button");
  f = require("oai_ui/src/components/Icon");
  M = require("oai_ui/src/components/Text");
  T = require("valdi_core/src/Device");
  D = require("valdi_core/src/utils/AttributedTextBuilder");
  V = require("./SubscriptionPricingModels");
  R = require("./SubscriptionPricingNativeState");
  L = require("./SubscriptionPricingState");
  E = require("./SubscriptionPricingTypography");
  N = require("./SubscriptionPricingSurface");
  z = require("./WorkPricingIOSCheckoutStyles");
  let WorkPricingIOSCheckout;
  let <class_fields_init>;
  class WorkPricingIOSCheckout extends undefined { ... }
  <proto:WorkPricingIOSCheckout>.themeMode = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.usesNativeIOSDarkAppearance = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.renderPurchaseRestriction = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.render = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.renderFooterText = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.renderRenewalText = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.renderCheckoutActions = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.renderStoreLoadingPurchase = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.renderDisabledPurchase = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.renderUnavailableStoreCheckoutActions = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.renderDisclosure = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.renderLocalizedDisclosureText = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.renderDisclosureText = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.renderSecondaryActions = function <atom:0>;
  <proto:WorkPricingIOSCheckout>.renderAction = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WorkPricingIOSCheckout>;
  WorkPricingIOSCheckout = function <atom:0>;
  // close_loc <class_fields_init>
  WorkPricingIOSCheckout#1 = function <atom:0>;
  exports.WorkPricingIOSCheckout = WorkPricingIOSCheckout#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/WorkPricingIOSCheckout
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
