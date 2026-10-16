// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=125B file=valdi_rxjs/src/observable/bindCallbackInternals
// args: e
// locals: this
// closure: u, l, o, p, t, c
function {
  this = this;
  e = ...0;
  return u(l, o, p).apply(this, e).pipe(t.mapOneOrManyArgs(c));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=164B file=valdi_rxjs/src/observable/bindCallbackInternals
// args: e
// locals: this
// closure: u, l, o, n, p, i
function {
  this = this;
  e = ...0;
  return u(l, o).apply(this, e).pipe(n.subscribeOn(p), i.observeOn(p));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=205B file=valdi_rxjs/src/observable/bindCallbackInternals
// args: e
// locals: r
// closure: l, n, i, r
function {
  e = ...0;
  if (!(l)) goto L_63;
  let r;
  r = e.shift();
  if (!((null != r))) goto L_63;
  n.error(r);
  return;
  if (!((1 < e.length))) goto L_90;
  goto L_93;
  // [栈深重同步 3 -> 2]
  n.next(e[0]);
  i = true;
  true;
  if (!(r)) goto L_cc;
  n.complete();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=6 cpool=1 bc=189B file=valdi_rxjs/src/observable/bindCallbackInternals
// args: r
// locals: i, r#1, i#1
// closure: l, n, t, o, this, e
function {
  let i;
  i = n.subscribe(r);
  if (!(t)) goto L_b9;
  let i#1;
  let r#1;
  t = false;
  false;
  r#1 = false;
  i#1 = false;
  // append([], 0, e)
  [][e] = function <atom:0>;
  (function <atom:0> ++);
  o.apply(this, []);
  if (!(i#1)) goto L_ab;
  n.complete();
  r#1 = true;
  true;
  // close_loc i#1
  // close_loc r#1
  return i;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=1 bc=99B file=valdi_rxjs/src/observable/bindCallbackInternals
// args: e
// locals: n, t, this
// closure: l, o, s, r
function {
  this = this;
  e = ...0;
  let t;
  let n;
  n = new s.AsyncSubject();
  t = true;
  return new r.Observable(function <atom:0>);
}

// fn u  args=4 vars=4 closure=7 cpool=3 bc=58B file=valdi_rxjs/src/observable/bindCallbackInternals
// args: l, o, c, p
// closure: u, t, n, i, s, r, e
function {
  if (!(c)) goto L_31;
  if (!(!e.isScheduler(c))) goto L_2f;
  return function <atom:0>;
  p = c;
  if (!(p)) goto L_37;
  return function <atom:0>;
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=1 bc=152B file=valdi_rxjs/src/observable/bindCallbackInternals
// args: require, module, exports
// locals: e, r, n, t, i, s, u
function {
  u = function u;
  let s;
  let i;
  let t;
  let n;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.bindCallbackInternals = undefined;
  e = require("../util/isScheduler");
  r = require("../Observable");
  n = require("../operators/subscribeOn");
  t = require("../util/mapOneOrManyArgs");
  i = require("../operators/observeOn");
  s = require("../AsyncSubject");
  exports.bindCallbackInternals = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/bindCallbackInternals
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
