// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/FlowWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: r, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r.Flow, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(r.Flow, e);
  return this;
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=0 bc=294B file=dil_widgets/src/widgets/FlowWidgetRenderer
// args: e, r
// locals: o, l, i, this, <home_object>
// closure: t
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  let l;
  let o;
  o = super["getChildRenderState"].call(this, e, r);
  l = this.props.getPropertyValueAsArray("galleryImages", e);
  if (!((undefined === l))) goto L_9e;
  return o.withProperty(t, undefined);   // tail call
  i = {images: l, lightboxSource: this.props.getPropertyValueAsString("galleryLightboxSource", e)};
  return o.withProperty(t, i);   // tail call
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_widgets/src/widgets/FlowWidgetRenderer
// args: e
// closure: t
function {
  return e.getProperty(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/FlowWidgetRenderer
// args: e
// closure: FlowWidgetRenderer
function {
  return new FlowWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=4 bc=300B file=dil_widgets/src/widgets/FlowWidgetRenderer
// args: require, module, exports
// locals: e, r, t, FlowWidgetRenderer, <class_fields_init>, FlowWidgetRenderer#1, o
function {
  o = function o;
  let FlowWidgetRenderer#1;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getDILFlowGalleryContext = undefined;
  exports.FlowWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  r = require("./Flow");
  t = Symbol("DILFlowGallery");
  let FlowWidgetRenderer;
  let <class_fields_init>;
  class FlowWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:FlowWidgetRenderer>.getChildRenderState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FlowWidgetRenderer>;
  FlowWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  FlowWidgetRenderer#1 = function <atom:0>;
  exports.getDILFlowGalleryContext = o;
  exports.FlowWidgetFactory = {properties: r.Flow.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/FlowWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
