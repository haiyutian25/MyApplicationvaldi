// fn <atom:0>  args=4 vars=5 closure=1 cpool=0 bc=72B file=chatgpt_explore_feed/src/FeedDwellTracker
// args: e, t, i, s
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.clock = e;
  this.createIntervalId = t;
  this.scheduleCheckpoint = i;
  this.deliver = s;
  this.disposed = false;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_explore_feed/src/FeedDwellTracker
// closure: this
function {
  return this.checkpoint();   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=1 bc=686B file=chatgpt_explore_feed/src/FeedDwellTracker
// args: e, t
// locals: i, s, r, this
function {
  this = this;
  let r;
  let s;
  let i;
  if (!(this.disposed)) goto L_30;
  return;
  i = this.clock.monotonicMs();
  s = this.clock.utcMs();
  r = this.active;
  if (!((undefined !== r))) goto L_1c1;
  if (((r.context.feedEntryId !== e.feedEntryId))) goto L_1c1;
  if (!(!(r.context.sessionId !== e.sessionId))) goto L_1c7;
  if ((t)) goto L_1f6;
  this.finish(i, s);
  if (!(t)) goto L_2ad;
  if (!((undefined === this.active))) goto L_2ad;
  null;
  e;
  this.active = {context: {}, intervalId: this.createIntervalId(), startedMs: i, startedAt: s};
  this.cancelTimer = this.scheduleCheckpoint(function <atom:0>);
  this.scheduleCheckpoint(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=192B file=chatgpt_explore_feed/src/FeedDwellTracker
// locals: this
function {
  this = this;
  this.disposed = true;
  this.finish(this.clock.monotonicMs(), this.clock.utcMs());
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=460B file=chatgpt_explore_feed/src/FeedDwellTracker
// locals: e, t, i, this
function {
  this = this;
  let i;
  let t;
  let e;
  e = this.active;
  if (!((undefined === e))) goto L_36;
  return;
  t = this.clock.monotonicMs();
  i = this.clock.utcMs();
  null;
  e.context;
  this.deliver({intervalId: e.intervalId, dwellStartedAt: e.startedAt, dwellMs: Math.max(0, (t - e.startedMs)), clientTimestamp: i, isFinal: false});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=381B file=chatgpt_explore_feed/src/FeedDwellTracker
// args: e, t
// locals: i, this
function {
  this = this;
  let i;
  i = this.active;
  this.active = undefined;
  if (!((this.cancelTimer == null))) goto L_5e;
  this.cancelTimer;
  this;
  goto L_61;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.cancelTimer = undefined;
  if (!((undefined !== i))) goto L_17c;
  null;
  i.context;
  this.deliver({intervalId: i.intervalId, dwellStartedAt: i.startedAt, dwellMs: Math.max(0, (e - i.startedMs)), clientTimestamp: t, isFinal: true});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=116B file=chatgpt_explore_feed/src/FeedDwellTracker
// closure: s, i, r
function {
  return new s.ExploreFeedInteractions(new i.OAINetworkClient(r), r.loggingService);
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=41B file=chatgpt_explore_feed/src/FeedDwellTracker
function {
  return performance.now();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=41B file=chatgpt_explore_feed/src/FeedDwellTracker
function {
  return Date.now();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=11B file=chatgpt_explore_feed/src/FeedDwellTracker
// closure: t
function {
  return clearInterval(t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=17B file=chatgpt_explore_feed/src/FeedDwellTracker
// args: e
// locals: t
function {
  let t;
  t = setInterval(e, 10000);
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=chatgpt_explore_feed/src/FeedDwellTracker
// args: e
// closure: c
function {
  c.sendFeedDwelled(e);
  return;
}

// fn r  args=1 vars=2 closure=5 cpool=5 bc=189B file=chatgpt_explore_feed/src/FeedDwellTracker
// args: r
// locals: c
// closure: s, i, t, FeedDwellTracker, e
function {
  let c;
  c = t.accountContainerFor(r).resolve(s.ExploreFeedInteractions, function <atom:0>);
  return new FeedDwellTracker({monotonicMs: function <atom:0>, utcMs: function <atom:0>}, e.v4, function <atom:0>, function <atom:0>);
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=6 bc=213B file=chatgpt_explore_feed/src/FeedDwellTracker
// args: require, module, exports
// locals: e, t, i, s, FeedDwellTracker, <class_fields_init>, FeedDwellTracker#1, r
function {
  r = function r;
  let FeedDwellTracker#1;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FeedDwellTracker = undefined;
  exports.createFeedDwellTracker = undefined;
  e = require("foundation/src/uuid");
  t = require("oai_platform_services/src/AccountContainer");
  i = require("oai_platform_services/src/OAINetworkClient");
  s = require("./ExploreFeedInteractions");
  let FeedDwellTracker;
  let <class_fields_init>;
  class FeedDwellTracker extends undefined { ... }
  <proto:FeedDwellTracker>.update = function <atom:0>;
  <proto:FeedDwellTracker>.dispose = function <atom:0>;
  <proto:FeedDwellTracker>.checkpoint = function <atom:0>;
  <proto:FeedDwellTracker>.finish = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FeedDwellTracker>;
  FeedDwellTracker = function <atom:0>;
  // close_loc <class_fields_init>
  FeedDwellTracker#1 = function <atom:0>;
  exports.FeedDwellTracker = FeedDwellTracker#1;
  exports.createFeedDwellTracker = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/FeedDwellTracker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
