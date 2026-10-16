// fn i  args=1 vars=2 closure=2 cpool=0 bc=181B file=oai_platform_services/src/AccountFeatures
// args: i
// locals: r
// closure: r, e
function {
  if (!((undefined !== i))) goto L_b4;
  if (!(r.isVersionAtLeast(13))) goto L_b4;
  let r;
  r = i.accountFeatureService;
  if (!((undefined !== r))) goto L_b4;
  return e.convertBridgeObservableToObservable(r.observeFeature("memory_in_search"));   // tail call
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=oai_platform_services/src/AccountFeatures
// args: require, module, exports
// locals: e, r, i
function {
  i = function i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.memoryInSearchAvailabilityFor = undefined;
  e = require("bridge_observables/src/utils/convertBridgeObservableToObservable");
  r = require("valdi_core/src/CompilerIntrinsics");
  exports.memoryInSearchAvailabilityFor = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_platform_services/src/AccountFeatures
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
