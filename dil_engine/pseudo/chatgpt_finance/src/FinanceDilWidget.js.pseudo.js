// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=172B file=chatgpt_finance/src/FinanceDilWidget
// args: e
// closure: this
function {
  this.context.onAction(this.viewModel.widget.id, e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=26B file=chatgpt_finance/src/FinanceDilWidget
// locals: this
function {
  this = this;
  this.actionHandler = {handle: function <atom:0>};
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=974B file=chatgpt_finance/src/FinanceDilWidget
// locals: this
// closure: e, t, i, o, r
function {
  this = this;
  e.beginComponent(t.DILEntryPointComponent, i, undefined, undefined);
  if ((e.hasContext())) goto L_120;
  if (!((this.context == null))) goto L_f7;
  this.context;
  goto L_118;
  e.setContext({actionHandler: this.actionHandler, platformServices: undefined.platformServices});
  e.setViewModelProperty("colorScheme", this.viewModel.colorScheme);
  e.setViewModelProperty("chartRendererMode", o.DIL_CHART_RENDERER_MODE_VALDI);
  e.setViewModelProperty("dilJson", JSON.stringify(this.viewModel.widget.dil));
  e.setViewModelProperty("errorMode", "report-and-render-diagnostic");
  e.setViewModelProperty("initialState", r.financeWidgetInitialStateJson(this.viewModel.widget, this.viewModel.sensitiveValuesHidden));
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_finance/src/FinanceDilWidget
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=3 bc=300B file=chatgpt_finance/src/FinanceDilWidget
// args: require, module, exports
// locals: e, i, t, o, n, r, FinanceDilWidget, <class_fields_init>, FinanceDilWidget#1
function {
  let FinanceDilWidget#1;
  let r;
  let n;
  let o;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceDilWidget = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeComponentPrototype(undefined, "5wiDuZix6xnqQwZ-");
  t = require("dil_widgets/src/DILEntryPointComponent");
  o = require("dil_widgets/src/WidgetsRegistry");
  n = require("valdi_core/src/Component");
  r = require("./FinanceModels");
  let FinanceDilWidget;
  let <class_fields_init>;
  class FinanceDilWidget extends n.Component { ... }
  <proto:FinanceDilWidget>.onCreate = function <atom:0>;
  <proto:FinanceDilWidget>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceDilWidget>;
  FinanceDilWidget = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceDilWidget#1 = function <atom:0>;
  exports.FinanceDilWidget = FinanceDilWidget#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceDilWidget
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
