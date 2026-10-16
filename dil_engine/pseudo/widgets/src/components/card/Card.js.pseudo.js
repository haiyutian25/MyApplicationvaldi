// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=widgets/src/components/card/Card
// args: t
function {
  t.DEFAULT = 0;
  t[0] = "DEFAULT";
  t.NONE = 1;
  t[1] = "NONE";
  return;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=0 bc=1564B file=widgets/src/components/card/Card
// locals: r, d, this
// closure: o, i, t, e, exports
function {
  this = this;
  let d;
  let r;
  if (!((this.viewModel == null))) goto L_30;
  this.viewModel;
  r = {};
  d = "0 1 10 ".concat(o.SemanticColor.Elevation.CELL_SHADOW);
  if (!((r.shadow === i.NONE))) goto L_111;
  d = undefined;
  undefined;
  t.beginRender(e, undefined);
  if (!((r.cardRadius == null))) goto L_1b4;
  r.cardRadius;
  t.setAttribute("borderRadius", exports.CARD_RADIUS);
  t.setAttribute("height", r.height);
  t.setAttribute("width", r.width);
  if (!((this.viewModel.backgroundColor == null))) goto L_331;
  this.viewModel.backgroundColor;
  t.setAttributeString("backgroundColor", o.SemanticColor.Background.SURFACE);
  t.setAttributeString("boxShadow", d);
  t.setAttributeString("accessibilityId", r.accessibilityId);
  t.setAttributeFunction("onTap", r.onTap);
  t.setAttributeFunction("onTouch", r.onTouch);
  t.setAttribute("margin", r.margin);
  t.setAttribute("padding", r.padding);
  if (!((r.borderWidth == null))) goto L_576;
  r.borderWidth;
  if (!(r.borderColor)) goto L_575;
  goto L_576;
  // [栈深重同步 4 -> 3]
  t.setAttribute("borderWidth", undefined);
  t.setAttributeString("borderColor", r.borderColor);
  t.renderUnnamedSlot(this);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/card/Card
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

// fn <atom:0>  args=3 vars=11 closure=0 cpool=3 bc=331B file=widgets/src/components/card/Card
// args: require, module, exports
// locals: t, e, r, o, i, Card, <class_fields_init>, Card#1
function {
  let Card#1;
  let o;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CARD_RADIUS = undefined;
  exports.CardShadow = undefined;
  exports.Card = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", undefined, "bkJaAvEqA4OJ2RHZ");
  r = require("valdi_core/src/Component");
  o = require("widgets/src/styles/semanticColors");
  exports.CARD_RADIUS = 10;
  if ((i)) goto L_f6;
  i = {};
  exports.CardShadow = {};
  function <atom:0>({});
  let Card;
  let <class_fields_init>;
  class Card extends r.Component { ... }
  <proto:Card>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Card>;
  Card = function <atom:0>;
  // close_loc <class_fields_init>
  Card#1 = function <atom:0>;
  exports.Card = Card#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/card/Card
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
