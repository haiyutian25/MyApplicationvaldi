// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=188B file=chatgpt_subscription_pricing/src/WorkPricingComparison
// args: e
// closure: this
function {
  if (!((e.width !== this.state.freeWidth))) goto L_bb;
  this.setState({freeWidth: e.width});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=188B file=chatgpt_subscription_pricing/src/WorkPricingComparison
// args: e
// closure: this
function {
  if (!((e.width !== this.state.planWidth))) goto L_bb;
  this.setState({planWidth: e.width});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=2 bc=260B file=chatgpt_subscription_pricing/src/WorkPricingComparison
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, b
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
  if (!(b.Device.isIOS())) goto L_7f;
  goto L_81;
  // [栈深重同步 3 -> 2]
  if (!(b.Device.isIOS())) goto L_d4;
  goto L_d6;
  // [栈深重同步 3 -> 2]
  this.state = {freeWidth: 24, planWidth: 24};
  this.onFreeLayout = function <atom:0>;
  this.onPlanLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=2 vars=2 closure=18 cpool=1 bc=2367B file=chatgpt_subscription_pricing/src/WorkPricingComparison
// args: t, o
// closure: e, a, R, p, C, h, y, f, V, c, this, w, u, v, P, g, m, M
function {
  e.beginRender(a, "".concat(o));
  e.setAttributeStyle("style", R);
  e.beginRender(p, undefined);
  e.setAttributeStyle("style", C.feature);
  e.beginComponent(h.Text, y, undefined, undefined);
  e.setViewModelProperty("value", t.title);
  if (!((f == null))) goto L_1d2;
  f;
  goto L_1f3;
  e.setViewModelProperty("font", undefined.font);
  if (!(V)) goto L_228;
  goto L_22a;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("letterSpacing", 0.25);
  if (!((f == null))) goto L_262;
  f;
  goto L_283;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.endComponent();
  e.endRender();
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", C.value);
  e.setAttributeNumber("width", this.state.freeWidth);
  e.beginComponent(w.Icon, u, undefined, undefined);
  if (!((true === t.isIncludedInComparisonPlan))) goto L_493;
  goto L_4bd;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("src", v.getIconAsset("minus"));
  if (!(V)) goto L_4f3;
  goto L_4f5;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("size", 24);
  e.setViewModelProperty("color", P.OAIColor.IconTertiary);
  if (!((true === t.isIncludedInComparisonPlan))) goto L_5c2;
  goto L_5c7;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityLabel", "−");
  e.endComponent();
  e.endRender();
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", C.value);
  e.setAttributeNumber("width", this.state.planWidth);
  e.beginComponent(w.Icon, m, undefined, undefined);
  if (!(t.isIncluded)) goto L_7d4;
  goto L_7fe;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("src", v.getIconAsset("minus"));
  if (!(V)) goto L_834;
  goto L_836;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("size", 24);
  e.setViewModelProperty("color", M);
  if (!(t.isIncluded)) goto L_8be;
  goto L_8c3;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityLabel", "−");
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=7 closure=24 cpool=4 bc=3430B file=chatgpt_subscription_pricing/src/WorkPricingComparison
// locals: S, M, V, k, f, R, this
// closure: e, a, p, C, h, y, c, w, u, v, P, g, m, b, I, A, t, o, i, n, r, d, l, s
function {
  this = this;
  let R;
  let f;
  let k;
  let V;
  let M;
  let S;
  if (((undefined === undefined))) goto L_64;
  S = <to_object>(undefined).plan;
  M = <to_object>(undefined).accentColor;
  <to_object>(undefined);
  goto L_8a;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  V = b.Device.isIOS();
  k = I.workPricingTextStyle(A.SubscriptionPricingTextRole.ComparisonHeading);
  f = I.workPricingTextStyle(A.SubscriptionPricingTextRole.ComparisonFeature);
  if (!(V)) goto L_1d5;
  goto L_1f9;
  // [栈深重同步 1 -> 0]
  R = C.row;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", C.table);
  if (!(V)) goto L_2aa;
  goto L_2ab;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("gap", undefined);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", R);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", C.feature);
  e.beginComponent(h.Text, n, undefined, undefined);
  e.setViewModelProperty("value", this.viewModel.featuresTitle);
  if (!((k == null))) goto L_47e;
  k;
  goto L_49f;
  e.setViewModelProperty("font", undefined.font);
  if (!(V)) goto L_4d4;
  goto L_4d6;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("letterSpacing", 0.5);
  if (!((k == null))) goto L_50e;
  k;
  goto L_52f;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("color", P.OAIColor.TextTertiary);
  e.endComponent();
  e.endRender();
  e.beginRender(r, undefined);
  if (!(V)) goto L_675;
  goto L_699;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", C.heading);
  if (!(V)) goto L_6cf;
  goto L_6d0;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("width", undefined);
  e.setAttributeFunction("onLayout", this.onFreeLayout);
  e.beginComponent(h.Text, d, undefined, undefined);
  e.setViewModelProperty("value", this.viewModel.comparisonTitle);
  if (!((k == null))) goto L_81a;
  k;
  goto L_83b;
  e.setViewModelProperty("font", undefined.font);
  if (!(V)) goto L_870;
  goto L_872;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("letterSpacing", 0.5);
  if (!((k == null))) goto L_8aa;
  k;
  goto L_8cb;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("color", P.OAIColor.TextTertiary);
  e.endComponent();
  e.endRender();
  e.beginRender(l, undefined);
  if (!(V)) goto L_a11;
  goto L_a35;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", C.heading);
  if (!(V)) goto L_a6b;
  goto L_a6c;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("width", undefined);
  e.setAttributeFunction("onLayout", this.onPlanLayout);
  e.beginComponent(h.Text, s, undefined, undefined);
  e.setViewModelProperty("value", S.title);
  if (!((k == null))) goto L_b96;
  k;
  goto L_bb7;
  e.setViewModelProperty("font", undefined.font);
  if (!(V)) goto L_bec;
  goto L_bee;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("letterSpacing", 0.5);
  if (!((k == null))) goto L_c26;
  k;
  goto L_c47;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setViewModelProperty("color", M);
  e.endComponent();
  e.endRender();
  e.endRender();
  S.features.map(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=32 closure=0 cpool=2 bc=2101B file=chatgpt_subscription_pricing/src/WorkPricingComparison
// args: require, module, exports
// locals: e, t, o, i, n, r, d, l, s, a, p, y, c, u, g, m, v, P, w, h, S, b, M, A, I, WorkPricingComparison, <class_fields_init>, WorkPricingComparison#1, C
function {
  let C;
  let WorkPricingComparison#1;
  let I;
  let A;
  let M;
  let b;
  let S;
  let h;
  let w;
  let P;
  let v;
  let m;
  let g;
  let u;
  let c;
  let y;
  let p;
  let a;
  let s;
  let l;
  let d;
  let r;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WorkPricingComparison = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "Wg1O9WNDgzq1boW_");
  o = e.makeNodePrototype("layout", undefined, "Tprsyo9q5ih-yG9F");
  i = e.makeNodePrototype("layout", undefined, "nd-LdimlYZHw0kuG");
  n = e.makeComponentPrototype(undefined, "AunN2L4JUrpPzrw8");
  r = e.makeNodePrototype("layout", undefined, "aCff_cmA9qzQgi-x");
  d = e.makeComponentPrototype(undefined, "WChEvhRHS7LZwMvg");
  l = e.makeNodePrototype("layout", undefined, "kAjQBeRVvJPrgPVQ");
  s = e.makeComponentPrototype(undefined, "DYew9aPhCOaIPe4e");
  a = e.makeNodePrototype("layout", undefined, "65xxMAte8qQJpJRR");
  p = e.makeNodePrototype("layout", undefined, "B2q6RMypuZzZ2LLR");
  y = e.makeComponentPrototype(["lines", 0], "S5SwaBEp0adS58Ln");
  c = e.makeNodePrototype("layout", undefined, "tEr7Ke412pKy3JJ0");
  u = e.makeComponentPrototype(undefined, "7-q5V_VpSyMS3D1E");
  g = e.makeNodePrototype("layout", undefined, "VkxctVmqIV_xAP3E");
  m = e.makeComponentPrototype(undefined, "6B-ntr9eyh7asFVO");
  v = require("dil_icon_assets/src/IconAssets");
  P = require("oai_core/src/OAITokens");
  w = require("oai_ui/src/components/Icon");
  h = require("oai_ui/src/components/Text");
  S = require("valdi_core/src/Component");
  b = require("valdi_core/src/Device");
  M = require("valdi_core/src/Style");
  A = require("./SubscriptionPricingTypography");
  I = require("./WorkPricingAppearance");
  let WorkPricingComparison;
  let <class_fields_init>;
  class WorkPricingComparison extends S.StatefulComponent { ... }
  <proto:WorkPricingComparison>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WorkPricingComparison>;
  WorkPricingComparison = function <atom:0>;
  // close_loc <class_fields_init>
  WorkPricingComparison#1 = function <atom:0>;
  exports.WorkPricingComparison = WorkPricingComparison#1;
  C = {table: new M.Style({width: "100%"}), iosRow: new M.Style({alignItems: "center", flexDirection: "row", gap: P.OAISpacing.One, width: "100%"}), row: new M.Style({alignItems: "center", flexDirection: "row", gap: P.OAISpacing.One, paddingTop: P.OAISpacing.One, paddingBottom: P.OAISpacing.One, width: "100%"}), feature: new M.Style({flexGrow: 1, flexShrink: 1, minWidth: 0, paddingRight: P.OAISpacing.One}), iosHeading: new M.Style({alignItems: "center", flexShrink: 0, minWidth: 32}), heading: new M.Style({alignItems: "center", flexShrink: 0, minWidth: 24, paddingLeft: P.OAISpacing.Half, paddingRight: P.OAISpacing.Half}), value: new M.Style({alignItems: "center", flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/WorkPricingComparison
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
