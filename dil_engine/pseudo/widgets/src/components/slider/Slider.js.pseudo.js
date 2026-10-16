// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=418B file=widgets/src/components/slider/Slider
// args: e
// locals: t, i
// closure: this
function {
  let t;
  t = this.state.barWidth;
  if (!(t)) goto L_1a1;
  let i;
  i = (e.x / t);
  i = Math.max(Math.min(1, i), 0);
  Math.max(Math.min(1, i), 0);
  if (!((this.state.value !== i))) goto L_1a0;
  this.setState({value: i});
  this.viewModel.onChange(i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=80B file=widgets/src/components/slider/Slider
// args: e
// closure: this
function {
  this.setState({barWidth: e.width});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=2 bc=296B file=widgets/src/components/slider/Slider
// locals: this, this.active_func, new.target, arguments
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
  this.state = {value: 0, barWidth: 0};
  this.onBarTouch = function <atom:0>;
  if (!(this.viewModel.callOnChangeOnMainThread)) goto L_e9;
  goto L_10d;
  // [栈深重同步 2 -> 1]
  this.onBarTouchWrapped = this.onBarTouch;
  this.onBarLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=186B file=widgets/src/components/slider/Slider
// locals: this
function {
  this = this;
  if (!((undefined !== this.viewModel.initialValue))) goto L_b9;
  this.setState({value: this.viewModel.initialValue});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=1639B file=widgets/src/components/slider/Slider
// locals: this
// closure: e, t, c, i, o, r
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", c.bar);
  e.setAttributeFunction("onLayout", this.onBarLayout);
  e.setAttributeFunction("onTouch", this.onBarTouchWrapped);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", c.line);
  if (!((this.viewModel.lineHeight == null))) goto L_20c;
  this.viewModel.lineHeight;
  e.setAttributeNumber("height", 4);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", c.lineEmpty);
  if (!((this.viewModel.lineEmptyColor == null))) goto L_364;
  this.viewModel.lineEmptyColor;
  e.setAttributeString("backgroundColor", c.color.emptyLine.backgroundColor);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", c.lineFilled);
  e.setAttributeNumber("scaleX", this.state.value);
  e.setAttributeNumber("translationX", -this.state.barWidth);
  if (!((this.viewModel.lineFilledColor == null))) goto L_5c5;
  this.viewModel.lineFilledColor;
  e.setAttributeString("backgroundColor", c.color.filledLine.backgroundColor);
  e.endRender();
  e.endRender();
  this.renderHandle();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=0 bc=832B file=widgets/src/components/slider/Slider
// locals: t, i, this
// closure: h, e, n, c
function {
  this = this;
  let i;
  let t;
  t = (this.state.barWidth - h);
  if (!((t < 0))) goto L_58;
  return;
  i = (t * this.state.value);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", c.handle);
  if (!((this.viewModel.handleColor == null))) goto L_1f4;
  this.viewModel.handleColor;
  e.setAttributeString("backgroundColor", c.color.handle.backgroundColor);
  e.setAttributeNumber("translationX", i);
  if (!((this.viewModel.handleSize == null))) goto L_29c;
  this.viewModel.handleSize;
  e.setAttributeNumber("height", h);
  if (!((this.viewModel.handleSize == null))) goto L_314;
  this.viewModel.handleSize;
  e.setAttributeNumber("width", h);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=4 bc=1279B file=widgets/src/components/slider/Slider
// args: require, module, exports
// locals: e, t, i, o, r, n, l, a, d, s, u, h, b, Slider, <class_fields_init>, Slider#1, c
function {
  let c;
  let Slider#1;
  let b;
  let h;
  let u;
  let s;
  let d;
  let a;
  let l;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Slider = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "RLVOnN7RUTiQJfmy");
  i = e.makeNodePrototype("view", undefined, "tL8UC23ni3jetxSZ");
  o = e.makeNodePrototype("view", undefined, "m0kDmfbOstFvYQnS");
  r = e.makeNodePrototype("view", undefined, "dxnAX4IAjCqnXK_v");
  n = e.makeNodePrototype("view", undefined, "HVv5kuKzprn8t-Ng");
  l = require("valdi_core/src/Component");
  a = require("valdi_core/src/Style");
  d = require("valdi_core/src/utils/FunctionUtils");
  s = require("widgets/src/styles/semanticColors");
  u = 25;
  h = 20;
  b = 4;
  let Slider;
  let <class_fields_init>;
  class Slider extends l.StatefulComponent { ... }
  <proto:Slider>.onViewModelUpdate = function <atom:0>;
  <proto:Slider>.onRender = function <atom:0>;
  <proto:Slider>.renderHandle = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Slider>;
  Slider = function <atom:0>;
  // close_loc <class_fields_init>
  Slider#1 = function <atom:0>;
  exports.Slider = Slider#1;
  c = {bar: new a.Style({height: u, alignItems: "center", flexDirection: "row"}), line: new a.Style({width: "100%", borderRadius: "50%", slowClipping: true}), lineEmpty: new a.Style({width: "100%", height: "100%", position: "absolute"}), lineFilled: new a.Style({width: "200%", height: "100%", position: "absolute"}), color: {emptyLine: {backgroundColor: s.SemanticColor.Layout.INPUT_BORDER}, filledLine: {backgroundColor: s.SemanticColor.Layout.INPUT_BORDER_FOCUSED}, handle: {backgroundColor: s.SemanticColor.Layout.PLACEHOLDER}}, handle: new a.Style({borderRadius: "50%", boxShadow: "0 0 1 rgba(0, 0, 0, 0.3)", position: "absolute"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/slider/Slider
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
