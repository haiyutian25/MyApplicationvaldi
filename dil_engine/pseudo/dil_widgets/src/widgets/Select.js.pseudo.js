// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=dil_widgets/src/widgets/Select
// closure: this, e
function {
  return this.handleValueChange(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=42B file=dil_widgets/src/widgets/Select
// args: e
// closure: this
function {
  this.runWithUserInteraction(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=244B file=dil_widgets/src/widgets/Select
// locals: e
// closure: this, b
function {
  let e;
  this.handleTap();
  if (!((this.viewModel.options == null))) goto L_79;
  this.viewModel.options;
  e = b([], this.selectedValue);
  if (!((undefined !== e))) goto L_f3;
  this.handleValueChange(e.value);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=42B file=dil_widgets/src/widgets/Select
// closure: this, b
function {
  this.runWithUserInteraction(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=345B file=dil_widgets/src/widgets/Select
// locals: e
// closure: this
function {
  let e;
  this.handleTap();
  if (!(this.webMenuOpen)) goto L_7a;
  this.dismissWebMenu();
  return;
  if (!((this.context == null))) goto L_a6;
  this.context;
  goto L_c7;
  e = undefined.anchoredOverlayPresenter;
  if (!((undefined !== e))) goto L_158;
  this.webMenuOpen = true;
  this.scheduleRender();
  e.presentOverlay(this.makeWebMenuOverlayRequest());
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=42B file=dil_widgets/src/widgets/Select
// closure: this
function {
  this.runWithUserInteraction(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=529B file=dil_widgets/src/widgets/Select
// closure: e, h, t, this
function {
  e.beginComponent(h.DILSelectMenu, t, undefined, undefined);
  e.setViewModelProperty("onSelect", this.handleWebMenuSelect);
  if (!((this.viewModel.optionIndicatorPosition == null))) goto L_11a;
  this.viewModel.optionIndicatorPosition;
  e.setViewModelProperty("optionIndicatorPosition", "start");
  if (!((this.viewModel.options == null))) goto L_194;
  this.viewModel.options;
  e.setViewModelProperty("options", []);
  e.setViewModelProperty("selectedValue", this.selectedValue);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=dil_widgets/src/widgets/Select
// closure: this, e
function {
  return this.handleValueChange(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=82B file=dil_widgets/src/widgets/Select
// args: e
// closure: this
function {
  this.runWithUserInteraction(function <atom:0>);
  this.dismissWebMenu();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=94B file=dil_widgets/src/widgets/Select
// closure: this
function {
  if (!(this.webMenuOpen)) goto L_5d;
  this.webMenuOpen = false;
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=6 bc=199B file=dil_widgets/src/widgets/Select
// locals: this, this.active_func, new.target, arguments
// closure: b, e, h, t, <class_fields_init>, d
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
  this.anchorRef = new d.ElementRef();
  this.webMenuOpen = false;
  this.handleChange = function <atom:0>;
  this.handleDesktopTap = function <atom:0>;
  this.handleWebTap = function <atom:0>;
  this.renderWebMenu = function <atom:0>;
  this.handleWebMenuSelect = function <atom:0>;
  this.handleWebMenuDismiss = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=156B file=dil_widgets/src/widgets/Select
// locals: this
function {
  this = this;
  if (!((this.context == null))) goto L_2c;
  this.context;
  goto L_9b;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_55;
  undefined.anchoredOverlayPresenter;
  goto L_9b;
  undefined.dismissOverlay(this.anchorRef);
  return;
}

// fn <atom:0>  args=0 vars=6 closure=5 cpool=0 bc=2585B file=dil_widgets/src/widgets/Select
// locals: t, o, n, s, l, this
// closure: e, c, i, u, v
function {
  this = this;
  let l;
  let s;
  let n;
  let o;
  let t;
  if (!((this.viewModel.variant == null))) goto L_60;
  this.viewModel.variant;
  t = "outline";
  o = (true === this.viewModel.__legacy);
  if (!((this.viewModel.size == null))) goto L_103;
  this.viewModel.size;
  if (!(o)) goto L_fe;
  goto L_103;
  // [栈深重同步 1 -> 0]
  n = "xl";
  if (!((this.viewModel.block == null))) goto L_15e;
  this.viewModel.block;
  if (!(!o)) goto L_15e;
  s = ("ghost" !== t);
  l = this.resolveFieldAttributes(s);
  l.onTap = undefined;
  e.beginComponent(c.DILSelectPlatformView, i, undefined, undefined);
  if (!((this.viewModel.ariaLabel == null))) goto L_29e;
  this.viewModel.ariaLabel;
  e.setViewModelProperty("accessibilityLabel", this.viewModel.name);
  e.setViewModelProperty("anchorRef", this.anchorRef);
  e.setViewModelProperty("attributes", l);
  e.setViewModelProperty("block", s);
  e.setViewModelProperty("disabled", this.disabled);
  e.setViewModelProperty("dropdownIconType", this.viewModel.dropdownIconType);
  e.setViewModelProperty("height", u.resolveDILControlHeight(n, "md"));
  e.setViewModelProperty("label", this.resolvedLabel);
  e.setViewModelProperty("legacy", o);
  e.setViewModelProperty("listMaxWidth", v(this.viewModel.listMaxWidth));
  e.setViewModelProperty("listMinWidth", v(this.viewModel.listMinWidth));
  e.setViewModelProperty("listWidth", v(this.viewModel.listWidth));
  e.setViewModelProperty("onChange", this.handleChange);
  e.setViewModelProperty("onDesktopTap", this.handleDesktopTap);
  e.setViewModelProperty("onWebTap", this.handleWebTap);
  if (!((this.viewModel.optionIndicatorPosition == null))) goto L_7b3;
  this.viewModel.optionIndicatorPosition;
  e.setViewModelProperty("optionIndicatorPosition", "start");
  if (!((this.viewModel.options == null))) goto L_82c;
  this.viewModel.options;
  e.setViewModelProperty("options", []);
  e.setViewModelProperty("placeholder", this.viewModel.placeholder);
  e.setViewModelProperty("selectedValue", this.selectedValue);
  e.setViewModelProperty("showsDropdownIcon", this.showsDropdownIcon);
  e.setViewModelProperty("size", n);
  e.setViewModelProperty("webMenuOpen", this.webMenuOpen);
  e.setViewModelProperty("variant", t);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=1 bc=975B file=dil_widgets/src/widgets/Select
// args: e
// locals: i, t, o, this
// closure: s, p, l
function {
  this = this;
  let o;
  let t;
  let i;
  i = this.baseViewAttributes;
  if (!((this.viewModel.variant == null))) goto L_7b;
  this.viewModel.variant;
  t = "outline";
  o = ("outline" === t);
  i.alignSelf = s.resolveDILAlignment(this.viewModel.align);
  if (!((true === this.viewModel.__legacy))) goto L_22f;
  if (!(("ghost" === t))) goto L_19e;
  goto L_1ac;
  // [栈深重同步 4 -> 3]
  p.applyResolvedDILPaddingAttributes(i, l.resolveDILPadding({x: 2, y: 1.5}));
  if (!(("ghost" === t))) goto L_1c0;
  goto L_1c5;
  // [栈深重同步 2 -> 1]
  i.backgroundColor = "alpha-05";
  if (!((true === this.viewModel.pill))) goto L_220;
  goto L_222;
  // [栈深重同步 2 -> 1]
  i.borderRadius = 8;
  return i;
  if ((e)) goto L_270;
  if (((undefined !== i.alignSelf))) goto L_270;
  i.alignSelf = "flex-start";
  "flex-start";
  i.padding = undefined;
  i.paddingTop = 0;
  i.paddingRight = 0;
  i.paddingBottom = 0;
  i.paddingLeft = 0;
  if ((o)) goto L_2c5;
  if (!(("ghost" === t))) goto L_2ca;
  goto L_30c;
  // [栈深重同步 2 -> 1]
  if (!(this.disabled)) goto L_2f5;
  goto L_30c;
  // [栈深重同步 2 -> 1]
  if (!(("soft" === t))) goto L_307;
  goto L_30c;
  // [栈深重同步 2 -> 1]
  i.backgroundColor = "alpha-05";
  if (!(o)) goto L_34f;
  if (!(this.disabled)) goto L_348;
  goto L_350;
  // [栈深重同步 2 -> 1]
  goto L_350;
  // [栈深重同步 2 -> 1]
  i.borderColor = undefined;
  if (!(o)) goto L_364;
  goto L_365;
  // [栈深重同步 2 -> 1]
  i.borderWidth = undefined;
  if (!((false === this.viewModel.pill))) goto L_3bd;
  goto L_3c2;
  // [栈深重同步 2 -> 1]
  i.borderRadius = "100%";
  return i;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/Select
// locals: this
function {
  this = this;
  return (true === this.viewModel.disabled);
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=270B file=dil_widgets/src/widgets/Select
// locals: e, this
// closure: r
function {
  this = this;
  let e;
  e = this.viewModel.value;
  if (!((e instanceof r.DILWidgetBinding))) goto L_9b;
  return e.asString();
  if (!((e == null))) goto L_10d;
  e;
  if (!((this.uncontrolledSelectedValue == null))) goto L_10d;
  this.uncontrolledSelectedValue;
  return this.viewModel.defaultValue;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=74B file=dil_widgets/src/widgets/Select
// locals: this
// closure: M
function {
  this = this;
  return M(this.viewModel, this.selectedValue);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=76B file=dil_widgets/src/widgets/Select
// locals: this
function {
  this = this;
  return ("none" !== this.viewModel.dropdownIconType);
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=933B file=dil_widgets/src/widgets/Select
// locals: e, i, this
// closure: v
function {
  this = this;
  let i;
  let e;
  if (!((this.viewModel.variant == null))) goto L_55;
  this.viewModel.variant;
  e = "outline";
  if (!((this.viewModel.block == null))) goto L_a7;
  this.viewModel.block;
  i = ("ghost" !== e);
  if (!((this.viewModel.listWidth == null))) goto L_207;
  this.viewModel.listWidth;
  if (!((this.anchorRef.single() == null))) goto L_1c5;
  this.anchorRef.single();
  goto L_207;
  if (!((this.viewModel.listMinWidth == null))) goto L_261;
  this.viewModel.listMinWidth;
  if (!(i)) goto L_260;
  goto L_261;
  // [栈深重同步 2 -> 1]
  if (!((this.viewModel.align == null))) goto L_357;
  this.viewModel.align;
  if (!(i)) goto L_352;
  goto L_357;
  // [栈深重同步 2 -> 1]
  return {anchorRef: this.anchorRef, renderBody: this.renderWebMenu, dismissible: true, onDismiss: this.handleWebMenuDismiss, avoidCollisions: true, width: undefined.frame.width, minWidth: undefined, maxWidth: v(this.viewModel.listMaxWidth), side: this.viewModel.side, sideOffset: 5, align: "start", alignOffset: this.viewModel.alignOffset};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=247B file=dil_widgets/src/widgets/Select
// locals: this
function {
  this = this;
  if (!(this.webMenuOpen)) goto L_f6;
  this.webMenuOpen = false;
  this.scheduleRender();
  if (!((this.context == null))) goto L_87;
  this.context;
  goto L_f6;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_b0;
  undefined.anchoredOverlayPresenter;
  goto L_f6;
  undefined.dismissOverlay(this.anchorRef);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=98B file=dil_widgets/src/widgets/Select
// args: e
// locals: i, this
function {
  this = this;
  let i;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  i = undefined.runWithUserInteraction;
  if (!((undefined === i))) goto L_5c;
  goto L_61;
  // [栈深重同步 1 -> 0]
  i(e);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=0 bc=855B file=dil_widgets/src/widgets/Select
// args: e
// locals: i, t, this
// closure: w, o, r, a, y
function {
  this = this;
  let t;
  let i;
  if (!((e === this.selectedValue))) goto L_2f;
  return;
  if (!((this.viewModel.options == null))) goto L_7b;
  this.viewModel.options;
  i = w([], e);
  o.observeDILControlInteraction(this.context, this.viewModel, {target: "select", affordance: o.DILInteractionAffordance.Option, value: e});
  if (((this.viewModel.value instanceof r.DILWidgetBinding))) goto L_228;
  if (((undefined !== this.viewModel.value))) goto L_228;
  this.uncontrolledSelectedValue = e;
  this.scheduleRender();
  t = this.viewModel.onChange;
  if (!((undefined === t))) goto L_351;
  goto L_356;
  // [栈深重同步 1 -> 0]
  t(e);
  return;
}

// fn v  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_widgets/src/widgets/Select
// args: e
function {
  if (!(("number" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn M  args=2 vars=3 closure=2 cpool=0 bc=236B file=dil_widgets/src/widgets/Select
// args: e, i
// locals: t
// closure: w, g
function {
  let t;
  if (!((e.options == null))) goto L_2e;
  e.options;
  t = w([], i);
  if (!((undefined !== t))) goto L_5d;
  return t.label;
  if (!((undefined !== i))) goto L_69;
  if (!(("" !== i))) goto L_69;
  return i;
  if (!((e.placeholder == null))) goto L_eb;
  e.placeholder;
  if (!((e.options == null))) goto L_bb;
  e.options;
  if (!((g([]) == null))) goto L_c4;
  g([]);
  goto L_e5;
  if (!((undefined.label == null))) goto L_eb;
  undefined.label;
  return "";
}

// fn w  args=2 vars=5 closure=2 cpool=0 bc=147B file=dil_widgets/src/widgets/Select
// args: e, i
// locals: t, o, e#1
// closure: P, w
function {
  if (!((undefined !== i))) goto L_92;
  let t;
  t = 0;
  if (!((t < e.length))) goto L_92;
  let o;
  o = e[t];
  if (!(P(o))) goto L_5b;
  let e#1;
  e#1 = w(o.options, i);
  if (!((undefined !== e#1))) goto L_87;
  return e#1;
  if (!((o.value === i))) goto L_87;
  return o;
  t = <t_new>;
  (t++);
  goto L_d;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=38B file=dil_widgets/src/widgets/Select
// args: e
function {
  return (true !== e.disabled);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=dil_widgets/src/widgets/Select
// args: e
// closure: i
function {
  return (e.value === i);
}

// fn b  args=2 vars=4 closure=1 cpool=2 bc=114B file=dil_widgets/src/widgets/Select
// args: e, i
// locals: t, o
// closure: f
function {
  let o;
  let t;
  t = f(e).filter(function <atom:0>);
  if (!((0 === t.length))) goto L_39;
  return;
  o = t.findIndex(function <atom:0>);
  return t[((o + 1) % t.length)];
}

// fn g  args=1 vars=1 closure=1 cpool=0 bc=6B file=dil_widgets/src/widgets/Select
// args: e
// closure: f
function {
  return f(e)[0];
}

// fn y  args=2 vars=3 closure=0 cpool=0 bc=170B file=dil_widgets/src/widgets/Select
// args: e, i
// locals: t
function {
  let t;
  if (!((e == null))) goto L_13;
  e;
  goto L_34;
  if (!((undefined.label == null))) goto L_3a;
  undefined.label;
  t = {value: i, label: i};
  if (!((e == null))) goto L_4a;
  e;
  goto L_6b;
  if (!((undefined !== undefined.disabled))) goto L_9f;
  t.disabled = e.disabled;
  e.disabled;
  return {option: t};
}

// fn f  args=1 vars=4 closure=2 cpool=0 bc=183B file=dil_widgets/src/widgets/Select
// args: e
// locals: i, t, o
// closure: P, f
function {
  let i;
  i = [];
  let t;
  t = 0;
  if (!((t < e.length))) goto L_b3;
  let o;
  o = e[t];
  if (!(P(o))) goto L_7d;
  // append([], 0, f(o.options))
  f(o.options);
  goto L_a7;
  // [栈深重同步 1 -> 0]
  i.push(o);
  t = <t_new>;
  (t++);
  goto L_c;
  return i;
}

// fn P  args=1 vars=1 closure=0 cpool=0 bc=8B file=dil_widgets/src/widgets/Select
// args: e
function {
  return ("options" in e);
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=20 bc=860B file=dil_widgets/src/widgets/Select
// args: require, module, exports
// locals: e, i, t, o, n, s, l, r, d, a, h, c, u, p, Select, <class_fields_init>, Select#1, v, M, w, b, g, y, f, P
function {
  v = function v;
  M = function M;
  w = function w;
  b = function b;
  g = function g;
  y = function y;
  f = function f;
  P = function P;
  let Select#1;
  let p;
  let u;
  let c;
  let h;
  let a;
  let d;
  let r;
  let l;
  let s;
  let n;
  let o;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Select = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeComponentPrototype(undefined, "ZPdlR_enwNldENOn");
  t = e.makeComponentPrototype(undefined, "UJ4IA10WGgb3IdCM");
  o = require("dil_core/src/DILInteraction");
  n = require("dil_core/src/DILComponent");
  s = require("dil_core/src/layout/DILLayout");
  l = require("dil_core/src/layout/DILSpacing");
  r = require("dil_cel/src/WidgetBinding");
  d = require("valdi_core/src/ElementRef");
  a = require("./DILWidgetBindingActions");
  h = require("./DILSelectMenu");
  c = require("./DILSelectPlatformView");
  u = require("./DILWidgetSizes");
  p = require("./attributes/DILSpacingAttributes");
  let Select;
  let <class_fields_init>;
  class Select extends n.DILComponent { ... }
  <proto:Select>.onDestroy = function <atom:0>;
  <proto:Select>.onRender = function <atom:0>;
  <proto:Select>.resolveFieldAttributes = function <atom:0>;
  <proto:Select>.disabled = function <atom:0>;
  <proto:Select>.selectedValue = function <atom:0>;
  <proto:Select>.resolvedLabel = function <atom:0>;
  <proto:Select>.showsDropdownIcon = function <atom:0>;
  <proto:Select>.makeWebMenuOverlayRequest = function <atom:0>;
  <proto:Select>.dismissWebMenu = function <atom:0>;
  <proto:Select>.runWithUserInteraction = function <atom:0>;
  <proto:Select>.handleValueChange = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Select>;
  Select = function <atom:0>;
  // close_loc <class_fields_init>
  Select#1 = function <atom:0>;
  exports.Select = Select#1;
  Select#1.dilV2Properties = ["align", "ariaLabel", "block", "clearable", "defaultValue", "disabled", "dropdownIconType", "name", "onChange", "options", "pill", "placeholder", "required", "side", "size", "value", "variant"];
  // append([], 0, n.DIL_COMPONENT_PROPERTIES)
  [][n.DIL_COMPONENT_PROPERTIES] = "align";
  [][("align" ++)] = "alignOffset";
  [][("alignOffset" ++)] = "ariaLabel";
  [][("ariaLabel" ++)] = "block";
  [][("block" ++)] = "clearable";
  [][("clearable" ++)] = "defaultValue";
  [][("defaultValue" ++)] = "disabled";
  [][("disabled" ++)] = "dropdownIconType";
  [][("dropdownIconType" ++)] = "listMaxWidth";
  [][("listMaxWidth" ++)] = "listMinWidth";
  [][("listMinWidth" ++)] = "listWidth";
  [][("listWidth" ++)] = "name";
  [][("name" ++)] = "onChangeAction";
  [][("onChangeAction" ++)] = "optionIndicatorPosition";
  [][("optionIndicatorPosition" ++)] = "opticallyAlign";
  [][("opticallyAlign" ++)] = "options";
  [][("options" ++)] = "pill";
  [][("pill" ++)] = "placeholder";
  [][("placeholder" ++)] = "required";
  [][("required" ++)] = "role";
  [][("role" ++)] = "side";
  [][("side" ++)] = "size";
  [][("size" ++)] = "value";
  [][("value" ++)] = "variant";
  ("variant" ++);
  Select#1.properties = [];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Select
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
