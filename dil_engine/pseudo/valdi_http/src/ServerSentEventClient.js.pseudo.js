// fn i  args=2 vars=2 closure=0 cpool=0 bc=40B file=valdi_http/src/ServerSentEventClient
// args: t, e
function {
  return t[e.toLowerCase()];
}

// fn o  args=3 vars=3 closure=0 cpool=0 bc=41B file=valdi_http/src/ServerSentEventClient
// args: t, e, n
function {
  t[e.toLowerCase()] = n;
  return;
}

// fn h  args=1 vars=4 closure=0 cpool=0 bc=97B file=valdi_http/src/ServerSentEventClient
// args: t
// locals: e, n, s
function {
  let e;
  e = {};
  if (!(!t)) goto L_d;
  return e;
  let n;
  for (const n of t) {
    let s;
    s = t[n];
    if (!((undefined !== s))) goto L_57;
    e[n.toLowerCase()] = s;
    s;
  }
  <catch>;
  return e;
}

// fn c  args=1 vars=2 closure=2 cpool=0 bc=177B file=valdi_http/src/ServerSentEventClient
// args: t
// locals: e
// closure: i, s
function {
  let e;
  e = i(t.headers, "content-type");
  if (!((e == null))) goto L_38;
  e;
  goto L_ac;
  return (undefined.split(";", 1)[0].trim().toLowerCase() === s);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=112B file=valdi_http/src/ServerSentEventClient
// args: t
// closure: this
function {
  if (!((2 !== this.state))) goto L_6f;
  this.callbacks.onEvent(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=valdi_http/src/ServerSentEventClient
// args: t
// closure: this
function {
  this.reconnectionTimeMs = t;
  return;
}

// fn <atom:0>  args=4 vars=5 closure=4 cpool=2 bc=467B file=valdi_http/src/ServerSentEventClient
// args: t, s, i, o
// locals: this
// closure: <class_fields_init>, n, r, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.httpClient = t;
  this.pathOrUrl = s;
  this.callbacks = i;
  this.options = o;
  this.attemptId = 0;
  this.state = 0;
  if (!((o.method == null))) goto L_7e;
  o.method;
  this.method = "GET";
  if (!((o.reconnect == null))) goto L_d7;
  o.reconnect;
  this.shouldReconnect = ("GET" === this.method);
  if (!((o.reconnectionTimeMs == null))) goto L_131;
  o.reconnectionTimeMs;
  this.reconnectionTimeMs = Math.min(n, r);
  this.parser = new e.ServerSentEventParser({onEvent: function <atom:0>, onRetry: function <atom:0>}, o.lastEventId);
  this.connect();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_http/src/ServerSentEventClient
// locals: this
function {
  this = this;
  return this.state;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_http/src/ServerSentEventClient
// locals: this
function {
  this = this;
  return this.parser.lastEventId;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=355B file=valdi_http/src/ServerSentEventClient
// locals: this
function {
  this = this;
  if (!((2 !== this.state))) goto L_162;
  this.state = 2;
  this.attemptId = (this.attemptId ++);
  if (!((undefined !== this.reconnectTimer))) goto L_c1;
  clearTimeout(this.reconnectTimer);
  this.reconnectTimer = undefined;
  undefined;
  if (!((this.request == null))) goto L_ec;
  this.request;
  goto L_110;
  undefined.cancel();
  this.request = undefined;
  this.parser.finish();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=469B file=valdi_http/src/ServerSentEventClient
// args: n
// closure: this, t, c, e
function {
  if (!(this.isCurrentAttempt(t))) goto L_1d4;
  if (!((204 !== n.statusCode))) goto L_1a1;
  if (!((200 === n.statusCode))) goto L_126;
  if (!(c(n))) goto L_f0;
  e = true;
  true;
  this.state = 1;
  if (!((this.callbacks.onOpen == null))) goto L_e9;
  this.callbacks.onOpen;
  this.callbacks;
  goto L_1d4;
  // [栈深重同步 1 -> 2]
  goto L_1d4;
  // [栈深重同步 1 -> 0]
  goto L_1d4;
  // [栈深重同步 1 -> 0]
  goto L_1d4;
  // [栈深重同步 1 -> 0]
  this.failPermanently(new Error("The SSE endpoint returned 204 No Content"));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=123B file=valdi_http/src/ServerSentEventClient
// args: n
// closure: this, t, e
function {
  if (!(this.isCurrentAttempt(t))) goto L_7a;
  if (!(e)) goto L_7a;
  this.parser.push(n);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=96B file=valdi_http/src/ServerSentEventClient
// closure: this, t
function {
  if (!(this.isCurrentAttempt(t))) goto L_5f;
  this.finishAttempt(new Error("The SSE connection closed"));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=83B file=valdi_http/src/ServerSentEventClient
// args: e
// closure: this, t
function {
  if (!(this.isCurrentAttempt(t))) goto L_52;
  this.finishAttempt(e);
  return;
}

// fn <atom:0>  args=0 vars=6 closure=4 cpool=4 bc=763B file=valdi_http/src/ServerSentEventClient
// locals: t, e, n, r, i, this
// closure: c, h, o, s
function {
  this = this;
  let i;
  let r;
  let n;
  let e;
  let t;
  if (!((2 === this.state))) goto L_3a;
  return;
  this.state = 0;
  this.attemptId = (this.attemptId ++);
  t = (this.attemptId ++);
  e = false;
  n = {onResponse: function <atom:0>, onData: function <atom:0>, onComplete: function <atom:0>, onError: function <atom:0>};
  r = h(this.options.headers);
  o(r, "Accept", s);
  o(r, "Cache-Control", "no-cache");
  if (!((this.parser.lastEventId.length > 0))) goto L_1a8;
  o(r, "Last-Event-ID", this.parser.lastEventId);
  i = this.httpClient.perform({pathOrUrl: this.pathOrUrl, method: this.method, headers: r, body: this.options.body}, n);
  if (!(this.isCurrentAttempt(t))) goto L_2d3;
  this.request = i;
  goto L_2fa;
  // [栈深重同步 1 -> 0]
  i.cancel();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=79B file=valdi_http/src/ServerSentEventClient
// args: t
// locals: this
function {
  this = this;
  if (!((2 !== this.state))) goto L_4e;
  return (t === this.attemptId);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=valdi_http/src/ServerSentEventClient
// locals: this
function {
  this = this;
  return (2 === this.state);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=49B file=valdi_http/src/ServerSentEventClient
// closure: this
function {
  this.reconnectTimer = undefined;
  this.connect();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=401B file=valdi_http/src/ServerSentEventClient
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.request;
  this.request = undefined;
  this.attemptId = (this.attemptId ++);
  if (!((e == null))) goto L_6a;
  e;
  goto L_8e;
  undefined.cancel();
  this.parser.finish();
  this.state = 0;
  if (!((this.callbacks.onError == null))) goto L_12d;
  this.callbacks.onError;
  this.callbacks;
  goto L_131;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, t);
  if ((this.isClosed())) goto L_190;
  this.reconnectTimer = setTimeout(function <atom:0>, this.reconnectionTimeMs);
  setTimeout(function <atom:0>, this.reconnectionTimeMs);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=117B file=valdi_http/src/ServerSentEventClient
// args: t
// locals: this
function {
  this = this;
  if (!(this.shouldReconnect)) goto L_4e;
  goto L_74;
  // [栈深重同步 1 -> 0]
  this.failPermanently(t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=306B file=valdi_http/src/ServerSentEventClient
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.request;
  this.request = undefined;
  this.attemptId = (this.attemptId ++);
  this.state = 2;
  this.parser.finish();
  if (!((e == null))) goto L_bc;
  e;
  goto L_e0;
  undefined.cancel();
  if (!((this.callbacks.onError == null))) goto L_12d;
  this.callbacks.onError;
  this.callbacks;
  goto L_131;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_http/src/ServerSentEventClient
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.httpClient = t;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=49B file=valdi_http/src/ServerSentEventClient
// args: e
// closure: ServerSentEventClient, t
function {
  return new ServerSentEventClient(new t.StreamingHTTPClient(e));
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=2 bc=373B file=valdi_http/src/ServerSentEventClient
// args: t, e, n
// locals: t#1, e#1, n#1, this
// closure: ServerSentEventConnectionImpl
function {
  this = this;
  let n#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((n === undefined))) goto L_17;
  n;
  n = {};
  n#1 = {};
  if (!((undefined !== n.reconnectionTimeMs))) goto L_c6;
  if ((!Number.isFinite(n.reconnectionTimeMs))) goto L_b5;
  if (!((n.reconnectionTimeMs < 0))) goto L_c6;
  throw new Error("reconnectionTimeMs must be non-negative");
  if (!((undefined !== n.lastEventId))) goto L_148;
  if (!(new RegExp("[\\0\\r\\n]").test(n.lastEventId))) goto L_148;
  throw new Error("lastEventId must not contain null or newline characters");
  return new ServerSentEventConnectionImpl(this.httpClient, t, e, n);
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=17 bc=296B file=valdi_http/src/ServerSentEventClient
// args: require, module, exports
// locals: t, e, n, s, r, i, o, h, c, ServerSentEventConnectionImpl, <class_fields_init>, ServerSentEventConnectionImpl#1, ServerSentEventClient, <class_fields_init>#1, ServerSentEventClient#1
function {
  i = function i;
  o = function o;
  h = function h;
  c = function c;
  let ServerSentEventClient#1;
  let ServerSentEventConnectionImpl#1;
  let r;
  let s;
  let n;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ServerSentEventClient = undefined;
  t = require("./StreamingHTTPClient");
  e = require("./ServerSentEventParser");
  n = 3000;
  s = "text/event-stream";
  r = 2147483647;
  let ServerSentEventConnectionImpl;
  let <class_fields_init>;
  class ServerSentEventConnectionImpl extends undefined { ... }
  <proto:ServerSentEventConnectionImpl>.readyState = function <atom:0>;
  <proto:ServerSentEventConnectionImpl>.lastEventId = function <atom:0>;
  <proto:ServerSentEventConnectionImpl>.close = function <atom:0>;
  <proto:ServerSentEventConnectionImpl>.connect = function <atom:0>;
  <proto:ServerSentEventConnectionImpl>.isCurrentAttempt = function <atom:0>;
  <proto:ServerSentEventConnectionImpl>.isClosed = function <atom:0>;
  <proto:ServerSentEventConnectionImpl>.reconnect = function <atom:0>;
  <proto:ServerSentEventConnectionImpl>.finishAttempt = function <atom:0>;
  <proto:ServerSentEventConnectionImpl>.failPermanently = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ServerSentEventConnectionImpl>;
  ServerSentEventConnectionImpl = function <atom:0>;
  // close_loc <class_fields_init>
  ServerSentEventConnectionImpl#1 = function <atom:0>;
  let ServerSentEventClient;
  let <class_fields_init>#1;
  class ServerSentEventClient extends undefined { ... }
  function <atom:0>.withBaseUrl = function <atom:0>;
  <proto:ServerSentEventClient>.connect = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ServerSentEventClient>;
  ServerSentEventClient = function <atom:0>;
  // close_loc <class_fields_init>#1
  // close_loc ServerSentEventClient
  ServerSentEventClient#1 = function <atom:0>;
  exports.ServerSentEventClient = ServerSentEventClient#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_http/src/ServerSentEventClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
