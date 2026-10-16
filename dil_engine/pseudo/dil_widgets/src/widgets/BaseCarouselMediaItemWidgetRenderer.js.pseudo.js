// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=146B file=dil_widgets/src/widgets/BaseCarouselMediaItemWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, i, d
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.mediaRenderers = [];
  this.componentRenderer = new i.DILValdiComponentRenderer(d.BaseCarouselMediaItem, e, true);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=158B file=dil_widgets/src/widgets/BaseCarouselMediaItemWidgetRenderer
// locals: this
function {
  this = this;
  this.themeProperty = this.props.getProperty("theme");
  this.componentRenderer.onPropsUpdated();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=55B file=dil_widgets/src/widgets/BaseCarouselMediaItemWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  if (!((e.media == null))) goto L_2d;
  e.media;
  this.mediaRenderers = [];
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=dil_widgets/src/widgets/BaseCarouselMediaItemWidgetRenderer
// locals: this
function {
  this = this;
  // append([], 0, this.mediaRenderers)
  // append([], this.mediaRenderers, this.children)
  this.children;
  return [];
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=78B file=dil_widgets/src/widgets/BaseCarouselMediaItemWidgetRenderer
// closure: this, r, h, l
function {
  return this.renderRendererList(this.mediaRenderers, r, h, l);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=77B file=dil_widgets/src/widgets/BaseCarouselMediaItemWidgetRenderer
// closure: this, r, m
function {
  this.renderRendererList(this.children, r, m, undefined);
  return;
}

// fn <atom:0>  args=2 vars=9 closure=5 cpool=2 bc=1481B file=dil_widgets/src/widgets/BaseCarouselMediaItemWidgetRenderer
// args: r, n
// locals: i, d, l, h, p, m, this
// closure: o, a, e, s, t
function {
  this = this;
  let m;
  let p;
  let h;
  let l;
  let d;
  let i;
  i = o.renderStateWithDILInheritedTextStyle(a.renderStateWithoutDILHorizontalScrollItemContext(n), this.props.getPropertyValue("style", r));
  d = this.getThemedRenderState(r, i);
  if (((null != this.props.getPropertyValue("width", r)))) goto L_17b;
  l = (null != this.props.getPropertyValue("minWidth", r));
  h = e.renderStateWithDILFlexDirection(e.renderStateWithDILAutoSpacing(d, s.DIL_ROW_AUTO_SPACING_CONTEXT), "row");
  p = this.props.getPropertyValue("gap", r);
  if (!((null == p))) goto L_2ba;
  goto L_2bb;
  // [栈深重同步 4 -> 3]
  m = e.renderStateWithDILFlexDirection(e.renderStateWithDILAutoSpacing(d, undefined), "column");
  this.componentRenderer.begin(r, n, this.getValdiComponentKey(r), this.name);
  this.componentRenderer.setViewModelProperty("horizontalScrollItemViewportWidth", a.getDILHorizontalScrollItemViewportWidth(n));
  this.componentRenderer.setViewModelProperty("parentFlexDirection", "row");
  this.componentRenderer.setViewModelProperty("resolvedTheme", t.getDILRenderTheme(d));
  if (!((0 === this.mediaRenderers.length))) goto L_506;
  goto L_508;
  // [栈深重同步 4 -> 3]
  this.componentRenderer.setNamedSlot("media", function <atom:0>);
  if (!((this.children.length > 0))) goto L_57f;
  this.componentRenderer.setUnnamedSlot(function <atom:0>);
  this.componentRenderer.end(n);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=175B file=dil_widgets/src/widgets/BaseCarouselMediaItemWidgetRenderer
// args: e, r
// locals: n, this
// closure: t
function {
  this = this;
  let n;
  if (!((undefined === this.themeProperty))) goto L_2d;
  return r;
  n = this.themeProperty.getValue(e);
  if (!(("string" == typeof n))) goto L_ab;
  goto L_ac;
  // [栈深重同步 3 -> 2]
  return t.renderStateWithDILTheme(r, undefined);   // tail call
}

// fn <atom:0>  args=4 vars=7 closure=2 cpool=0 bc=395B file=dil_widgets/src/widgets/BaseCarouselMediaItemWidgetRenderer
// args: e, t, n, i
// locals: o, d, r
// closure: r, l
function {
  let d;
  let o;
  o = r.DILRenderChildCounter.fromRenderState(n);
  d = n;
  if (!((undefined === o))) goto L_b4;
  o = new r.DILRenderChildCounter();
  new r.DILRenderChildCounter();
  d = o.insertInRenderState(n);
  o.insertInRenderState(n);
  if (!((undefined !== i))) goto L_ea;
  d = l.renderStateWithBaseCarouselMediaItemImageSizing(d, i, e);
  l.renderStateWithBaseCarouselMediaItemImageSizing(d, i, e);
  o.pushFrame();
  try { // catch -> L_15b
  let r;
  for (const r of e) {
    r.onRender(t, d);
  }
  <?>;
  // gosub (finally 块) 353
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 353
  throw <?>;
  o.popFrame();
  // ret (finally 块) 
  return;
}

// fn h  args=1 vars=1 closure=1 cpool=0 bc=47B file=dil_widgets/src/widgets/BaseCarouselMediaItemWidgetRenderer
// args: e
// closure: BaseCarouselMediaItemWidgetRenderer
function {
  if (!((e instanceof BaseCarouselMediaItemWidgetRenderer))) goto L_2d;
  return e.getCopyContentChildren();
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/BaseCarouselMediaItemWidgetRenderer
// args: e
// closure: BaseCarouselMediaItemWidgetRenderer
function {
  return new BaseCarouselMediaItemWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=9 bc=420B file=dil_widgets/src/widgets/BaseCarouselMediaItemWidgetRenderer
// args: require, module, exports
// locals: e, r, t, n, i, o, d, s, a, l, BaseCarouselMediaItemWidgetRenderer, <class_fields_init>, BaseCarouselMediaItemWidgetRenderer#1, h
function {
  h = function h;
  let BaseCarouselMediaItemWidgetRenderer#1;
  let l;
  let a;
  let s;
  let d;
  let o;
  let i;
  let n;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getBaseCarouselMediaItemCopyContentChildren = undefined;
  exports.BaseCarouselMediaItemWidgetFactory = undefined;
  e = require("dil_compiler/src/DILAutoSpacingRenderState");
  r = require("dil_compiler/src/DILRenderChildState");
  t = require("dil_compiler/src/DILThemeRenderState");
  n = require("dil_compiler/src/DILTypes");
  i = require("dil_compiler/src/DILValdiComponentRenderer");
  o = require("dil_core/src/style/DILInheritedTextStyleRenderState");
  d = require("./BaseCarouselMediaItem");
  s = require("./DILFlexContainerAutoSpacing");
  a = require("./DILFlexContainerWidgetRenderer");
  l = require("./ImageWidgetRenderer");
  let BaseCarouselMediaItemWidgetRenderer;
  let <class_fields_init>;
  class BaseCarouselMediaItemWidgetRenderer extends n.ADILWidgetRendererInternal { ... }
  <proto:BaseCarouselMediaItemWidgetRenderer>.onPropsChanged = function <atom:0>;
  <proto:BaseCarouselMediaItemWidgetRenderer>.onRenderedPropsChanged = function <atom:0>;
  <proto:BaseCarouselMediaItemWidgetRenderer>.getCopyContentChildren = function <atom:0>;
  <proto:BaseCarouselMediaItemWidgetRenderer>.onRender = function <atom:0>;
  <proto:BaseCarouselMediaItemWidgetRenderer>.getThemedRenderState = function <atom:0>;
  <proto:BaseCarouselMediaItemWidgetRenderer>.renderRendererList = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BaseCarouselMediaItemWidgetRenderer>;
  BaseCarouselMediaItemWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  BaseCarouselMediaItemWidgetRenderer#1 = function <atom:0>;
  exports.getBaseCarouselMediaItemCopyContentChildren = h;
  exports.BaseCarouselMediaItemWidgetFactory = {properties: d.BaseCarouselMediaItem.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/BaseCarouselMediaItemWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
