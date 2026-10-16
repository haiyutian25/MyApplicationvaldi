// fn a  args=1 vars=1 closure=2 cpool=0 bc=121B file=native_menu/src/NativeContextMenu
// args: e
// closure: d, r
function {
  if ((d.supportsIOSNativeContextMenu())) goto L_78;
  if (!((e == null))) goto L_56;
  e;
  goto L_77;
  return r.supportsAndroidNativeContextMenu(undefined.nativeMenuViewFactory);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=46B file=native_menu/src/NativeContextMenu
// args: e
// closure: this
function {
  return this.setState({actions: e});   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=209B file=native_menu/src/NativeContextMenu
// locals: e
// closure: this
function {
  let e;
  if (!(this.isDestroyed())) goto L_2d;
  return;
  e = (this.state.generation + 1);
  this.bindSelection(e);
  this.setState({generation: e});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=2 bc=144B file=native_menu/src/NativeContextMenu
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, n
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
  this.state = {generation: 0, actions: []};
  this.icons = new n.NativeMenuIcons(function <atom:0>);
  this.dismiss = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=925B file=native_menu/src/NativeContextMenu
// args: e
// locals: t, this
// closure: a
function {
  this = this;
  let t;
  t = this.viewModel;
  if (!(a(this.context))) goto L_ba;
  goto L_100;
  // [栈深重同步 1 -> 0]
  this.icons.dispose();
  null;
  this.state;
  this.state = {actions: this.icons.actions};
  if (!((e == null))) goto L_184;
  e;
  goto L_1a5;
  if (!((undefined.contentId === t.contentId))) goto L_2b1;
  if (!((e.actions === t.actions))) goto L_2b1;
  if (!((e.disabled === t.disabled))) goto L_2b1;
  if (((e.onSelect === t.onSelect))) goto L_39c;
  null;
  this.state;
  this.state = {generation: (this.state.generation + 1)};
  this.bindSelection(this.state.generation);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=native_menu/src/NativeContextMenu
// locals: this
function {
  this = this;
  this.icons.dispose();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=native_menu/src/NativeContextMenu
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=native_menu/src/NativeContextMenu
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=2 bc=2345B file=native_menu/src/NativeContextMenu
// locals: s, n, a, this
// closure: e, d, t, r, i, o
function {
  this = this;
  let a;
  let n;
  let s;
  if (!((this.viewModel.accessibilityId == null))) goto L_bf;
  this.viewModel.accessibilityId;
  if (!((this.viewModel.attributes == null))) goto L_9e;
  this.viewModel.attributes;
  goto L_bf;
  s = undefined.accessibilityId;
  if (!(!this.viewModel.disabled)) goto L_19b;
  if (!((this.viewModel.contentId.length > 0))) goto L_19b;
  n = (this.state.actions.length > 0);
  if (!(d.supportsIOSNativeContextMenu())) goto L_492;
  e.beginComponent(d.IOSNativeContextMenu, t, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  e.setViewModelProperty("actions", this.state.actions);
  e.setViewModelProperty("accessibilityId", s);
  e.setViewModelProperty("enabled", n);
  e.setViewModelProperty("generation", this.state.generation);
  e.setViewModelProperty("onSelect", this.handleSelection);
  e.setViewModelProperty("onDismiss", this.dismiss);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
  if (!((this.context == null))) goto L_4bc;
  this.context;
  goto L_4dd;
  a = undefined.nativeMenuViewFactory;
  if (!((undefined !== a))) goto L_811;
  if (!(r.supportsAndroidNativeContextMenu(a))) goto L_811;
  e.beginComponent(r.AndroidNativeContextMenu, i, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  e.setViewModelProperty("actions", this.state.actions);
  e.setViewModelProperty("accessibilityId", s);
  e.setViewModelProperty("enabled", n);
  e.setViewModelProperty("generation", this.state.generation);
  e.setViewModelProperty("onSelect", this.handleSelection);
  e.setViewModelProperty("onDismiss", this.dismiss);
  e.setViewModelProperty("viewFactory", a);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
  e.beginRender(o, undefined);
  e.setAttributes(this.viewModel.attributes);
  e.setAttributeString("accessibilityId", s);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=native_menu/src/NativeContextMenu
// args: e
// closure: i
function {
  return (e.id === i);
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=405B file=native_menu/src/NativeContextMenu
// args: i
// locals: o
// closure: this, e, t
function {
  let o;
  if ((this.isDestroyed())) goto L_c7;
  if (((e !== this.state.generation))) goto L_c7;
  if ((t.disabled)) goto L_c7;
  if (!((0 === t.contentId.length))) goto L_ca;
  return;
  o = t.actions.find(function <atom:0>);
  if (((undefined === o))) goto L_194;
  if ((o.disabled)) goto L_194;
  this.dismiss();
  t.onSelect(i);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=53B file=native_menu/src/NativeContextMenu
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.viewModel;
  this.handleSelection = function <atom:0>;
  return;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=6 bc=448B file=native_menu/src/NativeContextMenu
// args: require, module, exports
// locals: e, t, i, o, s, n, r, d, a, NativeContextMenu, <class_fields_init>, NativeContextMenu#1
function {
  a = function a;
  let NativeContextMenu#1;
  let d;
  let r;
  let n;
  let s;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.supportsNativeContextMenu = undefined;
  exports.NativeContextMenu = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "PChut9HFTY0kkSTu");
  i = e.makeComponentPrototype(undefined, "iUs0--6pbclDf7RK");
  o = e.makeNodePrototype("view", undefined, "BhIvi2XR0nVDS4Aj");
  s = require("valdi_core/src/Component");
  n = require("./NativeMenuIcons");
  r = require("./AndroidNativeContextMenu");
  d = require("./IOSNativeContextMenu");
  exports.supportsNativeContextMenu = a;
  let NativeContextMenu;
  let <class_fields_init>;
  class NativeContextMenu extends s.StatefulComponent { ... }
  <proto:NativeContextMenu>.onViewModelUpdate = function <atom:0>;
  <proto:NativeContextMenu>.onDestroy = function <atom:0>;
  <proto:NativeContextMenu>.onRender = function <atom:0>;
  <proto:NativeContextMenu>.bindSelection = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeContextMenu>;
  NativeContextMenu = function <atom:0>;
  // close_loc <class_fields_init>
  NativeContextMenu#1 = function <atom:0>;
  exports.NativeContextMenu = NativeContextMenu#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=native_menu/src/NativeContextMenu
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
