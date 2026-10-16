// fn o  args=1 vars=1 closure=2 cpool=0 bc=219B file=custom_instructions_ui/src/CustomInstructionsEditorNavigation
// args: e
// closure: t, i
function {
  if (!((e === t.AccountCustomizationField.AboutYou))) goto L_92;
  return i.default.customInstructionsAboutYouTitle();
  return i.default.customInstructionsTitle();
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=14B file=custom_instructions_ui/src/CustomInstructionsEditorNavigation
// args: t
// closure: r
function {
  if (!(("done" === t))) goto L_d;
  r();
  return;
}

// fn s  args=4 vars=5 closure=3 cpool=1 bc=325B file=custom_instructions_ui/src/CustomInstructionsEditorNavigation
// args: t, s, n, r
// locals: u
// closure: e, i, o
function {
  let u;
  if (!((e.resolveSettingsTheme().editorPresentation === e.SettingsEditorPresentation.Sheet))) goto L_92;
  return;
  u = i.default.customInstructionsDoneAccessibilityLabel();
  t.setPlatformNavigationBar({title: o(s), trailingActions: [{id: "done", disabled: n, title: u, accessibilityLabel: u, iconName: "checkmark", style: 3}]}, function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=142B file=custom_instructions_ui/src/CustomInstructionsEditorNavigation
// args: require, module, exports
// locals: t, e, i, o, s
function {
  o = function o;
  s = function s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.customInstructionsEditorTitle = undefined;
  exports.configureCustomInstructionsEditorNavigation = undefined;
  t = require("oai_platform_services/src/AccountCustomizations");
  e = require("oai_ui/src/components/settings/SettingsTheme");
  i = require("./Strings");
  exports.customInstructionsEditorTitle = o;
  exports.configureCustomInstructionsEditorNavigation = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=custom_instructions_ui/src/CustomInstructionsEditorNavigation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
