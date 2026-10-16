// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=124B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: l, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(l.CLIENT_DEFINED_WIDGET_TYPE, l.ClientDefinedWidget);
  if (!(<class_fields_init>)) goto L_69;
  <class_fields_init>.call(this);
  new new.target(l.CLIENT_DEFINED_WIDGET_TYPE, l.ClientDefinedWidget);
  this.resolveElementRenderer = e;
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=83B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// args: e, t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, t);
  this.renderState = {key: e, options: t, previous: this.renderState};
  return;
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=821B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// args: t, r
// locals: i, l, this, <home_object>
// closure: n, e
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(("bind" !== t))) goto L_2d8;
  if (!(("fallback" !== t))) goto L_27e;
  if (!(("invocationId" === t))) goto L_26e;
  let l;
  let i;
  if (!(!this.isSupportedProp(t))) goto L_59;
  return;
  i = this.currentState();
  i.invocationId = r;
  l = n.resolveClientDefinedWidgetMapping(i.options.clientDefinedWidgets, r);
  if (!((undefined === i.fallback))) goto L_244;
  if (!((l == null))) goto L_131;
  l;
  goto L_152;
  if (!((undefined !== undefined.nativeFallback))) goto L_244;
  i.fallback = e.createDilElement(l.nativeFallback.type, l.nativeFallback.props, []);
  this.setViewModelProperty("hasNativeFallback", true);
  this.setViewModelProperty(t, r);
  return;
  super["setProp"].call(this, t, r);
  return;
  if (!(!this.isSupportedProp(t))) goto L_2a8;
  return;
  this.currentState().fallback = r;
  return;
  if (!(!this.isSupportedProp(t))) goto L_302;
  return;
  this.setViewModelProperty("appBlockBind", {value: r});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=122B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// closure: this, l, n, e
