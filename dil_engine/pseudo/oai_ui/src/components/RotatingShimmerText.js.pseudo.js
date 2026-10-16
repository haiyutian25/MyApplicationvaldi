// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=146B file=oai_ui/src/components/RotatingShimmerText
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, s
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
  this.state = {index: 0};
  this.container = new s.ElementRef();
  this.generation = 0;
  this.opacity = 1;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=oai_ui/src/components/RotatingShimmerText
// locals: this
function {
  this = this;
  this.scheduleNext();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=oai_ui/src/components/RotatingShimmerText
// locals: this
function {
  this = this;
  this.cancelRotation();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=557B file=oai_ui/src/components/RotatingShimmerText
// args: e
// locals: t, this
// closure: d
function {
  this = this;
  let t;
  if (!((undefined === e))) goto L_b;
  return;
  t = !d(e.values, this.viewModel.values);
  if ((t)) goto L_14e;
  if (((e.intervalMs !== this.viewModel.intervalMs))) goto L_14e;
  if (!((e.enabled !== this.viewModel.enabled))) goto L_22c;
  this.cancelRotation();
  this.opacity = 1;
  this.container.setAttribute("opacity", 1);
  if (!(t)) goto L_206;
  this.setState({index: 0});
  this.scheduleNext();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=633B file=oai_ui/src/components/RotatingShimmerText
// locals: o, this
// closure: e, t, r, i
function {
  this = this;
  let o;
  o = this.viewModel.values[this.state.index];
  if (!((undefined !== o))) goto L_278;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.container);
  e.setAttributeNumber("opacity", this.opacity);
  e.beginComponent(r.ShimmerText, i, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  e.setViewModelProperty("value", o);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=90B file=oai_ui/src/components/RotatingShimmerText
// closure: this
function {
  this.timer = undefined;
  if ((this.isDestroyed())) goto L_59;
  this.rotate();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=313B file=oai_ui/src/components/RotatingShimmerText
// locals: e, this
// closure: a
function {
  this = this;
  let e;
  if (!((this.viewModel.intervalMs == null))) goto L_50;
  this.viewModel.intervalMs;
  e = a;
  if (((false === this.viewModel.enabled))) goto L_138;
  if (((this.viewModel.values.length < 2))) goto L_138;
  if ((!Number.isFinite(e))) goto L_138;
  if (((e <= 0))) goto L_138;
  this.timer = setTimeout(function <atom:0>, e);
  setTimeout(function <atom:0>, e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=79B file=oai_ui/src/components/RotatingShimmerText
// closure: this, t
function {
  this.container.setAttribute("opacity", t);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=1 cpool=1 bc=583B file=oai_ui/src/components/RotatingShimmerText
// locals: e, t, i, o, this
// closure: h
function {
  this = this;
  let e;
  e = this.generation;
  let t;
  // close_loc t
  for (const t of [0, 1]) {
    let o;
    let i;
    this.opacity = t;
    i = this.createAnimation(h, function <atom:0>);
    this.animation = i;
    o = (await i.start());
    if (!((this.animation === i))) goto L_e9;
    this.animation = undefined;
    undefined;
    if ((o)) goto L_142;
    if ((this.isDestroyed())) goto L_142;
    if (!((e !== this.generation))) goto L_14a;
    return undefined; // async
    // [栈深重同步 0 -> 3]
    if (!((0 === t))) goto L_20e;
    this.setState({index: ((this.state.index + 1) % this.viewModel.values.length)});
    // close_loc t
  }
  // close_loc t
  this.scheduleNext();
  return undefined; // async
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=237B file=oai_ui/src/components/RotatingShimmerText
// locals: e, this
function {
  this = this;
  let e;
  this.generation = (this.generation ++);
  e = this.animation;
  this.animation = undefined;
  if (!((e == null))) goto L_6a;
  e;
  goto L_8e;
  undefined.cancel();
  if (!((undefined !== this.timer))) goto L_ec;
  clearTimeout(this.timer);
  this.timer = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=oai_ui/src/components/RotatingShimmerText
// args: e, i
// closure: t
function {
  return (e === t[i]);
}

// fn d  args=2 vars=2 closure=0 cpool=1 bc=49B file=oai_ui/src/components/RotatingShimmerText
// args: e, t
function {
  if (!((e.length === t.length))) goto L_30;
  return e.every(function <atom:0>);
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=10 bc=513B file=oai_ui/src/components/RotatingShimmerText
// args: require, module, exports
// locals: e, t, i, o, n, s, r, a, h, RotatingShimmerText, <class_fields_init>, RotatingShimmerText#1, d
function {
  d = function d;
  let RotatingShimmerText#1;
  let h;
  let a;
  let r;
  let s;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RotatingShimmerText = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["maxWidth", "100%"], "xvu0vYq_cs42wcm6");
  i = e.makeComponentPrototype(undefined, "G66842uVIvf7OR49");
  o = require("valdi_core/src/AnimationOptions");
  n = require("valdi_core/src/Component");
  s = require("valdi_core/src/ElementRef");
  r = require("./ShimmerText");
  a = 4250;
  h = {beginFromCurrentState: true, curve: o.AnimationCurve.EaseInOut, duration: 0.18};
  let RotatingShimmerText;
  let <class_fields_init>;
  class RotatingShimmerText extends n.StatefulComponent { ... }
  <proto:RotatingShimmerText>.onCreate = function <atom:0>;
  <proto:RotatingShimmerText>.onDestroy = function <atom:0>;
  <proto:RotatingShimmerText>.onViewModelUpdate = function <atom:0>;
  <proto:RotatingShimmerText>.onRender = function <atom:0>;
  <proto:RotatingShimmerText>.scheduleNext = function <atom:0>;
  <proto:RotatingShimmerText>.rotate = function <atom:0>;
  <proto:RotatingShimmerText>.cancelRotation = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:RotatingShimmerText>;
  RotatingShimmerText = function <atom:0>;
  // close_loc <class_fields_init>
  RotatingShimmerText#1 = function <atom:0>;
  exports.RotatingShimmerText = RotatingShimmerText#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/RotatingShimmerText
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
