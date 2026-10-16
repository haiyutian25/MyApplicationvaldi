// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=215B file=memory_settings_ui/src/MemorySettingsPageNavigation
// args: i, a
// closure: v, e, t
function {
  if (!((i === v.id))) goto L_50;
  goto L_d6;
  // [栈深重同步 1 -> 0]
  if (!((i === t.NAVIGATION_BACK_ACTION_ID))) goto L_d6;
  if (!(("discard" === a))) goto L_aa;
  goto L_d6;
  // [栈深重同步 1 -> 0]
  if (!((undefined === a))) goto L_d6;
  e.onBack();
  return;
}

// fn d  args=2 vars=7 closure=9 cpool=1 bc=1016B file=memory_settings_ui/src/MemorySettingsPageNavigation
// args: o, e
// locals: a, v, d, u, m
// closure: t, a, n, g, l, i, c, r, s
function {
  if (!(a.isVersionAtLeast(19))) goto L_3f7;
  let m;
  let u;
  let d;
  let v;
  let a;
  a = n.resolveToolbarMetadata(g, l.stringResolver);
  v = a.trailingActions[0];
  d = (e.saveBehavior === i.CustomInstructionsSaveBehavior.Automatic);
  u = c.supportsNavigationConfirmationDialog(o);
  null;
  a;
  if ((d)) goto L_152;
  if (!(u)) goto L_24a;
  if ((e.dirty)) goto L_19f;
  if (!(e.saving)) goto L_24a;
  if (!(!d)) goto L_23e;
  if (!(e.dirty)) goto L_23e;
  goto L_23f;
  // [栈深重同步 4 -> 3]
  goto L_24b;
  // [栈深重同步 2 -> 1]
  if (!(d)) goto L_25b;
  goto L_2fc;
  // [栈深重同步 2 -> 1]
  null;
  v;
  if ((!e.dirty)) goto L_2d1;
  m = {leadingActions: undefined, trailingActions: [r.navigationSaveAction({disabled: e.saving}, e.saveState)]};
  new s.NavigationController(o).setPlatformNavigationBar(m, function <atom:0>);
  if (!((o.setBackButtonObserver == null))) goto L_381;
  o.setBackButtonObserver;
  o;
  goto L_3f3;
  // [栈深重同步 1 -> 2]
  if ((e.dirty)) goto L_3c9;
  if (!(e.saving)) goto L_3ef;
  goto L_3f0;
  // [栈深重同步 3 -> 2]
  <?>.call(undefined, undefined);
  // close_loc v
  return;
}

// fn u  args=1 vars=1 closure=2 cpool=0 bc=169B file=memory_settings_ui/src/MemorySettingsPageNavigation
// args: i
// closure: a, s
function {
  if (!((i.setBackButtonObserver == null))) goto L_2b;
  i.setBackButtonObserver;
  i;
  goto L_2f;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, undefined);
  if (!(a.isVersionAtLeast(19))) goto L_a8;
  new s.NavigationController(i).clearPlatformNavigationBar();
  return;
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=2 bc=433B file=memory_settings_ui/src/MemorySettingsPageNavigation
// args: require, module, exports
// locals: i, a, o, e, t, r, n, s, c, v, g, l, d, u
function {
  d = function d;
  u = function u;
  let l;
  let g;
  let v;
  let c;
  let s;
  let n;
  let r;
  let t;
  let e;
  let o;
  let a;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.configureMemorySettingsPageNavigation = undefined;
  exports.clearMemorySettingsPageNavigation = undefined;
  i = require("custom_instructions_ui/src/CustomInstructionsModels");
  a = require("valdi_core/src/CompilerIntrinsics");
  o = require("valdi_core/src/Valdi");
  e = require("valdi_core/src/localization/LocalizableStringsModule");
  t = require("oai_ui/src/NavigationBackAction");
  r = require("oai_ui/src/NavigationSaveAction");
  n = require("valdi_navigation/src/ToolbarMetadata");
  s = require("valdi_navigation/src/NavigationController");
  c = require("valdi_navigation/src/PlatformNavigation");
  v = require("./Strings");
  g = JSON.parse(o.getModuleFileEntryAsString("memory_settings_ui", "src/MemorySettingsScreen.navigation.json"));
  l = e.LocalizableStringsModule.fromExports(v.default);
  exports.configureMemorySettingsPageNavigation = d;
  exports.clearMemorySettingsPageNavigation = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=memory_settings_ui/src/MemorySettingsPageNavigation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
