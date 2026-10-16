// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=86B file=dil_widgets/src/widgets/DILSelectMenu
// args: e, t
// closure: S, this
function {
  if (!(S(e))) goto L_2e;
  goto L_55;
  // [栈深重同步 1 -> 0]
  this.renderOption(e, t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=273B file=dil_widgets/src/widgets/DILSelectMenu
// locals: this
// closure: S, e, t, g
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", g.menu);
  this.viewModel.options.forEach(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=82B file=dil_widgets/src/widgets/DILSelectMenu
// args: e, t
// closure: this, i
function {
  return this.renderOption(e, "".concat(i, "-", t));   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=1 bc=395B file=dil_widgets/src/widgets/DILSelectMenu
// args: t, i
// locals: this
// closure: e, DILSelectMenuGroupHeading, o
function {
  this = this;
  e.beginComponent(DILSelectMenuGroupHeading, o, "group-".concat(i), undefined);
  e.setViewModelProperty("label", t.label);
  e.setViewModelProperty("optionIndicatorPosition", this.viewModel.optionIndicatorPosition);
  e.endComponent();
  t.options.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=548B file=dil_widgets/src/widgets/DILSelectMenu
// args: t, o
// locals: this
// closure: e, DILSelectMenuOption, i
function {
  this = this;
  e.beginComponent(DILSelectMenuOption, i, "option-".concat(o), undefined);
  e.setViewModelProperty("onSelect", this.viewModel.onSelect);
  e.setViewModelProperty("option", t);
  e.setViewModelProperty("optionIndicatorPosition", this.viewModel.optionIndicatorPosition);
  e.setViewModelProperty("selected", (t.value === this.viewModel.selectedValue));
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/DILSelectMenu
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

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=604B file=dil_widgets/src/widgets/DILSelectMenu
// locals: this
// closure: e, n, g, b, r
function {
  this = this;
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", g.groupHeading);
  if (!(("start" === this.viewModel.optionIndicatorPosition))) goto L_ce;
  b();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", g.groupHeadingLabel);
  e.setAttributeString("value", this.viewModel.label);
  e.endRender();
  if (!(("end" === this.viewModel.optionIndicatorPosition))) goto L_233;
  b();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/DILSelectMenu
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

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=122B file=dil_widgets/src/widgets/DILSelectMenu
// args: e
// closure: this
function {
  if (!((e !== this.state.hovered))) goto L_79;
  this.setState({hovered: e});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=175B file=dil_widgets/src/widgets/DILSelectMenu
// closure: this
function {
  this.viewModel.onSelect(this.viewModel.option.value);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=2 bc=97B file=dil_widgets/src/widgets/DILSelectMenu
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
  this.state = {hovered: false};
  this.handleHover = function <atom:0>;
  this.handleTap = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=1 bc=1839B file=dil_widgets/src/widgets/DILSelectMenu
// locals: t, o, i, this
// closure: e, d, g, h, s, p
function {
  this = this;
  let i;
  let o;
  let t;
  t = (true === this.viewModel.option.disabled);
  o = this.viewModel.selected;
  if ((o)) goto L_101;
  i = this.state.hovered;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", g.option);
  e.setAttributeString("accessibilityLabel", this.viewModel.option.label);
  e.setAttribute("accessibilityStateDisabled", t);
  e.setAttribute("accessibilityStateSelected", o);
  if (!(i)) goto L_2a5;
  goto L_2aa;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", "transparent");
  if (!(h.Device.isWeb())) goto L_334;
  if (!(t)) goto L_32d;
  goto L_335;
  // [栈深重同步 4 -> 3]
  goto L_335;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("cursor", undefined);
  if (!(h.Device.isWeb())) goto L_3d6;
  if (!(!t)) goto L_3d6;
  goto L_3d7;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onHover", undefined);
  if (!(t)) goto L_40c;
  goto L_42e;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", this.handleTap);
  if (!(t)) goto L_464;
  goto L_465;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 1);
  if (!(("start" === this.viewModel.optionIndicatorPosition))) goto L_4db;
  this.renderIndicator();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", g.optionLabel);
  if (!(o)) goto L_5b0;
  goto L_5d7;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("font", p.dynamicSystemFontForSize(14));
  e.setAttributeString("value", this.viewModel.option.label);
  e.endRender();
  if (!(("end" === this.viewModel.optionIndicatorPosition))) goto L_706;
  this.renderIndicator();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=606B file=dil_widgets/src/widgets/DILSelectMenu
// locals: this
// closure: e, l, g, a, y
function {
  this = this;
  e.beginRender(l, undefined);
  if (!(("end" === this.viewModel.optionIndicatorPosition))) goto L_c8;
  goto L_ec;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", g.indicator);
  if (!(this.viewModel.selected)) goto L_235;
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", g.checkmark);
  e.setAttribute("src", y.resolveIconAsset("check"));
  e.endRender();
  e.endRender();
  return;
}

// fn b  args=0 vars=0 closure=3 cpool=0 bc=165B file=dil_widgets/src/widgets/DILSelectMenu
// closure: e, c, g
function {
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", g.indicator);
  e.endRender();
  return;
}

// fn S  args=1 vars=1 closure=0 cpool=0 bc=8B file=dil_widgets/src/widgets/DILSelectMenu
// args: e
function {
  return ("options" in e);
}

// fn <atom:0>  args=3 vars=31 closure=0 cpool=11 bc=1678B file=dil_widgets/src/widgets/DILSelectMenu
// args: require, module, exports
// locals: e, t, o, i, n, r, d, s, l, a, c, p, u, h, v, y, DILSelectMenu, <class_fields_init>, DILSelectMenu#1, DILSelectMenuGroupHeading, <class_fields_init>#1, DILSelectMenuGroupHeading#1, DILSelectMenuOption, <class_fields_init>#2, DILSelectMenuOption#1, b, S, g
function {
  b = function b;
  S = function S;
  let g;
  let DILSelectMenuOption#1;
  let DILSelectMenuGroupHeading#1;
  let DILSelectMenu#1;
  let y;
  let v;
  let h;
  let u;
  let p;
  let c;
  let a;
  let l;
  let s;
  let d;
  let r;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSelectMenu = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "gFPTjwEKmsOspbGO");
  o = e.makeComponentPrototype(undefined, "u-LjTcNCxLh_8wD8");
  i = e.makeComponentPrototype(undefined, "qAHaLCLo1TWwWiIp");
  n = e.makeNodePrototype("view", undefined, "kjyHGfqkSqnivUdp");
  r = e.makeNodePrototype("label", undefined, "Y8QJVOuyWQo8qqe5");
  d = e.makeNodePrototype("view", ["accessibilityCategory", "radio"], "lXSEueZz6RreUeRn");
  s = e.makeNodePrototype("label", undefined, "n8559RtHoCSAqsE2");
  l = e.makeNodePrototype("view", undefined, "k2jw_960G9yI8j-S");
  a = e.makeNodePrototype("image", ["tint", "color-text-prose"], "3CspubI2RwuLKfZt");
  c = e.makeNodePrototype("view", undefined, "tEDJc2huII0YboI7");
  p = require("dil_core/src/typography/DILDynamicFont");
  u = require("valdi_core/src/Component");
  h = require("valdi_core/src/Device");
  v = require("valdi_core/src/Style");
  y = require("./Icon");
  let DILSelectMenu;
  let <class_fields_init>;
  class DILSelectMenu extends u.Component { ... }
  <proto:DILSelectMenu>.onRender = function <atom:0>;
  <proto:DILSelectMenu>.renderGroup = function <atom:0>;
  <proto:DILSelectMenu>.renderOption = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSelectMenu>;
  DILSelectMenu = function <atom:0>;
  // close_loc <class_fields_init>
  DILSelectMenu#1 = function <atom:0>;
  exports.DILSelectMenu = DILSelectMenu#1;
  let DILSelectMenuGroupHeading;
  let <class_fields_init>#1;
  class DILSelectMenuGroupHeading extends u.Component { ... }
  <proto:DILSelectMenuGroupHeading>.onRender = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILSelectMenuGroupHeading>;
  DILSelectMenuGroupHeading = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILSelectMenuGroupHeading#1 = function <atom:0>;
  let DILSelectMenuOption;
  let <class_fields_init>#2;
  class DILSelectMenuOption extends u.StatefulComponent { ... }
  <proto:DILSelectMenuOption>.onRender = function <atom:0>;
  <proto:DILSelectMenuOption>.renderIndicator = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:DILSelectMenuOption>;
  DILSelectMenuOption = function <atom:0>;
  // close_loc <class_fields_init>#2
  DILSelectMenuOption#1 = function <atom:0>;
  g = {checkmark: new v.Style({height: 16, objectFit: "contain", width: 16}), endIndicator: new v.Style({flexShrink: 0, height: 16, marginLeft: "auto", width: 16}), groupHeading: new v.Style({alignItems: "center", flexDirection: "row", gap: 4, minHeight: 32, paddingBottom: 6, paddingLeft: 8, paddingRight: 8, paddingTop: 6}), groupHeadingLabel: new v.Style({color: "color-text-secondary", flexShrink: 1, font: p.dynamicSemiboldSystemFontForSize(12)}), indicator: new v.Style({flexShrink: 0, height: 16, width: 16}), menu: new v.Style({flexDirection: "column", flexShrink: 0, maxHeight: 400, padding: 6}), option: new v.Style({alignItems: "center", borderRadius: 6, flexDirection: "row", flexShrink: 0, gap: 4, minHeight: 32, paddingBottom: 6, paddingLeft: 8, paddingRight: 8, paddingTop: 6}), optionLabel: new v.Style({color: "color-text-prose", flexShrink: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/DILSelectMenu
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
