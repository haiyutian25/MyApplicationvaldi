// fn l  args=1 vars=3 closure=4 cpool=0 bc=716B file=widgets/src/components/section/SectionBadge
// args: e
// locals: t, o
// closure: a, d, n, s
function {
  let o;
  let t;
  t = a.SemanticColor.Base.BRAND_YELLOW;
  o = a.SemanticColor.Base.FADED_BLACK;
  if (!((e === d.Red))) goto L_1d4;
  t = a.SemanticColor.Base.RED_REGULAR;
  a.SemanticColor.Base.RED_REGULAR;
  o = a.SemanticColor.Flat.PURE_WHITE;
  a.SemanticColor.Flat.PURE_WHITE;
  return {background: new n.Style({flexDirection: "row", backgroundColor: t, borderRadius: "50%", boxShadow: "0 2 3 rgba(0, 0, 0, 0.1)", padding: "4 10", margin: "0 10", marginTop: -2, marginBottom: -1}), text: new n.Style({font: s.TextStyleFont.CAPTION_EMPHASIS, color: o})};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=widgets/src/components/section/SectionBadge
// args: e
function {
  e.Yellow = 0;
  e[0] = "Yellow";
  e.Red = 1;
  e[1] = "Red";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=213B file=widgets/src/components/section/SectionBadge
// closure: e, o, r, n
function {
  e.beginRender(o, undefined);
  e.setAttributeString("value", r);
  e.setAttributeStyle("style", n.text);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=6 cpool=2 bc=581B file=widgets/src/components/section/SectionBadge
// locals: r, n, this
// closure: e, o, l, exports, i, t
function {
  this = this;
  let n;
  let r;
  if (!((this.viewModel == null))) goto L_32;
  this.viewModel;
  goto L_77;
  r = undefined.text.toLocaleUpperCase();
  if (!((this.viewModel == null))) goto L_a3;
  this.viewModel;
  goto L_c4;
  if (!((undefined.theme == null))) goto L_eb;
  undefined.theme;
  n = l(exports.DEFAULT_SECTION_BADGE_THEME);
  e.beginComponent(i.AnimationSquishy, t, undefined, undefined);
  e.setViewModelProperty("tiltX", -35);
  e.setViewModelProperty("style", n.background);
  e.setViewModelProperty("animationOptions", {duration: 0.4});
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/section/SectionBadge
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

// fn <atom:0>  args=3 vars=16 closure=0 cpool=4 bc=475B file=widgets/src/components/section/SectionBadge
// args: require, module, exports
// locals: e, t, o, r, n, i, s, a, d, l, SectionBadge, <class_fields_init>, SectionBadge#1
function {
  l = function l;
  let SectionBadge#1;
  let a;
  let s;
  let i;
  let n;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SectionBadgeTheme = undefined;
  exports.DEFAULT_SECTION_BADGE_THEME = undefined;
  exports.SectionBadge = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(["direction", "shrink", "delayMs", 2400], "O5WkRYVFgENpNAZF");
  o = e.makeNodePrototype("label", undefined, "8inzwMhJq2mc70bW");
  r = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  i = require("widgets/src/components/animation/AnimationSquishy");
  s = require("widgets/src/styles/TextStyleFont");
  a = require("widgets/src/styles/semanticColors");
  if ((d)) goto L_158;
  d = {};
  exports.SectionBadgeTheme = {};
  !function <atom:0>({});
  exports.DEFAULT_SECTION_BADGE_THEME = d.Yellow;
  let SectionBadge;
  let <class_fields_init>;
  class SectionBadge extends r.Component { ... }
  <proto:SectionBadge>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SectionBadge>;
  SectionBadge = function <atom:0>;
  // close_loc <class_fields_init>
  SectionBadge#1 = function <atom:0>;
  exports.SectionBadge = SectionBadge#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/section/SectionBadge
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
