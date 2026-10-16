// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
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

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
function {
  e.Date = 0;
  e[0] = "Date";
  e.Account = 1;
  e[1] = "Account";
  e.Category = 2;
  e[2] = "Category";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=154B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: this, e
function {
  this.searchTimer = undefined;
  this.setState({debouncedSearch: e});
  null;
  this.currentFilters();
  this.loadTransactions(undefined, false, {search: e});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=142B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// closure: this, Me, He
function {
  this.setState({search: e});
  this.cancelSearchTimer();
  this.searchTimer = Me.setTimeoutInterruptible(function <atom:0>, He);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=122B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: this
function {
  this.setState({isFilterMenuOpen: !this.state.isFilterMenuOpen, openFilter: undefined});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=202B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: this
function {
  if ((this.state.isFilterMenuOpen)) goto L_90;
  if (!((undefined !== this.state.openFilter))) goto L_c9;
  this.setState({isFilterMenuOpen: false, openFilter: undefined});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=307B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// closure: this
function {
  if (!(this.usesHostScroll)) goto L_132;
  if (!(this.state.isFilterMenuOpen)) goto L_132;
  if (!((e.height !== this.state.filterMenuHeight))) goto L_132;
  this.setState({filterMenuHeight: e.height});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=189B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: this, ze
function {
  if (!((this.state.openFilter === ze.Date))) goto L_92;
  goto L_b4;
  // [栈深重同步 4 -> 3]
  this.setState({openFilter: ze.Date});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=189B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: this, ze
function {
  if (!((this.state.openFilter === ze.Account))) goto L_92;
  goto L_b4;
  // [栈深重同步 4 -> 3]
  this.setState({openFilter: ze.Account});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=189B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: this, ze
function {
  if (!((this.state.openFilter === ze.Category))) goto L_92;
  goto L_b4;
  // [栈深重同步 4 -> 3]
  this.setState({openFilter: ze.Category});
  return;
}

// fn <atom:0>  args=2 vars=6 closure=3 cpool=0 bc=811B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e, t
// locals: t#1, i, t#2, t#3
// closure: this, ze, Qe
function {
  if (!((this.state.openFilter === ze.Date))) goto L_11b;
  let i;
  let t#1;
  t#1 = Qe(e);
  if (!((undefined === t#1))) goto L_7f;
  return;
  null;
  this.currentFilters();
  i = {dateRange: t#1};
  this.setState({dateRange: t#1, openFilter: undefined});
  this.loadTransactions(undefined, false, i);
  return;
  if (!((this.state.openFilter === ze.Account))) goto L_223;
  let t#2;
  null;
  this.currentFilters();
  t#2 = {accountId: e};
  this.setState({accountId: e, openFilter: undefined});
  this.loadTransactions(undefined, false, t#2);
  return;
  if (!((this.state.openFilter === ze.Category))) goto L_32a;
  let t#3;
  null;
  this.currentFilters();
  t#3 = {categoryId: e};
  this.setState({categoryId: e, openFilter: undefined});
  this.loadTransactions(undefined, false, t#3);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=314B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: e
// closure: this, xe
function {
  let e;
  null;
  this.currentFilters();
  e = {accountId: "", categoryId: "", dateRange: xe.FinanceTransactionDateRange.All};
  this.setState({accountId: "", categoryId: "", dateRange: xe.FinanceTransactionDateRange.All, openFilter: undefined});
  this.loadTransactions(undefined, false, e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=86B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// closure: this
function {
  this.scrollContentHeight = e.height;
  this.loadMoreIfNearBottom();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=299B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// locals: t, i
// closure: this
function {
  let i;
  let t;
  t = Math.max(0, e.y);
  i = (t !== this.scrollOffset);
  this.scrollOffset = t;
  if (!(i)) goto L_102;
  if (!(this.state.isFilterMenuOpen)) goto L_102;
  this.closeFilterMenu();
  this.loadMoreIfNearBottom();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: this
function {
  this.loadMoreIfNearBottom();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=193B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: this
function {
  if (!(this.canLoadMore)) goto L_c0;
  this.loadTransactions(this.state.nextCursor, true, this.currentFilters());
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=314B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: e
// closure: this
function {
  let e;
  e = this.state.failedRequest;
  if (!((undefined !== e))) goto L_e8;
  goto L_139;
  // [栈深重同步 1 -> 0]
  this.loadTransactions(undefined, false, this.currentFilters());
  return;
}

// fn <atom:0>  args=0 vars=4 closure=8 cpool=14 bc=480B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: this, this.active_func, new.target, arguments
// closure: Me, He, ze, Qe, xe, <class_fields_init>, Ee, Fe
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
  null;
  xe.EMPTY_FINANCE_TRANSACTION_FILTER_STATE;
  this.state = {debouncedSearch: "", isFilterMenuOpen: false, isLoadingMore: false, profileAccounts: [], status: Ee.Loading, transactions: []};
  this.requestGeneration = 0;
  this.profileGeneration = 0;
  this.scrollContentHeight = 0;
  this.scrollOffset = 0;
  this.scrollRef = new Fe.ElementRef();
  this.handleSearchChange = function <atom:0>;
  this.toggleFilterMenu = function <atom:0>;
  this.closeFilterMenu = function <atom:0>;
  this.handleFilterMenuLayout = function <atom:0>;
  this.toggleDateFilter = function <atom:0>;
  this.toggleAccountFilter = function <atom:0>;
  this.toggleCategoryFilter = function <atom:0>;
  this.handleFilterChange = function <atom:0>;
  this.clearFilters = function <atom:0>;
  this.handleContentSizeChange = function <atom:0>;
  this.handleScroll = function <atom:0>;
  this.handleScrollLayoutComplete = function <atom:0>;
  this.loadMore = function <atom:0>;
  this.retry = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=595B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: e, this
// closure: Oe, ue
function {
  this = this;
  if (!(Oe.isVersionAtLeast(59))) goto L_13a;
  let e;
  if (!((this.context == null))) goto L_5b;
  this.context;
  goto L_7c;
  e = undefined.platformServices;
  if (!((e == null))) goto L_89;
  e;
  goto L_aa;
  if (!((undefined !== undefined.apiService))) goto L_139;
  if (!((this.context == null))) goto L_dd;
  this.context;
  goto L_fe;
  if (!((undefined !== undefined.requestContextProvider))) goto L_139;
  this.financeApi = new ue.AuthenticatedFinanceApi(e);
  new ue.AuthenticatedFinanceApi(e);
  this.observedDismissFiltersKey = this.dismissFiltersKey;
  this.observedRefreshKey = this.viewModel.refreshKey;
  this.observedLoadMoreKey = this.loadMoreKey;
  this.loadProfile();
  this.loadTransactions(undefined, false, this.currentFilters());
  return;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=691B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: e, t, i, n, this
function {
  this = this;
  let n;
  let i;
  let t;
  let e;
  e = this.dismissFiltersKey;
  if (!((undefined !== e))) goto L_63;
  t = (e !== this.observedDismissFiltersKey);
  this.observedDismissFiltersKey = e;
  if (!(t)) goto L_9f;
  this.closeFilterMenu();
  i = this.loadMoreKey;
  if (!((undefined !== i))) goto L_f4;
  n = (i !== this.observedLoadMoreKey);
  this.observedLoadMoreKey = i;
  if (!((this.viewModel.refreshKey !== this.observedRefreshKey))) goto L_237;
  this.observedRefreshKey = this.viewModel.refreshKey;
  this.loadProfile();
  goto L_28b;
  // [栈深重同步 1 -> 0]
  if (!(this.usesHostScroll)) goto L_28b;
  if (!(n)) goto L_28b;
  this.loadMore();
  this.reportPaginationState();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=310B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: this
function {
  this = this;
  this.requestGeneration = (this.requestGeneration + 1);
  this.profileGeneration = (this.profileGeneration + 1);
  if (!((this.activeProfileTask == null))) goto L_86;
  this.activeProfileTask;
  goto L_aa;
  undefined.cancel();
  this.activeProfileTask = undefined;
  if (!((this.activeTransactionsTask == null))) goto L_e0;
  this.activeTransactionsTask;
  goto L_104;
  undefined.cancel();
  this.activeTransactionsTask = undefined;
  this.cancelSearchTimer();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
function {
  return [e.id, e];
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=517B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: t, o, this, $e, s
function {
  t.beginRender(o, undefined);
  t.setAttributeRef(this.scrollRef);
  t.setAttributeFunction("onContentSizeChange", this.handleContentSizeChange);
  t.setAttributeFunction("onLayoutComplete", this.handleScrollLayoutComplete);
  t.setAttributeFunction("onScroll", this.handleScroll);
  t.setAttributeStyle("style", $e.scroll);
  this.renderBody(s);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=361B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: t, r, Ve, this, $e
function {
  t.beginRender(r, undefined);
  t.setAttributeString("accessibilityLabel", Ve.default.financeTransactionsCloseFiltersAccessibilityLabel());
  t.setAttributeFunction("onTap", this.closeFilterMenu);
  t.setAttributeStyle("style", $e.filterBackdrop);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=2 bc=543B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: t, o, this, $e, s, r, Ve, n, e, l, a
function {
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", $e.root);
  if (!(e)) goto L_ae;
  goto L_b3;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("height", "100%");
  t.setAttributeNumber("minHeight", l);
  if (!(e)) goto L_116;
  goto L_119;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  if (!(this.state.isFilterMenuOpen)) goto L_164;
  function <atom:0>();
  if (!(this.state.isFilterMenuOpen)) goto L_1f6;
  this.renderFilterMenu(a, this.activeFilterCount);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=9 cpool=2 bc=828B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: e, a, s, l, this
// closure: t, o, $e, r, Ve, n, xe, fe, i
function {
  this = this;
  let l;
  let s;
  let a;
  let e;
  e = this.usesHostScroll;
  a = xe.buildFinanceAccountOptions(this.state.profileAccounts, false);
  s = new Map(this.state.profileAccounts.map(function <atom:0>));
  if (!(e)) goto L_216;
  if (!(this.state.isFilterMenuOpen)) goto L_216;
  if (!((undefined !== this.state.filterMenuHeight))) goto L_216;
  goto L_217;
  // [栈深重同步 1 -> 0]
  l = undefined;
  t.beginComponent(fe.OAITheme, i, undefined, undefined);
  t.setViewModelProperty("fill", !e);
  t.setViewModelProperty("mode", this.themeMode);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=112B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: this
// closure: Oe
function {
  this = this;
  if (!(Oe.isVersionAtLeast(51))) goto L_6f;
  return this.viewModel.dismissFiltersKey;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=118B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: this
// closure: Oe
function {
  this = this;
  if (!(!!Oe.isVersionAtLeast(51))) goto L_75;
  return (true === this.viewModel.hostScroll);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=112B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: this
// closure: Oe
function {
  this = this;
  if (!(Oe.isVersionAtLeast(51))) goto L_6f;
  return this.viewModel.loadMoreKey;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=300B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: this
// closure: xe
function {
  this = this;
  if (!((this.state.dateRange === xe.FinanceTransactionDateRange.All))) goto L_90;
  goto L_91;
  // [栈深重同步 1 -> 0]
  if (!((0 === this.state.accountId.length))) goto L_dc;
  goto L_dd;
  // [栈深重同步 2 -> 1]
  if (!((0 === this.state.categoryId.length))) goto L_129;
  goto L_12a;
  // [栈深重同步 2 -> 1]
  return ((1 + 1) + 1);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=216B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: this
// closure: ve
function {
  this = this;
  if (!(this.usesHostScroll)) goto L_b4;
  goto L_d6;
  // [栈深重同步 2 -> 1]
  return ((ve.OAISpacing.TwoPointFive + ve.OAISpacing.Five) - this.scrollOffset);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=371B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: this
// closure: Ee
function {
  this = this;
  if (!((this.state.status === Ee.Loaded))) goto L_172;
  if (!((undefined !== this.state.nextCursor))) goto L_172;
  if (!(!this.state.isLoadingMore)) goto L_172;
  if (!((this.state.failedRequest == null))) goto L_150;
  this.state.failedRequest;
  goto L_171;
  return (true !== undefined.append);
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=609B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: e, t, this
// closure: Oe
function {
  this = this;
  if (!(Oe.isVersionAtLeast(51))) goto L_260;
  let t;
  let e;
  e = this.viewModel.onPaginationStateChange;
  if ((!this.usesHostScroll)) goto L_a4;
  if (!((undefined === e))) goto L_bd;
  this.reportedPaginationState = undefined;
  this.reportedPaginationCallback = undefined;
  return;
  t = {canLoadMore: this.canLoadMore, isLoadingMore: this.state.isLoadingMore};
  if (!((e === this.reportedPaginationCallback))) goto L_23e;
  if (!((this.reportedPaginationState == null))) goto L_1a7;
  this.reportedPaginationState;
  goto L_1c8;
  if (!((t.canLoadMore === undefined.canLoadMore))) goto L_23e;
  if (!((this.reportedPaginationState == null))) goto L_219;
  this.reportedPaginationState;
  goto L_23a;
  if (!((t.isLoadingMore === undefined.isLoadingMore))) goto L_23e;
  return;
  this.reportedPaginationCallback = e;
  this.reportedPaginationState = t;
  e(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=352B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: this
// closure: fe
function {
  this = this;
  if (!((undefined === this.viewModel.isDarkMode))) goto L_8f;
  return fe.OAIThemeMode.System;
  if (!(this.viewModel.isDarkMode)) goto L_11a;
  return fe.OAIThemeMode.Dark;
  return fe.OAIThemeMode.Light;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=244B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// locals: this
// closure: t, a, $e
function {
  this = this;
  t.beginRender(a, undefined);
  t.setAttributeStyle("style", $e.content);
  this.renderControls();
  this.renderContent(e);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=485B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: t, h, $e, u, ke, e, this
function {
  t.beginRender(h, undefined);
  t.setAttributeStyle("style", $e.filterCount);
  t.beginRender(u, undefined);
  t.setAttributeStyle("style", $e.filterCountLabel);
  t.setAttributeString("value", ke.formatNumber(e, 0, this.viewModel.locale));
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=15 cpool=1 bc=2813B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: e, this
// closure: t, h, $e, u, ke, s, l, Ie, d, Ve, pe, c, Ae, g, ve
function {
  this = this;
  let e;
  e = this.activeFilterCount;
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", $e.controls);
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", $e.searchContainer);
  t.beginComponent(Ie.SearchField, d, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", Ve.default.financeTransactionsSearchAccessibilityLabel());
  t.setViewModelProperty("clearAccessibilityLabel", Ve.default.financeTransactionsClearSearchAccessibilityLabel());
  t.setViewModelProperty("clearIconSrc", pe.default.xCircleFilled);
  t.setViewModelProperty("iconSrc", pe.default.search);
  t.setViewModelProperty("onChange", this.handleSearchChange);
  t.setViewModelProperty("placeholder", Ve.default.financeTransactionsSearchPlaceholder());
  t.setViewModelProperty("variant", Ie.SearchFieldVariant.PageTable);
  t.setViewModelProperty("value", this.state.search);
  t.endComponent();
  t.endRender();
  t.beginRender(c, undefined);
  t.setAttributeStyle("style", $e.filterButtonContainer);
  t.beginComponent(Ae.IconButton, g, undefined, undefined);
  if (!((0 === e))) goto L_680;
  goto L_71f;
  // [栈深重同步 4 -> 3]
  if (!((1 === e))) goto L_6d4;
  goto L_71f;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityLabel", Ve.default.financeTransactionsOpenFiltersMultipleActiveAccessibilityLabel(e));
  if ((this.state.isFilterMenuOpen)) goto L_798;
  if (!((e > 0))) goto L_7e1;
  goto L_826;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("iconColor", ve.OAIColor.IconTertiary);
  t.setViewModelProperty("onPress", this.toggleFilterMenu);
  if ((this.state.isFilterMenuOpen)) goto L_8ee;
  t.setViewModelProperty("selected", (e > 0));
  t.setViewModelProperty("selectedStyle", $e.filterButtonSelected);
  t.setViewModelProperty("src", pe.default.filterLines);
  t.setViewModelProperty("style", $e.filterButton);
  t.setViewModelProperty("variant", Ae.IconButtonVariant.Ghost);
  t.endComponent();
  if (!((e > 0))) goto L_aac;
  function <atom:0>();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=103B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// closure: this
function {
  return (e.value === this.state.dateRange);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=103B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// closure: this
function {
  return (e.id === this.state.accountId);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=103B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// closure: this
function {
  return (e.id === this.state.categoryId);
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=282B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: t, b, $e, Ve
function {
  t.beginRender(b, undefined);
  t.setAttributeStyle("style", $e.filterClearLabel);
  t.setAttributeString("value", Ve.default.financeTransactionsClearFilters());
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=1 bc=325B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: t, b, $e, Ve, we, v, this
function {
  t.beginComponent(we.Pressable, v, undefined, undefined);
  t.setViewModelProperty("onPress", this.clearFilters);
  t.setViewModelProperty("style", $e.filterClearButton);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=13 closure=17 cpool=4 bc=3499B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e, i
// locals: n, o, r, a, s, l, d, c, g, h, this
// closure: t, b, $e, Ve, we, v, xe, p, y, f, ze, m, S, A, w, I, T
function {
  this = this;
  let h;
  let g;
  let c;
  let d;
  let l;
  let s;
  let a;
  let r;
  let o;
  let n;
  n = this.getDateRangeOptions();
  o = xe.buildFinanceCategoryOptions();
  if (!((n.find(function <atom:0>) == null))) goto L_9f;
  n.find(function <atom:0>);
  goto L_c0;
  if (!((undefined.label == null))) goto L_10d;
  undefined.label;
  r = Ve.default.financeTransactionsDateRangeAll();
  a = e.find(function <atom:0>);
  if (!((undefined === a))) goto L_140;
  goto L_169;
  // [栈深重同步 1 -> 0]
  s = this.makeAccountFilterOption(a);
  if (!((a == null))) goto L_176;
  a;
  goto L_197;
  if (!((undefined.label == null))) goto L_1e4;
  undefined.label;
  l = Ve.default.financeTransactionsAllAccounts();
  if (!((o.find(function <atom:0>) == null))) goto L_217;
  o.find(function <atom:0>);
  goto L_238;
  if (!((undefined.label == null))) goto L_285;
  undefined.label;
  d = Ve.default.financeTransactionsAllCategories();
  c = Ve.default.financeTransactionsDateFilterLabel();
  g = Ve.default.financeTransactionsAccountFilterLabel();
  h = Ve.default.financeTransactionsCategoryFilterLabel();
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", $e.filterPopover);
  t.setAttributeString("accessibilityLabel", Ve.default.financeTransactionsFiltersAccessibilityLabel());
  t.setAttributeFunction("onLayout", this.handleFilterMenuLayout);
  t.setAttributeNumber("top", this.filterMenuTop);
  t.beginRender(y, undefined);
  t.setAttributeStyle("style", $e.filterHeader);
  t.beginRender(f, undefined);
  t.setAttributeStyle("style", $e.filterTitle);
  t.setAttributeString("value", c);
  t.endRender();
  if (!((i > 0))) goto L_653;
  function <atom:0>();
  t.endRender();
  this.renderFilterOption(ze.Date, c, r, undefined);
  if (!((this.state.openFilter === ze.Date))) goto L_768;
  this.renderOpenFilter(e, o, n);
  t.beginRender(m, undefined);
  t.setAttributeStyle("style", $e.filterDivider);
  t.endRender();
  t.beginRender(S, undefined);
  t.setAttributeStyle("style", $e.filterHeader);
  t.beginRender(A, undefined);
  t.setAttributeStyle("style", $e.filterTitle);
  t.setAttributeString("value", g);
  t.endRender();
  t.endRender();
  this.renderFilterOption(ze.Account, g, l, s);
  if (!((this.state.openFilter === ze.Account))) goto L_a76;
  this.renderOpenFilter(e, o, n);
  t.beginRender(w, undefined);
  t.setAttributeStyle("style", $e.filterDivider);
  t.endRender();
  t.beginRender(I, undefined);
  t.setAttributeStyle("style", $e.filterHeader);
  t.beginRender(T, undefined);
  t.setAttributeStyle("style", $e.filterTitle);
  t.setAttributeString("value", h);
  t.endRender();
  t.endRender();
  this.renderFilterOption(ze.Category, h, d, undefined);
  if (!((this.state.openFilter === ze.Category))) goto L_d82;
  this.renderOpenFilter(e, o, n);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=764B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: Ve, xe
function {
  return [{label: Ve.default.financeTransactionsDateRangeAll(), value: xe.FinanceTransactionDateRange.All}, {label: Ve.default.financeTransactionsDateRangeThisMonth(), value: xe.FinanceTransactionDateRange.ThisMonth}, {label: Ve.default.financeTransactionsDateRangeLastMonth(), value: xe.FinanceTransactionDateRange.LastMonth}, {label: Ve.default.financeTransactionsDateRangeThisYear(), value: xe.FinanceTransactionDateRange.ThisYear}, {label: Ve.default.financeTransactionsDateRangeLastYear(), value: xe.FinanceTransactionDateRange.LastYear}];
}

// fn <atom:0>  args=0 vars=0 closure=14 cpool=0 bc=1525B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: a, this, t, Se, P, r, pe, ve, O, $e, o, n, F, e
function {
  if (!(a)) goto L_75;
  goto L_28f;
  // [栈深重同步 1 -> 0]
  t.beginComponent(Se.Icon, P, undefined, undefined);
  if (!(r)) goto L_13b;
  goto L_180;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("src", pe.default.wallet);
  t.setViewModelProperty("color", ve.OAIColor.IconPrimary);
  t.setViewModelProperty("size", ve.OAISpacing.TwoPointFive);
  t.endComponent();
  t.beginRender(O, undefined);
  t.setAttributeStyle("style", $e.filterOptionValue);
  if (!((o == null))) goto L_341;
  o;
  goto L_362;
  if (!((undefined.label == null))) goto L_36a;
  undefined.label;
  t.setAttributeString("value", n);
  t.endRender();
  t.beginComponent(Se.Icon, F, undefined, undefined);
  if (!((this.state.openFilter === e))) goto L_4a0;
  goto L_4e5;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("src", pe.default.chevronRight);
  t.setViewModelProperty("color", ve.OAIColor.IconTertiary);
  t.setViewModelProperty("size", ve.OAISpacing.Two);
  t.endComponent();
  return;
}

// fn <atom:0>  args=4 vars=7 closure=12 cpool=1 bc=684B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e, i, n, o
// locals: r, a, this
// closure: t, Se, P, pe, ve, O, $e, F, ze, we, C, Ve
function {
  this = this;
  let a;
  let r;
  r = (e === ze.Date);
  a = (e === ze.Category);
  t.beginComponent(we.Pressable, C, undefined, undefined);
  if (!(r)) goto L_dc;
  goto L_ed;
  // [栈深重同步 4 -> 3]
  if (!(a)) goto L_e8;
  goto L_ed;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityId", "finance-transactions-account-filter-toggle");
  t.setViewModelProperty("accessibilityLabel", Ve.default.financeTransactionsFilterOptionAccessibilityLabel(i, n));
  if (!(r)) goto L_1ba;
  goto L_205;
  // [栈深重同步 4 -> 3]
  if (!(a)) goto L_1e3;
  goto L_205;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onPress", this.toggleAccountFilter);
  t.setViewModelProperty("style", $e.filterOption);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=80B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
function {
  return {label: e.label, value: e.id};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// closure: this
function {
  return this.makeAccountFilterOption(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// closure: this, o
function {
  return this.renderFilterChoice(e, o);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// closure: this, o
function {
  return this.renderFilterChoice(e, o);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=6 cpool=4 bc=934B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e, i, n
// locals: o, r, a, s, this
// closure: ze, Ve, t, M, $e, R
function {
  this = this;
  let s;
  let a;
  let r;
  let o;
  o = this.state.openFilter;
  if (!((undefined === o))) goto L_5c;
  return;
  r = (o === ze.Date);
  a = (o === ze.Category);
  if (!(r)) goto L_b3;
  goto L_1c0;
  // [栈深重同步 1 -> 0]
  if (!(a)) goto L_13f;
  // append([{label: Ve.default.financeTransactionsAllCategories(), value: ""}], 1, i.map(function <atom:0>))
  i.map(function <atom:0>);
  goto L_1c0;
  // [栈深重同步 1 -> 0]
  // append([{label: Ve.default.financeTransactionsAllAccounts(), value: ""}], 1, e.map(function <atom:0>))
  e.map(function <atom:0>);
  s = [{label: Ve.default.financeTransactionsAllAccounts(), value: ""}];
  if (!(a)) goto L_299;
  t.beginRender(M, undefined);
  t.setAttributeStyle("style", $e.categoryFilterChoices);
  s.map(function <atom:0>);
  t.endRender();
  return;
  t.beginRender(R, undefined);
  if (!(r)) goto L_2fa;
  goto L_2ff;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityId", "finance-transactions-account-filter");
  t.setAttributeStyle("style", $e.filterChoices);
  s.map(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: this, e
function {
  return this.handleFilterChange(e.value, e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=13 cpool=0 bc=1005B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: o, this, e, s, t, k, $e, x, r, Se, V, pe, ve
function {
  if (!(o)) goto L_7a;
  this.renderCategoryFilterIcon(e.value, "finance-transactions-category-filter-icon.".concat(s));
  t.beginRender(k, undefined);
  t.setAttributeStyle("style", $e.filterChoiceLabel);
  t.setAttributeString("value", e.label);
  t.endRender();
  t.beginRender(x, undefined);
  t.setAttributeStyle("style", $e.filterCheckmark);
  if (!(r)) goto L_3c4;
  t.beginComponent(Se.Icon, V, undefined, undefined);
  t.setViewModelProperty("src", pe.default.check);
  t.setViewModelProperty("color", ve.OAIColor.IconPrimary);
  t.setViewModelProperty("size", ve.OAISpacing.TwoPointFive);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=8 closure=11 cpool=2 bc=1051B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e, i
// locals: n, o, r, a, s, this
// closure: t, k, $e, x, Se, V, pe, ve, ze, we, L
function {
  this = this;
  let s;
  let a;
  let r;
  let o;
  let n;
  n = (i === ze.Date);
  o = (i === ze.Category);
  if (!(n)) goto L_ce;
  goto L_15d;
  // [栈深重同步 2 -> 1]
  if (!(o)) goto L_119;
  goto L_15d;
  // [栈深重同步 2 -> 1]
  r = (e.value === this.state.accountId);
  if (!(n)) goto L_16b;
  goto L_17c;
  // [栈深重同步 1 -> 0]
  if (!(o)) goto L_177;
  goto L_17c;
  // [栈深重同步 1 -> 0]
  a = "finance-transactions-account-filter";
  if (!(o)) goto L_1b0;
  if (!((0 === e.value.length))) goto L_1b0;
  goto L_1d2;
  // [栈深重同步 1 -> 0]
  s = e.value;
  t.beginComponent(we.Pressable, L, e.value, undefined);
  t.setViewModelProperty("accessibilityId", "".concat(a, ".", s));
  if (!((e.accessibilityLabel == null))) goto L_315;
  e.accessibilityLabel;
  t.setViewModelProperty("accessibilityLabel", e.label);
  t.setViewModelProperty("accessibilityStateSelected", r);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setViewModelProperty("style", $e.filterChoice);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=9 cpool=0 bc=839B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e, i
// locals: n
// closure: pe, ye, xe, t, D, $e, Se, N, ve
function {
  let n;
  if (!((0 === e.length))) goto L_51;
  goto L_e6;
  // [栈深重同步 1 -> 0]
  if (!((ye.getIconAsset(xe.getFinanceCategoryIcon(e)) == null))) goto L_e6;
  ye.getIconAsset(xe.getFinanceCategoryIcon(e));
  n = pe.default.circleDollarSign;
  t.beginRender(D, undefined);
  t.setAttributeString("accessibilityId", i);
  t.setAttributeStyle("style", $e.categoryFilterIcon);
  t.beginComponent(Se.Icon, N, undefined, undefined);
  t.setViewModelProperty("src", n);
  t.setViewModelProperty("color", ve.OAIColor.IconPrimary);
  t.setViewModelProperty("size", ve.OAISpacing.TwoPointFive);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: t
// closure: e
function {
  return (t.id === e.id);
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=3 bc=690B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// locals: t, i, n, this
// closure: Ve
function {
  this = this;
  let n;
  let i;
  let t;
  t = this.state.profileAccounts.find(function <atom:0>);
  if (!((t == null))) goto L_80;
  t;
  goto L_cd;
  if (!((undefined.name == null))) goto L_a9;
  undefined.name;
  goto L_cd;
  if ((undefined.trim())) goto L_178;
  if (!((t == null))) goto L_df;
  t;
  goto L_12c;
  if (!((undefined.officialName == null))) goto L_108;
  undefined.officialName;
  goto L_12c;
  if ((undefined.trim())) goto L_178;
  i = Ve.default.financeTransactionsAccountFallbackLabel();
  if (!((t == null))) goto L_184;
  t;
  goto L_1fd;
  if (!((undefined.mask == null))) goto L_1ad;
  undefined.mask;
  goto L_1fd;
  if ((undefined.replace(new RegExp("[^0-9A-Za-z]"), "").slice(-4))) goto L_202;
  n = undefined;
  if (!((undefined === n))) goto L_237;
  goto L_285;
  // [栈深重同步 2 -> 1]
  return {accessibilityLabel: e.label, label: Ve.default.financeTransactionsAccountFilterWithLastFour(i, n), value: e.id};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: t
// closure: this, e
function {
  return this.renderTransaction(t, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=8 cpool=1 bc=904B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: i
// closure: this, e, t, _, $e, E, z, xe
function {
  t.beginRender(_, i.date);
  t.setAttributeStyle("style", $e.group);
  t.setAttributeString("accessibilityId", "finance-transactions-group-".concat(i.date));
  t.beginRender(E, undefined);
  t.setAttributeStyle("style", $e.groupTitleContainer);
  t.beginRender(z, undefined);
  t.setAttributeStyle("style", $e.groupTitle);
  t.setAttributeString("value", xe.formatFinanceTransactionGroupDate(i.date, this.viewModel.locale));
  t.endRender();
  t.endRender();
  i.transactions.map(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=10 cpool=1 bc=1561B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// locals: i, n, o, this
// closure: t, _, $e, E, z, xe, Ee, H, B, q
function {
  this = this;
  let o;
  let n;
  let i;
  if (!((this.state.status === Ee.Loading))) goto L_9c;
  this.renderLoadingState();
  return;
  if (!((this.state.status === Ee.Failed))) goto L_175;
  if (!((0 === this.state.transactions.length))) goto L_175;
  this.renderErrorState();
  return;
  i = this.state.transactions.filter(xe.isCompleteFinanceTransaction);
  if (!((this.state.failedRequest == null))) goto L_24e;
  this.state.failedRequest;
  goto L_26f;
  n = (true === undefined.append);
  if (!((0 === i.length))) goto L_3e2;
  t.beginRender(H, undefined);
  t.setAttributeStyle("style", $e.results);
  this.renderEmptyState();
  if (!(n)) goto L_34b;
  this.renderErrorState();
  if (!(this.state.isLoadingMore)) goto L_3b8;
  this.renderLoadingMore();
  t.endRender();
  return;
  o = xe.groupFinanceTransactionsByDate(i);
  t.beginRender(B, undefined);
  t.setAttributeStyle("style", $e.results);
  t.beginRender(q, undefined);
  t.setAttributeStyle("style", $e.list);
  o.map(function <atom:0>);
  t.endRender();
  if (!(n)) goto L_583;
  this.renderErrorState();
  if (!(this.state.isLoadingMore)) goto L_5f0;
  this.renderLoadingMore();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=517B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: t, K, $e, be, G, Ve
function {
  t.beginRender(K, undefined);
  t.setAttributeStyle("style", $e.messageContainer);
  t.beginComponent(be.ActivityIndicator, G, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", Ve.default.financeTransactionsLoadingAccessibilityLabel());
  t.setViewModelProperty("size", be.ActivityIndicatorSize.Small);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=0 bc=1340B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: this
// closure: t, U, $e, Te, W, ve, Ve, me, j
function {
  this = this;
  t.beginRender(U, undefined);
  t.setAttributeStyle("style", $e.messageContainer);
  t.beginComponent(Te.Text, W, undefined, undefined);
  t.setViewModelProperty("size", ve.OAITextSize.BodyMedium);
  t.setViewModelProperty("tone", Te.TextTone.Secondary);
  t.setViewModelProperty("value", Ve.default.financeTransactionsLoadError());
  t.endComponent();
  t.beginComponent(me.Button, j, undefined, undefined);
  t.setViewModelProperty("label", Ve.default.financeTransactionsRetry());
  t.setViewModelProperty("labelStyle", $e.retryButtonLabel);
  t.setViewModelProperty("onPress", this.retry);
  t.setViewModelProperty("size", ve.OAIControlSize.Md);
  t.setViewModelProperty("style", $e.retryButton);
  t.setViewModelProperty("variant", me.ButtonVariant.Secondary);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=0 bc=1075B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: t, J, $e, Q, Se, Y, ve, pe, X, Ve
function {
  t.beginRender(J, undefined);
  t.setAttributeStyle("style", $e.emptyContainer);
  t.beginRender(Q, undefined);
  t.setAttributeStyle("style", $e.emptyCard);
  t.beginComponent(Se.Icon, Y, undefined, undefined);
  t.setViewModelProperty("color", ve.OAIColor.IconPrimary);
  t.setViewModelProperty("size", ve.OAISpacing.Four);
  t.setViewModelProperty("src", pe.default.search);
  t.endComponent();
  t.beginRender(X, undefined);
  t.setAttributeStyle("style", $e.emptyTitle);
  t.setAttributeString("value", Ve.default.financeTransactionsEmpty());
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=517B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: t, Z, $e, be, $, Ve
function {
  t.beginRender(Z, undefined);
  t.setAttributeStyle("style", $e.loadMoreContainer);
  t.beginComponent(be.ActivityIndicator, $, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", Ve.default.financeTransactionsLoadingMoreAccessibilityLabel());
  t.setViewModelProperty("size", be.ActivityIndicatorSize.Small);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=41B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: this, e, r
function {
  return this.openTransactionDetail(e, r);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=18 cpool=0 bc=1829B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: t, FinanceTransactionLogo, ie, s, e, ne, $e, oe, re, d, ae, se, h, n, ve, c, le, Ve
function {
  t.beginComponent(FinanceTransactionLogo, ie, undefined, undefined);
  t.setViewModelProperty("fallbackIcon", s);
  t.setViewModelProperty("logoUrl", e.logoUrl);
  t.endComponent();
  t.beginRender(ne, undefined);
  t.setAttributeStyle("style", $e.transactionCopy);
  t.beginRender(oe, undefined);
  t.setAttributeStyle("style", $e.transactionTitle);
  t.setAttributeString("value", e.displayName);
  t.endRender();
  t.beginRender(re, undefined);
  t.setAttributeStyle("style", $e.metadataLabel);
  t.setAttributeString("value", d);
  t.endRender();
  t.endRender();
  t.beginRender(ae, undefined);
  t.setAttributeStyle("style", $e.amountColumn);
  t.beginRender(se, undefined);
  t.setAttributeStyle("style", $e.amount);
  t.setAttributeString("accessibilityLabel", h);
  if (!(!n)) goto L_517;
  if (!((e.amountValue == null))) goto L_4cc;
  e.amountValue;
  if (!((0 > 0))) goto L_517;
  goto L_55c;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("color", ve.OAIColor.TextPrimary);
  t.setAttributeString("value", c);
  t.endRender();
  if (!(e.pending)) goto L_6fc;
  t.beginRender(le, undefined);
  t.setAttributeStyle("style", $e.pendingLabel);
  t.setAttributeString("value", Ve.default.financeTransactionsPending());
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=14 closure=19 cpool=2 bc=2898B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e, i
// locals: n, o, r, a, s, l, d, c, g, h, u, this
// closure: t, FinanceTransactionLogo, ie, ne, $e, oe, re, ae, se, ve, le, Ve, xe, ye, pe, ee, we, te, de
function {
  this = this;
  let u;
  let h;
  let g;
  let c;
  let d;
  let l;
  let s;
  let a;
  let r;
  let o;
  let n;
  n = (true === this.viewModel.sensitiveValuesHidden);
  if (!((undefined === e.accountId))) goto L_95;
  goto L_dc;
  // [栈深重同步 1 -> 0]
  o = i.get(e.accountId);
  if (!((o == null))) goto L_e8;
  o;
  goto L_135;
  if (!((undefined.name == null))) goto L_111;
  undefined.name;
  goto L_135;
  if ((undefined.trim())) goto L_1e6;
  if (!((o == null))) goto L_147;
  o;
  goto L_194;
  if (!((undefined.officialName == null))) goto L_170;
  undefined.officialName;
  goto L_194;
  if ((undefined.trim())) goto L_1e6;
  if (!((e.accountName == null))) goto L_1c2;
  e.accountName;
  goto L_1e6;
  r = undefined.trim();
  a = xe.getFinanceTransactionCategoryPresentation(e);
  if (!((ye.getIconAsset(a.sidebarIcon) == null))) goto L_2a1;
  ye.getIconAsset(a.sidebarIcon);
  s = pe.default.circleDollarSign;
  if (!((undefined === o))) goto L_2af;
  goto L_2d7;
  // [栈深重同步 1 -> 0]
  l = xe.getFinanceTransactionAccountSubtitle(o);
  if (((undefined === l))) goto L_2e8;
  if (!((0 === l.length))) goto L_310;
  goto L_37f;
  // [栈深重同步 1 -> 0]
  d = Ve.default.financeTransactionsTransactionMetadata(a.label, l);
  c = xe.formatFinanceTransactionListAmount(e, this.viewModel.locale, n);
  if (!((this.context == null))) goto L_41c;
  this.context;
  goto L_43d;
  g = (undefined !== undefined.host);
  if (!(n)) goto L_48f;
  goto L_492;
  // [栈深重同步 1 -> 0]
  h = c;
  if (!((undefined === r))) goto L_5ed;
  if (!(e.pending)) goto L_559;
  goto L_73f;
  // [栈深重同步 1 -> 0]
  goto L_73f;
  // [栈深重同步 1 -> 0]
  if (!(e.pending)) goto L_6ab;
  goto L_73f;
  // [栈深重同步 1 -> 0]
  u = Ve.default.financeTransactionsTransactionWithAccountAccessibilityLabel(e.displayName, r, a.label, h);
  t.beginRender(ee, e.transactionId);
  t.setAttributeStyle("style", $e.transactionRowContainer);
  t.beginComponent(we.Pressable, te, undefined, undefined);
  t.setViewModelProperty("style", $e.transactionRow);
  t.setViewModelProperty("hoveredStyle", $e.rowHovered);
  t.setViewModelProperty("pressedStyle", $e.rowPressed);
  t.setViewModelProperty("accessibilityId", "finance-transaction-".concat(e.transactionId));
  t.setViewModelProperty("accessibilityLabel", u);
  t.setViewModelProperty("disabled", !g);
  if (!(g)) goto L_a2e;
  goto L_a2f;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onPress", undefined);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.beginRender(de, undefined);
  t.setAttributeStyle("style", $e.transactionDivider);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=368B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: e, this
// closure: Be
function {
  this = this;
  let e;
  if (!((this.scrollRef.single() == null))) goto L_53;
  this.scrollRef.single();
  goto L_95;
  if (!((undefined.frame.height == null))) goto L_9b;
  undefined.frame.height;
  e = 0;
  if ((this.usesHostScroll)) goto L_16f;
  if (((e <= 0))) goto L_16f;
  if (((this.scrollContentHeight <= 0))) goto L_16f;
  if ((((this.scrollOffset + e) < (this.scrollContentHeight - Be)))) goto L_16f;
  this.loadMore();
  return;
}

// fn <atom:0>  args=2 vars=9 closure=3 cpool=0 bc=1374B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e, t
// locals: i, n, o, r, a, s, this
// closure: xe, Oe, Ve
function {
  this = this;
  let s;
  let a;
  let r;
  let o;
  let n;
  let i;
  if (!((this.context == null))) goto L_40;
  this.context;
  goto L_61;
  i = undefined.host;
  n = xe.getFinanceTransactionDate(e);
  if ((!Oe.isVersionAtLeast(35))) goto L_c3;
  if (((undefined === i))) goto L_c3;
  if (!((undefined === n))) goto L_c6;
  return;
  o = (true === this.viewModel.sensitiveValuesHidden);
  r = e.displayName.trim();
  a = xe.getFinanceTransactionCategoryPresentation(e);
  if (!((e.logoUrl == null))) goto L_1a7;
  e.logoUrl;
  goto L_1cb;
  s = undefined.trim();
  if (!((e.merchantName == null))) goto L_26f;
  e.merchantName;
  goto L_293;
  if ((undefined.trim())) goto L_29a;
  if (!(o)) goto L_3bd;
  goto L_3be;
  // [栈深重同步 4 -> 3]
  if (((undefined === s))) goto L_4f5;
  if (!((0 === s.length))) goto L_4fa;
  goto L_4fd;
  // [栈深重同步 4 -> 3]
  i.openTransactionDetail({transactionId: e.transactionId.trim(), displayTitle: r, merchantName: r, transactionDate: n, dateLabel: xe.formatFinanceTransactionDetailDate(n, this.viewModel.locale), amountLabel: xe.formatFinanceTransactionAmount(e, this.viewModel.locale, o), currencyCode: xe.getFinanceTransactionCurrencyCode(e), accountName: t, primaryCategory: a.label, primaryCategoryKey: a.primaryCategoryKey, primaryCategoryId: a.primaryCategoryId, categoryIcon: a.sidebarIcon, pending: e.pending, monthStart: "".concat(n.slice(0, 7), "-01"), logoUrl: s, query: Ve.default.financeTransactionsDetailQuery(r), sensitiveValuesHidden: o});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=103B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// closure: this
function {
  return (e.id === this.state.accountId);
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=1 bc=551B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: t
// locals: e, t#1
// closure: this, i, xe, e
function {
  if (!((i === this.profileGeneration))) goto L_226;
  try { // catch -> L_1c6
  let e;
  e = xe.parseFinanceProfileJson(JSON.stringify(t));
  if (!((this.state.accountId.length > 0))) goto L_195;
  if (!(!e.some(function <atom:0>))) goto L_195;
  let t#1;
  null;
  this.currentFilters();
  t#1 = {accountId: ""};
  this.setState({accountId: "", profileAccounts: e});
  this.loadTransactions(undefined, false, t#1);
  goto L_1c4;
  this.setState({profileAccounts: e});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_225
  if (!(e.isLoggingEnabled)) goto L_222;
  console.warn("Unable to decode the Finance profile for transaction filters.");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=129B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: i, this, e
function {
  if (!((i === this.profileGeneration))) goto L_80;
  if (!(e.isLoggingEnabled)) goto L_80;
  console.warn("Unable to load the Finance profile for transaction filters.");
  return;
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=2 bc=311B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: t, i, this
// closure: xe, e, Oe, qe
function {
  this = this;
  let i;
  let t;
  if (!((this.context == null))) goto L_32;
  this.context;
  goto L_53;
  t = undefined.host;
  this.profileGeneration = (this.profileGeneration ++);
  i = (this.profileGeneration ++);
  if ((!Oe.isVersionAtLeast(35))) goto L_136;
  if (!((undefined === t))) goto L_de;
  if (((undefined === this.financeApi))) goto L_136;
  this.requestTool(t, qe, undefined).then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=517B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// locals: i
// closure: o, this, xe, Ee, t, r
function {
  if (!((o === this.requestGeneration))) goto L_204;
  try { // catch -> L_1a8
  let i;
  i = xe.parseFinanceTransactionsPageJson(JSON.stringify(e));
  if (!(t)) goto L_178;
  // append([], 0, this.state.transactions)
  // append([], this.state.transactions, i.transactions)
  i.transactions;
  goto L_19c;
  // [栈深重同步 4 -> 3]
  this.setState({failedRequest: undefined, isLoadingMore: false, nextCursor: i.nextCursor, status: Ee.Loaded, transactions: i.transactions});
  <?>;
  goto L_1de;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_1dd
  this.handleTransactionLoadFailure(r, o);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.reportPaginationState();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=43B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: this, r, o
function {
  return this.handleTransactionLoadFailure(r, o);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=5 cpool=2 bc=753B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e, t, i
// locals: n, o, r, a, this
// closure: xe, Ee, Oe, Ne, _e
function {
  this = this;
  let a;
  let r;
  let o;
  let n;
  if (!((this.context == null))) goto L_3a;
  this.context;
  goto L_5b;
  n = undefined.host;
  this.requestGeneration = (this.requestGeneration ++);
  o = (this.requestGeneration ++);
  r = {append: t, cursor: e, filters: i};
  if ((!Oe.isVersionAtLeast(35))) goto L_fa;
  if (!((undefined === n))) goto L_185;
  if (!((undefined === this.financeApi))) goto L_185;
  this.setState({failedRequest: r, isLoadingMore: false, status: Ee.Failed});
  this.reportPaginationState();
  return;
  if (!(t)) goto L_1be;
  goto L_227;
  // [栈深重同步 1 -> 0]
  this.setState({failedRequest: undefined, isLoadingMore: false, nextCursor: undefined, status: Ee.Loading, transactions: []});
  this.reportPaginationState();
  if (!((e == null))) goto L_257;
  e;
  a = {cursor: null, filters: xe.buildFinanceTransactionFilters(i, new Date()), limit: Ne};
  this.requestTool(n, _e, a).then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=369B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: t, i
// locals: this
// closure: e, Ee
function {
  this = this;
  if (!((i === this.requestGeneration))) goto L_170;
  if (!(e.isLoggingEnabled)) goto L_83;
  console.warn("Unable to load Finance transactions.");
  if (!((this.state.transactions.length > 0))) goto L_120;
  goto L_142;
  // [栈深重同步 4 -> 3]
  this.setState({failedRequest: t, isLoadingMore: false, status: Ee.Failed});
  this.reportPaginationState();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=8B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// closure: We, Ke, t
function {
  return We(Ke(e, t));   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=5 cpool=1 bc=1007B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e, t, i
// locals: n, n#1, e#1, o, o#1, this
// closure: We, Ke, De, qe, Oe
function {
  this = this;
  let n;
  n = this.financeApi;
  if (!((undefined === n))) goto L_133;
  let n#1;
  if (!((undefined === e))) goto L_73;
  return Promise.reject(new Error("Finance transactions have no authenticated request transport."));   // tail call
  n#1 = new De.FinanceTransactionsApiClient(e);
  if (!((t === qe))) goto L_cd;
  return n#1.getUserProfile({});
  if (!((undefined === i))) goto L_10a;
  return Promise.reject(new Error("Finance transactions require typed pagination arguments."));
  return n#1.listTransactions(i);
  if (!(Oe.isVersionAtLeast(59))) goto L_3b8;
  try { // catch -> L_383
  let o;
  let e#1;
  if (!((this.context == null))) goto L_195;
  this.context;
  goto L_1e2;
  if (!((undefined.requestContextProvider == null))) goto L_1be;
  undefined.requestContextProvider;
  goto L_1e2;
  e#1 = undefined.getRequestContext();
  if (!((undefined === e#1))) goto L_1f9;
  throw new Error("Finance transaction request context is unavailable.");
  o = undefined;
  if (!((t === qe))) goto L_295;
  if (!((this.activeProfileTask == null))) goto L_230;
  this.activeProfileTask;
  goto L_254;
  undefined.cancel();
  o = n.getUserProfile(e#1);
  n.getUserProfile(e#1);
  this.activeProfileTask = o;
  goto L_337;
  if (!((undefined === i))) goto L_2a9;
  throw new Error("Finance transactions require typed pagination arguments.");
  if (!((this.activeTransactionsTask == null))) goto L_2d4;
  this.activeTransactionsTask;
  goto L_2f8;
  undefined.cancel();
  o = n.listTransactions(i, e#1);
  n.listTransactions(i, e#1);
  this.activeTransactionsTask = o;
  return o.result.then(function <atom:0>);
  // [栈深重同步 0 -> 1]
  o#1 = <?>;
  try { // catch -> L_3b7
  return Promise.reject(o#1);
  // [栈深重同步 0 -> 1]
  throw <?>;
  return Promise.reject(new Error("Authenticated Finance requests are unavailable on this host."));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=292B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: this
function {
  this = this;
  return {accountId: this.state.accountId, categoryId: this.state.categoryId, dateRange: this.state.dateRange, search: this.state.debouncedSearch};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=96B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: this
function {
  this = this;
  if (!((undefined !== this.searchTimer))) goto L_5f;
  clearTimeout(this.searchTimer);
  this.searchTimer = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=353B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: t
// locals: i
// closure: this, e
function {
  let i;
  if (!((this.viewModel.logoUrl == null))) goto L_50;
  this.viewModel.logoUrl;
  goto L_74;
  i = undefined.trim();
  if ((t)) goto L_160;
  if (((undefined === i))) goto L_160;
  if (((i === this.state.failedLogoUrl))) goto L_160;
  if (!(e.isLoggingEnabled)) goto L_12f;
  console.warn("Unable to load Finance transaction logo.");
  this.setState({failedLogoUrl: i});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=76B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
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

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=329B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: t, ge, $e, this, Ce, e
function {
  t.beginRender(ge, undefined);
  t.setAttributeStyle("style", $e.logoImage);
  t.setAttributeFunction("onAssetLoad", this.handleAssetLoad);
  t.setAttribute("src", Ce.makeAssetFromUrl(e));
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=347B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// closure: t, Se, he, this, ve
function {
  t.beginComponent(Se.Icon, he, undefined, undefined);
  t.setViewModelProperty("src", this.viewModel.fallbackIcon);
  t.setViewModelProperty("color", ve.OAIColor.IconSecondary);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=8 cpool=3 bc=567B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: e, i, this
// closure: t, ge, $e, Ce, Se, he, ve, ce
function {
  this = this;
  let i;
  let e;
  if (!((this.viewModel.logoUrl == null))) goto L_53;
  this.viewModel.logoUrl;
  goto L_77;
  e = undefined.trim();
  if (!((undefined !== e))) goto L_d2;
  if (!((e.length > 0))) goto L_d2;
  i = (e !== this.state.failedLogoUrl);
  t.beginRender(ce, undefined);
  if (!(i)) goto L_174;
  goto L_175;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("borderColor", undefined);
  if (!(i)) goto L_1ab;
  goto L_1ac;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("borderWidth", undefined);
  t.setAttributeStyle("style", $e.logoBackground);
  if (!(i)) goto L_20b;
  goto L_20e;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.endRender();
  return;
}

// fn Ke  args=2 vars=3 closure=2 cpool=0 bc=18B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e, t
// locals: i
// closure: je, Ge
function {
  let i;
  i = je(e);
  Ge(i, t);
  return i;
}

// fn Ge  args=2 vars=3 closure=1 cpool=0 bc=117B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e, t
// locals: i
// closure: Ue
function {
  let i;
  i = Ue(e);
  if (((true === e.isError))) goto L_35;
  if (!((undefined !== i))) goto L_74;
  if (!((i == null))) goto L_70;
  i;
  throw new Error("".concat(t, " returned an error response"));
  return;
}

// fn Ue  args=1 vars=4 closure=1 cpool=0 bc=500B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// locals: t, i, n
// closure: Je
function {
  let i;
  let t;
  t = e.error;
  if (!(("string" == typeof t))) goto L_88;
  if (!((t.trim().length > 0))) goto L_88;
  return t.trim();   // tail call
  i = e.content;
  if (!(Array.isArray(i))) goto L_1f3;
  let n;
  for (const n of i) {
    if (!(Je(n))) continue;
    if (!(("text" === n.type))) continue;
    if (!(("string" == typeof n.text))) continue;
    if (!((n.text.trim().length > 0))) continue;
    return n.text.trim();
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn We  args=1 vars=4 closure=1 cpool=0 bc=149B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// locals: t, i, n
// closure: Je
function {
  let n;
  let i;
  let t;
  t = e.structuredContent;
  if (!(Je(t))) goto L_37;
  return t;
  i = e.structured_content;
  if (!(Je(i))) goto L_65;
  return i;
  n = e.result;
  if (!(Je(n))) goto L_93;
  return n;
  return {};
}

// fn je  args=1 vars=2 closure=1 cpool=0 bc=73B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// locals: t
// closure: Je
function {
  let t;
  t = JSON.parse(e);
  if (!(!Je(t))) goto L_45;
  throw new Error("Host tool response was not a JSON object.");
  return t;
}

// fn Je  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn Qe  args=1 vars=1 closure=1 cpool=0 bc=717B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: e
// closure: xe
function {
  if (!((e === xe.FinanceTransactionDateRange.All))) goto L_90;
  return xe.FinanceTransactionDateRange.All;
  if (!((e === xe.FinanceTransactionDateRange.ThisMonth))) goto L_11f;
  return xe.FinanceTransactionDateRange.ThisMonth;
  if (!((e === xe.FinanceTransactionDateRange.LastMonth))) goto L_1ae;
  return xe.FinanceTransactionDateRange.LastMonth;
  if (!((e === xe.FinanceTransactionDateRange.ThisYear))) goto L_23d;
  return xe.FinanceTransactionDateRange.ThisYear;
  if (!((e === xe.FinanceTransactionDateRange.LastYear))) goto L_2cc;
  return xe.FinanceTransactionDateRange.LastYear;
  e;
  return;
}

// fn <atom:0>  args=3 vars=117 closure=0 cpool=49 bc=18366B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// args: require, module, exports
// locals: e, t, i, n, o, r, a, s, l, d, c, g, h, u, p, y, f, v, b, m, S, A, w, I, T, C, P, O, F, M, R, L, k, x, V, D, N, H, B, q, _, E, z, K, G, U, W, j, J, Q, Y, X, Z, $, ee, te, ie, ne, oe, re, ae, se, le, de, ce, ge, he, ue, pe, ye, fe, ve, be, me, Se, Ae, we, Ie, Te, Ce, Pe, Oe, Fe, Me, Re, Le, ke, xe, Ve, De, Ne, He, Be, qe, _e, Ee, ze, FinanceTransactionsComponent, <class_fields_init>, FinanceTransactionsComponent#1, FinanceTransactionLogo, <class_fields_init>#1, FinanceTransactionLogo#1, Ke, Ge, Ue, We, je, Je, Qe, Ye, Xe, Ze, $e
function {
  Ke = function Ke;
  Ge = function Ge;
  Ue = function Ue;
  We = function We;
  je = function je;
  Je = function Je;
  Qe = function Qe;
  let $e;
  let Ze;
  let Xe;
  let Ye;
  let FinanceTransactionLogo#1;
  let FinanceTransactionsComponent#1;
  let _e;
  let qe;
  let Be;
  let He;
  let Ne;
  let De;
  let Ve;
  let xe;
  let ke;
  let Le;
  let Re;
  let Me;
  let Fe;
  let Oe;
  let Pe;
  let Ce;
  let Te;
  let Ie;
  let we;
  let Ae;
  let Se;
  let me;
  let be;
  let ve;
  let fe;
  let ye;
  let pe;
  let ue;
  let he;
  let ge;
  let ce;
  let de;
  let le;
  let se;
  let ae;
  let re;
  let oe;
  let ne;
  let ie;
  let te;
  let ee;
  let $;
  let Z;
  let X;
  let Y;
  let Q;
  let J;
  let j;
  let W;
  let U;
  let G;
  let K;
  let z;
  let E;
  let _;
  let q;
  let B;
  let H;
  let N;
  let D;
  let V;
  let x;
  let k;
  let L;
  let R;
  let M;
  let F;
  let O;
  let P;
  let C;
  let T;
  let I;
  let w;
  let A;
  let S;
  let m;
  let b;
  let v;
  let f;
  let y;
  let p;
  let u;
  let h;
  let g;
  let c;
  let d;
  let l;
  let s;
  let a;
  let r;
  let o;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceTransactionsComponent = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeComponentPrototype(undefined, "2N6KH649XfCvy7an");
  n = t.makeNodePrototype("view", undefined, "FPYD28G0JEtMBOjw");
  o = t.makeNodePrototype("scroll", ["accessibilityId", "finance-transactions-scroll"], "VqvsQIWgSj84Qnfj");
  r = t.makeNodePrototype("view", undefined, "gIFw9C_9FTgp0Fzd");
  a = t.makeNodePrototype("view", undefined, "hb6LcAZRKWNtCbs4");
  s = t.makeNodePrototype("view", undefined, "AO8CrwqDpmz1LD5B");
  l = t.makeNodePrototype("view", undefined, "GJu_L8NxV7_qZ8OW");
  d = t.makeComponentPrototype(["accessibilityId", "finance-transactions-search"], "9Ky-qKPtEilg6nFw");
  c = t.makeNodePrototype("view", undefined, "5eP6M1P6wSbHR90V");
  g = t.makeComponentPrototype(["accessibilityId", "finance-transactions-filter-toggle"], "UW2Ub8yGd74SilBa");
  h = t.makeNodePrototype("view", undefined, "AHYWFRqVvMDEgnaE");
  u = t.makeNodePrototype("label", undefined, "vcviBoT-rsTjMS5J");
  p = t.makeNodePrototype("view", ["accessibilityId", "finance-transactions-filters"], "pKW9ETWWeCMVhv_9");
  y = t.makeNodePrototype("view", undefined, "7Wxlb3fs0UbmfvQ1");
  f = t.makeNodePrototype("label", undefined, "YgjyNppB3a5MZX8k");
  v = t.makeComponentPrototype(["accessibilityId", "finance-transactions-clear-filters"], "sTHu_miDM_rNzXyd");
  b = t.makeNodePrototype("label", undefined, "m1guy2HzmVJcGMnw");
  m = t.makeNodePrototype("view", undefined, "tBpT96i2tlbshUMQ");
  S = t.makeNodePrototype("view", undefined, "lIjvJAnjJ9SKpaQI");
  A = t.makeNodePrototype("label", undefined, "nsBnG413JVp7Q1N4");
  w = t.makeNodePrototype("view", undefined, "IC6pMfpOIC0szGw6");
  I = t.makeNodePrototype("view", undefined, "v3QryQmaf5N2_OK5");
  T = t.makeNodePrototype("label", undefined, "TGgLs2eg35Pez1pf");
  C = t.makeComponentPrototype(undefined, "laqkgDlVO_Hv3-pk");
  P = t.makeComponentPrototype(undefined, "4zZyXm-VCeuYM4Jb");
  O = t.makeNodePrototype("label", undefined, "SgM7ETQgMLthHt-W");
  F = t.makeComponentPrototype(undefined, "WO6PGDKHWJqBOAxU");
  M = t.makeNodePrototype("scroll", ["accessibilityId", "finance-transactions-category-filter"], "C8wzBkcSC__mJQSl");
  R = t.makeNodePrototype("view", undefined, "Jhxm3CGhN7ickYRR");
  L = t.makeComponentPrototype(["accessibilityCategory", "radio"], "gZP4vfeKG78DEu0B");
  k = t.makeNodePrototype("label", undefined, "2vDZEKCMG5H5JXhU");
  x = t.makeNodePrototype("view", undefined, "MfWPf5nKAO-Cc4vm");
  V = t.makeComponentPrototype(undefined, "fBUD1wF8XFMpmOKS");
  D = t.makeNodePrototype("view", undefined, "fLHNT1omoT8QCME3");
  N = t.makeComponentPrototype(undefined, "-lZwoBnNhY7Ej4Rg");
  H = t.makeNodePrototype("view", undefined, "ExHwxwwmxNHgu2Qj");
  B = t.makeNodePrototype("view", undefined, "Hiiw5ha_PhLiOrXb");
  q = t.makeNodePrototype("view", undefined, "qm0z2kqBRz8JN1ng");
  _ = t.makeNodePrototype("view", undefined, "DIg8XEvUmlsUcHyw");
  E = t.makeNodePrototype("view", undefined, "4l2952eZkl9fz0Jw");
  z = t.makeNodePrototype("label", undefined, "Br6CPGazID0-10Nk");
  K = t.makeNodePrototype("view", ["accessibilityId", "finance-transactions-loading"], "WU15kVw3LYnNA8Lb");
  G = t.makeComponentPrototype(undefined, "8h6ITWmV2eZKsQqF");
  U = t.makeNodePrototype("view", ["accessibilityId", "finance-transactions-error"], "lTjrlvKuYyPpvfvE");
  W = t.makeComponentPrototype(["align", "center", "lines", 0], "8Nuw8JMGBGMY4DEB");
  j = t.makeComponentPrototype(["accessibilityId", "finance-transactions-retry"], "mvBfE8Iu6v4O9_Nj");
  J = t.makeNodePrototype("view", undefined, "7iWofQ8R__iSoOPV");
  Q = t.makeNodePrototype("view", ["accessibilityId", "finance-transactions-empty"], "dgsPtkmYbDWI6v7g");
  Y = t.makeComponentPrototype(undefined, "1ZigsoGEkK9cXTqs");
  X = t.makeNodePrototype("label", undefined, "az1wzwaom2CES6G8");
  Z = t.makeNodePrototype("view", ["accessibilityId", "finance-transactions-loading-more"], "HJeUX9YJO_KzWHqt");
  $ = t.makeComponentPrototype(undefined, "QWBBqH9PwPreNwe2");
  ee = t.makeNodePrototype("view", undefined, "z2c74x8VGIJiTVn3");
  te = t.makeComponentPrototype(undefined, "hkOx3CgsP4pNCyO5");
  ie = t.makeComponentPrototype(undefined, "k-9eLHhH8lWPX-hG");
  ne = t.makeNodePrototype("view", undefined, "92zaIqd6Ovqgl4i-");
  oe = t.makeNodePrototype("label", undefined, "Vs0qbX7XSfjGcJaW");
  re = t.makeNodePrototype("label", undefined, "WynVocEsV4u-STew");
  ae = t.makeNodePrototype("view", undefined, "uSiPoSBV0vOMP2TV");
  se = t.makeNodePrototype("label", undefined, "YqWhabyQrE6545ae");
  le = t.makeNodePrototype("label", undefined, "evZqpcLsltypINZ6");
  de = t.makeNodePrototype("view", undefined, "V8z-l03UAdCeRegC");
  ce = t.makeNodePrototype("view", undefined, "Ki4T75pFEKDpFpyW");
  ge = t.makeNodePrototype("image", undefined, "z8jwoODsSdItPD1N");
  he = t.makeComponentPrototype(["size", 20], "d4uxuq1p7tP-edGs");
  ue = require("chatgpt_finance/src/FinanceApi");
  pe = require("dil_icon_assets/res");
  ye = require("dil_icon_assets/src/IconAssets");
  fe = require("oai_core/src/OAITheme");
  ve = require("oai_core/src/OAITokens");
  be = require("oai_ui/src/components/ActivityIndicator");
  me = require("oai_ui/src/components/Button");
  Se = require("oai_ui/src/components/Icon");
  Ae = require("oai_ui/src/components/IconButton");
  we = require("oai_ui/src/components/Pressable");
  Ie = require("oai_ui/src/components/SearchField");
  Te = require("oai_ui/src/components/Text");
  Ce = require("valdi_core/src/Asset");
  Pe = require("valdi_core/src/Component");
  Oe = require("valdi_core/src/CompilerIntrinsics");
  Fe = require("valdi_core/src/ElementRef");
  Me = require("valdi_core/src/SetTimeout");
  Re = require("valdi_core/src/Style");
  Le = require("valdi_core/src/SystemFont");
  ke = require("valdi_core/src/utils/NumberUtils");
  xe = require("./FinanceTransactionsUtils");
  Ve = require("./Strings");
  De = require("./generated/FinanceTransactionsApiClient");
  Ne = 50;
  He = 250;
  Be = 240;
  qe = "get_user_profile";
  _e = "list_transactions";
  if ((Ee)) goto L_105c;
  Ee = {};
  !function <atom:0>({});
  if ((ze)) goto L_106a;
  ze = {};
  function <atom:0>({});
  let FinanceTransactionsComponent;
  let <class_fields_init>;
  class FinanceTransactionsComponent extends Pe.StatefulComponent { ... }
  <proto:FinanceTransactionsComponent>.onCreate = function <atom:0>;
  <proto:FinanceTransactionsComponent>.onViewModelUpdate = function <atom:0>;
  <proto:FinanceTransactionsComponent>.onDestroy = function <atom:0>;
  <proto:FinanceTransactionsComponent>.onRender = function <atom:0>;
  <proto:FinanceTransactionsComponent>.dismissFiltersKey = function <atom:0>;
  <proto:FinanceTransactionsComponent>.usesHostScroll = function <atom:0>;
  <proto:FinanceTransactionsComponent>.loadMoreKey = function <atom:0>;
  <proto:FinanceTransactionsComponent>.activeFilterCount = function <atom:0>;
  <proto:FinanceTransactionsComponent>.filterMenuTop = function <atom:0>;
  <proto:FinanceTransactionsComponent>.canLoadMore = function <atom:0>;
  <proto:FinanceTransactionsComponent>.reportPaginationState = function <atom:0>;
  <proto:FinanceTransactionsComponent>.themeMode = function <atom:0>;
  <proto:FinanceTransactionsComponent>.renderBody = function <atom:0>;
  <proto:FinanceTransactionsComponent>.renderControls = function <atom:0>;
  <proto:FinanceTransactionsComponent>.renderFilterMenu = function <atom:0>;
  <proto:FinanceTransactionsComponent>.getDateRangeOptions = function <atom:0>;
  <proto:FinanceTransactionsComponent>.renderFilterOption = function <atom:0>;
  <proto:FinanceTransactionsComponent>.renderOpenFilter = function <atom:0>;
  <proto:FinanceTransactionsComponent>.renderFilterChoice = function <atom:0>;
  <proto:FinanceTransactionsComponent>.renderCategoryFilterIcon = function <atom:0>;
  <proto:FinanceTransactionsComponent>.makeAccountFilterOption = function <atom:0>;
  <proto:FinanceTransactionsComponent>.renderContent = function <atom:0>;
  <proto:FinanceTransactionsComponent>.renderLoadingState = function <atom:0>;
  <proto:FinanceTransactionsComponent>.renderErrorState = function <atom:0>;
  <proto:FinanceTransactionsComponent>.renderEmptyState = function <atom:0>;
  <proto:FinanceTransactionsComponent>.renderLoadingMore = function <atom:0>;
  <proto:FinanceTransactionsComponent>.renderTransaction = function <atom:0>;
  <proto:FinanceTransactionsComponent>.loadMoreIfNearBottom = function <atom:0>;
  <proto:FinanceTransactionsComponent>.openTransactionDetail = function <atom:0>;
  <proto:FinanceTransactionsComponent>.loadProfile = function <atom:0>;
  <proto:FinanceTransactionsComponent>.loadTransactions = function <atom:0>;
  <proto:FinanceTransactionsComponent>.handleTransactionLoadFailure = function <atom:0>;
  <proto:FinanceTransactionsComponent>.requestTool = function <atom:0>;
  <proto:FinanceTransactionsComponent>.currentFilters = function <atom:0>;
  <proto:FinanceTransactionsComponent>.cancelSearchTimer = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceTransactionsComponent>;
  FinanceTransactionsComponent = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceTransactionsComponent#1 = function <atom:0>;
  exports.FinanceTransactionsComponent = FinanceTransactionsComponent#1;
  let FinanceTransactionLogo;
  let <class_fields_init>#1;
  class FinanceTransactionLogo extends Pe.StatefulComponent { ... }
  <proto:FinanceTransactionLogo>.onRender = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:FinanceTransactionLogo>;
  FinanceTransactionLogo = function <atom:0>;
  // close_loc <class_fields_init>#1
  FinanceTransactionLogo#1 = function <atom:0>;
  Ye = ve.resolveOAITextStyle(ve.OAITextSize.BodyLarge);
  Xe = ve.resolveOAITextStyle(ve.OAITextSize.BodyMedium);
  Ze = ve.resolveOAITextStyle(ve.OAITextSize.TitleSmall);
  $e = {root: new Re.Style({accessibilityId: "finance-transactions", backgroundColor: ve.OAIColor.Transparent, width: "100%"}), scroll: new Re.Style({flexGrow: 1, flexShrink: 1, height: 1, width: "100%"}), content: new Re.Style({flexDirection: "column", gap: ve.OAISpacing.TwoPointFive, paddingBottom: ve.OAISpacing.Three, paddingTop: ve.OAISpacing.TwoPointFive, width: "100%"}), controls: new Re.Style({alignItems: "center", flexDirection: "row", gap: ve.OAISpacing.OneAndHalf, paddingLeft: ve.OAISpacing.Three, paddingRight: ve.OAISpacing.Three, width: "100%", zIndex: 1}), searchContainer: new Re.Style({flexGrow: 1, flexShrink: 1, minWidth: 0}), filterButtonContainer: new Re.Style({flexShrink: 0}), filterButton: new Re.Style({height: ve.OAISpacing.FourPointFive, width: ve.OAISpacing.FourPointFive}), filterButtonSelected: new Re.Style({backgroundColor: ve.OAIColor.BgTertiary}), filterCount: new Re.Style({alignItems: "center", backgroundColor: ve.OAIColor.TextPrimary, borderRadius: ve.OAIRadius.Pill, height: ve.OAISpacing.Two, justifyContent: "center", minWidth: ve.OAISpacing.Three, paddingLeft: ve.OAISpacing.Quarter, paddingRight: ve.OAISpacing.Quarter, position: "absolute", right: -ve.OAISpacing.Half, top: -ve.OAISpacing.Half}), filterCountLabel: new Re.Style({color: ve.OAIColor.TextInverse, font: Le.systemMediumFont(12), textAlign: "center", width: "100%"}), filterBackdrop: new Re.Style({accessibilityCategory: "button", accessibilityId: "finance-transactions-filters-backdrop", accessibilityNavigation: "leaf", backgroundColor: ve.OAIColor.Transparent, bottom: 0, left: 0, position: "absolute", right: 0, top: 0, zIndex: 0}), filterPopover: new Re.Style({backgroundColor: ve.OAIColor.BgElevatedPrimary, borderColor: ve.OAIColor.BorderLight, borderRadius: ve.OAISpacing.TwoPointFive, borderWidth: ve.OAISpacing.Px, boxShadow: "0 2 8 rgba(0, 0, 0, 0.08)", flexDirection: "column", ignoreParentViewport: true, limitToViewport: false, maxWidth: "90%", paddingBottom: ve.OAISpacing.OnePointTwentyFive, paddingLeft: ve.OAISpacing.OnePointTwentyFive, paddingRight: ve.OAISpacing.OnePointTwentyFive, paddingTop: ve.OAISpacing.OnePointTwentyFive, position: "absolute", right: ve.OAISpacing.Three, width: 240, zIndex: 2}), filterHeader: new Re.Style({alignItems: "center", flexDirection: "row", justifyContent: "space-between", minHeight: ve.OAISpacing.Four, paddingBottom: ve.OAISpacing.Half, paddingLeft: ve.OAISpacing.One, paddingRight: ve.OAISpacing.One, paddingTop: ve.OAISpacing.One, width: "100%"}), filterTitle: new Re.Style({color: ve.OAIColor.TextTertiary, font: Xe.font, lineHeight: Xe.lineHeight, numberOfLines: 1}), filterClearButton: new Re.Style({alignItems: "center", justifyContent: "center", minHeight: ve.OAISpacing.Three}), filterClearLabel: new Re.Style({color: ve.OAIColor.TextPrimary, font: Xe.font, lineHeight: Xe.lineHeight, numberOfLines: 1}), filterDivider: new Re.Style({backgroundColor: ve.OAIColor.BorderDefault, height: ve.OAISpacing.Px, marginBottom: ve.OAISpacing.One, marginLeft: ve.OAISpacing.ThreeQuarters, marginRight: ve.OAISpacing.ThreeQuarters, marginTop: ve.OAISpacing.One}), filterOption: new Re.Style({alignItems: "center", borderRadius: ve.OAIRadius.Lg, flexDirection: "row", gap: ve.OAISpacing.One, minHeight: ve.OAISpacing.Five, paddingLeft: ve.OAISpacing.One, paddingRight: ve.OAISpacing.OnePointTwentyFive, width: "100%"}), filterOptionValue: new Re.Style({color: ve.OAIColor.TextPrimary, flexGrow: 1, flexShrink: 1, font: Xe.font, lineHeight: Xe.lineHeight, minWidth: 0, numberOfLines: 1, textOverflow: "ellipsis"}), filterChoices: new Re.Style({flexDirection: "column", width: "100%"}), categoryFilterChoices: new Re.Style({height: (6 * ve.OAISpacing.Five), width: "100%"}), categoryFilterIcon: new Re.Style({accessibilityNavigation: "ignored", alignItems: "center", flexShrink: 0, height: ve.OAISpacing.TwoPointFive, justifyContent: "center", touchEnabled: false, width: ve.OAISpacing.TwoPointFive}), filterChoice: new Re.Style({alignItems: "center", borderRadius: ve.OAIRadius.Lg, flexDirection: "row", gap: ve.OAISpacing.One, minHeight: ve.OAISpacing.Five, paddingLeft: ve.OAISpacing.One, paddingRight: ve.OAISpacing.OnePointTwentyFive, width: "100%"}), filterChoiceLabel: new Re.Style({color: ve.OAIColor.TextPrimary, flexGrow: 1, flexShrink: 1, font: Xe.font, lineHeight: Xe.lineHeight, minWidth: 0, numberOfLines: 1, textOverflow: "ellipsis"}), filterCheckmark: new Re.Style({alignItems: "center", flexShrink: 0, height: ve.OAISpacing.TwoPointFive, justifyContent: "center", width: ve.OAISpacing.TwoPointFive}), results: new Re.Style({flexDirection: "column", gap: ve.OAISpacing.Two, width: "100%"}), list: new Re.Style({flexDirection: "column", width: "100%"}), group: new Re.Style({flexDirection: "column", width: "100%"}), groupTitleContainer: new Re.Style({height: (ve.OAISpacing.Four + ve.OAISpacing.Quarter), justifyContent: "center", paddingLeft: ve.OAISpacing.Three, paddingRight: ve.OAISpacing.Three, paddingTop: ve.OAISpacing.One, width: "100%"}), groupTitle: new Re.Style({color: ve.OAIColor.TextSecondary, font: Xe.font, lineHeight: Xe.lineHeight, width: "100%"}), transactionRowContainer: new Re.Style({flexDirection: "column", width: "100%"}), transactionRow: new Re.Style({alignItems: "center", alignSelf: "stretch", backgroundColor: ve.OAIColor.Transparent, borderRadius: ve.OAIRadius.Md, flexDirection: "row", gap: ve.OAISpacing.OneAndHalf, marginLeft: ve.OAISpacing.Two, marginRight: ve.OAISpacing.Two, minHeight: (ve.OAISpacing.Ten + ve.OAISpacing.Quarter), paddingBottom: ve.OAISpacing.OneAndHalf, paddingLeft: ve.OAISpacing.One, paddingRight: ve.OAISpacing.One, paddingTop: ve.OAISpacing.OneAndHalf}), rowHovered: new Re.Style({backgroundColor: ve.OAIColor.InteractiveBgRowHover}), rowPressed: new Re.Style({backgroundColor: ve.OAIColor.InteractiveBgRowPress}), transactionDivider: new Re.Style({backgroundColor: ve.OAIColor.BorderDefault, height: ve.OAISpacing.Px, marginLeft: ve.OAISpacing.Three, marginRight: ve.OAISpacing.Three}), logoBackground: new Re.Style({alignItems: "center", backgroundColor: ve.OAIColor.BgTertiary, borderRadius: ve.OAIRadius.Pill, flexShrink: 0, height: ve.OAISpacing.FourPointFive, justifyContent: "center", slowClipping: true, width: ve.OAISpacing.FourPointFive}), logoImage: new Re.Style({accessibilityNavigation: "ignored", borderRadius: ve.OAIRadius.Pill, height: (ve.OAISpacing.FourPointFive - ve.OAISpacing.Px), objectFit: "cover", width: (ve.OAISpacing.FourPointFive - ve.OAISpacing.Px)}), transactionCopy: new Re.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: ve.OAISpacing.Half, minWidth: 0}), transactionTitle: new Re.Style({color: ve.OAIColor.TextPrimary, font: Ye.font, letterSpacing: -0.32, lineHeight: 26, numberOfLines: 1}), metadataLabel: new Re.Style({color: ve.OAIColor.TextTertiary, flexShrink: 1, font: Xe.font, lineHeight: Xe.lineHeight, numberOfLines: 1}), amountColumn: new Re.Style({alignItems: "flex-end", flexDirection: "column", flexShrink: 0, gap: ve.OAISpacing.Half}), amount: new Re.Style({flexShrink: 0, font: Ze.font, lineHeight: Ze.lineHeight, numberOfLines: 1, textAlign: "right"}), pendingLabel: new Re.Style({color: ve.OAIColor.TextTertiary, font: Xe.font, lineHeight: Xe.lineHeight, numberOfLines: 1, textAlign: "right"}), emptyContainer: new Re.Style({marginTop: ve.OAISpacing.Half, paddingLeft: ve.OAISpacing.Three, paddingRight: ve.OAISpacing.Three, width: "100%"}), emptyCard: new Re.Style({alignItems: "center", backgroundColor: ve.OAIColor.BgPrimary, borderColor: ve.OAIColor.BorderHeavy, borderRadius: (ve.OAISpacing.Three + ve.OAISpacing.Half), borderStyle: "dashed", borderWidth: ve.OAISpacing.Px, flexDirection: "column", gap: ve.OAISpacing.Two, justifyContent: "center", minHeight: 321, paddingBottom: ve.OAISpacing.Three, paddingLeft: ve.OAISpacing.Three, paddingRight: ve.OAISpacing.Three, paddingTop: ve.OAISpacing.Three, width: "100%"}), emptyTitle: new Re.Style({color: ve.OAIColor.TextPrimary, font: Le.systemMediumFont(16), lineHeight: ve.OAISpacing.Three, numberOfLines: 0, textAlign: "center"}), messageContainer: new Re.Style({alignItems: "center", flexDirection: "column", gap: ve.OAISpacing.One, justifyContent: "center", paddingBottom: ve.OAISpacing.Six, paddingLeft: ve.OAISpacing.Three, paddingRight: ve.OAISpacing.Three, paddingTop: ve.OAISpacing.Six, width: "100%"}), retryButton: new Re.Style({backgroundColor: ve.OAIColor.Transparent, borderColor: ve.OAIColor.BorderDefault, height: (ve.OAISpacing.Five + ve.OAISpacing.Quarter), paddingLeft: ve.OAISpacing.Two, paddingRight: ve.OAISpacing.Two}), retryButtonLabel: new Re.Style({font: Le.systemMediumFont(14), letterSpacing: -0.15, lineHeight: Xe.lineHeight}), loadMoreContainer: new Re.Style({alignItems: "center", width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_transactions/src/FinanceTransactionsComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
