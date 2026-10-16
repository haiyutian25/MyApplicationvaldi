// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=dil_widgets/src/widgets/Row
function {
  return "row";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=dil_widgets/src/widgets/Row
function {
  return "row";
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=80B file=dil_widgets/src/widgets/Row
// locals: this
// closure: t
function {
  this = this;
  if (!(t(this.viewModel.justify))) goto L_4f;
  return "100%";
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=91B file=dil_widgets/src/widgets/Row
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((0 !== this.viewModel.minWidth))) goto L_5a;
  return super["shouldUseIntrinsicFlexBasisForFlexibleContent"].call(this);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Row
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

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Row
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

// fn t  args=1 vars=1 closure=0 cpool=0 bc=41B file=dil_widgets/src/widgets/Row
// args: e
function {
  if ((("between" === e))) goto L_28;
  if ((("around" === e))) goto L_28;
  if ((("evenly" === e))) goto L_28;
  return ("stretch" === e);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=7 bc=455B file=dil_widgets/src/widgets/Row
// args: require, module, exports
// locals: e, r, o, DILRow, <class_fields_init>, DILRow#1, Row, <class_fields_init>#1, Row#1, t
function {
  t = function t;
  let Row#1;
  let DILRow#1;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILRow = undefined;
  exports.Row = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = require("dil_core/src/DILComponent");
  o = require("./DILFlexContainer");
  let DILRow;
  let <class_fields_init>;
  class DILRow extends o.DILFlexContainer { ... }
  function <atom:0>.resolveFlexDirection = function <atom:0>;
  <proto:DILRow>.getFlexDirection = function <atom:0>;
  <proto:DILRow>.getDefaultWidth = function <atom:0>;
  <proto:DILRow>.shouldUseIntrinsicFlexBasisForFlexibleContent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILRow>;
  DILRow = function <atom:0>;
  // close_loc <class_fields_init>
  DILRow#1 = function <atom:0>;
  exports.DILRow = DILRow#1;
  let Row;
  let <class_fields_init>#1;
  class Row extends DILRow#1 { ... }
  <class_fields_init>#1 = undefined;
  <proto:Row>;
  Row = function <atom:0>;
  // close_loc <class_fields_init>#1
  Row#1 = function <atom:0>;
  exports.Row = Row#1;
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  // append([], r.DIL_COMPONENT_PROPERTIES, o.DIL_FLEX_CONTAINER_PROPERTIES)
  o.DIL_FLEX_CONTAINER_PROPERTIES;
  Row#1.properties = [];
  // append([], 0, o.DIL_V2_STACK_PROPERTIES)
  [][o.DIL_V2_STACK_PROPERTIES] = "rowGap";
  ("rowGap" ++);
  Row#1.dilV2Properties = [];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Row
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
