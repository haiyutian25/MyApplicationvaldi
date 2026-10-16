// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=249B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: e
// closure: this
function {
  this.toolbarOpacity = Math.max(0, Math.min(1, ((2 * e.y) / 44)));
  this.gradient.setAttribute("opacity", this.toolbarOpacity);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=128B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, Y
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
  this.gradient = new Y.ElementRef();
  this.toolbarOpacity = 0;
  this.onScroll = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// closure: e
function {
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=106B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: e
// closure: re
function {
  return re.isSubscriptionPricingProPlan(e.product.offeredPlanId);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: e
// closure: u
function {
  return (e.product.id === u.selectedProProductId);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=106B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: e
// closure: re
function {
  return !re.isSubscriptionPricingProPlan(e.product.offeredPlanId);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=140B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: e, t
// closure: ne
function {
  return (ne(e.product.offeredPlanId) - ne(t.product.offeredPlanId));
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: e
// closure: this, m
function {
  return this.renderCard(e, m);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=103B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// closure: this
function {
  return this.context.host.restorePurchases();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=103B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// closure: this
function {
  return this.context.host.back();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=380B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// closure: e, U, a, Z, F
function {
  e.beginComponent(U.Icon, a, undefined, undefined);
  if (!(Z.Device.isRTL())) goto L_10b;
  goto L_150;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("src", F.default.pricingBack);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=103B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// closure: this
function {
  return this.context.host.close();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=235B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// closure: e, U, y, F
function {
  e.beginComponent(U.Icon, y, undefined, undefined);
  e.setViewModelProperty("src", F.default.pricingClose);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=24 cpool=6 bc=3224B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// closure: this, m, e, U, a, Z, F, y, o, oe, u, r, i, v, X, n, ie, s, d, G, l, te, p, c
function {
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.root);
  if (!(u.isDarkMode)) goto L_f4;
  goto L_f9;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", "#FCFCFC");
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.scroll);
  e.setAttributeFunction("onScroll", this.onScroll);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.list);
  e.setAttributeNumber("paddingBottom", (16 + u.bottomInset));
  v.map(function <atom:0>);
  e.beginComponent(X.Button, n, undefined, undefined);
  e.setViewModelProperty("label", ie.default.subscriptionsRestoreSubscriptionCta());
  e.setViewModelProperty("style", oe.comparePlansStyles.restoreAction);
  e.setViewModelProperty("labelStyle", oe.comparePlansStyles.restoreLabel);
  e.setViewModelProperty("variant", X.ButtonVariant.Secondary);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("onPress", function <atom:0>);
  e.endComponent();
  this.renderLegalFooter();
  e.endRender();
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.toolbar);
  e.beginRender(d, undefined);
  e.setAttributeRef(this.gradient);
  e.setAttributeStyle("style", oe.comparePlansStyles.toolbarGradient);
  e.setAttributeNumber("opacity", this.toolbarOpacity);
  if (!(u.isDarkMode)) goto L_849;
  goto L_84e;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("background", "linear-gradient(rgba(252,252,252,0.9) 0, rgba(252,252,252,0.75) 0.4, rgba(252,252,252,0) 1)");
  e.endRender();
  e.beginComponent(G.Pressable, l, undefined, undefined);
  e.setViewModelProperty("style", te.androidPricingRefreshNavigationButtonStyle(u.isDarkMode));
  e.setViewModelProperty("accessibilityLabel", ie.default.designUpButton());
  e.setViewModelProperty("onPress", function <atom:0>);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.beginRender(p, undefined);
  e.endRender();
  e.beginComponent(G.Pressable, c, undefined, undefined);
  e.setViewModelProperty("style", te.androidPricingRefreshNavigationButtonStyle(u.isDarkMode));
  e.setViewModelProperty("accessibilityLabel", ie.default.contentDescriptionClose());
  e.setViewModelProperty("onPress", function <atom:0>);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=7 closure=26 cpool=6 bc=1191B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// locals: u, P, e, m, b, v, this
// closure: re, ne, e, U, a, Z, F, y, o, oe, r, i, X, n, ie, s, d, G, l, te, p, c, $, H, j, t
function {
  this = this;
  let v;
  let b;
  let m;
  let P;
  let u;
  u = this.viewModel;
  P = u.locales.join(",");
  if (!((this.localeTags !== P))) goto L_1d6;
  let e;
  if (!((0 === u.locales.length))) goto L_e6;
  goto L_10a;
  // [栈深重同步 1 -> 0]
  e = u.locales.map($.Locale.parse);
  H.overrideLocales(ie.default, function <atom:0>, "en");
  this.localeTags = P;
  // close_loc e
  m = u.products.filter(function <atom:0>);
  b = m.find(function <atom:0>);
  v = u.products.filter(function <atom:0>);
  if (!((undefined !== b))) goto L_2cb;
  v.push(b);
  v.sort(function <atom:0>);
  e.beginComponent(j.OAITheme, t, undefined, undefined);
  e.setViewModelProperty("fill", true);
  if (!(u.isDarkMode)) goto L_40c;
  goto L_451;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("mode", j.OAIThemeMode.Light);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: e
// closure: t
function {
  return t.includes(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: e
function {
  return e.isPurchasing;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=196B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: e
// closure: t, Q, this
function {
  if (!(t.includes(e))) goto L_c3;
  if (((e !== Q.KoreaCompanyInformationId))) goto L_c3;
  return !this.viewModel.products.some(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=104B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: e
// closure: this
function {
  return this.context.host.openLegalDocument(e);   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=3 bc=899B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// locals: t, o, this
// closure: Q, e, u, oe, P
function {
  this = this;
  let o;
  let t;
  t = this.viewModel.legalDocumentIds;
  if (!(Q.KoreaLegalDocumentIds.every(function <atom:0>))) goto L_c0;
  goto L_c1;
  // [栈深重同步 1 -> 0]
  o = undefined;
  if (!((undefined !== o))) goto L_382;
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.legalFooter);
  e.beginComponent(Q.AndroidPricingKoreaDisclosure, P, undefined, undefined);
  e.setViewModelProperty("richText", o);
  e.setViewModelProperty("isDarkMode", this.viewModel.isDarkMode);
  e.setViewModelProperty("showsCompanyInformation", t.includes(Q.KoreaCompanyInformationId));
  e.setViewModelProperty("isLinkEnabled", function <atom:0>);
  e.setViewModelProperty("openLegalDocument", function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=797B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// closure: e, C, oe, this, J, h, ie
function {
  e.beginRender(C, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.currentBadge);
  if (!(this.viewModel.isDarkMode)) goto L_113;
  goto L_118;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", "#EDF3FE");
  e.beginComponent(J.Text, h, undefined, undefined);
  e.setViewModelProperty("value", ie.default.subscriptionsChoosePlanScreenCurrentPlanText());
  e.setViewModelProperties(oe.comparePlansStyles.badgeLabel);
  if (!(this.viewModel.isDarkMode)) goto L_2c4;
  goto L_2c9;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("color", "#2451DA");
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=321B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// closure: r, this
function {
  if (!(r.isCurrent)) goto L_b5;
  return this.context.host.manageSubscription(r.id);
  return this.context.host.attemptPurchase(r.id);
}

// fn <atom:0>  args=2 vars=2 closure=12 cpool=0 bc=1209B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: t, o
// closure: e, V, oe, U, I, F, this, r, K, x, J, N
function {
  e.beginRender(V, String(o));
  e.setAttributeStyle("style", oe.comparePlansStyles.benefit);
  e.beginComponent(U.Icon, I, undefined, undefined);
  e.setViewModelProperty("src", F.default.pricingCheck);
  if ((this.viewModel.usesNewCopy)) goto L_1fd;
  if (!(r.isCurrent)) goto L_246;
  goto L_28b;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("color", K.OAIColor.IconPrimary);
  e.endComponent();
  e.beginRender(x, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.benefitText);
  e.beginComponent(J.Text, N, undefined, undefined);
  e.setViewModelProperty("value", t);
  e.setViewModelProperties(oe.comparePlansStyles.benefitLabel);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=7 closure=27 cpool=3 bc=4533B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: t, o
// locals: r, i, n, s, this
// closure: e, C, oe, J, h, ie, V, U, I, F, K, x, N, re, ee, m, b, v, g, S, M, w, X, f, k, R, A
function {
  this = this;
  let s;
  let n;
  let i;
  let r;
  r = t.product;
  i = re.isSubscriptionPricingProPlan(r.offeredPlanId);
  n = ee.refreshedComparePlanCopy(t, this.viewModel.usesNewCopy);
  if (!(r.isCurrent)) goto L_157;
  goto L_179;
  // [栈深重同步 1 -> 0]
  s = t.purchaseTitle;
  if (!(i)) goto L_1ad;
  goto L_1d1;
  // [栈深重同步 4 -> 3]
  e.beginRender(m, r.id);
  e.setAttributeStyle("style", oe.comparePlansStyles.card);
  e.setAttributeString("accessibilityId", "compare-plans-card-".concat(r.offeredPlanId));
  e.beginRender(b, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.header);
  e.beginRender(v, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.titleRow);
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.titleContainer);
  e.beginComponent(J.Text, S, undefined, undefined);
  e.setViewModelProperty("value", n.title);
  e.setViewModelProperties(oe.comparePlansStyles.title);
  e.endComponent();
  e.endRender();
  if (!(i)) goto L_654;
  if (!((o.length > 1))) goto L_654;
  this.renderProPicker(o, r.id);
  e.endRender();
  if (!(r.isCurrent)) goto L_6a8;
  function <atom:0>();
  e.beginComponent(J.Text, M, undefined, undefined);
  e.setViewModelProperty("value", n.subtitle);
  e.setViewModelProperties(oe.comparePlansStyles.subtitle);
  e.endComponent();
  this.renderPrice(t);
  e.endRender();
  e.beginRender(w, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.actionContainer);
  e.beginComponent(X.Button, f, undefined, undefined);
  e.setViewModelProperty("label", s);
  if (!(r.isCurrent)) goto L_9c2;
  goto L_9e4;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("loading", t.isPurchasing);
  if (!(r.isCurrent)) goto L_a5b;
  goto L_a7d;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("disabled", t.isPurchasing);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("size", K.OAIControlSize.Lg);
  if (!(r.isCurrent)) goto L_bb8;
  goto L_bfd;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("style", oe.comparePlansStyles.purchaseAction);
  e.setViewModelProperty("labelStyle", oe.comparePlansStyles.actionLabel);
  if (!(r.isCurrent)) goto L_d09;
  goto L_d4e;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("variant", X.ButtonVariant.Primary);
  e.setViewModelProperty("accessibilityId", "compare-plans-action-".concat(r.id));
  e.setViewModelProperty("onPress", function <atom:0>);
  e.endComponent();
  e.endRender();
  e.beginRender(k, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.benefits);
  if (!((undefined !== n.benefitsTitle))) goto L_104c;
  e.beginComponent(J.Text, R, undefined, undefined);
  e.setViewModelProperty("value", n.benefitsTitle);
  e.setViewModelProperties(oe.comparePlansStyles.benefitsTitle);
  e.endComponent();
  e.beginRender(A, undefined);
  if (!(this.viewModel.usesNewCopy)) goto L_10ec;
  goto L_10ee;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("gap", 12);
  n.benefits.map(function <atom:0>);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=9 cpool=0 bc=2068B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: t
// locals: o, r
// closure: ee, e, D, oe, T, L, q, z, _
function {
  let r;
  let o;
  o = ee.comparisonBillingPeriod(t.product.billingPeriod);
  r = ((t.pricePrefix + t.priceAmount) + t.priceSuffix);
  e.beginRender(D, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.priceRow);
  if (!((undefined === o))) goto L_1ab;
  goto L_1db;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityLabel", "".concat(r, " ", o));
  e.beginRender(T, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.priceAmount);
  if (((t.pricePrefix.length > 0))) goto L_2f4;
  if (!((t.priceSuffix.length > 0))) goto L_2fd;
  goto L_2fe;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("direction", undefined);
  if (!((t.pricePrefix.length > 0))) goto L_442;
  e.beginRender(L, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.priceAffix);
  e.setAttributeString("value", t.pricePrefix);
  e.endRender();
  e.beginRender(q, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.price);
  e.setAttributeString("value", t.priceAmount);
  e.endRender();
  if (!((t.priceSuffix.length > 0))) goto L_698;
  e.beginRender(z, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.priceAffix);
  e.setAttributeString("value", t.priceSuffix);
  e.endRender();
  e.endRender();
  if (!((undefined !== o))) goto L_7eb;
  e.beginRender(_, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.pricePeriod);
  e.setAttributeString("value", " ".concat(o));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=140B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: e, t
// closure: se
function {
  return (se(e.product.offeredPlanId) - se(t.product.offeredPlanId));
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=170B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// closure: this, t
function {
  return this.context.host.selectProProduct(t.product.id);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=278B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// closure: e, J, O, r, oe
function {
  e.beginComponent(J.Text, O, undefined, undefined);
  e.setViewModelProperty("value", r);
  e.setViewModelProperties(oe.comparePlansStyles.pickerLabel);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=2 bc=1152B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// closure: this, t, e, J, O, r, oe, G, E, o, K, ie
function {
  e.beginComponent(G.Pressable, E, t.product.id, undefined);
  e.setViewModelProperty("style", oe.comparePlansStyles.pickerOption);
  if (!((t.product.id === o))) goto L_1be;
  goto L_1bf;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("background", undefined);
  e.setViewModelProperty("selected", (t.product.id === o));
  e.setViewModelProperty("accessibilityLabel", ie.default.subscriptionsCompareRefreshProTierDescription(r, t.product.billingCyclePrice));
  e.setViewModelProperty("accessibilityStateSelected", (t.product.id === o));
  e.setViewModelProperty("accessibilityId", "compare-plans-package-".concat(t.product.id));
  e.setViewModelProperty("onPress", function <atom:0>);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=11 cpool=1 bc=113B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: t
// locals: r
// closure: this, e, J, O, oe, G, E, o, K, ie, ee
function {
  let r;
  r = ee.refreshedCompareProTierLabel(t.product.offeredPlanId);
  return function <atom:0>();   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=11 cpool=2 bc=538B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: t, o
// locals: this
// closure: se, e, J, O, oe, G, E, K, ie, ee, B
function {
  this = this;
  e.beginRender(B, undefined);
  e.setAttributeStyle("style", oe.comparePlansStyles.picker);
  if (!(this.viewModel.isDarkMode)) goto L_155;
  goto L_19a;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", K.OAIColor.BgSecondary);
  // append([], 0, t)
  t;
  [].sort(function <atom:0>).map(function <atom:0>);
  e.endRender();
  return;
}

// fn ne  args=1 vars=1 closure=1 cpool=0 bc=66B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: e
// closure: re
function {
  if (!(("plus" === e))) goto L_b;
  return 0;
  if (!(re.isSubscriptionPricingProPlan(e))) goto L_35;
  return 1;
  if (!(("go" === e))) goto L_40;
  return 2;
  return 3;
}

// fn se  args=1 vars=1 closure=0 cpool=0 bc=24B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: e
function {
  if (!(("prolite" === e))) goto L_b;
  return 0;
  if (!(("pro" === e))) goto L_16;
  return 1;
  return 2;
}

// fn <atom:0>  args=3 vars=67 closure=0 cpool=8 bc=2641B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// args: require, module, exports
// locals: e, t, o, r, i, n, s, d, l, a, p, c, y, u, P, m, b, v, g, S, C, h, M, w, f, k, R, A, V, I, x, N, D, T, L, q, z, _, B, E, O, F, j, K, X, U, G, J, W, Z, Y, H, $, Q, ee, te, oe, re, ie, AndroidRefreshedComparePlansPage, <class_fields_init>, AndroidRefreshedComparePlansPage#1, ne, se
function {
  ne = function ne;
  se = function se;
  let AndroidRefreshedComparePlansPage#1;
  let ie;
  let re;
  let oe;
  let te;
  let ee;
  let Q;
  let $;
  let H;
  let Y;
  let Z;
  let W;
  let J;
  let G;
  let U;
  let X;
  let K;
  let j;
  let F;
  let O;
  let E;
  let B;
  let _;
  let z;
  let q;
  let L;
  let T;
  let D;
  let N;
  let x;
  let I;
  let V;
  let A;
  let R;
  let k;
  let f;
  let w;
  let M;
  let h;
  let C;
  let S;
  let g;
  let v;
  let b;
  let m;
  let P;
  let u;
  let y;
  let c;
  let p;
  let a;
  let l;
  let d;
  let s;
  let n;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AndroidRefreshedComparePlansPage = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "Wz9Q_MR7QVzlCJke");
  o = e.makeNodePrototype("view", undefined, "UFt6lfrcy2HHeXix");
  r = e.makeNodePrototype("scroll", undefined, "WjpKZGL32r5EcKhj");
  i = e.makeNodePrototype("layout", undefined, "Xzuf96BpuZ4_VLXW");
  n = e.makeComponentPrototype(["accessibilityId", "compare-plans-restore"], "PlXDEI8MZb0tcqkh");
  s = e.makeNodePrototype("layout", undefined, "mFE-yn3-yxUET_tm");
  d = e.makeNodePrototype("view", undefined, "zogETA1AHIBjs5Ae");
  l = e.makeComponentPrototype(undefined, "wRDyzywVpeF4Cep_");
  a = e.makeComponentPrototype(["size", 24], "426dJwubiPE6jyfz");
  p = e.makeNodePrototype("layout", ["flexGrow", 1], "npwh6Y8cG0MWgE8X");
  c = e.makeComponentPrototype(["accessibilityId", "compare-plans-close"], "UCBl2YkMsrGMp7pB");
  y = e.makeComponentPrototype(["size", 24], "7uOjkk5tJqpDRN6T");
  u = e.makeNodePrototype("layout", undefined, "d8_TVbJhhm4gbjdN");
  P = e.makeComponentPrototype(undefined, "4SiDiGICsINhlegR");
  m = e.makeNodePrototype("view", undefined, "WwaXbCk6L-n9uESC");
  b = e.makeNodePrototype("layout", undefined, "StyESPaI7dcHgZ8T");
  v = e.makeNodePrototype("layout", undefined, "cRjYzhw4xvy6pK1j");
  g = e.makeNodePrototype("layout", undefined, "-8pYbc_eyIK37JCA");
  S = e.makeComponentPrototype(undefined, "beDvdXh0QyuUN-xX");
  C = e.makeNodePrototype("view", undefined, "F2P2aawREsvnpbp5");
  h = e.makeComponentPrototype(undefined, "_MJCN4zXmscEG0vF");
  M = e.makeComponentPrototype(undefined, "thIngqps-VKStKaO");
  w = e.makeNodePrototype("layout", undefined, "a00Wabq3MTdng9Rj");
  f = e.makeComponentPrototype(undefined, "S1cz_rDaUjgzX2Tv");
  k = e.makeNodePrototype("layout", undefined, "kUPSHlhoZ7p0R40k");
  R = e.makeComponentPrototype(undefined, "kz6hL0Zyuz6kt-6P");
  A = e.makeNodePrototype("layout", ["width", "100%"], "IA2_DyVyHN0z3Yro");
  V = e.makeNodePrototype("layout", undefined, "yLoQE1qwrnRihv1Z");
  I = e.makeComponentPrototype(["size", 16], "zlRFlKh5lZwdDOIW");
  x = e.makeNodePrototype("layout", undefined, "oCe9SZv041R0jzcI");
  N = e.makeComponentPrototype(undefined, "KHWMA9JKMq5dyfpV");
  D = e.makeNodePrototype("layout", undefined, "Ozu2jL_yLY5v1Qnh");
  T = e.makeNodePrototype("layout", undefined, "Yt76eYI7MnSMMqzj");
  L = e.makeNodePrototype("label", undefined, "MikzNL2Eh_J95vsb");
  q = e.makeNodePrototype("label", undefined, "6TvcSgTKXEqPogts");
  z = e.makeNodePrototype("label", undefined, "sIrVDkwehgcx45au");
  _ = e.makeNodePrototype("label", undefined, "kP2wDu-XnRUupOGb");
  B = e.makeNodePrototype("view", undefined, "GtwDmw8TXf-8qKBG");
  E = e.makeComponentPrototype(undefined, "KT2jzzLaeR00yFfL");
  O = e.makeComponentPrototype(undefined, "ymvJyE53lzqW2Gbo");
  F = require("chatgpt_subscription_pricing/res");
  j = require("oai_core/src/OAITheme");
  K = require("oai_core/src/OAITokens");
  X = require("oai_ui/src/components/Button");
  U = require("oai_ui/src/components/Icon");
  G = require("oai_ui/src/components/Pressable");
  J = require("oai_ui/src/components/Text");
  W = require("valdi_core/src/Component");
  Z = require("valdi_core/src/Device");
  Y = require("valdi_core/src/ElementRef");
  H = require("valdi_core/src/LocalizableStrings");
  $ = require("valdi_core/src/localization/Locale");
  Q = require("./AndroidPricingKoreaDisclosure");
  ee = require("./RefreshedComparePlansCopy");
  te = require("./AndroidPricingRefreshSurface");
  oe = require("./RefreshedComparePlansStyles");
  re = require("./SubscriptionPricingProPresentation");
  ie = require("./Strings");
  let AndroidRefreshedComparePlansPage;
  let <class_fields_init>;
  class AndroidRefreshedComparePlansPage extends W.Component { ... }
  <proto:AndroidRefreshedComparePlansPage>.onRender = function <atom:0>;
  <proto:AndroidRefreshedComparePlansPage>.renderLegalFooter = function <atom:0>;
  <proto:AndroidRefreshedComparePlansPage>.renderCard = function <atom:0>;
  <proto:AndroidRefreshedComparePlansPage>.renderPrice = function <atom:0>;
  <proto:AndroidRefreshedComparePlansPage>.renderProPicker = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AndroidRefreshedComparePlansPage>;
  AndroidRefreshedComparePlansPage = function <atom:0>;
  // close_loc <class_fields_init>
  AndroidRefreshedComparePlansPage#1 = function <atom:0>;
  exports.AndroidRefreshedComparePlansPage = AndroidRefreshedComparePlansPage#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/AndroidRefreshedComparePlansPage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
