// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=279B file=widgets/src/components/section/header/SectionHeaderActionButton
// closure: e, i, y, l
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", y.actionButtonImage);
  e.setAttribute("src", l.default.iconSectionButton);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=9 cpool=1 bc=1238B file=widgets/src/components/section/header/SectionHeaderActionButton
// locals: r, s, d, u, this
// closure: e, i, y, l, a, t, o, n, c
function {
  this = this;
  let u;
  let d;
  let s;
  let r;
  if (((undefined === undefined))) goto L_a7;
  r = <to_object>(undefined).label;
  s = <to_object>(undefined).onTap;
  d = <to_object>(undefined).type;
  u = <to_object>(undefined).icon;
  <to_object>(undefined);
  goto L_ce;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_17;
  // [栈深重同步 1 -> 0]
  if (!(("pill_button" === d))) goto L_2cb;
  e.beginComponent(a.CoreButton, t, undefined, undefined);
  e.setViewModelProperty("sizing", a.CoreButtonSizing.TINY);
  e.setViewModelProperty("coloring", a.CoreButtonColoring.SECONDARY);
  e.setViewModelProperty("icon", u);
  e.setViewModelProperty("text", r);
  e.setViewModelProperty("onTap", s);
  goto L_4d5;
  // [栈深重同步 1 -> 0]
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", y.actionButton);
  e.setAttributeFunction("onTap", s);
  e.setAttributeString("accessibilityLabel", r);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", y.actionButtonLabel);
  e.setAttributeString("value", r);
  e.endRender();
  c.when(("navigation" === d), function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/section/header/SectionHeaderActionButton
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

// fn <atom:0>  args=3 vars=19 closure=0 cpool=2 bc=1009B file=widgets/src/components/section/header/SectionHeaderActionButton
// args: require, module, exports
// locals: e, t, o, n, i, r, s, c, l, a, d, u, SectionHeaderActionButton, <class_fields_init>, SectionHeaderActionButton#1, y
function {
  let y;
  let SectionHeaderActionButton#1;
  let u;
  let d;
  let a;
  let l;
  let c;
  let s;
  let r;
  let i;
  let n;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SectionHeaderActionButton = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "SlHE2ZX9Nl-Kaa7G");
  o = e.makeNodePrototype("view", undefined, "fa8waGr9FKZ4HY1M");
  n = e.makeNodePrototype("label", undefined, "1xt1dmNgd8PYSHvy");
  i = e.makeNodePrototype("image", undefined, "uYs7QAa4YB75P5jc");
  r = require("valdi_core/src/Component");
  s = require("valdi_core/src/Style");
  c = require("valdi_core/src/utils/When");
  l = require("widgets/res");
  a = require("widgets/src/components/button/CoreButton");
  d = require("widgets/src/styles/TextStyleFont");
  u = require("../../../styles/semanticColors");
  let SectionHeaderActionButton;
  let <class_fields_init>;
  class SectionHeaderActionButton extends r.Component { ... }
  <proto:SectionHeaderActionButton>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SectionHeaderActionButton>;
  SectionHeaderActionButton = function <atom:0>;
  // close_loc <class_fields_init>
  SectionHeaderActionButton#1 = function <atom:0>;
  exports.SectionHeaderActionButton = SectionHeaderActionButton#1;
  y = {actionButton: new s.Style({flexDirection: "row", alignItems: "center", flexGrow: 0, touchAreaExtension: 12, accessibilityId: "action-button", accessibilityCategory: "button"}), actionButtonImage: new s.Style({width: 16, height: 16, flipOnRtl: true, tint: u.SemanticColor.Text.SECONDARY}), actionButtonLabel: new s.Style({font: d.TextStyleFont.SUBHEADLINE, color: u.SemanticColor.Text.SECONDARY, accessibilityId: "section_header_action_button"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/section/header/SectionHeaderActionButton
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
