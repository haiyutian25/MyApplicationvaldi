// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=136B file=oai_ui/src/components/Text
// args: e
function {
  e.Primary = "primary";
  e.Secondary = "secondary";
  e.Tertiary = "tertiary";
  e.Accent = "accent";
  e.Danger = "danger";
  e.Success = "success";
  e.Warning = "warning";
  e.Inverse = "inverse";
  e.InverseStatic = "inverseStatic";
  return;
}

// fn <atom:0>  args=0 vars=6 closure=6 cpool=0 bc=3220B file=oai_ui/src/components/Text
// locals: s, o, n, c, u, this
// closure: i, r, e, t, a, l
function {
  this = this;
  let u;
  let c;
  let n;
  let o;
  let s;
  if (!((this.viewModel.typography == null))) goto L_c4;
  this.viewModel.typography;
  s = i.resolveOAITextStyle(this.viewModel.size);
  o = r.resolveOAITypography(s, {font: this.viewModel.font, lineHeight: this.viewModel.lineHeight, lineHeightMultiple: this.viewModel.lineHeightMultiple});
  if (!((this.viewModel.lines == null))) goto L_25d;
  this.viewModel.lines;
  if (!((this.viewModel.numberOfLines == null))) goto L_25d;
  this.viewModel.numberOfLines;
  n = 1;
  c = o.lineHeight;
  if (((0 === n))) goto L_2bc;
  if (((undefined === c))) goto L_2bc;
  u = (true === o.lineHeightScalesWithFont);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", a.text);
  e.setAttributeString("accessibilityCategory", this.viewModel.accessibilityCategory);
  if (!((this.viewModel.accessibilityLabel == null))) goto L_4b5;
  this.viewModel.accessibilityLabel;
  if (!(("string" == typeof this.viewModel.value))) goto L_4b4;
  goto L_4b5;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityLabel", undefined);
  e.setAttributeString("accessibilityNavigation", this.viewModel.accessibilityNavigation);
  if (!((this.viewModel.color == null))) goto L_5e4;
  this.viewModel.color;
  e.setAttributeString("color", l(this.viewModel.tone));
  e.setAttributeNumber("flexGrow", this.viewModel.flex);
  e.setAttributeString("font", o.font);
  if (!((this.viewModel.height == null))) goto L_72b;
  this.viewModel.height;
  if (!(u)) goto L_724;
  goto L_72b;
  // [栈深重同步 4 -> 3]
  e.setAttribute("height", (c * n));
  if (!((this.viewModel.letterSpacing == null))) goto L_7c5;
  this.viewModel.letterSpacing;
  e.setAttributeNumber("letterSpacing", s.letterSpacing);
  e.setAttributeNumber("lineHeight", c);
  e.setAttribute("lineHeightScalesWithFont", o.lineHeightScalesWithFont);
  e.setAttributeNumber("lineHeightMultiple", o.lineHeightMultiple);
  if (!((this.viewModel.numberOfLines == null))) goto L_951;
  this.viewModel.numberOfLines;
  e.setAttributeNumber("numberOfLines", this.viewModel.lines);
  e.setAttributeFunction("onLayout", this.viewModel.onLayout);
  e.setAttributeNumber("opacity", this.viewModel.opacity);
  e.setAttribute("selectable", this.viewModel.selectable);
  e.setAttributeString("textAlign", this.viewModel.align);
  e.setAttributeString("textDecoration", this.viewModel.textDecoration);
  e.setAttribute("value", this.viewModel.value);
  e.setAttribute("width", this.viewModel.width);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/Text
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

// fn l  args=1 vars=1 closure=2 cpool=0 bc=1011B file=oai_ui/src/components/Text
// args: e
// closure: n, i
function {
  if (!((e == null))) goto L_28;
  e;
  if (!((n.Primary === n.Secondary))) goto L_94;
  return i.OAIColor.TextSecondary;
  if (!((n.Primary === n.Tertiary))) goto L_100;
  return i.OAIColor.TextTertiary;
  if (!((n.Primary === n.Accent))) goto L_16c;
  return i.OAIColor.TextAccent;
  if (!((n.Primary === n.Danger))) goto L_1d8;
  return i.OAIColor.TextStatusError;
  if (!((n.Primary === n.Success))) goto L_244;
  return i.OAIColor.TextStatusSuccess;
  if (!((n.Primary === n.Warning))) goto L_2b0;
  return i.OAIColor.TextStatusWarning;
  if (!((n.Primary === n.Inverse))) goto L_31c;
  return i.OAIColor.TextInverse;
  if (!((n.Primary === n.InverseStatic))) goto L_388;
  return i.OAIColor.TextInverseStatic;
  (n.Primary === n.Primary);
  return i.OAIColor.TextPrimary;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=4 bc=403B file=oai_ui/src/components/Text
// args: require, module, exports
// locals: e, t, i, r, s, o, n, Text, <class_fields_init>, Text#1, l, a
function {
  l = function l;
  let a;
  let Text#1;
  let o;
  let s;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextTone = undefined;
  exports.Text = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("label", ["flexShrink", 1], "dlYAIJBcClhKPcjb");
  i = require("oai_core/src/OAITokens");
  r = require("oai_core/src/OAITypography");
  s = require("valdi_core/src/Component");
  o = require("valdi_core/src/Style");
  if ((n)) goto L_106;
  n = {};
  exports.TextTone = {};
  !function <atom:0>({});
  let Text;
  let <class_fields_init>;
  class Text extends s.Component { ... }
  <proto:Text>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Text>;
  Text = function <atom:0>;
  // close_loc <class_fields_init>
  Text#1 = function <atom:0>;
  exports.Text = Text#1;
  a = {text: new o.Style({flexShrink: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Text
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
