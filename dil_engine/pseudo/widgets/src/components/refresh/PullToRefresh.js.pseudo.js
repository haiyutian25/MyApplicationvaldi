// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=widgets/src/components/refresh/PullToRefresh
// args: e
function {
  e.Triggered = "triggered";
  e.Completed = "completed";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=widgets/src/components/refresh/PullToRefresh
// args: e
function {
  e.Idle = "idle";
  e.Ready = "ready";
  e.Loading = "loading";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=80B file=widgets/src/components/refresh/PullToRefresh
// closure: this, T
function {
  this.setState({stage: T.Idle});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=162B file=widgets/src/components/refresh/PullToRefresh
// closure: this, n, s
function {
  this.refContainer.setAttribute("translationY", n);
  this.refFadeTop.setAttribute("translationY", s);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=2 cpool=1 bc=298B file=widgets/src/components/refresh/PullToRefresh
// args: e
// locals: t, i, o, n, s
// closure: this, v
function {
  let s;
  let n;
  let o;
  let i;
  let t;
  t = this.computeDisplacementOverscrollTension(e.overscrollTensionY);
  i = this.computeDisplacementBounce(e.y);
  o = this.computeDisplacementPull(t, i);
  n = (t - v);
  s = -o;
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=301B file=widgets/src/components/refresh/PullToRefresh
// args: e
// closure: this, T, w
function {
  if (!((this.state.stage === T.Ready))) goto L_12c;
  this.changeStageTo(T.Loading);
  if (!((this.viewModel.onPullToRefresh == null))) goto L_107;
  this.viewModel.onPullToRefresh;
  this.viewModel;
  goto L_12c;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=529B file=widgets/src/components/refresh/PullToRefresh
// closure: this, T, w
function {
  if (!((this.state.stage === T.Ready))) goto L_1c1;
  if (!((undefined !== this.viewModel.isLoading))) goto L_102;
  goto L_210;
  // [栈深重同步 1 -> 0]
  this.changeStageTo(T.Idle);
  if (!((this.viewModel.onPullToRefresh == null))) goto L_19a;
  this.viewModel.onPullToRefresh;
  this.viewModel;
  goto L_210;
  // [栈深重同步 1 -> 2]
  goto L_210;
  // [栈深重同步 1 -> 0]
  this.setState({stage: T.Idle});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=4 bc=266B file=widgets/src/components/refresh/PullToRefresh
// locals: this, this.active_func, new.target, arguments
// closure: T, v, w, <class_fields_init>, d
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
  this.state = {stage: T.Idle};
  this.refContainer = new d.ElementRef();
  this.refFadeTop = new d.ElementRef();
  this.scrollViewListener = {onDragStart: function <atom:0>, onScroll: function <atom:0>, onDragEnd: function <atom:0>, onScrollEnd: function <atom:0>};
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=258B file=widgets/src/components/refresh/PullToRefresh
// locals: this
// closure: v, l, p
function {
  this = this;
  this.refContainer.setAttribute("translationY", -v);
  if (!(l.Device.isIOS())) goto L_ae;
  this.accessibilityID = "stories_content_collection_view";
  goto L_101;
  // [栈深重同步 1 -> 0]
  this.accessibilityID = p.Ids.ptrContainer();
  p.Ids.ptrContainer();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=564B file=widgets/src/components/refresh/PullToRefresh
// args: e
// locals: this
// closure: T, w
function {
  this = this;
  this.unsubscribe();
  this.subscribe();
  if (!((e == null))) goto L_57;
  e;
  goto L_78;
  if (!((undefined.isLoading !== this.viewModel.isLoading))) goto L_233;
  if ((this.viewModel.isLoading)) goto L_233;
  if (((this.state.stage !== T.Loading))) goto L_233;
  this.changeStageTo(T.Idle);
  if (!((this.viewModel.onPullToRefresh == null))) goto L_20e;
  this.viewModel.onPullToRefresh;
  this.viewModel;
  goto L_233;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=519B file=widgets/src/components/refresh/PullToRefresh
// locals: this
// closure: e, t, v
function {
  this = this;
  if (!(this.viewModel.onPullToRefresh)) goto L_1de;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.refContainer);
  e.setAttributeString("accessibilityId", this.accessibilityID);
  e.setAttributeNumber("marginBottom", -v);
  this.onRenderPullZone();
  e.renderUnnamedSlot(this);
  this.onMaybeRenderDataSyncer();
  goto L_206;
  // [栈深重同步 1 -> 0]
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=639B file=widgets/src/components/refresh/PullToRefresh
// locals: this
// closure: e, i, C, o, n
function {
  this = this;
  this.state.stage;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", C.pullZone);
  e.beginRender(o, undefined);
  e.setAttributeRef(this.refFadeTop);
  e.setAttributeStyle("style", C.fadeTop);
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", C.fadeBottom);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=397B file=widgets/src/components/refresh/PullToRefresh
// locals: this
// closure: T, e, s, C, m, r
function {
  this = this;
  if (!((this.state.stage === T.Loading))) goto L_18c;
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", C.dataSyncingBar);
  e.beginComponent(m.DataSyncingBar, r, undefined, undefined);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=widgets/src/components/refresh/PullToRefresh
// locals: this
function {
  this = this;
  this.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=313B file=widgets/src/components/refresh/PullToRefresh
// locals: e, this
function {
  this = this;
  if (!(this.viewModel.onPullToRefresh)) goto L_138;
  let e;
  e = (true === this.viewModel.callOnScrollOnMainThread);
  this.scrollViewSubscription = this.viewModel.scrollViewHandler.subscribeListener(this.scrollViewListener, {callOnScrollOnMainThread: e, callOnDragEndOnMainThread: e});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=93B file=widgets/src/components/refresh/PullToRefresh
// locals: this
function {
  this = this;
  if (!((this.scrollViewSubscription == null))) goto L_2c;
  this.scrollViewSubscription;
  goto L_50;
  undefined.unsubscribe();
  this.scrollViewSubscription = undefined;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=96B file=widgets/src/components/refresh/PullToRefresh
// args: e
// locals: t
// closure: v, b, f
function {
  let t;
  if (!((e == null))) goto L_a;
  e;
  t = (-0 / v);
  return (b.EasingFunctions.easeOutQuad(t) * f);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=44B file=widgets/src/components/refresh/PullToRefresh
// args: e
function {
  return Math.max(0, -e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=49B file=widgets/src/components/refresh/PullToRefresh
// args: e, t
// closure: g, v, S
function {
  return (g.clamp((e + t), 0, v) - S);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=272B file=widgets/src/components/refresh/PullToRefresh
// args: e
// locals: this
// closure: l
function {
  this = this;
  if (!((this.state.stage !== e))) goto L_10f;
  if ((this.viewModel.disableHapticFeedback)) goto L_e2;
  l.Device.performHapticFeedback("selection");
  this.setState({stage: e});
  return;
}

// fn <atom:0>  args=3 vars=32 closure=0 cpool=19 bc=2203B file=widgets/src/components/refresh/PullToRefresh
// args: require, module, exports
// locals: e, t, i, o, n, s, r, a, l, d, c, h, u, g, p, b, m, v, S, R, y, f, w, T, PullToRefresh, <class_fields_init>, PullToRefresh#1, D, C
function {
  let C;
  let D;
  let PullToRefresh#1;
  let f;
  let y;
  let R;
  let S;
  let v;
  let m;
  let b;
  let p;
  let g;
  let u;
  let h;
  let c;
  let d;
  let l;
  let a;
  let r;
  let s;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PullToRefreshEvent = undefined;
  exports.PullToRefresh = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "eKFy-UQefjVmNxNb");
  i = e.makeNodePrototype("view", undefined, "HXvZqCx1pL4Oc0-D");
  o = e.makeNodePrototype("view", undefined, "RFVOTOLyfIa0lXIi");
  n = e.makeNodePrototype("view", undefined, "CqWOqRDXgd-TqGDh");
  s = e.makeNodePrototype("view", undefined, "BLnRq7KS9Sl70Nj_");
  r = e.makeComponentPrototype(undefined, "CjBKhYgksdT4xh3b");
  a = require("valdi_core/src/Component");
  l = require("valdi_core/src/Device");
  d = require("valdi_core/src/ElementRef");
  c = require("valdi_core/src/Style");
  h = require("widgets/src/styles/gradients");
  u = require("widgets/src/styles/semanticColors");
  g = require("foundation/src/number");
  p = require("../../../ids");
  b = require("../animation/EasingFunctions");
  m = require("./DataSyncingBar");
  v = l.Device.getDisplayHeight();
  S = 10;
  R = 2;
  y = (0.125 * v);
  f = (0.25 * v);
  if ((w)) goto L_2c3;
  w = {};
  exports.PullToRefreshEvent = {};
  !function <atom:0>({});
  if ((T)) goto L_2d1;
  T = {};
  function <atom:0>({});
  let PullToRefresh;
  let <class_fields_init>;
  class PullToRefresh extends a.StatefulComponent { ... }
  <proto:PullToRefresh>.onCreate = function <atom:0>;
  <proto:PullToRefresh>.onViewModelUpdate = function <atom:0>;
  <proto:PullToRefresh>.onRender = function <atom:0>;
  <proto:PullToRefresh>.onRenderPullZone = function <atom:0>;
  <proto:PullToRefresh>.onMaybeRenderDataSyncer = function <atom:0>;
  <proto:PullToRefresh>.onDestroy = function <atom:0>;
  <proto:PullToRefresh>.subscribe = function <atom:0>;
  <proto:PullToRefresh>.unsubscribe = function <atom:0>;
  <proto:PullToRefresh>.computeDisplacementOverscrollTension = function <atom:0>;
  <proto:PullToRefresh>.computeDisplacementBounce = function <atom:0>;
  <proto:PullToRefresh>.computeDisplacementPull = function <atom:0>;
  <proto:PullToRefresh>.changeStageTo = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PullToRefresh>;
  PullToRefresh = function <atom:0>;
  // close_loc <class_fields_init>
  PullToRefresh#1 = function <atom:0>;
  exports.PullToRefresh = PullToRefresh#1;
  D = new c.Style({position: "absolute", bottom: 0, left: 0, right: 0, height: 11});
  C = {pullZone: new c.Style({height: v, flexDirection: "row", slowClipping: true, background: h.linearGradient([[u.SemanticColor.Base.APP_YELLOW, 0], [u.SemanticColor.Brand.PRIMARY, 0.1], [u.SemanticColor.Brand.PRIMARY, 0.9], [u.SemanticColor.Base.APP_YELLOW, 1]])}), fadeTop: D.extend({background: h.linearGradient([[u.SemanticColor.Elevation.HEADER_SHADOW, 0], [u.SemanticColor.Flat.CLEAR, 1]])}), fadeBottom: D.extend({background: h.linearGradient([[u.SemanticColor.Flat.CLEAR, 0], [u.SemanticColor.Elevation.HEADER_SHADOW, 1]])}), dataSyncingBar: new c.Style({height: 2, position: "absolute", top: v, left: 0, right: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/refresh/PullToRefresh
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
