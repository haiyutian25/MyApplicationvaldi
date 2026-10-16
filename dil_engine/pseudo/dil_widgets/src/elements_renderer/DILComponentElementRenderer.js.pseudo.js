// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=222B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// args: t, r
// locals: this
// closure: <class_fields_init>, e, p
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.elementType = t;
  this.componentClass = r;
  this.childrenMode = e.DILElementChildrenMode.RenderedNodes;
  this.primitiveTextProp = undefined;
  this.componentRenderStates = [];
  this.allowedPropNames = p.createDILPropNameAllowlist(r.dilV2Properties);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=0 bc=1191B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// args: e, r
// locals: o, e#1, this
// closure: s, m, t, n
function {
  this = this;
  let o;
  this.componentRenderStates.push({options: r, properties: {}, count: 0});
  if (!((this.componentPrototype == null))) goto L_d1;
  this.componentPrototype;
  this.componentPrototype = s.jsx.makeComponentPrototype(undefined, undefined);
  s.jsx.beginComponent(this.componentClass, this.componentPrototype, e);
  if (!((true === r.isModelWrittenDIL))) goto L_1da;
  goto L_1db;
  // [栈深重同步 4 -> 3]
  this.setViewModelProperty("interactionElementType", undefined);
  this.setViewModelProperty("interactionScope", r.interactionScope);
  o = r.renderState;
  this.setViewModelProperty("interactionCaptured", m.isDILInteractionCaptured(o));
  if (!((undefined !== o))) goto L_357;
  if (!((true === this.componentClass.usesDILParentFlexDirection))) goto L_357;
  let e#1;
  e#1 = t.getDILFlexDirection(o);
  if (!((undefined !== e#1))) goto L_356;
  this.setViewModelProperty("parentFlexDirection", e#1);
  if (!((undefined !== o))) goto L_3ff;
  if (!((true === this.componentClass.usesDILParentFlexibility))) goto L_3ff;
  this.setViewModelProperty("parentHasFlexibleMainAxisSize", t.isDILParentFlexible(o));
  if (!((true === this.componentClass.usesDILTableCellSizing))) goto L_4a6;
  if (!((undefined === o))) goto L_47b;
  goto L_4a3;
  // [栈深重同步 4 -> 3]
  this.setViewModelProperty("parentTableCellAlignment", n.getDILTableCellAlignment(o));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// closure: t
function {
  return t();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=44B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// closure: t, h, r
function {
  return h.runWithDILUserInteractionSource(r, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=1 bc=483B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// args: e, t
// locals: r, n, this
// closure: h, d, l
function {
  this = this;
  if (!(("flexInRow" !== e))) goto L_199;
  if (!(this.isSupportedProp(e))) goto L_1e2;
  if (!(("radius" !== e))) goto L_14b;
  if (!(("onClick" === e))) goto L_122;
  if (!(("function" == typeof t))) goto L_122;
  let n;
  let r;
  r = this.currentComponentRenderState().options.interactionSource;
  n = d.createReusableCallback(function <atom:0>);
  this.setViewModelProperty(e, n);
  // close_loc r
  return;
  this.setViewModelProperty(e, t);
  return;
  this.setViewModelProperty(e, l.normalizeDILV2Radius(t));
  return;
  this.currentComponentRenderState().properties[e] = t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=121B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// args: e
// locals: this
// closure: p
function {
  this = this;
  if (((true === this.allowedPropNames[e]))) goto L_78;
  p.warnUnsupportedDILPropName(this.elementType, e);
  return false;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=150B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// args: e, t
// locals: this
// closure: s
function {
  this = this;
  this.currentComponentRenderState().properties[e] = t;
  s.jsx.setViewModelProperty(e, t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=75B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// args: e
// locals: this
function {
  this = this;
  return this.currentComponentRenderState().properties[e];
}

// fn <atom:0>  args=1 vars=6 closure=6 cpool=0 bc=745B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// args: e
// locals: n, s, l, d, this
// closure: t, r, o, a, c, i
function {
  this = this;
  let d;
  let l;
  let s;
  let n;
  n = e.renderState;
  s = this.getViewModelProperty("flex");
  l = this.getViewModelProperty("flexInRow");
  if (!((true === this.allowedPropNames.flex))) goto L_14c;
  if (!((null == s))) goto L_14c;
  if (!((true === l))) goto L_148;
  if (!((undefined !== n))) goto L_148;
  if (!(("row" === t.getDILFlexDirection(n)))) goto L_148;
  goto L_149;
  // [栈深重同步 4 -> 3]
  this.setViewModelProperty("flex", undefined);
  d = this.getViewModelProperty("theme");
  if (!((undefined !== n))) goto L_1e6;
  if (!(r.isDILTheme(d))) goto L_1e6;
  null;
  e;
  e = {renderState: o.renderStateWithDILTheme(n, d)};
  {renderState: o.renderStateWithDILTheme(n, d)};
  return a.renderOptionsWithDILChildCount(c.renderOptionsWithoutDILInlineTextSiblings(i.resolveDILV2ChildRenderOptions(this.elementType, this.currentComponentRenderState().properties, e)), this.currentComponentRenderState());   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=278B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// args: e, t
// locals: this
function {
  this = this;
  this.currentComponentRenderState().count = e.count;
  if (!((e.count > 0))) goto L_a0;
  goto L_115;
  // [栈深重同步 1 -> 0]
  if (!((true === this.componentClass.useRenderChildrenProperty))) goto L_115;
  this.setViewModelProperty("renderChildren", undefined);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=648B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// locals: e, t, this
// closure: i, s
function {
  this = this;
  let t;
  let e;
  e = this.currentComponentRenderState();
  t = i.beginDILV2AutoSpacingElement(this.elementType, e.properties, e.options.renderState);
  try { // catch -> L_210
  if (!((t == null))) goto L_f0;
  t;
  goto L_111;
  if (((undefined !== undefined.autoSpacing))) goto L_163;
  if (!(s.jsx.hasViewModelProperty("autoSpacing"))) goto L_1e0;
  if (!((t == null))) goto L_1bc;
  t;
  goto L_1dd;
  s.jsx.setViewModelProperty("autoSpacing", undefined.autoSpacing);
  this.endComponent();
  <?>;
  // gosub (finally 块) 534
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 534
  throw <?>;
  i.endDILV2AutoSpacingElement(t);
  this.componentRenderStates.pop();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=238B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// locals: e, t, this
// closure: s
function {
  this = this;
  try { // catch -> L_52
  s.jsx.endComponent();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_ed
  let t;
  if (!((e instanceof Error))) goto L_88;
  goto L_8f;
  // [栈深重同步 1 -> 0]
  t = String(e);
  throw new Error("Failed to render DIL v2 element "".concat(this.elementType, "": ", t));
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=141B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// closure: i, t, e
function {
  i.runWithDILV2ChildRenderFrame(t.options.renderState, e.render);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=1 bc=286B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// args: e
// locals: t, r, this
// closure: i, s, d
function {
  this = this;
  let r;
  let t;
  t = this.currentComponentRenderState();
  r = function <atom:0>;
  if (!((true !== this.componentClass.useRenderChildrenProperty))) goto L_f0;
  goto L_11d;
  // [栈深重同步 1 -> 0]
  this.setViewModelProperty("renderChildren", r);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=179B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.componentRenderStates[(this.componentRenderStates.length - 1)];
  if (!((undefined === e))) goto L_af;
  throw new Error("DIL v2 ".concat(this.elementType, " element rendered without an active state."));
  return e;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=12 bc=362B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// args: require, module, exports
// locals: e, t, r, n, o, i, s, l, d, p, a, c, h, m, DILComponentElementRenderer, <class_fields_init>, DILComponentElementRenderer#1
function {
  let DILComponentElementRenderer#1;
  let m;
  let h;
  let c;
  let a;
  let p;
  let d;
  let l;
  let s;
  let i;
  let o;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILComponentElementRenderer = undefined;
  e = require("dil_renderer/src/DILRenderer");
  t = require("dil_compiler/src/DILAutoSpacingRenderState");
  r = require("dil_compiler/src/DILTheme");
  n = require("dil_compiler/src/DILTableCellRenderState");
  o = require("dil_compiler/src/DILThemeRenderState");
  i = require("dil_core/src/layout/DILV2AutoSpacing");
  s = require("valdi_core/src/JSX");
  l = require("dil_core/src/layout/DILV2Radius");
  d = require("valdi_core/src/utils/Callback");
  p = require("./DILPropNameValidation");
  a = require("./DILChildCountRenderState");
  c = require("./DILInlineTextSiblingRenderState");
  h = require("dil_renderer/src/DILUserInteraction");
  m = require("dil_core/src/DILInteractionRenderState");
  let DILComponentElementRenderer;
  let <class_fields_init>;
  class DILComponentElementRenderer extends undefined { ... }
  <proto:DILComponentElementRenderer>.beginRender = function <atom:0>;
  <proto:DILComponentElementRenderer>.setProp = function <atom:0>;
  <proto:DILComponentElementRenderer>.isSupportedProp = function <atom:0>;
  <proto:DILComponentElementRenderer>.setViewModelProperty = function <atom:0>;
  <proto:DILComponentElementRenderer>.getViewModelProperty = function <atom:0>;
  <proto:DILComponentElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <proto:DILComponentElementRenderer>.setChildren = function <atom:0>;
  <proto:DILComponentElementRenderer>.endRender = function <atom:0>;
  <proto:DILComponentElementRenderer>.endComponent = function <atom:0>;
  <proto:DILComponentElementRenderer>.setComponentChildren = function <atom:0>;
  <proto:DILComponentElementRenderer>.currentComponentRenderState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILComponentElementRenderer>;
  DILComponentElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILComponentElementRenderer#1 = function <atom:0>;
  exports.DILComponentElementRenderer = DILComponentElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILComponentElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
