// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=12B file=valdi_rxjs/src/operators/min
// args: e, r
// closure: i
function {
  if (!((i(e, r) < 0))) goto L_a;
  return e;
  return r;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=9B file=valdi_rxjs/src/operators/min
// args: e, r
function {
  if (!((e < r))) goto L_7;
  return e;
  return r;
}

// fn i  args=1 vars=1 closure=2 cpool=2 bc=85B file=valdi_rxjs/src/operators/min
// args: i
// closure: e, r
function {
  if (!(r.isFunction(i))) goto L_50;
  goto L_52;
  // [栈深重同步 2 -> 1]
  return e.reduce(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/min
// args: require, module, exports
// locals: e, r, i
function {
  i = function i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.min = undefined;
  e = require("./reduce");
  r = require("../util/isFunction");
  exports.min = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/min
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
