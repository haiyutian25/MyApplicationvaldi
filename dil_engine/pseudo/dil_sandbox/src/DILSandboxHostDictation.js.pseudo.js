// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=92B file=dil_sandbox/src/DILSandboxHostDictation
// args: t, s
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.service = t;
  this.send = s;
  this.disposed = false;
  this.hasPresentHost = true;
  this.lastId = 0;
  this.attempts = new Map();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=647B file=dil_sandbox/src/DILSandboxHostDictation
// args: t
// closure: this, e, o, s
function {
  if ((this.disposed)) goto L_286;
  if (((this.attempts.get(e) !== o))) goto L_286;
  if (!((t.kind !== s.DILDictationEventKind.Done))) goto L_1c0;
  if (!((t.kind !== s.DILDictationEventKind.Error))) goto L_1c0;
  if (((t.kind !== s.DILDictationEventKind.Cancelled))) goto L_236;
  this.attempts.delete(e);
  this.disposeSession(o);
  if ((this.disposed)) goto L_286;
  this.send(e, t);
  return;
}

// fn <atom:0>  args=1 vars=9 closure=2 cpool=1 bc=2486B file=dil_sandbox/src/DILSandboxHostDictation
// args: t
// locals: e, i, o, t#1, n, o#1, n#1, this
// closure: s, i
function {
  this = this;
  let o#1;
  let e;
  e = t.id;
  if ((this.disposed)) goto L_89;
  if ((!Number.isSafeInteger(e))) goto L_89;
  if (!((e < 1))) goto L_8c;
  return;
  if (!((t.kind === i.DILDictationCommandKind.Create))) goto L_4a2;
  let o;
  let i;
  if (!((e <= this.lastId))) goto L_129;
  return;
  this.lastId = e;
  if (!(!this.hasPresentHost)) goto L_1d3;
  this.send(e, {kind: s.DILDictationEventKind.Cancelled});
  return;
  i = s.normalizeDILDictationOptions(t.options);
  if (!((null === i))) goto L_257;
  this.sendError(e, "invalid_options", "Invalid dictation options.");
  return;
  if (((undefined === this.service))) goto L_2c7;
  if (!((this.attempts.size >= 64))) goto L_2fe;
  this.sendError(e, "integration_error", "The dictation host service is not configured or cannot allocate a session.");
  return;
  o = {session: undefined, started: false, stopped: false};
  this.attempts.set(e, o);
  try { // catch -> L_46b
  let t#1;
  t#1 = this.service.createSession(i, function <atom:0>);
  o.session = t#1;
  if ((this.disposed)) goto L_43b;
  if (!((this.attempts.get(e) !== o))) goto L_468;
  this.disposeSession(o);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_4a1
  this.fail(e, o);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  o#1 = this.attempts.get(e);
  if (!((undefined !== o#1))) goto L_9b5;
  try { // catch -> L_97e
  if (!((t.kind === i.DILDictationCommandKind.Start))) goto L_61e;
  if ((o#1.started)) goto L_5b7;
  if (!(o#1.stopped)) goto L_5bc;
  return undefined;
  // [栈深重同步 0 -> 1]
  o#1.started = true;
  if (!((o#1.session == null))) goto L_5f6;
  o#1.session;
  goto L_61a;
  undefined.start();
  goto L_97b;
  if (!((<?> === i.DILDictationCommandKind.Stop))) goto L_6f5;
  if (!(o#1.stopped)) goto L_693;
  return undefined;
  // [栈深重同步 0 -> 1]
  o#1.stopped = true;
  if (!((o#1.session == null))) goto L_6cd;
  o#1.session;
  goto L_6f1;
  undefined.stop();
  goto L_97b;
  if (!((<?> === i.DILDictationCommandKind.Cancel))) goto L_8bd;
  this.attempts.delete(e);
  try { // catch -> L_7ed
  if (!((o#1.session == null))) goto L_7bd;
  o#1.session;
  goto L_7e1;
  undefined.cancel();
  <?>;
  // gosub (finally 块) 2035
  undefined;
  goto L_97b;
  // [栈深重同步 0 -> 2]
  // gosub (finally 块) 2035
  throw <?>;
  this.disposeSession(o#1);
  if ((this.disposed)) goto L_8b8;
  this.send(e, {kind: s.DILDictationEventKind.Cancelled});
  // ret (finally 块) 
  goto L_97b;
  if (!((<?> === i.DILDictationCommandKind.Dispose))) goto L_97b;
  this.attempts.delete(e);
  this.disposeSession(o#1);
  <?>;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n#1 = <?>;
  try { // catch -> L_9b4
  this.fail(e, o#1);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=266B file=dil_sandbox/src/DILSandboxHostDictation
// args: t
// locals: s, this
// closure: i
function {
  this = this;
  this.hasPresentHost = t;
  if (!(!t)) goto L_109;
  let s;
  for (const s of Array.from(this.attempts.keys())) {
    this.receive({kind: i.DILDictationCommandKind.Cancel, id: s});
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=294B file=dil_sandbox/src/DILSandboxHostDictation
// args: t
// locals: s, this
function {
  this = this;
  let s;
  s = this.attempts.get(t);
  if (((undefined === s))) goto L_125;
  if ((s.started)) goto L_125;
  this.attempts.delete(t);
  this.disposeSession(s);
  this.sendError(t, "interaction_required", "Dictation requires a direct user interaction.");
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=258B file=dil_sandbox/src/DILSandboxHostDictation
// locals: t, s, this
function {
  this = this;
  let t;
  this.disposed = true;
  t = Array.from(this.attempts.values());
  this.attempts.clear();
  let s;
  for (const s of t) {
    this.disposeSession(s);
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=329B file=dil_sandbox/src/DILSandboxHostDictation
// args: s, i
// locals: this
// closure: t
function {
  this = this;
  if (!(t.isLoggingEnabled)) goto L_58;
  console.warn("DIL dictation host command failed");
  if (!((this.attempts.get(s) === i))) goto L_148;
  this.attempts.delete(s);
  this.disposeSession(i);
  this.sendError(s, "host_error", "Dictation could not complete. Please try again.");
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=175B file=dil_sandbox/src/DILSandboxHostDictation
// args: t, i, e
// locals: this
// closure: s
function {
  this = this;
  if ((this.disposed)) goto L_ae;
  this.send(t, {kind: s.DILDictationEventKind.Error, error: {code: i, message: e}});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=200B file=dil_sandbox/src/DILSandboxHostDictation
// args: s
// locals: i, e
// closure: t
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
  e = <?>;
  try { // catch -> L_c7
  if (!(t.isLoggingEnabled)) goto L_c4;
  console.warn("DIL dictation host disposal failed");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=8 bc=234B file=dil_sandbox/src/DILSandboxHostDictation
// args: require, module, exports
// locals: t, s, i, DILSandboxHostDictation, <class_fields_init>, DILSandboxHostDictation#1
function {
  let DILSandboxHostDictation#1;
  let i;
  let s;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSandboxHostDictation = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  s = require("dil_renderer/src/DILDictation");
  i = require("./DILSandboxDictation");
  let DILSandboxHostDictation;
  let <class_fields_init>;
  class DILSandboxHostDictation extends undefined { ... }
  <proto:DILSandboxHostDictation>.receive = function <atom:0>;
  <proto:DILSandboxHostDictation>.setHostPresence = function <atom:0>;
  <proto:DILSandboxHostDictation>.rejectStart = function <atom:0>;
  <proto:DILSandboxHostDictation>.dispose = function <atom:0>;
  <proto:DILSandboxHostDictation>.fail = function <atom:0>;
  <proto:DILSandboxHostDictation>.sendError = function <atom:0>;
  <proto:DILSandboxHostDictation>.disposeSession = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxHostDictation>;
  DILSandboxHostDictation = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxHostDictation#1 = function <atom:0>;
  exports.DILSandboxHostDictation = DILSandboxHostDictation#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxHostDictation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
