// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=312B file=chatgpt_wallet_approval/src/WalletApprovalComponent
// closure: e, p, t, this
function {
  e.beginComponent(p.WalletApprovalContent, t, undefined, undefined);
  if ((e.hasContext())) goto L_c5;
  e.setContext(this.context);
  e.setViewModelProperties(this.viewModel);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=279B file=chatgpt_wallet_approval/src/WalletApprovalComponent
// locals: this
// closure: e, p, t, n, o
function {
  this = this;
  e.beginComponent(n.OAITheme, o, undefined, undefined);
  e.setViewModelProperty("mode", n.OAIThemeMode.System);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_wallet_approval/src/WalletApprovalComponent
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=330B file=chatgpt_wallet_approval/src/WalletApprovalComponent
// args: require, module, exports
// locals: e, o, t, n, r, p, WalletApprovalComponent, <class_fields_init>, WalletApprovalComponent#1
function {
  let WalletApprovalComponent#1;
  let p;
  let r;
  let n;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletApprovalComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "5PmZ5xdd4Qt_0lTv");
  t = e.makeComponentPrototype(undefined, "xeIjZwvVHegk2wnK");
  n = require("oai_core/src/OAITheme");
  r = require("valdi_core/src/Component");
  p = require("./WalletApprovalContent");
  let WalletApprovalComponent;
  let <class_fields_init>;
  class WalletApprovalComponent extends r.Component { ... }
  <proto:WalletApprovalComponent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletApprovalComponent>;
  WalletApprovalComponent = function <atom:0>;
  // close_loc <class_fields_init>
  WalletApprovalComponent#1 = function <atom:0>;
  exports.WalletApprovalComponent = WalletApprovalComponent#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_approval/src/WalletApprovalComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
