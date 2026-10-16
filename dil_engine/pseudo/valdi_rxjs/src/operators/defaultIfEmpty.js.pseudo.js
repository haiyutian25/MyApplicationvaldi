// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=46B file=valdi_rxjs/src/operators/defaultIfEmpty
// args: e
// closure: o, u
function {
  o = true;
  true;
  u.next(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=84B file=valdi_rxjs/src/operators/defaultIfEmpty
// closure: o, u, r
function {
  if ((o)) goto L_2d;
  u.next(r);
  u.complete();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=2 bc=86B file=valdi_rxjs/src/operators/defaultIfEmpty
// args: e, u
// locals: o
// closure: r, t
function {
  let o;
  o = false;
  e.subscribe(t.createOperatorSubscriber(u, function <atom:0>, function <atom:0>));
  return;
}

// fn r  args=1 vars=1 closure=2 cpool=1 bc=41B file=valdi_rxjs/src/operators/defaultIfEmpty
// args: r
// closure: t, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/defaultIfEmpty
// args: require, module, exports
// locals: e, t, r
function {
  r = function r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.defaultIfEmpty = undefined;
  e = require("../util/lift");
  t = require("./OperatorSubscriber");
  exports.defaultIfEmpty = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/defaultIfEmpty
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
