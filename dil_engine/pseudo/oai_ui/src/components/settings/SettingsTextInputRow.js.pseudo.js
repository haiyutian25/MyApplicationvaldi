// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=278B file=oai_ui/src/components/settings/SettingsTextInputRow
// closure: e, i, o, s
function {
  e.beginComponent(i.TextInput, o, undefined, undefined);
  e.setViewModelProperties(s);
  e.setViewModelProperty("variant", i.TextInputVariant.Settings);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=1 bc=315B file=oai_ui/src/components/settings/SettingsTextInputRow
// locals: n, s, this
// closure: e, i, o, r, t
function {
  this = this;
  let s;
  let n;
  if (((undefined === undefined))) goto L_43;
  n = <to_object>(undefined).position;
  s = {};
  <to_object>(undefined);
  {position: null};
  goto L_68;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  e.beginComponent(r.SettingsRow, t, undefined, undefined);
  e.setViewModelProperty("position", n);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/settings/SettingsTextInputRow
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=344B file=oai_ui/src/components/settings/SettingsTextInputRow
// args: require, module, exports
// locals: e, t, o, n, i, r, SettingsTextInputRow, <class_fields_init>, SettingsTextInputRow#1
function {
  let SettingsTextInputRow#1;
  let r;
  let i;
  let n;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SettingsTextInputRow = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(["horizontalInset", 0, "verticalInset", 0], "MPzBqk4vTl4V2O8b");
  o = e.makeComponentPrototype(undefined, "v3tp3h8EBAqLNTci");
  n = require("valdi_core/src/Component");
  i = require("../TextInput");
  r = require("./SettingsRow");
  let SettingsTextInputRow;
  let <class_fields_init>;
  class SettingsTextInputRow extends n.Component { ... }
  <proto:SettingsTextInputRow>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SettingsTextInputRow>;
  SettingsTextInputRow = function <atom:0>;
  // close_loc <class_fields_init>
  SettingsTextInputRow#1 = function <atom:0>;
  exports.SettingsTextInputRow = SettingsTextInputRow#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/settings/SettingsTextInputRow
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
