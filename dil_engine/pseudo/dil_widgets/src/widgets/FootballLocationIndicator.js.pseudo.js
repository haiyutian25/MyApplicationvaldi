// fn <atom:0>  args=0 vars=4 closure=11 cpool=0 bc=1646B file=dil_widgets/src/widgets/FootballLocationIndicator
// locals: d, l, a, this
// closure: w, m, R, e, t, D, o, i, r, s, n
function {
  this = this;
  let a;
  let l;
  let d;
  if (!((w.resolveDILColor(this.viewModel.awayColor, m) == null))) goto L_7e;
  w.resolveDILColor(this.viewModel.awayColor, m);
  d = m;
  if (!((w.resolveDILColor(this.viewModel.homeColor, R) == null))) goto L_f2;
  w.resolveDILColor(this.viewModel.homeColor, R);
  l = R;
  a = this.getPossessionPercent();
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", D.root);
  e.setAttributes(this.baseViewAttributes);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", D.field);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", D.track);
  e.endRender();
  this.renderYardTicks();
  this.renderPreviousPlayLine(a);
  this.renderFirstDownMarker(a);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", D.awayEndZone);
  e.setAttributeString("backgroundColor", d);
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", D.homeEndZone);
  e.setAttributeString("backgroundColor", l);
  e.endRender();
  this.renderPossessionMarker(a, d, l);
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", D.labels);
  this.renderYardLabels();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=332B file=dil_widgets/src/widgets/FootballLocationIndicator
