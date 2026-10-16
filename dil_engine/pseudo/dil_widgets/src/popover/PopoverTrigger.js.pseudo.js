// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=565B file=dil_widgets/src/popover/PopoverTrigger
// closure: this
function {
  this.clearHoverTimers();
  if (!(this.isUncontrolledOpen)) goto L_134;
  this.isUncontrolledOpen = false;
  this.openedByHover = false;
  this.invalidateNativeSheetPresentation();
  if (!((this.context == null))) goto L_c1;
  this.context;
  goto L_132;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_ea;
  undefined.anchoredOverlayPresenter;
  goto L_132;
  undefined.dismissOverlay(this.rootRef);
  return;
  if (!((undefined !== this.viewModel.content))) goto L_234;
  this.beginNativeSheetPresentation();
  this.isUncontrolledOpen = true;
  this.openedByHover = false;
  this.presentOverlay(this.viewModel.content, true);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=53B file=dil_widgets/src/popover/PopoverTrigger
// args: e
// closure: this
function {
  this.isHoveringTrigger = e;
  this.syncHoverPresentation();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=235B file=dil_widgets/src/popover/PopoverTrigger
// closure: this
function {
  this.refreshHoverBinding();
  if (!((true !== this.viewModel.controlledOpen))) goto L_c3;
  if (!(this.isUncontrolledOpen)) goto L_ea;
  goto L_ea;
  // [栈深重同步 1 -> 0]
  this.syncControlledOverlay();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=108B file=dil_widgets/src/popover/PopoverTrigger
// closure: this
function {
  this.clearHoverTimers();
  this.isUncontrolledOpen = false;
  this.openedByHover = false;
  this.invalidateNativeSheetPresentation();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=115B file=dil_widgets/src/popover/PopoverTrigger
// args: e
// closure: this
function {
  this.isActiveOverlay = e;
  this.clearPointerIntent();
  if (!(e)) goto L_72;
  if (!(this.openedByHover)) goto L_72;
  this.pointerGraceArea = [];
  [];
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=279B file=dil_widgets/src/popover/PopoverTrigger
// args: e
// closure: this, v
function {
  if (!(this.openedByHover)) goto L_116;
  if (!(this.isActiveOverlay)) goto L_116;
  this.clearPointerIntent();
  this.pointerGraceArea = v.createPointerIntentArea(e.position, e.from, e.to);
  v.createPointerIntentArea(e.position, e.from, e.to);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=563B file=dil_widgets/src/popover/PopoverTrigger
// args: e
// closure: this, v
function {
  if (!(this.openedByHover)) goto L_232;
  if (!(this.isActiveOverlay)) goto L_232;
  if ((e.overTrigger)) goto L_9e;
  if (!(e.overContent)) goto L_ca;
  goto L_232;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== this.pointerGraceArea))) goto L_232;
  if (!(v.isPointInPolygon(e.position, this.pointerGraceArea))) goto L_189;
  if ((!e.overOtherPopup)) goto L_232;
  this.clearPointerIntent();
  this.hoverDismissTimer = this.dilTimer.setTimeout(this.closeHoveredPopover, 0);
  this.dilTimer.setTimeout(this.closeHoveredPopover, 0);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=297B file=dil_widgets/src/popover/PopoverTrigger
// closure: this
function {
  this.hoverDismissTimer = undefined;
  if (!(this.isActiveOverlay)) goto L_128;
  if (!(this.openedByHover)) goto L_128;
  this.handlePopoverDismiss();
  if (!((this.context == null))) goto L_b7;
  this.context;
  goto L_128;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_e0;
  undefined.anchoredOverlayPresenter;
  goto L_128;
  undefined.dismissOverlay(this.rootRef);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=198B file=dil_widgets/src/popover/PopoverTrigger
// closure: this
function {
  this.handlePopoverDismiss();
  if (!((this.context == null))) goto L_54;
  this.context;
  goto L_c5;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_7d;
  undefined.anchoredOverlayPresenter;
  goto L_c5;
  undefined.dismissOverlay(this.rootRef);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=764B file=dil_widgets/src/popover/PopoverTrigger
// closure: h, this, e, i, y, l
function {
  if (!(h.Device.isWeb())) goto L_245;
  if (!(!h.Device.isDesktop())) goto L_245;
  if (!((true !== this.viewModel.controlledOpen))) goto L_245;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", y.mobileContent);
  if (!((this.viewModel.content == null))) goto L_1b2;
  this.viewModel.content;
  goto L_21b;
  undefined.renderBody(l.PopoverContentPresentation.Anchored);
  e.endRender();
  return;
  if (!((this.viewModel.content == null))) goto L_292;
  this.viewModel.content;
  goto L_2fb;
  undefined.renderBody(l.PopoverContentPresentation.Anchored);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=251B file=dil_widgets/src/popover/PopoverTrigger
// locals: e
// closure: this
function {
  let e;
  this.hoverOpenTimer = undefined;
  e = this.viewModel.content;
  if (!(this.isHoverPresentationEnabled())) goto L_fa;
  if (!(this.isHoveringTrigger)) goto L_fa;
  if (!((undefined !== e))) goto L_fa;
  this.isUncontrolledOpen = true;
  this.openedByHover = true;
  this.presentOverlay(e, true);
  return;
}

// fn <atom:0>  args=0 vars=6 closure=8 cpool=1 bc=1511B file=dil_widgets/src/popover/PopoverTrigger
// locals: t, i, n, r, d, a
// closure: this, h, c, s, l, e, o, y
function {
  let a;
  let d;
  let r;
  let n;
  let i;
  let t;
  t = this.viewModel.content;
  if (!((undefined === t))) goto L_60;
  return;
  i = h.Device.getWindowWidth();
  if (!((this.context == null))) goto L_d7;
  this.context;
  goto L_f8;
  n = (true === undefined.nativePopoverMeasuredWidthEnabled);
  if (!(n)) goto L_130;
  if (!((this.nativeSheetContentWidth == null))) goto L_1ae;
  this.nativeSheetContentWidth;
  goto L_1ae;
  // [栈深重同步 1 -> 0]
  if (!(h.Device.isAndroid())) goto L_1ab;
  goto L_1ae;
  // [栈深重同步 1 -> 0]
  r = i;
  if (!(s.isVersionAtLeast(91))) goto L_21f;
  goto L_264;
  // [栈深重同步 1 -> 0]
  d = l.PopoverContentPresentation.Anchored;
  if (!((d === l.PopoverContentPresentation.NativeSheet))) goto L_2e5;
  if (!(t.translucent)) goto L_2de;
  goto L_2e6;
  // [栈深重同步 1 -> 0]
  goto L_2e6;
  // [栈深重同步 1 -> 0]
  a = undefined;
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", y.nativeSheetHost);
  e.setAttributeString("backgroundColor", a);
  e.setAttributeNumber("maxHeight", (0.85 * h.Device.getWindowHeight()));
  if (!(n)) goto L_461;
  goto L_462;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onContentWidthChange", undefined);
  e.setAttributeFunction("onDismiss", this.handleNativeSheetDismiss);
  e.setAttribute("open", true);
  if (!(s.isVersionAtLeast(210))) goto L_55f;
  goto L_560;
  // [栈深重同步 4 -> 3]
  e.setAttribute("showCloseButton", undefined);
  e.setAttributeNumber("width", r);
  t.renderBody(d);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=11 cpool=12 bc=338B file=dil_widgets/src/popover/PopoverTrigger
// locals: this, this.active_func, new.target, arguments
// closure: v, h, e, i, y, l, c, s, o, <class_fields_init>, d
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
  this.rootRef = new d.ElementRef();
  this.isActiveOverlay = false;
  this.isHoveringTrigger = false;
  this.isUncontrolledOpen = false;
  this.openedByHover = false;
  this.nativeSheetPresentationGeneration = 0;
  this.handleTriggerTap = function <atom:0>;
  this.handleTriggerHoverChange = function <atom:0>;
  this.handleLayoutComplete = function <atom:0>;
  this.handlePopoverDismiss = function <atom:0>;
  this.handleActiveChange = function <atom:0>;
  this.handlePointerExit = function <atom:0>;
  this.handlePointerMove = function <atom:0>;
  this.closeHoveredPopover = function <atom:0>;
  this.handleNativeSheetDismiss = function <atom:0>;
  this.renderAnchoredBody = function <atom:0>;
  this.openHoveredPopover = function <atom:0>;
  this.renderNativeSheet = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=213B file=dil_widgets/src/popover/PopoverTrigger
// locals: this
// closure: r
function {
  this = this;
  this.dilTimer = r.resolveDILTimer();
  if (!((this.context == null))) goto L_5c;
  this.context;
  goto L_cb;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_85;
  undefined.anchoredOverlayPresenter;
  goto L_cb;
  this.hoverBinding = undefined.observeTrigger(this.rootRef);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=653B file=dil_widgets/src/popover/PopoverTrigger
// args: e
// locals: this
function {
  this = this;
  this.refreshHoverBinding();
  if (!((true === this.viewModel.controlledOpen))) goto L_124;
  this.resetHoverPresentation();
  if (!(this.isUncontrolledOpen)) goto L_fc;
  this.isUncontrolledOpen = false;
  this.openedByHover = false;
  this.invalidateNativeSheetPresentation();
  this.syncControlledOverlay();
  return;
  if (!((e == null))) goto L_12f;
  e;
  goto L_150;
  if (!((true === undefined.controlledOpen))) goto L_1f1;
  if (!((this.context == null))) goto L_182;
  this.context;
  goto L_1f1;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_1ab;
  undefined.anchoredOverlayPresenter;
  goto L_1f1;
  undefined.dismissOverlay(this.rootRef);
  if ((this.isHoverPresentationEnabled())) goto L_240;
  this.resetHoverPresentation();
  if (!(this.isUncontrolledOpen)) goto L_28c;
  this.presentOrDismissUncontrolledOverlay();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=335B file=dil_widgets/src/popover/PopoverTrigger
// locals: this
function {
  this = this;
  if (!((this.hoverBinding == null))) goto L_2c;
  this.hoverBinding;
  goto L_50;
  undefined.dispose();
  this.clearHoverTimers();
  this.isUncontrolledOpen = false;
  this.openedByHover = false;
  this.invalidateNativeSheetPresentation();
  if (!((this.context == null))) goto L_df;
  this.context;
  goto L_14e;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_108;
  undefined.anchoredOverlayPresenter;
  goto L_14e;
  undefined.dismissOverlay(this.rootRef);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=925B file=dil_widgets/src/popover/PopoverTrigger
// locals: this
// closure: e, t, y
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.rootRef);
  e.setAttributeStyle("style", y.trigger);
  e.setAttributes(this.baseViewAttributes);
  e.setAttributeString("accessibilityLabel", this.viewModel.ariaLabel);
  if (!((undefined === this.viewModel.ariaLabel))) goto L_1f6;
  goto L_1fb;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "leaf");
  if (!((true === this.viewModel.block))) goto L_277;
  goto L_27c;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("alignSelf", "flex-start");
  if (!((true === this.viewModel.block))) goto L_2f8;
  goto L_2f9;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", undefined);
  e.setAttributeFunction("onLayoutComplete", this.handleLayoutComplete);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=111B file=dil_widgets/src/popover/PopoverTrigger
// locals: this
function {
  this = this;
  if (!((true === this.viewModel.controlledOpen))) goto L_4c;
  return undefined;
  return this.handleTriggerTap;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/popover/PopoverTrigger
function {
  return true;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=414B file=dil_widgets/src/popover/PopoverTrigger
// locals: this
function {
  this = this;
  if (((true !== this.viewModel.open))) goto L_91;
  if (!((undefined === this.viewModel.content))) goto L_133;
  if (!((this.context == null))) goto L_c1;
  this.context;
  goto L_19d;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_eb;
  undefined.anchoredOverlayPresenter;
  goto L_19d;
  goto L_19d;
  // [栈深重同步 1 -> 0]
  this.presentOverlay(this.viewModel.content, false);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=388B file=dil_widgets/src/popover/PopoverTrigger
// locals: this
function {
  this = this;
  if (!((undefined === this.viewModel.content))) goto L_119;
  this.isUncontrolledOpen = false;
  this.invalidateNativeSheetPresentation();
  if (!((this.context == null))) goto L_a8;
  this.context;
  goto L_117;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_d1;
  undefined.anchoredOverlayPresenter;
  goto L_117;
  undefined.dismissOverlay(this.rootRef);
  return;
  this.presentOverlay(this.viewModel.content, true);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=161B file=dil_widgets/src/popover/PopoverTrigger
// args: e, t
// locals: this
function {
  this = this;
  if (!((this.context == null))) goto L_2c;
  this.context;
  goto L_a0;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_55;
  undefined.anchoredOverlayPresenter;
  goto L_a0;
  undefined.presentOverlay(this.makeOverlayRequest(e, t));
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=1123B file=dil_widgets/src/popover/PopoverTrigger
// args: e, t
// locals: this
// closure: h
function {
  this = this;
  if ((!t)) goto L_1e1;
  if (!((this.context == null))) goto L_86;
  this.context;
  goto L_a7;
  if (((true !== undefined.nativePopoverPresentationEnabled))) goto L_1e1;
  if ((h.Device.isWeb())) goto L_1e1;
  if ((h.Device.isDesktop())) goto L_1e1;
  if (!(!h.Device.isIOS())) goto L_1e6;
  if (!(!h.Device.isAndroid())) goto L_1e6;
  goto L_208;
  // [栈深重同步 2 -> 1]
  if (!(t)) goto L_23a;
  goto L_23b;
  // [栈深重同步 2 -> 1]
  if (!(this.openedByHover)) goto L_288;
  goto L_289;
  // [栈深重同步 2 -> 1]
  if (!(this.openedByHover)) goto L_2d6;
  goto L_2d7;
  // [栈深重同步 2 -> 1]
  return {anchorRef: this.rootRef, renderBody: this.renderAnchoredBody, renderNativePresentation: this.renderNativeSheet, dismissible: t, onDismiss: undefined, onPointerExit: undefined, onPointerMove: undefined, onActiveChange: this.handleActiveChange, avoidCollisions: e.avoidCollisions, width: e.width, minWidth: e.minWidth, maxWidth: e.maxWidth, side: e.side, sideOffset: e.sideOffset, align: e.align, alignOffset: e.alignOffset, translucent: e.translucent};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=dil_widgets/src/popover/PopoverTrigger
// locals: this
function {
  this = this;
  this.pointerGraceArea = undefined;
  if (!((this.hoverDismissTimer == null))) goto L_38;
  this.hoverDismissTimer;
  this;
  goto L_3b;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.hoverDismissTimer = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=223B file=dil_widgets/src/popover/PopoverTrigger
// locals: this
function {
  this = this;
  if (!((true !== this.viewModel.controlledOpen))) goto L_de;
  if (!((true === this.viewModel.showOnHover))) goto L_de;
  return (undefined !== this.viewModel.content);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=163B file=dil_widgets/src/popover/PopoverTrigger
// locals: this
function {
  this = this;
  if (!((this.hoverBinding == null))) goto L_2c;
  this.hoverBinding;
  goto L_a2;
  undefined.update({enabled: this.isHoverPresentationEnabled(), onHoverChange: this.handleTriggerHoverChange});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=528B file=dil_widgets/src/popover/PopoverTrigger
// locals: e, t, this
// closure: p
function {
  this = this;
  if (!(this.isHoverPresentationEnabled())) goto L_1e9;
  if (!(this.isHoveringTrigger)) goto L_1ae;
  if (!(!this.isUncontrolledOpen)) goto L_20f;
  if (!((undefined === this.hoverOpenTimer))) goto L_20f;
  let t;
  let e;
  e = this.viewModel.hoverOpenDelay;
  if (!(("number" == typeof e))) goto L_134;
  if (!(Number.isFinite(e))) goto L_134;
  if (!((e >= 0))) goto L_134;
  goto L_137;
  // [栈深重同步 1 -> 0]
  t = p;
  this.hoverOpenTimer = this.dilTimer.setTimeout(this.openHoveredPopover, t);
  return;
  if (!((this.hoverOpenTimer == null))) goto L_1d9;
  this.hoverOpenTimer;
  this;
  goto L_1dc;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.hoverOpenTimer = undefined;
  return;
  this.resetHoverPresentation();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=309B file=dil_widgets/src/popover/PopoverTrigger
// locals: this
function {
  this = this;
  this.clearHoverTimers();
  this.isHoveringTrigger = false;
  if (!(this.openedByHover)) goto L_134;
  this.isUncontrolledOpen = false;
  this.openedByHover = false;
  this.invalidateNativeSheetPresentation();
  if (!((this.context == null))) goto L_c5;
  this.context;
  goto L_134;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_ee;
  undefined.anchoredOverlayPresenter;
  goto L_134;
  undefined.dismissOverlay(this.rootRef);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=99B file=dil_widgets/src/popover/PopoverTrigger
// locals: this
function {
  this = this;
  this.clearPointerIntent();
  if (!((this.hoverOpenTimer == null))) goto L_53;
  this.hoverOpenTimer;
  this;
  goto L_56;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.hoverOpenTimer = undefined;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=42B file=dil_widgets/src/popover/PopoverTrigger
// args: t
// closure: this, e
function {
  this.handleNativeSheetContentWidthChange(t, e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=75B file=dil_widgets/src/popover/PopoverTrigger
// locals: e, this
function {
  this = this;
  let e;
  this.nativeSheetContentWidth = undefined;
  this.nativeSheetPresentationGeneration = (this.nativeSheetPresentationGeneration ++);
  e = (this.nativeSheetPresentationGeneration ++);
  this.nativeSheetContentWidthChangeHandler = function <atom:0>;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=69B file=dil_widgets/src/popover/PopoverTrigger
// locals: this
function {
  this = this;
  this.nativeSheetPresentationGeneration = (this.nativeSheetPresentationGeneration ++);
  this.nativeSheetContentWidth = undefined;
  this.nativeSheetContentWidthChangeHandler = undefined;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=307B file=dil_widgets/src/popover/PopoverTrigger
// args: e, t
// locals: this
function {
  this = this;
  if (((t !== this.nativeSheetPresentationGeneration))) goto L_132;
  if ((!this.isUncontrolledOpen)) goto L_132;
  if (((true === this.viewModel.controlledOpen))) goto L_132;
  if ((!Number.isFinite(e))) goto L_132;
  if (((e <= 0))) goto L_132;
  if (((e === this.nativeSheetContentWidth))) goto L_132;
  this.nativeSheetContentWidth = e;
  this.presentOrDismissUncontrolledOverlay();
  return;
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=20 bc=955B file=dil_widgets/src/popover/PopoverTrigger
// args: require, module, exports
// locals: e, t, i, o, n, r, s, h, d, a, v, l, c, p, PopoverTrigger, <class_fields_init>, PopoverTrigger#1, y
function {
  let y;
  let PopoverTrigger#1;
  let p;
  let c;
  let l;
  let v;
  let a;
  let d;
  let h;
  let s;
  let r;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PopoverTrigger = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "k7CkK_yzoDzA9dGe");
  i = e.makeNodePrototype("layout", undefined, "adgvi6E00Bf0ZFvo");
  o = e.makeNodePrototype("custom-view", ["androidClass", "com.openai.valdi.dil.widgets.DILPopoverSheetView", "iosClass", "ValdiDILPopoverSheetView"], "XEaTs-YVvPubJR-q");
  n = require("dil_core/src/DILComponent");
  r = require("dil_core/src/DILTimer");
  s = require("valdi_core/src/CompilerIntrinsics");
  h = require("valdi_core/src/Device");
  d = require("valdi_core/src/ElementRef");
  a = require("valdi_core/src/Style");
  v = require("./pointerIntent");
  l = require("./PopoverContent");
  c = 640;
  p = 150;
  let PopoverTrigger;
  let <class_fields_init>;
  class PopoverTrigger extends n.DILComponent { ... }
  <proto:PopoverTrigger>.onCreate = function <atom:0>;
  <proto:PopoverTrigger>.onViewModelUpdate = function <atom:0>;
  <proto:PopoverTrigger>.onDestroy = function <atom:0>;
  <proto:PopoverTrigger>.onRender = function <atom:0>;
  <proto:PopoverTrigger>.onTap = function <atom:0>;
  <proto:PopoverTrigger>.hasButtonAccessibility = function <atom:0>;
  <proto:PopoverTrigger>.syncControlledOverlay = function <atom:0>;
  <proto:PopoverTrigger>.presentOrDismissUncontrolledOverlay = function <atom:0>;
  <proto:PopoverTrigger>.presentOverlay = function <atom:0>;
  <proto:PopoverTrigger>.makeOverlayRequest = function <atom:0>;
  <proto:PopoverTrigger>.clearPointerIntent = function <atom:0>;
  <proto:PopoverTrigger>.isHoverPresentationEnabled = function <atom:0>;
  <proto:PopoverTrigger>.refreshHoverBinding = function <atom:0>;
  <proto:PopoverTrigger>.syncHoverPresentation = function <atom:0>;
  <proto:PopoverTrigger>.resetHoverPresentation = function <atom:0>;
  <proto:PopoverTrigger>.clearHoverTimers = function <atom:0>;
  <proto:PopoverTrigger>.beginNativeSheetPresentation = function <atom:0>;
  <proto:PopoverTrigger>.invalidateNativeSheetPresentation = function <atom:0>;
  <proto:PopoverTrigger>.handleNativeSheetContentWidthChange = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PopoverTrigger>;
  PopoverTrigger = function <atom:0>;
  // close_loc <class_fields_init>
  PopoverTrigger#1 = function <atom:0>;
  exports.PopoverTrigger = PopoverTrigger#1;
  PopoverTrigger#1.dilV2Properties = ["hoverOpenDelay", "open", "showOnHover"];
  // append([], 0, n.DIL_COMPONENT_PROPERTIES)
  [][n.DIL_COMPONENT_PROPERTIES] = "block";
  ("block" ++);
  PopoverTrigger#1.properties = [];
  y = {mobileContent: new a.Style({flexDirection: "column", padding: 16}), nativeSheetHost: new a.Style({flexDirection: "column", ignoreParentViewport: true, left: 0, limitToViewport: false, position: "absolute", top: 0}), trigger: new a.Style({flexDirection: "column", maxWidth: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/popover/PopoverTrigger
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
