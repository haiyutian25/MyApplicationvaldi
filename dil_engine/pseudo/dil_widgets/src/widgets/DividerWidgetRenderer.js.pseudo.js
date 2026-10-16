// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/DividerWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: i, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(i.Divider, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(i.Divider, e);
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=117B file=dil_widgets/src/widgets/DividerWidgetRenderer
// args: e, i
// locals: t, this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  super["setViewModelProperties"].call(this, e, i);
  t = r.getDILFlexDirection(i);
  if (!((undefined !== t))) goto L_74;
  this.setViewModelProperty("parentFlexDirection", t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/DividerWidgetRenderer
// args: e
// closure: DividerWidgetRenderer
function {
  return new DividerWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=269B file=dil_widgets/src/widgets/DividerWidgetRenderer
// args: require, module, exports
// locals: e, r, i, DividerWidgetRenderer, <class_fields_init>, DividerWidgetRenderer#1
function {
  let DividerWidgetRenderer#1;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DividerWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  r = require("dil_compiler/src/DILAutoSpacingRenderState");
  i = require("./Divider");
  let DividerWidgetRenderer;
  let <class_fields_init>;
  class DividerWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:DividerWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DividerWidgetRenderer>;
  DividerWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DividerWidgetRenderer#1 = function <atom:0>;
  exports.DividerWidgetFactory = {properties: i.Divider.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/DividerWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
