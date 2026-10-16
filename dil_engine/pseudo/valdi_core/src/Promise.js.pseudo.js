// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=112B file=valdi_core/src/Promise
// args: t, e
// closure: exports, module
function {
  if (!(("object" == typeof exports))) goto L_23;
  if (!(("undefined" != typeof module))) goto L_23;
  module.exports = e();
  goto L_6f;
  // [栈深重同步 1 -> 0]
  if (!(("function" == typeof define))) goto L_62;
  if (!(define.amd)) goto L_62;
  goto L_6f;
  // [栈深重同步 1 -> 0]
  t.ES6Promise = e();
  e();
  return;
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=9B file=valdi_core/src/Promise
// args: t
function {
  return ("function" == typeof t);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=115B file=valdi_core/src/Promise
// args: t
function {
  return ("[object Array]" === Object.prototype.toString.call(t));
}

// fn <atom:0>  args=2 vars=2 closure=5 cpool=0 bc=33B file=valdi_core/src/Promise
// args: t, e
// closure: i, r, n, s, c
function {
  i[r] = t;
  i[(r + 1)] = e;
  r = (r + 2);
  if (!((2 === (r + 2)))) goto L_20;
  if (!(n)) goto L_1c;
  goto L_20;
  // [栈深重同步 1 -> 0]
  c();
  return;
}

// fn s  args=0 vars=1 closure=2 cpool=0 bc=37B file=valdi_core/src/Promise
// locals: t
// closure: r, i
function {
  t = 0;
  if (!((t < r))) goto L_22;
  i[t](i[(t + 1)]);
  i[t] = undefined;
  i[(t + 1)] = undefined;
  // add_loc(2)
  goto L_2;
  r = 0;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=6B file=valdi_core/src/Promise
// closure: u, s
function {
  return u(s, 1);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=43B file=valdi_core/src/Promise
// closure: S, i, n, s, r
function {
  return S(i, n, s, r._result);   // tail call
}

// fn a  args=2 vars=8 closure=6 cpool=1 bc=130B file=valdi_core/src/Promise
// args: t, e
// locals: r, n, i, s, this, arguments
// closure: S, h, f, T, o, E
function {
  this = this;
  arguments = <special_object 0>;
  r = this;
  n = new this.constructor(h);
  if (!((undefined === n[f]))) goto L_3f;
  T(n);
  i = r._state;
  if (!(r._state)) goto L_75;
  s = arguments[(i - 1)];
  o(function <atom:0>);
  goto L_80;
  E(r, n, t, e);
  return n;
}

// fn l  args=1 vars=3 closure=2 cpool=0 bc=69B file=valdi_core/src/Promise
// args: t
// locals: e, this
// closure: h, b
function {
  this = this;
  if (!(t)) goto L_37;
  if (!(("object" == typeof t))) goto L_37;
  if (!((t.constructor === this))) goto L_37;
  return t;
  e = new this(h);
  b(e, t);
  return e;
}

// fn h  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/Promise
function {
  return;
}

// fn y  args=1 vars=2 closure=1 cpool=0 bc=62B file=valdi_core/src/Promise
// args: t
// locals: t#1
// closure: d
function {
  try { // catch -> L_29
  return t.then;
  // [栈深重同步 0 -> 1]
  t#1 = <?>;
  try { // catch -> L_3d
  d.error = t#1;
  return d;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=6B file=valdi_core/src/Promise
// args: t
// closure: b, u
function {
  return b(u, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=6B file=valdi_core/src/Promise
// args: t
// closure: A, u
function {
  return A(u, t);   // tail call
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=58B file=valdi_core/src/Promise
// args: t, e, r, n
// locals: t#1
function {
  try { // catch -> L_30
  t.call(e, r, n);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t#1 = <?>;
  try { // catch -> L_39
  return t#1;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=26B file=valdi_core/src/Promise
// args: r
// closure: e, i, b, t, g
function {
  if ((e)) goto L_19;
  e = true;
  if (!((i !== r))) goto L_13;
  goto L_19;
  // [栈深重同步 1 -> 0]
  g(t, r);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=13B file=valdi_core/src/Promise
// args: r
// closure: e, A, t
function {
  if ((e)) goto L_c;
  e = true;
  A(t, r);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=5 cpool=3 bc=70B file=valdi_core/src/Promise
// args: t
// locals: e, r
// closure: i, b, g, A, s
function {
  e = false;
  r = function <atom:0>(s, i, function <atom:0>, function <atom:0>, t._label);
  if (!(!e)) goto L_45;
  if (!(r)) goto L_45;
  e = true;
  A(t, r);
  return;
}

// fn m  args=3 vars=7 closure=11 cpool=3 bc=433B file=valdi_core/src/Promise
// args: e, r, n
// locals: i, s, u, c
// closure: b, A, g, a, l, v, p, E, d, t, o
function {
  if (!((r.constructor === e.constructor))) goto L_14e;
  if (!((n === a))) goto L_14e;
  if (!((r.constructor.resolve === l))) goto L_14e;
  u = e;
  c = r;
  if (!((r._state === v))) goto L_f1;
  goto L_1b0;
  // [栈深重同步 1 -> 0]
  if (!((c._state === p))) goto L_140;
  goto L_1b0;
  // [栈深重同步 1 -> 0]
  goto L_1b0;
  // [栈深重同步 1 -> 0]
  if (!((n === d))) goto L_18d;
  A(e, d.error);
  d.error = null;
  goto L_1b0;
  // [栈深重同步 1 -> 0]
  if (!((undefined === n))) goto L_198;
  goto L_1b0;
  // [栈深重同步 1 -> 0]
  if (!(t(n))) goto L_1ac;
  i = r;
  s = n;
  goto L_1b0;
  // [栈深重同步 1 -> 0]
  g(e, r);
  return;
}

// fn b  args=2 vars=4 closure=4 cpool=0 bc=67B file=valdi_core/src/Promise
// args: t, e
// locals: r, n
// closure: A, g, m, y
function {
  if (!((t === e))) goto L_18;
  goto L_42;
  // [栈深重同步 1 -> 0]
  r = e;
  n = typeof e;
  if (((null === r))) goto L_33;
  if (!(("object" !== n))) goto L_3b;
  if (!(("function" !== n))) goto L_3b;
  goto L_42;
  // [栈深重同步 1 -> 0]
  m(t, e, y(e));
  return;
}

// fn w  args=1 vars=1 closure=1 cpool=0 bc=114B file=valdi_core/src/Promise
// args: t
// closure: j
function {
  if (!(t._onerror)) goto L_6d;
  t._onerror(t._result);
  j(t);
  return;
}

// fn g  args=2 vars=2 closure=4 cpool=0 bc=108B file=valdi_core/src/Promise
// args: t, e
// closure: _, v, o, j
function {
  if (!((t._state === _))) goto L_6b;
  t._result = e;
  t._state = v;
  if (!((0 !== t._subscribers.length))) goto L_6b;
  o(j, t);
  return;
}

// fn A  args=2 vars=2 closure=4 cpool=0 bc=67B file=valdi_core/src/Promise
// args: t, e
// closure: _, p, o, w
function {
  if (!((t._state === _))) goto L_42;
  t._state = p;
  t._result = e;
  o(w, t);
  return;
}

// fn E  args=4 vars=6 closure=4 cpool=0 bc=114B file=valdi_core/src/Promise
// args: t, e, r, n
// locals: i, s
// closure: v, p, o, j
function {
  i = t._subscribers;
  s = t._subscribers.length;
  t._onerror = null;
  i[s] = e;
  i[(s + v)] = r;
  i[(s + p)] = n;
  if (!((0 === s))) goto L_71;
  if (!(t._state)) goto L_71;
  o(j, t);
  return;
}

// fn j  args=1 vars=7 closure=1 cpool=0 bc=210B file=valdi_core/src/Promise
// args: t
// locals: e, r, n, o, i, s
// closure: S
function {
  e = t._subscribers;
  r = t._state;
  if (!((0 !== e.length))) goto L_d1;
  n = undefined;
  o = undefined;
  i = t._result;
  s = 0;
  if (!((s < e.length))) goto L_a5;
  n = e[s];
  o = e[(s + r)];
  if (!(n)) goto L_9b;
  goto L_9f;
  // [栈深重同步 1 -> 0]
  o(i);
  // add_loc(3)
  goto L_7a;
  t._subscribers.length = 0;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=31B file=valdi_core/src/Promise
// args: t, e
// locals: t#1
// closure: d
function {
  try { // catch -> L_a
  return t(e);
  // [栈深重同步 0 -> 1]
  t#1 = <?>;
  try { // catch -> L_1e
  d.error = t#1;
  return d;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn S  args=4 vars=9 closure=8 cpool=1 bc=207B file=valdi_core/src/Promise
// args: e, r, n, o
// locals: i, s, u, c, a
// closure: d, t, A, _, b, v, g, p
function {
  i = t(n);
  s = undefined;
  u = undefined;
  c = undefined;
  a = undefined;
  if (!(i)) goto L_6d;
  s = function <atom:0>(n, o);
  if (!((function <atom:0>(n, o) === d))) goto L_4f;
  a = true;
  u = s.error;
  s.error = null;
  goto L_52;
  // [栈深重同步 1 -> 0]
  c = true;
  true;
  if (!((r === s))) goto L_72;
  A(r, new TypeError("A promises callback cannot return that same promise."));
  return;
  s = o;
  c = true;
  if (((r._state !== _))) goto L_ce;
  if (!(i)) goto L_a8;
  if (!(c)) goto L_a8;
  goto L_ce;
  // [栈深重同步 1 -> 0]
  if (!(a)) goto L_b2;
  goto L_ce;
  // [栈深重同步 1 -> 0]
  if (!((e === v))) goto L_c1;
  goto L_ce;
  // [栈深重同步 1 -> 0]
  if (!((e === p))) goto L_ce;
  A(r, s);
  return;
}

// fn T  args=1 vars=1 closure=2 cpool=0 bc=43B file=valdi_core/src/Promise
// args: t
// closure: f, P
function {
  P = <P_new>;
  t[f] = (P++);
  t._state = undefined;
  t._result = undefined;
  t._subscribers = [];
  return;
}

// fn t  args=2 vars=3 closure=6 cpool=0 bc=466B file=valdi_core/src/Promise
// args: t, r
// locals: this
// closure: h, f, T, e, g, A
function {
  this = this;
  this._instanceConstructor = t;
  this.promise = new t(h);
  if ((this.promise[f])) goto L_69;
  T(this.promise);
  if (!(e(r))) goto L_19d;
  this.length = r.length;
  this._remaining = r.length;
  this._result = new Array(this.length);
  if (!((0 === this.length))) goto L_f0;
  goto L_1d1;
  // [栈深重同步 1 -> 0]
  if ((this.length)) goto L_f8;
  this.length = 0;
  this._enumerate(r);
  if (!((0 === this._remaining))) goto L_1d1;
  goto L_1d1;
  // [栈深重同步 1 -> 0]
  A(this.promise, new Error("Array Methods must be provided an Array"));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=95B file=valdi_core/src/Promise
// args: t
// locals: e, this
// closure: _
function {
  this = this;
  e = 0;
  if (!((this._state === _))) goto L_5e;
  if (!((e < t.length))) goto L_5e;
  this._eachEntry(t[e], e);
  goto L_4;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=valdi_core/src/Promise
// args: e
// closure: t
function {
  return e(t);   // tail call
}

// fn <atom:0>  args=2 vars=7 closure=7 cpool=1 bc=490B file=valdi_core/src/Promise
// args: t, e
// locals: r, n, o, i, this
// closure: l, y, a, _, x, h, m
function {
  this = this;
  r = this._instanceConstructor;
  n = this._instanceConstructor.resolve;
  if (!((this._instanceConstructor.resolve === l))) goto L_1be;
  o = y(t);
  if (!((y(t) === a))) goto L_ee;
  if (!((t._state !== _))) goto L_ee;
  this._settledAt(t._state, e, t._result);
  return;
  if (!(("function" != typeof o))) goto L_14c;
  this._remaining = (this._remaining --);
  this._result[e] = t;
  return;
  if (!((r === x))) goto L_18e;
  i = new r(h);
  m(i, t, o);
  this._willSettleAt(i, e);
  return;
  this._willSettleAt(new r(function <atom:0>), e);
  return;
  this._willSettleAt(n(t), e);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=4 cpool=0 bc=249B file=valdi_core/src/Promise
// args: t, e, r
// locals: n, this
// closure: _, p, A, g
function {
  this = this;
  n = this.promise;
  if (!((this.promise._state === _))) goto L_aa;
  this._remaining = (this._remaining --);
  if (!((t === p))) goto L_83;
  goto L_aa;
  // [栈深重同步 1 -> 0]
  this._result[e] = r;
  r;
  if (!((0 === this._remaining))) goto L_f8;
  g(n, this._result);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=40B file=valdi_core/src/Promise
// args: t
// closure: r, v, e
function {
  return r._settledAt(v, e, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=40B file=valdi_core/src/Promise
// args: t
// closure: r, p, e
function {
  return r._settledAt(p, e, t);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=2 bc=15B file=valdi_core/src/Promise
// args: t, e
// locals: r, this
// closure: v, p, E
function {
  this = this;
  r = this;
  E(t, undefined, function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=15 cpool=5 bc=184B file=valdi_core/src/Promise
// locals: t
// closure: h, f, T, e, g, A, _, l, y, a, x, m, p, v, E
function {
  t = function t;
  function t.prototype._enumerate = function <atom:0>;
  t.prototype._eachEntry = function <atom:0>;
  t.prototype._settledAt = function <atom:0>;
  t.prototype._willSettleAt = function <atom:0>;
  return t;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=15B file=valdi_core/src/Promise
function {
  throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=5B file=valdi_core/src/Promise
// args: e
// closure: b, t
function {
  b(t, e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=5B file=valdi_core/src/Promise
// args: e
// closure: A, t
function {
  A(t, e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=2 bc=28B file=valdi_core/src/Promise
// args: t, e
// locals: e#1
// closure: b, A
function {
  try { // catch -> L_e
  e(function <atom:0>, function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  e#1 = <?>;
  try { // catch -> L_1b
  A(t, e#1);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=15B file=valdi_core/src/Promise
function {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

// fn t  args=1 vars=2 closure=6 cpool=3 bc=87B file=valdi_core/src/Promise
// args: e
// locals: this
// closure: b, A, f, P, h, t
function {
  this = this;
  P = <P_new>;
  this[f] = (P++);
  this._state = undefined;
  this._result = undefined;
  this._subscribers = [];
  if (!((h !== e))) goto L_56;
  if (!(("function" != typeof e))) goto L_44;
  function <atom:0>();
  if (!((this instanceof t))) goto L_53;
  goto L_56;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=41B file=valdi_core/src/Promise
// args: t
// locals: this
function {
  this = this;
  return this.then(null, t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=valdi_core/src/Promise
// closure: r
function {
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=77B file=valdi_core/src/Promise
// args: r
// closure: e, t
function {
  return e.resolve(t()).then(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=valdi_core/src/Promise
// closure: r
function {
  throw r;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=77B file=valdi_core/src/Promise
// args: r
// closure: e, t
function {
  return e.resolve(t()).then(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=2 bc=78B file=valdi_core/src/Promise
// args: t
// locals: e, this
function {
  this = this;
  e = this.constructor;
  return this.then(function <atom:0>, function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=3 bc=94B file=valdi_core/src/Promise
// locals: t
// closure: b, A, f, P, h
function {
  t = function t;
  function t.prototype.catch = function <atom:0>;
  t.prototype.finally = function <atom:0>;
  return t;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/Promise
// args: t
// locals: this
// closure: Y
function {
  this = this;
  return new Y(this, t).promise;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=94B file=valdi_core/src/Promise
// args: e, n
// locals: o, i
// closure: t, r
function {
  o = t.length;
  i = 0;
  if (!((i < o))) goto L_5d;
  r.resolve(t[i]).then(e, n);
  goto L_5;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=18B file=valdi_core/src/Promise
// args: t, e
function {
  return e(new TypeError("You must pass an array to race."));   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=2 bc=25B file=valdi_core/src/Promise
// args: t
// locals: r, this
// closure: e
function {
  this = this;
  r = this;
  if (!(e(t))) goto L_11;
  return new r(function <atom:0>);
  return new r(function <atom:0>);
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=16B file=valdi_core/src/Promise
// args: t
// locals: e, this
// closure: h, A
function {
  this = this;
  e = new this(h);
  A(e, t);
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=3B file=valdi_core/src/Promise
// args: t
// closure: n
function {
  n = t;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=3B file=valdi_core/src/Promise
// args: t
// closure: o
function {
  o = t;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=109B file=valdi_core/src/Promise
// locals: t, t#1
// closure: x
function {
  t = undefined;
  if (!(("undefined" != typeof global))) goto L_18;
  t = global;
  goto L_59;
  if (!(("undefined" != typeof self))) goto L_2e;
  t = self;
  goto L_59;
  try { // catch -> L_43
  t = Function("return this")();
  <?>;
  goto L_59;
  // [栈深重同步 0 -> 1]
  t#1 = <?>;
  try { // catch -> L_58
  throw new Error("polyfill failed because global object is unavailable in this environment");
  // [栈深重同步 0 -> 1]
  throw <?>;
  delete "Promise";
  t.Promise = x;
  t;
  return;
}

// fn <atom:0>  args=0 vars=30 closure=0 cpool=26 bc=493B file=valdi_core/src/Promise
// locals: t, e, r, n, o, i, s, u, c, a, l, f, h, _, v, p, d, y, m, b, w, g, A, E, j, S, P, T, Y, x
function {
  t = function t;
  s = function s;
  a = function a;
  l = function l;
  h = function h;
  y = function y;
  m = function m;
  b = function b;
  w = function w;
  g = function g;
  A = function A;
  E = function E;
  j = function j;
  S = function S;
  T = function T;
  if (!(Array.isArray)) goto L_8b;
  goto L_8d;
  // [栈深重同步 1 -> 0]
  e = function <atom:0>;
  r = 0;
  n = undefined;
  o = function <atom:0>;
  i = new Array(1000);
  u = setTimeout;
  c = function <atom:0>;
  f = Math.random().toString(36).substring(2);
  _ = undefined;
  v = 1;
  p = 2;
  d = {error: null};
  P = 0;
  Y = function <atom:0>();
  x = function <atom:0>();
  function <atom:0>().prototype.then = a;
  x.all = function <atom:0>;
  x.race = function <atom:0>;
  x.resolve = l;
  x.reject = function <atom:0>;
  x._setScheduler = function <atom:0>;
  x._setAsap = function <atom:0>;
  x._asap = o;
  x.polyfill = function <atom:0>;
  x.Promise = x;
  return x;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=2 bc=24B file=valdi_core/src/Promise
// args: require, module, exports
// locals: this
function {
  this = this;
  if (!(module)) goto L_10;
  module.sourceMapLineOffset = 1;
  !function <atom:0>(this, function <atom:0>);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Promise
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
