// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=90B file=valdi_rxjs/src/AsyncSubject
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this._value = null;
  this._hasValue = false;
  this._isComplete = false;
  return this;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=398B file=valdi_rxjs/src/AsyncSubject
// args: e
// locals: t, s, o, u, c, r, this
function {
  this = this;
  let r;
  let c;
  let u;
  let o;
  let s;
  let t;
  if (((undefined === undefined))) goto L_f5;
  t = <to_object>(undefined).hasError;
  s = <to_object>(undefined)._hasValue;
  o = <to_object>(undefined)._value;
  u = <to_object>(undefined).thrownError;
  c = <to_object>(undefined).isStopped;
  r = <to_object>(undefined)._isComplete;
  <to_object>(undefined);
  goto L_fb;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_12a;
  goto L_18d;
  // [栈深重同步 1 -> 0]
  if ((c)) goto L_134;
  if (!(r)) goto L_18d;
  if (!(s)) goto L_167;
  e.next(o);
  e.complete();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=65B file=valdi_rxjs/src/AsyncSubject
// args: e
// locals: this
function {
  this = this;
  if ((this.isStopped)) goto L_40;
  this._value = e;
  this._hasValue = true;
  true;
  return;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=190B file=valdi_rxjs/src/AsyncSubject
// locals: e, t, s, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let s;
  let t;
  let e;
  if (((undefined === undefined))) goto L_81;
  e = <to_object>(undefined)._hasValue;
  t = <to_object>(undefined)._value;
  s = <to_object>(undefined)._isComplete;
  <to_object>(undefined);
  goto L_85;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_14;
  // [栈深重同步 1 -> 0]
  if ((s)) goto L_bd;
  this._isComplete = true;
  if (!(e)) goto L_af;
  super["next"].call(this, t);
  super["complete"].call(this);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=177B file=valdi_rxjs/src/AsyncSubject
// args: require, module, exports
// locals: e, AsyncSubject, <class_fields_init>, AsyncSubject#1
function {
  let AsyncSubject#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AsyncSubject = undefined;
  e = require("./Subject");
  let AsyncSubject;
  let <class_fields_init>;
  class AsyncSubject extends e.Subject { ... }
  <proto:AsyncSubject>._checkFinalizedStatuses = function <atom:0>;
  <proto:AsyncSubject>.next = function <atom:0>;
  <proto:AsyncSubject>.complete = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AsyncSubject>;
  AsyncSubject = function <atom:0>;
  // close_loc <class_fields_init>
  AsyncSubject#1 = function <atom:0>;
  exports.AsyncSubject = AsyncSubject#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/AsyncSubject
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
