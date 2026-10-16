// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=76B file=chatgpt_explore_feed/src/FeedItemVisibilityTracker
// args: e
function {
  e.Threshold = "exit_viewport_threshold";
  e.FeedExit = "feed_exit";
  e.Background = "background";
  e.ContentReplaced = "content_replaced";
  e.Covered = "covered";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=chatgpt_explore_feed/src/FeedItemVisibilityTracker
// args: e
function {
  e.Viewed = "viewed";
  e.Dwelled = "dwelled";
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=98B file=chatgpt_explore_feed/src/FeedItemVisibilityTracker
// args: e, t, i
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.clock = t;
  this.eventHandler = i;
  this.active = new Map();
  this.presented = false;
  this.closed = false;
  null;
  e;
  this.context = {};
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=129B file=chatgpt_explore_feed/src/FeedItemVisibilityTracker
// args: e, t
// locals: this
function {
  this = this;
  if (!(e)) goto L_2b;
  this.presented = !this.closed;
  if ((this.presented)) goto L_80;
  this.finishAll(t);
  return;
}

// fn <atom:0>  args=4 vars=7 closure=3 cpool=0 bc=972B file=chatgpt_explore_feed/src/FeedItemVisibilityTracker
// args: s, n, d, h
// locals: o, r, this
// closure: e, i, t
function {
  this = this;
  let r;
  let o;
  o = this.active.get(s);
  if (((undefined === o))) goto L_17c;
  if (!((o.event.id === n.id))) goto L_130;
  if (((o.event.feedId === n.feedId))) goto L_17c;
  this.finish(s, e.ContentReplaced);
  if ((!this.presented)) goto L_1a9;
  if (!(!i(d, h))) goto L_1f5;
  this.finish(s, e.Threshold);
  return;
  if (!(this.active.has(s))) goto L_23f;
  return;
  null;
  this.context;
  null;
  n;
  r = {interactionType: t.Viewed, clientTimestamp: this.clock.utcMs()};
  this.active.set(s, {event: r, startedMs: this.clock.monotonicMs()});
  null;
  r;
  this.eventHandler.onEvent({});
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=633B file=chatgpt_explore_feed/src/FeedItemVisibilityTracker
// args: e, i
// locals: s, n, this
// closure: t
function {
  this = this;
  let n;
  let s;
  s = this.active.get(e);
  if (!((undefined === s))) goto L_58;
  return;
  this.active.delete(e);
  n = this.clock.utcMs();
  null;
  s.event;
  this.eventHandler.onEvent({interactionType: t.Dwelled, clientTimestamp: n, dwellStartedAt: s.event.clientTimestamp, dwellEndedAt: n, dwellMs: Math.max(0, (this.clock.monotonicMs() - s.startedMs)), endReason: i});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=55B file=chatgpt_explore_feed/src/FeedItemVisibilityTracker
// args: e
// locals: this
function {
  this = this;
  this.closed = true;
  this.setPresented(false, e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=128B file=chatgpt_explore_feed/src/FeedItemVisibilityTracker
// args: e
// locals: t, this
function {
  this = this;
  let t;
  for (const t of this.active.keys()) {
    this.finish(t, e);
  }
  return;
}

// fn i  args=2 vars=4 closure=0 cpool=1 bc=952B file=chatgpt_explore_feed/src/FeedItemVisibilityTracker
// args: e, t
// locals: i, s
function {
  let s;
  let i;
  if ((![e.x, e.y, e.width, e.height, t.width, t.height].every(Number.isFinite))) goto L_170;
  if (((t.width <= 0))) goto L_170;
  if (!((t.height <= 0))) goto L_175;
  return false;
  i = Math.max(0, (Math.min(t.width, (e.x + e.width)) - Math.max(0, e.x)));
  s = Math.max(0, (Math.min(t.height, (e.y + e.height)) - Math.max(0, e.y)));
  if (!((i > 0))) goto L_3b7;
  return (s >= (0.5 * t.height));
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=9 bc=218B file=chatgpt_explore_feed/src/FeedItemVisibilityTracker
// args: require, module, exports
// locals: e, t, FeedItemVisibilityTracker, <class_fields_init>, FeedItemVisibilityTracker#1, i
function {
  i = function i;
  let FeedItemVisibilityTracker#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FeedItemVisibilityEndReason = undefined;
  exports.FeedItemVisibilityType = undefined;
  exports.FeedItemVisibilityTracker = undefined;
  if ((e)) goto L_74;
  e = {};
  exports.FeedItemVisibilityEndReason = {};
  function <atom:0>({});
  if ((t)) goto L_8a;
  t = {};
  exports.FeedItemVisibilityType = {};
  function <atom:0>({});
  let FeedItemVisibilityTracker;
  let <class_fields_init>;
  class FeedItemVisibilityTracker extends undefined { ... }
  <proto:FeedItemVisibilityTracker>.setPresented = function <atom:0>;
  <proto:FeedItemVisibilityTracker>.observe = function <atom:0>;
  <proto:FeedItemVisibilityTracker>.finish = function <atom:0>;
  <proto:FeedItemVisibilityTracker>.close = function <atom:0>;
  <proto:FeedItemVisibilityTracker>.finishAll = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FeedItemVisibilityTracker>;
  FeedItemVisibilityTracker = function <atom:0>;
  // close_loc <class_fields_init>
  FeedItemVisibilityTracker#1 = function <atom:0>;
  exports.FeedItemVisibilityTracker = FeedItemVisibilityTracker#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/FeedItemVisibilityTracker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
