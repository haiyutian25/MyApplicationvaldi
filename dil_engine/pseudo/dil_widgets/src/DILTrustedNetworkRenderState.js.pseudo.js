// fn e  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_widgets/src/DILTrustedNetworkRenderState
// args: e, r
// closure: t
function {
  return e.withProperty(t, r);   // tail call
}

// fn r  args=1 vars=2 closure=1 cpool=0 bc=71B file=dil_widgets/src/DILTrustedNetworkRenderState
// args: e
// locals: r
// closure: t
function {
  let r;
  if (!((e == null))) goto L_c;
  e;
  goto L_33;
  r = undefined.getProperty(t);
  if (!(("function" == typeof r))) goto L_45;
  return r();
  return undefined;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=122B file=dil_widgets/src/DILTrustedNetworkRenderState
// args: require, module, exports
// locals: t, e, r
function {
  e = function e;
  r = function r;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderStateWithDILTrustedNetworkPolicy = undefined;
  exports.getDILTrustedNetworkPolicy = undefined;
  t = Symbol("DIL trusted network policy");
  exports.renderStateWithDILTrustedNetworkPolicy = e;
  exports.getDILTrustedNetworkPolicy = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILTrustedNetworkRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
