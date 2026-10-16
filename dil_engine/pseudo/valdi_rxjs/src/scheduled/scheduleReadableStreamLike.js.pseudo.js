// fn t  args=2 vars=2 closure=2 cpool=0 bc=78B file=valdi_rxjs/src/scheduled/scheduleReadableStreamLike
// args: t, a
// closure: e, r
function {
  return e.scheduleAsyncIterable(r.readableStreamLikeToAsyncGenerator(t), a);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/scheduled/scheduleReadableStreamLike
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.scheduleReadableStreamLike = undefined;
  e = require("./scheduleAsyncIterable");
  r = require("../util/isReadableStreamLike");
  exports.scheduleReadableStreamLike = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduled/scheduleReadableStreamLike
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
