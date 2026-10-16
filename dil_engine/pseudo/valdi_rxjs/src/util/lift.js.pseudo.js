// fn e  args=1 vars=1 closure=1 cpool=0 bc=81B file=valdi_rxjs/src/util/lift
// args: e
// closure: t
function {
  if (!((e == null))) goto L_2d;
  e;
  goto L_4e;
  return t.isFunction(undefined.lift);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=61B file=valdi_rxjs/src/util/lift
// args: e
// locals: r, this
// closure: t
function {
  this = this;
  try { // catch -> L_d
  return t(e, this);
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_3c
  this.error(r);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=59B file=valdi_rxjs/src/util/lift
// args: r
// closure: t, e
function {
  if (!(e(r))) goto L_2c;
  return r.lift(function <atom:0>);   // tail call
  throw new TypeError("Unable to lift unknown Observable type");
}

// fn r  args=1 vars=1 closure=1 cpool=1 bc=3B file=valdi_rxjs/src/util/lift
// args: t
// closure: e
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=118B file=valdi_rxjs/src/util/lift
// args: require, module, exports
// locals: t, e, r
function {
  e = function e;
  r = function r;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.hasLift = undefined;
  exports.operate = undefined;
  t = require("./isFunction");
  exports.hasLift = e;
  exports.operate = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/lift
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
