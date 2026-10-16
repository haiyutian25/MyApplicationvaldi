// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=9B file=valdi_rxjs/src/observable/fromEvent
// args: r
// closure: d, e, F, L
function {
  return d[e](F, r, L);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=3B file=valdi_rxjs/src/observable/fromEvent
// args: e
// closure: d, F, L
function {
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=7B file=valdi_rxjs/src/observable/fromEvent
// args: e
// closure: c, F, L
function {
  return c(e, F, L);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=53B file=valdi_rxjs/src/observable/fromEvent
// args: r
// closure: e
function {
  r = ...0;
  if (!((1 < r.length))) goto L_2f;
  goto L_32;
  // [栈深重同步 3 -> 2]
  return e.next(r[0]);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=9B file=valdi_rxjs/src/observable/fromEvent
// closure: O, r
function {
  return O(r);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=2 bc=22B file=valdi_rxjs/src/observable/fromEvent
// args: e
// locals: r
// closure: O, E
function {
  let r;
  r = function <atom:0>;
  E(r);
  return function <atom:0>;
}

// fn c  args=4 vars=6 closure=14 cpool=3 bc=507B file=valdi_rxjs/src/observable/fromEvent
// args: d, F, L, l
// locals: E, O
// closure: c, i, o, p, s, f, u, v, m, a, t, n, e, r
function {
  let O;
  let E;
  if (!(i.isFunction(L))) goto L_34;
  l = L;
  L = undefined;
  undefined;
  if (!(l)) goto L_87;
  return c(d, F, L).pipe(o.mapOneOrManyArgs(l));   // tail call
  if (((undefined === undefined))) goto L_99;
  const _it1 = undefined;
  <done(_it1)>;
  E = <value(_it1)>;
  <done(_it1)>;
  O = <value(_it1)>;
  goto L_13d;
  // [栈深重同步 4 -> 1]
  _it1;
  if (!(p(d))) goto L_ca;
  goto L_8c;
  // [栈深重同步 1 -> 0]
  if (!(f(d))) goto L_100;
  goto L_8c;
  // [栈深重同步 1 -> 0]
  if (!(m(d))) goto L_137;
  goto L_8c;
  // [栈深重同步 1 -> 0]
  goto L_8c;
  // [栈深重同步 1 -> 0]
  if (!(!E)) goto L_1bb;
  if (!(t.isArrayLike(d))) goto L_1bb;
  return n.mergeMap(function <atom:0>)(e.innerFrom(d));   // tail call
  if (!(!E)) goto L_1d0;
  throw new TypeError("Invalid event target");
  return new r.Observable(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=8B file=valdi_rxjs/src/observable/fromEvent
// args: t
// closure: e, n, r
function {
  return e[n](r, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=3B file=valdi_rxjs/src/observable/fromEvent
// args: n
// closure: e, r
function {
  return function <atom:0>;
}

// fn v  args=2 vars=2 closure=0 cpool=1 bc=3B file=valdi_rxjs/src/observable/fromEvent
// args: e, r
function {
  return function <atom:0>;
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=147B file=valdi_rxjs/src/observable/fromEvent
// args: e
// closure: i
function {
  if (!(i.isFunction(e.addListener))) goto L_92;
  return i.isFunction(e.removeListener);
}

// fn m  args=1 vars=1 closure=1 cpool=0 bc=147B file=valdi_rxjs/src/observable/fromEvent
// args: e
// closure: i
function {
  if (!(i.isFunction(e.on))) goto L_92;
  return i.isFunction(e.off);
}

// fn p  args=1 vars=1 closure=1 cpool=0 bc=147B file=valdi_rxjs/src/observable/fromEvent
// args: e
// closure: i
function {
  if (!(i.isFunction(e.addEventListener))) goto L_92;
  return i.isFunction(e.removeEventListener);
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=5 bc=222B file=valdi_rxjs/src/observable/fromEvent
// args: require, module, exports
// locals: e, r, n, t, i, o, u, s, a, c, v, f, m, p
function {
  c = function c;
  v = function v;
  f = function f;
  m = function m;
  p = function p;
  let a;
  let s;
  let u;
  let o;
  let i;
  let t;
  let n;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.fromEvent = undefined;
  e = require("./innerFrom");
  r = require("../Observable");
  n = require("../operators/mergeMap");
  t = require("../util/isArrayLike");
  i = require("../util/isFunction");
  o = require("../util/mapOneOrManyArgs");
  u = ["addListener", "removeListener"];
  s = ["addEventListener", "removeEventListener"];
  a = ["on", "off"];
  exports.fromEvent = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/fromEvent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
