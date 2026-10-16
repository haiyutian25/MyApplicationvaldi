// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=oai_platform_services/src/SpeechSynthesizer
// args: e
function {
  e.Idle = "idle";
  e.Loading = "loading";
  e.Playing = "playing";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=oai_platform_services/src/SpeechSynthesizer
// args: e
function {
  e.Play = "play";
  e.Request = "request";
  e.Response = "response";
  e.Streaming = "streaming";
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=86B file=oai_platform_services/src/SpeechSynthesizer
// args: e, s
// locals: this
// closure: <class_fields_init>, a
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.factory = e;
  this.onState = s;
  this.revision = 0;
  this.disposed = false;
  this.playbackRequested = false;
  this.snapshot = a;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=oai_platform_services/src/SpeechSynthesizer
// locals: this
function {
  this = this;
  return this.snapshot;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=206B file=oai_platform_services/src/SpeechSynthesizer
// args: e
// closure: this, t, n
function {
  if ((this.disposed)) goto L_cd;
  if (((t !== this.revision))) goto L_cd;
  if (!(this.playbackRequested)) goto L_9c;
  goto L_ca;
  // [栈深重同步 3 -> 2]
  null;
  e;
  this.publish({status: n.Idle});
  return;
}

// fn <atom:0>  args=1 vars=6 closure=5 cpool=1 bc=655B file=oai_platform_services/src/SpeechSynthesizer
// args: e
// locals: s, t, e#1, i, this
// closure: n, u, d, a, r
function {
  this = this;
  let t;
  let s;
  if (!(this.disposed)) goto L_2f;
  return;
  s = u(e);
  if (!(d(this.source, s))) goto L_5e;
  return;
  this.source = s;
  this.releaseSession();
  this.publish(a);
  if ((this.disposed)) goto L_134;
  if (((undefined === this.factory))) goto L_134;
  if (!((0 === s.text.length))) goto L_137;
  return;
  t = this.revision;
  try { // catch -> L_23b
  let e#1;
  e#1 = this.factory.createSession(s, function <atom:0>);
  if ((this.disposed)) goto L_1fe;
  if (!((t !== this.revision))) goto L_229;
  goto L_238;
  // [栈深重同步 1 -> 0]
  this.session = e#1;
  e#1;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_28e
  this.fail(r.Request);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=648B file=oai_platform_services/src/SpeechSynthesizer
// locals: e, s, this
// closure: n, r
function {
  this = this;
  let e;
  if ((this.disposed)) goto L_107;
  if ((!this.snapshot.available)) goto L_107;
  if (((this.snapshot.status !== n.Idle))) goto L_107;
  if (!((undefined === this.session))) goto L_10a;
  return;
  e = this.session;
  this.playbackRequested = true;
  null;
  this.snapshot;
  this.publish({error: null});
  if (!(!this.disposed)) goto L_287;
  if (!((e === this.session))) goto L_287;
  if (!(this.playbackRequested)) goto L_287;
  try { // catch -> L_236
  e.play();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_286
  this.fail(r.Play);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=372B file=oai_platform_services/src/SpeechSynthesizer
// locals: e, this
// closure: n, r
function {
  this = this;
  this.playbackRequested = false;
  if (!(!this.disposed)) goto L_173;
  if (!((undefined !== this.session))) goto L_173;
  try { // catch -> L_122
  this.session.stop();
  null;
  this.snapshot;
  this.publish({status: n.Idle});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_172
  this.fail(r.Play);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=214B file=oai_platform_services/src/SpeechSynthesizer
// locals: this
// closure: a
function {
  this = this;
  if ((this.disposed)) goto L_d5;
  this.disposed = true;
  this.releaseSession();
  if (!((this.factory == null))) goto L_87;
  this.factory;
  goto L_ac;
  undefined.release(this);
  this.publish(a);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=258B file=oai_platform_services/src/SpeechSynthesizer
// locals: s, t, this
// closure: e
function {
  this = this;
  let s;
  this.playbackRequested = false;
  this.revision = (this.revision ++);
  s = this.session;
  this.session = undefined;
  try { // catch -> L_a2
  if (!((s == null))) goto L_7b;
  s;
  goto L_9f;
  undefined.dispose();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_101
  if (!(e.isLoggingEnabled)) goto L_fe;
  console.warn("Speech synthesis host failed to dispose its owned session");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=223B file=oai_platform_services/src/SpeechSynthesizer
// args: s
// locals: this
// closure: e, a
function {
  this = this;
  if (!(e.isLoggingEnabled)) goto L_7d;
  console.warn("Speech synthesis host failed during ".concat(s));
  this.releaseSession();
  null;
  a;
  this.publish({error: {failureStage: s}});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=52B file=oai_platform_services/src/SpeechSynthesizer
// args: e
// locals: this
function {
  this = this;
  this.snapshot = e;
  this.onState(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=8B file=oai_platform_services/src/SpeechSynthesizer
// closure: AccountSpeechSessions
function {
  return new AccountSpeechSessions();
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=79B file=oai_platform_services/src/SpeechSynthesizer
// closure: AccountSpeechSessions, i, e
function {
  return i.accountContainerFor(e).resolve(AccountSpeechSessions, function <atom:0>);   // tail call
}

// fn c  args=3 vars=4 closure=5 cpool=1 bc=233B file=oai_platform_services/src/SpeechSynthesizer
// args: e, o, n
// locals: s
// closure: AccountSpeechSessions, i, s, t, SpeechSynthesizer
function {
  if (!(s.isVersionAtLeast(111))) goto L_df;
  let s;
  if (!((e == null))) goto L_38;
  e;
  goto L_59;
  s = undefined.speechSynthesisService;
  if (!((undefined !== s))) goto L_df;
  if (!((e == null))) goto L_6b;
  e;
  goto L_8c;
  if (!((undefined !== undefined.accountScope))) goto L_df;
  return t.withGlobalNativeRefs(function <atom:0>).createOwner(s, o, n);   // tail call
  return new SpeechSynthesizer(undefined, n);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=35B file=oai_platform_services/src/SpeechSynthesizer
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.owners = new Set();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=8B file=oai_platform_services/src/SpeechSynthesizer
// args: t, i
// closure: p, e, s
function {
  return p(e, s, t, i);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=71B file=oai_platform_services/src/SpeechSynthesizer
// args: e
// closure: this
function {
  return this.owners.delete(e);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=2 cpool=2 bc=117B file=oai_platform_services/src/SpeechSynthesizer
// args: e, s, t
// locals: i, this
// closure: p, SpeechSynthesizer
function {
  this = this;
  let i;
  i = new SpeechSynthesizer({createSession: function <atom:0>, release: function <atom:0>}, t);
  this.owners.add(i);
  return i;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=160B file=oai_platform_services/src/SpeechSynthesizer
// locals: e, this
function {
  this = this;
  let e;
  for (const e of this.owners) {
    e.dispose();
  }
  this.owners.clear();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=7B file=oai_platform_services/src/SpeechSynthesizer
// args: e
// closure: o, l
function {
  return o(l(e));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=51B file=oai_platform_services/src/SpeechSynthesizer
// closure: o, l, e, i
function {
  return e.createSession(i, {onStateChanged: function <atom:0>});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=oai_platform_services/src/SpeechSynthesizer
// closure: r
function {
  return r.play();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=oai_platform_services/src/SpeechSynthesizer
// closure: r
function {
  return r.stop();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=80B file=oai_platform_services/src/SpeechSynthesizer
// closure: a, r, n
function {
  if (!(!a)) goto L_4f;
  a = true;
  true;
  try { // catch -> L_43
  r.dispose();
  <?>;
  // gosub (finally 块) 73
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 73
  throw <?>;
  n();
  // ret (finally 块) 
  return;
}

// fn p  args=4 vars=8 closure=2 cpool=4 bc=216B file=oai_platform_services/src/SpeechSynthesizer
// args: e, s, i, o
// locals: n, r, a, r#1
// closure: l, t
function {
  let n;
  n = t.protectNativeRefsForContextId(s.contextId);
  try { // catch -> L_ca
  let a;
  let r;
  r = t.withLocalNativeRefs(s.contextId, function <atom:0>);
  a = false;
  return {play: function <atom:0>, stop: function <atom:0>, dispose: function <atom:0>};
  // [栈深重同步 0 -> 1]
  r#1 = <?>;
  try { // catch -> L_d7
  n();
  throw r#1;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn l  args=1 vars=4 closure=3 cpool=0 bc=1087B file=oai_platform_services/src/SpeechSynthesizer
// args: e
// locals: s, t, s#1
// closure: n, o, r
function {
  let t;
  let s;
  s = n.Idle;
  if (!(e.available)) goto L_17e;
  if (!((undefined === e.error))) goto L_17e;
  if (!((e.status === o.OAISpeechSynthesisStatus.Loading))) goto L_10d;
  s = n.Loading;
  n.Loading;
  goto L_17d;
  if (!((e.status === o.OAISpeechSynthesisStatus.Playing))) goto L_17d;
  s = n.Playing;
  n.Playing;
  e.status;
  t = null;
  if (!((undefined !== e.error))) goto L_406;
  let s#1;
  s#1 = r.Play;
  if (!((e.error.failureStage === o.OAISpeechSynthesisFailureStage.Request))) goto L_285;
  s#1 = r.Request;
  r.Request;
  goto L_367;
  if (!((e.error.failureStage === o.OAISpeechSynthesisFailureStage.Response))) goto L_2f7;
  s#1 = r.Response;
  r.Response;
  goto L_367;
  if (!((e.error.failureStage === o.OAISpeechSynthesisFailureStage.Streaming))) goto L_367;
  s#1 = r.Streaming;
  r.Streaming;
  e.error.failureStage;
  t = {failureStage: s#1, errorCode: e.error.errorCode, httpStatus: e.error.httpStatus};
  {failureStage: s#1, errorCode: e.error.errorCode, httpStatus: e.error.httpStatus};
  return {status: s, available: e.available, error: t};
}

// fn u  args=1 vars=3 closure=1 cpool=3 bc=877B file=oai_platform_services/src/SpeechSynthesizer
// args: e
// locals: s, t
// closure: h
function {
  let t;
  let s;
  if (!(("string" == typeof e.language))) goto L_ce;
  goto L_cf;
  // [栈深重同步 1 -> 0]
  s = undefined;
  t = e.playbackSpeed;
  if (!(("string" == typeof e.text))) goto L_167;
  goto L_168;
  // [栈深重同步 2 -> 1]
  if (!((undefined !== s))) goto L_1c4;
  if (!(("auto" !== s))) goto L_1c4;
  if (!(("unknown" !== s))) goto L_1c4;
  if (!((s.length <= 63))) goto L_1c4;
  if (!(h.test(s))) goto L_1c4;
  goto L_1c5;
  // [栈深重同步 2 -> 1]
  if (!(("string" == typeof e.pronunciationHint))) goto L_23d;
  if ((e.pronunciationHint.trim())) goto L_242;
  if (!(("number" == typeof t))) goto L_295;
  if (!(Number.isFinite(t))) goto L_295;
  if (!((t >= 0.25))) goto L_295;
  if (!((t <= 4))) goto L_295;
  goto L_296;
  // [栈深重同步 2 -> 1]
  if (!(("string" == typeof e.version))) goto L_311;
  if (!((e.version.length > 0))) goto L_311;
  goto L_312;
  // [栈深重同步 2 -> 1]
  if (!(("string" == typeof e.source))) goto L_366;
  goto L_367;
  // [栈深重同步 2 -> 1]
  return {text: "", language: undefined, pronunciationHint: undefined, playbackSpeed: undefined, version: undefined, source: undefined};
}

// fn d  args=2 vars=2 closure=0 cpool=0 bc=457B file=oai_platform_services/src/SpeechSynthesizer
// args: e, s
function {
  if (!((undefined !== e))) goto L_1c8;
  if (!((e.text === s.text))) goto L_1c8;
  if (!((e.language === s.language))) goto L_1c8;
  if (!((e.pronunciationHint === s.pronunciationHint))) goto L_1c8;
  if (!((e.playbackSpeed === s.playbackSpeed))) goto L_1c8;
  if (!((e.version === s.version))) goto L_1c8;
  return (e.source === s.source);
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=21 bc=494B file=oai_platform_services/src/SpeechSynthesizer
// args: require, module, exports
// locals: e, s, t, i, o, n, r, a, h, SpeechSynthesizer, <class_fields_init>, SpeechSynthesizer#1, c, AccountSpeechSessions, <class_fields_init>#1, AccountSpeechSessions#1, p, l, u, d
function {
  c = function c;
  p = function p;
  l = function l;
  u = function u;
  d = function d;
  let AccountSpeechSessions#1;
  let SpeechSynthesizer#1;
  let h;
  let a;
  let o;
  let i;
  let t;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SpeechSynthesisStatus = undefined;
  exports.SpeechSynthesisFailureStage = undefined;
  exports.SpeechSynthesizer = undefined;
  exports.createSpeechSynthesizer = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  s = require("valdi_core/src/CompilerIntrinsics");
  t = require("valdi_core/src/NativeReferences");
  i = require("./AccountContainer");
  o = require("./OAISpeechSynthesisService");
  if ((n)) goto L_f6;
  n = {};
  exports.SpeechSynthesisStatus = {};
  !function <atom:0>({});
  if ((r)) goto L_10f;
  r = {};
  exports.SpeechSynthesisFailureStage = {};
  function <atom:0>({});
  a = {status: n.Idle, available: false, error: null};
  h = new RegExp("^[a-z]{1,8}(?:-[a-z0-9]{1,8}){0,7}$");
  let SpeechSynthesizer;
  let <class_fields_init>;
  class SpeechSynthesizer extends undefined { ... }
  <proto:SpeechSynthesizer>.state = function <atom:0>;
  <proto:SpeechSynthesizer>.setSource = function <atom:0>;
  <proto:SpeechSynthesizer>.play = function <atom:0>;
  <proto:SpeechSynthesizer>.stop = function <atom:0>;
  <proto:SpeechSynthesizer>.dispose = function <atom:0>;
  <proto:SpeechSynthesizer>.releaseSession = function <atom:0>;
  <proto:SpeechSynthesizer>.fail = function <atom:0>;
  <proto:SpeechSynthesizer>.publish = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SpeechSynthesizer>;
  SpeechSynthesizer = function <atom:0>;
  // close_loc <class_fields_init>
  SpeechSynthesizer#1 = function <atom:0>;
  exports.SpeechSynthesizer = SpeechSynthesizer#1;
  exports.createSpeechSynthesizer = c;
  let AccountSpeechSessions;
  let <class_fields_init>#1;
  class AccountSpeechSessions extends undefined { ... }
  <proto:AccountSpeechSessions>.createOwner = function <atom:0>;
  <proto:AccountSpeechSessions>.dispose = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AccountSpeechSessions>;
  AccountSpeechSessions = function <atom:0>;
  // close_loc <class_fields_init>#1
  AccountSpeechSessions#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_platform_services/src/SpeechSynthesizer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
