// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=78B file=valdi_core/src/utils/OnIdle
// closure: i, r, e
function {
  i.onMainThreadIdle(r.makeInterruptibleCallback(e));
  return;
}

// fn n  args=1 vars=1 closure=3 cpool=1 bc=40B file=valdi_core/src/utils/OnIdle
// args: e
// closure: i, r, t
function {
  t.setTimeoutInterruptible(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=158B file=valdi_core/src/utils/OnIdle
// args: require, module, exports
// locals: e, t, r, i, n
function {
  n = function n;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.onIdleInterruptible = undefined;
  e = require("../ValdiRuntimeProvider");
  t = require("../SetTimeout");
  r = require("./FunctionUtils");
  i = e.getValdiRuntime();
  exports.onIdleInterruptible = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/OnIdle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
