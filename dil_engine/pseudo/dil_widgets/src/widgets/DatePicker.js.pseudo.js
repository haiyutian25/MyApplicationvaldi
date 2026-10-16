// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=110B file=dil_widgets/src/widgets/DatePicker
// closure: this, y, e
function {
  return this.handleValueChange(y.formatDateSecondsAsISODate(e.dateSeconds));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=42B file=dil_widgets/src/widgets/DatePicker
// args: e
// closure: this, y
function {
  this.runWithUserInteraction(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=dil_widgets/src/widgets/DatePicker
// closure: this
function {
  return this.handleValueChange("");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=42B file=dil_widgets/src/widgets/DatePicker
// closure: this
function {
  this.runWithUserInteraction(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=302B file=dil_widgets/src/widgets/DatePicker
// locals: e
// closure: this
function {
  let e;
  this.handleTap();
  if (!(this.calendarOpen)) goto L_7a;
  this.dismissCalendar();
  return;
  if (!((this.context == null))) goto L_a6;
  this.context;
  goto L_c7;
  e = undefined.anchoredOverlayPresenter;
  if (!((undefined !== e))) goto L_12d;
  this.calendarOpen = true;
  e.presentOverlay(this.makeCalendarOverlayRequest());
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=42B file=dil_widgets/src/widgets/DatePicker
// closure: this
function {
  this.runWithUserInteraction(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=585B file=dil_widgets/src/widgets/DatePicker
// closure: e, A, d, y, this
function {
  e.beginComponent(A.DILDatePickerCalendar, d, undefined, undefined);
  e.setViewModelProperty("max", y.normalizeISODate(this.viewModel.max));
  e.setViewModelProperty("min", y.normalizeISODate(this.viewModel.min));
  e.setViewModelProperty("onSelect", this.handleCalendarSelect);
  e.setViewModelProperty("value", this.value);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=dil_widgets/src/widgets/DatePicker
// closure: this, e
function {
  return this.handleValueChange(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=82B file=dil_widgets/src/widgets/DatePicker
// args: e
// closure: this
function {
  this.runWithUserInteraction(function <atom:0>);
  this.dismissCalendar();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=94B file=dil_widgets/src/widgets/DatePicker
// closure: this
function {
  if (!(this.calendarOpen)) goto L_5d;
  this.calendarOpen = false;
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=6 bc=323B file=dil_widgets/src/widgets/DatePicker
// locals: this, this.active_func, new.target, arguments
// closure: y, e, A, d, <class_fields_init>, g
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
  this.state = {localValue: y.normalizeISODate(this.viewModel.defaultValue)};
  this.anchorRef = new g.ElementRef();
  this.calendarOpen = false;
  this.handleNativeChange = function <atom:0>;
  this.handleClear = function <atom:0>;
  this.handleCalendarTriggerTap = function <atom:0>;
  this.renderCalendar = function <atom:0>;
  this.handleCalendarSelect = function <atom:0>;
  this.handleCalendarDismiss = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=354B file=dil_widgets/src/widgets/DatePicker
// locals: this
function {
  this = this;
  if (!(this.calendarOpen)) goto L_161;
  if (!((true !== this.viewModel.disabled))) goto L_13c;
  if (!(this.usesValdiCalendar)) goto L_13c;
  if (!((this.context == null))) goto L_c8;
  this.context;
  goto L_161;
  if (!((undefined.anchoredOverlayPresenter == null))) goto L_f1;
  undefined.anchoredOverlayPresenter;
  goto L_161;
  goto L_161;
  // [栈深重同步 1 -> 0]
  this.dismissCalendar();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=156B file=dil_widgets/src/widgets/DatePicker
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

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=543B file=dil_widgets/src/widgets/DatePicker
// closure: e, a, f, this, s, w
function {
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", f.clearButton);
  e.setAttributeFunction("onTap", this.handleClear);
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", f.clearIcon);
  e.setAttribute("src", w.resolveIconAsset("x"));
  e.setAttribute("touchEnabled", false);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=12 closure=14 cpool=3 bc=3949B file=dil_widgets/src/widgets/DatePicker
// locals: l, d, c, h, v, b, m, g, p, S, A, this
// closure: e, a, f, s, w, D, I, t, i, r, u, y, n, o
function {
  this = this;
  let A;
  let S;
  let p;
  let g;
  let m;
  let b;
  let v;
  let h;
  let c;
  let d;
  let l;
  l = this.value;
  if (!((this.viewModel.variant == null))) goto L_96;
  this.viewModel.variant;
  d = "outline";
  c = (true === this.viewModel.__legacy);
  if (!((this.viewModel.size == null))) goto L_139;
  this.viewModel.size;
  if (!(c)) goto L_134;
  goto L_139;
  // [栈深重同步 1 -> 0]
  h = "xl";
  v = D.resolveDILSelectControlMetrics(h);
  if (!((this.viewModel.pill == null))) goto L_1b1;
  this.viewModel.pill;
  b = !c;
  if (!((this.viewModel.block == null))) goto L_200;
  this.viewModel.block;
  m = !c;
  g = (true === this.viewModel.disabled);
  if (!((this.viewModel.placeholder == null))) goto L_299;
  this.viewModel.placeholder;
  p = "Select date...";
  S = I.resolveDILControlHeight(h, "md");
  A = this.baseViewAttributes;
  A.onTap = undefined;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.anchorRef);
  e.setAttributeStyle("style", f.root);
  e.setAttributes(A);
  if (!((this.viewModel.name == null))) goto L_464;
  this.viewModel.name;
  e.setAttributeString("accessibilityLabel", p);
  e.setAttribute("accessibilityStateDisabled", g);
  if (!(("soft" === d))) goto L_4df;
  if (!(g)) goto L_4d8;
  goto L_4e0;
  // [栈深重同步 4 -> 3]
  goto L_4e0;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", undefined);
  if (!(("outline" === d))) goto L_52b;
  if (!(g)) goto L_524;
  goto L_52c;
  // [栈深重同步 4 -> 3]
  goto L_52c;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderColor", undefined);
  if (!(b)) goto L_565;
  goto L_589;
  // [栈深重同步 4 -> 3]
  e.setAttribute("borderRadius", v.radius);
  if (!(("outline" === d))) goto L_5c4;
  goto L_5c5;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", undefined);
  e.setAttributeNumber("height", S);
  e.setAttributeNumber("gap", v.gap);
  if (!(b)) goto L_6a0;
  goto L_6a1;
  // [栈深重同步 5 -> 4]
  e.setAttributeNumber("paddingLeft", (v.gutter * 1));
  if (!(b)) goto L_6fc;
  goto L_6fd;
  // [栈深重同步 5 -> 4]
  e.setAttributeNumber("paddingRight", (v.gutter * 1));
  if (!(this.usesValdiCalendar)) goto L_763;
  if (!(g)) goto L_75c;
  goto L_764;
  // [栈深重同步 4 -> 3]
  goto L_764;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("cursor", undefined);
  if (!(this.usesValdiCalendar)) goto L_7e1;
  if (!(!g)) goto L_7e1;
  goto L_7e2;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", undefined);
  if (!(m)) goto L_81b;
  goto L_81c;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", undefined);
  this.renderNativePicker(l, g, p);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", f.leadingIcon);
  e.setAttributeNumber("width", v.startIconSize);
  e.setAttributeNumber("height", v.startIconSize);
  if (!(b)) goto L_9c3;
  goto L_9e7;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("marginLeft", v.startIconOffset);
  e.setAttribute("src", w.resolveIconAsset("calendar"));
  if (!(g)) goto L_a77;
  goto L_a7c;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("tint", "color-text-prose");
  e.setAttribute("touchEnabled", false);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", f.label);
  if (!(g)) goto L_b89;
  goto L_b9c;
  // [栈深重同步 4 -> 3]
  if (!((undefined === l))) goto L_b97;
  goto L_b9c;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("color", "color-text-prose");
  e.setAttributeString("font", u.dynamicMediumSystemFontForSize(I.resolveDILControlFontSize(h, "md")));
  e.setAttribute("touchEnabled", false);
  if (!((undefined === l))) goto L_c83;
  goto L_cab;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("value", y.formatISODateForDisplay(l));
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", f.spacer);
  e.endRender();
  if (!((true === this.viewModel.clearable))) goto L_ddb;
  if (!((undefined !== l))) goto L_ddb;
  if (!(!g)) goto L_ddb;
  function <atom:0>();
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", f.trailingIcon);
  e.setAttribute("src", w.resolveIconAsset("chevron-down"));
  if (!(g)) goto L_ee5;
  goto L_eea;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("tint", "color-text-secondary");
  e.setAttribute("touchEnabled", false);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=5 closure=6 cpool=0 bc=1182B file=dil_widgets/src/widgets/DatePicker
// args: t, i, r
// locals: n, this
// closure: m, b, e, l, f, y
function {
  this = this;
  let n;
  if ((m.Device.isDesktop())) goto L_99;
  if (!(m.Device.isWeb())) goto L_9c;
  return;
  if (!(b.isVersionAtLeast(29))) goto L_cc;
  goto L_d1;
  // [栈深重同步 1 -> 0]
  n = "SCValdiDatePicker";
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", f.nativePicker);
  if (!((this.viewModel.name == null))) goto L_1c1;
  this.viewModel.name;
  e.setAttributeString("accessibilityLabel", r);
  e.setAttributeString("iosClass", n);
  e.setAttributeNumber("dateSeconds", y.resolveNativeDateSeconds(t, this.viewModel.min, this.viewModel.max));
  e.setAttributeNumber("maximumDateSeconds", y.parseISODateSeconds(this.viewModel.max));
  e.setAttributeNumber("minimumDateSeconds", y.parseISODateSeconds(this.viewModel.min));
  e.setAttributeFunction("onChange", this.handleNativeChange);
  e.setAttribute("touchEnabled", !i);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=308B file=dil_widgets/src/widgets/DatePicker
// locals: e, this
// closure: v, y
function {
  this = this;
  let e;
  e = this.viewModel.value;
  if (!((e instanceof v.DILWidgetBinding))) goto L_c0;
  return y.normalizeISODate(e.asString());
  if (!((undefined !== e))) goto L_f0;
  return y.normalizeISODate(e);
  return this.state.localValue;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=149B file=dil_widgets/src/widgets/DatePicker
// closure: m
function {
  if ((m.Device.isWeb())) goto L_94;
  return m.Device.isDesktop();
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=342B file=dil_widgets/src/widgets/DatePicker
// locals: e, this
function {
  this = this;
  let e;
  if (!((this.viewModel.align == null))) goto L_52;
  this.viewModel.align;
  e = "center";
  if (!((this.viewModel.side == null))) goto L_12c;
  this.viewModel.side;
  if (!(("center" === e))) goto L_14e;
  goto L_150;
  // [栈深重同步 2 -> 1]
  return {anchorRef: this.anchorRef, renderBody: this.renderCalendar, dismissible: true, onDismiss: this.handleCalendarDismiss, avoidCollisions: true, minWidth: 230, side: "bottom", sideOffset: 8, align: e, alignOffset: -5};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=247B file=dil_widgets/src/widgets/DatePicker
// locals: this
function {
  this = this;
  if (!(this.calendarOpen)) goto L_f6;
  this.calendarOpen = false;
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

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=98B file=dil_widgets/src/widgets/DatePicker
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  t = undefined.runWithUserInteraction;
  if (!((undefined === t))) goto L_5c;
  goto L_61;
  // [栈深重同步 1 -> 0]
  t(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=699B file=dil_widgets/src/widgets/DatePicker
// args: e
// locals: t, this
// closure: c, y, S, C
function {
  this = this;
  let t;
  if (!((this.value == null))) goto L_2e;
  this.value;
  if (!((e === ""))) goto L_32;
  return;
  c.observeDILControlInteraction(this.context, this.viewModel, {target: "date_picker", affordance: c.DILInteractionAffordance.Option, value: e});
  if (!((undefined === this.viewModel.value))) goto L_191;
  this.setState({localValue: y.normalizeISODate(e)});
  t = this.viewModel.onChange;
  if (!((undefined === t))) goto L_2b5;
  goto L_2ba;
  // [栈深重同步 1 -> 0]
  t(e);
  return;
}

// fn C  args=1 vars=1 closure=0 cpool=0 bc=8B file=dil_widgets/src/widgets/DatePicker
// args: e
function {
  return {date: e};
}

// fn <atom:0>  args=3 vars=32 closure=0 cpool=14 bc=1847B file=dil_widgets/src/widgets/DatePicker
// args: require, module, exports
// locals: e, t, i, r, n, a, s, o, l, d, c, h, u, v, b, m, g, p, y, S, D, A, w, I, DatePicker, <class_fields_init>, DatePicker#1, C, f
function {
  C = function C;
  let f;
  let DatePicker#1;
  let I;
  let w;
  let A;
  let D;
  let S;
  let y;
  let p;
  let g;
  let m;
  let b;
  let v;
  let u;
  let h;
  let c;
  let d;
  let l;
  let o;
  let s;
  let a;
  let n;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DatePicker = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "8sDzRtu6yUA17jjD");
  i = e.makeNodePrototype("image", undefined, "a3y4ExuEzRgoW6sH");
  r = e.makeNodePrototype("label", undefined, "8iRjrLm2_W4vvvs6");
  n = e.makeNodePrototype("layout", undefined, "vR-m93Mvc-p_b2Aq");
  a = e.makeNodePrototype("view", ["accessibilityCategory", "button", "accessibilityLabel", "Clear date"], "iZ0UboGNO-wVn_12");
  s = e.makeNodePrototype("image", ["tint", "color-text-secondary"], "IIGas0R4GV-Xh0qB");
  o = e.makeNodePrototype("image", undefined, "ry7tLn9LN7zmCJsH");
  l = e.makeNodePrototype("custom-view", ["androidClass", "com.snap.valdi.views.ValdiDatePicker", "preferredStyle", 2], "Jvb8I-oTZawsTDQp");
  d = e.makeComponentPrototype(undefined, "5F2ULdnV1nmo4hXN");
  c = require("dil_core/src/DILInteraction");
  h = require("dil_core/src/DILComponent");
  u = require("dil_core/src/typography/DILDynamicFont");
  v = require("dil_cel/src/WidgetBinding");
  b = require("valdi_core/src/CompilerIntrinsics");
  m = require("valdi_core/src/Device");
  g = require("valdi_core/src/ElementRef");
  p = require("valdi_core/src/Style");
  y = require("../utils/ISODate");
  S = require("./DILWidgetBindingActions");
  D = require("./DILSelectControlMetrics");
  A = require("./DILDatePickerCalendar");
  w = require("./Icon");
  I = require("./DILWidgetSizes");
  let DatePicker;
  let <class_fields_init>;
  class DatePicker extends h.DILStatefulComponent { ... }
  <proto:DatePicker>.onViewModelUpdate = function <atom:0>;
  <proto:DatePicker>.onDestroy = function <atom:0>;
  <proto:DatePicker>.onRender = function <atom:0>;
  <proto:DatePicker>.renderNativePicker = function <atom:0>;
  <proto:DatePicker>.value = function <atom:0>;
  <proto:DatePicker>.usesValdiCalendar = function <atom:0>;
  <proto:DatePicker>.makeCalendarOverlayRequest = function <atom:0>;
  <proto:DatePicker>.dismissCalendar = function <atom:0>;
  <proto:DatePicker>.runWithUserInteraction = function <atom:0>;
  <proto:DatePicker>.handleValueChange = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DatePicker>;
  DatePicker = function <atom:0>;
  // close_loc <class_fields_init>
  DatePicker#1 = function <atom:0>;
  exports.DatePicker = DatePicker#1;
  DatePicker#1.dilV2Properties = ["align", "block", "clearable", "defaultValue", "disabled", "max", "min", "onChange", "pill", "placeholder", "required", "side", "size", "value", "variant"];
  // append([], 0, h.DIL_COMPONENT_PROPERTIES)
  [][h.DIL_COMPONENT_PROPERTIES] = "align";
  [][("align" ++)] = "block";
  [][("block" ++)] = "clearable";
  [][("clearable" ++)] = "defaultValue";
  [][("defaultValue" ++)] = "disabled";
  [][("disabled" ++)] = "max";
  [][("max" ++)] = "min";
  [][("min" ++)] = "name";
  [][("name" ++)] = "onChangeAction";
  [][("onChangeAction" ++)] = "pill";
  [][("pill" ++)] = "placeholder";
  [][("placeholder" ++)] = "required";
  [][("required" ++)] = "side";
  [][("side" ++)] = "size";
  [][("size" ++)] = "value";
  [][("value" ++)] = "variant";
  ("variant" ++);
  DatePicker#1.properties = [];
  f = {root: new p.Style({accessibilityCategory: "input", alignItems: "center", flexDirection: "row", flexShrink: 0, minWidth: 112, position: "relative"}), nativePicker: new p.Style({height: "100%", left: 0, opacity: 0.02, position: "absolute", top: 0, width: "100%"}), leadingIcon: new p.Style({flexShrink: 0, objectFit: "contain"}), label: new p.Style({flexShrink: 1}), spacer: new p.Style({flexGrow: 1, minWidth: 0}), clearButton: new p.Style({alignItems: "center", flexShrink: 0, height: 24, justifyContent: "center", width: 20}), clearIcon: new p.Style({height: 12, objectFit: "contain", width: 12}), trailingIcon: new p.Style({flexShrink: 0, height: 16, objectFit: "contain", opacity: 0.75, width: 16})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/DatePicker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
