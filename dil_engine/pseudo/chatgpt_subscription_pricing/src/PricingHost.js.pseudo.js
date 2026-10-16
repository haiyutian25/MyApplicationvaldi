// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=chatgpt_subscription_pricing/src/PricingHost
// args: e
function {
  e.Daily = 0;
  e[0] = "Daily";
  e.Weekly = 1;
  e[1] = "Weekly";
  e.Monthly = 2;
  e[2] = "Monthly";
  e.Annual = 3;
  e[3] = "Annual";
  e.Lifetime = 4;
  e[4] = "Lifetime";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_subscription_pricing/src/PricingHost
// args: i
// closure: e
function {
  return e.selectPlan(i);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_subscription_pricing/src/PricingHost
// args: i
// closure: e
function {
  return e.selectPackage(i);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=41B file=chatgpt_subscription_pricing/src/PricingHost
// args: i, r
// closure: e
function {
  return e.purchase(i, r);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=15B file=chatgpt_subscription_pricing/src/PricingHost
function {
  throw new Error("Android pricing does not expose browser checkout.");
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=41B file=chatgpt_subscription_pricing/src/PricingHost
// args: i, r
// closure: e
function {
  return e.openLegalDocument(i, r);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_subscription_pricing/src/PricingHost
// closure: e
function {
  return e.dismiss();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_subscription_pricing/src/PricingHost
// args: i
// closure: e
function {
  return e.restorePurchases(i);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=chatgpt_subscription_pricing/src/PricingHost
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_subscription_pricing/src/PricingHost
// closure: a
function {
  return a.default.subscriptionsPlusAdvancedImageCreation();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/PricingHost
// closure: c
function {
  return c.SubscriptionPricingNativeCheckoutTreatment.InAppPurchasePrimary;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=chatgpt_subscription_pricing/src/PricingHost
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=8B file=chatgpt_subscription_pricing/src/PricingHost
function {
  return {title: ""};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=8B file=chatgpt_subscription_pricing/src/PricingHost
// args: e
function {
  return e(3, undefined, undefined, undefined);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=1 bc=14B file=chatgpt_subscription_pricing/src/PricingHost
function {
  return {subscribe: function <atom:0>};
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=13 bc=563B file=chatgpt_subscription_pricing/src/PricingHost
// locals: e, this
// closure: a, c, n, l
function {
  this = this;
  let e;
  e = this.context.host;
  this.presentation = new n.AndroidSubscriptionPricingPresentation(this.context.platformServices.experimentService);
  this.pricingContext = {openComparePlans: l.subscriptionPricingOpenComparePlans(this.context), host: {selectPlan: function <atom:0>, selectPackage: function <atom:0>, purchaseWithApple: function <atom:0>, purchaseOnWeb: function <atom:0>, openLegalDocument: function <atom:0>, dismiss: function <atom:0>}, restoreHost: {restorePurchases: function <atom:0>}, experiments: {noAdsEnabled: function <atom:0>, imageCreationTitle: function <atom:0>, checkoutLayout: function <atom:0>, prefersWebPurchase: function <atom:0>, webPurchaseCopy: function <atom:0>}, platformServices: this.context.platformServices, stateProvider: {observeState: function <atom:0>}};
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=chatgpt_subscription_pricing/src/PricingHost
// closure: e
function {
  return e;
}

// fn <atom:0>  args=0 vars=5 closure=6 cpool=1 bc=821B file=chatgpt_subscription_pricing/src/PricingHost
// locals: r, n, e, c, this
// closure: t, o, a, e, s, i
function {
  this = this;
  let c;
  let n;
  let r;
  r = this.viewModel;
  n = r.locales.join(",");
  if (!((this.localeTags !== n))) goto L_1d0;
  let e;
  if (!((0 === r.locales.length))) goto L_e0;
  goto L_104;
  // [栈深重同步 1 -> 0]
  e = r.locales.map(t.Locale.parse);
  o.overrideLocales(a.default, function <atom:0>, "en");
  this.localeTags = n;
  // close_loc e
  c = this.presentation.project(r);
  e.beginComponent(s.SubscriptionPricingAndroidPage, i, undefined, undefined);
  if ((e.hasContext())) goto L_2e1;
  e.setContext(this.pricingContext);
  e.setViewModelProperties(c);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_subscription_pricing/src/PricingHost
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

// fn <atom:0>  args=3 vars=17 closure=0 cpool=4 bc=384B file=chatgpt_subscription_pricing/src/PricingHost
// args: require, module, exports
// locals: e, i, r, o, t, n, s, c, a, l, p, AndroidSubscriptionPricingPage, <class_fields_init>, AndroidSubscriptionPricingPage#1
function {
  let AndroidSubscriptionPricingPage#1;
  let l;
  let a;
  let c;
  let s;
  let n;
  let t;
  let o;
  let r;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PricingBillingPeriod = undefined;
  exports.AndroidSubscriptionPricingPage = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeComponentPrototype(undefined, "xTdNfHy4ZAxno-UT");
  r = require("valdi_core/src/Component");
  o = require("valdi_core/src/LocalizableStrings");
  t = require("valdi_core/src/localization/Locale");
  n = require("./AndroidSubscriptionPricingPresentation");
  s = require("./SubscriptionPricingAndroidPage");
  c = require("./SubscriptionPricingNativeState");
  a = require("./Strings");
  l = require("./SubscriptionPricingCapabilities");
  if ((p)) goto L_122;
  p = {};
  exports.PricingBillingPeriod = {};
  !function <atom:0>({});
  let AndroidSubscriptionPricingPage;
  let <class_fields_init>;
  class AndroidSubscriptionPricingPage extends r.Component { ... }
  <proto:AndroidSubscriptionPricingPage>.onCreate = function <atom:0>;
  <proto:AndroidSubscriptionPricingPage>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AndroidSubscriptionPricingPage>;
  AndroidSubscriptionPricingPage = function <atom:0>;
  // close_loc <class_fields_init>
  AndroidSubscriptionPricingPage#1 = function <atom:0>;
  exports.AndroidSubscriptionPricingPage = AndroidSubscriptionPricingPage#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/PricingHost
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
