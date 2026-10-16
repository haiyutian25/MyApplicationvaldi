// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=85B file=valdi_rxjs/src/operators/combineLatest
// args: r, i
// closure: e, t, a
function {
  // append([r], 1, t.argsOrArgArray(a))
  t.argsOrArgArray(a);
  e.combineLatestInit([r])(i);
  return;
}

// fn u  args=1 vars=2 closure=7 cpool=1 bc=184B file=valdi_rxjs/src/operators/combineLatest
// args: a
// locals: n
// closure: e, t, o, s, u, i, r
function {
  a = ...0;
  let n;
  n = o.popResultSelector(a);
  if (!(n)) goto L_90;
  // append([], 0, a)
  a;
  return s.pipe(u.apply(undefined, []), i.mapOneOrManyArgs(n));
  return r.operate(function <atom:0>);
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=1 bc=152B file=valdi_rxjs/src/operators/combineLatest
// args: require, module, exports
// locals: e, r, t, i, s, o, u
function {
  u = function u;
  let o;
  let s;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.combineLatest = undefined;
  e = require("../observable/combineLatest");
  r = require("../util/lift");
  t = require("../util/argsOrArgArray");
  i = require("../util/mapOneOrManyArgs");
  s = require("../util/pipe");
  o = require("../util/args");
  exports.combineLatest = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/combineLatest
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
