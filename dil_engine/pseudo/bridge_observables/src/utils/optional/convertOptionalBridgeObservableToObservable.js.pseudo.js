// fn b  args=2 vars=2 closure=2 cpool=0 bc=85B file=bridge_observables/src/utils/optional/convertOptionalBridgeObservableToObservable
// args: b, o
// closure: r, e
function {
  if (!(b)) goto L_2a;
  return r.convertBridgeObservableToObservable(b);
  if (!((o == null))) goto L_54;
  o;
  return e.EMPTY;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=bridge_observables/src/utils/optional/convertOptionalBridgeObservableToObservable
// args: require, module, exports
// locals: e, r, b
function {
  b = function b;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.convertOptionalBridgeObservableToObservable = undefined;
  e = require("valdi_rxjs/src/observable/empty");
  r = require("../convertBridgeObservableToObservable");
  exports.convertOptionalBridgeObservableToObservable = b;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=bridge_observables/src/utils/optional/convertOptionalBridgeObservableToObservable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
