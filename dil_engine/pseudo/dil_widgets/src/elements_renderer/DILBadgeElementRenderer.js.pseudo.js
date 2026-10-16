// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=85B file=dil_widgets/src/elements_renderer/DILBadgeElementRenderer
// locals: this.active_func, new.target, this
// closure: t, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("badge", t.Badge, "label");
  if (!(<class_fields_init>)) goto L_4f;
  <class_fields_init>.call(this);
  new new.target("badge", t.Badge, "label");
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=236B file=dil_widgets/src/elements_renderer/DILBadgeElementRenderer
// args: t, r
// locals: n, this, <home_object>
// closure: e
function {
  <home_object> = <special_object 4>;
  this = this;
  let n;
  super["beginRender"].call(this, t, r);
  n = r.renderState;
  if (!((undefined !== n))) goto L_eb;
  this.setViewModelProperty("parentFlexDirection", e.getDILFlexDirection(n));
  this.setViewModelProperty("parentFlexAlignment", e.getDILFlexAlignment(n));
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=185B file=dil_widgets/src/elements_renderer/DILBadgeElementRenderer
// args: require, module, exports
// locals: e, t, r, DILBadgeElementRenderer, <class_fields_init>, DILBadgeElementRenderer#1
function {
  let DILBadgeElementRenderer#1;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILBadgeElementRenderer = undefined;
  e = require("dil_compiler/src/DILAutoSpacingRenderState");
  t = require("../widgets/Badge");
  r = require("./DILComponentContentElementRenderer");
  let DILBadgeElementRenderer;
  let <class_fields_init>;
  class DILBadgeElementRenderer extends r.DILComponentContentElementRenderer { ... }
  <proto:DILBadgeElementRenderer>.beginRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILBadgeElementRenderer>;
  DILBadgeElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILBadgeElementRenderer#1 = function <atom:0>;
  exports.DILBadgeElementRenderer = DILBadgeElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILBadgeElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
