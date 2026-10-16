// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=custom_instructions_ui/src/CustomInstructionsController
// args: i
// closure: this
function {
  this.receiveNativeState(i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=126B file=custom_instructions_ui/src/CustomInstructionsController
// args: t
// closure: i, this
function {
  if (!(i.isLoggingEnabled)) goto L_57;
  console.warn("Failed to observe account customizations", t);
  this.requestDismiss();
  return;
}

// fn <atom:0>  args=5 vars=6 closure=5 cpool=2 bc=464B file=custom_instructions_ui/src/CustomInstructionsController
// args: t, o, a, u, r
// locals: this
// closure: i, <class_fields_init>, e, n, s
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.service = t;
  this.configuration = o;
  this.onCommit = a;
  this.onDraftChanged = u;
  this.dismiss = r;
  this.subscriptions = [];
  this.consumedSuggestionIDs = new Set();
  this.disposed = false;
  this.finished = false;
  this.state = new e.BehaviorSubject({draft: o.initialValue, maximumLength: n(o.field, o.maximumLength), suggestions: [], dirty: false, isSaving: false});
  this.subscriptions.push(s.observeAccountCustomizations(t).subscribe(function <atom:0>, function <atom:0>));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=746B file=custom_instructions_ui/src/CustomInstructionsController
// args: i
// locals: s, this
// closure: t
function {
  this = this;
  let s;
  if ((this.disposed)) goto L_b8;
  if ((this.finished)) goto L_b8;
  if (!(this.state.value.isSaving)) goto L_bb;
  return;
  s = t.truncateCharacters(i, this.state.value.maximumLength, this.configuration.countPolicy);
  null;
  this.state.value;
  this.state.next({draft: s, dirty: (s !== this.configuration.initialValue), saveFailure: undefined});
  this.onDraftChanged({field: this.configuration.field, value: s});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=custom_instructions_ui/src/CustomInstructionsController
// args: t
// closure: i
function {
  return (t.id === i);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=custom_instructions_ui/src/CustomInstructionsController
// args: t
// closure: i
function {
  return (t.id !== i);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=2 bc=511B file=custom_instructions_ui/src/CustomInstructionsController
// args: i
// locals: t, this
function {
  this = this;
  let t;
  t = this.state.value;
  if ((this.disposed)) goto L_1fe;
  if ((this.finished)) goto L_1fe;
  if ((t.isSaving)) goto L_1fe;
  if ((!t.suggestions.some(function <atom:0>))) goto L_1fe;
  this.consumedSuggestionIDs.add(i);
  null;
  t;
  this.state.next({suggestions: t.suggestions.filter(function <atom:0>)});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=1092B file=custom_instructions_ui/src/CustomInstructionsController
// locals: i, t, this
function {
  this = this;
  let i;
  if ((this.disposed)) goto L_b8;
  if ((this.finished)) goto L_b8;
  if (!(this.state.value.isSaving)) goto L_bc;
  return undefined; // async
  i = {field: this.configuration.field, value: this.state.value.draft};
  null;
  this.state.value;
  this.state.next({isSaving: true, saveFailure: undefined});
  try { // catch -> L_29e
  (await this.onCommit(i));
  if ((this.disposed)) goto L_292;
  this.finished = true;
  this.dismiss();
  <?>;
  // gosub (finally 块) 897
  undefined;
  goto L_442;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_37b
  if ((this.disposed)) goto L_36f;
  null;
  this.state.value;
  this.state.next({saveFailure: new Error("Could not save customizations")});
  <?>;
  // gosub (finally 块) 897
  undefined;
  goto L_442;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 897
  throw <?>;
  if ((this.disposed)) goto L_440;
  null;
  this.state.value;
  this.state.next({isSaving: false});
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=238B file=custom_instructions_ui/src/CustomInstructionsController
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_ed;
  if ((this.finished)) goto L_ed;
  if ((this.state.value.isSaving)) goto L_ed;
  this.finished = true;
  this.dismiss();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=257B file=custom_instructions_ui/src/CustomInstructionsController
// locals: i, this
function {
  this = this;
  if (!(!this.disposed)) goto L_100;
  this.disposed = true;
  let i;
  for (const i of this.subscriptions) {
    i.unsubscribe();
  }
  this.subscriptions.length = 0;
  this.state.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=106B file=custom_instructions_ui/src/CustomInstructionsController
// args: i
// closure: this
function {
  return !this.consumedSuggestionIDs.has(i.id);
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=1 bc=1041B file=custom_instructions_ui/src/CustomInstructionsController
// args: i
// locals: e, o, a, this
// closure: n, t, s
function {
  this = this;
  let a;
  let o;
  let e;
  if ((this.disposed)) goto L_79;
  if ((this.finished)) goto L_79;
  if (!(i.loading)) goto L_7c;
  return;
  e = n(this.configuration.field, this.configuration.maximumLength);
  o = t.truncateCharacters(this.state.value.draft, e, this.configuration.countPolicy);
  if (!(this.configuration.allowsSuggestions)) goto L_319;
  if (!((this.configuration.field === s.AccountCustomizationField.CustomInstructions))) goto L_319;
  if (!((0 === i.traitTypeIdentifiers.length))) goto L_319;
  goto L_31c;
  // [栈深重同步 1 -> 0]
  a = [];
  null;
  this.state.value;
  this.state.next({draft: o, dirty: (o !== this.configuration.initialValue), maximumLength: e, suggestions: a});
  return;
}

// fn n  args=2 vars=2 closure=1 cpool=0 bc=167B file=custom_instructions_ui/src/CustomInstructionsController
// args: i, t
// closure: s
function {
  if (!((i !== s.AccountCustomizationField.CustomInstructions))) goto L_4d;
  return 1500;
  return Math.min(5000, Math.max(1500, t));
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=8 bc=242B file=custom_instructions_ui/src/CustomInstructionsController
// args: require, module, exports
// locals: i, t, s, e, CustomInstructionsController, <class_fields_init>, CustomInstructionsController#1, n
function {
  n = function n;
  let CustomInstructionsController#1;
  let e;
  let s;
  let t;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CustomInstructionsController = undefined;
  i = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("oai_ui/src/components/CharacterCounter");
  s = require("oai_platform_services/src/AccountCustomizations");
  e = require("valdi_rxjs/src/BehaviorSubject");
  let CustomInstructionsController;
  let <class_fields_init>;
  class CustomInstructionsController extends undefined { ... }
  <proto:CustomInstructionsController>.updateDraft = function <atom:0>;
  <proto:CustomInstructionsController>.consumeSuggestion = function <atom:0>;
  <proto:CustomInstructionsController>.finishEditing = function <atom:0>;
  <proto:CustomInstructionsController>.requestDismiss = function <atom:0>;
  <proto:CustomInstructionsController>.dispose = function <atom:0>;
  <proto:CustomInstructionsController>.receiveNativeState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CustomInstructionsController>;
  CustomInstructionsController = function <atom:0>;
  // close_loc <class_fields_init>
  CustomInstructionsController#1 = function <atom:0>;
  exports.CustomInstructionsController = CustomInstructionsController#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=custom_instructions_ui/src/CustomInstructionsController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
