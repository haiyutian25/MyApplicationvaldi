// fn t  args=1 vars=1 closure=2 cpool=0 bc=88B file=bridge_observables/src/utils/convertSubjectToBridgeSubject
// args: t
// closure: r, e
function {
  return {onEvent: r.createBridgeOnEventFn(t), subscribe: e.createBridgeSubscribeFn(t)};
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=bridge_observables/src/utils/convertSubjectToBridgeSubject
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.convertSubjectToBridgeSubject = undefined;
  e = require("./convertObservableToBridgeObservable");
  r = require("./convertObserverToBridgeObserver");
  exports.convertSubjectToBridgeSubject = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=bridge_observables/src/utils/convertSubjectToBridgeSubject
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
