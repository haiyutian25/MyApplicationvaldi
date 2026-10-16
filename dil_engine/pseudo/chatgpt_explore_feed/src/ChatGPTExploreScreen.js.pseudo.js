// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=116B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: this
function {
  this.setState({choosingProvider: !this.state.choosingProvider});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=48B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: this
function {
  this.setState({choosingProvider: false});
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=74B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e, t
// closure: this
function {
  return (e === this.state.providers[t]);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=475B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// locals: t
// closure: this, A
function {
  let t;
  if (((true !== this.viewModel.showDebugControls))) goto L_75;
  if (!((undefined === this.selection))) goto L_78;
  return;
  this.setState({choosingProvider: false});
  t = A.normalizeExploreFeedSelection([e]);
  if (!((t.length === this.state.providers.length))) goto L_14a;
  if ((t.every(function <atom:0>))) goto L_1da;
  this.setState({providers: t});
  this.selection.value = e;
  this.observeFeed(t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=270B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: this
function {
  if (!(this.state.preferencesLoaded)) goto L_10d;
  if (!(!this.disposed)) goto L_10d;
  if (!((this.controller == null))) goto L_a4;
  this.controller;
  goto L_10d;
  undefined.reload(this.state.providers);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=203B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// closure: P, this
function {
  if (!(P.isVersionAtLeast(104))) goto L_ca;
  if (!(!this.disposed)) goto L_ca;
  if (!((this.context.onScroll == null))) goto L_a5;
  this.context.onScroll;
  this.context;
  goto L_ca;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=166B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: P, this
function {
  if (!(P.isVersionAtLeast(104))) goto L_a5;
  if (!(!this.disposed)) goto L_a5;
  if (!((this.context.onScrollEnd == null))) goto L_a2;
  this.context.onScrollEnd;
  this.context;
  goto L_a5;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=167B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: P, this
function {
  if (!(P.isVersionAtLeast(143))) goto L_a6;
  if (!(!this.disposed)) goto L_a6;
  if (!((this.context.onReturnToComposerRequested == null))) goto L_a3;
  this.context.onReturnToComposerRequested;
  this.context;
  goto L_a6;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=121B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: this
function {
  if ((this.disposed)) goto L_78;
  if (!((this.controller == null))) goto L_54;
  this.controller;
  goto L_78;
  undefined.loadMore();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=45B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// closure: this
function {
  if (!(e)) goto L_2c;
  this.loadMore();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=491B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e, t
// closure: this
function {
  if (!(!this.disposed)) goto L_1ea;
  if (!(this.internalActionsEnabled)) goto L_1ea;
  if (!(!this.state.feed.isRefreshing)) goto L_1ea;
  if (!(this.state.feed.cards.includes(e))) goto L_1ea;
  this.setState({loggingMetadataTarget: {item: e, json: JSON.stringify(t, null, 2)}, feedbackTarget: undefined});
  this.updateFeedbackCoverage();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=162B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: this
function {
  if (!((undefined !== this.state.loggingMetadataTarget))) goto L_a1;
  this.setState({loggingMetadataTarget: undefined});
  this.updateFeedbackCoverage();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=671B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e, t
// locals: i
// closure: P, this
function {
  if (!(P.isVersionAtLeast(193))) goto L_29e;
  if (!(!this.disposed)) goto L_29e;
  if (!(this.internalActionsEnabled)) goto L_29e;
  if (!(!this.state.feed.isRefreshing)) goto L_29e;
  if (!(this.state.feed.cards.includes(e))) goto L_29e;
  let i;
  if (!((this.feedItemVisibilitySession == null))) goto L_1ab;
  this.feedItemVisibilitySession;
  goto L_1cc;
  i = undefined.interactionContext;
  if (!((undefined !== i))) goto L_29d;
  if (!((this.feedItemVisibilitySession == null))) goto L_207;
  this.feedItemVisibilitySession;
  goto L_228;
  if (!((true === undefined.isVisible))) goto L_29d;
  null;
  t;
  this.setState({feedbackTarget: {item: e, unit: {}, context: i}});
  this.updateFeedbackCoverage();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=162B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: this
function {
  if (!((undefined !== this.state.feedbackTarget))) goto L_a1;
  this.setState({feedbackTarget: undefined});
  this.updateFeedbackCoverage();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=120B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: O, b, s
function {
  return new O.ExploreFeedInteractions(new b.OAINetworkClient(s), s.loggingService);
}

// fn <atom:0>  args=3 vars=5 closure=5 cpool=1 bc=786B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e, t, i
// locals: o, s
// closure: O, b, P, this, m
function {
  let s;
  let o;
  if ((!P.isVersionAtLeast(183))) goto L_15a;
  if ((this.disposed)) goto L_15a;
  if ((this.state.feed.isRefreshing)) goto L_15a;
  if (!(!this.state.feed.cards.includes(e))) goto L_15d;
  return;
  if (!((this.feedItemVisibilitySession == null))) goto L_189;
  this.feedItemVisibilitySession;
  goto L_1aa;
  o = undefined.interactionContext;
  if (((undefined === o))) goto L_204;
  if (!((this.feedItemVisibilitySession == null))) goto L_1e2;
  this.feedItemVisibilitySession;
  goto L_203;
  if (!((true !== undefined.isVisible))) goto L_207;
  return;
  s = this.context.platformServices;
  m.accountContainerFor(s).resolve(O.ExploreFeedInteractions, function <atom:0>).sendClicked(t, o, Date.now(), i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=258B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: t
// closure: e, this, o
function {
  if (!((undefined !== e.rating))) goto L_101;
  if (!(!this.disposed)) goto L_101;
  if (!(this.isFeedbackVisitCurrent(o))) goto L_101;
  if (!((this.feedItemVisibilitySession == null))) goto L_b3;
  this.feedItemVisibilitySession;
  goto L_d4;
  if (!((true === undefined.isVisible))) goto L_101;
  this.notifyFeedbackSubmissionResult(t);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=3 cpool=1 bc=853B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e, t, i
// locals: o
// closure: this, P, w
function {
  if (!(P.isVersionAtLeast(189))) goto L_354;
  let o;
  if ((this.disposed)) goto L_1f7;
  if (((true !== this.viewModel.widgetLongPressEnabled))) goto L_1f7;
  if (!((undefined !== e.rating))) goto L_f7;
  if ((!this.internalActionsEnabled)) goto L_1f7;
  if ((this.state.feed.isRefreshing)) goto L_1f7;
  if (!(!this.state.feed.cards.includes(t))) goto L_1fa;
  return;
  if (!((this.feedItemVisibilitySession == null))) goto L_226;
  this.feedItemVisibilitySession;
  goto L_247;
  o = undefined.interactionContext;
  if (!((undefined !== o))) goto L_350;
  if (!((this.feedItemVisibilitySession == null))) goto L_282;
  this.feedItemVisibilitySession;
  goto L_2a3;
  if (!((true === undefined.isVisible))) goto L_350;
  w.handleExploreFeedFeedbackSelection({unit: i, context: o, action: e}, this.context.platformServices).then(function <atom:0>);
  // close_loc o
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=121B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: P, this
function {
  if (!(P.isVersionAtLeast(183))) goto L_77;
  if (!((this.feedItemVisibilitySession == null))) goto L_55;
  this.feedItemVisibilitySession;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.interactionContext;
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=295B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// closure: this, t
function {
  if (!(e)) goto L_124;
  if (!(!this.disposed)) goto L_124;
  if (!((this.state.feedbackTarget === t))) goto L_124;
  if (!(this.isFeedbackVisitCurrent(t.context))) goto L_124;
  this.dismissFeedbackSheet();
  this.notifyFeedbackSubmissionResult(true);
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=862B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// locals: t
// closure: this, P, w
function {
  let t;
  t = this.state.feedbackTarget;
  if (!(P.isVersionAtLeast(193))) goto L_332;
  if (!(!this.disposed)) goto L_332;
  if (!((undefined !== t))) goto L_332;
  if (!(this.isFeedbackVisitCurrent(t.context))) goto L_332;
  if (!(!this.state.feed.isRefreshing)) goto L_332;
  if (!(this.state.feed.cards.includes(t.item))) goto L_332;
  if (!(this.internalActionsEnabled)) goto L_332;
  return w.handleExploreFeedFeedbackSelection({unit: t.unit, context: t.context, action: {feedbackText: e}}, this.context.platformServices).then(function <atom:0>);
  return Promise.resolve(false);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// closure: t
function {
  return (e.id === t.itemId);
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=336B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e, t
// closure: this, I
function {
  if (!(!this.disposed)) goto L_14f;
  if (!(this.state.feed.cards.some(function <atom:0>))) goto L_14f;
  this.context.actions.handleAction(e, I.exploreFeedMessageMetadata(t));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// closure: t
function {
  return (e.id === t.itemId);
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=387B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e, t
// closure: this, I
function {
  if ((this.disposed)) goto L_b8;
  if (!(!this.state.feed.cards.some(function <atom:0>))) goto L_f2;
  return Promise.reject(new Error("Explore card is no longer available"));
  return this.context.actions.handleServerAction(e, I.exploreFeedMessageMetadata(t));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=147B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// closure: this
function {
  if ((this.disposed)) goto L_92;
  this.context.actions.handleTextSelectionAction(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// closure: t
function {
  return (e.id === t.itemId);
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=454B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e, t
// locals: i
// closure: this, I
function {
  let i;
  if ((this.disposed)) goto L_bb;
  if (!(!this.state.feed.cards.some(function <atom:0>))) goto L_f4;
  return Promise.reject(new Error("Explore card is no longer available"));   // tail call
  i = this.context.actions.handleClientAction;
  if (!((undefined === i))) goto L_19a;
  return Promise.reject(new Error("Explore client action is no longer available"));
  return i(e, I.exploreFeedMessageMetadata(t));
}

// fn <atom:0>  args=0 vars=4 closure=10 cpool=21 bc=579B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// locals: this, this.active_func, new.target, arguments
// closure: A, P, O, b, m, w, I, <class_fields_init>, E, M
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
  this.state = {feed: {cards: [], phase: E.ExploreFeedLoadPhase.Idle, reloadFailed: false, isRefreshing: false, isLoadingMore: false, loadMoreFailed: false}, providers: [], choosingProvider: false, visibilityGeneration: 0, preferencesLoaded: false};
  this.disposed = false;
  this.renderGeneration = 0;
  this.providerAnchor = new M.ElementRef();
  this.toggleProviders = function <atom:0>;
  this.dismissProviders = function <atom:0>;
  this.selectProvider = function <atom:0>;
  this.refresh = function <atom:0>;
  this.handleScroll = function <atom:0>;
  this.handleScrollEnd = function <atom:0>;
  this.handleReturnToComposerRequested = function <atom:0>;
  this.loadMore = function <atom:0>;
  this.handleLoadMoreVisibility = function <atom:0>;
  this.openLoggingMetadataSheet = function <atom:0>;
  this.dismissLoggingMetadataSheet = function <atom:0>;
  this.openFeedbackSheet = function <atom:0>;
  this.dismissFeedbackSheet = function <atom:0>;
  this.handleItemClicked = function <atom:0>;
  this.handleFeedbackSelected = function <atom:0>;
  this.getFeedContext = function <atom:0>;
  this.submitFeedbackText = function <atom:0>;
  this.handleWidgetAction = function <atom:0>;
  this.handleServerAction = function <atom:0>;
  this.handleTextSelection = function <atom:0>;
  this.handleClientAction = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=254B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// locals: this
// closure: P
function {
  this = this;
  if (!((this.feedItemVisibilitySubscription == null))) goto L_2c;
  this.feedItemVisibilitySubscription;
  goto L_50;
  undefined.unsubscribe();
  if (!(P.isVersionAtLeast(183))) goto L_cb;
  if (!((this.feedItemVisibilitySession == null))) goto L_a7;
  this.feedItemVisibilitySession;
  goto L_cb;
  undefined.dispose();
  this.disposed = true;
  this.detachFeed();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=106B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: q, this
function {
  return q.createFeedItemVisibilityBatcher(this.context.platformServices);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=353B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// locals: e
// closure: this
function {
  let e;
  e = this.state.feedbackTarget;
  if (!((undefined !== e))) goto L_10b;
  if (!(this.isFeedbackVisitCurrent(e.context))) goto L_10b;
  goto L_10c;
  // [栈深重同步 4 -> 3]
  this.setState({visibilityGeneration: (this.state.visibilityGeneration + 1), feedbackTarget: undefined});
  this.updateFeedbackCoverage();
  this.logFeedViewed();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: D
function {
  return new D.ExploreFeedSelection();
}

// fn <atom:0>  args=1 vars=6 closure=7 cpool=3 bc=2243B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// locals: e#1, t, i, o, this
// closure: q, D, P, N, m, G, A
function {
  this = this;
  let o;
  let i;
  let t;
  if (!((undefined !== e))) goto L_c0;
  if (!((e.accountId !== this.viewModel.accountId))) goto L_c0;
  this.disposed = true;
  this.detachFeed();
  throw new Error("Explore must be recreated with the new account's platform services");
  if (!(this.disposed)) goto L_e6;
  return;
  if ((this.internalActionsEnabled)) goto L_15a;
  this.dismissFeedbackSheet();
  this.dismissLoggingMetadataSheet();
  if (!(P.isVersionAtLeast(183))) goto L_40c;
  if (!((undefined === this.feedItemVisibilitySession))) goto L_40c;
  if (!((undefined !== this.context.feedItemVisibilityHost))) goto L_40c;
  this.feedItemVisibilitySession = new N.FeedItemVisibilitySession(this.context.feedItemVisibilityHost, m.accountContainerFor(this.context.platformServices).resolve(q.FeedItemVisibilityBatcher, function <atom:0>), G.createFeedDwellTracker(this.context.platformServices));
  this.feedItemVisibilitySubscription = this.feedItemVisibilitySession.changes.subscribe(function <atom:0>);
  this.feedItemVisibilitySession.changes.subscribe(function <atom:0>);
  if (!((true !== this.viewModel.showDebugControls))) goto L_4ce;
  if (!(this.state.choosingProvider)) goto L_4ce;
  this.setState({choosingProvider: false});
  if (!((undefined === this.selection))) goto L_610;
  let e#1;
  e#1 = this.context.platformServices;
  if (!((undefined === e#1.accountScope))) goto L_595;
  goto L_607;
  // [栈深重同步 2 -> 1]
  this.selection = m.accountContainerFor(e#1).resolve(D.ExploreFeedSelection, function <atom:0>);
  if (!((true === this.viewModel.showDebugControls))) goto L_69f;
  goto L_6a0;
  // [栈深重同步 1 -> 0]
  t = "";
  i = A.normalizeExploreFeedSelection([t]);
  if ((!this.state.preferencesLoaded)) goto L_7b3;
  o = (i.join(",") !== this.state.providers.join(","));
  if (!(o)) goto L_7f1;
  this.setState({providers: i, preferencesLoaded: true});
  if (!(P.isVersionAtLeast(214))) goto L_892;
  if (!((undefined !== this.context.onAppearancePrepared))) goto L_892;
  goto L_8c2;
  // [栈深重同步 1 -> 0]
  if (!(o)) goto L_8c2;
  this.observeFeed(i);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=177B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: this, r, i
function {
  if ((this.disposed)) goto L_b0;
  if (((r !== this.pendingAppearancePreparation))) goto L_b0;
  this.pendingAppearancePreparation = undefined;
  if (!((this.context.onAppearancePrepared == null))) goto L_aa;
  this.context.onAppearancePrepared;
  this.context;
  goto L_b0;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=153B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: this, r, i
function {
  if ((this.disposed)) goto L_98;
  if (((r !== this.pendingAppearancePreparation))) goto L_98;
  this.renderer.onNextDraw(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=1 bc=378B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e, t
// locals: i, o, s, r, this
function {
  this = this;
  let r;
  let s;
  let o;
  let i;
  i = this.viewModel.appearanceRequestId;
  o = (i !== this.appearanceRequestId);
  if ((o)) goto L_ad;
  if (!(t)) goto L_ad;
  s = (undefined !== this.pendingAppearancePreparation);
  this.appearanceRequestId = i;
  if (!((undefined === i))) goto L_d0;
  this.pendingAppearancePreparation = undefined;
  return;
  if (!(s)) goto L_d8;
  goto L_d9;
  // [栈深重同步 1 -> 0]
  r = undefined;
  if (!((undefined !== r))) goto L_f2;
  this.pendingAppearancePreparation = r;
  r;
  if ((t)) goto L_fb;
  if (!(o)) goto L_126;
  this.observeFeed(e);
  if (!((undefined !== r))) goto L_179;
  this.renderer.onRenderComplete(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// closure: m
function {
  return (e.value === m);
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=1 bc=960B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: m, e, s, U, r, this, x, n, N, B
function {
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", U.header);
  e.beginRender(r, undefined);
  e.setAttributeRef(this.providerAnchor);
  e.beginComponent(x.Button, n, undefined, undefined);
  if (!((N.find(function <atom:0>) == null))) goto L_1a0;
  N.find(function <atom:0>);
  goto L_1c1;
  if (!((undefined.label == null))) goto L_20e;
  undefined.label;
  e.setViewModelProperty("label", B.default.exploreAll());
  e.setViewModelProperty("variant", x.ButtonVariant.Ghost);
  e.setViewModelProperty("onPress", this.toggleProviders);
  e.setViewModelProperty("disabled", !this.state.preferencesLoaded);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=1 bc=11B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: m, e, s, U, r, this, x, n, N, B, w
function {
  if (!(w)) goto L_a;
  function <atom:0>();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=397B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: e, x, a, D, this
function {
  e.beginComponent(x.Button, a, undefined, undefined);
  e.setViewModelProperty("label", D.retryTitle);
  e.setViewModelProperty("onPress", this.loadMore);
  e.setViewModelProperty("variant", x.ButtonVariant.Secondary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=279B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: e, l, b, this, U
function {
  e.beginRender(l, b.nextCursor);
  e.setAttributeFunction("onVisibilityChanged", this.handleLoadMoreVisibility);
  e.setAttributeStyle("style", U.pagination);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=2 bc=447B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: e, x, a, D, this, l, b, U, S, d, f
function {
  if (!(b.isLoadingMore)) goto L_166;
  e.beginComponent(S.Text, d, undefined, undefined);
  e.setViewModelProperty("size", f.OAITextSize.BodyMedium);
  e.setViewModelProperty("value", D.loadingTitle);
  goto L_1be;
  // [栈深重同步 1 -> 0]
  if (!(b.loadMoreFailed)) goto L_191;
  goto L_1be;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== b.nextCursor))) goto L_1be;
  function <atom:0>();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=415B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: e, y, p, B, N, m, this
function {
  e.beginComponent(y.SelectionMenu, p, undefined, undefined);
  e.setViewModelProperty("title", B.default.exploreProviders());
  e.setViewModelProperty("options", N);
  e.setViewModelProperty("value", m);
  e.setViewModelProperty("onChange", this.selectProvider);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=1 bc=1262B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: e, y, p, B, N, m, this, c, U, V, h
function {
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", U.menuOverlay);
  if (!((this.viewModel.contentInsets == null))) goto L_f3;
  this.viewModel.contentInsets;
  goto L_114;
  e.setAttributeNumber("marginTop", undefined.topInset);
  if (!((this.viewModel.contentInsets == null))) goto L_18e;
  this.viewModel.contentInsets;
  goto L_1af;
  e.setAttributeNumber("marginBottom", undefined.bottomInset);
  e.beginComponent(V.AnchoredSurface, h, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", B.default.exploreProviders());
  e.setViewModelProperty("dismissAccessibilityLabel", B.default.exploreDismissProviders());
  e.setViewModelProperty("anchorRef", this.providerAnchor);
  e.setViewModelProperty("align", V.AnchoredSurfaceAlign.End);
  e.setViewModelProperty("open", this.state.choosingProvider);
  e.setViewModelProperty("onDismiss", this.dismissProviders);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=345B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: e, L, g, this
function {
  e.beginComponent(L.ExploreFeedLoggingMetadataSheet, g, undefined, undefined);
  e.setViewModelProperty("json", this.state.loggingMetadataTarget.json);
  e.setViewModelProperty("onDismiss", this.dismissLoggingMetadataSheet);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=279B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: e, k, u, this
function {
  e.beginComponent(k.ExploreFeedFeedbackSheet, u, undefined, undefined);
  e.setViewModelProperty("onDismiss", this.dismissFeedbackSheet);
  e.setViewModelProperty("onSubmit", this.submitFeedbackText);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=39 cpool=5 bc=4171B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: m, e, s, U, r, this, x, n, N, B, w, a, D, l, b, S, d, f, y, p, c, V, h, L, g, k, u, i, T, o, P, O, q, I, A, _, C, F, M
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", U.screen);
  e.beginComponent(T.ExploreFeedSurface, o, this.state.providers.join(","), undefined);
  e.setViewModelProperty("cards", b.cards);
  e.setViewModelProperty("feedId", b.feedId);
  e.setViewModelProperty("getFeedContext", this.getFeedContext);
  if (!(P.isVersionAtLeast(183))) goto L_2d0;
  if (!((this.feedItemVisibilitySession == null))) goto L_2ad;
  this.feedItemVisibilitySession;
  goto L_2d1;
  goto L_2d1;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("visibilityTracker", undefined);
  if (!(P.isVersionAtLeast(183))) goto L_377;
  if (!((this.feedItemVisibilitySession == null))) goto L_354;
  this.feedItemVisibilitySession;
  goto L_378;
  goto L_378;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("visibilityGeneration", undefined);
  e.setViewModelProperty("accountId", this.viewModel.accountId);
  e.setViewModelProperty("menuContext", O);
  e.setViewModelProperty("onItemClicked", this.handleItemClicked);
  e.setViewModelProperty("onFeedbackSelected", q);
  e.setViewModelProperty("onAddFeedback", I);
  if (!(A)) goto L_523;
  goto L_524;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onDebug", undefined);
  e.setViewModelProperty("feedStatus", b.phase);
  e.setViewModelProperty("reloadFailed", b.reloadFailed);
  e.setViewModelProperty("strings", D);
  e.setViewModelProperty("reduceMotion", _);
  e.setViewModelProperty("isDarkMode", this.viewModel.isDarkMode);
  e.setViewModelProperty("platformServices", this.context.platformServices);
  e.setViewModelProperty("supportedClientActions", this.context.actions.supportedClientActions);
  e.setViewModelProperty("textSelectionMenuActions", this.context.actions.textSelectionMenuActions);
  e.setViewModelProperty("textSelectionMenuActionHandler", this.handleTextSelection);
  e.setViewModelProperty("onWidgetAction", this.handleWidgetAction);
  e.setViewModelProperty("onServerAction", this.handleServerAction);
  e.setViewModelProperty("onClientAction", C);
  e.setViewModelProperty("onRetry", this.refresh);
  if (!((undefined === this.viewModel.contentInsets))) goto L_a1e;
  goto L_bcb;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("contentPadding", {top: this.viewModel.contentInsets.topInset, right: this.viewModel.contentInsets.rightInset, bottom: this.viewModel.contentInsets.bottomInset, left: this.viewModel.contentInsets.leftInset});
  e.setViewModelProperty("isRefreshing", b.isRefreshing);
  if (!(this.state.preferencesLoaded)) goto L_cbb;
  if (!(F)) goto L_cbb;
  goto L_cbc;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onRefresh", undefined);
  e.setViewModelProperty("refreshTitle", B.default.exploreRefresh());
  e.setViewModelProperty("onScroll", this.handleScroll);
  e.setViewModelProperty("onScrollEnd", this.handleScrollEnd);
  if (!(P.isVersionAtLeast(151))) goto L_e74;
  e.setViewModelProperty("resetScrollToTop", (true === this.viewModel.resetScrollToTop));
  e.setViewModelProperty("returnPullThreshold", M);
  e.setViewModelProperty("onReturnToComposerRequested", this.handleReturnToComposerRequested);
  e.setNamedSlot("header", function <atom:0>);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  if (!(w)) goto L_f84;
  function <atom:0>();
  if (!((undefined !== this.state.loggingMetadataTarget))) goto L_fd3;
  function <atom:0>();
  if (!((undefined !== this.state.feedbackTarget))) goto L_1022;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=131B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: this, G, z
function {
  if ((this.disposed)) goto L_82;
  if (((G !== this.renderGeneration))) goto L_82;
  this.renderedFeed = z;
  this.logFeedViewed();
  return;
}

// fn <atom:0>  args=0 vars=18 closure=30 cpool=2 bc=4339B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// locals: b, m, w, M, F, C, A, I, q, O, _, D, N, G, H, X, z, this
// closure: e, s, U, r, x, n, B, a, l, S, d, f, y, p, c, V, h, L, g, k, u, i, T, o, P, j, v, t, R, E
function {
  this = this;
  let z;
  let X;
  let H;
  let G;
  let N;
  let D;
  let _;
  let O;
  let q;
  let I;
  let A;
  let C;
  let F;
  let M;
  let w;
  let m;
  let b;
  b = this.state.feed;
  if (!((1 === this.state.providers.length))) goto L_10c;
  goto L_10d;
  // [栈深重同步 1 -> 0]
  m = "";
  w = (true === this.viewModel.showDebugControls);
  if (!(P.isVersionAtLeast(143))) goto L_211;
  if (!((undefined !== this.context.onReturnToComposerRequested))) goto L_211;
  goto L_212;
  // [栈深重同步 1 -> 0]
  M = undefined;
  if (!(P.isVersionAtLeast(104))) goto L_28e;
  if (!((true === this.viewModel.refreshEnabled))) goto L_28e;
  F = (undefined === M);
  C = undefined;
  if (!(P.isVersionAtLeast(165))) goto L_354;
  if (!((undefined !== this.context.actions.handleClientAction))) goto L_354;
  C = this.handleClientAction;
  this.handleClientAction;
  A = this.internalActionsEnabled;
  I = undefined;
  q = undefined;
  O = {};
  if (!(P.isVersionAtLeast(189))) goto L_4d1;
  O = {nativeMenuViewFactory: this.context.nativeMenuViewFactory};
  {nativeMenuViewFactory: this.context.nativeMenuViewFactory};
  if (!((true === this.viewModel.widgetLongPressEnabled))) goto L_4d1;
  q = this.handleFeedbackSelected;
  this.handleFeedbackSelected;
  if (!(P.isVersionAtLeast(193))) goto L_4d1;
  if (!(A)) goto L_4d1;
  I = this.openFeedbackSheet;
  this.openFeedbackSheet;
  _ = false;
  if (!(P.isVersionAtLeast(252))) goto L_54d;
  _ = (true === this.viewModel.reduceMotion);
  (true === this.viewModel.reduceMotion);
  D = {loadingTitle: B.default.exploreLoading(), loadingMessages: [B.default.exploreLoadingStitching(), B.default.exploreLoadingConnectingDots(), B.default.exploreLoadingFindingIngredients(), B.default.exploreLoadingKneadingIdeas(), B.default.exploreLoadingCooking(), B.default.exploreLoadingStirringIdeas(), B.default.exploreLoadingPuttingPiecesTogether(), B.default.exploreLoadingNudgingPiecesIntoPlace(), B.default.exploreLoadingFittingPiecesTogether(), B.default.exploreLoadingFollowingSpark(), B.default.exploreLoadingIdeasTakingRoot(), B.default.exploreLoadingLettingIdeasBloom(), B.default.exploreLoadingSeeingBlooms(), B.default.exploreLoadingFollowingGlimmer(), B.default.exploreLoadingSeeingEmerges(), B.default.exploreLoadingLettingThoughtsUnfurl(), B.default.exploreLoadingSeeingSprouts()], errorTitle: B.default.exploreErrorTitle(), errorMessage: B.default.exploreErrorMessage(), retryTitle: B.default.exploreRetry(), reloadErrorMessage: B.default.exploreErrorMessage(), endOfFeedTitle: B.default.exploreEndOfFeedTitle(), endOfFeedMessage: B.default.exploreEndOfFeedMessage()};
  N = j();
  e.beginComponent(v.OAITheme, t, undefined, undefined);
  e.setViewModelProperty("fill", true);
  if (!(this.viewModel.isDarkMode)) goto L_d78;
  goto L_dbd;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("mode", v.OAIThemeMode.Light);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  this.renderGeneration = (this.renderGeneration ++);
  G = (this.renderGeneration ++);
  H = R.exploreFeedContentPhase(b.phase, b.cards.length);
  if (!((H === E.ExploreFeedLoadPhase.Loading))) goto L_f46;
  goto L_101d;
  // [栈深重同步 1 -> 0]
  if (!((H === E.ExploreFeedLoadPhase.Failed))) goto L_fd8;
  goto L_101d;
  // [栈深重同步 1 -> 0]
  X = R.ExploreFeedRenderPhase.Loaded;
  if (!((X === R.ExploreFeedRenderPhase.Loaded))) goto L_109e;
  goto L_10a7;
  // [栈深重同步 1 -> 0]
  z = {renderState: X};
  this.renderer.onRenderComplete(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=120B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: O, b, o
function {
  return new O.ExploreFeedInteractions(new b.OAINetworkClient(o), o.loggingService);
}

// fn <atom:0>  args=0 vars=5 closure=4 cpool=1 bc=886B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// locals: e, t, i, o, this
// closure: O, b, P, m
function {
  this = this;
  let o;
  let i;
  let t;
  let e;
  if ((!P.isVersionAtLeast(183))) goto L_de;
  if ((this.disposed)) goto L_de;
  if (((undefined === this.renderedFeed))) goto L_de;
  if (!((this.feedItemVisibilitySession == null))) goto L_bc;
  this.feedItemVisibilitySession;
  goto L_dd;
  if (!((true !== undefined.isVisible))) goto L_e1;
  return;
  e = this.feedItemVisibilitySession.interactionContext;
  if (!((undefined === e))) goto L_12e;
  return;
  t = this.renderedFeed;
  i = JSON.stringify([e.sessionId, e.feedEntryId, e.entrypoint, t.renderState, t.feedId]);
  if (!((i === this.lastViewedFeed))) goto L_25d;
  return;
  this.lastViewedFeed = i;
  o = this.context.platformServices;
  m.accountContainerFor(o).resolve(O.ExploreFeedInteractions, function <atom:0>).sendFeedViewed(t, e, Date.now());
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=163B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: _, A, b, e, t
function {
  return new _.ExploreFeedStore(new A.ExploreFeedApi(new b.OAINetworkClient(e), t), e.experimentService);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=809B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// closure: this
function {
  if ((e.isRefreshing)) goto L_147;
  if (!((undefined !== this.state.loggingMetadataTarget))) goto L_14c;
  if (!(!e.cards.includes(this.state.loggingMetadataTarget.item))) goto L_14c;
  goto L_18f;
  // [栈深重同步 4 -> 3]
  if ((e.isRefreshing)) goto L_2b2;
  if (!((undefined !== this.state.feedbackTarget))) goto L_2b7;
  if (!(!e.cards.includes(this.state.feedbackTarget.item))) goto L_2b7;
  goto L_2fa;
  // [栈深重同步 4 -> 3]
  this.setState({feed: e, loggingMetadataTarget: this.state.loggingMetadataTarget, feedbackTarget: this.state.feedbackTarget});
  this.updateFeedbackCoverage();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=6 cpool=2 bc=1110B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// locals: t, e#1, this
// closure: _, A, b, P, m, E
function {
  this = this;
  let t;
  t = undefined;
  if (!(P.isVersionAtLeast(162))) goto L_7a;
  t = this.context.imageBaseUrl;
  this.context.imageBaseUrl;
  if (!((undefined === this.controller))) goto L_196;
  let e#1;
  e#1 = this.context.platformServices;
  if (!((undefined !== e#1.accountScope))) goto L_192;
  this.store = m.accountContainerFor(e#1).resolve(_.ExploreFeedStore, function <atom:0>);
  m.accountContainerFor(e#1).resolve(_.ExploreFeedStore, function <atom:0>);
  // close_loc e#1
  if (!((this.feedSubscription == null))) goto L_1c0;
  this.feedSubscription;
  goto L_1e4;
  undefined.unsubscribe();
  if (!((undefined !== this.store))) goto L_260;
  this.controller = this.store.feed(e);
  goto L_3e1;
  // [栈深重同步 1 -> 0]
  if (!((undefined === this.controller))) goto L_39a;
  this.controller = new E.ExploreFeedRequestController(new A.ExploreFeedApi(new b.OAINetworkClient(this.context.platformServices), t));
  goto L_3e1;
  // [栈深重同步 1 -> 0]
  this.controller.selectProviders(e);
  this.feedSubscription = this.controller.state.subscribe(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=200B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// locals: this
function {
  this = this;
  if (!((this.feedSubscription == null))) goto L_2c;
  this.feedSubscription;
  goto L_50;
  undefined.unsubscribe();
  if (!((undefined === this.store))) goto L_c7;
  if (!((this.controller == null))) goto L_a3;
  this.controller;
  goto L_c7;
  undefined.dispose();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=351B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// locals: e, this
// closure: P
function {
  this = this;
  let e;
  e = this.context.platformServices.experimentService;
  if (!(P.isVersionAtLeast(193))) goto L_15e;
  if (!((true === this.viewModel.widgetLongPressEnabled))) goto L_15e;
  if (!((e == null))) goto L_f0;
  e;
  goto L_11f;
  if (((true === undefined.isFeatureFlagEnabled({flagName: "4154649464"})))) goto L_15e;
  if (!((e == null))) goto L_131;
  e;
  goto L_15d;
  return (true === undefined.isFeatureFlagEnabled({flagName: "97599459"}));
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=271B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// locals: this
// closure: P
function {
  this = this;
  if (!(P.isVersionAtLeast(183))) goto L_10e;
  if (!((this.feedItemVisibilitySession == null))) goto L_5c;
  this.feedItemVisibilitySession;
  goto L_10e;
  if (((undefined !== this.state.feedbackTarget))) goto L_10b;
  undefined.setLocallyCovered((undefined !== this.state.loggingMetadataTarget));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=127B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// locals: this
// closure: P
function {
  this = this;
  if (!(P.isVersionAtLeast(231))) goto L_7e;
  if (!((this.context.onFeedbackSubmissionResult == null))) goto L_7a;
  this.context.onFeedbackSubmissionResult;
  this.context;
  goto L_7e;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=286B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: e
// locals: t, this
// closure: P
function {
  this = this;
  let t;
  if (!(!P.isVersionAtLeast(183))) goto L_33;
  return false;
  if (!((this.feedItemVisibilitySession == null))) goto L_5d;
  this.feedItemVisibilitySession;
  goto L_7e;
  t = undefined.interactionContext;
  if (!((undefined !== t))) goto L_11d;
  if (!((t.feedEntryId === e.feedEntryId))) goto L_11d;
  return (t.sessionId === e.sessionId);
}

// fn j  args=0 vars=0 closure=1 cpool=0 bc=528B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// closure: B
function {
  return [{value: "", label: B.default.exploreAll()}, {value: "evergreen", label: B.default.exploreEvergreen()}, {value: "evergreen_demo", label: B.default.exploreEvergreenDemo()}, {value: "content_examples", label: B.default.exploreContentExamples()}, {value: "action_examples", label: B.default.exploreActionExamples()}, {value: "task_suggestions", label: B.default.exploreTaskSuggestions()}];
}

// fn <atom:0>  args=3 vars=50 closure=0 cpool=13 bc=1873B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// args: require, module, exports
// locals: e, t, i, o, s, r, n, d, a, l, c, h, p, g, u, v, f, b, m, x, y, S, w, M, V, F, P, C, A, I, E, k, L, T, R, q, O, _, D, B, N, G, ChatGPTExploreScreen, <class_fields_init>, ChatGPTExploreScreen#1, j, U
function {
  j = function j;
  let U;
  let ChatGPTExploreScreen#1;
  let G;
  let N;
  let B;
  let D;
  let _;
  let O;
  let q;
  let R;
  let T;
  let L;
  let k;
  let E;
  let I;
  let A;
  let C;
  let P;
  let F;
  let V;
  let M;
  let w;
  let S;
  let y;
  let x;
  let m;
  let b;
  let f;
  let v;
  let u;
  let g;
  let p;
  let h;
  let c;
  let l;
  let a;
  let d;
  let n;
  let r;
  let s;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTExploreScreen = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "XU_CqbX8W92aK5EV");
  i = e.makeNodePrototype("layout", undefined, "w2L0gc_Aoz5_HYnC");
  o = e.makeComponentPrototype(["opacity", 1, "translationY", 0, "transitionBlurOpacity", 0], "BbwkoB4QFHdqHrty");
  s = e.makeNodePrototype("layout", undefined, "eGK0W0Osw1UZeysD");
  r = e.makeNodePrototype("layout", undefined, "nbSX7lZ73a7JBYOl");
  n = e.makeComponentPrototype(["accessibilityId", "chatgpt.explore.providers"], "4EEWGI2u0Vmauvgu");
  d = e.makeComponentPrototype(undefined, "MyfYPzpB7kR84K2r");
  a = e.makeComponentPrototype(["accessibilityId", "chatgpt.explore.retry-page"], "TXJbhLYlBF3sqvqm");
  l = e.makeNodePrototype("view", ["accessibilityId", "chatgpt.explore.load-more"], "bZ0XnxETjrgZigRL");
  c = e.makeNodePrototype("layout", undefined, "td885USt3cp__MVp");
  h = e.makeComponentPrototype(["accessibilityId", "chatgpt.explore.provider-popup", "width", 240, "offset", 0], "JmGnQyPaIspiNvQ9");
  p = e.makeComponentPrototype(["accessibilityId", "chatgpt.explore.provider-menu"], "3EsUTw6y5fCruY1Q");
  g = e.makeComponentPrototype(undefined, "0i2MlpMTCIAXpn5S");
  u = e.makeComponentPrototype(undefined, "5at6HQhjfeB9ljS_");
  v = require("oai_core/src/OAITheme");
  f = require("oai_core/src/OAITokens");
  b = require("oai_platform_services/src/OAINetworkClient");
  m = require("oai_platform_services/src/AccountContainer");
  x = require("oai_ui/src/components/Button");
  y = require("oai_ui/src/components/SelectionMenu");
  S = require("oai_ui/src/components/Text");
  w = require("./ExploreFeedFeedback");
  M = require("valdi_core/src/ElementRef");
  V = require("valdi_ui/src/components/AnchoredSurface");
  F = require("valdi_core/src/Component");
  P = require("valdi_core/src/CompilerIntrinsics");
  C = require("valdi_core/src/Style");
  A = require("./ExploreFeedApi");
  I = require("./ExploreFeedCardMetadata");
  E = require("./ExploreFeedRequestController");
  k = require("./ExploreFeedFeedbackSheet");
  L = require("./ExploreFeedLoggingMetadataSheet");
  T = require("./ExploreFeedSurface");
  R = require("./ExploreFeedRenderState");
  q = require("./FeedItemVisibilityBatcher");
  O = require("./ExploreFeedInteractions");
  _ = require("./ExploreFeedStore");
  D = require("./ExploreFeedSelection");
  B = require("./Strings");
  N = require("./FeedItemVisibilitySession");
  G = require("./FeedDwellTracker");
  let ChatGPTExploreScreen;
  let <class_fields_init>;
  class ChatGPTExploreScreen extends F.StatefulComponent { ... }
  <proto:ChatGPTExploreScreen>.onDestroy = function <atom:0>;
  <proto:ChatGPTExploreScreen>.onViewModelUpdate = function <atom:0>;
  <proto:ChatGPTExploreScreen>.prepareForAppearance = function <atom:0>;
  <proto:ChatGPTExploreScreen>.onRender = function <atom:0>;
  <proto:ChatGPTExploreScreen>.logFeedViewed = function <atom:0>;
  <proto:ChatGPTExploreScreen>.observeFeed = function <atom:0>;
  <proto:ChatGPTExploreScreen>.detachFeed = function <atom:0>;
  <proto:ChatGPTExploreScreen>.internalActionsEnabled = function <atom:0>;
  <proto:ChatGPTExploreScreen>.updateFeedbackCoverage = function <atom:0>;
  <proto:ChatGPTExploreScreen>.notifyFeedbackSubmissionResult = function <atom:0>;
  <proto:ChatGPTExploreScreen>.isFeedbackVisitCurrent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ChatGPTExploreScreen>;
  ChatGPTExploreScreen = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTExploreScreen#1 = function <atom:0>;
  exports.ChatGPTExploreScreen = ChatGPTExploreScreen#1;
  U = {screen: new C.Style({width: "100%", height: "100%", flexDirection: "column"}), header: new C.Style({width: "100%", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: f.OAISpacing.OneAndHalf}), menuOverlay: new C.Style({position: "absolute", top: 0, bottom: 0, left: 0, right: 0}), pagination: new C.Style({height: f.OAISpacing.One, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ChatGPTExploreScreen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
