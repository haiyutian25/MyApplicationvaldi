// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=valdi_core/src/debugging/DefaultErrorBoundary
// closure: require
function {
  return require("./ErrorComponent");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=79B file=valdi_core/src/debugging/DefaultErrorBoundary
// closure: require
function {
  return Promise.resolve().then(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=valdi_core/src/debugging/DefaultErrorBoundary
// args: r
function {
  return r.ErrorComponent;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=62B file=valdi_core/src/debugging/DefaultErrorBoundary
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

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=259B file=valdi_core/src/debugging/DefaultErrorBoundary
// locals: o, this
// closure: r, a, e
function {
  this = this;
  let o;
  o = this.state.error;
  if (!(o)) goto L_da;
  r.beginComponent(a, e, undefined, undefined);
  r.setViewModelProperty("error", o);
  goto L_102;
  // [栈深重同步 1 -> 0]
  r.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=342B file=valdi_core/src/debugging/DefaultErrorBoundary
// args: r
// locals: this
// closure: i, u
function {
  this = this;
  if (!((r instanceof i.RendererError))) goto L_97;
  goto L_e1;
  // [栈深重同步 1 -> 0]
  u.onUncaughtError(r.message, r);
  if ((this.state.error)) goto L_155;
  this.setState({error: r});
  return;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=5 bc=473B file=valdi_core/src/debugging/DefaultErrorBoundary
// args: require, module, exports
// locals: r, e, o, t, n, s, i, a, u, DefaultErrorBoundary, <class_fields_init>, DefaultErrorBoundary#1
function {
  let DefaultErrorBoundary#1;
  let u;
  let a;
  let i;
  let s;
  let n;
  let t;
  let o;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DefaultErrorBoundary = undefined;
  r = require("valdi_core/src/JSX").jsx;
  e = r.makeComponentPrototype(undefined, "_SC25e846Ed4iHF4");
  o = require("../Component");
  t = require("../ValdiRuntimeProvider");
  n = require("../WithLazyPromise");
  s = require("../utils/LazyPromise");
  i = require("../utils/RendererError");
  a = n.withLazyPromise(s.lazyPromise(function <atom:0>).then(function <atom:0>));
  u = t.getValdiRuntime();
  let DefaultErrorBoundary;
  let <class_fields_init>;
  class DefaultErrorBoundary extends o.StatefulComponent { ... }
  <proto:DefaultErrorBoundary>.onRender = function <atom:0>;
  <proto:DefaultErrorBoundary>.onError = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DefaultErrorBoundary>;
  DefaultErrorBoundary = function <atom:0>;
  // close_loc <class_fields_init>
  DefaultErrorBoundary#1 = function <atom:0>;
  exports.DefaultErrorBoundary = DefaultErrorBoundary#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/DefaultErrorBoundary
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
