// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=valdi_ui/src/components/SafeArea
// args: t
function {
  t.Top = 0;
  t[0] = "Top";
  t.Right = 1;
  t[1] = "Right";
  t.Bottom = 2;
  t[2] = "Bottom";
  t.Left = 3;
  t[3] = "Left";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=48B file=valdi_ui/src/components/SafeArea
// closure: this, h
function {
  this.setState({insets: h()});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=203B file=valdi_ui/src/components/SafeArea
// args: t
// closure: this
function {
  this.setState({insets: {top: t.topInset, right: t.rightInset, bottom: t.bottomInset, left: t.leftInset}});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=2 bc=97B file=valdi_ui/src/components/SafeArea
// locals: this, this.active_func, new.target, arguments
// closure: h, <class_fields_init>
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
  this.state = {insets: h()};
  this.updateInsets = function <atom:0>;
  this.updateRootInsets = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=437B file=valdi_ui/src/components/SafeArea
// locals: t, this
// closure: s, o, r
function {
  this = this;
  if (!(s.isVersionAtLeast(85))) goto L_140;
  let t;
  if (!((this.context == null))) goto L_5b;
  this.context;
  goto L_7c;
  t = undefined.rootSafeArea;
  if (!((undefined !== t))) goto L_140;
  this.registerDisposable(o.convertBridgeObservableToObservable(t.observeInsets()).subscribe(this.updateRootInsets));
  return;
  this.displayInsetObserver = r.Device.observeDisplayInsetChange(this.updateInsets);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=valdi_ui/src/components/SafeArea
// locals: this
function {
  this = this;
  if (!((this.displayInsetObserver == null))) goto L_2c;
  this.displayInsetObserver;
  goto L_50;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=6 closure=4 cpool=0 bc=869B file=valdi_ui/src/components/SafeArea
// locals: o, i, s, r, n, this
// closure: d, a, t, e
function {
  this = this;
  let n;
  let r;
  let s;
  let i;
  let o;
  if (((undefined === undefined))) goto L_a6;
  o = <to_object>(undefined).edges;
  i = <to_object>(undefined).padding;
  s = <to_object>(undefined).style;
  r = {};
  <to_object>(undefined);
  {edges: null, padding: null, style: null};
  goto L_cd;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  if (!((o == null))) goto L_11d;
  o;
  n = d(this.state.insets, a, i, s);
  t.beginRender(e, undefined);
  t.setAttributes(r);
  t.setAttributeStyle("style", this.resolvedStyle);
  t.setAttributeNumber("paddingBottom", n.bottom);
  t.setAttributeNumber("paddingLeft", n.left);
  t.setAttributeNumber("paddingRight", n.right);
  t.setAttributeNumber("paddingTop", n.top);
  t.renderUnnamedSlot(this);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=373B file=valdi_ui/src/components/SafeArea
// locals: t, this
// closure: b, n
function {
  this = this;
  let t;
  t = this.viewModel.style;
  if (!((undefined === t))) goto L_75;
  return b.surface;
  if (!((this.cachedInputStyle === t))) goto L_c3;
  if (((undefined !== this.cachedResolvedStyle))) goto L_151;
  this.cachedInputStyle = t;
  this.cachedResolvedStyle = n.Style.merge(b.surface, t);
  n.Style.merge(b.surface, t);
  return this.cachedResolvedStyle;
}

// fn d  args=4 vars=5 closure=2 cpool=0 bc=618B file=valdi_ui/src/components/SafeArea
// args: t, e, o, i
// locals: s
// closure: c, l
function {
  let s;
  s = c(o, i);
  if (!(e.includes(l.Top))) goto L_9a;
  goto L_9b;
  // [栈深重同步 3 -> 2]
  if (!(e.includes(l.Right))) goto L_132;
  goto L_133;
  // [栈深重同步 3 -> 2]
  if (!(e.includes(l.Bottom))) goto L_1ca;
  goto L_1cb;
  // [栈深重同步 3 -> 2]
  if (!(e.includes(l.Left))) goto L_262;
  goto L_263;
  // [栈深重同步 3 -> 2]
  return {top: (s.top + 0), right: (s.right + 0), bottom: (s.bottom + 0), left: (s.left + 0)};
}

// fn c  args=2 vars=5 closure=2 cpool=0 bc=992B file=valdi_ui/src/components/SafeArea
// args: t, e
// locals: o, i, s
// closure: p, u
function {
  let s;
  let i;
  let o;
  if (!((e == null))) goto L_12;
  e;
  goto L_33;
  o = undefined.attributes;
  if (!((o == null))) goto L_40;
  o;
  goto L_61;
  i = p(undefined.padding);
  if (!((o == null))) goto L_70;
  o;
  goto L_91;
  if (!((u(undefined.paddingTop) == null))) goto L_bb;
  u(undefined.paddingTop);
  if (!((o == null))) goto L_cc;
  o;
  goto L_ed;
  if (!((u(undefined.paddingRight) == null))) goto L_117;
  u(undefined.paddingRight);
  if (!((o == null))) goto L_128;
  o;
  goto L_149;
  if (!((u(undefined.paddingBottom) == null))) goto L_173;
  u(undefined.paddingBottom);
  if (!((o == null))) goto L_184;
  o;
  goto L_1a5;
  if (!((u(undefined.paddingLeft) == null))) goto L_1cf;
  u(undefined.paddingLeft);
  s = {top: i.top, right: i.right, bottom: i.bottom, left: i.left};
  if (!((undefined === t))) goto L_1de;
  return s;
  if (!(("number" == typeof t))) goto L_202;
  return {top: t, right: t, bottom: t, left: t};
  if (!((t.top == null))) goto L_275;
  t.top;
  if (!((t.y == null))) goto L_275;
  t.y;
  if (!((t.right == null))) goto L_2ec;
  t.right;
  if (!((t.x == null))) goto L_2ec;
  t.x;
  if (!((t.bottom == null))) goto L_363;
  t.bottom;
  if (!((t.y == null))) goto L_363;
  t.y;
  if (!((t.left == null))) goto L_3da;
  t.left;
  if (!((t.x == null))) goto L_3da;
  t.x;
  return {top: s.top, right: s.right, bottom: s.bottom, left: s.left};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=44B file=valdi_ui/src/components/SafeArea
// args: t
function {
  return !Number.isFinite(t);
}

// fn p  args=1 vars=4 closure=0 cpool=3 bc=369B file=valdi_ui/src/components/SafeArea
// args: t
// locals: e, o, i
function {
  let i;
  let o;
  let e;
  if (!(("number" == typeof t))) goto L_1a;
  goto L_cd;
  // [栈深重同步 1 -> 0]
  if (!(("string" == typeof t))) goto L_ca;
  if (!((t.trim().length > 0))) goto L_ca;
  goto L_cd;
  // [栈深重同步 1 -> 0]
  e = [];
  if (((0 === e.length))) goto L_10b;
  if (((e.length > 4))) goto L_10b;
  if (!(e.some(function <atom:0>))) goto L_127;
  return {top: 0, right: 0, bottom: 0, left: 0};
  o = e[0];
  if (!((e[1] == null))) goto L_13a;
  e[1];
  i = o;
  if (!((e[2] == null))) goto L_159;
  e[2];
  if (!((e[3] == null))) goto L_16b;
  e[3];
  return {top: o, right: i, bottom: o, left: i};
}

// fn u  args=1 vars=2 closure=0 cpool=0 bc=130B file=valdi_ui/src/components/SafeArea
// args: t
// locals: e
function {
  let e;
  if (!(("number" == typeof t))) goto L_f;
  return t;
  if ((("string" != typeof t))) goto L_43;
  if (!((0 === t.trim().length))) goto L_46;
  return;
  e = Number(t);
  if (!(Number.isFinite(e))) goto L_80;
  return e;
  return undefined;
}

// fn h  args=0 vars=0 closure=1 cpool=0 bc=310B file=valdi_ui/src/components/SafeArea
// closure: r
function {
  return {top: r.Device.getDisplayTopInset(), right: r.Device.getDisplayRightInset(), bottom: r.Device.getDisplayBottomInset(), left: r.Device.getDisplayLeftInset()};
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=11 bc=625B file=valdi_ui/src/components/SafeArea
// args: require, module, exports
// locals: t, e, o, i, s, r, n, l, a, SafeArea, <class_fields_init>, SafeArea#1, d, c, p, u, h, b
function {
  d = function d;
  c = function c;
  p = function p;
  u = function u;
  h = function h;
  let b;
  let SafeArea#1;
  let a;
  let n;
  let r;
  let s;
  let i;
  let o;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SafeAreaEdge = undefined;
  exports.SafeArea = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", undefined, "E5NvaD3uVoahNwq3");
  o = require("bridge_observables/src/utils/convertBridgeObservableToObservable");
  i = require("valdi_core/src/Component");
  s = require("valdi_core/src/CompilerIntrinsics");
  r = require("valdi_core/src/Device");
  n = require("valdi_core/src/Style");
  if ((l)) goto L_11d;
  l = {};
  exports.SafeAreaEdge = {};
  !function <atom:0>({});
  a = [l.Top, l.Right, l.Bottom, l.Left];
  let SafeArea;
  let <class_fields_init>;
  class SafeArea extends i.StatefulComponent { ... }
  <proto:SafeArea>.onCreate = function <atom:0>;
  <proto:SafeArea>.onDestroy = function <atom:0>;
  <proto:SafeArea>.onRender = function <atom:0>;
  <proto:SafeArea>.resolvedStyle = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SafeArea>;
  SafeArea = function <atom:0>;
  // close_loc <class_fields_init>
  SafeArea#1 = function <atom:0>;
  exports.SafeArea = SafeArea#1;
  b = {surface: new n.Style({alignItems: "stretch", flexDirection: "column", flexShrink: 0, overflow: "visible"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/SafeArea
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
