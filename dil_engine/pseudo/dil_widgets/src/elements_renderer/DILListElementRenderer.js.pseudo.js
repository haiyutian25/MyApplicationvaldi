// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=196B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// locals: this.active_func, new.target, this
// closure: d, <class_fields_init>, r
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("list", d.List);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("list", d.List);
  this.renderedPropNames = ["marker"];
  this.childrenMode = r.DILElementChildrenMode.ResolvedValues;
  this.renderStates = [];
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=271B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: e, r
// locals: this, <home_object>
// closure: h
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, r);
  if (!((h == null))) goto L_7e;
  h;
  goto L_9f;
  if ((("solid" === undefined.connector))) goto L_d3;
  if (!((h == null))) goto L_b1;
  h;
  goto L_d2;
  this.renderStates.push({connector: "none", connectedBulletOffset: 4, itemCount: 0, isNestedInConnectedList: (true === undefined.isNestedInConnectedList), listGap: 0, marker: "disc", markerElement: undefined, maxMarkerSize: "md", nextItemIndex: 1, nextItemPosition: 0, ordered: false});
  return;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=0 bc=780B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: e, r
// locals: t, this, <home_object>
// closure: d, S, L
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  if (!(("marker" !== e))) goto L_4e;
  if (!(("ordered" !== e))) goto L_4e;
  if (!(("maxMarkerSize" !== e))) goto L_4e;
  if (!(("start" !== e))) goto L_4e;
  if (!(("connector" !== e))) goto L_4e;
  if (!(("gap" !== e))) goto L_4e;
  super["setProp"].call(this, e, r);
  return;
  if (!(!this.isSupportedProp(e))) goto L_78;
  return;
  t = this.currentRenderState();
  if (!(("start" !== e))) goto L_2c0;
  if (!(("connector" === e))) goto L_142;
  if (!(("string" == typeof r))) goto L_ea;
  goto L_eb;
  // [栈深重同步 3 -> 2]
  t.connector = d.resolveListConnector(undefined);
  this.setViewModelProperty(e, t.connector);
  return undefined;
  if (!(("gap" !== e))) goto L_27e;
  if (!(("marker" === e))) goto L_18e;
  t.marker = S(r, t.ordered);
  goto L_225;
  // [栈深重同步 1 -> 0]
  if (!(("ordered" === e))) goto L_200;
  t.ordered = (true === r);
  t.marker = S(t.marker, t.ordered);
  goto L_225;
  // [栈深重同步 1 -> 0]
  if (!(("maxMarkerSize" === e))) goto L_225;
  if (!((L(r) == null))) goto L_21b;
  L(r);
  t.maxMarkerSize = "md";
  "md";
  if (!(("marker" === e))) goto L_278;
  goto L_279;
  // [栈深重同步 4 -> 3]
  goto L_2bd;
  // [栈深重同步 1 -> 0]
  if (!(("string" != typeof r))) goto L_292;
  if ((("number" != typeof r))) goto L_2bd;
  this.setViewModelProperty(e, r);
  return undefined;
  if (!(("number" == typeof r))) goto L_301;
  if (!(Number.isInteger(r))) goto L_301;
  if (!((r > 0))) goto L_301;
  goto L_302;
  // [栈深重同步 2 -> 1]
  t.nextItemIndex = 1;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: e
