// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=79B file=dil_widgets/src/widgets/BaseCarouselWidgetRenderer
// args: r
// locals: this.active_func, new.target, this
// closure: e, o, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e.BaseCarousel, r, o);
  if (!(<class_fields_init>)) goto L_49;
  <class_fields_init>.call(this);
  new new.target(e.BaseCarousel, r, o);
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=404B file=dil_widgets/src/widgets/BaseCarouselWidgetRenderer
// args: e, r
// locals: this, <home_object>
// closure: t
function {
  <home_object> = <special_object 4>;
  this = this;
  super["setViewModelProperties"].call(this, e, r);
  this.setViewModelProperty("extendViewportIntoGutter", (true === r.getProperty(t.VIDEO_CAROUSEL_VIEWPORT_GUTTER)));
  this.setViewModelProperty("scrollable", true);
  this.setViewModelProperty("scrollableContentGutterMode", "scrollable-margin");
  if (!((undefined === this.props.getPropertyValue("flush", e)))) goto L_193;
  this.setViewModelProperty("bleed", true);
  this.setViewModelProperty("flush", true);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/BaseCarouselWidgetRenderer
// args: e
// closure: BaseCarouselWidgetRenderer
function {
  return new BaseCarouselWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=3 bc=296B file=dil_widgets/src/widgets/BaseCarouselWidgetRenderer
// args: require, module, exports
// locals: e, r, t, o, BaseCarouselWidgetRenderer, <class_fields_init>, BaseCarouselWidgetRenderer#1
function {
  let BaseCarouselWidgetRenderer#1;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BaseCarouselWidgetFactory = undefined;
  e = require("./BaseCarousel");
  r = require("./DILFlexContainerWidgetRenderer");
  t = require("./VideoCarouselViewportRenderState");
  o = {inlineTextContent: false, alwaysProvideHorizontalScrollItemContext: true, disableAutoSpacing: true};
  let BaseCarouselWidgetRenderer;
  let <class_fields_init>;
  class BaseCarouselWidgetRenderer extends r.DILFlexContainerWidgetRenderer { ... }
  <proto:BaseCarouselWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BaseCarouselWidgetRenderer>;
  BaseCarouselWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  BaseCarouselWidgetRenderer#1 = function <atom:0>;
  exports.BaseCarouselWidgetFactory = {properties: e.BaseCarousel.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/BaseCarouselWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
