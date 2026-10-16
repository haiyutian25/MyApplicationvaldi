// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=16B file=valdi_ui/src/components/Pressable
// args: e
function {
  e.Ripple = "ripple";
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=1 bc=726B file=valdi_ui/src/components/Pressable
// args: e
// locals: t, s
// closure: this, c, d
function {
  if (!((this.viewModel.onTouchStart == null))) goto L_4e;
  this.viewModel.onTouchStart;
  this.viewModel;
  goto L_52;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e);
  if (!((undefined !== this.onTap))) goto L_2d5;
  if (!((false !== this.viewModel.showsPressedFeedback))) goto L_2d5;
  if (!(!this.state.pressed)) goto L_2d5;
  if (!((this.viewModel.feedback === c.Ripple))) goto L_2a5;
  let s;
  let t;
  if (!((e.x == null))) goto L_1b1;
  e.x;
  t = 0;
  if (!((e.y == null))) goto L_1da;
  e.y;
  s = 0;
  this.setState({pressed: true, rippleExpanded: false, touchX: t, touchY: s});
  this.setStateAnimated({rippleExpanded: true}, {curve: d.AnimationCurve.EaseOut, duration: 0.32});
  return;
  this.setState({pressed: true});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=440B file=valdi_ui/src/components/Pressable
// args: e
// locals: t
// closure: this
function {
  let t;
  if (((true === this.viewModel.disabled))) goto L_97;
  if (!((true === this.viewModel.loading))) goto L_9a;
  return;
  if (!(e)) goto L_e6;
  t = (undefined !== this.viewModel.hoveredStyle);
  if (!((t !== this.state.hovered))) goto L_164;
  this.setState({hovered: t});
  if (!((this.viewModel.onHover == null))) goto L_1b3;
  this.viewModel.onHover;
  this.viewModel;
  goto L_1b7;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=370B file=valdi_ui/src/components/Pressable
// args: e
// closure: this, c
function {
  if (!((this.viewModel.onTouchEnd == null))) goto L_4e;
  this.viewModel.onTouchEnd;
  this.viewModel;
  goto L_52;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e);
  if (!(this.state.pressed)) goto L_171;
  if (!((this.viewModel.feedback === c.Ripple))) goto L_142;
  goto L_171;
  // [栈深重同步 1 -> 0]
  this.setState({pressed: false});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=3 bc=137B file=valdi_ui/src/components/Pressable
// locals: this, this.active_func, new.target, arguments
// closure: c, d, <class_fields_init>
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
  this.state = {hovered: false, pressed: false, rippleExpanded: false, touchX: 0, touchY: 0};
  this.handleTouchStart = function <atom:0>;
  this.handleHover = function <atom:0>;
  this.handleTouchEnd = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=664B file=valdi_ui/src/components/Pressable
// locals: e, t, s, this
function {
  this = this;
  let s;
  let t;
  let e;
  if (!((true !== this.viewModel.disabled))) goto L_9b;
  e = (true !== this.viewModel.loading);
  if (!(e)) goto L_132;
  if (!((undefined !== this.viewModel.hoveredStyle))) goto L_132;
  t = this.state.hovered;
  if (!(e)) goto L_1ca;
  if (!((false !== this.viewModel.showsPressedFeedback))) goto L_1ca;
  s = this.state.pressed;
  if (!((t === this.state.hovered))) goto L_25d;
  if (((s === this.state.pressed))) goto L_297;
  this.setState({hovered: t, pressed: s});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=397B file=valdi_ui/src/components/Pressable
// closure: e, this, V, O, c, P, E, x, N
function {
  e.renderUnnamedSlot(this);
  if (!(V)) goto L_18c;
  if (!(O)) goto L_18c;
  if (!((this.viewModel.feedback === c.Ripple))) goto L_18c;
  if (!((P == null))) goto L_11b;
  P;
  if (!((x.borderRadius == null))) goto L_189;
  x.borderRadius;
  this.renderRipple(E.colors.text, N.attributes.borderRadius);
  return;
}

// fn <atom:0>  args=0 vars=32 closure=7 cpool=1 bc=3446B file=valdi_ui/src/components/Pressable
// locals: s, i, d, o, l, v, p, u, y, b, S, w, M, g, m, P, f, k, A, T, x, R, V, O, C, E, N, q, _, e, t, this
// closure: e, c, r, n, h, t, a
function {
  this = this;
  let _;
  let q;
  let N;
  let E;
  let C;
  let O;
  let V;
  let R;
  let x;
  let T;
  let A;
  let k;
  let f;
  let P;
  let m;
  let g;
  let M;
  let w;
  let S;
  let b;
  let y;
  let u;
  let p;
  let v;
  let l;
  let o;
  let d;
  let i;
  let s;
  if (((undefined === undefined))) goto L_3da;
  s = <to_object>(undefined).children;
  i = <to_object>(undefined).controlRef;
  d = <to_object>(undefined).disabled;
  o = <to_object>(undefined).disabledStyle;
  l = <to_object>(undefined).feedback;
  v = <to_object>(undefined).hoveredStyle;
  p = <to_object>(undefined).loading;
  u = <to_object>(undefined).loadingStyle;
  y = <to_object>(undefined).onHover;
  b = <to_object>(undefined).onLongPress;
  S = <to_object>(undefined).material;
  w = <to_object>(undefined).materialTint;
  M = <to_object>(undefined).onPress;
  g = <to_object>(undefined).pressedOpacity;
  m = <to_object>(undefined).pressedStyle;
  P = <to_object>(undefined).rippleColor;
  f = <to_object>(undefined).selected;
  k = <to_object>(undefined).selectedStyle;
  A = <to_object>(undefined).showsPressedFeedback;
  T = <to_object>(undefined).style;
  x = {};
  <to_object>(undefined);
  {children: null, controlRef: null, disabled: null, disabledStyle: null, feedback: null, hoveredStyle: null, loading: null, loadingStyle: null, onHover: null, onLongPress: null, material: null, materialTint: null, onPress: null, pressedOpacity: null, pressedStyle: null, rippleColor: null, selected: null, selectedStyle: null, showsPressedFeedback: null, style: null};
  goto L_401;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_62;
  // [栈深重同步 1 -> 0]
  if (!(!d)) goto L_40d;
  R = !p;
  if (!(R)) goto L_4a9;
  if (((undefined !== this.viewModel.onPress))) goto L_4a9;
  V = (undefined !== this.viewModel.onLongPress);
  if (!(R)) goto L_4f9;
  O = (false !== this.viewModel.showsPressedFeedback);
  if (!(r.Device.isWeb())) goto L_5e4;
  if (!(R)) goto L_5e4;
  if (((undefined !== this.viewModel.hoveredStyle))) goto L_5e4;
  C = (undefined !== this.viewModel.onHover);
  E = n.resolveValdiUITheme();
  N = this.resolveStyle(E);
  if (!(this.state.hovered)) goto L_6ed;
  if (!((this.viewModel.hoveredStyle == null))) goto L_6ca;
  this.viewModel.hoveredStyle;
  goto L_6ee;
  goto L_6ee;
  // [栈深重同步 1 -> 0]
  q = undefined;
  if (!(this.state.pressed)) goto L_7a5;
  if (!((this.viewModel.pressedStyle == null))) goto L_782;
  this.viewModel.pressedStyle;
  goto L_7a6;
  goto L_7a6;
  // [栈深重同步 1 -> 0]
  _ = undefined;
  if (((undefined !== q))) goto L_7b6;
  if (!((undefined !== _))) goto L_82f;
  let e;
  for (const e of Object.keys(x)) {
    let t;
    t = e;
    if (!((q == null))) goto L_800;
    q;
    goto L_804;
    if (!((undefined === undefined[t]))) goto L_81a;
    if (!((_ == null))) goto L_815;
    _;
    goto L_819;
    if (((undefined === undefined[t]))) goto L_828;
    x[e] = undefined;
    undefined;
  }
  e.beginComponent(h.MaterialSurface, t, undefined, undefined);
  e.setViewModelProperties(x);
  e.setViewModelProperty("controlRef", i);
  if (!((this.viewModel.accessibilityCategory == null))) goto L_952;
  this.viewModel.accessibilityCategory;
  e.setViewModelProperty("accessibilityCategory", "button");
  if (!((this.viewModel.accessibilityStateDisabled == null))) goto L_9cc;
  this.viewModel.accessibilityStateDisabled;
  e.setViewModelProperty("accessibilityStateDisabled", !R);
  if (!((this.viewModel.accessibilityStateSelected == null))) goto L_a45;
  this.viewModel.accessibilityStateSelected;
  e.setViewModelProperty("accessibilityStateSelected", f);
  if (!(C)) goto L_a9c;
  goto L_a9d;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onHover", undefined);
  if (!(R)) goto L_b15;
  goto L_b16;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onLongPress", undefined);
  e.setViewModelProperty("onTap", this.onTap);
  if (!(O)) goto L_bbd;
  goto L_bbe;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onTouchEnd", undefined);
  if (!(O)) goto L_c15;
  goto L_c16;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onTouchStart", undefined);
  e.setViewModelProperty("interactive", V);
  if (!((S == null))) goto L_cc0;
  S;
  e.setViewModelProperty("material", a.ControlMaterial.Standard);
  e.setViewModelProperty("materialTint", w);
  e.setViewModelProperty("style", N);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=5 cpool=1 bc=1523B file=valdi_ui/src/components/Pressable
// args: t, d
// locals: o, this
// closure: r, e, s, w, i
function {
  this = this;
  let o;
  o = Math.max(this.state.touchX, (r.Device.getWindowWidth() - this.state.touchX));
  e.beginRender(s, undefined);
  e.setAttribute("borderRadius", d);
  e.setAttribute("slowClipping", true);
  e.setAttributeStyle("style", w.ripple);
  e.setAttribute("touchEnabled", false);
  e.beginRender(i, undefined);
  e.setAttributeString("background", "radial-gradient(".concat(t, " 0, ", t, " 0.6, #00000000 1)"));
  e.setAttributeNumber("borderRadius", o);
  e.setAttributeNumber("height", (2 * o));
  e.setAttributeNumber("left", (this.state.touchX - o));
  if (!(this.state.pressed)) goto L_3dd;
  goto L_3de;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0);
  if (!(this.state.rippleExpanded)) goto L_453;
  goto L_454;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("scaleX", 0);
  if (!(this.state.rippleExpanded)) goto L_4c9;
  goto L_4ca;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("scaleY", 0);
  e.setAttributeNumber("top", (this.state.touchY - o));
  e.setAttribute("touchEnabled", false);
  e.setAttributeNumber("width", (2 * o));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=6 cpool=0 bc=1817B file=valdi_ui/src/components/Pressable
// args: e
// locals: t, s, this
// closure: S, w, b, y, u, l
function {
  this = this;
  let s;
  let t;
  t = {disabled: (true === this.viewModel.disabled), disabledStyle: this.viewModel.disabledStyle, hovered: this.state.hovered, hoveredStyle: this.viewModel.hoveredStyle, loading: (true === this.viewModel.loading), loadingStyle: this.viewModel.loadingStyle, pressed: this.state.pressed, pressedOpacity: this.viewModel.pressedOpacity, pressedStyle: this.viewModel.pressedStyle, selected: (true === this.viewModel.selected), selectedStyle: this.viewModel.selectedStyle, style: this.viewModel.style, theme: e};
  if (!(S(this.cachedInputs, t))) goto L_3ee;
  if (!((this.cachedStyle == null))) goto L_3ed;
  this.cachedStyle;
  return w.surface;
  s = t.style;
  if (!(t.selected)) goto L_491;
  if (!((t.selectedStyle == null))) goto L_48c;
  t.selectedStyle;
  s = b(s, y(e).selected);
  b(s, y(e).selected);
  if (!(t.hovered)) goto L_4e7;
  s = b(s, t.hoveredStyle);
  b(s, t.hoveredStyle);
  if (!(t.pressed)) goto L_597;
  if (!((t.pressedStyle == null))) goto L_591;
  t.pressedStyle;
  if (!((undefined === t.pressedOpacity))) goto L_569;
  goto L_591;
  // [栈深重同步 3 -> 2]
  s = b(s, u(t.pressedOpacity));
  b(s, u(t.pressedOpacity));
  if (!(t.disabled)) goto L_5ec;
  s = b(s, t.disabledStyle);
  b(s, t.disabledStyle);
  if (!(t.loading)) goto L_642;
  s = b(s, t.loadingStyle);
  b(s, t.loadingStyle);
  this.cachedInputs = t;
  if (!((undefined === s))) goto L_67e;
  goto L_6ed;
  // [栈深重同步 2 -> 1]
  this.cachedStyle = l.Style.merge(w.surface, s);
  return this.cachedStyle;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=79B file=valdi_ui/src/components/Pressable
// closure: this
function {
  if (!((this.viewModel.onPress == null))) goto L_4b;
  this.viewModel.onPress;
  this.viewModel;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=313B file=valdi_ui/src/components/Pressable
// locals: this
function {
  this = this;
  if (!((true !== this.viewModel.disabled))) goto L_138;
  if (!((true !== this.viewModel.loading))) goto L_138;
  if (!((undefined !== this.viewModel.onPress))) goto L_138;
  if (!((undefined === this.cachedOnTap))) goto L_114;
  this.cachedOnTap = function <atom:0>;
  function <atom:0>;
  return this.cachedOnTap;
  return;
}

// fn u  args=1 vars=2 closure=2 cpool=0 bc=153B file=valdi_ui/src/components/Pressable
// args: e
// locals: t
// closure: p, l
function {
  let t;
  t = p.get(e);
  if (!((undefined === t))) goto L_94;
  t = new l.Style({opacity: e});
  new l.Style({opacity: e});
  p.set(e, t);
  return t;
}

// fn y  args=1 vars=2 closure=2 cpool=0 bc=228B file=valdi_ui/src/components/Pressable
// args: e
// locals: t
// closure: v, l
function {
  let t;
  t = v.get(e);
  if (((undefined !== t))) goto L_df;
  t = {selected: new l.Style({backgroundColor: e.colors.accent})};
  {selected: new l.Style({backgroundColor: e.colors.accent})};
  v.set(e, t);
  return t;
}

// fn b  args=2 vars=2 closure=1 cpool=0 bc=89B file=valdi_ui/src/components/Pressable
// args: e, t
// closure: l
function {
  if (!((undefined === t))) goto L_7;
  return e;
  if (!((undefined === e))) goto L_e;
  return t;
  return l.Style.merge(e, t);
}

// fn S  args=2 vars=2 closure=0 cpool=0 bc=989B file=valdi_ui/src/components/Pressable
// args: e, t
function {
  if (!((undefined !== e))) goto L_3dc;
  if (!((e.disabled === t.disabled))) goto L_3dc;
  if (!((e.disabledStyle === t.disabledStyle))) goto L_3dc;
  if (!((e.hovered === t.hovered))) goto L_3dc;
  if (!((e.hoveredStyle === t.hoveredStyle))) goto L_3dc;
  if (!((e.loading === t.loading))) goto L_3dc;
  if (!((e.loadingStyle === t.loadingStyle))) goto L_3dc;
  if (!((e.pressed === t.pressed))) goto L_3dc;
  if (!((e.pressedOpacity === t.pressedOpacity))) goto L_3dc;
  if (!((e.pressedStyle === t.pressedStyle))) goto L_3dc;
  if (!((e.selected === t.selected))) goto L_3dc;
  if (!((e.selectedStyle === t.selectedStyle))) goto L_3dc;
  if (!((e.style === t.style))) goto L_3dc;
  return (e.theme === t.theme);
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=11 bc=752B file=valdi_ui/src/components/Pressable
// args: require, module, exports
// locals: e, t, s, i, d, o, r, l, a, n, h, c, Pressable, <class_fields_init>, Pressable#1, v, p, u, y, b, S, w
function {
  u = function u;
  y = function y;
  b = function b;
  S = function S;
  let w;
  let p;
  let v;
  let Pressable#1;
  let h;
  let n;
  let a;
  let l;
  let r;
  let o;
  let d;
  let i;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PressFeedback = undefined;
  exports.Pressable = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "orM858s8vrEUFDBw");
  s = e.makeNodePrototype("view", ["accessibilityId", "valdi-press-ripple", "accessibilityNavigation", "ignored"], "q9c5k1ogGU94nz9f");
  i = e.makeNodePrototype("view", ["position", "absolute"], "5mgDAN0Bv5e5WGrK");
  d = require("valdi_core/src/AnimationOptions");
  o = require("valdi_core/src/Component");
  r = require("valdi_core/src/Device");
  l = require("valdi_core/src/Style");
  a = require("../ControlMaterial");
  n = require("valdi_ui_theme/src/ValdiUITheme");
  h = require("./MaterialSurface");
  if ((c)) goto L_1bf;
  c = {};
  exports.PressFeedback = {};
  !function <atom:0>({});
  let Pressable;
  let <class_fields_init>;
  class Pressable extends o.StatefulComponent { ... }
  <proto:Pressable>.onViewModelUpdate = function <atom:0>;
  <proto:Pressable>.onRender = function <atom:0>;
  <proto:Pressable>.renderRipple = function <atom:0>;
  <proto:Pressable>.resolveStyle = function <atom:0>;
  <proto:Pressable>.onTap = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Pressable>;
  Pressable = function <atom:0>;
  // close_loc <class_fields_init>
  Pressable#1 = function <atom:0>;
  exports.Pressable = Pressable#1;
  v = new WeakMap();
  p = new Map();
  w = {ripple: new l.Style({bottom: 0, left: 0, position: "absolute", right: 0, top: 0}), surface: new l.Style({alignItems: "stretch", flexDirection: "column", flexShrink: 0, overflow: "visible"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/Pressable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
