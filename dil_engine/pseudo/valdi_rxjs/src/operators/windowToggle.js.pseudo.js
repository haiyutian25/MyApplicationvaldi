// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=126B file=valdi_rxjs/src/operators/windowToggle
// args: e
// closure: l, b
function {
  if (!((0 < l.length))) goto L_57;
  l.shift().error(e);
  goto L_0;
  b.error(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=124B file=valdi_rxjs/src/operators/windowToggle
// closure: n, l, u, a
function {
  n.arrRemove(l, u);
  u.complete();
  a.unsubscribe();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=10 cpool=1 bc=448B file=valdi_rxjs/src/operators/windowToggle
// args: o
// locals: u, a, f, d
// closure: n, l, e, r, t, c, p, b, i, s
function {
  let f;
  let a;
  let u;
  u = new e.Subject();
  l.push(u);
  a = new r.Subscription();
  f = undefined;
  try { // catch -> L_bf
  f = t.innerFrom(c(o));
  t.innerFrom(c(o));
  <?>;
  goto L_cf;
  // [栈深重同步 0 -> 1]
  d = <?>;
  try { // catch -> L_ce
  p(d);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  b.next(u.asObservable());
  a.add(f.subscribe(i.createOperatorSubscriber(b, function <atom:0>, s.noop, p)));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=101B file=valdi_rxjs/src/operators/windowToggle
// args: e
// locals: r, o
// closure: l
function {
  let r;
  r = l.slice();
  let o;
  for (const o of r) {
    o.next(e);
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=124B file=valdi_rxjs/src/operators/windowToggle
// closure: l, b
function {
  if (!((0 < l.length))) goto L_56;
  l.shift().complete();
  goto L_0;
  b.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=87B file=valdi_rxjs/src/operators/windowToggle
// closure: l
function {
  if (!((0 < l.length))) goto L_56;
  l.shift().unsubscribe();
  goto L_0;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=8 cpool=5 bc=258B file=valdi_rxjs/src/operators/windowToggle
// args: o, b
// locals: l, p
// closure: n, e, r, t, c, i, s, u
function {
  let p;
  let l;
  l = [];
  p = function <atom:0>;
  t.innerFrom(u).subscribe(i.createOperatorSubscriber(b, function <atom:0>, s.noop));
  o.subscribe(i.createOperatorSubscriber(b, function <atom:0>, function <atom:0>, p, function <atom:0>));
  return;
}

// fn u  args=2 vars=2 closure=7 cpool=1 bc=41B file=valdi_rxjs/src/operators/windowToggle
// args: u, c
// closure: n, e, r, t, i, s, o
function {
  return o.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=1 bc=164B file=valdi_rxjs/src/operators/windowToggle
// args: require, module, exports
// locals: e, r, o, t, i, s, n, u
function {
  u = function u;
  let n;
  let s;
  let i;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.windowToggle = undefined;
  e = require("../Subject");
  r = require("../Subscription");
  o = require("../util/lift");
  t = require("../observable/innerFrom");
  i = require("./OperatorSubscriber");
  s = require("../util/noop");
  n = require("../util/arrRemove");
  exports.windowToggle = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/windowToggle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
