// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=valdi_rxjs/src/operators/mapTo
// closure: o
function {
  return o;
}

// fn o  args=1 vars=1 closure=1 cpool=1 bc=41B file=valdi_rxjs/src/operators/mapTo
// args: o
// closure: e
function {
  return e.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/operators/mapTo
// args: require, module, exports
// locals: e, o
function {
  o = function o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.mapTo = undefined;
  e = require("./map");
  exports.mapTo = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/mapTo
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
