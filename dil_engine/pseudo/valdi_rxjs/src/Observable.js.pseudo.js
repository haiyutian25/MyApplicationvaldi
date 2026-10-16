// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=33B file=valdi_rxjs/src/Observable
// args: r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  if (!(r)) goto L_20;
  this._subscribe = r;
  r;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=43B file=valdi_rxjs/src/Observable
// args: r
// locals: e, this
// closure: Observable
function {
  this = this;
  let e;
  e = new Observable();
  e.source = this;
  e.operator = r;
  return e;
}

// fn <atom:0>  args=3 vars=7 closure=2 cpool=0 bc=329B file=valdi_rxjs/src/Observable
// args: e, s, i
// locals: t, b, u, this
// closure: n, r
function {
  this = this;
  let u;
  let b;
  let t;
  if (!(n(e))) goto L_13;
  goto L_3e;
  // [栈深重同步 1 -> 0]
  t = new r.SafeSubscriber(e, s, i);
  if (((undefined === undefined))) goto L_8e;
  b = <to_object>(undefined).operator;
  u = <to_object>(undefined).source;
  <to_object>(undefined);
  goto L_92;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_44;
  // [栈深重同步 1 -> 0]
  if (!(b)) goto L_ea;
  goto L_141;
  // [栈深重同步 3 -> 2]
  if (!(u)) goto L_119;
  goto L_141;
  // [栈深重同步 3 -> 2]
  t.add(this._trySubscribe(t));
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=95B file=valdi_rxjs/src/Observable
// args: r
// locals: e, this
function {
  this = this;
  try { // catch -> L_2f
  return this._subscribe(r);
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_5e
  r.error(e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=64B file=valdi_rxjs/src/Observable
// args: r
// locals: s
// closure: e, i, t
function {
  try { // catch -> L_b
  e(r);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_3f
  i(s);
  t.unsubscribe();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=1 bc=110B file=valdi_rxjs/src/Observable
// args: s, i
// locals: t
// closure: e, r, this
function {
  let t;
  t = new r.SafeSubscriber({next: function <atom:0>, error: i, complete: s});
  this.subscribe(t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=13B file=valdi_rxjs/src/Observable
// args: e, s
// locals: this
// closure: r, u
function {
  this = this;
  s = u(s);
  return new u(s)(function <atom:0>);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=81B file=valdi_rxjs/src/Observable
// args: r
// locals: this
function {
  this = this;
  if (!((this.source == null))) goto L_2b;
  this.source;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.subscribe(r);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=4B file=valdi_rxjs/src/Observable
// locals: this
function {
  this = this;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=48B file=valdi_rxjs/src/Observable
// args: r
// locals: this
// closure: i
function {
  this = this;
  r = ...0;
  return i.pipeFromArray(r)(this);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=valdi_rxjs/src/Observable
// args: r
// closure: s
function {
  s = r;
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=valdi_rxjs/src/Observable
// args: r
// closure: e
function {
  return e(r);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=7B file=valdi_rxjs/src/Observable
// closure: r, s
function {
  return r(s);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=3 bc=49B file=valdi_rxjs/src/Observable
// args: r, e
// locals: s
// closure: this
function {
  let s;
  s = undefined;
  this.subscribe(function <atom:0>, function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=13B file=valdi_rxjs/src/Observable
// args: r
// locals: this
// closure: u
function {
  this = this;
  r = u(r);
  return new u(r)(function <atom:0>);
}

// fn u  args=1 vars=1 closure=1 cpool=0 bc=86B file=valdi_rxjs/src/Observable
// args: r
// closure: t
function {
  if (!((r == null))) goto L_55;
  r;
  if (!((t.config.Promise == null))) goto L_55;
  t.config.Promise;
  return Promise;
}

// fn c  args=1 vars=1 closure=1 cpool=0 bc=233B file=valdi_rxjs/src/Observable
// args: r
// closure: b
function {
  if (!(r)) goto L_e8;
  if (!(b.isFunction(r.next))) goto L_e8;
  if (!(b.isFunction(r.error))) goto L_e8;
  return b.isFunction(r.complete);
}

// fn n  args=1 vars=1 closure=3 cpool=0 bc=93B file=valdi_rxjs/src/Observable
// args: s
// closure: r, c, e
function {
  if (!(s)) goto L_2b;
  if (((s instanceof r.Subscriber))) goto L_5c;
  if (!(c(s))) goto L_5c;
  return e.isSubscription(s);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=valdi_rxjs/src/Observable
// args: r
// closure: Observable
function {
  return new Observable(r);
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=13 bc=303B file=valdi_rxjs/src/Observable
// args: require, module, exports
// locals: r, e, s, i, t, b, Observable, <class_fields_init>, Observable#1, u, c, n
function {
  u = function u;
  c = function c;
  n = function n;
  let Observable#1;
  let b;
  let t;
  let i;
  let s;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Observable = undefined;
  r = require("./Subscriber");
  e = require("./Subscription");
  s = require("./symbol/observable");
  i = require("./util/pipe");
  t = require("./config");
  b = require("./util/isFunction");
  let Observable;
  let <class_fields_init>;
  class Observable extends undefined { ... }
  <proto:Observable>.lift = function <atom:0>;
  <proto:Observable>.subscribe = function <atom:0>;
  <proto:Observable>._trySubscribe = function <atom:0>;
  <proto:Observable>.forEach = function <atom:0>;
  <proto:Observable>._subscribe = function <atom:0>;
  define_method_computed(<proto:Observable>, s.observable, function <atom:0>).pipe = function <atom:0>;
  define_method_computed(<proto:Observable>, s.observable, function <atom:0>).toPromise = function <atom:0>;
  <class_fields_init> = undefined;
  define_method_computed(<proto:Observable>, s.observable, function <atom:0>);
  Observable = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc Observable
  Observable#1 = function <atom:0>;
  exports.Observable = Observable#1;
  Observable#1.create = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/Observable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
