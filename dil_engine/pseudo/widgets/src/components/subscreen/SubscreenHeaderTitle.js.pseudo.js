// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=46B file=widgets/src/components/subscreen/SubscreenHeaderTitle
// closure: e, this
function {
  e.renderNamedSlot("left", this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=562B file=widgets/src/components/subscreen/SubscreenHeaderTitle
// closure: e, i, S, r, this
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", S.title);
  e.setAttributeString("value", r.title);
  e.setAttributeString("color", this.viewModel.titleColor);
  e.setAttributeFunction("onTap", r.onTapTitle);
  e.setAttributeString("accessibilityId", r.accessibilityId);
  e.endRender();
  this.onRenderSubtitle();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=46B file=widgets/src/components/subscreen/SubscreenHeaderTitle
// closure: e, this
function {
  e.renderNamedSlot("right", this);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=3 bc=302B file=widgets/src/components/subscreen/SubscreenHeaderTitle
// locals: r, this
// closure: e, i, S, c, t
function {
  this = this;
  let r;
  r = this.viewModel;
  e.beginComponent(c.SubscreenHeaderBlueprint, t, undefined, undefined);
  e.setNamedSlot("left", function <atom:0>);
  e.setNamedSlot("middle", function <atom:0>);
  e.setNamedSlot("right", function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=211B file=widgets/src/components/subscreen/SubscreenHeaderTitle
// args: t
// closure: e, o, S
function {
  e.beginRender(o, undefined);
  e.setAttribute("src", t);
  e.setAttributeStyle("style", S.subtitleImage);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=211B file=widgets/src/components/subscreen/SubscreenHeaderTitle
// args: t
// closure: e, s, S
function {
  e.beginRender(s, undefined);
  e.setAttribute("src", t);
  e.setAttributeStyle("style", S.subtitleImage);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=7 cpool=2 bc=1120B file=widgets/src/components/subscreen/SubscreenHeaderTitle
// locals: t, this
// closure: e, o, S, s, r, u, n
function {
  this = this;
  let t;
  t = this.viewModel.subtitle;
  if (!((undefined !== t))) goto L_45f;
  if (!(("" !== t))) goto L_45f;
  e.beginRender(r, undefined);
  e.setAttributeFunction("onTap", this.viewModel.onTapSubtitle);
  e.setAttributeNumber("paddingTop", this.viewModel.subtitlePaddingTop);
  e.setAttributeNumber("paddingBottom", this.viewModel.subtitlePaddingBottom);
  u.when(this.viewModel.subtitlePrefix, function <atom:0>);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", S.subtitleText);
  e.setAttributeString("value", this.viewModel.subtitle);
  e.setAttributeString("color", this.viewModel.subtitleColor);
  e.endRender();
  u.when(this.viewModel.subtitleSuffix, function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/subscreen/SubscreenHeaderTitle
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

// fn <atom:0>  args=3 vars=20 closure=0 cpool=3 bc=1189B file=widgets/src/components/subscreen/SubscreenHeaderTitle
// args: require, module, exports
// locals: e, t, i, r, o, n, s, l, d, u, a, b, c, SubscreenHeaderTitle, <class_fields_init>, SubscreenHeaderTitle#1, S
function {
  let S;
  let SubscreenHeaderTitle#1;
  let c;
  let b;
  let a;
  let u;
  let d;
  let l;
  let s;
  let n;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscreenHeaderTitle = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "MF9cef87jLKJ4UGh");
  i = e.makeNodePrototype("label", undefined, "YeZDgnOk0a39nBpt");
  r = e.makeNodePrototype("view", ["flexDirection", "row", "touchAreaExtension", 4], "umV83bTsA0k3JOoR");
  o = e.makeNodePrototype("image", undefined, "Cg2Du4OrXbGUL7Oc");
  n = e.makeNodePrototype("label", undefined, "jeKm_HdkAVsU_wp8");
  s = e.makeNodePrototype("image", undefined, "FWhimaywQxW-VnZW");
  l = require("valdi_core/src/Component");
  d = require("valdi_core/src/Style");
  u = require("valdi_core/src/utils/When");
  a = require("widgets/src/styles/TextStyleFont");
  b = require("widgets/src/styles/semanticColors");
  c = require("./SubscreenHeaderBlueprint");
  let SubscreenHeaderTitle;
  let <class_fields_init>;
  class SubscreenHeaderTitle extends l.Component { ... }
  <proto:SubscreenHeaderTitle>.onRender = function <atom:0>;
  <proto:SubscreenHeaderTitle>.onRenderSubtitle = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscreenHeaderTitle>;
  SubscreenHeaderTitle = function <atom:0>;
  // close_loc <class_fields_init>
  SubscreenHeaderTitle#1 = function <atom:0>;
  exports.SubscreenHeaderTitle = SubscreenHeaderTitle#1;
  S = {title: new d.Style({font: a.TextStyleFont.TITLE_4, color: b.SemanticColor.Text.PRIMARY, textAlign: "center", accessibilityCategory: "header"}), subtitleImage: new d.Style({width: 12, height: 12, margin: 2}), subtitleText: new d.Style({font: a.TextStyleFont.CAPTION, color: b.SemanticColor.Text.SECONDARY, textAlign: "center", accessibilityCategory: "header", numberOfLines: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/subscreen/SubscreenHeaderTitle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
