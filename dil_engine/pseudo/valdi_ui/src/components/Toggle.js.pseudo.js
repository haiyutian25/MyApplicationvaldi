// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=381B file=valdi_ui/src/components/Toggle
// locals: e, t
// closure: this, a
function {
  let e;
  e = this.viewModel.checked;
  if (!(a.isNativeIOS())) goto L_130;
  let t;
  t = this.nativeSwitch.single();
  if (!((t == null))) goto L_ca;
  t;
  goto L_f7;
  undefined.setAttribute("on", !e);
  if (!((t == null))) goto L_103;
  t;
  goto L_12f;
  undefined.setAttribute("on", e);
  this.viewModel.onChange(!e);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=219B file=valdi_ui/src/components/Toggle
// locals: this, this.active_func, new.target, arguments
// closure: a, <class_fields_init>, n
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
  this.nativeSwitch = new n.ElementRef();
  this.thumb = new n.ElementRef();
  this.track = new n.ElementRef();
  this.toggle = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=597B file=valdi_ui/src/components/Toggle
// locals: e
// closure: this, t, i, A
function {
  let e;
  if (!((this.track.single() == null))) goto L_52;
  this.track.single();
  goto L_10c;
  if (!(t)) goto L_c4;
  goto L_109;
  // [栈深重同步 4 -> 3]
  undefined.setAttribute("backgroundColor", i.colors.border);
  e = this.thumb.single();
  if (!((e == null))) goto L_160;
  e;
  goto L_21a;
  if (!(t)) goto L_1d2;
  goto L_217;
  // [栈深重同步 4 -> 3]
  undefined.setAttribute("backgroundColor", i.colors.surface);
  if (!((e == null))) goto L_226;
  e;
  goto L_254;
  undefined.setAttribute("left", A(t));
  return;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=1 bc=313B file=valdi_ui/src/components/Toggle
// args: e
// locals: t, i, this
// closure: A, a, d, b
function {
  this = this;
  let i;
  let t;
  if (((undefined === e))) goto L_a1;
  if (((e.checked === this.viewModel.checked))) goto L_a1;
  if (!(a.isNativeIOS())) goto L_a4;
  return;
  t = this.viewModel.checked;
  i = d.resolveValdiUITheme();
  this.animate(b, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=9 cpool=3 bc=2817B file=valdi_ui/src/components/Toggle
// locals: s, c, this
// closure: d, a, e, t, m, i, o, r, A
function {
  this = this;
  let c;
  let s;
  s = d.resolveValdiUITheme();
  c = (true === this.viewModel.disabled);
  if (!(a.isNativeIOS())) goto L_42d;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", m.nativeTarget);
  e.beginRender(i, undefined);
  e.setAttributeRef(this.nativeSwitch);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttribute("enabled", !c);
  e.setAttribute("on", this.viewModel.checked);
  if (!(c)) goto L_344;
  goto L_366;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onChange", this.toggle);
  e.setAttributeString("onTintColor", s.colors.accent);
  e.endRender();
  e.endRender();
  return;
  e.beginRender(o, undefined);
  e.setAttributeRef(this.track);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttribute("accessibilityStateDisabled", c);
  e.setAttribute("accessibilityStateSelected", this.viewModel.checked);
  if (!(this.viewModel.checked)) goto L_695;
  goto L_697;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityValue", "0");
  if (!(this.viewModel.checked)) goto L_750;
  goto L_795;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", s.colors.border);
  if (!(c)) goto L_7ca;
  goto L_7ec;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", this.toggle);
  if (!(c)) goto L_822;
  goto L_823;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeStyle("style", m.track);
  e.beginRender(r, undefined);
  e.setAttributeRef(this.thumb);
  if (!(this.viewModel.checked)) goto L_9a3;
  goto L_9e8;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", s.colors.surface);
  e.setAttributeNumber("left", A(this.viewModel.checked));
  e.setAttributeStyle("style", m.thumb);
  e.endRender();
  e.endRender();
  return;
}

// fn A  args=1 vars=1 closure=0 cpool=0 bc=8B file=valdi_ui/src/components/Toggle
// args: e
function {
  if (!(e)) goto L_6;
  return 23;
  return 3;
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=5 bc=883B file=valdi_ui/src/components/Toggle
// args: require, module, exports
// locals: e, t, i, o, r, s, c, n, l, d, a, b, u, h, v, g, Toggle, <class_fields_init>, Toggle#1, A, m
function {
  A = function A;
  let m;
  let Toggle#1;
  let g;
  let v;
  let h;
  let u;
  let b;
  let a;
  let d;
  let l;
  let n;
  let c;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Toggle = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "YM3ptEfjBfxcppQi");
  i = e.makeNodePrototype("switch", ["touchAreaExtension", 8], "geZ3nTSCvTDFpRLt");
  o = e.makeNodePrototype("view", ["accessibilityCategory", "checkbox"], "jCPAbXlEm0ckmNVQ");
  r = e.makeNodePrototype("view", undefined, "LRO26CnCMbUmoebz");
  s = require("valdi_core/src/AnimationOptions");
  c = require("valdi_core/src/Component");
  n = require("valdi_core/src/ElementRef");
  l = require("valdi_core/src/Style");
  d = require("valdi_ui_theme/src/ValdiUITheme");
  a = require("../Platform");
  b = {beginFromCurrentState: true, curve: s.AnimationCurve.EaseInOut, duration: 0.18};
  u = 30;
  h = 50;
  v = 3;
  g = 24;
  let Toggle;
  let <class_fields_init>;
  class Toggle extends c.Component { ... }
  <proto:Toggle>.onViewModelUpdate = function <atom:0>;
  <proto:Toggle>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Toggle>;
  Toggle = function <atom:0>;
  // close_loc <class_fields_init>
  Toggle#1 = function <atom:0>;
  exports.Toggle = Toggle#1;
  m = {nativeTarget: new l.Style({alignItems: "center", justifyContent: "center", minHeight: 44}), thumb: new l.Style({borderRadius: 12, height: g, position: "absolute", top: 3, width: g}), track: new l.Style({borderRadius: 15, height: u, position: "relative", width: h})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/Toggle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
