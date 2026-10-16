// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=104B file=dil_widgets/src/widgets/Svg
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, s
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
  this.clipboard = new s.DILSvgClipboard(this);
  return this;
}

// fn <atom:0>  args=0 vars=8 closure=7 cpool=0 bc=2641B file=dil_widgets/src/widgets/Svg
// locals: t, d, s, l, n, v, w, this
// closure: u, h, o, e, r, i, a
function {
  this = this;
  let w;
  let v;
  let n;
  let l;
  let s;
  let d;
  let t;
  t = u(this.viewModel.viewBox);
  if (!((this.viewModel.width == null))) goto L_f4;
  this.viewModel.width;
  if (!((this.viewModel.size == null))) goto L_f4;
  this.viewModel.size;
  d = h;
  if (!((undefined !== this.viewModel.width))) goto L_225;
  if (!((undefined === this.viewModel.height))) goto L_225;
  if (!((undefined === this.viewModel.size))) goto L_225;
  if (!((undefined !== t))) goto L_225;
  goto L_226;
  // [栈深重同步 1 -> 0]
  s = undefined;
  if (!((this.viewModel.height == null))) goto L_2c6;
  this.viewModel.height;
  if (!((this.viewModel.size == null))) goto L_2c6;
  this.viewModel.size;
  if (!((undefined === s))) goto L_2c5;
  goto L_2c6;
  // [栈深重同步 1 -> 0]
  l = undefined;
  if (!((l == null))) goto L_303;
  l;
  if (!((t == null))) goto L_2da;
  t;
  goto L_2fb;
  if (!((undefined.height == null))) goto L_303;
  undefined.height;
  n = h;
  v = o.resolveDILFlex(this.viewModel.flex);
  w = this.baseViewAttributes;
  e.beginComponent(r.SvgView, i, undefined, undefined);
  e.setViewModelProperty("svg", a(this.viewModel, d, n, t));
  e.setViewModelProperty("accessibilityCategory", this.accessibilityCategory);
  if (!((o.resolveDILAspectRatio(this.viewModel.aspectRatio) == null))) goto L_52f;
  o.resolveDILAspectRatio(this.viewModel.aspectRatio);
  e.setViewModelProperty("aspectRatio", s);
  if (!((this.viewModel.minSize == null))) goto L_5d1;
  this.viewModel.minSize;
  if (!((v == null))) goto L_5b0;
  v;
  goto L_5d1;
  e.setViewModelProperty("flexBasis", undefined.basis);
  if (!((v == null))) goto L_609;
  v;
  goto L_62a;
  e.setViewModelProperty("flexGrow", undefined.grow);
  if (!((v == null))) goto L_662;
  v;
  goto L_683;
  e.setViewModelProperty("flexShrink", undefined.shrink);
  e.setViewModelProperty("height", l);
  e.setViewModelProperty("marginLeft", w.marginLeft);
  e.setViewModelProperty("marginTop", w.marginTop);
  if (!((this.viewModel.maxHeight == null))) goto L_80f;
  this.viewModel.maxHeight;
  e.setViewModelProperty("maxHeight", this.viewModel.maxSize);
  if (!((this.viewModel.maxWidth == null))) goto L_8c9;
  this.viewModel.maxWidth;
  e.setViewModelProperty("maxWidth", this.viewModel.maxSize);
  e.setViewModelProperty("minHeight", this.viewModel.minHeight);
  e.setViewModelProperty("minWidth", this.viewModel.minWidth);
  e.setViewModelProperty("width", d);
  e.endComponent();
  this.clipboard.update(true);
  return;
}

// fn a  args=4 vars=8 closure=6 cpool=0 bc=737B file=dil_widgets/src/widgets/Svg
// args: e, i, t, o
// locals: r, s, h, d
// closure: l, d, v, p, n, w
function {
  let h;
  let s;
  let r;
  r = l.resolveSvgColor(e.color, "prose");
  s = new d.XmlBuilder();
  s.beginNode("svg");
  s.addAttribute("xmlns", v);
  if (!((o == null))) goto L_110;
  o;
  goto L_131;
  s.addAttribute("width", p(i, undefined.width));
  if (!((o == null))) goto L_16a;
  o;
  goto L_18b;
  s.addAttribute("height", p(t, undefined.height));
  if (!((e.viewBox == null))) goto L_1e3;
  e.viewBox;
  s.addAttribute("viewBox", n);
  s.addAttribute("fill", "none");
  s.addAttribute("color", r);
  if (!((e.paths == null))) goto L_273;
  e.paths;
  h = [];
  let d;
  for (const d of h) {
    w(s, d, r);
  }
  s.endNode();
  return s.build();   // tail call
}

