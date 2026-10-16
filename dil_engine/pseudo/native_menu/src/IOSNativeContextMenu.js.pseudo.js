// fn r  args=0 vars=0 closure=2 cpool=0 bc=194B file=native_menu/src/IOSNativeContextMenu
// closure: o, s
function {
  if (!(o.Device.isIOS())) goto L_c1;
  if (!(!o.Device.isWeb())) goto L_c1;
  return s.isVersionAtLeast(194);
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=918B file=native_menu/src/IOSNativeContextMenu
// locals: this
// closure: e, t
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributes(this.viewModel.attributes);
  e.setAttribute("iosClass", "ValdiNativeContextMenuView");
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("contentId", this.viewModel.contentId);
  if (!(this.viewModel.enabled)) goto L_25e;
  goto L_261;
  // [栈深重同步 4 -> 3]
  e.setAttribute("actions", []);
  e.setAttributeFunction("onSelect", this.viewModel.onSelect);
  e.setAttributeNumber("previewCornerRadius", this.viewModel.previewCornerRadius);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=native_menu/src/IOSNativeContextMenu
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=3 bc=312B file=native_menu/src/IOSNativeContextMenu
// args: require, module, exports
// locals: e, t, i, s, o, r, IOSNativeContextMenu, <class_fields_init>, IOSNativeContextMenu#1
function {
  r = function r;
  let IOSNativeContextMenu#1;
  let o;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.supportsIOSNativeContextMenu = undefined;
  exports.IOSNativeContextMenu = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", undefined, "WQv5WqxUNeNIHpZh");
  i = require("valdi_core/src/Component");
  s = require("valdi_core/src/CompilerIntrinsics");
  o = require("valdi_core/src/Device");
  exports.supportsIOSNativeContextMenu = r;
  let IOSNativeContextMenu;
  let <class_fields_init>;
  class IOSNativeContextMenu extends i.Component { ... }
  <proto:IOSNativeContextMenu>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:IOSNativeContextMenu>;
  IOSNativeContextMenu = function <atom:0>;
  // close_loc <class_fields_init>
  IOSNativeContextMenu#1 = function <atom:0>;
  exports.IOSNativeContextMenu = IOSNativeContextMenu#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=native_menu/src/IOSNativeContextMenu
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
