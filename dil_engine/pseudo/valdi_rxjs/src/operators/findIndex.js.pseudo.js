// fn t  args=2 vars=2 closure=2 cpool=0 bc=83B file=valdi_rxjs/src/operators/findIndex
// args: t, i
// closure: e, r
function {
  return e.operate(r.createFind(t, i, "index"));   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/findIndex
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.findIndex = undefined;
  e = require("../util/lift");
  r = require("./find");
  exports.findIndex = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/findIndex
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
