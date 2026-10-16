// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=74B file=chatgpt_finance_connections/src/FinanceCreditVerificationFunnel
// args: e
// locals: this
// closure: <class_fields_init>, i
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.api = e;
  this.flowId = i.v4();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=231B file=chatgpt_finance_connections/src/FinanceCreditVerificationFunnel
// args: i
// locals: this
// closure: e, t, n
function {
  this = this;
  null;
  t.financeFunnelStart();
  this.send(e.FinanceCreditFunnelStep.FlowStarted, {credit_entrypoint: n.toEnum(e.FinanceLinkingEntrypoint, i)});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=42B file=chatgpt_finance_connections/src/FinanceCreditVerificationFunnel
// args: e
// locals: this
function {
  this = this;
  this.send(e, undefined);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=192B file=chatgpt_finance_connections/src/FinanceCreditVerificationFunnel
// args: e, n
// locals: this
// closure: t, i
function {
  this = this;
  if (!((undefined === n))) goto L_b2;
  goto L_b9;
  // [栈深重同步 4 -> 3]
  null;
  {start: n};
  t.sendFinanceFunnelEvent(this.api, {flow_type: "credit", flow_id: this.flowId, event_id: i.v4(), step: e});
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=4 bc=178B file=chatgpt_finance_connections/src/FinanceCreditVerificationFunnel
// args: require, module, exports
// locals: e, n, i, t, FinanceCreditVerificationFunnel, <class_fields_init>, FinanceCreditVerificationFunnel#1
function {
  let FinanceCreditVerificationFunnel#1;
  let t;
  let i;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceCreditVerificationFunnel = undefined;
  e = require("chatgpt_finance/src/FinanceFunnelModels");
  n = require("chatgpt_finance/src/TypeUtils");
  i = require("foundation/src/uuid");
  t = require("./FinanceFunnel");
  let FinanceCreditVerificationFunnel;
  let <class_fields_init>;
  class FinanceCreditVerificationFunnel extends undefined { ... }
  <proto:FinanceCreditVerificationFunnel>.start = function <atom:0>;
  <proto:FinanceCreditVerificationFunnel>.record = function <atom:0>;
  <proto:FinanceCreditVerificationFunnel>.send = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceCreditVerificationFunnel>;
  FinanceCreditVerificationFunnel = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceCreditVerificationFunnel#1 = function <atom:0>;
  exports.FinanceCreditVerificationFunnel = FinanceCreditVerificationFunnel#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinanceCreditVerificationFunnel
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
