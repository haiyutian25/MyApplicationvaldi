// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_multiplayer/src/MultiplayerDrafts
// closure: u
function {
  return u.cancel();   // tail call
}

// fn <atom:0>  args=0 vars=5 closure=12 cpool=1 bc=1454B file=chatgpt_multiplayer/src/MultiplayerDrafts
// locals: o, r, u, f, m
// closure: l, r, u, d, v, s, e, t, i, n, c, a
function {
  let o;
  l.requireActive();
  o = (await r.openClientSQLDocumentStore(u));
  try { // catch -> L_52e
  let m;
  let f;
  let u;
  let r;
  if (!(d.canceled)) goto L_92;
  // gosub (finally 块) 1332
  return v; // async
  l.requireActive();
  r = (await o.load(s));
  if (!(d.canceled)) goto L_114;
  // gosub (finally 块) 1332
  return v; // async
  l.requireActive();
  if (!((r == null))) goto L_146;
  r;
  goto L_167;
  if (!((undefined !== undefined.serverDocumentId))) goto L_1a1;
  // gosub (finally 块) 1332
  return {documentId: r.serverDocumentId, failure: undefined}; // async
  if (!((r == null))) goto L_1ad;
  r;
  goto L_1ce;
  if (!((undefined === undefined.fileName))) goto L_1e0;
  throw new Error("The local draft is unavailable");
  u = e.createLibraryNote(t, r.fileName, r.directoryId);
  d.onCancel(function <atom:0>);
  f = (await u.result);
  if (!(d.canceled)) goto L_2d1;
  // gosub (finally 块) 1332
  return v; // async
  l.requireActive();
  if (!((f.kind !== i.OAINetworkResultKind.Success))) goto L_39e;
  // gosub (finally 块) 1332
  return {documentId: undefined, failure: n.documentCreationFailure(f)}; // async
  m = (await o.bindServerDocument(r.documentId, f.value));
  if (!((undefined === m))) goto L_518;
  goto L_527;
  // [栈深重同步 1 -> 0]
  // gosub (finally 块) 1332
  return {documentId: m, failure: undefined}; // async
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1332
  throw <?>;
  (await o.close());
  if ((d.canceled)) goto L_5aa;
  l.requireActive();
  // ret (finally 块) 
  return undefined; // async
}

// fn u  args=4 vars=6 closure=7 cpool=1 bc=103B file=chatgpt_multiplayer/src/MultiplayerDrafts
// args: t, u, l, s
// locals: d, v
// closure: r, e, i, n, c, a, o
function {
  let v;
  let d;
  d = new o.PromiseCanceler();
  v = {documentId: undefined, failure: undefined};
  return d.toCancelablePromise(function <atom:0>());   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_multiplayer/src/MultiplayerDrafts
function {
  return;
}

// fn l  args=2 vars=6 closure=2 cpool=1 bc=528B file=chatgpt_multiplayer/src/MultiplayerDrafts
// args: e, i
// locals: o, n, e#1, t
// closure: t, r
function {
  let n;
  let o;
  if (!((e.accountScope == null))) goto L_30;
  e.accountScope;
  goto L_51;
  o = undefined.lifetime;
  if (((undefined === o))) goto L_a5;
  if ((!i.userId)) goto L_a5;
  if (!(!i.accountId)) goto L_b6;
  throw new Error("An active account is required for local drafts");
  n = new t.ActiveDocumentAccount(o, function <atom:0>);
  try { // catch -> L_1df
  let t;
  let e#1;
  e#1 = (await r.openClientSQLDocumentStore(i));
  t = undefined;
  try { // catch -> L_17d
  n.requireActive();
  t = (await e#1.listDrafts());
  (await e#1.listDrafts());
  <?>;
  // gosub (finally 块) 387
  undefined;
  goto L_1ad;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 387
  throw <?>;
  (await e#1.close());
  // ret (finally 块) 
  n.requireActive();
  // gosub (finally 块) 485
  return t; // async
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 485
  throw <?>;
  n.stop();
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=2 bc=203B file=chatgpt_multiplayer/src/MultiplayerDrafts
// args: require, module, exports
// locals: e, r, t, i, o, n, c, a, u, l
function {
  u = function u;
  l = function l;
  let a;
  let c;
  let n;
  let o;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.prepareDraftDocument = undefined;
  exports.listDrafts = undefined;
  e = require("chatgpt_services/src/library/ChatGPTLibraryClient");
  r = require("collaborative_editor/src/storage/ClientSQLDocumentStore");
  t = require("collaborative_editor/src/worker/ActiveDocumentAccount");
  i = require("oai_platform_services/src/OAINetworkClient");
  o = require("valdi_core/src/CancelablePromise");
  n = require("./CreateMultiplayerDocumentSession");
  c = require("./MultiplayerSessionTypes");
  a = require("./OAIMultiplayerConnectionService");
  exports.prepareDraftDocument = u;
  exports.listDrafts = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/MultiplayerDrafts
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
