// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=valdi_ui/src/components/AnchoredSurface
// args: e
function {
  e.Top = 0;
  e[0] = "Top";
  e.Right = 1;
  e[1] = "Right";
  e.Bottom = 2;
  e[2] = "Bottom";
  e.Left = 3;
  e[3] = "Left";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=valdi_ui/src/components/AnchoredSurface
// args: e
function {
  e.Start = 0;
  e[0] = "Start";
  e.Center = 1;
  e[1] = "Center";
  e.End = 2;
  e[2] = "End";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=161B file=valdi_ui/src/components/AnchoredSurface
// args: e
// closure: this
function {
  if (!((this.contentHeight !== e.height))) goto L_a0;
  this.contentHeight = e.height;
  this.refreshPosition();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=113B file=valdi_ui/src/components/AnchoredSurface
// closure: this
function {
  if (!(this.viewModel.open)) goto L_70;
  this.refreshPosition();
  return;
}

// fn <atom:0>  args=1 vars=20 closure=12 cpool=0 bc=3475B file=valdi_ui/src/components/AnchoredSurface
// args: e
// locals: t, i, o, s, r, n, a, e#1, t#1, d, l, c, u, m, e#2, t#2, f, v, p
// closure: this, W, S, x, I, A, g, P, R, w, h, y
function {
  let p;
  let v;
  let f;
  let m;
  let u;
  let c;
  let l;
  let d;
  let a;
  let n;
  let r;
  let s;
  let o;
  let i;
  let t;
  t = this.viewModel.anchorRef.single();
  i = this.layerRef.single();
  if (!((this.materialRef.single() == null))) goto L_175;
  this.materialRef.single();
  o = this.surfaceRef.single();
  if (!((i == null))) goto L_181;
  i;
  goto L_1a2;
  if (!((undefined.parent == null))) goto L_1aa;
  undefined.parent;
  s = i;
  if (((undefined === t))) goto L_1b9;
  if (!((undefined === o))) goto L_1bc;
  return;
  if (!((s == null))) goto L_1c7;
  s;
  goto L_1e8;
  if (!((undefined.frame == null))) goto L_1f0;
  undefined.frame;
  r = W;
  if (!((this.viewModel.placementBounds == null))) goto L_251;
  this.viewModel.placementBounds;
  null;
  r;
  n = {x: 0, y: 0};
  a = e.width;
  if (!((n.width > 0))) goto L_550;
  let t#1;
  let e#1;
  if (!((this.viewModel.maxWidth == null))) goto L_31b;
  this.viewModel.maxWidth;
  e#1 = Math.min(S, n.width);
  if (!((this.viewModel.minWidth == null))) goto L_401;
  this.viewModel.minWidth;
  if (!((this.viewModel.width == null))) goto L_401;
  this.viewModel.width;
  t#1 = Math.min(x, e#1);
  if (!((o.getAttribute("maxWidth") !== e#1))) goto L_46c;
  o.setAttribute("maxWidth", e#1);
  if (!((o.getAttribute("minWidth") !== t#1))) goto L_4d0;
  o.setAttribute("minWidth", t#1);
  if (!((undefined !== this.viewModel.placementBounds))) goto L_54f;
  a = Math.min(a, e#1);
  Math.min(a, e#1);
  d = I(s, t);
  null;
  t.frame;
  l = {x: (d.x - n.x), y: (d.y - n.y)};
  if (!((this.viewModel.offset == null))) goto L_670;
  this.viewModel.offset;
  c = 8;
  if (!((undefined === this.viewModel.placementBounds))) goto L_6f1;
  goto L_73c;
  // [栈深重同步 5 -> 4]
  if (!((this.contentHeight == null))) goto L_73c;
  this.contentHeight;
  if (!((this.viewModel.side == null))) goto L_7af;
  this.viewModel.side;
  u = A(n, l, {width: a, height: e.height}, g.Bottom, c);
  m = e.height;
  if (!((undefined !== this.viewModel.placementBounds))) goto L_abd;
  if (!((n.height > 0))) goto L_abd;
  let t#2;
  let e#2;
  if (((u === g.Top))) goto L_91d;
  if (!((u === g.Bottom))) goto L_933;
  goto L_957;
  // [栈深重同步 7 -> 6]
  e#2 = Math.max(0, Math.min(n.height, n.height));
  this.maxHeight = e#2;
  if (!((o.getAttribute("maxHeight") !== e#2))) goto L_9d1;
  o.setAttribute("maxHeight", e#2);
  t#2 = this.surfaceRef.single();
  if (!((undefined !== t#2))) goto L_a88;
  if (!((t#2.getAttribute("maxHeight") !== e#2))) goto L_a88;
  t#2.setAttribute("maxHeight", e#2);
  m = Math.min(m, e#2);
  Math.min(m, e#2);
  if (!((this.viewModel.align == null))) goto L_b48;
  this.viewModel.align;
  f = R(n, l, {width: a, height: m}, u, w.End, c);
  v = (f.x + n.x);
  p = h.Device.isRTL();
  if (!(p)) goto L_c16;
  goto L_c19;
  // [栈深重同步 4 -> 3]
  o.setAttribute("left", v);
  if (!(p)) goto L_c50;
  goto L_c51;
  // [栈深重同步 4 -> 3]
  o.setAttribute("right", undefined);
  o.setAttribute("top", (f.y + n.y));
  if (!(this.viewModel.open)) goto L_d92;
  if (!(!this.positioned)) goto L_d92;
  if (!((a > 0))) goto L_d92;
  if (!((m > 0))) goto L_d92;
  this.positioned = true;
  this.setStateAnimated({presented: true}, y);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=13 cpool=3 bc=294B file=valdi_ui/src/components/AnchoredSurface
// locals: this, this.active_func, new.target, arguments
// closure: W, S, x, I, A, g, P, R, w, h, y, <class_fields_init>, d
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
  this.layerRef = new d.ElementRef();
  this.surfaceRef = new d.ElementRef();
  this.materialRef = new d.ElementRef();
  this.positioned = false;
  this.transition = 0;
  this.state = {presented: false};
  this.handleContentSizeChange = function <atom:0>;
  this.handleLayerLayout = function <atom:0>;
  this.handleSurfaceLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=237B file=valdi_ui/src/components/AnchoredSurface
// closure: this, e
function {
  if ((this.isDestroyed())) goto L_ec;
  if ((this.viewModel.open)) goto L_ec;
  if (((e !== this.transition))) goto L_ec;
  if (!((this.viewModel.onClosed == null))) goto L_e9;
  this.viewModel.onClosed;
  this.viewModel;
  goto L_ec;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=1 bc=1030B file=valdi_ui/src/components/AnchoredSurface
// args: e
// locals: t, i, e#1, this
// closure: b
function {
  this = this;
  let i;
  let t;
  if (!((undefined === e))) goto L_e;
  return;
  t = (e.open !== this.viewModel.open);
  if (((e.anchorRef !== this.viewModel.anchorRef))) goto L_28c;
  if (((e.side !== this.viewModel.side))) goto L_28c;
  if (((e.align !== this.viewModel.align))) goto L_28c;
  if (((e.offset !== this.viewModel.offset))) goto L_28c;
  i = (e.placementBounds !== this.viewModel.placementBounds);
  if (!(t)) goto L_38b;
  let e#1;
  this.transition = (this.transition ++);
  e#1 = (this.transition ++);
  if (!(this.viewModel.open)) goto L_367;
  this.exitAnimation = undefined;
  this.positioned = false;
  this.contentHeight = undefined;
  this.maxHeight = undefined;
  goto L_387;
  // [栈深重同步 1 -> 0]
  null;
  b;
  this.exitAnimation = {completion: function <atom:0>};
  {completion: function <atom:0>};
  // close_loc e#1
  if (!(this.viewModel.open)) goto L_405;
  if ((t)) goto L_3dc;
  if (!(i)) goto L_405;
  this.refreshPosition();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=valdi_ui/src/components/AnchoredSurface
// closure: this
function {
  return this.renderLayer();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=140B file=valdi_ui/src/components/AnchoredSurface
// locals: e, this
function {
  this = this;
  let e;
  e = this.exitAnimation;
  this.exitAnimation = undefined;
  if (!((undefined !== e))) goto L_66;
  goto L_8b;
  // [栈深重同步 1 -> 0]
  this.renderLayer();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=0 bc=720B file=valdi_ui/src/components/AnchoredSurface
// locals: i, o, s, this
// closure: N, u, e, t, _, E
function {
  this = this;
  let s;
  let o;
  let i;
  i = N(u.resolveValdiUITheme());
  o = this.viewModel.accessibilityId;
  s = this.viewModel.open;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.layerRef);
  e.setAttributeStyle("style", _.layer);
  e.setAttributeString("accessibilityId", E(o, "layer"));
  if (!(s)) goto L_1f0;
  goto L_1f5;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "ignored");
  e.setAttributeFunction("onLayout", this.handleLayerLayout);
  e.setAttribute("touchEnabled", s);
  if (!(s)) goto L_2a7;
  this.renderContents(i);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=681B file=valdi_ui/src/components/AnchoredSurface
// args: t
// locals: this
// closure: e, i, _, E
function {
  this = this;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", _.backdrop);
  e.setAttributeString("accessibilityId", E(this.viewModel.accessibilityId, "backdrop"));
  e.setAttributeString("accessibilityLabel", this.viewModel.dismissAccessibilityLabel);
  if (!(this.dismissOnBackdropPress)) goto L_1ba;
  goto L_1bf;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "ignored");
  if (!(this.dismissOnBackdropPress)) goto L_255;
  goto L_256;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", undefined);
  e.endRender();
  this.renderSurface(t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=409B file=valdi_ui/src/components/AnchoredSurface
// closure: e, s, this, _, a, h
function {
  e.beginRender(s, undefined);
  e.setAttributeRef(this.surfaceRef);
  e.setAttributeStyle("style", _.materialContent);
  e.setAttribute("maxHeight", a.maxHeight);
  e.setAttributeFunction("onContentSizeChange", h);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=6 closure=11 cpool=1 bc=2470B file=valdi_ui/src/components/AnchoredSurface
// args: t
// locals: i, n, a, h, this
// closure: e, s, _, S, x, p, m, f, v, o, r
function {
  this = this;
  let h;
  let a;
  let n;
  let i;
  i = this.viewModel.placementBounds;
  if (!((this.viewModel.maxWidth == null))) goto L_c6;
  this.viewModel.maxWidth;
  if (!((i == null))) goto L_d1;
  i;
  goto L_f2;
  if (!((undefined.width == null))) goto L_11d;
  undefined.width;
  n = Math.min(S, Number.POSITIVE_INFINITY);
  if (!(this.viewModel.open)) goto L_201;
  goto L_206;
  // [栈深重同步 2 -> 1]
  if (!((this.viewModel.minWidth == null))) goto L_2ce;
  this.viewModel.minWidth;
  if (!((this.viewModel.width == null))) goto L_2ce;
  this.viewModel.width;
  if (!((undefined === i))) goto L_2e7;
  goto L_333;
  // [栈深重同步 2 -> 1]
  if (!((this.maxHeight == null))) goto L_333;
  this.maxHeight;
  if (!(this.state.presented)) goto L_3a9;
  goto L_3aa;
  // [栈深重同步 2 -> 1]
  if (!(this.state.presented)) goto L_3f8;
  goto L_3fb;
  // [栈深重同步 2 -> 1]
  if (!(this.state.presented)) goto L_449;
  goto L_44c;
  // [栈深重同步 2 -> 1]
  a = {accessibilityId: this.viewModel.accessibilityId, accessibilityLabel: this.viewModel.accessibilityLabel, accessibilityNavigation: "ignored", maxWidth: n, minWidth: Math.min(x, n), maxHeight: i.height, onLayout: this.handleSurfaceLayout, opacity: 0, scaleX: p, scaleY: p, width: this.viewModel.width};
  if (!((undefined === this.viewModel.placementBounds))) goto L_4e6;
  goto L_509;
  // [栈深重同步 1 -> 0]
  h = this.handleContentSizeChange;
  if (((this.viewModel.material === m.ControlMaterial.Glass))) goto L_625;
  if (!((this.viewModel.material === m.ControlMaterial.Blur))) goto L_833;
  if (!(f.isNativeIOS())) goto L_833;
  e.beginComponent(v.MaterialSurface, o, undefined, undefined);
  e.setViewModelProperties(a);
  e.setViewModelProperty("controlRef", this.materialRef);
  e.setViewModelProperty("material", this.viewModel.material);
  e.setViewModelProperty("style", t.glass);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
  e.beginRender(r, undefined);
  e.setAttributeRef(this.surfaceRef);
  e.setAttributes(a);
  e.setAttributeStyle("style", t.standard);
  e.setAttributeFunction("onContentSizeChange", h);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=234B file=valdi_ui/src/components/AnchoredSurface
// locals: e, this
function {
  this = this;
  let e;
  if (!((this.materialRef.single() == null))) goto L_96;
  this.materialRef.single();
  e = this.surfaceRef.single();
  if (!((undefined !== e))) goto L_e9;
  this.handleSurfaceLayout(e.frame);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=valdi_ui/src/components/AnchoredSurface
// locals: this
function {
  this = this;
  return (false !== this.viewModel.dismissOnBackdropPress);
}

// fn R  args=6 vars=7 closure=2 cpool=0 bc=327B file=valdi_ui/src/components/AnchoredSurface
// args: e, t, i, o, s, r
// locals: n
// closure: C, H
function {
  let n;
  n = C(t, i, o, s, r);
  if (((e.width <= 0))) goto L_5d;
  if (!((e.height <= 0))) goto L_63;
  return n;
  return {x: H(n.x, 0, (e.width - i.width)), y: H(n.y, 0, (e.height - i.height))};
}

// fn A  args=5 vars=6 closure=5 cpool=0 bc=236B file=valdi_ui/src/components/AnchoredSurface
// args: e, t, i, o, s
// locals: r
// closure: B, C, w, k, P
function {
  let r;
  if (((e.width <= 0))) goto L_4f;
  if (!((e.height <= 0))) goto L_53;
  return o;
  if (!(B(e, i, C(t, i, o, w.Center, s), o))) goto L_8a;
  return o;
  r = k(o);
  if ((B(e, i, C(t, i, r, w.Center, s), r))) goto L_e4;
  if (!((P(e, t, r, s) > P(e, t, o, s)))) goto L_ea;
  return r;
  return o;
}

// fn C  args=5 vars=5 closure=2 cpool=0 bc=691B file=valdi_ui/src/components/AnchoredSurface
// args: e, t, i, o, s
// closure: g, L
function {
  if (((i === g.Left))) goto L_4c;
  if (!((i === g.Right))) goto L_182;
  if (!((i === g.Right))) goto L_c3;
  goto L_10c;
  // [栈深重同步 2 -> 1]
  return {x: ((e.x - t.width) - s), y: L(e.y, e.height, t.height, o)};
  if (!((i === g.Bottom))) goto L_264;
  goto L_2ad;
  // [栈深重同步 2 -> 1]
  return {x: L(e.x, e.width, t.width, o), y: ((e.y - t.height) - s)};
}

// fn L  args=4 vars=4 closure=1 cpool=0 bc=130B file=valdi_ui/src/components/AnchoredSurface
// args: e, t, i, o
// closure: w
function {
  if (!((o === w.Start))) goto L_29;
  return e;
  if (!((o === w.End))) goto L_55;
  return ((e + t) - i);
  (o === w.Center);
  return (e + ((t - i) / 2));
}

// fn B  args=4 vars=4 closure=1 cpool=0 bc=374B file=valdi_ui/src/components/AnchoredSurface
// args: e, t, i, o
// closure: g
function {
  if (((o === g.Left))) goto L_4c;
  if (!((o === g.Right))) goto L_e5;
  if (!((i.x >= 0))) goto L_175;
  return ((i.x + t.width) <= e.width);
  if (!((i.y >= 0))) goto L_175;
  return ((i.y + t.height) <= e.height);
}

// fn P  args=4 vars=4 closure=1 cpool=0 bc=440B file=valdi_ui/src/components/AnchoredSurface
// args: e, t, i, o
// closure: g
function {
  if (!((i === g.Top))) goto L_4c;
  return (t.y - o);
  if (!((i === g.Right))) goto L_dd;
  return (e.width - ((t.x + t.width) + o));
  if (!((i === g.Left))) goto L_128;
  return (t.x - o);
  (i === g.Bottom);
  return (e.height - ((t.y + t.height) + o));
}

// fn k  args=1 vars=1 closure=1 cpool=0 bc=292B file=valdi_ui/src/components/AnchoredSurface
// args: e
// closure: g
function {
  if (!((e === g.Top))) goto L_4a;
  return g.Bottom;
  if (!((e === g.Right))) goto L_93;
  return g.Left;
  if (!((e === g.Left))) goto L_dc;
  return g.Right;
  (e === g.Bottom);
  return g.Top;
}

// fn I  args=2 vars=2 closure=1 cpool=0 bc=382B file=valdi_ui/src/components/AnchoredSurface
// args: e, t
// closure: c
function {
  if (!((undefined === e))) goto L_9a;
  return {x: t.frame.x, y: t.frame.y};
  if (!((c.RenderedElementUtils.relativePositionTo(e, t) == null))) goto L_17d;
  c.RenderedElementUtils.relativePositionTo(e, t);
  return {x: t.frame.x, y: t.frame.y};
}

// fn H  args=3 vars=3 closure=0 cpool=0 bc=127B file=valdi_ui/src/components/AnchoredSurface
// args: e, t, i
function {
  return Math.max(t, Math.min(e, Math.max(t, i)));   // tail call
}

// fn E  args=2 vars=2 closure=0 cpool=0 bc=50B file=valdi_ui/src/components/AnchoredSurface
// args: e, t
function {
  if (!((undefined !== e))) goto L_31;
  return "".concat(e, ".", t);   // tail call
  return;
}

// fn N  args=1 vars=2 closure=2 cpool=0 bc=543B file=valdi_ui/src/components/AnchoredSurface
// args: e
// locals: t
// closure: T, l
function {
  let t;
  t = T.get(e);
  if (((undefined !== t))) goto L_21a;
  t = {standard: new l.Style({backgroundColor: e.colors.surface, borderColor: e.colors.border, borderRadius: e.shape.surfaceRadius, borderWidth: 1, boxShadow: "complex 0 8 24 rgba(0, 0, 0, 0.16)", maxHeight: "70%", position: "absolute"}), glass: new l.Style({borderRadius: e.shape.surfaceRadius, slowClipping: true, position: "absolute"})};
  {standard: new l.Style({backgroundColor: e.colors.surface, borderColor: e.colors.border, borderRadius: e.shape.surfaceRadius, borderWidth: 1, boxShadow: "complex 0 8 24 rgba(0, 0, 0, 0.16)", maxHeight: "70%", position: "absolute"}), glass: new l.Style({borderRadius: e.shape.surfaceRadius, slowClipping: true, position: "absolute"})};
  T.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=44 closure=0 cpool=24 bc=1288B file=valdi_ui/src/components/AnchoredSurface
// args: require, module, exports
// locals: e, t, i, o, s, r, n, a, h, d, l, c, u, m, f, v, g, w, p, y, b, M, x, S, AnchoredSurface, <class_fields_init>, AnchoredSurface#1, R, A, C, L, B, P, k, I, H, E, W, _, T, N
function {
  R = function R;
  A = function A;
  C = function C;
  L = function L;
  B = function B;
  P = function P;
  k = function k;
  I = function I;
  H = function H;
  E = function E;
  N = function N;
  let T;
  let _;
  let W;
  let AnchoredSurface#1;
  let S;
  let x;
  let M;
  let b;
  let y;
  let p;
  let v;
  let f;
  let m;
  let u;
  let c;
  let l;
  let d;
  let h;
  let a;
  let n;
  let r;
  let s;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AnchoredSurfaceSide = undefined;
  exports.AnchoredSurfaceAlign = undefined;
  exports.AnchoredSurface = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "EQ-VxUZ_CxM3j4L9");
  i = e.makeNodePrototype("view", undefined, "YNmnJ9QjvWfxRZOP");
  o = e.makeComponentPrototype(undefined, "CmHRdFg_Mz38SmYh");
  s = e.makeNodePrototype("scroll", undefined, "xcyS54R3hXV082Gu");
  r = e.makeNodePrototype("scroll", undefined, "IRWw72kBQuXA-nXS");
  n = require("valdi_core/src/AnimationOptions");
  a = require("valdi_core/src/Component");
  h = require("valdi_core/src/Device");
  d = require("valdi_core/src/ElementRef");
  l = require("valdi_core/src/Style");
  c = require("valdi_core/src/utils/RenderedElementUtils");
  u = require("valdi_ui_theme/src/ValdiUITheme");
  m = require("../ControlMaterial");
  f = require("../Platform");
  v = require("./MaterialSurface");
  if ((g)) goto L_268;
  g = {};
  exports.AnchoredSurfaceSide = {};
  !function <atom:0>({});
  if ((w)) goto L_281;
  w = {};
  exports.AnchoredSurfaceAlign = {};
  function <atom:0>({});
  p = 0.96;
  y = {beginFromCurrentState: true, curve: n.AnimationCurve.EaseOut, duration: 0.2};
  b = {beginFromCurrentState: true, curve: n.AnimationCurve.EaseIn, duration: 0.15, appearanceBehavior: {exitAttributes: {opacity: 0, scaleX: p, scaleY: p}}};
  M = 8;
  x = 200;
  S = 360;
  let AnchoredSurface;
  let <class_fields_init>;
  class AnchoredSurface extends a.StatefulComponent { ... }
  <proto:AnchoredSurface>.onViewModelUpdate = function <atom:0>;
  <proto:AnchoredSurface>.onRender = function <atom:0>;
  <proto:AnchoredSurface>.renderLayer = function <atom:0>;
  <proto:AnchoredSurface>.renderContents = function <atom:0>;
  <proto:AnchoredSurface>.renderSurface = function <atom:0>;
  <proto:AnchoredSurface>.refreshPosition = function <atom:0>;
  <proto:AnchoredSurface>.dismissOnBackdropPress = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AnchoredSurface>;
  AnchoredSurface = function <atom:0>;
  // close_loc <class_fields_init>
  AnchoredSurface#1 = function <atom:0>;
  exports.AnchoredSurface = AnchoredSurface#1;
  W = {x: 0, y: 0, width: 0, height: 0};
  _ = {materialContent: new l.Style({flexShrink: 1, width: "100%"}), layer: new l.Style({bottom: 0, left: 0, position: "absolute", right: 0, top: 0, zIndex: 100}), backdrop: new l.Style({backgroundColor: "rgba(0, 0, 0, 0)", bottom: 0, left: 0, position: "absolute", right: 0, top: 0})};
  T = new WeakMap();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/AnchoredSurface
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
