// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=122B file=latex/src/LatexView
// args: e
// closure: this
function {
  if (!((this.state.isDarkMode !== e))) goto L_79;
  this.setState({isDarkMode: e});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=153B file=latex/src/LatexView
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, v
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
  this.state = {isDarkMode: v.Device.isDarkMode()};
  this.handleDarkModeChange = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=119B file=latex/src/LatexView
// locals: this
// closure: v
function {
  this = this;
  this.darkModeObserver = v.Device.observeDarkMode(this.handleDarkModeChange);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=93B file=latex/src/LatexView
// locals: this
function {
  this = this;
  if (!((this.darkModeObserver == null))) goto L_2c;
  this.darkModeObserver;
  goto L_50;
  undefined.cancel();
  this.darkModeObserver = undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=727B file=latex/src/LatexView
// closure: t, w, i, this, n, d
function {
  t.beginComponent(w.LatexShapesView, i, undefined, undefined);
  t.setViewModelProperty("accessibilityCategory", this.viewModel.accessibilityCategory);
  t.setViewModelProperty("height", n.height);
  t.setViewModelProperty("onTap", this.viewModel.onTap);
  t.setViewModelProperty("renderKey", n.key);
  if (!((1 === d))) goto L_206;
  goto L_209;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("scale", d);
  t.setViewModelProperty("shapes", n.shapes);
  t.setViewModelProperty("width", n.width);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=644B file=latex/src/LatexView
// closure: t, o, n, k, this, c, l
function {
  t.beginRender(o, n.key);
  t.setAttributeStyle("style", k.svg);
  t.setAttributeString("accessibilityCategory", this.viewModel.accessibilityCategory);
  t.setAttributeNumber("height", c);
  t.setAttributeFunction("onTap", this.viewModel.onTap);
  t.setAttribute("src", this.makeSvgAsset(n.svg));
  t.setAttributeNumber("width", l);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=8 closure=11 cpool=2 bc=1295B file=latex/src/LatexView
// locals: s, a, n, v, d, l, c, this
// closure: t, w, i, o, k, e, p, h, b, M, r
function {
  this = this;
  let c;
  let l;
  let d;
  let n;
  let a;
  let s;
  s = this.viewModel.webLatexRendererClass;
  if (!((undefined !== s))) goto L_8c;
  this.renderWebLatexRenderer(s);
  return;
  a = this.getDefaultLatexRenderer(!this.usesNativeLatexRenderer());
  if (!((undefined === a))) goto L_1b4;
  if (!(e.isLoggingEnabled)) goto L_138;
  console.warn(p);
  if (!(h.isVersionAtLeast(10))) goto L_18b;
  this.reportRenderFailure(1);
  this.renderFallbackText();
  return;
  n = undefined;
  try { // catch -> L_1ed
  n = this.renderMathWithRecovery(a);
  this.renderMathWithRecovery(a);
  <?>;
  goto L_337;
  // [栈深重同步 0 -> 1]
  v = <?>;
  try { // catch -> L_336
  if (!(e.isLoggingEnabled)) goto L_293;
  console.warn("Failed to render LaTeX expression. ".concat(b.readLatexRenderErrorMessage(v)));
  if (!(h.isVersionAtLeast(10))) goto L_30b;
  this.reportRenderFailure(b.readLatexRenderFailureReason(v));
  this.renderFallbackText();
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  d = M(this.viewModel.fontScale);
  l = (n.width * d);
  c = (n.height * d);
  t.beginRender(r, "latex");
  t.setAttributeStyle("style", k.root);
  t.setAttributeNumber("height", c);
  t.setAttributeNumber("width", l);
  if (!((undefined === n.svg))) goto L_4e3;
  goto L_4e6;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=341B file=latex/src/LatexView
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (!((true === this.viewModel.block))) goto L_76;
  goto L_7b;
  // [栈深重同步 3 -> 2]
  t = "".concat("inline", ":", this.viewModel.latex);
  if (!((t !== this.reportedFailureKey))) goto L_154;
  this.reportedFailureKey = t;
  if (!((this.viewModel.onRenderFailure == null))) goto L_14a;
  this.viewModel.onRenderFailure;
  this.viewModel;
  goto L_154;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=746B file=latex/src/LatexView
// args: e
// locals: this
// closure: t, s, k
function {
  this = this;
  t.beginRender(s, e);
  t.setAttributeStyle("style", k.webRenderer);
  t.setAttributeString("accessibilityCategory", this.viewModel.accessibilityCategory);
  t.setAttributeFunction("onTap", this.viewModel.onTap);
  t.setAttributeString("webClass", e);
  t.setAttributeString("latex", this.viewModel.latex);
  t.setAttribute("block", (true === this.viewModel.block));
  t.setAttributeString("color", this.resolveMathColor());
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=latex/src/LatexView
// args: e
// closure: y
function {
  return y.getDefaultLatexRenderer(e);   // tail call
}

// fn <atom:0>  args=1 vars=8 closure=4 cpool=0 bc=1182B file=latex/src/LatexView
// args: t
// locals: e, r, o, s, t#1, i, this
// closure: g, e, b, h
function {
  this = this;
  try { // catch -> L_bb
  let e;
  e = this.renderMath(t);
  if (!((this.reportedRecovery == null))) goto L_5e;
  this.reportedRecovery;
  goto L_7f;
  if (!((undefined.key !== e.key))) goto L_b5;
  this.reportedRecovery = undefined;
  undefined;
  return e;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_49d
  let s;
  let o;
  if (!(!this.usesNativeLatexRenderer())) goto L_f2;
  throw r;
  o = this.getDefaultLatexRenderer(true);
  if (!((o === t))) goto L_124;
  throw r;
  s = this.makeRenderKey(this.resolveMathColor());
  if (!((undefined === o))) goto L_1ea;
  this.reportNativeRecovery(r, s, g.LatexRecoveryOutcome.Unavailable);
  throw r;
  try { // catch -> L_334
  let t#1;
  t#1 = this.renderMath(o);
  this.reportNativeRecovery(r, s, g.LatexRecoveryOutcome.Recovered);
  if (!(e.isLoggingEnabled)) goto L_32d;
  console.warn("Native LaTeX rendering failed; recovered with MathJax. ".concat(b.readLatexRenderErrorMessage(r)));
  return t#1;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_49c
  this.reportNativeRecovery(r, s, g.LatexRecoveryOutcome.Failed);
  if (!(h.isVersionAtLeast(10))) goto L_49a;
  throw b.createLatexRenderError(b.readLatexRenderFailureReason(r), "".concat(b.readLatexRenderErrorMessage(r), " MathJax recovery failed: ", b.readLatexRenderErrorMessage(i)));
  throw r;
  // [栈深重同步 0 -> 1]
  throw <?>;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=219B file=latex/src/LatexView
// args: e, t, r
// locals: this
// closure: g
function {
  this = this;
  if (!((this.reportedRecovery == null))) goto L_2c;
  this.reportedRecovery;
  goto L_4d;
  if (!((undefined.key === t))) goto L_98;
  if (((this.reportedRecovery.outcome === r))) goto L_da;
  this.reportedRecovery = {key: t, outcome: r};
  g.reportLatexNativeRecovery(e, r);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=754B file=latex/src/LatexView
// locals: this
// closure: t, a, k, n
function {
  this = this;
  t.beginRender(a, "latex");
  t.setAttributeStyle("style", k.root);
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", k.fallbackText);
  t.setAttributeString("value", this.viewModel.latex);
  t.setAttributeString("accessibilityCategory", this.viewModel.accessibilityCategory);
  t.setAttributeString("color", this.resolveMathColor());
  t.setAttributeFunction("onTap", this.viewModel.onTap);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=401B file=latex/src/LatexView
// args: e
// locals: t, r, i, this
function {
  this = this;
  let i;
  let r;
  let t;
  t = this.resolveMathColor();
  r = this.makeRenderKey(t);
  if (!((this.cachedKey === r))) goto L_cb;
  if (!((undefined !== this.cachedRender))) goto L_cb;
  return this.cachedRender;
  null;
  e(this.viewModel.latex, {block: (true === this.viewModel.block), color: t});
  i = {key: r};
  this.cachedKey = r;
  this.cachedRender = i;
  return i;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=257B file=latex/src/LatexView
// args: e
// locals: this
function {
  this = this;
  if (!(this.usesNativeLatexRenderer())) goto L_52;
  goto L_57;
  // [栈深重同步 3 -> 2]
  if (!((true === this.viewModel.block))) goto L_ab;
  goto L_b0;
  // [栈深重同步 5 -> 4]
  return "".concat("javascript", ":", "inline", ":", e, ":", this.viewModel.latex);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=200B file=latex/src/LatexView
// locals: e, this
// closure: v, h
function {
  this = this;
  let e;
  e = this.viewModel.useNativeLatexRenderer;
  if (!((undefined !== e))) goto L_54;
  return e;
  if (!(v.Device.isAndroid())) goto L_c7;
  return h.isVersionAtLeast(24);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=257B file=latex/src/LatexView
// args: e
// locals: this
// closure: l, d
function {
  this = this;
  if (!((this.cachedSvg === e))) goto L_4e;
  if (((undefined !== this.cachedSvgAsset))) goto L_dd;
  this.cachedSvg = e;
  this.cachedSvgAsset = l.makeAssetFromBytes(new d.TextEncoder().encode(e));
  l.makeAssetFromBytes(new d.TextEncoder().encode(e));
  return this.cachedSvgAsset;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=151B file=latex/src/LatexView
// locals: this
// closure: x, R
function {
  this = this;
  if (!((this.viewModel.color == null))) goto L_96;
  this.viewModel.color;
  if (!(this.state.isDarkMode)) goto L_93;
  return x;
  return R;
}

// fn M  args=1 vars=1 closure=0 cpool=0 bc=58B file=latex/src/LatexView
// args: e
function {
  if (!((undefined !== e))) goto L_38;
  if (!(Number.isFinite(e))) goto L_38;
  if (!((e > 0))) goto L_38;
  return e;
  return 1;
}

// fn <atom:0>  args=3 vars=29 closure=0 cpool=16 bc=1097B file=latex/src/LatexView
// args: require, module, exports
// locals: e, t, r, i, o, s, a, n, d, l, c, h, v, u, y, b, g, w, R, x, p, LatexView, <class_fields_init>, LatexView#1, M, k
function {
  M = function M;
  let k;
  let LatexView#1;
  let p;
  let x;
  let R;
  let w;
  let g;
  let b;
  let y;
  let u;
  let v;
  let h;
  let c;
  let l;
  let d;
  let n;
  let a;
  let s;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LatexView = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  r = t.makeNodePrototype("layout", undefined, "ImSwIIatLvgeXHw-");
  i = t.makeComponentPrototype(undefined, "T64k2wk3XV3GuSDy");
  o = t.makeNodePrototype("image", undefined, "BGNvNSryZpu2KUGH");
  s = t.makeNodePrototype("custom-view", undefined, "YtNZHPmyoOZkgEVI");
  a = t.makeNodePrototype("layout", undefined, "YTn-uHp4HX79T30P");
  n = t.makeNodePrototype("label", undefined, "yPJkfKmwbpVZ24Hr");
  d = require("coreutils/src/unicode/TextCoding");
  l = require("valdi_core/src/Asset");
  c = require("valdi_core/src/Component");
  h = require("valdi_core/src/CompilerIntrinsics");
  v = require("valdi_core/src/Device");
  u = require("valdi_core/src/Style");
  y = require("./DefaultLatexRenderer");
  b = require("./LatexRenderErrors");
  g = require("./LatexRecoveryMetrics");
  w = require("./LatexShapesView");
  R = "#000000";
  x = "#ffffff";
  p = "No LaTeX renderer is available. On web, register a custom view class and provide webLatexRendererClass.";
  let LatexView;
  let <class_fields_init>;
  class LatexView extends c.StatefulComponent { ... }
  <proto:LatexView>.onCreate = function <atom:0>;
  <proto:LatexView>.onDestroy = function <atom:0>;
  <proto:LatexView>.onRender = function <atom:0>;
  <proto:LatexView>.reportRenderFailure = function <atom:0>;
  <proto:LatexView>.renderWebLatexRenderer = function <atom:0>;
  <proto:LatexView>.getDefaultLatexRenderer = function <atom:0>;
  <proto:LatexView>.renderMathWithRecovery = function <atom:0>;
  <proto:LatexView>.reportNativeRecovery = function <atom:0>;
  <proto:LatexView>.renderFallbackText = function <atom:0>;
  <proto:LatexView>.renderMath = function <atom:0>;
  <proto:LatexView>.makeRenderKey = function <atom:0>;
  <proto:LatexView>.usesNativeLatexRenderer = function <atom:0>;
  <proto:LatexView>.makeSvgAsset = function <atom:0>;
  <proto:LatexView>.resolveMathColor = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LatexView>;
  LatexView = function <atom:0>;
  // close_loc <class_fields_init>
  LatexView#1 = function <atom:0>;
  exports.LatexView = LatexView#1;
  k = {root: new u.Style({flexShrink: 0}), fallbackText: new u.Style({backgroundColor: "transparent", flexShrink: 1, minWidth: 0, numberOfLines: 0}), webRenderer: new u.Style({flexShrink: 0, height: "auto", minHeight: 0, width: "fit-content"}), svg: new u.Style({flexShrink: 0, objectFit: "contain"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=latex/src/LatexView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
