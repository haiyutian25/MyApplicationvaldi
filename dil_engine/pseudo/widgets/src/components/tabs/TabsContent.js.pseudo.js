// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=widgets/src/components/tabs/TabsContent
// args: e
function {
  e.Greedy = 0;
  e[0] = "Greedy";
  e.LazyNoUnload = 1;
  e[1] = "LazyNoUnload";
  e.LazyWithUnload = 2;
  e[2] = "LazyWithUnload";
  e.AggressivelyLazyNoUnload = 3;
  e[3] = "AggressivelyLazyNoUnload";
  e.AggressivelyLazyWithUnload = 4;
  e[4] = "AggressivelyLazyWithUnload";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=80B file=widgets/src/components/tabs/TabsContent
// args: e
// closure: this
function {
  this.setStateAndGetReadyIfNeeded({verticalScrollViewHeight: e.height});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=850B file=widgets/src/components/tabs/TabsContent
// locals: t, i, r
// closure: this, e
function {
  let r;
  let i;
  let t;
  t = this.getVerticalOriginScrollY();
  i = this.getReservedTopSpace();
  r = Math.max(0, ((e.y - t) + i));
  this.itemsFocused.setAttribute("translationY", 0);
  this.itemsUnfocused.setAttribute("translationY", r);
  if (!(this.viewModel.enableStickySlot)) goto L_2b4;
  this.stickyContainer.setAttribute("translationY", Math.min(r, e.y));
  goto L_351;
  // [栈深重同步 1 -> 0]
  this.stickyContainer.setAttribute("translationY", 0);
  this.stickyGradient.setAttribute("opacity", 0);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=75B file=widgets/src/components/tabs/TabsContent
// args: e
// closure: this
function {
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=87B file=widgets/src/components/tabs/TabsContent
// args: e
// closure: this
function {
  this.horizontalScrollViewWidth = e.width;
  this.setStateAndGetReadyIfNeeded({});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=272B file=widgets/src/components/tabs/TabsContent
// locals: e, t, i
// closure: this
function {
  let i;
  let t;
  let e;
  e = this.getHorizontalScrollViewHandler();
  t = this.getHorizontalScrollViewWidth();
  i = (e.scrollX / t);
  this.viewModel.tabsCoordinator.index.next(i);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=455B file=widgets/src/components/tabs/TabsContent
// locals: e, t, i
// closure: this
function {
  let i;
  let t;
  let e;
  e = this.getHorizontalScrollViewHandler();
  t = this.getHorizontalScrollViewWidth();
  i = Math.round((e.scrollX / t));
  this.viewModel.tabsCoordinator.index.next(i);
  this.viewModel.tabsCoordinator.onNav.next(i);
  return;
}

// fn <atom:0>  args=1 vars=8 closure=2 cpool=0 bc=1356B file=widgets/src/components/tabs/TabsContent
// args: e
// locals: t, i, r, s, o, n, a
// closure: this, y
function {
  let a;
  let n;
  let o;
  let s;
  let r;
  let i;
  let t;
  if (!((undefined === e))) goto L_50;
  this.setStateAndGetReadyIfNeeded({renderMin: undefined, renderMax: undefined});
  return;
  if (!((this.viewModel.tabsContentLoading == null))) goto L_bc;
  this.viewModel.tabsContentLoading;
  t = y.LazyWithUnload;
  i = (Math.round((100 * e)) / 100);
  r = Math.floor(i);
  s = Math.round(i);
  o = Math.ceil(i);
  n = (s - 1);
  a = (s + 1);
  if (!((t === y.Greedy))) goto L_1e9;
  this.setStateAndGetReadyIfNeeded({renderMin: (-1 / 0), renderMax: (1 / 0)});
  goto L_54b;
  if (!((t === y.LazyNoUnload))) goto L_33a;
  if (!((this.state.renderMin == null))) goto L_2ad;
  this.state.renderMin;
  if (!((this.state.renderMax == null))) goto L_32b;
  this.state.renderMax;
  this.setStateAndGetReadyIfNeeded({renderMin: Math.min(n, n), renderMax: Math.max(a, a)});
  goto L_54b;
  if (!((t === y.LazyWithUnload))) goto L_39c;
  this.setStateAndGetReadyIfNeeded({renderMin: n, renderMax: a});
  goto L_54b;
  if (!((t === y.AggressivelyLazyNoUnload))) goto L_4ec;
  if (!((this.state.renderMin == null))) goto L_460;
  this.state.renderMin;
  if (!((this.state.renderMax == null))) goto L_4de;
  this.state.renderMax;
  this.setStateAndGetReadyIfNeeded({renderMin: Math.min(r, r), renderMax: Math.max(o, o)});
  goto L_54b;
  if (!((t === y.AggressivelyLazyWithUnload))) goto L_54b;
  this.setStateAndGetReadyIfNeeded({renderMin: r, renderMax: o});
  t;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=159B file=widgets/src/components/tabs/TabsContent
// args: e, t
function {
  if (!((e.key == null))) goto L_4d;
  e.key;
  return {key: t.toString(), render: e.renderContent.bind(e)};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=207B file=widgets/src/components/tabs/TabsContent
// args: e
// closure: this
function {
  if (!((e == null))) goto L_c;
  e;
  goto L_2d;
  this.itemsInitialIndex = undefined.initialIndex;
  if (!((e == null))) goto L_77;
  e;
  goto L_c6;
  if (!((undefined.array == null))) goto L_a0;
  undefined.array;
  goto L_c6;
  this.setStateAndGetReadyIfNeeded({ready: false, renderMin: undefined, renderMax: undefined, items: undefined.map(function <atom:0>)});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=258B file=widgets/src/components/tabs/TabsContent
// args: e
// locals: t, i
// closure: this
function {
  let i;
  let t;
  if (!((undefined === e))) goto L_c;
  return;
  t = this.getHorizontalScrollViewHandler();
  if (!((t.scrollViewFrame == null))) goto L_60;
  t.scrollViewFrame;
  goto L_81;
  if (!((undefined.width == null))) goto L_87;
  undefined.width;
  i = (0 * e);
  if (!((this.viewModel.horizontalScrollEnabled == null))) goto L_fe;
  this.viewModel.horizontalScrollEnabled;
  t.scrollTo(i, 0, true);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=312B file=widgets/src/components/tabs/TabsContent
// locals: e, t, r, s
// closure: this, i
function {
  let s;
  let r;
  let t;
  let e;
  e = this.getVerticalOriginScrollY();
  t = this.getReservedTopSpace();
  r = this.getVerticalScrollViewHandler();
  s = Math.min(r.scrollY, (e - t));
  r.scrollToClamped(0, s, false);
  this.setStateAndGetReadyIfNeeded({focused: i});
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=255B file=widgets/src/components/tabs/TabsContent
// args: e
// locals: t, i, r
// closure: this
function {
  let r;
  let i;
  let t;
  t = this.state.focused;
  i = e;
  if (!((i !== t))) goto L_a6;
  this.renderer.batchUpdates(function <atom:0>);
  r = this.viewModel.onNavigate;
  if (!(r)) goto L_fe;
  r(i, t);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=9 bc=516B file=widgets/src/components/tabs/TabsContent
// locals: this, this.active_func, new.target, arguments
// closure: y, <class_fields_init>, S, l
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
  this.horizontalScrollViewHandler = new S.ScrollViewHandler();
  this.containerRoot = new l.ElementRef();
  this.stickyContainer = new l.ElementRef();
  this.stickyGradient = new l.ElementRef();
  this.itemsFocused = new l.ElementRef();
  this.itemsUnfocused = new l.ElementRef();
  this.verticalScrollViewListener = {onLayout: function <atom:0>, onScroll: function <atom:0>};
  this.horizontalScrollViewListener = {onLayout: function <atom:0>, onScroll: function <atom:0>, onScrollEnd: function <atom:0>};
  this.onUpdateIndex = function <atom:0>;
  this.onUpdateItems = function <atom:0>;
  this.onTriggerTap = function <atom:0>;
  this.onTriggerNav = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=widgets/src/components/tabs/TabsContent
// locals: this
function {
  this = this;
  this.subscribeVerticalScroll();
  this.subscribeHorizontalScroll();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=192B file=widgets/src/components/tabs/TabsContent
// args: e
// locals: this
function {
  this = this;
  if (!((e == null))) goto L_4e;
  e;
  goto L_6f;
  if (!((this.viewModel.tabsCoordinator !== undefined.tabsCoordinator))) goto L_bf;
  this.unsubscribeCoordinator();
  this.subscribeCoordinator();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=116B file=widgets/src/components/tabs/TabsContent
// locals: this
function {
  this = this;
  this.unsubscribeCoordinator();
  this.unsubscribeVerticalScroll();
  this.unsubscribeHorizontalScroll();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=0 bc=883B file=widgets/src/components/tabs/TabsContent
// locals: r, s, this
// closure: e, t, i, g
function {
  this = this;
  let s;
  let r;
  r = this.viewModel;
  s = (this.getVerticalScrollViewHeight() - this.getReservedTopSpace());
  e.beginRender(t, undefined);
  e.setAttributeRef(this.containerRoot);
  e.setAttributeNumber("minHeight", s);
  e.beginRender(i, undefined);
  e.setAttributeRef(this.horizontalScrollViewHandler);
  e.setAttributeStyle("style", g.scroll);
  e.setAttribute("scrollEnabled", r.horizontalScrollEnabled);
  e.setAttribute("bouncesFromDragAtStart", r.horizontalScrollBouncesFromDragAtStart);
  e.setAttribute("bouncesFromDragAtEnd", r.horizontalScrollBouncesFromDragAtEnd);
  this.onRenderItems();
  e.endRender();
  this.onRenderSticky();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=12 closure=4 cpool=0 bc=1174B file=widgets/src/components/tabs/TabsContent
// locals: t, i, o, n, a, l, d, c, i#1, a#1, h, this
// closure: e, r, g, s
function {
  this = this;
  let d;
  let l;
  let a;
  let n;
  let o;
  let i;
  let t;
  t = this.state.items;
  if (!((undefined === t))) goto L_65;
  return;
  i = this.viewModel.tabsContentLoading;
  o = this.state.focused;
  n = this.state.ready;
  a = t.length;
  l = this.resolveRenderMin(i);
  d = this.resolveRenderMax(i);
  let c;
  c = 0;
  if (!((c < a))) goto L_495;
  let h;
  let a#1;
  let i#1;
  i#1 = t[c];
  a#1 = (c === o);
  if (!(n)) goto L_1dd;
  if ((a#1)) goto L_1dd;
  if (!((c >= l))) goto L_1dd;
  h = (c <= d);
  e.beginRender(r, i#1.key);
  e.setAttributeStyle("style", g.page);
  e.beginRender(s, i#1.key);
  if (!(a#1)) goto L_31c;
  goto L_33f;
  // [栈深重同步 3 -> 2]
  e.setAttributeRef(this.itemsUnfocused);
  e.setAttributeStyle("style", g.content);
  if (!(a#1)) goto L_3c5;
  goto L_3ca;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("position", "absolute");
  if (!(a#1)) goto L_3ff;
  goto L_404;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "ignored");
  if (!(h)) goto L_439;
  i#1.render(a#1);
  e.endRender();
  e.endRender();
  c = <c_new>;
  (c++);
  goto L_196;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=613B file=widgets/src/components/tabs/TabsContent
// locals: this
// closure: e, o, n, g
function {
  this = this;
  if (!(this.viewModel.enableStickySlot)) goto L_264;
  e.beginRender(o, undefined);
  e.setAttributeRef(this.stickyContainer);
  e.setAttribute("limitToViewport", false);
  e.setAttributeNumber("accessibilityPriority", 10);
  e.renderNamedSlot("sticky", this);
  e.beginRender(n, undefined);
  e.setAttributeRef(this.stickyGradient);
  e.setAttributeStyle("style", g.stickyGradient);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=120B file=widgets/src/components/tabs/TabsContent
// args: e
// locals: this
// closure: y
function {
  this = this;
  if (!((e === y.Greedy))) goto L_2c;
  return (-1 / 0);
  if (!((this.state.renderMin == null))) goto L_77;
  this.state.renderMin;
  return (1 / 0);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=120B file=widgets/src/components/tabs/TabsContent
// args: e
// locals: this
// closure: y
function {
  this = this;
  if (!((e === y.Greedy))) goto L_2c;
  return (1 / 0);
  if (!((this.state.renderMax == null))) goto L_77;
  this.state.renderMax;
  return (-1 / 0);
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=360B file=widgets/src/components/tabs/TabsContent
// locals: e, t, this
function {
  this = this;
  let t;
  let e;
  e = this.getVerticalScrollViewHandler();
  this.subscriptionVertical = e.subscribeListener(this.verticalScrollViewListener, {callOnScrollOnMainThread: this.viewModel.enableStickySlot});
  t = e.scrollViewFrame;
  if (!(t)) goto L_167;
  if (!(t.height)) goto L_167;
  this.verticalScrollViewListener.onLayout(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=93B file=widgets/src/components/tabs/TabsContent
// locals: this
function {
  this = this;
  if (!((this.subscriptionVertical == null))) goto L_2c;
  this.subscriptionVertical;
  goto L_50;
  undefined.unsubscribe();
  this.subscriptionVertical = undefined;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=127B file=widgets/src/components/tabs/TabsContent
// locals: e, this
function {
  this = this;
  let e;
  e = this.getHorizontalScrollViewHandler();
  this.subscriptionHorizontal = e.subscribeListener(this.horizontalScrollViewListener);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=93B file=widgets/src/components/tabs/TabsContent
// locals: this
function {
  this = this;
  if (!((this.subscriptionHorizontal == null))) goto L_2c;
  this.subscriptionHorizontal;
  goto L_50;
  undefined.unsubscribe();
  this.subscriptionHorizontal = undefined;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=widgets/src/components/tabs/TabsContent
// args: e
// closure: this
function {
  return this.onUpdateIndex(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=widgets/src/components/tabs/TabsContent
// args: e
// closure: this
function {
  return this.onUpdateItems(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=widgets/src/components/tabs/TabsContent
// args: e
// closure: this
function {
  return this.onTriggerTap(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=widgets/src/components/tabs/TabsContent
// args: e
// closure: this
function {
  return this.onTriggerNav(e);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=4 bc=410B file=widgets/src/components/tabs/TabsContent
// locals: e, this
function {
  this = this;
  let e;
  e = this.viewModel.tabsCoordinator;
  this.subscriptionIndex = e.index.subscribe(function <atom:0>);
  this.subscriptionItems = e.items.subscribe(function <atom:0>);
  this.subscriptionOnTap = e.onTap.subscribe(function <atom:0>);
  this.subscriptionOnNav = e.onNav.subscribe(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=363B file=widgets/src/components/tabs/TabsContent
// locals: this
function {
  this = this;
  if (!((this.subscriptionIndex == null))) goto L_2c;
  this.subscriptionIndex;
  goto L_50;
  undefined.unsubscribe();
  this.subscriptionIndex = undefined;
  if (!((this.subscriptionItems == null))) goto L_86;
  this.subscriptionItems;
  goto L_aa;
  undefined.unsubscribe();
  this.subscriptionItems = undefined;
  if (!((this.subscriptionOnTap == null))) goto L_e0;
  this.subscriptionOnTap;
  goto L_104;
  undefined.unsubscribe();
  this.subscriptionOnTap = undefined;
  if (!((this.subscriptionOnNav == null))) goto L_13a;
  this.subscriptionOnNav;
  goto L_15e;
  undefined.unsubscribe();
  this.subscriptionOnNav = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=widgets/src/components/tabs/TabsContent
// locals: this
function {
  this = this;
  return this.viewModel.scrollViewHandler;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=widgets/src/components/tabs/TabsContent
// locals: this
function {
  this = this;
  return this.horizontalScrollViewHandler;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=43B file=widgets/src/components/tabs/TabsContent
// locals: this
function {
  this = this;
  if (!((this.horizontalScrollViewWidth == null))) goto L_2a;
  this.horizontalScrollViewWidth;
  return 1;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=76B file=widgets/src/components/tabs/TabsContent
// locals: this
function {
  this = this;
  if (!((this.viewModel.reservedTopSpace == null))) goto L_4b;
  this.viewModel.reservedTopSpace;
  return 0;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=76B file=widgets/src/components/tabs/TabsContent
// locals: this
function {
  this = this;
  if (!((this.state.verticalScrollViewHeight == null))) goto L_4b;
  this.state.verticalScrollViewHeight;
  return 0;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=296B file=widgets/src/components/tabs/TabsContent
// locals: e, t, i, this
// closure: c
function {
  this = this;
  let i;
  let t;
  let e;
  e = this.getVerticalScrollViewHandler().scrollView;
  t = this.containerRoot.single();
  if (((undefined === e))) goto L_a7;
  if (!((undefined === t))) goto L_ab;
  return 0;
  i = c.RenderedElementUtils.relativePositionTo(e, t);
  if (!((undefined === i))) goto L_103;
  return 0;
  return i.y;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=503B file=widgets/src/components/tabs/TabsContent
// locals: t
// closure: e, this, u, r, o
function {
  let t;
  e.ready = true;
  this.setState(e);
  if (!((this.itemsInitialIndex == null))) goto L_82;
  this.itemsInitialIndex;
  t = u.clamp(0, 0, (r.length - 1));
  this.getHorizontalScrollViewHandler().scrollTo((o * t), 0, false);
  this.viewModel.tabsCoordinator.index.next(t);
  this.viewModel.tabsCoordinator.onNav.next(t);
  return;
}

// fn <atom:0>  args=1 vars=7 closure=1 cpool=1 bc=494B file=widgets/src/components/tabs/TabsContent
// args: e
// locals: t, i, r, s, o, this
// closure: u
function {
  this = this;
  let o;
  let s;
  let r;
  let i;
  let t;
  t = (false === e.ready);
  if (!(this.state.ready)) goto L_84;
  i = !t;
  if (!((e.items == null))) goto L_f0;
  e.items;
  r = this.state.items;
  s = this.state.verticalScrollViewHeight;
  o = this.horizontalScrollViewWidth;
  if ((i)) goto L_179;
  if (((undefined === r))) goto L_179;
  if (((undefined === s))) goto L_179;
  if (!((undefined === o))) goto L_1a4;
  goto L_1ed;
  // [栈深重同步 1 -> 0]
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=23 bc=1359B file=widgets/src/components/tabs/TabsContent
// args: require, module, exports
// locals: e, t, i, r, s, o, n, a, l, d, c, h, b, u, S, y, TabsContent, <class_fields_init>, TabsContent#1, v, g
function {
  let g;
  let v;
  let TabsContent#1;
  let S;
  let u;
  let b;
  let h;
  let c;
  let d;
  let l;
  let a;
  let n;
  let o;
  let s;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TabsContentLoading = undefined;
  exports.TabsContent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", ["flexDirection", "column-reverse"], "PwWGHqtS2uSKBwTM");
  i = e.makeNodePrototype("scroll", undefined, "GhPLwxrgEdfXqQW_");
  r = e.makeNodePrototype("layout", undefined, "FtPVO4YSXZCWfov8");
  s = e.makeNodePrototype("view", undefined, "VtBn4fvbhjjWdiDP");
  o = e.makeNodePrototype("view", undefined, "pvEqGkXe_ydl0anj");
  n = e.makeNodePrototype("view", ["opacity", 0], "tYtZ4C4E7dJDcZRl");
  a = require("valdi_core/src/Component");
  l = require("valdi_core/src/ElementRef");
  d = require("valdi_core/src/Style");
  c = require("valdi_core/src/utils/RenderedElementUtils");
  h = require("widgets/src/styles/gradients");
  b = require("widgets/src/styles/semanticColors");
  u = require("foundation/src/number");
  S = require("../scroll/ScrollViewHandler");
  if ((y)) goto L_254;
  y = {};
  exports.TabsContentLoading = {};
  !function <atom:0>({});
  let TabsContent;
  let <class_fields_init>;
  class TabsContent extends a.StatefulComponent { ... }
  <proto:TabsContent>.onCreate = function <atom:0>;
  <proto:TabsContent>.onViewModelUpdate = function <atom:0>;
  <proto:TabsContent>.onDestroy = function <atom:0>;
  <proto:TabsContent>.onRender = function <atom:0>;
  <proto:TabsContent>.onRenderItems = function <atom:0>;
  <proto:TabsContent>.onRenderSticky = function <atom:0>;
  <proto:TabsContent>.resolveRenderMin = function <atom:0>;
  <proto:TabsContent>.resolveRenderMax = function <atom:0>;
  <proto:TabsContent>.subscribeVerticalScroll = function <atom:0>;
  <proto:TabsContent>.unsubscribeVerticalScroll = function <atom:0>;
  <proto:TabsContent>.subscribeHorizontalScroll = function <atom:0>;
  <proto:TabsContent>.unsubscribeHorizontalScroll = function <atom:0>;
  <proto:TabsContent>.subscribeCoordinator = function <atom:0>;
  <proto:TabsContent>.unsubscribeCoordinator = function <atom:0>;
  <proto:TabsContent>.getVerticalScrollViewHandler = function <atom:0>;
  <proto:TabsContent>.getHorizontalScrollViewHandler = function <atom:0>;
  <proto:TabsContent>.getHorizontalScrollViewWidth = function <atom:0>;
  <proto:TabsContent>.getReservedTopSpace = function <atom:0>;
  <proto:TabsContent>.getVerticalScrollViewHeight = function <atom:0>;
  <proto:TabsContent>.getVerticalOriginScrollY = function <atom:0>;
  <proto:TabsContent>.setStateAndGetReadyIfNeeded = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TabsContent>;
  TabsContent = function <atom:0>;
  // close_loc <class_fields_init>
  TabsContent#1 = function <atom:0>;
  exports.TabsContent = TabsContent#1;
  v = 11;
  g = {scroll: new d.Style({pagingEnabled: true, horizontal: true, showsHorizontalScrollIndicator: false, flexGrow: 1}), page: new d.Style({width: "100%"}), content: new d.Style({width: "100%"}), stickyGradient: new d.Style({marginBottom: -11, height: v, background: h.linearGradient([[b.SemanticColor.Elevation.HEADER_SHADOW, 0], [b.SemanticColor.Flat.CLEAR, 1]]), limitToViewport: false})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/tabs/TabsContent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
