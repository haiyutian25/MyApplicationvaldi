// fn <atom:0>  args=5 vars=6 closure=2 cpool=0 bc=155B file=chatgpt_wallet_core/src/WalletContactCollection
// args: t, a, e, n, o
// locals: this
// closure: <class_fields_init>, i
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.api = t;
  this.id = a;
  this.onState = e;
  this.onReady = n;
  this.onSavedContactInfo = o;
  this.active = true;
  this.busy = false;
  this.initialValue = i.emptyWalletContactInfo;
  this.attemptedCreate = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=307B file=chatgpt_wallet_core/src/WalletContactCollection
// locals: this
// closure: i
function {
  this = this;
  if (!(this.active)) goto L_132;
  if (!(!this.busy)) goto L_132;
  this.busy = true;
  this.editingState = undefined;
  this.onState({id: this.id, status: i.WalletContactStatus.Loading, isEditing: true});
  this.read(false);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=332B file=chatgpt_wallet_core/src/WalletContactCollection
// locals: this
// closure: i
function {
  this = this;
  if (!(this.active)) goto L_14b;
  if (!(!this.busy)) goto L_14b;
  if (!((undefined !== this.editingState))) goto L_14b;
  this.busy = true;
  null;
  this.editingState;
  this.onState({status: i.WalletContactStatus.Loading});
  this.read(true);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=366B file=chatgpt_wallet_core/src/WalletContactCollection
// args: t
// locals: this
// closure: i
function {
  this = this;
  if (!(this.active)) goto L_142;
  if (!(!this.busy)) goto L_142;
  if (!(i.hasCompleteWalletContact(t))) goto L_142;
  this.busy = true;
  this.publish(i.WalletContactStatus.Saving, undefined, false);
  return this.save(i.normalizeWalletContactForSave(t));
  return Promise.resolve(false);
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=135B file=chatgpt_wallet_core/src/WalletContactCollection
// locals: t, this
// closure: i
function {
  this = this;
  let t;
  this.active = false;
  this.initialProfileId = undefined;
  this.initialValue = i.emptyWalletContactInfo;
  this.editingState = undefined;
  t = this.pendingSave;
  this.pendingSave = undefined;
  return t;
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=0 bc=1123B file=chatgpt_wallet_core/src/WalletContactCollection
// args: e
// locals: t, a, n, this
// closure: i, t, a
function {
  this = this;
  try { // catch -> L_26d
  let a;
  let t;
  t = i.decodeDefaultWalletContact((await this.call("list_wallet_contact_infos", {})));
  if (!(!this.active)) goto L_87;
  return undefined; // async
  if (!((t == null))) goto L_93;
  t;
  goto L_b4;
  this.initialProfileId = undefined.contactProfileId;
  if (!((t == null))) goto L_c8;
  t;
  goto L_e9;
  if (!((undefined.contactInfo == null))) goto L_112;
  undefined.contactInfo;
  a = i.emptyWalletContactInfo;
  if (!(e)) goto L_162;
  if ((i.sameWalletContactInfo(a, this.initialValue))) goto L_174;
  this.initialValue = a;
  a;
  if (!((t == null))) goto L_1a2;
  t;
  goto L_1c3;
  this.onSavedContactInfo(undefined.contactInfo);
  if (!(!this.active)) goto L_1ef;
  return undefined; // async
  this.busy = false;
  this.publish(i.WalletContactStatus.Editing, undefined, false);
  <?>;
  goto L_461;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_460
  if (!(this.active)) goto L_45d;
  if (!(t.isLoggingEnabled)) goto L_2f0;
  console.warn("Wallet contact info load failed");
  this.busy = false;
  if (!(e)) goto L_371;
  if (!((undefined !== this.editingState))) goto L_371;
  this.onState(this.editingState);
  return undefined; // async
  this.onState({id: this.id, status: i.WalletContactStatus.LoadError, isEditing: true, errorMessage: a.default.walletContactLoadError()});
  <?>;
  goto L_461;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=0 bc=1946B file=chatgpt_wallet_core/src/WalletContactCollection
// args: e
// locals: t, n, n#1, this
// closure: i, a, t
function {
  this = this;
  try { // catch -> L_64c
  let n;
  let t;
  t = i.decodeDefaultWalletContact((await this.call("list_wallet_contact_infos", {})));
  if (!(!this.active)) goto L_88;
  return false; // async
  if (!((t == null))) goto L_b5;
  t;
  goto L_d6;
  this.onSavedContactInfo(undefined.contactInfo);
  if (!(!this.active)) goto L_103;
  return false; // async
  if (!((t == null))) goto L_130;
  t;
  goto L_151;
  if (!((this.initialProfileId !== undefined.contactProfileId))) goto L_2ea;
  if (!((undefined === this.initialProfileId))) goto L_225;
  if (!(this.attemptedCreate)) goto L_225;
  if (!((undefined !== t))) goto L_225;
  if (!(i.sameWalletContactInfo(t.contactInfo, e))) goto L_225;
  this.onReady();
  goto L_2e8;
  // [栈深重同步 1 -> 0]
  this.busy = false;
  this.publish(i.WalletContactStatus.Editing, a.default.walletContactChanged(), true);
  return false; // async
  if (!((undefined !== t))) goto L_367;
  if (!(i.sameWalletContactInfo(t.contactInfo, e))) goto L_367;
  this.onReady();
  return true; // async
  this.attemptedCreate = (undefined === t);
  n = i.decodeSavedWalletContact((await this.call("save_wallet_contact_info", i.walletContactSaveArguments(e, t))));
  if (!(!this.active)) goto L_419;
  return false; // async
  if ((!n.isDefault)) goto L_4e6;
  if ((!i.hasCompleteWalletContact(n.contactInfo))) goto L_4e6;
  if (!((undefined !== t))) goto L_5b0;
  if (!((t.contactProfileId !== n.contactProfileId))) goto L_5b0;
  this.busy = false;
  this.publish(i.WalletContactStatus.Editing, a.default.walletContactChanged(), true);
  return false; // async
  this.onSavedContactInfo(n.contactInfo);
  if (!(this.active)) goto L_648;
  this.onReady();
  return true; // async
  <?>;
  goto L_797;
  // [栈深重同步 0 -> 1]
  n#1 = <?>;
  try { // catch -> L_796
  if (!(this.active)) goto L_792;
  if (!(t.isLoggingEnabled)) goto L_6d1;
  console.warn("Wallet contact info save was not confirmed");
  this.busy = false;
  this.publish(i.WalletContactStatus.Editing, a.default.walletContactSaveError(), false);
  <?>;
  goto L_797;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return false; // async
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=318B file=chatgpt_wallet_core/src/WalletContactCollection
// args: t, i
// locals: a, e, this
function {
  this = this;
  let e;
  let a;
  a = (await this.api.resolveTool(t, this.linkId));
  this.linkId = a.linkId;
  if (!(!this.active)) goto L_d5;
  throw new Error("Wallet contact collection is no longer active");
  e = this.api.call(a, i);
  if (!(("save_wallet_contact_info" === t))) goto L_139;
  this.pendingSave = e;
  e;
  return e; // async
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=241B file=chatgpt_wallet_core/src/WalletContactCollection
// args: t, a, e
// locals: n, this
// closure: i
function {
  this = this;
  let n;
  n = {id: this.id, status: t, isEditing: true, initialValue: this.initialValue, errorMessage: a, needsReload: e};
  if (!((t === i.WalletContactStatus.Editing))) goto L_c7;
  this.editingState = n;
  n;
  this.onState(n);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=9 bc=242B file=chatgpt_wallet_core/src/WalletContactCollection
// args: require, module, exports
// locals: t, i, a, WalletContactCollection, <class_fields_init>, WalletContactCollection#1
function {
  let WalletContactCollection#1;
  let a;
  let i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletContactCollection = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("./WalletContactInfo");
  a = require("./Strings");
  let WalletContactCollection;
  let <class_fields_init>;
  class WalletContactCollection extends undefined { ... }
  <proto:WalletContactCollection>.load = function <atom:0>;
  <proto:WalletContactCollection>.refresh = function <atom:0>;
  <proto:WalletContactCollection>.submit = function <atom:0>;
  <proto:WalletContactCollection>.dispose = function <atom:0>;
  <proto:WalletContactCollection>.read = function <atom:0>;
  <proto:WalletContactCollection>.save = function <atom:0>;
  <proto:WalletContactCollection>.call = function <atom:0>;
  <proto:WalletContactCollection>.publish = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletContactCollection>;
  WalletContactCollection = function <atom:0>;
  // close_loc <class_fields_init>
  WalletContactCollection#1 = function <atom:0>;
  exports.WalletContactCollection = WalletContactCollection#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/WalletContactCollection
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
