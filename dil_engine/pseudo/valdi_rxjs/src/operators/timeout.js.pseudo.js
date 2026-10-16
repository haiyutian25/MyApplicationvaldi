// fn <atom:0>  args=0 vars=1 closure=7 cpool=0 bc=203B file=valdi_rxjs/src/operators/timeout
// locals: e
// closure: t, u, b, m, n, c, r
function {
  try { // catch -> L_99
  t.unsubscribe();
  u.innerFrom(b({meta: m, lastValue: n, seen: c})).subscribe(r);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_ca
  r.error(e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=10 cpool=1 bc=53B file=valdi_rxjs/src/operators/timeout
// args: e
// closure: t, u, b, m, n, c, r, i, s, h
function {
  i = s.executeSchedule(r, h, function <atom:0>, e);
  s.executeSchedule(r, h, function <atom:0>, e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=116B file=valdi_rxjs/src/operators/timeout
// args: e
// closure: i, c, r, n, a, d
function {
  if (!((i == null))) goto L_b;
  i;
  goto L_2f;
  undefined.unsubscribe();
  c = <c_new>;
  (c++);
  n = e;
  r.next(e);
  if (!((a > 0))) goto L_73;
  d(a);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=102B file=valdi_rxjs/src/operators/timeout
// closure: i, n
function {
  if (!((i == null))) goto L_b;
  i;
  goto L_2c;
  if ((undefined.closed)) goto L_5f;
  if (!((i == null))) goto L_3b;
  i;
  goto L_5f;
  undefined.unsubscribe();
  n = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=7 closure=8 cpool=3 bc=206B file=valdi_rxjs/src/operators/timeout
// args: e, r
// locals: t, i, n, c, d
// closure: u, b, m, s, h, a, o, l
function {
  let d;
  let c;
  let n;
  let i;
  let t;
  t = undefined;
  i = undefined;
  n = null;
  c = 0;
  d = function <atom:0>;
  t = e.subscribe(o.createOperatorSubscriber(r, function <atom:0>, undefined, undefined, function <atom:0>));
  e.subscribe(o.createOperatorSubscriber(r, function <atom:0>, undefined, undefined, function <atom:0>));
  if (!(!c)) goto L_cd;
  if (!((null != l))) goto L_c9;
  if (!(("number" == typeof l))) goto L_9b;
  goto L_cc;
  // [栈深重同步 2 -> 1]
  goto L_cc;
  // [栈深重同步 2 -> 1]
  d(a);
  return;
}

// fn n  args=2 vars=7 closure=7 cpool=1 bc=407B file=valdi_rxjs/src/operators/timeout
// args: i, n
// locals: l, a, b, h, m
// closure: u, s, o, c, e, r, t
function {
  let m;
  let h;
  let b;
  let a;
  let l;
  if (((undefined === undefined))) goto L_106;
  l = <to_object>(undefined).first;
  a = <to_object>(undefined).each;
  if (!((<to_object>(undefined).with === undefined))) goto L_86;
  <to_object>(undefined).with;
  b = c;
  if (!((<to_object>(undefined).scheduler === undefined))) goto L_d8;
  <to_object>(undefined).scheduler;
  if (!((n == null))) goto L_d8;
  n;
  h = e.asyncScheduler;
  if (!((<to_object>(undefined).meta === undefined))) goto L_101;
  <to_object>(undefined).meta;
  m = null;
  <to_object>(undefined);
  goto L_151;
  // [栈深重同步 0 -> 1]
  <?>;
  if (!(r.isValidDate(i))) goto L_139;
  goto L_17;
  // [栈深重同步 1 -> 0]
  if (!(("number" == typeof i))) goto L_14d;
  goto L_17;
  // [栈深重同步 1 -> 0]
  goto L_17;
  // [栈深重同步 1 -> 0]
  if (!((null == l))) goto L_16e;
  if (!((null == a))) goto L_16e;
  throw new TypeError("No timeout provided.");
  return t.operate(function <atom:0>);   // tail call
}

// fn c  args=1 vars=1 closure=1 cpool=0 bc=40B file=valdi_rxjs/src/operators/timeout
// args: e
// closure: exports
function {
  throw new exports.TimeoutError(e);
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=60B file=valdi_rxjs/src/operators/timeout
// args: r
// locals: r#1, this
// closure: e
function {
  this = this;
  let r#1;
  if (!((r === undefined))) goto L_d;
  r;
  r = null;
  r#1 = null;
  e(this);
  this.message = "Timeout has occurred";
  this.name = "TimeoutError";
  this.info = r;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=3B file=valdi_rxjs/src/operators/timeout
// args: e
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=3 bc=228B file=valdi_rxjs/src/operators/timeout
// args: require, module, exports
// locals: e, r, t, u, i, o, s, n, c
function {
  n = function n;
  c = function c;
  let s;
  let o;
  let i;
  let u;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TimeoutError = undefined;
  exports.timeout = undefined;
  e = require("../scheduler/async");
  r = require("../util/isDate");
  t = require("../util/lift");
  u = require("../observable/innerFrom");
  i = require("../util/createErrorClass");
  o = require("./OperatorSubscriber");
  s = require("../util/executeSchedule");
  exports.TimeoutError = i.createErrorClass(function <atom:0>);
  exports.timeout = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/timeout
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
