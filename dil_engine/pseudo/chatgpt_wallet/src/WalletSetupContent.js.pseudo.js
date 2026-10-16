// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=125B file=chatgpt_wallet/src/WalletSetupContent
// closure: this
function {
  if ((this.isDestroyed())) goto L_7c;
  if (!((this.viewModel.onCancel == null))) goto L_79;
  this.viewModel.onCancel;
  this.viewModel;
  goto L_7c;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=chatgpt_wallet/src/WalletSetupContent
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
  this.cancel = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=496B file=chatgpt_wallet/src/WalletSetupContent
// closure: e, D, v, F, this
function {
  e.beginComponent(D.Text, v, undefined, undefined);
  e.setViewModelProperty("typography", F.Typography.Subheadline);
  e.setViewModelProperty("tone", D.TextTone.Danger);
  e.setViewModelProperty("value", this.viewModel.state.errorMessage);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=709B file=chatgpt_wallet/src/WalletSetupContent
// closure: e, E, w, X, oe, K, this
function {
  e.beginComponent(E.Button, w, undefined, undefined);
  e.setViewModelProperty("label", X.default.walletCancel());
  e.setViewModelProperty("labelStyle", oe.buttonLabel);
  e.setViewModelProperty("material", K.ControlMaterial.Glass);
  e.setViewModelProperty("variant", E.ButtonVariant.Secondary);
  e.setViewModelProperty("style", oe.button);
  e.setViewModelProperty("onPress", this.cancel);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=32 cpool=2 bc=5368B file=chatgpt_wallet/src/WalletSetupContent
// locals: this
// closure: e, D, v, F, E, w, X, oe, K, t, L, o, n, WalletSetupHero, i, r, d, Q, l, z, a, s, $, p, ee, y, c, g, u, m, S, b
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", oe.root);
  if (!(this.viewModel.usesNativeBackground)) goto L_134;
  goto L_179;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", L.OAIColor.BgCanvas);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", oe.scroll);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", oe.content);
  e.beginComponent(WalletSetupHero, i, undefined, undefined);
  e.setViewModelProperty("comingSoon", false);
  e.setViewModelProperty("orbitName", this.viewModel.orbitName);
  e.endComponent();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", oe.assurances);
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", oe.assurance);
  e.beginComponent(Q.Icon, l, undefined, undefined);
  e.setViewModelProperty("src", z.default.introFace);
  e.setViewModelProperty("imageStyle", oe.assuranceIcon);
  e.endComponent();
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", oe.assuranceText);
  e.beginComponent(D.Text, s, undefined, undefined);
  e.setViewModelProperty("typography", $);
  e.setViewModelProperty("value", X.default.walletApprovalAssurance());
  e.endComponent();
  e.beginComponent(D.Text, p, undefined, undefined);
  e.setViewModelProperty("typography", ee);
  e.setViewModelProperty("tone", D.TextTone.Secondary);
  e.setViewModelProperty("value", X.default.walletIntroApprovalDetail());
  e.endComponent();
  e.endRender();
  e.endRender();
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", oe.assurance);
  e.beginComponent(Q.Icon, c, undefined, undefined);
  e.setViewModelProperty("src", z.default.introLock);
  e.setViewModelProperty("imageStyle", oe.assuranceIcon);
  e.endComponent();
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", oe.assuranceText);
  e.beginComponent(D.Text, u, undefined, undefined);
  e.setViewModelProperty("typography", $);
  e.setViewModelProperty("value", X.default.walletPrivacyAssurance());
  e.endComponent();
  e.beginComponent(D.Text, m, undefined, undefined);
  e.setViewModelProperty("typography", ee);
  e.setViewModelProperty("tone", D.TextTone.Secondary);
  e.setViewModelProperty("value", X.default.walletIntroPrivacyDetail());
  e.endComponent();
  e.endRender();
  e.endRender();
  e.endRender();
  if (((undefined === this.viewModel.state.errorMessage))) goto L_ee8;
  function <atom:0>();
  e.endRender();
  e.endRender();
  e.beginRender(S, undefined);
  e.setAttributeStyle("style", oe.footer);
  if (!(this.viewModel.state.isConnected)) goto L_106e;
  goto L_1073;
  // [栈深重同步 5 -> 4]
  e.beginComponent(E.Button, b, "connect", undefined);
  if (!(this.viewModel.state.isConnected)) goto L_110e;
  goto L_1113;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityId", "wallet.connect");
  e.setViewModelProperty("disabled", !this.viewModel.state.isEnabled);
  e.setViewModelProperty("loading", this.viewModel.state.isLoading);
  e.setViewModelProperty("label", X.default.walletAddCard());
  e.setViewModelProperty("labelStyle", oe.buttonLabel);
  e.setViewModelProperty("material", K.ControlMaterial.ProminentGlass);
  e.setViewModelProperty("style", oe.button);
  e.setViewModelProperty("onPress", this.viewModel.onContinue);
  e.endComponent();
  if (((undefined === this.viewModel.onCancel))) goto L_14a7;
  function <atom:0>();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=884B file=chatgpt_wallet/src/WalletSetupContent
// closure: e, P, oe, this, L, h, M, WalletSetupHero, A
function {
  e.beginRender(P, undefined);
  e.setAttributeStyle("style", oe.root);
  if (!(this.viewModel.usesNativeBackground)) goto L_132;
  goto L_177;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", L.OAIColor.BgCanvas);
  e.beginRender(h, undefined);
  e.setAttributeStyle("style", oe.scroll);
  e.beginRender(M, undefined);
  e.setAttributeStyle("style", oe.comingSoonContent);
  e.beginComponent(WalletSetupHero, A, undefined, undefined);
  e.setViewModelProperty("comingSoon", true);
  e.endComponent();
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=10 cpool=1 bc=398B file=chatgpt_wallet/src/WalletSetupContent
// locals: this
// closure: e, P, oe, L, h, M, WalletSetupHero, A, q, C
function {
  this = this;
  e.beginComponent(q.OAITheme, C, undefined, undefined);
  e.setViewModelProperty("fill", false);
  if (!((this.viewModel.themeMode == null))) goto L_138;
  this.viewModel.themeMode;
  e.setViewModelProperty("mode", q.OAIThemeMode.System);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_wallet/src/WalletSetupContent
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

// fn <atom:0>  args=0 vars=1 closure=20 cpool=0 bc=2873B file=chatgpt_wallet/src/WalletSetupContent
// locals: this
// closure: e, I, Z, oe, k, O, T, z, D, f, J, X, Y, V, R, x, N, H, F, B
function {
  this = this;
  if (!(!this.viewModel.comingSoon)) goto L_5a6;
  e.beginRender(I, undefined);
  if (!(Z.isNativeIOS())) goto L_ed;
  goto L_111;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", oe.introHero);
  e.beginRender(k, undefined);
  e.setAttributeStyle("style", oe.introHeading);
  e.beginRender(O, undefined);
  e.setAttributeStyle("style", oe.introArtworkBackdrop);
  e.beginRender(T, undefined);
  e.setAttributeStyle("style", oe.introIcon);
  e.setAttribute("src", z.default.introWallet);
  e.endRender();
  e.endRender();
  e.beginComponent(D.Text, f, undefined, undefined);
  e.setViewModelProperty("typography", J);
  e.setViewModelProperty("value", X.default.walletIntroTitle());
  e.endComponent();
  e.endRender();
  e.beginComponent(Y.WalletIntroSubtitle, V, undefined, undefined);
  e.setViewModelProperty("orbitName", this.viewModel.orbitName);
  e.endComponent();
  e.endRender();
  return;
  e.beginRender(R, undefined);
  e.setAttributeStyle("style", oe.hero);
  e.beginRender(x, undefined);
  e.setAttributeStyle("style", oe.artworkBackdrop);
  e.beginRender(N, undefined);
  e.setAttributeStyle("style", oe.comingSoonIcon);
  e.setAttribute("src", z.default.wallet);
  e.endRender();
  e.endRender();
  e.beginComponent(D.Text, H, undefined, undefined);
  e.setViewModelProperty("typography", F.Typography.Title2);
  e.setViewModelProperty("value", X.default.walletComingSoon());
  e.endComponent();
  e.beginComponent(D.Text, B, undefined, undefined);
  e.setViewModelProperty("typography", F.Typography.Subheadline);
  e.setViewModelProperty("tone", D.TextTone.Secondary);
  e.setViewModelProperty("value", X.default.walletComingSoonDescription());
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_wallet/src/WalletSetupContent
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

// fn <atom:0>  args=3 vars=69 closure=0 cpool=10 bc=6456B file=chatgpt_wallet/src/WalletSetupContent
// args: require, module, exports
// locals: e, t, o, n, i, r, d, l, a, s, p, y, c, g, u, m, v, S, b, w, C, P, h, M, A, I, k, O, T, f, V, R, x, N, H, B, _, W, q, L, F, E, Q, D, U, G, j, K, Z, z, X, Y, WalletSetupContent, <class_fields_init>, WalletSetupContent#1, WalletComingSoonContent, <class_fields_init>#1, WalletComingSoonContent#1, WalletSetupHero, <class_fields_init>#2, WalletSetupHero#1, J, $, ee, te, oe
function {
  let oe;
  let te;
  let ee;
  let $;
  let J;
  let WalletSetupHero#1;
  let WalletComingSoonContent#1;
  let WalletSetupContent#1;
  let Y;
  let X;
  let z;
  let Z;
  let K;
  let j;
  let G;
  let U;
  let D;
  let Q;
  let E;
  let F;
  let L;
  let q;
  let W;
  let _;
  let B;
  let H;
  let N;
  let x;
  let R;
  let V;
  let f;
  let T;
  let O;
  let k;
  let I;
  let A;
  let M;
  let h;
  let P;
  let C;
  let w;
  let b;
  let S;
  let v;
  let m;
  let u;
  let g;
  let c;
  let y;
  let p;
  let s;
  let a;
  let l;
  let d;
  let r;
  let i;
  let n;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletSetupContent = undefined;
  exports.WalletComingSoonContent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["accessibilityId", "wallet.screen"], "GRS-U-VPFbLQ5a3y");
  o = e.makeNodePrototype("scroll", undefined, "VrTSMOTub_cFxGzW");
  n = e.makeNodePrototype("layout", undefined, "cvbZgKEUK_Goad6U");
  i = e.makeComponentPrototype(undefined, "IepfD2heXOWdf48y");
  r = e.makeNodePrototype("layout", undefined, "b0rSHrQE7B6kQDW6");
  d = e.makeNodePrototype("layout", undefined, "jq8RT1T4qMEb6bNd");
  l = e.makeComponentPrototype(undefined, "jg1xNaVb59y-wlu6");
  a = e.makeNodePrototype("layout", undefined, "Y-KI_hZXvSABDMnI");
  s = e.makeComponentPrototype(["numberOfLines", 0], "KviRUUek-QoUuprz");
  p = e.makeComponentPrototype(["numberOfLines", 0], "Rot1pUf6VczfF7ZC");
  y = e.makeNodePrototype("layout", undefined, "45z7EFbAsVZnJu3y");
  c = e.makeComponentPrototype(undefined, "MT7Wg8-KqQ9Pynta");
  g = e.makeNodePrototype("layout", undefined, "nPKcQPP2HmHcu5EU");
  u = e.makeComponentPrototype(["numberOfLines", 0], "LSoA-jWc8FopuVak");
  m = e.makeComponentPrototype(["numberOfLines", 0], "0jfYPqrx6yv0vHhc");
  v = e.makeComponentPrototype(["numberOfLines", 0], "n4bJ2Z1JHBEJ9cZo");
  S = e.makeNodePrototype("layout", undefined, "1my7ZliT5uXjF1GR");
  b = e.makeComponentPrototype(undefined, "qIdc7HCo4PWoUSyP");
  w = e.makeComponentPrototype(["accessibilityId", "wallet.introduction.cancel"], "kWMfbk3xHh-e3gGK");
  C = e.makeComponentPrototype(undefined, "V1xHXBQ8Q5TnclLu");
  P = e.makeNodePrototype("view", ["accessibilityId", "wallet.coming-soon"], "E-Yofxl2kjMK3Hi2");
  h = e.makeNodePrototype("scroll", undefined, "Tg4nkNQNVtWMYCE0");
  M = e.makeNodePrototype("layout", undefined, "ehnFRw5KBolxyO2V");
  A = e.makeComponentPrototype(undefined, "xza7ZndTGeCFCGVX");
  I = e.makeNodePrototype("layout", undefined, "NmZixsQWCxqxQEfm");
  k = e.makeNodePrototype("layout", undefined, "_zZaLjekfwoWop0G");
  O = e.makeNodePrototype("view", undefined, "fPH3LEd3eO_QeZyZ");
  T = e.makeNodePrototype("image", undefined, "sBf2noDDkm9abSbX");
  f = e.makeComponentPrototype(["numberOfLines", 0, "align", "center"], "zf9BONtNuOv_fk-p");
  V = e.makeComponentPrototype(undefined, "soFcSsX1MACLihuq");
  R = e.makeNodePrototype("layout", undefined, "swzc5l-u7bcGSamt");
  x = e.makeNodePrototype("view", undefined, "ll27qs1QC-giwubs");
  N = e.makeNodePrototype("image", undefined, "J62OhK6qxpTbtAUR");
  H = e.makeComponentPrototype(["numberOfLines", 0, "align", "center"], "pKuVQ5EfSGwznFN-");
  B = e.makeComponentPrototype(["numberOfLines", 0, "align", "center"], "8bPolUhPKIUM3fYX");
  _ = require("valdi_core/src/LocalizableStrings");
  W = require("valdi_core/src/localization/LocaleResolver");
  q = require("oai_core/src/OAITheme");
  L = require("oai_core/src/OAITokens");
  F = require("oai_core/src/OAITypography");
  E = require("oai_ui/src/components/Button");
  Q = require("oai_ui/src/components/Icon");
  D = require("oai_ui/src/components/Text");
  U = require("valdi_core/src/Component");
  G = require("valdi_core/src/Style");
  j = require("valdi_core/src/SystemFont");
  K = require("valdi_ui/src/ControlMaterial");
  Z = require("valdi_ui/src/Platform");
  z = require("../res");
  X = require("./Strings");
  Y = require("./WalletIntroSubtitle");
  _.overrideLocales(X.default, W.getCurrentLocales, "en");
  let WalletSetupContent;
  let <class_fields_init>;
  class WalletSetupContent extends U.Component { ... }
  <proto:WalletSetupContent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletSetupContent>;
  WalletSetupContent = function <atom:0>;
  // close_loc <class_fields_init>
  WalletSetupContent#1 = function <atom:0>;
  exports.WalletSetupContent = WalletSetupContent#1;
  let WalletComingSoonContent;
  let <class_fields_init>#1;
  class WalletComingSoonContent extends U.Component { ... }
  <proto:WalletComingSoonContent>.onRender = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:WalletComingSoonContent>;
  WalletComingSoonContent = function <atom:0>;
  // close_loc <class_fields_init>#1
  WalletComingSoonContent#1 = function <atom:0>;
  exports.WalletComingSoonContent = WalletComingSoonContent#1;
  let WalletSetupHero;
  let <class_fields_init>#2;
  class WalletSetupHero extends U.Component { ... }
  <proto:WalletSetupHero>.onRender = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:WalletSetupHero>;
  WalletSetupHero = function <atom:0>;
  // close_loc <class_fields_init>#2
  WalletSetupHero#1 = function <atom:0>;
  null;
  F.Typography.Title2;
  if (!(Z.isNativeIOS())) goto L_b03;
  goto L_b06;
  // [栈深重同步 2 -> 1]
  J = {font: j.systemSemiboldFont(22), letterSpacing: -0.26, lineHeightScalesWithFont: true, native: {font: j.semanticFont(j.SYSTEM_SEMIBOLD_FONT_NAME, j.SemanticFontTextStyle.Title2), lineHeightMultiple: (28 / 22)}};
  null;
  F.Typography.BodyMedium;
  if (!(Z.isNativeIOS())) goto L_c33;
  goto L_c36;
  // [栈深重同步 2 -> 1]
  $ = {lineHeight: 24, letterSpacing: -0.44, lineHeightScalesWithFont: true, native: {font: j.semanticFont(j.SYSTEM_MEDIUM_FONT_NAME, j.SemanticFontTextStyle.Body), lineHeightMultiple: (24 / 17)}};
  null;
  F.DesignTypography.Subheadline;
  if (!(Z.isNativeIOS())) goto L_d5c;
  goto L_d5f;
  // [栈深重同步 2 -> 1]
  ee = {letterSpacing: -0.24};
  te = new G.Style({width: "100%", alignItems: "center", gap: L.OAISpacing.One});
  null;
  F.resolveOAITypography(F.Typography.Headline, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});
  if (!(Z.isNativeIOS())) goto L_1925;
  goto L_1928;
  // [栈深重同步 5 -> 4]
  oe = {comingSoonContent: new G.Style({width: "100%", padding: L.OAISpacing.Four, paddingTop: L.OAISpacing.Five, paddingBottom: L.OAISpacing.Six}), artworkBackdrop: new G.Style({width: 128, height: 128, borderRadius: L.OAIRadius.Pill, backgroundColor: L.OAIColor.BgSecondary, alignItems: "center", justifyContent: "center", marginBottom: L.OAISpacing.Two, accessibilityNavigation: "ignored"}), comingSoonIcon: new G.Style({width: 96, height: 96, accessibilityNavigation: "ignored"}), root: new G.Style({width: "100%", maxHeight: "100%"}), scroll: new G.Style({width: "100%", flexShrink: 1}), content: new G.Style({width: "100%", padding: L.OAISpacing.Three, paddingBottom: 0, gap: 19}), introArtworkBackdrop: new G.Style({width: 48, height: 48, borderWidth: 1, borderColor: L.OAIColor.BorderDefault, borderRadius: L.OAIRadius.Lg, backgroundColor: L.OAIColor.BgPrimary, alignItems: "center", justifyContent: "center", accessibilityNavigation: "ignored"}), introIcon: new G.Style({width: 32, height: 32, objectFit: "contain", accessibilityNavigation: "ignored"}), hero: te, introHero: te.extend({gap: L.OAISpacing.Half}), introHeading: new G.Style({width: "100%", alignItems: "center", gap: L.OAISpacing.OnePointTwentyFive}), assurances: new G.Style({width: "100%", gap: L.OAISpacing.Two}), assurance: new G.Style({width: "100%", flexDirection: "row", alignItems: "flex-start", gap: L.OAISpacing.OneAndHalf}), assuranceIcon: new G.Style({width: 20, height: 20, marginTop: L.OAISpacing.Quarter, tint: L.OAIColor.IconPrimary, accessibilityNavigation: "ignored"}), assuranceText: new G.Style({flexGrow: 1, flexShrink: 1, gap: L.OAISpacing.Quarter}), footer: new G.Style({width: "100%", padding: L.OAISpacing.Three, gap: L.OAISpacing.One}), button: new G.Style({width: "100%", height: "auto", minHeight: 54, paddingTop: L.OAISpacing.OneAndHalf, paddingBottom: L.OAISpacing.OneAndHalf}), buttonLabel: new G.Style({numberOfLines: 0, letterSpacing: -0.32})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletSetupContent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
