// fn <atom:0>  args=0 vars=0 closure=12 cpool=0 bc=1343B file=chatgpt_finance_connections/src/FinanceAccountLinkingProgress
// closure: e, a, o, A, y, c, this, s, n, l, i, r
function {
  e.beginComponent(a.IconButton, o, undefined, undefined);
  e.setViewModelProperty("style", A.dismissButton);
  e.setViewModelProperty("accessibilityLabel", y.default.financeAccountLinkingCloseAccessibilityLabel());
  e.setViewModelProperty("iconColor", c.OAIColor.IconSecondary);
  e.setViewModelProperty("onPress", this.viewModel.onDismiss);
  e.setViewModelProperty("src", s.default.crossedLg);
  e.endComponent();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", A.content);
  e.beginComponent(l.ActivityIndicator, i, undefined, undefined);
  e.setViewModelProperty("size", l.ActivityIndicatorSize.Medium);
  e.endComponent();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", A.label);
  e.setAttributeString("value", y.default.financeAccountLinkingConnectingAccounts());
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=13 cpool=1 bc=363B file=chatgpt_finance_connections/src/FinanceAccountLinkingProgress
// locals: this
// closure: e, a, o, A, y, c, s, n, l, i, r, u, t
function {
  this = this;
  e.beginComponent(u.SafeArea, t, undefined, undefined);
  e.setViewModelProperty("style", A.progress);
  e.setViewModelProperty("edges", [u.SafeAreaEdge.Bottom]);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_finance_connections/src/FinanceAccountLinkingProgress
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

// fn <atom:0>  args=3 vars=23 closure=0 cpool=2 bc=1498B file=chatgpt_finance_connections/src/FinanceAccountLinkingProgress
// args: require, module, exports
// locals: e, t, o, n, i, r, s, c, l, a, d, p, g, u, y, FinanceAccountLinkingProgress, <class_fields_init>, FinanceAccountLinkingProgress#1, m, A
function {
  let A;
  let m;
  let FinanceAccountLinkingProgress#1;
  let y;
  let u;
  let g;
  let p;
  let d;
  let a;
  let l;
  let c;
  let s;
  let r;
  let i;
  let n;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceAccountLinkingProgress = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(["accessibilityId", "finance-account-linking-connecting"], "AlKhKw7FJNswoMpn");
  o = e.makeComponentPrototype(["accessibilityId", "finance-account-linking-dismiss"], "ZLyi11sJ0EZgYJYJ");
  n = e.makeNodePrototype("view", undefined, "px4hF-UGE6S3_PkC");
  i = e.makeComponentPrototype(undefined, "6X7K8li1kSGabDiq");
  r = e.makeNodePrototype("label", undefined, "7S3OST_cKSzhKNaW");
  s = require("dil_icon_assets/res");
  c = require("oai_core/src/OAITokens");
  l = require("oai_ui/src/components/ActivityIndicator");
  a = require("oai_ui/src/components/IconButton");
  d = require("valdi_core/src/Component");
  p = require("valdi_core/src/Style");
  g = require("valdi_core/src/SystemFont");
  u = require("valdi_ui/src/components/SafeArea");
  y = require("./Strings");
  let FinanceAccountLinkingProgress;
  let <class_fields_init>;
  class FinanceAccountLinkingProgress extends d.Component { ... }
  <proto:FinanceAccountLinkingProgress>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceAccountLinkingProgress>;
  FinanceAccountLinkingProgress = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceAccountLinkingProgress#1 = function <atom:0>;
  exports.FinanceAccountLinkingProgress = FinanceAccountLinkingProgress#1;
  m = c.resolveOAITextStyle(c.OAITextSize.BodyLarge);
  A = {dismissButton: new p.Style({position: "absolute", right: c.OAISpacing.Three, top: 0, touchAreaExtension: c.OAISpacing.Half}), progress: new p.Style({alignItems: "center", flexGrow: 1, justifyContent: "center", paddingLeft: c.OAISpacing.Three, paddingRight: c.OAISpacing.Three, width: "100%"}), content: new p.Style({alignItems: "center", flexDirection: "column", gap: c.OAISpacing.Two}), label: new p.Style({color: c.OAIColor.TextPrimary, font: g.systemSemiboldFont(17), lineHeight: m.lineHeight, textAlign: "center"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinanceAccountLinkingProgress
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
