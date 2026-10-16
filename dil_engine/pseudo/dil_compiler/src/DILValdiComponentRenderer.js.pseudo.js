// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=61B file=dil_compiler/src/DILValdiComponentRenderer
// args: e, t, o
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.componentClass = e;
  this.props = t;
  this.forwardViewModelProperties = o;
  this.shouldUpdateForwardedStaticProperties = false;
  return;
}

// fn <atom:0>  args=4 vars=8 closure=3 cpool=0 bc=587B file=dil_compiler/src/DILValdiComponentRenderer
// args: t, i, s, a
// locals: n, p, d, this
// closure: r, e, o
function {
  this = this;
  let d;
  let p;
  let n;
  if (!((r.DILRenderChildCounter.fromRenderState(i) == null))) goto L_5c;
  r.DILRenderChildCounter.fromRenderState(i);
  goto L_a7;
  n = undefined.beginComponent(this.createAutoSpacingChild(t, a));
  p = this.getComponentPrototype();
  e.jsx.beginComponent(this.componentClass, p, s);
  if (!(this.forwardViewModelProperties)) goto L_1b2;
  this.forwardStaticProperties(p);
  this.forwardDynamicProperties(t);
  d = o.getDILAutoSpacingContext(i);
  if (!((undefined !== d))) goto L_24a;
  if (!((undefined !== n))) goto L_24a;
  null;
  d;
  null;
  n;
  e.jsx.setViewModelProperty("autoSpacing", {});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=191B file=dil_compiler/src/DILValdiComponentRenderer
// args: t
// closure: e, r
function {
  e.jsx.endComponent();
  if (!((r.DILRenderChildCounter.fromRenderState(t) == null))) goto L_9a;
  r.DILRenderChildCounter.fromRenderState(t);
  goto L_be;
  undefined.popFrame();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=94B file=dil_compiler/src/DILValdiComponentRenderer
// locals: this
function {
  this = this;
  if (!((undefined !== this.componentPrototypeValue))) goto L_5d;
  if (!(this.forwardViewModelProperties)) goto L_5d;
  this.shouldUpdateForwardedStaticProperties = true;
  true;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=164B file=dil_compiler/src/DILValdiComponentRenderer
// args: t, o
// locals: r, this
// closure: e
function {
  this = this;
  let r;
  r = this.props.getPropertyValue(o, t);
  if (!((undefined !== r))) goto L_a3;
  e.jsx.setViewModelProperty(o, r);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=75B file=dil_compiler/src/DILValdiComponentRenderer
// args: t, o
// closure: e
function {
  e.jsx.setViewModelProperty(t, o);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=74B file=dil_compiler/src/DILValdiComponentRenderer
// args: t
// closure: e
function {
  e.jsx.setUnnamedSlot(t);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=75B file=dil_compiler/src/DILValdiComponentRenderer
// args: t, o
// closure: e
function {
  e.jsx.setNamedSlot(t, o);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=191B file=dil_compiler/src/DILValdiComponentRenderer
// args: e, t
// locals: this
// closure: a, s
function {
  this = this;
  if (!(a(t))) goto L_5f;
  goto L_60;
  // [栈深重同步 2 -> 1]
  if (!(s(t))) goto L_b8;
  goto L_b9;
  // [栈深重同步 2 -> 1]
  return {name: t, pill: undefined, variant: undefined};
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=308B file=dil_compiler/src/DILValdiComponentRenderer
// locals: this
// closure: e
function {
  this = this;
  if (!((undefined === this.componentPrototypeValue))) goto L_110;
  if (!(this.forwardViewModelProperties)) goto L_fe;
  goto L_ff;
  // [栈深重同步 6 -> 5]
  this.componentPrototypeValue = e.jsx.makeComponentPrototype(this.createStaticPropertyList(undefined), undefined);
  e.jsx.makeComponentPrototype(this.createStaticPropertyList(undefined), undefined);
  return this.componentPrototypeValue;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=151B file=dil_compiler/src/DILValdiComponentRenderer
// args: e
// locals: t, o
function {
  let t;
  if (((undefined === e))) goto L_e;
  if (!((0 === e.length))) goto L_11;
  return;
  t = [];
  let o;
  for (const o of e) {
    t.push(o.name, o.staticValue);
  }
  return t;
}

// fn <atom:0>  args=1 vars=7 closure=1 cpool=0 bc=580B file=dil_compiler/src/DILValdiComponentRenderer
// args: e
// locals: t, o, r, e#1, r#1, this
// closure: i
function {
  this = this;
  let o;
  let t;
  this.shouldUpdateForwardedStaticProperties = false;
  t = i(e.attributes);
  o = undefined;
  let r;
  for (const r of this.props.staticProperties) {
    let e#1;
    if (!((t == null))) goto L_97;
    t;
    goto L_bc;
    e#1 = undefined[r.name];
    if (!((e#1 !== r.staticValue))) goto L_176;
    if (!((o == null))) goto L_f7;
    o;
    o = [];
    [];
    o.push({name: r.name, value: r.staticValue});
  }
  if (!((undefined !== t))) goto L_235;
  let r#1;
  for (const r#1 of t) {
    if (!((undefined === this.props.getProperty(r#1)))) goto L_22c;
    if (!((o == null))) goto L_1f1;
    o;
    o = [];
    [];
    o.push({name: r#1, value: undefined});
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  this.forwardedStaticProperties = o;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=317B file=dil_compiler/src/DILValdiComponentRenderer
// args: t
// locals: o, this
// closure: e
function {
  this = this;
  if (!(this.shouldUpdateForwardedStaticProperties)) goto L_4e;
  this.updateForwardedStaticProperties(t);
  if (!((undefined !== this.forwardedStaticProperties))) goto L_13c;
  let o;
  for (const o of this.forwardedStaticProperties) {
    e.jsx.setViewModelProperty(o.name, o.value);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=236B file=dil_compiler/src/DILValdiComponentRenderer
// args: t
// locals: o, this
// closure: e
function {
  this = this;
  let o;
  for (const o of this.props.dynamicProperties) {
    e.jsx.setViewModelProperty(o.name, o.getValue(t));
  }
  return;
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=46B file=dil_compiler/src/DILValdiComponentRenderer
// args: e
// closure: t
function {
  if (!((undefined !== e))) goto L_2d;
  return t.propertyListToObject(e);   // tail call
  return;
}

// fn s  args=1 vars=1 closure=0 cpool=0 bc=19B file=dil_compiler/src/DILValdiComponentRenderer
// args: e
function {
  if ((("Button" === e))) goto L_12;
  return ("button" === e);
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=19B file=dil_compiler/src/DILValdiComponentRenderer
// args: e
function {
  if ((("Badge" === e))) goto L_12;
  return ("badge" === e);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=17 bc=270B file=dil_compiler/src/DILValdiComponentRenderer
// args: require, module, exports
// locals: e, t, o, r, DILValdiComponentRenderer, <class_fields_init>, DILValdiComponentRenderer#1, i, s, a
function {
  i = function i;
  s = function s;
  a = function a;
  let DILValdiComponentRenderer#1;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILValdiComponentRenderer = undefined;
  e = require("valdi_core/src/JSX");
  t = require("valdi_core/src/utils/PropertyList");
  o = require("./DILAutoSpacingRenderState");
  r = require("./DILRenderChildState");
  let DILValdiComponentRenderer;
  let <class_fields_init>;
  class DILValdiComponentRenderer extends undefined { ... }
  <proto:DILValdiComponentRenderer>.begin = function <atom:0>;
  <proto:DILValdiComponentRenderer>.end = function <atom:0>;
  <proto:DILValdiComponentRenderer>.onPropsUpdated = function <atom:0>;
  <proto:DILValdiComponentRenderer>.forwardViewModelProperty = function <atom:0>;
  <proto:DILValdiComponentRenderer>.setViewModelProperty = function <atom:0>;
  <proto:DILValdiComponentRenderer>.setUnnamedSlot = function <atom:0>;
  <proto:DILValdiComponentRenderer>.setNamedSlot = function <atom:0>;
  <proto:DILValdiComponentRenderer>.createAutoSpacingChild = function <atom:0>;
  <proto:DILValdiComponentRenderer>.getComponentPrototype = function <atom:0>;
  <proto:DILValdiComponentRenderer>.createStaticPropertyList = function <atom:0>;
  <proto:DILValdiComponentRenderer>.updateForwardedStaticProperties = function <atom:0>;
  <proto:DILValdiComponentRenderer>.forwardStaticProperties = function <atom:0>;
  <proto:DILValdiComponentRenderer>.forwardDynamicProperties = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILValdiComponentRenderer>;
  DILValdiComponentRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILValdiComponentRenderer#1 = function <atom:0>;
  exports.DILValdiComponentRenderer = DILValdiComponentRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILValdiComponentRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
