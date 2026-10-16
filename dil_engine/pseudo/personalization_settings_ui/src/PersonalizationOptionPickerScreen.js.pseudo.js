// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=personalization_settings_ui/src/PersonalizationOptionPickerScreen
// closure: this, e
function {
  return this.select(e.key);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=5 cpool=1 bc=812B file=personalization_settings_ui/src/PersonalizationOptionPickerScreen
// args: e, t
// closure: this, o, d, s, P
function {
  o.beginComponent(d.SettingsActionRow, s, e.key, undefined);
  o.setViewModelProperty("accessibilityId", "".concat(this.viewModel.accessibilityId, ".", e.key));
  o.setViewModelProperty("accessibilityStateSelected", (e.key === this.viewModel.selectedKey));
  o.setViewModelProperty("description", e.description);
  o.setViewModelProperty("label", e.label);
  o.setViewModelProperty("onPress", function <atom:0>);
  o.setViewModelProperty("position", P(t, this.viewModel.options.length));
  o.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=106B file=personalization_settings_ui/src/PersonalizationOptionPickerScreen
// closure: this, o, d, s, P
function {
  this.viewModel.options.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=1 bc=163B file=personalization_settings_ui/src/PersonalizationOptionPickerScreen
// closure: this, o, d, s, P, l, n
function {
  o.beginComponent(l.SettingsSection, n, undefined, undefined);
  o.setUnnamedSlot(function <atom:0>);
  o.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=1 bc=275B file=personalization_settings_ui/src/PersonalizationOptionPickerScreen
// closure: this, o, d, s, P, l, n, a, i
function {
  o.beginComponent(a.SettingsList, i, undefined, undefined);
  o.setViewModelProperty("accessibilityId", this.viewModel.accessibilityId);
  o.setUnnamedSlot(function <atom:0>);
  o.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=10 cpool=1 bc=279B file=personalization_settings_ui/src/PersonalizationOptionPickerScreen
// locals: this
// closure: o, d, s, P, l, n, a, i, r, t
function {
  this = this;
  o.beginComponent(r.OAITheme, t, undefined, undefined);
  o.setViewModelProperty("mode", r.OAIThemeMode.System);
  o.setUnnamedSlot(function <atom:0>);
  o.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=147B file=personalization_settings_ui/src/PersonalizationOptionPickerScreen
// args: e
// locals: this
function {
  this = this;
  this.context.onSelect(e);
  this.navigationController.pop(true);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=personalization_settings_ui/src/PersonalizationOptionPickerScreen
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

// fn P  args=2 vars=2 closure=1 cpool=0 bc=297B file=personalization_settings_ui/src/PersonalizationOptionPickerScreen
// args: e, o
// closure: c
function {
  if (!((1 === o))) goto L_4b;
  return c.SettingsRowPosition.Only;
  if (!((0 === e))) goto L_96;
  return c.SettingsRowPosition.First;
  if (!((e === (o - 1)))) goto L_e3;
  return c.SettingsRowPosition.Last;
  return c.SettingsRowPosition.Middle;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=4 bc=599B file=personalization_settings_ui/src/PersonalizationOptionPickerScreen
// args: require, module, exports
// locals: e, o, t, i, n, s, r, d, a, c, l, p, g, m, PersonalizationOptionPickerScreen, <class_fields_init>, P
function {
  P = function P;
  let m;
  let g;
  let p;
  let l;
  let c;
  let a;
  let d;
  let r;
  let s;
  let n;
  let i;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PersonalizationOptionPickerScreen = undefined;
  e = require("tslib");
  o = require("valdi_core/src/JSX").jsx;
  t = o.makeComponentPrototype(undefined, "89bid7bGcu2tDbIY");
  i = o.makeComponentPrototype(undefined, "5sBMk_sKRqKFAOiQ");
  n = o.makeComponentPrototype(undefined, "lRemnK-WdvA2Duni");
  s = o.makeComponentPrototype(undefined, "Mdfj-wSggipDCRwZ");
  r = require("oai_core/src/OAITheme");
  d = require("oai_ui/src/components/settings/SettingsActionRow");
  a = require("oai_ui/src/components/settings/SettingsList");
  c = require("oai_ui/src/components/settings/SettingsRow");
  l = require("oai_ui/src/components/settings/SettingsSection");
  p = require("valdi_navigation/src/NavigationPage");
  g = require("valdi_navigation/src/NavigationPageComponent");
  let PersonalizationOptionPickerScreen;
  let <class_fields_init>;
  class PersonalizationOptionPickerScreen extends g.NavigationPageComponent { ... }
  <proto:PersonalizationOptionPickerScreen>.onRender = function <atom:0>;
  <proto:PersonalizationOptionPickerScreen>.select = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PersonalizationOptionPickerScreen>;
  PersonalizationOptionPickerScreen = function <atom:0>;
  // close_loc <class_fields_init>
  m = function <atom:0>;
  exports.PersonalizationOptionPickerScreen = m;
  m = e.__decorate([p.NavigationPage(module)], m);
  exports.PersonalizationOptionPickerScreen = e.__decorate([p.NavigationPage(module)], m);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=personalization_settings_ui/src/PersonalizationOptionPickerScreen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
