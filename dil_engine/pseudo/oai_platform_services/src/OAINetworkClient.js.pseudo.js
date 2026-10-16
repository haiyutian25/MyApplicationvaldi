// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=193B file=oai_platform_services/src/OAINetworkClient
// args: e
function {
  e.Success = 0;
  e[0] = "Success";
  e.Unavailable = 1;
  e[1] = "Unavailable";
  e.InvalidRequest = 2;
  e[2] = "InvalidRequest";
  e.NetworkError = 3;
  e[3] = "NetworkError";
  e.Timeout = 4;
  e[4] = "Timeout";
  e.Cancelled = 5;
  e[5] = "Cancelled";
  e.HostRejected = 6;
  e[6] = "HostRejected";
  e.ServiceError = 7;
  e[7] = "ServiceError";
  e.SerializationError = 8;
  e[8] = "SerializationError";
  e.UnknownError = 9;
  e[9] = "UnknownError";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=oai_platform_services/src/OAINetworkClient
// args: e
function {
  e.Sending = 0;
  e[0] = "Sending";
  e.Pending = 1;
  e[1] = "Pending";
  e.Cancelling = 2;
  e[2] = "Cancelling";
  e.Finished = 3;
  e[3] = "Finished";
  return;
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=8B file=oai_platform_services/src/OAINetworkClient
// args: e
function {
  return {kind: e};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=oai_platform_services/src/OAINetworkClient
function {
  return;
}

// fn l  args=1 vars=1 closure=0 cpool=1 bc=57B file=oai_platform_services/src/OAINetworkClient
// args: e
function {
  return {result: Promise.resolve(e), cancel: function <atom:0>};
}

// fn d  args=1 vars=2 closure=0 cpool=0 bc=24B file=oai_platform_services/src/OAINetworkClient
// args: e
// locals: t
function {
  try { // catch -> L_e
  return decodeURIComponent(e);
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_17
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn h  args=1 vars=2 closure=2 cpool=0 bc=109B file=oai_platform_services/src/OAINetworkClient
// args: e
// locals: t
// closure: d, c
function {
  let t;
  t = d(e);
  if (!((undefined !== t))) goto L_6c;
  if (!(!c.test(t))) goto L_6c;
  return !t.includes("\");
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=5B file=oai_platform_services/src/OAINetworkClient
// args: e
function {
  return (0 === e.length);
}

// fn f  args=1 vars=11 closure=3 cpool=1 bc=979B file=oai_platform_services/src/OAINetworkClient
// args: e
// locals: t, r, n, s, i, e#1, i#1, e#2, t#1, r#1
// closure: c, h, d
function {
  let s;
  let n;
  let r;
  let t;
  if (((e.length < 2))) goto L_fe;
  if ((!e.startsWith("/"))) goto L_fe;
  if ((e.startsWith("//"))) goto L_fe;
  if ((e.includes("#"))) goto L_fe;
  if ((e.includes("\"))) goto L_fe;
  if (!(c.test(e))) goto L_103;
  return false;
  t = e.indexOf("?");
  if (!((t < 0))) goto L_138;
  goto L_161;
  // [栈深重同步 1 -> 0]
  r = e.slice(0, t);
  if (!((t < 0))) goto L_16c;
  goto L_196;
  // [栈深重同步 1 -> 0]
  n = e.slice((t + 1));
  s = r.slice(1).split("/");
  if (((0 === s.length))) goto L_21c;
  if (!(s.some(function <atom:0>))) goto L_221;
  return false;
  let i;
  for (const i of s) {
    let e#1;
    if (!(!h(i))) goto L_23e;
    return false;
    // [栈深重同步 0 -> 3]
    e#1 = d(i);
    if (((undefined === e#1))) goto L_294;
    if ((("." === e#1))) goto L_294;
    if (((".." === e#1))) goto L_294;
    if (!(e#1.includes("/"))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  if (!((undefined === n))) goto L_2ad;
  return true;
  if (!((0 === n.length))) goto L_2b8;
  return false;
  let i#1;
  for (const i#1 of n.split("&")) {
    let r#1;
    let t#1;
    let e#2;
    if (!((0 === i#1.length))) goto L_305;
    return false;
    // [栈深重同步 0 -> 3]
    e#2 = i#1.indexOf("=");
    if (!((e#2 < 0))) goto L_33f;
    goto L_36a;
    // [栈深重同步 4 -> 3]
    t#1 = i#1.slice(0, e#2);
    if (!((e#2 < 0))) goto L_376;
    goto L_3a2;
    // [栈深重同步 4 -> 3]
    r#1 = i#1.slice((e#2 + 1));
    if (((0 === t#1.length))) goto L_3be;
    if ((!h(t#1))) goto L_3be;
    if (!(!h(r#1))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=oai_platform_services/src/OAINetworkClient
// args: e
// closure: v, r
function {
  return v(e, r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=10B file=oai_platform_services/src/OAINetworkClient
// args: t
// closure: v, e, r
function {
  return v(e[t], r);   // tail call
}

// fn v  args=2 vars=4 closure=1 cpool=2 bc=418B file=oai_platform_services/src/OAINetworkClient
// args: e, t
// locals: r, n
// closure: v
function {
  let n;
  let r;
  if (((null === e))) goto L_21;
  if ((("string" == typeof e))) goto L_21;
  if (!(("boolean" == typeof e))) goto L_26;
  return true;
  if (!(("number" == typeof e))) goto L_5a;
  return Number.isFinite(e);   // tail call
  if ((("object" != typeof e))) goto L_8c;
  if (!(t.includes(e))) goto L_91;
  return false;
  // append([], 0, t)
  [][t] = e;
  (e ++);
  r = [];
  if (!(Array.isArray(e))) goto L_ef;
  return e.every(function <atom:0>);   // tail call
  n = Object.getPrototypeOf(e);
  if (((n === Object.prototype))) goto L_14d;
  if (!((null === n))) goto L_1a1;
  return Object.keys(e).every(function <atom:0>);
}

// fn y  args=2 vars=7 closure=1 cpool=0 bc=438B file=oai_platform_services/src/OAINetworkClient
// args: e, r
// locals: n, s, e#1, i, r#1
// closure: t
function {
  let n;
  if (!((undefined === r))) goto L_a;
  return e;
  if (!(e.includes("?"))) goto L_45;
  throw new TypeError("OAINetworkRequest path must not include query parameters when query is provided");
  n = [];
  let s;
  for (const s of Object.keys(r)) {
    let i;
    let e#1;
    if (!((0 === s.length))) goto L_98;
    throw new TypeError("OAINetworkRequest query parameter names must not be empty");
    e#1 = r[s];
    if (!(Array.isArray(e#1))) goto L_d1;
    goto L_d7;
    // [栈深重同步 4 -> 3]
    i = [e#1];
    let r#1;
    for (const r#1 of i) {
      {}[s] = r#1;
      r#1;
      n.push(t.encodeQueryParams({}));
      // [栈深重同步 3 -> 6]
    }
  }
  if (!((0 === n.length))) goto L_15f;
  throw new TypeError("OAINetworkRequest query must include at least one value");
  return "".concat(e, "?", n.join("&"));   // tail call
}

// fn g  args=1 vars=5 closure=5 cpool=0 bc=614B file=oai_platform_services/src/OAINetworkClient
// args: e
// locals: t, n, s, n#1
// closure: y, o, f, v, r
function {
  let t;
  t = y(e.path, e.query);
  if (!(o.includes(e.method))) goto L_265;
  if (!(f(t))) goto L_265;
  if (((undefined === e.jsonBody))) goto L_f1;
  if (!(v(e.jsonBody, []))) goto L_265;
  try { // catch -> L_25b
  let s;
  let n;
  if (!((undefined === e.jsonBody))) goto L_12a;
  goto L_175;
  // [栈深重同步 1 -> 0]
  n = JSON.stringify(e.jsonBody);
  if (!((undefined === n))) goto L_1b0;
  goto L_1b9;
  // [栈深重同步 2 -> 1]
  null;
  {bodyJson: n};
  s = {method: e.method, path: t};
  if (!(r.isVersionAtLeast(170))) goto L_250;
  null;
  s;
  if (!((undefined === e.headers))) goto L_21c;
  goto L_244;
  // [栈深重同步 3 -> 2]
  null;
  {headers: e.headers};
  goto L_259;
  // [栈深重同步 1 -> 0]
  return {request: s};
  // [栈深重同步 0 -> 1]
  n#1 = <?>;
  try { // catch -> L_264
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn p  args=1 vars=1 closure=2 cpool=0 bc=244B file=oai_platform_services/src/OAINetworkClient
// args: e
// closure: a, s
function {
  if (!((e.kind === 0))) goto L_4d;
  return a(s.NetworkError);   // tail call
  if (!((e.kind === 1))) goto L_78;
  return a(s.Timeout);   // tail call
  if (!((e.kind === 2))) goto L_a3;
  return a(s.Cancelled);   // tail call
  if (!((e.kind === 3))) goto L_ce;
  return a(s.HostRejected);   // tail call
  return a(s.UnknownError);   // tail call
}

// fn w  args=2 vars=2 closure=2 cpool=0 bc=403B file=oai_platform_services/src/OAINetworkClient
// args: e, t
// closure: a, s
function {
  if ((!Number.isInteger(e.statusCode))) goto L_9f;
  if (((e.statusCode < 100))) goto L_9f;
  if (!((e.statusCode > 599))) goto L_c6;
  return a(s.UnknownError);
  if (((e.statusCode < 200))) goto L_116;
  if (!((e.statusCode >= 300))) goto L_18f;
  return {kind: s.ServiceError, statusCode: e.statusCode, bodyText: e.bodyText};
  return t(e);
}

// fn C  args=1 vars=1 closure=1 cpool=0 bc=125B file=oai_platform_services/src/OAINetworkClient
// args: e
// closure: s
function {
  if (!((e.bodyText == null))) goto L_77;
  e.bodyText;
  return {kind: s.Success, statusCode: e.statusCode, value: ""};
}

// fn m  args=1 vars=1 closure=1 cpool=0 bc=86B file=oai_platform_services/src/OAINetworkClient
// args: e
// closure: s
function {
  return {kind: s.Success, statusCode: e.statusCode, value: undefined};
}

// fn q  args=1 vars=3 closure=4 cpool=0 bc=458B file=oai_platform_services/src/OAINetworkClient
// args: e
// locals: t, r
// closure: r, u, a, s
function {
  if (!(r.isVersionAtLeast(21))) goto L_1a4;
  let r;
  let t;
  t = e.bodyBytes;
  r = e.contentType;
  if ((!(t instanceof Uint8Array))) goto L_117;
  if (((0 === t.byteLength))) goto L_117;
  if (((t.byteLength > u))) goto L_117;
  if ((("string" != typeof r))) goto L_117;
  if (!((0 === r.trim().length))) goto L_13e;
  return a(s.SerializationError);
  return {kind: s.Success, statusCode: e.statusCode, value: {bytes: t, contentType: r}};
  return a(s.Unavailable);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=oai_platform_services/src/OAINetworkClient
// args: e
// closure: this
function {
  this.resolveResult = e;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=115B file=oai_platform_services/src/OAINetworkClient
// args: e, t
// locals: this
// closure: <class_fields_init>, i
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.decoder = e;
  this.loggingService = t;
  this.phase = i.Sending;
  this.cancelForwarded = false;
  this.result = new Promise(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=0 bc=357B file=oai_platform_services/src/OAINetworkClient
// args: e, t
// locals: r, r#1, this
// closure: n, i, a, s
function {
  this = this;
  try { // catch -> L_e6
  let r;
  this.releaseNativeRefs = n.protectNativeRefsForCurrentContextId();
  r = e.send(t, this);
  if (!((this.phase === i.Finished))) goto L_ab;
  return undefined;
  this.nativeTask = r;
  this.phase = i.Pending;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r#1 = <?>;
  try { // catch -> L_164
  this.log(3, "Native request setup threw synchronously");
  this.finish(a(s.UnknownError));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=118B file=oai_platform_services/src/OAINetworkClient
// args: e
// locals: this
// closure: w
function {
  this = this;
  if (!(this.canAcceptCompletion())) goto L_75;
  this.finish(w(e, this.decoder));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=84B file=oai_platform_services/src/OAINetworkClient
// args: e
// locals: this
// closure: p
function {
  this = this;
  if (!(this.canAcceptCompletion())) goto L_53;
  this.finish(p(e));
  return;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=510B file=oai_platform_services/src/OAINetworkClient
// locals: e, t, this
// closure: i, a, s
function {
  this = this;
  let e;
  if (((this.phase === i.Finished))) goto L_70;
  if (!(this.cancelForwarded)) goto L_73;
  return;
  e = this.nativeTask;
  if (!((undefined !== e))) goto L_1fd;
  this.cancelForwarded = true;
  this.phase = i.Cancelling;
  try { // catch -> L_17e
  e.cancel();
  if (!((this.phase === i.Cancelling))) goto L_17b;
  this.phase = i.Pending;
  i.Pending;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_1fc
  this.log(3, "Native request cancellation threw synchronously");
  this.finish(a(s.UnknownError));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=387B file=oai_platform_services/src/OAINetworkClient
// locals: this
// closure: i, a, s
function {
  this = this;
  if (!((this.phase === i.Finished))) goto L_78;
  this.log(2, "Duplicate native request completion ignored");
  return false;
  if (!((this.phase !== i.Sending))) goto L_106;
  if (((this.phase !== i.Cancelling))) goto L_182;
  this.log(3, "Native request completion violated lifecycle ordering");
  this.finish(a(s.UnknownError));
  return false;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=276B file=oai_platform_services/src/OAINetworkClient
// args: e
// locals: t, r, this
// closure: i
function {
  this = this;
  let r;
  let t;
  if (!((this.phase === i.Finished))) goto L_50;
  return;
  this.phase = i.Finished;
  this.nativeTask = undefined;
  t = this.releaseNativeRefs;
  this.releaseNativeRefs = undefined;
  r = this.resolveResult;
  this.resolveResult = undefined;
  try { // catch -> L_ff
  if (!((r == null))) goto L_f3;
  r;
  goto L_f5;
  undefined(e);
  <?>;
  // gosub (finally 块) 261
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 261
  throw <?>;
  if (!((t == null))) goto L_110;
  t;
  goto L_111;
  undefined();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=404B file=oai_platform_services/src/OAINetworkClient
// args: t, r
// locals: n, s, this
// closure: e
function {
  this = this;
  let n;
  n = {level: t, message: r};
  if (!((undefined !== this.loggingService))) goto L_140;
  try { // catch -> L_8d
  this.loggingService.log(n);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_13f
  if (!(e.isLoggingEnabled)) goto L_e5;
  console.warn(r);
  if (!(e.isLoggingEnabled)) goto L_13c;
  console.warn("OAINetworkClient diagnostic sink failed");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(e.isLoggingEnabled)) goto L_192;
  console.warn(r);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=oai_platform_services/src/OAINetworkClient
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.platformServices = e;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=372B file=oai_platform_services/src/OAINetworkClient
// args: t
// locals: r, r#1
// closure: a, s, e
function {
  if (((undefined === t.bodyText))) goto L_4d;
  if (!((0 === t.bodyText.length))) goto L_75;
  return a(s.SerializationError);   // tail call
  try { // catch -> L_147
  let r;
  r = JSON.parse(t.bodyText);
  return {kind: s.Success, statusCode: t.statusCode, value: e.decode(r)};
  // [栈深重同步 0 -> 1]
  r#1 = <?>;
  try { // catch -> L_173
  return a(s.SerializationError);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=75B file=oai_platform_services/src/OAINetworkClient
// args: e
// locals: this
// closure: a, s
function {
  this = this;
  return this.request(e.request, function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=41B file=oai_platform_services/src/OAINetworkClient
// args: e
// locals: this
// closure: C
function {
  this = this;
  return this.request(e, C);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=41B file=oai_platform_services/src/OAINetworkClient
// args: e
// locals: this
// closure: m
function {
  this = this;
  return this.request(e, m);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=41B file=oai_platform_services/src/OAINetworkClient
// args: e
// locals: this
// closure: q
function {
  this = this;
  return this.request(e, q);   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=6 cpool=0 bc=435B file=oai_platform_services/src/OAINetworkClient
// args: e, t
// locals: n, i, o, this
// closure: g, l, a, s, r, RequestLifecycle
function {
  this = this;
  let o;
  let i;
  let n;
  n = g(e);
  if (!((undefined === n))) goto L_3e;
  return l(a(s.InvalidRequest));   // tail call
  if (!((this.platformServices == null))) goto L_68;
  this.platformServices;
  goto L_89;
  i = undefined.apiService;
  if (((undefined === i))) goto L_e2;
  if (!((undefined !== e.headers))) goto L_10c;
  if (!(!r.isVersionAtLeast(170))) goto L_10c;
  return l(a(s.Unavailable));   // tail call
  if (!((this.platformServices == null))) goto L_13b;
  this.platformServices;
  goto L_15c;
  o = new RequestLifecycle(t, undefined.loggingService);
  o.start(i, n.request);
  return o;
}

// fn <atom:0>  args=3 vars=31 closure=0 cpool=31 bc=469B file=oai_platform_services/src/OAINetworkClient
// args: require, module, exports
// locals: e, t, r, n, s, i, o, c, u, a, l, d, h, f, v, y, g, p, w, C, m, q, RequestLifecycle, <class_fields_init>, RequestLifecycle#1, OAINetworkClient, <class_fields_init>#1, OAINetworkClient#1
function {
  a = function a;
  l = function l;
  d = function d;
  h = function h;
  f = function f;
  v = function v;
  y = function y;
  g = function g;
  p = function p;
  w = function w;
  C = function C;
  m = function m;
  q = function q;
  let OAINetworkClient#1;
  let RequestLifecycle#1;
  let u;
  let c;
  let o;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAINetworkResultKind = undefined;
  exports.OAINetworkClient = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("coreutils/src/url");
  r = require("valdi_core/src/CompilerIntrinsics");
  n = require("valdi_core/src/NativeReferences");
  if ((s)) goto L_f7;
  s = {};
  exports.OAINetworkResultKind = {};
  !function <atom:0>({});
  if ((i)) goto L_105;
  i = {};
  function <atom:0>({});
  o = ["GET", "POST", "PUT", "PATCH", "DELETE"];
  c = new RegExp("[\\u0000-\\u001f\\u007f]");
  u = 8388608;
  let RequestLifecycle;
  let <class_fields_init>;
  class RequestLifecycle extends undefined { ... }
  <proto:RequestLifecycle>.start = function <atom:0>;
  <proto:RequestLifecycle>.onResponse = function <atom:0>;
  <proto:RequestLifecycle>.onFailure = function <atom:0>;
  <proto:RequestLifecycle>.cancel = function <atom:0>;
  <proto:RequestLifecycle>.canAcceptCompletion = function <atom:0>;
  <proto:RequestLifecycle>.finish = function <atom:0>;
  <proto:RequestLifecycle>.log = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:RequestLifecycle>;
  RequestLifecycle = function <atom:0>;
  // close_loc <class_fields_init>
  RequestLifecycle#1 = function <atom:0>;
  let OAINetworkClient;
  let <class_fields_init>#1;
  class OAINetworkClient extends undefined { ... }
  <proto:OAINetworkClient>.requestJson = function <atom:0>;
  <proto:OAINetworkClient>.requestText = function <atom:0>;
  <proto:OAINetworkClient>.requestEmpty = function <atom:0>;
  <proto:OAINetworkClient>.requestBytes = function <atom:0>;
  <proto:OAINetworkClient>.request = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:OAINetworkClient>;
  OAINetworkClient = function <atom:0>;
  // close_loc <class_fields_init>#1
  OAINetworkClient#1 = function <atom:0>;
  exports.OAINetworkClient = OAINetworkClient#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_platform_services/src/OAINetworkClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
