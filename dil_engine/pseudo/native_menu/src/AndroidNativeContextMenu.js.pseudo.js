// fn r  args=1 vars=1 closure=1 cpool=0 bc=157B file=native_menu/src/AndroidNativeContextMenu
// args: e
// closure: n
function {
  if (!(n.Device.isAndroid())) goto L_9c;
  if (!(!n.Device.isWeb())) goto L_9c;
  return (undefined !== e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=372B file=native_menu/src/AndroidNativeContextMenu
// args: e
// closure: this
function {
  if ((this.isDestroyed())) goto L_173;
  if (((0 !== e.state))) goto L_173;
  if ((this.state.open)) goto L_173;
  if ((!this.viewModel.enabled)) goto L_173;
  if (!((this.viewModel.onLongPress == null))) goto L_140;
  this.viewModel.onLongPress;
  this.viewModel;
  goto L_143;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.setState({open: true});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=83B file=native_menu/src/AndroidNativeContextMenu
// locals: this, this.active_func, new.target, arguments
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
  this.state = {open: false};
  this.openMenu = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=136B file=native_menu/src/AndroidNativeContextMenu
// args: e
// locals: this
function {
  this = this;
  if (!((e == null))) goto L_b;
  e;
  goto L_2c;
  if (!((undefined.generation !== this.viewModel.generation))) goto L_87;
  this.state = {open: false};
  {open: false};
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=672B file=native_menu/src/AndroidNativeContextMenu
// closure: e, s, i, this
function {
  e.beginComponent(s.AndroidNativeMenuAnchor, i, "".concat(this.viewModel.generation), undefined);
  e.setViewModelProperty("viewFactory", this.viewModel.viewFactory);
  e.setViewModelProperty("actions", this.viewModel.actions);
  e.setViewModelProperty("onSelect", this.viewModel.onSelect);
  e.setViewModelProperty("onDismiss", this.viewModel.onDismiss);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=572B file=native_menu/src/AndroidNativeContextMenu
// locals: this
// closure: e, s, i, t
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributes(this.viewModel.attributes);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  if (!(this.viewModel.enabled)) goto L_19b;
  goto L_19c;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onLongPress", undefined);
  e.renderUnnamedSlot(this);
  if (!(this.state.open)) goto L_213;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=4 bc=370B file=native_menu/src/AndroidNativeContextMenu
// args: require, module, exports
// locals: e, t, i, o, n, s, r, AndroidNativeContextMenu, <class_fields_init>, AndroidNativeContextMenu#1
function {
  r = function r;
  let AndroidNativeContextMenu#1;
  let s;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.supportsAndroidNativeContextMenu = undefined;
  exports.AndroidNativeContextMenu = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "yCb14yPFsxlPhX4j");
  i = e.makeComponentPrototype(undefined, "WRHRxy0Q9aTZDaTe");
  o = require("valdi_core/src/Component");
  n = require("valdi_core/src/Device");
  s = require("./AndroidNativeMenuAnchor");
  exports.supportsAndroidNativeContextMenu = r;
  let AndroidNativeContextMenu;
  let <class_fields_init>;
  class AndroidNativeContextMenu extends o.StatefulComponent { ... }
  <proto:AndroidNativeContextMenu>.onViewModelUpdate = function <atom:0>;
  <proto:AndroidNativeContextMenu>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AndroidNativeContextMenu>;
  AndroidNativeContextMenu = function <atom:0>;
  // close_loc <class_fields_init>
  AndroidNativeContextMenu#1 = function <atom:0>;
  exports.AndroidNativeContextMenu = AndroidNativeContextMenu#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=native_menu/src/AndroidNativeContextMenu
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
