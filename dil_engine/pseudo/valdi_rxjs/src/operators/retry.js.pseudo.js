// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=52B file=valdi_rxjs/src/operators/retry
// args: e
// closure: b, o, t
function {
  if (!(b)) goto L_c;
  o = 0;
  0;
  t.next(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=64B file=valdi_rxjs/src/operators/retry
// closure: u, l, p
function {
  if (!(u)) goto L_39;
  u.unsubscribe();
  u = null;
  null;
  goto L_3f;
  // [栈深重同步 1 -> 0]
  p = true;
  true;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=45B file=valdi_rxjs/src/operators/retry
// closure: b, n
function {
  b.unsubscribe();
  n();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=valdi_rxjs/src/operators/retry
// closure: t
function {
  t.complete();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=10 cpool=3 bc=283B file=valdi_rxjs/src/operators/retry
// args: e
// locals: n, u, b
// closure: u, l, p, t, o, n, c, i, s, r
function {
  o = <o_new>;
  if (!(((o++) < n))) goto L_f3;
  let n;
  n = function <atom:0>;
  if (!((null != c))) goto L_ea;
  let b;
  let u;
  if (!(("number" == typeof c))) goto L_61;
  goto L_8e;
  // [栈深重同步 1 -> 0]
  u = s.innerFrom(c(e, o));
  b = r.createOperatorSubscriber(t, function <atom:0>, function <atom:0>);
  u.subscribe(b);
  // close_loc b
  goto L_ef;
  n();
  // close_loc n
  return;
  t.error(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=11 cpool=2 bc=153B file=valdi_rxjs/src/operators/retry
// locals: p
// closure: b, o, t, u, l, n, c, i, s, r, e
function {
  let p;
  p = false;
  u = e.subscribe(r.createOperatorSubscriber(t, function <atom:0>, undefined, function <atom:0>));
  e.subscribe(r.createOperatorSubscriber(t, function <atom:0>, undefined, function <atom:0>));
  if (!(p)) goto L_98;
  u.unsubscribe();
  u = null;
  null;
  l();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=6 cpool=1 bc=26B file=valdi_rxjs/src/operators/retry
// args: e, t
// locals: u, o, l
// closure: b, n, c, i, s, r
function {
  let l;
  let o;
  let u;
  u = undefined;
  o = 0;
  l = function <atom:0>;
  l();
  return;
}

// fn u  args=1 vars=6 closure=5 cpool=1 bc=277B file=valdi_rxjs/src/operators/retry
// args: u
// locals: u#1, o, n, c, b
// closure: i, s, r, t, e
function {
  let u#1;
  if (!((u === undefined))) goto L_d;
  u;
  u = (1 / 0);
  u#1 = (1 / 0);
  let b;
  let c;
  let n;
  let o;
  o = undefined;
  if (!(u)) goto L_2c;
  if (!(("object" == typeof u))) goto L_2c;
  goto L_33;
  // [栈深重同步 1 -> 0]
  o = {count: u};
  {count: u};
  if (((undefined === undefined))) goto L_ba;
  if (!((<to_object>(undefined).count === undefined))) goto L_68;
  <to_object>(undefined).count;
  n = (1 / 0);
  c = <to_object>(undefined).delay;
  if (!((<to_object>(undefined).resetOnSuccess === undefined))) goto L_b5;
  <to_object>(undefined).resetOnSuccess;
  b = false;
  <to_object>(undefined);
  goto L_c1;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_3d;
  // [栈深重同步 1 -> 0]
  if (!((n <= 0))) goto L_ed;
  return t.identity;
  return e.operate(function <atom:0>);
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=140B file=valdi_rxjs/src/operators/retry
// args: require, module, exports
// locals: e, r, t, i, s, u
function {
  u = function u;
  let s;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.retry = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  t = require("../util/identity");
  i = require("../observable/timer");
  s = require("../observable/innerFrom");
  exports.retry = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/retry
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
