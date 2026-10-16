// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=53B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// args: e, i
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(i);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(i);
  this.reason = e;
  return this;
}

// fn o  args=1 vars=2 closure=3 cpool=0 bc=611B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// args: e
// locals: i
// closure: InvalidAdmissionError, t, n
function {
  if (!((e instanceof InvalidAdmissionError))) goto L_2a;
  return e.reason;
  if (!((e instanceof t.MultiplayerAdmissionError))) goto L_21d;
  let i;
  if (!((undefined !== e.reason))) goto L_a1;
  return e.reason;
  i = e.statusCode;
  if (!((undefined === i))) goto L_111;
  return n.OAIMultiplayerConnectionFailureReason.UNKNOWN;
  if (((408 === i))) goto L_137;
  if (((429 === i))) goto L_137;
  if (!((i >= 500))) goto L_17f;
  if (!((i <= 599))) goto L_17f;
  return n.OAIMultiplayerConnectionFailureReason.RETRYABLE;
  if (!((i >= 400))) goto L_1d7;
  if (!((i <= 499))) goto L_1d7;
  return n.OAIMultiplayerConnectionFailureReason.ADMISSION_DENIED;
  return n.OAIMultiplayerConnectionFailureReason.UNKNOWN;
  return n.OAIMultiplayerConnectionFailureReason.UNKNOWN;
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=2 bc=187B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// args: e, i
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  if (!(!new RegExp("^[A-Za-z0-9_-]{1,512}$").test(e))) goto L_4b;
  throw new Error("A valid multiplayer document identity is required");
  if (!(i.production)) goto L_a4;
  if (!((undefined !== i.rewriteEndpoint))) goto L_a4;
  throw new Error("Production multiplayer endpoints cannot be rewritten");
  this.documentId = e;
  this.options = i;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=229B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// args: e, i
// locals: n
// closure: o, this
function {
  let n;
  if (!((o == null))) goto L_e;
  o;
  goto L_32;
  n = undefined.getState();
  if (!((n == null))) goto L_3e;
  n;
  goto L_5f;
  if (((undefined.documentId !== this.documentId))) goto L_e4;
  if ((n.closed)) goto L_e4;
  if (!((o == null))) goto L_b9;
  o;
  goto L_e4;
  undefined.record("admission", e, i);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=83B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// closure: r, n, this
function {
  if (!((undefined === n))) goto L_15;
  goto L_1a;
  // [栈深重同步 2 -> 1]
  return {requestId: r, method: "POST", path: (("/backend-api/multiplayer/documents/" + this.documentId) + "/admission?transport=kubernetes")};
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=53B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// closure: r, i, e
function {
  return {requestId: r, parsed: i.redactMultiplayerDebugPayload(e)};
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=50B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// args: e
// closure: r, i, a, this
function {
  a("response", function <atom:0>);
  return this.validate(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=190B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// closure: r, e, t, i
function {
  if (!((e instanceof t.MultiplayerAdmissionError))) goto L_5b;
  goto L_5c;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((e instanceof Error))) goto L_b3;
  goto L_b8;
  // [栈深重同步 2 -> 1]
  return {requestId: r, message: "The admission request failed."};
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=14B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// args: e
// closure: r, t, i, a
function {
  a("failure", function <atom:0>);
  throw e;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=48B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// closure: l
function {
  if (!((l.cancel == null))) goto L_2c;
  l.cancel;
  l;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>);
}

// fn <atom:0>  args=1 vars=7 closure=4 cpool=5 bc=365B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// args: n
// locals: o, r, a, l, u, this
// closure: i, t, s, e
function {
  this = this;
  let u;
  let l;
  let a;
  let r;
  let o;
  o = this.options.debug;
  s = (s ++);
  r = (s ++);
  a = function <atom:0>;
  a("request", function <atom:0>);
  l = this.options.requestAdmission({documentId: this.documentId, failedConnectionGrant: n});
  u = Promise.resolve(l).then(function <atom:0>, function <atom:0>);
  return e.promiseToCancelablePromise(u, function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=13 closure=4 cpool=14 bc=3380B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// args: e
// locals: i, t, o, s, l, u, p, e#1, i#1, i#2, i#3, this
// closure: a, InvalidAdmissionError, n, r
function {
  this = this;
  let p;
  let u;
  let l;
  let s;
  let o;
  let t;
  let i;
  if ((!a(e))) goto L_199;
  if (((e.document_id !== this.documentId))) goto L_199;
  if ((("string" != typeof e.connection_endpoint))) goto L_199;
  if ((("string" != typeof e.connection_grant))) goto L_199;
  if ((!new RegExp("^[A-Za-z0-9_-]{1,8192}$").test(e.connection_grant))) goto L_199;
  if ((("number" != typeof e.expires_at))) goto L_199;
  if (!(!Number.isSafeInteger(e.expires_at))) goto L_1ed;
  throw new InvalidAdmissionError(n.OAIMultiplayerConnectionFailureReason.INVALID_RESPONSE, "Regional multiplayer authorization is invalid");
  if (!((e.expires_at <= (Date.now() / 1000)))) goto L_291;
  throw new InvalidAdmissionError(n.OAIMultiplayerConnectionFailureReason.GRANT_EXPIRED, "Regional multiplayer authorization expired");
  i = new RegExp("^wss:\\/\\/([a-z0-9.-]+)(\\/multiplayer-regional\\/(default|us|eu|fedramp)\\/([A-Za-z0-9_-]{1,512}))$").exec(e.connection_endpoint);
  if (!((null === i))) goto L_336;
  throw new InvalidAdmissionError(n.OAIMultiplayerConnectionFailureReason.INVALID_RESPONSE, "Regional multiplayer endpoint is invalid");
  t = i[1];
  o = i[2];
  s = i[3];
  l = undefined;
  u = undefined;
  p = undefined;
  if (!((null != e.affinity))) goto L_4ca;
  if (!((false !== this.options.production))) goto L_40b;
  if ((("default" === s))) goto L_3db;
  if (!(("us" === s))) goto L_40b;
  if ((new RegExp("^multiplayer-u[0-9]+\\.api\\.openai\\.com$").test(t))) goto L_4c2;
  if (!((true !== this.options.production))) goto L_4c2;
  if (!(("fedramp" === s))) goto L_496;
  goto L_4c2;
  // [栈深重同步 1 -> 0]
  l = new RegExp("^multiplayer-u[0-9]+s\\.api\\.openai\\.org$").test(t);
  new RegExp("^multiplayer-u[0-9]+s\\.api\\.openai\\.org$").test(t);
  goto L_605;
  let i#1;
  let e#1;
  if (!((r.production[s] == null))) goto L_500;
  r.production[s];
  e#1 = [];
  if (!((r.staging[s] == null))) goto L_532;
  r.staging[s];
  i#1 = [];
  if (!((undefined === this.options.production))) goto L_58b;
  // append([], 0, e#1)
  // append([], e#1, i#1)
  i#1;
  goto L_5d9;
  // [栈深重同步 1 -> 0]
  if (!(this.options.production)) goto L_5d6;
  goto L_5d9;
  // [栈深重同步 1 -> 0]
  l = i#1.includes(t);
  i#1.includes(t);
  if ((!l)) goto L_64a;
  if (!((o !== ((("/multiplayer-regional/" + s) + "/") + encodeURIComponent(this.documentId))))) goto L_69e;
  throw new InvalidAdmissionError(n.OAIMultiplayerConnectionFailureReason.INVALID_RESPONSE, "Regional multiplayer endpoint is invalid");
  if (!((undefined !== e.participant))) goto L_913;
  let i#2;
  i#2 = e.participant;
  if ((!a(i#2))) goto L_80e;
  if ((("string" != typeof i#2.user_id))) goto L_80e;
  if (((0 === i#2.user_id.length))) goto L_80e;
  if ((("string" != typeof i#2.display_name))) goto L_80e;
  if (!((undefined !== i#2.profile_picture_url))) goto L_862;
  if (!((null !== i#2.profile_picture_url))) goto L_862;
  if (!(("string" != typeof i#2.profile_picture_url))) goto L_862;
  throw new InvalidAdmissionError(n.OAIMultiplayerConnectionFailureReason.INVALID_RESPONSE, "Regional multiplayer participant is invalid");
  if (!(("string" == typeof i#2.profile_picture_url))) goto L_908;
  goto L_909;
  // [栈深重同步 2 -> 1]
  u = {userId: i#2.user_id, displayName: i#2.display_name, profilePictureUrl: undefined};
  {userId: i#2.user_id, displayName: i#2.display_name, profilePictureUrl: undefined};
  if (!((null != e.affinity))) goto L_bfa;
  let i#3;
  i#3 = e.affinity;
  if ((!a(i#3))) goto L_b25;
  if ((("string" != typeof i#3.route_token))) goto L_b25;
  if ((!new RegExp("^[A-Za-z0-9_-]{1,512}$").test(i#3.route_token))) goto L_b25;
  if ((("string" != typeof i#3.pod_uid))) goto L_b25;
  if ((!new RegExp("^[A-Za-z0-9_-]{1,128}$").test(i#3.pod_uid))) goto L_b25;
  if ((("number" != typeof i#3.owner_generation))) goto L_b25;
  if ((!Number.isSafeInteger(i#3.owner_generation))) goto L_b25;
  if (!((i#3.owner_generation < 0))) goto L_b79;
  throw new InvalidAdmissionError(n.OAIMultiplayerConnectionFailureReason.INVALID_RESPONSE, "Multiplayer owner routing is invalid");
  p = {routeToken: i#3.route_token, podUid: i#3.pod_uid, ownerGeneration: i#3.owner_generation};
  {routeToken: i#3.route_token, podUid: i#3.pod_uid, ownerGeneration: i#3.owner_generation};
  if (!((undefined === this.options.rewriteEndpoint))) goto L_c67;
  goto L_cd0;
  // [栈深重同步 2 -> 1]
  return {endpoint: this.options.rewriteEndpoint(e.connection_endpoint), connectionGrant: e.connection_grant, expiresAt: e.expires_at, participant: u, affinity: p};
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=6 bc=356B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// args: require, module, exports
// locals: e, i, n, t, InvalidAdmissionError, <class_fields_init>, InvalidAdmissionError#1, o, r, a, s, MultiplayerAdmissionClient, <class_fields_init>#1, MultiplayerAdmissionClient#1
function {
  o = function o;
  a = function a;
  let MultiplayerAdmissionClient#1;
  let s;
  let r;
  let InvalidAdmissionError#1;
  let t;
  let n;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.multiplayerAdmissionFailureReason = undefined;
  exports.MultiplayerAdmissionClient = undefined;
  e = require("valdi_core/src/CancelablePromise");
  i = require("./BrowserMultiplayerDiagnostics");
  n = require("./OAIMultiplayerConnectionService");
  t = require("./MultiplayerAdmissionError");
  let InvalidAdmissionError;
  let <class_fields_init>;
  class InvalidAdmissionError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:InvalidAdmissionError>;
  InvalidAdmissionError = function <atom:0>;
  // close_loc <class_fields_init>
  InvalidAdmissionError#1 = function <atom:0>;
  exports.multiplayerAdmissionFailureReason = o;
  r = {production: {default: ["multiplayer-u0.api.openai.com"], us: ["multiplayer-u0.api.openai.com"]}, staging: {default: ["multiplayer.gateway.unified-0s.api.openai.org", "multiplayer-u0s.api.openai.org"], us: ["multiplayer.gateway.unified-0s.api.openai.org", "multiplayer-u0s.api.openai.org"], eu: ["multiplayer.gateway.unified-3s.api.openai.org", "multiplayer-u3s.api.openai.org"], fedramp: ["multiplayer.gateway.fed-unified-0s.api.openai.org", "multiplayer-fedu0s.api.openai.org"]}};
  s = 0;
  let MultiplayerAdmissionClient;
  let <class_fields_init>#1;
  class MultiplayerAdmissionClient extends undefined { ... }
  <proto:MultiplayerAdmissionClient>.fetch = function <atom:0>;
  <proto:MultiplayerAdmissionClient>.validate = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:MultiplayerAdmissionClient>;
  MultiplayerAdmissionClient = function <atom:0>;
  // close_loc <class_fields_init>#1
  MultiplayerAdmissionClient#1 = function <atom:0>;
  exports.MultiplayerAdmissionClient = MultiplayerAdmissionClient#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/MultiplayerAdmissionClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
