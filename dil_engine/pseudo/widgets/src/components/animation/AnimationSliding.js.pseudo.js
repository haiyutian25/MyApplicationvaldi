// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=68B file=widgets/src/components/animation/AnimationSliding
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
  this.state = {progress: 0};
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=112B file=widgets/src/components/animation/AnimationSliding
// closure: this
function {
  this.setStateAnimated({progress: 1}, this.viewModel.animationOptions);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=134B file=widgets/src/components/animation/AnimationSliding
// locals: e, this
// closure: r
function {
  this = this;
  let e;
  if (!((this.viewModel == null))) goto L_2f;
  this.viewModel;
  goto L_50;
  e = undefined.delayMs;
  this.timer = r.setTimeoutInterruptible(function <atom:0>, e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=widgets/src/components/animation/AnimationSliding
// locals: this
function {
  this = this;
  if (!(this.timer)) goto L_50;
  clearTimeout(this.timer);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=0 bc=818B file=widgets/src/components/animation/AnimationSliding
// locals: i, r, o, this
// closure: s, e, t
function {
  this = this;
  let o;
  let r;
  let i;
  i = this.state.progress;
  if (!((this.viewModel == null))) goto L_9d;
  this.viewModel;
  goto L_be;
  if (!((undefined.startX == null))) goto L_c4;
  undefined.startX;
  if (!((this.viewModel == null))) goto L_ee;
  this.viewModel;
  goto L_10f;
  if (!((undefined.endX == null))) goto L_115;
  undefined.endX;
  r = s.lerp(0, 0, i);
  if (!((this.viewModel == null))) goto L_168;
  this.viewModel;
  goto L_189;
  if (!((undefined.startY == null))) goto L_18f;
  undefined.startY;
  if (!((this.viewModel == null))) goto L_1b9;
  this.viewModel;
  goto L_1da;
  if (!((undefined.endY == null))) goto L_1e0;
  undefined.endY;
  o = s.lerp(0, 0, i);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", this.viewModel.style);
  e.setAttributeNumber("translationX", r);
  e.setAttributeNumber("translationY", o);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=4 bc=301B file=widgets/src/components/animation/AnimationSliding
// args: require, module, exports
// locals: e, t, i, r, s, AnimationSliding, <class_fields_init>, AnimationSliding#1
function {
  let AnimationSliding#1;
  let s;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AnimationSliding = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "wsJX07bJeyrhev2_");
  i = require("valdi_core/src/Component");
  r = require("valdi_core/src/SetTimeout");
  s = require("foundation/src/number");
  let AnimationSliding;
  let <class_fields_init>;
  class AnimationSliding extends i.StatefulComponent { ... }
  <proto:AnimationSliding>.onCreate = function <atom:0>;
  <proto:AnimationSliding>.onDestroy = function <atom:0>;
  <proto:AnimationSliding>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AnimationSliding>;
  AnimationSliding = function <atom:0>;
  // close_loc <class_fields_init>
  AnimationSliding#1 = function <atom:0>;
  exports.AnimationSliding = AnimationSliding#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/animation/AnimationSliding
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
