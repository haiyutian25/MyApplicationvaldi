// fn n  args=1 vars=1 closure=0 cpool=0 bc=2B file=dil_widgets/src/animation/DILSlidingSelectionIndicator
// args: t
function {
  return t;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=101B file=dil_widgets/src/animation/DILSlidingSelectionIndicator
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, o
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
  this.indicatorRef = new o.ElementRef();
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_widgets/src/animation/DILSlidingSelectionIndicator
// closure: this, e
function {
  this.applyIndicatorFrame(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=291B file=dil_widgets/src/animation/DILSlidingSelectionIndicator
// args: t
// locals: e, this
// closure: d
function {
  this = this;
  let e;
  e = this.viewModel.frame;
  if (!((t == null))) goto L_53;
  t;
  goto L_74;
  if ((d(undefined.frame, e))) goto L_122;
  if (!((t == null))) goto L_89;
  t;
  goto L_aa;
  if (!((undefined !== undefined.frame))) goto L_122;
  if (!((undefined !== e))) goto L_122;
  this.animate(this.viewModel.animation, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=1035B file=dil_widgets/src/animation/DILSlidingSelectionIndicator
// locals: i, this
// closure: t, e, s
function {
  this = this;
  let i;
  i = this.viewModel.frame;
  if (!((undefined !== i))) goto L_40a;
  t.beginRender(e, "selection-indicator");
  t.setAttributeRef(this.indicatorRef);
  t.setAttributeStyle("style", s.indicator);
  t.setAttributeString("backgroundColor", this.viewModel.backgroundColor);
  t.setAttribute("borderRadius", this.viewModel.borderRadius);
  t.setAttributeString("boxShadow", this.viewModel.boxShadow);
  t.setAttributeNumber("height", i.height);
  t.setAttributeNumber("left", i.x);
  t.setAttributeNumber("top", i.y);
  t.setAttribute("touchEnabled", false);
  t.setAttributeNumber("width", i.width);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=404B file=dil_widgets/src/animation/DILSlidingSelectionIndicator
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.indicatorRef.single();
  if (!((undefined !== e))) goto L_193;
  e.setAttribute("height", t.height);
  e.setAttribute("left", t.x);
  e.setAttribute("top", t.y);
  e.setAttribute("width", t.width);
  return;
}

// fn d  args=2 vars=2 closure=0 cpool=0 bc=311B file=dil_widgets/src/animation/DILSlidingSelectionIndicator
// args: t, e
function {
  if (((undefined === t))) goto L_a;
  if (!((undefined === e))) goto L_10;
  return (t === e);
  if (!((t.x === e.x))) goto L_136;
  if (!((t.y === e.y))) goto L_136;
  if (!((t.width === e.width))) goto L_136;
  return (t.height === e.height);
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=6 bc=400B file=dil_widgets/src/animation/DILSlidingSelectionIndicator
// args: require, module, exports
// locals: t, e, i, o, r, n, DILSlidingSelectionIndicator, <class_fields_init>, DILSlidingSelectionIndicator#1, d, s
function {
  n = function n;
  d = function d;
  let s;
  let DILSlidingSelectionIndicator#1;
  let r;
  let o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createDILSlidingSelectionIndicatorAnimation = undefined;
  exports.DILSlidingSelectionIndicator = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", undefined, "4dEDJmS0O2Is6fr3");
  i = require("valdi_core/src/Component");
  o = require("valdi_core/src/ElementRef");
  r = require("valdi_core/src/Style");
  exports.createDILSlidingSelectionIndicatorAnimation = n;
  let DILSlidingSelectionIndicator;
  let <class_fields_init>;
  class DILSlidingSelectionIndicator extends i.Component { ... }
  <proto:DILSlidingSelectionIndicator>.onViewModelUpdate = function <atom:0>;
  <proto:DILSlidingSelectionIndicator>.onRender = function <atom:0>;
  <proto:DILSlidingSelectionIndicator>.applyIndicatorFrame = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSlidingSelectionIndicator>;
  DILSlidingSelectionIndicator = function <atom:0>;
  // close_loc <class_fields_init>
  DILSlidingSelectionIndicator#1 = function <atom:0>;
  exports.DILSlidingSelectionIndicator = DILSlidingSelectionIndicator#1;
  s = {indicator: new r.Style({position: "absolute", zIndex: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/animation/DILSlidingSelectionIndicator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
