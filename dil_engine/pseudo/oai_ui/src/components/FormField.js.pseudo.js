// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=155B file=oai_ui/src/components/FormField
// closure: this, e
function {
  this.renderLabel();
  e.renderUnnamedSlot(this);
  this.renderDescription();
  this.renderError();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=279B file=oai_ui/src/components/FormField
// locals: this
// closure: e, m, t, s
function {
  this = this;
  e.beginComponent(m.Column, t, undefined, undefined);
  e.setViewModelProperty("gap", s.OAISpacing.Half);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=1312B file=oai_ui/src/components/FormField
// closure: e, o, v, this, s, n, t, i
function {
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", v.label);
  if (!((true === this.viewModel.disabled))) goto L_135;
  goto L_17a;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("color", s.OAIColor.TextPrimary);
  e.setAttributeString("font", n.font);
  e.setAttributeNumber("height", n.lineHeight);
  e.setAttributeNumber("lineHeight", n.lineHeight);
  e.setAttributeString("value", t);
  e.endRender();
  if (!((true === this.viewModel.required))) goto L_51f;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", v.requiredMarker);
  e.setAttributeString("color", s.OAIColor.TextStatusError);
  e.setAttributeString("font", n.font);
  e.setAttributeNumber("height", n.lineHeight);
  e.setAttributeNumber("lineHeight", n.lineHeight);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=8 cpool=1 bc=582B file=oai_ui/src/components/FormField
// locals: t, n, this
// closure: e, o, v, s, i, u, r, d
function {
  this = this;
  let n;
  let t;
  t = this.viewModel.label;
  if (!((undefined === t))) goto L_54;
  return;
  n = s.resolveOAITextStyle(s.OAITextSize.LabelLarge);
  e.beginComponent(u.Row, r, undefined, undefined);
  e.setViewModelProperty("align", d.OAIAlign.Center);
  e.setViewModelProperty("gap", s.OAISpacing.Half);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=758B file=oai_ui/src/components/FormField
// locals: this
// closure: e, b, n, s
function {
  this = this;
  if (!((undefined !== this.viewModel.description))) goto L_2f5;
  if (!((undefined === this.viewModel.error))) goto L_2f5;
  e.beginComponent(b.Text, n, undefined, undefined);
  e.setViewModelProperty("value", this.viewModel.description);
  if (!((true === this.viewModel.disabled))) goto L_213;
  goto L_258;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("tone", b.TextTone.Secondary);
  e.setViewModelProperty("size", s.OAITextSize.BodySmall);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=539B file=oai_ui/src/components/FormField
// locals: this
// closure: e, b, l, s
function {
  this = this;
  if (!((undefined !== this.viewModel.error))) goto L_21a;
  e.beginComponent(b.Text, l, undefined, undefined);
  e.setViewModelProperty("value", this.viewModel.error);
  e.setViewModelProperty("tone", b.TextTone.Danger);
  e.setViewModelProperty("size", s.OAITextSize.BodySmall);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/FormField
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

// fn <atom:0>  args=3 vars=21 closure=0 cpool=5 bc=788B file=oai_ui/src/components/FormField
// args: require, module, exports
// locals: e, t, r, o, i, n, l, d, s, a, p, m, u, b, FormField, <class_fields_init>, FormField#1, v
function {
  let v;
  let FormField#1;
  let b;
  let u;
  let m;
  let p;
  let a;
  let s;
  let d;
  let l;
  let n;
  let i;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FormField = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(["width", "100%"], "QHFXrsGmtvbB2Xt2");
  r = e.makeComponentPrototype(["width", "100%"], "etpWPQAEYPRGRozM");
  o = e.makeNodePrototype("label", ["numberOfLines", 1], "E7DpDG79JcaX0iGm");
  i = e.makeNodePrototype("label", ["numberOfLines", 1, "value", "*"], "GLWjN5srOwLwpnjB");
  n = e.makeComponentPrototype(["lines", 2], "z8XNMfadnNIXDDHV");
  l = e.makeComponentPrototype(["lines", 2], "74mQVyTJmc0L4cXe");
  d = require("oai_core/src/OAIAttributes");
  s = require("oai_core/src/OAITokens");
  a = require("valdi_core/src/Component");
  p = require("valdi_core/src/Style");
  m = require("./Column");
  u = require("./Row");
  b = require("./Text");
  let FormField;
  let <class_fields_init>;
  class FormField extends a.Component { ... }
  <proto:FormField>.onRender = function <atom:0>;
  <proto:FormField>.renderLabel = function <atom:0>;
  <proto:FormField>.renderDescription = function <atom:0>;
  <proto:FormField>.renderError = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FormField>;
  FormField = function <atom:0>;
  // close_loc <class_fields_init>
  FormField#1 = function <atom:0>;
  exports.FormField = FormField#1;
  v = {label: new p.Style({flexShrink: 1}), requiredMarker: new p.Style({flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/FormField
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
