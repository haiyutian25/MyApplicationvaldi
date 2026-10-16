// fn o  args=1 vars=1 closure=2 cpool=0 bc=43B file=valdi_core/src/Asset
// args: e
// closure: s, a
function {
  return s.makeAssetFromUrl(a, e);   // tail call
}

// fn n  args=1 vars=1 closure=2 cpool=0 bc=43B file=valdi_core/src/Asset
// args: e
// closure: s, a
function {
  return s.makeAssetFromBytes(a, e);   // tail call
}

// fn i  args=2 vars=2 closure=2 cpool=0 bc=44B file=valdi_core/src/Asset
// args: e, t
// closure: s, a
function {
  return s.makeDirectionalAsset(a, e, t);   // tail call
}

// fn c  args=2 vars=2 closure=2 cpool=0 bc=44B file=valdi_core/src/Asset
// args: e, t
// closure: s, a
function {
  return s.makePlatformSpecificAsset(a, e, t);   // tail call
}

// fn u  args=1 vars=1 closure=2 cpool=0 bc=43B file=valdi_core/src/Asset
// args: e
// closure: s, a
function {
  return s.makeThemableAsset(a, e);   // tail call
}

// fn d  args=2 vars=2 closure=3 cpool=0 bc=326B file=valdi_core/src/Asset
// args: e, r
// closure: s, a, t
function {
  if (!((r === 0))) goto L_8;
  return 0;
  if (!((r === 1))) goto L_51;
  if (!((s.getBackendRenderingTypeForContextId(a, e) === 2))) goto L_3f;
  return 2;
  if (!((s.getBackendRenderingTypeForContextId(a, e) === 1))) goto L_46;
  return 1;
  if (!((s.getBackendRenderingTypeForContextId(a, e) === 3))) goto L_4d;
  return 3;
  s.getBackendRenderingTypeForContextId(a, e);
  goto L_145;
  if (!((r === 2))) goto L_137;
  if (!((s.getBackendRenderingTypeForContextId(a, e) === 2))) goto L_8b;
  return 5;
  if (!((s.getBackendRenderingTypeForContextId(a, e) === 1))) goto L_92;
  return 4;
  if (!((s.getBackendRenderingTypeForContextId(a, e) === 3))) goto L_134;
  if (!(t.Device.isIOS())) goto L_e6;
  return 4;
  if (!(t.Device.isAndroid())) goto L_132;
  return 5;
  return 7;
  s.getBackendRenderingTypeForContextId(a, e);
  goto L_145;
  if (!((r === 3))) goto L_13e;
  return 6;
  if (!((r === 4))) goto L_145;
  return 7;
  r;
  return;
}

// fn m  args=5 vars=5 closure=2 cpool=0 bc=56B file=valdi_core/src/Asset
// args: e, t, r, o, n
// closure: s, a
function {
  return {unsubscribe: s.addAssetLoadObserver(a, e, t, r, o, n)};
}

// fn p  args=1 vars=1 closure=1 cpool=0 bc=40B file=valdi_core/src/Asset
// args: e
// closure: s
function {
  return s.getLoadedAssetMetadata(e);   // tail call
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=8 bc=423B file=valdi_core/src/Asset
// args: require, module, exports
// locals: e, t, r, s, a, o, n, i, c, u, d, m, p
function {
  o = function o;
  n = function n;
  i = function i;
  c = function c;
  u = function u;
  d = function d;
  m = function m;
  p = function p;
  let a;
  let s;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makeAssetFromUrl = undefined;
  exports.makeAssetFromBytes = undefined;
  exports.makeDirectionalAsset = undefined;
  exports.makePlatformSpecificAsset = undefined;
  exports.makeThemableAsset = undefined;
  exports.resolveAssetOutputType = undefined;
  exports.addAssetLoadObserver = undefined;
  exports.getLoadedAssetMetadata = undefined;
  e = require("./ValdiRuntimeProvider");
  t = require("./Device");
  r = require("./ModuleLoaderGlobal");
  s = e.getValdiRuntime();
  a = r.getModuleLoader(module).package;
  exports.makeAssetFromUrl = o;
  exports.makeAssetFromBytes = n;
  exports.makeDirectionalAsset = i;
  exports.makePlatformSpecificAsset = c;
  exports.makeThemableAsset = u;
  exports.resolveAssetOutputType = d;
  exports.addAssetLoadObserver = m;
  exports.getLoadedAssetMetadata = p;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Asset
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
