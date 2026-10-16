// fn <atom:0>  args=0 vars=2 closure=12 cpool=0 bc=1671B file=chatgpt_subscription_pricing/src/SubscriptionPricingComparisonMark
// locals: l, this
// closure: d, e, t, b, i, exports, o, r, n, s, y, p
function {
  this = this;
  let l;
  if (!(d.supportsSemanticFontResolution())) goto L_bf;
  goto L_110;
  // [栈深重同步 1 -> 0]
  l = "".concat(d.systemFont(17), " body");
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", b.square);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", exports.subscriptionPricingComparisonCellMeasureStyle);
  e.endRender();
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", b.centeredLayer);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", b.square);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", b.glyphMeasure);
  e.setAttributeString("font", l);
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", b.mark);
  if (!(this.viewModel.isIncluded)) goto L_4f4;
  goto L_4f9;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityLabel", "−");
  e.setAttributeString("fillColor", this.viewModel.color);
  if (!(this.viewModel.isIncluded)) goto L_5e0;
  goto L_5e3;
  // [栈深重同步 4 -> 3]
  e.setAttribute("path", p);
  e.endRender();
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_subscription_pricing/src/SubscriptionPricingComparisonMark
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

// fn <atom:0>  args=3 vars=21 closure=0 cpool=56 bc=2177B file=chatgpt_subscription_pricing/src/SubscriptionPricingComparisonMark
// args: require, module, exports
// locals: e, t, i, o, r, n, s, l, c, a, d, SubscriptionPricingComparisonMark, <class_fields_init>, SubscriptionPricingComparisonMark#1, u, b, y, p
function {
  let p;
  let y;
  let b;
  let u;
  let SubscriptionPricingComparisonMark#1;
  let d;
  let a;
  let c;
  let l;
  let s;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscriptionPricingComparisonMark = undefined;
  exports.subscriptionPricingComparisonCellMeasureStyle = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "7vZaTJK3U4_g8HX3");
  i = e.makeNodePrototype("label", ["value", "M"], "-BiZqAzVAbHwoh7v");
  o = e.makeNodePrototype("layout", undefined, "_QmbY7NsE8_sGyVq");
  r = e.makeNodePrototype("layout", undefined, "cRpN7WY12070aEOw");
  n = e.makeNodePrototype("label", ["value", "M"], "xdrpn1Eudngi9Z7x");
  s = e.makeNodePrototype("shape", undefined, "WbI3qu_aT6rOrfLj");
  l = require("valdi_core/src/Component");
  c = require("valdi_core/src/GeometricPath");
  a = require("valdi_core/src/Style");
  d = require("valdi_core/src/SystemFont");
  let SubscriptionPricingComparisonMark;
  let <class_fields_init>;
  class SubscriptionPricingComparisonMark extends l.Component { ... }
  <proto:SubscriptionPricingComparisonMark>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscriptionPricingComparisonMark>;
  SubscriptionPricingComparisonMark = function <atom:0>;
  // close_loc <class_fields_init>
  SubscriptionPricingComparisonMark#1 = function <atom:0>;
  exports.SubscriptionPricingComparisonMark = SubscriptionPricingComparisonMark#1;
  u = new a.Style({accessibilityNavigation: "ignored", numberOfLines: 1, opacity: 0, touchEnabled: false});
  exports.subscriptionPricingComparisonCellMeasureStyle = u.extend({font: "".concat(d.systemFont(32), " callout"), lineHeightMultiple: 1});
  b = {square: new a.Style({aspectRatio: 1, flexShrink: 0}), glyphMeasure: u.extend({lineHeightMultiple: (22 / 17)}), centeredLayer: new a.Style({alignItems: "center", bottom: 0, justifyContent: "center", left: 0, position: "absolute", right: 0, top: 0}), mark: new a.Style({accessibilityCategory: "image", height: "100%", left: 0, position: "absolute", top: 0, width: "100%"})};
  y = new c.GeometricPathBuilder(24, 24).moveTo(20.3215, 4.17948).cubicTo(20.7747, 4.49511, 20.8862, 5.11837, 20.5706, 5.57158).lineTo(10.8206, 19.5716).cubicTo(10.6514, 19.8145, 10.3833, 19.97, 10.0884, 19.9962).cubicTo(9.79354, 20.0223, 9.50222, 19.9165, 9.29289, 19.7072).lineTo(3.54289, 13.9572).cubicTo(3.15237, 13.5667, 3.15237, 12.9335, 3.54289, 12.543).cubicTo(3.93342, 12.1525, 4.56658, 12.1525, 4.95711, 12.543).lineTo(9.86223, 17.4481).lineTo(18.9294, 4.42859).cubicTo(19.245, 3.97539, 19.8683, 3.86385, 20.3215, 4.17948).close().build();
  p = new c.GeometricPathBuilder(24, 24).moveTo(6, 12).cubicTo(6, 11.4477, 6.44772, 11, 7, 11).lineTo(17, 11).cubicTo(17.5523, 11, 18, 11.4477, 18, 12).cubicTo(18, 12.5523, 17.5523, 13, 17, 13).lineTo(7, 13).cubicTo(6.44772, 13, 6, 12.5523, 6, 12).close().build();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingComparisonMark
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
