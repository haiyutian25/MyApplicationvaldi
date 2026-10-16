// fn r  args=0 vars=0 closure=1 cpool=0 bc=40B file=valdi_rxjs/src/operators/concatAll
// closure: e
function {
  return e.mergeAll(1);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/operators/concatAll
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.concatAll = undefined;
  e = require("./mergeAll");
  exports.concatAll = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/concatAll
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
