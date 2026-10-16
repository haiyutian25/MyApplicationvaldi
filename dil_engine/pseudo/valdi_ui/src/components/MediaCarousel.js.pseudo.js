// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=127B file=valdi_ui/src/components/MediaCarousel
// locals: e
// closure: this
function {
  let e;
  e = this.state.width;
  if (!((undefined !== e))) goto L_7e;
  this.syncOffset(true, e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=310B file=valdi_ui/src/components/MediaCarousel
// args: e
// closure: this
function {
  if (!((e.width > 0))) goto L_135;
  if (!((e.width !== this.state.width))) goto L_135;
  this.setState({width: e.width});
  this.syncOffset(false, e.width);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=761B file=valdi_ui/src/components/MediaCarousel
// args: e
// locals: t, i
// closure: this, u
function {
  let i;
  let t;
  t = this.state.width;
  if (((undefined === t))) goto L_9d;
  if (!((0 === this.viewModel.items.length))) goto L_a0;
  return;
  i = u(Math.round((e.x / t)), this.viewModel.items.length);
  if (!((i !== this.activeIndex))) goto L_2f8;
  if (!((undefined === this.viewModel.index))) goto L_1e2;
  this.setState({index: i});
  if (!((this.viewModel.onIndexChange == null))) goto L_231;
  this.viewModel.onIndexChange;
  this.viewModel;
  goto L_280;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, i, this.viewModel.items[i]);
  if (!((undefined !== this.viewModel.index))) goto L_2f8;
  this.syncOffset(true, t);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=3 bc=314B file=valdi_ui/src/components/MediaCarousel
// locals: this, this.active_func, new.target, arguments
// closure: u, <class_fields_init>, l
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
  if (!((this.viewModel.defaultIndex == null))) goto L_7d;
  this.viewModel.defaultIndex;
  this.state = {index: u(0, this.viewModel.items.length), width: undefined};
  this.scroll = new l.ElementRef();
  this.syncUpdatedOffset = function <atom:0>;
  this.handleLayout = function <atom:0>;
  this.handleScrollEnd = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=414B file=valdi_ui/src/components/MediaCarousel
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.state.width;
  if (((undefined === e))) goto L_19d;
  if (((undefined === t))) goto L_19d;
  if (!((e.index === this.viewModel.index))) goto L_131;
  if (((e.items.length === this.viewModel.items.length))) goto L_19d;
  this.renderer.onRenderComplete(this.syncUpdatedOffset);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=7 cpool=0 bc=1491B file=valdi_ui/src/components/MediaCarousel
// locals: s, o, d, this
// closure: h, g, e, t, v, i, y
function {
  this = this;
  let d;
  let o;
  let s;
  s = this.activeIndex;
  o = h.resolveValdiUITheme();
  d = g(o);
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  if (!((0 === this.viewModel.items.length))) goto L_16e;
  goto L_1e5;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityLabel", "Media gallery, page ".concat((s + 1), " of ", this.viewModel.items.length));
  if (!((this.viewModel.radius == null))) goto L_29f;
  this.viewModel.radius;
  e.setAttributeNumber("borderRadius", o.shape.surfaceRadius);
  e.setAttributeNumber("height", this.viewModel.height);
  e.setAttributeStyle("style", v(d.root, this.viewModel.style));
  e.beginRender(i, undefined);
  e.setAttributeRef(this.scroll);
  e.setAttributeStyle("style", y.scroll);
  e.setAttributeFunction("onLayout", this.handleLayout);
  e.setAttributeFunction("onScrollEnd", this.handleScrollEnd);
  this.renderItems();
  e.endRender();
  this.renderIndicator(s, d.indicator);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=836B file=valdi_ui/src/components/MediaCarousel
// locals: t, this
// closure: e, s, o, v, y
function {
  this = this;
  let t;
  for (const t of this.viewModel.items) {
    e.beginRender(s, t.id);
    e.setAttributeNumber("height", this.viewModel.height);
    if (!((this.state.width == null))) goto L_182;
    this.state.width;
    e.setAttribute("width", "100%");
    e.beginRender(o, undefined);
    e.setAttributeString("accessibilityLabel", t.accessibilityLabel);
    e.setAttribute("src", t.src);
    e.setAttributeStyle("style", v(y.image, this.viewModel.imageStyle));
    e.endRender();
    e.endRender();
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=0 bc=859B file=valdi_ui/src/components/MediaCarousel
// args: t, i
// locals: this
// closure: e, d, v, c, n
function {
  this = this;
  if (((false === this.viewModel.showsIndicator))) goto L_35a;
  if (((this.viewModel.items.length <= 1))) goto L_35a;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", v(i, this.viewModel.indicatorStyle));
  e.beginComponent(c.PageIndicator, n, undefined, undefined);
  e.setViewModelProperty("count", this.viewModel.items.length);
  e.setViewModelProperty("dotStyle", this.viewModel.dotStyle);
  e.setViewModelProperty("index", t);
  e.setViewModelProperty("selectedDotStyle", this.viewModel.selectedDotStyle);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=213B file=valdi_ui/src/components/MediaCarousel
// locals: this
// closure: u
function {
  this = this;
  if (!((this.viewModel.index == null))) goto L_8e;
  this.viewModel.index;
  return u(this.state.index, this.viewModel.items.length);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=191B file=valdi_ui/src/components/MediaCarousel
// args: e, t
// locals: this
function {
  this = this;
  this.scroll.setAttribute("contentOffsetAnimated", e);
  this.scroll.setAttribute("contentOffsetX", (this.activeIndex * t));
  return;
}

// fn u  args=2 vars=2 closure=0 cpool=0 bc=95B file=valdi_ui/src/components/MediaCarousel
// args: e, t
function {
  if (!((0 === t))) goto L_7;
  return 0;
  return Math.max(0, Math.min(e, (t - 1)));
}

// fn v  args=2 vars=2 closure=1 cpool=0 bc=82B file=valdi_ui/src/components/MediaCarousel
// args: e, t
// closure: a
function {
  if (!((undefined === t))) goto L_7;
  return e;
  return a.Style.cachingMerge(e, t);
}

// fn g  args=1 vars=2 closure=3 cpool=0 bc=926B file=valdi_ui/src/components/MediaCarousel
// args: e
// locals: t
// closure: w, a, y
function {
  let t;
  t = w.get(e);
  if (((undefined !== t))) goto L_399;
  t = {indicator: a.Style.merge(y.indicator, new a.Style({backgroundColor: e.colors.surface, borderRadius: e.shape.pillRadius, paddingBottom: (e.spacing.small / 2), paddingLeft: e.spacing.small, paddingRight: e.spacing.small, paddingTop: (e.spacing.small / 2)})), root: a.Style.merge(y.root, new a.Style({backgroundColor: e.colors.mutedSurface}))};
  {indicator: a.Style.merge(y.indicator, new a.Style({backgroundColor: e.colors.surface, borderRadius: e.shape.pillRadius, paddingBottom: (e.spacing.small / 2), paddingLeft: e.spacing.small, paddingRight: e.spacing.small, paddingTop: (e.spacing.small / 2)})), root: a.Style.merge(y.root, new a.Style({backgroundColor: e.colors.mutedSurface}))};
  w.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=10 bc=987B file=valdi_ui/src/components/MediaCarousel
// args: require, module, exports
// locals: e, t, i, s, o, d, n, r, l, a, h, c, MediaCarousel, <class_fields_init>, MediaCarousel#1, u, v, w, g, y
function {
  u = function u;
  v = function v;
  g = function g;
  let y;
  let w;
  let MediaCarousel#1;
  let c;
  let h;
  let a;
  let l;
  let r;
  let n;
  let d;
  let o;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MediaCarousel = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "aGWv10bVsYYsZlnD");
  i = e.makeNodePrototype("scroll", undefined, "uxCVMk9KV1w7bht8");
  s = e.makeNodePrototype("view", undefined, "2AuQtnXZ3_fQEeLS");
  o = e.makeNodePrototype("image", undefined, "jJef-Kaetw9G1W7k");
  d = e.makeNodePrototype("view", undefined, "pDCnaRI1K7aHahn4");
  n = e.makeComponentPrototype(undefined, "Ld1GtRBZo8COYC6M");
  r = require("valdi_core/src/Component");
  l = require("valdi_core/src/ElementRef");
  a = require("valdi_core/src/Style");
  h = require("valdi_ui_theme/src/ValdiUITheme");
  c = require("./PageIndicator");
  let MediaCarousel;
  let <class_fields_init>;
  class MediaCarousel extends r.StatefulComponent { ... }
  <proto:MediaCarousel>.onViewModelUpdate = function <atom:0>;
  <proto:MediaCarousel>.onRender = function <atom:0>;
  <proto:MediaCarousel>.renderItems = function <atom:0>;
  <proto:MediaCarousel>.renderIndicator = function <atom:0>;
  <proto:MediaCarousel>.activeIndex = function <atom:0>;
  <proto:MediaCarousel>.syncOffset = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MediaCarousel>;
  MediaCarousel = function <atom:0>;
  // close_loc <class_fields_init>
  MediaCarousel#1 = function <atom:0>;
  exports.MediaCarousel = MediaCarousel#1;
  w = new WeakMap();
  y = {image: new a.Style({height: "100%", objectFit: "cover", width: "100%"}), indicator: new a.Style({alignItems: "center", bottom: 8, justifyContent: "center", position: "absolute", touchEnabled: false}), root: new a.Style({alignItems: "center", position: "relative", slowClipping: true, width: "100%"}), scroll: new a.Style({height: "100%", horizontal: true, pagingEnabled: true, showsHorizontalScrollIndicator: false, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/MediaCarousel
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
