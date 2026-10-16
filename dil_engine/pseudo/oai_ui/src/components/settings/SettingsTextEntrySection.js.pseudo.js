// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=876B file=oai_ui/src/components/settings/SettingsTextEntrySection
// closure: e, n, i, p, r, s, y
function {
  e.beginComponent(n.Text, i, undefined, undefined);
  if (!(p)) goto L_82;
  goto L_c7;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("color", r.colors.text);
  if (!(p)) goto L_fc;
  goto L_101;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("height", "auto");
  if (!(p)) goto L_19b;
  goto L_1e0;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("lines", r.layout.previewLines);
  e.setViewModelProperty("typography", r.typography.Row);
  if (!(p)) goto L_2cb;
  goto L_310;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("tone", n.TextTone.Primary);
  e.setViewModelProperty("value", y);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=1 bc=903B file=oai_ui/src/components/settings/SettingsTextEntrySection
// closure: e, n, i, p, r, s, y, l, o, this
function {
  e.beginComponent(l.SettingsRow, o, undefined, undefined);
  e.setViewModelProperty("accessibilityId", this.viewModel.accessibilityId);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.label);
  e.setViewModelProperty("accessibilityValue", y);
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  e.setViewModelProperty("onPress", this.viewModel.onPress);
  e.setViewModelProperty("position", l.SettingsRowPosition.Only);
  if (!(p)) goto L_330;
  goto L_331;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("verticalInset", undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=8 cpool=1 bc=989B file=oai_ui/src/components/settings/SettingsTextEntrySection
// locals: r, p, y, this
// closure: e, n, i, s, l, o, d, t
function {
  this = this;
  let y;
  let p;
  let r;
  r = s.resolveSettingsTheme();
  p = (0 === this.viewModel.value.length);
  if (!(p)) goto L_c2;
  goto L_105;
  // [栈深重同步 1 -> 0]
  y = this.viewModel.value;
  e.beginComponent(d.SettingsSection, t, undefined, undefined);
  if (!((undefined === this.viewModel.accessibilityId))) goto L_1ca;
  goto L_237;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityId", "".concat(this.viewModel.accessibilityId, "-section"));
  e.setViewModelProperty("title", this.viewModel.label);
  e.setViewModelProperty("bottomMargin", this.viewModel.bottomMargin);
  e.setViewModelProperty("topMargin", this.viewModel.topMargin);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/settings/SettingsTextEntrySection
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

// fn <atom:0>  args=3 vars=15 closure=0 cpool=2 bc=404B file=oai_ui/src/components/settings/SettingsTextEntrySection
// args: require, module, exports
// locals: e, t, o, i, s, r, n, l, d, SettingsTextEntrySection, <class_fields_init>, SettingsTextEntrySection#1
function {
  let SettingsTextEntrySection#1;
  let d;
  let l;
  let n;
  let r;
  let s;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SettingsTextEntrySection = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "_xT2t4UUY_0CvsRg");
  o = e.makeComponentPrototype(undefined, "SBO2bZ63b2Sw1oJb");
  i = e.makeComponentPrototype(undefined, "10_IWRLj0cBj2-G0");
  s = require("oai_ui/src/components/settings/SettingsTheme");
  r = require("valdi_core/src/Component");
  n = require("../Text");
  l = require("./SettingsRow");
  d = require("./SettingsSection");
  let SettingsTextEntrySection;
  let <class_fields_init>;
  class SettingsTextEntrySection extends r.Component { ... }
  <proto:SettingsTextEntrySection>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SettingsTextEntrySection>;
  SettingsTextEntrySection = function <atom:0>;
  // close_loc <class_fields_init>
  SettingsTextEntrySection#1 = function <atom:0>;
  exports.SettingsTextEntrySection = SettingsTextEntrySection#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/settings/SettingsTextEntrySection
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
