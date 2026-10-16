// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=302B file=chatgpt_finance/src/FinanceRepairCard
// args: e, i
// closure: this
function {
  if ((("open_entity_detail" !== i.action.type))) goto L_12d;
  if ((this.viewModel.disabled)) goto L_12d;
  if ((this.viewModel.loading)) goto L_12d;
  this.viewModel.onRepair();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=chatgpt_finance/src/FinanceRepairCard
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
  this.handleAction = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=923B file=chatgpt_finance/src/FinanceRepairCard
// locals: this
// closure: e, n, i, o, d
function {
  this = this;
  e.beginComponent(n.FinanceDilWidget, i, undefined, undefined);
  if ((e.hasContext())) goto L_cd;
  e.setContext({onAction: this.handleAction});
  if (!(this.viewModel.isDarkMode)) goto L_143;
  goto L_148;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("colorScheme", "light");
  e.setViewModelProperty("sensitiveValuesHidden", false);
  e.setViewModelProperty("widget", {id: "finance-repair-bank-connection", span: o.FinanceWidgetSpan.Full, dil: d, initialState: {title: this.viewModel.title, description: this.viewModel.description, actionLabel: this.viewModel.actionLabel, loading: this.viewModel.loading, disabled: this.viewModel.disabled}});
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=2 bc=601B file=chatgpt_finance/src/FinanceRepairCard
// args: require, module, exports
// locals: e, i, t, n, o, a, d, FinanceRepairCard, <class_fields_init>, FinanceRepairCard#1
function {
  let FinanceRepairCard#1;
  let d;
  let a;
  let o;
  let n;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceRepairCard = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeComponentPrototype(undefined, "rMRYyTyGrkKpUr8i");
  t = require("valdi_core/src/Component");
  n = require("./FinanceDilWidget");
  o = require("./FinanceModels");
  a = {handler: "client", type: "open_entity_detail", payload: {category: "ledger_add_account_prompt"}};
  d = {type: "Card", size: "full", background: "surface-elevated", onClickAction: a, children: [{type: "Row", gap: 3, align: "center", width: "100%", wrap: "wrap", children: [{type: "Col", flex: 1, gap: 1, children: [{type: "Title", $value: "state.title", size: "sm"}, {type: "Text", $value: "state.description", size: "sm"}]}, {type: "Button", $label: "state.actionLabel", $loading: "state.loading", $disabled: "state.disabled", style: "primary", color: "primary", size: "lg", onClickAction: a}]}]};
  let FinanceRepairCard;
  let <class_fields_init>;
  class FinanceRepairCard extends t.Component { ... }
  <proto:FinanceRepairCard>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceRepairCard>;
  FinanceRepairCard = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceRepairCard#1 = function <atom:0>;
  exports.FinanceRepairCard = FinanceRepairCard#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceRepairCard
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
