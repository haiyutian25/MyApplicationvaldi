// fn <atom:0>  args=8 vars=9 closure=1 cpool=0 bc=123B file=worker/src/internal/ManagedWorkerService
// args: e, r, i, s, t, a, n, o
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.serviceId = e;
  this.file = r;
  this.className = i;
  this.api = s;
  this.servicePromise = t;
  this.serviceArguments = a;
  this.nativeRefsDisposable = n;
  this.managedWorker = o;
  this.retainCount = 0;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=7 cpool=0 bc=141B file=worker/src/internal/ManagedWorkerService
// args: i, a
// locals: o
// closure: c, l, e, r, t, n, s
function {
  let o;
  o = c(l, e, r, t, i, a);
  if (!(n)) goto L_64;
  goto L_8c;
  // [栈深重同步 1 -> 0]
  s.processWorkerServiceExecutorTask(o);
  return;
}

// fn <atom:0>  args=4 vars=8 closure=6 cpool=1 bc=296B file=worker/src/internal/ManagedWorkerService
// args: e, r, t, n
// locals: l, d, v, u
// closure: c, s, a, i, ManagedWorkerService, o
function {
  let u;
  let v;
  let d;
  let l;
  if (!((a.$managedServiceWorkerSequence == null))) goto L_36;
  a.$managedServiceWorkerSequence;
  l = (0 + 1);
  d = i.protectNativeRefsForCurrentContextId();
  if (!(n)) goto L_89;
  n.onUsed();
  v = new Promise(function <atom:0>);
  u = new ManagedWorkerService(l, e, r, o(v), v, t, d, n);
  a.$managedServiceWorkerSequence = l;
  if ((a.$managedServiceWorkers)) goto L_f7;
  a.$managedServiceWorkers = {};
  {};
  a.$managedServiceWorkers[l] = u;
  return u;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=132B file=worker/src/internal/ManagedWorkerService
// args: e, r, i
// locals: s
// closure: a
function {
  let s;
  s = a.$managedServiceWorkers[e];
  if (!(s)) goto L_83;
  if (!((s.file === r))) goto L_83;
  if (!((s.className === i))) goto L_83;
  return s;
  return;
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=223B file=worker/src/internal/ManagedWorkerService
// args: e, r, i
// locals: s, t, a
// closure: a
function {
  let s;
  s = a.$managedServiceWorkers;
  if (!(s)) goto L_de;
  let t;
  for (const t of s) {
    let a;
    a = s[t];
    if (!(a)) goto L_d5;
    if (!((a.file === e))) goto L_d5;
    if (!((a.className === r))) goto L_d5;
    i(Number.parseInt(t), a);
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=worker/src/internal/ManagedWorkerService
// args: e
// closure: i
function {
  i.push(e);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=55B file=worker/src/internal/ManagedWorkerService
// args: e, r
// locals: i, this
function {
  this = this;
  let i;
  i = [];
  this.forEachWithFileAndClassName(e, r, function <atom:0>);
  return i;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=47B file=worker/src/internal/ManagedWorkerService
// locals: this
function {
  this = this;
  this.retainCount = (this.retainCount ++);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=205B file=worker/src/internal/ManagedWorkerService
// args: r
// closure: e, this
function {
  if (!(e.isLoggingEnabled)) goto L_cc;
  console.warn("Unable to release worker service ".concat(this.className, " (", this.serviceId, ")"), r);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=237B file=worker/src/internal/ManagedWorkerService
// locals: this
// closure: e, a
function {
  this = this;
  this.retainCount = (this.retainCount --);
  if (!((0 === this.retainCount))) goto L_ec;
  delete this.serviceId;
  // [栈深重同步 2 -> 1]
  a.$managedServiceWorkers;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=11B file=worker/src/internal/ManagedWorkerService
// locals: this
// closure: WorkerServiceClient
function {
  this = this;
  return new WorkerServiceClient(this);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=238B file=worker/src/internal/ManagedWorkerService
// locals: this
function {
  this = this;
  try { // catch -> L_5a
  (await this.servicePromise).dispose();
  <?>;
  // gosub (finally 块) 96
  undefined;
  goto L_ec;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 96
  throw <?>;
  try { // catch -> L_95
  this.nativeRefsDisposable();
  <?>;
  // gosub (finally 块) 155
  undefined;
  goto L_eb;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 155
  throw <?>;
  if (!((this.managedWorker == null))) goto L_c5;
  this.managedWorker;
  goto L_e9;
  undefined.onUnused();
  // ret (finally 块) 
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=108B file=worker/src/internal/ManagedWorkerService
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.serviceId = e.serviceId;
  this.client = e;
  e.retain();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=worker/src/internal/ManagedWorkerService
// locals: this
function {
  this = this;
  return this.client.api;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=124B file=worker/src/internal/ManagedWorkerService
// locals: this
function {
  this = this;
  if (!(this.client)) goto L_7b;
  this.client.release();
  this.client = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=294B file=worker/src/internal/ManagedWorkerService
// args: r
// locals: i, n
// closure: e, t, a, s
function {
  let n;
  let i;
  i = r.api;
  if (!(!i)) goto L_8c;
  throw new Error("Cannot call ".concat(e.toString(), ": WorkerService was disposed"));
  n = i[e];
  if (!(!n)) goto L_f5;
  throw new Error("Cannot call ".concat(e.toString(), ": WorkerService does not expose this method"));
  return t.forwardCallToService(i, n, a, s);   // tail call
}

// fn s  args=1 vars=3 closure=4 cpool=1 bc=133B file=worker/src/internal/ManagedWorkerService
// args: s
// locals: a, n
// closure: e, t, r, i
function {
  s = ...0;
  let n;
  let a;
  a = new r.PromiseCanceler();
  n = i.then(function <atom:0>);
  return a.toCancelablePromise(n);   // tail call
}

// fn n  args=2 vars=3 closure=2 cpool=1 bc=60B file=worker/src/internal/ManagedWorkerService
// args: e, i
// locals: s
// closure: t, r
function {
  s = function s;
  Object.defineProperty(s, "name", {value: e});
  return s;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=78B file=worker/src/internal/ManagedWorkerService
// args: r, i
// locals: s
// closure: t, n, e
function {
  let s;
  s = r[i];
  if ((s)) goto L_49;
  if (!(t.canBeUsedAsProxyMethod(i))) goto L_49;
  s = n(i, e);
  n(i, e);
  r[i] = s;
  s;
  return s;
}

// fn o  args=1 vars=1 closure=2 cpool=1 bc=20B file=worker/src/internal/ManagedWorkerService
// args: e
// closure: t, n
function {
  return new Proxy({}, {get: function <atom:0>});
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=230B file=worker/src/internal/ManagedWorkerService
// args: e, r
// locals: e#1, r#1, s, i
// closure: a, t
function {
  if (!(r)) goto L_67;
  let e#1;
  e#1 = new Error(r.message);
  e#1.stack = r.stack;
  a(e#1);
  return;
  let s;
  let r#1;
  r#1 = e;
  s = undefined;
  try { // catch -> L_d1
  s = {api: r#1.api, dispose: r#1.dispose};
  {api: r#1.api, dispose: r#1.dispose};
  <?>;
  goto L_df;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_de
  a(i);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  t(s);
  return;
}

// fn c  args=6 vars=6 closure=0 cpool=1 bc=38B file=worker/src/internal/ManagedWorkerService
// args: e, r, i, s, t, a
function {
  return {serviceId: e, file: r, className: i, args: s, callback: function <atom:0>};
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=15 bc=344B file=worker/src/internal/ManagedWorkerService
// args: require, module, exports
// locals: e, r, i, s, t, a, ManagedWorkerService, <class_fields_init>, ManagedWorkerService#1, WorkerServiceClient, <class_fields_init>#1, WorkerServiceClient#1, n, o, c
function {
  n = function n;
  o = function o;
  c = function c;
  let WorkerServiceClient#1;
  let ManagedWorkerService#1;
  let a;
  let t;
  let s;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ManagedWorkerService = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  r = require("valdi_core/src/CancelablePromise");
  i = require("valdi_core/src/NativeReferences");
  s = require("../WorkerServiceExecutor");
  t = require("../utils/WorkerServiceBridgeUtils");
  a = globalThis;
  let ManagedWorkerService;
  let <class_fields_init>;
  class ManagedWorkerService extends undefined { ... }
  function <atom:0>.create = function <atom:0>;
  function <atom:0>.fromId = function <atom:0>;
  function <atom:0>.forEachWithFileAndClassName = function <atom:0>;
  function <atom:0>.getAllIdsForFileAndClassName = function <atom:0>;
  <proto:ManagedWorkerService>.retain = function <atom:0>;
  <proto:ManagedWorkerService>.release = function <atom:0>;
  <proto:ManagedWorkerService>.makeClient = function <atom:0>;
  <proto:ManagedWorkerService>.disposeService = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ManagedWorkerService>;
  ManagedWorkerService = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc ManagedWorkerService
  ManagedWorkerService#1 = function <atom:0>;
  exports.ManagedWorkerService = ManagedWorkerService#1;
  let WorkerServiceClient;
  let <class_fields_init>#1;
  class WorkerServiceClient extends undefined { ... }
  <proto:WorkerServiceClient>.api = function <atom:0>;
  <proto:WorkerServiceClient>.dispose = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:WorkerServiceClient>;
  WorkerServiceClient = function <atom:0>;
  // close_loc <class_fields_init>#1
  WorkerServiceClient#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=worker/src/internal/ManagedWorkerService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
