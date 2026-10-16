// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=81B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// args: t
// closure: this
function {
  if (!((this.controller == null))) goto L_2b;
  this.controller;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.updateDraft(t);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=80B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// args: t
// closure: this
function {
  if (!((this.controller == null))) goto L_2b;
  this.controller;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.finishEditing();
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=81B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// args: t
// closure: this
function {
  if (!((this.controller == null))) goto L_2b;
  this.controller;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.consumeSuggestion(t);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=189B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// closure: this
function {
  if (!(this.usesNativeToolbar)) goto L_72;
  goto L_bc;
  // [栈深重同步 1 -> 0]
  this.navigationController.dismiss(true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=423B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// closure: u, g
function {
  return u.platformAlert.present({title: g.default.customInstructionsUnsavedChangesTitle(), message: g.default.customInstructionsUnsavedChangesMessage(), actions: [{id: "keep", title: g.default.customInstructionsKeepEditing(), role: 1}, {id: "discard", title: g.default.customInstructionsDiscard(), role: 2}]});   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=6 cpool=1 bc=946B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// locals: t, t#1
// closure: u, g, this, v, l, e
function {
  if (!(!this.state.isSaving)) goto L_3b0;
  if (!((this.context.saveBehavior !== v.CustomInstructionsSaveBehavior.Automatic))) goto L_35f;
  if (!(this.state.dirty)) goto L_30c;
  if (!(!this.showingDiscardConfirmation)) goto L_3b0;
  this.showingDiscardConfirmation = true;
  try { // catch -> L_28b
  let t;
  t = (await l.withLocalNativeRefs(this.renderer.contextId, function <atom:0>));
  if ((this.isDestroyed())) goto L_27f;
  if ((("discard" !== t.selectedActionId))) goto L_27f;
  if (!((this.controller == null))) goto L_25b;
  this.controller;
  goto L_27f;
  undefined.requestDismiss();
  <?>;
  // gosub (finally 块) 762
  undefined;
  goto L_3b0;
  // [栈深重同步 0 -> 1]
  t#1 = <?>;
  try { // catch -> L_2f4
  if (!(e.isLoggingEnabled)) goto L_2e8;
  console.warn("Could not confirm discarding settings edits", t#1);
  <?>;
  // gosub (finally 块) 762
  undefined;
  goto L_3b0;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 762
  throw <?>;
  this.showingDiscardConfirmation = false;
  // ret (finally 块) 
  goto L_3b0;
  if (!((this.controller == null))) goto L_338;
  this.controller;
  goto L_35c;
  undefined.requestDismiss();
  goto L_3b0;
  if (!((this.controller == null))) goto L_38b;
  this.controller;
  goto L_3af;
  undefined.requestDismiss();
  return undefined; // async
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=5 bc=257B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// locals: this, this.active_func, new.target, arguments
// closure: u, g, v, l, e, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.state = {draft: this.viewModel.initialValue, maximumLength: 1500, suggestions: [], dirty: false, isSaving: false};
  this.showingDiscardConfirmation = false;
  this.callbacks = {onDraftChanged: function <atom:0>, onEditingFinished: function <atom:0>, onSuggestionSelected: function <atom:0>};
  this.dismiss = function <atom:0>;
  this.handleBack = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=79B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// closure: this
function {
  if (!((this.controller == null))) goto L_2a;
  this.controller;
  goto L_4e;
  undefined.finishEditing();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=79B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// closure: this
function {
  if (!((this.controller == null))) goto L_2a;
  this.controller;
  goto L_4e;
  undefined.finishEditing();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=702B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// args: t
// locals: e
// closure: this, v, C
function {
  let e;
  if ((this.usesNativeToolbar)) goto L_129;
  if ((t.isSaving)) goto L_126;
  if (!((this.context.saveBehavior === v.CustomInstructionsSaveBehavior.ExplicitSave))) goto L_126;
  this.updateDismissalGesture(t.dirty);
  e = this.state.saveFailure;
  this.setState(t);
  C.configureCustomInstructionsEditorNavigation(this.navigationController, this.viewModel.field, t.isSaving, function <atom:0>);
  if (!((undefined !== t.saveFailure))) goto L_2bd;
  if (!((t.saveFailure !== e))) goto L_2bd;
  this.presentSaveFailure();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=2 bc=1099B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// locals: t, s, i, this
// closure: v, C, n, h, e
function {
  this = this;
  let t;
  C.configureCustomInstructionsEditorNavigation(this.navigationController, this.viewModel.field, false, function <atom:0>);
  if (!(this.usesNativeToolbar)) goto L_14c;
  this.registerDisposable(this.navigationController.registerBackButtonObserver(this.handleBack));
  t = n.accountCustomizationsFor(this.context.platformServices);
  if (!((undefined !== t))) goto L_3ce;
  let s;
  s = undefined;
  try { // catch -> L_2c8
  s = new h.CustomInstructionsController(t, this.viewModel, this.context.onCommit, this.context.onDraftChanged, this.dismiss);
  new h.CustomInstructionsController(t, this.viewModel, this.context.onCommit, this.context.onDraftChanged, this.dismiss);
  <?>;
  goto L_350;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_34f
  if (!(e.isLoggingEnabled)) goto L_325;
  console.warn("Failed to observe account customizations", i);
  this.dismiss();
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.controller = s;
  this.registerDisposable(s.state.subscribe(function <atom:0>));
  return;
  if (!(e.isLoggingEnabled)) goto L_424;
  console.warn("Custom instructions requires account customizations capability");
  this.dismiss();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=222B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// locals: this
function {
  this = this;
  this.navigationController.clearPlatformNavigationBar();
  if (!((this.reenableDismissalGesture == null))) goto L_74;
  this.reenableDismissalGesture;
  this;
  goto L_77;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.reenableDismissalGesture = undefined;
  if (!((this.controller == null))) goto L_ad;
  this.controller;
  goto L_d1;
  undefined.dispose();
  this.controller = undefined;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=119B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// args: t
function {
  return {id: t.id, label: t.label, insertedText: t.insertedText};
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=1 bc=1855B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// locals: t, e, r, this
// closure: n, C, i, o, s, g
function {
  this = this;
  let r;
  let e;
  let t;
  t = (this.viewModel.field === n.AccountCustomizationField.AboutYou);
  e = C.customInstructionsEditorTitle(this.viewModel.field);
  r = this.state.suggestions.map(function <atom:0>);
  i.beginComponent(o.TextEditorScreen, s, undefined, undefined);
  if ((i.hasContext())) goto L_25a;
  null;
  this.context;
  i.setContext({callbacks: this.callbacks});
  i.setViewModelProperty("title", e);
  i.setViewModelProperty("value", this.state.draft);
  i.setViewModelProperty("isSaving", this.state.isSaving);
  if (!(t)) goto L_3e4;
  goto L_49a;
  // [栈深重同步 4 -> 3]
  if (!(this.usesNativeToolbar)) goto L_452;
  goto L_49a;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("placeholder", g.default.customInstructionsPlaceholder());
  i.setViewModelProperty("maximumLength", this.state.maximumLength);
  i.setViewModelProperty("countPolicy", this.viewModel.countPolicy);
  if (!(t)) goto L_5b1;
  goto L_5f9;
  // [栈深重同步 4 -> 3]
  i.setViewModelProperty("accessibilityLabel", g.default.customInstructionsAccessibilityLabel());
  i.setViewModelProperty("characterCountAccessibilityLabel", g.default.customInstructionsCharacterCountAccessibilityLabel());
  i.setViewModelProperty("saveAccessibilityLabel", g.default.customInstructionsDoneAccessibilityLabel());
  i.setViewModelProperty("suggestionActions", r);
  i.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=141B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// closure: c
function {
  return (c.resolveSettingsTheme().editorPresentation === c.SettingsEditorPresentation.Page);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=114B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// closure: this, e
function {
  if (!(!this.isDestroyed())) goto L_71;
  return (this.state.saveFailure === e);
}

// fn <atom:0>  args=0 vars=6 closure=4 cpool=1 bc=1104B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// locals: e, i, s, t, i#1, this
// closure: m, r, g, e
function {
  this = this;
  try { // catch -> L_3ea
  let s;
  let i;
  let e;
  e = this.state.saveFailure;
  i = function <atom:0>;
  s = (await m.presentCustomizationSaveAlert({contextId: this.renderer.contextId, isCurrent: i, title: r.default.commonErrorTitle(), message: g.default.customInstructionsSaveErrorMessage()}));
  if (!(i())) goto L_2f1;
  if (!((s === m.CustomizationSaveAlertAction.Retry))) goto L_2f1;
  try { // catch -> L_295
  (await this.context.onRetryFailed());
  if ((this.isDestroyed())) goto L_290;
  if (!((this.controller == null))) goto L_26b;
  this.controller;
  goto L_28f;
  (await undefined.finishEditing());
  <?>;
  goto L_3e4;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_2f0
  if ((this.isDestroyed())) goto L_2eb;
  this.presentSaveFailure();
  <?>;
  goto L_3e4;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(i())) goto L_3e3;
  if (!((s === m.CustomizationSaveAlertAction.Discard))) goto L_3e3;
  this.context.onDiscardFailed();
  if (!((this.controller == null))) goto L_3bf;
  this.controller;
  goto L_3e3;
  undefined.requestDismiss();
  // close_loc e
  <?>;
  goto L_44e;
  // [栈深重同步 0 -> 1]
  i#1 = <?>;
  try { // catch -> L_44d
  if (!(e.isLoggingEnabled)) goto L_449;
  console.warn("Could not present customization save failure", i#1);
  <?>;
  goto L_44e;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=222B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// args: t
// locals: this
function {
  this = this;
  if (!(t)) goto L_7e;
  if (!((undefined === this.reenableDismissalGesture))) goto L_7e;
  this.reenableDismissalGesture = this.navigationController.disableDismissalGesture();
  goto L_dd;
  // [栈深重同步 1 -> 0]
  if ((t)) goto L_dd;
  if (((undefined === this.reenableDismissalGesture))) goto L_dd;
  this.reenableDismissalGesture();
  this.reenableDismissalGesture = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=7 bc=620B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// args: require, module, exports
// locals: t, e, i, s, o, r, n, a, l, c, u, d, h, m, v, g, C, f, CustomInstructionsEditorScreen, <class_fields_init>
function {
  let f;
  let C;
  let g;
  let v;
  let m;
  let h;
  let d;
  let u;
  let c;
  let l;
  let a;
  let n;
  let r;
  let o;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CustomInstructionsEditorScreen = undefined;
  t = require("tslib");
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("valdi_core/src/JSX").jsx;
  s = i.makeComponentPrototype(["visibilityThreshold", 100, "warningThreshold", 50, "errorThreshold", 20], "Mr7sR4_meAHYAuBY");
  o = require("settings_text_editor/src/TextEditorScreen");
  r = require("oai_ui/src/Strings");
  n = require("oai_platform_services/src/AccountCustomizations");
  a = require("valdi_navigation/src/NavigationPage");
  l = require("valdi_core/src/NativeReferences");
  c = require("oai_ui/src/components/settings/SettingsTheme");
  u = require("valdi_platform_alert/src/PlatformAlert");
  d = require("valdi_navigation/src/NavigationPageComponent");
  h = require("./CustomInstructionsController");
  m = require("./CustomizationSaveAlert");
  v = require("./CustomInstructionsModels");
  g = require("./Strings");
  C = require("./CustomInstructionsEditorNavigation");
  let CustomInstructionsEditorScreen;
  let <class_fields_init>;
  class CustomInstructionsEditorScreen extends d.NavigationPageStatefulComponent { ... }
  <proto:CustomInstructionsEditorScreen>.onCreate = function <atom:0>;
  <proto:CustomInstructionsEditorScreen>.onDestroy = function <atom:0>;
  <proto:CustomInstructionsEditorScreen>.onRender = function <atom:0>;
  <proto:CustomInstructionsEditorScreen>.usesNativeToolbar = function <atom:0>;
  <proto:CustomInstructionsEditorScreen>.presentSaveFailure = function <atom:0>;
  <proto:CustomInstructionsEditorScreen>.updateDismissalGesture = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CustomInstructionsEditorScreen>;
  CustomInstructionsEditorScreen = function <atom:0>;
  // close_loc <class_fields_init>
  f = function <atom:0>;
  exports.CustomInstructionsEditorScreen = f;
  f = t.__decorate([a.NavigationPage(module)], f);
  exports.CustomInstructionsEditorScreen = t.__decorate([a.NavigationPage(module)], f);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=custom_instructions_ui/src/CustomInstructionsEditorScreen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
