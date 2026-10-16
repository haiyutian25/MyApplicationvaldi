// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=80B file=dil_widgets/src/elements_renderer/DILAnimateElementRenderer
// locals: this.active_func, new.target, this
// closure: DILAnimateElementRenderer, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("animate", DILAnimateElementRenderer.dilV2Properties);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("animate", DILAnimateElementRenderer.dilV2Properties);
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=80B file=dil_widgets/src/elements_renderer/DILAnimateElementRenderer
// locals: this.active_func, new.target, this
// closure: DILAnimateGroupElementRenderer, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("animate-group", DILAnimateGroupElementRenderer.dilV2Properties);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("animate-group", DILAnimateGroupElementRenderer.dilV2Properties);
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=80B file=dil_widgets/src/elements_renderer/DILAnimateElementRenderer
// locals: this.active_func, new.target, this
// closure: DILAnimateItemElementRenderer, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("animate-item", DILAnimateItemElementRenderer.dilV2Properties);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("animate-item", DILAnimateItemElementRenderer.dilV2Properties);
  return this;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=3 bc=461B file=dil_widgets/src/elements_renderer/DILAnimateElementRenderer
// args: require, module, exports
// locals: e, r, DILAnimateElementRenderer, <class_fields_init>, DILAnimateElementRenderer#1, DILAnimateGroupElementRenderer, <class_fields_init>#1, DILAnimateGroupElementRenderer#1, DILAnimateItemElementRenderer, <class_fields_init>#2, DILAnimateItemElementRenderer#1
function {
  let DILAnimateItemElementRenderer#1;
  let DILAnimateGroupElementRenderer#1;
  let DILAnimateElementRenderer#1;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILAnimateElementRenderer = undefined;
  exports.DILAnimateGroupElementRenderer = undefined;
  exports.DILAnimateItemElementRenderer = undefined;
  e = require("../widgets/Transition");
  r = require("./DILTransparentElementRenderer");
  let DILAnimateElementRenderer;
  let <class_fields_init>;
  class DILAnimateElementRenderer extends r.DILTransparentElementRenderer { ... }
  <class_fields_init> = undefined;
  <proto:DILAnimateElementRenderer>;
  DILAnimateElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILAnimateElementRenderer
  DILAnimateElementRenderer#1 = function <atom:0>;
  exports.DILAnimateElementRenderer = DILAnimateElementRenderer#1;
  DILAnimateElementRenderer#1.dilV2Properties = e.DIL_V2_ANIMATION_PROPERTIES;
  let DILAnimateGroupElementRenderer;
  let <class_fields_init>#1;
  class DILAnimateGroupElementRenderer extends r.DILTransparentElementRenderer { ... }
  <class_fields_init>#1 = undefined;
  <proto:DILAnimateGroupElementRenderer>;
  DILAnimateGroupElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  // close_loc DILAnimateGroupElementRenderer
  DILAnimateGroupElementRenderer#1 = function <atom:0>;
  exports.DILAnimateGroupElementRenderer = DILAnimateGroupElementRenderer#1;
  DILAnimateGroupElementRenderer#1.dilV2Properties = e.DIL_V2_ANIMATION_PROPERTIES;
  let DILAnimateItemElementRenderer;
  let <class_fields_init>#2;
  class DILAnimateItemElementRenderer extends r.DILTransparentElementRenderer { ... }
  <class_fields_init>#2 = undefined;
  <proto:DILAnimateItemElementRenderer>;
  DILAnimateItemElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>#2
  // close_loc DILAnimateItemElementRenderer
  DILAnimateItemElementRenderer#1 = function <atom:0>;
  exports.DILAnimateItemElementRenderer = DILAnimateItemElementRenderer#1;
  DILAnimateItemElementRenderer#1.dilV2Properties = [];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILAnimateElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
