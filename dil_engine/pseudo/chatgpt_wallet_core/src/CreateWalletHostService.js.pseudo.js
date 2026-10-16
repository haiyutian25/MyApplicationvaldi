// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=201B file=chatgpt_wallet_core/src/CreateWalletHostService
// locals: r
// closure: a, e
function {
  try { // catch -> L_67
  if (!((a.experimentService == null))) goto L_2f;
  a.experimentService;
  goto L_5e;
  if (!((undefined.isFeatureFlagEnabled({flagName: "chatgpt-wallet-ecosystem-app"}) == null))) goto L_65;
  undefined.isFeatureFlagEnabled({flagName: "chatgpt-wallet-ecosystem-app"});
  return false;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_c8
  if (!(e.isLoggingEnabled)) goto L_c3;
  console.warn("Wallet feature flag could not be read; showing Coming soon");
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=98B file=chatgpt_wallet_core/src/CreateWalletHostService
// args: e
// closure: p, m, o
function {
  return e.withValue(p, {accountId: m.accountId, controller: m, isWalletEnabled: o});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=78B file=chatgpt_wallet_core/src/CreateWalletHostService
// args: e
// closure: m, t
function {
  m.setOrbitNameSource(t.convertBridgeObservableToObservable(e));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=92B file=chatgpt_wallet_core/src/CreateWalletHostService
// args: <atom:0>
// locals: e, r
// closure: u
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  if (!(r)) goto L_35;
  return u.walletHostState(e);
  return u.walletComingSoonHostState(e);
}

// fn <atom:0>  args=0 vars=2 closure=7 cpool=1 bc=254B file=chatgpt_wallet_core/src/CreateWalletHostService
// locals: e, t
// closure: u, o, c, m, r, i, n
function {
  let t;
  let e;
  e = o();
  c.next(e);
  t = m.observeState();
  return r.convertObservableToBridgeObservable(i.combineLatest([t, c]).pipe(n.map(function <atom:0>)));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=51B file=chatgpt_wallet_core/src/CreateWalletHostService
// locals: e
// closure: o, c
function {
  let e;
  e = o();
  c.next(e);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=422B file=chatgpt_wallet_core/src/CreateWalletHostService
// args: e, r
// closure: c, o, v, m
function {
  c.next(o());
  if (!((e === v.WalletCheckpoint.SurfaceVisible))) goto L_9f;
  m.observeState();
  e;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === v.WalletCheckpoint.AppForeground))) goto L_e9;
  return;
  // [栈深重同步 0 -> 1]
  if (((<?> === v.WalletCheckpoint.UserRefresh))) goto L_17b;
  if (!((<?> === v.WalletCheckpoint.ConnectionDismissed))) goto L_1a5;
  m.refreshInventory(r);
  return;
  // [栈深重同步 0 -> 1]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=98B file=chatgpt_wallet_core/src/CreateWalletHostService
// closure: d, b, m, c, r
function {
  if (!((d == null))) goto L_37;
  d;
  d = b.observeWalletSummary(m, c);
  b.observeWalletSummary(m, c);
  return r.convertObservableToBridgeObservable(d);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=95B file=chatgpt_wallet_core/src/CreateWalletHostService
// closure: g, b, m, r
function {
  if (!((g == null))) goto L_34;
  g;
  g = b.observeWalletChatEnrollmentElicitationAction(m);
  b.observeWalletChatEnrollmentElicitationAction(m);
  return r.convertObservableToBridgeObservable(g);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=119B file=chatgpt_wallet_core/src/CreateWalletHostService
// args: e
// closure: c, o, m
function {
  c.next(o());
  return (await m.refreshInventory(e)).outcome; // async
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_wallet_core/src/CreateWalletHostService
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=47B file=chatgpt_wallet_core/src/CreateWalletHostService
// closure: m
function {
  if (!((m.beginEnrollment() == null))) goto L_2e;
  m.beginEnrollment();
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=chatgpt_wallet_core/src/CreateWalletHostService
// args: e
// closure: m
function {
  return m.startEnrollment(e, false);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_wallet_core/src/CreateWalletHostService
// args: e
// closure: m
function {
  return m.enrollmentDismissed(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=81B file=chatgpt_wallet_core/src/CreateWalletHostService
// closure: c, l, S
function {
  c.complete();
  l.unregisterGlobalProviderSource(S);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=13 cpool=13 bc=262B file=chatgpt_wallet_core/src/CreateWalletHostService
// locals: o, c, d, g, S
// closure: a, e, p, m, t, u, r, i, n, v, b, l, s
function {
  let S;
  let g;
  let d;
  let c;
  let o;
  o = function <atom:0>;
  c = new s.BehaviorSubject(o());
  d = undefined;
  g = undefined;
  S = l.createGlobalProviderSource(undefined, function <atom:0>);
  return {providerSourceId: S, setOrbitNameSource: function <atom:0>, observeState: function <atom:0>, refresh: function <atom:0>, supportsCheckpoints: true, reportCheckpoint: function <atom:0>, supportsSurfaceModels: true, observeSummary: function <atom:0>, observeChatEnrollmentElicitationAction: function <atom:0>, refreshInventory: function <atom:0>, beginEnrollment: function <atom:0>, startEnrollment: function <atom:0>, enrollmentDismissed: function <atom:0>, dispose: function <atom:0>};
}

// fn m  args=1 vars=2 closure=14 cpool=1 bc=121B file=chatgpt_wallet_core/src/CreateWalletHostService
// args: a
// locals: m
// closure: e, p, t, u, r, i, n, v, b, l, s, c, o, d
function {
  let m;
  m = c.createWalletController(a);
  return o.accountContainerFor(a).resolve(d, function <atom:0>);   // tail call
}

// fn g  args=1 vars=1 closure=2 cpool=0 bc=110B file=chatgpt_wallet_core/src/CreateWalletHostService
// args: e
// closure: l, p
function {
  return l.getGlobalProviderSourceOrThrow(e.providerSourceId).getValue(p);   // tail call
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=2 bc=352B file=chatgpt_wallet_core/src/CreateWalletHostService
// args: require, module, exports
// locals: e, r, t, o, l, a, s, i, n, c, v, u, b, d, p, m, g
function {
  m = function m;
  g = function g;
  let p;
  let d;
  let b;
  let u;
  let v;
  let c;
  let n;
  let i;
  let s;
  let a;
  let l;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createWalletHostService = undefined;
  exports.walletBindingForHost = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  r = require("bridge_observables/src/utils/convertObservableToBridgeObservable");
  t = require("bridge_observables/src/utils/convertBridgeObservableToObservable");
  o = require("oai_platform_services/src/AccountContainer");
  l = require("valdi_core/src/provider/GlobalProviderSource");
  a = require("valdi_core/src/provider/ProviderKey");
  s = require("valdi_rxjs/src/BehaviorSubject");
  i = require("valdi_rxjs/src/observable/combineLatest");
  n = require("valdi_rxjs/src/operators/map");
  c = require("./CreateWalletController");
  v = require("./WalletHostService");
  u = require("./WalletHostState");
  b = require("./WalletSurfaceModels");
  d = {};
  p = a.createProviderKey("chatgpt_wallet.controller.v2");
  exports.createWalletHostService = m;
  exports.walletBindingForHost = g;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/CreateWalletHostService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
