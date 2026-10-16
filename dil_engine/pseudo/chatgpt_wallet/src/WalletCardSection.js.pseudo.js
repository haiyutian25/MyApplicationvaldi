// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=chatgpt_wallet/src/WalletCardSection
// args: e
function {
  e.Rename = "rename";
  e.Remove = "remove";
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=chatgpt_wallet/src/WalletCardSection
// args: e, o
// closure: this
function {
  return this.renderCard(e, o);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=106B file=chatgpt_wallet/src/WalletCardSection
// closure: this
function {
  this.viewModel.cards.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=1 bc=981B file=chatgpt_wallet/src/WalletCardSection
// locals: t, i, this
// closure: b, e, C, o, m
function {
  this = this;
  let i;
  let t;
  if (!(b.Device.isIOS())) goto L_9d;
  t = !b.Device.isWeb();
  if (!(b.Device.isAndroid())) goto L_133;
  i = !b.Device.isWeb();
  e.beginComponent(C.SettingsSection, o, undefined, undefined);
  if (!(i)) goto L_1fa;
  goto L_247;
  // [栈深重同步 4 -> 3]
  if (!(t)) goto L_246;
  goto L_247;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("backgroundColor", undefined);
  if ((t)) goto L_27e;
  if (!(i)) goto L_2c7;
  goto L_2c8;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("borderColor", undefined);
  if ((t)) goto L_2ff;
  if (!(i)) goto L_304;
  goto L_305;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("borderWidth", undefined);
  if (!(t)) goto L_37e;
  goto L_37f;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("radius", undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=290B file=chatgpt_wallet/src/WalletCardSection
// args: e
// closure: I, this, o
function {
  if (!((e === I.Rename))) goto L_91;
  goto L_121;
  // [栈深重同步 1 -> 0]
  if (!((e === I.Remove))) goto L_121;
  this.viewModel.onRemove(o.id);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=0 bc=719B file=chatgpt_wallet/src/WalletCardSection
// closure: M, e, y, l, o, S, u, a, c, m
function {
  if (!(M)) goto L_172;
  e.beginComponent(y.ActivityIndicator, l, undefined, undefined);
  e.setViewModelProperty("accessibilityId", "wallet.card.loading.".concat(o.id));
  e.setViewModelProperty("accessibilityLabel", S.default.walletLoading());
  goto L_2ce;
  // [栈深重同步 1 -> 0]
  e.beginComponent(u.Icon, a, undefined, undefined);
  e.setViewModelProperty("src", c.default.ellipsis);
  e.setViewModelProperty("color", m.OAIColor.IconTertiary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=24 cpool=2 bc=2754B file=chatgpt_wallet/src/WalletCardSection
// closure: I, this, o, M, e, y, l, S, u, a, c, m, h, i, r, R, v, n, P, d, b, V, p, s
function {
  e.beginComponent(h.WalletCardArtwork, i, undefined, undefined);
  e.setViewModelProperty("card", o);
  e.endComponent();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", R.cardText);
  e.beginComponent(v.Text, n, "name/".concat(o.name), undefined);
  e.setViewModelProperty("typography", P.typography.Row);
  e.setViewModelProperty("value", o.name);
  e.endComponent();
  e.beginComponent(v.Text, d, "number/".concat(b), undefined);
  e.setViewModelProperty("typography", P.typography.Description);
  e.setViewModelProperty("color", P.colors.description);
  e.setViewModelProperty("value", V.cardNumberText(b));
  e.setViewModelProperty("accessibilityLabel", S.default.walletEndingIn(b));
  e.endComponent();
  e.endRender();
  e.beginComponent(p.NativeMenu, s, "".concat(this.viewModel.accountId, "/", o.id), undefined);
  if ((e.hasContext())) goto L_678;
  e.setContext(this.context);
  e.setViewModelProperty("accessibilityId", "wallet.menu.".concat(o.id));
  e.setViewModelProperty("accessibilityLabel", S.default.walletCardOptions(o.name, b));
  e.setViewModelProperty("attributes", R.menu.attributes);
  if ((this.viewModel.disabled)) goto L_870;
  e.setViewModelProperty("disabled", M);
  if (!(M)) goto L_8ec;
  goto L_8ed;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityValue", undefined);
  e.setViewModelProperty("previewsContent", true);
  e.setViewModelProperty("actions", [{id: I.Rename, title: S.default.walletRename()}, {id: I.Remove, title: S.default.walletRemove(), destructive: true}]);
  e.setViewModelProperty("onSelect", function <atom:0>);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=7 closure=22 cpool=1 bc=1066B file=chatgpt_wallet/src/WalletCardSection
// args: o, C
// locals: P, b, M, x, this
// closure: I, e, y, l, S, u, a, c, m, h, i, r, R, v, n, d, V, p, s, g, w, t
function {
  this = this;
  let x;
  let M;
  let b;
  let P;
  P = g.resolveSettingsTheme();
  b = V.safeLastFour(o.lastFour);
  M = this.viewModel.pendingCardIds.includes(o.id);
  if (!((1 === this.viewModel.cards.length))) goto L_199;
  goto L_2bd;
  // [栈深重同步 1 -> 0]
  if (!((0 === C))) goto L_1e6;
  goto L_2bd;
  // [栈深重同步 1 -> 0]
  if (!((C === (this.viewModel.cards.length - 1)))) goto L_278;
  goto L_2bd;
  // [栈深重同步 1 -> 0]
  x = w.SettingsRowPosition.Middle;
  e.beginComponent(w.SettingsRow, t, o.id, undefined);
  e.setViewModelProperty("accessibilityId", "wallet.card.".concat(o.id));
  e.setViewModelProperty("position", x);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_wallet/src/WalletCardSection
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

// fn <atom:0>  args=3 vars=33 closure=0 cpool=4 bc=1104B file=chatgpt_wallet/src/WalletCardSection
// args: require, module, exports
// locals: e, o, t, i, r, n, d, s, l, a, c, p, m, y, u, v, w, C, g, P, b, M, S, h, V, I, WalletCardSection, <class_fields_init>, WalletCardSection#1, R
function {
  let R;
  let WalletCardSection#1;
  let V;
  let h;
  let S;
  let M;
  let b;
  let P;
  let g;
  let C;
  let w;
  let v;
  let u;
  let y;
  let m;
  let p;
  let c;
  let a;
  let l;
  let s;
  let d;
  let n;
  let r;
  let i;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletCardSection = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(["accessibilityId", "wallet.cards", "bottomMargin", 0], "ZHo9o1yly1EPUQc7");
  t = e.makeComponentPrototype(undefined, "_AmeQJDPEfVXG8M3");
  i = e.makeComponentPrototype(undefined, "EX4HQv2FgNTU-pSG");
  r = e.makeNodePrototype("layout", undefined, "tlnWejecuho3vTH9");
  n = e.makeComponentPrototype(["numberOfLines", 0], "DKT7p4JD-3hlno72");
  d = e.makeComponentPrototype(undefined, "RinWo-GuFSlUMxMe");
  s = e.makeComponentPrototype(undefined, "3dQIb4bwC4b9FTjj");
  l = e.makeComponentPrototype(undefined, "Acs50Qaek_Az-xSg");
  a = e.makeComponentPrototype(["size", 20], "nftiDbb3wsE-r5gc");
  c = require("dil_icon_assets/res");
  p = require("native_menu/src/NativeMenu");
  m = require("oai_core/src/OAITokens");
  y = require("oai_ui/src/components/ActivityIndicator");
  u = require("oai_ui/src/components/Icon");
  v = require("oai_ui/src/components/Text");
  w = require("oai_ui/src/components/settings/SettingsRow");
  C = require("oai_ui/src/components/settings/SettingsSection");
  g = require("oai_ui/src/components/settings/SettingsTheme");
  P = require("valdi_core/src/Component");
  b = require("valdi_core/src/Device");
  M = require("valdi_core/src/Style");
  S = require("./Strings");
  h = require("./WalletCardArtwork");
  V = require("./WalletCardNumber");
  if ((I)) goto L_31b;
  I = {};
  !function <atom:0>({});
  let WalletCardSection;
  let <class_fields_init>;
  class WalletCardSection extends P.Component { ... }
  <proto:WalletCardSection>.onRender = function <atom:0>;
  <proto:WalletCardSection>.renderCard = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletCardSection>;
  WalletCardSection = function <atom:0>;
  // close_loc <class_fields_init>
  WalletCardSection#1 = function <atom:0>;
  exports.WalletCardSection = WalletCardSection#1;
  R = {cardText: new M.Style({flexGrow: 1, flexShrink: 1, gap: m.OAISpacing.Quarter}), menu: new M.Style({width: 44, height: 44, alignItems: "center", justifyContent: "center"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletCardSection
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
