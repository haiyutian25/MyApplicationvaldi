// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=dil_widgets/src/widgets/LoadingDot
// closure: this
function {
  this.animateToNextScale();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=188B file=dil_widgets/src/widgets/LoadingDot
// closure: this, u
function {
  if ((this.animationStarted)) goto L_bb;
  this.animationStarted = true;
  this.animateToNextScale();
  this.pulseInterval = this.timer.setInterval(function <atom:0>, u);
  this.timer.setInterval(function <atom:0>, u);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=142B file=dil_widgets/src/widgets/LoadingDot
// locals: this, this.active_func, new.target, arguments
// closure: u, <class_fields_init>, r
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
  this.dotRef = new r.ElementRef();
  this.animationStarted = false;
  this.scale = 1;
  this.handleLayoutComplete = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=50B file=dil_widgets/src/widgets/LoadingDot
// locals: this
// closure: n
function {
  this = this;
  this.timer = n.resolveDILTimer();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=93B file=dil_widgets/src/widgets/LoadingDot
// locals: this
function {
  this = this;
  if (!((undefined !== this.pulseInterval))) goto L_5c;
  this.pulseInterval();
  this.pulseInterval = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=880B file=dil_widgets/src/widgets/LoadingDot
// locals: i, this
// closure: e, t, c, a
function {
  this = this;
  let i;
  if (!((this.viewModel.size == null))) goto L_4f;
  this.viewModel.size;
  i = 8;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.dotRef);
  e.setAttributeStyle("style", c.dot);
  e.setAttributes(this.baseViewAttributes);
  e.setAttributeNumber("width", i);
  e.setAttributeNumber("height", i);
  e.setAttributeString("backgroundColor", a.resolveDILTextColor(this.viewModel.color, "default"));
  e.setAttributeNumber("scaleX", this.scale);
  e.setAttributeNumber("scaleY", this.scale);
  e.setAttributeFunction("onLayoutComplete", this.handleLayoutComplete);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=158B file=dil_widgets/src/widgets/LoadingDot
// closure: this, e
function {
  this.dotRef.setAttribute("scaleX", e);
  this.dotRef.setAttribute("scaleY", e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=2 bc=185B file=dil_widgets/src/widgets/LoadingDot
// locals: e, this
// closure: d, i
function {
  this = this;
  let e;
  if (!((1 === this.scale))) goto L_30;
  goto L_31;
  // [栈深重同步 1 -> 0]
  e = 1;
  this.scale = e;
  this.animate({duration: 0.625, curve: i.AnimationCurve.EaseInOut}, function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=6 bc=503B file=dil_widgets/src/widgets/LoadingDot
// args: require, module, exports
// locals: e, t, i, r, o, s, a, n, l, d, u, LoadingDot, <class_fields_init>, LoadingDot#1, c
function {
  let c;
  let LoadingDot#1;
  let u;
  let d;
  let l;
  let n;
  let a;
  let s;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LoadingDot = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "e6qVco-AQm2kIfBE");
  i = require("valdi_core/src/AnimationOptions");
  r = require("valdi_core/src/ElementRef");
  o = require("valdi_core/src/Style");
  s = require("dil_core/src/DILComponent");
  a = require("dil_core/src/colors/DILColor");
  n = require("dil_core/src/DILTimer");
  l = 8;
  d = 1.25;
  u = 625;
  let LoadingDot;
  let <class_fields_init>;
  class LoadingDot extends s.DILComponent { ... }
  <proto:LoadingDot>.onCreate = function <atom:0>;
  <proto:LoadingDot>.onDestroy = function <atom:0>;
  <proto:LoadingDot>.onRender = function <atom:0>;
  <proto:LoadingDot>.animateToNextScale = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LoadingDot>;
  LoadingDot = function <atom:0>;
  // close_loc <class_fields_init>
  LoadingDot#1 = function <atom:0>;
  exports.LoadingDot = LoadingDot#1;
  // append([], 0, s.DIL_COMPONENT_PROPERTIES)
  [][s.DIL_COMPONENT_PROPERTIES] = "color";
  [][("color" ++)] = "size";
  ("size" ++);
  LoadingDot#1.properties = [];
  c = {dot: new o.Style({borderRadius: "100%", flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/LoadingDot
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
