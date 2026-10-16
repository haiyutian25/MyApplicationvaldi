// fn r  args=1 vars=4 closure=0 cpool=0 bc=254B file=valdi_rxjs/src/util/isReadableStreamLike
// args: e
// locals: r, e#1, t
function {
  let r;
  r = e.getReader();
  try { // catch -> L_cf
  let t;
  let e#1;
  if (((undefined === undefined))) goto L_84;
  e#1 = <to_object>(undefined).value;
  t = <to_object>(undefined).done;
  <to_object>(undefined);
  goto L_af;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_3a;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_bc;
  // gosub (finally 块) 213
  return undefined; // async
  if (!(<yield>)) goto L_cb;
  // gosub (finally 块) 213
  return (await <yield>); // async
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_2f;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 213
  throw <?>;
  r.releaseLock();
  // ret (finally 块) 
}

// fn t  args=1 vars=1 closure=1 cpool=0 bc=81B file=valdi_rxjs/src/util/isReadableStreamLike
// args: r
// closure: e
function {
  if (!((r == null))) goto L_2d;
  r;
  goto L_4e;
  return e.isFunction(undefined.getReader);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=118B file=valdi_rxjs/src/util/isReadableStreamLike
// args: require, module, exports
// locals: e, r, t
function {
  r = function r;
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.readableStreamLikeToAsyncGenerator = undefined;
  exports.isReadableStreamLike = undefined;
  e = require("./isFunction");
  exports.readableStreamLikeToAsyncGenerator = r;
  exports.isReadableStreamLike = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/isReadableStreamLike
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
