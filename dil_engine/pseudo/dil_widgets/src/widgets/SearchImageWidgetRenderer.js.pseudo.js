// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/SearchImageWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: o, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(o.SearchImage, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(o.SearchImage, e);
  return this;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=dil_widgets/src/widgets/SearchImageWidgetRenderer
// args: e, r
// closure: this
function {
  return this.setViewModelProperty(e, r);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=1 bc=353B file=dil_widgets/src/widgets/SearchImageWidgetRenderer
// args: e, o
// locals: this, <home_object>
// closure: r, t, i
function {
  <home_object> = <special_object 4>;
  this = this;
  super["setViewModelProperties"].call(this, e, o);
  this.setViewModelProperty("upgradeToFullRes", false);
  this.setViewModelProperty("useLoadingFrame", true);
  this.setViewModelProperty("streamingAnimation", r.getDILStreamingAnimation(o));
  this.setViewModelProperty("flowGalleryContext", t.getDILFlowGalleryContext(o));
  i.applyBaseCarouselMediaItemImageSizing(this, this.props, e, o, function <atom:0>, true);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/SearchImageWidgetRenderer
// args: e
// closure: SearchImageWidgetRenderer
function {
  return new SearchImageWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=3 bc=293B file=dil_widgets/src/widgets/SearchImageWidgetRenderer
// args: require, module, exports
// locals: e, r, t, i, o, SearchImageWidgetRenderer, <class_fields_init>, SearchImageWidgetRenderer#1
function {
  let SearchImageWidgetRenderer#1;
  let o;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SearchImageWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  r = require("dil_compiler/src/DILStreamingRenderState");
  t = require("./FlowWidgetRenderer");
  i = require("./ImageWidgetRenderer");
  o = require("./SearchImage");
  let SearchImageWidgetRenderer;
  let <class_fields_init>;
  class SearchImageWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:SearchImageWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SearchImageWidgetRenderer>;
  SearchImageWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  SearchImageWidgetRenderer#1 = function <atom:0>;
  exports.SearchImageWidgetFactory = {properties: o.SearchImage.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/SearchImageWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
