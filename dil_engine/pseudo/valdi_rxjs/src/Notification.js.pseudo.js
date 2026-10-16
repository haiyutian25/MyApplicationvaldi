// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=valdi_rxjs/src/Notification
// args: t
function {
  t.NEXT = "N";
  t.ERROR = "E";
  t.COMPLETE = "C";
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=66B file=valdi_rxjs/src/Notification
// args: t, i, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.kind = t;
  this.value = i;
  this.error = e;
  this.hasValue = ("N" === t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=8B file=valdi_rxjs/src/Notification
// args: t
// locals: this
// closure: n
function {
  this = this;
  return n(this, t);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=187B file=valdi_rxjs/src/Notification
// args: t, i, e
// locals: o, r, n, this
function {
  this = this;
  let n;
  let r;
  let o;
  if (((undefined === undefined))) goto L_7d;
  o = <to_object>(undefined).kind;
  r = <to_object>(undefined).value;
  n = <to_object>(undefined).error;
  <to_object>(undefined);
  goto L_81;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_10;
  // [栈深重同步 1 -> 0]
  if (!(("N" === o))) goto L_99;
  if (!((t == null))) goto L_94;
  t;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>(r);
  if (!(("E" === o))) goto L_b1;
  if (!((i == null))) goto L_ac;
  i;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>(n);
  if (!((e == null))) goto L_b9;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>();
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=163B file=valdi_rxjs/src/Notification
// args: t, i, e
// locals: this
// closure: o
function {
  this = this;
  if (!((t == null))) goto L_2f;
  t;
  goto L_50;
  if (!(o.isFunction(undefined.next))) goto L_7a;
  return this.observe(t);
  return this.do(t, i, e);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=valdi_rxjs/src/Notification
// closure: n
function {
  return n;
}

// fn <atom:0>  args=0 vars=5 closure=3 cpool=1 bc=354B file=valdi_rxjs/src/Notification
// locals: o, r, n, s, this
// closure: i, e, t
function {
  this = this;
  let s;
  let n;
  let r;
  let o;
  if (((undefined === undefined))) goto L_81;
  o = <to_object>(undefined).kind;
  r = <to_object>(undefined).value;
  n = <to_object>(undefined).error;
  <to_object>(undefined);
  goto L_86;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_14;
  // [栈深重同步 1 -> 0]
  if (!(("N" === o))) goto L_bb;
  goto L_121;
  // [栈深重同步 1 -> 0]
  if (!(("E" === o))) goto L_ef;
  goto L_121;
  // [栈深重同步 1 -> 0]
  if (!(("C" === o))) goto L_120;
  goto L_121;
  // [栈深重同步 1 -> 0]
  s = 0;
  if (!(!s)) goto L_15e;
  throw new TypeError("Unexpected notification kind ".concat(o));
  return s;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=14B file=valdi_rxjs/src/Notification
// args: t
// closure: Notification
function {
  return new Notification("N", t);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=15B file=valdi_rxjs/src/Notification
// args: t
// closure: Notification
function {
  return new Notification("E", undefined, t);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=valdi_rxjs/src/Notification
// closure: Notification
function {
  return Notification.completeNotification;
}

// fn n  args=2 vars=5 closure=0 cpool=0 bc=325B file=valdi_rxjs/src/Notification
// args: t, i
// locals: e, o, r
function {
  let r;
  let o;
  let e;
  if (((undefined === undefined))) goto L_7b;
  e = <to_object>(undefined).kind;
  o = <to_object>(undefined).value;
  r = <to_object>(undefined).error;
  <to_object>(undefined);
  goto L_7f;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_e;
  // [栈深重同步 1 -> 0]
  if (!(("string" != typeof e))) goto L_9a;
  throw new TypeError("Invalid notification, missing "kind"");
  if (!(("N" === e))) goto L_d8;
  if (!((i.next == null))) goto L_d0;
  i.next;
  i;
  goto L_144;
  // [栈深重同步 1 -> 2]
  goto L_144;
  // [栈深重同步 1 -> 0]
  if (!(("E" === e))) goto L_116;
  if (!((i.error == null))) goto L_10e;
  i.error;
  i;
  goto L_144;
  // [栈深重同步 1 -> 2]
  goto L_144;
  // [栈深重同步 1 -> 0]
  if (!((i.complete == null))) goto L_141;
  i.complete;
  i;
  goto L_144;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=10 bc=306B file=valdi_rxjs/src/Notification
// args: require, module, exports
// locals: t, i, e, o, r, Notification, <class_fields_init>, Notification#1, n
function {
  n = function n;
  let Notification#1;
  let o;
  let e;
  let i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NotificationKind = undefined;
  exports.Notification = undefined;
  exports.observeNotification = undefined;
  t = require("./observable/empty");
  i = require("./observable/of");
  e = require("./observable/throwError");
  o = require("./util/isFunction");
  if ((r)) goto L_a2;
  r = {};
  exports.NotificationKind = {};
  !function <atom:0>({});
  let Notification;
  let <class_fields_init>;
  class Notification extends undefined { ... }
  <proto:Notification>.observe = function <atom:0>;
  <proto:Notification>.do = function <atom:0>;
  <proto:Notification>.accept = function <atom:0>;
  <proto:Notification>.toObservable = function <atom:0>;
  function <atom:0>.createNext = function <atom:0>;
  function <atom:0>.createError = function <atom:0>;
  function <atom:0>.createComplete = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Notification>;
  Notification = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc Notification
  Notification#1 = function <atom:0>;
  exports.Notification = Notification#1;
  Notification#1.completeNotification = new Notification#1("C");
  exports.observeNotification = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/Notification
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
