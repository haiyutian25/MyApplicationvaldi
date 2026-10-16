// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=76B file=chatgpt_subscription_pricing/src/SubscriptionPricingRuntimeOffers
// args: i
function {
  i.Go = "go";
  i.Plus = "plus";
  i.ProLite = "prolite";
  i.Pro = "pro";
  i.ProMax = "promax";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingRuntimeOffers
// args: i
// closure: r
function {
  return (i === r);
}

// fn t  args=1 vars=1 closure=1 cpool=1 bc=80B file=chatgpt_subscription_pricing/src/SubscriptionPricingRuntimeOffers
// args: r
// closure: i
function {
  return Object.values(i).find(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=82B file=chatgpt_subscription_pricing/src/SubscriptionPricingRuntimeOffers
// args: i
// closure: r, t
function {
  if (!((i.id === r[t]))) goto L_51;
  return (true === i.eplEnabled);
}

// fn o  args=2 vars=2 closure=1 cpool=1 bc=180B file=chatgpt_subscription_pricing/src/SubscriptionPricingRuntimeOffers
// args: i, t
// closure: r
function {
  if (!((undefined !== i))) goto L_b3;
  if (!((undefined !== t))) goto L_b3;
  if (!((i.eligiblePurchasePlatforms == null))) goto L_3c;
  i.eligiblePurchasePlatforms;
  goto L_65;
  if (!((true === undefined.includes("chatgpt_web")))) goto L_b2;
  return i.offers.some(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=350B file=chatgpt_subscription_pricing/src/SubscriptionPricingRuntimeOffers
// args: require, module, exports
// locals: i, r, t, o
function {
  t = function t;
  o = function o;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscriptionPricingPlanType = undefined;
  exports.subscriptionPricingPlanType = undefined;
  exports.subscriptionPricingPlanExternalPurchaseLinkEligibility = undefined;
  if ((i)) goto L_76;
  i = {};
  exports.SubscriptionPricingPlanType = {};
  function <atom:0>({});
  {}[i.Go] = "chatgptgoplan";
  "chatgptgoplan";
  {}[i.Plus] = "chatgptplusplan";
  "chatgptplusplan";
  {}[i.ProLite] = "chatgptprolite";
  "chatgptprolite";
  {}[i.Pro] = "chatgptpro";
  "chatgptpro";
  {}[i.ProMax] = "chatgptpromax";
  "chatgptpromax";
  r = {};
  exports.subscriptionPricingPlanType = t;
  exports.subscriptionPricingPlanExternalPurchaseLinkEligibility = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_subscription_pricing/src/SubscriptionPricingRuntimeOffers
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
