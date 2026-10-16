// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=358B file=oai_ui/src/internal/NativeSwitchAccessory
// locals: this
// closure: e, t, i
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", i);
  e.setAttribute("switchChecked", this.viewModel.checked);
  e.setAttribute("switchEnabled", this.viewModel.enabled);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/internal/NativeSwitchAccessory
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=688B file=oai_ui/src/internal/NativeSwitchAccessory
// args: require, module, exports
// locals: e, t, o, c, s, NativeSwitchAccessory, <class_fields_init>, NativeSwitchAccessory#1, i
function {
  let i;
  let NativeSwitchAccessory#1;
  let s;
  let c;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NativeSwitchAccessory = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["androidClass", "com.openai.valdi.ui.ValdiSwitchAccessory"], "UcSpS94Q3oYc8R9h");
  o = require("valdi_core/src/Component");
  c = require("valdi_core/src/Style");
  s = require("../components/settings/SettingsTheme");
  let NativeSwitchAccessory;
  let <class_fields_init>;
  class NativeSwitchAccessory extends o.Component { ... }
  <proto:NativeSwitchAccessory>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeSwitchAccessory>;
  NativeSwitchAccessory = function <atom:0>;
  // close_loc <class_fields_init>
  NativeSwitchAccessory#1 = function <atom:0>;
  exports.NativeSwitchAccessory = NativeSwitchAccessory#1;
  i = new c.Style({accessibilityNavigation: "ignored", allowReuse: false, switchCheckedTrackColor: s.SettingsAppearance.toggleColors.checkedTrack, switchTrackColor: s.SettingsAppearance.toggleColors.track, switchThumbColor: s.SettingsAppearance.toggleColors.thumb, touchEnabled: false});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/internal/NativeSwitchAccessory
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
