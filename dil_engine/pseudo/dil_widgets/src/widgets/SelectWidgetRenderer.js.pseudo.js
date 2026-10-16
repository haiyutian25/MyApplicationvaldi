// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/SelectWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: t, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(t.Select, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(t.Select, e);
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=65B file=dil_widgets/src/widgets/SelectWidgetRenderer
// args: e, t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["setViewModelProperties"].call(this, e, t);
  this.setViewModelProperty("__legacy", true);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/SelectWidgetRenderer
// args: e
// closure: SelectWidgetRenderer
function {
  return new SelectWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=257B file=dil_widgets/src/widgets/SelectWidgetRenderer
// args: require, module, exports
// locals: e, t, SelectWidgetRenderer, <class_fields_init>, SelectWidgetRenderer#1
function {
  let SelectWidgetRenderer#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SelectWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  t = require("./Select");
  let SelectWidgetRenderer;
  let <class_fields_init>;
  class SelectWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:SelectWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SelectWidgetRenderer>;
  SelectWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  SelectWidgetRenderer#1 = function <atom:0>;
  exports.SelectWidgetFactory = {properties: t.Select.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/SelectWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
