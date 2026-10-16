// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=104B file=dil_widgets/src/widgets/NativeSvg
// locals: this.active_func, new.target, arguments, this
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
  this.clipboard = new v.DILSvgClipboard(this);
  return this;
}

// fn <atom:0>  args=0 vars=16 closure=9 cpool=0 bc=2301B file=dil_widgets/src/widgets/NativeSvg
// locals: s, v, l, h, c, g, w, u, m, S, M, b, y, k, C, this
// closure: p, n, t, d, e, a, i, r, o
function {
  this = this;
  let C;
  let k;
  let y;
  let b;
  let M;
  let S;
  let m;
  let u;
  let w;
  let g;
  let c;
  let h;
  let l;
  let v;
  let s;
  if (!((this.viewModel.opaqueChildren == null))) goto L_7c;
  this.viewModel.opaqueChildren;
  s = [];
  v = p(this.viewModel.viewBox);
  if (!((this.viewModel.height == null))) goto L_151;
  this.viewModel.height;
  l = this.viewModel.size;
  if (!(("auto" === l))) goto L_160;
  goto L_163;
  // [栈深重同步 1 -> 0]
  h = l;
  if (!((this.viewModel.width == null))) goto L_20c;
  this.viewModel.width;
  if (!((this.viewModel.size == null))) goto L_20c;
  this.viewModel.size;
  if (!((undefined === h))) goto L_20b;
  if (!((undefined !== v))) goto L_20b;
  goto L_20c;
  // [栈深重同步 1 -> 0]
  c = undefined;
  if (!((undefined !== c))) goto L_2d4;
  if (((undefined === h))) goto L_280;
  if (!(("string" == typeof h))) goto L_2d4;
  if (!(h.trim().endsWith("%"))) goto L_2d4;
  if (!((undefined !== v))) goto L_2d4;
  goto L_2d5;
  // [栈深重同步 1 -> 0]
  g = undefined;
  if (!(("string" == typeof c))) goto L_335;
  w = c.trim().endsWith("%");
  if (!(w)) goto L_372;
  if (!((v == null))) goto L_347;
  v;
  goto L_368;
  if (!((undefined.width == null))) goto L_375;
  undefined.width;
  goto L_375;
  // [栈深重同步 1 -> 0]
  u = c;
  if (!((h == null))) goto L_3b3;
  h;
  if (!(w)) goto L_3b2;
  if (!((v == null))) goto L_38f;
  v;
  goto L_3b3;
  goto L_3b3;
  // [栈深重同步 1 -> 0]
  m = undefined;
  S = this.makeRootProps(u, m);
  M = n.isSvgHiddenFromAccessibility(S);
  b = {};
  if (!((undefined !== this.viewModel.autoSpacing))) goto L_4c6;
  t.applyDILAutoSpacingAttributes(b, this.viewModel.autoSpacing);
  if (((undefined === undefined))) goto L_518;
  y = <to_object>(undefined).svg;
  k = <to_object>(undefined).hasAnimation;
  <to_object>(undefined);
  goto L_552;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_4cc;
  // [栈深重同步 1 -> 0]
  if (!(M)) goto L_563;
  goto L_568;
  // [栈深重同步 2 -> 1]
  if (!(M)) goto L_5a9;
  goto L_5ae;
  // [栈深重同步 2 -> 1]
  C = {svg: y, accessibilityCategory: "image", accessibilityLabel: n.getSvgAccessibilityLabel(S, s), accessibilityNavigation: "leaf", aspectRatio: g, coalesceRapidUpdates: this.viewModel.coalesceRasterization, height: h, marginLeft: b.marginLeft, marginTop: b.marginTop, width: c};
  if (!(k)) goto L_80d;
  if (!(!d.Device.isWeb())) goto L_80d;
  e.beginComponent(a.AnimatedSvg, i, undefined, undefined);
  e.setViewModelProperty("image", C);
  e.setViewModelProperty("animatedSvg", y);
  e.setViewModelProperty("isSourceStreaming", (true === this.viewModel.isSourceStreaming));
  goto L_8b0;
  // [栈深重同步 1 -> 0]
  e.beginComponent(r.SvgView, o, undefined, undefined);
  e.setViewModelProperties(C);
  e.endComponent();
  this.clipboard.update(!M);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=820B file=dil_widgets/src/widgets/NativeSvg
// args: e, i
// locals: this
// closure: l, h
function {
  this = this;
  if (!((this.viewModel.fill == null))) goto L_aa;
  this.viewModel.fill;
  return {aria-hidden: this.viewModel["aria-hidden"], aria-label: this.viewModel["aria-label"], fill: "currentColor", height: i, preserveAspectRatio: this.viewModel.preserveAspectRatio, role: this.viewModel.role, stroke: this.viewModel.stroke, strokeLinecap: this.viewModel.strokeLinecap, strokeLinejoin: this.viewModel.strokeLinejoin, strokeWidth: this.viewModel.strokeWidth, style: {color: l.resolveSvgColor(this.viewModel.color, "prose")}, viewBox: this.viewModel.viewBox, width: e, xmlns: h};
}

// fn p  args=1 vars=4 closure=0 cpool=2 bc=261B file=dil_widgets/src/widgets/NativeSvg
// args: e
// locals: i, o, t
function {
  let t;
  let o;
  let i;
  if (!((undefined === e))) goto L_f;
  return;
  i = e.trim().split(new RegExp("[\\s,]+"));
  if (!((4 !== i.length))) goto L_67;
  return;
  o = Number(i[2]);
  t = Number(i[3]);
  if ((!Number.isFinite(o))) goto L_ef;
  if ((!Number.isFinite(t))) goto L_ef;
  if (((o <= 0))) goto L_ef;
  if (!((t <= 0))) goto L_f3;
  return undefined;
  return {width: o, height: t};
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=4 bc=502B file=dil_widgets/src/widgets/NativeSvg
// args: require, module, exports
// locals: e, i, o, t, r, s, d, a, v, l, n, h, NativeSvg, <class_fields_init>, NativeSvg#1, p
function {
  p = function p;
  let NativeSvg#1;
  let h;
  let n;
  let l;
  let v;
  let a;
  let d;
  let s;
  let r;
  let t;
  let o;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NativeSvg = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeComponentPrototype(undefined, "QsuLO96uXeUAJ-A1");
  o = e.makeComponentPrototype(undefined, "pMY5P6BSiJpPPhYl");
  t = require("dil_core/src/layout/DILAutoSpacingAttributes");
  r = require("svg/src/SvgView");
  s = require("valdi_core/src/Component");
  d = require("valdi_core/src/Device");
  a = require("./AnimatedSvg");
  v = require("./DILSvgClipboard");
  l = require("./SvgColor");
  n = require("./SvgSerializer");
  h = "http://www.w3.org/2000/svg";
  let NativeSvg;
  let <class_fields_init>;
  class NativeSvg extends s.Component { ... }
  <proto:NativeSvg>.onRender = function <atom:0>;
  <proto:NativeSvg>.makeRootProps = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeSvg>;
  NativeSvg = function <atom:0>;
  // close_loc <class_fields_init>
  NativeSvg#1 = function <atom:0>;
  exports.NativeSvg = NativeSvg#1;
  NativeSvg#1.dilV2Properties = ["aria-hidden", "aria-label", "color", "fill", "height", "preserveAspectRatio", "role", "size", "stroke", "strokeLinecap", "strokeLinejoin", "strokeWidth", "viewBox", "width", "xmlns"];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/NativeSvg
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
