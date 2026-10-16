// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=18B file=memory_settings_ui/src/MemorySettingsRepository
// closure: MemorySettingsRepository, s, a, o, e
function {
  return new MemorySettingsRepository(s, a, o, e);
}

// fn b  args=2 vars=4 closure=4 cpool=1 bc=183B file=memory_settings_ui/src/MemorySettingsRepository
// args: e, o
// locals: s, a
// closure: MemorySettingsRepository, i, t, r
function {
  let a;
  let s;
  s = i.keyedAccountSettingsFor(e);
  a = t.memoryInSearchAvailabilityFor(e);
  if (!((undefined !== e))) goto L_b6;
  if (!((undefined !== s))) goto L_b6;
  if (!((undefined !== a))) goto L_b6;
  return r.accountContainerFor(e).resolve(MemorySettingsRepository, function <atom:0>);   // tail call
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=60B file=memory_settings_ui/src/MemorySettingsRepository
// args: <atom:0>
// locals: e, r, t, i
// closure: this
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  return this.makeState(e, r, t, i);   // tail call
}

// fn <atom:0>  args=4 vars=5 closure=9 cpool=1 bc=663B file=memory_settings_ui/src/MemorySettingsRepository
// args: e, r, t, o
// locals: this
// closure: <class_fields_init>, n, s, i, S, d, u, c, M
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.accountSettings = e;
  this.goldenHourAvailable = t;
  this.platformServices = o;
  this.subscriptions = new n.Subscription();
  this.memoryStorage = new s.BehaviorSubject(undefined);
  this.storageGeneration = 0;
  this.disposed = false;
  this.improvedMemory = i.observeAccountSetting(e, i.AccountSettingKey.ImprovedMemory);
  if (!((o == null))) goto L_12b;
  o;
  goto L_14c;
  if (!((undefined !== undefined.apiService))) goto L_185;
  this.storageService = new S.MemoryStorageService(o);
  new S.MemoryStorageService(o);
  this.state = d.combineLatest([i.observeAccountSettings(e), this.improvedMemory, r, this.memoryStorage]).pipe(u.map(function <atom:0>), c.distinctUntilChanged(M));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=354B file=memory_settings_ui/src/MemorySettingsRepository
