// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=63B file=svg/src/SvgView
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
  this.isSvgAssetLoading = false;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=svg/src/SvgView
// locals: this
function {
  this = this;
  this.clearPendingSvgCommit();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=2252B file=svg/src/SvgView
// locals: e, s, this
// closure: i, t, v
function {
  this = this;
  let s;
  let e;
  e = this.viewModel.width;
  s = this.viewModel.height;
  i.beginRender(t, undefined);
  i.setAttributeStyle("style", v.svg);
  i.setAttribute("src", this.renderSvgImageSource(e, s));
  i.setAttributeFunction("onAssetLoad", this.onSvgAssetLoad);
  i.setAttributeFunction("onLayout", this.viewModel.onLayout);
  i.setAttributeNumber("opacity", this.viewModel.opacity);
  i.setAttributeString("accessibilityCategory", this.viewModel.accessibilityCategory);
  i.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  i.setAttributeString("accessibilityNavigation", this.viewModel.accessibilityNavigation);
  i.setAttributeNumber("aspectRatio", this.viewModel.aspectRatio);
  i.setAttribute("flexBasis", this.viewModel.flexBasis);
  i.setAttributeNumber("flexGrow", this.viewModel.flexGrow);
  i.setAttributeNumber("flexShrink", this.viewModel.flexShrink);
  i.setAttribute("height", s);
  i.setAttribute("marginLeft", this.viewModel.marginLeft);
  i.setAttribute("marginTop", this.viewModel.marginTop);
  i.setAttribute("maxHeight", this.viewModel.maxHeight);
  i.setAttribute("maxWidth", this.viewModel.maxWidth);
  i.setAttribute("minHeight", this.viewModel.minHeight);
  i.setAttribute("minWidth", this.viewModel.minWidth);
  i.setAttribute("width", e);
  i.endRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=612B file=svg/src/SvgView
// args: e, i
// locals: t, this
// closure: g
function {
  this = this;
  let t;
  t = g(this.viewModel.svg, e, i);
  if (!((undefined === this.cachedSvgAsset))) goto L_9c;
  return this.commitSvg(t);
  if (!((this.cachedSvg === t))) goto L_118;
  this.pendingSvg = undefined;
  this.clearPendingSvgCommit();
  return this.cachedSvgAsset;
  if (!((true === this.viewModel.coalesceRapidUpdates))) goto L_1b6;
  this.pendingSvg = t;
  this.schedulePendingSvgCommit();
  return this.cachedSvgAsset;
  this.clearPendingSvgCommit();
  if (!(this.isSvgAssetLoading)) goto L_230;
  this.pendingSvg = t;
  return this.cachedSvgAsset;
  this.pendingSvg = undefined;
  return this.commitSvg(t);
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=232B file=svg/src/SvgView
// args: i, s
// closure: this, t, e
function {
  if ((this.isDestroyed())) goto L_e7;
  if (((t !== this.cachedSvgAsset))) goto L_e7;
  this.isSvgAssetLoading = false;
  if ((i)) goto L_c1;
  if (!(e.isLoggingEnabled)) goto L_c1;
  console.warn("Failed to load SVG image", s);
  this.commitPendingSvgIfReady();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=1 bc=234B file=svg/src/SvgView
// args: i
// locals: t, this
// closure: e, o, s
function {
  this = this;
  let t;
  this.cachedSvg = i;
  this.cachedSvgAsset = o.makeAssetFromBytes(new s.TextEncoder().encode(i));
  this.isSvgAssetLoading = true;
  t = this.cachedSvgAsset;
  this.onSvgAssetLoad = function <atom:0>;
  return this.cachedSvgAsset;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=302B file=svg/src/SvgView
// locals: e, this
function {
  this = this;
  let e;
  if (!(!this.isDestroyed())) goto L_7a;
  if (!(!this.isSvgAssetLoading)) goto L_7a;
  if (!(!(undefined === this.pendingSvgCommitTimerId))) goto L_7e;
  return;
  e = this.pendingSvg;
  this.pendingSvg = undefined;
  if (!((undefined !== e))) goto L_12d;
  if (!((e !== this.cachedSvg))) goto L_12d;
  this.commitSvg(e);
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=49B file=svg/src/SvgView
// closure: this
function {
  this.pendingSvgCommitTimerId = undefined;
  this.commitPendingSvgIfReady();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=65B file=svg/src/SvgView
// locals: this
// closure: r
function {
  this = this;
  if (!((undefined === this.pendingSvgCommitTimerId))) goto L_40;
  this.pendingSvgCommitTimerId = setTimeout(function <atom:0>, r);
  setTimeout(function <atom:0>, r);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=96B file=svg/src/SvgView
// locals: this
function {
  this = this;
  if (!((undefined !== this.pendingSvgCommitTimerId))) goto L_5f;
  clearTimeout(this.pendingSvgCommitTimerId);
  this.pendingSvgCommitTimerId = undefined;
  undefined;
  return;
}

// fn g  args=3 vars=5 closure=1 cpool=10 bc=427B file=svg/src/SvgView
// args: e, i, t
// locals: s, o
// closure: h
function {
  let o;
  let s;
  if (!((e.match(new RegExp("<svg\\b[^>]*>")) == null))) goto L_38;
  e.match(new RegExp("<svg\\b[^>]*>"));
  goto L_3a;
  s = undefined[0];
  if (!((undefined === s))) goto L_44;
  return e;
  o = s;
  if (((undefined === i))) goto L_e3;
  if ((new RegExp("\\swidth\\s*=").test(o))) goto L_e3;
  o = o.replace(new RegExp(">$"), " width="".concat(h(i), "">"));
  o.replace(new RegExp(">$"), " width="".concat(h(i), "">"));
  if (((undefined === t))) goto L_17f;
  if ((new RegExp("\\sheight\\s*=").test(o))) goto L_17f;
  o = o.replace(new RegExp(">$"), " height="".concat(h(t), "">"));
  o.replace(new RegExp(">$"), " height="".concat(h(t), "">"));
  return e.replace(s, o);   // tail call
}

// fn h  args=1 vars=1 closure=0 cpool=4 bc=99B file=svg/src/SvgView
// args: e
function {
  return String(e).replace(new RegExp("&"), "&amp;").replace(new RegExp("\""), "&quot;");   // tail call
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=10 bc=476B file=svg/src/SvgView
// args: require, module, exports
// locals: e, i, t, s, o, d, n, r, SvgView, <class_fields_init>, SvgView#1, g, h, v
function {
  g = function g;
  h = function h;
  let v;
  let SvgView#1;
  let r;
  let n;
  let d;
  let o;
  let s;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgView = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("valdi_core/src/JSX").jsx;
  t = i.makeNodePrototype("image", undefined, "QTkWxh345vmuiq1D");
  s = require("coreutils/src/unicode/TextCoding");
  o = require("valdi_core/src/Asset");
  d = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  r = 100;
  let SvgView;
  let <class_fields_init>;
  class SvgView extends d.Component { ... }
  <proto:SvgView>.onDestroy = function <atom:0>;
  <proto:SvgView>.onRender = function <atom:0>;
  <proto:SvgView>.renderSvgImageSource = function <atom:0>;
  <proto:SvgView>.commitSvg = function <atom:0>;
  <proto:SvgView>.commitPendingSvgIfReady = function <atom:0>;
  <proto:SvgView>.schedulePendingSvgCommit = function <atom:0>;
  <proto:SvgView>.clearPendingSvgCommit = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgView>;
  SvgView = function <atom:0>;
  // close_loc <class_fields_init>
  SvgView#1 = function <atom:0>;
  exports.SvgView = SvgView#1;
  v = {svg: new n.Style({flexShrink: 0, objectFit: "contain"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=svg/src/SvgView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
