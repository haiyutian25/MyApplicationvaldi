// fn <atom:0>  args=0 vars=3 closure=5 cpool=0 bc=715B file=widgets/src/components/section/header/SectionHeaderLabel
// locals: i, n, this
// closure: e, t, d, o, r
function {
  this = this;
  let n;
  let i;
  if (((undefined === undefined))) goto L_57;
  i = <to_object>(undefined).iconUrl;
  n = <to_object>(undefined).text;
  <to_object>(undefined);
  goto L_7c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", d.iconLabel);
  e.beginRender(o, undefined);
  e.setAttributeString("src", i);
  e.setAttributeStyle("style", d.icon);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeString("value", n);
  e.setAttributeStyle("style", d.label);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/section/header/SectionHeaderLabel
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

// fn <atom:0>  args=3 vars=15 closure=0 cpool=2 bc=869B file=widgets/src/components/section/header/SectionHeaderLabel
// args: require, module, exports
// locals: e, t, o, r, i, n, l, s, SectionHeaderLabel, <class_fields_init>, SectionHeaderLabel#1, d
function {
  let d;
  let SectionHeaderLabel#1;
  let s;
  let l;
  let n;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SectionHeaderLabel = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "UwKvqoW2jRrXxKQa");
  o = e.makeNodePrototype("image", undefined, "rAjLcz6Z6CGrVa3w");
  r = e.makeNodePrototype("label", undefined, "hJf199SEN02d62Ks");
  i = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  l = require("widgets/src/styles/TextStyleFont");
  s = require("../../../styles/semanticColors");
  let SectionHeaderLabel;
  let <class_fields_init>;
  class SectionHeaderLabel extends i.Component { ... }
  <proto:SectionHeaderLabel>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SectionHeaderLabel>;
  SectionHeaderLabel = function <atom:0>;
  // close_loc <class_fields_init>
  SectionHeaderLabel#1 = function <atom:0>;
  exports.SectionHeaderLabel = SectionHeaderLabel#1;
  d = {label: new n.Style({font: l.TextStyleFont.SUBHEADLINE_EMPHASIS, color: s.SemanticColor.Text.TERTIARY}), icon: new n.Style({tint: s.SemanticColor.Text.TERTIARY, width: 19, height: 19}), iconLabel: new n.Style({flexDirection: "row", flexGrow: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/section/header/SectionHeaderLabel
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
