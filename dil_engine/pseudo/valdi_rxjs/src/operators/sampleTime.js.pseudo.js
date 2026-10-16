// fn t  args=2 vars=4 closure=3 cpool=0 bc=130B file=valdi_rxjs/src/operators/sampleTime
// args: t, i
// locals: t#1, i#1
// closure: e, r, s
function {
  let i#1;
  let t#1;
  t#1 = t;
  if (!((i === undefined))) goto L_33;
  i;
  i = e.asyncScheduler;
  i#1 = e.asyncScheduler;
  return r.sample(s.interval(t, i));   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/sampleTime
// args: require, module, exports
// locals: e, r, s, t
function {
  t = function t;
  let s;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.sampleTime = undefined;
  e = require("../scheduler/async");
  r = require("./sample");
  s = require("../observable/interval");
  exports.sampleTime = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/sampleTime
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
