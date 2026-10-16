// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=184B file=dil_compiler/src/DILTransientRenderAbort
// args: r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, DILTransientRenderAbortError
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r.message);
  if (!(<class_fields_init>)) goto L_43;
  <class_fields_init>.call(this);
  new new.target(r.message);
  this.diagnosticError = r;
  Object.setPrototypeOf(this, DILTransientRenderAbortError.prototype);
  this.name = "DILTransientRenderAbortError";
  return this;
}

// fn e  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_compiler/src/DILTransientRenderAbort
// args: e, t
// closure: r
function {
  return e.withProperty(r, t);   // tail call
}

// fn t  args=1 vars=1 closure=1 cpool=0 bc=44B file=dil_compiler/src/DILTransientRenderAbort
// args: e
// closure: r
function {
  return (true === e.getProperty(r));
}

// fn n  args=1 vars=1 closure=1 cpool=0 bc=6B file=dil_compiler/src/DILTransientRenderAbort
// args: r
// closure: DILTransientRenderAbortError
function {
  return (r instanceof DILTransientRenderAbortError);
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=4 bc=210B file=dil_compiler/src/DILTransientRenderAbort
// args: require, module, exports
// locals: r, DILTransientRenderAbortError, <class_fields_init>, DILTransientRenderAbortError#1, e, t, n
function {
  e = function e;
  t = function t;
  n = function n;
  let DILTransientRenderAbortError#1;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTransientRenderAbortError = undefined;
  exports.renderStateWithDILTransientRenderAbort = undefined;
  exports.isDILTransientRenderAbortEnabled = undefined;
  exports.isDILTransientRenderAbortError = undefined;
  r = Symbol("DIL_TRANSIENT_RENDER_ABORT_ENABLED");
  let DILTransientRenderAbortError;
  let <class_fields_init>;
  class DILTransientRenderAbortError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:DILTransientRenderAbortError>;
  DILTransientRenderAbortError = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILTransientRenderAbortError
  DILTransientRenderAbortError#1 = function <atom:0>;
  exports.DILTransientRenderAbortError = DILTransientRenderAbortError#1;
  exports.renderStateWithDILTransientRenderAbort = e;
  exports.isDILTransientRenderAbortEnabled = t;
  exports.isDILTransientRenderAbortError = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILTransientRenderAbort
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
