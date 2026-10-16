// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=231B file=valdi_rxjs/src/scheduler/async
// args: require, module, exports
// locals: e, c
function {
  let c;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.asyncScheduler = undefined;
  exports.async = undefined;
  e = require("./AsyncAction");
  c = require("./AsyncScheduler");
  exports.asyncScheduler = new c.AsyncScheduler(e.AsyncAction);
  exports.async = exports.asyncScheduler;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/async
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
