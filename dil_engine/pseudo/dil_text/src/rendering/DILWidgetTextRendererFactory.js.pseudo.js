// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=71B file=dil_text/src/rendering/DILWidgetTextRendererFactory
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.element = e;
  this.properties = e.properties;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=79B file=dil_text/src/rendering/DILWidgetTextRendererFactory
// args: t, r
// locals: this
// closure: e
function {
  this = this;
  return new e.DILTextWidgetRenderer(this.element, t, r);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=126B file=dil_text/src/rendering/DILWidgetTextRendererFactory
// args: require, module, exports
// locals: e, DILWidgetTextRendererFactory, <class_fields_init>, DILWidgetTextRendererFactory#1
function {
  let DILWidgetTextRendererFactory#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILWidgetTextRendererFactory = undefined;
  e = require("./DILTextWidgetRenderer");
  let DILWidgetTextRendererFactory;
  let <class_fields_init>;
  class DILWidgetTextRendererFactory extends undefined { ... }
  <proto:DILWidgetTextRendererFactory>.create = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILWidgetTextRendererFactory>;
  DILWidgetTextRendererFactory = function <atom:0>;
  // close_loc <class_fields_init>
  DILWidgetTextRendererFactory#1 = function <atom:0>;
  exports.DILWidgetTextRendererFactory = DILWidgetTextRendererFactory#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/rendering/DILWidgetTextRendererFactory
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
