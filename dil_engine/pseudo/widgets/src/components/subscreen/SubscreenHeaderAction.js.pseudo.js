// fn <atom:0>  args=0 vars=6 closure=4 cpool=0 bc=640B file=widgets/src/components/subscreen/SubscreenHeaderAction
// locals: r, i, s, n, l, this
// closure: o, e, t, c
function {
  this = this;
  let l;
  let n;
  let s;
  let i;
  let r;
  if (!((this.viewModel == null))) goto L_3b;
  this.viewModel;
  r = {};
  i = r.text;
  if (!((r.touchAreaExtension == null))) goto L_cf;
  r.touchAreaExtension;
  s = o.Spacing.SM;
  n = r.onTap;
  l = r.accessibilityId;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", c.label);
  e.setAttributeString("value", i);
  e.setAttributeNumber("touchAreaExtension", s);
  e.setAttributeFunction("onTap", n);
  e.setAttributeString("accessibilityId", l);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/subscreen/SubscreenHeaderAction
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

// fn <atom:0>  args=3 vars=14 closure=0 cpool=2 bc=572B file=widgets/src/components/subscreen/SubscreenHeaderAction
// args: require, module, exports
// locals: e, t, r, i, s, n, o, SubscreenHeaderAction, <class_fields_init>, SubscreenHeaderAction#1, c
function {
  let c;
  let SubscreenHeaderAction#1;
  let o;
  let n;
  let s;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscreenHeaderAction = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("label", undefined, "mHivAbm6ENlpOIGp");
  r = require("valdi_core/src/Component");
  i = require("valdi_core/src/Style");
  s = require("widgets/src/styles/TextStyleFont");
  n = require("widgets/src/styles/semanticColors");
  o = require("widgets/src/styles/spacing");
  let SubscreenHeaderAction;
  let <class_fields_init>;
  class SubscreenHeaderAction extends r.Component { ... }
  <proto:SubscreenHeaderAction>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscreenHeaderAction>;
  SubscreenHeaderAction = function <atom:0>;
  // close_loc <class_fields_init>
  SubscreenHeaderAction#1 = function <atom:0>;
  exports.SubscreenHeaderAction = SubscreenHeaderAction#1;
  c = {label: new i.Style({font: s.TextStyleFont.BODY, color: n.SemanticColor.Text.SECONDARY, textAlign: "center", maxHeight: "100%", maxWidth: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/subscreen/SubscreenHeaderAction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