// locals: t
// closure: e, d, D, M
function {
  let t;
  t = 10;
  if (!((t < 100))) goto L_14b;
  e.beginRender(d, "yard-".concat(t));
  e.setAttributeStyle("style", D.yardTick);
  e.setAttributeString("left", "".concat(M(t), "%"));
  e.endRender();
  t = (t + 10);
  (t + 10);
  goto L_6;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=396B file=dil_widgets/src/widgets/FootballLocationIndicator
// locals: t, o
// closure: L, e, l, D, M
function {
  let t;
  t = 0;
  if (!((t < L.length))) goto L_18b;
  let o;
  o = (10 * (t + 1));
  e.beginRender(l, "label-".concat(o));
  e.setAttributeStyle("style", D.yardLabel);
  e.setAttributeString("left", "".concat(M(o), "%"));
  e.setAttributeString("value", L[t]);
  e.endRender();
  t = <t_new>;
  (t++);
  goto L_5;
  return;
}

// fn <atom:0>  args=1 vars=7 closure=5 cpool=0 bc=707B file=dil_widgets/src/widgets/FootballLocationIndicator
// args: t
// locals: o, i, r, s, n, this
// closure: N, f, e, a, D
function {
  this = this;
  let n;
  let s;
  let r;
  let i;
  let o;
  o = this.viewModel.yardsFromPreviousPlay;
  i = this.getPossessionDirection();
  if (((undefined === t))) goto L_9c;
  if (((undefined === o))) goto L_9c;
  if (((o <= 0))) goto L_9c;
  if (!((undefined === i))) goto L_9f;
  return;
  r = N((t - (i * f(o))));
  s = Math.min(r, t);
  n = Math.abs((r - t));
  if (((n <= 0))) goto L_2c2;
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", D.previousPlayLine);
  e.setAttributeString("backgroundColor", this.getPossessionColor());
  e.setAttributeString("left", "".concat(s, "%"));
  e.setAttributeString("width", "".concat(n, "%"));
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=5 cpool=0 bc=419B file=dil_widgets/src/widgets/FootballLocationIndicator
// args: t
// locals: o, i, r, this
// closure: N, f, e, b, D
function {
  this = this;
  let r;
  let i;
  let o;
  o = this.viewModel.distanceToFirstDown;
  i = this.getPossessionDirection();
  if (((undefined === t))) goto L_93;
  if (((undefined === o))) goto L_93;
  if (((o <= 0))) goto L_93;
  if (!((undefined === i))) goto L_96;
  return;
  r = N((t + (i * f(o))));
  e.beginRender(b, undefined);
  e.setAttributeStyle("style", D.firstDownMarker);
  e.setAttributeString("left", "".concat(r, "%"));
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=4 closure=7 cpool=0 bc=1125B file=dil_widgets/src/widgets/FootballLocationIndicator
// args: t, o, i
// locals: this
// closure: e, y, D, u, h, c, v
function {
  this = this;
  if (!((undefined !== t))) goto L_464;
  if (!((null !== this.viewModel.possessionTeam))) goto L_464;
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", D.possessionMarker);
  if (!(("away" === this.viewModel.possessionTeam))) goto L_14c;
  goto L_14d;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", i);
  e.setAttributeString("left", "".concat(t, "%"));
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", D.ballHorizontalLace);
  e.endRender();
  e.beginRender(h, undefined);
  e.setAttributeStyle("style", D.ballVerticalLace);
  e.endRender();
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", D.ballLeftLace);
  e.endRender();
  e.beginRender(v, undefined);
  e.setAttributeStyle("style", D.ballRightLace);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=333B file=dil_widgets/src/widgets/FootballLocationIndicator
// locals: e, t, this
// closure: C, M
function {
  this = this;
  let t;
  let e;
  if (!(("away" !== this.viewModel.possessionTeam))) goto L_9f;
  if (!(("home" !== this.viewModel.possessionTeam))) goto L_9f;
  return;
  e = this.viewModel.possessionLocation;
  if (!((undefined === e))) goto L_eb;
  return;
  t = C(e.yardline);
  if (!(("away" === e.side))) goto L_144;
  goto L_14a;
  // [栈深重同步 2 -> 1]
  return M((100 - t));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=158B file=dil_widgets/src/widgets/FootballLocationIndicator
// locals: this
function {
  this = this;
  if (!(("away" === this.viewModel.possessionTeam))) goto L_4f;
  return 1;
  if (!(("home" === this.viewModel.possessionTeam))) goto L_9c;
  return -1;
  return undefined;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=309B file=dil_widgets/src/widgets/FootballLocationIndicator
// locals: this
// closure: w, m, R
function {
  this = this;
  if (!(("away" === this.viewModel.possessionTeam))) goto L_c1;
  if (!((w.resolveDILColor(this.viewModel.awayColor, m) == null))) goto L_134;
  w.resolveDILColor(this.viewModel.awayColor, m);
  return m;
  if (!((w.resolveDILColor(this.viewModel.homeColor, R) == null))) goto L_134;
  w.resolveDILColor(this.viewModel.homeColor, R);
  return R;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/FootballLocationIndicator
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

// fn M  args=1 vars=1 closure=2 cpool=1 bc=11B file=dil_widgets/src/widgets/FootballLocationIndicator
// args: e
// closure: k, C
function {
  return (k + (0.9375 * C(e)));
}

// fn f  args=1 vars=1 closure=0 cpool=1 bc=47B file=dil_widgets/src/widgets/FootballLocationIndicator
// args: e
function {
  return (0.9375 * Math.max(0, e));
}

// fn C  args=1 vars=1 closure=0 cpool=0 bc=133B file=dil_widgets/src/widgets/FootballLocationIndicator
// args: e
function {
  if (!(Number.isFinite(e))) goto L_83;
  return Math.max(0, Math.min(100, e));
  return 0;
}

// fn N  args=1 vars=1 closure=1 cpool=1 bc=88B file=dil_widgets/src/widgets/FootballLocationIndicator
// args: e
// closure: k
function {
  return Math.max(k, Math.min(96.875, e));   // tail call
}

// fn <atom:0>  args=3 vars=37 closure=0 cpool=25 bc=2715B file=dil_widgets/src/widgets/FootballLocationIndicator
// args: require, module, exports
// locals: e, t, o, i, r, s, n, d, l, a, b, y, u, h, c, v, g, w, p, S, m, R, k, P, A, L, FootballLocationIndicator, <class_fields_init>, FootballLocationIndicator#1, M, f, C, N, D
function {
  M = function M;
  f = function f;
  C = function C;
  N = function N;
  let D;
  let FootballLocationIndicator#1;
  let L;
  let A;
  let P;
  let k;
  let R;
  let m;
  let S;
  let p;
  let w;
  let g;
  let v;
  let c;
  let h;
  let u;
  let y;
  let b;
  let a;
  let l;
  let d;
  let n;
  let s;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FootballLocationIndicator = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "AAowa2GsENOxrgwO");
  o = e.makeNodePrototype("view", undefined, "LxQNsgwV_VR1zOhS");
  i = e.makeNodePrototype("view", undefined, "XvNag_nY3fs9_Sze");
  r = e.makeNodePrototype("view", undefined, "0gNlgTuRdVSr_HyN");
  s = e.makeNodePrototype("view", undefined, "PwmW6SJmKBNNysTD");
  n = e.makeNodePrototype("view", undefined, "nF3rcyAitDQPqg0O");
  d = e.makeNodePrototype("view", undefined, "5qKgD53rgABEeh3j");
  l = e.makeNodePrototype("label", undefined, "MDCT9wu0QFlQl-Ck");
  a = e.makeNodePrototype("view", undefined, "jt24qtwMzcz5FqiS");
  b = e.makeNodePrototype("view", undefined, "qRXQlJpIyd9STrF7");
  y = e.makeNodePrototype("view", undefined, "vzwz0_Wl7MdtZjlk");
  u = e.makeNodePrototype("view", undefined, "AeJlK0dkqOnd0hnt");
  h = e.makeNodePrototype("view", undefined, "q9Pd5s6IqE_HR_HG");
  c = e.makeNodePrototype("view", undefined, "DfKT-WWYnvAQMd9N");
  v = e.makeNodePrototype("view", undefined, "QcUsExbop-mcvWW5");
  g = require("dil_core/src/DILComponent");
  w = require("dil_core/src/colors/DILColor");
  p = require("dil_core/src/typography/DILDynamicFont");
  S = require("valdi_core/src/Style");
  m = "blue-900";
  R = "orange-500";
  k = 3.125;
  P = 93.75;
  A = 16;
  L = ["10", "20", "30", "40", "50", "40", "30", "20", "10"];
  let FootballLocationIndicator;
  let <class_fields_init>;
  class FootballLocationIndicator extends g.DILComponent { ... }
  <proto:FootballLocationIndicator>.onRender = function <atom:0>;
  <proto:FootballLocationIndicator>.renderYardTicks = function <atom:0>;
  <proto:FootballLocationIndicator>.renderYardLabels = function <atom:0>;
  <proto:FootballLocationIndicator>.renderPreviousPlayLine = function <atom:0>;
  <proto:FootballLocationIndicator>.renderFirstDownMarker = function <atom:0>;
  <proto:FootballLocationIndicator>.renderPossessionMarker = function <atom:0>;
  <proto:FootballLocationIndicator>.getPossessionPercent = function <atom:0>;
  <proto:FootballLocationIndicator>.getPossessionDirection = function <atom:0>;
  <proto:FootballLocationIndicator>.getPossessionColor = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FootballLocationIndicator>;
  FootballLocationIndicator = function <atom:0>;
  // close_loc <class_fields_init>
  FootballLocationIndicator#1 = function <atom:0>;
  exports.FootballLocationIndicator = FootballLocationIndicator#1;
  // append([], 0, g.DIL_COMPONENT_PROPERTIES)
  [][g.DIL_COMPONENT_PROPERTIES] = "awayColor";
  [][("awayColor" ++)] = "distanceToFirstDown";
  [][("distanceToFirstDown" ++)] = "homeColor";
  [][("homeColor" ++)] = "possessionLocation";
  [][("possessionLocation" ++)] = "possessionTeam";
  [][("possessionTeam" ++)] = "yardsFromPreviousPlay";
  ("yardsFromPreviousPlay" ++);
  FootballLocationIndicator#1.properties = [];
  D = {root: new S.Style({flexDirection: "column", width: "100%", height: 42, flexShrink: 0}), field: new S.Style({position: "relative", width: "100%", height: 16, flexShrink: 0}), track: new S.Style({position: "absolute", top: 2, left: "3.125%", right: "3.125%", height: 6, borderRadius: "100%", backgroundColor: "alpha-05"}), yardTick: new S.Style({position: "absolute", top: 2, width: 1, height: 6, backgroundColor: "gray-0"}), awayEndZone: new S.Style({position: "absolute", top: 1, left: 0, width: "3.125%", height: 8, borderRadius: "100%"}), homeEndZone: new S.Style({position: "absolute", top: 1, right: 0, width: "3.125%", height: 8, borderRadius: "100%"}), previousPlayLine: new S.Style({position: "absolute", top: 2, height: 6, borderRadius: "100%"}), firstDownMarker: new S.Style({position: "absolute", top: 0, width: 2, height: 10, borderRadius: 1, backgroundColor: "yellow-400"}), possessionMarker: new S.Style({position: "absolute", top: -3, width: A, height: A, borderRadius: "100%", alignItems: "center", justifyContent: "center", translationX: -8, zIndex: 1}), ballHorizontalLace: new S.Style({position: "absolute", width: 8, height: 1, borderRadius: 1, backgroundColor: "gray-0"}), ballVerticalLace: new S.Style({position: "absolute", width: 1, height: 7, borderRadius: 1, backgroundColor: "gray-0"}), ballLeftLace: new S.Style({position: "absolute", left: 5, width: 1, height: 4, borderRadius: 1, backgroundColor: "gray-0"}), ballRightLace: new S.Style({position: "absolute", right: 5, width: 1, height: 4, borderRadius: 1, backgroundColor: "gray-0"}), labels: new S.Style({position: "relative", width: "100%", height: 20, marginTop: 3, flexShrink: 0}), yardLabel: new S.Style({position: "absolute", width: 28, translationX: -14, color: "color-text-secondary", font: p.dynamicSystemFontForSize(13), textAlign: "center"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/FootballLocationIndicator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
