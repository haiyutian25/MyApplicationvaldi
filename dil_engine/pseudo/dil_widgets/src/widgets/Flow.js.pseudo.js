// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=101B file=dil_widgets/src/widgets/Flow
// args: t
function {
  if (!(("none" !== t.getAttribute("display")))) goto L_64;
  return ("absolute" !== t.getAttribute("position"));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=100B file=dil_widgets/src/widgets/Flow
// args: t
// closure: d
function {
  return {columns: d(t.getAttribute("gridColumnEnd")), rows: d(t.getAttribute("gridRowEnd"))};
}

// fn <atom:0>  args=0 vars=8 closure=4 cpool=2 bc=837B file=dil_widgets/src/widgets/Flow
// locals: t, e, o, i, t#1, s, r, u
// closure: d, this, u, r
function {
  let o;
  let e;
  let t;
  t = this.rootRef.single();
  if (!((undefined === t))) goto L_5a;
  return;
  e = t.children.filter(function <atom:0>);
  if (!(("fixed" === this.viewModel.layout))) goto L_f6;
  goto L_1d4;
  // [栈深重同步 1 -> 0]
  o = u.placePackedFlowItems(e.map(function <atom:0>), u.countFlowColumns(r.resolveGridTemplate(this.viewModel.columns, 3)));
  let i;
  i = 0;
  if (!((i < e.length))) goto L_344;
  let u;
  let r;
  let s;
  let t#1;
  t#1 = e[i];
  if (!((o == null))) goto L_207;
  o;
  goto L_20b;
  s = undefined[i];
  if (!((undefined === s))) goto L_217;
  goto L_23d;
  // [栈深重同步 1 -> 0]
  r = (s.column + 1);
  if (!((undefined === s))) goto L_249;
  goto L_26f;
  // [栈深重同步 1 -> 0]
  u = (s.row + 1);
  if (!((t#1.getAttribute("gridColumnStart") !== r))) goto L_2d4;
  t#1.setAttribute("gridColumnStart", r);
  if (!((t#1.getAttribute("gridRowStart") !== u))) goto L_338;
  t#1.setAttribute("gridRowStart", u);
  i = <i_new>;
  (i++);
  goto L_1da;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=358B file=dil_widgets/src/widgets/Flow
// args: t
// locals: e, o
// closure: this, n
function {
  let o;
  let e;
  e = this.rootRef.single();
  if (!((undefined === e))) goto L_57;
  return;
  o = n(e);
  if (((undefined === o))) goto L_165;
  if (!((this.state == null))) goto L_96;
  this.state;
  goto L_b7;
  if (!((undefined !== undefined.autoRowHeight))) goto L_131;
  if (((Math.abs((this.state.autoRowHeight - o)) < 0.5))) goto L_165;
  this.setState({autoRowHeight: o});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=2 bc=129B file=dil_widgets/src/widgets/Flow
// locals: this, this.active_func, new.target, arguments
// closure: d, u, r, n, <class_fields_init>, i
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
  this.rootRef = new i.ElementRef();
  this.updateItemPlacement = function <atom:0>;
  this.handleLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/widgets/Flow
function {
  return false;
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=0 bc=1723B file=dil_widgets/src/widgets/Flow
// locals: o, i, this
// closure: t, e, a, r
function {
  this = this;
  let i;
  let o;
  o = this.baseViewAttributes;
  if (!(this.usesMeasuredAutoRows)) goto L_e6;
  if (!(("fixed" !== this.viewModel.layout))) goto L_e6;
  i = (undefined === this.viewModel.rows);
  t.beginRender(e, undefined);
  t.setAttributeRef(this.rootRef);
  t.setAttributeStyle("style", a.flow);
  t.setAttributes(o);
  if (!(this.usesMeasuredAutoRows)) goto L_274;
  if (!(("fixed" === this.viewModel.layout))) goto L_274;
  goto L_298;
  // [栈深重同步 4 -> 3]
  t.setAttribute("minHeight", o.minHeight);
  if (!(this.usesMeasuredAutoRows)) goto L_30d;
  goto L_30e;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onLayoutComplete", undefined);
  t.setAttribute("gap", r.resolveGridGap(this.viewModel.gap, 4));
  if (!(i)) goto L_497;
  if (!((this.state == null))) goto L_404;
  this.state;
  goto L_425;
  if (!((undefined !== undefined.autoRowHeight))) goto L_497;
  goto L_498;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("gridAutoRows", undefined);
  t.setAttributeString("gridTemplateColumns", r.resolveGridTemplate(this.viewModel.columns, 3));
  t.setAttributeString("gridTemplateRows", r.resolveOptionalGridTemplate(this.viewModel.rows));
  if (!(i)) goto L_619;
  goto L_61a;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onLayout", undefined);
  t.renderUnnamedSlot(this);
  t.endRender();
  if (!(this.usesMeasuredAutoRows)) goto L_6ba;
  this.updateItemPlacement();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/widgets/Flow
function {
  return true;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Flow
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

// fn n  args=1 vars=8 closure=2 cpool=0 bc=509B file=dil_widgets/src/widgets/Flow
// args: t
// locals: e, o, i, t#1, s, r, u
// closure: l, d
function {
  let o;
  let e;
  if (!((l(t.getAttribute("gap")) == null))) goto L_38;
  l(t.getAttribute("gap"));
  e = 0;
  o = 0;
  let i;
  for (const i of t.children) {
    let u;
    let r;
    let s;
    let t#1;
    t#1 = l(i.getAttribute("height"));
    s = l(i.getAttribute("aspectRatio"));
    if (!((t#1 == null))) goto L_134;
    t#1;
    if (((undefined === s))) goto L_e6;
    if (!((s <= 0))) goto L_eb;
    goto L_134;
    // [栈深重同步 4 -> 3]
    r = (i.frame.width / s);
    if (((undefined === r))) goto L_144;
    if (((r <= 0))) continue;
    u = d(i.getAttribute("gridRowEnd"));
    o = Math.max(o, ((r - (e * (u - 1))) / u));
    Math.max(o, ((r - (e * (u - 1))) / u));
  }
  if (!((o > 0))) goto L_1fb;
  return (Math.round((100 * o)) / 100);
  return undefined;
}

// fn l  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_widgets/src/widgets/Flow
// args: t
function {
  if (!(("number" == typeof t))) goto L_38;
  if (!(Number.isFinite(t))) goto L_38;
  return t;
  return undefined;
}

// fn d  args=1 vars=2 closure=0 cpool=2 bc=121B file=dil_widgets/src/widgets/Flow
// args: t
// locals: e
function {
  let e;
  if (!(("string" != typeof t))) goto L_f;
  return 1;
  e = new RegExp("^span\\s+(\\d+)$").exec(t);
  if (!((null === e))) goto L_43;
  return 1;
  return Math.max(1, Number(e[1]));
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=8 bc=595B file=dil_widgets/src/widgets/Flow
// args: require, module, exports
// locals: t, e, o, i, s, r, u, Flow, <class_fields_init>, Flow#1, DILV2Flow, <class_fields_init>#1, DILV2Flow#1, n, l, d, a
function {
  n = function n;
  l = function l;
  d = function d;
  let a;
  let DILV2Flow#1;
  let Flow#1;
  let u;
  let r;
  let s;
  let i;
  let o;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Flow = undefined;
  exports.DILV2Flow = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("layout", undefined, "ZJ3IU4NrL0KsJxjd");
  o = require("dil_core/src/DILComponent");
  i = require("valdi_core/src/ElementRef");
  s = require("valdi_core/src/Style");
  r = require("../layout/GridLayoutAttributes");
  u = require("../layout/FlowPlacement");
  let Flow;
  let <class_fields_init>;
  class Flow extends o.DILStatefulComponent { ... }
  <proto:Flow>.usesMeasuredAutoRows = function <atom:0>;
  <proto:Flow>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Flow>;
  Flow = function <atom:0>;
  // close_loc <class_fields_init>
  Flow#1 = function <atom:0>;
  exports.Flow = Flow#1;
  Flow#1.dilV2Properties = ["columns", "gap", "layout", "rows"];
  // append([], 0, o.DIL_COMPONENT_PROPERTIES)
  [][o.DIL_COMPONENT_PROPERTIES] = "columns";
  [][("columns" ++)] = "galleryImages";
  [][("galleryImages" ++)] = "galleryLightboxSource";
  [][("galleryLightboxSource" ++)] = "gap";
  [][("gap" ++)] = "layout";
  [][("layout" ++)] = "rows";
  ("rows" ++);
  Flow#1.properties = [];
  let DILV2Flow;
  let <class_fields_init>#1;
  class DILV2Flow extends Flow#1 { ... }
  <proto:DILV2Flow>.usesMeasuredAutoRows = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILV2Flow>;
  DILV2Flow = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILV2Flow#1 = function <atom:0>;
  exports.DILV2Flow = DILV2Flow#1;
  a = {flow: new s.Style({display: "grid", width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Flow
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
