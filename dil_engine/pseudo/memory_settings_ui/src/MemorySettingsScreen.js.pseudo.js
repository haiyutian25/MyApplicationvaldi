// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=497B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, k, y, H, F, T
function {
  t.beginComponent(k.Icon, y, undefined, undefined);
  t.setViewModelProperty("src", H.default.oaiChevronRightSystem);
  t.setViewModelProperty("color", F.OAIColor.IconSystemDisclosure);
  t.setViewModelProperty("size", T.resolveSettingsTheme().layout.disclosureSize);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=129B file=memory_settings_ui/src/MemorySettingsScreen
// closure: this
function {
  this.setState({recoveryAvailable: false});
  if (!((this.repository == null))) goto L_5c;
  this.repository;
  goto L_80;
  undefined.refresh();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=42B file=memory_settings_ui/src/MemorySettingsScreen
// args: e
// closure: re, t
function {
  re.notifyMemorySettingChanged(t, e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=338B file=memory_settings_ui/src/MemorySettingsScreen
// args: e
// locals: t
// closure: re, this
function {
  let t;
  if (((undefined === this.state.settings))) goto L_bd;
  if ((this.state.loading)) goto L_bd;
  if (!((undefined === this.repository))) goto L_c0;
  return;
  t = this.context.host;
  this.repository.setMemoryEnabled(e, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=43B file=memory_settings_ui/src/MemorySettingsScreen
// closure: this, ge
function {
  this.openHelpURL(ge);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=43B file=memory_settings_ui/src/MemorySettingsScreen
// closure: this, ye
function {
  this.openHelpURL(ye);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=351B file=memory_settings_ui/src/MemorySettingsScreen
// locals: e, t
// closure: this, W
function {
  let t;
  let e;
  e = this.context.platformServices;
  t = this.customInstructionsController;
  if (((undefined === e))) goto L_15e;
  if (((undefined === t))) goto L_15e;
  if ((t.isSaving)) goto L_15e;
  if (((undefined === this.customizationValue(W.AccountCustomizationField.CustomInstructions)))) goto L_15e;
  this.inlineProfileEditingEnabled = false;
  t.open(e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=303B file=memory_settings_ui/src/MemorySettingsScreen
// locals: e, t
// closure: this, W
function {
  let t;
  let e;
  e = this.context.platformServices;
  t = this.customInstructionsController;
  if (((undefined === e))) goto L_12e;
  if (((undefined === t))) goto L_12e;
  if ((t.isSaving)) goto L_12e;
  this.inlineProfileEditingEnabled = false;
  t.openField(W.AccountCustomizationField.AboutYou, e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=194B file=memory_settings_ui/src/MemorySettingsScreen
// args: e
// closure: this, W
function {
  if (!(this.inlineProfileEditingEnabled)) goto L_c1;
  if (!((this.customInstructionsController == null))) goto L_57;
  this.customInstructionsController;
  goto L_c1;
  undefined.updateField(W.AccountCustomizationField.Name, e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=194B file=memory_settings_ui/src/MemorySettingsScreen
// args: e
// closure: this, W
function {
  if (!(this.inlineProfileEditingEnabled)) goto L_c1;
  if (!((this.customInstructionsController == null))) goto L_57;
  this.customInstructionsController;
  goto L_c1;
  undefined.updateField(W.AccountCustomizationField.Occupation, e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=314B file=memory_settings_ui/src/MemorySettingsScreen
// locals: t, o
// closure: this, e
function {
  let t;
  t = this.context.host;
  if (!((undefined !== t))) goto L_e2;
  try { // catch -> L_82
  t.openMemorySummary();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_e1
  if (!(e.isLoggingEnabled)) goto L_de;
  console.warn("Memory Settings host threw while opening Memory Summary");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(e.isLoggingEnabled)) goto L_138;
  console.warn("Memory Settings could not open Memory Summary because the host is unavailable");
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=454B file=memory_settings_ui/src/MemorySettingsScreen
// locals: t, o
// closure: this, Q, e
function {
  let t;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  t = undefined.host;
  if (!((undefined !== t))) goto L_16e;
  if (!(Q.isVersionAtLeast(49))) goto L_116;
  try { // catch -> L_b6
  t.openSavedMemories();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_115
  if (!(e.isLoggingEnabled)) goto L_112;
  console.warn("Memory Settings host threw while opening Saved Memories");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(e.isLoggingEnabled)) goto L_16c;
  console.warn("Memory Settings Saved Memories is unavailable on this host version");
  return;
  if (!(e.isLoggingEnabled)) goto L_1c4;
  console.warn("Memory Settings could not open Saved Memories because the host is unavailable");
  return;
}

// fn <atom:0>  args=0 vars=4 closure=13 cpool=11 bc=333B file=memory_settings_ui/src/MemorySettingsScreen
// locals: this, this.active_func, new.target, arguments
// closure: t, k, y, H, F, T, re, ge, ye, W, e, Q, <class_fields_init>
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
  this.state = {loading: true, memoryAvailable: true, recoveryAvailable: false, inlineInputGeneration: 0, customizationsEnabled: true};
  this.requestGeneration = 0;
  this.inlineProfileEditingEnabled = true;
  this.starlightEnabled = false;
  this.goldenHourEnabled = false;
  this.euCopyEnabled = false;
  this.savedMemoriesRemoved = false;
  this.renderMemorySummaryAccessory = function <atom:0>;
  this.refreshSettings = function <atom:0>;
  this.updateMemory = function <atom:0>;
  this.openLearnMore = function <atom:0>;
  this.openMemoryInSearchLearnMore = function <atom:0>;
  this.openCustomInstructions = function <atom:0>;
  this.openAboutYou = function <atom:0>;
  this.updateNickname = function <atom:0>;
  this.updateOccupation = function <atom:0>;
  this.openMemorySummary = function <atom:0>;
  this.openSavedMemories = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=memory_settings_ui/src/MemorySettingsScreen
// args: e
// closure: this
function {
  this.handleAccountState(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=397B file=memory_settings_ui/src/MemorySettingsScreen
// args: e
// locals: t, i
// closure: this, o
function {
  let i;
  let t;
  t = (1 === e);
  if (!(t)) goto L_34;
  i = !this.inlineProfileEditingEnabled;
  this.inlineProfileEditingEnabled = t;
  if (!((this.customInstructionsController == null))) goto L_6c;
  this.customInstructionsController;
  goto L_93;
  undefined.setPageVisible(t);
  if (!(t)) goto L_18c;
  if (!(i)) goto L_115;
  this.setState({inlineInputGeneration: (this.state.inlineInputGeneration + 1)});
  o.refreshMemoryStorage();
  if (!((this.customInstructionsController == null))) goto L_168;
  this.customInstructionsController;
  goto L_18c;
  undefined.refreshNavigation();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=2 bc=983B file=memory_settings_ui/src/MemorySettingsScreen
// locals: t, o, this
// closure: _, re, ie, ae, e
function {
  this = this;
  let o;
  let t;
  this.search = new _.SettingsSearchHighlight(this, re.memorySettingsSearchTarget(this.viewModel), "memory-settings-search-highlight");
  t = this.localContext.navigator;
  if (!((undefined !== t))) goto L_148;
  this.registerDisposable(new ie.NavigationController(t).disableDismissalGesture());
  this.readFeatureAvailability();
  o = ae.memorySettingsRepositoryFor(this.context.platformServices, this.goldenHourEnabled);
  if (!((undefined !== o))) goto L_34b;
  this.repository = o;
  this.configureCustomInstructions();
  this.registerDisposable(o.state.subscribe(function <atom:0>));
  if (!((this.localContext.navigator == null))) goto L_2f2;
  this.localContext.navigator;
  goto L_321;
  if (!((undefined.setPageVisibilityObserver == null))) goto L_31c;
  undefined.setPageVisibilityObserver;
  undefined;
  goto L_321;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, function <atom:0>);
  o.refreshIfNeeded();
  return;
  if (!(e.isLoggingEnabled)) goto L_3a1;
  console.warn("Memory Settings requires account feature and account settings capabilities");
  this.setState({loading: false, recoveryAvailable: false});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=270B file=memory_settings_ui/src/MemorySettingsScreen
// locals: this
function {
  this = this;
  this.requestGeneration = (this.requestGeneration ++);
  if (!((this.localContext.navigator == null))) goto L_79;
  this.localContext.navigator;
  goto L_a7;
  if (!((undefined.setPageVisibilityObserver == null))) goto L_a3;
  undefined.setPageVisibilityObserver;
  undefined;
  goto L_a7;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, undefined);
  this.repository = undefined;
  if (!((this.customInstructionsController == null))) goto L_dd;
  this.customInstructionsController;
  goto L_101;
  undefined.dispose();
  this.customInstructionsController = undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=813B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, $, r, this, le, K
function {
  t.beginComponent($.SettingsToggleRow, r, undefined, undefined);
  if (!((this.state.settings == null))) goto L_c7;
  this.state.settings;
  goto L_e8;
  t.setViewModelProperty("checked", (true === undefined.improvedMemoryEnabled));
  t.setViewModelProperty("disabled", (undefined === this.state.settings));
  t.setViewModelProperty("label", le.default.memorySettingsEnableMemory());
  t.setViewModelProperty("loading", this.state.loading);
  t.setViewModelProperty("onChange", this.updateMemory);
  t.setViewModelProperty("position", K.SettingsRowPosition.Only);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=146B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, $, r, this, le, K
function {
  this.search.renderTarget("settings_memory_enable", !this.state.loading, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=245B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, $, r, this, le, K, X, s
function {
  t.beginComponent(X.SettingsSection, s, undefined, undefined);
  t.setViewModelProperty("footerSpans", this.memoryToggleFooterSpans());
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=267B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, $, r, this, le, K, X, s
function {
  if (!((undefined !== this.repository))) goto L_72;
  if (!(this.state.memoryAvailable)) goto L_72;
  function <atom:0>();
  this.renderMemoryManagement();
  this.renderCustomInstructions();
  this.renderProfileFields();
  this.renderRecoveryAction();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=1 bc=688B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, $, r, this, le, K, X, s, B, n, ne, T
function {
  t.beginComponent(B.SettingsList, n, undefined, undefined);
  t.setViewModelProperty("scrollRef", this.search.scrollRef);
  t.setViewModelProperty("onLayout", this.search.onLayout);
  t.setViewModelProperty("safeAreaEdges", [ne.SafeAreaEdge.Top, ne.SafeAreaEdge.Bottom]);
  t.setViewModelProperty("verticalInset", T.resolveSettingsTheme().detailListVerticalInset);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=16 cpool=1 bc=321B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, $, r, this, le, K, X, s, B, n, ne, T, D, i, U, N
function {
  t.beginComponent(D.ValdiUIThemeProvider, i, undefined, undefined);
  if (!(U.isNativeIOS())) goto L_c7;
  goto L_eb;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("value", N.OPENAI_UI_THEME);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=17 cpool=1 bc=326B file=memory_settings_ui/src/MemorySettingsScreen
// locals: this
// closure: t, $, r, le, K, X, s, B, n, ne, T, D, i, U, N, z, o
function {
  this = this;
  t.beginComponent(z.OAITheme, o, undefined, undefined);
  t.setViewModelProperty("fill", true);
  t.setViewModelProperty("mode", z.OAIThemeMode.System);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=433B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, j, l, L, this, K
function {
  t.beginComponent(j.SettingsActionRow, l, undefined, undefined);
  t.setViewModelProperty("label", L.default.customInstructionsTitle());
  t.setViewModelProperty("onPress", this.openCustomInstructions);
  t.setViewModelProperty("position", K.SettingsRowPosition.Only);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=1 bc=320B file=memory_settings_ui/src/MemorySettingsScreen
// locals: this
// closure: t, j, l, L, K, X, a
function {
  this = this;
  if (((undefined === this.customInstructionsController))) goto L_13f;
  if (!(this.state.memoryAvailable)) goto L_96;
  if ((this.shouldShowMemorySummary)) goto L_13f;
  t.beginComponent(X.SettingsSection, a, undefined, undefined);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=599B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, Z, d, L, e, this
function {
  t.beginComponent(Z.SettingsTextEntrySection, d, undefined, undefined);
  t.setViewModelProperty("label", L.default.customInstructionsAboutYouTitle());
  t.setViewModelProperty("value", e);
  t.setViewModelProperty("placeholder", L.default.customInstructionsAboutYouPlaceholder());
  t.setViewModelProperty("disabled", !this.state.customizationsEnabled);
  t.setViewModelProperty("onPress", this.openAboutYou);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=6 cpool=1 bc=972B file=memory_settings_ui/src/MemorySettingsScreen
// locals: e, this
// closure: t, Z, d, L, W, le
function {
  this = this;
  let e;
  if (((undefined === this.customInstructionsController))) goto L_72;
  if (!((undefined === this.state.customizations))) goto L_75;
  return;
  this.renderInlineProfileField(W.AccountCustomizationField.Name, "memory-settings-nickname", "settings_memory_nickname", le.default.memorySettingsNicknameTitle(), le.default.memorySettingsNicknamePlaceholder(), this.updateNickname);
  this.renderInlineProfileField(W.AccountCustomizationField.Occupation, "memory-settings-occupation", "settings_memory_occupation", le.default.memorySettingsOccupationTitle(), le.default.memorySettingsOccupationPlaceholder(), this.updateOccupation);
  e = this.customizationValue(W.AccountCustomizationField.AboutYou);
  if (!((undefined !== e))) goto L_3cb;
  this.search.renderTarget("settings_memory_more_about_you", !this.state.loading, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=0 bc=699B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, J, c, o, this, n, r, s, K, a
function {
  t.beginComponent(J.SettingsTextInputRow, c, "".concat(o, "-", this.state.inlineInputGeneration), undefined);
  t.setViewModelProperty("accessibilityId", o);
  t.setViewModelProperty("accessibilityLabel", n);
  t.setViewModelProperty("disabled", !this.state.customizationsEnabled);
  t.setViewModelProperty("onChange", r);
  t.setViewModelProperty("placeholder", s);
  t.setViewModelProperty("position", K.SettingsRowPosition.Only);
  t.setViewModelProperty("value", a);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=1 bc=299B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, J, c, o, this, n, r, s, K, a, X, m
function {
  t.beginComponent(X.SettingsSection, m, undefined, undefined);
  t.setViewModelProperty("accessibilityId", "".concat(o, "-section"));
  t.setViewModelProperty("title", n);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=6 vars=8 closure=6 cpool=1 bc=198B file=memory_settings_ui/src/MemorySettingsScreen
// args: e, o, i, n, s, r
// locals: a, this
// closure: t, J, c, K, X, m
function {
  this = this;
  let a;
  a = this.customizationValue(e);
  if (!((undefined !== a))) goto L_c5;
  this.search.renderTarget(i, !this.state.loading, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=memory_settings_ui/src/MemorySettingsScreen
// args: t
// closure: e
function {
  return (t.field === e);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=155B file=memory_settings_ui/src/MemorySettingsScreen
// args: e
// locals: this
function {
  this = this;
  if (!((this.state.customizations == null))) goto L_4c;
  this.state.customizations;
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?>.find(function <atom:0>) == null))) goto L_79;
  <?>.find(function <atom:0>);
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.value;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=164B file=memory_settings_ui/src/MemorySettingsScreen
// args: e
// closure: this, o
function {
  this.setState({customizations: e, customizationsEnabled: o.enabled});
  if (!(this.inlineProfileEditingEnabled)) goto L_a3;
  o.refreshNavigation();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=617B file=memory_settings_ui/src/MemorySettingsScreen
// locals: e, t, o, this
// closure: W, se
function {
  this = this;
  let o;
  let t;
  let e;
  e = W.accountCustomizationsFor(this.context.platformServices);
  t = this.localContext.navigator;
  if (((undefined === e))) goto L_10f;
  if (((undefined === t))) goto L_10f;
  if (!((undefined === this.context.platformServices))) goto L_112;
  return;
  o = new se.MemorySettingsCustomInstructionsController(t, this.context.platformServices, this.renderer.contextId);
  this.customInstructionsController = o;
  this.registerDisposable(o.fields.subscribe(function <atom:0>));
  o.refresh();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=memory_settings_ui/src/MemorySettingsScreen
// locals: this
function {
  this = this;
  return this.context;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=433B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, j, g, le, this, K
function {
  t.beginComponent(j.SettingsActionRow, g, undefined, undefined);
  t.setViewModelProperty("label", le.default.memorySettingsRetry());
  t.setViewModelProperty("onPress", this.refreshSettings);
  t.setViewModelProperty("position", K.SettingsRowPosition.Only);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=1 bc=239B file=memory_settings_ui/src/MemorySettingsScreen
// locals: this
// closure: t, j, g, le, K, X, u
function {
  this = this;
  if (!(this.state.recoveryAvailable)) goto L_ee;
  t.beginComponent(X.SettingsSection, u, undefined, undefined);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=829B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, j, h, this, le, i, K
function {
  t.beginComponent(j.SettingsActionRow, h, undefined, undefined);
  t.setViewModelProperty("contentLayout", j.SettingsActionRowContentLayout.Adaptive);
  t.setViewModelProperty("disabled", !this.canOpenMemorySummary);
  t.setViewModelProperty("label", le.default.memorySettingsMemorySummary());
  t.setViewModelProperty("onPress", this.openMemorySummary);
  t.setViewModelProperty("showsChevron", false);
  t.setViewModelProperty("trailingContent", this.renderMemorySummaryAccessory);
  if (!((undefined === i))) goto L_2cc;
  goto L_311;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("position", K.SettingsRowPosition.First);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=703B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, j, S, this, le, i, K
function {
  t.beginComponent(j.SettingsActionRow, S, undefined, undefined);
  t.setViewModelProperty("appearance", j.SettingsActionRowAppearance.NavigationLink);
  t.setViewModelProperty("disabled", !this.canOpenSavedMemories);
  t.setViewModelProperty("label", le.default.memorySettingsSavedMemories());
  t.setViewModelProperty("onPress", this.openSavedMemories);
  if (!((undefined === i))) goto L_24e;
  goto L_293;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("position", K.SettingsRowPosition.First);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=16 cpool=2 bc=1784B file=memory_settings_ui/src/MemorySettingsScreen
// closure: t, j, h, this, le, i, K, S, e, o, R, v, T, G, b, M
function {
  if (!(e)) goto L_9c;
  goto L_137;
  // [栈深重同步 1 -> 0]
  if (!(o)) goto L_137;
  this.search.renderTarget("settings_memory_manage_memories", !this.state.loading, function <atom:0>);
  if (((undefined === i))) goto L_6f7;
  if (!(R.Device.isIOS())) goto L_204;
  if (!(!R.Device.isWeb())) goto L_204;
  goto L_6f7;
  // [栈深重同步 1 -> 0]
  t.beginRender(v, undefined);
  t.setAttributeStyle("style", T.SettingsAppearance.notice);
  t.beginComponent(G.Text, b, undefined, undefined);
  if (!(i.full)) goto L_389;
  goto L_3ce;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("tone", G.TextTone.Warning);
  t.setViewModelProperty("value", le.default.memorySettingsStorageUsage(i.percentUsed));
  t.endComponent();
  t.beginComponent(G.Text, M, undefined, undefined);
  if (!(i.full)) goto L_57a;
  goto L_5bf;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("tone", G.TextTone.Warning);
  if (!(i.full)) goto L_65c;
  goto L_6a4;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("value", le.default.memorySettingsStorageAlmostFull());
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=14 cpool=1 bc=691B file=memory_settings_ui/src/MemorySettingsScreen
// locals: e, o, i, this
// closure: t, j, h, le, K, S, R, v, T, G, b, M, X, p
function {
  this = this;
  let i;
  let o;
  let e;
  if ((!this.state.memoryAvailable)) goto L_98;
  if (!((undefined === this.state.settings))) goto L_9b;
  return;
  e = this.shouldShowMemorySummary;
  if (!(!e)) goto L_10e;
  if ((this.shouldShowSavedMemories)) goto L_10e;
  o = this.starlightEnabled;
  i = this.storageWarning;
  if ((e)) goto L_145;
  if ((o)) goto L_145;
  if (!((undefined !== i))) goto L_2b2;
  t.beginComponent(X.SettingsSection, p, undefined, undefined);
  if (!(e)) goto L_1d2;
  goto L_1d7;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityId", "memory-settings-management-section");
  if (!(e)) goto L_230;
  goto L_25d;
  // [栈深重同步 4 -> 3]
  if (!(o)) goto L_25c;
  goto L_25d;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("footerSpans", undefined);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=17 cpool=0 bc=2451B file=memory_settings_ui/src/MemorySettingsScreen
// args: e
// locals: o, i
// closure: F, t, f, he, P, C, w, I, k, A, E, G, V, Se, le, x, T
function {
  let i;
  let o;
  if (!(e.full)) goto L_71;
  goto L_b6;
  // [栈深重同步 1 -> 0]
  o = F.OAIColor.TextStatusWarning;
  if (!(e.full)) goto L_df;
  goto L_101;
  // [栈深重同步 1 -> 0]
  i = e.percentUsed;
  t.beginRender(f, undefined);
  t.setAttributeStyle("style", he.warning);
  t.beginRender(P, undefined);
  t.setAttributeStyle("style", he.progress);
  t.beginRender(C, undefined);
  t.setAttributeStyle("style", he.fillInset);
  t.beginRender(w, undefined);
  t.setAttributeStyle("style", he.fill);
  t.setAttributeString("backgroundColor", o);
  t.setAttributeString("width", "".concat(i, "%"));
  t.endRender();
  t.endRender();
  t.beginRender(I, undefined);
  t.setAttributeStyle("style", he.content);
  t.beginComponent(k.Icon, A, undefined, undefined);
  t.setViewModelProperty("src", E.default.notebookBadgeXmark);
  t.setViewModelProperty("color", o);
  t.endComponent();
  t.beginComponent(G.Text, V, undefined, undefined);
  t.setViewModelProperty("typography", Se);
  t.setViewModelProperty("color", o);
  t.setViewModelProperty("value", le.default.memorySettingsStorageUsage(i));
  t.endComponent();
  t.endRender();
  t.endRender();
  t.beginComponent(G.Text, x, undefined, undefined);
  t.setViewModelProperty("tone", G.TextTone.Secondary);
  t.setViewModelProperty("typography", T.resolveSettingsTheme().typography.Description);
  if (!(e.full)) goto L_8f7;
  goto L_93f;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("value", le.default.memorySettingsStorageAlmostFullIos());
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=152B file=memory_settings_ui/src/MemorySettingsScreen
// locals: this
function {
  this = this;
  if (!(!this.savedMemoriesRemoved)) goto L_97;
  if (!((this.state.memoryStorage == null))) goto L_75;
  this.state.memoryStorage;
  goto L_96;
  return (0 !== undefined.usedTokens);
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=452B file=memory_settings_ui/src/MemorySettingsScreen
// locals: e, t, this
function {
  this = this;
  let t;
  let e;
  e = this.state.memoryStorage;
  if (!((undefined === e))) goto L_54;
  return;
  if (!((this.state.settings == null))) goto L_a1;
  this.state.settings;
  goto L_c2;
  if (!((true === undefined.improvedMemoryEnabled))) goto L_12f;
  if (!((true !== this.state.settings.improvedMemoryOptedOut))) goto L_12f;
  return;
  t = Math.floor(((e.usedTokens / e.maximumTokens) * 100));
  if (!((t < 80))) goto L_1af;
  return undefined;
  return {full: (t >= 99), percentUsed: t};
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=160B file=memory_settings_ui/src/MemorySettingsScreen
// locals: e, this
function {
  this = this;
  let e;
  e = this.state.settings;
  if (!((undefined !== e))) goto L_9f;
  if (!(this.starlightEnabled)) goto L_9f;
  return (false === e.improvedMemoryOptedOut);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=memory_settings_ui/src/MemorySettingsScreen
// locals: this
function {
  this = this;
  return (undefined !== this.context.host);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=115B file=memory_settings_ui/src/MemorySettingsScreen
// locals: this
// closure: Q
function {
  this = this;
  if (!(Q.isVersionAtLeast(49))) goto L_72;
  return (undefined !== this.context.host);
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=501B file=memory_settings_ui/src/MemorySettingsScreen
// locals: this
// closure: Y, le
function {
  this = this;
  if (!(this.euCopyEnabled)) goto L_dd;
  goto L_125;
  // [栈深重同步 4 -> 3]
  return [{kind: Y.InlineTextSpanKind.Text, text: "".concat(le.default.memorySettingsImprovedMemoryFooter(), " ")}, {kind: Y.InlineTextSpanKind.Link, text: le.default.memorySettingsLearnMore(), onPress: this.openLearnMore}];
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=391B file=memory_settings_ui/src/MemorySettingsScreen
// locals: this
// closure: Y, le
function {
  this = this;
  return [{kind: Y.InlineTextSpanKind.Text, text: "".concat(le.default.memorySettingsMemoryInSearchFooter(), " ")}, {kind: Y.InlineTextSpanKind.Link, text: le.default.memorySettingsLearnMore(), onPress: this.openMemoryInSearchLearnMore}];
}

// fn <atom:0>  args=0 vars=9 closure=2 cpool=2 bc=1265B file=memory_settings_ui/src/MemorySettingsScreen
// locals: e, t, o, i, n, s, r, e#1, this
// closure: le, Y
function {
  this = this;
  let r;
  let s;
  let n;
  let i;
  let o;
  let t;
  let e;
  e = this.canOpenCustomInstructions;
  if (!(this.canOpenSavedMemories)) goto L_86;
  t = this.shouldShowSavedMemories;
  if (!(e)) goto L_12a;
  if (!(t)) goto L_df;
  goto L_1c1;
  // [栈深重同步 1 -> 0]
  goto L_1c1;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_179;
  goto L_1c1;
  // [栈深重同步 1 -> 0]
  o = le.default.memorySettingsSummaryFooterWithoutLinks();
  i = [];
  n = new RegExp("\\[([^\\]]+)\\]\\(([^)]+)\\)");
  s = 0;
  r = n.exec(o);
  if (!((null !== r))) goto L_43c;
  let e#1;
  if (!((r.index > s))) goto L_2fd;
  i.push({kind: Y.InlineTextSpanKind.Text, text: o.slice(s, r.index)});
  if (!(("custom-instructions" === r[2]))) goto L_330;
  goto L_353;
  // [栈深重同步 1 -> 0]
  e#1 = this.openSavedMemories;
  i.push({kind: Y.InlineTextSpanKind.Link, text: r[1], onPress: e#1});
  s = (r.index + r[0].length);
  (r.index + r[0].length);
  r = n.exec(o);
  n.exec(o);
  goto L_1fc;
  if (!((s < o.length))) goto L_4ec;
  i.push({kind: Y.InlineTextSpanKind.Text, text: o.slice(s)});
  return i;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=memory_settings_ui/src/MemorySettingsScreen
// locals: this
function {
  this = this;
  return (undefined !== this.customInstructionsController);
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=195B file=memory_settings_ui/src/MemorySettingsScreen
// locals: e, this
// closure: pe, de, me, ce, ue
function {
  this = this;
  let e;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_79;
  if (!((undefined.platformServices == null))) goto L_58;
  undefined.platformServices;
  goto L_79;
  e = undefined.experimentService;
  this.starlightEnabled = pe(e, de);
  this.goldenHourEnabled = pe(e, me);
  this.euCopyEnabled = pe(e, ce);
  this.savedMemoriesRemoved = pe(e, ue);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=763B file=memory_settings_ui/src/MemorySettingsScreen
// args: e
// locals: t, o, this
function {
  this = this;
  let o;
  let t;
  if (!(this.isDestroyed())) goto L_30;
  return;
  t = this.state.failure;
  if (!((undefined === this.state.settings))) goto L_107;
  if (!((undefined !== e.settings))) goto L_107;
  o = e.memoryAvailable;
  this.setState({loading: e.loading, settings: e.settings, failure: e.failure, memoryAvailable: e.memoryAvailable, memoryStorage: e.memoryStorage, recoveryAvailable: false});
  if (!(o)) goto L_276;
  if (!((undefined === e.memoryStorage))) goto L_276;
  if (!((this.repository == null))) goto L_252;
  this.repository;
  goto L_276;
  undefined.refreshMemoryStorage();
  if (!((undefined !== e.failure))) goto L_2fa;
  if (!((undefined === t))) goto L_2fa;
  this.requestGeneration = (this.requestGeneration ++);
  this.presentFailureAlert((this.requestGeneration ++));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=81B file=memory_settings_ui/src/MemorySettingsScreen
// args: e
// locals: this
function {
  this = this;
  if (!(!this.isDestroyed())) goto L_50;
  return (e === this.requestGeneration);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=124B file=memory_settings_ui/src/MemorySettingsScreen
// args: t
// closure: this, e
function {
  if (!(this.isCurrentRequest(e))) goto L_7b;
  if (!(("retry" === t.selectedActionId))) goto L_7b;
  this.refreshSettings();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=44B file=memory_settings_ui/src/MemorySettingsScreen
// args: t
// closure: this, e
function {
  this.handleFailureAlertUnavailable(e, "Memory Settings platform alert rejected its result");
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=2 bc=533B file=memory_settings_ui/src/MemorySettingsScreen
// args: e
// locals: t, o, this
// closure: le, te
function {
  this = this;
  let t;
  t = {title: le.default.memorySettingsErrorTitle(), message: le.default.memorySettingsErrorMessage(), actions: [{id: "retry", title: le.default.memorySettingsRetry(), role: 0}, {id: "cancel", title: le.default.memorySettingsCancel(), role: 1}]};
  try { // catch -> L_1e0
  te.platformAlert.present(t).then(function <atom:0>, function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_214
  this.handleFailureAlertUnavailable(e, "Memory Settings could not present its error alert");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=249B file=memory_settings_ui/src/MemorySettingsScreen
// args: t, o
// locals: this
// closure: e
function {
  this = this;
  if (!(this.isCurrentRequest(t))) goto L_f8;
  if (!(e.isLoggingEnabled)) goto L_81;
  console.warn(o);
  if (!((undefined === this.state.settings))) goto L_f8;
  this.setState({recoveryAvailable: true});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=177B file=memory_settings_ui/src/MemorySettingsScreen
// args: t
// locals: o
// closure: oe, e
function {
  try { // catch -> L_51
  oe.platformBrowser.openURL(t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_b0
  if (!(e.isLoggingEnabled)) goto L_ad;
  console.warn("Memory Settings could not open its Learn more URL");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn pe  args=2 vars=3 closure=1 cpool=0 bc=229B file=memory_settings_ui/src/MemorySettingsScreen
// args: t, o
// locals: i
// closure: e
function {
  if (!((undefined === t))) goto L_8;
  return false;
  try { // catch -> L_38
  return (true === t.isFeatureFlagEnabled(o));
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_e4
  if (!(e.isLoggingEnabled)) goto L_df;
  console.warn("Memory Settings feature flag ".concat(o.flagName, " could not be read"));
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=78 closure=0 cpool=30 bc=3207B file=memory_settings_ui/src/MemorySettingsScreen
// args: require, module, exports
// locals: e, t, o, i, n, s, r, a, l, d, m, c, u, g, y, p, h, S, v, b, M, f, P, C, w, I, A, V, x, _, T, E, F, k, R, O, q, L, z, N, U, D, W, Y, G, H, j, B, K, X, Z, $, J, Q, ee, te, oe, ie, ne, se, re, ae, le, de, me, ce, ue, ge, ye, MemorySettingsScreen, <class_fields_init>, MemorySettingsScreen#1, pe, he, Se
function {
  pe = function pe;
  let Se;
  let he;
  let MemorySettingsScreen#1;
  let ye;
  let ge;
  let ue;
  let ce;
  let me;
  let de;
  let le;
  let ae;
  let re;
  let se;
  let ne;
  let ie;
  let oe;
  let te;
  let ee;
  let Q;
  let J;
  let $;
  let Z;
  let X;
  let K;
  let B;
  let j;
  let H;
  let G;
  let Y;
  let W;
  let D;
  let U;
  let N;
  let z;
  let L;
  let q;
  let O;
  let R;
  let k;
  let F;
  let E;
  let T;
  let _;
  let x;
  let V;
  let A;
  let I;
  let w;
  let C;
  let P;
  let f;
  let M;
  let b;
  let v;
  let S;
  let h;
  let p;
  let y;
  let g;
  let u;
  let c;
  let m;
  let d;
  let l;
  let a;
  let r;
  let s;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MemorySettingsScreen = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeComponentPrototype(undefined, "17evwAmwB-9146dV");
  i = t.makeComponentPrototype(undefined, "zC9AdO02lWI0kyvo");
  n = t.makeComponentPrototype(["accessibilityId", "memory-settings-list"], "Fh6NevVtwJcm272O");
  s = t.makeComponentPrototype(["accessibilityId", "memory-settings-toggle-section", "footerAccessibilityId", "memory-settings-toggle-footer"], "Uod6OYZogXZhf-cr");
  r = t.makeComponentPrototype(["accessibilityId", "memory-settings-toggle"], "dE2_hZ5OL-MOPY4S");
  a = t.makeComponentPrototype(["accessibilityId", "memory-settings-custom-instructions-section"], "YuInhvLFtDgcaiuJ");
  l = t.makeComponentPrototype(["accessibilityId", "memory-settings-custom-instructions"], "S1_FjlBufAjyivo0");
  d = t.makeComponentPrototype(["accessibilityId", "memory-settings-about-you"], "KDZSnc98AHdWddAm");
  m = t.makeComponentPrototype(undefined, "cFjqcF5qc31PU5YW");
  c = t.makeComponentPrototype(["autocorrection", "none", "maxLength", 1500], "eXXJWCaq-_5rOs_P");
  u = t.makeComponentPrototype(["accessibilityId", "memory-settings-recovery-section"], "oxPFTg81IkpP9oal");
  g = t.makeComponentPrototype(["accessibilityId", "memory-settings-retry"], "bCyE4tFjr4z7iY6n");
  y = t.makeComponentPrototype(undefined, "wk4bxgQuzcSIFfxc");
  p = t.makeComponentPrototype(["footerAccessibilityId", "memory-settings-management-footer"], "RXtxAjDmKPPD1ioG");
  h = t.makeComponentPrototype(["accessibilityId", "memory-summary-entrypoint"], "PzpHu88SiqvN5lf6");
  S = t.makeComponentPrototype(["accessibilityId", "memory-settings-saved-memories"], "ghI9xf40q7bStaci");
  v = t.makeNodePrototype("view", ["accessibilityId", "memory-settings-storage-warning"], "W2ztFEOv9Bezggin");
  b = t.makeComponentPrototype(undefined, "pKzh1yzMsy2bli8V");
  M = t.makeComponentPrototype(["lines", 0], "_cMTn1ox3gGX-nWm");
  f = t.makeNodePrototype("view", undefined, "aUX5dplnIe0E4jkM");
  P = t.makeNodePrototype("view", undefined, "2MYyu9H6i2KuxvI2");
  C = t.makeNodePrototype("layout", undefined, "LSoz8I6ZvcN0_iLX");
  w = t.makeNodePrototype("view", undefined, "ZOrIj_qMusYb8s9f");
  I = t.makeNodePrototype("layout", undefined, "t54PLFxg_o7jFYV6");
  A = t.makeComponentPrototype(["size", 20], "O3idAM4PypTGy0rm");
  V = t.makeComponentPrototype(undefined, "n4oZBMGX0NIkWOlL");
  x = t.makeComponentPrototype(["lines", 0], "WZmxh6wg3re1bMda");
  _ = require("oai_ui/src/components/settings/SettingsSearchHighlight");
  T = require("oai_ui/src/components/settings/SettingsTheme");
  E = require("dil_icon_assets/res");
  F = require("oai_core/src/OAITokens");
  k = require("oai_ui/src/components/Icon");
  R = require("valdi_core/src/Device");
  O = require("valdi_core/src/Style");
  q = require("valdi_core/src/SystemFont");
  L = require("custom_instructions_ui/src/Strings");
  z = require("oai_core/src/OAITheme");
  N = require("oai_core/src/OAIUITheme");
  U = require("valdi_ui/src/Platform");
  D = require("valdi_ui_theme/src/ValdiUITheme");
  W = require("oai_platform_services/src/AccountCustomizations");
  Y = require("oai_ui/src/components/InlineText");
  G = require("oai_ui/src/components/Text");
  H = require("oai_ui/res");
  j = require("oai_ui/src/components/settings/SettingsActionRow");
  B = require("oai_ui/src/components/settings/SettingsList");
  K = require("oai_ui/src/components/settings/SettingsRow");
  X = require("oai_ui/src/components/settings/SettingsSection");
  Z = require("oai_ui/src/components/settings/SettingsTextEntrySection");
  $ = require("oai_ui/src/components/settings/SettingsToggleRow");
  J = require("oai_ui/src/components/settings/SettingsTextInputRow");
  Q = require("valdi_core/src/CompilerIntrinsics");
  ee = require("valdi_core/src/Component");
  te = require("valdi_platform_alert/src/PlatformAlert");
  oe = require("valdi_platform_browser/src/PlatformBrowser");
  ie = require("valdi_navigation/src/NavigationController");
  ne = require("valdi_ui/src/components/SafeArea");
  se = require("./MemorySettingsCustomInstructionsController");
  re = require("./MemorySettingsModels");
  ae = require("./MemorySettingsRepository");
  le = require("./Strings");
  de = {flagName: "starlight-modal"};
  me = {flagName: "chatgpt-ios-golden-hour-available"};
  ce = {flagName: "chatgpt-m3m-settings-toggle-copy-eu"};
  ue = {flagName: "chatgpt_m3m_manage_memories_removed"};
  ge = "https://help.openai.com/articles/8590148-memory-faq";
  ye = "https://help.openai.com/articles/9237897-chatgpt-search";
  let MemorySettingsScreen;
  let <class_fields_init>;
  class MemorySettingsScreen extends ee.StatefulComponent { ... }
  <proto:MemorySettingsScreen>.onCreate = function <atom:0>;
  <proto:MemorySettingsScreen>.onDestroy = function <atom:0>;
  <proto:MemorySettingsScreen>.onRender = function <atom:0>;
  <proto:MemorySettingsScreen>.renderCustomInstructions = function <atom:0>;
  <proto:MemorySettingsScreen>.renderProfileFields = function <atom:0>;
  <proto:MemorySettingsScreen>.renderInlineProfileField = function <atom:0>;
  <proto:MemorySettingsScreen>.customizationValue = function <atom:0>;
  <proto:MemorySettingsScreen>.configureCustomInstructions = function <atom:0>;
  <proto:MemorySettingsScreen>.localContext = function <atom:0>;
  <proto:MemorySettingsScreen>.renderRecoveryAction = function <atom:0>;
  <proto:MemorySettingsScreen>.renderMemoryManagement = function <atom:0>;
  <proto:MemorySettingsScreen>.renderIOSStorageWarning = function <atom:0>;
  <proto:MemorySettingsScreen>.shouldShowSavedMemories = function <atom:0>;
  <proto:MemorySettingsScreen>.storageWarning = function <atom:0>;
  <proto:MemorySettingsScreen>.shouldShowMemorySummary = function <atom:0>;
  <proto:MemorySettingsScreen>.canOpenMemorySummary = function <atom:0>;
  <proto:MemorySettingsScreen>.canOpenSavedMemories = function <atom:0>;
  <proto:MemorySettingsScreen>.memoryToggleFooterSpans = function <atom:0>;
  <proto:MemorySettingsScreen>.memoryInSearchFooterSpans = function <atom:0>;
  <proto:MemorySettingsScreen>.memorySummaryFooterSpans = function <atom:0>;
  <proto:MemorySettingsScreen>.canOpenCustomInstructions = function <atom:0>;
  <proto:MemorySettingsScreen>.readFeatureAvailability = function <atom:0>;
  <proto:MemorySettingsScreen>.handleAccountState = function <atom:0>;
  <proto:MemorySettingsScreen>.isCurrentRequest = function <atom:0>;
  <proto:MemorySettingsScreen>.presentFailureAlert = function <atom:0>;
  <proto:MemorySettingsScreen>.handleFailureAlertUnavailable = function <atom:0>;
  <proto:MemorySettingsScreen>.openHelpURL = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MemorySettingsScreen>;
  MemorySettingsScreen = function <atom:0>;
  // close_loc <class_fields_init>
  MemorySettingsScreen#1 = function <atom:0>;
  exports.MemorySettingsScreen = MemorySettingsScreen#1;
  he = {warning: new O.Style({accessibilityId: "memory-settings-storage-warning", gap: 8, padding: 16, width: "100%"}), progress: new O.Style({backgroundColor: F.OAIColor.BgCanvas, borderRadius: 8, width: "100%"}), fillInset: new O.Style({position: "absolute", top: 4, bottom: 4, left: 4, right: 4}), fill: new O.Style({borderRadius: 4, height: "100%", opacity: 0.16}), content: new O.Style({flexDirection: "row", alignItems: "center", gap: 4, paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12})};
  Se = {font: q.systemSemiboldFont(15), lineHeight: 18, native: {font: q.semanticFont(q.SYSTEM_SEMIBOLD_FONT_NAME, q.SemanticFontTextStyle.Subheadline)}};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=memory_settings_ui/src/MemorySettingsScreen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
