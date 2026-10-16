// fn <atom:0>  args=0 vars=13 closure=6 cpool=0 bc=1640B file=widgets/src/components/subscreen/SubscreenHeaderButton
// locals: r, n, a, u, l, d, b, g, m, y, S, h, this
// closure: s, o, e, t, c, i
function {
  this = this;
  let h;
  let S;
  let y;
  let m;
  let g;
  let b;
  let d;
  let l;
  let u;
  let a;
  let n;
  let r;
  if (!((this.viewModel == null))) goto L_50;
  this.viewModel;
  r = {};
  n = r.image;
  if (!((r.imageWidth == null))) goto L_cb;
  r.imageWidth;
  if (!((n == null))) goto L_aa;
  n;
  goto L_cb;
  a = undefined.width;
  if (!((r.imageHeight == null))) goto L_121;
  r.imageHeight;
  if (!((n == null))) goto L_100;
  n;
  goto L_121;
  u = undefined.height;
  if (!((r.imageColor == null))) goto L_1b1;
  r.imageColor;
  l = s.SemanticColor.Text.PRIMARY;
  d = r.imageRotation;
  if (!((r.touchAreaExtension == null))) goto L_247;
  r.touchAreaExtension;
  b = o.Spacing.SM;
  g = r.onTap;
  m = r.accessibilityId;
  y = r.accessibilityLabel;
  S = r.accessibilityHint;
  if (!((r.flipOnRtl == null))) goto L_30c;
  r.flipOnRtl;
  h = true;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", c.container);
  e.setAttributeNumber("touchAreaExtension", b);
  e.setAttributeFunction("onTap", g);
  e.setAttributeString("accessibilityId", m);
  e.setAttributeString("accessibilityHint", S);
  e.setAttributeString("accessibilityLabel", y);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", c.image);
  e.setAttribute("src", n);
  e.setAttribute("width", a);
  e.setAttribute("height", u);
  e.setAttributeString("tint", l);
  e.setAttributeNumber("rotation", d);
  e.setAttribute("flipOnRtl", h);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/subscreen/SubscreenHeaderButton
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

// fn <atom:0>  args=3 vars=15 closure=0 cpool=2 bc=670B file=widgets/src/components/subscreen/SubscreenHeaderButton
// args: require, module, exports
// locals: e, t, i, r, n, s, o, a, SubscreenHeaderButton, <class_fields_init>, SubscreenHeaderButton#1, c
function {
  let c;
  let SubscreenHeaderButton#1;
  let a;
  let o;
  let s;
  let n;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscreenHeaderButton = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "UiGR-ll6h0GMPS4e");
  i = e.makeNodePrototype("image", undefined, "M8A6JMtOEDl4Us7M");
  r = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  s = require("widgets/src/styles/semanticColors");
  o = require("widgets/src/styles/spacing");
  a = require("./SubscreenHeaderBlueprint");
  let SubscreenHeaderButton;
  let <class_fields_init>;
  class SubscreenHeaderButton extends r.Component { ... }
  <proto:SubscreenHeaderButton>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscreenHeaderButton>;
  SubscreenHeaderButton = function <atom:0>;
  // close_loc <class_fields_init>
  SubscreenHeaderButton#1 = function <atom:0>;
  exports.SubscreenHeaderButton = SubscreenHeaderButton#1;
  c = {container: new n.Style({justifyContent: "center", alignItems: "center", minWidth: a.SubscreenHeaderBlueprint.minHeight, minHeight: a.SubscreenHeaderBlueprint.minHeight, accessibilityCategory: "image-button"}), image: new n.Style({objectFit: "contain", maxHeight: "100%", maxWidth: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/subscreen/SubscreenHeaderButton
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
