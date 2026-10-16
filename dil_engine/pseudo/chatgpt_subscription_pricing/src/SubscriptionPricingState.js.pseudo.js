// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: n
// closure: i
function {
  return (n.id === i.selectedPlanId);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: i
function {
  return i.isEnabled;
}

// fn n  args=1 vars=2 closure=0 cpool=2 bc=239B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: i
// locals: n
function {
  if (!((undefined !== i.selectedPlanId))) goto L_7d;
  let n;
  n = i.plans.find(function <atom:0>);
  if (!((undefined !== n))) goto L_7d;
  return n;
  if (!((i.plans.find(function <atom:0>) == null))) goto L_ee;
  i.plans.find(function <atom:0>);
  return i.plans[0];
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: i
// closure: n
function {
  return (i.id === n);
}

// fn r  args=2 vars=2 closure=0 cpool=1 bc=83B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: i, n
function {
  if (!((undefined !== i))) goto L_52;
  if (!((undefined !== n))) goto L_52;
  return i.packages.find(function <atom:0>);   // tail call
  return;
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=8B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: i
function {
  // append([], 0, i)
  i;
  return [];
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=213B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: n
// closure: i
function {
  if (((n.kind === i.SubscriptionPricingActionKind.Purchase))) goto L_d4;
  return (n.kind === i.SubscriptionPricingActionKind.OpenExternalCheckout);
}

// fn c  args=1 vars=1 closure=1 cpool=1 bc=39B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: n
// closure: i
function {
  return n.find(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=367B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: n
// closure: r, i
function {
  if (!((n.id !== r))) goto L_16e;
  if (((n.kind === i.SubscriptionPricingActionKind.Purchase))) goto L_16e;
  if (((n.kind === i.SubscriptionPricingActionKind.OpenExternalCheckout))) goto L_16e;
  return (n.kind === i.SubscriptionPricingActionKind.OpenLegal);
}

// fn e  args=2 vars=2 closure=1 cpool=1 bc=39B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: n, r
// closure: i
function {
  return n.filter(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=213B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: n
// closure: i
function {
  if (((n.kind === i.SubscriptionPricingActionKind.Purchase))) goto L_d4;
  return (n.kind === i.SubscriptionPricingActionKind.OpenExternalCheckout);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: n
// closure: i
function {
  return (n.kind === i.SubscriptionPricingActionKind.OpenLegal);
}

// fn o  args=2 vars=5 closure=1 cpool=2 bc=217B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: n, r
// locals: t, c, e
// closure: i
function {
  let e;
  let c;
  let t;
  t = n.filter(function <atom:0>);
  c = n.filter(function <atom:0>);
  e = c[0];
  if (!((undefined !== e))) goto L_d2;
  if (!((r == null))) goto L_82;
  r;
  goto L_ca;
  if (!((true === undefined.includes(e.title)))) goto L_d2;
  goto L_d3;
  // [栈深重同步 2 -> 1]
  return {checkout: t, legal: c, inlineLegal: undefined};
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=6 bc=224B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// args: require, module, exports
// locals: i, n, r, t, c, e, o
function {
  n = function n;
  r = function r;
  t = function t;
  c = function c;
  e = function e;
  o = function o;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.selectedSubscriptionPricingPlan = undefined;
  exports.selectedSubscriptionPricingPackage = undefined;
  exports.availableSubscriptionPricingActions = undefined;
  exports.primarySubscriptionPricingAction = undefined;
  exports.secondarySubscriptionPricingActions = undefined;
  exports.subscriptionPricingFooterActions = undefined;
  i = require("./SubscriptionPricingModels");
  exports.selectedSubscriptionPricingPlan = n;
  exports.selectedSubscriptionPricingPackage = r;
  exports.availableSubscriptionPricingActions = t;
  exports.primarySubscriptionPricingAction = c;
  exports.secondarySubscriptionPricingActions = e;
  exports.subscriptionPricingFooterActions = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
