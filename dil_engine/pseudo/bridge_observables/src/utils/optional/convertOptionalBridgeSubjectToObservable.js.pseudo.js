// fn r  args=2 vars=2 closure=1 cpool=0 bc=41B file=bridge_observables/src/utils/optional/convertOptionalBridgeSubjectToObservable
// args: r, o
// closure: e
function {
  return e.convertOptionalBridgeObservableToObservable(r, o);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=bridge_observables/src/utils/optional/convertOptionalBridgeSubjectToObservable
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.convertOptionalBridgeSubjectToObservable = undefined;
  e = require("./convertOptionalBridgeObservableToObservable");
  exports.convertOptionalBridgeSubjectToObservable = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=bridge_observables/src/utils/optional/convertOptionalBridgeSubjectToObservable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
