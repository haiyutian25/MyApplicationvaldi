// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=39B file=oai_platform_services/src/VoiceService
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.service = e;
  this.disposed = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=125B file=oai_platform_services/src/VoiceService
// locals: this
function {
  this = this;
  if (!(this.disposed)) goto L_36;
  return {dictation: false, advancedVoice: false};
  return this.service.getCapabilities();
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=oai_platform_services/src/VoiceService
// args: e
// closure: s, t
function {
  if (!(s.active)) goto L_4e;
  t.onAudioLevel(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=78B file=oai_platform_services/src/VoiceService
// closure: s, t
function {
  if (!(s.active)) goto L_4d;
  t.onAssistantTranscriptComplete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=oai_platform_services/src/VoiceService
// args: e
// closure: s, t
function {
  if (!(s.active)) goto L_4e;
  t.onAssistantTranscriptDelta(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=82B file=oai_platform_services/src/VoiceService
// closure: this, s, t
function {
  if (!(this.end(s))) goto L_51;
  t.onEnded();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=83B file=oai_platform_services/src/VoiceService
// args: e
// closure: this, s, t
function {
  if (!(this.end(s))) goto L_52;
  t.onError(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=oai_platform_services/src/VoiceService
// args: e
// closure: s, t
function {
  if (!(s.active)) goto L_4e;
  t.onStatusChange(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=oai_platform_services/src/VoiceService
// args: e
// closure: s, t
function {
  if (!(s.active)) goto L_4e;
  t.onUserTranscript(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=oai_platform_services/src/VoiceService
// args: e
// closure: s, t
function {
  if (!(s.active)) goto L_4e;
  t.onUserTranscriptDelta(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=80B file=oai_platform_services/src/VoiceService
// closure: s, o
function {
  if (!(s.active)) goto L_4f;
  o.finish();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=81B file=oai_platform_services/src/VoiceService
// args: e
// closure: s, o
function {
  if (!(s.active)) goto L_50;
  o.setMuted(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=oai_platform_services/src/VoiceService
// closure: this, s
function {
  return this.stop(s);   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=11 bc=589B file=oai_platform_services/src/VoiceService
// args: e, t
// locals: s, o, r, this
// closure: i
function {
  this = this;
  let o;
  let s;
  if (!(this.disposed)) goto L_3b;
  throw new Error("Cannot start voice for an inactive account");
  if (!((undefined !== this.attempt))) goto L_70;
  throw new Error("An account voice session is already active");
  s = {active: true, session: undefined, releaseNativeRefs: i.protectNativeRefsForCurrentContextId()};
  o = undefined;
  this.attempt = s;
  try { // catch -> L_16d
  o = this.service.start(e, {onAudioLevel: function <atom:0>, onAssistantTranscriptComplete: function <atom:0>, onAssistantTranscriptDelta: function <atom:0>, onEnded: function <atom:0>, onError: function <atom:0>, onStatusChange: function <atom:0>, onUserTranscript: function <atom:0>, onUserTranscriptDelta: function <atom:0>});
  this.service.start(e, {onAudioLevel: function <atom:0>, onAssistantTranscriptComplete: function <atom:0>, onAssistantTranscriptDelta: function <atom:0>, onEnded: function <atom:0>, onError: function <atom:0>, onStatusChange: function <atom:0>, onUserTranscript: function <atom:0>, onUserTranscriptDelta: function <atom:0>});
  <?>;
  goto L_1c7;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_1c6
  this.end(s);
  s.releaseNativeRefs();
  throw r;
  // [栈深重同步 0 -> 1]
  throw <?>;
  s.session = o;
  if ((s.active)) goto L_226;
  this.stop(s);
  return {finish: function <atom:0>, setMuted: function <atom:0>, stop: function <atom:0>};
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=102B file=oai_platform_services/src/VoiceService
// locals: e, this
function {
  this = this;
  let e;
  this.disposed = true;
  e = this.attempt;
  if (!((undefined !== e))) goto L_65;
  this.stop(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=202B file=oai_platform_services/src/VoiceService
// args: e
// locals: this
function {
  this = this;
  if (!(!!e.active)) goto L_c9;
  e.active = false;
  if (!((this.attempt === e))) goto L_6d;
  this.attempt = undefined;
  undefined;
  if (!((undefined !== e.session))) goto L_c6;
  e.session = undefined;
  e.releaseNativeRefs();
  return true;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=302B file=oai_platform_services/src/VoiceService
// args: t
// locals: i, s, this
// closure: e
function {
  this = this;
  let i;
  i = t.session;
  t.session = undefined;
  this.end(t);
  if (!((undefined !== i))) goto L_12d;
  try { // catch -> L_9a
  i.stop();
  <?>;
  // gosub (finally 块) 262
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_100
  if (!(e.isLoggingEnabled)) goto L_f6;
  console.warn("Voice host failed to stop its account-owned session");
  <?>;
  // gosub (finally 块) 262
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 262
  throw <?>;
  t.releaseNativeRefs();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=11B file=oai_platform_services/src/VoiceService
// closure: AccountVoiceService, t
function {
  return new AccountVoiceService(t);
}

// fn o  args=1 vars=2 closure=3 cpool=1 bc=221B file=oai_platform_services/src/VoiceService
// args: e
// locals: t
// closure: AccountVoiceService, t, s
function {
  if (!(t.isVersionAtLeast(64))) goto L_dc;
  if (!((undefined !== e))) goto L_dc;
  if (!((undefined !== e.accountScope))) goto L_dc;
  let t;
  t = e.voiceService;
  if (!((undefined !== t))) goto L_d9;
  return s.accountContainerFor(e).resolve(AccountVoiceService, function <atom:0>);   // tail call
  // close_loc t
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=7 bc=257B file=oai_platform_services/src/VoiceService
// args: require, module, exports
// locals: e, t, i, s, AccountVoiceService, <class_fields_init>, AccountVoiceService#1, o
function {
  o = function o;
  let AccountVoiceService#1;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AccountVoiceService = undefined;
  exports.getAccountVoiceService = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/CompilerIntrinsics");
  i = require("valdi_core/src/NativeReferences");
  s = require("./AccountContainer");
  let AccountVoiceService;
  let <class_fields_init>;
  class AccountVoiceService extends undefined { ... }
  <proto:AccountVoiceService>.getCapabilities = function <atom:0>;
  <proto:AccountVoiceService>.start = function <atom:0>;
  <proto:AccountVoiceService>.dispose = function <atom:0>;
  <proto:AccountVoiceService>.end = function <atom:0>;
  <proto:AccountVoiceService>.stop = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AccountVoiceService>;
  AccountVoiceService = function <atom:0>;
  // close_loc <class_fields_init>
  AccountVoiceService#1 = function <atom:0>;
  exports.AccountVoiceService = AccountVoiceService#1;
  exports.getAccountVoiceService = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_platform_services/src/VoiceService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
