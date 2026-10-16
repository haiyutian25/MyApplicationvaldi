// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=290B file=valdi_ui/src/components/ScrollView
// locals: e
// closure: this, o
function {
  let e;
  if (!((this.scrollViewHandler.scrollViewFrame == null))) goto L_50;
  this.scrollViewHandler.scrollViewFrame;
  goto L_71;
  e = undefined.height;
  if (!((undefined !== e))) goto L_121;
  this.setState({viewportExtension: Math.max(0, (o.Device.getWindowHeight() - e))});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=134B file=valdi_ui/src/components/ScrollView
// locals: this, this.active_func, new.target, arguments
// closure: o, <class_fields_init>, r
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
  this.state = {viewportExtension: 0};
  this.localScrollViewHandler = new r.ScrollViewHandler();
  this.updateViewportExtension = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=109B file=valdi_ui/src/components/ScrollView
// locals: this
function {
  this = this;
  if (!((this.viewModel.scrollViewHandler == null))) goto L_6c;
  this.viewModel.scrollViewHandler;
  return this.localScrollViewHandler;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=614B file=valdi_ui/src/components/ScrollView
// args: e
// locals: this
// closure: o
function {
  this = this;
  if (!((e == null))) goto L_b;
  e;
  goto L_2c;
  if (!((undefined.allowContentOverflow !== this.viewModel.allowContentOverflow))) goto L_265;
  if (!((this.insetObserver == null))) goto L_a1;
  this.insetObserver;
  goto L_c5;
  undefined.cancel();
  this.insetObserver = undefined;
  if (!((this.layoutSubscription == null))) goto L_fb;
  this.layoutSubscription;
  goto L_11f;
  undefined.unsubscribe();
  this.layoutSubscription = undefined;
  if (!(this.allowsContentOverflow)) goto L_265;
  this.layoutSubscription = this.scrollViewHandler.subscribeListener({onLayout: this.updateViewportExtension});
  this.insetObserver = o.Device.observeDisplayInsetChange(this.updateViewportExtension);
  this.updateViewportExtension();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=160B file=valdi_ui/src/components/ScrollView
// locals: this
function {
  this = this;
  if (!((this.insetObserver == null))) goto L_2c;
  this.insetObserver;
  goto L_50;
  undefined.cancel();
  if (!((this.layoutSubscription == null))) goto L_7b;
  this.layoutSubscription;
  goto L_9f;
  undefined.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=869B file=valdi_ui/src/components/ScrollView
// locals: i, this
// closure: e, t
function {
  this = this;
  let i;
  i = this.allowsContentOverflow;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.scrollViewHandler);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeFunction("onLayout", this.scrollViewHandler.onLayout);
  if (!(!i)) goto L_1b0;
  e.setAttribute("slowClipping", undefined);
  e.setAttributeStyle("style", this.viewModel.style);
  if (!(i)) goto L_297;
  goto L_298;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("viewportExtensionTop", undefined);
  if (!(i)) goto L_30f;
  goto L_310;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("viewportExtensionBottom", undefined);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=114B file=valdi_ui/src/components/ScrollView
// locals: this
// closure: s
function {
  this = this;
  if (!((true === this.viewModel.allowContentOverflow))) goto L_71;
  return s.isNativeIOS();
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=6 bc=329B file=valdi_ui/src/components/ScrollView
// args: require, module, exports
// locals: e, t, i, o, s, r, ScrollView, <class_fields_init>, ScrollView#1
function {
  let ScrollView#1;
  let r;
  let s;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ScrollView = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("scroll", undefined, "rv9g3LoCkvrOC8Qs");
  i = require("valdi_core/src/Component");
  o = require("valdi_core/src/Device");
  s = require("../Platform");
  r = require("widgets/src/components/scroll/ScrollViewHandler");
  let ScrollView;
  let <class_fields_init>;
  class ScrollView extends i.StatefulComponent { ... }
  <proto:ScrollView>.scrollViewHandler = function <atom:0>;
  <proto:ScrollView>.onViewModelUpdate = function <atom:0>;
  <proto:ScrollView>.onDestroy = function <atom:0>;
  <proto:ScrollView>.onRender = function <atom:0>;
  <proto:ScrollView>.allowsContentOverflow = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ScrollView>;
  ScrollView = function <atom:0>;
  // close_loc <class_fields_init>
  ScrollView#1 = function <atom:0>;
  exports.ScrollView = ScrollView#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/ScrollView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
