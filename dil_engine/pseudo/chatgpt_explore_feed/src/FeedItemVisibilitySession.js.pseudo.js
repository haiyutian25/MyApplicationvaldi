// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
// args: e
// closure: this
function {
  return this.update(e);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=3 cpool=1 bc=314B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
// args: t, s, r
// locals: this
// closure: <class_fields_init>, i, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.batcher = s;
  this.feedDwell = r;
  this.generation = 0;
  this.locallyCovered = false;
  this.subject = new i.BehaviorSubject(0);
  this.changes = this.subject.asObservable();
  this.subscription = e.convertBridgeObservableToObservable(t.observeState()).subscribe(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
// locals: this
function {
  this = this;
  if (!((this.previous == null))) goto L_2b;
  this.previous;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.feedEntryId;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
// locals: this
function {
  this = this;
  return this.tracker;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=284B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
// locals: e, this
// closure: t
function {
  this = this;
  let e;
  e = this.previous;
  if (!((undefined !== e))) goto L_11b;
  if (!((e.presentation !== t.FeedItemVisibilityPresentation.Exited))) goto L_11b;
  return {sessionId: e.sessionId, feedEntryId: e.feedEntryId, entrypoint: e.entrypoint};
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=190B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
// locals: this
// closure: t
function {
  this = this;
  if (!(!this.locallyCovered)) goto L_bd;
  if (!((this.previous == null))) goto L_56;
  this.previous;
  goto L_77;
  return (undefined.presentation === t.FeedItemVisibilityPresentation.Visible);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
// locals: this
function {
  this = this;
  return this.generation;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=759B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
// args: e
// locals: this
// closure: s
function {
  this = this;
  if (!((this.locallyCovered !== e))) goto L_2f6;
  this.locallyCovered = e;
  if (!((undefined !== this.previous))) goto L_ed;
  this.feedDwell.update(this.previous, this.isVisible);
  if (!((this.tracker == null))) goto L_119;
  this.tracker;
  goto L_1a4;
  undefined.setPresented(this.isVisible, s.FeedItemVisibilityEndReason.Covered);
  if (!(e)) goto L_261;
  if (!((undefined !== this.previous))) goto L_261;
  this.batcher.flushVisit(this.previous.feedEntryId);
  this.generation = (this.generation ++);
  this.subject.next(this.generation);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=555B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
// locals: this
// closure: s
function {
  this = this;
  this.subscription.unsubscribe();
  this.feedDwell.dispose();
  if (!((this.tracker == null))) goto L_ba;
  this.tracker;
  goto L_123;
  undefined.close(s.FeedItemVisibilityEndReason.Covered);
  if (!((undefined !== this.previous))) goto L_1d8;
  this.batcher.flushVisit(this.previous.feedEntryId);
  this.previous = undefined;
  this.subject.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=41B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
function {
  return performance.now();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=41B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
function {
  return Date.now();   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=2 bc=2188B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
// args: e
// locals: i, r, n, this
// closure: t, s
function {
  this = this;
  let n;
  let r;
  let i;
  i = this.previous;
  if (!((i == null))) goto L_39;
  i;
  goto L_5a;
  r = (undefined.feedEntryId !== e.feedEntryId);
  if (!(!this.locallyCovered)) goto L_151;
  this.feedDwell.update(e, (e.presentation === t.FeedItemVisibilityPresentation.Visible));
  if (!(r)) goto L_34b;
  if (!((this.tracker == null))) goto L_189;
  this.tracker;
  goto L_1f2;
  undefined.close(s.FeedItemVisibilityEndReason.FeedExit);
  if (!((undefined !== i))) goto L_266;
  this.batcher.flushVisit(i.feedEntryId);
  this.tracker = new s.FeedItemVisibilityTracker({sessionId: e.sessionId, feedEntryId: e.feedEntryId, entrypoint: e.entrypoint}, {monotonicMs: function <atom:0>, utcMs: function <atom:0>}, this.batcher);
  new s.FeedItemVisibilityTracker({sessionId: e.sessionId, feedEntryId: e.feedEntryId, entrypoint: e.entrypoint}, {monotonicMs: function <atom:0>, utcMs: function <atom:0>}, this.batcher);
  if (!((e.presentation === t.FeedItemVisibilityPresentation.Background))) goto L_3fe;
  goto L_4f4;
  // [栈深重同步 1 -> 0]
  if (!((e.presentation === t.FeedItemVisibilityPresentation.Exited))) goto L_4af;
  goto L_4f4;
  // [栈深重同步 1 -> 0]
  n = s.FeedItemVisibilityEndReason.Covered;
  if (!((this.tracker == null))) goto L_520;
  this.tracker;
  goto L_5d6;
  if (!(!this.locallyCovered)) goto L_5d0;
  undefined.setPresented((e.presentation === t.FeedItemVisibilityPresentation.Visible), n);
  if (!((e.presentation === t.FeedItemVisibilityPresentation.Exited))) goto L_694;
  if (!((this.tracker == null))) goto L_66d;
  this.tracker;
  goto L_694;
  undefined.close(n);
  if ((this.locallyCovered)) goto L_723;
  if (!((e.presentation !== t.FeedItemVisibilityPresentation.Visible))) goto L_78f;
  this.batcher.flushVisit(e.feedEntryId);
  if ((r)) goto L_7e6;
  if (!((i == null))) goto L_7a2;
  i;
  goto L_7c3;
  if (!((undefined.presentation !== e.presentation))) goto L_817;
  this.generation = <this.generation_new>;
  (this.generation++);
  this.previous = e;
  this.subject.next(this.generation);
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=9 bc=218B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
// args: require, module, exports
// locals: e, i, t, s, FeedItemVisibilitySession, <class_fields_init>, FeedItemVisibilitySession#1
function {
  let FeedItemVisibilitySession#1;
  let s;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FeedItemVisibilitySession = undefined;
  e = require("bridge_observables/src/utils/convertBridgeObservableToObservable");
  i = require("valdi_rxjs/src/BehaviorSubject");
  t = require("./FeedItemVisibilityHost");
  s = require("./FeedItemVisibilityTracker");
  let FeedItemVisibilitySession;
  let <class_fields_init>;
  class FeedItemVisibilitySession extends undefined { ... }
  <proto:FeedItemVisibilitySession>.feedEntryId = function <atom:0>;
  <proto:FeedItemVisibilitySession>.activeTracker = function <atom:0>;
  <proto:FeedItemVisibilitySession>.interactionContext = function <atom:0>;
  <proto:FeedItemVisibilitySession>.isVisible = function <atom:0>;
  <proto:FeedItemVisibilitySession>.geometryGeneration = function <atom:0>;
  <proto:FeedItemVisibilitySession>.setLocallyCovered = function <atom:0>;
  <proto:FeedItemVisibilitySession>.dispose = function <atom:0>;
  <proto:FeedItemVisibilitySession>.update = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FeedItemVisibilitySession>;
  FeedItemVisibilitySession = function <atom:0>;
  // close_loc <class_fields_init>
  FeedItemVisibilitySession#1 = function <atom:0>;
  exports.FeedItemVisibilitySession = FeedItemVisibilitySession#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/FeedItemVisibilitySession
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
