// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=widgets/src/components/animation/AnimationShimmer
// args: t
function {
  t.RightBefore = 0;
  t[0] = "RightBefore";
  t.FadeIn = 1;
  t[1] = "FadeIn";
  t.FadeOut = 2;
  t[2] = "FadeOut";
  t.TakeBreak = 3;
  t[3] = "TakeBreak";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=130B file=widgets/src/components/animation/AnimationShimmer
// closure: this, h
function {
  if ((this.animationStarted)) goto L_81;
  this.scheduleAnimationStage(h.RightBefore);
  this.animationStarted = true;
  true;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=167B file=widgets/src/components/animation/AnimationShimmer
// locals: this, this.active_func, new.target, arguments
// closure: h, <class_fields_init>, o
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
  this.containerRef = new o.ElementRef();
  this.gradientRef = new o.ElementRef();
  this.onLayoutComplete = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=74B file=widgets/src/components/animation/AnimationShimmer
// locals: this
// closure: h
function {
  this = this;
  this.runAnimationStage(h.RightBefore);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=56B file=widgets/src/components/animation/AnimationShimmer
// locals: this
function {
  this = this;
  clearTimeout(this.animationTimeout);
  this.animationDestroyed = true;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=6 cpool=0 bc=1438B file=widgets/src/components/animation/AnimationShimmer
// locals: r, n, this
// closure: t, e, d, A, i, a
function {
  this = this;
  let n;
  let r;
  r = this.viewModel;
  n = Math.max(r.width, r.height);
  t.beginRender(e, undefined);
  t.setAttributeRef(this.containerRef);
  t.setAttributeNumber("margin", r.margin);
  t.setAttributeNumber("width", r.width);
  t.setAttributeNumber("height", r.height);
  t.setAttribute("borderRadius", r.borderRadius);
  if (!((r.backgroundColor == null))) goto L_30f;
  r.backgroundColor;
  t.setAttributeString("backgroundColor", d.SemanticColor.Background.DISABLED);
  t.setAttributeStyle("style", A.container);
  t.setAttributeFunction("onLayoutComplete", this.onLayoutComplete);
  t.beginRender(i, undefined);
  t.setAttributeRef(this.gradientRef);
  if (!(a.Device.isDarkMode())) goto L_4c2;
  goto L_4e6;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", A.gradientLight);
  t.setAttributeNumber("height", (2 * n));
  t.setAttributeNumber("width", (2 * n));
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=479B file=widgets/src/components/animation/AnimationShimmer
// closure: this, t, h
function {
  if (!(!this.animationDestroyed)) goto L_1de;
  if (!((t === h.RightBefore))) goto L_96;
  return this.scheduleAnimationStage(h.FadeIn);   // tail call
  if (!((t === h.FadeIn))) goto L_103;
  return this.scheduleAnimationStage(h.FadeOut);   // tail call
  if (!((t === h.FadeOut))) goto L_170;
  return this.scheduleAnimationStage(h.TakeBreak);   // tail call
  if (!((t === h.TakeBreak))) goto L_1dd;
  return this.scheduleAnimationStage(h.RightBefore);   // tail call
  t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=79B file=widgets/src/components/animation/AnimationShimmer
// args: t
// locals: this
// closure: h
function {
  this = this;
  this.runAnimationStage(t).then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=235B file=widgets/src/components/animation/AnimationShimmer
// closure: this, a, o
function {
  this.gradientRef.setAttribute("opacity", 0);
  this.gradientRef.setAttribute("translationX", a);
  this.gradientRef.setAttribute("translationY", o);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=313B file=widgets/src/components/animation/AnimationShimmer
// closure: this, a, o, s
function {
  if (!((this.viewModel.shimmerOpacity == null))) goto L_91;
  this.viewModel.shimmerOpacity;
  this.gradientRef.setAttribute("opacity", 1);
  this.gradientRef.setAttribute("translationX", a);
  this.gradientRef.setAttribute("translationY", ((o + s) / 2));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=235B file=widgets/src/components/animation/AnimationShimmer
// closure: this, a, s
function {
  this.gradientRef.setAttribute("opacity", 0);
  this.gradientRef.setAttribute("translationX", a);
  this.gradientRef.setAttribute("translationY", s);
  return;
}

// fn <atom:0>  args=1 vars=9 closure=1 cpool=3 bc=940B file=widgets/src/components/animation/AnimationShimmer
// args: t
// locals: e, i, r, n, a, o, s, this
// closure: h
function {
  this = this;
  let s;
  let o;
  let a;
  let n;
  let r;
  let i;
  let e;
  e = this.containerRef.single();
  i = this.gradientRef.single();
  if (!((e == null))) goto L_b3;
  e;
  goto L_d4;
  r = undefined.frame;
  if (!((i == null))) goto L_e0;
  i;
  goto L_101;
  n = undefined.frame;
  if (!(e)) goto L_11a;
  if (!(i)) goto L_11a;
  if (!(r)) goto L_11a;
  if (!(!n)) goto L_191;
  this.gradientRef.setAttribute("opacity", 0);
  return this.stageTimeout();   // tail call
  a = ((r.width - n.width) / 2);
  o = -n.height;
  s = +r.height;
  if (!((t === h.RightBefore))) goto L_2c3;
  this.renderer.batchUpdates(function <atom:0>);
  return this.stageTimeout();   // tail call
  if (!((t === h.FadeIn))) goto L_311;
  return this.stageAnimated(function <atom:0>);   // tail call
  if (!((t === h.FadeOut))) goto L_35f;
  return this.stageAnimated(function <atom:0>);   // tail call
  if (!((t === h.TakeBreak))) goto L_3ab;
  return this.stageTimeout();   // tail call
  t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=156B file=widgets/src/components/animation/AnimationShimmer
// args: t
// locals: this
// closure: AnimationShimmer, r
function {
  this = this;
  return this.animatePromise({duration: AnimationShimmer.stageDurationSec, curve: r.AnimationCurve.Linear}, t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=3B file=widgets/src/components/animation/AnimationShimmer
// closure: t
function {
  t();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=96B file=widgets/src/components/animation/AnimationShimmer
// args: t
// closure: this, AnimationShimmer
function {
  clearTimeout(this.animationTimeout);
  this.animationTimeout = setTimeout(function <atom:0>, AnimationShimmer.stageDurationMs);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=14B file=widgets/src/components/animation/AnimationShimmer
// locals: this
// closure: AnimationShimmer
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=27 bc=1315B file=widgets/src/components/animation/AnimationShimmer
// args: require, module, exports
// locals: t, e, i, r, n, a, o, s, u, d, h, AnimationShimmer, <class_fields_init>, AnimationShimmer#1, m, g, c, l, A
function {
  let A;
  let l;
  let c;
  let g;
  let m;
  let AnimationShimmer#1;
  let d;
  let u;
  let s;
  let o;
  let a;
  let n;
  let r;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AnimationShimmer = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", undefined, "n6mETcJydjjXIBvm");
  i = t.makeNodePrototype("view", undefined, "CAND9hRAfKOr9Z5o");
  r = require("valdi_core/src/AnimationOptions");
  n = require("valdi_core/src/Component");
  a = require("valdi_core/src/Device");
  o = require("valdi_core/src/ElementRef");
  s = require("valdi_core/src/Style");
  u = require("widgets/src/styles/gradients");
  d = require("widgets/src/styles/semanticColors");
  if ((h)) goto L_14b;
  h = {};
  !function <atom:0>({});
  let AnimationShimmer;
  let <class_fields_init>;
  class AnimationShimmer extends n.Component { ... }
  <proto:AnimationShimmer>.onCreate = function <atom:0>;
  <proto:AnimationShimmer>.onDestroy = function <atom:0>;
  <proto:AnimationShimmer>.onRender = function <atom:0>;
  <proto:AnimationShimmer>.scheduleAnimationStage = function <atom:0>;
  <proto:AnimationShimmer>.runAnimationStage = function <atom:0>;
  <proto:AnimationShimmer>.stageAnimated = function <atom:0>;
  <proto:AnimationShimmer>.stageTimeout = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AnimationShimmer>;
  AnimationShimmer = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc AnimationShimmer
  AnimationShimmer#1 = function <atom:0>;
  exports.AnimationShimmer = AnimationShimmer#1;
  AnimationShimmer#1.stageDurationMs = 600;
  AnimationShimmer#1.stageDurationSec = (AnimationShimmer#1.stageDurationMs / 1000);
  m = "rgba(255, 255, 255, 0.0)";
  g = "rgba(255, 255, 255, 1)";
  c = "rgba(0, 0, 0, 0.0)";
  l = d.SemanticColor.Flat.PURE_BLACK;
  A = {container: new s.Style({slowClipping: true, backgroundColor: d.SemanticColor.Background.DISABLED}), gradientLight: new s.Style({background: u.linearGradient([[m, 0], [m, 0.1], [m, 0.2], [m, 0.3], [m, 0.4], [g, 0.5], [m, 0.6], [m, 0.7], [m, 0.8], [m, 0.9], [m, 1]], u.GradientDirection.TopLeftToBottomRight)}), gradientDark: new s.Style({background: u.linearGradient([[c, 0], [c, 0.1], [c, 0.2], [c, 0.3], [c, 0.4], [l, 0.5], [c, 0.6], [c, 0.7], [c, 0.8], [c, 0.9], [c, 1]], u.GradientDirection.TopLeftToBottomRight)})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/animation/AnimationShimmer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
