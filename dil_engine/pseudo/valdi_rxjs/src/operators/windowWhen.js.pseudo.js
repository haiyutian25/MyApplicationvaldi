// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=80B file=valdi_rxjs/src/operators/windowWhen
// args: e
// closure: s, i
function {
  s.error(e);
  i.error(e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=9 cpool=0 bc=386B file=valdi_rxjs/src/operators/windowWhen
// locals: r, l
// closure: b, s, e, i, o, u, c, t, n
function {
  let r;
  r = undefined;
  if (!((b == null))) goto L_10;
  b;
  goto L_34;
  undefined.unsubscribe();
  if (!((s == null))) goto L_40;
  s;
  goto L_64;
  undefined.complete();
  s = new e.Subject();
  new e.Subject();
  i.next(s.asObservable());
  try { // catch -> L_115
  r = o.innerFrom(u());
  o.innerFrom(u());
  <?>;
  goto L_125;
  // [栈深重同步 0 -> 1]
  l = <?>;
  try { // catch -> L_124
  c(l);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  b = t.createOperatorSubscriber(i, n, n, c);
  r.subscribe(t.createOperatorSubscriber(i, n, n, c));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=valdi_rxjs/src/operators/windowWhen
// args: e
// closure: s
function {
  return s.next(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=78B file=valdi_rxjs/src/operators/windowWhen
// closure: s, i
function {
  s.complete();
  i.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=54B file=valdi_rxjs/src/operators/windowWhen
// closure: b, s
function {
  if (!((b == null))) goto L_b;
  b;
  goto L_2f;
  undefined.unsubscribe();
  s = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=6 closure=4 cpool=5 bc=124B file=valdi_rxjs/src/operators/windowWhen
// args: r, i
// locals: s, b, c, n
// closure: e, o, u, t
function {
  let n;
  let c;
  let b;
  let s;
  s = undefined;
  b = undefined;
  c = function <atom:0>;
  n = function <atom:0>;
  n();
  r.subscribe(t.createOperatorSubscriber(i, function <atom:0>, function <atom:0>, c, function <atom:0>));
  return;
}

// fn u  args=1 vars=1 closure=4 cpool=1 bc=41B file=valdi_rxjs/src/operators/windowWhen
// args: u
// closure: e, o, t, r
function {
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=128B file=valdi_rxjs/src/operators/windowWhen
// args: require, module, exports
// locals: e, r, t, o, u
function {
  u = function u;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.windowWhen = undefined;
  e = require("../Subject");
  r = require("../util/lift");
  t = require("./OperatorSubscriber");
  o = require("../observable/innerFrom");
  exports.windowWhen = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/windowWhen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
