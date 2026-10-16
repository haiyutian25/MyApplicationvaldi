// fn <atom:0>  args=0 vars=0 closure=11 cpool=0 bc=891B file=chatgpt_wallet/src/WalletContactContent
// closure: e, i, A, V, r, this, p, C, a, M, c
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", A.addressStatus);
  e.beginComponent(V.WalletAddressIntro, r, undefined, undefined);
  e.endComponent();
  this.renderStatus(p);
  e.beginComponent(C.Button, a, undefined, undefined);
  e.setViewModelProperty("label", M.default.walletCancel());
  e.setViewModelProperty("variant", C.ButtonVariant.Ghost);
  e.setViewModelProperty("style", A.button);
  e.setViewModelProperty("labelStyle", A.buttonLabel);
  e.setViewModelProperty("onPress", c);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=6 closure=16 cpool=1 bc=2389B file=chatgpt_wallet/src/WalletContactContent
// locals: p, c, y, u, g, this
// closure: e, i, A, V, r, C, a, M, t, v, o, h, n, d, l, s
function {
  this = this;
  let g;
  let u;
  let y;
  let c;
  let p;
  if (((undefined === undefined))) goto L_ce;
  p = <to_object>(undefined).contact;
  c = <to_object>(undefined).onBack;
  y = <to_object>(undefined).onSubmit;
  u = <to_object>(undefined).onReload;
  g = <to_object>(undefined).onRefresh;
  <to_object>(undefined);
  goto L_f5;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== p.initialValue))) goto L_4ce;
  e.beginComponent(V.WalletContactForm, t, String(p.id), undefined);
  e.setViewModelProperty("initialValue", p.initialValue);
  e.setViewModelProperty("isEditing", p.isEditing);
  e.setViewModelProperty("isSaving", (p.status === v.WalletContactStatus.Saving));
  e.setViewModelProperty("isRefreshing", (p.status === v.WalletContactStatus.Loading));
  e.setViewModelProperty("errorMessage", p.errorMessage);
  e.setViewModelProperty("onBack", c);
  e.setViewModelProperty("onSubmit", y);
  if (!(p.needsReload)) goto L_46f;
  goto L_470;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onReload", undefined);
  e.setViewModelProperty("onRefresh", g);
  e.endComponent();
  return undefined;
  if (!(p.isEditing)) goto L_6c1;
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", A.root);
  e.beginComponent(h.ScrollView, n, undefined, undefined);
  e.setViewModelProperty("style", A.contactScroll);
  e.setViewModelProperty("allowContentOverflow", true);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return undefined;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", A.root);
  e.beginComponent(V.WalletContactHeader, l, undefined, undefined);
  e.setViewModelProperty("title", M.default.walletContactTitle());
  e.setViewModelProperty("onBack", c);
  e.endComponent();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", A.contactStatus);
  this.renderStatus(p);
  e.endRender();
  e.endRender();
  return undefined;
}

