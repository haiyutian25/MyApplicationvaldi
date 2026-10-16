// fn r  args=1 vars=1 closure=1 cpool=0 bc=257B file=chatgpt_wallet_core/src/WalletHostState
// args: t
// closure: s
function {
  if (((t.status === s.WalletStatus.NotConnected))) goto L_100;
  if (!((t.status === s.WalletStatus.Ready))) goto L_100;
  return (0 === t.cards.length);
}

// fn o  args=1 vars=5 closure=6 cpool=0 bc=1445B file=chatgpt_wallet_core/src/WalletHostState
// args: t
// locals: e, o, e#1, a
// closure: a, i, r, n, s, l
function {
  let o;
  let e;
  if (!(a.isVersionAtLeast(171))) goto L_d4;
  if (!(r(t))) goto L_88;
  goto L_cd;
  // [栈深重同步 2 -> 1]
  goto L_d5;
  // [栈深重同步 1 -> 0]
  e = {};
  null;
  e;
  o = {status: t.status, cardCount: t.cards.length, enrollment: t.enrollment};
  if (!(a.isVersionAtLeast(223))) goto L_197;
  null;
  o;
  o = {summarySuggestsAction: r(t)};
  {summarySuggestsAction: r(t)};
  if (!(a.isVersionAtLeast(190))) goto L_520;
  let a;
  let e#1;
  if (((t.status === s.WalletStatus.Ready))) goto L_29f;
  e#1 = (t.status === s.WalletStatus.NotConnected);
  a = r(t);
  null;
  o;
  if (!(e#1)) goto L_3bc;
  if (!(a)) goto L_375;
  goto L_3bd;
  // [栈深重同步 2 -> 1]
  goto L_3bd;
  // [栈深重同步 2 -> 1]
  if (!(e#1)) goto L_465;
  if (!(a)) goto L_41a;
  goto L_51a;
  // [栈深重同步 2 -> 1]
  goto L_51a;
  // [栈深重同步 2 -> 1]
  if (!((t.status === s.WalletStatus.Unavailable))) goto L_519;
  goto L_51a;
  // [栈深重同步 2 -> 1]
  return {enrollmentTitle: l.default.walletEnrollmentTitle(), isBusy: t.isBusy, enrollmentIntent: undefined, enrollmentActionTitle: undefined};
  if (!(a.isVersionAtLeast(174))) goto L_5a1;
  null;
  o;
  return {enrollmentTitle: l.default.walletEnrollmentTitle()};
  return o;
}

// fn u  args=1 vars=2 closure=5 cpool=0 bc=611B file=chatgpt_wallet_core/src/WalletHostState
// args: t
// locals: e
// closure: o, a, s, l, n
function {
  let e;
  e = o(t);
  if (!(a.isVersionAtLeast(223))) goto L_47;
  null;
  e;
  e = {summarySuggestsAction: false};
  {summarySuggestsAction: false};
  null;
  e;
  if (((t.status === s.WalletStatus.Loading))) goto L_125;
  if (!((t.status === s.WalletStatus.Unavailable))) goto L_16e;
  goto L_190;
  // [栈深重同步 2 -> 1]
  if (!(a.isVersionAtLeast(171))) goto L_25c;
  goto L_25d;
  // [栈深重同步 2 -> 1]
  null;
  {};
  return {status: t.status};
}

// fn i  args=1 vars=1 closure=2 cpool=0 bc=623B file=chatgpt_wallet_core/src/WalletHostState
// args: t
// closure: s, l
function {
  if (!((t.status === s.WalletStatus.Ready))) goto L_1dd;
  if (!((0 === t.cards.length))) goto L_de;
  return l.default.walletSummarySetUp();
  if (!((1 === t.cards.length))) goto L_171;
  return l.default.walletSummaryOneCard(t.cards.length);
  return l.default.walletSummaryMultipleCards(t.cards.length);
  if (!((t.status === s.WalletStatus.NotConnected))) goto L_26e;
  return l.default.walletSummarySetUp();   // tail call
  t.status;
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=4 bc=325B file=chatgpt_wallet_core/src/WalletHostState
// args: require, module, exports
// locals: t, e, l, a, n, s, r, o, u, i
function {
  r = function r;
  o = function o;
  u = function u;
  i = function i;
  let s;
  let n;
  let a;
  let l;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.needsWalletSetup = undefined;
  exports.walletHostState = undefined;
  exports.walletComingSoonHostState = undefined;
  t = require("valdi_core/src/LocalizableStrings");
  e = require("valdi_core/src/localization/LocaleResolver");
  l = require("./Strings");
  a = require("valdi_core/src/CompilerIntrinsics");
  n = require("./WalletHostService");
  s = require("./WalletModels");
  t.overrideLocales(l.default, e.getCurrentLocales, "en");
  exports.needsWalletSetup = r;
  exports.walletHostState = o;
  exports.walletComingSoonHostState = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/WalletHostState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
