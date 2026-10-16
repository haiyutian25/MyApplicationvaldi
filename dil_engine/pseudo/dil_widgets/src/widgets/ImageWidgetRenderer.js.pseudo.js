// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/ImageWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: n, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(n.Image, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(n.Image, e);
  return this;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=dil_widgets/src/widgets/ImageWidgetRenderer
// args: e, t
// closure: this
function {
  return this.setViewModelProperty(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=1 bc=242B file=dil_widgets/src/widgets/ImageWidgetRenderer
// args: e, i
// locals: o, this, <home_object>
// closure: r, t, d
function {
  <home_object> = <special_object 4>;
  this = this;
  let o;
  super["setViewModelProperties"].call(this, e, i);
  this.setViewModelProperty("streamingAnimation", r.getDILStreamingAnimation(i));
  o = t.getDILFlexDirection(i);
  if (!((undefined !== o))) goto L_c5;
  this.setViewModelProperty("parentFlexDirection", o);
  d(this, this.props, e, i, function <atom:0>);
  return;
}

// fn d  args=6 vars=23 closure=2 cpool=0 bc=1121B file=dil_widgets/src/widgets/ImageWidgetRenderer
// args: e, t, r, i, n, a
// locals: e#1, t#1, r#1, i#1, n#1, a#1, l, s, d, u, p, c, m, h, I, y, S
// closure: g, o
function {
  let a#1;
  let n#1;
  let i#1;
  let r#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  r#1 = r;
  i#1 = i;
  n#1 = n;
  if (!((a === undefined))) goto L_2c;
  a;
  a = false;
  a#1 = false;
  let S;
  let y;
  let I;
  let h;
  let m;
  let c;
  let p;
  let u;
  let d;
  let s;
  let l;
  l = g(i);
  if (!((l == null))) goto L_61;
  l;
  goto L_a7;
  if (!((true !== undefined.directImageRenderers.has(e)))) goto L_ab;
  return;
  s = {};
  o.populateAttributesFromStyle(s, t.getPropertyValue("style", r), undefined);
  d = t.getPropertyValue("size", r);
  u = t.getPropertyValue("height", r);
  p = t.getPropertyValue("width", r);
  if (!((null == u))) goto L_1f3;
  if (!((null == d))) goto L_1f3;
  if (!((null != s.height))) goto L_1f3;
  n("height", s.height);
  if (!((null == p))) goto L_25d;
  if (!((null == d))) goto L_25d;
  if (!((null != s.width))) goto L_25d;
  n("width", s.width);
  if (!((null == u))) goto L_2a8;
  if (!((null == d))) goto L_2a8;
  if (!((null == s.height))) goto L_2a8;
  n("height", "100%");
  c = t.getPropertyValue("maxHeight", r);
  m = t.getPropertyValue("maxSize", r);
  if (!((null == c))) goto L_323;
  if (!((null == m))) goto L_323;
  n("maxHeight", "100%");
  h = t.getPropertyValue("minSize", r);
  if (!((t.getPropertyValue("minHeight", r) == null))) goto L_384;
  t.getPropertyValue("minHeight", r);
  I = h;
  if (!((t.getPropertyValue("minWidth", r) == null))) goto L_3b9;
  t.getPropertyValue("minWidth", r);
  y = h;
  if (((null != p))) goto L_3f3;
  if (((null != d))) goto L_3f3;
  S = (null != s.width);
  if (!(l.fitted)) goto L_443;
  if (!(!S)) goto L_443;
  if (!(!y)) goto L_443;
  if (!(!u)) goto L_443;
  if (!(!I)) goto L_443;
  goto L_460;
  // [栈深重同步 1 -> 0]
  if (!(a)) goto L_460;
  if (!(!S)) goto L_460;
  n("width", "auto");
  return;
}

// fn g  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_widgets/src/widgets/ImageWidgetRenderer
// args: e
// closure: a
function {
  return e.getProperty(a);   // tail call
}

// fn u  args=3 vars=5 closure=2 cpool=0 bc=91B file=dil_widgets/src/widgets/ImageWidgetRenderer
// args: e, t, r
// locals: i, o
// closure: p, a
function {
  let i;
  i = new Set();
  let o;
  for (const o of r) {
    p(o, i);
  }
  return e.withProperty(a, {directImageRenderers: i, fitted: t});   // tail call
}

// fn p  args=2 vars=4 closure=4 cpool=0 bc=295B file=dil_widgets/src/widgets/ImageWidgetRenderer
// args: e, t
// locals: r, i
// closure: i, l, s, p
function {
  let r;
  r = i.unwrapDILWidgetRenderer(e);
  if (!(l.has(r.name))) goto L_a1;
  t.add(r);
  return;
  if (!(s.has(r.name))) goto L_126;
  let i;
  for (const i of r.children) {
    p(i, t);
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/ImageWidgetRenderer
// args: e
// closure: ImageWidgetRenderer
function {
  return new ImageWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=7 bc=447B file=dil_widgets/src/widgets/ImageWidgetRenderer
// args: require, module, exports
// locals: e, t, r, i, o, n, a, l, s, ImageWidgetRenderer, <class_fields_init>, ImageWidgetRenderer#1, d, g, u, p
function {
  d = function d;
  g = function g;
  u = function u;
  p = function p;
  let ImageWidgetRenderer#1;
  let s;
  let l;
  let a;
  let n;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.applyBaseCarouselMediaItemImageSizing = undefined;
  exports.renderStateWithBaseCarouselMediaItemImageSizing = undefined;
  exports.ImageWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  t = require("dil_compiler/src/DILAutoSpacingRenderState");
  r = require("dil_compiler/src/DILStreamingRenderState");
  i = require("dil_compiler/src/DILWidgetRendererUnwrap");
  o = require("dil_core/src/style/DILStyle");
  n = require("./Image");
  a = Symbol("BaseCarouselMediaItemImageSizing");
  l = new Set(["Image", "SearchImage"]);
  s = new Set(["Each", "Scope", "Show", "Show.Else"]);
  let ImageWidgetRenderer;
  let <class_fields_init>;
  class ImageWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:ImageWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ImageWidgetRenderer>;
  ImageWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  ImageWidgetRenderer#1 = function <atom:0>;
  exports.applyBaseCarouselMediaItemImageSizing = d;
  exports.renderStateWithBaseCarouselMediaItemImageSizing = u;
  exports.ImageWidgetFactory = {properties: n.Image.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/ImageWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
