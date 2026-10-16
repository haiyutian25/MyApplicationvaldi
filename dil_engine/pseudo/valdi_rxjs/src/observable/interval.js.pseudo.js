// fn t  args=2 vars=4 closure=2 cpool=0 bc=111B file=valdi_rxjs/src/observable/interval
// args: t, i
// locals: t#1, i#1
// closure: e, r
function {
  let i#1;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = 0;
  t#1 = 0;
  if (!((i === undefined))) goto L_3a;
  i;
  i = e.asyncScheduler;
  i#1 = e.asyncScheduler;
  if (!((t < 0))) goto L_44;
  t = 0;
  0;
  return r.timer(t, t, i);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/observable/interval
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.interval = undefined;
  e = require("../scheduler/async");
  r = require("./timer");
  exports.interval = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/interval
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
