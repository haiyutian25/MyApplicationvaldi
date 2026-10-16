// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=565B file=latex/src/LatexEntryPointComponent
// locals: this
// closure: e, t, o, a, r
function {
  this = this;
  if (!(this.viewModel.block)) goto L_20f;
  e.beginRender(t, undefined);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", a.blockScroll);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", a.blockContent);
  this.renderLatex();
  e.endRender();
  e.endRender();
  e.endRender();
  return;
  this.renderLatex();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=791B file=latex/src/LatexEntryPointComponent
// locals: t, this
// closure: d, e, s, n
function {
  this = this;
  let t;
  t = undefined;
  if (!(d.isVersionAtLeast(24))) goto L_79;
  t = this.viewModel.useNativeLatexRenderer;
  this.viewModel.useNativeLatexRenderer;
  e.beginComponent(s.LatexView, n, undefined, undefined);
  e.setViewModelProperty("latex", this.viewModel.latex);
  e.setViewModelProperty("block", this.viewModel.block);
  e.setViewModelProperty("color", this.viewModel.color);
  e.setViewModelProperty("useNativeLatexRenderer", t);
  if (!(d.isVersionAtLeast(10))) goto L_2ea;
  if (!((this.context == null))) goto L_2c7;
  this.context;
  goto L_2eb;
  goto L_2eb;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onRenderFailure", undefined);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=latex/src/LatexEntryPointComponent
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

// fn <atom:0>  args=3 vars=16 closure=0 cpool=3 bc=615B file=latex/src/LatexEntryPointComponent
// args: require, module, exports
// locals: e, t, o, r, n, i, d, l, s, LatexEntryPointComponent, <class_fields_init>, LatexEntryPointComponent#1, a
function {
  let a;
  let LatexEntryPointComponent#1;
  let s;
  let l;
  let d;
  let i;
  let n;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LatexEntryPointComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["width", "100%"], "gexB2zByTBOhqyus");
  o = e.makeNodePrototype("scroll", undefined, "q5wHtGffdLXnesGG");
  r = e.makeNodePrototype("layout", undefined, "F3hCn_pAxc7PKoqC");
  n = e.makeComponentPrototype(undefined, "efyNYHw16bT_8RnK");
  i = require("valdi_core/src/Component");
  d = require("valdi_core/src/CompilerIntrinsics");
  l = require("valdi_core/src/Style");
  s = require("latex/src/LatexView");
  let LatexEntryPointComponent;
  let <class_fields_init>;
  class LatexEntryPointComponent extends i.Component { ... }
  <proto:LatexEntryPointComponent>.onRender = function <atom:0>;
  <proto:LatexEntryPointComponent>.renderLatex = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LatexEntryPointComponent>;
  LatexEntryPointComponent = function <atom:0>;
  // close_loc <class_fields_init>
  LatexEntryPointComponent#1 = function <atom:0>;
  exports.LatexEntryPointComponent = LatexEntryPointComponent#1;
  a = {blockScroll: new l.Style({horizontal: true, showsHorizontalScrollIndicator: false, width: "100%"}), blockContent: new l.Style({alignItems: "center", flexGrow: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=latex/src/LatexEntryPointComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
