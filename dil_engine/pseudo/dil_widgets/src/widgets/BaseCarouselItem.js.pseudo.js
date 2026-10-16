// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=dil_widgets/src/widgets/BaseCarouselItem
// closure: this
function {
  return this.getContentElement();   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=106B file=dil_widgets/src/widgets/BaseCarouselItem
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, o
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
  this.pressFeedback = new o.DILPressFeedback(this, function <atom:0>);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=dil_widgets/src/widgets/BaseCarouselItem
function {
  return "column";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=dil_widgets/src/widgets/BaseCarouselItem
function {
  return "column";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/BaseCarouselItem
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=82B file=dil_widgets/src/widgets/BaseCarouselItem
// locals: this
function {
  this = this;
  if (!(("elevated" !== this.variant))) goto L_51;
  return this.getSurfacePadding();   // tail call
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=187B file=dil_widgets/src/widgets/BaseCarouselItem
// locals: this
function {
  this = this;
  if (!((null != this.viewModel.padding))) goto L_8d;
  return this.viewModel.padding;
  if (!(("none" === this.variant))) goto L_b9;
  return undefined;
  return 4;
}

// fn <atom:0>  args=1 vars=3 closure=5 cpool=0 bc=1213B file=dil_widgets/src/widgets/BaseCarouselItem
// args: e
// locals: t, this
// closure: v, m, b, g, d
function {
  this = this;
  let t;
  e.ref = this.getContentRef();
  if (!((undefined !== this.onTap))) goto L_e4;
  this.pressFeedback.applyAttributes(e, !this.viewModel.scrollable);
  if (!((e.flexBasis == null))) goto L_115;
  e.flexBasis;
  e.flexBasis = "auto";
  e.flexGrow = 0;
  e.flexShrink = 0;
  if (!((e.maxWidth == null))) goto L_161;
  e.maxWidth;
  e.maxWidth = "100%";
  if (!((null == this.viewModel.minWidth))) goto L_208;
  if (!((undefined !== e.width))) goto L_208;
  e.minWidth = e.width;
  e.width;
  t = this.variant;
  if (!(("none" !== t))) goto L_4bc;
  if (!((e.borderRadius == null))) goto L_265;
  e.borderRadius;
  e.borderRadius = v;
  if (!(("soft" === t))) goto L_2b2;
  e.slowClipping = true;
  this.applyDefaultBackground(e, "surface-elevated-secondary");
  return;
  if (!(("elevated" === t))) goto L_3d2;
  m(e);
  e.slowClipping = undefined;
  this.applyDefaultBackground(e, "surface");
  if (!((e.boxShadow == null))) goto L_3c6;
  e.boxShadow;
  if ((("dark" === this.viewModel.resolvedTheme))) goto L_3bc;
  if (!(("dark" === this.viewModel.theme))) goto L_3c3;
  goto L_3c6;
  // [栈深重同步 2 -> 1]
  e.boxShadow = g;
  goto L_3df;
  // [栈深重同步 1 -> 0]
  e.slowClipping = true;
  true;
  if (!((null == this.viewModel.border))) goto L_4bb;
  if (!((e.borderColor == null))) goto L_47f;
  e.borderColor;
  e.borderColor = d.resolveDILBorderColor(undefined, "default");
  if (!((e.borderWidth == null))) goto L_4b1;
  e.borderWidth;
  e.borderWidth = 1;
  1;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=208B file=dil_widgets/src/widgets/BaseCarouselItem
// args: e, t
// locals: this
// closure: d
function {
  this = this;
  if (!((null == this.viewModel.background))) goto L_cf;
  if (!((undefined === e.background))) goto L_cf;
  if (!((undefined === e.backgroundColor))) goto L_cf;
  e.backgroundColor = d.resolveDILBackgroundColor(t);
  d.resolveDILBackgroundColor(t);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=344B file=dil_widgets/src/widgets/BaseCarouselItem
// locals: e, this
// closure: n, a, v
function {
  this = this;
  let e;
  e = {};
  if (!((this.context == null))) goto L_9b;
  this.context;
  goto L_bc;
  n.populateAttributesFromStyle(e, this.viewModel.style, undefined.reportWarning);
  if (!((a.resolveDILRadius(this.viewModel.radius) == null))) goto L_157;
  a.resolveDILRadius(this.viewModel.radius);
  if (!((e.borderRadius == null))) goto L_157;
  e.borderRadius;
  return v;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=120B file=dil_widgets/src/widgets/BaseCarouselItem
// locals: e, this
function {
  this = this;
  let e;
  e = this.viewModel.variant;
  if ((("outline" === e))) goto L_6c;
  if ((("soft" === e))) goto L_6c;
  if (!(("elevated" === e))) goto L_72;
  return e;
  return "none";
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=431B file=dil_widgets/src/widgets/BaseCarouselItem
// closure: e, i, I, o, this, r
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", I.elevatedContent);
  e.setAttributes(o);
  e.setAttribute("borderRadius", this.getSurfaceRadius());
  e.setAttribute("gap", r);
  e.setAttribute("rowGap", r);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=7 cpool=1 bc=511B file=dil_widgets/src/widgets/BaseCarouselItem
// locals: o, r, d, this, <home_object>
// closure: e, i, I, s, c, BaseCarouselItemRoot, t
function {
  <home_object> = <special_object 4>;
  this = this;
  let d;
  let r;
  let o;
  if (!(("elevated" !== this.variant))) goto L_48;
  super["onRender"].call(this);
  return;
  o = {};
  r = s.resolveOptionalDILSpacing(this.viewModel.gap);
  d = s.resolveOptionalDILPadding(this.getSurfacePadding());
  if (!((undefined !== d))) goto L_132;
  c.applyResolvedDILPaddingAttributes(o, d);
  e.beginComponent(BaseCarouselItemRoot, t, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/BaseCarouselItem
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

// fn m  args=1 vars=1 closure=0 cpool=0 bc=56B file=dil_widgets/src/widgets/BaseCarouselItem
// args: e
function {
  e.padding = undefined;
  e.paddingTop = undefined;
  e.paddingRight = undefined;
  e.paddingBottom = undefined;
  e.paddingLeft = undefined;
  return;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=13 bc=995B file=dil_widgets/src/widgets/BaseCarouselItem
// args: require, module, exports
// locals: e, t, i, o, r, d, a, s, n, l, u, c, h, p, v, g, b, BaseCarouselItemRoot, <class_fields_init>, BaseCarouselItemRoot#1, BaseCarouselItem, <class_fields_init>#1, BaseCarouselItem#1, m, I
function {
  m = function m;
  let I;
  let BaseCarouselItem#1;
  let BaseCarouselItemRoot#1;
  let b;
  let g;
  let v;
  let p;
  let h;
  let c;
  let u;
  let l;
  let n;
  let s;
  let a;
  let d;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BASE_CAROUSEL_ITEM_DIL_V2_PROPERTIES = undefined;
  exports.BaseCarouselItem = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "9dfkHHd7XsSserY4");
  i = e.makeNodePrototype("view", undefined, "toWDdP5x40OtVeoV");
  o = require("dil_core/src/DILPressFeedback");
  r = require("dil_core/src/DILComponent");
  d = require("dil_core/src/colors/DILColor");
  a = require("dil_core/src/layout/DILLayout");
  s = require("dil_core/src/layout/DILSpacing");
  n = require("dil_core/src/style/DILStyle");
  l = require("valdi_core/src/Style");
  u = require("./DILFlexContainer");
  c = require("./attributes/DILSpacingAttributes");
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  [][r.DIL_COMPONENT_PROPERTIES] = "aspectRatio";
  [][("aspectRatio" ++)] = "background";
  [][("background" ++)] = "border";
  [][("border" ++)] = "gap";
  [][("gap" ++)] = "height";
  [][("height" ++)] = "maxHeight";
  [][("maxHeight" ++)] = "maxWidth";
  [][("maxWidth" ++)] = "minHeight";
  [][("minHeight" ++)] = "minWidth";
  [][("minWidth" ++)] = "padding";
  [][("padding" ++)] = "radius";
  [][("radius" ++)] = "variant";
  [][("variant" ++)] = "width";
  [][("width" ++)] = "carouselFittedWidth";
  [][("carouselFittedWidth" ++)] = "carouselHasAuthoredWidth";
  [][("carouselHasAuthoredWidth" ++)] = "carouselHasAuthoredMinWidth";
  ("carouselHasAuthoredMinWidth" ++);
  h = [];
  exports.BASE_CAROUSEL_ITEM_DIL_V2_PROPERTIES = ["aspectRatio", "background", "border", "gap", "height", "maxHeight", "maxWidth", "minHeight", "minWidth", "padding", "radius", "variant", "width"];
  p = 4;
  v = a.resolveDILRadius("3xl");
  g = "0 2 4 rgba(0, 0, 0, 0.08)";
  b = "0 2 4 rgba(0, 0, 0, 0.2)";
  let BaseCarouselItemRoot;
  let <class_fields_init>;
  class BaseCarouselItemRoot extends u.DILFlexContainer { ... }
  function <atom:0>.resolveFlexDirection = function <atom:0>;
  <proto:BaseCarouselItemRoot>.getFlexDirection = function <atom:0>;
  <proto:BaseCarouselItemRoot>.getDefaultWidth = function <atom:0>;
  <proto:BaseCarouselItemRoot>.getPadding = function <atom:0>;
  <proto:BaseCarouselItemRoot>.getSurfacePadding = function <atom:0>;
  <proto:BaseCarouselItemRoot>.applyAdditionalContainerAttributes = function <atom:0>;
  <proto:BaseCarouselItemRoot>.applyDefaultBackground = function <atom:0>;
  <proto:BaseCarouselItemRoot>.getSurfaceRadius = function <atom:0>;
  <proto:BaseCarouselItemRoot>.variant = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BaseCarouselItemRoot>;
  BaseCarouselItemRoot = function <atom:0>;
  // close_loc <class_fields_init>
  BaseCarouselItemRoot#1 = function <atom:0>;
  BaseCarouselItemRoot#1.dilV2Properties = exports.BASE_CAROUSEL_ITEM_DIL_V2_PROPERTIES;
  BaseCarouselItemRoot#1.properties = h;
  let BaseCarouselItem;
  let <class_fields_init>#1;
  class BaseCarouselItem extends BaseCarouselItemRoot#1 { ... }
  <proto:BaseCarouselItem>.onRender = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:BaseCarouselItem>;
  BaseCarouselItem = function <atom:0>;
  // close_loc <class_fields_init>#1
  BaseCarouselItem#1 = function <atom:0>;
  exports.BaseCarouselItem = BaseCarouselItem#1;
  I = {elevatedContent: new l.Style({alignSelf: "stretch", flexDirection: "column", flexGrow: 1, minHeight: 0, minWidth: 0, slowClipping: true})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/BaseCarouselItem
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
