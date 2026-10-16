// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsCategoryCash();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsPromptCash();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsCategoryInvestments();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsPromptInvestments();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsCategoryRealEstate();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsPromptRealEstate();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsCategoryVehicle();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsPromptVehicle();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsCategoryOtherAssets();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsPromptOtherAssets();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsCategoryLoans();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsPromptLoans();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsCategoryOtherDebt();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsPromptOtherDebt();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsCategoryTaxRecords();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsCategoryInsurance();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: m
function {
  return m.default.financeManualAccountsPromptInsurance();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_finance_connections/src/FinanceManualAccounts
// args: e
// closure: this
function {
  return this.renderCategory(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=42B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: this, A
function {
  A.map(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=1 bc=759B file=chatgpt_finance_connections/src/FinanceManualAccounts
// locals: this
// closure: A, e, t, g, n, p, f, a
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", g.container);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", p.financesListStyles.scroll);
  e.beginComponent(f.SafeArea, a, undefined, undefined);
  e.setViewModelProperty("style", p.financesListStyles.list);
  e.setViewModelProperty("edges", [f.SafeAreaEdge.Bottom]);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=108B file=chatgpt_finance_connections/src/FinanceManualAccounts
// closure: this, t, n
function {
  return this.viewModel.onManualAccountSelected(t.accessibilityId, n());   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=10 cpool=2 bc=1858B file=chatgpt_finance_connections/src/FinanceManualAccounts
// args: t
// locals: n, a, u, this
// closure: e, i, p, o, g, s, c, l, r, d
function {
  this = this;
  let u;
  let a;
  let n;
  n = t.prompt;
  a = (undefined !== n);
  u = t.label();
  e.beginRender(i, t.accessibilityId);
  e.setAttributeStyle("style", p.financesListStyles.row);
  e.setAttributeString("accessibilityId", "finance-manual-account-category-".concat(t.accessibilityId));
  e.setAttributeString("accessibilityLabel", u);
  e.setAttribute("accessibilityStateDisabled", !a);
  if (!((undefined === n))) goto L_225;
  goto L_227;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", function <atom:0>);
  if (!(a)) goto L_25c;
  goto L_25e;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0.5);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", g.iconContainer);
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", p.financesListStyles.icon);
  e.setAttribute("src", t.icon);
  e.endRender();
  e.endRender();
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", p.financesListStyles.title);
  e.setAttributeString("value", u);
  e.endRender();
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", p.financesListStyles.accessory);
  if (!(a)) goto L_6f1;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", p.financesListStyles.chevron);
  e.setAttribute("src", d.default.chevronRightMd);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_finance_connections/src/FinanceManualAccounts
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

// fn <atom:0>  args=3 vars=25 closure=0 cpool=20 bc=2086B file=chatgpt_finance_connections/src/FinanceManualAccounts
// args: require, module, exports
// locals: e, t, n, a, i, o, s, c, l, r, d, u, y, b, f, p, m, A, FinanceManualAccounts, <class_fields_init>, FinanceManualAccounts#1, g
function {
  let g;
  let FinanceManualAccounts#1;
  let A;
  let m;
  let p;
  let f;
  let b;
  let y;
  let u;
  let d;
  let r;
  let l;
  let c;
  let s;
  let o;
  let i;
  let a;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceManualAccounts = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["accessibilityId", "finance-manual-accounts"], "BNPHuV0RipHCVfVt");
  n = e.makeNodePrototype("scroll", ["accessibilityId", "finance-manual-account-categories"], "lvT42hO7WPIiGYm9");
  a = e.makeComponentPrototype(undefined, "1nY2W1pOlsTaqaG5");
  i = e.makeNodePrototype("view", ["accessibilityCategory", "button"], "PViEFexl5hu3-6ZI");
  o = e.makeNodePrototype("view", undefined, "jjJOwwgsLtRMQVu9");
  s = e.makeNodePrototype("image", undefined, "3fK2aFgIGFxu0Xer");
  c = e.makeNodePrototype("label", undefined, "ie3d7FaKhwNi6p6-");
  l = e.makeNodePrototype("layout", undefined, "hJr_qH0TPcApbr_W");
  r = e.makeNodePrototype("image", undefined, "gMA6x80FkHiMWMs7");
  d = require("dil_icon_assets/res");
  u = require("oai_core/src/OAITokens");
  y = require("valdi_core/src/Component");
  b = require("valdi_core/src/Style");
  f = require("valdi_ui/src/components/SafeArea");
  p = require("./FinancesListStyles");
  m = require("./Strings");
  A = [{accessibilityId: "cash", icon: d.default.banknote, label: function <atom:0>, prompt: function <atom:0>}, {accessibilityId: "investments", icon: d.default.chartColumn, label: function <atom:0>, prompt: function <atom:0>}, {accessibilityId: "real-estate", icon: d.default.house, label: function <atom:0>, prompt: function <atom:0>}, {accessibilityId: "vehicle", icon: d.default.car, label: function <atom:0>, prompt: function <atom:0>}, {accessibilityId: "other-assets", icon: d.default.plus, label: function <atom:0>, prompt: function <atom:0>}, {accessibilityId: "loans", icon: d.default.notebookText, label: function <atom:0>, prompt: function <atom:0>}, {accessibilityId: "other-debt", icon: d.default.minus, label: function <atom:0>, prompt: function <atom:0>}, {accessibilityId: "tax-records", icon: d.default.calculator, label: function <atom:0>, prompt: undefined}, {accessibilityId: "insurance", icon: d.default.shield, label: function <atom:0>, prompt: function <atom:0>}];
  let FinanceManualAccounts;
  let <class_fields_init>;
  class FinanceManualAccounts extends y.Component { ... }
  <proto:FinanceManualAccounts>.onRender = function <atom:0>;
  <proto:FinanceManualAccounts>.renderCategory = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceManualAccounts>;
  FinanceManualAccounts = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceManualAccounts#1 = function <atom:0>;
  exports.FinanceManualAccounts = FinanceManualAccounts#1;
  g = {iconContainer: p.financesListStyles.iconContainer.extend({accessibilityNavigation: "ignored", backgroundColor: u.OAIColor.BgTertiary, borderWidth: 0}), container: new b.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, minHeight: 0, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinanceManualAccounts
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
