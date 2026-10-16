// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=231B file=valdi_rxjs/src/scheduler/asap
// args: require, module, exports
// locals: e, s
function {
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.asapScheduler = undefined;
  exports.asap = undefined;
  e = require("./AsapAction");
  s = require("./AsapScheduler");
  exports.asapScheduler = new s.AsapScheduler(e.AsapAction);
  exports.asap = exports.asapScheduler;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/asap
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
