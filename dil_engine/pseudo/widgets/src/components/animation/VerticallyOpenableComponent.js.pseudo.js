// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=124B file=widgets/src/components/animation/VerticallyOpenableComponent
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
  this.state = {height: this.targetHeight, animating: false};
  this.defaultDuration = 0.3;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=widgets/src/components/animation/VerticallyOpenableComponent
// locals: this
function {
  this = this;
  if (!(this.viewModel.isOpened)) goto L_49;
  return undefined;
  return 0;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=276B file=widgets/src/components/animation/VerticallyOpenableComponent
// closure: this
function {
  this.setState({animating: false});
  if (!(this.viewModel.isOpened)) goto L_c4;
  if (!((this.viewModel.onOpened == null))) goto L_bf;
  this.viewModel.onOpened;
  this.viewModel;
  goto L_113;
  // [栈深重同步 1 -> 2]
  goto L_113;
  // [栈深重同步 1 -> 0]
  if (!((this.viewModel.onClosed == null))) goto L_110;
  this.viewModel.onClosed;
  this.viewModel;
  goto L_113;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=449B file=widgets/src/components/animation/VerticallyOpenableComponent
// closure: this, i
function {
  if (!((this.viewModel.duration == null))) goto L_bc;
  this.viewModel.duration;
  if (!(this.viewModel.isOpened)) goto L_14d;
  goto L_192;
  // [栈深重同步 5 -> 4]
  this.setStateAnimatedPromise({height: this.targetHeight, animating: true}, {duration: this.defaultDuration, curve: i.AnimationCurve.EaseOut}).then(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=439B file=widgets/src/components/animation/VerticallyOpenableComponent
// args: e
// locals: this
// closure: i, n
function {
  this = this;
  if (!(e)) goto L_1b6;
  if (!((this.viewModel.isOpened !== e.isOpened))) goto L_1b6;
  clearTimeout(this.timer);
  this.timer = n.setTimeoutInterruptible(function <atom:0>);
  if (!(this.viewModel.isOpened)) goto L_167;
  if (!((this.viewModel.onOpen == null))) goto L_162;
  this.viewModel.onOpen;
  this.viewModel;
  goto L_1b6;
  // [栈深重同步 1 -> 2]
  goto L_1b6;
  // [栈深重同步 1 -> 0]
  if (!((this.viewModel.onClose == null))) goto L_1b3;
  this.viewModel.onClose;
  this.viewModel;
  goto L_1b6;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=473B file=widgets/src/components/animation/VerticallyOpenableComponent
// locals: this
// closure: e, t
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeNumber("height", this.state.height);
  e.setAttribute("slowClipping", this.state.animating);
  if (!((this.viewModel.overflow == null))) goto L_184;
  this.viewModel.overflow;
  e.setAttributeString("overflow", "visible");
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=widgets/src/components/animation/VerticallyOpenableComponent
// locals: this
function {
  this = this;
  if (!(this.timer)) goto L_50;
  clearTimeout(this.timer);
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=5 bc=309B file=widgets/src/components/animation/VerticallyOpenableComponent
// args: require, module, exports
// locals: e, t, i, o, n, VerticallyOpenableComponent, <class_fields_init>, VerticallyOpenableComponent#1
function {
  let VerticallyOpenableComponent#1;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.VerticallyOpenableComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "F-TGE2dvAjBXndZZ");
  i = require("valdi_core/src/AnimationOptions");
  o = require("valdi_core/src/Component");
  n = require("valdi_core/src/SetTimeout");
  let VerticallyOpenableComponent;
  let <class_fields_init>;
  class VerticallyOpenableComponent extends o.StatefulComponent { ... }
  <proto:VerticallyOpenableComponent>.targetHeight = function <atom:0>;
  <proto:VerticallyOpenableComponent>.onViewModelUpdate = function <atom:0>;
  <proto:VerticallyOpenableComponent>.onRender = function <atom:0>;
  <proto:VerticallyOpenableComponent>.onDestroy = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:VerticallyOpenableComponent>;
  VerticallyOpenableComponent = function <atom:0>;
  // close_loc <class_fields_init>
  VerticallyOpenableComponent#1 = function <atom:0>;
  exports.VerticallyOpenableComponent = VerticallyOpenableComponent#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/animation/VerticallyOpenableComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
