// fn <atom:0>  args=2 vars=2 closure=5 cpool=0 bc=127B file=valdi_rxjs/src/operators/merge
// args: r, e
// closure: t, l, o, i, s
function {
  // append([r], 1, i)
  i;
  t.mergeAll(l)(o.from([r], s)).subscribe(e);
  return;
}

// fn i  args=1 vars=3 closure=5 cpool=1 bc=171B file=valdi_rxjs/src/operators/merge
// args: i
// locals: s, l
// closure: t, o, u, e, r
function {
  i = ...0;
  let l;
  let s;
  s = u.popScheduler(i);
  l = u.popNumber(i, (1 / 0));
  i = e.argsOrArgArray(i);
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=140B file=valdi_rxjs/src/operators/merge
// args: require, module, exports
// locals: r, e, t, u, o, i
function {
  i = function i;
  let o;
  let u;
  let t;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.merge = undefined;
  r = require("../util/lift");
  e = require("../util/argsOrArgArray");
  t = require("./mergeAll");
  u = require("../util/args");
  o = require("../observable/from");
  exports.merge = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/merge
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
