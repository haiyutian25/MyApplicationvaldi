// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=187B file=dil_widgets/src/widgets/Grid
// args: t
// locals: e
// closure: l, a, this
function {
  let e;
  e = l(t.width);
  if (((undefined === e))) goto L_ba;
  if (!((this.state == null))) goto L_61;
  this.state;
  goto L_82;
  if ((a(undefined.layoutWidth, e))) goto L_ba;
  this.setState({layoutWidth: e});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=1 bc=115B file=dil_widgets/src/widgets/Grid
// locals: this, this.active_func, new.target, arguments
// closure: l, a, <class_fields_init>, r
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
  this.gridRef = new r.ElementRef();
  this.handleGridLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/widgets/Grid
// locals: this
function {
  this = this;
  return this.currentAdaptiveColumnCount;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/widgets/Grid
function {
  return false;
}

// fn <atom:0>  args=0 vars=7 closure=5 cpool=0 bc=2004B file=dil_widgets/src/widgets/Grid
// locals: i, r, o, d, l, a, this
// closure: s, n, t, e, u
function {
  this = this;
  let a;
  let l;
  let d;
  let o;
  let r;
  let i;
  i = this.baseViewAttributes;
  if (!(this.usesDILV2Layout)) goto L_ab;
  goto L_ac;
  // [栈深重同步 1 -> 0]
  r = undefined;
  if (!((undefined === r))) goto L_120;
  goto L_121;
  // [栈深重同步 1 -> 0]
  o = undefined;
  d = this.currentAdaptiveColumnCount;
  if (!((undefined !== r))) goto L_276;
  if (!((null != this.viewModel.minChildWidth))) goto L_276;
  if (!((this.state == null))) goto L_1ea;
  this.state;
  goto L_20b;
  goto L_277;
  // [栈深重同步 1 -> 0]
  l = undefined;
  if (!((l == null))) goto L_286;
  l;
  goto L_2a7;
  this.currentAdaptiveColumnCount = undefined.columnCount;
  if (!(this.usesDILV2Layout)) goto L_38f;
  if (!((this.state == null))) goto L_36b;
  this.state;
  goto L_38c;
  goto L_390;
  // [栈深重同步 1 -> 0]
  a = undefined;
  t.beginRender(e, undefined);
  t.setAttributeRef(this.gridRef);
  t.setAttributeStyle("style", u.grid);
  t.setAttributes(i);
  t.setAttribute("gap", o);
  if (!((r == null))) goto L_4e9;
  r;
  goto L_50a;
  t.setAttribute("columnGap", undefined.columnGap);
  if (!((l == null))) goto L_542;
  l;
  goto L_563;
  if (!((undefined.templateColumns == null))) goto L_5da;
  undefined.templateColumns;
  if (!((a == null))) goto L_5da;
  a;
  t.setAttributeString("gridTemplateColumns", s.resolveGridTemplate(this.viewModel.columns, 2));
  t.setAttributeString("gridTemplateRows", s.resolveOptionalGridTemplate(this.viewModel.rows));
  if (((undefined !== l))) goto L_6ab;
  if (!((undefined !== a))) goto L_6d2;
  goto L_6d3;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onLayout", undefined);
  if (!((r == null))) goto L_70b;
  r;
  goto L_72c;
  t.setAttribute("rowGap", undefined.rowGap);
  t.renderUnnamedSlot(this);
  t.endRender();
  if (!((d !== this.currentAdaptiveColumnCount))) goto L_7d3;
  this.updateChildSpans();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=292B file=dil_widgets/src/widgets/Grid
// locals: t, this
// closure: d
function {
  this = this;
  let t;
  if (!((this.gridRef.single() == null))) goto L_53;
  this.gridRef.single();
  goto L_74;
  if (!((undefined.children == null))) goto L_7c;
  undefined.children;
  for (const t of []) {
    if (!((t.emittingComponent instanceof d.GridItem))) goto L_119;
    t.emittingComponent.updateGridColumnSpan(t);
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/widgets/Grid
function {
  return true;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Grid
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

// fn l  args=1 vars=1 closure=0 cpool=0 bc=100B file=dil_widgets/src/widgets/Grid
// args: t
function {
  if (!(Number.isFinite(t))) goto L_63;
  if (!(!(t <= 0))) goto L_63;
  return (Math.round((100 * t)) / 100);
  return;
}

// fn a  args=2 vars=2 closure=0 cpool=1 bc=55B file=dil_widgets/src/widgets/Grid
// args: t, e
function {
  if (!((undefined !== t))) goto L_36;
  return (Math.abs((t - e)) < 0.5);
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=9 bc=620B file=dil_widgets/src/widgets/Grid
// args: require, module, exports
// locals: t, e, i, r, o, s, d, n, Grid, <class_fields_init>, Grid#1, DILV2Grid, <class_fields_init>#1, DILV2Grid#1, u, l, a
function {
  l = function l;
  a = function a;
  let u;
  let DILV2Grid#1;
  let Grid#1;
  let n;
  let d;
  let s;
  let o;
  let r;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Grid = undefined;
  exports.DILV2Grid = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("layout", undefined, "UBBf00a1EUiBjCHP");
  i = require("dil_core/src/DILComponent");
  r = require("valdi_core/src/ElementRef");
  o = require("valdi_core/src/Style");
  s = require("../layout/GridLayoutAttributes");
  d = require("./GridItem");
  n = {columnGap: 3, rowGap: 4};
  let Grid;
  let <class_fields_init>;
  class Grid extends i.DILStatefulComponent { ... }
  <proto:Grid>.adaptiveColumnCount = function <atom:0>;
  <proto:Grid>.usesDILV2Layout = function <atom:0>;
  <proto:Grid>.onRender = function <atom:0>;
  <proto:Grid>.updateChildSpans = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Grid>;
  Grid = function <atom:0>;
  // close_loc <class_fields_init>
  Grid#1 = function <atom:0>;
  exports.Grid = Grid#1;
  Grid#1.dilV2Properties = ["columnGap", "columns", "gap", "minChildWidth", "rowGap", "rows"];
  // append([], 0, i.DIL_COMPONENT_PROPERTIES)
  [][i.DIL_COMPONENT_PROPERTIES] = "columns";
  [][("columns" ++)] = "gap";
  [][("gap" ++)] = "rows";
  ("rows" ++);
  Grid#1.properties = [];
  let DILV2Grid;
  let <class_fields_init>#1;
  class DILV2Grid extends Grid#1 { ... }
  <proto:DILV2Grid>.usesDILV2Layout = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILV2Grid>;
  DILV2Grid = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILV2Grid#1 = function <atom:0>;
  exports.DILV2Grid = DILV2Grid#1;
  u = {grid: new o.Style({display: "grid", minWidth: 0, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Grid
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
