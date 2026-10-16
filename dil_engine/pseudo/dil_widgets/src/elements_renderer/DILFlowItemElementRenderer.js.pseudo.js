// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=80B file=dil_widgets/src/elements_renderer/DILFlowItemElementRenderer
// locals: this.active_func, new.target, this
// closure: e, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("flow-item", e.FlowItem);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("flow-item", e.FlowItem);
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=109B file=dil_widgets/src/elements_renderer/DILFlowItemElementRenderer
// args: e, t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, t);
  this.setViewModelProperty("defaultAspectRatio", 1);
  this.setViewModelProperty("usesV2AspectLayout", true);
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=173B file=dil_widgets/src/elements_renderer/DILFlowItemElementRenderer
// args: require, module, exports
// locals: e, t, DILFlowItemElementRenderer, <class_fields_init>, DILFlowItemElementRenderer#1
function {
  let DILFlowItemElementRenderer#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILFlowItemElementRenderer = undefined;
  e = require("../widgets/FlowItem");
  t = require("./DILComponentElementRenderer");
  let DILFlowItemElementRenderer;
  let <class_fields_init>;
  class DILFlowItemElementRenderer extends t.DILComponentElementRenderer { ... }
  <proto:DILFlowItemElementRenderer>.beginRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILFlowItemElementRenderer>;
  DILFlowItemElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILFlowItemElementRenderer#1 = function <atom:0>;
  exports.DILFlowItemElementRenderer = DILFlowItemElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILFlowItemElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
