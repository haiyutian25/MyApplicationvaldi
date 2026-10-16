// fn r  args=1 vars=1 closure=1 cpool=0 bc=40B file=bridge_observables/src/utils/convertBridgeSubjectToObserver
// args: r
// closure: e
function {
  return e.convertBridgeObserverToObserver(r);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=bridge_observables/src/utils/convertBridgeSubjectToObserver
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.convertBridgeSubjectToObserver = undefined;
  e = require("./convertBridgeObserverToObserver");
  exports.convertBridgeSubjectToObserver = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=bridge_observables/src/utils/convertBridgeSubjectToObserver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
