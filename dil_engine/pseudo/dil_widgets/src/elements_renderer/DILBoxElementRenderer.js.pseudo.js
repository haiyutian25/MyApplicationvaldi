// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=338B file=dil_widgets/src/elements_renderer/DILBoxElementRenderer
// locals: this
// closure: m
function {
  this = this;
  if (!(!this.metrics)) goto L_151;
  if (!(this.viewModel.trackImageLoad)) goto L_151;
  if (!(this.viewModel.imageObservation)) goto L_151;
  this.metrics = new m.DILImageLoadMetrics("search-image");
  null;
  this.context;
  this.observationContext = {imageLoadMetrics: this.metrics};
  {imageLoadMetrics: this.metrics};
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=dil_widgets/src/elements_renderer/DILBoxElementRenderer
// locals: this
function {
  this = this;
  if (!((this.metrics == null))) goto L_2c;
  this.metrics;
  goto L_50;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=dil_widgets/src/elements_renderer/DILBoxElementRenderer
// closure: this
function {
  this.renderBox();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=771B file=dil_widgets/src/elements_renderer/DILBoxElementRenderer
// locals: this
// closure: e, n, t, m
function {
  this = this;
  this.ensureObservation();
  if (!(this.observationContext)) goto L_168;
  e.beginComponent(n.DILActionDispacherContextProvider, t, undefined, undefined);
  if ((e.hasContext())) goto L_114;
  e.setContext(this.observationContext);
  e.setUnnamedSlot(function <atom:0>);
  goto L_18d;
  // [栈深重同步 1 -> 0]
  this.renderBox();
  if (!(("unavailable" === this.viewModel.imageObservation))) goto L_302;
  if (!(this.metrics)) goto L_302;
  this.metrics.sourceState = m.DILImageSourceState.Missing;
  this.metrics.finish(m.DILImageLoadOutcome.MissingSource);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=13B file=dil_widgets/src/elements_renderer/DILBoxElementRenderer
// closure: i
function {
  if (!((i == null))) goto L_b;
  i;
  goto L_c;
  undefined();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=3 cpool=1 bc=408B file=dil_widgets/src/elements_renderer/DILBoxElementRenderer
// locals: t, o, i, n, this
// closure: e, s, r
function {
  this = this;
  let n;
  let i;
  let o;
  let t;
  if (((undefined === undefined))) goto L_a3;
  t = <to_object>(undefined).imageObservation;
  o = <to_object>(undefined).trackImageLoad;
  i = <to_object>(undefined).renderChildren;
  n = {};
  <to_object>(undefined);
  {imageObservation: null, trackImageLoad: null, renderChildren: null};
  goto L_ca;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_17;
  // [栈深重同步 1 -> 0]
  e.beginComponent(s.Box, r, undefined, undefined);
  e.setViewModelProperties(n);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/elements_renderer/DILBoxElementRenderer
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

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=47B file=dil_widgets/src/elements_renderer/DILBoxElementRenderer
// locals: this.active_func, new.target, this
// closure: ImageObservationBox, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("box", ImageObservationBox);
  if (!(<class_fields_init>)) goto L_29;
  <class_fields_init>.call(this);
  new new.target("box", ImageObservationBox);
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=230B file=dil_widgets/src/elements_renderer/DILBoxElementRenderer
// args: e, t
// locals: r, this, <home_object>
// closure: o
function {
  <home_object> = <special_object 4>;
  this = this;
  let r;
  super["beginRender"].call(this, e, t);
  r = t.renderState;
  if (!((undefined !== r))) goto L_92;
  this.setViewModelProperty("parentHasAspectRatio", o.hasDILParentAspectRatio(r));
  this.setViewModelProperty("trackImageLoad", (true === t.isModelWrittenDIL));
  return;
}

// fn <atom:0>  args=1 vars=8 closure=4 cpool=0 bc=583B file=dil_widgets/src/elements_renderer/DILBoxElementRenderer
// args: e
// locals: t, r, i, n, s, this, <home_object>
// closure: o, d, c, l
function {
  <home_object> = <special_object 4>;
  this = this;
  let s;
  let n;
  let i;
  let r;
  let t;
  t = super["resolveChildRenderOptions"].call(this, e);
  r = e.renderState;
  i = t.renderState;
  if (!((undefined === i))) goto L_79;
  return t;
  if (!((undefined !== r))) goto L_dc;
  if (!(("row" === o.getDILFlexDirection(r)))) goto L_dc;
  if (!(!(d.getDILParentChildCount(e) > 1))) goto L_e3;
  return t;
  n = this.getViewModelProperty("padding");
  if (!((true !== this.getViewModelProperty("flush")))) goto L_20a;
  if (!((null != n))) goto L_20a;
  if (!(("" !== n))) goto L_20a;
  if ((("object" != typeof n))) goto L_1de;
  if (((undefined !== n.x))) goto L_1de;
  if (((undefined !== n.left))) goto L_1de;
  if (!((undefined !== n.right))) goto L_20a;
  goto L_20b;
  // [栈深重同步 1 -> 0]
  s = undefined;
  null;
  t;
  return {renderState: l.renderStateWithDILContainerGutter(i, s)};
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=92B file=dil_widgets/src/elements_renderer/DILBoxElementRenderer
// args: e, t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(("imageObservation" !== e))) goto L_1e;
  goto L_5b;
  // [栈深重同步 1 -> 0]
  if (!(("active" !== t))) goto L_30;
  if ((("unavailable" !== t))) goto L_5b;
  this.setViewModelProperty(e, t);
  return;
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=9 bc=852B file=dil_widgets/src/elements_renderer/DILBoxElementRenderer
// args: require, module, exports
// locals: e, t, r, o, i, n, s, a, d, l, c, m, ImageObservationBox, <class_fields_init>, ImageObservationBox#1, DILBoxElementRenderer, <class_fields_init>#1, DILBoxElementRenderer#1
function {
  let DILBoxElementRenderer#1;
  let ImageObservationBox#1;
  let m;
  let c;
  let l;
  let d;
  let a;
  let s;
  let n;
  let i;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILBoxElementRenderer = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "ob9gpG616tGhfrm2");
  r = e.makeComponentPrototype(undefined, "swQR0fsov9qDhkXQ");
  o = require("dil_compiler/src/DILAutoSpacingRenderState");
  i = require("valdi_core/src/Component");
  n = require("dil_core/src/DILRootComponent");
  s = require("../widgets/Box");
  a = require("./DILComponentElementRenderer");
  d = require("./DILChildCountRenderState");
  l = require("dil_compiler/src/DILContainerGutterRenderState");
  c = require("../widgets/DILContainerGutter");
  m = require("../DILImageLoadMetrics");
  let ImageObservationBox;
  let <class_fields_init>;
  class ImageObservationBox extends i.Component { ... }
  <proto:ImageObservationBox>.ensureObservation = function <atom:0>;
  <proto:ImageObservationBox>.onDestroy = function <atom:0>;
  <proto:ImageObservationBox>.onRender = function <atom:0>;
  <proto:ImageObservationBox>.renderBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ImageObservationBox>;
  ImageObservationBox = function <atom:0>;
  // close_loc <class_fields_init>
  ImageObservationBox#1 = function <atom:0>;
  ImageObservationBox#1.dilV2Properties = s.Box.dilV2Properties;
  ImageObservationBox#1.usesDILParentFlexDirection = s.Box.usesDILParentFlexDirection;
  ImageObservationBox#1.usesDILParentFlexibility = s.Box.usesDILParentFlexibility;
  ImageObservationBox#1.usesDILTableCellSizing = s.Box.usesDILTableCellSizing;
  ImageObservationBox#1.useRenderChildrenProperty = true;
  let DILBoxElementRenderer;
  let <class_fields_init>#1;
  class DILBoxElementRenderer extends a.DILComponentElementRenderer { ... }
  <proto:DILBoxElementRenderer>.beginRender = function <atom:0>;
  <proto:DILBoxElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <proto:DILBoxElementRenderer>.setProp = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILBoxElementRenderer>;
  DILBoxElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILBoxElementRenderer#1 = function <atom:0>;
  exports.DILBoxElementRenderer = DILBoxElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILBoxElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
