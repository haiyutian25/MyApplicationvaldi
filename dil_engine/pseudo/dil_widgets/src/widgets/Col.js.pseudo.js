// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=dil_widgets/src/widgets/Col
function {
  return "column";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=dil_widgets/src/widgets/Col
function {
  return "column";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/Col
function {
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=149B file=dil_widgets/src/widgets/Col
// args: e
// locals: this
function {
  this = this;
  if (!(("center" === this.viewModel.justify))) goto L_94;
  return (undefined === this.viewModel.width);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Col
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

// fn <atom:0>  args=3 vars=9 closure=0 cpool=5 bc=396B file=dil_widgets/src/widgets/Col
// args: require, module, exports
// locals: e, r, t, Col, <class_fields_init>, Col#1
function {
  let Col#1;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Col = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = require("dil_core/src/DILComponent");
  t = require("./DILFlexContainer");
  let Col;
  let <class_fields_init>;
  class Col extends t.DILFlexContainer { ... }
  function <atom:0>.resolveFlexDirection = function <atom:0>;
  <proto:Col>.getFlexDirection = function <atom:0>;
  <proto:Col>.getDefaultWidth = function <atom:0>;
  <proto:Col>.shouldUseIntrinsicHeightForPercentHeight = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Col>;
  Col = function <atom:0>;
  // close_loc <class_fields_init>
  Col#1 = function <atom:0>;
  exports.Col = Col#1;
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  // append([], r.DIL_COMPONENT_PROPERTIES, t.DIL_FLEX_CONTAINER_PROPERTIES)
  t.DIL_FLEX_CONTAINER_PROPERTIES;
  Col#1.properties = [];
  // append([], 0, t.DIL_V2_STACK_PROPERTIES)
  [][t.DIL_V2_STACK_PROPERTIES] = "columnGap";
  ("columnGap" ++);
  Col#1.dilV2Properties = [];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Col
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
