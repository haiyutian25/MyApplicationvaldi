// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=531B file=dil_widgets/src/widgets/AnimatedSvg
// args: e
// closure: this
function {
  if (!((this.state.frame == null))) goto L_6f;
  this.state.frame;
  goto L_90;
  if (!((e.width === undefined.width))) goto L_129;
  if (!((this.state.frame == null))) goto L_107;
  this.state.frame;
  goto L_128;
  if (((e.height === undefined.height))) goto L_212;
  if (((e.width <= 0))) goto L_17c;
  if (!((e.height <= 0))) goto L_1e4;
  this.generation = (this.generation + 1);
  goto L_212;
  // [栈深重同步 1 -> 0]
  this.setState({frame: e});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=122B file=dil_widgets/src/widgets/AnimatedSvg
// locals: this, this.active_func, new.target, arguments
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
  this.state = {frame: undefined, loaded: false, failed: false};
  this.generation = 0;
  this.html = "";
  this.handleLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=410B file=dil_widgets/src/widgets/AnimatedSvg
// args: e
// locals: this
// closure: c
function {
  this = this;
  if (!((e == null))) goto L_b;
  e;
  goto L_2c;
  if (!((undefined.animatedSvg === this.viewModel.animatedSvg))) goto L_e2;
  if (!((e == null))) goto L_7d;
  e;
  goto L_9e;
  if (((undefined.isSourceStreaming === this.viewModel.isSourceStreaming))) goto L_199;
  this.generation = (this.generation + 1);
  this.html = c(this.viewModel.animatedSvg);
  this.setState({loaded: false, failed: false});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=129B file=dil_widgets/src/widgets/AnimatedSvg
// closure: this, v
function {
  if ((this.isDestroyed())) goto L_80;
  if (((v !== this.generation))) goto L_80;
  this.setState({loaded: true});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=230B file=dil_widgets/src/widgets/AnimatedSvg
// args: t
// closure: this, v, e
function {
  if ((this.isDestroyed())) goto L_e5;
  if (((v !== this.generation))) goto L_e5;
  if (!(e.isLoggingEnabled)) goto L_b0;
  console.warn("Could not load animated SVG; retaining static image.", t);
  this.setState({failed: true, loaded: false});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=2 bc=757B file=dil_widgets/src/widgets/AnimatedSvg
// closure: this, v, e, t, a, g, c, h, r, n, l
function {
  t.beginRender(a, undefined);
  t.setAttributeStyle("style", g.overlay);
  if (!(c)) goto L_ae;
  goto L_af;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("opacity", 0);
  t.beginComponent(h.WebView, r, String(v), undefined);
  t.setViewModelProperty("html", this.html);
  t.setViewModelProperty("width", n.width);
  t.setViewModelProperty("height", n.height);
  t.setViewModelProperty("onLoadCompleted", l.createReusableCallback(function <atom:0>));
  t.setViewModelProperty("onLoadFailed", l.createReusableCallback(function <atom:0>));
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=7 closure=10 cpool=1 bc=1999B file=dil_widgets/src/widgets/AnimatedSvg
// locals: d, n, c, m, y, v, this
// closure: e, t, a, g, h, r, l, i, s, o
function {
  this = this;
  let v;
  let y;
  let m;
  let c;
  let n;
  let d;
  d = this.viewModel.image;
  if (((undefined === undefined))) goto L_cc;
  n = <to_object>(undefined).frame;
  c = <to_object>(undefined).loaded;
  m = <to_object>(undefined).failed;
  <to_object>(undefined);
  goto L_f3;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_5f;
  // [栈深重同步 1 -> 0]
  if (!(!this.viewModel.isSourceStreaming)) goto L_19d;
  if (!(!m)) goto L_19d;
  if (!((undefined !== n))) goto L_19d;
  if (!((n.width > 0))) goto L_19d;
  y = (n.height > 0);
  v = this.generation;
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", g.root);
  t.setAttributeString("accessibilityCategory", d.accessibilityCategory);
  t.setAttributeString("accessibilityLabel", d.accessibilityLabel);
  t.setAttributeString("accessibilityNavigation", d.accessibilityNavigation);
  t.setAttribute("width", d.width);
  t.setAttribute("height", d.height);
  t.setAttributeNumber("aspectRatio", d.aspectRatio);
  t.setAttribute("marginLeft", d.marginLeft);
  t.setAttribute("marginTop", d.marginTop);
  t.beginComponent(s.SvgView, o, undefined, undefined);
  t.setViewModelProperties(d);
  t.setViewModelProperty("accessibilityCategory", undefined);
  t.setViewModelProperty("accessibilityLabel", undefined);
  t.setViewModelProperty("accessibilityNavigation", "ignored");
  if (!((undefined === d.width))) goto L_627;
  goto L_62c;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("width", "100%");
  if (!((undefined === d.height))) goto L_684;
  goto L_689;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("height", "100%");
  t.setViewModelProperty("marginLeft", undefined);
  t.setViewModelProperty("marginTop", undefined);
  if (!(y)) goto L_71f;
  if (!(c)) goto L_71f;
  goto L_720;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("opacity", 1);
  t.setViewModelProperty("onLayout", this.handleLayout);
  t.endComponent();
  if (!(y)) goto L_7a6;
  function <atom:0>();
  t.endRender();
  return;
}

// fn c  args=1 vars=1 closure=0 cpool=0 bc=94B file=dil_widgets/src/widgets/AnimatedSvg
// args: e
function {
  return "<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data:; style-src 'unsafe-inline'"><style>html,body{margin:0;width:100%;height:100%;overflow:hidden}img{display:block;width:100%;height:100%;object-fit:contain}</style></head><body><img alt="" src="".concat("data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(e)), ""></body></html>");   // tail call
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=4 bc=690B file=dil_widgets/src/widgets/AnimatedSvg
// args: require, module, exports
// locals: e, t, i, o, a, r, s, d, n, l, h, AnimatedSvg, <class_fields_init>, AnimatedSvg#1, c, g
function {
  c = function c;
  let g;
  let AnimatedSvg#1;
  let h;
  let l;
  let n;
  let d;
  let s;
  let r;
  let a;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AnimatedSvg = undefined;
  exports.makeAnimatedSvgHtml = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("view", undefined, "CxTtgBFh_lDYwfzB");
  o = t.makeComponentPrototype(undefined, "HcIYk8k8jx-0y7OB");
  a = t.makeNodePrototype("view", undefined, "RYxxY4lQzKit8Ya6");
  r = t.makeComponentPrototype(undefined, "bxp6-K5MYx5TFL2E");
  s = require("svg/src/SvgView");
  d = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  l = require("valdi_core/src/utils/Callback");
  h = require("../webview/WebView");
  let AnimatedSvg;
  let <class_fields_init>;
  class AnimatedSvg extends d.StatefulComponent { ... }
  <proto:AnimatedSvg>.onViewModelUpdate = function <atom:0>;
  <proto:AnimatedSvg>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AnimatedSvg>;
  AnimatedSvg = function <atom:0>;
  // close_loc <class_fields_init>
  AnimatedSvg#1 = function <atom:0>;
  exports.AnimatedSvg = AnimatedSvg#1;
  exports.makeAnimatedSvgHtml = c;
  g = {root: new n.Style({flexShrink: 0}), overlay: new n.Style({position: "absolute", top: 0, left: 0, touchEnabled: false, accessibilityNavigation: "ignored"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/AnimatedSvg
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
