// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=62B file=valdi_core/src/WithLazyPromise
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
  this.state = {};
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=valdi_core/src/WithLazyPromise
// args: e
// closure: this
function {
  this.onPromiseResolved(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=valdi_core/src/WithLazyPromise
// args: e
// closure: this
function {
  this.onPromiseFailed(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=2 bc=230B file=valdi_core/src/WithLazyPromise
// locals: this
// closure: s
function {
  this = this;
  if (!((undefined === s.value))) goto L_98;
  goto L_e5;
  // [栈深重同步 1 -> 0]
  this.setState({ctor: s.value});
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=357B file=valdi_core/src/WithLazyPromise
// locals: t, this
// closure: e, o
function {
  this = this;
  let t;
  t = this.state.ctor;
  if (!(t)) goto L_164;
  e.beginComponent(t, o, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  e.setViewModelProperty("children", this.viewModel.children);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=88B file=valdi_core/src/WithLazyPromise
// args: e
// locals: this
function {
  this = this;
  if ((this.isDestroyed())) goto L_57;
  this.setState({ctor: e});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=158B file=valdi_core/src/WithLazyPromise
// args: e
// locals: this
// closure: r
function {
  this = this;
  if ((this.isDestroyed())) goto L_9d;
  this.renderer.onUncaughtError("LazyPromise failed to resolve", r.toError(e), this);
  return;
}

// fn s  args=1 vars=3 closure=4 cpool=5 bc=90B file=valdi_core/src/WithLazyPromise
// args: s
// locals: LazyPromiseComponent, <class_fields_init>
// closure: e, o, r, t
function {
  let LazyPromiseComponent;
  let <class_fields_init>;
  class LazyPromiseComponent extends t.StatefulComponent { ... }
  <proto:LazyPromiseComponent>.onCreate = function <atom:0>;
  <proto:LazyPromiseComponent>.onRender = function <atom:0>;
  <proto:LazyPromiseComponent>.onPromiseResolved = function <atom:0>;
  <proto:LazyPromiseComponent>.onPromiseFailed = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LazyPromiseComponent>;
  LazyPromiseComponent = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=199B file=valdi_core/src/WithLazyPromise
// args: require, module, exports
// locals: e, o, t, r, s
function {
  s = function s;
  let r;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.withLazyPromise = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "c-1-Zg6etO_n2R5S");
  t = require("valdi_core/src/Component");
  r = require("valdi_core/src/utils/ErrorUtils");
  exports.withLazyPromise = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/WithLazyPromise
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
