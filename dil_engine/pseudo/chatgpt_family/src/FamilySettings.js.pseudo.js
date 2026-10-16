// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_family/src/FamilySettings
// args: e
function {
  e.Family = 0;
  e[0] = "Family";
  e.Apps = 1;
  e[1] = "Apps";
  e.Gmail = 2;
  e[2] = "Gmail";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_family/src/FamilySettings
// closure: $
function {
  return $.default.familySettingsTopicSchool();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_family/src/FamilySettings
// closure: $
function {
  return $.default.familySettingsTopicSports();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_family/src/FamilySettings
// closure: $
function {
  return $.default.familySettingsTopicChildcare();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_family/src/FamilySettings
// closure: $
function {
  return $.default.familySettingsTopicHealth();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_family/src/FamilySettings
// closure: $
function {
  return $.default.familySettingsTopicMoney();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_family/src/FamilySettings
// closure: $
function {
  return $.default.familySettingsTopicMeals();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_family/src/FamilySettings
// closure: $
function {
  return $.default.familySettingsTopicHome();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_family/src/FamilySettings
// closure: $
function {
  return $.default.familySettingsTopicTravel();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_family/src/FamilySettings
// closure: $
function {
  return $.default.familySettingsTopicEvents();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_family/src/FamilySettings
// closure: $
function {
  return $.default.familySettingsTopicTransportation();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_family/src/FamilySettings
// closure: $
function {
  return $.default.familySettingsTopicPets();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_family/src/FamilySettings
// closure: $
function {
  return $.default.familySettingsTopicCommunity();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_family/src/FamilySettings
// args: e
function {
  return e.id;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=279B file=chatgpt_family/src/FamilySettings
// closure: e, I, this, ne
function {
  e.beginRender(I, undefined);
  e.setAttributeString("src", this.context.gmailIconURL);
  e.setAttributeStyle("style", ne.gmailIcon);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=479B file=chatgpt_family/src/FamilySettings
// args: e
// closure: W, this, ee
function {
  if (!(W.isVersionAtLeast(188))) goto L_1de;
  if ((("delete" !== e))) goto L_1de;
  if (((this.state.page !== ee.Family))) goto L_1de;
  if ((this.viewModel.isLoading)) goto L_1de;
  if ((this.viewModel.hasError)) goto L_1de;
  if ((this.viewModel.isDeleting)) goto L_1de;
  if (!((this.context.onDelete == null))) goto L_1db;
  this.context.onDelete;
  this.context;
  goto L_1de;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=429B file=chatgpt_family/src/FamilySettings
// closure: this, ee
function {
  if (!((this.state.page === ee.Family))) goto L_b7;
  this.context.onBack();
  goto L_1ac;
  if (!((this.state.page === ee.Apps))) goto L_130;
  this.setState({page: ee.Family});
  goto L_1ac;
  if (!((this.state.page === ee.Gmail))) goto L_1ac;
  this.setState({page: ee.Apps, selectedLinkID: undefined});
  this.state.page;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=3 bc=151B file=chatgpt_family/src/FamilySettings
// locals: this, this.active_func, new.target, arguments
// closure: e, I, ne, W, ee, <class_fields_init>
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
  this.state = {page: ee.Family, selectedLinkID: undefined};
  this.renderGmailIcon = function <atom:0>;
  this.selectMenuAction = function <atom:0>;
  this.goBack = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=380B file=chatgpt_family/src/FamilySettings
// locals: this
// closure: ee
function {
  this = this;
  if (((this.state.page !== ee.Gmail))) goto L_17b;
  if ((this.viewModel.isLoadingGmail)) goto L_17b;
  if ((this.viewModel.gmailLinksHaveError)) goto L_17b;
  if (((undefined !== this.selectedLink))) goto L_17b;
  this.setState({page: ee.Apps, selectedLinkID: undefined});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=576B file=chatgpt_family/src/FamilySettings
// closure: e, E, l, $, q, this
function {
  e.beginComponent(E.NativeMenuButton, l, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", $.default.familySettingsMore());
  e.setViewModelProperty("foregroundColor", q.OAIColor.IconPrimary);
  e.setViewModelProperty("actions", [{id: "delete", title: $.default.familySettingsDelete(), destructive: true}]);
  e.setViewModelProperty("onSelect", this.selectMenuAction);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=19 cpool=1 bc=2868B file=chatgpt_family/src/FamilySettings
// closure: e, E, l, $, q, this, i, ne, o, z, n, B, r, ee, s, D, a, d, p
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", ne.root);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", ne.header);
  e.beginComponent(z.IconButton, n, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", $.default.familyOnboardingBack());
  e.setViewModelProperty("src", B.default.chevronLeft);
  e.setViewModelProperty("size", q.OAIControlSize.Sm);
  e.setViewModelProperty("style", ne.back);
  e.setViewModelProperty("onPress", this.goBack);
  e.endComponent();
  e.beginRender(r, undefined);
  e.setAttributeString("value", this.title);
  e.setAttributeStyle("style", ne.title);
  e.endRender();
  if (!((this.state.page === ee.Family))) goto L_780;
  if (!(!this.viewModel.isLoading)) goto L_780;
  if (!(!this.viewModel.hasError)) goto L_780;
  if (!(this.canDelete)) goto L_780;
  if (!(E.supportsNativeMenuButton())) goto L_780;
  if (!(this.isDeleting)) goto L_77a;
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", ne.headerSpacer);
  e.beginComponent(D.ActivityIndicator, a, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", $.default.familySettingsDisconnecting());
  e.endComponent();
  goto L_824;
  // [栈深重同步 1 -> 0]
  goto L_824;
  // [栈深重同步 1 -> 0]
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", ne.headerSpacer);
  e.endRender();
  e.endRender();
  if (!((this.state.page === ee.Family))) goto L_a02;
  if (!(this.deleteHasError)) goto L_a02;
  e.beginRender(p, undefined);
  e.setAttributeString("value", $.default.familySettingsDeleteError());
  e.setAttributeStyle("style", ne.description);
  e.endRender();
  if (!(this.viewModel.isLoading)) goto L_a74;
  goto L_b0b;
  // [栈深重同步 1 -> 0]
  if (!(this.viewModel.hasError)) goto L_ae4;
  goto L_b0b;
  // [栈深重同步 1 -> 0]
  this.renderPage();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=20 cpool=1 bc=212B file=chatgpt_family/src/FamilySettings
// locals: this
// closure: e, E, l, $, q, i, ne, o, z, n, B, r, ee, s, D, a, d, p, F, t
function {
  this = this;
  e.beginComponent(F.OAITheme, t, undefined, undefined);
  e.setViewModelProperty("fill", true);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=103B file=chatgpt_family/src/FamilySettings
// args: e
// closure: this
function {
  return (e.id === this.state.selectedLinkID);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=107B file=chatgpt_family/src/FamilySettings
// locals: this
function {
  this = this;
  return this.viewModel.gmailLinks.find(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=118B file=chatgpt_family/src/FamilySettings
// locals: this
// closure: W
function {
  this = this;
  if (!(!!W.isVersionAtLeast(188))) goto L_75;
  return (undefined !== this.context.onDelete);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=119B file=chatgpt_family/src/FamilySettings
// locals: this
// closure: W
function {
  this = this;
  if (!(!!W.isVersionAtLeast(188))) goto L_76;
  return (true === this.viewModel.isDeleting);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=119B file=chatgpt_family/src/FamilySettings
// locals: this
// closure: W
function {
  this = this;
  if (!(!!W.isVersionAtLeast(188))) goto L_76;
  return (true === this.viewModel.deleteHasError);
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=484B file=chatgpt_family/src/FamilySettings
// locals: this
// closure: ee, $
function {
  this = this;
  if (!((this.state.page === ee.Family))) goto L_b3;
  return $.default.familySettingsTitle();   // tail call
  if (!((this.state.page === ee.Apps))) goto L_121;
  return $.default.familySettingsApps();   // tail call
  if (!((this.state.page === ee.Gmail))) goto L_1e3;
  if (!((this.selectedLink == null))) goto L_174;
  this.selectedLink;
  goto L_195;
  if (!((undefined.displayName == null))) goto L_1e2;
  undefined.displayName;
  return $.default.familySettingsGmail();
  this.state.page;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=303B file=chatgpt_family/src/FamilySettings
// locals: this
// closure: ee
function {
  this = this;
  if (!((this.state.page === ee.Family))) goto L_94;
  this.renderFamily();
  goto L_12e;
  if (!((this.state.page === ee.Apps))) goto L_e2;
  this.renderApps();
  goto L_12e;
  if (!((this.state.page === ee.Gmail))) goto L_12e;
  this.renderGmail();
  this.state.page;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=77B file=chatgpt_family/src/FamilySettings
// closure: this, ee
function {
  return this.setState({page: ee.Apps});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=553B file=chatgpt_family/src/FamilySettings
// closure: this, ee, e, U, y, $
function {
  e.beginComponent(U.SettingsActionRow, y, undefined, undefined);
  e.setViewModelProperty("appearance", U.SettingsActionRowAppearance.NavigationLink);
  e.setViewModelProperty("label", $.default.familySettingsApps());
  if (!((this.viewModel.gmailLinks.length > 0))) goto L_1cd;
  goto L_1ce;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("trailingContent", undefined);
  e.setViewModelProperty("onPress", function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=1 bc=724B file=chatgpt_family/src/FamilySettings
// closure: this, ee, e, U, y, $, g, ne, Z, m, q, u
function {
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", ne.group);
  e.beginComponent(Z.SettingsSection, m, undefined, undefined);
  e.setViewModelProperty("backgroundColor", q.OAIColor.BgTertiary);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.beginRender(u, undefined);
  e.setAttributeString("value", $.default.familySettingsAppsDescription());
  e.setAttributeStyle("style", ne.description);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=13 cpool=1 bc=279B file=chatgpt_family/src/FamilySettings
// locals: this
// closure: ee, e, U, y, $, g, ne, Z, m, q, u, j, c
function {
  this = this;
  e.beginComponent(j.SettingsList, c, undefined, undefined);
  e.setViewModelProperty("backgroundColor", q.OAIColor.BgPrimary);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=116B file=chatgpt_family/src/FamilySettings
// closure: this, ee, t
function {
  return this.setState({page: ee.Gmail, selectedLinkID: t.id});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=6 cpool=1 bc=711B file=chatgpt_family/src/FamilySettings
// args: t, i
// closure: this, ee, e, U, b, oe
function {
  e.beginComponent(U.SettingsActionRow, b, t.id, undefined);
  e.setViewModelProperty("accessibilityId", "family.settings.gmail.".concat(t.id));
  e.setViewModelProperty("appearance", U.SettingsActionRowAppearance.NavigationLink);
  e.setViewModelProperty("label", t.displayName);
  e.setViewModelProperty("image", this.renderGmailIcon);
  e.setViewModelProperty("position", oe(i, this.viewModel.gmailLinks.length));
  e.setViewModelProperty("onPress", function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=106B file=chatgpt_family/src/FamilySettings
// closure: this, ee, e, U, b, oe
function {
  this.viewModel.gmailLinks.map(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=1 bc=394B file=chatgpt_family/src/FamilySettings
// closure: this, ee, e, U, b, oe, Z, h, $, q
function {
  e.beginComponent(Z.SettingsSection, h, undefined, undefined);
  e.setViewModelProperty("title", $.default.familySettingsEmail());
  e.setViewModelProperty("backgroundColor", q.OAIColor.BgTertiary);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=11 cpool=1 bc=683B file=chatgpt_family/src/FamilySettings
// locals: this
// closure: ee, e, U, b, oe, Z, h, $, q, j, v
function {
  this = this;
  if (!(this.viewModel.isLoadingGmail)) goto L_6f;
  goto L_2aa;
  // [栈深重同步 1 -> 0]
  if (!(this.viewModel.gmailLinksHaveError)) goto L_dc;
  goto L_2aa;
  // [栈深重同步 1 -> 0]
  if (!((0 !== this.viewModel.gmailLinks.length))) goto L_23d;
  e.beginComponent(j.SettingsList, v, undefined, undefined);
  e.setViewModelProperty("backgroundColor", q.OAIColor.BgPrimary);
  e.setUnnamedSlot(function <atom:0>);
  goto L_2aa;
  // [栈深重同步 1 -> 0]
  this.renderEmpty($.default.familySettingsNoGmail());
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=chatgpt_family/src/FamilySettings
// args: e
// closure: i
function {
  return i.includes(e.id);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_family/src/FamilySettings
// args: e
function {
  return e.id;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=155B file=chatgpt_family/src/FamilySettings
// args: e
// closure: this, t, te
function {
  if (!(e)) goto L_95;
  goto L_98;
  // [栈深重同步 4 -> 3]
  return this.context.onTopicsChanged(t.id, []);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=2 bc=418B file=chatgpt_family/src/FamilySettings
// closure: i, this, t, te, e, K, P, $
function {
  e.beginComponent(K.SettingsToggleRow, P, undefined, undefined);
  e.setViewModelProperty("label", $.default.familySettingsShareAll());
  e.setViewModelProperty("checked", te.every(function <atom:0>));
  e.setViewModelProperty("loading", false);
  e.setViewModelProperty("onChange", function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=200B file=chatgpt_family/src/FamilySettings
// closure: e, H, M, o
function {
  e.beginComponent(H.Icon, M, undefined, undefined);
  e.setViewModelProperty("src", o.icon);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=75B file=chatgpt_family/src/FamilySettings
// args: e
// closure: this, t, o
function {
  return this.updateTopic(t, o.id, e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=10 cpool=2 bc=669B file=chatgpt_family/src/FamilySettings
// args: o, n
// closure: e, H, M, this, t, K, A, i, oe, te
function {
  e.beginComponent(K.SettingsToggleRow, A, o.id, undefined);
  e.setViewModelProperty("accessibilityId", "family.settings.topic.".concat(o.id));
  e.setViewModelProperty("label", o.title());
  e.setViewModelProperty("image", function <atom:0>);
  e.setViewModelProperty("checked", i.includes(o.id));
  e.setViewModelProperty("loading", false);
  e.setViewModelProperty("position", oe(n, te.length));
  e.setViewModelProperty("onChange", function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=1 bc=42B file=chatgpt_family/src/FamilySettings
// closure: e, H, M, this, t, K, A, i, oe, te
function {
  te.map(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=19 cpool=2 bc=1118B file=chatgpt_family/src/FamilySettings
// closure: i, this, t, te, e, K, P, $, H, M, A, oe, f, ne, Z, w, q, C, k
function {
  e.beginRender(f, undefined);
  e.setAttributeStyle("style", ne.group);
  e.beginComponent(Z.SettingsSection, w, undefined, undefined);
  e.setViewModelProperty("title", $.default.familySettingsSharedTopics());
  e.setViewModelProperty("backgroundColor", q.OAIColor.BgTertiary);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.beginRender(C, undefined);
  e.setAttributeString("value", $.default.familySettingsLocalPreview());
  e.setAttributeStyle("style", ne.description);
  e.endRender();
  e.endRender();
  e.beginComponent(Z.SettingsSection, k, undefined, undefined);
  e.setViewModelProperty("backgroundColor", q.OAIColor.BgTertiary);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=19 cpool=1 bc=699B file=chatgpt_family/src/FamilySettings
// locals: t, i, this
// closure: te, e, K, P, $, H, M, A, oe, f, ne, Z, w, q, C, k, ie, j, S
function {
  this = this;
  let i;
  let t;
  if (!(this.viewModel.isLoadingGmail)) goto L_74;
  this.renderLoading();
  return;
  if (!(this.viewModel.gmailLinksHaveError)) goto L_e0;
  this.renderError();
  return;
  t = this.selectedLink;
  if (!((undefined === t))) goto L_179;
  this.renderEmpty($.default.familySettingsNoGmail());
  return;
  if (!((t.selectedTopicIDs == null))) goto L_1a5;
  t.selectedTopicIDs;
  i = ie;
  e.beginComponent(j.SettingsList, S, undefined, undefined);
  e.setViewModelProperty("backgroundColor", q.OAIColor.BgPrimary);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=chatgpt_family/src/FamilySettings
// args: e
// closure: o
function {
  return o.has(e.id);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_family/src/FamilySettings
// args: e
function {
  return e.id;
}

// fn <atom:0>  args=3 vars=5 closure=2 cpool=2 bc=327B file=chatgpt_family/src/FamilySettings
// args: e, t, i
// locals: o, this
// closure: ie, te
function {
  this = this;
  let o;
  if (!((e.selectedTopicIDs == null))) goto L_35;
  e.selectedTopicIDs;
  o = new Set(ie);
  if (!(i)) goto L_66;
  goto L_8e;
  // [栈深重同步 1 -> 0]
  o.delete(t);
  this.context.onTopicsChanged(e.id, te.filter(function <atom:0>).map(function <atom:0>));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=568B file=chatgpt_family/src/FamilySettings
// closure: e, R, ne, D, L, V, $
function {
  e.beginRender(R, undefined);
  e.setAttributeStyle("style", ne.message);
  e.beginComponent(D.ActivityIndicator, L, undefined, undefined);
  e.endComponent();
  e.beginRender(V, undefined);
  e.setAttributeString("value", $.default.familySettingsLoading());
  e.setAttributeStyle("style", ne.messageLabel);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=0 bc=799B file=chatgpt_family/src/FamilySettings
// locals: this
// closure: e, T, ne, N, $, G, _
function {
  this = this;
  e.beginRender(T, undefined);
  e.setAttributeStyle("style", ne.message);
  e.beginRender(N, undefined);
  e.setAttributeString("value", $.default.familySettingsError());
  e.setAttributeStyle("style", ne.messageLabel);
  e.endRender();
  e.beginComponent(G.Button, _, undefined, undefined);
  e.setViewModelProperty("label", $.default.familyOnboardingRetry());
  e.setViewModelProperty("onPress", this.context.onRetry);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=376B file=chatgpt_family/src/FamilySettings
// args: t
// closure: e, O, ne, x
function {
  e.beginRender(O, undefined);
  e.setAttributeStyle("style", ne.message);
  e.beginRender(x, undefined);
  e.setAttributeString("value", t);
  e.setAttributeStyle("style", ne.messageLabel);
  e.endRender();
  e.endRender();
  return;
}

// fn oe  args=2 vars=2 closure=1 cpool=0 bc=297B file=chatgpt_family/src/FamilySettings
// args: e, t
// closure: J
function {
  if (!((1 === t))) goto L_4b;
  return J.SettingsRowPosition.Only;
  if (!((0 === e))) goto L_96;
  return J.SettingsRowPosition.First;
  if (!((e === (t - 1)))) goto L_e3;
  return J.SettingsRowPosition.Last;
  return J.SettingsRowPosition.Middle;
}

// fn <atom:0>  args=3 vars=65 closure=0 cpool=31 bc=5198B file=chatgpt_family/src/FamilySettings
// args: require, module, exports
// locals: e, t, i, o, n, r, s, a, l, d, p, c, g, m, y, u, v, h, b, S, f, w, P, C, k, A, M, I, R, L, V, T, N, _, O, x, B, E, F, q, D, G, H, z, U, j, J, Z, K, Y, W, X, Q, $, ee, te, ie, FamilySettings, <class_fields_init>, FamilySettings#1, oe, ne
function {
  oe = function oe;
  let ne;
  let FamilySettings#1;
  let ie;
  let te;
  let $;
  let Q;
  let X;
  let W;
  let Y;
  let K;
  let Z;
  let J;
  let j;
  let U;
  let z;
  let H;
  let G;
  let D;
  let q;
  let F;
  let E;
  let B;
  let x;
  let O;
  let _;
  let N;
  let T;
  let V;
  let L;
  let R;
  let I;
  let M;
  let A;
  let k;
  let C;
  let P;
  let w;
  let f;
  let S;
  let b;
  let h;
  let v;
  let u;
  let y;
  let m;
  let g;
  let c;
  let p;
  let d;
  let l;
  let a;
  let s;
  let r;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FamilySettings = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "qrhugZlLmdz40JzK");
  i = e.makeNodePrototype("view", undefined, "PVR9HlBp_r3r-6_e");
  o = e.makeNodePrototype("layout", undefined, "WUUdldwupkE8I_sP");
  n = e.makeComponentPrototype(["accessibilityId", "family.settings.back"], "AuWqLoWonyTQgzCo");
  r = e.makeNodePrototype("label", ["accessibilityId", "family.settings.title"], "Ow_BIjtLyih7NMNI");
  s = e.makeNodePrototype("layout", undefined, "J00Pfu3ArbYsw0Qm");
  a = e.makeComponentPrototype(["accessibilityId", "family.settings.disconnecting"], "CILYW-S4FwnvrN5W");
  l = e.makeComponentPrototype(["accessibilityId", "family.settings.more"], "9Ttge0CKbPCBDcuo");
  d = e.makeNodePrototype("layout", undefined, "p-y-4iLwP3aVrn0A");
  p = e.makeNodePrototype("label", ["accessibilityId", "family.settings.delete-error"], "6w-4gfn-Vhx_0xxW");
  c = e.makeComponentPrototype(["accessibilityId", "family.settings.home", "verticalInset", 24, "sectionGap", 24], "3cEcGAgpDAhRHHHZ");
  g = e.makeNodePrototype("layout", undefined, "wYqvcSA4qJFd02qA");
  m = e.makeComponentPrototype(["bottomMargin", 0], "sYIMdDCrVmPdjs3g");
  y = e.makeComponentPrototype(["accessibilityId", "family.settings.apps"], "YT4BZZ-atuOHyke0");
  u = e.makeNodePrototype("label", undefined, "cMk4E-7vVTw5P0p6");
  v = e.makeComponentPrototype(["accessibilityId", "family.settings.app-list", "verticalInset", 24], "mvyrJjHuRrzbKXEt");
  h = e.makeComponentPrototype(["topMargin", 0], "dOwMT6geWvWhHUjf");
  b = e.makeComponentPrototype(undefined, "ayjRtzj0TeI_NE2F");
  S = e.makeComponentPrototype(["accessibilityId", "family.settings.topics", "verticalInset", 24, "sectionGap", 24], "zxf7OsIwEh6JThzk");
  f = e.makeNodePrototype("layout", undefined, "O1Kx0RAvud_zAM4L");
  w = e.makeComponentPrototype(["topMargin", 0, "bottomMargin", 0], "lj9gND4t8Lg5BjMr");
  P = e.makeComponentPrototype(["accessibilityId", "family.settings.share-all"], "AJouD_xwMTyYxwYB");
  C = e.makeNodePrototype("label", ["accessibilityId", "family.settings.local-preview"], "zH_4oZTviRKdb5ro");
  k = e.makeComponentPrototype(["bottomMargin", 0], "xkhvF107yNz9ZGMj");
  A = e.makeComponentPrototype(undefined, "TZxqHdEQlkIaapqH");
  M = e.makeComponentPrototype(["size", 24], "iNf0nCEKJZxa2qg-");
  I = e.makeNodePrototype("image", undefined, "E3L0jGTaa3UYjHOB");
  R = e.makeNodePrototype("layout", undefined, "Z7eWN3KNvheZpzgT");
  L = e.makeComponentPrototype(undefined, "w76picGk3sT5h8Xh");
  V = e.makeNodePrototype("label", ["accessibilityId", "family.settings.loading"], "RvaA5Jz-PaG-KYgc");
  T = e.makeNodePrototype("layout", undefined, "uxKwmk9rU63Oi2wi");
  N = e.makeNodePrototype("label", ["accessibilityId", "family.settings.error"], "tb0zXAOfZfv8b8T7");
  _ = e.makeComponentPrototype(["accessibilityId", "family.settings.retry"], "VFvTUt6RJO8oAkPu");
  O = e.makeNodePrototype("layout", undefined, "FoJVKF_Ng98RfSip");
  x = e.makeNodePrototype("label", ["accessibilityId", "family.settings.empty"], "NYyM3qXt9m4X0fcB");
  B = require("dil_icon_assets/res");
  E = require("native_menu/src/NativeMenuButton");
  F = require("oai_core/src/OAITheme");
  q = require("oai_core/src/OAITokens");
  D = require("oai_ui/src/components/ActivityIndicator");
  G = require("oai_ui/src/components/Button");
  H = require("oai_ui/src/components/Icon");
  z = require("oai_ui/src/components/IconButton");
  U = require("oai_ui/src/components/settings/SettingsActionRow");
  j = require("oai_ui/src/components/settings/SettingsList");
  J = require("oai_ui/src/components/settings/SettingsRow");
  Z = require("oai_ui/src/components/settings/SettingsSection");
  K = require("oai_ui/src/components/settings/SettingsToggleRow");
  Y = require("valdi_core/src/Component");
  W = require("valdi_core/src/CompilerIntrinsics");
  X = require("valdi_core/src/Style");
  Q = require("valdi_core/src/SystemFont");
  $ = require("./Strings");
  if ((ee)) goto L_990;
  ee = {};
  !function <atom:0>({});
  te = [{id: "school_learning", title: function <atom:0>, icon: B.default.bookOpen}, {id: "sports_activities", title: function <atom:0>, icon: B.default.volleyball}, {id: "childcare", title: function <atom:0>, icon: B.default.childAndPerson}, {id: "health_care", title: function <atom:0>, icon: B.default.heart}, {id: "money_bills", title: function <atom:0>, icon: B.default.dollarCircle}, {id: "meals_groceries", title: function <atom:0>, icon: B.default.wineAndCloche}, {id: "home_chores", title: function <atom:0>, icon: B.default.house}, {id: "travel", title: function <atom:0>, icon: B.default.map}, {id: "events_celebrations", title: function <atom:0>, icon: B.default.calendarDays}, {id: "transportation", title: function <atom:0>, icon: B.default.car}, {id: "pets", title: function <atom:0>, icon: B.default.paw}, {id: "community", title: function <atom:0>, icon: B.default.users}];
  ie = te.slice(0, 2).map(function <atom:0>);
  let FamilySettings;
  let <class_fields_init>;
  class FamilySettings extends Y.StatefulComponent { ... }
  <proto:FamilySettings>.onViewModelUpdate = function <atom:0>;
  <proto:FamilySettings>.onRender = function <atom:0>;
  <proto:FamilySettings>.selectedLink = function <atom:0>;
  <proto:FamilySettings>.canDelete = function <atom:0>;
  <proto:FamilySettings>.isDeleting = function <atom:0>;
  <proto:FamilySettings>.deleteHasError = function <atom:0>;
  <proto:FamilySettings>.title = function <atom:0>;
  <proto:FamilySettings>.renderPage = function <atom:0>;
  <proto:FamilySettings>.renderFamily = function <atom:0>;
  <proto:FamilySettings>.renderApps = function <atom:0>;
  <proto:FamilySettings>.renderGmail = function <atom:0>;
  <proto:FamilySettings>.updateTopic = function <atom:0>;
  <proto:FamilySettings>.renderLoading = function <atom:0>;
  <proto:FamilySettings>.renderError = function <atom:0>;
  <proto:FamilySettings>.renderEmpty = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FamilySettings>;
  FamilySettings = function <atom:0>;
  // close_loc <class_fields_init>
  FamilySettings#1 = function <atom:0>;
  exports.FamilySettings = FamilySettings#1;
  ne = {root: new X.Style({width: "100%", height: "100%", backgroundColor: q.OAIColor.BgPrimary, accessibilityNavigation: "passthrough"}), header: new X.Style({flexDirection: "row", alignItems: "center", width: "100%", paddingLeft: 16, paddingRight: 16, paddingTop: 6, paddingBottom: 6}), back: new X.Style({width: 44, height: 44, borderRadius: 22, backgroundColor: q.OAIColor.BgPrimary, boxShadow: "0 4 36 rgba(0,0,0,0.15)"}), headerSpacer: new X.Style({width: 44, height: 44, flexShrink: 0, alignItems: "center", justifyContent: "center"}), title: new X.Style({flexGrow: 1, flexShrink: 1, font: Q.systemSemiboldFont(17), lineHeight: 24, textAlign: "center", numberOfLines: 1, color: q.OAIColor.TextPrimary}), group: new X.Style({width: "100%", gap: 8}), description: new X.Style({marginLeft: 16, marginRight: 16, font: Q.systemFont(15), lineHeight: 20, numberOfLines: 0, color: q.OAIColor.TextTertiary}), gmailIcon: new X.Style({width: 24, height: 24, objectFit: "contain", accessibilityNavigation: "ignored"}), message: new X.Style({width: "100%", padding: 24, gap: 16, alignItems: "center"}), messageLabel: new X.Style({width: "100%", font: Q.systemFont(17), lineHeight: 24, numberOfLines: 0, textAlign: "center", color: q.OAIColor.TextSecondary})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_family/src/FamilySettings
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
