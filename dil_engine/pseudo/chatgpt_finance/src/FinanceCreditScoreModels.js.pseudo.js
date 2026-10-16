// fn r  args=1 vars=3 closure=8 cpool=0 bc=1169B file=chatgpt_finance/src/FinanceCreditScoreModels
// args: t
// locals: r, d
// closure: e, a, i, s, l, n, o, c
function {
  let d;
  let r;
  if (!((null === t))) goto L_c;
  return;
  r = "Finance credit score response";
  d = e.readObject(t, r);
  return {scoreValue: a(d.score_value, "".concat(r, ".score_value")), disclosure: e.readNonBlankString(d.disclosure, "".concat(r, ".disclosure")), disclosureDetails: i(d.disclosure_details, "".concat(r, ".disclosure_details")), scoreModel: s(d.score_model, "".concat(r, ".score_model")), scoreDate: l(d.score_date, "".concat(r, ".score_date")), reportDate: l(d.report_date, "".concat(r, ".report_date")), creditHealthFactors: n(d.credit_health_factors, "".concat(r, ".credit_health_factors")), utilizationPercent: o(d.utilization_percent, "".concat(r, ".utilization_percent")), totalBalance: o(d.total_balance, "".concat(r, ".total_balance")), availableCredit: o(d.available_credit, "".concat(r, ".available_credit")), creditAgeMonths: c(d.credit_age_months, "".concat(r, ".credit_age_months")), inquiryCount: c(d.inquiry_count, "".concat(r, ".inquiry_count"))};
}

// fn i  args=2 vars=3 closure=1 cpool=0 bc=414B file=chatgpt_finance/src/FinanceCreditScoreModels
// args: t, r
// locals: i
// closure: e
function {
  let i;
  if (!((null == t))) goto L_9;
  return;
  i = e.readObject(t, r);
  return {body: e.readNonBlankString(i.body, "".concat(r, ".body")), linkText: e.readNonBlankString(i.link_text, "".concat(r, ".link_text")), linkUrl: e.readNonBlankString(i.link_url, "".concat(r, ".link_url"))};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=chatgpt_finance/src/FinanceCreditScoreModels
// args: e
// closure: c
function {
  return (e === c.key);
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=1 bc=342B file=chatgpt_finance/src/FinanceCreditScoreModels
// args: r, n
// locals: a, c, s
// closure: i, e, t, o
function {
  let s;
  let c;
  let a;
  a = "".concat(i, "[", n, "]");
  c = e.readObject(r, a);
  s = Object.values(t).find(function <atom:0>);
  if (!((undefined === s))) goto L_f4;
  throw new TypeError("".concat(a, ".key must be a supported credit-health factor"));
  return {key: s, value: o(c.value, "".concat(a, ".value"))};
}

// fn n  args=2 vars=2 closure=3 cpool=1 bc=146B file=chatgpt_finance/src/FinanceCreditScoreModels
// args: r, i
// closure: e, t, o
function {
  if (!((undefined === r))) goto L_9;
  return [];
  if (!(!Array.isArray(r))) goto L_6b;
  throw new TypeError("".concat(i, " must be an array"));
  return r.map(function <atom:0>);   // tail call
}

// fn a  args=2 vars=2 closure=1 cpool=0 bc=161B file=chatgpt_finance/src/FinanceCreditScoreModels
// args: t, r
// closure: e
function {
  if ((!e.isFiniteNumber(t))) goto L_68;
  if ((!Number.isInteger(t))) goto L_68;
  if (((t < 300))) goto L_68;
  if (!((t > 850))) goto L_9f;
  throw new TypeError("".concat(r, " must be an integer between 300 and 850"));
  return t;
}

// fn o  args=2 vars=2 closure=1 cpool=0 bc=102B file=chatgpt_finance/src/FinanceCreditScoreModels
// args: t, r
// closure: e
function {
  if (!((null != t))) goto L_65;
  if (!(!e.isFiniteNumber(t))) goto L_63;
  throw new TypeError("".concat(r, " must be a finite number"));
  return t;
  return;
}

// fn c  args=2 vars=3 closure=1 cpool=0 bc=128B file=chatgpt_finance/src/FinanceCreditScoreModels
// args: e, t
// locals: r
// closure: o
function {
  let r;
  r = o(e, t);
  if (!((undefined !== r))) goto L_7c;
  if ((!Number.isInteger(r))) goto L_45;
  if (!((r < 0))) goto L_7c;
  throw new TypeError("".concat(t, " must be a non-negative integer"));
  return r;
}

// fn s  args=2 vars=2 closure=1 cpool=0 bc=47B file=chatgpt_finance/src/FinanceCreditScoreModels
// args: t, r
// closure: e
function {
  if (!((null == t))) goto L_7;
  return undefined;
  return e.readNonBlankString(t, r);
}

// fn l  args=2 vars=4 closure=1 cpool=2 bc=366B file=chatgpt_finance/src/FinanceCreditScoreModels
// args: e, t
// locals: r, i
// closure: s
function {
  let i;
  let r;
  r = s(e, t);
  if (!((undefined === r))) goto L_13;
  return;
  i = Date.parse(r);
  if ((!new RegExp("^\\d{4}-\\d{2}-\\d{2}$").test(r))) goto L_133;
  if ((r.startsWith("0000-"))) goto L_133;
  if ((!Number.isFinite(i))) goto L_133;
  if (!((new Date(i).toISOString().slice(0, 10) !== r))) goto L_16a;
  throw new TypeError("".concat(t, " must be an ISO calendar date"));
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=91B file=chatgpt_finance/src/FinanceCreditScoreModels
// args: e
function {
  e.PaymentHistory = "payment_history";
  e.CreditHistory = "credit_history";
  e.CreditUtilization = "credit_utilization";
  e.TotalBalances = "total_balances";
  e.AvailableCredit = "available_credit";
  e.CreditChecks = "credit_checks";
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=9 bc=154B file=chatgpt_finance/src/FinanceCreditScoreModels
// args: require, module, exports
// locals: e, t, r, i, n, a, o, c, s, l
function {
  r = function r;
  i = function i;
  n = function n;
  a = function a;
  o = function o;
  c = function c;
  s = function s;
  l = function l;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceCreditHealthFactorKey = undefined;
  exports.decodeFinanceCreditScoreSnapshot = undefined;
  e = require("./TypeUtils");
  if ((t)) goto L_8b;
  t = {};
  exports.FinanceCreditHealthFactorKey = {};
  !function <atom:0>({});
  exports.decodeFinanceCreditScoreSnapshot = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceCreditScoreModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
