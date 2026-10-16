// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=dil_widgets/src/widgets/DILDatePickerCalendar
// closure: this
function {
  this.changeVisibleMonth(-1);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=dil_widgets/src/widgets/DILDatePickerCalendar
// closure: this
function {
  this.changeVisibleMonth(1);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=2 bc=166B file=dil_widgets/src/widgets/DILDatePickerCalendar
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, C
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
  this.state = {visibleMonthSeconds: C(this.viewModel.value)};
  this.handlePreviousMonth = function <atom:0>;
  this.handleNextMonth = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=385B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: e
// locals: t, this
// closure: C
function {
  this = this;
  let t;
  if (((undefined === e))) goto L_be;
  if (((e.value === this.viewModel.value))) goto L_be;
  if (!((undefined === this.viewModel.value))) goto L_c1;
  return;
  t = C(this.viewModel.value);
  if (!((t !== this.state.visibleMonthSeconds))) goto L_180;
  this.setState({visibleMonthSeconds: t});
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=252B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: t, o
// closure: e, d, I
function {
  e.beginRender(d, "weekday-".concat(o));
  e.setAttributeStyle("style", I.weekdayLabel);
  e.setAttributeString("value", t);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=6 closure=14 cpool=1 bc=1729B file=dil_widgets/src/widgets/DILDatePickerCalendar
// locals: l, c, h, v, u, this
// closure: e, d, I, m, N, t, o, i, DILDatePickerCalendarNavigationButton, n, r, L, a, s
function {
  this = this;
  let u;
  let v;
  let h;
  let c;
  let l;
  l = new Date((1000 * this.state.visibleMonthSeconds));
  c = l.getFullYear();
  h = l.getMonth();
  v = m.Device.getDeviceLocales()[0];
  u = N(v);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", I.wrapper);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", I.calendar);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", I.monthHeader);
  e.beginComponent(DILDatePickerCalendarNavigationButton, n, undefined, undefined);
  e.setViewModelProperty("disabled", !this.canGoToPreviousMonth);
  e.setViewModelProperty("onTap", this.handlePreviousMonth);
  e.endComponent();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", I.monthLabel);
  e.setAttributeString("value", L(l, v));
  e.endRender();
  e.beginComponent(DILDatePickerCalendarNavigationButton, a, undefined, undefined);
  e.setViewModelProperty("disabled", !this.canGoToNextMonth);
  e.setViewModelProperty("onTap", this.handleNextMonth);
  e.endComponent();
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", I.week);
  u.forEach(function <atom:0>);
  e.endRender();
  this.renderMonth(c, h);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=9 closure=4 cpool=0 bc=609B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: t, o
// locals: i, n, r, a, s, d, this
// closure: R, e, l, I
function {
  this = this;
  let s;
  let a;
  let r;
  let n;
  let i;
  i = new Date(t, o, 1, 12).getDay();
  n = new Date(t, (o + 1), 0, 12).getDate();
  r = Math.ceil(((i + n) / 7));
  a = this.viewModel.value;
  s = R(new Date());
  let d;
  d = 0;
  if (!((d < r))) goto L_260;
  e.beginRender(l, "week-".concat(d));
  e.setAttributeStyle("style", I.week);
  if (!((d === (r - 1)))) goto L_1f0;
  goto L_1f1;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("marginBottom", 2);
  this.renderWeek(t, o, d, i, n, a, s);
  e.endRender();
  d = <d_new>;
  (d++);
  goto L_105;
  return;
}

// fn <atom:0>  args=7 vars=11 closure=6 cpool=0 bc=774B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: t, o, i, n, r, a, s
// locals: d, l, v, this
// closure: e, c, I, F, DILDatePickerCalendarDay, h
function {
  this = this;
  let d;
  d = 0;
  if (!((d < 7))) goto L_305;
  let v;
  let l;
  l = ((((7 * i) + d) - n) + 1);
  if (((l < 1))) goto L_33;
  if (!((l > r))) goto L_10b;
  e.beginRender(c, "blank-".concat(d));
  e.setAttributeStyle("style", I.emptyDay);
  e.endRender();
  goto L_2fa;
  v = F(t, o, l);
  e.beginComponent(DILDatePickerCalendarDay, h, v, undefined);
  e.setViewModelProperty("day", l);
  e.setViewModelProperty("enabled", this.isDateEnabled(v));
  e.setViewModelProperty("onSelect", this.viewModel.onSelect);
  e.setViewModelProperty("selected", (v === a));
  e.setViewModelProperty("today", (v === s));
  e.setViewModelProperty("value", v);
  e.endComponent();
  d = <d_new>;
  (d++);
  goto L_7;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=191B file=dil_widgets/src/widgets/DILDatePickerCalendar
// locals: e, this
// closure: D
function {
  this = this;
  let e;
  e = this.viewModel.min;
  if (((undefined === e))) goto L_be;
  return (e < D.formatDateSecondsAsISODate(this.state.visibleMonthSeconds));
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=380B file=dil_widgets/src/widgets/DILDatePickerCalendar
// locals: e, t, this
// closure: F
function {
  this = this;
  let t;
  let e;
  e = this.viewModel.max;
  if (!((undefined === e))) goto L_56;
  return true;
  t = new Date((1000 * this.state.visibleMonthSeconds));
  return (F(t.getFullYear(), t.getMonth(), new Date(t.getFullYear(), (t.getMonth() + 1), 0, 12).getDate()) < e);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=294B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: e
// locals: this
function {
  this = this;
  if (((undefined === this.viewModel.min))) goto L_90;
  if (!((e >= this.viewModel.min))) goto L_125;
  if (((undefined === this.viewModel.max))) goto L_125;
  return (e <= this.viewModel.max);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=262B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = new Date((1000 * this.state.visibleMonthSeconds));
  this.setState({visibleMonthSeconds: (new Date(t.getFullYear(), (t.getMonth() + e), 1, 12).getTime() / 1000)});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=122B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: e
// closure: this
function {
  if (!((e !== this.state.hovered))) goto L_79;
  this.setState({hovered: e});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=83B file=dil_widgets/src/widgets/DILDatePickerCalendar
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
  this.state = {hovered: false};
  this.handleHover = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=6 cpool=1 bc=1381B file=dil_widgets/src/widgets/DILDatePickerCalendar
// locals: t, this
// closure: e, v, I, m, u, M
function {
  this = this;
  let t;
  t = this.viewModel.disabled;
  e.beginRender(v, undefined);
  e.setAttributeStyle("style", I.navigationButton);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttribute("accessibilityStateDisabled", t);
  if (!(this.state.hovered)) goto L_1db;
  goto L_1e0;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", "transparent");
  if (!(m.Device.isWeb())) goto L_26a;
  if (!(t)) goto L_263;
  goto L_26b;
  // [栈深重同步 4 -> 3]
  goto L_26b;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("cursor", undefined);
  if (!(m.Device.isWeb())) goto L_30c;
  if (!(!t)) goto L_30c;
  goto L_30d;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onHover", undefined);
  if (!(t)) goto L_342;
  goto L_385;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", this.viewModel.onTap);
  if (!(t)) goto L_3bb;
  goto L_3bc;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 1);
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", I.navigationIcon);
  if (!(("previous" === this.viewModel.direction))) goto L_4dc;
  goto L_4e1;
  // [栈深重同步 5 -> 4]
  e.setAttribute("src", M.resolveIconAsset("chevron-right"));
  e.setAttribute("touchEnabled", false);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=122B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: e
// closure: this
function {
  if (!((e !== this.state.hovered))) goto L_79;
  this.setState({hovered: e});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=142B file=dil_widgets/src/widgets/DILDatePickerCalendar
// closure: this
function {
  this.viewModel.onSelect(this.viewModel.value);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=2 bc=97B file=dil_widgets/src/widgets/DILDatePickerCalendar
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
  this.state = {hovered: false};
  this.handleHover = function <atom:0>;
  this.handleTap = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=6 cpool=1 bc=1794B file=dil_widgets/src/widgets/DILDatePickerCalendar
// locals: t, o, this
// closure: e, b, I, m, y, g
function {
  this = this;
  let o;
  let t;
  t = this.viewModel.enabled;
  o = this.viewModel.selected;
  e.beginRender(b, undefined);
  e.setAttributeStyle("style", I.day);
  e.setAttributeString("accessibilityLabel", this.viewModel.value);
  e.setAttribute("accessibilityStateDisabled", !t);
  e.setAttribute("accessibilityStateSelected", o);
  if (!(o)) goto L_213;
  goto L_218;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", "transparent");
  if (!(this.state.hovered)) goto L_291;
  goto L_296;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderColor", "transparent");
  if (!(m.Device.isWeb())) goto L_320;
  if (!(t)) goto L_319;
  goto L_321;
  // [栈深重同步 4 -> 3]
  goto L_321;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("cursor", undefined);
  if (!(m.Device.isWeb())) goto L_3c1;
  if (!(t)) goto L_3c1;
  goto L_3c2;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onHover", undefined);
  if (!(t)) goto L_418;
  goto L_419;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", undefined);
  if (!(t)) goto L_44e;
  goto L_450;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0.4);
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", I.dayLabel);
  if (!(o)) goto L_506;
  goto L_50b;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("color", "color-text-prose");
  e.setAttributeString("value", String(this.viewModel.day));
  e.endRender();
  if (!(this.viewModel.today)) goto L_6d9;
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", I.todayDot);
  if (!(o)) goto L_6a9;
  goto L_6ae;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", "color-text-prose");
  e.endRender();
  e.endRender();
  return;
}

// fn C  args=1 vars=3 closure=1 cpool=0 bc=211B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: e
// locals: t, o
// closure: D
function {
  let o;
  let t;
  t = D.parseISODateSeconds(e);
  if (!((undefined === t))) goto L_3f;
  goto L_4f;
  // [栈深重同步 1 -> 0]
  o = new Date((1000 * t));
  return (new Date(o.getFullYear(), o.getMonth(), 1, 12).getTime() / 1000);
}

// fn R  args=1 vars=1 closure=1 cpool=0 bc=115B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: e
// closure: F
function {
  return F(e.getFullYear(), e.getMonth(), e.getDate());   // tail call
}

// fn F  args=3 vars=3 closure=0 cpool=3 bc=187B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: e, t, o
function {
  return "".concat(String(e).padStart(4, "0"), "-", String((t + 1)).padStart(2, "0"), "-", String(o).padStart(2, "0"));   // tail call
}

// fn L  args=2 vars=2 closure=1 cpool=0 bc=83B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: e, t
// closure: f
function {
  return new Intl.DateTimeFormat(t, f).format(e);   // tail call
}

// fn N  args=1 vars=5 closure=1 cpool=0 bc=244B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: e
// locals: t, o, i, n
// closure: x
function {
  let i;
  let o;
  let t;
  t = new Intl.DateTimeFormat(e, x);
  o = new Date(2024, 0, 7, 12);
  i = [];
  let n;
  n = 0;
  if (!((n < 7))) goto L_f0;
  i.push(t.format(new Date(2024, 0, (o.getDate() + n), 12)));
  n = <n_new>;
  (n++);
  goto L_52;
  return i;
}

// fn <atom:0>  args=3 vars=46 closure=0 cpool=18 bc=2621B file=dil_widgets/src/widgets/DILDatePickerCalendar
// args: require, module, exports
// locals: e, t, o, i, n, r, a, s, d, l, c, h, v, u, b, y, g, p, w, m, S, D, M, k, A, P, f, x, DILDatePickerCalendar, <class_fields_init>, DILDatePickerCalendar#1, DILDatePickerCalendarNavigationButton, <class_fields_init>#1, DILDatePickerCalendarNavigationButton#1, DILDatePickerCalendarDay, <class_fields_init>#2, DILDatePickerCalendarDay#1, C, R, F, L, N, I
function {
  C = function C;
  R = function R;
  F = function F;
  L = function L;
  N = function N;
  let I;
  let DILDatePickerCalendarDay#1;
  let DILDatePickerCalendarNavigationButton#1;
  let DILDatePickerCalendar#1;
  let x;
  let f;
  let P;
  let A;
  let k;
  let M;
  let D;
  let S;
  let m;
  let w;
  let p;
  let g;
  let y;
  let b;
  let u;
  let v;
  let h;
  let c;
  let l;
  let d;
  let s;
  let a;
  let r;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILDatePickerCalendar = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "xufCf0-EEjV5bElp");
  o = e.makeNodePrototype("view", undefined, "3t5bSpfBCDmrfJro");
  i = e.makeNodePrototype("view", undefined, "1d1sz2QGnFyHvH0R");
  n = e.makeComponentPrototype(["accessibilityLabel", "Previous month", "direction", "previous"], "mrC3V6VDVUZ3SQZR");
  r = e.makeNodePrototype("label", undefined, "2vtqd8eCv9Iq5e02");
  a = e.makeComponentPrototype(["accessibilityLabel", "Next month", "direction", "next"], "B3lpgLWzcBQTy5zy");
  s = e.makeNodePrototype("view", undefined, "pUO5RDKFID13tvAw");
  d = e.makeNodePrototype("label", undefined, "Mbxml5wvyrCGODCc");
  l = e.makeNodePrototype("view", undefined, "1XC5HZJsupcUHPyd");
  c = e.makeNodePrototype("view", undefined, "4YjOQErjROexeBxo");
  h = e.makeComponentPrototype(undefined, "n47Wu8LX0YUKaHkf");
  v = e.makeNodePrototype("view", ["accessibilityCategory", "button"], "ytcPuThOro8_ZAdp");
  u = e.makeNodePrototype("image", ["tint", "color-text-secondary"], "FxKzAMji-3nm96l7");
  b = e.makeNodePrototype("view", ["accessibilityCategory", "button"], "flCPmJFJLMTV8f9U");
  y = e.makeNodePrototype("label", undefined, "DbTg0aNBbEJ5dN8o");
  g = e.makeNodePrototype("view", undefined, "aFP2_CI-FQAcp3Pe");
  p = require("dil_core/src/typography/DILDynamicFont");
  w = require("valdi_core/src/Component");
  m = require("valdi_core/src/Device");
  S = require("valdi_core/src/Style");
  D = require("../utils/ISODate");
  M = require("./Icon");
  k = 210;
  A = 30;
  P = 7;
  f = {calendar: "gregory", month: "long", year: "numeric"};
  x = {calendar: "gregory", weekday: "short"};
  let DILDatePickerCalendar;
  let <class_fields_init>;
  class DILDatePickerCalendar extends w.StatefulComponent { ... }
  <proto:DILDatePickerCalendar>.onViewModelUpdate = function <atom:0>;
  <proto:DILDatePickerCalendar>.onRender = function <atom:0>;
  <proto:DILDatePickerCalendar>.renderMonth = function <atom:0>;
  <proto:DILDatePickerCalendar>.renderWeek = function <atom:0>;
  <proto:DILDatePickerCalendar>.canGoToPreviousMonth = function <atom:0>;
  <proto:DILDatePickerCalendar>.canGoToNextMonth = function <atom:0>;
  <proto:DILDatePickerCalendar>.isDateEnabled = function <atom:0>;
  <proto:DILDatePickerCalendar>.changeVisibleMonth = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILDatePickerCalendar>;
  DILDatePickerCalendar = function <atom:0>;
  // close_loc <class_fields_init>
  DILDatePickerCalendar#1 = function <atom:0>;
  exports.DILDatePickerCalendar = DILDatePickerCalendar#1;
  let DILDatePickerCalendarNavigationButton;
  let <class_fields_init>#1;
  class DILDatePickerCalendarNavigationButton extends w.StatefulComponent { ... }
  <proto:DILDatePickerCalendarNavigationButton>.onRender = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILDatePickerCalendarNavigationButton>;
  DILDatePickerCalendarNavigationButton = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILDatePickerCalendarNavigationButton#1 = function <atom:0>;
  let DILDatePickerCalendarDay;
  let <class_fields_init>#2;
  class DILDatePickerCalendarDay extends w.StatefulComponent { ... }
  <proto:DILDatePickerCalendarDay>.onRender = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:DILDatePickerCalendarDay>;
  DILDatePickerCalendarDay = function <atom:0>;
  // close_loc <class_fields_init>#2
  DILDatePickerCalendarDay#1 = function <atom:0>;
  I = {calendar: new S.Style({flexDirection: "column", width: k}), day: new S.Style({alignItems: "center", borderRadius: "100%", borderWidth: 1, flexShrink: 0, height: A, justifyContent: "center", position: "relative", width: A}), dayLabel: new S.Style({font: p.dynamicSystemFontForSize(14), textAlign: "center", touchEnabled: false}), emptyDay: new S.Style({flexShrink: 0, height: A, width: A}), monthHeader: new S.Style({alignItems: "center", flexDirection: "row", height: 28, marginBottom: 6, width: k}), monthLabel: new S.Style({color: "color-text-prose", flexGrow: 1, font: p.dynamicSemiboldSystemFontForSize(13), textAlign: "center"}), navigationButton: new S.Style({alignItems: "center", borderRadius: 6, flexShrink: 0, height: 28, justifyContent: "center", width: 28}), navigationIcon: new S.Style({height: 16, objectFit: "contain", width: 16}), todayDot: new S.Style({borderRadius: "100%", bottom: 3, height: 3, left: 13, position: "absolute", width: 3}), week: new S.Style({flexDirection: "row", flexShrink: 0, marginBottom: 2, width: k}), weekdayLabel: new S.Style({color: "color-text-secondary", flexShrink: 0, font: p.dynamicSystemFontForSize(12), height: A, textAlign: "center", width: A}), wrapper: new S.Style({flexDirection: "column", paddingBottom: 12, paddingLeft: 12, paddingRight: 12, paddingTop: 10})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/DILDatePickerCalendar
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
