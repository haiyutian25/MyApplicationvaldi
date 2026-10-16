// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=209B file=dil_widgets/src/widgets/LoadingBlock
// closure: this
function {
  if (!(this.hasDrawableFrame())) goto L_a9;
  if (!((undefined === this.animation))) goto L_d0;
  if (!((undefined === this.animationTimer))) goto L_d0;
  goto L_d0;
  // [栈深重同步 1 -> 0]
  this.stopAnimation();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=81B file=dil_widgets/src/widgets/LoadingBlock
// closure: this, o
function {
  this.rootRef.setAttribute("opacity", o);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=415B file=dil_widgets/src/widgets/LoadingBlock
// args: e
// locals: o, r
// closure: this, a, i, t
function {
  let r;
  let o;
  if (!((this.animation !== a))) goto L_31;
  return;
  this.animation = undefined;
  if ((e)) goto L_96;
  if ((this.isDestroyed())) goto L_96;
  if (!(!this.hasDrawableFrame())) goto L_99;
  return;
  o = Math.max(0, (performance.now() - i));
  r = Math.max(1, (t - o));
  this.animationTimer = this.timer.setTimeout(this.animateToNextOpacity, r);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=517B file=dil_widgets/src/widgets/LoadingBlock
// locals: t, i, o, a
// closure: this, c, e
function {
  let a;
  let o;
  let i;
  let t;
  this.animationTimer = undefined;
  if ((this.isDestroyed())) goto L_6c;
  if (!(!this.hasDrawableFrame())) goto L_97;
  this.stopAnimation();
  return;
  t = this.getDurationMs();
  i = performance.now();
  if (!((1 === this.opacity))) goto L_116;
  goto L_117;
  // [栈深重同步 1 -> 0]
  o = 1;
  this.opacity = o;
  a = this.createAnimation({duration: (t / 1000), curve: e.AnimationCurve.EaseInOut}, function <atom:0>);
  this.animation = a;
  a.start().then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=2 bc=142B file=dil_widgets/src/widgets/LoadingBlock
// locals: this, this.active_func, new.target, arguments
// closure: c, e, <class_fields_init>, o
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
  this.rootRef = new o.ElementRef();
  this.opacity = 1;
  this.handleLayoutComplete = function <atom:0>;
  this.animateToNextOpacity = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=50B file=dil_widgets/src/widgets/LoadingBlock
// locals: this
// closure: s
function {
  this = this;
  this.timer = s.resolveDILTimer();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=dil_widgets/src/widgets/LoadingBlock
// locals: this
function {
  this = this;
  this.stopAnimation();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=6 cpool=0 bc=899B file=dil_widgets/src/widgets/LoadingBlock
// locals: e, this
// closure: h, n, d, t, i, l
function {
  this = this;
  let e;
  e = this.baseViewAttributes;
  h.DIL_BOX_ATTRIBUTES.apply(this.viewModel, e);
  n.applyDILBackgroundAttributes(this.viewModel, e, d);
  t.beginRender(i, undefined);
  t.setAttributeRef(this.rootRef);
  t.setAttributeStyle("style", l.root);
  t.setAttributes(e);
  t.setAttributeString("accessibilityLabel", this.viewModel.label);
  if (((undefined !== this.viewModel.label))) goto L_2b9;
  t.setAttribute("accessibilityStateLiveRegion", undefined);
  t.setAttributeNumber("opacity", this.opacity);
  t.setAttributeFunction("onLayoutComplete", this.handleLayoutComplete);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=167B file=dil_widgets/src/widgets/LoadingBlock
// locals: t, this
// closure: m
function {
  this = this;
  let t;
  if (!((this.viewModel.duration == null))) goto L_50;
  this.viewModel.duration;
  t = m;
  return Math.max(1, Math.round(t));   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=207B file=dil_widgets/src/widgets/LoadingBlock
// locals: t, this
function {
  this = this;
  let t;
  if (!((this.rootRef.single() == null))) goto L_53;
  this.rootRef.single();
  goto L_74;
  t = undefined.frame;
  if (!((undefined !== t))) goto L_ce;
  if (!((t.width > 0))) goto L_ce;
  return (t.height > 0);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=157B file=dil_widgets/src/widgets/LoadingBlock
// locals: t, this
function {
  this = this;
  let t;
  t = this.animation;
  this.animation = undefined;
  if (!((this.animationTimer == null))) goto L_5e;
  this.animationTimer;
  this;
  goto L_61;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.animationTimer = undefined;
  if (!((t == null))) goto L_78;
  t;
  goto L_9c;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=8 bc=688B file=dil_widgets/src/widgets/LoadingBlock
// args: require, module, exports
// locals: t, i, e, o, a, r, s, n, h, d, m, c, LoadingBlock, <class_fields_init>, LoadingBlock#1, l
function {
  let l;
  let LoadingBlock#1;
  let c;
  let m;
  let d;
  let h;
  let n;
  let s;
  let r;
  let a;
  let o;
  let e;
  let i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LoadingBlock = undefined;
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("view", undefined, "Ojy91iUjNjXSQLod");
  e = require("valdi_core/src/AnimationOptions");
  o = require("valdi_core/src/ElementRef");
  a = require("valdi_core/src/Style");
  r = require("dil_core/src/DILComponent");
  s = require("dil_core/src/DILTimer");
  n = require("./attributes/DILBackgroundAttributes");
  h = require("./attributes/DILBoxAttributes");
  d = "surface-tertiary";
  m = 1500;
  c = 0.86;
  let LoadingBlock;
  let <class_fields_init>;
  class LoadingBlock extends r.DILComponent { ... }
  <proto:LoadingBlock>.onCreate = function <atom:0>;
  <proto:LoadingBlock>.onDestroy = function <atom:0>;
  <proto:LoadingBlock>.onRender = function <atom:0>;
  <proto:LoadingBlock>.getDurationMs = function <atom:0>;
  <proto:LoadingBlock>.hasDrawableFrame = function <atom:0>;
  <proto:LoadingBlock>.stopAnimation = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LoadingBlock>;
  LoadingBlock = function <atom:0>;
  // close_loc <class_fields_init>
  LoadingBlock#1 = function <atom:0>;
  exports.LoadingBlock = LoadingBlock#1;
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  [][r.DIL_COMPONENT_PROPERTIES] = "background";
  [][("background" ++)] = "duration";
  [][("duration" ++)] = "height";
  [][("height" ++)] = "label";
  [][("label" ++)] = "maxHeight";
  [][("maxHeight" ++)] = "maxSize";
  [][("maxSize" ++)] = "maxWidth";
  [][("maxWidth" ++)] = "minHeight";
  [][("minHeight" ++)] = "minSize";
  [][("minSize" ++)] = "minWidth";
  [][("minWidth" ++)] = "radius";
  [][("radius" ++)] = "size";
  [][("size" ++)] = "width";
  ("width" ++);
  LoadingBlock#1.properties = [];
  LoadingBlock#1.dilV2Properties = ["background", "duration", "height", "label", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "radius", "size", "width"];
  l = {root: new a.Style({flexShrink: 0, slowClipping: true})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/LoadingBlock
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