function {
  this.renderFallbackValue(l, "".concat(n.key, ":fallback"), e);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=1 bc=310B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// args: e, t
// locals: n, l, e#1, this, <home_object>
// closure: r, i
function {
  <home_object> = <special_object 4>;
  this = this;
  let l;
  let n;
  n = this.currentState();
  l = n.fallback;
  if (!((undefined !== l))) goto L_126;
  let e#1;
  e#1 = this.resolveChildRenderOptions(n.options);
  r.jsx.setNamedSlot("fallback", i.createReusableCallback(function <atom:0>));
  // close_loc e#1
  super["setChildren"].call(this, e, t);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=530B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// locals: e, t, this, <home_object>
// closure: n
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  e = this.currentState();
  try { // catch -> L_1dc
  let t;
  t = n.resolveClientDefinedWidgetMapping(e.options.clientDefinedWidgets, e.invocationId);
  if (!((undefined !== t))) goto L_16e;
  this.setViewModelProperty("invocationId", t.invocationId);
  goto L_1c5;
  // [栈深重同步 1 -> 0]
  this.setViewModelProperty("invocationId", undefined);
  this.setViewModelProperty("refIndex", undefined);
  super["endRender"].call(this);
  <?>;
  // gosub (finally 块) 482
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 482
  throw <?>;
  this.renderState = e.previous;
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=66B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.renderState;
  if (!((undefined === e))) goto L_3e;
  throw new Error("DIL v2 client-defined widget rendered without an active element.");
  return e;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=639B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// args: t, r, i
// locals: this
// closure: e
function {
  this = this;
  if (!((null != t))) goto L_27e;
  if (!(("boolean" != typeof t))) goto L_27e;
  if (!(Array.isArray(t))) goto L_6d;
  this.renderFallbackChildren(t, r, i);
  return;
  if (!(e.isDILRuntimeElement(t))) goto L_229;
  if (!((t.type !== e.DIL_FRAGMENT))) goto L_1de;
  if (!(("string" != typeof t.type))) goto L_11e;
  throw new Error("DIL v2 client-defined widget fallback must resolve to a registered element.");
  if (!((e.readRuntimeElementKey(t) == null))) goto L_1d7;
  e.readRuntimeElementKey(t);
  this.renderFallbackElement(t.type, t.props, t.children, String(r), i);
  return;
  this.renderFallbackChildren(t.children, r, i);
  return;
  if (!(("string" != typeof t))) goto L_23d;
  if ((("number" != typeof t))) goto L_27d;
  this.renderFallbackElement("text", {value: String(t)}, [], r, i);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=116B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// args: e, t, r
// locals: i, this
function {
  this = this;
  let i;
  i = 0;
  if (!((i < e.length))) goto L_73;
  this.renderFallbackValue(e[i], "".concat(t, ":", i), r);
  i = <i_new>;
  (i++);
  goto L_7;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=45B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// closure: this, o, n, e
function {
  this.renderFallbackChildren(o, n, e);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=61B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// args: t, r
// closure: this, n, e
function {
  if (!((r == null))) goto L_2d;
  r;
  goto L_31;
  if (!((undefined(e) == null))) goto L_39;
  undefined(e);
  this.renderFallbackChildren(t, n, e);
  return;
}

// fn <atom:0>  args=5 vars=12 closure=2 cpool=2 bc=817B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// args: e, r, i, n, l
// locals: d, s, t, e#1, o, a, this
// closure: t, o
function {
  this = this;
  let s;
  let d;
  d = this.resolveElementRenderer(e);
  if (!((undefined === d))) goto L_71;
  throw new Error("Unknown DIL v2 client-defined widget fallback element "".concat(e, ""."));
  if (!((d.childrenMode === t.DILElementChildrenMode.PrimitiveText))) goto L_105;
  goto L_106;
  // [栈深重同步 1 -> 0]
  s = undefined;
  d.beginRender(n, l);
  try { // catch -> L_301
  let a;
  let o;
  let e#1;
  if (!((undefined !== r))) goto L_190;
  let t;
  for (const t of r) {
    if (!(("key" !== t))) goto L_18a;
    d.setProp(t, r[t]);
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  if (!((undefined !== s))) goto L_1e7;
  d.setProp(d.primitiveTextProp, s);
  if (!((d.resolveChildRenderOptions == null))) goto L_215;
  d.resolveChildRenderOptions;
  d;
  goto L_21b;
  // [栈深重同步 1 -> 2]
  if (!((<?>.call(undefined, l) == null))) goto L_223;
  <?>.call(undefined, l);
  e#1 = l;
  if (!((undefined === s))) goto L_22e;
  goto L_231;
  // [栈深重同步 1 -> 0]
  o = [];
  a = {count: o.length, render: function <atom:0>, renderSelected: function <atom:0>};
  if (!((d.childrenMode === t.DILElementChildrenMode.ResolvedValues))) goto L_2ed;
  goto L_2ee;
  // [栈深重同步 4 -> 3]
  d.setChildren(a, undefined);
  // close_loc o
  // close_loc e#1
  <?>;
  // gosub (finally 块) 775
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 775
  throw <?>;
  d.endRender();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=9 bc=301B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// args: require, module, exports
// locals: e, t, r, i, n, l, d, o, DILClientDefinedWidgetElementRenderer, <class_fields_init>, DILClientDefinedWidgetElementRenderer#1
function {
  let DILClientDefinedWidgetElementRenderer#1;
  let o;
  let d;
  let l;
  let n;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILClientDefinedWidgetElementRenderer = undefined;
  e = require("dil_renderer/src/DILElement");
  t = require("dil_renderer/src/DILRenderer");
  r = require("valdi_core/src/JSX");
  i = require("valdi_core/src/utils/Callback");
  n = require("../DILClientDefinedWidgetMapping");
  l = require("../widgets/ClientDefinedWidget");
  d = require("./DILComponentElementRenderer");
  o = require("./primitiveChildrenToString");
  let DILClientDefinedWidgetElementRenderer;
  let <class_fields_init>;
  class DILClientDefinedWidgetElementRenderer extends d.DILComponentElementRenderer { ... }
  <proto:DILClientDefinedWidgetElementRenderer>.beginRender = function <atom:0>;
  <proto:DILClientDefinedWidgetElementRenderer>.setProp = function <atom:0>;
  <proto:DILClientDefinedWidgetElementRenderer>.setChildren = function <atom:0>;
  <proto:DILClientDefinedWidgetElementRenderer>.endRender = function <atom:0>;
  <proto:DILClientDefinedWidgetElementRenderer>.currentState = function <atom:0>;
  <proto:DILClientDefinedWidgetElementRenderer>.renderFallbackValue = function <atom:0>;
  <proto:DILClientDefinedWidgetElementRenderer>.renderFallbackChildren = function <atom:0>;
  <proto:DILClientDefinedWidgetElementRenderer>.renderFallbackElement = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILClientDefinedWidgetElementRenderer>;
  DILClientDefinedWidgetElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILClientDefinedWidgetElementRenderer#1 = function <atom:0>;
  exports.DILClientDefinedWidgetElementRenderer = DILClientDefinedWidgetElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILClientDefinedWidgetElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
