// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=42B file=valdi_core/src/debugging/NativeAppearanceDebugSettings
// closure: this
function {
  if (!((this.rightToLeftOverride == null))) goto L_29;
  this.rightToLeftOverride;
  return false;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=valdi_core/src/debugging/NativeAppearanceDebugSettings
// args: e
// closure: this
function {
  return this.setRightToLeftOverride(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=2 bc=247B file=valdi_core/src/debugging/NativeAppearanceDebugSettings
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.renderers = new Map();
  this.registration = e.registerDebugSettingsGroup({id: "valdi.appearance", label: "Appearance", settings: [{defaultValue: false, description: "Overrides layout direction for every mounted Valdi renderer.", get: function <atom:0>, id: "rtl", kind: e.DebugSettingKind.Toggle, label: "Right-to-left layout", set: function <atom:0>}]});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=131B file=valdi_core/src/debugging/NativeAppearanceDebugSettings
// closure: this, e
function {
  if (!((undefined !== this.rightToLeftOverride))) goto L_82;
  if (!(this.rightToLeftOverride)) goto L_7a;
  goto L_7f;
  // [栈深重同步 4 -> 3]
  e.setAttribute("direction", "ltr");
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=192B file=valdi_core/src/debugging/NativeAppearanceDebugSettings
// closure: this, e, t
function {
  if (!((this.renderers.get(e) === t))) goto L_bf;
  this.renderers.delete(e);
  e.removeObserver(t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=2 bc=177B file=valdi_core/src/debugging/NativeAppearanceDebugSettings
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = {onRootElementWillEndRender: function <atom:0>};
  this.renderers.set(e, t);
  e.addObserver(t);
  this.applyLayoutDirection(e);
  return function <atom:0>;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=39B file=valdi_core/src/debugging/NativeAppearanceDebugSettings
// args: e, t
function {
  t.removeObserver(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=217B file=valdi_core/src/debugging/NativeAppearanceDebugSettings
// locals: this
function {
  this = this;
  this.registration.dispose();
  this.renderers.forEach(function <atom:0>);
  this.renderers.clear();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=valdi_core/src/debugging/NativeAppearanceDebugSettings
// args: e, t
// closure: this
function {
  this.applyLayoutDirection(t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=86B file=valdi_core/src/debugging/NativeAppearanceDebugSettings
// args: e
// locals: this
function {
  this = this;
  this.rightToLeftOverride = e;
  this.renderers.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=180B file=valdi_core/src/debugging/NativeAppearanceDebugSettings
// args: e
// locals: this
function {
  this = this;
  if (!((undefined !== this.rightToLeftOverride))) goto L_b3;
  if (!((e.getRootElement() == null))) goto L_5a;
  e.getRootElement();
  goto L_b3;
  if (!(this.rightToLeftOverride)) goto L_ab;
  goto L_b0;
  // [栈深重同步 4 -> 3]
  undefined.setAttribute("direction", "ltr");
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=5 bc=150B file=valdi_core/src/debugging/NativeAppearanceDebugSettings
// args: require, module, exports
// locals: e, NativeAppearanceDebugSettings, <class_fields_init>, NativeAppearanceDebugSettings#1
function {
  let NativeAppearanceDebugSettings#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NativeAppearanceDebugSettings = undefined;
  e = require("./DebugSettings");
  let NativeAppearanceDebugSettings;
  let <class_fields_init>;
  class NativeAppearanceDebugSettings extends undefined { ... }
  <proto:NativeAppearanceDebugSettings>.addRenderer = function <atom:0>;
  <proto:NativeAppearanceDebugSettings>.dispose = function <atom:0>;
  <proto:NativeAppearanceDebugSettings>.setRightToLeftOverride = function <atom:0>;
  <proto:NativeAppearanceDebugSettings>.applyLayoutDirection = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeAppearanceDebugSettings>;
  NativeAppearanceDebugSettings = function <atom:0>;
  // close_loc <class_fields_init>
  NativeAppearanceDebugSettings#1 = function <atom:0>;
  exports.NativeAppearanceDebugSettings = NativeAppearanceDebugSettings#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/NativeAppearanceDebugSettings
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
