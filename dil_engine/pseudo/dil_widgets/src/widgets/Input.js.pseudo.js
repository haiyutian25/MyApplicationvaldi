// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=dil_widgets/src/widgets/Input
// args: e
function {
  e.Default = "default";
  e.Fill = "fill";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/Input
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=247B file=dil_widgets/src/widgets/Input
// closure: r, this
function {
  r.runDILControlInteraction(this.context, this.viewModel, {target: "input", affordance: r.DILInteractionAffordance.ValueInput}, function <atom:0>);
  this.setState({isFocused: true});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=61B file=dil_widgets/src/widgets/Input
// closure: this
function {
  this.numberDraft = undefined;
  this.setState({isFocused: false});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=824B file=dil_widgets/src/widgets/Input
// args: e
// locals: t, i
// closure: this, c
function {
  let i;
  let t;
  if (!(this.state.isFocused)) goto L_e8;
  if (!(("number" === this.viewModel.inputType))) goto L_e8;
  t = (undefined !== this.viewModel.value);
  if (!(t)) goto L_115;
  goto L_116;
  // [栈深重同步 2 -> 1]
  this.numberDraft = undefined;
  if (!((undefined === this.viewModel.value))) goto L_199;
  this.uncontrolledValue = e.text;
  goto L_1c7;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_1c7;
  this.scheduleRender();
  i = this.viewModel.onChange;
  if (!((undefined === i))) goto L_311;
  goto L_337;
  // [栈深重同步 1 -> 0]
  i(e.text);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=3 bc=111B file=dil_widgets/src/widgets/Input
// locals: this, this.active_func, new.target, arguments
// closure: r, c, <class_fields_init>
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
  this.state = {isFocused: false};
  this.handleEditBegin = function <atom:0>;
  this.handleEditEnd = function <atom:0>;
  this.handleChange = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=242B file=dil_widgets/src/widgets/Input
// locals: this
function {
  this = this;
  if (!(("number" === this.viewModel.inputType))) goto L_e1;
  if (!((true !== this.viewModel.disabled))) goto L_e1;
  if (((undefined !== this.viewModel.value))) goto L_f1;
  this.numberDraft = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=11 closure=11 cpool=1 bc=2800B file=dil_widgets/src/widgets/Input
// locals: r, n, l, u, c, h, v, f, I, m, this
// closure: a, b, p, e, t, S, i, g, d, o, s
function {
  this = this;
  let m;
  let I;
  let f;
  let v;
  let h;
  let c;
  let u;
  let l;
  let n;
  let r;
  if (!((this.viewModel.size == null))) goto L_6f;
  this.viewModel.size;
  r = "xl";
  n = a.resolveDILControlHeight(r, "xl");
  l = a.resolveDILTextInputMetrics(r);
  u = b(this.viewModel.fontSize, n, l.fontSize);
  c = (true === this.viewModel.disabled);
  if (!((this.viewModel.variant == null))) goto L_1cc;
  this.viewModel.variant;
  h = "outline";
  if (!(this.state.isFocused)) goto L_227;
  if (!(!c)) goto L_227;
  v = ("plain" !== h);
  if (!((this.viewModel.pill == null))) goto L_274;
  this.viewModel.pill;
  f = true;
  if (!(("plain" === h))) goto L_284;
  goto L_2b4;
  // [栈深重同步 1 -> 0]
  if (!(f)) goto L_290;
  goto L_2b4;
  // [栈深重同步 1 -> 0]
  I = l.borderRadius;
  if (!(("plain" === h))) goto L_2c5;
  goto L_35e;
  // [栈深重同步 1 -> 0]
  if (!(f)) goto L_35c;
  goto L_35d;
  // [栈深重同步 2 -> 1]
  m = (a.resolveDILTextInputGutter(this.viewModel.gutterSize, l.gutter) * 1);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", S.wrapper);
  e.setAttributes(this.autoSpacingAttributes);
  if (!(("soft" === h))) goto L_463;
  goto L_464;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", undefined);
  if (!(("outline" === h))) goto L_4af;
  if (!(v)) goto L_4a8;
  goto L_4b0;
  // [栈深重同步 4 -> 3]
  goto L_4b0;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderColor", undefined);
  if (!(("outline" === h))) goto L_4eb;
  goto L_4ec;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", undefined);
  e.setAttribute("borderRadius", I);
  e.setAttributeNumber("height", n);
  e.setAttributeNumber("minHeight", n);
  if (!(c)) goto L_5b2;
  goto L_5b3;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeNumber("paddingLeft", m);
  e.setAttributeNumber("paddingRight", m);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", S.input);
  e.setAttributeString("contentType", g(this.viewModel.inputType));
  e.setAttribute("enabled", !c);
  e.setAttributeString("font", d.dynamicSystemFontForSize(u));
  e.setAttributeFunction("onChange", this.handleChange);
  e.setAttributeFunction("onEditBegin", this.handleEditBegin);
  e.setAttributeFunction("onEditEnd", this.handleEditEnd);
  e.setAttributeString("placeholder", this.viewModel.placeholder);
  e.setAttribute("selectTextOnFocus", this.viewModel.autoSelect);
  e.setAttributeString("value", this.value);
  e.endRender();
  if (!(v)) goto L_ac7;
  if (!(("soft" === h))) goto L_ac7;
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", s.DIL_TEXT_INPUT_SOFT_FOCUS_BORDER_STYLE);
  e.setAttribute("borderRadius", I);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=343B file=dil_widgets/src/widgets/Input
// locals: e, this
// closure: u
function {
  this = this;
  let e;
  if (!((undefined !== this.numberDraft))) goto L_4e;
  return this.numberDraft;
  e = this.viewModel.value;
  if (!((e instanceof u.DILWidgetBinding))) goto L_e4;
  return e.asString();
  if (!((e == null))) goto L_156;
  e;
  if (!((this.uncontrolledValue == null))) goto L_156;
  this.uncontrolledValue;
  return this.viewModel.defaultValue;
}

// fn b  args=3 vars=3 closure=2 cpool=0 bc=58B file=dil_widgets/src/widgets/Input
// args: e, t, i
// closure: h, v
function {
  if (!((e === h.Fill))) goto L_2c;
  return (t * v);
  if (!(("number" == typeof e))) goto L_38;
  return e;
  return i;
}

// fn g  args=1 vars=1 closure=0 cpool=0 bc=81B file=dil_widgets/src/widgets/Input
// args: e
function {
  if (!(("email" === e))) goto L_f;
  return "email";
  if (!(("number" === e))) goto L_1e;
  return "number";
  if (!(("password" === e))) goto L_2d;
  return "password";
  if (!(("tel" === e))) goto L_3c;
  return "phoneNumber";
  if (!(("url" === e))) goto L_4b;
  return "url";
  return "default";
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=9 bc=995B file=dil_widgets/src/widgets/Input
// args: require, module, exports
// locals: e, t, i, o, r, n, s, d, l, u, a, c, h, p, v, Input, <class_fields_init>, Input#1, b, g, S
function {
  b = function b;
  g = function g;
  let S;
  let Input#1;
  let v;
  let p;
  let c;
  let a;
  let u;
  let l;
  let d;
  let s;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILInputFontSizeMode = undefined;
  exports.Input = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "W39Odddj70aQOhti");
  i = e.makeNodePrototype("textfield", undefined, "oi5mntnxCheCL2XP");
  o = e.makeNodePrototype("view", undefined, "8rdVynAuXziIwt7S");
  r = require("dil_core/src/DILInteraction");
  n = require("dil_core/src/DILComponent");
  s = require("dil_core/src/DILTextInputFocus");
  d = require("dil_core/src/typography/DILDynamicFont");
  l = require("valdi_core/src/Style");
  u = require("dil_cel/src/WidgetBinding");
  a = require("./DILWidgetSizes");
  c = require("./DILWidgetBindingActions");
  if ((h)) goto L_1a6;
  h = {};
  exports.DILInputFontSizeMode = {};
  !function <atom:0>({});
  p = 1.33;
  v = 0.75;
  let Input;
  let <class_fields_init>;
  class Input extends n.DILStatefulComponent { ... }
  <proto:Input>.onViewModelUpdate = function <atom:0>;
  <proto:Input>.onRender = function <atom:0>;
  <proto:Input>.value = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Input>;
  Input = function <atom:0>;
  // close_loc <class_fields_init>
  Input#1 = function <atom:0>;
  exports.Input = Input#1;
  Input#1.dilV2Properties = ["autoSelect", "defaultValue", "disabled", "fontSize", "inputType", "invalid", "mask", "name", "onChange", "pill", "placeholder", "required", "size", "value", "variant"];
  // append([], 0, n.DIL_COMPONENT_PROPERTIES)
  [][n.DIL_COMPONENT_PROPERTIES] = "allowAutofillExtensions";
  [][("allowAutofillExtensions" ++)] = "autoFocus";
  [][("autoFocus" ++)] = "autoSelect";
  [][("autoSelect" ++)] = "defaultValue";
  [][("defaultValue" ++)] = "disabled";
  [][("disabled" ++)] = "gutterSize";
  [][("gutterSize" ++)] = "inputType";
  [][("inputType" ++)] = "name";
  [][("name" ++)] = "onChangeAction";
  [][("onChangeAction" ++)] = "pattern";
  [][("pattern" ++)] = "pill";
  [][("pill" ++)] = "placeholder";
  [][("placeholder" ++)] = "required";
  [][("required" ++)] = "size";
  [][("size" ++)] = "value";
  [][("value" ++)] = "variant";
  ("variant" ++);
  Input#1.properties = [];
  S = {wrapper: new l.Style({alignItems: "center", justifyContent: "center", flexShrink: 1, width: "100%"}), input: new l.Style({accessibilityCategory: "input", autocapitalization: "none", autocorrection: "none", color: "color-text", flexShrink: 0, height: "100%", placeholderColor: "color-text-tertiary", width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Input
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
