// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=81B file=dil_sandbox/src/DILSandboxHostSpeech
// args: e, s
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.service = e;
  this.send = s;
  this.disposed = false;
  this.hasPresentHost = true;
  this.owners = new Map();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=363B file=dil_sandbox/src/DILSandboxHostSpeech
// args: e
// locals: s, this
// closure: i
function {
  this = this;
  if (!(!this.disposed)) goto L_16a;
  if (!((this.hasPresentHost !== e))) goto L_16a;
  this.hasPresentHost = e;
  if (!(!e)) goto L_16a;
  let s;
  for (const s of Array.from(this.owners.keys())) {
    this.receive({kind: i.DILSpeechCommandKind.Stop, id: s, interactionId: undefined, logging: undefined});
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=272B file=dil_sandbox/src/DILSandboxHostSpeech
// args: e
// closure: this, o, t
function {
  if ((this.disposed)) goto L_10f;
  if (((this.owners.get(o.id) !== t))) goto L_10f;
  t.available = e.available;
  this.send(o.id, e);
  return;
}

// fn <atom:0>  args=1 vars=8 closure=3 cpool=1 bc=3187B file=dil_sandbox/src/DILSandboxHostSpeech
// args: o
// locals: i, t, e, n, t#1, n#1, this
// closure: i, s, e
function {
  this = this;
  let t#1;
  if ((this.disposed)) goto L_a1;
  if ((!Number.isSafeInteger(o.id))) goto L_a1;
  if (!((o.id < 1))) goto L_a4;
  return;
  if (!((o.kind === i.DILSpeechCommandKind.Create))) goto L_686;
  let t;
  let i;
  if (!(this.owners.has(o.id))) goto L_183;
  return;
  i = s.normalizeDILSpeechSource(o.source);
  if (((null === i))) goto L_244;
  if (((undefined === this.service))) goto L_244;
  if (!((this.owners.size >= 64))) goto L_2b4;
  this.send(o.id, s.UNAVAILABLE_DIL_SPEECH);
  return;
  t = {session: undefined, available: false};
  this.owners.set(o.id, t);
  try { // catch -> L_4a5
  let e;
  e = this.service.createSession(i, function <atom:0>);
  if ((this.disposed)) goto L_419;
  if (!((this.owners.get(o.id) !== t))) goto L_444;
  goto L_4a2;
  // [栈深重同步 1 -> 0]
  t.session = e;
  if ((this.hasPresentHost)) goto L_4a2;
  e.stop(undefined);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_685
  if (!(e.isLoggingEnabled)) goto L_501;
  console.warn("DIL speech host session creation failed");
  this.owners.delete(o.id);
  this.disposeSession(t);
  if ((this.disposed)) goto L_682;
  null;
  s.UNAVAILABLE_DIL_SPEECH;
  this.send(o.id, {error: {failureStage: s.DILSpeechFailureStage.Request}});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  t#1 = this.owners.get(o.id);
  if (!((undefined !== t#1))) goto L_c72;
  if (!((o.kind === i.DILSpeechCommandKind.Dispose))) goto L_7fd;
  this.owners.delete(o.id);
  this.disposeSession(t#1);
  return;
  try { // catch -> L_a66
  if (!((o.kind === i.DILSpeechCommandKind.Play))) goto L_933;
  if (!(!this.hasPresentHost)) goto L_898;
  return undefined;
  if (!((t#1.session == null))) goto L_8c4;
  t#1.session;
  goto L_92f;
  undefined.play(s.normalizeDILSpeechRequestLog(o.logging));
  goto L_a64;
  if (!((o.kind === i.DILSpeechCommandKind.Stop))) goto L_a63;
  if (!((t#1.session == null))) goto L_9cf;
  t#1.session;
  goto L_a63;
  if (!((undefined !== o.interactionId))) goto L_a5f;
  goto L_a60;
  // [栈深重同步 3 -> 2]
  undefined.stop(undefined);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n#1 = <?>;
  try { // catch -> L_c71
  if (!(e.isLoggingEnabled)) goto L_ac3;
  console.warn("DIL speech host command failed");
  if ((this.disposed)) goto L_c6e;
  if (((this.owners.get(o.id) !== t#1))) goto L_c6e;
  this.send(o.id, {available: t#1.available, status: s.DILSpeechStatus.Idle, error: {failureStage: s.DILSpeechFailureStage.Play}});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=258B file=dil_sandbox/src/DILSandboxHostSpeech
// locals: e, s, this
function {
  this = this;
  let e;
  this.disposed = true;
  e = Array.from(this.owners.values());
  this.owners.clear();
  let s;
  for (const s of e) {
    this.disposeSession(s);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=200B file=dil_sandbox/src/DILSandboxHostSpeech
// args: s
// locals: i, o
// closure: e
function {
  let i;
  i = s.session;
  s.session = undefined;
  try { // catch -> L_68
  if (!((i == null))) goto L_41;
  i;
  goto L_65;
  undefined.dispose();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_c7
  if (!(e.isLoggingEnabled)) goto L_c4;
  console.warn("DIL speech host disposal failed");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=5 bc=210B file=dil_sandbox/src/DILSandboxHostSpeech
// args: require, module, exports
// locals: e, s, i, DILSandboxHostSpeech, <class_fields_init>, DILSandboxHostSpeech#1
function {
  let DILSandboxHostSpeech#1;
  let i;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSandboxHostSpeech = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  s = require("dil_renderer/src/DILSpeechSynthesis");
  i = require("./DILSandboxSpeech");
  let DILSandboxHostSpeech;
  let <class_fields_init>;
  class DILSandboxHostSpeech extends undefined { ... }
  <proto:DILSandboxHostSpeech>.setHostPresence = function <atom:0>;
  <proto:DILSandboxHostSpeech>.receive = function <atom:0>;
  <proto:DILSandboxHostSpeech>.dispose = function <atom:0>;
  <proto:DILSandboxHostSpeech>.disposeSession = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxHostSpeech>;
  DILSandboxHostSpeech = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxHostSpeech#1 = function <atom:0>;
  exports.DILSandboxHostSpeech = DILSandboxHostSpeech#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxHostSpeech
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
