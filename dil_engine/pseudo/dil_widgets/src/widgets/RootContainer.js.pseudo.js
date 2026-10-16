// fn d  args=0 vars=2 closure=2 cpool=0 bc=215B file=dil_widgets/src/widgets/RootContainer
// locals: e, r
// closure: n, exports
function {
  let r;
  let e;
  e = n.resolveProviderSource();
  r = exports.DILRootContainerProvider.getProviderKey();
  if (!((e == null))) goto L_80;
  e;
  goto L_a7;
  if (!((true === undefined.hasValue(r)))) goto L_d5;
  return e.getValue(r);
  return undefined;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=39B file=dil_widgets/src/widgets/RootContainer
// closure: t, o
function {
  t.renderContent(o);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=207B file=dil_widgets/src/widgets/RootContainer
// args: o
// closure: t, e, exports, r
function {
  e.beginComponent(exports.DILRootContainerProvider, r, undefined, undefined);
  e.setViewModelProperty("value", undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn s  args=2 vars=2 closure=5 cpool=1 bc=293B file=dil_widgets/src/widgets/RootContainer
// args: t, n
// closure: e, exports, r, i, o
function {
  if (!((undefined !== n))) goto L_60;
  null;
  t;
  goto L_124;
  // [栈深重同步 1 -> 0]
  e.beginRender(o, undefined);
  e.setAttributes(t.attributes);
  t.renderContent(undefined);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=356B file=dil_widgets/src/widgets/RootContainer
// args: require, module, exports
// locals: e, r, o, t, n, i, d, s
function {
  d = function d;
  s = function s;
  let i;
  let n;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILRootContainerProvider = undefined;
  exports.resolveDILRootContainerRenderer = undefined;
  exports.renderDILRootContainer = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = e.makeComponentPrototype(undefined, "0yVA8CzEq1j_dWpH");
  o = e.makeNodePrototype("view", undefined, "qkZdX7T9Ts6-YjXp");
  t = require("valdi_core/src/provider/createProvider");
  n = require("valdi_core/src/provider/resolveProviderSource");
  i = require("valdi_core/src/utils/Callback");
  exports.DILRootContainerProvider = t.createProviderComponentWithKeyName("DILRootContainer");
  exports.resolveDILRootContainerRenderer = d;
  exports.renderDILRootContainer = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/RootContainer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
