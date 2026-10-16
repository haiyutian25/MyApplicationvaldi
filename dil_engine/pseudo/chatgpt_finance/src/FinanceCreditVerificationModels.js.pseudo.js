// fn o  args=1 vars=2 closure=0 cpool=0 bc=113B file=chatgpt_finance/src/FinanceCreditVerificationModels
// args: e
// locals: n
function {
  let n;
  if (!(("string" != typeof e))) goto L_e;
  return;
  n = e.trim();
  if (!((n.length > 0))) goto L_6f;
  if (!(("null" !== n.toLowerCase()))) goto L_6f;
  return n;
  return undefined;
}

// fn a  args=1 vars=2 closure=3 cpool=0 bc=564B file=chatgpt_finance/src/FinanceCreditVerificationModels
// args: n
// locals: t
// closure: e, i, d
function {
  let t;
  t = e.readObject(n, "Finance credit verification eligibility response");
  if (!(("boolean" != typeof t.retryable))) goto L_6b;
  throw new TypeError("Finance credit verification eligibility response.retryable must be a boolean");
  if (!((undefined !== t.pending_deletion))) goto L_cf;
  if (!(("boolean" != typeof t.pending_deletion))) goto L_cf;
  throw new TypeError("Finance credit verification eligibility response.pending_deletion must be a boolean");
  if (!((undefined !== t.requires_bureau_contact))) goto L_133;
  if (!(("boolean" != typeof t.requires_bureau_contact))) goto L_133;
  throw new TypeError("Finance credit verification eligibility response.requires_bureau_contact must be a boolean");
  if (!((t.pending_deletion == null))) goto L_1d7;
  t.pending_deletion;
  null;
  d(t.report_status);
  return {connectionStatus: e.toEnum(i, t.connection_status), retryable: t.retryable, pendingDeletion: false, requiresBureauContact: (true === t.requires_bureau_contact)};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=chatgpt_finance/src/FinanceCreditVerificationModels
// args: e
// closure: t
function {
  return (e === t.provider_environment);
}

// fn c  args=1 vars=4 closure=2 cpool=1 bc=253B file=chatgpt_finance/src/FinanceCreditVerificationModels
// args: i
// locals: t, r, o
// closure: e, n
function {
  let o;
  let r;
  let t;
  t = e.readObject(i, "Finance credit verification start response");
  r = e.readNonBlankString(t.verification_token, "Finance credit verification start response.verification_token");
  o = Object.values(n).find(function <atom:0>);
  if (!((undefined === o))) goto L_eb;
  throw new TypeError("Finance credit verification start response.provider_environment must be a supported environment");
  return {verificationToken: r, environment: o};
}

// fn s  args=1 vars=3 closure=3 cpool=0 bc=323B file=chatgpt_finance/src/FinanceCreditVerificationModels
// args: n
// locals: i, t
// closure: e, r, d
function {
  let t;
  let i;
  i = e.readObject(n, "Finance credit verification completion response");
  t = e.toEnum(r, i.status);
  if (!(("boolean" != typeof i.retryable))) goto L_b9;
  throw new TypeError("Finance credit verification completion response.retryable must be a boolean");
  null;
  d(i.report_status);
  return {status: t, retryable: i.retryable, requiresBureauContact: (true === i.requires_bureau_contact)};
}

// fn d  args=1 vars=1 closure=2 cpool=0 bc=53B file=chatgpt_finance/src/FinanceCreditVerificationModels
// args: n
// closure: e, t
function {
  if (!((null == n))) goto L_7;
  return {};
  return {reportStatus: e.toEnum(t, n)};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=chatgpt_finance/src/FinanceCreditVerificationModels
// args: e
function {
  e.Sandbox = "SANDBOX";
  e.Production = "PRODUCTION";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=chatgpt_finance/src/FinanceCreditVerificationModels
// args: e
function {
  e.NotConnected = "not_connected";
  e.Pending = "pending";
  e.Connected = "connected";
  e.Unknown = "unknown";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=chatgpt_finance/src/FinanceCreditVerificationModels
// args: e
function {
  e.Failed = "failed";
  e.Unknown = "unknown";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=91B file=chatgpt_finance/src/FinanceCreditVerificationModels
// args: e
function {
  e.Connected = "connected";
  e.Pending = "pending";
  e.Failed = "failed";
  e.Expired = "expired";
  e.RequiresAction = "requires_action";
  e.Unknown = "unknown";
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=9 bc=315B file=chatgpt_finance/src/FinanceCreditVerificationModels
// args: require, module, exports
// locals: e, n, i, t, r, o, a, c, s, d
function {
  o = function o;
  a = function a;
  c = function c;
  s = function s;
  d = function d;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceCreditVerificationEnvironment = undefined;
  exports.FinanceCreditVerificationConnectionStatus = undefined;
  exports.FinanceCreditReportStatus = undefined;
  exports.FinanceCreditVerificationStatus = undefined;
  exports.normalizeFinanceCreditVerificationId = undefined;
  exports.decodeFinanceCreditVerificationEligibility = undefined;
  exports.decodeFinanceCreditVerificationSession = undefined;
  exports.decodeFinanceCreditVerificationResult = undefined;
  e = require("./TypeUtils");
  if ((n)) goto L_c3;
  n = {};
  exports.FinanceCreditVerificationEnvironment = {};
  !function <atom:0>({});
  if ((i)) goto L_da;
  i = {};
  exports.FinanceCreditVerificationConnectionStatus = {};
  function <atom:0>({});
  if ((t)) goto L_f0;
  t = {};
  exports.FinanceCreditReportStatus = {};
  function <atom:0>({});
  if ((r)) goto L_108;
  r = {};
  exports.FinanceCreditVerificationStatus = {};
  function <atom:0>({});
  exports.normalizeFinanceCreditVerificationId = o;
  exports.decodeFinanceCreditVerificationEligibility = a;
  exports.decodeFinanceCreditVerificationSession = c;
  exports.decodeFinanceCreditVerificationResult = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceCreditVerificationModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
