// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=93B file=chatgpt_finance_connections/src/FinanceAccountLinkingFunnel
// args: e
// locals: this
// closure: <class_fields_init>, n
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.api = e;
  this.flowId = n.v4();
  this.recordedPickerSteps = new Set();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=146B file=chatgpt_finance_connections/src/FinanceAccountLinkingFunnel
// locals: this
// closure: e, i
function {
  this = this;
  this.send(e.FinanceFunnelStep.FlowStarted, i.financeFunnelStart());
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=341B file=chatgpt_finance_connections/src/FinanceAccountLinkingFunnel
// args: n
// locals: i, this
// closure: e
function {
  this = this;
  let i;
  if (!(n)) goto L_4f;
  goto L_94;
  // [栈深重同步 1 -> 0]
  i = e.FinanceFunnelStep.PickerReady;
  if ((this.recordedPickerSteps.has(i))) goto L_154;
  this.recordedPickerSteps.add(i);
  this.record(i);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=42B file=chatgpt_finance_connections/src/FinanceAccountLinkingFunnel
// args: e
// locals: this
function {
  this = this;
  this.send(e, undefined);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=192B file=chatgpt_finance_connections/src/FinanceAccountLinkingFunnel
// args: e, t
// locals: this
// closure: i, n
function {
  this = this;
  if (!((undefined === t))) goto L_b2;
  goto L_b9;
  // [栈深重同步 4 -> 3]
  null;
  {start: t};
  i.sendFinanceFunnelEvent(this.api, {flow_type: "account", flow_id: this.flowId, event_id: n.v4(), step: e});
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=5 bc=174B file=chatgpt_finance_connections/src/FinanceAccountLinkingFunnel
// args: require, module, exports
// locals: e, n, i, FinanceAccountLinkingFunnel, <class_fields_init>, FinanceAccountLinkingFunnel#1
function {
  let FinanceAccountLinkingFunnel#1;
  let i;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceAccountLinkingFunnel = undefined;
  e = require("chatgpt_finance/src/FinanceFunnelModels");
  n = require("foundation/src/uuid");
  i = require("./FinanceFunnel");
  let FinanceAccountLinkingFunnel;
  let <class_fields_init>;
  class FinanceAccountLinkingFunnel extends undefined { ... }
  <proto:FinanceAccountLinkingFunnel>.start = function <atom:0>;
  <proto:FinanceAccountLinkingFunnel>.recordPickerState = function <atom:0>;
  <proto:FinanceAccountLinkingFunnel>.record = function <atom:0>;
  <proto:FinanceAccountLinkingFunnel>.send = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceAccountLinkingFunnel>;
  FinanceAccountLinkingFunnel = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceAccountLinkingFunnel#1 = function <atom:0>;
  exports.FinanceAccountLinkingFunnel = FinanceAccountLinkingFunnel#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinanceAccountLinkingFunnel
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
