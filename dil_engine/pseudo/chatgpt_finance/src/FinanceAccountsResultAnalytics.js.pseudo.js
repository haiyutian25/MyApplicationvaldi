// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=chatgpt_finance/src/FinanceAccountsResultAnalytics
// args: e
function {
  e.LinkingCompleted = "linking_completed";
  e.AccountsResultRendered = "accounts_result_rendered";
  e.AccountsResultInvalidated = "accounts_result_invalidated";
  return;
}

// fn u  args=1 vars=11 closure=6 cpool=2 bc=1928B file=chatgpt_finance/src/FinanceAccountsResultAnalytics
// args: e
// locals: u, i, o, t, d, l, m, _, f, A
// closure: n, c, a, s, r, t
function {
  let A;
  let f;
  let _;
  let m;
  let l;
  let d;
  let o;
  let i;
  let u;
  if ((!n.isRecord(e))) goto L_6e;
  if (!(("Finance" !== e.category))) goto L_71;
  return;
  u = undefined;
  if (!((e.key === "accounts_linking_completed"))) goto L_f3;
  if (!(("Accounts Linking Completed" !== e.name))) goto L_c9;
  e.key;
  return;
  // [栈深重同步 0 -> 1]
  u = c.LinkingCompleted;
  c.LinkingCompleted;
  goto L_1ae;
  if (!((<?> === "accounts_result_rendered"))) goto L_150;
  if (!(("Accounts Result Rendered" !== e.name))) goto L_127;
  return;
  // [栈深重同步 0 -> 1]
  u = c.AccountsResultRendered;
  c.AccountsResultRendered;
  goto L_1ae;
  if (!((<?> === "accounts_result_invalidated"))) goto L_1ad;
  if (!(("Accounts Result Invalidated" !== e.name))) goto L_184;
  return;
  // [栈深重同步 0 -> 1]
  u = c.AccountsResultInvalidated;
  c.AccountsResultInvalidated;
  goto L_1ae;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  if (!((u === c.LinkingCompleted))) goto L_1dc;
  goto L_1df;
  // [栈深重同步 1 -> 0]
  i = s;
  if ((!Array.isArray(e.metadata))) goto L_278;
  if (!((e.metadata.length !== i.size))) goto L_27b;
  return;
  o = new Map();
  let t;
  for (const t of e.metadata) {
    if ((!n.isRecord(t))) goto L_40a;
    if ((("string" != typeof t.name))) goto L_40a;
    if ((!i.has(t.name))) goto L_40a;
    if ((o.has(t.name))) goto L_40a;
    if ((("string" != typeof t.value))) goto L_40a;
    if (!((t.value.length > 36))) goto L_412;
    return undefined;
    // [栈深重同步 0 -> 3]
    o.set(t.name, t.value);
  }
  d = o.get("flow_id");
  l = o.get("result_id");
  if (((undefined === d))) goto L_553;
  if (((undefined === l))) goto L_553;
  if ((!r.test(d))) goto L_553;
  if (!(!r.test(l))) goto L_556;
  return;
  if (!((u === c.LinkingCompleted))) goto L_59e;
  return {type: u, result: {flowId: d, resultId: l}};
  m = o.get("read_generation");
  _ = Number(m);
  if (((undefined === m))) goto L_63e;
  if ((!new RegExp("^[1-9][0-9]{0,15}$").test(m))) goto L_63e;
  if (!(!Number.isSafeInteger(_))) goto L_641;
  return;
  f = o.get("result_kind");
  if (!(("accounts_summary" === f))) goto L_6c1;
  goto L_714;
  // [栈深重同步 1 -> 0]
  if (!(("accounts_empty" === f))) goto L_713;
  goto L_714;
  // [栈深重同步 1 -> 0]
  A = undefined;
  if (!((undefined !== A))) goto L_786;
  return {type: u, result: {flowId: d, resultId: l, readGeneration: _, kind: A, anchorId: "finance-accounts-result-".concat(l, "-", _)}};
  return undefined;
}

// fn i  args=2 vars=2 closure=2 cpool=0 bc=180B file=chatgpt_finance/src/FinanceAccountsResultAnalytics
// args: t, n
// closure: e, m
function {
  e.trackAnalyticsEvent(t, {category: "Finance", name: "Accounts Linking Completed", key: "accounts_linking_completed", metadata: [{name: "flow_id", value: m(n.flowId)}, {name: "result_id", value: n.resultId}]});
  return;
}

// fn o  args=2 vars=2 closure=1 cpool=0 bc=7B file=chatgpt_finance/src/FinanceAccountsResultAnalytics
// args: e, t
// closure: l
function {
  l(e, t, false);
  return;
}

// fn d  args=2 vars=2 closure=1 cpool=0 bc=7B file=chatgpt_finance/src/FinanceAccountsResultAnalytics
// args: e, t
// closure: l
function {
  l(e, t, true);
  return;
}

// fn l  args=3 vars=3 closure=3 cpool=0 bc=390B file=chatgpt_finance/src/FinanceAccountsResultAnalytics
// args: n, c, a
// closure: e, m, t
function {
  if (!(a)) goto L_3a;
  goto L_3f;
  // [栈深重同步 4 -> 3]
  if (!(a)) goto L_4e;
  goto L_53;
  // [栈深重同步 4 -> 3]
  if (!((c.kind === t.FinanceAccountsResultKind.AccountsSummary))) goto L_172;
  goto L_177;
  // [栈深重同步 8 -> 7]
  e.trackAnalyticsEvent(n, {category: "Finance", name: "Accounts Result Rendered", key: "accounts_result_rendered", metadata: [{name: "flow_id", value: m(c.flowId)}, {name: "result_id", value: c.resultId}, {name: "read_generation", value: String(c.readGeneration)}, {name: "result_kind", value: "accounts_empty"}]});
  return;
}

// fn m  args=1 vars=1 closure=1 cpool=0 bc=82B file=chatgpt_finance/src/FinanceAccountsResultAnalytics
// args: e
// closure: r
function {
  if (!(r.test(e))) goto L_50;
  return e.toLowerCase();
  return e;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=9 bc=314B file=chatgpt_finance/src/FinanceAccountsResultAnalytics
// args: require, module, exports
// locals: e, t, n, c, a, s, r, u, i, o, d, l, m
function {
  u = function u;
  i = function i;
  o = function o;
  d = function d;
  l = function l;
  m = function m;
  let r;
  let s;
  let a;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceAccountsResultAnalyticsType = undefined;
  exports.decodeFinanceAccountsResultAnalytics = undefined;
  exports.trackFinanceAccountsLinkedResult = undefined;
  exports.trackFinanceAccountsResultRendered = undefined;
  exports.trackFinanceAccountsResultInvalidated = undefined;
  e = require("oai_platform_services/src/OAIAnalyticsService");
  t = require("./FinanceAccountsResultModels");
  n = require("./TypeUtils");
  if ((c)) goto L_c5;
  c = {};
  exports.FinanceAccountsResultAnalyticsType = {};
  !function <atom:0>({});
  a = new Set(["flow_id", "result_id"]);
  s = new Set(["flow_id", "result_id", "read_generation", "result_kind"]);
  r = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$");
  exports.decodeFinanceAccountsResultAnalytics = u;
  exports.trackFinanceAccountsLinkedResult = i;
  exports.trackFinanceAccountsResultRendered = o;
  exports.trackFinanceAccountsResultInvalidated = d;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceAccountsResultAnalytics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
