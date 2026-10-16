// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=351B file=dil_widgets/src/widgets/Celebration
// closure: e, CelebrationBurst, i, this
function {
  e.beginComponent(CelebrationBurst, i, this.viewModel.trigger, undefined);
  if (((true === this.viewModel.reducedMotion))) goto L_133;
  if (!((this.context == null))) goto L_111;
  this.context;
  goto L_132;
  e.setViewModelProperty("reducedMotion", (true === undefined.disableStreamingAnimations));
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=285B file=dil_widgets/src/widgets/Celebration
// locals: this
// closure: e, CelebrationBurst, i, t, y
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", y.frame);
  e.renderUnnamedSlot(this);
  if (!((null != this.viewModel.trigger))) goto L_f4;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Celebration
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

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=dil_widgets/src/widgets/Celebration
// closure: this
function {
  this.layoutReady = true;
  this.startWhenReady();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=177B file=dil_widgets/src/widgets/Celebration
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, d
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
  this.state = {visible: true};
  this.particles = new d.ComponentRef();
  this.layoutReady = false;
  this.delayElapsed = false;
  this.hasStarted = false;
  this.onLayoutComplete = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=61B file=dil_widgets/src/widgets/Celebration
// closure: this
function {
  this.cancelStart = undefined;
  this.delayElapsed = true;
  this.startWhenReady();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=57B file=dil_widgets/src/widgets/Celebration
// closure: this
function {
  this.cancelFinish = undefined;
  this.setState({visible: false});
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=2 bc=306B file=dil_widgets/src/widgets/Celebration
// locals: e, this
// closure: a, u
function {
  this = this;
  let e;
  if (!(this.viewModel.reducedMotion)) goto L_5d;
  this.state = {visible: false};
  return;
  e = a.resolveDILTimer();
  this.cancelStart = e.setTimeout(function <atom:0>, u.CELEBRATION_DELAY_MS);
  this.cancelFinish = e.setTimeout(function <atom:0>, u.CELEBRATION_DURATION_MS);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=209B file=dil_widgets/src/widgets/Celebration
// args: e
// locals: this
function {
  this = this;
  if (!(this.viewModel.reducedMotion)) goto L_d0;
  if (!((e == null))) goto L_57;
  e;
  goto L_78;
  if (!((false === undefined.reducedMotion))) goto L_d0;
  this.stopTimers();
  this.setState({visible: false});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=dil_widgets/src/widgets/Celebration
// locals: this
function {
  this = this;
  this.stopTimers();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=358B file=dil_widgets/src/widgets/Celebration
// locals: this
// closure: e, r, y
function {
  this = this;
  if (!(this.state.visible)) goto L_165;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", y.overlay);
  e.setAttributeFunction("onLayoutComplete", this.onLayoutComplete);
  this.renderParticles();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=124B file=dil_widgets/src/widgets/Celebration
// locals: e
// closure: this
function {
  let e;
  for (const e of this.particles.all()) {
    e.start();
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=327B file=dil_widgets/src/widgets/Celebration
// locals: this
function {
  this = this;
  if (!(!this.hasStarted)) goto L_146;
  if (!(this.layoutReady)) goto L_146;
  if (!(this.delayElapsed)) goto L_146;
  if (!(this.state.visible)) goto L_146;
  if (!(!this.isDestroyed())) goto L_146;
  this.hasStarted = true;
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=242B file=dil_widgets/src/widgets/Celebration
// locals: t, this
// closure: u, e, CelebrationParticle, s
function {
  this = this;
  let t;
  t = 0;
  if (!((t < u.CONFETTI_PARTICLES.length))) goto L_f1;
  e.beginComponent(CelebrationParticle, s, String(t), this.particles);
  e.setViewModelProperty("index", t);
  e.endComponent();
  t = <t_new>;
  (t++);
  goto L_7;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=119B file=dil_widgets/src/widgets/Celebration
// locals: this
function {
  this = this;
  if (!((this.cancelStart == null))) goto L_2d;
  this.cancelStart;
  this;
  goto L_30;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.cancelStart = undefined;
  if (!((this.cancelFinish == null))) goto L_67;
  this.cancelFinish;
  this;
  goto L_6a;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.cancelFinish = undefined;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=0 bc=163B file=dil_widgets/src/widgets/Celebration
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, h, u
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
  this.particleRef = new h.ElementRef();
  this.hasStarted = false;
  this.elapsed = u.CELEBRATION_DELAY_MS;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=dil_widgets/src/widgets/Celebration
// locals: this
function {
  this = this;
  if (!((this.animation == null))) goto L_2c;
  this.animation;
  goto L_50;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=546B file=dil_widgets/src/widgets/Celebration
// locals: t, this
// closure: u, e, o, y
function {
  this = this;
  let t;
  t = u.confettiParticleAttributes(this.viewModel.index, this.elapsed);
  e.beginRender(o, undefined);
  e.setAttributeRef(this.particleRef);
  e.setAttributeStyle("style", y.particle);
  e.setAttributes(t);
  if (!(this.hasStarted)) goto L_1f5;
  goto L_1f6;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=131B file=dil_widgets/src/widgets/Celebration
// locals: this
function {
  this = this;
  if ((this.hasStarted)) goto L_82;
  if ((this.isDestroyed())) goto L_82;
  this.hasStarted = true;
  this.animateTrajectory();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=672B file=dil_widgets/src/widgets/Celebration
// closure: this, i
function {
  this.particleRef.setAttribute("translationX", i.translationX);
  this.particleRef.setAttribute("translationY", i.translationY);
  this.particleRef.setAttribute("rotation", i.rotation);
  this.particleRef.setAttribute("scaleX", i.scaleX);
  this.particleRef.setAttribute("scaleY", i.scaleY);
  this.particleRef.setAttribute("opacity", i.opacity);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=550B file=dil_widgets/src/widgets/Celebration
// locals: e, t, i, this
// closure: u, c
function {
  this = this;
  let e;
  for (const e of u.confettiParticleKeyframes(this.viewModel.index)) {
    let i;
    let t;
    t = ((e - this.elapsed) / 1000);
    this.elapsed = e;
    i = u.confettiParticleAttributes(this.viewModel.index, e);
    this.animation = this.createAnimation({duration: t, curve: c.AnimationCurve.Linear}, function <atom:0>);
    if (((await this.animation.start()))) goto L_210;
    if (!(this.isDestroyed())) goto L_218;
    return undefined; // async
    // [栈深重同步 0 -> 3]
    // close_loc i
  }
  return undefined; // async
}

// fn <atom:0>  args=3 vars=27 closure=0 cpool=15 bc=1210B file=dil_widgets/src/widgets/Celebration
// args: require, module, exports
// locals: e, t, i, r, s, o, n, a, l, d, c, h, p, u, Celebration, <class_fields_init>, Celebration#1, CelebrationBurst, <class_fields_init>#1, CelebrationBurst#1, CelebrationParticle, <class_fields_init>#2, CelebrationParticle#1, y
function {
  let y;
  let CelebrationParticle#1;
  let CelebrationBurst#1;
  let Celebration#1;
  let u;
  let p;
  let h;
  let c;
  let d;
  let l;
  let a;
  let n;
  let o;
  let s;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Celebration = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "5fHsMQ_NihLXZZB_");
  i = e.makeComponentPrototype(undefined, "Yq43ZTL6qeN8eXOK");
  r = e.makeNodePrototype("view", undefined, "oyVE1ImRAvey-UWs");
  s = e.makeComponentPrototype(undefined, "XdafhgFADEUQdQHU");
  o = e.makeNodePrototype("view", undefined, "oNmlqeHB76ejW8nl");
  n = require("dil_core/src/DILComponent");
  a = require("dil_core/src/DILTimer");
  l = require("valdi_core/src/Component");
  d = require("valdi_core/src/ComponentRef");
  c = require("valdi_core/src/AnimationOptions");
  h = require("valdi_core/src/ElementRef");
  p = require("valdi_core/src/Style");
  u = require("./CelebrationParticles");
  let Celebration;
  let <class_fields_init>;
  class Celebration extends n.DILComponent { ... }
  <proto:Celebration>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Celebration>;
  Celebration = function <atom:0>;
  // close_loc <class_fields_init>
  Celebration#1 = function <atom:0>;
  exports.Celebration = Celebration#1;
  Celebration#1.dilV2Properties = ["trigger", "reducedMotion"];
  // append([], 0, n.DIL_COMPONENT_PROPERTIES)
  // append([], n.DIL_COMPONENT_PROPERTIES, Celebration#1.dilV2Properties)
  Celebration#1.dilV2Properties;
  Celebration#1.properties = [];
  let CelebrationBurst;
  let <class_fields_init>#1;
  class CelebrationBurst extends l.StatefulComponent { ... }
  <proto:CelebrationBurst>.onCreate = function <atom:0>;
  <proto:CelebrationBurst>.onViewModelUpdate = function <atom:0>;
  <proto:CelebrationBurst>.onDestroy = function <atom:0>;
  <proto:CelebrationBurst>.onRender = function <atom:0>;
  <proto:CelebrationBurst>.startWhenReady = function <atom:0>;
  <proto:CelebrationBurst>.renderParticles = function <atom:0>;
  <proto:CelebrationBurst>.stopTimers = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:CelebrationBurst>;
  CelebrationBurst = function <atom:0>;
  // close_loc <class_fields_init>#1
  CelebrationBurst#1 = function <atom:0>;
  let CelebrationParticle;
  let <class_fields_init>#2;
  class CelebrationParticle extends l.Component { ... }
  <proto:CelebrationParticle>.onDestroy = function <atom:0>;
  <proto:CelebrationParticle>.onRender = function <atom:0>;
  <proto:CelebrationParticle>.start = function <atom:0>;
  <proto:CelebrationParticle>.animateTrajectory = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:CelebrationParticle>;
  CelebrationParticle = function <atom:0>;
  // close_loc <class_fields_init>#2
  CelebrationParticle#1 = function <atom:0>;
  y = {frame: new p.Style({position: "relative", width: "100%", limitToViewport: false, extendViewportWithChildren: true, zIndex: 3}), overlay: new p.Style({position: "absolute", top: 0, left: 0, width: "100%", height: 620, extendViewportWithChildren: true, zIndex: 3, touchEnabled: false, accessibilityNavigation: "ignored"}), particle: new p.Style({position: "absolute", top: 0, left: "50%", borderWidth: 1, borderColor: "#0000001a", borderRadius: "100%", touchEnabled: false, accessibilityNavigation: "ignored"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Celebration
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
