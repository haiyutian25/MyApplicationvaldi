// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// args: e
function {
  e.ConnectFinances = 0;
  e[0] = "ConnectFinances";
  e.ConnectAccounts = 1;
  e[1] = "ConnectAccounts";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=203B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// closure: e, o, E, this
function {
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", E.scroll);
  this.renderContent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// closure: this
function {
  this.renderContent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=387B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// closure: this, e, D, i
function {
  e.beginComponent(D.RefreshControl, i, undefined, undefined);
  e.setViewModelProperty("refreshing", this.viewModel.isRefreshing);
  e.setViewModelProperty("onRefresh", this.context.onRefresh);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=203B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// closure: e, r, E, this
function {
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", E.footer);
  this.renderPrimaryAction();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=3 bc=325B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// closure: e, o, E, this, D, i, r, n, _
function {
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", E.root);
  if (!((undefined === this.context.onRefresh))) goto L_c9;
  goto L_cc;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  if ((_.Device.isWeb())) goto L_11c;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=10 cpool=1 bc=572B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// locals: l, d, this
// closure: e, o, E, D, i, r, n, _, R, t
function {
  this = this;
  let d;
  let l;
  if (((undefined === undefined))) goto L_34;
  l = <to_object>(undefined).isDarkMode;
  <to_object>(undefined);
  goto L_59;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  if (!((undefined === l))) goto L_a8;
  goto L_139;
  // [栈深重同步 1 -> 0]
  if (!(l)) goto L_f4;
  goto L_139;
  // [栈深重同步 1 -> 0]
  d = R.OAIThemeMode.Light;
  e.beginComponent(R.OAITheme, t, undefined, undefined);
  e.setViewModelProperty("mode", d);
  e.setViewModelProperty("fill", true);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=16 cpool=0 bc=2958B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// locals: t, this
// closure: L, e, l, E, d, a, s, x, c, F, y, V, p, T, v, _
function {
  this = this;
  let t;
  t = (this.viewModel.variant === L.ConnectFinances);
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", E.content);
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", E.hero);
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", E.logo);
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", E.logoImage);
  e.setAttribute("src", x.default.financesIcon);
  e.endRender();
  e.endRender();
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", E.title);
  if (!(t)) goto L_417;
  goto L_45f;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("value", F.default.financeBlankSlateConnectAccountsTitle());
  e.endRender();
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", E.description);
  e.beginComponent(V.InlineText, p, undefined, undefined);
  e.setViewModelProperty("color", T.OAIColor.TextSecondary);
  e.setViewModelProperty("linkColor", T.OAIColor.TextSecondary);
  e.setViewModelProperty("size", T.OAITextSize.BodyLarge);
  e.setViewModelProperty("spans", [{kind: V.InlineTextSpanKind.Text, text: F.default.financeBlankSlateDescription()}]);
  e.endComponent();
  e.beginComponent(V.InlineText, v, undefined, undefined);
  e.setViewModelProperty("color", T.OAIColor.TextSecondary);
  e.setViewModelProperty("linkColor", T.OAIColor.TextSecondary);
  e.setViewModelProperty("size", T.OAITextSize.BodyLarge);
  e.setViewModelProperty("spans", [{kind: V.InlineTextSpanKind.Link, text: F.default.financeBlankSlateLearnMore(), onPress: this.context.onLearnMore}]);
  e.endComponent();
  e.endRender();
  if (!(_.Device.isWeb())) goto L_b17;
  this.renderPrimaryAction();
  e.endRender();
  this.renderSpendingPreview();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=0 bc=1247B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// locals: this
// closure: e, B, g, _, L, F, T
function {
  this = this;
  e.beginComponent(B.Button, g, undefined, undefined);
  e.setViewModelProperty("block", !_.Device.isWeb());
  e.setViewModelProperty("disabled", this.viewModel.isConnecting);
  if (!((this.viewModel.variant === L.ConnectFinances))) goto L_216;
  goto L_25e;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("label", F.default.financeBlankSlateConnectAccountsAction());
  e.setViewModelProperty("loading", this.viewModel.isConnecting);
  e.setViewModelProperty("onPress", this.context.onPrimaryAction);
  if (!(_.Device.isWeb())) goto L_3fc;
  goto L_441;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("size", T.OAIControlSize.Lg);
  e.setViewModelProperty("variant", B.ButtonVariant.Primary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=1 bc=460B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// args: t, n
// closure: e, I, E, T
function {
  e.beginRender(I, String(n));
  e.setAttributeStyle("style", E.bar);
  if (!((n < 3))) goto L_f8;
  goto L_13d;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", T.OAIColor.ThemeBlueDefault);
  e.setAttributeNumber("flexGrow", t);
  e.setAttributeNumber("opacity", (1 - ((n % 3) * 0.22)));
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=13 cpool=10 bc=2038B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// locals: t, this
// closure: e, I, E, T, _, S, m, b, F, u, w, A, O
function {
  this = this;
  let t;
  if (!(_.Device.isWeb())) goto L_59;
  goto L_5a;
  // [栈深重同步 1 -> 0]
  t = {};
  e.beginRender(S, undefined);
  e.setAttributeStyle("style", E.preview);
  e.setAttributes(t);
  e.beginRender(m, undefined);
  e.setAttributeStyle("style", E.row);
  e.beginRender(b, undefined);
  e.setAttributeStyle("style", E.previewTitle);
  e.setAttributeString("value", F.default.financeBlankSlatePreviewTitle());
  e.endRender();
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", E.previewAmount);
  e.endRender();
  e.endRender();
  e.beginRender(w, undefined);
  e.setAttributeStyle("style", E.divider);
  e.endRender();
  e.beginRender(A, undefined);
  e.setAttributeStyle("style", E.bars);
  [0.46, 0.22, 0.12, 0.09, 0.06, 0.04].map(function <atom:0>);
  e.endRender();
  this.renderExpense(F.default.financeBlankSlatePreviewRent(), "$1,300", O.default.home, 1);
  this.renderExpense(F.default.financeBlankSlatePreviewGroceries(), "$1,200", O.default.shoppingCart, 0.62);
  this.renderExpense(F.default.financeBlankSlatePreviewSubscriptions(), "$800", O.default.banknote, 0.38);
  this.renderExpense(F.default.financeBlankSlatePreviewDining(), "$500", O.default.utensils, 0.22);
  e.endRender();
  return;
}

// fn <atom:0>  args=4 vars=4 closure=9 cpool=0 bc=1193B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// args: t, n, o, i
// closure: e, h, E, f, M, C, T, P, k
function {
  e.beginRender(h, undefined);
  e.setAttributeStyle("style", E.row);
  e.setAttributeNumber("opacity", i);
  e.beginRender(f, undefined);
  e.setAttributeStyle("style", E.expenseIcon);
  e.beginComponent(M.Icon, C, undefined, undefined);
  e.setViewModelProperty("src", o);
  e.setViewModelProperty("color", T.OAIColor.IconSecondary);
  e.setViewModelProperty("size", T.OAISpacing.Two);
  e.endComponent();
  e.endRender();
  e.beginRender(P, undefined);
  e.setAttributeStyle("style", E.expenseLabel);
  e.setAttributeString("value", t);
  e.endRender();
  e.beginRender(k, undefined);
  e.setAttributeStyle("style", E.amount);
  e.setAttributeString("value", n);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
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

// fn <atom:0>  args=3 vars=48 closure=0 cpool=7 bc=6335B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// args: require, module, exports
// locals: e, t, n, o, i, r, l, d, a, s, c, y, p, v, g, S, m, b, u, w, A, I, h, f, C, P, k, x, O, R, T, B, M, V, N, _, q, D, F, L, FinanceBlankSlateComponent, <class_fields_init>, FinanceBlankSlateComponent#1, z, E
function {
  let E;
  let z;
  let FinanceBlankSlateComponent#1;
  let F;
  let D;
  let q;
  let _;
  let N;
  let V;
  let M;
  let B;
  let T;
  let R;
  let O;
  let x;
  let k;
  let P;
  let C;
  let f;
  let h;
  let I;
  let A;
  let w;
  let u;
  let b;
  let m;
  let S;
  let g;
  let v;
  let p;
  let y;
  let c;
  let s;
  let a;
  let d;
  let l;
  let r;
  let i;
  let o;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceBlankSlateVariant = undefined;
  exports.FinanceBlankSlateComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "4rfxv_RblEeV1RuE");
  n = e.makeNodePrototype("view", undefined, "ENwUdC-bSY8afAFN");
  o = e.makeNodePrototype("scroll", undefined, "1KKFPw7YpRB5YGbe");
  i = e.makeComponentPrototype(["accessibilityId", "finance-blank-slate-scroll"], "f33NHlctTFsp_E3J");
  r = e.makeNodePrototype("view", undefined, "B4ieRHGcQhm5x-4X");
  l = e.makeNodePrototype("view", undefined, "etDw9kI5DFxN59W1");
  d = e.makeNodePrototype("view", undefined, "taJaiHMiIBlPVl7H");
  a = e.makeNodePrototype("view", undefined, "fdgEPfNyHfwcy1Vv");
  s = e.makeNodePrototype("image", undefined, "jdAln2LahKeC5kPB");
  c = e.makeNodePrototype("label", undefined, "vs89nas_Rhnny5I9");
  y = e.makeNodePrototype("view", undefined, "fZP4fQRJyprpo9qm");
  p = e.makeComponentPrototype(["accessibilityId", "finance-blank-slate-description", "align", "center", "linkTextDecoration", "underline"], "KdJ0k2l9VimY4qdJ");
  v = e.makeComponentPrototype(["accessibilityId", "finance-blank-slate-learn-more", "align", "center", "linkTextDecoration", "underline"], "MlEHpWCCJC_xSpqL");
  g = e.makeComponentPrototype(["accessibilityId", "finance-blank-slate-cta"], "-nwkq8mznyQ_q2Id");
  S = e.makeNodePrototype("view", undefined, "Jmw5BaaqEY5oYsN3");
  m = e.makeNodePrototype("view", undefined, "6O2DpeH5K-KXjI9v");
  b = e.makeNodePrototype("label", undefined, "VXIV9u67JBfnTCGp");
  u = e.makeNodePrototype("label", ["value", "$3,000"], "YTk21pSXMs48GOgD");
  w = e.makeNodePrototype("view", undefined, "rhCM4jfTCgsPwqj1");
  A = e.makeNodePrototype("view", undefined, "wqKZ0ExfVyTHBAoy");
  I = e.makeNodePrototype("view", undefined, "GlQpYgIog_z9wQmy");
  h = e.makeNodePrototype("view", undefined, "ABitX-SvZl_UzAgw");
  f = e.makeNodePrototype("view", undefined, "6bCHEROnVK46Wl1I");
  C = e.makeComponentPrototype(undefined, "y8fp4qbwmfW0wcST");
  P = e.makeNodePrototype("label", undefined, "xeE_Kf9wc6U1N-Ys");
  k = e.makeNodePrototype("label", undefined, "IqZu-dbPSrhDK21I");
  x = require("chatgpt_finance_connections/res");
  O = require("dil_icon_assets/res");
  R = require("oai_core/src/OAITheme");
  T = require("oai_core/src/OAITokens");
  B = require("oai_ui/src/components/Button");
  M = require("oai_ui/src/components/Icon");
  V = require("oai_ui/src/components/InlineText");
  N = require("valdi_core/src/Component");
  _ = require("valdi_core/src/Device");
  q = require("valdi_core/src/Style");
  D = require("valdi_ui/src/components/RefreshControl");
  F = require("./Strings");
  if ((L)) goto L_702;
  L = {};
  exports.FinanceBlankSlateVariant = {};
  !function <atom:0>({});
  let FinanceBlankSlateComponent;
  let <class_fields_init>;
  class FinanceBlankSlateComponent extends N.Component { ... }
  <proto:FinanceBlankSlateComponent>.onRender = function <atom:0>;
  <proto:FinanceBlankSlateComponent>.renderContent = function <atom:0>;
  <proto:FinanceBlankSlateComponent>.renderPrimaryAction = function <atom:0>;
  <proto:FinanceBlankSlateComponent>.renderSpendingPreview = function <atom:0>;
  <proto:FinanceBlankSlateComponent>.renderExpense = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceBlankSlateComponent>;
  FinanceBlankSlateComponent = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceBlankSlateComponent#1 = function <atom:0>;
  exports.FinanceBlankSlateComponent = FinanceBlankSlateComponent#1;
  z = 26;
  E = {root: new q.Style({accessibilityId: "finance-blank-slate", backgroundColor: T.OAIColor.BgPrimary, width: "100%", height: "100%"}), scroll: new q.Style({flexGrow: 1, flexShrink: 1, height: "100%", width: "100%"}), content: new q.Style({alignItems: "center", padding: T.OAISpacing.Three, width: "100%"}), hero: new q.Style({alignItems: "center", gap: T.OAISpacing.Two, justifyContent: "center", marginBottom: T.OAISpacing.Seven, maxWidth: 1052, minHeight: 241, paddingTop: T.OAISpacing.Three, width: "100%"}), logo: new q.Style({accessibilityNavigation: "ignored", alignItems: "center", backgroundColor: T.OAIColor.BgPrimary, borderColor: T.OAIColor.BorderLight, borderRadius: T.OAIRadius.Pill, borderWidth: 1, height: T.OAISpacing.Seven, justifyContent: "center", width: T.OAISpacing.Seven}), logoImage: new q.Style({height: z, objectFit: "contain", width: z}), title: new q.Style({accessibilityCategory: "header", color: T.OAIColor.TextPrimary, font: T.resolveOAITextStyle(T.OAITextSize.HeadlineSmall).font, maxWidth: 490, numberOfLines: 0, textAlign: "center", width: "100%"}), description: new q.Style({maxWidth: 502, width: "100%"}), footer: new q.Style({alignItems: "center", flexShrink: 0, padding: T.OAISpacing.Three, width: "100%"}), preview: new q.Style({accessibilityId: "finance-blank-slate-preview", accessibilityNavigation: "ignored", backgroundColor: T.OAIColor.BgPrimary, borderColor: T.OAIColor.BorderLight, borderRadius: T.OAIRadius.Xxl, borderWidth: 1, maxWidth: 956, padding: T.OAISpacing.Three, width: "100%"}), row: new q.Style({alignItems: "center", flexDirection: "row", gap: T.OAISpacing.OneAndHalf, minHeight: T.OAISpacing.Six, width: "100%"}), previewTitle: new q.Style({color: T.OAIColor.TextPrimary, flexGrow: 1, font: T.resolveOAITextStyle(T.OAITextSize.TitleMedium).font, numberOfLines: 0}), previewAmount: new q.Style({color: T.OAIColor.TextPrimary, font: T.resolveOAITextStyle(T.OAITextSize.TitleMedium).font}), divider: new q.Style({backgroundColor: T.OAIColor.BorderLight, height: 1, marginBottom: T.OAISpacing.Two, width: "100%"}), bars: new q.Style({flexDirection: "row", gap: T.OAISpacing.Quarter, height: T.OAISpacing.Five, marginBottom: T.OAISpacing.OneAndHalf, width: "100%"}), bar: new q.Style({borderRadius: T.OAIRadius.Xs, flexBasis: 0, height: "100%"}), expenseIcon: new q.Style({alignItems: "center", backgroundColor: T.OAIColor.BgTertiary, borderRadius: T.OAIRadius.Pill, height: T.OAISpacing.Four, justifyContent: "center", width: T.OAISpacing.Four}), expenseLabel: new q.Style({color: T.OAIColor.TextPrimary, flexGrow: 1, flexShrink: 1, font: T.resolveOAITextStyle(T.OAITextSize.BodyLarge).font, numberOfLines: 0}), amount: new q.Style({color: T.OAIColor.TextPrimary, font: T.resolveOAITextStyle(T.OAITextSize.BodyLarge).font})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinanceBlankSlateComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
