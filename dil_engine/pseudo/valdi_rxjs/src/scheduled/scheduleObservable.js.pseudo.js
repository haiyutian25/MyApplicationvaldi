// fn o  args=2 vars=2 closure=3 cpool=0 bc=150B file=valdi_rxjs/src/scheduled/scheduleObservable
// args: o, b
// closure: e, s, r
function {
  return e.innerFrom(o).pipe(s.subscribeOn(b), r.observeOn(b));   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/scheduled/scheduleObservable
// args: require, module, exports
// locals: e, r, s, o
function {
  o = function o;
  let s;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.scheduleObservable = undefined;
  e = require("../observable/innerFrom");
  r = require("../operators/observeOn");
  s = require("../operators/subscribeOn");
  exports.scheduleObservable = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduled/scheduleObservable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
