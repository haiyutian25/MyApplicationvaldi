// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=178B file=dil_widgets/src/elements_renderer/DILTransparentElementRenderer
// args: t, n
// locals: this
// closure: <class_fields_init>, e, r
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.elementType = t;
  this.childrenMode = e.DILElementChildrenMode.RenderedNodes;
  this.primitiveTextProp = undefined;
  this.childRendererStack = [];
  this.allowedPropNames = r.createDILPropNameAllowlist(n);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=74B file=dil_widgets/src/elements_renderer/DILTransparentElementRenderer
// args: e, r
// locals: this
function {
  this = this;
  this.childRendererStack.push(undefined);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=118B file=dil_widgets/src/elements_renderer/DILTransparentElementRenderer
// args: e, t
// locals: this
// closure: r
function {
  this = this;
  if (!((true !== this.allowedPropNames[e]))) goto L_75;
  r.warnUnsupportedDILPropName(this.elementType, e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=118B file=dil_widgets/src/elements_renderer/DILTransparentElementRenderer
// args: e, r
// locals: this
function {
  this = this;
  if (!((e.count > 0))) goto L_75;
  this.childRendererStack[(this.childRendererStack.length - 1)] = e;
  e;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=253B file=dil_widgets/src/elements_renderer/DILTransparentElementRenderer
// locals: e, this
function {
  this = this;
  let e;
  if (!((0 === this.childRendererStack.length))) goto L_86;
  throw new Error("Unbalanced DIL v2 ".concat(this.elementType, " element renderer stack."));
  e = this.childRendererStack.pop();
  if (!((e == null))) goto L_d8;
  e;
  goto L_fc;
  undefined.render();
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=5 bc=162B file=dil_widgets/src/elements_renderer/DILTransparentElementRenderer
// args: require, module, exports
// locals: e, r, DILTransparentElementRenderer, <class_fields_init>, DILTransparentElementRenderer#1
function {
  let DILTransparentElementRenderer#1;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTransparentElementRenderer = undefined;
  e = require("dil_renderer/src/DILRenderer");
  r = require("./DILPropNameValidation");
  let DILTransparentElementRenderer;
  let <class_fields_init>;
  class DILTransparentElementRenderer extends undefined { ... }
  <proto:DILTransparentElementRenderer>.beginRender = function <atom:0>;
  <proto:DILTransparentElementRenderer>.setProp = function <atom:0>;
  <proto:DILTransparentElementRenderer>.setChildren = function <atom:0>;
  <proto:DILTransparentElementRenderer>.endRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTransparentElementRenderer>;
  DILTransparentElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILTransparentElementRenderer#1 = function <atom:0>;
  exports.DILTransparentElementRenderer = DILTransparentElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILTransparentElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
