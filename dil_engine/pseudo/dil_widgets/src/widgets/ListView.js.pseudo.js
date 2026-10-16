// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=116B file=dil_widgets/src/widgets/ListView
// closure: this
function {
  this.setState({expanded: !this.state.expanded});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=96B file=dil_widgets/src/widgets/ListView
// locals: this, this.active_func, new.target, arguments
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
  this.state = {expanded: false};
  this.renderedItemCount = 0;
  this.handleToggleExpanded = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=0 bc=932B file=dil_widgets/src/widgets/ListView
// locals: i, o, n, this
// closure: h, x, e, t, T, d
function {
  this = this;
  let n;
  let o;
  let i;
  i = {};
  h.DIL_THEME_ATTRIBUTES.apply(this.viewModel, i);
  o = this.onTap;
  n = x(this.viewModel.limit);
  if (!((this.viewModel.itemCount == null))) goto L_12e;
  this.viewModel.itemCount;
  this.renderedItemCount = 0;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", T.list);
  e.setAttributes(i);
  if (!((undefined === o))) goto L_212;
  goto L_217;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityCategory", "button");
  if (!((undefined === this.viewModel.gap))) goto L_28e;
  goto L_2f6;
  // [栈深重同步 4 -> 3]
  e.setAttribute("gap", d.resolveDILSpacing(this.viewModel.gap));
  e.setAttributeFunction("onTap", o);
  this.renderListContent(n);
  this.renderLimitToggle(n);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=44B file=dil_widgets/src/widgets/ListView
// closure: this, t
function {
  return this.renderChildren({visibleItemCount: t});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=44B file=dil_widgets/src/widgets/ListView
// closure: this, t
function {
  return this.renderChildren({skipItemCount: t});   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=2 bc=647B file=dil_widgets/src/widgets/ListView
// args: t
// locals: this
// closure: e, l, i, b, d
function {
  this = this;
  if (!((undefined !== t))) goto L_261;
  e.beginComponent(l.DILExpandableContent, i, undefined, undefined);
  e.setViewModelProperty("animation", b);
  e.setViewModelProperty("expanded", this.state.expanded);
  if (!((undefined === this.viewModel.gap))) goto L_16e;
  goto L_1d6;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("gap", d.resolveDILSpacing(this.viewModel.gap));
  e.setViewModelProperty("renderCollapsedContent", function <atom:0>);
  e.setViewModelProperty("renderExpandedContent", function <atom:0>);
  goto L_286;
  // [栈深重同步 1 -> 0]
  this.renderChildren();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=301B file=dil_widgets/src/widgets/ListView
// args: t
// locals: i, this
// closure: e
function {
  this = this;
  let i;
  if (!((undefined === this.viewModel.renderChildren))) goto L_76;
  e.renderUnnamedSlot(this);
  return;
  if (!((this.viewModel.renderChildren == null))) goto L_c2;
  this.viewModel.renderChildren;
  this.viewModel;
  goto L_c6;
  // [栈深重同步 1 -> 2]
  i = <?>.call(undefined, t);
  if (!((undefined === this.viewModel.itemCount))) goto L_12c;
  if (!(("number" == typeof i))) goto L_12c;
  this.renderedItemCount = i;
  i;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=0 bc=622B file=dil_widgets/src/widgets/ListView
// args: t
// locals: i, r, this
// closure: e, o, p, n
function {
  this = this;
  let r;
  let i;
  if (!((undefined !== t))) goto L_33;
  if (!(!(this.renderedItemCount > t))) goto L_37;
  return;
  i = (this.renderedItemCount - t);
  if (!((this.viewModel.showMoreLabel == null))) goto L_d5;
  this.viewModel.showMoreLabel;
  r = "Show ".concat(i, " more");
  e.beginRender(o, undefined);
  e.beginComponent(p.Button, n, undefined, undefined);
  if (!(this.state.expanded)) goto L_1c8;
  goto L_1cb;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("label", r);
  e.setViewModelProperty("onClickAction", this.handleToggleExpanded);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_widgets/src/widgets/ListView
// closure: this
function {
  return this.handleTap();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=132B file=dil_widgets/src/widgets/ListView
// locals: e
// closure: this
function {
  let e;
  if (!((this.context == null))) goto L_2d;
  this.context;
  goto L_4e;
  e = undefined.runWithUserInteraction;
  if (!((undefined === e))) goto L_7d;
  goto L_83;
  // [栈深重同步 1 -> 0]
  e(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=128B file=dil_widgets/src/widgets/ListView
// locals: this
function {
  this = this;
  if (!(this.isTappable)) goto L_7f;
  if (!((undefined === this.cachedOnTap))) goto L_5b;
  this.cachedOnTap = function <atom:0>;
  function <atom:0>;
  return this.cachedOnTap;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/widgets/ListView
// locals: this
function {
  this = this;
  return this.hasClickHandler;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=194B file=dil_widgets/src/widgets/ListView
// locals: e, t, this
function {
  this = this;
  let t;
  let e;
  e = this.clickCallback;
  if (!((undefined !== e))) goto L_38;
  e();
  return;
  if (!((this.clickAction == null))) goto L_63;
  this.clickAction;
  this;
  goto L_66;
  // [栈深重同步 1 -> 2]
  t = <?>.call(undefined);
  if (!((undefined !== t))) goto L_c1;
  if (!((this.context == null))) goto L_9a;
  this.context;
  goto L_c1;
  undefined.dispatchActionPayload(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=79B file=dil_widgets/src/widgets/ListView
// locals: this
function {
  this = this;
  if (((undefined !== this.clickCallback))) goto L_4e;
  return (undefined !== this.clickAction);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_widgets/src/widgets/ListView
// locals: this
function {
  this = this;
  return this.viewModel.onClick;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_widgets/src/widgets/ListView
// locals: this
function {
  this = this;
  return this.viewModel.onClickAction;
}

// fn x  args=1 vars=1 closure=0 cpool=0 bc=169B file=dil_widgets/src/widgets/ListView
// args: e
function {
  if (((undefined === e))) goto L_1a;
  if ((("auto" === e))) goto L_1a;
  if (!(("number" != typeof e))) goto L_1e;
  return 4;
  if ((!Number.isFinite(e))) goto L_50;
  if (!((e <= 0))) goto L_54;
  return undefined;
  return Math.max(0, Math.floor(e));
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=dil_widgets/src/widgets/ListView
function {
  return "row";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=80B file=dil_widgets/src/widgets/ListView
// locals: this
function {
  this = this;
  if (!((this.viewModel.align == null))) goto L_4f;
  this.viewModel.align;
  return "center";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=77B file=dil_widgets/src/widgets/ListView
// locals: this
function {
  this = this;
  if (!((this.viewModel.padding == null))) goto L_4c;
  this.viewModel.padding;
  return 2.5;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_widgets/src/widgets/ListView
// closure: d
function {
  return d.DIL_DEFAULT_CONTAINER_GAP;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/ListView
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

// fn <atom:0>  args=3 vars=35 closure=0 cpool=28 bc=1345B file=dil_widgets/src/widgets/ListView
// args: require, module, exports
// locals: e, t, i, o, n, r, s, d, a, l, p, c, h, u, v, C, m, g, w, y, I, M, L, b, ListView, <class_fields_init>, ListView#1, x, ListViewItem, <class_fields_init>#1, ListViewItem#1, T
function {
  x = function x;
  let T;
  let ListViewItem#1;
  let ListView#1;
  let b;
  let L;
  let M;
  let I;
  let y;
  let w;
  let g;
  let m;
  let C;
  let v;
  let u;
  let h;
  let c;
  let p;
  let l;
  let a;
  let d;
  let s;
  let r;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ListView = undefined;
  exports.ListViewItem = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "3fQdeJE__M47L7Pj");
  i = e.makeComponentPrototype(undefined, "8pYN6RgIYcqR0Bfg");
  o = e.makeNodePrototype("layout", ["alignItems", "flex-start"], "SWGnX1fecvxdyYQC");
  n = e.makeComponentPrototype(["variant", "outline", "color", "secondary", "size", "sm", "pill", true], "C9pk8Yv_dfUCobyA");
  r = require("dil_core/src/DILComponent");
  s = require("valdi_core/src/Component");
  d = require("dil_core/src/layout/DILSpacing");
  a = require("valdi_core/src/Style");
  l = require("../animation/DILExpandableContent");
  p = require("./Button");
  c = require("./DILFlexContainer");
  h = require("./attributes/DILThemeAttributes");
  u = 4;
  v = -d.resolveDILSpacingUnits(2);
  C = 300;
  m = 50;
  g = 150;
  w = 400;
  y = 200;
  I = 32;
  M = 582;
  L = 382;
  b = l.createDILExpandableContentAnimation({collapse: {completionDelayMs: L, heightDelayMs: m, opacityDelayMs: 0, opacityOptions: {beginFromCurrentState: true, controlPoints: [0.25, 0.1, 0.25, 1], duration: 0.2}, toExpandedContentOpacity: 0}, expand: {completionDelayMs: M, heightDelayMs: 0, opacityDelayMs: g, opacityOptions: {beginFromCurrentState: true, controlPoints: [0.25, 0.1, 0.25, 1], duration: 0.4}, toExpandedContentOpacity: 1}, layoutOptions: {beginFromCurrentState: true, controlPoints: [0.65, 0, 0.35, 1], duration: 0.3}});
  let ListView;
  let <class_fields_init>;
  class ListView extends s.StatefulComponent { ... }
  <proto:ListView>.onRender = function <atom:0>;
  <proto:ListView>.renderListContent = function <atom:0>;
  <proto:ListView>.renderChildren = function <atom:0>;
  <proto:ListView>.renderLimitToggle = function <atom:0>;
  <proto:ListView>.onTap = function <atom:0>;
  <proto:ListView>.isTappable = function <atom:0>;
  <proto:ListView>.handleTap = function <atom:0>;
  <proto:ListView>.hasClickHandler = function <atom:0>;
  <proto:ListView>.clickCallback = function <atom:0>;
  <proto:ListView>.clickAction = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ListView>;
  ListView = function <atom:0>;
  // close_loc <class_fields_init>
  ListView#1 = function <atom:0>;
  exports.ListView = ListView#1;
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  [][r.DIL_COMPONENT_PROPERTIES] = "gap";
  [][("gap" ++)] = "itemCount";
  [][("itemCount" ++)] = "limit";
  [][("limit" ++)] = "showMoreLabel";
  ("showMoreLabel" ++);
  ListView#1.properties = [];
  let ListViewItem;
  let <class_fields_init>#1;
  class ListViewItem extends c.DILFlexContainer { ... }
  <proto:ListViewItem>.getFlexDirection = function <atom:0>;
  <proto:ListViewItem>.getAlign = function <atom:0>;
  <proto:ListViewItem>.getPadding = function <atom:0>;
  <proto:ListViewItem>.getAutoGap = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ListViewItem>;
  ListViewItem = function <atom:0>;
  // close_loc <class_fields_init>#1
  ListViewItem#1 = function <atom:0>;
  exports.ListViewItem = ListViewItem#1;
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  // append([], r.DIL_COMPONENT_PROPERTIES, c.DIL_FLEX_CONTAINER_PROPERTIES)
  c.DIL_FLEX_CONTAINER_PROPERTIES;
  ListViewItem#1.properties = [];
  T = {list: new a.Style({flexDirection: "column", alignItems: "stretch", marginLeft: v, marginRight: v, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/ListView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
