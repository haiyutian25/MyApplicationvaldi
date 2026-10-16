// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=38B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.options = e;
  this.itemCount = 0;
  return;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=292B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// locals: e, t, r, i, this
function {
  this = this;
  let i;
  let r;
  let t;
  let e;
  e = this.itemCount;
  if (!((this.options == null))) goto L_5e;
  this.options;
  goto L_7f;
  if (!((undefined.skipItemCount == null))) goto L_85;
  undefined.skipItemCount;
  t = 0;
  if (!((this.options == null))) goto L_b1;
  this.options;
  goto L_d2;
  r = undefined.visibleItemCount;
  if (!((e >= t))) goto L_f2;
  if (((undefined === r))) goto L_f2;
  i = ((e - t) < r);
  this.itemCount = (this.itemCount ++);
  return i;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=131B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, t, i
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.componentRenderer = new t.DILValdiComponentRenderer(i.ListView, e, false);
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=40B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: r
// closure: this, e, t
function {
  return this.renderChildren(e, t, r);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=568B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e, t
// locals: this
function {
  this = this;
  this.componentRenderer.begin(e, t, undefined, this.name);
  this.componentRenderer.forwardViewModelProperty(e, "theme");
  this.componentRenderer.forwardViewModelProperty(e, "gap");
  this.componentRenderer.forwardViewModelProperty(e, "limit");
  this.componentRenderer.forwardViewModelProperty(e, "showMoreLabel");
  this.componentRenderer.setViewModelProperty("renderChildren", function <atom:0>);
  this.componentRenderer.end(t);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=2 cpool=0 bc=140B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e, t, r
// locals: i, o, this
// closure: ListViewItemCounter, n
function {
  this = this;
  let o;
  let i;
  i = new ListViewItemCounter(r);
  o = t.withProperty(n, i);
  this.renderCountedChildren(e, o);
  return i.itemCount;
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=0 bc=428B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e, t
// locals: r, i, n, o, this
// closure: o, s
function {
  this = this;
  let n;
  let i;
  let r;
  r = o(this.props, e);
  if (!((undefined === r))) goto L_64;
  this.renderTemplateChildren(e, t);
  return;
  if (!((s(this.props, e, "itemName") == null))) goto L_c9;
  s(this.props, e, "itemName");
  if (!((s(this.props, e, "item") == null))) goto L_c9;
  s(this.props, e, "item");
  i = "item";
  if (!((s(this.props, e, "indexName") == null))) goto L_12f;
  s(this.props, e, "indexName");
  if (!((s(this.props, e, "index") == null))) goto L_12f;
  s(this.props, e, "index");
  n = "index";
  let o;
  o = 0;
  if (!((o < r.length))) goto L_1ab;
  {}[i] = r[o];
  r[o];
  {}[n] = o;
  o;
  this.renderTemplateChildren(e.subscopeWithValues({}), t);
  o = <o_new>;
  (o++);
  goto L_135;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=136B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  r = 0;
  if (!((r < this.children.length))) goto L_87;
  this.children[r].onRender(e, t);
  r = <r_new>;
  (r++);
  goto L_7;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=131B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, t, i
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.componentRenderer = new t.DILValdiComponentRenderer(i.ListViewItem, e, true);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// locals: this
function {
  this = this;
  this.componentRenderer.onPropsUpdated();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=39B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// closure: this, e, t
function {
  return this.renderChildren(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=1 bc=358B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e, t
// locals: r, this
// closure: d
function {
  this = this;
  let r;
  r = d(t);
  if (((undefined === r))) goto L_39;
  if (!(r.beginItem())) goto L_165;
  this.componentRenderer.begin(e, t, undefined, this.name);
  if (!((this.children.length > 0))) goto L_11d;
  this.componentRenderer.setUnnamedSlot(function <atom:0>);
  this.componentRenderer.end(t);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=194B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e, t
// locals: r, i, this
// closure: d, n
function {
  this = this;
  let r;
  if (!((undefined === d(t)))) goto L_f;
  goto L_38;
  // [栈深重同步 1 -> 0]
  r = t.withProperty(n, undefined);
  let i;
  i = 0;
  if (!((i < this.children.length))) goto L_c1;
  this.children[i].onRender(e, r);
  i = <i_new>;
  (i++);
  goto L_3e;
  return;
}

// fn o  args=2 vars=3 closure=0 cpool=0 bc=155B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e, t
// locals: r
function {
  let r;
  if (!((e.getPropertyValue("items", t) == null))) goto L_5e;
  e.getPropertyValue("items", t);
  r = e.getPropertyValue("of", t);
  if (!((undefined !== r))) goto L_9a;
  if (!(Array.isArray(r))) goto L_98;
  return r;
  return undefined;
  return;
}

// fn s  args=3 vars=4 closure=0 cpool=0 bc=61B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e, t, r
// locals: i
function {
  let i;
  i = e.getPropertyValue(r, t);
  if (!(("string" == typeof i))) goto L_3b;
  return i;
  return undefined;
}

// fn d  args=1 vars=2 closure=2 cpool=0 bc=59B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e
// locals: t
// closure: n, ListViewItemCounter
function {
  let t;
  t = e.getProperty(n);
  if (!((t instanceof ListViewItemCounter))) goto L_39;
  return t;
  return undefined;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e, t
// closure: ListViewWidgetRenderer
function {
  return new ListViewWidgetRenderer(e);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: e, t
// closure: ListViewItemWidgetRenderer
function {
  return new ListViewItemWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=16 bc=609B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// args: require, module, exports
// locals: e, t, r, i, n, ListViewItemCounter, <class_fields_init>, ListViewItemCounter#1, ListViewWidgetRenderer, <class_fields_init>#1, ListViewWidgetRenderer#1, ListViewItemWidgetRenderer, <class_fields_init>#2, ListViewItemWidgetRenderer#1, o, s, d
function {
  o = function o;
  s = function s;
  d = function d;
  let ListViewItemWidgetRenderer#1;
  let ListViewWidgetRenderer#1;
  let ListViewItemCounter#1;
  let n;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ListViewWidgetFactory = undefined;
  exports.ListViewItemWidgetFactory = undefined;
  e = require("dil_core/src/DILComponent");
  t = require("dil_compiler/src/DILValdiComponentRenderer");
  r = require("dil_compiler/src/DILTypes");
  i = require("./ListView");
  n = Symbol("DILListViewItemCounter");
  let ListViewItemCounter;
  let <class_fields_init>;
  class ListViewItemCounter extends undefined { ... }
  <proto:ListViewItemCounter>.beginItem = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ListViewItemCounter>;
  ListViewItemCounter = function <atom:0>;
  // close_loc <class_fields_init>
  ListViewItemCounter#1 = function <atom:0>;
  let ListViewWidgetRenderer;
  let <class_fields_init>#1;
  class ListViewWidgetRenderer extends r.ADILWidgetRendererInternal { ... }
  <proto:ListViewWidgetRenderer>.onRender = function <atom:0>;
  <proto:ListViewWidgetRenderer>.renderChildren = function <atom:0>;
  <proto:ListViewWidgetRenderer>.renderCountedChildren = function <atom:0>;
  <proto:ListViewWidgetRenderer>.renderTemplateChildren = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ListViewWidgetRenderer>;
  ListViewWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  ListViewWidgetRenderer#1 = function <atom:0>;
  let ListViewItemWidgetRenderer;
  let <class_fields_init>#2;
  class ListViewItemWidgetRenderer extends r.ADILWidgetRendererInternal { ... }
  <proto:ListViewItemWidgetRenderer>.onPropsChanged = function <atom:0>;
  <proto:ListViewItemWidgetRenderer>.onRender = function <atom:0>;
  <proto:ListViewItemWidgetRenderer>.renderChildren = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:ListViewItemWidgetRenderer>;
  ListViewItemWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#2
  ListViewItemWidgetRenderer#1 = function <atom:0>;
  // append([], 0, e.DIL_COMPONENT_PROPERTIES)
  [][e.DIL_COMPONENT_PROPERTIES] = "gap";
  [][("gap" ++)] = "itemCount";
  [][("itemCount" ++)] = "index";
  [][("index" ++)] = "indexName";
  [][("indexName" ++)] = "item";
  [][("item" ++)] = "itemName";
  [][("itemName" ++)] = "items";
  [][("items" ++)] = "limit";
  [][("limit" ++)] = "of";
  [][("of" ++)] = "showMoreLabel";
  ("showMoreLabel" ++);
  exports.ListViewWidgetFactory = {properties: [], create: function <atom:0>};
  exports.ListViewItemWidgetFactory = {properties: i.ListViewItem.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/ListViewWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
