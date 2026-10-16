// fn <atom:0>  args=3 vars=9 closure=2 cpool=0 bc=821B file=chatgpt_explore_feed/src/ExploreFeedDIL
// args: e, i, o
// locals: n, r, s, d, t, a
// closure: this, t
function {
  let d;
  let s;
  let r;
  let n;
  if (((undefined !== this.activeInteractionContext))) goto L_5f;
  if (!(!t.isVersionAtLeast(207))) goto L_65;
  return o();   // tail call
  if (!((this.viewModel.getFeedContext == null))) goto L_b3;
  this.viewModel.getFeedContext;
  this.viewModel;
  goto L_b6;
  // [栈深重同步 1 -> 2]
  n = <?>.call(undefined);
  r = e.logging_metadata;
  if (!((r == null))) goto L_e5;
  r;
  goto L_106;
  if (!((undefined.feed_id == null))) goto L_150;
  undefined.feed_id;
  s = this.viewModel.feedId;
  null;
  r;
  if (!((n == null))) goto L_194;
  n;
  goto L_1b5;
  if (!((n == null))) goto L_1c5;
  n;
  goto L_1e6;
  if (!((n == null))) goto L_1f6;
  n;
  goto L_217;
  d = {feed_item_id: e.id, feed_id: s, feed_entry_id: undefined.feedEntryId, session_id: undefined.sessionId, entrypoint: undefined.entrypoint, flow_correlation_id: i};
  let a;
  let t;
  const _it1 = Object.entries(d);
  goto L_275;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  t = <value(_it2)>;
  <done(_it2)>;
  a = <value(_it2)>;
  if (!((undefined === a))) goto L_274;
  // [栈深重同步 5 -> 4]
  d;
  if (!(<done(_it1)>)) goto L_258;
  <value(_it1)>;
  if (!((this.context.messageMetadata == null))) goto L_2cc;
  this.context.messageMetadata;
  goto L_2ed;
  // [栈深重同步 4 -> 3]
  _it2.next.widgetName = <catch>.widgetName;
  _it2.next.dilVersion = "1.0";
  _it2.next.loggingMetadata = {home_feed: d};
  _it2.activeInteractionContext = _it2.next;
  try { // catch -> L_321
  // gosub (finally 块) 807
  return o();
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 807
  throw <?>;
  this.activeInteractionContext = undefined;
  // ret (finally 块) 
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=63B file=chatgpt_explore_feed/src/ExploreFeedDIL
// locals: this, this.active_func, new.target, arguments
// closure: t, <class_fields_init>
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
  this.runWithActionContext = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=chatgpt_explore_feed/src/ExploreFeedDIL
// args: e
function {
  e();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=58B file=chatgpt_explore_feed/src/ExploreFeedDIL
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((this.activeInteractionContext == null))) goto L_39;
  this.activeInteractionContext;
  return super["getHostInteractionContext"].call(this, e);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=chatgpt_explore_feed/src/ExploreFeedDIL
// closure: this
function {
  return this.viewModel;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=1 bc=145B file=chatgpt_explore_feed/src/ExploreFeedDIL
// locals: e, this, <home_object>
// closure: o
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  e = super["createDILContext"].call(this);
  null;
  e;
  return {widgetsMap: o.exploreFeedWidgets(e.widgetsMap, function <atom:0>, this.runWithActionContext)};
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=4 bc=246B file=chatgpt_explore_feed/src/ExploreFeedDIL
// args: require, module, exports
// locals: e, t, i, o, ExploreFeedDIL, <class_fields_init>, ExploreFeedDIL#1
function {
  let ExploreFeedDIL#1;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedDIL = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = require("valdi_core/src/CompilerIntrinsics");
  i = require("dil_widgets/src/DILEntryPointComponent");
  o = require("./ExploreFeedWidgetRenderer");
  let ExploreFeedDIL;
  let <class_fields_init>;
  class ExploreFeedDIL extends i.DILEntryPointComponent { ... }
  <proto:ExploreFeedDIL>.renderTextAnimationGroup = function <atom:0>;
  <proto:ExploreFeedDIL>.getHostInteractionContext = function <atom:0>;
  <proto:ExploreFeedDIL>.createDILContext = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExploreFeedDIL>;
  ExploreFeedDIL = function <atom:0>;
  // close_loc <class_fields_init>
  ExploreFeedDIL#1 = function <atom:0>;
  exports.ExploreFeedDIL = ExploreFeedDIL#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedDIL
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
