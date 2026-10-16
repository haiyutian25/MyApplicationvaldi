// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=21B file=dil_widgets/src/widgets/Box
// args: i
function {
  if (!(("row" === i))) goto L_f;
  return "row";
  return "column";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=89B file=dil_widgets/src/widgets/Box
// locals: this
function {
  this = this;
  if (!(("row" === this.viewModel.direction))) goto L_53;
  return "row";
  return "column";
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=273B file=dil_widgets/src/widgets/Box
// locals: this, <home_object>
// closure: o
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((undefined === this.viewModel.gap))) goto L_104;
  if (!(this.viewModel.prose)) goto L_104;
  if (!(("row" !== this.viewModel.direction))) goto L_104;
  return o.DIL_DEFAULT_CONTAINER_GAP;
  return super["getGap"].call(this);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=2071B file=dil_widgets/src/widgets/Box
// args: i
// locals: e, this
function {
  this = this;
  let e;
  if (!((this.viewModel.ariaHidden == null))) goto L_75;
  this.viewModel.ariaHidden;
  e = this.viewModel["aria-hidden"];
  if (((true === e))) goto L_8a;
  if (!(("true" === e))) goto L_93;
  goto L_b5;
  // [栈深重同步 2 -> 1]
  i.accessibilityNavigation = i.accessibilityNavigation;
  if (((undefined !== i.border))) goto L_146;
  if (((undefined !== i.borderColor))) goto L_146;
  if (((undefined !== i.borderWidth))) goto L_146;
  i.borderColor = "transparent";
  "transparent";
  if (!((true === this.viewModel.nativePopoverSurface))) goto L_1df;
  i.background = undefined;
  i.backgroundColor = undefined;
  i.borderColor = undefined;
  i.borderWidth = undefined;
  i.borderStyle = undefined;
  i.borderRadius = undefined;
  i.boxShadow = undefined;
  undefined;
  if (((undefined !== this.viewModel.horizontalScrollItemViewportWidth))) goto L_24d;
  if (!((undefined === i.aspectRatio))) goto L_250;
  return;
  if (!(("row" === this.viewModel.parentFlexDirection))) goto L_36b;
  if (!((true === this.viewModel.parentHasAspectRatio))) goto L_36b;
  if (!(("100%" === i.height))) goto L_36b;
  if (!((undefined !== i.flexGrow))) goto L_36b;
  if (!((i.flexGrow > 0))) goto L_36b;
  i.aspectRatio = undefined;
  return;
  if (!(("number" == typeof i.width))) goto L_575;
  if (!(Number.isFinite(i.width))) goto L_575;
  if (!((i.width > 0))) goto L_575;
  if (!(("100%" === i.maxWidth))) goto L_575;
  if (!(("row" === this.viewModel.parentFlexDirection))) goto L_539;
  if (!((undefined === i.flexBasis))) goto L_539;
  if (!((0 !== i.flexShrink))) goto L_539;
  if (!(!this.hasExplicitShrinkProtectedSize())) goto L_539;
  i.flexBasis = i.width;
  i.width;
  i.maxWidth = i.width;
  i.width = "100%";
  if (!((i.aspectRatio > 0))) goto L_815;
  if (!(("100%" === i.width))) goto L_815;
  if (!(("number" == typeof i.maxWidth))) goto L_815;
  if (!(Number.isFinite(i.maxWidth))) goto L_815;
  if (!((i.maxWidth > 0))) goto L_815;
  if (((undefined === i.height))) goto L_743;
  if ((("auto" === i.height))) goto L_743;
  if (!(("100%" === i.height))) goto L_743;
  if (!(!this.viewModel.scrollable)) goto L_815;
  if (!((undefined === i.maxHeight))) goto L_815;
  if (((undefined === i.minHeight))) goto L_7c1;
  if (!((0 === i.minHeight))) goto L_815;
  i.maxHeight = (i.maxWidth / i.aspectRatio);
  (i.maxWidth / i.aspectRatio);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/Box
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/widgets/Box
// args: i
function {
  return (undefined !== i.aspectRatio);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Box
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

// fn <atom:0>  args=3 vars=10 closure=0 cpool=7 bc=473B file=dil_widgets/src/widgets/Box
// args: require, module, exports
// locals: i, e, o, t, Box, <class_fields_init>, Box#1
function {
  let Box#1;
  let t;
  let o;
  let e;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Box = undefined;
  i = require("valdi_core/src/JSX").jsx;
  e = require("dil_core/src/DILComponent");
  o = require("dil_core/src/layout/DILSpacing");
  t = require("./DILFlexContainer");
  let Box;
  let <class_fields_init>;
  class Box extends t.DILFlexContainer { ... }
  function <atom:0>.resolveFlexDirection = function <atom:0>;
  <proto:Box>.getFlexDirection = function <atom:0>;
  <proto:Box>.getGap = function <atom:0>;
  <proto:Box>.applyAdditionalContainerAttributes = function <atom:0>;
  <proto:Box>.getDefaultWidth = function <atom:0>;
  <proto:Box>.shouldUseIntrinsicHeightForPercentHeight = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Box>;
  Box = function <atom:0>;
  // close_loc <class_fields_init>
  Box#1 = function <atom:0>;
  exports.Box = Box#1;
  // append([], 0, e.DIL_COMPONENT_PROPERTIES)
  // append([], e.DIL_COMPONENT_PROPERTIES, t.DIL_FLEX_CONTAINER_PROPERTIES)
  [][t.DIL_FLEX_CONTAINER_PROPERTIES] = "aria-hidden";
  [][("aria-hidden" ++)] = "direction";
  [][("direction" ++)] = "prose";
  ("prose" ++);
  Box#1.properties = [];
  // append([], 0, t.DIL_V2_STACK_PROPERTIES)
  [][t.DIL_V2_STACK_PROPERTIES] = "columnGap";
  [][("columnGap" ++)] = "onVisible";
  [][("onVisible" ++)] = "onVisibleKey";
  [][("onVisibleKey" ++)] = "onVisibleWhen";
  [][("onVisibleWhen" ++)] = "rowGap";
  ("rowGap" ++);
  Box#1.dilV2Properties = [];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Box
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
