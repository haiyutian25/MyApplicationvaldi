// fn d  args=1 vars=3 closure=2 cpool=0 bc=214B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// args: t
// locals: a, i
// closure: n, e
function {
  let a;
  if (!((t == null))) goto L_c;
  t;
  goto L_2d;
  a = undefined.experimentService;
  if (!((undefined === a))) goto L_38;
  return false;
  try { // catch -> L_6c
  return (true === a.isFeatureFlagEnabled(n));
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_d5
  if (!(e.isLoggingEnabled)) goto L_d0;
  console.warn(("Unable to evaluate the Finance credit-data gate: " + String(i)));
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn u  args=3 vars=3 closure=2 cpool=0 bc=48B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// args: e, t, a
// closure: o, i
function {
  if (!(t)) goto L_7;
  return o;
  return i.formatNumber(e, 0, a);
}

// fn l  args=2 vars=2 closure=1 cpool=0 bc=67B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// args: e, t
// closure: a
function {
  return a.formatDate(new Date((e + "T12:00:00")), "MEDIUM", {localeIdentifier: t});   // tail call
}

// fn s  args=2 vars=7 closure=2 cpool=0 bc=873B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// args: e, t
// locals: a, i, n, o, d
// closure: r, c
function {
  let d;
  let o;
  let n;
  let i;
  let a;
  if (!((e.reportDate == null))) goto L_58;
  e.reportDate;
  a = e.scoreDate;
  if (!((undefined === a))) goto L_88;
  goto L_b4;
  // [栈深重同步 1 -> 0]
  i = Date.parse(a);
  if (!(Number.isNaN(i))) goto L_12b;
  return r.default.financeAccountsCreditReportDateUnavailable();   // tail call
  n = new Date(t);
  o = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate());
  d = Math.max(0, Math.floor(((o - i) / c)));
  if (!((0 === d))) goto L_285;
  return r.default.financeAccountsCreditReportedToday();
  if (!((1 === d))) goto L_2d5;
  return r.default.financeAccountsCreditReportedYesterday();
  return r.default.financeAccountsCreditReportedRelativeDate(r.default.financeAccountsUpdatedMultipleDaysAgo(d));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=72B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// args: e
function {
  return [e.key, e.value];
}

// fn <atom:0>  args=5 vars=5 closure=3 cpool=0 bc=84B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// args: e, t, i, r, n
// closure: d, a, o
function {
  if (!((undefined !== t))) goto L_53;
  if (!(a)) goto L_46;
  goto L_4b;
  // [栈深重同步 4 -> 3]
  d.push({key: e, label: i, detailLabel: r, valueLabel: n(t)});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=159B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// args: e
// closure: r, i, n
function {
  return r.default.financeAccountsCreditPercentage(i.formatNumber((Math.round((100 * e)) / 100), -1, n));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=64B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// args: e
// closure: i, n
function {
  return i.formatNumberWithCurrency(e, "USD", {minimumFractionDigits: 0, maximumFractionDigits: 2, localeIdentifier: n});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=6B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// args: e
// closure: C, n
function {
  return C(e, n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=191B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// args: e
// closure: r, i, n
function {
  if (!((1 === e))) goto L_4e;
  return r.default.financeAccountsCreditOneInquiry();
  return r.default.financeAccountsCreditMultipleInquiries(i.formatNumber(e, 0, n));
}

// fn f  args=3 vars=8 closure=5 cpool=6 bc=2309B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// args: e, a, n
// locals: c, d, u, l, s
// closure: o, r, i, C, t
function {
  let s;
  let l;
  let u;
  let d;
  let c;
  c = new Map(e.creditHealthFactors.map(function <atom:0>));
  d = [];
  u = function <atom:0>;
  l = function <atom:0>;
  s = function <atom:0>;
  u(t.FinanceCreditHealthFactorKey.PaymentHistory, c.get(t.FinanceCreditHealthFactorKey.PaymentHistory), r.default.financeAccountsCreditMetricPaymentHistory(), r.default.financeAccountsCreditMetricOnTime(), l);
  if (!((e.creditAgeMonths == null))) goto L_2a4;
  e.creditAgeMonths;
  u(t.FinanceCreditHealthFactorKey.CreditHistory, c.get(t.FinanceCreditHealthFactorKey.CreditHistory), r.default.financeAccountsCreditMetricCreditHistory(), r.default.financeAccountsCreditMetricOldestAccount(), function <atom:0>);
  if (!((c.get(t.FinanceCreditHealthFactorKey.CreditUtilization) == null))) goto L_415;
  c.get(t.FinanceCreditHealthFactorKey.CreditUtilization);
  u(t.FinanceCreditHealthFactorKey.CreditUtilization, e.utilizationPercent, r.default.financeAccountsCreditMetricCreditUsage(), r.default.financeAccountsCreditMetricUtilization(), l);
  if (!((c.get(t.FinanceCreditHealthFactorKey.TotalBalances) == null))) goto L_587;
  c.get(t.FinanceCreditHealthFactorKey.TotalBalances);
  u(t.FinanceCreditHealthFactorKey.TotalBalances, e.totalBalance, r.default.financeAccountsCreditMetricTotalBalances(), r.default.financeAccountsCreditMetricAllAccounts(), s);
  if (!((c.get(t.FinanceCreditHealthFactorKey.AvailableCredit) == null))) goto L_6f9;
  c.get(t.FinanceCreditHealthFactorKey.AvailableCredit);
  u(t.FinanceCreditHealthFactorKey.AvailableCredit, e.availableCredit, r.default.financeAccountsCreditMetricAvailableCredit(), r.default.financeAccountsCreditMetricAllAccounts(), s);
  if (!((c.get(t.FinanceCreditHealthFactorKey.CreditChecks) == null))) goto L_86b;
  c.get(t.FinanceCreditHealthFactorKey.CreditChecks);
  u(t.FinanceCreditHealthFactorKey.CreditChecks, e.inquiryCount, r.default.financeAccountsCreditMetricCreditChecks(), r.default.financeAccountsCreditMetricReportedInquiries(), function <atom:0>);
  return d;
}

// fn C  args=2 vars=4 closure=2 cpool=0 bc=620B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// args: e, t
// locals: a, n
// closure: r, i
function {
  let n;
  let a;
  a = Math.floor((e / 12));
  n = (e % 12);
  if (!((0 === a))) goto L_102;
  if (!((1 === e))) goto L_91;
  return r.default.financeAccountsCreditOneMonth();
  return r.default.financeAccountsCreditMultipleMonths(i.formatNumber(e, 0, t));
  if (!((0 === n))) goto L_1cf;
  if (!((1 === a))) goto L_15c;
  return r.default.financeAccountsCreditOneYear();
  return r.default.financeAccountsCreditMultipleYears(i.formatNumber(a, 0, t));
  return r.default.financeAccountsCreditYearsAndMonths(i.formatNumber(a, 0, t), i.formatNumber(n, 0, t));
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=6 bc=324B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// args: require, module, exports
// locals: e, t, a, i, r, n, c, o, d, u, l, s, f, C
function {
  d = function d;
  u = function u;
  l = function l;
  s = function s;
  f = function f;
  C = function C;
  let o;
  let c;
  let n;
  let r;
  let i;
  let a;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isFinanceCreditDataEnabled = undefined;
  exports.formatFinanceCreditScore = undefined;
  exports.formatFinanceCreditDate = undefined;
  exports.formatFinanceCreditReportedDate = undefined;
  exports.buildFinanceCreditAccountMetrics = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("chatgpt_finance/src/FinanceCreditScoreModels");
  a = require("valdi_core/src/utils/DateUtils");
  i = require("valdi_core/src/utils/NumberUtils");
  r = require("./Strings");
  n = {flagName: "3788389430"};
  c = 86400000;
  o = "••••";
  exports.isFinanceCreditDataEnabled = d;
  exports.formatFinanceCreditScore = u;
  exports.formatFinanceCreditDate = l;
  exports.formatFinanceCreditReportedDate = s;
  exports.buildFinanceCreditAccountMetrics = f;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_accounts/src/FinanceCreditAccountUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
