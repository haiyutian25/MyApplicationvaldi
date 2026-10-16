// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/Component
// args: e, t, s
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.renderer = e;
  this.viewModel = t;
  this.context = s;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/Component
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/Component
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/Component
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=valdi_core/src/Component
// args: e
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=valdi_core/src/Component
// locals: this
function {
  this = this;
  this.renderer.renderComponent(this, undefined);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=85B file=valdi_core/src/Component
// args: e
// locals: this
function {
  this = this;
  if (!(!!e)) goto L_54;
  this.renderer.registerComponentDisposable(this, e);
  return true;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=111B file=valdi_core/src/Component
// args: e
// locals: this
function {
  this = this;
  e.forEach(this.registerDisposable.bind(this));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=valdi_core/src/Component
// args: e
// locals: this
function {
  this = this;
  if (!(e)) goto L_2d;
  this.registerDisposable(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=10B file=valdi_core/src/Component
// closure: o
function {
  clearTimeout(o);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=1 bc=89B file=valdi_core/src/Component
// args: e, t
// locals: o, this
// closure: s
function {
  this = this;
  let o;
  o = s.setTimeoutInterruptible(e, t);
  this.registerDisposable(function <atom:0>);
  return o;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=42B file=valdi_core/src/Component
// args: e, t
// locals: this
function {
  this = this;
  this.animatePromise(e, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=51B file=valdi_core/src/Component
// args: t
// closure: e, s
function {
  if (!((e.completion == null))) goto L_2b;
  e.completion;
  e;
  goto L_2f;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, t);
  s();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=91B file=valdi_core/src/Component
// args: s
// closure: e, this, t
function {
  null;
  e;
  this.renderer.animate({completion: function <atom:0>}, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=14B file=valdi_core/src/Component
// args: e, t
// locals: this
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=79B file=valdi_core/src/Component
// args: e, s
// locals: this
// closure: t
function {
  this = this;
  return new t.CancellableAnimationPromise(this.renderer, e, s);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=valdi_core/src/Component
// locals: this
function {
  this = this;
  return !this.renderer.isComponentAlive(this);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/Component
// locals: this
function {
  this = this;
  return this.viewModel;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=394B file=valdi_core/src/Component
// args: t
// locals: s, this
// closure: e, o
function {
  this = this;
  let s;
  if (!(this.isDestroyed())) goto L_107;
  if (!(e.isLoggingEnabled)) goto L_105;
  if (!((this.constructor == null))) goto L_d6;
  this.constructor;
  goto L_f7;
  console.error(new Error("Can't call setState on a destroyed component '".concat(undefined.name, "'. This operation does nothing, but it signals a potential memory leak in your application. To resolve this issue, ensure you cancel all subscriptions and asynchronous tasks in the onDestroy method.")));
  return;
  s = o.mergePartial(t, this.state);
  if (!(s)) goto L_189;
  this.state = s;
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=42B file=valdi_core/src/Component
// args: e, t
// locals: this
function {
  this = this;
  this.setStateAnimatedPromise(e, t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=39B file=valdi_core/src/Component
// closure: this, t
function {
  this.setState(t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=289B file=valdi_core/src/Component
// args: t, s
// locals: this
// closure: e
function {
  this = this;
  if (!(this.isDestroyed())) goto L_f8;
  if (!(e.isLoggingEnabled)) goto L_cd;
  if (!((this.constructor == null))) goto L_a9;
  this.constructor;
  goto L_ca;
  console.error("Trying to call setStateAnimated on a destroyed component", undefined.name);
  return Promise.resolve();
  return this.animatePromise(s, function <atom:0>);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/Component
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

// fn <atom:0>  args=3 vars=13 closure=0 cpool=19 bc=403B file=valdi_core/src/Component
// args: require, module, exports
// locals: e, t, s, o, Component, <class_fields_init>, Component#1, StatefulComponent, <class_fields_init>#1, StatefulComponent#1
function {
  let StatefulComponent#1;
  let Component#1;
  let o;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Component = undefined;
  exports.StatefulComponent = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("./CancellableAnimationPromise");
  s = require("./SetTimeout");
  o = require("./utils/PartialUtils");
  require("valdi_tsx/src/JSX");
  let Component;
  let <class_fields_init>;
  class Component extends undefined { ... }
  <proto:Component>.onCreate = function <atom:0>;
  <proto:Component>.onRender = function <atom:0>;
  <proto:Component>.onDestroy = function <atom:0>;
  <proto:Component>.onViewModelUpdate = function <atom:0>;
  <proto:Component>.scheduleRender = function <atom:0>;
  <proto:Component>.registerDisposable = function <atom:0>;
  <proto:Component>.registerDisposables = function <atom:0>;
  <proto:Component>.maybeRegisterDisposable = function <atom:0>;
  <proto:Component>.setTimeoutDisposable = function <atom:0>;
  <proto:Component>.animate = function <atom:0>;
  <proto:Component>.animatePromise = function <atom:0>;
  <proto:Component>.createAnimation = function <atom:0>;
  <proto:Component>.isDestroyed = function <atom:0>;
  <proto:Component>.toConsoleRepresentation = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Component>;
  Component = function <atom:0>;
  // close_loc <class_fields_init>
  Component#1 = function <atom:0>;
  exports.Component = Component#1;
  Component#1.disallowNullViewModel = true;
  let StatefulComponent;
  let <class_fields_init>#1;
  class StatefulComponent extends Component#1 { ... }
  <proto:StatefulComponent>.setState = function <atom:0>;
  <proto:StatefulComponent>.setStateAnimated = function <atom:0>;
  <proto:StatefulComponent>.setStateAnimatedPromise = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:StatefulComponent>;
  StatefulComponent = function <atom:0>;
  // close_loc <class_fields_init>#1
  StatefulComponent#1 = function <atom:0>;
  exports.StatefulComponent = StatefulComponent#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Component
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
