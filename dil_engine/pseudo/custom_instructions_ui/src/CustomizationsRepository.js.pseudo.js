// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
function {
  e.Update = 0;
  e[0] = "Update";
  e.Enable = 1;
  e[1] = "Enable";
  e.Refresh = 2;
  e[2] = "Refresh";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
function {
  e.Retry = 0;
  e[0] = "Retry";
  e.Discard = 1;
  e[1] = "Discard";
  e.EndAccount = 2;
  e[2] = "EndAccount";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=77B file=custom_instructions_ui/src/CustomizationsRepository
// closure: d, this, e
function {
  return d.from(this.run(e));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=41B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: d, this, a
function {
  return a.defer(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=custom_instructions_ui/src/CustomizationsRepository
// closure: this
function {
  return this.releaseNativeRefs();   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=7 cpool=2 bc=496B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// locals: i, this
// closure: d, a, <class_fields_init>, r, n, t, h
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.service = e;
  this.state = new r.BehaviorSubject({pending: [], saving: false});
  this.requests = new n.Subject();
  this.ended = new n.Subject();
  this.pending = [];
  this.finishedRevisions = new WeakSet();
  this.disposed = false;
  this.releaseNativeRefs = t.protectNativeRefsForCurrentContextId();
  try { // catch -> L_1c1
  this.requests.pipe(h.concatMap(function <atom:0>)).subscribe({complete: function <atom:0>});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_1ef
  this.releaseNativeRefs();
  throw i;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=215B file=custom_instructions_ui/src/CustomizationsRepository
// closure: s, this, c, e
function {
  return s.observeAccountCustomizations(this.service).pipe(c.takeUntil(this.ended)).subscribe(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=116B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: s, this, c, t
function {
  if (!(!this.disposed)) goto L_4e;
  return t.withGlobalNativeRefs(function <atom:0>);   // tail call
  e.complete();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=45B file=custom_instructions_ui/src/CustomizationsRepository
// locals: this
// closure: s, c, t, o
function {
  this = this;
  return new o.Observable(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: this
function {
  return !this.finishedRevisions.has(e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: this
function {
  return !this.finishedRevisions.has(e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: s
function {
  return s.includes(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: t
function {
  return t.includes(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=2 bc=149B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: s, t
function {
  if ((e.sourceFields.some(function <atom:0>))) goto L_94;
  return e.sourceTraits.some(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=71B file=custom_instructions_ui/src/CustomizationsRepository
// args: i
// closure: e
function {
  return i.sourceFields.includes(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=43B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: r
function {
  return !r.some(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=71B file=custom_instructions_ui/src/CustomizationsRepository
// args: i
// closure: e
function {
  return i.sourceTraits.includes(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=43B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: r
function {
  return !r.some(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: this
function {
  return this.waitFor(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=custom_instructions_ui/src/CustomizationsRepository
function {
  return;
}

// fn <atom:0>  args=2 vars=9 closure=2 cpool=7 bc=781B file=custom_instructions_ui/src/CustomizationsRepository
// args: e, i
// locals: s, t, r, o, n, a, this
// closure: v, u
function {
  this = this;
  let a;
  let n;
  let o;
  let r;
  let t;
  let s;
  if (!(this.disposed)) goto L_65;
  return Promise.reject(v());   // tail call
  s = e.filter(function <atom:0>);
  t = i.filter(function <atom:0>);
  r = this.pending.filter(function <atom:0>);
  o = s.filter(function <atom:0>);
  n = t.filter(function <atom:0>);
  a = [];
  if (!(this.canRetryFor(s, t))) goto L_1d6;
  a.push(this.retryFailed());
  // append([], 0, r.map(function <atom:0>))
  r.map(function <atom:0>);
  a.push.apply(a, []);
  if (((o.length > 0))) goto L_23f;
  if (!((n.length > 0))) goto L_2ba;
  a.push(this.accept(u.Update, o, n, false));
  return Promise.all(a).then(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=113B file=custom_instructions_ui/src/CustomizationsRepository
// locals: this
// closure: u
function {
  this = this;
  if (!((this.failed == null))) goto L_2c;
  this.failed;
  goto L_4d;
  return (undefined.operation === u.Update);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=custom_instructions_ui/src/CustomizationsRepository
// args: i
// closure: e
function {
  return (i.field === e);
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=1 bc=267B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// locals: i, s, this
function {
  this = this;
  let i;
  i = (this.pending.length - 1);
  if (!((i >= 0))) goto L_e6;
  let s;
  s = this.pending[i].sourceFields.find(function <atom:0>);
  if (!((undefined !== s))) goto L_db;
  return this.commit([s], []);   // tail call
  i = <i_new>;
  (i--);
  goto L_2b;
  return this.waitForPending();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// locals: this
function {
  this = this;
  return this.finishedRevisions.has(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=81B file=custom_instructions_ui/src/CustomizationsRepository
// locals: this
// closure: u
function {
  this = this;
  return this.accept(u.Refresh, [], [], false);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=80B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// locals: this
// closure: u
function {
  this = this;
  return this.accept(u.Enable, [], [], e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: this
function {
  return this.waitFor(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=custom_instructions_ui/src/CustomizationsRepository
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=2 bc=153B file=custom_instructions_ui/src/CustomizationsRepository
// locals: this
function {
  this = this;
  return Promise.all(this.pending.map(function <atom:0>)).then(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=368B file=custom_instructions_ui/src/CustomizationsRepository
// locals: e, i, s, this
// closure: v, l
function {
  this = this;
  let s;
  let i;
  let e;
  if (!(this.disposed)) goto L_5a;
  return Promise.reject(v());   // tail call
  e = this.failed;
  i = this.recovery;
  if (((undefined === e))) goto L_ae;
  if (!((undefined === i))) goto L_d5;
  return this.waitForPending();   // tail call
  this.failed = undefined;
  this.failure = undefined;
  this.recovery = undefined;
  s = this.waitFor(e);
  this.publish();
  i(l.Retry);
  return s;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=298B file=custom_instructions_ui/src/CustomizationsRepository
// locals: e, i, this
// closure: l
function {
  this = this;
  let i;
  let e;
  if ((this.disposed)) goto L_52;
  if (!((undefined === this.recovery))) goto L_55;
  return;
  e = this.failed;
  i = this.recovery;
  this.recovery = undefined;
  i(l.Discard);
  if (!((undefined === e))) goto L_d6;
  return undefined;
  return {fields: e.sourceFields, traits: e.sourceTraits};
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=558B file=custom_instructions_ui/src/CustomizationsRepository
// locals: e, this
// closure: v, l
function {
  this = this;
  if (!(!this.disposed)) goto L_22d;
  this.disposed = true;
  this.ended.next();
  this.ended.complete();
  let e;
  for (const e of this.pending.slice(1)) {
    this.rejectWaiters(e, v());
  }
  if (!((this.recovery == null))) goto L_16e;
  this.recovery;
  this;
  goto L_193;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, l.EndAccount);
  this.recovery = undefined;
  this.requests.complete();
  this.state.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: i
function {
  return (e.field === i.field);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=39B file=custom_instructions_ui/src/CustomizationsRepository
// args: i
// closure: e
function {
  return e.some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=custom_instructions_ui/src/CustomizationsRepository
// args: i
// closure: e
function {
  return (i.traitKey === e.traitKey);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=39B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: i
function {
  return i.some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=2 bc=334B file=custom_instructions_ui/src/CustomizationsRepository
// args: e, i
// locals: this
// closure: u
function {
  this = this;
  if (!((this.failed == null))) goto L_2c;
  this.failed;
  goto L_4d;
  if (!((undefined.operation === u.Update))) goto L_14d;
  if (!(this.failed.fields.every(function <atom:0>))) goto L_14d;
  return this.failed.traits.every(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=8B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
function {
  null;
  e;
  return {};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=8B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
function {
  null;
  e;
  return {};
}

// fn <atom:0>  args=4 vars=7 closure=1 cpool=2 bc=522B file=custom_instructions_ui/src/CustomizationsRepository
// args: e, i, s, t
// locals: r, o, this
// closure: v
function {
  this = this;
  let o;
  let r;
  if (!(this.disposed)) goto L_57;
  return Promise.reject(v());   // tail call
  r = {operation: e, enabled: t, fields: i.map(function <atom:0>), traits: s.map(function <atom:0>), sourceFields: Array.from(i), sourceTraits: Array.from(s), waiters: []};
  this.pending.push(r);
  o = this.waitFor(r);
  this.publish();
  this.requests.next(r);
  return o;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=83B file=custom_instructions_ui/src/CustomizationsRepository
// args: i, s
// closure: e
function {
  return e.waiters.push({resolve: i, reject: s});   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=176B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// locals: this
// closure: v, p
function {
  this = this;
  if (!(this.disposed)) goto L_52;
  return Promise.reject(v());
  if (!((undefined !== this.failed))) goto L_a4;
  return Promise.reject(p());
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=custom_instructions_ui/src/CustomizationsRepository
// closure: s, this
function {
  return s.refreshAccountCustomizations(this.service);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=custom_instructions_ui/src/CustomizationsRepository
// closure: this, i
function {
  return this.invoke(i);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: this
function {
  this.recovery = e;
  return;
}

// fn <atom:0>  args=1 vars=7 closure=7 cpool=3 bc=1048B file=custom_instructions_ui/src/CustomizationsRepository
// args: i
// locals: r, o, s, e, t, this
// closure: s, u, t, p, e, l, v
function {
  this = this;
  let r;
  r = false;
  if (!(!this.disposed)) goto L_3ea;
  try { // catch -> L_137
  if (!(r)) goto L_dd;
  if (!((i.operation !== u.Refresh))) goto L_dd;
  if (!(!(await t.withGlobalNativeRefs(function <atom:0>)))) goto L_b4;
  throw p();
  if (!(this.disposed)) goto L_dd;
  <?>;
  goto L_3ea;
  if (!(!(await t.withGlobalNativeRefs(function <atom:0>)))) goto L_10b;
  throw p();
  this.finish(i, undefined);
  return undefined; // async
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_3e9
  let t;
  let s;
  if (!(this.disposed)) goto L_16c;
  <?>;
  goto L_3ea;
  if (!((i.operation === u.Refresh))) goto L_246;
  if (!(e.isLoggingEnabled)) goto L_20c;
  console.warn("Customization refresh failed");
  this.finish(i, new Error("Could not load customizations"));
  return undefined; // async
  if (!(e.isLoggingEnabled)) goto L_29c;
  console.warn("Customization operation failed; later edits are waiting for retry or discard");
  s = new Promise(function <atom:0>);
  this.failed = i;
  this.failure = p();
  let e;
  for (const e of this.pending) {
    this.rejectWaiters(e, p());
  }
  this.publish();
  t = (await s);
  if (!((t !== l.Retry))) goto L_3de;
  if (!((t === l.EndAccount))) goto L_3c9;
  goto L_3d7;
  // [栈深重同步 4 -> 3]
  this.finish(i, new Error("Customization edit discarded"));
  return undefined; // async
  r = true;
  true;
  <?>;
  goto L_9;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.finish(i, v());
  return undefined; // async
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=475B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// locals: this
// closure: u, s
function {
  this = this;
  if (!((e.operation === u.Update))) goto L_da;
  return s.updateAccountCustomizations(this.service, e.fields, e.traits);   // tail call
  if (!((e.operation === u.Enable))) goto L_16b;
  return s.setAccountCustomizationsEnabled(this.service, e.enabled);   // tail call
  if (!((e.operation === u.Refresh))) goto L_1da;
  return s.refreshAccountCustomizations(this.service);   // tail call
  e.operation;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=580B file=custom_instructions_ui/src/CustomizationsRepository
// args: e, i
// locals: s, s#1, this
function {
  this = this;
  this.pending.splice(this.pending.indexOf(e), 1);
  if (!((this.failed === e))) goto L_d0;
  this.failed = undefined;
  this.failure = undefined;
  undefined;
  let s;
  // append([], 0, e.sourceFields)
  // append([], e.sourceFields, e.sourceTraits)
  e.sourceTraits;
  for (const s of []) {
    this.finishedRevisions.add(s);
  }
  if (!((undefined === i))) goto L_1f6;
  let s#1;
  for (const s#1 of e.waiters.splice(0)) {
    s#1.resolve();
  }
  goto L_21e;
  this.rejectWaiters(e, i);
  this.publish();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=126B file=custom_instructions_ui/src/CustomizationsRepository
// args: e, i
// locals: s
function {
  let s;
  for (const s of e.waiters.splice(0)) {
    s.reject(i);
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: u
function {
  return (e.operation !== u.Refresh);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: u
function {
  return (e.operation !== u.Refresh);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=2 bc=348B file=custom_instructions_ui/src/CustomizationsRepository
// locals: this
// closure: u
function {
  this = this;
  if ((this.disposed)) goto L_15b;
  if (!(this.pending.some(function <atom:0>))) goto L_12c;
  this.state.next({pending: this.pending.filter(function <atom:0>), saving: (undefined === this.failed), failure: this.failure});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=75B file=custom_instructions_ui/src/CustomizationsRepository
// locals: i
// closure: s, e, CustomizationsRepository
function {
  let i;
  i = s.accountCustomizationsFor(e);
  if (!((undefined === i))) goto L_40;
  throw new Error("Account customizations are unavailable");
  return new CustomizationsRepository(i);
}

// fn f  args=1 vars=1 closure=3 cpool=1 bc=79B file=custom_instructions_ui/src/CustomizationsRepository
// args: e
// closure: s, CustomizationsRepository, i
function {
  return i.accountContainerFor(e).resolve(CustomizationsRepository, function <atom:0>);   // tail call
}

// fn p  args=0 vars=0 closure=0 cpool=0 bc=15B file=custom_instructions_ui/src/CustomizationsRepository
function {
  return new Error("Could not save customizations");
}

// fn v  args=0 vars=0 closure=0 cpool=0 bc=15B file=custom_instructions_ui/src/CustomizationsRepository
function {
  return new Error("Customization account scope ended");
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=25 bc=488B file=custom_instructions_ui/src/CustomizationsRepository
// args: require, module, exports
// locals: e, i, s, t, r, o, n, a, d, c, h, u, l, CustomizationsRepository, <class_fields_init>, CustomizationsRepository#1, f, p, v
function {
  f = function f;
  p = function p;
  v = function v;
  let CustomizationsRepository#1;
  let h;
  let c;
  let d;
  let a;
  let n;
  let o;
  let r;
  let t;
  let s;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CustomizationsRepository = undefined;
  exports.customizationsRepositoryFor = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("oai_platform_services/src/AccountContainer");
  s = require("oai_platform_services/src/AccountCustomizations");
  t = require("valdi_core/src/NativeReferences");
  r = require("valdi_rxjs/src/BehaviorSubject");
  o = require("valdi_rxjs/src/Observable");
  n = require("valdi_rxjs/src/Subject");
  a = require("valdi_rxjs/src/observable/defer");
  d = require("valdi_rxjs/src/observable/from");
  c = require("valdi_rxjs/src/operators/takeUntil");
  h = require("valdi_rxjs/src/operators/concatMap");
  if ((u)) goto L_10c;
  u = {};
  !function <atom:0>({});
  if ((l)) goto L_11a;
  l = {};
  function <atom:0>({});
  let CustomizationsRepository;
  let <class_fields_init>;
  class CustomizationsRepository extends undefined { ... }
  <proto:CustomizationsRepository>.observe = function <atom:0>;
  <proto:CustomizationsRepository>.commit = function <atom:0>;
  <proto:CustomizationsRepository>.hasFailedUpdates = function <atom:0>;
  <proto:CustomizationsRepository>.commitPendingField = function <atom:0>;
  <proto:CustomizationsRepository>.hasFinished = function <atom:0>;
  <proto:CustomizationsRepository>.refresh = function <atom:0>;
  <proto:CustomizationsRepository>.setEnabled = function <atom:0>;
  <proto:CustomizationsRepository>.waitForPending = function <atom:0>;
  <proto:CustomizationsRepository>.retryFailed = function <atom:0>;
  <proto:CustomizationsRepository>.discardFailed = function <atom:0>;
  <proto:CustomizationsRepository>.dispose = function <atom:0>;
  <proto:CustomizationsRepository>.canRetryFor = function <atom:0>;
  <proto:CustomizationsRepository>.accept = function <atom:0>;
  <proto:CustomizationsRepository>.waitFor = function <atom:0>;
  <proto:CustomizationsRepository>.run = function <atom:0>;
  <proto:CustomizationsRepository>.invoke = function <atom:0>;
  <proto:CustomizationsRepository>.finish = function <atom:0>;
  <proto:CustomizationsRepository>.rejectWaiters = function <atom:0>;
  <proto:CustomizationsRepository>.publish = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CustomizationsRepository>;
  CustomizationsRepository = function <atom:0>;
  // close_loc <class_fields_init>
  CustomizationsRepository#1 = function <atom:0>;
  exports.CustomizationsRepository = CustomizationsRepository#1;
  exports.customizationsRepositoryFor = f;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=custom_instructions_ui/src/CustomizationsRepository
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
