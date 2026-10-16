// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=widgets/src/components/scroll/scrollbar/ScrollBar
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=124B file=widgets/src/components/scroll/scrollbar/ScrollBar
// args: e
// closure: A, this
function {
  if (!((Math.abs(e.velocityY) > A))) goto L_7b;
  this.onChangeMode(3);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=119B file=widgets/src/components/scroll/scrollbar/ScrollBar
// closure: this, y
function {
  if (!((2 !== this.state.mode))) goto L_76;
  this.onChangeMode(0, y);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=148B file=widgets/src/components/scroll/scrollbar/ScrollBar
// closure: this, e
function {
  this.onUpdateScrollPos(e.y);
  this.onUpdateScrollLabel(e.y);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=191B file=widgets/src/components/scroll/scrollbar/ScrollBar
// args: e
// closure: this
function {
  if (!((0 === this.state.mode))) goto L_73;
  this.onChangeMode(1);
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=207B file=widgets/src/components/scroll/scrollbar/ScrollBar
// args: e
// closure: this, y
function {
  if (!((e.state === 0))) goto L_52;
  this.onChangeMode(2);
  goto L_84;
  if (!((e.state === 2))) goto L_84;
  this.onChangeMode(0, y);
  e.state;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  this.onUpdateTouchPos(e.y);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=5 bc=299B file=widgets/src/components/scroll/scrollbar/ScrollBar
// locals: this, this.active_func, new.target, arguments
// closure: A, y, <class_fields_init>, u
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
  this.state = {mode: 0};
  this.barTrack = new u.ElementRef();
  this.barIndicator = new u.ElementRef();
  this.contentRoot = new u.ElementRef();
  this.scrollViewListener = {onDragStart: function <atom:0>, onDragEnd: function <atom:0>, onScrollEnd: function <atom:0>, onScroll: function <atom:0>};
  this.onTouchBarTrack = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=273B file=widgets/src/components/scroll/scrollbar/ScrollBar
// locals: this
function {
  this = this;
  if (!((this.scrollViewSubscription == null))) goto L_2c;
  this.scrollViewSubscription;
  goto L_50;
  undefined.unsubscribe();
  this.scrollViewSubscription = this.viewModel.scrollViewHandler.subscribeListener(this.scrollViewListener);
  this.setState({mode: 0});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=122B file=widgets/src/components/scroll/scrollbar/ScrollBar
// locals: this
function {
  this = this;
  if (!((this.scrollViewSubscription == null))) goto L_2c;
  this.scrollViewSubscription;
  goto L_50;
  undefined.unsubscribe();
  clearInterval(this.modeChangeTimeout);
  return;
}

// fn <atom:0>  args=0 vars=7 closure=11 cpool=1 bc=2389B file=widgets/src/components/scroll/scrollbar/ScrollBar
// locals: c, u, b, h, g, m, this
// closure: e, t, B, o, r, i, n, s, a, d, l
function {
  this = this;
  let m;
  let g;
  let h;
  let b;
  let u;
  let c;
  c = this.state.mode;
  u = this.state.label;
  if (!((0 === c))) goto L_aa;
  goto L_ab;
  // [栈深重同步 1 -> 0]
  b = 1;
  if (!((3 === c))) goto L_b6;
  goto L_b7;
  // [栈深重同步 1 -> 0]
  h = 0;
  if (!((2 === c))) goto L_c2;
  goto L_c3;
  // [栈深重同步 1 -> 0]
  g = 0;
  if (!(u)) goto L_cd;
  goto L_ce;
  // [栈深重同步 1 -> 0]
  m = 0;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.contentRoot);
  e.setAttributeStyle("style", B.contentRoot);
  e.setAttribute("touchEnabled", false);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", B.contentFlingingLabel);
  e.setAttributeNumber("opacity", (h * m));
  e.setAttributeString("value", u);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", B.contentScrubbingLabel);
  e.setAttributeNumber("opacity", (g * m));
  e.setAttributeString("value", u);
  e.endRender();
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", B.contentScrubbingThumb);
  e.setAttributeNumber("opacity", g);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", B.contentScrubbingThumbBar);
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", B.contentScrubbingThumbBar);
  e.endRender();
  e.endRender();
  e.endRender();
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", B.barRoot);
  e.beginRender(d, undefined);
  e.setAttributeRef(this.barTrack);
  e.setAttributeNumber("opacity", b);
  e.setAttributeStyle("style", B.barTrack);
  e.setAttributeFunction("onTouch", this.onTouchBarTrack);
  e.endRender();
  e.beginRender(l, undefined);
  e.setAttributeRef(this.barIndicator);
  e.setAttributeNumber("opacity", b);
  e.setAttributeStyle("style", B.barIndicator);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=433B file=widgets/src/components/scroll/scrollbar/ScrollBar
// args: e
// locals: t, o, r, i, this
function {
  this = this;
  let i;
  let r;
  let o;
  let t;
  t = this.viewModel.scrollViewHandler;
  if (!(!t)) goto L_5b;
  return;
  if (!((t.scrollViewFrame == null))) goto L_87;
  t.scrollViewFrame;
  goto L_a8;
  o = undefined.height;
  if (!(!o)) goto L_b0;
  return;
  if (!((this.barTrack.single() == null))) goto L_ff;
  this.barTrack.single();
  goto L_149;
  if (!((undefined.frame == null))) goto L_128;
  undefined.frame;
  goto L_149;
  r = undefined.height;
  if (!(!r)) goto L_151;
  return;
  i = ((e / r) * (t.getContentHeight() - o));
  t.scrollToClamped(0, i, false);
  return;
}

// fn <atom:0>  args=1 vars=7 closure=1 cpool=0 bc=565B file=widgets/src/components/scroll/scrollbar/ScrollBar
// args: e
// locals: t, o, r, i, n, this
// closure: T
function {
  this = this;
  let n;
  let i;
  let r;
  let o;
  let t;
  t = this.viewModel.scrollViewHandler;
  if (!(!t)) goto L_5e;
  return;
  if (!((t.scrollViewFrame == null))) goto L_8a;
  t.scrollViewFrame;
  goto L_ab;
  o = undefined.height;
  if (!(!o)) goto L_b3;
  return;
  if (!((this.barTrack.single() == null))) goto L_102;
  this.barTrack.single();
  goto L_14c;
  if (!((undefined.frame == null))) goto L_12b;
  undefined.frame;
  goto L_14c;
  r = undefined.height;
  if (!(!r)) goto L_154;
  return;
  i = ((e / (t.getContentHeight() - o)) * (r - T));
  n = ((i + 20) - 25);
  this.barIndicator.setAttribute("translationY", i);
  this.contentRoot.setAttribute("translationY", n);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=338B file=widgets/src/components/scroll/scrollbar/ScrollBar
// args: e
// locals: t, o, r, i, this
function {
  this = this;
  let i;
  let r;
  let o;
  let t;
  t = this.viewModel.scrollViewHandler;
  if (!(!t)) goto L_5b;
  return;
  o = this.viewModel.scrollBarHandler;
  if (!(!o)) goto L_a7;
  return;
  if (!((this.viewModel.scrollBarCenterOffset == null))) goto L_f1;
  this.viewModel.scrollBarCenterOffset;
  r = 0;
  i = o.getLabelAtPosition(t, (e + r));
  this.setState({label: i});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=54B file=widgets/src/components/scroll/scrollbar/ScrollBar
// closure: this, e, S
function {
  this.setStateAnimated({mode: e}, {duration: S});
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=279B file=widgets/src/components/scroll/scrollbar/ScrollBar
// args: e, t
// locals: this
// closure: S, b
function {
  this = this;
  if (!(this.modeChangeTimeout)) goto L_5d;
  clearTimeout(this.modeChangeTimeout);
  this.modeChangeTimeout = undefined;
  undefined;
  if (!((e !== this.state.mode))) goto L_116;
  if (!((undefined === t))) goto L_e3;
  goto L_116;
  // [栈深重同步 1 -> 0]
  this.modeChangeTimeout = b.setTimeoutInterruptible(function <atom:0>, t);
  b.setTimeoutInterruptible(function <atom:0>, t);
  return;
}

// fn <atom:0>  args=3 vars=36 closure=0 cpool=9 bc=2685B file=widgets/src/components/scroll/scrollbar/ScrollBar
// args: require, module, exports
// locals: e, t, o, r, i, n, s, a, d, l, c, u, b, h, g, m, S, y, v, R, p, T, w, C, A, f, ScrollBar, <class_fields_init>, ScrollBar#1, k, x, N, B
function {
  let B;
  let N;
  let x;
  let k;
  let ScrollBar#1;
  let f;
  let A;
  let C;
  let w;
  let T;
  let p;
  let R;
  let v;
  let y;
  let S;
  let m;
  let g;
  let h;
  let b;
  let u;
  let c;
  let l;
  let d;
  let a;
  let s;
  let n;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ScrollBar = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["lazyLayout", true], "WyagS1s6WhXd1JCP");
  o = e.makeNodePrototype("label", undefined, "nGD3JSW24A1vW-zN");
  r = e.makeNodePrototype("label", undefined, "iUOQOxOUD3exLGig");
  i = e.makeNodePrototype("view", undefined, "N7wnBdd4euYLttiz");
  n = e.makeNodePrototype("view", undefined, "fQgGIo54tQt_eiHN");
  s = e.makeNodePrototype("view", undefined, "HvyChFmY5hg_h-PS");
  a = e.makeNodePrototype("layout", ["lazyLayout", true], "CGLci2lgX9VXVlhn");
  d = e.makeNodePrototype("view", undefined, "13E-p_YfmVrl3fGg");
  l = e.makeNodePrototype("view", undefined, "wYN23uYLmB2S1vrq");
  c = require("valdi_core/src/Component");
  u = require("valdi_core/src/ElementRef");
  b = require("valdi_core/src/SetTimeout");
  h = require("valdi_core/src/Style");
  g = require("widgets/src/styles/semanticColors");
  m = require("valdi_core/src/SystemFont");
  S = 0.3;
  y = 1000;
  v = 4;
  R = 6;
  p = 1;
  T = 40;
  w = 50;
  C = 30;
  A = 1000;
  f = 40;
  let ScrollBar;
  let <class_fields_init>;
  class ScrollBar extends c.StatefulComponent { ... }
  <proto:ScrollBar>.onViewModelUpdate = function <atom:0>;
  <proto:ScrollBar>.onDestroy = function <atom:0>;
  <proto:ScrollBar>.onRender = function <atom:0>;
  <proto:ScrollBar>.onUpdateTouchPos = function <atom:0>;
  <proto:ScrollBar>.onUpdateScrollPos = function <atom:0>;
  <proto:ScrollBar>.onUpdateScrollLabel = function <atom:0>;
  <proto:ScrollBar>.onChangeMode = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ScrollBar>;
  ScrollBar = function <atom:0>;
  // close_loc <class_fields_init>
  ScrollBar#1 = function <atom:0>;
  exports.ScrollBar = ScrollBar#1;
  k = new h.Style({position: "absolute", top: 0, bottom: 0, left: 0, right: 0});
  x = k.extend({borderRadius: "50%", touchEnabled: false});
  N = new h.Style({borderRadius: "50%", touchEnabled: false});
  B = {barRoot: k.extend({left: undefined, width: 6}), barTrack: x.extend({backgroundColor: g.SemanticColor.Background.OBJECT, left: 1, right: 1, touchEnabled: true, touchAreaExtension: 20}), barIndicator: x.extend({backgroundColor: g.SemanticColor.Button.TERTIARY, height: T, bottom: undefined}), contentRoot: x.extend({position: "absolute", height: w, bottom: undefined, flexDirection: "row", alignItems: "center", justifyContent: "center"}), contentFlingingLabel: x.extend({backgroundColor: g.SemanticColor.Background.MAIN, boxShadow: "0 1 10 rgba(0, 0, 0, 0.1)", height: C, top: 10, right: 12, padding: "0 12", textAlign: "center", left: undefined, font: m.systemFont(24), color: g.SemanticColor.Text.PRIMARY}), contentScrubbingLabel: N.extend({boxShadow: "0 1 10 rgba(0, 0, 0, 0.1)", backgroundColor: g.SemanticColor.Button.TERTIARY, padding: "0 16", textAlign: "center", height: 36, font: m.systemFont(20), color: g.SemanticColor.Text.ON_TERTIARY_BUTTON}), contentScrubbingThumb: x.extend({backgroundColor: g.SemanticColor.Button.TERTIARY, borderRadius: "20 4 4 20", top: 5, height: f, width: 72, padding: 10, justifyContent: "space-around", left: undefined}), contentScrubbingThumbBar: N.extend({backgroundColor: g.SemanticColor.Text.PLAYER, height: 2, width: 18, marginLeft: 5})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/scroll/scrollbar/ScrollBar
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
