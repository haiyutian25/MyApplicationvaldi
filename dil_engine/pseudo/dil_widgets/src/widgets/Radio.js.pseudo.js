// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=82B file=dil_widgets/src/widgets/Radio
// closure: this
function {
  if (!((this.viewModel.onSelect == null))) goto L_4e;
  this.viewModel.onSelect;
  this.viewModel;
  goto L_51;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=dil_widgets/src/widgets/Radio
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
  this.handleRadioTap = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=1081B file=dil_widgets/src/widgets/Radio
// closure: e, o, h, this, n, d, r, l
function {
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", h.radio);
  e.setAttributeString("accessibilityLabel", this.viewModel.label);
  e.setAttribute("accessibilityStateDisabled", n);
  e.setAttribute("accessibilityStateSelected", d);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", h.selectionFill);
  if (!(d)) goto L_243;
  if (!((this.viewModel.selectionFillOpacity == null))) goto L_244;
  this.viewModel.selectionFillOpacity;
  goto L_244;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0);
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", h.innerDot);
  if (!(d)) goto L_33e;
  if (!((this.viewModel.selectionInnerDotScale == null))) goto L_33f;
  this.viewModel.selectionInnerDotScale;
  goto L_33f;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("scaleX", 0);
  if (!(d)) goto L_3bc;
  if (!((this.viewModel.selectionInnerDotScale == null))) goto L_3bd;
  this.viewModel.selectionInnerDotScale;
  goto L_3bd;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("scaleY", 0);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=7 closure=10 cpool=2 bc=1497B file=dil_widgets/src/widgets/Radio
// locals: n, d, a, b, u, v, this
// closure: e, o, h, r, l, s, t, c, i, y
function {
  this = this;
  let v;
  let u;
  let b;
  let a;
  let d;
  let n;
  n = (true === this.viewModel.disabled);
  d = (true === this.viewModel.selected);
  a = this.viewModel.labelTypography;
  if (!((a == null))) goto L_f5;
  a;
  goto L_116;
  if (!((undefined.lineHeight == null))) goto L_11d;
  undefined.lineHeight;
  b = 20;
  if (!((a == null))) goto L_129;
  a;
  goto L_14a;
  if (!((undefined.fontSize == null))) goto L_151;
  undefined.fontSize;
  u = 14;
  if (!((undefined === a))) goto L_185;
  goto L_21a;
  // [栈深重同步 1 -> 0]
  v = s.dynamicSystemFontForTextStyle(u, a.dynamicTextStyle, s.DILSystemFontWeight.Normal, false);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", h.option);
  e.setAttributeNumber("minHeight", b);
  if (!(n)) goto L_2fb;
  goto L_2fc;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 1);
  if (!(n)) goto L_331;
  goto L_354;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", this.handleRadioTap);
  e.beginComponent(c.ChoiceControlSlot, i, undefined, undefined);
  e.setViewModelProperty("font", v);
  e.setViewModelProperty("fontSize", u);
  if (((undefined !== this.viewModel.renderChildren))) goto L_4d1;
  if (!((this.viewModel.label == null))) goto L_4c8;
  this.viewModel.label;
  goto L_4c9;
  if (!((undefined.length == null))) goto L_4cf;
  undefined.length;
  e.setViewModelProperty("hasLabel", (0 > 0));
  e.setViewModelProperty("lineHeight", b);
  e.setViewModelProperty("size", y);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  this.renderLabel(v);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=0 bc=944B file=dil_widgets/src/widgets/Radio
// args: t
// locals: i, i#1, this
// closure: e, n, h, d
function {
  this = this;
  let i;
  i = this.viewModel.renderChildren;
  if (!((undefined !== i))) goto L_fe;
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", h.richLabel);
  i();
  e.endRender();
  return;
  if (!((undefined !== this.viewModel.label))) goto L_3af;
  let i#1;
  i#1 = this.viewModel.labelTypography;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", h.label);
  e.setAttributeString("font", t);
  if (!((undefined === i#1))) goto L_271;
  goto L_2ba;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("lineHeightMultiple", (i#1.lineHeight / i#1.fontSize));
  if (!((i#1 == null))) goto L_2f2;
  i#1;
  goto L_313;
  e.setAttributeNumber("minHeight", undefined.lineHeight);
  e.setAttributeString("value", this.viewModel.label);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=3 bc=1211B file=dil_widgets/src/widgets/Radio
// args: require, module, exports
// locals: e, t, i, o, r, l, n, d, s, a, b, c, y, u, Radio, <class_fields_init>, Radio#1, h
function {
  let h;
  let Radio#1;
  let u;
  let y;
  let c;
  let b;
  let a;
  let s;
  let d;
  let n;
  let l;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Radio = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "uvNEGPRQo5Wdeukz");
  i = e.makeComponentPrototype(undefined, "IMHAMn419BKFsnKU");
  o = e.makeNodePrototype("view", undefined, "T-3TXrnZ4K2_i-BP");
  r = e.makeNodePrototype("view", undefined, "f7KeHWHKjXKhZ7P0");
  l = e.makeNodePrototype("view", undefined, "waCJ57jd8CJDCJqx");
  n = e.makeNodePrototype("layout", undefined, "8W3UbIgzh3IITdBb");
  d = e.makeNodePrototype("label", undefined, "cIE0NfLzfzG_fG5v");
  s = require("dil_core/src/typography/DILDynamicFont");
  a = require("valdi_core/src/Component");
  b = require("valdi_core/src/Style");
  c = require("./ChoiceControlSlot");
  y = 20;
  u = 6;
  let Radio;
  let <class_fields_init>;
  class Radio extends a.Component { ... }
  <proto:Radio>.onRender = function <atom:0>;
  <proto:Radio>.renderLabel = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Radio>;
  Radio = function <atom:0>;
  // close_loc <class_fields_init>
  Radio#1 = function <atom:0>;
  exports.Radio = Radio#1;
  Radio#1.useRenderChildrenProperty = true;
  Radio#1.dilV2Properties = ["disabled", "id", "required", "value"];
  h = {option: new b.Style({accessibilityNavigation: "control", flexDirection: "row", alignItems: "flex-start", gap: 10, paddingLeft: 2}), radio: new b.Style({accessibilityCategory: "radio", position: "relative", alignItems: "center", justifyContent: "center", width: y, height: y, borderRadius: 10, borderWidth: 1, borderColor: "color-border-primary-outline", flexShrink: 0}), selectionFill: new b.Style({backgroundColor: "color-background-primary-solid", alignItems: "center", justifyContent: "center", width: y, height: y, borderRadius: 10}), innerDot: new b.Style({width: 6, height: 6, borderRadius: 3, backgroundColor: "color-text-primary-solid"}), label: new b.Style({color: "color-text-prose", flexShrink: 1, numberOfLines: 0}), richLabel: new b.Style({flexShrink: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Radio
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
