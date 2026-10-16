// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=445B file=oai_ui/src/components/SwipeNavigationSurface
// args: e
// locals: t, i
// closure: this, s
function {
  let i;
  let t;
  if (!((true === this.viewModel.disabled))) goto L_53;
  return false;
  t = Math.abs(e.deltaX);
  i = Math.abs(e.deltaY);
  if (((0 === t))) goto L_ff;
  if (!(!(t <= (i * s)))) goto L_1bc;
  if (!((e.deltaX < 0))) goto L_175;
  return (undefined !== this.viewModel.onNext);
  return (undefined !== this.viewModel.onPrevious);
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=591B file=oai_ui/src/components/SwipeNavigationSurface
// args: e
// locals: t, i
// closure: this, a, d, r
function {
  let i;
  let t;
  if (((2 !== e.state))) goto L_76;
  if (!((true === this.viewModel.disabled))) goto L_79;
  return;
  t = Math.abs(e.deltaX);
  if (!((t >= a))) goto L_16d;
  if (!((Math.abs(e.velocityX) >= d))) goto L_16d;
  i = ((e.deltaX * e.velocityX) > 0);
  if (!((t < r))) goto L_17d;
  if ((!i)) goto L_24e;
  if (!((e.deltaX < 0))) goto L_1fd;
  if (!((this.viewModel.onNext == null))) goto L_1f8;
  this.viewModel.onNext;
  this.viewModel;
  goto L_24e;
  // [栈深重同步 1 -> 2]
  goto L_24e;
  // [栈深重同步 1 -> 0]
  if (!((this.viewModel.onPrevious == null))) goto L_24b;
  this.viewModel.onPrevious;
  this.viewModel;
  goto L_24e;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=2 bc=77B file=oai_ui/src/components/SwipeNavigationSurface
// locals: this, this.active_func, new.target, arguments
// closure: s, a, d, r, <class_fields_init>
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
  this.shouldRecognizeHorizontalDrag = function <atom:0>;
  this.handleDrag = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=891B file=oai_ui/src/components/SwipeNavigationSurface
// locals: i, this
// closure: e, t, n
function {
  this = this;
  let i;
  if (((true === this.viewModel.disabled))) goto L_e0;
  if (!((undefined === this.viewModel.onNext))) goto L_e0;
  i = (undefined === this.viewModel.onPrevious);
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  if ((!i)) goto L_1af;
  e.setAttribute("canAlwaysScrollHorizontal", undefined);
  if (!(i)) goto L_1e4;
  goto L_206;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onDrag", this.handleDrag);
  e.setAttribute("onDragDisabled", i);
  if (!(i)) goto L_26b;
  goto L_28d;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onDragPredicate", this.shouldRecognizeHorizontalDrag);
  if (!((this.viewModel.style == null))) goto L_326;
  this.viewModel.style;
  e.setAttributeStyle("style", n.surface);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=3 bc=382B file=oai_ui/src/components/SwipeNavigationSurface
// args: require, module, exports
// locals: e, t, i, o, s, r, a, d, SwipeNavigationSurface, <class_fields_init>, SwipeNavigationSurface#1, n
function {
  let n;
  let SwipeNavigationSurface#1;
  let d;
  let a;
  let r;
  let s;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SwipeNavigationSurface = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "Z7hn85CMOk7ZFg3F");
  i = require("valdi_core/src/Component");
  o = require("valdi_core/src/Style");
  s = 1.35;
  r = 80;
  a = 24;
  d = 720;
  let SwipeNavigationSurface;
  let <class_fields_init>;
  class SwipeNavigationSurface extends i.Component { ... }
  <proto:SwipeNavigationSurface>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SwipeNavigationSurface>;
  SwipeNavigationSurface = function <atom:0>;
  // close_loc <class_fields_init>
  SwipeNavigationSurface#1 = function <atom:0>;
  exports.SwipeNavigationSurface = SwipeNavigationSurface#1;
  n = {surface: new o.Style({flexGrow: 1, flexShrink: 1, minHeight: 0, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/SwipeNavigationSurface
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
