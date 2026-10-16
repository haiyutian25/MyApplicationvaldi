// fn r  args=1 vars=1 closure=2 cpool=0 bc=85B file=dil_core/src/DILAssetURLAuthorization
// args: e
// closure: s, t
function {
  if ((s.test(e))) goto L_54;
  return t.test(e);
}

// fn o  args=0 vars=0 closure=1 cpool=0 bc=42B file=dil_core/src/DILAssetURLAuthorization
// closure: e
function {
  return e.isVersionAtLeast(142);   // tail call
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=48B file=dil_core/src/DILAssetURLAuthorization
// args: e
// closure: o
function {
  if (!(o())) goto L_2e;
  if (!((e == null))) goto L_c;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.allowedUrlRegexes;
  return undefined;
}

// fn L  args=2 vars=3 closure=0 cpool=0 bc=121B file=dil_core/src/DILAssetURLAuthorization
// args: e, s
// locals: t
function {
  let t;
  if (((undefined === e))) goto L_d;
  if (!((undefined === s))) goto L_12;
  return true;
  if (!(("string" == typeof e))) goto L_1f;
  goto L_41;
  // [栈深重同步 1 -> 0]
  t = e.path;
  if (!(("string" == typeof t))) goto L_78;
  return s.isAllowed(t);
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=8 bc=355B file=dil_core/src/DILAssetURLAuthorization
// args: require, module, exports
// locals: e, s, t, r, o, i, L
function {
  r = function r;
  o = function o;
  i = function i;
  L = function L;
  let t;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_LOCAL_ASSET_URL_REGEXES = undefined;
  exports.isDILLocalAssetURL = undefined;
  exports.DENY_REMOTE_DIL_ASSETS = undefined;
  exports.supportsPerElementAssetURLFiltering = undefined;
  exports.getDILAssetURLRegexes = undefined;
  exports.isDILAssetSourceAllowed = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  s = new RegExp("^dil_icon_assets[:/]");
  t = new RegExp("^valdi-byteasset-[0-9]+:\\/\\/[0-9]+$");
  exports.DIL_LOCAL_ASSET_URL_REGEXES = [s.source, t.source];
  exports.isDILLocalAssetURL = r;
  exports.DENY_REMOTE_DIL_ASSETS = {isAllowed: r, allowedUrlRegexes: exports.DIL_LOCAL_ASSET_URL_REGEXES};
  exports.supportsPerElementAssetURLFiltering = o;
  exports.getDILAssetURLRegexes = i;
  exports.isDILAssetSourceAllowed = L;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILAssetURLAuthorization
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
