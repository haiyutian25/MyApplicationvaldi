// fn r  args=2 vars=3 closure=2 cpool=0 bc=89B file=valdi_rxjs/src/operators/scan
// args: r, n
// locals: arguments
// closure: e, t
function {
  arguments = <special_object 0>;
  return e.operate(t.scanInternals(r, n, (arguments.length >= 2), true));   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/scan
// args: require, module, exports
// locals: e, t, r
function {
  r = function r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.scan = undefined;
  e = require("../util/lift");
  t = require("./scanInternals");
  exports.scan = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/scan
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
