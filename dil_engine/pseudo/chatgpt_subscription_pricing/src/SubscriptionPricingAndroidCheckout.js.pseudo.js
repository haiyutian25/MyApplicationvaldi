// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: e
function {
  e.Existing = 0;
  e[0] = "Existing";
  e.Work = 1;
  e[1] = "Work";
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.surface = e;
  this.appearance = t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// locals: this
function {
  this = this;
  return this.surface.presentation;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=72B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// locals: this
// closure: T
function {
  this = this;
  return (this.appearance === T.Work);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: t
// closure: e
function {
  return (t.id === e.legalDocumentId);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=74B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: e
// closure: n
function {
  return n.legal.find(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: e
function {
  return (undefined !== e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=75B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: e
// closure: this
function {
  return !this.surface.isActionDisabled(e, false);
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=275B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// closure: e, i, I, this, n
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", I.workFooterCopy);
  this.renderFooterText(n.inlineLegal, n.legal);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=80B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: e
// closure: d
function {
  if (!((d == null))) goto L_2d;
  d;
  goto L_4e;
  return (e.id !== undefined.id);
}

// fn <atom:0>  args=2 vars=7 closure=6 cpool=5 bc=1578B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: o, r
// locals: n, s, c, d, this
// closure: e, i, I, C, t, h
function {
  this = this;
  let d;
  let c;
  let s;
  let n;
  n = C.subscriptionPricingFooterActions(r, this.presentation.disclosureText);
  s = this.presentation.disclosureRichText;
  if (!((s == null))) goto L_ca;
  s;
  goto L_137;
  if (!((undefined.runs.map(function <atom:0>).filter(function <atom:0>) == null))) goto L_13f;
  undefined.runs.map(function <atom:0>).filter(function <atom:0>);
  c = [];
  if (!((undefined === s))) goto L_16d;
  goto L_1a0;
  // [栈深重同步 1 -> 0]
  if (!((c.find(function <atom:0>) == null))) goto L_1a0;
  c.find(function <atom:0>);
  d = c[0];
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", I.footer);
  if (!(this.usesWorkPricing)) goto L_2ff;
  if (!((true === this.presentation.isDarkMode))) goto L_2ff;
  goto L_300;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", undefined);
  e.setAttributeNumber("paddingTop", h.OAISpacing.None);
  if (!(this.usesWorkPricing)) goto L_40b;
  goto L_40c;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("gap", undefined);
  if ((this.usesWorkPricing)) goto L_45d;
  this.renderRestoreSubscription();
  this.renderCheckoutActions(o, n.checkout);
  if (!(this.usesWorkPricing)) goto L_4d4;
  goto L_542;
  // [栈深重同步 1 -> 0]
  this.renderFooterText(n.inlineLegal, n.legal);
  this.renderLegalActions(n.legal.filter(function <atom:0>));
  if (!(this.usesWorkPricing)) goto L_601;
  this.renderRestoreSubscription();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=1106B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// locals: t, this
// closure: e, A, o, I, h
function {
  this = this;
  let t;
  t = this.surface.restoreSubscriptionCopy;
  if (!((undefined !== t))) goto L_451;
  e.beginComponent(A.Button, o, undefined, undefined);
  if (!((t.accessibilityLabel == null))) goto L_11c;
  t.accessibilityLabel;
  e.setViewModelProperty("accessibilityLabel", t.title);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("label", t.title);
  if (!(this.usesWorkPricing)) goto L_213;
  goto L_237;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("labelStyle", I.nativeAndroidRestoreSubscriptionLabel);
  e.setViewModelProperty("onPress", this.surface.restorePurchases);
  e.setViewModelProperty("size", h.OAIControlSize.Lg);
  if (!(this.usesWorkPricing)) goto L_390;
  goto L_3b4;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("style", I.nativeAndroidRestoreSubscriptionAction);
  e.setViewModelProperty("variant", A.ButtonVariant.Ghost);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=220B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: e, t
// locals: this
function {
  this = this;
  if (!((undefined !== this.presentation.footerText))) goto L_b3;
  this.renderRenewalText(this.presentation.footerText);
  this.renderDisclosure(e, t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=5 cpool=1 bc=814B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: t
// locals: i, this
// closure: m, e, v, r, h
function {
  this = this;
  let i;
  i = m.subscriptionPricingTextStyle(m.SubscriptionPricingTextRole.Footer);
  e.beginComponent(v.Text, r, undefined, undefined);
  e.setViewModelProperty("value", t);
  if (!(this.usesWorkPricing)) goto L_140;
  goto L_141;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("letterSpacing", undefined);
  if (!((i == null))) goto L_179;
  i;
  goto L_19a;
  e.setViewModelProperty("font", undefined.font);
  if (!(this.usesWorkPricing)) goto L_1f2;
  goto L_21e;
  // [栈深重同步 4 -> 3]
  if (!((i == null))) goto L_1fd;
  i;
  goto L_21e;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", h.OAITextSize.BodySmall);
  e.setViewModelProperty("tone", v.TextTone.Secondary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: e
// closure: this, s
function {
  return this.renderAction(e, s);   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=5 cpool=1 bc=894B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: t, i
// locals: o, r, s, this
// closure: M, f, e, n, I
function {
  this = this;
  let s;
  let r;
  let o;
  if (!((undefined === t))) goto L_11;
  return;
  o = this.presentation.checkoutLayout;
  if (!((i.length > 0))) goto L_f6;
  if (((o === M.SubscriptionPricingCheckoutLayout.EqualHorizontal))) goto L_f6;
  if (!(!(o === M.SubscriptionPricingCheckoutLayout.EqualVertical))) goto L_190;
  this.renderAction(t, f.SubscriptionPricingActionPresentation.Primary);
  this.renderSecondaryActions(i);
  return;
  r = (o === M.SubscriptionPricingCheckoutLayout.EqualHorizontal);
  if (!(r)) goto L_226;
  goto L_26b;
  // [栈深重同步 1 -> 0]
  s = f.SubscriptionPricingActionPresentation.EqualVertical;
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", I.checkoutActions);
  if (!(r)) goto L_31e;
  goto L_323;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("flexDirection", "column");
  // append([t], 1, i)
  i;
  [t].map(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=72B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: t
// closure: e
function {
  return (t.id === e.legalDocumentId);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// closure: this, t
function {
  return this.surface.executeNativeIntent(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: e
function {
  return e.text;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// closure: this, a
function {
  return this.surface.executeNativeIntent(a);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// closure: this, t
function {
  return this.surface.executeNativeIntent(t);   // tail call
}

// fn <atom:0>  args=2 vars=17 closure=7 cpool=5 bc=2479B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: t, i
// locals: o, t#1, r, n, c, d, l, e, t#2, o#1, a, u, r#1, n#1, this
// closure: m, h, k, e, s, c, I
function {
  this = this;
  let n#1;
  let r#1;
  let o;
  o = this.presentation.disclosureRichText;
  if (!((undefined !== o))) goto L_77f;
  let u;
  let a;
  let l;
  let d;
  let c;
  let n;
  let r;
  let t#1;
  t#1 = m.subscriptionPricingTextStyle(m.SubscriptionPricingTextRole.Footer);
  r = h.resolveOAITextStyle(h.OAITextSize.BodySmall);
  if (!((t#1 == null))) goto L_154;
  t#1;
  goto L_175;
  if (!((undefined.font == null))) goto L_19e;
  undefined.font;
  n = r.font;
  c = new k.AttributedTextBuilder();
  d = undefined;
  l = undefined;
  let e;
  // close_loc e
  for (const e of o.runs) {
    let o#1;
    let t#2;
    t#2 = i.find(function <atom:0>);
    if (!((undefined !== t#2))) goto L_284;
    o#1 = !this.surface.isActionDisabled(t#2, false);
    if (!((undefined !== t#2))) goto L_29f;
    if (!((undefined === d))) goto L_29f;
    d = t#2;
    t#2;
    if (!(o#1)) goto L_2b7;
    if (!((undefined === l))) goto L_2b7;
    l = t#2;
    t#2;
    if (!((undefined === t#2))) goto L_34f;
    goto L_3a4;
    // [栈深重同步 8 -> 7]
    if (!((true === this.presentation.isDarkMode))) goto L_39f;
    goto L_3a4;
    // [栈深重同步 8 -> 7]
    if (!(o#1)) goto L_3ba;
    goto L_3bb;
    // [栈深重同步 8 -> 7]
    if (!((undefined === t#2))) goto L_3ca;
    goto L_3cf;
    // [栈深重同步 8 -> 7]
    c.append(e.text, {color: "#1D53BF", font: n, onTap: undefined, textDecoration: "underline"});
    // close_loc t#2
    // close_loc e
  }
  // close_loc e
  a = l;
  if (!((a == null))) goto L_3fa;
  a;
  u = d;
  e.beginRender(s, undefined);
  if (!((undefined === u))) goto L_45f;
  goto L_464;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityCategory", "link");
  if (!((undefined === u))) goto L_49b;
  goto L_4e8;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityId", "subscription-pricing-action-".concat(u.id));
  e.setAttributeString("accessibilityLabel", o.runs.map(function <atom:0>).join(""));
  if (!((undefined === u))) goto L_5bb;
  goto L_5c0;
  // [栈深重同步 4 -> 3]
  e.setAttribute("accessibilityStateDisabled", (undefined === a));
  e.setAttributeString("color", h.OAIColor.TextSecondary);
  e.setAttributeString("font", n);
  if (!((t#1 == null))) goto L_69a;
  t#1;
  goto L_6bb;
  if (!((undefined.lineHeightMultiple == null))) goto L_6c5;
  undefined.lineHeightMultiple;
  e.setAttributeNumber("lineHeightMultiple", (16 / 12));
  if (!((undefined === a))) goto L_6fc;
  goto L_6fe;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", function <atom:0>);
  e.setAttribute("value", c.build());
  e.endRender();
  return;
  r#1 = this.presentation.disclosureText;
  if (!((undefined === r#1))) goto L_7cd;
  return;
  if (!((undefined === t))) goto L_7fd;
  this.renderDisclosureText(r#1);
  return;
  n#1 = this.surface.isActionDisabled(t, false);
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", I.disclosureLink);
  e.setAttributeString("accessibilityLabel", r#1);
  e.setAttribute("accessibilityStateDisabled", n#1);
  if (!(n#1)) goto L_957;
  goto L_959;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", function <atom:0>);
  this.renderDisclosureText(r#1);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=683B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: t
// locals: i
// closure: m, e, v, d, h
function {
  let i;
  i = m.subscriptionPricingTextStyle(m.SubscriptionPricingTextRole.Footer);
  e.beginComponent(v.Text, d, undefined, undefined);
  e.setViewModelProperty("value", t);
  if (!((i == null))) goto L_121;
  i;
  goto L_142;
  e.setViewModelProperty("font", undefined.font);
  if (!((i == null))) goto L_17a;
  i;
  goto L_19b;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", h.OAITextSize.BodySmall);
  e.setViewModelProperty("tone", v.TextTone.Secondary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=107B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: e
// closure: this, f
function {
  return this.renderAction(e, f.SubscriptionPricingActionPresentation.Secondary);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=1 bc=218B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: t
// locals: this
// closure: f, e, l, I
function {
  this = this;
  if (!((0 !== t.length))) goto L_d9;
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", I.secondaryActions);
  t.map(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// closure: this, t
function {
  return this.surface.executeNativeIntent(t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=7 cpool=1 bc=1084B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: t
// locals: o
// closure: this, e, u, v, p, i, h
function {
  let o;
  o = this.surface.isActionDisabled(t, false);
  e.beginRender(u, undefined);
  e.setAttributeString("accessibilityId", "subscription-pricing-action-".concat(t.id));
  e.setAttributeString("accessibilityLabel", t.title);
  e.setAttribute("accessibilityStateDisabled", o);
  if (!(o)) goto L_1a1;
  goto L_1a3;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", function <atom:0>);
  e.beginComponent(v.Text, p, undefined, undefined);
  e.setViewModelProperty("value", t.title);
  if (!((true === this.presentation.isDarkMode))) goto L_2bf;
  goto L_2c4;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("color", "#1D53BF");
  if (!((i == null))) goto L_2fc;
  i;
  goto L_31d;
  e.setViewModelProperty("font", undefined.font);
  if (!((i == null))) goto L_355;
  i;
  goto L_376;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", h.OAITextSize.BodySmall);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=8 cpool=1 bc=438B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: t
// locals: i, this
// closure: e, u, v, p, h, m, a, I
function {
  this = this;
  let i;
  if (!((0 === t.length))) goto L_c;
  return;
  i = m.subscriptionPricingTextStyle(m.SubscriptionPricingTextRole.Footer);
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", I.secondaryActions);
  e.setAttributeNumber("marginTop", h.OAISpacing.One);
  t.map(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=14 cpool=0 bc=1408B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// closure: e, b, I, v, y, T, D, O, h, S, P, n, s, this
function {
  e.beginRender(b, undefined);
  e.setAttributeStyle("style", I.externalCheckoutActionLabel);
  e.beginComponent(v.Text, y, undefined, undefined);
  e.setViewModelProperty("value", T);
  if (!((D == null))) goto L_132;
  D;
  goto L_153;
  e.setViewModelProperty("align", undefined.textAlign);
  e.setViewModelProperty("color", O);
  if (!((D == null))) goto L_1bb;
  D;
  goto L_1dc;
  e.setViewModelProperty("font", undefined.font);
  if (!((D == null))) goto L_214;
  D;
  goto L_235;
  e.setViewModelProperty("lineHeight", undefined.lineHeight);
  if (!((D == null))) goto L_26d;
  D;
  goto L_28e;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  if (!((D == null))) goto L_2c6;
  D;
  goto L_2e7;
  e.setViewModelProperty("numberOfLines", undefined.numberOfLines);
  e.setViewModelProperty("size", h.OAITextSize.BodyStrong);
  if (!((D == null))) goto L_391;
  D;
  goto L_3b2;
  e.setViewModelProperty("textDecoration", undefined.textDecoration);
  e.endComponent();
  e.beginComponent(S.Icon, P, undefined, undefined);
  e.setViewModelProperty("color", O);
  if (!(n)) goto L_497;
  if (!(!s)) goto L_497;
  goto L_499;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("size", 14);
  e.setViewModelProperty("src", this.surface.iconAssets.externalLink);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// closure: this, t
function {
  return this.surface.executeNativeIntent(t);   // tail call
}

// fn <atom:0>  args=2 vars=24 closure=12 cpool=2 bc=5143B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: t, i
// locals: o, r, n, s, c, d, l, a, u, p, k, x, m, w, C, V, T, L, D, O, R, this
// closure: e, b, I, v, y, h, S, P, f, M, A, g
function {
  this = this;
  let R;
  let O;
  let D;
  let L;
  let T;
  let V;
  let C;
  let w;
  let m;
  let x;
  let k;
  let p;
  let u;
  let a;
  let l;
  let d;
  let c;
  let s;
  let n;
  let r;
  let o;
  o = (this.surface.activeActionId === t.id);
  if ((t.isLoading)) goto L_11b;
  if (!(o)) goto L_11b;
  r = this.presentation.isPurchasing;
  n = (i !== f.SubscriptionPricingActionPresentation.Secondary);
  s = (i === f.SubscriptionPricingActionPresentation.EqualHorizontal);
  if ((s)) goto L_1fa;
  c = (i === f.SubscriptionPricingActionPresentation.EqualVertical);
  if (!(n)) goto L_207;
  d = !s;
  if (!(c)) goto L_30b;
  if (!((t.kind === M.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_2c3;
  goto L_39c;
  // [栈深重同步 1 -> 0]
  goto L_39c;
  // [栈深重同步 1 -> 0]
  if (!(n)) goto L_357;
  goto L_39c;
  // [栈深重同步 1 -> 0]
  l = A.ButtonVariant.Ghost;
  if (!(n)) goto L_50c;
  if (!((t.kind === M.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_50c;
  if (!((this.presentation.checkoutLayout === M.SubscriptionPricingCheckoutLayout.PrimaryAndSecondary))) goto L_50c;
  a = (t.id !== this.presentation.externalCheckoutIconActionId);
  if (!(r)) goto L_58c;
  if (!(!a)) goto L_58c;
  if ((n)) goto L_58c;
  u = (t.kind === M.SubscriptionPricingActionKind.OpenExternalCheckout);
  if ((this.surface.isActionDisabled(t, o))) goto L_5e0;
  p = o;
  if (!((t.kind === M.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_711;
  if (!(t.isEnabled)) goto L_711;
  if (!(this.presentation.isPurchasing)) goto L_711;
  if (!(!r)) goto L_711;
  k = (i === f.SubscriptionPricingActionPresentation.Primary);
  if (!((i === f.SubscriptionPricingActionPresentation.Secondary))) goto L_837;
  if (!((t.kind === M.SubscriptionPricingActionKind.Purchase))) goto L_837;
  if (!(t.isEnabled)) goto L_837;
  x = this.presentation.isPurchasing;
  m = this.surface.nativeState.checkout;
  if (!(!m.isPrimaryPurchaseDisabled)) goto L_9df;
  if ((a)) goto L_9df;
  if (!((t.kind === M.SubscriptionPricingActionKind.Purchase))) goto L_9df;
  if (!((m.applePurchase == null))) goto L_973;
  m.applePurchase;
  goto L_994;
  if (!((true === undefined.isEnabled))) goto L_9df;
  w = (undefined !== this.presentation.selectedPackageId);
  if (!((i === f.SubscriptionPricingActionPresentation.Primary))) goto L_a57;
  if (!(m.isExternalCheckoutInProgress)) goto L_a57;
  C = w;
  if (!(p)) goto L_a7c;
  if (!(!u)) goto L_a7c;
  if (!(!k)) goto L_a7c;
  if (!(!x)) goto L_a7c;
  V = !C;
  T = t.title;
  if (!(d)) goto L_b18;
  if (!(this.usesWorkPricing)) goto L_af2;
  goto L_b19;
  // [栈深重同步 1 -> 0]
  goto L_b19;
  // [栈深重同步 1 -> 0]
  L = undefined;
  if (!((L == null))) goto L_b26;
  L;
  goto L_b47;
  D = undefined.attributes;
  if (!(V)) goto L_b96;
  goto L_ca1;
  // [栈深重同步 1 -> 0]
  if (!((D == null))) goto L_ba1;
  D;
  goto L_bc2;
  if (!((undefined.color == null))) goto L_ca1;
  undefined.color;
  if (!((l === A.ButtonVariant.Primary))) goto L_c5c;
  goto L_ca1;
  // [栈深重同步 1 -> 0]
  O = h.OAIColor.InteractiveLabelSecondaryDefault;
  if (((t.id !== this.presentation.externalCheckoutIconActionId))) goto L_d11;
  if (!(r)) goto L_d16;
  goto L_d18;
  // [栈深重同步 1 -> 0]
  R = function <atom:0>;
  e.beginComponent(A.Button, g, t.id, undefined);
  e.setViewModelProperty("accessibilityId", "subscription-pricing-action-".concat(t.id));
  if (!((t.accessibilityLabel == null))) goto L_e76;
  t.accessibilityLabel;
  e.setViewModelProperty("accessibilityLabel", t.title);
  e.setViewModelProperty("accessibilityStateDisabled", p);
  if (!(s)) goto L_edb;
  goto L_edc;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("basis", undefined);
  if (!(n)) goto L_f14;
  e.setViewModelProperty("block", !s);
  e.setViewModelProperty("children", R);
  e.setViewModelProperty("disabled", V);
  if (!(d)) goto L_fcc;
  goto L_fcd;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("disabledStyle", undefined);
  if (!(s)) goto L_1002;
  goto L_1003;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("grow", undefined);
  e.setViewModelProperty("label", T);
  e.setViewModelProperty("labelStyle", L);
  e.setViewModelProperty("loading", u);
  if (!(d)) goto L_11d4;
  if (!(!this.usesWorkPricing)) goto L_11d4;
  if (!((undefined !== this.surface.restoreSubscriptionCopy))) goto L_11d4;
  goto L_11d5;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("margin", undefined);
  if (!(p)) goto L_120a;
  goto L_120c;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onPress", function <atom:0>);
  if (!(s)) goto L_1286;
  goto L_1317;
  // [栈深重同步 4 -> 3]
  if (!(n)) goto L_12d2;
  goto L_1317;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("size", h.OAIControlSize.Sm);
  if (!(d)) goto L_13ba;
  if (!(this.usesWorkPricing)) goto L_1394;
  goto L_13bb;
  // [栈深重同步 4 -> 3]
  goto L_13bb;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("style", undefined);
  e.setViewModelProperty("variant", l);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=37 closure=0 cpool=14 bc=1525B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// args: require, module, exports
// locals: e, t, i, o, r, n, s, c, d, l, a, u, p, b, y, P, g, h, A, S, v, k, x, m, M, w, C, f, V, I, T, SubscriptionPricingAndroidCheckout, <class_fields_init>, SubscriptionPricingAndroidCheckout#1
function {
  let SubscriptionPricingAndroidCheckout#1;
  let I;
  let V;
  let f;
  let C;
  let w;
  let M;
  let m;
  let x;
  let k;
  let v;
  let S;
  let A;
  let h;
  let g;
  let P;
  let y;
  let b;
  let p;
  let u;
  let a;
  let l;
  let d;
  let c;
  let s;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AndroidPricingCheckoutAppearance = undefined;
  exports.SubscriptionPricingAndroidCheckout = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-footer"], "nDKoI-mZMtiFZiCS");
  i = e.makeNodePrototype("layout", undefined, "D3ZouyhvrKA2OrPZ");
  o = e.makeComponentPrototype(["accessibilityId", "subscription-pricing-restore-subscription"], "HvcItlAhCYKgGZ--");
  r = e.makeComponentPrototype(["align", "center", "lines", 0], "fqwttisMoYetHiGI");
  n = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-checkout-actions"], "uJdW1WmjTg5x9WI1");
  s = e.makeNodePrototype("label", ["numberOfLines", 0, "textAlign", "center", "width", "100%"], "shIlUQ-6w_Y98mkL");
  c = e.makeNodePrototype("view", undefined, "iUxbQRADf5xoYKa-");
  d = e.makeComponentPrototype(["align", "center", "lines", 0], "SU2glzq_q8JAJe1q");
  l = e.makeNodePrototype("view", undefined, "CV3i60LfnAnYcKxp");
  a = e.makeNodePrototype("view", undefined, "l0Tsfua2Z7G-7Flo");
  u = e.makeNodePrototype("view", ["accessibilityCategory", "link"], "BMRDpLSaMSD4hOfx");
  p = e.makeComponentPrototype(["align", "center"], "l-LsMgpeo10yf_B5");
  b = e.makeNodePrototype("view", undefined, "CUUHt5ssqH9MCaE4");
  y = e.makeComponentPrototype(undefined, "AYPZFQH3fY6x4bv4");
  P = e.makeComponentPrototype(undefined, "XXjPyDagNOfSv1eV");
  g = e.makeComponentPrototype(undefined, "P4nrohFZxgDfNpi1");
  h = require("oai_core/src/OAITokens");
  A = require("oai_ui/src/components/Button");
  S = require("oai_ui/src/components/Icon");
  v = require("oai_ui/src/components/Text");
  k = require("valdi_core/src/utils/AttributedTextBuilder");
  x = require("./SubscriptionPricingAndroidStyles");
  m = require("./SubscriptionPricingAndroidTypography");
  M = require("./SubscriptionPricingModels");
  w = require("./SubscriptionPricingSharedStyles");
  C = require("./SubscriptionPricingState");
  f = require("./SubscriptionPricingSurface");
  V = require("./WorkPricingStyles");
  null;
  w.subscriptionPricingSharedStyles;
  null;
  x.subscriptionPricingAndroidStyles;
  null;
  V.workPricingStyles;
  I = {};
  if ((T)) goto L_56a;
  T = {};
  exports.AndroidPricingCheckoutAppearance = {};
  !function <atom:0>({});
  let SubscriptionPricingAndroidCheckout;
  let <class_fields_init>;
  class SubscriptionPricingAndroidCheckout extends undefined { ... }
  <proto:SubscriptionPricingAndroidCheckout>.presentation = function <atom:0>;
  <proto:SubscriptionPricingAndroidCheckout>.usesWorkPricing = function <atom:0>;
  <proto:SubscriptionPricingAndroidCheckout>.render = function <atom:0>;
  <proto:SubscriptionPricingAndroidCheckout>.renderRestoreSubscription = function <atom:0>;
  <proto:SubscriptionPricingAndroidCheckout>.renderFooterText = function <atom:0>;
  <proto:SubscriptionPricingAndroidCheckout>.renderRenewalText = function <atom:0>;
  <proto:SubscriptionPricingAndroidCheckout>.renderCheckoutActions = function <atom:0>;
  <proto:SubscriptionPricingAndroidCheckout>.renderDisclosure = function <atom:0>;
  <proto:SubscriptionPricingAndroidCheckout>.renderDisclosureText = function <atom:0>;
  <proto:SubscriptionPricingAndroidCheckout>.renderSecondaryActions = function <atom:0>;
  <proto:SubscriptionPricingAndroidCheckout>.renderLegalActions = function <atom:0>;
  <proto:SubscriptionPricingAndroidCheckout>.renderAction = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscriptionPricingAndroidCheckout>;
  SubscriptionPricingAndroidCheckout = function <atom:0>;
  // close_loc <class_fields_init>
  SubscriptionPricingAndroidCheckout#1 = function <atom:0>;
  exports.SubscriptionPricingAndroidCheckout = SubscriptionPricingAndroidCheckout#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidCheckout
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
