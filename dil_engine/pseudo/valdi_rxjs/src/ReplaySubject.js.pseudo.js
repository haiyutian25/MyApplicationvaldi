// fn <atom:0>  args=3 vars=9 closure=2 cpool=0 bc=311B file=valdi_rxjs/src/ReplaySubject
// args: e, t, s
// locals: e#1, t#1, s#1, this.active_func, new.target, this
// closure: i, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let s#1;
  let t#1;
  let e#1;
  if (!((e === undefined))) goto L_1e;
  e;
  e = (1 / 0);
  e#1 = (1 / 0);
  if (!((t === undefined))) goto L_29;
  t;
  t = (1 / 0);
  t#1 = (1 / 0);
  if (!((s === undefined))) goto L_55;
  s;
  s = i.dateTimestampProvider;
  s#1 = i.dateTimestampProvider;
  this = new new.target();
  if (!(<class_fields_init>)) goto L_6e;
  <class_fields_init>.call(this);
  new new.target();
  this._bufferSize = e;
  this._windowTime = t;
  this._timestampProvider = s;
  this._buffer = [];
  this._infiniteTimeWindow = true;
  this._infiniteTimeWindow = (t === (1 / 0));
  this._bufferSize = Math.max(1, e);
  this._windowTime = Math.max(1, t);
  return this;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=413B file=valdi_rxjs/src/ReplaySubject
// args: e
// locals: i, t, s, r, n, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let n;
  let r;
  let s;
  let t;
  let i;
  if (((undefined === undefined))) goto L_d2;
  i = <to_object>(undefined).isStopped;
  t = <to_object>(undefined)._buffer;
  s = <to_object>(undefined)._infiniteTimeWindow;
  r = <to_object>(undefined)._timestampProvider;
  n = <to_object>(undefined)._windowTime;
  <to_object>(undefined);
  goto L_d8;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1e;
  // [栈深重同步 1 -> 0]
  if ((i)) goto L_165;
  t.push(e);
  if (!(!s)) goto L_165;
  t.push((r.now() + n));
  this._trimBuffer();
  super["next"].call(this, e);
  return;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=0 bc=419B file=valdi_rxjs/src/ReplaySubject
// args: e
// locals: i, t, s, r, n, this
function {
  this = this;
  let r;
  let s;
  let t;
  let i;
  this._throwIfClosed();
  this._trimBuffer();
  i = this._innerSubscribe(e);
  if (((undefined === undefined))) goto L_d4;
  t = <to_object>(undefined)._infiniteTimeWindow;
  s = <to_object>(undefined)._buffer;
  <to_object>(undefined);
  goto L_d9;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_8a;
  // [栈深重同步 1 -> 0]
  r = s.slice();
  let n;
  n = 0;
  if (!((n < r.length))) goto L_177;
  if (!(!e.closed)) goto L_177;
  e.next(r[n]);
  if (!(t)) goto L_16e;
  goto L_16f;
  // [栈深重同步 2 -> 1]
  n = (n + 2);
  (n + 2);
  goto L_107;
  this._checkFinalizedStatuses(e);
  return i;
}

// fn <atom:0>  args=0 vars=9 closure=0 cpool=0 bc=425B file=valdi_rxjs/src/ReplaySubject
// locals: e, i, t, s, r, e#1, s#1, i#1, this
function {
  this = this;
  let r;
  let s;
  let t;
  let i;
  let e;
  if (((undefined === undefined))) goto L_aa;
  e = <to_object>(undefined)._bufferSize;
  i = <to_object>(undefined)._timestampProvider;
  t = <to_object>(undefined)._buffer;
  s = <to_object>(undefined)._infiniteTimeWindow;
  <to_object>(undefined);
  goto L_b0;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  if (!(s)) goto L_b8;
  goto L_b9;
  // [栈深重同步 1 -> 0]
  r = (2 * e);
  if (!((e < (1 / 0)))) goto L_106;
  if (!((r < t.length))) goto L_106;
  t.splice(0, (t.length - r));
  if (!(!s)) goto L_1a8;
  let s#1;
  let e#1;
  e#1 = i.now();
  s#1 = 0;
  let i#1;
  i#1 = 1;
  if (!((i#1 < t.length))) goto L_173;
  if (!((t[i#1] <= e#1))) goto L_173;
  s#1 = i#1;
  i#1;
  i#1 = (i#1 + 2);
  (i#1 + 2);
  goto L_148;
  if (!(s#1)) goto L_1a7;
  t.splice(0, (s#1 + 1));
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=4 bc=189B file=valdi_rxjs/src/ReplaySubject
// args: require, module, exports
// locals: e, i, ReplaySubject, <class_fields_init>, ReplaySubject#1
function {
  let ReplaySubject#1;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ReplaySubject = undefined;
  e = require("./Subject");
  i = require("./scheduler/dateTimestampProvider");
  let ReplaySubject;
  let <class_fields_init>;
  class ReplaySubject extends e.Subject { ... }
  <proto:ReplaySubject>.next = function <atom:0>;
  <proto:ReplaySubject>._subscribe = function <atom:0>;
  <proto:ReplaySubject>._trimBuffer = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ReplaySubject>;
  ReplaySubject = function <atom:0>;
  // close_loc <class_fields_init>
  ReplaySubject#1 = function <atom:0>;
  exports.ReplaySubject = ReplaySubject#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/ReplaySubject
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
