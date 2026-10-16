// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=121B file=valdi_rxjs/src/operators/debounce
// locals: e
// closure: b, i, s, n
function {
  if (!((b == null))) goto L_b;
  b;
  goto L_2f;
  undefined.unsubscribe();
  b = null;
  null;
  if (!(i)) goto L_78;
  let e;
  i = false;
  false;
  e = s;
  s = null;
  null;
  n.next(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=9 cpool=0 bc=227B file=valdi_rxjs/src/operators/debounce
// args: e
// closure: b, i, s, u, n, c, r, o, t
function {
  if (!((b == null))) goto L_b;
  b;
  goto L_2f;
  undefined.unsubscribe();
  i = true;
  true;
  s = e;
  e;
  b = u.createOperatorSubscriber(n, c, r.noop);
  u.createOperatorSubscriber(n, c, r.noop);
  o.innerFrom(t(e)).subscribe(b);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=43B file=valdi_rxjs/src/operators/debounce
// closure: c, n
function {
  c();
  n.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=10B file=valdi_rxjs/src/operators/debounce
// closure: s, b
function {
  b = null;
  s = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=6 closure=4 cpool=4 bc=112B file=valdi_rxjs/src/operators/debounce
// args: e, n
// locals: i, s, b, c
// closure: u, r, o, t
function {
  let c;
  let b;
  let s;
  let i;
  i = false;
  s = null;
  b = null;
  c = function <atom:0>;
  e.subscribe(u.createOperatorSubscriber(n, function <atom:0>, function <atom:0>, undefined, function <atom:0>));
  return;
}

// fn t  args=1 vars=1 closure=4 cpool=1 bc=41B file=valdi_rxjs/src/operators/debounce
// args: t
// closure: u, r, o, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=128B file=valdi_rxjs/src/operators/debounce
// args: require, module, exports
// locals: e, r, u, o, t
function {
  t = function t;
  let o;
  let u;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.debounce = undefined;
  e = require("../util/lift");
  r = require("../util/noop");
  u = require("./OperatorSubscriber");
  o = require("../observable/innerFrom");
  exports.debounce = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/debounce
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
