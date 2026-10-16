// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=dil_widgets/src/widgets/Card
// args: e
function {
  e.Default = "default";
  e.Soft = "soft";
  return;
}

// fn S  args=1 vars=1 closure=3 cpool=0 bc=46B file=dil_widgets/src/widgets/Card
// args: e
// closure: A, y, m
function {
  if (!((e === A.Soft))) goto L_2a;
  return y;
  return m;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=dil_widgets/src/widgets/Card
// closure: this
function {
  return this.pressRef.single();   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=158B file=dil_widgets/src/widgets/Card
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, n, s
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
  this.pressRef = new n.ElementRef();
  this.pressFeedback = new s.DILPressFeedback(this, function <atom:0>);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_widgets/src/widgets/Card
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=20 cpool=1 bc=1532B file=dil_widgets/src/widgets/Card
// args: i
// closure: e, this, N, t, L, s, n, a, b, c, p, A, v, D, w, f, C, r, u, l
function {
  if (!(this.viewModel.shadow)) goto L_6f;
  this.renderShadow(N);
  e.beginRender(t, "content");
  e.setAttributeStyle("style", L.content);
  e.setAttributeString("background", s);
  e.setAttributeString("backgroundColor", n);
  e.setAttribute("padding", a);
  e.setAttribute("paddingTop", b);
  e.setAttribute("paddingRight", c);
  e.setAttribute("paddingBottom", p);
  e.setAttribute("paddingLeft", A);
  if (!((v == null))) goto L_277;
  v;
  e.setAttributeString("flexDirection", "column");
  e.setAttributeString("flexWrap", D);
  e.setAttributeString("alignItems", w);
  e.setAttribute("rowGap", f);
  e.setAttribute("columnGap", C);
  if (!(this.viewModel.shadow)) goto L_3ac;
  goto L_3d0;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderColor", r.borderColor);
  if (!(this.viewModel.shadow)) goto L_445;
  goto L_469;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", r.borderWidth);
  e.setAttribute("borderRadius", N);
  e.setAttribute("gap", u.resolveOptionalDILSpacing(this.viewModel.gap));
  e.setAttributeString("justifyContent", l.resolveDILJustification(this.viewModel.justify));
  if (!((undefined === i))) goto L_5d1;
  goto L_5d3;
  // [栈深重同步 1 -> 0]
  i();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=24 closure=11 cpool=1 bc=2007B file=dil_widgets/src/widgets/Card
// locals: r, i, s, n, a, b, c, p, A, v, D, w, f, C, m, y, I, _, k, x, N, P, M, this
// closure: e, t, L, u, l, S, g, h, R, d, o
function {
  this = this;
  let M;
  let P;
  let N;
  let x;
  let k;
  let _;
  let I;
  let y;
  let m;
  let C;
  let f;
  let w;
  let D;
  let v;
  let A;
  let p;
  let c;
  let b;
  let a;
  let n;
  let s;
  let i;
  let r;
  r = S(this.viewModel.variant);
  i = this.baseViewAttributes;
  this.pressFeedback.applyAttributes(i, (undefined !== this.onTap));
  g.applyDILBackgroundAttributes(this.viewModel, i, r.background);
  if ((h.DIL_PADDING_ATTRIBUTES.apply(this.viewModel, i))) goto L_278;
  h.applyResolvedDILPaddingAttributes(i, u.resolveDILPadding(r.padding));
  if (((undefined === undefined))) goto L_577;
  s = <to_object>(undefined).background;
  n = <to_object>(undefined).backgroundColor;
  a = <to_object>(undefined).padding;
  b = <to_object>(undefined).paddingTop;
  c = <to_object>(undefined).paddingRight;
  p = <to_object>(undefined).paddingBottom;
  A = <to_object>(undefined).paddingLeft;
  v = <to_object>(undefined).flexDirection;
  D = <to_object>(undefined).flexWrap;
  w = <to_object>(undefined).alignItems;
  f = <to_object>(undefined).rowGap;
  C = <to_object>(undefined).columnGap;
  m = <to_object>(undefined).borderWidth;
  y = <to_object>(undefined).boxShadow;
  I = <to_object>(undefined).slowClipping;
  _ = <to_object>(undefined).gap;
  k = <to_object>(undefined).justifyContent;
  x = {};
  <to_object>(undefined);
  {background: null, backgroundColor: null, padding: null, paddingTop: null, paddingRight: null, paddingBottom: null, paddingLeft: null, flexDirection: null, flexWrap: null, alignItems: null, rowGap: null, columnGap: null, borderWidth: null, boxShadow: null, slowClipping: null, gap: null, justifyContent: null};
  goto L_57e;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_281;
  // [栈深重同步 1 -> 0]
  if (!((i.borderRadius == null))) goto L_5cb;
  i.borderRadius;
  N = r.radius;
  null;
  x;
  if (!((this.viewModel.width == null))) goto L_6c2;
  this.viewModel.width;
  if (!((this.viewModel.size == null))) goto L_6c1;
  this.viewModel.size;
  if (!((this.viewModel.height == null))) goto L_734;
  this.viewModel.height;
  P = {ref: this.pressRef, style: L.container, width: R["full"], height: i.height};
  M = d.createReusableCallback(function <atom:0>);
  if (!(("number" == typeof N))) goto L_7a2;
  goto L_7a3;
  // [栈深重同步 3 -> 2]
  o.renderDILRootContainer({attributes: P, previewCornerRadius: undefined, renderContent: M}, o.resolveDILRootContainerRenderer());
  return;
}

// fn <atom:0>  args=1 vars=4 closure=8 cpool=2 bc=1072B file=dil_widgets/src/widgets/Card
// args: t
// locals: o, s, d
// closure: p, e, r, L, I, b, D, i
function {
  let d;
  let s;
  let o;
  if (!((p.Device.getDisplayScale() >= 1.5))) goto L_5a;
  goto L_5b;
  // [栈深重同步 1 -> 0]
  o = 1;
  if (!(p.Device.isDesktop())) goto L_a9;
  goto L_aa;
  // [栈深重同步 1 -> 0]
  s = 2;
  if (!(p.Device.isWeb())) goto L_f8;
  goto L_fb;
  // [栈深重同步 1 -> 0]
  d = s;
  e.beginRender(r, "shadow");
  e.setAttributeStyle("style", L.shadow);
  e.setAttribute("borderRadius", I(t, -1));
  e.setAttributeString("boxShadow", "0 3 ".concat(d, " ", b.resolveDILColor(D)));
  e.endRender();
  e.beginRender(i, "outline");
  e.setAttributeStyle("style", L.outline);
  e.setAttributeNumber("top", -o);
  e.setAttributeNumber("right", -o);
  e.setAttributeNumber("bottom", -o);
  e.setAttributeNumber("left", -o);
  e.setAttribute("borderRadius", I(t, o));
  e.setAttributeNumber("borderWidth", o);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=92B file=dil_widgets/src/widgets/Card
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if ((get_super_value(this, super, "hasButtonAccessibility"))) goto L_5b;
  return ("button" === this.viewModel.role);
}

// fn I  args=2 vars=2 closure=0 cpool=0 bc=58B file=dil_widgets/src/widgets/Card
// args: e, t
function {
  if (!(("number" == typeof e))) goto L_38;
  return Math.max(0, (e + t));
  return e;
}

// fn <atom:0>  args=3 vars=34 closure=0 cpool=7 bc=1379B file=dil_widgets/src/widgets/Card
// args: require, module, exports
// locals: e, t, r, i, o, s, d, n, a, l, u, b, c, p, g, h, A, v, D, w, f, C, m, y, S, R, Card, <class_fields_init>, Card#1, I, L
function {
  S = function S;
  I = function I;
  let L;
  let Card#1;
  let R;
  let y;
  let m;
  let C;
  let f;
  let w;
  let D;
  let v;
  let h;
  let g;
  let p;
  let c;
  let b;
  let u;
  let l;
  let a;
  let n;
  let d;
  let s;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CardVariant = undefined;
  exports.DEFAULT_CARD_PADDING_UNIT = undefined;
  exports.resolveCardSurface = undefined;
  exports.Card = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "kcx0fLn5Q4WLrSn-");
  r = e.makeNodePrototype("view", undefined, "0zpLB3Yatk5_tACz");
  i = e.makeNodePrototype("view", undefined, "UPD96o384etyuaYR");
  o = require("./RootContainer");
  s = require("dil_core/src/DILPressFeedback");
  d = require("valdi_core/src/utils/Callback");
  n = require("valdi_core/src/ElementRef");
  a = require("dil_core/src/DILComponent");
  l = require("dil_core/src/layout/DILLayout");
  u = require("dil_core/src/layout/DILSpacing");
  b = require("dil_core/src/colors/DILColor");
  c = require("valdi_core/src/Style");
  p = require("valdi_core/src/Device");
  g = require("./attributes/DILBackgroundAttributes");
  h = require("./attributes/DILSpacingAttributes");
  if ((A)) goto L_1fe;
  A = {};
  exports.CardVariant = {};
  !function <atom:0>({});
  exports.DEFAULT_CARD_PADDING_UNIT = 4;
  v = 20;
  D = {light: "rgba(0, 0, 0, 0.08)", dark: "rgba(0, 0, 0, 0.2)"};
  w = "surface-elevated";
  f = "color-border";
  C = 1;
  m = {background: w, borderColor: f, borderWidth: 1, padding: exports.DEFAULT_CARD_PADDING_UNIT, radius: v};
  y = {background: "surface-tertiary", borderColor: undefined, borderWidth: 0, padding: 3, radius: 12};
  exports.resolveCardSurface = S;
  R = {sm: 360, md: 440, lg: 560, full: "100%", small: 360, medium: 440, large: 560};
  let Card;
  let <class_fields_init>;
  class Card extends a.DILComponent { ... }
  <proto:Card>.onRender = function <atom:0>;
  <proto:Card>.renderShadow = function <atom:0>;
  <proto:Card>.hasButtonAccessibility = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Card>;
  Card = function <atom:0>;
  // close_loc <class_fields_init>
  Card#1 = function <atom:0>;
  exports.Card = Card#1;
  Card#1.dilV2Properties = ["background", "disableAutoSpacing", "gap", "height", "justify", "onVisible", "onVisibleWhen", "padding", "selectable", "shadow", "size", "theme", "variant", "width"];
  // append([], 0, a.DIL_COMPONENT_PROPERTIES)
  [][a.DIL_COMPONENT_PROPERTIES] = "background";
  [][("background" ++)] = "gap";
  [][("gap" ++)] = "justify";
  [][("justify" ++)] = "padding";
  [][("padding" ++)] = "prose";
  [][("prose" ++)] = "role";
  [][("role" ++)] = "selectable";
  [][("selectable" ++)] = "shadow";
  [][("shadow" ++)] = "size";
  ("size" ++);
  Card#1.properties = [];
  L = {container: new c.Style({flexDirection: "column", maxWidth: "100%", borderWidth: 0, slowClipping: false}), content: new c.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, minWidth: 0, minHeight: 0, slowClipping: true}), shadow: new c.Style({position: "absolute", top: 1, right: 1, bottom: 1, left: 1, touchEnabled: false}), outline: new c.Style({position: "absolute", borderColor: f, touchEnabled: false})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Card
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
