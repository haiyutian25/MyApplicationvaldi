// fn <atom:0>  args=1 vars=5 closure=3 cpool=0 bc=675B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// locals: e, i, o, r
// closure: this, f, a
function {
  let r;
  let o;
  let i;
  let e;
  if (!((t == null))) goto L_15;
  t;
  goto L_36;
  if (!((undefined.x == null))) goto L_5f;
  undefined.x;
  e = this.currentScrollOffset;
  i = this.closestIndex(e);
  if (!((undefined === i))) goto L_93;
  return;
  o = this.pendingProgrammaticOffset;
  this.pendingProgrammaticOffset = undefined;
  if (!((undefined !== o))) goto L_103;
  if (!((Math.abs((e - o)) <= f))) goto L_103;
  return;
  if (!((i === this.lastSettledIndex))) goto L_12e;
  return;
  this.lastSettledIndex = i;
  if (!((i === this.controlledActiveIndex))) goto L_168;
  return;
  r = this.viewModel.onChange;
  if (!((undefined === r))) goto L_29b;
  goto L_2a2;
  // [栈深重同步 1 -> 0]
  r(i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=120B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// closure: this
function {
  this.webScrollOffset = t.x;
  this.updateWebScrollState(t.x);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=dil_widgets/src/widgets/BaseCarousel
// closure: this
function {
  this.scrollToAdjacentItems(-1);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=dil_widgets/src/widgets/BaseCarousel
// closure: this
function {
  this.scrollToAdjacentItems(1);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=4 bc=173B file=dil_widgets/src/widgets/BaseCarousel
// locals: this, this.active_func, new.target, arguments
// closure: f, a, <class_fields_init>
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
  this.state = {canScrollNext: false, canScrollPrevious: false};
  this.itemOffsets = [];
  this.staticContentWidth = 0;
  this.webScrollOffset = 0;
  this.handleScrollEnd = function <atom:0>;
  this.handleWebScroll = function <atom:0>;
  this.handlePreviousItems = function <atom:0>;
  this.handleNextItems = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=56B file=dil_widgets/src/widgets/BaseCarousel
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["onRender"].call(this);
  this.renderWebScrollControls();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=124B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// locals: this
// closure: w
function {
  this = this;
  if (!((undefined !== t))) goto L_7b;
  if (!((w(t.activeIndex) !== this.controlledActiveIndex))) goto L_7b;
  this.scrollToControlledIndex(true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=dil_widgets/src/widgets/BaseCarousel
function {
  return "row";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=dil_widgets/src/widgets/BaseCarousel
function {
  return "row";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=76B file=dil_widgets/src/widgets/BaseCarousel
// locals: this
function {
  this = this;
  if (!((this.viewModel.gap == null))) goto L_4b;
  this.viewModel.gap;
  return 4;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=1087B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// locals: e, i, o, e#1, this
// closure: h
function {
  this = this;
  let o;
  let i;
  let e;
  if (!(this.showsWebScrollControls)) goto L_61;
  t.onScroll = this.handleWebScroll;
  this.handleWebScroll;
  if (!(this.tracksActiveIndex)) goto L_b7;
  t.onScrollEnd = this.handleScrollEnd;
  this.handleScrollEnd;
  e = this.viewModel.containerGutter;
  if (!((true === this.viewModel.extendViewportIntoGutter))) goto L_2df;
  if (!(("horizontal" === h.resolveDILFlexContainerScrollAxis(this.getFlexDirection(), this.viewModel.style)))) goto L_2df;
  if (!((true === this.viewModel.bleed))) goto L_2df;
  if (!(("scrollable-margin" === this.viewModel.scrollableContentGutterMode))) goto L_2df;
  if (!((t.width == null))) goto L_2d5;
  t.width;
  if (!(("100%" === this.getDefaultWidth()))) goto L_2df;
  if (!(!(undefined !== e))) goto L_2e3;
  return;
  i = h.resolveNumericContainerGutterValue(e.left);
  o = h.resolveNumericContainerGutterValue(e.right);
  if (!((undefined !== i))) goto L_43e;
  if (!((undefined !== o))) goto L_43e;
  if (!((i >= 0))) goto L_43e;
  if (!((o >= 0))) goto L_43e;
  let e#1;
  e#1 = Math.max(i, o);
  if (!((t.viewportExtensionLeft == null))) goto L_407;
  t.viewportExtensionLeft;
  t.viewportExtensionLeft = e#1;
  e#1;
  if (!((t.viewportExtensionRight == null))) goto L_43d;
  t.viewportExtensionRight;
  t.viewportExtensionRight = e#1;
  e#1;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=149B file=dil_widgets/src/widgets/BaseCarousel
// args: t, <atom:0>
// locals: e
function {
  e = <to_object>(<atom:0>).frame;
  <to_object>(<atom:0>);
  return Math.max(t, (e.x + e.width));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=112B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// closure: s
function {
  return Math.abs((t.frame.x - s));   // tail call
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=2 bc=986B file=dil_widgets/src/widgets/BaseCarousel
// args: t, e
// locals: i, o, r, s, this
function {
  this = this;
  let s;
  let r;
  let o;
  let i;
  this.fitVisibleItemsToViewport(t);
  if (!((this.getScrollElement() == null))) goto L_65;
  this.getScrollElement();
  goto L_a7;
  if (!((undefined.frame.width == null))) goto L_ad;
  undefined.frame.width;
  i = 0;
  o = t.children.reduce(function <atom:0>, i);
  if (!((o > i))) goto L_131;
  goto L_136;
  // [栈深重同步 1 -> 0]
  r = "100%";
  if (!((t.getAttribute("minWidth") !== r))) goto L_196;
  t.setAttribute("minWidth", r);
  if (!(!this.tracksActiveIndex)) goto L_1e4;
  if (!(!this.showsWebScrollControls)) goto L_1e4;
  return;
  if (!((t.children[0] == null))) goto L_210;
  t.children[0];
  goto L_252;
  s = undefined.frame.x;
  if (!((undefined === s))) goto L_261;
  goto L_2a9;
  // [栈深重同步 2 -> 1]
  this.itemOffsets = t.children.map(function <atom:0>);
  this.staticContentWidth = e;
  if (!(this.tracksActiveIndex)) goto L_38f;
  this.scrollToControlledIndex(false);
  if (!((undefined === this.lastSettledIndex))) goto L_38f;
  this.lastSettledIndex = this.closestIndex(this.currentScrollOffset);
  this.closestIndex(this.currentScrollOffset);
  this.updateWebScrollState(this.webScrollOffset);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=411B file=dil_widgets/src/widgets/BaseCarousel
// locals: e, t
// closure: t, i
function {
  let e;
  for (const e of t.children) {
    let t;
    if (!((e.emittingComponent == null))) goto L_59;
    e.emittingComponent;
    goto L_7a;
    t = undefined.viewModel;
    if (!((t == null))) goto L_87;
    t;
    goto L_a8;
    if (!((undefined !== undefined.carouselFittedWidth))) goto L_190;
    if (!((true !== t.carouselHasAuthoredWidth))) goto L_10a;
    e.setAttribute("width", i);
    if (!((true !== t.carouselHasAuthoredWidth))) goto L_190;
    if (!((true !== t.carouselHasAuthoredMinWidth))) goto L_190;
    e.setAttribute("minWidth", i);
  }
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=415B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// locals: e, i, this
// closure: S
function {
  this = this;
  let i;
  let e;
  if (!((this.getScrollElement() == null))) goto L_35;
  this.getScrollElement();
  goto L_77;
  e = undefined.frame.width;
  if (((undefined === e))) goto L_b7;
  if ((!Number.isFinite(e))) goto L_b7;
  if (!((e <= 0))) goto L_ba;
  return;
  i = S(e, this.getGap(), this.viewModel.visibleItems, t.children.length);
  if (!((undefined !== i))) goto L_19e;
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=8 cpool=0 bc=1738B file=dil_widgets/src/widgets/BaseCarousel
// locals: s, n, this
// closure: v, t, e, I, i, u, o, r
function {
  this = this;
  let n;
  let s;
  s = this.state.webScrollFrame;
  if ((!this.showsWebScrollControls)) goto L_78;
  if (!((undefined === s))) goto L_7b;
  return;
  n = (s.y + ((s.height - v) / 2));
  if (!(this.state.canScrollPrevious)) goto L_3b7;
  t.beginRender(e, undefined);
  t.setAttributeStyle("style", I.webScrollControl);
  t.setAttributeNumber("left", (s.x - 16));
  t.setAttributeFunction("onTap", this.handlePreviousItems);
  t.setAttributeNumber("top", n);
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", I.webScrollControlIcon);
  t.setAttribute("src", u.resolveIconAsset("chevron-left"));
  t.setAttribute("touchEnabled", false);
  t.endRender();
  t.endRender();
  if (!(this.state.canScrollNext)) goto L_6c9;
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", I.webScrollControl);
  t.setAttributeNumber("left", ((s.x + s.width) - 16));
  t.setAttributeFunction("onTap", this.handleNextItems);
  t.setAttributeNumber("top", n);
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", I.webScrollControlIcon);
  t.setAttribute("src", u.resolveIconAsset("chevron-right"));
  t.setAttribute("touchEnabled", false);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=140B file=dil_widgets/src/widgets/BaseCarousel
// locals: t, this
// closure: w
function {
  this = this;
  let t;
  t = w(this.viewModel.activeIndex);
  if (((undefined === t))) goto L_84;
  if (((t < 0))) goto L_84;
  if (!(!(t >= this.itemOffsets.length))) goto L_8b;
  return t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=221B file=dil_widgets/src/widgets/BaseCarousel
// locals: this
function {
  this = this;
  if (((undefined !== this.viewModel.activeIndex))) goto L_dc;
  if (((undefined !== this.viewModel.onChange))) goto L_dc;
  return (undefined !== this.viewModel.onChangeAction);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=149B file=dil_widgets/src/widgets/BaseCarousel
// locals: this
// closure: c
function {
  this = this;
  if (!(c.Device.isWeb())) goto L_94;
  return (false !== this.viewModel.showArrows);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=156B file=dil_widgets/src/widgets/BaseCarousel
// locals: t, this
function {
  this = this;
  let t;
  if (!((this.getScrollElement() == null))) goto L_32;
  this.getScrollElement();
  goto L_5b;
  t = undefined.getAttribute("contentOffsetX");
  if (!(("number" == typeof t))) goto L_9a;
  if (!(Number.isFinite(t))) goto L_9a;
  return t;
  return 0;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=262B file=dil_widgets/src/widgets/BaseCarousel
// locals: t, this
function {
  this = this;
  let t;
  if (!((this.getScrollElement() == null))) goto L_32;
  this.getScrollElement();
  goto L_74;
  t = undefined.frame.width;
  if (!((undefined !== t))) goto L_105;
  if (!(Number.isFinite(t))) goto L_105;
  if (!(!(t <= 0))) goto L_105;
  return Math.max(0, (this.staticContentWidth - t));   // tail call
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=147B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  e = this.itemOffsets[t];
  if (!((undefined === e))) goto L_35;
  return;
  i = this.maxScrollOffset;
  if (!((undefined === i))) goto L_63;
  return e;
  return Math.min(e, i);
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=94B file=dil_widgets/src/widgets/BaseCarousel
// closure: o, t, i
function {
  o.setAttribute("contentOffsetAnimated", t);
  o.setAttribute("contentOffsetX", i);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=1 bc=344B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// locals: e, i, o, this
function {
  this = this;
  let o;
  let i;
  let e;
  e = this.controlledActiveIndex;
  if (!((undefined === e))) goto L_36;
  return;
  i = this.offsetForIndex(e);
  if (!((undefined === i))) goto L_67;
  return;
  this.lastSettledIndex = e;
  if (!((i === this.currentScrollOffset))) goto L_9d;
  return;
  this.pendingProgrammaticOffset = i;
  o = this.getScrollElement();
  if (!((undefined !== o))) goto L_121;
  this.renderer.batchUpdates(function <atom:0>);
  this.webScrollOffset = i;
  this.updateWebScrollState(i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// closure: this, f
function {
  return (t > (this.webScrollOffset + f));
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=95B file=dil_widgets/src/widgets/BaseCarousel
// closure: r, o
function {
  r.setAttribute("contentOffsetAnimated", true);
  r.setAttribute("contentOffsetX", o);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=2 cpool=2 bc=450B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// locals: e, i, o, r, this
// closure: f, g
function {
  this = this;
  let r;
  let o;
  let i;
  let e;
  if (!((1 === t))) goto L_5f;
  goto L_a7;
  // [栈深重同步 1 -> 0]
  e = g(this.itemOffsets, this.webScrollOffset);
  if (!((undefined === e))) goto L_b0;
  return;
  i = this.maxScrollOffset;
  if (!((undefined === i))) goto L_e0;
  goto L_10f;
  // [栈深重同步 1 -> 0]
  o = Math.min(e, i);
  r = this.getScrollElement();
  if (!((undefined !== r))) goto L_189;
  this.renderer.batchUpdates(function <atom:0>);
  this.webScrollOffset = o;
  this.updateWebScrollState(o);
  return;
}

// fn <atom:0>  args=1 vars=8 closure=2 cpool=0 bc=1323B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// locals: e, i, o, r, s, n, this
// closure: b, f
function {
  this = this;
  let n;
  let s;
  let r;
  let o;
  let i;
  let e;
  if (!(!this.showsWebScrollControls)) goto L_3c;
  return;
  if (!((this.getScrollElement() == null))) goto L_6a;
  this.getScrollElement();
  goto L_8b;
  e = undefined.frame;
  i = this.maxScrollOffset;
  if (((undefined === e))) goto L_1bd;
  if (((undefined === i))) goto L_1bd;
  if ((!Number.isFinite(e.x))) goto L_1bd;
  if ((!Number.isFinite(e.y))) goto L_1bd;
  if (!(!Number.isFinite(e.height))) goto L_1c0;
  return;
  o = (e.width >= b);
  if (!(o)) goto L_1f5;
  r = (t > f);
  if (!(o)) goto L_206;
  s = (t < (i - f));
  n = this.state.webScrollFrame;
  if (!((r === this.state.canScrollPrevious))) goto L_442;
  if (!((s === this.state.canScrollNext))) goto L_442;
  if (!((n == null))) goto L_2f7;
  n;
  goto L_318;
  if (!((undefined.x === e.x))) goto L_442;
  if (!((n == null))) goto L_34f;
  n;
  goto L_370;
  if (!((undefined.y === e.y))) goto L_442;
  if (!((n == null))) goto L_3a7;
  n;
  goto L_3c8;
  if (!((undefined.width === e.width))) goto L_442;
  if (!((n == null))) goto L_3fc;
  n;
  goto L_41d;
  if (((undefined.height === e.height))) goto L_52a;
  this.setState({canScrollNext: s, canScrollPrevious: r, webScrollFrame: {height: e.height, width: e.width, x: e.x, y: e.y}});
  return;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=0 bc=208B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// locals: e, i, o, r, s, this
function {
  this = this;
  let i;
  let e;
  e = undefined;
  i = (1 / 0);
  let o;
  o = 0;
  if (!((o < this.itemOffsets.length))) goto L_cc;
  let s;
  let r;
  r = this.itemOffsets[o];
  if (((undefined === r))) goto L_c1;
  s = Math.abs((r - t));
  if (!((s < i))) goto L_c0;
  i = s;
  s;
  e = o;
  o;
  o = <o_new>;
  (o++);
  goto L_14;
  return e;
}

// fn S  args=4 vars=7 closure=3 cpool=0 bc=312B file=dil_widgets/src/widgets/BaseCarousel
// args: t, e, i, o
// locals: r, s, l
// closure: x, n, m
function {
  let l;
  let s;
  let r;
  if ((("number" != typeof i))) goto L_47;
  if ((!Number.isFinite(i))) goto L_47;
  if (!((i < 1))) goto L_4a;
  return;
  r = Math.floor(i);
  s = (o > r);
  if (!((e == null))) goto L_a8;
  e;
  if (!((n.resolveOptionalDILSpacing(4) == null))) goto L_af;
  n.resolveOptionalDILSpacing(4);
  if (!((x(0) == null))) goto L_b6;
  x(0);
  if (!(s)) goto L_c0;
  goto L_c5;
  // [栈深重同步 3 -> 2]
  if (!(s)) goto L_d3;
  goto L_d4;
  // [栈深重同步 2 -> 1]
  l = (((t - (0 * (r - 1))) - 0) / r);
  return Math.max(0, (Math.round((1000 * l)) / 1000));   // tail call
}

// fn x  args=1 vars=3 closure=0 cpool=0 bc=322B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// locals: e, i
function {
  let i;
  let e;
  if (!(("number" == typeof t))) goto L_40;
  if (!(Number.isFinite(t))) goto L_3e;
  return t;
  return undefined;
  if (!(t.trim().endsWith("px"))) goto L_de;
  goto L_103;
  // [栈深重同步 1 -> 0]
  e = t.trim();
  i = Number(e);
  if (!(Number.isFinite(i))) goto L_140;
  return i;
  return undefined;
}

// fn g  args=2 vars=4 closure=1 cpool=0 bc=57B file=dil_widgets/src/widgets/BaseCarousel
// args: t, e
// locals: i, o
// closure: f
function {
  let i;
  i = (t.length - 1);
  if (!((i >= 0))) goto L_38;
  let o;
  o = t[i];
  if (!((undefined !== o))) goto L_2e;
  if (!((o < (e - f)))) goto L_2e;
  return o;
  i = <i_new>;
  (i--);
  goto L_8;
  return;
}

// fn w  args=1 vars=2 closure=1 cpool=0 bc=148B file=dil_widgets/src/widgets/BaseCarousel
// args: t
// locals: e
// closure: l
function {
  let e;
  if (!((t instanceof l.DILWidgetBinding))) goto L_52;
  goto L_53;
  // [栈深重同步 1 -> 0]
  e = t;
  if (!(("number" == typeof e))) goto L_92;
  if (!(Number.isInteger(e))) goto L_92;
  return e;
  return undefined;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=26 bc=1183B file=dil_widgets/src/widgets/BaseCarousel
// args: require, module, exports
// locals: t, e, i, o, r, s, n, l, c, d, h, a, u, f, b, v, BaseCarousel, <class_fields_init>, BaseCarousel#1, m, S, x, g, w, I
function {
  S = function S;
  x = function x;
  g = function g;
  w = function w;
  let I;
  let m;
  let BaseCarousel#1;
  let v;
  let b;
  let f;
  let u;
  let a;
  let h;
  let d;
  let c;
  let l;
  let n;
  let s;
  let r;
  let o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BaseCarousel = undefined;
  exports.resolveCarouselItemWidth = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", ["accessibilityCategory", "button", "accessibilityLabel", "Previous carousel items"], "cZ9j5E2KxPQ2OJy1");
  i = t.makeNodePrototype("image", ["tint", "color-text-secondary-outline"], "LOngPZZ3lFhYjD9X");
  o = t.makeNodePrototype("view", ["accessibilityCategory", "button", "accessibilityLabel", "Next carousel items"], "DCnEIcpm_ApnU7cG");
  r = t.makeNodePrototype("image", ["tint", "color-text-secondary-outline"], "EKXkeYwbX_bQNB-O");
  s = require("dil_core/src/DILComponent");
  n = require("dil_core/src/layout/DILSpacing");
  l = require("dil_cel/src/WidgetBinding");
  c = require("valdi_core/src/Device");
  d = require("valdi_core/src/Style");
  h = require("./DILFlexContainer");
  a = require("./DILWidgetBindingActions");
  u = require("./Icon");
  f = 0.5;
  b = 576;
  v = 32;
  let BaseCarousel;
  let <class_fields_init>;
  class BaseCarousel extends h.DILFlexContainer { ... }
  <proto:BaseCarousel>.onRender = function <atom:0>;
  <proto:BaseCarousel>.onViewModelUpdate = function <atom:0>;
  function <atom:0>.resolveFlexDirection = function <atom:0>;
  <proto:BaseCarousel>.getFlexDirection = function <atom:0>;
  <proto:BaseCarousel>.getGap = function <atom:0>;
  <proto:BaseCarousel>.applyAdditionalScrollContainerAttributes = function <atom:0>;
  <proto:BaseCarousel>.onHorizontalScrollContentLayoutComplete = function <atom:0>;
  <proto:BaseCarousel>.fitVisibleItemsToViewport = function <atom:0>;
  <proto:BaseCarousel>.renderWebScrollControls = function <atom:0>;
  <proto:BaseCarousel>.controlledActiveIndex = function <atom:0>;
  <proto:BaseCarousel>.tracksActiveIndex = function <atom:0>;
  <proto:BaseCarousel>.showsWebScrollControls = function <atom:0>;
  <proto:BaseCarousel>.currentScrollOffset = function <atom:0>;
  <proto:BaseCarousel>.maxScrollOffset = function <atom:0>;
  <proto:BaseCarousel>.offsetForIndex = function <atom:0>;
  <proto:BaseCarousel>.scrollToControlledIndex = function <atom:0>;
  <proto:BaseCarousel>.scrollToAdjacentItems = function <atom:0>;
  <proto:BaseCarousel>.updateWebScrollState = function <atom:0>;
  <proto:BaseCarousel>.closestIndex = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BaseCarousel>;
  BaseCarousel = function <atom:0>;
  // close_loc <class_fields_init>
  BaseCarousel#1 = function <atom:0>;
  exports.BaseCarousel = BaseCarousel#1;
  BaseCarousel#1.dilV2Properties = ["activeIndex", "ariaLabel", "flush", "gap", "onChange", "showArrows", "snap", "snapAlign", "visibleItems"];
  // append([], 0, s.DIL_COMPONENT_PROPERTIES)
  // append([], s.DIL_COMPONENT_PROPERTIES, h.DIL_FLEX_CONTAINER_PROPERTIES)
  [][h.DIL_FLEX_CONTAINER_PROPERTIES] = "activeIndex";
  [][("activeIndex" ++)] = "onChangeAction";
  ("onChangeAction" ++);
  BaseCarousel#1.properties = [];
  m = 0.1;
  exports.resolveCarouselItemWidth = S;
  I = {webScrollControl: new d.Style({alignItems: "center", backgroundColor: "color-surface-elevated", borderColor: "color-border-secondary-outline", borderRadius: "100%", borderWidth: 1, boxShadow: "0 1 4 alpha-20", height: v, justifyContent: "center", position: "absolute", width: v, zIndex: 1}), webScrollControlIcon: new d.Style({flexShrink: 0, height: 16, objectFit: "contain", width: 16})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/BaseCarousel
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
