// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=89B file=dil_widgets/src/widgets/Form
// locals: this
function {
  this = this;
  if (!(("row" === this.viewModel.direction))) goto L_53;
  return "row";
  return "column";
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Form
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=384B file=dil_widgets/src/widgets/Form
// args: require, module, exports
// locals: e, r, o, Form, <class_fields_init>, Form#1
function {
  let Form#1;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Form = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = require("dil_core/src/DILComponent");
  o = require("./DILFlexContainer");
  let Form;
  let <class_fields_init>;
  class Form extends o.DILFlexContainer { ... }
  <proto:Form>.getFlexDirection = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Form>;
  Form = function <atom:0>;
  // close_loc <class_fields_init>
  Form#1 = function <atom:0>;
  exports.Form = Form#1;
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  // append([], r.DIL_COMPONENT_PROPERTIES, o.DIL_FLEX_CONTAINER_PROPERTIES)
  [][o.DIL_FLEX_CONTAINER_PROPERTIES] = "direction";
  [][("direction" ++)] = "onSubmitAction";
  ("onSubmitAction" ++);
  Form#1.properties = [];
  // append([], 0, o.DIL_V2_STACK_PROPERTIES)
  [][o.DIL_V2_STACK_PROPERTIES] = "onSubmit";
  ("onSubmit" ++);
  Form#1.dilV2Properties = [];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Form
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
