// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=121B file=chatgpt_wallet_approval/src/WalletApprovalNativeDetails
// locals: this
function {
  this = this;
  this.page = JSON.parse(this.viewModel.pageJson);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=chatgpt_wallet_approval/src/WalletApprovalNativeDetails
// args: e
// closure: l
function {
  return l.platformBrowser.openURL(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=457B file=chatgpt_wallet_approval/src/WalletApprovalNativeDetails
// closure: l, e, a, t, this
function {
  e.beginComponent(a.WalletApprovalDetailContent, t, undefined, undefined);
  e.setViewModelProperty("page", this.page);
  e.setViewModelProperty("inline", false);
  e.setViewModelProperty("disabled", false);
  e.setViewModelProperty("onBack", this.context.onBack);
  e.setViewModelProperty("onOpenLink", function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=1 bc=326B file=chatgpt_wallet_approval/src/WalletApprovalNativeDetails
// locals: this
// closure: l, e, a, t, r, o
function {
  this = this;
  e.beginComponent(r.OAITheme, o, undefined, undefined);
  e.setViewModelProperty("mode", r.OAIThemeMode.System);
  e.setViewModelProperty("fill", true);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_wallet_approval/src/WalletApprovalNativeDetails
// locals: this.active_func, new.target, arguments, this
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
  return this;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=3 bc=350B file=chatgpt_wallet_approval/src/WalletApprovalNativeDetails
// args: require, module, exports
// locals: e, o, t, r, i, l, a, WalletApprovalNativeDetails, <class_fields_init>, WalletApprovalNativeDetails#1
function {
  let WalletApprovalNativeDetails#1;
  let a;
  let l;
  let i;
  let r;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletApprovalNativeDetails = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "vkknVV5hjmrsVtee");
  t = e.makeComponentPrototype(undefined, "2WaL4JtjO69kGXAh");
  r = require("oai_core/src/OAITheme");
  i = require("valdi_core/src/Component");
  l = require("valdi_platform_browser/src/PlatformBrowser");
  a = require("./WalletApprovalSummary");
  let WalletApprovalNativeDetails;
  let <class_fields_init>;
  class WalletApprovalNativeDetails extends i.Component { ... }
  <proto:WalletApprovalNativeDetails>.onViewModelUpdate = function <atom:0>;
  <proto:WalletApprovalNativeDetails>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletApprovalNativeDetails>;
  WalletApprovalNativeDetails = function <atom:0>;
  // close_loc <class_fields_init>
  WalletApprovalNativeDetails#1 = function <atom:0>;
  exports.WalletApprovalNativeDetails = WalletApprovalNativeDetails#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_approval/src/WalletApprovalNativeDetails
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
