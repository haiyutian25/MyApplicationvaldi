// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=194B file=valdi_rxjs/src/observable/ConnectableObservable
// args: e, t
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, i
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target();
  if (!(<class_fields_init>)) goto L_21;
  <class_fields_init>.call(this);
  new new.target();
  this.source = e;
  this.subjectFactory = t;
  this._subject = null;
  this._refCount = 0;
  this._connection = null;
  if (!(i.hasLift(e))) goto L_bd;
  this.lift = e.lift;
  e.lift;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=76B file=valdi_rxjs/src/observable/ConnectableObservable
// args: e
// locals: this
function {
  this = this;
  return this.getSubject().subscribe(e);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=172B file=valdi_rxjs/src/observable/ConnectableObservable
// locals: e, this
function {
  this = this;
  let e;
  e = this._subject;
  if (!(e)) goto L_54;
  if ((!e.isStopped)) goto L_88;
  this._subject = this.subjectFactory();
  this.subjectFactory();
  return this._subject;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=134B file=valdi_rxjs/src/observable/ConnectableObservable
// locals: e, this
function {
  this = this;
  let e;
  this._refCount = 0;
  if (((undefined === undefined))) goto L_3c;
  e = <to_object>(undefined)._connection;
  <to_object>(undefined);
  goto L_40;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_15;
  // [栈深重同步 1 -> 0]
  this._connection = null;
  this._subject = null;
  if (!((e == null))) goto L_61;
  e;
  goto L_85;
  undefined.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=78B file=valdi_rxjs/src/observable/ConnectableObservable
// closure: this, s
function {
  this._teardown();
  s.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=valdi_rxjs/src/observable/ConnectableObservable
// args: e
// closure: this, s
function {
  this._teardown();
  s.error(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=valdi_rxjs/src/observable/ConnectableObservable
// closure: this
function {
  return this._teardown();   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=3 bc=437B file=valdi_rxjs/src/observable/ConnectableObservable
// locals: e, s, this
// closure: t, r
function {
  this = this;
  let e;
  e = this._connection;
  if (!(!e)) goto L_1b1;
  let s;
  this._connection = new t.Subscription();
  e = new t.Subscription();
  new t.Subscription();
  s = this.getSubject();
  e.add(this.source.subscribe(r.createOperatorSubscriber(s, undefined, function <atom:0>, function <atom:0>, function <atom:0>)));
  if (!(e.closed)) goto L_1ad;
  this._connection = null;
  e = t.Subscription.EMPTY;
  t.Subscription.EMPTY;
  // close_loc s
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=43B file=valdi_rxjs/src/observable/ConnectableObservable
// locals: this
// closure: s
function {
  this = this;
  return s.refCount()(this);   // tail call
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=6 bc=241B file=valdi_rxjs/src/observable/ConnectableObservable
// args: require, module, exports
// locals: e, t, s, r, i, ConnectableObservable, <class_fields_init>, ConnectableObservable#1
function {
  let ConnectableObservable#1;
  let i;
  let r;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ConnectableObservable = undefined;
  e = require("../Observable");
  t = require("../Subscription");
  s = require("../operators/refCount");
  r = require("../operators/OperatorSubscriber");
  i = require("../util/lift");
  let ConnectableObservable;
  let <class_fields_init>;
  class ConnectableObservable extends e.Observable { ... }
  <proto:ConnectableObservable>._subscribe = function <atom:0>;
  <proto:ConnectableObservable>.getSubject = function <atom:0>;
  <proto:ConnectableObservable>._teardown = function <atom:0>;
  <proto:ConnectableObservable>.connect = function <atom:0>;
  <proto:ConnectableObservable>.refCount = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ConnectableObservable>;
  ConnectableObservable = function <atom:0>;
  // close_loc <class_fields_init>
  ConnectableObservable#1 = function <atom:0>;
  exports.ConnectableObservable = ConnectableObservable#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/ConnectableObservable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
