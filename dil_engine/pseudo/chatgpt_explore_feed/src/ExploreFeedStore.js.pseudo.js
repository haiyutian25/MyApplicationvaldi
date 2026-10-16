// fn o  args=1 vars=2 closure=2 cpool=0 bc=176B file=chatgpt_explore_feed/src/ExploreFeedStore
// args: r
// locals: t
// closure: e, s
function {
  let t;
  if (!((e.experimentLayer(r, "chatgpt_explore_feed_cache") == null))) goto L_36;
  e.experimentLayer(r, "chatgpt_explore_feed_cache");
  goto L_62;
  if (!((undefined.getNumber("ttl_minutes", s) == null))) goto L_6a;
  undefined.getNumber("ttl_minutes", s);
  t = s;
  if (!(Number.isFinite(t))) goto L_a7;
  if (!((t > 0))) goto L_a7;
  goto L_aa;
  // [栈深重同步 2 -> 1]
  return ((60 * s) * 1000);
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=69B file=chatgpt_explore_feed/src/ExploreFeedStore
// args: e, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.source = e;
  this.experimentService = r;
  this.feeds = new Map();
  this.disposed = false;
  return;
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=0 bc=511B file=chatgpt_explore_feed/src/ExploreFeedStore
// args: e
// locals: s, i, d, this
// closure: r, t, o
function {
  this = this;
  let d;
  let i;
  let s;
  if (!(this.disposed)) goto L_3e;
  throw new Error("Cannot open Explore for an inactive account");
  s = r.normalizeExploreFeedSelection(e);
  i = JSON.stringify(s);
  d = this.feeds.get(i);
  if (!((undefined === d))) goto L_183;
  d = new t.ExploreFeedRequestController(this.source);
  new t.ExploreFeedRequestController(this.source);
  this.feeds.set(i, d);
  d.resetIfStale(o(this.experimentService));
  d.loadIfNeeded(s);
  return d;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=208B file=chatgpt_explore_feed/src/ExploreFeedStore
// locals: e, this
function {
  this = this;
  this.disposed = true;
  let e;
  for (const e of this.feeds.values()) {
    e.dispose();
  }
  this.feeds.clear();
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=4 bc=169B file=chatgpt_explore_feed/src/ExploreFeedStore
// args: require, module, exports
// locals: e, r, t, s, o, ExploreFeedStore, <class_fields_init>, ExploreFeedStore#1
function {
  o = function o;
  let ExploreFeedStore#1;
  let s;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedStore = undefined;
  e = require("oai_platform_services/src/OAIExperimentService");
  r = require("./ExploreFeedApi");
  t = require("./ExploreFeedRequestController");
  s = 30;
  let ExploreFeedStore;
  let <class_fields_init>;
  class ExploreFeedStore extends undefined { ... }
  <proto:ExploreFeedStore>.feed = function <atom:0>;
  <proto:ExploreFeedStore>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExploreFeedStore>;
  ExploreFeedStore = function <atom:0>;
  // close_loc <class_fields_init>
  ExploreFeedStore#1 = function <atom:0>;
  exports.ExploreFeedStore = ExploreFeedStore#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedStore
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
