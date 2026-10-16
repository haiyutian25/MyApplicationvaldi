// fn <atom:0>  args=0 vars=7 closure=7 cpool=0 bc=1261B file=dil_widgets/src/widgets/ChoiceControlSlot
// locals: r, l, u, a, c, b, this
// closure: n, e, t, d, i, o, s
function {
  this = this;
  let b;
  let c;
  let a;
  let u;
  let l;
  let r;
  if (((undefined === undefined))) goto L_d1;
  r = <to_object>(undefined).font;
  l = <to_object>(undefined).fontSize;
  u = <to_object>(undefined).hasLabel;
  a = <to_object>(undefined).lineHeight;
  c = <to_object>(undefined).size;
  <to_object>(undefined);
  goto L_f8;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  if (!(u)) goto L_148;
  b = !n.Device.isWeb();
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", d.slot);
  e.setAttributeNumber("width", c);
  e.setAttributeNumber("minHeight", a);
  if (!(b)) goto L_258;
  goto L_25b;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("height", a);
  if (!(b)) goto L_3a1;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", d.firstLine);
  e.setAttributeString("font", r);
  e.setAttributeNumber("lineHeightMultiple", (a / l));
  e.setAttributeNumber("minHeight", a);
  e.endRender();
  e.beginRender(o, undefined);
  if (!(u)) goto L_46c;
  if (!(n.Device.isAndroid())) goto L_46c;
  goto L_46f;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", s);
  e.renderUnnamedSlot(this);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/ChoiceControlSlot
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

// fn <atom:0>  args=3 vars=15 closure=0 cpool=2 bc=708B file=dil_widgets/src/widgets/ChoiceControlSlot
// args: require, module, exports
// locals: e, t, i, o, r, n, l, ChoiceControlSlot, <class_fields_init>, ChoiceControlSlot#1, s, d
function {
  let d;
  let s;
  let ChoiceControlSlot#1;
  let l;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChoiceControlSlot = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "SfPrx-iywm_0M-IF");
  i = e.makeNodePrototype("label", undefined, "5Wxs85RJX0PNPDUf");
  o = e.makeNodePrototype("layout", undefined, "1cy5vLwA46J6_oI0");
  r = require("valdi_core/src/Component");
  n = require("valdi_core/src/Device");
  l = require("valdi_core/src/Style");
  let ChoiceControlSlot;
  let <class_fields_init>;
  class ChoiceControlSlot extends r.Component { ... }
  <proto:ChoiceControlSlot>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ChoiceControlSlot>;
  ChoiceControlSlot = function <atom:0>;
  // close_loc <class_fields_init>
  ChoiceControlSlot#1 = function <atom:0>;
  exports.ChoiceControlSlot = ChoiceControlSlot#1;
  s = new l.Style({position: "absolute", top: 0, bottom: 0, left: 0, right: 0, alignItems: "center", justifyContent: "center"});
  d = {slot: new l.Style({position: "relative", flexShrink: 0, alignSelf: "flex-start"}), firstLine: new l.Style({value: "M", numberOfLines: 1, opacity: 0, accessibilityNavigation: "ignored"}), androidControl: s.extend({top: 1, bottom: -1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/ChoiceControlSlot
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
