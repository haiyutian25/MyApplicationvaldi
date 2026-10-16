// fn c  args=1 vars=1 closure=1 cpool=0 bc=43B file=web_platform/src/FetchBody
// args: e
// closure: i
function {
  i.add(e);
  return e;
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=35B file=web_platform/src/FetchBody
// args: e
function {
  return e._disturbed;
}

// fn y  args=1 vars=1 closure=1 cpool=0 bc=40B file=web_platform/src/FetchBody
// args: e
// closure: i
function {
  return i.has(e);   // tail call
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=148B file=web_platform/src/FetchBody
// args: e
// closure: u
function {
  if (!((null !== e.stream))) goto L_93;
  if ((e.stream.locked)) goto L_93;
  return u(e.stream);
}

// fn d  args=1 vars=2 closure=0 cpool=0 bc=72B file=web_platform/src/FetchBody
// args: e
// locals: t
function {
  let t;
  if (!((e == null))) goto L_c;
  e;
  goto L_2d;
  t = undefined.bodyState;
  if (!((undefined === t))) goto L_44;
  throw new TypeError("Incompatible Body receiver");
  return t;
}

// fn f  args=3 vars=3 closure=0 cpool=0 bc=23B file=web_platform/src/FetchBody
// args: e, t, r
function {
  e.bodyState = t;
  e.bodyHeaders = r;
  return;
}

// fn p  args=0 vars=0 closure=0 cpool=0 bc=26B file=web_platform/src/FetchBody
function {
  return {stream: null, replay: undefined, length: undefined, type: undefined};
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=284B file=web_platform/src/FetchBody
// args: r
// locals: n
// closure: t, e
function {
  if (!((t < e.length))) goto L_9c;
  let n;
  n = Math.min((t + 65536), e.length);
  r.enqueue(e.slice(t, n));
  t = n;
  n;
  if (!((t === e.length))) goto L_11b;
  r.close();
  if (!((r.byobRequest == null))) goto L_f6;
  r.byobRequest;
  goto L_11b;
  undefined.respond(0);
  return;
}

// fn h  args=1 vars=2 closure=1 cpool=1 bc=37B file=web_platform/src/FetchBody
// args: e
// locals: t
// closure: c
function {
  let t;
  t = 0;
  return c(new ReadableStream({type: "bytes", pull: function <atom:0>}));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=5B file=web_platform/src/FetchBody
// closure: h, e
function {
  return h(e);   // tail call
}

// fn m  args=2 vars=3 closure=1 cpool=1 bc=43B file=web_platform/src/FetchBody
// args: e, t
// locals: r
// closure: h
function {
  let r;
  r = function <atom:0>;
  return {stream: r(), replay: r, length: e.length, type: t};
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=42B file=web_platform/src/FetchBody
// closure: c, e, t
function {
  return c(e.streamBlob(t));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=43B file=web_platform/src/FetchBody
// closure: c, e
function {
  return c(e.stream());   // tail call
}

// fn w  args=1 vars=6 closure=7 cpool=2 bc=938B file=web_platform/src/FetchBody
// args: t
// locals: r, s, r#1, e, r#2
// closure: c, e, p, u, n, o, m
function {
  let s;
  let r;
  if (!((null == t))) goto L_f;
  return p();   // tail call
  if (!((t instanceof ReadableStream))) goto L_6c;
  if ((t.locked)) goto L_41;
  if (!(u(t))) goto L_52;
  throw new TypeError("Body stream is locked or already used");
  return {stream: t, replay: undefined, length: undefined, type: undefined};
  r = undefined;
  s = undefined;
  if (!((t instanceof Blob))) goto L_ea;
  let r#1;
  r#1 = function <atom:0>;
  if ((t.type)) goto L_e4;
  return {stream: r#1(), replay: r#1, length: t.size, type: undefined};
  if (!((t instanceof n.FetchFormData))) goto L_18d;
  let r#2;
  let e;
  e = n.multipartBody(t);
  r#2 = function <atom:0>;
  return {stream: r#2(), replay: r#2, length: e.length, type: e.type};
  if (!((t instanceof URLSearchParams))) goto L_1fa;
  r = "application/x-www-form-urlencoded;charset=UTF-8";
  "application/x-www-form-urlencoded;charset=UTF-8";
  s = new TextEncoder().encode(t.toString());
  new TextEncoder().encode(t.toString());
  goto L_39e;
  if (!((t instanceof ArrayBuffer))) goto L_239;
  s = new Uint8Array(t).slice();
  new Uint8Array(t).slice();
  goto L_39e;
  if (!(ArrayBuffer.isView(t))) goto L_33c;
  if (!(!(t.buffer instanceof ArrayBuffer))) goto L_2a2;
  throw new TypeError("SharedArrayBuffer is not a Fetch body");
  s = new Uint8Array(t.buffer, t.byteOffset, t.byteLength).slice();
  new Uint8Array(t.buffer, t.byteOffset, t.byteLength).slice();
  goto L_39e;
  r = "text/plain;charset=UTF-8";
  "text/plain;charset=UTF-8";
  s = new TextEncoder().encode(o.usvString(t));
  new TextEncoder().encode(o.usvString(t));
  return m(s, r);   // tail call
}

// fn b  args=1 vars=4 closure=6 cpool=0 bc=267B file=web_platform/src/FetchBody
// args: e
// locals: t, n, o
// closure: d, l, p, r, y, c
function {
  let o;
  let n;
  let t;
  t = d(e);
  if (!(l(t))) goto L_23;
  throw new TypeError("Body is locked or already used");
  if (!((null === t.stream))) goto L_4f;
  return p();   // tail call
  if (((undefined === undefined))) goto L_60;
  const _it1 = undefined;
  <done(_it1)>;
  n = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  goto L_ae;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_54;
  // [栈深重同步 1 -> 0]
  if (!(y(t.stream))) goto L_e9;
  c(n);
  c(o);
  t.stream = n;
  null;
  t;
  return {stream: o};
}

// fn B  args=1 vars=8 closure=3 cpool=0 bc=621B file=web_platform/src/FetchBody
// args: e
// locals: t, r, n, o, s, e#1, t#1
// closure: d, l, y
function {
  let s;
  let o;
  let n;
  let r;
  let t;
  t = d(e);
  if (!(l(t))) goto L_29;
  throw new TypeError("Body is locked or already used");
  if (!((null === t.stream))) goto L_61;
  return {chunks: [], length: 0}; // async
  r = y(t.stream);
  n = t.stream.getReader();
  o = [];
  s = 0;
  try { // catch -> L_22c
  let t#1;
  let e#1;
  e#1 = (await n.read());
  if ((e#1.done)) goto L_222;
  if (!(!(e#1.value instanceof Uint8Array))) goto L_172;
  throw new TypeError("Fetch body streams must yield Uint8Array chunks");
  if (!(r)) goto L_19d;
  goto L_1e5;
  // [栈深重同步 1 -> 0]
  t#1 = e#1.value.slice();
  o.push(t#1);
  s = (s + t#1.length);
  (s + t#1.length);
  goto L_dd;
  <?>;
  // gosub (finally 块) 562
  undefined;
  goto L_25b;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 562
  throw <?>;
  n.releaseLock();
  // ret (finally 块) 
  return {chunks: o, length: s}; // async
}

// fn x  args=1 vars=6 closure=1 cpool=0 bc=294B file=web_platform/src/FetchBody
// args: e
// locals: t, r, n, o, s
// closure: B
function {
  let o;
  let n;
  let r;
  let t;
  if (((undefined === undefined))) goto L_3b;
  t = <to_object>(undefined).chunks;
  r = <to_object>(undefined).length;
  <to_object>(undefined);
  goto L_42;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_11;
  // [栈深重同步 1 -> 0]
  if (!((1 === t.length))) goto L_c7;
  if (!((0 === t[0].byteOffset))) goto L_c7;
  if (!((t[0].buffer.byteLength === r))) goto L_c7;
  return t[0]; // async
  n = new Uint8Array(r);
  o = 0;
  let s;
  for (const s of t) {
    n.set(s, o);
    o = (o + s.length);
    (o + s.length);
  }
  return n; // async
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchBody
// locals: this
// closure: d
function {
  this = this;
  return d(this).stream;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=57B file=web_platform/src/FetchBody
// locals: e, this
// closure: d, u
function {
  this = this;
  let e;
  e = d(this).stream;
  if (!((null !== e))) goto L_38;
  return u(e);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=40B file=web_platform/src/FetchBody
// locals: this
// closure: x
function {
  this = this;
  return (await x(this)).buffer; // async
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=6B file=web_platform/src/FetchBody
// locals: this
// closure: x
function {
  this = this;
  return x(this); // async
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=2 bc=86B file=web_platform/src/FetchBody
// locals: this
// closure: a, x
function {
  this = this;
  return a.decodeUTF8((await x(this))).replace(new RegExp("^\\uFEFF"), ""); // async
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=38B file=web_platform/src/FetchBody
// args: e
function {
  e.close();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=305B file=web_platform/src/FetchBody
// args: e, r
// locals: n, o
// closure: t
function {
  let o;
  let n;
  if (((e instanceof ArrayBuffer))) goto L_3b;
  if (!(!ArrayBuffer.isView(e))) goto L_4d;
  throw new TypeError("Body text stream requires BufferSource chunks");
  if (!((e instanceof ArrayBuffer))) goto L_62;
  goto L_d1;
  // [栈深重同步 1 -> 0]
  n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  o = t.decode(n, false);
  if (!(("" !== o))) goto L_130;
  r.enqueue(o);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=105B file=web_platform/src/FetchBody
// args: e
// locals: r
// closure: t
function {
  let r;
  r = t.decode(new Uint8Array(0), true);
  if (!(("" !== r))) goto L_68;
  e.enqueue(r);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=3 bc=232B file=web_platform/src/FetchBody
// locals: e, t, this
// closure: d, l, a
function {
  this = this;
  let t;
  let e;
  e = d(this);
  if (!(l(e))) goto L_22;
  throw new TypeError("Body is locked or already used");
  if (!((null === e.stream))) goto L_5d;
  return new ReadableStream({start: function <atom:0>});
  t = new a.FetchTextDecoder();
  return e.stream.pipeThrough(new TransformStream({transform: function <atom:0>, flush: function <atom:0>}));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=2 bc=127B file=web_platform/src/FetchBody
// locals: this
// closure: a, x
function {
  this = this;
  return JSON.parse(a.decodeUTF8((await x(this))).replace(new RegExp("^\\uFEFF"), "")); // async
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=208B file=web_platform/src/FetchBody
// locals: e, t, this
// closure: B, s
function {
  this = this;
  let t;
  let e;
  if (((undefined === undefined))) goto L_34;
  e = <to_object>(undefined).chunks;
  <to_object>(undefined);
  goto L_3b;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  if (!((this.bodyHeaders.get("content-type") == null))) goto L_b0;
  this.bodyHeaders.get("content-type");
  if (!((s.normalizeMime("", true) == null))) goto L_b9;
  s.normalizeMime("", true);
  t = "";
  return new Blob(e, {type: t}); // async
}

// fn <atom:0>  args=0 vars=6 closure=3 cpool=0 bc=676B file=web_platform/src/FetchBody
// locals: e, t, r, n, t#1, this
// closure: x, s, n
function {
  this = this;
  let r;
  let t;
  let e;
  e = (await x(this));
  if (!((this.bodyHeaders.get("content-type") == null))) goto L_8b;
  this.bodyHeaders.get("content-type");
  t = s.parseFormData(e, "");
  if (!(("string" == typeof t))) goto L_a6;
  throw new TypeError(t);
  r = new n.FetchFormData();
  let n;
  for (const n of t) {
    if (!((undefined === n.filename))) goto L_175;
    r.append(n.name, n.value);
   continue;
    let t#1;
    t#1 = e.subarray(n.offset, (n.offset + n.length));
    r.append(n.name, new File([t#1], n.filename, {type: n.type}));
  }
  return r; // async
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=web_platform/src/FetchBody
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=167B file=web_platform/src/FetchBody
// locals: e, this
// closure: t, n, r, o
function {
  this = this;
  if (!(!t(this))) goto L_7f;
  let e;
  e = new TypeError("Incompatible Body receiver");
  if (((undefined !== n.get))) goto L_4d;
  if (!(("textStream" === r))) goto L_53;
  throw e;
  return Promise.reject(e);   // tail call
  return o.call(this);   // tail call
}

// fn g  args=2 vars=6 closure=1 cpool=1 bc=611B file=web_platform/src/FetchBody
// args: e, t
// locals: r, n, o, s
// closure: FetchBody
function {
  let r;
  // close_loc r
  for (const r of Object.getOwnPropertyNames(FetchBody.prototype)) {
    if (!(("constructor" !== r))) goto L_253;
    let s;
    let o;
    let n;
    n = Object.getOwnPropertyDescriptor(FetchBody.prototype, r);
    if (!((n.get == null))) goto L_10d;
    n.get;
    o = n.value;
    s = {call: function <atom:0>}.call;
    if (!((undefined === n.get))) goto L_195;
    goto L_1c1;
    // [栈深重同步 9 -> 8]
    Object.defineProperty(s, "name", {value: "get ".concat(r), configurable: true});
    if (!((undefined !== n.get))) goto L_20b;
    n.get = s;
    goto L_21b;
    // [栈深重同步 4 -> 3]
    n.value = s;
    s;
    Object.defineProperty(e, r, n);
    // close_loc o
    // close_loc n
    // close_loc r
  }
  // close_loc r
  return;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=24 bc=703B file=web_platform/src/FetchBody
// args: require, module, exports
// locals: e, t, r, n, o, s, a, i, c, u, y, l, d, f, p, h, m, w, b, B, x, FetchBody, <class_fields_init>, FetchBody#1, g
function {
  c = function c;
  u = function u;
  y = function y;
  l = function l;
  d = function d;
  f = function f;
  p = function p;
  h = function h;
  m = function m;
  w = function w;
  b = function b;
  B = function B;
  x = function x;
  g = function g;
  let FetchBody#1;
  let i;
  let a;
  let s;
  let o;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ownedStream = undefined;
  exports.isDisturbed = undefined;
  exports.ownsStreamChunks = undefined;
  exports.unusable = undefined;
  exports.bodyState = undefined;
  exports.setBody = undefined;
  exports.emptyBody = undefined;
  exports.ownedBytesBody = undefined;
  exports.extractBody = undefined;
  exports.cloneBody = undefined;
  exports.consumeBody = undefined;
  exports.FetchBody = undefined;
  exports.installBodyMixin = undefined;
  e = require("./Blob");
  t = require("./WebPlatform");
  r = t.ReadableStream.prototype.tee;
  n = require("./FetchFormData");
  o = require("./WebIDL");
  s = require("./FetchNative");
  a = require("./FetchTextDecoder");
  i = new WeakSet();
  exports.ownedStream = c;
  exports.isDisturbed = u;
  exports.ownsStreamChunks = y;
  exports.unusable = l;
  exports.bodyState = d;
  exports.setBody = f;
  exports.emptyBody = p;
  exports.ownedBytesBody = m;
  exports.extractBody = w;
  exports.cloneBody = b;
  exports.consumeBody = x;
  let FetchBody;
  let <class_fields_init>;
  class FetchBody extends undefined { ... }
  <proto:FetchBody>.body = function <atom:0>;
  <proto:FetchBody>.bodyUsed = function <atom:0>;
  <proto:FetchBody>.arrayBuffer = function <atom:0>;
  <proto:FetchBody>.bytes = function <atom:0>;
  <proto:FetchBody>.text = function <atom:0>;
  <proto:FetchBody>.textStream = function <atom:0>;
  <proto:FetchBody>.json = function <atom:0>;
  <proto:FetchBody>.blob = function <atom:0>;
  <proto:FetchBody>.formData = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FetchBody>;
  FetchBody = function <atom:0>;
  // close_loc <class_fields_init>
  FetchBody#1 = function <atom:0>;
  exports.FetchBody = FetchBody#1;
  exports.installBodyMixin = g;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=web_platform/src/FetchBody
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
