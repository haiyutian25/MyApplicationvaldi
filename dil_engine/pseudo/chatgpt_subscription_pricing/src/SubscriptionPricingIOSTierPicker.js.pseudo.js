// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=109B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSTierPicker
// args: e, t
function {
  return Math.max(e, t.frame.width);   // tail call
}

// fn <atom:0>  args=0 vars=7 closure=5 cpool=1 bc=974B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSTierPicker
// locals: e, t, i, r, o, s, n
// closure: this, S, b, p, f
function {
  let n;
  let s;
  let o;
  let r;
  let i;
  let t;
  let e;
  if (!((this.scrollRef.single() == null))) goto L_65;
  this.scrollRef.single();
  goto L_a7;
  e = undefined.frame.width;
  if (!((this.minimumWidthRef.single() == null))) goto L_f8;
  this.minimumWidthRef.single();
  goto L_13a;
  t = undefined.frame.width;
  i = this.viewModel.packages.length;
  if (((undefined === e))) goto L_199;
  if (((undefined === t))) goto L_199;
  if (!((0 === i))) goto L_19c;
  return;
  r = this.labelRefs.all().reduce(function <atom:0>, 0);
  o = Math.max(t, (r + (2 * (S + 2))));
  s = (((e - (2 * b.OAISpacing.Four)) - ((i - 1) * b.OAISpacing.Two)) / i);
  if (!((s >= o))) goto L_2f0;
  goto L_327;
  // [栈深重同步 1 -> 0]
  n = Math.max(((t * p) / f), o);
  if (!((this.state.cardWidth === n))) goto L_39d;
  goto L_3cd;
  // [栈深重同步 1 -> 0]
  this.setState({cardWidth: n});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=1 bc=336B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSTierPicker
// locals: this, this.active_func, new.target, arguments
// closure: S, b, p, f, <class_fields_init>, m
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
  this.scrollRef = new m.ElementRef();
  this.rowRef = new m.ElementRef();
  this.cardRefs = new m.ElementRef();
  this.labelRefs = new m.ElementRef();
  this.minimumWidthRef = new m.ElementRef();
  this.handleLayoutComplete = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=165B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSTierPicker
// args: e
// locals: this
function {
  this = this;
  if (!((e == null))) goto L_b;
  e;
  goto L_2c;
  if (!((undefined.selectedPackageId !== this.viewModel.selectedPackageId))) goto L_a4;
  this.lastCenteredLayout = undefined;
  this.centerSelectedPackage();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSTierPicker
// args: e
// closure: this
function {
  return this.renderPackage(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=1 bc=1163B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSTierPicker
// locals: this
// closure: e, t, A, i, r, o
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", A.container);
  e.setAttributeFunction("onLayoutComplete", this.handleLayoutComplete);
  e.beginRender(i, undefined);
  e.setAttributeRef(this.minimumWidthRef);
  e.setAttributeStyle("style", A.minimumWidth);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeRef(this.scrollRef);
  e.setAttributeStyle("style", A.scroll);
  e.setAttribute("horizontal", true);
  e.setAttribute("showsHorizontalScrollIndicator", false);
  e.beginRender(o, undefined);
  e.setAttributeRef(this.rowRef);
  e.setAttributeStyle("style", A.row);
  this.viewModel.packages.map(function <atom:0>);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSTierPicker
// closure: this, t
function {
  return this.viewModel.onSelectPackage(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=677B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSTierPicker
// closure: e, l, A, c, this, i, b, t
function {
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", A.textMeasure);
  e.beginRender(c, undefined);
  e.setAttributeRef(this.labelRefs);
  e.setAttributeStyle("style", A.detail);
  if (!(i)) goto L_1bb;
  goto L_200;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("color", b.OAIColor.TextTertiary);
  e.setAttributeString("value", t.title);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=9 cpool=3 bc=2398B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSTierPicker
// args: t
// locals: i, r, o, this
// closure: e, l, A, c, b, s, n, d, a
function {
  this = this;
  let o;
  let r;
  let i;
  i = (t.id === this.viewModel.selectedPackageId);
  if ((this.viewModel.disabled)) goto L_dc;
  r = !t.isEnabled;
  if (!((undefined === t.billingPeriod))) goto L_127;
  goto L_195;
  // [栈深重同步 1 -> 0]
  o = "".concat(t.price, " ", t.billingPeriod);
  e.beginRender(s, t.id);
  e.setAttributeRef(this.cardRefs);
  e.setAttributeStyle("style", A.card);
  e.setAttributeNumber("width", this.state.cardWidth);
  e.setAttributeString("accessibilityId", "subscription-pricing-package-".concat(t.id));
  if (!((t.title.length > 0))) goto L_407;
  goto L_40a;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityLabel", o);
  e.setAttribute("accessibilityStateDisabled", r);
  e.setAttribute("accessibilityStateSelected", i);
  if (!(i)) goto L_4e3;
  goto L_528;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", b.OAIColor.BgPrimaryInverse);
  if (!(t.isEnabled)) goto L_57c;
  goto L_57e;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0.5);
  if (!(r)) goto L_5b3;
  goto L_5b5;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", function <atom:0>);
  if (!(i)) goto L_667;
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", A.selectedCardFill);
  e.endRender();
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", A.textMeasure);
  e.beginRender(a, undefined);
  e.setAttributeRef(this.labelRefs);
  e.setAttributeStyle("style", A.price);
  if (!(i)) goto L_821;
  goto L_866;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("color", b.OAIColor.TextSecondary);
  e.setAttributeString("value", t.price);
  e.endRender();
  e.endRender();
  if (!((t.title.length > 0))) goto L_935;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=7 closure=0 cpool=0 bc=1271B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSTierPicker
// locals: e, t, i, r, o, s, this
function {
  this = this;
  let s;
  let o;
  let r;
  let i;
  let t;
  let e;
  e = this.scrollRef.single();
  t = this.rowRef.single();
  i = this.viewModel.selectedPackageId;
  if (!((undefined === i))) goto L_f4;
  goto L_13e;
  // [栈深重同步 1 -> 0]
  r = this.cardRefs.getForKey(i);
  if (((undefined === e))) goto L_156;
  if (((undefined === t))) goto L_156;
  if (!((undefined === r))) goto L_159;
  return;
  o = "".concat(i, ":", r.frame.x, ":", r.frame.width, ":", t.frame.width, ":", e.frame.width);
  if (!((o === this.lastCenteredLayout))) goto L_2d5;
  return;
  this.lastCenteredLayout = o;
  s = Math.max(0, Math.min(((r.frame.x + (r.frame.width / 2)) - (e.frame.width / 2)), (t.frame.width - e.frame.width)));
  e.setAttribute("contentOffsetAnimated", false);
  e.setAttribute("contentOffsetX", s);
  return;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=5 bc=2458B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSTierPicker
// args: require, module, exports
// locals: e, t, i, r, o, s, n, d, a, l, c, u, b, h, m, g, y, f, p, S, R, SubscriptionPricingIOSTierPicker, <class_fields_init>, SubscriptionPricingIOSTierPicker#1, A
function {
  let A;
  let SubscriptionPricingIOSTierPicker#1;
  let R;
  let S;
  let p;
  let f;
  let y;
  let g;
  let m;
  let h;
  let b;
  let u;
  let c;
  let l;
  let a;
  let d;
  let n;
  let s;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscriptionPricingIOSTierPicker = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "yutFFRyVsUsJiM-u");
  i = e.makeNodePrototype("layout", undefined, "0rxhSKNorLZE5zAZ");
  r = e.makeNodePrototype("scroll", ["accessibilityId", "subscription-pricing-package-scroll"], "XJLGmBMA5jP_Hkxf");
  o = e.makeNodePrototype("view", ["accessibilityId", "subscription-pricing-packages"], "fvCuNrJ5IHRkawGH");
  s = e.makeNodePrototype("view", ["accessibilityCategory", "radio"], "gFIov6vmBpNRMjXr");
  n = e.makeNodePrototype("view", undefined, "lbk-tKJlNDYI069i");
  d = e.makeNodePrototype("layout", undefined, "PiTCAKz3pZPP0pU1");
  a = e.makeNodePrototype("label", undefined, "1jq94pk7p0WOqBfb");
  l = e.makeNodePrototype("layout", undefined, "V057W8QrIL4wsQtC");
  c = e.makeNodePrototype("label", undefined, "gIMWK0kf_spzQOQL");
  u = require("oai_core/src/OAIAttributes");
  b = require("oai_core/src/OAITokens");
  h = require("valdi_core/src/Component");
  m = require("valdi_core/src/ElementRef");
  g = require("valdi_core/src/Style");
  y = require("valdi_core/src/SystemFont");
  f = 98;
  p = 128;
  S = b.OAISpacing.OneAndHalf;
  R = 2;
  let SubscriptionPricingIOSTierPicker;
  let <class_fields_init>;
  class SubscriptionPricingIOSTierPicker extends h.StatefulComponent { ... }
  <proto:SubscriptionPricingIOSTierPicker>.onViewModelUpdate = function <atom:0>;
  <proto:SubscriptionPricingIOSTierPicker>.onRender = function <atom:0>;
  <proto:SubscriptionPricingIOSTierPicker>.renderPackage = function <atom:0>;
  <proto:SubscriptionPricingIOSTierPicker>.centerSelectedPackage = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscriptionPricingIOSTierPicker>;
  SubscriptionPricingIOSTierPicker = function <atom:0>;
  // close_loc <class_fields_init>
  SubscriptionPricingIOSTierPicker#1 = function <atom:0>;
  exports.SubscriptionPricingIOSTierPicker = SubscriptionPricingIOSTierPicker#1;
  A = {container: new g.Style({width: "100%"}), minimumWidth: new g.Style({position: "absolute", height: 0, width: u.remFromPoints(f)}), scroll: new g.Style({width: "100%"}), row: new g.Style({alignItems: "stretch", flexDirection: "row", gap: b.OAISpacing.Two, minWidth: "100%", paddingLeft: b.OAISpacing.Four, paddingRight: b.OAISpacing.Four}), card: new g.Style({alignItems: "center", borderRadius: b.OAIRadius.Xl, flexDirection: "column", flexShrink: 0, justifyContent: "center", minWidth: u.remFromPoints(f), paddingBottom: b.OAISpacing.Three, paddingLeft: S, paddingRight: S, paddingTop: b.OAISpacing.Three}), selectedCardFill: new g.Style({accessibilityNavigation: "ignored", backgroundColor: b.OAIColor.BgPrimary, borderRadius: (b.OAIRadius.Xl - 2), bottom: 2, left: 2, position: "absolute", right: 2, top: 2, touchEnabled: false}), textMeasure: new g.Style({flexDirection: "row", justifyContent: "center", overflow: "scroll"}), price: new g.Style({font: "".concat(y.systemSemiboldFont(17), " body"), numberOfLines: 1}), detail: new g.Style({font: "".concat(y.systemFont(13), " footnote"), numberOfLines: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingIOSTierPicker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
