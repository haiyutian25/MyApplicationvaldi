// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=267B file=valdi_ui/src/components/Button
// closure: e, i, P, this, p, h
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", P);
  if (!((true === this.viewModel.loading))) goto L_dc;
  if (!((p == null))) goto L_df;
  p;
  goto L_df;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("value", h);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=1 bc=17B file=valdi_ui/src/components/Button
// closure: e, i, P, this, p, h, l
function {
  if (!((undefined === l))) goto L_c;
  goto L_10;
  // [栈深重同步 1 -> 0]
  l();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=267B file=valdi_ui/src/components/Button
// closure: e, r, P, this, p, h
function {
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", P);
  if (!((true === this.viewModel.loading))) goto L_dc;
  if (!((p == null))) goto L_df;
  p;
  goto L_df;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("value", h);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=1 bc=17B file=valdi_ui/src/components/Button
// closure: e, r, P, this, p, h, l
function {
  if (!((undefined === l))) goto L_c;
  goto L_10;
  // [栈深重同步 1 -> 0]
  l();
  return;
}

// fn <atom:0>  args=0 vars=16 closure=11 cpool=2 bc=2451B file=valdi_ui/src/components/Button
// locals: l, s, h, S, p, b, v, g, m, f, w, M, C, P, V, this
// closure: e, i, r, d, c, a, u, n, t, y, o
function {
  this = this;
  let V;
  let P;
  let C;
  let M;
  let w;
  let f;
  let m;
  let g;
  let v;
  let b;
  let p;
  let S;
  let h;
  let s;
  let l;
  if (((undefined === undefined))) goto L_148;
  l = <to_object>(undefined).children;
  s = <to_object>(undefined).disabledLabelStyle;
  h = <to_object>(undefined).label;
  S = <to_object>(undefined).labelStyle;
  p = <to_object>(undefined).loadingLabel;
  b = <to_object>(undefined).material;
  v = {};
  <to_object>(undefined);
  {children: null, disabledLabelStyle: null, label: null, labelStyle: null, loadingLabel: null, material: null};
  goto L_16f;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_38;
  // [栈深重同步 1 -> 0]
  g = d.resolveButtonMaterial(b);
  if (!(d.isGlassMaterial(g))) goto L_217;
  if (!(c.isNativeIOS())) goto L_217;
  m = !d.isProminentGlassMaterial(g);
  f = a.resolveValdiUITheme();
  w = u(f);
  M = this.resolveSurfaceStyle(f, w, v.style, m);
  C = this.resolveContentStyle(f, w, S, m);
  if (!((true === this.viewModel.disabled))) goto L_349;
  if (!((s == null))) goto L_34c;
  s;
  goto L_34c;
  // [栈深重同步 1 -> 0]
  P = C;
  if (!((v.pressedStyle == null))) goto L_3f2;
  v.pressedStyle;
  if ((d.supportsInteractiveGlass(g))) goto L_3c9;
  if (!((undefined !== v.pressedOpacity))) goto L_3ce;
  goto L_3f2;
  // [栈深重同步 1 -> 0]
  V = w.pressedSurface;
  if (!(c.supportsNativeIOSButtons())) goto L_670;
  e.beginComponent(n.NativeButtonSurface, t, undefined, undefined);
  e.setViewModelProperties(v);
  if (!((this.viewModel.accessibilityLabel == null))) goto L_50f;
  this.viewModel.accessibilityLabel;
  e.setViewModelProperty("accessibilityLabel", h);
  if (!((v.disabledStyle == null))) goto L_589;
  v.disabledStyle;
  e.setViewModelProperty("disabledStyle", w.disabledSurface);
  e.setViewModelProperty("material", g);
  e.setViewModelProperty("pressedStyle", V);
  e.setViewModelProperty("style", M);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
  e.beginComponent(y.Pressable, o, undefined, undefined);
  e.setViewModelProperties(v);
  if (!((this.viewModel.accessibilityLabel == null))) goto L_761;
  this.viewModel.accessibilityLabel;
  e.setViewModelProperty("accessibilityLabel", h);
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  if (!((v.disabledStyle == null))) goto L_84c;
  v.disabledStyle;
  e.setViewModelProperty("disabledStyle", w.disabledSurface);
  e.setViewModelProperty("material", g);
  e.setViewModelProperty("pressedStyle", V);
  if (!((v.selectedStyle == null))) goto L_90d;
  v.selectedStyle;
  if (!(m)) goto L_90c;
  goto L_90d;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("selectedStyle", undefined);
  e.setViewModelProperty("style", M);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=4 vars=6 closure=1 cpool=0 bc=412B file=valdi_ui/src/components/Button
// args: e, t, i, o
// locals: r, this
// closure: s
function {
  this = this;
  let r;
  if (!(o)) goto L_2c;
  goto L_4e;
  // [栈深重同步 1 -> 0]
  r = t.surface;
  if (!((this.cachedTheme === e))) goto L_ed;
  if (!((this.cachedSurfaceBaseStyle === r))) goto L_ed;
  if (!((this.cachedSurfaceOverride === i))) goto L_ed;
  if (((undefined !== this.cachedSurfaceStyle))) goto L_178;
  this.cachedTheme = e;
  this.cachedSurfaceBaseStyle = r;
  this.cachedSurfaceOverride = i;
  if (!((undefined === i))) goto L_122;
  goto L_16e;
  // [栈深重同步 2 -> 1]
  this.cachedSurfaceStyle = s.Style.merge(r, i);
  s.Style.merge(r, i);
  return this.cachedSurfaceStyle;
}

// fn <atom:0>  args=4 vars=6 closure=1 cpool=0 bc=412B file=valdi_ui/src/components/Button
// args: e, t, i, o
// locals: r, this
// closure: s
function {
  this = this;
  let r;
  if (!(o)) goto L_2c;
  goto L_4e;
  // [栈深重同步 1 -> 0]
  r = t.label;
  if (!((this.cachedContentTheme === e))) goto L_ed;
  if (!((this.cachedContentBaseStyle === r))) goto L_ed;
  if (!((this.cachedContentOverride === i))) goto L_ed;
  if (((undefined !== this.cachedContentStyle))) goto L_178;
  this.cachedContentTheme = e;
  this.cachedContentBaseStyle = r;
  this.cachedContentOverride = i;
  if (!((undefined === i))) goto L_122;
  goto L_16e;
  // [栈深重同步 2 -> 1]
  this.cachedContentStyle = s.Style.merge(r, i);
  s.Style.merge(r, i);
  return this.cachedContentStyle;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_ui/src/components/Button
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

// fn u  args=1 vars=2 closure=2 cpool=0 bc=1696B file=valdi_ui/src/components/Button
// args: e
// locals: t
// closure: h, s
function {
  let t;
  t = h.get(e);
  if (((undefined !== t))) goto L_69b;
  t = {disabledLabel: new s.Style({color: e.colors.onDisabled, font: e.typography.label}), disabledSurface: new s.Style({backgroundColor: e.colors.disabled}), glassLabel: new s.Style({color: e.colors.text, font: e.typography.label}), glassSurface: new s.Style({alignItems: "center", borderRadius: e.shape.controlRadius, height: e.metrics.controlHeight, justifyContent: "center", paddingLeft: e.spacing.medium, paddingRight: e.spacing.medium}), label: new s.Style({color: e.colors.onAccent, font: e.typography.label}), pressedSurface: new s.Style({backgroundColor: e.colors.accentPressed}), surface: new s.Style({alignItems: "center", backgroundColor: e.colors.accent, borderRadius: e.shape.controlRadius, height: e.metrics.controlHeight, justifyContent: "center", paddingLeft: e.spacing.medium, paddingRight: e.spacing.medium})};
  {disabledLabel: new s.Style({color: e.colors.onDisabled, font: e.typography.label}), disabledSurface: new s.Style({backgroundColor: e.colors.disabled}), glassLabel: new s.Style({color: e.colors.text, font: e.typography.label}), glassSurface: new s.Style({alignItems: "center", borderRadius: e.shape.controlRadius, height: e.metrics.controlHeight, justifyContent: "center", paddingLeft: e.spacing.medium, paddingRight: e.spacing.medium}), label: new s.Style({color: e.colors.onAccent, font: e.typography.label}), pressedSurface: new s.Style({backgroundColor: e.colors.accentPressed}), surface: new s.Style({alignItems: "center", backgroundColor: e.colors.accent, borderRadius: e.shape.controlRadius, height: e.metrics.controlHeight, justifyContent: "center", paddingLeft: e.spacing.medium, paddingRight: e.spacing.medium})};
  h.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=5 bc=522B file=valdi_ui/src/components/Button
// args: require, module, exports
// locals: e, t, i, o, r, l, s, a, d, n, c, y, Button, <class_fields_init>, Button#1, h, u
function {
  u = function u;
  let h;
  let Button#1;
  let y;
  let c;
  let n;
  let d;
  let a;
  let s;
  let l;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Button = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "5zXUUlsaDGhpQWrb");
  i = e.makeNodePrototype("label", undefined, "0cWpXN0uLgTrkn0f");
  o = e.makeComponentPrototype(undefined, "gz0rY1wT_DF1y4Yw");
  r = e.makeNodePrototype("label", undefined, "HOi5InqrjVFRmRei");
  l = require("valdi_core/src/Component");
  s = require("valdi_core/src/Style");
  a = require("valdi_ui_theme/src/ValdiUITheme");
  d = require("../ControlMaterial");
  n = require("../internal/NativeButtonSurface");
  c = require("../Platform");
  y = require("./Pressable");
  let Button;
  let <class_fields_init>;
  class Button extends l.Component { ... }
  <proto:Button>.onRender = function <atom:0>;
  <proto:Button>.resolveSurfaceStyle = function <atom:0>;
  <proto:Button>.resolveContentStyle = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Button>;
  Button = function <atom:0>;
  // close_loc <class_fields_init>
  Button#1 = function <atom:0>;
  exports.Button = Button#1;
  h = new WeakMap();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/Button
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
