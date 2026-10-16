// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=dil_widgets/src/widgets/Transition
// args: e
function {
  e.Height = "height";
  e.Width = "width";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=584B file=dil_widgets/src/widgets/Transition
// closure: e, t, this, r, s
function {
  e.beginRender(t, undefined);
  if (!((this.viewModel.dimension === r.Width))) goto L_e5;
  goto L_109;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", s.container);
  e.setAttributes(this.baseViewAttributes);
  e.setAttribute("slowClipping", (true === this.viewModel.hideOverflow));
  if (!((this.viewModel.renderChildren == null))) goto L_21c;
  this.viewModel.renderChildren;
  this.viewModel;
  goto L_21f;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=1 bc=84B file=dil_widgets/src/widgets/Transition
// locals: this, this.active_func, new.target, arguments
// closure: e, t, r, s, <class_fields_init>
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
  this.animations = new Set();
  this.renderContent = function <atom:0>;
  return this;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=8B file=dil_widgets/src/widgets/Transition
// args: t, i
// closure: e
function {
  return (t !== e[i]);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=163B file=dil_widgets/src/widgets/Transition
// closure: r, this
function {
  r.completed = true;
  if (!((undefined !== r.token))) goto L_a2;
  this.animations.delete(r.token);
  return;
}

// fn <atom:0>  args=0 vars=6 closure=1 cpool=3 bc=996B file=dil_widgets/src/widgets/Transition
// locals: e, t, i, o, r, this
// closure: n
function {
  this = this;
  let r;
  let o;
  let i;
  let t;
  let e;
  e = this.viewModel.childIdentities;
  t = this.previousIdentities;
  this.previousIdentities = e;
  if (!((undefined === t))) goto L_e3;
  if (!((false === this.viewModel.preventInitialTransition))) goto L_119;
  goto L_119;
  // [栈深重同步 1 -> 0]
  if (((t.length !== e.length))) goto L_119;
  i = t.some(function <atom:0>);
  o = this.viewModel.animationOptions;
  if ((!i)) goto L_19f;
  if (!((undefined !== o))) goto L_1c9;
  if (!(("duration" in o))) goto L_1c9;
  if (!((0 === o.duration))) goto L_1c9;
  this.renderContent();
  return;
  r = {completed: false};
  null;
  o;
  r.token = this.renderer.animate({duration: 0.3, curve: n.AnimationCurve.EaseInOut, beginFromCurrentState: true, appearanceBehavior: {enterAttributes: n.AnimationAppearance.FADE, exitAttributes: n.AnimationAppearance.FADE}, completion: function <atom:0>}, this.renderContent);
  if ((r.completed)) goto L_3e3;
  this.animations.add(r.token);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=210B file=dil_widgets/src/widgets/Transition
// locals: e, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  for (const e of this.animations) {
    this.renderer.cancelAnimation(e);
  }
  this.animations.clear();
  super["onDestroy"].call(this);
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=4 bc=671B file=dil_widgets/src/widgets/Transition
// args: require, module, exports
// locals: e, t, i, n, o, r, Transition, <class_fields_init>, Transition#1, s
function {
  let s;
  let Transition#1;
  let o;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TransitionDimension = undefined;
  exports.DIL_V2_ANIMATION_PROPERTIES = undefined;
  exports.Transition = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "wJQK2NleyXbsylPC");
  i = require("dil_core/src/DILComponent");
  n = require("valdi_core/src/AnimationOptions");
  o = require("valdi_core/src/Style");
  if ((r)) goto L_f9;
  r = {};
  exports.TransitionDimension = {};
  !function <atom:0>({});
  exports.DIL_V2_ANIMATION_PROPERTIES = ["dimension", "enter", "exit", "forceCompositeLayer", "hideOverflow", "initial", "insertMethod", "itemAnchor", "layoutEnter", "layoutExit", "layoutMove", "preventInitialTransition"];
  let Transition;
  let <class_fields_init>;
  class Transition extends i.DILComponent { ... }
  <proto:Transition>.onRender = function <atom:0>;
  <proto:Transition>.onDestroy = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Transition>;
  Transition = function <atom:0>;
  // close_loc <class_fields_init>
  Transition#1 = function <atom:0>;
  exports.Transition = Transition#1;
  Transition#1.useRenderChildrenProperty = true;
  Transition#1.dilV2Properties = exports.DIL_V2_ANIMATION_PROPERTIES;
  // append([], 0, i.DIL_COMPONENT_PROPERTIES)
  i.DIL_COMPONENT_PROPERTIES;
  Transition#1.properties = [];
  s = {container: new o.Style({flexShrink: 0, minWidth: 0, minHeight: 0}), widthContainer: new o.Style({flexShrink: 0, minWidth: 0, minHeight: 0, alignSelf: "flex-start"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Transition
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
