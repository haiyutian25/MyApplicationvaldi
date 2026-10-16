// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=257B file=chatgpt_wallet/src/WalletCapabilities
// args: t
// closure: e, o, r
function {
  if (!((t === o.WalletConnectionOutcome.Connected))) goto L_6f;
  goto L_fe;
  // [栈深重同步 2 -> 1]
  if (!((t === o.WalletConnectionOutcome.Failed))) goto L_dc;
  goto L_fe;
  // [栈深重同步 2 -> 1]
  return e(r.Cancelled);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=8B file=chatgpt_wallet/src/WalletCapabilities
// args: e
// closure: o, r, t
function {
  return t(function <atom:0>);   // tail call
}

// fn l  args=1 vars=2 closure=3 cpool=1 bc=181B file=chatgpt_wallet/src/WalletCapabilities
// args: e
// locals: t
// closure: o, r, t
function {
  if (!(t.isVersionAtLeast(284))) goto L_b4;
  if (!((true === e.supportsConnectionResult))) goto L_b4;
  let t;
  if (!((e.connectWithResult == null))) goto L_81;
  e.connectWithResult;
  goto L_a6;
  t = undefined.bind(e);
  if (!((undefined !== t))) goto L_b1;
  return function <atom:0>;
  // close_loc t
  return;
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=79B file=chatgpt_wallet/src/WalletCapabilities
// args: e
// closure: t
function {
  if (!(t.isVersionAtLeast(271))) goto L_4d;
  return e.onCancelIntroduction;
  return undefined;
}

// fn s  args=1 vars=1 closure=1 cpool=0 bc=81B file=chatgpt_wallet/src/WalletCapabilities
// args: e
// closure: t
function {
  if (!(t.isVersionAtLeast(201))) goto L_50;
  return (undefined !== e.continueEnrollment);
}

// fn a  args=3 vars=4 closure=1 cpool=0 bc=206B file=chatgpt_wallet/src/WalletCapabilities
// args: e, n, o
// locals: t
// closure: t
function {
  if (!(t.isVersionAtLeast(201))) goto L_82;
  let t;
  if (!(o)) goto L_54;
  goto L_76;
  // [栈深重同步 1 -> 0]
  t = e.canStartEnrollment;
  if (!((undefined !== t))) goto L_82;
  return t;
  if (!(!n.isBusy)) goto L_cd;
  return (undefined === n.enrollment);
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=345B file=chatgpt_wallet/src/WalletCapabilities
// locals: o, t
// closure: e, t, n
function {
  let o;
  if (!((undefined !== e.continueEnrollment))) goto L_50;
  e.continueEnrollment();
  return;
  o = e.enrollmentHost;
  if (!(t.isVersionAtLeast(284))) goto L_db;
  let t;
  t = e.createEnrollmentHost;
  if (!((undefined !== t))) goto L_db;
  o = t();
  t();
  if (!((undefined === o))) goto L_db;
  return;
  if (!((undefined !== o))) goto L_133;
  if (!((undefined !== n.startEnrollment))) goto L_133;
  return n.startEnrollment(o, true);
  return n.beginEnrollment();
}

// fn c  args=2 vars=2 closure=1 cpool=1 bc=46B file=chatgpt_wallet/src/WalletCapabilities
// args: e, n
// closure: t
function {
  if (!(t.isVersionAtLeast(201))) goto L_2d;
  return function <atom:0>;
  return;
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_wallet/src/WalletCapabilities
// args: t
function {
  return t.navigator;
}

// fn d  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_wallet/src/WalletCapabilities
// args: t
function {
  return t.nativeMenuViewFactory;
}

// fn p  args=1 vars=1 closure=2 cpool=0 bc=80B file=chatgpt_wallet/src/WalletCapabilities
// args: t
// closure: e, n
function {
  if (!(e.supportsPlatformPrompt())) goto L_4f;
  return n.supportsNativeMenu(t);
}

// fn v  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_wallet/src/WalletCapabilities
// args: t
function {
  return t.rootSafeArea;
}

// fn m  args=2 vars=2 closure=0 cpool=0 bc=89B file=chatgpt_wallet/src/WalletCapabilities
// args: t, e
function {
  if (!((true === e.supportsContactSaveCompletion))) goto L_57;
  if (!((t == null))) goto L_31;
  t;
  goto L_52;
  if (!((undefined !== undefined.setPageVisibilityObserver))) goto L_57;
  return t;
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_wallet/src/WalletCapabilities
// args: t
function {
  t.Connected = 0;
  t[0] = "Connected";
  t.Failed = 1;
  t[1] = "Failed";
  t.Cancelled = 2;
  t[2] = "Cancelled";
  return;
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=11 bc=407B file=chatgpt_wallet/src/WalletCapabilities
// args: require, module, exports
// locals: t, e, n, o, r, l, i, s, a, c, u, d, p, v, m
function {
  l = function l;
  i = function i;
  s = function s;
  a = function a;
  c = function c;
  u = function u;
  d = function d;
  p = function p;
  v = function v;
  m = function m;
  let o;
  let n;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletSetupConnectionOutcome = undefined;
  exports.walletConnectionAction = undefined;
  exports.walletIntroductionCancelAction = undefined;
  exports.isWalletEnrollmentIntroduction = undefined;
  exports.walletEnrollmentAdmission = undefined;
  exports.walletEnrollmentAction = undefined;
  exports.walletNavigator = undefined;
  exports.walletNativeMenuViewFactory = undefined;
  exports.supportsGroupedWalletCards = undefined;
  exports.walletRootSafeArea = undefined;
  exports.walletAddressNavigator = undefined;
  t = require("valdi_core/src/CompilerIntrinsics");
  e = require("valdi_platform_alert/src/PlatformAlert");
  n = require("native_menu/src/NativeMenu");
  o = require("chatgpt_wallet_core/src/WalletHostService");
  if ((r)) goto L_11b;
  r = {};
  exports.WalletSetupConnectionOutcome = {};
  !function <atom:0>({});
  exports.walletConnectionAction = l;
  exports.walletIntroductionCancelAction = i;
  exports.isWalletEnrollmentIntroduction = s;
  exports.walletEnrollmentAdmission = a;
  exports.walletEnrollmentAction = c;
  exports.walletNavigator = u;
  exports.walletNativeMenuViewFactory = d;
  exports.supportsGroupedWalletCards = p;
  exports.walletRootSafeArea = v;
  exports.walletAddressNavigator = m;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletCapabilities
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
