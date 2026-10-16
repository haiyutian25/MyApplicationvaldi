// fn b  args=0 vars=0 closure=2 cpool=0 bc=84B file=bridge_observables/src/utils/converter
// closure: t, e
function {
  return {toIntermediate: t.convertObservableToBridgeObservable, toTypeScript: e.convertBridgeObservableToObservable};
}

// fn c  args=0 vars=0 closure=2 cpool=0 bc=84B file=bridge_observables/src/utils/converter
// closure: o, r
function {
  return {toIntermediate: o.convertSubjectToBridgeSubject, toTypeScript: r.convertBridgeSubjectToSubject};
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=155B file=bridge_observables/src/utils/converter
// args: require, module, exports
// locals: e, r, t, o, b, c
function {
  b = function b;
  c = function c;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makeTypeConverter = undefined;
  exports.makeSubjectTypeConverter = undefined;
  e = require("./convertBridgeObservableToObservable");
  r = require("./convertBridgeSubjectToSubject");
  t = require("./convertObservableToBridgeObservable");
  o = require("./convertSubjectToBridgeSubject");
  exports.makeTypeConverter = b;
  exports.makeSubjectTypeConverter = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=bridge_observables/src/utils/converter
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
