// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_http/src/HTTPClient
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.baseUrl = e;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=12B file=valdi_http/src/HTTPClient
// args: r, t
// closure: e, T
function {
  if (!(r)) goto L_8;
  goto L_b;
  // [栈深重同步 1 -> 0]
  T(t);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=8 cpool=1 bc=171B file=valdi_http/src/HTTPClient
// args: e, T
// locals: u, u#1
// closure: t, this, o, s, i, l, n, r
function {
  try { // catch -> L_9e
  let u;
  u = {url: t.resolveHTTPURL(this.baseUrl, o), method: s, headers: i, body: l};
  n = r.performRequest(u, function <atom:0>);
  r.performRequest(u, function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  u#1 = <?>;
  try { // catch -> L_aa
  T(u#1);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=12B file=valdi_http/src/HTTPClient
// closure: n
function {
  if (!((n == null))) goto L_a;
  n;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>();
}

// fn <atom:0>  args=4 vars=7 closure=3 cpool=2 bc=66B file=valdi_http/src/HTTPClient
// args: o, s, i, l
// locals: n, T, this
// closure: t, r, e
function {
  this = this;
  let T;
  let n;
  n = undefined;
  T = new Promise(function <atom:0>);
  return e.promiseToCancelablePromise(T, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=47B file=valdi_http/src/HTTPClient
// args: e, r
// locals: this
function {
  this = this;
  return this.perform(e, "GET", r, undefined);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=47B file=valdi_http/src/HTTPClient
// args: e, r, t
// locals: this
function {
  this = this;
  return this.perform(e, "PUT", t, r);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=47B file=valdi_http/src/HTTPClient
// args: e, r, t
// locals: this
function {
  this = this;
  return this.perform(e, "POST", t, r);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=47B file=valdi_http/src/HTTPClient
// args: e, r
// locals: this
function {
  this = this;
  return this.perform(e, "DELETE", r, undefined);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=47B file=valdi_http/src/HTTPClient
// args: e, r
// locals: this
function {
  this = this;
  return this.perform(e, "HEAD", r, undefined);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=7 bc=190B file=valdi_http/src/HTTPClient
// args: require, module, exports
// locals: e, r, t, HTTPClient, <class_fields_init>, HTTPClient#1
function {
  let HTTPClient#1;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HTTPClient = undefined;
  e = require("valdi_core/src/CancelablePromise");
  r = require("./NativeHTTPClient");
  t = require("./HTTPURL");
  let HTTPClient;
  let <class_fields_init>;
  class HTTPClient extends undefined { ... }
  <proto:HTTPClient>.perform = function <atom:0>;
  <proto:HTTPClient>.get = function <atom:0>;
  <proto:HTTPClient>.put = function <atom:0>;
  <proto:HTTPClient>.post = function <atom:0>;
  <proto:HTTPClient>.delete = function <atom:0>;
  <proto:HTTPClient>.head = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:HTTPClient>;
  HTTPClient = function <atom:0>;
  // close_loc <class_fields_init>
  HTTPClient#1 = function <atom:0>;
  exports.HTTPClient = HTTPClient#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_http/src/HTTPClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
