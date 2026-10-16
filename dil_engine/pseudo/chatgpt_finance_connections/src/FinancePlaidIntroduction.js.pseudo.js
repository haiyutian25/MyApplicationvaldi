// fn <atom:0>  args=0 vars=0 closure=15 cpool=0 bc=3043B file=chatgpt_finance_connections/src/FinancePlaidIntroduction
// closure: e, n, O, o, f, r, P, d, this, S, l, v, a, m, c
function {
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", O.logo);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", O.mark);
  e.setAttribute("src", f.default.plaid);
  e.endRender();
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", O.title);
  e.setAttributeString("value", P.default.financeAccountLinkingPlaidTitle());
  e.endRender();
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", O.benefits);
  this.renderBenefit(f.default.money, P.default.financeAccountLinkingPlaidPictureTitle(), P.default.financeAccountLinkingPlaidPictureDetail());
  e.beginComponent(S.Divider, l, undefined, undefined);
  e.setViewModelProperty("color", v.OAIColor.BorderLight);
  e.endComponent();
  this.renderBenefit(f.default.conversation, P.default.financeAccountLinkingPlaidAnswersTitle(), P.default.financeAccountLinkingPlaidAnswersDetail());
  e.beginComponent(S.Divider, a, undefined, undefined);
  e.setViewModelProperty("color", v.OAIColor.BorderLight);
  e.endComponent();
  this.renderBenefit(f.default.plaidSecurity, P.default.financeAccountLinkingPlaidSecurityTitle(), P.default.financeAccountLinkingPlaidSecurityDetail());
  e.endRender();
  e.beginComponent(m.Button, c, undefined, undefined);
  e.setViewModelProperty("style", O.continueButton);
  if (!(this.viewModel.isLaunching)) goto L_9a4;
  goto L_9ec;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityLabel", P.default.financeAccountLinkingPlaidContinue());
  e.setViewModelProperty("label", P.default.financeAccountLinkingPlaidContinue());
  e.setViewModelProperty("disabled", this.viewModel.isLaunching);
  e.setViewModelProperty("loading", this.viewModel.isLaunching);
  e.setViewModelProperty("onPress", this.viewModel.onContinue);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=17 cpool=1 bc=528B file=chatgpt_finance_connections/src/FinancePlaidIntroduction
