// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=69B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.client = e;
  this.loggingService = t;
  this.tasks = new Set();
  this.disposed = false;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e
function {
  return e.interaction_type;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e
function {
  return e.feed_id;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e
function {
  return (undefined !== e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e
function {
  return e.feed_entry_id;
}

// fn <atom:0>  args=1 vars=6 closure=2 cpool=4 bc=630B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e
// locals: t, i, r, e#1, this
// closure: n, d
function {
  this = this;
  let i;
  let t;
  if ((this.disposed)) goto L_34;
  if (!((0 === e.length))) goto L_37;
  return;
  t = e[0].sessionId;
  i = [];
  let r;
  for (const r of e) {
    let e#1;
    e#1 = n(r);
    if (!((undefined !== e#1))) goto L_d6;
    if (!(d(t))) goto L_d6;
    if (!((r.sessionId === t))) goto L_d6;
    goto L_136;
    // [栈深重同步 4 -> 3]
    if (!((this.loggingService == null))) goto L_101;
    this.loggingService;
    goto L_136;
    undefined.log({level: 2, message: "Explore interaction skipped: invalid metadata or session"});
  }
  if (!((0 !== i.length))) goto L_275;
  // append([], 0, new Set(i.map(function <atom:0>)))
  new Set(i.map(function <atom:0>));
  // append([], 0, new Set(i.map(function <atom:0>).filter(function <atom:0>)))
  new Set(i.map(function <atom:0>).filter(function <atom:0>));
  // append([], 0, new Set(i.map(function <atom:0>)))
  new Set(i.map(function <atom:0>));
  this.send("/backend-api/explore/interactions/batch", t, {interactions: i}, {target_type: "feed_item", interaction_count: i.length, interaction_types: [], feed_ids: [], feed_entry_ids: []});
  return;
}

// fn <atom:0>  args=3 vars=5 closure=2 cpool=0 bc=939B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e, t, i
// locals: n, this
// closure: d, s
function {
  this = this;
  let n;
  if ((!d(t.sessionId))) goto L_10b;
  if ((!d(t.feedEntryId))) goto L_10b;
  if (!(("chat" !== t.entrypoint))) goto L_b1;
  if ((("work" !== t.entrypoint))) goto L_10b;
  if ((!s(i))) goto L_10b;
  if (!((undefined !== e.feedId))) goto L_19b;
  if (!(!d(e.feedId))) goto L_19b;
  if (!((this.loggingService == null))) goto L_13a;
  this.loggingService;
  goto L_16f;
  undefined.log({level: 2, message: "Explore feed view skipped: invalid metadata or session"});
  return Promise.resolve(false);   // tail call
  n = {target_type: "feed", surface: "home_feed", interaction_type: "viewed", render_state: e.renderState, feed_entry_id: t.feedEntryId, entrypoint: t.entrypoint, client_timestamp: i};
  if (!((undefined !== e.feedId))) goto L_28d;
  n.feed_id = e.feedId;
  e.feedId;
  return this.send("/backend-api/explore/interactions", t.sessionId, n, {target_type: n.target_type, interaction_type: n.interaction_type, feed_id: n.feed_id, feed_entry_id: n.feed_entry_id, render_state: n.render_state});   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=1163B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e
// locals: t, this
// closure: d, s
function {
  this = this;
  let t;
  if ((!d(e.sessionId))) goto L_1ad;
  if ((!d(e.feedEntryId))) goto L_1ad;
  if ((!d(e.intervalId))) goto L_1ad;
  if (!(("chat" !== e.entrypoint))) goto L_dd;
  if ((("work" !== e.entrypoint))) goto L_1ad;
  if ((!s(e.clientTimestamp))) goto L_1ad;
  if ((!s(e.dwellStartedAt))) goto L_1ad;
  if ((!Number.isFinite(e.dwellMs))) goto L_1ad;
  if (!((e.dwellMs < 0))) goto L_23d;
  if (!((this.loggingService == null))) goto L_1dc;
  this.loggingService;
  goto L_211;
  undefined.log({level: 2, message: "Explore feed dwell skipped: invalid metadata or session"});
  return Promise.resolve(false);   // tail call
  t = {target_type: "feed", surface: "home_feed", interaction_type: "dwelled", feed_entry_id: e.feedEntryId, entrypoint: e.entrypoint, interval_id: e.intervalId, dwell_started_at: e.dwellStartedAt, dwell_ms: e.dwellMs, is_final: e.isFinal, client_timestamp: e.clientTimestamp};
  return this.send("/backend-api/explore/interactions", e.sessionId, t, {target_type: t.target_type, interaction_type: t.interaction_type, feed_entry_id: t.feed_entry_id, interval_id: t.interval_id, is_final: t.is_final});   // tail call
}

// fn <atom:0>  args=4 vars=6 closure=2 cpool=0 bc=575B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e, t, n, r
// locals: s, this
// closure: i, d
function {
  this = this;
  let s;
  null;
  e;
  null;
  t;
  s = i({clientTimestamp: n});
  if (!((undefined !== s))) goto L_1b3;
  if (!(d(t.sessionId))) goto L_1b3;
  s.interaction_type = "clicked";
  s.flow_correlation_id = r;
  return this.send("/backend-api/explore/interactions", t.sessionId, s, {target_type: s.target_type, interaction_type: s.interaction_type, feed_id: s.feed_id, feed_entry_id: s.feed_entry_id, id: s.id, flow_correlation_id: s.flow_correlation_id});
  if (!((this.loggingService == null))) goto L_1dd;
  this.loggingService;
  goto L_212;
  undefined.log({level: 2, message: "Explore click skipped: invalid metadata or session"});
  return Promise.resolve(false);
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=0 bc=1520B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e, t
// locals: n, r, s, o, this
// closure: i, d
function {
  this = this;
  let o;
  let s;
  let r;
  let n;
  if (((undefined === undefined))) goto L_81;
  n = <to_object>(undefined).unit;
  r = <to_object>(undefined).context;
  s = <to_object>(undefined).action;
  <to_object>(undefined);
  goto L_85;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_14;
  // [栈深重同步 1 -> 0]
  null;
  n;
  null;
  r;
  o = i({clientTimestamp: t});
  if (((undefined === o))) goto L_318;
  if ((!d(r.sessionId))) goto L_318;
  if (!((undefined !== s.rating))) goto L_129;
  if (((undefined !== s.notInterested))) goto L_318;
  if (!((undefined !== s.rating))) goto L_1b2;
  if (!(("up" !== s.rating))) goto L_1b2;
  if ((("down" !== s.rating))) goto L_318;
  if (!((undefined !== s.notInterested))) goto L_20e;
  if ((("boolean" != typeof s.notInterested))) goto L_318;
  if (!((undefined !== s.feedbackText))) goto L_26a;
  if ((("string" != typeof s.feedbackText))) goto L_318;
  if (!((undefined === s.rating))) goto L_3aa;
  if (!((undefined === s.notInterested))) goto L_3aa;
  if (!((s.feedbackText == null))) goto L_2f3;
  s.feedbackText;
  goto L_317;
  if (!(!undefined.trim())) goto L_3aa;
  if (!((this.loggingService == null))) goto L_348;
  this.loggingService;
  goto L_37d;
  undefined.log({level: 2, message: "Explore feedback skipped: invalid metadata or action"});
  return Promise.resolve(false);
  o.interaction_type = "feedback";
  if (!((undefined !== s.rating))) goto L_416;
  o.rating = s.rating;
  s.rating;
  if (!((undefined !== s.notInterested))) goto L_472;
  o.not_interested = s.notInterested;
  s.notInterested;
  if (!((undefined !== s.feedbackText))) goto L_4ce;
  o.feedback_text = s.feedbackText;
  s.feedbackText;
  return this.send("/backend-api/explore/interactions", r.sessionId, o, {target_type: o.target_type, interaction_type: o.interaction_type, feed_id: o.feed_id, feed_entry_id: o.feed_entry_id, id: o.id});
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=503B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: i
// closure: this, r, e, t, d
function {
  this.tasks.delete(r);
  if (!(!this.disposed)) goto L_1f6;
  if (((i.kind === e.OAINetworkResultKind.Success))) goto L_1f6;
  if (!((this.loggingService == null))) goto L_10e;
  this.loggingService;
  goto L_1f3;
  null;
  d;
  undefined.log({level: 2, message: "Explore interaction delivery failed; event discarded", attributesJson: JSON.stringify({path: t, kind: e.OAINetworkResultKind[i.kind], statusCode: i.statusCode})});
  return false;
}

// fn <atom:0>  args=4 vars=6 closure=1 cpool=1 bc=351B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: t, i, n, d
// locals: r, this
// closure: e
function {
  this = this;
  let r;
  if (!(this.disposed)) goto L_54;
  return Promise.resolve(false);   // tail call
  r = this.client.requestEmpty({method: "POST", path: t, headers: [{name: "OAI-Session-Id", value: i}], jsonBody: n});
  this.tasks.add(r);
  return r.result.then(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=172B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// locals: e, this
function {
  this = this;
  this.disposed = true;
  let e;
  for (const e of this.tasks) {
    e.cancel();
  }
  this.tasks.clear();
  return;
}

// fn i  args=1 vars=8 closure=3 cpool=0 bc=1173B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e
// locals: t, i, r, s, n, d, s#1
// closure: d, r, s
function {
  let n;
  let i;
  let t;
  if (!(d(e.id))) goto L_184;
  if (!(d(e.producer))) goto L_184;
  if (!(d(e.itemType))) goto L_184;
  if (!(d(e.displayType))) goto L_184;
  if (!(d(e.feedEntryId))) goto L_184;
  if ((("chat" === e.entrypoint))) goto L_134;
  if (!(("work" === e.entrypoint))) goto L_184;
  if (!(r(e.feedPosition))) goto L_184;
  if (!(!s(e.clientTimestamp))) goto L_188;
  return;
  t = {target_type: "feed_item", surface: "home_feed", id: e.id, producer: e.producer, item_type: e.itemType, display_type: e.displayType, feed_entry_id: e.feedEntryId, entrypoint: e.entrypoint, feed_position: e.feedPosition, client_timestamp: e.clientTimestamp};
  i = {feed_id: e.feedId, home_unit_id: e.homeUnitId, section_id: e.sectionId, horizontal_group_id: e.horizontalGroupId};
  let s;
  let r;
  const _it1 = Object.entries(i);
  goto L_3d3;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  r = <value(_it2)>;
  <done(_it2)>;
  s = <value(_it2)>;
  if (!((undefined !== s))) goto L_3d3;
  if (!(!d(s))) goto L_3c8;
  return undefined;
  // [栈深重同步 0 -> 3]
  t[r] = s;
  if (!(<done(<?>)>)) goto L_3a9;
  <value(<?>)>;
  n = {section_position: e.sectionPosition, horizontal_position: e.horizontalPosition};
  let s#1;
  let d;
  const _it3 = Object.entries(n);
  goto L_48b;
  const _it4 = <value(_it3)>;
  <done(_it4)>;
  d = <value(_it4)>;
  <done(_it4)>;
  s#1 = <value(_it4)>;
  if (!((undefined !== s#1))) goto L_48b;
  if (!(!r(s#1))) goto L_480;
  return undefined;
  // [栈深重同步 0 -> 3]
  t[d] = s#1;
  if (!(<done(<?>)>)) goto L_45f;
  <value(<?>)>;
  return t;
}

// fn n  args=1 vars=2 closure=3 cpool=0 bc=874B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e
// locals: n
// closure: i, t, s
function {
  let n;
  n = i(e);
  if (!((undefined !== n))) goto L_369;
  n.interaction_type = e.interactionType;
  if (!((e.interactionType === t.FeedItemVisibilityType.Dwelled))) goto L_2fa;
  if ((!s(e.dwellStartedAt))) goto L_23d;
  if ((!s(e.dwellEndedAt))) goto L_23d;
  if ((("number" != typeof e.dwellMs))) goto L_23d;
  if ((!Number.isFinite(e.dwellMs))) goto L_23d;
  if (((e.dwellMs < 0))) goto L_23d;
  if (((undefined === e.endReason))) goto L_23d;
  if (!(!["exit_viewport_threshold", "feed_exit", "background", "content_replaced", "covered"].includes(e.endReason))) goto L_240;
  return;
  n.dwell_started_at = e.dwellStartedAt;
  n.dwell_ended_at = e.dwellEndedAt;
  n.dwell_ms = e.dwellMs;
  n.end_reason = e.endReason;
  goto L_365;
  if (!((e.interactionType !== t.FeedItemVisibilityType.Viewed))) goto L_365;
  return;
  return n;
  return;
}

// fn d  args=1 vars=1 closure=0 cpool=0 bc=17B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e
function {
  if (!(("string" == typeof e))) goto L_10;
  return (e.length > 0);
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=62B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e
function {
  if (!(("number" == typeof e))) goto L_3d;
  if (!(Number.isSafeInteger(e))) goto L_3d;
  return (e >= 0);
}

// fn s  args=1 vars=1 closure=0 cpool=0 bc=62B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: e
function {
  if (!(("number" == typeof e))) goto L_3d;
  if (!(Number.isSafeInteger(e))) goto L_3d;
  return (e >= 0);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=13 bc=206B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// args: require, module, exports
// locals: e, t, ExploreFeedInteractions, <class_fields_init>, ExploreFeedInteractions#1, i, n, d, r, s
function {
  i = function i;
  n = function n;
  d = function d;
  r = function r;
  s = function s;
  let ExploreFeedInteractions#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedInteractions = undefined;
  e = require("oai_platform_services/src/OAINetworkClient");
  t = require("./FeedItemVisibilityTracker");
  let ExploreFeedInteractions;
  let <class_fields_init>;
  class ExploreFeedInteractions extends undefined { ... }
  <proto:ExploreFeedInteractions>.sendVisibilityBatch = function <atom:0>;
  <proto:ExploreFeedInteractions>.sendFeedViewed = function <atom:0>;
  <proto:ExploreFeedInteractions>.sendFeedDwelled = function <atom:0>;
  <proto:ExploreFeedInteractions>.sendClicked = function <atom:0>;
  <proto:ExploreFeedInteractions>.sendFeedback = function <atom:0>;
  <proto:ExploreFeedInteractions>.send = function <atom:0>;
  <proto:ExploreFeedInteractions>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExploreFeedInteractions>;
  ExploreFeedInteractions = function <atom:0>;
  // close_loc <class_fields_init>
  ExploreFeedInteractions#1 = function <atom:0>;
  exports.ExploreFeedInteractions = ExploreFeedInteractions#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedInteractions
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
