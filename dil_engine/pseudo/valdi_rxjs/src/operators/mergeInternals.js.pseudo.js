// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=61B file=valdi_rxjs/src/operators/mergeInternals
// closure: x, a, p, c
function {
  if ((!x)) goto L_3c;
  if ((a.length)) goto L_3c;
  if ((p)) goto L_3c;
  c.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=54B file=valdi_rxjs/src/operators/mergeInternals
// args: e
// closure: p, n, m, a
function {
  if (!((p < n))) goto L_d;
  return m(e);
  return a.push(e);
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=61B file=valdi_rxjs/src/operators/mergeInternals
// args: e
// closure: u, i, f, c
function {
  if (!((u == null))) goto L_9;
  u;
  goto L_b;
  undefined(e);
  if (!(i)) goto L_16;
  goto L_3c;
  // [栈深重同步 1 -> 0]
  c.next(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=7B file=valdi_rxjs/src/operators/mergeInternals
// closure: l
function {
  l = true;
  true;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=9B file=valdi_rxjs/src/operators/mergeInternals
// closure: m, e
function {
  return m(e);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=9 cpool=1 bc=202B file=valdi_rxjs/src/operators/mergeInternals
// locals: e, e#1
// closure: m, l, p, a, n, b, r, c, d
function {
  if (!(l)) goto L_c9;
  try { // catch -> L_97
  p = <p_new>;
  (p--);
  if (!(a.length)) goto L_90;
  if (!((p < n))) goto L_90;
  let e;
  e = a.shift();
  if (!(b)) goto L_83;
  goto L_8a;
  // [栈深重同步 1 -> 0]
  m(e);
  // close_loc e
  goto L_15;
  d();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  e#1 = <?>;
  try { // catch -> L_c8
  c.error(e#1);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=15 cpool=3 bc=191B file=valdi_rxjs/src/operators/mergeInternals
// args: s
// locals: l
// closure: u, i, f, c, m, p, a, n, b, r, d, e, o, h, t
function {
  let l;
  if (!(i)) goto L_2e;
  c.next(s);
  p = <p_new>;
  (p++);
  l = false;
  h = <h_new>;
  e.innerFrom(o(s, (h++))).subscribe(t.createOperatorSubscriber(c, function <atom:0>, function <atom:0>, undefined, function <atom:0>));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=12B file=valdi_rxjs/src/operators/mergeInternals
// closure: x, d
function {
  x = true;
  true;
  d();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=11B file=valdi_rxjs/src/operators/mergeInternals
// closure: l
function {
  if (!((l == null))) goto L_9;
  l;
  goto L_a;
  undefined();
  return;
}

// fn s  args=8 vars=15 closure=3 cpool=5 bc=143B file=valdi_rxjs/src/operators/mergeInternals
// args: s, c, o, n, u, i, b, l
// locals: a, p, h, x, d, f, m
// closure: r, e, t
function {
  let m;
  let f;
  let d;
  let x;
  let h;
  let p;
  let a;
  a = [];
  p = 0;
  h = 0;
  x = false;
  d = function <atom:0>;
  f = function <atom:0>;
  m = function <atom:0>;
  s.subscribe(t.createOperatorSubscriber(c, f, function <atom:0>));
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/mergeInternals
// args: require, module, exports
// locals: e, r, t, s
function {
  s = function s;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.mergeInternals = undefined;
  e = require("../observable/innerFrom");
  r = require("../util/executeSchedule");
  t = require("./OperatorSubscriber");
  exports.mergeInternals = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/mergeInternals
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
