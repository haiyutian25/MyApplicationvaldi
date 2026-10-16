// fn r  args=1 vars=2 closure=1 cpool=0 bc=102B file=valdi_core/src/provider/resolveProviderValue
// args: r
// locals: o
// closure: e
function {
  let o;
  o = e.resolveProviderSource();
  if (!(!o)) goto L_3e;
  throw new Error("No ProviderSource found in the tree. Please render a Provider component within this component tree");
  return o.getValue(r);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_core/src/provider/resolveProviderValue
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveProviderValue = undefined;
  e = require("./resolveProviderSource");
  exports.resolveProviderValue = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/provider/resolveProviderValue
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
