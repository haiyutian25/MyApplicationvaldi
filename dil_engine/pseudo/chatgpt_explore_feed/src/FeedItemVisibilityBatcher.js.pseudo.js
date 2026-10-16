// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=63B file=chatgpt_explore_feed/src/FeedItemVisibilityBatcher
// args: e, i
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.deliver = e;
  this.schedule = i;
  this.pending = [];
  this.disposed = false;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_explore_feed/src/FeedItemVisibilityBatcher
// closure: this
function {
  return this.flush();   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=528B file=chatgpt_explore_feed/src/FeedItemVisibilityBatcher
// args: e
// locals: i, this
// closure: r
function {
  this = this;
  let i;
  if (!(this.disposed)) goto L_2a;
  return;
  i = this.pending[0];
  if (((undefined === i))) goto L_116;
  if (!((i.feedEntryId === e.feedEntryId))) goto L_ed;
  if (((i.sessionId === e.sessionId))) goto L_116;
  this.flush();
  null;
  e;
  this.pending.push({});
  if (!((this.pending.length >= r))) goto L_1b5;
  goto L_20f;
  // [栈深重同步 1 -> 0]
  if (!((undefined === this.cancelTimer))) goto L_20f;
  this.cancelTimer = this.schedule(function <atom:0>);
  this.schedule(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=123B file=chatgpt_explore_feed/src/FeedItemVisibilityBatcher
// args: e
// locals: this
function {
  this = this;
  if (!((this.pending[0] == null))) goto L_2e;
  this.pending[0];
  goto L_4f;
  if (!((undefined.feedEntryId === e))) goto L_7a;
  this.flush();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=86B file=chatgpt_explore_feed/src/FeedItemVisibilityBatcher
// locals: this
function {
  this = this;
  this.disposed = true;
  if (!((this.cancelTimer == null))) goto L_39;
  this.cancelTimer;
  this;
  goto L_3c;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.cancelTimer = undefined;
  this.pending = [];
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=308B file=chatgpt_explore_feed/src/FeedItemVisibilityBatcher
// locals: i, t, this
// closure: e
function {
  this = this;
  let i;
  if (!((this.cancelTimer == null))) goto L_30;
  this.cancelTimer;
  this;
  goto L_33;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.cancelTimer = undefined;
  i = this.pending;
  this.pending = [];
  if (!(!this.disposed)) goto L_133;
  if (!((0 !== i.length))) goto L_133;
  try { // catch -> L_d2
  this.deliver(i);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_132
  if (!(e.isLoggingEnabled)) goto L_12f;
  console.warn("Feed item visibility batch delivery failed; batch discarded", t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=116B file=chatgpt_explore_feed/src/FeedItemVisibilityBatcher
// closure: s, t, e
function {
  return new s.ExploreFeedInteractions(new t.OAINetworkClient(e), e.loggingService);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_explore_feed/src/FeedItemVisibilityBatcher
// args: e
// closure: r
function {
  return r.sendVisibilityBatch(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=11B file=chatgpt_explore_feed/src/FeedItemVisibilityBatcher
// closure: i
function {
  return clearTimeout(i);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=17B file=chatgpt_explore_feed/src/FeedItemVisibilityBatcher
// args: e
// locals: i
// closure: n
function {
  let i;
  i = setTimeout(e, n);
  return function <atom:0>;
}

// fn d  args=1 vars=2 closure=5 cpool=3 bc=128B file=chatgpt_explore_feed/src/FeedItemVisibilityBatcher
// args: e
// locals: r
// closure: s, t, n, i, FeedItemVisibilityBatcher
function {
  let r;
  r = i.accountContainerFor(e).resolve(s.ExploreFeedInteractions, function <atom:0>);
  return new FeedItemVisibilityBatcher(function <atom:0>, function <atom:0>);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=6 bc=264B file=chatgpt_explore_feed/src/FeedItemVisibilityBatcher
// args: require, module, exports
// locals: e, i, t, s, r, n, FeedItemVisibilityBatcher, <class_fields_init>, FeedItemVisibilityBatcher#1, d
function {
  d = function d;
  let FeedItemVisibilityBatcher#1;
  let n;
  let r;
  let s;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FeedItemVisibilityBatcher = undefined;
  exports.createFeedItemVisibilityBatcher = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("oai_platform_services/src/AccountContainer");
  t = require("oai_platform_services/src/OAINetworkClient");
  s = require("./ExploreFeedInteractions");
  r = 20;
  n = 5000;
  let FeedItemVisibilityBatcher;
  let <class_fields_init>;
  class FeedItemVisibilityBatcher extends undefined { ... }
  <proto:FeedItemVisibilityBatcher>.onEvent = function <atom:0>;
  <proto:FeedItemVisibilityBatcher>.flushVisit = function <atom:0>;
  <proto:FeedItemVisibilityBatcher>.dispose = function <atom:0>;
  <proto:FeedItemVisibilityBatcher>.flush = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FeedItemVisibilityBatcher>;
  FeedItemVisibilityBatcher = function <atom:0>;
  // close_loc <class_fields_init>
  FeedItemVisibilityBatcher#1 = function <atom:0>;
  exports.FeedItemVisibilityBatcher = FeedItemVisibilityBatcher#1;
  exports.createFeedItemVisibilityBatcher = d;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/FeedItemVisibilityBatcher
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
