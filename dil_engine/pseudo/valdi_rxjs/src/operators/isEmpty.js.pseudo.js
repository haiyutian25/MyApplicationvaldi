// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=78B file=valdi_rxjs/src/operators/isEmpty
// closure: t
function {
  t.next(false);
  t.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=78B file=valdi_rxjs/src/operators/isEmpty
// closure: t
function {
  t.next(true);
  t.complete();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=2 bc=80B file=valdi_rxjs/src/operators/isEmpty
// args: e, t
// closure: r
function {
  e.subscribe(r.createOperatorSubscriber(t, function <atom:0>, function <atom:0>));
  return;
}

// fn t  args=0 vars=0 closure=2 cpool=1 bc=41B file=valdi_rxjs/src/operators/isEmpty
// closure: r, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/isEmpty
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isEmpty = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  exports.isEmpty = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/isEmpty
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
