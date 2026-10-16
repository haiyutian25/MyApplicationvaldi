// fn <atom:0>  args=0 vars=5 closure=9 cpool=0 bc=1536B file=dil_widgets/src/widgets/Divider
// locals: r, n, v, p, this
// closure: o, d, a, e, i, c, l, t, s
function {
  this = this;
  let p;
  let v;
  let n;
  let r;
  if (!((this.viewModel.parentFlexDirection == null))) goto L_c5;
  this.viewModel.parentFlexDirection;
  if (!((this.viewModel.autoSpacing == null))) goto L_a4;
  this.viewModel.autoSpacing;
  goto L_c5;
  r = undefined.direction;
  n = ("row" === r);
  if (!((undefined === this.viewModel.spacing))) goto L_11b;
  goto L_184;
  // [栈深重同步 1 -> 0]
  v = o.resolveDILSpacing(this.viewModel.spacing);
  p = this.baseViewAttributes;
  d.DIL_THEME_ATTRIBUTES.apply(this.viewModel, p);
  a(p, v, r);
  e.beginRender(i, undefined);
  if (!(n)) goto L_2a4;
  goto L_2c8;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", c.horizontalWrapper);
  e.setAttributes(p);
  if (!(n)) goto L_328;
  goto L_32b;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingTop", l);
  if (!(n)) goto L_360;
  goto L_363;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingBottom", l);
  e.beginRender(t, undefined);
  if (!(n)) goto L_3e7;
  goto L_40b;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", c.horizontalLine);
  if (!(n)) goto L_444;
  goto L_48e;
  // [栈深重同步 4 -> 3]
  if (!((this.viewModel.size == null))) goto L_48e;
  this.viewModel.size;
  e.setAttribute("height", 1);
  if (!(n)) goto L_50c;
  if (!((this.viewModel.size == null))) goto L_511;
  this.viewModel.size;
  goto L_511;
  // [栈深重同步 4 -> 3]
  e.setAttribute("width", "100%");
  e.setAttributeString("backgroundColor", s.resolveDILBorderColor(this.viewModel.color, "default"));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Divider
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

// fn a  args=3 vars=3 closure=0 cpool=0 bc=60B file=dil_widgets/src/widgets/Divider
// args: e, i, t
function {
  if (!((undefined !== i))) goto L_3b;
  if (!(("row" === t))) goto L_25;
  e.marginLeft = i;
  e.marginRight = i;
  return;
  e.marginTop = i;
  e.marginBottom = i;
  return;
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=3 bc=748B file=dil_widgets/src/widgets/Divider
// args: require, module, exports
// locals: e, i, t, r, o, s, n, d, Divider, <class_fields_init>, Divider#1, l, a, c
function {
  a = function a;
  let c;
  let l;
  let Divider#1;
  let d;
  let n;
  let s;
  let o;
  let r;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Divider = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeNodePrototype("layout", undefined, "1XQ8KBuYZui9mQMs");
  t = e.makeNodePrototype("view", undefined, "ccb-KFvpn3UBXCLm");
  r = require("dil_core/src/DILComponent");
  o = require("dil_core/src/layout/DILSpacing");
  s = require("dil_core/src/colors/DILColor");
  n = require("valdi_core/src/Style");
  d = require("./attributes/DILThemeAttributes");
  let Divider;
  let <class_fields_init>;
  class Divider extends r.DILComponent { ... }
  <proto:Divider>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Divider>;
  Divider = function <atom:0>;
  // close_loc <class_fields_init>
  Divider#1 = function <atom:0>;
  exports.Divider = Divider#1;
  Divider#1.usesDILParentFlexDirection = true;
  Divider#1.dilV2Properties = ["color", "flush", "size", "spacing"];
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  [][r.DIL_COMPONENT_PROPERTIES] = "color";
  [][("color" ++)] = "flush";
  [][("flush" ++)] = "size";
  [][("size" ++)] = "spacing";
  ("spacing" ++);
  Divider#1.properties = [];
  l = 8;
  c = {horizontalWrapper: new n.Style({width: "100%"}), horizontalLine: new n.Style({width: "100%", flexShrink: 0}), verticalWrapper: new n.Style({alignSelf: "stretch"}), verticalLine: new n.Style({height: "100%", flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Divider
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
