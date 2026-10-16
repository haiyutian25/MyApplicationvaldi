// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: this
function {
  this.hasNativeView = true;
  this.updateActivity();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: this
function {
  this.hasNativeView = false;
  this.updateActivity();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=414B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: this, t, M, P, f
function {
  if (!(t)) goto L_72;
  goto L_75;
  // [栈深重同步 5 -> 4]
  if (!(t)) goto L_7d;
  goto L_80;
  // [栈深重同步 6 -> 5]
  if (!(t)) goto L_88;
  goto L_8c;
  // [栈深重同步 7 -> 6]
  this.setPose(this.incoming.container, 0, M, P, -f);
  this.setPose(this.outgoing.container, 1, 0, 1, 0);
  this.setFocus(this.incoming, t);
  this.setFocus(this.outgoing, true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=381B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: this, t
function {
  this.incoming.container.setAttribute("opacity", 1);
  this.outgoing.container.setAttribute("opacity", 0);
  this.setFocus(this.incoming, true);
  this.setFocus(this.outgoing, t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=231B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: this, M, R, f
function {
  this.setTransform(this.incoming.container, 0, 1, 0);
  this.setTransform(this.outgoing.container, -M, R, f);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: e
function {
  return e;
}

// fn <atom:0>  args=0 vars=5 closure=6 cpool=6 bc=901B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// locals: e, t, i, s, o
// closure: this, M, P, f, R, V
function {
  let o;
  let s;
  let i;
  let t;
  let e;
  e = this.generation;
  t = this.viewModel.reduceMotion;
  i = this.state.step;
  this.setState({step: ((i + 1) % this.viewModel.messages.length), departingStep: i});
  this.renderer.batchUpdates(function <atom:0>);
  if (!(t)) goto L_1bb;
  goto L_1bd;
  // [栈深重同步 4 -> 3]
  s = [this.animatePhrase({duration: 0.32}, function <atom:0>)];
  if ((t)) goto L_225;
  s.push(this.animatePhrase(V, function <atom:0>));
  o = (await Promise.all(s));
  if ((this.isDestroyed())) goto L_382;
  if (((e !== this.generation))) goto L_382;
  if ((!this.state.active)) goto L_382;
  if ((o.some(function <atom:0>))) goto L_382;
  this.setState({departingStep: undefined});
  this.scheduleTurn();
  return undefined; // async
}

// fn <atom:0>  args=0 vars=4 closure=10 cpool=3 bc=461B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// locals: this, this.active_func, new.target, arguments
// closure: M, P, f, R, V, <class_fields_init>, S, m, u, p
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
  this.state = {active: false, step: 0, departingStep: undefined};
  this.incoming = S();
  this.outgoing = S();
  this.animations = new Set();
  this.timers = new Set();
  this.generation = 0;
  this.hasNativeView = false;
  if (!(m.isVersionAtLeast(195))) goto L_14e;
  goto L_196;
  // [栈深重同步 2 -> 1]
  this.foreground = p.Application.isForegrounded();
  this.handleViewCreated = function <atom:0>;
  this.handleViewDestroyed = function <atom:0>;
  this.turn = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=86B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: e
// closure: this, u
function {
  this.foreground = u.isApplicationForeground(e);
  this.updateActivity();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: e
function {
  e.cancel();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=50B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: this
function {
  this.foreground = false;
  this.updateActivity();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=50B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: this
function {
  this.foreground = true;
  this.updateActivity();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=80B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: t, i
function {
  t.cancel();
  i.cancel();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=3 cpool=5 bc=588B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// locals: e, e#1, t, i, this
// closure: u, m, p
function {
  this = this;
  let i;
  let t;
  let e;
  e = this.viewModel.messages.length;
  null;
  this.state;
  if (!((e > 1))) goto L_dc;
  goto L_dd;
  // [栈深重同步 3 -> 2]
  this.state = {step: 0};
  if (!(m.isVersionAtLeast(195))) goto L_18d;
  let e#1;
  e#1 = p.Application.observeState(function <atom:0>);
  this.registerDisposable(function <atom:0>);
  return;
  t = p.Application.observeEnteredBackground(function <atom:0>);
  i = p.Application.observeEnteredForeground(function <atom:0>);
  this.registerDisposable(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// locals: this
function {
  this = this;
  this.cancelAnimation();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=72B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: e, t
// closure: this
function {
  return (e !== this.viewModel.messages[t]);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=468B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (!((undefined === e))) goto L_b;
  return;
  if (((e.messages.length !== this.viewModel.messages.length))) goto L_bf;
  t = e.messages.some(function <atom:0>);
  if (!(t)) goto L_f9;
  this.setState({step: 0, departingStep: undefined});
  if ((t)) goto L_167;
  if (!((e.reduceMotion !== this.viewModel.reduceMotion))) goto L_1d3;
  this.restartActivity(this.state.active);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=417B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: e, s, this, C
function {
  e.beginRender(s, "outgoing");
  e.setAttributeRef(this.outgoing.container);
  e.setAttributeStyle("style", C.phrase);
  this.renderPhrase(this.outgoing, this.state.departingStep, false);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=418B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: e, o, this, C, r
function {
  e.beginRender(o, "incoming");
  e.setAttributeRef(this.incoming.container);
  e.setAttributeStyle("style", C.phrase);
  this.renderPhrase(this.incoming, this.state.step, r);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=8 cpool=2 bc=1255B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// locals: r, a, this
// closure: e, s, C, o, t, i, w, n
function {
  this = this;
  let a;
  let r;
  if (!(this.state.active)) goto L_93;
  r = !this.viewModel.reduceMotion;
  a = this.viewModel.messages[this.state.step];
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttributeFunction("onViewCreate", this.handleViewCreated);
  e.setAttributeFunction("onViewDestroy", this.handleViewDestroyed);
  e.setAttributeStyle("style", C.container);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", C.thoughts);
  if (((undefined === this.state.departingStep))) goto L_370;
  function <atom:0>();
  if (((undefined === a))) goto L_37d;
  function <atom:0>();
  e.endRender();
  e.beginComponent(w.ExploreFeedDrawingSkeleton, n, undefined, undefined);
  e.setViewModelProperty("enabled", r);
  e.setViewModelProperty("isDarkMode", this.viewModel.isDarkMode);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=328B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: t, i
// closure: e, h, c, o
function {
  e.beginRender(h, i.toString());
  e.setAttributeStyle("style", t);
  e.setAttributeString("color", c.OAIColor.TextSecondary);
  e.setAttributeString("value", o);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=5 closure=10 cpool=1 bc=1340B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: t, i, s
// locals: o, this
// closure: e, h, c, r, C, l, a, A, d, x
function {
  this = this;
  let o;
  o = this.viewModel.messages[i];
  e.beginRender(r, undefined);
  e.setAttributeRef(t.sharp);
  e.setAttributeStyle("style", C.phrase);
  e.beginComponent(l.ShimmerText, a, i.toString(), undefined);
  e.setViewModelProperty("enabled", s);
  e.setViewModelProperty("color", c.OAIColor.TextSecondary);
  e.setViewModelProperty("highlightColor", A.exploreFeedPageColor(this.viewModel.isDarkMode));
  e.setViewModelProperty("style", C.label);
  e.setViewModelProperty("value", o);
  e.endComponent();
  e.endRender();
  if (((undefined === this.state.departingStep))) goto L_53b;
  if ((this.viewModel.reduceMotion)) goto L_53b;
  e.beginRender(d, undefined);
  e.setAttributeRef(t.soft);
  e.setAttributeStyle("style", C.phrase);
  x.map(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=234B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// locals: e, this
function {
  this = this;
  let e;
  if (!(this.isDestroyed())) goto L_2d;
  return;
  if (!(this.hasNativeView)) goto L_75;
  e = this.foreground;
  if (!((e !== this.state.active))) goto L_e9;
  this.restartActivity(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=183B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: this
function {
  this.setPose(this.incoming.container, 1, 0, 1, 0);
  this.setFocus(this.incoming, true);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=207B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: e
// locals: this
function {
  this = this;
  this.cancelAnimation();
  this.setState({active: e, departingStep: undefined});
  this.renderer.batchUpdates(function <atom:0>);
  if (!(e)) goto L_ce;
  this.scheduleTurn();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=151B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// locals: this
// closure: F
function {
  this = this;
  if (((this.viewModel.messages.length < 2))) goto L_96;
  this.schedule(F, this.turn);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=166B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: e, t
function {
  if (!(t)) goto L_4e;
  goto L_4f;
  // [栈深重同步 4 -> 3]
  e.sharp.setAttribute("opacity", 0);
  if (!(t)) goto L_a1;
  goto L_a2;
  // [栈深重同步 4 -> 3]
  e.soft.setAttribute("opacity", 1);
  return;
}

// fn <atom:0>  args=5 vars=6 closure=0 cpool=0 bc=90B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: e, t, i, s, o
// locals: this
function {
  this = this;
  e.setAttribute("opacity", t);
  this.setTransform(e, i, s, o);
  return;
}

// fn <atom:0>  args=4 vars=4 closure=1 cpool=0 bc=263B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: e, t, i, s
// closure: b
function {
  e.setAttribute("translationY", t);
  e.setAttribute("scaleX", i);
  e.setAttribute("scaleY", i);
  if (!(b.supports3DTransforms())) goto L_106;
  e.setAttribute("rotationX", s);
  e.setAttribute("perspective", 400);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=76B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: e
// closure: this, i
function {
  this.animations.delete(i);
  return e;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=196B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: e, t
// locals: i, this
function {
  this = this;
  let i;
  i = this.createAnimation(e, t);
  this.animations.add(i);
  return i.start().then(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=190B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: this, i, t
function {
  this.timers.delete(i);
  if (!(!this.isDestroyed())) goto L_bd;
  if (!(this.state.active)) goto L_bd;
  t();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=89B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: e, t
// locals: i, this
function {
  this = this;
  let i;
  i = setTimeout(function <atom:0>, e);
  this.timers.add(i);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=332B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// locals: e, e#1, this
function {
  this = this;
  this.generation = (this.generation ++);
  let e;
  for (const e of this.timers) {
    clearTimeout(e);
  }
  this.timers.clear();
  let e#1;
  for (const e#1 of this.animations) {
    e#1.cancel();
  }
  this.animations.clear();
  return;
}

// fn S  args=0 vars=0 closure=1 cpool=0 bc=137B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// closure: v
function {
  return {container: new v.ElementRef(), sharp: new v.ElementRef(), soft: new v.ElementRef()};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=7 bc=142B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: t
// closure: C, e
function {
  if (!((0 === t))) goto L_77;
  goto L_79;
  // [栈深重同步 5 -> 4]
  if (!((0 === e))) goto L_83;
  goto L_85;
  // [栈深重同步 5 -> 4]
  return C.label.extend({position: "absolute", width: "100%", translationX: (1.5 * t), translationY: (1.5 * e), opacity: ((0.75 * 0.25) * 0.25)});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=44B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: e
// closure: C
function {
  return [-1, 0, 1].map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=36 closure=0 cpool=25 bc=1572B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// args: require, module, exports
// locals: e, t, i, s, o, n, r, a, d, h, c, l, p, u, g, m, v, y, b, w, A, ExploreFeedLoadingState, <class_fields_init>, ExploreFeedLoadingState#1, S, f, M, P, R, F, V, C, x
function {
  S = function S;
  let x;
  let C;
  let V;
  let F;
  let R;
  let P;
  let M;
  let f;
  let ExploreFeedLoadingState#1;
  let A;
  let w;
  let b;
  let y;
  let v;
  let m;
  let g;
  let u;
  let p;
  let l;
  let c;
  let h;
  let d;
  let a;
  let r;
  let n;
  let o;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedLoadingState = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["accessibilityId", "chatgpt.explore.loading"], "4U-0dyD9L1xfMNef");
  i = e.makeNodePrototype("view", undefined, "MGnUCW5MyPyYlUoF");
  s = e.makeNodePrototype("view", undefined, "hPYNdVhLY0ErcT-v");
  o = e.makeNodePrototype("view", undefined, "-9mFSXQYAjzVSp5Y");
  n = e.makeComponentPrototype(undefined, "pMeWTKAHwol5CRvo");
  r = e.makeNodePrototype("view", undefined, "9rXJiv_lcLvw0d2n");
  a = e.makeComponentPrototype(undefined, "D9Xa4VHjDz_gwfRD");
  d = e.makeNodePrototype("view", undefined, "E7CLvkWse4D266m6");
  h = e.makeNodePrototype("label", undefined, "zgessh2HLL8XMbQs");
  c = require("oai_core/src/OAITokens");
  l = require("oai_ui/src/components/ShimmerText");
  p = require("valdi_core/src/Application");
  u = require("valdi_core/src/ApplicationState");
  g = require("valdi_core/src/Component");
  m = require("valdi_core/src/CompilerIntrinsics");
  v = require("valdi_core/src/ElementRef");
  y = require("valdi_core/src/Style");
  b = require("valdi_core/src/supports3DTransforms");
  w = require("./ExploreFeedDrawingSkeleton");
  A = require("./ExploreFeedColors");
  let ExploreFeedLoadingState;
  let <class_fields_init>;
  class ExploreFeedLoadingState extends g.StatefulComponent { ... }
  <proto:ExploreFeedLoadingState>.onCreate = function <atom:0>;
  <proto:ExploreFeedLoadingState>.onDestroy = function <atom:0>;
  <proto:ExploreFeedLoadingState>.onViewModelUpdate = function <atom:0>;
  <proto:ExploreFeedLoadingState>.onRender = function <atom:0>;
  <proto:ExploreFeedLoadingState>.renderPhrase = function <atom:0>;
  <proto:ExploreFeedLoadingState>.updateActivity = function <atom:0>;
  <proto:ExploreFeedLoadingState>.restartActivity = function <atom:0>;
  <proto:ExploreFeedLoadingState>.scheduleTurn = function <atom:0>;
  <proto:ExploreFeedLoadingState>.setFocus = function <atom:0>;
  <proto:ExploreFeedLoadingState>.setPose = function <atom:0>;
  <proto:ExploreFeedLoadingState>.setTransform = function <atom:0>;
  <proto:ExploreFeedLoadingState>.animatePhrase = function <atom:0>;
  <proto:ExploreFeedLoadingState>.schedule = function <atom:0>;
  <proto:ExploreFeedLoadingState>.cancelAnimation = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExploreFeedLoadingState>;
  ExploreFeedLoadingState = function <atom:0>;
  // close_loc <class_fields_init>
  ExploreFeedLoadingState#1 = function <atom:0>;
  exports.ExploreFeedLoadingState = ExploreFeedLoadingState#1;
  f = ((38 * Math.PI) / 180);
  M = 32;
  P = 0.86;
  R = 0.84;
  F = 4250;
  V = {stiffness: Math.pow(((2 * Math.PI) / 0.68), 2), damping: ((3.6 * Math.PI) / 0.68)};
  C = {container: new y.Style({width: "100%", paddingLeft: 4, paddingRight: 4, paddingTop: 8, gap: 24, accessibilityNavigation: "leaf", touchEnabled: false}), thoughts: new y.Style({width: "100%", height: 30, accessibilityNavigation: "ignored"}), phrase: new y.Style({position: "absolute", width: "100%", height: 30, justifyContent: "center"}), label: new y.Style({font: "system 20", lineHeight: 30, letterSpacing: 0.1, opacity: 0.75, maxWidth: "100%", numberOfLines: 1, adjustsFontSizeToFitWidth: true, minimumScaleFactor: 0.8})};
  x = [-1, 0, 1].flatMap(function <atom:0>);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedLoadingState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
