// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=9B file=valdi_rxjs/src/operators/mergeScan
// args: e, r
// closure: t, i
function {
  return t(i, e, r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=valdi_rxjs/src/operators/mergeScan
// args: e
// closure: i
function {
  i = e;
  e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=6B file=valdi_rxjs/src/operators/mergeScan
// closure: i
function {
  i = null;
  return null;
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=3 bc=56B file=valdi_rxjs/src/operators/mergeScan
// args: e, u
// locals: i
// closure: t, n, r, o
function {
  let i;
  i = n;
  return r.mergeInternals(e, u, function <atom:0>, o, function <atom:0>, false, undefined, function <atom:0>);   // tail call
}

// fn t  args=3 vars=6 closure=2 cpool=1 bc=65B file=valdi_rxjs/src/operators/mergeScan
// args: t, n, o
// locals: t#1, n#1, o#1
// closure: r, e
function {
  let o#1;
  let n#1;
  let t#1;
  t#1 = t;
  n#1 = n;
  if (!((o === undefined))) goto L_17;
  o;
  o = (1 / 0);
  o#1 = (1 / 0);
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/mergeScan
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.mergeScan = undefined;
  e = require("../util/lift");
  r = require("./mergeInternals");
  exports.mergeScan = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/mergeScan
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
