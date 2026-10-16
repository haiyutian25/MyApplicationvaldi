// fn m  args=1 vars=1 closure=2 cpool=0 bc=17B file=dil_widgets/src/widgets/BaseCarouselMediaItem
// args: e
// closure: p, n
function {
  if (!(("lg" === e))) goto L_d;
  return p;
  return n;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=225B file=dil_widgets/src/widgets/BaseCarouselMediaItem
// args: e
// locals: t
// closure: this
function {
  let t;
  t = e.width;
  if ((!Number.isFinite(t))) goto L_e0;
  if (((t <= 0))) goto L_e0;
  if (((t === this.state.mediaWidth))) goto L_e0;
  this.setState({mediaWidth: t});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=76B file=dil_widgets/src/widgets/BaseCarouselMediaItem
// locals: this, this.active_func, new.target, arguments
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
  this.state = {};
  this.handleMediaLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=0 bc=1127B file=dil_widgets/src/widgets/BaseCarouselMediaItem
// closure: e, i, o, y, a, u, n, this, r, d
function {
  e.beginRender(i, undefined);
  if (!(("lg" === o.size))) goto L_a7;
  goto L_cb;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", y.mediaFrame);
  if (!(a)) goto L_100;
  goto L_105;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("alignSelf", "flex-start");
  if (!(o.mediaOwnsRadius)) goto L_15b;
  goto L_187;
  // [栈深重同步 4 -> 3]
  if (!((o.mediaFrameRadius == null))) goto L_187;
  o.mediaFrameRadius;
  e.setAttributeNumber("borderRadius", u);
  if (!(n)) goto L_1bc;
  goto L_1e0;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onLayout", this.handleMediaLayout);
  if (!(a)) goto L_219;
  goto L_23d;
  // [栈深重同步 4 -> 3]
  e.setAttribute("width", o.mediaIntrinsicWidth);
  e.renderNamedSlot("media", this);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", y.supportingContent);
  e.setAttribute("gap", d.resolveOptionalDILSpacing(o.gap));
  if (!(n)) goto L_3c1;
  goto L_410;
  // [栈深重同步 4 -> 3]
  if (!((this.state.mediaWidth == null))) goto L_410;
  this.state.mediaWidth;
  e.setAttribute("width", "100%");
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=9 cpool=1 bc=2493B file=dil_widgets/src/widgets/BaseCarouselMediaItem
// locals: o, a, n, e, this
// closure: e, i, y, u, r, d, s, l, t
function {
  this = this;
  let n;
  let a;
  let o;
  o = this.viewModel;
  if (((null != o.width))) goto L_80;
  a = (null != o.minWidth);
  n = a;
  if (!(!n)) goto L_182;
  if (!((undefined !== o.style))) goto L_182;
  let e;
  e = {};
  if (!((this.context == null))) goto L_134;
  this.context;
  goto L_155;
  s.populateAttributesFromStyle(e, o.style, undefined.reportWarning);
  n = (null != e.width);
  (null != e.width);
  e.beginComponent(l.BaseCarouselItem, t, undefined, undefined);
  e.setViewModelProperty("aspectRatio", o.aspectRatio);
  e.setViewModelProperty("autoSpacing", o.autoSpacing);
  e.setViewModelProperty("background", o.background);
  e.setViewModelProperty("border", o.border);
  e.setViewModelProperty("carouselFittedWidth", o.carouselFittedWidth);
  e.setViewModelProperty("carouselHasAuthoredMinWidth", o.carouselHasAuthoredMinWidth);
  e.setViewModelProperty("carouselHasAuthoredWidth", o.carouselHasAuthoredWidth);
  e.setViewModelProperty("gap", o.gap);
  e.setViewModelProperty("height", o.height);
  e.setViewModelProperty("horizontalScrollItemViewportWidth", o.horizontalScrollItemViewportWidth);
  e.setViewModelProperty("maxHeight", o.maxHeight);
  e.setViewModelProperty("maxWidth", o.maxWidth);
  e.setViewModelProperty("minHeight", o.minHeight);
  e.setViewModelProperty("minWidth", o.minWidth);
  e.setViewModelProperty("onClick", o.onClick);
  e.setViewModelProperty("onClickAction", o.onClickAction);
  e.setViewModelProperty("padding", o.padding);
  e.setViewModelProperty("parentFlexDirection", o.parentFlexDirection);
  e.setViewModelProperty("radius", o.radius);
  e.setViewModelProperty("resolvedTheme", o.resolvedTheme);
  e.setViewModelProperty("style", o.style);
  e.setViewModelProperty("theme", o.theme);
  e.setViewModelProperty("variant", o.variant);
  e.setViewModelProperty("width", o.width);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=3 bc=876B file=dil_widgets/src/widgets/BaseCarouselMediaItem
// args: require, module, exports
// locals: e, t, i, r, o, d, s, a, l, n, p, u, h, m, BaseCarouselMediaItem, <class_fields_init>, BaseCarouselMediaItem#1, c, y
function {
  m = function m;
  let y;
  let c;
  let BaseCarouselMediaItem#1;
  let h;
  let u;
  let p;
  let n;
  let l;
  let a;
  let s;
  let d;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveCarouselMediaFrameHeight = undefined;
  exports.BaseCarouselMediaItem = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "wL9sZ7AlVF0hggAP");
  i = e.makeNodePrototype("view", undefined, "wLeKymM3vcxAdRCR");
  r = e.makeNodePrototype("view", undefined, "WXIHEqE6lywuLr8R");
  o = require("dil_core/src/DILComponent");
  d = require("dil_core/src/layout/DILSpacing");
  s = require("dil_core/src/style/DILStyle");
  a = require("valdi_core/src/Style");
  l = require("./BaseCarouselItem");
  n = 140;
  p = 220;
  u = 20;
  h = 4;
  exports.resolveCarouselMediaFrameHeight = m;
  let BaseCarouselMediaItem;
  let <class_fields_init>;
  class BaseCarouselMediaItem extends o.DILStatefulComponent { ... }
  <proto:BaseCarouselMediaItem>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BaseCarouselMediaItem>;
  BaseCarouselMediaItem = function <atom:0>;
  // close_loc <class_fields_init>
  BaseCarouselMediaItem#1 = function <atom:0>;
  exports.BaseCarouselMediaItem = BaseCarouselMediaItem#1;
  // append([], 0, l.BASE_CAROUSEL_ITEM_DIL_V2_PROPERTIES)
  [][l.BASE_CAROUSEL_ITEM_DIL_V2_PROPERTIES] = "media";
  [][("media" ++)] = "size";
  ("size" ++);
  BaseCarouselMediaItem#1.dilV2Properties = [];
  BaseCarouselMediaItem#1.properties = l.BaseCarouselItem.properties;
  c = {alignItems: "stretch", flexDirection: "row", flexShrink: 0, slowClipping: true};
  null;
  c;
  null;
  c;
  y = {mediaFrame: new a.Style({height: n}), largeMediaFrame: new a.Style({height: p}), supportingContent: new a.Style({flexDirection: "column", maxWidth: "100%", paddingLeft: 4, paddingRight: 4, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/BaseCarouselMediaItem
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
