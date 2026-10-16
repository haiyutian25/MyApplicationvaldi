// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=widgets/src/components/section/SectionStatusBar
// args: e
function {
  e.Blue = 0;
  e[0] = "Blue";
  e.Red = 1;
  e[1] = "Red";
  e.Green = 2;
  e[2] = "Green";
  e.Purple = 3;
  e[3] = "Purple";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=720B file=widgets/src/components/section/SectionStatusBar
// locals: this
// closure: e, t, a, r
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", a.container);
  e.setAttributeString("backgroundColor", this.getContainerColor());
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", a.text);
  e.setAttributeString("color", this.getTextColor());
  e.setAttributeString("value", this.viewModel.text);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=246B file=widgets/src/components/section/SectionStatusBar
// locals: this
// closure: l
function {
  this = this;
  if (!((this.viewModel.statusColor === l.Blue))) goto L_71;
  return "rgba(15,173,255,0.15)";
  if (!((this.viewModel.statusColor === l.Red))) goto L_9d;
  return "rgba(242,60,87,0.15)";
  if (!((this.viewModel.statusColor === l.Green))) goto L_c9;
  return "rgba(41,207,147,0.15)";
  if (!((this.viewModel.statusColor === l.Purple))) goto L_f5;
  return "rgba(216, 61, 241, 0.05)";
  this.viewModel.statusColor;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=537B file=widgets/src/components/section/SectionStatusBar
// locals: this
// closure: l, s
function {
  this = this;
  if (!((this.viewModel.statusColor === l.Blue))) goto L_d2;
  return s.SemanticColor.Icon.SELECTED;
  if (!((this.viewModel.statusColor === l.Red))) goto L_15f;
  return s.SemanticColor.Icon.ERROR;
  if (!((this.viewModel.statusColor === l.Green))) goto L_1ec;
  return s.SemanticColor.Icon.SUCCESS;
  if (!((this.viewModel.statusColor === l.Purple))) goto L_218;
  return "#CD3DF1";
  this.viewModel.statusColor;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/section/SectionStatusBar
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

// fn <atom:0>  args=3 vars=15 closure=0 cpool=5 bc=581B file=widgets/src/components/section/SectionStatusBar
// args: require, module, exports
// locals: e, t, r, o, n, s, i, a, l, SectionStatusBar, <class_fields_init>, SectionStatusBar#1
function {
  let SectionStatusBar#1;
  let a;
  let i;
  let s;
  let n;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.StatusColor = undefined;
  exports.SectionStatusBar = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "p8vsVYk9te1nxXgv");
  r = e.makeNodePrototype("label", ["textAlign", "center", "numberOfLines", 0], "qMqN0qvbKcMr6a02");
  o = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  s = require("widgets/src/styles/semanticColors");
  i = require("valdi_core/src/SystemFont");
  a = {container: new n.Style({width: "100%", padding: 8}), text: new n.Style({font: i.systemFont(12)})};
  if ((l)) goto L_1df;
  l = {};
  exports.StatusColor = {};
  !function <atom:0>({});
  let SectionStatusBar;
  let <class_fields_init>;
  class SectionStatusBar extends o.StatefulComponent { ... }
  <proto:SectionStatusBar>.onRender = function <atom:0>;
  <proto:SectionStatusBar>.getContainerColor = function <atom:0>;
  <proto:SectionStatusBar>.getTextColor = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SectionStatusBar>;
  SectionStatusBar = function <atom:0>;
  // close_loc <class_fields_init>
  SectionStatusBar#1 = function <atom:0>;
  exports.SectionStatusBar = SectionStatusBar#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/section/SectionStatusBar
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
