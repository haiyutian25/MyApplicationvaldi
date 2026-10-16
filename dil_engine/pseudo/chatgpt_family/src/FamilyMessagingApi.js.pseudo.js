// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=chatgpt_family/src/FamilyMessagingApi
// args: e
function {
  e.Unverified = "unverified";
  e.Pending = "pending";
  e.Verified = "verified";
  e.Active = "active";
  return;
}

// fn d  args=1 vars=2 closure=2 cpool=0 bc=180B file=chatgpt_family/src/FamilyMessagingApi
// args: e
// locals: i
// closure: n, a
function {
  let i;
  i = n.decode(e);
  if (!(!Object.values(a).includes(i.status))) goto L_b0;
  throw new Error("Unsupported messaging status");
  return i;
}

// fn c  args=1 vars=2 closure=3 cpool=0 bc=893B file=chatgpt_family/src/FamilyMessagingApi
// args: e
// locals: n
// closure: d, a, r
function {
  let n;
  n = d(e);
  if (!((n.status === a.Unverified))) goto L_54;
  return n;
  if ((!n.challengeId)) goto L_f2;
  if ((!n.phoneNumber)) goto L_f2;
  if (!(!r.test(n.phoneNumber))) goto L_103;
  throw new Error("Incomplete messaging challenge");
  if (((n.status !== a.Pending))) goto L_297;
  if (!(n.expiresAt)) goto L_297;
  if (!(Number.isFinite(Date.parse(n.expiresAt)))) goto L_297;
  if (!(n.resendAvailableAt)) goto L_297;
  if (!(!Number.isFinite(Date.parse(n.resendAvailableAt)))) goto L_2a9;
  throw new Error("Invalid messaging challenge timing");
  if (((n.status !== a.Active))) goto L_367;
  if (!(n.assistantPhone)) goto L_367;
  if (!(!r.test(n.assistantPhone))) goto L_379;
  throw new Error("Invalid messaging destination");
  return n;
}

// fn l  args=1 vars=2 closure=3 cpool=0 bc=220B file=chatgpt_family/src/FamilyMessagingApi
// args: e
// locals: n
// closure: d, a, r
function {
  let n;
  n = d(e);
  if (((n.status !== a.Active))) goto L_c7;
  if ((!n.assistantPhone)) goto L_c7;
  if (!(!r.test(n.assistantPhone))) goto L_d8;
  throw new Error("Invalid messaging activation");
  return n;
}

