// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=185B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: e
// closure: this
function {
  if (!(!this.isDestroyed())) goto L_b8;
  if (!((this.pendingInitialCards == null))) goto L_5b;
  this.pendingInitialCards;
  goto L_80;
  if (!(undefined.includes(e))) goto L_b8;
  this.pendingInitialCards = undefined;
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=713B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: e
// locals: t
// closure: this
function {
  let t;
  this.dismissMenus();
  if (!((e.overscrollTensionY == null))) goto L_a0;
  e.overscrollTensionY;
  this.pullDistance = Math.max(0, -e.y, -0);
  t = this.viewModel.returnPullThreshold;
  if (!(this.canReturnToComposer)) goto L_1b5;
  if (!((undefined !== t))) goto L_1b5;
  if (!((this.pullDistance >= t))) goto L_1b5;
  this.canReturnToComposer = false;
  if (!((this.viewModel.onReturnToComposerRequested == null))) goto L_1b2;
  this.viewModel.onReturnToComposerRequested;
  this.viewModel;
  goto L_1b5;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  if (!((undefined !== this.viewModel.onRefresh))) goto L_275;
  this.refreshIndicator.setAttribute("opacity", this.refreshOpacity());
  if (!((this.viewModel.onScroll == null))) goto L_2c4;
  this.viewModel.onScroll;
  this.viewModel;
  goto L_2c8;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=580B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: e
// closure: this
function {
  this.dismissMenus();
  if (!((undefined !== this.viewModel.returnPullThreshold))) goto L_1e9;
  if (!((Math.abs(e.y) <= 5))) goto L_1e9;
  if (!((e.overscrollTensionY == null))) goto L_11b;
  e.overscrollTensionY;
  if (!((Math.abs(0) <= 5))) goto L_1e9;
  if (!((e.velocityY < 0))) goto L_1e9;
  this.canReturnToComposer = (Math.abs(e.velocityY) > Math.abs(e.velocityX));
  if (!((this.viewModel.onDragStart == null))) goto L_240;
  this.viewModel.onDragStart;
  this.viewModel;
  goto L_243;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=96B file=chatgpt_explore_feed/src/ExploreFeedSurface
// closure: this
function {
  this.canReturnToComposer = false;
  if (!((this.viewModel.onScrollEnd == null))) goto L_5c;
  this.viewModel.onScrollEnd;
  this.viewModel;
  goto L_5f;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=446B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: e
// closure: this, E
function {
  this.canReturnToComposer = false;
  if (!(!this.viewModel.isRefreshing)) goto L_16b;
  if (!((e.overscrollTensionY == null))) goto L_cc;
  e.overscrollTensionY;
  if (!((Math.max(-e.y, -0) >= E.OAISpacing.Ten))) goto L_16b;
  if (!((this.viewModel.onRefresh == null))) goto L_168;
  this.viewModel.onRefresh;
  this.viewModel;
  goto L_16b;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  if (!((this.viewModel.onDragEnd == null))) goto L_1b9;
  this.viewModel.onDragEnd;
  this.viewModel;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>, e);
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=5 bc=302B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: this, this.active_func, new.target, arguments
// closure: E, <class_fields_init>, W, J
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
  this.cards = new W.ComponentRef();
  this.scrollView = new J.ElementRef();
  this.refreshIndicator = new J.ElementRef();
  this.pullDistance = 0;
  this.canReturnToComposer = false;
  this.handleInitialContentReady = function <atom:0>;
  this.handleScroll = function <atom:0>;
  this.handleDragStart = function <atom:0>;
  this.handleScrollEnd = function <atom:0>;
  this.handleDragEnd = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=52B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: this
function {
  this = this;
  this.canReturnToComposer = false;
  this.cancelInitialAppearance();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=828B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: e
// locals: this
function {
  this = this;
  this.updateInitialAppearance(e);
  if (((undefined === e))) goto L_12c;
  if (!((e.visibilityGeneration === this.viewModel.visibilityGeneration))) goto L_103;
  if (((e.feedId === this.viewModel.feedId))) goto L_12c;
  this.dismissMenus();
  if (!((true === this.viewModel.resetScrollToTop))) goto L_2bb;
  if (!((e == null))) goto L_185;
  e;
  goto L_1a6;
  if (!((true !== undefined.resetScrollToTop))) goto L_2bb;
  this.dismissMenus();
  this.scrollView.setAttribute("contentOffsetAnimated", false);
  this.scrollView.setAttribute("contentOffsetX", 0);
  this.scrollView.setAttribute("contentOffsetY", 0);
  if (!((e == null))) goto L_2c5;
  e;
  goto L_2e6;
  if (!((undefined.returnPullThreshold !== this.viewModel.returnPullThreshold))) goto L_33b;
  this.canReturnToComposer = false;
  false;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=41B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: e, i
// closure: t
function {
  return (t.cards[i] !== e);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=101B file=chatgpt_explore_feed/src/ExploreFeedSurface
// closure: this
function {
  this.appearanceTimer = undefined;
  this.appearingCards = undefined;
  if ((this.isDestroyed())) goto L_64;
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=2 bc=1172B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: e
// locals: t, this
// closure: ie, ne
function {
  this = this;
  let t;
  t = this.viewModel;
  if (((t.feedStatus !== ie.ExploreFeedLoadPhase.Loaded))) goto L_1e7;
  if (((true === t.isRefreshing))) goto L_1e7;
  if (!((e == null))) goto L_d0;
  e;
  goto L_f1;
  if (((undefined.accountId !== t.accountId))) goto L_1e7;
  if (!((e == null))) goto L_126;
  e;
  goto L_147;
  if (((undefined.feedId !== t.feedId))) goto L_1e7;
  if (!((this.pendingInitialCards == null))) goto L_1b9;
  this.pendingInitialCards;
  if (!((this.appearingCards == null))) goto L_1c1;
  this.appearingCards;
  goto L_1e7;
  if (!(undefined.some(function <atom:0>))) goto L_210;
  this.cancelInitialAppearance();
  if (!((e == null))) goto L_21a;
  e;
  goto L_23b;
  if (!((undefined.feedStatus === ie.ExploreFeedLoadPhase.Loading))) goto L_493;
  if (!((e.accountId === t.accountId))) goto L_493;
  if (!((0 === e.cards.length))) goto L_493;
  if (!((true !== e.isRefreshing))) goto L_493;
  if (!((t.feedStatus === ie.ExploreFeedLoadPhase.Loaded))) goto L_493;
  if (!((0 !== t.cards.length))) goto L_493;
  if (!((true !== t.isRefreshing))) goto L_493;
  this.cancelInitialAppearance();
  this.appearingCards = t.cards;
  this.pendingInitialCards = t.cards;
  this.appearanceTimer = setTimeout(function <atom:0>, ne);
  setTimeout(function <atom:0>, ne);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=118B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: this
function {
  this = this;
  this.appearingCards = undefined;
  this.pendingInitialCards = undefined;
  if (!((undefined !== this.appearanceTimer))) goto L_75;
  clearTimeout(this.appearanceTimer);
  this.appearanceTimer = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=341B file=chatgpt_explore_feed/src/ExploreFeedSurface
// closure: e, r, re, h, ie, this
function {
  e.beginRender(r, "loading");
  e.setAttributeStyle("style", re.loading);
  if (!((h === ie.ExploreFeedLoadPhase.Loading))) goto L_fc;
  goto L_101;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("position", "absolute");
  this.renderLoadingState();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=233B file=chatgpt_explore_feed/src/ExploreFeedSurface
// closure: e, G, l, this
function {
  e.beginComponent(G.ActivityIndicator, l, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.refreshTitle);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=1 bc=922B file=chatgpt_explore_feed/src/ExploreFeedSurface
// closure: e, G, l, this, s, re, c, E, q, a
function {
  e.beginRender(s, undefined);
  e.setAttributeRef(this.refreshIndicator);
  if (!(this.viewModel.isRefreshing)) goto L_eb;
  goto L_f0;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "ignored");
  e.setAttributeStyle("style", re.refreshIndicator);
  if (!((c == null))) goto L_179;
  c;
  goto L_19a;
  if (!((undefined.top == null))) goto L_1a0;
  undefined.top;
  e.setAttributeNumber("top", (0 + E.OAISpacing.Two));
  e.setAttributeNumber("opacity", this.refreshOpacity());
  if (!(this.viewModel.isRefreshing)) goto L_287;
  goto L_371;
  // [栈深重同步 1 -> 0]
  e.beginComponent(q.Text, a, undefined, undefined);
  e.setViewModelProperty("size", E.OAITextSize.TitleMedium);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=324B file=chatgpt_explore_feed/src/ExploreFeedSurface
// closure: e, p, this, re
function {
  e.beginRender(p, undefined);
  e.setAttributeNumber("opacity", this.viewModel.transitionBlurOpacity);
  e.setAttributeStyle("style", re.transitionBlur);
  e.setAttribute("touchEnabled", false);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=17 cpool=3 bc=3542B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: c, h, u, g, this
// closure: e, r, re, ie, G, l, s, E, q, a, p, te, t, i, o, n, d
function {
  this = this;
  let g;
  let u;
  let h;
  let c;
  c = this.viewModel.contentPadding;
  h = te.exploreFeedContentPhase(this.viewModel.feedStatus, this.viewModel.cards.length);
  if (!((h !== ie.ExploreFeedLoadPhase.Loading))) goto L_197;
  u = (0 === this.viewModel.cards.length);
  if (!((0 === this.viewModel.cards.length))) goto L_1e5;
  goto L_270;
  // [栈深重同步 1 -> 0]
  g = (E.OAISpacing.One + E.OAISpacing.Quarter);
  e.beginRender(t, undefined);
  e.setAttributeNumber("opacity", this.viewModel.opacity);
  e.setAttributeStyle("style", re.container);
  e.setAttributeNumber("translationY", this.viewModel.translationY);
  e.beginRender(i, undefined);
  e.setAttributeRef(this.scrollView);
  e.setAttribute("bounces", true);
  e.setAttribute("bouncesFromDragAtStart", true);
  e.setAttribute("bouncesVerticalWithSmallContent", true);
  e.setAttributeFunction("onDragEnd", this.handleDragEnd);
  e.setAttributeFunction("onDragStart", this.handleDragStart);
  e.setAttributeFunction("onScroll", this.handleScroll);
  e.setAttributeFunction("onScrollEnd", this.handleScrollEnd);
  e.setAttributeStyle("style", re.scroll);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", re.content);
  if (!(u)) goto L_717;
  goto L_718;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("minHeight", undefined);
  if (!((undefined === c))) goto L_74f;
  goto L_7bf;
  // [栈深重同步 4 -> 3]
  if (!((c.top == null))) goto L_779;
  c.top;
  e.setAttributeNumber("paddingTop", (0 + E.OAISpacing.Two));
  if (!((undefined === c))) goto L_7f6;
  goto L_866;
  // [栈深重同步 4 -> 3]
  if (!((c.bottom == null))) goto L_820;
  c.bottom;
  e.setAttributeNumber("paddingBottom", (0 + E.OAISpacing.Two));
  if (!((undefined === c))) goto L_89d;
  goto L_90d;
  // [栈深重同步 4 -> 3]
  if (!((c.left == null))) goto L_8c7;
  c.left;
  e.setAttributeNumber("paddingLeft", (0 + E.OAISpacing.Two));
  if (!((undefined === c))) goto L_944;
  goto L_9b4;
  // [栈深重同步 4 -> 3]
  if (!((c.right == null))) goto L_96e;
  c.right;
  e.setAttributeNumber("paddingRight", (0 + E.OAISpacing.Two));
  e.renderNamedSlot("header", this);
  this.renderReloadBanner();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", re.contentBody);
  if (!(u)) goto L_abc;
  goto L_abd;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("flexGrow", undefined);
  if (((h === ie.ExploreFeedLoadPhase.Loading))) goto L_b33;
  if (!((undefined !== this.pendingInitialCards))) goto L_b3a;
  function <atom:0>();
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", re.feedTextAnimationGroup);
  if (!(u)) goto L_be9;
  goto L_bea;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("flexGrow", undefined);
  e.setAttributeNumber("paddingTop", g);
  this.renderContents(h);
  e.endRender();
  e.renderUnnamedSlot(this);
  e.endRender();
  e.endRender();
  e.endRender();
  if (((undefined === this.viewModel.onRefresh))) goto L_d5f;
  function <atom:0>();
  if (((0 === this.viewModel.transitionBlurOpacity))) goto L_dad;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=214B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: this
// closure: ie
function {
  this = this;
  if (!((this.viewModel.feedStatus === ie.ExploreFeedLoadPhase.Loaded))) goto L_d5;
  return (this.viewModel.cards.length > 0);
}

// fn <atom:0>  args=1 vars=2 closure=12 cpool=0 bc=1695B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: t
// locals: this
// closure: e, c, re, L, h, k, E, u, ExploreFeedFooterText, g, D, v
function {
  this = this;
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", re.endOfFeed);
  e.beginComponent(L.Icon, h, undefined, undefined);
  e.setViewModelProperty("src", k.default.circleCheckmarkFill);
  e.setViewModelProperty("size", E.OAISpacing.Four);
  e.setViewModelProperty("color", E.OAIColor.IconPrimary);
  e.endComponent();
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", re.endOfFeedText);
  e.beginComponent(ExploreFeedFooterText, g, undefined, undefined);
  e.setViewModelProperty("typography", D.Typography.Title3);
  e.setViewModelProperty("animateInitialContent", t);
  e.setViewModelProperty("value", this.viewModel.strings.endOfFeedTitle);
  e.endComponent();
  e.beginComponent(ExploreFeedFooterText, v, undefined, undefined);
  e.setViewModelProperty("typography", D.DesignTypography.Body);
  e.setViewModelProperty("color", E.OAIColor.TextSecondary);
  e.setViewModelProperty("animateInitialContent", t);
  e.setViewModelProperty("value", this.viewModel.strings.endOfFeedMessage);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=126B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: e, this
function {
  this = this;
  let e;
  for (const e of this.cards.all()) {
    e.dismissMenu();
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=220B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: this
// closure: E
function {
  this = this;
  if (!(this.viewModel.isRefreshing)) goto L_49;
  return 1;
  return Math.min(1, (this.pullDistance / E.OAISpacing.Ten));
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=0 bc=1227B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: this
// closure: e, m, re, q, y, E, H, w
function {
  this = this;
  if (!(this.viewModel.reloadFailed)) goto L_4ca;
  e.beginRender(m, undefined);
  e.setAttributeStyle("style", re.reloadBanner);
  e.beginComponent(q.Text, y, undefined, undefined);
  e.setViewModelProperty("color", E.OAIColor.TextStatusWarning);
  e.setViewModelProperty("size", E.OAITextSize.BodySmall);
  e.setViewModelProperty("value", this.viewModel.strings.reloadErrorMessage);
  e.endComponent();
  e.beginComponent(H.Button, w, undefined, undefined);
  e.setViewModelProperty("label", this.viewModel.strings.retryTitle);
  e.setViewModelProperty("onPress", this.viewModel.onRetry);
  e.setViewModelProperty("variant", H.ButtonVariant.Secondary);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=2606B file=chatgpt_explore_feed/src/ExploreFeedSurface
// closure: e, ExploreFeedCard, S, this, o, t, i
function {
  e.beginComponent(ExploreFeedCard, S, undefined, this.cards);
  e.setViewModelProperty("isDarkMode", this.viewModel.isDarkMode);
  e.setViewModelProperty("animateInitialContent", o);
  e.setViewModelProperty("feedId", this.viewModel.feedId);
  e.setViewModelProperty("getFeedContext", this.viewModel.getFeedContext);
  e.setViewModelProperty("visibilityTracker", this.viewModel.visibilityTracker);
  e.setViewModelProperty("visibilityGeneration", this.viewModel.visibilityGeneration);
  e.setViewModelProperty("accountId", this.viewModel.accountId);
  e.setViewModelProperty("menuContext", this.viewModel.menuContext);
  if (!(this.viewModel.isRefreshing)) goto L_402;
  goto L_445;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onDebug", this.viewModel.onDebug);
  if (!(this.viewModel.isRefreshing)) goto L_4ba;
  goto L_4fd;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onAddFeedback", this.viewModel.onAddFeedback);
  e.setViewModelProperty("onItemClicked", this.viewModel.onItemClicked);
  if (!(this.viewModel.isRefreshing)) goto L_5e2;
  goto L_625;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onFeedbackSelected", this.viewModel.onFeedbackSelected);
  e.setViewModelProperty("item", t);
  e.setViewModelProperty("onServerAction", this.viewModel.onServerAction);
  e.setViewModelProperty("onClientAction", this.viewModel.onClientAction);
  e.setViewModelProperty("onWidgetAction", this.viewModel.onWidgetAction);
  e.setViewModelProperty("platformServices", this.viewModel.platformServices);
  e.setViewModelProperty("supportedClientActions", this.viewModel.supportedClientActions);
  e.setViewModelProperty("textSelectionMenuActions", this.viewModel.textSelectionMenuActions);
  e.setViewModelProperty("textSelectionMenuActionHandler", this.viewModel.textSelectionMenuActionHandler);
  e.endComponent();
  if (!((i === (this.viewModel.cards.length - 1)))) goto L_a2d;
  if (!(this.showsEndOfFeed)) goto L_a2d;
  this.renderEndOfFeed(o);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=1 bc=424B file=chatgpt_explore_feed/src/ExploreFeedSurface
// closure: e, ExploreFeedCard, S, this, o, t, i, oe, A
function {
  e.beginComponent(oe.ExploreFeedItemAppearance, A, undefined, undefined);
  e.setViewModelProperty("item", t);
  e.setViewModelProperty("animateInitialContent", o);
  if (!((this.pendingInitialCards == null))) goto L_104;
  this.pendingInitialCards;
  goto L_12b;
  if (!(undefined.includes(t))) goto L_151;
  goto L_152;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onContentReady", undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=11 cpool=1 bc=846B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: t, i
// locals: o
// closure: e, ExploreFeedCard, S, this, oe, A, M, re, Y, b, ee
function {
  let o;
  if (!((this.pendingInitialCards == null))) goto L_4e;
  this.pendingInitialCards;
  if (!((this.appearingCards == null))) goto L_56;
  this.appearingCards;
  goto L_7b;
  o = (true === undefined.includes(t));
  e.beginRender(M, t.id);
  e.setAttributeString("accessibilityId", "chatgpt.explore.feed-card.".concat(t.id));
  e.setAttributeStyle("style", re.cardContainer);
  if (!(this.showsEndOfFeed)) goto L_22d;
  if (!((i === (this.viewModel.cards.length - 1)))) goto L_22d;
  goto L_22e;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("marginBottom", undefined);
  e.beginComponent(Y.Lazy, b, undefined, undefined);
  e.setViewModelProperty("estimatedHeight", ee.EXPLORE_FEED_CARD_PLACEHOLDER_HEIGHT);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=11 cpool=1 bc=297B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: t
// locals: this
// closure: e, ExploreFeedCard, S, oe, A, M, re, Y, b, ee, ie
function {
  this = this;
  if (!((t !== ie.ExploreFeedLoadPhase.Loading))) goto L_128;
  if (!((0 !== this.viewModel.cards.length))) goto L_103;
  goto L_128;
  // [栈深重同步 1 -> 0]
  this.renderErrorState();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=637B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: this
// closure: e, z, C
function {
  this = this;
  e.beginComponent(z.ExploreFeedLoadingState, C, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.strings.loadingTitle);
  e.setViewModelProperty("messages", this.viewModel.strings.loadingMessages);
  e.setViewModelProperty("reduceMotion", this.viewModel.reduceMotion);
  e.setViewModelProperty("isDarkMode", this.viewModel.isDarkMode);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=0 bc=1695B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: this
// closure: e, I, re, q, f, E, P, H, x
function {
  this = this;
  e.beginRender(I, undefined);
  e.setAttributeStyle("style", re.errorState);
  e.beginComponent(q.Text, f, undefined, undefined);
  e.setViewModelProperty("size", E.OAITextSize.TitleMedium);
  e.setViewModelProperty("value", this.viewModel.strings.errorTitle);
  e.endComponent();
  e.beginComponent(q.Text, P, undefined, undefined);
  e.setViewModelProperty("color", E.OAIColor.TextSecondary);
  e.setViewModelProperty("size", E.OAITextSize.BodyMedium);
  e.setViewModelProperty("value", this.viewModel.strings.errorMessage);
  e.endComponent();
  e.beginComponent(H.Button, x, undefined, undefined);
  e.setViewModelProperty("label", this.viewModel.strings.retryTitle);
  e.setViewModelProperty("onPress", this.viewModel.onRetry);
  e.setViewModelProperty("labelStyle", re.errorRetryLabel);
  e.setViewModelProperty("style", re.errorRetryButton);
  e.setViewModelProperty("variant", H.ButtonVariant.Secondary);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=0 bc=154B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, W, j
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
  this.menus = new W.ComponentRef();
  this.menuBinding = new j.BehaviorSubject(undefined);
  return this;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=0 bc=614B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: e
// locals: t, i, o, n, r, this
function {
  this = this;
  let r;
  let n;
  let o;
  let i;
  let t;
  if (((undefined === undefined))) goto L_ce;
  t = <to_object>(undefined).item;
  i = <to_object>(undefined).accountId;
  o = <to_object>(undefined).onFeedbackSelected;
  n = <to_object>(undefined).onAddFeedback;
  r = <to_object>(undefined).onDebug;
  <to_object>(undefined);
  goto L_f5;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  if (!((e == null))) goto L_fe;
  e;
  goto L_11f;
  if (!((undefined.item === t))) goto L_1f1;
  if (!((e == null))) goto L_133;
  e;
  goto L_154;
  if (!((undefined.accountId === i))) goto L_1f1;
  if (!((e == null))) goto L_168;
  e;
  goto L_189;
  if (!((undefined.onFeedbackSelected === o))) goto L_1f1;
  if (!((e == null))) goto L_19a;
  e;
  goto L_1bb;
  if (!((undefined.onAddFeedback === n))) goto L_1f1;
  if (!((e == null))) goto L_1cc;
  e;
  goto L_1ed;
  if (((undefined.onDebug === r))) goto L_265;
  this.menuBinding.next({item: t, accountId: i, onFeedbackSelected: o, onAddFeedback: n, onDebug: r});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: this
function {
  this = this;
  this.menuBinding.complete();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=197B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: e, this
function {
  this = this;
  if (!((undefined !== this.viewModel.onFeedbackSelected))) goto L_c4;
  let e;
  for (const e of this.menus.all()) {
    e.dismiss();
  }
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=11B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: e, o
// closure: i, t
function {
  return i(t, e, o);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=75B file=chatgpt_explore_feed/src/ExploreFeedSurface
// closure: $, t
function {
  return $.normalizeExploreCardAppearance(t.dil);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=10B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: e
// closure: s, n
function {
  return s(e, n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=74B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: e
// closure: this, n
function {
  return this.viewModel.onServerAction(e, n);   // tail call
}

// fn <atom:0>  args=0 vars=9 closure=11 cpool=4 bc=3649B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: t, i, o, n, r, d, s, l, this
// closure: $, K, ee, Z, FeedCardActionHandler, U, e, O, R, F, T
function {
  this = this;
  let l;
  let s;
  let d;
  let r;
  let n;
  let o;
  let i;
  let t;
  t = this.viewModel.item;
  i = this.viewModel.onItemClicked;
  if (!((undefined === i))) goto L_af;
  goto L_d6;
  // [栈深重同步 1 -> 0]
  o = K.createReusableCallback(function <atom:0>);
  n = ee.exploreFeedCardSource(t);
  r = Z.remember(function <atom:0>, t.dil);
  d = new FeedCardActionHandler(this.viewModel.onWidgetAction, n);
  s = this.viewModel.onClientAction;
  l = {actionHandler: d, messageMetadata: ee.exploreFeedMessageMetadata(n), platformServices: this.viewModel.platformServices, supportedClientActions: this.viewModel.supportedClientActions, textSelectionMenuActions: this.viewModel.textSelectionMenuActions, textSelectionMenuActionHandler: this.viewModel.textSelectionMenuActionHandler};
  if (!(U.isVersionAtLeast(165))) goto L_3ad;
  if (!((undefined !== s))) goto L_3ad;
  null;
  l;
  l = {clientActionHandler: K.createReusableCallback(function <atom:0>)};
  {clientActionHandler: K.createReusableCallback(function <atom:0>)};
  if (!(U.isVersionAtLeast(72))) goto L_917;
  e.beginComponent(O.ExploreFeedDIL, R, undefined, undefined);
  if ((e.hasContext())) goto L_492;
  null;
  l;
  e.setContext({serverActionHandler: function <atom:0>});
  if (!(this.viewModel.isDarkMode)) goto L_509;
  goto L_50e;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("colorScheme", "light");
  e.setViewModelProperty("animateInitialContent", this.viewModel.animateInitialContent);
  e.setViewModelProperty("onClicked", o);
  e.setViewModelProperty("widgetMenu", {binding: this.menuBinding, menuRef: this.menus, menuContext: this.viewModel.menuContext});
  e.setViewModelProperty("feedId", this.viewModel.feedId);
  e.setViewModelProperty("getFeedContext", this.viewModel.getFeedContext);
  e.setViewModelProperty("visibilityTracker", this.viewModel.visibilityTracker);
  e.setViewModelProperty("visibilityGeneration", this.viewModel.visibilityGeneration);
  e.setViewModelProperty("chartRendererMode", F.DIL_CHART_RENDERER_MODE_VALDI);
  e.setViewModelProperty("dilJsonObject", r);
  e.setViewModelProperty("messageIsStreaming", false);
  e.endComponent();
  return;
  e.beginComponent(O.ExploreFeedDIL, T, undefined, undefined);
  if ((e.hasContext())) goto L_9bd;
  e.setContext(l);
  if (!(this.viewModel.isDarkMode)) goto L_a34;
  goto L_a39;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("colorScheme", "light");
  e.setViewModelProperty("animateInitialContent", this.viewModel.animateInitialContent);
  e.setViewModelProperty("onClicked", o);
  e.setViewModelProperty("widgetMenu", {binding: this.menuBinding, menuRef: this.menus, menuContext: this.viewModel.menuContext});
  e.setViewModelProperty("feedId", this.viewModel.feedId);
  e.setViewModelProperty("getFeedContext", this.viewModel.getFeedContext);
  e.setViewModelProperty("visibilityTracker", this.viewModel.visibilityTracker);
  e.setViewModelProperty("visibilityGeneration", this.viewModel.visibilityGeneration);
  e.setViewModelProperty("chartRendererMode", F.DIL_CHART_RENDERER_MODE_VALDI);
  e.setViewModelProperty("dilJsonObject", r);
  e.setViewModelProperty("messageIsStreaming", false);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.onWidgetAction = e;
  this.source = t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=75B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: e
// locals: this
function {
  this = this;
  this.onWidgetAction(e, this.source);
  return;
}

// fn <atom:0>  args=0 vars=9 closure=7 cpool=0 bc=1521B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: t, i, o, n, r, d, s, l, this
// closure: D, _, N, B, E, e, V
function {
  this = this;
  let l;
  let s;
  let d;
  let r;
  let n;
  let o;
  let i;
  let t;
  if (((undefined === undefined))) goto L_b3;
  t = <to_object>(undefined).value;
  i = <to_object>(undefined).typography;
  o = <to_object>(undefined).color;
  n = <to_object>(undefined).animateInitialContent;
  <to_object>(undefined);
  goto L_da;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_23;
  // [栈深重同步 1 -> 0]
  r = D.resolveOAITypography(i, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});
  if (!(n)) goto L_187;
  goto L_1cc;
  // [栈深重同步 2 -> 1]
  d = _.rememberDILStreamingTextAnimation(N.DILStreamingAnimation.Disabled, [t, i, o], false);
  s = new B.AttributedTextBuilder();
  l = _.pushDILStreamingTextAnimation(s, d, false);
  if (!((o == null))) goto L_2d4;
  o;
  s.append(t, {font: r.font, color: E.OAIColor.TextPrimary});
  _.popDILStreamingTextAnimation(s, l);
  e.beginRender(V, undefined);
  e.setAttributeString("accessibilityLabel", t);
  e.setAttribute("value", s.build());
  e.setAttributeString("font", r.font);
  e.setAttributeNumber("lineHeight", r.lineHeight);
  e.setAttributeNumber("lineHeightMultiple", r.lineHeightMultiple);
  e.setAttribute("lineHeightScalesWithFont", r.lineHeightScalesWithFont);
  e.setAttributeNumber("letterSpacing", i.letterSpacing);
  if (!((d === N.DILStreamingAnimation.Disabled))) goto L_5c5;
  e.setAttribute("animationsEnabled", undefined);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_explore_feed/src/ExploreFeedSurface
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

// fn <atom:0>  args=3 vars=75 closure=0 cpool=24 bc=5935B file=chatgpt_explore_feed/src/ExploreFeedSurface
// args: require, module, exports
// locals: e, t, i, o, n, r, d, s, l, a, p, c, h, u, g, v, m, y, w, M, b, A, S, C, I, f, P, x, R, T, V, O, F, E, k, L, D, B, N, _, H, q, z, G, j, W, J, Q, U, Y, Z, X, K, $, ee, te, ie, oe, ne, ExploreFeedSurface, <class_fields_init>, ExploreFeedSurface#1, ExploreFeedCard, <class_fields_init>#1, ExploreFeedCard#1, FeedCardActionHandler, <class_fields_init>#2, FeedCardActionHandler#1, ExploreFeedFooterText, <class_fields_init>#3, ExploreFeedFooterText#1, re
function {
  let re;
  let ExploreFeedFooterText#1;
  let FeedCardActionHandler#1;
  let ExploreFeedCard#1;
  let ExploreFeedSurface#1;
  let ne;
  let oe;
  let ie;
  let te;
  let ee;
  let $;
  let K;
  let X;
  let Z;
  let Y;
  let U;
  let Q;
  let J;
  let W;
  let j;
  let G;
  let z;
  let q;
  let H;
  let _;
  let N;
  let B;
  let D;
  let L;
  let k;
  let E;
  let F;
  let O;
  let V;
  let T;
  let R;
  let x;
  let P;
  let f;
  let I;
  let C;
  let S;
  let A;
  let b;
  let M;
  let w;
  let y;
  let m;
  let v;
  let g;
  let u;
  let h;
  let c;
  let p;
  let a;
  let l;
  let s;
  let d;
  let r;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedSurface = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "fQuVY488snhsuUle");
  i = e.makeNodePrototype("scroll", ["accessibilityId", "chatgpt.explore.feed"], "OIgdRAEnaNBKT28y");
  o = e.makeNodePrototype("layout", undefined, "m3wIt50OABk8JTrx");
  n = e.makeNodePrototype("layout", undefined, "jcTJrItptEjcfml3");
  r = e.makeNodePrototype("view", undefined, "cpsR75psw_QrRJgw");
  d = e.makeNodePrototype("textanimationgroup", undefined, "e92eozE7P3o4zlhl");
  s = e.makeNodePrototype("view", ["accessibilityId", "chatgpt.explore.refresh-indicator"], "8732VMD_Pnstf0sE");
  l = e.makeComponentPrototype(["accessibilityId", "chatgpt.explore.refreshing"], "AZV4QJld-CsF8Hnp");
  a = e.makeComponentPrototype(["value", "↓"], "Mz7V-ZAzcrsFheCY");
  p = e.makeNodePrototype("blur", ["accessibilityId", "chatgpt.explore.transition-blur", "blurStyle", "systemUltraThinMaterial"], "m3cGsla62DS3zHA6");
  c = e.makeNodePrototype("view", ["accessibilityId", "chatgpt.explore.end-of-feed"], "mkw7tOHkxURMInch");
  h = e.makeComponentPrototype(undefined, "qoYx_84ZbRAGdKrw");
  u = e.makeNodePrototype("layout", undefined, "6keEEYd6YxQt2wXo");
  g = e.makeComponentPrototype(undefined, "2UNB0HqrMiwISUUb");
  v = e.makeComponentPrototype(undefined, "raKkM7H5wxZ45oCM");
  m = e.makeNodePrototype("view", ["accessibilityId", "chatgpt.explore.reload-error"], "EX_kq6QW82m3Mifn");
  y = e.makeComponentPrototype(["numberOfLines", 0], "pN-6cyBmn-sjKNFM");
  w = e.makeComponentPrototype(undefined, "F-XsG1EJCsSAWC9T");
  M = e.makeNodePrototype("view", undefined, "rcESETKW1TEGwuqc");
  b = e.makeComponentPrototype(["width", "100%"], "2sTQuRgXa9Q-yyA-");
  A = e.makeComponentPrototype(undefined, "QLs2NnJBhJVoGIBp");
  S = e.makeComponentPrototype(undefined, "0Fv7HqeEj-18Vhha");
  C = e.makeComponentPrototype(undefined, "vZANZLBZaNEZeqzO");
  I = e.makeNodePrototype("view", ["accessibilityId", "chatgpt.explore.error"], "QGFleLwpREU1BsDb");
  f = e.makeComponentPrototype(["align", "center", "numberOfLines", 0], "eaNvis7uQHXAdR23");
  P = e.makeComponentPrototype(["align", "center", "numberOfLines", 0], "-OgItggVrOLskNI8");
  x = e.makeComponentPrototype(undefined, "5q6Vsgzzgys8vjFW");
  R = e.makeComponentPrototype(["dilJson", ""], "6fJRdmfz18W4p_rx");
  T = e.makeComponentPrototype(["dilJson", ""], "h9-QGAElzRU-JhIG");
  V = e.makeNodePrototype("label", ["numberOfLines", 0, "flexShrink", 1], "shsBzj1yllZnQvZS");
  O = require("./ExploreFeedDIL");
  F = require("dil_widgets/src/WidgetsRegistry");
  E = require("oai_core/src/OAITokens");
  k = require("chatgpt_explore_feed/res");
  L = require("oai_ui/src/components/Icon");
  D = require("oai_core/src/OAITypography");
  B = require("valdi_core/src/utils/AttributedTextBuilder");
  N = require("dil_renderer/src/DILRenderer");
  _ = require("dil_text/src/rendering/DILStreamingText");
  H = require("oai_ui/src/components/Button");
  q = require("oai_ui/src/components/Text");
  z = require("./ExploreFeedLoadingState");
  G = require("oai_ui/src/components/ActivityIndicator");
  j = require("valdi_rxjs/src/BehaviorSubject");
  W = require("valdi_core/src/ComponentRef");
  J = require("valdi_core/src/ElementRef");
  Q = require("valdi_core/src/Component");
  U = require("valdi_core/src/CompilerIntrinsics");
  Y = require("valdi_core/src/Lazy");
  Z = require("valdi_core/src/Remember");
  X = require("valdi_core/src/Style");
  K = require("valdi_core/src/utils/Callback");
  $ = require("./ExploreFeedCardAppearance");
  ee = require("./ExploreFeedCardMetadata");
  te = require("./ExploreFeedRenderState");
  ie = require("./ExploreFeedRequestController");
  oe = require("./ExploreFeedItemAppearance");
  ne = 850;
  let ExploreFeedSurface;
  let <class_fields_init>;
  class ExploreFeedSurface extends Q.Component { ... }
  <proto:ExploreFeedSurface>.onDestroy = function <atom:0>;
  <proto:ExploreFeedSurface>.onViewModelUpdate = function <atom:0>;
  <proto:ExploreFeedSurface>.updateInitialAppearance = function <atom:0>;
  <proto:ExploreFeedSurface>.cancelInitialAppearance = function <atom:0>;
  <proto:ExploreFeedSurface>.onRender = function <atom:0>;
  <proto:ExploreFeedSurface>.showsEndOfFeed = function <atom:0>;
  <proto:ExploreFeedSurface>.renderEndOfFeed = function <atom:0>;
  <proto:ExploreFeedSurface>.dismissMenus = function <atom:0>;
  <proto:ExploreFeedSurface>.refreshOpacity = function <atom:0>;
  <proto:ExploreFeedSurface>.renderReloadBanner = function <atom:0>;
  <proto:ExploreFeedSurface>.renderContents = function <atom:0>;
  <proto:ExploreFeedSurface>.renderLoadingState = function <atom:0>;
  <proto:ExploreFeedSurface>.renderErrorState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExploreFeedSurface>;
  ExploreFeedSurface = function <atom:0>;
  // close_loc <class_fields_init>
  ExploreFeedSurface#1 = function <atom:0>;
  exports.ExploreFeedSurface = ExploreFeedSurface#1;
  let ExploreFeedCard;
  let <class_fields_init>#1;
  class ExploreFeedCard extends Q.Component { ... }
  <proto:ExploreFeedCard>.onViewModelUpdate = function <atom:0>;
  <proto:ExploreFeedCard>.onDestroy = function <atom:0>;
  <proto:ExploreFeedCard>.dismissMenu = function <atom:0>;
  <proto:ExploreFeedCard>.onRender = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ExploreFeedCard>;
  ExploreFeedCard = function <atom:0>;
  // close_loc <class_fields_init>#1
  ExploreFeedCard#1 = function <atom:0>;
  let FeedCardActionHandler;
  let <class_fields_init>#2;
  class FeedCardActionHandler extends undefined { ... }
  <proto:FeedCardActionHandler>.handle = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:FeedCardActionHandler>;
  FeedCardActionHandler = function <atom:0>;
  // close_loc <class_fields_init>#2
  FeedCardActionHandler#1 = function <atom:0>;
  let ExploreFeedFooterText;
  let <class_fields_init>#3;
  class ExploreFeedFooterText extends Q.Component { ... }
  <proto:ExploreFeedFooterText>.onRender = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:ExploreFeedFooterText>;
  ExploreFeedFooterText = function <atom:0>;
  // close_loc <class_fields_init>#3
  ExploreFeedFooterText#1 = function <atom:0>;
  re = {container: new X.Style({bottom: 0, left: 0, position: "absolute", right: 0, top: 0}), scroll: new X.Style({bottom: 0, left: 0, position: "absolute", right: 0, top: 0}), content: new X.Style({paddingBottom: E.OAISpacing.Four, paddingLeft: E.OAISpacing.Two, paddingRight: E.OAISpacing.Two, paddingTop: E.OAISpacing.Two, width: "100%"}), endOfFeed: new X.Style({width: "100%", flexDirection: "row", alignItems: "center", gap: E.OAISpacing.Two, paddingLeft: E.OAISpacing.Half, paddingRight: E.OAISpacing.Half, paddingTop: E.OAISpacing.Five, paddingBottom: 18}), endOfFeedText: new X.Style({flexGrow: 1, flexShrink: 1}), contentBody: new X.Style({width: "100%"}), loading: new X.Style({top: 0, bottom: 0, left: 0, right: 0, zIndex: 2, touchEnabled: false}), feedTextAnimationGroup: new X.Style({width: "100%", flushDurationThreshold: 1.5, flushMultiplier: 2}), cardContainer: new X.Style({marginBottom: E.OAISpacing.OneAndHalf, width: "100%"}), reloadBanner: new X.Style({alignItems: "center", backgroundColor: E.OAIColor.BgStatusWarning, borderRadius: E.OAIRadius.Lg, flexDirection: "row", gap: E.OAISpacing.One, justifyContent: "space-between", marginBottom: E.OAISpacing.OneAndHalf, paddingBottom: E.OAISpacing.One, paddingLeft: E.OAISpacing.OneAndHalf, paddingRight: E.OAISpacing.One, paddingTop: E.OAISpacing.One}), errorState: new X.Style({alignItems: "center", flexGrow: 1, gap: E.OAISpacing.One, justifyContent: "center", paddingLeft: E.OAISpacing.Two, paddingRight: E.OAISpacing.Two}), errorRetryLabel: new X.Style({font: D.Typography.BodyMedium.font, lineHeight: D.Typography.BodyMedium.lineHeight}), errorRetryButton: new X.Style({borderColor: E.OAIColor.BorderDefault, boxShadow: "0 4 16 rgba(0, 0, 0, 0.06)", marginTop: E.OAISpacing.OneAndHalf, paddingLeft: E.OAISpacing.Three, paddingRight: E.OAISpacing.Three}), refreshIndicator: new X.Style({position: "absolute", alignSelf: "center", width: E.OAISpacing.Five, height: E.OAISpacing.Five, alignItems: "center", justifyContent: "center", borderRadius: E.OAIRadius.Pill, backgroundColor: E.OAIColor.BgElevatedPrimary, boxShadow: "0 2 8 rgba(0, 0, 0, 0.16)", touchEnabled: false}), transitionBlur: new X.Style({bottom: 0, left: 0, position: "absolute", right: 0, top: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedSurface
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
