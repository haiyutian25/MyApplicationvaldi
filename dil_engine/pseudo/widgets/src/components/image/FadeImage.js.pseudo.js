// fn <atom:0>  args=3 vars=13 closure=3 cpool=0 bc=1471B file=widgets/src/components/image/FadeImage
// args: r, i, s
// locals: n, a, b, d, u, c, l, A, g, this
// closure: t, e, o
function {
  this = this;
  let g;
  let A;
  let l;
  let c;
  let u;
  let d;
  let b;
  let a;
  let n;
  n = this.viewModel;
  if (!(!n)) goto L_49;
  return;
  a = n.backgroundColor;
  b = n.borderRadius;
  d = n.borderWidth;
  u = n.borderColor;
  c = n.contentScaleX;
  l = n.contentScaleY;
  A = n.contentTranslationY;
  if (!((n.objectFit == null))) goto L_17e;
  n.objectFit;
  g = "cover";
  t.beginRender(e, undefined);
  t.setAttributeRef(n.imageRef);
  t.setAttributeStyle("style", o.content);
  t.setAttributeNumber("contentScaleX", c);
  t.setAttributeNumber("contentScaleY", l);
  t.setAttributeNumber("translationY", A);
  t.setAttribute("src", i);
  t.setAttributeString("objectFit", g);
  t.setAttributeNumber("opacity", r);
  t.setAttributeFunction("onAssetLoad", s);
  t.setAttribute("borderRadius", b);
  t.setAttribute("borderWidth", d);
  t.setAttributeString("borderColor", u);
  t.setAttributeString("backgroundColor", a);
  t.setAttributeString("tint", n.tint);
  t.setAttribute("filter", n.filter);
  t.setAttributeNumber("scaleX", n.scaleX);
  t.setAttributeNumber("scaleY", n.scaleY);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/image/FadeImage
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

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=345B file=widgets/src/components/image/FadeImage
// args: require, module, exports
// locals: t, e, r, i, o, FadeImage, <class_fields_init>, FadeImage#1
function {
  let FadeImage#1;
  let o;
  let i;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FadeImage = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("image", undefined, "U5VvrPl-HPwH4Z9_");
  r = require("valdi_core/src/Style");
  i = require("./FadeView");
  o = {content: new r.Style({width: "100%", height: "100%"})};
  let FadeImage;
  let <class_fields_init>;
  class FadeImage extends i.FadeView { ... }
  <proto:FadeImage>.onRenderBody = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FadeImage>;
  FadeImage = function <atom:0>;
  // close_loc <class_fields_init>
  FadeImage#1 = function <atom:0>;
  exports.FadeImage = FadeImage#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/image/FadeImage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
