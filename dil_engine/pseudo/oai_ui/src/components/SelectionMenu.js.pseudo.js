// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=277B file=oai_ui/src/components/SelectionMenu
// closure: e, i, S, this
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", S.title);
  e.setAttributeString("value", this.viewModel.title);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=oai_ui/src/components/SelectionMenu
// args: e
// closure: this
function {
  this.renderOption(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=2 bc=462B file=oai_ui/src/components/SelectionMenu
// locals: this
// closure: e, i, S, t
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeStyle("style", S.menu);
  if (((undefined === this.viewModel.title))) goto L_13b;
  function <atom:0>();
  this.viewModel.options.forEach(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=105B file=oai_ui/src/components/SelectionMenu
// closure: this, t
function {
  return this.viewModel.onChange(t.value, t);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=8 cpool=2 bc=2429B file=oai_ui/src/components/SelectionMenu
// args: t
// locals: i, a, this
// closure: e, o, s, S, r, n, l, d
function {
  this = this;
  let a;
  let i;
  i = (t.value === this.viewModel.value);
  if (((true === this.viewModel.disabled))) goto L_de;
  a = (true === t.disabled);
  e.beginRender(o, t.value);
  if (!((undefined === this.viewModel.accessibilityId))) goto L_1a0;
  goto L_22f;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityId", "".concat(this.viewModel.accessibilityId, ".", t.value));
  if (!((t.accessibilityLabel == null))) goto L_2a5;
  t.accessibilityLabel;
  e.setAttributeString("accessibilityLabel", t.label);
  e.setAttribute("accessibilityStateDisabled", a);
  e.setAttribute("accessibilityStateSelected", i);
  if (!(i)) goto L_37e;
  goto L_37f;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", undefined);
  if (!(a)) goto L_3b4;
  goto L_3b6;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", function <atom:0>);
  if (!(a)) goto L_3ec;
  goto L_3ed;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeStyle("style", S.option);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", S.optionContent);
  e.beginRender(n, undefined);
  if (!(i)) goto L_560;
  goto L_5a5;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("color", s.OAIColor.TextPrimary);
  e.setAttributeStyle("style", S.optionLabel);
  e.setAttributeString("value", t.label);
  e.endRender();
  if (((undefined === t.description))) goto L_78f;
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", S.optionDescription);
  e.setAttributeString("value", t.description);
  e.endRender();
  e.endRender();
  e.beginRender(d, undefined);
  if (!(i)) goto L_859;
  goto L_89e;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("color", s.OAIColor.IconTertiary);
  e.setAttributeStyle("style", S.checkmark);
  if (!(i)) goto L_928;
  goto L_929;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("value", "");
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/SelectionMenu
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

// fn <atom:0>  args=3 vars=20 closure=0 cpool=3 bc=2690B file=oai_ui/src/components/SelectionMenu
// args: require, module, exports
// locals: e, t, i, o, r, n, l, d, s, a, c, SelectionMenu, <class_fields_init>, SelectionMenu#1, u, b, S
function {
  let S;
  let b;
  let u;
  let SelectionMenu#1;
  let c;
  let a;
  let s;
  let d;
  let l;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SelectionMenu = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "SbYIqijRhukYC2EX");
  i = e.makeNodePrototype("label", undefined, "URUNMfy9NX5TT-R0");
  o = e.makeNodePrototype("view", ["accessibilityCategory", "radio"], "MEAcl5d8smCc0FvQ");
  r = e.makeNodePrototype("view", undefined, "jcipIsXHM6PSxKG7");
  n = e.makeNodePrototype("label", undefined, "fgi4nwSaDBOjj9QY");
  l = e.makeNodePrototype("label", undefined, "Fs3Saxih-8XrIK8p");
  d = e.makeNodePrototype("label", undefined, "2LAug2CM8T9ZU0_X");
  s = require("oai_core/src/OAITokens");
  a = require("valdi_core/src/Component");
  c = require("valdi_core/src/Style");
  let SelectionMenu;
  let <class_fields_init>;
  class SelectionMenu extends a.Component { ... }
  <proto:SelectionMenu>.onRender = function <atom:0>;
  <proto:SelectionMenu>.renderOption = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SelectionMenu>;
  SelectionMenu = function <atom:0>;
  // close_loc <class_fields_init>
  SelectionMenu#1 = function <atom:0>;
  exports.SelectionMenu = SelectionMenu#1;
  u = s.resolveOAITextStyle(s.OAITextSize.LabelLarge);
  b = s.resolveOAITextStyle(s.OAITextSize.BodySmall);
  S = {menu: new c.Style({backgroundColor: s.OAIColor.BgPrimary, borderColor: s.OAIColor.BorderDefault, borderRadius: s.OAIRadius.Xl, borderWidth: 1, flexDirection: "column", gap: s.OAISpacing.Quarter, padding: s.OAISpacing.One, width: "100%"}), title: new c.Style({color: s.OAIColor.TextSecondary, font: s.resolveOAITextStyle(s.OAITextSize.LabelSmall).font, marginBottom: s.OAISpacing.Half, marginLeft: s.OAISpacing.Half, marginTop: s.OAISpacing.Quarter, numberOfLines: 1}), option: new c.Style({alignItems: "center", borderRadius: s.OAIRadius.Lg, flexDirection: "row", minHeight: 48, padding: s.OAISpacing.One, width: "100%"}), optionContent: new c.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: s.OAISpacing.Quarter}), optionLabel: new c.Style({font: u.font, lineHeight: u.lineHeight, numberOfLines: 1}), optionDescription: new c.Style({color: s.OAIColor.TextSecondary, font: b.font, lineHeight: b.lineHeight, numberOfLines: 1}), checkmark: new c.Style({font: u.font, marginLeft: s.OAISpacing.One, textAlign: "center", width: 20})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/SelectionMenu
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
