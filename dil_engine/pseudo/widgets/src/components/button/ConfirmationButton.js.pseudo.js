// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=1098B file=widgets/src/components/button/ConfirmationButton
// locals: t, this
// closure: e, i, o
function {
  this = this;
  let t;
  t = this.viewModel;
  e.beginComponent(i.CoreButton, o, undefined, undefined);
  e.setViewModelProperty("text", t.text);
  e.setViewModelProperty("loading", t.loading);
  e.setViewModelProperty("disabled", t.disabled);
  e.setViewModelProperty("onTap", t.onTap);
  e.setViewModelProperty("accessibilityId", t.accessibilityId);
  e.setViewModelProperty("accessibilityLabel", t.accessibilityLabel);
  e.setViewModelProperty("sizing", i.CoreButtonSizing.XL);
  e.setViewModelProperty("width", i.CoreButtonWidths.FIXED_XL_212);
  if (!(t.disabled)) goto L_3d9;
  goto L_41e;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("coloring", i.CoreButtonColoring.PRIMARY);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/button/ConfirmationButton
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

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=268B file=widgets/src/components/button/ConfirmationButton
// args: require, module, exports
// locals: e, o, t, i, ConfirmationButton, <class_fields_init>, ConfirmationButton#1
function {
  let ConfirmationButton#1;
  let i;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ConfirmationButton = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "fqynQ2DCo0HDd9ac");
  t = require("valdi_core/src/Component");
  i = require("./CoreButton");
  let ConfirmationButton;
  let <class_fields_init>;
  class ConfirmationButton extends t.Component { ... }
  <proto:ConfirmationButton>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ConfirmationButton>;
  ConfirmationButton = function <atom:0>;
  // close_loc <class_fields_init>
  ConfirmationButton#1 = function <atom:0>;
  exports.ConfirmationButton = ConfirmationButton#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/button/ConfirmationButton
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
