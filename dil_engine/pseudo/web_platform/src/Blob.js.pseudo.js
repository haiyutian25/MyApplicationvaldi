// fn s  args=1 vars=1 closure=2 cpool=0 bc=67B file=web_platform/src/Blob
// args: e
// closure: i, a
function {
  if (!(!i.call(e, a))) goto L_3d;
  throw new TypeError("Incompatible Blob receiver");
  return e[a];
}

// fn b  args=1 vars=1 closure=2 cpool=0 bc=128B file=web_platform/src/Blob
// args: e
// closure: Blob, a
function {
  return Object.defineProperty(Object.create(Blob.prototype), a, {value: e});   // tail call
}

// fn c  args=1 vars=2 closure=0 cpool=2 bc=138B file=web_platform/src/Blob
// args: e
// locals: t
function {
  let t;
  if (!((undefined === e))) goto L_b;
  goto L_31;
  // [栈深重同步 1 -> 0]
  t = "".concat(e);
  if (!(new RegExp("[^\\x20-\\x7e]").test(t))) goto L_62;
  return "";
  return t.toLowerCase();
}

// fn p  args=1 vars=3 closure=0 cpool=0 bc=160B file=web_platform/src/Blob
// args: e
// locals: t, r
function {
  let r;
  let t;
  t = +e;
  if ((!Number.isFinite(t))) goto L_3f;
  if (!((0 === t))) goto L_43;
  return 0;
  r = (Math.trunc(t) % (2 ** 64));
  if (!((r >= (2 ** 63)))) goto L_88;
  return (r - (2 ** 64));
  if (!((r < -(2 ** 63)))) goto L_9c;
  return (r + (2 ** 64));
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=2 bc=73B file=web_platform/src/Blob
// args: e
// closure: l
function {
  if (!(("string" != typeof e))) goto L_c;
  return e;
  if (!(("native" === l))) goto L_47;
  return e.replace(new RegExp("\\r\\n|\\r"), "
");
  return e;
}

// fn <atom:0>  args=2 vars=9 closure=6 cpool=1 bc=988B file=web_platform/src/Blob
// args: t, r
// locals: o, e, n, l, b, p, this
// closure: <class_fields_init>, i, a, s, c, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let p;
  let b;
  let l;
  let n;
  let o;
  o = [];
  if (!((undefined !== t))) goto L_26b;
  if (((null === t))) goto L_45;
  if (!(("object" != typeof t))) goto L_56;
  if (!(("function" != typeof t))) goto L_56;
  throw new TypeError("Blob parts must be an iterable object");
  let e;
  for (const e of t) {
    if (!((null != e))) goto L_c5;
    if (!(i.call(e, a))) goto L_c5;
    o.push(s(e));
   continue;
    if (!(ArrayBuffer.isView(e))) goto L_1d2;
    if (!(!(e.buffer instanceof ArrayBuffer))) goto L_132;
    throw new TypeError("SharedArrayBuffer is not a Blob part");
    o.push(new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
   continue;
    if (!((e instanceof ArrayBuffer))) goto L_212;
    goto L_261;
    // [栈深重同步 4 -> 3]
    o.push("".concat(e));
  }
  if (!((null != r))) goto L_293;
  if (!(("object" != typeof r))) goto L_293;
  if (!(("function" != typeof r))) goto L_293;
  throw new TypeError("Blob options must be a dictionary");
  if (!((r == null))) goto L_29c;
  r;
  goto L_2bd;
  n = undefined.endings;
  if (!((undefined === n))) goto L_2cc;
  goto L_2f4;
  // [栈深重同步 1 -> 0]
  l = "".concat(n);
  if (!(("transparent" !== l))) goto L_31a;
  if (!(("native" !== l))) goto L_31a;
  throw new TypeError("Invalid Blob endings");
  if (!((r == null))) goto L_326;
  r;
  goto L_347;
  b = c(undefined.type);
  p = o.map(function <atom:0>);
  Object.defineProperty(this, a, {value: new e.BlobData(p, b, 0, (1 / 0))});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=44B file=web_platform/src/Blob
// locals: this
// closure: r, s
function {
  this = this;
  return r.call(s(this));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=44B file=web_platform/src/Blob
// locals: this
// closure: o, s
function {
  this = this;
  return o.call(s(this));   // tail call
}

// fn <atom:0>  args=3 vars=10 closure=7 cpool=0 bc=529B file=web_platform/src/Blob
// args: t, o, n
// locals: l, i, b, u, f, y, this
// closure: s, r, p, Blob, a, e, c
function {
  this = this;
  let y;
  let f;
  let u;
  let b;
  let i;
  let l;
  l = s(this);
  i = r.call(l);
  b = p(t);
  if (!((undefined === o))) goto L_53;
  goto L_56;
  // [栈深重同步 1 -> 0]
  u = p(o);
  if (!((b < 0))) goto L_91;
  goto L_c0;
  // [栈深重同步 1 -> 0]
  f = Math.min(b, i);
  if (!((u < 0))) goto L_fc;
  goto L_12b;
  // [栈深重同步 1 -> 0]
  y = Math.min(u, i);
  return Object.defineProperty(Object.create(Blob.prototype), a, {value: new e.BlobData([l], c(n), f, Math.max(f, y))});   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=95B file=web_platform/src/Blob
// args: e
// locals: t
// closure: s, this, n, r
function {
  let t;
  t = s(this);
  e(n.call(t, 0, r.call(t)));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=14B file=web_platform/src/Blob
// locals: this
// closure: s, n, r
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=104B file=web_platform/src/Blob
// args: e
// locals: t
// closure: s, this, n, r
function {
  let t;
  t = s(this);
  e(new Uint8Array(n.call(t, 0, r.call(t))));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=14B file=web_platform/src/Blob
// locals: this
// closure: s, n, r
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=45B file=web_platform/src/Blob
// args: e
// closure: l, s, this
function {
  e(l.call(s(this)));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=14B file=web_platform/src/Blob
// locals: this
// closure: l, s
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=305B file=web_platform/src/Blob
// args: r
// locals: l
// closure: o, t, n, e
function {
  if (!((o < t))) goto L_b0;
  let l;
  l = Math.min(65536, (t - o));
  r.enqueue(new Uint8Array(n.call(e, o, l)));
  o = (o + l);
  (o + l);
  if (!((o === t))) goto L_130;
  r.close();
  if (!((r.byobRequest == null))) goto L_10b;
  r.byobRequest;
  goto L_130;
  undefined.respond(0);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=89B file=web_platform/src/Blob
// locals: e, t, o, this
// closure: n, s, r
function {
  this = this;
  let o;
  let t;
  let e;
  e = s(this);
  t = r.call(e);
  o = 0;
  return new ReadableStream({type: "bytes", pull: function <atom:0>});
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=40B file=web_platform/src/Blob
// args: e
// closure: u
function {
  return u.call(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=7B file=web_platform/src/Blob
// args: t
// closure: e, s
function {
  return e(s(t));   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=231B file=web_platform/src/Blob
// args: e
// locals: o, arguments
// closure: t, r
function {
  arguments = <special_object 0>;
  let o;
  if (!((0 === arguments.length))) goto L_1b;
  throw new TypeError("URL.revokeObjectURL requires an argument");
  o = t.URL.parse("".concat(e));
  if (!((o == null))) goto L_9a;
  o;
  goto L_bb;
  if (!(("blob:" === undefined.protocol))) goto L_e6;
  r(o.href);
  return;
}

// fn y  args=2 vars=2 closure=3 cpool=2 bc=281B file=web_platform/src/Blob
// args: e, r
// closure: s, t, Blob
function {
  if (!((undefined === globalThis.Blob))) goto L_118;
  Object.defineProperty(globalThis, "Blob", {value: Blob, writable: true, configurable: true});
  Object.defineProperties(globalThis.URL, {createObjectURL: {value: function <atom:0>, writable: true, enumerable: true, configurable: true}, revokeObjectURL: {value: function <atom:0>, writable: true, enumerable: true, configurable: true}});
  return;
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=14 bc=1437B file=web_platform/src/Blob
// args: require, module, exports
// locals: e, t, r, o, n, l, a, i, s, b, c, p, Blob, <class_fields_init>, Blob#1, u, f, B, y
function {
  s = function s;
  b = function b;
  c = function c;
  p = function p;
  f = function f;
  y = function y;
  let u;
  let Blob#1;
  let i;
  let a;
  let l;
  let n;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makeBlobFromNative = undefined;
  exports.Blob = undefined;
  exports.streamBlob = undefined;
  exports.installBlob = undefined;
  e = require("./BlobNative");
  t = require("./WebPlatform");
  r = Object.getOwnPropertyDescriptor(e.BlobData.prototype, "size").get;
  o = Object.getOwnPropertyDescriptor(e.BlobData.prototype, "type").get;
  n = e.BlobData.prototype.copyBytes;
  l = e.BlobData.prototype.text;
  a = Symbol("Blob data");
  i = Object.prototype.hasOwnProperty;
  exports.makeBlobFromNative = b;
  let Blob;
  let <class_fields_init>;
  class Blob extends undefined { ... }
  <proto:Blob>.size = function <atom:0>;
  <proto:Blob>.type = function <atom:0>;
  <proto:Blob>.slice = function <atom:0>;
  <proto:Blob>.arrayBuffer = function <atom:0>;
  <proto:Blob>.bytes = function <atom:0>;
  <proto:Blob>.text = function <atom:0>;
  <proto:Blob>.stream = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Blob>;
  Blob = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc Blob
  Blob#1 = function <atom:0>;
  exports.Blob = Blob#1;
  u = Blob#1.prototype.stream;
  exports.streamBlob = f;
  Object.defineProperty(Blob#1.prototype, Symbol.toStringTag, {value: "Blob", configurable: true});
  Object.defineProperty(Blob#1, "length", {value: 0, configurable: true});
  Object.defineProperty(Blob#1.prototype.slice, "length", {value: 0, configurable: true});
  let B;
  for (const B of ["size", "type", "slice", "stream", "text", "arrayBuffer", "bytes"]) {
    Object.defineProperty(Blob#1.prototype, B, {enumerable: true});
  }
  exports.installBlob = y;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=web_platform/src/Blob
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
