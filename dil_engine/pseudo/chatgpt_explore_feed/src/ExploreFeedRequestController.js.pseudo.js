// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// args: e
function {
  e.Idle = 0;
  e[0] = "Idle";
  e.Loading = 1;
  e[1] = "Loading";
  e.Loaded = 2;
  e[2] = "Loaded";
  e.Failed = 3;
  e[3] = "Failed";
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=228B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// args: s
// locals: this
// closure: <class_fields_init>, t, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.source = s;
  this.currentSnapshot = t;
  this.subject = new e.BehaviorSubject(t);
  this.state = this.subject.asObservable();
  this.generation = 0;
  this.disposed = false;
  this.providers = [];
  this.completedCursors = new Set();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// locals: this
function {
  this = this;
  return this.currentSnapshot;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=296B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// args: e
// locals: this
// closure: s
function {
  this = this;
  if ((this.disposed)) goto L_127;
  if (!((this.currentSnapshot.phase !== s.Idle))) goto L_fb;
  if (((this.currentSnapshot.phase !== s.Failed))) goto L_127;
  this.start(e, false);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=162B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// args: e
// locals: this
function {
  this = this;
  if (!((undefined !== this.lastSuccessfulLoadAt))) goto L_a1;
  if (!(((Date.now() - this.lastSuccessfulLoadAt) > e))) goto L_a1;
  this.reset();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=139B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// args: e
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_8a;
  if (!((undefined === this.activeTask))) goto L_78;
  goto L_8a;
  // [栈深重同步 1 -> 0]
  // append([], 0, e)
  e;
  this.queuedProviders = [];
  [];
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=119B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// args: e
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_76;
  this.reset();
  this.start(e, false);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// args: e
function {
  return e.id;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=1 bc=873B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// args: t
// locals: i, r, e
// closure: s, this, e
function {
  let r;
  let i;
  if (((s !== this.generation))) goto L_52;
  if (!(this.disposed)) goto L_55;
  return;
  this.activeTask = undefined;
  this.completedCursors.add(e);
  // append([], 0, this.currentSnapshot.cards)
  this.currentSnapshot.cards;
  i = [];
  r = new Set(i.map(function <atom:0>));
  let e;
  for (const e of t.items) {
    if ((r.has(e.id))) goto L_216;
    i.push(e);
    r.add(e.id);
  }
  null;
  this.currentSnapshot;
  if (((undefined === t.nextCursor))) goto L_2e8;
  if (!(this.completedCursors.has(t.nextCursor))) goto L_2ed;
  goto L_30f;
  // [栈深重同步 3 -> 2]
  this.currentSnapshot = {cards: i, isLoadingMore: false, nextCursor: t.nextCursor};
  this.emit();
  this.runQueuedReload();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=237B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// closure: s, this
function {
  if (((s !== this.generation))) goto L_ec;
  if ((this.disposed)) goto L_ec;
  this.activeTask = undefined;
  null;
  this.currentSnapshot;
  this.currentSnapshot = {isLoadingMore: false, loadMoreFailed: true};
  this.emit();
  this.runQueuedReload();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=2 bc=631B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// locals: e, s, t, this
function {
  this = this;
  let t;
  let s;
  let e;
  e = this.currentSnapshot.nextCursor;
  if ((this.disposed)) goto L_11a;
  if (((undefined !== this.activeTask))) goto L_11a;
  if (((undefined !== this.queuedProviders))) goto L_11a;
  if (((undefined === e))) goto L_11a;
  if (!(this.completedCursors.has(e))) goto L_11d;
  return;
  this.generation = (this.generation ++);
  s = (this.generation ++);
  t = this.source.load(this.providers, e);
  this.activeTask = t;
  null;
  this.currentSnapshot;
  this.currentSnapshot = {isLoadingMore: true, loadMoreFailed: false};
  this.emit();
  t.result.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=173B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// locals: this
// closure: t
function {
  this = this;
  this.cancelActiveRequest();
  this.lastSuccessfulLoadAt = undefined;
  this.currentSnapshot = t;
  this.completedCursors.clear();
  this.emit();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=123B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// locals: this
function {
  this = this;
  this.disposed = true;
  this.cancelActiveRequest();
  this.subject.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// args: e
// closure: this, i
function {
  return this.finishSuccess(e, i);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=41B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// closure: this, t, i
function {
  return this.finishFailure(t, i);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=2 bc=529B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// args: e, t
// locals: i, r, this
// closure: s
function {
  this = this;
  let r;
  let i;
  this.generation = (this.generation ++);
  i = (this.generation ++);
  // append([], 0, e)
  e;
  this.providers = [];
  r = this.source.load(this.providers, undefined);
  this.activeTask = r;
  null;
  this.currentSnapshot;
  if (!((0 === this.currentSnapshot.cards.length))) goto L_153;
  goto L_175;
  // [栈深重同步 3 -> 2]
  this.currentSnapshot = {phase: s.Loaded, reloadFailed: false, isRefreshing: t, isLoadingMore: false, loadMoreFailed: false};
  this.emit();
  r.result.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=490B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// args: e, t
// locals: this
// closure: s
function {
  this = this;
  if (((t !== this.generation))) goto L_1e9;
  if ((this.disposed)) goto L_1e9;
  this.activeTask = undefined;
  this.lastSuccessfulLoadAt = Date.now();
  this.completedCursors.clear();
  this.currentSnapshot = {cards: e.items, feedId: e.id, phase: s.Loaded, reloadFailed: false, isRefreshing: false, nextCursor: e.nextCursor, isLoadingMore: false, loadMoreFailed: false};
  this.emit();
  this.runQueuedReload();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=390B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// args: e, t
// locals: i, this
// closure: s
function {
  this = this;
  let i;
  if (((t !== this.generation))) goto L_4f;
  if (!(this.disposed)) goto L_52;
  return;
  this.activeTask = undefined;
  i = (this.currentSnapshot.cards.length > 0);
  null;
  this.currentSnapshot;
  if (!(i)) goto L_f6;
  goto L_118;
  // [栈深重同步 3 -> 2]
  if (!(e)) goto L_125;
  this.currentSnapshot = {phase: s.Failed, reloadFailed: i, isRefreshing: false};
  this.emit();
  this.runQueuedReload();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=103B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// locals: e, this
function {
  this = this;
  let e;
  e = this.queuedProviders;
  if (!((undefined !== e))) goto L_66;
  this.queuedProviders = undefined;
  this.start(e, true);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=149B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// locals: this
function {
  this = this;
  this.generation = (this.generation + 1);
  if (!((this.activeTask == null))) goto L_59;
  this.activeTask;
  goto L_7d;
  undefined.cancel();
  this.activeTask = undefined;
  this.queuedProviders = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=145B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_90;
  this.subject.next(this.currentSnapshot);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=16 bc=346B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// args: require, module, exports
// locals: e, s, t, ExploreFeedRequestController, <class_fields_init>, ExploreFeedRequestController#1
function {
  let ExploreFeedRequestController#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedLoadPhase = undefined;
  exports.ExploreFeedRequestController = undefined;
  e = require("valdi_rxjs/src/BehaviorSubject");
  if ((s)) goto L_73;
  s = {};
  exports.ExploreFeedLoadPhase = {};
  !function <atom:0>({});
  t = {cards: [], phase: s.Idle, reloadFailed: false, isRefreshing: false, isLoadingMore: false, loadMoreFailed: false};
  let ExploreFeedRequestController;
  let <class_fields_init>;
  class ExploreFeedRequestController extends undefined { ... }
  <proto:ExploreFeedRequestController>.snapshot = function <atom:0>;
  <proto:ExploreFeedRequestController>.loadIfNeeded = function <atom:0>;
  <proto:ExploreFeedRequestController>.resetIfStale = function <atom:0>;
  <proto:ExploreFeedRequestController>.reload = function <atom:0>;
  <proto:ExploreFeedRequestController>.selectProviders = function <atom:0>;
  <proto:ExploreFeedRequestController>.loadMore = function <atom:0>;
  <proto:ExploreFeedRequestController>.reset = function <atom:0>;
  <proto:ExploreFeedRequestController>.dispose = function <atom:0>;
  <proto:ExploreFeedRequestController>.start = function <atom:0>;
  <proto:ExploreFeedRequestController>.finishSuccess = function <atom:0>;
  <proto:ExploreFeedRequestController>.finishFailure = function <atom:0>;
  <proto:ExploreFeedRequestController>.runQueuedReload = function <atom:0>;
  <proto:ExploreFeedRequestController>.cancelActiveRequest = function <atom:0>;
  <proto:ExploreFeedRequestController>.emit = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExploreFeedRequestController>;
  ExploreFeedRequestController = function <atom:0>;
  // close_loc <class_fields_init>
  ExploreFeedRequestController#1 = function <atom:0>;
  exports.ExploreFeedRequestController = ExploreFeedRequestController#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedRequestController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