// fn m  args=1 vars=2 closure=1 cpool=0 bc=237B file=chatgpt_family/src/FamilyMessagingApi
// args: e
// locals: n
// closure: i
function {
  if (!(e.bodyText)) goto L_ec;
  try { // catch -> L_e2
  return i.decode(JSON.parse(e.bodyText)).detail.code;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_eb
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_family/src/FamilyMessagingApi
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.client = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=145B file=chatgpt_family/src/FamilyMessagingApi
// locals: this
// closure: o, c
function {
  this = this;
  return this.client.requestJson({request: {method: "GET", path: "".concat(o, "/otp/status")}, decode: c});   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=157B file=chatgpt_family/src/FamilyMessagingApi
// args: e
// locals: this
// closure: o, c
function {
  this = this;
  return this.client.requestJson({request: {method: "POST", path: "".concat(o, "/otp/send"), jsonBody: {phone_number: e}}, decode: c});   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=133B file=chatgpt_family/src/FamilyMessagingApi
// locals: this
// closure: o
function {
  this = this;
  return this.client.requestEmpty({method: "POST", path: "".concat(o, "/group-prototype/invites")});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_family/src/FamilyMessagingApi
// args: e
// closure: t
function {
  return t.decode(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=163B file=chatgpt_family/src/FamilyMessagingApi
// args: e
// locals: this
// closure: t, o
function {
  this = this;
  return this.client.requestJson({request: {method: "POST", path: "".concat(o, "/group-prototype/invites/", encodeURIComponent(e), "/join")}, decode: function <atom:0>});   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=177B file=chatgpt_family/src/FamilyMessagingApi
// args: e, n
// locals: this
// closure: o, l
function {
  this = this;
  if (!((undefined === n))) goto L_91;
  goto L_9e;
  // [栈深重同步 5 -> 4]
  return this.client.requestJson({request: {method: "POST", path: "".concat(o, "/activation"), jsonBody: {challenge_id: e, code: n}}, decode: l});   // tail call
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=13 bc=1767B file=chatgpt_family/src/FamilyMessagingApi
// args: require, module, exports
// locals: e, n, i, t, s, a, o, r, d, c, l, m, FamilyMessagingApi, <class_fields_init>, FamilyMessagingApi#1
function {
  d = function d;
  c = function c;
  l = function l;
  m = function m;
  let FamilyMessagingApi#1;
  let r;
  let o;
  let s;
  let t;
  let i;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FamilyMessagingStatus = undefined;
  exports.messagingErrorCode = undefined;
  exports.FamilyMessagingApi = undefined;
  e = require("valdi_core/src/JsonSerializationRuntime");
  n = e.createJsonSerializer({kind: e.JsonSchemaKind.Object, name: "FamilyMessagingSnapshot", fields: [{name: "status", jsonName: "status", schema: {kind: e.JsonSchemaKind.Enum, name: "FamilyMessagingStatus", values: ["unverified", "pending", "verified", "active"]}, optional: false, resilient: false}, {name: "phoneNumber", jsonName: "phone_number", schema: {kind: e.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "challengeId", jsonName: "challenge_id", schema: {kind: e.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "expiresAt", jsonName: "expires_at", schema: {kind: e.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "resendAvailableAt", jsonName: "resend_available_at", schema: {kind: e.JsonSchemaKind.String}, optional: true, resilient: false}, {name: "assistantPhone", jsonName: "assistant_phone", schema: {kind: e.JsonSchemaKind.String}, optional: true, resilient: false}]});
  i = e.createJsonSerializer({kind: e.JsonSchemaKind.Object, name: "ErrorEnvelope", fields: [{name: "detail", jsonName: "detail", schema: {kind: e.JsonSchemaKind.Object, name: "ErrorDetail", fields: [{name: "code", jsonName: "code", schema: {kind: e.JsonSchemaKind.String}, optional: false, resilient: false}]}, optional: false, resilient: false}]});
  t = e.createJsonSerializer({kind: e.JsonSchemaKind.Object, name: "FamilyMessagingJoinResponse", fields: [{name: "isMember", jsonName: "is_member", schema: {kind: e.JsonSchemaKind.Boolean}, optional: false, resilient: false}]});
  s = require("valdi_core/src/JsonSerialization");
  if ((a)) goto L_67a;
  a = {};
  exports.FamilyMessagingStatus = {};
  !function <atom:0>({});
  o = "/backend-api/67/messaging";
  r = new RegExp("^\\+[1-9][0-9]{7,14}$");
  exports.messagingErrorCode = m;
  let FamilyMessagingApi;
  let <class_fields_init>;
  class FamilyMessagingApi extends undefined { ... }
  <proto:FamilyMessagingApi>.status = function <atom:0>;
  <proto:FamilyMessagingApi>.send = function <atom:0>;
  <proto:FamilyMessagingApi>.createInvite = function <atom:0>;
  <proto:FamilyMessagingApi>.joinInvite = function <atom:0>;
  <proto:FamilyMessagingApi>.activate = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FamilyMessagingApi>;
  FamilyMessagingApi = function <atom:0>;
  // close_loc <class_fields_init>
  FamilyMessagingApi#1 = function <atom:0>;
  exports.FamilyMessagingApi = FamilyMessagingApi#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_family/src/FamilyMessagingApi
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
