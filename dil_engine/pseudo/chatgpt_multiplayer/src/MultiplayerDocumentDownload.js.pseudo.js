// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// args: e
function {
  e.Downloading = 0;
  e[0] = "Downloading";
  e.AwaitingHandoff = 1;
  e[1] = "AwaitingHandoff";
  e.Delivering = 2;
  e[2] = "Delivering";
  e.Active = 3;
  e[3] = "Active";
  e.Closed = 4;
  e[4] = "Closed";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// args: e
function {
  e.Message = 0;
  e[0] = "Message";
  e.Document = 1;
  e[1] = "Document";
  e.Close = 2;
  e[2] = "Close";
  e.Failure = 3;
  e[3] = "Failure";
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=18B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// args: e, t
// closure: d, this
function {
  d = e;
  e;
  this.rejectDownload = t;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=273B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// closure: this, i, t
function {
  this.connection.send(i.encodeMultiplayerClientMessage({type: i.MultiplayerMessageType.DOCUMENT_OPEN, state_vector: t.Base64.fromByteArray(new Uint8Array([0]))}));
  return;
}

// fn <atom:0>  args=1 vars=6 closure=9 cpool=0 bc=2062B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// args: e
// locals: c, l, h, u, l#1
// closure: this, n, a, i, t, s, d, r, o
function {
  let c;
  if (!((this.state.phase === n.Closed))) goto L_6c;
  return;
  c = {kind: a.Message, message: e};
  if (((this.state.phase === n.Downloading))) goto L_16b;
  if (!((this.state.phase === n.AwaitingHandoff))) goto L_7e5;
  try { // catch -> L_772
  let l;
  l = i.parseMultiplayerServerMessage(e);
  if (!((l == null))) goto L_1aa;
  l;
  goto L_1cb;
  if (((undefined.type === i.MultiplayerMessageType.DOCUMENT_ERROR))) goto L_287;
  if (!((l == null))) goto L_220;
  l;
  goto L_241;
  if (!((undefined.type === i.MultiplayerMessageType.DOCUMENT_UNAVAILABLE))) goto L_2b7;
  throw new Error(l.message);
  if (!((l == null))) goto L_2c2;
  l;
  goto L_2e3;
  if (!((undefined.type === i.MultiplayerMessageType.DOCUMENT_SYNC))) goto L_64c;
  let u;
  let h;
  if (!(!l.initialized)) goto L_36a;
  throw new Error("The server document has not been initialized");
  h = t.Base64.toByteArray(l.update);
  if (!((l.access === i.MultiplayerDocumentAccess.EDIT))) goto L_48a;
  goto L_4cf;
  // [栈深重同步 1 -> 0]
  u = s.DocumentAccess.View;
  c = {kind: a.Document, message: e, bytes: h, access: u};
  {kind: a.Document, message: e, bytes: h, access: u};
  if (!((this.state.phase === n.Downloading))) goto L_648;
  this.state = {phase: n.AwaitingHandoff};
  if (!((this.cancelTimeout == null))) goto L_5dd;
  this.cancelTimeout;
  this;
  goto L_5e0;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  d({documentId: r, schema: o.EditorSchema.WRITING_BLOCKS_V1, access: u, bytes: h});
  goto L_76f;
  if (!((l == null))) goto L_657;
  l;
  goto L_678;
  if (!((undefined.type === i.MultiplayerMessageType.DOCUMENT_UPDATE))) goto L_76e;
  c = {kind: a.Document, message: e, bytes: t.Base64.toByteArray(l.update), access: undefined};
  {kind: a.Document, message: e, bytes: t.Base64.toByteArray(l.update), access: undefined};
  <?>;
  goto L_7e5;
  // [栈深重同步 0 -> 1]
  l#1 = <?>;
  try { // catch -> L_7e4
  if (!((l#1 instanceof Error))) goto L_7a9;
  goto L_7b7;
  // [栈深重同步 3 -> 2]
  this.rejectDownload(new Error("Invalid downloaded document"));
  this.close();
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.receive(c);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=174B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// args: e
// closure: this, a
function {
  if ((e.reason)) goto L_53;
  this.rejectDownload(new Error("The document download disconnected"));
  this.receive({kind: a.Close, close: e});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=165B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// args: e
// closure: this, a
function {
  this.rejectDownload(new Error(e.message));
  this.receive({kind: a.Failure, failure: e});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// closure: this
function {
  return this.close();   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=7 cpool=6 bc=293B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// args: e, r, c
// locals: d, this
// closure: i, t, n, a, s, o, <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let d;
  d = undefined;
  this.service = e;
  this.documentId = r;
  this.state = {phase: n.Downloading};
  this.events = [];
  this.persistedEventCount = 0;
  this.document = new Promise(function <atom:0>);
  this.connection = e.connect({documentId: r}, {onOpen: function <atom:0>, onMessage: function <atom:0>, onClose: function <atom:0>, onFailure: function <atom:0>});
  this.cancelTimeout = c.schedule(function <atom:0>, 30000);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=2 cpool=0 bc=981B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// args: e, t, s
// locals: o, o#1, this
// closure: n, a
function {
  this = this;
  let o;
  o = (await this.document);
  s();
  this.requireAvailable();
  t(o.bytes);
  (await e.initialize(o));
  if (!((this.persistedEventCount < this.events.length))) goto L_2e7;
  let o#1;
  s();
  if (!((this.state.phase === n.Closed))) goto L_16b;
  throw new Error("The document download ended before it could be saved");
  o#1 = this.events[this.persistedEventCount];
  if (!((o#1.kind === a.Document))) goto L_2b6;
  t(o#1.bytes);
  (await e.acceptRemote(this.documentId, o#1.bytes, o#1.access));
  this.persistedEventCount = (this.persistedEventCount + 1);
  goto L_a3;
  (await e.flush());
  s();
  if (((this.persistedEventCount < this.events.length))) goto L_a3;
  if (!((this.state.phase === n.Closed))) goto L_3d3;
  throw new Error("The document download ended before it could be saved");
  return undefined; // async
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=0 bc=532B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// locals: e, t, o
// closure: this, o, s, a, n
function {
  let e;
  if (!((this.state !== o))) goto L_2c;
  return;
  s.onOpen();
  e = 0;
  if (!((this.state === o))) goto L_182;
  if (!((e < this.events.length))) goto L_182;
  let o;
  let t;
  e = <e_new>;
  t = (e++);
  o = this.events[t];
  if (!((t < this.persistedEventCount))) goto L_151;
  if (((o.kind === a.Document))) goto L_17e;
  this.deliver(o, s);
  goto L_54;
  if (!((this.state === o))) goto L_213;
  this.events.length = 0;
  this.state = {phase: n.Active, listener: s};
  {phase: n.Active, listener: s};
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// args: t
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Downloaded document handoff failed", t);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=2 bc=712B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// args: t, s
// locals: o, this
// closure: a, n, e
function {
  this = this;
  let o;
  if (!((this.state.phase === n.Closed))) goto L_7c;
  throw new Error("The document download is closed");
  if (!((t.documentId !== this.documentId))) goto L_d2;
  throw new Error("The downloaded document does not match the session");
  if (!((this.state.phase === n.Downloading))) goto L_149;
  throw new Error("The document download has not completed");
  if (!((this.state.phase !== n.AwaitingHandoff))) goto L_1f9;
  return this.service.connect(t, s);   // tail call
  o = {phase: n.Delivering};
  this.state = o;
  Promise.resolve().then(function <atom:0>).catch(function <atom:0>);
  return this.connection;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=339B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// args: e
// locals: t, this
// closure: n
function {
  this = this;
  let t;
  t = this.state;
  if (!((t.phase !== n.Closed))) goto L_152;
  if (!((t.phase === n.Active))) goto L_10b;
  goto L_152;
  // [栈深重同步 1 -> 0]
  this.events.push(e);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=408B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// args: e, t
// closure: a
function {
  if (((e.kind === a.Message))) goto L_6e;
  if (!((e.kind === a.Document))) goto L_b9;
  t.onMessage(e.message);
  goto L_197;
  if (!((e.kind === a.Close))) goto L_129;
  t.onClose(e.close);
  goto L_197;
  if (!((e.kind === a.Failure))) goto L_197;
  t.onFailure(e.failure);
  e.kind;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=122B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// locals: this
// closure: n
function {
  this = this;
  if (!((this.state.phase === n.Closed))) goto L_79;
  throw new Error("The document download is no longer available");
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=551B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// locals: e, this
// closure: n
function {
  this = this;
  let e;
  e = this.state;
  if (!((e.phase !== n.Closed))) goto L_226;
  this.state = {phase: n.Closed};
  if (!((this.cancelTimeout == null))) goto L_d3;
  this.cancelTimeout;
  this;
  goto L_d6;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.rejectDownload(new Error("The document download was cancelled"));
  this.events.length = 0;
  if (!((e.phase !== n.Downloading))) goto L_1c9;
  if (((e.phase !== n.AwaitingHandoff))) goto L_226;
  this.connection.close({code: 1000, reason: "document download closed"});
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=9 bc=277B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// args: require, module, exports
// locals: e, t, s, o, i, n, a, MultiplayerDocumentDownload, <class_fields_init>, MultiplayerDocumentDownload#1
function {
  let MultiplayerDocumentDownload#1;
  let i;
  let o;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MultiplayerDocumentDownload = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("coreutils/src/Base64");
  s = require("collaborative_editor/src/DocumentPersistenceTypes");
  o = require("collaborative_editor/src/EditorTypes");
  i = require("./MultiplayerProtocol");
  if ((n)) goto L_ad;
  n = {};
  !function <atom:0>({});
  if ((a)) goto L_bb;
  a = {};
  function <atom:0>({});
  let MultiplayerDocumentDownload;
  let <class_fields_init>;
  class MultiplayerDocumentDownload extends undefined { ... }
  <proto:MultiplayerDocumentDownload>.persist = function <atom:0>;
  <proto:MultiplayerDocumentDownload>.connect = function <atom:0>;
  <proto:MultiplayerDocumentDownload>.receive = function <atom:0>;
  <proto:MultiplayerDocumentDownload>.deliver = function <atom:0>;
  <proto:MultiplayerDocumentDownload>.requireAvailable = function <atom:0>;
  <proto:MultiplayerDocumentDownload>.close = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MultiplayerDocumentDownload>;
  MultiplayerDocumentDownload = function <atom:0>;
  // close_loc <class_fields_init>
  MultiplayerDocumentDownload#1 = function <atom:0>;
  exports.MultiplayerDocumentDownload = MultiplayerDocumentDownload#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/MultiplayerDocumentDownload
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
