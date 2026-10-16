// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=chatgpt_wallet/src/WalletAddressPage
// closure: this
function {
  this.closeRequested = true;
  this.closeIfVisible();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=190B file=chatgpt_wallet/src/WalletAddressPage
// closure: this
function {
  if (!((undefined !== this.state.contact))) goto L_bd;
  if (!((this.context.controller.backFromContactInfo == null))) goto L_ba;
  this.context.controller.backFromContactInfo;
  this.context.controller;
  goto L_bd;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=493B file=chatgpt_wallet/src/WalletAddressPage
// args: t
// closure: this
function {
  if (!((undefined !== this.state.contact))) goto L_1eb;
  if (!(!this.saving)) goto L_1eb;
  if (!(!this.closeRequested)) goto L_1eb;
  this.saving = true;
  try { // catch -> L_1d6
  if (!((this.context.controller.submitContactInfo == null))) goto L_124;
  this.context.controller.submitContactInfo;
  this.context.controller;
  goto L_128;
  // [栈深重同步 2 -> 3]
  if (!((true !== (await <?>.call(undefined, t))))) goto L_175;
  if (((undefined !== this.state.contact))) goto L_1cb;
  if ((this.isDestroyed())) goto L_1cb;
  this.close();
  <?>;
  // gosub (finally 块) 476
  undefined;
  goto L_1eb;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 476
  throw <?>;
  this.saving = false;
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=233B file=chatgpt_wallet/src/WalletAddressPage
// closure: this
function {
  if (((undefined === this.state.contact))) goto L_e8;
  if ((this.closeRequested)) goto L_e8;
  if (!((this.context.controller.reloadContactInfo == null))) goto L_e5;
  this.context.controller.reloadContactInfo;
  this.context.controller;
  goto L_e8;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=233B file=chatgpt_wallet/src/WalletAddressPage
// closure: this
function {
  if (((undefined === this.state.contact))) goto L_e8;
  if ((this.closeRequested)) goto L_e8;
  if (!((this.context.controller.refreshContactInfo == null))) goto L_e5;
  this.context.controller.refreshContactInfo;
  this.context.controller;
  goto L_e8;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=5 bc=356B file=chatgpt_wallet/src/WalletAddressPage
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>
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
  this.state = {contact: undefined};
  this.mountedAccountId = this.viewModel.accountId;
  this.mountedContactId = this.viewModel.contactId;
  this.isVisible = false;
  this.closeRequested = false;
  this.didPop = false;
  this.saving = false;
  this.close = function <atom:0>;
  this.cleanupEdit = function <atom:0>;
  this.submitContact = function <atom:0>;
  this.reloadContact = function <atom:0>;
  this.refreshContact = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=51B file=chatgpt_wallet/src/WalletAddressPage
// args: t
// closure: this
function {
  this.isVisible = (1 === t);
  this.closeIfVisible();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=393B file=chatgpt_wallet/src/WalletAddressPage
// args: t
// locals: e, o, i
// closure: this
function {
  let i;
  let o;
  let e;
  e = t.contactCollection;
  o = (t.accountId === this.mountedAccountId);
  if (!((e == null))) goto L_7d;
  e;
  goto L_9e;
  if (!((undefined.id === this.mountedContactId))) goto L_e9;
  i = e.isEditing;
  if (!(o)) goto L_11c;
  if (!(i)) goto L_11c;
  goto L_11d;
  // [栈深重同步 4 -> 3]
  this.setState({contact: undefined});
  if (!(o)) goto L_15f;
  if ((i)) goto L_15f;
  if (!((undefined === e))) goto L_15f;
  if ((this.saving)) goto L_188;
  this.close();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=170B file=chatgpt_wallet/src/WalletAddressPage
// closure: e, this
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("Wallet address state observation failed");
  this.setState({contact: undefined});
  this.close();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=3 bc=391B file=chatgpt_wallet/src/WalletAddressPage
// locals: this
// closure: e
function {
  this = this;
  if (!((this.context.navigator.setPageVisibilityObserver == null))) goto L_6f;
  this.context.navigator.setPageVisibilityObserver;
  this.context.navigator;
  goto L_74;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, function <atom:0>);
  this.registerDisposable(this.context.controller.observeState().subscribe({next: function <atom:0>, error: function <atom:0>}));
  this.registerDisposable(this.cleanupEdit);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=128B file=chatgpt_wallet/src/WalletAddressPage
// locals: this
function {
  this = this;
  this.closeRequested = true;
  if (!((this.context.navigator.setPageVisibilityObserver == null))) goto L_7b;
  this.context.navigator.setPageVisibilityObserver;
  this.context.navigator;
  goto L_7f;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=297B file=chatgpt_wallet/src/WalletAddressPage
// locals: this
function {
  this = this;
  if (!((this.viewModel.accountId === this.mountedAccountId))) goto L_d2;
  if (((this.viewModel.contactId === this.mountedContactId))) goto L_128;
  this.setState({contact: undefined});
  this.close();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=602B file=chatgpt_wallet/src/WalletAddressPage
// closure: o, r, s, t, this
function {
  o.beginComponent(r.WalletContactContent, s, undefined, undefined);
  o.setViewModelProperty("contact", t);
  o.setViewModelProperty("onBack", this.close);
  o.setViewModelProperty("onSubmit", this.submitContact);
  o.setViewModelProperty("onReload", this.reloadContact);
  if (!((undefined === this.context.controller.refreshContactInfo))) goto L_20a;
  goto L_22e;
  // [栈深重同步 4 -> 3]
  o.setViewModelProperty("onRefresh", this.refreshContact);
  o.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=13B file=chatgpt_wallet/src/WalletAddressPage
// closure: o, r, s, t, this
function {
  if (((undefined === t))) goto L_c;
  function <atom:0>();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=1 bc=395B file=chatgpt_wallet/src/WalletAddressPage
// locals: t, this
// closure: o, r, s, n, i
function {
  this = this;
  let t;
  t = this.state.contact;
  o.beginComponent(n.OAITheme, i, undefined, undefined);
  o.setViewModelProperty("fill", true);
  o.setViewModelProperty("mode", this.viewModel.themeMode);
  o.setUnnamedSlot(function <atom:0>);
  o.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=253B file=chatgpt_wallet/src/WalletAddressPage
// locals: this
function {
  this = this;
  if (!(this.closeRequested)) goto L_fc;
  if (!(this.isVisible)) goto L_fc;
  if (!(!this.didPop)) goto L_fc;
  if (!(!this.isDestroyed())) goto L_fc;
  this.didPop = true;
  this.navigationController.pop(true);
  return;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=6 bc=531B file=chatgpt_wallet/src/WalletAddressPage
// args: require, module, exports
// locals: t, e, o, i, s, n, a, c, r, d, WalletAddressPage, <class_fields_init>
function {
  let d;
  let r;
  let c;
  let a;
  let n;
  let s;
  let i;
  let o;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletAddressPage = undefined;
  t = require("tslib");
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  o = require("valdi_core/src/JSX").jsx;
  i = o.makeComponentPrototype(undefined, "5MfBuKQuACXdLl1C");
  s = o.makeComponentPrototype(undefined, "Mbfrk0YaK39LIJV1");
  n = require("oai_core/src/OAITheme");
  a = require("valdi_navigation/src/NavigationPage");
  c = require("valdi_navigation/src/NavigationPageComponent");
  r = require("./WalletContactContent");
  let WalletAddressPage;
  let <class_fields_init>;
  class WalletAddressPage extends c.NavigationPageStatefulComponent { ... }
  <proto:WalletAddressPage>.onCreate = function <atom:0>;
  <proto:WalletAddressPage>.onDestroy = function <atom:0>;
  <proto:WalletAddressPage>.onViewModelUpdate = function <atom:0>;
  <proto:WalletAddressPage>.onRender = function <atom:0>;
  <proto:WalletAddressPage>.closeIfVisible = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletAddressPage>;
  WalletAddressPage = function <atom:0>;
  // close_loc <class_fields_init>
  d = function <atom:0>;
  exports.WalletAddressPage = d;
  d = t.__decorate([a.NavigationPage(module)], d);
  exports.WalletAddressPage = t.__decorate([a.NavigationPage(module)], d);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletAddressPage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
