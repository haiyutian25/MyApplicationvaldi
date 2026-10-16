// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_rxjs/src/operators/share
// closure: t
function {
  return new t.Subject();
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=valdi_rxjs/src/operators/share
// closure: b
function {
  if (!((b == null))) goto L_b;
  b;
  goto L_2f;
  undefined.unsubscribe();
  b = null;
  null;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=26B file=valdi_rxjs/src/operators/share
// closure: m, t, p, f, d
function {
  m();
  p = null;
  t = null;
  null;
  d = false;
  f = false;
  false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=60B file=valdi_rxjs/src/operators/share
// locals: e
// closure: t, q
function {
  let e;
  e = t;
  q();
  if (!((e == null))) goto L_17;
  e;
  goto L_3b;
  undefined.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=46B file=valdi_rxjs/src/operators/share
// closure: a, d, f, b, o, x, i
function {
  a = <a_new>;
  (a--);
  if (((0 !== a))) goto L_2d;
  if ((d)) goto L_2d;
  if ((f)) goto L_2d;
  b = o(x, i);
  o(x, i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=valdi_rxjs/src/operators/share
// args: e
// closure: S
function {
  return S.next(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=7 cpool=0 bc=67B file=valdi_rxjs/src/operators/share
// args: e
// closure: d, m, b, o, q, l, S
function {
  d = true;
  true;
  m();
  b = o(q, l, e);
  o(q, l, e);
  S.error(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=65B file=valdi_rxjs/src/operators/share
// closure: f, m, b, o, q, c, S
function {
  f = true;
  true;
  m();
  b = o(q, c);
  o(q, c);
  S.complete();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=16 cpool=4 bc=298B file=valdi_rxjs/src/operators/share
// args: r, n
// locals: S
// closure: a, d, f, b, o, x, i, m, q, l, c, p, s, t, u, e
function {
  let S;
  a = <a_new>;
  (a++);
  if ((d)) goto L_1d;
  if ((f)) goto L_1d;
  m();
  if (!((p == null))) goto L_2a;
  p;
  p = s();
  S = s();
  n.add(function <atom:0>);
  S.subscribe(n);
  if ((t)) goto L_129;
  t = new u.SafeSubscriber({next: function <atom:0>, error: function <atom:0>, complete: function <atom:0>});
  new u.SafeSubscriber({next: function <atom:0>, error: function <atom:0>, complete: function <atom:0>});
  e.from(r).subscribe(t);
  return;
}

// fn <atom:0>  args=1 vars=10 closure=8 cpool=4 bc=113B file=valdi_rxjs/src/operators/share
// args: r
// locals: t, b, p, a, f, d, m, q, x
// closure: o, i, l, c, s, u, e, n
function {
  let x;
  let q;
  let m;
  let d;
  let f;
  let a;
  let p;
  let b;
  let t;
  t = null;
  b = null;
  p = null;
  a = 0;
  f = false;
  d = false;
  m = function <atom:0>;
  q = function <atom:0>;
  x = function <atom:0>;
  return n.operate(function <atom:0>)(r);   // tail call
}

// fn s  args=1 vars=6 closure=5 cpool=2 bc=218B file=valdi_rxjs/src/operators/share
// args: r
// locals: r#1, s, l, c, i
// closure: t, o, u, e, n
function {
  let r#1;
  if (!((r === undefined))) goto L_b;
  r;
  r = {};
  r#1 = {};
  let i;
  let c;
  let l;
  let s;
  if (((undefined === undefined))) goto L_d2;
  if (!((<to_object>(undefined).connector === undefined))) goto L_4f;
  <to_object>(undefined).connector;
  s = function <atom:0>;
  if (!((<to_object>(undefined).resetOnError === undefined))) goto L_79;
  <to_object>(undefined).resetOnError;
  l = true;
  if (!((<to_object>(undefined).resetOnComplete === undefined))) goto L_a3;
  <to_object>(undefined).resetOnComplete;
  c = true;
  if (!((<to_object>(undefined).resetOnRefCountZero === undefined))) goto L_cd;
  <to_object>(undefined).resetOnRefCountZero;
  i = true;
  <to_object>(undefined);
  goto L_d7;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_20;
  // [栈深重同步 1 -> 0]
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=valdi_rxjs/src/operators/share
// closure: e
function {
  return e();   // tail call
}

// fn o  args=3 vars=3 closure=1 cpool=1 bc=149B file=valdi_rxjs/src/operators/share
// args: e, t, u
// closure: r
function {
  u = ...2;
  if (!((true === t))) goto L_f;
  e();
  return null;
  if (!((false === t))) goto L_17;
  return null;
  // append([], 0, u)
  u;
  return t.apply(undefined, []).pipe(r.take(1)).subscribe(function <atom:0>);
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=144B file=valdi_rxjs/src/operators/share
// args: require, module, exports
// locals: e, r, t, u, n, s, o
function {
  s = function s;
  o = function o;
  let n;
  let u;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.share = undefined;
  e = require("../observable/from");
  r = require("./take");
  t = require("../Subject");
  u = require("../Subscriber");
  n = require("../util/lift");
  exports.share = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/share
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
