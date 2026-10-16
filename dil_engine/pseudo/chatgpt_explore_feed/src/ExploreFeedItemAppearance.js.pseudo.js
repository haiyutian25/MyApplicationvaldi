// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=43B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=176B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// closure: e, this, t, a
function {
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", a);
  if (!(this.contentInserted)) goto L_87;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=1 bc=105B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// locals: this, this.active_func, new.target, arguments
// closure: e, t, a, <class_fields_init>
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
  this.rendered = false;
  this.contentInserted = false;
  this.contentReadyScheduled = false;
  this.renderContent = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=170B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// args: e
// locals: this
function {
  this = this;
  if (!((undefined !== e))) goto L_a9;
  if (!((e.item !== this.viewModel.item))) goto L_a9;
  this.cancelAnimation();
  this.contentInserted = true;
  true;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// locals: this
function {
  this = this;
  this.cancelAnimation();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// closure: this, t
function {
  return this.insertInitialContent(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=12B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// closure: this
function {
  this.cancelAppearance = undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=2 bc=171B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// closure: this, t, o
function {
  if ((this.isDestroyed())) goto L_aa;
  if (((this.viewModel.item !== t))) goto L_aa;
  this.cancelAppearance = o(this.renderer, function <atom:0>, function <atom:0>);
  o(this.renderer, function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=202B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// closure: this, t
function {
  if ((this.isDestroyed())) goto L_c9;
  if (((this.viewModel.item !== t))) goto L_c9;
  if (!((this.viewModel.onContentReady == null))) goto L_c3;
  this.viewModel.onContentReady;
  this.viewModel;
  goto L_c9;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=192B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// closure: this, t
function {
  if ((this.isDestroyed())) goto L_bf;
  if (((this.viewModel.item !== t))) goto L_bf;
  this.renderer.onNextDraw(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=192B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// closure: this, t
function {
  if ((this.isDestroyed())) goto L_bf;
  if (((this.viewModel.item !== t))) goto L_bf;
  this.renderer.onNextDraw(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=2 bc=590B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// locals: e, t, i, this
// closure: o
function {
  this = this;
  let i;
  let t;
  let e;
  e = !this.rendered;
  t = this.viewModel.item;
  if (!(e)) goto L_bd;
  i = this.viewModel.animateInitialContent;
  this.rendered = true;
  if (!(e)) goto L_e6;
  if (!(!i)) goto L_e6;
  this.contentInserted = true;
  true;
  this.renderContent();
  if (!(i)) goto L_15d;
  goto L_24d;
  // [栈深重同步 1 -> 0]
  if (!(this.contentInserted)) goto L_24d;
  if (!(!this.contentReadyScheduled)) goto L_24d;
  this.contentReadyScheduled = true;
  if (!((undefined !== this.viewModel.onContentReady))) goto L_24d;
  this.renderer.onRenderComplete(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=204B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// args: e
// locals: this
function {
  this = this;
  if ((this.isDestroyed())) goto L_cb;
  if (((this.viewModel.item !== e))) goto L_cb;
  this.contentInserted = true;
  this.renderer.renderComponent(this, undefined);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=61B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// locals: this
function {
  this = this;
  if (!((this.cancelAppearance == null))) goto L_2d;
  this.cancelAppearance;
  this;
  goto L_30;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.cancelAppearance = undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// closure: this
function {
  return this.insert();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=65B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.renderer = e;
  this.entries = new Set();
  this.timer = setTimeout(function <atom:0>, 0);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=472B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// closure: this, e, s
function {
  this.entries.delete(e);
  if (!((0 === this.entries.size))) goto L_1d7;
  if (!((undefined !== this.timer))) goto L_139;
  clearTimeout(this.timer);
  this.timer = undefined;
  s.delete(this.renderer);
  if (!((undefined !== this.animationToken))) goto L_1d7;
  this.renderer.cancelAnimation(this.animationToken);
  this.animationToken = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=77B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// args: e
// locals: this
// closure: s
function {
  this = this;
  this.entries.add(e);
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=169B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// locals: e
// closure: this
function {
  this.animationToken = undefined;
  let e;
  for (const e of this.entries) {
    e.complete();
  }
  this.entries.clear();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=88B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// locals: e
// closure: this
function {
  let e;
  for (const e of this.entries) {
    e.insert();
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=2 bc=345B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// locals: this
// closure: s, d, i
function {
  this = this;
  this.timer = undefined;
  s.delete(this.renderer);
  this.animationToken = this.renderer.animate({duration: d, curve: i.AnimationCurve.EaseOut, appearanceBehavior: {enterAttributes: i.AnimationAppearance.FADE}, completion: function <atom:0>}, function <atom:0>);
  return;
}

// fn o  args=3 vars=4 closure=2 cpool=0 bc=162B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// args: e, t, i
// locals: n
// closure: s, InitialAppearanceBatch
function {
  let n;
  n = s.get(e);
  if (!((undefined === n))) goto L_6d;
  n = new InitialAppearanceBatch(e);
  new InitialAppearanceBatch(e);
  s.set(e, n);
  return n.add({insert: t, complete: i});   // tail call
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=11 bc=443B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// args: require, module, exports
// locals: e, t, i, n, r, ExploreFeedItemAppearance, <class_fields_init>, ExploreFeedItemAppearance#1, s, InitialAppearanceBatch, <class_fields_init>#1, InitialAppearanceBatch#1, o, d, a
function {
  o = function o;
  let a;
  let d;
  let InitialAppearanceBatch#1;
  let s;
  let ExploreFeedItemAppearance#1;
  let r;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedItemAppearance = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "6ZeDsMbBca0k-cmD");
  i = require("valdi_core/src/AnimationOptions");
  n = require("valdi_core/src/Component");
  r = require("valdi_core/src/Style");
  let ExploreFeedItemAppearance;
  let <class_fields_init>;
  class ExploreFeedItemAppearance extends n.Component { ... }
  <proto:ExploreFeedItemAppearance>.onViewModelUpdate = function <atom:0>;
  <proto:ExploreFeedItemAppearance>.onDestroy = function <atom:0>;
  <proto:ExploreFeedItemAppearance>.onRender = function <atom:0>;
  <proto:ExploreFeedItemAppearance>.insertInitialContent = function <atom:0>;
  <proto:ExploreFeedItemAppearance>.cancelAnimation = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExploreFeedItemAppearance>;
  ExploreFeedItemAppearance = function <atom:0>;
  // close_loc <class_fields_init>
  ExploreFeedItemAppearance#1 = function <atom:0>;
  exports.ExploreFeedItemAppearance = ExploreFeedItemAppearance#1;
  s = new WeakMap();
  let InitialAppearanceBatch;
  let <class_fields_init>#1;
  class InitialAppearanceBatch extends undefined { ... }
  <proto:InitialAppearanceBatch>.add = function <atom:0>;
  <proto:InitialAppearanceBatch>.insert = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:InitialAppearanceBatch>;
  InitialAppearanceBatch = function <atom:0>;
  // close_loc <class_fields_init>#1
  InitialAppearanceBatch#1 = function <atom:0>;
  d = 0.55;
  a = new r.Style({width: "100%"});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedItemAppearance
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
