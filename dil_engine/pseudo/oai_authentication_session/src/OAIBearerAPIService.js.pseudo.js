// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=oai_authentication_session/src/OAIBearerAPIService
// args: e
function {
  e.Scheduled = 0;
  e[0] = "Scheduled";
  e.Pending = 1;
  e[1] = "Pending";
  e.Cancelling = 2;
  e[2] = "Cancelling";
  e.Finished = 3;
  e[3] = "Finished";
  return;
}

// fn a  args=1 vars=1 closure=1 cpool=0 bc=50B file=oai_authentication_session/src/OAIBearerAPIService
// args: e
// closure: r
function {
  if (!((r.exec(e) == null))) goto L_2f;
  r.exec(e);
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>[1];
}

// fn <atom:0>  args=4 vars=5 closure=2 cpool=0 bc=177B file=oai_authentication_session/src/OAIBearerAPIService
// args: e, t, i, o
// locals: this
// closure: <class_fields_init>, n
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.client = e;
  this.accessToken = t;
  this.accountId = i;
  this.onUnauthorized = o;
  if (!(!n.isValidOAIBearerToken(t))) goto L_73;
  throw new TypeError("Authenticated API requests require a valid bearer token.");
  if (!((undefined !== i))) goto L_b0;
  if (!(!n.isValidOAIAccountIdentifier(i))) goto L_b0;
  throw new TypeError("Authenticated API requests require a valid account identifier.");
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=46B file=oai_authentication_session/src/OAIBearerAPIService
// closure: this
function {
  if (!((this.onUnauthorized == null))) goto L_2a;
  this.onUnauthorized;
  this;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=44B file=oai_authentication_session/src/OAIBearerAPIService
// args: e
function {
  return ("content-type" === e.toLowerCase());
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=2 bc=787B file=oai_authentication_session/src/OAIBearerAPIService
// args: i
// locals: n, o, a
// closure: this, r, t, s, e
function {
  let a;
  let o;
  let n;
  if (!(r)) goto L_f;
  return;
  r = true;
  true;
  if (((i.statusCode < 200))) goto L_66;
  if (!((i.statusCode >= 300))) goto L_170;
  if (!((401 === i.statusCode))) goto L_10c;
  if (!((undefined !== this.onUnauthorized))) goto L_10c;
  Promise.resolve().then(function <atom:0>);
  t(new Error("Authenticated image request failed with HTTP ".concat(String(i.statusCode), ".")));
  return;
  n = Object.keys(i.headers).find(function <atom:0>);
  if (!((undefined === n))) goto L_1ec;
  goto L_212;
  // [栈深重同步 1 -> 0]
  o = i.headers[n];
  a = i.body;
  if ((("string" != typeof o))) goto L_2f7;
  if ((!o.toLowerCase().startsWith("image/"))) goto L_2f7;
  if (((undefined === a))) goto L_2f7;
  if (((0 === a.byteLength))) goto L_2f7;
  if (!((a.byteLength > s))) goto L_30b;
  goto L_312;
  // [栈深重同步 1 -> 0]
  e(a);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=31B file=oai_authentication_session/src/OAIBearerAPIService
// closure: r, t
function {
  if ((r)) goto L_1e;
  r = true;
  true;
  t(new Error("The authenticated image request could not be completed."));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=5 cpool=2 bc=91B file=oai_authentication_session/src/OAIBearerAPIService
// args: e, t
// closure: this, r, s, o, n
function {
  o = t;
  t;
  Promise.resolve(n).then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=82B file=oai_authentication_session/src/OAIBearerAPIService
// closure: r, n, o
function {
  if ((r)) goto L_51;
  r = true;
  true;
  if (!((n.cancel == null))) goto L_3b;
  n.cancel;
  n;
  goto L_3e;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  o(new Error("The authenticated image request was cancelled."));
  return;
}

// fn <atom:0>  args=1 vars=8 closure=2 cpool=2 bc=206B file=oai_authentication_session/src/OAIBearerAPIService
// args: e
// locals: t, i, n, o, r, c, this
// closure: s, a
function {
  this = this;
  let c;
  let r;
  let o;
  let n;
  let i;
  let t;
  t = a(e);
  if (!((undefined === t))) goto L_2f;
  throw new TypeError("Authenticated image requests require a first-party signed content URL.");
  i = this.makeRequestHeaders("image/*");
  n = this.client.get(t, i);
  o = undefined;
  r = false;
  c = new Promise(function <atom:0>);
  return {cancel: function <atom:0>, result: c};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=44B file=oai_authentication_session/src/OAIBearerAPIService
// args: e
function {
  return ("content-type" === e.toLowerCase());
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=150B file=oai_authentication_session/src/OAIBearerAPIService
// locals: t
// closure: this, e
function {
  try { // catch -> L_36
  if (!((this.onUnauthorized == null))) goto L_30;
  this.onUnauthorized;
  this;
  goto L_33;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_95
  if (!(e.isLoggingEnabled)) goto L_92;
  console.warn("An expired authenticated session could not be invalidated.");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=4 closure=9 cpool=2 bc=1533B file=oai_authentication_session/src/OAIBearerAPIService
// locals: n, c, d, c#1
// closure: this, e, a, o, n, t, r, s, i
function {
  if (!((a === o.Scheduled))) goto L_5fb;
  a = o.Pending;
  o.Pending;
  if (!(!n.isSafeOriginRelativePath(t.path))) goto L_f6;
  a = o.Finished;
  o.Finished;
  r.onFailure({kind: 3});
  return undefined; // async
  try { // catch -> L_4f0
  let d;
  let c;
  let n;
  s = this.startRequest(t);
  this.startRequest(t);
  n = (await s);
  if (!((a !== o.Pending))) goto L_161;
  return undefined; // async
  a = o.Finished;
  o.Finished;
  c = Object.keys(n.headers).find(function <atom:0>);
  if (!((undefined === c))) goto L_206;
  goto L_22e;
  // [栈深重同步 1 -> 0]
  d = n.headers[c];
  if (!(i.isVersionAtLeast(21))) goto L_36f;
  if (!(("string" == typeof d))) goto L_36f;
  if (!(d.toLowerCase().startsWith("image/"))) goto L_36f;
  if (!((undefined !== n.body))) goto L_36f;
  goto L_447;
  // [栈深重同步 1 -> 0]
  if (!((undefined === n.body))) goto L_3e8;
  goto L_43f;
  // [栈深重同步 4 -> 3]
  null;
  {bodyText: new TextDecoder().decode(n.body)};
  r.onResponse({statusCode: n.statusCode});
  if (!((401 === n.statusCode))) goto L_4eb;
  if (!((undefined !== this.onUnauthorized))) goto L_4eb;
  Promise.resolve().then(function <atom:0>);
  <?>;
  goto L_5fb;
  // [栈深重同步 0 -> 1]
  c#1 = <?>;
  try { // catch -> L_5fa
  if (!((a === o.Pending))) goto L_576;
  a = o.Finished;
  o.Finished;
  goto L_5f6;
  // [栈深重同步 1 -> 0]
  if (!((a === o.Finished))) goto L_5f6;
  if (!(e.isLoggingEnabled)) goto L_5f6;
  console.warn("An authenticated request completion callback failed.");
  <?>;
  goto L_5fb;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=126B file=oai_authentication_session/src/OAIBearerAPIService
// closure: a, o, r
function {
  if (!((a === o.Cancelling))) goto L_7d;
  a = o.Finished;
  o.Finished;
  r.onFailure({kind: 2});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=368B file=oai_authentication_session/src/OAIBearerAPIService
// locals: t
// closure: a, o, r, s, e
function {
  if (!((a !== o.Cancelling))) goto L_16f;
  if (!((a !== o.Finished))) goto L_16f;
  a = o.Cancelling;
  o.Cancelling;
  try { // catch -> L_be
  if (!((s == null))) goto L_8d;
  s;
  goto L_ba;
  if (!((undefined.cancel == null))) goto L_b7;
  undefined.cancel;
  undefined;
  goto L_ba;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  <?>;
  goto L_11f;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_11e
  if (!(e.isLoggingEnabled)) goto L_11a;
  console.warn("An authenticated request could not cancel its transport.");
  <?>;
  goto L_11f;
  // [栈深重同步 0 -> 1]
  throw <?>;
  Promise.resolve().then(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=2 bc=139B file=oai_authentication_session/src/OAIBearerAPIService
// args: t, r
// locals: s, a, this
// closure: e, o, n, i
function {
  this = this;
  let a;
  let s;
  s = undefined;
  a = o.Scheduled;
  Promise.resolve().then(function <atom:0>);
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=887B file=oai_authentication_session/src/OAIBearerAPIService
// args: e
// locals: t, n, this
// closure: i
function {
  this = this;
  let n;
  let t;
  t = this.makeRequestHeaders("application/json");
  if (!(i.isVersionAtLeast(117))) goto L_94;
  if (!((true === e.useSheepGateway))) goto L_94;
  t["x-openai-use-sheep"] = "1";
  "1";
  if (!((undefined === e.bodyJson))) goto L_be;
  goto L_10d;
  // [栈深重同步 1 -> 0]
  n = new TextEncoder().encode(e.bodyJson);
  if (!((undefined !== n))) goto L_127;
  t["Content-Type"] = "application/json";
  "application/json";
  if (!((e.method === "GET"))) goto L_1be;
  return this.client.get(e.path, t);   // tail call
  if (!((e.method === "POST"))) goto L_235;
  return this.client.post(e.path, n, t);   // tail call
  if (!((e.method === "PUT"))) goto L_2ac;
  return this.client.put(e.path, n, t);   // tail call
  if (!((e.method === "DELETE"))) goto L_320;
  return this.client.delete(e.path, t);   // tail call
  if (!((e.method === "PATCH"))) goto L_376;
  return this.performPatch(e.path, n, t);   // tail call
  e.method;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=oai_authentication_session/src/OAIBearerAPIService
function {
  return;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=1 bc=228B file=oai_authentication_session/src/OAIBearerAPIService
// args: e, i, n
// locals: o, this
// closure: t
function {
  this = this;
  let o;
  o = this.client;
  if (!(("function" != typeof o.perform))) goto L_b4;
  return t.promiseToCancelablePromise(Promise.reject(new Error("The authenticated HTTP transport does not support PATCH.")), function <atom:0>);
  return o.perform(e, "PATCH", n, i);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=183B file=oai_authentication_session/src/OAIBearerAPIService
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = {Accept: e, Authorization: "Bearer ".concat(this.accessToken)};
  if (!((undefined !== this.accountId))) goto L_b2;
  t["ChatGPT-Account-Id"] = this.accountId;
  this.accountId;
  return t;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=10 bc=291B file=oai_authentication_session/src/OAIBearerAPIService
// args: require, module, exports
// locals: e, t, i, n, o, r, s, a, OAIBearerAPIService, <class_fields_init>, OAIBearerAPIService#1
function {
  a = function a;
  let OAIBearerAPIService#1;
  let s;
  let r;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.authenticatedImageRequestPath = undefined;
  exports.OAIBearerAPIService = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/CancelablePromise");
  i = require("valdi_core/src/CompilerIntrinsics");
  n = require("./OAIAuthenticationValidation");
  if ((o)) goto L_b6;
  o = {};
  !function <atom:0>({});
  r = new RegExp("^https:\\/\\/(?:[a-z\\d-]+\\.)*(?:openai\\.com|chatgpt\\.com|openai-staging\\.com|chatgpt-staging\\.com)(\\/backend-api\\/estuary\\/content\\?[^\\s#\\\\]+)$");
  s = 8388608;
  exports.authenticatedImageRequestPath = a;
  let OAIBearerAPIService;
  let <class_fields_init>;
  class OAIBearerAPIService extends undefined { ... }
  <proto:OAIBearerAPIService>.loadAuthenticatedImage = function <atom:0>;
  <proto:OAIBearerAPIService>.send = function <atom:0>;
  <proto:OAIBearerAPIService>.startRequest = function <atom:0>;
  <proto:OAIBearerAPIService>.performPatch = function <atom:0>;
  <proto:OAIBearerAPIService>.makeRequestHeaders = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OAIBearerAPIService>;
  OAIBearerAPIService = function <atom:0>;
  // close_loc <class_fields_init>
  OAIBearerAPIService#1 = function <atom:0>;
  exports.OAIBearerAPIService = OAIBearerAPIService#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_authentication_session/src/OAIBearerAPIService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
