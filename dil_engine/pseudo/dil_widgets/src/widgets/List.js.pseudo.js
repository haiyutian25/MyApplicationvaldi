// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=154B file=dil_widgets/src/widgets/List
// closure: this, i, o
function {
  if (!((undefined === this.viewModel.items))) goto L_6e;
  goto L_99;
  // [栈深重同步 1 -> 0]
  this.renderItems(i, o);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=1 bc=508B file=dil_widgets/src/widgets/List
// locals: i, o, this
// closure: P, u, e, p, t
function {
  this = this;
  let o;
  let i;
  i = P(this.viewModel.connector);
  o = u(this.viewModel.gap, this.viewModel.maxMarkerSize, i);
  e.beginComponent(p.DILListComponent, t, undefined, undefined);
  e.setViewModelProperty("baseViewAttributes", this.baseViewAttributes);
  e.setViewModelProperty("gap", o);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=148B file=dil_widgets/src/widgets/List
// locals: e, this, <home_object>
// closure: c
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  e = get_super_value(this, super, "autoSpacingAttributes");
  if (!((true === this.viewModel.isNestedInConnectedList))) goto L_8f;
  e.marginTop = c.resolveDILSpacingUnits(1);
  c.resolveDILSpacingUnits(1);
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=43B file=dil_widgets/src/widgets/List
// locals: this
// closure: e
function {
  this = this;
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=46B file=dil_widgets/src/widgets/List
// closure: e, this
function {
  e.renderNamedSlot("marker", this);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=4 cpool=1 bc=1528B file=dil_widgets/src/widgets/List
// args: t, o
// locals: r, s, n, d, this
// closure: e, g, Item, i
function {
  this = this;
  let s;
  let r;
  if (!((this.viewModel.items == null))) goto L_55;
  this.viewModel.items;
  r = [];
  if (!(this.viewModel.ordered)) goto L_a3;
  goto L_f1;
  // [栈深重同步 1 -> 0]
  if (!((this.viewModel.marker == null))) goto L_f1;
  this.viewModel.marker;
  s = "disc";
  let n;
  n = 0;
  if (!((n < r.length))) goto L_5f7;
  let d;
  d = g(r[n]);
  if (!((undefined !== d))) goto L_5eb;
  e.beginComponent(Item, i, "item-".concat(n), undefined);
  e.setViewModelProperty("connector", t);
  e.setViewModelProperty("connectedBulletOffset", this.viewModel.connectedBulletOffset);
  e.setViewModelProperty("description", d.description);
  e.setViewModelProperty("disabled", d.disabled);
  e.setViewModelProperty("hasCustomMarker", this.viewModel.hasCustomMarker);
  e.setViewModelProperty("markerContentSize", this.viewModel.markerContentSize);
  e.setViewModelProperty("markerSize", this.viewModel.markerSize);
  e.setViewModelProperty("hasNextItem", (n < (r.length - 1)));
  e.setViewModelProperty("itemIndex", (n + 1));
  e.setViewModelProperty("isNestedInConnectedList", this.viewModel.isNestedInConnectedList);
  e.setViewModelProperty("label", d.label);
  e.setViewModelProperty("listGap", o);
  e.setViewModelProperty("marker", s);
  e.setNamedSlot("marker", function <atom:0>);
  e.endComponent();
  n = <n_new>;
  (n++);
  goto L_f7;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/List
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

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=199B file=dil_widgets/src/widgets/List
// locals: e
// closure: this, v
function {
  let e;
  e = this.viewModel.checklistBinding;
  if (!((undefined !== e))) goto L_c6;
  v.dispatchActionPayload(this.context, e, undefined, !this.checked);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=63B file=dil_widgets/src/widgets/List
// locals: this, this.active_func, new.target, arguments
// closure: v, <class_fields_init>
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
  this.handleChecklistToggle = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=46B file=dil_widgets/src/widgets/List
// closure: e, this
function {
  e.renderNamedSlot("marker", this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=dil_widgets/src/widgets/List
// closure: this
function {
  this.renderContent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=dil_widgets/src/widgets/List
// closure: this
function {
  this.renderContent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=3 bc=3005B file=dil_widgets/src/widgets/List
// locals: this
// closure: e, m, o, b, r
function {
  this = this;
  if (!((true === this.viewModel.hasCustomMarker))) goto L_613;
  e.beginComponent(m.DILListItemComponent, o, undefined, undefined);
  e.setViewModelProperty("baseViewAttributes", this.baseViewAttributes);
  e.setViewModelProperty("checked", this.checked);
  e.setViewModelProperty("contentGap", b(this.viewModel.gap));
  e.setViewModelProperty("customMarker", true);
  e.setViewModelProperty("marker", this.viewModel.marker);
  e.setViewModelProperty("markerContentSize", this.viewModel.markerContentSize);
  e.setViewModelProperty("markerSize", this.viewModel.markerSize);
  e.setViewModelProperty("itemIndex", this.viewModel.itemIndex);
  e.setViewModelProperty("connector", this.viewModel.connector);
  e.setViewModelProperty("connectorClearance", this.viewModel.connectorClearance);
  e.setViewModelProperty("connectorGap", this.viewModel.listGap);
  e.setViewModelProperty("hasNextItem", this.viewModel.hasNextItem);
  e.setViewModelProperty("useTextLineHeightForMarker", true);
  e.setNamedSlot("marker", function <atom:0>);
  e.setNamedSlot("default", function <atom:0>);
  e.endComponent();
  return;
  e.beginComponent(m.DILListItemComponent, r, undefined, undefined);
  e.setViewModelProperty("baseViewAttributes", this.baseViewAttributes);
  e.setViewModelProperty("checked", this.checked);
  e.setViewModelProperty("contentGap", b(this.viewModel.gap));
  e.setViewModelProperty("marker", this.viewModel.marker);
  e.setViewModelProperty("itemIndex", this.viewModel.itemIndex);
  e.setViewModelProperty("connector", this.viewModel.connector);
  e.setViewModelProperty("connectorClearance", this.viewModel.connectorClearance);
  e.setViewModelProperty("connectedBulletOffset", this.viewModel.connectedBulletOffset);
  if (!(this.viewModel.isNestedInConnectedList)) goto L_a57;
  goto L_a58;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("discMarkerOffset", undefined);
  e.setViewModelProperty("connectorGap", this.viewModel.listGap);
  e.setViewModelProperty("hasNextItem", this.viewModel.hasNextItem);
  e.setViewModelProperty("useTextLineHeightForMarker", true);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_widgets/src/widgets/List
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=342B file=dil_widgets/src/widgets/List
// closure: e, d, S, this, i
function {
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", S.itemDescription);
  if (!((true === this.viewModel.disabled))) goto L_f5;
  goto L_fa;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("color", "color-text-secondary");
  e.setAttributeString("value", i);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=2 bc=740B file=dil_widgets/src/widgets/List
// locals: t, i, o, this
// closure: e, d, S, s, n
function {
  this = this;
  let o;
  let i;
  let t;
  t = this.viewModel.label;
  i = this.viewModel.description;
  if (!((undefined === t))) goto L_cb;
  if (!((undefined === i))) goto L_cb;
  e.renderUnnamedSlot(this);
  return;
  if (!((true === this.viewModel.disabled))) goto L_11a;
  goto L_11f;
  // [栈深重同步 1 -> 0]
  o = "color-text-prose";
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", S.itemText);
  if (!((undefined === t))) goto L_1aa;
  goto L_2ae;
  // [栈深重同步 1 -> 0]
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", S.itemLabel);
  e.setAttributeString("color", o);
  e.setAttributeString("value", t);
  e.endRender();
  if (((undefined === i))) goto L_2bb;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=89B file=dil_widgets/src/widgets/List
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((true !== this.viewModel.disabled))) goto L_58;
  return get_super_value(this, super, "isTappable");
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=121B file=dil_widgets/src/widgets/List
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((undefined === this.viewModel.checklistBinding))) goto L_56;
  return get_super_value(this, super, "clickCallback");
  return this.handleChecklistToggle;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=152B file=dil_widgets/src/widgets/List
// locals: e, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  e = get_super_value(this, super, "baseViewAttributes");
  if (!((undefined === this.viewModel.checklistBinding))) goto L_5d;
  return e;
  null;
  e;
  return {accessibilityCategory: "checkbox", accessibilityStateSelected: this.checked};
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=307B file=dil_widgets/src/widgets/List
// locals: e, this
function {
  this = this;
  let e;
  e = this.viewModel.checklistBinding;
  if (!((e == null))) goto L_55;
  e;
  goto L_76;
  if (!((undefined === undefined.value))) goto L_10b;
  if (!((this.viewModel.checked == null))) goto L_109;
  this.viewModel.checked;
  return (true === this.viewModel.defaultChecked);
  return e.asBoolean();
}

// fn u  args=3 vars=3 closure=4 cpool=0 bc=101B file=dil_widgets/src/widgets/List
// args: e, t, i
// closure: c, p, k, y
function {
  if (!((undefined !== e))) goto L_2c;
  return c.resolveDILSpacing(e);
  if (!(("solid" === i))) goto L_5a;
  return p.DIL_LIST_SOLID_CONNECTOR_DEFAULT_GAP;
  if (!(k(t))) goto L_63;
  return y;
  return 0;
}

// fn k  args=1 vars=1 closure=0 cpool=0 bc=19B file=dil_widgets/src/widgets/List
// args: e
function {
  if ((("lg" === e))) goto L_12;
  return ("xl" === e);
}

// fn b  args=1 vars=1 closure=1 cpool=0 bc=46B file=dil_widgets/src/widgets/List
// args: e
// closure: c
function {
  if (!((undefined !== e))) goto L_2d;
  return c.resolveDILSpacing(e);   // tail call
  return;
}

// fn P  args=1 vars=1 closure=0 cpool=0 bc=21B file=dil_widgets/src/widgets/List
// args: e
function {
  if (!(("solid" === e))) goto L_f;
  return "solid";
  return "none";
}

// fn g  args=1 vars=2 closure=0 cpool=0 bc=331B file=dil_widgets/src/widgets/List
// args: e
// locals: t
function {
  let t;
  if ((("string" == typeof e))) goto L_17;
  if (!(("number" == typeof e))) goto L_27;
  return {label: String(e)};
  if (((null === e))) goto L_64;
  if ((("object" != typeof e))) goto L_64;
  if (!(Array.isArray(e))) goto L_67;
  return;
  t = e;
  if (!(("string" == typeof t.label))) goto L_149;
  if (!(("string" == typeof t.description))) goto L_ed;
  goto L_ee;
  // [栈深重同步 2 -> 1]
  return {description: undefined, disabled: (true === t.disabled), label: t.label};
  return undefined;
}

// fn <atom:0>  args=3 vars=33 closure=0 cpool=17 bc=1616B file=dil_widgets/src/widgets/List
// args: require, module, exports
// locals: e, t, i, o, r, s, n, d, l, c, a, p, m, h, M, v, w, y, List, <class_fields_init>, List#1, Item, <class_fields_init>#1, Item#1, u, k, b, P, g, S
function {
  u = function u;
  k = function k;
  b = function b;
  P = function P;
  g = function g;
  let S;
  let Item#1;
  let List#1;
  let y;
  let w;
  let v;
  let M;
  let h;
  let m;
  let p;
  let a;
  let c;
  let l;
  let d;
  let n;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.List = undefined;
  exports.Item = undefined;
  exports.resolveListGap = undefined;
  exports.resolveListConnector = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "g8n2DQ6RZXN1XLgZ");
  i = e.makeComponentPrototype(undefined, "kLTDOLKopPsLgJX0");
  o = e.makeComponentPrototype(undefined, "gOr7XfOkPY5fiNcm");
  r = e.makeComponentPrototype(undefined, "VQZnpoQF4WPyXHKE");
  s = e.makeNodePrototype("view", undefined, "SSPW946OhiJBRBsh");
  n = e.makeNodePrototype("label", undefined, "L7gBw3w9McDaPJ92");
  d = e.makeNodePrototype("label", undefined, "LgyLCSm9IKhGlh1T");
  l = require("dil_core/src/DILComponent");
  c = require("dil_core/src/layout/DILSpacing");
  a = require("dil_core/src/typography/DILDynamicFont");
  p = require("dil_text/src/list/DILList");
  m = require("dil_text/src/list/DILListItem");
  h = require("dil_text/src/rendering/DILTextTypography");
  M = require("valdi_core/src/Style");
  v = require("./DILWidgetBindingActions");
  w = 0;
  y = c.resolveDILSpacingUnits(4);
  let List;
  let <class_fields_init>;
  class List extends l.DILComponent { ... }
  <proto:List>.onRender = function <atom:0>;
  <proto:List>.autoSpacingAttributes = function <atom:0>;
  <proto:List>.renderSlottedItems = function <atom:0>;
  <proto:List>.renderItems = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:List>;
  List = function <atom:0>;
  // close_loc <class_fields_init>
  List#1 = function <atom:0>;
  exports.List = List#1;
  List#1.dilV2Properties = ["connector", "gap", "items", "marker", "maxMarkerSize", "ordered", "start"];
  // append([], 0, l.DIL_COMPONENT_PROPERTIES)
  [][l.DIL_COMPONENT_PROPERTIES] = "gap";
  [][("gap" ++)] = "items";
  [][("items" ++)] = "marker";
  [][("marker" ++)] = "ordered";
  [][("ordered" ++)] = "connector";
  [][("connector" ++)] = "maxMarkerSize";
  ("maxMarkerSize" ++);
  List#1.properties = [];
  let Item;
  let <class_fields_init>#1;
  class Item extends l.DILComponent { ... }
  <proto:Item>.onRender = function <atom:0>;
  <proto:Item>.renderContent = function <atom:0>;
  <proto:Item>.isTappable = function <atom:0>;
  <proto:Item>.clickCallback = function <atom:0>;
  <proto:Item>.baseViewAttributes = function <atom:0>;
  <proto:Item>.checked = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:Item>;
  Item = function <atom:0>;
  // close_loc <class_fields_init>#1
  Item#1 = function <atom:0>;
  exports.Item = Item#1;
  Item#1.dilV2Properties = ["checked", "description", "disabled", "label", "marker", "markerSize"];
  // append([], 0, l.DIL_COMPONENT_PROPERTIES)
  [][l.DIL_COMPONENT_PROPERTIES] = "checked";
  [][("checked" ++)] = "defaultChecked";
  [][("defaultChecked" ++)] = "description";
  [][("description" ++)] = "disabled";
  [][("disabled" ++)] = "gap";
  [][("gap" ++)] = "id";
  [][("id" ++)] = "label";
  [][("label" ++)] = "marker";
  [][("marker" ++)] = "markerSize";
  ("markerSize" ++);
  Item#1.properties = [];
  exports.resolveListGap = u;
  exports.resolveListConnector = P;
  S = {itemText: new M.Style({flexDirection: "column"}), itemLabel: new M.Style({font: a.dynamicSystemFontForSize(h.resolveDILTextFontSize("md")), lineHeightMultiple: (h.resolveDILTextLineHeight("md") / h.resolveDILTextFontSize("md")), numberOfLines: 0}), itemDescription: new M.Style({font: a.dynamicSystemFontForSize(14)})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/List
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
