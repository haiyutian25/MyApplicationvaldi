// fn o  args=1 vars=2 closure=0 cpool=0 bc=72B file=web_platform/src/FetchRequest
// args: e
// locals: r
function {
  let r;
  if (!((e == null))) goto L_c;
  e;
  goto L_2d;
  r = undefined.requestState;
  if (!((undefined === r))) goto L_44;
  throw new TypeError("Incompatible Request receiver");
  return r;
}

// fn i  args=3 vars=4 closure=0 cpool=0 bc=150B file=web_platform/src/FetchRequest
// args: e, r, t
// locals: o
function {
  let o;
  if (!((undefined === e))) goto L_a;
  return r;
  o = "".concat(e);
  if (!(!t.includes(o))) goto L_92;
  throw new TypeError("Invalid Request option: ".concat(o));
  return o;
}

// fn n  args=1 vars=3 closure=1 cpool=2 bc=281B file=web_platform/src/FetchRequest
// args: e
// locals: t, o
// closure: r
function {
  let o;
  let t;
  t = r.byteString(e);
  if (!(!new RegExp("^[!#$%&'*+.^_`|~0-9A-Za-z-]+$").test(t))) goto L_6b;
  throw new TypeError("Invalid HTTP method");
  o = t.toUpperCase();
  if ((("CONNECT" === o))) goto L_b6;
  if ((("TRACE" === o))) goto L_b6;
  if (!(("TRACK" === o))) goto L_c7;
  throw new TypeError("Forbidden HTTP method");
  if (!(["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"].includes(o))) goto L_115;
  return o;
  return t;
}

