// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=569B file=chatgpt_finance_connections/src/FinanceConnectorAuthorization
// args: n, t
// locals: e, r, a, this
// closure: o, i
function {
  this = this;
  let r;
  let e;
  if (!(!o.isVersionAtLeast(66))) goto L_41;
  throw new Error("Finance connector authorization is unavailable");
  if (!((undefined !== this.pendingAuthorization))) goto L_76;
  throw new Error("Finance connector authorization is already in progress");
  e = {host: t};
  r = undefined;
  this.pendingAuthorization = e;
  try { // catch -> L_c2
  r = (await t.authorizeFinancesConnector(n));
  (await t.authorizeFinancesConnector(n));
  <?>;
  goto L_15b;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_15a
  if (!((this.pendingAuthorization !== e))) goto L_119;
  throw new i.FinanceAccountLinkingCancelledError();
  this.pendingAuthorization = undefined;
  this.closeAuthorization(t);
  throw new Error("Finance connector authorization failed");
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((this.pendingAuthorization !== e))) goto L_1ac;
  throw new i.FinanceAccountLinkingCancelledError();
  this.pendingAuthorization = undefined;
  if (!((r === 0))) goto L_1c1;
  return undefined; // async
  if (!((r === 1))) goto L_1ef;
  throw new i.FinanceAccountLinkingCancelledError();
  if (!((r === 2))) goto L_203;
  throw new Error("Finance connector authorization failed");
  this.closeAuthorization(t);
  throw new Error("Finance connector authorization returned an unsupported outcome");
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=177B file=chatgpt_finance_connections/src/FinanceConnectorAuthorization
// locals: n, this
// closure: o
function {
  this = this;
  let n;
  n = this.pendingAuthorization;
  this.pendingAuthorization = undefined;
  if (!(o.isVersionAtLeast(66))) goto L_b0;
  if (!((undefined !== n))) goto L_b0;
  this.closeAuthorization(n.host);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=186B file=chatgpt_finance_connections/src/FinanceConnectorAuthorization
// args: i
// locals: t
// closure: o, n
function {
  if (!(o.isVersionAtLeast(66))) goto L_b9;
  try { // catch -> L_59
  i.cancelFinancesConnectorAuthorization();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_b8
  if (!(n.isLoggingEnabled)) goto L_b5;
  console.warn("Finance connector authorization could not be closed");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=chatgpt_finance_connections/src/FinanceConnectorAuthorization
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=202B file=chatgpt_finance_connections/src/FinanceConnectorAuthorization
// args: require, module, exports
// locals: n, i, o, FinanceConnectorAuthorization, <class_fields_init>, FinanceConnectorAuthorization#1
function {
  let FinanceConnectorAuthorization#1;
  let o;
  let i;
  let n;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceConnectorAuthorization = undefined;
  n = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("chatgpt_finance/src/FinanceAccountLinkingRepository");
  o = require("valdi_core/src/CompilerIntrinsics");
  let FinanceConnectorAuthorization;
  let <class_fields_init>;
  class FinanceConnectorAuthorization extends undefined { ... }
  <proto:FinanceConnectorAuthorization>.authorize = function <atom:0>;
  <proto:FinanceConnectorAuthorization>.cancel = function <atom:0>;
  <proto:FinanceConnectorAuthorization>.closeAuthorization = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceConnectorAuthorization>;
  FinanceConnectorAuthorization = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceConnectorAuthorization#1 = function <atom:0>;
  exports.FinanceConnectorAuthorization = FinanceConnectorAuthorization#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinanceConnectorAuthorization
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
