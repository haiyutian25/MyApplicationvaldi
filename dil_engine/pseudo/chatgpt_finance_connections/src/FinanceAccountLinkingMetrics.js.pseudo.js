// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=256B file=chatgpt_finance_connections/src/FinanceAccountLinkingMetrics
// args: e
function {
  e.AppStarted = "app_started";
  e.InitialRender = "initial_render";
  e.PickerReady = "picker_ready";
  e.PickerLoadFailed = "picker_load_failed";
  e.InstitutionSelected = "institution_selected";
  e.PlaidLaunchRequested = "plaid_launch_requested";
  e.LinkCompleted = "link_completed";
  e.LinkFailed = "link_failed";
  e.PlaidExited = "plaid_exited";
  e.CreditRequested = "credit_requested";
  e.CreditDiscoveryUnavailable = "credit_discovery_unavailable";
  e.CreditNotConnected = "credit_not_connected";
  e.CreditPending = "credit_pending";
  e.CreditConnected = "credit_connected";
  e.CreditUnavailable = "credit_unavailable";
  e.CreditReadFailed = "credit_read_failed";
  e.CreditUpdateRequired = "credit_update_required";
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=209B file=chatgpt_finance_connections/src/FinanceAccountLinkingMetrics
// args: e
// locals: this
// closure: <class_fields_init>, i
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.initialTab = e;
  this.checkpoints = new Set();
  if (!(i.Device.isWeb())) goto L_7f;
  goto L_c7;
  // [栈深重同步 2 -> 1]
  this.platform = i.Device.getSystemType();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=328B file=chatgpt_finance_connections/src/FinanceAccountLinkingMetrics
// args: i
// locals: this
// closure: e, t
function {
  this = this;
  if ((this.checkpoints.has(i))) goto L_147;
  this.checkpoints.add(i);
  e.countMetric("finance.account_linking.checkpoint", 1, {app_name: "chatgpt_finance_connections", platform: this.platform, initial_tab: t.getFinanceAccountLinkingTabMetricName(this.initialTab), checkpoint: i});
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=3 bc=185B file=chatgpt_finance_connections/src/FinanceAccountLinkingMetrics
// args: require, module, exports
// locals: e, i, t, n, FinanceAccountLinkingMetrics, <class_fields_init>, FinanceAccountLinkingMetrics#1
function {
  let FinanceAccountLinkingMetrics#1;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceAccountLinkingCheckpoint = undefined;
  exports.FinanceAccountLinkingMetrics = undefined;
  e = require("oai_metrics_service/src/ValdiMetricsReporting");
  i = require("valdi_core/src/Device");
  t = require("./FinanceAccountLinkingMetricsUtils");
  if ((n)) goto L_86;
  n = {};
  exports.FinanceAccountLinkingCheckpoint = {};
  !function <atom:0>({});
  let FinanceAccountLinkingMetrics;
  let <class_fields_init>;
  class FinanceAccountLinkingMetrics extends undefined { ... }
  <proto:FinanceAccountLinkingMetrics>.record = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceAccountLinkingMetrics>;
  FinanceAccountLinkingMetrics = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceAccountLinkingMetrics#1 = function <atom:0>;
  exports.FinanceAccountLinkingMetrics = FinanceAccountLinkingMetrics#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_connections/src/FinanceAccountLinkingMetrics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
