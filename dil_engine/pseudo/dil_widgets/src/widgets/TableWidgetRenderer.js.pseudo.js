// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: d, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(d.TableCell, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(d.TableCell, e);
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=144B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e, r
// locals: this, <home_object>
// closure: t
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((this.props.getPropertyValueAsString("align", e) == null))) goto L_8d;
  this.props.getPropertyValueAsString("align", e);
  return t.renderStateWithDILTableCellParent(super["getChildRenderState"].call(this, e, r), "start");   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: d, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(d.Table, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(d.Table, e);
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=198B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e, t
// locals: i, this, <home_object>
// closure: l, r
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  super["setViewModelProperties"].call(this, e, t);
  this.setViewModelProperty("suppressTextSelection", l.isDILTextSelectionSuppressed(t));
  i = r.getDILContainerGutterContext(t);
  if (!((undefined !== i))) goto L_c5;
  this.setViewModelProperty("containerGutter", i);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=160B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e, t
// locals: r, i, this, <home_object>
// closure: s, p
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  let r;
  r = s.renderStateWithDILTableTypography(super["getChildRenderState"].call(this, e, t));
  i = this.props.getPropertyValue("rowDivider", e);
  if (!((undefined === i))) goto L_97;
  return r;
  return p(r, i);
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=243B file=dil_widgets/src/widgets/TableWidgetRenderer
// locals: e, t, r
// closure: this
function {
  let t;
  let e;
  e = this.labelCELScope;
  t = this.labelRenderState;
  if (!((undefined !== e))) goto L_f2;
  if (!((undefined !== t))) goto L_f2;
  let r;
  r = 0;
  if (!((r < this.labelRenderers.length))) goto L_f2;
  this.labelRenderers[r].onRender(e, t);
  r = <r_new>;
  (r++);
  goto L_69;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=1 bc=105B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e
// locals: this, this.active_func, new.target
// closure: d, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(d.TableRow, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(d.TableRow, e);
  this.labelRenderers = [];
  this.renderLabel = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=55B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  if (!((e.label == null))) goto L_2d;
  e.label;
  this.labelRenderers = [];
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=160B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e, t
// locals: r, this, <home_object>
// closure: o
function {
  <home_object> = <special_object 4>;
  this = this;
  let r;
  r = super["getChildRenderState"].call(this, e, t);
  if (!((true !== this.props.getPropertyValue("header", e)))) goto L_6c;
  return r;
  return o.renderStateWithDILInheritedTextStyleValues(r, {weight: "semibold"});
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=386B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e, t
// locals: r, i, this, <home_object>
// closure: l, c
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  let r;
  super["setViewModelProperties"].call(this, e, t);
  this.setViewModelProperty("suppressTextSelection", l.isDILTextSelectionSuppressed(t));
  r = (this.labelRenderers.length > 0);
  if (!(r)) goto L_9a;
  goto L_9b;
  // [栈深重同步 2 -> 1]
  this.labelCELScope = undefined;
  if (!(r)) goto L_ba;
  goto L_bb;
  // [栈深重同步 2 -> 1]
  this.labelRenderState = undefined;
  this.setViewModelProperty("hasRichLabel", r);
  if (!(r)) goto L_142;
  goto L_143;
  // [栈深重同步 4 -> 3]
  this.setNamedSlot("label", undefined);
  i = c(t);
  if (!((undefined !== i))) goto L_181;
  this.setViewModelProperty("rowDivider", i);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=0 bc=300B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e, t
// locals: r, i, o, r#1, this
// closure: p
function {
  this = this;
  let i;
  let r;
  r = this.props.getPropertyValue("rowDivider", e);
  if (!((undefined === r))) goto L_61;
  goto L_67;
  // [栈深重同步 1 -> 0]
  i = p(t, r);
  let o;
  o = 0;
  if (!((o < this.children.length))) goto L_12b;
  let r#1;
  if (!((o === (this.children.length - 1)))) goto L_cc;
  goto L_cf;
  // [栈深重同步 1 -> 0]
  r#1 = i;
  this.children[o].onRender(e, r#1);
  o = <o_new>;
  (o++);
  goto L_6d;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/TableWidgetRenderer
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

// fn p  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e, t
// closure: n
function {
  return e.withProperty(n, t);   // tail call
}

// fn c  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e
// closure: n
function {
  return e.getProperty(n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e
// closure: TableWidgetRenderer
function {
  return new TableWidgetRenderer(e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e
// closure: TableCellWidgetRenderer
function {
  return new TableCellWidgetRenderer(e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e
// closure: TableRowWidgetRenderer
function {
  return new TableRowWidgetRenderer(e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: e
// closure: TableSectionWidgetRenderer
function {
  return new TableSectionWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=27 closure=0 cpool=17 bc=864B file=dil_widgets/src/widgets/TableWidgetRenderer
// args: require, module, exports
// locals: e, t, r, i, o, l, s, d, n, a, TableCellWidgetRenderer, <class_fields_init>, TableCellWidgetRenderer#1, TableWidgetRenderer, <class_fields_init>#1, TableWidgetRenderer#1, TableRowWidgetRenderer, <class_fields_init>#2, TableRowWidgetRenderer#1, TableSectionWidgetRenderer, <class_fields_init>#3, TableSectionWidgetRenderer#1, p, c
function {
  p = function p;
  c = function c;
  let TableSectionWidgetRenderer#1;
  let TableRowWidgetRenderer#1;
  let TableWidgetRenderer#1;
  let TableCellWidgetRenderer#1;
  let a;
  let n;
  let d;
  let s;
  let l;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TableWidgetFactory = undefined;
  exports.TableCellWidgetFactory = undefined;
  exports.TableRowWidgetFactory = undefined;
  exports.TableSectionWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  t = require("dil_compiler/src/DILTableCellRenderState");
  r = require("dil_compiler/src/DILContainerGutterRenderState");
  i = require("dil_compiler/src/DILTypes");
  o = require("dil_core/src/style/DILInheritedTextStyleRenderState");
  l = require("dil_core/src/DILTextSelectionRenderState");
  s = require("dil_text/src/rendering/DILTableTypographyRenderState");
  d = require("./Table");
  n = Symbol("DILTableRowDivider");
  a = ["rowDivider"];
  let TableCellWidgetRenderer;
  let <class_fields_init>;
  class TableCellWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:TableCellWidgetRenderer>.getChildRenderState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TableCellWidgetRenderer>;
  TableCellWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  TableCellWidgetRenderer#1 = function <atom:0>;
  let TableWidgetRenderer;
  let <class_fields_init>#1;
  class TableWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:TableWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <proto:TableWidgetRenderer>.getChildRenderState = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:TableWidgetRenderer>;
  TableWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  TableWidgetRenderer#1 = function <atom:0>;
  let TableRowWidgetRenderer;
  let <class_fields_init>#2;
  class TableRowWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:TableRowWidgetRenderer>.onRenderedPropsChanged = function <atom:0>;
  <proto:TableRowWidgetRenderer>.getChildRenderState = function <atom:0>;
  <proto:TableRowWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:TableRowWidgetRenderer>;
  TableRowWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#2
  TableRowWidgetRenderer#1 = function <atom:0>;
  let TableSectionWidgetRenderer;
  let <class_fields_init>#3;
  class TableSectionWidgetRenderer extends i.ADILWidgetRendererInternal { ... }
  <proto:TableSectionWidgetRenderer>.onRender = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:TableSectionWidgetRenderer>;
  TableSectionWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#3
  TableSectionWidgetRenderer#1 = function <atom:0>;
  exports.TableWidgetFactory = {properties: d.Table.properties, create: function <atom:0>};
  exports.TableCellWidgetFactory = {properties: d.TableCell.properties, create: function <atom:0>};
  exports.TableRowWidgetFactory = {properties: d.TableRow.properties, create: function <atom:0>};
  exports.TableSectionWidgetFactory = {properties: a, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/TableWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
