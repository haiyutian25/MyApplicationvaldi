// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=foundation/src/Provider
// closure: o
function {
  return o.get();   // tail call
}

// fn o  args=1 vars=1 closure=2 cpool=1 bc=85B file=foundation/src/Provider
// args: o
// closure: r, e
function {
  if (!(!r.isUndefined(o))) goto L_54;
  return new e.Lazy(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=foundation/src/Provider
// args: require, module, exports
// locals: e, r, o
function {
  o = function o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.providerToLazy = undefined;
  e = require("foundation/src/Lazy");
  r = require("foundation/src/isUndefined");
  exports.providerToLazy = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/Provider
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
