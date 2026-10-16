// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=86B file=widgets/src/components/subscreen/SubscreenHeaderBlueprint
// args: t
// closure: this
function {
  this.widthContainer = t.width;
  this.onLayoutDynamic();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=86B file=widgets/src/components/subscreen/SubscreenHeaderBlueprint
// args: t
// closure: this
function {
  this.widthMiddle = t.width;
  this.onLayoutDynamic();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=86B file=widgets/src/components/subscreen/SubscreenHeaderBlueprint
// args: t
// closure: this
function {
  this.widthLeft = t.width;
  this.onLayoutDynamic();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=86B file=widgets/src/components/subscreen/SubscreenHeaderBlueprint
// args: t
// closure: this
function {
  this.widthRight = t.width;
  this.onLayoutDynamic();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=4 bc=118B file=widgets/src/components/subscreen/SubscreenHeaderBlueprint
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
  this.state = {};
  this.onLayoutContainer = function <atom:0>;
  this.onLayoutMiddle = function <atom:0>;
  this.onLayoutLeft = function <atom:0>;
  this.onLayoutRight = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=1601B file=widgets/src/components/subscreen/SubscreenHeaderBlueprint
// locals: this
// closure: t, e, a, i, n, d
function {
  this = this;
  t.beginRender(e, undefined);
  t.setAttributeString("justifyContent", this.state.containerJustifyContent);
  t.setAttributeStyle("style", a.container);
  t.setAttributeFunction("onLayout", this.onLayoutContainer);
  t.beginRender(i, undefined);
  if (!(this.state.readyToRender)) goto L_1db;
  goto L_1dc;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("opacity", 0);
  t.setAttributeNumber("paddingLeft", this.state.middleLeftPadding);
  t.setAttributeNumber("paddingRight", this.state.middleRightPadding);
  t.setAttributeString("alignItems", this.state.middleAlignItems);
  t.setAttributeFunction("onLayout", this.onLayoutMiddle);
  t.renderNamedSlot("middle", this);
  t.endRender();
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", a.left);
  t.setAttributeFunction("onLayout", this.onLayoutLeft);
  t.renderNamedSlot("left", this);
  t.endRender();
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", a.right);
  t.setAttributeFunction("onLayout", this.onLayoutRight);
  t.renderNamedSlot("right", this);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=11 closure=0 cpool=0 bc=785B file=widgets/src/components/subscreen/SubscreenHeaderBlueprint
// locals: t, e, i, n, d, r, o, s, a, l, this
function {
  this = this;
  let l;
  let a;
  let s;
  let o;
  let r;
  let d;
  let n;
  let i;
  let e;
  let t;
  t = this.widthContainer;
  e = this.widthMiddle;
  i = this.widthLeft;
  n = this.widthRight;
  if (((undefined === t))) goto L_bf;
  if (!((undefined === e))) goto L_c2;
  return;
  if (((undefined === i))) goto L_d0;
  if (!((undefined === n))) goto L_d3;
  return;
  d = (i + 10);
  r = (n + 10);
  if (!((this.state.middleLeftPadding == null))) goto L_130;
  this.state.middleLeftPadding;
  if (!((this.state.middleRightPadding == null))) goto L_17b;
  this.state.middleRightPadding;
  o = (((e - 0) - 0) / 2);
  s = (t / 2);
  if (!(i)) goto L_19c;
  a = (d > ((s - o) - 10));
  if (!(n)) goto L_1b3;
  l = (r > ((s - o) - 10));
  if (!(a)) goto L_212;
  if (!(l)) goto L_212;
  return this.setState({readyToRender: true, containerJustifyContent: "center", middleAlignItems: "center", middleLeftPadding: d, middleRightPadding: r});
  if (!(a)) goto L_26a;
  return this.setState({readyToRender: true, containerJustifyContent: "flex-start", middleAlignItems: "flex-start", middleLeftPadding: d, middleRightPadding: r});
  if (!(l)) goto L_2c2;
  return this.setState({readyToRender: true, containerJustifyContent: "flex-end", middleAlignItems: "flex-end", middleLeftPadding: d, middleRightPadding: r});
  return this.setState({readyToRender: true, containerJustifyContent: "center", middleAlignItems: "center", middleLeftPadding: 0, middleRightPadding: 0});
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=3 bc=805B file=widgets/src/components/subscreen/SubscreenHeaderBlueprint
// args: require, module, exports
// locals: t, e, i, n, d, r, o, SubscreenHeaderBlueprint, <class_fields_init>, SubscreenHeaderBlueprint#1, s, a
function {
  let a;
  let s;
  let SubscreenHeaderBlueprint#1;
  let o;
  let r;
  let d;
  let n;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscreenHeaderBlueprint = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("layout", undefined, "juLZb5bd1Y3F0xk5");
  i = t.makeNodePrototype("view", ["flexShrink", 1], "tV617bEg13nJ3qOd");
  n = t.makeNodePrototype("layout", undefined, "aCWslfPIbFMBmzkT");
  d = t.makeNodePrototype("layout", undefined, "deD2Bpw5ghiQfh5F");
  r = require("valdi_core/src/Component");
  o = require("valdi_core/src/Style");
  let SubscreenHeaderBlueprint;
  let <class_fields_init>;
  class SubscreenHeaderBlueprint extends r.StatefulComponent { ... }
  <proto:SubscreenHeaderBlueprint>.onRender = function <atom:0>;
  <proto:SubscreenHeaderBlueprint>.onLayoutDynamic = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscreenHeaderBlueprint>;
  SubscreenHeaderBlueprint = function <atom:0>;
  // close_loc <class_fields_init>
  SubscreenHeaderBlueprint#1 = function <atom:0>;
  exports.SubscreenHeaderBlueprint = SubscreenHeaderBlueprint#1;
  SubscreenHeaderBlueprint#1.minHeight = 42;
  s = new o.Style({position: "absolute", top: 0, bottom: 0, justifyContent: "center"});
  a = {container: new o.Style({flexDirection: "row", alignItems: "center", justifyContent: "center", minHeight: SubscreenHeaderBlueprint#1.minHeight}), left: s.extend({left: 0, alignItems: "flex-start", accessibilityPriority: 10}), right: s.extend({right: 0, alignItems: "flex-end", accessibilityPriority: -10})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/subscreen/SubscreenHeaderBlueprint
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
