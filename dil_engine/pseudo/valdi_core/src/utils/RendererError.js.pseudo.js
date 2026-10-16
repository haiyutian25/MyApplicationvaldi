// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=66B file=valdi_core/src/utils/RendererError
// args: r, e, o
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(r);
  this.sourceError = e;
  this.lastRenderedNode = o;
  return this;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=111B file=valdi_core/src/utils/RendererError
// args: require, module, exports
// locals: RendererError, <class_fields_init>, RendererError#1
function {
  let RendererError#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RendererError = undefined;
  let RendererError;
  let <class_fields_init>;
  class RendererError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:RendererError>;
  RendererError = function <atom:0>;
  // close_loc <class_fields_init>
  RendererError#1 = function <atom:0>;
  exports.RendererError = RendererError#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/RendererError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
