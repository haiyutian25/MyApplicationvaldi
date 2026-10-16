// fn d  args=1 vars=1 closure=1 cpool=0 bc=64B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e
// closure: i
function {
  if (!(("undefined" == typeof BroadcastChannel))) goto L_10;
  return undefined;
  return new BroadcastChannel(i.documentStoreName(e));
}

// fn u  args=2 vars=2 closure=1 cpool=0 bc=150B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: t, n
// closure: e
function {
  try { // catch -> L_36
  if (!((t == null))) goto L_e;
  t;
  goto L_33;
  undefined.postMessage(n);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_95
  if (!(e.isLoggingEnabled)) goto L_92;
  console.warn("Document storage notification could not be delivered; refresh on focus remains available");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e
function {
  e.Changed = 0;
  e[0] = "Changed";
  e.Cleared = 1;
  e[1] = "Cleared";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=114B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// closure: this
function {
  if (!(this.active)) goto L_71;
  this.stopObserving();
  this.onInactive();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=379B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e
// locals: t, n
// closure: this, s, i
function {
  let n;
  let t;
  if (!(!this.active)) goto L_2c;
  return;
  t = e.data;
  if (((null === t))) goto L_62;
  if (!(("object" != typeof t))) goto L_65;
  return;
  n = t;
  if (!((n.kind === s.Cleared))) goto L_da;
  goto L_17a;
  // [栈深重同步 1 -> 0]
  if (!((n.kind === s.Changed))) goto L_17a;
  if (!(("string" == typeof n.documentId))) goto L_17a;
  i(n.documentId);
  return;
}

// fn <atom:0>  args=4 vars=5 closure=3 cpool=2 bc=284B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e, t, n, i
// locals: this
// closure: s, <class_fields_init>, d
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.signal = t;
  this.onInactive = n;
  this.active = true;
  this.onAbort = function <atom:0>;
  this.requireActive();
  this.channel = d(e);
  t.addEventListener("abort", this.onAbort, {once: true});
  if (!((undefined !== this.channel))) goto L_11b;
  this.channel.onmessage = function <atom:0>;
  function <atom:0>;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=237B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// locals: this
// closure: t, n
function {
  this = this;
  if ((!this.active)) goto L_6c;
  if (!(this.signal.aborted)) goto L_ec;
  throw new t.DocumentPersistenceFailure({kind: n.DocumentPersistenceErrorKind.HostUnavailable, message: "An active host account is required to open or cache this document."});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=124B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// locals: this
function {
  this = this;
  this.active = false;
  this.signal.removeEventListener("abort", this.onAbort);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=119B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// locals: this
function {
  this = this;
  this.stopObserving();
  if (!((this.channel == null))) goto L_52;
  this.channel;
  goto L_76;
  undefined.close();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=51B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e
// closure: u, t, s
function {
  return u(t, {kind: s.Changed, documentId: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: t
// closure: e
function {
  return e.load(t);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=87B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: t, i
// locals: o
// closure: e, n
function {
  let o;
  o = (await e.initializeDraft(t, i));
  n(t.documentId);
  return o; // async
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// closure: e
function {
  return e.listDrafts();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: t
// closure: e
function {
  return e.getDraft(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: t
// closure: e
function {
  return e.listRecoverableDrafts(t);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=54B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: t, i
// locals: o
// closure: e, n
function {
  let o;
  o = (await e.bindServerDocument(t, i));
  n(t);
  return o; // async
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=49B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: t, i
// closure: e, n
function {
  (await e.updateDraft(t, i));
  n(t);
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=48B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: t
// closure: e, n
function {
  (await e.deleteDraft(t));
  n(t);
  return undefined; // async
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=86B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: t
// locals: i
// closure: e, n
function {
  let i;
  i = (await e.initialize(t));
  n(t.documentId);
  return i; // async
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=55B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: t, i, o
// locals: r
// closure: e, n
function {
  let r;
  r = (await e.append(t, i, o));
  n(t);
  return r; // async
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=55B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: t, i, o
// locals: r
// closure: e, n
function {
  let r;
  r = (await e.acceptRemote(t, i, o));
  n(t);
  return r; // async
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=49B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: t, i
// closure: e, n
function {
  (await e.setAccess(t, i));
  n(t);
  return undefined; // async
}

// fn <atom:0>  args=7 vars=8 closure=2 cpool=0 bc=72B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: t, i, o, r, a, c, s
// locals: d
// closure: e, n
function {
  let d;
  d = (await e.checkpoint(t, i, o, r, a, c, s));
  if (!(d)) goto L_43;
  n(t);
  return d; // async
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// closure: e
function {
  return e.flush();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=91B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// closure: e, u, t, s
function {
  (await e.clear());
  u(t, {kind: s.Cleared, documentId: undefined});
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// closure: e
function {
  return e.close();   // tail call
}

// fn l  args=2 vars=3 closure=2 cpool=17 bc=205B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e, t
// locals: n
// closure: u, s
function {
  let n;
  n = function <atom:0>;
  return {load: function <atom:0>, initializeDraft: function <atom:0>, listDrafts: function <atom:0>, getDraft: function <atom:0>, listRecoverableDrafts: function <atom:0>, bindServerDocument: function <atom:0>, updateDraft: function <atom:0>, deleteDraft: function <atom:0>, initialize: function <atom:0>, append: function <atom:0>, acceptRemote: function <atom:0>, setAccess: function <atom:0>, checkpoint: function <atom:0>, flush: function <atom:0>, clear: function <atom:0>, close: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=87B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("Document changes from another owner could not be loaded");
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=102B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// closure: e, m, u, v
function {
  if (!((undefined === m))) goto L_65;
  if (!((undefined !== u))) goto L_5f;
  goto L_65;
  // [栈深重同步 1 -> 0]
  v = true;
  true;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=87B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("Document cleanup failed after account exit");
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=86B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// closure: e, u
function {
  if (!((u == null))) goto L_b;
  u;
  goto L_55;
  undefined.close().catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=14B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e
// closure: f, h
function {
  if (!((e === f))) goto L_d;
  h();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=92B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e
// closure: c, i
function {
  if (!(c.isVersionAtLeast(185))) goto L_5b;
  if (!((i.onFacepileChange == null))) goto L_57;
  i.onFacepileChange;
  i;
  goto L_5b;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// closure: p
function {
  return p.requireActive();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// closure: p
function {
  return p.requireActive();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// closure: p
function {
  return p.close();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=244B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// closure: p, m, h, D
function {
  if (((undefined !== m))) goto L_ef;
  globalThis.removeEventListener("focus", h);
  if (!((globalThis.document == null))) goto L_6c;
  globalThis.document;
  goto L_98;
  undefined.removeEventListener("visibilitychange", h);
  p.stopObserving();
  m = D().finally(function <atom:0>);
  D().finally(function <atom:0>);
  return m;
}

// fn m  args=2 vars=13 closure=9 cpool=7 bc=3116B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: i, s
// locals: d, u, m, v, f, h, p, e, m#1, g, D
// closure: e, c, WebDocumentAccount, o, a, t, n, l, r
function {
  let D;
  let p;
  let h;
  let f;
  let v;
  let m;
  let u;
  let d;
  d = undefined;
  u = undefined;
  m = undefined;
  v = false;
  f = i.documentId;
  h = function <atom:0>;
  p = new WebDocumentAccount(i.account, i.accountSignal, function <atom:0>, function <atom:0>);
  try { // catch -> L_9ef
  let m#1;
  let e;
  d = (await o.openIndexedDBDocumentStore(i.account));
  (await o.openIndexedDBDocumentStore(i.account));
  p.requireActive();
  if (!((undefined === s))) goto L_170;
  goto L_1be;
  // [栈深重同步 1 -> 0]
  e = (await d.initializeDraft(s, a.initialWritingBlockUpdate()));
  if (!((undefined === e))) goto L_295;
  if (!(i.documentId.startsWith("draft_"))) goto L_295;
  throw new t.DocumentPersistenceFailure({kind: n.DocumentPersistenceErrorKind.NotDownloaded, message: "The local draft could not be found on this device."});
  p.requireActive();
  if (!((e == null))) goto L_2c8;
  e;
  goto L_2e9;
  if (!((undefined.documentId == null))) goto L_310;
  undefined.documentId;
  f = i.documentId;
  i.documentId;
  m#1 = l(d, p.channel);
  if (!((e == null))) goto L_373;
  e;
  goto L_394;
  if (!((undefined.serverDocumentId == null))) goto L_3bb;
  undefined.serverDocumentId;
  if (!((e == null))) goto L_3cc;
  e;
  goto L_3ed;
  if (!((undefined !== undefined.fileName))) goto L_418;
  if (!(c.isVersionAtLeast(191))) goto L_498;
  goto L_499;
  // [栈深重同步 4 -> 3]
  null;
  {};
  if (!((undefined === i.debug))) goto L_515;
  goto L_53d;
  // [栈深重同步 4 -> 3]
  null;
  {debug: i.debug};
  if (!((undefined === i.rewriteEndpoint))) goto L_592;
  goto L_5ba;
  // [栈深重同步 4 -> 3]
  null;
  {rewriteEndpoint: i.rewriteEndpoint};
  if (!((undefined === e))) goto L_6e4;
  goto L_771;
  // [栈深重同步 4 -> 3]
  if (!((undefined === e.fileName))) goto L_71a;
  goto L_72f;
  // [栈深重同步 5 -> 4]
  u = new r.BrowserMultiplayerSession({documentId: i.documentId, optimistic: (undefined === e.serverDocumentId), production: i.production, request: i.request, requestAdmission: i.requestAdmission, createEditor: i.createEditor, onChange: i.onChange, onPresenceChange: i.onPresenceChange, onPresenceActivity: i.onPresenceActivity, onStateChange: i.onStateChange, onParticipantsChange: i.onParticipantsChange, onFacepileChange: function <atom:0>}, {documentSource: "cached", draft: {store: m#1, requireActive: function <atom:0>}, persistence: {store: m#1, stored: e, offlineEditingAllowed: i.offlineEditingAllowed}});
  new r.BrowserMultiplayerSession({documentId: i.documentId, optimistic: (undefined === e.serverDocumentId), production: i.production, request: i.request, requestAdmission: i.requestAdmission, createEditor: i.createEditor, onChange: i.onChange, onPresenceChange: i.onPresenceChange, onPresenceActivity: i.onPresenceActivity, onStateChange: i.onStateChange, onParticipantsChange: i.onParticipantsChange, onFacepileChange: function <atom:0>}, {documentSource: "cached", draft: {store: m#1, requireActive: function <atom:0>}, persistence: {store: m#1, stored: e, offlineEditingAllowed: i.offlineEditingAllowed}});
  if (!((e == null))) goto L_785;
  e;
  goto L_7a6;
  if (!((undefined !== undefined.fileName))) goto L_821;
  if (!((undefined !== e.serverDocumentId))) goto L_821;
  (await u.bindServerDocument(e.serverDocumentId));
  if (!((undefined === e))) goto L_8a3;
  u.connect();
  (await u.waitForInitialDocument());
  p.requireActive();
  if (!((undefined === u.editor.persistence))) goto L_96b;
  throw new t.DocumentPersistenceFailure({kind: n.DocumentPersistenceErrorKind.HostUnavailable, message: "This editor does not support persistent documents."});
  p.requireActive();
  if (!(v)) goto L_9ea;
  (await u.refreshFromStore());
  p.requireActive();
  <?>;
  goto L_b40;
  // [栈深重同步 0 -> 1]
  g = <?>;
  try { // catch -> L_b3f
  p.stopObserving();
  try { // catch -> L_aa6
  try { // catch -> L_a63
  if (!((u == null))) goto L_a33;
  u;
  goto L_a57;
  (await undefined.close());
  <?>;
  // gosub (finally 块) 2665
  undefined;
  goto L_a9b;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 2665
  throw <?>;
  if (!((d == null))) goto L_a74;
  d;
  goto L_a98;
  (await undefined.close());
  // ret (finally 块) 
  <?>;
  // gosub (finally 块) 2835
  undefined;
  goto L_b3c;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_b0d
  if (!(e.isLoggingEnabled)) goto L_b02;
  console.warn("Document resources could not be released after opening failed");
  <?>;
  // gosub (finally 块) 2835
  undefined;
  goto L_b3c;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 2835
  throw <?>;
  p.close();
  // ret (finally 块) 
  throw g;
  // [栈深重同步 0 -> 1]
  throw <?>;
  D = u.close.bind(u);
  u.close = function <atom:0>;
  globalThis.addEventListener("focus", h);
  if (!((globalThis.document == null))) goto L_bfb;
  globalThis.document;
  goto L_c27;
  undefined.addEventListener("visibilitychange", h);
  return u; // async
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
function {
  return;
}

// fn v  args=3 vars=6 closure=4 cpool=2 bc=712B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e, t, n
// locals: i, r, a
// closure: WebDocumentAccount, o, u, s
function {
  let a;
  let r;
  let i;
  i = new WebDocumentAccount(e, n, function <atom:0>, function <atom:0>);
  null;
  t;
  r = {bytes: new Uint8Array(t.bytes)};
  a = undefined;
  try { // catch -> L_266
  a = (await o.openIndexedDBDocumentStore(e));
  (await o.openIndexedDBDocumentStore(e));
  i.requireActive();
  (await a.initialize(r));
  i.requireActive();
  (await a.acceptRemote(r.documentId, r.bytes, r.access));
  (await a.flush());
  i.requireActive();
  u(i.channel, {kind: s.Changed, documentId: r.documentId});
  <?>;
  // gosub (finally 块) 620
  undefined;
  goto L_2c6;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 620
  throw <?>;
  i.close();
  if (!((a == null))) goto L_29f;
  a;
  goto L_2c3;
  (await undefined.close());
  // ret (finally 块) 
  return undefined; // async
}

// fn f  args=1 vars=3 closure=4 cpool=0 bc=270B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e
// locals: t, n
// closure: d, o, u, s
function {
  let n;
  let t;
  t = d(e);
  n = undefined;
  try { // catch -> L_a4
  n = (await o.openIndexedDBDocumentStore(e));
  (await o.openIndexedDBDocumentStore(e));
  (await n.clear());
  u(t, {kind: s.Cleared, documentId: undefined});
  <?>;
  // gosub (finally 块) 170
  undefined;
  goto L_10c;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 170
  throw <?>;
  if (!((t == null))) goto L_b5;
  t;
  goto L_d9;
  undefined.close();
  if (!((n == null))) goto L_e5;
  n;
  goto L_109;
  (await undefined.close());
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e
// closure: n
function {
  return e.listRecoverableDrafts(n);   // tail call
}

// fn h  args=3 vars=3 closure=1 cpool=1 bc=8B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e, t, n
// closure: w
function {
  return w(e, t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e
// closure: t
function {
  return e.getDraft(t);   // tail call
}

// fn p  args=3 vars=3 closure=1 cpool=1 bc=8B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e, t, n
// closure: w
function {
  return w(e, n, function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e
// closure: t, n
function {
  return e.updateDraft(t, n);   // tail call
}

// fn D  args=4 vars=4 closure=1 cpool=1 bc=98B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e, t, n, i
// closure: w
function {
  if (!(!n.fileName.trim())) goto L_58;
  throw new Error("A draft name is required");
  (await w(e, i, function <atom:0>));
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e
// closure: t
function {
  return e.deleteDraft(t);   // tail call
}

// fn g  args=3 vars=3 closure=1 cpool=1 bc=10B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e, t, n
// closure: w
function {
  (await w(e, n, function <atom:0>));
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
function {
  return;
}

// fn w  args=3 vars=6 closure=3 cpool=2 bc=307B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: e, t, n
// locals: i, r, t#1
// closure: WebDocumentAccount, o, l
function {
  let r;
  let i;
  i = new WebDocumentAccount(e, t, function <atom:0>, function <atom:0>);
  r = undefined;
  try { // catch -> L_d1
  let t#1;
  r = (await o.openIndexedDBDocumentStore(e));
  (await o.openIndexedDBDocumentStore(e));
  i.requireActive();
  t#1 = (await n(l(r, i.channel)));
  i.requireActive();
  // gosub (finally 块) 215
  return t#1; // async
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 215
  throw <?>;
  i.close();
  if (!((r == null))) goto L_10a;
  r;
  goto L_12e;
  (await undefined.close());
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=3 vars=26 closure=0 cpool=16 bc=457B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// args: require, module, exports
// locals: e, t, n, i, o, r, a, c, s, d, u, WebDocumentAccount, <class_fields_init>, WebDocumentAccount#1, l, m, v, f, h, p, D, g, w
function {
  d = function d;
  u = function u;
  l = function l;
  m = function m;
  v = function v;
  f = function f;
  h = function h;
  p = function p;
  D = function D;
  g = function g;
  w = function w;
  let WebDocumentAccount#1;
  let c;
  let a;
  let r;
  let o;
  let i;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.openPersistentBrowserSession = undefined;
  exports.cacheWebDocument = undefined;
  exports.clearWebDocumentAccount = undefined;
  exports.listWebDocumentDrafts = undefined;
  exports.getWebDocumentDraft = undefined;
  exports.updateWebDocumentDraft = undefined;
  exports.deleteWebDocumentDraft = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("collaborative_editor/src/DocumentPersistenceFailure");
  n = require("collaborative_editor/src/DocumentPersistenceTypes");
  i = require("collaborative_editor/src/storage/DocumentStorage");
  o = require("collaborative_editor/src/storage/IndexedDBDocumentStore");
  r = require("./BrowserMultiplayerSession");
  a = require("./InitialWritingBlockUpdate");
  c = require("valdi_core/src/CompilerIntrinsics");
  if ((s)) goto L_13f;
  s = {};
  !function <atom:0>({});
  let WebDocumentAccount;
  let <class_fields_init>;
  class WebDocumentAccount extends undefined { ... }
  <proto:WebDocumentAccount>.requireActive = function <atom:0>;
  <proto:WebDocumentAccount>.stopObserving = function <atom:0>;
  <proto:WebDocumentAccount>.close = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WebDocumentAccount>;
  WebDocumentAccount = function <atom:0>;
  // close_loc <class_fields_init>
  WebDocumentAccount#1 = function <atom:0>;
  exports.openPersistentBrowserSession = m;
  exports.cacheWebDocument = v;
  exports.clearWebDocumentAccount = f;
  exports.listWebDocumentDrafts = h;
  exports.getWebDocumentDraft = p;
  exports.updateWebDocumentDraft = D;
  exports.deleteWebDocumentDraft = g;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/BrowserDocumentPersistence
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
