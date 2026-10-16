// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=12B file=valdi_rxjs/src/operators/max
// args: e, r
// closure: t
function {
  if (!((t(e, r) > 0))) goto L_a;
  return e;
  return r;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=9B file=valdi_rxjs/src/operators/max
// args: e, r
function {
  if (!((e > r))) goto L_7;
  return e;
  return r;
}

// fn t  args=1 vars=1 closure=2 cpool=2 bc=85B file=valdi_rxjs/src/operators/max
// args: t
// closure: e, r
function {
  if (!(r.isFunction(t))) goto L_50;
  goto L_52;
  // [栈深重同步 2 -> 1]
  return e.reduce(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/max
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.max = undefined;
  e = require("./reduce");
  r = require("../util/isFunction");
  exports.max = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/max
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
