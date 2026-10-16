// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=640B file=dil_renderer/src/DILSpeechOwner
// locals: e
// closure: this, s
function {
  if (!(!this.disposed)) goto L_27f;
  if (!((undefined !== this.session))) goto L_27f;
  if (!(this.state.available)) goto L_27f;
  if (!((this.state.status === s.DILSpeechStatus.Idle))) goto L_27f;
  if (!((this.runtime == null))) goto L_151;
  this.runtime;
  goto L_175;
  if (!(undefined.isUserInteraction())) goto L_27f;
  try { // catch -> L_20b
  this.session.play(this.logging.play_requested);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_27e
  this.fail(s.DILSpeechFailureStage.Play);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=575B file=dil_renderer/src/DILSpeechOwner
// locals: e
// closure: this, s
function {
  if (!(!this.disposed)) goto L_23e;
  if (!((undefined !== this.session))) goto L_23e;
  try { // catch -> L_1ca
  if (!((undefined !== this.logging.stop_requested))) goto L_1c3;
  if (!(this.state.available)) goto L_1c3;
  if (!((this.runtime == null))) goto L_157;
  this.runtime;
  goto L_17b;
  if (!((true === undefined.isUserInteraction()))) goto L_1c3;
  goto L_1c4;
  // [栈深重同步 3 -> 2]
  this.session.stop(undefined);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_23d
  this.fail(s.DILSpeechFailureStage.Play);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_renderer/src/DILSpeechOwner
// args: e
// closure: this
function {
  return this.receive(e);   // tail call
}

// fn <atom:0>  args=4 vars=7 closure=2 cpool=3 bc=475B file=dil_renderer/src/DILSpeechOwner
// args: e, t, i, h
// locals: e#1, a, this
// closure: s, <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.sourceKey = e;
  this.runtime = i;
  this.scheduleRender = h;
  this.disposed = false;
  this.state = s.UNAVAILABLE_DIL_SPEECH;
  this.logging = {};
  this.play = function <atom:0>;
  this.stop = function <atom:0>;
  if (!((null !== t))) goto L_1da;
  if (!((undefined !== i))) goto L_1da;
  try { // catch -> L_12c
  let e#1;
  e#1 = i.createSession(t, function <atom:0>);
  if (!(this.disposed)) goto L_11b;
  goto L_129;
  // [栈深重同步 1 -> 0]
  this.session = e#1;
  e#1;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_1d9
  this.state = s.UNAVAILABLE_DIL_SPEECH;
  this.fail(s.DILSpeechFailureStage.Request);
  this.disposed = true;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=253B file=dil_renderer/src/DILSpeechOwner
// args: e
// locals: i, this
// closure: s, t
function {
  this = this;
  this.logging = {};
  try { // catch -> L_c7
  if (!((e == null))) goto L_41;
  e;
  goto L_62;
  if (!((e == null))) goto L_95;
  e;
  goto L_b6;
  this.logging = {play_requested: s.normalizeDILSpeechRequestLog(undefined.play_requested), stop_requested: s.normalizeDILSpeechRequestLog(undefined.stop_requested)};
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_fc
  t.warn("DIL speech logging metadata could not be read");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=159B file=dil_renderer/src/DILSpeechOwner
// locals: this
// closure: e
function {
  this = this;
  null;
  this.state;
  return e.hardenApiFacade({play: this.play, stop: this.stop});   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=209B file=dil_renderer/src/DILSpeechOwner
// locals: e, s, this
// closure: t
function {
  this = this;
  let e;
  if (!(this.disposed)) goto L_2a;
  return;
  this.disposed = true;
  e = this.session;
  this.session = undefined;
  try { // catch -> L_9b
  if (!((e == null))) goto L_74;
  e;
  goto L_98;
  undefined.dispose();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_d0
  t.warn("DIL speech session disposal failed");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=126B file=dil_renderer/src/DILSpeechOwner
// args: e
// locals: this
// closure: s
function {
  this = this;
  if ((this.disposed)) goto L_7d;
  this.state = s.sanitizeDILSpeechState(e);
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=248B file=dil_renderer/src/DILSpeechOwner
// args: e
// locals: this
// closure: t, s
function {
  this = this;
  t.warn("DIL speech session failed during ".concat(e));
  null;
  this.state;
  this.receive({status: s.DILSpeechStatus.Idle, error: {failureStage: e}});
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=6 bc=180B file=dil_renderer/src/DILSpeechOwner
// args: require, module, exports
// locals: e, s, t, DILSpeechOwner, <class_fields_init>, DILSpeechOwner#1
function {
  let DILSpeechOwner#1;
  let t;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSpeechOwner = undefined;
  e = require("./DILApiFacade");
  s = require("./DILSpeechSynthesis");
  t = console;
  let DILSpeechOwner;
  let <class_fields_init>;
  class DILSpeechOwner extends undefined { ... }
  <proto:DILSpeechOwner>.setLogging = function <atom:0>;
  <proto:DILSpeechOwner>.snapshot = function <atom:0>;
  <proto:DILSpeechOwner>.dispose = function <atom:0>;
  <proto:DILSpeechOwner>.receive = function <atom:0>;
  <proto:DILSpeechOwner>.fail = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSpeechOwner>;
  DILSpeechOwner = function <atom:0>;
  // close_loc <class_fields_init>
  DILSpeechOwner#1 = function <atom:0>;
  exports.DILSpeechOwner = DILSpeechOwner#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILSpeechOwner
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
