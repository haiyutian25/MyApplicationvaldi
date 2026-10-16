// fn <atom:0>  args=3 vars=6 closure=2 cpool=0 bc=135B file=dil_widgets/src/elements_renderer/DILComponentContentElementRenderer
// args: n, t, r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, e
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(n, t);
  if (!(<class_fields_init>)) goto L_23;
  <class_fields_init>.call(this);
  new new.target(n, t);
  this.childrenMode = e.DILElementChildrenMode.PrimitiveText;
  this.primitiveTextProp = r;
  return this;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=165B file=dil_widgets/src/elements_renderer/DILComponentContentElementRenderer
// args: require, module, exports
// locals: e, n, DILComponentContentElementRenderer, <class_fields_init>, DILComponentContentElementRenderer#1
function {
  let DILComponentContentElementRenderer#1;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILComponentContentElementRenderer = undefined;
  e = require("dil_renderer/src/DILRenderer");
  n = require("./DILComponentElementRenderer");
  let DILComponentContentElementRenderer;
  let <class_fields_init>;
  class DILComponentContentElementRenderer extends n.DILComponentElementRenderer { ... }
  <class_fields_init> = undefined;
  <proto:DILComponentContentElementRenderer>;
  DILComponentContentElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILComponentContentElementRenderer#1 = function <atom:0>;
  exports.DILComponentContentElementRenderer = DILComponentContentElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILComponentContentElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
