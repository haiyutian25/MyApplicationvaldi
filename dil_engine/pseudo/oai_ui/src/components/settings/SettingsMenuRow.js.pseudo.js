// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=841B file=oai_ui/src/components/settings/SettingsMenuRow
// closure: e, l, t, this
function {
  e.beginComponent(l.SettingsActionRow, t, undefined, undefined);
  e.setViewModelProperty("appearance", l.SettingsActionRowAppearance.Menu);
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  e.setViewModelProperty("label", this.viewModel.label);
  e.setViewModelProperty("onPress", undefined);
  e.setViewModelProperty("position", this.viewModel.position);
  e.setViewModelProperty("value", this.viewModel.value);
  e.setViewModelProperty("valueColor", this.viewModel.valueColor);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=1 bc=2307B file=oai_ui/src/components/settings/SettingsMenuRow
// locals: this
// closure: e, l, t, s, o, i
function {
  this = this;
  if (!(!s.supportsNativeMenu(this.context))) goto L_503;
  e.beginComponent(l.SettingsActionRow, o, undefined, undefined);
  e.setViewModelProperty("appearance", l.SettingsActionRowAppearance.Selection);
  e.setViewModelProperty("accessibilityId", this.viewModel.accessibilityId);
  if (!((this.viewModel.accessibilityValue == null))) goto L_236;
  this.viewModel.accessibilityValue;
  e.setViewModelProperty("accessibilityValue", this.viewModel.value);
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  e.setViewModelProperty("label", this.viewModel.label);
  e.setViewModelProperty("onPress", this.viewModel.onFallbackPress);
  e.setViewModelProperty("position", this.viewModel.position);
  e.setViewModelProperty("value", this.viewModel.value);
  e.setViewModelProperty("valueColor", this.viewModel.valueColor);
  e.endComponent();
  return;
  e.beginComponent(s.NativeMenu, i, undefined, undefined);
  if ((e.hasContext())) goto L_5c8;
  e.setContext(this.context);
  e.setViewModelProperty("accessibilityId", this.viewModel.accessibilityId);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.label);
  if (!((this.viewModel.accessibilityValue == null))) goto L_75d;
  this.viewModel.accessibilityValue;
  e.setViewModelProperty("accessibilityValue", this.viewModel.value);
  e.setViewModelProperty("actions", this.viewModel.actions);
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  e.setViewModelProperty("onSelect", this.viewModel.onSelect);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/settings/SettingsMenuRow
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

// fn <atom:0>  args=3 vars=13 closure=0 cpool=2 bc=380B file=oai_ui/src/components/settings/SettingsMenuRow
// args: require, module, exports
// locals: e, o, i, t, s, l, r, SettingsMenuRow, <class_fields_init>, SettingsMenuRow#1
function {
  let SettingsMenuRow#1;
  let r;
  let l;
  let s;
  let t;
  let i;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SettingsMenuRow = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "wSviz6ATaQNevDQG");
  i = e.makeComponentPrototype(undefined, "vGWRmouNt_hue0rD");
  t = e.makeComponentPrototype(undefined, "Wpt3XvzqxJqcOF2M");
  s = require("native_menu/src/NativeMenu");
  l = require("./SettingsActionRow");
  r = require("valdi_core/src/Component");
  let SettingsMenuRow;
  let <class_fields_init>;
  class SettingsMenuRow extends r.Component { ... }
  <proto:SettingsMenuRow>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SettingsMenuRow>;
  SettingsMenuRow = function <atom:0>;
  // close_loc <class_fields_init>
  SettingsMenuRow#1 = function <atom:0>;
  exports.SettingsMenuRow = SettingsMenuRow#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/settings/SettingsMenuRow
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
