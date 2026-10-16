// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
function {
  e.Default = "default";
  e.Simple = "simple";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=375B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: e
// closure: this, t, Pe, R
function {
  let e;
  e = this.state.petSelection;
  if (!((e == null))) goto L_9f;
  e;
  goto L_c0;
  if (!((undefined.spriteSheetUrl == null))) goto L_f1;
  undefined.spriteSheetUrl;
  if (!((e == null))) goto L_d0;
  e;
  goto L_f1;
  t.beginComponent(Pe.PersonalizationPetThumbnail, R, undefined.selectedPetId, undefined);
  if (!((e == null))) goto L_12a;
  e;
  goto L_14b;
  t.setViewModelProperty("src", undefined.spriteSheetUrl);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=136B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this
function {
  this.hasLayout = true;
  this.recordAppearance();
  if (!((this.search.onLayout == null))) goto L_84;
  this.search.onLayout;
  this.search;
  goto L_87;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=150B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: this, G
function {
  if (!((this.repository == null))) goto L_2b;
  this.repository;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.updateField(G.AccountCustomizationField.PersonalityType, e);
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=257B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this, G, ve
function {
  this.openOptionPicker("personalization-settings-personality-options", ve.default.personalizationSettingsPersonality(), this.state.personalityTypes, this.state.personality, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=151B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: this, K
function {
  if (!((this.repository == null))) goto L_2c;
  this.repository;
  goto L_96;
  undefined.updateSetting(K.AccountSettingKey.InstantAnswers, e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=117B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: this, we
function {
  if (!((this.repository == null))) goto L_2c;
  this.repository;
  goto L_74;
  undefined.setRichResponsesEnabled((e === we.Default));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=330B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this, ve, we
function {
  if (!(this.state.richResponsesEnabled)) goto L_100;
  goto L_122;
  // [栈深重同步 6 -> 5]
  this.openOptionPicker("personalization-settings-visual-answers-options", ve.default.personalizationSettingsVisualAnswers(), this.visualAnswersOptions, we.Simple, this.selectVisualAnswers);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=82B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: this
function {
  if (!((this.repository == null))) goto L_2c;
  this.repository;
  goto L_51;
  undefined.setCustomizationsEnabled(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=182B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: t
// closure: ne, e
function {
  try { // catch -> L_55
  ne.platformBrowser.openURL("https://help.openai.com/articles/8096356-chatgpt-custom-instructions-faq");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_b5
  if (!(e.isLoggingEnabled)) goto L_b2;
  console.warn("Personalization could not open its customization help URL", t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=151B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: this, K
function {
  if (!((this.repository == null))) goto L_2c;
  this.repository;
  goto L_96;
  undefined.updateSetting(K.AccountSettingKey.TaskSuggestions, e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=151B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: this, K
function {
  if (!((this.repository == null))) goto L_2c;
  this.repository;
  goto L_96;
  undefined.updateSetting(K.AccountSettingKey.FileLibraryAutoReference, e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=151B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: this, K
function {
  if (!((this.repository == null))) goto L_2c;
  this.repository;
  goto L_96;
  undefined.updateSetting(K.AccountSettingKey.ImageGenHoldoutOptIn, e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=157B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this
function {
  null;
  this.state;
  this.setState({advancedExpanded: !this.state.advancedExpanded});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=165B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: ie, this
function {
  if (!(ie.isVersionAtLeast(44))) goto L_a4;
  if (!((this.localContext == null))) goto L_57;
  this.localContext;
  goto L_a4;
  if (!((undefined.host == null))) goto L_80;
  undefined.host;
  goto L_a4;
  undefined.openPets();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=74B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: H, this
function {
  H.openReferencePhotos(this.localContext);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=275B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: e, t, i
// closure: this
function {
  let i;
  let t;
  let e;
  e = this.customInstructionsController;
  if (!((this.localContext == null))) goto L_5a;
  this.localContext;
  goto L_7b;
  t = undefined.navigator;
  if (!((this.localContext == null))) goto L_a8;
  this.localContext;
  goto L_c9;
  i = undefined.platformServices;
  if (!((undefined !== e))) goto L_112;
  if (!((undefined !== t))) goto L_112;
  if (!((undefined !== i))) goto L_112;
  e.openEditor(t, i);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=81B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this
function {
  if (!((this.repository == null))) goto L_2c;
  this.repository;
  goto L_50;
  undefined.save();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: e
function {
  return e.retryCustomization();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t
function {
  return t.discardFailed();   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=2 bc=885B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: e, t, i
// closure: this, _, L
function {
  let t;
  let e;
  e = this.repository;
  t = this.customInstructionsController;
  if (!((undefined !== e))) goto L_373;
  if (!((undefined !== t))) goto L_373;
  if (!(!this.savingOnBack)) goto L_373;
  if (!((t.saveBehavior !== _.CustomInstructionsSaveBehavior.ExplicitSave))) goto L_34b;
  this.savingOnBack = true;
  try { // catch -> L_284
  (await e.commitPending());
  if (((this.repository !== e))) goto L_278;
  if ((t.hasPendingUpdates)) goto L_278;
  if ((t.state.value.saving)) goto L_278;
  if (!((this.localContext == null))) goto L_229;
  this.localContext;
  goto L_278;
  if (!((undefined.navigator == null))) goto L_252;
  undefined.navigator;
  goto L_278;
  undefined.pop(true);
  <?>;
  // gosub (finally 块) 826
  undefined;
  goto L_373;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_334
  if (!((this.repository === e))) goto L_329;
  this.presentFailure(L.default.customInstructionsSaveErrorMessage(), function <atom:0>, function <atom:0>);
  <?>;
  // gosub (finally 块) 826
  undefined;
  goto L_373;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 826
  throw <?>;
  this.savingOnBack = false;
  // ret (finally 块) 
  goto L_373;
  this.confirmDiscardChanges();
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=326B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this
function {
  if (((undefined === this.repository))) goto L_145;
  if ((this.state.saving)) goto L_145;
  if (!((this.customInstructionsController == null))) goto L_a5;
  this.customInstructionsController;
  goto L_c9;
  undefined.discardFailed();
  if (!((this.localContext == null))) goto L_f6;
  this.localContext;
  goto L_145;
  if (!((undefined.navigator == null))) goto L_11f;
  undefined.navigator;
  goto L_145;
  undefined.pop(true);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=299B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: this, t
function {
  if (!((this.repository === t))) goto L_12a;
  if (!(("discard" === e.selectedActionId))) goto L_12a;
  if (!((this.customInstructionsController == null))) goto L_8a;
  this.customInstructionsController;
  goto L_ae;
  undefined.discardFailed();
  if (!((this.localContext == null))) goto L_db;
  this.localContext;
  goto L_12a;
  if (!((undefined.navigator == null))) goto L_104;
  undefined.navigator;
  goto L_12a;
  undefined.pop(true);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: t
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Could not present the personalization discard alert", t);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=2 bc=692B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: t, i
// closure: this, e, re, ve, ye
function {
  let t;
  t = this.repository;
  if (!((undefined !== this.repository))) goto L_2b3;
  if (!(!this.state.saving)) goto L_2b3;
  try { // catch -> L_252
  re.platformAlert.present({title: ve.default.personalizationSettingsUnsavedChanges(), message: ye.personalizationUnsavedChangesMessage(), actions: [{id: "keep-editing", title: ve.default.personalizationSettingsKeepEditing(), role: 1}, {id: "discard", title: ve.default.personalizationSettingsDiscardChanges(), role: 2}]}).then(function <atom:0>, function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_2b2
  if (!(e.isLoggingEnabled)) goto L_2af;
  console.warn("Could not present the personalization discard alert", i);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=18 cpool=19 bc=684B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this, this.active_func, new.target, arguments
// closure: t, Pe, R, G, ve, K, we, ne, e, ie, H, _, L, re, ye, <class_fields_init>, me, Ce
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
  this.state = {personalityTypes: [], traitTypes: [], selectedPersonalityTraits: [], personality: "default", customInstructions: "", customizationsEnabled: true, customizationsLoading: true, showsCustomizationToggle: false, referencePhotosEligible: false, settingsLoading: false, richResponsesSaving: false, dirty: false, saving: false, saveState: me.PersonalizationSaveState.Normal, advancedExpanded: false};
  this.layout = Ce.resolveSettingsTheme().form;
  this.hasLayout = false;
  this.pageVisible = true;
  this.reportedAppearance = false;
  this.availability = {showsFastAnswers: false, showsSuggestedPrompts: false, showsLibrarySearch: false, usesImprovedMemory: false};
  this.renderPetThumbnail = function <atom:0>;
  this.onPageLayout = function <atom:0>;
  this.openPersonalityPicker = function <atom:0>;
  this.updateFastAnswers = function <atom:0>;
  this.selectVisualAnswers = function <atom:0>;
  this.openVisualAnswersPicker = function <atom:0>;
  this.updateCustomizationEnabled = function <atom:0>;
  this.openCustomizationHelp = function <atom:0>;
  this.updateSuggestedPrompts = function <atom:0>;
  this.updateLibrarySearch = function <atom:0>;
  this.updateImageGeneration = function <atom:0>;
  this.toggleAdvancedSettings = function <atom:0>;
  this.openPets = function <atom:0>;
  this.openReferencePhotos = function <atom:0>;
  this.openCustomInstructions = function <atom:0>;
  this.saveCustomizations = function <atom:0>;
  this.savingOnBack = false;
  this.handleBack = function <atom:0>;
  this.discardChanges = function <atom:0>;
  this.confirmDiscardChanges = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=78B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this
function {
  if (!((this.repository == null))) goto L_29;
  this.repository;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.retryCustomization();
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=78B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this
function {
  if (!((this.customInstructionsController == null))) goto L_29;
  this.customInstructionsController;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.discardFailed();
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=2 bc=384B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// locals: t
// closure: this, ve
function {
  let t;
  t = this.pageVisible;
  this.pageVisible = (1 === e);
  if (!(this.pageVisible)) goto L_14c;
  if ((t)) goto L_159;
  if (((undefined === this.state.saveFailure))) goto L_159;
  if ((this.savingOnBack)) goto L_159;
  goto L_159;
  // [栈深重同步 1 -> 0]
  this.reportedAppearance = false;
  false;
  this.recordAppearance();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=370B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
// closure: ve, x
function {
  this = this;
  this.search = new x.SettingsSearchHighlight(this, this.viewModel.initialSearchTarget, "personalization-settings-search-highlight");
  this.readFeatureAvailability();
  this.updateCustomInstructionsController();
  this.refreshNavigation();
  if (!((this.localContext == null))) goto L_119;
  this.localContext;
  goto L_171;
  if (!((undefined.navigator == null))) goto L_142;
  undefined.navigator;
  goto L_171;
  if (!((undefined.setPageVisibilityObserver == null))) goto L_16c;
  undefined.setPageVisibilityObserver;
  undefined;
  goto L_171;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=299B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: e, this
// closure: ye
function {
  this = this;
  let e;
  if (!((this.localContext == null))) goto L_2f;
  this.localContext;
  goto L_86;
  if (!((undefined.navigator == null))) goto L_58;
  undefined.navigator;
  goto L_86;
  if (!((undefined.setPageVisibilityObserver == null))) goto L_82;
  undefined.setPageVisibilityObserver;
  undefined;
  goto L_86;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, undefined);
  if (!((this.localContext == null))) goto L_b1;
  this.localContext;
  goto L_d2;
  e = undefined.navigator;
  if (!((undefined !== e))) goto L_104;
  ye.clearPersonalizationPageNavigation(e);
  this.disposeAccountState();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
function {
  this = this;
  this.readFeatureAvailability();
  this.updateCustomInstructionsController();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=488B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this
function {
  this.renderReferencePhotos();
  this.renderCustomizationToggle();
  this.renderStyleSettings();
  if (!((undefined !== this.state.richResponsesEnabled))) goto L_e0;
  this.renderCustomInstructions();
  this.renderPetEntry();
  this.renderFastAnswers();
  this.renderSuggestedPrompts();
  if (!((undefined === this.state.richResponsesEnabled))) goto L_1c1;
  this.renderCustomInstructions();
  this.renderAdvancedSettings();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=1091B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this, t, X, o, le
function {
  t.beginComponent(X.SettingsList, o, undefined, undefined);
  t.setViewModelProperty("scrollRef", this.search.scrollRef);
  t.setViewModelProperty("onLayout", this.onPageLayout);
  if (!(this.showsAdvancedSettings)) goto L_1ea;
  if (!(this.state.advancedExpanded)) goto L_1ea;
  goto L_22d;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("bottomInset", this.layout.listBottomInset);
  t.setViewModelProperty("safeAreaEdges", [le.SafeAreaEdge.Top, le.SafeAreaEdge.Bottom]);
  t.setViewModelProperty("verticalInset", this.layout.listVerticalInset);
  t.setViewModelProperty("sectionGap", this.layout.sectionGap);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  this.renderRichResponsesFailure();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=1 bc=321B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this, t, X, o, le, he, s, ce, Ce, O
function {
  t.beginComponent(he.ValdiUIThemeProvider, s, undefined, undefined);
  if (!(ce.isNativeIOS())) goto L_c7;
  goto L_eb;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("value", O.OPENAI_UI_THEME);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=11 cpool=1 bc=326B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
// closure: t, X, o, le, he, s, ce, Ce, O, q, i
function {
  this = this;
  t.beginComponent(q.OAITheme, i, undefined, undefined);
  t.setViewModelProperty("fill", true);
  t.setViewModelProperty("mode", q.OAIThemeMode.System);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
function {
  return ("scannable" !== e.key);
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=190B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e, t
// closure: this, i, Z
function {
  if ((i)) goto L_2d;
  if (!((0 !== t))) goto L_76;
  goto L_bb;
  // [栈深重同步 4 -> 3]
  return this.renderCharacteristicRow(e, Z.SettingsRowPosition.First);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=222B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: we, this
function {
  return {id: e.key, title: e.label, selected: ((e.key === we.Default) === this.state.richResponsesEnabled)};
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=2 bc=1388B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this, i, Z, we, e, t, J, a, ve
function {
  if (!(i)) goto L_71;
  this.renderPersonalityRow(Z.SettingsRowPosition.First);
  e.forEach(function <atom:0>);
  t.beginComponent(J.SettingsMenuRow, a, undefined, undefined);
  if (((undefined === this.state.settings))) goto L_1ec;
  if ((this.state.richResponsesSaving)) goto L_1ec;
  t.setViewModelProperty("disabled", this.state.settingsLoading);
  t.setViewModelProperty("label", ve.default.personalizationSettingsVisualAnswers());
  if (!(this.state.richResponsesEnabled)) goto L_31d;
  goto L_365;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("value", ve.default.personalizationSettingsVisualAnswersSimple());
  t.setViewModelProperty("actions", this.visualAnswersOptions.map(function <atom:0>));
  t.setViewModelProperty("onSelect", this.selectVisualAnswers);
  t.setViewModelProperty("onFallbackPress", this.openVisualAnswersPicker);
  if ((i)) goto L_4b2;
  if (!((e.length > 0))) goto L_4fb;
  goto L_540;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("position", Z.SettingsRowPosition.Only);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=8 cpool=2 bc=496B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: e, i, this
// closure: Z, we, t, J, a, ve, Q, n
function {
  this = this;
  let i;
  let e;
  if (!((undefined === this.state.richResponsesEnabled))) goto L_9c;
  this.renderPersonality();
  this.renderCharacteristics();
  return;
  e = this.state.traitTypes.filter(function <atom:0>);
  i = (this.state.personalityTypes.length > 0);
  t.beginComponent(Q.SettingsSection, n, undefined, undefined);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=250B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: we, ve
function {
  return [{key: we.Default, label: ve.default.personalizationSettingsVisualAnswersDefault(), description: ""}, {key: we.Simple, label: ve.default.personalizationSettingsVisualAnswersSimple(), description: ""}];
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=473B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t, B, d, N, p, U, ve
function {
  t.beginComponent(B.Icon, d, undefined, undefined);
  t.endComponent();
  t.beginComponent(N.Text, p, undefined, undefined);
  t.setViewModelProperty("typography", U.Typography.FootnoteSemibold);
  t.setViewModelProperty("value", ve.default.personalizationSettingsRichResponsesUpdateFailed());
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=1 bc=475B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t, B, d, N, p, U, ve, de, l, pe, be
function {
  t.beginComponent(de.MaterialSurface, l, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", ve.default.personalizationSettingsRichResponsesUpdateFailed());
  t.setViewModelProperty("material", pe.ControlMaterial.Glass);
  t.setViewModelProperty("style", be.banner);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=13 cpool=1 bc=439B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
// closure: t, B, d, N, p, U, ve, de, l, pe, be, le, r
function {
  this = this;
  if (!((undefined !== this.state.richResponsesFailure))) goto L_1b6;
  t.beginComponent(le.SafeArea, r, undefined, undefined);
  t.setViewModelProperty("edges", [le.SafeAreaEdge.Bottom]);
  t.setViewModelProperty("style", be.bannerOverlay);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=312B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t, Se, h, this
function {
  t.beginComponent(Se.ReferencePhotosRow, h, undefined, undefined);
  t.setViewModelProperty("photos", this.state.referencePhotos);
  t.setViewModelProperty("onPress", this.openReferencePhotos);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=45B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t, Se, h, this
function {
  this.renderSearchTarget("personalization_reference_photo", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=1 bc=517B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
// closure: t, Se, h, H, Q, c, W, ve
function {
  this = this;
  if (!(this.state.referencePhotosEligible)) goto L_204;
  if (!(H.supportsReferencePhotos(this.localContext))) goto L_204;
  t.beginComponent(Q.SettingsSection, c, undefined, undefined);
  t.setViewModelProperty("footerSpans", [{kind: W.InlineTextSpanKind.Text, text: ve.default.personalizationSettingsReferencePhotosDescription()}]);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=655B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t, Y, u, this, ve, Z
function {
  t.beginComponent(Y.SettingsToggleRow, u, undefined, undefined);
  t.setViewModelProperty("checked", this.state.customizationsEnabled);
  t.setViewModelProperty("label", ve.default.personalizationSettingsEnableCustomization());
  t.setViewModelProperty("loading", this.state.saving);
  t.setViewModelProperty("onChange", this.updateCustomizationEnabled);
  t.setViewModelProperty("position", Z.SettingsRowPosition.Only);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=1 bc=364B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
// closure: t, Y, u, ve, Z, Q, g
function {
  this = this;
  if (!(this.state.showsCustomizationToggle)) goto L_16b;
  if (!((undefined !== this.repository))) goto L_16b;
  t.beginComponent(Q.SettingsSection, g, undefined, undefined);
  t.setViewModelProperty("footerSpans", this.customizationFooterSpans());
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=107B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this, Z
function {
  this.renderPersonalityRow(Z.SettingsRowPosition.Only);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=397B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
// closure: Z, t, Q, y
function {
  this = this;
  if (!((undefined !== this.repository))) goto L_18c;
  if (!((0 !== this.state.personalityTypes.length))) goto L_18c;
  t.beginComponent(Q.SettingsSection, y, undefined, undefined);
  t.setViewModelProperty("bottomMargin", this.layout.sectionMargin);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=103B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: this
function {
  return (e.key === this.state.personality);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=148B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: this, G
function {
  if (!((this.repository == null))) goto L_29;
  this.repository;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.updateField(G.AccountCustomizationField.PersonalityType, e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=226B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: this
function {
  return {id: e.key, title: e.label, subtitle: e.description, selected: (e.key === this.state.personality)};
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=2 bc=983B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this, G, t, J, m, ve, e, i, Ce
function {
  t.beginComponent(J.SettingsMenuRow, m, undefined, undefined);
  if ((this.state.saving)) goto L_105;
  t.setViewModelProperty("disabled", !this.state.customizationsEnabled);
  t.setViewModelProperty("label", ve.default.personalizationSettingsPersonality());
  t.setViewModelProperty("onFallbackPress", this.openPersonalityPicker);
  t.setViewModelProperty("onSelect", function <atom:0>);
  t.setViewModelProperty("actions", this.state.personalityTypes.map(function <atom:0>));
  t.setViewModelProperty("position", e);
  if (!((i == null))) goto L_2f6;
  i;
  goto L_317;
  t.setViewModelProperty("value", undefined.label);
  t.setViewModelProperty("valueColor", Ce.resolveSettingsTheme().colors.pickerValue);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=6 cpool=2 bc=156B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// locals: i, this
// closure: G, t, J, m, ve, Ce
function {
  this = this;
  let i;
  i = this.state.personalityTypes.find(function <atom:0>);
  this.renderSearchTarget("personalization_base_style_and_tone", function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=144B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e, t
// closure: this
function {
  return this.renderCharacteristicRow(e, this.rowPosition(t, this.state.traitTypes.length));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=106B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this
function {
  this.state.traitTypes.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=352B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this, t, Q, v, ve
function {
  t.beginComponent(Q.SettingsSection, v, undefined, undefined);
  if (!(this.layout.showsGroupTitle)) goto L_109;
  goto L_10a;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("title", undefined);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=161B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
// closure: t, Q, v, ve
function {
  this = this;
  if (!((undefined !== this.repository))) goto L_a0;
  if (!((0 !== this.state.traitTypes.length))) goto L_a0;
  this.renderSearchTarget("personalization_add_characteristics", function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: t
// closure: e
function {
  return (t.traitKey === e.key);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: s
function {
  return (e.key === s);
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=41B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this, e, s
function {
  return this.openCharacteristicPicker(e, s);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=113B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: t
// closure: this, e
function {
  if (!((this.repository == null))) goto L_29;
  this.repository;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.selectTrait(e.key, t);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=162B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: s
function {
  return {id: e.key, title: e.optionLabel, subtitle: e.description, selected: (e.key === s)};
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=3 bc=885B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this, e, s, t, J, S, i, o
function {
  t.beginComponent(J.SettingsMenuRow, S, e.key, undefined);
  t.setViewModelProperty("accessibilityId", "personalization-settings-characteristic.".concat(e.key));
  if ((this.state.saving)) goto L_19e;
  t.setViewModelProperty("disabled", !this.state.customizationsEnabled);
  t.setViewModelProperty("label", e.label);
  t.setViewModelProperty("onFallbackPress", function <atom:0>);
  t.setViewModelProperty("onSelect", function <atom:0>);
  t.setViewModelProperty("actions", e.levels.map(function <atom:0>));
  t.setViewModelProperty("position", i);
  if (!((o == null))) goto L_328;
  o;
  goto L_349;
  t.setViewModelProperty("value", undefined.optionLabel);
  t.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=3 bc=353B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e, i
// locals: s, o, this
// closure: t, J, S
function {
  this = this;
  let o;
  let s;
  if (!((this.state.selectedPersonalityTraits.find(function <atom:0>) == null))) goto L_79;
  this.state.selectedPersonalityTraits.find(function <atom:0>);
  goto L_9a;
  if (!((undefined.levelKey == null))) goto L_a4;
  undefined.levelKey;
  s = "default";
  o = e.levels.find(function <atom:0>);
  this.renderSearchTarget("personalization_characteristic_".concat(e.key), function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=743B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t, Y, C, this, e, ve, Z
function {
  t.beginComponent(Y.SettingsToggleRow, C, undefined, undefined);
  t.setViewModelProperty("verticalInset", this.layout.toggleVerticalInset);
  if (!((e.instantAnswersEnabled == null))) goto L_115;
  e.instantAnswersEnabled;
  t.setViewModelProperty("checked", true);
  t.setViewModelProperty("label", ve.default.personalizationSettingsFastAnswers());
  t.setViewModelProperty("loading", this.state.settingsLoading);
  t.setViewModelProperty("onChange", this.updateFastAnswers);
  t.setViewModelProperty("position", Z.SettingsRowPosition.Only);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=1 bc=45B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t, Y, C, this, e, ve, Z
function {
  this.renderSearchTarget("personalization_fast_answers", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=8 cpool=1 bc=565B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: e, this
// closure: t, Y, C, ve, Z, Q, P, W
function {
  this = this;
  let e;
  e = this.state.settings;
  if (!(this.availability.showsFastAnswers)) goto L_234;
  if (!((undefined !== this.repository))) goto L_234;
  if (!((undefined !== e))) goto L_234;
  t.beginComponent(Q.SettingsSection, P, undefined, undefined);
  t.setViewModelProperty("footerSpans", [{kind: W.InlineTextSpanKind.Text, text: ve.default.personalizationSettingsFastAnswersDescription()}]);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=743B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t, Y, b, this, e, ve, Z
function {
  t.beginComponent(Y.SettingsToggleRow, b, undefined, undefined);
  t.setViewModelProperty("verticalInset", this.layout.toggleVerticalInset);
  if (!((e.taskSuggestionsEnabled == null))) goto L_115;
  e.taskSuggestionsEnabled;
  t.setViewModelProperty("checked", true);
  t.setViewModelProperty("label", ve.default.personalizationSettingsSuggestedPrompts());
  t.setViewModelProperty("loading", this.state.settingsLoading);
  t.setViewModelProperty("onChange", this.updateSuggestedPrompts);
  t.setViewModelProperty("position", Z.SettingsRowPosition.Only);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=1 bc=45B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t, Y, b, this, e, ve, Z
function {
  this.renderSearchTarget("personalization_task_suggestions", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=8 cpool=1 bc=565B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: e, this
// closure: t, Y, b, ve, Z, Q, w, W
function {
  this = this;
  let e;
  e = this.state.settings;
  if (!(this.availability.showsSuggestedPrompts)) goto L_234;
  if (!((undefined !== this.repository))) goto L_234;
  if (!((undefined !== e))) goto L_234;
  t.beginComponent(Q.SettingsSection, w, undefined, undefined);
  t.setViewModelProperty("footerSpans", [{kind: W.InlineTextSpanKind.Text, text: ve.default.personalizationSettingsSuggestedPromptsDescription()}]);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=1059B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t, $, z, this, L, ve
function {
  t.beginComponent($.SettingsTextEntrySection, z, undefined, undefined);
  if (!(this.showsAdvancedSettings)) goto L_e3;
  goto L_126;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("bottomMargin", this.layout.lastSectionBottomMargin);
  t.setViewModelProperty("topMargin", this.layout.sectionMargin);
  if ((this.state.saving)) goto L_24e;
  t.setViewModelProperty("disabled", !this.state.customizationsEnabled);
  t.setViewModelProperty("label", L.default.customInstructionsTitle());
  t.setViewModelProperty("onPress", this.openCustomInstructions);
  t.setViewModelProperty("placeholder", ve.default.personalizationSettingsCustomInstructionsPlaceholder());
  t.setViewModelProperty("value", this.state.customInstructions);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=1 bc=263B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: e, i, this
// closure: t, $, z, L, ve
function {
  this = this;
  let i;
  let e;
  if (!((this.localContext == null))) goto L_32;
  this.localContext;
  goto L_53;
  e = undefined.navigator;
  if (!((this.localContext == null))) goto L_7e;
  this.localContext;
  goto L_9f;
  i = undefined.platformServices;
  if (!((undefined !== this.customInstructionsController))) goto L_106;
  if (!((undefined !== e))) goto L_106;
  if (!((undefined !== i))) goto L_106;
  this.renderSearchTarget("personalization_custom_instructions", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=298B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
function {
  this = this;
  if ((this.availability.showsLibrarySearch)) goto L_b8;
  if (!((this.state.settings == null))) goto L_96;
  this.state.settings;
  goto L_b7;
  if (!((true === undefined.imageGenHoldoutActive))) goto L_129;
  if (!((undefined !== this.repository))) goto L_129;
  return (undefined !== this.state.settings);
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=569B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t, Y, V, e, ve, this, s
function {
  t.beginComponent(Y.SettingsToggleRow, V, undefined, undefined);
  t.setViewModelProperty("checked", e);
  t.setViewModelProperty("label", ve.default.personalizationSettingsLibrarySearch());
  t.setViewModelProperty("loading", this.state.settingsLoading);
  t.setViewModelProperty("onChange", this.updateLibrarySearch);
  t.setViewModelProperty("position", this.rowPosition(1, s));
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=571B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t, Y, I, i, ve, this, o, s
function {
  t.beginComponent(Y.SettingsToggleRow, I, undefined, undefined);
  t.setViewModelProperty("checked", i);
  t.setViewModelProperty("label", ve.default.personalizationSettingsImageGeneration());
  t.setViewModelProperty("loading", this.state.settingsLoading);
  t.setViewModelProperty("onChange", this.updateImageGeneration);
  t.setViewModelProperty("position", this.rowPosition(o, s));
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=13 cpool=2 bc=1065B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: t, Y, V, e, ve, this, s, I, i, o, j, M, Z
function {
  t.beginComponent(j.SettingsActionRow, M, undefined, undefined);
  t.setViewModelProperty("label", ve.default.personalizationSettingsAdvanced());
  t.setViewModelProperty("onPress", this.toggleAdvancedSettings);
  t.setViewModelProperty("expanded", this.state.advancedExpanded);
  if (!(this.state.advancedExpanded)) goto L_240;
  goto L_285;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("position", Z.SettingsRowPosition.Only);
  t.endComponent();
  if (!(this.state.advancedExpanded)) goto L_371;
  if (!(this.availability.showsLibrarySearch)) goto L_371;
  this.renderSearchTarget("personalization_library_search", function <atom:0>);
  if (!(this.state.advancedExpanded)) goto L_428;
  if (!(this.state.settings.imageGenHoldoutActive)) goto L_428;
  function <atom:0>();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=11 cpool=1 bc=1518B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: e, i, s, o, this
// closure: t, Y, V, ve, I, j, M, Z, Q, f, W
function {
  this = this;
  let o;
  let s;
  let i;
  let e;
  if ((!this.showsAdvancedSettings)) goto L_7d;
  if (!((undefined === this.state.settings))) goto L_80;
  return;
  if (!((this.state.settings.fileLibraryAutoReference == null))) goto L_206;
  this.state.settings.fileLibraryAutoReference;
  if (!(this.availability.usesImprovedMemory)) goto L_19a;
  goto L_1ff;
  // [栈深重同步 1 -> 0]
  if (!((this.state.settings.memoryEnabled == null))) goto L_206;
  this.state.settings.memoryEnabled;
  e = true;
  if (!((this.state.settings.imageGenHoldoutOptIn == null))) goto L_273;
  this.state.settings.imageGenHoldoutOptIn;
  i = false;
  s = ((1 + Number(this.availability.showsLibrarySearch)) + Number((true === this.state.settings.imageGenHoldoutActive)));
  o = (1 + Number(this.availability.showsLibrarySearch));
  t.beginComponent(Q.SettingsSection, f, undefined, undefined);
  t.setViewModelProperty("bottomMargin", this.layout.lastSectionBottomMargin);
  if (!(this.state.advancedExpanded)) goto L_597;
  if (!(this.availability.showsLibrarySearch)) goto L_597;
  goto L_598;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("footerSpans", undefined);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this
function {
  return this.renderPetThumbnail();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=1 bc=864B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this, t, j, k, a, n, s, ve, o, Z
function {
  t.beginComponent(j.SettingsActionRow, k, undefined, undefined);
  t.setViewModelProperty("verticalInset", this.layout.previewVerticalInset);
  t.setViewModelProperty("accessibilityValue", a);
  t.setViewModelProperty("description", a);
  t.setViewModelProperty("appearance", j.SettingsActionRowAppearance.NavigationLink);
  t.setViewModelProperty("label", n);
  if (!(s)) goto L_23b;
  goto L_23c;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("value", undefined);
  if (!(o)) goto L_272;
  goto L_273;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("trailingContent", undefined);
  t.setViewModelProperty("onPress", this.openPets);
  t.setViewModelProperty("position", Z.SettingsRowPosition.Only);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=1 bc=45B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this, t, j, k, a, n, s, ve, o, Z
function {
  this.renderSearchTarget("personalization_work_mode_pet", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=7 closure=9 cpool=1 bc=1346B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: e, i, s, o, n, a, this
// closure: t, j, k, ve, Z, ie, ge, Q, A
function {
  this = this;
  let a;
  let n;
  let o;
  let s;
  let i;
  let e;
  e = false;
  if (!(ie.isVersionAtLeast(44))) goto L_be;
  if (!((this.localContext == null))) goto L_6f;
  this.localContext;
  goto L_b9;
  if (!((undefined.host == null))) goto L_98;
  undefined.host;
  goto L_b9;
  e = (undefined !== undefined.openPets);
  (undefined !== undefined.openPets);
  if ((!e)) goto L_165;
  if (!((this.localContext == null))) goto L_119;
  this.localContext;
  goto L_163;
  if (!((undefined.platformServices == null))) goto L_142;
  undefined.platformServices;
  goto L_163;
  if (!(!ge.isPersonalizationPetsEnabled(undefined.experimentService))) goto L_168;
  return;
  i = this.state.petSelection;
  if (!((i == null))) goto L_1bd;
  i;
  goto L_1de;
  s = ("default" === undefined.selectedPetId);
  if (!((undefined !== i))) goto L_1ed;
  o = !s;
  if (!((i == null))) goto L_1f9;
  i;
  goto L_21a;
  if (!((undefined.displayName == null))) goto L_2ea;
  undefined.displayName;
  if (!(s)) goto L_271;
  goto L_2ea;
  // [栈深重同步 1 -> 0]
  if (!((i == null))) goto L_27c;
  i;
  goto L_29d;
  if (!((undefined.selectedPetId == null))) goto L_2ea;
  undefined.selectedPetId;
  n = ve.default.personalizationSettingsSelectPet();
  if (!((i == null))) goto L_2f7;
  i;
  goto L_318;
  if (!((undefined.description == null))) goto L_3b7;
  undefined.description;
  if (!(o)) goto L_36f;
  goto L_3b7;
  // [栈深重同步 1 -> 0]
  a = ve.default.personalizationSettingsPetDescription();
  t.beginComponent(Q.SettingsSection, A, undefined, undefined);
  t.setViewModelProperty("bottomMargin", this.layout.sectionMargin);
  t.setViewModelProperty("title", ve.default.personalizationSettingsPetSectionTitle());
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=391B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
// closure: W, ve
function {
  this = this;
  return [{kind: W.InlineTextSpanKind.Text, text: "".concat(ve.default.personalizationSettingsCustomizationDescription(), " ")}, {kind: W.InlineTextSpanKind.Link, text: ve.default.personalizationSettingsLearnMore(), onPress: this.openCustomizationHelp}];
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=297B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e, t
// closure: Z
function {
  if (!((1 === t))) goto L_4b;
  return Z.SettingsRowPosition.Only;
  if (!((0 === e))) goto L_96;
  return Z.SettingsRowPosition.First;
  if (!((e === (t - 1)))) goto L_e3;
  return Z.SettingsRowPosition.Last;
  return Z.SettingsRowPosition.Middle;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=215B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e, t
// locals: this
function {
  this = this;
  if (!(!this.state.customizationsLoading)) goto L_d2;
  this.search.renderTarget(e, !this.state.settingsLoading, t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=159B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
// closure: ge
function {
  this = this;
  if (!((this.localContext == null))) goto L_51;
  this.localContext;
  goto L_72;
  this.availability = ge.readPersonalizationAvailability(undefined.platformServices, this.availability);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: this
function {
  return this.receiveState(e);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=1 bc=774B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: e, t, i, this
// closure: G, H, F, T, me
function {
  this = this;
  let i;
  let t;
  let e;
  if (!((this.localContext == null))) goto L_35;
  this.localContext;
  goto L_56;
  e = undefined.platformServices;
  t = G.accountCustomizationsFor(e);
  i = H.personalizationHostFor(this.localContext);
  if (!((t === this.accountCustomizationsService))) goto L_118;
  if (((i === this.personalizationHost))) goto L_305;
  this.disposeAccountState();
  if (!((undefined !== t))) goto L_2e9;
  if (!((undefined !== e))) goto L_2e9;
  this.customInstructionsController = new F.CustomInstructionsParentController(T.customizationsRepositoryFor(e));
  this.repository = new me.PersonalizationSettingsRepository(t, this.customInstructionsController, e, i);
  this.registerDisposable(this.repository.state.subscribe(function <atom:0>));
  this.repository.refreshCustomizations();
  this.accountCustomizationsService = t;
  this.personalizationHost = i;
  i;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=275B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
function {
  this = this;
  this.reportedAppearance = false;
  if (!((this.reenableDismissalGesture == null))) goto L_39;
  this.reenableDismissalGesture;
  this;
  goto L_3c;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.reenableDismissalGesture = undefined;
  if (!((this.repository == null))) goto L_72;
  this.repository;
  goto L_96;
  undefined.dispose();
  this.repository = undefined;
  if (!((this.customInstructionsController == null))) goto L_cc;
  this.customInstructionsController;
  goto L_f0;
  undefined.dispose();
  this.customInstructionsController = undefined;
  this.accountCustomizationsService = undefined;
  this.personalizationHost = undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=47B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: o
function {
  if (!((o == null))) goto L_a;
  o;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.refreshCustomizations();
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=47B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: o
function {
  if (!((o == null))) goto L_a;
  o;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.retryCustomization();
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=78B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this
function {
  if (!((this.customInstructionsController == null))) goto L_29;
  this.customInstructionsController;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.discardFailed();
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=47B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: o
function {
  if (!((o == null))) goto L_a;
  o;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.retrySetting();
}

// fn <atom:0>  args=1 vars=7 closure=2 cpool=4 bc=1531B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// locals: t, i, s, o, e#1, this
// closure: ce, ve
function {
  this = this;
  let o;
  let s;
  let i;
  let t;
  t = this.state.loadFailure;
  i = this.state.saveFailure;
  s = this.state.settingFailure;
  null;
  e;
  if ((this.state.advancedExpanded)) goto L_259;
  if (!(!this.search.revealed)) goto L_259;
  if (!(("personalization_library_search" === this.search.target))) goto L_259;
  if (!(this.availability.showsLibrarySearch)) goto L_259;
  this.setState({advancedExpanded: (undefined !== e.settings)});
  this.refreshNavigation();
  this.recordAppearance();
  o = this.repository;
  if (!((undefined !== e.loadFailure))) goto L_41c;
  if (!((e.loadFailure !== t))) goto L_41c;
  let e#1;
  e#1 = ce.isNativeIOS();
  if (!(e#1)) goto L_3c4;
  goto L_40c;
  // [栈深重同步 3 -> 2]
  if (!(e#1)) goto L_414;
  goto L_416;
  // [栈深重同步 4 -> 3]
  this.presentFailure(ve.default.personalizationSettingsLoadFailed(), function <atom:0>, undefined);
  return;
  if (!((undefined !== e.saveFailure))) goto L_533;
  if (!((e.saveFailure !== i))) goto L_533;
  if (!(this.pageVisible)) goto L_533;
  if (!(!this.savingOnBack)) goto L_533;
  goto L_5f9;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== e.settingFailure))) goto L_5f9;
  if (!((e.settingFailure !== s))) goto L_5f9;
  this.presentFailure(ve.default.personalizationSettingsUpdateFailed(), function <atom:0>, undefined);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=245B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
function {
  this = this;
  if (!(this.hasLayout)) goto L_f4;
  if (!(this.pageVisible)) goto L_f4;
  if (!((undefined !== this.repository))) goto L_f4;
  if ((this.reportedAppearance)) goto L_f4;
  this.reportedAppearance = true;
  this.repository.recordAppearance();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=1416B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: e, this
// closure: ae, ye, _, ve, se
function {
  this = this;
  let e;
  if (!((this.localContext == null))) goto L_2f;
  this.localContext;
  goto L_50;
  e = undefined.navigator;
  if (!((undefined !== e))) goto L_587;
  if ((this.state.dirty)) goto L_e7;
  if (!(this.state.saving)) goto L_172;
  if (!((this.reenableDismissalGesture == null))) goto L_1ad;
  this.reenableDismissalGesture;
  this.reenableDismissalGesture = new ae.NavigationController(e).disableDismissalGesture();
  goto L_1ad;
  // [栈深重同步 1 -> 0]
  if (!((this.reenableDismissalGesture == null))) goto L_19d;
  this.reenableDismissalGesture;
  this;
  goto L_1a0;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.reenableDismissalGesture = undefined;
  undefined;
  if (!((this.customInstructionsController == null))) goto L_200;
  this.customInstructionsController;
  goto L_221;
  if (!((undefined.saveBehavior == null))) goto L_26b;
  undefined.saveBehavior;
  ye.configurePersonalizationPageNavigation(e, {saveBehavior: _.CustomInstructionsSaveBehavior.ExplicitSave, unsavedChanges: {title: ve.default.personalizationSettingsUnsavedChanges(), message: ye.personalizationUnsavedChangesMessage(), actions: [{id: "keep-editing", title: ve.default.personalizationSettingsKeepEditing(), role: se.ConfirmationDialogRole.Default}, {id: "discard", title: ve.default.personalizationSettingsDiscardChanges(), role: se.ConfirmationDialogRole.Destructive}]}, dirty: this.state.dirty, saving: this.state.saving, saveState: this.state.saveState, onSave: this.saveCustomizations, onBack: this.handleBack, onDiscard: this.discardChanges});
  return;
}

// fn <atom:0>  args=5 vars=7 closure=2 cpool=0 bc=299B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e, t, i, s, o
// locals: n, this
// closure: ae, ue
function {
  this = this;
  let n;
  if (!((this.localContext == null))) goto L_2f;
  this.localContext;
  goto L_50;
  n = undefined.navigator;
  if (!((undefined !== n))) goto L_12a;
  new ae.NavigationController(n).push(ue.PersonalizationOptionPickerScreen, {accessibilityId: e, options: Array.from(i), selectedKey: s}, {onSelect: o}, {animated: true, platformNavigationTitle: t, showPlatformNavigationBar: true});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=119B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
function {
  return {key: e.key, label: e.optionLabel, description: e.description};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=113B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: t
// closure: this, e
function {
  if (!((this.repository == null))) goto L_29;
  this.repository;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.selectTrait(e.key, t);
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=2 bc=224B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e, t
// locals: this
function {
  this = this;
  this.openOptionPicker("personalization-settings-characteristic-options.".concat(e.key), e.label, e.levels.map(function <atom:0>), t, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=197B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: this, o, n
function {
  if (!((this.repository === o))) goto L_c4;
  if (!(!this.isDestroyed())) goto L_c4;
  if (!(this.pageVisible)) goto L_c4;
  return (this.state.saveFailure === n);
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=174B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: a, E, i, s
function {
  if (!(a())) goto L_ad;
  if (!((e === E.CustomizationSaveAlertAction.Retry))) goto L_60;
  if (!((i == null))) goto L_5d;
  i;
  goto L_ad;
  goto L_ad;
  // [栈深重同步 1 -> 0]
  if (!((e === E.CustomizationSaveAlertAction.Discard))) goto L_ad;
  s();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: t
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Could not present a personalization error", t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=457B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// closure: re, ve, t, i
function {
  if (!((undefined === i))) goto L_102;
  goto L_1c1;
  // [栈深重同步 4 -> 3]
  return re.platformAlert.present({title: ve.default.personalizationSettingsError(), message: t, actions: [{id: "retry", title: ve.default.personalizationSettingsRetry(), role: 0}, {id: "cancel", title: ve.default.personalizationSettingsCancel(), role: 1}]});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=368B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: e
// closure: this, o, i
function {
  if (((this.repository !== o))) goto L_16f;
  if ((this.isDestroyed())) goto L_16f;
  if (!(("retry" === e.selectedActionId))) goto L_91;
  if (!((i == null))) goto L_8d;
  i;
  goto L_16f;
  goto L_16f;
  // [栈深重同步 1 -> 0]
  if (!(("ok" === e.selectedActionId))) goto L_16f;
  if (!((undefined !== o))) goto L_16f;
  if (!((this.repository === o))) goto L_16f;
  if (!((this.localContext == null))) goto L_120;
  this.localContext;
  goto L_16f;
  if (!((undefined.navigator == null))) goto L_149;
  undefined.navigator;
  goto L_16f;
  undefined.pop(true);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: t
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Could not present a personalization error", t);
  return;
}

// fn <atom:0>  args=3 vars=8 closure=5 cpool=6 bc=629B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: t, i, s
// locals: o, n, a, n#1, this
// closure: E, e, re, ve, oe
function {
  this = this;
  let o;
  o = this.repository;
  if (!((undefined !== s))) goto L_179;
  let a;
  let n;
  n = this.state.saveFailure;
  a = function <atom:0>;
  E.presentCustomizationSaveAlert({contextId: this.renderer.contextId, isCurrent: a, title: ve.default.personalizationSettingsError(), message: t}).then(function <atom:0>, function <atom:0>);
  return;
  try { // catch -> L_214
  oe.withLocalNativeRefs(this.renderer.contextId, function <atom:0>).then(function <atom:0>, function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n#1 = <?>;
  try { // catch -> L_274
  if (!(e.isLoggingEnabled)) goto L_271;
  console.warn("Could not present a personalization error", n#1);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: this
function {
  this = this;
  return this.context;
}

// fn <atom:0>  args=3 vars=83 closure=0 cpool=34 bc=3081B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// args: require, module, exports
// locals: e, t, i, s, o, n, a, r, l, d, p, c, h, g, u, y, m, v, S, P, C, w, b, z, f, M, V, I, A, k, R, T, _, E, x, F, L, q, O, D, U, B, N, G, H, K, W, j, X, J, Z, Q, $, Y, ee, te, ie, se, oe, ne, ae, re, le, de, pe, ce, he, ge, ue, ye, me, ve, Se, Pe, Ce, we, be, PersonalizationSettingsScreen, <class_fields_init>, PersonalizationSettingsScreen#1
function {
  let PersonalizationSettingsScreen#1;
  let be;
  let Ce;
  let Pe;
  let Se;
  let ve;
  let me;
  let ye;
  let ue;
  let ge;
  let he;
  let ce;
  let pe;
  let de;
  let le;
  let re;
  let ae;
  let ne;
  let oe;
  let se;
  let ie;
  let te;
  let ee;
  let Y;
  let $;
  let Q;
  let Z;
  let J;
  let X;
  let j;
  let W;
  let K;
  let H;
  let G;
  let N;
  let B;
  let U;
  let D;
  let O;
  let q;
  let L;
  let F;
  let x;
  let E;
  let _;
  let T;
  let R;
  let k;
  let A;
  let I;
  let V;
  let M;
  let f;
  let z;
  let b;
  let w;
  let C;
  let P;
  let S;
  let v;
  let m;
  let y;
  let u;
  let g;
  let h;
  let c;
  let p;
  let d;
  let l;
  let r;
  let a;
  let n;
  let o;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PersonalizationSettingsScreen = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeComponentPrototype(undefined, "g1fo5UwPOC4GEOS7");
  s = t.makeComponentPrototype(undefined, "WT1AAzNvQ_LOkFWI");
  o = t.makeComponentPrototype(["accessibilityId", "personalization-settings-list"], "SvxhWaJE4vU9l8Zu");
  n = t.makeComponentPrototype(["accessibilityId", "personalization-settings-style-section"], "g9OFHM_1aZAoO4WX");
  a = t.makeComponentPrototype(["accessibilityId", "personalization-settings-rich-responses"], "otsCAEI8-DV4a0p-");
  r = t.makeComponentPrototype(undefined, "HVKVGIUgLmD09HA7");
  l = t.makeComponentPrototype(undefined, "qY5lszHXZwcrBsb-");
  d = t.makeComponentPrototype(["systemImageName", "exclamationmark.triangle.fill", "symbol", "!", "size", 16], "_O2GupxBBHEZjcpj");
  p = t.makeComponentPrototype(["lines", 0], "FPD-2HMdGXAcIEWO");
  c = t.makeComponentPrototype(["accessibilityId", "personalization-settings-reference-photos-section"], "PIU2XMvQwbIsLx7J");
  h = t.makeComponentPrototype(undefined, "AzM9Qx6GPeKTzmd2");
  g = t.makeComponentPrototype(["accessibilityId", "personalization-settings-customization-section", "footerAccessibilityId", "personalization-settings-customization-footer"], "Pf0imTjugN3Eb1Ci");
  u = t.makeComponentPrototype(["accessibilityId", "personalization-settings-customization-enabled"], "bvdhnOT_n1baxFnB");
  y = t.makeComponentPrototype(["accessibilityId", "personalization-settings-personality-section"], "8l3hVGcgbukU61GV");
  m = t.makeComponentPrototype(["accessibilityId", "personalization-settings-personality"], "QUsP_ktCVUg7r5nx");
  v = t.makeComponentPrototype(["accessibilityId", "personalization-settings-characteristics-section"], "hBkMVAEK__X_DffL");
  S = t.makeComponentPrototype(undefined, "E0hSjSRvPWk2ULNJ");
  P = t.makeComponentPrototype(["accessibilityId", "personalization-settings-fast-answers-section"], "W04RpP9vKLQazuAZ");
  C = t.makeComponentPrototype(["accessibilityId", "personalization-settings-fast-answers"], "PARZOizjS0FXCWs2");
  w = t.makeComponentPrototype(["accessibilityId", "personalization-settings-suggested-prompts-section"], "CcthPSrtALDsJWDV");
  b = t.makeComponentPrototype(["accessibilityId", "personalization-settings-suggested-prompts"], "BYuJbzqqsoj_iYuo");
  z = t.makeComponentPrototype(["accessibilityId", "personalization-settings-custom-instructions"], "Aim91ofn00poO2Ak");
  f = t.makeComponentPrototype(["accessibilityId", "personalization-settings-advanced-section"], "pTkl3T1-8mohErsb");
  M = t.makeComponentPrototype(["accessibilityId", "personalization-settings-advanced"], "z5IDOj_drqp84cES");
  V = t.makeComponentPrototype(["accessibilityId", "personalization-settings-library-search"], "VW2HAbAPvoqXsEhR");
  I = t.makeComponentPrototype(["accessibilityId", "personalization-settings-image-generation"], "xkEnjL6W44Xh99iF");
  A = t.makeComponentPrototype(["accessibilityId", "personalization-settings-pets-section"], "4NTKteEMrwbKrvtz");
  k = t.makeComponentPrototype(["accessibilityId", "personalization-settings-pets"], "IzWGRexv18--4JuE");
  R = t.makeComponentPrototype(undefined, "7yNaishEahqEvxoX");
  T = require("custom_instructions_ui/src/CustomizationsRepository");
  _ = require("custom_instructions_ui/src/CustomInstructionsModels");
  E = require("custom_instructions_ui/src/CustomizationSaveAlert");
  x = require("oai_ui/src/components/settings/SettingsSearchHighlight");
  F = require("custom_instructions_ui/src/CustomInstructionsParentController");
  L = require("custom_instructions_ui/src/Strings");
  q = require("oai_core/src/OAITheme");
  O = require("oai_core/src/OAIUITheme");
  D = require("oai_core/src/OAITokens");
  U = require("oai_core/src/OAITypography");
  B = require("oai_ui/src/components/Icon");
  N = require("oai_ui/src/components/Text");
  G = require("oai_platform_services/src/AccountCustomizations");
  H = require("./PersonalizationSettingsModels");
  K = require("oai_platform_services/src/AccountSettings");
  W = require("oai_ui/src/components/InlineText");
  j = require("oai_ui/src/components/settings/SettingsActionRow");
  X = require("oai_ui/src/components/settings/SettingsList");
  J = require("oai_ui/src/components/settings/SettingsMenuRow");
  Z = require("oai_ui/src/components/settings/SettingsRow");
  Q = require("oai_ui/src/components/settings/SettingsSection");
  $ = require("oai_ui/src/components/settings/SettingsTextEntrySection");
  Y = require("oai_ui/src/components/settings/SettingsToggleRow");
  ee = require("valdi_core/src/Component");
  te = require("valdi_core/src/Style");
  ie = require("valdi_core/src/CompilerIntrinsics");
  se = require("valdi_core/src/ConfirmationDialog");
  oe = require("valdi_core/src/NativeReferences");
  ne = require("valdi_platform_browser/src/PlatformBrowser");
  ae = require("valdi_navigation/src/NavigationController");
  re = require("valdi_platform_alert/src/PlatformAlert");
  le = require("valdi_ui/src/components/SafeArea");
  de = require("valdi_ui/src/components/MaterialSurface");
  pe = require("valdi_ui/src/ControlMaterial");
  ce = require("valdi_ui/src/Platform");
  he = require("valdi_ui_theme/src/ValdiUITheme");
  ge = require("./PersonalizationAvailability");
  ue = require("./PersonalizationOptionPickerScreen");
  ye = require("./PersonalizationPageNavigation");
  me = require("./PersonalizationSettingsRepository");
  ve = require("./Strings");
  Se = require("./ReferencePhotosRow");
  Pe = require("./PersonalizationPetThumbnail");
  Ce = require("oai_ui/src/components/settings/SettingsTheme");
  if ((we)) goto L_986;
  we = {};
  !function <atom:0>({});
  be = {bannerOverlay: new te.Style({position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 1, padding: 16, touchEnabled: false}), banner: new te.Style({accessibilityId: "personalization-settings-rich-responses-error", accessibilityCategory: "text", accessibilityNavigation: "leaf", backgroundColor: D.OAIColor.BgElevatedSecondary, borderRadius: 24, flexDirection: "row", alignItems: "center", gap: 12, paddingTop: 16, paddingBottom: 16, paddingLeft: 12, paddingRight: 12})};
  let PersonalizationSettingsScreen;
  let <class_fields_init>;
  class PersonalizationSettingsScreen extends ee.StatefulComponent { ... }
  <proto:PersonalizationSettingsScreen>.onCreate = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.onDestroy = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.onViewModelUpdate = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.onRender = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderStyleSettings = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.visualAnswersOptions = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderRichResponsesFailure = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderReferencePhotos = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderCustomizationToggle = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderPersonality = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderPersonalityRow = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderCharacteristics = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderCharacteristicRow = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderFastAnswers = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderSuggestedPrompts = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderCustomInstructions = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.showsAdvancedSettings = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderAdvancedSettings = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderPetEntry = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.customizationFooterSpans = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.rowPosition = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.renderSearchTarget = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.readFeatureAvailability = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.updateCustomInstructionsController = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.disposeAccountState = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.receiveState = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.recordAppearance = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.refreshNavigation = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.openOptionPicker = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.openCharacteristicPicker = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.presentFailure = function <atom:0>;
  <proto:PersonalizationSettingsScreen>.localContext = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PersonalizationSettingsScreen>;
  PersonalizationSettingsScreen = function <atom:0>;
  // close_loc <class_fields_init>
  PersonalizationSettingsScreen#1 = function <atom:0>;
  exports.PersonalizationSettingsScreen = PersonalizationSettingsScreen#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=personalization_settings_ui/src/PersonalizationSettingsScreen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
