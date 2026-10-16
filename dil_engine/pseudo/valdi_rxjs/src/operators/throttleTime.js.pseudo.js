// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=valdi_rxjs/src/operators/throttleTime
// closure: l
function {
  return l;
}

// fn o  args=3 vars=7 closure=3 cpool=1 bc=184B file=valdi_rxjs/src/operators/throttleTime
// args: o, i, s
// locals: o#1, i#1, s#1, l
// closure: e, t, r
function {
  let s#1;
  let i#1;
  let o#1;
  o#1 = o;
  if (!((i === undefined))) goto L_36;
  i;
  i = e.asyncScheduler;
  i#1 = e.asyncScheduler;
  if (!((s === undefined))) goto L_62;
  s;
  s = t.defaultThrottleConfig;
  s#1 = t.defaultThrottleConfig;
  let l;
  l = r.timer(o, i);
  return t.throttle(function <atom:0>, s);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/throttleTime
// args: require, module, exports
// locals: e, t, r, o
function {
  o = function o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.throttleTime = undefined;
  e = require("../scheduler/async");
  t = require("./throttle");
  r = require("../observable/timer");
  exports.throttleTime = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/throttleTime
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
