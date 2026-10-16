// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=chatgpt_explore_feed/src/FeedItemActionScope
// closure: this, e
function {
  return this.context.dispatchActionPayload(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=224B file=chatgpt_explore_feed/src/FeedItemActionScope
// args: e
// closure: this
function {
  if (!((this.context.getFlowCorrelationId == null))) goto L_d8;
  this.context.getFlowCorrelationId;
  this.context;
  goto L_db;
  // [栈深重同步 4 -> 5]
  return this.viewModel.runWithActionContext(this.viewModel.node, <?>.call(undefined), function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=chatgpt_explore_feed/src/FeedItemActionScope
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
  this.dispatchActionPayload = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=chatgpt_explore_feed/src/FeedItemActionScope
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=327B file=chatgpt_explore_feed/src/FeedItemActionScope
// locals: this
// closure: e, n, t
function {
  this = this;
  e.beginComponent(n.DILActionDispacherContextProvider, t, undefined, undefined);
  if ((e.hasContext())) goto L_f4;
  null;
  this.context;
  e.setContext({dispatchActionPayload: this.dispatchActionPayload});
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=268B file=chatgpt_explore_feed/src/FeedItemActionScope
// args: require, module, exports
// locals: e, t, o, n, FeedItemActionScope, <class_fields_init>, FeedItemActionScope#1
function {
  let FeedItemActionScope#1;
  let n;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FeedItemActionScope = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "qjF45gXPtozJppGq");
  o = require("valdi_core/src/Component");
  n = require("dil_core/src/DILRootComponent");
  let FeedItemActionScope;
  let <class_fields_init>;
  class FeedItemActionScope extends o.Component { ... }
  <proto:FeedItemActionScope>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FeedItemActionScope>;
  FeedItemActionScope = function <atom:0>;
  // close_loc <class_fields_init>
  FeedItemActionScope#1 = function <atom:0>;
  exports.FeedItemActionScope = FeedItemActionScope#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/FeedItemActionScope
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
