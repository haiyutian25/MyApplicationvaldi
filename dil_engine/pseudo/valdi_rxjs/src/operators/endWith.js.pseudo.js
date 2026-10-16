// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=88B file=valdi_rxjs/src/operators/endWith
// args: t
// closure: e, o, r
function {
  // append([], 0, r)
  r;
  return e.concat(t, o.of.apply(undefined, []));   // tail call
}

// fn r  args=1 vars=1 closure=2 cpool=1 bc=7B file=valdi_rxjs/src/operators/endWith
// args: r
// closure: e, o
function {
  r = ...0;
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/endWith
// args: require, module, exports
// locals: e, o, r
function {
  r = function r;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.endWith = undefined;
  e = require("../observable/concat");
  o = require("../observable/of");
  exports.endWith = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/endWith
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
