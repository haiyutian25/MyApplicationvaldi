// fn <atom:0>  args=2 vars=9 closure=12 cpool=0 bc=2041B file=dil_text/src/shimmer/ShimmerTextWidgetRenderer
// args: i, n
// locals: a, c, o, a#1, y, L, this
// closure: o, g, r, x, u, s, e, l, t, m, p, d
function {
  this = this;
  let c;
  let a;
  a = o.DILRenderChildCounter.fromRenderState(n);
  if (!((a == null))) goto L_5e;
  a;
  goto L_ab;
  c = undefined.beginComponent({name: this.name});
  try { // catch -> L_7c1
  let L;
  let y;
  let a#1;
  let o;
  o = g(this.props, i);
  a#1 = r.getDILAutoSpacingContext(n);
  y = x(c, a#1);
  L = new u.DILTextFontResolver();
  if (!((o.size == null))) goto L_191;
  o.size;
  if (!((o.weight == null))) goto L_1bf;
  o.weight;
  if (!((o.italic == null))) goto L_1ea;
  o.italic;
  L.pushFontStyle("md", "normal", false, s.DILFontRole.Text);
  e.beginComponent(l.DILTextComponent, t, undefined, undefined);
  e.setViewModelProperty("value", o.value);
  e.setViewModelProperty("width", m(o.width, r.getDILFlexDirection(n)));
  e.setViewModelProperty("textAlign", o.textAlign);
  e.setViewModelProperty("truncate", o.truncate);
  e.setViewModelProperty("maxLines", o.maxLines);
  e.setViewModelProperty("minLines", o.minLines);
  if (!((a#1 == null))) goto L_4cd;
  a#1;
  goto L_4ee;
  if (!(("column" === undefined.direction))) goto L_4f6;
  goto L_4f7;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("marginTop", undefined);
  if (!((a#1 == null))) goto L_534;
  a#1;
  goto L_555;
  if (!(("row" === undefined.direction))) goto L_55d;
  goto L_55e;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("marginLeft", undefined);
  if (!(("column" === r.getDILFlexDirection(n)))) goto L_5bc;
  goto L_5bd;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("flexShrink", undefined);
  if (!((o.size == null))) goto L_63c;
  o.size;
  e.setViewModelProperty("lineHeightMultiple", p.resolveDILTextLineHeightRatio("md"));
  e.setViewModelProperty("font", L.resolveFont());
  e.setViewModelProperty("color", d.resolveDILTextColor(o.color, "prose"));
  e.setViewModelProperty("shimmer", true);
  e.setViewModelProperty("textDecoration", o.textDecoration);
  e.endComponent();
  <?>;
  // gosub (finally 块) 1991
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1991
  throw <?>;
  if (!((a == null))) goto L_7d2;
  a;
  goto L_7f6;
  undefined.popFrame();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_text/src/shimmer/ShimmerTextWidgetRenderer
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

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=29B file=dil_text/src/shimmer/ShimmerTextWidgetRenderer
// locals: this
// closure: <class_fields_init>, c
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.properties = c;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_text/src/shimmer/ShimmerTextWidgetRenderer
// args: e
// closure: ShimmerTextWidgetRenderer
function {
  return new ShimmerTextWidgetRenderer(e);
}

// fn g  args=2 vars=3 closure=4 cpool=0 bc=625B file=dil_text/src/shimmer/ShimmerTextWidgetRenderer
// args: e, t
// locals: r
// closure: a, y, L, h
function {
  let r;
  r = a.readTextDecorationFromValue(e.getPropertyValueAsBoolean("lineThrough", t), e.getPropertyValue("underline", t));
  if (!((e.getPropertyValueAsString("value", t) == null))) goto L_209;
  e.getPropertyValueAsString("value", t);
  return {color: y(e, t), italic: e.getPropertyValueAsBoolean("italic", t), maxLines: e.getPropertyValueAsNumber("maxLines", t), minLines: e.getPropertyValueAsNumber("minLines", t), size: L(e.getPropertyValueAsString("size", t)), textDecoration: r, textAlign: a.readTextAlignFromValue(e.getPropertyValueAsString("textAlign", t)), truncate: e.getPropertyValueAsBoolean("truncate", t), value: "", weight: h(e.getPropertyValueAsString("weight", t)), width: e.getPropertyValueAsStringOrNumber("width", t)};
}

// fn m  args=2 vars=2 closure=0 cpool=0 bc=24B file=dil_text/src/shimmer/ShimmerTextWidgetRenderer
// args: e, t
function {
  if (!((undefined !== e))) goto L_7;
  return e;
  if (!(("row" !== t))) goto L_16;
  return "100%";
  return undefined;
}

// fn x  args=2 vars=2 closure=1 cpool=0 bc=52B file=dil_text/src/shimmer/ShimmerTextWidgetRenderer
// args: e, t
// closure: n
function {
  if (!((undefined !== t))) goto L_33;
  if (!((undefined !== e))) goto L_33;
  return n.resolveDILAutoSpacingChildMargin(t, e);   // tail call
  return;
}

// fn y  args=2 vars=4 closure=0 cpool=0 bc=258B file=dil_text/src/shimmer/ShimmerTextWidgetRenderer
// args: e, t
// locals: r, o
function {
  let o;
  let r;
  r = e.getPropertyValueAsString("color", t);
  if (!((undefined !== r))) goto L_3d;
  return r;
  if (!((null === e.getPropertyValue("color", t)))) goto L_6e;
  return null;
  o = e.getPropertyValueAsMap("color", t);
  if (!((o == null))) goto L_aa;
  o;
  goto L_cb;
  if (!(("string" == typeof undefined.light))) goto L_100;
  if (!(("string" == typeof o.dark))) goto L_100;
  return o;
  return undefined;
}

// fn L  args=1 vars=1 closure=0 cpool=0 bc=56B file=dil_text/src/shimmer/ShimmerTextWidgetRenderer
// args: e
function {
  if ((("xs" === e))) goto L_33;
  if ((("sm" === e))) goto L_33;
  if ((("md" === e))) goto L_33;
  if ((("lg" === e))) goto L_33;
  if (!(("xl" === e))) goto L_37;
  return e;
  return;
}

// fn h  args=1 vars=1 closure=0 cpool=0 bc=45B file=dil_text/src/shimmer/ShimmerTextWidgetRenderer
// args: e
function {
  if ((("normal" === e))) goto L_28;
  if ((("medium" === e))) goto L_28;
  if ((("semibold" === e))) goto L_28;
  if (!(("bold" === e))) goto L_2c;
  return e;
  return;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=10 bc=510B file=dil_text/src/shimmer/ShimmerTextWidgetRenderer
// args: require, module, exports
// locals: e, t, r, o, i, n, l, s, u, a, d, p, c, ShimmerTextWidgetRenderer, <class_fields_init>, ShimmerTextWidgetRenderer#1, ShimmerTextWidgetRendererFactory, <class_fields_init>#1, ShimmerTextWidgetRendererFactory#1, g, m, x, y, L, h
function {
  g = function g;
  m = function m;
  x = function x;
  y = function y;
  L = function L;
  h = function h;
  let ShimmerTextWidgetRendererFactory#1;
  let ShimmerTextWidgetRenderer#1;
  let c;
  let p;
  let d;
  let a;
  let u;
  let s;
  let l;
  let n;
  let i;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ShimmerTextWidgetRendererFactory = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(["autoSpacingRole", "text"], "QpWbuMy2ptxLODLk");
  r = require("dil_compiler/src/DILAutoSpacingRenderState");
  o = require("dil_compiler/src/DILRenderChildState");
  i = require("dil_compiler/src/DILTypes");
  n = require("dil_core/src/layout/DILAutoSpacingAttributes");
  l = require("../DILTextComponent");
  s = require("../rendering/DILTextFont");
  u = require("../rendering/DILTextFontResolver");
  a = require("../rendering/DILTextProperties");
  d = require("../rendering/DILTextColor");
  p = require("../rendering/DILTextTypography");
  c = ["color", "italic", "lineThrough", "maxLines", "minLines", "size", "tabularNums", "textAlign", "truncate", "underline", "value", "weight", "width"];
  let ShimmerTextWidgetRenderer;
  let <class_fields_init>;
  class ShimmerTextWidgetRenderer extends i.ADILWidgetRendererInternal { ... }
  <proto:ShimmerTextWidgetRenderer>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ShimmerTextWidgetRenderer>;
  ShimmerTextWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  ShimmerTextWidgetRenderer#1 = function <atom:0>;
  let ShimmerTextWidgetRendererFactory;
  let <class_fields_init>#1;
  class ShimmerTextWidgetRendererFactory extends undefined { ... }
  <proto:ShimmerTextWidgetRendererFactory>.create = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ShimmerTextWidgetRendererFactory>;
  ShimmerTextWidgetRendererFactory = function <atom:0>;
  // close_loc <class_fields_init>#1
  ShimmerTextWidgetRendererFactory#1 = function <atom:0>;
  exports.ShimmerTextWidgetRendererFactory = ShimmerTextWidgetRendererFactory#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/shimmer/ShimmerTextWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
