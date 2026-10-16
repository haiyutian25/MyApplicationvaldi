// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=17B file=valdi_rxjs/src/operators/retryWhen
// closure: s, o, c
function {
  if (!(s)) goto L_a;
  return o();
  c = true;
  return true;
}

// fn <atom:0>  args=1 vars=1 closure=8 cpool=1 bc=189B file=valdi_rxjs/src/operators/retryWhen
// args: r
// closure: s, o, c, b, e, u, t, i
function {
  if ((b)) goto L_8c;
  b = new e.Subject();
  new e.Subject();
  u(b).subscribe(t.createOperatorSubscriber(i, function <atom:0>));
  if (!(b)) goto L_bc;
  b.next(r);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=1 bc=155B file=valdi_rxjs/src/operators/retryWhen
// closure: s, o, c, b, e, u, t, i, r
function {
  s = r.subscribe(t.createOperatorSubscriber(i, undefined, undefined, function <atom:0>));
  r.subscribe(t.createOperatorSubscriber(i, undefined, undefined, function <atom:0>));
  if (!(c)) goto L_9a;
  s.unsubscribe();
  s = null;
  null;
  c = false;
  false;
  o();
  return;
}

// fn <atom:0>  args=2 vars=6 closure=3 cpool=1 bc=32B file=valdi_rxjs/src/operators/retryWhen
// args: r, i
// locals: s, b, c, o
// closure: e, u, t
function {
  let o;
  let c;
  let b;
  let s;
  s = undefined;
  b = undefined;
  c = false;
  o = function <atom:0>;
  o();
  return;
}

// fn u  args=1 vars=1 closure=3 cpool=1 bc=41B file=valdi_rxjs/src/operators/retryWhen
// args: u
// closure: e, t, r
function {
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/retryWhen
// args: require, module, exports
// locals: e, r, t, u
function {
  u = function u;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.retryWhen = undefined;
  e = require("../Subject");
  r = require("../util/lift");
  t = require("./OperatorSubscriber");
  exports.retryWhen = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/retryWhen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
