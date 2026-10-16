// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=67B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e, t, r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e, t);
  if (!(<class_fields_init>)) goto L_23;
  <class_fields_init>.call(this);
  new new.target(e, t);
  this.flexComponentClass = e;
  this.options = r;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=132B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  if (!(this.options.inlineTextContent)) goto L_83;
  return {children: this.children, celScope: e, plainTextBehavior: 0, viewBacked: false};
  return;
}

// fn <atom:0>  args=2 vars=8 closure=5 cpool=0 bc=896B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e, t
// locals: i, s, a, p, this, <home_object>
// closure: r, o, l, n, g
function {
  <home_object> = <special_object 4>;
  this = this;
  let p;
  let a;
  let s;
  let i;
  super["setViewModelProperties"].call(this, e, t);
  this.setViewModelProperty("bleed", (true === this.props.getPropertyValueAsBoolean("flush", e)));
  i = this.props.getPropertyValue("theme", e);
  if (!(("string" == typeof i))) goto L_124;
  goto L_125;
  // [栈深重同步 3 -> 2]
  s = r.renderStateWithDILTheme(t, undefined);
  this.setViewModelProperty("resolvedTheme", r.getDILRenderTheme(s));
  this.setViewModelProperty("parentFlexDirection", o.getDILFlexDirection(t));
  this.setViewModelProperty("parentTableCellAlignment", l.getDILTableCellAlignment(t));
  this.setViewModelProperty("parentHasAspectRatio", o.hasDILParentAspectRatio(t));
  this.setViewModelProperty("parentHasFlexibleMainAxisSize", o.isDILParentFlexible(t));
  a = n.getDILContainerGutterContext(t);
  if (!((undefined !== a))) goto L_321;
  this.setViewModelProperty("containerGutter", a);
  p = g(t);
  if (!((p == null))) goto L_35b;
  p;
  goto L_37c;
  this.setViewModelProperty("horizontalScrollItemViewportWidth", undefined.viewportWidth);
  return;
}

