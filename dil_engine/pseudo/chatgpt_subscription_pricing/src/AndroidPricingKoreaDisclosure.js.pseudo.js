// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=chatgpt_subscription_pricing/src/AndroidPricingKoreaDisclosure
// args: e
// closure: n
function {
  return !n.has(e);
}

// fn y  args=1 vars=7 closure=4 cpool=3 bc=967B file=chatgpt_subscription_pricing/src/AndroidPricingKoreaDisclosure
// args: i
// locals: t, r, o, n, s, a
// closure: p, exports, g, e
function {
  let a;
  let s;
  let n;
  let o;
  let r;
  let t;
  t = p.default.subscriptionsKoreaPurchaseDisclosure();
  r = [];
  o = new RegExp("\\[([^\\]]+)\\]\\((korea_cancellation|korea_refund_policy|korea_terms_of_use)\\)");
  n = new Set();
  s = undefined;
  a = 0;
  s = o.exec(t);
  if (!((null !== o.exec(t)))) goto L_1e8;
  if (!((s.index > a))) goto L_151;
  r.push({text: t.slice(a, s.index)});
  r.push({text: s[1], legalDocumentId: s[2]});
  n.add(s[2]);
  a = o.lastIndex;
  o.lastIndex;
  goto L_75;
  if (!(!exports.KoreaLegalDocumentIds.some(function <atom:0>))) goto L_370;
  r.push({text: ((t.slice(a) + "

") + p.default.subscriptionsKoreaPurchaseDisclosureUnder19())});
  if (!((i == null))) goto L_2e6;
  i;
  goto L_32b;
  if (!(undefined.billingCyclePrice.trim())) goto L_365;
  r.unshift({text: (g(i) + " ")});
  return {runs: r};
  if (!(e.isLoggingEnabled)) goto L_3c6;
  console.warn("[AndroidPricing] Korea disclosure is missing a legal link.");
  return;
}

// fn g  args=1 vars=2 closure=2 cpool=0 bc=813B file=chatgpt_subscription_pricing/src/AndroidPricingKoreaDisclosure
// args: e
// locals: i
// closure: u, p
function {
  let i;
  i = e.billingCyclePrice;
  if (!((e.billingPeriod === u.PricingBillingPeriod.Daily))) goto L_dc;
  return p.default.subscriptionsKoreaRenewalDaily(i);   // tail call
  if (!((e.billingPeriod === u.PricingBillingPeriod.Weekly))) goto L_170;
  return p.default.subscriptionsKoreaRenewalWeekly(i);   // tail call
  if (!((e.billingPeriod === u.PricingBillingPeriod.Monthly))) goto L_204;
  return p.default.subscriptionsKoreaRenewalMonthly(i);   // tail call
  if (!((e.billingPeriod === u.PricingBillingPeriod.Annual))) goto L_298;
  return p.default.subscriptionsKoreaRenewalYearly(i);   // tail call
  if (!((e.billingPeriod === u.PricingBillingPeriod.Lifetime))) goto L_32c;
  return p.default.subscriptionsKoreaChargeLifetime(i);   // tail call
  e.billingPeriod;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_subscription_pricing/src/AndroidPricingKoreaDisclosure
// args: e
function {
  return e.text;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=42B file=chatgpt_subscription_pricing/src/AndroidPricingKoreaDisclosure
// closure: e, s
function {
  return e.openLegalDocument(s);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=5 cpool=1 bc=741B file=chatgpt_subscription_pricing/src/AndroidPricingKoreaDisclosure
// args: t, o
// locals: s, a
// closure: e, i, r, b, n
function {
  let a;
  let s;
  s = t.legalDocumentId;
  if (!((undefined === s))) goto L_31;
  return;
  a = e.isLinkEnabled(s);
  i.beginRender(r, "link-".concat(o));
  i.setAttributeStyle("style", b.link);
  i.setAttributeString("accessibilityId", "subscription-pricing-korea-link-".concat(s));
  i.setAttribute("accessibilityStateDisabled", !a);
  if (!(a)) goto L_1ee;
  if (!(e.isDarkMode)) goto L_1e7;
  goto L_233;
  // [栈深重同步 4 -> 3]
  goto L_233;
  // [栈深重同步 4 -> 3]
  i.setAttributeString("color", n.OAIColor.TextSecondary);
  if (!(a)) goto L_269;
  goto L_26a;
  // [栈深重同步 4 -> 3]
  i.setAttributeFunction("onTap", undefined);
  i.setAttributeString("value", t.text);
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=chatgpt_subscription_pricing/src/AndroidPricingKoreaDisclosure
// closure: e, exports
function {
  return e.openLegalDocument(exports.KoreaCompanyInformationId);   // tail call
}

// fn <atom:0>  args=0 vars=5 closure=10 cpool=3 bc=1636B file=chatgpt_subscription_pricing/src/AndroidPricingKoreaDisclosure
// locals: e, a, l, i, this
// closure: i, r, b, n, exports, d, t, s, o, p
function {
  this = this;
  let l;
  let a;
  let e;
  e = this.viewModel;
  a = [];
  l = new d.AttributedTextBuilder();
  let i;
  for (const i of e.richText.runs) {
    if (!((undefined === i.legalDocumentId))) goto L_11f;
    goto L_176;
    // [栈深重同步 4 -> 3]
    l.appendInlineView(a.length, 4);
    a.push(i);
  }
  i.beginRender(t, undefined);
  i.setAttributeString("accessibilityValue", e.richText.runs.map(function <atom:0>).join(""));
  i.setAttributeStyle("style", b.paragraph);
  i.setAttribute("value", l.build());
  a.map(function <atom:0>);
  i.endRender();
  if (!(e.showsCompanyInformation)) goto L_663;
  i.beginComponent(s.Button, o, undefined, undefined);
  i.setViewModelProperty("block", true);
  i.setViewModelProperty("disabled", !e.isLinkEnabled(exports.KoreaCompanyInformationId));
  i.setViewModelProperty("label", p.default.subscriptionsKoreaCompanyInformation());
  i.setViewModelProperty("labelStyle", b.companyLabel);
  i.setViewModelProperty("onPress", function <atom:0>);
  i.setViewModelProperty("style", b.company);
  i.setViewModelProperty("variant", s.ButtonVariant.Ghost);
  i.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_subscription_pricing/src/AndroidPricingKoreaDisclosure
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

// fn <atom:0>  args=3 vars=23 closure=0 cpool=6 bc=1222B file=chatgpt_subscription_pricing/src/AndroidPricingKoreaDisclosure
// args: require, module, exports
// locals: e, i, t, r, o, n, s, a, l, c, d, u, p, y, g, AndroidPricingKoreaDisclosure, <class_fields_init>, AndroidPricingKoreaDisclosure#1, m, b
function {
  y = function y;
  g = function g;
  let b;
  let m;
  let AndroidPricingKoreaDisclosure#1;
  let p;
  let u;
  let d;
  let c;
  let l;
  let a;
  let s;
  let n;
  let o;
  let r;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.KoreaLegalDocumentIds = undefined;
  exports.KoreaCompanyInformationId = undefined;
  exports.koreaDisclosureRichText = undefined;
  exports.AndroidPricingKoreaDisclosure = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("valdi_core/src/JSX").jsx;
  t = i.makeNodePrototype("label", undefined, "LDuTKvyEqadrOQIP");
  r = i.makeNodePrototype("label", undefined, "w4acfzC27NiL4LO-");
  o = i.makeComponentPrototype(["accessibilityId", "subscription-pricing-action-korea_company_information"], "j07qdcUdt9CHZj0w");
  n = require("oai_core/src/OAITokens");
  s = require("oai_ui/src/components/Button");
  a = require("valdi_core/src/Component");
  l = require("valdi_core/src/Style");
  c = require("valdi_core/src/SystemFont");
  d = require("valdi_core/src/utils/AttributedTextBuilder");
  u = require("./PricingHost");
  p = require("./Strings");
  exports.KoreaLegalDocumentIds = ["korea_cancellation", "korea_refund_policy", "korea_terms_of_use"];
  exports.KoreaCompanyInformationId = "korea_company_information";
  exports.koreaDisclosureRichText = y;
  let AndroidPricingKoreaDisclosure;
  let <class_fields_init>;
  class AndroidPricingKoreaDisclosure extends a.Component { ... }
  <proto:AndroidPricingKoreaDisclosure>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AndroidPricingKoreaDisclosure>;
  AndroidPricingKoreaDisclosure = function <atom:0>;
  // close_loc <class_fields_init>
  AndroidPricingKoreaDisclosure#1 = function <atom:0>;
  exports.AndroidPricingKoreaDisclosure = AndroidPricingKoreaDisclosure#1;
  m = new l.Style({font: c.systemFont(12), letterSpacing: 0.2, numberOfLines: 0});
  b = {paragraph: m.extend({accessibilityNavigation: "cover", color: n.OAIColor.TextSecondary, marginTop: 8, textAlign: "center", width: "100%"}), link: m.extend({accessibilityCategory: "link", accessibilityNavigation: "leaf", flexShrink: 1, maxWidth: "100%"}), company: new l.Style({minHeight: 48, width: "100%"}), companyLabel: new l.Style({color: n.OAIColor.TextSecondary, font: c.systemMediumFont(14), lineHeightMultiple: (20 / 14), letterSpacing: 0.2, numberOfLines: 0, textAlign: "center", textDecoration: "underline"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/AndroidPricingKoreaDisclosure
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
