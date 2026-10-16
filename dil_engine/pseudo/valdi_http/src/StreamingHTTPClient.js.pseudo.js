// fn r  args=3 vars=5 closure=0 cpool=0 bc=117B file=valdi_http/src/StreamingHTTPClient
// args: t, e, r
// locals: s, i
function {
  if (!(t)) goto L_74;
  let s;
  for (const s of t) {
    let i;
    i = t[s];
    if (!((undefined !== i))) goto L_6e;
    e.push(s);
    r.push(i);
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return;
}

// fn s  args=2 vars=5 closure=0 cpool=0 bc=133B file=valdi_http/src/StreamingHTTPClient
// args: t, e
// locals: r, s, i
function {
  let s;
  let r;
  r = {};
  s = Math.min(t.length, e.length);
  let i;
  i = 0;
  if (!((i < s))) goto L_81;
  r[t[i].toLowerCase()] = e[i];
  i = <i_new>;
  (i++);
  goto L_3b;
  return r;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=39B file=valdi_http/src/StreamingHTTPClient
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.callbacks = t;
  this.active = true;
  return;
}

// fn <atom:0>  args=4 vars=9 closure=2 cpool=0 bc=209B file=valdi_http/src/StreamingHTTPClient
// args: t, s, i, a
// locals: n, o, h, c, this
// closure: r, e
function {
  this = this;
  let c;
  let h;
  let o;
  let n;
  n = [];
  o = [];
  r(i, n, o);
  if (!((a instanceof Uint8Array))) goto L_2d;
  goto L_3d;
  // [栈深重同步 1 -> 0]
  if (!(a)) goto L_3c;
  goto L_3d;
  // [栈深重同步 1 -> 0]
  h = undefined;
  c = e.startStreamingRequest(t, s, n, o, h, this);
  if (!(this.active)) goto L_a9;
  this.nativeRequest = c;
  goto L_d0;
  // [栈深重同步 1 -> 0]
  c.cancel();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=144B file=valdi_http/src/StreamingHTTPClient
// locals: this
function {
  this = this;
  if (!(this.active)) goto L_8f;
  this.active = false;
  if (!((this.nativeRequest == null))) goto L_5e;
  this.nativeRequest;
  goto L_82;
  undefined.cancel();
  this.nativeRequest = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=127B file=valdi_http/src/StreamingHTTPClient
// args: t, e, r
// locals: this
// closure: s
function {
  this = this;
  if (!(this.active)) goto L_7e;
  this.callbacks.onResponse({statusCode: t, headers: s(e, r)});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=112B file=valdi_http/src/StreamingHTTPClient
// args: t
// locals: this
function {
  this = this;
  if (!(this.active)) goto L_6f;
  this.callbacks.onData(t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=224B file=valdi_http/src/StreamingHTTPClient
// args: t
// locals: this
function {
  this = this;
  if (!(this.active)) goto L_df;
  this.active = false;
  this.nativeRequest = undefined;
  if (!((undefined === t))) goto L_8f;
  goto L_df;
  // [栈深重同步 1 -> 0]
  this.callbacks.onError(new Error(t));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_http/src/StreamingHTTPClient
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.baseUrl = t;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=265B file=valdi_http/src/StreamingHTTPClient
// args: e, r
// locals: s, this
// closure: StreamingHTTPRequestImpl, t
function {
  this = this;
  let s;
  s = new StreamingHTTPRequestImpl(r);
  s.start(t.resolveHTTPURL(this.baseUrl, e.pathOrUrl), e.method, e.headers, e.body);
  return s;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=63B file=valdi_http/src/StreamingHTTPClient
// args: t, e, r
// locals: this
function {
  this = this;
  return this.perform({pathOrUrl: t, method: "GET", headers: r}, e);   // tail call
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=69B file=valdi_http/src/StreamingHTTPClient
// args: t, e, r, s
// locals: this
function {
  this = this;
  return this.perform({pathOrUrl: t, method: "POST", headers: s, body: e}, r);   // tail call
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=69B file=valdi_http/src/StreamingHTTPClient
// args: t, e, r, s
// locals: this
function {
  this = this;
  return this.perform({pathOrUrl: t, method: "PUT", headers: s, body: e}, r);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=63B file=valdi_http/src/StreamingHTTPClient
// args: t, e, r
// locals: this
function {
  this = this;
  return this.perform({pathOrUrl: t, method: "DELETE", headers: r}, e);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=63B file=valdi_http/src/StreamingHTTPClient
// args: t, e, r
// locals: this
function {
  this = this;
  return this.perform({pathOrUrl: t, method: "HEAD", headers: r}, e);   // tail call
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=15 bc=255B file=valdi_http/src/StreamingHTTPClient
// args: require, module, exports
// locals: t, e, r, s, StreamingHTTPRequestImpl, <class_fields_init>, StreamingHTTPRequestImpl#1, StreamingHTTPClient, <class_fields_init>#1, StreamingHTTPClient#1
function {
  r = function r;
  s = function s;
  let StreamingHTTPClient#1;
  let StreamingHTTPRequestImpl#1;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.StreamingHTTPClient = undefined;
  t = require("./HTTPURL");
  e = require("./NativeStreamingHTTPClient");
  let StreamingHTTPRequestImpl;
  let <class_fields_init>;
  class StreamingHTTPRequestImpl extends undefined { ... }
  <proto:StreamingHTTPRequestImpl>.start = function <atom:0>;
  <proto:StreamingHTTPRequestImpl>.cancel = function <atom:0>;
  <proto:StreamingHTTPRequestImpl>.onResponse = function <atom:0>;
  <proto:StreamingHTTPRequestImpl>.onData = function <atom:0>;
  <proto:StreamingHTTPRequestImpl>.onComplete = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:StreamingHTTPRequestImpl>;
  StreamingHTTPRequestImpl = function <atom:0>;
  // close_loc <class_fields_init>
  StreamingHTTPRequestImpl#1 = function <atom:0>;
  let StreamingHTTPClient;
  let <class_fields_init>#1;
  class StreamingHTTPClient extends undefined { ... }
  <proto:StreamingHTTPClient>.perform = function <atom:0>;
  <proto:StreamingHTTPClient>.get = function <atom:0>;
  <proto:StreamingHTTPClient>.post = function <atom:0>;
  <proto:StreamingHTTPClient>.put = function <atom:0>;
  <proto:StreamingHTTPClient>.delete = function <atom:0>;
  <proto:StreamingHTTPClient>.head = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:StreamingHTTPClient>;
  StreamingHTTPClient = function <atom:0>;
  // close_loc <class_fields_init>#1
  StreamingHTTPClient#1 = function <atom:0>;
  exports.StreamingHTTPClient = StreamingHTTPClient#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_http/src/StreamingHTTPClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
