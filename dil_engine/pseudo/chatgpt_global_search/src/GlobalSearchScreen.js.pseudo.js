// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e
function {
  e.Idle = 0;
  e[0] = "Idle";
  e.Loading = 1;
  e[1] = "Loading";
  e.Loaded = 2;
  e[2] = "Loaded";
  e.Failed = 3;
  e[3] = "Failed";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=96B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e
// closure: this
function {
  this.setState({query: e, lastOpenedTitle: undefined});
  this.scheduleSearch(300);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=107B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: this
function {
  return this.context.navigator.pop(true);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=107B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: this
function {
  return this.context.navigator.pop(true);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=2 bc=334B file=chatgpt_global_search/src/GlobalSearchScreen
// locals: e
// closure: this
function {
  let e;
  e = this.activeSearch;
  if (!(e)) goto L_e2;
  this.requestGeneration = (this.requestGeneration + 1);
  this.activeSearch = undefined;
  e.cancel();
  goto L_14d;
  // [栈深重同步 1 -> 0]
  this.context.navigator.pop(true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=241B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: this, Se
function {
  if (!((this.activeSearch == null))) goto L_2c;
  this.activeSearch;
  goto L_50;
  undefined.cancel();
  this.activeSearch = undefined;
  this.requestGeneration = (this.requestGeneration + 1);
  this.setState({query: "", results: [], status: Se.Idle, lastOpenedTitle: undefined});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=3 bc=330B file=chatgpt_global_search/src/GlobalSearchScreen
// locals: this, this.active_func, new.target, arguments
// closure: Se, <class_fields_init>, be
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
  this.state = {query: "Tokyo", selectedFilter: be.GlobalSearchFilter.Top, results: [], recentResults: [], status: Se.Loading, backend: be.GlobalSearchBackend.Demo};
  this.requestGeneration = 0;
  this.setQuery = function <atom:0>;
  this.navigateBack = function <atom:0>;
  this.clearSearch = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=466B file=chatgpt_global_search/src/GlobalSearchScreen
// locals: e, t, this
// closure: ne, me, pe
function {
  this = this;
  let t;
  let e;
  if (!((this.context == null))) goto L_57;
  this.context;
  goto L_78;
  e = new ne.OAINetworkClient(undefined.platformServices);
  this.repository = new me.GlobalSearchRepository(new pe.AuthenticatedGlobalSearchApi(e));
  if (!((this.viewModel.initialQuery == null))) goto L_124;
  this.viewModel.initialQuery;
  goto L_148;
  t = undefined.trim();
  if (!(t)) goto L_17e;
  this.setState({query: t});
  this.track("search_screen_opened", {});
  this.scheduleSearch(0);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=138B file=chatgpt_global_search/src/GlobalSearchScreen
// locals: this
function {
  this = this;
  this.requestGeneration = (this.requestGeneration + 1);
  if (!((this.activeSearch == null))) goto L_59;
  this.activeSearch;
  goto L_7d;
  undefined.cancel();
  this.activeSearch = undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=965B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: t, r, Ce, ue, this, i, n
function {
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", Ce.root);
  t.setAttributeNumber("height", ue.Device.getWindowHeight());
  t.setAttributeNumber("paddingTop", ue.Device.getDisplayTopInset());
  this.renderHeader();
  if (!((this.state.query.length > 0))) goto L_202;
  this.renderFilters();
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", Ce.resultsScroll);
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", Ce.resultsContent);
  this.renderResults();
  t.endRender();
  t.endRender();
  this.renderSearchBar();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=1 bc=279B file=chatgpt_global_search/src/GlobalSearchScreen
// locals: this
// closure: t, r, Ce, ue, i, n, re, o
function {
  this = this;
  t.beginComponent(re.OAITheme, o, undefined, undefined);
  t.setViewModelProperty("mode", re.OAIThemeMode.System);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=165B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: t, a, Ce
function {
  t.beginRender(a, undefined);
  t.setAttributeStyle("style", Ce.backIcon);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=584B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: t, ce, c, ie, y
function {
  t.beginComponent(ce.Text, c, undefined, undefined);
  t.setViewModelProperty("size", ie.OAITextSize.TitleLarge);
  t.endComponent();
  t.beginComponent(ce.Text, y, undefined, undefined);
  t.setViewModelProperty("color", ie.OAIColor.TextTertiary);
  t.setViewModelProperty("size", ie.OAITextSize.BodySmall);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=13 cpool=2 bc=1034B file=chatgpt_global_search/src/GlobalSearchScreen
// locals: this
// closure: t, a, Ce, ce, c, ie, y, l, ae, s, oe, se, d
function {
  this = this;
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", Ce.header);
  t.beginComponent(ae.Pressable, s, undefined, undefined);
  t.setViewModelProperty("align", oe.OAIAlign.Center);
  t.setViewModelProperty("justify", oe.OAIJustify.Center);
  t.setViewModelProperty("margin", {right: ie.OAISpacing.One});
  t.setViewModelProperty("onPress", this.navigateBack);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.beginComponent(se.Column, d, undefined, undefined);
  t.setViewModelProperty("gap", ie.OAISpacing.Quarter);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: this, e
function {
  return this.selectFilter(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=473B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: t, ce, p, o, ie, r
function {
  t.beginComponent(ce.Text, p, undefined, undefined);
  if (!(o)) goto L_c6;
  goto L_10b;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("color", ie.OAIColor.TextSecondary);
  t.setViewModelProperty("size", ie.OAITextSize.LabelLarge);
  t.setViewModelProperty("value", r);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=8 cpool=2 bc=1159B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e
// locals: o, r
// closure: this, t, ce, p, ie, be, ae, g
function {
  let r;
  let o;
  o = (e === this.state.selectedFilter);
  r = be.configurationForFilter(e).label;
  t.beginComponent(ae.Pressable, g, "filter-".concat(e), undefined);
  t.setViewModelProperty("accessibilityLabel", "Show ".concat(r, " results"));
  t.setViewModelProperty("accessibilityStateSelected", o);
  if (!(o)) goto L_211;
  goto L_256;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("background", ie.OAIColor.BgTertiary);
  t.setViewModelProperty("margin", {right: ie.OAISpacing.One});
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setViewModelProperty("padding", {x: ie.OAISpacing.OnePointSeventyFive, y: ie.OAISpacing.One});
  t.setViewModelProperty("radius", ie.OAIRadius.Pill);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=10 cpool=1 bc=407B file=chatgpt_global_search/src/GlobalSearchScreen
// locals: this
// closure: t, ce, p, ie, be, ae, g, u, Ce, h
function {
  this = this;
  t.beginRender(u, undefined);
  t.setAttributeStyle("style", Ce.filterScroll);
  t.beginRender(h, undefined);
  t.setAttributeStyle("style", Ce.filterRow);
  be.GLOBAL_SEARCH_FILTERS.forEach(function <atom:0>);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e, t
// closure: this
function {
  return this.renderResult(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e, t
// closure: this
function {
  return this.renderResult(e, t);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=10 cpool=2 bc=2767B file=chatgpt_global_search/src/GlobalSearchScreen
// locals: this
// closure: t, b, Ce, m, S, Se, w, A, R, v
function {
  this = this;
  if (!(this.state.lastOpenedTitle)) goto L_2d8;
  t.beginRender(b, undefined);
  t.setAttributeStyle("style", Ce.openedBanner);
  t.beginRender(m, undefined);
  t.setAttributeStyle("style", Ce.openedBannerIcon);
  t.endRender();
  t.beginRender(S, undefined);
  t.setAttributeStyle("style", Ce.openedBannerText);
  t.setAttributeString("value", "Opened “".concat(this.state.lastOpenedTitle, "” through the platform context"));
  t.endRender();
  t.endRender();
  if (!((0 !== this.state.query.trim().length))) goto L_950;
  if (((this.state.status !== Se.Loading))) goto L_3fa;
  if (!((0 !== this.state.results.length))) goto L_928;
  if (!((this.state.status !== Se.Failed))) goto L_900;
  if (((this.state.status !== Se.Loaded))) goto L_51e;
  if (!((0 !== this.state.results.length))) goto L_8d8;
  t.beginRender(w, undefined);
  t.setAttributeStyle("style", Ce.resultSummary);
  t.beginRender(A, undefined);
  t.setAttributeStyle("style", Ce.resultSummaryText);
  if (!((1 === this.state.results.length))) goto L_6fc;
  goto L_701;
  // [栈深重同步 8 -> 7]
  t.setAttributeString("value", "".concat(this.state.results.length, " result", "s"));
  t.endRender();
  if (!((this.state.status === Se.Loading))) goto L_843;
  t.beginRender(R, undefined);
  t.setAttributeStyle("style", Ce.refreshLabel);
  t.endRender();
  t.endRender();
  goto L_ace;
  // [栈深重同步 1 -> 0]
  goto L_ace;
  // [栈深重同步 1 -> 0]
  goto L_ace;
  // [栈深重同步 1 -> 0]
  goto L_ace;
  // [栈深重同步 1 -> 0]
  if (!((0 === this.state.recentResults.length))) goto L_9c0;
  goto L_ace;
  // [栈深重同步 1 -> 0]
  t.beginRender(v, undefined);
  t.setAttributeStyle("style", Ce.sectionTitle);
  t.endRender();
  this.state.recentResults.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=39B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: this, e, o
function {
  return this.openResult(e, o);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=0 bc=1871B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: t, I, Ce, r, P, k, f, e, T, O, x
function {
  t.beginRender(I, undefined);
  t.setAttributeStyle("style", Ce.resultIcon);
  t.setAttributeString("backgroundColor", r.iconBackground);
  t.beginRender(P, undefined);
  t.setAttributeStyle("style", Ce.resultIconLabel);
  t.setAttributeString("color", r.iconColor);
  t.setAttributeString("value", r.icon);
  t.endRender();
  t.endRender();
  t.beginRender(k, undefined);
  t.setAttributeStyle("style", Ce.resultText);
  t.beginRender(f, undefined);
  t.setAttributeStyle("style", Ce.resultTitle);
  t.setAttributeString("value", e.title);
  t.endRender();
  t.beginRender(T, undefined);
  t.setAttributeStyle("style", Ce.resultSnippet);
  if (!((e.snippet == null))) goto L_4a3;
  e.snippet;
  t.setAttributeString("value", r.typeLabel);
  t.endRender();
  t.beginRender(O, undefined);
  t.setAttributeStyle("style", Ce.resultType);
  if (!(e.archived)) goto L_60e;
  goto L_656;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("value", r.typeLabel.toUpperCase());
  t.endRender();
  t.endRender();
  t.beginRender(x, undefined);
  t.setAttributeStyle("style", Ce.resultChevron);
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=14 cpool=2 bc=991B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e, o
// locals: r, this
// closure: t, I, Ce, P, k, f, T, O, x, Re, ae, C, oe, ie
function {
  this = this;
  let r;
  r = Re(e);
  t.beginComponent(ae.Pressable, C, e.id, undefined);
  t.setViewModelProperty("accessibilityLabel", "".concat(e.title, ", ", r.typeLabel));
  t.setViewModelProperty("align", oe.OAIAlign.Center);
  t.setViewModelProperty("borderColor", ie.OAIColor.BorderLight);
  t.setViewModelProperty("direction", oe.OAIStackDirection.Row);
  t.setViewModelProperty("margin", {top: 7});
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setViewModelProperty("padding", {top: 13, right: 4, bottom: 13, left: 4});
  t.setViewModelProperty("radius", ie.OAIRadius.Lg);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=42B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: this
function {
  return this.setQuery("Tokyo");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=349B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: t, ce, V, ie
function {
  t.beginComponent(ce.Text, V, undefined, undefined);
  t.setViewModelProperty("color", ie.OAIColor.ThemePurpleText);
  t.setViewModelProperty("size", ie.OAITextSize.LabelLarge);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=12 cpool=2 bc=1579B file=chatgpt_global_search/src/GlobalSearchScreen
// locals: this
// closure: t, ce, V, ie, B, Ce, M, L, N, F, ae, G
function {
  this = this;
  t.beginRender(B, undefined);
  t.setAttributeStyle("style", Ce.centerState);
  t.beginRender(M, undefined);
  t.setAttributeStyle("style", Ce.heroIcon);
  t.beginRender(L, undefined);
  t.setAttributeStyle("style", Ce.heroIconLabel);
  t.endRender();
  t.endRender();
  t.beginRender(N, undefined);
  t.setAttributeStyle("style", Ce.centerTitle);
  t.endRender();
  t.beginRender(F, undefined);
  t.setAttributeStyle("style", Ce.centerMessage);
  t.endRender();
  t.beginComponent(ae.Pressable, G, undefined, undefined);
  t.setViewModelProperty("background", ie.OAIColor.ThemePurpleBackground);
  t.setViewModelProperty("margin", {top: ie.OAISpacing.TwoPointFive});
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setViewModelProperty("padding", {x: ie.OAISpacing.Two, y: ie.OAISpacing.OnePointTwentyFive});
  t.setViewModelProperty("radius", ie.OAIRadius.Pill);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=7 cpool=0 bc=899B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e
// closure: t, _, Ce, D, E, j, K
function {
  t.beginRender(_, "loading-".concat(e));
  t.setAttributeStyle("style", Ce.loadingRow);
  t.beginRender(D, undefined);
  t.setAttributeStyle("style", Ce.loadingIcon);
  t.endRender();
  t.beginRender(E, undefined);
  t.beginRender(j, undefined);
  t.setAttributeStyle("style", Ce.loadingTitle);
  t.setAttributeString("width", ((72 - (6 * e)) + "%"));
  t.endRender();
  t.beginRender(K, undefined);
  t.setAttributeStyle("style", Ce.loadingSubtitle);
  t.setAttributeString("width", ((88 - (4 * e)) + "%"));
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=131B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: t, _, Ce, D, E, j, K, q
function {
  t.beginRender(q, undefined);
  [0, 1, 2, 3, 4].forEach(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=0 bc=1176B file=chatgpt_global_search/src/GlobalSearchScreen
// locals: this
// closure: t, z, Ce, U, H, Y, le, Q, ie
function {
  this = this;
  t.beginRender(z, undefined);
  t.setAttributeStyle("style", Ce.centerState);
  t.beginRender(U, undefined);
  t.setAttributeStyle("style", Ce.emptyIcon);
  t.endRender();
  t.beginRender(H, undefined);
  t.setAttributeStyle("style", Ce.centerTitle);
  t.endRender();
  t.beginRender(Y, undefined);
  t.setAttributeStyle("style", Ce.centerMessage);
  t.setAttributeString("value", "Nothing matched “".concat(this.state.query.trim(), "”. Try another search."));
  t.endRender();
  t.beginComponent(le.Button, Q, undefined, undefined);
  t.setViewModelProperty("margin", {top: ie.OAISpacing.TwoPointFive});
  t.setViewModelProperty("onPress", this.clearSearch);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: this
function {
  return this.scheduleSearch(0);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=1 bc=950B file=chatgpt_global_search/src/GlobalSearchScreen
// locals: this
// closure: t, W, Ce, X, Z, $, le, J, ie
function {
  this = this;
  t.beginRender(W, undefined);
  t.setAttributeStyle("style", Ce.centerState);
  t.beginRender(X, undefined);
  t.setAttributeStyle("style", Ce.emptyIcon);
  t.endRender();
  t.beginRender(Z, undefined);
  t.setAttributeStyle("style", Ce.centerTitle);
  t.endRender();
  t.beginRender($, undefined);
  t.setAttributeStyle("style", Ce.centerMessage);
  t.endRender();
  t.beginComponent(le.Button, J, undefined, undefined);
  t.setViewModelProperty("margin", {top: ie.OAISpacing.TwoPointFive});
  t.setViewModelProperty("onPress", function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=672B file=chatgpt_global_search/src/GlobalSearchScreen
// locals: this
// closure: t, ee, Ce, de, te, ie
function {
  this = this;
  t.beginRender(ee, undefined);
  t.setAttributeStyle("style", Ce.searchBarArea);
  t.beginComponent(de.SearchField, te, undefined, undefined);
  t.setViewModelProperty("onChange", this.setQuery);
  t.setViewModelProperty("onSubmit", this.setQuery);
  t.setViewModelProperty("size", ie.OAIControlSize.Lg);
  t.setViewModelProperty("value", this.state.query);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=288B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e
// locals: this
// closure: be
function {
  this = this;
  if (!((e !== this.state.selectedFilter))) goto L_11f;
  this.setState({selectedFilter: e, lastOpenedTitle: undefined});
  this.track("search_filter_selected", {filter: be.configurationForFilter(e).label});
  this.scheduleSearch(0);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=83B file=chatgpt_global_search/src/GlobalSearchScreen
// closure: t, this
function {
  if (!((t === this.requestGeneration))) goto L_52;
  this.performSearch(t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=182B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (!((this.activeSearch == null))) goto L_2f;
  this.activeSearch;
  goto L_53;
  undefined.cancel();
  this.activeSearch = undefined;
  this.requestGeneration = (this.requestGeneration ++);
  t = (this.requestGeneration ++);
  this.setTimeoutDisposable(function <atom:0>, e);
  return;
}

// fn <atom:0>  args=1 vars=8 closure=4 cpool=0 bc=1550B file=chatgpt_global_search/src/GlobalSearchScreen
// args: t
// locals: o, r, i, n, e, l, this
// closure: Se, be, pe, e
function {
  this = this;
  let n;
  let i;
  let r;
  let o;
  o = this.state.query.trim();
  r = this.state.selectedFilter;
  if (((0 === o.length))) goto L_eb;
  if (!(!this.repository)) goto L_ef;
  return undefined; // async
  i = this.repository.cachedResults(o, r);
  if (!((i == null))) goto L_16c;
  i;
  goto L_18d;
  if (!((undefined.results == null))) goto L_195;
  undefined.results;
  if (!((i == null))) goto L_1cc;
  i;
  goto L_1ed;
  if (!((undefined.backend == null))) goto L_236;
  undefined.backend;
  this.setState({results: [], status: Se.Loading, backend: this.state.backend});
  this.track("search_query_issued", {filter: be.configurationForFilter(r).label, queryLength: o.length});
  n = this.repository.search(o, r);
  this.activeSearch = n;
  try { // catch -> L_4ce
  let e;
  e = (await n.result);
  if (!((t !== this.requestGeneration))) goto L_378;
  return undefined; // async
  this.activeSearch = undefined;
  this.setState({backend: e.backend, results: e.results, status: Se.Loaded});
  this.track("search_results_received", {backend: be.GlobalSearchBackend[e.backend], count: e.results.length});
  <?>;
  goto L_60c;
  // [栈深重同步 0 -> 1]
  l = <?>;
  try { // catch -> L_60b
  if (((l instanceof pe.GlobalSearchCancelledError))) goto L_525;
  if (!((t !== this.requestGeneration))) goto L_52a;
  return undefined; // async
  if (!(e.isLoggingEnabled)) goto L_5ac;
  console.warn("Global search failed: ".concat(String(l)));
  this.activeSearch = undefined;
  this.setState({status: Se.Failed});
  <?>;
  goto L_60c;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_global_search/src/GlobalSearchScreen
// args: t
// closure: e
function {
  return (t.id !== e.id);
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=1 bc=539B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e, t
// locals: o, this
// closure: be, we
function {
  this = this;
  let o;
  // append([e], 1, this.state.recentResults.filter(function <atom:0>))
  this.state.recentResults.filter(function <atom:0>);
  o = [e].slice(0, 3);
  this.setState({recentResults: o, lastOpenedTitle: e.title});
  this.track("search_result_opened", {id: e.id, index: t, kind: be.GlobalSearchResultKind[e.kind]});
  if (!((this.context == null))) goto L_1c1;
  this.context;
  goto L_21a;
  if (!((undefined.openResult == null))) goto L_1eb;
  undefined.openResult;
  undefined;
  goto L_21a;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=133B file=chatgpt_global_search/src/GlobalSearchScreen
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

// fn we  args=1 vars=1 closure=1 cpool=0 bc=472B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e
// closure: Ae
function {
  return {kind: Ae(e.kind), destinationId: e.destinationId, title: e.title, messageId: e.messageId, libraryItemId: e.libraryItemId, fileId: e.fileId, fileName: e.fileName, mimeType: e.mimeType, fileExtension: e.fileExtension, libraryFileCategory: e.libraryFileCategory, libraryArtifactType: e.libraryArtifactType, gizmoId: e.gizmoId};
}

// fn Ae  args=1 vars=1 closure=2 cpool=0 bc=594B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e
// closure: be, ve
function {
  if (!((e === be.GlobalSearchResultKind.Conversation))) goto L_6d;
  return ve.Conversation;
  if (!((e === be.GlobalSearchResultKind.Image))) goto L_d9;
  return ve.Image;
  if (!((e === be.GlobalSearchResultKind.Document))) goto L_145;
  return ve.Document;
  if (!((e === be.GlobalSearchResultKind.Project))) goto L_1b1;
  return ve.Project;
  if (!((e === be.GlobalSearchResultKind.Folder))) goto L_21d;
  return ve.Folder;
  e;
  throw new Error("Unknown global search result kind: ".concat(e));
}

// fn Re  args=1 vars=1 closure=2 cpool=0 bc=1510B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e
// closure: be, ie
function {
  if (!((e.kind === be.GlobalSearchResultKind.Conversation))) goto L_143;
  if (!(e.archived)) goto L_9a;
  goto L_9f;
  // [栈深重同步 3 -> 2]
  return {icon: "◌", iconBackground: ie.OAIColor.BgTertiary, iconColor: ie.OAIColor.IconPrimary, typeLabel: "Chat"};
  if (!((e.kind === be.GlobalSearchResultKind.Image))) goto L_239;
  return {icon: "▧", iconBackground: ie.OAIColor.ThemeGreenBackground, iconColor: ie.OAIColor.ThemeGreenText, typeLabel: "Image"};
  if (!((e.kind === be.GlobalSearchResultKind.Document))) goto L_356;
  if (!((e.fileExtension == null))) goto L_2b2;
  e.fileExtension;
  return {icon: "DOC", iconBackground: ie.OAIColor.ThemeBlueBackground, iconColor: ie.OAIColor.ThemeBlueText, typeLabel: "Document"};
  if (!((e.kind === be.GlobalSearchResultKind.Project))) goto L_49a;
  if (!((e.emoji == null))) goto L_3cf;
  e.emoji;
  if (!((e.theme == null))) goto L_440;
  e.theme;
  return {icon: "◇", iconBackground: ie.OAIColor.ThemeOrangeBackground, iconColor: ie.OAIColor.ThemeOrangeText, typeLabel: "Project"};
  if (!((e.kind === be.GlobalSearchResultKind.Folder))) goto L_590;
  return {icon: "▰", iconBackground: ie.OAIColor.ThemeYellowBackground, iconColor: ie.OAIColor.ThemeYellowText, typeLabel: "Folder"};
  e.kind;
  throw new Error("Unknown global search result kind: ".concat(e.kind));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=76B file=chatgpt_global_search/src/GlobalSearchScreen
// args: e
function {
  e.Conversation = "conversation";
  e.Image = "image";
  e.Document = "document";
  e.Project = "project";
  e.Folder = "folder";
  return;
}

// fn <atom:0>  args=3 vars=84 closure=0 cpool=27 bc=8742B file=chatgpt_global_search/src/GlobalSearchScreen
// args: require, module, exports
// locals: e, t, o, r, i, n, l, s, a, d, c, y, u, h, g, p, b, m, S, v, w, A, R, C, I, P, k, f, T, O, x, B, M, L, N, F, G, V, q, _, D, E, j, K, z, U, H, Y, Q, W, X, Z, $, J, ee, te, oe, re, ie, ne, le, se, ae, de, ce, ye, ue, he, ge, pe, be, me, Se, ve, GlobalSearchScreen, <class_fields_init>, GlobalSearchScreen#1, we, Ae, Re, Ce
function {
  we = function we;
  Ae = function Ae;
  Re = function Re;
  let Ce;
  let GlobalSearchScreen#1;
  let me;
  let be;
  let pe;
  let ge;
  let he;
  let ue;
  let ye;
  let ce;
  let de;
  let ae;
  let se;
  let le;
  let ne;
  let ie;
  let re;
  let oe;
  let te;
  let ee;
  let J;
  let $;
  let Z;
  let X;
  let W;
  let Q;
  let Y;
  let H;
  let U;
  let z;
  let K;
  let j;
  let E;
  let D;
  let _;
  let q;
  let V;
  let G;
  let F;
  let N;
  let L;
  let M;
  let B;
  let x;
  let O;
  let T;
  let f;
  let k;
  let P;
  let I;
  let C;
  let R;
  let A;
  let w;
  let v;
  let S;
  let m;
  let b;
  let p;
  let g;
  let h;
  let u;
  let y;
  let c;
  let d;
  let a;
  let s;
  let l;
  let n;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.GlobalSearchScreen = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeComponentPrototype(undefined, "4HK75NT8bbE0tiRC");
  r = t.makeNodePrototype("view", undefined, "IIB7HM6CGEhRmE5h");
  i = t.makeNodePrototype("scroll", undefined, "eFDOTKMZQ9lO7R20");
  n = t.makeNodePrototype("view", undefined, "Q9QA4LH07luKHMWh");
  l = t.makeNodePrototype("view", undefined, "_psO1CUcwwRBB1Q-");
  s = t.makeComponentPrototype(["accessibilityLabel", "Back", "height", 40, "width", 32], "rIJq0roHfndtYzy9");
  a = t.makeNodePrototype("label", ["value", "‹"], "bufRt89DNjDVrhre");
  d = t.makeComponentPrototype(["grow", 1], "G6CfCZMk8-FQ3om-");
  c = t.makeComponentPrototype(["value", "Search"], "gEbAGVYIhBpb9WUL");
  y = t.makeComponentPrototype(["value", "Chats, files, images, and projects"], "5X2XBIiVN8fKxZSU");
  u = t.makeNodePrototype("scroll", ["horizontal", true], "IxsP-W2uUZ2lY99U");
  h = t.makeNodePrototype("view", undefined, "hBkZId5Tyn5BI76a");
  g = t.makeComponentPrototype(undefined, "4dhCWbFdATUtlSKR");
  p = t.makeComponentPrototype(["align", "center"], "pdtc1HlzKPYEMxkP");
  b = t.makeNodePrototype("view", undefined, "f6R-2oAN4zb6O2dw");
  m = t.makeNodePrototype("label", ["value", "✓"], "dPQ65lcUBtsxRWYb");
  S = t.makeNodePrototype("label", ["numberOfLines", 1], "BSv4Dl7hchifnFub");
  v = t.makeNodePrototype("label", ["value", "Recent searches"], "WyWmXwMv8Vvxjve6");
  w = t.makeNodePrototype("view", undefined, "FLvK0hAsifiV8VWU");
  A = t.makeNodePrototype("label", undefined, "eRwMJw3XXhjYdtia");
  R = t.makeNodePrototype("label", ["value", "Refreshing…"], "12R3WbCZAgE6CRfd");
  C = t.makeComponentPrototype(["borderWidth", 1, "minHeight", 88, "width", "100%"], "1hwsr-QwjknZmSD0");
  I = t.makeNodePrototype("view", undefined, "ID7Ms0FhxEThHwAu");
  P = t.makeNodePrototype("label", undefined, "Me1zirwK9zGfRsfa");
  k = t.makeNodePrototype("view", undefined, "Hig4UD_oXmgqEfPt");
  f = t.makeNodePrototype("label", ["numberOfLines", 1], "hKMM9RfPEH9CcRoS");
  T = t.makeNodePrototype("label", ["numberOfLines", 2], "rpy4eBBjii4Ub3Ui");
  O = t.makeNodePrototype("label", undefined, "MtUhcB05YcSKX2Ka");
  x = t.makeNodePrototype("label", ["value", "›"], "tpcFZ-Ynit3lPLZt");
  B = t.makeNodePrototype("view", undefined, "j5bj15loA23_n6ub");
  M = t.makeNodePrototype("view", undefined, "YWhgZta-gbv06c7r");
  L = t.makeNodePrototype("label", ["value", "⌕"], "hEJBXDN9VZ6gUbCx");
  N = t.makeNodePrototype("label", ["value", "Search your ChatGPT"], "rJGH-IV0uk4jC1Xt");
  F = t.makeNodePrototype("label", ["value", "Find a conversation, image, document, folder, or project from one place."], "TXDFNdUqFVawIn1a");
  G = t.makeComponentPrototype(["accessibilityLabel", "Search for Tokyo"], "4YvvYU1d9fiATfY5");
  V = t.makeComponentPrototype(["value", "Try “Tokyo”"], "fw-oIbLD2GGSz5jL");
  q = t.makeNodePrototype("view", ["paddingTop", 8], "GvLNwXBIKXAAPfQ8");
  _ = t.makeNodePrototype("view", undefined, "GpuR9E_t3540BAjH");
  D = t.makeNodePrototype("view", undefined, "LYsUpONMy9Gw5b8l");
  E = t.makeNodePrototype("view", ["flexGrow", 1], "bCMr0QWetvzaZ6Kb");
  j = t.makeNodePrototype("view", undefined, "zrU4Kg1IcEbpGwYH");
  K = t.makeNodePrototype("view", undefined, "r4IxDKYrEQ_iq8_E");
  z = t.makeNodePrototype("view", undefined, "I_IVIM2ZQGEMobox");
  U = t.makeNodePrototype("label", ["value", "⌕"], "Nx9x4vTNG0TC-Ypw");
  H = t.makeNodePrototype("label", ["value", "No results found"], "pRhNulhha47hRFuj");
  Y = t.makeNodePrototype("label", undefined, "uvxmQGdvNr8AWl6Y");
  Q = t.makeComponentPrototype(["label", "Clear search"], "nvsA2RdMf2xQ0yoB");
  W = t.makeNodePrototype("view", undefined, "WvopzyKYXjaC0JQ8");
  X = t.makeNodePrototype("label", ["value", "!"], "dQVVzkMg0do65j2n");
  Z = t.makeNodePrototype("label", ["value", "Search hit a snag"], "jTlP6D6zwKpy2-ob");
  $ = t.makeNodePrototype("label", ["value", "The host API could not complete the request."], "jw2mbu_zZ9WDb_XY");
  J = t.makeComponentPrototype(["label", "Try again"], "FR_Mu9OWooY3MkpA");
  ee = t.makeNodePrototype("view", undefined, "SLkuf4aODzjAfNIO");
  te = t.makeComponentPrototype(["accessibilityId", "chatgpt-global-search", "accessibilityLabel", "Search ChatGPT", "placeholder", "Search", "shortcutHint", "⌘ K"], "xckPSnfhwq9OBzYO");
  oe = require("oai_core/src/OAIAttributes");
  re = require("oai_core/src/OAITheme");
  ie = require("oai_core/src/OAITokens");
  ne = require("oai_platform_services/src/OAINetworkClient");
  le = require("oai_ui/src/components/Button");
  se = require("oai_ui/src/components/Column");
  ae = require("oai_ui/src/components/Pressable");
  de = require("oai_ui/src/components/SearchField");
  ce = require("oai_ui/src/components/Text");
  ye = require("valdi_core/src/Component");
  ue = require("valdi_core/src/Device");
  he = require("valdi_core/src/Style");
  ge = require("valdi_core/src/SystemFont");
  pe = require("./GlobalSearchApi");
  be = require("./GlobalSearchModels");
  me = require("./GlobalSearchRepository");
  if ((Se)) goto L_e59;
  Se = {};
  !function <atom:0>({});
  let GlobalSearchScreen;
  let <class_fields_init>;
  class GlobalSearchScreen extends ye.StatefulComponent { ... }
  <proto:GlobalSearchScreen>.onCreate = function <atom:0>;
  <proto:GlobalSearchScreen>.onDestroy = function <atom:0>;
  <proto:GlobalSearchScreen>.onRender = function <atom:0>;
  <proto:GlobalSearchScreen>.renderHeader = function <atom:0>;
  <proto:GlobalSearchScreen>.renderFilters = function <atom:0>;
  <proto:GlobalSearchScreen>.renderResults = function <atom:0>;
  <proto:GlobalSearchScreen>.renderResult = function <atom:0>;
  <proto:GlobalSearchScreen>.renderLandingState = function <atom:0>;
  <proto:GlobalSearchScreen>.renderLoadingState = function <atom:0>;
  <proto:GlobalSearchScreen>.renderEmptyState = function <atom:0>;
  <proto:GlobalSearchScreen>.renderErrorState = function <atom:0>;
  <proto:GlobalSearchScreen>.renderSearchBar = function <atom:0>;
  <proto:GlobalSearchScreen>.selectFilter = function <atom:0>;
  <proto:GlobalSearchScreen>.scheduleSearch = function <atom:0>;
  <proto:GlobalSearchScreen>.performSearch = function <atom:0>;
  <proto:GlobalSearchScreen>.openResult = function <atom:0>;
  <proto:GlobalSearchScreen>.track = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:GlobalSearchScreen>;
  GlobalSearchScreen = function <atom:0>;
  // close_loc <class_fields_init>
  GlobalSearchScreen#1 = function <atom:0>;
  exports.GlobalSearchScreen = GlobalSearchScreen#1;
  if ((ve)) goto L_f39;
  ve = {};
  function <atom:0>({});
  Ce = {root: new he.Style({backgroundColor: ie.OAIColor.BgPrimary, flexDirection: "column", height: "100%", width: "100%"}), header: new he.Style({alignItems: "center", borderColor: ie.OAIColor.BorderLight, borderWidth: 1, flexDirection: "row", minHeight: 74, padding: "14 16", width: "100%"}), backIcon: new he.Style({color: ie.OAIColor.IconPrimary, font: ge.systemFont(34), textAlign: "center", width: "100%"}), filterScroll: new he.Style({borderColor: ie.OAIColor.BorderLight, borderWidth: 1, height: 54, width: "100%"}), filterRow: new he.Style({alignItems: "center", flexDirection: "row", height: 53, padding: "0 14"}), resultsScroll: new he.Style({flexGrow: 1, flexShrink: 1, height: 1, width: "100%"}), resultsContent: new he.Style({minHeight: "100%", padding: "8 16 28", width: "100%"}), openedBanner: new he.Style({alignItems: "center", backgroundColor: ie.OAIColor.BgStatusSuccess, borderRadius: 10, flexDirection: "row", margin: "6 0 8", padding: "10 12", width: "100%"}), openedBannerIcon: new he.Style({color: ie.OAIColor.TextStatusSuccess, font: ge.systemBoldFont(14), marginRight: 8}), openedBannerText: new he.Style({color: ie.OAIColor.TextStatusSuccess, flexGrow: 1, font: ge.systemFont(12)}), sectionTitle: new he.Style({color: ie.OAIColor.TextPrimary, font: ge.systemBoldFont(17), marginBottom: 8, marginLeft: 4, marginTop: 14, width: "100%"}), resultSummary: new he.Style({alignItems: "center", flexDirection: "row", padding: "10 4 4", width: "100%"}), resultSummaryText: new he.Style({color: ie.OAIColor.TextTertiary, flexGrow: 1, font: ge.systemBoldFont(11), letterSpacing: 0.4}), refreshLabel: new he.Style({color: ie.OAIColor.TextTertiary, font: ge.systemFont(11)}), resultIcon: new he.Style({alignItems: "center", borderRadius: 11, flexShrink: 0, height: 48, justifyContent: "center", marginRight: 13, width: 48}), resultIconLabel: new he.Style({font: ge.systemBoldFont(13), textAlign: "center", width: "100%"}), resultText: new he.Style({flexGrow: 1, flexShrink: 1, minWidth: 0, paddingRight: 8}), resultTitle: new he.Style({color: ie.OAIColor.TextPrimary, font: ge.systemBoldFont(15), numberOfLines: 1, textOverflow: "ellipsis", width: "100%"}), resultSnippet: new he.Style({color: ie.OAIColor.TextSecondary, font: ge.systemFont(13), lineHeightMultiple: 1.2, marginTop: 3, numberOfLines: 1, textOverflow: "ellipsis", width: "100%"}), resultType: new he.Style({color: ie.OAIColor.TextTertiary, font: ge.systemBoldFont(9), letterSpacing: 0.6, marginTop: 6, width: "100%"}), resultChevron: new he.Style({color: ie.OAIColor.IconTertiary, flexShrink: 0, font: ge.systemFont(24), textAlign: "right", width: 16}), centerState: new he.Style({alignItems: "center", justifyContent: "center", minHeight: 440, padding: "44 28", width: "100%"}), heroIcon: new he.Style({alignItems: "center", backgroundColor: ie.OAIColor.BgTertiary, borderRadius: 34, height: 68, justifyContent: "center", marginBottom: 18, width: 68}), heroIconLabel: new he.Style({color: ie.OAIColor.IconSecondary, font: ge.systemFont(34), textAlign: "center", width: "100%"}), emptyIcon: new he.Style({color: ie.OAIColor.IconTertiary, font: ge.systemBoldFont(30), marginBottom: 14, textAlign: "center"}), centerTitle: new he.Style({color: ie.OAIColor.TextPrimary, font: ge.systemBoldFont(19), textAlign: "center", width: "100%"}), centerMessage: new he.Style({color: ie.OAIColor.TextSecondary, font: ge.systemFont(14), lineHeightMultiple: 1.3, marginTop: 8, numberOfLines: 0, textAlign: "center", width: "100%"}), loadingRow: new he.Style({alignItems: "center", flexDirection: "row", height: 86, padding: "12 4", width: "100%"}), loadingIcon: new he.Style({backgroundColor: ie.OAIColor.BgTertiary, borderRadius: 11, height: 48, marginRight: 13, width: 48}), loadingTitle: new he.Style({backgroundColor: ie.OAIColor.BgTertiary, borderRadius: 4, height: 14, marginBottom: 9}), loadingSubtitle: new he.Style({backgroundColor: ie.OAIColor.BgSecondary, borderRadius: 4, height: 11}), searchBarArea: new he.Style({alignItems: "center", backgroundColor: ie.OAIColor.BgPrimary, borderColor: ie.OAIColor.BorderLight, borderWidth: 1, flexDirection: "row", padding: "12 14 16", width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_global_search/src/GlobalSearchScreen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
