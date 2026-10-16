// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=290B file=dil_text/src/math/DILMathWidget
// args: e
// locals: t, o
// closure: this, d
function {
  let o;
  let t;
  t = e.width;
  if ((!Number.isFinite(t))) goto L_5f;
  if (!((t <= 0))) goto L_62;
  return;
  if (!((this.state == null))) goto L_8e;
  this.state;
  goto L_af;
  o = undefined.blockViewportWidth;
  if (!((undefined !== o))) goto L_ed;
  if (((Math.abs((o - t)) < d))) goto L_121;
  this.setState({blockViewportWidth: t});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=63B file=dil_text/src/math/DILMathWidget
// locals: this, this.active_func, new.target, arguments
// closure: d, <class_fields_init>
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
  this.handleBlockScrollLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=0 bc=861B file=dil_text/src/math/DILMathWidget
// locals: i, r, this
// closure: u, e, t, p, o
function {
  this = this;
  let r;
  let i;
  i = u(this.viewModel.value);
  if (!((undefined === i))) goto L_56;
  return;
  r = this.autoSpacingAttributes;
  if (!((true === this.viewModel.block))) goto L_334;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", p.blockScroll);
  e.setAttributes(r);
  e.setAttributeFunction("onLayout", this.handleBlockScrollLayout);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", p.blockContent);
  if (!((this.state == null))) goto L_28b;
  this.state;
  goto L_2ac;
  if (!((undefined.blockViewportWidth == null))) goto L_2b6;
  undefined.blockViewportWidth;
  e.setAttribute("minWidth", "100%");
  this.renderLatexView(i);
  e.endRender();
  e.endRender();
  return;
  this.renderLatexView(i);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=807B file=dil_text/src/math/DILMathWidget
// args: t
// locals: this
// closure: e, s, i, a, h, c
function {
  this = this;
  e.beginComponent(s.LatexView, i, undefined, undefined);
  e.setViewModelProperty("latex", t);
  e.setViewModelProperty("block", this.viewModel.block);
  e.setViewModelProperty("accessibilityCategory", this.accessibilityCategory);
  if (!((this.viewModel.fontSize == null))) goto L_1b4;
  this.viewModel.fontSize;
  e.setViewModelProperty("fontScale", ((a * h) / c));
  e.setViewModelProperty("onTap", this.onTap);
  if (!((this.context == null))) goto L_262;
  this.context;
  goto L_283;
  e.setViewModelProperty("useNativeLatexRenderer", undefined.useNativeLatexRenderer);
  if (!((this.context == null))) goto L_2da;
  this.context;
  goto L_2fb;
  e.setViewModelProperty("webLatexRendererClass", undefined.webLatexRendererClass);
  e.endComponent();
  return;
}

// fn u  args=1 vars=2 closure=0 cpool=0 bc=80B file=dil_text/src/math/DILMathWidget
// args: e
// locals: t
function {
  let t;
  if (!(("string" == typeof e))) goto L_10;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  if (!((e == null))) goto L_1c;
  e;
  t = String("");
  if (!((0 === t.trim().length))) goto L_4c;
  return undefined;
  return t;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=6 bc=678B file=dil_text/src/math/DILMathWidget
// args: require, module, exports
// locals: e, t, o, i, r, s, n, l, d, a, c, h, DILMathWidget, <class_fields_init>, DILMathWidget#1, p, u
function {
  u = function u;
  let p;
  let DILMathWidget#1;
  let h;
  let c;
  let a;
  let d;
  let l;
  let n;
  let s;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILMathWidget = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("scroll", undefined, "WCTSVi4EWe8XQNeF");
  o = e.makeNodePrototype("layout", undefined, "5xlHirphnSURjWi2");
  i = e.makeComponentPrototype(undefined, "o-R9CS9RK6fCkjR3");
  r = require("dil_core/src/DILComponent");
  s = require("latex/src/LatexView");
  n = require("valdi_core/src/Style");
  l = 16;
  d = 0.01;
  a = 17;
  c = 16;
  h = 1.2;
  let DILMathWidget;
  let <class_fields_init>;
  class DILMathWidget extends r.DILStatefulComponent { ... }
  <proto:DILMathWidget>.onRender = function <atom:0>;
  <proto:DILMathWidget>.renderLatexView = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILMathWidget>;
  DILMathWidget = function <atom:0>;
  // close_loc <class_fields_init>
  DILMathWidget#1 = function <atom:0>;
  exports.DILMathWidget = DILMathWidget#1;
  DILMathWidget#1.dilV2Properties = ["block", "value"];
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  [][r.DIL_COMPONENT_PROPERTIES] = "block";
  [][("block" ++)] = "value";
  ("value" ++);
  DILMathWidget#1.properties = [];
  p = {blockScroll: new n.Style({horizontal: true, paddingBottom: l, paddingTop: l, showsHorizontalScrollIndicator: false, width: "100%"}), blockContent: new n.Style({alignItems: "center"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/math/DILMathWidget
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
