// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=161B file=valdi_core/src/EntryPointComponent
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, d
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
  this.rootConstructor = undefined;
  this.rootPrototype = d.jsx.makeComponentPrototype(undefined, undefined);
  this.rootComponent = undefined;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=74B file=valdi_core/src/EntryPointComponent
// locals: this
function {
  this = this;
  this.renderer.addObserver(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=74B file=valdi_core/src/EntryPointComponent
// locals: this
function {
  this = this;
  this.renderer.removeObserver(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=valdi_core/src/EntryPointComponent
// closure: this
function {
  this.renderRootComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=276B file=valdi_core/src/EntryPointComponent
// locals: this
// closure: o, p, e
function {
  this = this;
  if (!(this.viewModel.enableErrorBoundary)) goto L_ee;
  o.beginComponent(p.DefaultErrorBoundary, e, undefined, undefined);
  o.setUnnamedSlot(function <atom:0>);
  goto L_113;
  // [栈深重同步 1 -> 0]
  this.renderRootComponent();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=208B file=valdi_core/src/EntryPointComponent
// args: o, e
// locals: t, n, this
function {
  this = this;
  let n;
  let t;
  t = this.rootComponent;
  if (!(!t)) goto L_65;
  throw new Error("Could not resolve component to call ".concat(o));
  n = t[o];
  if (!(!n)) goto L_a5;
  throw new Error("Could not resolve function ".concat(o));
  return n.apply(t, e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=valdi_core/src/EntryPointComponent
// args: o
// locals: this
function {
  this = this;
  this.rootComponent = o;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=valdi_core/src/EntryPointComponent
// args: o
// locals: this
function {
  this = this;
  this.rootComponent = undefined;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=623B file=valdi_core/src/EntryPointComponent
// locals: o, e, this
// closure: d
function {
  this = this;
  let e;
  let o;
  o = this.viewModel;
  e = this.rootConstructor;
  if ((e)) goto L_8f;
  e = o.rootConstructorResolver();
  o.rootConstructorResolver();
  this.rootConstructor = e;
  e;
  d.jsx.beginComponent(e, this.rootPrototype, undefined, this);
  if ((d.jsx.hasContext())) goto L_1b8;
  d.jsx.setContext(o.rootContext);
  d.jsx.setViewModelFull(o.rootViewModel);
  d.jsx.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=500B file=valdi_core/src/EntryPointComponent
// locals: e, this
// closure: i, s, o, l, t
function {
  this = this;
  let e;
  if (!(i.isVersionAtLeast(295))) goto L_77;
  goto L_78;
  // [栈深重同步 1 -> 0]
  e = undefined;
  if (((2 === e))) goto L_1f3;
  if (!((1 !== e))) goto L_d2;
  if ((!this.viewModel.daemonClientManager)) goto L_1f3;
  o.beginComponent(l.DebugConsole, t, undefined, undefined);
  o.setViewModelProperty("daemonClientManager", this.viewModel.daemonClientManager);
  o.setViewModelProperty("showWithoutReloader", (1 === e));
  o.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=3 closure=6 cpool=0 bc=322B file=valdi_core/src/EntryPointComponent
// args: i, s, d
// closure: o, EntryPointComponent, n, e, t, r
function {
  o.beginComponent(EntryPointComponent, n, undefined, i);
  o.setViewModelProperty("rootConstructorResolver", e);
  o.setViewModelProperty("enableErrorBoundary", t);
  o.setViewModelProperty("daemonClientManager", r);
  o.setViewModelProperty("rootViewModel", s);
  o.setViewModelProperty("rootContext", d);
  o.endComponent();
  return;
}

// fn C  args=3 vars=3 closure=3 cpool=1 bc=3B file=valdi_core/src/EntryPointComponent
// args: e, t, r
// closure: o, EntryPointComponent, n
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=10 bc=499B file=valdi_core/src/EntryPointComponent
// args: require, module, exports
// locals: o, e, t, n, r, i, s, d, l, p, EntryPointComponent, <class_fields_init>, EntryPointComponent#1, C
function {
  C = function C;
  let EntryPointComponent#1;
  let p;
  let l;
  let d;
  let s;
  let i;
  let r;
  let n;
  let t;
  let e;
  let o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.EntryPointComponent = undefined;
  exports.makeEntryPointRenderFunction = undefined;
  o = require("valdi_core/src/JSX").jsx;
  e = o.makeComponentPrototype(undefined, "YM0UDf7JMJMjckzV");
  t = o.makeComponentPrototype(undefined, "qADp4EPcwdwNIR1v");
  n = o.makeComponentPrototype(undefined, "0XWuEZtDKRfwt2-3");
  r = require("./Component");
  i = require("./CompilerIntrinsics");
  s = require("./ValdiRuntimeProvider");
  d = require("./JSXBootstrap");
  l = require("./debugging/DebugConsole");
  p = require("./debugging/DefaultErrorBoundary");
  let EntryPointComponent;
  let <class_fields_init>;
  class EntryPointComponent extends r.Component { ... }
  <proto:EntryPointComponent>.onCreate = function <atom:0>;
  <proto:EntryPointComponent>.onDestroy = function <atom:0>;
  <proto:EntryPointComponent>.onRender = function <atom:0>;
  <proto:EntryPointComponent>.forwardCall = function <atom:0>;
  <proto:EntryPointComponent>.onComponentDidCreate = function <atom:0>;
  <proto:EntryPointComponent>.onComponentWillDestroy = function <atom:0>;
  <proto:EntryPointComponent>.renderRootComponent = function <atom:0>;
  <proto:EntryPointComponent>.onRootElementWillEndRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:EntryPointComponent>;
  EntryPointComponent = function <atom:0>;
  // close_loc <class_fields_init>
  EntryPointComponent#1 = function <atom:0>;
  exports.EntryPointComponent = EntryPointComponent#1;
  exports.makeEntryPointRenderFunction = C;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/EntryPointComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
