// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=21B file=dil_widgets/src/widgets/GridItem
// args: e
function {
  if (!(("row" === e))) goto L_f;
  return "row";
  return "column";
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=108B file=dil_widgets/src/widgets/GridItem
// locals: this
// closure: GridItem
function {
  this = this;
  return GridItem.resolveFlexDirection(this.viewModel.direction);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=164B file=dil_widgets/src/widgets/GridItem
// args: e
// locals: this
// closure: r
function {
  this = this;
  e.gridColumnEnd = this.resolveEffectiveColumnSpan();
  e.gridRowEnd = r.resolveGridSpan(this.viewModel.rowSpan);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=82B file=dil_widgets/src/widgets/GridItem
// args: e
// locals: this
function {
  this = this;
  e.setAttribute("gridColumnEnd", this.resolveEffectiveColumnSpan());
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=559B file=dil_widgets/src/widgets/GridItem
// locals: e, t, this
// closure: r, n
function {
  this = this;
  let t;
  let e;
  if (!((undefined === this.viewModel.span))) goto L_50;
  return;
  e = this.renderer.getComponentVirtualNode(this).parent;
  if (!((undefined !== e))) goto L_113;
  if (!((undefined === e.element))) goto L_113;
  e = e.parent;
  e.parent;
  goto L_b9;
  if (!((e == null))) goto L_11e;
  e;
  goto L_168;
  if (!((undefined.element == null))) goto L_147;
  undefined.element;
  goto L_168;
  t = undefined.emittingComponent;
  if (!((t instanceof n.Grid))) goto L_226;
  goto L_227;
  // [栈深重同步 3 -> 2]
  return r.resolveGridColumnSpan({authoredSpan: this.viewModel.span, adaptiveColumnCount: undefined});   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/GridItem
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

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=59B file=dil_widgets/src/widgets/GridItem
// args: <atom:0>
// locals: e, r
// closure: t
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  if (!((undefined !== r))) goto L_3a;
  return t.includes(e);
}

// fn <atom:0>  args=0 vars=5 closure=1 cpool=1 bc=394B file=dil_widgets/src/widgets/GridItem
// locals: e, t, r, this, <home_object>
// closure: o
function {
  <home_object> = <special_object 4>;
  this = this;
  let r;
  let t;
  let e;
  super["onRender"].call(this);
  e = this.renderer.getComponentRootElements(this, true)[0];
  t = o.Box.dilV2Properties;
  r = Object.entries(this.viewModel).some(function <atom:0>);
  if ((r)) goto L_178;
  if (!((e.children.length > 1))) goto L_181;
  goto L_186;
  // [栈深重同步 4 -> 3]
  e.setAttribute("display", "grid");
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=102B file=dil_widgets/src/widgets/GridItem
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["applyAdditionalContainerAttributes"].call(this, e);
  if (!((e.minWidth == null))) goto L_46;
  e.minWidth;
  e.minWidth = 0;
  0;
  e.gridTemplateColumns = "1fr";
  e.alignContent = "stretch";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/GridItem
function {
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/GridItem
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

// fn <atom:0>  args=3 vars=15 closure=0 cpool=10 bc=597B file=dil_widgets/src/widgets/GridItem
// args: require, module, exports
// locals: e, t, r, i, n, o, GridItem, <class_fields_init>, GridItem#1, DILV2GridItem, <class_fields_init>#1, DILV2GridItem#1
function {
  let DILV2GridItem#1;
  let GridItem#1;
  let o;
  let n;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.GridItem = undefined;
  exports.DILV2GridItem = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = require("dil_core/src/DILComponent");
  r = require("../layout/GridLayoutAttributes");
  i = require("./DILFlexContainer");
  n = require("./Grid");
  o = require("./Box");
  let GridItem;
  let <class_fields_init>;
  class GridItem extends i.DILFlexContainer { ... }
  function <atom:0>.resolveFlexDirection = function <atom:0>;
  <proto:GridItem>.getFlexDirection = function <atom:0>;
  <proto:GridItem>.applyAdditionalContainerAttributes = function <atom:0>;
  <proto:GridItem>.updateGridColumnSpan = function <atom:0>;
  <proto:GridItem>.resolveEffectiveColumnSpan = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:GridItem>;
  GridItem = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc GridItem
  GridItem#1 = function <atom:0>;
  exports.GridItem = GridItem#1;
  // append([], 0, t.DIL_COMPONENT_PROPERTIES)
  // append([], t.DIL_COMPONENT_PROPERTIES, i.DIL_FLEX_CONTAINER_PROPERTIES)
  [][i.DIL_FLEX_CONTAINER_PROPERTIES] = "direction";
  [][("direction" ++)] = "rowSpan";
  [][("rowSpan" ++)] = "span";
  ("span" ++);
  GridItem#1.properties = [];
  let DILV2GridItem;
  let <class_fields_init>#1;
  class DILV2GridItem extends GridItem#1 { ... }
  <proto:DILV2GridItem>.onRender = function <atom:0>;
  <proto:DILV2GridItem>.applyAdditionalContainerAttributes = function <atom:0>;
  <proto:DILV2GridItem>.getDefaultWidth = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILV2GridItem>;
  DILV2GridItem = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILV2GridItem#1 = function <atom:0>;
  exports.DILV2GridItem = DILV2GridItem#1;
  DILV2GridItem#1.useRenderChildrenProperty = true;
  // append([], 0, o.Box.dilV2Properties)
  [][o.Box.dilV2Properties] = "span";
  [][("span" ++)] = "rowSpan";
  ("rowSpan" ++);
  DILV2GridItem#1.dilV2Properties = [];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/GridItem
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
