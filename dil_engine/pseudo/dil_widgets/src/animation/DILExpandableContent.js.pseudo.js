// fn h  args=1 vars=1 closure=0 cpool=0 bc=2B file=dil_widgets/src/animation/DILExpandableContent
// args: t
function {
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=dil_widgets/src/animation/DILExpandableContent
// args: t
function {
  t.Idle = 0;
  t[0] = "Idle";
  t.MeasuringExpansion = 1;
  t[1] = "MeasuringExpansion";
  t.Expanding = 2;
  t[2] = "Expanding";
  t.Collapsing = 3;
  t[3] = "Collapsing";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=350B file=dil_widgets/src/animation/DILExpandableContent
// args: t
// closure: this, d
function {
  if (!(this.state.renderExpandedContent)) goto L_12f;
  this.expandedContentHeight = t.height;
  if (!((this.state.animationPhase === d.MeasuringExpansion))) goto L_12d;
  this.startExpandAnimation(t.height);
  return;
  this.collapsedContentHeight = t.height;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=321B file=dil_widgets/src/animation/DILExpandableContent
// locals: this, this.active_func, new.target, arguments
// closure: d, <class_fields_init>, o
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
  this.state = {animationPhase: d.Idle, renderExpandedContent: this.viewModel.expanded};
  this.animationSequence = 0;
  this.animationTimers = [];
  this.contentViewportRef = new o.ElementRef();
  this.expandedContentRef = new o.ElementRef();
  this.handleContentLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=dil_widgets/src/animation/DILExpandableContent
// locals: this
function {
  this = this;
  this.cancelPendingAnimations();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=267B file=dil_widgets/src/animation/DILExpandableContent
// args: t
// locals: this
function {
  this = this;
  if (!((undefined !== t))) goto L_10a;
  if (!((t.expanded !== this.viewModel.expanded))) goto L_10a;
  if (!(this.viewModel.expanded)) goto L_e5;
  goto L_10a;
  // [栈深重同步 1 -> 0]
  this.collapseContent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=897B file=dil_widgets/src/animation/DILExpandableContent
// locals: this
// closure: t, e, r, n
function {
  this = this;
  t.beginRender(e, undefined);
  t.setAttributeRef(this.contentViewportRef);
  t.setAttributeStyle("style", r.contentViewport);
  t.setAttributeNumber("height", this.state.contentHeight);
  t.setAttribute("slowClipping", this.isAnimatingContent);
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", r.content);
  t.setAttribute("gap", this.viewModel.gap);
  t.setAttributeFunction("onLayout", this.handleContentLayout);
  this.viewModel.renderCollapsedContent();
  this.renderExpandedContent();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=577B file=dil_widgets/src/animation/DILExpandableContent
// locals: this
// closure: t, i, r
function {
  this = this;
  if (!(this.state.renderExpandedContent)) goto L_240;
  t.beginRender(i, undefined);
  t.setAttributeRef(this.expandedContentRef);
  t.setAttributeStyle("style", r.expandedContent);
  t.setAttribute("gap", this.viewModel.gap);
  t.setAttributeNumber("opacity", this.expandedContentOpacity);
  this.viewModel.renderExpandedContent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=208B file=dil_widgets/src/animation/DILExpandableContent
// locals: this
// closure: d
function {
  this = this;
  this.cancelPendingAnimations();
  this.animationSequence = (this.animationSequence ++);
  this.setState({animationPhase: d.MeasuringExpansion, contentHeight: this.collapsedContentHeight, renderExpandedContent: true});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=91B file=dil_widgets/src/animation/DILExpandableContent
// closure: this, d
function {
  this.setState({animationPhase: d.Idle, contentHeight: undefined, renderExpandedContent: false});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=599B file=dil_widgets/src/animation/DILExpandableContent
// locals: t, e, n, this
// closure: d
function {
  this = this;
  let n;
  let e;
  let t;
  this.cancelPendingAnimations();
  this.animationSequence = (this.animationSequence ++);
  t = (this.animationSequence ++);
  if (!((this.state.contentHeight == null))) goto L_c9;
  this.state.contentHeight;
  e = this.expandedContentHeight;
  n = this.collapsedContentHeight;
  if (((undefined === e))) goto L_106;
  if (((undefined === n))) goto L_106;
  if (!((e <= n))) goto L_165;
  goto L_256;
  // [栈深重同步 1 -> 0]
  this.setState({animationPhase: d.Collapsing, contentHeight: e, renderExpandedContent: true});
  this.startContentAnimation(t, e, n, this.viewModel.animation.collapse, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=84B file=dil_widgets/src/animation/DILExpandableContent
// closure: this, d
function {
  this.setState({animationPhase: d.Idle, contentHeight: undefined});
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=498B file=dil_widgets/src/animation/DILExpandableContent
// args: t
// locals: e, n, this
// closure: d
function {
  this = this;
  let n;
  let e;
  if (!((this.collapsedContentHeight == null))) goto L_72;
  this.collapsedContentHeight;
  e = this.state.contentHeight;
  if (((undefined === e))) goto L_81;
  if (!((t <= e))) goto L_df;
  this.setState({animationPhase: d.Idle, contentHeight: undefined, renderExpandedContent: true});
  return;
  n = this.animationSequence;
  this.setState({animationPhase: d.Expanding, contentHeight: e, renderExpandedContent: true});
  this.startContentAnimation(n, e, t, this.viewModel.animation.expand, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=77B file=dil_widgets/src/animation/DILExpandableContent
// closure: this, n
function {
  this.contentViewportRef.setAttribute("height", n);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=140B file=dil_widgets/src/animation/DILExpandableContent
// closure: this, n
function {
  this.animate(this.viewModel.animation.layoutOptions, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=110B file=dil_widgets/src/animation/DILExpandableContent
// closure: this, i
function {
  this.expandedContentRef.setAttribute("opacity", i.toExpandedContentOpacity);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=74B file=dil_widgets/src/animation/DILExpandableContent
// closure: this, i
function {
  this.animate(i.opacityOptions, function <atom:0>);
  return;
}

// fn <atom:0>  args=5 vars=6 closure=0 cpool=2 bc=343B file=dil_widgets/src/animation/DILExpandableContent
// args: t, e, n, i, a
// locals: this
function {
  this = this;
  this.cancelPendingAnimations();
  this.contentViewportRef.setAttribute("height", e);
  this.scheduleAnimationTimer(t, i.heightDelayMs, function <atom:0>);
  this.scheduleAnimationTimer(t, i.opacityDelayMs, function <atom:0>);
  this.scheduleAnimationTimer(t, i.completionDelayMs, a);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=245B file=dil_widgets/src/animation/DILExpandableContent
// locals: e
// closure: this, i, t, n
function {
  let e;
  e = this.animationTimers.indexOf(i);
  if (!((e >= 0))) goto L_a0;
  this.animationTimers.splice(e, 1);
  if ((this.isDestroyed())) goto L_f4;
  if (((this.animationSequence !== t))) goto L_f4;
  n();
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=89B file=dil_widgets/src/animation/DILExpandableContent
// args: t, e, n
// locals: i, this
function {
  this = this;
  let i;
  i = setTimeout(function <atom:0>, e);
  this.animationTimers.push(i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=dil_widgets/src/animation/DILExpandableContent
// args: t
function {
  return clearTimeout(t);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=120B file=dil_widgets/src/animation/DILExpandableContent
// locals: this
function {
  this = this;
  this.animationTimers.forEach(function <atom:0>);
  this.animationTimers.length = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=105B file=dil_widgets/src/animation/DILExpandableContent
// locals: this
// closure: d
function {
  this = this;
  return (this.state.animationPhase !== d.Idle);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=224B file=dil_widgets/src/animation/DILExpandableContent
// locals: this
// closure: d
function {
  this = this;
  if (((this.state.animationPhase === d.MeasuringExpansion))) goto L_91;
  if (!((this.state.animationPhase === d.Expanding))) goto L_93;
  return 0;
  if (((this.state.animationPhase === d.Idle))) goto L_de;
  (this.state.animationPhase === d.Collapsing);
  return 1;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=15 bc=756B file=dil_widgets/src/animation/DILExpandableContent
// args: require, module, exports
// locals: t, e, n, i, a, o, s, d, h, DILExpandableContent, <class_fields_init>, DILExpandableContent#1, r
function {
  h = function h;
  let r;
  let DILExpandableContent#1;
  let s;
  let o;
  let a;
  let i;
  let n;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createDILExpandableContentAnimation = undefined;
  exports.DILExpandableContent = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", undefined, "MCQL7y8dJdsizK11");
  n = t.makeNodePrototype("view", undefined, "hgi3hHTSqcA9jukW");
  i = t.makeNodePrototype("view", undefined, "X4oR3Wi1g-wGdzom");
  a = require("valdi_core/src/Component");
  o = require("valdi_core/src/ElementRef");
  s = require("valdi_core/src/Style");
  if ((d)) goto L_155;
  d = {};
  !function <atom:0>({});
  exports.createDILExpandableContentAnimation = h;
  let DILExpandableContent;
  let <class_fields_init>;
  class DILExpandableContent extends a.StatefulComponent { ... }
  <proto:DILExpandableContent>.onDestroy = function <atom:0>;
  <proto:DILExpandableContent>.onViewModelUpdate = function <atom:0>;
  <proto:DILExpandableContent>.onRender = function <atom:0>;
  <proto:DILExpandableContent>.renderExpandedContent = function <atom:0>;
  <proto:DILExpandableContent>.expandContent = function <atom:0>;
  <proto:DILExpandableContent>.collapseContent = function <atom:0>;
  <proto:DILExpandableContent>.startExpandAnimation = function <atom:0>;
  <proto:DILExpandableContent>.startContentAnimation = function <atom:0>;
  <proto:DILExpandableContent>.scheduleAnimationTimer = function <atom:0>;
  <proto:DILExpandableContent>.cancelPendingAnimations = function <atom:0>;
  <proto:DILExpandableContent>.isAnimatingContent = function <atom:0>;
  <proto:DILExpandableContent>.expandedContentOpacity = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILExpandableContent>;
  DILExpandableContent = function <atom:0>;
  // close_loc <class_fields_init>
  DILExpandableContent#1 = function <atom:0>;
  exports.DILExpandableContent = DILExpandableContent#1;
  r = {contentViewport: new s.Style({minHeight: 0, width: "100%"}), content: new s.Style({flexDirection: "column", alignItems: "stretch", minHeight: 0, width: "100%"}), expandedContent: new s.Style({flexDirection: "column", alignItems: "stretch", minHeight: 0, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/animation/DILExpandableContent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
