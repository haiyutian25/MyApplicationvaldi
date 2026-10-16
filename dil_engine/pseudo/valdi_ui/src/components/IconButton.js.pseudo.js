// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=237B file=valdi_ui/src/components/IconButton
// closure: e, o, a, this, V, I, N, f
function {
  e.beginRender(o, undefined);
  if (!((a == null))) goto L_8b;
  a;
  e.setAttributeStyle("style", this.resolveIconStyle(V, I, N));
  if (!((f == null))) goto L_c1;
  f;
  e.setAttributeString("value", "");
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=15 cpool=1 bc=306B file=valdi_ui/src/components/IconButton
// closure: e, o, a, this, V, I, N, f, l, s, g, r, d, m, A
function {
  if (!((undefined !== l))) goto L_e;
  goto L_131;
  // [栈深重同步 1 -> 0]
  if ((s)) goto L_131;
  if (!((undefined === g))) goto L_25;
  goto L_131;
  // [栈深重同步 1 -> 0]
  e.beginRender(r, undefined);
  if (!((d == null))) goto L_a6;
  d;
  e.setAttributeStyle("style", m.image);
  e.setAttribute("src", g);
  e.setAttributeString("tint", A);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=50B file=valdi_ui/src/components/IconButton
// closure: this, V, I, N, A
function {
  this.renderContent(V, I, N, A);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=50B file=valdi_ui/src/components/IconButton
// closure: this, V, I, N, A
function {
  this.renderContent(V, I, N, A);
  return;
}

// fn <atom:0>  args=0 vars=18 closure=14 cpool=3 bc=3179B file=valdi_ui/src/components/IconButton
// locals: l, a, d, n, b, g, f, w, M, P, C, V, I, N, k, A, s, this
// closure: e, o, r, m, y, c, h, v, u, t, S, s, p, i
function {
  this = this;
  let A;
  let k;
  let N;
  let I;
  let V;
  let C;
  let P;
  let M;
  let w;
  let f;
  let g;
  let b;
  let n;
  let d;
  let a;
  let l;
  if (((undefined === undefined))) goto L_1cf;
  l = <to_object>(undefined).children;
  a = <to_object>(undefined).iconStyle;
  d = <to_object>(undefined).imageStyle;
  n = <to_object>(undefined).material;
  b = <to_object>(undefined).nativeAndroid;
  g = <to_object>(undefined).src;
  f = <to_object>(undefined).symbol;
  w = <to_object>(undefined).systemImageName;
  M = <to_object>(undefined).tintImage;
  P = {};
  <to_object>(undefined);
  {children: null, iconStyle: null, imageStyle: null, material: null, nativeAndroid: null, src: null, symbol: null, systemImageName: null, tintImage: null};
  goto L_1f6;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_3b;
  // [栈深重同步 1 -> 0]
  C = y.resolveControlMaterial(n);
  V = c.resolveValdiUITheme();
  I = h(V);
  N = this.resolveSurfaceStyle(V, I, P.style);
  if (!((P.pressedStyle == null))) goto L_346;
  P.pressedStyle;
  if ((y.supportsInteractiveGlass(C))) goto L_31d;
  if (!((undefined !== P.pressedOpacity))) goto L_322;
  goto L_346;
  // [栈深重同步 1 -> 0]
  k = I.pressedSurface;
  if (!((d == null))) goto L_353;
  d;
  goto L_395;
  if (!((undefined.attributes.tint == null))) goto L_421;
  undefined.attributes.tint;
  if (!((true === M))) goto L_420;
  if (!((a == null))) goto L_3dc;
  a;
  goto L_421;
  // [栈深重同步 1 -> 0]
  A = undefined;
  if (!(v.supportsNativeIOSButtons())) goto L_787;
  let s;
  if (!((undefined === l))) goto L_467;
  if (!((undefined === g))) goto L_467;
  s = (undefined !== w);
  e.beginComponent(u.NativeButtonSurface, t, undefined, undefined);
  e.setViewModelProperties(P);
  if (!((P.disabledStyle == null))) goto L_55b;
  P.disabledStyle;
  e.setViewModelProperty("disabledStyle", I.disabledSurface);
  if (!(s)) goto L_592;
  goto L_593;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("fallbackSymbol", undefined);
  e.setViewModelProperty("icon", true);
  e.setViewModelProperty("material", C);
  e.setViewModelProperty("pressedStyle", k);
  e.setViewModelProperty("style", N);
  if (!((a == null))) goto L_6b6;
  a;
  e.setViewModelProperty("symbolColor", this.resolveIconStyle(V, I, N).attributes.color);
  if (!(s)) goto L_72f;
  goto L_730;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("systemImageName", undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
  if (!(b)) goto L_a0f;
  if (!(v.supportsNativeAndroidIconButtons())) goto L_a0f;
  if (!((false !== P.showsPressedFeedback))) goto L_a0f;
  if (!((undefined === P.onLongPress))) goto L_a0f;
  if (!((undefined === P.onTouchStart))) goto L_a0f;
  if (!((undefined === P.onTouchEnd))) goto L_a0f;
  e.beginComponent(S.NativeAndroidButtonSurface, s, undefined, undefined);
  e.setViewModelProperties(P);
  if (!((P.disabledStyle == null))) goto L_958;
  P.disabledStyle;
  e.setViewModelProperty("disabledStyle", I.disabledSurface);
  e.setViewModelProperty("material", C);
  e.setViewModelProperty("style", N);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
  e.beginComponent(p.Pressable, i, undefined, undefined);
  e.setViewModelProperties(P);
  if (!((P.disabledStyle == null))) goto L_b01;
  P.disabledStyle;
  e.setViewModelProperty("disabledStyle", I.disabledSurface);
  e.setViewModelProperty("material", C);
  e.setViewModelProperty("pressedStyle", k);
  if (!((P.selectedStyle == null))) goto L_be5;
  P.selectedStyle;
  if (!(this.usesNativeGlass())) goto L_be4;
  goto L_be5;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("selectedStyle", undefined);
  e.setViewModelProperty("style", N);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=4 vars=10 closure=4 cpool=0 bc=770B file=valdi_ui/src/components/IconButton
// args: t, o, r, s
// locals: i, d, n, c, y, this
// closure: e, l, a, m
function {
  this = this;
  let y;
  let c;
  let n;
  let d;
  let i;
  if (((undefined === undefined))) goto L_ce;
  i = <to_object>(undefined).children;
  d = <to_object>(undefined).src;
  n = <to_object>(undefined).symbol;
  c = <to_object>(undefined).iconStyle;
  y = <to_object>(undefined).imageStyle;
  <to_object>(undefined);
  goto L_f5;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== i))) goto L_103;
  goto L_301;
  // [栈深重同步 1 -> 0]
  if (!((undefined === d))) goto L_1f7;
  e.beginRender(l, undefined);
  if (!((c == null))) goto L_193;
  c;
  e.setAttributeStyle("style", this.resolveIconStyle(t, o, r));
  if (!((n == null))) goto L_1c9;
  n;
  e.setAttributeString("value", "");
  goto L_301;
  // [栈深重同步 1 -> 0]
  e.beginRender(a, undefined);
  if (!((y == null))) goto L_278;
  y;
  e.setAttributeStyle("style", m.image);
  e.setAttribute("src", d);
  e.setAttributeString("tint", s);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=577B file=valdi_ui/src/components/IconButton
// args: e, t, o
// locals: this
function {
  this = this;
  if (!((true === this.viewModel.disabled))) goto L_6d;
  return t.disabledLabel;
  if (!(this.usesNativeGlass())) goto L_125;
  if (!((true === this.viewModel.selected))) goto L_102;
  return t.selectedGlassLabel;
  return t.glassLabel;
  if (((true === this.viewModel.selected))) goto L_1f9;
  if (!((o.attributes.backgroundColor === e.colors.accent))) goto L_21e;
  return t.accentLabel;
  return t.neutralLabel;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=448B file=valdi_ui/src/components/IconButton
// args: e, t, o
// locals: r, this
// closure: n
function {
  this = this;
  let r;
  if (!(this.usesNativeGlass())) goto L_50;
  goto L_72;
  // [栈深重同步 1 -> 0]
  r = t.surface;
  if (!((this.cachedTheme === e))) goto L_111;
  if (!((this.cachedSurfaceBaseStyle === r))) goto L_111;
  if (!((this.cachedSurfaceOverride === o))) goto L_111;
  if (((undefined !== this.cachedSurfaceStyle))) goto L_19c;
  this.cachedTheme = e;
  this.cachedSurfaceBaseStyle = r;
  this.cachedSurfaceOverride = o;
  if (!((undefined === o))) goto L_146;
  goto L_192;
  // [栈深重同步 2 -> 1]
  this.cachedSurfaceStyle = n.Style.merge(r, o);
  n.Style.merge(r, o);
  return this.cachedSurfaceStyle;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=185B file=valdi_ui/src/components/IconButton
// locals: this
// closure: y, v
function {
  this = this;
  if (!(y.isGlassMaterial(y.resolveControlMaterial(this.viewModel.material)))) goto L_b8;
  return v.isNativeIOS();
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_ui/src/components/IconButton
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

// fn h  args=1 vars=2 closure=2 cpool=0 bc=1932B file=valdi_ui/src/components/IconButton
// args: e
// locals: t
// closure: b, n
function {
  let t;
  t = b.get(e);
  if (((undefined !== t))) goto L_787;
  t = {accentLabel: new n.Style({color: e.colors.onAccent, font: e.typography.label}), disabledLabel: new n.Style({color: e.colors.onDisabled, font: e.typography.label}), disabledSurface: new n.Style({backgroundColor: e.colors.disabled}), glassLabel: new n.Style({color: e.colors.text, font: e.typography.heading}), glassSurface: new n.Style({alignItems: "center", borderRadius: e.shape.pillRadius, height: e.metrics.controlHeight, justifyContent: "center", width: e.metrics.controlHeight}), neutralLabel: new n.Style({color: e.colors.text, font: e.typography.label}), pressedSurface: new n.Style({backgroundColor: e.colors.accentPressed}), selectedGlassLabel: new n.Style({color: e.colors.accent, font: e.typography.heading}), surface: new n.Style({alignItems: "center", backgroundColor: e.colors.accent, borderRadius: e.shape.pillRadius, height: e.metrics.controlHeight, justifyContent: "center", width: e.metrics.controlHeight})};
  {accentLabel: new n.Style({color: e.colors.onAccent, font: e.typography.label}), disabledLabel: new n.Style({color: e.colors.onDisabled, font: e.typography.label}), disabledSurface: new n.Style({backgroundColor: e.colors.disabled}), glassLabel: new n.Style({color: e.colors.text, font: e.typography.heading}), glassSurface: new n.Style({alignItems: "center", borderRadius: e.shape.pillRadius, height: e.metrics.controlHeight, justifyContent: "center", width: e.metrics.controlHeight}), neutralLabel: new n.Style({color: e.colors.text, font: e.typography.label}), pressedSurface: new n.Style({backgroundColor: e.colors.accentPressed}), selectedGlassLabel: new n.Style({color: e.colors.accent, font: e.typography.heading}), surface: new n.Style({alignItems: "center", backgroundColor: e.colors.accent, borderRadius: e.shape.pillRadius, height: e.metrics.controlHeight, justifyContent: "center", width: e.metrics.controlHeight})};
  b.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=7 bc=778B file=valdi_ui/src/components/IconButton
// args: require, module, exports
// locals: e, t, o, r, s, i, l, a, d, n, c, y, u, S, v, p, IconButton, <class_fields_init>, IconButton#1, b, h, m
function {
  h = function h;
  let m;
  let b;
  let IconButton#1;
  let p;
  let v;
  let S;
  let u;
  let y;
  let c;
  let n;
  let d;
  let a;
  let l;
  let i;
  let s;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IconButton = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "0D_xSfmUECfrblkZ");
  o = e.makeNodePrototype("label", undefined, "GFXBtGpetqH0LT3S");
  r = e.makeNodePrototype("image", undefined, "ehbAte_uMLkRN4Xp");
  s = e.makeComponentPrototype(undefined, "fEDUfDjNJ-hd9wVY");
  i = e.makeComponentPrototype(undefined, "jW_KcGKYuuyoyYzs");
  l = e.makeNodePrototype("label", undefined, "Mg-fHRT9r4jgs51h");
  a = e.makeNodePrototype("image", undefined, "9-wy-_GkQGAIius5");
  d = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  c = require("valdi_ui_theme/src/ValdiUITheme");
  y = require("../ControlMaterial");
  u = require("../internal/NativeButtonSurface");
  S = require("../internal/NativeAndroidButtonSurface");
  v = require("../Platform");
  p = require("./Pressable");
  let IconButton;
  let <class_fields_init>;
  class IconButton extends d.Component { ... }
  <proto:IconButton>.onRender = function <atom:0>;
  <proto:IconButton>.renderContent = function <atom:0>;
  <proto:IconButton>.resolveIconStyle = function <atom:0>;
  <proto:IconButton>.resolveSurfaceStyle = function <atom:0>;
  <proto:IconButton>.usesNativeGlass = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:IconButton>;
  IconButton = function <atom:0>;
  // close_loc <class_fields_init>
  IconButton#1 = function <atom:0>;
  exports.IconButton = IconButton#1;
  b = new WeakMap();
  m = {image: new n.Style({flexShrink: 0, objectFit: "contain"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/IconButton
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
