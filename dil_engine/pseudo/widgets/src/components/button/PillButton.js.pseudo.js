// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=1448B file=widgets/src/components/button/PillButton
// locals: t, this
// closure: e, r, o, i
function {
  this = this;
  let t;
  t = this.viewModel;
  e.beginComponent(r.CoreButton, o, undefined, undefined);
  e.setViewModelProperty("icon", t.icon);
  e.setViewModelProperty("text", t.text);
  e.setViewModelProperty("loading", t.loading);
  e.setViewModelProperty("disabled", t.disabled);
  e.setViewModelProperty("onTap", t.onTap);
  e.setViewModelProperty("iconFlipRtl", t.iconFlipRtl);
  e.setViewModelProperty("accessibilityId", t.accessibilityId);
  e.setViewModelProperty("accessibilityLabel", t.accessibilityLabel);
  e.setViewModelProperty("sizing", r.CoreButtonSizing.SMALL);
  e.setViewModelProperty("minWidth", r.CoreButtonWidths.DYNAMIC_SMALL_MINIMUM);
  if (!(t.disabled)) goto L_47b;
  goto L_4c0;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("coloring", r.CoreButtonColoring.SECONDARY);
  if (!(t.selected)) goto L_57b;
  goto L_57c;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("foregroundColor", undefined);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/button/PillButton
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

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=288B file=widgets/src/components/button/PillButton
// args: require, module, exports
// locals: e, o, t, i, r, PillButton, <class_fields_init>, PillButton#1
function {
  let PillButton#1;
  let r;
  let i;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PillButton = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(["touchAreaExtension", 4], "ftgYRNQ52abUcNp2");
  t = require("valdi_core/src/Component");
  i = require("widgets/src/styles/semanticColors");
  r = require("./CoreButton");
  let PillButton;
  let <class_fields_init>;
  class PillButton extends t.Component { ... }
  <proto:PillButton>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PillButton>;
  PillButton = function <atom:0>;
  // close_loc <class_fields_init>
  PillButton#1 = function <atom:0>;
  exports.PillButton = PillButton#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/button/PillButton
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
