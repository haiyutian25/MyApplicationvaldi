// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=valdi_rxjs/src/operators/delay
// closure: o
function {
  return o;
}

// fn s  args=2 vars=5 closure=3 cpool=1 bc=136B file=valdi_rxjs/src/operators/delay
// args: s, n
// locals: s#1, n#1, o
// closure: e, t, r
function {
  let n#1;
  let s#1;
  s#1 = s;
  if (!((n === undefined))) goto L_33;
  n;
  n = e.asyncScheduler;
  n#1 = e.asyncScheduler;
  let o;
  o = t.timer(s, n);
  return r.delayWhen(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/delay
// args: require, module, exports
// locals: e, r, t, s
function {
  s = function s;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.delay = undefined;
  e = require("../scheduler/async");
  r = require("./delayWhen");
  t = require("../observable/timer");
  exports.delay = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/delay
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
