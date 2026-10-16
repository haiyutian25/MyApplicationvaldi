// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=258B file=dil_core/src/DILComponent
// args: i
// closure: this, r
function {
  if ((this.isDestroyed())) goto L_101;
  if (((undefined === this.visibleViewport))) goto L_101;
  this.isVisible = r(this.visibleViewport, i, this.viewportUsesContentCoordinates);
  if ((this.hasDispatchedVisibleAction)) goto L_101;
  this.measureVisibilityAfterDraw();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=322B file=dil_core/src/DILComponent
// locals: i
// closure: this
function {
  let i;
  if ((this.isDestroyed())) goto L_52;
  if (!(this.pendingVisibilityMeasurement)) goto L_55;
  return;
  if (!(this.isVisible)) goto L_c5;
  i = (false !== this.viewModel.onVisibleWhen);
  if (!((undefined === this.visibleCallback))) goto L_11a;
  goto L_141;
  // [栈深重同步 1 -> 0]
  this.dispatchVisibleCallback();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=dil_core/src/DILComponent
// closure: this
function {
  this.pendingVisibilityMeasurement = false;
  this.dispatchVisible();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=400B file=dil_core/src/DILComponent
// locals: i
// closure: this, n
function {
  let i;
  i = this.visibleCallback;
  if ((this.isDestroyed())) goto L_18f;
  if ((!this.isVisible)) goto L_18f;
  if ((this.hasDispatchedVisibleAction)) goto L_18f;
  if (((false === this.viewModel.onVisibleWhen))) goto L_18f;
  if (((undefined === i))) goto L_18f;
  this.hasDispatchedVisibleAction = true;
  this.lastDispatchedVisibilityKey = this.viewModel.onVisibleKey;
  n.runWithoutDILUserInteraction(i);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=4 bc=160B file=dil_core/src/DILComponent
// locals: this, this.active_func, new.target, arguments
// closure: r, n, <class_fields_init>
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
  this.hasDispatchedVisibleAction = false;
  this.lastDispatchedVisibilityKey = null;
  this.isVisible = false;
  this.pendingVisibilityMeasurement = false;
  this.handleVisibilityLayout = function <atom:0>;
  this.dispatchVisible = function <atom:0>;
  this.afterVisibilityDraw = function <atom:0>;
  this.dispatchVisibleCallback = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=1008B file=dil_core/src/DILComponent
// args: i
// locals: t, this
function {
  this = this;
  let t;
  if (!((undefined !== i))) goto L_111;
  if (!((i.onVisibleKey !== this.viewModel.onVisibleKey))) goto L_111;
  this.hasDispatchedVisibleAction = (this.lastDispatchedVisibilityKey === this.viewModel.onVisibleKey);
  this.measureVisibilityAfterDraw();
  if (!((undefined === this.visibleCallback))) goto L_17a;
  if (!((undefined === this.visibleAction))) goto L_17a;
  this.isVisible = false;
  this.visibleViewport = undefined;
  undefined;
  if (!((false === this.viewModel.onVisibleWhen))) goto L_215;
  if (!((this.elicitationVisibility == null))) goto L_1ed;
  this.elicitationVisibility;
  goto L_213;
  undefined.update(false);
  return;
  if (((undefined !== this.visibleCallback))) goto L_292;
  if (!((i == null))) goto L_248;
  i;
  goto L_269;
  if (!((false === undefined.onVisibleWhen))) goto L_292;
  t = (undefined !== this.visibleAction);
  if ((!this.isVisible)) goto L_3ef;
  if (!(this.hasDispatchedVisibleAction)) goto L_307;
  if (((undefined === this.elicitationVisibility))) goto L_3ef;
  if ((!t)) goto L_3ef;
  if (!((undefined !== this.viewModel.onVisibleKey))) goto L_387;
  goto L_3ef;
  // [栈深重同步 1 -> 0]
  this.renderer.onRenderComplete(this.dispatchVisible);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_core/src/DILComponent
// closure: this
function {
  return this.handleTap();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=267B file=dil_core/src/DILComponent
// closure: this, t
function {
  if (!((this.viewModel.interactionElementType == null))) goto L_b6;
  this.viewModel.interactionElementType;
  t.runDILControlInteraction(this.context, this.viewModel, {target: "pressable", affordance: t.DILInteractionAffordance.Pressable}, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=198B file=dil_core/src/DILComponent
// locals: this
// closure: t
function {
  this = this;
  if (!(!this.viewModel.interactionCaptured)) goto L_c5;
  if (!(this.isTappable)) goto L_c5;
  if (!((undefined === this.cachedOnTap))) goto L_a1;
  this.cachedOnTap = function <atom:0>;
  function <atom:0>;
  return this.cachedOnTap;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=46B file=dil_core/src/DILComponent
// locals: this
function {
  this = this;
  if (!(this.hasButtonAccessibility)) goto L_2c;
  return "button";
  return undefined;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_core/src/DILComponent
// locals: this
function {
  this = this;
  return this.hasClickHandler;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_core/src/DILComponent
// locals: this
function {
  this = this;
  return this.hasClickHandler;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=79B file=dil_core/src/DILComponent
// locals: this
function {
  this = this;
  if (((undefined !== this.clickCallback))) goto L_4e;
  return (undefined !== this.clickAction);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_core/src/DILComponent
// locals: this
function {
  this = this;
  return this.viewModel.onClick;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_core/src/DILComponent
// locals: this
function {
  this = this;
  return this.viewModel.onClickAction;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_core/src/DILComponent
// locals: this
function {
  this = this;
  return this.viewModel.onVisibleAction;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_core/src/DILComponent
// locals: this
function {
  this = this;
  return this.viewModel.onVisible;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_core/src/DILComponent
function {
  return false;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_core/src/DILComponent
// locals: this
function {
  this = this;
  return this.viewModel.theme;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_core/src/DILComponent
function {
  return false;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=293B file=dil_core/src/DILComponent
// locals: i, t, this
// closure: s
function {
  this = this;
  let t;
  let i;
  i = {marginLeft: undefined, marginTop: undefined};
  t = this.viewModel.margin;
  if (((undefined === this.viewModel.autoSpacing))) goto L_120;
  if (!((null != t))) goto L_b1;
  if ((("" !== t))) goto L_120;
  s.applyDILAutoSpacingAttributes(i, this.viewModel.autoSpacing);
  return i;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=120B file=dil_core/src/DILComponent
// closure: this
function {
  if (!((false === this.viewModel.onVisibleWhen))) goto L_4a;
  return undefined;
  if (!((this.visibleAction == null))) goto L_74;
  this.visibleAction;
  this;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>);
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=1 bc=1819B file=dil_core/src/DILComponent
// locals: i, t, this
// closure: o, e
function {
  this = this;
  let i;
  i = {};
  if (!(!this.isStyleOverriden)) goto L_1be;
  let t;
  if (!((this.context == null))) goto L_c6;
  this.context;
  goto L_e7;
  o.populateAttributesFromStyle(i, this.viewModel.style, undefined.reportWarning);
  t = this.autoSpacingAttributes;
  if (!((i.marginLeft == null))) goto L_15c;
  i.marginLeft;
  i.marginLeft = t.marginLeft;
  if (!((i.marginTop == null))) goto L_1b5;
  i.marginTop;
  i.marginTop = t.marginTop;
  if (!(this.viewportUsesContentCoordinates)) goto L_1f2;
  i.extendViewportWithChildren = undefined;
  undefined;
  if (!((undefined !== this.viewModel.theme))) goto L_28c;
  i.colorPaletteName = this.viewModel.theme;
  this.viewModel.theme;
  if (!((undefined !== this.accessibilityCategory))) goto L_2e4;
  i.accessibilityCategory = this.accessibilityCategory;
  this.accessibilityCategory;
  if (!((undefined !== this.onTap))) goto L_33c;
  i.onTap = this.onTap;
  this.onTap;
  if (!(!this.hasDispatchedVisibleAction)) goto L_3b0;
  if (((undefined !== this.visibleCallback))) goto L_3b0;
  if (((undefined !== this.visibleAction))) goto L_421;
  if (!((undefined !== this.viewModel.onVisibleKey))) goto L_421;
  if (!((undefined !== this.visibleCallback))) goto L_4d1;
  i.onViewportChanged = this.getOnViewportChanged();
  if (!((undefined !== this.viewModel.onVisibleKey))) goto L_4d1;
  i.onLayout = this.handleVisibilityLayout;
  this.handleVisibilityLayout;
  if (!((undefined !== this.visibleAction))) goto L_6ae;
  if (!((this.context == null))) goto L_528;
  this.context;
  goto L_549;
  if (!((undefined !== undefined.elicitationShownHandler))) goto L_6ae;
  i.onViewportChanged = this.getOnViewportChanged();
  if (!((undefined === this.elicitationVisibility))) goto L_6ae;
  this.elicitationVisibility = new e.DILElicitationVisibility(this.context.elicitationShownHandler, function <atom:0>, this.context.elicitationHostUpdates);
  this.registerDisposable(this.elicitationVisibility);
  if (!(this.viewModel.interactionCaptured)) goto L_716;
  i.touchEnabled = false;
  i.accessibilityNavigation = "ignored";
  "ignored";
  return i;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=40B file=dil_core/src/DILComponent
// args: i, t
// closure: this
function {
  this.handleViewportChanged(i, t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=91B file=dil_core/src/DILComponent
// locals: this
function {
  this = this;
  if (!((undefined === this.cachedOnViewportChanged))) goto L_37;
  this.cachedOnViewportChanged = function <atom:0>;
  function <atom:0>;
  return this.cachedOnViewportChanged;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=140B file=dil_core/src/DILComponent
// args: i, t
// locals: this
// closure: r
function {
  this = this;
  if ((this.isDestroyed())) goto L_8b;
  this.visibleViewport = i;
  this.isVisible = r(i, t, this.viewportUsesContentCoordinates);
  this.dispatchVisible();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=201B file=dil_core/src/DILComponent
// locals: this
function {
  this = this;
  if ((this.pendingVisibilityMeasurement)) goto L_c8;
  if ((this.isDestroyed())) goto L_c8;
  this.pendingVisibilityMeasurement = true;
  this.renderer.onNextDraw(this.afterVisibilityDraw);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=510B file=dil_core/src/DILComponent
// args: i
// locals: t, this
// closure: e
function {
  this = this;
  let t;
  if (!((undefined !== this.elicitationVisibility))) goto L_74;
  goto L_cd;
  // [栈深重同步 1 -> 0]
  if (!(i)) goto L_cc;
  if (!(!this.hasDispatchedVisibleAction)) goto L_cc;
  if (!((this.visibleAction == null))) goto L_c7;
  this.visibleAction;
  this;
  goto L_cd;
  // [栈深重同步 1 -> 2]
  goto L_cd;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (((undefined === t))) goto L_1fd;
  if ((this.hasDispatchedVisibleAction)) goto L_1fd;
  this.hasDispatchedVisibleAction = true;
  this.lastDispatchedVisibilityKey = this.viewModel.onVisibleKey;
  if (!((this.context == null))) goto L_186;
  this.context;
  goto L_1fd;
  if (!((undefined !== this.elicitationVisibility))) goto L_1f7;
  goto L_1fa;
  // [栈深重同步 3 -> 2]
  undefined.dispatchActionPayload(t);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=194B file=dil_core/src/DILComponent
// locals: i, t, this
function {
  this = this;
  let t;
  let i;
  i = this.clickCallback;
  if (!((undefined !== i))) goto L_38;
  i();
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

// fn r  args=3 vars=6 closure=1 cpool=0 bc=784B file=dil_core/src/DILComponent
// args: i, t, e
// locals: s, o, n
// closure: h
function {
  let n;
  let o;
  let s;
  if (((t.width <= 0))) goto L_55;
  if (!((t.height <= 0))) goto L_5a;
  return false;
  s = (t.width * t.height);
  if (!(e)) goto L_c8;
  goto L_1a5;
  // [栈深重同步 1 -> 0]
  o = (Math.min(t.width, (i.x + i.width)) - Math.max(0, i.x));
  if (!(e)) goto L_1ce;
  goto L_2ab;
  // [栈深重同步 1 -> 0]
  n = (Math.min(t.height, (i.y + i.height)) - Math.max(0, i.y));
  return (((Math.max(0, o) * Math.max(0, n)) / s) >= h);
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=396B file=dil_core/src/DILComponent
// args: t
// locals: e, this
// closure: i, l
function {
  this = this;
  let e;
  if (!(this.isDestroyed())) goto L_107;
  if (!(i.isLoggingEnabled)) goto L_105;
  if (!((this.constructor == null))) goto L_d6;
  this.constructor;
  goto L_f7;
  console.error(new Error("Can't call setState on a destroyed component '".concat(undefined.name, "'. This operation does nothing, but it signals a potential memory leak in your application. To resolve this issue, ensure you cancel all subscriptions and asynchronous tasks in the onDestroy method.")));
  return;
  e = l.mergePartial(t, this.state);
  if (!((undefined !== e))) goto L_18b;
  this.state = e;
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=42B file=dil_core/src/DILComponent
// args: i, t
// locals: this
function {
  this = this;
  this.setStateAnimatedPromise(i, t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=39B file=dil_core/src/DILComponent
// closure: this, t
function {
  this.setState(t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=289B file=dil_core/src/DILComponent
// args: t, e
// locals: this
// closure: i
function {
  this = this;
  if (!(this.isDestroyed())) goto L_f8;
  if (!(i.isLoggingEnabled)) goto L_cd;
  if (!((this.constructor == null))) goto L_a9;
  this.constructor;
  goto L_ca;
  console.error("Trying to call setStateAnimated on a destroyed component", undefined.name);
  return Promise.resolve();
  return this.animatePromise(e, function <atom:0>);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_core/src/DILComponent
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

// fn <atom:0>  args=3 vars=19 closure=0 cpool=27 bc=627B file=dil_core/src/DILComponent
// args: require, module, exports
// locals: i, t, e, s, o, n, a, l, h, DILComponent, <class_fields_init>, DILComponent#1, r, DILStatefulComponent, <class_fields_init>#1, DILStatefulComponent#1
function {
  r = function r;
  let DILStatefulComponent#1;
  let DILComponent#1;
  let h;
  let l;
  let a;
  let n;
  let o;
  let s;
  let e;
  let t;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_COMPONENT_PROPERTIES = undefined;
  exports.DILComponent = undefined;
  exports.DILStatefulComponent = undefined;
  i = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("./DILInteraction");
  e = require("dil_core/src/DILElicitationVisibility");
  s = require("dil_core/src/layout/DILAutoSpacingAttributes");
  o = require("dil_core/src/style/DILStyle");
  n = require("dil_renderer/src/DILUserInteraction");
  a = require("valdi_core/src/Component");
  l = require("valdi_core/src/utils/PartialUtils");
  h = 0.5;
  exports.DIL_COMPONENT_PROPERTIES = ["onClickAction", "onVisibleAction", "style", "theme"];
  let DILComponent;
  let <class_fields_init>;
  class DILComponent extends a.Component { ... }
  <proto:DILComponent>.onViewModelUpdate = function <atom:0>;
  <proto:DILComponent>.onTap = function <atom:0>;
  <proto:DILComponent>.accessibilityCategory = function <atom:0>;
  <proto:DILComponent>.hasButtonAccessibility = function <atom:0>;
  <proto:DILComponent>.isTappable = function <atom:0>;
  <proto:DILComponent>.hasClickHandler = function <atom:0>;
  <proto:DILComponent>.clickCallback = function <atom:0>;
  <proto:DILComponent>.clickAction = function <atom:0>;
  <proto:DILComponent>.visibleAction = function <atom:0>;
  <proto:DILComponent>.visibleCallback = function <atom:0>;
  <proto:DILComponent>.viewportUsesContentCoordinates = function <atom:0>;
  <proto:DILComponent>.colorPaletteName = function <atom:0>;
  <proto:DILComponent>.isStyleOverriden = function <atom:0>;
  <proto:DILComponent>.autoSpacingAttributes = function <atom:0>;
  <proto:DILComponent>.baseViewAttributes = function <atom:0>;
  <proto:DILComponent>.getOnViewportChanged = function <atom:0>;
  <proto:DILComponent>.handleViewportChanged = function <atom:0>;
  <proto:DILComponent>.measureVisibilityAfterDraw = function <atom:0>;
  <proto:DILComponent>.dispatchVisibleAction = function <atom:0>;
  <proto:DILComponent>.handleTap = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILComponent>;
  DILComponent = function <atom:0>;
  // close_loc <class_fields_init>
  DILComponent#1 = function <atom:0>;
  exports.DILComponent = DILComponent#1;
  DILComponent#1.properties = exports.DIL_COMPONENT_PROPERTIES;
  DILComponent#1.useRenderChildrenProperty = false;
  let DILStatefulComponent;
  let <class_fields_init>#1;
  class DILStatefulComponent extends DILComponent#1 { ... }
  <proto:DILStatefulComponent>.setState = function <atom:0>;
  <proto:DILStatefulComponent>.setStateAnimated = function <atom:0>;
  <proto:DILStatefulComponent>.setStateAnimatedPromise = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILStatefulComponent>;
  DILStatefulComponent = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILStatefulComponent#1 = function <atom:0>;
  exports.DILStatefulComponent = DILStatefulComponent#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
