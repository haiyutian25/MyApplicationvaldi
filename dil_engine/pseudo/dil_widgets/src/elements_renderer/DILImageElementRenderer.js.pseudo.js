// fn <atom:0>  args=2 vars=5 closure=3 cpool=0 bc=271B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// args: e, r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, t, s
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e, r);
  if (!(<class_fields_init>)) goto L_23;
  <class_fields_init>.call(this);
  new new.target(e, r);
  this.imageElementType = e;
  this.childrenMode = t.DILElementChildrenMode.ResolvedValues;
  this.renderedPropNames = ["fallback"];
  this.attributionPrototype = s.jsx.makeComponentPrototype(undefined, undefined);
  this.attributionStates = [];
  this.asyncImageScopes = [];
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=656B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// args: e, t
// locals: this, <home_object>
// closure: n
function {
  <home_object> = <special_object 4>;
  this = this;
  if ((("async_image" === t.interactionScope))) goto L_9c;
  this.asyncImageScopes.push(("async_image_group" === t.interactionScope));
  if (!(("search-image" === this.imageElementType))) goto L_15b;
  if (!(("async_image" === t.interactionScope))) goto L_15b;
  goto L_15c;
  // [栈深重同步 3 -> 2]
  this.attributionStates.push(undefined);
  super["beginRender"].call(this, e, t);
  this.setViewModelProperty("useLoadingFrame", true);
  this.setViewModelProperty("trackImageLoad", (true === t.isModelWrittenDIL));
  this.setViewModelProperty("streamingAnimation", t.streamingAnimation);
  if (!(n.imageFillsDILFrame(t))) goto L_28f;
  this.setViewModelProperty("fillContainer", true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=470B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// closure: s, o, this, d, l, n
function {
  s.jsx.beginComponent(o.ImageAttribution, this.attributionPrototype, "image-attribution");
  s.jsx.setViewModelProperty("source", d);
  s.jsx.setViewModelProperty("always", ("always" === l));
  s.jsx.setViewModelProperty("responseContentWidth", n);
  s.jsx.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=8 closure=5 cpool=1 bc=773B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// locals: e, t, n, l, e#1, d, this, <home_object>
// closure: s, o, r, i, a
function {
  <home_object> = <special_object 4>;
  this = this;
  let l;
  let n;
  let t;
  let e;
  if (!(("search-image" === this.imageElementType))) goto L_6e;
  e = (true === this.getViewModelProperty("upgradeToFullRes"));
  if (!((null == this.getViewModelProperty("radius")))) goto L_d5;
  if (!(e)) goto L_d0;
  goto L_d2;
  // [栈深重同步 4 -> 3]
  this.setViewModelProperty("radius", 16);
  this.asyncImageScopes.pop();
  t = this.attributionStates.pop();
  if (!((t == null))) goto L_171;
  t;
  goto L_1b9;
  n = undefined.getProperty(r.DIL_IMAGE_ATTRIBUTION_CONTENT_WIDTH);
  l = this.getViewModelProperty("attributionOverlay");
  if (!((undefined !== n))) goto L_2f6;
  if (((true === l))) goto L_203;
  if (!(("always" === l))) goto L_2f6;
  let d;
  let e#1;
  e#1 = i.getDILTrustedNetworkPolicy(t);
  if (!((undefined === e#1))) goto L_242;
  goto L_295;
  // [栈深重同步 1 -> 0]
  d = r.resolveDILImageAttribution(this.getViewModelProperty("searchImage"), e#1);
  if (!((undefined !== d))) goto L_2f2;
  this.setViewModelProperty("renderLoadedOverlay", a.createReusableCallback(function <atom:0>));
  // close_loc d
  super["endComponent"].call(this);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=288B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// args: e, t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(("attributionOverlay" !== e))) goto L_f8;
  if ((("hoverZoom" !== e))) goto L_67;
  if (!((true !== this.asyncImageScopes[(this.asyncImageScopes.length - 1)]))) goto L_cc;
  if ((("asyncImageActions" === e))) goto L_11f;
  if ((("galleryCount" === e))) goto L_11f;
  if (!(("allowSave" === e))) goto L_b8;
  if ((("search-image" === this.imageElementType))) goto L_11f;
  goto L_11f;
  // [栈深重同步 1 -> 0]
  goto L_11f;
  // [栈深重同步 1 -> 0]
  this.setViewModelProperty(e, t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=80B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// closure: e, r, n
function {
  e.renderSelected([r], n.renderOptionsWithoutDILImageFrame);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=77B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// closure: e, i, n
function {
  e.renderSelected(i, n.renderOptionsWithoutDILImageFrame);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=49B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// args: e
// locals: t
// closure: n, r
function {
  let t;
  t = n.renderOptionsWithoutDILImageFrame(e);
  return r(t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=1 bc=121B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// args: t, r
// closure: n, e, a
function {
  if (!((undefined === r))) goto L_4e;
  goto L_75;
  // [栈深重同步 4 -> 3]
  e.renderSelected(t, a.createReusableCallback(function <atom:0>));
  return;
}

// fn <atom:0>  args=2 vars=7 closure=5 cpool=3 bc=550B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// args: e, t
// locals: r, i, o, this, <home_object>
// closure: n, a, d, m, s
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  let r;
  if (!((undefined === t))) goto L_6b;
  throw new Error("DIL v2 ".concat(this.imageElementType, " renderer requires resolved children."));
  r = undefined;
  i = [];
  let o;
  for (const o of t) {
    if (!(d(o))) goto L_91;
    if (!((r == null))) goto L_8b;
    r;
    r = o;
    goto L_c4;
    // [栈深重同步 4 -> 3]
    if (!(m(o))) goto L_c4;
    i.push(o);
  }
  if (!((undefined !== r))) goto L_178;
  this.setViewModelProperty("hasFallback", true);
  s.jsx.setNamedSlot("fallback", a.createReusableCallback(function <atom:0>));
  if (!((0 !== i.length))) goto L_225;
  this.setViewModelProperty("hasOverlay", true);
  super["setChildren"].call(this, {count: i.length, render: a.createReusableCallback(function <atom:0>), renderSelected: a.createReusableCallback(function <atom:0>)}, i);
  return;
}

// fn d  args=1 vars=1 closure=1 cpool=0 bc=206B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// args: t
// closure: e
function {
  if (!(e.isDILRuntimeElement(t))) goto L_cd;
  if (!((t.type === e.DIL_RENDERED_PROP_ELEMENT_TYPE))) goto L_cd;
  if (!((t.props == null))) goto L_a7;
  t.props;
  goto L_cc;
  return ("fallback" === undefined[e.DIL_RENDERED_PROP_NAME]);
}

// fn m  args=1 vars=1 closure=1 cpool=0 bc=105B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// args: e
// closure: m
function {
  if (!((null != e))) goto L_68;
  if (!(("boolean" != typeof e))) goto L_68;
  if ((!Array.isArray(e))) goto L_68;
  return e.some(m);
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=7 bc=289B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// args: require, module, exports
// locals: e, t, r, i, o, s, a, n, l, DILImageElementRenderer, <class_fields_init>, DILImageElementRenderer#1, d, m
function {
  d = function d;
  m = function m;
  let DILImageElementRenderer#1;
  let l;
  let n;
  let a;
  let s;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILImageElementRenderer = undefined;
  e = require("dil_renderer/src/DILElement");
  t = require("dil_renderer/src/DILRenderer");
  r = require("../DILImageAttribution");
  i = require("../DILTrustedNetworkRenderState");
  o = require("../widgets/ImageAttribution");
  s = require("valdi_core/src/JSX");
  a = require("valdi_core/src/utils/Callback");
  n = require("./DILImageFrameRenderState");
  l = require("./DILComponentElementRenderer");
  let DILImageElementRenderer;
  let <class_fields_init>;
  class DILImageElementRenderer extends l.DILComponentElementRenderer { ... }
  <proto:DILImageElementRenderer>.beginRender = function <atom:0>;
  <proto:DILImageElementRenderer>.endComponent = function <atom:0>;
  <proto:DILImageElementRenderer>.setProp = function <atom:0>;
  <proto:DILImageElementRenderer>.setChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILImageElementRenderer>;
  DILImageElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILImageElementRenderer#1 = function <atom:0>;
  exports.DILImageElementRenderer = DILImageElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILImageElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
