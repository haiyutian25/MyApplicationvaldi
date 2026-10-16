// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=79B file=collaborative_editor/src/worker/ActiveDocumentAccount
// closure: this, c
function {
  if ((this.stopped)) goto L_4e;
  this.stop();
  c();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=71B file=collaborative_editor/src/worker/ActiveDocumentAccount
// args: e
// closure: this, o
function {
  if ((this.stopped)) goto L_46;
  this.received = true;
  this.active = e;
  if ((e)) goto L_46;
  o();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=92B file=collaborative_editor/src/worker/ActiveDocumentAccount
// closure: e, o
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("Collaborative document account lifetime failed");
  o();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=2 bc=145B file=collaborative_editor/src/worker/ActiveDocumentAccount
// closure: this, o, e, t, s
function {
  return t.convertBridgeObservableToObservable(s.observeIsActive()).subscribe({next: function <atom:0>, error: function <atom:0>, complete: o});   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=4 cpool=2 bc=289B file=collaborative_editor/src/worker/ActiveDocumentAccount
// args: s, c
// locals: o, r, n, this
// closure: e, t, <class_fields_init>, i
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let r;
  let o;
  this.received = false;
  this.active = false;
  this.stopped = false;
  o = function <atom:0>;
  r = i.withGlobalNativeRefs(function <atom:0>);
  if (!(this.stopped)) goto L_b6;
  goto L_c4;
  // [栈深重同步 1 -> 0]
  this.subscription = r;
  r;
  try { // catch -> L_f2
  this.requireActive();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_120
  this.stop();
  throw n;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=243B file=collaborative_editor/src/worker/ActiveDocumentAccount
// locals: this
// closure: s, c
function {
  this = this;
  if ((!this.received)) goto L_72;
  if ((!this.active)) goto L_72;
  if (!(this.stopped)) goto L_f2;
  throw new s.DocumentPersistenceFailure({kind: c.DocumentPersistenceErrorKind.HostUnavailable, message: "An active host account is required to open this document."});
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=226B file=collaborative_editor/src/worker/ActiveDocumentAccount
// locals: t, this
// closure: e
function {
  this = this;
  let t;
  this.stopped = true;
  this.active = false;
  t = this.subscription;
  this.subscription = undefined;
  try { // catch -> L_82
  if (!((t == null))) goto L_5b;
  t;
  goto L_7f;
  undefined.unsubscribe();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_e1
  if (!(e.isLoggingEnabled)) goto L_de;
  console.warn("Collaborative document account observation cleanup failed");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=3 bc=218B file=collaborative_editor/src/worker/ActiveDocumentAccount
// args: require, module, exports
// locals: e, t, i, s, c, ActiveDocumentAccount, <class_fields_init>, ActiveDocumentAccount#1
function {
  let ActiveDocumentAccount#1;
  let c;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ActiveDocumentAccount = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("bridge_observables/src/utils/convertBridgeObservableToObservable");
  i = require("valdi_core/src/NativeReferences");
  s = require("../DocumentPersistenceFailure");
  c = require("../DocumentPersistenceTypes");
  let ActiveDocumentAccount;
  let <class_fields_init>;
  class ActiveDocumentAccount extends undefined { ... }
  <proto:ActiveDocumentAccount>.requireActive = function <atom:0>;
  <proto:ActiveDocumentAccount>.stop = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ActiveDocumentAccount>;
  ActiveDocumentAccount = function <atom:0>;
  // close_loc <class_fields_init>
  ActiveDocumentAccount#1 = function <atom:0>;
  exports.ActiveDocumentAccount = ActiveDocumentAccount#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/worker/ActiveDocumentAccount
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
