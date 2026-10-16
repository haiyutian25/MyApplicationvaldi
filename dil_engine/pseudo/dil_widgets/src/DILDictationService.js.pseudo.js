// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=8B file=dil_widgets/src/DILDictationService
// closure: AccountDictationSessions
function {
  return new AccountDictationSessions();
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=79B file=dil_widgets/src/DILDictationService
// closure: AccountDictationSessions, i, e
function {
  return i.accountContainerFor(e).resolve(AccountDictationSessions, function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=50B file=dil_widgets/src/DILDictationService
// closure: a, n, t, c, r, s
function {
  return a.createSession(n, t, c, r, s);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=7 cpool=2 bc=120B file=dil_widgets/src/DILDictationService
// args: c, r
// locals: a
// closure: AccountDictationSessions, i, e, n, t, s, o
function {
  let a;
  a = o.withGlobalNativeRefs(function <atom:0>);
  return o.withLocalNativeRefs(t.contextId, function <atom:0>);   // tail call
}

// fn c  args=3 vars=4 closure=4 cpool=1 bc=159B file=dil_widgets/src/DILDictationService
// args: e, t, s
// locals: n
// closure: AccountDictationSessions, i, o, n
function {
  if (!(n.isVersionAtLeast(152))) goto L_9e;
  let n;
  if (!((e == null))) goto L_36;
  e;
  goto L_57;
  n = undefined.dictationService;
  if (!((undefined !== n))) goto L_9b;
  if (!((e == null))) goto L_69;
  e;
  goto L_8a;
  if (!((undefined !== undefined.accountScope))) goto L_9b;
  return {createSession: function <atom:0>};
  // close_loc n
  return;
}

// fn r  args=1 vars=2 closure=2 cpool=0 bc=337B file=dil_widgets/src/DILDictationService
// args: e
// locals: t
// closure: n, s
function {
  let t;
  if (!((undefined === e.language))) goto L_2c;
  goto L_54;
  // [栈深重同步 1 -> 0]
  t = {language: e.language};
  if (!((undefined !== e.context))) goto L_14d;
  if (!(n.isVersionAtLeast(255))) goto L_14d;
  null;
  t;
  return {context: {kind: s.DictationContextKind.SpeakingExercise, expectedPhrase: e.context.expectedPhrase}};
  return t;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=47B file=dil_widgets/src/DILDictationService
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.disposed = false;
  this.sessions = new Set();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=dil_widgets/src/DILDictationService
// closure: this, s
function {
  return this.sessions.delete(s);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=114B file=dil_widgets/src/DILDictationService
// closure: s, t
function {
  return s.receive({kind: t.DILDictationEventKind.Recording});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=114B file=dil_widgets/src/DILDictationService
// closure: s, t
function {
  return s.receive({kind: t.DILDictationEventKind.Stopping});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=120B file=dil_widgets/src/DILDictationService
// args: e
// closure: s, t
function {
  return s.receive({kind: t.DILDictationEventKind.Transcript, transcript: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=120B file=dil_widgets/src/DILDictationService
// args: e
// closure: s, t
function {
  return s.receive({kind: t.DILDictationEventKind.Done, transcript: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=198B file=dil_widgets/src/DILDictationService
// args: e
// closure: s, t
function {
  return s.receive({kind: t.DILDictationEventKind.Error, error: {code: e.code, message: e.message}});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=114B file=dil_widgets/src/DILDictationService
// closure: s, t
function {
  return s.receive({kind: t.DILDictationEventKind.Cancelled});   // tail call
}

// fn <atom:0>  args=5 vars=10 closure=4 cpool=7 bc=535B file=dil_widgets/src/DILDictationService
// args: e, i, s, n, c
// locals: a, d, s#1, l, this
// closure: t, r, o, NativeDictationAttempt
function {
  this = this;
  let d;
  let a;
  if (!(this.disposed)) goto L_3d;
  throw new Error("The dictation account has ended.");
  a = r(s);
  d = o.protectNativeRefsForContextId(i.contextId);
  try { // catch -> L_20b
  let s#1;
  s#1 = new NativeDictationAttempt(n, c, function <atom:0>, o.protectNativeRefsForContextId(i.contextId));
  this.sessions.add(s#1);
  try { // catch -> L_1da
  s#1.attach(e.createSession(a, {onRecording: function <atom:0>, onStopping: function <atom:0>, onTranscript: function <atom:0>, onDone: function <atom:0>, onError: function <atom:0>, onCancelled: function <atom:0>}));
  // gosub (finally 块) 529
  return s#1;
  // [栈深重同步 0 -> 1]
  l = <?>;
  try { // catch -> L_20a
  s#1.dispose();
  throw l;
  // [栈深重同步 0 -> 1]
  throw <?>;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 529
  throw <?>;
  d();
  // ret (finally 块) 
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=252B file=dil_widgets/src/DILDictationService
// locals: i, t, this
// closure: e
function {
  this = this;
  this.disposed = true;
  let i;
  for (const i of Array.from(this.sessions)) {
    try { // catch -> L_91
    i.cancel();
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    t = <?>;
    try { // catch -> L_f1
    if (!(e.isLoggingEnabled)) goto L_ed;
    console.warn("Dictation account cancellation observer failed");
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  return;
}

// fn <atom:0>  args=4 vars=5 closure=1 cpool=0 bc=96B file=dil_widgets/src/DILDictationService
// args: e, t, i, s
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.onEvent = e;
  this.consumeUserInteraction = t;
  this.release = i;
  this.releaseNativeRefs = s;
  this.closed = false;
  this.started = false;
  this.stopped = false;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=89B file=dil_widgets/src/DILDictationService
// args: e
// locals: this
function {
  this = this;
  this.session = e;
  if (!(this.closed)) goto L_58;
  this.releaseNativeSession();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=397B file=dil_widgets/src/DILDictationService
// locals: this
// closure: t
function {
  this = this;
  if ((this.closed)) goto L_18c;
  if ((this.started)) goto L_18c;
  if ((this.stopped)) goto L_18c;
  if (!(this.consumeUserInteraction())) goto L_102;
  this.started = true;
  if (!((this.session == null))) goto L_db;
  this.session;
  goto L_18c;
  goto L_18c;
  // [栈深重同步 1 -> 0]
  this.receive({kind: t.DILDictationEventKind.Error, error: {code: "interaction_required", message: "Dictation requires a direct user interaction."}});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=172B file=dil_widgets/src/DILDictationService
// locals: this
function {
  this = this;
  if ((this.closed)) goto L_ab;
  if ((this.stopped)) goto L_ab;
  this.stopped = true;
  if (!((this.session == null))) goto L_87;
  this.session;
  goto L_ab;
  undefined.stop();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=446B file=dil_widgets/src/DILDictationService
// locals: i, this
// closure: e, t
function {
  this = this;
  if (!(!this.closed)) goto L_1bd;
  this.closed = true;
  this.release();
  try { // catch -> L_b9
  if (!((this.session == null))) goto L_8b;
  this.session;
  goto L_af;
  undefined.cancel();
  <?>;
  // gosub (finally 块) 293
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_11f
  if (!(e.isLoggingEnabled)) goto L_115;
  console.warn("Native dictation cancellation failed");
  <?>;
  // gosub (finally 块) 293
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 293
  throw <?>;
  this.releaseNativeSession();
  this.onEvent({kind: t.DILDictationEventKind.Cancelled});
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=128B file=dil_widgets/src/DILDictationService
// locals: this
function {
  this = this;
  if ((this.closed)) goto L_7f;
  this.closed = true;
  this.release();
  this.releaseNativeSession();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=447B file=dil_widgets/src/DILDictationService
// args: e
// locals: this
// closure: t
function {
  this = this;
  if ((this.closed)) goto L_1be;
  if (!((e.kind !== t.DILDictationEventKind.Done))) goto L_16e;
  if (!((e.kind !== t.DILDictationEventKind.Error))) goto L_16e;
  if (((e.kind !== t.DILDictationEventKind.Cancelled))) goto L_197;
  this.dispose();
  this.onEvent(e);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=285B file=dil_widgets/src/DILDictationService
// locals: t, i, e, this
// closure: e
function {
  this = this;
  let t;
  t = this.session;
  this.session = undefined;
  try { // catch -> L_71
  if (!((t == null))) goto L_43;
  t;
  goto L_67;
  undefined.dispose();
  <?>;
  // gosub (finally 块) 221
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_d7
  if (!(e.isLoggingEnabled)) goto L_cd;
  console.warn("Native dictation disposal failed");
  <?>;
  // gosub (finally 块) 221
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 221
  throw <?>;
  let e;
  e = this.releaseNativeRefs;
  this.releaseNativeRefs = undefined;
  if (!((e == null))) goto L_119;
  e;
  goto L_11a;
  undefined();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=13 bc=322B file=dil_widgets/src/DILDictationService
// args: require, module, exports
// locals: e, t, i, s, n, o, c, r, AccountDictationSessions, <class_fields_init>, AccountDictationSessions#1, NativeDictationAttempt, <class_fields_init>#1, NativeDictationAttempt#1
function {
  c = function c;
  r = function r;
  let NativeDictationAttempt#1;
  let AccountDictationSessions#1;
  let o;
  let n;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createDILDictationService = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("dil_renderer/src/DILDictation");
  i = require("oai_platform_services/src/AccountContainer");
  s = require("oai_voice_service/src/DictationTypes");
  n = require("valdi_core/src/CompilerIntrinsics");
  o = require("valdi_core/src/NativeReferences");
  exports.createDILDictationService = c;
  let AccountDictationSessions;
  let <class_fields_init>;
  class AccountDictationSessions extends undefined { ... }
  <proto:AccountDictationSessions>.createSession = function <atom:0>;
  <proto:AccountDictationSessions>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AccountDictationSessions>;
  AccountDictationSessions = function <atom:0>;
  // close_loc <class_fields_init>
  AccountDictationSessions#1 = function <atom:0>;
  let NativeDictationAttempt;
  let <class_fields_init>#1;
  class NativeDictationAttempt extends undefined { ... }
  <proto:NativeDictationAttempt>.attach = function <atom:0>;
  <proto:NativeDictationAttempt>.start = function <atom:0>;
  <proto:NativeDictationAttempt>.stop = function <atom:0>;
  <proto:NativeDictationAttempt>.cancel = function <atom:0>;
  <proto:NativeDictationAttempt>.dispose = function <atom:0>;
  <proto:NativeDictationAttempt>.receive = function <atom:0>;
  <proto:NativeDictationAttempt>.releaseNativeSession = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:NativeDictationAttempt>;
  NativeDictationAttempt = function <atom:0>;
  // close_loc <class_fields_init>#1
  NativeDictationAttempt#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILDictationService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
