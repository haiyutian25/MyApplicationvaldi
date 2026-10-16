// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=valdi_rxjs/src/operators/mergeMapTo
// closure: t
function {
  return t;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=valdi_rxjs/src/operators/mergeMapTo
// closure: t
function {
  return t;
}

// fn t  args=3 vars=6 closure=2 cpool=2 bc=162B file=valdi_rxjs/src/operators/mergeMapTo
// args: t, o, i
// locals: t#1, o#1, i#1
// closure: r, e
function {
  let i#1;
  let o#1;
  let t#1;
  t#1 = t;
  o#1 = o;
  if (!((i === undefined))) goto L_17;
  i;
  i = (1 / 0);
  i#1 = (1 / 0);
  if (!(r.isFunction(o))) goto L_6a;
  return e.mergeMap(function <atom:0>, o, i);
  if (!(("number" == typeof o))) goto L_78;
  i = o;
  o;
  return e.mergeMap(function <atom:0>, i);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/mergeMapTo
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.mergeMapTo = undefined;
  e = require("./mergeMap");
  r = require("../util/isFunction");
  exports.mergeMapTo = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/mergeMapTo
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
