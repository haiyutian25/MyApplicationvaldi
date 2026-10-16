// fn t  args=2 vars=3 closure=2 cpool=0 bc=91B file=valdi_rxjs/src/operators/reduce
// args: t, n
// locals: arguments
// closure: r, e
function {
  arguments = <special_object 0>;
  return r.operate(e.scanInternals(t, n, (arguments.length >= 2), false, true));   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/reduce
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.reduce = undefined;
  e = require("./scanInternals");
  r = require("../util/lift");
  exports.reduce = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/reduce
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
