// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=84B file=dil_widgets/src/widgets/BaseCarouselItemWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: r, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r.BaseCarouselItem, e, {inlineTextContent: false});
  if (!(<class_fields_init>)) goto L_4e;
  <class_fields_init>.call(this);
  new new.target(r.BaseCarouselItem, e, {inlineTextContent: false});
  return this;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=243B file=dil_widgets/src/widgets/BaseCarouselItemWidgetRenderer
// args: r, t
// locals: s, o, this, <home_object>
// closure: e
function {
  <home_object> = <special_object 4>;
  this = this;
  let o;
  let s;
  super["setViewModelProperties"].call(this, r, t);
  s = this.props.getPropertyValue("theme", r);
  if (!(("string" == typeof s))) goto L_9d;
  goto L_9e;
  // [栈深重同步 3 -> 2]
  o = e.renderStateWithDILTheme(t, undefined);
  this.setViewModelProperty("resolvedTheme", e.getDILRenderTheme(o));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/BaseCarouselItemWidgetRenderer
// args: e
// closure: BaseCarouselItemWidgetRenderer
function {
  return new BaseCarouselItemWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=269B file=dil_widgets/src/widgets/BaseCarouselItemWidgetRenderer
// args: require, module, exports
// locals: e, r, t, BaseCarouselItemWidgetRenderer, <class_fields_init>, BaseCarouselItemWidgetRenderer#1
function {
  let BaseCarouselItemWidgetRenderer#1;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BaseCarouselItemWidgetFactory = undefined;
  e = require("dil_compiler/src/DILThemeRenderState");
  r = require("./BaseCarouselItem");
  t = require("./DILFlexContainerWidgetRenderer");
  let BaseCarouselItemWidgetRenderer;
  let <class_fields_init>;
  class BaseCarouselItemWidgetRenderer extends t.DILFlexContainerWidgetRenderer { ... }
  <proto:BaseCarouselItemWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BaseCarouselItemWidgetRenderer>;
  BaseCarouselItemWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  BaseCarouselItemWidgetRenderer#1 = function <atom:0>;
  exports.BaseCarouselItemWidgetFactory = {properties: r.BaseCarouselItem.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/BaseCarouselItemWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
