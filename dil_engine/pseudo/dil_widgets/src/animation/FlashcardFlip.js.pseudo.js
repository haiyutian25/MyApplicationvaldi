// fn <atom:0>  args=0 vars=4 closure=3 cpool=0 bc=340B file=dil_widgets/src/animation/FlashcardFlip
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, r, n
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
  this.cardRef = new r.ElementRef();
  this.liftRef = new r.ElementRef();
  this.supported = n.supports3DTransforms();
  this.animations = new Set();
  this.runId = 0;
  this.busy = false;
  this.state = {back: (true === this.viewModel.flipped)};
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=494B file=dil_widgets/src/animation/FlashcardFlip
// args: t
// locals: this
function {
  this = this;
  if (!((undefined !== t))) goto L_1ed;
  if (!((t.activeKey === this.viewModel.activeKey))) goto L_1c8;
  if (!((true !== this.viewModel.reducedMotion))) goto L_1c8;
  if (!(this.supported)) goto L_1c8;
  if (!((t.flipped !== this.viewModel.flipped))) goto L_1ed;
  if (!(this.busy)) goto L_1a1;
  goto L_1ed;
  // [栈深重同步 1 -> 0]
  goto L_1ed;
  // [栈深重同步 1 -> 0]
  this.settle();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=80B file=dil_widgets/src/animation/FlashcardFlip
// locals: this
function {
  this = this;
  this.cancelAnimations();
  this.setBusy(false);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=134B file=dil_widgets/src/animation/FlashcardFlip
// args: t
// locals: this
function {
  this = this;
  if (!((this.busy !== t))) goto L_85;
  this.busy = t;
  if (!((this.viewModel.onInteractionChange == null))) goto L_81;
  this.viewModel.onInteractionChange;
  this.viewModel;
  goto L_85;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=160B file=dil_widgets/src/animation/FlashcardFlip
// locals: t, e, this
function {
  this = this;
  let t;
  this.runId = (this.runId ++);
  t = this.animations;
  this.animations = new Set();
  let e;
  for (const e of t) {
    e.cancel();
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=540B file=dil_widgets/src/animation/FlashcardFlip
// locals: this
function {
  this = this;
  this.cancelAnimations();
  if (!(this.supported)) goto L_9a;
  this.cardRef.setAttribute("rotationY", 0);
  this.liftRef.setAttribute("translationY", 0);
  this.liftRef.setAttribute("scaleX", 1);
  this.liftRef.setAttribute("scaleY", 1);
  this.setState({back: (true === this.viewModel.flipped)});
  this.setBusy(false);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=81B file=dil_widgets/src/animation/FlashcardFlip
// args: t
// locals: this
function {
  this = this;
  if (!(!this.isDestroyed())) goto L_50;
  return (t === this.runId);
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=0 bc=342B file=dil_widgets/src/animation/FlashcardFlip
// args: t, e, i, s
// locals: r, a, this
function {
  this = this;
  let a;
  let r;
  r = this.createAnimation({duration: e, controlPoints: i}, s);
  this.animations.add(r);
  a = (await r.start());
  this.animations.delete(r);
  if (!(!!this.isCurrent(t))) goto L_155;
  if ((!a)) goto L_155;
  this.settle();
  return false; // async
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=120B file=dil_widgets/src/animation/FlashcardFlip
// closure: this, i
function {
  this.cardRef.setAttribute("rotationY", ((i * Math.PI) / 2));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=77B file=dil_widgets/src/animation/FlashcardFlip
// closure: this
function {
  this.cardRef.setAttribute("rotationY", 0);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=3 bc=286B file=dil_widgets/src/animation/FlashcardFlip
// args: t, e
// locals: i, this
// closure: h, l, d, c
function {
  this = this;
  let i;
  if (!(e)) goto L_b;
  goto L_c;
  // [栈深重同步 1 -> 0]
  i = 1;
  if (!((await this.animateSegment(t, (h * l), d, function <atom:0>)))) goto L_11b;
  this.cardRef.setAttribute("rotationY", ((-i * Math.PI) / 2));
  this.setState({back: e});
  (await this.animateSegment(t, 0.24737126595489053, c, function <atom:0>));
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=2 bc=234B file=dil_widgets/src/animation/FlashcardFlip
// closure: this
function {
  this.liftRef.setAttribute("translationY", -3);
  this.liftRef.setAttribute("scaleX", 0.985);
  this.liftRef.setAttribute("scaleY", 0.985);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=231B file=dil_widgets/src/animation/FlashcardFlip
// closure: this
function {
  this.liftRef.setAttribute("translationY", 0);
  this.liftRef.setAttribute("scaleX", 1);
  this.liftRef.setAttribute("scaleY", 1);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=4 bc=101B file=dil_widgets/src/animation/FlashcardFlip
// args: t
// locals: this
// closure: o
function {
  this = this;
  if (!((await this.animateSegment(t, 0.15, o, function <atom:0>)))) goto L_62;
  (await this.animateSegment(t, 0.15, o, function <atom:0>));
  return undefined; // async
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=373B file=dil_widgets/src/animation/FlashcardFlip
// locals: t, this
function {
  this = this;
  let t;
  this.runId = (this.runId ++);
  t = (this.runId ++);
  this.setBusy(true);
  (await Promise.all([this.rotate(t, (true === this.viewModel.flipped)), this.lift(t)]));
  if (!(this.isCurrent(t))) goto L_172;
  this.setBusy(false);
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=826B file=dil_widgets/src/animation/FlashcardFlip
// locals: this
// closure: t, e, u, i
function {
  this = this;
  t.beginRender(e, undefined);
  t.setAttributeRef(this.liftRef);
  t.setAttributeStyle("style", u.content);
  t.beginRender(i, undefined);
  t.setAttributeRef(this.cardRef);
  t.setAttributeStyle("style", u.card);
  t.setAttributeString("boxShadow", this.viewModel.boxShadow);
  if (!(this.supported)) goto L_252;
  goto L_253;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("perspective", undefined);
  if (!((this.viewModel.renderFace == null))) goto L_2a3;
  this.viewModel.renderFace;
  this.viewModel;
  goto L_2e9;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, this.state.back);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=24 bc=676B file=dil_widgets/src/animation/FlashcardFlip
// args: require, module, exports
// locals: t, e, i, s, r, a, n, o, h, l, d, c, FlashcardFlip, <class_fields_init>, FlashcardFlip#1, u
function {
  let u;
  let FlashcardFlip#1;
  let c;
  let d;
  let l;
  let h;
  let o;
  let n;
  let a;
  let r;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FlashcardFlip = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", undefined, "1ZmJc2wTUPSvo9JZ");
  i = t.makeNodePrototype("view", undefined, "k6fvJzCWIO3UARvr");
  s = require("valdi_core/src/Component");
  r = require("valdi_core/src/ElementRef");
  a = require("valdi_core/src/Style");
  n = require("valdi_core/src/supports3DTransforms");
  o = [0.22, 0.61, 0.24, 1];
  h = 0.3;
  l = 0.17542911348369813;
  d = [0.3898498865188219, 0.37925929263697755, 0.6695252632047568, 0.7159973887792895];
  c = [0.15586111625017157, 0.6295760206439969, 0.3648331255105891, 1];
  let FlashcardFlip;
  let <class_fields_init>;
  class FlashcardFlip extends s.StatefulComponent { ... }
  <proto:FlashcardFlip>.onViewModelUpdate = function <atom:0>;
  <proto:FlashcardFlip>.onDestroy = function <atom:0>;
  <proto:FlashcardFlip>.setBusy = function <atom:0>;
  <proto:FlashcardFlip>.cancelAnimations = function <atom:0>;
  <proto:FlashcardFlip>.settle = function <atom:0>;
  <proto:FlashcardFlip>.isCurrent = function <atom:0>;
  <proto:FlashcardFlip>.animateSegment = function <atom:0>;
  <proto:FlashcardFlip>.rotate = function <atom:0>;
  <proto:FlashcardFlip>.lift = function <atom:0>;
  <proto:FlashcardFlip>.flip = function <atom:0>;
  <proto:FlashcardFlip>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FlashcardFlip>;
  FlashcardFlip = function <atom:0>;
  // close_loc <class_fields_init>
  FlashcardFlip#1 = function <atom:0>;
  exports.FlashcardFlip = FlashcardFlip#1;
  FlashcardFlip#1.dilV2Properties = ["activeKey", "flipped", "reducedMotion", "onInteractionChange"];
  u = {content: new a.Style({width: "100%", minWidth: 0, minHeight: 0}), card: new a.Style({width: "100%", minWidth: 0, minHeight: 0, borderRadius: 32})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/animation/FlashcardFlip
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
