// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=widgets/src/components/section/SectionList
// closure: require
function {
  return require("./SectionList.vmtc.js");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=widgets/src/components/section/SectionList
// closure: require
function {
  return require("./SectionList.vmtc.js");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=47B file=widgets/src/components/section/SectionList
// closure: this
function {
  this.setState({visibility: 2});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=2 bc=168B file=widgets/src/components/section/SectionList
// closure: this
function {
  if (!((0 === this.state.visibility))) goto L_a7;
  this.setStateAnimatedPromise({visibility: 1}, {duration: 0.5}).then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=230B file=widgets/src/components/section/SectionList
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, m
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
  this.state = {visibility: 0};
  this.refs = {root: new m.ElementRef(), header: new m.ElementRef(), bar: new m.ElementRef()};
  this.onRootLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=186B file=widgets/src/components/section/SectionList
// locals: this
function {
  this = this;
  if (!((this.refs.root.single() == null))) goto L_71;
  this.refs.root.single();
  goto L_b3;
  if (!((undefined.frame.y == null))) goto L_b9;
  undefined.frame.y;
  return 0;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=186B file=widgets/src/components/section/SectionList
// locals: this
function {
  this = this;
  if (!((this.refs.root.single() == null))) goto L_71;
  this.refs.root.single();
  goto L_b3;
  if (!((undefined.frame.height == null))) goto L_b9;
  undefined.frame.height;
  return 0;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=186B file=widgets/src/components/section/SectionList
// locals: this
function {
  this = this;
  if (!((this.refs.header.single() == null))) goto L_71;
  this.refs.header.single();
  goto L_b3;
  if (!((undefined.frame.height == null))) goto L_b9;
  undefined.frame.height;
  return 0;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=widgets/src/components/section/SectionList
// locals: this
function {
  this = this;
  return (this.getRootY() + this.getRootHeight());
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=228B file=widgets/src/components/section/SectionList
// locals: this
function {
  this = this;
  if ((this.viewModel.animated)) goto L_75;
  this.setState({visibility: 2});
  this.refs.bar.setAttribute("opacity", 0);
  return;
}

// fn <atom:0>  args=0 vars=9 closure=11 cpool=0 bc=2606B file=widgets/src/components/section/SectionList
// locals: d, a, l, c, h, u, y, m, this
// closure: e, t, R, i, w, r, o, A, s, b, n
function {
  this = this;
  let m;
  let y;
  let u;
  let h;
  let c;
  let l;
  let a;
  let d;
  d = this.state.visibility;
  a = (0 === d);
  l = (1 === d);
  if (!(a)) goto L_74;
  goto L_75;
  // [栈深重同步 1 -> 0]
  c = 1;
  if (!(a)) goto L_7e;
  goto L_7f;
  // [栈深重同步 1 -> 0]
  h = undefined;
  if (!(a)) goto L_8d;
  goto L_92;
  // [栈深重同步 1 -> 0]
  u = "relative";
  y = -this.viewModel.cover;
  m = -this.viewModel.sides;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.refs.root);
  e.setAttributeString("accessibilityId", R.StickyHeaderElementId.Section);
  if ((a)) goto L_25f;
  e.setAttribute("slowClipping", l);
  e.setAttributeNumber("opacity", c);
  e.setAttributeNumber("height", h);
  e.setAttributeFunction("onLayout", this.onRootLayout);
  e.beginRender(i, undefined);
  e.setAttributeString("position", u);
  e.beginComponent(w.SectionSeparator, r, undefined, undefined);
  e.setViewModelProperty("spacing", this.viewModel.spacing);
  e.endComponent();
  this.renderBody();
  e.beginRender(o, undefined);
  e.setAttributeRef(this.refs.header);
  e.setAttributeStyle("style", A.header);
  e.beginRender(s, undefined);
  e.setAttributeRef(this.refs.bar);
  if (!((undefined === this.viewModel.stickyHeadersBackgroundStyle))) goto L_699;
  goto L_749;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", b.Style.cachingMerge(A.bar, this.viewModel.stickyHeadersBackgroundStyle));
  e.setAttributeString("backgroundColor", this.viewModel.stickyHeadersBackgroundColor);
  e.setAttributeNumber("top", y);
  e.setAttributeNumber("left", m);
  e.setAttributeNumber("right", m);
  if (!((undefined === this.viewModel.stickyHeadersBackgroundStyle))) goto L_93f;
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", A.gradient);
  e.endRender();
  e.endRender();
  this.renderHeader();
  e.endRender();
  this.renderAnchor();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=187B file=widgets/src/components/section/SectionList
// args: e, t
// locals: i, r, o, s, this
function {
  this = this;
  let o;
  let r;
  let i;
  i = this.viewModel.deferredRenderer;
  r = 0;
  o = (e.length - 1);
  let s;
  for (const s of e) {
    if (!(i)) goto L_95;
    if (!(!i.shouldRenderNextItem())) goto L_95;
    return undefined;
    // [栈深重同步 0 -> 3]
    t(s, r, (0 === r), (r === o));
    r = <r_new>;
    (r++);
  }
  return;
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=0 bc=545B file=widgets/src/components/section/SectionList
// args: e, t, i
// locals: r, o, s, this
// closure: R
function {
  this = this;
  let s;
  let o;
  let r;
  r = this.refs.root.single();
  o = this.refs.header.single();
  s = this.refs.bar.single();
  if (!((undefined !== r))) goto L_220;
  if (!((undefined !== o))) goto L_220;
  if (!((undefined !== s))) goto L_220;
  R.updateStickyHeader(r, o, s, e, t, i, this.viewModel.cover, this.viewModel.fade);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=144B file=widgets/src/components/section/SectionList
// locals: this
function {
  this = this;
  if (!(this.viewModel.onRenderAnchor)) goto L_8f;
  this.viewModel.onRenderAnchor();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=144B file=widgets/src/components/section/SectionList
// locals: this
function {
  this = this;
  if (!(this.viewModel.onRenderHeader)) goto L_8f;
  this.viewModel.onRenderHeader();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=74B file=widgets/src/components/section/SectionList
// locals: this
function {
  this = this;
  this.viewModel.onRenderBody(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=widgets/src/components/section/SectionList
// closure: this
function {
  this.updateSections();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=widgets/src/components/section/SectionList
// closure: this
function {
  this.updateSections();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=163B file=widgets/src/components/section/SectionList
// closure: this
function {
  if (!((undefined !== this.mainThreadScrollSubscription))) goto L_7b;
  if (((undefined !== this.mainThreadLayoutCallback))) goto L_a2;
  goto L_a2;
  // [栈深重同步 1 -> 0]
  this.updateSections();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=3 bc=233B file=widgets/src/components/section/SectionList
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, y, m
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
  this.items = new y.ComponentRef();
  this.listRoot = new m.ElementRef();
  this.mainThreadViewport = {sections: [], previous: []};
  this.scrollViewListener = {onLayout: function <atom:0>, onScroll: function <atom:0>};
  this.onLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=widgets/src/components/section/SectionList
// closure: this
function {
  return this.scheduleRender();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=523B file=widgets/src/components/section/SectionList
// locals: e, this
// closure: h
function {
  this = this;
  let e;
  if (!((true === this.viewModel.callOnScrollOnMainThread))) goto L_77;
  e = h.isVersionAtLeast(294);
  if (!(e)) goto L_f3;
  this.mainThreadScrollSubscription = this.viewModel.scrollViewHandler.bindMainThreadOnScroll(function <atom:0>);
  this.viewModel.scrollViewHandler.bindMainThreadOnScroll(function <atom:0>);
  if (!(e)) goto L_188;
  goto L_1aa;
  // [栈深重同步 4 -> 3]
  if (!(!e)) goto L_1f9;
  this.scrollSubscription = this.viewModel.scrollViewHandler.subscribeListener(this.scrollViewListener, {callOnScrollOnMainThread: (true === this.viewModel.callOnScrollOnMainThread)});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=172B file=widgets/src/components/section/SectionList
// locals: this
function {
  this = this;
  if (!((this.scrollSubscription == null))) goto L_2c;
  this.scrollSubscription;
  goto L_50;
  undefined.unsubscribe();
  if (!((this.mainThreadScrollSubscription == null))) goto L_7b;
  this.mainThreadScrollSubscription;
  goto L_9f;
  undefined.unsubscribe();
  this.deferredRenderer = undefined;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=439B file=widgets/src/components/section/SectionList
// locals: e, t, i, this
// closure: v
function {
  this = this;
  let t;
  let e;
  if (!((this.viewModel == null))) goto L_30;
  this.viewModel;
  e = {};
  t = e.initialMaxItemsCount;
  if (!((undefined === t))) goto L_69;
  this.deferredRenderer = undefined;
  return;
  let i;
  if (!((e.maxItemsCountIncrement == null))) goto L_bb;
  e.maxItemsCountIncrement;
  i = Number.MAX_SAFE_INTEGER;
  if (!(this.deferredRenderer)) goto L_177;
  if (!((this.deferredRenderer.initialItemsCount === t))) goto L_177;
  if (((this.deferredRenderer.itemsCountIncrement === i))) goto L_1b5;
  this.deferredRenderer = new v.DeferredItemsRenderer(t, i, this);
  new v.DeferredItemsRenderer(t, i, this);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=1016B file=widgets/src/components/section/SectionList
// args: r
// closure: e, SectionListItem, a, this, i, t
function {
  e.beginComponent(SectionListItem, a, r.key, this.items);
  e.setViewModelProperty("animated", r.animated);
  e.setViewModelProperty("onRenderAnchor", r.onRenderAnchor);
  e.setViewModelProperty("onRenderHeader", r.onRenderHeader);
  e.setViewModelProperty("onRenderBody", r.onRenderBody);
  if (!((i.stickyCover == null))) goto L_201;
  i.stickyCover;
  e.setViewModelProperty("cover", 0);
  if (!((i.stickySides == null))) goto L_258;
  i.stickySides;
  e.setViewModelProperty("sides", 0);
  e.setViewModelProperty("fade", i.stickyFade);
  e.setViewModelProperty("deferredRenderer", t);
  e.setViewModelProperty("stickyHeadersBackgroundColor", i.stickyHeadersBackgroundColor);
  e.setViewModelProperty("stickyHeadersBackgroundStyle", i.stickyHeadersBackgroundStyle);
  e.setViewModelProperty("spacing", i.spacing);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=11 closure=7 cpool=1 bc=1878B file=widgets/src/components/section/SectionList
// locals: t, i, r, o, t#1, s, n, d, a, l, this
// closure: e, SectionListItem, a, h, k, C, d
function {
  this = this;
  let o;
  let r;
  let i;
  let t;
  if (!(this.sectionElements)) goto L_43;
  this.sectionElements = undefined;
  undefined;
  t = this.deferredRenderer;
  if (!(t)) goto L_96;
  t.prepareForRender();
  if (!((this.viewModel == null))) goto L_c0;
  this.viewModel;
  i = {};
  if (!((i.scrollViewHandler.scrollView == null))) goto L_10e;
  i.scrollViewHandler.scrollView;
  goto L_12f;
  r = undefined.id;
  if (!((this.listRoot.single() == null))) goto L_17f;
  this.listRoot.single();
  goto L_1a0;
  o = undefined.id;
  if (!((undefined !== this.mainThreadScrollSubscription))) goto L_5cc;
  if (!(h.isVersionAtLeast(294))) goto L_5cc;
  if (!((undefined !== r))) goto L_5cc;
  if (!((undefined !== o))) goto L_5cc;
  let l;
  let a;
  let d;
  let n;
  let s;
  let t#1;
  t#1 = this.mainThreadViewport;
  if (!((i.stickyCover == null))) goto L_26d;
  i.stickyCover;
  s = 0;
  n = i.stickyFade;
  d = (true === i.stickyHeaders);
  a = i.scrollViewHandler.onScroll;
  e.beginMainThreadCallback(k);
  e.setMainThreadCallbackClosureArg(0, o);
  e.setMainThreadCallbackClosureArg(1, t#1);
  e.setMainThreadCallbackClosureArg(2, r);
  e.setMainThreadCallbackClosureArg(3, s);
  e.setMainThreadCallbackClosureArg(4, n);
  e.setMainThreadCallbackClosureArg(5, d);
  e.setMainThreadCallbackClosureArg(6, a);
  l = e.endMainThreadCallback();
  e.beginMainThreadCallback(C);
  e.setMainThreadCallbackClosureArg(0, l);
  this.mainThreadLayoutCallback = e.endMainThreadCallback();
  this.mainThreadScrollSubscription.update(l);
  this.renderer.onLayoutComplete(this.mainThreadLayoutCallback);
  e.beginRender(d, undefined);
  e.setAttributeRef(this.listRoot);
  e.setAttributeFunction("onLayout", this.onLayout);
  e.setAttributeFunction("onLayoutComplete", this.mainThreadLayoutCallback);
  i.sections.forEach(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=124B file=widgets/src/components/section/SectionList
// locals: e
// closure: this
function {
  let e;
  for (const e of this.items.all()) {
    e.scheduleRender();
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=115B file=widgets/src/components/section/SectionList
// args: e
// locals: this
function {
  this = this;
  if (!((this.deferredRenderer === e))) goto L_72;
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=322B file=widgets/src/components/section/SectionList
// locals: e, t, i, this
function {
  this = this;
  let e;
  e = this.sectionElements;
  if (!(!e)) goto L_13e;
  e = [];
  [];
  this.sectionElements = e;
  let t;
  for (const t of this.items.all()) {
    let i;
    for (const i of t.refs.root.all()) {
      e.push(i);
      // [栈深重同步 3 -> 6]
    }
  }
  return e;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=0 bc=285B file=widgets/src/components/section/SectionList
// locals: t, i, o, s
// closure: this, n, d, e, r
function {
  let t;
  if (!((this.viewModel == null))) goto L_2d;
  this.viewModel;
  goto L_4e;
  if (!((undefined.stickyCover == null))) goto L_54;
  undefined.stickyCover;
  t = 0;
  let i;
  i = n;
  if (!((i <= d))) goto L_11c;
  let o;
  o = e[i];
  if (!((i > 0))) goto L_e2;
  let s;
  s = e[(i - 1)];
  o.updateSection(i, (s.getHeaderHeight() + t), r);
  goto L_111;
  o.updateSection(i, 0, r);
  i = <i_new>;
  (i++);
  goto L_5c;
  return;
}

// fn <atom:0>  args=0 vars=9 closure=0 cpool=1 bc=655B file=widgets/src/components/section/SectionList
// locals: e, t, i, r, o, s, n, d, this
function {
  this = this;
  let d;
  let n;
  let s;
  let o;
  let r;
  let i;
  let t;
  let e;
  e = this.items.all();
  if (!((e.length <= 0))) goto L_6c;
  return;
  if (!((this.viewModel.scrollViewHandler == null))) goto L_b8;
  this.viewModel.scrollViewHandler;
  goto L_d9;
  if (!((undefined.scrollY == null))) goto L_df;
  undefined.scrollY;
  t = 0;
  if (!((this.viewModel.scrollViewHandler == null))) goto L_12c;
  this.viewModel.scrollViewHandler;
  goto L_176;
  if (!((undefined.scrollViewFrame == null))) goto L_155;
  undefined.scrollViewFrame;
  goto L_176;
  if (!((undefined.height == null))) goto L_17c;
  undefined.height;
  i = 0;
  if (!(this.viewModel.stickyHeaders)) goto L_1c8;
  goto L_1c9;
  // [栈深重同步 1 -> 0]
  r = 0;
  o = t;
  s = (o + i);
  if (!((this.findSectionIndexAt(e, o) == null))) goto L_20a;
  this.findSectionIndexAt(e, o);
  n = 0;
  if (!((this.findSectionIndexAt(e, s) == null))) goto L_243;
  this.findSectionIndexAt(e, s);
  d = (e.length - 1);
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=126B file=widgets/src/components/section/SectionList
// args: e
// closure: t
function {
  if (!((t < e.getRootY()))) goto L_2b;
  return 1;
  if (!((t > (e.getRootY() + e.getRootHeight())))) goto L_7c;
  return -1;
  return 0;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=57B file=widgets/src/components/section/SectionList
// args: e, t
// locals: i
// closure: S
function {
  let i;
  i = S.binarySearch(e, function <atom:0>);
  if (!(!(i < 0))) goto L_38;
  return i;
  return;
}

// fn <atom:0>  args=3 vars=36 closure=0 cpool=23 bc=1844B file=widgets/src/components/section/SectionList
// args: require, module, exports
// locals: e, t, i, r, o, s, n, d, a, l, c, h, u, y, m, b, v, p, g, S, R, w, f, k, C, SectionListItem, <class_fields_init>, SectionListItem#1, SectionList, <class_fields_init>#1, SectionList#1, M, A
function {
  let A;
  let M;
  let SectionList#1;
  let SectionListItem#1;
  let C;
  let k;
  let f;
  let w;
  let R;
  let S;
  let g;
  let p;
  let v;
  let b;
  let m;
  let y;
  let u;
  let h;
  let c;
  let l;
  let a;
  let d;
  let n;
  let s;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SectionList = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "DBwKKeYdR68WbtA7");
  i = e.makeNodePrototype("layout", ["flexDirection", "column-reverse", "width", "100%"], "stUQah46dPWFf-D1");
  r = e.makeComponentPrototype(undefined, "9xXzsY1-4ekRkHce");
  o = e.makeNodePrototype("view", undefined, "voGPlqUfAi8c5p5q");
  s = e.makeNodePrototype("view", undefined, "12DTWZux6khEccol");
  n = e.makeNodePrototype("view", undefined, "-n_qcfYcDGteauxS");
  d = e.makeNodePrototype("layout", undefined, "oaGg7uXLtz1y7rTq");
  a = e.makeComponentPrototype(undefined, "RLDxz9u_xqIk3emt");
  l = require("valdi_core/src/Component");
  c = require("foundation/src/required");
  h = require("valdi_core/src/CompilerIntrinsics");
  u = require("valdi_core/src/RenderedElementTree");
  y = require("valdi_core/src/ComponentRef");
  m = require("valdi_core/src/ElementRef");
  b = require("valdi_core/src/Style");
  v = require("widgets/src/components/util/DeferredItemsRenderer");
  p = require("widgets/src/styles/gradients");
  g = require("widgets/src/styles/semanticColorsGen");
  S = require("coreutils/src/ArrayUtils");
  R = require("./StickyHeaderLayout");
  w = require("./SectionSeparator");
  f = e.valdiMainThreadCallbackDescriptor;
  k = f("widgets/src/components/section/SectionList.vmtc", function <atom:0>, 0, 7);
  C = f("widgets/src/components/section/SectionList.vmtc", function <atom:0>, 1, 1);
  let SectionListItem;
  let <class_fields_init>;
  class SectionListItem extends l.StatefulComponent { ... }
  <proto:SectionListItem>.getRootY = function <atom:0>;
  <proto:SectionListItem>.getRootHeight = function <atom:0>;
  <proto:SectionListItem>.getHeaderHeight = function <atom:0>;
  <proto:SectionListItem>.getRootBottom = function <atom:0>;
  <proto:SectionListItem>.onCreate = function <atom:0>;
  <proto:SectionListItem>.onRender = function <atom:0>;
  <proto:SectionListItem>.renderItems = function <atom:0>;
  <proto:SectionListItem>.updateSection = function <atom:0>;
  <proto:SectionListItem>.renderAnchor = function <atom:0>;
  <proto:SectionListItem>.renderHeader = function <atom:0>;
  <proto:SectionListItem>.renderBody = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SectionListItem>;
  SectionListItem = function <atom:0>;
  // close_loc <class_fields_init>
  SectionListItem#1 = function <atom:0>;
  let SectionList;
  let <class_fields_init>#1;
  class SectionList extends l.Component { ... }
  <proto:SectionList>.onCreate = function <atom:0>;
  <proto:SectionList>.onDestroy = function <atom:0>;
  <proto:SectionList>.onViewModelUpdate = function <atom:0>;
  <proto:SectionList>.onRender = function <atom:0>;
  <proto:SectionList>.onReadyToRenderNewItems = function <atom:0>;
  <proto:SectionList>.getSectionElements = function <atom:0>;
  <proto:SectionList>.updateSections = function <atom:0>;
  <proto:SectionList>.findSectionIndexAt = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:SectionList>;
  SectionList = function <atom:0>;
  // close_loc <class_fields_init>#1
  SectionList#1 = function <atom:0>;
  exports.SectionList = SectionList#1;
  M = 9;
  A = {header: new b.Style({accessibilityId: R.StickyHeaderElementId.Header, minHeight: 1, accessibilityPriority: 10}), bar: new b.Style({accessibilityId: R.StickyHeaderElementId.Backdrop, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: g.SemanticColor.Background.SUBSCREEN}), gradient: new b.Style({position: "absolute", left: 0, right: 0, bottom: -9, height: 9, background: p.linearGradient([[g.SemanticColor.Elevation.HEADER_SHADOW, 0], [g.SemanticColor.Flat.CLEAR, 1]]), ignoreParentViewport: true})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/section/SectionList
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
