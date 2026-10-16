// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=122B file=valdi_ui/src/internal/NativeAndroidButtonSurface
// closure: this
function {
  if (!(this.isInteractive)) goto L_79;
  if (!((this.viewModel.onPress == null))) goto L_76;
  this.viewModel.onPress;
  this.viewModel;
  goto L_79;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=valdi_ui/src/internal/NativeAndroidButtonSurface
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
  this.handlePress = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=valdi_ui/src/internal/NativeAndroidButtonSurface
// args: e
function {
  return (undefined !== e);
}

// fn <atom:0>  args=0 vars=35 closure=6 cpool=1 bc=2656B file=valdi_ui/src/internal/NativeAndroidButtonSurface
// locals: o, n, l, a, c, b, u, v, y, S, h, g, p, A, m, w, P, f, N, R, I, M, k, B, C, x, j, O, _, q, E, H, L, T, this
// closure: r, e, t, i, d, s
function {
  this = this;
  let T;
  let L;
  let H;
  let E;
  let q;
  let _;
  let O;
  let j;
  let x;
  let C;
  let B;
  let k;
  let M;
  let I;
  let R;
  let N;
  let f;
  let P;
  let w;
  let m;
  let A;
  let p;
  let g;
  let h;
  let S;
  let y;
  let v;
  let u;
  let b;
  let c;
  let a;
  let l;
  let n;
  let o;
  if (((undefined === undefined))) goto L_5a1;
  o = <to_object>(undefined).accessibilityCategory;
  n = <to_object>(undefined).accessibilityHint;
  l = <to_object>(undefined).accessibilityId;
  a = <to_object>(undefined).accessibilityLabel;
  c = <to_object>(undefined).accessibilityNavigation;
  b = <to_object>(undefined).accessibilityStateDisabled;
  u = <to_object>(undefined).accessibilityStateSelected;
  v = <to_object>(undefined).accessibilityValue;
  y = <to_object>(undefined).children;
  S = <to_object>(undefined).controlRef;
  h = <to_object>(undefined).disabled;
  g = <to_object>(undefined).disabledStyle;
  p = <to_object>(undefined).feedback;
  A = <to_object>(undefined).hoveredStyle;
  m = <to_object>(undefined).loading;
  w = <to_object>(undefined).loadingStyle;
  P = <to_object>(undefined).material;
  f = <to_object>(undefined).materialTint;
  N = <to_object>(undefined).onHover;
  R = <to_object>(undefined).onLongPress;
  I = <to_object>(undefined).onPress;
  M = <to_object>(undefined).onTouchEnd;
  k = <to_object>(undefined).onTouchStart;
  B = <to_object>(undefined).pressedOpacity;
  C = <to_object>(undefined).pressedStyle;
  x = <to_object>(undefined).rippleColor;
  j = <to_object>(undefined).selected;
  O = <to_object>(undefined).selectedStyle;
  _ = <to_object>(undefined).showsPressedFeedback;
  q = <to_object>(undefined).style;
  E = {};
  <to_object>(undefined);
  {accessibilityCategory: null, accessibilityHint: null, accessibilityId: null, accessibilityLabel: null, accessibilityNavigation: null, accessibilityStateDisabled: null, accessibilityStateSelected: null, accessibilityValue: null, children: null, controlRef: null, disabled: null, disabledStyle: null, feedback: null, hoveredStyle: null, loading: null, loadingStyle: null, material: null, materialTint: null, onHover: null, onLongPress: null, onPress: null, onTouchEnd: null, onTouchStart: null, pressedOpacity: null, pressedStyle: null, rippleColor: null, selected: null, selectedStyle: null, showsPressedFeedback: null, style: null};
  goto L_5c8;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_71;
  // [栈深重同步 1 -> 0]
  if (!(m)) goto L_5d2;
  goto L_5e7;
  // [栈深重同步 1 -> 0]
  if (!(h)) goto L_5dc;
  goto L_5e7;
  // [栈深重同步 1 -> 0]
  if (!(j)) goto L_5e6;
  goto L_5e7;
  // [栈深重同步 1 -> 0]
  H = undefined;
  if (!((undefined === H))) goto L_5f5;
  goto L_643;
  // [栈深重同步 1 -> 0]
  L = r.Style.cachingMerge(q, H);
  T = this.isInteractive;
  e.beginRender(t, undefined);
  e.setAttributes(E);
  e.setAttributeStyle("style", L);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", d.artwork);
  e.renderUnnamedSlot(this);
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeRef(S);
  e.setAttributeStyle("style", d.button);
  e.setAttributeString("accessibilityId", l);
  e.setAttributeString("buttonAccessibilityId", l);
  e.setAttributeString("buttonLabel", [a, n, v].filter(function <atom:0>).join(", "));
  if (!((u == null))) goto L_984;
  u;
  e.setAttribute("buttonSelected", j);
  e.setAttribute("buttonEnabled", T);
  if (!(T)) goto L_a0b;
  goto L_a0c;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onNativePress", undefined);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=345B file=valdi_ui/src/internal/NativeAndroidButtonSurface
// locals: this
function {
  this = this;
  if (!(!this.isDestroyed())) goto L_158;
  if (!((true !== this.viewModel.disabled))) goto L_158;
  if (!((true !== this.viewModel.loading))) goto L_158;
  if (!((false !== this.viewModel.touchEnabled))) goto L_158;
  return (undefined !== this.viewModel.onPress);
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=3 bc=655B file=valdi_ui/src/internal/NativeAndroidButtonSurface
// args: require, module, exports
// locals: e, t, i, s, o, r, NativeAndroidButtonSurface, <class_fields_init>, NativeAndroidButtonSurface#1, n, d
function {
  let d;
  let n;
  let NativeAndroidButtonSurface#1;
  let r;
  let o;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NativeAndroidButtonSurface = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "7q81P0pYCHK97AZR");
  i = e.makeNodePrototype("view", undefined, "1irvBmzzm99OB8KG");
  s = e.makeNodePrototype("custom-view", ["androidClass", "com.openai.valdi.ui.ValdiNativeIconButton"], "jOHl0eM61OxYvIcs");
  o = require("valdi_core/src/Component");
  r = require("valdi_core/src/Style");
  let NativeAndroidButtonSurface;
  let <class_fields_init>;
  class NativeAndroidButtonSurface extends o.Component { ... }
  <proto:NativeAndroidButtonSurface>.onRender = function <atom:0>;
  <proto:NativeAndroidButtonSurface>.isInteractive = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeAndroidButtonSurface>;
  NativeAndroidButtonSurface = function <atom:0>;
  // close_loc <class_fields_init>
  NativeAndroidButtonSurface#1 = function <atom:0>;
  exports.NativeAndroidButtonSurface = NativeAndroidButtonSurface#1;
  n = new r.Style({position: "absolute", top: 0, right: 0, bottom: 0, left: 0});
  d = {artwork: r.Style.merge(n, new r.Style({accessibilityNavigation: "ignored", touchEnabled: false, alignItems: "center", justifyContent: "center"})), button: n};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/internal/NativeAndroidButtonSurface
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
