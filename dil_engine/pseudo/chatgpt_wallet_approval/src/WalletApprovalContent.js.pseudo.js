// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=108B file=chatgpt_wallet_approval/src/WalletApprovalContent
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
  this.state = {actionPending: false};
  this.revision = 0;
  this.elicitation = {transaction: undefined, valid: false};
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=1369B file=chatgpt_wallet_approval/src/WalletApprovalContent
// args: e
// locals: this
// closure: V
function {
  this = this;
  this.revision = (this.revision + 1);
  this.dismissDetails();
  if (!((e == null))) goto L_5e;
  e;
  goto L_7f;
  if (!((undefined.elicitationJson !== this.viewModel.elicitationJson))) goto L_13a;
  this.elicitation = V.parseWalletApprovalElicitation(this.viewModel.elicitationJson);
  V.parseWalletApprovalElicitation(this.viewModel.elicitationJson);
  if (!((e == null))) goto L_144;
  e;
  goto L_165;
  if (!((undefined.elicitationJson === this.viewModel.elicitationJson))) goto L_270;
  if (!((e == null))) goto L_1b9;
  e;
  goto L_203;
  if (!((undefined.configuration == null))) goto L_1e2;
  undefined.configuration;
  goto L_203;
  if (!((this.viewModel.configuration == null))) goto L_24e;
  this.viewModel.configuration;
  goto L_26f;
  if (((undefined.localeIdentifier === undefined.localeIdentifier))) goto L_3a1;
  if (!(this.elicitation.transaction)) goto L_396;
  if (!((this.viewModel.configuration == null))) goto L_372;
  this.viewModel.configuration;
  goto L_393;
  goto L_397;
  // [栈深重同步 2 -> 1]
  this.formattedTotal = undefined;
  undefined;
  if (!((e == null))) goto L_3ab;
  e;
  goto L_3cc;
  if (!((undefined.elicitationJson !== this.viewModel.elicitationJson))) goto L_440;
  this.setState({detailPage: undefined});
  if (!((e == null))) goto L_44a;
  e;
  goto L_46b;
  if (!((undefined.requestId === this.viewModel.requestId))) goto L_521;
  if (!((e == null))) goto L_4bc;
  e;
  goto L_4dd;
  if (((undefined.phase === this.viewModel.phase))) goto L_558;
  this.setState({actionPending: false, detailPage: undefined});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=chatgpt_wallet_approval/src/WalletApprovalContent
// locals: this
function {
  this = this;
  this.dismissDetails();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=636B file=chatgpt_wallet_approval/src/WalletApprovalContent
// closure: this, _, u, L, W
function {
  if (!(!this.isDestroyed())) goto L_27b;
  if (!((_ === this.revision))) goto L_27b;
  if (!((u.requestId === this.viewModel.requestId))) goto L_27b;
  if (!((L === this.context.host))) goto L_27b;
  if (!(!this.state.actionPending)) goto L_27b;
  if (!((this.viewModel.phase !== W.WalletApprovalPhase.Verifying))) goto L_27b;
  return (this.viewModel.phase !== W.WalletApprovalPhase.Submitting);
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=601B file=chatgpt_wallet_approval/src/WalletApprovalContent
// args: e
// locals: t
// closure: J, this, m, u, V, C
function {
  if (!(J())) goto L_258;
  if (!((undefined === this.state.detailPage))) goto L_258;
  let t;
  if (!(m.isVersionAtLeast(242))) goto L_161;
  if (!(this.context.openDetailsHandler)) goto L_161;
  this.context.openDetailsHandler(u.requestId, JSON.stringify(e));
  return;
  if (!(m.isVersionAtLeast(239))) goto L_1d0;
  goto L_1d1;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (!(V)) goto L_231;
  if (!((undefined !== t))) goto L_231;
  goto L_257;
  // [栈深重同步 1 -> 0]
  this.navigate(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=0 bc=534B file=chatgpt_wallet_approval/src/WalletApprovalContent
// closure: b, e, I, t, f, this, V, R, B, T
function {
  if (!((undefined !== b))) goto L_215;
  e.beginComponent(I.WalletApprovalSummary, t, undefined, undefined);
  e.setViewModelProperty("transaction", b);
  e.setViewModelProperty("configuration", f);
  e.setViewModelProperty("formattedTotal", this.formattedTotal);
  e.setViewModelProperty("inline", V);
  if ((R)) goto L_1ba;
  if ((this.state.actionPending)) goto L_1ba;
  e.setViewModelProperty("disabled", B);
  e.setViewModelProperty("onOpenDetails", T);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=47B file=chatgpt_wallet_approval/src/WalletApprovalContent
// closure: J, this
function {
  if (!(J())) goto L_2e;
  this.navigate(undefined);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=82B file=chatgpt_wallet_approval/src/WalletApprovalContent
// args: e
// closure: J, S
function {
  if (!(J())) goto L_51;
  S.platformBrowser.openURL(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=2 bc=430B file=chatgpt_wallet_approval/src/WalletApprovalContent
// closure: J, this, S, e, I, a, k, V, R
function {
  e.beginComponent(I.WalletApprovalDetailContent, a, undefined, undefined);
  e.setViewModelProperty("page", k);
  e.setViewModelProperty("inline", V);
  if ((R)) goto L_124;
  e.setViewModelProperty("disabled", this.state.actionPending);
  e.setViewModelProperty("onBack", function <atom:0>);
  e.setViewModelProperty("onOpenLink", function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=81B file=chatgpt_wallet_approval/src/WalletApprovalContent
// closure: this, _, u, L
function {
  return this.dispatch(true, _, u.requestId, L);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=81B file=chatgpt_wallet_approval/src/WalletApprovalContent
// closure: this, _, u, L
function {
  return this.dispatch(false, _, u.requestId, L);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=27 cpool=2 bc=3182B file=chatgpt_wallet_approval/src/WalletApprovalContent
// closure: this, _, u, L, e, s, V, q, N, d, p, b, f, I, v, g, c, A, y, O, R, W, w, x, B, h, M
function {
  e.beginRender(s, undefined);
  if (!(V)) goto L_80;
  goto L_a4;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", q.footer);
  if (!(N)) goto L_186;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", q.error);
  e.setAttributeString("value", N);
  e.endRender();
  e.beginRender(p, undefined);
  if (!(V)) goto L_207;
  goto L_208;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", undefined);
  if (!(V)) goto L_2a7;
  if (!(b)) goto L_2a7;
  if (((undefined !== b.review))) goto L_279;
  if (!((f == null))) goto L_257;
  f;
  goto L_278;
  if (!((false !== undefined.showPaymentMethod))) goto L_2a7;
  I.renderWalletPaymentMethod(b, true);
  e.beginRender(v, undefined);
  if (!(V)) goto L_328;
  goto L_34c;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", q.actions);
  e.beginComponent(g.Button, c, undefined, undefined);
  if (!(V)) goto L_3f5;
  goto L_419;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("style", q.approveButton);
  e.setViewModelProperty("variant", g.ButtonVariant.Primary);
  if (!(V)) goto L_4c0;
  goto L_505;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("material", A.ControlMaterial.ProminentGlass);
  if (!(V)) goto L_57e;
  goto L_5c3;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("size", y.OAIControlSize.Lg);
  e.setViewModelProperty("label", O);
  e.setViewModelProperty("labelStyle", q.buttonLabel);
  e.setViewModelProperty("loading", R);
  if (((u.phase !== W.WalletApprovalPhase.Ready))) goto L_789;
  if ((!w.valid)) goto L_789;
  if ((x)) goto L_789;
  if ((B)) goto L_789;
  e.setViewModelProperty("disabled", this.state.actionPending);
  e.setViewModelProperty("onPress", function <atom:0>);
  e.endComponent();
  e.beginComponent(g.Button, h, undefined, undefined);
  if (!(V)) goto L_889;
  goto L_8ad;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("style", q.cancelButton);
  e.setViewModelProperty("variant", g.ButtonVariant.Secondary);
  if (!(V)) goto L_954;
  goto L_999;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("material", A.ControlMaterial.Glass);
  if (!(V)) goto L_a12;
  goto L_a57;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("size", y.OAIControlSize.Lg);
  e.setViewModelProperty("label", M.default.cancel());
  e.setViewModelProperty("labelStyle", q.buttonLabel);
  if ((R)) goto L_b9b;
  if ((this.state.actionPending)) goto L_b9b;
  e.setViewModelProperty("disabled", B);
  e.setViewModelProperty("onPress", function <atom:0>);
  e.endComponent();
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=18 closure=25 cpool=5 bc=2712B file=chatgpt_wallet_approval/src/WalletApprovalContent
// locals: u, w, b, f, V, B, k, x, R, D, O, N, _, L, J, T, z, this
// closure: W, m, C, e, I, t, S, a, s, q, d, p, v, g, c, A, y, h, M, i, o, r, n, P, l
function {
  this = this;
  let z;
  let T;
  let J;
  let L;
  let _;
  let N;
  let O;
  let D;
  let R;
  let x;
  let k;
  let B;
  let V;
  let f;
  let b;
  let w;
  let u;
  u = this.viewModel;
  w = this.elicitation;
  b = w.transaction;
  f = u.configuration;
  V = W.usesInlineWalletApproval(f);
  B = (undefined !== this.detailPresentation);
  if (!(B)) goto L_121;
  goto L_165;
  // [栈深重同步 1 -> 0]
  k = this.state.detailPage;
  if (!((b == null))) goto L_172;
  b;
  goto L_1c5;
  if (!((undefined.review == null))) goto L_19b;
  undefined.review;
  goto L_1c5;
  if (!((undefined.blockingReasons == null))) goto L_1c4;
  undefined.blockingReasons;
  goto L_1c5;
  if (!((undefined.length == null))) goto L_1cb;
  undefined.length;
  x = (0 > 0);
  if (((u.phase === W.WalletApprovalPhase.Verifying))) goto L_2a7;
  R = (u.phase === W.WalletApprovalPhase.Submitting);
  D = (u.phase === W.WalletApprovalPhase.Unavailable);
  if (!((u.phase === W.WalletApprovalPhase.Verifying))) goto L_3cc;
  goto L_4ca;
  // [栈深重同步 1 -> 0]
  if (!((u.phase === W.WalletApprovalPhase.Submitting))) goto L_482;
  goto L_4ca;
  // [栈深重同步 1 -> 0]
  O = M.default.approve();
  if (!((u.errorMessage == null))) goto L_5b8;
  u.errorMessage;
  if (!(w.valid)) goto L_570;
  if (!(D)) goto L_56d;
  goto L_5b8;
  // [栈深重同步 1 -> 0]
  goto L_5b8;
  // [栈深重同步 1 -> 0]
  N = M.default.invalidRequest();
  _ = this.revision;
  L = this.context.host;
  J = function <atom:0>;
  T = function <atom:0>;
  z = function <atom:0>;
  e.beginRender(i, undefined);
  if (!(V)) goto L_6c0;
  goto L_6e4;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", q.card);
  if (!(k)) goto L_71b;
  goto L_720;
  // [栈深重同步 4 -> 3]
  e.beginRender(o, "summary");
  if (!(V)) goto L_778;
  goto L_79c;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", q.page);
  if (!(k)) goto L_7d1;
  goto L_7d2;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("zIndex", 0);
  if (!(k)) goto L_7e1;
  goto L_93b;
  // [栈深重同步 1 -> 0]
  if (!(V)) goto L_7ed;
  goto L_93b;
  // [栈深重同步 1 -> 0]
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", q.scroll);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", q.scrollContent);
  z();
  e.endRender();
  e.endRender();
  if (!(!k)) goto L_a3b;
  if (!(V)) goto L_a3b;
  e.beginComponent(P.Divider, l, undefined, undefined);
  e.setViewModelProperty("color", y.OAIColor.BorderDefault);
  e.endComponent();
  if (!(!k)) goto L_a47;
  function <atom:0>();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=59B file=chatgpt_wallet_approval/src/WalletApprovalContent
// args: e
// closure: this, i
function {
  if (!((this.detailPresentation === i))) goto L_38;
  i.dismiss = e;
  goto L_3a;
  // [栈深重同步 1 -> 0]
  e();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=143B file=chatgpt_wallet_approval/src/WalletApprovalContent
// closure: this, i
function {
  if (!((this.detailPresentation === i))) goto L_8e;
  this.detailPresentation = undefined;
  this.revision = (this.revision + 1);
  this.setState({detailPage: undefined});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=157B file=chatgpt_wallet_approval/src/WalletApprovalContent
// args: e
// closure: this, i, S
function {
  if ((this.isDestroyed())) goto L_9c;
  if (((this.detailPresentation !== i))) goto L_9c;
  S.platformBrowser.openURL(e);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=3 bc=299B file=chatgpt_wallet_approval/src/WalletApprovalContent
// args: e, t
// locals: i, this
// closure: S, f
function {
  this = this;
  let i;
  i = {};
  this.detailPresentation = i;
  this.revision = (this.revision + 1);
  this.setState({detailPage: e});
  t.present(f.WalletApprovalDetailModal, {page: e, onPresented: function <atom:0>, onDismiss: function <atom:0>, onOpenLink: function <atom:0>}, {}, {animated: false, pageBackgroundColor: "transparent", platformNavigationTitle: e.title, showPlatformNavigationBar: false, wrapInPlatformNavigationController: false});
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=198B file=chatgpt_wallet_approval/src/WalletApprovalContent
// locals: e, this
function {
  this = this;
  let e;
  e = this.detailPresentation;
  if (!((undefined !== e))) goto L_c5;
  this.detailPresentation = undefined;
  if ((this.isDestroyed())) goto L_94;
  this.setState({detailPage: undefined});
  if (!((e.dismiss == null))) goto L_c2;
  e.dismiss;
  e;
  goto L_c5;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=45B file=chatgpt_wallet_approval/src/WalletApprovalContent
// closure: this, e
function {
  this.setState({detailPage: e});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=98B file=chatgpt_wallet_approval/src/WalletApprovalContent
// args: e
// locals: this
// closure: B, k
function {
  this = this;
  this.revision = (this.revision + 1);
  if (!(e)) goto L_59;
  goto L_5c;
  // [栈深重同步 3 -> 2]
  this.animate(k, function <atom:0>);
  return;
}

// fn <atom:0>  args=4 vars=7 closure=1 cpool=0 bc=1017B file=chatgpt_wallet_approval/src/WalletApprovalContent
// args: e, t, i, o
// locals: a, r, this
// closure: W
function {
  this = this;
  let r;
  let a;
  a = this.viewModel.phase;
  if (((a === W.WalletApprovalPhase.Ready))) goto L_e8;
  if (!(!e)) goto L_e8;
  r = (a === W.WalletApprovalPhase.Unavailable);
  if ((this.isDestroyed())) goto L_3f8;
  if (((t !== this.revision))) goto L_3f8;
  if (((i !== this.viewModel.requestId))) goto L_3f8;
  if (((o !== this.context.host))) goto L_3f8;
  if ((this.state.actionPending)) goto L_3f8;
  if (((undefined !== this.state.detailPage))) goto L_3f8;
  if (!(e)) goto L_367;
  if ((!this.elicitation.valid)) goto L_367;
  if (!((this.elicitation.transaction == null))) goto L_30c;
  this.elicitation.transaction;
  goto L_35f;
  if (!((undefined.review == null))) goto L_335;
  undefined.review;
  goto L_35f;
  if (!((undefined.blockingReasons == null))) goto L_35e;
  undefined.blockingReasons;
  goto L_35f;
  if (!((undefined.length == null))) goto L_365;
  undefined.length;
  if (((0 > 0))) goto L_3f8;
  if ((!r)) goto L_3f8;
  this.setState({actionPending: true});
  if (!(e)) goto L_3d2;
  goto L_3f8;
  // [栈深重同步 1 -> 0]
  o.cancel(i);
  return;
}

// fn <atom:0>  args=3 vars=40 closure=0 cpool=10 bc=3094B file=chatgpt_wallet_approval/src/WalletApprovalContent
// args: require, module, exports
// locals: e, t, i, o, a, r, n, l, s, d, p, v, c, h, y, u, g, P, w, m, b, C, S, A, M, f, I, V, W, B, k, WalletApprovalContent, <class_fields_init>, WalletApprovalContent#1, x, R, q
function {
  let q;
  let R;
  let x;
  let WalletApprovalContent#1;
  let k;
  let B;
  let W;
  let V;
  let I;
  let f;
  let M;
  let A;
  let S;
  let C;
  let b;
  let m;
  let w;
  let P;
  let g;
  let u;
  let y;
  let h;
  let c;
  let v;
  let p;
  let d;
  let s;
  let l;
  let n;
  let r;
  let a;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletApprovalContent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "HuNLHezy4h5F3fU2");
  i = e.makeNodePrototype("view", undefined, "Y-h-zNBJxrGCHKoR");
  o = e.makeNodePrototype("view", undefined, "oyjuWtff3OWsgdND");
  a = e.makeComponentPrototype(undefined, "0pzSnTMhnxyESpOM");
  r = e.makeNodePrototype("scroll", undefined, "_SNLHK75DH0d31YP");
  n = e.makeNodePrototype("layout", undefined, "pWc4-f7hEy3N5WMm");
  l = e.makeComponentPrototype(undefined, "EBJVzqbLEfkZ_7FZ");
  s = e.makeNodePrototype("view", undefined, "gRI4o_GjzBqiA6OX");
  d = e.makeNodePrototype("label", undefined, "n1phMW9yBeryHrdi");
  p = e.makeNodePrototype("layout", undefined, "o3WTWHaY6r7b_1J_");
  v = e.makeNodePrototype("layout", undefined, "DqLJ-IZsPmt6MGUY");
  c = e.makeComponentPrototype(undefined, "u_VuPHIYKM5PJVlE");
  h = e.makeComponentPrototype(undefined, "wpR8mdk7JKwL4x5F");
  y = require("oai_core/src/OAITokens");
  u = require("oai_core/src/OAITypography");
  g = require("oai_ui/src/components/Button");
  P = require("oai_ui/src/components/Divider");
  w = require("valdi_core/src/Component");
  m = require("valdi_core/src/CompilerIntrinsics");
  b = require("valdi_core/src/Style");
  C = require("valdi_navigation/src/NavigationController");
  S = require("valdi_platform_browser/src/PlatformBrowser");
  A = require("valdi_ui/src/ControlMaterial");
  M = require("./Strings");
  f = require("./WalletApprovalDetailModal");
  I = require("./WalletApprovalSummary");
  V = require("./WalletApprovalElicitation");
  W = require("./WalletApprovalModels");
  B = {duration: 0.25, beginFromCurrentState: true, appearanceBehavior: {enterAttributes: {translationX: 1}, exitAttributes: {translationX: (-1 / 6), opacity: 0}}};
  k = {duration: 0.25, beginFromCurrentState: true, appearanceBehavior: {enterAttributes: {translationX: (-1 / 6), opacity: 0}, exitAttributes: {translationX: 1}}};
  let WalletApprovalContent;
  let <class_fields_init>;
  class WalletApprovalContent extends w.StatefulComponent { ... }
  <proto:WalletApprovalContent>.onViewModelUpdate = function <atom:0>;
  <proto:WalletApprovalContent>.onDestroy = function <atom:0>;
  <proto:WalletApprovalContent>.onRender = function <atom:0>;
  <proto:WalletApprovalContent>.presentDetails = function <atom:0>;
  <proto:WalletApprovalContent>.dismissDetails = function <atom:0>;
  <proto:WalletApprovalContent>.navigate = function <atom:0>;
  <proto:WalletApprovalContent>.dispatch = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletApprovalContent>;
  WalletApprovalContent = function <atom:0>;
  // close_loc <class_fields_init>
  WalletApprovalContent#1 = function <atom:0>;
  exports.WalletApprovalContent = WalletApprovalContent#1;
  x = I.resolveWalletTypography(u.Typography.Body);
  R = new b.Style({width: "100%", minHeight: 54, height: "auto", paddingTop: 15, paddingBottom: 15});
  null;
  x;
  null;
  x;
  q = {page: new b.Style({width: "100%", flexShrink: 1}), inlinePage: new b.Style({width: "100%", backgroundColor: y.OAIColor.BgPrimary}), card: new b.Style({accessibilityId: "wallet-approval-card", width: "100%", flexShrink: 1, slowClipping: true}), inlineCard: new b.Style({accessibilityId: "wallet-approval-card", width: "100%", backgroundColor: y.OAIColor.BgPrimary, borderColor: y.OAIColor.BorderDefault, borderWidth: 1, borderRadius: 20, slowClipping: true}), inlineFooter: new b.Style({padding: 20, gap: 8}), inlineFooterContent: new b.Style({flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-end", gap: 16}), inlineActions: new b.Style({flexDirection: "row-reverse", gap: 8}), inlineCancelButton: new b.Style({accessibilityId: "wallet-approval-cancel", borderWidth: 1, borderColor: y.OAIColor.BorderDefault, backgroundColor: y.OAIColor.BgPrimary}), inlineApproveButton: new b.Style({accessibilityId: "wallet-approval-approve"}), scroll: new b.Style({accessibilityId: "wallet-approval-details", width: "100%", flexShrink: 1, showsVerticalScrollIndicator: true}), scrollContent: new b.Style({width: "100%", paddingLeft: 24, paddingRight: 24, paddingTop: 28}), footer: new b.Style({flexShrink: 0, padding: 24, paddingBottom: 0, gap: 12}), error: new b.Style({color: y.OAIColor.TextStatusError, numberOfLines: 0}), actions: new b.Style({gap: 8}), cancelButton: R.extend({accessibilityId: "wallet-approval-cancel", borderWidth: 0, backgroundColor: y.OAIColor.BgTertiary}), approveButton: R.extend({accessibilityId: "wallet-approval-approve"}), buttonLabel: new b.Style({numberOfLines: 0, textAlign: "center"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_approval/src/WalletApprovalContent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
