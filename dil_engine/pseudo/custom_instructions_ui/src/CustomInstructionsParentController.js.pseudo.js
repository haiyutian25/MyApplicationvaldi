// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=custom_instructions_ui/src/CustomInstructionsParentController
// closure: this
function {
  return this.publish();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=1 bc=524B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t
// locals: this
// closure: <class_fields_init>, n, l, u
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.repository = t;
  this.fields = new n.BehaviorSubject([]);
  this.state = new n.BehaviorSubject({dirty: false, saving: false, selectedPersonalityTraits: []});
  if (!(l.isNativeIOS())) goto L_107;
  goto L_14c;
  // [栈深重同步 2 -> 1]
  this.saveBehavior = u.CustomInstructionsSaveBehavior.ExplicitSave;
  this.stagedFields = new Map();
  this.stagedTraits = new Map();
  this.accountLoaded = false;
  this.disposed = false;
  this.observe();
  this.queueSubscription = t.state.subscribe(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=108B file=custom_instructions_ui/src/CustomInstructionsParentController
// locals: this
// closure: s
function {
  this = this;
  return this.valueFor(s.AccountCustomizationField.CustomInstructions);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=291B file=custom_instructions_ui/src/CustomInstructionsParentController
// locals: this
function {
  this = this;
  if (((this.stagedFields.size > 0))) goto L_122;
  if (((this.stagedTraits.size > 0))) goto L_122;
  return (this.repository.state.value.pending.length > 0);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=custom_instructions_ui/src/CustomInstructionsParentController
// locals: this
function {
  this = this;
  if (!((this.savedState == null))) goto L_2e;
  this.savedState;
  goto L_4f;
  return (false !== undefined.enabled);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: e
// closure: t
function {
  return (e.field === t);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=370B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t
// locals: this
function {
  this = this;
  if (!((this.stagedFields.get(t) == null))) goto L_51;
  this.stagedFields.get(t);
  goto L_72;
  if (!((undefined.value == null))) goto L_171;
  undefined.value;
  if (!((this.pendingField(t) == null))) goto L_a8;
  this.pendingField(t);
  goto L_c9;
  if (!((undefined.value == null))) goto L_171;
  undefined.value;
  if (!((this.savedState == null))) goto L_fb;
  this.savedState;
  goto L_16b;
  if (!((undefined.fields.find(function <atom:0>) == null))) goto L_14a;
  undefined.fields.find(function <atom:0>);
  goto L_16b;
  if (!((undefined.value == null))) goto L_171;
  undefined.value;
  return "";
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: e
// closure: t
function {
  return (e.field === t.field);
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=1 bc=881B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  if ((this.disposed)) goto L_52;
  if (!((undefined === this.savedState))) goto L_55;
  return;
  if (!((this.stagedFields.get(t.field) == null))) goto L_c5;
  this.stagedFields.get(t.field);
  goto L_e6;
  if (!((undefined.value === t.value))) goto L_10c;
  return;
  if (!((this.savedState == null))) goto L_136;
  this.savedState;
  goto L_1a6;
  if (!((undefined.fields.find(function <atom:0>) == null))) goto L_185;
  undefined.fields.find(function <atom:0>);
  goto L_1a6;
  if (!((undefined.value == null))) goto L_1ac;
  undefined.value;
  e = "";
  i = (undefined !== this.pendingField(t.field));
  if (((t.value !== e))) goto L_224;
  if (!(i)) goto L_2e2;
  goto L_34a;
  // [栈深重同步 1 -> 0]
  this.stagedFields.delete(t.field);
  this.publish();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: e
// closure: t
function {
  return (e.traitKey === t.traitKey);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: e
// closure: t
function {
  return (e.traitKey === t.traitKey);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=72B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: e
// closure: t
function {
  return e.traits.some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=2 bc=916B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  if ((this.disposed)) goto L_52;
  if (!((undefined === this.savedState))) goto L_55;
  return;
  if (!((this.stagedTraits.get(t.traitKey) == null))) goto L_c5;
  this.stagedTraits.get(t.traitKey);
  goto L_e6;
  if (!((undefined.levelKey === t.levelKey))) goto L_10c;
  return;
  if (!((this.savedState == null))) goto L_136;
  this.savedState;
  goto L_1ae;
  if (!((undefined.selectedPersonalityTraits == null))) goto L_15f;
  undefined.selectedPersonalityTraits;
  goto L_1ae;
  if (!((undefined.find(function <atom:0>) == null))) goto L_18d;
  undefined.find(function <atom:0>);
  goto L_1ae;
  if (!((undefined.levelKey == null))) goto L_1b8;
  undefined.levelKey;
  e = "default";
  i = this.repository.state.value.pending.some(function <atom:0>);
  if (((t.levelKey !== e))) goto L_292;
  if (!(i)) goto L_305;
  null;
  t;
  goto L_36d;
  // [栈深重同步 1 -> 0]
  this.stagedTraits.delete(t.traitKey);
  this.publish();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=207B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t
// locals: e, this
function {
  this = this;
  let e;
  this.stage(t);
  e = this.stagedFields.get(t.field);
  if (!((undefined === e))) goto L_c3;
  goto L_c9;
  // [栈深重同步 3 -> 2]
  return this.commit([e], []);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=207B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t
// locals: e, this
function {
  this = this;
  let e;
  this.stageTrait(t);
  e = this.stagedTraits.get(t.traitKey);
  if (!((undefined === e))) goto L_c6;
  goto L_cc;
  // [栈深重同步 4 -> 3]
  return this.commit([], [e]);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=261B file=custom_instructions_ui/src/CustomInstructionsParentController
// locals: this
function {
  this = this;
  return this.commit(Array.from(this.stagedFields.values()), Array.from(this.stagedTraits.values()));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=custom_instructions_ui/src/CustomInstructionsParentController
// locals: this
function {
  this = this;
  return this.repository.retryFailed();   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=694B file=custom_instructions_ui/src/CustomInstructionsParentController
// locals: t, e, e#1, this
function {
  this = this;
  let t;
  t = this.repository.discardFailed();
  let e;
  if (!((t == null))) goto L_5a;
  t;
  goto L_7b;
  if (!((undefined.fields == null))) goto L_83;
  undefined.fields;
  for (const e of []) {
    if (!((this.stagedFields.get(e.field) === e))) goto L_164;
    this.stagedFields.delete(e.field);
  }
  let e#1;
  if (!((t == null))) goto L_17c;
  t;
  goto L_19d;
  if (!((undefined.traits == null))) goto L_1a5;
  undefined.traits;
  for (const e#1 of []) {
    if (!((this.stagedTraits.get(e#1.traitKey) === e#1))) goto L_286;
    this.stagedTraits.delete(e#1.traitKey);
  }
  this.publish();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=776B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t, e
// locals: e#1, t#1, this
function {
  this = this;
  if ((this.disposed)) goto L_4c;
  if (!((undefined === this.savedState))) goto L_5d;
  throw new Error("Customization editor is unavailable");
  if (((0 !== t.length))) goto L_69;
  if (!((0 !== e.length))) goto L_2be;
  (await this.repository.commit(t, e));
  let e#1;
  for (const e#1 of t) {
    if (!((this.stagedFields.get(e#1.field) === e#1))) goto L_19d;
    this.stagedFields.delete(e#1.field);
  }
  let t#1;
  for (const t#1 of e) {
    if (!((this.stagedTraits.get(t#1.traitKey) === t#1))) goto L_28c;
    this.stagedTraits.delete(t#1.traitKey);
  }
  this.publish();
  goto L_306;
  (await this.repository.waitForPending());
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: e
// closure: t
function {
  return (e.field === t);
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=1 bc=260B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t
// locals: e, i, s, this
function {
  this = this;
  let e;
  e = this.repository.state.value.pending;
  let i;
  i = (e.length - 1);
  if (!((i >= 0))) goto L_103;
  let s;
  s = e[i].fields.find(function <atom:0>);
  if (!((undefined !== s))) goto L_f9;
  return s;
  i = <i_new>;
  (i--);
  goto L_95;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=111B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t, e
// locals: this
// closure: s
function {
  this = this;
  this.openFieldEditor(t, e, s.AccountCustomizationField.CustomInstructions);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=147B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t
// closure: this, u
function {
  if (!((this.saveBehavior === u.CustomInstructionsSaveBehavior.Automatic))) goto L_92;
  this.stage(t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=custom_instructions_ui/src/CustomInstructionsParentController
// closure: this
function {
  return this.retryFailed();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=custom_instructions_ui/src/CustomInstructionsParentController
// closure: this
function {
  return this.discardFailed();   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=606B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t
// locals: e, i
// closure: this, v, u, l
function {
  let e;
  if (!(this.disposed)) goto L_5e;
  return Promise.reject(new Error("Customization editor is unavailable"));   // tail call
  e = (t.value !== v.initialValue);
  if (!((this.saveBehavior === u.CustomInstructionsSaveBehavior.Automatic))) goto L_207;
  let i;
  if (!(e)) goto L_141;
  return this.commitField(t);   // tail call
  i = this.stagedFields.get(l);
  if (!((undefined === i))) goto L_1d8;
  return this.repository.commitPendingField(l);
  return this.commit([i], []);
  if (!(e)) goto L_234;
  this.stage(t);
  return Promise.resolve();   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=8 cpool=4 bc=1082B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t, n, l
// locals: h, c, v, g, this
// closure: u, s, r, a, o, e, d, i
function {
  this = this;
  let g;
  let v;
  let c;
  let h;
  if ((this.disposed)) goto L_5a;
  if (!(!this.accountLoaded)) goto L_5d;
  return;
  h = 1500;
  if (!((l === s.AccountCustomizationField.CustomInstructions))) goto L_13b;
  if (!((r.experimentLayer(n.experimentService, "chatgpt_custom_instructions") == null))) goto L_103;
  r.experimentLayer(n.experimentService, "chatgpt_custom_instructions");
  goto L_12f;
  if (!((undefined.getNumber("custom_instructions_length", 1500) == null))) goto L_137;
  undefined.getNumber("custom_instructions_length", 1500);
  h = 1500;
  1500;
  c = new a.NavigationController(t);
  v = {field: l, initialValue: this.valueFor(l), countPolicy: o.CharacterCountPolicy.GraphemeCluster, allowsSuggestions: (l === s.AccountCustomizationField.CustomInstructions), maximumLength: h};
  g = {platformServices: n, saveBehavior: this.saveBehavior, onDraftChanged: function <atom:0>, onRetryFailed: function <atom:0>, onDiscardFailed: function <atom:0>, onCommit: function <atom:0>};
  if (!((e.resolveSettingsTheme().editorPresentation !== e.SettingsEditorPresentation.Page))) goto L_3ae;
  goto L_439;
  // [栈深重同步 1 -> 0]
  c.push(d.CustomInstructionsEditorScreen, v, g, {animated: true, showPlatformNavigationBar: true, platformNavigationTitle: i.customInstructionsEditorTitle(l)});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=519B file=custom_instructions_ui/src/CustomInstructionsParentController
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_206;
  this.disposed = true;
  if (!((this.subscription == null))) goto L_61;
  this.subscription;
  goto L_85;
  undefined.unsubscribe();
  this.subscription = undefined;
  if (!((this.queueSubscription == null))) goto L_bb;
  this.queueSubscription;
  goto L_df;
  undefined.unsubscribe();
  this.queueSubscription = undefined;
  this.stagedFields.clear();
  this.stagedTraits.clear();
  this.fields.complete();
  this.state.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t
// closure: this
function {
  this.receive(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=100B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: e
// closure: this, t
function {
  this.accountLoaded = false;
  if (!(t.isLoggingEnabled)) goto L_63;
  console.warn("Failed to observe account customizations", e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=2 bc=238B file=custom_instructions_ui/src/CustomInstructionsParentController
// locals: e, this
// closure: t
function {
  this = this;
  try { // catch -> L_81
  this.subscription = this.repository.observe().subscribe(function <atom:0>, function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_ed
  this.accountLoaded = false;
  if (!(t.isLoggingEnabled)) goto L_ea;
  console.warn("Failed to observe account customizations", e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=152B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_97;
  if (!(t.loading)) goto L_5b;
  this.accountLoaded = false;
  goto L_97;
  // [栈深重同步 1 -> 0]
  this.accountLoaded = true;
  this.savedState = t;
  this.publish();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: t
function {
  return t.traits;
}

// fn <atom:0>  args=0 vars=13 closure=0 cpool=1 bc=2398B file=custom_instructions_ui/src/CustomInstructionsParentController
// locals: i, s, i#1, s#1, t, i#2, i#3, e, i#4, e#1, i#5, i#6, this
function {
  this = this;
  let e#1;
  let t;
  if (!(this.disposed)) goto L_2f;
  return;
  let s;
  let i;
  const _it1 = this.stagedFields;
  goto L_ff;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  i = <value(_it2)>;
  <done(_it2)>;
  s = <value(_it2)>;
  if (!(this.repository.hasFinished(s))) goto L_fe;
  this.stagedFields.delete(i);
  if (!(<done(_it1)>)) goto L_5c;
  <value(_it1)>;
  let s#1;
  let i#1;
  const _it3 = this.stagedTraits;
  goto L_1d8;
  const _it4 = <value(_it3)>;
  <done(_it4)>;
  i#1 = <value(_it4)>;
  <done(_it4)>;
  s#1 = <value(_it4)>;
  if (!(this.repository.hasFinished(s#1))) goto L_1d7;
  this.stagedTraits.delete(i#1);
  if (!(<done(_it3)>)) goto L_135;
  <value(_it3)>;
  t = new Map();
  let i#2;
  if (!((this.savedState == null))) goto L_21a;
  this.savedState;
  goto L_23b;
  // [栈深重同步 4 -> 1]
  if (!((_it4.fields == null))) goto L_243;
  _it4.fields;
  for (const i#2 of []) {
    t.set(i#2.field, i#2);
  }
  let i#3;
  for (const i#3 of this.repository.state.value.pending) {
    let e;
    for (const e of i#3.fields) {
      t.set(e.field, e);
      // [栈深重同步 3 -> 6]
    }
  }
  let i#4;
  for (const i#4 of this.stagedFields.values()) {
    t.set(i#4.field, i#4);
  }
  this.fields.next(Array.from(t.values()));
  e#1 = new Map();
  let i#5;
  if (!((this.savedState == null))) goto L_52b;
  this.savedState;
  goto L_54c;
  if (!((undefined.selectedPersonalityTraits == null))) goto L_554;
  undefined.selectedPersonalityTraits;
  for (const i#5 of []) {
    e#1.set(i#5.traitKey, i#5);
  }
  let i#6;
  // append([], 0, this.repository.state.value.pending.flatMap(function <atom:0>))
  // append([], this.repository.state.value.pending.flatMap(function <atom:0>), this.stagedTraits.values())
  this.stagedTraits.values();
  for (const i#6 of []) {
    if (!(("default" === i#6.levelKey))) goto L_72a;
    goto L_778;
    // [栈深重同步 4 -> 3]
    e#1.set(i#6.traitKey, i#6);
  }
  this.state.next({dirty: this.hasPendingUpdates, saving: this.repository.state.value.saving, saveFailure: this.repository.state.value.failure, selectedPersonalityTraits: Array.from(e#1.values())});
  return;
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=20 bc=426B file=custom_instructions_ui/src/CustomInstructionsParentController
// args: require, module, exports
// locals: t, e, i, s, r, o, a, n, d, l, u, CustomInstructionsParentController, <class_fields_init>, CustomInstructionsParentController#1
function {
  let CustomInstructionsParentController#1;
  let u;
  let l;
  let d;
  let n;
  let a;
  let o;
  let r;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CustomInstructionsParentController = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("oai_ui/src/components/settings/SettingsTheme");
  i = require("./CustomInstructionsEditorNavigation");
  s = require("oai_platform_services/src/AccountCustomizations");
  r = require("oai_platform_services/src/OAIExperimentService");
  o = require("oai_ui/src/components/CharacterCounter");
  a = require("valdi_navigation/src/NavigationController");
  n = require("valdi_rxjs/src/BehaviorSubject");
  d = require("./CustomInstructionsEditorScreen");
  l = require("valdi_ui/src/Platform");
  u = require("./CustomInstructionsModels");
  let CustomInstructionsParentController;
  let <class_fields_init>;
  class CustomInstructionsParentController extends undefined { ... }
  <proto:CustomInstructionsParentController>.currentValue = function <atom:0>;
  <proto:CustomInstructionsParentController>.hasPendingUpdates = function <atom:0>;
  <proto:CustomInstructionsParentController>.enabled = function <atom:0>;
  <proto:CustomInstructionsParentController>.valueFor = function <atom:0>;
  <proto:CustomInstructionsParentController>.stage = function <atom:0>;
  <proto:CustomInstructionsParentController>.stageTrait = function <atom:0>;
  <proto:CustomInstructionsParentController>.commitField = function <atom:0>;
  <proto:CustomInstructionsParentController>.commitTrait = function <atom:0>;
  <proto:CustomInstructionsParentController>.commitPending = function <atom:0>;
  <proto:CustomInstructionsParentController>.retryFailed = function <atom:0>;
  <proto:CustomInstructionsParentController>.discardFailed = function <atom:0>;
  <proto:CustomInstructionsParentController>.commit = function <atom:0>;
  <proto:CustomInstructionsParentController>.pendingField = function <atom:0>;
  <proto:CustomInstructionsParentController>.openEditor = function <atom:0>;
  <proto:CustomInstructionsParentController>.openFieldEditor = function <atom:0>;
  <proto:CustomInstructionsParentController>.dispose = function <atom:0>;
  <proto:CustomInstructionsParentController>.observe = function <atom:0>;
  <proto:CustomInstructionsParentController>.receive = function <atom:0>;
  <proto:CustomInstructionsParentController>.publish = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CustomInstructionsParentController>;
  CustomInstructionsParentController = function <atom:0>;
  // close_loc <class_fields_init>
  CustomInstructionsParentController#1 = function <atom:0>;
  exports.CustomInstructionsParentController = CustomInstructionsParentController#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=custom_instructions_ui/src/CustomInstructionsParentController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
