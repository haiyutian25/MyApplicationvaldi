// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=100B file=valdi_rxjs/src/operators/finalize
// args: e, i
// closure: t
function {
  try { // catch -> L_35
  e.subscribe(i);
  <?>;
  // gosub (finally 块) 59
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 59
  throw <?>;
  i.add(t);
  // ret (finally 块) 
  return;
}

// fn t  args=1 vars=1 closure=1 cpool=1 bc=41B file=valdi_rxjs/src/operators/finalize
// args: t
// closure: e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/operators/finalize
// args: require, module, exports
// locals: e, t
function {
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.finalize = undefined;
  e = require("../util/lift");
  exports.finalize = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/finalize
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
