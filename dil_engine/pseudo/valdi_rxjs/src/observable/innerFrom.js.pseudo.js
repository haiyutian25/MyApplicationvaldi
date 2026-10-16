// fn c  args=1 vars=1 closure=14 cpool=0 bc=369B file=valdi_rxjs/src/observable/innerFrom
// args: a
// closure: t, o, f, e, m, r, p, n, v, s, d, l, x, i
function {
  if (!((a instanceof t.Observable))) goto L_2a;
  return a;
  if (!((null != a))) goto L_14a;
  if (!(o.isInteropObservable(a))) goto L_5f;
  return f(a);   // tail call
  if (!(e.isArrayLike(a))) goto L_8e;
  return m(a);   // tail call
  if (!(r.isPromise(a))) goto L_bd;
  return p(a);   // tail call
  if (!(n.isAsyncIterable(a))) goto L_ec;
  return v(a);   // tail call
  if (!(s.isIterable(a))) goto L_11b;
  return d(a);   // tail call
  if (!(l.isReadableStreamLike(a))) goto L_14a;
  return x(a);   // tail call
  throw i.createInvalidObservableTypeError(a);
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=175B file=valdi_rxjs/src/observable/innerFrom
// args: r
// locals: t
// closure: e, u, a
function {
  let t;
  t = e[u.observable].call(e);
  if (!(a.isFunction(t.subscribe))) goto L_a0;
  return t.subscribe(r);   // tail call
  throw new TypeError("Provided object does not correctly implement Symbol.observable");
}

// fn f  args=1 vars=1 closure=3 cpool=1 bc=43B file=valdi_rxjs/src/observable/innerFrom
// args: e
// closure: u, a, t
function {
  return new t.Observable(function <atom:0>);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=141B file=valdi_rxjs/src/observable/innerFrom
// args: r
// locals: t
// closure: e
function {
  let t;
  t = 0;
  if (!((t < e.length))) goto L_67;
  if (!(!r.closed)) goto L_67;
  r.next(e[t]);
  t = <t_new>;
  (t++);
  goto L_5;
  r.complete();
  return;
}

// fn m  args=1 vars=1 closure=1 cpool=1 bc=43B file=valdi_rxjs/src/observable/innerFrom
// args: e
// closure: t
function {
  return new t.Observable(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=115B file=valdi_rxjs/src/observable/innerFrom
// args: e
// closure: r
function {
  if ((r.closed)) goto L_72;
  r.next(e);
  r.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=valdi_rxjs/src/observable/innerFrom
// args: e
// closure: r
function {
  return r.error(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=2 bc=115B file=valdi_rxjs/src/observable/innerFrom
// args: r
// closure: e, b
function {
  e.then(function <atom:0>, function <atom:0>).then(null, b.reportUnhandledError);
  return;
}

// fn p  args=1 vars=1 closure=2 cpool=1 bc=43B file=valdi_rxjs/src/observable/innerFrom
// args: e
// closure: b, t
function {
  return new t.Observable(function <atom:0>);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=176B file=valdi_rxjs/src/observable/innerFrom
// args: r
// locals: t
// closure: e
function {
  let t;
  for (const t of Array.from(e)) {
    r.next(t);
    if (!(r.closed)) continue;
    return undefined;
    // [栈深重同步 0 -> 3]
  }
  r.complete();
  return;
}

// fn d  args=1 vars=1 closure=1 cpool=1 bc=43B file=valdi_rxjs/src/observable/innerFrom
// args: e
// closure: t
function {
  return new t.Observable(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=valdi_rxjs/src/observable/innerFrom
// args: e
// closure: r
function {
  return r.error(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=43B file=valdi_rxjs/src/observable/innerFrom
// args: r
// closure: y, e
function {
  y(e, r).catch(function <atom:0>);
  return;
}

// fn v  args=1 vars=1 closure=2 cpool=1 bc=43B file=valdi_rxjs/src/observable/innerFrom
// args: e
// closure: y, t
function {
  return new t.Observable(function <atom:0>);
}

// fn x  args=1 vars=1 closure=2 cpool=0 bc=42B file=valdi_rxjs/src/observable/innerFrom
// args: e
// closure: v, l
function {
  return v(l.readableStreamLikeToAsyncGenerator(e));   // tail call
}

// fn y  args=2 vars=3 closure=0 cpool=0 bc=142B file=valdi_rxjs/src/observable/innerFrom
// args: e, r
// locals: t
function {
  let t;
  const _it1 = e;
  goto L_5b;
  t = <value(_it1)>;
  r.next(t);
  if (!(r.closed)) goto L_5b;
  return undefined; // async
  // [栈深重同步 0 -> 3]
  <dup3#5>;
  if (!(<done((await <dup3#4>.call(<dup3#3>)))>)) goto L_7;
  (await <dup3#4>.call(<dup3#3>));
  r.complete();
  return undefined; // async
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=8 bc=378B file=valdi_rxjs/src/observable/innerFrom
// args: require, module, exports
// locals: e, r, t, o, n, i, s, l, a, b, u, c, f, m, p, d, v, x, y
function {
  c = function c;
  f = function f;
  m = function m;
  p = function p;
  d = function d;
  v = function v;
  x = function x;
  y = function y;
  let u;
  let b;
  let a;
  let l;
  let s;
  let i;
  let n;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.innerFrom = undefined;
  exports.fromInteropObservable = undefined;
  exports.fromArrayLike = undefined;
  exports.fromPromise = undefined;
  exports.fromIterable = undefined;
  exports.fromAsyncIterable = undefined;
  exports.fromReadableStreamLike = undefined;
  e = require("../util/isArrayLike");
  r = require("../util/isPromise");
  t = require("../Observable");
  o = require("../util/isInteropObservable");
  n = require("../util/isAsyncIterable");
  i = require("../util/throwUnobservableError");
  s = require("../util/isIterable");
  l = require("../util/isReadableStreamLike");
  a = require("../util/isFunction");
  b = require("../util/reportUnhandledError");
  u = require("../symbol/observable");
  exports.innerFrom = c;
  exports.fromInteropObservable = f;
  exports.fromArrayLike = m;
  exports.fromPromise = p;
  exports.fromIterable = d;
  exports.fromAsyncIterable = v;
  exports.fromReadableStreamLike = x;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/innerFrom
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
