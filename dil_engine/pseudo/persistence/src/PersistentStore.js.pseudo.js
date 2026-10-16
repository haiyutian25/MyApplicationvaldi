// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=persistence/src/PersistentStore
// args: e
function {
  e.AnyAppState = 0;
  e[0] = "AnyAppState";
  e.ForegroundOnly = 1;
  e[1] = "ForegroundOnly";
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=61B file=persistence/src/PersistentStore
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("PersistentStoreTemporarilyUnavailable");
  if (!(<class_fields_init>)) goto L_26;
  <class_fields_init>.call(this);
  new new.target("PersistentStoreTemporarilyUnavailable");
  this.name = "PersistentStoreTemporarilyUnavailableError";
  return this;
}

// fn n  args=1 vars=2 closure=2 cpool=0 bc=133B file=persistence/src/PersistentStore
// args: r
// locals: t
// closure: e, PersistentStoreTemporarilyUnavailableError
function {
  let t;
  t = e.toError(r);
  if (!(t.message.includes("PersistentStoreTemporarilyUnavailable"))) goto L_81;
  return new PersistentStoreTemporarilyUnavailableError();
  return t;
}

// fn <atom:0>  args=2 vars=9 closure=5 cpool=0 bc=600B file=persistence/src/PersistentStore
// args: e, r
// locals: o, l, a, c, u, p, this
// closure: <class_fields_init>, s, t, i, n
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let u;
  let c;
  let a;
  let l;
  let o;
  this.name = e;
  if (!((r == null))) goto L_35;
  r;
  goto L_56;
  o = undefined.disableBatchWrites;
  if (!((r == null))) goto L_62;
  r;
  goto L_83;
  l = (true === undefined.deviceGlobal);
  if (!((r == null))) goto L_8e;
  r;
  goto L_af;
  a = undefined.mockedTime;
  if (!((r == null))) goto L_b9;
  r;
  goto L_da;
  if (!((undefined.userId == null))) goto L_109;
  undefined.userId;
  if (!((r == null))) goto L_e8;
  r;
  goto L_109;
  c = undefined.mockedUserId;
  u = (false === l);
  if (!((r == null))) goto L_11b;
  r;
  goto L_13c;
  if (!((undefined.accessPolicy === s.ForegroundOnly))) goto L_199;
  if (!((true !== t.supportsForegroundAccess))) goto L_199;
  throw new Error("This runtime does not support foreground-only persistent storage.");
  try { // catch -> L_249
  if (!((o == null))) goto L_1ae;
  o;
  if (!((r == null))) goto L_1ba;
  r;
  goto L_1db;
  if (!((undefined.maxWeight == null))) goto L_1e1;
  undefined.maxWeight;
  if (!((r == null))) goto L_1f0;
  r;
  goto L_211;
  if (!((r == null))) goto L_21a;
  r;
  goto L_23b;
  this.native = i(e, false, u, 0, a, c, undefined.enableEncryption, undefined.accessPolicy);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  p = <?>;
  try { // catch -> L_257
  throw n(p);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=43B file=persistence/src/PersistentStore
// args: e, r, t, s
// locals: this
function {
  this = this;
  return this.storeInner(e, r, t, s);   // tail call
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=43B file=persistence/src/PersistentStore
// args: e, r, t, s
// locals: this
function {
  this = this;
  return this.storeInner(e, r, t, s);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=42B file=persistence/src/PersistentStore
// args: e
// locals: this
function {
  this = this;
  return this.fetchInner(e, false);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=42B file=persistence/src/PersistentStore
// args: e
// locals: this
function {
  this = this;
  return this.fetchInner(e, true);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=13B file=persistence/src/PersistentStore
// args: e
// closure: l, n, o
function {
  if (!(e)) goto L_a;
  goto L_c;
  // [栈深重同步 1 -> 0]
  o();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=7 cpool=1 bc=118B file=persistence/src/PersistentStore
// args: o, l
// closure: n, this, e, t, s, i, r
function {
  this.native.store(e, t, s, i, r.makeSingleCallInterruptibleCallback(function <atom:0>));
  return;
}

// fn <atom:0>  args=4 vars=5 closure=2 cpool=1 bc=14B file=persistence/src/PersistentStore
// args: e, t, s, i
// locals: this
// closure: n, r
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=16B file=persistence/src/PersistentStore
// args: e, r
// closure: s, i, n
function {
  if (!((undefined !== e))) goto L_a;
  goto L_f;
  // [栈深重同步 1 -> 0]
  i(n(r));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=5 cpool=1 bc=114B file=persistence/src/PersistentStore
// args: s, i
// closure: n, this, e, r, t
function {
  this.native.fetch(e, r.makeSingleCallInterruptibleCallback(function <atom:0>), t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=14B file=persistence/src/PersistentStore
// args: e, t
// locals: this
// closure: n, r
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=16B file=persistence/src/PersistentStore
// args: e, r
// closure: s, n, t
function {
  if (!((undefined !== r))) goto L_c;
  goto L_f;
  // [栈深重同步 1 -> 0]
  t(e);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=1 bc=111B file=persistence/src/PersistentStore
// args: t, s
// closure: n, this, e, r
function {
  this.native.exists(e, r.makeSingleCallInterruptibleCallback(function <atom:0>));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=14B file=persistence/src/PersistentStore
// args: e
// locals: this
// closure: n, r
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=13B file=persistence/src/PersistentStore
// args: e
// closure: s, n, t
function {
  if (!(e)) goto L_a;
  goto L_c;
  // [栈深重同步 1 -> 0]
  t();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=1 bc=111B file=persistence/src/PersistentStore
// args: t, s
// closure: n, this, e, r
function {
  this.native.remove(e, r.makeSingleCallInterruptibleCallback(function <atom:0>));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=14B file=persistence/src/PersistentStore
// args: e
// locals: this
// closure: n, r
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=13B file=persistence/src/PersistentStore
// args: r
// closure: t, n, e
function {
  if (!(r)) goto L_a;
  goto L_c;
  // [栈深重同步 1 -> 0]
  e();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=1 bc=110B file=persistence/src/PersistentStore
// args: e, t
// closure: n, this, r
function {
  this.native.removeAll(r.makeSingleCallInterruptibleCallback(function <atom:0>));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=14B file=persistence/src/PersistentStore
// locals: this
// closure: n, r
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=16B file=persistence/src/PersistentStore
// args: r, s
// closure: t, n, e
function {
  if (!((undefined !== s))) goto L_c;
  goto L_f;
  // [栈深重同步 1 -> 0]
  e(r);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=1 bc=110B file=persistence/src/PersistentStore
// args: e, t
// closure: n, this, r
function {
  this.native.fetchAll(r.makeSingleCallInterruptibleCallback(function <atom:0>));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=14B file=persistence/src/PersistentStore
// locals: this
// closure: n, r
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=10B file=persistence/src/PersistentStore
// args: e, r
// closure: PersistentStore
function {
  return new PersistentStore(e, r);
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=15 bc=393B file=persistence/src/PersistentStore
// args: require, module, exports
// locals: e, r, t, s, PersistentStoreTemporarilyUnavailableError, <class_fields_init>, PersistentStoreTemporarilyUnavailableError#1, n, i, PersistentStore, <class_fields_init>#1, PersistentStore#1
function {
  n = function n;
  let PersistentStore#1;
  let i;
  let PersistentStoreTemporarilyUnavailableError#1;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PersistentStoreAccessPolicy = undefined;
  exports.PersistentStoreTemporarilyUnavailableError = undefined;
  exports.PersistentStore = undefined;
  exports.createPersistentStoreUtil = undefined;
  e = require("valdi_core/src/utils/ErrorUtils");
  r = require("valdi_core/src/utils/FunctionUtils");
  t = require("PersistentStoreNative");
  if ((s)) goto L_a6;
  s = {};
  exports.PersistentStoreAccessPolicy = {};
  !function <atom:0>({});
  let PersistentStoreTemporarilyUnavailableError;
  let <class_fields_init>;
  class PersistentStoreTemporarilyUnavailableError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:PersistentStoreTemporarilyUnavailableError>;
  PersistentStoreTemporarilyUnavailableError = function <atom:0>;
  // close_loc <class_fields_init>
  PersistentStoreTemporarilyUnavailableError#1 = function <atom:0>;
  exports.PersistentStoreTemporarilyUnavailableError = PersistentStoreTemporarilyUnavailableError#1;
  i = t.newPersistentStore;
  let PersistentStore;
  let <class_fields_init>#1;
  class PersistentStore extends undefined { ... }
  <proto:PersistentStore>.store = function <atom:0>;
  <proto:PersistentStore>.storeString = function <atom:0>;
  <proto:PersistentStore>.fetch = function <atom:0>;
  <proto:PersistentStore>.fetchString = function <atom:0>;
  <proto:PersistentStore>.storeInner = function <atom:0>;
  <proto:PersistentStore>.fetchInner = function <atom:0>;
  <proto:PersistentStore>.exists = function <atom:0>;
  <proto:PersistentStore>.remove = function <atom:0>;
  <proto:PersistentStore>.removeAll = function <atom:0>;
  <proto:PersistentStore>.fetchAll = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:PersistentStore>;
  PersistentStore = function <atom:0>;
  // close_loc <class_fields_init>#1
  PersistentStore#1 = function <atom:0>;
  exports.PersistentStore = PersistentStore#1;
  exports.createPersistentStoreUtil = {createStore: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=persistence/src/PersistentStore
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
