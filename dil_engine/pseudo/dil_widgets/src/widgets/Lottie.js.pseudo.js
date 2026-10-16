// fn <atom:0>  args=0 vars=5 closure=7 cpool=0 bc=2807B file=dil_widgets/src/widgets/Lottie
// locals: s, a, n, h, this
// closure: d, l, o, t, e, r, i
function {
  this = this;
  let h;
  let n;
  let a;
  let s;
  s = this.animationData;
  a = d(this.viewModel, s);
  if (!(l(s))) goto L_66;
  goto L_b0;
  // [栈深重同步 1 -> 0]
  if (!((this.viewModel.advanceRate == null))) goto L_b0;
  this.viewModel.advanceRate;
  n = 0;
  h = {};
  if (!((undefined !== this.viewModel.autoSpacing))) goto L_169;
  o.applyDILAutoSpacingAttributes(h, this.viewModel.autoSpacing);
  t.beginRender(e, undefined);
  if (!(this.viewModel.alt)) goto L_20c;
  goto L_20d;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityCategory", undefined);
  t.setAttributeString("accessibilityLabel", this.viewModel.alt);
  if (!(this.viewModel.alt)) goto L_2f8;
  goto L_2fd;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityNavigation", "ignored");
  t.setAttributeNumber("advanceRate", n);
  t.setAttributeNumber("animationEndTime", this.viewModel.animationEndTime);
  t.setAttributeNumber("animationStartTime", this.viewModel.animationStartTime);
  t.setAttributeNumber("aspectRatio", a.aspectRatio);
  t.setAttribute("borderRadius", r.resolveDILRadius(this.viewModel.radius));
  t.setAttributeNumber("currentTime", this.viewModel.currentTime);
  t.setAttribute("height", a.height);
  if (!((this.viewModel.loop == null))) goto L_630;
  this.viewModel.loop;
  t.setAttribute("loop", false);
  t.setAttribute("maxHeight", this.viewModel.maxHeight);
  t.setAttribute("maxWidth", this.viewModel.maxWidth);
  t.setAttribute("marginLeft", h.marginLeft);
  t.setAttribute("marginTop", h.marginTop);
  t.setAttribute("minHeight", this.viewModel.minHeight);
  t.setAttribute("minWidth", this.viewModel.minWidth);
  if (!((this.viewModel.fit == null))) goto L_911;
  this.viewModel.fit;
  t.setAttributeString("objectFit", "contain");
  if (((undefined !== this.viewModel.radius))) goto L_989;
  t.setAttribute("slowClipping", undefined);
  t.setAttribute("src", this.resolveSource());
  if (!((this.context == null))) goto L_a58;
  this.context;
  goto L_a79;
  t.setAttribute("allowedUrlRegexes", i.getDILAssetURLRegexes(undefined.assetURLAuthorization));
  t.setAttribute("width", a.width);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=190B file=dil_widgets/src/widgets/Lottie
// locals: t, e, this
// closure: h, c
function {
  this = this;
  let t;
  t = this.viewModel.src;
  if (!(h(t))) goto L_54;
  return t;
  if (!(c(t))) goto L_bd;
  let e;
  if (!((this.viewModel.theme == null))) goto L_ae;
  this.viewModel.theme;
  e = t["light"];
  if (!(h(e))) goto L_bb;
  return e;
  return undefined;
  return;
}

// fn <atom:0>  args=0 vars=6 closure=3 cpool=0 bc=1010B file=dil_widgets/src/widgets/Lottie
// locals: t, e, i, s, o, this
// closure: c, u, a
function {
  this = this;
  let o;
  let s;
  let i;
  let e;
  let t;
  t = this.viewModel.src;
  if (!(!c(t))) goto L_11f;
  if (!(!this.isAnimationSourceAllowed(t))) goto L_8f;
  return;
  this.cachedLightAsset = u(t, this.cachedLightAsset);
  this.cachedDarkAsset = undefined;
  this.cachedThemedAsset = undefined;
  return this.cachedLightAsset.asset;
  if ((!this.isAnimationSourceAllowed(t.light))) goto L_1b9;
  if (!(!this.isAnimationSourceAllowed(t.dark))) goto L_1bc;
  return;
  this.cachedLightAsset = u(t.light, this.cachedLightAsset);
  this.cachedDarkAsset = u(t.dark, this.cachedDarkAsset);
  e = this.cachedLightAsset.asset;
  i = this.cachedDarkAsset.asset;
  s = this.cachedThemedAsset;
  if (!((undefined !== s))) goto L_392;
  if (!((s.light === e))) goto L_392;
  if (!((s.dark === i))) goto L_392;
  return s.asset;
  o = a.makeThemableAsset({light: e, dark: i});
  this.cachedThemedAsset = {light: e, dark: i, asset: o};
  return o;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=125B file=dil_widgets/src/widgets/Lottie
// args: t
// locals: this
// closure: h, i
function {
  this = this;
  if ((!!h(t))) goto L_7c;
  if (!((this.context == null))) goto L_5a;
  this.context;
  goto L_7b;
  return i.isDILAssetSourceAllowed(t, undefined.assetURLAuthorization);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Lottie
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

// fn d  args=2 vars=8 closure=1 cpool=0 bc=600B file=dil_widgets/src/widgets/Lottie
// args: <atom:0>, s
// locals: t, e, i, o, a, n
// closure: r
function {
  t = <to_object>(<atom:0>).width;
  e = <to_object>(<atom:0>).height;
  i = <to_object>(<atom:0>).aspectRatio;
  <to_object>(<atom:0>);
  let n;
  let a;
  let o;
  o = {width: t, height: e, aspectRatio: r.resolveDILAspectRatio(i)};
  if (!((undefined !== t))) goto L_b8;
  if (((undefined !== e))) goto L_ee;
  if (((undefined !== t))) goto L_c6;
  if (!((undefined !== e))) goto L_f4;
  if (!((undefined !== o.aspectRatio))) goto L_f4;
  return o;
  if (!((s == null))) goto L_fd;
  s;
  goto L_11e;
  a = undefined.w;
  if (!((s == null))) goto L_129;
  s;
  goto L_14a;
  n = undefined.h;
  if ((("number" != typeof a))) goto L_253;
  if ((!Number.isFinite(a))) goto L_253;
  if (((a <= 0))) goto L_253;
  if ((("number" != typeof n))) goto L_253;
  if ((!Number.isFinite(n))) goto L_253;
  if (((n <= 0))) goto L_253;
  if (((undefined !== t))) goto L_1f2;
  if (!((undefined !== e))) goto L_20a;
  o.aspectRatio = (a / n);
  goto L_253;
  // [栈深重同步 1 -> 0]
  o.width = a;
  if (!((undefined === o.aspectRatio))) goto L_253;
  o.height = n;
  n;
  return o;
}

// fn h  args=1 vars=1 closure=0 cpool=0 bc=106B file=dil_widgets/src/widgets/Lottie
// args: t
function {
  if (!(("object" == typeof t))) goto L_69;
  if (!((null !== t))) goto L_69;
  if (!(("layers" in t))) goto L_69;
  return Array.isArray(t.layers);
}

// fn c  args=1 vars=1 closure=1 cpool=0 bc=46B file=dil_widgets/src/widgets/Lottie
// args: t
// closure: h
function {
  if (!(("object" == typeof t))) goto L_2d;
  if (!((null !== t))) goto L_2d;
  if (!(("light" in t))) goto L_2d;
  if (!(("dark" in t))) goto L_2d;
  return !h(t);
}

// fn u  args=2 vars=3 closure=3 cpool=0 bc=244B file=dil_widgets/src/widgets/Lottie
// args: t, e
// locals: i
// closure: h, a, s
function {
  let i;
  if (!(!h(t))) goto L_17;
  return {json: undefined, asset: t};
  i = JSON.stringify(t);
  if (!((undefined !== e))) goto L_71;
  if (!((e.json === i))) goto L_71;
  return e;
  return {json: i, asset: a.makeAssetFromBytes(new s.TextEncoder().encode(i))};
}

// fn l  args=1 vars=3 closure=0 cpool=0 bc=130B file=dil_widgets/src/widgets/Lottie
// args: t
// locals: e, i
function {
  let i;
  let e;
  if (!((t == null))) goto L_f;
  t;
  goto L_30;
  e = undefined.ip;
  if (!((t == null))) goto L_3a;
  t;
  goto L_5b;
  i = undefined.op;
  if (!(("number" == typeof e))) goto L_81;
  if (!(("number" == typeof i))) goto L_81;
  return ((i - e) <= 1);
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=10 bc=460B file=dil_widgets/src/widgets/Lottie
// args: require, module, exports
// locals: t, e, i, s, o, r, a, n, Lottie, <class_fields_init>, Lottie#1, d, h, c, u, l
function {
  d = function d;
  h = function h;
  c = function c;
  u = function u;
  l = function l;
  let Lottie#1;
  let n;
  let a;
  let r;
  let o;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Lottie = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("animatedimage", undefined, "hDZu_j0oWaLi0tO7");
  i = require("dil_core/src/DILAssetURLAuthorization");
  s = require("coreutils/src/unicode/TextCoding");
  o = require("dil_core/src/layout/DILAutoSpacingAttributes");
  r = require("dil_core/src/layout/DILLayout");
  a = require("valdi_core/src/Asset");
  n = require("valdi_core/src/Component");
  let Lottie;
  let <class_fields_init>;
  class Lottie extends n.Component { ... }
  <proto:Lottie>.onRender = function <atom:0>;
  <proto:Lottie>.animationData = function <atom:0>;
  <proto:Lottie>.resolveSource = function <atom:0>;
  <proto:Lottie>.isAnimationSourceAllowed = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Lottie>;
  Lottie = function <atom:0>;
  // close_loc <class_fields_init>
  Lottie#1 = function <atom:0>;
  exports.Lottie = Lottie#1;
  Lottie#1.dilV2Properties = ["advanceRate", "alt", "animationEndTime", "animationStartTime", "aspectRatio", "currentTime", "fit", "height", "loop", "maxHeight", "maxWidth", "minHeight", "minWidth", "radius", "src", "width"];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Lottie
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
