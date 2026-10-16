// fn <atom:0>  args=0 vars=2 closure=8 cpool=0 bc=1062B file=chatgpt_subscription_pricing/src/SubscriptionPricingComparisonColumnWidth
// locals: n, this
// closure: u, e, i, d, t, r, o, l
function {
  this = this;
  let n;
  n = u.subscriptionPricingTextStyle(u.SubscriptionPricingTextRole.ComparisonHeading);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", d.widthMeasure);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", d.headingMeasure);
  if (!((n == null))) goto L_19e;
  n;
  goto L_1bf;
  e.setAttributeString("font", undefined.font);
  if (!((n == null))) goto L_1f7;
  n;
  goto L_218;
  e.setAttributeNumber("lineHeightMultiple", undefined.lineHeightMultiple);
  e.setAttributeString("value", this.viewModel.title);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", d.square);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", l.subscriptionPricingComparisonCellMeasureStyle);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_subscription_pricing/src/SubscriptionPricingComparisonColumnWidth
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

// fn <atom:0>  args=3 vars=16 closure=0 cpool=2 bc=707B file=chatgpt_subscription_pricing/src/SubscriptionPricingComparisonColumnWidth
// args: require, module, exports
// locals: e, i, t, r, o, n, s, l, u, SubscriptionPricingComparisonColumnWidth, <class_fields_init>, SubscriptionPricingComparisonColumnWidth#1, d
function {
  let d;
  let SubscriptionPricingComparisonColumnWidth#1;
  let u;
  let l;
  let s;
  let n;
  let o;
  let r;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscriptionPricingComparisonColumnWidth = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeNodePrototype("layout", undefined, "A5LjrmlCowgj1R_l");
  t = e.makeNodePrototype("label", undefined, "5tJRE7XHNumr3fof");
  r = e.makeNodePrototype("layout", undefined, "CYHzdDRi1onywEoZ");
  o = e.makeNodePrototype("label", ["value", "M"], "567MmV9AVXdcgxnG");
  n = require("valdi_core/src/Component");
  s = require("valdi_core/src/Style");
  l = require("./SubscriptionPricingComparisonMark");
  u = require("./SubscriptionPricingTypography");
  let SubscriptionPricingComparisonColumnWidth;
  let <class_fields_init>;
  class SubscriptionPricingComparisonColumnWidth extends n.Component { ... }
  <proto:SubscriptionPricingComparisonColumnWidth>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscriptionPricingComparisonColumnWidth>;
  SubscriptionPricingComparisonColumnWidth = function <atom:0>;
  // close_loc <class_fields_init>
  SubscriptionPricingComparisonColumnWidth#1 = function <atom:0>;
  exports.SubscriptionPricingComparisonColumnWidth = SubscriptionPricingComparisonColumnWidth#1;
  d = {widthMeasure: new s.Style({alignItems: "center", flexDirection: "column", flexShrink: 0, height: 0, overflow: "scroll"}), headingMeasure: new s.Style({accessibilityNavigation: "ignored", flexShrink: 0, numberOfLines: 1, opacity: 0, touchEnabled: false}), square: new s.Style({aspectRatio: 1, flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingComparisonColumnWidth
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
