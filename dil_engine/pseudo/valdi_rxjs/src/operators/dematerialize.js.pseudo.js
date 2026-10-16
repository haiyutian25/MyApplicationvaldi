// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=valdi_rxjs/src/operators/dematerialize
// args: r
// closure: e, t
function {
  return e.observeNotification(r, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=78B file=valdi_rxjs/src/operators/dematerialize
// args: r, t
// closure: e, i
function {
  r.subscribe(i.createOperatorSubscriber(t, function <atom:0>));
  return;
}

// fn t  args=0 vars=0 closure=3 cpool=1 bc=41B file=valdi_rxjs/src/operators/dematerialize
// closure: e, i, r
function {
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/dematerialize
// args: require, module, exports
// locals: e, r, i, t
function {
  t = function t;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.dematerialize = undefined;
  e = require("../Notification");
  r = require("../util/lift");
  i = require("./OperatorSubscriber");
  exports.dematerialize = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/dematerialize
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
