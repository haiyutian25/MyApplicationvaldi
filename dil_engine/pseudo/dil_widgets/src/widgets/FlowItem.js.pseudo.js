// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=179B file=dil_widgets/src/widgets/FlowItem
// locals: this
// closure: o
function {
  this = this;
  if (!((o.resolveDILAspectRatio(this.viewModel.aspectRatio) == null))) goto L_b2;
  o.resolveDILAspectRatio(this.viewModel.aspectRatio);
  return this.viewModel.defaultAspectRatio;
}

// fn <atom:0>  args=0 vars=11 closure=13 cpool=0 bc=3496B file=dil_widgets/src/widgets/FlowItem
// locals: i, d, u, w, b, f, M, A, m, S, this
// closure: o, v, n, h, l, a, e, t, g, r, s, c, p
function {
  this = this;
  let S;
  let m;
  let A;
  let M;
  let f;
  let b;
  let w;
  let u;
  let d;
  let i;
  i = o.resolveDILBorder(this.viewModel.border);
  d = this.resolvedAspectRatio;
  u = v(this.viewModel.aspectMode, d);
  w = n.resolveGridSpanNumber(this.viewModel.rowSpan);
  if (!(this.viewModel.usesV2AspectLayout)) goto L_238;
  if (!((undefined !== d))) goto L_238;
  goto L_239;
  // [栈深重同步 1 -> 0]
  b = undefined;
  if (!((n.resolveGridSpanNumber(this.viewModel.span) == null))) goto L_2ac;
  n.resolveGridSpanNumber(this.viewModel.span);
  f = b;
  M = h(w, u, d);
  if (!(("fixed" !== this.viewModel.aspectMode))) goto L_34f;
  A = (undefined === this.viewModel.height);
  if (!(A)) goto L_359;
  goto L_3a5;
  // [栈深重同步 1 -> 0]
  if (!((this.viewModel.height == null))) goto L_3a5;
  this.viewModel.height;
  m = M;
  S = this.baseViewAttributes;
  l.DIL_BACKGROUND_ATTRIBUTES.apply(this.viewModel, S);
  a.DIL_PADDING_ATTRIBUTES.apply(this.viewModel, S);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", g.item);
  e.setAttributes(S);
  if (!(("row" === this.viewModel.direction))) goto L_5ce;
  goto L_5d3;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("flexDirection", "column");
  e.setAttributeString("alignItems", o.resolveDILAlignment(this.viewModel.align));
  e.setAttributeNumber("aspectRatio", u);
  if (!((i == null))) goto L_6f5;
  i;
  goto L_716;
  e.setAttributeString("borderColor", r.resolveDILBorderColor(undefined.color, "default"));
  if (!((i == null))) goto L_754;
  i;
  goto L_775;
  e.setAttributeString("borderStyle", undefined.style);
  if (!((i == null))) goto L_7ad;
  i;
  goto L_7ce;
  e.setAttribute("borderWidth", undefined.width);
  e.setAttribute("borderRadius", o.resolveDILRadius(this.viewModel.radius));
  e.setAttributeString("flexWrap", o.resolveDILWrap(this.viewModel.wrap));
  if (!((undefined === this.viewModel.gap))) goto L_972;
  goto L_9db;
  // [栈深重同步 4 -> 3]
  e.setAttribute("gap", s.resolveDILSpacing(this.viewModel.gap));
  e.setAttributeString("gridColumnEnd", n.resolveGridSpan(f));
  e.setAttributeString("gridRowEnd", n.resolveGridSpan(w));
  e.setAttribute("height", m);
  e.setAttributeString("justifyContent", o.resolveDILJustification(this.viewModel.justify));
  e.setAttributeString("justifySelf", c(this.viewModel.aspectMode, d));
  if (!(A)) goto L_bfa;
  goto L_bfb;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("minHeight", undefined);
  if (!((this.viewModel.width == null))) goto L_d52;
  this.viewModel.width;
  e.setAttribute("width", p(this.viewModel.aspectMode, d, u, m, this.viewModel.padding, (true === this.viewModel.usesV2AspectLayout)));
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/FlowItem
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

// fn v  args=2 vars=2 closure=0 cpool=0 bc=19B file=dil_widgets/src/widgets/FlowItem
// args: e, t
function {
  if (!(("fixed" === e))) goto L_11;
  if (!((t == null))) goto L_12;
  t;
  return 1;
  return t;
}

// fn p  args=6 vars=7 closure=1 cpool=0 bc=119B file=dil_widgets/src/widgets/FlowItem
// args: e, t, i, r, o, s
// locals: d
// closure: w
function {
  let d;
  if (!(("fixed" !== e))) goto L_1e;
  if (!(s)) goto L_18;
  if (!((undefined !== i))) goto L_18;
  return undefined;
  return "100%";
  if (!((undefined !== t))) goto L_24;
  return;
  if (((undefined === i))) goto L_33;
  if (!(("number" != typeof r))) goto L_36;
  return;
  d = w(o);
  if (!((undefined !== d))) goto L_75;
  return Math.max(0, ((r * i) - d));
  return undefined;
}

// fn c  args=2 vars=2 closure=0 cpool=0 bc=21B file=dil_widgets/src/widgets/FlowItem
// args: e, t
function {
  if (!(("fixed" === e))) goto L_14;
  if (!((undefined === t))) goto L_14;
  return "flex-start";
  return;
}

// fn h  args=3 vars=3 closure=1 cpool=0 bc=28B file=dil_widgets/src/widgets/FlowItem
// args: e, t, i
// closure: u
function {
  if (((undefined === t))) goto L_a;
  if (!((undefined === i))) goto L_1b;
  if (!((undefined !== e))) goto L_17;
  return (e * u);
  return u;
  return;
}

// fn w  args=1 vars=4 closure=2 cpool=0 bc=190B file=dil_widgets/src/widgets/FlowItem
// args: e
// locals: t, i, r
// closure: s, b
function {
  let r;
  let i;
  let t;
  t = s.resolveOptionalDILPadding(e);
  if (!((undefined === t))) goto L_39;
  return 0;
  if (!(("number" == typeof t))) goto L_4b;
  return (2 * t);
  if (!(("string" == typeof t))) goto L_58;
  return;
  i = b(t.left);
  r = b(t.right);
  if (!((undefined !== i))) goto L_bc;
  if (!((undefined !== r))) goto L_bc;
  return (i + r);
  return undefined;
}

// fn b  args=1 vars=1 closure=0 cpool=0 bc=13B file=dil_widgets/src/widgets/FlowItem
// args: e
function {
  if (!(("number" == typeof e))) goto L_c;
  return e;
  return;
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=9 bc=756B file=dil_widgets/src/widgets/FlowItem
// args: require, module, exports
// locals: e, t, i, r, o, s, d, n, l, a, u, FlowItem, <class_fields_init>, FlowItem#1, v, p, c, h, w, b, g
function {
  v = function v;
  p = function p;
  c = function c;
  h = function h;
  w = function w;
  b = function b;
  let g;
  let FlowItem#1;
  let u;
  let a;
  let l;
  let n;
  let d;
  let s;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FlowItem = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "KzS0212k1v9c1qBJ");
  i = require("dil_core/src/DILComponent");
  r = require("dil_core/src/colors/DILColor");
  o = require("dil_core/src/layout/DILLayout");
  s = require("dil_core/src/layout/DILSpacing");
  d = require("valdi_core/src/Style");
  n = require("../layout/GridLayoutAttributes");
  l = require("./attributes/DILBackgroundAttributes");
  a = require("./attributes/DILSpacingAttributes");
  u = 80;
  let FlowItem;
  let <class_fields_init>;
  class FlowItem extends i.DILComponent { ... }
  <proto:FlowItem>.resolvedAspectRatio = function <atom:0>;
  <proto:FlowItem>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FlowItem>;
  FlowItem = function <atom:0>;
  // close_loc <class_fields_init>
  FlowItem#1 = function <atom:0>;
  exports.FlowItem = FlowItem#1;
  FlowItem#1.dilV2Properties = ["align", "ariaHidden", "ariaLabel", "aspectMode", "aspectRatio", "background", "border", "clip", "direction", "disableAutoSpacing", "flex", "flush", "gap", "height", "justify", "maxHeight", "maxWidth", "minHeight", "minWidth", "padding", "radius", "role", "rowSpan", "scrollable", "span", "theme", "width", "wrap"];
  // append([], 0, i.DIL_COMPONENT_PROPERTIES)
  [][i.DIL_COMPONENT_PROPERTIES] = "align";
  [][("align" ++)] = "aspectMode";
  [][("aspectMode" ++)] = "aspectRatio";
  [][("aspectRatio" ++)] = "background";
  [][("background" ++)] = "border";
  [][("border" ++)] = "direction";
  [][("direction" ++)] = "gap";
  [][("gap" ++)] = "height";
  [][("height" ++)] = "justify";
  [][("justify" ++)] = "padding";
  [][("padding" ++)] = "radius";
  [][("radius" ++)] = "rowSpan";
  [][("rowSpan" ++)] = "span";
  [][("span" ++)] = "width";
  [][("width" ++)] = "wrap";
  ("wrap" ++);
  FlowItem#1.properties = [];
  g = {item: new d.Style({flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/FlowItem
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
