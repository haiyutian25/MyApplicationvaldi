// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=111B file=dil_widgets/src/elements_renderer/DILRenderedPropElementRenderer
// locals: this.active_func, new.target, this
// closure: e, DILRenderedPropElementRenderer, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e.DIL_RENDERED_PROP_ELEMENT_TYPE, DILRenderedPropElementRenderer.dilV2Properties);
  if (!(<class_fields_init>)) goto L_69;
  <class_fields_init>.call(this);
  new new.target(e.DIL_RENDERED_PROP_ELEMENT_TYPE, DILRenderedPropElementRenderer.dilV2Properties);
  return this;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=219B file=dil_widgets/src/elements_renderer/DILRenderedPropElementRenderer
// args: require, module, exports
// locals: e, r, DILRenderedPropElementRenderer, <class_fields_init>, DILRenderedPropElementRenderer#1
function {
  let DILRenderedPropElementRenderer#1;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILRenderedPropElementRenderer = undefined;
  e = require("dil_renderer/src/DILElement");
  r = require("./DILTransparentElementRenderer");
  let DILRenderedPropElementRenderer;
  let <class_fields_init>;
  class DILRenderedPropElementRenderer extends r.DILTransparentElementRenderer { ... }
  <class_fields_init> = undefined;
  <proto:DILRenderedPropElementRenderer>;
  DILRenderedPropElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILRenderedPropElementRenderer
  DILRenderedPropElementRenderer#1 = function <atom:0>;
  exports.DILRenderedPropElementRenderer = DILRenderedPropElementRenderer#1;
  DILRenderedPropElementRenderer#1.dilV2Properties = [e.DIL_RENDERED_PROP_NAME];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILRenderedPropElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
