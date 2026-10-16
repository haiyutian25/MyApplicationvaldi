// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=dil_widgets/src/widgets/RadioGroup
// closure: this, e
function {
  return this.applyRadioSelection(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=137B file=dil_widgets/src/widgets/RadioGroup
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

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=89B file=dil_widgets/src/widgets/RadioGroup
// closure: this, d
function {
  this.setStateAnimated({selectionFillOpacity: 1, selectionInnerDotScale: 1}, d.DIL_CONTROL_SELECTION_ENTER_ANIMATION);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=127B file=dil_widgets/src/widgets/RadioGroup
// locals: this, this.active_func, new.target, arguments
// closure: d, <class_fields_init>, b
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
  this.state = b(this.viewModel);
  this.handleRadioSelection = function <atom:0>;
  this.runSelectionEnterAnimation = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=248B file=dil_widgets/src/widgets/RadioGroup
// args: e
// locals: t, i, this
// closure: v
function {
  this = this;
  let i;
  let t;
  if (!((undefined === e))) goto L_e;
  return;
  t = v(e.value, e.defaultValue, this.state.selectedValue);
  i = this.selectedValue;
  if (!((t !== i))) goto L_f7;
  if (!((undefined !== i))) goto L_f7;
  this.startSelectionEnterAnimation(i);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=418B file=dil_widgets/src/widgets/RadioGroup
// locals: i, o, this
// closure: e, t, y
function {
  this = this;
  let o;
  let i;
  i = this.autoSpacingAttributes;
  o = ("col" === this.viewModel.direction);
  if (!(o)) goto L_a8;
  goto L_1a1;
  // [栈深重同步 1 -> 0]
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", y.scroll);
  e.setAttributes(i);
  this.renderGroup({}, o);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=0 bc=961B file=dil_widgets/src/widgets/RadioGroup
// args: t, o
// locals: this
// closure: u, e, i, y
function {
  this = this;
  u.DIL_THEME_ATTRIBUTES.apply(this.viewModel, t);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", y.group);
  e.setAttributes(t);
  if (!((this.viewModel.label == null))) goto L_21d;
  this.viewModel.label;
  if (!((this.viewModel.ariaLabel == null))) goto L_21d;
  this.viewModel.ariaLabel;
  if (!((this.viewModel.name == null))) goto L_21d;
  this.viewModel.name;
  e.setAttributeString("accessibilityLabel", "Options");
  e.setAttribute("accessibilityStateDisabled", this.viewModel.disabled);
  if (!(o)) goto L_2c4;
  goto L_2c9;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("alignItems", "flex-start");
  if (!(o)) goto L_300;
  goto L_305;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("flexDirection", "row");
  if (!(o)) goto L_339;
  goto L_33a;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("rowGap", undefined);
  if (!(o)) goto L_36d;
  goto L_36f;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("columnGap", 20);
  this.renderContent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=681B file=dil_widgets/src/widgets/RadioGroup
// locals: e, this
// closure: p
function {
  this = this;
  let e;
  if (!((undefined !== this.viewModel.options))) goto L_73;
  this.renderOptions();
  return;
  e = this.viewModel.renderChildren;
  if (!((undefined !== e))) goto L_2a8;
  p.withDILRadioGroupRenderState({animatedSelectedValue: this.state.animatedSelectedValue, disabled: (true === this.viewModel.disabled), onSelect: this.handleRadioSelection, required: (true === this.viewModel.required), selectedValue: this.selectedValue, selectionFillOpacity: this.state.selectionFillOpacity, selectionInnerDotScale: this.state.selectionInnerDotScale}, e);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=155B file=dil_widgets/src/widgets/RadioGroup
// locals: e, t, this
function {
  this = this;
  let e;
  if (!((this.viewModel.options == null))) goto L_50;
  this.viewModel.options;
  e = [];
  let t;
  t = 0;
  if (!((t < e.length))) goto L_9a;
  this.renderOption(e[t], t);
  t = <t_new>;
  (t++);
  goto L_56;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=dil_widgets/src/widgets/RadioGroup
// closure: this, t
function {
  return this.handleRadioSelection(t);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=1 bc=1086B file=dil_widgets/src/widgets/RadioGroup
// args: t, i
// locals: l, n, this
// closure: e, h, o, s
function {
  this = this;
  let n;
  let l;
  if (((true === this.viewModel.disabled))) goto L_77;
  l = (true === t.disabled);
  n = (t.value === this.selectedValue);
  if ((t.value)) goto L_159;
  e.beginComponent(h.Radio, o, "option-".concat(i), undefined);
  e.setViewModelProperty("disabled", l);
  e.setViewModelProperty("label", t.label);
  if (!(l)) goto L_20e;
  goto L_235;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onSelect", s.createReusableCallback(function <atom:0>));
  e.setViewModelProperty("required", this.viewModel.required);
  e.setViewModelProperty("selected", n);
  e.setViewModelProperty("selectionFillOpacity", this.selectionFillOpacity(t.value, n));
  e.setViewModelProperty("selectionInnerDotScale", this.selectionInnerDotScale(t.value, n));
  e.setViewModelProperty("value", t.value);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=207B file=dil_widgets/src/widgets/RadioGroup
// locals: this
// closure: v
function {
  this = this;
  return v(this.viewModel.value, this.viewModel.defaultValue, this.state.selectedValue);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=727B file=dil_widgets/src/widgets/RadioGroup
// args: e
// locals: t, i, this
// closure: l, c, w
function {
  this = this;
  let i;
  let t;
  t = e.value;
  if (!((t === this.selectedValue))) goto L_54;
  return;
  l.observeDILControlInteraction(this.context, this.viewModel, {target: "radio_group", affordance: l.DILInteractionAffordance.Option, value: t});
  if (!(this.isUncontrolled)) goto L_1a9;
  this.setState({animatedSelectedValue: t, selectionFillOpacity: 0, selectionInnerDotScale: 0, selectedValue: t});
  this.scheduleSelectionEnterAnimation();
  i = this.viewModel.onChange;
  if (!((undefined === i))) goto L_2cf;
  goto L_2d6;
  // [栈深重同步 1 -> 0]
  i(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=181B file=dil_widgets/src/widgets/RadioGroup
// locals: this
// closure: a
function {
  this = this;
  if (!(!(this.viewModel.value instanceof a.DILWidgetBinding))) goto L_b4;
  return (undefined === this.viewModel.value);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=97B file=dil_widgets/src/widgets/RadioGroup
// args: e
// locals: this
function {
  this = this;
  this.setState({animatedSelectedValue: e, selectionFillOpacity: 0, selectionInnerDotScale: 0});
  this.scheduleSelectionEnterAnimation();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=dil_widgets/src/widgets/RadioGroup
// locals: this
function {
  this = this;
  this.setTimeoutDisposable(this.runSelectionEnterAnimation, 0);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=151B file=dil_widgets/src/widgets/RadioGroup
// args: e, t
// locals: this
function {
  this = this;
  if (!(t)) goto L_95;
  if (!((this.state.animatedSelectedValue === e))) goto L_93;
  return this.state.selectionFillOpacity;
  return 1;
  return 0;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=151B file=dil_widgets/src/widgets/RadioGroup
// args: e, t
// locals: this
function {
  this = this;
  if (!(t)) goto L_95;
  if (!((this.state.animatedSelectedValue === e))) goto L_93;
  return this.state.selectionInnerDotScale;
  return 1;
  return 0;
}

// fn v  args=3 vars=3 closure=1 cpool=0 bc=92B file=dil_widgets/src/widgets/RadioGroup
// args: e, t, i
// closure: a
function {
  if (!((e instanceof a.DILWidgetBinding))) goto L_4e;
  return e.asString();
  if (!((e == null))) goto L_5b;
  e;
  if (!((i == null))) goto L_5b;
  i;
  return t;
}

// fn S  args=1 vars=1 closure=1 cpool=0 bc=160B file=dil_widgets/src/widgets/RadioGroup
// args: e
// closure: v
function {
  if (!((v(e.value, e.defaultValue, undefined) == null))) goto L_9f;
  v(e.value, e.defaultValue, undefined);
  if (!((e.options == null))) goto L_75;
  e.options;
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?>[0] == null))) goto L_7e;
  <?>[0];
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.value;
}

// fn b  args=1 vars=2 closure=1 cpool=0 bc=37B file=dil_widgets/src/widgets/RadioGroup
// args: e
// locals: t
// closure: S
function {
  let t;
  t = S(e);
  return {animatedSelectedValue: t, selectionFillOpacity: 1, selectionInnerDotScale: 1, selectedValue: t};
}

// fn w  args=1 vars=2 closure=0 cpool=0 bc=230B file=dil_widgets/src/widgets/RadioGroup
// args: e
// locals: t
function {
  let t;
  t = {value: e.value};
  if (!((undefined !== e.label))) goto L_83;
  t.label = e.label;
  e.label;
  if (!((undefined !== e.disabled))) goto L_db;
  t.disabled = e.disabled;
  e.disabled;
  return {option: t};
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=18 bc=928B file=dil_widgets/src/widgets/RadioGroup
// args: require, module, exports
// locals: e, t, i, o, l, n, r, s, a, d, c, u, h, p, RadioGroup, <class_fields_init>, RadioGroup#1, v, S, b, w, y
function {
  v = function v;
  S = function S;
  b = function b;
  w = function w;
  let y;
  let RadioGroup#1;
  let p;
  let h;
  let u;
  let c;
  let d;
  let a;
  let s;
  let r;
  let n;
  let l;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RadioGroup = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("scroll", undefined, "G6jPQq50jCLHwRu_");
  i = e.makeNodePrototype("view", undefined, "kn-AcpD32MpfiWTB");
  o = e.makeComponentPrototype(undefined, "B9UffJ1QUTVD4W2R");
  l = require("dil_core/src/DILInteraction");
  n = require("dil_core/src/DILComponent");
  r = require("valdi_core/src/Style");
  s = require("valdi_core/src/utils/Callback");
  a = require("dil_cel/src/WidgetBinding");
  d = require("../animation/DILControlAnimations");
  c = require("./DILWidgetBindingActions");
  u = require("./attributes/DILThemeAttributes");
  h = require("./Radio");
  p = require("./RadioGroupRenderState");
  let RadioGroup;
  let <class_fields_init>;
  class RadioGroup extends n.DILStatefulComponent { ... }
  <proto:RadioGroup>.onViewModelUpdate = function <atom:0>;
  <proto:RadioGroup>.onRender = function <atom:0>;
  <proto:RadioGroup>.renderGroup = function <atom:0>;
  <proto:RadioGroup>.renderContent = function <atom:0>;
  <proto:RadioGroup>.renderOptions = function <atom:0>;
  <proto:RadioGroup>.renderOption = function <atom:0>;
  <proto:RadioGroup>.selectedValue = function <atom:0>;
  <proto:RadioGroup>.applyRadioSelection = function <atom:0>;
  <proto:RadioGroup>.isUncontrolled = function <atom:0>;
  <proto:RadioGroup>.startSelectionEnterAnimation = function <atom:0>;
  <proto:RadioGroup>.scheduleSelectionEnterAnimation = function <atom:0>;
  <proto:RadioGroup>.selectionFillOpacity = function <atom:0>;
  <proto:RadioGroup>.selectionInnerDotScale = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:RadioGroup>;
  RadioGroup = function <atom:0>;
  // close_loc <class_fields_init>
  RadioGroup#1 = function <atom:0>;
  exports.RadioGroup = RadioGroup#1;
  RadioGroup#1.useRenderChildrenProperty = true;
  RadioGroup#1.dilV2Properties = ["defaultValue", "direction", "disabled", "label", "name", "onChange", "options", "required", "value"];
  // append([], 0, n.DIL_COMPONENT_PROPERTIES)
  [][n.DIL_COMPONENT_PROPERTIES] = "ariaLabel";
  [][("ariaLabel" ++)] = "defaultValue";
  [][("defaultValue" ++)] = "direction";
  [][("direction" ++)] = "disabled";
  [][("disabled" ++)] = "label";
  [][("label" ++)] = "name";
  [][("name" ++)] = "onChangeAction";
  [][("onChangeAction" ++)] = "options";
  [][("options" ++)] = "required";
  [][("required" ++)] = "value";
  ("value" ++);
  RadioGroup#1.properties = [];
  y = {scroll: new r.Style({horizontal: true, maxWidth: "100%", flexShrink: 0, showsHorizontalScrollIndicator: false}), group: new r.Style({accessibilityCategory: "radiogroup", flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/RadioGroup
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
