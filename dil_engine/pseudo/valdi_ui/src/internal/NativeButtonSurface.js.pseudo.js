// fn <atom:0>  args=0 vars=38 closure=6 cpool=0 bc=3991B file=valdi_ui/src/internal/NativeButtonSurface
// locals: i, l, n, u, c, d, b, S, v, y, h, g, m, A, C, p, N, f, k, P, M, G, R, T, q, B, I, _, w, F, x, O, E, U, V, j, D, this
// closure: r, s, o, a, t, e
function {
  this = this;
  let D;
  let j;
  let V;
  let U;
  let E;
  let O;
  let x;
  let F;
  let w;
  let _;
  let I;
  let B;
  let q;
  let T;
  let R;
  let G;
  let M;
  let P;
  let k;
  let f;
  let N;
  let p;
  let C;
  let A;
  let m;
  let g;
  let h;
  let y;
  let v;
  let S;
  let b;
  let d;
  let c;
  let u;
  let n;
  let l;
  let i;
  if (((undefined === undefined))) goto L_526;
  i = <to_object>(undefined).backgroundColor;
  l = <to_object>(undefined).children;
  n = <to_object>(undefined).controlRef;
  u = <to_object>(undefined).disabled;
  c = <to_object>(undefined).disabledStyle;
  d = <to_object>(undefined).fallbackSymbol;
  b = <to_object>(undefined).feedback;
  S = <to_object>(undefined).hoveredStyle;
  v = <to_object>(undefined).icon;
  y = <to_object>(undefined).loading;
  h = <to_object>(undefined).loadingStyle;
  g = <to_object>(undefined).material;
  m = <to_object>(undefined).materialTint;
  A = <to_object>(undefined).onHover;
  C = <to_object>(undefined).onLongPress;
  p = <to_object>(undefined).onPress;
  N = <to_object>(undefined).onTouchEnd;
  f = <to_object>(undefined).onTouchStart;
  k = <to_object>(undefined).pressedOpacity;
  P = <to_object>(undefined).pressedStyle;
  M = <to_object>(undefined).rippleColor;
  G = <to_object>(undefined).selected;
  R = <to_object>(undefined).selectedStyle;
  T = <to_object>(undefined).showsPressedFeedback;
  q = <to_object>(undefined).style;
  B = <to_object>(undefined).symbolColor;
  I = <to_object>(undefined).systemImageName;
  _ = {};
  <to_object>(undefined);
  {backgroundColor: null, children: null, controlRef: null, disabled: null, disabledStyle: null, fallbackSymbol: null, feedback: null, hoveredStyle: null, icon: null, loading: null, loadingStyle: null, material: null, materialTint: null, onHover: null, onLongPress: null, onPress: null, onTouchEnd: null, onTouchStart: null, pressedOpacity: null, pressedStyle: null, rippleColor: null, selected: null, selectedStyle: null, showsPressedFeedback: null, style: null, symbolColor: null, systemImageName: null};
  goto L_54d;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_7a;
  // [栈深重同步 1 -> 0]
  if (!((true !== u))) goto L_588;
  if (!((true !== y))) goto L_588;
  w = (false !== _.touchEnabled);
  if (!((true === y))) goto L_597;
  goto L_5b2;
  // [栈深重同步 1 -> 0]
  if (!((true === u))) goto L_5a4;
  goto L_5b2;
  // [栈深重同步 1 -> 0]
  if (!((true === G))) goto L_5b1;
  goto L_5b2;
  // [栈深重同步 1 -> 0]
  F = undefined;
  if (!((undefined === F))) goto L_5c0;
  goto L_60e;
  // [栈深重同步 1 -> 0]
  x = r.Style.cachingMerge(q, F);
  if (!((_.borderRadius == null))) goto L_67e;
  _.borderRadius;
  O = x.attributes.borderRadius;
  if (((true === v))) goto L_6f5;
  E = (O === s.resolveValdiUITheme().shape.pillRadius);
  U = o.isGlassMaterial(g);
  if (!(U)) goto L_783;
  if (!((m == null))) goto L_7d0;
  m;
  if (!((i == null))) goto L_7d0;
  i;
  goto L_7d0;
  // [栈深重同步 1 -> 0]
  if (!((i == null))) goto L_7d0;
  i;
  V = x.attributes.backgroundColor;
  if (!(a.supportsNativeIOSClearGlassButtons())) goto L_89a;
  if (((g === o.ControlMaterial.ClearGlass))) goto L_893;
  goto L_89b;
  // [栈深重同步 1 -> 0]
  j = {};
  if (!(a.supportsNativeIOSProminentGlassButtons())) goto L_8f4;
  goto L_8f5;
  // [栈深重同步 1 -> 0]
  D = {};
  t.beginRender(e, undefined);
  t.setAttributeRef(n);
  t.setAttributes(_);
  t.setAttributes(j);
  t.setAttributes(D);
  t.setAttribute("accessibilityCategory", "button");
  if (!((this.viewModel.accessibilityStateDisabled == null))) goto L_a77;
  this.viewModel.accessibilityStateDisabled;
  t.setAttribute("accessibilityStateDisabled", !w);
  if (!((this.viewModel.accessibilityStateSelected == null))) goto L_af0;
  this.viewModel.accessibilityStateSelected;
  t.setAttribute("accessibilityStateSelected", G);
  t.setAttribute("buttonEnabled", w);
  t.setAttribute("buttonGlass", U);
  t.setAttribute("buttonIcon", E);
  t.setAttributeNumber("buttonPressedOpacity", k);
  if (!((P == null))) goto L_be8;
  P;
  goto L_c2a;
  t.setAttributeString("buttonPressedSurface", undefined.attributes.backgroundColor);
  t.setAttribute("buttonSelected", (true === G));
  if (!((R == null))) goto L_c95;
  R;
  goto L_cd7;
  t.setAttributeString("buttonSelectedSurface", undefined.attributes.backgroundColor);
  t.setAttributeString("buttonSurface", V);
  if (!(U)) goto L_d3c;
  goto L_d3f;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("backgroundColor", i);
  t.setAttributeString("color", B);
  t.setAttributeString("fallbackSymbol", d);
  t.setAttribute("iosClass", "ValdiNativeButton");
  if (!(w)) goto L_e08;
  goto L_e09;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onLongPress", undefined);
  if (!(w)) goto L_e40;
  goto L_e41;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onTap", undefined);
  if (!(w)) goto L_e78;
  goto L_e79;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onTouchEnd", undefined);
  if (!(w)) goto L_eb0;
  goto L_eb1;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onTouchStart", undefined);
  if (!(U)) goto L_f0e;
  goto L_f11;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", x);
  t.setAttributeString("systemImageName", I);
  t.renderUnnamedSlot(this);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=232B file=valdi_ui/src/internal/NativeButtonSurface
// args: t
// locals: this
// closure: r
function {
  this = this;
  if (!((this.cachedSourceStyle === t))) goto L_4e;
  if (((undefined !== this.cachedNativeStyle))) goto L_c4;
  this.cachedSourceStyle = t;
  null;
  t.attributes;
  this.cachedNativeStyle = new r.Style({background: undefined, backgroundColor: undefined});
  new r.Style({background: undefined, backgroundColor: undefined});
  return this.cachedNativeStyle;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_ui/src/internal/NativeButtonSurface
// locals: this.active_func, new.target, arguments, this
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
  return this;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=3 bc=317B file=valdi_ui/src/internal/NativeButtonSurface
// args: require, module, exports
// locals: t, e, i, r, s, o, a, NativeButtonSurface, <class_fields_init>, NativeButtonSurface#1
function {
  let NativeButtonSurface#1;
  let a;
  let o;
  let s;
  let r;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NativeButtonSurface = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("custom-view", undefined, "JftmavNqgQzZF0cC");
  i = require("valdi_core/src/Component");
  r = require("valdi_core/src/Style");
  s = require("valdi_ui_theme/src/ValdiUITheme");
  o = require("../ControlMaterial");
  a = require("../Platform");
  let NativeButtonSurface;
  let <class_fields_init>;
  class NativeButtonSurface extends i.Component { ... }
  <proto:NativeButtonSurface>.onRender = function <atom:0>;
  <proto:NativeButtonSurface>.resolveNativeStyle = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeButtonSurface>;
  NativeButtonSurface = function <atom:0>;
  // close_loc <class_fields_init>
  NativeButtonSurface#1 = function <atom:0>;
  exports.NativeButtonSurface = NativeButtonSurface#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/internal/NativeButtonSurface
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
