// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=73B file=chatgpt_multiplayer/src/NativeMultiplayerAdmission
// args: r
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.network = new e.OAINetworkClient({apiService: r});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=chatgpt_multiplayer/src/NativeMultiplayerAdmission
// args: e
function {
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=1015B file=chatgpt_multiplayer/src/NativeMultiplayerAdmission
// args: r
// locals: o
// closure: e, i, t
function {
  let o;
  if (!((r.kind === e.OAINetworkResultKind.Success))) goto L_90;
  return r.value;
  if (!((r.kind === e.OAINetworkResultKind.ServiceError))) goto L_146;
  throw new i.MultiplayerAdmissionError(r.statusCode, undefined);
  if (((r.kind === e.OAINetworkResultKind.NetworkError))) goto L_289;
  if (((r.kind === e.OAINetworkResultKind.Timeout))) goto L_289;
  if (!((r.kind === e.OAINetworkResultKind.UnknownError))) goto L_2d3;
  goto L_3c9;
  // [栈深重同步 1 -> 0]
  if (!((r.kind === e.OAINetworkResultKind.SerializationError))) goto L_384;
  goto L_3c9;
  // [栈深重同步 1 -> 0]
  o = t.OAIMultiplayerConnectionFailureReason.HOST_REJECTED;
  throw new i.MultiplayerAdmissionError(undefined, o);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_multiplayer/src/NativeMultiplayerAdmission
// closure: s
function {
  return s.cancel();   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=4 cpool=3 bc=382B file=chatgpt_multiplayer/src/NativeMultiplayerAdmission
// args: o
// locals: n, s, l, this
// closure: e, i, t, r
function {
  this = this;
  let l;
  let s;
  let n;
  n = o.failedConnectionGrant;
  if (!((null == n))) goto L_81;
  goto L_86;
  // [栈深重同步 5 -> 4]
  if (!((null == n))) goto L_de;
  goto L_ed;
  // [栈深重同步 5 -> 4]
  null;
  {jsonBody: {failed_connection_grant: n}};
  s = this.network.requestJson({request: {method: "POST", path: (("/backend-api/multiplayer/documents/" + encodeURIComponent(o.documentId)) + "/admission"), query: {transport: "kubernetes"}}, decode: function <atom:0>});
  l = s.result.then(function <atom:0>);
  return r.promiseToCancelablePromise(l, function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=162B file=chatgpt_multiplayer/src/NativeMultiplayerAdmission
// args: require, module, exports
// locals: e, r, i, t, NativeMultiplayerAdmission, <class_fields_init>, NativeMultiplayerAdmission#1
function {
  let NativeMultiplayerAdmission#1;
  let t;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NativeMultiplayerAdmission = undefined;
  e = require("oai_platform_services/src/OAINetworkClient");
  r = require("valdi_core/src/CancelablePromise");
  i = require("./MultiplayerAdmissionError");
  t = require("./OAIMultiplayerConnectionService");
  let NativeMultiplayerAdmission;
  let <class_fields_init>;
  class NativeMultiplayerAdmission extends undefined { ... }
  <proto:NativeMultiplayerAdmission>.fetch = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeMultiplayerAdmission>;
  NativeMultiplayerAdmission = function <atom:0>;
  // close_loc <class_fields_init>
  NativeMultiplayerAdmission#1 = function <atom:0>;
  exports.NativeMultiplayerAdmission = NativeMultiplayerAdmission#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/NativeMultiplayerAdmission
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
