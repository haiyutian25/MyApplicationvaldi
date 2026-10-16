// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=165B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: me, this
function {
  if (!(me.isVersionAtLeast(67))) goto L_a4;
  if (!((this.context == null))) goto L_57;
  this.context;
  goto L_a4;
  if (!((undefined.host == null))) goto L_80;
  undefined.host;
  goto L_a4;
  undefined.dismiss();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=165B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: me, this
function {
  if (!(me.isVersionAtLeast(67))) goto L_a4;
  if (!((this.context == null))) goto L_57;
  this.context;
  goto L_a4;
  if (!((undefined.host == null))) goto L_80;
  undefined.host;
  goto L_a4;
  undefined.onCreditAccountRemoved();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=177B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: me, this
function {
  if (!(me.isVersionAtLeast(67))) goto L_b0;
  if (!((this.context == null))) goto L_5a;
  this.context;
  goto L_b0;
  if (!((undefined.host == null))) goto L_83;
  undefined.host;
  goto L_b0;
  if (!((undefined.followUp == null))) goto L_ad;
  undefined.followUp;
  undefined;
  goto L_b0;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=3 bc=91B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: this, this.active_func, new.target, arguments
// closure: me, <class_fields_init>
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
  this.dismiss = function <atom:0>;
  this.handleRemoved = function <atom:0>;
  this.followUp = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=1098B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: this
// closure: t, FinanceCreditAccountDetailScreen, i
function {
  this = this;
  t.beginComponent(FinanceCreditAccountDetailScreen, i, undefined, undefined);
  t.setViewModelProperty("hideHeader", (true === this.viewModel.hideHeader));
  t.setViewModelProperty("initialScore", undefined);
  t.setViewModelProperty("isDarkMode", this.viewModel.isDarkMode);
  t.setViewModelProperty("locale", this.viewModel.locale);
  t.setViewModelProperty("onDismiss", this.dismiss);
  if (!(this.hasFollowUp)) goto L_273;
  goto L_274;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onFollowUp", undefined);
  t.setViewModelProperty("onRemoved", this.handleRemoved);
  if (!((this.context == null))) goto L_31a;
  this.context;
  goto L_33b;
  t.setViewModelProperty("platformServices", undefined.platformServices);
  t.setViewModelProperty("refreshKey", this.viewModel.refreshKey);
  t.setViewModelProperty("sensitiveValuesHidden", (true === this.viewModel.sensitiveValuesHidden));
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=166B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: this
// closure: me
function {
  this = this;
  if (!(!!me.isVersionAtLeast(67))) goto L_a5;
  if (!((this.context == null))) goto L_5a;
  this.context;
  goto L_a4;
  if (!((undefined.host == null))) goto L_83;
  undefined.host;
  goto L_a4;
  return (undefined !== undefined.followUp);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: e
function {
  e.Loading = 0;
  e[0] = "Loading";
  e.Loaded = 1;
  e[1] = "Loaded";
  e.Failed = 2;
  e[2] = "Failed";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=106B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: e
function {
  e.Loaded = "credit_detail_loaded";
  e.Empty = "credit_detail_empty";
  e.Error = "credit_detail_error";
  e.DisconnectIntent = "credit_disconnect_intent";
  e.DisconnectCancelled = "credit_disconnect_cancelled";
  e.DisconnectSucceeded = "credit_disconnect_succeeded";
  e.DisconnectFailed = "credit_disconnect_failed";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: this
function {
  this.loadScore();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=87B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: this
function {
  this.analyticsDismissed = true;
  this.viewModel.onDismiss();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=359B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: this, fe
function {
  if (((undefined === this.state.score))) goto L_166;
  if ((this.state.confirmingRemoval)) goto L_166;
  if ((this.state.isRemoving)) goto L_166;
  this.setState({confirmingRemoval: true, hasRemoveError: false});
  this.track(fe.DisconnectIntent);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=282B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: this, fe
function {
  if (!(this.state.confirmingRemoval)) goto L_119;
  if (!(!this.state.isRemoving)) goto L_119;
  this.setState({confirmingRemoval: false, hasRemoveError: false});
  this.track(fe.DisconnectCancelled);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=354B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: i, this, Se, fe
function {
  if (!((i === this.removalGeneration))) goto L_161;
  this.activeRemoval = undefined;
  this.setState({score: undefined, status: Se.Loaded, confirmingRemoval: false, isRemoving: false, hasRemoveError: false});
  this.track(fe.DisconnectSucceeded);
  this.viewModel.onRemoved();
  this.dismiss();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=284B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: t
// closure: i, this, e, fe
function {
  if (!((i === this.removalGeneration))) goto L_11b;
  if (!(e.isLoggingEnabled)) goto L_8d;
  console.warn(("Unable to remove authenticated Finance credit account: " + String(t)));
  this.activeRemoval = undefined;
  this.setState({isRemoving: false, hasRemoveError: true});
  this.track(fe.DisconnectFailed);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=2 bc=694B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: t, i, o
// closure: this, Se, fe, e, pe
function {
  let o;
  let i;
  let t;
  t = this.api;
  if (((undefined === t))) goto L_13b;
  if ((!this.state.confirmingRemoval)) goto L_13b;
  if ((this.state.isRemoving)) goto L_13b;
  if (!(!pe.isFinanceCreditDataEnabled(this.viewModel.platformServices))) goto L_13e;
  return;
  this.readGeneration = (this.readGeneration + 1);
  if (!((this.activeRead == null))) goto L_199;
  this.activeRead;
  goto L_1bd;
  undefined.cancel();
  this.activeRead = undefined;
  this.removalGeneration = (this.removalGeneration ++);
  i = (this.removalGeneration ++);
  this.setState({isRemoving: true, hasRemoveError: false});
  o = t.removeCreditAccount();
  this.activeRemoval = o;
  o.result.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=5 bc=252B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: this, this.active_func, new.target, arguments
// closure: fe, Se, e, pe, <class_fields_init>
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
  this.state = {score: undefined, status: Se.Loading, confirmingRemoval: false, isRemoving: false, hasRemoveError: false};
  this.readGeneration = 0;
  this.removalGeneration = 0;
  this.creditEnabled = false;
  this.analyticsDismissed = false;
  this.retryLoading = function <atom:0>;
  this.dismiss = function <atom:0>;
  this.requestRemoval = function <atom:0>;
  this.cancelRemoval = function <atom:0>;
  this.removeAccount = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=107B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: this
function {
  this = this;
  this.initializeOwner(this.viewModel.initialScore);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=741B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: e, t, this
// closure: pe, Se
function {
  this = this;
  let t;
  let e;
  if (!((this.viewModel.platformServices == null))) goto L_53;
  this.viewModel.platformServices;
  goto L_74;
  if (!((undefined.apiService !== this.apiService))) goto L_c1;
  this.initializeOwner(undefined);
  return;
  e = pe.isFinanceCreditDataEnabled(this.viewModel.platformServices);
  t = this.viewModel.refreshKey;
  if (!((e === this.creditEnabled))) goto L_1be;
  if (((t === this.observedRefreshKey))) goto L_2e4;
  this.creditEnabled = e;
  this.observedRefreshKey = t;
  if (!(e)) goto L_256;
  if ((this.state.isRemoving)) goto L_2e4;
  goto L_2e4;
  // [栈深重同步 1 -> 0]
  this.cancelRequests();
  this.setState({score: undefined, status: Se.Loaded, confirmingRemoval: false, isRemoving: false, hasRemoveError: false});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=52B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: this
function {
  this = this;
  this.analyticsDismissed = true;
  this.cancelRequests();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=859B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: t, d, Me, de, s, this, be, oe
function {
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", Me.footer);
  t.beginComponent(de.Button, s, undefined, undefined);
  t.setViewModelProperty("disabled", this.state.isRemoving);
  t.setViewModelProperty("label", be.default.financeAccountsCreditFollowUp());
  t.setViewModelProperty("onPress", this.viewModel.onFollowUp);
  t.setViewModelProperty("size", oe.OAIControlSize.Md);
  t.setViewModelProperty("variant", de.ButtonVariant.Secondary);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=1 bc=663B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: t, d, Me, de, s, this, be, oe, n, r, e
function {
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", Me.root);
  if (!(!this.viewModel.hideHeader)) goto L_ee;
  this.renderHeader();
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", Me.scroll);
  if (!((undefined === e))) goto L_19c;
  goto L_1c6;
  // [栈深重同步 1 -> 0]
  this.renderReport(e);
  t.endRender();
  if (!((undefined !== e))) goto L_246;
  if (!((undefined !== this.viewModel.onFollowUp))) goto L_246;
  function <atom:0>();
  this.renderRemovalDialog();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=11 cpool=1 bc=687B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: e, i, this
// closure: t, d, Me, de, s, be, oe, n, r, ie, o
function {
  this = this;
  let i;
  let e;
  e = this.state.score;
  if (!((undefined === this.viewModel.isDarkMode))) goto L_db;
  goto L_1ac;
  // [栈深重同步 1 -> 0]
  if (!(this.viewModel.isDarkMode)) goto L_167;
  goto L_1ac;
  // [栈深重同步 1 -> 0]
  i = ie.OAIThemeMode.Light;
  t.beginComponent(ie.OAITheme, o, undefined, undefined);
  t.setViewModelProperty("fill", true);
  t.setViewModelProperty("mode", i);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=0 bc=994B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: this
// closure: t, a, Me, le, l, be, oe, te, c
function {
  this = this;
  t.beginRender(a, undefined);
  t.setAttributeStyle("style", Me.header);
  t.beginComponent(le.IconButton, l, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", be.default.financeAccountsCreditBack());
  t.setViewModelProperty("onPress", this.dismiss);
  t.setViewModelProperty("size", oe.OAIControlSize.Md);
  t.setViewModelProperty("src", te.default.chevronLeftMd);
  t.endComponent();
  t.beginRender(c, undefined);
  t.setAttributeStyle("style", Me.headerTitle);
  t.setAttributeString("value", be.default.financeAccountsSectionCreditScore());
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=547B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: t, de, u, be, this, oe
function {
  t.beginComponent(de.Button, u, undefined, undefined);
  t.setViewModelProperty("label", be.default.financeAccountsRetry());
  t.setViewModelProperty("onPress", this.retryLoading);
  t.setViewModelProperty("size", oe.OAIControlSize.Sm);
  t.setViewModelProperty("variant", de.ButtonVariant.Secondary);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=11 cpool=1 bc=1155B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: e, i, this
// closure: t, de, u, be, oe, Se, m, Me, re, v, y
function {
  this = this;
  let i;
  let e;
  e = (this.state.status === Se.Loading);
  i = (this.state.status === Se.Failed);
  t.beginRender(m, undefined);
  t.setAttributeStyle("style", Me.messageContainer);
  if (!(e)) goto L_2c1;
  t.beginComponent(re.ActivityIndicator, v, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", be.default.financeAccountsCreditLoading());
  t.setViewModelProperty("size", re.ActivityIndicatorSize.Small);
  goto L_429;
  // [栈深重同步 1 -> 0]
  t.beginRender(y, undefined);
  t.setAttributeStyle("style", Me.message);
  if (!(i)) goto L_3b6;
  goto L_3fe;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("value", be.default.financeAccountsCreditUnavailable());
  t.endRender();
  if (!(i)) goto L_45a;
  if (!(this.creditEnabled)) goto L_45a;
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: e, t
// closure: this
function {
  return this.renderMetric(e, t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=1 bc=819B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: this, t, I, Me, M, O, be, D, o
function {
  t.beginRender(I, undefined);
  t.setAttributeStyle("style", Me.metricSection);
  t.beginRender(M, undefined);
  t.setAttributeStyle("style", Me.sectionHeading);
  t.beginRender(O, undefined);
  t.setAttributeStyle("style", Me.sectionTitle);
  t.setAttributeString("value", be.default.financeAccountsCreditInformation());
  t.endRender();
  t.endRender();
  t.beginRender(D, undefined);
  t.setAttributeStyle("style", Me.metricList);
  o.map(function <atom:0>);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=24 cpool=1 bc=4428B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: e
// locals: i, o, this
// closure: t, I, Me, M, O, be, D, pe, h, p, g, b, ge, S, f, w, A, de, R, C, ae, P, oe, k
function {
  this = this;
  let o;
  let i;
  i = pe.formatFinanceCreditScore(e.scoreValue, this.viewModel.sensitiveValuesHidden, this.viewModel.locale);
  o = pe.buildFinanceCreditAccountMetrics(e, this.viewModel.sensitiveValuesHidden, this.viewModel.locale);
  t.beginRender(h, undefined);
  t.setAttributeStyle("style", Me.report);
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", Me.summary);
  t.beginRender(g, undefined);
  t.setAttributeStyle("style", Me.summaryIdentity);
  t.beginRender(b, undefined);
  t.setAttributeStyle("style", Me.institutionIcon);
  t.beginComponent(ge.FinanceCreditInstitutionLogo, S, undefined, undefined);
  t.endComponent();
  t.endRender();
  t.beginRender(f, undefined);
  t.setAttributeStyle("style", Me.summaryCopy);
  t.beginRender(w, undefined);
  t.setAttributeStyle("style", Me.institutionTitle);
  t.setAttributeString("value", be.default.financeAccountsCreditInstitutionName());
  t.endRender();
  t.beginRender(A, undefined);
  t.setAttributeStyle("style", Me.summarySubtitle);
  t.setAttributeString("value", be.default.financeAccountsCreditSummary(i));
  t.endRender();
  t.endRender();
  t.endRender();
  t.beginComponent(de.Button, R, undefined, undefined);
  t.setViewModelProperty("block", true);
  t.setViewModelProperty("disabled", this.state.isRemoving);
  t.setViewModelProperty("label", be.default.financeAccountsCreditRemove());
  t.setViewModelProperty("labelStyle", Me.removeButtonLabel);
  t.setViewModelProperty("onPress", this.requestRemoval);
  t.setViewModelProperty("style", Me.removeButton);
  t.setViewModelProperty("variant", de.ButtonVariant.Secondary);
  t.endComponent();
  t.endRender();
  t.beginRender(C, undefined);
  t.setAttributeStyle("style", Me.metadata);
  this.renderMetadataRow("institution", be.default.financeAccountsCreditInstitution(), be.default.financeAccountsCreditInstitutionName());
  if (!((undefined !== e.scoreModel))) goto L_c2b;
  this.renderMetadataRow("score-model", be.default.financeAccountsCreditScoreModel(), e.scoreModel);
  if (!((undefined !== e.scoreDate))) goto L_d53;
  this.renderMetadataRow("score-date", be.default.financeAccountsCreditScoreDate(), pe.formatFinanceCreditDate(e.scoreDate, this.viewModel.locale));
  if (!((undefined !== e.reportDate))) goto L_e7b;
  this.renderMetadataRow("report-date", be.default.financeAccountsCreditReportDate(), pe.formatFinanceCreditDate(e.reportDate, this.viewModel.locale));
  this.renderMetadataRow("account-type", be.default.financeAccountsCreditAccountType(), be.default.financeAccountsCreditBureau());
  t.beginComponent(ae.Divider, P, undefined, undefined);
  t.setViewModelProperty("color", oe.OAIColor.BorderLight);
  t.endComponent();
  t.endRender();
  if (!((o.length > 0))) goto L_1057;
  function <atom:0>();
  t.beginRender(k, undefined);
  t.setAttributeStyle("style", Me.disclosureContainer);
  this.renderDisclosure(e);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: this, i
function {
  return this.openCreditDisclosure(i.linkUrl);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=6 cpool=1 bc=1078B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: e
// locals: i, o, this
// closure: t, x, Me, ue, V, L
function {
  this = this;
  let o;
  let i;
  i = e.disclosureDetails;
  if (!((undefined === i))) goto L_12a;
  t.beginRender(x, undefined);
  t.setAttributeStyle("style", Me.disclosure);
  t.setAttributeString("value", e.disclosure);
  t.endRender();
  return;
  o = new ue.AttributedTextBuilder().append((i.body + " ")).appendInlineView(0, 0).build();
  t.beginRender(V, undefined);
  t.setAttributeStyle("style", Me.disclosure);
  t.setAttributeString("accessibilityLabel", i.body);
  t.setAttribute("value", o);
  t.beginRender(L, undefined);
  t.setAttributeStyle("style", Me.disclosureLink);
  t.setAttributeFunction("onTap", function <atom:0>);
  t.setAttributeString("value", i.linkText);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=177B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: t
// locals: i
// closure: he, e
function {
  try { // catch -> L_51
  he.platformBrowser.openURL(t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_b0
  if (!(e.isLoggingEnabled)) goto L_ad;
  console.warn("Finance credit could not open its disclosure URL");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=3 closure=9 cpool=0 bc=1039B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: e, i, o
// closure: t, T, Me, ae, F, oe, H, _, E
function {
  t.beginRender(T, e);
  t.setAttributeStyle("style", Me.rowContainer);
  t.setAttributeString("accessibilityId", ("finance-credit-metadata-" + e));
  t.beginComponent(ae.Divider, F, undefined, undefined);
  t.setViewModelProperty("color", oe.OAIColor.BorderLight);
  t.endComponent();
  t.beginRender(H, undefined);
  t.setAttributeStyle("style", Me.metadataRow);
  t.beginRender(_, undefined);
  t.setAttributeStyle("style", Me.metadataLabel);
  t.setAttributeString("value", i);
  t.endRender();
  t.beginRender(E, undefined);
  t.setAttributeStyle("style", Me.metadataValue);
  t.setAttributeString("value", o);
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=11 cpool=0 bc=1590B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: e, i
// closure: t, N, Me, ae, B, oe, q, z, U, G, j
function {
  t.beginRender(N, e.key);
  t.setAttributeStyle("style", Me.rowContainer);
  t.setAttributeString("accessibilityId", ("finance-credit-metric-" + e.key));
  if (!((i > 0))) goto L_1e7;
  t.beginComponent(ae.Divider, B, undefined, undefined);
  t.setViewModelProperty("color", oe.OAIColor.BorderLight);
  t.endComponent();
  t.beginRender(q, undefined);
  t.setAttributeStyle("style", Me.metricRow);
  t.beginRender(z, undefined);
  t.setAttributeStyle("style", Me.metricLabel);
  t.setAttributeString("value", e.label);
  t.endRender();
  t.beginRender(U, undefined);
  t.setAttributeStyle("style", Me.metricValues);
  t.beginRender(G, undefined);
  t.setAttributeStyle("style", Me.metricValue);
  t.setAttributeString("value", e.valueLabel);
  t.endRender();
  t.beginRender(j, undefined);
  t.setAttributeStyle("style", Me.metricDetail);
  t.setAttributeString("value", e.detailLabel);
  t.endRender();
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=13 cpool=0 bc=2688B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// closure: t, W, Me, X, be, Y, this, Q, Z, de, J, oe, $
function {
  t.beginRender(W, undefined);
  t.setAttributeStyle("style", Me.dialogContent);
  t.beginRender(X, undefined);
  t.setAttributeStyle("style", Me.dialogTitle);
  t.setAttributeString("value", be.default.financeAccountsCreditRemoveTitle());
  t.endRender();
  t.beginRender(Y, undefined);
  t.setAttributeStyle("style", Me.dialogDescription);
  t.setAttributeString("value", be.default.financeAccountsCreditRemoveDescription());
  t.endRender();
  if (!(this.state.hasRemoveError)) goto L_416;
  t.beginRender(Q, undefined);
  t.setAttributeStyle("style", Me.removeError);
  t.setAttributeString("value", be.default.financeAccountsCreditRemoveError());
  t.endRender();
  t.beginRender(Z, undefined);
  t.setAttributeStyle("style", Me.dialogActions);
  t.beginComponent(de.Button, J, undefined, undefined);
  t.setViewModelProperty("disabled", this.state.isRemoving);
  t.setViewModelProperty("label", be.default.financeAccountsCreditRemoveCancel());
  t.setViewModelProperty("onPress", this.cancelRemoval);
  t.setViewModelProperty("size", oe.OAIControlSize.Sm);
  t.setViewModelProperty("variant", de.ButtonVariant.Secondary);
  t.endComponent();
  t.beginComponent(de.Button, $, undefined, undefined);
  t.setViewModelProperty("disabled", this.state.isRemoving);
  t.setViewModelProperty("label", be.default.financeAccountsCreditRemoveConfirm());
  t.setViewModelProperty("loading", this.state.isRemoving);
  t.setViewModelProperty("onPress", this.removeAccount);
  t.setViewModelProperty("size", oe.OAIControlSize.Sm);
  t.setViewModelProperty("variant", de.ButtonVariant.Danger);
  t.endComponent();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=14 cpool=1 bc=586B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: this
// closure: t, W, Me, X, be, Y, Q, Z, de, J, oe, $, se, K
function {
  this = this;
  t.beginComponent(se.Dialog, K, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", be.default.financeAccountsCreditRemoveTitle());
  t.setViewModelProperty("dismissible", !this.state.isRemoving);
  t.setViewModelProperty("isOpen", this.state.confirmingRemoval);
  t.setViewModelProperty("onDismiss", this.cancelRemoval);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=632B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: e
// locals: t, i, this
// closure: ee, pe, Se
function {
  this = this;
  let i;
  let t;
  this.cancelRequests();
  t = this.viewModel.platformServices;
  if (!((t == null))) goto L_7e;
  t;
  goto L_9f;
  this.apiService = undefined.apiService;
  if (!((t == null))) goto L_b5;
  t;
  goto L_d6;
  if (!((undefined === undefined.apiService))) goto L_dc;
  goto L_107;
  // [栈深重同步 2 -> 1]
  this.api = new ee.AuthenticatedFinanceApi(t);
  this.creditEnabled = pe.isFinanceCreditDataEnabled(t);
  this.observedRefreshKey = this.viewModel.refreshKey;
  if (!(this.creditEnabled)) goto L_1b6;
  goto L_1b7;
  // [栈深重同步 1 -> 0]
  i = undefined;
  this.setState({score: i, status: Se.Loaded, confirmingRemoval: false, isRemoving: false, hasRemoveError: false});
  if (!((undefined === i))) goto L_277;
  if (!(this.creditEnabled)) goto L_277;
  this.loadScore();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=253B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: e
// closure: t, this, Se, fe
function {
  if (!((t === this.readGeneration))) goto L_fc;
  this.activeRead = undefined;
  this.setState({score: e, status: Se.Loaded});
  if (!((undefined === e))) goto L_d7;
  goto L_f9;
  // [栈深重同步 3 -> 2]
  this.track(fe.Loaded);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=323B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: i
// closure: t, this, e, Se, fe
function {
  if (!((t === this.readGeneration))) goto L_142;
  if (!(e.isLoggingEnabled)) goto L_8b;
  console.warn(("Unable to load authenticated Finance credit details: " + String(i)));
  this.activeRead = undefined;
  this.setState({score: undefined, status: Se.Failed, confirmingRemoval: false, hasRemoveError: false});
  this.track(fe.Error);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=521B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: t, i, o, this
// closure: Se, fe, e
function {
  this = this;
  let o;
  let i;
  let t;
  this.readGeneration = (this.readGeneration ++);
  t = (this.readGeneration ++);
  if (!((this.activeRead == null))) goto L_63;
  this.activeRead;
  goto L_87;
  undefined.cancel();
  this.activeRead = undefined;
  i = this.api;
  if ((!this.creditEnabled)) goto L_e2;
  if (!((undefined === i))) goto L_139;
  this.setState({score: undefined, status: Se.Loaded});
  return;
  this.setState({status: Se.Loading});
  o = i.creditScore();
  this.activeRead = o;
  o.result.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=273B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: this
function {
  this = this;
  this.readGeneration = (this.readGeneration + 1);
  this.removalGeneration = (this.removalGeneration + 1);
  if (!((this.activeRead == null))) goto L_86;
  this.activeRead;
  goto L_aa;
  undefined.cancel();
  if (!((this.activeRemoval == null))) goto L_d5;
  this.activeRemoval;
  goto L_f9;
  undefined.cancel();
  this.activeRead = undefined;
  this.activeRemoval = undefined;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=175B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: e
// locals: this
// closure: ne, we
function {
  this = this;
  if ((this.analyticsDismissed)) goto L_ae;
  ne.trackAnalyticsEvent(this.viewModel.platformServices, {category: "Finance", name: we[e], key: e});
  return;
}

// fn <atom:0>  args=3 vars=91 closure=0 cpool=22 bc=11852B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// args: require, module, exports
// locals: e, t, i, o, n, r, d, s, a, l, c, m, v, y, u, h, p, g, b, S, f, w, A, R, C, P, I, M, O, D, k, x, V, L, T, F, H, _, E, N, B, q, z, U, G, j, K, W, X, Y, Q, Z, J, $, ee, te, ie, oe, ne, re, de, se, ae, le, ce, me, ve, ye, ue, he, pe, ge, be, FinanceCreditAccountDetailComponent, <class_fields_init>, FinanceCreditAccountDetailComponent#1, Se, fe, we, FinanceCreditAccountDetailScreen, <class_fields_init>#1, FinanceCreditAccountDetailScreen#1, Ae, Re, Ce, Pe, Ie, Me
function {
  let Me;
  let Ie;
  let Pe;
  let Ce;
  let Re;
  let Ae;
  let FinanceCreditAccountDetailScreen#1;
  let we;
  let FinanceCreditAccountDetailComponent#1;
  let be;
  let ge;
  let pe;
  let he;
  let ue;
  let ye;
  let ve;
  let me;
  let ce;
  let le;
  let ae;
  let se;
  let de;
  let re;
  let ne;
  let oe;
  let ie;
  let te;
  let ee;
  let $;
  let J;
  let Z;
  let Q;
  let Y;
  let X;
  let W;
  let K;
  let j;
  let G;
  let U;
  let z;
  let q;
  let B;
  let N;
  let E;
  let _;
  let H;
  let F;
  let T;
  let L;
  let V;
  let x;
  let k;
  let D;
  let O;
  let M;
  let I;
  let P;
  let C;
  let R;
  let A;
  let w;
  let f;
  let S;
  let b;
  let g;
  let p;
  let h;
  let u;
  let y;
  let v;
  let m;
  let c;
  let l;
  let a;
  let s;
  let d;
  let r;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceCreditAccountDetailComponent = undefined;
  exports.FinanceCreditAccountDetailScreen = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeComponentPrototype(undefined, "TlROXx2lzKudvz4L");
  o = t.makeComponentPrototype(undefined, "txn3T34VkCndTJPM");
  n = t.makeNodePrototype("view", undefined, "ZRwwkW2erVd6BbZA");
  r = t.makeNodePrototype("scroll", undefined, "hs9UwqieG4uVlWX4");
  d = t.makeNodePrototype("view", undefined, "nlXALjn168nKocB4");
  s = t.makeComponentPrototype(["accessibilityId", "finance-credit-follow-up"], "jEx9CaNmz2v0a5fU");
  a = t.makeNodePrototype("view", undefined, "Po8loySeM9uHyF27");
  l = t.makeComponentPrototype(["accessibilityId", "finance-credit-back"], "WlZL74KPf8E7nIj0");
  c = t.makeNodePrototype("label", undefined, "iv9BWiSd1N3XTVN2");
  m = t.makeNodePrototype("view", undefined, "0aiFOAh0hDFFFbRM");
  v = t.makeComponentPrototype(undefined, "JS3XD1SO_cIC0Zaf");
  y = t.makeNodePrototype("label", undefined, "td6Mc8AjYFpsAFkh");
  u = t.makeComponentPrototype(["accessibilityId", "finance-credit-retry"], "CljhRm5Zz_AAJvE3");
  h = t.makeNodePrototype("view", undefined, "f97RryvfmzrAzAKl");
  p = t.makeNodePrototype("view", undefined, "kDqjF4ctVoUzLKk9");
  g = t.makeNodePrototype("view", undefined, "X0cEZDO11qmdbwmZ");
  b = t.makeNodePrototype("view", undefined, "cRjeP7xPB95ML4zL");
  S = t.makeComponentPrototype(undefined, "FxaACWe0BB_nC9DF");
  f = t.makeNodePrototype("view", undefined, "seAoFqwOOobRW1QL");
  w = t.makeNodePrototype("label", undefined, "pIQUMfWaKBjh9IhO");
  A = t.makeNodePrototype("label", undefined, "CHCElj0uVzfdwIe3");
  R = t.makeComponentPrototype(["accessibilityId", "finance-credit-remove"], "i8spiKiOaD2MRkUy");
  C = t.makeNodePrototype("view", undefined, "sSOp4GUmxGoRKTKs");
  P = t.makeComponentPrototype(undefined, "AiKVXFakiXvjq2BY");
  I = t.makeNodePrototype("view", undefined, "sWfnPHS8QQbi_Rr4");
  M = t.makeNodePrototype("view", undefined, "AT6HAxhDX2JMYD7a");
  O = t.makeNodePrototype("label", undefined, "2bik7GPq6VUwsyph");
  D = t.makeNodePrototype("view", undefined, "_96c3wSGt3urkK_z");
  k = t.makeNodePrototype("view", undefined, "5eJEhreX3QNoUPqr");
  x = t.makeNodePrototype("label", undefined, "8tkm-A2FmoqpzOPV");
  V = t.makeNodePrototype("label", ["accessibilityCategory", "text", "accessibilityId", "finance-credit-disclosure-paragraph", "accessibilityNavigation", "cover"], "4WC1oDKTeepi2DQz");
  L = t.makeNodePrototype("label", ["accessibilityId", "finance-credit-disclosure"], "CMfxIO9BuIDZZuFd");
  T = t.makeNodePrototype("view", undefined, "7jb98OIOISnY7SE8");
  F = t.makeComponentPrototype(undefined, "Mbba_Yg1SqF_PNic");
  H = t.makeNodePrototype("view", undefined, "Mqpneyv4TPlM3CaC");
  _ = t.makeNodePrototype("label", undefined, "4phtUd5Y_2HYFpJp");
  E = t.makeNodePrototype("label", undefined, "YebeGB2uHXjwG0ns");
  N = t.makeNodePrototype("view", undefined, "Inoskx1L1EqLe-xL");
  B = t.makeComponentPrototype(undefined, "rsmyaWHlak2LqE3R");
  q = t.makeNodePrototype("view", undefined, "x9xNn9-5hT3xKLUs");
  z = t.makeNodePrototype("label", undefined, "YQcFnnYBORtc_vlR");
  U = t.makeNodePrototype("view", undefined, "E28hQcDD_udvfRsG");
  G = t.makeNodePrototype("label", undefined, "HYRKHWBQ02hOmVII");
  j = t.makeNodePrototype("label", undefined, "WDokV7iV6Dww0Y-Z");
  K = t.makeComponentPrototype(["accessibilityId", "finance-credit-remove-dialog"], "fFyuP-0rF49jxWjS");
  W = t.makeNodePrototype("view", undefined, "HzKkDjw2Bj_pJ2Ua");
  X = t.makeNodePrototype("label", undefined, "EW1CybR82xsf7Puf");
  Y = t.makeNodePrototype("label", undefined, "N8jc8NwyQrzkHTdx");
  Q = t.makeNodePrototype("label", undefined, "_1FMJd01-a6Zb-po");
  Z = t.makeNodePrototype("view", undefined, "h7PySoDXCPbvFFKX");
  J = t.makeComponentPrototype(["accessibilityId", "finance-credit-remove-cancel"], "AfMoRfb6WXRQCuY5");
  $ = t.makeComponentPrototype(["accessibilityId", "finance-credit-remove-confirm"], "3s6FD5lDwYKna147");
  ee = require("chatgpt_finance/src/FinanceApi");
  te = require("dil_icon_assets/res");
  ie = require("oai_core/src/OAITheme");
  oe = require("oai_core/src/OAITokens");
  ne = require("oai_platform_services/src/OAIAnalyticsService");
  re = require("oai_ui/src/components/ActivityIndicator");
  de = require("oai_ui/src/components/Button");
  se = require("oai_ui/src/components/Dialog");
  ae = require("oai_ui/src/components/Divider");
  le = require("oai_ui/src/components/IconButton");
  ce = require("valdi_core/src/Component");
  me = require("valdi_core/src/CompilerIntrinsics");
  ve = require("valdi_core/src/Style");
  ye = require("valdi_core/src/SystemFont");
  ue = require("valdi_core/src/utils/AttributedTextBuilder");
  he = require("valdi_platform_browser/src/PlatformBrowser");
  pe = require("./FinanceCreditAccountUtils");
  ge = require("./FinanceCreditInstitutionLogo");
  be = require("./Strings");
  let FinanceCreditAccountDetailComponent;
  let <class_fields_init>;
  class FinanceCreditAccountDetailComponent extends ce.Component { ... }
  <proto:FinanceCreditAccountDetailComponent>.onRender = function <atom:0>;
  <proto:FinanceCreditAccountDetailComponent>.hasFollowUp = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceCreditAccountDetailComponent>;
  FinanceCreditAccountDetailComponent = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceCreditAccountDetailComponent#1 = function <atom:0>;
  exports.FinanceCreditAccountDetailComponent = FinanceCreditAccountDetailComponent#1;
  if ((Se)) goto L_d71;
  Se = {};
  function <atom:0>({});
  if ((fe)) goto L_d7e;
  fe = {};
  function <atom:0>({});
  {}[fe.Loaded] = "Credit Detail Loaded";
  "Credit Detail Loaded";
  {}[fe.Empty] = "Credit Detail Empty";
  "Credit Detail Empty";
  {}[fe.Error] = "Credit Detail Error";
  "Credit Detail Error";
  {}[fe.DisconnectIntent] = "Credit Disconnect Intent";
  "Credit Disconnect Intent";
  {}[fe.DisconnectCancelled] = "Credit Disconnect Cancelled";
  "Credit Disconnect Cancelled";
  {}[fe.DisconnectSucceeded] = "Credit Disconnect Succeeded";
  "Credit Disconnect Succeeded";
  {}[fe.DisconnectFailed] = "Credit Disconnect Failed";
  "Credit Disconnect Failed";
  we = {};
  let FinanceCreditAccountDetailScreen;
  let <class_fields_init>#1;
  class FinanceCreditAccountDetailScreen extends ce.StatefulComponent { ... }
  <proto:FinanceCreditAccountDetailScreen>.onCreate = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.onViewModelUpdate = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.onDestroy = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.onRender = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.renderHeader = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.renderUnavailableState = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.renderReport = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.renderDisclosure = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.openCreditDisclosure = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.renderMetadataRow = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.renderMetric = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.renderRemovalDialog = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.initializeOwner = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.loadScore = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.cancelRequests = function <atom:0>;
  <proto:FinanceCreditAccountDetailScreen>.track = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:FinanceCreditAccountDetailScreen>;
  FinanceCreditAccountDetailScreen = function <atom:0>;
  // close_loc <class_fields_init>#1
  FinanceCreditAccountDetailScreen#1 = function <atom:0>;
  exports.FinanceCreditAccountDetailScreen = FinanceCreditAccountDetailScreen#1;
  Ae = oe.resolveOAITextStyle(oe.OAITextSize.BodyLarge);
  Re = oe.resolveOAITextStyle(oe.OAITextSize.BodyMedium);
  Ce = oe.resolveOAITextStyle(oe.OAITextSize.BodySmall);
  Pe = oe.resolveOAITextStyle(oe.OAITextSize.TitleSmall);
  Ie = oe.resolveOAITextStyle(oe.OAITextSize.HeadlineSmall);
  Me = {root: new ve.Style({accessibilityId: "finance-credit-account-detail", backgroundColor: oe.OAIColor.BgPrimary, flexDirection: "column", height: "100%", width: "100%"}), header: new ve.Style({alignItems: "center", flexDirection: "row", flexShrink: 0, gap: oe.OAISpacing.One, height: oe.OAISpacing.Seven, paddingLeft: oe.OAISpacing.One, paddingRight: oe.OAISpacing.Two, width: "100%"}), headerTitle: new ve.Style({accessibilityCategory: "header", color: oe.OAIColor.TextPrimary, flexGrow: 1, flexShrink: 1, font: Pe.font, lineHeight: Pe.lineHeight, numberOfLines: 1}), scroll: new ve.Style({flexGrow: 1, flexShrink: 1, height: 1, width: "100%"}), report: new ve.Style({flexDirection: "column", gap: oe.OAISpacing.TwoPointFive, paddingBottom: oe.OAISpacing.Three, paddingLeft: oe.OAISpacing.Three, paddingRight: oe.OAISpacing.Three, width: "100%"}), summary: new ve.Style({flexDirection: "column", gap: oe.OAISpacing.Two, paddingTop: oe.OAISpacing.Two, width: "100%"}), summaryIdentity: new ve.Style({alignItems: "center", flexDirection: "row", gap: oe.OAISpacing.OnePointTwentyFive, width: "100%"}), institutionIcon: new ve.Style({alignItems: "center", backgroundColor: oe.OAIColor.BgPrimary, borderRadius: oe.OAIRadius.Pill, colorPaletteName: ie.OAI_LIGHT_THEME, flexShrink: 0, height: oe.OAISpacing.Four, justifyContent: "center", width: oe.OAISpacing.Four}), summaryCopy: new ve.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, minWidth: 0}), institutionTitle: new ve.Style({accessibilityCategory: "header", color: oe.OAIColor.TextPrimary, font: ye.systemBoldFont(20), lineHeight: 26, numberOfLines: 1}), summarySubtitle: new ve.Style({color: oe.OAIColor.TextPrimary, font: Ae.font, lineHeight: Ae.lineHeight, numberOfLines: 1}), removeButton: new ve.Style({borderColor: oe.OAIColor.BorderDefault, height: 36}), removeButtonLabel: new ve.Style({font: ye.systemMediumFont(15), lineHeight: 24}), metadata: new ve.Style({flexDirection: "column", width: "100%"}), metadataRow: new ve.Style({alignItems: "flex-start", flexDirection: "row", gap: oe.OAISpacing.Two, justifyContent: "space-between", paddingBottom: oe.OAISpacing.OneAndHalf, paddingTop: oe.OAISpacing.OneAndHalf, width: "100%"}), metadataLabel: new ve.Style({color: oe.OAIColor.TextSecondary, flexGrow: 1, flexShrink: 1, font: Re.font, lineHeight: Re.lineHeight, numberOfLines: 0}), metadataValue: new ve.Style({color: oe.OAIColor.TextPrimary, flexShrink: 1, font: ye.systemMediumFont(14), lineHeight: Re.lineHeight, maxWidth: "60%", numberOfLines: 0, textAlign: "right"}), metricSection: new ve.Style({flexDirection: "column", gap: oe.OAISpacing.One, marginTop: oe.OAISpacing.OneAndHalf, width: "100%"}), sectionTitle: new ve.Style({accessibilityCategory: "header", color: oe.OAIColor.TextPrimary, font: ye.systemMediumFont(20), lineHeight: 25, numberOfLines: 0}), sectionHeading: new ve.Style({width: "100%"}), metricList: new ve.Style({flexDirection: "column", width: "100%"}), metricRow: new ve.Style({alignItems: "center", flexDirection: "row", gap: oe.OAISpacing.Two, justifyContent: "space-between", minHeight: 60, paddingBottom: oe.OAISpacing.OneAndHalf, paddingTop: oe.OAISpacing.OneAndHalf, width: "100%"}), metricLabel: new ve.Style({color: oe.OAIColor.TextPrimary, flexGrow: 1, flexShrink: 1, font: Re.font, lineHeight: Re.lineHeight, numberOfLines: 0}), metricValues: new ve.Style({alignItems: "flex-end", flexDirection: "column", flexShrink: 1, gap: oe.OAISpacing.Quarter}), metricValue: new ve.Style({color: oe.OAIColor.TextPrimary, font: Re.font, lineHeight: Re.lineHeight, numberOfLines: 1, textAlign: "right"}), metricDetail: new ve.Style({color: oe.OAIColor.TextSecondary, font: Ce.font, lineHeight: Ce.lineHeight, numberOfLines: 0, textAlign: "right"}), rowContainer: new ve.Style({flexDirection: "column", width: "100%"}), disclosure: new ve.Style({color: oe.OAIColor.TextSecondary, font: Ce.font, lineHeight: Ce.lineHeight, numberOfLines: 0}), disclosureLink: new ve.Style({accessibilityCategory: "link", accessibilityNavigation: "leaf", color: oe.OAIColor.TextAccent, font: Ce.font, lineHeight: Ce.lineHeight, maxWidth: "100%", numberOfLines: 0}), disclosureContainer: new ve.Style({flexDirection: "column", width: "100%"}), messageContainer: new ve.Style({alignItems: "center", flexDirection: "column", gap: oe.OAISpacing.OneAndHalf, justifyContent: "center", minHeight: 200, padding: oe.OAISpacing.Three, width: "100%"}), message: new ve.Style({color: oe.OAIColor.TextSecondary, font: Ae.font, lineHeight: Ae.lineHeight, numberOfLines: 0, textAlign: "center"}), footer: new ve.Style({alignItems: "flex-end", flexDirection: "column", flexShrink: 0, padding: oe.OAISpacing.TwoPointFive, width: "100%"}), dialogContent: new ve.Style({flexDirection: "column", gap: oe.OAISpacing.OneAndHalf, padding: oe.OAISpacing.OneAndHalf, width: "100%"}), dialogTitle: new ve.Style({accessibilityCategory: "header", color: oe.OAIColor.TextPrimary, font: Ie.font, lineHeight: Ie.lineHeight, numberOfLines: 0}), dialogDescription: new ve.Style({color: oe.OAIColor.TextSecondary, font: Ae.font, lineHeight: Ae.lineHeight, numberOfLines: 0}), dialogActions: new ve.Style({alignItems: "center", flexDirection: "row", gap: oe.OAISpacing.One, justifyContent: "flex-end", width: "100%"}), removeError: new ve.Style({accessibilityId: "finance-credit-remove-error", color: oe.OAIColor.TextStatusError, font: Re.font, lineHeight: Re.lineHeight, numberOfLines: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_accounts/src/FinanceCreditAccountDetailComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
