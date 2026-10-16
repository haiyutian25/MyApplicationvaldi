// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
function {
  t.None = "none";
  t.Left = "left";
  t.Right = "right";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
function {
  t.Started = "started";
  t.Changed = "changed";
  t.Ended = "ended";
  t.Cancelled = "cancelled";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=167B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
// closure: this
function {
  if (!(Number.isFinite(t.width))) goto L_a6;
  if (!((t.width > 0))) goto L_a6;
  this.surfaceWidth = t.width;
  t.width;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=986B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
// locals: i, i#1, e
// closure: this, c
function {
  let e;
  let i;
  if (((true === this.viewModel.disabled))) goto L_97;
  if (!(this.state.dismissed)) goto L_9c;
  return false;
  if (!((true === this.viewModel.captureAllDrags))) goto L_15a;
  if (!((1 === t.pointerCount))) goto L_159;
  return this.hasGestureActions(this.viewModel);
  i = Math.abs(t.deltaX);
  if (!((0 === i))) goto L_260;
  let i#1;
  i#1 = Math.abs(t.velocityX);
  if (((0 === i#1))) goto L_25b;
  if (!((i#1 <= (Math.abs(t.velocityY) * c)))) goto L_2b8;
  return false;
  if (!((i <= (Math.abs(t.deltaY) * c)))) goto L_2b8;
  return false;
  e = this.resolvePhysicalSwipeDirection(t);
  if (((undefined !== this.swipeCallbackForDirection(e)))) goto L_3d9;
  if (((undefined !== this.swipeActionForDirection(e)))) goto L_3d9;
  if (((undefined !== this.viewModel.onDrag))) goto L_3d9;
  return (undefined !== this.viewModel.onDragAction);
}

// fn <atom:0>  args=1 vars=8 closure=6 cpool=0 bc=2299B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
// locals: i, e, s, o, r, a, n
// closure: this, A, d, y, p, w
function {
  let n;
  let a;
  let r;
  let o;
  let s;
  let e;
  let i;
  if (((true === this.viewModel.disabled))) goto L_a6;
  if (!(this.state.dismissed)) goto L_a9;
  return;
  if (!((0 === t.state))) goto L_e0;
  this.dragCancelledByMultitouch = false;
  false;
  if (!((true === this.viewModel.captureAllDrags))) goto L_243;
  if (!((t.pointerCount > 1))) goto L_243;
  if (!(!this.dragCancelledByMultitouch)) goto L_243;
  this.dragCancelledByMultitouch = true;
  this.dragActive = false;
  this.settleTranslation(0, false, A);
  this.dispatchDragAction(this.makePhysicalDragInformation(d.Cancelled, 0, 0));
  if (!(this.dragCancelledByMultitouch)) goto L_26b;
  return;
  if (!((0 === t.state))) goto L_3a2;
  this.dragActive = true;
  this.updateTransform(t.deltaX);
  this.dispatchDragAction(this.makePhysicalDragInformation(d.Started, t.deltaX, t.velocityX));
  return;
  if ((this.dragActive)) goto L_3d9;
  this.dragActive = true;
  true;
  if (!((1 === t.state))) goto L_503;
  this.updateTransform(t.deltaX);
  this.dispatchDragAction(this.makePhysicalDragInformation(d.Changed, t.deltaX, t.velocityX));
  return;
  this.dragActive = false;
  i = this.resolveDismissalHorizontalMovement(t);
  e = y(this.resolvePhysicalHorizontalMovement(i), 0);
  s = this.swipeCallbackForDirection(e);
  o = this.swipeActionForDirection(e);
  if (!((undefined === s))) goto L_5cc;
  if (((undefined === o))) goto L_5f9;
  if (!(!this.shouldDismiss(t))) goto L_6a0;
  this.settleTranslation(0, false, A);
  this.dispatchDragAction(this.makePhysicalDragInformation(d.Cancelled, 0, 0));
  return;
  r = undefined;
  if (!((undefined !== s))) goto L_6b2;
  s();
  goto L_76f;
  if (!((o == null))) goto L_6bd;
  o;
  goto L_6be;
  r = undefined();
  undefined();
  if (!((null == r))) goto L_76f;
  this.settleTranslation(0, false, A);
  this.dispatchDragAction(this.makePhysicalDragInformation(d.Cancelled, 0, 0));
  return;
  a = (this.resolvedSurfaceWidth * p);
  if (!((i < 0))) goto L_7a6;
  goto L_7a9;
  // [栈深重同步 1 -> 0]
  n = a;
  this.settleTranslation(n, true, w);
  null;
  this.makePhysicalDragInformation(d.Ended, t.deltaX, t.velocityX);
  this.dispatchDragAction({direction: e});
  if (!((undefined !== r))) goto L_8fa;
  if (!((this.context == null))) goto L_8d3;
  this.context;
  goto L_8fa;
  undefined.dispatchActionPayload(r);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=9 cpool=3 bc=314B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// locals: this, this.active_func, new.target, arguments
// closure: c, A, d, y, p, w, <class_fields_init>, a, r
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
  this.state = {dismissed: false};
  this.contentRef = new a.ElementRef();
  this.isRightToLeft = r.Device.isRTL();
  this.surfaceWidth = 0;
  this.translationX = 0;
  this.rotation = 0;
  this.dragActive = false;
  this.dragCancelledByMultitouch = false;
  this.handleSurfaceLayout = function <atom:0>;
  this.shouldRecognizeHorizontalDrag = function <atom:0>;
  this.handleDrag = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=160B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (((true === this.viewModel.disabled))) goto L_92;
  if (!(this.state.dismissed)) goto L_96;
  return undefined;
  return get_super_value(this, super, "onTap");
}

// fn <atom:0>  args=1 vars=5 closure=5 cpool=0 bc=966B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
// locals: i, t#1, e, this
// closure: l, p, M, A, d
function {
  this = this;
  let i;
  if (!((undefined === t))) goto L_b;
  return;
  i = this.viewModel.dismissDirection;
  if (!((i !== t.dismissDirection))) goto L_201;
  if (((i === l.Left))) goto L_ca;
  if (!((i === l.Right))) goto L_201;
  if (!((true !== t.disabled))) goto L_201;
  if (!(!this.state.dismissed)) goto L_201;
  let e;
  let t#1;
  this.dragActive = false;
  t#1 = (this.resolvedSurfaceWidth * p);
  if (!((i === l.Left))) goto L_1a9;
  goto L_1ac;
  // [栈深重同步 1 -> 0]
  e = t#1;
  this.settleTranslation(this.resolvePhysicalHorizontalMovement(e), true, M);
  return;
  if ((!this.dragActive)) goto L_3c5;
  if ((!this.hasGestureActions(t))) goto L_3c5;
  if (((true === t.disabled))) goto L_3c5;
  if (!((true !== this.viewModel.disabled))) goto L_316;
  if ((this.hasGestureActions(this.viewModel))) goto L_3c5;
  this.dragActive = false;
  this.settleTranslation(0, false, A);
  this.dispatchDragAction(this.makePhysicalDragInformation(d.Cancelled, 0, 0));
  return;
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=0 bc=1448B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// locals: s, o, this
// closure: t, i, b, e
function {
  this = this;
  let o;
  let s;
  s = (true === this.viewModel.disabled);
  if ((s)) goto L_e8;
  if ((this.state.dismissed)) goto L_e8;
  o = !this.hasGestureActions(this.viewModel);
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", b.surface);
  t.setAttributes(this.baseViewAttributes);
  if ((!!s)) goto L_1e3;
  t.setAttribute("accessibilityStateDisabled", undefined);
  if ((!o)) goto L_219;
  t.setAttribute("canAlwaysScrollHorizontal", undefined);
  if (!(!o)) goto L_294;
  if (((true === this.viewModel.captureAllDrags))) goto L_299;
  t.setAttribute("canAlwaysScrollVertical", undefined);
  if (!(o)) goto L_2ce;
  goto L_2f0;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onDrag", this.handleDrag);
  t.setAttribute("onDragDisabled", o);
  if (!(o)) goto L_355;
  goto L_377;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onDragPredicate", this.shouldRecognizeHorizontalDrag);
  t.setAttributeFunction("onLayout", this.handleSurfaceLayout);
  t.beginRender(e, undefined);
  t.setAttributeRef(this.contentRef);
  t.setAttributeStyle("style", b.content);
  t.setAttributeNumber("rotation", this.rotation);
  t.setAttributeNumber("translationX", this.translationX);
  t.renderUnnamedSlot(this);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=79B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// locals: this
// closure: h
function {
  this = this;
  if (!((this.surfaceWidth > 0))) goto L_4b;
  return this.surfaceWidth;
  return h;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=155B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// locals: this
function {
  this = this;
  if (((true === this.viewModel.reducedMotion))) goto L_9a;
  if (!((this.context == null))) goto L_78;
  this.context;
  goto L_99;
  return (true === undefined.disableStreamingAnimations);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=243B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
function {
  if (((undefined !== t.onDrag))) goto L_f2;
  if (((undefined !== t.onDragAction))) goto L_f2;
  if (((undefined !== t.onSwipeLeft))) goto L_f2;
  if (((undefined !== t.onSwipeLeftAction))) goto L_f2;
  if (((undefined !== t.onSwipeRight))) goto L_f2;
  return (undefined !== t.onSwipeRightAction);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=124B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
// locals: this
// closure: u
function {
  this = this;
  if (((Math.abs(t.deltaX) >= u))) goto L_7b;
  return this.isDismissalFlick(t);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=268B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
// locals: this
// closure: u
function {
  this = this;
  if (!((Math.abs(t.deltaX) >= u))) goto L_76;
  return t.deltaX;
  if ((this.isDismissalFlick(t))) goto L_c4;
  if (!((0 === t.deltaX))) goto L_e9;
  return t.velocityX;
  return t.deltaX;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=241B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
// closure: v, g
function {
  if (!((Math.abs(t.deltaX) >= v))) goto L_f0;
  if (!((Math.abs(t.velocityX) >= g))) goto L_f0;
  return ((t.deltaX * t.velocityX) > 0);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=148B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
// locals: this
// closure: y
function {
  this = this;
  return y(this.resolvePhysicalHorizontalMovement(t.deltaX), this.resolvePhysicalHorizontalMovement(t.velocityX));   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=86B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t, i, e
// locals: this
// closure: S, u
function {
  this = this;
  return S(t, this.resolvePhysicalHorizontalMovement(i), this.resolvePhysicalHorizontalMovement(e), u);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=48B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
// locals: this
function {
  this = this;
  if (!(this.isRightToLeft)) goto L_2e;
  if (!((0 !== t))) goto L_2e;
  return -t;
  return t;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=216B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
// locals: this
// closure: l
function {
  this = this;
  if (!((t === l.Left))) goto L_6c;
  return this.viewModel.onSwipeLeft;
  if (!((t === l.Right))) goto L_d6;
  return this.viewModel.onSwipeRight;
  return undefined;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=216B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
// locals: this
// closure: l
function {
  this = this;
  if (!((t === l.Left))) goto L_6c;
  return this.viewModel.onSwipeLeftAction;
  if (!((t === l.Right))) goto L_d6;
  return this.viewModel.onSwipeRightAction;
  return undefined;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=8B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// closure: r, s
function {
  r(s);
  return;
}

// fn <atom:0>  args=1 vars=7 closure=3 cpool=1 bc=988B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
// locals: i, e, s, r, a, this
// closure: d, o, D
function {
  this = this;
  let a;
  let r;
  let s;
  let e;
  let i;
  i = this.viewModel.onDrag;
  if (!((undefined !== i))) goto L_65;
  i(t);
  return;
  e = {phase: t.phase, deltaX: t.deltaX, progress: t.progress, velocityX: t.velocityX, direction: t.direction};
  if (!((this.viewModel.onDragAction == null))) goto L_177;
  this.viewModel.onDragAction;
  this.viewModel;
  goto L_17d;
  // [栈深重同步 1 -> 2]
  s = <?>.call(undefined, e);
  if (!((null == s))) goto L_186;
  return;
  if (!((this.context == null))) goto L_1b1;
  this.context;
  goto L_1d2;
  r = undefined.dispatchActionPayload;
  if (!((undefined === r))) goto L_1db;
  return;
  a = this.viewModel.dragActionAnimationDurationMs;
  if (!((t.phase !== d.Changed))) goto L_2af;
  if (((t.phase !== d.Cancelled))) goto L_2df;
  if ((this.shouldReduceMotion)) goto L_2df;
  if (!(!(undefined === a))) goto L_3d4;
  if (!(Number.isFinite(a))) goto L_3d4;
  if (!((a > 0))) goto L_3d4;
  goto L_3db;
  // [栈深重同步 1 -> 0]
  r(s);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=496B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t
// locals: i, e, this
// closure: f, m
function {
  this = this;
  let e;
  let i;
  i = (this.resolvePhysicalHorizontalMovement(t) * f);
  if ((this.shouldReduceMotion)) goto L_9f;
  if (!((true !== this.viewModel.rotateWhileDragging))) goto L_a4;
  goto L_100;
  // [栈深重同步 1 -> 0]
  e = Math.max(-m, Math.min(m, i));
  if (!((this.translationX === t))) goto L_14f;
  if (((this.rotation === e))) goto L_1ef;
  this.translationX = t;
  this.rotation = e;
  if (!((this.contentRef.single() == null))) goto L_1bc;
  this.contentRef.single();
  goto L_1ef;
  undefined.setAttributes({rotation: e, translationX: t});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=90B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// closure: this, t, i
function {
  this.updateTransform(t);
  if (!(i)) goto L_59;
  this.setState({dismissed: true});
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=97B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t, i, e
// locals: s, this
function {
  this = this;
  let s;
  s = function <atom:0>;
  if (!(this.shouldReduceMotion)) goto L_37;
  goto L_60;
  // [栈深重同步 1 -> 0]
  this.animate(e, s);
  return;
}

// fn S  args=4 vars=4 closure=1 cpool=0 bc=120B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t, i, e, s
// closure: y
function {
  return {phase: t, deltaX: i, progress: Math.min(1, (Math.abs(i) / s)), velocityX: e, direction: y(i, e)};
}

// fn y  args=2 vars=3 closure=1 cpool=0 bc=132B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: t, i
// locals: e
// closure: l
function {
  let e;
  if (!((0 === t))) goto L_b;
  goto L_c;
  // [栈深重同步 1 -> 0]
  e = t;
  if (!((e < 0))) goto L_37;
  return l.Left;
  if (!((e > 0))) goto L_61;
  return l.Right;
  return l.None;
}

// fn <atom:0>  args=3 vars=31 closure=0 cpool=31 bc=1139B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// args: require, module, exports
// locals: t, i, e, s, o, r, a, n, l, d, h, c, u, v, g, p, f, m, D, w, M, A, HorizontalSwipeSurface, <class_fields_init>, HorizontalSwipeSurface#1, S, y, b
function {
  S = function S;
  y = function y;
  let b;
  let HorizontalSwipeSurface#1;
  let A;
  let M;
  let w;
  let D;
  let m;
  let f;
  let p;
  let g;
  let v;
  let u;
  let c;
  let h;
  let n;
  let a;
  let r;
  let o;
  let s;
  let e;
  let i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HorizontalSwipeDirection = undefined;
  exports.HorizontalSwipePhase = undefined;
  exports.HorizontalSwipeSurface = undefined;
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("view", undefined, "lJzUQa3MJzO0Crf7");
  e = t.makeNodePrototype("view", undefined, "2l9B_JnqiGPFMeBB");
  s = require("dil_core/src/DILComponent");
  o = require("valdi_core/src/AnimationOptions");
  r = require("valdi_core/src/Device");
  a = require("valdi_core/src/ElementRef");
  n = require("valdi_core/src/Style");
  if ((l)) goto L_174;
  l = {};
  exports.HorizontalSwipeDirection = {};
  !function <atom:0>({});
  if ((d)) goto L_18d;
  d = {};
  exports.HorizontalSwipePhase = {};
  function <atom:0>({});
  h = 320;
  c = 1.35;
  u = 112;
  v = 24;
  g = 720;
  p = 1.2;
  f = (Math.PI / 3600);
  m = (Math.PI / 20);
  D = 1000;
  w = {beginFromCurrentState: true, controlPoints: [0.22, 1, 0.36, 1], duration: 0.22};
  M = {beginFromCurrentState: true, controlPoints: [0.25, 0.8, 0.25, 1], duration: 0.24};
  A = {beginFromCurrentState: true, damping: 38, stiffness: 520};
  let HorizontalSwipeSurface;
  let <class_fields_init>;
  class HorizontalSwipeSurface extends s.DILStatefulComponent { ... }
  <proto:HorizontalSwipeSurface>.onTap = function <atom:0>;
  <proto:HorizontalSwipeSurface>.onViewModelUpdate = function <atom:0>;
  <proto:HorizontalSwipeSurface>.onRender = function <atom:0>;
  <proto:HorizontalSwipeSurface>.resolvedSurfaceWidth = function <atom:0>;
  <proto:HorizontalSwipeSurface>.shouldReduceMotion = function <atom:0>;
  <proto:HorizontalSwipeSurface>.hasGestureActions = function <atom:0>;
  <proto:HorizontalSwipeSurface>.shouldDismiss = function <atom:0>;
  <proto:HorizontalSwipeSurface>.resolveDismissalHorizontalMovement = function <atom:0>;
  <proto:HorizontalSwipeSurface>.isDismissalFlick = function <atom:0>;
  <proto:HorizontalSwipeSurface>.resolvePhysicalSwipeDirection = function <atom:0>;
  <proto:HorizontalSwipeSurface>.makePhysicalDragInformation = function <atom:0>;
  <proto:HorizontalSwipeSurface>.resolvePhysicalHorizontalMovement = function <atom:0>;
  <proto:HorizontalSwipeSurface>.swipeCallbackForDirection = function <atom:0>;
  <proto:HorizontalSwipeSurface>.swipeActionForDirection = function <atom:0>;
  <proto:HorizontalSwipeSurface>.dispatchDragAction = function <atom:0>;
  <proto:HorizontalSwipeSurface>.updateTransform = function <atom:0>;
  <proto:HorizontalSwipeSurface>.settleTranslation = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:HorizontalSwipeSurface>;
  HorizontalSwipeSurface = function <atom:0>;
  // close_loc <class_fields_init>
  HorizontalSwipeSurface#1 = function <atom:0>;
  exports.HorizontalSwipeSurface = HorizontalSwipeSurface#1;
  HorizontalSwipeSurface#1.dilV2Properties = ["captureAllDrags", "disabled", "dismissDirection", "onDrag", "onSwipeLeft", "onSwipeRight", "reducedMotion", "rotateWhileDragging"];
  // append([], 0, s.DIL_COMPONENT_PROPERTIES)
  [][s.DIL_COMPONENT_PROPERTIES] = "captureAllDrags";
  [][("captureAllDrags" ++)] = "disabled";
  [][("disabled" ++)] = "dismissDirection";
  [][("dismissDirection" ++)] = "dragActionAnimationDurationMs";
  [][("dragActionAnimationDurationMs" ++)] = "onDragAction";
  [][("onDragAction" ++)] = "onSwipeLeftAction";
  [][("onSwipeLeftAction" ++)] = "onSwipeRightAction";
  [][("onSwipeRightAction" ++)] = "reducedMotion";
  [][("reducedMotion" ++)] = "rotateWhileDragging";
  ("rotateWhileDragging" ++);
  HorizontalSwipeSurface#1.properties = [];
  b = {surface: new n.Style({accessibilityId: "HorizontalSwipeSurface", flexDirection: "column", width: "100%"}), content: new n.Style({flexDirection: "column", flexGrow: 1, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/HorizontalSwipeSurface
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
