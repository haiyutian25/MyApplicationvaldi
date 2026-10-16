// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=chatgpt_wallet_core/src/WalletEnrollmentSession
// args: e
// closure: this
function {
  this.resolveFinished = e;
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=1 bc=94B file=chatgpt_wallet_core/src/WalletEnrollmentSession
// args: e, i, n
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.api = e;
  this.linkId = i;
  this.onSaved = n;
  this.active = true;
  this.submittedFinalization = false;
  this.finished = new Promise(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=126B file=chatgpt_wallet_core/src/WalletEnrollmentSession
// locals: this
function {
  this = this;
  this.active = false;
  if ((this.pending)) goto L_5a;
  this.finish(undefined);
  return this.pending;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_wallet_core/src/WalletEnrollmentSession
// locals: this
function {
  this = this;
  return this.finished;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=47B file=chatgpt_wallet_core/src/WalletEnrollmentSession
// args: e
// locals: this
function {
  this = this;
  this.resolveFinished({savedRegistrationId: e});
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=284B file=chatgpt_wallet_core/src/WalletEnrollmentSession
// args: e, i
// locals: this
function {
  this = this;
  this.checkActive();
  if (!(this.pending)) goto L_5b;
  throw new Error("A Wallet enrollment operation is already running");
  this.pending = this.performCall(e, i);
  try { // catch -> L_bb
  // gosub (finally 块) 193
  return (await this.pending); // async
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 193
  throw <?>;
  this.pending = undefined;
  if ((this.active)) goto L_118;
  this.finish(undefined);
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=2 vars=7 closure=3 cpool=0 bc=954B file=chatgpt_wallet_core/src/WalletEnrollmentSession
// args: e, i
// locals: n, t, r, l, this
// closure: s, a, o
function {
  this = this;
  let l;
  let r;
  let t;
  let n;
  n = s.walletObject(JSON.parse(i));
  t = (await this.api.resolveTool(e, this.linkId));
  this.checkActive();
  if ((!a.WALLET_ENROLLMENT_ACTIONS.has(t.action))) goto L_1d4;
  if (!((undefined !== n.link_id))) goto L_1e5;
  if (!((n.link_id !== this.linkId))) goto L_1e5;
  throw new Error("Wallet enrollment action is outside this session");
  if (!(("finalize_vgs_card_registration" === t.action))) goto L_2de;
  if (!(this.submittedFinalization)) goto L_248;
  throw new Error("Close Wallet and refresh before checking this save");
  if ((("string" != typeof n.registration_id))) goto L_2c0;
  if (!(!n.registration_id.trim())) goto L_2d1;
  throw new Error("Wallet finalization requires a registration identifier");
  this.submittedFinalization = true;
  r = (await this.api.call(t, n));
  l = o(t.action, n, r);
  if (!((undefined !== l))) goto L_38c;
  this.onSaved(l);
  return JSON.stringify(r); // async
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=55B file=chatgpt_wallet_core/src/WalletEnrollmentSession
// locals: this
function {
  this = this;
  if (!(!this.active)) goto L_36;
  throw new Error("Wallet enrollment session is no longer active");
  return;
}

// fn o  args=3 vars=8 closure=3 cpool=2 bc=1228B file=chatgpt_wallet_core/src/WalletEnrollmentSession
// args: i, a, s
// locals: r, o, e, i#1, l
// closure: n, t, e
function {
  let l;
  let o;
  let r;
  if (!(("finalize_vgs_card_registration" !== i))) goto L_1c;
  if (!(("refresh_vgs_card_verification" !== i))) goto L_1c;
  return;
  r = a.registration_id;
  if (((true === s.isError))) goto L_9e;
  if ((("string" != typeof r))) goto L_9e;
  if (!(!r.trim())) goto L_a1;
  return;
  o = undefined;
  try { // catch -> L_23b
  let e;
  if (!((s.structuredContent == null))) goto L_f4;
  s.structuredContent;
  e = s.structured_content;
  if (!(("refresh_vgs_card_verification" === i))) goto L_209;
  let i#1;
  i#1 = n.decode(e);
  if ((("succeeded" !== i#1.status))) goto L_1fa;
  if (((i#1.registrationId !== r))) goto L_1fa;
  if ((!a.verification_attempt_id)) goto L_1fa;
  if (!((i#1.verificationAttemptId !== a.verification_attempt_id))) goto L_1ff;
  return undefined;
  o = i#1;
  i#1;
  goto L_238;
  o = t.decode(e);
  t.decode(e);
  <?>;
  goto L_29c;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_29b
  if (!(e.isLoggingEnabled)) goto L_297;
  console.warn("Wallet enrollment result could not be decoded");
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  l = o.card;
  if ((!o.ok)) goto L_4c4;
  if (((null == l))) goto L_4c4;
  if ((!l.walletEntryId.trim())) goto L_4c4;
  if ((!new RegExp("^\\d{4}$").test(l.last4))) goto L_4c4;
  if ((!Number.isInteger(l.expMonth))) goto L_4c4;
  if (((l.expMonth < 1))) goto L_4c4;
  if (((l.expMonth > 12))) goto L_4c4;
  if ((!Number.isInteger(l.expYear))) goto L_4c4;
  if (!((l.expYear <= 0))) goto L_4c8;
  return undefined;
  return r;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=8 bc=3044B file=chatgpt_wallet_core/src/WalletEnrollmentSession
// args: require, module, exports
// locals: e, i, n, t, a, s, r, SharedWalletEnrollmentSession, <class_fields_init>, SharedWalletEnrollmentSession#1, o
function {
  o = function o;
  let SharedWalletEnrollmentSession#1;
  let r;
  let s;
  let a;
  let t;
  let n;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SharedWalletEnrollmentSession = undefined;
  exports.savedWalletRegistration = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("valdi_core/src/JsonSerializationRuntime");
  n = i.createJsonSerializer({kind: i.JsonSchemaKind.Object, name: "WalletVerificationResultWire", fields: [{name: "status", jsonName: "status", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "registrationId", jsonName: "registration_id", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "verificationAttemptId", jsonName: "verification_attempt_id", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "ok", jsonName: "ok", schema: {kind: i.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "card", jsonName: "card", schema: {kind: i.JsonSchemaKind.Object, name: "WalletEnrollmentCardWire", fields: [{name: "walletEntryId", jsonName: "wallet_entry_id", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "last4", jsonName: "last4", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "brand", jsonName: "brand", schema: {kind: i.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "isDefault", jsonName: "is_default", schema: {kind: i.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "expMonth", jsonName: "exp_month", schema: {kind: i.JsonSchemaKind.Number}, optional: false, resilient: false}, {name: "expYear", jsonName: "exp_year", schema: {kind: i.JsonSchemaKind.Number}, optional: false, resilient: false}, {name: "cardType", jsonName: "card_type", schema: {kind: i.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}], nullable: true}, optional: true, resilient: false}]});
  t = i.createJsonSerializer({kind: i.JsonSchemaKind.Object, name: "WalletEnrollmentResultWire", fields: [{name: "ok", jsonName: "ok", schema: {kind: i.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "card", jsonName: "card", schema: {kind: i.JsonSchemaKind.Object, name: "WalletEnrollmentCardWire", fields: [{name: "walletEntryId", jsonName: "wallet_entry_id", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "last4", jsonName: "last4", schema: {kind: i.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "brand", jsonName: "brand", schema: {kind: i.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "isDefault", jsonName: "is_default", schema: {kind: i.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "expMonth", jsonName: "exp_month", schema: {kind: i.JsonSchemaKind.Number}, optional: false, resilient: false}, {name: "expYear", jsonName: "exp_year", schema: {kind: i.JsonSchemaKind.Number}, optional: false, resilient: false}, {name: "cardType", jsonName: "card_type", schema: {kind: i.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}], nullable: true}, optional: true, resilient: false}]});
  a = require("./WalletApi");
  s = require("./WalletWireModels");
  r = require("valdi_core/src/JsonSerialization");
  let SharedWalletEnrollmentSession;
  let <class_fields_init>;
  class SharedWalletEnrollmentSession extends undefined { ... }
  <proto:SharedWalletEnrollmentSession>.dispose = function <atom:0>;
  <proto:SharedWalletEnrollmentSession>.waitUntilFinished = function <atom:0>;
  <proto:SharedWalletEnrollmentSession>.finish = function <atom:0>;
  <proto:SharedWalletEnrollmentSession>.callTool = function <atom:0>;
  <proto:SharedWalletEnrollmentSession>.performCall = function <atom:0>;
  <proto:SharedWalletEnrollmentSession>.checkActive = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SharedWalletEnrollmentSession>;
  SharedWalletEnrollmentSession = function <atom:0>;
  // close_loc <class_fields_init>
  SharedWalletEnrollmentSession#1 = function <atom:0>;
  exports.SharedWalletEnrollmentSession = SharedWalletEnrollmentSession#1;
  exports.savedWalletRegistration = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/WalletEnrollmentSession
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
