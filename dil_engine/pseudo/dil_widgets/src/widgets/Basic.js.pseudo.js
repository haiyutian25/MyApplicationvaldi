// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=21B file=dil_widgets/src/widgets/Basic
// args: e
function {
  if (!(("row" === e))) goto L_f;
  return "row";
  return "column";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=89B file=dil_widgets/src/widgets/Basic
// locals: this
function {
  this = this;
  if (!(("row" === this.viewModel.direction))) goto L_53;
  return "row";
  return "column";
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=273B file=dil_widgets/src/widgets/Basic
// locals: this, <home_object>
// closure: i
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((undefined === this.viewModel.gap))) goto L_104;
  if (!(this.viewModel.prose)) goto L_104;
  if (!(("row" !== this.viewModel.direction))) goto L_104;
  return i.DIL_DEFAULT_CONTAINER_GAP;
  return super["getGap"].call(this);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Basic
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

// fn <atom:0>  args=3 vars=10 closure=0 cpool=4 bc=353B file=dil_widgets/src/widgets/Basic
// args: require, module, exports
// locals: e, r, i, o, Basic, <class_fields_init>, Basic#1
function {
  let Basic#1;
  let o;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Basic = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = require("dil_core/src/DILComponent");
  i = require("dil_core/src/layout/DILSpacing");
  o = require("./DILFlexContainer");
  let Basic;
  let <class_fields_init>;
  class Basic extends o.DILFlexContainer { ... }
  function <atom:0>.resolveFlexDirection = function <atom:0>;
  <proto:Basic>.getFlexDirection = function <atom:0>;
  <proto:Basic>.getGap = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Basic>;
  Basic = function <atom:0>;
  // close_loc <class_fields_init>
  Basic#1 = function <atom:0>;
  exports.Basic = Basic#1;
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  // append([], r.DIL_COMPONENT_PROPERTIES, o.DIL_FLEX_CONTAINER_PROPERTIES)
  [][o.DIL_FLEX_CONTAINER_PROPERTIES] = "direction";
  [][("direction" ++)] = "prose";
  ("prose" ++);
  Basic#1.properties = [];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Basic
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
