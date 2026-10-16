// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=8B file=valdi_rxjs/src/operators/mergeMap
// args: e, r
// closure: s, t, i
function {
  return s(t, e, i, r);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=1 bc=83B file=valdi_rxjs/src/operators/mergeMap
// args: t, i
// closure: s, e, r, u
function {
  return e.map(function <atom:0>)(r.innerFrom(u(t, i)));   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=43B file=valdi_rxjs/src/operators/mergeMap
// args: e, r
// closure: i, u, p
function {
  return i.mergeInternals(e, r, u, p);   // tail call
}

// fn o  args=3 vars=6 closure=6 cpool=2 bc=127B file=valdi_rxjs/src/operators/mergeMap
// args: u, s, p
// locals: u#1, s#1, p#1
// closure: e, r, i, n, o, t
function {
  let p#1;
  let s#1;
  let u#1;
  u#1 = u;
  s#1 = s;
  if (!((p === undefined))) goto L_17;
  p;
  p = (1 / 0);
  p#1 = (1 / 0);
  if (!(n.isFunction(s))) goto L_48;
  return o(function <atom:0>, p);
  if (!(("number" == typeof s))) goto L_56;
  p = s;
  s;
  return t.operate(function <atom:0>);
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=140B file=valdi_rxjs/src/operators/mergeMap
// args: require, module, exports
// locals: e, r, t, i, n, o
function {
  o = function o;
  let n;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.mergeMap = undefined;
  e = require("./map");
  r = require("../observable/innerFrom");
  t = require("../util/lift");
  i = require("./mergeInternals");
  n = require("../util/isFunction");
  exports.mergeMap = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/mergeMap
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