// args: e
// closure: this, i
function {
  if (((undefined !== e.settings))) goto L_72;
  if ((e.loading)) goto L_72;
  if (!((undefined !== e.failure))) goto L_11a;
  if (!(e.memoryAvailable)) goto L_161;
  if (!((undefined !== e.settings))) goto L_161;
  if (!((undefined === e.memoryStorage))) goto L_161;
  goto L_161;
  // [栈深重同步 1 -> 0]
  i.refreshAccountSettings(this.accountSettings);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=149B file=memory_settings_ui/src/MemorySettingsRepository
// locals: this
// closure: i, v
function {
  this = this;
  this.state.pipe(v.take(1)).subscribe(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=112B file=memory_settings_ui/src/MemorySettingsRepository
// locals: this
// closure: i
function {
  this = this;
  i.refreshAccountSettings(this.accountSettings);
  this.refreshMemoryStorage();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=116B file=memory_settings_ui/src/MemorySettingsRepository
// args: e
// closure: this
function {
  if (!((undefined !== e.settings))) goto L_73;
  if (!(e.memoryAvailable)) goto L_73;
  this.loadMemoryStorage();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=190B file=memory_settings_ui/src/MemorySettingsRepository
// locals: this
// closure: v
function {
  this = this;
  if ((this.disposed)) goto L_bd;
  this.state.pipe(v.take(1)).subscribe(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=509B file=memory_settings_ui/src/MemorySettingsRepository
// args: t
// closure: this, r, o, e
function {
  if ((this.disposed)) goto L_1fc;
  if (((r !== this.storageGeneration))) goto L_1fc;
  this.storageTask = undefined;
  if (!((t.kind !== o.OAINetworkResultKind.Success))) goto L_194;
  if (!(e.isLoggingEnabled)) goto L_1fc;
  goto L_1fc;
  // [栈深重同步 1 -> 0]
  this.memoryStorage.next(t.value);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=1 bc=330B file=memory_settings_ui/src/MemorySettingsRepository
// locals: r, t, this
// closure: o, e
function {
  this = this;
  let t;
  let r;
  if ((this.disposed)) goto L_7a;
  if (((undefined !== this.storageTask))) goto L_7a;
  if (!((undefined === this.storageService))) goto L_7d;
  return;
  this.storageGeneration = (this.storageGeneration ++);
  r = (this.storageGeneration ++);
  t = this.storageService.fetchMemoryStorage();
  this.storageTask = t;
  t.result.then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=263B file=memory_settings_ui/src/MemorySettingsRepository
// locals: e, this
function {
  this = this;
  let e;
  if (!(this.disposed)) goto L_2a;
  return;
  this.disposed = true;
  this.subscriptions.unsubscribe();
  this.storageGeneration = (this.storageGeneration ++);
  e = this.storageTask;
  this.storageTask = undefined;
  if (!((e == null))) goto L_e2;
  e;
  goto L_106;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=memory_settings_ui/src/MemorySettingsRepository
// args: r
// closure: this, e
function {
  return this.makeMemoryMutation(r, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=memory_settings_ui/src/MemorySettingsRepository
// args: e
function {
  return (undefined !== e);
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=87B file=memory_settings_ui/src/MemorySettingsRepository
// closure: h, this, e
function {
  if (!(e)) goto L_50;
  goto L_55;
  // [栈深重同步 3 -> 2]
  h.trackMemoryAnalyticsEvent(this.platformServices, "memory_disabled");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=memory_settings_ui/src/MemorySettingsRepository
// args: e
function {
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=265B file=memory_settings_ui/src/MemorySettingsRepository
// locals: r
// closure: e, i, this, r
function {
  let r;
  for (const r of e.dependents) {
    i.updateAccountSetting(this.accountSettings, r.setting, r.value);
  }
  r(e.primary.value);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=2 bc=185B file=memory_settings_ui/src/MemorySettingsRepository
// args: e
// closure: i, this, r, l, y
function {
  return this.commit(e.primary).pipe(l.filter(function <atom:0>), y.tap(function <atom:0>));   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=7 cpool=4 bc=414B file=memory_settings_ui/src/MemorySettingsRepository
// args: e, r
// locals: this
// closure: h, i, l, y, v, u, m
function {
  this = this;
  if ((this.disposed)) goto L_19d;
  this.subscriptions.add(this.state.pipe(v.take(1), u.map(function <atom:0>), l.filter(function <atom:0>), y.tap(function <atom:0>), m.concatMap(function <atom:0>)).subscribe());
  return;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=685B file=memory_settings_ui/src/MemorySettingsRepository
// args: e, r
// locals: t, o, s, this
// closure: i
function {
  this = this;
  let s;
  let o;
  let t;
  t = e.settings;
  if (!((t == null))) goto L_3a;
  t;
  goto L_5b;
  if (!((undefined === undefined.improvedMemoryEnabled))) goto L_5f;
  return;
  o = {setting: i.AccountSettingKey.ImprovedMemory, value: r};
  s = [];
  if ((r)) goto L_e1;
  if (!((true === t.improvedMemoryEnabled))) goto L_29b;
  if (!(this.goldenHourAvailable)) goto L_1b1;
  if (!((undefined !== t.goldenHourEnabled))) goto L_1b1;
  s.push({setting: i.AccountSettingKey.GoldenHour, value: r});
  if (!(!r)) goto L_288;
  if (!(e.memoryInSearchAvailable)) goto L_288;
  if (!((true === t.memoryInSearchEnabled))) goto L_288;
  s.push({setting: i.AccountSettingKey.MemoryInSearch, value: false});
  return {primary: o, dependents: s};
  return {primary: o, dependents: s};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=36B file=memory_settings_ui/src/MemorySettingsRepository
// args: e
function {
  return !e.loading;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=158B file=memory_settings_ui/src/MemorySettingsRepository
// args: <atom:0>
// locals: r, t, i
// closure: e
function {
  r = <to_object>(<atom:0>).value;
  t = <to_object>(<atom:0>).loading;
  i = <to_object>(<atom:0>).failure;
  <to_object>(<atom:0>);
  if (!(!t)) goto L_9d;
  if (((undefined !== i))) goto L_9d;
  return (r === e.value);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=42B file=memory_settings_ui/src/MemorySettingsRepository
// args: <atom:0>
// locals: e
function {
  e = <to_object>(<atom:0>).failure;
  <to_object>(<atom:0>);
  return (undefined === e);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=memory_settings_ui/src/MemorySettingsRepository
// closure: t
function {
  return t.unsubscribe();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=8 cpool=4 bc=447B file=memory_settings_ui/src/MemorySettingsRepository
// args: r
// locals: t
// closure: e, this, g, p, l, v, u, i
function {
  let t;
  t = this.improvedMemory.pipe(g.skip(1), p.skipWhile(function <atom:0>), l.filter(function <atom:0>), v.take(1), u.map(function <atom:0>)).subscribe(r);
  i.updateAccountSetting(this.accountSettings, e.setting, e.value);
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=2 closure=7 cpool=1 bc=45B file=memory_settings_ui/src/MemorySettingsRepository
// args: e
// locals: this
// closure: g, p, l, v, u, i, a
function {
  this = this;
  return new a.Observable(function <atom:0>);
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=502B file=memory_settings_ui/src/MemorySettingsRepository
// args: e, r, t, i
// locals: o
function {
  let o;
  if (!(r.hasResponse)) goto L_15c;
  if (!((undefined !== e.settings))) goto L_15c;
  if (!((r.value == null))) goto L_c5;
  r.value;
  goto L_15d;
  // [栈深重同步 1 -> 0]
  o = undefined;
  if (((undefined === o))) goto L_1e4;
  return {settings: o, loading: r.loading, failure: r.failure, memoryAvailable: (undefined !== o.improvedMemoryEnabled), memoryStorage: i, memoryInSearchAvailable: t};
}

// fn M  args=2 vars=2 closure=0 cpool=0 bc=1328B file=memory_settings_ui/src/MemorySettingsRepository
// args: e, r
function {
  if (!((e.loading === r.loading))) goto L_52f;
  if (!((e.failure == null))) goto L_76;
  e.failure;
  goto L_97;
  if (!((r.failure == null))) goto L_c1;
  r.failure;
  goto L_e2;
  if (!((undefined.kind === undefined.kind))) goto L_52f;
  if (!((e.memoryAvailable === r.memoryAvailable))) goto L_52f;
  if (!((e.memoryStorage == null))) goto L_160;
  e.memoryStorage;
  goto L_181;
  if (!((r.memoryStorage == null))) goto L_1ab;
  r.memoryStorage;
  goto L_1cc;
  if (!((undefined.usedTokens === undefined.usedTokens))) goto L_52f;
  if (!((e.memoryStorage == null))) goto L_1fe;
  e.memoryStorage;
  goto L_21f;
  if (!((r.memoryStorage == null))) goto L_249;
  r.memoryStorage;
  goto L_26a;
  if (!((undefined.maximumTokens === undefined.maximumTokens))) goto L_52f;
  if (!((e.memoryInSearchAvailable === r.memoryInSearchAvailable))) goto L_52f;
  if (!((e.settings == null))) goto L_2e8;
  e.settings;
  goto L_309;
  if (!((r.settings == null))) goto L_333;
  r.settings;
  goto L_354;
  if (!((undefined.improvedMemoryEnabled === undefined.improvedMemoryEnabled))) goto L_52f;
  if (!((e.settings == null))) goto L_386;
  e.settings;
  goto L_3a7;
  if (!((r.settings == null))) goto L_3d1;
  r.settings;
  goto L_3f2;
  if (!((undefined.improvedMemoryOptedOut === undefined.improvedMemoryOptedOut))) goto L_52f;
  if (!((e.settings == null))) goto L_424;
  e.settings;
  goto L_445;
  if (!((r.settings == null))) goto L_46f;
  r.settings;
  goto L_490;
  if (!((undefined.goldenHourEnabled === undefined.goldenHourEnabled))) goto L_52f;
  if (!((e.settings == null))) goto L_4c2;
  e.settings;
  goto L_4e3;
  if (!((r.settings == null))) goto L_50d;
  r.settings;
  goto L_52e;
  return (undefined.memoryInSearchEnabled === undefined.memoryInSearchEnabled);
}

// fn <atom:0>  args=3 vars=27 closure=0 cpool=12 bc=473B file=memory_settings_ui/src/MemorySettingsRepository
// args: require, module, exports
// locals: e, r, t, i, o, s, a, n, d, m, c, l, u, g, p, v, y, h, S, b, MemorySettingsRepository, <class_fields_init>, MemorySettingsRepository#1, M
function {
  b = function b;
  M = function M;
  let MemorySettingsRepository#1;
  let S;
  let h;
  let y;
  let v;
  let p;
  let g;
  let u;
  let l;
  let c;
  let m;
  let d;
  let n;
  let a;
  let s;
  let o;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.memorySettingsRepositoryFor = undefined;
  exports.MemorySettingsRepository = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  r = require("oai_platform_services/src/AccountContainer");
  t = require("oai_platform_services/src/AccountFeatures");
  i = require("oai_platform_services/src/AccountSettings");
  o = require("oai_platform_services/src/OAINetworkClient");
  s = require("valdi_rxjs/src/BehaviorSubject");
  a = require("valdi_rxjs/src/Observable");
  n = require("valdi_rxjs/src/Subscription");
  d = require("valdi_rxjs/src/observable/combineLatest");
  m = require("valdi_rxjs/src/operators/concatMap");
  c = require("valdi_rxjs/src/operators/distinctUntilChanged");
  l = require("valdi_rxjs/src/operators/filter");
  u = require("valdi_rxjs/src/operators/map");
  g = require("valdi_rxjs/src/operators/skip");
  p = require("valdi_rxjs/src/operators/skipWhile");
  v = require("valdi_rxjs/src/operators/take");
  y = require("valdi_rxjs/src/operators/tap");
  h = require("./MemoryAnalytics");
  S = require("./MemoryStorageService");
  exports.memorySettingsRepositoryFor = b;
  let MemorySettingsRepository;
  let <class_fields_init>;
  class MemorySettingsRepository extends undefined { ... }
  <proto:MemorySettingsRepository>.refreshIfNeeded = function <atom:0>;
  <proto:MemorySettingsRepository>.refresh = function <atom:0>;
  <proto:MemorySettingsRepository>.refreshMemoryStorage = function <atom:0>;
  <proto:MemorySettingsRepository>.loadMemoryStorage = function <atom:0>;
  <proto:MemorySettingsRepository>.dispose = function <atom:0>;
  <proto:MemorySettingsRepository>.setMemoryEnabled = function <atom:0>;
  <proto:MemorySettingsRepository>.makeMemoryMutation = function <atom:0>;
  <proto:MemorySettingsRepository>.commit = function <atom:0>;
  <proto:MemorySettingsRepository>.makeState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MemorySettingsRepository>;
  MemorySettingsRepository = function <atom:0>;
  // close_loc <class_fields_init>
  MemorySettingsRepository#1 = function <atom:0>;
  exports.MemorySettingsRepository = MemorySettingsRepository#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=memory_settings_ui/src/MemorySettingsRepository
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
