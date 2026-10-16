// fn <atom:0>  args=0 vars=4 closure=10 cpool=0 bc=2382B file=valdi_ui/src/components/PageIndicator
// locals: i, r, a, this
// closure: d, l, s, c, e, t, g, n, v, o
function {
  this = this;
  let a;
  let r;
  let i;
  if (!((this.viewModel.count <= 1))) goto L_53;
  return;
  i = d(this.viewModel.index, this.viewModel.count);
  r = l.resolveValdiUITheme();
  if (!(s.isNativeIOS())) goto L_6d9;
  if (!(c(this.viewModel.dotStyle))) goto L_6d9;
  if (!(c(this.viewModel.selectedDotStyle))) goto L_6d9;
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityLabel", "Page ".concat((i + 1), " of ", this.viewModel.count));
  if (!((this.viewModel.dotStyle == null))) goto L_303;
  this.viewModel.dotStyle;
  goto L_345;
  if (!((undefined.attributes.backgroundColor == null))) goto L_38f;
  undefined.attributes.backgroundColor;
  e.setAttributeString("pageColor", r.colors.mutedText);
  e.setAttributeNumber("pageCount", this.viewModel.count);
  e.setAttributeNumber("pageIndex", i);
  if (!((this.viewModel.selectedDotStyle == null))) goto L_4a7;
  this.viewModel.selectedDotStyle;
  goto L_4e9;
  if (!((undefined.attributes.backgroundColor == null))) goto L_533;
  undefined.attributes.backgroundColor;
  e.setAttributeString("selectedPageColor", r.colors.accent);
  if (!((undefined === this.viewModel.style))) goto L_5ce;
  goto L_67d;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", n.Style.cachingMerge(g.nativeControl, this.viewModel.style));
  e.setAttribute("touchEnabled", false);
  e.endRender();
  return;
  a = v(r);
  e.beginRender(o, undefined);
  e.setAttributeString("accessibilityLabel", "Page ".concat((i + 1), " of ", this.viewModel.count));
  if (!((undefined === this.viewModel.style))) goto L_847;
  goto L_8f6;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", n.Style.cachingMerge(g.container, this.viewModel.style));
  this.renderDots(i, a);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=1 bc=539B file=valdi_ui/src/components/PageIndicator
// args: t, o
// locals: r, this
// closure: e, i, a
function {
  this = this;
  let r;
  r = 0;
  if (!((r < this.viewModel.count))) goto L_21a;
  e.beginRender(i, "page-".concat(r));
  if (!((r === t))) goto L_143;
  goto L_1aa;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", a(o.dot, this.viewModel.dotStyle));
  if (!((r === t))) goto L_1e1;
  goto L_1e3;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0.45);
  e.endRender();
  r = <r_new>;
  (r++);
  goto L_7;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_ui/src/components/PageIndicator
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

// fn d  args=2 vars=2 closure=0 cpool=0 bc=87B file=valdi_ui/src/components/PageIndicator
// args: e, t
function {
  return Math.max(0, Math.min(e, (t - 1)));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=8B file=valdi_ui/src/components/PageIndicator
// args: e
function {
  return ("backgroundColor" === e);
}

// fn c  args=1 vars=1 closure=0 cpool=1 bc=121B file=valdi_ui/src/components/PageIndicator
// args: e
function {
  if (((undefined === e))) goto L_78;
  return Object.keys(e.attributes).every(function <atom:0>);
}

// fn a  args=2 vars=2 closure=1 cpool=0 bc=82B file=valdi_ui/src/components/PageIndicator
// args: e, t
// closure: n
function {
  if (!((undefined === t))) goto L_7;
  return e;
  return n.Style.cachingMerge(e, t);
}

// fn v  args=1 vars=2 closure=3 cpool=0 bc=562B file=valdi_ui/src/components/PageIndicator
// args: e
// locals: t
// closure: u, n, g
function {
  let t;
  t = u.get(e);
  if (((undefined !== t))) goto L_22d;
  t = {dot: n.Style.merge(g.dot, new n.Style({backgroundColor: e.colors.mutedText})), selectedDot: n.Style.merge(g.dot, new n.Style({backgroundColor: e.colors.accent}))};
  {dot: n.Style.merge(g.dot, new n.Style({backgroundColor: e.colors.mutedText})), selectedDot: n.Style.merge(g.dot, new n.Style({backgroundColor: e.colors.accent}))};
  u.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=7 bc=682B file=valdi_ui/src/components/PageIndicator
// args: require, module, exports
// locals: e, t, o, i, r, n, l, s, PageIndicator, <class_fields_init>, PageIndicator#1, d, c, a, u, v, g
function {
  d = function d;
  c = function c;
  a = function a;
  v = function v;
  let g;
  let u;
  let PageIndicator#1;
  let s;
  let l;
  let n;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PageIndicator = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["iosClass", "ValdiNativePageControl"], "AXWAATWZ6vcF1M-K");
  o = e.makeNodePrototype("view", undefined, "DqjCfRm0TAOSMXQd");
  i = e.makeNodePrototype("view", undefined, "GFg03WhsliGhmxks");
  r = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  l = require("valdi_ui_theme/src/ValdiUITheme");
  s = require("../Platform");
  let PageIndicator;
  let <class_fields_init>;
  class PageIndicator extends r.Component { ... }
  <proto:PageIndicator>.onRender = function <atom:0>;
  <proto:PageIndicator>.renderDots = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PageIndicator>;
  PageIndicator = function <atom:0>;
  // close_loc <class_fields_init>
  PageIndicator#1 = function <atom:0>;
  exports.PageIndicator = PageIndicator#1;
  u = new WeakMap();
  g = {nativeControl: new n.Style({accessibilityCategory: "text", alignSelf: "center", minHeight: 20}), container: new n.Style({alignItems: "center", flexDirection: "row", gap: 4, justifyContent: "center"}), dot: new n.Style({borderRadius: 3, height: 6, width: 6})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/PageIndicator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