// fn <atom:0>  args=1 vars=2 closure=11 cpool=0 bc=1222B file=chatgpt_wallet/src/WalletContactContent
// args: t
// locals: this
// closure: v, e, w, p, M, c, A, S, y, C, u
function {
  this = this;
  if (!((t.status === v.WalletContactStatus.Loading))) goto L_15e;
  e.beginComponent(w.ActivityIndicator, p, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", M.default.walletLoading());
  e.endComponent();
  return;
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", A.status);
  if (((undefined === t.errorMessage))) goto L_33f;
  e.beginComponent(S.Text, y, undefined, undefined);
  e.setViewModelProperty("tone", S.TextTone.Danger);
  e.setViewModelProperty("value", t.errorMessage);
  e.endComponent();
  e.beginComponent(C.Button, u, undefined, undefined);
  e.setViewModelProperty("label", M.default.walletRetry());
  e.setViewModelProperty("onPress", this.viewModel.onReload);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_wallet/src/WalletContactContent
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

// fn <atom:0>  args=3 vars=32 closure=0 cpool=3 bc=2232B file=chatgpt_wallet/src/WalletContactContent
// args: require, module, exports
// locals: e, t, o, n, i, r, a, d, l, s, p, c, y, u, v, g, m, w, C, S, P, b, h, M, V, WalletContactContent, <class_fields_init>, WalletContactContent#1, A
function {
  let A;
  let WalletContactContent#1;
  let V;
  let M;
  let h;
  let b;
  let P;
  let S;
  let C;
  let w;
  let m;
  let g;
  let v;
  let u;
  let y;
  let c;
  let p;
  let s;
  let l;
  let d;
  let a;
  let r;
  let i;
  let n;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletContactContent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "Viz7VgDi6zrLrAeW");
  o = e.makeNodePrototype("view", undefined, "bSEC1QNx-htDAPBS");
  n = e.makeComponentPrototype(undefined, "t3-qZD8FjLwiyn43");
  i = e.makeNodePrototype("layout", undefined, "8AeK7jhw34SoZrJ_");
  r = e.makeComponentPrototype(undefined, "AfY3AifPBA9_dSpK");
  a = e.makeComponentPrototype(["accessibilityId", "wallet.contact.cancel"], "CnS-Iyyq61a5Eo4e");
  d = e.makeNodePrototype("view", undefined, "_NPqwvWu_EHs_zE8");
  l = e.makeComponentPrototype(undefined, "Gg4g0b-b5_17eHDY");
  s = e.makeNodePrototype("layout", undefined, "mSzJ7Jz1qWccHCkA");
  p = e.makeComponentPrototype(undefined, "eGR3fKFdFuh5vxPc");
  c = e.makeNodePrototype("layout", undefined, "7jerJkNHI6RKhihB");
  y = e.makeComponentPrototype(["numberOfLines", 0], "ELAvBMp0GqqDlOCV");
  u = e.makeComponentPrototype(["accessibilityId", "wallet.contact.retry"], "OkF5q_GOkRDr_FqN");
  v = require("chatgpt_wallet_core/src/WalletContactInfo");
  g = require("oai_core/src/OAITokens");
  m = require("oai_core/src/OAITypography");
  w = require("oai_ui/src/components/ActivityIndicator");
  C = require("oai_ui/src/components/Button");
  S = require("oai_ui/src/components/Text");
  P = require("valdi_core/src/Component");
  b = require("valdi_core/src/Style");
  h = require("valdi_ui/src/components/ScrollView");
  M = require("./Strings");
  V = require("./WalletContactForm");
  let WalletContactContent;
  let <class_fields_init>;
  class WalletContactContent extends P.Component { ... }
  <proto:WalletContactContent>.onRender = function <atom:0>;
  <proto:WalletContactContent>.renderStatus = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletContactContent>;
  WalletContactContent = function <atom:0>;
  // close_loc <class_fields_init>
  WalletContactContent#1 = function <atom:0>;
  exports.WalletContactContent = WalletContactContent#1;
  null;
  m.resolveOAITypography(m.Typography.SubheadlineMedium, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});
  A = {root: new b.Style({backgroundColor: g.OAIColor.BgCanvas, width: "100%", height: "100%"}), contactScroll: new b.Style({width: "100%", flexGrow: 1, flexShrink: 1}), addressStatus: new b.Style({width: "100%", padding: g.OAISpacing.Three, gap: g.OAISpacing.Three}), contactStatus: new b.Style({width: "100%", flexGrow: 1, alignItems: "center", justifyContent: "center", padding: g.OAISpacing.Three, gap: g.OAISpacing.Three}), status: new b.Style({gap: g.OAISpacing.Two, alignItems: "center", width: "100%"}), button: new b.Style({height: "auto", minHeight: 48, paddingTop: g.OAISpacing.OneAndHalf, paddingBottom: g.OAISpacing.OneAndHalf, maxWidth: "100%"}), buttonLabel: new b.Style({numberOfLines: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletContactContent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