// locals: this
// closure: e, n, O, o, f, r, P, d, S, l, v, a, m, c, i, w, t
function {
  this = this;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", O.scroll);
  e.beginComponent(w.SafeArea, t, undefined, undefined);
  e.setViewModelProperty("edges", [w.SafeAreaEdge.Bottom]);
  e.setViewModelProperty("style", O.content);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=3 closure=7 cpool=0 bc=963B file=chatgpt_finance_connections/src/FinancePlaidIntroduction
// args: i, t, n
// closure: e, s, O, g, p, u, y
function {
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", O.benefitRow);
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", O.benefitIcon);
  e.setAttribute("src", i);
  e.endRender();
  e.beginRender(p, undefined);
  e.setAttributeStyle("style", O.benefitCopy);
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", O.benefitTitle);
  e.setAttributeString("value", t);
  e.endRender();
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", O.benefitDetail);
  e.setAttributeString("value", n);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_finance_connections/src/FinancePlaidIntroduction
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

// fn <atom:0>  args=3 vars=32 closure=0 cpool=3 bc=3899B file=chatgpt_finance_connections/src/FinancePlaidIntroduction
// args: require, module, exports
// locals: e, i, t, n, o, r, d, l, a, c, s, g, p, u, y, f, b, v, m, S, h, A, w, P, FinancePlaidIntroduction, <class_fields_init>, FinancePlaidIntroduction#1, I, O
function {
  let O;
  let I;
  let FinancePlaidIntroduction#1;
  let P;
  let w;
  let A;
  let h;
  let S;
  let m;
  let v;
  let b;
  let f;
  let y;
  let u;
  let p;
  let g;
  let s;
  let c;
  let a;
  let l;
  let d;
  let r;
  let o;
  let n;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinancePlaidIntroduction = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeNodePrototype("scroll", ["accessibilityId", "finance-plaid-introduction-scroll"], "salo3oKP0UwJTRU0");
  t = e.makeComponentPrototype(["accessibilityId", "finance-plaid-introduction"], "ea3y8BNdyYTCGgcr");
  n = e.makeNodePrototype("layout", undefined, "vY9Pcnkqm65gurV5");
  o = e.makeNodePrototype("image", undefined, "8i1o8O0EmjLQ1ysj");
  r = e.makeNodePrototype("label", undefined, "lZGqhFQflaZKB-Q2");
  d = e.makeNodePrototype("view", undefined, "S9Rsu51F7ObedSca");
  l = e.makeComponentPrototype(undefined, "yFzbhb--hp9KPt3O");
  a = e.makeComponentPrototype(undefined, "9dQJR1_1Ww-91Wwx");
  c = e.makeComponentPrototype(["accessibilityId", "finance-continue-to-plaid"], "G-E5oEU798fh9S9O");
  s = e.makeNodePrototype("view", undefined, "9YTx0tKgxS6b5Ilr");
  g = e.makeNodePrototype("image", undefined, "Hs3X-frgsgzdjulm");
  p = e.makeNodePrototype("view", undefined, "FvzBxp8_5yi2w67N");
  u = e.makeNodePrototype("label", undefined, "etqMZCWothvqNyF2");
  y = e.makeNodePrototype("label", undefined, "VXi33FeW0RWXWGXn");
  f = require("chatgpt_finance_connections/res");
  b = require("oai_core/src/OAITypography");
  v = require("oai_core/src/OAITokens");
  m = require("oai_ui/src/components/Button");
  S = require("oai_ui/src/components/Divider");
  h = require("valdi_core/src/Component");
  A = require("valdi_core/src/Style");
  w = require("valdi_ui/src/components/SafeArea");
  P = require("./Strings");
  let FinancePlaidIntroduction;
  let <class_fields_init>;
  class FinancePlaidIntroduction extends h.Component { ... }
  <proto:FinancePlaidIntroduction>.onRender = function <atom:0>;
  <proto:FinancePlaidIntroduction>.renderBenefit = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinancePlaidIntroduction>;
  FinancePlaidIntroduction = function <atom:0>;
  // close_loc <class_fields_init>
  FinancePlaidIntroduction#1 = function <atom:0>;
  exports.FinancePlaidIntroduction = FinancePlaidIntroduction#1;
  I = {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined};
  null;
  b.resolveOAITypography(b.Typography.InlineTitle, I);
  null;
  b.resolveOAITypography(b.DesignTypography.CompactSubheadlineMedium, I);
  null;
  b.resolveOAITypography(b.DesignTypography.Footnote, I);
  O = {scroll: new A.Style({flexBasis: 0, flexGrow: 1, flexShrink: 1, minHeight: 0, width: "100%"}), content: new A.Style({alignItems: "center", flexDirection: "column", paddingTop: v.OAISpacing.Six, paddingBottom: v.OAISpacing.Four, paddingLeft: v.OAISpacing.FivePointFive, paddingRight: v.OAISpacing.FivePointFive, width: "100%"}), logo: new A.Style({alignItems: "center", justifyContent: "center", height: v.OAISpacing.Six, width: v.OAISpacing.Six}), mark: new A.Style({accessibilityNavigation: "ignored", flexShrink: 0, height: 56, width: 56, translationY: v.OAISpacing.Half, objectFit: "contain"}), title: new A.Style({color: v.OAIColor.TextPrimary, numberOfLines: 0, textAlign: "center", marginTop: v.OAISpacing.TwoPointFive, marginBottom: v.OAISpacing.Three, maxWidth: 320, width: "100%"}), benefits: new A.Style({borderColor: v.OAIColor.BorderDefault, borderWidth: 1, borderRadius: 20, flexDirection: "column", gap: v.OAISpacing.Two, padding: v.OAISpacing.Two, width: "100%", maxWidth: 360}), benefitRow: new A.Style({alignItems: "center", flexDirection: "row", gap: v.OAISpacing.Two, width: "100%"}), benefitIcon: new A.Style({accessibilityNavigation: "ignored", flexShrink: 0, height: v.OAISpacing.Three, width: v.OAISpacing.Three, objectFit: "contain"}), benefitCopy: new A.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: v.OAISpacing.Half, minWidth: 0}), benefitTitle: new A.Style({color: v.OAIColor.TextPrimary, numberOfLines: 0, width: "100%"}), benefitDetail: new A.Style({color: v.OAIColor.TextSecondary, numberOfLines: 0, width: "100%"}), continueButton: new A.Style({marginTop: v.OAISpacing.Four, minHeight: v.OAISpacing.Five, maxWidth: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinancePlaidIntroduction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
