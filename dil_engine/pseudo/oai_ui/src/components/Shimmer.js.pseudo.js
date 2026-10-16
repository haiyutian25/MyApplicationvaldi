// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=oai_ui/src/components/Shimmer
// closure: this
function {
  this.hasCompletedLayout = true;
  this.startAnimationIfReady();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=oai_ui/src/components/Shimmer
// closure: this
function {
  this.hasNativeView = true;
  this.startAnimationIfReady();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=133B file=oai_ui/src/components/Shimmer
// closure: this
function {
  this.hasNativeView = false;
  this.stopAnimation();
  this.container.setAttribute("opacity", 1);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=3 bc=171B file=oai_ui/src/components/Shimmer
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, a
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
  this.container = new a.ElementRef();
  this.hasCompletedLayout = false;
  this.hasNativeView = false;
  this.handleLayoutComplete = function <atom:0>;
  this.handleViewCreated = function <atom:0>;
  this.handleViewDestroyed = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=743B file=oai_ui/src/components/Shimmer
// locals: this
// closure: t, e, s
function {
  this = this;
  t.beginRender(e, undefined);
  t.setAttributeRef(this.container);
  t.setAttributeStyle("style", s.container);
  t.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  t.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  t.setAttributeFunction("onLayoutComplete", this.handleLayoutComplete);
  t.setAttributeFunction("onViewCreate", this.handleViewCreated);
  t.setAttributeFunction("onViewDestroy", this.handleViewDestroyed);
  t.renderUnnamedSlot(this);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=225B file=oai_ui/src/components/Shimmer
// locals: this
function {
  this = this;
  if (!(this.viewModel.enabled)) goto L_6e;
  goto L_e0;
  // [栈深重同步 1 -> 0]
  this.stopAnimation();
  this.container.setAttribute("opacity", 1);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=oai_ui/src/components/Shimmer
// locals: this
function {
  this = this;
  this.stopAnimation();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=191B file=oai_ui/src/components/Shimmer
// locals: this
function {
  this = this;
  if (!(!this.isDestroyed())) goto L_be;
  if (!(this.viewModel.enabled)) goto L_be;
  if (!(this.hasCompletedLayout)) goto L_be;
  return this.hasNativeView;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=123B file=oai_ui/src/components/Shimmer
// locals: this
function {
  this = this;
  if (!(this.canAnimate())) goto L_7a;
  if (!((undefined === this.animation))) goto L_7a;
  this.animateOpacity(0.4);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=99B file=oai_ui/src/components/Shimmer
// locals: t, this
function {
  this = this;
  let t;
  t = this.animation;
  this.animation = undefined;
  if (!((t == null))) goto L_3e;
  t;
  goto L_62;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=77B file=oai_ui/src/components/Shimmer
// closure: this, t
function {
  this.container.setAttribute("opacity", t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=147B file=oai_ui/src/components/Shimmer
// args: i
// closure: this, e, t
function {
  if (!((this.animation !== e))) goto L_29;
  return;
  this.animation = undefined;
  if (!(!i)) goto L_92;
  if (!(this.canAnimate())) goto L_92;
  if (!((1 === t))) goto L_8e;
  goto L_8f;
  // [栈深重同步 3 -> 2]
  this.animateOpacity(1);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=3 bc=144B file=oai_ui/src/components/Shimmer
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.createAnimation({duration: 0.8}, function <atom:0>);
  this.animation = e;
  e.start().then(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=8 bc=405B file=oai_ui/src/components/Shimmer
// args: require, module, exports
// locals: t, e, i, a, n, Shimmer, <class_fields_init>, Shimmer#1, s
function {
  let s;
  let Shimmer#1;
  let n;
  let a;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Shimmer = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", undefined, "iNg43OnzAzUU_awn");
  i = require("valdi_core/src/Component");
  a = require("valdi_core/src/ElementRef");
  n = require("valdi_core/src/Style");
  let Shimmer;
  let <class_fields_init>;
  class Shimmer extends i.Component { ... }
  <proto:Shimmer>.onRender = function <atom:0>;
  <proto:Shimmer>.onViewModelUpdate = function <atom:0>;
  <proto:Shimmer>.onDestroy = function <atom:0>;
  <proto:Shimmer>.canAnimate = function <atom:0>;
  <proto:Shimmer>.startAnimationIfReady = function <atom:0>;
  <proto:Shimmer>.stopAnimation = function <atom:0>;
  <proto:Shimmer>.animateOpacity = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Shimmer>;
  Shimmer = function <atom:0>;
  // close_loc <class_fields_init>
  Shimmer#1 = function <atom:0>;
  exports.Shimmer = Shimmer#1;
  s = {container: new n.Style({accessibilityNavigation: "leaf", width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Shimmer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
