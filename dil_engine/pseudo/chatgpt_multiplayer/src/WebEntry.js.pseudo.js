// fn o  args=1 vars=1 closure=1 cpool=0 bc=53B file=chatgpt_multiplayer/src/WebEntry
// args: e
// closure: t
function {
  return new t.BrowserMultiplayerSession(e, {documentSource: "memory"});
}

// fn n  args=1 vars=1 closure=1 cpool=0 bc=41B file=chatgpt_multiplayer/src/WebEntry
// args: e
// closure: r
function {
  return r.openPersistentBrowserSession(e, undefined);   // tail call
}

// fn c  args=3 vars=3 closure=1 cpool=0 bc=42B file=chatgpt_multiplayer/src/WebEntry
// args: e, t, o
// closure: r
function {
  return r.cacheWebDocument(e, t, o);   // tail call
}

// fn u  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_multiplayer/src/WebEntry
// args: e
// closure: r
function {
  return r.clearWebDocumentAccount(e);   // tail call
}

// fn s  args=1 vars=1 closure=2 cpool=2 bc=400B file=chatgpt_multiplayer/src/WebEntry
// args: t
// closure: r, e
function {
  if ((!new RegExp("^draft_[A-Za-z0-9_-]+$").test(t.documentId))) goto L_97;
  if (!(!t.fileName.trim())) goto L_a8;
  throw new Error("A local draft identity and name are required");
  return r.openPersistentBrowserSession(t, {documentId: t.documentId, schema: e.EditorSchema.WRITING_BLOCKS_V1, fileName: t.fileName, directoryId: t.directoryId});   // tail call
}

// fn i  args=3 vars=3 closure=1 cpool=0 bc=42B file=chatgpt_multiplayer/src/WebEntry
// args: e, t, o
// closure: r
function {
  return r.listWebDocumentDrafts(e, t, o);   // tail call
}

// fn a  args=3 vars=3 closure=1 cpool=0 bc=42B file=chatgpt_multiplayer/src/WebEntry
// args: e, t, o
// closure: r
function {
  return r.getWebDocumentDraft(e, t, o);   // tail call
}

// fn D  args=4 vars=4 closure=1 cpool=0 bc=43B file=chatgpt_multiplayer/src/WebEntry
// args: e, t, o, n
// closure: r
function {
  return r.updateWebDocumentDraft(e, t, o, n);   // tail call
}

// fn m  args=3 vars=3 closure=1 cpool=0 bc=42B file=chatgpt_multiplayer/src/WebEntry
// args: e, t, o
// closure: r
function {
  return r.deleteWebDocumentDraft(e, t, o);   // tail call
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=9 bc=331B file=chatgpt_multiplayer/src/WebEntry
// args: require, module, exports
// locals: e, t, r, o, n, c, u, s, i, a, D, m
function {
  o = function o;
  n = function n;
  c = function c;
  u = function u;
  s = function s;
  i = function i;
  a = function a;
  D = function D;
  m = function m;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createMultiplayerDocumentSession = undefined;
  exports.openMultiplayerDocumentSession = undefined;
  exports.cacheWebDocument = undefined;
  exports.clearWebDocumentAccount = undefined;
  exports.createMultiplayerDraftSession = undefined;
  exports.listWebDocumentDrafts = undefined;
  exports.getWebDocumentDraft = undefined;
  exports.updateWebDocumentDraft = undefined;
  exports.deleteWebDocumentDraft = undefined;
  e = require("collaborative_editor/src/EditorTypes");
  t = require("./BrowserMultiplayerSession");
  r = require("./BrowserDocumentPersistence");
  exports.createMultiplayerDocumentSession = o;
  exports.openMultiplayerDocumentSession = n;
  exports.cacheWebDocument = c;
  exports.clearWebDocumentAccount = u;
  exports.createMultiplayerDraftSession = s;
  exports.listWebDocumentDrafts = i;
  exports.getWebDocumentDraft = a;
  exports.updateWebDocumentDraft = D;
  exports.deleteWebDocumentDraft = m;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/WebEntry
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
