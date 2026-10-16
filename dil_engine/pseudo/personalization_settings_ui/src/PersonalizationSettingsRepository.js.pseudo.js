// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
function {
  e.Normal = 0;
  e[0] = "Normal";
  e.Saving = 1;
  e[1] = "Saving";
  e.Succeeded = 2;
  e[2] = "Succeeded";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=87B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("Personalization customization save failed");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=66B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// closure: this
function {
  this.customizations = e;
  if (!((false === e.enabled))) goto L_41;
  this.showsCustomizationToggle = true;
  true;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// closure: this
function {
  return this.receiveSettings(e);   // tail call
}

// fn <atom:0>  args=1 vars=9 closure=2 cpool=0 bc=91B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: <atom:0>
// locals: e, s, t, i, r, a, o, n
// closure: this, m
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  return this.makeState(e, s, t, i, r, m, a, o, n);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: this
function {
  return this.loadCustomizations();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// closure: this
function {
  return this.submitSettingUpdate(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// closure: this
function {
  return this.submitRichResponsesUpdate(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
function {
  return e.richResponsesFailure;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=83B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// closure: d, g
function {
  if (!((undefined === e))) goto L_2a;
  return d.EMPTY;
  return g.timer(3000);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=150B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: this
function {
  null;
  this.requests.value;
  this.requests.next({richResponsesFailure: undefined});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// closure: this
function {
  return this.submitCustomizationActivation(e);   // tail call
}

// fn <atom:0>  args=4 vars=11 closure=21 cpool=11 bc=2937B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: s, r, a, n
// locals: h, v, b, m, f, R, this
// closure: e, d, g, <class_fields_init>, c, u, o, C, i, E, p, t, z, T, l, y, S, A, F, q, x
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let R;
  let f;
  let m;
  let b;
  let v;
  let h;
  this.editor = r;
  this.platformServices = a;
  this.subscriptions = new c.Subscription();
  this.refreshRequests = new u.Subject();
  this.settingRequests = new u.Subject();
  this.richResponseRequests = new u.Subject();
  this.activationRequests = new u.Subject();
  this.lifetime = new u.Subject();
  this.requests = new o.BehaviorSubject({saving: false, saveState: C.Normal, updatingSetting: false});
  this.showsCustomizationToggle = false;
  this.requestedSettingsRefresh = false;
  this.reportSaveFailure = function <atom:0>;
  this.settingsService = i.accountSettingsFor(a);
  this.richResponseSettings = E.eligibleRichResponseSettingsFor(a);
  if (!((undefined === this.richResponseSettings))) goto L_2b0;
  goto L_2f8;
  // [栈深重同步 1 -> 0]
  h = i.observeRichResponses(this.richResponseSettings);
  v = t.observeAccountCustomizations(s).pipe(z.tap(function <atom:0>));
  if (!((undefined === this.settingsService))) goto L_3bb;
  goto L_44e;
  // [栈深重同步 1 -> 0]
  b = i.observeAccountSettings(this.settingsService).pipe(z.tap(function <atom:0>));
  m = E.readReferencePhotosEligibility(a.experimentService);
  if (!(m)) goto L_4c4;
  goto L_4ea;
  // [栈深重同步 1 -> 0]
  f = p.of(undefined);
  if (!(E.isPersonalizationPetsEnabled(a.experimentService))) goto L_55d;
  goto L_583;
  // [栈深重同步 1 -> 0]
  R = p.of(undefined);
  this.state = l.combineLatest([v, r.fields, b, r.state, this.requests, f, R, h]).pipe(y.map(function <atom:0>), S.distinctUntilChanged(A), F.takeUntil(this.lifetime));
  this.subscriptions.add(this.refreshRequests.pipe(q.exhaustMap(function <atom:0>)).subscribe());
  this.subscriptions.add(this.settingRequests.pipe(q.exhaustMap(function <atom:0>)).subscribe());
  this.subscriptions.add(this.richResponseRequests.pipe(q.exhaustMap(function <atom:0>)).subscribe());
  this.subscriptions.add(this.requests.pipe(y.map(function <atom:0>), S.distinctUntilChanged(), x.switchMap(function <atom:0>)).subscribe(function <atom:0>));
  this.subscriptions.add(this.activationRequests.pipe(q.exhaustMap(function <atom:0>)).subscribe());
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=245B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// locals: this
function {
  this = this;
  if (!((undefined === this.editor.repository.state.value.failure))) goto L_f4;
  this.refreshRequests.next();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=254B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// locals: this
// closure: a
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_fd;
  this.subscriptions.add(a.recordPersonalizationImpression(this.platformServices).subscribe());
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=336B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// locals: this
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_14f;
  if ((this.requests.value.saving)) goto L_14f;
  if (!((this.customizations == null))) goto L_e1;
  this.customizations;
  goto L_102;
  if (((undefined.enabled === e))) goto L_14f;
  this.activationRequests.next(e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=673B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e, i
// locals: this
// closure: t, r, s
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_2a0;
  if (!((e === t.AccountCustomizationField.PersonalityType))) goto L_fd;
  r.trackAnalyticsEvent(this.platformServices, {category: "Customizations", name: "Select Personality", key: "select_personality"});
  if (!((this.editor.saveBehavior === s.CustomInstructionsSaveBehavior.Automatic))) goto L_227;
  goto L_27a;
  // [栈深重同步 1 -> 0]
  this.editor.stage({field: e, value: i});
  this.clearSaveFailure();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=488B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e, t
// locals: i, this
// closure: s
function {
  this = this;
  let i;
  if (!(this.subscriptions.closed)) goto L_4b;
  return;
  i = {traitKey: e, levelKey: t};
  if (!((this.editor.saveBehavior === s.CustomInstructionsSaveBehavior.Automatic))) goto L_178;
  goto L_1c1;
  // [栈深重同步 1 -> 0]
  this.editor.stageTrait(i);
  this.clearSaveFailure();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=198B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// locals: this
function {
  this = this;
  if (!(this.subscriptions.closed)) goto L_7f;
  return Promise.reject(new Error("Personalization is unavailable"));
  return this.editor.commitPending();
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=645B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// locals: this
// closure: r
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_284;
  if ((this.requests.value.saving)) goto L_284;
  if ((this.editor.state.value.saving)) goto L_284;
  if ((!this.editor.hasPendingUpdates)) goto L_284;
  r.trackAnalyticsEvent(this.platformServices, {category: "Customizations", name: "Update Instruction Fields", key: "update_fields"});
  this.subscriptions.add(this.submitCustomizationChanges().subscribe());
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=197B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e, s
// locals: this
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_c4;
  if (((undefined === this.settingsService))) goto L_c4;
  this.settingRequests.next({key: e, value: s});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=185B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// locals: this
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_b8;
  if (((undefined === this.richResponseSettings))) goto L_b8;
  this.richResponseRequests.next(e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=370B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// locals: e, this
// closure: i
function {
  this = this;
  let e;
  if ((this.subscriptions.closed)) goto L_70;
  if (!((undefined === this.settingsService))) goto L_73;
  return;
  e = this.requests.value.pendingSetting;
  if (!((undefined !== e))) goto L_12a;
  goto L_171;
  // [栈深重同步 1 -> 0]
  i.refreshAccountSettings(this.settingsService);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: this
function {
  return this.submitCustomizationChanges();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=265B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: this, C, d
function {
  null;
  this.requests.value;
  this.requests.next({saving: false, saveState: C.Normal});
  this.reportSaveFailure();
  return d.EMPTY;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=2 bc=1371B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// locals: this
// closure: C, d, s, v, m, b
function {
  this = this;
  if (!((undefined !== this.editor.repository.state.value.failure))) goto L_43d;
  if (!((this.editor.saveBehavior === s.CustomInstructionsSaveBehavior.ExplicitSave))) goto L_3ae;
  if (!(this.editor.repository.hasFailedUpdates)) goto L_3ae;
  null;
  this.requests.value;
  this.requests.next({saving: true, saveState: C.Saving});
  goto L_55a;
  // [栈深重同步 1 -> 0]
  goto L_55a;
  // [栈深重同步 1 -> 0]
  if (!((this.editor.saveBehavior === s.CustomInstructionsSaveBehavior.Automatic))) goto L_535;
  goto L_55a;
  // [栈深重同步 1 -> 0]
  this.save();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=644B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// locals: this
function {
  this = this;
  if ((this.subscriptions.closed)) goto L_283;
  this.lifetime.next();
  this.lifetime.complete();
  this.subscriptions.unsubscribe();
  this.refreshRequests.complete();
  this.settingRequests.complete();
  this.richResponseRequests.complete();
  this.activationRequests.complete();
  this.requests.complete();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=291B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// locals: this
// closure: i
function {
  this = this;
  if ((this.requestedSettingsRefresh)) goto L_122;
  if (((undefined !== e.settings))) goto L_122;
  if ((e.loading)) goto L_122;
  if (((undefined !== e.failure))) goto L_122;
  if (((undefined === this.settingsService))) goto L_122;
  this.requestedSettingsRefresh = true;
  i.refreshAccountSettings(this.settingsService);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// closure: t
function {
  return (e.field === t.AccountCustomizationField.PersonalityType);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// closure: t
function {
  return (e.field === t.AccountCustomizationField.CustomInstructions);
}

// fn <atom:0>  args=9 vars=10 closure=1 cpool=2 bc=1159B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e, s, i, r, a, o, n, u, c
// locals: this
// closure: t
function {
  this = this;
  if (!((e.personalityTypes == null))) goto L_2d;
  e.personalityTypes;
  if (!((e.traitTypes == null))) goto L_5c;
  e.traitTypes;
  if (!((s.find(function <atom:0>) == null))) goto L_b7;
  s.find(function <atom:0>);
  goto L_d8;
  if (!((undefined.value == null))) goto L_e2;
  undefined.value;
  if (!((s.find(function <atom:0>) == null))) goto L_116;
  s.find(function <atom:0>);
  goto L_137;
  if (!((undefined.value == null))) goto L_13d;
  undefined.value;
  if (!((i == null))) goto L_1db;
  i;
  goto L_1fc;
  if (!((i == null))) goto L_20a;
  i;
  goto L_22b;
  if (!((undefined.loading == null))) goto L_232;
  undefined.loading;
  if ((false)) goto L_25a;
  if (!((a.pendingRichResponses == null))) goto L_28b;
  a.pendingRichResponses;
  if ((a.saving)) goto L_355;
  if (!((a.saveFailure == null))) goto L_3f7;
  a.saveFailure;
  if (((undefined !== a.pendingSetting))) goto L_452;
  if (!((i == null))) goto L_430;
  i;
  goto L_451;
  if (!((undefined === undefined.settings))) goto L_480;
  if (!((i == null))) goto L_45d;
  i;
  goto L_481;
  goto L_481;
  // [栈深重同步 2 -> 1]
  return {personalityTypes: [], traitTypes: [], selectedPersonalityTraits: r.selectedPersonalityTraits, personality: "default", customInstructions: "", customizationsEnabled: (false !== e.enabled), customizationsLoading: e.loading, showsCustomizationToggle: this.showsCustomizationToggle, referencePhotosEligible: o, referencePhotos: n, petSelection: u, settings: undefined.settings, settingsLoading: a.updatingSetting, richResponsesEnabled: c, richResponsesSaving: (undefined !== a.pendingRichResponses), richResponsesFailure: a.richResponsesFailure, dirty: r.dirty, saving: r.saving, saveState: a.saveState, loadFailure: a.loadFailure, saveFailure: r.saveFailure, settingFailure: undefined};
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=292B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: this, v
function {
  null;
  this.requests.value;
  this.requests.next({loadFailure: undefined});
  return v.from(this.editor.repository.refresh());   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=214B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// closure: this, d
function {
  null;
  this.requests.value;
  if (!((e instanceof Error))) goto L_98;
  goto L_a8;
  // [栈深重同步 4 -> 3]
  this.requests.next({loadFailure: new Error(String(e))});
  return d.EMPTY;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=2 bc=116B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// locals: this
// closure: v, d, h, b
function {
  this = this;
  return h.defer(function <atom:0>).pipe(b.catchError(function <atom:0>));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=236B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: this, s, v, i, t
function {
  null;
  this.requests.value;
  this.requests.next({pendingRichResponses: s, richResponsesFailure: undefined});
  return v.from(i.setRichResponsesEnabled(t, s));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=169B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// closure: this
function {
  if (!(!e)) goto L_13;
  throw new Error("Could not update setting");
  null;
  this.requests.value;
  this.requests.next({pendingRichResponses: undefined});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=293B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: e, this, d
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("Could not update rich responses setting");
  null;
  this.requests.value;
  this.requests.next({pendingRichResponses: undefined, richResponsesFailure: new Error("Could not update setting")});
  return d.EMPTY;
}

// fn <atom:0>  args=1 vars=3 closure=7 cpool=3 bc=238B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: s
// locals: t, this
// closure: v, i, e, d, h, z, b
function {
  this = this;
  let t;
  t = this.richResponseSettings;
  if (!((undefined === t))) goto L_54;
  return d.EMPTY;
  return h.defer(function <atom:0>).pipe(z.tap(function <atom:0>), b.catchError(function <atom:0>));
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=226B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// closure: this, s
function {
  if (!(!e.loading)) goto L_e1;
  if (((undefined !== e.failure))) goto L_e1;
  return (this.settingValue(e.settings, s.key) === s.value);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: a
function {
  return a.unsubscribe();   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=8 cpool=2 bc=858B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// locals: a, o
// closure: this, s, i, t, R, f, P, r
function {
  let a;
  null;
  this.requests.value;
  this.requests.next({updatingSetting: true, pendingSetting: s});
  a = i.observeAccountSettings(t).pipe(R.skip(1), f.filter(function <atom:0>), P.take(1)).subscribe(e);
  try { // catch -> L_326
  i.updateAccountSetting(t, s.key, s.value);
  if (!((s.key === i.AccountSettingKey.InstantAnswers))) goto L_322;
  if (!(s.value)) goto L_2e2;
  goto L_2e7;
  // [栈深重同步 4 -> 3]
  if (!(s.value)) goto L_317;
  goto L_31c;
  // [栈深重同步 4 -> 3]
  r.trackAnalyticsEvent(this.platformServices, {category: "Memory", name: "Instant Answers Disabled", key: "instant_answers_disabled"});
  <?>;
  goto L_357;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_356
  e.error(o);
  <?>;
  goto L_357;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=198B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// closure: this, s
function {
  null;
  this.requests.value;
  if (!((undefined === e.failure))) goto L_bc;
  goto L_bd;
  // [栈深重同步 4 -> 3]
  this.requests.next({updatingSetting: false, pendingSetting: s});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=282B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: s
// closure: e, this, d
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Failed to update an account personalization setting", s);
  null;
  this.requests.value;
  this.requests.next({updatingSetting: false, pendingSetting: undefined});
  return d.EMPTY;
}

// fn <atom:0>  args=1 vars=3 closure=10 cpool=3 bc=241B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: s
// locals: t, this
// closure: i, R, f, P, r, e, d, n, z, b
function {
  this = this;
  let t;
  t = this.settingsService;
  if (!((undefined === t))) goto L_54;
  return d.EMPTY;
  return new n.Observable(function <atom:0>).pipe(z.tap(function <atom:0>), b.catchError(function <atom:0>));
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=462B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e, s
// closure: i
function {
  if (!((s === i.AccountSettingKey.InstantAnswers))) goto L_74;
  if (!((e == null))) goto L_52;
  e;
  return undefined;
  // [栈深重同步 1 -> 2]
  return <?>.instantAnswersEnabled;
  if (!((s === i.AccountSettingKey.TaskSuggestions))) goto L_e7;
  if (!((e == null))) goto L_c5;
  e;
  return undefined;
  // [栈深重同步 1 -> 2]
  return <?>.taskSuggestionsEnabled;
  if (!((s === i.AccountSettingKey.FileLibraryAutoReference))) goto L_15a;
  if (!((e == null))) goto L_138;
  e;
  return undefined;
  // [栈深重同步 1 -> 2]
  return <?>.fileLibraryAutoReference;
  if (!((s === i.AccountSettingKey.ImageGenHoldoutOptIn))) goto L_1cd;
  if (!((e == null))) goto L_1ab;
  e;
  return undefined;
  // [栈深重同步 1 -> 2]
  return <?>.imageGenHoldoutOptIn;
  s;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=305B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: this, C, v
function {
  null;
  this.requests.value;
  this.requests.next({saving: true, saveState: C.Saving, saveFailure: undefined});
  return v.from(this.editor.commitPending());   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=182B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: this, C
function {
  null;
  this.requests.value;
  return this.requests.next({saveState: C.Succeeded});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=76B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: g, _
function {
  return g.timer(_.navigationSaveFeedbackDurationMs());   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=189B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: this, C
function {
  null;
  this.requests.value;
  return this.requests.next({saving: false, saveState: C.Normal});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=227B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: this, C, d
function {
  null;
  this.requests.value;
  this.requests.next({saving: false, saveState: C.Normal});
  return d.EMPTY;
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=5 bc=233B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// locals: this
// closure: C, v, g, _, d, h, z, m, b
function {
  this = this;
  return h.defer(function <atom:0>).pipe(z.tap(function <atom:0>), m.concatMap(function <atom:0>), z.tap(function <atom:0>), b.catchError(function <atom:0>));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=300B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: this, v, e
function {
  null;
  this.requests.value;
  this.requests.next({saving: true, saveFailure: undefined});
  return v.from(this.editor.repository.setEnabled(e));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=157B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: this
function {
  null;
  this.requests.value;
  this.requests.next({saving: false, saveFailure: undefined});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=194B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// closure: this, d
function {
  null;
  this.requests.value;
  this.requests.next({saving: false, saveFailure: undefined});
  return d.EMPTY;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=3 bc=155B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e
// locals: this
// closure: v, d, h, z, b
function {
  this = this;
  return h.defer(function <atom:0>).pipe(z.tap(function <atom:0>), b.catchError(function <atom:0>));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=261B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// locals: this
function {
  this = this;
  if (!((undefined !== this.requests.value.saveFailure))) goto L_104;
  null;
  this.requests.value;
  this.requests.next({saveFailure: undefined});
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=213B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e, t
// closure: s
function {
  if (!((e.traitKey === s.selectedPersonalityTraits[t].traitKey))) goto L_d4;
  return (e.levelKey === s.selectedPersonalityTraits[t].levelKey);
}

// fn A  args=2 vars=2 closure=0 cpool=1 bc=2142B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: e, s
function {
  if (!((e.personalityTypes === s.personalityTypes))) goto L_85d;
  if (!((e.traitTypes === s.traitTypes))) goto L_85d;
  if (!((e.personality === s.personality))) goto L_85d;
  if (!((e.customInstructions === s.customInstructions))) goto L_85d;
  if (!((e.customizationsEnabled === s.customizationsEnabled))) goto L_85d;
  if (!((e.customizationsLoading === s.customizationsLoading))) goto L_85d;
  if (!((e.showsCustomizationToggle === s.showsCustomizationToggle))) goto L_85d;
  if (!((e.referencePhotosEligible === s.referencePhotosEligible))) goto L_85d;
  if (!((e.petSelection === s.petSelection))) goto L_85d;
  if (!((e.referencePhotos == null))) goto L_2d6;
  e.referencePhotos;
  goto L_2f7;
  if (!((s.referencePhotos == null))) goto L_321;
  s.referencePhotos;
  goto L_342;
  if (!((undefined.loading === undefined.loading))) goto L_85d;
  if (!((e.referencePhotos == null))) goto L_374;
  e.referencePhotos;
  goto L_395;
  if (!((s.referencePhotos == null))) goto L_3bf;
  s.referencePhotos;
  goto L_3e0;
  if (!((undefined.faceThumbnailUrl === undefined.faceThumbnailUrl))) goto L_85d;
  if (!((e.referencePhotos == null))) goto L_412;
  e.referencePhotos;
  goto L_433;
  if (!((s.referencePhotos == null))) goto L_45d;
  s.referencePhotos;
  goto L_47e;
  if (!((undefined.fullBodyThumbnailUrl === undefined.fullBodyThumbnailUrl))) goto L_85d;
  if (!((e.settings === s.settings))) goto L_85d;
  if (!((e.settingsLoading === s.settingsLoading))) goto L_85d;
  if (!((e.richResponsesEnabled === s.richResponsesEnabled))) goto L_85d;
  if (!((e.richResponsesSaving === s.richResponsesSaving))) goto L_85d;
  if (!((e.richResponsesFailure === s.richResponsesFailure))) goto L_85d;
  if (!((e.dirty === s.dirty))) goto L_85d;
  if (!((e.saving === s.saving))) goto L_85d;
  if (!((e.saveState === s.saveState))) goto L_85d;
  if (!((e.loadFailure === s.loadFailure))) goto L_85d;
  if (!((e.saveFailure === s.saveFailure))) goto L_85d;
  if (!((e.settingFailure === s.settingFailure))) goto L_85d;
  if (!((e.selectedPersonalityTraits.length === s.selectedPersonalityTraits.length))) goto L_85d;
  return e.selectedPersonalityTraits.every(function <atom:0>);
}

// fn <atom:0>  args=3 vars=38 closure=0 cpool=24 bc=710B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// args: require, module, exports
// locals: e, s, t, i, r, a, o, n, u, c, l, h, d, v, p, g, b, m, S, q, f, y, R, x, P, F, z, E, T, _, C, PersonalizationSettingsRepository, <class_fields_init>, PersonalizationSettingsRepository#1, A
function {
  A = function A;
  let PersonalizationSettingsRepository#1;
  let _;
  let T;
  let E;
  let z;
  let F;
  let P;
  let x;
  let R;
  let y;
  let f;
  let q;
  let S;
  let m;
  let b;
  let g;
  let p;
  let v;
  let d;
  let h;
  let l;
  let c;
  let u;
  let n;
  let o;
  let a;
  let r;
  let i;
  let t;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PersonalizationSaveState = undefined;
  exports.PersonalizationSettingsRepository = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  s = require("custom_instructions_ui/src/CustomInstructionsModels");
  t = require("oai_platform_services/src/AccountCustomizations");
  i = require("oai_platform_services/src/AccountSettings");
  r = require("oai_platform_services/src/OAIAnalyticsService");
  a = require("./PersonalizationAnalytics");
  o = require("valdi_rxjs/src/BehaviorSubject");
  n = require("valdi_rxjs/src/Observable");
  u = require("valdi_rxjs/src/Subject");
  c = require("valdi_rxjs/src/Subscription");
  l = require("valdi_rxjs/src/observable/combineLatest");
  h = require("valdi_rxjs/src/observable/defer");
  d = require("valdi_rxjs/src/observable/empty");
  v = require("valdi_rxjs/src/observable/from");
  p = require("valdi_rxjs/src/observable/of");
  g = require("valdi_rxjs/src/observable/timer");
  b = require("valdi_rxjs/src/operators/catchError");
  m = require("valdi_rxjs/src/operators/concatMap");
  S = require("valdi_rxjs/src/operators/distinctUntilChanged");
  q = require("valdi_rxjs/src/operators/exhaustMap");
  f = require("valdi_rxjs/src/operators/filter");
  y = require("valdi_rxjs/src/operators/map");
  R = require("valdi_rxjs/src/operators/skip");
  x = require("valdi_rxjs/src/operators/switchMap");
  P = require("valdi_rxjs/src/operators/take");
  F = require("valdi_rxjs/src/operators/takeUntil");
  z = require("valdi_rxjs/src/operators/tap");
  E = require("./PersonalizationAvailability");
  T = require("./PersonalizationSettingsModels");
  _ = require("oai_ui/src/NavigationSaveAction");
  if ((C)) goto L_1f3;
  C = {};
  exports.PersonalizationSaveState = {};
  !function <atom:0>({});
  let PersonalizationSettingsRepository;
  let <class_fields_init>;
  class PersonalizationSettingsRepository extends undefined { ... }
  <proto:PersonalizationSettingsRepository>.refreshCustomizations = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.recordAppearance = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.setCustomizationsEnabled = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.updateField = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.selectTrait = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.commitPending = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.save = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.updateSetting = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.setRichResponsesEnabled = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.retrySetting = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.retryCustomization = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.dispose = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.receiveSettings = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.makeState = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.loadCustomizations = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.submitRichResponsesUpdate = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.submitSettingUpdate = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.settingValue = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.submitCustomizationChanges = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.submitCustomizationActivation = function <atom:0>;
  <proto:PersonalizationSettingsRepository>.clearSaveFailure = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PersonalizationSettingsRepository>;
  PersonalizationSettingsRepository = function <atom:0>;
  // close_loc <class_fields_init>
  PersonalizationSettingsRepository#1 = function <atom:0>;
  exports.PersonalizationSettingsRepository = PersonalizationSettingsRepository#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=personalization_settings_ui/src/PersonalizationSettingsRepository
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
