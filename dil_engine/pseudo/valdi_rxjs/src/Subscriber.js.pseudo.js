// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=11B file=valdi_rxjs/src/Subscriber
// args: e, t, r
// closure: SafeSubscriber
function {
  return new SafeSubscriber(e, t, r);
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=201B file=valdi_rxjs/src/Subscriber
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, t, exports
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target();
  if (!(<class_fields_init>)) goto L_21;
  <class_fields_init>.call(this);
  new new.target();
  this.isStopped = false;
  if (!(e)) goto L_95;
  this.destination = e;
  if (!(t.isSubscription(e))) goto L_c4;
  goto L_c4;
  // [栈深重同步 1 -> 0]
  this.destination = exports.EMPTY_OBSERVER;
  exports.EMPTY_OBSERVER;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=120B file=valdi_rxjs/src/Subscriber
// args: e
// locals: this
// closure: l, o
function {
  this = this;
  if (!(this.isStopped)) goto L_51;
  goto L_77;
  // [栈深重同步 1 -> 0]
  this._next(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=132B file=valdi_rxjs/src/Subscriber
// args: e
// locals: this
// closure: l, o
function {
  this = this;
  if (!(this.isStopped)) goto L_51;
  goto L_83;
  // [栈深重同步 1 -> 0]
  this.isStopped = true;
  this._error(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=129B file=valdi_rxjs/src/Subscriber
// locals: this
// closure: l, o
function {
  this = this;
  if (!(this.isStopped)) goto L_4f;
  goto L_80;
  // [栈深重同步 1 -> 0]
  this.isStopped = true;
  this._complete();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=81B file=valdi_rxjs/src/Subscriber
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if ((this.closed)) goto L_50;
  this.isStopped = true;
  super["unsubscribe"].call(this);
  this.destination = null;
  null;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=valdi_rxjs/src/Subscriber
// args: e
// locals: this
function {
  this = this;
  this.destination.next(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=134B file=valdi_rxjs/src/Subscriber
// args: e
// locals: this
function {
  this = this;
  try { // catch -> L_58
  this.destination.error(e);
  <?>;
  // gosub (finally 块) 94
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 94
  throw <?>;
  this.unsubscribe();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=133B file=valdi_rxjs/src/Subscriber
// locals: this
function {
  this = this;
  try { // catch -> L_57
  this.destination.complete();
  <?>;
  // gosub (finally 块) 93
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 93
  throw <?>;
  this.unsubscribe();
  // ret (finally 块) 
  return;
}

// fn p  args=2 vars=2 closure=1 cpool=0 bc=41B file=valdi_rxjs/src/Subscriber
// args: e, t
// closure: u
function {
  return u.call(e, t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_rxjs/src/Subscriber
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.partialObserver = e;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=153B file=valdi_rxjs/src/Subscriber
// args: e
// locals: t, r, this
// closure: a
function {
  this = this;
  let t;
  if (((undefined === undefined))) goto L_31;
  t = <to_object>(undefined).partialObserver;
  <to_object>(undefined);
  goto L_35;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_a;
  // [栈深重同步 1 -> 0]
  if (!(t.next)) goto L_98;
  try { // catch -> L_8b
  t.next(e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_97
  a(r);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=157B file=valdi_rxjs/src/Subscriber
// args: e
// locals: t, r, this
// closure: a
function {
  this = this;
  let t;
  if (((undefined === undefined))) goto L_31;
  t = <to_object>(undefined).partialObserver;
  <to_object>(undefined);
  goto L_35;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_a;
  // [栈深重同步 1 -> 0]
  if (!(t.error)) goto L_98;
  try { // catch -> L_8b
  t.error(e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_97
  a(r);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  a(e);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=152B file=valdi_rxjs/src/Subscriber
// locals: e, t, this
// closure: a
function {
  this = this;
  let e;
  if (((undefined === undefined))) goto L_31;
  e = <to_object>(undefined).partialObserver;
  <to_object>(undefined);
  goto L_35;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_a;
  // [栈深重同步 1 -> 0]
  if (!(e.complete)) goto L_97;
  try { // catch -> L_8a
  e.complete();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_96
  a(t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_rxjs/src/Subscriber
// closure: this
function {
  return this.unsubscribe();   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=5 cpool=1 bc=566B file=valdi_rxjs/src/Subscriber
// args: t, i, s
// locals: o, e, this, this.active_func, new.target
// closure: <class_fields_init>, e, r, p, ConsumerObserver
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let o;
  o = undefined;
  this = new new.target();
  if (!(<class_fields_init>)) goto L_28;
  <class_fields_init>.call(this);
  new new.target();
  if ((e.isFunction(t))) goto L_56;
  if (!(!t)) goto L_85;
  if (!((t == null))) goto L_60;
  t;
  if (!((i == null))) goto L_6c;
  i;
  if (!((s == null))) goto L_78;
  s;
  o = {next: undefined, error: undefined, complete: undefined};
  {next: undefined, error: undefined, complete: undefined};
  goto L_21c;
  let e;
  e = undefined;
  if (!(this)) goto L_216;
  if (!(r.config.useDeprecatedNextContext)) goto L_216;
  e = Object.create(t);
  Object.create(t);
  e.unsubscribe = function <atom:0>;
  if (!(t.next)) goto L_167;
  if (!(t.error)) goto L_1b9;
  if (!(t.complete)) goto L_20b;
  o = {next: p(t.next, e), error: p(t.error, e), complete: p(t.complete, e)};
  goto L_21b;
  // [栈深重同步 1 -> 0]
  o = t;
  t;
  this.destination = new ConsumerObserver(o);
  return this;
}

// fn a  args=1 vars=1 closure=3 cpool=0 bc=150B file=valdi_rxjs/src/Subscriber
// args: e
// closure: r, c, i
function {
  if (!(r.config.useDeprecatedSynchronousErrorHandling)) goto L_6f;
  goto L_95;
  // [栈深重同步 1 -> 0]
  i.reportUnhandledError(e);
  return;
}

// fn b  args=1 vars=1 closure=0 cpool=0 bc=2B file=valdi_rxjs/src/Subscriber
// args: e
function {
  throw e;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=8B file=valdi_rxjs/src/Subscriber
// closure: i, e, t
function {
  return i(e, t);   // tail call
}

// fn l  args=2 vars=3 closure=2 cpool=1 bc=168B file=valdi_rxjs/src/Subscriber
// args: e, t
// locals: i
// closure: r, n
function {
  let i;
  if (((undefined === undefined))) goto L_2f;
  i = <to_object>(undefined).onStoppedNotification;
  <to_object>(undefined);
  goto L_56;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_8;
  // [栈深重同步 1 -> 0]
  if (!(i)) goto L_a7;
  n.timeoutProvider.setTimeout(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=18 bc=621B file=valdi_rxjs/src/Subscriber
// args: require, module, exports
// locals: e, t, r, i, s, o, n, c, Subscriber, <class_fields_init>, Subscriber#1, u, p, ConsumerObserver, <class_fields_init>#1, ConsumerObserver#1, SafeSubscriber, <class_fields_init>#2, SafeSubscriber#1, a, b, l
function {
  p = function p;
  a = function a;
  b = function b;
  l = function l;
  let SafeSubscriber#1;
  let ConsumerObserver#1;
  let u;
  let Subscriber#1;
  let c;
  let n;
  let o;
  let s;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Subscriber = undefined;
  exports.SafeSubscriber = undefined;
  exports.EMPTY_OBSERVER = undefined;
  e = require("./util/isFunction");
  t = require("./Subscription");
  r = require("./config");
  i = require("./util/reportUnhandledError");
  s = require("./util/noop");
  o = require("./NotificationFactories");
  n = require("./scheduler/timeoutProvider");
  c = require("./util/errorContext");
  let Subscriber;
  let <class_fields_init>;
  class Subscriber extends t.Subscription { ... }
  function <atom:0>.create = function <atom:0>;
  <proto:Subscriber>.next = function <atom:0>;
  <proto:Subscriber>.error = function <atom:0>;
  <proto:Subscriber>.complete = function <atom:0>;
  <proto:Subscriber>.unsubscribe = function <atom:0>;
  <proto:Subscriber>._next = function <atom:0>;
  <proto:Subscriber>._error = function <atom:0>;
  <proto:Subscriber>._complete = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Subscriber>;
  Subscriber = function <atom:0>;
  // close_loc <class_fields_init>
  Subscriber#1 = function <atom:0>;
  exports.Subscriber = Subscriber#1;
  u = Function.prototype.bind;
  let ConsumerObserver;
  let <class_fields_init>#1;
  class ConsumerObserver extends undefined { ... }
  <proto:ConsumerObserver>.next = function <atom:0>;
  <proto:ConsumerObserver>.error = function <atom:0>;
  <proto:ConsumerObserver>.complete = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ConsumerObserver>;
  ConsumerObserver = function <atom:0>;
  // close_loc <class_fields_init>#1
  ConsumerObserver#1 = function <atom:0>;
  let SafeSubscriber;
  let <class_fields_init>#2;
  class SafeSubscriber extends Subscriber#1 { ... }
  <class_fields_init>#2 = undefined;
  <proto:SafeSubscriber>;
  SafeSubscriber = function <atom:0>;
  // close_loc <class_fields_init>#2
  SafeSubscriber#1 = function <atom:0>;
  exports.SafeSubscriber = SafeSubscriber#1;
  exports.EMPTY_OBSERVER = {closed: true, next: s.noop, error: b, complete: s.noop};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/Subscriber
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
