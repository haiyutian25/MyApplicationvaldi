// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=4B file=valdi_rxjs/src/operators/skip
// args: e, t
// closure: r
function {
  return (r <= t);
}

// fn r  args=1 vars=1 closure=1 cpool=1 bc=41B file=valdi_rxjs/src/operators/skip
// args: r
// closure: e
function {
  return e.filter(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/operators/skip
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.skip = undefined;
  e = require("./filter");
  exports.skip = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/skip
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
