// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=84B file=valdi_rxjs/src/operators/map
// args: e
// closure: o, t, i, s
function {
  s = <s_new>;
  o.next(t.call(i, e, (s++)));
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=1 bc=83B file=valdi_rxjs/src/operators/map
// args: e, o
// locals: s
// closure: t, i, r
function {
  let s;
  s = 0;
  e.subscribe(r.createOperatorSubscriber(o, function <atom:0>));
  return;
}

// fn t  args=2 vars=2 closure=2 cpool=1 bc=41B file=valdi_rxjs/src/operators/map
// args: t, i
// closure: r, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/map
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.map = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  exports.map = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/map
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
