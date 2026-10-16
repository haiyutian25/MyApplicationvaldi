// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=251B file=chatgpt_wallet_approval/src/WalletApprovalDetailModal
// closure: this, n
function {
  if ((this.isDestroyed())) goto L_fa;
  if ((this.dismissing)) goto L_fa;
  this.dismissing = true;
  new n.NavigationController(this.context.navigator).dismiss(false);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=77B file=chatgpt_wallet_approval/src/WalletApprovalDetailModal
// locals: this, this.active_func, new.target, arguments
// closure: n, <class_fields_init>
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
  this.dismissing = false;
  this.dismiss = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=107B file=chatgpt_wallet_approval/src/WalletApprovalDetailModal
// locals: this
function {
  this = this;
  this.viewModel.onPresented(this.dismiss);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=chatgpt_wallet_approval/src/WalletApprovalDetailModal
// locals: this
function {
  this = this;
  this.viewModel.onDismiss();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=0 bc=1403B file=chatgpt_wallet_approval/src/WalletApprovalDetailModal
// locals: this
// closure: t, i, g, o, v, r, c, s
function {
  this = this;
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", g.root);
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", g.backdrop);
  t.setAttributeString("accessibilityLabel", v.default.closeDetails());
  t.setAttributeFunction("onTap", this.dismiss);
  t.endRender();
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", g.card);
  t.setAttributeString("accessibilityLabel", this.viewModel.page.title);
  t.beginComponent(c.WalletApprovalDetailContent, s, undefined, undefined);
  t.setViewModelProperty("page", this.viewModel.page);
  t.setViewModelProperty("inline", true);
  t.setViewModelProperty("modal", true);
  t.setViewModelProperty("disabled", false);
  t.setViewModelProperty("onBack", this.dismiss);
  t.setViewModelProperty("onOpenLink", this.viewModel.onOpenLink);
  t.endComponent();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=4 bc=1002B file=chatgpt_wallet_approval/src/WalletApprovalDetailModal
// args: require, module, exports
// locals: e, t, i, o, r, s, a, l, d, n, p, c, v, y, WalletApprovalDetailModal, <class_fields_init>, g
function {
  let g;
  let y;
  let v;
  let c;
  let p;
  let n;
  let d;
  let l;
  let a;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletApprovalDetailModal = undefined;
  e = require("tslib");
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("layout", undefined, "A1PuvRVkG_lkVF_O");
  o = t.makeNodePrototype("view", undefined, "quMKFkTiBVP83VKF");
  r = t.makeNodePrototype("view", undefined, "mf0o1h6DpHmHlun3");
  s = t.makeComponentPrototype(undefined, "_0dUUmZgivlOnpld");
  a = require("oai_core/src/OAITokens");
  l = require("valdi_core/src/Component");
  d = require("valdi_core/src/Style");
  n = require("valdi_navigation/src/NavigationController");
  p = require("valdi_navigation/src/NavigationPage");
  c = require("./WalletApprovalSummary");
  v = require("./Strings");
  let WalletApprovalDetailModal;
  let <class_fields_init>;
  class WalletApprovalDetailModal extends l.Component { ... }
  <proto:WalletApprovalDetailModal>.onCreate = function <atom:0>;
  <proto:WalletApprovalDetailModal>.onDestroy = function <atom:0>;
  <proto:WalletApprovalDetailModal>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletApprovalDetailModal>;
  WalletApprovalDetailModal = function <atom:0>;
  // close_loc <class_fields_init>
  y = function <atom:0>;
  exports.WalletApprovalDetailModal = y;
  y = e.__decorate([p.NavigationPage(module)], y);
  exports.WalletApprovalDetailModal = e.__decorate([p.NavigationPage(module)], y);
  g = {root: new d.Style({width: "100%", height: "100%", padding: 16, alignItems: "center", justifyContent: "center"}), backdrop: new d.Style({position: "absolute", left: 0, right: 0, top: 0, bottom: 0, accessibilityId: "wallet-approval-detail-backdrop", accessibilityCategory: "button"}), card: new d.Style({width: "100%", maxWidth: 420, maxHeight: "100%", backgroundColor: a.OAIColor.BgElevatedPrimary, borderRadius: 20, boxShadow: "0 8 24 rgba(0, 0, 0, 0.12)", accessibilityId: "wallet-approval-detail-modal", accessibilityNavigation: "cover"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_approval/src/WalletApprovalDetailModal
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
