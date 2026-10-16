// fn t  args=1 vars=4 closure=3 cpool=2 bc=1291B file=chatgpt_wallet_approval/src/WalletApprovalReview
// args: t
// locals: e, e#1, e#2
// closure: e, o, r
function {
  if (((1 !== t.version))) goto L_bd;
  if (!(!Object.values(e).includes(t.commitment.kind))) goto L_ce;
  throw new Error("Unsupported Wallet review contract");
  o(t.commitment.summary, 4000);
  r(t.commitment.details);
  if (((0 === t.priceBreakdown.length))) goto L_1ac;
  if (!((t.priceBreakdown.length > 30))) goto L_1bd;
  throw new Error("Invalid Wallet price breakdown");
  let e;
  for (const e of t.priceBreakdown) {
    o(e.label, 200);
    if (!(!new RegExp("^-?[0-9]+(?:\\.[0-9]{1,2})?$").test(e.amount))) continue;
    throw new Error("Invalid Wallet price amount");
  }
  let e#1;
  for (const e#1 of [t.sellerDetails, t.deliveryDetails, t.destinationDetails, t.productDetails, t.returnDetails]) {
    r(e#1);
  }
  if (!((undefined !== t.agreement))) goto L_484;
  o(t.agreement.title, 200);
  if (!((undefined !== t.agreement.subtitle))) goto L_43e;
  o(t.agreement.subtitle, 4000);
  r(t.agreement.details);
  if (!((t.blockingReasons == null))) goto L_4af;
  t.blockingReasons;
  goto L_4b0;
  if (!((undefined.length == null))) goto L_4b6;
  undefined.length;
  if (!((0 > 20))) goto L_4ca;
  throw new Error("Too many Wallet review blockers");
  let e#2;
  if (!((t.blockingReasons == null))) goto L_4f7;
  t.blockingReasons;
  for (const e#2 of []) {
    o(e#2, 1000);
  }
  return;
}

// fn r  args=1 vars=3 closure=1 cpool=2 bc=682B file=chatgpt_wallet_approval/src/WalletApprovalReview
// args: e
// locals: t, t#1
// closure: o
function {
  if (!((undefined !== e))) goto L_2a9;
  if (!((e.rows == null))) goto L_32;
  e.rows;
  goto L_33;
  if (!((undefined.length == null))) goto L_39;
  undefined.length;
  if (((0 > 30))) goto L_74;
  if (!((e.links == null))) goto L_6a;
  e.links;
  goto L_6b;
  if (!((undefined.length == null))) goto L_71;
  undefined.length;
  if (!((0 > 10))) goto L_85;
  throw new Error("Too many Wallet supporting details");
  let t;
  if (!((e.rows == null))) goto L_b2;
  e.rows;
  for (const t of []) {
    o(t.title, 200);
    if (!((undefined !== t.subtitle))) goto L_134;
    o(t.subtitle, 2000);
  }
  if (!((undefined !== e.text))) goto L_18d;
  o(e.text, 6000);
  let t#1;
  if (!((e.links == null))) goto L_1bb;
  e.links;
  for (const t#1 of []) {
    o(t#1.label, 200);
    if ((!new RegExp("^https?:\\/\\/[^\\s/@\\\\?#]+(?::[0-9]+)?(?:[/?#][^\\s\\\\]*)?$").test(t#1.url))) goto L_265;
    if (!((t#1.url.length > 2048))) goto L_276;
    throw new Error("Invalid Wallet detail link");
    o(t#1.url, 2048);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=123B file=chatgpt_wallet_approval/src/WalletApprovalReview
// args: e
// locals: t
function {
  let t;
  t = e.charCodeAt(0);
  if (!((t < 32))) goto L_44;
  if (!((9 !== t))) goto L_44;
  if (((10 !== t))) goto L_7a;
  if (((127 === t))) goto L_7a;
  if (!((t >= 8234))) goto L_64;
  if (((t <= 8238))) goto L_7a;
  if (!((t >= 8294))) goto L_7a;
  return (t <= 8297);
}

// fn o  args=2 vars=2 closure=0 cpool=1 bc=192B file=chatgpt_wallet_approval/src/WalletApprovalReview
// args: e, t
function {
  if ((!e.trim())) goto L_ae;
  if (((Array.from(e).length > t))) goto L_ae;
  if (!(Array.from(e).some(function <atom:0>))) goto L_bf;
  throw new Error("Invalid Wallet disclosure text");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=91B file=chatgpt_wallet_approval/src/WalletApprovalReview
// args: e
function {
  e.OneTime = "one_time";
  e.Subscription = "subscription";
  e.FreeTrial = "free_trial";
  e.Deposit = "deposit";
  e.PayLater = "pay_later";
  e.Installment = "installment";
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=121B file=chatgpt_wallet_approval/src/WalletApprovalReview
// args: require, module, exports
// locals: e, t, r, o
function {
  t = function t;
  r = function r;
  o = function o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletCommitmentKind = undefined;
  exports.validateWalletReview = undefined;
  if ((e)) goto L_6b;
  e = {};
  exports.WalletCommitmentKind = {};
  function <atom:0>({});
  exports.validateWalletReview = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_approval/src/WalletApprovalReview
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
