// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/DatePickerWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: r, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r.DatePicker, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(r.DatePicker, e);
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=65B file=dil_widgets/src/widgets/DatePickerWidgetRenderer
// args: e, r
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["setViewModelProperties"].call(this, e, r);
  this.setViewModelProperty("__legacy", true);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/DatePickerWidgetRenderer
// args: e
// closure: DatePickerWidgetRenderer
function {
  return new DatePickerWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=257B file=dil_widgets/src/widgets/DatePickerWidgetRenderer
// args: require, module, exports
// locals: e, r, DatePickerWidgetRenderer, <class_fields_init>, DatePickerWidgetRenderer#1
function {
  let DatePickerWidgetRenderer#1;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DatePickerWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  r = require("./DatePicker");
  let DatePickerWidgetRenderer;
  let <class_fields_init>;
  class DatePickerWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:DatePickerWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DatePickerWidgetRenderer>;
  DatePickerWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DatePickerWidgetRenderer#1 = function <atom:0>;
  exports.DatePickerWidgetFactory = {properties: r.DatePicker.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/DatePickerWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
