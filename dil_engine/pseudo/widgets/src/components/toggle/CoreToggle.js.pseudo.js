// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=56B file=widgets/src/components/toggle/CoreToggle
// closure: this
function {
  this.setStateAnimated({pressed: true}, {duration: 0.15});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=56B file=widgets/src/components/toggle/CoreToggle
// closure: this
function {
  this.setStateAnimated({pressed: false}, {duration: 0.15});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=2 bc=104B file=widgets/src/components/toggle/CoreToggle
// locals: this, this.active_func, new.target, arguments
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
  this.state = {pressed: false, on: false};
  this.onTouchStart = function <atom:0>;
  this.onTouchEnd = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=312B file=widgets/src/components/toggle/CoreToggle
// closure: this, l, t, a
function {
  if ((this.viewModel.hapticFeedbackDisabled)) goto L_94;
  l.Device.performHapticFeedback("action_sheet");
  this.setStateAnimated({on: t.on}, {stiffness: a.SPRING_DEFAULT_STIFFNESS, damping: a.SPRING_DEFAULT_DAMPING});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=1 bc=281B file=widgets/src/components/toggle/CoreToggle
// args: e
// locals: t, this
// closure: l, a, c
function {
  this = this;
  let t;
  t = this.viewModel;
  if (!(e)) goto L_c9;
  if (!((e.on !== t.on))) goto L_c9;
  if (!((false !== t.animationsEnabled))) goto L_c9;
  goto L_118;
  // [栈深重同步 1 -> 0]
  this.setState({on: t.on});
  return;
}

// fn <atom:0>  args=0 vars=8 closure=11 cpool=2 bc=2609B file=widgets/src/components/toggle/CoreToggle
// locals: a, u, l, c, b, h, S, this
// closure: A, p, m, e, t, o, i, r, n, d, s
function {
  this = this;
  let S;
  let h;
  let b;
  let c;
  let l;
  let u;
  let a;
  if (!((this.viewModel == null))) goto L_41;
  this.viewModel;
  a = {};
  u = this.state.on;
  l = this.state.pressed;
  if (!(u)) goto L_d6;
  goto L_d9;
  // [栈深重同步 1 -> 0]
  c = p;
  if (!(u)) goto L_105;
  goto L_129;
  // [栈深重同步 1 -> 0]
  b = a.trackOffColor;
  if (!(u)) goto L_156;
  goto L_17a;
  // [栈深重同步 1 -> 0]
  h = a.thumbOffColor;
  if (!(a.disableShadow)) goto L_1a5;
  goto L_1d1;
  // [栈深重同步 1 -> 0]
  S = "0 1 3 ".concat(m);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", c.container);
  if (!((this.viewModel.touchAreaExtension == null))) goto L_2c4;
  this.viewModel.touchAreaExtension;
  e.setAttributeNumber("touchAreaExtension", 10);
  e.setAttributeFunction("onTap", this.viewModel.onTap);
  e.setAttributeFunction("onTouchStart", this.onTouchStart);
  e.setAttributeFunction("onTouchEnd", this.onTouchEnd);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttribute("accessibilityStateSelected", u);
  if (!(this.viewModel.disabled)) goto L_4ed;
  goto L_4ee;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttribute("touchEnabled", !this.viewModel.disabled);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", c.trackContainer);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", c.track);
  e.setAttributeString("backgroundColor", b);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", c.trackShade);
  if (!(l)) goto L_765;
  goto L_766;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0);
  e.endRender();
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", c.thumbTrack);
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", c.thumbOuter);
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", c.thumbInner);
  e.setAttributeString("backgroundColor", h);
  e.setAttributeString("boxShadow", S);
  e.endRender();
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=27 closure=0 cpool=3 bc=1979B file=widgets/src/components/toggle/CoreToggle
// args: require, module, exports
// locals: e, t, o, i, r, n, d, s, a, u, l, c, b, h, S, y, v, g, m, p, A, CoreToggle, <class_fields_init>, CoreToggle#1
function {
  let CoreToggle#1;
  let A;
  let p;
  let m;
  let g;
  let v;
  let y;
  let S;
  let h;
  let b;
  let c;
  let l;
  let u;
  let a;
  let s;
  let d;
  let n;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CoreToggle = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "UU3m4s8MCCqOlaPH");
  o = e.makeNodePrototype("layout", undefined, "qqWCMfvnqvCfMDzH");
  i = e.makeNodePrototype("view", undefined, "W7XVqAbb0HDvrONO");
  r = e.makeNodePrototype("view", undefined, "WNtxYUYkCdm78sfg");
  n = e.makeNodePrototype("layout", undefined, "YhkDuOoLr-XOfjxt");
  d = e.makeNodePrototype("layout", undefined, "6ta6Q9_l6rIjeRpD");
  s = e.makeNodePrototype("view", undefined, "zgGLJbhJox5OlNNb");
  a = require("valdi_core/src/AnimationOptions");
  u = require("valdi_core/src/Component");
  l = require("valdi_core/src/Device");
  c = require("valdi_core/src/SetTimeout");
  b = require("valdi_core/src/Style");
  h = require("widgets/src/styles/semanticColors");
  S = h.SemanticColor.Brand.SECONDARY;
  y = h.SemanticColor.Button.SECONDARY;
  v = h.SemanticColor.Background.OVERLAY;
  g = h.alwaysLight(h.SemanticColor.Background.SURFACE);
  m = h.SemanticColor.Background.OVERLAY;
  p = {container: new b.Style({height: 24, width: 38, accessibilityCategory: "checkbox"}), trackContainer: new b.Style({position: "absolute", width: "100%", height: "100%"}), track: new b.Style({width: "100%", height: "100%", borderRadius: "50%", backgroundColor: y}), trackShade: new b.Style({position: "absolute", width: "100%", height: "100%", borderRadius: "50%", backgroundColor: v}), thumbTrack: new b.Style({width: "100%", height: "100%"}), thumbOuter: new b.Style({position: "absolute", left: 4, top: 0, bottom: 0, justifyContent: "center"}), thumbInner: new b.Style({height: 16, width: 16, borderRadius: "50%", backgroundColor: g})};
  null;
  p;
  A = {track: p.track.extend({backgroundColor: S}), thumbOuter: p.thumbOuter.extend({left: undefined, right: 4})};
  let CoreToggle;
  let <class_fields_init>;
  class CoreToggle extends u.StatefulComponent { ... }
  <proto:CoreToggle>.onViewModelUpdate = function <atom:0>;
  <proto:CoreToggle>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CoreToggle>;
  CoreToggle = function <atom:0>;
  // close_loc <class_fields_init>
  CoreToggle#1 = function <atom:0>;
  exports.CoreToggle = CoreToggle#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/toggle/CoreToggle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
