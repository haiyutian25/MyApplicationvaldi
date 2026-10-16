// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=oai_ui/src/components/SegmentedControl
// args: e
function {
  e.Default = "default";
  e.Ghost = "ghost";
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=0 bc=404B file=oai_ui/src/components/SegmentedControl
// locals: e, t, i, o
// closure: this, b, m
function {
  let e;
  if (!((this.viewModel.options == null))) goto L_50;
  this.viewModel.options;
  e = [];
  let t;
  t = 0;
  if (!((t < e.length))) goto L_16c;
  let o;
  let i;
  i = e[t];
  o = this.optionRefs.getForKey(b(i, t));
  if (!((undefined !== o))) goto L_160;
  this.optionFrames.set(i.value, m(o.frame));
  t = <t_new>;
  (t++);
  goto L_56;
  this.syncActiveOptionFrame();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=1 bc=265B file=oai_ui/src/components/SegmentedControl
// locals: this, this.active_func, new.target, arguments
// closure: b, m, <class_fields_init>, d
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
  this.state = {value: this.viewModel.defaultValue};
  this.optionTapHandlers = new Map();
  this.optionFrames = new Map();
  this.optionLayoutHandlers = new Map();
  this.optionRefs = new d.ElementRef();
  this.handleTrackLayoutComplete = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=262B file=oai_ui/src/components/SegmentedControl
// args: e
// locals: this
function {
  this = this;
  if (!((undefined !== e))) goto L_105;
  if (!((e.value === this.viewModel.value))) goto L_dc;
  if (((e.defaultValue === this.viewModel.defaultValue))) goto L_105;
  this.syncActiveOptionFrame();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=oai_ui/src/components/SegmentedControl
// closure: this
function {
  this.renderControl();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=803B file=oai_ui/src/components/SegmentedControl
// locals: this
// closure: e, c, t
function {
  this = this;
  if (!(this.hasFormField)) goto L_2fd;
  e.beginComponent(c.FormField, t, undefined, undefined);
  e.setViewModelProperty("label", this.viewModel.label);
  e.setViewModelProperty("description", this.viewModel.description);
  e.setViewModelProperty("error", this.viewModel.error);
  e.setViewModelProperty("required", this.viewModel.required);
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
  this.renderControl();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=1 bc=1997B file=oai_ui/src/components/SegmentedControl
// locals: t, this
// closure: p, e, i, M, s
function {
  this = this;
  let t;
  if (!((this.viewModel.variant == null))) goto L_6f;
  this.viewModel.variant;
  t = p.Default;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", M.track);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  if (!((this.viewModel.accessibilityLabel == null))) goto L_211;
  this.viewModel.accessibilityLabel;
  e.setAttributeString("accessibilityLabel", this.viewModel.label);
  e.setAttribute("accessibilityStateDisabled", this.disabled);
  if (!((t === p.Ghost))) goto L_2b8;
  goto L_2fd;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", s.OAIColor.InteractiveBgControlDefault);
  if (!((t === p.Ghost))) goto L_399;
  goto L_39a;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderColor", undefined);
  if (!((t === p.Ghost))) goto L_3f2;
  goto L_3f3;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", undefined);
  if (!(this.disabled)) goto L_448;
  goto L_449;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeNumber("paddingBottom", s.OAISpacing.Quarter);
  e.setAttributeNumber("paddingLeft", s.OAISpacing.Quarter);
  e.setAttributeNumber("paddingRight", s.OAISpacing.Quarter);
  e.setAttributeNumber("paddingTop", s.OAISpacing.Quarter);
  e.setAttributeNumber("borderRadius", s.OAIRadius.Lg);
  e.setAttributeFunction("onLayoutComplete", this.handleTrackLayoutComplete);
  if (!((true === this.viewModel.block))) goto L_74e;
  goto L_74f;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", undefined);
  this.renderSelectionIndicator(t);
  this.renderOptions(t);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=7 cpool=0 bc=535B file=oai_ui/src/components/SegmentedControl
// args: t
// locals: this
// closure: e, h, o, u, y, s, S
function {
  this = this;
  e.beginComponent(h.SlidingSelectionIndicator, o, undefined, undefined);
  e.setViewModelProperty("animation", u.resolveOAISelectionIndicatorAnimation());
  e.setViewModelProperty("backgroundColor", y(true, t, false));
  e.setViewModelProperty("borderRadius", s.OAIRadius.Md);
  e.setViewModelProperty("boxShadow", S(t));
  e.setViewModelProperty("frame", this.state.activeOptionFrame);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=156B file=oai_ui/src/components/SegmentedControl
// args: e
// locals: t, i, this
function {
  this = this;
  let t;
  if (!((this.viewModel.options == null))) goto L_50;
  this.viewModel.options;
  t = [];
  let i;
  i = 0;
  if (!((i < t.length))) goto L_9b;
  this.renderOption(t[i], i, e);
  i = <i_new>;
  (i++);
  goto L_56;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=10 cpool=1 bc=2379B file=oai_ui/src/components/SegmentedControl
// args: t, i, o
// locals: a, d, l, this
// closure: s, e, r, b, M, y, f, O, n, w
function {
  this = this;
  let l;
  let d;
  let a;
  a = (t.value === this.selectedValue);
  if ((this.disabled)) goto L_9c;
  d = (true === t.disabled);
  l = s.resolveOAITextStyle(s.OAITextSize.LabelLarge);
  e.beginRender(r, b(t, i));
  e.setAttributeRef(this.optionRefs);
  e.setAttributeStyle("style", M.option);
  e.setAttributeString("accessibilityLabel", t.label);
  e.setAttribute("accessibilityStateDisabled", d);
  e.setAttribute("accessibilityStateSelected", a);
  e.setAttributeString("backgroundColor", y(a, o, (undefined !== this.state.activeOptionFrame)));
  e.setAttributeNumber("borderRadius", s.OAIRadius.Md);
  if (!((true === this.viewModel.block))) goto L_3e1;
  goto L_3e2;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("flexBasis", undefined);
  if (!((true === this.viewModel.block))) goto L_45a;
  goto L_45b;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("flexGrow", undefined);
  e.setAttributeNumber("minHeight", f(this.viewModel.size));
  e.setAttributeFunction("onLayout", this.optionLayoutHandler(t.value));
  if (!(d)) goto L_578;
  goto L_5bf;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", this.optionTapHandler(t.value));
  if (!(d)) goto L_61a;
  if (!(!this.disabled)) goto L_61a;
  goto L_61b;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeNumber("paddingLeft", O(this.viewModel.size));
  e.setAttributeNumber("paddingRight", O(this.viewModel.size));
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", M.optionLabel);
  e.setAttributeString("color", w(a, o));
  e.setAttributeString("font", l.font);
  e.setAttributeNumber("height", l.lineHeight);
  e.setAttributeNumber("lineHeight", l.lineHeight);
  e.setAttributeString("value", t.label);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=oai_ui/src/components/SegmentedControl
// closure: this, e
function {
  return this.handleOptionPress(e);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=177B file=oai_ui/src/components/SegmentedControl
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.optionTapHandlers.get(e);
  if (!((undefined === t))) goto L_ac;
  t = function <atom:0>;
  function <atom:0>;
  this.optionTapHandlers.set(e, t);
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=oai_ui/src/components/SegmentedControl
// args: t
// closure: this, e
function {
  return this.handleOptionLayout(e, t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=177B file=oai_ui/src/components/SegmentedControl
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.optionLayoutHandlers.get(e);
  if (!((undefined === t))) goto L_ac;
  t = function <atom:0>;
  function <atom:0>;
  this.optionLayoutHandlers.set(e, t);
  return t;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=155B file=oai_ui/src/components/SegmentedControl
// args: e, t
// locals: this
// closure: m
function {
  this = this;
  this.optionFrames.set(e, m(t));
  if (!((e === this.selectedValue))) goto L_9a;
  this.syncActiveOptionFrame();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=463B file=oai_ui/src/components/SegmentedControl
// args: e
// locals: t, this
// closure: v
function {
  this = this;
  let t;
  t = v(this.viewModel.options, e);
  if (((undefined === t))) goto L_1ce;
  if (((true === t.disabled))) goto L_1ce;
  if ((this.disabled)) goto L_1ce;
  if (((e === this.selectedValue))) goto L_1ce;
  if (!((undefined === this.viewModel.value))) goto L_17a;
  null;
  this.nextActiveFrameState(e);
  this.setState({value: e});
  if (!((this.viewModel.onChange == null))) goto L_1c7;
  this.viewModel.onChange;
  this.viewModel;
  goto L_1ce;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=144B file=oai_ui/src/components/SegmentedControl
// args: e
// locals: t, this
// closure: g
function {
  this = this;
  let t;
  t = this.optionFrames.get(e);
  if (!((undefined !== t))) goto L_8f;
  if (!(!g(this.state, e, t))) goto L_8f;
  return {activeOptionFrame: t, activeOptionFrameValue: e};
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=286B file=oai_ui/src/components/SegmentedControl
// locals: e, t, this
// closure: g
function {
  this = this;
  let t;
  let e;
  e = this.selectedValue;
  if (!((undefined === e))) goto L_66;
  this.setState({activeOptionFrame: undefined, activeOptionFrameValue: undefined});
  return;
  t = this.optionFrames.get(e);
  if (((undefined === t))) goto L_11d;
  if ((g(this.state, e, t))) goto L_11d;
  this.setState({activeOptionFrame: t, activeOptionFrameValue: e});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=221B file=oai_ui/src/components/SegmentedControl
// locals: this
function {
  this = this;
  if (((undefined !== this.viewModel.label))) goto L_dc;
  if (((undefined !== this.viewModel.description))) goto L_dc;
  return (undefined !== this.viewModel.error);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=142B file=oai_ui/src/components/SegmentedControl
// locals: this
function {
  this = this;
  if (!((this.viewModel.value == null))) goto L_8d;
  this.viewModel.value;
  return this.state.value;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=oai_ui/src/components/SegmentedControl
// locals: this
function {
  this = this;
  return (true === this.viewModel.disabled);
}

// fn v  args=2 vars=3 closure=0 cpool=0 bc=77B file=oai_ui/src/components/SegmentedControl
// args: e, t
// locals: i
function {
  if (!((undefined !== e))) goto L_4c;
  let i;
  i = 0;
  if (!((i < e.length))) goto L_4c;
  if (!((e[i].value === t))) goto L_42;
  return e[i];
  i = <i_new>;
  (i++);
  goto L_a;
  return;
}

// fn b  args=2 vars=2 closure=0 cpool=0 bc=158B file=oai_ui/src/components/SegmentedControl
// args: e, t
function {
  if (!((e.value.length > 0))) goto L_73;
  return "value:".concat(e.value);
  return "index:".concat(t);
}

// fn m  args=1 vars=1 closure=0 cpool=0 bc=158B file=oai_ui/src/components/SegmentedControl
// args: e
function {
  return {height: e.height, width: e.width, x: e.x, y: e.y};
}

// fn g  args=3 vars=3 closure=1 cpool=0 bc=78B file=oai_ui/src/components/SegmentedControl
// args: e, t, i
// closure: A
function {
  if (!((e.activeOptionFrameValue === t))) goto L_4d;
  return A(e.activeOptionFrame, i);
}

// fn A  args=2 vars=2 closure=0 cpool=0 bc=311B file=oai_ui/src/components/SegmentedControl
// args: e, t
function {
  if (((undefined === e))) goto L_a;
  if (!((undefined === t))) goto L_10;
  return (e === t);
  if (!((e.x === t.x))) goto L_136;
  if (!((e.y === t.y))) goto L_136;
  if (!((e.width === t.width))) goto L_136;
  return (e.height === t.height);
}

// fn y  args=3 vars=3 closure=2 cpool=0 bc=194B file=oai_ui/src/components/SegmentedControl
// args: e, t, i
// closure: p, s
function {
  if (!(e)) goto L_c1;
  if (!((true !== i))) goto L_c1;
  if (!((t === p.Ghost))) goto L_7b;
  return s.OAIColor.BgSecondary;
  return s.OAIColor.BgPrimary;
  return;
}

// fn S  args=1 vars=1 closure=1 cpool=0 bc=45B file=oai_ui/src/components/SegmentedControl
// args: e
// closure: p
function {
  if (!((e !== p.Ghost))) goto L_2c;
  return "0 1 4 rgba(0, 0, 0, 0.12)";
  return;
}

// fn w  args=2 vars=2 closure=2 cpool=0 bc=251B file=oai_ui/src/components/SegmentedControl
// args: e, t
// closure: s, p
function {
  if (!(e)) goto L_49;
  return s.OAIColor.TextPrimary;
  if (!((t === p.Ghost))) goto L_b5;
  return s.OAIColor.TextTertiary;
  return s.OAIColor.TextSecondary;
}

// fn O  args=1 vars=1 closure=1 cpool=0 bc=356B file=oai_ui/src/components/SegmentedControl
// args: e
// closure: s
function {
  if (!((e === s.OAIControlSize.Sm))) goto L_8f;
  return s.OAISpacing.One;
  if (!((e === s.OAIControlSize.Lg))) goto L_11e;
  return s.OAISpacing.Two;
  return s.OAISpacing.OneAndHalf;
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=155B file=oai_ui/src/components/SegmentedControl
// args: e
// closure: s
function {
  if (!((e === s.OAIControlSize.Sm))) goto L_4c;
  return 28;
  if (!((e === s.OAIControlSize.Lg))) goto L_98;
  return 40;
  return 32;
}

// fn <atom:0>  args=3 vars=31 closure=0 cpool=27 bc=1041B file=oai_ui/src/components/SegmentedControl
// args: require, module, exports
// locals: e, t, i, o, r, n, s, a, d, l, u, c, h, p, SegmentedControl, <class_fields_init>, SegmentedControl#1, v, b, m, g, A, y, S, w, O, f, M
function {
  v = function v;
  b = function b;
  m = function m;
  g = function g;
  A = function A;
  y = function y;
  S = function S;
  w = function w;
  O = function O;
  f = function f;
  let M;
  let SegmentedControl#1;
  let h;
  let c;
  let u;
  let l;
  let d;
  let a;
  let s;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SegmentedControlVariant = undefined;
  exports.SegmentedControl = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "USwAPQ2MJ2s6OHXQ");
  i = e.makeNodePrototype("view", undefined, "WyUYb5qSecscbgJm");
  o = e.makeComponentPrototype(undefined, "1W3dLHbwLgaXawOY");
  r = e.makeNodePrototype("view", ["accessibilityCategory", "radio"], "KAX2tK9VVh11jCpz");
  n = e.makeNodePrototype("label", ["numberOfLines", 1], "iZdckOhmoeaadtSO");
  s = require("oai_core/src/OAITokens");
  a = require("valdi_core/src/Component");
  d = require("valdi_core/src/ElementRef");
  l = require("valdi_core/src/Style");
  u = require("../animation/OAIControlAnimations");
  c = require("./FormField");
  h = require("./SlidingSelectionIndicator");
  if ((p)) goto L_22c;
  p = {};
  exports.SegmentedControlVariant = {};
  !function <atom:0>({});
  let SegmentedControl;
  let <class_fields_init>;
  class SegmentedControl extends a.StatefulComponent { ... }
  <proto:SegmentedControl>.onViewModelUpdate = function <atom:0>;
  <proto:SegmentedControl>.onRender = function <atom:0>;
  <proto:SegmentedControl>.renderControl = function <atom:0>;
  <proto:SegmentedControl>.renderSelectionIndicator = function <atom:0>;
  <proto:SegmentedControl>.renderOptions = function <atom:0>;
  <proto:SegmentedControl>.renderOption = function <atom:0>;
  <proto:SegmentedControl>.optionTapHandler = function <atom:0>;
  <proto:SegmentedControl>.optionLayoutHandler = function <atom:0>;
  <proto:SegmentedControl>.handleOptionLayout = function <atom:0>;
  <proto:SegmentedControl>.handleOptionPress = function <atom:0>;
  <proto:SegmentedControl>.nextActiveFrameState = function <atom:0>;
  <proto:SegmentedControl>.syncActiveOptionFrame = function <atom:0>;
  <proto:SegmentedControl>.hasFormField = function <atom:0>;
  <proto:SegmentedControl>.selectedValue = function <atom:0>;
  <proto:SegmentedControl>.disabled = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SegmentedControl>;
  SegmentedControl = function <atom:0>;
  // close_loc <class_fields_init>
  SegmentedControl#1 = function <atom:0>;
  exports.SegmentedControl = SegmentedControl#1;
  M = {track: new l.Style({alignItems: "center", flexDirection: "row", gap: s.OAISpacing.Quarter, justifyContent: "flex-start"}), option: new l.Style({alignItems: "center", flexDirection: "row", justifyContent: "center", zIndex: 1}), optionLabel: new l.Style({flexShrink: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/SegmentedControl
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
