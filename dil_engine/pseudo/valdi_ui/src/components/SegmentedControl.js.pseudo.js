// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=valdi_ui/src/components/SegmentedControl
// args: t
// closure: e
function {
  return (t.value === e);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=400B file=valdi_ui/src/components/SegmentedControl
// args: e
// locals: t
// closure: this
function {
  let t;
  t = this.viewModel.options.find(function <atom:0>);
  if (!((undefined !== t))) goto L_18f;
  if (!((true !== t.disabled))) goto L_18f;
  if (!((true !== this.viewModel.disabled))) goto L_18f;
  if (!((e !== this.viewModel.value))) goto L_18f;
  this.viewModel.onChange(e, t);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=139B file=valdi_ui/src/components/SegmentedControl
// locals: this, this.active_func, new.target, arguments
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
  this.state = {};
  this.frames = new Map();
  this.layoutHandlers = new Map();
  this.tapHandlers = new Map();
  this.handleNativeSelection = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=valdi_ui/src/components/SegmentedControl
// args: e
function {
  return e.value;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=103B file=valdi_ui/src/components/SegmentedControl
// args: e
// closure: this
function {
  return (e.value === this.viewModel.value);
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=2 bc=1070B file=valdi_ui/src/components/SegmentedControl
// args: e
// locals: t, i, e#1, t#1, this
function {
  this = this;
  let i;
  let t;
  if (((undefined === e))) goto L_36;
  if (!(this.usesNativeControl())) goto L_39;
  return;
  t = (e.options !== this.viewModel.options);
  i = (e.value !== this.viewModel.value);
  if ((t)) goto L_113;
  if (!(i)) goto L_42d;
  if (!(t)) goto L_264;
  let e#1;
  e#1 = new Set(this.viewModel.options.map(function <atom:0>));
  let t#1;
  for (const t#1 of this.frames.keys()) {
    if ((e#1.has(t#1))) goto L_25d;
    this.frames.delete(t#1);
  }
  if (!((undefined !== this.viewModel.value))) goto L_406;
  if (!(this.viewModel.options.some(function <atom:0>))) goto L_406;
  if (!(i)) goto L_42d;
  if (!(!this.frames.has(this.viewModel.value))) goto L_3dc;
  this.clearIndicator();
  return;
  this.updateIndicator(true);
  return;
  this.clearIndicator();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=85B file=valdi_ui/src/components/SegmentedControl
// closure: this, d, o
function {
  this.renderIndicator(d);
  this.renderOptions(o, d);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=10 cpool=2 bc=4860B file=valdi_ui/src/components/SegmentedControl
// locals: o, d, this
// closure: e, t, w, M, n, y, c, v, i, h
function {
  this = this;
  let d;
  let o;
  if (!(this.usesNativeControl())) goto L_90b;
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttributeString("backgroundColor", this.viewModel.backgroundColor);
  e.setAttributeString("borderColor", this.viewModel.borderColor);
  e.setAttribute("borderRadius", this.viewModel.borderRadius);
  e.setAttribute("borderWidth", this.viewModel.borderWidth);
  if (!((true === this.viewModel.block))) goto L_372;
  goto L_373;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("flexGrow", undefined);
  if (!((this.viewModel.options.length > 2))) goto L_4c6;
  if (!((this.viewModel.style == null))) goto L_437;
  this.viewModel.style;
  goto L_479;
  if (!((undefined === undefined.attributes.minWidth))) goto L_4c6;
  goto L_4c7;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("minWidth", undefined);
  if (!((true === this.viewModel.disabled))) goto L_53f;
  goto L_561;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onSelectionChange", this.handleNativeSelection);
  e.setAttributeNumber("opacity", this.viewModel.opacity);
  e.setAttribute("options", this.viewModel.options);
  e.setAttributeString("selectedValue", this.viewModel.value);
  e.setAttribute("selectionEnabled", (true !== this.viewModel.disabled));
  if (!((undefined === this.viewModel.style))) goto L_7bf;
  goto L_86e;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", n.Style.cachingMerge(M.nativeControl, this.viewModel.style));
  e.setAttribute("width", this.viewModel.width);
  e.endRender();
  return;
  o = y(c.resolveValdiUITheme());
  if (!((undefined === this.viewModel.indicatorStyle))) goto L_9a3;
  goto L_a52;
  // [栈深重同步 1 -> 0]
  d = n.Style.cachingMerge(o.indicator, this.viewModel.indicatorStyle);
  e.beginComponent(v.MaterialSurface, i, undefined, undefined);
  e.setViewModelProperty("accessibilityId", this.viewModel.accessibilityId);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setViewModelProperty("accessibilityStateDisabled", this.viewModel.disabled);
  e.setViewModelProperty("backgroundColor", this.viewModel.backgroundColor);
  e.setViewModelProperty("borderColor", this.viewModel.borderColor);
  e.setViewModelProperty("borderRadius", this.viewModel.borderRadius);
  e.setViewModelProperty("borderWidth", this.viewModel.borderWidth);
  if (!((this.viewModel.material == null))) goto L_e6a;
  this.viewModel.material;
  e.setViewModelProperty("material", h.ControlMaterial.Standard);
  if (!((this.viewModel.opacity == null))) goto L_f2c;
  this.viewModel.opacity;
  if (!((true === this.viewModel.disabled))) goto L_f2b;
  goto L_f2c;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("opacity", undefined);
  e.setViewModelProperty("paddingBottom", this.viewModel.padding);
  e.setViewModelProperty("paddingLeft", this.viewModel.padding);
  e.setViewModelProperty("paddingRight", this.viewModel.padding);
  e.setViewModelProperty("paddingTop", this.viewModel.padding);
  if (!((undefined === this.viewModel.style))) goto L_1187;
  goto L_1236;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("style", n.Style.cachingMerge(o.track, this.viewModel.style));
  e.setViewModelProperty("width", this.viewModel.width);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=834B file=valdi_ui/src/components/SegmentedControl
// locals: e, this
// closure: b
function {
  this = this;
  let e;
  e = this.viewModel;
  if (!(b.supportsNativeIOSSegmentedControls())) goto L_341;
  if (!((undefined === e.animation))) goto L_341;
  if (!((undefined === e.disabledOptionOpacity))) goto L_341;
  if (!((undefined === e.indicatorBackgroundColor))) goto L_341;
  if (!((undefined === e.indicatorBorderRadius))) goto L_341;
  if (!((undefined === e.indicatorBoxShadow))) goto L_341;
  if (!((undefined === e.indicatorStyle))) goto L_341;
  if (!((undefined === e.labelColor))) goto L_341;
  if (!((undefined === e.labelFont))) goto L_341;
  if (!((undefined === e.labelLineHeight))) goto L_341;
  if (!((undefined === e.labelStyle))) goto L_341;
  if (!((undefined === e.minOptionHeight))) goto L_341;
  if (!((undefined === e.optionHorizontalPadding))) goto L_341;
  if (!((undefined === e.optionStyle))) goto L_341;
  if (!((undefined === e.padding))) goto L_341;
  if (!((undefined === e.selectedLabelColor))) goto L_341;
  if (!((undefined === e.selectedLabelStyle))) goto L_341;
  return (undefined === e.selectedOptionBackgroundColor);
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=2693B file=valdi_ui/src/components/SegmentedControl
// args: t
// locals: this
// closure: h, e, v, o, d
function {
  this = this;
  if (!((undefined !== this.state.indicatorX))) goto L_a84;
  if (!((undefined !== this.state.indicatorY))) goto L_a84;
  if (!((undefined !== this.state.indicatorWidth))) goto L_a84;
  if (!((undefined !== this.state.indicatorHeight))) goto L_a84;
  if (!((this.viewModel.material === h.ControlMaterial.Glass))) goto L_668;
  e.beginComponent(v.MaterialSurface, o, undefined, undefined);
  e.setViewModelProperty("accessibilityId", this.childID("indicator"));
  e.setViewModelProperty("backgroundColor", this.viewModel.indicatorBackgroundColor);
  e.setViewModelProperty("borderRadius", this.viewModel.indicatorBorderRadius);
  e.setViewModelProperty("boxShadow", this.viewModel.indicatorBoxShadow);
  e.setViewModelProperty("height", this.state.indicatorHeight);
  e.setViewModelProperty("left", this.state.indicatorX);
  e.setViewModelProperty("material", h.ControlMaterial.Glass);
  e.setViewModelProperty("style", t);
  e.setViewModelProperty("top", this.state.indicatorY);
  e.setViewModelProperty("touchEnabled", false);
  e.setViewModelProperty("width", this.state.indicatorWidth);
  e.endComponent();
  return;
  e.beginRender(d, "selection-indicator");
  e.setAttributeString("accessibilityId", this.childID("indicator"));
  e.setAttributeString("backgroundColor", this.viewModel.indicatorBackgroundColor);
  e.setAttribute("borderRadius", this.viewModel.indicatorBorderRadius);
  e.setAttributeString("boxShadow", this.viewModel.indicatorBoxShadow);
  e.setAttributeNumber("height", this.state.indicatorHeight);
  e.setAttributeNumber("left", this.state.indicatorX);
  e.setAttributeStyle("style", t);
  e.setAttributeNumber("top", this.state.indicatorY);
  e.setAttribute("touchEnabled", false);
  e.setAttributeNumber("width", this.state.indicatorWidth);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=13 closure=5 cpool=1 bc=4105B file=valdi_ui/src/components/SegmentedControl
// args: t, i
// locals: o, d, l, a, h, c, n, o#1, h#1, v, this
// closure: M, n, e, r, s
function {
  this = this;
  let c;
  let h;
  let a;
  let l;
  let d;
  let o;
  o = this.viewModel.minOptionHeight;
  if (((undefined === o))) goto L_69;
  if (!((o >= 44))) goto L_6e;
  goto L_76;
  // [栈深重同步 1 -> 0]
  d = ((44 - o) / 2);
  if (!((undefined === this.viewModel.optionStyle))) goto L_e6;
  goto L_196;
  // [栈深重同步 1 -> 0]
  l = n.Style.cachingMerge(M.option, this.viewModel.optionStyle);
  if (!((undefined === this.viewModel.labelStyle))) goto L_204;
  goto L_2b2;
  // [栈深重同步 1 -> 0]
  a = n.Style.cachingMerge(t.label, this.viewModel.labelStyle);
  if (!((this.viewModel.selectedLabelStyle == null))) goto L_340;
  this.viewModel.selectedLabelStyle;
  h = this.viewModel.labelStyle;
  if (!((undefined === h))) goto L_36d;
  goto L_3da;
  // [栈深重同步 1 -> 0]
  c = n.Style.cachingMerge(t.selectedLabel, h);
  let n;
  for (const n of this.viewModel.options) {
    let v;
    let h#1;
    let o#1;
    o#1 = (n.value === this.viewModel.value);
    if (!(o#1)) goto L_4ea;
    h#1 = (undefined === this.state.indicatorX);
    if (((true === this.viewModel.disabled))) goto L_55e;
    v = (true === n.disabled);
    e.beginRender(r, n.value);
    e.setAttributeString("accessibilityId", this.childID(n.value));
    e.setAttributeString("accessibilityLabel", n.label);
    e.setAttribute("accessibilityStateDisabled", v);
    e.setAttribute("accessibilityStateSelected", o#1);
    if (!(h#1)) goto L_7b7;
    if (!((this.viewModel.selectedOptionBackgroundColor == null))) goto L_7b8;
    this.viewModel.selectedOptionBackgroundColor;
    goto L_7b8;
    // [栈深重同步 7 -> 6]
    e.setAttributeString("backgroundColor", undefined);
    if (!(h#1)) goto L_87b;
    if (!((this.viewModel.indicatorBorderRadius == null))) goto L_87c;
    this.viewModel.indicatorBorderRadius;
    goto L_87c;
    // [栈深重同步 7 -> 6]
    e.setAttribute("borderRadius", undefined);
    if (!((true === this.viewModel.block))) goto L_8f5;
    goto L_8f6;
    // [栈深重同步 7 -> 6]
    e.setAttributeNumber("flexBasis", undefined);
    if (!((true === this.viewModel.block))) goto L_96f;
    goto L_970;
    // [栈深重同步 7 -> 6]
    e.setAttributeNumber("flexGrow", undefined);
    e.setAttributeNumber("minHeight", this.viewModel.minOptionHeight);
    e.setAttributeFunction("onLayout", this.layoutHandler(n.value));
    if (!(v)) goto L_a8d;
    goto L_ad7;
    // [栈深重同步 7 -> 6]
    e.setAttributeFunction("onTap", this.tapHandler(n.value));
    if (!(v)) goto L_ba2;
    if (!((true !== this.viewModel.disabled))) goto L_ba2;
    if (!((this.viewModel.disabledOptionOpacity == null))) goto L_ba3;
    this.viewModel.disabledOptionOpacity;
    goto L_ba3;
    // [栈深重同步 7 -> 6]
    e.setAttributeNumber("opacity", undefined);
    e.setAttributeNumber("paddingLeft", this.viewModel.optionHorizontalPadding);
    e.setAttributeNumber("paddingRight", this.viewModel.optionHorizontalPadding);
    e.setAttributeStyle("style", l);
    e.setAttributeNumber("touchAreaExtension", d);
    e.beginRender(s, undefined);
    if (!(o#1)) goto L_d89;
    goto L_dcd;
    // [栈深重同步 7 -> 6]
    e.setAttributeString("color", this.viewModel.labelColor);
    e.setAttributeString("font", this.viewModel.labelFont);
    e.setAttributeNumber("height", this.viewModel.labelLineHeight);
    e.setAttributeNumber("lineHeight", this.viewModel.labelLineHeight);
    if (!(o#1)) goto L_f57;
    goto L_f5a;
    // [栈深重同步 7 -> 6]
    e.setAttributeStyle("style", a);
    e.setAttributeString("value", n.label);
    e.endRender();
    e.endRender();
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=186B file=valdi_ui/src/components/SegmentedControl
// args: t
// closure: this, e
function {
  this.frames.set(e, t);
  if (!((e === this.viewModel.value))) goto L_b9;
  this.updateIndicator(false);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=177B file=valdi_ui/src/components/SegmentedControl
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.layoutHandlers.get(e);
  if (!((undefined === t))) goto L_ac;
  t = function <atom:0>;
  function <atom:0>;
  this.layoutHandlers.set(e, t);
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=valdi_ui/src/components/SegmentedControl
// args: t
// closure: e
function {
  return (t.value === e);
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=392B file=valdi_ui/src/components/SegmentedControl
// locals: t
// closure: e, this
function {
  let t;
  t = this.viewModel.options.find(function <atom:0>);
  if (!((undefined !== t))) goto L_187;
  if (!((true !== t.disabled))) goto L_187;
  if (!((true !== this.viewModel.disabled))) goto L_187;
  if (!((e !== this.viewModel.value))) goto L_187;
  this.viewModel.onChange(e, t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=177B file=valdi_ui/src/components/SegmentedControl
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.tapHandlers.get(e);
  if (!((undefined === t))) goto L_ac;
  t = function <atom:0>;
  function <atom:0>;
  this.tapHandlers.set(e, t);
  return t;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=931B file=valdi_ui/src/components/SegmentedControl
// args: e
// locals: t, i, o, this
// closure: u
function {
  this = this;
  let o;
  let i;
  let t;
  t = this.viewModel.value;
  if (!((undefined === t))) goto L_57;
  return;
  i = this.frames.get(t);
  if (((undefined === i))) goto L_259;
  if (!((i.x === this.state.indicatorX))) goto L_25c;
  if (!((i.y === this.state.indicatorY))) goto L_25c;
  if (!((i.width === this.state.indicatorWidth))) goto L_25c;
  if (!((i.height === this.state.indicatorHeight))) goto L_25c;
  return;
  o = {indicatorHeight: i.height, indicatorWidth: i.width, indicatorX: i.x, indicatorY: i.y};
  if (!(e)) goto L_37a;
  if (!((this.viewModel.animation == null))) goto L_375;
  this.viewModel.animation;
  goto L_3a2;
  // [栈深重同步 1 -> 0]
  this.setState(o);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=138B file=valdi_ui/src/components/SegmentedControl
// locals: this
function {
  this = this;
  if (!((undefined !== this.state.indicatorX))) goto L_89;
  this.setState({indicatorHeight: undefined, indicatorWidth: undefined, indicatorX: undefined, indicatorY: undefined});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=186B file=valdi_ui/src/components/SegmentedControl
// args: e
// locals: this
function {
  this = this;
  if (!((undefined === this.viewModel.accessibilityId))) goto L_4b;
  return undefined;
  return "".concat(this.viewModel.accessibilityId, ".", e);
}

// fn y  args=1 vars=2 closure=2 cpool=0 bc=1022B file=valdi_ui/src/components/SegmentedControl
// args: e
// locals: t
// closure: p, n
function {
  let t;
  t = p.get(e);
  if (((undefined !== t))) goto L_3f9;
  t = {indicator: new n.Style({backgroundColor: e.colors.surface, borderRadius: e.shape.pillRadius, bottom: 3, position: "absolute", top: 3}), label: new n.Style({color: e.colors.mutedText, flexShrink: 0, font: e.typography.label}), selectedLabel: new n.Style({color: e.colors.text, flexShrink: 0, font: e.typography.label}), track: new n.Style({alignItems: "center", backgroundColor: e.colors.mutedSurface, borderRadius: e.shape.pillRadius, flexDirection: "row", minHeight: e.metrics.controlHeight, overflow: "visible", padding: 3, position: "relative"})};
  {indicator: new n.Style({backgroundColor: e.colors.surface, borderRadius: e.shape.pillRadius, bottom: 3, position: "absolute", top: 3}), label: new n.Style({color: e.colors.mutedText, flexShrink: 0, font: e.typography.label}), selectedLabel: new n.Style({color: e.colors.text, flexShrink: 0, font: e.typography.label}), track: new n.Style({alignItems: "center", backgroundColor: e.colors.mutedSurface, borderRadius: e.shape.pillRadius, flexDirection: "row", minHeight: e.metrics.controlHeight, overflow: "visible", padding: 3, position: "relative"})};
  p.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=13 bc=998B file=valdi_ui/src/components/SegmentedControl
// args: require, module, exports
// locals: e, t, i, o, d, r, s, l, a, n, h, c, v, b, u, w, SegmentedControl, <class_fields_init>, SegmentedControl#1, M, p, y
function {
  y = function y;
  let p;
  let M;
  let SegmentedControl#1;
  let w;
  let u;
  let b;
  let v;
  let c;
  let h;
  let n;
  let a;
  let l;
  let s;
  let r;
  let d;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SegmentedControl = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["iosClass", "ValdiNativeSegmentedControl"], "Eto5UZRbKQ7TB9p7");
  i = e.makeComponentPrototype(undefined, "sYC2s8vCK0ez4bsN");
  o = e.makeComponentPrototype(undefined, "ZYkV1pDm-mcJoBPp");
  d = e.makeNodePrototype("view", undefined, "4KlVNIar56DB1cIq");
  r = e.makeNodePrototype("view", ["accessibilityCategory", "radio"], "17HfZDY_KAxzlWP3");
  s = e.makeNodePrototype("label", ["numberOfLines", 1], "S8Mynw4l8mhzSQMD");
  l = require("valdi_core/src/AnimationOptions");
  a = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  h = require("../ControlMaterial");
  c = require("valdi_ui_theme/src/ValdiUITheme");
  v = require("./MaterialSurface");
  b = require("../Platform");
  u = {beginFromCurrentState: true, curve: l.AnimationCurve.EaseInOut, duration: 0.24};
  w = 56;
  let SegmentedControl;
  let <class_fields_init>;
  class SegmentedControl extends a.StatefulComponent { ... }
  <proto:SegmentedControl>.onViewModelUpdate = function <atom:0>;
  <proto:SegmentedControl>.onRender = function <atom:0>;
  <proto:SegmentedControl>.usesNativeControl = function <atom:0>;
  <proto:SegmentedControl>.renderIndicator = function <atom:0>;
  <proto:SegmentedControl>.renderOptions = function <atom:0>;
  <proto:SegmentedControl>.layoutHandler = function <atom:0>;
  <proto:SegmentedControl>.tapHandler = function <atom:0>;
  <proto:SegmentedControl>.updateIndicator = function <atom:0>;
  <proto:SegmentedControl>.clearIndicator = function <atom:0>;
  <proto:SegmentedControl>.childID = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SegmentedControl>;
  SegmentedControl = function <atom:0>;
  // close_loc <class_fields_init>
  SegmentedControl#1 = function <atom:0>;
  exports.SegmentedControl = SegmentedControl#1;
  M = {nativeControl: new n.Style({accessibilityNavigation: "cover", minHeight: 44, minWidth: 112}), option: new n.Style({alignItems: "center", flexGrow: 1, justifyContent: "center", minHeight: 44, minWidth: w, paddingLeft: 14, paddingRight: 14})};
  p = new WeakMap();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/SegmentedControl
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
