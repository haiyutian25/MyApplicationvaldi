// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=52B file=valdi_rxjs/src/BehaviorSubject
// args: e
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
  this._value = e;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=valdi_rxjs/src/BehaviorSubject
// locals: this
function {
  this = this;
  return this.getValue();   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=139B file=valdi_rxjs/src/BehaviorSubject
// args: e
// locals: t, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  t = super["_subscribe"].call(this, e);
  if (!(!t.closed)) goto L_86;
  e.next(this._value);
  return t;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=180B file=valdi_rxjs/src/BehaviorSubject
// locals: e, t, r, this
function {
  this = this;
  let r;
  let t;
  let e;
  if (((undefined === undefined))) goto L_7d;
  e = <to_object>(undefined).hasError;
  t = <to_object>(undefined).thrownError;
  r = <to_object>(undefined)._value;
  <to_object>(undefined);
  goto L_81;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_10;
  // [栈深重同步 1 -> 0]
  if (!(e)) goto L_8a;
  throw t;
  this._throwIfClosed();
  return r;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=30B file=valdi_rxjs/src/BehaviorSubject
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  this._value = e;
  super["next"].call(this, e);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=5 bc=185B file=valdi_rxjs/src/BehaviorSubject
// args: require, module, exports
// locals: e, BehaviorSubject, <class_fields_init>, BehaviorSubject#1
function {
  let BehaviorSubject#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BehaviorSubject = undefined;
  e = require("./Subject");
  let BehaviorSubject;
  let <class_fields_init>;
  class BehaviorSubject extends e.Subject { ... }
  <proto:BehaviorSubject>.value = function <atom:0>;
  <proto:BehaviorSubject>._subscribe = function <atom:0>;
  <proto:BehaviorSubject>.getValue = function <atom:0>;
  <proto:BehaviorSubject>.next = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BehaviorSubject>;
  BehaviorSubject = function <atom:0>;
  // close_loc <class_fields_init>
  BehaviorSubject#1 = function <atom:0>;
  exports.BehaviorSubject = BehaviorSubject#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/BehaviorSubject
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
