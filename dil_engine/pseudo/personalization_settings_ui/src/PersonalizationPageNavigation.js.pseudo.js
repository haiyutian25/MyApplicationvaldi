// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=215B file=personalization_settings_ui/src/PersonalizationPageNavigation
// args: i, a
// closure: n, o, t
function {
  if (!((i === n.id))) goto L_50;
  goto L_d6;
  // [栈深重同步 1 -> 0]
  if (!((i === t.NAVIGATION_BACK_ACTION_ID))) goto L_d6;
  if (!(("discard" === a))) goto L_aa;
  goto L_d6;
  // [栈深重同步 1 -> 0]
  if (!((undefined === a))) goto L_d6;
  o.onBack();
  return;
}

// fn S  args=2 vars=7 closure=10 cpool=1 bc=1201B file=personalization_settings_ui/src/PersonalizationPageNavigation
// args: a, o
// locals: e, n, g, S, p
// closure: t, e, s, d, u, i, v, r, c, l
function {
  if (!(e.isVersionAtLeast(19))) goto L_4b0;
  let p;
  let S;
  let g;
  let n;
  let e;
  e = s.resolveToolbarMetadata(d, u.stringResolver);
  n = e.trailingActions[0];
  g = (o.saveBehavior === i.CustomInstructionsSaveBehavior.Automatic);
  S = v.supportsNavigationConfirmationDialog(a);
  null;
  e;
  if ((g)) goto L_152;
  if (!(S)) goto L_24a;
  if ((o.dirty)) goto L_19f;
  if (!(o.saving)) goto L_24a;
  if (!(!g)) goto L_23e;
  if (!(o.dirty)) goto L_23e;
  goto L_23f;
  // [栈深重同步 4 -> 3]
  goto L_24b;
  // [栈深重同步 2 -> 1]
  if (!(g)) goto L_25b;
  goto L_3b5;
  // [栈深重同步 2 -> 1]
  null;
  n;
  if ((!o.dirty)) goto L_2d1;
  if (!((o.saveState === c.PersonalizationSaveState.Saving))) goto L_343;
  goto L_3b1;
  // [栈深重同步 4 -> 3]
  if (!((o.saveState === c.PersonalizationSaveState.Succeeded))) goto L_3b0;
  goto L_3b1;
  // [栈深重同步 4 -> 3]
  p = {leadingActions: undefined, trailingActions: [r.navigationSaveAction({disabled: o.saving}, 0)]};
  new l.NavigationController(a).setPlatformNavigationBar(p, function <atom:0>);
  if (!((a.setBackButtonObserver == null))) goto L_43a;
  a.setBackButtonObserver;
  a;
  goto L_4ac;
  // [栈深重同步 1 -> 2]
  if ((o.dirty)) goto L_482;
  if (!(o.saving)) goto L_4a8;
  goto L_4a9;
  // [栈深重同步 3 -> 2]
  <?>.call(undefined, undefined);
  // close_loc n
  return;
}

// fn p  args=1 vars=1 closure=2 cpool=0 bc=169B file=personalization_settings_ui/src/PersonalizationPageNavigation
// args: i
// closure: e, l
function {
  if (!((i.setBackButtonObserver == null))) goto L_2b;
  i.setBackButtonObserver;
  i;
  goto L_2f;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, undefined);
  if (!(e.isVersionAtLeast(19))) goto L_a8;
  new l.NavigationController(i).clearPlatformNavigationBar();
  return;
}

// fn _  args=0 vars=0 closure=2 cpool=0 bc=298B file=personalization_settings_ui/src/PersonalizationPageNavigation
// closure: a, g
function {
  if (!(a.Device.isAndroid())) goto L_e1;
  if (!(!a.Device.isWeb())) goto L_e1;
  return g.default.personalizationSettingsUnsavedChangesMessageAndroid();
  return g.default.personalizationSettingsUnsavedChangesMessage();
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=3 bc=484B file=personalization_settings_ui/src/PersonalizationPageNavigation
// args: require, module, exports
// locals: i, a, e, o, n, t, r, s, l, v, c, g, d, u, S, p, _
function {
  S = function S;
  p = function p;
  _ = function _;
  let u;
  let d;
  let g;
  let c;
  let v;
  let l;
  let s;
  let r;
  let t;
  let n;
  let o;
  let e;
  let a;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.configurePersonalizationPageNavigation = undefined;
  exports.clearPersonalizationPageNavigation = undefined;
  exports.personalizationUnsavedChangesMessage = undefined;
  i = require("custom_instructions_ui/src/CustomInstructionsModels");
  a = require("valdi_core/src/Device");
  e = require("valdi_core/src/CompilerIntrinsics");
  o = require("valdi_core/src/Valdi");
  n = require("valdi_core/src/localization/LocalizableStringsModule");
  t = require("oai_ui/src/NavigationBackAction");
  r = require("oai_ui/src/NavigationSaveAction");
  s = require("valdi_navigation/src/ToolbarMetadata");
  l = require("valdi_navigation/src/NavigationController");
  v = require("valdi_navigation/src/PlatformNavigation");
  c = require("./PersonalizationSettingsRepository");
  g = require("./Strings");
  d = JSON.parse(o.getModuleFileEntryAsString("personalization_settings_ui", "src/PersonalizationSettingsScreen.navigation.json"));
  u = n.LocalizableStringsModule.fromExports(g.default);
  exports.configurePersonalizationPageNavigation = S;
  exports.clearPersonalizationPageNavigation = p;
  exports.personalizationUnsavedChangesMessage = _;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=personalization_settings_ui/src/PersonalizationPageNavigation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
