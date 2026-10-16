// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=41B file=valdi_rxjs/src/operators/auditTime
// closure: t, i, u
function {
  return t.timer(i, u);   // tail call
}

// fn i  args=2 vars=4 closure=3 cpool=1 bc=93B file=valdi_rxjs/src/operators/auditTime
// args: i, u
// locals: i#1, u#1
// closure: t, e, r
function {
  let u#1;
  let i#1;
  i#1 = i;
  if (!((u === undefined))) goto L_33;
  u;
  u = e.asyncScheduler;
  u#1 = e.asyncScheduler;
  return r.audit(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/auditTime
// args: require, module, exports
// locals: e, r, t, i
function {
  i = function i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.auditTime = undefined;
  e = require("../scheduler/async");
  r = require("./audit");
  t = require("../observable/timer");
  exports.auditTime = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/auditTime
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
