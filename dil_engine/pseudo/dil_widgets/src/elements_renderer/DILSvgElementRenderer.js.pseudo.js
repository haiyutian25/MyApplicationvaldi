// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=161B file=dil_widgets/src/elements_renderer/DILSvgElementRenderer
// locals: this.active_func, new.target, this
// closure: r, <class_fields_init>, e
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("svg", r.NativeSvg);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("svg", r.NativeSvg);
  this.childrenMode = e.DILElementChildrenMode.OpaqueTree;
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=215B file=dil_widgets/src/elements_renderer/DILSvgElementRenderer
// args: e, r
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, r);
  this.setViewModelProperty("isSourceStreaming", r.isSourceStreaming);
  if (!((true === r.isModelWrittenDIL))) goto L_d3;
  this.setViewModelProperty("coalesceRasterization", r.isSourceStreaming);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=54B file=dil_widgets/src/elements_renderer/DILSvgElementRenderer
// args: e, r
// locals: this
function {
  this = this;
  if (!((r == null))) goto L_32;
  r;
  this.setViewModelProperty("opaqueChildren", []);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=193B file=dil_widgets/src/elements_renderer/DILSvgElementRenderer
// args: require, module, exports
// locals: e, r, t, DILSvgElementRenderer, <class_fields_init>, DILSvgElementRenderer#1
function {
  let DILSvgElementRenderer#1;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSvgElementRenderer = undefined;
  e = require("dil_renderer/src/DILRenderer");
  r = require("../widgets/NativeSvg");
  t = require("./DILComponentElementRenderer");
  let DILSvgElementRenderer;
  let <class_fields_init>;
  class DILSvgElementRenderer extends t.DILComponentElementRenderer { ... }
  <proto:DILSvgElementRenderer>.beginRender = function <atom:0>;
  <proto:DILSvgElementRenderer>.setChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSvgElementRenderer>;
  DILSvgElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILSvgElementRenderer#1 = function <atom:0>;
  exports.DILSvgElementRenderer = DILSvgElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILSvgElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
