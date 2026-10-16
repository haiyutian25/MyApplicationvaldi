// fn h  args=1 vars=5 closure=9 cpool=0 bc=989B file=chatgpt_wallet_approval/src/WalletApprovalElicitation
// args: n
// locals: e, m, l, r
// closure: i, a, c, t, S, J, s, o, e
function {
  try { // catch -> L_37a
  let r;
  let l;
  let m;
  let e;
  e = JSON.parse(n);
  m = i.decode(e).mode;
  l = undefined;
  if (!(("openai/userVerification" === m))) goto L_c7;
  l = a.decode(e);
  a.decode(e);
  goto L_148;
  if (!(("form" !== m))) goto L_d7;
  return c;
  l = t.decode(e).metadata.verification;
  t.decode(e).metadata.verification;
  if (!((undefined !== l.mode))) goto L_19c;
  if ((("openai/userVerification" !== l.mode))) goto L_1eb;
  if (!((0 === l.challenge.trim().length))) goto L_1f2;
  return c;
  if (!((l.metadata == null))) goto L_221;
  l.metadata;
  goto L_242;
  r = S(undefined.transaction);
  if (!((undefined === r))) goto L_250;
  return c;
  if (!((undefined !== r.review))) goto L_368;
  if (!(("form" === m))) goto L_2fa;
  goto L_324;
  // [栈深重同步 3 -> 2]
  J(r, o.decode(e).metadata.transaction);
  return {transaction: r, valid: true};
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_3dc
  if (!(e.isLoggingEnabled)) goto L_3d6;
  console.warn("Unable to decode Wallet approval elicitation.");
  return c;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn S  args=1 vars=7 closure=5 cpool=4 bc=1430B file=chatgpt_wallet_approval/src/WalletApprovalElicitation
// args: e
// locals: n, i, a, t, e#1, n#1
// closure: u, k, j, N, p
function {
  let a;
  let i;
  let n;
  if (!((undefined === e))) goto L_f;
  return;
  n = u(e.merchant, 120);
  i = u(e.shippingAddressSummary, 200);
  a = [];
  let t;
  if (!((e.additionalDisclosures == null))) goto L_8f;
  e.additionalDisclosures;
  for (const t of []) {
    let n#1;
    let e#1;
    e#1 = u(t.title, 200);
    n#1 = u(t.subtitle, 2000);
    if (((undefined === e#1))) goto L_126;
    if (!((undefined !== t.subtitle))) goto L_12e;
    if (!((undefined === n#1))) goto L_12e;
    return undefined;
    // [栈深重同步 0 -> 3]
    a.push({title: e#1, subtitle: n#1});
  }
  if (((undefined === n))) goto L_2fb;
  if ((!new RegExp("^[0-9]+(?:\\.[0-9]{1,2})?$").test(e.amount))) goto L_2fb;
  if ((!Number.isFinite(Number(e.amount)))) goto L_2fb;
  if (((Number(e.amount) < 0))) goto L_2fb;
  if (!((0 === Number(e.amount)))) goto L_2ab;
  if (((undefined === e.review))) goto L_2fb;
  if (!(!new RegExp("^[A-Za-z]{3}$").test(e.currency))) goto L_2ff;
  return undefined;
  if (!((undefined === i))) goto L_454;
  goto L_45d;
  // [栈深重同步 2 -> 1]
  null;
  {shippingAddressSummary: i};
  if (!((undefined === e.review))) goto L_531;
  goto L_559;
  // [栈深重同步 2 -> 1]
  null;
  {review: e.review};
  if (!((undefined === e.additionalDisclosures))) goto L_587;
  goto L_590;
  // [栈深重同步 2 -> 1]
  null;
  {additionalDisclosures: a};
  return {merchant: n, amount: e.amount, currency: e.currency.toUpperCase(), cartLineItems: k(e.cartLineItems), sellerName: u(e.sellerName, 120), isRecurring: e.isRecurring, condition: j(e.condition), shippingAddress: u(e.shippingAddress, 512), shipping: j(e.shipping), returns: j(e.returns), paymentMethod: N(e.paymentMethod), termsAndConditionsUrl: p(e.termsAndConditionsUrl)};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=87B file=chatgpt_wallet_approval/src/WalletApprovalElicitation
// args: e
function {
  if (((e.charCodeAt(0) < 32))) goto L_56;
  return (127 === e.charCodeAt(0));
}

// fn p  args=1 vars=3 closure=1 cpool=3 bc=313B file=chatgpt_wallet_approval/src/WalletApprovalElicitation
// args: e
// locals: n, i
// closure: m
function {
  let i;
  let n;
  if (!((e == null))) goto L_f;
  e;
  goto L_33;
  n = undefined.trim();
  if ((!n)) goto L_d0;
  if (((n.length > 2048))) goto L_d0;
  if ((new RegExp("[\\s\\\\]").test(n))) goto L_d0;
  if (!(Array.from(n).some(function <atom:0>))) goto L_d3;
  return;
  i = m.hostnameFromUrl(n);
  if (!((i.length > 0))) goto L_137;
  if (!(!i.includes("@"))) goto L_137;
  return n;
  return undefined;
}

// fn k  args=1 vars=5 closure=1 cpool=0 bc=438B file=chatgpt_wallet_approval/src/WalletApprovalElicitation
// args: e
// locals: n, i, e#1, a
// closure: u
function {
  let n;
  if (((undefined === e))) goto L_17;
  if (((0 === e.length))) goto L_17;
  if (!((e.length > 50))) goto L_1a;
  return;
  n = [];
  let i;
  for (const i of e) {
    let a;
    let e#1;
    e#1 = u(i.name, 200);
    a = u(i.displayName, 120);
    if (((undefined === e#1))) goto L_12f;
    if (!((undefined !== i.quantity))) goto L_137;
    if ((!Number.isFinite(i.quantity))) goto L_12f;
    if (!((i.quantity <= 0))) goto L_137;
    return undefined;
    // [栈深重同步 0 -> 3]
    if (!((undefined === a))) goto L_16e;
    goto L_177;
    // [栈深重同步 7 -> 6]
    null;
    {displayName: a};
    n.push({name: e#1, quantity: i.quantity});
  }
  return n;
}

// fn j  args=1 vars=2 closure=1 cpool=0 bc=112B file=chatgpt_wallet_approval/src/WalletApprovalElicitation
// args: e
// locals: n
// closure: u
function {
  let n;
  if (!((undefined === e))) goto L_9;
  return;
  n = u(e.title, 200);
  if (!((undefined === n))) goto L_3a;
  return undefined;
  return {title: n, subtitle: u(e.subtitle, 512)};
}

// fn N  args=1 vars=4 closure=1 cpool=2 bc=348B file=chatgpt_wallet_approval/src/WalletApprovalElicitation
// args: e
// locals: n, i, a
// closure: u
function {
  let a;
  let i;
  let n;
  if (!((undefined === e))) goto L_f;
  return;
  if (!((undefined !== e.last4))) goto L_a6;
  if (!(new RegExp("^[0-9]{4}$").test(e.last4))) goto L_a6;
  goto L_a7;
  // [栈深重同步 1 -> 0]
  n = undefined;
  i = u(e.displayName, 120);
  if (!((u(e.brand, 32) == null))) goto L_fd;
  u(e.brand, 32);
  goto L_121;
  a = undefined.toLowerCase();
  if (!((undefined === n))) goto L_132;
  if (!((undefined === i))) goto L_132;
  return undefined;
  if (!((undefined === a))) goto L_14d;
  goto L_156;
  // [栈深重同步 2 -> 1]
  null;
  {brand: a};
  return {last4: n, displayName: i};
}

// fn J  args=2 vars=9 closure=3 cpool=0 bc=1566B file=chatgpt_wallet_approval/src/WalletApprovalElicitation
// args: e, n
// locals: i, s, s#1, a, t, s#2, e#1
// closure: d, u, K
function {
  let t;
  let a;
  let i;
  i = e.review;
  if (((undefined === i))) goto L_38;
  if (!((undefined === n))) goto L_49;
  throw new Error("Incomplete Wallet review");
  d.validateWalletReview(i);
  if (!((e.cartLineItems == null))) goto L_9c;
  e.cartLineItems;
  goto L_9d;
  if ((!undefined.length)) goto L_1e5;
  if (!((e.paymentMethod == null))) goto L_cf;
  e.paymentMethod;
  goto L_f0;
  if ((!undefined.last4)) goto L_1e5;
  if (!((undefined !== n.shippingAddress))) goto L_144;
  if (((undefined === e.shippingAddress))) goto L_1e5;
  if (!((undefined !== n.sellerName))) goto L_197;
  if (((undefined === e.sellerName))) goto L_1e5;
  if (!((undefined !== n.termsAndConditionsUrl))) goto L_1f6;
  if (!((undefined === e.termsAndConditionsUrl))) goto L_1f6;
  throw new Error("Incomplete Wallet purchase details");
  let s;
  for (const s of e.cartLineItems) {
    if (!((undefined === s.quantity))) continue;
    throw new Error("Missing Wallet item quantity");
  }
  let s#1;
  for (const s#1 of [n.shipping, n.condition, n.returns]) {
    if (!((undefined !== s#1))) continue;
    if (((undefined === u(s#1.title, 200)))) goto L_359;
    if (!((undefined !== s#1.subtitle))) continue;
    if (!((undefined === u(s#1.subtitle, 512)))) continue;
    throw new Error("Invalid Wallet purchase disclosure");
  }
  a = i.commitment.kind;
  if (!((0 === Number(e.amount)))) goto L_480;
  if (!((a !== d.WalletCommitmentKind.FreeTrial))) goto L_480;
  if (((a !== d.WalletCommitmentKind.PayLater))) goto L_4f4;
  if (!((true === e.isRecurring))) goto L_505;
  if (!((a === d.WalletCommitmentKind.OneTime))) goto L_505;
  throw new Error("Inconsistent Wallet commitment");
  t = 0;
  let s#2;
  for (const s#2 of i.priceBreakdown) {
    let e#1;
    e#1 = K(s#2.amount);
    t = (t + e#1);
    (t + e#1);
    if ((!Number.isSafeInteger(e#1))) goto L_5ca;
    if (!(!Number.isSafeInteger(t))) continue;
    throw new Error("Wallet breakdown exceeds exact display range");
  }
  if (!((t !== K(e.amount)))) goto L_61d;
  throw new Error("Wallet breakdown does not match total");
  return;
}

// fn K  args=1 vars=4 closure=0 cpool=1 bc=315B file=chatgpt_wallet_approval/src/WalletApprovalElicitation
// args: e
// locals: n, i, a
function {
  let a;
  let i;
  let n;
  n = e.startsWith("-");
  if (!(n)) goto L_61;
  goto L_62;
  // [栈深重同步 1 -> 0]
  i = e.split(".");
  if (!((i[1] == null))) goto L_c3;
  i[1];
  a = Number("".concat(i[0], "".padEnd(2, "0")));
  if (!(!Number.isSafeInteger(a))) goto L_12d;
  throw new Error("Wallet amount exceeds exact display range");
  if (!(n)) goto L_137;
  return -a;
  return a;
}

// fn u  args=2 vars=3 closure=0 cpool=0 bc=119B file=chatgpt_wallet_approval/src/WalletApprovalElicitation
// args: e, n
// locals: i
function {
  let i;
  if (!((e == null))) goto L_c;
  e;
  goto L_30;
  i = undefined.trim();
  if (!((undefined !== i))) goto L_75;
  if (!((i.length > 0))) goto L_75;
  if (!((Array.from(i).length <= n))) goto L_75;
  return i;
  return undefined;
}

// fn b  args=2 vars=12 closure=2 cpool=5 bc=1045B file=chatgpt_wallet_approval/src/WalletApprovalElicitation
// args: n, i
// locals: a, t, s, o, m, l, e, n#1, i#1, s#1
// closure: r, e
function {
  let l;
  let m;
  let o;
  let s;
  let t;
  let a;
  a = n.currency.toUpperCase();
  t = "".concat(a, " ", n.amount);
  s = n.amount.split(".");
  o = s[0].replace(new RegExp("^0+(?=[0-9])"), "");
  if (!((s[1] == null))) goto L_130;
  s[1];
  m = "".padEnd(2, "0");
  l = Number(n.amount);
  if ((!Number.isFinite(l))) goto L_241;
  if (((l > (Number.MAX_SAFE_INTEGER / 100)))) goto L_241;
  if (!((l.toFixed(2) !== "".concat(o, ".", m)))) goto L_247;
  return t;
  try { // catch -> L_3b2
  let n#1;
  let e;
  e = {maximumFractionDigits: 2, localeIdentifier: i};
  n#1 = r.formatNumberWithCurrency(l, a, e);
  if (!((0 === n#1.trim().length))) goto L_2c2;
  return t;
  if (!((Number(m) > 0))) goto L_3ad;
  let s#1;
  let i#1;
  i#1 = r.formatNumberWithCurrency(Number((l - 0.01).toFixed(2)), a, e);
  s#1 = r.formatNumberWithCurrency(Number((l + 0.01).toFixed(2)), a, e);
  if (((n#1 === i#1))) goto L_3a6;
  if (!((n#1 === s#1))) goto L_3ad;
  return t;
  return n#1;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_414
  if (!(e.isLoggingEnabled)) goto L_40e;
  console.warn("Unable to format Wallet approval total.");
  return t;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=10 bc=35350B file=chatgpt_wallet_approval/src/WalletApprovalElicitation
// args: require, module, exports
// locals: e, n, i, a, t, s, o, m, l, r, d, c, h, S, p, k, j, N, J, K, u, b
function {
  h = function h;
  S = function S;
  p = function p;
  k = function k;
  j = function j;
  N = function N;
  J = function J;
  K = function K;
  u = function u;
  b = function b;
  let c;
  let d;
  let r;
  let l;
  let m;
  let o;
  let s;
  let t;
  let a;
  let i;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.parseWalletApprovalElicitation = undefined;
  exports.formatWalletApprovalTotal = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  n = require("valdi_core/src/JsonSerializationRuntime");
  i = n.createJsonSerializer({kind: n.JsonSchemaKind.Object, name: "ElicitationModeWire", fields: [{name: "mode", jsonName: "mode", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]});
  a = n.createJsonSerializer({kind: n.JsonSchemaKind.Object, name: "VerificationWire", fields: [{name: "mode", jsonName: "mode", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "challenge", jsonName: "challenge", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "metadata", jsonName: "_meta", schema: {kind: n.JsonSchemaKind.Object, name: "VerificationMetadataWire", fields: [{name: "transaction", jsonName: "openai/transaction", schema: {kind: n.JsonSchemaKind.Object, name: "TransactionWire", fields: [{name: "merchant", jsonName: "merchant", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "amount", jsonName: "amount", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "currency", jsonName: "currency", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "cartLineItems", jsonName: "cartLineItems", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "CartLineItemWire", fields: [{name: "name", jsonName: "name", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "displayName", jsonName: "displayName", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "quantity", jsonName: "quantity", schema: {kind: n.JsonSchemaKind.Number}, optional: true, resilient: false}]}}, optional: true, resilient: true}, {name: "sellerName", jsonName: "sellerName", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "isRecurring", jsonName: "isRecurring", schema: {kind: n.JsonSchemaKind.Boolean}, optional: true, resilient: true}, {name: "condition", jsonName: "condition", schema: {kind: n.JsonSchemaKind.Object, name: "DetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}]}, optional: true, resilient: true}, {name: "shippingAddress", jsonName: "shippingAddress", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "shippingAddressSummary", jsonName: "shippingAddressSummary", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "shipping", jsonName: "shipping", schema: {kind: n.JsonSchemaKind.Object, name: "DetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}]}, optional: true, resilient: true}, {name: "returns", jsonName: "returns", schema: {kind: n.JsonSchemaKind.Object, name: "DetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}]}, optional: true, resilient: true}, {name: "paymentMethod", jsonName: "paymentMethod", schema: {kind: n.JsonSchemaKind.Object, name: "PaymentMethodWire", fields: [{name: "brand", jsonName: "brand", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "last4", jsonName: "last4", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "displayName", jsonName: "displayName", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}]}, optional: true, resilient: true}, {name: "termsAndConditionsUrl", jsonName: "termsAndConditionsUrl", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "additionalDisclosures", jsonName: "additionalDisclosures", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "DetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}]}}, optional: true, resilient: false}, {name: "review", jsonName: "review", schema: {kind: n.JsonSchemaKind.Object, name: "WalletApprovalReview", fields: [{name: "version", jsonName: "version", schema: {kind: n.JsonSchemaKind.Number}, optional: false, resilient: false}, {name: "priceBreakdown", jsonName: "priceBreakdown", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletPriceLine", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "amount", jsonName: "amount", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "isEstimatedTax", jsonName: "isEstimatedTax", schema: {kind: n.JsonSchemaKind.Boolean}, optional: true, resilient: false}]}}, optional: false, resilient: false}, {name: "commitment", jsonName: "commitment", schema: {kind: n.JsonSchemaKind.Object, name: "WalletPaymentCommitment", fields: [{name: "kind", jsonName: "kind", schema: {kind: n.JsonSchemaKind.Enum, name: "WalletCommitmentKind", values: ["one_time", "subscription", "free_trial", "deposit", "pay_later", "installment"]}, optional: false, resilient: false}, {name: "summary", jsonName: "summary", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "details", jsonName: "details", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}]}, optional: false, resilient: false}, {name: "sellerDetails", jsonName: "sellerDetails", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "deliveryDetails", jsonName: "deliveryDetails", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "destinationDetails", jsonName: "destinationDetails", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "agreement", jsonName: "agreement", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewSection", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "details", jsonName: "details", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "productDetails", jsonName: "productDetails", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "returnDetails", jsonName: "returnDetails", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "blockingReasons", jsonName: "blockingReasons", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.String}}, optional: true, resilient: false}]}, optional: true, resilient: false}]}, optional: true, resilient: true}]}, optional: true, resilient: true}]});
  t = n.createJsonSerializer({kind: n.JsonSchemaKind.Object, name: "FormElicitationWire", fields: [{name: "metadata", jsonName: "_meta", schema: {kind: n.JsonSchemaKind.Object, name: "FormMetadataWire", fields: [{name: "verification", jsonName: "openai/userVerification", schema: {kind: n.JsonSchemaKind.Object, name: "VerificationWire", fields: [{name: "mode", jsonName: "mode", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "challenge", jsonName: "challenge", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "metadata", jsonName: "_meta", schema: {kind: n.JsonSchemaKind.Object, name: "VerificationMetadataWire", fields: [{name: "transaction", jsonName: "openai/transaction", schema: {kind: n.JsonSchemaKind.Object, name: "TransactionWire", fields: [{name: "merchant", jsonName: "merchant", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "amount", jsonName: "amount", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "currency", jsonName: "currency", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "cartLineItems", jsonName: "cartLineItems", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "CartLineItemWire", fields: [{name: "name", jsonName: "name", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "displayName", jsonName: "displayName", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "quantity", jsonName: "quantity", schema: {kind: n.JsonSchemaKind.Number}, optional: true, resilient: false}]}}, optional: true, resilient: true}, {name: "sellerName", jsonName: "sellerName", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "isRecurring", jsonName: "isRecurring", schema: {kind: n.JsonSchemaKind.Boolean}, optional: true, resilient: true}, {name: "condition", jsonName: "condition", schema: {kind: n.JsonSchemaKind.Object, name: "DetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}]}, optional: true, resilient: true}, {name: "shippingAddress", jsonName: "shippingAddress", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "shippingAddressSummary", jsonName: "shippingAddressSummary", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "shipping", jsonName: "shipping", schema: {kind: n.JsonSchemaKind.Object, name: "DetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}]}, optional: true, resilient: true}, {name: "returns", jsonName: "returns", schema: {kind: n.JsonSchemaKind.Object, name: "DetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}]}, optional: true, resilient: true}, {name: "paymentMethod", jsonName: "paymentMethod", schema: {kind: n.JsonSchemaKind.Object, name: "PaymentMethodWire", fields: [{name: "brand", jsonName: "brand", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "last4", jsonName: "last4", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "displayName", jsonName: "displayName", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}]}, optional: true, resilient: true}, {name: "termsAndConditionsUrl", jsonName: "termsAndConditionsUrl", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "additionalDisclosures", jsonName: "additionalDisclosures", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "DetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}]}}, optional: true, resilient: false}, {name: "review", jsonName: "review", schema: {kind: n.JsonSchemaKind.Object, name: "WalletApprovalReview", fields: [{name: "version", jsonName: "version", schema: {kind: n.JsonSchemaKind.Number}, optional: false, resilient: false}, {name: "priceBreakdown", jsonName: "priceBreakdown", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletPriceLine", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "amount", jsonName: "amount", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "isEstimatedTax", jsonName: "isEstimatedTax", schema: {kind: n.JsonSchemaKind.Boolean}, optional: true, resilient: false}]}}, optional: false, resilient: false}, {name: "commitment", jsonName: "commitment", schema: {kind: n.JsonSchemaKind.Object, name: "WalletPaymentCommitment", fields: [{name: "kind", jsonName: "kind", schema: {kind: n.JsonSchemaKind.Enum, name: "WalletCommitmentKind", values: ["one_time", "subscription", "free_trial", "deposit", "pay_later", "installment"]}, optional: false, resilient: false}, {name: "summary", jsonName: "summary", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "details", jsonName: "details", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}]}, optional: false, resilient: false}, {name: "sellerDetails", jsonName: "sellerDetails", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "deliveryDetails", jsonName: "deliveryDetails", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "destinationDetails", jsonName: "destinationDetails", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "agreement", jsonName: "agreement", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewSection", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "details", jsonName: "details", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "productDetails", jsonName: "productDetails", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "returnDetails", jsonName: "returnDetails", schema: {kind: n.JsonSchemaKind.Object, name: "WalletReviewDetails", fields: [{name: "rows", jsonName: "rows", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLine", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "text", jsonName: "text", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "links", jsonName: "links", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletReviewLink", fields: [{name: "label", jsonName: "label", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "url", jsonName: "url", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "blockingReasons", jsonName: "blockingReasons", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.String}}, optional: true, resilient: false}]}, optional: true, resilient: false}]}, optional: true, resilient: true}]}, optional: true, resilient: true}]}, optional: false, resilient: false}]}, optional: false, resilient: false}]});
  s = n.createJsonSerializer({kind: n.JsonSchemaKind.Object, name: "ReviewedFormWire", fields: [{name: "metadata", jsonName: "_meta", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedFormMetadataWire", fields: [{name: "verification", jsonName: "openai/userVerification", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedVerificationWire", fields: [{name: "metadata", jsonName: "_meta", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedMetadataWire", fields: [{name: "transaction", jsonName: "openai/transaction", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedTransactionWire", fields: [{name: "cartLineItems", jsonName: "cartLineItems", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "CartLineItemWire", fields: [{name: "name", jsonName: "name", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "displayName", jsonName: "displayName", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "quantity", jsonName: "quantity", schema: {kind: n.JsonSchemaKind.Number}, optional: true, resilient: false}]}}, optional: false, resilient: false}, {name: "sellerName", jsonName: "sellerName", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "isRecurring", jsonName: "isRecurring", schema: {kind: n.JsonSchemaKind.Boolean}, optional: true, resilient: false}, {name: "shippingAddress", jsonName: "shippingAddress", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "shipping", jsonName: "shipping", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedDetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "condition", jsonName: "condition", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedDetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "returns", jsonName: "returns", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedDetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "paymentMethod", jsonName: "paymentMethod", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedPaymentWire", fields: [{name: "last4", jsonName: "last4", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "displayName", jsonName: "displayName", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}, optional: false, resilient: false}, {name: "additionalDisclosures", jsonName: "additionalDisclosures", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "ReviewedDetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "termsAndConditionsUrl", jsonName: "termsAndConditionsUrl", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}, optional: false, resilient: false}]}, optional: false, resilient: false}]}, optional: false, resilient: false}]}, optional: false, resilient: false}]});
  o = n.createJsonSerializer({kind: n.JsonSchemaKind.Object, name: "ReviewedVerificationWire", fields: [{name: "metadata", jsonName: "_meta", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedMetadataWire", fields: [{name: "transaction", jsonName: "openai/transaction", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedTransactionWire", fields: [{name: "cartLineItems", jsonName: "cartLineItems", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "CartLineItemWire", fields: [{name: "name", jsonName: "name", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "displayName", jsonName: "displayName", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: true}, {name: "quantity", jsonName: "quantity", schema: {kind: n.JsonSchemaKind.Number}, optional: true, resilient: false}]}}, optional: false, resilient: false}, {name: "sellerName", jsonName: "sellerName", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "isRecurring", jsonName: "isRecurring", schema: {kind: n.JsonSchemaKind.Boolean}, optional: true, resilient: false}, {name: "shippingAddress", jsonName: "shippingAddress", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "shipping", jsonName: "shipping", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedDetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "condition", jsonName: "condition", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedDetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "returns", jsonName: "returns", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedDetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}, optional: true, resilient: false}, {name: "paymentMethod", jsonName: "paymentMethod", schema: {kind: n.JsonSchemaKind.Object, name: "ReviewedPaymentWire", fields: [{name: "last4", jsonName: "last4", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "displayName", jsonName: "displayName", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}, optional: false, resilient: false}, {name: "additionalDisclosures", jsonName: "additionalDisclosures", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "ReviewedDetailWire", fields: [{name: "title", jsonName: "title", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "subtitle", jsonName: "subtitle", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}}, optional: true, resilient: false}, {name: "termsAndConditionsUrl", jsonName: "termsAndConditionsUrl", schema: {kind: n.JsonSchemaKind.String}, optional: true, resilient: false}]}, optional: false, resilient: false}]}, optional: false, resilient: false}]});
  m = require("coreutils/src/url");
  l = require("valdi_core/src/JsonSerialization");
  r = require("valdi_core/src/utils/NumberUtils");
  d = require("./WalletApprovalReview");
  c = {transaction: undefined, valid: false};
  exports.parseWalletApprovalElicitation = h;
  exports.formatWalletApprovalTotal = b;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_approval/src/WalletApprovalElicitation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
