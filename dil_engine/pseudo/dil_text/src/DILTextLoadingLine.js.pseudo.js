// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=dil_text/src/DILTextLoadingLine
// args: e
function {
  e.Placeholder = "placeholder";
  e.Message = "message";
  e.Indeterminate = "indeterminate";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=94B file=dil_text/src/DILTextLoadingLine
// closure: this
function {
  if ((this.animationStarted)) goto L_5d;
  this.animationStarted = true;
  this.runAnimationLoop();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=195B file=dil_text/src/DILTextLoadingLine
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, r
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
  this.blockRef = new r.ElementRef();
  this.sheenRef = new r.ElementRef();
  this.animationDestroyed = false;
  this.animationStarted = false;
  this.handleLayoutComplete = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=50B file=dil_text/src/DILTextLoadingLine
// locals: this
// closure: l
function {
  this = this;
  this.timer = l.resolveDILTimer();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=105B file=dil_text/src/DILTextLoadingLine
// locals: this
function {
  this = this;
  this.animationDestroyed = true;
  if (!((undefined !== this.animationTimeout))) goto L_68;
  this.animationTimeout();
  this.animationTimeout = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=988B file=dil_text/src/DILTextLoadingLine
// locals: this
// closure: e, t, P, c
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.blockRef);
  e.setAttributeStyle("style", P.loadingBlock);
  e.setAttributeString("backgroundColor", c);
  e.setAttributeNumber("borderRadius", this.viewModel.borderRadius);
  e.setAttributeNumber("height", this.viewModel.height);
  e.setAttributeNumber("opacity", this.getInitialOpacity());
  e.setAttributeNumber("scaleX", this.getInitialScaleX());
  e.setAttributeString("transformOrigin", this.getTransformOrigin());
  e.setAttribute("width", this.viewModel.width);
  e.setAttributeFunction("onLayoutComplete", this.handleLayoutComplete);
  this.renderPlaceholderSheen();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=510B file=dil_text/src/DILTextLoadingLine
// locals: this
// closure: d, e, i, P, p
function {
  this = this;
  if (!((this.viewModel.loadingType === d.Placeholder))) goto L_1fd;
  e.beginRender(i, undefined);
  e.setAttributeRef(this.sheenRef);
  e.setAttributeStyle("style", P.loadingPlaceholderSheen);
  e.setAttributeNumber("height", this.viewModel.height);
  e.setAttributeString("translationX", p);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=109B file=dil_text/src/DILTextLoadingLine
// locals: this
// closure: d
function {
  this = this;
  if (!((this.viewModel.loadingType === d.Message))) goto L_6c;
  return 1;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=111B file=dil_text/src/DILTextLoadingLine
// locals: this
// closure: d, I
function {
  this = this;
  if (!((this.viewModel.loadingType === d.Indeterminate))) goto L_6e;
  return I;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=113B file=dil_text/src/DILTextLoadingLine
// locals: this
// closure: d
function {
  this = this;
  if (!((this.viewModel.loadingType === d.Indeterminate))) goto L_70;
  return "left center";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=531B file=dil_text/src/DILTextLoadingLine
// locals: this
// closure: d
function {
  this = this;
  if (!((this.viewModel.animationDelayMs > 0))) goto L_da;
  (await this.waitForAnimationDelay(this.viewModel.animationDelayMs));
  if (!(!this.animationDestroyed)) goto L_211;
  if (!((this.viewModel.loadingType === d.Placeholder))) goto L_172;
  (await this.runPlaceholderAnimationLoop());
  return undefined; // async
  if (!((this.viewModel.loadingType === d.Message))) goto L_1c1;
  (await this.runMessageAnimationLoop());
  return undefined; // async
  if (!((this.viewModel.loadingType === d.Indeterminate))) goto L_210;
  (await this.runIndeterminateAnimationLoop());
  return undefined; // async
  this.viewModel.loadingType;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=14B file=dil_text/src/DILTextLoadingLine
// closure: this, t
function {
  this.animationTimeout = undefined;
  t();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=84B file=dil_text/src/DILTextLoadingLine
// args: t
// closure: this, e
function {
  this.animationTimeout = this.timer.setTimeout(function <atom:0>, e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=14B file=dil_text/src/DILTextLoadingLine
// args: e
// locals: this
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=89B file=dil_text/src/DILTextLoadingLine
// closure: this, e, v, p
function {
  if (!(e)) goto L_52;
  goto L_55;
  // [栈深重同步 4 -> 3]
  this.sheenRef.setAttribute("translationX", p);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=1 bc=144B file=dil_text/src/DILTextLoadingLine
// locals: e, this
// closure: v, p, y, g
function {
  this = this;
  let e;
  e = true;
  if (!(!this.animationDestroyed)) goto L_8e;
  this.animate(y, function <atom:0>);
  (await this.waitForAnimationDelay(g));
  e = !e;
  !e;
  goto L_8;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=87B file=dil_text/src/DILTextLoadingLine
// closure: this, e, w
function {
  if (!(e)) goto L_52;
  goto L_53;
  // [栈深重同步 4 -> 3]
  this.blockRef.setAttribute("opacity", 1);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=1 bc=144B file=dil_text/src/DILTextLoadingLine
// locals: e, this
// closure: w, f, L
function {
  this = this;
  let e;
  e = true;
  if (!(!this.animationDestroyed)) goto L_8e;
  this.animate(f, function <atom:0>);
  (await this.waitForAnimationDelay(L));
  e = !e;
  !e;
  goto L_8;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=89B file=dil_text/src/DILTextLoadingLine
// closure: this, e, T, I
function {
  if (!(e)) goto L_52;
  goto L_55;
  // [栈深重同步 4 -> 3]
  this.blockRef.setAttribute("scaleX", I);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=1 bc=144B file=dil_text/src/DILTextLoadingLine
// locals: e, this
// closure: T, I, D, A
function {
  this = this;
  let e;
  e = true;
  if (!(!this.animationDestroyed)) goto L_8e;
  this.animate(D, function <atom:0>);
  (await this.waitForAnimationDelay(A));
  e = !e;
  !e;
  goto L_8;
  return undefined; // async
}

// fn u  args=1 vars=3 closure=2 cpool=0 bc=110B file=dil_text/src/DILTextLoadingLine
// args: e
// locals: t, i
// closure: M, h
function {
  let i;
  let t;
  t = M.get(e);
  if (!((undefined !== t))) goto L_3a;
  return t;
  i = h(e);
  M.set(e, i);
  return i;
}

// fn h  args=1 vars=4 closure=2 cpool=0 bc=113B file=dil_text/src/DILTextLoadingLine
// args: e
// locals: t, i, n
// closure: m, S
function {
  let i;
  let t;
  if (!((e <= 1))) goto L_10;
  return [0];
  t = m(e);
  i = Array(e).fill(0);
  let n;
  n = 0;
  if (!((n < t.length))) goto L_6d;
  i[t[n]] = (n * S);
  n = <n_new>;
  (n++);
  goto L_46;
  return i;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=dil_text/src/DILTextLoadingLine
// args: e, t
function {
  return (t + 1);
}

// fn m  args=1 vars=6 closure=3 cpool=1 bc=237B file=dil_text/src/DILTextLoadingLine
// args: e
// locals: t, i, n, o, e#1
// closure: R, x, C
function {
  let n;
  let i;
  let t;
  t = [0];
  i = Array.from({length: (e - 1)}, function <atom:0>);
  n = ((e * R) >>> 0);
  let o;
  o = (i.length - 1);
  if (!((o > 0))) goto L_b7;
  let e#1;
  n = (((n * x) + C) >>> 0);
  (((n * x) + C) >>> 0);
  e#1 = (n % (o + 1));
  goto L_99;
  const _it1 = <?>;
  <done(<catch>)>;
  i[o] = <value(<catch>)>;
  <done(<catch>)>;
  i[e#1] = <value(<catch>)>;
  goto L_ac;
  // [栈深重同步 4 -> 0]
  goto L_7e;
  [i[e#1], i[o]];
  o = <o_new>;
  (o--);
  goto L_55;
  // append([], 0, i)
  i;
  t.push.apply(t, []);
  return t;
}

// fn <atom:0>  args=3 vars=38 closure=0 cpool=21 bc=1144B file=dil_text/src/DILTextLoadingLine
// args: require, module, exports
// locals: e, t, i, n, o, r, a, s, l, d, DILTextLoadingLine, <class_fields_init>, DILTextLoadingLine#1, u, h, m, c, g, y, p, v, b, L, f, w, A, D, I, T, M, S, R, x, C, P
function {
  u = function u;
  h = function h;
  m = function m;
  let P;
  let C;
  let x;
  let R;
  let S;
  let M;
  let T;
  let I;
  let D;
  let A;
  let w;
  let f;
  let L;
  let b;
  let v;
  let p;
  let y;
  let g;
  let c;
  let DILTextLoadingLine#1;
  let l;
  let s;
  let a;
  let r;
  let o;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTextLoadingType = undefined;
  exports.DILTextLoadingLine = undefined;
  exports.buildDILTextLoadingLineDelays = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "ep88Ci00WQ5YLWoS");
  i = e.makeNodePrototype("view", undefined, "oPIyn-JJLQiiCb7_");
  n = require("valdi_core/src/AnimationOptions");
  o = require("valdi_core/src/Component");
  r = require("valdi_core/src/ElementRef");
  a = require("valdi_core/src/Style");
  s = require("dil_core/src/colors/DILColor");
  l = require("dil_core/src/DILTimer");
  if ((d)) goto L_196;
  d = {};
  exports.DILTextLoadingType = {};
  !function <atom:0>({});
  let DILTextLoadingLine;
  let <class_fields_init>;
  class DILTextLoadingLine extends o.Component { ... }
  <proto:DILTextLoadingLine>.onCreate = function <atom:0>;
  <proto:DILTextLoadingLine>.onDestroy = function <atom:0>;
  <proto:DILTextLoadingLine>.onRender = function <atom:0>;
  <proto:DILTextLoadingLine>.renderPlaceholderSheen = function <atom:0>;
  <proto:DILTextLoadingLine>.getInitialOpacity = function <atom:0>;
  <proto:DILTextLoadingLine>.getInitialScaleX = function <atom:0>;
  <proto:DILTextLoadingLine>.getTransformOrigin = function <atom:0>;
  <proto:DILTextLoadingLine>.runAnimationLoop = function <atom:0>;
  <proto:DILTextLoadingLine>.waitForAnimationDelay = function <atom:0>;
  <proto:DILTextLoadingLine>.runPlaceholderAnimationLoop = function <atom:0>;
  <proto:DILTextLoadingLine>.runMessageAnimationLoop = function <atom:0>;
  <proto:DILTextLoadingLine>.runIndeterminateAnimationLoop = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTextLoadingLine>;
  DILTextLoadingLine = function <atom:0>;
  // close_loc <class_fields_init>
  DILTextLoadingLine#1 = function <atom:0>;
  exports.DILTextLoadingLine = DILTextLoadingLine#1;
  exports.buildDILTextLoadingLineDelays = u;
  c = s.resolveDILBackgroundColor(undefined, "alpha-10");
  g = 2200;
  y = {curve: n.AnimationCurve.EaseInOut, duration: (g / 1000)};
  p = "-100%";
  v = "50%";
  b = "linear-gradient(270deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.36) 0.5, rgba(255, 255, 255, 0) 1)";
  L = 850;
  f = {curve: n.AnimationCurve.EaseInOut, duration: (L / 1000)};
  w = 0.4;
  A = 2500;
  D = {curve: n.AnimationCurve.EaseInOut, duration: (A / 1000)};
  I = 0.68;
  T = 0.96;
  M = new Map();
  S = 180;
  R = 2654435761.0;
  x = 1664525;
  C = 1013904223;
  P = {loadingBlock: new a.Style({flexShrink: 0, position: "relative", slowClipping: true}), loadingPlaceholderSheen: new a.Style({background: b, left: 0, position: "absolute", top: 0, width: "200%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/DILTextLoadingLine
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
