// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=123B file=valdi_rxjs/src/operators/partition
// args: o
// closure: e, r, i, t
function {
  return [e.filter(r, i)(o), e.filter(t.not(r, i))(o)];
}

// fn r  args=2 vars=2 closure=2 cpool=1 bc=3B file=valdi_rxjs/src/operators/partition
// args: r, i
// closure: e, t
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/partition
// args: require, module, exports
// locals: t, e, r
function {
  r = function r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.partition = undefined;
  t = require("../util/not");
  e = require("./filter");
  exports.partition = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/partition
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
