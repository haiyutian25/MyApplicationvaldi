// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=55B file=valdi_rxjs/src/operators/skipUntil
// closure: n, u
function {
  if (!((n == null))) goto L_b;
  n;
  goto L_2f;
  undefined.unsubscribe();
  u = true;
  true;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=46B file=valdi_rxjs/src/operators/skipUntil
// args: e
// closure: u, s
function {
  if (!(u)) goto L_2d;
  return s.next(e);
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=2 bc=242B file=valdi_rxjs/src/operators/skipUntil
// args: e, s
// locals: u, n
// closure: r, i, t, o
function {
  let n;
  let u;
  u = false;
  n = r.createOperatorSubscriber(s, function <atom:0>, i.noop);
  t.innerFrom(o).subscribe(n);
  e.subscribe(r.createOperatorSubscriber(s, function <atom:0>));
  return;
}

// fn o  args=1 vars=1 closure=4 cpool=1 bc=41B file=valdi_rxjs/src/operators/skipUntil
// args: o
// closure: r, i, t, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=128B file=valdi_rxjs/src/operators/skipUntil
// args: require, module, exports
// locals: e, r, t, i, o
function {
  o = function o;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.skipUntil = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  t = require("../observable/innerFrom");
  i = require("../util/noop");
  exports.skipUntil = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/skipUntil
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
