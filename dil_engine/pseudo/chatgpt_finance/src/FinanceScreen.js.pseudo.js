// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_finance/src/FinanceScreen
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

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_finance/src/FinanceScreen
// args: e
function {
  e.Initial = 0;
  e[0] = "Initial";
  e.Refresh = 1;
  e[1] = "Refresh";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=177B file=chatgpt_finance/src/FinanceScreen
// locals: e
// closure: this
function {
  let e;
  e = !this.state.sensitiveValuesHidden;
  this.setState({sensitiveValuesHidden: e});
  this.track("finance_sensitive_values_toggled", {hidden: e});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=74B file=chatgpt_finance/src/FinanceScreen
// closure: this, Re
function {
  this.loadDashboard(Re.Refresh);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=74B file=chatgpt_finance/src/FinanceScreen
// closure: this, Re
function {
  this.loadDashboard(Re.Initial);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=215B file=chatgpt_finance/src/FinanceScreen
// args: e
// closure: o, this, t
function {
  if (!((o === this.requestGeneration))) goto L_d6;
  this.activeTask = undefined;
  this.setState({dashboard: e, loadingMore: false, loadMoreFailed: false});
  this.track("finance_dashboard_page_loaded", {count: e.widgets.length, offset: t});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=255B file=chatgpt_finance/src/FinanceScreen
// args: t
// closure: o, this, ke, e
function {
  if (((o !== this.requestGeneration))) goto L_fe;
  if ((ke(t))) goto L_fe;
  if (!(e.isLoggingEnabled)) goto L_ba;
  console.warn("Finance dashboard pagination failed: ".concat(String(t)));
  this.activeTask = undefined;
  this.setState({loadingMore: false, loadMoreFailed: true});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=2 bc=514B file=chatgpt_finance/src/FinanceScreen
// locals: t, o, i
// closure: this, ke, e
function {
  let i;
  let o;
  let t;
  if (!((this.state.dashboard == null))) goto L_56;
  this.state.dashboard;
  goto L_77;
  t = undefined.nextOffset;
  if (((undefined === t))) goto L_f0;
  if (((undefined === this.repository))) goto L_f0;
  if (!(this.state.loadingMore)) goto L_f3;
  return;
  this.requestGeneration = (this.requestGeneration ++);
  o = (this.requestGeneration ++);
  this.setState({loadingMore: true, loadMoreFailed: false});
  i = this.repository.loadMore(t);
  this.activeTask = i;
  i.result.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=107B file=chatgpt_finance/src/FinanceScreen
// closure: this
function {
  return this.context.navigator.pop(true);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=107B file=chatgpt_finance/src/FinanceScreen
// closure: this
function {
  return this.context.navigator.pop(true);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=2 bc=336B file=chatgpt_finance/src/FinanceScreen
// locals: e
// closure: this
function {
  let e;
  e = this.activeTask;
  if (!((undefined !== e))) goto L_e4;
  this.requestGeneration = (this.requestGeneration + 1);
  this.activeTask = undefined;
  e.cancel();
  goto L_14f;
  // [栈深重同步 1 -> 0]
  this.context.navigator.pop(true);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=305B file=chatgpt_finance/src/FinanceScreen
// args: e
// locals: t
// closure: we, this
function {
  let t;
  if (!((e.actionKind === we.FinanceStarterActionKind.ConnectAccount))) goto L_76;
  goto L_7b;
  // [栈深重同步 3 -> 2]
  t = {action: {type: "issue_new_turn", payload: {card_id: e.id, prompt: e.prompt}}, handler: "client"};
  this.handleWidgetAction(e.id, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=386B file=chatgpt_finance/src/FinanceScreen
// args: e, t
// locals: o
// closure: this, Ae
function {
  let o;
  o = t.action.type;
  this.setState({lastActionLabel: Ae.default.financeDashboardWidgetActionLabel(o, e)});
  this.track("finance_widget_action", {actionType: o, widgetId: e});
  if (!((this.context == null))) goto L_129;
  this.context;
  goto L_181;
  if (!((undefined.handleWidgetAction == null))) goto L_153;
  undefined.handleWidgetAction;
  undefined;
  goto L_181;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=7 cpool=7 bc=242B file=chatgpt_finance/src/FinanceScreen
// locals: this, this.active_func, new.target, arguments
// closure: Re, ke, e, we, Ae, <class_fields_init>, Pe
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
  this.state = {loadingMore: false, loadMoreFailed: false, refreshing: false, sensitiveValuesHidden: false, status: Pe.Loading};
  this.requestGeneration = 0;
  this.toggleSensitiveValues = function <atom:0>;
  this.refresh = function <atom:0>;
  this.retry = function <atom:0>;
  this.loadMore = function <atom:0>;
  this.navigateBack = function <atom:0>;
  this.openStarterCard = function <atom:0>;
  this.handleWidgetAction = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=397B file=chatgpt_finance/src/FinanceScreen
// locals: this
// closure: fe, me, Re
function {
  this = this;
  if (!((this.context == null))) goto L_77;
  this.context;
  goto L_98;
  this.repository = new fe.FinanceRepository(new me.AuthenticatedFinanceApi(undefined.platformServices));
  this.setState({sensitiveValuesHidden: (true === this.viewModel.sensitiveValuesHidden)});
  this.track("finance_dashboard_opened", {});
  this.loadDashboard(Re.Initial);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=138B file=chatgpt_finance/src/FinanceScreen
// locals: this
function {
  this = this;
  this.requestGeneration = (this.requestGeneration + 1);
  if (!((this.activeTask == null))) goto L_59;
  this.activeTask;
  goto L_7d;
  undefined.cancel();
  this.activeTask = undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=809B file=chatgpt_finance/src/FinanceScreen
// closure: t, i, Te, be, this, r, n
function {
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", Te.root);
  t.setAttributeNumber("height", be.Device.getWindowHeight());
  t.setAttributeNumber("paddingTop", be.Device.getDisplayTopInset());
  this.renderHeader();
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", Te.feedScroll);
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", Te.feedContent);
  this.renderFeed();
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=1 bc=279B file=chatgpt_finance/src/FinanceScreen
// locals: this
// closure: t, i, Te, be, r, n, se, o
function {
  this = this;
  t.beginComponent(se.OAITheme, o, undefined, undefined);
  t.setViewModelProperty("mode", se.OAIThemeMode.System);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=165B file=chatgpt_finance/src/FinanceScreen
// closure: t, s, Te
function {
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", Te.backIcon);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=291B file=chatgpt_finance/src/FinanceScreen
// closure: t, h, Te, this
function {
  t.beginRender(h, undefined);
  t.setAttributeStyle("style", Te.privacyIcon);
  if (!(this.state.sensitiveValuesHidden)) goto L_f2;
  goto L_f7;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("value", "$");
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=15 cpool=2 bc=2815B file=chatgpt_finance/src/FinanceScreen
// locals: this
// closure: t, s, Te, h, d, ge, a, Ae, ae, le, l, he, c, y, g
function {
  this = this;
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", Te.header);
  t.beginComponent(ge.Pressable, a, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", Ae.default.financeDashboardBackAccessibilityLabel());
  t.setViewModelProperty("align", ae.OAIAlign.Center);
  t.setViewModelProperty("justify", ae.OAIJustify.Center);
  t.setViewModelProperty("margin", {right: le.OAISpacing.One});
  t.setViewModelProperty("onPress", this.navigateBack);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", Te.headerTitle);
  t.beginComponent(he.Text, c, undefined, undefined);
  t.setViewModelProperty("value", Ae.default.financeDashboardTitle());
  t.setViewModelProperty("size", le.OAITextSize.TitleLarge);
  t.endComponent();
  t.beginComponent(he.Text, y, undefined, undefined);
  t.setViewModelProperty("value", Ae.default.financeDashboardSubtitle());
  t.setViewModelProperty("color", le.OAIColor.TextTertiary);
  t.setViewModelProperty("size", le.OAITextSize.BodySmall);
  t.endComponent();
  t.endRender();
  t.beginComponent(ge.Pressable, g, undefined, undefined);
  if (!(this.state.sensitiveValuesHidden)) goto L_822;
  goto L_86a;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityLabel", Ae.default.financeDashboardHideValuesAccessibilityLabel());
  t.setViewModelProperty("align", ae.OAIAlign.Center);
  t.setViewModelProperty("background", le.OAIColor.BgTertiary);
  t.setViewModelProperty("justify", ae.OAIJustify.Center);
  t.setViewModelProperty("onPress", this.toggleSensitiveValues);
  t.setViewModelProperty("radius", le.OAIRadius.Pill);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=14 cpool=0 bc=3125B file=chatgpt_finance/src/FinanceScreen
// locals: e, this
// closure: t, u, Te, b, v, Pe, p, m, S, Ae, w, ye, f, le
function {
  this = this;
  let e;
  if (!((undefined !== this.state.lastActionLabel))) goto L_2af;
  t.beginRender(u, undefined);
  t.setAttributeStyle("style", Te.actionBanner);
  t.beginRender(b, undefined);
  t.setAttributeStyle("style", Te.actionBannerIcon);
  t.endRender();
  t.beginRender(v, undefined);
  t.setAttributeStyle("style", Te.actionBannerText);
  t.setAttributeString("value", this.state.lastActionLabel);
  t.endRender();
  t.endRender();
  if (!((this.state.status === Pe.Loading))) goto L_388;
  if (!((undefined === this.state.dashboard))) goto L_388;
  this.renderLoadingState();
  return;
  if (!((this.state.status === Pe.Failed))) goto L_460;
  if (!((undefined === this.state.dashboard))) goto L_460;
  this.renderErrorState();
  return;
  e = this.state.dashboard;
  if (!((undefined !== e))) goto L_c34;
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", Te.feedSummary);
  t.beginRender(m, undefined);
  t.beginRender(S, undefined);
  t.setAttributeStyle("style", Te.feedTitle);
  t.setAttributeString("value", Ae.default.financeDashboardOverviewTitle());
  t.endRender();
  t.beginRender(w, undefined);
  t.setAttributeStyle("style", Te.feedSubtitle);
  if (!(this.state.refreshing)) goto L_7a8;
  goto L_7f0;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("value", Ae.default.financeDashboardUpdatedStatus());
  t.endRender();
  t.endRender();
  t.beginComponent(ye.Button, f, undefined, undefined);
  t.setViewModelProperty("label", Ae.default.financeDashboardRefresh());
  t.setViewModelProperty("loading", this.state.refreshing);
  t.setViewModelProperty("onPress", this.refresh);
  t.setViewModelProperty("size", le.OAIControlSize.Sm);
  t.setViewModelProperty("variant", ye.ButtonVariant.Ghost);
  t.endComponent();
  t.endRender();
  if (!((e.starterCards.length > 0))) goto L_b71;
  this.renderStarterCards(e.starterCards);
  if (!((0 === e.widgets.length))) goto L_bc2;
  goto L_c0b;
  // [栈深重同步 1 -> 0]
  this.renderWidgetRows(e.widgets);
  this.renderPagination(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=chatgpt_finance/src/FinanceScreen
// closure: this, e
function {
  return this.openStarterCard(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=0 bc=1204B file=chatgpt_finance/src/FinanceScreen
// closure: t, I, Te, T, M, Ie, e, O, V, x
function {
  t.beginRender(I, undefined);
  t.setAttributeStyle("style", Te.starterCardHeader);
  t.beginRender(T, undefined);
  t.setAttributeStyle("style", Te.starterIcon);
  t.beginRender(M, undefined);
  t.setAttributeStyle("style", Te.starterIconLabel);
  t.setAttributeString("value", Ie(e));
  t.endRender();
  t.endRender();
  t.beginRender(O, undefined);
  t.setAttributeStyle("style", Te.starterChevron);
  t.endRender();
  t.endRender();
  t.beginRender(V, undefined);
  t.setAttributeStyle("style", Te.starterTitle);
  t.setAttributeString("value", e.title);
  t.endRender();
  t.beginRender(x, undefined);
  t.setAttributeStyle("style", Te.starterDescription);
  t.setAttributeString("value", e.description);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=14 cpool=2 bc=1004B file=chatgpt_finance/src/FinanceScreen
// args: e
// closure: this, t, I, Te, T, M, Ie, O, V, x, ge, k, Ae, le
function {
  t.beginComponent(ge.Pressable, k, e.id, undefined);
  t.setViewModelProperty("accessibilityLabel", Ae.default.financeDashboardStarterCardAccessibilityLabel(e.title, e.description));
  t.setViewModelProperty("background", le.OAIColor.BgElevatedPrimary);
  t.setViewModelProperty("borderColor", le.OAIColor.BorderLight);
  t.setViewModelProperty("margin", {right: le.OAISpacing.OneAndHalf});
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setViewModelProperty("padding", le.OAISpacing.Two);
  t.setViewModelProperty("radius", le.OAIRadius.Xl);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=17 cpool=1 bc=819B file=chatgpt_finance/src/FinanceScreen
// args: e
// locals: this
// closure: t, I, Te, T, M, Ie, O, V, x, ge, k, Ae, le, A, P, R, C
function {
  this = this;
  t.beginRender(A, undefined);
  t.setAttributeStyle("style", Te.starterSection);
  t.beginRender(P, undefined);
  t.setAttributeStyle("style", Te.sectionLabel);
  t.setAttributeString("value", Ae.default.financeDashboardStarterSectionTitle());
  t.endRender();
  t.beginRender(R, undefined);
  t.setAttributeStyle("style", Te.starterScroll);
  t.beginRender(C, undefined);
  t.setAttributeStyle("style", Te.starterRow);
  e.forEach(function <atom:0>);
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_finance/src/FinanceScreen
// args: e
function {
  return e.id;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=847B file=chatgpt_finance/src/FinanceScreen
// args: e
// closure: t, F, Te, Se, L, this
function {
  t.beginRender(F, e.id);
  t.setAttributeStyle("style", Te.widgetCell);
  if (!(this.state.sensitiveValuesHidden)) goto L_180;
  goto L_185;
  // [栈深重同步 9 -> 8]
  t.beginComponent(Se.FinanceDilWidget, L, "".concat(e.id, "-", "visible"), undefined);
  if ((t.hasContext())) goto L_25e;
  if (!((this.context == null))) goto L_235;
  this.context;
  goto L_256;
  t.setContext({onAction: this.handleWidgetAction, platformServices: undefined.platformServices});
  t.setViewModelProperty("sensitiveValuesHidden", this.state.sensitiveValuesHidden);
  t.setViewModelProperty("widget", e);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=9 cpool=2 bc=573B file=chatgpt_finance/src/FinanceScreen
// args: e
// closure: t, F, Te, Se, L, this, D, we, q
function {
  t.beginRender(D, e.map(function <atom:0>).join("|"));
  t.setAttributeStyle("style", Te.widgetRow);
  e.map(function <atom:0>);
  if (!((1 === e.length))) goto L_214;
  if (!((e[0].span === we.FinanceWidgetSpan.Half))) goto L_214;
  t.beginRender(q, undefined);
  t.setAttributeStyle("style", Te.widgetCell);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=12 cpool=1 bc=493B file=chatgpt_finance/src/FinanceScreen
// args: e
// locals: this
// closure: t, F, Te, Se, L, D, we, q, N, B, Ae, Ce
function {
  this = this;
  t.beginRender(N, undefined);
  t.setAttributeStyle("style", Te.widgetSection);
  t.beginRender(B, undefined);
  t.setAttributeStyle("style", Te.sectionLabel);
  t.setAttributeString("value", Ae.default.financeDashboardWidgetsSectionTitle());
  t.endRender();
  Ce(e).forEach(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=11 cpool=0 bc=2185B file=chatgpt_finance/src/FinanceScreen
// args: e
// locals: this
// closure: t, _, Te, H, Ae, G, E, ye, W, le, U
function {
  this = this;
  if (!(this.state.loadingMore)) goto L_20b;
  t.beginRender(_, undefined);
  t.setAttributeStyle("style", Te.paginationStatus);
  t.beginRender(H, undefined);
  t.setAttributeStyle("style", Te.paginationLabel);
  t.setAttributeString("value", Ae.default.financeDashboardLoadingMoreStatus());
  t.endRender();
  t.endRender();
  return undefined;
  if (!(this.state.loadMoreFailed)) goto L_635;
  t.beginRender(G, undefined);
  t.setAttributeStyle("style", Te.paginationStatus);
  t.beginRender(E, undefined);
  t.setAttributeStyle("style", Te.paginationError);
  t.setAttributeString("value", Ae.default.financeDashboardLoadingMoreError());
  t.endRender();
  t.beginComponent(ye.Button, W, undefined, undefined);
  t.setViewModelProperty("label", Ae.default.financeDashboardTryAgain());
  t.setViewModelProperty("onPress", this.loadMore);
  t.setViewModelProperty("size", le.OAIControlSize.Sm);
  t.setViewModelProperty("variant", ye.ButtonVariant.Secondary);
  t.endComponent();
  t.endRender();
  return undefined;
  if (!((undefined !== e.nextOffset))) goto L_886;
  t.beginComponent(ye.Button, U, undefined, undefined);
  t.setViewModelProperty("label", Ae.default.financeDashboardLoadMore());
  t.setViewModelProperty("margin", {top: le.OAISpacing.Two});
  t.setViewModelProperty("onPress", this.loadMore);
  t.setViewModelProperty("variant", ye.ButtonVariant.Secondary);
  t.endComponent();
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=816B file=chatgpt_finance/src/FinanceScreen
// args: e
// closure: t, K, Te, Q, Y, X
function {
  t.beginRender(K, "finance-loading-".concat(e));
  t.setAttributeStyle("style", Te.loadingCard);
  t.beginRender(Q, undefined);
  t.setAttributeStyle("style", Te.loadingLine);
  t.setAttributeString("width", ((64 - (8 * e)) + "%"));
  t.endRender();
  t.beginRender(Y, undefined);
  t.setAttributeStyle("style", Te.loadingValue);
  t.setAttributeString("width", ((46 + (5 * e)) + "%"));
  t.endRender();
  t.beginRender(X, undefined);
  t.setAttributeStyle("style", Te.loadingLine);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=1 bc=540B file=chatgpt_finance/src/FinanceScreen
// closure: t, K, Te, Q, Y, X, z, j, J
function {
  t.beginRender(z, undefined);
  t.setAttributeStyle("style", Te.loadingState);
  t.beginRender(j, undefined);
  t.setAttributeStyle("style", Te.loadingHeading);
  t.endRender();
  t.beginRender(J, undefined);
  t.setAttributeStyle("style", Te.loadingSubheading);
  t.endRender();
  [0, 1, 2].forEach(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=10 cpool=0 bc=1333B file=chatgpt_finance/src/FinanceScreen
// locals: this
// closure: t, Z, Te, $, ee, Ae, te, ye, oe, le
function {
  this = this;
  t.beginRender(Z, undefined);
  t.setAttributeStyle("style", Te.centerState);
  t.beginRender($, undefined);
  t.setAttributeStyle("style", Te.centerIcon);
  t.endRender();
  t.beginRender(ee, undefined);
  t.setAttributeStyle("style", Te.centerTitle);
  t.setAttributeString("value", Ae.default.financeDashboardErrorTitle());
  t.endRender();
  t.beginRender(te, undefined);
  t.setAttributeStyle("style", Te.centerMessage);
  t.setAttributeString("value", Ae.default.financeDashboardErrorDetail());
  t.endRender();
  t.beginComponent(ye.Button, oe, undefined, undefined);
  t.setViewModelProperty("label", Ae.default.financeDashboardTryAgain());
  t.setViewModelProperty("margin", {top: le.OAISpacing.TwoPointFive});
  t.setViewModelProperty("onPress", this.retry);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=894B file=chatgpt_finance/src/FinanceScreen
// closure: t, ie, Te, re, ne, Ae, de
function {
  t.beginRender(ie, undefined);
  t.setAttributeStyle("style", Te.emptyState);
  t.beginRender(re, undefined);
  t.setAttributeStyle("style", Te.centerIcon);
  t.endRender();
  t.beginRender(ne, undefined);
  t.setAttributeStyle("style", Te.centerTitle);
  t.setAttributeString("value", Ae.default.financeDashboardEmptyTitle());
  t.endRender();
  t.beginRender(de, undefined);
  t.setAttributeStyle("style", Te.centerMessage);
  t.setAttributeString("value", Ae.default.financeDashboardEmptyDetail());
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=271B file=chatgpt_finance/src/FinanceScreen
// args: e
// closure: o, this, Pe
function {
  if (!((o === this.requestGeneration))) goto L_10e;
  this.activeTask = undefined;
  this.setState({dashboard: e, status: Pe.Loaded, refreshing: false});
  this.track("finance_dashboard_loaded", {starterCardCount: e.starterCards.length, widgetCount: e.widgets.length});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=283B file=chatgpt_finance/src/FinanceScreen
// args: t
// closure: o, this, ke, e, Pe
function {
  if (((o !== this.requestGeneration))) goto L_11a;
  if ((ke(t))) goto L_11a;
  if (!(e.isLoggingEnabled)) goto L_b8;
  console.warn("Finance dashboard failed: ".concat(String(t)));
  this.activeTask = undefined;
  this.setState({status: Pe.Failed, refreshing: false});
  return;
}

// fn <atom:0>  args=1 vars=5 closure=4 cpool=2 bc=602B file=chatgpt_finance/src/FinanceScreen
// args: t
// locals: o, i, r, this
// closure: Pe, ke, e, Re
function {
  this = this;
  let r;
  let i;
  let o;
  if (!((undefined === this.repository))) goto L_32;
  return;
  if (!((this.activeTask == null))) goto L_5c;
  this.activeTask;
  goto L_80;
  undefined.cancel();
  this.activeTask = undefined;
  this.requestGeneration = (this.requestGeneration ++);
  o = (this.requestGeneration ++);
  i = this.repository.cachedDashboard();
  if (!((undefined === i))) goto L_157;
  goto L_179;
  // [栈深重同步 4 -> 3]
  this.setState({dashboard: i, status: Pe.Loaded, refreshing: (t === Re.Refresh), loadingMore: false, loadMoreFailed: false});
  r = this.repository.loadDashboard();
  this.activeTask = r;
  r.result.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=133B file=chatgpt_finance/src/FinanceScreen
// args: e, t
// locals: this
function {
  this = this;
  if (!((this.context == null))) goto L_2c;
  this.context;
  goto L_84;
  if (!((undefined.trackEvent == null))) goto L_56;
  undefined.trackEvent;
  undefined;
  goto L_84;
  // [栈深重同步 1 -> 2]
  return;
}

// fn Ce  args=1 vars=4 closure=1 cpool=0 bc=377B file=chatgpt_finance/src/FinanceScreen
// args: e
// locals: t, o, i
// closure: we
function {
  let o;
  let t;
  t = [];
  o = undefined;
  let i;
  for (const i of e) {
    if (!((i.span !== we.FinanceWidgetSpan.Full))) goto L_ca;
    if (!((undefined === o))) goto L_92;
    o = i;
    goto L_134;
    // [栈深重同步 4 -> 3]
    t.push([o, i]);
    o = undefined;
    goto L_134;
    // [栈深重同步 4 -> 3]
    if (!((undefined !== o))) goto L_100;
    t.push([o]);
    o = undefined;
    undefined;
    t.push([i]);
  }
  if (!((undefined !== o))) goto L_174;
  t.push([o]);
  return t;
}

// fn ke  args=1 vars=1 closure=2 cpool=0 bc=147B file=chatgpt_finance/src/FinanceScreen
// args: e
// closure: me, ce
function {
  if (!((e instanceof me.FinanceRequestError))) goto L_92;
  return (e.resultKind === ce.OAINetworkResultKind.Cancelled);
}

// fn Ie  args=1 vars=1 closure=1 cpool=0 bc=162B file=chatgpt_finance/src/FinanceScreen
// args: e
// closure: we
function {
  if (!((e.actionKind === we.FinanceStarterActionKind.ConnectAccount))) goto L_70;
  return "+";
  if (!((undefined === e.icon))) goto L_9c;
  return "◇";
  return "✦";
}

// fn <atom:0>  args=3 vars=89 closure=0 cpool=22 bc=9666B file=chatgpt_finance/src/FinanceScreen
// args: require, module, exports
// locals: e, t, o, i, r, n, d, a, s, l, c, y, g, h, u, b, v, p, m, S, w, f, A, P, R, C, k, I, T, M, O, V, x, N, B, D, F, L, q, _, H, G, E, W, U, z, j, J, K, Q, Y, X, Z, $, ee, te, oe, ie, re, ne, de, ae, se, le, ce, ye, ge, he, ue, be, ve, pe, me, Se, we, fe, Ae, Pe, Re, FinanceScreen, <class_fields_init>, FinanceScreen#1, Ce, ke, Ie, Te
function {
  Ce = function Ce;
  ke = function ke;
  Ie = function Ie;
  let Te;
  let FinanceScreen#1;
  let Ae;
  let fe;
  let we;
  let Se;
  let me;
  let pe;
  let ve;
  let be;
  let ue;
  let he;
  let ge;
  let ye;
  let ce;
  let le;
  let se;
  let ae;
  let de;
  let ne;
  let re;
  let ie;
  let oe;
  let te;
  let ee;
  let $;
  let Z;
  let X;
  let Y;
  let Q;
  let K;
  let J;
  let j;
  let z;
  let U;
  let W;
  let E;
  let G;
  let H;
  let _;
  let q;
  let L;
  let F;
  let D;
  let B;
  let N;
  let x;
  let V;
  let O;
  let M;
  let T;
  let I;
  let k;
  let C;
  let R;
  let P;
  let A;
  let f;
  let w;
  let S;
  let m;
  let p;
  let v;
  let b;
  let u;
  let h;
  let g;
  let y;
  let c;
  let l;
  let s;
  let a;
  let d;
  let n;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceScreen = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeComponentPrototype(undefined, "wqWxEwqlITV5n2Ko");
  i = t.makeNodePrototype("view", ["accessibilityId", "chatgpt.finance"], "tINsNMhxjKr4SUlE");
  r = t.makeNodePrototype("scroll", undefined, "JgLqTyYQKcna5XLH");
  n = t.makeNodePrototype("view", undefined, "PyQ54Af8heMI3oae");
  d = t.makeNodePrototype("view", undefined, "9WYQeRS9oTpb1HHC");
  a = t.makeComponentPrototype(["height", 40, "width", 32], "m1t1ZYEWXUdw7YfG");
  s = t.makeNodePrototype("label", ["value", "‹"], "ilHRGTSUR6Q0TOQ4");
  l = t.makeNodePrototype("view", undefined, "mYt9Tq6J9U00h-9W");
  c = t.makeComponentPrototype(undefined, "qB7SOhmAo_pHUQk7");
  y = t.makeComponentPrototype(undefined, "JAxUkjcdMqVVmR4W");
  g = t.makeComponentPrototype(["height", 36, "width", 52], "7z8EQB2cucVHIAd8");
  h = t.makeNodePrototype("label", undefined, "iEn_3TAaPk0JmuCQ");
  u = t.makeNodePrototype("view", undefined, "S2z3If5jsAotw8Wb");
  b = t.makeNodePrototype("label", ["value", "✓"], "40mNrG0wPi7-ol_9");
  v = t.makeNodePrototype("label", ["numberOfLines", 1], "9QQI2y9-h1GUDKqK");
  p = t.makeNodePrototype("view", undefined, "qF3RE0ELv2nle1W8");
  m = t.makeNodePrototype("view", ["flexGrow", 1], "Uq0_TGRVGpQhh5I2");
  S = t.makeNodePrototype("label", undefined, "Rc-rbZ3T7NzjvjXj");
  w = t.makeNodePrototype("label", undefined, "TktOZjFrLiP8JkYu");
  f = t.makeComponentPrototype(undefined, "UTMzvxj_s5c_LT3G");
  A = t.makeNodePrototype("view", undefined, "erLaD11K4eB6bu48");
  P = t.makeNodePrototype("label", undefined, "9wgjWUcqOush_JMD");
  R = t.makeNodePrototype("scroll", ["horizontal", true], "mvxzYUb4QCTNzZel");
  C = t.makeNodePrototype("view", undefined, "XXCGMjUKgEeozG3B");
  k = t.makeComponentPrototype(["borderWidth", 1, "height", 132, "width", 244], "27FPmDu-YSxJWIzz");
  I = t.makeNodePrototype("view", undefined, "PpnJuIpwGETtvz3T");
  T = t.makeNodePrototype("view", undefined, "3tB5NbJs3XktT-v4");
  M = t.makeNodePrototype("label", undefined, "eElisY6dNiPytWwr");
  O = t.makeNodePrototype("label", ["value", "›"], "fEh6tPJjgtzypQyp");
  V = t.makeNodePrototype("label", ["numberOfLines", 1], "QVgHkwAC9TlFEref");
  x = t.makeNodePrototype("label", ["numberOfLines", 2], "YaK1muTYqO4OTHJy");
  N = t.makeNodePrototype("view", undefined, "5tHIF4Ggh40npDtz");
  B = t.makeNodePrototype("label", undefined, "dk7guM53EUKHBz-D");
  D = t.makeNodePrototype("view", undefined, "VlLe4NlJgV_qhD4n");
  F = t.makeNodePrototype("view", undefined, "0jUaz-gCNuZ-6G-l");
  L = t.makeComponentPrototype(undefined, "pWt411WUUTxs_Gjn");
  q = t.makeNodePrototype("view", undefined, "59vm3vMjAKZ8qDEh");
  _ = t.makeNodePrototype("view", undefined, "q5AfcKOORr0tVcmH");
  H = t.makeNodePrototype("label", undefined, "pNL5aFDvEnyLY1ff");
  G = t.makeNodePrototype("view", undefined, "AwDIcG8h1IPD8cX-");
  E = t.makeNodePrototype("label", undefined, "6Ua9cC2yZI3VxI9M");
  W = t.makeComponentPrototype(undefined, "MS5fZV18J5uLMrQ1");
  U = t.makeComponentPrototype(["block", true], "6OxqslLv6m_bCFDv");
  z = t.makeNodePrototype("view", undefined, "0jR8MremmA6gikae");
  j = t.makeNodePrototype("view", ["width", "42%"], "co67CUp8ZztgOb3g");
  J = t.makeNodePrototype("view", ["width", "70%"], "gpDUBQ7YIGV_Noqe");
  K = t.makeNodePrototype("view", undefined, "SWX9u0lumG-PoGXe");
  Q = t.makeNodePrototype("view", undefined, "bKs_-V3mCp4tIbfq");
  Y = t.makeNodePrototype("view", undefined, "61YY3GWzBi3CyS20");
  X = t.makeNodePrototype("view", ["width", "82%"], "U2rG0yijiSxO5lur");
  Z = t.makeNodePrototype("view", undefined, "DMOSur3u-0hB60TD");
  $ = t.makeNodePrototype("label", ["value", "!"], "zuQe8BF9WeA5Rtb6");
  ee = t.makeNodePrototype("label", undefined, "KkAmZG9yuXXyt3SI");
  te = t.makeNodePrototype("label", undefined, "_3ixgJSLPxyfuPc9");
  oe = t.makeComponentPrototype(undefined, "tH6dmTbqNr00Xd75");
  ie = t.makeNodePrototype("view", undefined, "WDtkGDrC-o2dgbno");
  re = t.makeNodePrototype("label", ["value", "$"], "M1WUU2fMdRbqO33_");
  ne = t.makeNodePrototype("label", undefined, "wgJ8zHbU1TJYHiAU");
  de = t.makeNodePrototype("label", undefined, "BC1S1cchDfMgcoF5");
  ae = require("oai_core/src/OAIAttributes");
  se = require("oai_core/src/OAITheme");
  le = require("oai_core/src/OAITokens");
  ce = require("oai_platform_services/src/OAINetworkClient");
  ye = require("oai_ui/src/components/Button");
  ge = require("oai_ui/src/components/Pressable");
  he = require("oai_ui/src/components/Text");
  ue = require("valdi_core/src/Component");
  be = require("valdi_core/src/Device");
  ve = require("valdi_core/src/Style");
  pe = require("valdi_core/src/SystemFont");
  me = require("./FinanceApi");
  Se = require("./FinanceDilWidget");
  we = require("./FinanceModels");
  fe = require("./FinanceRepository");
  Ae = require("./Strings");
  if ((Pe)) goto L_ec5;
  Pe = {};
  !function <atom:0>({});
  if ((Re)) goto L_ed3;
  Re = {};
  function <atom:0>({});
  let FinanceScreen;
  let <class_fields_init>;
  class FinanceScreen extends ue.StatefulComponent { ... }
  <proto:FinanceScreen>.onCreate = function <atom:0>;
  <proto:FinanceScreen>.onDestroy = function <atom:0>;
  <proto:FinanceScreen>.onRender = function <atom:0>;
  <proto:FinanceScreen>.renderHeader = function <atom:0>;
  <proto:FinanceScreen>.renderFeed = function <atom:0>;
  <proto:FinanceScreen>.renderStarterCards = function <atom:0>;
  <proto:FinanceScreen>.renderWidgetRows = function <atom:0>;
  <proto:FinanceScreen>.renderPagination = function <atom:0>;
  <proto:FinanceScreen>.renderLoadingState = function <atom:0>;
  <proto:FinanceScreen>.renderErrorState = function <atom:0>;
  <proto:FinanceScreen>.renderEmptyState = function <atom:0>;
  <proto:FinanceScreen>.loadDashboard = function <atom:0>;
  <proto:FinanceScreen>.track = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceScreen>;
  FinanceScreen = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceScreen#1 = function <atom:0>;
  exports.FinanceScreen = FinanceScreen#1;
  Te = {root: new ve.Style({backgroundColor: le.OAIColor.BgPrimary, flexDirection: "column", height: "100%", width: "100%"}), header: new ve.Style({alignItems: "center", borderColor: le.OAIColor.BorderLight, borderWidth: 1, flexDirection: "row", minHeight: 74, padding: "14 16", width: "100%"}), headerTitle: new ve.Style({flexGrow: 1, minWidth: 0}), backIcon: new ve.Style({color: le.OAIColor.IconPrimary, font: pe.systemFont(34), textAlign: "center", width: "100%"}), privacyIcon: new ve.Style({color: le.OAIColor.TextPrimary, font: pe.systemBoldFont(13), textAlign: "center", width: "100%"}), feedScroll: new ve.Style({flexGrow: 1, flexShrink: 1, height: 1, width: "100%"}), feedContent: new ve.Style({minHeight: "100%", padding: "18 16 32", width: "100%"}), actionBanner: new ve.Style({alignItems: "center", backgroundColor: le.OAIColor.BgStatusSuccess, borderRadius: 10, flexDirection: "row", marginBottom: 14, padding: "10 12", width: "100%"}), actionBannerIcon: new ve.Style({color: le.OAIColor.TextStatusSuccess, font: pe.systemBoldFont(14), marginRight: 8}), actionBannerText: new ve.Style({color: le.OAIColor.TextStatusSuccess, flexGrow: 1, font: pe.systemFont(12)}), feedSummary: new ve.Style({alignItems: "center", flexDirection: "row", marginBottom: 18, width: "100%"}), feedTitle: new ve.Style({color: le.OAIColor.TextPrimary, font: pe.systemBoldFont(22), width: "100%"}), feedSubtitle: new ve.Style({color: le.OAIColor.TextTertiary, font: pe.systemFont(12), marginTop: 3, width: "100%"}), sectionLabel: new ve.Style({color: le.OAIColor.TextSecondary, font: pe.systemBoldFont(12), letterSpacing: 0.3, marginBottom: 10, width: "100%"}), starterSection: new ve.Style({marginBottom: 22, width: "100%"}), starterScroll: new ve.Style({height: 132, width: "100%"}), starterRow: new ve.Style({flexDirection: "row", height: 132}), starterCardHeader: new ve.Style({alignItems: "center", flexDirection: "row", marginBottom: 11, width: "100%"}), starterIcon: new ve.Style({alignItems: "center", backgroundColor: le.OAIColor.ThemeGreenBackground, borderRadius: 16, height: 32, justifyContent: "center", width: 32}), starterIconLabel: new ve.Style({color: le.OAIColor.ThemeGreenText, font: pe.systemBoldFont(17), textAlign: "center", width: "100%"}), starterChevron: new ve.Style({color: le.OAIColor.IconTertiary, flexGrow: 1, font: pe.systemFont(21), textAlign: "right"}), starterTitle: new ve.Style({color: le.OAIColor.TextPrimary, font: pe.systemBoldFont(14), textOverflow: "ellipsis", width: "100%"}), starterDescription: new ve.Style({color: le.OAIColor.TextSecondary, font: pe.systemFont(12), lineHeightMultiple: 1.15, marginTop: 4, textOverflow: "ellipsis", width: "100%"}), widgetSection: new ve.Style({width: "100%"}), widgetRow: new ve.Style({alignItems: "flex-start", flexDirection: "row", gap: le.OAISpacing.One, marginBottom: le.OAISpacing.One, width: "100%"}), widgetCell: new ve.Style({flexBasis: 1, flexGrow: 1, flexShrink: 1, minHeight: 96, minWidth: 0}), paginationStatus: new ve.Style({alignItems: "center", padding: "18 0 4", width: "100%"}), paginationLabel: new ve.Style({color: le.OAIColor.TextTertiary, font: pe.systemFont(13)}), paginationError: new ve.Style({color: le.OAIColor.TextStatusError, font: pe.systemFont(13), marginBottom: 10}), loadingState: new ve.Style({paddingTop: 8, width: "100%"}), loadingHeading: new ve.Style({backgroundColor: le.OAIColor.BgTertiary, borderRadius: 5, height: 22}), loadingSubheading: new ve.Style({backgroundColor: le.OAIColor.BgSecondary, borderRadius: 4, height: 12, marginBottom: 24, marginTop: 8}), loadingCard: new ve.Style({backgroundColor: le.OAIColor.BgElevatedPrimary, borderColor: le.OAIColor.BorderLight, borderRadius: 16, borderWidth: 1, height: 142, marginBottom: 10, padding: 20, width: "100%"}), loadingLine: new ve.Style({backgroundColor: le.OAIColor.BgTertiary, borderRadius: 4, height: 12, marginBottom: 14}), loadingValue: new ve.Style({backgroundColor: le.OAIColor.BgSecondary, borderRadius: 5, height: 27, marginBottom: 18}), centerState: new ve.Style({alignItems: "center", justifyContent: "center", minHeight: 520, padding: "52 28", width: "100%"}), emptyState: new ve.Style({alignItems: "center", backgroundColor: le.OAIColor.BgTertiary, borderRadius: 16, justifyContent: "center", minHeight: 220, padding: "36 28", width: "100%"}), centerIcon: new ve.Style({color: le.OAIColor.IconTertiary, font: pe.systemBoldFont(30), marginBottom: 14, textAlign: "center"}), centerTitle: new ve.Style({color: le.OAIColor.TextPrimary, font: pe.systemBoldFont(19), textAlign: "center", width: "100%"}), centerMessage: new ve.Style({color: le.OAIColor.TextSecondary, font: pe.systemFont(14), lineHeightMultiple: 1.3, marginTop: 8, numberOfLines: 0, textAlign: "center", width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceScreen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
