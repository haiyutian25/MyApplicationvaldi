// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=733B file=chatgpt_subscription_pricing/src/SubscriptionPricingDismissButton
// closure: e, i, u, o, r, y, n, s
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", u.glyph);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", u.measure);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", u.shape);
  e.setAttribute("path", y);
  if (!(n)) goto L_244;
  goto L_289;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("fillColor", s.OAIColor.IconPrimary);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=10 cpool=2 bc=1193B file=chatgpt_subscription_pricing/src/SubscriptionPricingDismissButton
// locals: n, this
// closure: e, i, u, o, r, y, s, c, t, a
function {
  this = this;
  let n;
  n = this.viewModel.disabled;
  e.beginComponent(c.IconButton, t, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.accessibilityLabel);
  if (!(n)) goto L_180;
  goto L_24f;
  // [栈深重同步 4 -> 3]
  if (!((this.viewModel.style.attributes.backgroundColor == null))) goto L_24f;
  this.viewModel.style.attributes.backgroundColor;
  e.setViewModelProperty("backgroundColor", s.OAIColor.BgPrimaryInverse);
  e.setViewModelProperty("disabled", n);
  e.setViewModelProperty("onPress", this.viewModel.onPress);
  if (!(n)) goto L_325;
  goto L_326;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("opacity", undefined);
  e.setViewModelProperty("pressedStyle", u.pressed);
  e.setViewModelProperty("style", a.Style.cachingMerge(u.button, this.viewModel.style));
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_subscription_pricing/src/SubscriptionPricingDismissButton
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

// fn <atom:0>  args=3 vars=19 closure=0 cpool=36 bc=1982B file=chatgpt_subscription_pricing/src/SubscriptionPricingDismissButton
// args: require, module, exports
// locals: e, t, i, o, r, s, n, l, a, d, c, SubscriptionPricingDismissButton, <class_fields_init>, SubscriptionPricingDismissButton#1, u, y
function {
  let y;
  let u;
  let SubscriptionPricingDismissButton#1;
  let c;
  let d;
  let a;
  let l;
  let n;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscriptionPricingDismissButton = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(["accessibilityId", "subscription-pricing-dismiss"], "p2sO0zy0aykzVJsq");
  i = e.makeNodePrototype("layout", undefined, "hXr5wGQh4PYJjCcp");
  o = e.makeNodePrototype("label", ["value", "M"], "_ZtfrVQJjPGYKurc");
  r = e.makeNodePrototype("shape", undefined, "fRoUuN0LUZj_4Cax");
  s = require("oai_core/src/OAITokens");
  n = require("valdi_core/src/Component");
  l = require("valdi_core/src/GeometricPath");
  a = require("valdi_core/src/Style");
  d = require("valdi_core/src/SystemFont");
  c = require("valdi_ui/src/components/IconButton");
  let SubscriptionPricingDismissButton;
  let <class_fields_init>;
  class SubscriptionPricingDismissButton extends n.Component { ... }
  <proto:SubscriptionPricingDismissButton>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscriptionPricingDismissButton>;
  SubscriptionPricingDismissButton = function <atom:0>;
  // close_loc <class_fields_init>
  SubscriptionPricingDismissButton#1 = function <atom:0>;
  exports.SubscriptionPricingDismissButton = SubscriptionPricingDismissButton#1;
  u = {button: new a.Style({alignItems: "center", borderRadius: s.OAIRadius.Pill, height: "auto", justifyContent: "center", minHeight: s.OAISpacing.FivePointFive, minWidth: s.OAISpacing.FivePointFive, width: "auto"}), pressed: new a.Style({backgroundColor: s.OAIColor.BgSecondary}), glyph: new a.Style({aspectRatio: 1, flexShrink: 0}), measure: new a.Style({accessibilityNavigation: "ignored", font: "".concat(d.systemFont(18), " body"), lineHeightMultiple: (24 / 18), numberOfLines: 1, opacity: 0, touchEnabled: false}), shape: new a.Style({accessibilityNavigation: "ignored", height: "100%", left: 0, position: "absolute", top: 0, touchEnabled: false, width: "100%"})};
  y = new l.GeometricPathBuilder(24, 24).moveTo(5.636, 5.636).arcTo(6.343, 6.34321354625, 1, -2.35604349019, 1.57049432679).lineTo(12, 10.586).lineTo(16.95, 5.636).arcTo(17.644711794273, 6.355288205727, 1, -2.338815468176, 3.106834609558).lineTo(13.414, 12).lineTo(18.364, 16.95).arcTo(17.644711794273, 17.644711794273, 1, -0.768019141382, 3.106834609558).lineTo(12, 13.414).lineTo(7.05, 18.364).arcTo(6.355288205727, 17.644711794273, 1, 0.802777185413, 3.106834609558).lineTo(10.586, 12).lineTo(5.636, 7.05).arcTo(6.34321354625, 6.343, 1, 2.356345490195, 1.57049432679).close().build();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingDismissButton
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
