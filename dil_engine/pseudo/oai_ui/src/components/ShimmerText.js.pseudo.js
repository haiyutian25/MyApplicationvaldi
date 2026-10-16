// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=252B file=oai_ui/src/components/ShimmerText
// closure: this
function {
  this.layoutComplete = true;
  if (!((this.viewModel.onLayoutComplete == null))) goto L_5c;
  this.viewModel.onLayoutComplete;
  this.viewModel;
  goto L_5f;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  if ((this.animationStarted)) goto L_fb;
  if (((false === this.viewModel.enabled))) goto L_fb;
  this.startAnimation();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=89B file=oai_ui/src/components/ShimmerText
// closure: this, d, f, i, n
function {
  this.textRef.setAttribute("textGradient", d(f, i, n));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=89B file=oai_ui/src/components/ShimmerText
// closure: this, d, w, i, n
function {
  this.textRef.setAttribute("textGradient", d(w, i, n));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=119B file=oai_ui/src/components/ShimmerText
// closure: this, m
function {
  this.textRef.setAttribute("textGradient", m(this.currentBaseColor()));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=457B file=oai_ui/src/components/ShimmerText
// args: i
// closure: this, m, s, t
function {
  if (!((this.animation === s))) goto L_3a;
  this.animation = undefined;
  undefined;
  if ((i)) goto L_1c8;
  if ((this.isDestroyed())) goto L_1c8;
  if (((false === this.viewModel.enabled))) goto L_1c8;
  if (((this.animationGeneration !== t))) goto L_1c8;
  this.renderer.batchUpdates(function <atom:0>);
  this.scheduleAnimation(this.timing.restDurationMs, this.runAnimation);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=7 cpool=3 bc=635B file=oai_ui/src/components/ShimmerText
// args: t
// locals: i, n, s
// closure: this, d, f, w, m, a, e
function {
  let s;
  let n;
  let i;
  if (!(this.usesNativeIOSShimmer())) goto L_ac;
  if (!(a.supportsTextAnimationColor())) goto L_82;
  goto L_aa;
  // [栈深重同步 1 -> 0]
  this.runOpacityAnimation(t);
  return;
  i = this.currentBaseColor();
  if (!((this.viewModel.highlightColor == null))) goto L_163;
  this.viewModel.highlightColor;
  n = e.OAIColor.TextPrimary;
  this.renderer.batchUpdates(function <atom:0>);
  s = this.createAnimation(this.timing.animationOptions, function <atom:0>);
  this.animation = s;
  s.start().then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=147B file=oai_ui/src/components/ShimmerText
// closure: this
function {
  this.textRef.setAttribute("value", this.viewModel.value);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=220B file=oai_ui/src/components/ShimmerText
// closure: this
function {
  this.renderer.batchUpdates(function <atom:0>);
  this.scheduleAnimation(this.timing.restDurationMs, this.runAnimation);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=9 cpool=3 bc=212B file=oai_ui/src/components/ShimmerText
// locals: this, this.active_func, new.target, arguments
// closure: d, f, w, m, a, e, <class_fields_init>, o, S
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
  this.textRef = new o.ElementRef();
  this.animationGeneration = 0;
  this.animationStarted = false;
  this.layoutComplete = false;
  this.opacity = 1;
  this.timing = S;
  this.handleLayoutComplete = function <atom:0>;
  this.runAnimation = function <atom:0>;
  this.finishGlyphAnimation = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=oai_ui/src/components/ShimmerText
// locals: this
function {
  this = this;
  this.cancelAnimation();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=474B file=oai_ui/src/components/ShimmerText
// args: t
// locals: this
// closure: S, x
function {
  this = this;
  if (!((t == null))) goto L_b;
  t;
  goto L_2c;
  if (!((undefined.timing !== this.viewModel.timing))) goto L_113;
  if (!((undefined === this.viewModel.timing))) goto L_c4;
  goto L_109;
  // [栈深重同步 2 -> 1]
  this.timing = x(this.viewModel.timing);
  x(this.viewModel.timing);
  if (!((undefined !== t))) goto L_1d9;
  this.cancelAnimation();
  if (!((false !== this.viewModel.enabled))) goto L_1d9;
  if (!(this.layoutComplete)) goto L_1d9;
  this.startAnimation();
  return;
}

// fn <atom:0>  args=0 vars=13 closure=5 cpool=0 bc=2594B file=oai_ui/src/components/ShimmerText
// locals: n, s, o, r, a, h, l, u, d, c, v, y, this
// closure: D, e, t, i, m
function {
  this = this;
  let y;
  let v;
  let c;
  let d;
  let u;
  let l;
  let h;
  let a;
  let r;
  let o;
  let s;
  let n;
  if (((undefined === undefined))) goto L_113;
  n = <to_object>(undefined).enabled;
  s = <to_object>(undefined).highlightColor;
  o = <to_object>(undefined).size;
  r = <to_object>(undefined).timing;
  a = <to_object>(undefined).timer;
  h = {};
  <to_object>(undefined);
  {enabled: null, highlightColor: null, size: null, timing: null, timer: null};
  goto L_13a;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_2f;
  // [栈深重同步 1 -> 0]
  if (!((this.viewModel.style == null))) goto L_1a7;
  this.viewModel.style;
  l = D.text;
  u = e.resolveOAITextStyle(this.viewModel.size);
  if (!((this.viewModel.font == null))) goto L_2a2;
  this.viewModel.font;
  d = l.attributes.font;
  if (!((this.viewModel.lineHeightMultiple == null))) goto L_332;
  this.viewModel.lineHeightMultiple;
  c = l.attributes.lineHeightMultiple;
  v = this.currentBaseColor();
  y = (false !== this.viewModel.enabled);
  t.beginRender(i, undefined);
  t.setAttributeRef(this.textRef);
  t.setAttributes(h);
  t.setAttributeStyle("style", l);
  t.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  if (!((this.viewModel.accessibilityLabel == null))) goto L_5f1;
  this.viewModel.accessibilityLabel;
  if (!(("string" == typeof this.viewModel.value))) goto L_5f0;
  goto L_5f1;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityLabel", undefined);
  t.setAttributeString("color", v);
  if (!((d == null))) goto L_67a;
  d;
  t.setAttributeString("font", u.font);
  if (!((this.viewModel.lineHeight == null))) goto L_774;
  this.viewModel.lineHeight;
  if (!((l.attributes.lineHeight == null))) goto L_774;
  l.attributes.lineHeight;
  if (((undefined !== d))) goto L_74b;
  if (!((undefined !== c))) goto L_750;
  goto L_774;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("lineHeight", u.lineHeight);
  if (!((this.viewModel.lineHeightScalesWithFont == null))) goto L_82f;
  this.viewModel.lineHeightScalesWithFont;
  t.setAttribute("lineHeightScalesWithFont", l.attributes.lineHeightScalesWithFont);
  t.setAttributeFunction("onLayoutComplete", this.handleLayoutComplete);
  t.setAttributeNumber("opacity", (this.baseOpacity() * this.opacity));
  if (!(y)) goto L_95a;
  if (!(!this.usesNativeIOSShimmer())) goto L_95a;
  goto L_95b;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("textGradient", undefined);
  t.setAttribute("value", this.viewModel.value);
  t.renderUnnamedSlot(this);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=153B file=oai_ui/src/components/ShimmerText
// locals: this
function {
  this = this;
  this.animationStarted = true;
  this.scheduleAnimation(this.timing.initialDelayMs, this.runAnimation);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=174B file=oai_ui/src/components/ShimmerText
// closure: this, e, i
function {
  this.animationTimer = undefined;
  if ((this.isDestroyed())) goto L_ad;
  if (((false === this.viewModel.enabled))) goto L_ad;
  if (((this.animationGeneration !== e))) goto L_ad;
  i(e);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=1 bc=243B file=oai_ui/src/components/ShimmerText
// args: t, i
// locals: e, this
// closure: u
function {
  this = this;
  let e;
  if (!((undefined !== this.animationTimer))) goto L_52;
  this.animationTimer();
  e = this.animationGeneration;
  if (!((this.viewModel.timer == null))) goto L_c2;
  this.viewModel.timer;
  this.animationTimer = u.setTimeout(function <atom:0>, t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=150B file=oai_ui/src/components/ShimmerText
// closure: s
function {
  if (!(s.Device.isIOS())) goto L_95;
  return !s.Device.isWeb();
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=79B file=oai_ui/src/components/ShimmerText
// closure: this, n
function {
  this.textRef.setAttribute("value", n);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=3 cpool=6 bc=812B file=oai_ui/src/components/ShimmerText
// locals: t, i, e, n, this
// closure: l, b, h
function {
  this = this;
  let n;
  let e;
  let i;
  let t;
  t = this.viewModel.value;
  i = l(t);
  e = {partPattern: ".", opacity: 1, duration: this.timing.glyphDurationSeconds, timeOffsetBetweenParts: (((this.timing.animationDurationMs / 1000) - this.timing.glyphDurationSeconds) / Math.max(1, (i - 1))), opacityKeyframes: [{progress: 0.5, value: b, controlPoints: [0.4, 0, 0.2, 1]}, {progress: 1, value: 1, controlPoints: [0.4, 0, 0.2, 1]}]};
  if (!(("string" == typeof t))) goto L_242;
  goto L_253;
  // [栈深重同步 1 -> 0]
  // append([13, e], 2, t)
  [13, e][t] = 2;
  (2 ++);
  n = [13, e];
  this.renderer.batchUpdates(function <atom:0>);
  this.scheduleAnimation(this.timing.animationDurationMs, this.finishGlyphAnimation);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=116B file=oai_ui/src/components/ShimmerText
// closure: this, i
function {
  return this.textRef.setAttribute("opacity", (this.baseOpacity() * i));   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=1 bc=662B file=oai_ui/src/components/ShimmerText
// args: t
// locals: i, e, n, this
// closure: b
function {
  this = this;
  let i;
  // close_loc i
  for (const i of [b, 1]) {
    let n;
    let e;
    this.opacity = i;
    null;
    this.timing.animationOptions;
    e = this.createAnimation({duration: (this.timing.animationDurationMs / 2000)}, function <atom:0>);
    this.animation = e;
    n = (await e.start());
    if (!((this.animation === e))) goto L_150;
    this.animation = undefined;
    undefined;
    if ((n)) goto L_1f2;
    if ((this.isDestroyed())) goto L_1f2;
    if (((false === this.viewModel.enabled))) goto L_1f2;
    if (!((this.animationGeneration !== t))) goto L_1fa;
    return undefined; // async
    // [栈深重同步 0 -> 3]
    // close_loc i
  }
  // close_loc i
  this.scheduleAnimation(this.timing.restDurationMs, this.runAnimation);
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=293B file=oai_ui/src/components/ShimmerText
// locals: this
// closure: e
function {
  this = this;
  if (!((this.viewModel.color == null))) goto L_124;
  this.viewModel.color;
  if (!((this.viewModel.style == null))) goto L_98;
  this.viewModel.style;
  goto L_da;
  if (!((undefined.attributes.color == null))) goto L_124;
  undefined.attributes.color;
  return e.OAIColor.TextSecondary;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=225B file=oai_ui/src/components/ShimmerText
// locals: this
function {
  this = this;
  if (!((this.viewModel.opacity == null))) goto L_e0;
  this.viewModel.opacity;
  if (!((this.viewModel.style == null))) goto L_98;
  this.viewModel.style;
  goto L_da;
  if (!((undefined.attributes.opacity == null))) goto L_e0;
  undefined.attributes.opacity;
  return 1;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=250B file=oai_ui/src/components/ShimmerText
// locals: this
function {
  this = this;
  this.animationGeneration = (this.animationGeneration ++);
  this.animationStarted = false;
  this.opacity = 1;
  if (!((this.animation == null))) goto L_6f;
  this.animation;
  goto L_93;
  undefined.cancel();
  this.animation = undefined;
  if (!((undefined !== this.animationTimer))) goto L_f9;
  this.animationTimer();
  this.animationTimer = undefined;
  undefined;
  return;
}

// fn l  args=1 vars=5 closure=0 cpool=0 bc=119B file=oai_ui/src/components/ShimmerText
// args: t
// locals: i, e, n, s
function {
  let i;
  if (!(("string" == typeof t))) goto L_10;
  return t.length;
  i = 0;
  let e;
  e = 0;
  if (!((e < t.length))) goto L_73;
  let s;
  let n;
  e = <e_new>;
  n = t[(e++)];
  if (((2 === n))) goto L_17;
  e = <e_new>;
  s = t[(e++)];
  if (!((1 === n))) goto L_55;
  i = (i + s.length);
  goto L_70;
  // [栈深重同步 1 -> 0]
  if (!((12 !== n))) goto L_65;
  if (((17 !== n))) goto L_70;
  i = <i_new>;
  (i++);
  goto L_17;
  return i;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=11B file=oai_ui/src/components/ShimmerText
// closure: e
function {
  return clearTimeout(e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=15B file=oai_ui/src/components/ShimmerText
// args: t, i
// locals: e
function {
  let e;
  e = setTimeout(t, i);
  return function <atom:0>;
}

// fn m  args=1 vars=1 closure=1 cpool=0 bc=61B file=oai_ui/src/components/ShimmerText
// args: t
// closure: g
function {
  return "linear-gradient(".concat(g, "deg, ", t, " 0, ", t, " 1)");   // tail call
}

// fn d  args=3 vars=6 closure=3 cpool=0 bc=132B file=oai_ui/src/components/ShimmerText
// args: t, i, e
// locals: n, s, o
// closure: c, A, g
function {
  let o;
  let s;
  let n;
  n = c((t - A));
  s = c(t);
  o = c((t + A));
  return "linear-gradient(".concat(g, "deg, ", i, " 0, ", i, " ", n, ", ", e, " ", s, ", ", i, " ", o, ", ", i, " 1)");   // tail call
}

// fn c  args=1 vars=1 closure=0 cpool=4 bc=206B file=oai_ui/src/components/ShimmerText
// args: t
function {
  return Math.min(1, Math.max(0, t)).toFixed(3).replace(new RegExp("0+$"), "").replace(new RegExp("\\.$"), "");   // tail call
}

// fn x  args=1 vars=2 closure=2 cpool=2 bc=631B file=oai_ui/src/components/ShimmerText
// args: t
// locals: i
// closure: p, M
function {
  let i;
  if ((!Number.isFinite(t.cycleDurationMs))) goto L_191;
  if ((!Number.isFinite(t.initialDelayMs))) goto L_191;
  if ((!Number.isFinite(t.restDurationMs))) goto L_191;
  if (((t.initialDelayMs < 0))) goto L_191;
  if (((t.restDurationMs < 0))) goto L_191;
  if (!((t.cycleDurationMs <= t.restDurationMs))) goto L_1a2;
  throw new Error("Shimmer timing requires nonnegative delays and a cycle longer than its rest");
  i = (t.cycleDurationMs - t.restDurationMs);
  return {initialDelayMs: t.initialDelayMs, restDurationMs: t.restDurationMs, animationDurationMs: i, glyphDurationSeconds: (p * (i / M)), animationOptions: {beginFromCurrentState: true, controlPoints: [0.4, 0, 0.2, 1], duration: (i / 1000)}};
}

// fn <atom:0>  args=3 vars=32 closure=0 cpool=22 bc=653B file=oai_ui/src/components/ShimmerText
// args: require, module, exports
// locals: t, i, e, n, s, o, r, a, h, ShimmerText, <class_fields_init>, ShimmerText#1, l, u, m, d, c, v, y, M, p, b, g, A, f, w, S, x, D
function {
  l = function l;
  m = function m;
  d = function d;
  c = function c;
  x = function x;
  let D;
  let S;
  let w;
  let f;
  let A;
  let g;
  let b;
  let p;
  let M;
  let y;
  let v;
  let u;
  let ShimmerText#1;
  let h;
  let a;
  let r;
  let o;
  let s;
  let n;
  let e;
  let i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ShimmerText = undefined;
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("label", undefined, "NFZzAkGL1IgBBT_r");
  e = require("oai_core/src/OAITokens");
  n = require("valdi_core/src/Component");
  s = require("valdi_core/src/Device");
  o = require("valdi_core/src/ElementRef");
  r = require("valdi_core/src/Style");
  a = require("valdi_core/src/supportsTextAnimationColor");
  h = require("valdi_core/src/utils/AttributedTextBuilder");
  let ShimmerText;
  let <class_fields_init>;
  class ShimmerText extends n.Component { ... }
  <proto:ShimmerText>.onDestroy = function <atom:0>;
  <proto:ShimmerText>.onViewModelUpdate = function <atom:0>;
  <proto:ShimmerText>.onRender = function <atom:0>;
  <proto:ShimmerText>.startAnimation = function <atom:0>;
  <proto:ShimmerText>.scheduleAnimation = function <atom:0>;
  <proto:ShimmerText>.usesNativeIOSShimmer = function <atom:0>;
  <proto:ShimmerText>.runGlyphAnimation = function <atom:0>;
  <proto:ShimmerText>.runOpacityAnimation = function <atom:0>;
  <proto:ShimmerText>.currentBaseColor = function <atom:0>;
  <proto:ShimmerText>.baseOpacity = function <atom:0>;
  <proto:ShimmerText>.cancelAnimation = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ShimmerText>;
  ShimmerText = function <atom:0>;
  // close_loc <class_fields_init>
  ShimmerText#1 = function <atom:0>;
  exports.ShimmerText = ShimmerText#1;
  u = {setTimeout: function <atom:0>};
  v = 1400;
  y = Math.round(304.3478260869565);
  M = (v - y);
  p = 0.45;
  b = 0.35;
  g = 270;
  A = 0.25;
  f = 0;
  w = 1;
  S = x({cycleDurationMs: v, initialDelayMs: y, restDurationMs: y});
  D = {text: new r.Style({flexShrink: 1, numberOfLines: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/ShimmerText
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
