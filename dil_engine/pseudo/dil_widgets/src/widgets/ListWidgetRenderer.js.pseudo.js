// fn <atom:0>  args=6 vars=7 closure=1 cpool=0 bc=97B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r, t, n, i, o
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.markerValue = e;
  this.listId = r;
  this.maxMarkerSize = t;
  this.connector = n;
  this.listGap = i;
  this.itemCount = o;
  this.nextIndex = 1;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/widgets/ListWidgetRenderer
// locals: this
function {
  this = this;
  return this.markerValue;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  this.markerValue = e;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=104B file=dil_widgets/src/widgets/ListWidgetRenderer
// locals: e, this
function {
  this = this;
  let e;
  this.nextIndex = <this.nextIndex_new>;
  e = (this.nextIndex++);
  return {hasNextItem: (e < this.itemCount), itemIndex: e};
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=0 bc=144B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, d, p
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.pathId = r;
  this.componentRenderer = new d.DILValdiComponentRenderer(p.List, e, true);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/ListWidgetRenderer
// locals: this
function {
  this = this;
  this.componentRenderer.onPropsUpdated();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=39B file=dil_widgets/src/widgets/ListWidgetRenderer
// closure: this, e, r
function {
  return this.renderChildren(e, r);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=296B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
// locals: this
function {
  this = this;
  this.componentRenderer.begin(e, r, undefined, this.name);
  if (!((this.children.length > 0))) goto L_df;
  this.componentRenderer.setUnnamedSlot(function <atom:0>);
  this.componentRenderer.end(r);
  return;
}

// fn <atom:0>  args=2 vars=10 closure=8 cpool=0 bc=895B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
// locals: t, i, o, s, d, a, n, this
// closure: k, L, h, p, x, n, l, ListItemCounter
function {
  this = this;
  let a;
  let d;
  let s;
  let o;
  let i;
  let t;
  t = k(this.props.getPropertyValueAsString("marker", e), this.props.getPropertyValueAsBoolean("ordered", e));
  if (!((L(this.props.getPropertyValueAsString("maxMarkerSize", e)) == null))) goto L_109;
  L(this.props.getPropertyValueAsString("maxMarkerSize", e));
  i = h;
  o = p.resolveListConnector(this.props.getPropertyValueAsString("connector", e));
  s = p.resolveListGap(this.props.getPropertyValueAsStringOrNumber("gap", e), this.props.getPropertyValueAsString("maxMarkerSize", e), o);
  d = x(this.children, e);
  a = n.renderStateWithDILAutoSpacing(r, undefined).withProperty(l, new ListItemCounter(t, this.pathId, i, o, s, d));
  let n;
  n = 0;
  if (!((n < this.children.length))) goto L_37e;
  this.children[n].onRender(e, a);
  n = <n_new>;
  (n++);
  goto L_2f9;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=0 bc=159B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, d, p
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.pathId = r;
  this.markerRenderers = [];
  this.componentRenderer = new d.DILValdiComponentRenderer(p.Item, e, true);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/ListWidgetRenderer
// locals: this
function {
  this = this;
  this.componentRenderer.onPropsUpdated();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=55B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  if (!((e.marker == null))) goto L_2d;
  e.marker;
  this.markerRenderers = [];
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=78B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e
// closure: s
function {
  return ("Icon" === s.unwrapDILWidgetRenderer(e).name);
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=39B file=dil_widgets/src/widgets/ListWidgetRenderer
// closure: this, e, r
function {
  return this.renderMarker(e, r);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=137B file=dil_widgets/src/widgets/ListWidgetRenderer
// locals: r
// closure: this, e, p
function {
  let r;
  r = 0;
  if (!((r < this.children.length))) goto L_88;
  this.children[r].onRender(e, p);
  r = <r_new>;
  (r++);
  goto L_5;
  return;
}

// fn <atom:0>  args=2 vars=11 closure=8 cpool=3 bc=2051B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
// locals: t, n, i, o, d, a, c, p, this
// closure: s, l, ListItemCounter, I, R, y, C, m
function {
  this = this;
  let p;
  let c;
  let a;
  let d;
  let o;
  let i;
  let n;
  let t;
  t = r.getProperty(l);
  n = this.readItemMarker(e, t);
  if (!((t instanceof ListItemCounter))) goto L_a1;
  goto L_a2;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!(("checkbox" === n))) goto L_131;
  if (!((t instanceof ListItemCounter))) goto L_131;
  goto L_132;
  // [栈深重同步 1 -> 0]
  o = undefined;
  d = y(o, (true === this.props.getPropertyValueAsBoolean("defaultChecked", e)));
  a = (this.markerRenderers.length > 0);
  if (!(a)) goto L_1e5;
  goto L_1e6;
  // [栈深重同步 1 -> 0]
  c = undefined;
  p = C(r, n, d);
  this.componentRenderer.begin(e, r, undefined, this.name);
  this.componentRenderer.setViewModelProperty("checklistBinding", o);
  this.componentRenderer.setViewModelProperty("hasCustomMarker", a);
  this.componentRenderer.setViewModelProperty("markerSize", c);
  if (!(("md" === c))) goto L_3f7;
  if (!(this.markerRenderers.some(function <atom:0>))) goto L_3f7;
  goto L_3f8;
  // [栈深重同步 4 -> 3]
  this.componentRenderer.setViewModelProperty("markerContentSize", undefined);
  if (!(a)) goto L_44e;
  goto L_44f;
  // [栈深重同步 4 -> 3]
  this.componentRenderer.setNamedSlot("marker", undefined);
  if (!((t instanceof ListItemCounter))) goto L_68f;
  if (!((undefined !== i))) goto L_68f;
  this.componentRenderer.setViewModelProperty("marker", n);
  this.componentRenderer.setViewModelProperty("connector", t.connector);
  this.componentRenderer.setViewModelProperty("hasNextItem", i.hasNextItem);
  this.componentRenderer.setViewModelProperty("listGap", t.listGap);
  if (!(("decimal" === n))) goto L_745;
  goto L_745;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== n))) goto L_745;
  this.componentRenderer.setViewModelProperty("marker", n);
  if (!(("decimal" === n))) goto L_745;
  this.componentRenderer.setViewModelProperty("itemIndex", 1);
  if (!((this.children.length > 0))) goto L_7b9;
  this.componentRenderer.setUnnamedSlot(function <atom:0>);
  this.componentRenderer.end(r);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=136B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
// locals: t, this
function {
  this = this;
  let t;
  t = 0;
  if (!((t < this.markerRenderers.length))) goto L_87;
  this.markerRenderers[t].onRender(e, r);
  t = <t_new>;
  (t++);
  goto L_7;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=137B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
// locals: t, this
// closure: ListItemCounter
function {
  this = this;
  let t;
  t = this.props.getPropertyValueAsString("marker", e);
  if (!((undefined !== t))) goto L_5d;
  return t;
  if (!((r instanceof ListItemCounter))) goto L_87;
  return r.marker;
  return undefined;
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=0 bc=182B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
// locals: t, this
// closure: L, ListItemCounter, f, h
function {
  this = this;
  let t;
  t = L(this.props.getPropertyValueAsString("markerSize", e));
  if (!((r instanceof ListItemCounter))) goto L_aa;
  if (!((t == null))) goto L_86;
  t;
  return f(r.maxMarkerSize, r.maxMarkerSize);
  if (!((t == null))) goto L_b5;
  t;
  return h;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=0 bc=189B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
// locals: t, n, this
// closure: l, ListItemCounter, g
function {
  this = this;
  let n;
  let t;
  t = r.getProperty(l);
  if (!(!(t instanceof ListItemCounter))) goto L_3c;
  return;
  n = this.props.getPropertyValueAsString("variant", e);
  if (!(g(n))) goto L_bc;
  t.setMarker(n);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/ListWidgetRenderer
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

// fn g  args=1 vars=1 closure=0 cpool=0 bc=41B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e
function {
  if ((("none" === e))) goto L_28;
  if ((("disc" === e))) goto L_28;
  if ((("decimal" === e))) goto L_28;
  return ("checkbox" === e);
}

// fn I  args=3 vars=6 closure=3 cpool=0 bc=318B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: n, i, o
// locals: s, d, a
// closure: e, r, t
function {
  let a;
  let d;
  let s;
  s = {key: "__checklists", next: {key: i, next: {key: o}}};
  d = n.resolveValue("state");
  if ((Array.isArray(d))) goto L_b0;
  if (!(e.isCELMap(d))) goto L_10d;
  if (!((r.resolveValueAtPath(d, s, false, undefined) == null))) goto L_ea;
  r.resolveValueAtPath(d, s, false, undefined);
  goto L_10e;
  goto L_10e;
  // [栈深重同步 1 -> 0]
  a = undefined;
  return new t.DILWidgetBinding(s, a);
}

// fn R  args=4 vars=6 closure=1 cpool=0 bc=247B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r, t, n
// locals: o, s
// closure: i
function {
  let s;
  let o;
  if (!((e.nodeIdProperty == null))) goto L_30;
  e.nodeIdProperty;
  goto L_55;
  o = undefined.getValue(r);
  if (!(("string" == typeof o))) goto L_6e;
  if (!((o.length > 0))) goto L_6e;
  return o;
  s = i.getDILEachIndexPath(n);
  if (!((0 === s.length))) goto L_9f;
  return t;
  return "".concat(t, "-", s.join("_"));
}

// fn y  args=2 vars=2 closure=0 cpool=0 bc=86B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
function {
  if (!((e == null))) goto L_a;
  e;
  goto L_2b;
  if (!((undefined === undefined.value))) goto L_30;
  return r;
  return e.asBoolean();
}

// fn k  args=2 vars=2 closure=0 cpool=0 bc=25B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
function {
  if (!((undefined !== e))) goto L_7;
  return e;
  if (!((true === r))) goto L_13;
  return "decimal";
  return "disc";
}

// fn L  args=1 vars=1 closure=0 cpool=0 bc=34B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e
function {
  if ((("md" === e))) goto L_1d;
  if ((("lg" === e))) goto L_1d;
  if (!(("xl" === e))) goto L_21;
  return e;
  return;
}

// fn f  args=2 vars=2 closure=1 cpool=0 bc=17B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
// closure: u
function {
  if (!((u[e] > u[r]))) goto L_f;
  return r;
  return e;
}

// fn x  args=2 vars=4 closure=1 cpool=0 bc=38B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
// locals: t, n
// closure: P
function {
  let t;
  t = 0;
  let n;
  for (const n of e) {
    t = (t + P(n, r));
    (t + P(n, r));
  }
  return t;
}

// fn P  args=2 vars=6 closure=6 cpool=0 bc=314B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
// locals: t, n, i, e#1
// closure: s, V, S, v, o, x
function {
  let i;
  let n;
  let t;
  t = s.makeScopedDILWidgetRendererCELScope(e, r);
  n = s.unwrapDILWidgetRenderer(e);
  if (!((undefined === n))) goto L_61;
  return 0;
  if (!(V(n))) goto L_6a;
  return 1;
  i = S(n, t);
  if (!((undefined !== i))) goto L_87;
  return v(n, t, i);   // tail call
  if (!(o.isDILTransparentWidgetRenderer(n))) goto L_138;
  let e#1;
  e#1 = n.getDILTransparentWidgetChildren(t);
  if (!((undefined === e#1))) goto L_eb;
  return 0;
  return x(e#1.children, e#1.celScope);
  return 0;
}

// fn V  args=1 vars=1 closure=0 cpool=0 bc=85B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e
function {
  if ((("Item" === e.name))) goto L_54;
  return ("List.Item" === e.name);
}

// fn S  args=2 vars=3 closure=0 cpool=0 bc=281B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r
// locals: t
function {
  let t;
  if (!(("Each" !== e.name))) goto L_2e;
  return;
  if (!((e.props.getPropertyValue("items", r) == null))) goto L_cb;
  e.props.getPropertyValue("items", r);
  t = e.props.getPropertyValue("of", r);
  if (!((undefined === t))) goto L_d7;
  return [];
  if (!(!Array.isArray(t))) goto L_115;
  throw new Error("Invalid Each node: "items" or "of" must be an array.");
  return t;
}

// fn v  args=3 vars=7 closure=2 cpool=0 bc=207B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r, t
// locals: n, i, o, s
// closure: M, x
function {
  let o;
  let i;
  let n;
  if (!((M(e, "itemName", r) == null))) goto L_2a;
  M(e, "itemName", r);
  if (!((M(e, "item", r) == null))) goto L_2a;
  M(e, "item", r);
  n = "item";
  if (!((M(e, "indexName", r) == null))) goto L_4c;
  M(e, "indexName", r);
  if (!((M(e, "index", r) == null))) goto L_4c;
  M(e, "index", r);
  i = "index";
  o = 0;
  let s;
  s = 0;
  if (!((s < t.length))) goto L_cb;
  {}[n] = t[s];
  t[s];
  {}[i] = s;
  s;
  o = (o + x(e.children, r.subscopeWithValues({})));
  (o + x(e.children, r.subscopeWithValues({})));
  s = <s_new>;
  (s++);
  goto L_54;
  return o;
}

// fn M  args=3 vars=5 closure=0 cpool=0 bc=227B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r, t
// locals: n, i
function {
  let i;
  let n;
  n = e.props.getProperty(r);
  i = e.props.getPropertyValueAsString(r, t);
  if (!((undefined !== n))) goto L_e2;
  if (!((undefined === i))) goto L_de;
  throw new Error("Invalid Each node: "".concat(r, "" must be a string."));
  return i;
  return;
}

// fn C  args=3 vars=3 closure=1 cpool=0 bc=74B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r, t
// closure: c
function {
  if (!(("checkbox" === r))) goto L_48;
  if (!(t)) goto L_48;
  return c.renderStateWithDILInheritedTextStyleValues(e, {color: "secondary", textDecoration: "strikethrough"});
  return e;
}

// fn <atom:0>  args=4 vars=4 closure=1 cpool=0 bc=10B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r, t, n
// closure: ListWidgetRenderer
function {
  return new ListWidgetRenderer(e, n);
}

// fn <atom:0>  args=4 vars=4 closure=1 cpool=0 bc=10B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e, r, t, n
// closure: ItemWidgetRenderer
function {
  return new ItemWidgetRenderer(e, n);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: e
// closure: ListMarkerWidgetRenderer
function {
  return new ListMarkerWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=44 closure=0 cpool=34 bc=886B file=dil_widgets/src/widgets/ListWidgetRenderer
// args: require, module, exports
// locals: e, r, t, n, i, o, s, d, a, c, p, l, h, m, u, ListItemCounter, <class_fields_init>, ListItemCounter#1, ListWidgetRenderer, <class_fields_init>#1, ListWidgetRenderer#1, ItemWidgetRenderer, <class_fields_init>#2, ItemWidgetRenderer#1, ListMarkerWidgetRenderer, <class_fields_init>#3, ListMarkerWidgetRenderer#1, g, I, R, y, k, L, f, x, P, V, S, v, M, C
function {
  g = function g;
  I = function I;
  R = function R;
  y = function y;
  k = function k;
  L = function L;
  f = function f;
  x = function x;
  P = function P;
  V = function V;
  S = function S;
  v = function v;
  M = function M;
  C = function C;
  let ListMarkerWidgetRenderer#1;
  let ItemWidgetRenderer#1;
  let ListWidgetRenderer#1;
  let ListItemCounter#1;
  let u;
  let m;
  let h;
  let l;
  let p;
  let c;
  let a;
  let d;
  let s;
  let o;
  let i;
  let n;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ListWidgetFactory = undefined;
  exports.ItemWidgetFactory = undefined;
  exports.ListMarkerWidgetFactory = undefined;
  e = require("cel/src/CELValue");
  r = require("dil_cel/src/CELStatePath");
  t = require("dil_cel/src/WidgetBinding");
  n = require("dil_compiler/src/DILAutoSpacingRenderState");
  i = require("dil_compiler/src/intrinsics/Each");
  o = require("dil_compiler/src/DILTransparentWidgetRenderer");
  s = require("dil_compiler/src/DILWidgetRendererUnwrap");
  d = require("dil_compiler/src/DILValdiComponentRenderer");
  a = require("dil_compiler/src/DILTypes");
  c = require("dil_core/src/style/DILInheritedTextStyleRenderState");
  p = require("./List");
  l = Symbol("DILListItemCounter");
  h = "md";
  m = 16;
  u = {md: 0, lg: 1, xl: 2};
  let ListItemCounter;
  let <class_fields_init>;
  class ListItemCounter extends undefined { ... }
  <proto:ListItemCounter>.marker = function <atom:0>;
  <proto:ListItemCounter>.setMarker = function <atom:0>;
  <proto:ListItemCounter>.nextItem = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ListItemCounter>;
  ListItemCounter = function <atom:0>;
  // close_loc <class_fields_init>
  ListItemCounter#1 = function <atom:0>;
  let ListWidgetRenderer;
  let <class_fields_init>#1;
  class ListWidgetRenderer extends a.ADILWidgetRendererInternal { ... }
  <proto:ListWidgetRenderer>.onPropsChanged = function <atom:0>;
  <proto:ListWidgetRenderer>.onRender = function <atom:0>;
  <proto:ListWidgetRenderer>.renderChildren = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ListWidgetRenderer>;
  ListWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  ListWidgetRenderer#1 = function <atom:0>;
  let ItemWidgetRenderer;
  let <class_fields_init>#2;
  class ItemWidgetRenderer extends a.ADILWidgetRendererInternal { ... }
  <proto:ItemWidgetRenderer>.onPropsChanged = function <atom:0>;
  <proto:ItemWidgetRenderer>.onRenderedPropsChanged = function <atom:0>;
  <proto:ItemWidgetRenderer>.onRender = function <atom:0>;
  <proto:ItemWidgetRenderer>.renderMarker = function <atom:0>;
  <proto:ItemWidgetRenderer>.readItemMarker = function <atom:0>;
  <proto:ItemWidgetRenderer>.readCustomMarkerSize = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:ItemWidgetRenderer>;
  ItemWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#2
  ItemWidgetRenderer#1 = function <atom:0>;
  let ListMarkerWidgetRenderer;
  let <class_fields_init>#3;
  class ListMarkerWidgetRenderer extends a.ADILWidgetRendererInternal { ... }
  <proto:ListMarkerWidgetRenderer>.onRender = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:ListMarkerWidgetRenderer>;
  ListMarkerWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#3
  ListMarkerWidgetRenderer#1 = function <atom:0>;
  exports.ListWidgetFactory = {properties: p.List.properties, create: function <atom:0>};
  exports.ItemWidgetFactory = {properties: p.Item.properties, create: function <atom:0>};
  exports.ListMarkerWidgetFactory = {properties: ["variant"], create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/ListWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
