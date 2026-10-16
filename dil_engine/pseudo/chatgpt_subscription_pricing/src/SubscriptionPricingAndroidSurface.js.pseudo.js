// fn he  args=5 vars=5 closure=1 cpool=0 bc=51B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: e, t, i, o, r
// closure: AndroidSubscriptionPricingRenderer
function {
  new AndroidSubscriptionPricingRenderer(e).render(t, i, o, r);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
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

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// locals: this
function {
  this = this;
  return this.surface.presentation;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=0 bc=823B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// closure: e, i, Se, o, l, se, a, this, r, n
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", Se.scroll);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", Se.body);
  if (!(l)) goto L_16f;
  goto L_1bc;
  // [栈深重同步 4 -> 3]
  if (!(a)) goto L_1bb;
  goto L_1bc;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("gap", undefined);
  e.setAttributeNumber("paddingTop", se.OAISpacing.Half);
  this.renderHero(r);
  this.renderPlanPicker(r);
  if (!((undefined !== r))) goto L_2be;
  this.renderPlan(r, n);
  this.renderError();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=4 vars=7 closure=7 cpool=1 bc=796B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: r, n, d, s
// locals: l, a, this
// closure: e, i, Se, o, se, t, ye
function {
  this = this;
  let a;
  let l;
  l = (this.presentation.plans.length > 1);
  if (!((r == null))) goto L_5d;
  r;
  goto L_7e;
  if ((("pro" === undefined.id))) goto L_b3;
  if (!((r == null))) goto L_91;
  r;
  goto L_b2;
  a = ("prolite" === undefined.id);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", Se.root);
  e.setAttributeNumber("paddingBottom", se.OAISpacing.Six);
  this.renderHeader();
  if (!(this.presentation.isLoading)) goto L_23a;
  if (!((undefined === r))) goto L_23a;
  goto L_23d;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  new ye.SubscriptionPricingAndroidCheckout(this.surface, ye.AndroidPricingCheckoutAppearance.Existing).render(d, s);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=991B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// locals: this
// closure: e, r, Se, se, n, d
function {
  this = this;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", Se.header);
  e.setAttributeNumber("height", se.OAISpacing.Twelve);
  e.setAttributeNumber("paddingLeft", se.OAISpacing.OnePointSeventyFive);
  e.setAttributeNumber("paddingRight", se.OAISpacing.OnePointSeventyFive);
  e.setAttributeNumber("paddingTop", se.OAISpacing.Three);
  this.renderDismissButton();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", Se.headerTitle);
  e.endRender();
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", Se.headerSpacer);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=660B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// closure: e, l, Se, a, p, c
function {
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", Se.nativeAndroidDismissGlyph);
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", Se.nativeAndroidDismissGlyphShaft);
  e.endRender();
  e.beginRender(p, undefined);
  e.setAttributeStyle("style", Se.nativeAndroidDismissGlyphHeadUpper);
  e.endRender();
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", Se.nativeAndroidDismissGlyphHeadLower);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=1 bc=744B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// locals: this
// closure: e, l, Se, a, p, c, ce, s
function {
  this = this;
  e.beginComponent(ce.Pressable, s, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", this.presentation.closeAccessibilityLabel);
  e.setViewModelProperty("disabled", this.surface.dismissalDisabled);
  e.setViewModelProperty("disabledStyle", Se.nativeAndroidDisabledDismissAction);
  e.setViewModelProperty("onPress", this.surface.dismiss);
  e.setViewModelProperty("pressedStyle", Se.nativeAndroidPressedDismissAction);
  e.setViewModelProperty("style", Se.nativeAndroidDismissAction);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=514B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// locals: this
// closure: e, u, Se, le, b
function {
  this = this;
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", Se.loading);
  e.beginComponent(le.ActivityIndicator, b, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", this.presentation.title);
  e.setViewModelProperty("size", le.ActivityIndicatorSize.Medium);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=769B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// closure: e, ue, y, this, i, o, se
function {
  e.beginComponent(ue.Text, y, undefined, undefined);
  e.setViewModelProperty("value", this.presentation.subtitle);
  if (!((i == null))) goto L_f5;
  i;
  goto L_116;
  e.setViewModelProperty("font", undefined.font);
  if (!(o)) goto L_18f;
  goto L_190;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("lineHeight", undefined);
  if (!(o)) goto L_1c5;
  goto L_1f1;
  // [栈深重同步 4 -> 3]
  if (!((i == null))) goto L_1d0;
  i;
  goto L_1f1;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", se.OAITextSize.BodyMedium);
  e.setViewModelProperty("tone", ue.TextTone.Secondary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=7 cpool=1 bc=1097B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t
// locals: i, o, this
// closure: e, ue, y, se, ve, g, Se
function {
  this = this;
  let o;
  let i;
  i = ve.subscriptionPricingTextStyle(ve.SubscriptionPricingTextRole.HeroSubtitle);
  if (!((t == null))) goto L_81;
  t;
  goto L_a2;
  if ((("pro" === undefined.id))) goto L_d7;
  if (!((t == null))) goto L_b5;
  t;
  goto L_d6;
  o = ("prolite" === undefined.id);
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", Se.hero);
  if (!((this.presentation.plans.length > 1))) goto L_2a6;
  if (!(o)) goto L_216;
  goto L_337;
  // [栈深重同步 4 -> 3]
  goto L_337;
  // [栈深重同步 4 -> 3]
  if (!(o)) goto L_2f2;
  goto L_337;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingBottom", se.OAISpacing.Two);
  e.setAttributeNumber("paddingTop", se.OAISpacing.None);
  this.renderHeroTitle(t);
  if (!((undefined !== this.presentation.subtitle))) goto L_420;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=7 closure=8 cpool=0 bc=2171B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t
// locals: i, o, r, n, t#1, this
// closure: ve, ge, se, e, P, Se, ue, v
function {
  this = this;
  let n;
  let r;
  let o;
  let i;
  i = this.presentation.title;
  o = ve.subscriptionPricingTextStyle(ve.SubscriptionPricingTextRole.HeroTitle);
  if (!((t == null))) goto L_c8;
  t;
  goto L_e9;
  r = undefined.title;
  if (!((this.presentation.titleAccentRange == null))) goto L_189;
  this.presentation.titleAccentRange;
  if (!((undefined !== r))) goto L_188;
  if (!((r.length > 0))) goto L_188;
  if (!(i.endsWith(r))) goto L_188;
  goto L_189;
  // [栈深重同步 1 -> 0]
  n = undefined;
  if (!((undefined !== n))) goto L_6ae;
  let t#1;
  if (!((o == null))) goto L_282;
  o;
  goto L_2a3;
  if (!((o == null))) goto L_36f;
  o;
  goto L_390;
  t#1 = new ge.AttributedTextBuilder().append(i.slice(0, n.start), {color: se.OAIColor.TextPrimary, font: undefined.font}).append(i.slice(n.start, n.end), {color: this.planAccentColor, font: undefined.font});
  if (!((n.end < i.length))) goto L_4b8;
  if (!((o == null))) goto L_48f;
  o;
  goto L_4b0;
  t#1.append(i.slice(n.end), {color: se.OAIColor.TextPrimary, font: undefined.font});
  e.beginRender(P, undefined);
  e.setAttributeStyle("style", Se.nativeAndroidHeroTitle);
  e.setAttributeString("accessibilityLabel", i);
  e.setAttributeString("color", se.OAIColor.TextPrimary);
  if (!((o == null))) goto L_60c;
  o;
  goto L_62d;
  e.setAttributeString("font", undefined.font);
  e.setAttribute("value", t#1.build());
  e.endRender();
  return;
  e.beginComponent(ue.Text, v, undefined, undefined);
  e.setViewModelProperty("value", i);
  if (!((o == null))) goto L_763;
  o;
  goto L_784;
  e.setViewModelProperty("font", undefined.font);
  if (!((o == null))) goto L_7bc;
  o;
  goto L_7dd;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", se.OAITextSize.HeadlineMedium);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=40B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: e, i
// closure: this, t
function {
  return this.renderPlanOption(e, t, i);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=39B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: e, i
// closure: this, t
function {
  return this.renderAndroidPlanDivider(t, i);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=2 bc=573B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t
// locals: this
// closure: e, A, Se
function {
  this = this;
  if (((this.presentation.plans.length < 2))) goto L_23c;
  e.beginRender(A, undefined);
  e.setAttributeStyle("style", Se.nativeAndroidPlanPicker);
  e.setAttributeString("borderColor", this.nativeAndroidPlanPickerBorderColor);
  this.presentation.plans.map(function <atom:0>);
  this.presentation.plans.slice(0, -1).map(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=8 closure=4 cpool=0 bc=941B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t, i
// locals: o, r, n, d, s, this
// closure: e, m, Se, se
function {
  this = this;
  let s;
  let d;
  let n;
  let r;
  let o;
  o = this.presentation.plans;
  if (!((o[i] == null))) goto L_64;
  o[i];
  goto L_85;
  if (!((t == null))) goto L_8e;
  t;
  goto L_af;
  r = (undefined.id === undefined.id);
  if (!((o[(i + 1)] == null))) goto L_c0;
  o[(i + 1)];
  goto L_e1;
  if (!((t == null))) goto L_ea;
  t;
  goto L_10b;
  n = (undefined.id === undefined.id);
  d = (((i + 1) / o.length) * 100);
  if (!(n)) goto L_125;
  goto L_15d;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_131;
  goto L_15d;
  // [栈深重同步 1 -> 0]
  s = "subscription-pricing-plan-divider-".concat((i + 1));
  e.beginRender(m, "subscription-pricing-plan-divider-".concat(i));
  e.setAttributeStyle("style", Se.nativeAndroidPlanDivider);
  e.setAttributeString("accessibilityId", s);
  if ((r)) goto L_268;
  if (!(n)) goto L_28f;
  goto L_2b2;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", this.nativeAndroidPlanPickerBorderColor);
  e.setAttributeString("left", "".concat(d, "%"));
  e.setAttributeNumber("marginLeft", (-se.OAISpacing.Px / 2));
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// closure: this, t
function {
  return this.surface.selectPlan(t);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=7 cpool=2 bc=2481B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t, i, o
// locals: r, n, d, this
// closure: ve, e, S, Se, se, ue, h
function {
  this = this;
  let d;
  let n;
  let r;
  if (!((i == null))) goto L_36;
  i;
  goto L_57;
  r = (t.id === undefined.id);
  n = ve.subscriptionPricingTextStyle(ve.SubscriptionPricingTextRole.PlanOption);
  if ((this.presentation.isPurchasing)) goto L_177;
  if (((undefined !== this.surface.activeActionId))) goto L_177;
  d = !t.isEnabled;
  e.beginRender(S, t.id);
  e.setAttributeStyle("style", Se.nativeAndroidPlanOption);
  e.setAttributeString("accessibilityId", "subscription-pricing-plan-".concat(t.id));
  e.setAttributeString("accessibilityLabel", t.title);
  e.setAttribute("accessibilityStateDisabled", d);
  e.setAttribute("accessibilityStateSelected", r);
  if (!(r)) goto L_3b2;
  goto L_3b3;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", undefined);
  if (!(r)) goto L_42c;
  goto L_42d;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderColor", undefined);
  if (!((0 === o))) goto L_519;
  goto L_626;
  // [栈深重同步 4 -> 3]
  if (!((o === (this.presentation.plans.length - 1)))) goto L_625;
  goto L_626;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderRadius", undefined);
  if (!(r)) goto L_65b;
  goto L_65c;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", undefined);
  if (!(d)) goto L_691;
  goto L_693;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", function <atom:0>);
  if (!(t.isEnabled)) goto L_6e7;
  goto L_6e9;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0.5);
  if (!(r)) goto L_71e;
  goto L_71f;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("zIndex", undefined);
  e.beginComponent(ue.Text, h, undefined, undefined);
  e.setViewModelProperty("value", t.title);
  if (!((n == null))) goto L_7f7;
  n;
  goto L_818;
  e.setViewModelProperty("font", undefined.font);
  if (!((n == null))) goto L_850;
  n;
  goto L_871;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", se.OAITextSize.LabelLarge);
  if (!(r)) goto L_95c;
  goto L_95d;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("tone", undefined);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=806B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// closure: e, w, Se, ue, M, this, r, se
function {
  e.beginRender(w, undefined);
  e.setAttributeStyle("style", Se.nativeAndroidProFeatureHeading);
  e.beginComponent(ue.Text, M, undefined, undefined);
  e.setViewModelProperty("value", this.presentation.featuresTitle);
  if (!((r == null))) goto L_174;
  r;
  goto L_195;
  e.setViewModelProperty("font", undefined.font);
  if (!((r == null))) goto L_1cd;
  r;
  goto L_1ee;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", se.OAITextSize.LabelLarge);
  e.setViewModelProperty("tone", ue.TextTone.Secondary);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=525B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// closure: e, ue, C, this, r, se
function {
  e.beginComponent(ue.Text, C, undefined, undefined);
  e.setViewModelProperty("value", this.presentation.featuresTitle);
  if (!((r == null))) goto L_f5;
  r;
  goto L_116;
  e.setViewModelProperty("font", undefined.font);
  if (!((r == null))) goto L_14e;
  r;
  goto L_16f;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", se.OAITextSize.LabelLarge);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=42B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: e, t
// closure: this, n
function {
  return this.renderFeature(e, t, n);   // tail call
}

// fn <atom:0>  args=2 vars=10 closure=11 cpool=3 bc=2535B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t, i
// locals: o, r, n, d, s, l, a, this
// closure: e, w, Se, ue, M, se, C, ve, Ae, T, k
function {
  this = this;
  let a;
  let l;
  let s;
  let d;
  let n;
  let r;
  let o;
  o = t.originalPrice;
  r = ve.subscriptionPricingTextStyle(ve.SubscriptionPricingTextRole.ProHeading);
  if (!((undefined !== this.presentation.featuresTitle))) goto L_136;
  n = (undefined !== this.presentation.comparisonPlanTitle);
  if (!(!n)) goto L_193;
  if ((("pro" === t.id))) goto L_193;
  d = ("prolite" === t.id);
  if (!(n)) goto L_1e2;
  s = (this.presentation.plans.length > 1);
  if (!(!d)) goto L_1f0;
  l = !s;
  if (!(n)) goto L_323;
  if (((undefined !== o))) goto L_323;
  if (((this.presentation.checkoutLayout === Ae.SubscriptionPricingCheckoutLayout.EqualHorizontal))) goto L_323;
  a = (this.presentation.checkoutLayout === Ae.SubscriptionPricingCheckoutLayout.EqualVertical);
  e.beginRender(T, undefined);
  if (!(d)) goto L_3a5;
  goto L_3f4;
  // [栈深重同步 4 -> 3]
  if (!(s)) goto L_3d0;
  goto L_3f4;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", Se.plan);
  e.setAttributeString("accessibilityId", "subscription-pricing-selected-plan-".concat(t.id));
  if (!(l)) goto L_4a1;
  goto L_4a2;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderRadius", undefined);
  if (!(l)) goto L_4d7;
  goto L_4d8;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", undefined);
  if (!(n)) goto L_551;
  goto L_552;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("gap", undefined);
  if (!(l)) goto L_587;
  goto L_588;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingBottom", undefined);
  if (!(l)) goto L_5bd;
  goto L_5be;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingLeft", undefined);
  if (!(l)) goto L_5f3;
  goto L_5f4;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingRight", undefined);
  if (!(d)) goto L_702;
  if (!((this.presentation.plans.length > 1))) goto L_702;
  goto L_70b;
  // [栈深重同步 4 -> 3]
  if (!(l)) goto L_70a;
  goto L_70b;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingTop", undefined);
  if (!(a)) goto L_740;
  this.renderSelectedPrice(t, o);
  if (!(n)) goto L_76f;
  goto L_7a0;
  // [栈深重同步 1 -> 0]
  if ((d)) goto L_7a0;
  this.renderPlanHeading(t, o);
  this.renderPackages(t, i, d);
  if ((n)) goto L_82b;
  if (((undefined === this.presentation.featuresTitle))) goto L_82b;
  if (!(d)) goto L_828;
  goto L_82b;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  e.beginRender(k, undefined);
  if (!(d)) goto L_8ac;
  goto L_8d0;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", Se.featureList);
  if (!(n)) goto L_949;
  goto L_94a;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("gap", undefined);
  t.features.map(function <atom:0>);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=10 cpool=0 bc=1514B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t, i
// locals: this
// closure: e, R, Se, x, ue, I, se, ae, f, V
function {
  this = this;
  e.beginRender(R, undefined);
  e.setAttributeStyle("style", Se.planHeading);
  e.beginRender(x, undefined);
  e.setAttributeStyle("style", Se.planTitleRow);
  e.beginComponent(ue.Text, I, undefined, undefined);
  e.setViewModelProperty("value", t.title);
  e.setViewModelProperty("size", se.OAITextSize.TitleLarge);
  e.endComponent();
  if (!((undefined !== t.badge))) goto L_39a;
  e.beginComponent(ae.Badge, f, undefined, undefined);
  e.setViewModelProperty("tone", ae.BadgeTone.Accent);
  e.setViewModelProperty("value", t.badge);
  e.endComponent();
  e.endRender();
  if (!((undefined !== t.subtitle))) goto L_599;
  e.beginComponent(ue.Text, V, undefined, undefined);
  e.setViewModelProperty("value", t.subtitle);
  e.setViewModelProperty("size", se.OAITextSize.BodyMedium);
  e.setViewModelProperty("tone", ue.TextTone.Secondary);
  e.endComponent();
  this.renderSelectedPrice(t, i);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=8 cpool=0 bc=1131B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t, i
// locals: o, this
// closure: ve, e, O, Se, N, ue, H, se
function {
  this = this;
  let o;
  o = ve.subscriptionPricingTextStyle(ve.SubscriptionPricingTextRole.HeadlinePrice);
  e.beginRender(O, undefined);
  e.setAttributeStyle("style", Se.priceRow);
  if (!((undefined !== i))) goto L_1c9;
  e.beginRender(N, undefined);
  e.setAttributeStyle("style", Se.originalPrice);
  e.setAttributeString("value", i);
  e.endRender();
  e.beginComponent(ue.Text, H, undefined, undefined);
  e.setViewModelProperty("value", t.price);
  if (!((o == null))) goto L_29e;
  o;
  goto L_2bf;
  e.setViewModelProperty("font", undefined.font);
  if (!((o == null))) goto L_2f7;
  o;
  goto L_318;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", se.OAITextSize.HeadlineMedium);
  e.endComponent();
  this.renderBillingPeriod(t.billingPeriod, ve.SubscriptionPricingTextRole.HeadlineBillingPeriod);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=12 cpool=0 bc=2861B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t
// locals: i, this
// closure: ve, e, z, Se, se, L, ue, B, D, F, q, _
function {
  this = this;
  let i;
  i = ve.subscriptionPricingTextStyle(ve.SubscriptionPricingTextRole.ComparisonHeading);
  e.beginRender(z, undefined);
  e.setAttributeStyle("style", Se.comparisonHeading);
  e.setAttributeNumber("minHeight", se.OAISpacing.Five);
  e.beginRender(L, undefined);
  e.setAttributeStyle("style", Se.comparisonFeatureHeading);
  e.setAttributeNumber("paddingRight", se.OAISpacing.One);
  e.beginComponent(ue.Text, B, undefined, undefined);
  if (!((this.presentation.featuresTitle == null))) goto L_311;
  this.presentation.featuresTitle;
  e.setViewModelProperty("value", "");
  if (!((i == null))) goto L_349;
  i;
  goto L_36a;
  e.setViewModelProperty("font", undefined.font);
  if (!((i == null))) goto L_3a2;
  i;
  goto L_3c3;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", se.OAITextSize.LabelLarge);
  e.setViewModelProperty("tone", ue.TextTone.Tertiary);
  e.endComponent();
  e.endRender();
  e.beginRender(D, undefined);
  e.setAttributeStyle("style", Se.nativeAndroidComparisonValue);
  e.beginComponent(ue.Text, F, undefined, undefined);
  if (!((this.presentation.comparisonPlanTitle == null))) goto L_63b;
  this.presentation.comparisonPlanTitle;
  e.setViewModelProperty("value", "");
  if (!((i == null))) goto L_673;
  i;
  goto L_694;
  e.setViewModelProperty("font", undefined.font);
  if (!((i == null))) goto L_6cc;
  i;
  goto L_6ed;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", se.OAITextSize.LabelLarge);
  e.setViewModelProperty("tone", ue.TextTone.Tertiary);
  e.endComponent();
  e.endRender();
  e.beginRender(q, undefined);
  e.setAttributeStyle("style", Se.nativeAndroidComparisonValue);
  e.beginComponent(ue.Text, _, undefined, undefined);
  e.setViewModelProperty("value", t.title);
  e.setViewModelProperty("color", this.planAccentColor);
  if (!((i == null))) goto L_9c5;
  i;
  goto L_9e6;
  e.setViewModelProperty("font", undefined.font);
  if (!((i == null))) goto L_a1e;
  i;
  goto L_a3f;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", se.OAITextSize.LabelLarge);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=0 bc=621B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t, i
// locals: o
// closure: ve, e, ue, E, se
function {
  let o;
  if (!((undefined === t))) goto L_9;
  return;
  o = ve.subscriptionPricingTextStyle(i);
  e.beginComponent(ue.Text, E, undefined, undefined);
  e.setViewModelProperty("value", t);
  if (!((o == null))) goto L_e3;
  o;
  goto L_104;
  e.setViewModelProperty("font", undefined.font);
  if (!((o == null))) goto L_13c;
  o;
  goto L_15d;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", se.OAITextSize.BodyMedium);
  e.setViewModelProperty("tone", ue.TextTone.Secondary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=41B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: e, t
// closure: this, i, o
function {
  return this.renderPackage(e, i, o, t);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=4 cpool=1 bc=593B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t, i, o
// locals: this
// closure: e, J, Se, se
function {
  this = this;
  if (((t.packages.length < 2))) goto L_250;
  e.beginRender(J, undefined);
  if (!(o)) goto L_ac;
  goto L_d0;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", Se.packages);
  if (!(o)) goto L_1db;
  if (!((1 === this.presentation.plans.length))) goto L_1db;
  goto L_1dc;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingBottom", undefined);
  t.packages.map(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// closure: this, t
function {
  return this.surface.selectPackage(t);   // tail call
}

// fn <atom:0>  args=4 vars=8 closure=5 cpool=2 bc=2391B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t, i, o, r
// locals: n, d, s, this
// closure: e, $, Se, se, be
function {
  this = this;
  let s;
  let d;
  let n;
  if (!((i == null))) goto L_36;
  i;
  goto L_57;
  n = (t.id === undefined.id);
  if ((this.surface.interactionDisabled)) goto L_c3;
  d = !t.isEnabled;
  if (!((undefined === t.billingPeriod))) goto L_15b;
  goto L_1f0;
  // [栈深重同步 1 -> 0]
  s = "".concat(t.title, ", ", t.price, " ", t.billingPeriod);
  e.beginRender($, t.id);
  if (!(o)) goto L_290;
  goto L_2b4;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", Se.package);
  e.setAttributeString("accessibilityId", "subscription-pricing-package-".concat(t.id));
  e.setAttributeString("accessibilityLabel", s);
  e.setAttribute("accessibilityStateDisabled", d);
  e.setAttribute("accessibilityStateSelected", n);
  if (!(o)) goto L_415;
  if (!(n)) goto L_415;
  goto L_416;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", undefined);
  if (!(n)) goto L_4b7;
  if (!(o)) goto L_470;
  goto L_4fc;
  // [栈深重同步 4 -> 3]
  goto L_4fc;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderColor", se.OAIColor.BorderDefault);
  if (!(o)) goto L_534;
  if (!(n)) goto L_534;
  goto L_535;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", undefined);
  if (!(d)) goto L_56a;
  goto L_56c;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", function <atom:0>);
  if (!(t.isEnabled)) goto L_5c0;
  goto L_5c2;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0.5);
  if (!(o)) goto L_720;
  if (!(!be.Device.isRTL())) goto L_720;
  if (!((r > 0))) goto L_71c;
  goto L_71d;
  // [栈深重同步 5 -> 4]
  goto L_721;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingLeft", undefined);
  if (!(o)) goto L_87e;
  if (!(be.Device.isRTL())) goto L_87e;
  if (!((r > 0))) goto L_87a;
  goto L_87b;
  // [栈深重同步 5 -> 4]
  goto L_87f;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingRight", undefined);
  if (!(o)) goto L_8b0;
  goto L_8d8;
  // [栈深重同步 1 -> 0]
  this.renderPackageTitle(t, false);
  if (!(o)) goto L_906;
  goto L_92e;
  // [栈深重同步 1 -> 0]
  this.renderPackagePrice(t, false);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=10 cpool=0 bc=1496B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t, i
// locals: o
// closure: ve, e, U, Se, Q, ue, G, se, ae, Z
function {
  let o;
  o = ve.subscriptionPricingTextStyle(ve.SubscriptionPricingTextRole.PackageValue);
  e.beginRender(U, undefined);
  if (!(i)) goto L_ec;
  goto L_110;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", Se.packageTitle);
  if (!(i)) goto L_311;
  e.beginRender(Q, undefined);
  e.setAttributeStyle("style", Se.nativeProPackageValue);
  e.setAttributeString("accessibilityLabel", t.title);
  if (!((o == null))) goto L_21a;
  o;
  goto L_23b;
  e.setAttributeString("font", undefined.font);
  if (!((o == null))) goto L_273;
  o;
  goto L_294;
  e.setAttributeNumber("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setAttributeString("value", t.title);
  goto L_44a;
  // [栈深重同步 1 -> 0]
  e.beginComponent(ue.Text, G, undefined, undefined);
  e.setViewModelProperty("value", t.title);
  e.setViewModelProperty("size", se.OAITextSize.LabelLarge);
  e.endComponent();
  if (!((undefined !== t.badge))) goto L_5af;
  e.beginComponent(ae.Badge, Z, undefined, undefined);
  e.setViewModelProperty("tone", ae.BadgeTone.Success);
  e.setViewModelProperty("value", t.badge);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=6 closure=10 cpool=0 bc=2894B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t, i
// locals: o, i#1, r, this
// closure: ve, ge, se, e, j, Se, W, K, ue, Y
function {
  this = this;
  let o;
  o = ve.subscriptionPricingTextStyle(ve.SubscriptionPricingTextRole.PackagePrice);
  if (!(i)) goto L_711;
  let r;
  let i#1;
  i#1 = ve.subscriptionPricingTextStyle(ve.SubscriptionPricingTextRole.PackageBillingPeriod);
  if (!((o == null))) goto L_1a8;
  o;
  goto L_1c9;
  r = new ge.AttributedTextBuilder().append(t.price, {color: se.OAIColor.TextPrimary, font: undefined.font});
  if (!((undefined !== t.billingPeriod))) goto L_2eb;
  if (!((i#1 == null))) goto L_2c2;
  i#1;
  goto L_2e3;
  r.append(" ".concat(t.billingPeriod), {color: se.OAIColor.TextSecondary, font: undefined.font});
  e.beginRender(j, undefined);
  e.setAttributeStyle("style", Se.nativeAndroidProPackagePriceValue);
  e.setAttributeString("accessibilityId", "subscription-pricing-package-price-".concat(t.id));
  if (!((undefined === t.billingPeriod))) goto L_454;
  goto L_4c2;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityLabel", "".concat(t.price, " ", t.billingPeriod));
  e.setAttributeString("color", se.OAIColor.TextPrimary);
  if (!((o == null))) goto L_56c;
  o;
  goto L_58d;
  e.setAttributeString("font", undefined.font);
  if (!((this.presentation.plans.length > 1))) goto L_64a;
  goto L_690;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("top", -se.OAISpacing.Px);
  e.setAttribute("value", r.build());
  e.endRender();
  return;
  e.beginRender(W, undefined);
  e.setAttributeStyle("style", Se.packagePrice);
  if (!((undefined !== t.originalPrice))) goto L_8ac;
  e.beginRender(K, undefined);
  e.setAttributeStyle("style", Se.originalPrice);
  e.setAttributeString("value", t.originalPrice);
  e.endRender();
  e.beginComponent(ue.Text, Y, undefined, undefined);
  e.setViewModelProperty("value", t.price);
  if (!((o == null))) goto L_981;
  o;
  goto L_9a2;
  e.setViewModelProperty("font", undefined.font);
  if (!((o == null))) goto L_9da;
  o;
  goto L_9fb;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", se.OAITextSize.LabelLarge);
  e.endComponent();
  this.renderBillingPeriod(t.billingPeriod, ve.SubscriptionPricingTextRole.PackageBillingPeriod);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=5 closure=9 cpool=1 bc=2264B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t, i, o
// locals: r, this
// closure: ve, e, X, Se, se, ee, ue, te, ie
function {
  this = this;
  let r;
  if (!(o)) goto L_73;
  goto L_b8;
  // [栈深重同步 2 -> 1]
  r = ve.subscriptionPricingTextStyle(ve.SubscriptionPricingTextRole.ProFeature);
  e.beginRender(X, "".concat(t.title, "-", i));
  e.setAttributeStyle("style", Se.feature);
  e.setAttributeString("accessibilityId", "subscription-pricing-feature-".concat(i));
  if (!(o)) goto L_20d;
  goto L_20e;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("alignItems", undefined);
  if (!(o)) goto L_285;
  goto L_286;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("minHeight", undefined);
  if (!(t.isIncluded)) goto L_2da;
  goto L_2dc;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0.55);
  if ((o)) goto L_32e;
  this.renderFeatureAvailability(t.isIncluded, false);
  e.beginRender(ee, undefined);
  e.setAttributeStyle("style", Se.featureText);
  if (!(o)) goto L_41f;
  goto L_420;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingRight", undefined);
  e.beginComponent(ue.Text, te, undefined, undefined);
  e.setViewModelProperty("value", t.title);
  if (!((r == null))) goto L_4f8;
  r;
  goto L_519;
  e.setViewModelProperty("font", undefined.font);
  if (!((r == null))) goto L_551;
  r;
  goto L_572;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("size", se.OAITextSize.BodyMedium);
  e.endComponent();
  if (!((undefined !== t.subtitle))) goto L_7e6;
  e.beginComponent(ue.Text, ie, undefined, undefined);
  e.setViewModelProperty("value", t.subtitle);
  e.setViewModelProperty("size", se.OAITextSize.BodySmall);
  e.setViewModelProperty("tone", ue.TextTone.Secondary);
  e.endComponent();
  e.endRender();
  if (!(o)) goto L_860;
  this.renderFeatureAvailability((true === t.isIncludedInComparisonPlan), false);
  if (!(o)) goto L_8af;
  this.renderFeatureAvailability(t.isIncluded, true);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=6 closure=6 cpool=0 bc=1339B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: t, i
// locals: o, r, n, this
// closure: e, oe, Se, pe, re, se
function {
  this = this;
  let n;
  let r;
  let o;
  if (!(t)) goto L_5a;
  if ((i)) goto L_5a;
  o = (undefined === this.presentation.comparisonPlanTitle);
  r = (undefined !== this.presentation.comparisonPlanTitle);
  n = (undefined === this.presentation.comparisonPlanTitle);
  e.beginRender(oe, undefined);
  if ((i)) goto L_186;
  if (!((undefined !== this.presentation.comparisonPlanTitle))) goto L_1ae;
  goto L_1d2;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", Se.nativeAndroidProFeatureIcon);
  e.beginComponent(pe.Icon, re, undefined, undefined);
  if (!(r)) goto L_266;
  if (!(t)) goto L_25f;
  goto L_267;
  // [栈深重同步 4 -> 3]
  goto L_267;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityLabel", undefined);
  if (!(o)) goto L_2bd;
  goto L_302;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("color", se.OAIColor.IconTertiary);
  if (!(r)) goto L_338;
  goto L_33a;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("size", 16);
  if (!(t)) goto L_43f;
  if (!(n)) goto L_3d9;
  goto L_4a3;
  // [栈深重同步 4 -> 3]
  goto L_4a3;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("src", this.surface.iconAssets.minus);
  if (!(n)) goto L_4d8;
  goto L_4e7;
  // [栈深重同步 4 -> 3]
  if (!(t)) goto L_4e2;
  goto L_4e7;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("symbol", "−");
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=273B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// locals: e, this
// closure: se
function {
  this = this;
  let e;
  if (!((this.surface.accentPalette == null))) goto L_50;
  this.surface.accentPalette;
  goto L_71;
  e = undefined.accentForegroundColor;
  if (!((undefined !== e))) goto L_7d;
  return e;
  if (!((true === this.presentation.isDarkMode))) goto L_10b;
  return se.OAIColor.TextAccent;
  return "#006DCC";
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=185B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// locals: this
// closure: se
function {
  this = this;
  if (!((this.surface.accentPalette == null))) goto L_4d;
  this.surface.accentPalette;
  goto L_6e;
  if (!((undefined.accentSurfaceColor == null))) goto L_b8;
  undefined.accentSurfaceColor;
  return se.OAIColor.ThemeBlueBackground;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=86B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// locals: this
function {
  this = this;
  if (!((true === this.presentation.isDarkMode))) goto L_50;
  return "#FFFFFF33";
  return "#00000026";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=86B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// locals: this
function {
  this = this;
  if (!((true === this.presentation.isDarkMode))) goto L_50;
  return "#595959";
  return "#C5C5C5";
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=704B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// locals: this
// closure: e, ne, Se, ue, de, se
function {
  this = this;
  if (!((undefined !== this.presentation.errorMessage))) goto L_2bf;
  e.beginRender(ne, undefined);
  e.setAttributeStyle("style", Se.error);
  e.beginComponent(ue.Text, de, undefined, undefined);
  e.setViewModelProperty("value", this.presentation.errorMessage);
  e.setViewModelProperty("size", se.OAITextSize.BodyMedium);
  e.setViewModelProperty("tone", ue.TextTone.Danger);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=82 closure=0 cpool=28 bc=4176B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// args: require, module, exports
// locals: e, t, i, o, r, n, d, s, l, a, p, c, u, b, g, y, P, v, A, m, S, h, T, w, M, C, k, R, x, I, f, V, O, N, H, z, L, B, D, F, q, _, E, J, $, U, Q, G, Z, j, W, K, Y, X, ee, te, ie, oe, re, ne, de, se, le, ae, pe, ce, ue, be, ge, ye, Pe, ve, Ae, me, Se, he, AndroidSubscriptionPricingRenderer, <class_fields_init>, AndroidSubscriptionPricingRenderer#1
function {
  he = function he;
  let AndroidSubscriptionPricingRenderer#1;
  let Se;
  let me;
  let Ae;
  let ve;
  let Pe;
  let ye;
  let ge;
  let be;
  let ue;
  let ce;
  let pe;
  let ae;
  let le;
  let se;
  let de;
  let ne;
  let re;
  let oe;
  let ie;
  let te;
  let ee;
  let X;
  let Y;
  let K;
  let W;
  let j;
  let Z;
  let G;
  let Q;
  let U;
  let $;
  let J;
  let E;
  let _;
  let q;
  let F;
  let D;
  let B;
  let L;
  let z;
  let H;
  let N;
  let O;
  let V;
  let f;
  let I;
  let x;
  let R;
  let k;
  let C;
  let M;
  let w;
  let T;
  let h;
  let S;
  let m;
  let A;
  let v;
  let P;
  let y;
  let g;
  let b;
  let u;
  let c;
  let p;
  let a;
  let l;
  let s;
  let d;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderAndroidSubscriptionPricingSurface = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-page"], "hehxJ9ShQtlv9E6k");
  i = e.makeNodePrototype("scroll", ["accessibilityId", "subscription-pricing-scroll"], "IyhjZp2B3i9lOEc6");
  o = e.makeNodePrototype("view", undefined, "EQYp1M1m1VdSYYSU");
  r = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-header"], "QMRTyFzxIiw6nUxY");
  n = e.makeNodePrototype("view", undefined, "qszTtc52qfjupBy_");
  d = e.makeNodePrototype("view", undefined, "rOUXohBjx2N66jfO");
  s = e.makeComponentPrototype(["accessibilityId", "subscription-pricing-dismiss"], "GRu6Psuy9QCN-U0Q");
  l = e.makeNodePrototype("view", undefined, "SwoTubgBEt1MOQGP");
  a = e.makeNodePrototype("view", undefined, "NvoV70ns7Z7qroJq");
  p = e.makeNodePrototype("view", undefined, "RsUvbg_SzAsVxZBn");
  c = e.makeNodePrototype("view", undefined, "kL63R6d61CrVwr1e");
  u = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-loading"], "ZUi3bVOj5_zUlDZ9");
  b = e.makeComponentPrototype(undefined, "lahMS9-vq_xBDZR7");
  g = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-hero", "alignItems", "flex-start"], "-CymZ-_8KL95t44j");
  y = e.makeComponentPrototype(["align", "left", "lines", 0], "4cWTR4m7edg6DzzE");
  P = e.makeNodePrototype("label", ["accessibilityId", "subscription-pricing-android-hero-title", "lineHeight", 44, "numberOfLines", 0], "uw2zSrkeL2nuHi7j");
  v = e.makeComponentPrototype(["align", "left", "lines", 0], "nd2Q0HvvXQT4W8Jz");
  A = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-plan-picker"], "F95TOSkzhDx5SChL");
  m = e.makeNodePrototype("view", ["accessibilityNavigation", "ignored"], "74MDS803kEhFTW0G");
  S = e.makeNodePrototype("view", ["accessibilityCategory", "radio"], "t1pIklwfgbdP_cDs");
  h = e.makeComponentPrototype(["align", "center"], "49BCxxfxXU5h85kf");
  T = e.makeNodePrototype("view", undefined, "QeliTMm21fGXPldx");
  w = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-pro-feature-heading"], "inF0q9bpk6ruam2h");
  M = e.makeComponentPrototype(["lines", 0], "vNSJVZwtK-za7Db2");
  C = e.makeComponentPrototype(["lines", 0], "torLp5I-rEh4iJHx");
  k = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-features"], "JBkx8Wyb1o6u02x8");
  R = e.makeNodePrototype("view", undefined, "Mh8HoDUaN9mQe1y4");
  x = e.makeNodePrototype("view", undefined, "gfT7Mg3b0S4VfhkX");
  I = e.makeComponentPrototype(undefined, "BUJJ1r1PzTvBCsB5");
  f = e.makeComponentPrototype(undefined, "Qn0EEjJLapWCYZ7D");
  V = e.makeComponentPrototype(["lines", 0], "KPb1N5nES-zb2T2F");
  O = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-plan-price"], "ijWxpO_etzGNrXCH");
  N = e.makeNodePrototype("label", undefined, "kTGZ-N53sUy1gcGS");
  H = e.makeComponentPrototype(undefined, "1fXmzPkDOI-VL_MR");
  z = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-comparison-header"], "po02lwmzgrkGpDOu");
  L = e.makeNodePrototype("view", undefined, "4IyH7A6KiX0fcJa0");
  B = e.makeComponentPrototype(undefined, "ed5NFLFd-JA7MvV0");
  D = e.makeNodePrototype("view", undefined, "gOvyJbTT_ZlDqUy_");
  F = e.makeComponentPrototype(["align", "center"], "sg6Jbnaa7z3lu48B");
  q = e.makeNodePrototype("view", undefined, "f4P-bmC5_hcAKa0k");
  _ = e.makeComponentPrototype(["align", "center"], "UwKN0iQUVNO9bOSB");
  E = e.makeComponentPrototype(["lines", 0], "kJ1SKPARwrSUlqfz");
  J = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-packages"], "AybJp9_h6WgY8Gkm");
  $ = e.makeNodePrototype("view", ["accessibilityCategory", "radio"], "Z6bzdVJ13ROiw1WH");
  U = e.makeNodePrototype("view", undefined, "iDoDi9z71R-00Fy6");
  Q = e.makeNodePrototype("label", undefined, "gjmg3LVss_AeQsEO");
  G = e.makeComponentPrototype(undefined, "NfbkN306K6R1DsHA");
  Z = e.makeComponentPrototype(undefined, "6JN2MgY09u8ECEi1");
  j = e.makeNodePrototype("label", ["lineHeight", 28, "numberOfLines", 0], "ZCt6CEB62Fo0w7jB");
  W = e.makeNodePrototype("view", undefined, "Lkwqoc3Ti8K2AWj2");
  K = e.makeNodePrototype("label", undefined, "6lcqdzoJ11ervqJ5");
  Y = e.makeComponentPrototype(undefined, "fbOqb4iMZbJS_9K8");
  X = e.makeNodePrototype("view", undefined, "-FJZrwLf1MhKFAQd");
  ee = e.makeNodePrototype("view", undefined, "DWRiey1P9BtDylTz");
  te = e.makeComponentPrototype(["lines", 0], "GU2gRQzx67d46A3M");
  ie = e.makeComponentPrototype(["lines", 0], "kZix-wL2CdrtnYWD");
  oe = e.makeNodePrototype("view", undefined, "khOupHazn97HQKUy");
  re = e.makeComponentPrototype(undefined, "S4FTR9rDwPr06KR3");
  ne = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-error"], "FEU6dtrGYv9aYL3j");
  de = e.makeComponentPrototype(["align", "center", "lines", 0], "ClJG6KP37rOCUI-8");
  se = require("oai_core/src/OAITokens");
  le = require("oai_ui/src/components/ActivityIndicator");
  ae = require("oai_ui/src/components/Badge");
  pe = require("oai_ui/src/components/Icon");
  ce = require("oai_ui/src/components/Pressable");
  ue = require("oai_ui/src/components/Text");
  be = require("valdi_core/src/Device");
  ge = require("valdi_core/src/utils/AttributedTextBuilder");
  ye = require("./SubscriptionPricingAndroidCheckout");
  Pe = require("./SubscriptionPricingAndroidStyles");
  ve = require("./SubscriptionPricingAndroidTypography");
  Ae = require("./SubscriptionPricingModels");
  me = require("./SubscriptionPricingSharedStyles");
  null;
  me.subscriptionPricingSharedStyles;
  null;
  Pe.subscriptionPricingAndroidStyles;
  Se = {};
  exports.renderAndroidSubscriptionPricingSurface = he;
  let AndroidSubscriptionPricingRenderer;
  let <class_fields_init>;
  class AndroidSubscriptionPricingRenderer extends undefined { ... }
  <proto:AndroidSubscriptionPricingRenderer>.presentation = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.render = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderHeader = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderDismissButton = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderLoading = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderHero = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderHeroTitle = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderPlanPicker = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderAndroidPlanDivider = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderPlanOption = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderPlan = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderPlanHeading = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderSelectedPrice = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderComparisonHeading = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderBillingPeriod = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderPackages = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderPackage = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderPackageTitle = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderPackagePrice = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderFeature = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderFeatureAvailability = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.planAccentColor = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.planAccentSurfaceColor = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.nativeAndroidPlanPickerBorderColor = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.nativeAndroidSelectedPlanBorderColor = function <atom:0>;
  <proto:AndroidSubscriptionPricingRenderer>.renderError = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AndroidSubscriptionPricingRenderer>;
  AndroidSubscriptionPricingRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  AndroidSubscriptionPricingRenderer#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidSurface
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