// closure: R
function {
  return !R(e);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=45B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// closure: e, i
function {
  e.renderSelected([i], undefined);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=95B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// closure: i, d, e
function {
  if (!((undefined !== i))) goto L_39;
  if (!((undefined !== d))) goto L_39;
  goto L_5e;
  // [栈深重同步 1 -> 0]
  e.render();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=8B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// closure: i, d, e, I, t
function {
  I(t, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=39B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// closure: e, r, n
function {
  return e.renderSelected(r, n);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=1 bc=8B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: r, n
// closure: e, I, t
function {
  I(t, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=10 closure=6 cpool=4 bc=990B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: e, r
// locals: t, n, i, d, r#1, l, this, <home_object>
// closure: R, I, v, s, o, k
function {
  <home_object> = <special_object 4>;
  this = this;
  let l;
  let d;
  let i;
  let n;
  let t;
  t = this.currentRenderState();
  n = this.getViewModelProperty("items");
  if (!(("decimal" === t.marker))) goto L_df;
  if (!(Array.isArray(n))) goto L_df;
  if (!((n.length > 0))) goto L_df;
  t.connectedBulletOffset = 0;
  0;
  if (!((r == null))) goto L_e9;
  r;
  goto L_10e;
  i = undefined.find(R);
  t.markerElement = i;
  if (!((r == null))) goto L_127;
  r;
  goto L_14d;
  d = undefined.filter(function <atom:0>);
  if (!((undefined !== i))) goto L_2d6;
  let r#1;
  r#1 = v(i, t.maxMarkerSize);
  t.connectedBulletOffset = 0;
  this.setViewModelProperty("hasCustomMarker", true);
  this.setViewModelProperty("markerSize", r#1.size);
  this.setViewModelProperty("markerContentSize", r#1.contentSize);
  s.jsx.setNamedSlot("marker", o.createReusableCallback(function <atom:0>));
  k(d, t);
  if (!((undefined === i))) goto L_30d;
  goto L_30e;
  // [栈深重同步 2 -> 1]
  l = (e.count - 1);
  t.itemCount = Math.max(t.itemCount, l);
  super["setChildren"].call(this, {count: l, render: o.createReusableCallback(function <atom:0>), renderSelected: o.createReusableCallback(function <atom:0>)}, r);
  return;
}

// fn <atom:0>  args=0 vars=7 closure=1 cpool=0 bc=837B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// locals: e, r, n, i, s, this, <home_object>
// closure: t
function {
  <home_object> = <special_object 4>;
  this = this;
  try { // catch -> L_2e3
  let s;
  let i;
  let n;
  let r;
  let e;
  e = this.currentRenderState();
  if (!(("solid" === e.connector))) goto L_c4;
  if (!(("disc" === e.marker))) goto L_c4;
  r = (undefined === e.markerElement);
  if (!(e.isNestedInConnectedList)) goto L_172;
  if (!(("none" === e.connector))) goto L_172;
  if (!(("disc" === e.marker))) goto L_172;
  n = (undefined === e.markerElement);
  if (!(("md" !== e.maxMarkerSize))) goto L_1a2;
  goto L_1b3;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_1aa;
  goto L_1b3;
  // [栈深重同步 1 -> 0]
  if (!(n)) goto L_1b2;
  goto L_1b3;
  // [栈深重同步 1 -> 0]
  i = 0;
  if (!((this.getViewModelProperty("gap") == null))) goto L_1e7;
  this.getViewModelProperty("gap");
  s = i;
  this.setViewModelProperty("gap", s);
  this.setViewModelProperty("isNestedInConnectedList", n);
  this.setViewModelProperty("connectedBulletOffset", e.connectedBulletOffset);
  e.listGap = t.resolveDILSpacing(s);
  super["endRender"].call(this);
  <?>;
  // gosub (finally 块) 745
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 745
  throw <?>;
  if (!((undefined === this.renderStates.pop()))) goto L_343;
  throw new Error("Unbalanced DIL v2 list element renderer stack.");
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=104B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.renderStates[(this.renderStates.length - 1)];
  if (!((undefined === e))) goto L_64;
  throw new Error("DIL v2 list element rendered without an active state.");
  return e;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=196B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// locals: this.active_func, new.target, this
// closure: d, <class_fields_init>, r
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("list-item", d.Item);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("list-item", d.Item);
  this.childrenMode = r.DILElementChildrenMode.ResolvedValues;
  this.renderedPropNames = ["marker"];
  this.renderStates = [];
  return this;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=802B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: e, r
// locals: t, e#1, this, <home_object>
// closure: h
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  super["beginRender"].call(this, e, r);
  t = h;
  this.renderStates.push({childOptions: undefined, markerSize: undefined, hasMarkerOverride: false, parentList: t});
  if (!((undefined !== t))) goto L_321;
  let e#1;
  t.nextItemPosition = <t.nextItemPosition_new>;
  e#1 = (t.nextItemPosition++);
  this.setViewModelProperty("connector", t.connector);
  this.setViewModelProperty("connectorClearance", 2);
  this.setViewModelProperty("connectedBulletOffset", t.connectedBulletOffset);
  this.setViewModelProperty("hasNextItem", (e#1 < (t.itemCount - 1)));
  this.setViewModelProperty("listGap", t.listGap);
  this.setViewModelProperty("isNestedInConnectedList", t.isNestedInConnectedList);
  this.setViewModelProperty("marker", t.marker);
  t.nextItemIndex = <t.nextItemIndex_new>;
  this.setViewModelProperty("itemIndex", (t.nextItemIndex++));
  return;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=225B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: e
// locals: r, t, this, <home_object>
// closure: c, i
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  let r;
  r = c.renderOptionsWithDILInlineTextSiblings(super["resolveChildRenderOptions"].call(this, e));
  t = r.renderState;
  if (!((undefined !== t))) goto L_ab;
  null;
  r;
  r = {renderState: i.renderStateWithDILFlexDirection(t, "column")};
  {renderState: i.renderStateWithDILFlexDirection(t, "column")};
  this.currentRenderState().childOptions = r;
  return r;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=258B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: e, r
// locals: this, <home_object>
// closure: L, S
function {
  <home_object> = <special_object 4>;
  this = this;
  if ((("markerSize" === e))) goto L_17;
  if (!(("marker" === e))) goto L_f3;
  if (!(this.isSupportedProp(e))) goto L_101;
  if (!(("markerSize" === e))) goto L_86;
  this.currentRenderState().markerSize = L(r);
  L(r);
  if (!(("marker" === e))) goto L_c9;
  this.currentRenderState().hasMarkerOverride = (null != r);
  r = S(r, false);
  S(r, false);
  goto L_101;
  // [栈深重同步 1 -> 0]
  super["setProp"].call(this, e, r);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=44B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// closure: e, i
function {
  return e.renderSelected([i], undefined);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=96B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// closure: e, i, r, c
function {
  if (!((undefined !== r))) goto L_33;
  goto L_5f;
  // [栈深重同步 1 -> 0]
  e.renderSelected([i], undefined);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=124B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// locals: r
// closure: e, i, c, t, n
function {
  let r;
  r = t.childOptions;
  if (!((r == null))) goto L_57;
  r;
  goto L_78;
  n.runWithDILV2ChildRenderFrame(undefined.renderState, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: e
// closure: R
function {
  return !R(e);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// closure: e, a
function {
  return e.renderSelected(a, undefined);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=117B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// closure: e, a, n, t
function {
  if (!((t.childOptions == null))) goto L_50;
  t.childOptions;
  goto L_71;
  n.runWithDILV2ChildRenderFrame(undefined.renderState, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=9 closure=6 cpool=3 bc=892B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: e, r
// locals: t, i, d, l, a, this, <home_object>
// closure: c, n, R, v, s, o
function {
  <home_object> = <special_object 4>;
  this = this;
  let a;
  let l;
  let d;
  let i;
  let t;
  if (!((undefined === r))) goto L_2a;
  throw new Error("DIL v2 list item renderer requires resolved children.");
  t = this.currentRenderState();
  if (!((r.find(R) == null))) goto L_f2;
  r.find(R);
  if (!(t.hasMarkerOverride)) goto L_a5;
  goto L_f2;
  // [栈深重同步 1 -> 0]
  if (!((t.parentList == null))) goto L_d1;
  t.parentList;
  goto L_f2;
  i = undefined.markerElement;
  if (!((undefined === i))) goto L_10c;
  super["setChildren"].call(this, e, r);
  return;
  if (!((t.markerSize == null))) goto L_18c;
  t.markerSize;
  if (!((t.parentList == null))) goto L_161;
  t.parentList;
  goto L_182;
  if (!((undefined.maxMarkerSize == null))) goto L_18c;
  undefined.maxMarkerSize;
  d = "md";
  l = v(i, d);
  this.setViewModelProperty("hasCustomMarker", true);
  this.setViewModelProperty("markerSize", l.size);
  this.setViewModelProperty("markerContentSize", l.contentSize);
  s.jsx.setNamedSlot("marker", o.createReusableCallback(function <atom:0>));
  a = r.filter(function <atom:0>);
  if (!((a.length > 0))) goto L_37b;
  s.jsx.setUnnamedSlot(o.createReusableCallback(function <atom:0>));
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=129B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  try { // catch -> L_20
  super["endRender"].call(this);
  <?>;
  // gosub (finally 块) 38
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 38
  throw <?>;
  if (!((undefined === this.renderStates.pop()))) goto L_7f;
  throw new Error("Unbalanced DIL v2 list item element renderer stack.");
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=104B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.renderStates[(this.renderStates.length - 1)];
  if (!((undefined === e))) goto L_64;
  throw new Error("DIL v2 list item rendered without an active state.");
  return e;
}

// fn I  args=2 vars=3 closure=1 cpool=0 bc=46B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: e, r
// locals: t
// closure: h
function {
  let t;
  t = h;
  h = e;
  e;
  try { // catch -> L_1e
  r();
  <?>;
  // gosub (finally 块) 36
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 36
  throw <?>;
  h = t;
  t;
  // ret (finally 块) 
  return;
}

// fn S  args=2 vars=2 closure=0 cpool=0 bc=70B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: e, r
function {
  if ((("number" === e))) goto L_17;
  if ((("decimal" === e))) goto L_17;
  if (!(r)) goto L_1f;
  return "decimal";
  if ((("none" === e))) goto L_3c;
  if ((("checkbox" === e))) goto L_3c;
  if (!(("disc" === e))) goto L_40;
  return e;
  return "disc";
}

// fn L  args=1 vars=1 closure=0 cpool=0 bc=35B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: e
function {
  if ((("md" === e))) goto L_1d;
  if ((("lg" === e))) goto L_1d;
  if (!(("xl" === e))) goto L_21;
  return e;
  return undefined;
}

// fn R  args=1 vars=1 closure=1 cpool=0 bc=206B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: r
// closure: e
function {
  if (!(e.isDILRuntimeElement(r))) goto L_cd;
  if (!((r.type === e.DIL_RENDERED_PROP_ELEMENT_TYPE))) goto L_cd;
  if (!((r.props == null))) goto L_a7;
  r.props;
  goto L_cc;
  return ("marker" === undefined[e.DIL_RENDERED_PROP_NAME]);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=47B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: r
// closure: e, f, t
function {
  if (!(e.isDILRuntimeElement(r))) goto L_2e;
  return f(r, t);
}

// fn f  args=2 vars=2 closure=2 cpool=1 bc=113B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: r, t
// closure: e, f
function {
  if (((r.type === t))) goto L_70;
  return r.children.some(function <atom:0>);
}

// fn k  args=2 vars=6 closure=3 cpool=0 bc=717B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: r, t
// locals: n, r#1, i, s
// closure: k, e, R
function {
  if (!((undefined !== r))) goto L_2cc;
  let n;
  for (const n of r) {
    if (!(Array.isArray(n))) goto L_49;
    k(n, t);
   continue;
    if (!(e.isDILRuntimeElement(n))) continue;
    if (!((n.type === e.DIL_FRAGMENT))) goto L_ec;
    k(n.children, t);
   continue;
    if (!(("list-item" === n.type))) continue;
    let s;
    let i;
    let r#1;
    t.itemCount = (t.itemCount ++);
    if (!(("solid" === t.connector))) goto L_1a0;
    if ((!(0 !== t.connectedBulletOffset))) continue;
    if (!((n.props == null))) goto L_1d2;
    n.props;
    goto L_1f3;
    if (!((undefined.marker == null))) goto L_21a;
    undefined.marker;
    r#1 = t.marker;
    if ((("number" === r#1))) goto L_231;
    i = ("decimal" === r#1);
    if ((e.isDILRuntimeElement(r#1))) goto L_2a7;
    s = n.children.some(R);
    if ((i)) goto L_2b2;
    if (!(s)) goto L_2c2;
    t.connectedBulletOffset = 0;
    0;
  }
  return;
}

// fn v  args=2 vars=3 closure=5 cpool=0 bc=630B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: r, t
// locals: n
// closure: e, l, m, u, f
function {
  let n;
  n = r;
  if (((n.type === e.DIL_RENDERED_PROP_ELEMENT_TYPE))) goto L_9b;
  if (!((n.type === e.DIL_FRAGMENT))) goto L_144;
  if (!((1 === n.children.length))) goto L_144;
  if (!(e.isDILRuntimeElement(n.children[0]))) goto L_144;
  n = n.children[0];
  n.children[0];
  goto L_5;
  if (!(("icon" === n.type))) goto L_24e;
  if (!((n.props == null))) goto L_21a;
  n.props;
  goto L_23b;
  return {size: "md", contentSize: Math.min(Math.max(l.resolveDILIconSize(undefined.size), m), u)};
  if (!(("md" === t))) goto L_26f;
  if (!(f(r, "icon"))) goto L_26f;
  goto L_270;
  // [栈深重同步 2 -> 1]
  return {size: t, contentSize: undefined};
}

// fn <atom:0>  args=3 vars=31 closure=0 cpool=20 bc=503B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// args: require, module, exports
// locals: e, r, t, n, i, s, o, d, l, a, c, m, u, p, h, DILListElementRenderer, <class_fields_init>, DILListElementRenderer#1, DILListItemElementRenderer, <class_fields_init>#1, DILListItemElementRenderer#1, I, S, L, R, f, k, v
function {
  I = function I;
  S = function S;
  L = function L;
  R = function R;
  f = function f;
  k = function k;
  v = function v;
  let DILListItemElementRenderer#1;
  let DILListElementRenderer#1;
  let h;
  let p;
  let u;
  let m;
  let c;
  let a;
  let l;
  let d;
  let o;
  let s;
  let i;
  let n;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILListElementRenderer = undefined;
  exports.DILListItemElementRenderer = undefined;
  e = require("dil_renderer/src/DILElement");
  r = require("dil_renderer/src/DILRenderer");
  t = require("dil_core/src/layout/DILSpacing");
  n = require("dil_core/src/layout/DILV2AutoSpacing");
  i = require("dil_compiler/src/DILAutoSpacingRenderState");
  s = require("valdi_core/src/JSX");
  o = require("valdi_core/src/utils/Callback");
  d = require("../widgets/List");
  l = require("../widgets/DILWidgetSizes");
  a = require("./DILComponentElementRenderer");
  c = require("./DILInlineTextSiblingRenderState");
  m = 20;
  u = 24;
  p = 4;
  h = undefined;
  let DILListElementRenderer;
  let <class_fields_init>;
  class DILListElementRenderer extends a.DILComponentElementRenderer { ... }
  <proto:DILListElementRenderer>.beginRender = function <atom:0>;
  <proto:DILListElementRenderer>.setProp = function <atom:0>;
  <proto:DILListElementRenderer>.setChildren = function <atom:0>;
  <proto:DILListElementRenderer>.endRender = function <atom:0>;
  <proto:DILListElementRenderer>.currentRenderState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILListElementRenderer>;
  DILListElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILListElementRenderer#1 = function <atom:0>;
  exports.DILListElementRenderer = DILListElementRenderer#1;
  let DILListItemElementRenderer;
  let <class_fields_init>#1;
  class DILListItemElementRenderer extends a.DILComponentElementRenderer { ... }
  <proto:DILListItemElementRenderer>.beginRender = function <atom:0>;
  <proto:DILListItemElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <proto:DILListItemElementRenderer>.setProp = function <atom:0>;
  <proto:DILListItemElementRenderer>.setChildren = function <atom:0>;
  <proto:DILListItemElementRenderer>.endRender = function <atom:0>;
  <proto:DILListItemElementRenderer>.currentRenderState = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILListItemElementRenderer>;
  DILListItemElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILListItemElementRenderer#1 = function <atom:0>;
  exports.DILListItemElementRenderer = DILListItemElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILListElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
