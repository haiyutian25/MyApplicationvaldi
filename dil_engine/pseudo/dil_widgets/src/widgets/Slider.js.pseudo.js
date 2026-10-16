// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/Slider
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=213B file=dil_widgets/src/widgets/Slider
// closure: this, y
function {
  this.isTouchInteracting = true;
  y.runDILControlInteraction(this.context, this.viewModel, {target: "slider", affordance: y.DILInteractionAffordance.ValueInput}, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=15B file=dil_widgets/src/widgets/Slider
// closure: this
function {
  this.isTouchInteracting = false;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=80B file=dil_widgets/src/widgets/Slider
// args: e
// closure: this
function {
  this.setState({barWidth: e.width});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=231B file=dil_widgets/src/widgets/Slider
// args: e
// closure: this
function {
  if (!((true !== this.viewModel.disabled))) goto L_e6;
  return (Math.abs(e.deltaX) > Math.abs(e.deltaY));
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=dil_widgets/src/widgets/Slider
// closure: this, e
function {
  return this.applyBarTouch(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=137B file=dil_widgets/src/widgets/Slider
// args: e
// locals: t
// closure: this
function {
  let t;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  t = undefined.runWithUserInteraction;
  if (!((undefined === t))) goto L_82;
  goto L_88;
  // [栈深重同步 1 -> 0]
  t(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=dil_widgets/src/widgets/Slider
// closure: this, e
function {
  return this.applySliderValue(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=137B file=dil_widgets/src/widgets/Slider
// args: e
// locals: t
// closure: this
function {
  let t;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  t = undefined.runWithUserInteraction;
  if (!((undefined === t))) goto L_82;
  goto L_88;
  // [栈深重同步 1 -> 0]
  t(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=6 bc=261B file=dil_widgets/src/widgets/Slider
// locals: this, this.active_func, new.target, arguments
// closure: y, <class_fields_init>, F, f
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
  this.state = {barWidth: 0, localValue: F(this.viewModel)};
  this.barRef = new f.ElementRef();
  this.isTouchInteracting = false;
  this.handleInteraction = function <atom:0>;
  this.handleInteractionEnd = function <atom:0>;
  this.handleBarLayout = function <atom:0>;
  this.shouldRecognizeHorizontalDrag = function <atom:0>;
  this.handleBarTouch = function <atom:0>;
  this.handleNativeSliderChange = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=310B file=dil_widgets/src/widgets/Slider
// args: e
// locals: t, this
// closure: z
function {
  this = this;
  let t;
  if (((undefined === e))) goto L_51;
  if (!((undefined !== this.viewModel.value))) goto L_54;
  return;
  t = z(this.state.localValue, this.resolvedRange);
  if (!((t !== this.state.localValue))) goto L_135;
  this.setState({localValue: t});
  return;
}

// fn <atom:0>  args=0 vars=6 closure=5 cpool=2 bc=1164B file=dil_widgets/src/widgets/Slider
// locals: i, r, o, n, a, this
// closure: H, M, e, t, G
function {
  this = this;
  let a;
  let n;
  let o;
  let r;
  let i;
  i = this.value;
  r = this.resolvedRange;
  o = H(this.viewModel.marks, r);
  n = (true === this.viewModel.disabled);
  if (!(M.Device.isWeb())) goto L_13a;
  goto L_13c;
  // [栈深重同步 1 -> 0]
  a = 0.55;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", G.root);
  e.setAttributes(this.baseViewAttributes);
  if (!(n)) goto L_237;
  goto L_25a;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTouchStart", this.handleInteraction);
  e.setAttributeFunction("onTouchEnd", this.handleInteractionEnd);
  e.setAttributeString("accessibilityLabel", this.viewModel.label);
  e.setAttribute("accessibilityStateDisabled", n);
  if (!(n)) goto L_382;
  goto L_383;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  if (!(this.viewModel.label)) goto L_3f8;
  this.renderLabelRow(i);
  if (!((undefined === o))) goto L_431;
  goto L_463;
  // [栈深重同步 1 -> 0]
  this.renderBarWithMarks(i, n, o, r);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=160B file=dil_widgets/src/widgets/Slider
// closure: x, M
function {
  if (!(x.supportsNativeIOSSliders())) goto L_9f;
  return (Number.parseInt(M.Device.getSystemVersion(), 10) >= 26);
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=207B file=dil_widgets/src/widgets/Slider
// locals: e, this
// closure: O, I
function {
  this = this;
  let e;
  e = O(this.viewModel.min, 0);
  return {max: Math.max(e, O(this.viewModel.max, I)), min: e};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=181B file=dil_widgets/src/widgets/Slider
// locals: this
// closure: z, q
function {
  this = this;
  if (!((q(this.viewModel.value) == null))) goto L_90;
  q(this.viewModel.value);
  return z(this.state.localValue, this.resolvedRange);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=665B file=dil_widgets/src/widgets/Slider
// args: t
// locals: this
// closure: e, i, G, r, o, Z
function {
  this = this;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", G.labelRow);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", G.label);
  if (!((this.viewModel.label == null))) goto L_16e;
  this.viewModel.label;
  e.setAttributeString("value", "");
  e.endRender();
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", G.valueLabel);
  e.setAttributeString("value", Z(t));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=9 closure=12 cpool=0 bc=2350B file=dil_widgets/src/widgets/Slider
// args: t, i, r
// locals: o, o#1, l, d, u, this
// closure: X, e, R, n, M, T, V, K, a, G, s, U
function {
  this = this;
  let u;
  let d;
  let l;
  let o#1;
  if (!(this.usesNativeSlider)) goto L_392;
  let o;
  o = X(this.viewModel, r);
  e.beginComponent(R.Slider, n, undefined, undefined);
  if (!((this.viewModel.label == null))) goto L_172;
  this.viewModel.label;
  if (!((this.viewModel.name == null))) goto L_172;
  this.viewModel.name;
  e.setViewModelProperty("accessibilityLabel", "Slider");
  e.setViewModelProperty("disabled", i);
  e.setViewModelProperty("maximumValue", r.max);
  e.setViewModelProperty("minimumValue", r.min);
  e.setViewModelProperty("onChange", this.handleNativeSliderChange);
  if (!(o)) goto L_306;
  goto L_307;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("step", undefined);
  e.setViewModelProperty("stepped", o);
  e.setViewModelProperty("value", t);
  e.endComponent();
  return;
  o#1 = M.Device.isWeb();
  l = ("stepped" === this.viewModel.sliderStyle);
  if (!(o#1)) goto L_435;
  if (!(l)) goto L_435;
  goto L_438;
  // [栈深重同步 1 -> 0]
  d = V;
  u = K(t, r);
  e.beginRender(a, undefined);
  e.setAttributeRef(this.barRef);
  if (!(o#1)) goto L_50c;
  goto L_530;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", G.bar);
  if (!(!i)) goto L_5ac;
  if ((!M.Device.isWeb())) goto L_5b1;
  e.setAttribute("canAlwaysScrollHorizontal", undefined);
  if (!(i)) goto L_5e4;
  goto L_607;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onDrag", this.handleBarTouch);
  e.setAttribute("onDragDisabled", i);
  if (!(i)) goto L_668;
  goto L_68b;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onDragPredicate", this.shouldRecognizeHorizontalDrag);
  e.setAttributeFunction("onLayout", this.handleBarLayout);
  if (!(i)) goto L_70e;
  goto L_731;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", this.handleBarTouch);
  if (!(o#1)) goto L_766;
  goto L_78f;
  // [栈深重同步 1 -> 0]
  this.renderLegacyTrack(u);
  e.beginRender(s, undefined);
  if (!(o#1)) goto L_83b;
  if (!(l)) goto L_815;
  goto L_85f;
  // [栈深重同步 4 -> 3]
  goto L_85f;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", G.thumb);
  e.setAttributeNumber("translationX", U(this.state.barWidth, u, d));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=595B file=dil_widgets/src/widgets/Slider
// args: t
// closure: e, l, G, d, u
function {
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", G.track);
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", G.trackEmpty);
  e.endRender();
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", G.trackFilled);
  e.setAttributeString("width", ((Math.round((10000 * t)) / 100) + "%"));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=211B file=dil_widgets/src/widgets/Slider
// args: t, i
// locals: this
// closure: e, c, G
function {
  this = this;
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", G.reactWebTrack);
  if (!(i)) goto L_aa;
  this.renderReactWebStepMarkers(t);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=294B file=dil_widgets/src/widgets/Slider
// args: t
// locals: i, this
// closure: Y, e, h, G
function {
  this = this;
  let i;
  i = Y(t, this.viewModel.step);
  if (!((0 !== i))) goto L_125;
  e.beginRender(h, undefined);
  e.setAttributeStyle("style", G.reactWebStepMarkers);
  this.renderReactWebStepMarkerViews(i);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=235B file=dil_widgets/src/widgets/Slider
// args: t
// locals: i
// closure: e, b, G
function {
  let i;
  i = 0;
  if (!((i < t))) goto L_ea;
  e.beginRender(b, "step-marker-".concat(i));
  e.setAttributeStyle("style", G.reactWebStepMarker);
  e.endRender();
  i = <i_new>;
  (i++);
  goto L_5;
  return;
}

// fn <atom:0>  args=4 vars=5 closure=4 cpool=0 bc=413B file=dil_widgets/src/widgets/Slider
// args: t, i, r, o
// locals: this
// closure: e, v, G, m
function {
  this = this;
  e.beginRender(v, undefined);
  e.setAttributeStyle("style", G.barWithMarks);
  this.renderBar(t, i, o);
  e.beginRender(m, undefined);
  e.setAttributeStyle("style", G.marks);
  this.renderMarks(r, o);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=5 cpool=0 bc=544B file=dil_widgets/src/widgets/Slider
// args: t, i
// locals: r, t#1
// closure: K, e, p, G, Q
function {
  let r;
  for (const r of t) {
    let t#1;
    t#1 = K(r.value, i);
    e.beginRender(p, "mark-".concat(r.value));
    e.setAttributeStyle("style", G.mark);
    e.setAttributeString("left", ((Math.round((10000 * t#1)) / 100) + "%"));
    e.setAttributeString("translationX", Q(t#1));
    e.setAttributeString("value", String(r.label));
    e.endRender();
  }
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=569B file=dil_widgets/src/widgets/Slider
// args: e
// locals: t, i, r, o, this
function {
  this = this;
  let o;
  let r;
  let i;
  let t;
  if ((this.state.barWidth)) goto L_eb;
  if (!((this.barRef.single() == null))) goto L_a9;
  this.barRef.single();
  goto L_eb;
  t = undefined.frame.width;
  if (((undefined === t))) goto L_fa;
  if (!((t <= 0))) goto L_fd;
  return;
  i = Math.max(0, Math.min(1, (e.x / t)));
  r = this.resolvedRange;
  o = (r.min + (i * (r.max - r.min)));
  this.applySliderValue(o);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=5 cpool=0 bc=896B file=dil_widgets/src/widgets/Slider
// args: e
// locals: t, i, r, this
// closure: y, j, z, S, A
function {
  this = this;
  let r;
  let i;
  let t;
  if (!(this.isTouchInteracting)) goto L_ef;
  goto L_f0;
  // [栈深重同步 5 -> 4]
  y.observeDILControlInteraction(this.context, this.viewModel, {target: "slider", affordance: y.DILInteractionAffordance.ValueInput, value: undefined});
  t = this.resolvedRange;
  i = j(z(e, t), t, this.viewModel.step);
  if (((undefined === this.viewModel.value))) goto L_21a;
  if (!((this.viewModel.value instanceof S.DILWidgetBinding))) goto L_24c;
  this.setState({localValue: i});
  r = this.viewModel.onChange;
  if (!((undefined === r))) goto L_378;
  goto L_37f;
  // [栈深重同步 1 -> 0]
  r(i);
  return;
}

// fn F  args=1 vars=2 closure=3 cpool=0 bc=58B file=dil_widgets/src/widgets/Slider
// args: e
// locals: t
// closure: _, z, E
function {
  let t;
  t = _(e);
  if (!((e.defaultValue == null))) goto L_34;
  e.defaultValue;
  return z(E(t), t);   // tail call
}

// fn _  args=1 vars=2 closure=2 cpool=0 bc=139B file=dil_widgets/src/widgets/Slider
// args: e
// locals: t
// closure: O, I
function {
  let t;
  t = O(e.min, 0);
  return {max: Math.max(t, O(e.max, I)), min: t};
}

// fn q  args=1 vars=1 closure=1 cpool=0 bc=136B file=dil_widgets/src/widgets/Slider
// args: e
// closure: S
function {
  if (!((e instanceof S.DILWidgetBinding))) goto L_4e;
  return e.asNumber();
  if (!(("number" == typeof e))) goto L_86;
  if (!(Number.isFinite(e))) goto L_86;
  return e;
  return undefined;
}

// fn E  args=1 vars=1 closure=0 cpool=0 bc=107B file=dil_widgets/src/widgets/Slider
// args: e
function {
  return (e.min + ((e.max - e.min) / 2));
}

// fn z  args=2 vars=2 closure=2 cpool=0 bc=156B file=dil_widgets/src/widgets/Slider
// args: e, t
// closure: O, E
function {
  return Math.min(t.max, Math.max(t.min, O(e, E(t))));   // tail call
}

// fn j  args=3 vars=5 closure=2 cpool=0 bc=219B file=dil_widgets/src/widgets/Slider
// args: e, t, i
// locals: r, o
// closure: O, z
function {
  let o;
  let r;
  r = Math.max(O(i, 1), Number.EPSILON);
  o = Math.round(((e - t.min) / r));
  return z((t.min + (o * r)), t);   // tail call
}

// fn O  args=2 vars=3 closure=0 cpool=0 bc=63B file=dil_widgets/src/widgets/Slider
// args: e, t
// locals: i
function {
  let i;
  i = Number(e);
  if (!(Number.isFinite(i))) goto L_3d;
  return i;
  return t;
}

// fn K  args=2 vars=2 closure=0 cpool=0 bc=180B file=dil_widgets/src/widgets/Slider
// args: e, t
function {
  if (!((t.max <= t.min))) goto L_49;
  return 0;
  return ((e - t.min) / (t.max - t.min));
}

// fn U  args=3 vars=3 closure=0 cpool=0 bc=13B file=dil_widgets/src/widgets/Slider
// args: e, t, i
function {
  if (!((e <= i))) goto L_7;
  return 0;
  return ((e - i) * t);
}

// fn X  args=2 vars=8 closure=1 cpool=0 bc=748B file=dil_widgets/src/widgets/Slider
// args: e, t
// locals: i, r, o, n, a, s
// closure: P
function {
  let s;
  let a;
  let n;
  let o;
  let r;
  let i;
  if (!((undefined !== e.sliderStyle))) goto L_61;
  return ("stepped" === e.sliderStyle);
  if (!((e.step == null))) goto L_89;
  e.step;
  i = 1;
  r = ((t.max - t.min) / i);
  o = Math.round(r);
  n = (t.min + (o * i));
  a = ((Number.EPSILON * Math.max(Math.abs(t.min), Math.abs(t.max), Math.abs((o * i)))) * 4);
  s = (Math.abs((n - t.max)) <= a);
  if (!(Number.isFinite(i))) goto L_2eb;
  if (!((i > 0))) goto L_2eb;
  if (!(s)) goto L_2eb;
  if (!((o > 0))) goto L_2eb;
  return (o < P);
}

// fn Y  args=2 vars=4 closure=2 cpool=0 bc=306B file=dil_widgets/src/widgets/Slider
// args: e, t
// locals: i, r
// closure: O, B
function {
  let r;
  let i;
  i = Math.max(O(t, 1), Number.EPSILON);
  r = Math.max(0, Math.round(((e.max - e.min) / i)));
  if (!((0 === r))) goto L_100;
  return 0;
  return Math.min((r + 1), B);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=70B file=dil_widgets/src/widgets/Slider
// args: e, t
function {
  return (e.value - t.value);
}

// fn H  args=2 vars=6 closure=0 cpool=1 bc=571B file=dil_widgets/src/widgets/Slider
// args: e, t
// locals: i, r, o, e#1
function {
  let r;
  let i;
  if (!((undefined === e))) goto L_c;
  return;
  i = [];
  r = new Set();
  let o;
  for (const o of e) {
    let e#1;
    if (!((o == null))) goto L_36;
    o;
    goto L_57;
    e#1 = Number(undefined.value);
    if ((!Number.isFinite(e#1))) goto L_1fd;
    if (((e#1 < t.min))) goto L_1fd;
    if (((e#1 > t.max))) goto L_1fd;
    if ((r.has(e#1))) goto L_1fd;
    if (!(("string" != typeof o.label))) goto L_172;
    if ((("number" != typeof o.label))) goto L_1fd;
    r.add(e#1);
    i.push({label: o.label, value: e#1});
  }
  if (!((0 === i.length))) goto L_211;
  return undefined;
  return i.sort(function <atom:0>);
}

// fn Q  args=1 vars=1 closure=0 cpool=0 bc=24B file=dil_widgets/src/widgets/Slider
// args: e
function {
  if (!(!(e <= 0))) goto L_17;
  if (!((e >= 1))) goto L_11;
  return "-100%";
  return "-50%";
  return;
}

// fn Z  args=1 vars=1 closure=0 cpool=0 bc=103B file=dil_widgets/src/widgets/Slider
// args: e
function {
  if (!(Number.isInteger(e))) goto L_34;
  return String(e);
  return String(Number(e.toFixed(4)));
}

// fn <atom:0>  args=3 vars=58 closure=0 cpool=30 bc=3398B file=dil_widgets/src/widgets/Slider
// args: require, module, exports
// locals: e, t, i, r, o, n, a, s, l, d, u, c, h, b, v, m, p, y, g, w, S, M, f, k, R, x, A, N, I, W, P, D, C, V, L, T, B, Slider, <class_fields_init>, Slider#1, F, _, q, E, z, j, O, K, U, X, Y, H, Q, Z, G
function {
  F = function F;
  _ = function _;
  q = function q;
  E = function E;
  z = function z;
  j = function j;
  O = function O;
  K = function K;
  U = function U;
  X = function X;
  Y = function Y;
  H = function H;
  Q = function Q;
  Z = function Z;
  let G;
  let Slider#1;
  let B;
  let T;
  let L;
  let V;
  let C;
  let D;
  let P;
  let W;
  let I;
  let N;
  let A;
  let x;
  let R;
  let k;
  let f;
  let M;
  let S;
  let w;
  let g;
  let y;
  let p;
  let m;
  let v;
  let b;
  let h;
  let c;
  let u;
  let d;
  let l;
  let s;
  let a;
  let n;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Slider = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "8jfZMMgGrYKJoLPU");
  i = e.makeNodePrototype("view", undefined, "kooWPeKQRnv8nOKt");
  r = e.makeNodePrototype("label", undefined, "KYfWtMk73HdNXoU6");
  o = e.makeNodePrototype("label", undefined, "LDzARgGJwL2qUIzR");
  n = e.makeComponentPrototype(undefined, "IsTO9oyBw9gYNQ5Q");
  a = e.makeNodePrototype("view", undefined, "buiXobFBep8jDk46");
  s = e.makeNodePrototype("view", undefined, "cu6hKjqN2NqMACSp");
  l = e.makeNodePrototype("view", undefined, "T12cLXkeKcKf2YIj");
  d = e.makeNodePrototype("view", undefined, "lRI9D7PUANLiYbDb");
  u = e.makeNodePrototype("view", undefined, "IRCrpwbGZczNW6xo");
  c = e.makeNodePrototype("view", undefined, "_fiizkgkkMaDAkv0");
  h = e.makeNodePrototype("view", undefined, "TiB_kvcbzFB8Vr_H");
  b = e.makeNodePrototype("view", undefined, "_DaED1boVSXafgaM");
  v = e.makeNodePrototype("view", undefined, "0N87BhwvgayUW6Y7");
  m = e.makeNodePrototype("view", undefined, "nMfcZMZQPlq_idRj");
  p = e.makeNodePrototype("label", undefined, "Hbtk9AwVeaBR93CK");
  y = require("dil_core/src/DILInteraction");
  g = require("dil_core/src/DILComponent");
  w = require("dil_core/src/typography/DILDynamicFont");
  S = require("dil_cel/src/WidgetBinding");
  M = require("valdi_core/src/Device");
  f = require("valdi_core/src/ElementRef");
  k = require("valdi_core/src/Style");
  R = require("valdi_ui/src/components/Slider");
  x = require("valdi_ui/src/Platform");
  A = require("./DILWidgetBindingActions");
  N = 0;
  I = 100;
  W = 1;
  P = 12;
  D = 28;
  C = 4;
  V = 20;
  L = 24;
  T = 24;
  B = 12;
  let Slider;
  let <class_fields_init>;
  class Slider extends g.DILStatefulComponent { ... }
  <proto:Slider>.onViewModelUpdate = function <atom:0>;
  <proto:Slider>.onRender = function <atom:0>;
  <proto:Slider>.usesNativeSlider = function <atom:0>;
  <proto:Slider>.resolvedRange = function <atom:0>;
  <proto:Slider>.value = function <atom:0>;
  <proto:Slider>.renderLabelRow = function <atom:0>;
  <proto:Slider>.renderBar = function <atom:0>;
  <proto:Slider>.renderLegacyTrack = function <atom:0>;
  <proto:Slider>.renderReactWebTrack = function <atom:0>;
  <proto:Slider>.renderReactWebStepMarkers = function <atom:0>;
  <proto:Slider>.renderReactWebStepMarkerViews = function <atom:0>;
  <proto:Slider>.renderBarWithMarks = function <atom:0>;
  <proto:Slider>.renderMarks = function <atom:0>;
  <proto:Slider>.applyBarTouch = function <atom:0>;
  <proto:Slider>.applySliderValue = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Slider>;
  Slider = function <atom:0>;
  // close_loc <class_fields_init>
  Slider#1 = function <atom:0>;
  exports.Slider = Slider#1;
  Slider#1.dilV2Properties = ["defaultValue", "disabled", "label", "marks", "max", "min", "name", "onChange", "required", "sliderStyle", "step", "value"];
  // append([], 0, g.DIL_COMPONENT_PROPERTIES)
  [][g.DIL_COMPONENT_PROPERTIES] = "defaultValue";
  [][("defaultValue" ++)] = "disabled";
  [][("disabled" ++)] = "label";
  [][("label" ++)] = "max";
  [][("max" ++)] = "min";
  [][("min" ++)] = "name";
  [][("name" ++)] = "onChangeAction";
  [][("onChangeAction" ++)] = "required";
  [][("required" ++)] = "step";
  [][("step" ++)] = "value";
  ("value" ++);
  Slider#1.properties = [];
  G = {root: new k.Style({width: "100%", flexShrink: 1, minWidth: 0, flexDirection: "column", gap: 8}), labelRow: new k.Style({width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8}), label: new k.Style({color: "color-text-secondary", font: w.dynamicSystemFontForSize(14)}), valueLabel: new k.Style({color: "color-text-prose", font: w.dynamicSystemFontForSize(14), flexShrink: 0}), bar: new k.Style({width: "100%", height: D, justifyContent: "center", position: "relative"}), reactWebBar: new k.Style({width: "100%", height: L, justifyContent: "center", position: "relative"}), barWithMarks: new k.Style({width: "100%", flexDirection: "column", gap: 4}), track: new k.Style({width: "100%", height: 4, borderRadius: "100%", slowClipping: true, position: "relative"}), trackEmpty: new k.Style({width: "100%", height: "100%", backgroundColor: "alpha-12", position: "absolute"}), trackFilled: new k.Style({height: "100%", backgroundColor: "color-background-primary-solid", position: "absolute", left: 0}), reactWebTrack: new k.Style({width: "100%", height: L, borderRadius: "100%", backgroundColor: "color-background-primary-outline-active", slowClipping: true, position: "relative"}), reactWebStepMarkers: new k.Style({height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", position: "absolute", left: 16, right: 16}), reactWebStepMarker: new k.Style({width: 3, height: 3, borderRadius: "100%", backgroundColor: "alpha-20"}), thumb: new k.Style({width: V, height: V, borderRadius: "100%", backgroundColor: "surface", borderColor: "alpha-20", borderWidth: 1, boxShadow: "0 1 4 alpha-20", position: "absolute", left: 0, top: 4}), reactWebThumb: new k.Style({width: V, height: V, borderRadius: "100%", backgroundColor: "color-surface", borderColor: "color-border", borderWidth: 1, boxShadow: "0 1 2 rgba(0, 0, 0, 0.12)", cursor: "pointer", position: "absolute", left: 0, top: 2}), reactWebSteppedThumb: new k.Style({width: T, height: T, borderRadius: "100%", backgroundColor: "color-surface", borderColor: "color-border", borderWidth: 1, boxShadow: "0 1 2 rgba(0, 0, 0, 0.12)", cursor: "pointer", position: "absolute", left: 0, top: 0}), marks: new k.Style({width: "100%", height: 16, position: "relative"}), mark: new k.Style({color: "color-text-prose", font: w.dynamicSystemFontForSize(12), position: "absolute", top: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Slider
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
