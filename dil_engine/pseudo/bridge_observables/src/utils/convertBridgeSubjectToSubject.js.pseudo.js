// fn o  args=1 vars=1 closure=3 cpool=0 bc=117B file=bridge_observables/src/utils/convertBridgeSubjectToSubject
// args: o
// closure: e, t, r
function {
  return new e.AnonymousSubject(t.convertBridgeSubjectToObserver(o), r.convertBridgeObservableToObservable(o));
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=bridge_observables/src/utils/convertBridgeSubjectToSubject
// args: require, module, exports
// locals: e, r, t, o
function {
  o = function o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.convertBridgeSubjectToSubject = undefined;
  e = require("valdi_rxjs/src/Subject");
  r = require("./convertBridgeObservableToObservable");
  t = require("./convertBridgeSubjectToObserver");
  exports.convertBridgeSubjectToSubject = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=bridge_observables/src/utils/convertBridgeSubjectToSubject
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
