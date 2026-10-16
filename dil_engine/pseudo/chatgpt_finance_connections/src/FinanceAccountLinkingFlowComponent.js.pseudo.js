// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=651B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i
// locals: t
// closure: L, this
function {
  let t;
  if (!((i === L.FinanceAccountLinkingTab.CreditScore))) goto L_74;
  if (!(!this.canShowCredit)) goto L_74;
  return;
  if (!((i === this.state.selectedTab))) goto L_be;
  return;
  if (!((i === L.FinanceAccountLinkingTab.Accounts))) goto L_130;
  this.startAccountLinkingJourney();
  this.cancelAccountChat();
  if (!((undefined !== this.activeLinkingSession))) goto L_1aa;
  this.cancelAccountLinking();
  t = this.clearCreditVerificationWork();
  this.creditVerificationContext = undefined;
  null;
  this.state;
  this.setState({isLaunchingPlaid: false, creditEligibility: undefined, creditScore: undefined, hasCreditStatusLoadError: false, isConnectingAccounts: false, isVerifyingCredit: false, selectedTab: i});
  this.closeCreditVerification(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=179B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: t
// closure: k, _, i
function {
  try { // catch -> L_53
  k.platformBrowser.openURL(_);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_b2
  if (!(i.isLoggingEnabled)) goto L_af;
  console.warn("Finance credit could not open its Learn more URL");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=179B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: t
// closure: k, N, i
function {
  try { // catch -> L_53
  k.platformBrowser.openURL(N);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_b2
  if (!(i.isLoggingEnabled)) goto L_af;
  console.warn("Finance credit could not open its Experian contact URL");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=554B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i
// closure: this
function {
  let i;
  this.hasDismissed = true;
  this.cancelAccountChat();
  this.cancelAccountLinking();
  i = this.clearCreditVerificationWork();
  this.creditVerificationContext = undefined;
  if (!((this.platformServices == null))) goto L_c2;
  this.platformServices;
  goto L_e3;
  if (!((undefined.apiService !== this.financeApiService))) goto L_184;
  null;
  this.state;
  this.setState({connectedInstitutions: undefined, isLaunchingPlaid: false, creditEligibility: undefined, creditScore: undefined, isConnectingAccounts: false, isVerifyingCredit: false});
  this.closeCreditVerification(i);
  if (!((this.context == null))) goto L_1dc;
  this.context;
  goto L_229;
  if (!((undefined.host == null))) goto L_205;
  undefined.host;
  goto L_229;
  undefined.dismiss();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=309B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// closure: this, L
function {
  if (!(this.isCurrentFlowOwner())) goto L_134;
  this.cancelAccountChat();
  this.cancelAccountLinking();
  null;
  this.state;
  this.setState({connectedInstitutions: undefined, isLaunchingPlaid: false, isConnectingAccounts: false, isVerifyingCredit: false, selectedTab: L.FinanceAccountLinkingTab.Accounts});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=550B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i
// closure: this, L, v
function {
  if (!(this.isCurrentFlowOwner())) goto L_225;
  if (!((this.state.selectedTab === L.FinanceAccountLinkingTab.Accounts))) goto L_225;
  if (!((undefined === this.state.connectedInstitutions))) goto L_225;
  if (!((undefined === this.activeLinkingSession))) goto L_225;
  if (!(v.isVersionAtLeast(23))) goto L_225;
  let i;
  this.nextLinkingSession = (this.nextLinkingSession ++);
  i = (this.nextLinkingSession ++);
  this.activeLinkingSession = i;
  null;
  this.state;
  this.setState({isLaunchingPlaid: true});
  this.launchPlaidWhenReady(i);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=111B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i, t
// closure: this, L
function {
  this.openAccountChat(L.FinanceAccountLinkingTab.ManualAccounts, i, t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=275B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// closure: this, L, I
function {
  if (!(this.isCurrentFlowOwner())) goto L_112;
  if (!(this.canOpenCreditScoreChat)) goto L_112;
  this.openAccountChat(L.FinanceAccountLinkingTab.CreditScore, "credit_score", I.default.financeAccountLinkingCreditScoreChatPrompt());
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=658B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// closure: this, L
function {
  this.synchronizeFlowContext();
  if ((this.hasDismissed)) goto L_291;
  if (((this.state.selectedTab !== L.FinanceAccountLinkingTab.CreditScore))) goto L_291;
  if (((undefined !== this.activeCreditEligibilityRequest))) goto L_291;
  if (((undefined !== this.activeCreditVerification))) goto L_291;
  if (!((this.creditVerificationContext == null))) goto L_16c;
  this.creditVerificationContext;
  goto L_18d;
  if (((undefined === undefined.pendingVerificationId))) goto L_1d7;
  if (!(this.creditVerificationContext.isReportPreparing)) goto L_26a;
  this.clearCreditVerificationWork();
  null;
  this.state;
  goto L_291;
  // [栈深重同步 1 -> 0]
  this.startCreditVerification();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=950B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, t
// closure: this, C, x, u
function {
  let t;
  let i;
  this.synchronizeFlowContext();
  i = this.creditVerificationContext;
  if (((undefined === i))) goto L_ab;
  if ((!this.isCreditVerificationAllowed)) goto L_ab;
  if (!((undefined !== this.activeCreditVerification))) goto L_ae;
  return;
  this.clearCreditVerificationWork();
  i.pendingVerificationId = C.normalizeFinanceCreditVerificationId(i.pendingVerificationId);
  if (((undefined === i.pendingVerificationId))) goto L_17b;
  if (!((undefined === i.funnel))) goto L_247;
  i.funnel = new x.FinanceCreditVerificationFunnel(this.financeApi);
  goto L_2d4;
  // [栈深重同步 1 -> 0]
  i.funnel.record(u.FinanceCreditFunnelStep.CompletionRetryRequested);
  i.copy = undefined;
  t = {context: i, funnel: i.funnel, isProviderRunning: false};
  this.activeCreditVerification = t;
  null;
  this.state;
  this.setState({hasCreditStatusLoadError: false, isVerifyingCredit: true});
  this.launchCreditVerification(t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=205B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// closure: this
function {
  if (!(!this.hasDismissed)) goto L_cc;
  if (!((this.platformServices == null))) goto L_58;
  this.platformServices;
  goto L_79;
  if (((undefined.apiService === this.financeApiService))) goto L_cc;
  this.dismiss();
  return false;
}

// fn <atom:0>  args=0 vars=4 closure=14 cpool=11 bc=928B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: this, this.active_func, new.target, arguments
// closure: L, k, _, i, N, v, I, C, x, u, <class_fields_init>, W, E, b
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
  this.hideTabs = !this.isFirstPartyAccountLinkingEnabled();
  this.requestedCredit = (this.viewModel.initialTab === L.FinanceAccountLinkingTab.CreditScore);
  this.state = {isOpeningAccountChat: false, connectedInstitutions: undefined, isLaunchingPlaid: false, creditEligibility: undefined, creditScore: undefined, hasCreditStatusLoadError: false, isConnectingAccounts: false, isVerifyingCredit: false, selectedTab: W(this.viewModel.initialTab, this.supportsManualAccountChat)};
  this.connectorAuthorization = new E.FinanceConnectorAuthorization();
  this.creditStatusPollCount = 0;
  if (!((this.platformServices == null))) goto L_21c;
  this.platformServices;
  goto L_23d;
  this.financeApiService = undefined.apiService;
  this.hasDismissed = false;
  this.hasStartedAccountChat = false;
  this.metrics = new b.FinanceAccountLinkingMetrics(this.state.selectedTab);
  this.metricsRenderGeneration = 0;
  this.nextLinkingSession = 0;
  this.nextAccountChatAttempt = 0;
  this.selectTab = function <atom:0>;
  this.openCreditLearnMore = function <atom:0>;
  this.openCreditSupport = function <atom:0>;
  this.dismiss = function <atom:0>;
  this.restartAccountLinking = function <atom:0>;
  this.openPlaid = function <atom:0>;
  this.openManualAccountChat = function <atom:0>;
  this.openCreditScoreChat = function <atom:0>;
  this.retryCreditStatus = function <atom:0>;
  this.startCreditVerification = function <atom:0>;
  this.isCurrentFlowOwner = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=0 bc=865B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, t, e, this
// closure: b, v, d, f, L
function {
  this = this;
  let e;
  let t;
  let i;
  this.metrics.record(b.FinanceAccountLinkingCheckpoint.AppStarted);
  this.reportCreditRoute(b.FinanceAccountLinkingCheckpoint.CreditRequested);
  i = this.platformServices;
  t = this.financeApiService;
  if (!((this.context == null))) goto L_173;
  this.context;
  goto L_194;
  if (((undefined === undefined.host))) goto L_1a7;
  if (((undefined === i))) goto L_1a7;
  if (!((undefined === t))) goto L_1b8;
  throw new Error("Finance account linking requires an authenticated platform host");
  if (!(v.isVersionAtLeast(66))) goto L_231;
  this.connectorAuthorizationHost = this.context.connectorAuthorizationHost;
  this.context.connectorAuthorizationHost;
  null;
  i;
  e = new d.AuthenticatedFinanceApi({apiService: t});
  this.financeApi = e;
  this.creditVerificationRepository = new f.FinanceCreditVerificationRepository(e);
  if (!((this.state.selectedTab === L.FinanceAccountLinkingTab.Accounts))) goto L_360;
  this.startAccountLinkingJourney();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=183B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, this
function {
  this = this;
  let i;
  this.hasDismissed = true;
  this.cancelAccountChat();
  i = this.clearCreditVerificationWork();
  this.creditVerificationContext = undefined;
  this.cancelAccountLinking();
  this.closeCreditVerification(i);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=312B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// closure: t, y, o, this
function {
  t.beginComponent(y.FinanceAccountLinkingConfirmation, o, undefined, undefined);
  t.setViewModelProperty("institutions", this.state.connectedInstitutions);
  t.setViewModelProperty("onContinue", this.restartAccountLinking);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=200B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// closure: t, P, c, this
function {
  t.beginComponent(P.FinanceAccountLinkingProgress, c, undefined, undefined);
  t.setViewModelProperty("onDismiss", this.dismiss);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=2600B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// closure: t, w, r, L, this, a, z, s, d
function {
  t.beginComponent(w.FinanceAccountLinkingPicker, r, undefined, undefined);
  t.setViewModelProperty("accountsTab", L.FinanceAccountLinkingTab.Accounts);
  t.setViewModelProperty("isLaunchingPlaid", this.state.isLaunchingPlaid);
  t.setViewModelProperty("creditScore", this.state.creditScore);
  t.setViewModelProperty("creditScoreTab", L.FinanceAccountLinkingTab.CreditScore);
  t.setViewModelProperty("creditCopy", this.creditVerificationCopy);
  t.setViewModelProperty("creditVerificationState", a);
  t.setViewModelProperty("hasCreditStatusLoadError", this.state.hasCreditStatusLoadError);
  t.setViewModelProperty("hasReachedCreditStatusPollLimit", (this.creditStatusPollCount >= z));
  if (!((undefined === this.state.creditEligibility))) goto L_4c7;
  if (!((this.creditVerificationContext == null))) goto L_405;
  this.creditVerificationContext;
  goto L_426;
  if (!((undefined === undefined.reportStatus))) goto L_4c7;
  if (!((this.creditVerificationContext == null))) goto L_45b;
  this.creditVerificationContext;
  goto L_47c;
  if (!((undefined === undefined.copy))) goto L_4c7;
  t.setViewModelProperty("isLoadingCreditStatus", !this.state.hasCreditStatusLoadError);
  t.setViewModelProperty("isVerifyingCredit", this.state.isVerifyingCredit);
  if (!(s)) goto L_5b2;
  goto L_5b3;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("manualAccountsTab", undefined);
  t.setViewModelProperty("onCreditLearnMore", this.openCreditLearnMore);
  t.setViewModelProperty("onCreditSupport", this.openCreditSupport);
  if (!(this.canOpenCreditScoreChat)) goto L_6ce;
  goto L_6cf;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onCreditScoreChat", undefined);
  t.setViewModelProperty("isOpeningAccountChat", this.state.isOpeningAccountChat);
  t.setViewModelProperty("onCreditVerification", this.startCreditVerification);
  t.setViewModelProperty("onDismiss", this.dismiss);
  t.setViewModelProperty("onContinueToPlaid", this.openPlaid);
  if (!(s)) goto L_88c;
  goto L_88d;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onManualAccountSelected", undefined);
  t.setViewModelProperty("onRetryCreditStatus", this.retryCreditStatus);
  t.setViewModelProperty("onTabSelected", this.selectTab);
  t.setViewModelProperty("selectedTab", this.state.selectedTab);
  if (!(this.hideTabs)) goto L_9f9;
  goto L_9fc;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("tabOptions", d);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=15 cpool=3 bc=319B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// closure: t, y, o, this, P, c, w, r, L, a, z, s, d, n, H
function {
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", H.root);
  if (!((undefined !== this.state.connectedInstitutions))) goto L_c9;
  goto L_116;
  // [栈深重同步 1 -> 0]
  if (!(this.state.isConnectingAccounts)) goto L_113;
  goto L_116;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=14 cpool=1 bc=1089B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, s, a, d, this
// closure: t, y, o, P, c, w, r, L, z, n, H, I, p, e
function {
  this = this;
  let d;
  let a;
  let s;
  let i;
  this.synchronizeFlowContext();
  if (!(this.hasDismissed)) goto L_5c;
  return;
  i = this.canShowCredit;
  s = this.supportsManualAccountChat;
  a = this.creditVerificationState;
  d = [{label: I.default.financeAccountLinkingTabAccounts(), value: L.FinanceAccountLinkingTab.Accounts}];
  if (!(i)) goto L_22d;
  d.push({label: I.default.financeAccountLinkingTabCreditScore(), value: L.FinanceAccountLinkingTab.CreditScore});
  if (!(s)) goto L_2f7;
  d.push({label: I.default.financeAccountLinkingTabManualAccounts(), value: L.FinanceAccountLinkingTab.ManualAccounts});
  t.beginComponent(p.OAITheme, e, undefined, undefined);
  t.setViewModelProperty("fill", true);
  t.setViewModelProperty("mode", this.themeMode);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  this.reportRenderedCheckpoints();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=611B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// closure: this, i, t, b, o
function {
  if ((this.hasDismissed)) goto L_262;
  if (((i !== this.metricsRenderGeneration))) goto L_262;
  if (((t !== this.state))) goto L_262;
  if (!((this.platformServices == null))) goto L_ad;
  this.platformServices;
  goto L_ce;
  if (((undefined.apiService !== this.financeApiService))) goto L_262;
  this.metrics.record(b.FinanceAccountLinkingCheckpoint.InitialRender);
  if (!(o)) goto L_262;
  this.accountFunnel.recordPickerState(false);
  this.metrics.record(b.FinanceAccountLinkingCheckpoint.PickerReady);
  return;
}

// fn <atom:0>  args=0 vars=6 closure=2 cpool=1 bc=385B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, t, e, n, o, this
// closure: b, L
function {
  this = this;
  let o;
  let n;
  let e;
  let t;
  let i;
  this.metricsRenderGeneration = (this.metricsRenderGeneration ++);
  i = (this.metricsRenderGeneration ++);
  t = this.state;
  if (((undefined === undefined))) goto L_b4;
  e = <to_object>(undefined).connectedInstitutions;
  n = <to_object>(undefined).isConnectingAccounts;
  <to_object>(undefined);
  goto L_ba;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_6a;
  // [栈深重同步 1 -> 0]
  if (!((t.selectedTab === L.FinanceAccountLinkingTab.Accounts))) goto L_135;
  if (!((undefined === e))) goto L_135;
  o = !n;
  this.renderer.onRenderComplete(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=352B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: this
// closure: p
function {
  this = this;
  if (!((undefined === this.viewModel.isDarkMode))) goto L_8f;
  return p.OAIThemeMode.System;
  if (!(this.viewModel.isDarkMode)) goto L_11a;
  return p.OAIThemeMode.Dark;
  return p.OAIThemeMode.Light;
}

// fn <atom:0>  args=3 vars=7 closure=2 cpool=0 bc=778B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i, t, e
// locals: n, o, c, this
// closure: v, L
function {
  this = this;
  if (!(v.isVersionAtLeast(68))) goto L_309;
  let o;
  let n;
  if (!((this.context == null))) goto L_5e;
  this.context;
  goto L_7f;
  n = undefined.host;
  if (!((this.context == null))) goto L_aa;
  this.context;
  goto L_cb;
  o = undefined.manualAccountChatHost;
  if (((undefined === n))) goto L_1a0;
  if (((undefined === o))) goto L_1a0;
  if ((this.hasDismissed)) goto L_1a0;
  if (((this.state.selectedTab !== i))) goto L_1a0;
  if (((undefined !== this.activeAccountChatAttempt))) goto L_1a0;
  if (!(this.hasStartedAccountChat)) goto L_1a3;
  return;
  if (!((i === L.FinanceAccountLinkingTab.ManualAccounts))) goto L_2de;
  if (!((undefined !== this.connectorAuthorizationHost))) goto L_2de;
  let c;
  this.nextAccountChatAttempt = (this.nextAccountChatAttempt ++);
  c = (this.nextAccountChatAttempt ++);
  this.activeAccountChatAttempt = c;
  null;
  this.state;
  this.setState({isOpeningAccountChat: true});
  this.openAccountChatWhenAuthorized(c, n, o, i, t, e);
  return;
  this.handOffAccountChat(o, t, e);
  return;
}

// fn <atom:0>  args=6 vars=8 closure=2 cpool=0 bc=709B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: t, e, n, o, c, r
// locals: s, this
// closure: l, i
function {
  this = this;
  try { // catch -> L_32
  (await this.authorizeFinanceConnection());
  <?>;
  goto L_146;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_145
  if (!((this.activeAccountChatAttempt !== t))) goto L_61;
  return undefined; // async
  this.activeAccountChatAttempt = undefined;
  null;
  this.state;
  this.setState({isOpeningAccountChat: false});
  if (((s instanceof l.FinanceAccountLinkingCancelledError))) goto L_141;
  if (!(i.isLoggingEnabled)) goto L_141;
  console.warn("Finance account chat could not start");
  return undefined; // async
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (((this.activeAccountChatAttempt !== t))) goto L_2c2;
  if ((this.hasDismissed)) goto L_2c2;
  if (((this.state.selectedTab !== o))) goto L_2c2;
  if (!((this.context == null))) goto L_210;
  this.context;
  goto L_231;
  if (((undefined.host !== e))) goto L_2c2;
  if (!((this.context == null))) goto L_264;
  this.context;
  goto L_285;
  if (((undefined.manualAccountChatHost !== n))) goto L_2c2;
  this.activeAccountChatAttempt = undefined;
  this.handOffAccountChat(n, c, r);
  return undefined; // async
}

// fn <atom:0>  args=3 vars=5 closure=3 cpool=0 bc=423B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: t, e, n
// locals: o, this
// closure: S, V, i
function {
  this = this;
  this.hasStartedAccountChat = true;
  try { // catch -> L_147
  if (!(S.Device.isIOS())) goto L_11d;
  if (!(!S.Device.isWeb())) goto L_11d;
  goto L_144;
  // [栈深重同步 1 -> 0]
  t.openManualAccountChat(e, n);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_1a6
  if (!(i.isLoggingEnabled)) goto L_1a3;
  console.warn("Finance account chat could not be handed to its host");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=329B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, this
function {
  this = this;
  let i;
  i = this.activeAccountChatAttempt;
  this.activeAccountChatAttempt = undefined;
  if (!(!this.hasDismissed)) goto L_f8;
  if (!(this.state.isOpeningAccountChat)) goto L_f8;
  null;
  this.state;
  this.setState({isOpeningAccountChat: false});
  if (!((undefined !== i))) goto L_148;
  this.connectorAuthorization.cancel();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=3 cpool=0 bc=1549B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, t, e, n, this
// closure: b, L, v
function {
  this = this;
  let e;
  let t;
  let i;
  if (!(!this.isCurrentFlowOwner())) goto L_36;
  return;
  i = this.isCreditDiscoveryEnabled;
  if ((i)) goto L_cc;
  this.reportCreditRoute(b.FinanceAccountLinkingCheckpoint.CreditDiscoveryUnavailable);
  if ((this.requestedCredit)) goto L_1fa;
  if ((i)) goto L_1fa;
  if (((this.state.selectedTab !== L.FinanceAccountLinkingTab.CreditScore))) goto L_1fa;
  this.selectTab(L.FinanceAccountLinkingTab.Accounts);
  if (!((this.state.selectedTab !== L.FinanceAccountLinkingTab.CreditScore))) goto L_288;
  return;
  if (!(v.isVersionAtLeast(48))) goto L_2d6;
  goto L_2d7;
  // [栈深重同步 1 -> 0]
  t = undefined;
  e = this.creditVerificationContext;
  if (!((undefined !== e))) goto L_44b;
  if (((e.host !== t))) goto L_35a;
  if (!((e.discoveryEnabled !== i))) goto L_44b;
  let n;
  n = this.clearCreditVerificationWork();
  if (!((undefined === t))) goto L_393;
  goto L_3a4;
  // [栈深重同步 1 -> 0]
  e = {host: t, discoveryEnabled: i};
  {host: t, discoveryEnabled: i};
  this.creditVerificationContext = e;
  null;
  this.state;
  this.setState({creditEligibility: undefined, creditScore: undefined, hasCreditStatusLoadError: false, isVerifyingCredit: false});
  this.closeCreditVerification(n);
  if (!((undefined !== t))) goto L_5a1;
  if (!((undefined === e))) goto L_483;
  e = {host: t, discoveryEnabled: i};
  {host: t, discoveryEnabled: i};
  this.creditVerificationContext = e;
  e;
  if (((undefined !== this.state.creditEligibility))) goto L_60c;
  if (((undefined !== e.reportStatus))) goto L_60c;
  if (((undefined !== e.copy))) goto L_60c;
  if ((this.state.hasCreditStatusLoadError)) goto L_60c;
  goto L_60c;
  // [栈深重同步 1 -> 0]
  this.reportCreditRoute(b.FinanceAccountLinkingCheckpoint.CreditUpdateRequired);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=499B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i
// locals: this
// closure: L, v
function {
  this = this;
  if (!(!this.hasDismissed)) goto L_1f2;
  if (!((this.creditVerificationContext === i))) goto L_1f2;
  if (!((this.state.selectedTab === L.FinanceAccountLinkingTab.CreditScore))) goto L_1f2;
  if (!(v.isVersionAtLeast(48))) goto L_1f2;
  if (!((i.host === this.creditVerificationHost))) goto L_1f2;
  if (!((i.discoveryEnabled === this.isCreditDiscoveryEnabled))) goto L_1f2;
  if ((this.requestedCredit)) goto L_1f2;
  return i.discoveryEnabled;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=524B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i
// locals: t, this
// closure: C
function {
  this = this;
  let t;
  if (!(!this.isCurrentFlowOwner())) goto L_2f;
  return undefined; // async
  t = (await this.loadCreditEligibility(i));
  if (!((undefined !== t))) goto L_209;
  if (((t.connectionStatus !== C.FinanceCreditVerificationConnectionStatus.Connected))) goto L_1e2;
  if (((undefined !== t.reportStatus))) goto L_1e2;
  if ((t.pendingDeletion)) goto L_1e2;
  this.notifyCreditVerificationCompleted(i, C.FinanceCreditVerificationStatus.Connected, t.retryable);
  this.loadCreditScore(i);
  this.scheduleCreditStatusPoll(i);
  return undefined; // async
}

// fn <atom:0>  args=1 vars=6 closure=5 cpool=0 bc=2104B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: t
// locals: e, n, o, c, this
// closure: L, C, l, i, b
function {
  this = this;
  let o;
  let n;
  let e;
  if (!(!this.isCurrentCreditContext(t))) goto L_af;
  if ((this.hasDismissed)) goto L_ac;
  if (((this.creditVerificationContext !== t))) goto L_ac;
  this.synchronizeFlowContext();
  return undefined; // async
  e = this.creditVerificationRepository;
  if (((undefined === e))) goto L_1bb;
  if (((this.state.selectedTab !== L.FinanceAccountLinkingTab.CreditScore))) goto L_1bb;
  if (((undefined !== this.activeCreditEligibilityRequest))) goto L_1bb;
  if (!((undefined !== this.activeCreditVerification))) goto L_1bf;
  return undefined; // async
  n = e.eligibility();
  o = undefined;
  this.activeCreditEligibilityRequest = n;
  try { // catch -> L_284
  o = (await n);
  (await n);
  if (!((o.connectionStatus === C.FinanceCreditVerificationConnectionStatus.Unknown))) goto L_280;
  throw new Error("Finance credit connection returned an unsupported status");
  <?>;
  goto L_3d3;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_3d2
  if (!(this.acceptCreditEligibilityResult(t, n))) goto L_3ce;
  if (((c instanceof l.FinanceAccountLinkingCancelledError))) goto L_33b;
  if (!(i.isLoggingEnabled)) goto L_33b;
  console.warn("Finance credit verification status could not be loaded");
  this.reportCreditRoute(b.FinanceAccountLinkingCheckpoint.CreditReadFailed);
  this.failCreditStatus();
  return undefined; // async
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(this.acceptCreditEligibilityResult(t, n))) goto L_836;
  if (!(o.pendingDeletion)) goto L_493;
  goto L_63f;
  // [栈深重同步 3 -> 2]
  if (!((o.connectionStatus === C.FinanceCreditVerificationConnectionStatus.Connected))) goto L_547;
  goto L_63f;
  // [栈深重同步 3 -> 2]
  if (!((o.connectionStatus === C.FinanceCreditVerificationConnectionStatus.Pending))) goto L_5fa;
  goto L_63f;
  // [栈深重同步 3 -> 2]
  this.reportCreditRoute(b.FinanceAccountLinkingCheckpoint.CreditNotConnected);
  t.reportStatus = o.reportStatus;
  if ((o.pendingDeletion)) goto L_6bd;
  if (!((undefined !== t.reportStatus))) goto L_6d8;
  t.pendingVerificationId = undefined;
  t.copy = undefined;
  undefined;
  if (!(!o.pendingDeletion)) goto L_7c3;
  if (!((undefined === t.reportStatus))) goto L_7c3;
  if (!((o.connectionStatus === C.FinanceCreditVerificationConnectionStatus.Pending))) goto L_7c3;
  t.isReportPreparing = o.retryable;
  null;
  this.state;
  this.setState({creditEligibility: o, creditScore: undefined, hasCreditStatusLoadError: false});
  goto L_837;
  // [栈深重同步 1 -> 0]
  return undefined; // async
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=615B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: t
// locals: e, n, o, c, this
// closure: i
function {
  this = this;
  let o;
  let n;
  let e;
  e = this.financeApi;
  if (((undefined === e))) goto L_b5;
  if (((undefined !== this.activeCreditScoreTask))) goto L_b5;
  if ((!this.isCurrentFlowOwner())) goto L_b5;
  if (!(!this.isCurrentCreditContext(t))) goto L_b9;
  return undefined; // async
  n = e.creditScore();
  o = undefined;
  this.activeCreditScoreTask = n;
  try { // catch -> L_124
  o = (await n.result);
  (await n.result);
  <?>;
  goto L_1b3;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_1b2
  if (!(this.acceptCreditScoreResult(t, n))) goto L_1ae;
  if (!(i.isLoggingEnabled)) goto L_1ae;
  console.warn("Finance connected credit score could not be loaded");
  return undefined; // async
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(this.acceptCreditScoreResult(t, n))) goto L_264;
  null;
  this.state;
  if (!((o == null))) goto L_23b;
  o;
  goto L_25c;
  this.setState({creditScore: undefined.scoreValue});
  return undefined; // async
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=184B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i, t
// locals: this
function {
  this = this;
  if (!((this.activeCreditScoreTask === t))) goto L_b7;
  this.activeCreditScoreTask = undefined;
  if (!(!!this.isCurrentFlowOwner())) goto L_b7;
  if ((!!this.isCurrentCreditContext(i))) goto L_b7;
  this.synchronizeFlowContext();
  return false;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=222B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i, t
// locals: this
function {
  this = this;
  if (!((this.activeCreditEligibilityRequest === t))) goto L_dd;
  this.activeCreditEligibilityRequest = undefined;
  if (!(!!this.isCurrentFlowOwner())) goto L_dd;
  if ((!!this.isCurrentCreditContext(i))) goto L_dd;
  if ((this.hasDismissed)) goto L_da;
  this.synchronizeFlowContext();
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=95B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// closure: this, t
function {
  this.creditStatusPollTimer = undefined;
  this.creditStatusPollCount = (this.creditStatusPollCount + 1);
  this.refreshCreditConnection(t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=6 cpool=1 bc=1020B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: t
// locals: e, this
// closure: L, C, z, M, i, D
function {
  this = this;
  let e;
  if ((!this.isCurrentCreditContext(t))) goto L_26b;
  if (((this.state.selectedTab !== L.FinanceAccountLinkingTab.CreditScore))) goto L_26b;
  if ((this.state.hasCreditStatusLoadError)) goto L_26b;
  if (((undefined !== this.creditStatusPollTimer))) goto L_26b;
  if (((undefined !== this.activeCreditEligibilityRequest))) goto L_26b;
  if (((undefined !== this.activeCreditVerification))) goto L_26b;
  if (((undefined !== t.reportStatus))) goto L_26b;
  if (!((this.state.creditEligibility == null))) goto L_204;
  this.state.creditEligibility;
  goto L_225;
  if (!((undefined.connectionStatus !== C.FinanceCreditVerificationConnectionStatus.Pending))) goto L_26e;
  return;
  if (!((this.creditStatusPollCount >= z))) goto L_3b5;
  if (!((this.creditVerificationState === M.FinanceCreditVerificationState.Blocked))) goto L_3b3;
  if (!(i.isLoggingEnabled)) goto L_35e;
  console.warn("Finance credit verification status refresh timed out");
  null;
  this.state;
  this.setState({hasCreditStatusLoadError: true});
  return;
  if (!((this.creditStatusPollCount < D))) goto L_3e2;
  goto L_3e5;
  // [栈深重同步 1 -> 0]
  e = 10000;
  this.creditStatusPollTimer = setTimeout(function <atom:0>, e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=188B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, this
function {
  this = this;
  let i;
  i = this.clearCreditVerificationWork();
  null;
  this.state;
  this.setState({creditEligibility: undefined, creditScore: undefined, hasCreditStatusLoadError: true, isVerifyingCredit: false});
  this.closeCreditVerification(i);
  return;
}

// fn <atom:0>  args=1 vars=17 closure=10 cpool=0 bc=6323B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: t
// locals: n, o, c, r, e, s, c#1, a, d, i, i#1, a#1, e#1, t#1, i#2, this
// closure: v, u, R, T, I, M, C, i, B, l
function {
  this = this;
  if (!(v.isVersionAtLeast(63))) goto L_18b1;
  let r;
  let c;
  let o;
  let n;
  n = t.context;
  o = t.funnel;
  c = undefined;
  r = u.FinanceCreditFunnelStep.CompletionError;
  try { // catch -> L_125d
  let a#1;
  let s;
  let e;
  e = this.creditVerificationRepository;
  if (((undefined === e))) goto L_12d;
  if (!(!this.isActiveCreditVerification(t))) goto L_137;
  // gosub (finally 块) 5314
  return undefined; // async
  s = n.pendingVerificationId;
  if (!((undefined === s))) goto L_b2c;
  let d;
  let a;
  let c#1;
  if (!(v.isVersionAtLeast(66))) goto L_1c0;
  c#1 = (undefined !== this.connectorAuthorizationHost);
  r = u.FinanceCreditFunnelStep.AuthorizationFailed;
  u.FinanceCreditFunnelStep.AuthorizationFailed;
  (await this.authorizeFinanceConnection());
  if (!(!this.isActiveCreditVerification(t))) goto L_266;
  // gosub (finally 块) 5314
  return undefined; // async
  if (!(c#1)) goto L_2d9;
  o.record(u.FinanceCreditFunnelStep.AuthorizationSucceeded);
  r = u.FinanceCreditFunnelStep.SessionStartFailed;
  u.FinanceCreditFunnelStep.SessionStartFailed;
  a = (await e.start());
  if (!(!this.isActiveCreditVerification(t))) goto L_380;
  // gosub (finally 块) 5314
  return undefined; // async
  d = undefined;
  r = u.FinanceCreditFunnelStep.SdkError;
  u.FinanceCreditFunnelStep.SdkError;
  o.record(u.FinanceCreditFunnelStep.SdkLaunchRequested);
  t.isProviderRunning = true;
  if (!(v.isVersionAtLeast(125))) goto L_55e;
  null;
  R.FINANCE_CREDIT_VERIFICATION_SCRIPT;
  d = (await n.host.runCreditVerification({environment: a.environment}, a.verificationToken, T.FINANCE_CREDIT_VERIFICATION_APPEARANCE));
  (await n.host.runCreditVerification({environment: a.environment}, a.verificationToken, T.FINANCE_CREDIT_VERIFICATION_APPEARANCE));
  goto L_6ed;
  if (!(v.isVersionAtLeast(100))) goto L_64f;
  let i;
  i = n.host;
  d = (await i.runCreditVerification(a.environment, a.verificationToken, T.FINANCE_CREDIT_VERIFICATION_APPEARANCE));
  (await i.runCreditVerification(a.environment, a.verificationToken, T.FINANCE_CREDIT_VERIFICATION_APPEARANCE));
  goto L_6ed;
  let i#1;
  i#1 = n.host;
  d = (await i#1.runCreditVerification(a.environment, a.verificationToken));
  (await i#1.runCreditVerification(a.environment, a.verificationToken));
  t.isProviderRunning = false;
  if (!(!this.isActiveCreditVerification(t))) goto L_72b;
  // gosub (finally 块) 5314
  return undefined; // async
  if (!((1 === d.kind))) goto L_86f;
  o.record(u.FinanceCreditFunnelStep.SdkCancelled);
  n.copy = {message: I.default.financeAccountLinkingCreditVerificationIncomplete(), action: M.CreditCopyAction.ContinueVerification};
  // gosub (finally 块) 5314
  return undefined; // async
  s = C.normalizeFinanceCreditVerificationId(d.verificationId);
  C.normalizeFinanceCreditVerificationId(d.verificationId);
  if (!((2 === d.kind))) goto L_951;
  goto L_a0c;
  // [栈深重同步 3 -> 2]
  if (!((0 === d.kind))) goto L_9c7;
  if (!((undefined !== s))) goto L_9c7;
  goto L_a0c;
  // [栈深重同步 3 -> 2]
  o.record(u.FinanceCreditFunnelStep.SdkError);
  if (!((undefined === s))) goto L_b1d;
  n.copy = {message: I.default.financeAccountLinkingCreditVerificationError(), action: M.CreditCopyAction.RetryVerification};
  if (!(i.isLoggingEnabled)) goto L_b14;
  console.warn("Finance credit verification provider reported an error");
  // gosub (finally 块) 5314
  return undefined; // async
  n.pendingVerificationId = s;
  r = u.FinanceCreditFunnelStep.CompletionError;
  u.FinanceCreditFunnelStep.CompletionError;
  a#1 = (await e.complete(s, o.flowId));
  if (!(!this.isActiveCreditVerification(t))) goto L_bf9;
  // gosub (finally 块) 5314
  return undefined; // async
  o.record(B(a#1.status));
  if (!((a#1.status === C.FinanceCreditVerificationStatus.Unknown))) goto L_d14;
  if (!(i.isLoggingEnabled)) goto L_d0b;
  console.warn("Finance credit verification returned an unsupported result");
  // gosub (finally 块) 5314
  return undefined; // async
  n.reportStatus = a#1.reportStatus;
  if (!((a#1.status === C.FinanceCreditVerificationStatus.Pending))) goto L_dd8;
  if (((undefined === a#1.reportStatus))) goto L_dea;
  n.pendingVerificationId = undefined;
  undefined;
  if (!((undefined === a#1.reportStatus))) goto L_ead;
  if (!((a#1.status === C.FinanceCreditVerificationStatus.Pending))) goto L_ead;
  n.isReportPreparing = a#1.retryable;
  if (!((a#1.status === C.FinanceCreditVerificationStatus.Failed))) goto L_1066;
  if (!(a#1.requiresBureauContact)) goto L_f9a;
  goto L_fe2;
  // [栈深重同步 4 -> 3]
  if (!(a#1.requiresBureauContact)) goto L_1010;
  goto L_1055;
  // [栈深重同步 4 -> 3]
  n.copy = {message: I.default.financeAccountLinkingCreditVerificationFailed(), action: M.CreditCopyAction.ContactExperian};
  goto L_1249;
  if (!((a#1.status === C.FinanceCreditVerificationStatus.Expired))) goto L_1159;
  n.copy = {message: I.default.financeAccountLinkingCreditVerificationExpired(), action: M.CreditCopyAction.RetryVerification};
  goto L_1249;
  if (!((a#1.status === C.FinanceCreditVerificationStatus.RequiresAction))) goto L_1249;
  n.copy = {message: I.default.financeAccountLinkingCreditVerificationIncomplete(), action: M.CreditCopyAction.ContinueVerification};
  a#1.status;
  c = a#1;
  a#1;
  <?>;
  // gosub (finally 块) 5314
  undefined;
  goto L_166f;
  // [栈深重同步 0 -> 1]
  e#1 = <?>;
  try { // catch -> L_14bc
  if (!(this.isActiveCreditVerification(t))) goto L_14b4;
  let t#1;
  t#1 = (e#1 instanceof l.FinanceAccountLinkingCancelledError);
  if (!(t#1)) goto L_137d;
  if (!((r === u.FinanceCreditFunnelStep.AuthorizationFailed))) goto L_137d;
  goto L_13ae;
  // [栈深重同步 1 -> 0]
  if ((t#1)) goto L_13ae;
  o.record(r);
  if ((t#1)) goto L_14b3;
  n.copy = {message: I.default.financeAccountLinkingCreditVerificationError(), action: M.CreditCopyAction.RetryVerification};
  if (!(i.isLoggingEnabled)) goto L_14b3;
  console.warn("Finance credit verification could not be completed");
  // gosub (finally 块) 5314
  return undefined; // async
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 5314
  throw <?>;
  if (!((this.activeCreditVerification === t))) goto L_166e;
  let i#2;
  i#2 = this.clearCreditVerificationWork();
  null;
  this.state;
  if (!((undefined === n.copy))) goto L_15b6;
  if (!((undefined === n.reportStatus))) goto L_15b6;
  goto L_15fa;
  // [栈深重同步 4 -> 3]
  if (!((undefined !== n.pendingVerificationId))) goto L_1634;
  this.setState({creditEligibility: this.state.creditEligibility, creditScore: undefined, hasCreditStatusLoadError: (undefined === c), isVerifyingCredit: false});
  this.closeCreditVerification(i#2);
  // ret (finally 块) 
  if (((undefined === c))) goto L_18b0;
  if (((undefined !== c.reportStatus))) goto L_18b0;
  if (!((c.status !== C.FinanceCreditVerificationStatus.Connected))) goto L_1780;
  if (((c.status !== C.FinanceCreditVerificationStatus.Pending))) goto L_18b0;
  if ((!this.isCurrentCreditContext(t.context))) goto L_18b0;
  this.notifyCreditVerificationCompleted(t.context, c.status, c.retryable);
  this.refreshCreditConnection(t.context);
  return undefined; // async
}

// fn <atom:0>  args=3 vars=5 closure=3 cpool=0 bc=512B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: t, e, n
// locals: o, this
// closure: v, C, i
function {
  this = this;
  if (!(v.isVersionAtLeast(48))) goto L_1ff;
  if (!(this.isCurrentFlowOwner())) goto L_1ff;
  if (!(this.isCurrentCreditContext(t))) goto L_1ff;
  if (((e !== C.FinanceCreditVerificationStatus.Connected))) goto L_f1;
  if (!(!t.hasNotifiedConnected)) goto L_1ff;
  if (!((e === C.FinanceCreditVerificationStatus.Connected))) goto L_14e;
  t.hasNotifiedConnected = true;
  true;
  try { // catch -> L_19f
  t.host.onCreditVerificationCompleted(e, n);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_1fe
  if (!(i.isLoggingEnabled)) goto L_1fb;
  console.warn("Finance credit verification result could not be delivered to its host");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=526B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i
// locals: t, this
// closure: L
function {
  this = this;
  if (!((this.activeCreditVerification !== i))) goto L_2b;
  return false;
  if ((!this.isCurrentFlowOwner())) goto L_130;
  if ((!this.isCurrentCreditContext(i.context))) goto L_130;
  if (!((this.state.selectedTab !== L.FinanceAccountLinkingTab.CreditScore))) goto L_20b;
  let t;
  i.context.pendingVerificationId = undefined;
  t = this.clearCreditVerificationWork();
  null;
  this.state;
  this.setState({isVerifyingCredit: false});
  this.closeCreditVerification(t);
  return false;
  return true;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=427B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, t, this
function {
  this = this;
  let t;
  let i;
  i = this.activeCreditVerification;
  this.activeCreditVerification = undefined;
  if (!((undefined !== this.creditStatusPollTimer))) goto L_93;
  clearTimeout(this.creditStatusPollTimer);
  this.creditStatusPollTimer = undefined;
  undefined;
  this.activeCreditEligibilityRequest = undefined;
  t = this.activeCreditScoreTask;
  this.activeCreditScoreTask = undefined;
  if (!((t == null))) goto L_d8;
  t;
  goto L_fc;
  undefined.cancel();
  if (!((this.creditVerificationRepository == null))) goto L_127;
  this.creditVerificationRepository;
  goto L_14b;
  undefined.cancel();
  this.creditStatusPollCount = 0;
  if (!((undefined !== i))) goto L_1a6;
  this.connectorAuthorization.cancel();
  return i;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=308B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: t
// locals: e
// closure: v, i
function {
  if (!((t == null))) goto L_9;
  t;
  goto L_2a;
  if (!(undefined.isProviderRunning)) goto L_133;
  if (!(v.isVersionAtLeast(60))) goto L_133;
  try { // catch -> L_d3
  if (!((t.context.host.closeCreditVerification == null))) goto L_cd;
  t.context.host.closeCreditVerification;
  t.context.host;
  goto L_d0;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_132
  if (!(i.isLoggingEnabled)) goto L_12f;
  console.warn("Finance credit verification provider could not be closed");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=433B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: this
// closure: m, l
function {
  this = this;
  this.cancelAccountLinking();
  this.accountFunnel = new m.FinanceAccountLinkingFunnel(this.financeApi);
  this.accountLinkingRepository = new l.FinanceAccountLinkingRepository(this.financeApi, {flowId: this.accountFunnel.flowId, platform: this.accountLinkingPlatform(), androidPackageName: this.androidPackageName});
  this.accountFunnel.start();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=43B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: e
// closure: this, t, i
function {
  this.finishPlaidLink(t, i, e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=364B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// closure: this, t, b, u
function {
  if (!(this.isActiveSession(t))) goto L_144;
  this.metrics.record(b.FinanceAccountLinkingCheckpoint.PlaidExited);
  this.accountFunnel.record(u.FinanceFunnelStep.PlaidExit);
  this.exitAccountLinking(t);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=5 cpool=2 bc=1402B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: t
// locals: e, n, i, o, this
// closure: b, u, v, l, i
function {
  this = this;
  let n;
  let e;
  if (!((this.context == null))) goto L_34;
  this.context;
  goto L_55;
  e = undefined.host;
  n = this.accountLinkingRepository;
  if (!((undefined !== e))) goto L_578;
  if (!((undefined !== n))) goto L_578;
  if (!(this.isActiveSession(t))) goto L_578;
  try { // catch -> L_374
  let i;
  (await this.authorizeFinanceConnection());
  if (!(!this.isActiveSession(t))) goto L_117;
  return undefined; // async
  i = (await n.session());
  if (!(!this.isActiveSession(t))) goto L_16d;
  return undefined; // async
  if (!(v.isVersionAtLeast(23))) goto L_36c;
  this.metrics.record(b.FinanceAccountLinkingCheckpoint.PlaidLaunchRequested);
  this.accountFunnel.record(u.FinanceFunnelStep.PlaidLaunchRequested);
  e.openPlaidLink(i.linkToken, {oauthStateId: i.oauthStateId, financeKitSyncBehavior: i.financeKitSyncBehavior}, {onSuccess: function <atom:0>, onExit: function <atom:0>});
  // close_loc i
  <?>;
  goto L_578;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_577
  if (!(!this.isActiveSession(t))) goto L_3a7;
  return undefined; // async
  if (((o instanceof l.FinanceAccountLinkingCancelledError))) goto L_54b;
  this.metrics.record(b.FinanceAccountLinkingCheckpoint.LinkFailed);
  this.accountFunnel.record(u.FinanceFunnelStep.LinkFailed);
  if (!(i.isLoggingEnabled)) goto L_54b;
  console.warn("Finance account linking could not start", {error: o});
  this.exitAccountLinking(t);
  <?>;
  goto L_578;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=3 vars=7 closure=4 cpool=0 bc=972B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: t, e, n
// locals: o, i, c, this
// closure: u, l, b, i
function {
  this = this;
  let o;
  o = this.accountLinkingRepository;
  if (!((undefined !== o))) goto L_3ca;
  if (!(this.isActiveSession(t))) goto L_3ca;
  this.accountFunnel.record(u.FinanceFunnelStep.PlaidSuccess);
  null;
  this.state;
  this.setState({isConnectingAccounts: true});
  try { // catch -> L_1c9
  let i;
  i = (await o.complete(e, n));
  if (!(this.isActiveSession(t))) goto L_1c4;
  this.finishAccountLinking(t, i);
  <?>;
  goto L_3ca;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_3c9
  if (!(this.isActiveSession(t))) goto L_3c5;
  if (((c instanceof l.FinanceAccountLinkingCancelledError))) goto L_39e;
  this.metrics.record(b.FinanceAccountLinkingCheckpoint.LinkFailed);
  this.accountFunnel.record(u.FinanceFunnelStep.LinkFailed);
  if (!(i.isLoggingEnabled)) goto L_39e;
  console.warn("Finance account-linking confirmation failed", {error: c});
  this.exitAccountLinking(t);
  <?>;
  goto L_3ca;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=127B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// closure: this, s, i, t
function {
  if (!(!this.isDestroyed())) goto L_7e;
  if (!(this.isCurrentFlowOwner())) goto L_7e;
  s.trackFinanceAccountsLinkedResult(i, t);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=1 bc=306B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, t, this
// closure: s, a, i
function {
  this = this;
  try { // catch -> L_d1
  let t;
  let i;
  if (!((this.context == null))) goto L_37;
  this.context;
  goto L_58;
  i = undefined.platformServices;
  t = {flowId: this.accountFunnel.flowId, resultId: a.v4()};
  return function <atom:0>;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_131
  if (!(i.isLoggingEnabled)) goto L_12d;
  console.warn("Finance Accounts linking-result setup failed");
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=37B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i, t
function {
  return (i + t.accountCount);
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=1 bc=632B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i, t
// locals: e, this
// closure: b, v
function {
  this = this;
  let e;
  if (!(!this.isActiveSession(i))) goto L_2f;
  return;
  this.metrics.record(b.FinanceAccountLinkingCheckpoint.LinkCompleted);
  e = this.captureAccountsLinkedResult();
  this.activeLinkingSession = undefined;
  if (!((this.accountLinkingRepository == null))) goto L_116;
  this.accountLinkingRepository;
  goto L_13a;
  undefined.clearSession();
  null;
  this.state;
  this.setState({connectedInstitutions: t, isLaunchingPlaid: false, isConnectingAccounts: false});
  if (!((e == null))) goto L_1a8;
  e;
  goto L_1a9;
  undefined();
  if (!(v.isVersionAtLeast(23))) goto L_277;
  if (!((this.context == null))) goto L_202;
  this.context;
  goto L_277;
  if (!((undefined.host == null))) goto L_22b;
  undefined.host;
  goto L_277;
  undefined.onAccountsLinked(t.reduce(function <atom:0>, 0));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=227B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i
// locals: this
function {
  this = this;
  if (!((this.activeLinkingSession === i))) goto L_e2;
  this.activeLinkingSession = undefined;
  if (!((this.accountLinkingRepository == null))) goto L_62;
  this.accountLinkingRepository;
  goto L_86;
  undefined.clearSession();
  null;
  this.state;
  this.setState({isLaunchingPlaid: false, isConnectingAccounts: false});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i
// locals: this
function {
  this = this;
  if (!(!this.hasDismissed)) goto L_4d;
  return (this.activeLinkingSession === i);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=502B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// closure: S, h
function {
  if (!(S.Device.isWeb())) goto L_90;
  return h.FinanceAccountLinkingPlatform.Web;
  if (!(S.Device.isAndroid())) goto L_120;
  return h.FinanceAccountLinkingPlatform.Android;
  if (!(S.Device.isIOS())) goto L_1b0;
  return h.FinanceAccountLinkingPlatform.IOS;
  return h.FinanceAccountLinkingPlatform.Web;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=112B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: this
// closure: v
function {
  this = this;
  if (!(v.isVersionAtLeast(20))) goto L_6f;
  return this.viewModel.androidPackageName;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=119B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: this
// closure: v
function {
  this = this;
  if (!(v.isVersionAtLeast(23))) goto L_76;
  if (!((this.context == null))) goto L_54;
  this.context;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.platformServices;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=154B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: this
// closure: v
function {
  this = this;
  if (!(v.isVersionAtLeast(218))) goto L_98;
  if (!((this.viewModel.trackingContext == null))) goto L_76;
  this.viewModel.trackingContext;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.entrypoint;
  return undefined;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=119B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: this
// closure: v
function {
  this = this;
  if (!(v.isVersionAtLeast(63))) goto L_76;
  if (!((this.context == null))) goto L_54;
  this.context;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.creditVerificationHost;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=258B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, this
// closure: v
function {
  this = this;
  if (!(v.isVersionAtLeast(66))) goto L_100;
  if (!((undefined !== this.connectorAuthorizationHost))) goto L_100;
  let i;
  i = this.financeApiService;
  if (!((undefined === i))) goto L_93;
  throw new Error("Finance connection authorization requires an authenticated platform host");
  (await this.connectorAuthorization.authorize(i, this.connectorAuthorizationHost));
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=266B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: this
// closure: I
function {
  this = this;
  if (!((this.state.creditEligibility == null))) goto L_4d;
  this.state.creditEligibility;
  goto L_6e;
  if (!(undefined.requiresBureauContact)) goto L_bf;
  return {message: I.default.financeAccountLinkingCreditVerificationBureauContact()};
  if (!((this.creditVerificationContext == null))) goto L_e8;
  this.creditVerificationContext;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.copy;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=1600B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, this
// closure: M, C
function {
  this = this;
  let i;
  if (!((undefined === this.creditVerificationContext))) goto L_71;
  return M.FinanceCreditVerificationState.UpdateRequired;
  i = this.state.creditEligibility;
  if (!((i == null))) goto L_c0;
  i;
  goto L_e1;
  if (!(undefined.pendingDeletion)) goto L_129;
  return M.FinanceCreditVerificationState.Blocked;
  if (!((this.creditVerificationContext.reportStatus === C.FinanceCreditReportStatus.Failed))) goto L_1fb;
  return M.FinanceCreditVerificationState.ReportFailed;
  if (!((this.creditVerificationContext.reportStatus === C.FinanceCreditReportStatus.Unknown))) goto L_28a;
  return M.FinanceCreditVerificationState.Blocked;
  this.creditVerificationContext.reportStatus;
  if (!((undefined === i))) goto L_370;
  if (!((this.creditVerificationContext == null))) goto L_2c0;
  this.creditVerificationContext;
  goto L_2e1;
  if (!((undefined === undefined.copy))) goto L_32a;
  return M.FinanceCreditVerificationState.Blocked;
  return M.FinanceCreditVerificationState.Available;
  if (!((i.connectionStatus === C.FinanceCreditVerificationConnectionStatus.Connected))) goto L_423;
  return M.FinanceCreditVerificationState.Connected;
  if (!((i.connectionStatus === C.FinanceCreditVerificationConnectionStatus.Pending))) goto L_521;
  if (!(i.retryable)) goto L_4db;
  return M.FinanceCreditVerificationState.Preparing;
  return M.FinanceCreditVerificationState.Available;
  if (!((i.connectionStatus === C.FinanceCreditVerificationConnectionStatus.NotConnected))) goto L_5b0;
  return M.FinanceCreditVerificationState.Available;
  if (!((i.connectionStatus === C.FinanceCreditVerificationConnectionStatus.Unknown))) goto L_63f;
  return M.FinanceCreditVerificationState.Blocked;
  i.connectionStatus;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=589B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: this
// closure: L, M
function {
  this = this;
  if (!((undefined !== this.creditVerificationContext))) goto L_24c;
  if (!(this.isCurrentCreditContext(this.creditVerificationContext))) goto L_24c;
  if (!((this.state.selectedTab === L.FinanceAccountLinkingTab.CreditScore))) goto L_24c;
  if (!(this.state.hasCreditStatusLoadError)) goto L_1e4;
  if (!((undefined !== this.creditVerificationContext.pendingVerificationId))) goto L_24c;
  return !this.creditVerificationContext.isReportPreparing;
  return (this.creditVerificationState === M.FinanceCreditVerificationState.Available);
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=232B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: t, this
// closure: O, i
function {
  this = this;
  try { // catch -> L_86
  if (!((this.platformServices == null))) goto L_33;
  this.platformServices;
  goto L_83;
  if (!((undefined.experimentService == null))) goto L_5c;
  undefined.experimentService;
  goto L_83;
  return (true === undefined.isFeatureFlagEnabled(O));
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_e7
  if (!(i.isLoggingEnabled)) goto L_e2;
  console.warn("Finance first-party account-linking flag could not be read");
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: this
function {
  this = this;
  if ((this.requestedCredit)) goto L_4a;
  return this.isCreditDiscoveryEnabled;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=112B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i
// locals: this
function {
  this = this;
  if (!(this.requestedCredit)) goto L_6f;
  this.metrics.record(i);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=231B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, t, this
// closure: v, q
function {
  this = this;
  let i;
  if (!((this.platformServices == null))) goto L_2f;
  this.platformServices;
  goto L_50;
  i = undefined.experimentService;
  if (!((undefined === i))) goto L_a8;
  if (!(v.isVersionAtLeast(48))) goto L_a7;
  return (undefined !== this.creditVerificationHost);
  try { // catch -> L_dc
  return (true === i.isFeatureFlagEnabled(q));
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_e6
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=125B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: this
// closure: v
function {
  this = this;
  if (!(!!v.isVersionAtLeast(68))) goto L_7c;
  if (!((this.context == null))) goto L_5a;
  this.context;
  goto L_7b;
  return (undefined !== undefined.manualAccountChatHost);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=110B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: this
function {
  this = this;
  if (!(this.supportsManualAccountChat)) goto L_6d;
  return (undefined !== this.state.creditScore);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=210B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: i, this
function {
  this = this;
  let i;
  i = this.activeLinkingSession;
  this.activeLinkingSession = undefined;
  if (!((this.accountLinkingRepository == null))) goto L_5d;
  this.accountLinkingRepository;
  goto L_81;
  undefined.cancel();
  if (!((undefined !== i))) goto L_d1;
  this.connectorAuthorization.cancel();
  return;
}

// fn B  args=1 vars=1 closure=2 cpool=0 bc=860B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i
// closure: C, u
function {
  if (!((i === C.FinanceCreditVerificationStatus.Connected))) goto L_90;
  return u.FinanceCreditFunnelStep.CompletionConnected;
  if (!((i === C.FinanceCreditVerificationStatus.Pending))) goto L_11f;
  return u.FinanceCreditFunnelStep.CompletionPending;
  if (!((i === C.FinanceCreditVerificationStatus.Failed))) goto L_1ae;
  return u.FinanceCreditFunnelStep.CompletionFailed;
  if (!((i === C.FinanceCreditVerificationStatus.Expired))) goto L_23d;
  return u.FinanceCreditFunnelStep.CompletionExpired;
  if (!((i === C.FinanceCreditVerificationStatus.RequiresAction))) goto L_2cc;
  return u.FinanceCreditFunnelStep.CompletionRequiresAction;
  if (!((i === C.FinanceCreditVerificationStatus.Unknown))) goto L_35b;
  return u.FinanceCreditFunnelStep.CompletionError;
  i;
  return;
}

// fn W  args=2 vars=2 closure=1 cpool=0 bc=433B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: i, t
// closure: L
function {
  if (!((i === L.FinanceAccountLinkingTab.CreditScore))) goto L_90;
  return L.FinanceAccountLinkingTab.CreditScore;
  if (!((i === L.FinanceAccountLinkingTab.ManualAccounts))) goto L_16b;
  if (!(t)) goto L_125;
  return L.FinanceAccountLinkingTab.ManualAccounts;
  return L.FinanceAccountLinkingTab.Accounts;
  return L.FinanceAccountLinkingTab.Accounts;
}

// fn <atom:0>  args=3 vars=50 closure=0 cpool=49 bc=1515B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// args: require, module, exports
// locals: i, t, e, n, o, c, r, s, a, d, u, h, l, C, f, p, g, A, v, S, F, V, k, L, y, m, b, w, P, E, T, R, x, M, I, q, O, D, z, _, N, FinanceAccountLinkingFlowComponent, <class_fields_init>, FinanceAccountLinkingFlowComponent#1, B, W, H
function {
  B = function B;
  W = function W;
  let H;
  let FinanceAccountLinkingFlowComponent#1;
  let N;
  let _;
  let z;
  let D;
  let O;
  let q;
  let I;
  let M;
  let x;
  let R;
  let T;
  let E;
  let P;
  let w;
  let b;
  let m;
  let y;
  let L;
  let k;
  let V;
  let F;
  let S;
  let v;
  let A;
  let g;
  let p;
  let f;
  let C;
  let l;
  let h;
  let u;
  let d;
  let a;
  let s;
  let r;
  let c;
  let o;
  let n;
  let e;
  let t;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceAccountLinkingFlowComponent = undefined;
  i = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeComponentPrototype(undefined, "BaLN7YWS3K3Pgh45");
  n = t.makeNodePrototype("view", ["accessibilityId", "finance-account-linking"], "_CyTxVONgLRlQvrG");
  o = t.makeComponentPrototype(undefined, "uLA9BU4pFjY2--He");
  c = t.makeComponentPrototype(undefined, "C7lhbFMQBZgkbvCM");
  r = t.makeComponentPrototype(undefined, "KHtAcLyF0LiSzgSC");
  s = require("chatgpt_finance/src/FinanceAccountsResultAnalytics");
  a = require("foundation/src/uuid");
  d = require("chatgpt_finance/src/FinanceApi");
  u = require("chatgpt_finance/src/FinanceFunnelModels");
  h = require("chatgpt_finance/src/FinanceAccountLinkingModels");
  l = require("chatgpt_finance/src/FinanceAccountLinkingRepository");
  C = require("chatgpt_finance/src/FinanceCreditVerificationModels");
  f = require("chatgpt_finance/src/FinanceCreditVerificationRepository");
  p = require("oai_core/src/OAITheme");
  g = require("oai_core/src/OAITokens");
  A = require("valdi_core/src/Component");
  v = require("valdi_core/src/CompilerIntrinsics");
  S = require("valdi_core/src/Device");
  F = require("valdi_core/src/Style");
  V = require("valdi_core/src/ValdiRuntimeProvider");
  k = require("valdi_platform_browser/src/PlatformBrowser");
  L = require("./FinanceAccountLinkingComponent");
  y = require("./FinanceAccountLinkingConfirmation");
  m = require("./FinanceAccountLinkingFunnel");
  b = require("./FinanceAccountLinkingMetrics");
  w = require("./FinanceAccountLinkingPicker");
  P = require("./FinanceAccountLinkingProgress");
  E = require("./FinanceConnectorAuthorization");
  T = require("./FinanceCreditVerificationAppearance");
  R = require("./FinanceCreditVerificationScript");
  x = require("./FinanceCreditVerificationFunnel");
  M = require("./FinanceCreditVerificationModels");
  I = require("./Strings");
  q = {flagName: "3788389430"};
  O = {flagName: "3966137303"};
  D = 30;
  z = 54;
  _ = "https://help.openai.com/en/articles/20001222-finances-in-chatgpt";
  N = "https://www.experian.com/help/contact/";
  let FinanceAccountLinkingFlowComponent;
  let <class_fields_init>;
  class FinanceAccountLinkingFlowComponent extends A.StatefulComponent { ... }
  <proto:FinanceAccountLinkingFlowComponent>.onCreate = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.onDestroy = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.onRender = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.reportRenderedCheckpoints = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.themeMode = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.openAccountChat = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.openAccountChatWhenAuthorized = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.handOffAccountChat = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.cancelAccountChat = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.synchronizeFlowContext = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.isCurrentCreditContext = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.refreshCreditConnection = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.loadCreditEligibility = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.loadCreditScore = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.acceptCreditScoreResult = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.acceptCreditEligibilityResult = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.scheduleCreditStatusPoll = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.failCreditStatus = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.launchCreditVerification = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.notifyCreditVerificationCompleted = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.isActiveCreditVerification = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.clearCreditVerificationWork = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.closeCreditVerification = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.startAccountLinkingJourney = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.launchPlaidWhenReady = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.finishPlaidLink = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.captureAccountsLinkedResult = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.finishAccountLinking = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.exitAccountLinking = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.isActiveSession = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.accountLinkingPlatform = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.androidPackageName = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.platformServices = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.linkingEntrypoint = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.creditVerificationHost = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.authorizeFinanceConnection = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.creditVerificationCopy = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.creditVerificationState = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.isCreditVerificationAllowed = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.isFirstPartyAccountLinkingEnabled = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.canShowCredit = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.reportCreditRoute = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.isCreditDiscoveryEnabled = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.supportsManualAccountChat = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.canOpenCreditScoreChat = function <atom:0>;
  <proto:FinanceAccountLinkingFlowComponent>.cancelAccountLinking = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceAccountLinkingFlowComponent>;
  FinanceAccountLinkingFlowComponent = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceAccountLinkingFlowComponent#1 = function <atom:0>;
  exports.FinanceAccountLinkingFlowComponent = FinanceAccountLinkingFlowComponent#1;
  H = {root: new F.Style({backgroundColor: g.OAIColor.BgPrimary, flexDirection: "column", flexGrow: 1, height: "100%", paddingTop: g.OAISpacing.Three, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
