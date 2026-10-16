// fn u  args=1 vars=1 closure=3 cpool=0 bc=277B file=native_menu/src/NativeMenu
// args: t
// closure: r, a, l
function {
  if (!(r.Device.isIOS())) goto L_c1;
  if (!(!r.Device.isWeb())) goto L_c1;
  if ((a.isVersionAtLeast(137))) goto L_114;
  if (!((t == null))) goto L_f2;
  t;
  goto L_113;
  return l.supportsAndroidNativeContextMenu(undefined.nativeMenuViewFactory);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=46B file=native_menu/src/NativeMenu
// args: t
// closure: this
function {
  return this.setState({actions: t});   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=216B file=native_menu/src/NativeMenu
// locals: t
// closure: this
function {
  let t;
  if (!(this.isDestroyed())) goto L_2d;
  return;
  t = (this.state.generation + 1);
  this.bindActions(t);
  this.setState({open: false, generation: t});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=80B file=native_menu/src/NativeMenu
// args: t
// closure: this
function {
  if (!((0 === t.state))) goto L_4f;
  this.openMenu();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=245B file=native_menu/src/NativeMenu
// closure: this
function {
  if (!(!this.isDestroyed())) goto L_f4;
  if (!(!this.viewModel.disabled)) goto L_f4;
  if (!((this.state.actions.length > 0))) goto L_f4;
  this.setState({open: true});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=native_menu/src/NativeMenu
// args: e
// closure: t
function {
  return (e.id === t);
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=498B file=native_menu/src/NativeMenu
// args: t
// locals: e, i
// closure: this
function {
  let i;
  let e;
  e = this.viewModel;
  if ((this.isDestroyed())) goto L_7a;
  if (!(e.disabled)) goto L_7d;
  return;
  i = e.actions.find(function <atom:0>);
  if (((undefined === i))) goto L_1f1;
  if ((i.disabled)) goto L_1f1;
  if (!((undefined !== e.onPrimaryAction))) goto L_150;
  goto L_1c8;
  // [栈深重同步 1 -> 0]
  if (!(this.state.open)) goto L_1c8;
  this.setState({open: false});
  e.onSelect(t);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=5 bc=193B file=native_menu/src/NativeMenu
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, c
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
  this.state = {open: false, generation: 0, actions: []};
  this.icons = new c.NativeMenuIcons(function <atom:0>);
  this.dismiss = function <atom:0>;
  this.holdMenu = function <atom:0>;
  this.openMenu = function <atom:0>;
  this.handleSelection = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=native_menu/src/NativeMenu
// args: t
function {
  return (undefined !== t.iconAsset);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=55B file=native_menu/src/NativeMenu
// args: <atom:0>
// locals: t, e
function {
  t = <to_object>(<atom:0>).iconAsset;
  e = {};
  <to_object>(<atom:0>);
  {iconAsset: null};
  return e;
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=2 bc=1852B file=native_menu/src/NativeMenu
// args: t
// locals: e, i, s, this
// closure: u, r, a
function {
  this = this;
  let s;
  let i;
  let e;
  e = this.viewModel;
  if (!(u(this.context))) goto L_cb;
  if ((!r.Device.isIOS())) goto L_cb;
  i = a.isVersionAtLeast(194);
  s = e.actions.some(function <atom:0>);
  if (!(i)) goto L_210;
  if (!(s)) goto L_210;
  this.icons.update(e.actions);
  null;
  this.state;
  this.state = {actions: this.icons.actions};
  goto L_304;
  // [栈深重同步 1 -> 0]
  this.icons.dispose();
  null;
  this.state;
  if (!(s)) goto L_2d1;
  goto L_2f5;
  // [栈深重同步 3 -> 2]
  this.state = {actions: e.actions};
  {actions: e.actions};
  if (!(this.state.open)) goto L_3dc;
  if ((e.disabled)) goto L_39e;
  if (!((0 === e.actions.length))) goto L_3dc;
  null;
  this.state;
  this.state = {open: false};
  {open: false};
  if (!((undefined === e.onPrimaryAction))) goto L_433;
  if (!((t == null))) goto L_411;
  t;
  goto L_432;
  if (((undefined === undefined.onPrimaryAction))) goto L_5d9;
  if (!((t == null))) goto L_443;
  t;
  goto L_464;
  if (!((undefined.onPrimaryAction === e.onPrimaryAction))) goto L_650;
  if (!((t == null))) goto L_497;
  t;
  goto L_4b8;
  if (!((undefined.actions === e.actions))) goto L_650;
  if (!((t == null))) goto L_4eb;
  t;
  goto L_50c;
  if (!((undefined.onSelect === e.onSelect))) goto L_650;
  if (!((t == null))) goto L_53f;
  t;
  goto L_560;
  if (!((undefined.disabled === e.disabled))) goto L_650;
  if (!((t == null))) goto L_593;
  t;
  goto L_5b4;
  if (!((undefined.menuTitle === e.menuTitle))) goto L_650;
  if (!((undefined === t))) goto L_73b;
  goto L_73b;
  // [栈深重同步 1 -> 0]
  null;
  this.state;
  this.state = {open: false, generation: (this.state.generation + 1)};
  this.bindActions(this.state.generation);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=native_menu/src/NativeMenu
// locals: this
function {
  this = this;
  this.icons.dispose();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=247B file=native_menu/src/NativeMenu
// closure: this, t, e
function {
  if ((this.isDestroyed())) goto L_f6;
  if (((t !== this.state.generation))) goto L_f6;
  if ((e.disabled)) goto L_f6;
  this.dismiss();
  if (!((e.onPrimaryAction == null))) goto L_f3;
  e.onPrimaryAction;
  e;
  goto L_f6;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=112B file=native_menu/src/NativeMenu
// args: e
// closure: t, this
function {
  if (!((t === this.state.generation))) goto L_6f;
  this.handleSelection(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=2 bc=161B file=native_menu/src/NativeMenu
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.viewModel;
  if (!((undefined === e.onPrimaryAction))) goto L_88;
  this.primaryAction = undefined;
  this.selection = this.handleSelection;
  return;
  this.primaryAction = function <atom:0>;
  this.selection = function <atom:0>;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=445B file=native_menu/src/NativeMenu
// closure: t, h, s, c, this
function {
  t.beginComponent(h.AndroidNativeMenuAnchor, s, undefined, undefined);
  t.setViewModelProperty("viewFactory", c);
  t.setViewModelProperty("actions", this.state.actions);
  t.setViewModelProperty("onSelect", this.selection);
  t.setViewModelProperty("onDismiss", this.dismiss);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=11 cpool=1 bc=4246B file=native_menu/src/NativeMenu
// locals: n, d, c, this
// closure: t, h, s, r, a, u, e, b, l, i, o
function {
  this = this;
  let c;
  let d;
  let n;
  n = (undefined !== this.viewModel.onPrimaryAction);
  if ((!r.Device.isIOS())) goto L_c6;
  d = a.isVersionAtLeast(261);
  if ((!u(this.context))) goto L_fe;
  if (!(n)) goto L_452;
  if (!(!d)) goto L_452;
  t.beginRender(e, undefined);
  if (!(n)) goto L_183;
  goto L_1a7;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", b.unavailable);
  t.setAttributes(this.viewModel.attributes);
  t.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  t.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  t.setAttribute("accessibilityStateDisabled", (true === this.viewModel.disabled));
  if (!(this.viewModel.disabled)) goto L_3da;
  goto L_3fc;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onTap", this.primaryAction);
  t.renderUnnamedSlot(this);
  t.endRender();
  return;
  if (!((this.context == null))) goto L_47c;
  this.context;
  goto L_49d;
  c = undefined.nativeMenuViewFactory;
  if (!(l.supportsAndroidNativeContextMenu(c))) goto L_9c5;
  if (!((undefined !== c))) goto L_9c5;
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", b.anchor);
  t.setAttributes(this.viewModel.attributes);
  t.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  t.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  t.setAttributeString("accessibilityValue", this.viewModel.accessibilityValue);
  t.setAttribute("accessibilityStateDisabled", (true === this.viewModel.disabled));
  if (!(this.viewModel.disabled)) goto L_7f1;
  goto L_83c;
  // [栈深重同步 4 -> 3]
  if (!(n)) goto L_81a;
  goto L_83c;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onTap", this.openMenu);
  if (!(n)) goto L_923;
  if (!(!this.viewModel.disabled)) goto L_923;
  if (!((this.state.actions.length > 0))) goto L_923;
  goto L_924;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onLongPress", undefined);
  t.renderUnnamedSlot(this);
  if (!(this.state.open)) goto L_99b;
  function <atom:0>();
  t.endRender();
  return;
  t.beginRender(o, String(this.state.generation));
  t.setAttributeStyle("style", b.anchor);
  t.setAttributes(this.viewModel.attributes);
  if (!(!n)) goto L_b92;
  if (!((this.viewModel.attributes == null))) goto L_b71;
  this.viewModel.attributes;
  goto L_b92;
  t.setAttribute("allowReuse", undefined.allowReuse);
  t.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  t.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  t.setAttributeString("accessibilityValue", this.viewModel.accessibilityValue);
  t.setAttribute("accessibilityStateDisabled", (true === this.viewModel.disabled));
  t.setAttribute("iosClass", "ValdiNativeMenuAnchorView");
  if (!(this.viewModel.disabled)) goto L_dfe;
  goto L_e41;
  // [栈深重同步 4 -> 3]
  t.setAttribute("actions", this.state.actions);
  t.setAttributeFunction("onSelect", this.selection);
  if (!(a.isVersionAtLeast(261))) goto L_f9f;
  if (!(this.viewModel.disabled)) goto L_f2e;
  goto L_f50;
  // [栈深重同步 4 -> 3]
  goto L_fa0;
  // [栈深重同步 3 -> 2]
  t.setAttributes({});
  if (!(a.isVersionAtLeast(289))) goto L_1040;
  goto L_1041;
  // [栈深重同步 3 -> 2]
  t.setAttributes({});
  t.renderUnnamedSlot(this);
  t.endRender();
  return;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=6 bc=703B file=native_menu/src/NativeMenu
// args: require, module, exports
// locals: t, e, i, s, o, n, a, r, d, c, l, h, u, NativeMenu, <class_fields_init>, NativeMenu#1, b
function {
  u = function u;
  let b;
  let NativeMenu#1;
  let h;
  let l;
  let c;
  let d;
  let r;
  let a;
  let n;
  let o;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.supportsNativeMenu = undefined;
  exports.NativeMenu = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", undefined, "l2rRHxPanhvTOjM7");
  i = t.makeNodePrototype("view", undefined, "ZLSSLcT3zmt-a1cw");
  s = t.makeComponentPrototype(undefined, "jqADbm9f7GlSTDz_");
  o = t.makeNodePrototype("custom-view", undefined, "aoloNY0UiNykAz2Y");
  n = require("valdi_core/src/Component");
  a = require("valdi_core/src/CompilerIntrinsics");
  r = require("valdi_core/src/Device");
  d = require("valdi_core/src/Style");
  c = require("./NativeMenuIcons");
  l = require("./AndroidNativeContextMenu");
  h = require("./AndroidNativeMenuAnchor");
  exports.supportsNativeMenu = u;
  let NativeMenu;
  let <class_fields_init>;
  class NativeMenu extends n.StatefulComponent { ... }
  <proto:NativeMenu>.onViewModelUpdate = function <atom:0>;
  <proto:NativeMenu>.onDestroy = function <atom:0>;
  <proto:NativeMenu>.bindActions = function <atom:0>;
  <proto:NativeMenu>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeMenu>;
  NativeMenu = function <atom:0>;
  // close_loc <class_fields_init>
  NativeMenu#1 = function <atom:0>;
  exports.NativeMenu = NativeMenu#1;
  b = {anchor: new d.Style({accessibilityCategory: "button", accessibilityNavigation: "leaf", minHeight: 44, width: "100%"}), unavailable: new d.Style({accessibilityStateDisabled: true, touchEnabled: false, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=native_menu/src/NativeMenu
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
