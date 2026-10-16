// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=343B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: t
// closure: this, C, M
function {
  if (((t.width <= 0))) goto L_156;
  if (((t.width === this.width))) goto L_156;
  this.cancelCycle();
  this.width = t.width;
  this.boxes = C(t.width);
  this.bars = M(t.width);
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: this
function {
  this.startIfReady();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: this
function {
  this.hasNativeView = true;
  this.startIfReady();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: this
function {
  this.hasNativeView = false;
  this.cancelCycle();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=4 bc=335B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// locals: this, this.active_func, new.target, arguments
// closure: C, M, <class_fields_init>, u
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
  this.canvas = new u.ElementRef();
  this.sweep = new u.ElementRef();
  this.boxes = [];
  this.bars = [];
  this.width = 0;
  this.hasNativeView = false;
  this.running = false;
  this.generation = 0;
  this.timers = new Set();
  this.animations = new Set();
  this.handleLayout = function <atom:0>;
  this.handleLayoutComplete = function <atom:0>;
  this.handleViewCreated = function <atom:0>;
  this.handleViewDestroyed = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=186B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// locals: this
function {
  this = this;
  if (!(this.viewModel.enabled)) goto L_6e;
  goto L_b9;
  // [栈深重同步 1 -> 0]
  this.cancelCycle();
  this.settle();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// locals: this
function {
  this = this;
  this.cancelCycle();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=8 cpool=2 bc=1682B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: e, i
// closure: t, r, D, s, this, N, h, o
function {
  t.beginRender(r, "box-".concat(i));
  t.setAttributeStyle("style", D.absolute);
  t.setAttributeNumber("left", e.x);
  t.setAttributeNumber("top", e.y);
  t.setAttributeNumber("width", e.width);
  t.setAttributeNumber("height", e.height);
  t.beginRender(s, undefined);
  t.setAttributeRef(e.fill);
  t.setAttributeStyle("style", D.boxFill);
  t.setAttribute("path", e.fillPath);
  if (!(this.viewModel.enabled)) goto L_36b;
  goto L_373;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("opacity", N(e, h));
  t.endRender();
  t.beginRender(o, undefined);
  t.setAttributeRef(e.outline);
  t.setAttribute("path", e.outlinePath);
  t.setAttributeStyle("style", D.outline);
  if (!(e.media)) goto L_528;
  goto L_54c;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("opacity", h.cardOutline);
  if (!(this.viewModel.enabled)) goto L_5c4;
  goto L_5c5;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("strokeStart", 0);
  if (!(this.viewModel.enabled)) goto L_63d;
  goto L_63e;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("strokeEnd", 1);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=6 cpool=0 bc=1224B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: e, i
// closure: t, a, D, n, this, h
function {
  t.beginRender(a, "bar-".concat(i));
  t.setAttributeRef(e.arrival);
  t.setAttributeStyle("style", D.barArrival);
  t.setAttributeNumber("left", e.x);
  t.setAttributeNumber("top", e.y);
  t.setAttributeNumber("width", e.width);
  t.setAttributeNumber("height", e.height);
  t.beginRender(n, undefined);
  t.setAttributeRef(e.fill);
  t.setAttributeStyle("style", D.barFill);
  if (!(this.viewModel.enabled)) goto L_366;
  goto L_388;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("width", e.width);
  t.setAttributeNumber("borderRadius", (e.height / 2));
  if (!(this.viewModel.enabled)) goto L_450;
  goto L_474;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("opacity", h.barFill);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=14 cpool=3 bc=1417B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// locals: h, this
// closure: t, r, D, s, N, o, a, n, e, w, i, l, O, T
function {
  this = this;
  let h;
  h = this.appearance;
  t.beginRender(e, undefined);
  t.setAttributeStyle("style", D.canvas);
  t.setAttributeString("backgroundColor", w.exploreFeedPageColor(this.viewModel.isDarkMode));
  t.setAttributeFunction("onLayout", this.handleLayout);
  t.setAttributeFunction("onLayoutComplete", this.handleLayoutComplete);
  t.setAttributeFunction("onViewCreate", this.handleViewCreated);
  t.setAttributeFunction("onViewDestroy", this.handleViewDestroyed);
  t.beginRender(i, undefined);
  t.setAttributeRef(this.canvas);
  t.setAttributeStyle("style", D.drawing);
  this.boxes.map(function <atom:0>);
  this.bars.map(function <atom:0>);
  t.beginRender(l, undefined);
  t.setAttributeRef(this.sweep);
  if (!(this.viewModel.isDarkMode)) goto L_4b8;
  goto L_4bb;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", T);
  t.setAttributeNumber("width", (0.8 * this.width));
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=79B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// locals: this
// closure: y, p
function {
  this = this;
  if (!(this.viewModel.isDarkMode)) goto L_4b;
  return y;
  return p;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=414B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// locals: this
function {
  this = this;
  if ((this.running)) goto L_19d;
  if ((!this.viewModel.enabled)) goto L_19d;
  if ((!this.hasNativeView)) goto L_19d;
  if (((this.width <= 0))) goto L_19d;
  if (!((this.boxes[0] == null))) goto L_f8;
  this.boxes[0];
  goto L_13e;
  if (((0 === undefined.outline.all().length))) goto L_19d;
  if ((this.isDestroyed())) goto L_19d;
  this.running = true;
  this.beginCycle();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=3 bc=928B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// locals: t, t#1
// closure: this, v
function {
  this.canvas.setAttribute("opacity", 1);
  this.sweep.setAttribute("opacity", 0);
  this.sweep.setAttribute("translationX", (0.8 * -this.width));
  let t;
  for (const t of this.boxes) {
    t.outline.setAttribute("strokeStart", 0.5);
    t.outline.setAttribute("strokeEnd", 0.5);
    t.fill.setAttribute("opacity", 0);
  }
  let t#1;
  for (const t#1 of this.bars) {
    t#1.arrival.setAttribute("scaleY", v);
    t#1.arrival.setAttribute("translationY", 5);
    t#1.fill.setAttribute("width", 1);
    t#1.fill.setAttribute("opacity", 0);
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=158B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: t
function {
  t.outline.setAttribute("strokeStart", 0);
  t.outline.setAttribute("strokeEnd", 1);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=2 bc=42B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: t, this
function {
  this.animateDrawing(0.95, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=116B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: t, N, this
function {
  return t.fill.setAttribute("opacity", N(t, this.appearance));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=2 bc=42B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: t, N, this
function {
  this.animateDrawing(0.8, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=259B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: t, this
function {
  t.fill.setAttribute("width", t.width);
  t.fill.setAttribute("opacity", this.appearance.barFill);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=158B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: t
function {
  t.arrival.setAttribute("scaleY", 1);
  t.arrival.setAttribute("translationY", 0);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=3 bc=85B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: t, this, x
function {
  this.animateDrawing(0.65, function <atom:0>);
  this.startAnimation(x, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=109B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: this
function {
  return this.sweep.setAttribute("translationX", this.width);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=3 bc=120B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: this
function {
  this.sweep.setAttribute("opacity", 0.85);
  this.animateDrawing(1.4, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=76B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: this
function {
  return this.canvas.setAttribute("opacity", 0);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=2 bc=42B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: this
function {
  this.animateDrawing(0.9, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: this
function {
  return this.beginCycle();   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=11 bc=548B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// locals: t, t#1, this
// closure: v, N, x
function {
  this = this;
  this.renderer.batchUpdates(function <atom:0>);
  let t;
  // close_loc t
  for (const t of this.boxes) {
    this.schedule(t.start, function <atom:0>);
    this.schedule((t.start + 0.3), function <atom:0>);
    // close_loc t
  }
  // close_loc t
  let t#1;
  // close_loc t#1
  for (const t#1 of this.bars) {
    this.schedule(t#1.start, function <atom:0>);
    // close_loc t#1
  }
  // close_loc t#1
  this.schedule(3.8, function <atom:0>);
  this.schedule(5.4, function <atom:0>);
  this.schedule(6.7, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=887B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// locals: e, e#1
// closure: this, N, t
function {
  this.canvas.setAttribute("opacity", 1);
  this.sweep.setAttribute("opacity", 0);
  let e;
  for (const e of this.boxes) {
    e.outline.setAttribute("strokeStart", 0);
    e.outline.setAttribute("strokeEnd", 1);
    e.fill.setAttribute("opacity", N(e, t));
  }
  let e#1;
  for (const e#1 of this.bars) {
    e#1.arrival.setAttribute("scaleY", 1);
    e#1.arrival.setAttribute("translationY", 0);
    e#1.fill.setAttribute("width", e#1.width);
    e#1.fill.setAttribute("opacity", t.barFill);
  }
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=113B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// locals: t, this
// closure: N
function {
  this = this;
  let t;
  t = this.appearance;
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=199B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: this, r, i, e
function {
  this.timers.delete(r);
  if (!(!this.isDestroyed())) goto L_c6;
  if (!(this.running)) goto L_c6;
  if (!((i === this.generation))) goto L_c6;
  e();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=1 bc=131B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: t, e
// locals: i, r, this
function {
  this = this;
  let r;
  let i;
  i = this.generation;
  r = setTimeout(function <atom:0>, (1000 * t));
  this.timers.add(r);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=56B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: t, e
// locals: this
// closure: k
function {
  this = this;
  this.startAnimation({duration: t, controlPoints: k}, e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// closure: this, i
function {
  return this.animations.delete(i);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=197B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: t, e
// locals: i, this
function {
  this = this;
  let i;
  i = this.createAnimation(t, e);
  this.animations.add(i);
  i.start().then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=344B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// locals: t, t#1, this
function {
  this = this;
  this.generation = (this.generation ++);
  this.running = false;
  let t;
  for (const t of this.timers) {
    clearTimeout(t);
  }
  this.timers.clear();
  let t#1;
  for (const t#1 of this.animations) {
    t#1.cancel();
  }
  this.animations.clear();
  return;
}

// fn N  args=2 vars=2 closure=0 cpool=0 bc=106B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: t, e
function {
  if (!(t.media)) goto L_47;
  return e.mediaFill;
  return e.cardFill;
}

// fn S  args=7 vars=7 closure=3 cpool=0 bc=168B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: t, e, i, r, s, o, a
// closure: P, f, u
function {
  return {x: t, y: e, width: i, height: r, start: o, media: a, outlinePath: P(i, r, s, f), fillPath: P(i, r, (s - f), 1), outline: new u.ElementRef(), fill: new u.ElementRef()};
}

// fn P  args=4 vars=8 closure=1 cpool=0 bc=804B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: t, e, i, r
// locals: s, o, a, n
// closure: b
function {
  let n;
  let a;
  let o;
  let s;
  s = (r + i);
  o = ((t - r) - i);
  a = (r + i);
  n = ((e - r) - i);
  return new b.GeometricPathBuilder(t, e).moveTo((t / 2), (e - r)).lineTo(s, (e - r)).arcTo(s, n, i, (Math.PI / 2), (Math.PI / 2)).lineTo(r, a).arcTo(s, a, i, Math.PI, (Math.PI / 2)).lineTo(o, r).arcTo(o, a, i, (-Math.PI / 2), (Math.PI / 2)).lineTo((t - r), n).arcTo(o, n, i, 0, (Math.PI / 2)).close().build();   // tail call
}

// fn C  args=1 vars=6 closure=1 cpool=6 bc=279B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: t
// locals: e, i, r, t#1, s
// closure: S
function {
  let i;
  let e;
  e = ((t - 12) / 2);
  i = [S(0, 0, t, 293, 24, 0, false), S(20, 113, (t - 40), 160, 20, 0.6, true)];
  let r;
  r = 0;
  if (!((r < 2))) goto L_c5;
  let s;
  let t#1;
  t#1 = (r * (e + 12));
  s = (1.35 + (0.13 * r));
  i.push(S(t#1, 380, e, 157, 24, s, false), S((t#1 + 20), 459, 58, 58, 18, (s + 0.46), true));
  r = <r_new>;
  (r++);
  goto L_3a;
  i.push(S(0, 561, t, 89, 24, 2.3, false), S((t - 68), 581, 48, 48, 14, 2.7, true));
  return i;
}

// fn <atom:0>  args=2 vars=2 closure=6 cpool=1 bc=138B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: r, a
// closure: t, e, s, i, o, u
function {
  return {x: t, y: (e + (a * (s + 11))), width: (i * r), height: s, start: (o + (0.1 * a)), arrival: new u.ElementRef(), fill: new u.ElementRef()};
}

// fn F  args=6 vars=6 closure=1 cpool=1 bc=39B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: t, e, i, r, s, o
// closure: u
function {
  return r.map(function <atom:0>);   // tail call
}

// fn M  args=1 vars=4 closure=1 cpool=12 bc=252B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: t
// locals: e, i, r
// closure: F
function {
  let i;
  let e;
  e = ((t - 12) / 2);
  // append([], 0, F(20, 39, (t - 40), [0.76, 1], 12, 0.32))
  // append([], F(20, 39, (t - 40), [0.76, 1], 12, 0.32), F(0, 321, t, [0.94, 0.62], 10, 1.1))
  F(0, 321, t, [0.94, 0.62], 10, 1.1);
  i = [];
  let r;
  r = 0;
  if (!((r < 2))) goto L_b0;
  // append([], 0, F(((r * (e + 12)) + 20), 400, (e - 40), [0.88, 0.62], 10, (1.63 + (0.13 * r))))
  F(((r * (e + 12)) + 20), 400, (e - 40), [0.88, 0.62], 10, (1.63 + (0.13 * r)));
  i.push.apply(i, []);
  r = <r_new>;
  (r++);
  goto L_44;
  // append([], 0, F(20, 581, (t - 112), [0.64, 1, 0.78], 9, 2.55))
  F(20, 581, (t - 112), [0.64, 1, 0.78], 9, 2.55);
  i.push.apply(i, []);
  return i;
}

// fn <atom:0>  args=3 vars=42 closure=0 cpool=33 bc=2287B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// args: require, module, exports
// locals: t, e, i, r, s, o, a, n, l, h, d, u, b, c, w, p, y, m, A, f, g, v, R, k, x, ExploreFeedDrawingSkeleton, <class_fields_init>, ExploreFeedDrawingSkeleton#1, N, S, P, C, F, M, D, I, E, T, O
function {
  N = function N;
  S = function S;
  P = function P;
  C = function C;
  F = function F;
  M = function M;
  let O;
  let T;
  let E;
  let I;
  let D;
  let ExploreFeedDrawingSkeleton#1;
  let x;
  let k;
  let R;
  let v;
  let g;
  let f;
  let A;
  let m;
  let y;
  let p;
  let w;
  let c;
  let b;
  let u;
  let d;
  let h;
  let l;
  let n;
  let a;
  let o;
  let s;
  let r;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedDrawingSkeleton = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", undefined, "zFjvkrz_SRvpIWTU");
  i = t.makeNodePrototype("view", undefined, "GS97hYPVjqX8cNTS");
  r = t.makeNodePrototype("layout", undefined, "Ou9TouLeSu1DQW1q");
  s = t.makeNodePrototype("shape", undefined, "5ug4tx1Rkj20krZ3");
  o = t.makeNodePrototype("shape", undefined, "eBjrsUwhly-NMJ7L");
  a = t.makeNodePrototype("view", undefined, "g18Irqg_omNRjhYO");
  n = t.makeNodePrototype("view", undefined, "fk_k2bw-E1U8puLx");
  l = t.makeNodePrototype("view", undefined, "QnqKLm1e5NUBMmfG");
  h = require("oai_core/src/OAITokens");
  d = require("valdi_core/src/Component");
  u = require("valdi_core/src/ElementRef");
  b = require("valdi_core/src/GeometricPath");
  c = require("valdi_core/src/Style");
  w = require("./ExploreFeedColors");
  p = {cardFill: 0.008, mediaFill: 0.035, cardOutline: 0.065, mediaOutline: 0.035, barFill: 0.06};
  y = {cardFill: 0.06, mediaFill: 0.1, cardOutline: 0.16, mediaOutline: 0.1, barFill: 0.16};
  m = 650;
  A = 1;
  f = 0.5;
  g = 6700;
  v = 0.94;
  R = 1;
  k = [(1 / 3), 0, (2 / 3), 1];
  x = {stiffness: (((2 * Math.PI) / 0.7) ** 2), damping: (((2 * Math.PI) / 0.7) * 1.56)};
  let ExploreFeedDrawingSkeleton;
  let <class_fields_init>;
  class ExploreFeedDrawingSkeleton extends d.Component { ... }
  <proto:ExploreFeedDrawingSkeleton>.onViewModelUpdate = function <atom:0>;
  <proto:ExploreFeedDrawingSkeleton>.onDestroy = function <atom:0>;
  <proto:ExploreFeedDrawingSkeleton>.onRender = function <atom:0>;
  <proto:ExploreFeedDrawingSkeleton>.appearance = function <atom:0>;
  <proto:ExploreFeedDrawingSkeleton>.startIfReady = function <atom:0>;
  <proto:ExploreFeedDrawingSkeleton>.beginCycle = function <atom:0>;
  <proto:ExploreFeedDrawingSkeleton>.settle = function <atom:0>;
  <proto:ExploreFeedDrawingSkeleton>.schedule = function <atom:0>;
  <proto:ExploreFeedDrawingSkeleton>.animateDrawing = function <atom:0>;
  <proto:ExploreFeedDrawingSkeleton>.startAnimation = function <atom:0>;
  <proto:ExploreFeedDrawingSkeleton>.cancelCycle = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExploreFeedDrawingSkeleton>;
  ExploreFeedDrawingSkeleton = function <atom:0>;
  // close_loc <class_fields_init>
  ExploreFeedDrawingSkeleton#1 = function <atom:0>;
  exports.ExploreFeedDrawingSkeleton = ExploreFeedDrawingSkeleton#1;
  D = {canvas: new c.Style({width: "100%", height: m, slowClipping: true, touchEnabled: false, accessibilityNavigation: "ignored"}), absolute: new c.Style({position: "absolute"}), drawing: new c.Style({width: "100%", height: "100%"}), boxFill: new c.Style({position: "absolute", width: "100%", height: "100%", fillColor: h.OAIColor.TextPrimary, strokeWidth: 0}), outline: new c.Style({position: "absolute", width: "100%", height: "100%", strokeWidth: 1, strokeColor: h.OAIColor.TextPrimary, fillColor: "transparent", strokeCap: "round", strokeJoin: "round"}), barArrival: new c.Style({position: "absolute"}), barFill: new c.Style({position: "absolute", left: 0, top: 0, height: "100%", backgroundColor: h.OAIColor.TextPrimary}), sweep: new c.Style({position: "absolute", top: 0, bottom: 0, left: 0, opacity: 0})};
  I = w.exploreFeedPageColor(false);
  E = w.exploreFeedPageColor(true);
  T = D.sweep.extend({background: "linear-gradient(270deg, ".concat(I, "00 0, ", I, " 0.5, ", I, "00 1)")});
  O = D.sweep.extend({background: "linear-gradient(270deg, ".concat(E, "00 0, ", E, " 0.5, ", E, "00 1)")});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedDrawingSkeleton
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
