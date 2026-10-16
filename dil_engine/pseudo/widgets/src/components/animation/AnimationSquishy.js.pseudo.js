// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=68B file=widgets/src/components/animation/AnimationSquishy
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

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=112B file=widgets/src/components/animation/AnimationSquishy
// closure: this
function {
  this.setStateAnimated({progress: 1}, this.viewModel.animationOptions);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=134B file=widgets/src/components/animation/AnimationSquishy
// locals: e, this
// closure: s
function {
  this = this;
  let e;
  if (!((this.viewModel == null))) goto L_2f;
  this.viewModel;
  goto L_50;
  e = undefined.delayMs;
  this.timer = s.setTimeoutInterruptible(function <atom:0>, e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=widgets/src/components/animation/AnimationSquishy
// locals: this
function {
  this = this;
  if (!(this.timer)) goto L_50;
  clearTimeout(this.timer);
  return;
}

// fn <atom:0>  args=0 vars=7 closure=2 cpool=0 bc=794B file=widgets/src/components/animation/AnimationSquishy
// locals: i, s, r, o, n, a, this
// closure: e, t
function {
  this = this;
  let a;
  let n;
  let o;
  let r;
  let s;
  let i;
  i = ("grow" === this.viewModel.direction);
  s = this.state.progress;
  if (!(i)) goto L_af;
  goto L_b4;
  // [栈深重同步 1 -> 0]
  r = (1 - s);
  o = (1 - r);
  if (!((this.viewModel == null))) goto L_e6;
  this.viewModel;
  goto L_107;
  if (!((undefined.tiltX == null))) goto L_10d;
  undefined.tiltX;
  n = 0;
  if (!((this.viewModel == null))) goto L_13a;
  this.viewModel;
  goto L_15b;
  if (!((undefined.tiltY == null))) goto L_161;
  undefined.tiltY;
  a = 0;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", this.viewModel.style);
  e.setAttributeNumber("scaleX", r);
  e.setAttributeNumber("scaleY", r);
  e.setAttributeNumber("translationX", (o * n));
  e.setAttributeNumber("translationY", (o * a));
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=4 bc=289B file=widgets/src/components/animation/AnimationSquishy
// args: require, module, exports
// locals: e, t, i, s, AnimationSquishy, <class_fields_init>, AnimationSquishy#1
function {
  let AnimationSquishy#1;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AnimationSquishy = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "1xRGh1uE7dyWNe6G");
  i = require("valdi_core/src/Component");
  s = require("valdi_core/src/SetTimeout");
  let AnimationSquishy;
  let <class_fields_init>;
  class AnimationSquishy extends i.StatefulComponent { ... }
  <proto:AnimationSquishy>.onCreate = function <atom:0>;
  <proto:AnimationSquishy>.onDestroy = function <atom:0>;
  <proto:AnimationSquishy>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AnimationSquishy>;
  AnimationSquishy = function <atom:0>;
  // close_loc <class_fields_init>
  AnimationSquishy#1 = function <atom:0>;
  exports.AnimationSquishy = AnimationSquishy#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/animation/AnimationSquishy
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
