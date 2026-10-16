// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=223B file=valdi_rxjs/src/operators/windowTime
// args: e
// locals: r, u
// closure: i, c, l, w
function {
  let u;
  let r;
  if (((undefined === undefined))) goto L_55;
  r = <to_object>(undefined).window;
  u = <to_object>(undefined).subs;
  <to_object>(undefined);
  goto L_59;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_b;
  // [栈深重同步 1 -> 0]
  r.complete();
  u.unsubscribe();
  i.arrRemove(c, e);
  if (!(l)) goto L_de;
  w();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=9B file=valdi_rxjs/src/operators/windowTime
// closure: p, i
function {
  return p(i);   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=8 cpool=1 bc=339B file=valdi_rxjs/src/operators/windowTime
// locals: r, s, i
// closure: p, c, u, t, e, n, b, o
function {
  if (!(c)) goto L_152;
  let i;
  let s;
  let r;
  r = new u.Subscription();
  t.add(r);
  s = new e.Subject();
  i = {window: s, subs: r, seen: 0};
  c.push(i);
  t.next(s.asObservable());
  n.executeSchedule(r, b, function <atom:0>, o);
  // close_loc i
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=76B file=valdi_rxjs/src/operators/windowTime
// args: e
// closure: c
function {
  return c.slice().forEach(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=43B file=valdi_rxjs/src/operators/windowTime
// args: <atom:0>
// locals: r
// closure: e
function {
  r = <to_object>(<atom:0>).window;
  <to_object>(<atom:0>);
  return e(r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=49B file=valdi_rxjs/src/operators/windowTime
// args: e
// closure: S, t
function {
  S(function <atom:0>);
  e(t);
  t.unsubscribe();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=131B file=valdi_rxjs/src/operators/windowTime
// args: r
// closure: e, a, p
function {
  r.window.next(e);
  r.seen = (r.seen ++);
  if (!((a <= (r.seen ++)))) goto L_82;
  p(r);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=7B file=valdi_rxjs/src/operators/windowTime
// args: e
// closure: a, p, S
function {
  S(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=valdi_rxjs/src/operators/windowTime
// args: e
function {
  return e.complete();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=8B file=valdi_rxjs/src/operators/windowTime
// closure: h
function {
  return h(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=valdi_rxjs/src/operators/windowTime
// args: r
// closure: e
function {
  return r.error(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=8B file=valdi_rxjs/src/operators/windowTime
// args: e
// closure: h
function {
  return h(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=6B file=valdi_rxjs/src/operators/windowTime
// closure: c
function {
  c = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=8 closure=9 cpool=8 bc=225B file=valdi_rxjs/src/operators/windowTime
// args: r, t
// locals: c, l, p, w, S, h
// closure: i, u, e, n, b, o, a, d, s
function {
  let h;
  let S;
  let w;
  let p;
  let l;
  let c;
  c = [];
  l = false;
  p = function <atom:0>;
  w = function <atom:0>;
  if (!((null !== d))) goto L_6c;
  if (!((d >= 0))) goto L_6c;
  goto L_72;
  // [栈深重同步 1 -> 0]
  l = true;
  true;
  w();
  S = function <atom:0>;
  h = function <atom:0>;
  r.subscribe(s.createOperatorSubscriber(t, function <atom:0>, function <atom:0>, function <atom:0>));
  return function <atom:0>;
}

// fn o  args=2 vars=5 closure=8 cpool=1 bc=155B file=valdi_rxjs/src/operators/windowTime
// args: o, l
// locals: b, d, a
// closure: i, u, e, n, s, c, r, t
function {
  l = ...1;
  let a;
  let d;
  let b;
  if (!((c.popScheduler(l) == null))) goto L_5c;
  c.popScheduler(l);
  b = r.asyncScheduler;
  if (!((l[0] == null))) goto L_66;
  l[0];
  d = null;
  if ((l[1])) goto L_71;
  a = (1 / 0);
  return t.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=1 bc=176B file=valdi_rxjs/src/operators/windowTime
// args: require, module, exports
// locals: e, r, u, t, s, i, c, n, o
function {
  o = function o;
  let n;
  let c;
  let i;
  let s;
  let t;
  let u;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.windowTime = undefined;
  e = require("../Subject");
  r = require("../scheduler/async");
  u = require("../Subscription");
  t = require("../util/lift");
  s = require("./OperatorSubscriber");
  i = require("../util/arrRemove");
  c = require("../util/args");
  n = require("../util/executeSchedule");
  exports.windowTime = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/windowTime
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
