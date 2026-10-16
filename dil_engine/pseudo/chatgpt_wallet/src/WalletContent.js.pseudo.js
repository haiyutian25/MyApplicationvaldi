// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=chatgpt_wallet/src/WalletContent
// args: e
function {
  e.Rename = "rename";
  e.Remove = "remove";
  e.ConfirmRemove = "confirm-remove";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=chatgpt_wallet/src/WalletContent
// args: e
function {
  e.Cancel = "cancel";
  e.Retry = "retry";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_wallet/src/WalletContent
// args: e
function {
  e.None = 0;
  e[0] = "None";
  e.Pending = 1;
  e[1] = "Pending";
  e.Requested = 2;
  e[2] = "Requested";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=155B file=chatgpt_wallet/src/WalletContent
// closure: this
function {
  if (!(this.hasMatchingAccount)) goto L_9a;
  if (!((this.context.controller.backFromContactInfo == null))) goto L_97;
  this.context.controller.backFromContactInfo;
  this.context.controller;
  goto L_9a;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=155B file=chatgpt_wallet/src/WalletContent
// closure: this
function {
  if (!(this.hasMatchingAccount)) goto L_9a;
  if (!((this.context.controller.reloadContactInfo == null))) goto L_97;
  this.context.controller.reloadContactInfo;
  this.context.controller;
  goto L_9a;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=155B file=chatgpt_wallet/src/WalletContent
// closure: this
function {
  if (!(this.hasMatchingAccount)) goto L_9a;
  if (!((this.context.controller.refreshContactInfo == null))) goto L_97;
  this.context.controller.refreshContactInfo;
  this.context.controller;
  goto L_9a;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=156B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: this
function {
  if (!(this.hasMatchingAccount)) goto L_9b;
  if (!((this.context.controller.submitContactInfo == null))) goto L_97;
  this.context.controller.submitContactInfo;
  this.context.controller;
  goto L_9b;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=188B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: this
function {
  if (!((e.height !== this.state.footerHeight))) goto L_bb;
  this.setState({footerHeight: e.height});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=238B file=chatgpt_wallet/src/WalletContent
// closure: t, ze, I, wt
function {
  t.beginComponent(ze.ActivityIndicator, I, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", wt.default.walletLoading());
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=640B file=chatgpt_wallet/src/WalletContent
// closure: this, Rt, Wt
function {
  if (!(this.hasMatchingAccount)) goto L_27f;
  if (!((this.wallet.status === Rt.WalletStatus.Ready))) goto L_27f;
  if (!(!this.isBusy)) goto L_27f;
  if (!((undefined === this.state.renamingCardId))) goto L_27f;
  if (!((true !== this.viewModel.isEnrollmentIntroduction))) goto L_27f;
  if (!((true !== this.viewModel.showsComingSoon))) goto L_27f;
  this.setState(Wt);
  if (!((this.context.controller.editContactInfo == null))) goto L_272;
  this.context.controller.editContactInfo;
  this.context.controller;
  goto L_275;
  // [栈深重同步 2 -> 3]
  this.dismissContactEditor = <?>.call(undefined);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=238B file=chatgpt_wallet/src/WalletContent
// closure: t, ze, Be, wt
function {
  t.beginComponent(ze.ActivityIndicator, Be, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", wt.default.walletLoading());
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=93B file=chatgpt_wallet/src/WalletContent
// closure: this
function {
  if ((this.isBusy)) goto L_5c;
  this.setAnimatedState({menuCardId: undefined, removingCardId: undefined});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=286B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: this
function {
  if (((undefined === this.state.renamingCardId))) goto L_11d;
  if ((this.isBusy)) goto L_11d;
  if ((this.isCardPending(this.state.renamingCardId))) goto L_11d;
  this.setState({draftName: e, renameError: undefined});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=276B file=chatgpt_wallet/src/WalletContent
// closure: this, Bt
function {
  if (((undefined === this.state.renamingCardId))) goto L_113;
  if ((this.isBusy)) goto L_113;
  if ((this.isCardPending(this.state.renamingCardId))) goto L_113;
  this.setAnimatedState(Bt);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=435B file=chatgpt_wallet/src/WalletContent
// closure: this, Rt, _t
function {
  if (!(this.hasMatchingAccount)) goto L_1b2;
  if (!(!this.isBusy)) goto L_1b2;
  if (!(!this.isPreferredPending)) goto L_1b2;
  if (!((this.wallet.status === Rt.WalletStatus.Ready))) goto L_1b2;
  if (!(_t(this.wallet))) goto L_1b2;
  this.setAnimatedState({choosingPreferred: !this.state.choosingPreferred});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=chatgpt_wallet/src/WalletContent
// args: t
// closure: e
function {
  return (t.id === e);
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=827B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: _t, this, Rt, wt
function {
  if (!(_t(this.wallet))) goto L_33a;
  if (!(this.hasMatchingAccount)) goto L_33a;
  if (!(!this.isBusy)) goto L_33a;
  if (!(!this.isPreferredPending)) goto L_33a;
  if (!((this.wallet.status === Rt.WalletStatus.Ready))) goto L_33a;
  if (!(this.wallet.cards.some(function <atom:0>))) goto L_33a;
  if (!((e !== this.wallet.preferredCardId))) goto L_33a;
  this.setAnimatedState({choosingPreferred: false});
  this.context.controller.setPreferred(e);
  if ((this.isPreferredPending)) goto L_33a;
  this.setState({cardActionError: wt.default.walletCardChangeUnconfirmed()});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=274B file=chatgpt_wallet/src/WalletContent
// closure: this
function {
  if (!(this.showsSetup)) goto L_111;
  if (!(this.setup.isActive)) goto L_111;
  this.setup.cancel();
  if (!((this.context.onCancelIntroduction == null))) goto L_10e;
  this.context.onCancelIntroduction;
  this.context;
  goto L_111;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=265B file=chatgpt_wallet/src/WalletContent
// closure: this
function {
  if (!((undefined !== this.context.startEnrollment))) goto L_96;
  goto L_ff;
  // [栈深重同步 2 -> 1]
  this.dismissEnrollment = this.context.controller.beginEnrollment();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=416B file=chatgpt_wallet/src/WalletContent
// closure: this, Rt
function {
  if (!(this.hasMatchingAccount)) goto L_19f;
  if (!(this.setup.isActive)) goto L_19f;
  if (!((true !== this.viewModel.showsComingSoon))) goto L_19f;
  if (!((this.wallet.status === Rt.WalletStatus.Ready))) goto L_19f;
  this.setup.openEnrollment(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=457B file=chatgpt_wallet/src/WalletContent
// closure: this, Rt
function {
  if (!(this.showsSetup)) goto L_1c8;
  if (!(this.setup.isActive)) goto L_1c8;
  if (!((true !== this.viewModel.showsComingSoon))) goto L_1c8;
  if (!((this.wallet.status !== Rt.WalletStatus.Unavailable))) goto L_1c8;
  if (!(this.setup.start())) goto L_1c8;
  this.refreshAndContinueSetup();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=491B file=chatgpt_wallet/src/WalletContent
// closure: this, Rt
function {
  if (!(this.hasMatchingAccount)) goto L_1ea;
  if (!(this.setup.isActive)) goto L_1ea;
  if (!((true !== this.viewModel.showsComingSoon))) goto L_1ea;
  if (!(!this.isBusy)) goto L_1ea;
  if (!((this.wallet.status === Rt.WalletStatus.NotConnected))) goto L_1ea;
  this.context.presentationHost.connect();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=270B file=chatgpt_wallet/src/WalletContent
// closure: this, Rt
function {
  if (!(this.hasMatchingAccount)) goto L_10d;
  if (!(!this.isBusy)) goto L_10d;
  if (!((this.wallet.status === Rt.WalletStatus.Error))) goto L_10d;
  this.refreshInventory();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=619B file=chatgpt_wallet/src/WalletContent
// closure: this, Rt
function {
  if ((!this.hasMatchingAccount)) goto L_26a;
  if ((this.isBusy)) goto L_26a;
  if ((this.state.isPullRefreshing)) goto L_26a;
  if (((true === this.wallet.isRefreshing))) goto L_26a;
  if (!((this.wallet.status !== Rt.WalletStatus.Ready))) goto L_20f;
  if (((this.wallet.status !== Rt.WalletStatus.Error))) goto L_26a;
  this.setState({isPullRefreshing: true});
  this.refreshInventory();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=19 cpool=19 bc=1558B file=chatgpt_wallet/src/WalletContent
// locals: this, this.active_func, new.target, arguments
// closure: t, ze, I, wt, Rt, Wt, Be, Bt, _t, <class_fields_init>, Lt, xt, rt, Jt, ut, jt, Ut, Ke, He
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.dismissEnrollment = undefined;
  this.dismissContactEditor = undefined;
  this.localRemovals = new Set();
  this.removalDismissal = Lt.None;
  this.isVisible = false;
  this.setup = new xt.WalletSetupModel(this.context.controller, this.viewModel.accountId, (true === this.viewModel.isEnrollmentIntroduction));
  null;
  Wt;
  this.state = {setup: this.setup.value, isPullRefreshing: false, footerHeight: 0, presentedCardAction: undefined, snapshot: {accountId: this.viewModel.accountId, status: Rt.WalletStatus.Loading, cards: [], isBusy: false, pendingChanges: {cardIds: [], preferredCard: false}}};
  this.mountedAccountId = this.viewModel.accountId;
  if (!(rt.Device.isAndroid())) goto L_3b9;
  this.isAndroid = !rt.Device.isWeb();
  if (!(this.isAndroid)) goto L_3f0;
  goto L_41f;
  // [栈深重同步 2 -> 1]
  if (!(ut.isNativeIOS())) goto L_41c;
  goto L_41f;
  // [栈深重同步 2 -> 1]
  this.platformStyles = Ut;
  if (!(this.isAndroid)) goto L_4ba;
  goto L_4ff;
  // [栈深重同步 2 -> 1]
  this.sectionRadius = He.OAIRadius.Xxl;
  this.backFromContact = function <atom:0>;
  this.reloadContact = function <atom:0>;
  this.refreshContact = function <atom:0>;
  this.submitContact = function <atom:0>;
  this.handleFooterLayout = function <atom:0>;
  this.renderAddressLoading = function <atom:0>;
  this.editAddress = function <atom:0>;
  this.renderPreferredLoading = function <atom:0>;
  this.dismissMenu = function <atom:0>;
  this.changeName = function <atom:0>;
  this.cancelRename = function <atom:0>;
  this.togglePreferred = function <atom:0>;
  this.setPreferred = function <atom:0>;
  this.cancelIntroduction = function <atom:0>;
  this.addCard = function <atom:0>;
  this.startSetup = function <atom:0>;
  this.connect = function <atom:0>;
  this.refresh = function <atom:0>;
  this.pullToRefresh = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=51B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: this
function {
  this.isVisible = (1 === e);
  this.closeAfterLastRemoval();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: this
function {
  return this.setState({setup: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=181B file=chatgpt_wallet/src/WalletContent
// args: t
// closure: this, e
function {
  if (!(this.localRemovals.has(t))) goto L_b4;
  return !e.pendingChanges.cardIds.includes(t);
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=401B file=chatgpt_wallet/src/WalletContent
// closure: pt, l, bt, this, n, wt
function {
  new pt.NavigationController(l).push(bt.WalletAddressPage, {accountId: this.mountedAccountId, contactId: n, themeMode: this.viewModel.themeMode}, {controller: this.context.controller}, {animated: true, platformNavigationTitle: wt.default.walletAddress(), showPlatformNavigationBar: true});
  return;
}

// fn <atom:0>  args=1 vars=11 closure=10 cpool=2 bc=2703B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: t, o, c, i, r, n, s, a, d, l
// closure: this, pt, bt, wt, Rt, Lt, Et, Mt, _t, lt
function {
  let l;
  let d;
  let a;
  let s;
  let n;
  let r;
  let i;
  let o;
  let t;
  if (!(this.hasMatchingAccount)) goto L_185;
  if (!((e.accountId === this.mountedAccountId))) goto L_185;
  if (!((this.wallet.status === Rt.WalletStatus.Ready))) goto L_185;
  t = (e.status === Rt.WalletStatus.Ready);
  o = this.wallet.pendingChanges.cardIds.some(function <atom:0>);
  if (!((this.removalDismissal !== Lt.Requested))) goto L_371;
  if (!(t)) goto L_319;
  if (!(o)) goto L_319;
  if (!(!this.hasPendingLocalRemoval(e))) goto L_319;
  if (!((undefined === e.errorMessage))) goto L_319;
  if (!((0 === e.cards.length))) goto L_319;
  this.removalDismissal = Lt.Pending;
  goto L_371;
  // [栈深重同步 1 -> 0]
  if (!((e.cards.length > 0))) goto L_371;
  this.removalDismissal = Lt.None;
  Lt.None;
  let c;
  for (const c of this.localRemovals) {
    if (!((e.accountId === this.mountedAccountId))) goto L_44f;
    if ((e.pendingChanges.cardIds.includes(c))) goto L_49c;
    this.localRemovals.delete(c);
  }
  if (!(t)) goto L_4d4;
  i = Et(this.wallet, e);
  r = e.contactCollection;
  if (!((r == null))) goto L_506;
  r;
  goto L_527;
  if (((true !== undefined.isEditing))) goto L_603;
  if (!((r.status === Mt.WalletContactStatus.Loading))) goto L_608;
  if (!((r.id !== this.state.presentedAddressId))) goto L_608;
  goto L_62c;
  // [栈深重同步 1 -> 0]
  n = r.id;
  if (!(this.hasMatchingAccount)) goto L_6eb;
  if (!((e.accountId === this.mountedAccountId))) goto L_6eb;
  s = ((undefined !== this.state.presentedAddressId) != (undefined !== n));
  a = this.state.presentedAddressId;
  if (!(_t(e))) goto L_7de;
  if (!(!e.pendingChanges.preferredCard)) goto L_7de;
  if (!(this.state.isPullRefreshing)) goto L_84f;
  d = {snapshot: e, cardActionError: undefined, presentedAddressId: n, choosingPreferred: this.state.choosingPreferred, isPullRefreshing: (true === e.isRefreshing)};
  if ((i)) goto L_886;
  if (!(s)) goto L_8b2;
  if (!((undefined === this.addressNavigator))) goto L_8b2;
  goto L_8da;
  // [栈深重同步 1 -> 0]
  this.setState(d);
  this.onViewModelUpdate();
  this.closeAfterLastRemoval();
  l = this.addressNavigator;
  if (!(this.hasMatchingAccount)) goto L_a8e;
  if (!((this.wallet.status === Rt.WalletStatus.Ready))) goto L_a8e;
  if (!((undefined !== n))) goto L_a8e;
  if (!((n !== a))) goto L_a8e;
  if (!((undefined !== l))) goto L_a8e;
  lt.withLocalNativeRefs(this.renderer.contextId, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=400B file=chatgpt_wallet/src/WalletContent
// closure: e, this, Wt, Rt
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("Wallet state observation failed");
  this.setup.cancelWaiting();
  null;
  Wt;
  this.setState({isPullRefreshing: false, snapshot: {accountId: this.viewModel.accountId, status: Rt.WalletStatus.Unavailable, cards: [], isBusy: false, pendingChanges: {cardIds: [], preferredCard: false}}});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=46B file=chatgpt_wallet/src/WalletContent
// closure: this
function {
  if (!((this.dismissEnrollment == null))) goto L_2a;
  this.dismissEnrollment;
  this;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=46B file=chatgpt_wallet/src/WalletContent
// closure: this
function {
  if (!((this.dismissContactEditor == null))) goto L_2a;
  this.dismissContactEditor;
  this;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=chatgpt_wallet/src/WalletContent
// closure: this
function {
  return this.setup.cancel();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=13 cpool=7 bc=849B file=chatgpt_wallet/src/WalletContent
// locals: this
// closure: pt, bt, wt, Rt, Lt, Et, Mt, _t, lt, e, Wt, nt, st
function {
  this = this;
  nt.overrideLocales(wt.default, st.getCurrentLocales, "en");
  if (!((this.context.navigator == null))) goto L_c0;
  this.context.navigator;
  goto L_ef;
  if (!((undefined.setPageVisibilityObserver == null))) goto L_ea;
  undefined.setPageVisibilityObserver;
  undefined;
  goto L_ef;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, function <atom:0>);
  this.setup.setAvailable((true !== this.viewModel.showsComingSoon));
  this.registerDisposable(this.setup.observeState().subscribe(function <atom:0>));
  this.registerDisposable(this.context.controller.observeState().subscribe({next: function <atom:0>, error: function <atom:0>}));
  this.registerDisposable(function <atom:0>);
  this.registerDisposable(function <atom:0>);
  this.registerDisposable(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=124B file=chatgpt_wallet/src/WalletContent
// locals: this
function {
  this = this;
  if (!((this.context.navigator == null))) goto L_4d;
  this.context.navigator;
  goto L_7b;
  if (!((undefined.setPageVisibilityObserver == null))) goto L_77;
  undefined.setPageVisibilityObserver;
  undefined;
  goto L_7b;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=63B file=chatgpt_wallet/src/WalletContent
// closure: e, t
function {
  if (!((undefined !== e))) goto L_32;
  goto L_3e;
  // [栈深重同步 1 -> 0]
  if (!((t == null))) goto L_3d;
  t;
  goto L_3e;
  undefined();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=1 bc=827B file=chatgpt_wallet/src/WalletContent
// locals: e, t, this
// closure: Lt, Rt, lt
function {
  this = this;
  let t;
  let e;
  if (((this.removalDismissal !== Lt.Pending))) goto L_19b;
  if ((!this.hasMatchingAccount)) goto L_19b;
  if ((this.wallet.isBusy)) goto L_19b;
  if (((this.wallet.status !== Rt.WalletStatus.Ready))) goto L_19b;
  if (!((this.wallet.cards.length > 0))) goto L_19e;
  return;
  e = this.context.navigator;
  t = this.context.onCancelIntroduction;
  if (!((undefined !== e))) goto L_251;
  goto L_256;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== t))) goto L_33a;
  this.removalDismissal = Lt.Requested;
  this.setup.cancel();
  lt.withLocalNativeRefs(this.renderer.contextId, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=chatgpt_wallet/src/WalletContent
// locals: this
function {
  this = this;
  return this.state.snapshot;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=71B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: this
function {
  return this.localRemovals.has(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=107B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: this
function {
  this = this;
  return e.pendingChanges.cardIds.some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=1019B file=chatgpt_wallet/src/WalletContent
// locals: this
// closure: Vt, Lt, Rt, xt
function {
  this = this;
  if (!(this.hasMatchingAccount)) goto L_3fa;
  if (!(Vt.needsWalletSetup(this.wallet))) goto L_19a;
  if (((this.removalDismissal !== Lt.None))) goto L_109;
  if (!(this.hasPendingLocalRemoval(this.wallet))) goto L_199;
  if ((!(this.wallet.status === Rt.WalletStatus.Ready))) goto L_3fa;
  if (((true === this.viewModel.isEnrollmentIntroduction))) goto L_3fa;
  if (((this.state.setup.action === xt.WalletSetupAction.Refreshing))) goto L_3fa;
  if (((this.state.setup.action === xt.WalletSetupAction.Connecting))) goto L_3fa;
  return (this.state.setup.action === xt.WalletSetupAction.Failed);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=250B file=chatgpt_wallet/src/WalletContent
// locals: this
// closure: Lt
function {
  this = this;
  if ((this.wallet.isBusy)) goto L_f9;
  if (((this.removalDismissal === Lt.Requested))) goto L_f9;
  return this.state.setup.isLoading;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=chatgpt_wallet/src/WalletContent
// args: t
// closure: e
function {
  return (t.id === e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=105B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: this
function {
  return this.wallet.cards.some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=1 bc=1313B file=chatgpt_wallet/src/WalletContent
// locals: e, this
// closure: Rt, Wt, Bt
function {
  this = this;
  let e;
  if (!(this.hasMatchingAccount)) goto L_b4;
  this.setup.setAvailable((true !== this.viewModel.showsComingSoon));
  if ((!this.hasMatchingAccount)) goto L_16b;
  if (!((this.wallet.status === Rt.WalletStatus.Unavailable))) goto L_1eb;
  this.setup.cancelWaiting();
  null;
  Wt;
  this.setState({isPullRefreshing: false});
  return;
  if (!((this.wallet.status !== Rt.WalletStatus.Ready))) goto L_376;
  if (!((this.wallet.status === Rt.WalletStatus.Error))) goto L_34c;
  if (!((undefined !== this.state.renamingCardId))) goto L_34c;
  return;
  this.setState(Wt);
  return;
  e = function <atom:0>;
  if (!(e(this.state.menuCardId))) goto L_42f;
  goto L_430;
  // [栈深重同步 4 -> 3]
  if (!(e(this.state.removingCardId))) goto L_4c3;
  goto L_4c4;
  // [栈深重同步 4 -> 3]
  if (!(e(this.state.renamingCardId))) goto L_515;
  goto L_518;
  // [栈深重同步 4 -> 3]
  null;
  Bt;
  this.setState({menuCardId: undefined, removingCardId: undefined});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=689B file=chatgpt_wallet/src/WalletContent
// closure: t, Pt, r, this
function {
  t.beginComponent(Pt.WalletSetupContent, r, undefined, undefined);
  t.setViewModelProperty("orbitName", this.wallet.orbitName);
  t.setViewModelProperty("usesNativeBackground", this.viewModel.usesNativeBackground);
  t.setViewModelProperty("state", this.state.setup);
  t.setViewModelProperty("onContinue", this.startSetup);
  if (!((undefined === this.context.onCancelIntroduction))) goto L_263;
  goto L_285;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onCancel", this.cancelIntroduction);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=chatgpt_wallet/src/WalletContent
// args: t
// closure: this, e
function {
  return this.renderManagement(e, t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=399B file=chatgpt_wallet/src/WalletContent
// closure: this, e, t, kt, n
function {
  t.beginComponent(kt.WalletManagementInsets, n, undefined, undefined);
  if ((t.hasContext())) goto L_137;
  t.setContext({navigator: this.context.navigator, rootSafeArea: this.context.rootSafeArea});
  t.setViewModelProperty("children", function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=2 bc=61B file=chatgpt_wallet/src/WalletContent
// closure: t, Pt, r, this, e, kt, n, a, s, d
function {
  if (!(a)) goto L_2f;
  goto L_3c;
  // [栈深重同步 1 -> 0]
  if (!(d)) goto L_39;
  goto L_3c;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=9 cpool=1 bc=1305B file=chatgpt_wallet/src/WalletContent
// locals: e, s, a, d, this
// closure: t, Pt, r, kt, n, Rt, o, Fe, i
function {
  this = this;
  let d;
  let a;
  let s;
  let e;
  if (!(this.hasMatchingAccount)) goto L_7a;
  goto L_bf;
  // [栈深重同步 1 -> 0]
  e = Rt.WalletStatus.Unavailable;
  if (!(this.hasMatchingAccount)) goto L_12b;
  goto L_12c;
  // [栈深重同步 1 -> 0]
  s = undefined;
  if (!((undefined !== s))) goto L_1f7;
  if ((!s.isEditing)) goto L_1f7;
  if (!((undefined === this.addressNavigator))) goto L_1f7;
  a = (s.id === this.state.presentedAddressId);
  if (!(!a)) goto L_3a9;
  if (!((true === this.viewModel.showsComingSoon))) goto L_3a9;
  t.beginComponent(Pt.WalletComingSoonContent, o, undefined, undefined);
  t.setViewModelProperty("themeMode", this.viewModel.themeMode);
  t.setViewModelProperty("usesNativeBackground", this.viewModel.usesNativeBackground);
  t.endComponent();
  return;
  d = this.showsSetup;
  t.beginComponent(Fe.OAITheme, i, undefined, undefined);
  if ((a)) goto L_452;
  t.setViewModelProperty("fill", !d);
  t.setViewModelProperty("mode", this.viewModel.themeMode);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=712B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: o, this
// closure: t, Ct, s
function {
  this = this;
  let o;
  if ((e.isEditing)) goto L_71;
  if (!((true !== this.viewModel.isEnrollmentIntroduction))) goto L_97;
  goto L_98;
  // [栈深重同步 1 -> 0]
  o = undefined;
  t.beginComponent(Ct.WalletContactContent, s, undefined, undefined);
  t.setViewModelProperty("contact", e);
  t.setViewModelProperty("onBack", o);
  t.setViewModelProperty("onSubmit", this.submitContact);
  t.setViewModelProperty("onReload", this.reloadContact);
  if (!((undefined === this.context.controller.refreshContactInfo))) goto L_27a;
  goto L_29c;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onRefresh", this.refreshContact);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=175B file=chatgpt_wallet/src/WalletContent
// locals: this
// closure: ft
function {
  this = this;
  return ft.walletAddressNavigator(this.context.navigator, this.context.controller);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=0 bc=1522B file=chatgpt_wallet/src/WalletContent
// closure: t, l, this, o, r, He, e, Rt, i, Qe, c, Ue
function {
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", this.platformStyles.content);
  if (!(r)) goto L_159;
  goto L_19e;
  // [栈深重同步 5 -> 4]
  t.setAttributeNumber("paddingBottom", (o + He.OAISpacing.Two));
  this.renderHero();
  if (!((e === Rt.WalletStatus.Ready))) goto L_23b;
  goto L_263;
  // [栈深重同步 1 -> 0]
  this.renderStatus(e);
  if (!((e === Rt.WalletStatus.Ready))) goto L_407;
  if (!((true !== this.viewModel.isEnrollmentIntroduction))) goto L_407;
  if (!((undefined !== this.context.controller.editContactInfo))) goto L_407;
  if (!((this.context.controller.isContactInfoEditingEnabled == null))) goto L_3db;
  this.context.controller.isContactInfoEditingEnabled;
  this.context.controller;
  goto L_3de;
  // [栈深重同步 1 -> 2]
  if (!(<?>.call(undefined))) goto L_407;
  this.renderAddress();
  if (!(this.hasMatchingAccount)) goto L_5c9;
  if (!((undefined !== i))) goto L_5c9;
  t.beginComponent(Qe.Text, c, undefined, undefined);
  t.setViewModelProperty("typography", Ue.Typography.Subheadline);
  t.setViewModelProperty("tone", Qe.TextTone.Danger);
  t.setViewModelProperty("value", i);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=0 bc=1547B file=chatgpt_wallet/src/WalletContent
// closure: t, p, Ut, He, o, this, Xe, h, xt, wt, ht, Xt
function {
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", Ut.footer);
  t.setAttributeNumber("bottom", (He.OAISpacing.Two + o));
  t.setAttributeFunction("onLayout", this.handleFooterLayout);
  t.beginComponent(Xe.Button, h, undefined, undefined);
  t.setViewModelProperty("disabled", !this.state.setup.isEnabled);
  t.setViewModelProperty("loading", (this.state.setup.action === xt.WalletSetupAction.Opening));
  t.setViewModelProperty("label", wt.default.walletManagementAddCard());
  t.setViewModelProperty("labelStyle", Ut.buttonLabel);
  t.setViewModelProperty("material", ht.ControlMaterial.ProminentGlass);
  t.setViewModelProperty("pressedStyle", Xt.pressed);
  if (!(this.state.setup.isEnabled)) goto L_542;
  goto L_566;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("style", Xt.unavailable);
  t.setViewModelProperty("onPress", this.addCard);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=6 closure=20 cpool=2 bc=1506B file=chatgpt_wallet/src/WalletContent
// args: e, o
// locals: i, r, n, this
// closure: t, l, He, Rt, Qe, c, Ue, p, Ut, Xe, h, xt, wt, ht, Xt, Tt, a, yt, d, rt
function {
  this = this;
  let n;
  let r;
  let i;
  if (!((this.state.cardActionError == null))) goto L_e1;
  this.state.cardActionError;
  if (!((this.wallet.errorMessage == null))) goto L_e1;
  this.wallet.errorMessage;
  i = this.state.renameError;
  if (!((e === Rt.WalletStatus.Ready))) goto L_172;
  r = (undefined === this.state.renamingCardId);
  if (!(r)) goto L_1e2;
  n = (this.state.presentedCardAction !== Tt.Rename);
  t.beginRender(a, undefined);
  t.setAttributeStyle("style", this.platformStyles.root);
  t.beginComponent(yt.RefreshControl, d, undefined, undefined);
  if (!(rt.Device.isIOS())) goto L_38e;
  t.setViewModelProperty("allowContentOverflow", !rt.Device.isWeb());
  if (!(this.hasMatchingAccount)) goto L_50a;
  if (((e === Rt.WalletStatus.Ready))) goto L_476;
  if (!((e === Rt.WalletStatus.Error))) goto L_50a;
  if ((this.state.isPullRefreshing)) goto L_50a;
  t.setViewModelProperty("refreshing", (true === this.wallet.isRefreshing));
  t.setViewModelProperty("onRefresh", this.pullToRefresh);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  if (!(n)) goto L_5b9;
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=14 cpool=0 bc=1828B file=chatgpt_wallet/src/WalletContent
// locals: e, o, i, this
// closure: Ke, Ue, wt, t, u, y, Ut, gt, Qe, m, Gt, Ft, g, vt
function {
  this = this;
  let i;
  let o;
  let e;
  e = this.wallet.orbitName;
  if (!(this.isAndroid)) goto L_dc;
  goto L_121;
  // [栈深重同步 1 -> 0]
  o = Ue.Typography.Subheadline;
  if (!((undefined === e))) goto L_173;
  goto L_1be;
  // [栈深重同步 1 -> 0]
  i = wt.default.walletDescriptionWithName(e);
  t.beginRender(u, undefined);
  t.setAttributeStyle("style", this.platformStyles.hero);
  t.setAttributeNumber("borderRadius", this.sectionRadius);
  t.beginRender(y, undefined);
  t.setAttributeStyle("style", Ut.heroImage);
  t.setAttribute("src", gt.default.wallet);
  t.endRender();
  t.beginComponent(Qe.Text, m, undefined, undefined);
  if (!(this.isAndroid)) goto L_464;
  goto L_467;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("typography", Ft);
  t.setViewModelProperty("value", wt.default.walletTitle());
  t.endComponent();
  t.beginComponent(Qe.Text, g, undefined, undefined);
  t.setViewModelProperty("typography", o);
  t.setViewModelProperty("tone", Qe.TextTone.Secondary);
  t.setViewModelProperty("accessibilityLabel", i);
  if (!((undefined === e))) goto L_660;
  goto L_6d0;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("value", vt.walletNamedText(e, wt.default.walletDescriptionWithName, o));
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=44B file=chatgpt_wallet/src/WalletContent
// closure: this, o, i
function {
  this.renderAddressContent(o, i);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=1 bc=569B file=chatgpt_wallet/src/WalletContent
// closure: this, o, i, t, ot, v, wt, r, e
function {
  t.beginComponent(ot.SettingsRow, v, undefined, undefined);
  t.setViewModelProperty("position", ot.SettingsRowPosition.Only);
  t.setViewModelProperty("accessibilityLabel", wt.default.walletAddress());
  t.setViewModelProperty("accessibilityValue", r);
  t.setViewModelProperty("disabled", e);
  t.setViewModelProperty("onPress", this.editAddress);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=44B file=chatgpt_wallet/src/WalletContent
// closure: this, o, i
function {
  this.renderAddressContent(o, i);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=12 cpool=2 bc=1750B file=chatgpt_wallet/src/WalletContent
// locals: e, o, i, r, this
// closure: t, ot, v, wt, qt, Mt, et, w, He, Ye, P, Ut
function {
  this = this;
  let r;
  let i;
  let o;
  let e;
  if ((this.isBusy)) goto L_7c;
  e = (undefined !== this.state.renamingCardId);
  o = qt(this.wallet.savedContactInfo);
  if (!((this.wallet.contactCollection == null))) goto L_114;
  this.wallet.contactCollection;
  goto L_135;
  if (!((true === undefined.isEditing))) goto L_1e8;
  i = (this.wallet.contactCollection.status === Mt.WalletContactStatus.Loading);
  if (!(i)) goto L_2b9;
  if (!((undefined === o))) goto L_242;
  goto L_2bc;
  // [栈深重同步 1 -> 0]
  goto L_2bc;
  // [栈深重同步 1 -> 0]
  r = o;
  if (!(this.isAndroid)) goto L_46d;
  t.beginComponent(et.SettingsSection, w, undefined, undefined);
  t.setViewModelProperty("backgroundColor", He.OAIColor.BgElevatedPrimary);
  t.setViewModelProperty("borderColor", He.OAIColor.BorderDefault);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
  t.beginComponent(Ye.Pressable, P, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", wt.default.walletAddress());
  t.setViewModelProperty("accessibilityValue", r);
  t.setViewModelProperty("disabled", e);
  t.setViewModelProperty("style", Ut.preferredRow);
  t.setViewModelProperty("radius", this.sectionRadius);
  t.setViewModelProperty("onPress", this.editAddress);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=588B file=chatgpt_wallet/src/WalletContent
// closure: t, Ge, A, qe, i, Ht, this, He
function {
  t.beginComponent(Ge.Icon, A, undefined, undefined);
  t.setViewModelProperty("src", qe.default.chevronRight);
  if (!((i == null))) goto L_f7;
  i;
  goto L_139;
  if (!((undefined.layout.disclosureSize == null))) goto L_141;
  undefined.layout.disclosureSize;
  t.setViewModelProperty("size", Ht);
  if (!(this.isAndroid)) goto L_1db;
  goto L_220;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("color", He.OAIColor.IconTertiary);
  t.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=16 cpool=1 bc=1626B file=chatgpt_wallet/src/WalletContent
// args: e, o
// locals: i, this
// closure: t, Ge, A, qe, Ht, He, Ke, C, Ut, b, Qe, f, Ue, wt, S, M
function {
  this = this;
  let i;
  if (!(this.isAndroid)) goto L_50;
  goto L_51;
  // [栈深重同步 1 -> 0]
  i = undefined;
  t.beginRender(C, undefined);
  t.setAttributeStyle("style", Ut.addressContent);
  t.beginRender(b, undefined);
  t.setAttributeStyle("style", Ut.addressLabel);
  t.beginComponent(Qe.Text, f, undefined, undefined);
  if (!((i == null))) goto L_1d1;
  i;
  goto L_213;
  if (!((undefined.typography.Row == null))) goto L_25d;
  undefined.typography.Row;
  t.setViewModelProperty("typography", Ue.Typography.Body);
  t.setViewModelProperty("value", wt.default.walletAddress());
  t.endComponent();
  t.endRender();
  if (((undefined === e))) goto L_603;
  t.beginRender(S, undefined);
  t.setAttributeStyle("style", Ut.preferredValue);
  t.beginComponent(Qe.Text, M, e, undefined);
  if (!((i == null))) goto L_432;
  i;
  goto L_474;
  if (!((undefined.typography.Description == null))) goto L_4be;
  undefined.typography.Description;
  t.setViewModelProperty("typography", Ue.Typography.Body);
  if (!((i == null))) goto L_4f6;
  i;
  goto L_538;
  if (!((undefined.colors.value == null))) goto L_582;
  undefined.colors.value;
  t.setViewModelProperty("color", He.OAIColor.TextTertiary);
  t.setViewModelProperty("value", e);
  t.endComponent();
  t.endRender();
  if (!(o)) goto L_62e;
  goto L_631;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=637B file=chatgpt_wallet/src/WalletContent
// closure: t, Xe, x, this, wt, Ut
function {
  t.beginComponent(Xe.Button, x, undefined, undefined);
  t.setViewModelProperty("disabled", this.isBusy);
  t.setViewModelProperty("loading", this.isBusy);
  t.setViewModelProperty("label", wt.default.walletConnect());
  t.setViewModelProperty("labelStyle", Ut.buttonLabel);
  t.setViewModelProperty("style", Ut.button);
  t.setViewModelProperty("onPress", this.connect);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=558B file=chatgpt_wallet/src/WalletContent
// closure: t, Xe, k, this, wt, Ut
function {
  t.beginComponent(Xe.Button, k, undefined, undefined);
  t.setViewModelProperty("disabled", this.isBusy);
  t.setViewModelProperty("label", wt.default.walletRetry());
  t.setViewModelProperty("labelStyle", Ut.buttonLabel);
  t.setViewModelProperty("style", Ut.button);
  t.setViewModelProperty("onPress", this.refresh);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=13 cpool=2 bc=1402B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: this
// closure: t, Xe, x, wt, Ut, k, V, Rt, ze, R, Qe, O, Ue
function {
  this = this;
  t.beginRender(V, undefined);
  t.setAttributeStyle("style", Ut.status);
  if (!((e === Rt.WalletStatus.Loading))) goto L_1bb;
  t.beginComponent(ze.ActivityIndicator, R, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", wt.default.walletLoading());
  goto L_4b3;
  // [栈深重同步 1 -> 0]
  t.beginComponent(Qe.Text, O, undefined, undefined);
  t.setViewModelProperty("typography", Ue.Typography.Body);
  t.setViewModelProperty("tone", Qe.TextTone.Secondary);
  if (!((e === Rt.WalletStatus.NotConnected))) goto L_3ad;
  goto L_488;
  // [栈深重同步 4 -> 3]
  if (!((e === Rt.WalletStatus.Unavailable))) goto L_440;
  goto L_488;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("value", wt.default.walletLoadError());
  t.endComponent();
  if (!((e === Rt.WalletStatus.NotConnected))) goto L_502;
  function <atom:0>();
  if (!((e === Rt.WalletStatus.Error))) goto L_551;
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=73B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: this, Tt
function {
  this.presentCardAction(e, Tt.Rename);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=73B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: this, Tt
function {
  this.presentCardAction(e, Tt.Remove);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: this
function {
  return this.renderCard(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=13 cpool=3 bc=2067B file=chatgpt_wallet/src/WalletContent
// locals: this
// closure: Tt, ft, t, St, T, _t, rt, N, Ut, Qe, L, Ue, wt
function {
  this = this;
  if (!(ft.supportsGroupedWalletCards(this.context))) goto L_494;
  if (!((this.wallet.cards.length > 0))) goto L_494;
  t.beginComponent(St.WalletCardSection, T, undefined, undefined);
  if ((t.hasContext())) goto L_185;
  t.setContext({nativeMenuViewFactory: this.context.nativeMenuViewFactory});
  t.setViewModelProperty("accountId", this.mountedAccountId);
  t.setViewModelProperty("cards", this.wallet.cards);
  t.setViewModelProperty("disabled", this.isBusy);
  t.setViewModelProperty("pendingCardIds", this.wallet.pendingChanges.cardIds);
  t.setViewModelProperty("onRename", function <atom:0>);
  t.setViewModelProperty("onRemove", function <atom:0>);
  t.endComponent();
  if (!(_t(this.wallet))) goto L_492;
  if (!(rt.Device.isIOS())) goto L_48f;
  this.renderPreferred(!rt.Device.isWeb());
  return;
  t.beginRender(N, undefined);
  t.setAttributeStyle("style", Ut.cards);
  if (!((0 === this.wallet.cards.length))) goto L_72f;
  t.beginComponent(Qe.Text, L, undefined, undefined);
  t.setViewModelProperty("typography", Ue.Typography.Body);
  t.setViewModelProperty("tone", Qe.TextTone.Secondary);
  t.setViewModelProperty("value", wt.default.walletEmpty());
  goto L_798;
  // [栈深重同步 1 -> 0]
  this.wallet.cards.forEach(function <atom:0>);
  t.endRender();
  if (!(_t(this.wallet))) goto L_812;
  this.renderPreferred(false);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=15 cpool=0 bc=3325B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: o, i, r, this
// closure: Ke, t, B, W, Ut, At, E, q, Qe, _, Ue, D, It, wt, F
function {
  this = this;
  let r;
  let i;
  let o;
  if (!(this.isAndroid)) goto L_56;
  goto L_57;
  // [栈深重同步 1 -> 0]
  o = undefined;
  i = (this.state.removingCardId === e.id);
  r = (this.state.renamingCardId === e.id);
  t.beginRender(B, e.id);
  t.setAttributeStyle("style", this.platformStyles.card);
  t.setAttributeNumber("borderRadius", this.sectionRadius);
  t.setAttributeString("accessibilityId", "wallet.card.".concat(e.id));
  if ((!this.isAndroid)) goto L_2fe;
  if (!(!r)) goto L_303;
  t.setAttribute("limitToViewport", undefined);
  t.beginRender(W, undefined);
  t.setAttributeStyle("style", Ut.cardRow);
  t.beginComponent(At.WalletCardArtwork, E, undefined, undefined);
  t.setViewModelProperty("card", e);
  t.endComponent();
  t.beginRender(q, undefined);
  t.setAttributeStyle("style", Ut.cardText);
  t.beginComponent(Qe.Text, _, "name/".concat(e.name), undefined);
  if (!((o == null))) goto L_577;
  o;
  goto L_5b9;
  if (!((undefined.typography.Row == null))) goto L_603;
  undefined.typography.Row;
  t.setViewModelProperty("typography", Ue.Typography.Body);
  t.setViewModelProperty("value", e.name);
  t.endComponent();
  t.beginComponent(Qe.Text, D, "number/".concat(e.lastFour), undefined);
  if (!((o == null))) goto L_74d;
  o;
  goto L_78f;
  if (!((undefined.typography.Description == null))) goto L_7d9;
  undefined.typography.Description;
  t.setViewModelProperty("typography", Ue.Typography.Footnote);
  if (!((o == null))) goto L_811;
  o;
  goto L_853;
  t.setViewModelProperty("color", undefined.colors.description);
  t.setViewModelProperty("tone", Qe.TextTone.Tertiary);
  t.setViewModelProperty("value", It.cardNumberText(e.lastFour));
  t.setViewModelProperty("accessibilityLabel", wt.default.walletEndingIn(It.safeLastFour(e.lastFour)));
  t.endComponent();
  t.endRender();
  this.renderCardMenu(e);
  t.endRender();
  if (((this.state.menuCardId !== e.id))) goto L_b97;
  if ((this.isCardPending(e.id))) goto L_b97;
  this.renderMenuFallback(e.id);
  t.beginRender(F, undefined);
  if ((i)) goto L_bf7;
  if (!(r)) goto L_bfc;
  goto L_bfd;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("height", 0);
  t.setAttribute("slowClipping", true);
  if (!(i)) goto L_c7e;
  this.renderRemoval(e.id);
  if (!(r)) goto L_cac;
  this.renderRename(e);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=72B file=chatgpt_wallet/src/WalletContent
// args: t
// closure: this, e
function {
  return this.handleCardAction(e.id, t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_wallet/src/WalletContent
// closure: this, e
function {
  return this.openMenu(e.id);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=16 cpool=2 bc=2576B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: o, this
// closure: t, H, _e, Ut, ze, U, wt, It, z, De, j, He, Tt, Je, X, qe
function {
  this = this;
  let o;
  if (!(this.isCardPending(e.id))) goto L_2aa;
  t.beginRender(H, undefined);
  if (!(_e.supportsNativeMenu())) goto L_f3;
  goto L_117;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", Ut.fallbackCardLoading);
  t.beginComponent(ze.ActivityIndicator, U, undefined, undefined);
  t.setViewModelProperty("accessibilityId", "wallet.card.loading.".concat(e.id));
  t.setViewModelProperty("accessibilityLabel", wt.default.walletLoading());
  t.endComponent();
  t.endRender();
  return;
  o = wt.default.walletCardOptions(e.name, It.safeLastFour(e.lastFour));
  if (!(_e.supportsNativeMenu())) goto L_73e;
  t.beginRender(z, undefined);
  t.setAttributeStyle("style", Ut.menuAnchor);
  t.beginComponent(De.NativeMenuButton, j, undefined, undefined);
  t.setViewModelProperty("accessibilityId", "wallet.menu.".concat(e.id));
  t.setViewModelProperty("accessibilityLabel", o);
  t.setViewModelProperty("foregroundColor", He.OAIColor.IconTertiary);
  if (!(this.isBusy)) goto L_5c1;
  goto L_6b9;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("actions", [{id: Tt.Rename, title: wt.default.walletRename()}, {id: Tt.Remove, title: wt.default.walletRemove(), destructive: true}]);
  t.setViewModelProperty("onSelect", function <atom:0>);
  t.endComponent();
  goto L_a0f;
  // [栈深重同步 1 -> 0]
  t.beginComponent(Je.IconButton, X, undefined, undefined);
  t.setViewModelProperty("accessibilityId", "wallet.menu.".concat(e.id));
  t.setViewModelProperty("accessibilityLabel", o);
  t.setViewModelProperty("disabled", this.isBusy);
  t.setViewModelProperty("nativeAndroid", this.isAndroid);
  t.setViewModelProperty("src", qe.default.ellipsis);
  t.setViewModelProperty("iconColor", He.OAIColor.IconTertiary);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=72B file=chatgpt_wallet/src/WalletContent
// closure: this, e, Tt
function {
  return this.handleCardAction(e, Tt.Rename);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=72B file=chatgpt_wallet/src/WalletContent
// closure: this, e, Tt
function {
  return this.handleCardAction(e, Tt.Remove);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=9 cpool=2 bc=2380B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: this
// closure: Tt, t, G, Ut, Xe, J, wt, Y, Q
function {
  this = this;
  t.beginRender(G, undefined);
  t.setAttributeStyle("style", Ut.rename);
  t.beginComponent(Xe.Button, J, undefined, undefined);
  t.setViewModelProperty("accessibilityId", "wallet.action.rename.".concat(e));
  t.setViewModelProperty("label", wt.default.walletRename());
  t.setViewModelProperty("disabled", this.isBusy);
  t.setViewModelProperty("variant", Xe.ButtonVariant.Secondary);
  t.setViewModelProperty("labelStyle", Ut.buttonLabel);
  t.setViewModelProperty("style", Ut.button);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.endComponent();
  t.beginComponent(Xe.Button, Y, undefined, undefined);
  t.setViewModelProperty("accessibilityId", "wallet.action.remove.".concat(e));
  t.setViewModelProperty("label", wt.default.walletRemove());
  t.setViewModelProperty("disabled", this.isBusy);
  t.setViewModelProperty("variant", Xe.ButtonVariant.Secondary);
  t.setViewModelProperty("labelStyle", Ut.buttonLabel);
  t.setViewModelProperty("style", Ut.button);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.endComponent();
  t.beginComponent(Xe.Button, Q, undefined, undefined);
  t.setViewModelProperty("accessibilityId", "wallet.action.cancel.".concat(e));
  t.setViewModelProperty("label", wt.default.walletCancel());
  t.setViewModelProperty("disabled", this.isBusy);
  t.setViewModelProperty("variant", Xe.ButtonVariant.Ghost);
  t.setViewModelProperty("labelStyle", Ut.buttonLabel);
  t.setViewModelProperty("style", Ut.button);
  t.setViewModelProperty("onPress", this.dismissMenu);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=72B file=chatgpt_wallet/src/WalletContent
// closure: this, e, Tt
function {
  return this.handleCardAction(e, Tt.ConfirmRemove);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=12 cpool=1 bc=2513B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: this
// closure: Tt, t, Z, Ut, Qe, K, Ue, wt, $, Xe, ee, te
function {
  this = this;
  t.beginRender(Z, undefined);
  t.setAttributeStyle("style", Ut.rename);
  t.beginComponent(Qe.Text, K, undefined, undefined);
  t.setViewModelProperty("typography", Ue.Typography.Headline);
  t.setViewModelProperty("value", wt.default.walletRemoveTitle());
  t.endComponent();
  t.beginComponent(Qe.Text, $, undefined, undefined);
  t.setViewModelProperty("typography", Ue.Typography.Subheadline);
  t.setViewModelProperty("tone", Qe.TextTone.Secondary);
  t.setViewModelProperty("value", wt.default.walletRemoveMessage());
  t.endComponent();
  t.beginComponent(Xe.Button, ee, undefined, undefined);
  t.setViewModelProperty("accessibilityId", "wallet.remove.confirm.".concat(e));
  t.setViewModelProperty("label", wt.default.walletRemove());
  if ((this.isBusy)) goto L_543;
  t.setViewModelProperty("disabled", this.isCardPending(e));
  t.setViewModelProperty("variant", Xe.ButtonVariant.Danger);
  t.setViewModelProperty("labelStyle", Ut.buttonLabel);
  t.setViewModelProperty("style", Ut.button);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.endComponent();
  t.beginComponent(Xe.Button, te, undefined, undefined);
  t.setViewModelProperty("accessibilityId", "wallet.remove.cancel.".concat(e));
  t.setViewModelProperty("label", wt.default.walletCancel());
  t.setViewModelProperty("disabled", this.isBusy);
  t.setViewModelProperty("variant", Xe.ButtonVariant.Ghost);
  t.setViewModelProperty("labelStyle", Ut.buttonLabel);
  t.setViewModelProperty("style", Ut.button);
  t.setViewModelProperty("onPress", this.dismissMenu);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=72B file=chatgpt_wallet/src/WalletContent
// args: t
// closure: this, e
function {
  return this.saveName(e.id, t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=138B file=chatgpt_wallet/src/WalletContent
// closure: this, e
function {
  return this.saveName(e.id, this.state.draftName);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=12 cpool=2 bc=2910B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: this
// closure: t, oe, Ut, ie, Ze, re, wt, ne, Xe, se, ae, Dt
function {
  this = this;
  t.beginRender(oe, undefined);
  t.setAttributeStyle("style", Ut.rename);
  t.beginRender(ie, undefined);
  t.setAttributeStyle("style", Ut.renameInput);
  t.beginComponent(Ze.TextInput, re, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", wt.default.walletCardName());
  t.setViewModelProperty("value", this.state.draftName);
  t.setViewModelProperty("variant", Ze.TextInputVariant.Settings);
  t.setViewModelProperty("autoSelect", true);
  t.setViewModelProperty("closesWhenReturnKeyPressed", false);
  if ((this.isBusy)) goto L_398;
  t.setViewModelProperty("disabled", this.isCardPending(e.id));
  t.setViewModelProperty("onChange", this.changeName);
  t.setViewModelProperty("onSubmit", function <atom:0>);
  t.endComponent();
  t.endRender();
  t.beginRender(ne, undefined);
  t.setAttributeStyle("style", Ut.renameActions);
  t.beginComponent(Xe.Button, se, undefined, undefined);
  if ((this.isBusy)) goto L_5ce;
  t.setViewModelProperty("disabled", this.isCardPending(e.id));
  t.setViewModelProperty("label", wt.default.walletCancel());
  t.setViewModelProperty("variant", Xe.ButtonVariant.Ghost);
  t.setViewModelProperty("labelStyle", Ut.buttonLabel);
  t.setViewModelProperty("style", Ut.button);
  t.setViewModelProperty("onPress", this.cancelRename);
  t.endComponent();
  t.beginComponent(Xe.Button, ae, undefined, undefined);
  if ((this.isBusy)) goto L_99c;
  if ((this.isCardPending(e.id))) goto L_99c;
  if ((!Dt(this.state.draftName))) goto L_99c;
  t.setViewModelProperty("disabled", (this.state.draftName.trim() === e.name));
  t.setViewModelProperty("label", wt.default.walletSave());
  t.setViewModelProperty("labelStyle", Ut.buttonLabel);
  t.setViewModelProperty("style", Ut.button);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.endComponent();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=103B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: this
function {
  return (e.id === this.wallet.preferredCardId);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=263B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: It, this
function {
  return {id: e.id, title: e.name, subtitle: It.maskedCardNumber(e.lastFour), selected: (e.id === this.wallet.preferredCardId)};
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=0 bc=860B file=chatgpt_wallet/src/WalletContent
// closure: t, tt, ce, l, this, a, d, wt, ot, s
function {
  t.beginComponent(tt.SettingsMenuRow, ce, l, undefined);
  if ((t.hasContext())) goto L_c9;
  t.setContext(this.context);
  t.setViewModelProperty("accessibilityValue", a);
  t.setViewModelProperty("actions", d);
  t.setViewModelProperty("disabled", this.isBusy);
  t.setViewModelProperty("label", wt.default.walletPreferred());
  t.setViewModelProperty("onFallbackPress", this.togglePreferred);
  t.setViewModelProperty("onSelect", this.setPreferred);
  t.setViewModelProperty("position", ot.SettingsRowPosition.Only);
  t.setViewModelProperty("value", s);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=726B file=chatgpt_wallet/src/WalletContent
// closure: t, $e, pe, s, a, this, wt
function {
  t.beginComponent($e.SettingsActionRow, pe, s, undefined);
  t.setViewModelProperty("appearance", $e.SettingsActionRowAppearance.Selection);
  t.setViewModelProperty("accessibilityValue", a);
  t.setViewModelProperty("disabled", this.isBusy);
  t.setViewModelProperty("expanded", this.state.choosingPreferred);
  t.setViewModelProperty("label", wt.default.walletPreferred());
  t.setViewModelProperty("onPress", this.togglePreferred);
  t.setViewModelProperty("value", s);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=13 cpool=2 bc=102B file=chatgpt_wallet/src/WalletContent
// closure: t, tt, ce, l, this, a, d, wt, ot, s, $e, pe, r
function {
  if (!(this.isPreferredPending)) goto L_58;
  goto L_65;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_62;
  goto L_65;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=16 cpool=1 bc=391B file=chatgpt_wallet/src/WalletContent
// closure: t, tt, ce, l, this, a, d, wt, ot, s, $e, pe, r, et, le, He
function {
  t.beginComponent(et.SettingsSection, le, undefined, undefined);
  t.setViewModelProperty("backgroundColor", He.OAIColor.BgElevatedPrimary);
  t.setViewModelProperty("borderColor", He.OAIColor.BorderDefault);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=0 bc=762B file=chatgpt_wallet/src/WalletContent
// closure: t, me, zt, this, s, a, ge, we, o, He
function {
  t.beginRender(me, undefined);
  t.setAttributeStyle("style", zt.value);
  this.renderPreferredValue(s, a);
  t.endRender();
  t.beginRender(ge, undefined);
  t.setAttributeStyle("style", zt.accessory);
  if (!(this.isPreferredPending)) goto L_19a;
  goto L_2d1;
  // [栈深重同步 1 -> 0]
  t.beginRender(we, undefined);
  t.setAttributeStyle("style", o.styles.menuIndicator);
  t.setAttributeString("tint", He.OAIColor.IconTertiary);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=17 cpool=1 bc=1299B file=chatgpt_wallet/src/WalletContent
// closure: t, me, zt, this, s, a, ge, we, o, He, he, ue, _e, ye, l, wt, d
function {
  t.beginRender(he, undefined);
  t.setAttributeStyle("style", zt.row);
  t.setAttributeNumber("borderRadius", this.sectionRadius);
  t.beginRender(ue, undefined);
  t.setAttributeStyle("style", zt.label);
  this.renderPreferredLabel();
  t.endRender();
  t.beginComponent(_e.NativeMenu, ye, l, undefined);
  if ((t.hasContext())) goto L_25e;
  t.setContext(this.context);
  t.setViewModelProperty("accessibilityLabel", wt.default.walletPreferred());
  t.setViewModelProperty("accessibilityValue", a);
  t.setViewModelProperty("actions", d);
  t.setViewModelProperty("attributes", zt.control.attributes);
  if ((this.isBusy)) goto L_417;
  t.setViewModelProperty("disabled", this.isPreferredPending);
  t.setViewModelProperty("onSelect", this.setPreferred);
  t.setViewModelProperty("previewsContent", true);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=44B file=chatgpt_wallet/src/WalletContent
// closure: this, s, a
function {
  this.renderPreferredSummary(s, a);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=684B file=chatgpt_wallet/src/WalletContent
// closure: this, s, a, t, Ye, ve, wt, Ut
function {
  t.beginComponent(Ye.Pressable, ve, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", wt.default.walletPreferred());
  t.setViewModelProperty("accessibilityValue", a);
  if ((this.isBusy)) goto L_167;
  t.setViewModelProperty("disabled", this.isPreferredPending);
  t.setViewModelProperty("onPress", this.togglePreferred);
  t.setViewModelProperty("style", Ut.preferredRow);
  t.setViewModelProperty("radius", this.sectionRadius);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_wallet/src/WalletContent
// closure: this, e
function {
  return this.setPreferred(e.id);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=14 cpool=0 bc=1091B file=chatgpt_wallet/src/WalletContent
// closure: t, fe, Ut, Qe, Se, e, i, Ue, wt, It, this, Ge, Me, qe
function {
  t.beginRender(fe, undefined);
  t.setAttributeStyle("style", Ut.cardText);
  t.beginComponent(Qe.Text, Se, e.name, undefined);
  if (!((i == null))) goto L_125;
  i;
  goto L_167;
  if (!((undefined.typography.Row == null))) goto L_1b1;
  undefined.typography.Row;
  t.setViewModelProperty("typography", Ue.Typography.Body);
  t.setViewModelProperty("value", wt.default.walletCardSummary(e.name, It.safeLastFour(e.lastFour)));
  t.endComponent();
  t.endRender();
  if (!((e.id === this.wallet.preferredCardId))) goto L_442;
  t.beginComponent(Ge.Icon, Me, undefined, undefined);
  t.setViewModelProperty("src", qe.default.check);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=15 cpool=2 bc=1002B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: this, t, fe, Ut, Qe, Se, i, Ue, wt, It, Ge, Me, qe, Ye, be
function {
  t.beginComponent(Ye.Pressable, be, e.id, undefined);
  t.setViewModelProperty("accessibilityId", "wallet.preferred.".concat(e.id));
  t.setViewModelProperty("accessibilityLabel", wt.default.walletCardSummary(e.name, It.safeLastFour(e.lastFour)));
  t.setViewModelProperty("accessibilityStateSelected", (e.id === this.wallet.preferredCardId));
  t.setViewModelProperty("disabled", this.isBusy);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setViewModelProperty("style", this.platformStyles.preferredChoice);
  t.setViewModelProperty("radius", this.sectionRadius);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=10 closure=36 cpool=6 bc=2592B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: o, i, r, n, s, a, d, l, this
// closure: It, t, tt, ce, wt, ot, $e, pe, et, le, He, me, zt, ge, we, he, ue, _e, ye, Ye, ve, Ut, fe, Qe, Se, Ue, Ge, Me, qe, be, Ke, de, Pe, Ce, Ae, Ie
function {
  this = this;
  let l;
  let d;
  let a;
  let s;
  let n;
  let r;
  let i;
  let o;
  o = Ke.resolveSettingsTheme();
  if (!(this.isAndroid)) goto L_6b;
  goto L_6c;
  // [栈深重同步 1 -> 0]
  i = undefined;
  r = _e.supportsNativeMenu(this.context);
  n = this.wallet.cards.find(function <atom:0>);
  if (!((undefined === n))) goto L_172;
  goto L_1bb;
  // [栈深重同步 1 -> 0]
  s = It.maskedCardNumber(n.lastFour);
  if (!((undefined === n))) goto L_1ca;
  goto L_25b;
  // [栈深重同步 1 -> 0]
  a = wt.default.walletEndingIn(It.safeLastFour(n.lastFour));
  d = this.wallet.cards.map(function <atom:0>);
  l = JSON.stringify([this.mountedAccountId, d]);
  t.beginRender(de, undefined);
  t.setAttributeStyle("style", Ut.preferred);
  if (!(e)) goto L_3c9;
  goto L_40e;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("marginTop", He.OAISpacing.TwoPointFive);
  if (!(this.isAndroid)) goto L_43c;
  goto L_449;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_446;
  goto L_449;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.beginRender(Pe, undefined);
  if (!(!r)) goto L_4ee;
  if (!(this.state.choosingPreferred)) goto L_4ee;
  goto L_4ef;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("height", 0);
  t.setAttribute("slowClipping", true);
  t.beginRender(Ce, undefined);
  t.setAttributeStyle("style", Ut.preferredChoices);
  if (!(!r)) goto L_65c;
  if (!(this.state.choosingPreferred)) goto L_65c;
  this.wallet.cards.forEach(function <atom:0>);
  t.endRender();
  t.endRender();
  if ((e)) goto L_9f7;
  t.beginRender(Ae, undefined);
  t.setAttributeStyle("style", Ut.preferredCaption);
  t.beginComponent(Qe.Text, Ie, undefined, undefined);
  if (!((i == null))) goto L_7b7;
  i;
  goto L_7f9;
  if (!((undefined.typography.Footer == null))) goto L_843;
  undefined.typography.Footer;
  t.setViewModelProperty("typography", Ue.Typography.Footnote);
  if (!((i == null))) goto L_87b;
  i;
  goto L_8bd;
  t.setViewModelProperty("color", undefined.colors.footer);
  t.setViewModelProperty("tone", Qe.TextTone.Tertiary);
  t.setViewModelProperty("value", wt.default.walletPreferredDescription());
  t.endComponent();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=0 bc=1347B file=chatgpt_wallet/src/WalletContent
// closure: t, Re, Ut, Oe, r, Qe, xe, wt, ke, e, this
function {
  t.beginRender(Re, undefined);
  t.setAttributeStyle("style", Ut.pendingPreferredContent);
  t.beginRender(Oe, undefined);
  t.setAttributeStyle("style", Ut.cardText);
  t.setAttributeNumber("gap", r.layout.rowLabelGap);
  t.beginComponent(Qe.Text, xe, undefined, undefined);
  t.setViewModelProperty("typography", r.typography.Row);
  t.setViewModelProperty("color", r.colors.text);
  t.setViewModelProperty("value", wt.default.walletPreferred());
  t.endComponent();
  t.beginComponent(Qe.Text, ke, undefined, undefined);
  t.setViewModelProperty("typography", r.typography.Description);
  t.setViewModelProperty("color", r.colors.value);
  t.setViewModelProperty("value", e);
  t.endComponent();
  t.endRender();
  this.renderPreferredLoading();
  t.endRender();
  return;
}

// fn <atom:0>  args=3 vars=5 closure=12 cpool=1 bc=1147B file=chatgpt_wallet/src/WalletContent
// args: e, o, i
// locals: r, this
// closure: t, Re, Ut, Oe, Qe, xe, wt, ke, Ke, ot, Ve, rt
function {
  this = this;
  let r;
  r = Ke.resolveSettingsTheme();
  t.beginComponent(ot.SettingsRow, Ve, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", wt.default.walletPreferred());
  t.setViewModelProperty("accessibilityValue", "".concat(o, ", ", wt.default.walletLoading()));
  t.setViewModelProperty("disabled", true);
  t.setViewModelProperty("dimmedWhenDisabled", false);
  t.setViewModelProperty("horizontalInset", Ke.resolveSettingsHorizontalInset(rt.Device.getWindowWidth()));
  t.setViewModelProperty("minHeight", r.layout.selectionMinimumHeight);
  t.setViewModelProperty("position", ot.SettingsRowPosition.Only);
  if (!(i)) goto L_3e0;
  goto L_425;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("verticalInset", r.layout.actionRowVerticalInset);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=9 cpool=0 bc=883B file=chatgpt_wallet/src/WalletContent
// args: e, o
// locals: this
// closure: t, Te, Ut, Ne, Ge, Le, qe, Ht, He
function {
  this = this;
  t.beginRender(Te, undefined);
  t.setAttributeStyle("style", Ut.cardText);
  this.renderPreferredLabel();
  t.endRender();
  t.beginRender(Ne, undefined);
  t.setAttributeStyle("style", Ut.preferredValue);
  this.renderPreferredValue(e, o);
  t.endRender();
  if (!(this.isPreferredPending)) goto L_1e6;
  goto L_372;
  // [栈深重同步 1 -> 0]
  t.beginComponent(Ge.Icon, Le, undefined, undefined);
  t.setViewModelProperty("src", qe.default.chevronRight);
  t.setViewModelProperty("size", Ht);
  t.setViewModelProperty("color", He.OAIColor.IconTertiary);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=103B file=chatgpt_wallet/src/WalletContent
// locals: this
function {
  this = this;
  return this.wallet.pendingChanges.preferredCard;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=139B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: this
function {
  this = this;
  return this.wallet.pendingChanges.cardIds.includes(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=352B file=chatgpt_wallet/src/WalletContent
// closure: t, Qe, We, Ue, wt
function {
  t.beginComponent(Qe.Text, We, undefined, undefined);
  t.setViewModelProperty("typography", Ue.Typography.Body);
  t.setViewModelProperty("value", wt.default.walletPreferred());
  t.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=441B file=chatgpt_wallet/src/WalletContent
// args: e, o
// closure: t, Qe, Ee, Ue
function {
  t.beginComponent(Qe.Text, Ee, e, undefined);
  t.setViewModelProperty("typography", Ue.Typography.Body);
  t.setViewModelProperty("tone", Qe.TextTone.Tertiary);
  t.setViewModelProperty("accessibilityLabel", o);
  t.setViewModelProperty("value", e);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=300B file=chatgpt_wallet/src/WalletContent
// locals: this
function {
  this = this;
  if (!(!this.isDestroyed())) goto L_12b;
  if (!((this.mountedAccountId.length > 0))) goto L_12b;
  if (!((this.mountedAccountId === this.viewModel.accountId))) goto L_12b;
  return (this.wallet.accountId === this.mountedAccountId);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=chatgpt_wallet/src/WalletContent
// args: t
// closure: e
function {
  return (t.id === e);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=378B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: this
// closure: Rt
function {
  this = this;
  if (!(this.hasMatchingAccount)) goto L_179;
  if (!(!this.isBusy)) goto L_179;
  if (!(!this.isCardPending(e))) goto L_179;
  if (!((this.wallet.status === Rt.WalletStatus.Ready))) goto L_179;
  return this.wallet.cards.some(function <atom:0>);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=89B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: this
function {
  this = this;
  if (!(this.canManage(e))) goto L_58;
  this.setState({menuCardId: e});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=238B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: this
// closure: je, at
function {
  this = this;
  null;
  je.resolveOAIControlStateAnimation();
  this.setStateAnimated(e, {appearanceBehavior: {enterAttributes: at.AnimationAppearance.FADE, exitAttributes: at.AnimationAppearance.FADE}});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=chatgpt_wallet/src/WalletContent
// args: t
// closure: e
function {
  return (t.id === e);
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=1 bc=542B file=chatgpt_wallet/src/WalletContent
// args: e, t
// locals: o, this
// closure: Tt, Wt
function {
  this = this;
  let o;
  if (!(!this.canManage(e))) goto L_2f;
  return;
  o = this.wallet.cards.find(function <atom:0>);
  if (!((undefined !== o))) goto L_21d;
  if (!((t === Tt.ConfirmRemove))) goto L_13b;
  if (!((this.state.removingCardId === e))) goto L_13b;
  goto L_21d;
  // [栈深重同步 1 -> 0]
  if (!((t === Tt.Remove))) goto L_198;
  null;
  Wt;
  goto L_21d;
  // [栈深重同步 1 -> 0]
  if (!((t === Tt.Rename))) goto L_21d;
  null;
  Wt;
  this.setAnimatedState({renamingCardId: e, draftName: o.name});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: t
function {
  return (e.id === t);
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=345B file=chatgpt_wallet/src/WalletContent
// closure: ct, wt, i
function {
  return ct.platformAlert.prompt({title: wt.default.walletRenameTitle(), initialValue: i.name, confirmTitle: wt.default.walletSave(), cancelTitle: wt.default.walletCancel()});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: t
function {
  return (e.id === t);
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=452B file=chatgpt_wallet/src/WalletContent
// closure: ct, wt, Tt
function {
  return ct.platformAlert.present({title: wt.default.walletRemoveTitle(), message: wt.default.walletRemoveMessage(), actions: [{id: "cancel", title: wt.default.walletCancel(), role: 1}, {id: Tt.Remove, title: wt.default.walletRemove(), role: 2}]});   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=6 cpool=4 bc=1609B file=chatgpt_wallet/src/WalletContent
// args: t, o
// locals: i, e, o#1, this
// closure: ct, wt, Tt, lt, Dt, e
function {
  this = this;
  let i;
  if (((undefined !== this.state.presentedCardAction))) goto L_75;
  if (!(!this.canManage(t))) goto L_79;
  return undefined; // async
  i = this.wallet.cards.find(function <atom:0>);
  if (!((undefined !== i))) goto L_647;
  this.setAnimatedState({presentedCardAction: o, cardActionError: undefined});
  try { // catch -> L_4e9
  if (!((o === Tt.Rename))) goto L_3b1;
  let o#1;
  let e;
  e = (await lt.withLocalNativeRefs(this.renderer.contextId, function <atom:0>));
  if (((undefined === e))) goto L_1f0;
  if (!(!this.canManage(t))) goto L_1fa;
  // gosub (finally 块) 1520
  return undefined; // async
  if (!(!Dt(e))) goto L_280;
  this.setState({cardActionError: wt.default.walletCardNameInvalid()});
  // gosub (finally 块) 1520
  return undefined; // async
  o#1 = e.trim();
  if (!((this.wallet.cards.find(function <atom:0>) == null))) goto L_31c;
  this.wallet.cards.find(function <atom:0>);
  goto L_33d;
  if (!((o#1 !== undefined.name))) goto L_3ad;
  this.context.controller.rename(t, o#1);
  goto L_4de;
  if (!((o === Tt.Remove))) goto L_4de;
  if (!(((await lt.withLocalNativeRefs(this.renderer.contextId, function <atom:0>)).selectedActionId === Tt.Remove))) goto L_4dd;
  if (!(this.canManage(t))) goto L_4dd;
  this.removeCard(t);
  <?>;
  // gosub (finally 块) 1520
  undefined;
  goto L_647;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_5ea
  if (!(e.isLoggingEnabled)) goto L_545;
  console.warn("Unable to complete Wallet card action");
  if (!(this.hasMatchingAccount)) goto L_5df;
  this.setState({cardActionError: wt.default.walletSetupErrorMessage()});
  <?>;
  // gosub (finally 块) 1520
  undefined;
  goto L_647;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1520
  throw <?>;
  if ((this.isDestroyed())) goto L_645;
  this.setAnimatedState({presentedCardAction: undefined});
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=786B file=chatgpt_wallet/src/WalletContent
// args: t
// locals: o, this
// closure: wt, e
function {
  this = this;
  this.localRemovals.add(t);
  try { // catch -> L_1cd
  this.context.controller.remove(t);
  if (!(this.isCardPending(t))) goto L_10f;
  goto L_1ca;
  // [栈深重同步 1 -> 0]
  this.localRemovals.delete(t);
  this.setState({cardActionError: wt.default.walletCardChangeUnconfirmed()});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_311
  this.localRemovals.delete(t);
  if (!(e.isLoggingEnabled)) goto L_271;
  console.warn("Wallet removal could not be started");
  if ((this.isDestroyed())) goto L_30e;
  this.setState({cardActionError: wt.default.walletSetupErrorMessage()});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=chatgpt_wallet/src/WalletContent
// args: e
// closure: t
function {
  return (e.id === t);
}

// fn <atom:0>  args=2 vars=6 closure=4 cpool=1 bc=907B file=chatgpt_wallet/src/WalletContent
// args: t, o
// locals: i, r, n, this
// closure: Dt, Bt, wt, e
function {
  this = this;
  let r;
  let i;
  i = o.trim();
  r = this.wallet.cards.find(function <atom:0>);
  if (!(this.canManage(t))) goto L_38a;
  if (!((this.state.renamingCardId === t))) goto L_38a;
  if (!(Dt(o))) goto L_38a;
  if (!((r == null))) goto L_123;
  r;
  goto L_144;
  if (!((i !== undefined.name))) goto L_38a;
  this.setState({draftName: o, renameError: undefined});
  try { // catch -> L_2b6
  this.context.controller.rename(t, i);
  if (!(this.isCardPending(t))) goto L_240;
  goto L_2b3;
  // [栈深重同步 1 -> 0]
  this.setState({renameError: wt.default.walletCardChangeUnconfirmed()});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_389
  if (!(e.isLoggingEnabled)) goto L_312;
  console.warn("Wallet rename could not be started");
  this.setState({renameError: wt.default.walletCardChangeUnconfirmed()});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=137B file=chatgpt_wallet/src/WalletContent
// closure: this
function {
  return this.setup.connect(this.context.presentationHost);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_wallet/src/WalletContent
// closure: this
function {
  return this.addCard();   // tail call
}

// fn <atom:0>  args=0 vars=5 closure=5 cpool=2 bc=2133B file=chatgpt_wallet/src/WalletContent
// locals: t, o, e, t#1, this
// closure: Rt, lt, xt, ft, e
function {
  this = this;
  let o;
  let t;
  t = false;
  if (!((true === this.viewModel.isEnrollmentIntroduction))) goto L_5c;
  goto L_61;
  // [栈深重同步 1 -> 0]
  o = "wallet";
  try { // catch -> L_6f5
  let e;
  e = this.setup.snapshot;
  if ((this.setup.needsConnectionRefresh)) goto L_1e2;
  if (!((e == null))) goto L_105;
  e;
  goto L_126;
  if (!((undefined.status !== Rt.WalletStatus.Ready))) goto L_1e2;
  if (!((e == null))) goto L_17b;
  e;
  goto L_19c;
  if (!((undefined.status !== Rt.WalletStatus.NotConnected))) goto L_235;
  e = (await this.setup.refresh(o));
  (await this.setup.refresh(o));
  if (((undefined === e))) goto L_263;
  if (!(!this.canContinueSetup)) goto L_26d;
  // gosub (finally 块) 1973
  return undefined; // async
  if (!((e == null))) goto L_278;
  e;
  goto L_299;
  if (!((undefined.status === Rt.WalletStatus.NotConnected))) goto L_546;
  let t#1;
  t#1 = (await lt.withLocalNativeRefs(this.renderer.contextId, function <atom:0>));
  if (!(!this.canContinueSetup)) goto L_382;
  // gosub (finally 块) 1973
  return undefined; // async
  this.setup.setAction(xt.WalletSetupAction.Idle);
  if (((undefined === t#1))) goto L_461;
  if (!((t#1 === ft.WalletSetupConnectionOutcome.Cancelled))) goto L_46b;
  // gosub (finally 块) 1973
  return undefined; // async
  if (!((t#1 === ft.WalletSetupConnectionOutcome.Connected))) goto L_540;
  e = (await this.setup.refresh(o));
  (await this.setup.refresh(o));
  if (((undefined === e))) goto L_536;
  if (!(!this.canContinueSetup)) goto L_546;
  // gosub (finally 块) 1973
  return undefined; // async
  e = undefined;
  undefined;
  if (!((e == null))) goto L_551;
  e;
  goto L_572;
  if (!((undefined.status === Rt.WalletStatus.Ready))) goto L_6be;
  this.setup.setAction(xt.WalletSetupAction.Idle);
  lt.withLocalNativeRefs(this.renderer.contextId, function <atom:0>);
  // gosub (finally 块) 1973
  return undefined; // async
  t = (await this.presentSetupError());
  (await this.presentSetupError());
  <?>;
  // gosub (finally 块) 1973
  undefined;
  goto L_7fe;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_7af
  if (!(e.isLoggingEnabled)) goto L_751;
  console.warn("Unable to continue Wallet setup");
  if (!(this.canContinueSetup)) goto L_7a4;
  t = (await this.presentSetupError());
  (await this.presentSetupError());
  <?>;
  // gosub (finally 块) 1973
  undefined;
  goto L_7fe;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1973
  throw <?>;
  this.setup.finish();
  // ret (finally 块) 
  if (!(t)) goto L_852;
  if (!(this.canContinueSetup)) goto L_852;
  this.startSetup();
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=255B file=chatgpt_wallet/src/WalletContent
// locals: this
// closure: Rt
function {
  this = this;
  if (!(this.hasMatchingAccount)) goto L_fe;
  if (!(this.setup.isActive)) goto L_fe;
  return (this.wallet.status !== Rt.WalletStatus.Unavailable);
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=481B file=chatgpt_wallet/src/WalletContent
// closure: ct, wt, Nt
function {
  return ct.platformAlert.present({title: wt.default.walletSetupErrorTitle(), message: wt.default.walletSetupErrorMessage(), actions: [{id: Nt.Cancel, title: wt.default.walletCancel(), role: 1}, {id: Nt.Retry, title: wt.default.walletRetry(), role: 0}]});   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=1 bc=422B file=chatgpt_wallet/src/WalletContent
// locals: this
// closure: ct, wt, Nt, xt, lt, e
function {
  this = this;
  this.setup.setAction(xt.WalletSetupAction.Failed);
  try { // catch -> L_144
  return ((await lt.withLocalNativeRefs(this.renderer.contextId, function <atom:0>)).selectedActionId === Nt.Retry); // async
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_1a5
  if (!(e.isLoggingEnabled)) goto L_1a0;
  console.warn("Unable to present Wallet setup error");
  return false; // async
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=112B file=chatgpt_wallet/src/WalletContent
// locals: this
// closure: Ot
function {
  this = this;
  Ot.requestWalletRefresh(this.context.controller, "wallet");
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=425B file=chatgpt_wallet/src/WalletContent
// args: e, o
// locals: i
// closure: t
function {
  let i;
  i = t.cards[o];
  if (((e.id !== i.id))) goto L_1a8;
  if (((e.name !== i.name))) goto L_1a8;
  if (((e.brand !== i.brand))) goto L_1a8;
  if (((e.lastFour !== i.lastFour))) goto L_1a8;
  return ((undefined === e.artworkUrl) != (undefined === i.artworkUrl));
}

// fn Et  args=2 vars=2 closure=1 cpool=1 bc=304B file=chatgpt_wallet/src/WalletContent
// args: e, t
// closure: qt
function {
  if (((e.cards.length !== t.cards.length))) goto L_12f;
  if ((e.cards.some(function <atom:0>))) goto L_12f;
  if (((e.preferredCardId !== t.preferredCardId))) goto L_12f;
  return (qt(e.savedContactInfo) !== qt(t.savedContactInfo));
}

// fn qt  args=1 vars=3 closure=0 cpool=0 bc=659B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: t, o
function {
  let o;
  let t;
  if (!((e == null))) goto L_f;
  e;
  goto L_30;
  t = undefined.contactAddress;
  if (!((t == null))) goto L_3c;
  t;
  goto L_89;
  if (!((undefined.city == null))) goto L_65;
  undefined.city;
  goto L_89;
  if (!((t == null))) goto L_94;
  t;
  goto L_e1;
  if (!((undefined.state == null))) goto L_bd;
  undefined.state;
  goto L_e1;
  o = [undefined.trim(), undefined.trim()].filter(Boolean).join(", ");
  if (!((e == null))) goto L_140;
  e;
  goto L_185;
  if (!((t == null))) goto L_190;
  t;
  goto L_1dd;
  if (!((undefined.line1 == null))) goto L_1b9;
  undefined.line1;
  goto L_1dd;
  if (!((t == null))) goto L_1e8;
  t;
  goto L_235;
  if (!((undefined.line2 == null))) goto L_211;
  undefined.line2;
  goto L_235;
  if (([undefined.name.trim(), undefined.trim(), undefined.trim(), o].filter(Boolean).join("
"))) goto L_292;
  return undefined;
}

// fn _t  args=1 vars=1 closure=0 cpool=0 bc=38B file=chatgpt_wallet/src/WalletContent
// args: e
function {
  return (e.cards.length >= 2);
}

// fn Dt  args=1 vars=3 closure=0 cpool=2 bc=113B file=chatgpt_wallet/src/WalletContent
// args: e
// locals: t, o
function {
  let o;
  let t;
  t = e.trim();
  o = new RegExp("[\\u0000-\\u001f\\u007f]").test(e);
  if (!((t.length > 0))) goto L_70;
  if (!((t.length <= 100))) goto L_70;
  return !o;
}

// fn <atom:0>  args=3 vars=163 closure=0 cpool=50 bc=14275B file=chatgpt_wallet/src/WalletContent
// args: require, module, exports
// locals: e, t, o, i, r, n, s, a, d, l, c, p, h, u, y, m, g, w, v, P, C, b, f, S, M, A, I, V, R, O, x, k, T, N, L, B, W, E, q, _, D, F, H, U, z, j, X, G, J, Y, Q, Z, K, $, ee, te, oe, ie, re, ne, se, ae, de, le, ce, pe, he, ue, ye, me, ge, we, ve, Pe, Ce, be, fe, Se, Me, Ae, Ie, Ve, Re, Oe, xe, ke, Te, Ne, Le, Be, We, Ee, qe, _e, De, Fe, He, Ue, ze, je, Xe, Ge, Je, Ye, Qe, Ze, Ke, $e, et, tt, ot, it, rt, nt, st, at, dt, lt, ct, pt, ht, ut, yt, mt, gt, wt, vt, Pt, Ct, bt, ft, St, Mt, At, It, Vt, Rt, Ot, xt, kt, Tt, Nt, Lt, Bt, Wt, WalletContent, <class_fields_init>, WalletContent#1, Et, qt, _t, Dt, Ft, Ht, Ut, zt, jt, Xt, Gt, Jt
function {
  Et = function Et;
  qt = function qt;
  _t = function _t;
  Dt = function Dt;
  let Jt;
  let Gt;
  let Xt;
  let jt;
  let zt;
  let Ut;
  let Ht;
  let Ft;
  let WalletContent#1;
  let Wt;
  let Bt;
  let kt;
  let xt;
  let Ot;
  let Rt;
  let Vt;
  let It;
  let At;
  let Mt;
  let St;
  let ft;
  let bt;
  let Ct;
  let Pt;
  let vt;
  let wt;
  let gt;
  let mt;
  let yt;
  let ut;
  let ht;
  let pt;
  let ct;
  let lt;
  let dt;
  let at;
  let st;
  let nt;
  let rt;
  let it;
  let ot;
  let tt;
  let et;
  let $e;
  let Ke;
  let Ze;
  let Qe;
  let Ye;
  let Je;
  let Ge;
  let Xe;
  let je;
  let ze;
  let Ue;
  let He;
  let Fe;
  let De;
  let _e;
  let qe;
  let Ee;
  let We;
  let Be;
  let Le;
  let Ne;
  let Te;
  let ke;
  let xe;
  let Oe;
  let Re;
  let Ve;
  let Ie;
  let Ae;
  let Me;
  let Se;
  let fe;
  let be;
  let Ce;
  let Pe;
  let ve;
  let we;
  let ge;
  let me;
  let ye;
  let ue;
  let he;
  let pe;
  let ce;
  let le;
  let de;
  let ae;
  let se;
  let ne;
  let re;
  let ie;
  let oe;
  let te;
  let ee;
  let $;
  let K;
  let Z;
  let Q;
  let Y;
  let J;
  let G;
  let X;
  let j;
  let z;
  let U;
  let H;
  let F;
  let D;
  let _;
  let q;
  let E;
  let W;
  let B;
  let L;
  let N;
  let T;
  let k;
  let x;
  let O;
  let R;
  let V;
  let I;
  let A;
  let M;
  let S;
  let f;
  let b;
  let C;
  let P;
  let v;
  let w;
  let g;
  let m;
  let y;
  let u;
  let h;
  let p;
  let c;
  let l;
  let d;
  let a;
  let s;
  let n;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletContent = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeComponentPrototype(undefined, "kQGiyjEqWsWl05qO");
  i = t.makeComponentPrototype(undefined, "5SPzaRxC_jSUqQfs");
  r = t.makeComponentPrototype(undefined, "ZBRde0Cv08_ccEyx");
  n = t.makeComponentPrototype(undefined, "pNabh93Uoie8RZz1");
  s = t.makeComponentPrototype(undefined, "fqar1U_2Dtjyix3n");
  a = t.makeNodePrototype("view", ["accessibilityId", "wallet.screen"], "e24SKZ4Ncj9RIuod");
  d = t.makeComponentPrototype(["accessibilityId", "wallet.scroll"], "G7nnPtJDAjApsuMR");
  l = t.makeNodePrototype("layout", undefined, "A6PWrM7payfd3EPt");
  c = t.makeComponentPrototype(["numberOfLines", 0], "BAjiN253OC4Qu8uT");
  p = t.makeNodePrototype("layout", undefined, "eALvTY8lODmZm1_v");
  h = t.makeComponentPrototype(["accessibilityId", "wallet.add-card"], "72jcH3kd0A_FfNRb");
  u = t.makeNodePrototype("view", undefined, "5xVQ62I9hE7graS_");
  y = t.makeNodePrototype("image", undefined, "q0em0HGewQ7NIBfS");
  m = t.makeComponentPrototype(["numberOfLines", 0], "Pl4Wv_iWgUFOnK-i");
  g = t.makeComponentPrototype(["numberOfLines", 0], "yqLzqIndNgLUxx-f");
  w = t.makeComponentPrototype(["borderWidth", 1, "bottomMargin", 0], "M9yVab0_4lsC9oFh");
  v = t.makeComponentPrototype(["accessibilityId", "wallet.address"], "NEl4c0Y5mC-sRgEk");
  P = t.makeComponentPrototype(["accessibilityId", "wallet.address"], "gLdcnGOv_W_ZGciM");
  C = t.makeNodePrototype("layout", undefined, "maBXBrtBEf1JaeHV");
  b = t.makeNodePrototype("layout", undefined, "TsLVuppbM0ILikA0");
  f = t.makeComponentPrototype(["numberOfLines", 0], "vThHxqIyCLgfL7yD");
  S = t.makeNodePrototype("layout", undefined, "JPovIpw6wDP7YHfY");
  M = t.makeComponentPrototype(["numberOfLines", 0, "align", "right"], "ljuol4TIzCfsr7Hx");
  A = t.makeComponentPrototype(undefined, "tE7PM7Ag4HnfSTXZ");
  I = t.makeComponentPrototype(["accessibilityId", "wallet.address.loading"], "Bs0X2M3cB6XgLxha");
  V = t.makeNodePrototype("layout", undefined, "1_GHIyjVSlqR2xhi");
  R = t.makeComponentPrototype(["accessibilityId", "wallet.loading"], "4zorm9fRYtm_EwCa");
  O = t.makeComponentPrototype(["numberOfLines", 0], "Gkf8iMLXjzgTEyXI");
  x = t.makeComponentPrototype(["accessibilityId", "wallet.connect"], "XNVynVJS52B-MygI");
  k = t.makeComponentPrototype(["accessibilityId", "wallet.retry"], "pilNY4uKK1Tbo1Bp");
  T = t.makeComponentPrototype(undefined, "v0Fe9mzOBCmmpmJD");
  N = t.makeNodePrototype("layout", undefined, "Y1UYsV6lp-bJH1sB");
  L = t.makeComponentPrototype(["numberOfLines", 0], "xdz3RxPwygs8GNOI");
  B = t.makeNodePrototype("view", undefined, "shhEdjEA4nestVeY");
  W = t.makeNodePrototype("layout", undefined, "qOdby4cRPFZntbox");
  E = t.makeComponentPrototype(undefined, "-wcZlzvJc2arcwnC");
  q = t.makeNodePrototype("layout", undefined, "DrbrxzK9sBmGWGUT");
  _ = t.makeComponentPrototype(["numberOfLines", 0], "ZK95OmfCWO_NidVr");
  D = t.makeComponentPrototype(["numberOfLines", 0], "9QlOtsMt5hQjXpBM");
  F = t.makeNodePrototype("view", undefined, "hG3V-eNEm-iGMkOr");
  H = t.makeNodePrototype("layout", undefined, "C9o4LucBq0fRaWg3");
  U = t.makeComponentPrototype(undefined, "32s5BnOMuO41F7eh");
  z = t.makeNodePrototype("layout", undefined, "YqfYdrfvI0i_QBGg");
  j = t.makeComponentPrototype(["iconName", "ellipsis"], "MMBDQg5Hyedbz5uo");
  X = t.makeComponentPrototype(undefined, "BXPDIl2j2FoARt1y");
  G = t.makeNodePrototype("layout", undefined, "PgiKHSo6uVPRlLM_");
  J = t.makeComponentPrototype(undefined, "X0ZFfCn9H8EAgJWO");
  Y = t.makeComponentPrototype(undefined, "Dso-rNdsdXI2HerF");
  Q = t.makeComponentPrototype(undefined, "NDyZKXmmexv5YV7d");
  Z = t.makeNodePrototype("layout", undefined, "ELv3C3aJy0Xg8L7U");
  K = t.makeComponentPrototype(["numberOfLines", 0], "79GVagkg-i-jq0_c");
  $ = t.makeComponentPrototype(["numberOfLines", 0], "ErizX-HzLVhnVVNW");
  ee = t.makeComponentPrototype(undefined, "9g3BujsJJZIVvXXX");
  te = t.makeComponentPrototype(undefined, "zXaptguGIjkF9E76");
  oe = t.makeNodePrototype("layout", undefined, "wmwn9vOb-jRXpAB8");
  ie = t.makeNodePrototype("view", undefined, "rfAv5rf64u5PF9ye");
  re = t.makeComponentPrototype(["accessibilityId", "wallet.rename.input", "maxLength", 100], "Dk1asAMxCsv54onU");
  ne = t.makeNodePrototype("layout", undefined, "I1Qtq3es5UcDA1zv");
  se = t.makeComponentPrototype(["accessibilityId", "wallet.rename.cancel"], "X88VUQTPBkd7xEfJ");
  ae = t.makeComponentPrototype(["accessibilityId", "wallet.rename.save"], "N7NzfpLSBFwgLOhH");
  de = t.makeNodePrototype("layout", undefined, "IYYfocrsKMP_MFe3");
  le = t.makeComponentPrototype(["borderWidth", 1, "bottomMargin", 0], "xJ10X5CtioQZtcz2");
  ce = t.makeComponentPrototype(["accessibilityId", "wallet.preferred"], "rLtd-14nzDFMWEAB");
  pe = t.makeComponentPrototype(["accessibilityId", "wallet.preferred"], "2eo_km-GNeY7_xyI");
  he = t.makeNodePrototype("view", undefined, "HiYuE3OP91vlpUX3");
  ue = t.makeNodePrototype("layout", undefined, "GpWhLHpXokvkxqis");
  ye = t.makeComponentPrototype(["accessibilityId", "wallet.preferred"], "2zWpPD2klKgNZjs7");
  me = t.makeNodePrototype("layout", undefined, "i_R4CIopqOAcPuzJ");
  ge = t.makeNodePrototype("layout", undefined, "XF3iJb0fpWOjWqQS");
  we = t.makeNodePrototype("image", undefined, "sWp8F7AYuv_OrSX4");
  ve = t.makeComponentPrototype(["accessibilityId", "wallet.preferred"], "wLkhRDi87joNEpdI");
  Pe = t.makeNodePrototype("view", undefined, "dZ0DXKOet9XP4A1q");
  Ce = t.makeNodePrototype("layout", undefined, "9aYJ__-X1PnDxyla");
  be = t.makeComponentPrototype(undefined, "lGsFiPGk70KQ-vyv");
  fe = t.makeNodePrototype("layout", undefined, "bwxAh9jha8iKkzu0");
  Se = t.makeComponentPrototype(["numberOfLines", 0], "wFzqfz5ykBz-2S9h");
  Me = t.makeComponentPrototype(["size", 20], "69qcpQ4dh3PUpIFt");
  Ae = t.makeNodePrototype("layout", undefined, "4R_WyUgnhPyo0jg_");
  Ie = t.makeComponentPrototype(["numberOfLines", 0], "o4OaOXoW5BQz5Ai9");
  Ve = t.makeComponentPrototype(["accessibilityId", "wallet.preferred", "accessibilityCategory", "view"], "QtvgumS_zjprZIGt");
  Re = t.makeNodePrototype("layout", undefined, "Ze9eRnVDRU0a73_t");
  Oe = t.makeNodePrototype("layout", undefined, "Zvyvp1Rgb8Lywyel");
  xe = t.makeComponentPrototype(["numberOfLines", 0], "ySlUnlEJ3FOBmwhh");
  ke = t.makeComponentPrototype(["numberOfLines", 0], "hIrbB8i3duTk5C6z");
  Te = t.makeNodePrototype("layout", undefined, "JFaugqEYY-1_SNxo");
  Ne = t.makeNodePrototype("layout", undefined, "tKy4N4qoAvILNoRe");
  Le = t.makeComponentPrototype(undefined, "ZS0YRlQf2bwB5IjG");
  Be = t.makeComponentPrototype(["accessibilityId", "wallet.preferred.loading"], "4iHK29oUTHkJlaDQ");
  We = t.makeComponentPrototype(["numberOfLines", 0], "JAmygIBu-CeaQyEL");
  Ee = t.makeComponentPrototype(["numberOfLines", 0, "align", "right"], "Xz5FbZU7LlTdFR8f");
  qe = require("dil_icon_assets/res");
  _e = require("native_menu/src/NativeMenu");
  De = require("native_menu/src/NativeMenuButton");
  Fe = require("oai_core/src/OAITheme");
  He = require("oai_core/src/OAITokens");
  Ue = require("oai_core/src/OAITypography");
  ze = require("oai_ui/src/components/ActivityIndicator");
  je = require("oai_ui/src/animation/OAIControlAnimations");
  Xe = require("oai_ui/src/components/Button");
  Ge = require("oai_ui/src/components/Icon");
  Je = require("oai_ui/src/components/IconButton");
  Ye = require("oai_ui/src/components/Pressable");
  Qe = require("oai_ui/src/components/Text");
  Ze = require("oai_ui/src/components/TextInput");
  Ke = require("oai_ui/src/components/settings/SettingsTheme");
  $e = require("oai_ui/src/components/settings/SettingsActionRow");
  et = require("oai_ui/src/components/settings/SettingsSection");
  tt = require("oai_ui/src/components/settings/SettingsMenuRow");
  ot = require("oai_ui/src/components/settings/SettingsRow");
  it = require("valdi_core/src/Component");
  rt = require("valdi_core/src/Device");
  nt = require("valdi_core/src/LocalizableStrings");
  st = require("valdi_core/src/localization/LocaleResolver");
  at = require("valdi_core/src/AnimationOptions");
  dt = require("valdi_core/src/Style");
  lt = require("valdi_core/src/NativeReferences");
  ct = require("valdi_platform_alert/src/PlatformAlert");
  pt = require("valdi_navigation/src/NavigationController");
  ht = require("valdi_ui/src/ControlMaterial");
  ut = require("valdi_ui/src/Platform");
  yt = require("valdi_ui/src/components/RefreshControl");
  mt = require("valdi_core/src/SystemFont");
  gt = require("../res");
  wt = require("./Strings");
  vt = require("./WalletNamedText");
  Pt = require("./WalletSetupContent");
  Ct = require("./WalletContactContent");
  bt = require("./WalletAddressPage");
  ft = require("./WalletCapabilities");
  St = require("./WalletCardSection");
  Mt = require("chatgpt_wallet_core/src/WalletContactInfo");
  At = require("./WalletCardArtwork");
  It = require("./WalletCardNumber");
  Vt = require("chatgpt_wallet_core/src/WalletHostState");
  Rt = require("chatgpt_wallet_core/src/WalletModels");
  Ot = require("chatgpt_wallet_core/src/WalletRefresh");
  xt = require("./WalletSetupModel");
  kt = require("./WalletManagementInsets");
  if ((Tt)) goto L_1711;
  Tt = {};
  !function <atom:0>({});
  if ((Nt)) goto L_171f;
  Nt = {};
  function <atom:0>({});
  if ((Lt)) goto L_172c;
  Lt = {};
  function <atom:0>({});
  Bt = {renamingCardId: undefined, draftName: "", renameError: undefined};
  null;
  Bt;
  Wt = {cardActionError: undefined, presentedAddressId: undefined, menuCardId: undefined, removingCardId: undefined, choosingPreferred: false};
  let WalletContent;
  let <class_fields_init>;
  class WalletContent extends it.StatefulComponent { ... }
  <proto:WalletContent>.onCreate = function <atom:0>;
  <proto:WalletContent>.onDestroy = function <atom:0>;
  <proto:WalletContent>.closeAfterLastRemoval = function <atom:0>;
  <proto:WalletContent>.wallet = function <atom:0>;
  <proto:WalletContent>.hasPendingLocalRemoval = function <atom:0>;
  <proto:WalletContent>.showsSetup = function <atom:0>;
  <proto:WalletContent>.isBusy = function <atom:0>;
  <proto:WalletContent>.onViewModelUpdate = function <atom:0>;
  <proto:WalletContent>.onRender = function <atom:0>;
  <proto:WalletContent>.renderContact = function <atom:0>;
  <proto:WalletContent>.addressNavigator = function <atom:0>;
  <proto:WalletContent>.renderManagement = function <atom:0>;
  <proto:WalletContent>.renderHero = function <atom:0>;
  <proto:WalletContent>.renderAddress = function <atom:0>;
  <proto:WalletContent>.renderAddressContent = function <atom:0>;
  <proto:WalletContent>.renderStatus = function <atom:0>;
  <proto:WalletContent>.renderCards = function <atom:0>;
  <proto:WalletContent>.renderCard = function <atom:0>;
  <proto:WalletContent>.renderCardMenu = function <atom:0>;
  <proto:WalletContent>.renderMenuFallback = function <atom:0>;
  <proto:WalletContent>.renderRemoval = function <atom:0>;
  <proto:WalletContent>.renderRename = function <atom:0>;
  <proto:WalletContent>.renderPreferred = function <atom:0>;
  <proto:WalletContent>.renderPendingPreferred = function <atom:0>;
  <proto:WalletContent>.renderPreferredSummary = function <atom:0>;
  <proto:WalletContent>.isPreferredPending = function <atom:0>;
  <proto:WalletContent>.isCardPending = function <atom:0>;
  <proto:WalletContent>.renderPreferredLabel = function <atom:0>;
  <proto:WalletContent>.renderPreferredValue = function <atom:0>;
  <proto:WalletContent>.hasMatchingAccount = function <atom:0>;
  <proto:WalletContent>.canManage = function <atom:0>;
  <proto:WalletContent>.openMenu = function <atom:0>;
  <proto:WalletContent>.setAnimatedState = function <atom:0>;
  <proto:WalletContent>.handleCardAction = function <atom:0>;
  <proto:WalletContent>.presentCardAction = function <atom:0>;
  <proto:WalletContent>.removeCard = function <atom:0>;
  <proto:WalletContent>.saveName = function <atom:0>;
  <proto:WalletContent>.refreshAndContinueSetup = function <atom:0>;
  <proto:WalletContent>.canContinueSetup = function <atom:0>;
  <proto:WalletContent>.presentSetupError = function <atom:0>;
  <proto:WalletContent>.refreshInventory = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletContent>;
  WalletContent = function <atom:0>;
  // close_loc <class_fields_init>
  WalletContent#1 = function <atom:0>;
  exports.WalletContent = WalletContent#1;
  Ft = {font: "system-semibold 22", lineHeight: 28, native: {font: mt.semanticFont(mt.SYSTEM_SEMIBOLD_FONT_NAME, mt.SemanticFontTextStyle.Title2)}};
  Ht = 20;
  null;
  Ue.resolveOAITypography(Ue.Typography.SubheadlineMedium, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});
  Ut = {menuAnchor: new dt.Style({width: 44, height: 44}), fallbackCardLoading: new dt.Style({width: He.resolveOAIControlHeight(undefined), height: He.resolveOAIControlHeight(undefined), alignItems: "center", justifyContent: "center"}), cardLoading: new dt.Style({width: 44, height: 44, alignItems: "center", justifyContent: "center"}), root: new dt.Style({backgroundColor: He.OAIColor.BgCanvas, width: "100%", height: "100%"}), content: new dt.Style({padding: He.OAISpacing.Two, paddingTop: He.OAISpacing.Four, gap: He.OAISpacing.Three, width: "100%"}), hero: new dt.Style({backgroundColor: He.OAIColor.BgPrimary, borderColor: He.OAIColor.BorderDefault, borderWidth: 1, padding: He.OAISpacing.TwoPointFive, gap: He.OAISpacing.One, width: "100%"}), heroImage: new dt.Style({width: 32, height: 32, accessibilityNavigation: "ignored"}), cards: new dt.Style({gap: He.OAISpacing.OneAndHalf, width: "100%"}), card: new dt.Style({backgroundColor: He.OAIColor.BgPrimary, borderColor: He.OAIColor.BorderDefault, borderWidth: 1, paddingTop: He.OAISpacing.Two, paddingBottom: He.OAISpacing.Two, paddingLeft: He.OAISpacing.TwoPointFive, paddingRight: He.OAISpacing.One, width: "100%"}), cardRow: new dt.Style({flexDirection: "row", alignItems: "center", gap: He.OAISpacing.Two, minHeight: 44, width: "100%"}), cardText: new dt.Style({flexGrow: 1, flexShrink: 1, gap: He.OAISpacing.Quarter}), pendingPreferredContent: new dt.Style({width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}), preferred: new dt.Style({width: "100%"}), preferredChoices: new dt.Style({paddingTop: He.OAISpacing.OneAndHalf, gap: He.OAISpacing.OneAndHalf}), preferredRow: new dt.Style({flexDirection: "row", alignItems: "center", gap: He.OAISpacing.One, backgroundColor: He.OAIColor.BgPrimary, borderColor: He.OAIColor.BorderDefault, borderWidth: 1, minHeight: 54, paddingLeft: He.OAISpacing.TwoPointFive, paddingRight: He.OAISpacing.TwoPointFive, paddingTop: He.OAISpacing.OneAndHalf, paddingBottom: He.OAISpacing.OneAndHalf, width: "100%"}), preferredValue: new dt.Style({flexShrink: 1, maxWidth: "50%"}), addressContent: new dt.Style({flexDirection: "row", alignItems: "center", gap: He.OAISpacing.One, width: "100%"}), addressLabel: new dt.Style({alignSelf: "flex-start", flexGrow: 1, flexShrink: 1}), preferredChoice: new dt.Style({flexDirection: "row", alignItems: "center", gap: He.OAISpacing.One, minHeight: 48, padding: He.OAISpacing.Two, backgroundColor: He.OAIColor.BgPrimary, width: "100%"}), preferredCaption: new dt.Style({paddingTop: He.OAISpacing.OneAndHalf, paddingLeft: He.OAISpacing.TwoPointFive, paddingRight: He.OAISpacing.TwoPointFive}), footer: new dt.Style({position: "absolute", bottom: He.OAISpacing.Two, right: 0, alignItems: "flex-end", marginLeft: He.OAISpacing.Four, marginRight: He.OAISpacing.Four, maxWidth: "100%"}), button: new dt.Style({height: "auto", minHeight: 48, paddingTop: He.OAISpacing.OneAndHalf, paddingBottom: He.OAISpacing.OneAndHalf, maxWidth: "100%"}), buttonLabel: new dt.Style({numberOfLines: 0}), status: new dt.Style({gap: He.OAISpacing.Two, alignItems: "center", width: "100%"}), rename: new dt.Style({gap: He.OAISpacing.One, paddingTop: He.OAISpacing.OneAndHalf, paddingRight: He.OAISpacing.OneAndHalf, width: "100%"}), renameInput: new dt.Style({borderColor: He.OAIColor.BorderDefault, borderWidth: 1, borderRadius: He.OAIRadius.Md, width: "100%"}), renameActions: new dt.Style({flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end", gap: He.OAISpacing.One, width: "100%"})};
  zt = {row: Ut.preferredRow.extend({accessibilityNavigation: "passthrough", paddingTop: 0, paddingBottom: 0}), label: Ut.cardText.extend({accessibilityNavigation: "ignored", paddingTop: He.OAISpacing.OneAndHalf, paddingBottom: He.OAISpacing.OneAndHalf}), control: new dt.Style({flexDirection: "row", alignItems: "center", gap: He.OAISpacing.One, flexShrink: 1, width: "auto", maxWidth: "50%", minWidth: 44, minHeight: 44, paddingTop: He.OAISpacing.OneAndHalf, paddingBottom: He.OAISpacing.OneAndHalf}), value: new dt.Style({flexShrink: 1}), accessory: new dt.Style({width: Ht, alignItems: "center"})};
  null;
  Ut;
  jt = {root: Ut.root.extend({backgroundColor: He.OAIColor.BgCanvasSubtle})};
  Xt = {button: Ut.button.extend({backgroundColor: He.OAIColor.ThemeText}), pressed: new dt.Style({backgroundColor: He.OAIColor.ThemeText}), unavailable: Ut.button.extend({backgroundColor: He.OAIColor.InteractiveBgControlDefault})};
  null;
  He.resolveOAITextStyle(He.OAITextSize.HeadlineSmall);
  Gt = {letterSpacing: 0.1};
  null;
  Ut;
  Jt = {content: Ut.content.extend({paddingTop: He.OAISpacing.OneAndHalf}), hero: Ut.hero.extend({backgroundColor: He.OAIColor.BgElevatedPrimary, padding: He.OAISpacing.Three, gap: He.OAISpacing.Two}), card: Ut.card.extend({backgroundColor: He.OAIColor.BgElevatedPrimary}), preferredChoice: Ut.preferredChoice.extend({backgroundColor: He.OAIColor.BgElevatedPrimary, borderColor: He.OAIColor.BorderDefault, borderWidth: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletContent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
