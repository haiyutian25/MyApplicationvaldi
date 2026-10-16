// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=299B file=chatgpt_explore_feed/src/ExploreFeedClickScope
// args: e
// locals: t, t#1
// closure: this, i
function {
  let t;
  t = this.interaction;
  this.interaction = {unit: this.viewModel.unit, flowCorrelationId: i.v4(), recorded: false};
  try { // catch -> L_115
  let t#1;
  t#1 = this.baseContext.runWithUserInteraction;
  if (!((undefined === t#1))) goto L_109;
  goto L_10e;
  // [栈深重同步 1 -> 0]
  // gosub (finally 块) 283
  return t#1(e);
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 283
  throw <?>;
  this.interaction = t;
  // ret (finally 块) 
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=614B file=chatgpt_explore_feed/src/ExploreFeedClickScope
// args: t
// locals: o
// closure: this, e
function {
  let o;
  o = this.interaction;
  if (!((undefined !== o))) goto L_21d;
  if (!(!o.recorded)) goto L_21d;
  if (!(("client" === t.handler))) goto L_21d;
  if (!((undefined !== t.type))) goto L_21d;
  if (!(("copy" !== t.type))) goto L_21d;
  if (!(("log_event" !== t.type))) goto L_21d;
  o.recorded = true;
  try { // catch -> L_1bc
  if (!((this.viewModel.onClicked == null))) goto L_16d;
  this.viewModel.onClicked;
  this.viewModel;
  goto L_1b8;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, o.unit, o.flowCorrelationId);
  <?>;
  goto L_21d;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_21c
  if (!(e.isLoggingEnabled)) goto L_218;
  console.warn("Explore click delivery failed before dispatch");
  <?>;
  goto L_21d;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return this.baseContext.dispatchActionPayload(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=77B file=chatgpt_explore_feed/src/ExploreFeedClickScope
// closure: this
function {
  if (!((this.interaction == null))) goto L_2b;
  this.interaction;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.flowCorrelationId;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=3 bc=91B file=chatgpt_explore_feed/src/ExploreFeedClickScope
// locals: this, this.active_func, new.target, arguments
// closure: i, e, <class_fields_init>
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
  this.runWithUserInteraction = function <atom:0>;
  this.dispatchActionPayload = function <atom:0>;
  this.getFlowCorrelationId = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=109B file=chatgpt_explore_feed/src/ExploreFeedClickScope
// locals: this
function {
  this = this;
  if (!((this.context.exploreFeedClickBaseContext == null))) goto L_6c;
  this.context.exploreFeedClickBaseContext;
  return this.context;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=chatgpt_explore_feed/src/ExploreFeedClickScope
// closure: t, this
function {
  t.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=1 bc=451B file=chatgpt_explore_feed/src/ExploreFeedClickScope
// locals: e, this
// closure: t, n, o
function {
  this = this;
  let e;
  null;
  this.context;
  e = {exploreFeedClickBaseContext: this.baseContext, getFlowCorrelationId: this.getFlowCorrelationId, runWithUserInteraction: this.runWithUserInteraction, dispatchActionPayload: this.dispatchActionPayload};
  t.beginComponent(n.DILActionDispacherContextProvider, o, undefined, undefined);
  if ((t.hasContext())) goto L_170;
  t.setContext(e);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=3 bc=336B file=chatgpt_explore_feed/src/ExploreFeedClickScope
// args: require, module, exports
// locals: e, t, o, i, n, r, ExploreFeedClickScope, <class_fields_init>, ExploreFeedClickScope#1
function {
  let ExploreFeedClickScope#1;
  let r;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedClickScope = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeComponentPrototype(undefined, "GBInCeXoQL7CK1rj");
  i = require("foundation/src/uuid");
  n = require("dil_core/src/DILRootComponent");
  r = require("valdi_core/src/Component");
  let ExploreFeedClickScope;
  let <class_fields_init>;
  class ExploreFeedClickScope extends r.Component { ... }
  <proto:ExploreFeedClickScope>.baseContext = function <atom:0>;
  <proto:ExploreFeedClickScope>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExploreFeedClickScope>;
  ExploreFeedClickScope = function <atom:0>;
  // close_loc <class_fields_init>
  ExploreFeedClickScope#1 = function <atom:0>;
  exports.ExploreFeedClickScope = ExploreFeedClickScope#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedClickScope
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