// fn <atom:0>  args=2 vars=9 closure=4 cpool=0 bc=823B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e, t
// locals: r, n, l, s, p, this, <home_object>
// closure: x, i, o, a
function {
  <home_object> = <special_object 4>;
  this = this;
  let p;
  let s;
  let l;
  let n;
  let r;
  r = super["getChildRenderState"].call(this, e, t);
  r = x(r, undefined);
  x(r, undefined);
  r = i.renderStateWithDILInheritedTextStyle(r, this.props.getPropertyValue("style", e));
  i.renderStateWithDILInheritedTextStyle(r, this.props.getPropertyValue("style", e));
  r = o.renderStateWithDILFlexDirection(r, this.getFlexDirection(e));
  o.renderStateWithDILFlexDirection(r, this.getFlexDirection(e));
  n = this.props.getPropertyValue("aspectRatio", e);
  if ((("string" == typeof n))) goto L_166;
  if (!(("number" == typeof n))) goto L_19a;
  if (!((a.resolveDILAspectRatio(n) == null))) goto L_198;
  a.resolveDILAspectRatio(n);
  l = (0 > 0);
  r = o.renderStateWithDILAspectRatio(r, l);
  o.renderStateWithDILAspectRatio(r, l);
  r = o.renderStateWithDILFlexAlignment(r, this.props.getPropertyValueAsString("align", e));
  o.renderStateWithDILFlexAlignment(r, this.props.getPropertyValueAsString("align", e));
  r = o.renderStateWithDILFlexibleParent(r, this.canShrinkOnParentMainAxis(e));
  o.renderStateWithDILFlexibleParent(r, this.canShrinkOnParentMainAxis(e));
  s = this.getHorizontalScrollItemContext(e);
  if (!((undefined !== s))) goto L_2d6;
  r = x(r, s);
  x(r, s);
  p = this.getAutoSpacingContext(e);
  if (!((undefined === p))) goto L_30b;
  return r;
  return o.renderStateWithDILAutoSpacing(r, p);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=224B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// locals: this
// closure: c
function {
  this = this;
  if (!((true !== this.options.disableAutoSpacing))) goto L_df;
  return c.getDILFlexContainerAutoSpacingContext(this.props, e, this.getFlexDirection(e), this.name);   // tail call
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=200B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// locals: t, this
// closure: a
function {
  this = this;
  let t;
  t = this.props.getPropertyValue("flex", e);
  if ((("number" == typeof t))) goto L_6a;
  if (!(("string" == typeof t))) goto L_c7;
  if (!((a.resolveDILFlex(t) == null))) goto L_9e;
  a.resolveDILFlex(t);
  goto L_bf;
  if (!((undefined.shrink == null))) goto L_c5;
  undefined.shrink;
  return (0 > 0);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=148B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  return this.flexComponentClass.resolveFlexDirection(this.props.getPropertyValueAsString("direction", e));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=128B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// locals: this
// closure: L
function {
  this = this;
  if (!(this.shouldProvideHorizontalScrollItemContext(e))) goto L_7f;
  return {viewportWidth: L(this.props.getPropertyValueAsStringOrNumber("width", e))};
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=203B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  if (!(!!this.scrollsHorizontally(e))) goto L_ca;
  if (((true === this.options.alwaysProvideHorizontalScrollItemContext))) goto L_ca;
  return (true === this.props.getPropertyValueAsBoolean("scrollable", e));
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=160B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// locals: this
// closure: d
function {
  this = this;
  return ("horizontal" === d.resolveDILFlexContainerScrollAxis(this.getFlexDirection(e), this.props.getPropertyValue("style", e)));
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=363B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e, r
// locals: i, n, this, <home_object>
// closure: o, t
function {
  <home_object> = <special_object 4>;
  this = this;
  let n;
  let i;
  if (!((undefined === o.getDILAutoSpacingContext(r)))) goto L_45;
  super["renderChildren"].call(this, e, r);
  return;
  i = t.DILRenderChildCounter.fromRenderState(r);
  n = r;
  if (!((undefined === i))) goto L_f3;
  i = new t.DILRenderChildCounter();
  new t.DILRenderChildCounter();
  n = i.insertInRenderState(r);
  i.insertInRenderState(r);
  i.pushFrame();
  try { // catch -> L_13b
  super["renderChildren"].call(this, e, n);
  <?>;
  // gosub (finally 块) 321
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 321
  throw <?>;
  i.popFrame();
  // ret (finally 块) 
  return;
}

// fn x  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e, t
// closure: h
function {
  return e.withProperty(h, t);   // tail call
}

// fn I  args=1 vars=1 closure=1 cpool=0 bc=6B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// closure: x
function {
  return x(e, undefined);   // tail call
}

// fn D  args=2 vars=2 closure=1 cpool=0 bc=12B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e, t
// closure: x
function {
  return x(e, {viewportWidth: t});   // tail call
}

// fn g  args=1 vars=2 closure=2 cpool=0 bc=56B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// locals: t
// closure: h, m
function {
  let t;
  t = e.getProperty(h);
  if (!(m(t))) goto L_37;
  return t;
  return;
}

// fn S  args=1 vars=1 closure=1 cpool=0 bc=44B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// closure: g
function {
  if (!((g(e) == null))) goto L_a;
  g(e);
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.viewportWidth;
}

// fn C  args=1 vars=2 closure=1 cpool=0 bc=112B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// locals: t
// closure: g
function {
  let t;
  if (!((g(e) == null))) goto L_e;
  g(e);
  goto L_2f;
  t = undefined.fittedWidth;
  if (!(("number" == typeof t))) goto L_6e;
  if (!(Number.isFinite(t))) goto L_6e;
  return t;
  return undefined;
}

// fn m  args=1 vars=2 closure=0 cpool=0 bc=133B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// locals: t
function {
  let t;
  if (!((undefined === e))) goto L_b;
  return false;
  t = e;
  if (!(Number.isFinite(t.viewportWidth))) goto L_84;
  return (t.viewportWidth > 0);
}

// fn L  args=1 vars=3 closure=3 cpool=0 bc=248B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// locals: t, r
// closure: s, p, u
function {
  let r;
  let t;
  t = s.parseCSSValue(e);
  if (!(("number" == typeof t))) goto L_72;
  if (!(Number.isFinite(t))) goto L_72;
  if (!((t > 0))) goto L_72;
  return t;
  r = p.Device.getDisplayWidth();
  if (!(Number.isFinite(r))) goto L_f4;
  if (!((r > 0))) goto L_f4;
  return r;
  return u;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=115B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.componentClass = e;
  this.options = t;
  this.properties = this.componentClass.properties;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=79B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// locals: this
// closure: DILFlexContainerWidgetRenderer
function {
  this = this;
  return new DILFlexContainerWidgetRenderer(this.componentClass, e, this.options);
}

// fn W  args=1 vars=1 closure=2 cpool=0 bc=12B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// closure: DILFlexContainerWidgetRendererFactory, y
function {
  return new DILFlexContainerWidgetRendererFactory(e, y);
}

// fn v  args=1 vars=1 closure=2 cpool=0 bc=12B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: e
// closure: DILFlexContainerWidgetRendererFactory, F
function {
  return new DILFlexContainerWidgetRendererFactory(e, F);
}

// fn <atom:0>  args=3 vars=35 closure=0 cpool=23 bc=676B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// args: require, module, exports
// locals: e, t, r, i, o, n, l, s, a, p, d, c, h, u, DILFlexContainerWidgetRenderer, <class_fields_init>, DILFlexContainerWidgetRenderer#1, x, I, D, g, S, C, m, L, DILFlexContainerWidgetRendererFactory, <class_fields_init>#1, DILFlexContainerWidgetRendererFactory#1, y, F, W, v
function {
  x = function x;
  I = function I;
  D = function D;
  g = function g;
  S = function S;
  C = function C;
  m = function m;
  L = function L;
  W = function W;
  v = function v;
  let F;
  let y;
  let DILFlexContainerWidgetRendererFactory#1;
  let DILFlexContainerWidgetRenderer#1;
  let u;
  let h;
  let c;
  let d;
  let p;
  let a;
  let s;
  let l;
  let n;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILFlexContainerWidgetRenderer = undefined;
  exports.renderStateWithDILHorizontalScrollItemContext = undefined;
  exports.renderStateWithoutDILHorizontalScrollItemContext = undefined;
  exports.renderStateWithDILHorizontalScrollItemViewportWidth = undefined;
  exports.getDILHorizontalScrollItemViewportWidth = undefined;
  exports.getDILHorizontalScrollItemFittedWidth = undefined;
  exports.resolveDILHorizontalScrollViewportWidth = undefined;
  exports.makeDILFlexContainerWidgetFactory = undefined;
  exports.makeDILInlineTextFlexContainerWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  t = require("dil_compiler/src/DILRenderChildState");
  r = require("dil_compiler/src/DILThemeRenderState");
  i = require("dil_core/src/style/DILInheritedTextStyleRenderState");
  o = require("dil_compiler/src/DILAutoSpacingRenderState");
  n = require("dil_compiler/src/DILContainerGutterRenderState");
  l = require("dil_compiler/src/DILTableCellRenderState");
  s = require("dil_core/src/utils/AttributeParser");
  a = require("dil_core/src/layout/DILLayout");
  p = require("valdi_core/src/Device");
  d = require("./DILFlexContainer");
  c = require("./DILFlexContainerAutoSpacing");
  h = Symbol("DILHorizontalScrollItem");
  u = 390;
  let DILFlexContainerWidgetRenderer;
  let <class_fields_init>;
  class DILFlexContainerWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:DILFlexContainerWidgetRenderer>.getDILInlineTextContent = function <atom:0>;
  <proto:DILFlexContainerWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <proto:DILFlexContainerWidgetRenderer>.getChildRenderState = function <atom:0>;
  <proto:DILFlexContainerWidgetRenderer>.getAutoSpacingContext = function <atom:0>;
  <proto:DILFlexContainerWidgetRenderer>.canShrinkOnParentMainAxis = function <atom:0>;
  <proto:DILFlexContainerWidgetRenderer>.getFlexDirection = function <atom:0>;
  <proto:DILFlexContainerWidgetRenderer>.getHorizontalScrollItemContext = function <atom:0>;
  <proto:DILFlexContainerWidgetRenderer>.shouldProvideHorizontalScrollItemContext = function <atom:0>;
  <proto:DILFlexContainerWidgetRenderer>.scrollsHorizontally = function <atom:0>;
  <proto:DILFlexContainerWidgetRenderer>.renderChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILFlexContainerWidgetRenderer>;
  DILFlexContainerWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILFlexContainerWidgetRenderer#1 = function <atom:0>;
  exports.DILFlexContainerWidgetRenderer = DILFlexContainerWidgetRenderer#1;
  exports.renderStateWithDILHorizontalScrollItemContext = x;
  exports.renderStateWithoutDILHorizontalScrollItemContext = I;
  exports.renderStateWithDILHorizontalScrollItemViewportWidth = D;
  exports.getDILHorizontalScrollItemViewportWidth = S;
  exports.getDILHorizontalScrollItemFittedWidth = C;
  exports.resolveDILHorizontalScrollViewportWidth = L;
  let DILFlexContainerWidgetRendererFactory;
  let <class_fields_init>#1;
  class DILFlexContainerWidgetRendererFactory extends undefined { ... }
  <proto:DILFlexContainerWidgetRendererFactory>.create = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILFlexContainerWidgetRendererFactory>;
  DILFlexContainerWidgetRendererFactory = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILFlexContainerWidgetRendererFactory#1 = function <atom:0>;
  y = {inlineTextContent: false};
  F = {inlineTextContent: true};
  exports.makeDILFlexContainerWidgetFactory = W;
  exports.makeDILInlineTextFlexContainerWidgetFactory = v;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/DILFlexContainerWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
