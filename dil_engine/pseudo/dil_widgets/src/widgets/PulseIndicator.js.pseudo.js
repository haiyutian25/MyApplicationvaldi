// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=94B file=dil_widgets/src/widgets/PulseIndicator
// closure: this
function {
  if ((this.animationStarted)) goto L_5d;
  this.animationStarted = true;
  this.runAnimationLoop();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=143B file=dil_widgets/src/widgets/PulseIndicator
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, n
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
  this.haloRef = new n.ElementRef();
  this.animationDestroyed = false;
  this.animationStarted = false;
  this.handleLayoutComplete = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=15B file=dil_widgets/src/widgets/PulseIndicator
// locals: this
function {
  this = this;
  this.animationDestroyed = true;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=7 cpool=0 bc=1525B file=dil_widgets/src/widgets/PulseIndicator
// locals: r, a, n, this
// closure: s, d, t, e, y, i, o
function {
  this = this;
  let n;
  let a;
  let r;
  r = this.getDotSize();
  a = s.resolveDILTextColor(this.viewModel.color, d);
  if (!((this.viewModel.pulseColor == null))) goto L_14c;
  this.viewModel.pulseColor;
  n = s.resolveDILTextColor(this.viewModel.color, d);
  t.beginRender(e, undefined);
  t.setAttributeStyle("style", y.root);
  t.setAttributes(this.autoSpacingAttributes);
  t.setAttributeNumber("width", r);
  t.setAttributeNumber("height", r);
  t.beginRender(i, undefined);
  t.setAttributeRef(this.haloRef);
  t.setAttributeStyle("style", y.halo);
  t.setAttributeNumber("width", r);
  t.setAttributeNumber("height", r);
  t.setAttributeString("backgroundColor", n);
  t.setAttributeNumber("opacity", this.getStartOpacity());
  t.setAttributeFunction("onLayoutComplete", this.handleLayoutComplete);
  t.endRender();
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", y.dot);
  t.setAttributeNumber("width", r);
  t.setAttributeNumber("height", r);
  t.setAttributeString("backgroundColor", a);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=126B file=dil_widgets/src/widgets/PulseIndicator
// locals: t, this
// closure: m
function {
  this = this;
  let t;
  if (!((this.viewModel.size == null))) goto L_50;
  this.viewModel.size;
  t = m;
  return Math.max(1, t);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=167B file=dil_widgets/src/widgets/PulseIndicator
// locals: t, this
// closure: c
function {
  this = this;
  let t;
  if (!((this.viewModel.duration == null))) goto L_50;
  this.viewModel.duration;
  t = c;
  return Math.max(1, Math.round(t));   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=124B file=dil_widgets/src/widgets/PulseIndicator
// locals: t, this
function {
  this = this;
  let t;
  if (!((this.viewModel.endScale == null))) goto L_4e;
  this.viewModel.endScale;
  t = 2;
  return Math.max(1, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=dil_widgets/src/widgets/PulseIndicator
// args: t
// closure: p
function {
  return Math.max(1, Math.round((t * p)));   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=168B file=dil_widgets/src/widgets/PulseIndicator
// locals: t, this
// closure: b
function {
  this = this;
  let t;
  if (!((this.viewModel.startOpacity == null))) goto L_50;
  this.viewModel.startOpacity;
  t = b;
  return Math.max(0, Math.min(1, t));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=276B file=dil_widgets/src/widgets/PulseIndicator
// locals: t
// closure: this
function {
  let t;
  t = this.getEndScale();
  this.haloRef.setAttribute("opacity", 0);
  this.haloRef.setAttribute("scaleX", t);
  this.haloRef.setAttribute("scaleY", t);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=1 bc=623B file=dil_widgets/src/widgets/PulseIndicator
// locals: t, e, this
// closure: a, u
function {
  this = this;
  if (!(!this.animationDestroyed)) goto L_26d;
  let e;
  let t;
  t = this.getDurationMs();
  e = this.getActiveAnimationDurationMs(t);
  this.haloRef.setAttribute("opacity", this.getStartOpacity());
  this.haloRef.setAttribute("scaleX", 1);
  this.haloRef.setAttribute("scaleY", 1);
  (await this.animatePromise({duration: (e / 1000), curve: a.AnimationCurve.EaseOut}, function <atom:0>));
  if (!(!this.animationDestroyed)) goto L_269;
  if (!((e < t))) goto L_269;
  (await u.wait((t - e)));
  goto L_2;
  return undefined; // async
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=11 bc=917B file=dil_widgets/src/widgets/PulseIndicator
// args: require, module, exports
// locals: t, e, i, o, r, s, a, n, l, u, d, c, h, m, b, p, PulseIndicator, <class_fields_init>, PulseIndicator#1, y
function {
  let y;
  let PulseIndicator#1;
  let p;
  let b;
  let m;
  let h;
  let c;
  let d;
  let u;
  let l;
  let n;
  let a;
  let s;
  let r;
  let o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PulseIndicator = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", undefined, "jDPtsJBzmpgjhOGK");
  i = t.makeNodePrototype("view", ["scaleX", 1, "scaleY", 1], "E-vnLTXh1Q9k_DA4");
  o = t.makeNodePrototype("view", undefined, "h4x2In9kJSllCNBC");
  r = require("dil_core/src/DILComponent");
  s = require("dil_core/src/colors/DILColor");
  a = require("valdi_core/src/AnimationOptions");
  n = require("valdi_core/src/ElementRef");
  l = require("valdi_core/src/Style");
  u = require("valdi_core/src/utils/PromiseUtils");
  d = "red-400";
  c = 2000;
  h = 2;
  m = 12;
  b = 0.75;
  p = 0.9;
  let PulseIndicator;
  let <class_fields_init>;
  class PulseIndicator extends r.DILComponent { ... }
  <proto:PulseIndicator>.onDestroy = function <atom:0>;
  <proto:PulseIndicator>.onRender = function <atom:0>;
  <proto:PulseIndicator>.getDotSize = function <atom:0>;
  <proto:PulseIndicator>.getDurationMs = function <atom:0>;
  <proto:PulseIndicator>.getEndScale = function <atom:0>;
  <proto:PulseIndicator>.getActiveAnimationDurationMs = function <atom:0>;
  <proto:PulseIndicator>.getStartOpacity = function <atom:0>;
  <proto:PulseIndicator>.runAnimationLoop = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PulseIndicator>;
  PulseIndicator = function <atom:0>;
  // close_loc <class_fields_init>
  PulseIndicator#1 = function <atom:0>;
  exports.PulseIndicator = PulseIndicator#1;
  PulseIndicator#1.dilV2Properties = ["color", "duration", "endScale", "pulseColor", "size", "startOpacity"];
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  [][r.DIL_COMPONENT_PROPERTIES] = "color";
  [][("color" ++)] = "duration";
  [][("duration" ++)] = "endScale";
  [][("endScale" ++)] = "pulseColor";
  [][("pulseColor" ++)] = "size";
  [][("size" ++)] = "startOpacity";
  ("startOpacity" ++);
  PulseIndicator#1.properties = [];
  y = {root: new l.Style({alignItems: "center", justifyContent: "center", position: "relative", flexShrink: 0}), halo: new l.Style({position: "absolute", borderRadius: "100%", transformOrigin: "center"}), dot: new l.Style({position: "relative", borderRadius: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/PulseIndicator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
