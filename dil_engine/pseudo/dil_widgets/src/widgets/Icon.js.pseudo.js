// fn <atom:0>  args=0 vars=8 closure=9 cpool=0 bc=1931B file=dil_widgets/src/widgets/Icon
// locals: o, s, c, l, d, a, u, this
// closure: A, n, I, e, i, x, w, r, t
function {
  this = this;
  let u;
  let a;
  let d;
  let l;
  let c;
  let s;
  let o;
  o = this.baseViewAttributes;
  if (!((true === this.viewModel.ariaHidden))) goto L_99;
  o.accessibilityNavigation = "ignored";
  "ignored";
  s = A(this.viewModel.name);
  if (!((undefined === s))) goto L_eb;
  goto L_113;
  // [栈深重同步 1 -> 0]
  c = n.getIconAsset(s);
  if (((true === this.viewModel.inline))) goto L_1a6;
  l = (true === this.viewModel.__inline);
  if (!(l)) goto L_23d;
  if (!((undefined === this.viewModel.size))) goto L_23d;
  goto L_23e;
  // [栈深重同步 1 -> 0]
  if (!((undefined == null))) goto L_289;
  undefined;
  d = I(this.viewModel.size);
  if (!((undefined === c))) goto L_3f1;
  e.beginRender(i, undefined);
  if (!(l)) goto L_315;
  goto L_339;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", x.placeholder);
  e.setAttributes(o);
  e.setAttributeNumber("width", d);
  e.setAttributeNumber("height", d);
  e.endRender();
  return;
  if (!(l)) goto L_48f;
  if (((undefined === this.viewModel.color))) goto L_48f;
  a = ("inherit" === this.viewModel.color);
  if (!(w(s))) goto L_49e;
  goto L_55d;
  // [栈深重同步 1 -> 0]
  if (!(a)) goto L_4e9;
  goto L_4ea;
  // [栈深重同步 1 -> 0]
  if (!((undefined == null))) goto L_55d;
  undefined;
  u = r.resolveDILTextColor(this.viewModel.color, "prose");
  e.beginRender(t, undefined);
  if (!(l)) goto L_5df;
  goto L_603;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", x.icon);
  e.setAttribute("src", c);
  e.setAttributes(o);
  e.setAttributeNumber("width", d);
  e.setAttributeNumber("height", d);
  e.setAttributeString("tint", u);
  e.setAttributeString("accessibilityLabel", this.viewModel.name);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Icon
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

// fn I  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_widgets/src/widgets/Icon
// args: e
// closure: c
function {
  return c.resolveDILIconSize(e);   // tail call
}

// fn g  args=1 vars=2 closure=2 cpool=0 bc=57B file=dil_widgets/src/widgets/Icon
// args: e
// locals: i
// closure: A, n
function {
  let i;
  i = A(e);
  if (!((undefined === i))) goto L_10;
  return undefined;
  return n.getIconAsset(i);
}

// fn A  args=1 vars=2 closure=3 cpool=10 bc=402B file=dil_widgets/src/widgets/Icon
// args: e
// locals: i
// closure: f, m, b
function {
  let i;
  if (((undefined === e))) goto L_e;
  if (!((0 === e.length))) goto L_11;
  return;
  if (!(e.startsWith("lucide:"))) goto L_42;
  return f(e);   // tail call
  if (!(e.startsWith("vendor:"))) goto L_73;
  return m(e);   // tail call
  i = b(e);
  if (((undefined !== i))) goto L_ab;
  if (!(!new RegExp("^[A-Z][A-Za-z0-9]*$").test(e))) goto L_b1;
  return i;
  return b(e.replace(new RegExp("([a-z\\d])([A-Z])"), "$1-$2").replace(new RegExp("([A-Z]+)([A-Z][a-z])"), "$1-$2").replace(new RegExp("([A-Za-z])(\\d)"), "$1-$2").replace(new RegExp("(\\d)x-(\\d)"), "$1x$2").toLowerCase());   // tail call
}

// fn b  args=1 vars=3 closure=4 cpool=0 bc=210B file=dil_widgets/src/widgets/Icon
// args: e
// locals: i, t
// closure: a, l, n, S
function {
  let t;
  let i;
  if (!(!a.test(e))) goto L_32;
  return;
  i = l.LUCIDE_FIRST_PARTY_ICON_ALIASES[e];
  if (!(("string" == typeof i))) goto L_95;
  if (!((undefined !== n.getIconAsset(i)))) goto L_95;
  return i;
  t = S(e);
  if (!((undefined !== t))) goto L_a4;
  return t;
  if (!((undefined === n.getIconAsset(e)))) goto L_d0;
  return undefined;
  return e;
}

// fn f  args=1 vars=2 closure=2 cpool=0 bc=137B file=dil_widgets/src/widgets/Icon
// args: e
// locals: i
// closure: a, n
function {
  let i;
  i = e.slice(7);
  if (!(a.test(i))) goto L_88;
  if (!((undefined === n.getIconAsset(i)))) goto L_84;
  return undefined;
  return i;
  return;
}

// fn m  args=1 vars=5 closure=3 cpool=0 bc=228B file=dil_widgets/src/widgets/Icon
// args: e
// locals: i, t, o, r
// closure: v, h, n
function {
  let r;
  let o;
  let t;
  let i;
  i = e.split(":");
  if (!((3 !== i.length))) goto L_40;
  return;
  if (((undefined === undefined))) goto L_55;
  const _it1 = undefined;
  <done(_it1)>;
  <value(_it1)>;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  goto L_5b;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_45;
  // [栈深重同步 1 -> 0]
  if (!(("evernote" === t))) goto L_6b;
  goto L_7c;
  // [栈深重同步 1 -> 0]
  if (!(("kakao" === t))) goto L_7b;
  goto L_7c;
  // [栈深重同步 1 -> 0]
  r = undefined;
  if (!((undefined !== r))) goto L_e2;
  if (!(r.includes(o))) goto L_e2;
  if (!((undefined === n.getIconAsset(o)))) goto L_de;
  return undefined;
  return o;
  return undefined;
}

// fn S  args=1 vars=3 closure=2 cpool=0 bc=162B file=dil_widgets/src/widgets/Icon
// args: e
// locals: i, t
// closure: d, n
function {
  let i;
  for (const i of d) {
    if (!(e.endsWith(i))) continue;
    let t;
    t = e.slice(0, -i.length);
    if (!((undefined !== n.getIconAsset(t)))) continue;
    return t;
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn w  args=1 vars=1 closure=1 cpool=0 bc=16B file=dil_widgets/src/widgets/Icon
// args: e
// closure: p
function {
  if (!((undefined !== e))) goto L_f;
  return (true === p[e]);
}

// fn <atom:0>  args=3 vars=30 closure=0 cpool=12 bc=1063B file=dil_widgets/src/widgets/Icon
// args: require, module, exports
// locals: e, i, t, o, n, r, s, c, l, d, a, u, v, h, p, Icon, <class_fields_init>, Icon#1, I, g, A, b, f, m, S, w, x
function {
  I = function I;
  g = function g;
  A = function A;
  b = function b;
  f = function f;
  m = function m;
  S = function S;
  w = function w;
  let x;
  let Icon#1;
  let p;
  let h;
  let v;
  let u;
  let a;
  let d;
  let l;
  let c;
  let s;
  let r;
  let n;
  let o;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Icon = undefined;
  exports.resolveIconSize = undefined;
  exports.resolveIconAsset = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeNodePrototype("view", undefined, "migmbrYKODuOFXYt");
  t = e.makeNodePrototype("image", undefined, "wq9vS0wVKrnd8H91");
  o = require("dil_core/src/DILComponent");
  n = require("dil_icon_assets/src/IconAssets");
  r = require("dil_core/src/colors/DILColor");
  s = require("valdi_core/src/Style");
  c = require("./DILWidgetSizes");
  l = require("./LucideIconAliases");
  d = ["-xs", "-sm", "-md", "-lg", "-xl"];
  a = new RegExp("^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$");
  u = -2;
  v = ["bin", "note", "reminder", "shortcut", "task"];
  h = ["championship-cup", "christmas", "fire", "garden-expo", "jordy", "komi", "loud-speaker", "national-museum", "share-icon", "soccer-ball", "south-korea-flag"];
  p = {slack-logo: true, championship-cup: true, christmas: true, fire: true, garden-expo: true, jordy: true, komi: true, loud-speaker: true, national-museum: true, share-icon: true, soccer-ball: true, south-korea-flag: true};
  let Icon;
  let <class_fields_init>;
  class Icon extends o.DILComponent { ... }
  <proto:Icon>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Icon>;
  Icon = function <atom:0>;
  // close_loc <class_fields_init>
  Icon#1 = function <atom:0>;
  exports.Icon = Icon#1;
  Icon#1.dilV2Properties = ["color", "inline", "name", "size"];
  // append([], 0, o.DIL_COMPONENT_PROPERTIES)
  [][o.DIL_COMPONENT_PROPERTIES] = "color";
  [][("color" ++)] = "inline";
  [][("inline" ++)] = "name";
  [][("name" ++)] = "size";
  ("size" ++);
  Icon#1.properties = [];
  exports.resolveIconSize = I;
  exports.resolveIconAsset = g;
  x = {icon: new s.Style({flexShrink: 0, objectFit: "contain"}), inlineIcon: new s.Style({animationsEnabled: false, flexShrink: 0, objectFit: "contain"}), placeholder: new s.Style({flexShrink: 0}), inlinePlaceholder: new s.Style({animationsEnabled: false, flexShrink: 0, translationY: u})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Icon
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
