// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=47B file=valdi_rxjs/src/operators/expand
// args: e, i
// closure: r, t, n, o
function {
  return r.mergeInternals(e, i, t, n, undefined, true, o);   // tail call
}

// fn t  args=3 vars=6 closure=2 cpool=1 bc=82B file=valdi_rxjs/src/operators/expand
// args: t, n, o
// locals: t#1, n#1, o#1
// closure: r, e
function {
  let o#1;
  let n#1;
  let t#1;
  t#1 = t;
  if (!((n === undefined))) goto L_15;
  n;
  n = (1 / 0);
  n#1 = (1 / 0);
  o#1 = o;
  if ((n)) goto L_1e;
  if (!((0 < 1))) goto L_27;
  goto L_28;
  // [栈深重同步 1 -> 0]
  n = n;
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/expand
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.expand = undefined;
  e = require("../util/lift");
  r = require("./mergeInternals");
  exports.expand = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/expand
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
