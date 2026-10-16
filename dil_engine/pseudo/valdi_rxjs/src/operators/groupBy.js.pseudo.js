// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=45B file=valdi_rxjs/src/operators/groupBy
// args: e
// closure: l, b
function {
  l.forEach(e);
  e(b);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=valdi_rxjs/src/operators/groupBy
// args: r
// closure: e
function {
  return r.error(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=8B file=valdi_rxjs/src/operators/groupBy
// args: e
// closure: p
function {
  return p(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=101B file=valdi_rxjs/src/operators/groupBy
// closure: r, f, v, y
function {
  r.unsubscribe();
  f = (f --);
  if (!((0 === (f --)))) goto L_64;
  if (!(v)) goto L_64;
  y.unsubscribe();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=1 bc=53B file=valdi_rxjs/src/operators/groupBy
// args: e
// locals: r
// closure: f, v, y, t
function {
  let r;
  f = <f_new>;
  (f++);
  r = t.subscribe(e);
  return function <atom:0>;
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=1 bc=63B file=valdi_rxjs/src/operators/groupBy
// args: r, t
// locals: o
// closure: f, v, y, e
function {
  let o;
  o = new e.Observable(function <atom:0>);
  o.key = r;
  return o;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=88B file=valdi_rxjs/src/operators/groupBy
// closure: p, e
function {
  p.complete();
  if (!((e == null))) goto L_33;
  e;
  goto L_57;
  undefined.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=42B file=valdi_rxjs/src/operators/groupBy
// closure: l, s
function {
  return l.delete(s);   // tail call
}

// fn <atom:0>  args=1 vars=6 closure=14 cpool=3 bc=487B file=valdi_rxjs/src/operators/groupBy
// args: o
// locals: s, p, o#1, e, s#1
// closure: f, v, y, e, l, c, i, t, b, u, n, r, a, d
function {
  try { // catch -> L_1d6
  let p;
  let s;
  s = c(o);
  p = l.get(s);
  if (!(!p)) goto L_199;
  let o#1;
  if (!(i)) goto L_7a;
  goto L_a2;
  // [栈深重同步 4 -> 3]
  p = new t.Subject();
  l.set(s, new t.Subject());
  o#1 = function <atom:0>(s, p);
  b.next(o#1);
  if (!(u)) goto L_199;
  let e;
  e = n.createOperatorSubscriber(p, function <atom:0>, undefined, undefined, function <atom:0>);
  y.add(r.innerFrom(u(o#1)).subscribe(e));
  // close_loc e
  if (!(a)) goto L_1c9;
  goto L_1ca;
  // [栈深重同步 3 -> 2]
  p.next(o);
  // close_loc p
  // close_loc s
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  s#1 = <?>;
  try { // catch -> L_1e6
  d(s#1);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=valdi_rxjs/src/operators/groupBy
// args: e
function {
  return e.complete();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=8B file=valdi_rxjs/src/operators/groupBy
// closure: p
function {
  return p(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_rxjs/src/operators/groupBy
// closure: l
function {
  return l.clear();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=13B file=valdi_rxjs/src/operators/groupBy
// closure: v, f
function {
  v = true;
  true;
  return (0 === f);
}

// fn <atom:0>  args=2 vars=9 closure=8 cpool=6 bc=325B file=valdi_rxjs/src/operators/groupBy
// args: o, b
// locals: a, l, p, d, f, v, y
// closure: e, c, i, t, u, n, r, s
function {
  let y;
  let v;
  let f;
  let d;
  let p;
  let l;
  let a;
  a = undefined;
  if (!(s)) goto L_bd;
  if (!(("function" != typeof s))) goto L_bd;
  goto L_b7;
  // put_ref_value(<rot3l#0>, <rot3l#1>, <rot3l#2>.duration)
  // put_ref_value(<rot3l#0>, <rot3l#1>, <rot3l#2>.element)
  // put_ref_value(<rot3l#0>, <rot3l#1>, <rot3l#2>.connector)
  <to_object>(<?>);
  goto L_c4;
  // [栈深重同步 1 -> 0]
  goto L_31;
  // [栈深重同步 1 -> 0]
  a = s;
  s;
  l = new Map();
  p = function <atom:0>;
  d = function <atom:0>;
  f = 0;
  v = false;
  y = new n.OperatorSubscriber(b, function <atom:0>, function <atom:0>, d, function <atom:0>, function <atom:0>);
  o.subscribe(y);
  return;
}

// fn c  args=4 vars=4 closure=5 cpool=1 bc=41B file=valdi_rxjs/src/operators/groupBy
// args: c, s, u, i
// closure: e, t, n, r, o
function {
  return o.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=140B file=valdi_rxjs/src/operators/groupBy
// args: require, module, exports
// locals: e, r, t, o, n, c
function {
  c = function c;
  let n;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.groupBy = undefined;
  e = require("../Observable");
  r = require("../observable/innerFrom");
  t = require("../Subject");
  o = require("../util/lift");
  n = require("./OperatorSubscriber");
  exports.groupBy = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/groupBy
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
