// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=112B file=valdi_rxjs/src/operators/ignoreElements
// args: e, o
// closure: r, t
function {
  e.subscribe(r.createOperatorSubscriber(o, t.noop));
  return;
}

// fn o  args=0 vars=0 closure=3 cpool=1 bc=41B file=valdi_rxjs/src/operators/ignoreElements
// closure: r, t, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/ignoreElements
// args: require, module, exports
// locals: e, r, t, o
function {
  o = function o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ignoreElements = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  t = require("../util/noop");
  exports.ignoreElements = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/ignoreElements
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
