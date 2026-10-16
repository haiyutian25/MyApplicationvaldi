// fn l  args=1 vars=1 closure=1 cpool=0 bc=84B file=personalization_settings_ui/src/PersonalizationSettingsModels
// args: e
// closure: o
function {
  if (!(o.isVersionAtLeast(44))) goto L_53;
  if (!((e == null))) goto L_31;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.host;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=119B file=personalization_settings_ui/src/PersonalizationSettingsModels
// args: e
function {
  return {faceThumbnailUrl: e.faceThumbnailUrl, fullBodyThumbnailUrl: e.fullBodyThumbnailUrl, loading: e.loading};
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=301B file=personalization_settings_ui/src/PersonalizationSettingsModels
// locals: e
// closure: l, o, t, r, n
function {
  let e;
  if (((undefined === l))) goto L_32;
  if (!(!o.isVersionAtLeast(95))) goto L_5c;
  return t.of(undefined);   // tail call
  if (!((l.observeReferencePhotos == null))) goto L_87;
  l.observeReferencePhotos;
  l;
  goto L_8a;
  // [栈深重同步 1 -> 2]
  e = <?>.call(undefined);
  if (!((undefined === e))) goto L_b9;
  return t.of(undefined);
  return r.convertBridgeObservableToObservable(e).pipe(n.map(function <atom:0>));
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=128B file=personalization_settings_ui/src/PersonalizationSettingsModels
// args: r
// closure: e, t
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Could not observe Reference Photos", r);
  return t.of(undefined);   // tail call
}

// fn c  args=1 vars=1 closure=8 cpool=2 bc=152B file=personalization_settings_ui/src/PersonalizationSettingsModels
// args: l
// closure: o, t, r, n, e, s, a, i
function {
  return s.defer(function <atom:0>).pipe(a.startWith(undefined), i.catchError(function <atom:0>));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=158B file=personalization_settings_ui/src/PersonalizationSettingsModels
// args: e
function {
  return {selectedPetId: e.selectedPetId, displayName: e.displayName, description: e.description, spriteSheetUrl: e.spriteSheetUrl};
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=301B file=personalization_settings_ui/src/PersonalizationSettingsModels
// locals: e
// closure: l, o, t, r, n
function {
  let e;
  if (((undefined === l))) goto L_32;
  if (!(!o.isVersionAtLeast(96))) goto L_5c;
  return t.of(undefined);   // tail call
  if (!((l.observePetSelection == null))) goto L_87;
  l.observePetSelection;
  l;
  goto L_8a;
  // [栈深重同步 1 -> 2]
  e = <?>.call(undefined);
  if (!((undefined === e))) goto L_b9;
  return t.of(undefined);
  return r.convertBridgeObservableToObservable(e).pipe(n.map(function <atom:0>));
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=128B file=personalization_settings_ui/src/PersonalizationSettingsModels
// args: r
// closure: e, t
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Could not observe the selected pet", r);
  return t.of(undefined);   // tail call
}

// fn d  args=1 vars=1 closure=8 cpool=2 bc=152B file=personalization_settings_ui/src/PersonalizationSettingsModels
// args: l
// closure: o, t, r, n, e, s, a, i
function {
  return s.defer(function <atom:0>).pipe(a.startWith(undefined), i.catchError(function <atom:0>));   // tail call
}

// fn p  args=1 vars=1 closure=1 cpool=0 bc=131B file=personalization_settings_ui/src/PersonalizationSettingsModels
// args: e
// closure: o
function {
  if (!(!!o.isVersionAtLeast(74))) goto L_82;
  if (!((e == null))) goto L_37;
  e;
  goto L_81;
  if (!((undefined.host == null))) goto L_60;
  undefined.host;
  goto L_81;
  return (undefined !== undefined.openReferencePhotos);
}

// fn v  args=1 vars=1 closure=1 cpool=0 bc=130B file=personalization_settings_ui/src/PersonalizationSettingsModels
// args: e
// closure: o
function {
  if (!(o.isVersionAtLeast(74))) goto L_81;
  if (!((e == null))) goto L_34;
  e;
  goto L_81;
  if (!((undefined.host == null))) goto L_5d;
  undefined.host;
  goto L_81;
  undefined.openReferencePhotos();
  return;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=5 bc=320B file=personalization_settings_ui/src/PersonalizationSettingsModels
// args: require, module, exports
// locals: e, r, o, s, t, i, n, a, l, c, d, p, v
function {
  l = function l;
  c = function c;
  d = function d;
  p = function p;
  v = function v;
  let a;
  let n;
  let i;
  let t;
  let s;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.personalizationHostFor = undefined;
  exports.observeReferencePhotos = undefined;
  exports.observePersonalizationPetSelection = undefined;
  exports.supportsReferencePhotos = undefined;
  exports.openReferencePhotos = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  r = require("bridge_observables/src/utils/convertBridgeObservableToObservable");
  o = require("valdi_core/src/CompilerIntrinsics");
  s = require("valdi_rxjs/src/observable/defer");
  t = require("valdi_rxjs/src/observable/of");
  i = require("valdi_rxjs/src/operators/catchError");
  n = require("valdi_rxjs/src/operators/map");
  a = require("valdi_rxjs/src/operators/startWith");
  exports.personalizationHostFor = l;
  exports.observeReferencePhotos = c;
  exports.observePersonalizationPetSelection = d;
  exports.supportsReferencePhotos = p;
  exports.openReferencePhotos = v;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=personalization_settings_ui/src/PersonalizationSettingsModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
