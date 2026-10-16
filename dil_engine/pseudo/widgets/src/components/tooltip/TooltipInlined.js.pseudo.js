// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=177B file=widgets/src/components/tooltip/TooltipInlined
// closure: this, d
function {
  if (!((this.viewModel.overrideBackgroundColor == null))) goto L_b0;
  this.viewModel.overrideBackgroundColor;
  return d.SemanticColor.Background.SURFACE;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=63B file=widgets/src/components/tooltip/TooltipInlined
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
  this.getBackgroundColor = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=5 closure=8 cpool=0 bc=1237B file=widgets/src/components/tooltip/TooltipInlined
// locals: r, l, a, s, this
// closure: t, o, m, e, T, i, n, C
function {
  this = this;
  let s;
  let a;
  let l;
  let r;
  if (((undefined === undefined))) goto L_a7;
  r = <to_object>(undefined).text;
  l = <to_object>(undefined).position;
  a = <to_object>(undefined).opacity;
  s = <to_object>(undefined).onTap;
  <to_object>(undefined);
  goto L_ce;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_17;
  // [栈深重同步 1 -> 0]
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", m[l]);
  t.beginRender(e, undefined);
  t.setAttributeStyle("style", T.container);
  t.setAttributeString("backgroundColor", this.getBackgroundColor());
  t.setAttributeFunction("onTap", s);
  t.setAttributeNumber("opacity", a);
  t.beginRender(i, undefined);
  t.setAttributeString("value", r);
  t.setAttributeStyle("style", T.label(this.viewModel.maxNumberOfLines));
  t.endRender();
  t.endRender();
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", C[l]);
  t.setAttributeString("tint", this.getBackgroundColor());
  t.setAttributeNumber("opacity", a);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=245B file=widgets/src/components/tooltip/TooltipInlined
// args: t
// closure: l, s, d
function {
  if (!((t == null))) goto L_ec;
  t;
  return new l.Style({textAlign: "center", font: s.TextStyleFont.CAPTION, color: d.SemanticColor.Text.PRIMARY, numberOfLines: 3});
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=3 bc=5104B file=widgets/src/components/tooltip/TooltipInlined
// args: require, module, exports
// locals: t, o, e, i, n, r, l, a, s, d, g, p, c, TooltipInlined, <class_fields_init>, TooltipInlined#1, T, m, C
function {
  let C;
  let m;
  let T;
  let TooltipInlined#1;
  let c;
  let p;
  let g;
  let d;
  let s;
  let a;
  let l;
  let r;
  let n;
  let i;
  let e;
  let o;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TooltipInlined = undefined;
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeNodePrototype("layout", undefined, "HVr_zeb-li_Ukutx");
  e = t.makeNodePrototype("view", undefined, "Efyd_-qECWnDuccx");
  i = t.makeNodePrototype("label", undefined, "G25UfQd_pRopSLE6");
  n = t.makeNodePrototype("image", undefined, "gZqXVhydWKKU7ajr");
  r = require("valdi_core/src/Component");
  l = require("valdi_core/src/Style");
  a = require("widgets/res");
  s = require("widgets/src/styles/TextStyleFont");
  d = require("widgets/src/styles/semanticColors");
  g = require("widgets/src/styles/spacing");
  p = require("./TooltipConstants");
  c = require("./TooltipPosition");
  let TooltipInlined;
  let <class_fields_init>;
  class TooltipInlined extends r.Component { ... }
  <proto:TooltipInlined>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TooltipInlined>;
  TooltipInlined = function <atom:0>;
  // close_loc <class_fields_init>
  TooltipInlined#1 = function <atom:0>;
  exports.TooltipInlined = TooltipInlined#1;
  T = {root: new l.Style({justifyContent: "flex-end"}), container: new l.Style({paddingTop: g.Spacing.XS, paddingBottom: g.Spacing.XS, paddingLeft: g.Spacing.SM, paddingRight: g.Spacing.SM, borderRadius: g.Spacing.XS, boxShadow: "0 0 6 rgba(0,0,0,0.15)", backgroundColor: d.SemanticColor.Background.SURFACE, overflow: "scroll"}), label: function <atom:0>, tail: new l.Style({src: a.default.iconTooltipTail, width: p.TooltipConstants.tailImageSize, height: p.TooltipConstants.tailImageSize, tint: d.SemanticColor.Background.SURFACE})};
  {}[c.TooltipPosition.BottomLeft] = T.root.extend({flexDirection: "column-reverse", alignItems: "flex-end"});
  T.root.extend({flexDirection: "column-reverse", alignItems: "flex-end"});
  {}[c.TooltipPosition.BottomRight] = T.root.extend({flexDirection: "column-reverse", alignItems: "flex-start"});
  T.root.extend({flexDirection: "column-reverse", alignItems: "flex-start"});
  {}[c.TooltipPosition.BottomCenter] = T.root.extend({flexDirection: "column-reverse", alignItems: "center"});
  T.root.extend({flexDirection: "column-reverse", alignItems: "center"});
  {}[c.TooltipPosition.CenterLeft] = T.root.extend({flexDirection: "row", alignItems: "center"});
  T.root.extend({flexDirection: "row", alignItems: "center"});
  {}[c.TooltipPosition.CenterRight] = T.root.extend({flexDirection: "row-reverse", alignItems: "center"});
  T.root.extend({flexDirection: "row-reverse", alignItems: "center"});
  {}[c.TooltipPosition.TopLeft] = T.root.extend({flexDirection: "column", alignItems: "flex-end"});
  T.root.extend({flexDirection: "column", alignItems: "flex-end"});
  {}[c.TooltipPosition.TopRight] = T.root.extend({flexDirection: "column", alignItems: "flex-start"});
  T.root.extend({flexDirection: "column", alignItems: "flex-start"});
  {}[c.TooltipPosition.TopCenter] = T.root.extend({flexDirection: "column", alignItems: "center"});
  T.root.extend({flexDirection: "column", alignItems: "center"});
  m = {};
  {}[c.TooltipPosition.BottomLeft] = T.tail.extend({rotation: Math.PI, marginRight: p.TooltipConstants.tailToCornerDistance, marginTop: p.TooltipConstants.tailToContentMargin});
  T.tail.extend({rotation: Math.PI, marginRight: p.TooltipConstants.tailToCornerDistance, marginTop: p.TooltipConstants.tailToContentMargin});
  {}[c.TooltipPosition.BottomRight] = T.tail.extend({rotation: Math.PI, marginLeft: p.TooltipConstants.tailToCornerDistance, marginTop: p.TooltipConstants.tailToContentMargin});
  T.tail.extend({rotation: Math.PI, marginLeft: p.TooltipConstants.tailToCornerDistance, marginTop: p.TooltipConstants.tailToContentMargin});
  {}[c.TooltipPosition.BottomCenter] = T.tail.extend({rotation: Math.PI, marginTop: p.TooltipConstants.tailToContentMargin});
  T.tail.extend({rotation: Math.PI, marginTop: p.TooltipConstants.tailToContentMargin});
  {}[c.TooltipPosition.CenterLeft] = T.tail.extend({rotation: (-Math.PI / 2), marginRight: p.TooltipConstants.tailToContentMargin});
  T.tail.extend({rotation: (-Math.PI / 2), marginRight: p.TooltipConstants.tailToContentMargin});
  {}[c.TooltipPosition.CenterRight] = T.tail.extend({rotation: (Math.PI / 2), marginLeft: p.TooltipConstants.tailToContentMargin});
  T.tail.extend({rotation: (Math.PI / 2), marginLeft: p.TooltipConstants.tailToContentMargin});
  {}[c.TooltipPosition.TopLeft] = T.tail.extend({rotation: 0, marginRight: p.TooltipConstants.tailToCornerDistance, marginBottom: p.TooltipConstants.tailToContentMargin});
  T.tail.extend({rotation: 0, marginRight: p.TooltipConstants.tailToCornerDistance, marginBottom: p.TooltipConstants.tailToContentMargin});
  {}[c.TooltipPosition.TopRight] = T.tail.extend({rotation: 0, marginLeft: p.TooltipConstants.tailToCornerDistance, marginBottom: p.TooltipConstants.tailToContentMargin});
  T.tail.extend({rotation: 0, marginLeft: p.TooltipConstants.tailToCornerDistance, marginBottom: p.TooltipConstants.tailToContentMargin});
  {}[c.TooltipPosition.TopCenter] = T.tail.extend({rotation: 0, marginBottom: p.TooltipConstants.tailToContentMargin});
  T.tail.extend({rotation: 0, marginBottom: p.TooltipConstants.tailToContentMargin});
  C = {};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/tooltip/TooltipInlined
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
