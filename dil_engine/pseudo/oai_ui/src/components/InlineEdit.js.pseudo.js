// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=47B file=oai_ui/src/components/InlineEdit
// args: e
// closure: this
function {
  this.setState({draft: e});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=oai_ui/src/components/InlineEdit
// args: e
// closure: this
function {
  this.commit(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=109B file=oai_ui/src/components/InlineEdit
// closure: this
function {
  this.commit(this.state.draft);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=3 bc=178B file=oai_ui/src/components/InlineEdit
// locals: this, this.active_func, new.target, arguments
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
  this.state = {draft: this.viewModel.value};
  this.handleChange = function <atom:0>;
  this.handleSubmit = function <atom:0>;
  this.commitDraft = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=11 cpool=0 bc=2908B file=oai_ui/src/components/InlineEdit
// locals: l, d, this
// closure: e, t, y, i, c, o, p, n, a, s, r
function {
  this = this;
  let d;
  let l;
  l = this.state.draft.trim();
  if (!((l.length > 0))) goto L_e5;
  d = (l !== this.viewModel.value.trim());
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeStyle("style", y.root);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", y.input);
  e.beginComponent(c.TextInput, o, undefined, undefined);
  e.setViewModelProperty("accessibilityId", p(this.viewModel.accessibilityId, "input"));
  e.setViewModelProperty("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setViewModelProperty("autoSelect", true);
  e.setViewModelProperty("closesWhenReturnKeyPressed", false);
  e.setViewModelProperty("maxLength", this.viewModel.maxLength);
  e.setViewModelProperty("onChange", this.handleChange);
  e.setViewModelProperty("onSubmit", this.handleSubmit);
  e.setViewModelProperty("placeholder", this.viewModel.placeholder);
  e.setViewModelProperty("size", n.OAIControlSize.Sm);
  e.setViewModelProperty("value", this.state.draft);
  e.setViewModelProperty("variant", c.TextInputVariant.Soft);
  e.endComponent();
  e.endRender();
  e.beginComponent(a.IconButton, s, undefined, undefined);
  e.setViewModelProperty("accessibilityId", p(this.viewModel.accessibilityId, "save"));
  e.setViewModelProperty("disabled", !d);
  e.setViewModelProperty("onPress", this.commitDraft);
  e.setViewModelProperty("size", n.OAIControlSize.Sm);
  e.setViewModelProperty("variant", a.IconButtonVariant.Primary);
  e.endComponent();
  e.beginComponent(a.IconButton, r, undefined, undefined);
  e.setViewModelProperty("accessibilityId", p(this.viewModel.accessibilityId, "cancel"));
  e.setViewModelProperty("onPress", this.viewModel.onCancel);
  e.setViewModelProperty("size", n.OAIControlSize.Sm);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=241B file=oai_ui/src/components/InlineEdit
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = e.trim();
  if (!((0 !== t.length))) goto L_f0;
  if (!((t !== this.viewModel.value.trim()))) goto L_f0;
  this.viewModel.onCommit(t);
  return;
}

// fn p  args=2 vars=2 closure=0 cpool=0 bc=52B file=oai_ui/src/components/InlineEdit
// args: e, t
function {
  if (!((undefined === e))) goto L_7;
  return undefined;
  return "".concat(e, ".", t);
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=4 bc=796B file=oai_ui/src/components/InlineEdit
// args: require, module, exports
// locals: e, t, i, o, s, r, n, l, d, a, c, InlineEdit, <class_fields_init>, InlineEdit#1, p, y
function {
  p = function p;
  let y;
  let InlineEdit#1;
  let c;
  let a;
  let d;
  let l;
  let n;
  let r;
  let s;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.InlineEdit = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "iqTKUt2EX7_V4osh");
  i = e.makeNodePrototype("view", undefined, "eUFdYj7aWOv8azJV");
  o = e.makeComponentPrototype(["returnKeyText", "done"], "NCekJLKnkFcPKmbc");
  s = e.makeComponentPrototype(["accessibilityLabel", "Save changes", "symbol", "✓"], "ELSnP9mj2Ss8V90v");
  r = e.makeComponentPrototype(["accessibilityLabel", "Cancel editing", "symbol", "�"], "uJstzIsdxNN3PDOL");
  n = require("oai_core/src/OAITokens");
  l = require("valdi_core/src/Component");
  d = require("valdi_core/src/Style");
  a = require("./IconButton");
  c = require("./TextInput");
  let InlineEdit;
  let <class_fields_init>;
  class InlineEdit extends l.StatefulComponent { ... }
  <proto:InlineEdit>.onRender = function <atom:0>;
  <proto:InlineEdit>.commit = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:InlineEdit>;
  InlineEdit = function <atom:0>;
  // close_loc <class_fields_init>
  InlineEdit#1 = function <atom:0>;
  exports.InlineEdit = InlineEdit#1;
  y = {root: new d.Style({alignItems: "center", flexDirection: "row", gap: n.OAISpacing.Half, width: "100%"}), input: new d.Style({flexGrow: 1, flexShrink: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/InlineEdit
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
