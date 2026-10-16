// fn i  args=1 vars=4 closure=5 cpool=0 bc=278B file=valdi_rxjs/src/observable/merge
// args: i
// locals: n, l, m
// closure: t, r, e, u, o
function {
  i = ...0;
  let m;
  let l;
  let n;
  n = t.popScheduler(i);
  l = t.popNumber(i, (1 / 0));
  m = i;
  if (!(m.length)) goto L_f1;
  if (!((1 === m.length))) goto L_9c;
  return r.innerFrom(m[0]);
  return e.mergeAll(l)(u.from(m, n));
  return o.EMPTY;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=140B file=valdi_rxjs/src/observable/merge
// args: require, module, exports
// locals: e, r, o, t, u, i
function {
  i = function i;
  let u;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.merge = undefined;
  e = require("../operators/mergeAll");
  r = require("./innerFrom");
  o = require("./empty");
  t = require("../util/args");
  u = require("./from");
  exports.merge = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/merge
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
