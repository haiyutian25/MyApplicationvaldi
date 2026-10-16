// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=64B file=dil_text/src/markdown/DILTextOnlyMarkdownComponent
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
  this.parsedBlocks = [];
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=303B file=dil_text/src/markdown/DILTextOnlyMarkdownComponent
// args: e
// locals: this
// closure: t
function {
  this = this;
  if (!((e == null))) goto L_b;
  e;
  goto L_2c;
  if (!((undefined.value !== this.viewModel.value))) goto L_12e;
  this.parsedBlocks = t.Markdown.parseTextOnly(this.viewModel.value).blocks;
  t.Markdown.parseTextOnly(this.viewModel.value).blocks;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=0 bc=1030B file=dil_text/src/markdown/DILTextOnlyMarkdownComponent
// locals: t, i, this
// closure: r, e, n, o
function {
  this = this;
  let i;
  let t;
  t = r(this.viewModel.fontSize);
  i = r(this.viewModel.lineHeight);
  e.beginComponent(n.DILMarkdownComponent, o, undefined, undefined);
  e.setViewModelProperty("autoSpacing", this.viewModel.autoSpacing);
  e.setViewModelProperty("markdown", this.viewModel.value);
  e.setViewModelProperty("parsedBlocks", this.parsedBlocks);
  e.setViewModelProperty("streamingAnimation", this.viewModel.streamingAnimation);
  e.setViewModelProperty("tableTypography", this.viewModel.tableTypography);
  e.setViewModelProperty("fontSize", t);
  if (!((undefined === i))) goto L_357;
  goto L_36a;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("lineHeight", {unit: "pixels", value: i});
  e.setViewModelProperty("textAlign", this.viewModel.textAlign);
  e.endComponent();
  return;
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_text/src/markdown/DILTextOnlyMarkdownComponent
// args: e
function {
  if (!((undefined !== e))) goto L_38;
  if (!(Number.isFinite(e))) goto L_38;
  if (!((e > 0))) goto L_38;
  return e;
  return undefined;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=4 bc=332B file=dil_text/src/markdown/DILTextOnlyMarkdownComponent
// args: require, module, exports
// locals: e, o, t, i, n, DILTextOnlyMarkdownComponent, <class_fields_init>, DILTextOnlyMarkdownComponent#1, r
function {
  r = function r;
  let DILTextOnlyMarkdownComponent#1;
  let n;
  let i;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTextOnlyMarkdownComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "8vEIZDw51tzNW9t6");
  t = require("markdown/src/Markdown");
  i = require("valdi_core/src/Component");
  n = require("./DILMarkdownComponent");
  let DILTextOnlyMarkdownComponent;
  let <class_fields_init>;
  class DILTextOnlyMarkdownComponent extends i.Component { ... }
  <proto:DILTextOnlyMarkdownComponent>.onViewModelUpdate = function <atom:0>;
  <proto:DILTextOnlyMarkdownComponent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTextOnlyMarkdownComponent>;
  DILTextOnlyMarkdownComponent = function <atom:0>;
  // close_loc <class_fields_init>
  DILTextOnlyMarkdownComponent#1 = function <atom:0>;
  exports.DILTextOnlyMarkdownComponent = DILTextOnlyMarkdownComponent#1;
  DILTextOnlyMarkdownComponent#1.dilV2Properties = ["streaming", "value", "fontSize", "lineHeight", "textAlign"];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/markdown/DILTextOnlyMarkdownComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