// fn w  args=3 vars=4 closure=1 cpool=0 bc=1235B file=dil_widgets/src/widgets/Svg
// args: e, i, t
// locals: o
// closure: l
function {
  let o;
  if (!((undefined !== i.fill))) goto L_73;
  goto L_a1;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== i.stroke))) goto L_a0;
  goto L_a1;
  // [栈深重同步 1 -> 0]
  o = t;
  e.beginNode("path");
  e.addAttribute("d", i.d);
  e.addAttribute("fill", o);
  if (!((undefined !== i.stroke))) goto L_1e2;
  e.addAttribute("stroke", l.resolveSvgPaint(i.stroke, t));
  if (!((undefined !== i.strokeWidth))) goto L_25d;
  e.addAttribute("stroke-width", String(i.strokeWidth));
  if (!((undefined !== i.strokeLinecap))) goto L_2d2;
  e.addAttribute("stroke-linecap", i.strokeLinecap);
  if (!((undefined !== i.strokeLinejoin))) goto L_347;
  e.addAttribute("stroke-linejoin", i.strokeLinejoin);
  if (!((undefined !== i.fillRule))) goto L_3bc;
  e.addAttribute("fill-rule", i.fillRule);
  if (!((undefined !== i.clipRule))) goto L_431;
  e.addAttribute("clip-rule", i.clipRule);
  if (!((undefined !== i.opacity))) goto L_4ac;
  e.addAttribute("opacity", String(i.opacity));
  e.endNode();
  return;
}

// fn u  args=1 vars=4 closure=0 cpool=2 bc=261B file=dil_widgets/src/widgets/Svg
// args: e
// locals: i, t, o
function {
  let o;
  let t;
  let i;
  if (!((undefined === e))) goto L_f;
  return;
  i = e.trim().split(new RegExp("[\\s,]+"));
  if (!((4 !== i.length))) goto L_67;
  return;
  t = Number(i[2]);
  o = Number(i[3]);
  if ((!Number.isFinite(t))) goto L_ef;
  if ((!Number.isFinite(o))) goto L_ef;
  if (((t <= 0))) goto L_ef;
  if (!((o <= 0))) goto L_f3;
  return undefined;
  return {width: t, height: o};
}

// fn p  args=2 vars=2 closure=2 cpool=0 bc=29B file=dil_widgets/src/widgets/Svg
// args: e, i
// closure: g, h
function {
  if (!(g(e))) goto L_15;
  if (!((i == null))) goto L_13;
  i;
  return String(h);
  return String(e);
}

// fn g  args=1 vars=1 closure=0 cpool=0 bc=91B file=dil_widgets/src/widgets/Svg
// args: e
function {
  if (!(("string" == typeof e))) goto L_5a;
  return e.trim().endsWith("%");
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=7 bc=515B file=dil_widgets/src/widgets/Svg
// args: require, module, exports
// locals: e, i, t, o, r, d, s, l, n, h, v, Svg, <class_fields_init>, Svg#1, a, w, u, p, g
function {
  a = function a;
  w = function w;
  u = function u;
  p = function p;
  g = function g;
  let Svg#1;
  let v;
  let h;
  let n;
  let l;
  let s;
  let d;
  let r;
  let o;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Svg = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeComponentPrototype(undefined, "aYYtosR4MwAEDgVt");
  t = require("dil_core/src/DILComponent");
  o = require("dil_core/src/layout/DILLayout");
  r = require("svg/src/SvgView");
  d = require("dil_core/src/utils/XmlBuilder");
  s = require("./DILSvgClipboard");
  l = require("./SvgColor");
  n = "0 0 24 24";
  h = 24;
  v = "http://www.w3.org/2000/svg";
  let Svg;
  let <class_fields_init>;
  class Svg extends t.DILComponent { ... }
  <proto:Svg>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Svg>;
  Svg = function <atom:0>;
  // close_loc <class_fields_init>
  Svg#1 = function <atom:0>;
  exports.Svg = Svg#1;
  // append([], 0, t.DIL_COMPONENT_PROPERTIES)
  [][t.DIL_COMPONENT_PROPERTIES] = "aspectRatio";
  [][("aspectRatio" ++)] = "color";
  [][("color" ++)] = "flex";
  [][("flex" ++)] = "height";
  [][("height" ++)] = "maxHeight";
  [][("maxHeight" ++)] = "maxSize";
  [][("maxSize" ++)] = "maxWidth";
  [][("maxWidth" ++)] = "minHeight";
  [][("minHeight" ++)] = "minSize";
  [][("minSize" ++)] = "minWidth";
  [][("minWidth" ++)] = "paths";
  [][("paths" ++)] = "size";
  [][("size" ++)] = "viewBox";
  [][("viewBox" ++)] = "width";
  ("width" ++);
  Svg#1.properties = [];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Svg
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
