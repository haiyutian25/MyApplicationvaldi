// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=63B file=valdi_http/src/HTTPServer
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.connection = e;
  this.didClose = t;
  this.closeListeners = [];
  this.isClosed = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_http/src/HTTPServer
// locals: this
function {
  this = this;
  return this.isClosed;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=368B file=valdi_http/src/HTTPServer
// args: e
// locals: t, this
// closure: u, f
function {
  this = this;
  let t;
  if (!(this.isClosed)) goto L_2a;
  return;
  t = u(e);
  if (!((0 !== t.length))) goto L_16f;
  this.connection.send(f("".concat(t.length.toString(16), "
")));
  this.connection.send(t);
  this.connection.send(f("
"));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=156B file=valdi_http/src/HTTPServer
// locals: this
// closure: f
function {
  this = this;
  if ((this.isClosed)) goto L_9b;
  this.connection.send(f("0

"));
  this.finish();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=114B file=valdi_http/src/HTTPServer
// args: e
// locals: this
function {
  this = this;
  if (!(this.isClosed)) goto L_2a;
  goto L_71;
  // [栈深重同步 1 -> 0]
  this.closeListeners.push(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=valdi_http/src/HTTPServer
// locals: this
function {
  this = this;
  this.finish();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=162B file=valdi_http/src/HTTPServer
// locals: e, t, this
function {
  this = this;
  let e;
  if (!(this.isClosed)) goto L_2a;
  return;
  this.isClosed = true;
  this.didClose();
  e = this.closeListeners;
  this.closeListeners = [];
  let t;
  for (const t of e) {
    t();
  }
  return;
}

// fn a  args=2 vars=3 closure=2 cpool=0 bc=83B file=valdi_http/src/HTTPServer
// args: e, t
// locals: n
// closure: r, o
function {
  let n;
  n = t;
  if (!((n <= (e.length - 4)))) goto L_51;
  if (!((e[n] === r))) goto L_45;
  if (!((e[(n + 1)] === o))) goto L_45;
  if (!((e[(n + 2)] === r))) goto L_45;
  if (!((e[(n + 3)] === o))) goto L_45;
  return n;
  n = (n + 1);
  (n + 1);
  goto L_5;
  return -1;
}

// fn d  args=1 vars=1 closure=1 cpool=0 bc=109B file=valdi_http/src/HTTPServer
// args: e
// closure: i
function {
  return i.decode(e.slice().buffer);   // tail call
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=40B file=valdi_http/src/HTTPServer
// args: e
// closure: c
function {
  return c.encode(e);   // tail call
}

// fn u  args=1 vars=1 closure=1 cpool=0 bc=52B file=valdi_http/src/HTTPServer
// args: e
// closure: f
function {
  if (!((undefined === e))) goto L_10;
  return new Uint8Array(0);
  if (!(("string" == typeof e))) goto L_1e;
  return f(e);
  if (!((e instanceof Uint8Array))) goto L_29;
  return e;
  return new Uint8Array(e);
}

// fn h  args=1 vars=6 closure=0 cpool=0 bc=300B file=valdi_http/src/HTTPServer
// args: e
// locals: t, n, e#1, s, r
function {
  let t;
  t = {};
  let n;
  for (const n of e) {
    let r;
    let s;
    let e#1;
    e#1 = n.indexOf(":");
    if (((e#1 < 0))) continue;
    s = n.substring(0, e#1).trim().toLowerCase();
    r = n.substring((e#1 + 1)).trim();
    t[s] = r;
  }
  return t;
}

// fn l  args=1 vars=2 closure=0 cpool=0 bc=162B file=valdi_http/src/HTTPServer
// args: e
// locals: t
function {
  let t;
  t = e.indexOf("?");
  if (!((t < 0))) goto L_43;
  return {path: e, queryString: ""};
  return {path: e.substring(0, t), queryString: e.substring((t + 1))};
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=105B file=valdi_http/src/HTTPServer
// args: e
function {
  if (!((e === 200))) goto L_e;
  return "OK";
  if (!((e === 201))) goto L_1b;
  return "Created";
  if (!((e === 204))) goto L_28;
  return "No Content";
  if (!((e === 400))) goto L_35;
  return "Bad Request";
  if (!((e === 403))) goto L_42;
  return "Forbidden";
  if (!((e === 404))) goto L_4f;
  return "Not Found";
  if (!((e === 405))) goto L_5c;
  return "Method Not Allowed";
  if (!((e === 500))) goto L_8;
  return "Internal Server Error";
}

// fn v  args=2 vars=3 closure=0 cpool=0 bc=160B file=valdi_http/src/HTTPServer
// args: e, t
// locals: n
function {
  let n;
  if (!((t.headers == null))) goto L_36;
  t.headers;
  null;
  {};
  n = {connection: "keep-alive"};
  if (!((undefined === t.stream))) goto L_81;
  delete "transfer-encoding";
  n["content-length"] = String(e.length);
  goto L_9b;
  // [栈深重同步 2 -> 0]
  delete "content-length";
  n["transfer-encoding"] = "chunked";
  "chunked";
  return n;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=38B file=valdi_http/src/HTTPServer
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.handler = e;
  this.connections = {};
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=124B file=valdi_http/src/HTTPServer
// locals: this
function {
  this = this;
  if (!(!this.nativeServer)) goto L_36;
  throw new Error("HTTPServer has not been started");
  return this.nativeServer.getPort();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=113B file=valdi_http/src/HTTPServer
// locals: this
function {
  this = this;
  if (!(this.nativeServer)) goto L_6d;
  return this.nativeServer.getAddresses();
  return [];
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=117B file=valdi_http/src/HTTPServer
// args: t, n
// closure: this, e
function {
  this.connections[String(t)] = {connection: n, buffer: new e.ByteBuffer(), connected: true, readOffset: 0, responseStreams: []};
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=239B file=valdi_http/src/HTTPServer
// args: e
// locals: t, e#1
// closure: this
function {
  let t;
  t = this.connections[String(e)];
  if (!((undefined !== t))) goto L_ee;
  t.connected = false;
  let e#1;
  for (const e#1 of t.responseStreams.slice()) {
    e#1.disconnected();
  }
  delete String(e);
  // [栈深重同步 1 -> 0]
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=40B file=valdi_http/src/HTTPServer
// args: e, t
// closure: this
function {
  this.receiveData(e, t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=3 bc=277B file=valdi_http/src/HTTPServer
// args: t
// locals: t#1, this
// closure: e, s, n
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_d;
  t;
  t = 0;
  t#1 = 0;
  if (!(this.nativeServer)) goto L_41;
  throw new Error("HTTPServer is already started");
  this.nativeServer = s.createServer(t, "raw", {onConnected: function <atom:0>, onDisconnected: function <atom:0>, onDataReceived: function <atom:0>});
  this.nativeServer.start();
  this.keepAlive = n.beginKeepAlive();
  return undefined; // async
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=626B file=valdi_http/src/HTTPServer
// locals: e, t, e#1, this
// closure: n
function {
  this = this;
  if (!(this.nativeServer)) goto L_271;
  this.nativeServer.stop();
  this.nativeServer = undefined;
  n.endKeepAlive(this.keepAlive);
  this.keepAlive = undefined;
  let e;
  for (const e of this.connections) {
    if (!(Object.prototype.hasOwnProperty.call(this.connections, e))) continue;
    let t;
    t = this.connections[e];
    t.connected = false;
    let e#1;
    for (const e#1 of t.responseStreams.slice()) {
      e#1.disconnected();
      // [栈深重同步 3 -> 6]
    }
    delete e;
    // [栈深重同步 4 -> 3]
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=171B file=valdi_http/src/HTTPServer
// args: e, t
// locals: n, this
function {
  this = this;
  let n;
  n = this.connections[String(e)];
  if (!(n)) goto L_aa;
  n.buffer.appendData(t);
  this.processBufferedRequests(e, n);
  return;
}

// fn <atom:0>  args=2 vars=15 closure=4 cpool=1 bc=1138B file=valdi_http/src/HTTPServer
// args: e, t
// locals: n, s, r, o, i, c, f, u, p, v, y, S, this
// closure: a, d, h, l
function {
  this = this;
  let S;
  let y;
  let v;
  let p;
  let u;
  let f;
  let c;
  let i;
  let o;
  let r;
  let s;
  let n;
  n = t.buffer.inner;
  s = a(n, t.readOffset);
  if (!((s < 0))) goto L_c3;
  this.compactConsumedBytes(t);
  return;
  r = d(n.subarray(t.readOffset, s)).split("
");
  o = r.shift();
  if (!(!o)) goto L_1f1;
  this.sendResponse(t, {statusCode: 400, headers: {content-type: "text/plain; charset=utf-8"}, body: "Bad Request"});
  t.readOffset = (s + 4);
  this.compactConsumedBytes(t);
  goto L_3;
  i = o.split(" ");
  if (!((i.length < 3))) goto L_2af;
  this.sendResponse(t, {statusCode: 400, headers: {content-type: "text/plain; charset=utf-8"}, body: "Bad Request"});
  t.readOffset = (s + 4);
  this.compactConsumedBytes(t);
  goto L_3;
  c = h(r);
  f = (s + 4);
  if (!((c["content-length"] == null))) goto L_2d5;
  c["content-length"];
  u = (f + Number("0"));
  if (!((t.buffer.size < u))) goto L_34b;
  this.compactConsumedBytes(t);
  return;
  p = n.subarray(f, u);
  t.readOffset = u;
  v = i[1];
  y = l(v);
  S = {clientId: e, method: i[0], target: v, path: y.path, queryString: y.queryString, version: i[2], headers: c, body: p};
  this.handleRequest(t, S);
  this.compactConsumedBytes(t);
  goto L_3;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=584B file=valdi_http/src/HTTPServer
// args: t
// locals: n, s, r
// closure: e
function {
  let r;
  let s;
  let n;
  if (!((0 === t.readOffset))) goto L_30;
  return;
  n = t.buffer.inner;
  if (!((t.readOffset >= n.length))) goto L_121;
  t.buffer = new e.ByteBuffer(t.buffer.capacity);
  t.readOffset = 0;
  return;
  s = n.subarray(t.readOffset);
  r = new e.ByteBuffer(Math.max(t.buffer.capacity, s.length));
  r.appendData(s);
  t.buffer = r;
  t.readOffset = 0;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=305B file=valdi_http/src/HTTPServer
// args: e, t
// locals: n, n#1, this
function {
  this = this;
  try { // catch -> L_86
  let n;
  n = (await this.handler(t));
  if (!(e.connected)) goto L_81;
  this.sendResponse(e, n);
  <?>;
  goto L_12f;
  // [栈深重同步 0 -> 1]
  n#1 = <?>;
  try { // catch -> L_12e
  if (!(e.connected)) goto L_12a;
  if (!((n#1 instanceof Error))) goto L_11b;
  goto L_122;
  // [栈深重同步 5 -> 4]
  this.sendResponse(e, {statusCode: 500, headers: {content-type: "text/plain; charset=utf-8"}, body: String(n#1)});
  <?>;
  goto L_12f;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=161B file=valdi_http/src/HTTPServer
// locals: t
// closure: e, o
function {
  let t;
  t = e.responseStreams.indexOf(o);
  if (!((t >= 0))) goto L_a0;
  e.responseStreams.splice(t, 1);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=5 cpool=1 bc=806B file=valdi_http/src/HTTPServer
// args: e, t
// locals: n, s, r, i, o
// closure: u, v, p, f, HTTPServerResponseStreamImpl
function {
  let o;
  let r;
  let s;
  let n;
  n = u(t.body);
  s = v(n, t);
  r = "HTTP/1.1 ".concat(t.statusCode, " ", p(t.statusCode), "
");
  let i;
  for (const i of s) {
    if (!(Object.prototype.hasOwnProperty.call(s, i))) goto L_173;
    r = (r + "".concat(i, ": ", s[i], "
"));
    (r + "".concat(i, ": ", s[i], "
"));
  }
  <catch>;
  r = (r + "
");
  (r + "
");
  e.connection.send(f(r));
  if (!((undefined === t.stream))) goto L_251;
  if (!((n.length > 0))) goto L_24f;
  e.connection.send(n);
  return;
  // [栈深重同步 0 -> 2]
  o = new HTTPServerResponseStreamImpl(e.connection, function <atom:0>);
  e.responseStreams.push(o);
  if (!((n.length > 0))) goto L_2fc;
  o.write(n);
  t.stream(o);
  return;
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=25 bc=449B file=valdi_http/src/HTTPServer
// args: require, module, exports
// locals: e, t, n, s, r, o, i, c, HTTPServerResponseStreamImpl, <class_fields_init>, HTTPServerResponseStreamImpl#1, a, d, f, u, h, l, p, v, HTTPServer, <class_fields_init>#1, HTTPServer#1
function {
  a = function a;
  d = function d;
  f = function f;
  u = function u;
  h = function h;
  l = function l;
  p = function p;
  v = function v;
  let HTTPServer#1;
  let HTTPServerResponseStreamImpl#1;
  let c;
  let i;
  let o;
  let r;
  let s;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HTTPServer = undefined;
  e = require("coreutils/src/ByteBuffer");
  t = require("coreutils/src/unicode/TextCoding");
  n = require("valdi_core/src/utils/KeepAliveCallback");
  s = require("TCPSocket");
  r = 13;
  o = 10;
  i = new t.TextDecoder("utf-8");
  c = new t.TextEncoder("utf-8");
  let HTTPServerResponseStreamImpl;
  let <class_fields_init>;
  class HTTPServerResponseStreamImpl extends undefined { ... }
  <proto:HTTPServerResponseStreamImpl>.closed = function <atom:0>;
  <proto:HTTPServerResponseStreamImpl>.write = function <atom:0>;
  <proto:HTTPServerResponseStreamImpl>.close = function <atom:0>;
  <proto:HTTPServerResponseStreamImpl>.onClose = function <atom:0>;
  <proto:HTTPServerResponseStreamImpl>.disconnected = function <atom:0>;
  <proto:HTTPServerResponseStreamImpl>.finish = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:HTTPServerResponseStreamImpl>;
  HTTPServerResponseStreamImpl = function <atom:0>;
  // close_loc <class_fields_init>
  HTTPServerResponseStreamImpl#1 = function <atom:0>;
  let HTTPServer;
  let <class_fields_init>#1;
  class HTTPServer extends undefined { ... }
  <proto:HTTPServer>.port = function <atom:0>;
  <proto:HTTPServer>.addresses = function <atom:0>;
  <proto:HTTPServer>.start = function <atom:0>;
  <proto:HTTPServer>.stop = function <atom:0>;
  <proto:HTTPServer>.receiveData = function <atom:0>;
  <proto:HTTPServer>.processBufferedRequests = function <atom:0>;
  <proto:HTTPServer>.compactConsumedBytes = function <atom:0>;
  <proto:HTTPServer>.handleRequest = function <atom:0>;
  <proto:HTTPServer>.sendResponse = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:HTTPServer>;
  HTTPServer = function <atom:0>;
  // close_loc <class_fields_init>#1
  HTTPServer#1 = function <atom:0>;
  exports.HTTPServer = HTTPServer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_http/src/HTTPServer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
