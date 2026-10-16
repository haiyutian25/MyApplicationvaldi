// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=357B file=valdi_ui/src/components/ChoiceChip
// locals: e
// closure: this
function {
  let e;
  if (!((this.viewModel.selected == null))) goto L_92;
  this.viewModel.selected;
  e = !this.state.selected;
  if (!((undefined === this.viewModel.selected))) goto L_10f;
  this.setState({selected: e});
  if (!((this.viewModel.onChange == null))) goto L_15e;
  this.viewModel.onChange;
  this.viewModel;
  goto L_164;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=153B file=valdi_ui/src/components/ChoiceChip
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
  this.state = {selected: (true === this.viewModel.defaultSelected)};
  this.handlePress = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=290B file=valdi_ui/src/components/ChoiceChip
// closure: e, l, this, g, w, d
function {
  e.beginRender(l, undefined);
  if (!((true === this.viewModel.disabled))) goto L_c3;
  goto L_c6;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", w);
  e.setAttributeString("value", d);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=15 closure=7 cpool=1 bc=1723B file=valdi_ui/src/components/ChoiceChip
// locals: o, d, a, n, b, h, p, y, u, v, g, C, S, w, this
// closure: e, l, c, i, s, r, t
function {
  this = this;
  let w;
  let S;
  let C;
  let g;
  let v;
  let u;
  let y;
  let p;
  let h;
  let b;
  let n;
  let a;
  let d;
  let o;
  if (((undefined === undefined))) goto L_19d;
  o = <to_object>(undefined).defaultSelected;
  d = <to_object>(undefined).label;
  a = <to_object>(undefined).labelStyle;
  n = <to_object>(undefined).onChange;
  b = <to_object>(undefined).selected;
  h = <to_object>(undefined).selectedLabelStyle;
  p = <to_object>(undefined).selectedStyle;
  y = <to_object>(undefined).style;
  u = {};
  <to_object>(undefined);
  {defaultSelected: null, label: null, labelStyle: null, onChange: null, selected: null, selectedLabelStyle: null, selectedStyle: null, style: null};
  goto L_1c4;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_35;
  // [栈深重同步 1 -> 0]
  if (!((this.viewModel.selected == null))) goto L_251;
  this.viewModel.selected;
  v = this.state.selected;
  g = c(i.resolveValdiUITheme());
  if (!(v)) goto L_2a7;
  goto L_2cb;
  // [栈深重同步 1 -> 0]
  C = g.label;
  if (!(v)) goto L_2d7;
  goto L_2da;
  // [栈深重同步 1 -> 0]
  S = a;
  if (!((undefined === S))) goto L_2e8;
  goto L_336;
  // [栈深重同步 1 -> 0]
  w = s.Style.cachingMerge(C, S);
  e.beginComponent(r.Pressable, t, undefined, undefined);
  e.setViewModelProperties(u);
  if (!((this.viewModel.accessibilityLabel == null))) goto L_429;
  this.viewModel.accessibilityLabel;
  e.setViewModelProperty("accessibilityLabel", d);
  if (!((this.viewModel.disabledStyle == null))) goto L_4c3;
  this.viewModel.disabledStyle;
  e.setViewModelProperty("disabledStyle", g.disabledSurface);
  e.setViewModelProperty("onPress", this.handlePress);
  e.setViewModelProperty("selected", v);
  if (!((p == null))) goto L_59c;
  p;
  e.setViewModelProperty("selectedStyle", g.selected);
  if (!((undefined === y))) goto L_5f6;
  goto L_665;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("style", s.Style.cachingMerge(g.surface, y));
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn c  args=1 vars=2 closure=2 cpool=0 bc=1564B file=valdi_ui/src/components/ChoiceChip
// args: e
// locals: t
// closure: d, s
function {
  let t;
  t = d.get(e);
  if (((undefined !== t))) goto L_617;
  t = {disabledLabel: new s.Style({color: e.colors.onDisabled, font: e.typography.label}), disabledSurface: new s.Style({backgroundColor: e.colors.disabled, borderColor: e.colors.disabled}), label: new s.Style({color: e.colors.text, font: e.typography.label}), selected: new s.Style({backgroundColor: e.colors.accent, borderColor: e.colors.accent}), selectedLabel: new s.Style({color: e.colors.onAccent, font: e.typography.label}), surface: new s.Style({alignItems: "center", backgroundColor: e.colors.surface, borderColor: e.colors.border, borderRadius: e.shape.pillRadius, borderWidth: 1, height: e.metrics.compactControlHeight, justifyContent: "center", paddingLeft: e.spacing.medium, paddingRight: e.spacing.medium})};
  {disabledLabel: new s.Style({color: e.colors.onDisabled, font: e.typography.label}), disabledSurface: new s.Style({backgroundColor: e.colors.disabled, borderColor: e.colors.disabled}), label: new s.Style({color: e.colors.text, font: e.typography.label}), selected: new s.Style({backgroundColor: e.colors.accent, borderColor: e.colors.accent}), selectedLabel: new s.Style({color: e.colors.onAccent, font: e.typography.label}), surface: new s.Style({alignItems: "center", backgroundColor: e.colors.surface, borderColor: e.colors.border, borderRadius: e.shape.pillRadius, borderWidth: 1, height: e.metrics.compactControlHeight, justifyContent: "center", paddingLeft: e.spacing.medium, paddingRight: e.spacing.medium})};
  d.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=3 bc=365B file=valdi_ui/src/components/ChoiceChip
// args: require, module, exports
// locals: e, t, l, o, s, i, r, ChoiceChip, <class_fields_init>, ChoiceChip#1, d, c
function {
  c = function c;
  let d;
  let ChoiceChip#1;
  let r;
  let i;
  let s;
  let o;
  let l;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChoiceChip = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "Xp4jZbcIaiLEC4Y7");
  l = e.makeNodePrototype("label", undefined, "CnTauOzXE-ymgpxu");
  o = require("valdi_core/src/Component");
  s = require("valdi_core/src/Style");
  i = require("valdi_ui_theme/src/ValdiUITheme");
  r = require("./Pressable");
  let ChoiceChip;
  let <class_fields_init>;
  class ChoiceChip extends o.StatefulComponent { ... }
  <proto:ChoiceChip>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ChoiceChip>;
  ChoiceChip = function <atom:0>;
  // close_loc <class_fields_init>
  ChoiceChip#1 = function <atom:0>;
  exports.ChoiceChip = ChoiceChip#1;
  d = new WeakMap();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/ChoiceChip
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
