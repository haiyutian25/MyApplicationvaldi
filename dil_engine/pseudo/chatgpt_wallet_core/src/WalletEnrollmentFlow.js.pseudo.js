// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=714B file=chatgpt_wallet_core/src/WalletEnrollmentFlow
// locals: t, t#1
// closure: this, o
function {
  let t;
  t = this.snapshot;
  if ((this.detached)) goto L_ec;
  if ((this.finished)) goto L_ec;
  if (((undefined === t))) goto L_ec;
  if (!(t.isBusy)) goto L_ec;
  if (!(!(true !== this.controller.canContinueEnrollment))) goto L_2c9;
  if (!((t.status === o.WalletStatus.Error))) goto L_1b2;
  this.opening = false;
  this.controller.refresh();
  return;
  if (!((t.status === o.WalletStatus.Ready))) goto L_2c9;
  let t#1;
  this.showsIntroduction = false;
  this.opening = true;
  t#1 = this.openForm();
  if ((this.detached)) goto L_2aa;
  if (!(this.finished)) goto L_2ba;
  if (!((t#1 == null))) goto L_2b7;
  t#1;
  goto L_2c8;
  goto L_2c8;
  // [栈深重同步 1 -> 0]
  this.closeForm = t#1;
  t#1;
  return;
}

// fn <atom:0>  args=5 vars=6 closure=4 cpool=1 bc=241B file=chatgpt_wallet_core/src/WalletEnrollmentFlow
// args: t, i, n, l, r
// locals: this
// closure: o, <class_fields_init>, e, s
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.controller = t;
  this.host = i;
  this.introductionSeen = n;
  this.openForm = l;
  this.release = r;
  this.observation = new e.Subscription();
  this.releaseNativeRefs = s.protectNativeRefsForCurrentContextId();
  this.opening = false;
  this.hasPresented = false;
  this.detached = false;
  this.finished = false;
  this.closeForm = undefined;
  this.continueEnrollment = function <atom:0>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_wallet_core/src/WalletEnrollmentFlow
// args: t
// closure: this
function {
  return this.finish(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=1272B file=chatgpt_wallet_core/src/WalletEnrollmentFlow
// args: t
// closure: this, o, n
function {
  this.snapshot = t;
  if (!((t.status !== o.WalletStatus.Unavailable))) goto L_4d2;
  if (((undefined !== this.showsIntroduction))) goto L_246;
  if (!(t.isBusy)) goto L_10f;
  if (((true !== this.controller.canContinueEnrollment))) goto L_246;
  if (!((t.status !== o.WalletStatus.Ready))) goto L_1ea;
  if (((t.status !== o.WalletStatus.NotConnected))) goto L_246;
  if (!(!this.introductionSeen)) goto L_23c;
  this.showsIntroduction = n.needsWalletSetup(t);
  n.needsWalletSetup(t);
  if (!((undefined !== t.enrollment))) goto L_356;
  if (!((undefined === this.session))) goto L_356;
  this.session = t.enrollment.session;
  this.session.waitUntilFinished().then(function <atom:0>);
  if (((false !== this.showsIntroduction))) goto L_482;
  if ((this.opening)) goto L_482;
  if (((t.status !== o.WalletStatus.Ready))) goto L_482;
  if (!(t.isBusy)) goto L_4ab;
  if (!((true !== this.controller.canContinueEnrollment))) goto L_4ab;
  goto L_4f7;
  // [栈深重同步 1 -> 0]
  goto L_4f7;
  // [栈深重同步 1 -> 0]
  this.cancel();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=181B file=chatgpt_wallet_core/src/WalletEnrollmentFlow
// locals: this
// closure: o, n
function {
  this = this;
  this.observation.add(this.controller.observeState().subscribe(function <atom:0>));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=252B file=chatgpt_wallet_core/src/WalletEnrollmentFlow
// locals: this
function {
  this = this;
  if ((this.detached)) goto L_fb;
  this.detached = true;
  this.observation.unsubscribe();
  if (!((this.closeForm == null))) goto L_a9;
  this.closeForm;
  this;
  goto L_ac;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  if (!((undefined === this.session))) goto L_fb;
  this.finish({});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_wallet_core/src/WalletEnrollmentFlow
// closure: this
function {
  return this.cancel();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=407B file=chatgpt_wallet_core/src/WalletEnrollmentFlow
// closure: this, e, i
function {
  if (!((e.enrollment == null))) goto L_13a;
  e.enrollment;
  goto L_15b;
  return this.host.present({showsIntroduction: (true === this.showsIntroduction), enrollment: e.enrollment, title: i.default.walletEnrollmentTitle(), errorMessage: e.errorMessage, allowsFormRequestedDismissal: (undefined === undefined.savedRegistrationId), continueEnrollment: this.continueEnrollment, cancel: function <atom:0>});   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=504B file=chatgpt_wallet_core/src/WalletEnrollmentFlow
// locals: e, n, o, this
// closure: i, s, t
function {
  this = this;
  let e;
  e = this.snapshot;
  if (!(!this.detached)) goto L_1f7;
  if (!(!this.finished)) goto L_1f7;
  if (!((undefined !== e))) goto L_1f7;
  if ((!this.introductionSeen)) goto L_11f;
  if ((this.hasPresented)) goto L_11f;
  if (((undefined !== e.enrollment))) goto L_11f;
  if (!((undefined !== e.errorMessage))) goto L_1f7;
  this.hasPresented = true;
  try { // catch -> L_15f
  s.withGlobalNativeRefs(function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_1f6
  try { // catch -> L_193
  this.cancel();
  <?>;
  goto L_1f4;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_1f3
  if (!(t.isLoggingEnabled)) goto L_1ef;
  console.warn("Wallet enrollment cleanup failed after presentation error");
  <?>;
  goto L_1f4;
  // [栈深重同步 0 -> 1]
  throw <?>;
  throw n;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=262B file=chatgpt_wallet_core/src/WalletEnrollmentFlow
// args: t
// locals: this
function {
  this = this;
  if (!(!this.finished)) goto L_105;
  this.finished = true;
  this.cancel();
  this.release();
  try { // catch -> L_d8
  this.host.finished(t);
  <?>;
  // gosub (finally 块) 222
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 222
  throw <?>;
  this.releaseNativeRefs();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=5 bc=246B file=chatgpt_wallet_core/src/WalletEnrollmentFlow
// args: require, module, exports
// locals: t, e, s, i, n, o, WalletEnrollmentFlow, <class_fields_init>, WalletEnrollmentFlow#1
function {
  let WalletEnrollmentFlow#1;
  let o;
  let n;
  let i;
  let s;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletEnrollmentFlow = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("valdi_rxjs/src/Subscription");
  s = require("valdi_core/src/NativeReferences");
  i = require("./Strings");
  n = require("./WalletHostState");
  o = require("./WalletModels");
  let WalletEnrollmentFlow;
  let <class_fields_init>;
  class WalletEnrollmentFlow extends undefined { ... }
  <proto:WalletEnrollmentFlow>.start = function <atom:0>;
  <proto:WalletEnrollmentFlow>.cancel = function <atom:0>;
  <proto:WalletEnrollmentFlow>.present = function <atom:0>;
  <proto:WalletEnrollmentFlow>.finish = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletEnrollmentFlow>;
  WalletEnrollmentFlow = function <atom:0>;
  // close_loc <class_fields_init>
  WalletEnrollmentFlow#1 = function <atom:0>;
  exports.WalletEnrollmentFlow = WalletEnrollmentFlow#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/WalletEnrollmentFlow
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
