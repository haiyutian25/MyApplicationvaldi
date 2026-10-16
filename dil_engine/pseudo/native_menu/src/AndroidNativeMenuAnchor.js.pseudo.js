// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=native_menu/src/AndroidNativeMenuAnchor
// args: t
// closure: e
function {
  return (t.id === e);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=333B file=native_menu/src/AndroidNativeMenuAnchor
// args: e
// locals: t
// closure: this
function {
  let t;
  if ((this.settled)) goto L_52;
  if (!(this.isDestroyed())) goto L_55;
  return;
  t = this.viewModel.actions.find(function <atom:0>);
  if (((undefined === t))) goto L_14c;
  if ((t.disabled)) goto L_14c;
  this.settled = true;
  this.viewModel.onSelect(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=173B file=native_menu/src/AndroidNativeMenuAnchor
// closure: this
function {
  if ((this.settled)) goto L_ac;
  if ((this.isDestroyed())) goto L_ac;
  this.settled = true;
  this.viewModel.onDismiss();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=2 bc=91B file=native_menu/src/AndroidNativeMenuAnchor
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
  this.settled = false;
  this.select = function <atom:0>;
  this.dismiss = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=471B file=native_menu/src/AndroidNativeMenuAnchor
// locals: this
// closure: e, t, o
function {
  this = this;
  e.beginRenderWithViewFactory(t, this.viewModel.viewFactory, undefined);
  e.setAttributeStyle("style", o);
  e.setAttribute("actions", this.viewModel.actions);
  e.setAttributeFunction("onSelect", this.select);
  e.setAttributeFunction("onDismiss", this.dismiss);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=385B file=native_menu/src/AndroidNativeMenuAnchor
// args: require, module, exports
// locals: e, t, i, s, AndroidNativeMenuAnchor, <class_fields_init>, AndroidNativeMenuAnchor#1, o
function {
  let o;
  let AndroidNativeMenuAnchor#1;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AndroidNativeMenuAnchor = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", undefined, "KwizsidDZLDl5Ifq");
  i = require("valdi_core/src/Component");
  s = require("valdi_core/src/Style");
  let AndroidNativeMenuAnchor;
  let <class_fields_init>;
  class AndroidNativeMenuAnchor extends i.Component { ... }
  <proto:AndroidNativeMenuAnchor>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AndroidNativeMenuAnchor>;
  AndroidNativeMenuAnchor = function <atom:0>;
  // close_loc <class_fields_init>
  AndroidNativeMenuAnchor#1 = function <atom:0>;
  exports.AndroidNativeMenuAnchor = AndroidNativeMenuAnchor#1;
  o = new s.Style({allowReuse: false, position: "absolute", left: 0, top: 0, width: "100%", height: "100%", touchEnabled: false, accessibilityNavigation: "ignored"});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=native_menu/src/AndroidNativeMenuAnchor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
