// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=86B file=widgets/src/components/tabs/TabsHeader
// args: t
// closure: this
function {
  this.currentWidth = t.width;
  this.dirtyLayouts();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=112B file=widgets/src/components/tabs/TabsHeader
// args: t
// closure: this
function {
  this.refHighlightRuler.setAttribute("translationX", t.x);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=179B file=widgets/src/components/tabs/TabsHeader
// args: t
// locals: e, i
// closure: this
function {
  let i;
  let e;
  this.updateIndex(t);
  e = this.isReady;
  i = this.isAnimating;
  if (!(e)) goto L_b2;
  if (!(!i)) goto L_b2;
  this.updateScroll(t, false);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=406B file=widgets/src/components/tabs/TabsHeader
// locals: t, i, s
// closure: this, e
function {
  let s;
  let i;
  let t;
  t = this.isReady;
  i = this.isAnimating;
  s = (this.state.currentIndex === e);
  if (!(t)) goto L_195;
  if (!(!i)) goto L_195;
  if (!(s)) goto L_10a;
  if (!((this.viewModel.onCurrentTabTapped == null))) goto L_104;
  this.viewModel.onCurrentTabTapped;
  this.viewModel;
  goto L_195;
  // [栈深重同步 1 -> 2]
  goto L_195;
  // [栈深重同步 1 -> 0]
  this.viewModel.tabsCoordinator.onTap.next(e);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=1 bc=90B file=widgets/src/components/tabs/TabsHeader
// args: t, e
// closure: this
function {
  return {render: t.renderHeader.bind(t), tap: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=187B file=widgets/src/components/tabs/TabsHeader
// closure: this, t
function {
  this.currentFrames = undefined;
  if (!((t == null))) goto L_3b;
  t;
  goto L_8a;
  if (!((undefined.array == null))) goto L_64;
  undefined.array;
  goto L_8a;
  this.setState({items: undefined.map(function <atom:0>)});
  this.dirtyLayouts();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=75B file=widgets/src/components/tabs/TabsHeader
// args: t
// closure: this
function {
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=254B file=widgets/src/components/tabs/TabsHeader
// args: t
// locals: e, i
// closure: this
function {
  let i;
  let e;
  e = this.isReady;
  i = this.isAnimating;
  if (!(e)) goto L_fd;
  if (!(!i)) goto L_fd;
  this.startingIndex = this.state.currentIndex;
  this.destinationIndex = t;
  this.updateScroll(t, true);
  this.isAnimating = true;
  true;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=widgets/src/components/tabs/TabsHeader
// closure: this
function {
  this.isAnimating = false;
  this.startingIndex = undefined;
  this.destinationIndex = undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=widgets/src/components/tabs/TabsHeader
// closure: this
function {
  this.dirtyLayouts();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=7 bc=575B file=widgets/src/components/tabs/TabsHeader
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, l, m
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
  this.refItemsBar = new l.ElementRef();
  this.refItemsOuter = new l.ElementRef();
  this.refItemsInner = new l.ElementRef();
  this.refHighlightBar = new l.ElementRef();
  this.refHighlightRuler = new l.ElementRef();
  this.refHighlightUnderline = new l.ElementRef();
  this.scrollViewHandler = new m.ScrollViewHandler();
  this.isReady = false;
  this.isAnimating = false;
  this.isDirtyLayout = false;
  this.scrollViewListener = {onLayout: function <atom:0>, onScroll: function <atom:0>};
  this.onUpdateIndex = function <atom:0>;
  this.onUpdateItems = function <atom:0>;
  this.onTriggerTap = function <atom:0>;
  this.onTriggerNav = function <atom:0>;
  this.onLayoutItem = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=1232B file=widgets/src/components/tabs/TabsHeader
// closure: this
function {
  this.refItemsBar.setAttribute("width", 0);
  this.refItemsBar.setAttribute("height", 0);
  this.refItemsOuter.setAttribute("marginLeft", 0);
  this.refItemsOuter.setAttribute("paddingLeft", 0);
  this.refItemsOuter.setAttribute("paddingRight", 0);
  this.refItemsOuter.setAttribute("scaleX", 0);
  this.refItemsOuter.setAttribute("scaleY", 0);
  this.refItemsOuter.setAttribute("opacity", 0);
  this.refHighlightBar.setAttribute("height", 0);
  this.refHighlightRuler.setAttribute("top", 0);
  this.refHighlightRuler.setAttribute("height", 0);
  this.refHighlightUnderline.setAttribute("top", 0);
  this.refHighlightUnderline.setAttribute("height", 0);
  this.refHighlightUnderline.setAttribute("translationX", 0);
  this.refHighlightUnderline.setAttribute("scaleX", 0);
  this.refHighlightUnderline.setAttribute("opacity", 0);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=272B file=widgets/src/components/tabs/TabsHeader
// locals: t, this
function {
  this = this;
  let t;
  t = this.context.callOnScrollOnMainThread;
  this.scrollViewSubscription = this.scrollViewHandler.subscribeListener(this.scrollViewListener, {callOnScrollOnMainThread: (true === t)});
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=453B file=widgets/src/components/tabs/TabsHeader
// args: t
// locals: e, i, s, r, n, o, this
function {
  this = this;
  let o;
  let n;
  let r;
  let s;
  let i;
  let e;
  e = this.viewModel;
  i = e.tabsCoordinator;
  s = e.tabsItemsArray;
  r = e.tabsItemsInitialIndex;
  if (!((t == null))) goto L_b4;
  t;
  goto L_d5;
  n = (i !== undefined.tabsCoordinator);
  if (!((t == null))) goto L_e4;
  t;
  goto L_105;
  o = (s !== undefined.tabsItemsArray);
  if (!(n)) goto L_15c;
  this.unsubscribe();
  this.subscribe();
  if ((n)) goto L_167;
  if (!(o)) goto L_1c4;
  i.items.next({array: s, initialIndex: r});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=119B file=widgets/src/components/tabs/TabsHeader
// locals: this
function {
  this = this;
  if (!((this.scrollViewSubscription == null))) goto L_2c;
  this.scrollViewSubscription;
  goto L_50;
  undefined.unsubscribe();
  this.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=7 cpool=0 bc=2026B file=widgets/src/components/tabs/TabsHeader
// locals: o, this
// closure: t, e, f, i, s, r, n
function {
  this = this;
  let o;
  o = this.viewModel;
  if ((o.isHidden)) goto L_7e9;
  t.beginRender(e, undefined);
  t.setAttributeRef(this.scrollViewHandler);
  t.setAttributeStyle("style", f.scroll);
  t.setAttribute("scrollEnabled", o.horizontalScrollEnabled);
  t.setAttribute("bouncesFromDragAtStart", o.horizontalScrollBouncesFromDragAtStart);
  t.setAttribute("bouncesFromDragAtEnd", o.horizontalScrollBouncesFromDragAtEnd);
  t.setAttributeNumber("paddingLeft", o.horizontalScrollPadding);
  t.setAttributeNumber("paddingRight", o.horizontalScrollPadding);
  t.setAttributeNumber("fadingEdgeLength", o.horizontalScrollFadingEdgeLength);
  t.beginRender(i, undefined);
  t.setAttributeRef(this.refItemsBar);
  t.setAttributeStyle("style", f.itemBar);
  this.onRenderItems();
  t.endRender();
  t.beginRender(s, undefined);
  t.setAttributeRef(this.refHighlightBar);
  t.setAttributeStyle("style", f.highlightBar);
  t.beginRender(r, undefined);
  t.setAttributeRef(this.refHighlightRuler);
  t.setAttributeStyle("style", f.highlightRuler);
  t.setAttributeString("backgroundColor", this.viewModel.bottomRulerColor);
  t.endRender();
  t.beginRender(n, undefined);
  t.setAttributeRef(this.refHighlightUnderline);
  t.setAttributeStyle("style", f.highlightUnderline);
  t.setAttributeString("backgroundColor", this.viewModel.underlineColor);
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=0 bc=960B file=widgets/src/components/tabs/TabsHeader
// locals: e, i, s, this
// closure: t, o, f, h
function {
  this = this;
  let e;
  if (!((this.state.items == null))) goto L_50;
  this.state.items;
  e = [];
  let i;
  i = 0;
  if (!((i < e.length))) goto L_3bf;
  let s;
  s = e[i];
  t.beginRender(o, undefined);
  t.setAttributeRef(this.refItemsOuter);
  t.setAttributeStyle("style", f.itemOuter);
  t.setAttributeFunction("onTap", s.tap);
  t.setAttributeString("accessibilityId", "tabs_header_item_".concat(i));
  t.beginRender(h, undefined);
  t.setAttributeRef(this.refItemsInner);
  t.setAttributeStyle("style", f.itemInner);
  t.setAttributeFunction("onLayout", this.onLayoutItem);
  s.render((i === this.state.currentIndex));
  t.endRender();
  t.endRender();
  i = <i_new>;
  (i++);
  goto L_56;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=widgets/src/components/tabs/TabsHeader
// args: t
// closure: this
function {
  return this.onUpdateIndex(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=widgets/src/components/tabs/TabsHeader
// args: t
// closure: this
function {
  return this.onUpdateItems(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=widgets/src/components/tabs/TabsHeader
// args: t
// closure: this
function {
  return this.onTriggerTap(t);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=3 bc=479B file=widgets/src/components/tabs/TabsHeader
// locals: t, this
function {
  this = this;
  let t;
  t = this.viewModel.tabsCoordinator;
  this.subscriptionIndex = t.index.subscribe(function <atom:0>);
  this.subscriptionItems = t.items.subscribe(function <atom:0>);
  this.subscriptionOnTap = t.onTap.subscribe(function <atom:0>);
  this.subscriptionOnNav = t.onNav.subscribe(this.onTriggerNav.bind(this));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=318B file=widgets/src/components/tabs/TabsHeader
// locals: this
function {
  this = this;
  if (!((this.subscriptionIndex == null))) goto L_2c;
  this.subscriptionIndex;
  goto L_50;
  undefined.unsubscribe();
  if (!((this.subscriptionItems == null))) goto L_7b;
  this.subscriptionItems;
  goto L_9f;
  undefined.unsubscribe();
  if (!((this.subscriptionOnTap == null))) goto L_ca;
  this.subscriptionOnTap;
  goto L_ee;
  undefined.unsubscribe();
  if (!((this.subscriptionOnNav == null))) goto L_119;
  this.subscriptionOnNav;
  goto L_13d;
  undefined.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=263B file=widgets/src/components/tabs/TabsHeader
// closure: this
function {
  this.updateLayouts();
  this.updateIndex(this.state.currentIndex);
  this.updateScroll(this.state.currentIndex, false);
  this.isDirtyLayout = false;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=73B file=widgets/src/components/tabs/TabsHeader
// closure: this
function {
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=104B file=widgets/src/components/tabs/TabsHeader
// locals: this
// closure: d
function {
  this = this;
  if ((this.isDirtyLayout)) goto L_67;
  this.isDirtyLayout = true;
  this.isReady = false;
  d.setTimeoutInterruptible(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=widgets/src/components/tabs/TabsHeader
// args: t
function {
  return t.frame;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=60B file=widgets/src/components/tabs/TabsHeader
// args: e
// closure: this, n, t, i
function {
  return {score: this.computePeekingScore(n, e, t, i), value: e};
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=87B file=widgets/src/components/tabs/TabsHeader
// args: t, e
function {
  if (!((t.score == null))) goto L_28;
  t.score;
  if (!((e.score == null))) goto L_50;
  e.score;
  if (!((0 < 0))) goto L_55;
  return t;
  return e;
}

// fn <atom:0>  args=0 vars=9 closure=5 cpool=0 bc=1163B file=widgets/src/components/tabs/TabsHeader
// locals: e, n, i, s, r, o, i#1, s#1, r#1
// closure: this, u, c, d, t
function {
  let r#1;
  let s#1;
  let i#1;
  let e;
  this.refItemsBar.setAttribute("width", u);
  this.refItemsBar.setAttribute("height", c);
  e = this.refItemsOuter.all();
  let n;
  n = 0;
  if (!((n < e.length))) goto L_231;
  let o;
  let r;
  let s;
  let i;
  i = e[n];
  s = d[n];
  r = t[n];
  o = ((s.width - r.width) / 2);
  i.setAttribute("marginLeft", s.x);
  i.setAttribute("paddingLeft", o);
  i.setAttribute("paddingRight", o);
  n = <n_new>;
  (n++);
  goto L_f6;
  if (!((this.viewModel.bottomRulerHeight == null))) goto L_27a;
  this.viewModel.bottomRulerHeight;
  i#1 = 0;
  if (!((this.viewModel.underlineHeight == null))) goto L_2c5;
  this.viewModel.underlineHeight;
  s#1 = 3;
  r#1 = Math.max(s#1, i#1);
  this.refHighlightBar.setAttribute("height", r#1);
  this.refHighlightRuler.setAttribute("top", (r#1 - i#1));
  this.refHighlightRuler.setAttribute("height", i#1);
  this.refHighlightUnderline.setAttribute("top", (r#1 - s#1));
  this.refHighlightUnderline.setAttribute("height", s#1);
  return;
}

// fn <atom:0>  args=0 vars=22 closure=1 cpool=4 bc=1376B file=widgets/src/components/tabs/TabsHeader
// locals: t, e, i, e#1, i#1, s, r, b, t#1, n, o, h, a, l, d, u, c, b#1, t#2, e#2, s#1, this
// closure: TabsHeader
function {
  this = this;
  let c;
  let u;
  let d;
  let l;
  let a;
  let h;
  let o;
  let n;
  let r;
  let s;
  let i;
  let e;
  let t;
  t = this.refItemsInner.all().map(function <atom:0>);
  if (!((t.length <= 0))) goto L_a1;
  return;
  e = this.currentWidth;
  if (!((undefined === e))) goto L_cd;
  return;
  i = undefined;
  if (!((this.viewModel.tabsColumnsFixed == null))) goto L_11a;
  this.viewModel.tabsColumnsFixed;
  if (!(true)) goto L_1bf;
  let e#1;
  e#1 = 0;
  let i#1;
  for (const i#1 of t) {
    e#1 = Math.max(e#1, Math.ceil(i#1.width));
    Math.max(e#1, Math.ceil(i#1.width));
  }
  i = e#1;
  e#1;
  s = 0;
  r = 0;
  let b;
  for (const b of t) {
    let t#1;
    t#1 = b.width;
    if (!((i == null))) goto L_207;
    i;
    s = (s + t#1);
    (s + t#1);
    r = (r + t#1);
    (r + t#1);
  }
  n = (e - (2 * TabsHeader.sides));
  o = (s > n);
  h = (r > n);
  a = r;
  if (!((undefined !== i))) goto L_286;
  if (!(o)) goto L_277;
  i = undefined;
  goto L_286;
  // [栈深重同步 1 -> 0]
  h = o;
  o;
  a = s;
  s;
  l = 0;
  if (!((this.viewModel.tabsColumnsSpaced == null))) goto L_2d5;
  this.viewModel.tabsColumnsSpaced;
  if (!(true)) goto L_39d;
  if (!(h)) goto L_363;
  l = [0, 2, 4, 6, 8, 10, 12].map(function <atom:0>).reduce(function <atom:0>).value;
  [0, 2, 4, 6, 8, 10, 12].map(function <atom:0>).reduce(function <atom:0>).value;
  goto L_39d;
  l = Math.floor(((n - a) / t.length));
  Math.floor(((n - a) / t.length));
  d = [];
  u = TabsHeader.sides;
  c = 0;
  let b#1;
  for (const b#1 of t) {
    let s#1;
    let e#2;
    let t#2;
    t#2 = u;
    if (!((i == null))) goto L_411;
    i;
    e#2 = (b#1.width + l);
    s#1 = b#1.height;
    d.push({x: t#2, y: 0, width: e#2, height: s#1});
    u = (u + e#2);
    (u + e#2);
    c = Math.max(c, s#1);
    Math.max(c, s#1);
  }
  u = (u + TabsHeader.sides);
  (u + TabsHeader.sides);
  this.renderer.batchUpdates(function <atom:0>);
  this.isReady = true;
  this.currentFrames = d;
  return;
}

// fn <atom:0>  args=0 vars=12 closure=3 cpool=1 bc=1478B file=widgets/src/components/tabs/TabsHeader
// locals: e, i, t, i#1, s, n, r, o, h, a, l, r#1
// closure: t, this, g
function {
  let i;
  let e;
  if (!(Number.isInteger(t))) goto L_b1;
  if (!((this.viewModel.onItemIndexChanged == null))) goto L_80;
  this.viewModel.onItemIndexChanged;
  this.viewModel;
  goto L_84;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, t);
  this.setState({currentIndex: t});
  e = t;
  i = this.currentFrames;
  if (!((undefined !== e))) goto L_52b;
  if (!((undefined !== i))) goto L_52b;
  let r#1;
  let s;
  let i#1;
  let t;
  t = this.refItemsOuter.all();
  if (!((this.viewModel.unfocusedOpacity == null))) goto L_188;
  this.viewModel.unfocusedOpacity;
  i#1 = 0.5;
  if (!((this.viewModel.unfocusedScale == null))) goto L_1d2;
  this.viewModel.unfocusedScale;
  s = 1;
  let n;
  n = 0;
  if (!((n < t.length))) goto L_3ac;
  let l;
  let a;
  let h;
  let o;
  let r;
  r = Math.abs((n - e));
  o = (1 - g.clamp(r, 0, 1));
  h = g.lerp(i#1, 1, o);
  a = g.lerp(s, 1, o);
  l = t[n];
  l.setAttribute("scaleX", a);
  l.setAttribute("scaleY", a);
  l.setAttribute("opacity", h);
  if (!((this.viewModel.onItemFocusChanged == null))) goto L_397;
  this.viewModel.onItemFocusChanged;
  this.viewModel;
  goto L_3a0;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, n, o);
  n = <n_new>;
  (n++);
  goto L_1da;
  r#1 = this.computePositioning(e);
  this.refHighlightUnderline.setAttribute("translationX", (r#1.left + (r#1.width / 2)));
  this.refHighlightUnderline.setAttribute("scaleX", r#1.width);
  this.refHighlightUnderline.setAttribute("opacity", 1);
  return;
  this.refItemsOuter.setAttribute("opacity", 0);
  this.refHighlightUnderline.setAttribute("opacity", 0);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=75B file=widgets/src/components/tabs/TabsHeader
// args: t
// locals: this
// closure: g
function {
  this = this;
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=10 closure=2 cpool=0 bc=565B file=widgets/src/components/tabs/TabsHeader
// args: t, e
// locals: i, s, r, n, o, h, a, this
// closure: g, TabsHeader
function {
  this = this;
  let a;
  let h;
  let o;
  let n;
  let r;
  let s;
  let i;
  i = this.currentWidth;
  if (!(!i)) goto L_43;
  return;
  s = this.currentFrames;
  if (!(!s)) goto L_6e;
  return;
  r = this.computeFinalPositioning(t);
  n = s[(s.length - 1)];
  o = ((r.left + (r.width / 2)) - (i / 2));
  if (!((this.viewModel.horizontalScrollPadding == null))) goto L_13e;
  this.viewModel.horizontalScrollPadding;
  h = 0;
  a = g.clamp(o, 0, ((((n.x + n.width) - i) + TabsHeader.sides) + h));
  if (!((e == null))) goto L_231;
  e;
  this.scrollViewHandler.scrollTo(a, 0, false);
  return;
}

// fn <atom:0>  args=1 vars=18 closure=0 cpool=0 bc=1029B file=widgets/src/components/tabs/TabsHeader
// args: t
// locals: e, i, s, r, n, o, h, a, l, d, r#1, n#1, o#1, h#1, a#1, l#1, this
function {
  this = this;
  let r;
  let s;
  let i;
  let e;
  e = this.currentFrames;
  if (((undefined === e))) goto L_49;
  if (((undefined === t))) goto L_49;
  if (!((e.length <= 0))) goto L_59;
  return {left: 0, width: 0};
  i = undefined;
  s = undefined;
  r = Math.max(0, Math.min((e.length - 1), t));
  if (!((undefined === this.destinationIndex))) goto L_21f;
  let d;
  let l;
  let a;
  let h;
  let o;
  let n;
  n = Math.floor(r);
  o = Math.ceil(r);
  h = (o - t);
  a = (1 - h);
  l = e[n];
  d = e[o];
  i = ((l.x * h) + (d.x * a));
  ((l.x * h) + (d.x * a));
  s = ((l.width * h) + (d.width * a));
  ((l.width * h) + (d.width * a));
  goto L_3f3;
  let l#1;
  let a#1;
  let h#1;
  let o#1;
  let n#1;
  let r#1;
  if (!((this.startingIndex == null))) goto L_280;
  this.startingIndex;
  r#1 = Math.min(0, this.destinationIndex);
  if (!((this.startingIndex == null))) goto L_2f7;
  this.startingIndex;
  n#1 = Math.max(0, this.destinationIndex);
  o#1 = ((n#1 - t) / (n#1 - r#1));
  h#1 = (1 - o#1);
  a#1 = e[r#1];
  l#1 = e[n#1];
  i = ((a#1.x * o#1) + (l#1.x * h#1));
  ((a#1.x * o#1) + (l#1.x * h#1));
  s = ((a#1.width * o#1) + (l#1.width * h#1));
  ((a#1.width * o#1) + (l#1.width * h#1));
  return {left: i, width: s};
}

// fn <atom:0>  args=1 vars=10 closure=0 cpool=0 bc=488B file=widgets/src/components/tabs/TabsHeader
// args: t
// locals: e, i, s, r, n, o, h, a, this
function {
  this = this;
  let a;
  let h;
  let o;
  let n;
  let r;
  let s;
  let i;
  let e;
  e = this.currentFrames;
  if (((undefined === e))) goto L_55;
  if (((undefined === t))) goto L_55;
  if (!((e.length <= 0))) goto L_65;
  return {left: 0, width: 0};
  i = Math.max(0, Math.min((e.length - 1), t));
  s = Math.floor(i);
  r = Math.ceil(i);
  n = (r - t);
  o = (1 - n);
  h = e[s];
  a = e[r];
  return {left: ((h.x * n) + (a.x * o)), width: ((h.width * n) + (a.width * o))};
}

// fn <atom:0>  args=4 vars=8 closure=0 cpool=0 bc=163B file=widgets/src/components/tabs/TabsHeader
// args: t, e, i, s
// locals: r, n, i#1, e#1
function {
  let r;
  r = 0;
  let n;
  for (const n of i) {
    let i#1;
    if (!((s == null))) goto L_3b;
    s;
    i#1 = (n.width + e);
    if (!(((r + i#1) > t))) goto L_8d;
    let e#1;
    e#1 = (r + (i#1 / 2));
    return (Math.abs((e#1 - t)) / i#1);
    // [栈深重同步 0 -> 3]
    r = (r + i#1);
    (r + i#1);
  }
  return;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=15 bc=1523B file=widgets/src/components/tabs/TabsHeader
// args: require, module, exports
// locals: t, e, i, s, r, n, o, h, a, l, d, u, c, b, g, m, TabsHeader, <class_fields_init>, TabsHeader#1, f
function {
  let f;
  let TabsHeader#1;
  let m;
  let g;
  let b;
  let c;
  let u;
  let d;
  let l;
  let a;
  let h;
  let o;
  let n;
  let r;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TabsHeader = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("scroll", undefined, "Pki3enh_JthuVGW6");
  i = t.makeNodePrototype("layout", undefined, "59Luz7O6-BoPhde_");
  s = t.makeNodePrototype("layout", undefined, "oqTxyIKWGpmVbQvK");
  r = t.makeNodePrototype("view", undefined, "11T3tC5Zy3UCxjFQ");
  n = t.makeNodePrototype("view", undefined, "4nVkxhECz-b533pZ");
  o = t.makeNodePrototype("view", ["accessibilityCategory", "button"], "VoySweROXfYNJ6lK");
  h = t.makeNodePrototype("layout", undefined, "8oXwtTTLycQp3G_8");
  a = require("valdi_core/src/Component");
  l = require("valdi_core/src/ElementRef");
  d = require("valdi_core/src/SetTimeout");
  u = require("valdi_core/src/Style");
  c = require("widgets/src/styles/semanticColors");
  b = require("widgets/src/styles/spacing");
  g = require("foundation/src/number");
  m = require("../scroll/ScrollViewHandler");
  let TabsHeader;
  let <class_fields_init>;
  class TabsHeader extends a.StatefulComponent { ... }
  <proto:TabsHeader>.onCreate = function <atom:0>;
  <proto:TabsHeader>.onViewModelUpdate = function <atom:0>;
  <proto:TabsHeader>.onDestroy = function <atom:0>;
  <proto:TabsHeader>.onRender = function <atom:0>;
  <proto:TabsHeader>.onRenderItems = function <atom:0>;
  <proto:TabsHeader>.subscribe = function <atom:0>;
  <proto:TabsHeader>.unsubscribe = function <atom:0>;
  <proto:TabsHeader>.dirtyLayouts = function <atom:0>;
  <proto:TabsHeader>.updateLayouts = function <atom:0>;
  <proto:TabsHeader>.updateIndex = function <atom:0>;
  <proto:TabsHeader>.updateScroll = function <atom:0>;
  <proto:TabsHeader>.computePositioning = function <atom:0>;
  <proto:TabsHeader>.computeFinalPositioning = function <atom:0>;
  <proto:TabsHeader>.computePeekingScore = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TabsHeader>;
  TabsHeader = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc TabsHeader
  TabsHeader#1 = function <atom:0>;
  exports.TabsHeader = TabsHeader#1;
  TabsHeader#1.sides = b.Spacing.XS;
  f = {scroll: new u.Style({horizontal: true, flexWrap: "wrap", showsHorizontalScrollIndicator: false}), itemBar: new u.Style({flexDirection: "row"}), itemOuter: new u.Style({position: "absolute"}), itemInner: new u.Style({}), highlightBar: new u.Style({minWidth: "100%"}), highlightRuler: new u.Style({position: "absolute", backgroundColor: c.SemanticColor.Layout.DIVIDER, left: 0, right: 0, limitToViewport: false}), highlightUnderline: new u.Style({position: "absolute", backgroundColor: c.SemanticColor.Text.PRIMARY, width: 1, limitToViewport: false})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/tabs/TabsHeader
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
