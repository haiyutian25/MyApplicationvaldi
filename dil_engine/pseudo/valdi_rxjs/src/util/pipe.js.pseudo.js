// fn r  args=1 vars=1 closure=1 cpool=0 bc=9B file=valdi_rxjs/src/util/pipe
// args: e
// closure: t
function {
  e = ...0;
  return t(e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=5B file=valdi_rxjs/src/util/pipe
// args: e, r
function {
  return r(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=40B file=valdi_rxjs/src/util/pipe
// args: e
// closure: r
function {
  return r.reduce(function <atom:0>, e);   // tail call
}

// fn t  args=1 vars=1 closure=1 cpool=1 bc=56B file=valdi_rxjs/src/util/pipe
// args: r
// closure: e
function {
  if (!((0 === r.length))) goto L_2b;
  return e.identity;
  if (!((1 === r.length))) goto L_35;
  return r[0];
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=118B file=valdi_rxjs/src/util/pipe
// args: require, module, exports
// locals: e, r, t
function {
  r = function r;
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.pipe = undefined;
  exports.pipeFromArray = undefined;
  e = require("./identity");
  exports.pipe = r;
  exports.pipeFromArray = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/pipe
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
