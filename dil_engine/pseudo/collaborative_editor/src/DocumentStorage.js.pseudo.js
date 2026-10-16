// fn t  args=0 vars=0 closure=1 cpool=0 bc=58B file=collaborative_editor/src/DocumentStorage
// closure: e
function {
  if (!(!e.isVersionAtLeast(80))) goto L_39;
  throw new Error("This app version does not support offline documents.");
  return;
}

// fn c  args=3 vars=6 closure=3 cpool=0 bc=298B file=collaborative_editor/src/DocumentStorage
// args: e, c, n
// locals: s, i, a
// closure: t, r, o
function {
  let a;
  let i;
  let s;
  t();
  null;
  e;
  s = {};
  null;
  c;
  i = {bytes: new Uint8Array(c.bytes)};
  a = r.startWorkerService(o.DocumentStorageWorker, [n]);
  try { // catch -> L_f9
  (await a.api.cache(s, i));
  <?>;
  // gosub (finally 块) 255
  undefined;
  goto L_128;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 255
  throw <?>;
  a.dispose();
  // ret (finally 块) 
  return undefined; // async
}

// fn n  args=1 vars=3 closure=3 cpool=0 bc=236B file=collaborative_editor/src/DocumentStorage
// args: e
// locals: c, n
// closure: t, r, o
function {
  let n;
  let c;
  t();
  null;
  e;
  c = {};
  n = r.startWorkerService(o.DocumentStorageWorker, [undefined]);
  try { // catch -> L_bb
  (await n.api.clear(c));
  <?>;
  // gosub (finally 块) 193
  undefined;
  goto L_ea;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 193
  throw <?>;
  n.dispose();
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=169B file=collaborative_editor/src/DocumentStorage
// args: require, module, exports
// locals: e, r, o, t, c, n
function {
  t = function t;
  c = function c;
  n = function n;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.requireDocumentPersistenceSupport = undefined;
  exports.cacheDownloadedDocument = undefined;
  exports.clearDocumentAccount = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  r = require("worker/src/WorkerService");
  o = require("./worker/DocumentStorageWorker");
  exports.requireDocumentPersistenceSupport = t;
  exports.cacheDownloadedDocument = c;
  exports.clearDocumentAccount = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/DocumentStorage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
