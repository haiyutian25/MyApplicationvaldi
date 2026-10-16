// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=62B file=dil_widgets/src/DILErrorBoundary
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

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=366B file=dil_widgets/src/DILErrorBoundary
// locals: o, this
// closure: r, s, e
function {
  this = this;
  let o;
  o = this.state.error;
  if (!((undefined === o))) goto L_7b;
  goto L_16d;
  // [栈深重同步 1 -> 0]
  if (!(this.viewModel.renderDiagnostic)) goto L_16d;
  r.beginComponent(s.DILInlineError, e, undefined, undefined);
  r.setViewModelProperty("error", o);
  r.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=250B file=dil_widgets/src/DILErrorBoundary
// args: r
// locals: e, this
// closure: d, a
function {
  this = this;
  let e;
  if (!(d(r))) goto L_b;
  return;
  e = a(r);
  this.viewModel.reportError(e);
  if (!(this.shouldLatchError())) goto L_f9;
  if (!((undefined === this.state.error))) goto L_f9;
  this.setState({error: e});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=144B file=dil_widgets/src/DILErrorBoundary
// locals: this
function {
  this = this;
  if ((this.viewModel.renderDiagnostic)) goto L_8f;
  return (true !== this.viewModel.recoverAfterError);
}

// fn d  args=1 vars=1 closure=2 cpool=0 bc=156B file=dil_widgets/src/DILErrorBoundary
// args: r
// closure: t, i
function {
  if ((t.isDILTransientRenderAbortError(r))) goto L_9b;
  if (!((r instanceof i.RendererError))) goto L_9b;
  return t.isDILTransientRenderAbortError(r.sourceError);
}

// fn a  args=1 vars=1 closure=2 cpool=0 bc=243B file=dil_widgets/src/DILErrorBoundary
// args: r
// closure: i, o
function {
  if (!((r instanceof i.RendererError))) goto L_9e;
  return o.DILDiagnosticError.wrapError(r.sourceError, {phase: "DIL render"});
  return o.DILDiagnosticError.wrapError(r, {phase: "DIL render"});
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=6 bc=328B file=dil_widgets/src/DILErrorBoundary
// args: require, module, exports
// locals: r, e, o, t, n, i, s, DILErrorBoundary, <class_fields_init>, DILErrorBoundary#1, d, a
function {
  d = function d;
  a = function a;
  let DILErrorBoundary#1;
  let s;
  let i;
  let n;
  let t;
  let o;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILErrorBoundary = undefined;
  r = require("valdi_core/src/JSX").jsx;
  e = r.makeComponentPrototype(undefined, "mNZSIin0DXMxmWFE");
  o = require("dil_compiler/src/DILError");
  t = require("dil_compiler/src/DILTransientRenderAbort");
  n = require("valdi_core/src/Component");
  i = require("valdi_core/src/utils/RendererError");
  s = require("./DILInlineError");
  let DILErrorBoundary;
  let <class_fields_init>;
  class DILErrorBoundary extends n.StatefulComponent { ... }
  <proto:DILErrorBoundary>.onRender = function <atom:0>;
  <proto:DILErrorBoundary>.onError = function <atom:0>;
  <proto:DILErrorBoundary>.shouldLatchError = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILErrorBoundary>;
  DILErrorBoundary = function <atom:0>;
  // close_loc <class_fields_init>
  DILErrorBoundary#1 = function <atom:0>;
  exports.DILErrorBoundary = DILErrorBoundary#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILErrorBoundary
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
