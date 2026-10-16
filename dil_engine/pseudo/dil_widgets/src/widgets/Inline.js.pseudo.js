// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=89B file=dil_widgets/src/widgets/Inline
// locals: this
function {
  this = this;
  if (!(("row" === this.viewModel.direction))) goto L_53;
  return "row";
  return "column";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=80B file=dil_widgets/src/widgets/Inline
// locals: this
function {
  this = this;
  if (!((this.viewModel.align == null))) goto L_4f;
  this.viewModel.align;
  return "start";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/Inline
function {
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Inline
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

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=332B file=dil_widgets/src/widgets/Inline
// args: require, module, exports
// locals: e, r, i, Inline, <class_fields_init>, Inline#1
function {
  let Inline#1;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Inline = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = require("dil_core/src/DILComponent");
  i = require("./DILFlexContainer");
  let Inline;
  let <class_fields_init>;
  class Inline extends i.DILFlexContainer { ... }
  <proto:Inline>.getFlexDirection = function <atom:0>;
  <proto:Inline>.getAlign = function <atom:0>;
  <proto:Inline>.getDefaultWidth = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Inline>;
  Inline = function <atom:0>;
  // close_loc <class_fields_init>
  Inline#1 = function <atom:0>;
  exports.Inline = Inline#1;
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  // append([], r.DIL_COMPONENT_PROPERTIES, i.DIL_FLEX_CONTAINER_PROPERTIES)
  [][i.DIL_FLEX_CONTAINER_PROPERTIES] = "direction";
  ("direction" ++);
  Inline#1.properties = [];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Inline
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
