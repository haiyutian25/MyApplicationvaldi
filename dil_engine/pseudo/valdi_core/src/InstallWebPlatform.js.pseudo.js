// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=76B file=valdi_core/src/InstallWebPlatform
// args: r
// closure: e, t
function {
  return e.resolveBlobURL(r, t.BlobData);   // tail call
}

// fn n  args=1 vars=3 closure=9 cpool=1 bc=1379B file=valdi_core/src/InstallWebPlatform
// args: n
// locals: m, e
// closure: e, t, b, r, s, o, i, l, a
function {
  let m;
  m = {URL: b.URL, URLSearchParams: b.URLSearchParams, ByteLengthQueuingStrategy: b.ByteLengthQueuingStrategy, CountQueuingStrategy: b.CountQueuingStrategy, ReadableByteStreamController: b.ReadableByteStreamController, ReadableStream: b.ReadableStream, ReadableStreamBYOBReader: b.ReadableStreamBYOBReader, ReadableStreamBYOBRequest: b.ReadableStreamBYOBRequest, ReadableStreamDefaultController: b.ReadableStreamDefaultController, ReadableStreamDefaultReader: b.ReadableStreamDefaultReader, TransformStream: b.TransformStream, TransformStreamDefaultController: b.TransformStreamDefaultController, WritableStream: b.WritableStream, WritableStreamDefaultController: b.WritableStreamDefaultController, WritableStreamDefaultWriter: b.WritableStreamDefaultWriter};
  let e;
  for (const e of Object.keys(m)) {
    if (!((undefined === globalThis[e]))) goto L_2fa;
    Object.defineProperty(globalThis, e, {value: m[e], writable: true, configurable: true});
  }
  r.installBlob(n.createBlobURL.bind(n), n.revokeBlobURL.bind(n));
  if (!(s.isVersionAtLeast(283))) goto L_485;
  o.installStorage({local: i.localStorage, session: i.sessionStorage, installEventTarget: l.installGlobalEventTarget});
  if (!(s.isVersionAtLeast(262))) goto L_562;
  a.installFetch({createTransport: e.createTransport, resolveBlobURL: function <atom:0>, digest: e.digest, addAbortStep: l.addAbortStep});
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=1 bc=188B file=valdi_core/src/InstallWebPlatform
// args: require, module, exports
// locals: e, r, t, a, l, o, i, s, b, n
function {
  n = function n;
  let b;
  let s;
  let i;
  let o;
  let l;
  let a;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.installWebPlatform = undefined;
  e = require("web_platform/src/FetchNative");
  r = require("web_platform/src/Blob");
  t = require("web_platform/src/BlobNative");
  a = require("web_platform/src/Fetch");
  l = require("valdi_core/src/AbortController");
  o = require("web_platform/src/Storage");
  i = require("web_platform/src/StorageNative");
  s = require("valdi_core/src/CompilerIntrinsics");
  b = require("web_platform/src/WebPlatform");
  exports.installWebPlatform = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/InstallWebPlatform
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
