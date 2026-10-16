// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshSurface
// args: e
// closure: V
function {
  return (e.kind === V.SubscriptionPricingActionKind.OpenLegal);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshSurface
// args: t
// closure: e
function {
  return (t.id === e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=41B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshSurface
// args: e
// closure: N
function {
  return N.find(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=279B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshSurface
// closure: e, r, L, g
function {
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", L.closeIcon);
  e.setAttribute("src", g.default.pricingClose);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=64B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshSurface
// args: e
// locals: t
// closure: O, h
function {
  let t;
  t = O(e);
  if (!((undefined !== t))) goto L_3f;
  return !h.isActionDisabled(t, false);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=61B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshSurface
// args: e
// locals: t
// closure: O, h
function {
  let t;
  t = O(e);
  if (!((undefined !== t))) goto L_3c;
  h.executeNativeIntent(t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=42B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshSurface
// closure: h, C
function {
  return h.executeNativeIntent(C);   // tail call
}

// fn <atom:0>  args=0 vars=13 closure=27 cpool=6 bc=5644B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshSurface
// locals: h, S, C, R, x, q, B, N, O, T, D, _, this
// closure: V, e, r, L, g, t, o, w, i, I, n, d, f, s, l, A, a, c, m, p, M, P, y, v, u, b, k
function {
  this = this;
  let _;
  let D;
  let T;
  let O;
  let N;
  let B;
  let q;
  let x;
  let R;
  let C;
  let S;
  let h;
  if (((undefined === undefined))) goto L_99;
  h = <to_object>(undefined).surface;
  S = <to_object>(undefined).plan;
  C = <to_object>(undefined).primaryAction;
  <to_object>(undefined);
  goto L_c0;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_2c;
  // [栈深重同步 1 -> 0]
  R = h.presentation;
  x = h.nativeState;
  q = x.androidRefresh;
  if (!((undefined === q))) goto L_139;
  return;
  B = x.androidKoreaDisclosure;
  N = R.actions.filter(function <atom:0>);
  O = function <atom:0>;
  if (!((undefined !== C))) goto L_206;
  T = (h.activeActionId === C.id);
  if ((T)) goto L_266;
  if (!((C == null))) goto L_21c;
  C;
  goto L_23d;
  if (((true === undefined.isLoading))) goto L_266;
  D = R.isLoading;
  if (((undefined === C))) goto L_2a5;
  if ((T)) goto L_2a5;
  _ = h.isActionDisabled(C, T);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", L.root);
  if (!(R.isDarkMode)) goto L_37a;
  goto L_37f;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", "#FCFCFC");
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", L.toolbar);
  e.beginComponent(w.Pressable, i, undefined, undefined);
  e.setViewModelProperty("style", I((true === R.isDarkMode)));
  e.setViewModelProperty("accessibilityLabel", R.closeAccessibilityLabel);
  e.setViewModelProperty("disabled", h.dismissalDisabled);
  e.setViewModelProperty("onPress", h.dismiss);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", L.scroll);
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", L.body);
  e.beginComponent(f.AndroidPricingRefresh, s, undefined, undefined);
  e.setViewModelProperty("presentation", R);
  e.setViewModelProperty("plan", S);
  e.setViewModelProperty("openComparePlans", this.viewModel.openComparePlans);
  e.setViewModelProperty("comparePlansEnabled", q.canOpenComparePlans);
  e.setViewModelProperty("accentTextColor", q.accentTextColor);
  e.setViewModelProperty("accentIconColor", q.accentIconColor);
  e.endComponent();
  if (((undefined === B))) goto L_baf;
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", L.disclosure);
  e.beginComponent(A.AndroidPricingKoreaDisclosure, a, undefined, undefined);
  e.setViewModelProperty("richText", B);
  e.setViewModelProperty("isDarkMode", (true === R.isDarkMode));
  e.setViewModelProperty("showsCompanyInformation", (undefined !== O(A.KoreaCompanyInformationId)));
  e.setViewModelProperty("isLinkEnabled", function <atom:0>);
  e.setViewModelProperty("openLegalDocument", function <atom:0>);
  e.endComponent();
  e.endRender();
  e.endRender();
  e.endRender();
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", L.footer);
  e.beginComponent(m.Button, p, undefined, undefined);
  e.setViewModelProperty("block", true);
  if (!(_)) goto L_d31;
  e.setViewModelProperty("disabled", !D);
  e.setViewModelProperty("disabledStyle", M.subscriptionPricingAndroidStyles.nativeAndroidDisabledCheckoutAction);
  if (!((C == null))) goto L_ddb;
  C;
  goto L_dfc;
  if (!((undefined.title == null))) goto L_e8b;
  undefined.title;
  e.setViewModelProperty("label", x.strings.checkout.purchase.title);
  e.setViewModelProperty("labelStyle", L.purchaseLabel);
  e.setViewModelProperty("loading", D);
  if ((_)) goto L_f45;
  if (!((undefined === C))) goto L_f4a;
  goto L_f4c;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onPress", function <atom:0>);
  e.setViewModelProperty("size", P.OAIControlSize.Lg);
  e.setViewModelProperty("style", L.purchaseAction);
  e.setViewModelProperty("variant", m.ButtonVariant.Primary);
  e.endComponent();
  if (((undefined === x.androidRefreshRenewalText))) goto L_12e7;
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", L.renewal);
  e.beginComponent(v.Text, u, undefined, undefined);
  e.setViewModelProperties(L.renewalLabel.attributes);
  e.setViewModelProperty("align", "center");
  e.setViewModelProperty("value", x.androidRefreshRenewalText);
  e.endComponent();
  e.endRender();
  e.beginComponent(m.Button, b, undefined, undefined);
  e.setViewModelProperty("block", true);
  if (!((h.restoreSubscriptionCopy == null))) goto L_13bd;
  h.restoreSubscriptionCopy;
  goto L_13de;
  if (!((undefined.title == null))) goto L_142b;
  undefined.title;
  e.setViewModelProperty("label", k.default.subscriptionsRestoreSubscriptionCta());
  e.setViewModelProperty("labelStyle", L.restoreLabel);
  e.setViewModelProperty("onPress", h.restorePurchases);
  e.setViewModelProperty("style", L.restore);
  e.setViewModelProperty("variant", m.ButtonVariant.Ghost);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshSurface
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

// fn I  args=1 vars=1 closure=2 cpool=0 bc=11B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshSurface
// args: e
// closure: x, R
function {
  if (!(e)) goto L_7;
  return x;
  return R;
}

// fn <atom:0>  args=3 vars=38 closure=0 cpool=7 bc=2965B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshSurface
// args: require, module, exports
// locals: e, t, o, i, r, n, d, s, l, a, c, p, y, u, b, g, P, m, w, v, h, S, C, f, A, M, V, k, AndroidPricingRefreshSurface, <class_fields_init>, AndroidPricingRefreshSurface#1, R, x, I, L
function {
  I = function I;
  let L;
  let x;
  let R;
  let AndroidPricingRefreshSurface#1;
  let k;
  let V;
  let M;
  let A;
  let f;
  let C;
  let S;
  let h;
  let v;
  let w;
  let m;
  let P;
  let g;
  let b;
  let u;
  let y;
  let p;
  let c;
  let a;
  let l;
  let s;
  let d;
  let n;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AndroidPricingRefreshSurface = undefined;
  exports.androidPricingRefreshNavigationButtonStyle = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "pN7A2eg_BF2dbmyr");
  o = e.makeNodePrototype("layout", undefined, "R1FtjP8JVmW9n4db");
  i = e.makeComponentPrototype(["accessibilityId", "subscription-pricing-dismiss"], "Ij1AuyqaugXKnSLO");
  r = e.makeNodePrototype("image", undefined, "DJIU0vwRtB_H-JP6");
  n = e.makeNodePrototype("scroll", undefined, "jkjvnGq65sGdAGC0");
  d = e.makeNodePrototype("layout", undefined, "xeBokvuhpoFc4Rhb");
  s = e.makeComponentPrototype(undefined, "zmLYeEHL2cWphmz9");
  l = e.makeNodePrototype("layout", undefined, "Nk9if9YxKj6d5Bwa");
  a = e.makeComponentPrototype(undefined, "VyN08ZKWWEKkVhkN");
  c = e.makeNodePrototype("layout", undefined, "OkNpOOY1Gqp4UeOK");
  p = e.makeComponentPrototype(["accessibilityId", "subscription-pricing-refresh-purchase"], "AbUglT4L4xAFLqYQ");
  y = e.makeNodePrototype("layout", undefined, "XrwzLkZ-8BMFe9gA");
  u = e.makeComponentPrototype(undefined, "TZqekLJ5Dz81Skw1");
  b = e.makeComponentPrototype(["accessibilityId", "subscription-pricing-restore-subscription"], "9jbDN0_EgqYs9bxB");
  g = require("chatgpt_subscription_pricing/res");
  P = require("oai_core/src/OAITokens");
  m = require("oai_ui/src/components/Button");
  w = require("oai_ui/src/components/Pressable");
  v = require("oai_ui/src/components/Text");
  h = require("valdi_core/src/Component");
  S = require("valdi_core/src/Style");
  C = require("valdi_core/src/SystemFont");
  f = require("./AndroidPricingRefresh");
  A = require("./AndroidPricingKoreaDisclosure");
  M = require("./SubscriptionPricingAndroidStyles");
  V = require("./SubscriptionPricingModels");
  k = require("./Strings");
  let AndroidPricingRefreshSurface;
  let <class_fields_init>;
  class AndroidPricingRefreshSurface extends h.Component { ... }
  <proto:AndroidPricingRefreshSurface>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AndroidPricingRefreshSurface>;
  AndroidPricingRefreshSurface = function <atom:0>;
  // close_loc <class_fields_init>
  AndroidPricingRefreshSurface#1 = function <atom:0>;
  exports.AndroidPricingRefreshSurface = AndroidPricingRefreshSurface#1;
  R = new S.Style({accessibilityCategory: "button", alignItems: "center", backgroundColor: P.OAIColor.BgElevatedPrimary, borderRadius: 22, borderColor: P.OAIColor.BorderDefault, boxShadow: "0 0 45 rgba(0, 0, 0, 0.3)", height: 44, justifyContent: "center", width: 44});
  x = R.extend({boxShadow: undefined, borderWidth: 0.5});
  exports.androidPricingRefreshNavigationButtonStyle = I;
  L = {purchaseAction: M.subscriptionPricingAndroidStyles.nativeAndroidCheckoutAction.extend({paddingTop: 16, paddingBottom: 16}), purchaseLabel: new S.Style({font: C.systemMediumFont(17), letterSpacing: 0.1, numberOfLines: 0, textAlign: "center"}), root: new S.Style({accessibilityId: "subscription-pricing-refresh-page", flexDirection: "column", height: "100%", width: "100%"}), toolbar: new S.Style({alignItems: "center", flexDirection: "row", flexShrink: 0, height: 68, justifyContent: "flex-end", paddingLeft: 14, paddingRight: 14, width: "100%"}), closeIcon: new S.Style({accessibilityNavigation: "ignored", height: 24, tint: P.OAIColor.IconPrimary, width: 24}), scroll: new S.Style({accessibilityId: "subscription-pricing-scroll", flexBasis: 0, flexGrow: 1, flexShrink: 1, minHeight: 0, showsVerticalScrollIndicator: false, width: "100%"}), body: new S.Style({paddingLeft: 32, paddingRight: 32, paddingTop: 8, width: "100%"}), disclosure: new S.Style({paddingTop: P.OAISpacing.Three, width: "100%"}), footer: new S.Style({paddingLeft: 32, paddingRight: 32, paddingTop: 16, paddingBottom: 16, width: "100%"}), renewal: new S.Style({alignItems: "center", marginTop: 16, width: "100%"}), renewalLabel: new S.Style({color: P.OAIColor.TextSecondary, font: C.systemFont(12), letterSpacing: 0.2, numberOfLines: 0}), restore: new S.Style({height: "auto", minHeight: 48, paddingTop: 8, paddingBottom: 8, width: "100%"}), restoreLabel: new S.Style({color: P.OAIColor.TextSecondary, font: C.systemFont(14), letterSpacing: 0.1, numberOfLines: 0, textAlign: "center"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/AndroidPricingRefreshSurface
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
