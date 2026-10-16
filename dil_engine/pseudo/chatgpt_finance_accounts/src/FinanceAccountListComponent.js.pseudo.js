// fn ct  args=1 vars=1 closure=2 cpool=0 bc=224B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// closure: st, De
function {
  null;
  e;
  if (!((e.kind === st.Summary))) goto L_95;
  goto L_da;
  // [栈深重同步 2 -> 1]
  return {kind: De.FinanceAccountsResultKind.AccountsEmpty};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
function {
  e.Summary = 0;
  e[0] = "Summary";
  e.Empty = 1;
  e[1] = "Empty";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
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

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=387B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// locals: t, i
// closure: this
function {
  let i;
  let t;
  t = this.state.sections[0];
  if (!((this.state.expandedSectionIds == null))) goto L_d1;
  this.state.expandedSectionIds;
  if (!((undefined === t))) goto L_aa;
  goto L_d1;
  // [栈深重同步 3 -> 2]
  i = new Set([t.id]);
  if (!(i.has(e))) goto L_129;
  goto L_151;
  // [栈深重同步 1 -> 0]
  i.add(e);
  this.setState({expandedSectionIds: i});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=82B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: this
function {
  this.loadAccounts(true);
  this.loadCreditScore();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=116B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: this
function {
  this.setState({isCreditExpanded: !this.state.isCreditExpanded});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=413B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: e
// closure: this, _e, Qe
function {
  if (!(this.isCreditDetailSourceEligible)) goto L_19c;
  this.handleCreditSourceVisibilityChanged(true);
  if (!((this.context == null))) goto L_a3;
  this.context;
  goto L_c4;
  _e.trackAnalyticsEvent(undefined.platformServices, {category: "Finance", name: "Credit Detail Source Clicked", key: "credit_detail_source_clicked"});
  if (!(Qe.isVersionAtLeast(67))) goto L_16c;
  let e;
  if (!((this.context == null))) goto L_13d;
  this.context;
  goto L_15e;
  e = undefined.openCreditAccountDetail;
  if (!((undefined !== e))) goto L_16c;
  e();
  return;
  this.setState({showingCreditDetail: true});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=255B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// closure: this, _e
function {
  if (!(e)) goto L_fe;
  if (!(this.isCreditDetailSourceEligible)) goto L_fe;
  if (!(!this.hasViewedCreditDetailSource)) goto L_fe;
  this.hasViewedCreditDetailSource = true;
  if (!((this.context == null))) goto L_bd;
  this.context;
  goto L_de;
  _e.trackAnalyticsEvent(undefined.platformServices, {category: "Finance", name: "Credit Detail Source Viewed", key: "credit_detail_source_viewed"});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=48B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: this
function {
  this.setState({showingCreditDetail: false});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=101B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: this
function {
  this.cancelCreditRequest();
  this.setState({creditScore: undefined, isCreditLoading: false, showingCreditDetail: false});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=165B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: Qe, this
function {
  if (!(Qe.isVersionAtLeast(32))) goto L_a4;
  if (!((this.context == null))) goto L_57;
  this.context;
  goto L_a4;
  if (!((undefined.host == null))) goto L_80;
  undefined.host;
  goto L_a4;
  undefined.openAccountLinking();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=55B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: this
function {
  this.refreshTimer = undefined;
  this.loadAccounts(false);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=9 bc=364B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: this, this.active_func, new.target, arguments
// closure: _e, Qe, <class_fields_init>, at
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
  this.state = {creditScore: undefined, isCreditExpanded: false, isCreditLoading: false, showingCreditDetail: false, links: [], sections: [], status: at.Loading};
  this.requestGeneration = 0;
  this.creditRequestGeneration = 0;
  this.creditEnabled = false;
  this.contentBottomPadding = 0;
  this.hasLoadedAccounts = false;
  this.hasViewedCreditDetailSource = false;
  this.resultRenderGeneration = 0;
  this.toggleSection = function <atom:0>;
  this.retryLoading = function <atom:0>;
  this.toggleCreditSection = function <atom:0>;
  this.openCreditAccountDetail = function <atom:0>;
  this.handleCreditSourceVisibilityChanged = function <atom:0>;
  this.closeCreditDetail = function <atom:0>;
  this.handleCreditAccountRemoved = function <atom:0>;
  this.openAccountLinking = function <atom:0>;
  this.refreshAccounts = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=1 bc=632B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: e, this
// closure: He, et, Xe, dt
function {
  this = this;
  let e;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  e = undefined.platformServices;
  if (!((e == null))) goto L_5d;
  e;
  goto L_7e;
  if (!((undefined === undefined.apiService))) goto L_90;
  throw new Error("Finance Accounts requires authenticated account-scoped platform services");
  this.api = new He.AuthenticatedFinanceApi(e);
  this.creditEnabled = et.isFinanceCreditDataEnabled(e);
  if (!(Xe.Device.isAndroid())) goto L_1ad;
  if (!((e.experimentService == null))) goto L_16f;
  e.experimentService;
  goto L_19b;
  if (!(undefined.isFeatureFlagEnabled({flagName: "1982759911"}))) goto L_1ad;
  this.contentBottomPadding = dt;
  dt;
  this.observedRefreshKey = this.viewModel.refreshKey;
  this.observedResultContext = this.readResultContext();
  this.loadAccounts(true);
  this.loadCreditScore();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=1 cpool=0 bc=637B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: e, t, i, o, this
// closure: et
function {
  this = this;
  let o;
  let i;
  let t;
  let e;
  e = this.viewModel.refreshKey;
  t = this.readResultContext();
  i = (e !== this.observedRefreshKey);
  if ((this.sameResultContext(t, this.observedResultContext))) goto L_157;
  this.invalidateReadyResult();
  this.resultRenderGeneration = (this.resultRenderGeneration + 1);
  this.observedResultContext = t;
  t;
  if (!((this.context == null))) goto L_1a7;
  this.context;
  goto L_1c8;
  o = et.isFinanceCreditDataEnabled(undefined.platformServices);
  if (!(i)) goto L_215;
  this.observedRefreshKey = e;
  this.observedResultContext = t;
  this.loadAccounts(false);
  if ((i)) goto L_244;
  if (!((o !== this.creditEnabled))) goto L_27c;
  this.creditEnabled = o;
  this.loadCreditScore();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=296B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: this
function {
  this = this;
  this.resultRenderGeneration = (this.resultRenderGeneration + 1);
  this.invalidateReadyResult();
  this.requestGeneration = (this.requestGeneration + 1);
  this.cancelScheduledRefresh();
  if (!((this.activeTask == null))) goto L_d2;
  this.activeTask;
  goto L_f6;
  undefined.cancel();
  this.activeTask = undefined;
  this.cancelCreditRequest();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=206B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: t, n, pt, this, r
function {
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", pt.root);
  this.renderContent(r);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=7 cpool=1 bc=1760B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: e, r, d, this
// closure: t, n, pt, $e, i, Ee, o
function {
  this = this;
  let d;
  let r;
  let e;
  this.resultRenderGeneration = (this.resultRenderGeneration ++);
  e = (this.resultRenderGeneration ++);
  if ((this.sameReadyResult(this.readyResult, this.currentReadyResult()))) goto L_ce;
  this.invalidateReadyResult();
  r = Date.now();
  d = this.state.creditScore;
  if (!(this.state.showingCreditDetail)) goto L_596;
  if (!((undefined !== d))) goto L_596;
  if (!(this.creditEnabled)) goto L_596;
  t.beginComponent($e.FinanceCreditAccountDetailScreen, i, undefined, undefined);
  t.setViewModelProperty("hideHeader", false);
  t.setViewModelProperty("initialScore", d);
  t.setViewModelProperty("isDarkMode", this.viewModel.isDarkMode);
  t.setViewModelProperty("locale", this.viewModel.locale);
  t.setViewModelProperty("onDismiss", this.closeCreditDetail);
  t.setViewModelProperty("onFollowUp", undefined);
  t.setViewModelProperty("onRemoved", this.handleCreditAccountRemoved);
  if (!((this.context == null))) goto L_465;
  this.context;
  goto L_486;
  t.setViewModelProperty("platformServices", undefined.platformServices);
  t.setViewModelProperty("refreshKey", this.viewModel.refreshKey);
  t.setViewModelProperty("sensitiveValuesHidden", (true === this.viewModel.sensitiveValuesHidden));
  t.endComponent();
  return;
  t.beginComponent(Ee.OAITheme, o, undefined, undefined);
  t.setViewModelProperty("fill", true);
  t.setViewModelProperty("mode", this.themeMode);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  this.reportAccountsResultRender(e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=210B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: e, this
// closure: Qe
function {
  this = this;
  let e;
  if (!(!Qe.isVersionAtLeast(265))) goto L_31;
  return;
  e = this.viewModel.resultContext;
  if (!((undefined !== e))) goto L_d0;
  return {flowId: e.flowId, resultId: e.resultId};
  return undefined;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=175B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e, t
function {
  if (!((e == null))) goto L_9;
  e;
  goto L_2a;
  if (!((t == null))) goto L_33;
  t;
  goto L_54;
  if (!((undefined.flowId === undefined.flowId))) goto L_ae;
  if (!((e == null))) goto L_62;
  e;
  goto L_83;
  if (!((t == null))) goto L_8c;
  t;
  goto L_ad;
  return (undefined.resultId === undefined.resultId);
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=0 bc=1263B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: e, t, i, this
// closure: at, st, Ye
function {
  this = this;
  let i;
  let t;
  let e;
  if (((undefined === undefined))) goto L_5a;
  e = <to_object>(undefined).loadedResultContext;
  t = <to_object>(undefined).resultReadGeneration;
  <to_object>(undefined);
  goto L_7f;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_10;
  // [栈深重同步 1 -> 0]
  if ((this.isDestroyed())) goto L_26f;
  if (((undefined !== this.activeTask))) goto L_26f;
  if (((this.state.status !== at.Loaded))) goto L_26f;
  if ((this.state.showingCreditDetail)) goto L_26f;
  if (((undefined === e))) goto L_26f;
  if (((undefined === t))) goto L_26f;
  if (((t !== this.requestGeneration))) goto L_26f;
  if ((!this.sameResultContext(e, this.observedResultContext))) goto L_26f;
  if (!(!this.sameResultContext(e, this.readResultContext()))) goto L_272;
  return;
  if (!((this.state.sections.length > 0))) goto L_2df;
  goto L_424;
  // [栈深重同步 1 -> 0]
  if ((this.state.links.some(Ye.isFinanceAccountLinkPending))) goto L_3fd;
  if (((undefined !== this.state.creditScore))) goto L_3fd;
  if (!(this.state.isCreditLoading)) goto L_402;
  goto L_424;
  // [栈深重同步 1 -> 0]
  i = st.Empty;
  if (!((undefined !== i))) goto L_4ed;
  return {flowId: e.flowId, resultId: e.resultId, readGeneration: t, kind: i, anchorId: "finance-accounts-result-".concat(e.resultId, "-", t)};
  return undefined;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=130B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.currentReadyResult();
  if (!((t == null))) goto L_36;
  t;
  goto L_57;
  if (!((undefined.kind === e))) goto L_80;
  return t.anchorId;
  return undefined;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=223B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e, t
// locals: this
function {
  this = this;
  if (!(this.sameResultContext(e, t))) goto L_de;
  if (!((e == null))) goto L_39;
  e;
  goto L_5a;
  if (!((t == null))) goto L_63;
  t;
  goto L_84;
  if (!((undefined.readGeneration === undefined.readGeneration))) goto L_de;
  if (!((e == null))) goto L_92;
  e;
  goto L_b3;
  if (!((t == null))) goto L_bc;
  t;
  goto L_dd;
  return (undefined.kind === undefined.kind);
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=178B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: e, this
// closure: Te, ct
function {
  this = this;
  let e;
  e = this.readyResult;
  this.readyResult = undefined;
  if (!((undefined !== e))) goto L_b1;
  if (!((this.context == null))) goto L_8a;
  this.context;
  goto L_ab;
  Te.trackFinanceAccountsResultInvalidated(undefined.platformServices, ct(e));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=349B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: e, this, i, t, Te, ct
function {
  if (!((e === this.resultRenderGeneration))) goto L_15c;
  if (!((i === this.state))) goto L_15c;
  if (!((this.currentReadyResult() == null))) goto L_85;
  this.currentReadyResult();
  goto L_a6;
  if (!((undefined.anchorId === t.anchorId))) goto L_15c;
  null;
  t;
  this.readyResult = {};
  if (!((this.context == null))) goto L_133;
  this.context;
  goto L_154;
  Te.trackFinanceAccountsResultRendered(undefined.platformServices, ct(t));
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=1 bc=240B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// locals: t, i, this
// closure: Te, ct
function {
  this = this;
  let i;
  let t;
  t = this.currentReadyResult();
  if (((undefined === t))) goto L_81;
  if (!(this.sameReadyResult(this.readyResult, t))) goto L_84;
  return;
  i = this.state;
  this.renderer.onRenderComplete(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=352B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: this
// closure: Ee
function {
  this = this;
  if (!((undefined === this.viewModel.isDarkMode))) goto L_8f;
  return Ee.OAIThemeMode.System;
  if (!(this.viewModel.isDarkMode)) goto L_11a;
  return Ee.OAIThemeMode.Dark;
  return Ee.OAIThemeMode.Light;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// closure: this
function {
  return this.renderRepairNotice(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=207B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: this, t, l, pt, n
function {
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", pt.repairNotices);
  n.map(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=7 closure=11 cpool=1 bc=2441B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// locals: i, o, n, n#1, u, this
// closure: t, l, pt, Xe, at, r, d, s, Ye, a, c
function {
  this = this;
  let u;
  let n#1;
  let o;
  let i;
  i = this.state.status;
  o = !Xe.Device.isAndroid();
  if (!((i !== at.Loaded))) goto L_503;
  let n;
  if (!(this.creditEnabled)) goto L_139;
  goto L_13a;
  // [栈深重同步 1 -> 0]
  n = undefined;
  if (!((undefined !== n))) goto L_489;
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", pt.scroll);
  t.setAttribute("bouncesFromDragAtStart", o);
  t.setAttribute("bouncesFromDragAtEnd", o);
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", pt.content);
  t.setAttributeNumber("paddingBottom", this.contentBottomPadding);
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", pt.list);
  this.renderCreditSection(n, e);
  if (!((i === at.Loading))) goto L_3e9;
  goto L_40f;
  // [栈深重同步 1 -> 0]
  this.renderErrorState();
  t.endRender();
  t.endRender();
  goto L_501;
  // [栈深重同步 1 -> 0]
  if (!((i === at.Loading))) goto L_4db;
  goto L_501;
  // [栈深重同步 1 -> 0]
  this.renderErrorState();
  return;
  n#1 = this.state.links.filter(Ye.isFinanceAccountLinkBroken);
  u = this.state.links.filter(Ye.isFinanceAccountLinkPending);
  t.beginRender(a, undefined);
  t.setAttributeStyle("style", pt.scroll);
  t.setAttribute("bouncesFromDragAtStart", o);
  t.setAttribute("bouncesFromDragAtEnd", o);
  t.beginRender(c, undefined);
  t.setAttributeStyle("style", pt.content);
  t.setAttributeNumber("paddingBottom", this.contentBottomPadding);
  if (!((n#1.length > 0))) goto L_7d5;
  function <atom:0>();
  if (!((0 === this.state.sections.length))) goto L_90e;
  if (!((0 === u.length))) goto L_90e;
  if (!((undefined === this.state.creditScore))) goto L_90e;
  if (!(this.state.isCreditLoading)) goto L_8e6;
  goto L_938;
  // [栈深重同步 1 -> 0]
  goto L_938;
  // [栈深重同步 1 -> 0]
  this.renderAccountList(u, e);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=8 cpool=0 bc=1031B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// closure: t, y, pt, h, p, g, v, b
function {
  t.beginRender(y, "finance-account-skeleton-".concat(e));
  t.setAttributeStyle("style", pt.loadingRow);
  t.beginRender(h, undefined);
  t.setAttributeStyle("style", pt.loadingIcon);
  t.endRender();
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", pt.loadingCopy);
  t.beginRender(g, undefined);
  t.setAttributeStyle("style", pt.loadingTitle);
  t.endRender();
  t.beginRender(v, undefined);
  t.setAttributeStyle("style", pt.loadingSubtitle);
  t.endRender();
  t.endRender();
  t.beginRender(b, undefined);
  t.setAttributeStyle("style", pt.loadingBalance);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=1 bc=327B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: t, y, pt, h, p, g, v, b, u, it
function {
  t.beginRender(u, undefined);
  t.setAttributeStyle("style", pt.loadingList);
  t.setAttributeString("accessibilityLabel", it.default.financeAccountsLoadingAccessibilityLabel());
  [0, 1, 2].map(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=0 bc=994B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: this
// closure: t, S, pt, A, it, Ue, m, Be
function {
  this = this;
  t.beginRender(S, undefined);
  t.setAttributeStyle("style", pt.messageContainer);
  t.beginRender(A, undefined);
  t.setAttributeStyle("style", pt.messageLabel);
  t.setAttributeString("value", it.default.financeAccountsLoadError());
  t.endRender();
  t.beginComponent(Ue.Button, m, undefined, undefined);
  t.setViewModelProperty("label", it.default.financeAccountsRetry());
  t.setViewModelProperty("onPress", this.retryLoading);
  t.setViewModelProperty("size", Be.OAIControlSize.Sm);
  t.setViewModelProperty("variant", Ue.ButtonVariant.Secondary);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=0 bc=1234B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: this
// closure: t, w, pt, R, it, st, Ue, C, Be
function {
  this = this;
  t.beginRender(w, undefined);
  t.setAttributeStyle("style", pt.messageContainer);
  t.beginRender(R, undefined);
  t.setAttributeStyle("style", pt.messageLabel);
  t.setAttributeString("value", it.default.financeAccountsEmpty());
  t.setAttributeString("accessibilityId", this.resultAnchor(st.Empty));
  t.endRender();
  t.beginComponent(Ue.Button, C, undefined, undefined);
  if (!((this.context == null))) goto L_2b4;
  this.context;
  goto L_2d5;
  t.setViewModelProperty("disabled", (undefined === undefined.host));
  t.setViewModelProperty("label", it.default.financeAccountsAddAccount());
  t.setViewModelProperty("onPress", this.openAccountLinking);
  t.setViewModelProperty("size", Be.OAIControlSize.Sm);
  t.setViewModelProperty("variant", Ue.ButtonVariant.Secondary);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// closure: this
function {
  return this.renderPendingLink(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// closure: this, i
function {
  return this.renderSection(e, i);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=2 bc=530B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e, i
// locals: this
// closure: t, f, pt
function {
  this = this;
  t.beginRender(f, undefined);
  t.setAttributeStyle("style", pt.list);
  this.renderAddAccountRow();
  e.map(function <atom:0>);
  this.state.sections.map(function <atom:0>);
  if (!((undefined !== this.state.creditScore))) goto L_1e9;
  this.renderCreditSection(this.state.creditScore, i);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=15 cpool=0 bc=1394B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: t, k, pt, O, n, M, L, r, x, je, V, o, qe, Be, nt
function {
  t.beginRender(k, undefined);
  t.setAttributeStyle("style", pt.sectionCopy);
  t.beginRender(O, undefined);
  t.setAttributeStyle("style", pt.sectionTitle);
  t.setAttributeString("value", n);
  t.endRender();
  t.endRender();
  t.beginRender(M, undefined);
  t.setAttributeStyle("style", pt.accessory);
  t.beginRender(L, undefined);
  t.setAttributeStyle("style", pt.sectionBalance);
  t.setAttributeString("value", r);
  t.endRender();
  t.beginRender(x, undefined);
  t.setAttributeStyle("style", pt.trailingAccessory);
  t.beginComponent(je.Icon, V, undefined, undefined);
  if (!(o)) goto L_40f;
  goto L_454;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("src", qe.default.chevronDownMd);
  t.setViewModelProperty("color", Be.OAIColor.IconSecondary);
  t.setViewModelProperty("size", nt);
  t.endComponent();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=16 cpool=0 bc=1621B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: t, D, vt, tt, F, H, pt, q, it, E, B, _, r, G, d, U
function {
  t.beginRender(D, undefined);
  t.setAttributeStyle("style", vt);
  t.beginComponent(tt.FinanceCreditInstitutionLogo, F, undefined, undefined);
  t.endComponent();
  t.endRender();
  t.beginRender(H, undefined);
  t.setAttributeStyle("style", pt.accountCopy);
  t.beginRender(q, undefined);
  t.setAttributeStyle("style", pt.accountTitle);
  t.setAttributeString("value", it.default.financeAccountsCreditInstitutionName());
  t.endRender();
  t.endRender();
  t.beginRender(E, undefined);
  t.setAttributeStyle("style", pt.accessory);
  t.beginRender(B, undefined);
  t.setAttributeStyle("style", pt.accountValues);
  t.beginRender(_, undefined);
  t.setAttributeStyle("style", pt.balance);
  t.setAttributeString("value", r);
  t.endRender();
  t.beginRender(G, undefined);
  t.setAttributeStyle("style", pt.accountStatus);
  t.setAttributeString("value", d);
  t.endRender();
  t.endRender();
  t.beginRender(U, undefined);
  t.setAttributeStyle("style", pt.trailingAccessory);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=21 cpool=1 bc=820B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: t, D, vt, tt, F, H, pt, q, it, E, B, _, r, G, d, U, N, this, Ke, T, St
function {
  t.beginRender(N, undefined);
  t.setAttributeStyle("style", pt.rowContainer);
  t.setAttributeFunction("onVisibilityChanged", this.handleCreditSourceVisibilityChanged);
  t.beginComponent(Ke.Pressable, T, undefined, undefined);
  t.setViewModelProperty("style", St);
  t.setViewModelProperty("hoveredStyle", pt.rowHovered);
  t.setViewModelProperty("pressedStyle", pt.rowPressed);
  t.setViewModelProperty("accessibilityLabel", it.default.financeAccountsCreditRowAccessibilityLabel(r));
  t.setViewModelProperty("onPress", this.openCreditAccountDetail);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=7 closure=33 cpool=2 bc=1452B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e, i
// locals: o, n, r, d, this
// closure: t, k, pt, O, M, L, x, je, V, qe, Be, nt, D, vt, tt, F, H, q, it, E, B, _, G, U, N, Ke, T, St, et, P, I, bt, j
function {
  this = this;
  let d;
  let r;
  let n;
  let o;
  o = this.state.isCreditExpanded;
  n = it.default.financeAccountsSectionCreditScore();
  r = et.formatFinanceCreditScore(e.scoreValue, (true === this.viewModel.sensitiveValuesHidden), this.viewModel.locale);
  d = et.formatFinanceCreditReportedDate(e, i);
  t.beginRender(P, undefined);
  t.setAttributeStyle("style", pt.section);
  t.beginComponent(Ke.Pressable, I, undefined, undefined);
  t.setViewModelProperty("style", bt);
  t.setViewModelProperty("hoveredStyle", pt.rowHovered);
  t.setViewModelProperty("pressedStyle", pt.rowPressed);
  if (!(o)) goto L_3b3;
  goto L_3fe;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityLabel", it.default.financeAccountsSectionCollapsedAccessibilityLabel(n));
  t.setViewModelProperty("accessibilityStateSelected", o);
  t.setViewModelProperty("onPress", this.toggleCreditSection);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  if (!(o)) goto L_4de;
  function <atom:0>();
  t.beginRender(j, undefined);
  t.setAttributeStyle("style", pt.divider);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=796B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: t, W, pt, je, Q, qe, Be, X, it
function {
  t.beginRender(W, undefined);
  t.setAttributeStyle("style", pt.iconBackground);
  t.beginComponent(je.Icon, Q, undefined, undefined);
  t.setViewModelProperty("src", qe.default.plus);
  t.setViewModelProperty("color", Be.OAIColor.IconSecondary);
  t.endComponent();
  t.endRender();
  t.beginRender(X, undefined);
  t.setAttributeStyle("style", pt.addAccountTitle);
  t.setAttributeString("value", it.default.financeAccountsAddAccount());
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=13 cpool=1 bc=1071B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: e, this
// closure: t, W, pt, je, Q, qe, Be, X, it, K, Ke, z, J
function {
  this = this;
  let e;
  if (!((this.context == null))) goto L_30;
  this.context;
  goto L_51;
  e = (undefined === undefined.host);
  t.beginRender(K, undefined);
  t.setAttributeStyle("style", pt.rowContainer);
  t.beginComponent(Ke.Pressable, z, undefined, undefined);
  t.setViewModelProperty("style", pt.accountRow);
  t.setViewModelProperty("hoveredStyle", pt.rowHovered);
  t.setViewModelProperty("pressedStyle", pt.rowPressed);
  t.setViewModelProperty("accessibilityLabel", it.default.financeAccountsAddAccount());
  t.setViewModelProperty("disabled", e);
  if (!(e)) goto L_2ea;
  goto L_30c;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onPress", this.openAccountLinking);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.beginRender(J, undefined);
  t.setAttributeStyle("style", pt.divider);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=0 bc=1199B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: t, FinanceAccountInstitutionIcon, $, e, ee, pt, te, ie, Ge, oe, ne, o
function {
  t.beginComponent(FinanceAccountInstitutionIcon, $, undefined, undefined);
  t.setViewModelProperty("link", e);
  t.endComponent();
  if (!((undefined === e.institutionName))) goto L_156;
  t.beginRender(ee, undefined);
  t.setAttributeStyle("style", pt.pendingInstitutionPlaceholder);
  goto L_249;
  // [栈深重同步 1 -> 0]
  t.beginRender(te, undefined);
  t.setAttributeStyle("style", pt.accountTitle);
  t.setAttributeString("value", e.institutionName);
  t.endRender();
  t.beginRender(ie, undefined);
  t.setAttributeStyle("style", pt.pendingStatus);
  t.beginComponent(Ge.ActivityIndicator, oe, undefined, undefined);
  t.setViewModelProperty("size", Ge.ActivityIndicatorSize.Small);
  t.endComponent();
  t.beginRender(ne, undefined);
  t.setAttributeStyle("style", pt.accountStatus);
  t.setAttributeString("value", o);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=16 cpool=1 bc=1218B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// locals: i, o
// closure: t, FinanceAccountInstitutionIcon, $, ee, pt, te, ie, Ge, oe, ne, it, Ye, Z, Ke, Y, re
function {
  let o;
  let i;
  if (!((e.institutionName == null))) goto L_75;
  e.institutionName;
  i = it.default.financeAccountsFinancialInstitution();
  o = Ye.getFinanceAccountUpdatedLabel(e, undefined, Date.now());
  t.beginRender(Z, "pending-".concat(e.id));
  t.setAttributeStyle("style", pt.rowContainer);
  t.beginComponent(Ke.Pressable, Y, undefined, undefined);
  t.setViewModelProperty("style", pt.accountRow);
  t.setViewModelProperty("hoveredStyle", pt.rowHovered);
  t.setViewModelProperty("showsPressedFeedback", false);
  t.setViewModelProperty("accessibilityId", "finance-pending-link-".concat(e.id));
  t.setViewModelProperty("accessibilityLabel", it.default.financeAccountsPendingInstitutionAccessibilityLabel(i, o));
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.beginRender(re, undefined);
  t.setAttributeStyle("style", pt.divider);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: this, e
function {
  return this.repairAccountLink(e.id);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=6 cpool=1 bc=1300B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// locals: i, o, this
// closure: it, t, de, Fe, se, Ee
function {
  this = this;
  let o;
  let i;
  if (!((e.institutionName == null))) goto L_32;
  e.institutionName;
  goto L_56;
  i = undefined.trim();
  if (((undefined === i))) goto L_66;
  if (!((0 === i.length))) goto L_b2;
  goto L_fd;
  // [栈深重同步 1 -> 0]
  o = it.default.financeAccountsRepairDescriptionWithInstitution(i);
  t.beginRender(de, "repair-".concat(e.id));
  t.setAttributeString("accessibilityId", "finance-repair-link-".concat(e.id));
  t.beginComponent(Fe.FinanceRepairCard, se, undefined, undefined);
  t.setViewModelProperty("title", it.default.financeAccountsRepairTitle());
  t.setViewModelProperty("description", o);
  t.setViewModelProperty("actionLabel", it.default.financeAccountsRepair());
  t.setViewModelProperty("isDarkMode", (this.themeMode === Ee.OAIThemeMode.Dark));
  if (!((this.context == null))) goto L_440;
  this.context;
  goto L_461;
  t.setViewModelProperty("disabled", (undefined === undefined.host));
  t.setViewModelProperty("loading", false);
  t.setViewModelProperty("onRepair", function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: this, e
function {
  return this.toggleSection(e.id);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=20 cpool=0 bc=2047B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: t, le, pt, ue, s, e, this, st, d, ye, it, he, pe, ge, je, ve, o, qe, Be, nt
function {
  t.beginRender(le, undefined);
  t.setAttributeStyle("style", pt.sectionCopy);
  t.beginRender(ue, undefined);
  t.setAttributeStyle("style", pt.sectionTitle);
  t.setAttributeString("value", s);
  if (!((e === this.state.sections[0]))) goto L_1ed;
  goto L_1ee;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityId", undefined);
  t.endRender();
  if (!((undefined !== d))) goto L_3b7;
  t.beginRender(ye, undefined);
  t.setAttributeStyle("style", pt.accountSubtitle);
  if (!((undefined === e.liabilityShare))) goto L_341;
  goto L_38c;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("value", it.default.financeAccountsSectionLiabilityShare(d));
  t.endRender();
  t.endRender();
  t.beginRender(he, undefined);
  t.setAttributeStyle("style", pt.accessory);
  t.beginRender(pe, undefined);
  t.setAttributeStyle("style", pt.sectionBalance);
  t.setAttributeString("value", this.formatSectionBalance(e));
  t.endRender();
  t.beginRender(ge, undefined);
  t.setAttributeStyle("style", pt.trailingAccessory);
  t.beginComponent(je.Icon, ve, undefined, undefined);
  if (!(o)) goto L_69c;
  goto L_6e1;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("src", qe.default.chevronDownMd);
  t.setViewModelProperty("color", Be.OAIColor.IconSecondary);
  t.setViewModelProperty("size", nt);
  t.endComponent();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// closure: this, i
function {
  return this.renderAccount(e, i);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=240B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: this, i, t, be, pt, e
function {
  t.beginRender(be, undefined);
  t.setAttributeStyle("style", pt.sectionAccounts);
  e.selections.map(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=8 closure=21 cpool=3 bc=1633B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e, i
// locals: o, n, r, d, s, this
// closure: t, le, pt, ue, st, ye, it, he, pe, ge, je, ve, qe, Be, nt, be, Ye, ae, Ke, ce, Se
function {
  this = this;
  let s;
  let d;
  let r;
  let n;
  let o;
  o = this.isSectionExpanded(e.id);
  n = (true === this.viewModel.sensitiveValuesHidden);
  if (!((e.liabilityShare == null))) goto L_ec;
  e.liabilityShare;
  r = e.assetShare;
  if (((undefined === r))) goto L_f9;
  if (!(n)) goto L_fe;
  goto L_16a;
  // [栈深重同步 1 -> 0]
  d = Ye.formatFinanceAccountSharePercentage(r, this.viewModel.locale);
  s = Ye.getFinanceAccountSectionTitle(e.id);
  t.beginRender(ae, e.id);
  t.setAttributeStyle("style", pt.section);
  t.beginComponent(Ke.Pressable, ce, undefined, undefined);
  t.setViewModelProperty("style", pt.sectionHeader);
  t.setViewModelProperty("hoveredStyle", pt.rowHovered);
  t.setViewModelProperty("pressedStyle", pt.rowPressed);
  t.setViewModelProperty("accessibilityId", "finance-accounts-section-".concat(e.id));
  if (!(o)) goto L_489;
  goto L_4d4;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityLabel", it.default.financeAccountsSectionCollapsedAccessibilityLabel(s));
  t.setViewModelProperty("accessibilityStateSelected", o);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  if (!(o)) goto L_593;
  function <atom:0>();
  t.beginRender(Se, undefined);
  t.setAttributeStyle("style", pt.divider);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=109B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: this, o, n
function {
  return this.openAccountDetail(o.id, n.id);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=23 cpool=0 bc=2415B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: t, FinanceAccountInstitutionIcon, we, n, Re, pt, Ce, Ye, e, fe, o, Pe, Ie, ke, this, Oe, r, i, Me, s, Le, Ze, it
function {
  t.beginComponent(FinanceAccountInstitutionIcon, we, undefined, undefined);
  t.setViewModelProperty("link", n);
  t.endComponent();
  t.beginRender(Re, undefined);
  t.setAttributeStyle("style", pt.accountCopy);
  t.beginRender(Ce, undefined);
  t.setAttributeStyle("style", pt.accountTitle);
  t.setAttributeString("value", Ye.getFinanceAccountRowTitle(e));
  t.endRender();
  t.beginRender(fe, undefined);
  t.setAttributeStyle("style", pt.accountSubtitle);
  t.setAttributeString("value", Ye.getFinanceAccountSubtitle(o));
  t.endRender();
  t.endRender();
  t.beginRender(Pe, undefined);
  t.setAttributeStyle("style", pt.accessory);
  t.beginRender(Ie, undefined);
  t.setAttributeStyle("style", pt.accountValues);
  t.beginRender(ke, undefined);
  t.setAttributeStyle("style", pt.balance);
  t.setAttributeString("value", this.formatAccountBalance(o));
  t.endRender();
  t.beginRender(Oe, undefined);
  t.setAttributeStyle("style", pt.accountStatus);
  t.setAttributeString("color", Ye.accountStatusColor(r));
  t.setAttributeString("value", Ye.getFinanceAccountUpdatedLabel(n, o, i));
  t.endRender();
  t.endRender();
  t.beginRender(Me, undefined);
  t.setAttributeStyle("style", pt.trailingAccessory);
  if (!(s)) goto L_91e;
  t.beginRender(Le, undefined);
  t.setAttributeStyle("style", pt.statusIndicator);
  if (!((r === Ze.FinanceAccountStatus.RepairNeeded))) goto L_856;
  goto L_89e;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityLabel", it.default.financeAccountsStatusSyncFailed());
  t.setAttributeString("backgroundColor", Ye.accountStatusColor(r));
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=8 closure=19 cpool=2 bc=1552B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e, i
// locals: o, n, r, d, s, this
// closure: t, FinanceAccountInstitutionIcon, we, Re, pt, Ce, Ye, fe, Pe, Ie, ke, Oe, Me, Le, Ze, it, Ae, Ke, me
function {
  this = this;
  let s;
  let d;
  let r;
  let n;
  let o;
  if (((undefined === undefined))) goto L_61;
  o = <to_object>(undefined).account;
  n = <to_object>(undefined).link;
  <to_object>(undefined);
  goto L_65;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_17;
  // [栈深重同步 1 -> 0]
  r = Ye.getFinanceAccountStatus(n);
  if (!((this.context == null))) goto L_ba;
  this.context;
  goto L_db;
  if (!((undefined !== undefined.host))) goto L_159;
  if (!((undefined !== n.itemId))) goto L_159;
  if (!((o.itemId == null))) goto L_158;
  o.itemId;
  d = (undefined !== n.itemId);
  if (((r === Ze.FinanceAccountStatus.RepairNeeded))) goto L_1f0;
  s = (r === Ze.FinanceAccountStatus.SyncFailed);
  t.beginRender(Ae, "".concat(n.id, "-", o.id));
  t.setAttributeStyle("style", pt.rowContainer);
  t.beginComponent(Ke.Pressable, me, undefined, undefined);
  t.setViewModelProperty("style", pt.accountRow);
  t.setViewModelProperty("hoveredStyle", pt.rowHovered);
  t.setViewModelProperty("pressedStyle", pt.rowPressed);
  t.setViewModelProperty("showsPressedFeedback", d);
  if (!(d)) goto L_489;
  goto L_48e;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityCategory", "view");
  t.setViewModelProperty("accessibilityId", "finance-account-".concat(o.id));
  t.setViewModelProperty("accessibilityLabel", Ye.getFinanceAccountRowTitle(e));
  if (!(d)) goto L_591;
  goto L_592;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onPress", undefined);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=230B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: <atom:0>
// locals: t
// closure: e
function {
  t = <to_object>(<atom:0>).account;
  <to_object>(<atom:0>);
  if (!((t.balances == null))) goto L_51;
  t.balances;
  goto L_72;
  if (!((undefined === undefined.isoCurrencyCode))) goto L_e5;
  if (!((t.balances == null))) goto L_a1;
  t.balances;
  goto L_c2;
  return (undefined.unofficialCurrencyCode === e.currency);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=403B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// locals: this
// closure: Ye
function {
  this = this;
  if (((undefined === e.total))) goto L_4e;
  if (!((undefined === e.currency))) goto L_56;
  return "-";
  return Ye.formatFinanceBalance(e.total, e.currency, (true === this.viewModel.sensitiveValuesHidden), this.viewModel.locale, e.selections.some(function <atom:0>));
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=556B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// locals: t, i, this
// closure: Ye
function {
  this = this;
  let i;
  let t;
  t = Ye.getFinanceAccountDisplayBalance(e);
  if (!((undefined === t))) goto L_3c;
  return "-";
  if (!((e.balances == null))) goto L_66;
  e.balances;
  goto L_87;
  if (!((undefined.isoCurrencyCode == null))) goto L_d7;
  undefined.isoCurrencyCode;
  if (!((e.balances == null))) goto L_b6;
  e.balances;
  goto L_d7;
  i = undefined.unofficialCurrencyCode;
  if (!((e.balances == null))) goto L_1b6;
  e.balances;
  goto L_1d7;
  if (!((undefined === undefined.isoCurrencyCode))) goto L_229;
  if (!((e.balances == null))) goto L_207;
  e.balances;
  goto L_228;
  return Ye.formatFinanceBalance(t, i, (true === this.viewModel.sensitiveValuesHidden), this.viewModel.locale, (undefined !== undefined.unofficialCurrencyCode));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=291B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// locals: this
function {
  this = this;
  if (!((undefined === this.state.expandedSectionIds))) goto L_ba;
  if (!((this.state.sections[0] == null))) goto L_96;
  this.state.sections[0];
  goto L_b7;
  return (undefined.id === e);
  return this.state.expandedSectionIds.has(e);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=304B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: this
function {
  this = this;
  if (!(!this.isDestroyed())) goto L_12f;
  if (!(this.creditEnabled)) goto L_12f;
  if (!((undefined !== this.state.creditScore))) goto L_12f;
  if (!(this.state.isCreditExpanded)) goto L_12f;
  return !this.state.showingCreditDetail;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=166B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// locals: this
// closure: Qe
function {
  this = this;
  if (!(Qe.isVersionAtLeast(32))) goto L_a5;
  if (!((this.context == null))) goto L_57;
  this.context;
  goto L_a5;
  if (!((undefined.host == null))) goto L_80;
  undefined.host;
  goto L_a5;
  undefined.repairAccountLink(e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=167B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e, t
// locals: this
// closure: Qe
function {
  this = this;
  if (!(Qe.isVersionAtLeast(32))) goto L_a6;
  if (!((this.context == null))) goto L_57;
  this.context;
  goto L_a6;
  if (!((undefined.host == null))) goto L_80;
  undefined.host;
  goto L_a6;
  undefined.openAccountDetail(e, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=44B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// closure: this, i, o
function {
  return this.handleLoadedAccounts(e, i, o);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// closure: this, i
function {
  return this.handleAccountLoadFailure(e, i);   // tail call
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=2 bc=811B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// locals: t, i, o, n, this
// closure: at
function {
  this = this;
  let n;
  let o;
  let i;
  let t;
  t = this.api;
  if (!((undefined === t))) goto L_49;
  throw new Error("Finance Accounts was loaded before its authenticated API was initialized");
  this.requestGeneration = (this.requestGeneration ++);
  i = (this.requestGeneration ++);
  o = this.observedResultContext;
  this.invalidateReadyResult();
  this.resultRenderGeneration = (this.resultRenderGeneration + 1);
  if (!((undefined !== this.state.resultReadGeneration))) goto L_16e;
  this.setState({resultReadGeneration: undefined, loadedResultContext: undefined});
  this.cancelScheduledRefresh();
  if (!((this.activeTask == null))) goto L_1c1;
  this.activeTask;
  goto L_1e5;
  undefined.cancel();
  if (!(e)) goto L_2a7;
  if (!((this.state.status !== at.Loading))) goto L_2a7;
  this.setState({status: at.Loading});
  n = t.accountLinks();
  this.activeTask = n;
  n.result.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=81B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// closure: Ye
function {
  if ((Ye.isFinanceAccountLinkPending(e))) goto L_50;
  return Ye.isActivelySyncing(e);
}

// fn <atom:0>  args=3 vars=6 closure=3 cpool=1 bc=610B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e, t, i
// locals: o, n, this
// closure: Ye, at, ot
function {
  this = this;
  let n;
  let o;
  if (!((t !== this.requestGeneration))) goto L_2f;
  return;
  this.activeTask = undefined;
  o = Ye.buildFinanceAccountSections(e);
  if (!(this.hasLoadedAccounts)) goto L_138;
  goto L_17b;
  // [栈深重同步 1 -> 0]
  n = this.state.expandedSectionIds;
  this.hasLoadedAccounts = true;
  if (!((undefined === i))) goto L_1f6;
  goto L_1f7;
  // [栈深重同步 4 -> 3]
  this.setState({expandedSectionIds: n, links: e, sections: o, status: at.Loaded, loadedResultContext: i, resultReadGeneration: t});
  if (!(e.some(function <atom:0>))) goto L_261;
  this.refreshTimer = setTimeout(this.refreshAccounts, ot);
  setTimeout(this.refreshAccounts, ot);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=264B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: t, i
// locals: this
// closure: e, at
function {
  this = this;
  if (!((i === this.requestGeneration))) goto L_107;
  if (!(e.isLoggingEnabled)) goto L_ae;
  console.warn("Unable to load authenticated Finance accounts: ".concat(String(t)));
  this.activeTask = undefined;
  this.setState({status: at.Failed});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=187B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: e
// closure: i, this
function {
  if (!((i === this.creditRequestGeneration))) goto L_ba;
  this.activeCreditTask = undefined;
  if (!((undefined !== e))) goto L_b2;
  this.setState({creditScore: e, isCreditLoading: false, showingCreditDetail: this.state.showingCreditDetail});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=210B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: t
// closure: i, this, e
function {
  if (!((i === this.creditRequestGeneration))) goto L_d1;
  if (!(e.isLoggingEnabled)) goto L_8b;
  console.warn(("Unable to load authenticated Finance credit score: " + String(t)));
  this.activeCreditTask = undefined;
  this.setState({creditScore: undefined, isCreditLoading: false, showingCreditDetail: false});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=2 bc=401B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: t, i, o, this
// closure: e
function {
  this = this;
  let o;
  let i;
  let t;
  this.cancelCreditRequest();
  t = this.api;
  if ((!this.creditEnabled)) goto L_80;
  if (!((undefined === t))) goto L_be;
  this.setState({creditScore: undefined, isCreditLoading: false, showingCreditDetail: false});
  return;
  i = this.creditRequestGeneration;
  this.setState({isCreditLoading: true});
  o = t.creditScore();
  this.activeCreditTask = o;
  o.result.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=138B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: this
function {
  this = this;
  this.creditRequestGeneration = (this.creditRequestGeneration + 1);
  if (!((this.activeCreditTask == null))) goto L_59;
  this.activeCreditTask;
  goto L_7d;
  undefined.cancel();
  this.activeCreditTask = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=96B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: this
function {
  this = this;
  if (!((undefined !== this.refreshTimer))) goto L_5f;
  clearTimeout(this.refreshTimer);
  this.refreshTimer = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=499B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: t, i
// locals: o
// closure: this, e
function {
  let o;
  o = this.viewModel.link.institutionLogo;
  if ((t)) goto L_1f2;
  if (((undefined === o))) goto L_1f2;
  if (((o === this.state.failedLogo))) goto L_1f2;
  if (!(e.isLoggingEnabled)) goto L_1c1;
  if (!((i == null))) goto L_1bb;
  i;
  console.warn("Unable to load Finance institution logo ".concat(this.viewModel.link.id, ": ", "unknown error"));
  this.setState({failedLogo: o});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=76B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: this, this.active_func, new.target, arguments
// closure: e, <class_fields_init>
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
  this.state = {};
  this.handleAssetLoad = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=495B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// closure: t, Ne, pt, e, this, ze, Ye, i
function {
  t.beginRender(Ne, undefined);
  t.setAttributeStyle("style", pt.institutionLogo);
  t.setAttributeString("accessibilityId", "finance-institution-".concat(e.id, "-logo"));
  t.setAttributeFunction("onAssetLoad", this.handleAssetLoad);
  t.setAttribute("src", ze.makeAssetFromUrl(Ye.normalizeInstitutionLogo(i)));
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=11 cpool=1 bc=697B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: e, i, this
// closure: t, Ne, pt, ze, Ye, xe, gt, je, Ve, qe, Be
function {
  this = this;
  let i;
  let e;
  if (((undefined === undefined))) goto L_34;
  e = <to_object>(undefined).link;
  <to_object>(undefined);
  goto L_59;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  i = e.institutionLogo;
  t.beginRender(xe, undefined);
  t.setAttributeStyle("style", gt);
  if (((undefined === i))) goto L_12a;
  if (!((i === this.state.failedLogo))) goto L_28d;
  t.beginComponent(je.Icon, Ve, undefined, undefined);
  t.setViewModelProperty("src", qe.default.building);
  t.setViewModelProperty("color", Be.OAIColor.IconSecondary);
  goto L_290;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=3 vars=136 closure=0 cpool=42 bc=15839B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// args: require, module, exports
// locals: e, t, i, o, n, r, d, s, a, c, l, u, y, h, p, g, v, b, S, A, m, w, R, C, f, P, I, k, O, M, L, x, V, N, T, D, F, H, q, E, B, _, G, U, j, K, z, W, Q, X, J, Z, Y, $, ee, te, ie, oe, ne, re, de, se, ae, ce, le, ue, ye, he, pe, ge, ve, be, Se, Ae, me, we, Re, Ce, fe, Pe, Ie, ke, Oe, Me, Le, xe, Ve, Ne, Te, De, Fe, He, qe, Ee, Be, _e, Ge, Ue, je, Ke, ze, We, Qe, Xe, Je, Ze, Ye, $e, et, tt, it, ot, nt, rt, dt, st, at, ct, FinanceAccountListComponent, <class_fields_init>, FinanceAccountListComponent#1, FinanceAccountInstitutionIcon, <class_fields_init>#1, FinanceAccountInstitutionIcon#1, lt, ut, yt, ht, pt, gt, vt, bt, St
function {
  ct = function ct;
  let St;
  let bt;
  let vt;
  let gt;
  let pt;
  let ht;
  let yt;
  let ut;
  let lt;
  let FinanceAccountInstitutionIcon#1;
  let FinanceAccountListComponent#1;
  let dt;
  let rt;
  let nt;
  let ot;
  let it;
  let tt;
  let et;
  let $e;
  let Ye;
  let Ze;
  let Je;
  let Xe;
  let Qe;
  let We;
  let ze;
  let Ke;
  let je;
  let Ue;
  let Ge;
  let _e;
  let Be;
  let Ee;
  let qe;
  let He;
  let Fe;
  let De;
  let Te;
  let Ne;
  let Ve;
  let xe;
  let Le;
  let Me;
  let Oe;
  let ke;
  let Ie;
  let Pe;
  let fe;
  let Ce;
  let Re;
  let we;
  let me;
  let Ae;
  let Se;
  let be;
  let ve;
  let ge;
  let pe;
  let he;
  let ye;
  let ue;
  let le;
  let ce;
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
  let Y;
  let Z;
  let J;
  let X;
  let Q;
  let W;
  let z;
  let K;
  let j;
  let U;
  let G;
  let _;
  let B;
  let E;
  let q;
  let H;
  let F;
  let D;
  let T;
  let N;
  let V;
  let x;
  let L;
  let M;
  let O;
  let k;
  let I;
  let P;
  let f;
  let C;
  let R;
  let w;
  let m;
  let A;
  let S;
  let b;
  let v;
  let g;
  let p;
  let h;
  let y;
  let u;
  let l;
  let c;
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
  exports.FinanceAccountListComponent = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeComponentPrototype(undefined, "QC3j3zEQHltjKKdt");
  o = t.makeComponentPrototype(undefined, "sO5CXp70elA4TRP2");
  n = t.makeNodePrototype("view", ["accessibilityId", "finance-accounts"], "Jf4liY9yrETRgbnH");
  r = t.makeNodePrototype("scroll", undefined, "5h2chNp6FrpHpcdc");
  d = t.makeNodePrototype("view", undefined, "7y4gljF5LCR7MUXK");
  s = t.makeNodePrototype("view", undefined, "OZUSVF-nocTK8Dat");
  a = t.makeNodePrototype("scroll", undefined, "_P2eNpjf6VVKeLgG");
  c = t.makeNodePrototype("view", undefined, "48on_CQ2t906LOAM");
  l = t.makeNodePrototype("view", undefined, "6Q1KIy8FFu0LNzm2");
  u = t.makeNodePrototype("view", ["accessibilityId", "finance-accounts-loading"], "4JlVru_9jhHA_MVe");
  y = t.makeNodePrototype("view", undefined, "0a3-CS-Qo-yrcxnP");
  h = t.makeNodePrototype("view", undefined, "23VuE7woYAKmj3Of");
  p = t.makeNodePrototype("view", undefined, "Q4t4qmm0Ex2y7pmP");
  g = t.makeNodePrototype("view", undefined, "mdMZzbjo-2LXj6X3");
  v = t.makeNodePrototype("view", undefined, "xFQOkyGlIAVQncU1");
  b = t.makeNodePrototype("view", undefined, "i_p0smPY7GIysxCM");
  S = t.makeNodePrototype("view", ["accessibilityId", "finance-accounts-error"], "WIfbV2gp3aUQavlj");
  A = t.makeNodePrototype("label", undefined, "bzDyNUIN9U7LSUur");
  m = t.makeComponentPrototype(["accessibilityId", "finance-accounts-retry"], "CDNiPt7Uimr80-rc");
  w = t.makeNodePrototype("view", ["accessibilityId", "finance-accounts-empty"], "wcEN2-NXNo_wV0fk");
  R = t.makeNodePrototype("label", undefined, "G7q_vQeVJcXqQC6l");
  C = t.makeComponentPrototype(["accessibilityId", "finance-accounts-add"], "V19bmAtZW0coL_l9");
  f = t.makeNodePrototype("view", undefined, "JwhsA9dwN6HpWjgk");
  P = t.makeNodePrototype("view", undefined, "gXqelh-b03_JLAHO");
  I = t.makeComponentPrototype(undefined, "pCCHOpYt-Q8Rhky1");
  k = t.makeNodePrototype("view", undefined, "P0Zn_m1D30LmzXhI");
  O = t.makeNodePrototype("label", undefined, "FaRwBqB7EHC31617");
  M = t.makeNodePrototype("view", undefined, "mOWvhw119GrDmb2d");
  L = t.makeNodePrototype("label", undefined, "Adav67AXuxMbiESY");
  x = t.makeNodePrototype("layout", undefined, "DbPlPrqfyUlxY9C0");
  V = t.makeComponentPrototype(undefined, "Nqtdhl9WmvNsRjJV");
  N = t.makeNodePrototype("view", ["accessibilityId", "finance-credit-detail-source"], "yPH0bRgQ7g52uSvH");
  T = t.makeComponentPrototype(undefined, "riOXrNCr7QXjbSGy");
  D = t.makeNodePrototype("view", undefined, "_SVHbgP5MfUCOK7b");
  F = t.makeComponentPrototype(undefined, "wsTh2LZbkrrGDC6i");
  H = t.makeNodePrototype("view", undefined, "ZKpXBm6WQeaxfAMf");
  q = t.makeNodePrototype("label", undefined, "pJwSZmqiCDG9PdYr");
  E = t.makeNodePrototype("layout", undefined, "8-ZhJziBIDpJ-ngp");
  B = t.makeNodePrototype("view", undefined, "vCLKZZvWZ686bGDb");
  _ = t.makeNodePrototype("label", undefined, "KqLsCe9MXHZyqePu");
  G = t.makeNodePrototype("label", undefined, "mWEgrWg0JpAPA5Ye");
  U = t.makeNodePrototype("layout", undefined, "0m_R7lXxWvI-UiAa");
  j = t.makeNodePrototype("view", undefined, "leRgPMY7CZ5yMmCf");
  K = t.makeNodePrototype("view", undefined, "2tWbC2ScIwlLh5vB");
  z = t.makeComponentPrototype(["accessibilityCategory", "button", "accessibilityId", "finance-accounts-add"], "kO-xjq0lpv0Zjbgu");
  W = t.makeNodePrototype("view", undefined, "LWyZMm3Arja8jalO");
  Q = t.makeComponentPrototype(["size", 20], "vIZMwcSqqovq4JIK");
  X = t.makeNodePrototype("label", undefined, "DgghI25OAKK0sjtQ");
  J = t.makeNodePrototype("view", undefined, "DcA3wUdBhSzcXN8M");
  Z = t.makeNodePrototype("view", undefined, "37d9xgSUkuOBL7pD");
  Y = t.makeComponentPrototype(["accessibilityCategory", "view"], "SOsc4hOWgk_bCEmb");
  $ = t.makeComponentPrototype(undefined, "533b86w36V-10r8_");
  ee = t.makeNodePrototype("view", undefined, "JaMNTnnIu4DrEFb8");
  te = t.makeNodePrototype("label", undefined, "WMJPbUO7X_9INMqC");
  ie = t.makeNodePrototype("view", undefined, "DyH-1pHeGlYpK6eD");
  oe = t.makeComponentPrototype(undefined, "Y-VbRjESenmIjUtn");
  ne = t.makeNodePrototype("label", undefined, "olaR-Bhtz79yp137");
  re = t.makeNodePrototype("view", undefined, "RIFJpGN5zHPZMAzF");
  de = t.makeNodePrototype("view", undefined, "OJ4XXcy4H6PKsZd7");
  se = t.makeComponentPrototype(undefined, "mV0qFfCNlzJzqcG9");
  ae = t.makeNodePrototype("view", undefined, "hhJrTn-zcGMxjkYa");
  ce = t.makeComponentPrototype(["accessibilityCategory", "button"], "TFg5rQ2rno-Ri64j");
  le = t.makeNodePrototype("view", undefined, "p6wNQjsV9_yzOeGH");
  ue = t.makeNodePrototype("label", undefined, "OFUc_s07C-WPrpcW");
  ye = t.makeNodePrototype("label", undefined, "WQ3YOjUNFst0Prpr");
  he = t.makeNodePrototype("view", undefined, "H_2nPy25V4b-63zq");
  pe = t.makeNodePrototype("label", undefined, "lYKXcYtlUkCoJAM2");
  ge = t.makeNodePrototype("layout", undefined, "TD_ytuoY87XkYd8s");
  ve = t.makeComponentPrototype(undefined, "DSiIyATBWASarO2N");
  be = t.makeNodePrototype("view", undefined, "KQTscbjEMl0HOBmM");
  Se = t.makeNodePrototype("view", undefined, "YCheGqjvhfPIcvWE");
  Ae = t.makeNodePrototype("view", undefined, "t05ZvCLqg3qIGNRK");
  me = t.makeComponentPrototype(undefined, "fhjDZHbufeiFg4rW");
  we = t.makeComponentPrototype(undefined, "gVBKdZv5pv_721GB");
  Re = t.makeNodePrototype("view", undefined, "Lb4Pi_xK1YcbRLXq");
  Ce = t.makeNodePrototype("label", undefined, "KhdOduKnMaWh4gBe");
  fe = t.makeNodePrototype("label", undefined, "6Rv36eyX7duD852d");
  Pe = t.makeNodePrototype("view", undefined, "loQblJvnEaqcAyl6");
  Ie = t.makeNodePrototype("view", undefined, "H4bt707550xjuhHx");
  ke = t.makeNodePrototype("label", undefined, "mXkrRG-3VyVTXMNB");
  Oe = t.makeNodePrototype("label", undefined, "7D2Dc3ZgBnEbYEC8");
  Me = t.makeNodePrototype("layout", undefined, "CsohpWq4HdPfLMyi");
  Le = t.makeNodePrototype("view", undefined, "lpZJdYIWhibFbWJs");
  xe = t.makeNodePrototype("view", undefined, "qHq12jQi5AT6DFV8");
  Ve = t.makeComponentPrototype(["size", 20], "q9cRDndTgK3pDbgU");
  Ne = t.makeNodePrototype("image", undefined, "upMEaNBwJPfDwvkB");
  Te = require("chatgpt_finance/src/FinanceAccountsResultAnalytics");
  De = require("chatgpt_finance/src/FinanceAccountsResultModels");
  Fe = require("chatgpt_finance/src/FinanceRepairCard");
  He = require("chatgpt_finance/src/FinanceApi");
  qe = require("dil_icon_assets/res");
  Ee = require("oai_core/src/OAITheme");
  Be = require("oai_core/src/OAITokens");
  _e = require("oai_platform_services/src/OAIAnalyticsService");
  Ge = require("oai_ui/src/components/ActivityIndicator");
  Ue = require("oai_ui/src/components/Button");
  je = require("oai_ui/src/components/Icon");
  Ke = require("oai_ui/src/components/Pressable");
  ze = require("valdi_core/src/Asset");
  We = require("valdi_core/src/Component");
  Qe = require("valdi_core/src/CompilerIntrinsics");
  Xe = require("valdi_core/src/Device");
  Je = require("valdi_core/src/Style");
  Ze = require("./FinanceAccountListModels");
  Ye = require("./FinanceAccountListUtils");
  $e = require("./FinanceCreditAccountDetailComponent");
  et = require("./FinanceCreditAccountUtils");
  tt = require("./FinanceCreditInstitutionLogo");
  it = require("./Strings");
  ot = 30000;
  nt = Be.OAISpacing.Three;
  rt = 0.5;
  dt = 48;
  if ((st)) goto L_14ef;
  st = {};
  !function <atom:0>({});
  if ((at)) goto L_14fd;
  at = {};
  function <atom:0>({});
  let FinanceAccountListComponent;
  let <class_fields_init>;
  class FinanceAccountListComponent extends We.StatefulComponent { ... }
  <proto:FinanceAccountListComponent>.onCreate = function <atom:0>;
  <proto:FinanceAccountListComponent>.onViewModelUpdate = function <atom:0>;
  <proto:FinanceAccountListComponent>.onDestroy = function <atom:0>;
  <proto:FinanceAccountListComponent>.onRender = function <atom:0>;
  <proto:FinanceAccountListComponent>.readResultContext = function <atom:0>;
  <proto:FinanceAccountListComponent>.sameResultContext = function <atom:0>;
  <proto:FinanceAccountListComponent>.currentReadyResult = function <atom:0>;
  <proto:FinanceAccountListComponent>.resultAnchor = function <atom:0>;
  <proto:FinanceAccountListComponent>.sameReadyResult = function <atom:0>;
  <proto:FinanceAccountListComponent>.invalidateReadyResult = function <atom:0>;
  <proto:FinanceAccountListComponent>.reportAccountsResultRender = function <atom:0>;
  <proto:FinanceAccountListComponent>.themeMode = function <atom:0>;
  <proto:FinanceAccountListComponent>.renderContent = function <atom:0>;
  <proto:FinanceAccountListComponent>.renderLoadingState = function <atom:0>;
  <proto:FinanceAccountListComponent>.renderErrorState = function <atom:0>;
  <proto:FinanceAccountListComponent>.renderEmptyState = function <atom:0>;
  <proto:FinanceAccountListComponent>.renderAccountList = function <atom:0>;
  <proto:FinanceAccountListComponent>.renderCreditSection = function <atom:0>;
  <proto:FinanceAccountListComponent>.renderAddAccountRow = function <atom:0>;
  <proto:FinanceAccountListComponent>.renderPendingLink = function <atom:0>;
  <proto:FinanceAccountListComponent>.renderRepairNotice = function <atom:0>;
  <proto:FinanceAccountListComponent>.renderSection = function <atom:0>;
  <proto:FinanceAccountListComponent>.renderAccount = function <atom:0>;
  <proto:FinanceAccountListComponent>.formatSectionBalance = function <atom:0>;
  <proto:FinanceAccountListComponent>.formatAccountBalance = function <atom:0>;
  <proto:FinanceAccountListComponent>.isSectionExpanded = function <atom:0>;
  <proto:FinanceAccountListComponent>.isCreditDetailSourceEligible = function <atom:0>;
  <proto:FinanceAccountListComponent>.repairAccountLink = function <atom:0>;
  <proto:FinanceAccountListComponent>.openAccountDetail = function <atom:0>;
  <proto:FinanceAccountListComponent>.loadAccounts = function <atom:0>;
  <proto:FinanceAccountListComponent>.handleLoadedAccounts = function <atom:0>;
  <proto:FinanceAccountListComponent>.handleAccountLoadFailure = function <atom:0>;
  <proto:FinanceAccountListComponent>.loadCreditScore = function <atom:0>;
  <proto:FinanceAccountListComponent>.cancelCreditRequest = function <atom:0>;
  <proto:FinanceAccountListComponent>.cancelScheduledRefresh = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceAccountListComponent>;
  FinanceAccountListComponent = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceAccountListComponent#1 = function <atom:0>;
  exports.FinanceAccountListComponent = FinanceAccountListComponent#1;
  let FinanceAccountInstitutionIcon;
  let <class_fields_init>#1;
  class FinanceAccountInstitutionIcon extends We.StatefulComponent { ... }
  <proto:FinanceAccountInstitutionIcon>.onRender = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:FinanceAccountInstitutionIcon>;
  FinanceAccountInstitutionIcon = function <atom:0>;
  // close_loc <class_fields_init>#1
  FinanceAccountInstitutionIcon#1 = function <atom:0>;
  lt = Be.resolveOAITextStyle(Be.OAITextSize.BodyLarge);
  ut = Be.resolveOAITextStyle(Be.OAITextSize.BodyMedium);
  yt = Be.resolveOAITextStyle(Be.OAITextSize.LabelLarge);
  ht = Be.resolveOAITextStyle(Be.OAITextSize.BodySmall);
  pt = {root: new Je.Style({backgroundColor: Be.OAIColor.Transparent, flexDirection: "column", height: "100%", width: "100%"}), scroll: new Je.Style({flexGrow: 1, flexShrink: 1, width: "100%"}), content: new Je.Style({flexDirection: "column", gap: Be.OAISpacing.OneAndHalf, width: "100%"}), list: new Je.Style({flexDirection: "column", width: "100%"}), messageContainer: new Je.Style({alignItems: "center", flexDirection: "column", gap: Be.OAISpacing.OneAndHalf, justifyContent: "center", paddingBottom: Be.OAISpacing.Five, paddingLeft: Be.OAISpacing.Three, paddingRight: Be.OAISpacing.Three, paddingTop: Be.OAISpacing.Five, width: "100%"}), messageLabel: new Je.Style({color: Be.OAIColor.TextTertiary, font: lt.font, lineHeight: lt.lineHeight, numberOfLines: 0, textAlign: "center"}), loadingList: new Je.Style({flexDirection: "column", width: "100%"}), loadingRow: new Je.Style({alignItems: "center", flexDirection: "row", gap: Be.OAISpacing.OneAndHalf, padding: Be.OAISpacing.OneAndHalf, width: "100%"}), loadingIcon: new Je.Style({backgroundColor: Be.OAIColor.BgTertiary, borderRadius: Be.OAIRadius.Pill, height: Be.OAISpacing.Five, width: Be.OAISpacing.Five}), loadingCopy: new Je.Style({flexDirection: "column", flexGrow: 1, gap: Be.OAISpacing.One}), loadingTitle: new Je.Style({backgroundColor: Be.OAIColor.BgTertiary, borderRadius: Be.OAIRadius.Sm, height: Be.OAISpacing.Two, width: 128}), loadingSubtitle: new Je.Style({backgroundColor: Be.OAIColor.BgTertiary, borderRadius: Be.OAIRadius.Sm, height: Be.OAISpacing.OneAndHalf, width: 96}), loadingBalance: new Je.Style({backgroundColor: Be.OAIColor.BgTertiary, borderRadius: Be.OAIRadius.Sm, height: Be.OAISpacing.Two, width: Be.OAISpacing.Seven}), rowContainer: new Je.Style({flexDirection: "column", width: "100%"}), accountRow: new Je.Style({alignItems: "center", alignSelf: "stretch", backgroundColor: Be.OAIColor.Transparent, borderRadius: Be.OAIRadius.Md, flexDirection: "row", gap: Be.OAISpacing.Two, marginLeft: Be.OAISpacing.One, marginRight: Be.OAISpacing.One, minHeight: Be.OAISpacing.Ten, paddingBottom: Be.OAISpacing.Two, paddingLeft: Be.OAISpacing.One, paddingRight: Be.OAISpacing.One, paddingTop: Be.OAISpacing.Two}), rowHovered: new Je.Style({backgroundColor: Be.OAIColor.InteractiveBgRowHover}), rowPressed: new Je.Style({backgroundColor: Be.OAIColor.InteractiveBgRowPress}), iconBackground: new Je.Style({alignItems: "center", backgroundColor: Be.OAIColor.BgTertiary, borderRadius: Be.OAIRadius.Pill, flexShrink: 0, height: Be.OAISpacing.Five, justifyContent: "center", width: Be.OAISpacing.Five}), institutionLogo: new Je.Style({accessibilityNavigation: "ignored", borderRadius: Be.OAIRadius.Pill, height: "100%", objectFit: "cover", width: "100%"}), accountCopy: new Je.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: Be.OAISpacing.Quarter, minWidth: 0}), accountTitle: new Je.Style({color: Be.OAIColor.TextPrimary, flexGrow: 1, flexShrink: 1, font: ut.font, lineHeight: ut.lineHeight, numberOfLines: 1}), addAccountTitle: new Je.Style({color: Be.OAIColor.TextPrimary, flexGrow: 1, flexShrink: 1, font: yt.font, lineHeight: yt.lineHeight, numberOfLines: 1}), accountSubtitle: new Je.Style({color: Be.OAIColor.TextTertiary, font: ht.font, lineHeight: ht.lineHeight, numberOfLines: 1}), accessory: new Je.Style({alignItems: "center", flexDirection: "row", flexShrink: 0, gap: Be.OAISpacing.One}), accountValues: new Je.Style({alignItems: "flex-end", flexDirection: "column"}), balance: new Je.Style({color: Be.OAIColor.TextPrimary, font: ut.font, lineHeight: ut.lineHeight, numberOfLines: 1, textAlign: "right"}), accountStatus: new Je.Style({color: Be.OAIColor.TextTertiary, font: ht.font, lineHeight: ht.lineHeight, numberOfLines: 1, textAlign: "right"}), trailingAccessory: new Je.Style({alignItems: "center", flexShrink: 0, height: nt, justifyContent: "center", width: nt}), statusIndicator: new Je.Style({borderRadius: Be.OAIRadius.Pill, height: Be.OAISpacing.One, width: Be.OAISpacing.One}), pendingStatus: new Je.Style({alignItems: "center", flexDirection: "row", flexShrink: 0, gap: Be.OAISpacing.One}), pendingInstitutionPlaceholder: new Je.Style({backgroundColor: Be.OAIColor.BgTertiary, borderRadius: Be.OAIRadius.Sm, flexGrow: 1, height: Be.OAISpacing.Two, maxWidth: 128}), section: new Je.Style({flexDirection: "column", width: "100%"}), divider: new Je.Style({backgroundColor: Be.OAIColor.BorderDefault, height: Be.OAISpacing.Px, marginLeft: Be.OAISpacing.Two, marginRight: Be.OAISpacing.Two}), sectionHeader: new Je.Style({alignItems: "center", alignSelf: "stretch", backgroundColor: Be.OAIColor.Transparent, borderRadius: Be.OAIRadius.Md, flexDirection: "row", justifyContent: "space-between", marginLeft: Be.OAISpacing.One, marginRight: Be.OAISpacing.One, minHeight: (((yt.lineHeight + ht.lineHeight) + Be.OAISpacing.Quarter) + (2 * Be.OAISpacing.Two)), paddingBottom: Be.OAISpacing.Two, paddingLeft: Be.OAISpacing.One, paddingRight: Be.OAISpacing.One, paddingTop: Be.OAISpacing.Two}), sectionCopy: new Je.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: Be.OAISpacing.Quarter, minWidth: 0}), sectionAccounts: new Je.Style({flexDirection: "column", width: "100%"}), sectionTitle: new Je.Style({color: Be.OAIColor.TextPrimary, font: yt.font, lineHeight: yt.lineHeight, numberOfLines: 1}), sectionBalance: new Je.Style({color: Be.OAIColor.TextPrimary, font: yt.font, lineHeight: yt.lineHeight, numberOfLines: 1, textAlign: "right"}), repairNotices: new Je.Style({flexDirection: "column", gap: Be.OAISpacing.One, paddingLeft: Be.OAISpacing.Two, paddingRight: Be.OAISpacing.Two, paddingTop: Be.OAISpacing.One, width: "100%"})};
  gt = pt.iconBackground.extend({borderColor: Be.OAIColor.BorderLight, borderWidth: rt, padding: rt});
  vt = gt.extend({backgroundColor: Be.OAIColor.BgPrimary, colorPaletteName: Ee.OAI_LIGHT_THEME, height: Be.OAISpacing.Five, width: Be.OAISpacing.Five});
  bt = pt.sectionHeader.extend({accessibilityCategory: "button", accessibilityId: "finance-accounts-section-credit_score"});
  St = pt.accountRow.extend({accessibilityCategory: "button", accessibilityId: "finance-account-credit-experian"});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_accounts/src/FinanceAccountListComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
