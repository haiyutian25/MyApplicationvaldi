// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=dil_widgets/src/widgets/ImageAttribution
// closure: this
function {
  return this.renderSource();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=86B file=dil_widgets/src/widgets/ImageAttribution
// args: e
// closure: this
function {
  this.imageWidth = e.width;
  this.updateEligibility();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=663B file=dil_widgets/src/widgets/ImageAttribution
// locals: e, t
// closure: this, f, I
function {
  let t;
  let e;
  if (!(!this.excludedByContainer)) goto L_151;
  if (!(this.viewModel.always)) goto L_a2;
  goto L_151;
  // [栈深重同步 1 -> 0]
  e = f.isDILImageAttributionWidthEligible(this.imageWidth, this.viewModel.responseContentWidth.value);
  if (!(this.viewModel.always)) goto L_1c3;
  t = (this.imageWidth < I);
  if (!((e === this.state.eligible))) goto L_25a;
  if (((t === this.state.compact))) goto L_296;
  this.setState({eligible: e, compact: t});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=3 bc=156B file=dil_widgets/src/widgets/ImageAttribution
// locals: this, this.active_func, new.target, arguments
// closure: f, I, <class_fields_init>
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
  this.state = {eligible: false, compact: false};
  this.imageWidth = 0;
  this.excludedByContainer = false;
  this.content = {renderBody: function <atom:0>};
  this.handleLayout = function <atom:0>;
  this.updateEligibility = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=1262B file=dil_widgets/src/widgets/ImageAttribution
// args: e
// locals: t, this
// closure: C, k, x, R
function {
  this = this;
  let t;
  if (!((e == null))) goto L_e;
  e;
  goto L_2f;
  if (!((undefined.source !== this.viewModel.source))) goto L_1c4;
  this.sourceAction = C.makeDILOpenURLAction(this.viewModel.source.href);
  this.sourceLabel = k.default.imageAttributionLabel(this.viewModel.source.label);
  k.default.imageAttributionLabel(this.viewModel.source.label);
  this.excludedByContainer = false;
  t = this.renderer.getComponentParent(this);
  if (!((undefined !== t))) goto L_36f;
  if (!(!this.viewModel.always)) goto L_2e2;
  if (!((t instanceof x.Pressable))) goto L_2e2;
  if ((("async_image" !== t.viewModel.interactionScope))) goto L_30e;
  if (!((t instanceof R.BaseCarousel))) goto L_31e;
  this.excludedByContainer = true;
  goto L_36f;
  t = this.renderer.getComponentParent(t);
  this.renderer.getComponentParent(t);
  goto L_219;
  if (!((e == null))) goto L_378;
  e;
  goto L_399;
  if (!((undefined.responseContentWidth !== this.viewModel.responseContentWidth))) goto L_4c7;
  if (!((this.widthSubscription == null))) goto L_40e;
  this.widthSubscription;
  goto L_432;
  undefined.unsubscribe();
  this.widthSubscription = this.viewModel.responseContentWidth.subscribe(this.updateEligibility);
  this.viewModel.responseContentWidth.subscribe(this.updateEligibility);
  this.updateEligibility();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=dil_widgets/src/widgets/ImageAttribution
// locals: this
function {
  this = this;
  if (!((this.widthSubscription == null))) goto L_2c;
  this.widthSubscription;
  goto L_50;
  undefined.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=515B file=dil_widgets/src/widgets/ImageAttribution
// locals: this
// closure: e, t, T
function {
  this = this;
  if ((this.excludedByContainer)) goto L_202;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", T.frame);
  if (!(this.viewModel.always)) goto L_119;
  goto L_11b;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("padding", 8);
  e.setAttributeFunction("onLayout", this.handleLayout);
  if (!(this.state.eligible)) goto L_1da;
  this.renderControl();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=0 bc=1392B file=dil_widgets/src/widgets/ImageAttribution
// closure: e, o, this, T, n, r, S, s, M, d, l, t
function {
  e.beginRender(o, undefined);
  if (!(this.state.compact)) goto L_c1;
  goto L_150;
  // [栈深重同步 4 -> 3]
  if (!(this.viewModel.always)) goto L_12c;
  goto L_150;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", T.touchTarget);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", T.pill);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", T.pillBlur);
  if ((S.Device.isIOS())) goto L_341;
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", T.pillTint);
  e.endRender();
  e.endRender();
  if (!(this.state.compact)) goto L_42a;
  e.beginComponent(M.Icon, d, undefined, undefined);
  goto L_51f;
  // [栈深重同步 1 -> 0]
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", T.publisher);
  e.setAttributeString("value", t.label);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=12 cpool=1 bc=394B file=dil_widgets/src/widgets/ImageAttribution
// locals: t, this
// closure: e, o, T, n, r, S, s, M, d, l, P, i
function {
  this = this;
  let t;
  t = this.viewModel.source;
  e.beginComponent(P.PopoverTrigger, i, undefined, undefined);
  e.setViewModelProperty("content", this.content);
  e.setViewModelProperty("ariaLabel", this.sourceLabel);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=1024B file=dil_widgets/src/widgets/ImageAttribution
// closure: e, h, T, A, y, t, b, m, g
function {
  e.beginRender(h, undefined);
  e.setAttributeStyle("style", T.sourceRow);
  e.beginComponent(A.Favicon, y, undefined, undefined);
  e.setViewModelProperty("url", t.href);
  e.endComponent();
  e.beginRender(b, undefined);
  e.setAttributeStyle("style", T.sourceText);
  e.beginRender(m, undefined);
  e.setAttributeStyle("style", T.sourcePublisher);
  e.setAttributeString("value", t.label);
  e.endRender();
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", T.url);
  e.setAttributeString("value", t.href);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=13 cpool=1 bc=933B file=dil_widgets/src/widgets/ImageAttribution
// locals: t, this
// closure: e, h, T, A, y, b, m, g, a, u, k, x, c
function {
  this = this;
  let t;
  t = this.viewModel.source;
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", T.sheet);
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", T.heading);
  e.setAttributeString("value", k.default.imageAttributionSource());
  e.endRender();
  e.beginComponent(x.Pressable, c, undefined, undefined);
  e.setViewModelProperty("capture", true);
  e.setViewModelProperty("ariaLabel", ((t.label + ", ") + t.href));
  e.setViewModelProperty("onClickAction", this.sourceAction);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=37 closure=0 cpool=6 bc=2653B file=dil_widgets/src/widgets/ImageAttribution
// args: require, module, exports
// locals: e, t, i, o, n, r, s, d, l, a, u, c, h, y, b, m, g, p, v, S, w, f, C, P, k, A, R, x, M, I, ImageAttribution, <class_fields_init>, ImageAttribution#1, T
function {
  let T;
  let ImageAttribution#1;
  let I;
  let M;
  let x;
  let R;
  let A;
  let k;
  let P;
  let C;
  let f;
  let w;
  let S;
  let v;
  let p;
  let g;
  let m;
  let b;
  let y;
  let h;
  let c;
  let u;
  let a;
  let l;
  let d;
  let s;
  let r;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ImageAttribution = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "HIe_UOGkjhlprtnz");
  i = e.makeComponentPrototype(undefined, "Qzd3i8v5cguX3lEI");
  o = e.makeNodePrototype("layout", undefined, "wDJws8czyhqa5Y5u");
  n = e.makeNodePrototype("view", undefined, "MjtVSOs1i4Vy7T96");
  r = e.makeNodePrototype("blur", undefined, "ooR1AZGOnih6nxbv");
  s = e.makeNodePrototype("view", undefined, "qFTeWhDnVKhQujMv");
  d = e.makeComponentPrototype(["name", "info", "size", "sm", "color", "white"], "GXI1C75ORHTxmcFr");
  l = e.makeNodePrototype("label", undefined, "4PQt1pXKq3sLkk_o");
  a = e.makeNodePrototype("layout", undefined, "JtTOaVBfP4OLkxXX");
  u = e.makeNodePrototype("label", undefined, "Z0dJhHkgTJtiorkM");
  c = e.makeComponentPrototype(["role", "link"], "683VdhslWylseseo");
  h = e.makeNodePrototype("view", undefined, "QNOAM-2_8S0khdYQ");
  y = e.makeComponentPrototype(["size", 20], "mF9Z4TnZ_7OIsCOK");
  b = e.makeNodePrototype("layout", undefined, "dNSbs0866jqG0fUZ");
  m = e.makeNodePrototype("label", undefined, "yO788ADZiDcZVzJQ");
  g = e.makeNodePrototype("label", undefined, "kBOhnSFSaufGygOv");
  p = require("dil_core/src/typography/DILDynamicFont");
  v = require("valdi_core/src/Component");
  S = require("valdi_core/src/Device");
  w = require("valdi_core/src/Style");
  f = require("../DILImageAttribution");
  C = require("../DILLink");
  P = require("../popover/PopoverTrigger");
  k = require("../Strings");
  A = require("./Favicon");
  R = require("./BaseCarousel");
  x = require("./Pressable");
  M = require("./Icon");
  I = 160;
  let ImageAttribution;
  let <class_fields_init>;
  class ImageAttribution extends v.StatefulComponent { ... }
  <proto:ImageAttribution>.onViewModelUpdate = function <atom:0>;
  <proto:ImageAttribution>.onDestroy = function <atom:0>;
  <proto:ImageAttribution>.onRender = function <atom:0>;
  <proto:ImageAttribution>.renderControl = function <atom:0>;
  <proto:ImageAttribution>.renderSource = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ImageAttribution>;
  ImageAttribution = function <atom:0>;
  // close_loc <class_fields_init>
  ImageAttribution#1 = function <atom:0>;
  exports.ImageAttribution = ImageAttribution#1;
  T = {frame: new w.Style({position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: 3, justifyContent: "flex-end", alignItems: "flex-start"}), touchTarget: new w.Style({minWidth: 44, minHeight: 44, justifyContent: "flex-end", maxWidth: "100%"}), alwaysTouchTarget: new w.Style({minWidth: 48, minHeight: 48, padding: 8, justifyContent: "center", maxWidth: "100%"}), compactTouchTarget: new w.Style({width: 48, height: 48, justifyContent: "center", alignItems: "center"}), pill: new w.Style({flexDirection: "row", alignItems: "center", minHeight: 28, padding: "6 8", borderRadius: 999, maxWidth: "100%", accessibilityNavigation: "ignored"}), pillBlur: new w.Style({blurStyle: "systemUltraThinMaterialDark", borderRadius: 999, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", touchEnabled: false, accessibilityNavigation: "ignored"}), pillTint: new w.Style({backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: 999, width: "100%", height: "100%", touchEnabled: false, accessibilityNavigation: "ignored"}), publisher: new w.Style({font: p.dynamicSemiboldSystemFontForSize(12), color: "white", numberOfLines: 1, flexShrink: 1, accessibilityNavigation: "ignored"}), sheet: new w.Style({width: "100%", padding: 20, gap: 16}), heading: new w.Style({font: p.dynamicSemiboldSystemFontForSize(20), numberOfLines: 0, color: "color-text", accessibilityCategory: "header"}), sourceRow: new w.Style({minHeight: 44, flexDirection: "row", alignItems: "center", gap: 12, padding: "8 0"}), sourceText: new w.Style({flexShrink: 1, gap: 4}), sourcePublisher: new w.Style({font: p.dynamicSemiboldSystemFontForSize(16), numberOfLines: 0, color: "color-text"}), url: new w.Style({font: p.dynamicSystemFontForSize(14), numberOfLines: 0, color: "color-text-secondary"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/ImageAttribution
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
