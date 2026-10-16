// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=48B file=dil_widgets/src/widgets/Textarea
// closure: this
function {
  this.setState({isFocused: false});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=639B file=dil_widgets/src/widgets/Textarea
// args: e
// locals: t
// closure: this, c, v
function {
  let t;
  if (((this.viewModel.value instanceof c.DILWidgetBinding))) goto L_10e;
  if (((undefined !== this.viewModel.value))) goto L_10e;
  this.setState({value: e.text});
  t = this.viewModel.onChange;
  if (!((undefined === t))) goto L_258;
  goto L_27e;
  // [栈深重同步 1 -> 0]
  t(e.text);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/Textarea
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=247B file=dil_widgets/src/widgets/Textarea
// closure: o, this
function {
  o.runDILControlInteraction(this.context, this.viewModel, {target: "textarea", affordance: o.DILInteractionAffordance.ValueInput}, function <atom:0>);
  this.setState({isFocused: true});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=3 bc=111B file=dil_widgets/src/widgets/Textarea
// locals: this, this.active_func, new.target, arguments
// closure: c, v, o, <class_fields_init>
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
  this.handleEditEnd = function <atom:0>;
  this.handleChange = function <atom:0>;
  this.handleEditBegin = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=11 closure=13 cpool=1 bc=3070B file=dil_widgets/src/widgets/Textarea
// locals: o, s, u, l, c, v, g, S, A, M, this
// closure: b, n, h, p, x, w, e, t, m, i, d, r, a
function {
  this = this;
  let M;
  let A;
  let S;
  let g;
  let v;
  let c;
  let l;
  let u;
  let s;
  let o;
  o = {marginLeft: undefined, marginTop: undefined};
  b.DIL_THEME_ATTRIBUTES.apply(this.viewModel, o);
  if (!((undefined !== this.viewModel.autoSpacing))) goto L_154;
  n.applyDILAutoSpacingAttributes(o, this.viewModel.autoSpacing);
  s = (true === this.viewModel.disabled);
  if (!((this.viewModel.size == null))) goto L_1eb;
  this.viewModel.size;
  u = "xl";
  l = h.resolveDILTextInputMetrics(u);
  c = ((h.resolveDILControlHeight(u, "xl") - p) / 2);
  v = x(w(this.viewModel.rows), c);
  if (!((true === this.viewModel.autoResize))) goto L_310;
  goto L_311;
  // [栈深重同步 1 -> 0]
  g = undefined;
  S = h.resolveDILTextInputGutter(this.viewModel.gutterSize, l.gutter);
  if (!((this.viewModel.variant == null))) goto L_3f0;
  this.viewModel.variant;
  A = "outline";
  if (!(this.state.isFocused)) goto L_43e;
  M = !s;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", m.wrapper);
  e.setAttributes(o);
  if (!(("soft" === A))) goto L_523;
  goto L_524;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", undefined);
  if (!(("outline" === A))) goto L_56f;
  if (!(M)) goto L_568;
  goto L_570;
  // [栈深重同步 4 -> 3]
  goto L_570;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderColor", undefined);
  if (!(("outline" === A))) goto L_5ab;
  goto L_5ac;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", undefined);
  e.setAttributeNumber("borderRadius", l.borderRadius);
  e.setAttributeNumber("height", v);
  e.setAttributeNumber("maxHeight", g);
  if (!(s)) goto L_693;
  goto L_694;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeNumber("paddingTop", c);
  e.setAttributeNumber("paddingBottom", c);
  e.setAttributeNumber("paddingLeft", S);
  e.setAttributeNumber("paddingRight", S);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", m.textarea);
  e.setAttribute("enabled", !s);
  e.setAttributeString("font", d.dynamicSystemFontForSize(l.fontSize));
  e.setAttributeFunction("onChange", this.handleChange);
  e.setAttributeFunction("onEditBegin", this.handleEditBegin);
  e.setAttributeFunction("onEditEnd", this.handleEditEnd);
  e.setAttributeString("placeholder", this.viewModel.placeholder);
  e.setAttribute("selectTextOnFocus", this.viewModel.autoSelect);
  e.setAttributeString("value", this.value);
  e.endRender();
  if (!(M)) goto L_bd5;
  if (!(("soft" === A))) goto L_bd5;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", a.DIL_TEXT_INPUT_SOFT_FOCUS_BORDER_STYLE);
  e.setAttributeNumber("borderRadius", l.borderRadius);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=306B file=dil_widgets/src/widgets/Textarea
// locals: e, this
// closure: c
function {
  this = this;
  let e;
  e = this.viewModel.value;
  if (!((e instanceof c.DILWidgetBinding))) goto L_9b;
  return e.asString();
  if (!((e == null))) goto L_131;
  e;
  if (!((this.state.value == null))) goto L_131;
  this.state.value;
  return this.viewModel.defaultValue;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=462B file=dil_widgets/src/widgets/Textarea
// locals: e, this
// closure: w
function {
  this = this;
  let e;
  e = w(this.viewModel.rows);
  if (!((undefined !== this.viewModel.maxRows))) goto L_19f;
  if (!(Number.isFinite(this.viewModel.maxRows))) goto L_19f;
  return Math.max(e, Math.floor(this.viewModel.maxRows));
  return Math.max(e, 10);
}

// fn w  args=1 vars=1 closure=0 cpool=0 bc=139B file=dil_widgets/src/widgets/Textarea
// args: e
function {
  if (!((undefined !== e))) goto L_89;
  if (!(Number.isFinite(e))) goto L_89;
  return Math.max(1, Math.floor(e));
  return 3;
}

// fn x  args=2 vars=2 closure=1 cpool=0 bc=10B file=dil_widgets/src/widgets/Textarea
// args: e, t
// closure: p
function {
  return ((e * p) + (2 * t));
}

// fn <atom:0>  args=3 vars=26 closure=0 cpool=6 bc=986B file=dil_widgets/src/widgets/Textarea
// args: require, module, exports
// locals: e, t, i, r, o, s, a, n, d, u, l, c, h, v, b, g, p, Textarea, <class_fields_init>, Textarea#1, w, x, m
function {
  w = function w;
  x = function x;
  let m;
  let Textarea#1;
  let p;
  let g;
  let b;
  let v;
  let h;
  let c;
  let l;
  let u;
  let d;
  let n;
  let a;
  let s;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Textarea = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "8tsGsHqNUg3bg2Gr");
  i = e.makeNodePrototype("textview", undefined, "XZSDROhDD_t1BBQe");
  r = e.makeNodePrototype("view", undefined, "3srr_rc7tr3K85ms");
  o = require("dil_core/src/DILInteraction");
  s = require("dil_core/src/DILComponent");
  a = require("dil_core/src/DILTextInputFocus");
  n = require("dil_core/src/layout/DILAutoSpacingAttributes");
  d = require("dil_core/src/typography/DILDynamicFont");
  u = require("valdi_core/src/Component");
  l = require("valdi_core/src/Style");
  c = require("dil_cel/src/WidgetBinding");
  h = require("./DILWidgetSizes");
  v = require("./DILWidgetBindingActions");
  b = require("./attributes/DILThemeAttributes");
  g = 3;
  p = 20;
  let Textarea;
  let <class_fields_init>;
  class Textarea extends u.StatefulComponent { ... }
  <proto:Textarea>.onRender = function <atom:0>;
  <proto:Textarea>.value = function <atom:0>;
  <proto:Textarea>.maxRows = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Textarea>;
  Textarea = function <atom:0>;
  // close_loc <class_fields_init>
  Textarea#1 = function <atom:0>;
  exports.Textarea = Textarea#1;
  Textarea#1.dilV2Properties = ["autoResize", "autoSelect", "defaultValue", "disabled", "invalid", "maxRows", "name", "onChange", "placeholder", "required", "rows", "size", "value", "variant"];
  // append([], 0, s.DIL_COMPONENT_PROPERTIES)
  [][s.DIL_COMPONENT_PROPERTIES] = "allowAutofillExtensions";
  [][("allowAutofillExtensions" ++)] = "autoFocus";
  [][("autoFocus" ++)] = "autoResize";
  [][("autoResize" ++)] = "autoSelect";
  [][("autoSelect" ++)] = "defaultValue";
  [][("defaultValue" ++)] = "disabled";
  [][("disabled" ++)] = "gutterSize";
  [][("gutterSize" ++)] = "maxRows";
  [][("maxRows" ++)] = "name";
  [][("name" ++)] = "onChangeAction";
  [][("onChangeAction" ++)] = "placeholder";
  [][("placeholder" ++)] = "required";
  [][("required" ++)] = "rows";
  [][("rows" ++)] = "size";
  [][("size" ++)] = "value";
  [][("value" ++)] = "variant";
  ("variant" ++);
  Textarea#1.properties = [];
  m = {wrapper: new l.Style({flexShrink: 0, width: "100%"}), textarea: new l.Style({accessibilityCategory: "input", autocorrection: "default", closesWhenReturnKeyPressed: false, color: "color-text", flexShrink: 1, height: "100%", placeholderColor: "color-text-tertiary", returnType: "linereturn", textGravity: "top", width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Textarea
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
