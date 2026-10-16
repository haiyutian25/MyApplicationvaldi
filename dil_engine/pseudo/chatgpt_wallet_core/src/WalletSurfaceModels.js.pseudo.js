// fn <atom:0>  args=1 vars=5 closure=6 cpool=0 bc=1493B file=chatgpt_wallet_core/src/WalletSurfaceModels
// args: <atom:0>
// locals: t, e, a, n
// closure: l, r, s, d, o, i
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  e = <value(_it1)>;
  let n;
  let a;
  if (!(!e)) goto L_bf;
  return {text: l.default.walletSummaryComingSoon(), suggestsAction: false, destination: r.WalletEntryDestination.Setup, isLoading: false};
  a = s.walletHostState(t);
  if (!((undefined !== a.summaryText))) goto L_1e7;
  if (!((a.entryDestination == null))) goto L_1d7;
  a.entryDestination;
  d = {text: a.summaryText, suggestsAction: (true === a.summarySuggestsAction), destination: r.WalletEntryDestination.Management, isLoading: false};
  {text: a.summaryText, suggestsAction: (true === a.summarySuggestsAction), destination: r.WalletEntryDestination.Management, isLoading: false};
  n = ("customize" === o.refreshSource);
  if (((undefined === d))) goto L_2fb;
  if (((t.status === i.WalletStatus.Unavailable))) goto L_2fb;
  if (!((t.status === i.WalletStatus.Error))) goto L_576;
  if (!(n)) goto L_576;
  if (!((t.status === i.WalletStatus.Unavailable))) goto L_3b6;
  goto L_4b2;
  // [栈深重同步 4 -> 1]
  if (!((t.status === i.WalletStatus.Error))) goto L_46a;
  goto L_4b2;
  // [栈深重同步 2 -> 1]
  _it1.text = l.default.walletSummaryLoading();
  _it1.suggestsAction = false;
  _it1.destination = r.WalletEntryDestination.Management;
  _it1.isLoading = (t.status === i.WalletStatus.Loading);
  return _it1;
  null;
  d;
  if (!(n)) goto L_5cf;
  if (!((t.isRefreshing == null))) goto L_5cf;
  t.isRefreshing;
  return {isLoading: t.isBusy};
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=295B file=chatgpt_wallet_core/src/WalletSurfaceModels
// args: t, e
function {
  if (!((t.text === e.text))) goto L_126;
  if (!((t.suggestsAction === e.suggestsAction))) goto L_126;
  if (!((t.destination === e.destination))) goto L_126;
  return (t.isLoading === e.isLoading);
}

// fn o  args=2 vars=3 closure=8 cpool=2 bc=248B file=chatgpt_wallet_core/src/WalletSurfaceModels
// args: o, u
// locals: d
// closure: l, r, s, i, t, a, e, n
function {
  let d;
  d = undefined;
  return t.combineLatest([o.observeState(), u]).pipe(a.map(function <atom:0>), e.distinctUntilChanged(function <atom:0>), n.shareReplay({bufferSize: 1, refCount: true}));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=780B file=chatgpt_wallet_core/src/WalletSurfaceModels
// args: e
// locals: a
// closure: s, r, i, l, t
function {
  let a;
  a = s.walletHostState(e);
  if (!((undefined !== a.enrollmentIntent))) goto L_b2;
  r = {title: a.enrollmentActionTitle, intent: a.enrollmentIntent, isEnabled: false};
  {title: a.enrollmentActionTitle, intent: a.enrollmentIntent, isEnabled: false};
  if (!((e.status === i.WalletStatus.Unavailable))) goto L_173;
  return {title: l.default.walletEnrollmentUnavailable(), isEnabled: false};
  if (!((a.enrollmentActionTitle == null))) goto L_1c9;
  a.enrollmentActionTitle;
  if (!((r == null))) goto L_1a8;
  r;
  goto L_1c9;
  if (!((a.enrollmentIntent == null))) goto L_223;
  a.enrollmentIntent;
  if (!((r == null))) goto L_202;
  r;
  goto L_223;
  if (!((e.status === i.WalletStatus.Error))) goto L_305;
  goto L_306;
  // [栈深重同步 2 -> 1]
  return {title: undefined.title, intent: undefined.intent, isEnabled: t.canStartEnrollment, errorMessage: undefined};
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=295B file=chatgpt_wallet_core/src/WalletSurfaceModels
// args: t, e
function {
  if (!((t.title === e.title))) goto L_126;
  if (!((t.intent === e.intent))) goto L_126;
  if (!((t.isEnabled === e.isEnabled))) goto L_126;
  return (t.errorMessage === e.errorMessage);
}

// fn u  args=1 vars=2 closure=6 cpool=2 bc=207B file=chatgpt_wallet_core/src/WalletSurfaceModels
// args: t
// locals: r
// closure: s, i, l, a, e, n
function {
  let r;
  r = undefined;
  return t.observeState().pipe(a.map(function <atom:0>), e.distinctUntilChanged(function <atom:0>), n.shareReplay({bufferSize: 1, refCount: true}));   // tail call
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=2 bc=203B file=chatgpt_wallet_core/src/WalletSurfaceModels
// args: require, module, exports
// locals: t, e, a, n, l, s, r, i, o, u
function {
  o = function o;
  u = function u;
  let i;
  let r;
  let s;
  let l;
  let n;
  let a;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.observeWalletSummary = undefined;
  exports.observeWalletChatEnrollmentElicitationAction = undefined;
  t = require("valdi_rxjs/src/observable/combineLatest");
  e = require("valdi_rxjs/src/operators/distinctUntilChanged");
  a = require("valdi_rxjs/src/operators/map");
  n = require("valdi_rxjs/src/operators/shareReplay");
  l = require("./Strings");
  s = require("./WalletHostState");
  r = require("./WalletHostService");
  i = require("./WalletModels");
  exports.observeWalletSummary = o;
  exports.observeWalletChatEnrollmentElicitationAction = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/WalletSurfaceModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
