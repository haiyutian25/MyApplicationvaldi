// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=203B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, o, it, this
function {
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", it.controls);
  this.renderTabs();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=1 bc=493B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// locals: e, this
// closure: t, o, it, i, n
function {
  this = this;
  let e;
  e = (this.viewModel.tabOptions.length > 0);
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", it.picker);
  this.renderHeader();
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", it.content);
  if (!(e)) goto L_176;
  function <atom:0>();
  this.renderBody();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=501B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, Ve, l, e, Ie, Me
function {
  t.beginComponent(Ve.Icon, l, undefined, undefined);
  if (!(e)) goto L_c6;
  goto L_10b;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("src", Ie.default.crossedLg);
  if (!(e)) goto L_184;
  goto L_1c9;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("color", Me.OAIColor.IconSecondary);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=14 cpool=1 bc=1710B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// locals: e, this
// closure: t, Ve, l, Ie, Me, Ge, r, it, d, a, ze, _e, c, Ee
function {
  this = this;
  let e;
  if (!((this.viewModel.selectedTab === this.viewModel.creditScoreTab))) goto L_1af;
  if (!((this.viewModel.creditVerificationState === Ge.FinanceCreditVerificationState.Connected))) goto L_1af;
  if (!(!this.viewModel.isLoadingCreditStatus)) goto L_1af;
  e = !this.viewModel.hasCreditStatusLoadError;
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", it.header);
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", it.headerSpacer);
  t.endRender();
  t.beginRender(a, undefined);
  t.setAttributeStyle("style", it.headerTitle);
  t.setAttributeString("value", ze.default.financeAccountLinkingTitle());
  t.endRender();
  t.beginComponent(_e.IconButton, c, undefined, undefined);
  t.setViewModelProperty("style", it.dismissButton);
  t.setViewModelProperty("material", Ee.ControlMaterial.Glass);
  if (!(e)) goto L_578;
  goto L_5c0;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityLabel", ze.default.financeAccountLinkingCloseAccessibilityLabel());
  t.setViewModelProperty("onPress", this.viewModel.onDismiss);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// args: e
// closure: this
function {
  return this.renderTab(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=555B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// locals: this
// closure: t, s, it, ze, p
function {
  this = this;
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", it.tabsScroll);
  t.setAttributeString("accessibilityLabel", ze.default.financeAccountLinkingConnectionTypesAccessibilityLabel());
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", it.tabs);
  this.viewModel.tabOptions.map(function <atom:0>);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=104B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: this, e
function {
  return this.viewModel.onTabSelected(e.value);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=5 cpool=1 bc=1077B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// args: e
// locals: i, this
// closure: t, y, it, Me, g
function {
  this = this;
  let i;
  i = (this.viewModel.selectedTab === e.value);
  t.beginRender(y, e.value);
  t.setAttributeStyle("style", it.tab);
  t.setAttributeString("accessibilityId", "finance-account-linking-tab-".concat(e.value));
  t.setAttribute("accessibilityStateSelected", i);
  if (!(i)) goto L_227;
  goto L_228;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("backgroundColor", undefined);
  t.setAttributeFunction("onTap", function <atom:0>);
  t.beginRender(g, undefined);
  t.setAttributeStyle("style", it.tabLabel);
  if (!(i)) goto L_34d;
  goto L_392;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("color", Me.OAIColor.TextSecondary);
  t.setAttributeString("value", e.label);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=7 cpool=0 bc=2609B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// locals: e, this
// closure: t, We, u, FinanceCreditVerificationContent, S, je, v
function {
  this = this;
  let e;
  e = this.viewModel.onManualAccountSelected;
  if (!((this.viewModel.selectedTab === this.viewModel.manualAccountsTab))) goto L_18a;
  if (!((undefined !== e))) goto L_18a;
  t.beginComponent(We.FinanceManualAccounts, u, undefined, undefined);
  t.setViewModelProperty("onManualAccountSelected", e);
  t.endComponent();
  return undefined;
  if (!((this.viewModel.selectedTab === this.viewModel.creditScoreTab))) goto L_823;
  t.beginComponent(FinanceCreditVerificationContent, S, undefined, undefined);
  t.setViewModelProperty("isOpeningAccountChat", this.viewModel.isOpeningAccountChat);
  t.setViewModelProperty("onCreditScoreChat", this.viewModel.onCreditScoreChat);
  t.setViewModelProperty("creditScore", this.viewModel.creditScore);
  t.setViewModelProperty("creditCopy", this.viewModel.creditCopy);
  t.setViewModelProperty("creditVerificationState", this.viewModel.creditVerificationState);
  t.setViewModelProperty("hasCreditStatusLoadError", this.viewModel.hasCreditStatusLoadError);
  t.setViewModelProperty("hasReachedCreditStatusPollLimit", this.viewModel.hasReachedCreditStatusPollLimit);
  t.setViewModelProperty("isLoadingCreditStatus", this.viewModel.isLoadingCreditStatus);
  t.setViewModelProperty("isVerifying", (true === this.viewModel.isVerifyingCredit));
  t.setViewModelProperty("onLearnMore", this.viewModel.onCreditLearnMore);
  t.setViewModelProperty("onContactExperian", this.viewModel.onCreditSupport);
  t.setViewModelProperty("onRetryCreditStatus", this.viewModel.onRetryCreditStatus);
  t.setViewModelProperty("onStart", this.viewModel.onCreditVerification);
  t.endComponent();
  return undefined;
  if (!((this.viewModel.selectedTab === this.viewModel.accountsTab))) goto L_a09;
  t.beginComponent(je.FinancePlaidIntroduction, v, undefined, undefined);
  t.setViewModelProperty("isLaunching", this.viewModel.isLaunchingPlaid);
  t.setViewModelProperty("onContinue", this.viewModel.onContinueToPlaid);
  goto L_a2e;
  // [栈深重同步 1 -> 0]
  this.renderFutureTab();
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=103B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// args: e
// closure: this
function {
  return (e.value === this.viewModel.selectedTab);
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=285B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, A, it, ze, i
function {
  t.beginRender(A, undefined);
  t.setAttributeStyle("style", it.messageTitle);
  t.setAttributeString("value", ze.default.financeAccountLinkingComingSoonTitle(i));
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=6 cpool=2 bc=872B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// locals: e, i, this
// closure: t, A, it, ze, Ue, b
function {
  this = this;
  let i;
  let e;
  e = this.viewModel.tabOptions.find(function <atom:0>);
  if (!((e == null))) goto L_7d;
  e;
  goto L_9e;
  if (!((undefined.label == null))) goto L_17a;
  undefined.label;
  if (!((this.viewModel.selectedTab === this.viewModel.creditScoreTab))) goto L_179;
  goto L_17a;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!((undefined !== i))) goto L_367;
  t.beginComponent(Ue.SafeArea, b, undefined, undefined);
  t.setViewModelProperty("edges", [Ue.SafeAreaEdge.Bottom]);
  t.setViewModelProperty("style", it.messageContainer);
  t.setViewModelProperty("accessibilityLabel", ze.default.financeAccountLinkingComingSoonAccessibilityLabel(i));
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
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
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=181B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// locals: t
// closure: qe, e
function {
  try { // catch -> L_55
  qe.platformBrowser.openURL("https://chatgpt.com/update-app");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_b4
  if (!(e.isLoggingEnabled)) goto L_b1;
  console.warn("Could not open the ChatGPT app update page");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=63B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// locals: this.active_func, new.target, arguments, this
// closure: qe, e, <class_fields_init>
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
  this.openAppUpdate = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=1129B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, m, it, ze, C, w, Re, h, this
function {
  t.beginRender(m, undefined);
  t.setAttributeStyle("style", it.creditTitle);
  t.setAttributeString("value", ze.default.financeAccountLinkingCreditUpdateTitle());
  t.endRender();
  t.beginRender(C, undefined);
  t.setAttributeStyle("style", it.creditDetail);
  t.setAttributeString("value", ze.default.financeAccountLinkingCreditUpdateDescription());
  t.endRender();
  t.beginRender(w, undefined);
  t.setAttributeStyle("style", it.creditAction);
  t.beginComponent(Re.Button, h, undefined, undefined);
  t.setViewModelProperty("style", it.creditStart);
  t.setViewModelProperty("label", ze.default.financeAccountLinkingCreditUpdateAction());
  t.setViewModelProperty("onPress", this.openAppUpdate);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=238B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, Te, I, ze
function {
  t.beginComponent(Te.ActivityIndicator, I, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", ze.default.financeAccountLinkingCreditStatusLoading());
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=0 bc=1306B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, O, it, ze, M, e, i, T, Re, R, this
function {
  t.beginRender(O, undefined);
  t.setAttributeStyle("style", it.creditTitle);
  t.setAttributeString("value", ze.default.financeAccountLinkingCreditScoreTitle());
  t.endRender();
  t.beginRender(M, undefined);
  t.setAttributeStyle("style", it.creditDetail);
  t.setAttributeString("accessibilityLabel", e);
  t.setAttribute("accessibilityStateLiveRegion", i);
  t.setAttributeString("value", e);
  t.endRender();
  t.beginRender(T, undefined);
  t.setAttributeStyle("style", it.creditAction);
  t.beginComponent(Re.Button, R, undefined, undefined);
  t.setViewModelProperty("style", it.creditStart);
  t.setViewModelProperty("accessibilityLabel", ze.default.financeAccountLinkingCreditStatusRetryAccessibilityLabel());
  t.setViewModelProperty("label", ze.default.financeAccountLinkingCreditStatusRetry());
  t.setViewModelProperty("onPress", this.viewModel.onRetryCreditStatus);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=631B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, V, it, o, x, n, r
function {
  t.beginRender(V, undefined);
  t.setAttributeStyle("style", it.creditTitle);
  t.setAttributeString("accessibilityLabel", o);
  t.setAttributeString("value", o);
  t.endRender();
  t.beginRender(x, undefined);
  t.setAttributeStyle("style", it.creditDetail);
  if (!(n)) goto L_1b7;
  goto L_1bc;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityId", "finance-credit-verification-blocked");
  t.setAttributeString("accessibilityLabel", r);
  t.setAttribute("accessibilityStateLiveRegion", true);
  t.setAttributeString("value", r);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=7 closure=22 cpool=4 bc=2484B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// locals: e, i, e#1, n, o, r, this
// closure: t, m, it, ze, C, w, Re, h, Te, I, O, M, T, R, V, x, Ge, Ue, f, P, k, L
function {
  this = this;
  let r;
  let o;
  let n;
  let i;
  let e;
  e = this.viewModel.creditVerificationState;
  if (!((e === Ge.FinanceCreditVerificationState.UpdateRequired))) goto L_20f;
  t.beginComponent(Ue.SafeArea, f, undefined, undefined);
  t.setViewModelProperty("edges", [Ue.SafeAreaEdge.Bottom]);
  t.setViewModelProperty("style", it.creditContainer);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
  if (!(this.viewModel.isLoadingCreditStatus)) goto L_3c2;
  t.beginComponent(Ue.SafeArea, P, undefined, undefined);
  t.setViewModelProperty("edges", [Ue.SafeAreaEdge.Bottom]);
  t.setViewModelProperty("style", it.creditContainer);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
  i = this.viewModel.hasCreditStatusLoadError;
  if (!(i)) goto L_5c5;
  let e#1;
  e#1 = ze.default.financeAccountLinkingCreditStatusLoadError();
  t.beginComponent(Ue.SafeArea, k, undefined, undefined);
  t.setViewModelProperty("edges", [Ue.SafeAreaEdge.Bottom]);
  t.setViewModelProperty("style", it.creditContainer);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
  if (!((e === Ge.FinanceCreditVerificationState.Preparing))) goto L_638;
  this.renderPreparingCredit();
  return;
  if (!((e === Ge.FinanceCreditVerificationState.Connected))) goto L_6ab;
  this.renderConnectedCredit();
  return;
  if (!((e === Ge.FinanceCreditVerificationState.Available))) goto L_71e;
  this.renderAvailableCredit();
  return;
  n = (e === Ge.FinanceCreditVerificationState.ReportFailed);
  o = ze.default.financeAccountLinkingCreditScoreTitle();
  if (!(n)) goto L_801;
  goto L_849;
  // [栈深重同步 1 -> 0]
  r = ze.default.financeAccountLinkingCreditScoreUnavailable();
  t.beginComponent(Ue.SafeArea, L, undefined, undefined);
  t.setViewModelProperty("edges", [Ue.SafeAreaEdge.Bottom]);
  t.setViewModelProperty("style", it.creditContainer);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=598B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, H, it, Re, q, ze, this
function {
  t.beginRender(H, undefined);
  t.setAttributeStyle("style", it.creditAction);
  t.beginComponent(Re.Button, q, undefined, undefined);
  t.setViewModelProperty("style", it.creditStart);
  t.setViewModelProperty("label", ze.default.financeAccountLinkingCreditReportCheckAgain());
  t.setViewModelProperty("onPress", this.viewModel.onRetryCreditStatus);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=13 cpool=1 bc=784B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, H, it, Re, q, ze, this, Te, B, e, N, D, ot
function {
  if ((this.viewModel.hasReachedCreditStatusPollLimit)) goto L_f4;
  t.beginComponent(Te.ActivityIndicator, B, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", e);
  t.endComponent();
  t.beginRender(N, undefined);
  t.setAttributeStyle("style", it.creditTitle);
  t.setAttributeString("value", ze.default.financeAccountLinkingCreditIdentityVerified());
  t.endRender();
  t.beginRender(D, undefined);
  t.setAttributeStyle("style", ot);
  t.setAttributeString("value", e);
  t.endRender();
  if (!(this.viewModel.hasReachedCreditStatusPollLimit)) goto L_30f;
  function <atom:0>();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=13 cpool=1 bc=439B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// locals: e, this
// closure: t, H, it, Re, q, ze, Te, B, N, D, ot, Ue, F
function {
  this = this;
  let e;
  e = ze.default.financeAccountLinkingCreditReportPreparing();
  t.beginComponent(Ue.SafeArea, F, undefined, undefined);
  t.setViewModelProperty("edges", [Ue.SafeAreaEdge.Bottom]);
  t.setViewModelProperty("style", it.creditContainer);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=213B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, ee, it, o
function {
  t.beginRender(ee, undefined);
  t.setAttributeStyle("style", it.creditIntroductionFooterText);
  t.setAttributeString("value", o);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=26 cpool=1 bc=3971B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, ee, it, o, U, G, j, we, W, z, ze, X, this, Pe, Le, Y, Me, Q, Re, K, i, n, Z, J, xe, $
function {
  t.beginRender(U, undefined);
  t.setAttributeStyle("style", it.creditIntroductionContent);
  t.beginRender(G, undefined);
  t.setAttributeStyle("style", it.creditIntroductionLogo);
  t.beginRender(j, undefined);
  t.setAttributeStyle("style", it.creditIntroductionMark);
  t.setAttribute("src", we.default.experianMark);
  t.endRender();
  t.endRender();
  t.beginRender(W, undefined);
  t.setAttributeStyle("style", it.creditIntroductionDetails);
  t.beginRender(z, undefined);
  t.setAttributeStyle("style", it.creditIntroductionTitle);
  t.setAttributeString("value", ze.default.financeAccountLinkingCreditScoreExperianTitle());
  t.endRender();
  t.beginRender(X, undefined);
  t.setAttributeStyle("style", it.creditBenefits);
  this.renderCreditBenefit(Pe.default.gauge, ze.default.financeAccountLinkingCreditScoreReportTitle(), ze.default.financeAccountLinkingCreditScoreReportDetail());
  t.beginComponent(Le.Divider, Y, undefined, undefined);
  t.setViewModelProperty("color", Me.OAIColor.BorderLight);
  t.endComponent();
  this.renderCreditBenefit(Pe.default.shield, ze.default.financeAccountLinkingCreditScoreMonitoringTitle(), ze.default.financeAccountLinkingCreditScoreMonitoringDetail());
  t.beginComponent(Le.Divider, Q, undefined, undefined);
  t.setViewModelProperty("color", Me.OAIColor.BorderLight);
  t.endComponent();
  this.renderCreditBenefit(Pe.default.checkmarkCircle, ze.default.financeAccountLinkingCreditScoreGoalsTitle(), ze.default.financeAccountLinkingCreditScoreGoalsDetail());
  t.endRender();
  t.endRender();
  t.beginComponent(Re.Button, K, undefined, undefined);
  t.setViewModelProperty("style", it.creditIntroductionStart);
  t.setViewModelProperty("labelStyle", it.creditIntroductionStartLabel);
  if (!(i)) goto L_ad5;
  goto L_ad8;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityLabel", n);
  t.setViewModelProperty("disabled", i);
  t.setViewModelProperty("label", n);
  t.setViewModelProperty("loading", i);
  t.setViewModelProperty("onPress", this.viewModel.onStart);
  t.endComponent();
  t.endRender();
  t.beginRender(Z, undefined);
  t.setAttributeStyle("style", it.creditIntroductionFooter);
  t.beginRender(J, undefined);
  t.setAttributeStyle("style", it.creditIntroductionFooterText);
  t.setAttributeString("value", ze.default.financeAccountLinkingCreditScoreNoScoreImpact());
  t.endRender();
  t.beginComponent(xe.Pressable, $, undefined, undefined);
  t.setViewModelProperty("style", it.creditLearnMore);
  t.setViewModelProperty("accessibilityLabel", o);
  t.setViewModelProperty("onPress", this.viewModel.onLearnMore);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=25 cpool=1 bc=875B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// locals: e, i, n, o, this
// closure: t, ee, it, U, G, j, we, W, z, ze, X, Pe, Le, Y, Me, Q, Re, K, Z, J, xe, $, E, Ue, _
function {
  this = this;
  let o;
  let n;
  let i;
  let e;
  e = this.viewModel.creditCopy;
  if (!((undefined !== e))) goto L_86;
  this.renderCopy(e);
  return;
  i = this.viewModel.isVerifying;
  n = ze.default.financeAccountLinkingCreditScoreGetStarted();
  o = ze.default.financeAccountLinkingCreditScoreLearnMore();
  t.beginRender(E, undefined);
  t.setAttributeStyle("style", it.scroll);
  t.beginComponent(Ue.SafeArea, _, undefined, undefined);
  t.setViewModelProperty("style", it.creditIntroduction);
  t.setViewModelProperty("edges", [Ue.SafeAreaEdge.Bottom]);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=1039B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, oe, it, Re, re, i, Ge, Xe, this
function {
  t.beginRender(oe, undefined);
  t.setAttributeStyle("style", it.creditAction);
  t.beginComponent(Re.Button, re, undefined, undefined);
  t.setViewModelProperty("style", it.creditStart);
  if (!((i === Ge.CreditCopyAction.ContactExperian))) goto L_19a;
  goto L_19f;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityId", "finance-credit-verification-start");
  t.setViewModelProperty("label", Xe(i));
  t.setViewModelProperty("disabled", this.viewModel.isVerifying);
  t.setViewModelProperty("loading", this.viewModel.isVerifying);
  if (!((i === Ge.CreditCopyAction.ContactExperian))) goto L_376;
  goto L_3bb;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onPress", this.viewModel.onStart);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=14 cpool=1 bc=508B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, oe, it, Re, re, i, Ge, Xe, this, ie, ze, ne, nt, e
function {
  t.beginRender(ie, undefined);
  t.setAttributeStyle("style", it.creditTitle);
  t.setAttributeString("value", ze.default.financeAccountLinkingCreditScoreTitle());
  t.endRender();
  t.beginRender(ne, undefined);
  t.setAttributeStyle("style", nt);
  t.setAttributeString("value", e.message);
  t.endRender();
  if (!((undefined !== i))) goto L_1fb;
  function <atom:0>();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=13 cpool=1 bc=401B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// args: e
// locals: i, this
// closure: t, oe, it, Re, re, Ge, Xe, ie, ze, ne, nt, Ue, te
function {
  this = this;
  let i;
  i = e.action;
  t.beginComponent(Ue.SafeArea, te, undefined, undefined);
  t.setViewModelProperty("edges", [Ue.SafeAreaEdge.Bottom]);
  t.setViewModelProperty("style", it.creditContainer);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=3 closure=7 cpool=0 bc=963B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// args: e, i, n
// closure: t, de, it, ae, ce, le, se
function {
  t.beginRender(de, undefined);
  t.setAttributeStyle("style", it.creditBenefitRow);
  t.beginRender(ae, undefined);
  t.setAttributeStyle("style", it.creditBenefitIcon);
  t.setAttribute("src", e);
  t.endRender();
  t.beginRender(ce, undefined);
  t.setAttributeStyle("style", it.creditBenefitCopy);
  t.beginRender(le, undefined);
  t.setAttributeStyle("style", it.creditBenefitTitle);
  t.setAttributeString("value", i);
  t.endRender();
  t.beginRender(se, undefined);
  t.setAttributeStyle("style", it.creditBenefitDetail);
  t.setAttributeString("value", n);
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=745B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, me, it, Re, Ce, ze, this
function {
  t.beginRender(me, undefined);
  t.setAttributeStyle("style", it.connectedCreditAction);
  t.beginComponent(Re.Button, Ce, undefined, undefined);
  t.setViewModelProperty("label", ze.default.financeAccountLinkingCreditScoreChatLabel());
  t.setViewModelProperty("onPress", this.viewModel.onCreditScoreChat);
  t.setViewModelProperty("disabled", this.viewModel.isOpeningAccountChat);
  t.setViewModelProperty("loading", this.viewModel.isOpeningAccountChat);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=20 cpool=1 bc=1805B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// closure: t, me, it, Re, Ce, ze, this, ye, ge, he, ue, Se, ve, be, e, i, He, Ae, fe, Ie
function {
  t.beginRender(ye, undefined);
  t.setAttributeStyle("style", it.connectedCreditRow);
  t.beginRender(ge, undefined);
  t.setAttributeStyle("style", it.connectedCreditLogo);
  t.beginComponent(he.FinanceCreditInstitutionLogo, ue, undefined, undefined);
  t.endComponent();
  t.endRender();
  t.beginRender(Se, undefined);
  t.setAttributeStyle("style", it.connectedCreditCopy);
  t.beginRender(ve, undefined);
  t.setAttributeStyle("style", it.connectedCreditName);
  t.setAttributeString("value", ze.default.financeAccountLinkingCreditProviderName());
  t.endRender();
  t.beginRender(be, undefined);
  t.setAttributeStyle("style", it.connectedCreditScore);
  if (!((undefined === e))) goto L_3e4;
  goto L_456;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("value", ze.default.financeAccountLinkingCreditScoreSummary(He.formatNumber(e, 0, undefined)));
  t.endRender();
  t.endRender();
  t.beginRender(Ae, undefined);
  t.setAttributeStyle("style", it.connectedCreditStatus);
  t.setAttributeString("accessibilityLabel", i);
  t.beginRender(fe, undefined);
  t.setAttributeStyle("style", it.connectedCreditCheck);
  t.setAttribute("src", Ie.default.checkMd);
  t.endRender();
  t.endRender();
  t.endRender();
  if (!((undefined !== this.viewModel.onCreditScoreChat))) goto L_70c;
  function <atom:0>();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=19 cpool=1 bc=510B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// locals: e, i, this
// closure: t, me, it, Re, Ce, ze, ye, ge, he, ue, Se, ve, be, He, Ae, fe, Ie, Ue, pe
function {
  this = this;
  let i;
  let e;
  e = this.viewModel.creditScore;
  i = ze.default.financeAccountLinkingCreditScoreConnected();
  t.beginComponent(Ue.SafeArea, pe, undefined, undefined);
  t.setViewModelProperty("edges", [Ue.SafeAreaEdge.Bottom]);
  t.setViewModelProperty("style", it.connectedCreditContainer);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn Xe  args=1 vars=1 closure=2 cpool=0 bc=437B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// args: e
// closure: Ge, ze
function {
  if (!((e === Ge.CreditCopyAction.RetryVerification))) goto L_92;
  return ze.default.financeAccountLinkingCreditVerificationRetry();   // tail call
  if (!((e === Ge.CreditCopyAction.ContinueVerification))) goto L_123;
  return ze.default.financeAccountLinkingCreditVerificationContinue();   // tail call
  if (!((e === Ge.CreditCopyAction.ContactExperian))) goto L_1b4;
  return ze.default.financeAccountLinkingCreditVerificationContactExperian();   // tail call
  e;
  return;
}

// fn <atom:0>  args=3 vars=122 closure=0 cpool=21 bc=18578B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// args: require, module, exports
// locals: e, t, i, n, o, r, d, a, c, l, s, p, y, g, u, S, v, b, A, f, m, C, w, h, P, I, k, O, M, T, R, L, V, x, F, B, N, D, H, q, E, _, U, G, j, W, z, X, Y, Q, K, Z, J, $, ee, te, ie, ne, oe, re, de, ae, ce, le, se, pe, ye, ge, ue, Se, ve, be, Ae, fe, me, Ce, we, he, Pe, Ie, ke, Oe, Me, Te, Re, Le, Ve, xe, Fe, Be, Ne, De, He, qe, Ee, _e, Ue, Ge, je, We, ze, FinanceAccountLinkingPicker, <class_fields_init>, FinanceAccountLinkingPicker#1, FinanceCreditVerificationContent, <class_fields_init>#1, FinanceCreditVerificationContent#1, Xe, Ye, Qe, Ke, Ze, Je, $e, et, tt, it, nt, ot
function {
  Xe = function Xe;
  let ot;
  let nt;
  let it;
  let tt;
  let et;
  let $e;
  let Je;
  let Ze;
  let Ke;
  let Qe;
  let Ye;
  let FinanceCreditVerificationContent#1;
  let FinanceAccountLinkingPicker#1;
  let ze;
  let We;
  let je;
  let Ge;
  let Ue;
  let _e;
  let Ee;
  let qe;
  let He;
  let De;
  let Ne;
  let Be;
  let Fe;
  let xe;
  let Ve;
  let Le;
  let Re;
  let Te;
  let Me;
  let Oe;
  let ke;
  let Ie;
  let Pe;
  let he;
  let we;
  let Ce;
  let me;
  let fe;
  let Ae;
  let be;
  let ve;
  let Se;
  let ue;
  let ge;
  let ye;
  let pe;
  let se;
  let le;
  let ce;
  let ae;
  let de;
  let re;
  let oe;
  let ne;
  let ie;
  let te;
  let ee;
  let $;
  let J;
  let Z;
  let K;
  let Q;
  let Y;
  let X;
  let z;
  let W;
  let j;
  let G;
  let U;
  let _;
  let E;
  let q;
  let H;
  let D;
  let N;
  let B;
  let F;
  let x;
  let V;
  let L;
  let R;
  let T;
  let M;
  let O;
  let k;
  let I;
  let P;
  let h;
  let w;
  let C;
  let m;
  let f;
  let A;
  let b;
  let v;
  let S;
  let u;
  let g;
  let y;
  let p;
  let s;
  let l;
  let c;
  let a;
  let d;
  let r;
  let o;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceAccountLinkingPicker = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("view", ["accessibilityId", "finance-account-linking-picker"], "ql4PNvvLbiNEt6SM");
  n = t.makeNodePrototype("view", undefined, "g396Z80ayf9GzV-K");
  o = t.makeNodePrototype("layout", undefined, "G2tgkfsF4_VFxhWw");
  r = t.makeNodePrototype("view", undefined, "YI864cremzCx12b-");
  d = t.makeNodePrototype("layout", undefined, "bTpRHHiFqfEb3VSq");
  a = t.makeNodePrototype("label", undefined, "rhu3EnA5gg3HQfby");
  c = t.makeComponentPrototype(["accessibilityId", "finance-account-linking-dismiss"], "RqEeO_OpThn2SUBe");
  l = t.makeComponentPrototype(["size", 20], "aOignIsfvOIkHUYl");
  s = t.makeNodePrototype("scroll", ["horizontal", true, "accessibilityId", "finance-account-linking-tabs"], "oipTaMd6Ernng97G");
  p = t.makeNodePrototype("view", undefined, "8DOJXRa9m2V3uMlK");
  y = t.makeNodePrototype("view", ["accessibilityCategory", "radio"], "1n9HByg0j0tnRE9S");
  g = t.makeNodePrototype("label", undefined, "zmujyIA1pC5uXpIZ");
  u = t.makeComponentPrototype(undefined, "F2JMwF4Ulp5dqe01");
  S = t.makeComponentPrototype(undefined, "ilw3Iz-aIkl4gXk5");
  v = t.makeComponentPrototype(undefined, "br3JaufgxyMkqlEX");
  b = t.makeComponentPrototype(["accessibilityId", "finance-account-linking-future-tab"], "Xjb0B3tYwC1tZgLi");
  A = t.makeNodePrototype("label", undefined, "7KjG0QT-k2WWwyjS");
  f = t.makeComponentPrototype(["accessibilityId", "finance-credit-update-required"], "IJeNr8ct3XGGZfoG");
  m = t.makeNodePrototype("label", undefined, "lIUsZ9GgT7Dl2Zb3");
  C = t.makeNodePrototype("label", undefined, "s0Pv9kkSzFUCtKwG");
  w = t.makeNodePrototype("layout", undefined, "8epqhWOSzzaiiHvV");
  h = t.makeComponentPrototype(["accessibilityId", "finance-credit-update-app"], "sFWCojT39LVWQSax");
  P = t.makeComponentPrototype(["accessibilityId", "finance-credit-verification"], "X8dYQkGQkO8-WLDT");
  I = t.makeComponentPrototype(["accessibilityId", "finance-credit-status-loading"], "AdkBA3sEdDwFdM1V");
  k = t.makeComponentPrototype(["accessibilityId", "finance-credit-verification"], "FbatesxpvXLk6xYe");
  O = t.makeNodePrototype("label", undefined, "aSQcySNbWyPIEQsT");
  M = t.makeNodePrototype("label", ["accessibilityId", "finance-credit-status-error"], "F_y6SEBwS7dbF4Lr");
  T = t.makeNodePrototype("view", undefined, "paMOMf5G8XTjp1rn");
  R = t.makeComponentPrototype(["accessibilityId", "finance-credit-status-retry"], "w0nAdoE0kY7OqaH_");
  L = t.makeComponentPrototype(["accessibilityId", "finance-credit-verification"], "osMnqRcAeyFpCQj4");
  V = t.makeNodePrototype("label", undefined, "vyXIJvj2a7Hre31D");
  x = t.makeNodePrototype("label", undefined, "6na9zYhoAoh9BZFq");
  F = t.makeComponentPrototype(["accessibilityId", "finance-credit-verification"], "F9C2UDvzfP6A9cQu");
  B = t.makeComponentPrototype(["accessibilityId", "finance-credit-report-progress"], "Rj7tZweiL4HMXYJ7");
  N = t.makeNodePrototype("label", undefined, "Zh1jvvSQzYmkSq5T");
  D = t.makeNodePrototype("label", undefined, "BrN3sH82-rJKghKf");
  H = t.makeNodePrototype("view", undefined, "CCHcvDe1TICtTms4");
  q = t.makeComponentPrototype(["accessibilityId", "finance-credit-report-check-again"], "fbXNhQQulez_QYef");
  E = t.makeNodePrototype("scroll", ["accessibilityId", "finance-credit-verification"], "9e-fEARc8YVLjL8C");
  _ = t.makeComponentPrototype(undefined, "mNDpTeY0C_T-V6sW");
  U = t.makeNodePrototype("view", undefined, "00ey2xM2yRrvc396");
  G = t.makeNodePrototype("view", undefined, "WKIHQ71nGvW0Ay51");
  j = t.makeNodePrototype("image", undefined, "psK8H3X8Dy7uRwH2");
  W = t.makeNodePrototype("view", undefined, "gn86nAj837LmYfsZ");
  z = t.makeNodePrototype("label", undefined, "NFgw-I34TwnT_tD4");
  X = t.makeNodePrototype("view", undefined, "c12RYUMM2USZyaRe");
  Y = t.makeComponentPrototype(undefined, "bFceKLpQiPkvOCwT");
  Q = t.makeComponentPrototype(undefined, "MBJif5N3n68foHBq");
  K = t.makeComponentPrototype(["accessibilityId", "finance-credit-verification-start"], "x1da5wkhcvX76SDC");
  Z = t.makeNodePrototype("view", undefined, "u95loDpSSmPOk4SW");
  J = t.makeNodePrototype("label", undefined, "athqQ7FiXAjNhvd8");
  $ = t.makeComponentPrototype(["accessibilityCategory", "link"], "lxyEBKPkhuexlZL2");
  ee = t.makeNodePrototype("label", undefined, "TlD3FUNg9JveGl3E");
  te = t.makeComponentPrototype(["accessibilityId", "finance-credit-verification"], "rx3GIpcXH3PRz4wZ");
  ie = t.makeNodePrototype("label", undefined, "w8iJYRGSiF3TThGP");
  ne = t.makeNodePrototype("label", undefined, "gcAnV5ZhnvV1i7Qx");
  oe = t.makeNodePrototype("view", undefined, "00I58CAAeBmsrUQH");
  re = t.makeComponentPrototype(undefined, "8AthFKYoZTXqrUsH");
  de = t.makeNodePrototype("view", undefined, "TKzU8bbIrcdyjs1A");
  ae = t.makeNodePrototype("image", undefined, "KHK9vFc-NrsOoJaY");
  ce = t.makeNodePrototype("view", undefined, "XaGqqhB3hKLw7BXY");
  le = t.makeNodePrototype("label", undefined, "aTuEjEdbC7SddTxm");
  se = t.makeNodePrototype("label", undefined, "2vMPzWjMS4tbOIz1");
  pe = t.makeComponentPrototype(["accessibilityId", "finance-credit-verification"], "diQjmx0Tuhde26tN");
  ye = t.makeNodePrototype("view", undefined, "hBH2Ez3jOaGHmBym");
  ge = t.makeNodePrototype("view", undefined, "4o-6l7GcKGCtwUAU");
  ue = t.makeComponentPrototype(undefined, "OzPCAYhTxQdkNOGk");
  Se = t.makeNodePrototype("view", undefined, "6HdTAecOA_5bsuC1");
  ve = t.makeNodePrototype("label", undefined, "LFnaFYUU0A-b0AU5");
  be = t.makeNodePrototype("label", ["accessibilityId", "finance-credit-verification-score"], "i5PqjI0taTWxEs2g");
  Ae = t.makeNodePrototype("view", ["accessibilityId", "finance-credit-verification-connected"], "QgY8azTu5V5TtJ1z");
  fe = t.makeNodePrototype("image", undefined, "YeldlmYBwz0UXX0b");
  me = t.makeNodePrototype("view", undefined, "vWW2UDP6g4XK-NxQ");
  Ce = t.makeComponentPrototype(["accessibilityId", "finance-credit-score-chat"], "qorgNf41CZ9-KOLD");
  we = require("chatgpt_finance_accounts/res");
  he = require("chatgpt_finance_accounts/src/FinanceCreditInstitutionLogo");
  Pe = require("chatgpt_finance_connections/res");
  Ie = require("dil_icon_assets/res");
  ke = require("oai_core/src/OAITheme");
  Oe = require("oai_core/src/OAITypography");
  Me = require("oai_core/src/OAITokens");
  Te = require("oai_ui/src/components/ActivityIndicator");
  Re = require("oai_ui/src/components/Button");
  Le = require("oai_ui/src/components/Divider");
  Ve = require("oai_ui/src/components/Icon");
  xe = require("oai_ui/src/components/Pressable");
  Fe = require("valdi_core/src/Component");
  Be = require("valdi_core/src/Device");
  Ne = require("valdi_core/src/Style");
  De = require("valdi_core/src/SystemFont");
  He = require("valdi_core/src/utils/NumberUtils");
  qe = require("valdi_platform_browser/src/PlatformBrowser");
  Ee = require("valdi_ui/src/ControlMaterial");
  _e = require("valdi_ui/src/components/IconButton");
  Ue = require("valdi_ui/src/components/SafeArea");
  Ge = require("./FinanceCreditVerificationModels");
  je = require("./FinancePlaidIntroduction");
  We = require("./FinanceManualAccounts");
  ze = require("./Strings");
  let FinanceAccountLinkingPicker;
  let <class_fields_init>;
  class FinanceAccountLinkingPicker extends Fe.Component { ... }
  <proto:FinanceAccountLinkingPicker>.onRender = function <atom:0>;
  <proto:FinanceAccountLinkingPicker>.renderHeader = function <atom:0>;
  <proto:FinanceAccountLinkingPicker>.renderTabs = function <atom:0>;
  <proto:FinanceAccountLinkingPicker>.renderTab = function <atom:0>;
  <proto:FinanceAccountLinkingPicker>.renderBody = function <atom:0>;
  <proto:FinanceAccountLinkingPicker>.renderFutureTab = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceAccountLinkingPicker>;
  FinanceAccountLinkingPicker = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceAccountLinkingPicker#1 = function <atom:0>;
  exports.FinanceAccountLinkingPicker = FinanceAccountLinkingPicker#1;
  let FinanceCreditVerificationContent;
  let <class_fields_init>#1;
  class FinanceCreditVerificationContent extends Fe.Component { ... }
  <proto:FinanceCreditVerificationContent>.onRender = function <atom:0>;
  <proto:FinanceCreditVerificationContent>.renderPreparingCredit = function <atom:0>;
  <proto:FinanceCreditVerificationContent>.renderAvailableCredit = function <atom:0>;
  <proto:FinanceCreditVerificationContent>.renderCopy = function <atom:0>;
  <proto:FinanceCreditVerificationContent>.renderCreditBenefit = function <atom:0>;
  <proto:FinanceCreditVerificationContent>.renderConnectedCredit = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:FinanceCreditVerificationContent>;
  FinanceCreditVerificationContent = function <atom:0>;
  // close_loc <class_fields_init>#1
  FinanceCreditVerificationContent#1 = function <atom:0>;
  Ye = Me.resolveOAITextStyle(Me.OAITextSize.BodyLarge);
  Qe = Oe.resolveOAITypography(Oe.Typography.InlineTitle, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});
  Ke = Oe.resolveOAITypography(Oe.Typography.Body, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});
  if (!(Be.Device.isWeb())) goto L_15b2;
  goto L_15f7;
  // [栈深重同步 2 -> 1]
  Ze = Oe.resolveOAITypography(Oe.Typography.FootnoteSemibold, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});
  if (!(Be.Device.isWeb())) goto L_16c2;
  goto L_1707;
  // [栈深重同步 2 -> 1]
  Je = Oe.resolveOAITypography(Oe.Typography.Caption, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});
  $e = Me.resolveOAITextStyle(Me.OAITextSize.TitleSmall);
  et = Me.resolveOAITextStyle(Me.OAITextSize.BodySmall);
  tt = new Ne.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: Me.OAISpacing.One, minHeight: 0, width: "100%"});
  null;
  Qe;
  null;
  Ke;
  if (!(Be.Device.isWeb())) goto L_2ea7;
  goto L_2eec;
  // [栈深重同步 5 -> 4]
  if (!(Be.Device.isWeb())) goto L_2f80;
  goto L_2fc5;
  // [栈深重同步 5 -> 4]
  if (!(Be.Device.isWeb())) goto L_3022;
  goto L_3067;
  // [栈深重同步 5 -> 4]
  if (!(Be.Device.isWeb())) goto L_31a0;
  goto L_31a2;
  // [栈深重同步 6 -> 5]
  if (!(Be.Device.isWeb())) goto L_31f9;
  goto L_31fe;
  // [栈深重同步 5 -> 4]
  if (!(Be.Device.isWeb())) goto L_36a4;
  goto L_36c8;
  // [栈深重同步 5 -> 4]
  if (!(Be.Device.isWeb())) goto L_371b;
  goto L_3720;
  // [栈深重同步 5 -> 4]
  if (!(Be.Device.isWeb())) goto L_3bae;
  goto L_3bb3;
  // [栈深重同步 5 -> 4]
  if (!(Be.Device.isWeb())) goto L_3d04;
  goto L_3d09;
  // [栈深重同步 5 -> 4]
  it = {content: tt, picker: Ne.Style.merge(tt, new Ne.Style({gap: Me.OAISpacing.None})), header: new Ne.Style({alignItems: "center", flexDirection: "row", minHeight: Me.OAISpacing.FivePointFive, justifyContent: "space-between", paddingBottom: Me.OAISpacing.Two, paddingLeft: Me.OAISpacing.Three, paddingRight: Me.OAISpacing.Three, width: "100%"}), headerSpacer: new Ne.Style({height: Me.OAISpacing.FourPointFive, width: Me.OAISpacing.FourPointFive}), headerTitle: new Ne.Style({color: Me.OAIColor.TextPrimary, flexGrow: 1, flexShrink: 1, numberOfLines: 1, textAlign: "center"}), dismissButton: new Ne.Style({alignItems: "center", backgroundColor: Me.OAIColor.BgTertiary, borderRadius: Me.OAIRadius.Pill, height: Me.OAISpacing.FourPointFive, justifyContent: "center", touchAreaExtension: Me.OAISpacing.Half, width: Me.OAISpacing.FourPointFive}), controls: new Ne.Style({flexDirection: "column", gap: Me.OAISpacing.OneAndHalf, paddingLeft: Me.OAISpacing.Three, paddingRight: Me.OAISpacing.Three, width: "100%"}), tabs: new Ne.Style({alignItems: "center", flexDirection: "row", gap: Me.OAISpacing.None, minHeight: Me.OAISpacing.FivePointFive}), tabsScroll: new Ne.Style({fadingEdgeLength: Me.OAISpacing.Two, minHeight: Me.OAISpacing.FivePointFive, showsHorizontalScrollIndicator: false, width: "100%"}), tab: new Ne.Style({alignItems: "center", borderRadius: Me.OAIRadius.Pill, minHeight: Me.OAISpacing.FivePointFive, justifyContent: "center", minWidth: 0, paddingLeft: Me.OAISpacing.Two, paddingRight: Me.OAISpacing.Two, paddingBottom: Me.OAISpacing.OnePointTwentyFive, paddingTop: Me.OAISpacing.OnePointTwentyFive}), tabLabel: new Ne.Style({flexShrink: 1, numberOfLines: 1}), scroll: new Ne.Style({flexBasis: 0, flexGrow: 1, flexShrink: 1, minHeight: 0, width: "100%"}), connectedCreditContainer: new Ne.Style({width: "100%"}), connectedCreditAction: new Ne.Style({paddingTop: Me.OAISpacing.One, paddingBottom: Me.OAISpacing.Two, paddingLeft: Me.OAISpacing.Three, paddingRight: Me.OAISpacing.Three, width: "100%"}), connectedCreditRow: new Ne.Style({alignItems: "center", flexDirection: "row", flexShrink: 0, gap: Me.OAISpacing.OneAndHalf, marginTop: Me.OAISpacing.One, paddingBottom: Me.OAISpacing.Two, paddingLeft: Me.OAISpacing.Three, paddingRight: Me.OAISpacing.Three, paddingTop: Me.OAISpacing.Two, width: "100%"}), connectedCreditLogo: new Ne.Style({alignItems: "center", backgroundColor: Me.OAIColor.BgPrimary, borderColor: Me.OAIColor.BorderLight, borderRadius: Me.OAIRadius.Pill, borderWidth: 0.5, colorPaletteName: ke.OAI_LIGHT_THEME, flexShrink: 0, height: Me.OAISpacing.Four, justifyContent: "center", width: Me.OAISpacing.Four}), connectedCreditCopy: new Ne.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, minWidth: 0}), connectedCreditName: new Ne.Style({color: Me.OAIColor.TextPrimary, font: Ye.font, lineHeight: 26, numberOfLines: 1}), connectedCreditScore: new Ne.Style({color: Me.OAIColor.TextTertiary, font: De.systemFont(13), lineHeight: 18, numberOfLines: 1}), connectedCreditStatus: new Ne.Style({accessibilityStateLiveRegion: true, alignItems: "center", backgroundColor: Me.OAIColor.ThemeBlueBackground, borderRadius: Me.OAIRadius.Pill, flexShrink: 0, height: Me.OAISpacing.Four, justifyContent: "center", width: Me.OAISpacing.Four}), connectedCreditCheck: new Ne.Style({accessibilityNavigation: "ignored", height: 18.75, objectFit: "contain", tint: Me.OAIColor.ThemeBlueDefault, width: 18.75}), creditIntroduction: new Ne.Style({alignItems: "center", flexDirection: "column", flexGrow: 1, gap: Me.OAISpacing.One, justifyContent: "space-between", paddingLeft: Me.OAISpacing.Three, paddingRight: Me.OAISpacing.Three, width: "100%"}), creditIntroductionContent: new Ne.Style({alignItems: "center", flexDirection: "column", flexShrink: 0, gap: 18, paddingTop: Me.OAISpacing.Three, width: "100%"}), creditIntroductionStart: new Ne.Style({height: "auto", marginTop: Me.OAISpacing.OnePointSeventyFive, maxWidth: "100%", minHeight: Me.OAISpacing.Five, paddingBottom: Me.OAISpacing.OnePointTwentyFive, paddingTop: Me.OAISpacing.OnePointTwentyFive}), creditIntroductionStartLabel: new Ne.Style({font: De.systemMediumFont(15), lineHeightMultiple: (20 / 15), numberOfLines: 0, textAlign: "center"}), creditIntroductionLogo: new Ne.Style({alignItems: "center", backgroundColor: Me.OAIColor.BgPrimary, borderColor: Me.OAIColor.BorderLight, borderRadius: Me.OAIRadius.Lg, borderWidth: 1, boxShadow: "0 4 6 rgba(0, 0, 0, 0.03)", colorPaletteName: ke.OAI_LIGHT_THEME, flexShrink: 0, height: Me.OAISpacing.Six, justifyContent: "center", width: Me.OAISpacing.Six}), creditIntroductionMark: new Ne.Style({accessibilityNavigation: "ignored", height: 31, objectFit: "contain", width: Me.OAISpacing.Three}), creditIntroductionDetails: new Ne.Style({flexDirection: "column", gap: Me.OAISpacing.TwoPointFive, paddingLeft: Me.OAISpacing.TwoPointFive, paddingRight: Me.OAISpacing.TwoPointFive, width: "100%"}), creditIntroductionTitle: new Ne.Style({color: Me.OAIColor.TextPrimary, font: Qe.font, lineHeightMultiple: (22 / 17), numberOfLines: 0, textAlign: "center", width: "100%"}), creditBenefits: new Ne.Style({backgroundColor: Me.OAIColor.BgPrimary, borderColor: Me.OAIColor.BorderDefault, borderRadius: 20, borderWidth: 1, flexDirection: "column", gap: Me.OAISpacing.Two, padding: Me.OAISpacing.Two, width: "100%"}), creditBenefitRow: new Ne.Style({alignItems: "center", flexDirection: "row", gap: Me.OAISpacing.Two, width: "100%"}), creditBenefitIcon: new Ne.Style({accessibilityNavigation: "ignored", flexShrink: 0, height: Me.OAISpacing.Three, objectFit: "contain", width: Me.OAISpacing.Three}), creditBenefitCopy: new Ne.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: Me.OAISpacing.Px, minWidth: 0}), creditBenefitTitle: new Ne.Style({color: Me.OAIColor.TextPrimary, font: Ze.font, lineHeightMultiple: (18 / 13), minHeight: Me.OAISpacing.Three, numberOfLines: 0, width: "100%"}), creditBenefitDetail: new Ne.Style({color: Me.OAIColor.TextSecondary, font: Je.font, lineHeightMultiple: (16 / 12), numberOfLines: 0, width: "100%"}), creditIntroductionFooter: new Ne.Style({alignItems: "center", flexDirection: "column", gap: Me.OAISpacing.Half, paddingBottom: Me.OAISpacing.OnePointSeventyFive, paddingLeft: Me.OAISpacing.OnePointSeventyFive, paddingRight: Me.OAISpacing.OnePointSeventyFive, width: "100%"}), creditIntroductionFooterText: new Ne.Style({color: Me.OAIColor.TextTertiary, font: et.font, lineHeightMultiple: (16 / 12), numberOfLines: 0, textAlign: "center", width: "100%"}), creditLearnMore: new Ne.Style({accessibilityId: "finance-credit-learn-more", touchAreaExtension: Me.OAISpacing.OnePointSeventyFive, width: "100%"}), creditContainer: new Ne.Style({alignItems: "center", flexDirection: "column", flexGrow: 1, gap: Me.OAISpacing.OneAndHalf, justifyContent: "center", paddingBottom: Me.OAISpacing.Four, paddingLeft: Me.OAISpacing.Six, paddingRight: Me.OAISpacing.Six, paddingTop: Me.OAISpacing.Four, width: "100%"}), creditTitle: new Ne.Style({color: Me.OAIColor.TextPrimary, flexShrink: 1, font: $e.font, lineHeightMultiple: 1.375, numberOfLines: 2, textAlign: "center", width: "100%"}), creditDetail: new Ne.Style({color: Me.OAIColor.TextSecondary, flexShrink: 1, font: Ye.font, lineHeightMultiple: 1.5, numberOfLines: 3, textAlign: "center", width: "100%"}), creditAction: new Ne.Style({paddingTop: Me.OAISpacing.One, width: "100%"}), creditStart: new Ne.Style({width: "100%"}), messageContainer: new Ne.Style({alignItems: "center", flexDirection: "column", flexGrow: 1, gap: Me.OAISpacing.One, justifyContent: "center", paddingBottom: Me.OAISpacing.Four, paddingLeft: Me.OAISpacing.Six, paddingRight: Me.OAISpacing.Six, paddingTop: Me.OAISpacing.Four, width: "100%"}), messageTitle: new Ne.Style({color: Me.OAIColor.TextPrimary, font: De.systemSemiboldFont(15), textAlign: "center"}), messageDetail: new Ne.Style({color: Me.OAIColor.TextSecondary, font: De.systemFont(13), numberOfLines: 2, textAlign: "center"})};
  nt = Ne.Style.merge(it.creditDetail, new Ne.Style({accessibilityId: "finance-credit-verification-message", accessibilityStateLiveRegion: true, numberOfLines: 0}));
  ot = Ne.Style.merge(it.creditDetail, new Ne.Style({accessibilityId: "finance-credit-report-preparing", accessibilityStateLiveRegion: true, numberOfLines: 0}));
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinanceAccountLinkingPicker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
