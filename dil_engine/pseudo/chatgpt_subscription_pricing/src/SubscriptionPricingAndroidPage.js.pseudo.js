// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=62B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidPage
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
  this.state = {};
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=8B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidPage
// args: e
function {
  return e(3, undefined, undefined, undefined);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=1 bc=14B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidPage
function {
  return {subscribe: function <atom:0>};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidPage
// args: e
// closure: this
function {
  return this.setState({nativeState: e});   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=2 bc=473B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidPage
// locals: e, this
// closure: r, s, c
function {
  this = this;
  let e;
  if (!((undefined !== this.viewModel.androidRefresh))) goto L_4f;
  goto L_bf;
  // [栈深重同步 1 -> 0]
  if (!((r.subscriptionPricingPlatformServices(this.context) == null))) goto L_9e;
  r.subscriptionPricingPlatformServices(this.context);
  goto L_bf;
  e = undefined.experimentService;
  if (!((undefined === e))) goto L_cb;
  goto L_f6;
  // [栈深重同步 2 -> 1]
  this.experiments = new s.SubscriptionPricingAndroidPresentationExperiments(e);
  null;
  this.context;
  this.childContext = {presentationExperiments: this.experiments, stateProvider: {observeState: function <atom:0>}};
  this.registerDisposable(c.subscribeToSubscriptionPricingState(this.context, function <atom:0>));
  return;
}

// fn <atom:0>  args=0 vars=4 closure=7 cpool=0 bc=1309B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidPage
// locals: n, r, c, this
// closure: e, d, i, s, p, t, o
function {
  this = this;
  let c;
  let r;
  let n;
  if (!((this.state.nativeState == null))) goto L_75;
  this.state.nativeState;
  n = this.viewModel;
  if (!((undefined !== n.androidRefresh))) goto L_1bb;
  e.beginComponent(d.SubscriptionPricingPage, i, undefined, undefined);
  if ((e.hasContext())) goto L_166;
  e.setContext(this.childContext);
  e.setViewModelProperties(n);
  e.endComponent();
  return;
  if (!((n.strings.androidPresentationCopy == null))) goto L_209;
  n.strings.androidPresentationCopy;
  goto L_22a;
  if (!((undefined !== undefined.work))) goto L_287;
  if (!((this.experiments == null))) goto L_259;
  this.experiments;
  goto L_280;
  if (!((undefined.usesWorkPricing(n) == null))) goto L_287;
  undefined.usesWorkPricing(n);
  r = false;
  c = s.androidPricingState(n, r, this.experiments);
  if (!(r)) goto L_404;
  e.beginComponent(p.WorkPricingPage, t, undefined, undefined);
  if ((e.hasContext())) goto L_3a9;
  e.setContext({pricing: this.childContext});
  e.setViewModelProperty("nativeState", c);
  goto L_51c;
  // [栈深重同步 1 -> 0]
  e.beginComponent(d.SubscriptionPricingPage, o, undefined, undefined);
  if ((e.hasContext())) goto L_4c9;
  e.setContext(this.childContext);
  e.setViewModelProperties(c);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=3 bc=424B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidPage
// args: require, module, exports
// locals: e, i, t, o, n, r, s, d, c, p, SubscriptionPricingAndroidPage, <class_fields_init>, SubscriptionPricingAndroidPage#1
function {
  let SubscriptionPricingAndroidPage#1;
  let p;
  let c;
  let d;
  let s;
  let r;
  let n;
  let o;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscriptionPricingAndroidPage = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeComponentPrototype(undefined, "RzUFfWU_oGji6bKM");
  t = e.makeComponentPrototype(undefined, "Wxc8u3RyPY3fkQXw");
  o = e.makeComponentPrototype(undefined, "xwiLYM0mK6gEqurO");
  n = require("valdi_core/src/Component");
  r = require("./SubscriptionPricingCapabilities");
  s = require("./SubscriptionPricingOverrides");
  d = require("./SubscriptionPricingPage");
  c = require("./SubscriptionPricingProjection");
  p = require("./WorkPricingPage");
  let SubscriptionPricingAndroidPage;
  let <class_fields_init>;
  class SubscriptionPricingAndroidPage extends n.StatefulComponent { ... }
  <proto:SubscriptionPricingAndroidPage>.onCreate = function <atom:0>;
  <proto:SubscriptionPricingAndroidPage>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscriptionPricingAndroidPage>;
  SubscriptionPricingAndroidPage = function <atom:0>;
  // close_loc <class_fields_init>
  SubscriptionPricingAndroidPage#1 = function <atom:0>;
  exports.SubscriptionPricingAndroidPage = SubscriptionPricingAndroidPage#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingAndroidPage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
