// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=45B file=chatgpt_finance_connections/src/FinanceAccountLinkingConfirmation
// args: e, t
// closure: this, g
function {
  return this.renderInstitution(e, (t < (g - 1)));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=20 cpool=1 bc=2685B file=chatgpt_finance_connections/src/FinanceAccountLinkingConfirmation
// closure: this, g, e, n, R, i, P, w, o, A, S, r, l, d, y, c, a, s, v, u
function {
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", R.header);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", R.successIcon);
  e.setAttributeString("accessibilityLabel", P.default.financeAccountLinkingConfirmationTitle());
  e.beginComponent(w.Icon, o, undefined, undefined);
  e.setViewModelProperty("src", A.default.checkMd);
  e.setViewModelProperty("color", S.OAIColor.IconInverted);
  e.endComponent();
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", R.heading);
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", R.title);
  e.setAttributeString("value", P.default.financeAccountLinkingConfirmationTitle());
  e.endRender();
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", R.detail);
  e.setAttributeString("value", y);
  e.endRender();
  e.endRender();
  e.endRender();
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", R.scroll);
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", R.list);
  this.viewModel.institutions.map(function <atom:0>);
  e.endRender();
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", R.footer);
  e.beginComponent(v.Button, u, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", P.default.financeAccountLinkingContinueAccessibilityLabel());
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("label", P.default.financeAccountLinkingContinue());
  e.setViewModelProperty("onPress", this.viewModel.onContinue);
  e.setViewModelProperty("size", S.OAIControlSize.Lg);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=19 cpool=1 bc=598B file=chatgpt_finance_connections/src/FinanceAccountLinkingConfirmation
// locals: g, y, this
// closure: e, n, R, i, P, w, o, A, S, r, l, d, c, a, s, v, u, k, t
function {
  this = this;
  let y;
  let g;
  g = this.viewModel.institutions.length;
  if (!((1 === g))) goto L_a1;
  goto L_ec;
  // [栈深重同步 1 -> 0]
  y = P.default.financeAccountLinkingConfirmationMultipleInstitutionsDetail(g);
  e.beginComponent(k.SafeArea, t, undefined, undefined);
  e.setViewModelProperty("style", R.confirmation);
  e.setViewModelProperty("edges", [k.SafeAreaEdge.Bottom]);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=10 cpool=0 bc=1872B file=chatgpt_finance_connections/src/FinanceAccountLinkingConfirmation
// args: t, n
// locals: i, o, r
// closure: P, e, g, R, y, O, m, p, f, b
function {
  let r;
  let o;
  let i;
  i = t.accountCount;
  if (!((1 === i))) goto L_80;
  goto L_cb;
  // [栈深重同步 1 -> 0]
  o = P.default.financeAccountLinkingConfirmationMultipleAccounts(i);
  if (!((1 === i))) goto L_142;
  goto L_1af;
  // [栈深重同步 1 -> 0]
  r = P.default.financeAccountLinkingConfirmationInstitutionMultipleAccountsAccessibilityLabel(t.name, i);
  e.beginRender(g, t.id);
  e.setAttributeStyle("style", R.item);
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", R.row);
  e.setAttributeString("accessibilityId", "finance-connected-institution-".concat(t.id));
  e.setAttributeString("accessibilityLabel", r);
  e.beginComponent(O.FinanceInstitutionLogo, m, undefined, undefined);
  e.setViewModelProperty("institutionId", t.id);
  e.setViewModelProperty("logo", t.logo);
  e.endComponent();
  e.beginRender(p, undefined);
  e.setAttributeStyle("style", R.institutionName);
  e.setAttributeString("value", t.name);
  e.endRender();
  e.beginRender(f, undefined);
  e.setAttributeStyle("style", R.accountCount);
  e.setAttributeString("value", o);
  e.endRender();
  e.endRender();
  if (!(n)) goto L_727;
  e.beginRender(b, undefined);
  e.setAttributeStyle("style", R.divider);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_finance_connections/src/FinanceAccountLinkingConfirmation
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

// fn <atom:0>  args=3 vars=35 closure=0 cpool=8 bc=3808B file=chatgpt_finance_connections/src/FinanceAccountLinkingConfirmation
// args: require, module, exports
// locals: e, t, n, i, o, r, l, d, c, a, s, u, g, y, m, p, f, b, A, S, v, w, h, I, C, k, O, P, FinanceAccountLinkingConfirmation, <class_fields_init>, FinanceAccountLinkingConfirmation#1, R
function {
  let R;
  let FinanceAccountLinkingConfirmation#1;
  let P;
  let O;
  let k;
  let C;
  let I;
  let h;
  let w;
  let v;
  let S;
  let A;
  let b;
  let f;
  let p;
  let m;
  let y;
  let g;
  let u;
  let s;
  let a;
  let c;
  let d;
  let l;
  let r;
  let o;
  let i;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceAccountLinkingConfirmation = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(["accessibilityId", "finance-account-linking-confirmation"], "ewK9_zv4MwEifGbL");
  n = e.makeNodePrototype("view", undefined, "6Ek_xlNJiRE30J6e");
  i = e.makeNodePrototype("view", undefined, "lIO7gDzG3IC8zm3T");
  o = e.makeComponentPrototype(["size", 36], "WjwuK1UvTVHTSPtO");
  r = e.makeNodePrototype("view", undefined, "Yrf0p07EN7DSCBDX");
  l = e.makeNodePrototype("label", undefined, "hhHsOvZ0FpogmXQR");
  d = e.makeNodePrototype("label", undefined, "fuUsZKbSRFlhBCG0");
  c = e.makeNodePrototype("scroll", undefined, "tYQDWU99OqjJRs-O");
  a = e.makeNodePrototype("view", ["accessibilityId", "finance-account-linking-confirmation-list"], "_MYrbHq02Uv8Vw2w");
  s = e.makeNodePrototype("view", undefined, "PLyKAzzXLnK7gaf-");
  u = e.makeComponentPrototype(["accessibilityId", "finance-account-linking-continue"], "vVdzD8Ak_90h1Psy");
  g = e.makeNodePrototype("view", undefined, "i9JUsIQuulRgr0c_");
  y = e.makeNodePrototype("view", undefined, "EvUx9gaoLO0cpFe3");
  m = e.makeComponentPrototype(undefined, "OJTjVidcTTpAdagR");
  p = e.makeNodePrototype("label", undefined, "6GDYdDd9w1Cpb8gz");
  f = e.makeNodePrototype("label", undefined, "HfemELPIPtwiuXn-");
  b = e.makeNodePrototype("view", undefined, "PpH42b2BqZj70zVZ");
  A = require("dil_icon_assets/res");
  S = require("oai_core/src/OAITokens");
  v = require("oai_ui/src/components/Button");
  w = require("oai_ui/src/components/Icon");
  h = require("valdi_core/src/Component");
  I = require("valdi_core/src/Style");
  C = require("valdi_core/src/SystemFont");
  k = require("valdi_ui/src/components/SafeArea");
  O = require("./FinanceInstitutionLogo");
  P = require("./Strings");
  let FinanceAccountLinkingConfirmation;
  let <class_fields_init>;
  class FinanceAccountLinkingConfirmation extends h.Component { ... }
  <proto:FinanceAccountLinkingConfirmation>.onRender = function <atom:0>;
  <proto:FinanceAccountLinkingConfirmation>.renderInstitution = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceAccountLinkingConfirmation>;
  FinanceAccountLinkingConfirmation = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceAccountLinkingConfirmation#1 = function <atom:0>;
  exports.FinanceAccountLinkingConfirmation = FinanceAccountLinkingConfirmation#1;
  R = {confirmation: new I.Style({alignItems: "center", flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: S.OAISpacing.Two, minHeight: 0, paddingLeft: S.OAISpacing.Three, paddingRight: S.OAISpacing.Three, paddingTop: S.OAISpacing.Seven, width: "100%"}), header: new I.Style({alignItems: "center", flexDirection: "column", gap: S.OAISpacing.Four, width: "100%"}), successIcon: new I.Style({alignItems: "center", backgroundColor: S.OAIColor.ThemeGreenDefault, borderRadius: S.OAIRadius.Pill, height: 48, justifyContent: "center", width: 48}), heading: new I.Style({alignItems: "center", flexDirection: "column", gap: S.OAISpacing.One, width: "100%"}), title: new I.Style({color: S.OAIColor.TextPrimary, font: C.systemSemiboldFont(22), letterSpacing: -0.26, lineHeight: 28, textAlign: "center", width: "100%"}), detail: new I.Style({color: S.OAIColor.TextSecondary, font: C.systemFont(17), letterSpacing: -0.44, lineHeight: 24, numberOfLines: 2, textAlign: "center", width: "100%"}), scroll: new I.Style({flexGrow: 1, flexShrink: 1, height: 1, minHeight: 0, width: "100%"}), list: new I.Style({flexDirection: "column", width: "100%"}), item: new I.Style({flexDirection: "column", width: "100%"}), row: new I.Style({alignItems: "center", flexDirection: "row", gap: S.OAISpacing.OneAndHalf, minHeight: 64, paddingLeft: S.OAISpacing.One, paddingRight: S.OAISpacing.One, width: "100%"}), institutionName: new I.Style({color: S.OAIColor.TextPrimary, flexGrow: 1, flexShrink: 1, font: C.systemSemiboldFont(17), letterSpacing: -0.44, lineHeight: 24, numberOfLines: 1}), accountCount: new I.Style({color: S.OAIColor.TextSecondary, flexShrink: 0, font: C.systemFont(17), letterSpacing: -0.44, lineHeight: 24, numberOfLines: 1, textAlign: "right"}), divider: new I.Style({backgroundColor: S.OAIColor.BorderDefault, height: 0.5, width: "100%"}), footer: new I.Style({flexDirection: "column", flexShrink: 0, paddingTop: S.OAISpacing.One, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinanceAccountLinkingConfirmation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
