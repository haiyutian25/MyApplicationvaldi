// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=122B file=valdi_rxjs/src/Subject
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target();
  if (!(<class_fields_init>)) goto L_21;
  <class_fields_init>.call(this);
  new new.target();
  this.closed = false;
  this.currentObservers = null;
  this.observers = [];
  this.isStopped = false;
  this.hasError = false;
  this.thrownError = null;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=32B file=valdi_rxjs/src/Subject
// args: e
// locals: r, this
// closure: AnonymousSubject
function {
  this = this;
  let r;
  r = new AnonymousSubject(this, this);
  r.operator = e;
  return r;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=80B file=valdi_rxjs/src/Subject
// locals: this
// closure: s
function {
  this = this;
  if (!(this.closed)) goto L_4f;
  throw new s.ObjectUnsubscribedError();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=294B file=valdi_rxjs/src/Subject
// args: e
// locals: r, this
function {
  this = this;
  this._throwIfClosed();
  if (!(!this.isStopped)) goto L_125;
  if ((this.currentObservers)) goto L_cc;
  this.currentObservers = Array.from(this.observers);
  Array.from(this.observers);
  let r;
  for (const r of this.currentObservers) {
    r.next(e);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=251B file=valdi_rxjs/src/Subject
// args: e
// locals: r, this
function {
  this = this;
  this._throwIfClosed();
  if (!(!this.isStopped)) goto L_fa;
  let r;
  this.isStopped = true;
  this.hasError = true;
  this.thrownError = e;
  if (((undefined === undefined))) goto L_a1;
  r = <to_object>(undefined).observers;
  <to_object>(undefined);
  goto L_a5;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_7a;
  // [栈深重同步 1 -> 0]
  if (!(r.length)) goto L_fa;
  r.shift().error(e);
  goto L_a5;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=228B file=valdi_rxjs/src/Subject
// locals: e, this
function {
  this = this;
  this._throwIfClosed();
  if (!(!this.isStopped)) goto L_e3;
  let e;
  this.isStopped = true;
  if (((undefined === undefined))) goto L_8b;
  e = <to_object>(undefined).observers;
  <to_object>(undefined);
  goto L_8f;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_64;
  // [栈深重同步 1 -> 0]
  if (!(e.length)) goto L_e3;
  e.shift().complete();
  goto L_8f;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=48B file=valdi_rxjs/src/Subject
// locals: this
function {
  this = this;
  this.closed = true;
  this.isStopped = true;
  this.currentObservers = null;
  this.observers = null;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=48B file=valdi_rxjs/src/Subject
// locals: this
function {
  this = this;
  if (!((this.observers == null))) goto L_2c;
  this.observers;
  goto L_2d;
  return (undefined.length > 0);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=56B file=valdi_rxjs/src/Subject
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  this._throwIfClosed();
  return super["_trySubscribe"](e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=117B file=valdi_rxjs/src/Subject
// args: e
// locals: this
function {
  this = this;
  this._throwIfClosed();
  this._checkFinalizedStatuses(e);
  return this._innerSubscribe(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=53B file=valdi_rxjs/src/Subject
// closure: this, t, i, e
function {
  this.currentObservers = null;
  t.arrRemove(i, e);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=1 bc=273B file=valdi_rxjs/src/Subject
// args: e
// locals: s, o, i, this
// closure: t, r
function {
  this = this;
  let i;
  let o;
  let s;
  if (((undefined === undefined))) goto L_7d;
  s = <to_object>(undefined).hasError;
  o = <to_object>(undefined).isStopped;
  i = <to_object>(undefined).observers;
  <to_object>(undefined);
  goto L_81;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_10;
  // [栈深重同步 1 -> 0]
  if ((s)) goto L_8b;
  if (!(o)) goto L_b2;
  return r.EMPTY_SUBSCRIPTION;
  this.currentObservers = null;
  i.push(e);
  return new r.Subscription(function <atom:0>);
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=221B file=valdi_rxjs/src/Subject
// args: e
// locals: r, s, t, this
function {
  this = this;
  let t;
  let s;
  let r;
  if (((undefined === undefined))) goto L_7d;
  r = <to_object>(undefined).hasError;
  s = <to_object>(undefined).thrownError;
  t = <to_object>(undefined).isStopped;
  <to_object>(undefined);
  goto L_81;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_10;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_b0;
  goto L_dc;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_dc;
  e.complete();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=63B file=valdi_rxjs/src/Subject
// locals: r, this
// closure: e
function {
  this = this;
  let r;
  r = new e.Observable();
  r.source = this;
  return r;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=10B file=valdi_rxjs/src/Subject
// args: e, r
// closure: AnonymousSubject
function {
  return new AnonymousSubject(e, r);
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=65B file=valdi_rxjs/src/Subject
// args: e, r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target();
  if (!(<class_fields_init>)) goto L_21;
  <class_fields_init>.call(this);
  new new.target();
  this.destination = e;
  this.source = r;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=91B file=valdi_rxjs/src/Subject
// args: e
// locals: this
function {
  this = this;
  if (!((this.destination == null))) goto L_2c;
  this.destination;
  goto L_5a;
  if (!((undefined.next == null))) goto L_56;
  undefined.next;
  undefined;
  goto L_5a;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=91B file=valdi_rxjs/src/Subject
// args: e
// locals: this
function {
  this = this;
  if (!((this.destination == null))) goto L_2c;
  this.destination;
  goto L_5a;
  if (!((undefined.error == null))) goto L_56;
  undefined.error;
  undefined;
  goto L_5a;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=90B file=valdi_rxjs/src/Subject
// locals: this
function {
  this = this;
  if (!((this.destination == null))) goto L_2c;
  this.destination;
  goto L_59;
  if (!((undefined.complete == null))) goto L_56;
  undefined.complete;
  undefined;
  goto L_59;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=123B file=valdi_rxjs/src/Subject
// args: e
// locals: this
// closure: r
function {
  this = this;
  if (!((this.source == null))) goto L_2c;
  this.source;
  goto L_51;
  if (!((undefined.subscribe(e) == null))) goto L_7a;
  undefined.subscribe(e);
  return r.EMPTY_SUBSCRIPTION;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=19 bc=386B file=valdi_rxjs/src/Subject
// args: require, module, exports
// locals: e, r, s, t, Subject, <class_fields_init>, Subject#1, AnonymousSubject, <class_fields_init>#1, AnonymousSubject#1
function {
  let AnonymousSubject#1;
  let Subject#1;
  let t;
  let s;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Subject = undefined;
  exports.AnonymousSubject = undefined;
  e = require("./Observable");
  r = require("./Subscription");
  s = require("./util/ObjectUnsubscribedError");
  t = require("./util/arrRemove");
  let Subject;
  let <class_fields_init>;
  class Subject extends e.Observable { ... }
  <proto:Subject>.lift = function <atom:0>;
  <proto:Subject>._throwIfClosed = function <atom:0>;
  <proto:Subject>.next = function <atom:0>;
  <proto:Subject>.error = function <atom:0>;
  <proto:Subject>.complete = function <atom:0>;
  <proto:Subject>.unsubscribe = function <atom:0>;
  <proto:Subject>.observed = function <atom:0>;
  <proto:Subject>._trySubscribe = function <atom:0>;
  <proto:Subject>._subscribe = function <atom:0>;
  <proto:Subject>._innerSubscribe = function <atom:0>;
  <proto:Subject>._checkFinalizedStatuses = function <atom:0>;
  <proto:Subject>.asObservable = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Subject>;
  Subject = function <atom:0>;
  // close_loc <class_fields_init>
  Subject#1 = function <atom:0>;
  exports.Subject = Subject#1;
  Subject#1.create = function <atom:0>;
  let AnonymousSubject;
  let <class_fields_init>#1;
  class AnonymousSubject extends Subject#1 { ... }
  <proto:AnonymousSubject>.next = function <atom:0>;
  <proto:AnonymousSubject>.error = function <atom:0>;
  <proto:AnonymousSubject>.complete = function <atom:0>;
  <proto:AnonymousSubject>._subscribe = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AnonymousSubject>;
  AnonymousSubject = function <atom:0>;
  // close_loc <class_fields_init>#1
  AnonymousSubject#1 = function <atom:0>;
  exports.AnonymousSubject = AnonymousSubject#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/Subject
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
