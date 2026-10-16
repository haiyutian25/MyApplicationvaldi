// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=91B file=oai_ui/src/components/TextInput
// args: e
function {
  e.Email = "email";
  e.Number = "number";
  e.Password = "password";
  e.Tel = "tel";
  e.Text = "text";
  e.Url = "url";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=oai_ui/src/components/TextInput
// args: e
function {
  e.Outline = "outline";
  e.Plain = "plain";
  e.Settings = "settings";
  e.Soft = "soft";
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=323B file=oai_ui/src/components/TextInput
// args: e
// locals: t
// closure: this
function {
  let t;
  t = e.text;
  if (!((true !== this.viewModel.sensitive))) goto L_ed;
  if (!((undefined === this.viewModel.value))) goto L_ed;
  this.setState({value: t});
  if (!((this.viewModel.onChange == null))) goto L_13c;
  this.viewModel.onChange;
  this.viewModel;
  goto L_142;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=350B file=oai_ui/src/components/TextInput
// args: e
// closure: this
function {
  if (!((true !== this.viewModel.sensitive))) goto L_e9;
  if (!((undefined === this.viewModel.value))) goto L_e9;
  this.setState({value: e.text});
  if (!((this.viewModel.onSubmit == null))) goto L_138;
  this.viewModel.onSubmit;
  this.viewModel;
  goto L_15d;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=84B file=oai_ui/src/components/TextInput
// closure: this
function {
  if (!((this.viewModel.onFocusChange == null))) goto L_4e;
  this.viewModel.onFocusChange;
  this.viewModel;
  goto L_53;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=205B file=oai_ui/src/components/TextInput
// closure: this
function {
  if (!((this.viewModel.inputRef == null))) goto L_4d;
  this.viewModel.inputRef;
  goto L_78;
  undefined.setAttribute("focused", false);
  if (!((this.viewModel.onFocusChange == null))) goto L_c7;
  this.viewModel.onFocusChange;
  this.viewModel;
  goto L_cc;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=4 bc=269B file=oai_ui/src/components/TextInput
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
  if (!((true === this.viewModel.sensitive))) goto L_7e;
  goto L_c3;
  // [栈深重同步 3 -> 2]
  this.state = {value: this.viewModel.defaultValue};
  this.handleChange = function <atom:0>;
  this.handleSubmit = function <atom:0>;
  this.handleEditBegin = function <atom:0>;
  this.handleEditEnd = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=oai_ui/src/components/TextInput
// closure: this
function {
  this.renderControl();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=803B file=oai_ui/src/components/TextInput
// locals: this
// closure: e, d, t
function {
  this = this;
  if (!(this.hasFormField)) goto L_2fd;
  e.beginComponent(d.FormField, t, undefined, undefined);
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

// fn <atom:0>  args=0 vars=8 closure=16 cpool=1 bc=5004B file=oai_ui/src/components/TextInput
// locals: t, s, d, y, S, A, m, this
// closure: u, h, n, w, r, g, e, i, M, b, o, l, v, c, a, p
function {
  this = this;
  let m;
  let A;
  let S;
  let y;
  let d;
  let s;
  let t;
  t = u.resolveSettingsTheme();
  s = (true === this.viewModel.disabled);
  if (!((this.viewModel.variant == null))) goto L_f1;
  this.viewModel.variant;
  d = h.Outline;
  y = (d === h.Settings);
  if (!(y)) goto L_1a0;
  goto L_1e6;
  // [栈深重同步 1 -> 0]
  S = w(this.viewModel.size);
  if (!(y)) goto L_1f0;
  goto L_259;
  // [栈深重同步 1 -> 0]
  A = r.resolveOAIControlHeight(this.viewModel.size);
  if (!((this.viewModel.horizontalPadding == null))) goto L_33b;
  this.viewModel.horizontalPadding;
  if (!(y)) goto L_2f3;
  goto L_33b;
  // [栈深重同步 1 -> 0]
  m = g(this.viewModel.size);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", M.wrapper);
  if (!((this.viewModel.background == null))) goto L_530;
  this.viewModel.background;
  if (!(y)) goto L_47c;
  goto L_530;
  // [栈深重同步 4 -> 3]
  if (!((d === h.Soft))) goto L_4eb;
  goto L_530;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", r.OAIColor.BgPrimary);
  e.setAttributeString("borderColor", b(this.viewModel, d));
  e.setAttributeNumber("borderRadius", r.OAIRadius.Md);
  if (((d === h.Outline))) goto L_696;
  if (!((undefined !== this.viewModel.error))) goto L_69b;
  goto L_69c;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", undefined);
  e.setAttributeNumber("height", A);
  if (!(s)) goto L_708;
  if (!(!y)) goto L_708;
  goto L_709;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeNumber("paddingLeft", m);
  e.setAttributeNumber("paddingRight", m);
  e.beginRender(o, undefined);
  e.setAttributeRef(this.viewModel.inputRef);
  if (!((undefined === this.viewModel.inputStyle))) goto L_89d;
  goto L_94d;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", l.Style.cachingMerge(M.input, this.viewModel.inputStyle));
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  if (!((this.viewModel.accessibilityLabel == null))) goto L_a78;
  this.viewModel.accessibilityLabel;
  e.setAttributeString("accessibilityLabel", this.viewModel.label);
  e.setAttribute("accessibilityStateDisabled", s);
  e.setAttributeString("autocapitalization", v(this.viewModel));
  e.setAttributeString("autocorrection", c(this.viewModel));
  e.setAttributeNumber("characterLimit", this.viewModel.maxLength);
  e.setAttribute("closesWhenReturnKeyPressed", this.viewModel.closesWhenReturnKeyPressed);
  if (!((this.viewModel.inputType === a.Password))) goto L_cd2;
  goto L_d63;
  // [栈深重同步 4 -> 3]
  if (!((this.viewModel.contentType == null))) goto L_d63;
  this.viewModel.contentType;
  e.setAttributeString("contentType", p(this.viewModel.inputType));
  e.setAttribute("enabled", !s);
  if (!((this.viewModel.inputStyle == null))) goto L_e0d;
  this.viewModel.inputStyle;
  goto L_e4f;
  if (!((undefined.attributes.font == null))) goto L_e78;
  undefined.attributes.font;
  e.setAttributeString("font", S.font);
  if (!(y)) goto L_ead;
  goto L_eb2;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("height", "100%");
  if (!(y)) goto L_f2b;
  goto L_f2c;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("minHeight", undefined);
  e.setAttributeFunction("onChange", this.handleChange);
  if (!((undefined === this.viewModel.onFocusChange))) goto L_ff4;
  goto L_1017;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onEditBegin", this.handleEditBegin);
  if (!((undefined === this.viewModel.inputRef))) goto L_10d7;
  if (!((undefined === this.viewModel.onFocusChange))) goto L_10d7;
  goto L_10fa;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onEditEnd", this.handleEditEnd);
  if (!((undefined === this.viewModel.onSubmit))) goto L_1172;
  goto L_1195;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onReturn", this.handleSubmit);
  e.setAttributeString("placeholder", this.viewModel.placeholder);
  e.setAttributeString("returnKeyText", this.viewModel.returnKeyText);
  e.setAttribute("selectTextOnFocus", this.viewModel.autoSelect);
  e.setAttributeString("value", this.value);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=221B file=oai_ui/src/components/TextInput
// locals: this
function {
  this = this;
  if (((undefined !== this.viewModel.label))) goto L_dc;
  if (((undefined !== this.viewModel.description))) goto L_dc;
  return (undefined !== this.viewModel.error);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=218B file=oai_ui/src/components/TextInput
// locals: this
function {
  this = this;
  if (!((true !== this.viewModel.sensitive))) goto L_d9;
  if (!((this.viewModel.value == null))) goto L_d8;
  this.viewModel.value;
  return this.state.value;
  return;
}

// fn v  args=1 vars=1 closure=1 cpool=0 bc=228B file=oai_ui/src/components/TextInput
// args: e
// closure: a
function {
  if (!((undefined !== e.autocapitalization))) goto L_49;
  return e.autocapitalization;
  if (((e.inputType === a.Email))) goto L_dd;
  if (((e.inputType === a.Password))) goto L_dd;
  if (!((e.inputType === a.Url))) goto L_e3;
  return "none";
  e.inputType;
  return;
}

// fn c  args=1 vars=1 closure=1 cpool=0 bc=233B file=oai_ui/src/components/TextInput
// args: e
// closure: a
function {
  if (!((undefined !== e.autocorrection))) goto L_49;
  return e.autocorrection;
  if (((e.inputType === a.Email))) goto L_dd;
  if (((e.inputType === a.Password))) goto L_dd;
  if (!((e.inputType === a.Url))) goto L_e3;
  return "none";
  return "default";
}

// fn p  args=1 vars=1 closure=1 cpool=0 bc=226B file=oai_ui/src/components/TextInput
// args: e
// closure: a
function {
  if (!((e === a.Email))) goto L_2c;
  return "email";
  if (!((e === a.Number))) goto L_58;
  return "number";
  if (!((e === a.Password))) goto L_84;
  return "password";
  if (!((e === a.Tel))) goto L_b0;
  return "phoneNumber";
  if (!((e === a.Url))) goto L_dc;
  return "url";
  return "default";
}

// fn b  args=2 vars=2 closure=2 cpool=0 bc=218B file=oai_ui/src/components/TextInput
// args: e, t
// closure: r, h
function {
  if (!((undefined !== e.error))) goto L_6c;
  return r.OAIColor.BorderStatusError;
  if (!((t === h.Outline))) goto L_d8;
  return r.OAIColor.BorderDefault;
  return undefined;
}

// fn w  args=1 vars=1 closure=1 cpool=0 bc=287B file=oai_ui/src/components/TextInput
// args: e
// closure: r
function {
  if (!((e === r.OAIControlSize.Sm))) goto L_b4;
  return r.resolveOAITextStyle(r.OAITextSize.BodyMedium);
  return r.resolveOAITextStyle(r.OAITextSize.BodyLarge);
}

// fn g  args=1 vars=1 closure=1 cpool=0 bc=356B file=oai_ui/src/components/TextInput
// args: e
// closure: r
function {
  if (!((e === r.OAIControlSize.Sm))) goto L_8f;
  return r.OAISpacing.OneAndHalf;
  if (!((e === r.OAIControlSize.Lg))) goto L_11e;
  return r.OAISpacing.Two;
  return r.OAISpacing.OnePointSeventyFive;
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=13 bc=855B file=oai_ui/src/components/TextInput
// args: require, module, exports
// locals: e, t, i, o, r, n, s, l, d, u, a, h, TextInput, <class_fields_init>, TextInput#1, v, c, p, b, w, g, M
function {
  v = function v;
  c = function c;
  p = function p;
  b = function b;
  w = function w;
  g = function g;
  let M;
  let TextInput#1;
  let u;
  let d;
  let l;
  let s;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextInputType = undefined;
  exports.TextInputVariant = undefined;
  exports.TextInput = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "pnHvviazz2idlavd");
  i = e.makeNodePrototype("view", undefined, "FOA23PZihaKSS5nJ");
  o = e.makeNodePrototype("textfield", ["accessibilityCategory", "input"], "htEmUtONbIwVunob");
  r = require("oai_core/src/OAITokens");
  n = require("oai_core/src/OAITypography");
  s = require("valdi_core/src/Component");
  l = require("valdi_core/src/Style");
  d = require("./FormField");
  u = require("./settings/SettingsTheme");
  if ((a)) goto L_1aa;
  a = {};
  exports.TextInputType = {};
  !function <atom:0>({});
  if ((h)) goto L_1c3;
  h = {};
  exports.TextInputVariant = {};
  function <atom:0>({});
  let TextInput;
  let <class_fields_init>;
  class TextInput extends s.StatefulComponent { ... }
  <proto:TextInput>.onRender = function <atom:0>;
  <proto:TextInput>.renderControl = function <atom:0>;
  <proto:TextInput>.hasFormField = function <atom:0>;
  <proto:TextInput>.value = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TextInput>;
  TextInput = function <atom:0>;
  // close_loc <class_fields_init>
  TextInput#1 = function <atom:0>;
  exports.TextInput = TextInput#1;
  M = {wrapper: new l.Style({alignItems: "center", flexShrink: 0, justifyContent: "center", width: "100%"}), input: new l.Style({color: r.OAIColor.TextPrimary, flexShrink: 0, placeholderColor: r.OAIColor.TextTertiary, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/TextInput
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
