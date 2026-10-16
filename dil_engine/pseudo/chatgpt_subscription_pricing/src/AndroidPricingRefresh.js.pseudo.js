// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=188B file=chatgpt_subscription_pricing/src/AndroidPricingRefresh
// args: e
// closure: this
function {
  if (!((e.width > this.state.columnWidth))) goto L_bb;
  this.setState({columnWidth: e.width});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=83B file=chatgpt_subscription_pricing/src/AndroidPricingRefresh
// locals: this, this.active_func, new.target, arguments
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
  this.state = {columnWidth: 32};
  this.measureColumn = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=290B file=chatgpt_subscription_pricing/src/AndroidPricingRefresh
// args: t
// closure: e, o, K, this
function {
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", K.headingMeasure);
  e.setAttributeString("value", t);
  e.setAttributeFunction("onLayout", this.measureColumn);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=19 cpool=0 bc=2982B file=chatgpt_subscription_pricing/src/AndroidPricingRefresh
// args: t
// closure: e, P, K, h, L, w, A, f, this, R, T, j, W, k, M, C, z, q, V
function {
  e.beginRender(P, undefined);
  e.setAttributeStyle("style", K.row);
  e.beginRender(h, undefined);
  e.setAttributeStyle("style", K.featureText);
  e.beginComponent(L.Text, w, undefined, undefined);
  e.setViewModelProperties(K.feature.attributes);
  e.setViewModelProperty("value", t.title);
  e.endComponent();
  if (!((undefined !== t.subtitle))) goto L_38e;
  e.beginComponent(L.Text, A, undefined, undefined);
  e.setViewModelProperties(K.featureSubtitle.attributes);
  e.setViewModelProperty("value", t.subtitle);
  e.endComponent();
  e.endRender();
  e.beginRender(f, undefined);
  e.setAttributeStyle("style", K.column);
  e.setAttributeNumber("width", this.state.columnWidth);
  e.beginRender(R, undefined);
  e.setAttributeStyle("style", K.freeMark);
  if (!(t.isIncludedInComparisonPlan)) goto L_5b7;
  goto L_5fc;
  // [栈深重同步 4 -> 3]
  e.setAttribute("src", T.default.pricingMinus);
  if (!(t.isIncludedInComparisonPlan)) goto L_69a;
  goto L_6e5;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityLabel", j.default.subscriptionsPricingRefreshFeatureNotIncluded(W));
  e.endRender();
  e.endRender();
  e.beginRender(k, undefined);
  e.setAttributeStyle("style", K.column);
  e.setAttributeNumber("width", this.state.columnWidth);
  e.setAttributeNumber("marginLeft", M.OAISpacing.OnePointTwentyFive);
  e.beginRender(C, undefined);
  e.setAttributeStyle("style", z);
  e.setAttributeString("tint", q);
  if (!(t.isIncluded)) goto L_9ba;
  goto L_9ff;
  // [栈深重同步 4 -> 3]
  e.setAttribute("src", T.default.pricingMinus);
  if (!(t.isIncluded)) goto L_abe;
  goto L_b2a;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityLabel", j.default.subscriptionsPricingRefreshFeatureNotIncluded(V.title));
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=347B file=chatgpt_subscription_pricing/src/AndroidPricingRefresh
// closure: e, L, I, K, j
function {
  e.beginComponent(L.Text, I, undefined, undefined);
  e.setViewModelProperties(K.compareLabel.attributes);
  e.setViewModelProperty("value", j.default.subscriptionsComparePlans());
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=473B file=chatgpt_subscription_pricing/src/AndroidPricingRefresh
// closure: e, L, I, K, j, _, x, this
function {
  e.beginComponent(_.Pressable, x, undefined, undefined);
  e.setViewModelProperty("style", K.compareLink);
  e.setViewModelProperty("disabled", !this.viewModel.comparePlansEnabled);
  e.setViewModelProperty("onPress", this.viewModel.openComparePlans);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=8 closure=37 cpool=3 bc=5605B file=chatgpt_subscription_pricing/src/AndroidPricingRefresh
// locals: N, V, F, q, B, E, W, this
// closure: e, o, K, P, h, L, w, A, f, R, T, j, k, M, C, z, I, _, x, O, t, i, r, n, d, l, s, a, u, c, p, y, b, m, g, v, S
function {
  this = this;
  let W;
  let E;
  let B;
  let q;
  let F;
  let V;
  let N;
  if (((undefined === undefined))) goto L_b0;
  N = <to_object>(undefined).presentation;
  V = <to_object>(undefined).plan;
  F = <to_object>(undefined).accentTextColor;
  q = <to_object>(undefined).accentIconColor;
  <to_object>(undefined);
  goto L_d7;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_20;
  // [栈深重同步 1 -> 0]
  B = N.titleAccentRange;
  if (!((undefined === B))) goto L_12b;
  goto L_384;
  // [栈深重同步 1 -> 0]
  if (!(N.isDarkMode)) goto L_2c3;
  goto L_2c8;
  // [栈深重同步 5 -> 4]
  E = new O.AttributedTextBuilder().appendText(N.title.slice(0, B.start)).append(N.title.slice(B.start, B.end), {color: "#5856D6"}).appendText(N.title.slice(B.end)).build();
  if (!((N.comparisonPlanTitle == null))) goto L_3f7;
  N.comparisonPlanTitle;
  W = j.default.subscriptionsPremiumComparisonFreeHeader();
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", K.body);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", K.columnMeasure);
  [W, V.title].map(function <atom:0>);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", K.hero);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", K.sparkles);
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", K.largeSparkle);
  e.setAttribute("src", T.default.proSparkle);
  e.setAttributeString("tint", q);
  e.endRender();
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", K.smallSparkle);
  e.setAttribute("src", T.default.proSparkle);
  e.setAttributeString("tint", q);
  e.endRender();
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", K.heading);
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", K.title);
  e.setAttribute("value", E);
  e.endRender();
  if (!((undefined !== N.subtitle))) goto L_be1;
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", K.subtitle);
  e.setAttributeString("accessibilityLabel", N.subtitle);
  e.setAttributeString("value", N.subtitle);
  e.endRender();
  e.endRender();
  e.endRender();
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", K.card);
  e.beginRender(p, undefined);
  e.setAttributeStyle("style", K.row);
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", K.featureText);
  e.beginComponent(L.Text, b, undefined, undefined);
  e.setViewModelProperties(K.columnHeading.attributes);
  if (!((N.featuresTitle == null))) goto L_f01;
  N.featuresTitle;
  e.setViewModelProperty("value", j.default.subscriptionsPremiumComparisonHeader());
  e.endComponent();
  e.endRender();
  e.beginRender(m, undefined);
  e.setAttributeStyle("style", K.column);
  e.setAttributeNumber("width", this.state.columnWidth);
  e.beginComponent(L.Text, g, undefined, undefined);
  e.setViewModelProperties(K.columnHeading.attributes);
  e.setViewModelProperty("align", "center");
  e.setViewModelProperty("value", W);
  e.endComponent();
  e.endRender();
  e.beginRender(v, undefined);
  e.setAttributeStyle("style", K.column);
  e.setAttributeNumber("width", this.state.columnWidth);
  e.setAttributeNumber("marginLeft", M.OAISpacing.OnePointTwentyFive);
  e.beginComponent(L.Text, S, undefined, undefined);
  e.setViewModelProperties(K.columnHeading.attributes);
  e.setViewModelProperty("color", F);
  e.setViewModelProperty("align", "center");
  e.setViewModelProperty("value", V.title);
  e.endComponent();
  e.endRender();
  e.endRender();
  V.features.map(function <atom:0>);
  if (((undefined === this.viewModel.openComparePlans))) goto L_1594;
  function <atom:0>();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=49 closure=0 cpool=8 bc=4926B file=chatgpt_subscription_pricing/src/AndroidPricingRefresh
// args: require, module, exports
// locals: e, t, i, o, r, n, d, l, s, a, u, c, p, y, b, m, g, v, S, P, h, w, A, f, R, k, C, x, I, T, M, N, O, V, F, L, _, j, AndroidPricingRefresh, <class_fields_init>, AndroidPricingRefresh#1, q, B, z, E, K
function {
  let K;
  let E;
  let z;
  let B;
  let q;
  let AndroidPricingRefresh#1;
  let j;
  let _;
  let L;
  let F;
  let V;
  let O;
  let N;
  let M;
  let T;
  let I;
  let x;
  let C;
  let k;
  let R;
  let f;
  let A;
  let w;
  let h;
  let P;
  let S;
  let v;
  let g;
  let m;
  let b;
  let y;
  let p;
  let c;
  let u;
  let a;
  let s;
  let l;
  let d;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AndroidPricingRefresh = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "7FsKrktvLzGiwhOY");
  i = e.makeNodePrototype("layout", undefined, "0u1-B17A6UqnGC6X");
  o = e.makeNodePrototype("label", undefined, "Jib4eZiIG-wQabRg");
  r = e.makeNodePrototype("layout", undefined, "2XKszIvPISKKtIcm");
  n = e.makeNodePrototype("layout", undefined, "OevMADZnhcnWj2Dp");
  d = e.makeNodePrototype("image", undefined, "ME-c6WVN__roxi3T");
  l = e.makeNodePrototype("image", undefined, "QE7sRPtt9b5itoJ_");
  s = e.makeNodePrototype("layout", undefined, "bRuvRZMNFJarm-tk");
  a = e.makeNodePrototype("label", ["textAlign", "center"], "CNPLEs1M5P6BXlPp");
  u = e.makeNodePrototype("label", undefined, "m6y_kqzI6pQPwiVB");
  c = e.makeNodePrototype("view", undefined, "_rMauaaM4EaEB2k_");
  p = e.makeNodePrototype("layout", undefined, "eCp5l-mwjV67znTg");
  y = e.makeNodePrototype("layout", undefined, "LOchRzE19JfsfDzT");
  b = e.makeComponentPrototype(undefined, "8xNnVoEMThjuo9PZ");
  m = e.makeNodePrototype("layout", undefined, "dpf4irTylpx9z-Lj");
  g = e.makeComponentPrototype(undefined, "PNKS9oLON2j_Tx-Z");
  v = e.makeNodePrototype("layout", undefined, "E8CGy5wlvgPZVvjY");
  S = e.makeComponentPrototype(undefined, "q9NxKVQyEGlYQfBU");
  P = e.makeNodePrototype("layout", undefined, "7nkMc54tOcY0cxns");
  h = e.makeNodePrototype("layout", undefined, "8cjpCb2QKKJExDOP");
  w = e.makeComponentPrototype(undefined, "nRhJNTmfiJ2x__9j");
  A = e.makeComponentPrototype(undefined, "LfS6qZkzR9c6kXlg");
  f = e.makeNodePrototype("layout", undefined, "Iwa2vT2rHRsuz_s7");
  R = e.makeNodePrototype("image", undefined, "TOKwJYR8KKpUm1oR");
  k = e.makeNodePrototype("layout", undefined, "LxzzAD0Pni2NjFOu");
  C = e.makeNodePrototype("image", undefined, "ufZS6fK1GwBoB7Mr");
  x = e.makeComponentPrototype(undefined, "-RV1UWBGl4-cYlHS");
  I = e.makeComponentPrototype(undefined, "zVbHgoFgGgMl48rt");
  T = require("chatgpt_subscription_pricing/res");
  M = require("oai_core/src/OAITokens");
  N = require("valdi_core/src/Component");
  O = require("valdi_core/src/utils/AttributedTextBuilder");
  V = require("valdi_core/src/Style");
  F = require("valdi_core/src/SystemFont");
  L = require("oai_ui/src/components/Text");
  _ = require("oai_ui/src/components/Pressable");
  j = require("./Strings");
  let AndroidPricingRefresh;
  let <class_fields_init>;
  class AndroidPricingRefresh extends N.StatefulComponent { ... }
  <proto:AndroidPricingRefresh>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AndroidPricingRefresh>;
  AndroidPricingRefresh = function <atom:0>;
  // close_loc <class_fields_init>
  AndroidPricingRefresh#1 = function <atom:0>;
  exports.AndroidPricingRefresh = AndroidPricingRefresh#1;
  q = new V.Style({color: M.OAIColor.TextPrimary, font: F.systemFont(14), letterSpacing: 0.1, numberOfLines: 0});
  B = new V.Style({color: M.OAIColor.TextSecondary, font: F.systemMediumFont(14), letterSpacing: 0.1, numberOfLines: 0});
  z = new V.Style({accessibilityCategory: "image", height: 24, objectFit: "contain", width: 24});
  E = new V.Style({accessibilityNavigation: "ignored", objectFit: "contain", position: "absolute"});
  K = {compareLink: new V.Style({accessibilityId: "subscription-pricing-compare-plans", accessibilityCategory: "button", alignSelf: "flex-start"}), compareLabel: new V.Style({color: M.OAIColor.TextSecondary, font: F.systemFont(14), letterSpacing: 0.1, numberOfLines: 0, textDecoration: "dotted-underline"}), columnMeasure: new V.Style({flexDirection: "row", height: 0, overflow: "scroll", position: "absolute"}), headingMeasure: new V.Style({accessibilityNavigation: "ignored", font: F.systemMediumFont(14), letterSpacing: 0.1, opacity: 0, touchEnabled: false, numberOfLines: 1}), body: new V.Style({gap: M.OAISpacing.Three, width: "100%"}), hero: new V.Style({alignItems: "center", gap: M.OAISpacing.TwoPointFive, width: "100%"}), sparkles: new V.Style({width: 64, height: 64}), largeSparkle: E.extend({bottom: 0, height: 48, left: 0, width: 48}), smallSparkle: E.extend({height: 24, right: 0, top: 0, width: 24}), heading: new V.Style({alignItems: "center", gap: M.OAISpacing.Two, width: "100%"}), title: new V.Style({color: M.OAIColor.TextPrimary, font: F.systemBoldFont(36), letterSpacing: -0.32, numberOfLines: 0}), subtitle: new V.Style({color: M.OAIColor.TextSecondary, flexShrink: 1, font: F.systemFont(17), letterSpacing: 0.1, numberOfLines: 0, textAlign: "center"}), card: new V.Style({accessibilityId: "subscription-pricing-refresh-features", borderColor: M.OAIColor.BorderDefault, borderRadius: 20, borderWidth: 1, gap: M.OAISpacing.TwoPointFive, paddingLeft: M.OAISpacing.Two, paddingRight: M.OAISpacing.Two, paddingTop: M.OAISpacing.Three, paddingBottom: M.OAISpacing.Three, width: "100%"}), row: new V.Style({alignItems: "center", flexDirection: "row", width: "100%"}), featureText: new V.Style({flexGrow: 1, flexShrink: 1, gap: M.OAISpacing.Half, minWidth: 0, paddingRight: M.OAISpacing.One}), column: new V.Style({alignItems: "center", flexShrink: 0, justifyContent: "center"}), columnHeading: B, feature: q, featureSubtitle: q.extend({color: M.OAIColor.TextSecondary}), freeMark: z.extend({tint: M.OAIColor.IconTertiary})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/AndroidPricingRefresh
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
