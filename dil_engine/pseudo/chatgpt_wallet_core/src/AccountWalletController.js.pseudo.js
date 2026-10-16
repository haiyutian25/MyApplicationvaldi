// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
function {
  t.Writing = 0;
  t[0] = "Writing";
  t.Reconciling = 1;
  t[1] = "Reconciling";
  return;
}

// fn <atom:0>  args=2 vars=3 closure=6 cpool=0 bc=445B file=chatgpt_wallet_core/src/AccountWalletController
// args: t, i
// locals: this
// closure: <class_fields_init>, n, a, e, s, l
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.platformServices = t;
  this.accountId = i;
  this.supportsContactSaveCompletion = true;
  this.orbitNameSubscription = new n.Subscription();
  this.active = true;
  this.observed = false;
  this.operationId = 0;
  this.inventoryRevision = 0;
  this.contactReadId = 0;
  this.rowMutations = new Map();
  this.enrollmentId = 0;
  this.api = new a.WalletApi(new e.OAINetworkClient(t));
  this.state = new s.BehaviorSubject({accountId: i, status: l.WalletStatus.Loading, cards: [], isBusy: false, pendingChanges: {cardIds: [], preferredCard: false}});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=160B file=chatgpt_wallet_core/src/AccountWalletController
// locals: this
function {
  this = this;
  if ((this.observed)) goto L_59;
  this.observed = true;
  this.refresh();
  return this.state.asObservable();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_wallet_core/src/AccountWalletController
// locals: this
function {
  this = this;
  return this.inventoryRefreshSource;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=chatgpt_wallet_core/src/AccountWalletController
// locals: this
function {
  this = this;
  if (!(this.canContinueEnrollment)) goto L_4c;
  return (undefined === this.enrollmentFlow);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=681B file=chatgpt_wallet_core/src/AccountWalletController
// locals: this
// closure: l
function {
  this = this;
  if (!(this.active)) goto L_2a8;
  if ((!this.state.value.isBusy)) goto L_d9;
  if (!((this.inventoryReadId === this.operationId))) goto L_2a8;
  if (!((undefined === this.state.value.enrollment))) goto L_2a8;
  if (((this.state.value.status === l.WalletStatus.Ready))) goto L_2a8;
  return (this.state.value.status === l.WalletStatus.NotConnected);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// closure: this
function {
  return this.updateOrbitName(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=126B file=chatgpt_wallet_core/src/AccountWalletController
// closure: t, this
function {
  if (!(t.isLoggingEnabled)) goto L_56;
  console.warn("Wallet Orbit name observation failed");
  this.updateOrbitName(undefined);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=2 bc=309B file=chatgpt_wallet_core/src/AccountWalletController
// args: e
// locals: i, this
// closure: t, n
function {
  this = this;
  let i;
  if (!(!this.active)) goto L_2b;
  return;
  this.orbitNameSubscription.unsubscribe();
  i = new n.Subscription();
  this.orbitNameSubscription = i;
  this.updateOrbitName(undefined);
  i.add(e.subscribe({next: function <atom:0>, error: function <atom:0>}));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=283B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: e, this
function {
  this = this;
  let e;
  if (!((t == null))) goto L_e;
  t;
  goto L_32;
  if ((undefined.trim())) goto L_37;
  e = undefined;
  if (!((e !== this.state.value.orbitName))) goto L_11a;
  null;
  this.state.value;
  this.publish({orbitName: e});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=192B file=chatgpt_wallet_core/src/AccountWalletController
// locals: this
function {
  this = this;
  if (!(this.canStart())) goto L_bf;
  if (!((true !== this.state.value.isRefreshing))) goto L_bf;
  this.readInventory(undefined);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=1225B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: e, this
// closure: c, l
function {
  this = this;
  let e;
  if (!(!this.active)) goto L_76;
  return {outcome: c.WalletRefreshOutcome.Cancelled}; // async
  if (!(this.state.value.isBusy)) goto L_172;
  if (!((this.inventoryReadId !== this.operationId))) goto L_172;
  return {outcome: c.WalletRefreshOutcome.Busy}; // async
  e = (await this.readInventory(t));
  if (!(!this.active)) goto L_20b;
  return {outcome: c.WalletRefreshOutcome.Cancelled}; // async
  if (!((undefined === e))) goto L_25b;
  goto L_4bb;
  // [栈深重同步 2 -> 1]
  if (!((e.status === l.WalletStatus.Ready))) goto L_30f;
  goto L_4bb;
  // [栈深重同步 2 -> 1]
  if (!((e.status === l.WalletStatus.NotConnected))) goto L_3c3;
  goto L_4bb;
  // [栈深重同步 2 -> 1]
  if (!((e.status === l.WalletStatus.Unavailable))) goto L_476;
  goto L_4bb;
  // [栈深重同步 2 -> 1]
  return {outcome: c.WalletRefreshOutcome.Error, snapshot: e}; // async
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=362B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: e, this
function {
  this = this;
  let e;
  if ((!this.active)) goto L_da;
  if (!(this.state.value.isBusy)) goto L_106;
  if (!((this.inventoryReadId !== this.operationId))) goto L_106;
  return Promise.resolve(undefined);   // tail call
  this.operationId = (this.operationId ++);
  e = (this.operationId ++);
  this.inventoryReadId = e;
  return this.reloadInventory(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=528B file=chatgpt_wallet_core/src/AccountWalletController
// args: t, e
// locals: this
// closure: l
function {
  this = this;
  this.inventoryRefreshSource = e;
  this.api.invalidateLink();
  null;
  this.state.value;
  if ((this.state.value.isBusy)) goto L_1d4;
  this.publish({isBusy: (this.state.value.status !== l.WalletStatus.Ready), isRefreshing: true, errorMessage: undefined});
  return this.startInventoryRead(t);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=2 bc=233B file=chatgpt_wallet_core/src/AccountWalletController
// args: t, e
// locals: i, this
// closure: o
function {
  this = this;
  let i;
  i = e.trim();
  if (((i.length > 100))) goto L_e8;
  if ((new RegExp("[\\u0000-\\u001f\\u007f]").test(e))) goto L_e8;
  this.mutate({kind: o.WalletCardMutationKind.Rename, cardId: t, name: i});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=227B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: this
// closure: o
function {
  this = this;
  if (!((this.state.value.preferredCardId !== t))) goto L_e2;
  this.mutate({kind: o.WalletCardMutationKind.SetPreferred, cardId: t});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=121B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: this
// closure: o
function {
  this = this;
  this.mutate({kind: o.WalletCardMutationKind.Remove, cardId: t});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=123B file=chatgpt_wallet_core/src/AccountWalletController
// locals: this
// closure: i
function {
  this = this;
  if ((!i.isVersionAtLeast(201))) goto L_53;
  if (!((undefined === this.enrollmentFlow))) goto L_7a;
  return this.prepareEnrollment();   // tail call
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_wallet_core/src/AccountWalletController
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_wallet_core/src/AccountWalletController
// closure: this
function {
  return this.prepareEnrollment();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=158B file=chatgpt_wallet_core/src/AccountWalletController
// closure: this, s
function {
  if (!((this.enrollmentFlow === s))) goto L_9d;
  this.enrollmentFlow = undefined;
  this.publish(this.state.value);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_wallet_core/src/AccountWalletController
// closure: s
function {
  return s.cancel();   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=3 cpool=4 bc=1086B file=chatgpt_wallet_core/src/AccountWalletController
// args: e, i
// locals: s, n, a, this
// closure: l, d, t
function {
  this = this;
  let s;
  if ((!this.active)) goto L_221;
  if (((undefined !== this.enrollmentFlow))) goto L_221;
  if (((undefined !== this.state.value.enrollment))) goto L_221;
  if (!((this.state.value.status === l.WalletStatus.Ready))) goto L_24d;
  if (!(this.state.value.isBusy)) goto L_24d;
  if (!((this.inventoryReadId !== this.operationId))) goto L_24d;
  e.finished({});
  return function <atom:0>;
  s = new d.WalletEnrollmentFlow(this, e, i, function <atom:0>, function <atom:0>);
  this.enrollmentFlow = s;
  this.publish(this.supersedeInventoryRead());
  try { // catch -> L_306
  s.start();
  return function <atom:0>;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_43d
  if (!((this.enrollmentFlow === s))) goto L_3a9;
  this.enrollmentFlow = undefined;
  this.publish(this.state.value);
  try { // catch -> L_3da
  s.cancel();
  <?>;
  goto L_43b;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_43a
  if (!(t.isLoggingEnabled)) goto L_436;
  console.warn("Wallet enrollment cleanup failed after opening error");
  <?>;
  goto L_43b;
  // [栈深重同步 0 -> 1]
  throw <?>;
  throw n;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=130B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: this
function {
  this = this;
  if (!((this.contactCollection == null))) goto L_2c;
  this.contactCollection;
  goto L_51;
  if (!((undefined.submit(t) == null))) goto L_81;
  undefined.submit(t);
  return Promise.resolve(false);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=chatgpt_wallet_core/src/AccountWalletController
// locals: this
function {
  this = this;
  if (!((this.contactCollection == null))) goto L_2c;
  this.contactCollection;
  goto L_50;
  undefined.load();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=chatgpt_wallet_core/src/AccountWalletController
// locals: this
function {
  this = this;
  if (!((this.contactCollection == null))) goto L_2c;
  this.contactCollection;
  goto L_50;
  undefined.refresh();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_wallet_core/src/AccountWalletController
// locals: this
function {
  this = this;
  return this.isContactCollectionEnabled();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=161B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// closure: this, e
function {
  if (!(this.isCurrent(e))) goto L_a0;
  null;
  this.state.value;
  this.publish({contactCollection: t});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=305B file=chatgpt_wallet_core/src/AccountWalletController
// closure: this, e
function {
  if (!(this.isCurrent(e))) goto L_130;
  if (!((this.contactCollection == null))) goto L_59;
  this.contactCollection;
  goto L_7d;
  undefined.dispose();
  this.contactCollection = undefined;
  this.operationId = (this.operationId ++);
  null;
  this.state.value;
  this.publish({isBusy: false, contactCollection: undefined});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// closure: this, e
function {
  return this.publishSavedContactInfo(e, t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=chatgpt_wallet_core/src/AccountWalletController
// closure: this, e
function {
  return this.dismissContactCollection(e);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=4 bc=854B file=chatgpt_wallet_core/src/AccountWalletController
// locals: t, e, s, this
// closure: l, i, u, v
function {
  this = this;
  let s;
  let e;
  let t;
  if ((!this.canStart())) goto L_1cd;
  if (((this.state.value.status !== l.WalletStatus.Ready))) goto L_1cd;
  if (((undefined !== this.state.value.enrollment))) goto L_1cd;
  if (!(i.isVersionAtLeast(201))) goto L_1a3;
  if (((undefined !== this.enrollmentFlow))) goto L_1cd;
  if (!(!this.isContactInfoEditingEnabled())) goto L_1d0;
  return;
  t = this.supersedeInventoryRead();
  this.operationId = (this.operationId ++);
  e = (this.operationId ++);
  this.inventoryRefreshSource = undefined;
  s = new u.WalletContactCollection(this.api, e, function <atom:0>, function <atom:0>, function <atom:0>);
  this.contactCollection = s;
  null;
  t;
  this.publish({isBusy: true, errorMessage: undefined, contactCollection: {id: e, status: v.WalletContactStatus.Loading, isEditing: true}});
  s.load();
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=228B file=chatgpt_wallet_core/src/AccountWalletController
// locals: t, this
function {
  this = this;
  let t;
  t = this.state.value.contactCollection;
  if (!((t == null))) goto L_75;
  t;
  goto L_96;
  if (!(undefined.isEditing)) goto L_e3;
  this.dismissContactCollection(t.id);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=271B file=chatgpt_wallet_core/src/AccountWalletController
// locals: t
// closure: this, e
function {
  let t;
  if (!(!this.isCurrent(e))) goto L_2f;
  return;
  t = this.state.value.enrollment;
  if (!((undefined !== t))) goto L_e6;
  goto L_10e;
  // [栈深重同步 1 -> 0]
  this.dismissContactCollection(e);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=1 bc=428B file=chatgpt_wallet_core/src/AccountWalletController
// locals: t, e, this
// closure: l
function {
  this = this;
  let e;
  let t;
  if ((!this.canContinueEnrollment)) goto L_dc;
  if (!((this.state.value.status !== l.WalletStatus.Ready))) goto L_df;
  return;
  t = this.supersedeInventoryRead();
  this.operationId = (this.operationId ++);
  e = (this.operationId ++);
  this.inventoryRefreshSource = undefined;
  null;
  t;
  this.publish({isBusy: true, errorMessage: undefined, contactCollection: undefined});
  this.openEnrollment(e);
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=366B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  if (!(!this.isCurrent(t))) goto L_32;
  return;
  this.operationId = (this.operationId ++);
  e = (this.operationId ++);
  if (!((this.contactCollection == null))) goto L_8a;
  this.contactCollection;
  goto L_ae;
  i = undefined.dispose();
  this.contactCollection = undefined;
  null;
  this.state.value;
  this.publish({isBusy: (undefined !== i), contactCollection: undefined});
  if (!((undefined !== i))) goto L_16d;
  this.finishContactDismissal(e, i);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=236B file=chatgpt_wallet_core/src/AccountWalletController
// locals: e, this
// closure: t
function {
  this = this;
  try { // catch -> L_8a
  if (!((this.platformServices.experimentService == null))) goto L_52;
  this.platformServices.experimentService;
  goto L_81;
  if (!((undefined.isFeatureFlagEnabled({flagName: "wallet_contact_info_collection"}) == null))) goto L_88;
  undefined.isFeatureFlagEnabled({flagName: "wallet_contact_info_collection"});
  return false;
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_eb
  if (!(t.isLoggingEnabled)) goto L_e6;
  console.warn("Wallet contact collection flag could not be read");
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=525B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  if ((!this.active)) goto L_e9;
  if (!((this.state.value.enrollment == null))) goto L_9e;
  this.state.value.enrollment;
  goto L_bf;
  if (((undefined.id !== t))) goto L_e9;
  if (!((undefined === this.enrollmentSession))) goto L_ec;
  return;
  e = this.enrollmentSession.dispose();
  this.enrollmentSession = undefined;
  this.operationId = (this.operationId ++);
  i = (this.operationId ++);
  null;
  this.state.value;
  this.publish({enrollment: undefined});
  this.refreshAfterEnrollment(i, e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=787B file=chatgpt_wallet_core/src/AccountWalletController
// locals: this
// closure: l
function {
  this = this;
  this.active = false;
  this.orbitNameSubscription.unsubscribe();
  this.operationId = (this.operationId ++);
  this.inventoryRevision = (this.inventoryRevision ++);
  this.rowMutations.clear();
  if (!((this.enrollmentSession == null))) goto L_11e;
  this.enrollmentSession;
  goto L_142;
  undefined.dispose();
  this.enrollmentSession = undefined;
  if (!((this.contactCollection == null))) goto L_178;
  this.contactCollection;
  goto L_19c;
  undefined.dispose();
  this.contactCollection = undefined;
  this.api.dispose();
  this.state.next({accountId: this.accountId, status: l.WalletStatus.Unavailable, cards: [], isBusy: false, pendingChanges: {cardIds: [], preferredCard: false}});
  this.state.complete();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=142B file=chatgpt_wallet_core/src/AccountWalletController
// locals: this
function {
  this = this;
  if (!(this.active)) goto L_8d;
  return !this.state.value.isBusy;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=157B file=chatgpt_wallet_core/src/AccountWalletController
// closure: this, t
function {
  if (!(this.active)) goto L_9c;
  if (!((this.inventoryRevision === t))) goto L_9c;
  if (!(this.hasReconcilingMutations)) goto L_9c;
  this.startInventoryRead(undefined);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=995B file=chatgpt_wallet_core/src/AccountWalletController
// locals: t, this
// closure: l
function {
  this = this;
  let t;
  if (((this.inventoryReadId !== this.operationId))) goto L_218;
  if (((true !== this.state.value.isRefreshing))) goto L_218;
  if (!((this.state.value.status !== l.WalletStatus.Ready))) goto L_25e;
  if (!((this.state.value.status !== l.WalletStatus.NotConnected))) goto L_25e;
  return this.state.value;
  this.operationId = (this.operationId ++);
  this.inventoryRevision = (this.inventoryRevision ++);
  t = (this.inventoryRevision ++);
  this.inventoryReadId = undefined;
  this.inventoryRefreshSource = undefined;
  this.api.invalidateLink();
  if (!(this.hasReconcilingMutations)) goto L_38a;
  Promise.resolve().then(function <atom:0>);
  null;
  this.state.value;
  return {isBusy: false, isRefreshing: false};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_wallet_core/src/AccountWalletController
// args: e
// closure: t
function {
  return (e.id === t.cardId);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=478B file=chatgpt_wallet_core/src/AccountWalletController
// args: i
// closure: e, o, t
function {
  if (!(e)) goto L_12c;
  if (((i.kind === o.WalletCardMutationKind.SetPreferred))) goto L_1dd;
  if (!((i.kind === o.WalletCardMutationKind.Remove))) goto L_1dd;
  return (i.cardId === t.cardId);
  if (!((i.kind !== o.WalletCardMutationKind.SetPreferred))) goto L_1dd;
  return (i.cardId === t.cardId);
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=2 bc=875B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: e, i, this
// closure: o, l, p
function {
  this = this;
  let i;
  let e;
  e = (t.kind === o.WalletCardMutationKind.SetPreferred);
  if ((!this.canStart())) goto L_276;
  if (((this.state.value.status !== l.WalletStatus.Ready))) goto L_276;
  if ((!this.state.value.cards.some(function <atom:0>))) goto L_276;
  if (!(Array.from(this.rowMutations.keys()).some(function <atom:0>))) goto L_279;
  return;
  i = this.supersedeInventoryRead();
  this.rowMutations.set(t, {phase: p.Writing});
  null;
  i;
  this.publish({errorMessage: undefined});
  this.performMutation(t);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=560B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: e, i, this
// closure: p
function {
  this = this;
  let e;
  if ((!this.active)) goto L_74;
  if (!(!this.rowMutations.has(t))) goto L_78;
  return undefined; // async
  e = false;
  try { // catch -> L_d1
  e = !(await this.api.applyCardMutation(t));
  !(await this.api.applyCardMutation(t));
  <?>;
  goto L_10e;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_10d
  e = true;
  true;
  this.reportFailure("mutation", i);
  <?>;
  goto L_10e;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(this.active)) goto L_22d;
  if (!(this.rowMutations.has(t))) goto L_22d;
  if (!(e)) goto L_1fd;
  goto L_1fe;
  // [栈深重同步 5 -> 4]
  this.rowMutations.set(t, {phase: p.Reconciling, errorMessage: undefined});
  this.startInventoryRead(undefined);
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// closure: p
function {
  return (t.phase === p.Reconciling);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=151B file=chatgpt_wallet_core/src/AccountWalletController
// locals: this
// closure: p
function {
  this = this;
  return Array.from(this.rowMutations.values()).some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=290B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: e, this
function {
  this = this;
  let e;
  if ((!this.active)) goto L_58;
  if (!((undefined !== t))) goto L_84;
  if (!(!this.isCurrent(t))) goto L_84;
  return Promise.resolve(undefined);   // tail call
  this.inventoryRevision = (this.inventoryRevision ++);
  e = (this.inventoryRevision ++);
  this.api.invalidateLink();
  return this.load(t, e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=126B file=chatgpt_wallet_core/src/AccountWalletController
// args: t, e
// locals: this
function {
  this = this;
  if (!(this.active)) goto L_7d;
  if (!((e === this.inventoryRevision))) goto L_7d;
  if (((undefined === t))) goto L_7d;
  return this.isCurrent(t);
}

// fn <atom:0>  args=2 vars=12 closure=2 cpool=0 bc=2337B file=chatgpt_wallet_core/src/AccountWalletController
// args: t, e
// locals: i, s, n, a, i#1, s#1, n#1, o, r, this
// closure: l, a
function {
  this = this;
  try { // catch -> L_4d6
  let a;
  let n;
  let s;
  let i;
  i = (await this.api.cards());
  if (!(!this.isCurrentInventoryRead(t, e))) goto L_8b;
  return undefined; // async
  if (!((i.cards.length > 0))) goto L_dc;
  s = this.isContactInfoEditingEnabled();
  if ((s)) goto L_112;
  this.contactReadId = <this.contactReadId_new>;
  (this.contactReadId++);
  null;
  this.state.value;
  null;
  i;
  if (!(s)) goto L_285;
  goto L_286;
  // [栈深重同步 2 -> 1]
  if (!(this.state.value.isBusy)) goto L_33b;
  if (!((undefined === t))) goto L_3b3;
  goto L_3b4;
  // [栈深重同步 2 -> 1]
  n = {status: l.WalletStatus.Ready, orbitName: this.state.value.orbitName, savedContactInfo: undefined, isBusy: (this.inventoryReadId !== this.operationId), isRefreshing: false, errorMessage: undefined};
  a = this.publishInventory(n);
  if (!(s)) goto L_4d0;
  if (!(this.isCurrentInventoryRead(t, e))) goto L_4d0;
  if (!(!this.state.value.isBusy)) goto L_4d0;
  this.loadSavedContactInfo(this.operationId);
  return a; // async
  // [栈深重同步 0 -> 1]
  i#1 = <?>;
  try { // catch -> L_920
  let r;
  let o;
  let n#1;
  let s#1;
  if (!(!this.isCurrentInventoryRead(t, e))) goto L_517;
  return undefined; // async
  s#1 = (i#1 instanceof a.WalletUnavailableError);
  n#1 = (i#1 instanceof a.WalletNotConnectedError);
  if ((s#1)) goto L_5a4;
  if ((n#1)) goto L_5a4;
  this.reportFailure("load", i#1);
  if ((n#1)) goto L_5af;
  if (!(s#1)) goto L_5b4;
  goto L_5b9;
  // [栈深重同步 1 -> 0]
  o = "Wallet could not be refreshed. Refresh before making another change.";
  null;
  this.state.value;
  if (!(n#1)) goto L_652;
  goto L_750;
  // [栈深重同步 2 -> 1]
  if (!(s#1)) goto L_69f;
  goto L_750;
  // [栈深重同步 2 -> 1]
  if (!((undefined === t))) goto L_70b;
  goto L_750;
  // [栈深重同步 2 -> 1]
  if ((n#1)) goto L_75f;
  if (!(s#1)) goto L_778;
  goto L_779;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!(this.state.value.isBusy)) goto L_82e;
  if (!((undefined === t))) goto L_8ae;
  if (!((this.state.value.errorMessage == null))) goto L_8b1;
  this.state.value.errorMessage;
  goto L_8b1;
  // [栈深重同步 2 -> 1]
  r = {status: l.WalletStatus.Error, isBusy: (this.inventoryReadId !== this.operationId), isRefreshing: false, errorMessage: o};
  if ((n#1)) goto L_8c2;
  if (!(s#1)) goto L_8f4;
  this.contactReadId = <this.contactReadId_new>;
  (this.contactReadId++);
  return this.publishInventory(r); // async
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=430B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: e, i, this
// closure: p
function {
  this = this;
  let i;
  let e;
  const _it1 = this.rowMutations;
  goto L_129;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  e = <value(_it2)>;
  <done(_it2)>;
  i = <value(_it2)>;
  if (!((i.phase === p.Reconciling))) goto L_128;
  this.rowMutations.delete(e);
  null;
  t;
  if (!((t.errorMessage == null))) goto L_122;
  t.errorMessage;
  t = {errorMessage: i.errorMessage};
  {errorMessage: i.errorMessage};
  if (!(<done(_it1)>)) goto L_2e;
  <value(_it1)>;
  if (!((this.inventoryReadId === this.operationId))) goto L_187;
  this.inventoryReadId = undefined;
  undefined;
  return this.publish(t);   // tail call
}

// fn <atom:0>  args=1 vars=6 closure=2 cpool=0 bc=1039B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: e, i, s, i#1, this
// closure: l, v
function {
  this = this;
  let e;
  if ((!this.isCurrent(t))) goto L_17a;
  if (((this.state.value.status !== l.WalletStatus.Ready))) goto L_17a;
  if (((0 === this.state.value.cards.length))) goto L_17a;
  if (!(!this.isContactInfoEditingEnabled())) goto L_17e;
  return undefined; // async
  this.contactReadId = (this.contactReadId ++);
  e = (this.contactReadId ++);
  try { // catch -> L_354
  let s;
  let i;
  i = (await this.api.resolveTool("list_wallet_contact_infos", undefined));
  if ((!this.isCurrent(t))) goto L_25a;
  if (!((e !== this.contactReadId))) goto L_25f;
  return undefined; // async
  s = v.decodeDefaultWalletContact((await this.api.call(i, {})));
  if (!((e === this.contactReadId))) goto L_34f;
  if (!((s == null))) goto L_32b;
  s;
  goto L_34c;
  this.publishSavedContactInfo(t, undefined.contactInfo);
  <?>;
  goto L_40d;
  // [栈深重同步 0 -> 1]
  i#1 = <?>;
  try { // catch -> L_40c
  if (!(this.isCurrent(t))) goto L_408;
  if (!((e === this.contactReadId))) goto L_408;
  this.reportFailure("address preview", i#1);
  this.publishSavedContactInfo(t, undefined);
  <?>;
  goto L_40d;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=161B file=chatgpt_wallet_core/src/AccountWalletController
// args: t, e
// locals: this
function {
  this = this;
  if (!(this.isCurrent(t))) goto L_a0;
  null;
  this.state.value;
  this.publish({savedContactInfo: e});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=162B file=chatgpt_wallet_core/src/AccountWalletController
// args: t, e
// locals: i, this
function {
  this = this;
  try { // catch -> L_d
  (await e);
  <?>;
  goto L_43;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_42
  this.reportFailure("enrollment", i);
  <?>;
  goto L_43;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(this.isCurrent(t))) goto L_9f;
  this.inventoryReadId = t;
  (await this.readInventory(undefined));
  return undefined; // async
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=271B file=chatgpt_wallet_core/src/AccountWalletController
// args: t, e
// locals: i, this
function {
  this = this;
  try { // catch -> L_d
  (await e);
  <?>;
  goto L_43;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_42
  this.reportFailure("contact", i);
  <?>;
  goto L_43;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(this.isCurrent(t))) goto L_10c;
  null;
  this.state.value;
  this.publish({isBusy: false});
  this.loadSavedContactInfo(t);
  return undefined; // async
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=464B file=chatgpt_wallet_core/src/AccountWalletController
// args: e
// locals: s
// closure: this, i, t, o
function {
  let s;
  s = this.state.value.enrollment;
  if (!(this.active)) goto L_1cf;
  if (!(i.isVersionAtLeast(190))) goto L_1a6;
  if (!(this.isCurrent(t))) goto L_1a6;
  if (!((s == null))) goto L_f8;
  s;
  goto L_119;
  if (!((undefined.session === o))) goto L_1a6;
  null;
  this.state.value;
  null;
  s;
  this.publish({enrollment: {savedRegistrationId: e}});
  o.finish(e);
  return;
}

// fn <atom:0>  args=1 vars=9 closure=3 cpool=1 bc=1680B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: e, s, n, a, o, l, e#1, this
// closure: i, h, r
function {
  this = this;
  try { // catch -> L_5a6
  let l;
  let o;
  let a;
  let n;
  let s;
  let e;
  e = (await this.api.resolveTool("open_vgs_card_enrollment", undefined));
  if (!(!this.isCurrent(t))) goto L_96;
  return undefined; // async
  s = this.api.entrypoint(e);
  n = (await this.api.call(e, {}));
  if (!(!this.isCurrent(t))) goto L_15b;
  return undefined; // async
  if (!((h.optionalWalletObject(n._meta) == null))) goto L_1d0;
  h.optionalWalletObject(n._meta);
  goto L_1f1;
  a = h.optionalWalletObject(undefined.vgs_collect_bootstrap);
  if (((true === n.isError))) goto L_360;
  if (((undefined === a))) goto L_360;
  if ((("string" != typeof a.vault_id))) goto L_360;
  if ((!a.vault_id.trim())) goto L_360;
  if ((("string" != typeof a.access_token))) goto L_360;
  if ((!a.access_token)) goto L_360;
  if (!(("sandbox" !== a.environment))) goto L_371;
  if (!(("live" !== a.environment))) goto L_371;
  throw new Error("Wallet enrollment bootstrap is unavailable");
  o = new r.SharedWalletEnrollmentSession(this.api, e.linkId, function <atom:0>);
  this.enrollmentSession = o;
  if (!(i.isVersionAtLeast(176))) goto L_455;
  goto L_456;
  // [栈深重同步 1 -> 0]
  l = {};
  null;
  this.state.value;
  this.enrollmentId = (this.enrollmentId ++);
  null;
  l;
  this.publish({enrollment: {id: "".concat(this.accountId, ":", (this.enrollmentId ++)), entrypoint: s, initialResultJson: JSON.stringify(n), session: o}, isBusy: true});
  // close_loc o
  <?>;
  goto L_68e;
  // [栈深重同步 0 -> 1]
  e#1 = <?>;
  try { // catch -> L_68d
  if (!(!this.isCurrent(t))) goto L_5da;
  return undefined; // async
  this.reportFailure("enrollment", e#1);
  null;
  this.state.value;
  this.publish({isBusy: false, errorMessage: "Secure card entry could not be opened. Please try again."});
  <?>;
  goto L_68e;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=77B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: this
function {
  this = this;
  if (!(this.active)) goto L_4c;
  return (this.operationId === t);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=148B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// closure: o
function {
  if (!((t.kind === o.WalletCardMutationKind.SetPreferred))) goto L_6e;
  return [];
  return [t.cardId];
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// closure: o
function {
  return (t.kind === o.WalletCardMutationKind.SetPreferred);
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=2 bc=342B file=chatgpt_wallet_core/src/AccountWalletController
// args: t
// locals: e, i, this
// closure: o
function {
  this = this;
  let i;
  let e;
  e = Array.from(this.rowMutations.keys());
  null;
  t;
  i = {pendingChanges: {cardIds: e.flatMap(function <atom:0>), preferredCard: e.some(function <atom:0>)}};
  if (!(this.active)) goto L_151;
  this.state.next(i);
  return i;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=227B file=chatgpt_wallet_core/src/AccountWalletController
// args: e, i
// locals: this
// closure: t, a
function {
  this = this;
  if (!(this.active)) goto L_e2;
  if (!(t.isLoggingEnabled)) goto L_e2;
  if (!((i instanceof a.WalletNotConnectedError))) goto L_da;
  goto L_df;
  // [栈深重同步 4 -> 3]
  console.warn("Wallet ".concat(e, " failed"), "Request or decoding failure");
  return;
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=45 bc=668B file=chatgpt_wallet_core/src/AccountWalletController
// args: require, module, exports
// locals: t, e, i, s, n, a, o, r, l, h, d, c, u, v, p, AccountWalletController, <class_fields_init>, AccountWalletController#1
function {
  let AccountWalletController#1;
  let v;
  let u;
  let c;
  let d;
  let h;
  let l;
  let r;
  let o;
  let a;
  let n;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AccountWalletController = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("oai_platform_services/src/OAINetworkClient");
  i = require("valdi_core/src/CompilerIntrinsics");
  s = require("valdi_rxjs/src/BehaviorSubject");
  n = require("valdi_rxjs/src/Subscription");
  a = require("./WalletApi");
  o = require("./WalletCardMutation");
  r = require("./WalletEnrollmentSession");
  l = require("./WalletModels");
  h = require("./WalletWireModels");
  d = require("./WalletEnrollmentFlow");
  c = require("./WalletHostService");
  u = require("./WalletContactCollection");
  v = require("./WalletContactInfo");
  if ((p)) goto L_119;
  p = {};
  !function <atom:0>({});
  let AccountWalletController;
  let <class_fields_init>;
  class AccountWalletController extends undefined { ... }
  <proto:AccountWalletController>.observeState = function <atom:0>;
  <proto:AccountWalletController>.refreshSource = function <atom:0>;
  <proto:AccountWalletController>.canStartEnrollment = function <atom:0>;
  <proto:AccountWalletController>.canContinueEnrollment = function <atom:0>;
  <proto:AccountWalletController>.setOrbitNameSource = function <atom:0>;
  <proto:AccountWalletController>.updateOrbitName = function <atom:0>;
  <proto:AccountWalletController>.refresh = function <atom:0>;
  <proto:AccountWalletController>.refreshInventory = function <atom:0>;
  <proto:AccountWalletController>.readInventory = function <atom:0>;
  <proto:AccountWalletController>.reloadInventory = function <atom:0>;
  <proto:AccountWalletController>.rename = function <atom:0>;
  <proto:AccountWalletController>.setPreferred = function <atom:0>;
  <proto:AccountWalletController>.remove = function <atom:0>;
  <proto:AccountWalletController>.beginEnrollment = function <atom:0>;
  <proto:AccountWalletController>.startEnrollment = function <atom:0>;
  <proto:AccountWalletController>.submitContactInfo = function <atom:0>;
  <proto:AccountWalletController>.reloadContactInfo = function <atom:0>;
  <proto:AccountWalletController>.refreshContactInfo = function <atom:0>;
  <proto:AccountWalletController>.isContactInfoEditingEnabled = function <atom:0>;
  <proto:AccountWalletController>.editContactInfo = function <atom:0>;
  <proto:AccountWalletController>.backFromContactInfo = function <atom:0>;
  <proto:AccountWalletController>.prepareEnrollment = function <atom:0>;
  <proto:AccountWalletController>.dismissContactCollection = function <atom:0>;
  <proto:AccountWalletController>.isContactCollectionEnabled = function <atom:0>;
  <proto:AccountWalletController>.enrollmentDismissed = function <atom:0>;
  <proto:AccountWalletController>.dispose = function <atom:0>;
  <proto:AccountWalletController>.canStart = function <atom:0>;
  <proto:AccountWalletController>.supersedeInventoryRead = function <atom:0>;
  <proto:AccountWalletController>.mutate = function <atom:0>;
  <proto:AccountWalletController>.performMutation = function <atom:0>;
  <proto:AccountWalletController>.hasReconcilingMutations = function <atom:0>;
  <proto:AccountWalletController>.startInventoryRead = function <atom:0>;
  <proto:AccountWalletController>.isCurrentInventoryRead = function <atom:0>;
  <proto:AccountWalletController>.load = function <atom:0>;
  <proto:AccountWalletController>.publishInventory = function <atom:0>;
  <proto:AccountWalletController>.loadSavedContactInfo = function <atom:0>;
  <proto:AccountWalletController>.publishSavedContactInfo = function <atom:0>;
  <proto:AccountWalletController>.refreshAfterEnrollment = function <atom:0>;
  <proto:AccountWalletController>.finishContactDismissal = function <atom:0>;
  <proto:AccountWalletController>.openEnrollment = function <atom:0>;
  <proto:AccountWalletController>.isCurrent = function <atom:0>;
  <proto:AccountWalletController>.publish = function <atom:0>;
  <proto:AccountWalletController>.reportFailure = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AccountWalletController>;
  AccountWalletController = function <atom:0>;
  // close_loc <class_fields_init>
  AccountWalletController#1 = function <atom:0>;
  exports.AccountWalletController = AccountWalletController#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/AccountWalletController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
