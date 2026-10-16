// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=218B file=widgets/src/components/subscreen/SubscreenTabs
// args: e, o
// closure: this
function {
  if (!((1 === o))) goto L_d9;
  if (!((e !== this.state.currentTabIndex))) goto L_d9;
  this.setState({currentTabIndex: e});
  if (!((this.viewModel.onTabChanged == null))) goto L_d5;
  this.viewModel.onTabChanged;
  this.viewModel;
  goto L_d9;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=47B file=widgets/src/components/subscreen/SubscreenTabs
// closure: this
function {
  this.setState({activeScrollBarHandler: undefined});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=173B file=widgets/src/components/subscreen/SubscreenTabs
// args: e
// locals: o, t
// closure: this
function {
  let o;
  o = this.viewModel.tabsItemsArray;
  if (!((e < o.length))) goto L_ac;
  let t;
  t = o[e];
  this.setState({activeScrollBarHandler: t.scrollBarHandler});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=3 bc=287B file=widgets/src/components/subscreen/SubscreenTabs
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, p, l
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
  if ((this.viewModel.tabsItemsInitialIndex)) goto L_7b;
  this.state = {currentTabIndex: 0};
  this.tabsCoordinator = new p.TabsCoordinator();
  this.scrollViewHandler = new l.ScrollViewHandler();
  this.onItemFocusChanged = function <atom:0>;
  this.onUpdateTabIndex = function <atom:0>;
  this.onUpdateTabNav = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=82B file=widgets/src/components/subscreen/SubscreenTabs
// locals: this
function {
  this = this;
  if (!((this.viewModel.onCreated == null))) goto L_4e;
  this.viewModel.onCreated;
  this.viewModel;
  goto L_51;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=21 cpool=0 bc=1179B file=widgets/src/components/subscreen/SubscreenTabs
// closure: e, this, r, x, u, n, G, p, S, H, y, C, V, P, g, M, v, _, j, J, d
function {
  e.renderNamedSlot("header", this);
  e.beginRender(r, undefined);
  e.setAttributeNumber("marginRight", x);
  e.setAttributeNumber("marginLeft", x);
  e.beginComponent(u.TabsHeader, n, undefined, undefined);
  e.setViewModelProperty("isHidden", G);
  e.setViewModelProperty("tabsItemsArray", p);
  e.setViewModelProperty("tabsItemsInitialIndex", S);
  e.setViewModelProperty("tabsCoordinator", H);
  e.setViewModelProperty("tabsColumnsFixed", y);
  e.setViewModelProperty("underlineHeight", C);
  e.setViewModelProperty("underlineColor", V);
  e.setViewModelProperty("bottomRulerHeight", P);
  e.setViewModelProperty("bottomRulerColor", g);
  e.setViewModelProperty("unfocusedOpacity", M);
  e.setViewModelProperty("unfocusedScale", v);
  e.setViewModelProperty("horizontalScrollEnabled", _);
  e.setViewModelProperty("horizontalScrollBouncesFromDragAtStart", j);
  e.setViewModelProperty("horizontalScrollBouncesFromDragAtEnd", J);
  e.setViewModelProperty("onItemFocusChanged", this.onItemFocusChanged);
  e.setViewModelProperty("onCurrentTabTapped", d.onCurrentTabTapped);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=26 cpool=1 bc=308B file=widgets/src/components/subscreen/SubscreenTabs
// closure: e, this, r, x, u, n, G, p, S, H, y, C, V, P, g, M, v, _, j, J, d, w, t, B, A, U
function {
  e.beginComponent(w.SubscreenHeader, t, undefined, undefined);
  e.setViewModelProperty("packing", B);
  e.setViewModelProperty("disableInsets", !A);
  e.setViewModelProperty("sidePadding", U);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=409B file=widgets/src/components/subscreen/SubscreenTabs
// closure: e, b, a, H, T, I, K, L, X
function {
  e.beginComponent(b.TabsContent, a, undefined, undefined);
  e.setViewModelProperty("tabsCoordinator", H);
  e.setViewModelProperty("tabsContentLoading", T);
  e.setViewModelProperty("scrollViewHandler", I);
  e.setViewModelProperty("horizontalScrollEnabled", K);
  e.setViewModelProperty("horizontalScrollBouncesFromDragAtStart", L);
  e.setViewModelProperty("horizontalScrollBouncesFromDragAtEnd", X);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=1 bc=210B file=widgets/src/components/subscreen/SubscreenTabs
// closure: e, b, a, H, T, I, K, L, X, m, i
function {
  e.beginComponent(m.SubscreenContent, i, undefined, undefined);
  e.setViewModelProperty("disableInsets", true);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=14 cpool=1 bc=259B file=widgets/src/components/subscreen/SubscreenTabs
// closure: e, b, a, H, T, I, K, L, X, m, i, c, s, Q
function {
  e.beginComponent(c.PullToRefresh, s, undefined, undefined);
  e.setViewModelProperty("scrollViewHandler", I);
  e.setViewModelProperty("onPullToRefresh", Q);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=37 closure=14 cpool=2 bc=2352B file=widgets/src/components/subscreen/SubscreenTabs
// locals: d, l, p, S, y, C, V, P, g, M, v, T, H, I, B, A, U, x, D, F, k, f, E, R, z, N, q, O, _, j, J, K, L, X, G, Q, this
// closure: e, r, u, n, w, t, b, a, m, i, c, s, h, o
function {
  this = this;
  let Q;
  let G;
  let X;
  let L;
  let K;
  let J;
  let j;
  let _;
  let O;
  let q;
  let N;
  let z;
  let R;
  let E;
  let f;
  let k;
  let F;
  let D;
  let x;
  let U;
  let A;
  let B;
  let I;
  let H;
  let T;
  let v;
  let M;
  let g;
  let P;
  let V;
  let C;
  let y;
  let S;
  let p;
  let l;
  let d;
  if (!((this.viewModel == null))) goto L_98;
  this.viewModel;
  d = {};
  l = this.state;
  p = d.tabsItemsArray;
  S = d.tabsItemsInitialIndex;
  y = d.tabsColumnsFixed;
  C = d.tabsUnderlineHeight;
  V = d.tabsUnderlineColor;
  P = d.tabsBottomRulerHeight;
  g = d.tabsBottomRulerColor;
  M = d.tabsUnfocusedOpacity;
  v = d.tabsUnfocusedScale;
  T = d.tabsContentLoading;
  H = this.getTabsCoordinator();
  if (!((d.scrollViewHandler == null))) goto L_2ab;
  d.scrollViewHandler;
  I = this.scrollViewHandler;
  if (!((d.headerPacking == null))) goto L_2db;
  d.headerPacking;
  B = "cut";
  if (!((d.headerInsets == null))) goto L_308;
  d.headerInsets;
  A = true;
  U = d.headerSidePadding;
  if (!(U)) goto L_33b;
  goto L_381;
  // [栈深重同步 1 -> 0]
  x = -h.Subscreen.GUTTER_SIZE;
  D = d.backgroundColor;
  F = d.backgroundOpacity;
  k = d.headerBackgroundColor;
  if (!((d.scrollViewDismissKeyboardOnDrag == null))) goto L_420;
  d.scrollViewDismissKeyboardOnDrag;
  f = true;
  if (!((d.scrollViewShowsScrollIndicator == null))) goto L_44d;
  d.scrollViewShowsScrollIndicator;
  E = false;
  R = d.scrollViewBouncesFromDragAtStart;
  z = d.scrollViewBouncesFromDragAtEnd;
  N = d.scrollViewAccessibilityId;
  q = d.scrollBarEnabled;
  O = l.activeScrollBarHandler;
  _ = d.headerHorizontalScrollEnabled;
  j = d.headerHorizontalScrollBouncesFromDragAtStart;
  J = d.headerHorizontalScrollBouncesFromDragAtEnd;
  K = d.contentHorizontalScrollEnabled;
  L = d.contentHorizontalScrollBouncesFromDragAtStart;
  X = d.contentHorizontalScrollBouncesFromDragAtEnd;
  if (!((d.hideTabsHeader == null))) goto L_61c;
  d.hideTabsHeader;
  G = false;
  Q = d.onPullToRefresh;
  e.beginComponent(h.Subscreen, o, undefined, undefined);
  e.setViewModelProperty("scrollViewHandler", I);
  e.setViewModelProperty("headerStyling", "hovering");
  e.setViewModelProperty("scrollViewDismissKeyboardOnDrag", f);
  e.setViewModelProperty("scrollViewShowsScrollIndicator", E);
  e.setViewModelProperty("scrollViewBouncesFromDragAtStart", R);
  e.setViewModelProperty("scrollViewBouncesFromDragAtEnd", z);
  e.setViewModelProperty("scrollViewAccessibilityId", N);
  e.setViewModelProperty("backgroundColor", D);
  e.setViewModelProperty("backgroundOpacity", F);
  e.setViewModelProperty("headerBackgroundColor", k);
  if (!(q)) goto L_8aa;
  goto L_8ab;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("scrollBarHandler", undefined);
  e.setNamedSlot("header", function <atom:0>);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=174B file=widgets/src/components/subscreen/SubscreenTabs
// locals: e, this
function {
  this = this;
  let e;
  e = this.getTabsCoordinator();
  if (!((this.lastTabsCoordinator !== e))) goto L_ad;
  this.lastTabsCoordinator = e;
  this.unsubscribe();
  this.subscribe();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=52B file=widgets/src/components/subscreen/SubscreenTabs
// locals: this
function {
  this = this;
  this.unsubscribe();
  this.lastTabsCoordinator = undefined;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=422B file=widgets/src/components/subscreen/SubscreenTabs
// locals: e, this
function {
  this = this;
  if (!(this.viewModel.scrollBarEnabled)) goto L_1a5;
  let e;
  e = this.getTabsCoordinator();
  this.onUpdateTabIndexSubscription = e.index.subscribe(this.onUpdateTabIndex.bind(this));
  this.onUpdateTabNavSubscription = e.onNav.subscribe(this.onUpdateTabNav.bind(this));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=183B file=widgets/src/components/subscreen/SubscreenTabs
// locals: this
function {
  this = this;
  if (!((this.onUpdateTabIndexSubscription == null))) goto L_2c;
  this.onUpdateTabIndexSubscription;
  goto L_50;
  undefined.unsubscribe();
  if (!((this.onUpdateTabNavSubscription == null))) goto L_7b;
  this.onUpdateTabNavSubscription;
  goto L_9f;
  undefined.unsubscribe();
  this.onUpdateTabIndexSubscription = undefined;
  this.onUpdateTabNavSubscription = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=109B file=widgets/src/components/subscreen/SubscreenTabs
// locals: this
function {
  this = this;
  if (!((this.viewModel.tabsCoordinator == null))) goto L_6c;
  this.viewModel.tabsCoordinator;
  return this.tabsCoordinator;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=8 bc=719B file=widgets/src/components/subscreen/SubscreenTabs
// args: require, module, exports
// locals: e, o, t, r, n, s, i, a, d, l, c, b, p, u, h, m, w, SubscreenTabs, <class_fields_init>, SubscreenTabs#1
function {
  let SubscreenTabs#1;
  let w;
  let m;
  let h;
  let u;
  let p;
  let b;
  let c;
  let l;
  let d;
  let a;
  let i;
  let s;
  let n;
  let r;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscreenTabs = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "9SMdlcCmYTCdpRI0");
  t = e.makeComponentPrototype(undefined, "l3nqo5yEH5OVNsn6");
  r = e.makeNodePrototype("layout", undefined, "sHfJPlQWir_XV5Pn");
  n = e.makeComponentPrototype(undefined, "-2mXKBBQSRCjCc-P");
  s = e.makeComponentPrototype(undefined, "6S-bve1-ZNivJDDr");
  i = e.makeComponentPrototype(["paddingTop", 0, "paddingBottom", 0], "_yp2p-6i9bkb_79u");
  a = e.makeComponentPrototype(undefined, "SHGnm4SA80TCqo5z");
  d = require("valdi_core/src/Component");
  l = require("widgets/src/components/scroll/ScrollViewHandler");
  c = require("../refresh/PullToRefresh");
  b = require("../tabs/TabsContent");
  p = require("../tabs/TabsCoordinator");
  u = require("../tabs/TabsHeader");
  h = require("./Subscreen");
  m = require("./SubscreenContent");
  w = require("./SubscreenHeader");
  let SubscreenTabs;
  let <class_fields_init>;
  class SubscreenTabs extends d.StatefulComponent { ... }
  <proto:SubscreenTabs>.onCreate = function <atom:0>;
  <proto:SubscreenTabs>.onRender = function <atom:0>;
  <proto:SubscreenTabs>.onViewModelUpdate = function <atom:0>;
  <proto:SubscreenTabs>.onDestroy = function <atom:0>;
  <proto:SubscreenTabs>.subscribe = function <atom:0>;
  <proto:SubscreenTabs>.unsubscribe = function <atom:0>;
  <proto:SubscreenTabs>.getTabsCoordinator = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscreenTabs>;
  SubscreenTabs = function <atom:0>;
  // close_loc <class_fields_init>
  SubscreenTabs#1 = function <atom:0>;
  exports.SubscreenTabs = SubscreenTabs#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/subscreen/SubscreenTabs
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
