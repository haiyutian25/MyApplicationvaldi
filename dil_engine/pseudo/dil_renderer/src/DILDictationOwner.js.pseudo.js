// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=dil_renderer/src/DILDictationOwner
// args: t
// closure: this, i
function {
  return this.receive(i, t);   // tail call
}

// fn <atom:0>  args=0 vars=6 closure=3 cpool=1 bc=1104B file=dil_renderer/src/DILDictationOwner
// locals: t, i, n, a, s, a#1
// closure: this, e, s
function {
  let n;
  let i;
  let t;
  if ((this.disposed)) goto L_53;
  if (!((undefined !== this.attempt))) goto L_56;
  return;
  t = this.runtime;
  if (!((undefined === t))) goto L_117;
  null;
  e;
  this.update({status: s.DILDictationStatus.Error, error: {code: "integration_error", message: "The dictation host service is not configured."}});
  return;
  if (!(!t.isUserInteraction())) goto L_142;
  return;
  this.generation = (this.generation ++);
  i = {generation: (this.generation ++), session: undefined, startInvoked: false, stopSent: false};
  n = undefined;
  this.attempt = i;
  null;
  e;
  this.state = {status: s.DILDictationStatus.Starting};
  try { // catch -> L_273
  if (!((undefined === this.options))) goto L_248;
  goto L_26a;
  // [栈深重同步 2 -> 1]
  n = s.normalizeDILDictationOptions(this.options);
  s.normalizeDILDictationOptions(this.options);
  <?>;
  goto L_283;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_282
  n = null;
  null;
  <?>;
  goto L_283;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((null !== n))) goto L_410;
  this.scheduleRender();
  if (!(this.isCurrent(i))) goto L_44f;
  try { // catch -> L_3dd
  let s;
  s = t.createSession(n, function <atom:0>);
  if (!(!this.isCurrent(i))) goto L_36d;
  this.disposeSession(s);
  return undefined;
  i.session = s;
  i.startInvoked = true;
  s.start();
  this.sendStop(i);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  a#1 = <?>;
  try { // catch -> L_40f
  this.commandFailed(i);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.finish(i, {code: "invalid_options", message: "Invalid dictation options: language must be nonblank and at most 128 characters; speaking_exercise context requires a nonblank expectedPhrase."}, undefined);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=387B file=dil_renderer/src/DILDictationOwner
// locals: t
// closure: this, s
function {
  let t;
  t = this.attempt;
  if (!((undefined !== t))) goto L_182;
  if (!((this.state.status !== s.DILDictationStatus.Stopping))) goto L_182;
  null;
  this.state;
  this.update({status: s.DILDictationStatus.Stopping});
  this.sendStop(t);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=470B file=dil_renderer/src/DILDictationOwner
// locals: t, s
// closure: this, e, i
function {
  let t;
  if ((this.disposed)) goto L_75;
  if (!((undefined === this.attempt))) goto L_78;
  if (!((this.state === e))) goto L_78;
  return;
  t = this.invalidate();
  this.state = e;
  if (!((t == null))) goto L_b7;
  t;
  goto L_d8;
  if (!((undefined !== undefined.session))) goto L_1b0;
  try { // catch -> L_12f
  t.session.cancel();
  <?>;
  goto L_166;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_165
  i.warn("DIL dictation cancellation failed");
  <?>;
  goto L_166;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.disposeSession(t.session);
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=3 bc=110B file=dil_renderer/src/DILDictationOwner
// args: t, n
// locals: this
// closure: e, s, i, <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.runtime = t;
  this.scheduleRender = n;
  this.disposed = false;
  this.generation = 0;
  this.state = e;
  this.start = function <atom:0>;
  this.stop = function <atom:0>;
  this.cancel = function <atom:0>;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=dil_renderer/src/DILDictationOwner
// args: t
// locals: this
function {
  this = this;
  this.options = t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=198B file=dil_renderer/src/DILDictationOwner
// locals: this
// closure: t
function {
  this = this;
  null;
  this.state;
  return t.hardenApiFacade({start: this.start, stop: this.stop, cancel: this.cancel});   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=446B file=dil_renderer/src/DILDictationOwner
// args: t
// locals: i, this
// closure: s
function {
  this = this;
  if (!(this.isCurrent(t))) goto L_1bd;
  if (!((this.state.status === s.DILDictationStatus.Stopping))) goto L_1bd;
  if (!(t.startInvoked)) goto L_1bd;
  if (!((undefined !== t.session))) goto L_1bd;
  if (!(!t.stopSent)) goto L_1bd;
  t.stopSent = true;
  try { // catch -> L_18d
  t.session.stop();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_1bc
  this.commandFailed(t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=240B file=dil_renderer/src/DILDictationOwner
// locals: t, this
// closure: e
function {
  this = this;
  let t;
  if (!(this.disposed)) goto L_2a;
  return;
  this.disposed = true;
  this.options = undefined;
  t = this.invalidate();
  this.state = e;
  if (!((t == null))) goto L_80;
  t;
  goto L_a1;
  if (!((undefined !== undefined.session))) goto L_ef;
  this.disposeSession(t.session);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=1583B file=dil_renderer/src/DILDictationOwner
// args: t, i
// locals: this
// closure: s, e
function {
  this = this;
  if (!(this.isCurrent(t))) goto L_62e;
  if (!((i.kind === s.DILDictationEventKind.Recording))) goto L_1c6;
  if (!((this.state.status === s.DILDictationStatus.Starting))) goto L_1c2;
  null;
  this.state;
  this.update({status: s.DILDictationStatus.Recording});
  goto L_62d;
  if (!((i.kind === s.DILDictationEventKind.Transcript))) goto L_287;
  null;
  this.state;
  this.update({transcript: i.transcript});
  goto L_62d;
  if (!((i.kind === s.DILDictationEventKind.Stopping))) goto L_37a;
  t.stopSent = true;
  null;
  this.state;
  this.update({status: s.DILDictationStatus.Stopping});
  goto L_62d;
  if (!((i.kind === s.DILDictationEventKind.Done))) goto L_410;
  this.finish(t, null, i.transcript);
  goto L_62d;
  if (!((i.kind === s.DILDictationEventKind.Error))) goto L_518;
  this.finish(t, {code: i.error.code, message: i.error.message}, undefined);
  goto L_62d;
  if (!((i.kind === s.DILDictationEventKind.Cancelled))) goto L_62d;
  this.invalidate();
  this.state = e;
  if (!((undefined !== t.session))) goto L_606;
  this.disposeSession(t.session);
  this.scheduleRender();
  i.kind;
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=480B file=dil_renderer/src/DILDictationOwner
// args: t, i, e
// locals: this
// closure: s
function {
  this = this;
  if (!(this.isCurrent(t))) goto L_1df;
  this.invalidate();
  if (!((null === i))) goto L_a3;
  goto L_e8;
  // [栈深重同步 3 -> 2]
  if (!((e == null))) goto L_136;
  e;
  this.state = {status: s.DILDictationStatus.Error, transcript: this.state.transcript, error: i};
  if (!((undefined !== t.session))) goto L_1b9;
  this.disposeSession(t.session);
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=108B file=dil_renderer/src/DILDictationOwner
// args: t
// locals: this
// closure: i
function {
  this = this;
  i.warn("DIL dictation host command failed");
  this.finish(t, {code: "host_error", message: "Dictation could not complete. Please try again."}, undefined);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=99B file=dil_renderer/src/DILDictationOwner
// locals: t, this
function {
  this = this;
  let t;
  t = this.attempt;
  this.attempt = undefined;
  this.generation = (this.generation ++);
  return t;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=111B file=dil_renderer/src/DILDictationOwner
// args: t
// locals: this
function {
  this = this;
  if (!(!this.disposed)) goto L_6e;
  return (t.generation === this.generation);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=51B file=dil_renderer/src/DILDictationOwner
// args: t
// locals: this
function {
  this = this;
  this.state = t;
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=99B file=dil_renderer/src/DILDictationOwner
// args: t
// locals: s
// closure: i
function {
  try { // catch -> L_2d
  t.dispose();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_62
  i.warn("DIL dictation session disposal failed");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=12 bc=361B file=dil_renderer/src/DILDictationOwner
// args: require, module, exports
// locals: t, s, i, e, DILDictationOwner, <class_fields_init>, DILDictationOwner#1
function {
  let DILDictationOwner#1;
  let e;
  let i;
  let s;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILDictationOwner = undefined;
  t = require("./DILApiFacade");
  s = require("./DILDictation");
  i = console;
  e = Object.freeze({status: s.DILDictationStatus.Idle, transcript: "", error: null});
  let DILDictationOwner;
  let <class_fields_init>;
  class DILDictationOwner extends undefined { ... }
  <proto:DILDictationOwner>.setOptions = function <atom:0>;
  <proto:DILDictationOwner>.snapshot = function <atom:0>;
  <proto:DILDictationOwner>.sendStop = function <atom:0>;
  <proto:DILDictationOwner>.dispose = function <atom:0>;
  <proto:DILDictationOwner>.receive = function <atom:0>;
  <proto:DILDictationOwner>.finish = function <atom:0>;
  <proto:DILDictationOwner>.commandFailed = function <atom:0>;
  <proto:DILDictationOwner>.invalidate = function <atom:0>;
  <proto:DILDictationOwner>.isCurrent = function <atom:0>;
  <proto:DILDictationOwner>.update = function <atom:0>;
  <proto:DILDictationOwner>.disposeSession = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILDictationOwner>;
  DILDictationOwner = function <atom:0>;
  // close_loc <class_fields_init>
  DILDictationOwner#1 = function <atom:0>;
  exports.DILDictationOwner = DILDictationOwner#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILDictationOwner
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
