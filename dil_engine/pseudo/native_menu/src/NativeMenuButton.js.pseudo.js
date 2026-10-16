// fn u  args=0 vars=0 closure=1 cpool=0 bc=72B file=native_menu/src/NativeMenuButton
// closure: r
function {
  return r.Device.isIOS();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=7 cpool=0 bc=2280B file=native_menu/src/NativeMenuButton
// locals: o, this
// closure: u, e, t, c, l, i, s
function {
  this = this;
  let o;
  if (!(u())) goto L_432;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", c.button);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttributeString("accessibilityValue", this.viewModel.accessibilityValue);
  e.setAttribute("actions", this.viewModel.actions);
  e.setAttributeString("foregroundColor", this.viewModel.foregroundColor);
  e.setAttributeString("iconName", this.viewModel.iconName);
  e.setAttributeFunction("onSelect", this.viewModel.onSelect);
  e.setAttributeString("title", this.viewModel.title);
  e.endRender();
  return;
  if (!((this.viewModel.foregroundColor == null))) goto L_4e1;
  this.viewModel.foregroundColor;
  o = l.resolveValdiUITheme().colors.text;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", c.button);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttributeString("accessibilityValue", this.viewModel.accessibilityValue);
  e.setAttributeFunction("onTap", this.viewModel.onFallbackTap);
  e.beginRender(s, undefined);
  e.setAttributeString("color", o);
  e.setAttributeStyle("style", c.label);
  if (!((this.viewModel.title == null))) goto L_894;
  this.viewModel.title;
  if (!(("plus" === this.viewModel.iconName))) goto L_88f;
  goto L_894;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("value", "...");
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=native_menu/src/NativeMenuButton
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

// fn <atom:0>  args=3 vars=16 closure=0 cpool=3 bc=620B file=native_menu/src/NativeMenuButton
// args: require, module, exports
// locals: e, t, i, s, o, r, n, l, u, NativeMenuButton, <class_fields_init>, NativeMenuButton#1, c
function {
  u = function u;
  let c;
  let NativeMenuButton#1;
  let l;
  let n;
  let r;
  let o;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.supportsNativeMenuButton = undefined;
  exports.NativeMenuButton = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["accessibilityCategory", "button", "iosClass", "ValdiNativeMenuButton"], "h2H4UjwJdnEZ7PpY");
  i = e.makeNodePrototype("view", ["accessibilityCategory", "button"], "xl5mwptIV8DBzSbG");
  s = e.makeNodePrototype("label", undefined, "gZW5oS8IKCQ5dv27");
  o = require("valdi_core/src/Component");
  r = require("valdi_core/src/Device");
  n = require("valdi_core/src/Style");
  l = require("valdi_ui_theme/src/ValdiUITheme");
  exports.supportsNativeMenuButton = u;
  let NativeMenuButton;
  let <class_fields_init>;
  class NativeMenuButton extends o.Component { ... }
  <proto:NativeMenuButton>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeMenuButton>;
  NativeMenuButton = function <atom:0>;
  // close_loc <class_fields_init>
  NativeMenuButton#1 = function <atom:0>;
  exports.NativeMenuButton = NativeMenuButton#1;
  c = {button: new n.Style({alignItems: "center", justifyContent: "center", minHeight: 44, minWidth: 44}), label: new n.Style({font: "system-bold 18", textAlign: "center"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=native_menu/src/NativeMenuButton
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