// fn s  args=1 vars=1 closure=0 cpool=0 bc=118B file=web_platform/src/FetchRequest
// args: e
function {
  if (!((null == e))) goto L_30;
  return new AbortController().signal;
  if (!(!(e instanceof AbortSignal))) goto L_49;
  throw new TypeError("Request signal must be an AbortSignal");
  return AbortSignal.any([e]);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=web_platform/src/FetchRequest
// args: e
function {
  return (undefined !== e);
}

// fn <atom:0>  args=2 vars=16 closure=9 cpool=1 bc=4474B file=web_platform/src/FetchRequest
// args: a, d
// locals: c, l, u, h, y, p, f, g, w, m, v, r, this, arguments
// closure: <class_fields_init>, i, FetchRequest, o, t, n, r, s, e
function {
  this = this;
  arguments = <special_object 0>;
  // check_ctor
  if (!(<class_fields_init>)) goto L_14;
  <class_fields_init>.call(this);
  let v;
  let m;
  let w;
  let g;
  let f;
  let p;
  let y;
  let h;
  let u;
  let l;
  let c;
  if (!((0 === arguments.length))) goto L_4c;
  throw new TypeError("Request requires an input");
  if (!((null != d))) goto L_74;
  if (!(("object" != typeof d))) goto L_74;
  if (!(("function" != typeof d))) goto L_74;
  throw new TypeError("Request options must be a dictionary");
  if (!((d == null))) goto L_7f;
  d;
  goto L_a0;
  if (!((d == null))) goto L_ae;
  d;
  goto L_cf;
  if (!((d == null))) goto L_dd;
  d;
  goto L_fe;
  if (!((d == null))) goto L_10c;
  d;
  goto L_12d;
  if (!((d == null))) goto L_13b;
  d;
  goto L_15c;
  if (!((d == null))) goto L_16a;
  d;
  goto L_18b;
  if (!((d == null))) goto L_199;
  d;
  goto L_1ba;
  if (!((d == null))) goto L_1c8;
  d;
  goto L_1e9;
  if (!((d == null))) goto L_1f7;
  d;
  goto L_218;
  if (!((d == null))) goto L_226;
  d;
  goto L_247;
  if (!((d == null))) goto L_255;
  d;
  goto L_276;
  if (!((d == null))) goto L_284;
  d;
  goto L_2a5;
  if (!((d == null))) goto L_2b3;
  d;
  goto L_2d4;
  if (!((d == null))) goto L_2e2;
  d;
  goto L_303;
  if (!((d == null))) goto L_311;
  d;
  goto L_332;
  d = {body: undefined.body, cache: undefined.cache, credentials: undefined.credentials, duplex: undefined.duplex, headers: undefined.headers, integrity: undefined.integrity, keepalive: undefined.keepalive, method: undefined.method, mode: undefined.mode, priority: undefined.priority, redirect: undefined.redirect, referrer: undefined.referrer, referrerPolicy: undefined.referrerPolicy, signal: undefined.signal, window: undefined.window};
  if (!((undefined !== {body: undefined.body, cache: undefined.cache, credentials: undefined.credentials, duplex: undefined.duplex, headers: undefined.headers, integrity: undefined.integrity, keepalive: undefined.keepalive, method: undefined.method, mode: undefined.mode, priority: undefined.priority, redirect: undefined.redirect, referrer: undefined.referrer, referrerPolicy: undefined.referrerPolicy, signal: undefined.signal, window: undefined.window}.window))) goto L_391;
  if (!((null !== d.window))) goto L_391;
  throw new TypeError("Request window must be null");
  c = Object.values(d).some(function <atom:0>);
  i(d.priority, "auto", ["auto", "high", "low"]);
  if (!((a instanceof FetchRequest))) goto L_42a;
  goto L_42b;
  // [栈深重同步 1 -> 0]
  l = undefined;
  if (!((undefined === l))) goto L_461;
  goto L_485;
  // [栈深重同步 3 -> 2]
  u = new URL(l.url);
  if ((u.username)) goto L_4d5;
  if (!(u.password)) goto L_4e6;
  throw new TypeError("Request URL must not contain credentials");
  if (!((d == null))) goto L_4f0;
  d;
  goto L_511;
  if (!((undefined === undefined.method))) goto L_54c;
  if (!((l == null))) goto L_51f;
  l;
  goto L_540;
  if (!((undefined.method == null))) goto L_572;
  undefined.method;
  goto L_572;
  // [栈深重同步 1 -> 0]
  h = n(d.method);
  if (!((d == null))) goto L_5a2;
  d;
  goto L_5c3;
  if (!((undefined === undefined.headers))) goto L_61b;
  if (!((undefined === l))) goto L_5d0;
  goto L_63d;
  // [栈深重同步 3 -> 2]
  goto L_63d;
  // [栈深重同步 3 -> 2]
  y = new r.FetchHeaders(d.headers);
  if (!((d == null))) goto L_64c;
  d;
  goto L_66d;
  if (!((l == null))) goto L_678;
  l;
  goto L_699;
  if (!((undefined.mode == null))) goto L_6a3;
  undefined.mode;
  p = i(undefined.mode, "cors", ["cors", "no-cors", "same-origin", "navigate"]);
  if (!(("navigate" === p))) goto L_6d7;
  throw new TypeError("Request mode cannot be navigate");
  if (!(("no-cors" === p))) goto L_72d;
  if (!(!["GET", "HEAD", "POST"].includes(h))) goto L_72d;
  throw new TypeError("Method is not allowed in no-cors mode");
  if (!((d == null))) goto L_737;
  d;
  goto L_758;
  if (!((l == null))) goto L_763;
  l;
  goto L_784;
  if (!((undefined.cache == null))) goto L_78e;
  undefined.cache;
  f = i(undefined.cache, "default", ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"]);
  if (!(("only-if-cached" === f))) goto L_7d7;
  if (!(("same-origin" !== p))) goto L_7d7;
  throw new TypeError("only-if-cached requires same-origin mode");
  if (!((d == null))) goto L_7e1;
  d;
  goto L_802;
  if (!((undefined === undefined.keepalive))) goto L_83a;
  if (!((l == null))) goto L_810;
  l;
  goto L_831;
  if (!((undefined.keepalive == null))) goto L_85e;
  undefined.keepalive;
  goto L_85e;
  // [栈深重同步 1 -> 0]
  g = !!d.keepalive;
  if (!((undefined === d.referrer))) goto L_8cb;
  if (!(c)) goto L_893;
  goto L_912;
  // [栈深重同步 1 -> 0]
  if (!((l == null))) goto L_89e;
  l;
  goto L_8bf;
  if (!((undefined.referrer == null))) goto L_912;
  undefined.referrer;
  goto L_912;
  // [栈深重同步 1 -> 0]
  w = t.usvString(d.referrer);
  if (!(("" !== w))) goto L_95b;
  if (!(("about:client" !== w))) goto L_95b;
  w = new URL(w).href;
  new URL(w).href;
  if (!((d == null))) goto L_9a3;
  d;
  goto L_9c4;
  if (!((undefined === undefined.signal))) goto L_9f5;
  if (!((l == null))) goto L_9d2;
  l;
  goto L_a17;
  goto L_a17;
  // [栈深重同步 3 -> 2]
  if (!((d == null))) goto L_a2f;
  d;
  goto L_a50;
  if (!((l == null))) goto L_a5b;
  l;
  goto L_a7c;
  if (!((undefined.credentials == null))) goto L_a86;
  undefined.credentials;
  if (!((d == null))) goto L_ab0;
  d;
  goto L_ad1;
  if (!((l == null))) goto L_adc;
  l;
  goto L_afd;
  if (!((undefined.redirect == null))) goto L_b07;
  undefined.redirect;
  if (!((d == null))) goto L_b31;
  d;
  goto L_b52;
  if (!(c)) goto L_b5a;
  goto L_b8c;
  // [栈深重同步 4 -> 3]
  if (!((l == null))) goto L_b65;
  l;
  goto L_b86;
  if (!((undefined.referrerPolicy == null))) goto L_b8c;
  undefined.referrerPolicy;
  if (!((d == null))) goto L_bc8;
  d;
  goto L_be9;
  if (!((undefined === undefined.integrity))) goto L_c20;
  if (!((l == null))) goto L_bf7;
  l;
  goto L_c18;
  if (!((undefined.integrity == null))) goto L_c67;
  undefined.integrity;
  goto L_c67;
  // [栈深重同步 2 -> 1]
  m = {url: u.href, method: h, headers: y, signal: s(d.signal), mode: p, credentials: i(undefined.credentials, "same-origin", ["omit", "same-origin", "include"]), cache: f, redirect: i(undefined.redirect, "follow", ["follow", "error", "manual"]), referrer: w, referrerPolicy: i(undefined.referrerPolicy, "", ["", "no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "same-origin", "strict-origin", "strict-origin-when-cross-origin", "unsafe-url"]), integrity: "".concat(d.integrity), keepalive: g};
  if (!((d == null))) goto L_c80;
  d;
  goto L_ca1;
  if (!((undefined !== undefined.duplex))) goto L_d02;
  if (!(("half" != "".concat(d.duplex)))) goto L_d02;
  throw new TypeError("Request duplex must be half");
  v = undefined;
  if (!((d == null))) goto L_d0f;
  d;
  goto L_d30;
  if (!((undefined !== undefined.body))) goto L_e5a;
  if (!((null !== d.body))) goto L_e5a;
  v = e.extractBody(d.body);
  e.extractBody(d.body);
  if (!((undefined === v.replay))) goto L_eff;
  if (!((null !== v.stream))) goto L_eff;
  if (!((undefined === d.duplex))) goto L_e36;
  throw new TypeError("Streaming request bodies require duplex: half");
  if ((g)) goto L_e46;
  if (!(("no-cors" === p))) goto L_eff;
  throw new TypeError("Streaming body is not allowed with keepalive or no-cors");
  if (!((a instanceof FetchRequest))) goto L_ed5;
  let r;
  r = e.bodyState(a);
  if (!(e.unusable(r))) goto L_ec5;
  throw new TypeError("Input Request body is locked or already used");
  null;
  r;
  v = {};
  {};
  goto L_eff;
  v = e.emptyBody();
  e.emptyBody();
  if ((("GET" === h))) goto L_f15;
  if (!(("HEAD" === h))) goto L_f4e;
  if (!((null !== v.stream))) goto L_f4e;
  throw new TypeError("GET and HEAD requests cannot have a body");
  if (!((null !== v.stream))) goto L_fbf;
  if (!((undefined === v.replay))) goto L_fbf;
  if ((g)) goto L_fae;
  if (!(("no-cors" === p))) goto L_fbf;
  throw new TypeError("Streaming body is not allowed with keepalive or no-cors");
  if (((undefined === v.type))) goto L_106c;
  if ((y.has("content-type"))) goto L_106c;
  y.append("content-type", v.type);
  if (!((a instanceof FetchRequest))) goto L_113d;
  if (!((d == null))) goto L_1083;
  d;
  goto L_10a4;
  if (((undefined === undefined.body))) goto L_10cd;
  if (!((null === d.body))) goto L_113d;
  if (!((v.stream == null))) goto L_1100;
  v.stream;
  goto L_112d;
  if (!((undefined.pipeThrough(new TransformStream()) == null))) goto L_1133;
  undefined.pipeThrough(new TransformStream());
  v.stream = null;
  null;
  this.requestState = m;
  e.setBody(this, v, y);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  return o(this).url;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  return o(this).method;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  return o(this).headers;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  return o(this).signal;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  return o(this).mode;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  return o(this).credentials;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  return o(this).cache;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  return o(this).redirect;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  return o(this).referrer;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  return o(this).referrerPolicy;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  return o(this).integrity;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  return o(this).keepalive;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=8B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  o(this);
  return "";
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=12B file=web_platform/src/FetchRequest
// locals: this
// closure: o
function {
  this = this;
  o(this);
  return "half";
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=0 bc=365B file=web_platform/src/FetchRequest
// locals: t, i, n, this
// closure: o, r, FetchRequest, s, e
function {
  this = this;
  let n;
  let i;
  let t;
  t = o(this);
  i = new r.FetchHeaders(r.headerEntries(t.headers));
  n = Object.create(FetchRequest.prototype);
  null;
  t;
  n.requestState = {headers: i, signal: s(t.signal)};
  e.setBody(n, e.cloneBody(this), i);
  return n;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=46B file=web_platform/src/FetchRequest
// args: e
// closure: FetchRequest
function {
  if (!((e instanceof FetchRequest))) goto L_2d;
  return (undefined !== e.requestState);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=21 bc=512B file=web_platform/src/FetchRequest
// args: require, module, exports
// locals: e, r, t, o, i, n, s, FetchRequest, <class_fields_init>, FetchRequest#1
function {
  o = function o;
  i = function i;
  n = function n;
  s = function s;
  let FetchRequest#1;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.requestState = undefined;
  exports.FetchRequest = undefined;
  e = require("./FetchBody");
  r = require("./FetchHeaders");
  t = require("./WebIDL");
  exports.requestState = o;
  let FetchRequest;
  let <class_fields_init>;
  class FetchRequest extends undefined { ... }
  <proto:FetchRequest>.url = function <atom:0>;
  <proto:FetchRequest>.method = function <atom:0>;
  <proto:FetchRequest>.headers = function <atom:0>;
  <proto:FetchRequest>.signal = function <atom:0>;
  <proto:FetchRequest>.mode = function <atom:0>;
  <proto:FetchRequest>.credentials = function <atom:0>;
  <proto:FetchRequest>.cache = function <atom:0>;
  <proto:FetchRequest>.redirect = function <atom:0>;
  <proto:FetchRequest>.referrer = function <atom:0>;
  <proto:FetchRequest>.referrerPolicy = function <atom:0>;
  <proto:FetchRequest>.integrity = function <atom:0>;
  <proto:FetchRequest>.keepalive = function <atom:0>;
  <proto:FetchRequest>.destination = function <atom:0>;
  <proto:FetchRequest>.duplex = function <atom:0>;
  <proto:FetchRequest>.clone = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FetchRequest>;
  FetchRequest = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc FetchRequest
  FetchRequest#1 = function <atom:0>;
  exports.FetchRequest = FetchRequest#1;
  Object.defineProperty(FetchRequest#1.prototype, Symbol.toStringTag, {value: "Request", configurable: true});
  e.installBodyMixin(FetchRequest#1.prototype, function <atom:0>);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=web_platform/src/FetchRequest
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
