// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=325B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// closure: this
function {
  if ((this.subscriptions.closed)) goto L_144;
  if ((this.state.value.saving)) goto L_144;
  this.editor.discardFailed();
  this.navigator.pop(true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=433B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// closure: this
function {
  if ((this.subscriptions.closed)) goto L_1b0;
  if ((!this.state.value.dirty)) goto L_1b0;
  if ((this.state.value.saving)) goto L_1b0;
  this.subscriptions.add(this.saveCustomization().subscribe());
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=1255B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// locals: e
// closure: this, t, i
function {
  if (!(!this.subscriptions.closed)) goto L_4e5;
  if (!(!this.savingOnBack)) goto L_4e5;
  if (!((this.editor.saveBehavior !== t.CustomInstructionsSaveBehavior.Automatic))) goto L_243;
  if ((this.state.value.saving)) goto L_23f;
  if (!(this.state.value.dirty)) goto L_1f7;
  goto L_23f;
  // [栈深重同步 1 -> 0]
  this.navigator.pop(true);
  goto L_4e5;
  this.savingOnBack = true;
  try { // catch -> L_40d
  (await this.editor.commitPending());
  if ((this.subscriptions.closed)) goto L_401;
  if ((this.editor.hasPendingUpdates)) goto L_401;
  if ((this.editor.state.value.saving)) goto L_401;
  this.navigator.pop(true);
  <?>;
  // gosub (finally 块) 1240
  undefined;
  goto L_4e5;
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_4d2
  if ((this.subscriptions.closed)) goto L_4c7;
  this.presentSaveFailure(i.default.customInstructionsSaveErrorMessage());
  <?>;
  // gosub (finally 块) 1240
  undefined;
  goto L_4e5;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1240
  throw <?>;
  this.savingOnBack = false;
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: e
// closure: this
function {
  return this.updateNavigation(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=857B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: e
// closure: this, t, I
function {
  if (!((undefined === e.saveFailure))) goto L_35;
  this.saveFailurePending = false;
  false;
  if ((this.savingOnBack)) goto L_1e4;
  if (((this.editor.saveBehavior !== t.CustomInstructionsSaveBehavior.Automatic))) goto L_1e4;
  if (((undefined === e.saveFailure))) goto L_1e4;
  if (((undefined !== this.lastSaveFailure))) goto L_1e4;
  this.saveFailurePending = true;
  if (!(this.pageVisible)) goto L_1e4;
  this.presentSaveFailure(I.default.memorySettingsErrorMessage());
  this.lastSaveFailure = e.saveFailure;
  null;
  this.state.value;
  if ((e.saving)) goto L_350;
  this.state.next({dirty: e.dirty, saving: (0 !== this.state.value.saveState)});
  return;
}

// fn <atom:0>  args=3 vars=4 closure=10 cpool=5 bc=736B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: e, a, o
// locals: this
// closure: t, i, I, <class_fields_init>, h, v, s, r, y, q
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.navigator = e;
  this.platformServices = a;
  this.contextId = o;
  this.state = new h.BehaviorSubject({dirty: false, saving: false, saveState: 0});
  this.subscriptions = new v.Subscription();
  this.pageVisible = true;
  this.loadFailurePending = false;
  this.saveFailurePending = false;
  this.discard = function <atom:0>;
  this.save = function <atom:0>;
  this.savingOnBack = false;
  this.handleBack = function <atom:0>;
  this.editor = new s.CustomInstructionsParentController(r.customizationsRepositoryFor(a));
  this.subscriptions.add(this.state.pipe(y.distinctUntilChanged(q)).subscribe(function <atom:0>));
  this.subscriptions.add(this.editor.state.subscribe(function <atom:0>));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// locals: this
function {
  this = this;
  return this.editor.fields;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=103B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// locals: this
function {
  this = this;
  return this.state.value.saving;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// locals: this
function {
  this = this;
  return this.editor.enabled;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=142B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// closure: p, this
function {
  return p.from(this.editor.repository.refresh());   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=242B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: t
// closure: e, c, this, m
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Failed to refresh account customizations", t);
  if (!(c.Device.isIOS())) goto L_c9;
  this.presentLoadFailure();
  return m.of(undefined);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=2 bc=472B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// locals: this
// closure: p, e, c, m, g, S
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_1d7;
  if (!((undefined === this.editor.repository.state.value.failure))) goto L_1d7;
  this.subscriptions.add(g.defer(function <atom:0>).pipe(S.catchError(function <atom:0>)).subscribe());
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=286B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: e
// locals: this
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_11d;
  if ((this.state.value.saving)) goto L_11d;
  this.editor.openEditor(this.navigator, e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=287B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: e, t
// locals: this
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_11e;
  if ((this.state.value.saving)) goto L_11e;
  this.editor.openFieldEditor(this.navigator, t, e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=157B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: e, t
// locals: this
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_9c;
  this.editor.stage({field: e, value: t});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=292B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// locals: this
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_123;
  null;
  this.state.value;
  this.state.next({dirty: this.editor.hasPendingUpdates});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=324B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: e
// locals: this
// closure: I
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_143;
  this.pageVisible = e;
  if (!(e)) goto L_f2;
  if (!(this.saveFailurePending)) goto L_f2;
  this.presentSaveFailure(I.default.memorySettingsErrorMessage());
  if (!(e)) goto L_143;
  if (!(this.loadFailurePending)) goto L_143;
  this.presentLoadFailure();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=873B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: e
// locals: this
// closure: _, I, d
function {
  this = this;
  _.configureMemorySettingsPageNavigation(this.navigator, {saveBehavior: this.editor.saveBehavior, unsavedChanges: {title: I.default.memorySettingsUnsavedChanges(), message: I.default.memorySettingsUnsavedChangesMessage(), actions: [{id: "keep-editing", title: I.default.memorySettingsKeepEditing(), role: d.ConfirmationDialogRole.Default}, {id: "discard", title: I.default.memorySettingsDiscardChanges(), role: d.ConfirmationDialogRole.Destructive}]}, dirty: e.dirty, saving: e.saving, saveState: e.saveState, onSave: this.save, onBack: this.handleBack, onDiscard: this.discard});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=361B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// locals: this
// closure: _
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_168;
  this.subscriptions.unsubscribe();
  _.clearMemorySettingsPageNavigation(this.navigator);
  this.editor.dispose();
  this.state.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=369B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// closure: o, this, p
function {
  o.trackAnalyticsEvent(this.platformServices, {category: "Customizations", name: "Update Instruction Fields", key: "update_fields"});
  null;
  this.state.value;
  this.state.next({saving: true, saveState: 1});
  return p.from(this.editor.commitPending());   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=157B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// closure: this
function {
  this.state.next({dirty: this.editor.hasPendingUpdates, saving: true, saveState: 2});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=76B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// closure: b, n
function {
  return b.timer(n.navigationSaveFeedbackDurationMs());   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=156B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// closure: this
function {
  return this.state.next({dirty: this.editor.hasPendingUpdates, saving: false, saveState: 0});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=307B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// closure: this, I, m
function {
  null;
  this.state.value;
  this.state.next({saving: false, saveState: 0});
  this.presentSaveFailure(I.default.memorySettingsErrorMessage());
  return m.of(undefined);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=11 cpool=6 bc=283B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// locals: this
// closure: o, p, b, n, I, m, g, F, f, C, S
function {
  this = this;
  return g.defer(function <atom:0>).pipe(F.tap(function <atom:0>), f.concatMap(function <atom:0>), C.map(function <atom:0>), F.tap({complete: function <atom:0>}), S.catchError(function <atom:0>));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=329B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// closure: u, I
function {
  return u.platformAlert.present({title: I.default.memorySettingsErrorTitle(), message: I.default.memorySettingsLoadErrorMessage(), actions: [{id: "ok", title: I.default.memorySettingsOk(), role: 1}]});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=192B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: e
// closure: this
function {
  if (!(!this.subscriptions.closed)) goto L_bf;
  if (!(this.pageVisible)) goto L_bf;
  if (!(("ok" === e.selectedActionId))) goto L_bf;
  this.handleBack();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: t
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Could not present the Custom Instructions load error", t);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=3 bc=284B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// locals: t, this
// closure: u, I, e, l
function {
  this = this;
  if (!(this.pageVisible)) goto L_10f;
  this.loadFailurePending = false;
  try { // catch -> L_ae
  l.withLocalNativeRefs(this.contextId, function <atom:0>).then(function <atom:0>, function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_10e
  if (!(e.isLoggingEnabled)) goto L_10b;
  console.warn("Could not present the Custom Instructions load error", t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.loadFailurePending = true;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=254B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// closure: this, s
function {
  if (!(!this.subscriptions.closed)) goto L_fd;
  if (!(this.pageVisible)) goto L_fd;
  return (this.editor.state.value.saveFailure === s);
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=384B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: s
// closure: e, this, t, i
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Customization retry failed", s);
  if (!(!this.subscriptions.closed)) goto L_17f;
  if (!(this.pageVisible)) goto L_17f;
  if (!((this.editor.saveBehavior === t.CustomInstructionsSaveBehavior.ExplicitSave))) goto L_17f;
  this.presentSaveFailure(i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=1 bc=350B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: s
// closure: e, this, t, i, r, a
function {
  if (!(r())) goto L_c1;
  if (!((s === a.CustomizationSaveAlertAction.Retry))) goto L_c1;
  goto L_15d;
  // [栈深重同步 1 -> 0]
  if (!(r())) goto L_15d;
  if (!((s === a.CustomizationSaveAlertAction.Discard))) goto L_15d;
  this.editor.discardFailed();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: t
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Could not present the Custom Instructions save error", t);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=4 cpool=3 bc=475B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: i
// locals: s, r, o, this
// closure: e, t, a, I
function {
  this = this;
  let r;
  let s;
  this.saveFailurePending = false;
  s = this.editor.state.value.saveFailure;
  r = function <atom:0>;
  try { // catch -> L_17a
  a.presentCustomizationSaveAlert({contextId: this.contextId, isCurrent: r, title: I.default.memorySettingsErrorTitle(), message: i}).then(function <atom:0>, function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_1da
  if (!(e.isLoggingEnabled)) goto L_1d7;
  console.warn("Could not present the Custom Instructions save error", o);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=82B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: e
// closure: this
function {
  if (!(("discard" === e.selectedActionId))) goto L_51;
  this.discard();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: t
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Could not present the Custom Instructions discard confirmation", t);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=2 bc=570B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// locals: t, this
// closure: e, u, I
function {
  this = this;
  try { // catch -> L_1d9
  u.platformAlert.present({title: I.default.memorySettingsUnsavedChanges(), message: I.default.memorySettingsUnsavedChangesMessage(), actions: [{id: "keep-editing", title: I.default.memorySettingsKeepEditing(), role: 1}, {id: "discard", title: I.default.memorySettingsDiscardChanges(), role: 2}]}).then(function <atom:0>, function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_239
  if (!(e.isLoggingEnabled)) goto L_236;
  console.warn("Could not present the Custom Instructions discard confirmation", t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn q  args=2 vars=2 closure=0 cpool=0 bc=219B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: e, t
function {
  if (!((e.dirty === t.dirty))) goto L_da;
  if (!((e.saving === t.saving))) goto L_da;
  return (e.saveState === t.saveState);
}

// fn <atom:0>  args=3 vars=32 closure=0 cpool=17 bc=566B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// args: require, module, exports
// locals: e, t, i, s, r, a, o, n, d, l, c, u, h, v, g, p, m, b, S, f, y, C, F, _, I, MemorySettingsCustomInstructionsController, <class_fields_init>, MemorySettingsCustomInstructionsController#1, q
function {
  q = function q;
  let MemorySettingsCustomInstructionsController#1;
  let I;
  let _;
  let F;
  let C;
  let y;
  let f;
  let S;
  let b;
  let m;
  let p;
  let g;
  let v;
  let h;
  let u;
  let c;
  let l;
  let d;
  let n;
  let o;
  let a;
  let r;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MemorySettingsCustomInstructionsController = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("custom_instructions_ui/src/CustomInstructionsModels");
  i = require("custom_instructions_ui/src/Strings");
  s = require("custom_instructions_ui/src/CustomInstructionsParentController");
  r = require("custom_instructions_ui/src/CustomizationsRepository");
  a = require("custom_instructions_ui/src/CustomizationSaveAlert");
  o = require("oai_platform_services/src/OAIAnalyticsService");
  n = require("oai_ui/src/NavigationSaveAction");
  d = require("valdi_core/src/ConfirmationDialog");
  l = require("valdi_core/src/NativeReferences");
  c = require("valdi_core/src/Device");
  u = require("valdi_platform_alert/src/PlatformAlert");
  h = require("valdi_rxjs/src/BehaviorSubject");
  v = require("valdi_rxjs/src/Subscription");
  g = require("valdi_rxjs/src/observable/defer");
  p = require("valdi_rxjs/src/observable/from");
  m = require("valdi_rxjs/src/observable/of");
  b = require("valdi_rxjs/src/observable/timer");
  S = require("valdi_rxjs/src/operators/catchError");
  f = require("valdi_rxjs/src/operators/concatMap");
  y = require("valdi_rxjs/src/operators/distinctUntilChanged");
  C = require("valdi_rxjs/src/operators/map");
  F = require("valdi_rxjs/src/operators/tap");
  _ = require("./MemorySettingsPageNavigation");
  I = require("./Strings");
  let MemorySettingsCustomInstructionsController;
  let <class_fields_init>;
  class MemorySettingsCustomInstructionsController extends undefined { ... }
  <proto:MemorySettingsCustomInstructionsController>.fields = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.isSaving = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.enabled = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.refresh = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.open = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.openField = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.updateField = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.refreshNavigation = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.setPageVisible = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.updateNavigation = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.dispose = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.saveCustomization = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.presentLoadFailure = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.presentSaveFailure = function <atom:0>;
  <proto:MemorySettingsCustomInstructionsController>.confirmDiscard = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MemorySettingsCustomInstructionsController>;
  MemorySettingsCustomInstructionsController = function <atom:0>;
  // close_loc <class_fields_init>
  MemorySettingsCustomInstructionsController#1 = function <atom:0>;
  exports.MemorySettingsCustomInstructionsController = MemorySettingsCustomInstructionsController#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=memory_settings_ui/src/MemorySettingsCustomInstructionsController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
