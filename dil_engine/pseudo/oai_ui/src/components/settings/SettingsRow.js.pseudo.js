// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=oai_ui/src/components/settings/SettingsRow
// args: e
function {
  e.Only = "only";
  e.First = "first";
  e.Middle = "middle";
  e.Last = "last";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=oai_ui/src/components/settings/SettingsRow
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=1139B file=oai_ui/src/components/settings/SettingsRow
// closure: e, this, n, o, s, i
function {
  this.renderSeparator();
  e.beginComponent(n.Row, o, undefined, undefined);
  if (!((this.viewModel.contentAlignment == null))) goto L_12d;
  this.viewModel.contentAlignment;
  e.setViewModelProperty("align", s.OAIAlign.Center);
  e.setViewModelProperty("gap", i.layout.rowContentGap);
  e.setViewModelProperty("justify", s.OAIJustify.Between);
  if (!((this.viewModel.minHeight == null))) goto L_2cb;
  this.viewModel.minHeight;
  e.setViewModelProperty("minHeight", i.layout.rowMinimumHeight);
  if (!((this.viewModel.horizontalInset == null))) goto L_386;
  this.viewModel.horizontalInset;
  if (!((this.viewModel.verticalInset == null))) goto L_418;
  this.viewModel.verticalInset;
  e.setViewModelProperty("padding", {x: i.layout.rowHorizontalInset, y: i.layout.rowVerticalInset});
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=7 closure=9 cpool=1 bc=2763B file=oai_ui/src/components/settings/SettingsRow
// locals: i, r, d, w, c, v, this
// closure: e, n, o, s, y, l, a, t, p
function {
  this = this;
  let v;
  let c;
  let w;
  let d;
  let r;
  let i;
  i = y.resolveSettingsTheme();
  r = y.resolveSettingsColors();
  d = (undefined !== this.viewModel.onPress);
  w = (true === this.viewModel.disabled);
  c = (false !== this.viewModel.showsPressedFeedback);
  if (!(d)) goto L_197;
  if (!(!w)) goto L_197;
  if (!(c)) goto L_197;
  v = l.Device.isAndroid();
  e.beginComponent(a.Pressable, t, undefined, undefined);
  e.setViewModelProperty("style", p.root);
  if (!((i.layout.rowGap > 0))) goto L_2d3;
  goto L_2d4;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("backgroundColor", undefined);
  e.setViewModelProperty("borderRadius", i.layout.rowRadius);
  e.setViewModelProperty("marginTop", (i.layout.rowGap / 2));
  e.setViewModelProperty("marginBottom", (i.layout.rowGap / 2));
  e.setViewModelProperty("slowClipping", (i.layout.rowGap > 0));
  if (!((this.viewModel.accessibilityCategory == null))) goto L_529;
  this.viewModel.accessibilityCategory;
  if (!(d)) goto L_524;
  goto L_529;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityCategory", "view");
  e.setViewModelProperty("accessibilityId", this.viewModel.accessibilityId);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.accessibilityLabel);
  if (!(d)) goto L_644;
  goto L_649;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityNavigation", "passthrough");
  if (!((this.viewModel.accessibilityStateDisabled == null))) goto L_6c2;
  this.viewModel.accessibilityStateDisabled;
  e.setViewModelProperty("accessibilityStateDisabled", w);
  e.setViewModelProperty("accessibilityStateSelected", this.viewModel.accessibilityStateSelected);
  e.setViewModelProperty("accessibilityValue", this.viewModel.accessibilityValue);
  e.setViewModelProperty("disabled", w);
  if (!(v)) goto L_84d;
  goto L_84e;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("feedback", undefined);
  if (!(d)) goto L_8c6;
  goto L_8c7;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onPress", undefined);
  if (!(w)) goto L_98c;
  if (!((false !== this.viewModel.dimmedWhenDisabled))) goto L_98c;
  goto L_98d;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("opacity", undefined);
  if (!(c)) goto L_a0c;
  if (!(!v)) goto L_a0c;
  goto L_a0d;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("pressedOpacity", undefined);
  if (!(d)) goto L_a44;
  e.setViewModelProperty("showsPressedFeedback", c);
  e.setViewModelProperty("touchEnabled", !w);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=0 bc=850B file=oai_ui/src/components/settings/SettingsRow
// locals: t, o, s, this
// closure: y, w, e, i
function {
  this = this;
  let s;
  let o;
  let t;
  t = y.resolveSettingsTheme();
  if (!((t.layout.rowGap > 0))) goto L_7b;
  return;
  if (!((this.viewModel.position == null))) goto L_e5;
  this.viewModel.position;
  o = w.Only;
  if (!(t.layout.separatorAtRowBottom)) goto L_151;
  goto L_173;
  // [栈深重同步 1 -> 0]
  s = w.Last;
  if (!((o !== w.Middle))) goto L_1a5;
  if (((o !== s))) goto L_351;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", t.styles.separator);
  e.setAttributeNumber("left", this.viewModel.separatorInset);
  e.setAttributeNumber("right", this.viewModel.separatorTrailingInset);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/settings/SettingsRow
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

// fn <atom:0>  args=3 vars=19 closure=0 cpool=4 bc=567B file=oai_ui/src/components/settings/SettingsRow
// args: require, module, exports
// locals: e, t, o, i, s, r, l, d, a, n, y, w, SettingsRow, <class_fields_init>, SettingsRow#1, p
function {
  let p;
  let SettingsRow#1;
  let y;
  let n;
  let a;
  let d;
  let l;
  let r;
  let s;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SettingsRowPosition = undefined;
  exports.SettingsRow = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "2OkpylsD-Zf_IaI4");
  o = e.makeComponentPrototype(["width", "100%"], "0wO1JQdyNDldmeYD");
  i = e.makeNodePrototype("view", undefined, "4kyrcXf_AfUoS88Y");
  s = require("oai_core/src/OAIAttributes");
  r = require("valdi_core/src/Component");
  l = require("valdi_core/src/Device");
  d = require("valdi_core/src/Style");
  a = require("valdi_ui/src/components/Pressable");
  n = require("../Row");
  y = require("./SettingsTheme");
  if ((w)) goto L_18e;
  w = {};
  exports.SettingsRowPosition = {};
  !function <atom:0>({});
  let SettingsRow;
  let <class_fields_init>;
  class SettingsRow extends r.Component { ... }
  <proto:SettingsRow>.onRender = function <atom:0>;
  <proto:SettingsRow>.renderSeparator = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SettingsRow>;
  SettingsRow = function <atom:0>;
  // close_loc <class_fields_init>
  SettingsRow#1 = function <atom:0>;
  exports.SettingsRow = SettingsRow#1;
  p = {root: new d.Style({flexShrink: 0, position: "relative", width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/settings/SettingsRow
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
