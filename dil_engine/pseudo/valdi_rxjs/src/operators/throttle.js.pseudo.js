// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=113B file=valdi_rxjs/src/operators/throttle
// closure: a, s, g, b, i
function {
  if (!((a == null))) goto L_b;
  a;
  goto L_2f;
  undefined.unsubscribe();
  a = null;
  null;
  if (!(s)) goto L_70;
  g();
  if (!(b)) goto L_70;
  i.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=51B file=valdi_rxjs/src/operators/throttle
// closure: a, b, i
function {
  a = null;
  null;
  if (!(b)) goto L_32;
  i.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=7 cpool=0 bc=127B file=valdi_rxjs/src/operators/throttle
// args: e
// closure: a, t, o, r, i, p, d
function {
  a = t.innerFrom(o(e)).subscribe(r.createOperatorSubscriber(i, p, d));
  return t.innerFrom(o(e)).subscribe(r.createOperatorSubscriber(i, p, d));
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=83B file=valdi_rxjs/src/operators/throttle
// locals: e
// closure: u, c, i, b, f
function {
  if (!(u)) goto L_52;
  let e;
  u = false;
  false;
  e = c;
  c = null;
  null;
  i.next(e);
  if (!(!b)) goto L_51;
  f(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=78B file=valdi_rxjs/src/operators/throttle
// args: e
// closure: u, c, a, n, g, f
function {
  u = true;
  true;
  c = e;
  e;
  if ((!a)) goto L_39;
  if (!(a.closed)) goto L_4d;
  if (!(n)) goto L_48;
  goto L_4d;
  // [栈深重同步 1 -> 0]
  f(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=109B file=valdi_rxjs/src/operators/throttle
// closure: b, s, u, a, i
function {
  b = true;
  true;
  if (!(s)) goto L_18;
  if (!(u)) goto L_18;
  if ((!a)) goto L_41;
  if (!(a.closed)) goto L_6c;
  i.complete();
  return;
}

// fn <atom:0>  args=2 vars=12 closure=4 cpool=6 bc=241B file=valdi_rxjs/src/operators/throttle
// args: e, i
// locals: n, s, u, c, a, b, p, d, f, g
// closure: t, o, r, l
function {
  let g;
  let f;
  let d;
  let p;
  let b;
  let a;
  let c;
  let u;
  let s;
  let n;
  if (((undefined === undefined))) goto L_6d;
  n = <to_object>(undefined).leading;
  s = <to_object>(undefined).trailing;
  <to_object>(undefined);
  goto L_71;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_23;
  // [栈深重同步 1 -> 0]
  u = false;
  c = null;
  a = null;
  b = false;
  p = function <atom:0>;
  d = function <atom:0>;
  f = function <atom:0>;
  g = function <atom:0>;
  e.subscribe(r.createOperatorSubscriber(i, function <atom:0>, function <atom:0>));
  return;
}

// fn o  args=2 vars=4 closure=4 cpool=1 bc=91B file=valdi_rxjs/src/operators/throttle
// args: o, l
// locals: o#1, l#1
// closure: t, r, exports, e
function {
  let l#1;
  let o#1;
  o#1 = o;
  if (!((l === undefined))) goto L_31;
  l;
  l = exports.defaultThrottleConfig;
  l#1 = exports.defaultThrottleConfig;
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=151B file=valdi_rxjs/src/operators/throttle
// args: require, module, exports
// locals: e, r, t, o
function {
  o = function o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.defaultThrottleConfig = undefined;
  exports.throttle = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  t = require("../observable/innerFrom");
  exports.defaultThrottleConfig = {leading: true, trailing: false};
  exports.throttle = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/throttle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
