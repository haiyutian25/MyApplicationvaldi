// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=chatgpt_wallet/src/WalletSetupModel
// args: t
function {
  t.Idle = 0;
  t[0] = "Idle";
  t.Refreshing = 1;
  t[1] = "Refreshing";
  t.Connecting = 2;
  t[2] = "Connecting";
  t.Opening = 3;
  t[3] = "Opening";
  t.Failed = 4;
  t[4] = "Failed";
  return;
}

// fn <atom:0>  args=3 vars=4 closure=4 cpool=0 bc=332B file=chatgpt_wallet/src/WalletSetupModel
// args: t, e, i
// locals: this
// closure: <class_fields_init>, r, n, s
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.controller = t;
  this.accountId = e;
  this.isEnrollmentIntroduction = i;
  this.active = true;
  this.available = true;
  this.pending = false;
  this.action = r.Idle;
  this.openingDispatchPending = false;
  this.observing = false;
  this.observation = new n.Subscription();
  this.hasRequestedLegacyConnection = false;
  this.state = new s.BehaviorSubject({action: r.Idle, isConnected: false, isEnabled: false, isLoading: false, errorMessage: undefined});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=chatgpt_wallet/src/WalletSetupModel
// locals: this
function {
  this = this;
  return this.state.value;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_wallet/src/WalletSetupModel
// locals: this
function {
  this = this;
  return this.latestSnapshot;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_wallet/src/WalletSetupModel
// locals: this
function {
  this = this;
  return this.active;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=189B file=chatgpt_wallet/src/WalletSetupModel
// locals: this
// closure: e
function {
  this = this;
  if (!(this.hasRequestedLegacyConnection)) goto L_bc;
  if (!((this.latestSnapshot == null))) goto L_55;
  this.latestSnapshot;
  goto L_76;
  return (undefined.status === e.WalletStatus.NotConnected);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=87B file=chatgpt_wallet/src/WalletSetupModel
// args: t
// closure: this
function {
  this.latestSnapshot = t;
  this.finishOpeningIfReady();
  this.publish();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=137B file=chatgpt_wallet/src/WalletSetupModel
// closure: t, this
function {
  if (!(t.isLoggingEnabled)) goto L_56;
  console.warn("Wallet setup observation failed");
  this.available = false;
  this.cancelWaiting();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_wallet/src/WalletSetupModel
// closure: this
function {
  return this.cancel();   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=371B file=chatgpt_wallet/src/WalletSetupModel
// args: t, e
function {
  if (!((t.action === e.action))) goto L_172;
  if (!((t.isConnected === e.isConnected))) goto L_172;
  if (!((t.isEnabled === e.isEnabled))) goto L_172;
  if (!((t.isLoading === e.isLoading))) goto L_172;
  return (t.errorMessage === e.errorMessage);
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=4 bc=378B file=chatgpt_wallet/src/WalletSetupModel
// locals: this
// closure: t, a
function {
  this = this;
  if ((this.observing)) goto L_10c;
  this.observing = true;
  this.observation.add(this.controller.observeState().subscribe({next: function <atom:0>, error: function <atom:0>, complete: function <atom:0>}));
  return this.state.pipe(a.distinctUntilChanged(function <atom:0>));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=91B file=chatgpt_wallet/src/WalletSetupModel
// args: t
// locals: this
function {
  this = this;
  if (!((this.available !== t))) goto L_5a;
  this.available = t;
  this.publish();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=161B file=chatgpt_wallet/src/WalletSetupModel
// locals: this
function {
  this = this;
  if (!(!!this.state.value.isEnabled)) goto L_a0;
  this.pending = true;
  this.publish();
  return true;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=89B file=chatgpt_wallet/src/WalletSetupModel
// args: t
// locals: this
function {
  this = this;
  if (!(this.active)) goto L_58;
  this.action = t;
  this.publish();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=595B file=chatgpt_wallet/src/WalletSetupModel
// args: t
// locals: i, this
// closure: r, e
function {
  this = this;
  if (!(this.active)) goto L_252;
  if (!(this.available)) goto L_252;
  if (!((this.action === r.Idle))) goto L_252;
  if (!((this.latestSnapshot == null))) goto L_c4;
  this.latestSnapshot;
  goto L_e5;
  if (!((undefined.status === e.WalletStatus.Ready))) goto L_252;
  if (!(this.canUseKnownState())) goto L_252;
  this.openingDispatchPending = true;
  this.setAction(r.Opening);
  try { // catch -> L_1bf
  t();
  <?>;
  // gosub (finally 块) 505
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_1f3
  this.action = r.Idle;
  throw i;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 505
  throw <?>;
  this.openingDispatchPending = false;
  this.finishOpeningIfReady();
  this.publish();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=392B file=chatgpt_wallet/src/WalletSetupModel
// args: t
// locals: e, this
// closure: n, r, i
function {
  this = this;
  let e;
  if (!(!this.active)) goto L_2c;
  return undefined; // async
  e = new n.Subscription();
  this.refreshSubscription = e;
  this.setAction(r.Refreshing);
  try { // catch -> L_102
  // gosub (finally 块) 264
  return (await i.refreshWalletState(this.controller, e, t)); // async
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 264
  throw <?>;
  if (!((this.refreshSubscription === e))) goto L_184;
  this.refreshSubscription = undefined;
  this.setAction(r.Idle);
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=5B file=chatgpt_wallet/src/WalletSetupModel
// closure: t
function {
  return t(undefined);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=98B file=chatgpt_wallet/src/WalletSetupModel
// args: e
// closure: this, i, t
function {
  if (!((this.cancelConnection === i))) goto L_36;
  this.cancelConnection = undefined;
  undefined;
  if (!(this.active)) goto L_5f;
  goto L_60;
  // [栈深重同步 2 -> 1]
  t(undefined);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=2 bc=31B file=chatgpt_wallet/src/WalletSetupModel
// args: t
// locals: i
// closure: this, e
function {
  let i;
  i = function <atom:0>;
  this.cancelConnection = i;
  e(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=499B file=chatgpt_wallet/src/WalletSetupModel
// args: t
// locals: e, this
// closure: o, r
function {
  this = this;
  let e;
  if (!(!this.active)) goto L_54;
  return Promise.resolve(undefined);   // tail call
  e = o.walletConnectionAction(t);
  if (!((undefined === e))) goto L_150;
  this.setAction(r.Idle);
  if (!(this.active)) goto L_124;
  this.hasRequestedLegacyConnection = true;
  t.connect();
  return Promise.resolve(undefined);
  this.setAction(r.Connecting);
  if (!(this.active)) goto L_1c8;
  return new Promise(function <atom:0>);
  return Promise.resolve(undefined);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=52B file=chatgpt_wallet/src/WalletSetupModel
// locals: this
function {
  this = this;
  this.pending = false;
  this.publish();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=194B file=chatgpt_wallet/src/WalletSetupModel
// locals: this
function {
  this = this;
  this.active = false;
  this.observation.unsubscribe();
  this.cancelWaiting();
  this.state.complete();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=221B file=chatgpt_wallet/src/WalletSetupModel
// locals: this
// closure: r
function {
  this = this;
  if (!((this.refreshSubscription == null))) goto L_2c;
  this.refreshSubscription;
  goto L_50;
  undefined.unsubscribe();
  if (!((this.cancelConnection == null))) goto L_7c;
  this.cancelConnection;
  this;
  goto L_7f;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.cancelConnection = undefined;
  this.action = r.Idle;
  this.publish();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=236B file=chatgpt_wallet/src/WalletSetupModel
// locals: t, this
// closure: o
function {
  this = this;
  let t;
  t = this.latestSnapshot;
  if (!((undefined !== t))) goto L_eb;
  if (!((t.accountId === this.accountId))) goto L_eb;
  return o.walletEnrollmentAdmission(this.controller, t, this.isEnrollmentIntroduction);
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=339B file=chatgpt_wallet/src/WalletSetupModel
// locals: t, this
// closure: r
function {
  this = this;
  let t;
  t = this.latestSnapshot;
  if (((this.action !== r.Opening))) goto L_152;
  if ((this.openingDispatchPending)) goto L_152;
  if (((undefined === t))) goto L_152;
  if (!(t.isBusy)) goto L_121;
  if (!((undefined === t.enrollment))) goto L_121;
  if (((undefined === t.errorMessage))) goto L_152;
  this.action = r.Idle;
  r.Idle;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=1470B file=chatgpt_wallet/src/WalletSetupModel
// locals: t, i, s, this
// closure: e, r
function {
  this = this;
  let s;
  let i;
  let t;
  t = this.latestSnapshot;
  if (!((t == null))) goto L_39;
  t;
  goto L_5a;
  if (((undefined.status === e.WalletStatus.Ready))) goto L_116;
  if (!((t == null))) goto L_af;
  t;
  goto L_d0;
  if (!((undefined.status === e.WalletStatus.NotConnected))) goto L_140;
  goto L_277;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== t))) goto L_277;
  if (((t.status === e.WalletStatus.Error))) goto L_224;
  if (!((t.status === e.WalletStatus.Loading))) goto L_277;
  if (!(!t.isBusy)) goto L_277;
  i = (undefined === t.enrollment);
  if (((this.action === r.Refreshing))) goto L_352;
  if (((this.action === r.Connecting))) goto L_352;
  s = (this.action === r.Opening);
  if (!((t == null))) goto L_3c9;
  t;
  goto L_3ea;
  if (!(this.active)) goto L_50c;
  if (!(this.available)) goto L_50c;
  if (!((t == null))) goto L_492;
  t;
  goto L_4b3;
  if (!((undefined.accountId === this.accountId))) goto L_50c;
  if (!(!this.pending)) goto L_50c;
  if (!(!s)) goto L_50c;
  if (!(this.active)) goto L_53a;
  if (!((this.action === r.Idle))) goto L_5b4;
  if (!((t == null))) goto L_591;
  t;
  goto L_5b5;
  goto L_5b5;
  // [栈深重同步 4 -> 3]
  this.state.next({action: this.action, isConnected: (undefined.status === e.WalletStatus.Ready), isEnabled: i, isLoading: s, errorMessage: undefined});
  return;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=19 bc=398B file=chatgpt_wallet/src/WalletSetupModel
// args: require, module, exports
// locals: t, e, i, s, n, a, o, r, WalletSetupModel, <class_fields_init>, WalletSetupModel#1
function {
  let WalletSetupModel#1;
  let o;
  let a;
  let n;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletSetupAction = undefined;
  exports.WalletSetupModel = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("chatgpt_wallet_core/src/WalletModels");
  i = require("chatgpt_wallet_core/src/WalletRefresh");
  s = require("valdi_rxjs/src/BehaviorSubject");
  n = require("valdi_rxjs/src/Subscription");
  a = require("valdi_rxjs/src/operators/distinctUntilChanged");
  o = require("./WalletCapabilities");
  if ((r)) goto L_db;
  r = {};
  exports.WalletSetupAction = {};
  !function <atom:0>({});
  let WalletSetupModel;
  let <class_fields_init>;
  class WalletSetupModel extends undefined { ... }
  <proto:WalletSetupModel>.value = function <atom:0>;
  <proto:WalletSetupModel>.snapshot = function <atom:0>;
  <proto:WalletSetupModel>.isActive = function <atom:0>;
  <proto:WalletSetupModel>.needsConnectionRefresh = function <atom:0>;
  <proto:WalletSetupModel>.observeState = function <atom:0>;
  <proto:WalletSetupModel>.setAvailable = function <atom:0>;
  <proto:WalletSetupModel>.start = function <atom:0>;
  <proto:WalletSetupModel>.setAction = function <atom:0>;
  <proto:WalletSetupModel>.openEnrollment = function <atom:0>;
  <proto:WalletSetupModel>.refresh = function <atom:0>;
  <proto:WalletSetupModel>.connect = function <atom:0>;
  <proto:WalletSetupModel>.finish = function <atom:0>;
  <proto:WalletSetupModel>.cancel = function <atom:0>;
  <proto:WalletSetupModel>.cancelWaiting = function <atom:0>;
  <proto:WalletSetupModel>.canUseKnownState = function <atom:0>;
  <proto:WalletSetupModel>.finishOpeningIfReady = function <atom:0>;
  <proto:WalletSetupModel>.publish = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletSetupModel>;
  WalletSetupModel = function <atom:0>;
  // close_loc <class_fields_init>
  WalletSetupModel#1 = function <atom:0>;
  exports.WalletSetupModel = WalletSetupModel#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletSetupModel
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
