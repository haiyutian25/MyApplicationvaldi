// fn <atom:0>  args=0 vars=4 closure=3 cpool=0 bc=153B file=widgets/src/components/subscreen/SubscreenSections
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, m, u
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
  this.indexViewHandler = new m.IndexViewHandler();
  this.scrollViewHandler = new u.ScrollViewHandler();
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=292B file=widgets/src/components/subscreen/SubscreenSections
// locals: t
// closure: S, r, e, P, o, h
function {
  let t;
  t = S.lookupSymbolForString(r.key);
  e.beginComponent(P.IndexViewAnchor, o, undefined, undefined);
  e.setViewModelProperty("handler", h);
  e.setViewModelProperty("symbol", t);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=76B file=widgets/src/components/subscreen/SubscreenSections
// closure: r
function {
  if (!(r.onRenderHeader)) goto L_4b;
  r.onRenderHeader();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=2 bc=104B file=widgets/src/components/subscreen/SubscreenSections
// args: r
// closure: S, e, P, o, h
function {
  return {key: r.key, onRenderAnchor: function <atom:0>, onRenderHeader: function <atom:0>, onRenderBody: r.onRenderBody};
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=46B file=widgets/src/components/subscreen/SubscreenSections
// closure: e, this
function {
  e.renderNamedSlot("header", this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=260B file=widgets/src/components/subscreen/SubscreenSections
// closure: e, this, C, t, B, q
function {
  e.beginComponent(C.SubscreenHeader, t, undefined, undefined);
  e.setViewModelProperty("packing", B);
  e.setViewModelProperty("disableInsets", !q);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=672B file=widgets/src/components/subscreen/SubscreenSections
// closure: e, n, v, y, i, I, h, u, U
function {
  e.beginRender(n, undefined);
  e.setAttributeNumber("top", v.Subscreen.floatingGutter);
  e.setAttributeNumber("bottom", v.Subscreen.floatingGutter);
  e.setAttributeNumber("right", 9);
  e.beginComponent(y.IndexView, i, undefined, undefined);
  e.setViewModelProperty("symbols", I);
  e.setViewModelProperty("indexViewHandler", h);
  e.setViewModelProperty("scrollViewHandler", u);
  e.setViewModelProperty("extraOffsetY", U);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=1 bc=91B file=widgets/src/components/subscreen/SubscreenSections
// closure: e, n, v, y, i, I, h, u, U, w, k, this
function {
  w.when(k, function <atom:0>);
  e.renderNamedSlot("floating", this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=17 cpool=0 bc=1047B file=widgets/src/components/subscreen/SubscreenSections
// closure: e, l, G, this, b, c, m, u, f, O, _, F, z, $, p, a, Y
function {
  e.beginRender(l, undefined);
  e.setAttributeNumber("paddingRight", G);
  if (!((undefined === this.viewModel.subscreenBodyOverrideRenderFunction))) goto L_324;
  e.beginComponent(b.SectionList, c, undefined, undefined);
  e.setViewModelProperty("sections", m);
  e.setViewModelProperty("scrollViewHandler", u);
  e.setViewModelProperty("stickyHeaders", f);
  e.setViewModelProperty("stickyHeadersBackgroundColor", O);
  e.setViewModelProperty("stickyCover", _);
  e.setViewModelProperty("stickySides", G);
  e.setViewModelProperty("stickyFade", F);
  e.setViewModelProperty("initialMaxItemsCount", z);
  e.setViewModelProperty("maxItemsCountIncrement", $);
  e.setViewModelProperty("callOnScrollOnMainThread", (true === p.callOnScrollOnMainThread));
  goto L_36a;
  // [栈深重同步 1 -> 0]
  this.viewModel.subscreenBodyOverrideRenderFunction();
  e.endRender();
  e.beginRender(a, undefined);
  e.setAttributeNumber("height", Y);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=22 cpool=1 bc=308B file=widgets/src/components/subscreen/SubscreenSections
// closure: e, l, G, this, b, c, m, u, f, O, _, F, z, $, p, a, Y, M, s, T, A, D
function {
  e.beginComponent(M.SubscreenContent, s, undefined, undefined);
  e.setViewModelProperty("disableInsets", !T);
  e.setViewModelProperty("paddingTop", A);
  e.setViewModelProperty("paddingBottom", D);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=26 cpool=1 bc=307B file=widgets/src/components/subscreen/SubscreenSections
// closure: e, l, G, this, b, c, m, u, f, O, _, F, z, $, p, a, Y, M, s, T, A, D, g, d, ee, oe
function {
  e.beginComponent(g.PullToRefresh, d, undefined, undefined);
  e.setViewModelProperty("scrollViewHandler", u);
  e.setViewModelProperty("onPullToRefresh", ee);
  e.setViewModelProperty("isLoading", oe);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=36 closure=22 cpool=4 bc=2808B file=widgets/src/components/subscreen/SubscreenSections
// locals: p, m, u, h, k, I, H, R, f, B, O, q, T, A, D, E, N, F, _, U, G, X, L, K, W, Y, Z, J, j, Q, z, $, ee, oe, re, this
// closure: S, e, P, o, C, t, n, v, y, i, w, l, b, c, a, M, s, g, d, V, x, r
function {
  this = this;
  let re;
  let oe;
  let ee;
  let $;
  let z;
  let Q;
  let j;
  let J;
  let Z;
  let Y;
  let W;
  let K;
  let L;
  let X;
  let G;
  let U;
  let _;
  let F;
  let N;
  let E;
  let D;
  let A;
  let T;
  let q;
  let O;
  let B;
  let f;
  let R;
  let H;
  let I;
  let k;
  let h;
  let u;
  let m;
  let p;
  if (!((this.viewModel == null))) goto L_95;
  this.viewModel;
  p = {};
  m = p.sections;
  if (!((p.scrollViewHandler == null))) goto L_107;
  p.scrollViewHandler;
  u = this.scrollViewHandler;
  if (!((p.indexViewHandler == null))) goto L_154;
  p.indexViewHandler;
  h = this.indexViewHandler;
  if (!((p.indexViewEnabled == null))) goto L_180;
  p.indexViewEnabled;
  k = false;
  if (!((p.indexViewSymbols == null))) goto L_1f3;
  p.indexViewSymbols;
  I = [V.IndexViewSymbols.error];
  if (!((p.indexViewUsingSectionKeys == null))) goto L_220;
  p.indexViewUsingSectionKeys;
  H = false;
  if (!((p.headerStyling == null))) goto L_250;
  p.headerStyling;
  R = "sticky";
  f = ("sticky" === R);
  if (!(f)) goto L_269;
  goto L_26e;
  // [栈深重同步 1 -> 0]
  B = "condensed";
  O = p.headerBackgroundColor;
  if (!((p.headerInsets == null))) goto L_2c1;
  p.headerInsets;
  q = true;
  if (!((p.contentInsets == null))) goto L_2ee;
  p.contentInsets;
  T = true;
  A = p.contentPaddingTop;
  D = p.contentPaddingBottom;
  E = p.backgroundColor;
  N = p.backgroundOpacity;
  F = v.Subscreen.fadeDistance;
  if (!(T)) goto L_41b;
  goto L_41c;
  // [栈深重同步 1 -> 0]
  _ = undefined;
  if (!(T)) goto L_46b;
  goto L_46c;
  // [栈深重同步 1 -> 0]
  U = undefined;
  if (!(k)) goto L_478;
  goto L_479;
  // [栈深重同步 1 -> 0]
  G = 0;
  if (!((p.scrollViewDismissKeyboardOnDrag == null))) goto L_4a6;
  p.scrollViewDismissKeyboardOnDrag;
  X = true;
  if (!((p.scrollViewShowsScrollIndicator == null))) goto L_4d3;
  p.scrollViewShowsScrollIndicator;
  L = false;
  K = p.scrollViewBouncesFromDragAtStart;
  W = p.scrollViewBouncesFromDragAtEnd;
  if (!((p.scrollViewBottomOverscroll == null))) goto L_54b;
  p.scrollViewBottomOverscroll;
  Y = 0;
  Z = p.scrollViewAccessibilityId;
  J = p.scrollViewViewportExtension;
  j = p.scrollBarHandler;
  Q = p.scrollBarCenterOffset;
  z = p.initialMaxItemsCount;
  $ = p.maxItemsCountIncrement;
  ee = p.onPullToRefresh;
  oe = p.isLoading;
  if (!((p.scrollEnabled == null))) goto L_6a8;
  p.scrollEnabled;
  re = true;
  if (!(k)) goto L_6e5;
  if (!(H)) goto L_6e5;
  m = m.map(function <atom:0>);
  m.map(function <atom:0>);
  e.beginComponent(v.Subscreen, r, undefined, undefined);
  e.setViewModelProperty("scrollViewHandler", u);
  e.setViewModelProperty("headerStyling", R);
  e.setViewModelProperty("headerBackgroundColor", O);
  e.setViewModelProperty("scrollViewDismissKeyboardOnDrag", X);
  e.setViewModelProperty("scrollViewShowsScrollIndicator", L);
  e.setViewModelProperty("scrollViewBouncesFromDragAtStart", K);
  e.setViewModelProperty("scrollViewBouncesFromDragAtEnd", W);
  e.setViewModelProperty("scrollViewAccessibilityId", Z);
  e.setViewModelProperty("scrollViewViewportExtension", J);
  e.setViewModelProperty("backgroundColor", E);
  e.setViewModelProperty("backgroundOpacity", N);
  e.setViewModelProperty("scrollBarHandler", j);
  e.setViewModelProperty("scrollBarCenterOffset", Q);
  e.setViewModelProperty("scrollEnabled", re);
  e.setViewModelProperty("themingEnabled", this.viewModel.themingEnabled);
  e.setNamedSlot("header", function <atom:0>);
  e.setNamedSlot("floating", function <atom:0>);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=32 closure=0 cpool=2 bc=891B file=widgets/src/components/subscreen/SubscreenSections
// args: require, module, exports
// locals: e, o, r, t, n, i, d, s, l, c, a, p, w, y, m, V, u, b, P, S, g, v, M, C, h, x, SubscreenSections, <class_fields_init>, SubscreenSections#1
function {
  let SubscreenSections#1;
  let x;
  let h;
  let C;
  let M;
  let v;
  let g;
  let S;
  let P;
  let b;
  let u;
  let V;
  let m;
  let y;
  let w;
  let p;
  let a;
  let c;
  let l;
  let s;
  let d;
  let i;
  let n;
  let t;
  let r;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscreenSections = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "Gd81hr_GwC0pOGwe");
  r = e.makeComponentPrototype(undefined, "5e-TqPntMl9iclyD");
  t = e.makeComponentPrototype(undefined, "pY-JlYhaOfmRpMQF");
  n = e.makeNodePrototype("layout", ["position", "absolute"], "Or9bgUCWexHgnMI9");
  i = e.makeComponentPrototype(undefined, "RbdTsvbXFXCHbtvv");
  d = e.makeComponentPrototype(undefined, "fB1Cu01BPaEWsvAX");
  s = e.makeComponentPrototype(undefined, "Pa7D_CpDvZbI8_TG");
  l = e.makeNodePrototype("layout", undefined, "SXqfNKZyUVD9Vznb");
  c = e.makeComponentPrototype(undefined, "iieTSXQJ5SM6omnS");
  a = e.makeNodePrototype("layout", undefined, "IWLdD8n87qY3-Oly");
  p = require("valdi_core/src/Component");
  w = require("valdi_core/src/utils/When");
  y = require("widgets/src/components/indexview/IndexView");
  m = require("widgets/src/components/indexview/IndexViewHandler");
  V = require("widgets/src/components/indexview/IndexViewSymbols");
  u = require("widgets/src/components/scroll/ScrollViewHandler");
  b = require("widgets/src/components/section/SectionList");
  P = require("../indexview/IndexViewAnchor");
  S = require("../indexview/utils/lookupSymbolForString");
  g = require("../refresh/PullToRefresh");
  v = require("./Subscreen");
  M = require("./SubscreenContent");
  C = require("./SubscreenHeader");
  h = 9;
  x = 20;
  let SubscreenSections;
  let <class_fields_init>;
  class SubscreenSections extends p.Component { ... }
  <proto:SubscreenSections>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscreenSections>;
  SubscreenSections = function <atom:0>;
  // close_loc <class_fields_init>
  SubscreenSections#1 = function <atom:0>;
  exports.SubscreenSections = SubscreenSections#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/subscreen/SubscreenSections
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
