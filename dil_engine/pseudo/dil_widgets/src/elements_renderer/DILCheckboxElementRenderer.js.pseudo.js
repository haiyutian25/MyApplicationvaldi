// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=80B file=dil_widgets/src/elements_renderer/DILCheckboxElementRenderer
// locals: this.active_func, new.target, this
// closure: r, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("checkbox", r.Checkbox);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("checkbox", r.Checkbox);
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=342B file=dil_widgets/src/elements_renderer/DILCheckboxElementRenderer
// args: r, t
// locals: o, this, <home_object>
// closure: e
function {
  <home_object> = <special_object 4>;
  this = this;
  let o;
  super["beginRender"].call(this, r, t);
  this.setViewModelProperty("lineThrough", true);
  this.setViewModelProperty("shape", "round");
  o = e.DIL_PLATFORM_TYPOGRAPHY.current;
  if (!((o !== e.DIL_WEB_TYPOGRAPHY))) goto L_155;
  this.setViewModelProperty("labelTypography", o.text.md);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=49B file=dil_widgets/src/elements_renderer/DILCheckboxElementRenderer
// args: e, r
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (((undefined !== r))) goto L_1e;
  if (!(("lineThrough" !== e))) goto L_1e;
  if (!(("shape" !== e))) goto L_30;
  super["setProp"].call(this, e, r);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=193B file=dil_widgets/src/elements_renderer/DILCheckboxElementRenderer
// args: require, module, exports
// locals: e, r, t, DILCheckboxElementRenderer, <class_fields_init>, DILCheckboxElementRenderer#1
function {
  let DILCheckboxElementRenderer#1;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILCheckboxElementRenderer = undefined;
  e = require("dil_text/src/rendering/DILTextTypography");
  r = require("../widgets/Checkbox");
  t = require("./DILChoiceElementRenderer");
  let DILCheckboxElementRenderer;
  let <class_fields_init>;
  class DILCheckboxElementRenderer extends t.DILChoiceElementRenderer { ... }
  <proto:DILCheckboxElementRenderer>.beginRender = function <atom:0>;
  <proto:DILCheckboxElementRenderer>.setProp = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILCheckboxElementRenderer>;
  DILCheckboxElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILCheckboxElementRenderer#1 = function <atom:0>;
  exports.DILCheckboxElementRenderer = DILCheckboxElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILCheckboxElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
