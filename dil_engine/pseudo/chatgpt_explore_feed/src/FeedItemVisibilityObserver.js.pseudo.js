// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=97B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// closure: this
function {
  this.pendingBinding = false;
  if ((this.isDestroyed())) goto L_60;
  this.bindRoot();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=109B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// args: e
// closure: this
function {
  null;
  e;
  this.frame = {};
  if (!((this.originalLayout == null))) goto L_40;
  this.originalLayout;
  this;
  goto L_44;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e);
  this.measureAfterDraw();
  return;
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=170B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// args: e, t, i
// closure: this
function {
  null;
  e;
  this.viewport = {};
  null;
  t;
  this.frame = {};
  if (!((this.originalViewport == null))) goto L_53;
  this.originalViewport;
  this;
  goto L_59;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e, t, i);
  if ((this.pendingMeasurement)) goto L_a9;
  this.observe();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=97B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// closure: this
function {
  this.pendingMeasurement = false;
  if ((this.isDestroyed())) goto L_60;
  this.observe();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=4 bc=133B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
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
  this.pendingBinding = false;
  this.pendingMeasurement = false;
  this.afterRender = function <atom:0>;
  this.onLayout = function <atom:0>;
  this.onViewportChanged = function <atom:0>;
  this.afterDraw = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=74B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// locals: this
function {
  this = this;
  this.renderer.addObserver(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=81B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// locals: this
// closure: e
function {
  this = this;
  e.renderUnnamedSlot(this);
  this.bindRoot();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=157B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// locals: this
function {
  this = this;
  if ((this.pendingBinding)) goto L_9c;
  this.pendingBinding = true;
  this.renderer.onRenderComplete(this.afterRender);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=1163B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// args: e
// locals: t, this
// closure: i
function {
  this = this;
  let t;
  t = this.viewModel;
  if (!((e == null))) goto L_31;
  e;
  goto L_52;
  if (!((undefined.tracker === t.tracker))) goto L_1c7;
  if (!((e == null))) goto L_87;
  e;
  goto L_d1;
  if (!((undefined.unit == null))) goto L_b0;
  undefined.unit;
  goto L_d1;
  if (!((t.unit == null))) goto L_fd;
  t.unit;
  goto L_11e;
  if (!((undefined.id === undefined.id))) goto L_1c7;
  if (!((e == null))) goto L_12f;
  e;
  goto L_179;
  if (!((undefined.unit == null))) goto L_158;
  undefined.unit;
  goto L_179;
  if (!((t.unit == null))) goto L_1a5;
  t.unit;
  goto L_1c6;
  if (((undefined.feedId === undefined.feedId))) goto L_26b;
  if (!((e == null))) goto L_1d8;
  e;
  goto L_26b;
  if (!((undefined.tracker == null))) goto L_201;
  undefined.tracker;
  goto L_26b;
  undefined.finish(this, i.FeedItemVisibilityEndReason.ContentReplaced);
  if (!((e == null))) goto L_275;
  e;
  goto L_296;
  if (!((undefined.tracker === t.tracker))) goto L_461;
  if (!((e == null))) goto L_2cb;
  e;
  goto L_2ec;
  if (!((undefined.geometryGeneration === t.geometryGeneration))) goto L_461;
  if (!((e == null))) goto L_321;
  e;
  goto L_36b;
  if (!((undefined.unit == null))) goto L_34a;
  undefined.unit;
  goto L_36b;
  if (!((t.unit == null))) goto L_397;
  t.unit;
  goto L_3b8;
  if (!((undefined.id === undefined.id))) goto L_461;
  if (!((e == null))) goto L_3c9;
  e;
  goto L_413;
  if (!((undefined.unit == null))) goto L_3f2;
  undefined.unit;
  goto L_413;
  if (!((t.unit == null))) goto L_43f;
  t.unit;
  goto L_460;
  if (((undefined.feedId === undefined.feedId))) goto L_48a;
  this.measureAfterDraw();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=294B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// locals: this
// closure: i
function {
  this = this;
  this.renderer.removeObserver(this);
  this.detachRoot();
  if (!((this.viewModel.tracker == null))) goto L_bb;
  this.viewModel.tracker;
  goto L_125;
  undefined.finish(this, i.FeedItemVisibilityEndReason.ContentReplaced);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=122B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// args: e
// closure: this, t
function {
  if ((this.isDestroyed())) goto L_79;
  if (((this.root !== t))) goto L_79;
  this.onLayout(e);
  return;
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=0 bc=124B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// args: e, i, r
// closure: this, t
function {
  if ((this.isDestroyed())) goto L_7b;
  if (((this.root !== t))) goto L_7b;
  this.onViewportChanged(e, i, r);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=1 cpool=2 bc=959B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// locals: e, t, r, o, this
// closure: i
function {
  this = this;
  let o;
  let r;
  let t;
  let e;
  e = this.renderer.getComponentRootElements(this, true);
  if (!((undefined !== this.viewModel.tracker))) goto L_fa;
  if (!((undefined !== this.viewModel.unit))) goto L_fa;
  if (!((1 === e.length))) goto L_fa;
  goto L_fb;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (!((t !== this.root))) goto L_24a;
  this.detachRoot();
  if (!((this.viewModel.tracker == null))) goto L_19d;
  this.viewModel.tracker;
  goto L_208;
  undefined.finish(this, i.FeedItemVisibilityEndReason.ContentReplaced);
  this.root = t;
  this.layoutCallback = function <atom:0>;
  this.viewportCallback = function <atom:0>;
  this.viewport = undefined;
  this.frame = undefined;
  undefined;
  if (!((undefined === t))) goto L_253;
  return;
  r = t.getAttribute("onLayout");
  if (!((r !== this.layoutCallback))) goto L_308;
  this.originalLayout = r;
  t.setAttribute("onLayout", this.layoutCallback);
  o = t.getAttribute("onViewportChanged");
  if (!((o !== this.viewportCallback))) goto L_3be;
  this.originalViewport = o;
  t.setAttribute("onViewportChanged", this.viewportCallback);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=525B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// locals: e, this
function {
  this = this;
  let e;
  e = this.root;
  if (!((undefined !== e))) goto L_1ea;
  if (!((undefined !== this.renderer.getElementForId(e.id)))) goto L_1ea;
  if (!((e.getAttribute("onLayout") === this.layoutCallback))) goto L_148;
  e.setAttribute("onLayout", this.originalLayout);
  if (!((e.getAttribute("onViewportChanged") === this.viewportCallback))) goto L_1ea;
  e.setAttribute("onViewportChanged", this.originalViewport);
  this.root = undefined;
  this.originalLayout = undefined;
  this.originalViewport = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=201B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// locals: this
function {
  this = this;
  if ((this.pendingMeasurement)) goto L_c8;
  if ((this.isDestroyed())) goto L_c8;
  this.pendingMeasurement = true;
  this.renderer.onNextDraw(this.afterDraw);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=423B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// locals: e, t, this
function {
  this = this;
  let t;
  let e;
  if ((this.isDestroyed())) goto L_55;
  if (!((undefined === this.root))) goto L_58;
  return;
  if (((undefined === undefined))) goto L_a7;
  e = <to_object>(undefined).tracker;
  t = <to_object>(undefined).unit;
  <to_object>(undefined);
  goto L_cc;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_5d;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== e))) goto L_1a6;
  if (!((undefined !== t))) goto L_1a6;
  if (!((undefined !== this.viewport))) goto L_1a6;
  if (!((undefined !== this.frame))) goto L_1a6;
  e.observe(this, t, this.viewport, this.frame);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=10 bc=282B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// args: require, module, exports
// locals: e, t, i, FeedItemVisibilityObserver, <class_fields_init>, FeedItemVisibilityObserver#1
function {
  let FeedItemVisibilityObserver#1;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FeedItemVisibilityObserver = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = require("valdi_core/src/Component");
  i = require("./FeedItemVisibilityTracker");
  let FeedItemVisibilityObserver;
  let <class_fields_init>;
  class FeedItemVisibilityObserver extends t.Component { ... }
  <proto:FeedItemVisibilityObserver>.onCreate = function <atom:0>;
  <proto:FeedItemVisibilityObserver>.onRender = function <atom:0>;
  <proto:FeedItemVisibilityObserver>.onComponentWillRerender = function <atom:0>;
  <proto:FeedItemVisibilityObserver>.onViewModelUpdate = function <atom:0>;
  <proto:FeedItemVisibilityObserver>.onDestroy = function <atom:0>;
  <proto:FeedItemVisibilityObserver>.bindRoot = function <atom:0>;
  <proto:FeedItemVisibilityObserver>.detachRoot = function <atom:0>;
  <proto:FeedItemVisibilityObserver>.measureAfterDraw = function <atom:0>;
  <proto:FeedItemVisibilityObserver>.observe = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FeedItemVisibilityObserver>;
  FeedItemVisibilityObserver = function <atom:0>;
  // close_loc <class_fields_init>
  FeedItemVisibilityObserver#1 = function <atom:0>;
  exports.FeedItemVisibilityObserver = FeedItemVisibilityObserver#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/FeedItemVisibilityObserver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
