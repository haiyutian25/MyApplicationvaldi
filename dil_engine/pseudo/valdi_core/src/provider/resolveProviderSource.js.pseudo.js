// fn r  args=1 vars=3 closure=0 cpool=0 bc=177B file=valdi_core/src/provider/resolveProviderSource
// args: e
// locals: r, e#1
function {
  if (!(e)) goto L_b0;
  let r;
  r = e;
  if (!(r.$getProviderSource)) goto L_65;
  let e#1;
  e#1 = r.$getProviderSource();
  if (!(e#1)) goto L_65;
  return e#1;
  e = e.renderer.getComponentParent(e);
  goto L_0;
  return;
}

// fn o  args=0 vars=0 closure=2 cpool=0 bc=166B file=valdi_core/src/provider/resolveProviderSource
// closure: e, r
function {
  if (!(!e.jsx.getCurrentComponentInstance())) goto L_5a;
  throw new Error("Cannot resolve Provider Source: there are no components being currently rendered");
  return r(e.jsx.getCurrentComponentInstance());   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=96B file=valdi_core/src/provider/resolveProviderSource
// args: require, module, exports
// locals: e, r, o
function {
  r = function r;
  o = function o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveProviderSource = undefined;
  e = require("../JSXBootstrap");
  exports.resolveProviderSource = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/provider/resolveProviderSource
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
