// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=oai_ui/src/components/Surface
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=1247B file=oai_ui/src/components/Surface
// locals: this
// closure: e, i, o, r
function {
  this = this;
  e.beginComponent(i.Box, o, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  if (!((this.viewModel.background == null))) goto L_1e5;
  this.viewModel.background;
  if (!((true === this.viewModel.elevated))) goto L_1a0;
  goto L_1e5;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("background", r.OAIColor.Surface);
  if (!((this.viewModel.borderColor == null))) goto L_29f;
  this.viewModel.borderColor;
  e.setViewModelProperty("borderColor", r.OAIColor.BorderSubtle);
  if (!((this.viewModel.borderWidth == null))) goto L_315;
  this.viewModel.borderWidth;
  e.setViewModelProperty("borderWidth", 1);
  if (!((this.viewModel.padding == null))) goto L_3cf;
  this.viewModel.padding;
  e.setViewModelProperty("padding", r.OAISpacing.Two);
  if (!((this.viewModel.radius == null))) goto L_489;
  this.viewModel.radius;
  e.setViewModelProperty("radius", r.OAIRadius.Lg);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/Surface
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

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=280B file=oai_ui/src/components/Surface
// args: require, module, exports
// locals: e, o, r, d, i, Surface, <class_fields_init>, Surface#1
function {
  let Surface#1;
  let i;
  let d;
  let r;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Surface = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "gTeC2H1SfNN7eE_J");
  r = require("oai_core/src/OAITokens");
  d = require("valdi_core/src/Component");
  i = require("./Box");
  let Surface;
  let <class_fields_init>;
  class Surface extends d.Component { ... }
  <proto:Surface>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Surface>;
  Surface = function <atom:0>;
  // close_loc <class_fields_init>
  Surface#1 = function <atom:0>;
  exports.Surface = Surface#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Surface
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
