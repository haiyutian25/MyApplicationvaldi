// fn o  args=1 vars=2 closure=2 cpool=0 bc=138B file=valdi_ui/src/ReduceMotion
// args: o
// locals: r
// closure: r, e
function {
  if (!(r.isVersionAtLeast(274))) goto L_89;
  let r;
  if (!((o == null))) goto L_36;
  o;
  goto L_57;
  r = undefined.reduceMotion;
  if (!((undefined !== r))) goto L_89;
  return e.convertBridgeObservableToObservable(r);   // tail call
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_ui/src/ReduceMotion
// args: require, module, exports
// locals: e, r, o
function {
  o = function o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getReduceMotion = undefined;
  e = require("bridge_observables/src/utils/convertBridgeObservableToObservable");
  r = require("valdi_core/src/CompilerIntrinsics");
  exports.getReduceMotion = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/ReduceMotion
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
