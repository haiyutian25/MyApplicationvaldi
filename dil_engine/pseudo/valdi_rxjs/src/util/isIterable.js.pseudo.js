// fn t  args=1 vars=1 closure=2 cpool=0 bc=85B file=valdi_rxjs/src/util/isIterable
// args: t
// closure: r, e
function {
  if (!((t == null))) goto L_2d;
  t;
  goto L_52;
  return r.isFunction(undefined[e.iterator]);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/util/isIterable
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isIterable = undefined;
  e = require("../symbol/iterator");
  r = require("./isFunction");
  exports.isIterable = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/isIterable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
