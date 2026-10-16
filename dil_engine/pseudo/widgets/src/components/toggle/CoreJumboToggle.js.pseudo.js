// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=56B file=widgets/src/components/toggle/CoreJumboToggle
// closure: this
function {
  this.setStateAnimated({pressed: true}, {duration: 0.15});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=56B file=widgets/src/components/toggle/CoreJumboToggle
// closure: this
function {
  this.setStateAnimated({pressed: false}, {duration: 0.15});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=2 bc=104B file=widgets/src/components/toggle/CoreJumboToggle
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

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=312B file=widgets/src/components/toggle/CoreJumboToggle
// closure: this, b, t, l
function {
  if ((this.viewModel.hapticFeedbackDisabled)) goto L_94;
  b.Device.performHapticFeedback("action_sheet");
  this.setStateAnimated({on: t.on}, {stiffness: l.SPRING_DEFAULT_STIFFNESS, damping: l.SPRING_DEFAULT_DAMPING});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=1 bc=281B file=widgets/src/components/toggle/CoreJumboToggle
// args: e
// locals: t, this
// closure: b, l, h
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

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=664B file=widgets/src/components/toggle/CoreJumboToggle
// closure: c, e, d, h, g, this, s
function {
  if (!(c)) goto L_151;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", h.onImage);
  e.setAttribute("src", g);
  e.setAttributeString("tint", this.viewModel.onImageTintColor);
  goto L_297;
  // [栈深重同步 1 -> 0]
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", h.offImage);
  e.setAttribute("src", g);
  e.setAttributeString("tint", this.viewModel.offImageTintColor);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=8 closure=13 cpool=3 bc=2600B file=widgets/src/components/toggle/CoreJumboToggle
// locals: l, c, b, h, g, S, y, this
// closure: e, d, s, k, C, t, o, i, r, n, m, a, u
function {
  this = this;
  let y;
  let S;
  let g;
  let h;
  let b;
  let c;
  let l;
  if (!((this.viewModel == null))) goto L_41;
  this.viewModel;
  l = {};
  c = this.state.on;
  b = this.state.pressed;
  if (!(c)) goto L_d6;
  goto L_d9;
  // [栈深重同步 1 -> 0]
  h = C;
  if (!(c)) goto L_105;
  goto L_129;
  // [栈深重同步 1 -> 0]
  g = l.offImage;
  if (!(c)) goto L_156;
  goto L_17a;
  // [栈深重同步 1 -> 0]
  S = l.trackOffColor;
  if (!(c)) goto L_1a7;
  goto L_1cb;
  // [栈深重同步 1 -> 0]
  y = l.thumbOffColor;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", h.container);
  if (!((this.viewModel.touchAreaExtension == null))) goto L_2be;
  this.viewModel.touchAreaExtension;
  e.setAttributeNumber("touchAreaExtension", 10);
  e.setAttributeFunction("onTap", this.viewModel.onTap);
  e.setAttributeFunction("onTouchStart", this.onTouchStart);
  e.setAttributeFunction("onTouchEnd", this.onTouchEnd);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttribute("accessibilityStateSelected", c);
  if (!(this.viewModel.disabled)) goto L_4e7;
  goto L_4e8;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttribute("touchEnabled", !this.viewModel.disabled);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", h.trackContainer);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", h.track);
  e.setAttributeString("backgroundColor", S);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", h.trackShade);
  if (!(b)) goto L_75f;
  goto L_760;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0);
  e.endRender();
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", h.thumbTrack);
  m.when((null !== g), function <atom:0>);
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", h.thumbOuter);
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", h.thumbInner);
  e.setAttributeString("backgroundColor", y);
  e.endRender();
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=30 closure=0 cpool=3 bc=2364B file=widgets/src/components/toggle/CoreJumboToggle
// args: require, module, exports
// locals: e, t, o, i, r, n, d, s, a, u, l, c, b, h, g, m, S, y, v, w, A, p, C, k, CoreJumboToggle, <class_fields_init>, CoreJumboToggle#1
function {
  let CoreJumboToggle#1;
  let k;
  let C;
  let p;
  let A;
  let w;
  let v;
  let y;
  let S;
  let m;
  let g;
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
  exports.CoreJumboToggle = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "P9Mq5CQA2_G7tBYC");
  o = e.makeNodePrototype("layout", undefined, "1cEDiTEKbzePHEdR");
  i = e.makeNodePrototype("view", undefined, "sXRBrZ3gK8P5SSWz");
  r = e.makeNodePrototype("view", undefined, "Fq93QIafX9F8jVHh");
  n = e.makeNodePrototype("layout", undefined, "wZwGRatkyZrxKwuQ");
  d = e.makeNodePrototype("image", undefined, "tSCAHWhbUNBbqTIh");
  s = e.makeNodePrototype("image", undefined, "ecYwM21WHWhXISZo");
  a = e.makeNodePrototype("layout", undefined, "P3rtOqE3ad-Ve4v7");
  u = e.makeNodePrototype("view", undefined, "0nL_8MXchqwOtCbH");
  l = require("valdi_core/src/AnimationOptions");
  c = require("valdi_core/src/Component");
  b = require("valdi_core/src/Device");
  h = require("valdi_core/src/SetTimeout");
  g = require("valdi_core/src/Style");
  m = require("valdi_core/src/utils/When");
  S = require("widgets/src/styles/semanticColors");
  y = S.SemanticColor.Brand.SECONDARY;
  v = S.SemanticColor.Button.SECONDARY;
  w = S.SemanticColor.Background.OVERLAY;
  A = S.alwaysLight(S.SemanticColor.Background.SURFACE);
  p = S.SemanticColor.Background.OVERLAY;
  C = {container: new g.Style({height: 46, width: 88, accessibilityCategory: "checkbox"}), trackContainer: new g.Style({position: "absolute", width: "100%", height: "100%"}), track: new g.Style({width: "100%", height: "100%", borderRadius: "50%", backgroundColor: v}), trackShade: new g.Style({position: "absolute", width: "100%", height: "100%", borderRadius: "50%", backgroundColor: w}), thumbTrack: new g.Style({width: "100%", height: "100%"}), thumbOuter: new g.Style({position: "absolute", left: 4, top: 0, bottom: 0, justifyContent: "center"}), thumbInner: new g.Style({height: 40, width: 40, borderRadius: "50%", backgroundColor: A, boxShadow: "0 1 3 ".concat(p)}), onImage: new g.Style({height: 15, width: 28, position: "absolute", left: 10, right: undefined, top: 15, bottom: 10, justifyContent: "center"}), offImage: new g.Style({height: 15, width: 28, position: "absolute", left: undefined, right: 10, top: 15, bottom: 10, justifyContent: "center"})};
  null;
  C;
  k = {track: C.track.extend({backgroundColor: y}), thumbOuter: C.thumbOuter.extend({left: undefined, right: 4})};
  let CoreJumboToggle;
  let <class_fields_init>;
  class CoreJumboToggle extends c.StatefulComponent { ... }
  <proto:CoreJumboToggle>.onViewModelUpdate = function <atom:0>;
  <proto:CoreJumboToggle>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CoreJumboToggle>;
  CoreJumboToggle = function <atom:0>;
  // close_loc <class_fields_init>
  CoreJumboToggle#1 = function <atom:0>;
  exports.CoreJumboToggle = CoreJumboToggle#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/toggle/CoreJumboToggle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
