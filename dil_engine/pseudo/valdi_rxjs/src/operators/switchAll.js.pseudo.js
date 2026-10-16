// fn i  args=0 vars=0 closure=2 cpool=0 bc=75B file=valdi_rxjs/src/operators/switchAll
// closure: t, e
function {
  return t.switchMap(e.identity);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/switchAll
// args: require, module, exports
// locals: t, e, i
function {
  i = function i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.switchAll = undefined;
  t = require("./switchMap");
  e = require("../util/identity");
  exports.switchAll = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/switchAll
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
