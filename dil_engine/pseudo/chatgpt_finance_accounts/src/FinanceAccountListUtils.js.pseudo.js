// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=14B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: t
// closure: n
function {
  return {account: t, link: n};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=72B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
function {
  return n.accounts.map(function <atom:0>);   // tail call
}

// fn l  args=1 vars=10 closure=4 cpool=1 bc=418B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// locals: t, e, a, n#1, t#1, c, o, i, n#2
// closure: f, L, a, U
function {
  let o;
  let c;
  let e;
  let t;
  t = n.flatMap(function <atom:0>);
  e = new Map();
  let a;
  for (const a of t) {
    let t#1;
    let n#1;
    n#1 = f(a.account);
    if (!((e.get(n#1) == null))) goto L_a8;
    e.get(n#1);
    t#1 = [];
    t#1.push(a);
    e.set(n#1, t#1);
  }
  c = L(t);
  o = [];
  let i;
  for (const i of a) {
    let n#2;
    n#2 = e.get(i);
    if (!((undefined !== n#2))) goto L_197;
    if (!((n#2.length > 0))) goto L_197;
    o.push(U(i, n#2, c));
  }
  return o;
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=739B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// closure: e
function {
  if (!((n.type === "depository"))) goto L_71;
  return e.FinanceAccountSectionId.Cash;
  if (!((n.type === "investment"))) goto L_c0;
  return e.FinanceAccountSectionId.Investments;
  if (!((n.type === "asset"))) goto L_1b0;
  if (!((n.subtype == null))) goto L_f8;
  n.subtype;
  goto L_121;
  if (!((true === undefined.startsWith("real_estate_")))) goto L_16a;
  return e.FinanceAccountSectionId.RealEstate;
  return e.FinanceAccountSectionId.OtherAssets;
  if (!((n.type === "credit"))) goto L_1ff;
  return e.FinanceAccountSectionId.CreditCards;
  if (!((n.type === "loan"))) goto L_24e;
  return e.FinanceAccountSectionId.Loans;
  if (!((n.type === "payroll"))) goto L_29d;
  return e.FinanceAccountSectionId.Payroll;
  return e.FinanceAccountSectionId.OtherAssets;
}

// fn A  args=1 vars=1 closure=2 cpool=0 bc=1017B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// closure: e, c
function {
  if (!((n === e.FinanceAccountSectionId.Cash))) goto L_92;
  return c.default.financeAccountsSectionCash();   // tail call
  if (!((n === e.FinanceAccountSectionId.Investments))) goto L_123;
  return c.default.financeAccountsSectionInvestments();   // tail call
  if (!((n === e.FinanceAccountSectionId.RealEstate))) goto L_1b4;
  return c.default.financeAccountsSectionRealEstate();   // tail call
  if (!((n === e.FinanceAccountSectionId.OtherAssets))) goto L_245;
  return c.default.financeAccountsSectionOtherAssets();   // tail call
  if (!((n === e.FinanceAccountSectionId.CreditCards))) goto L_2d6;
  return c.default.financeAccountsSectionCreditCards();   // tail call
  if (!((n === e.FinanceAccountSectionId.Loans))) goto L_367;
  return c.default.financeAccountsSectionLoans();   // tail call
  if (!((n === e.FinanceAccountSectionId.Payroll))) goto L_3f8;
  return c.default.financeAccountsSectionPayroll();   // tail call
  n;
  return;
}

// fn S  args=1 vars=3 closure=2 cpool=0 bc=466B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// locals: t, e
// closure: T, c
function {
  let e;
  let t;
  if (((undefined === undefined))) goto L_55;
  t = <to_object>(undefined).account;
  e = <to_object>(undefined).link;
  <to_object>(undefined);
  goto L_59;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_b;
  // [栈深重同步 1 -> 0]
  if (!((t.name == null))) goto L_85;
  t.name;
  goto L_a9;
  if ((undefined.trim())) goto L_1d1;
  if (!((t.officialName == null))) goto L_dc;
  t.officialName;
  goto L_100;
  if ((undefined.trim())) goto L_1d1;
  if (!((undefined === e.itemId))) goto L_135;
  return T(t);
  if (!((e.institutionName == null))) goto L_161;
  e.institutionName;
  goto L_185;
  if ((undefined.trim())) goto L_1d1;
  return c.default.financeAccountsFinancialInstitution();
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=5B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
function {
  return (n.length > 0);
}

// fn p  args=1 vars=1 closure=1 cpool=3 bc=213B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// closure: T
function {
  if (!((n.mask == null))) goto L_2d;
  n.mask;
  goto L_7d;
  if (!((undefined.replace(new RegExp("[^0-9A-Za-z]"), "").slice(-4) == null))) goto L_83;
  undefined.replace(new RegExp("[^0-9A-Za-z]"), "").slice(-4);
  return [T(n), ""].filter(function <atom:0>).join(" � ");   // tail call
}

// fn F  args=1 vars=3 closure=0 cpool=0 bc=362B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// locals: t, e
function {
  let e;
  let t;
  if (!((n.balances == null))) goto L_30;
  n.balances;
  goto L_51;
  t = undefined.net;
  if (!((undefined !== t))) goto L_5d;
  return t;
  if (!((n.balances == null))) goto L_87;
  n.balances;
  goto L_a8;
  if (!((undefined.display == null))) goto L_f8;
  undefined.display;
  if (!((n.balances == null))) goto L_d7;
  n.balances;
  goto L_f8;
  e = undefined.current;
  if (!((undefined !== e))) goto L_168;
  if ((("credit" === n.type))) goto L_154;
  if (!(("loan" === n.type))) goto L_164;
  if (!((0 === e))) goto L_15f;
  return 0;
  return -e;
  return e;
  return undefined;
}

// fn y  args=1 vars=2 closure=0 cpool=0 bc=135B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// locals: t
function {
  let t;
  t = n.balances;
  if (!((undefined === t))) goto L_2f;
  return undefined;
  if (!((t.isoCurrencyCode == null))) goto L_86;
  t.isoCurrencyCode;
  if (!((t.unofficialCurrencyCode == null))) goto L_86;
  t.unofficialCurrencyCode;
  return "USD";
}

// fn m  args=1 vars=1 closure=0 cpool=0 bc=125B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
function {
  if (!((undefined !== n.itemId))) goto L_7c;
  if ((("error" === n.status))) goto L_7c;
  return ("disconnected" === n.status);
}

// fn g  args=1 vars=1 closure=1 cpool=0 bc=336B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// closure: i
function {
  if (!((undefined !== n.itemId))) goto L_14f;
  if ((("linked" === n.status))) goto L_7f;
  if (!(("initializing" === n.status))) goto L_14f;
  if (!((0 === n.accounts.length))) goto L_14f;
  if ((("idle" === n.syncStatus))) goto L_14f;
  if (!((undefined !== n.syncStatus))) goto L_14f;
  return i.has(n.syncStatus);
}

// fn h  args=1 vars=1 closure=3 cpool=0 bc=488B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// closure: m, e, g
function {
  if (!(m(n))) goto L_4b;
  return e.FinanceAccountStatus.RepairNeeded;
  if (!(("failed" === n.syncStatus))) goto L_bb;
  return e.FinanceAccountStatus.SyncFailed;
  if (!(("synced_30d" === n.syncStatus))) goto L_12b;
  return e.FinanceAccountStatus.Analyzing;
  if ((("syncing" === n.syncStatus))) goto L_15a;
  if (!(g(n))) goto L_1a2;
  return e.FinanceAccountStatus.Syncing;
  return e.FinanceAccountStatus.Updated;
}

// fn v  args=3 vars=3 closure=4 cpool=0 bc=971B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n, t, a
// closure: h, e, c, k
function {
  if (!((h(n) === e.FinanceAccountStatus.RepairNeeded))) goto L_94;
  return c.default.financeAccountsStatusRepairNeeded();   // tail call
  if (!((h(n) === e.FinanceAccountStatus.SyncFailed))) goto L_125;
  return c.default.financeAccountsStatusSyncFailed();   // tail call
  if (!((h(n) === e.FinanceAccountStatus.Analyzing))) goto L_1b6;
  return c.default.financeAccountsStatusAnalyzing();   // tail call
  if (!((h(n) === e.FinanceAccountStatus.Syncing))) goto L_247;
  return c.default.financeAccountsStatusSyncing();   // tail call
  if (!((h(n) === e.FinanceAccountStatus.Updated))) goto L_3ca;
  if (!((undefined === t))) goto L_2bd;
  goto L_32f;
  // [栈深重同步 3 -> 2]
  if (!((t.balances == null))) goto L_2e7;
  t.balances;
  goto L_308;
  if (!((undefined.lastUpdatedDatetime == null))) goto L_32f;
  undefined.lastUpdatedDatetime;
  if (!((undefined === t))) goto L_37e;
  goto L_3c6;
  // [栈深重同步 4 -> 3]
  return k(t.lastSuccessfulUpdate, c.default.financeAccountsStatusNotSynced(), a);   // tail call
  h(n);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: <atom:0>
// locals: n
function {
  n = <to_object>(<atom:0>).account;
  <to_object>(<atom:0>);
  return n.id;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=72B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
function {
  return n.selections.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=113B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: <atom:0>
// locals: n
// closure: c
function {
  n = <to_object>(<atom:0>).account;
  <to_object>(<atom:0>);
  return !c.has(n.id);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=72B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// closure: c
function {
  return n.selections.some(function <atom:0>);   // tail call
}

// fn x  args=3 vars=8 closure=0 cpool=2 bc=279B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n, t, e
// locals: c, a, o, i, s
function {
  let i;
  let o;
  let a;
  let c;
  c = new Set(t.flatMap(function <atom:0>));
  a = e.filter(function <atom:0>);
  if (!((0 === a.length))) goto L_6f;
  return n;
  o = e[0];
  if (!((n == null))) goto L_b2;
  n;
  if (!((undefined === o))) goto L_8b;
  goto L_b2;
  // [栈深重同步 3 -> 2]
  i = new Set([o.id]);
  let s;
  for (const s of a) {
    i.add(s.id);
  }
  return i;
}

// fn b  args=1 vars=1 closure=1 cpool=0 bc=93B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// closure: m
function {
  if (!(!m(n))) goto L_5c;
  if ((("syncing" === n.syncStatus))) goto L_5c;
  return ("synced_30d" === n.syncStatus);
}

// fn I  args=1 vars=1 closure=0 cpool=0 bc=135B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
function {
  if ((n.startsWith("http"))) goto L_58;
  if (!(n.startsWith("data:"))) goto L_5c;
  return n;
  return "data:image/png;base64,".concat(n);
}

// fn C  args=1 vars=1 closure=2 cpool=0 bc=356B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: t
// closure: e, n
function {
  if (!((t === e.FinanceAccountStatus.RepairNeeded))) goto L_8f;
  return n.OAIColor.TextStatusError;
  if (!((t === e.FinanceAccountStatus.SyncFailed))) goto L_11e;
  return n.OAIColor.TextStatusWarning;
  return n.OAIColor.TextTertiary;
}

// fn N  args=2 vars=4 closure=4 cpool=0 bc=357B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n, e
// locals: a, o
// closure: r, c, t, d
function {
  let o;
  let a;
  a = (100 * n);
  if (!((a > 0))) goto L_8d;
  if (!((a < r))) goto L_8d;
  return c.default.financeAccountsShareLessThan(t.formatNumber(r, 1, e));   // tail call
  if (!((a > d))) goto L_110;
  if (!((a < 100))) goto L_110;
  return c.default.financeAccountsShareGreaterThan(t.formatNumber(d, 1, e));   // tail call
  if (!((a > 0))) goto L_11e;
  if (((a < 1))) goto L_130;
  if (!((a > 99))) goto L_135;
  if (!((a < 100))) goto L_135;
  goto L_136;
  // [栈深重同步 1 -> 0]
  o = 0;
  return t.formatNumber(a, o, e);   // tail call
}

// fn M  args=5 vars=8 closure=3 cpool=0 bc=305B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n, e, c, a, o
// locals: c#1, i, s
// closure: u, t, R
function {
  let s;
  let i;
  if (!(c)) goto L_19;
  if (((undefined === e))) goto L_13;
  if (!(o)) goto L_19;
  return u;
  if (((undefined === e))) goto L_23;
  if (!(o)) goto L_b5;
  let c#1;
  c#1 = t.formatNumber(Math.round(n), 0, a);
  if (!(o)) goto L_b1;
  return "".concat(c#1, " ", e);
  return c#1;
  i = {minimumFractionDigits: 0, maximumFractionDigits: 0, localeIdentifier: a};
  if (!(c)) goto L_f3;
  goto L_f4;
  // [栈深重同步 2 -> 1]
  s = t.formatNumberWithCurrency(n, e, i);
  if (!(c)) goto L_12d;
  return R(s, t.formatNumberWithCurrency(1, e, i));
  return s;
}

// fn U  args=3 vars=7 closure=3 cpool=0 bc=1019B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n, t, e
// locals: c, a, i, s
// closure: w, o, O
function {
  let s;
  let i;
  let a;
  let c;
  c = w(t, false);
  a = o.has(n);
  if (!(!a)) goto L_195;
  if (!((undefined !== e.assets.amount))) goto L_195;
  if (!((e.assets.amount > 0))) goto L_195;
  if (!((undefined !== c.amount))) goto L_195;
  if (!((c.amount > 0))) goto L_195;
  goto L_196;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!(a)) goto L_35e;
  if (!((undefined !== e.liabilities.amount))) goto L_35e;
  if (!((e.liabilities.amount > 0))) goto L_35e;
  if (!((undefined !== c.amount))) goto L_35e;
  if (!((c.currency === e.liabilities.currency))) goto L_35e;
  goto L_35f;
  // [栈深重同步 1 -> 0]
  s = undefined;
  // append([], 0, t)
  t;
  return {id: n, selections: [].sort(O), total: c.amount, currency: c.currency, assetShare: i, liabilityShare: s};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=111B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
function {
  if (!((n.account.balances == null))) goto L_4c;
  n.account.balances;
  goto L_6d;
  return (undefined !== undefined.net);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=207B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// locals: t
// closure: o, f
function {
  let t;
  if (!((n.account.balances == null))) goto L_4e;
  n.account.balances;
  goto L_6f;
  t = undefined.net;
  if (!(!o.has(f(n.account)))) goto L_ce;
  if (!((undefined !== t))) goto L_ce;
  return (t > 0);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=75B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// closure: o, f
function {
  return o.has(f(n.account));   // tail call
}

// fn L  args=1 vars=5 closure=3 cpool=3 bc=184B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// locals: t, e, c, a
// closure: o, f, w
function {
  let a;
  let c;
  let e;
  let t;
  t = n.every(function <atom:0>);
  e = n.filter(function <atom:0>);
  c = n.filter(function <atom:0>);
  a = w(e, false);
  if (!(t)) goto L_97;
  goto L_a6;
  // [栈深重同步 2 -> 1]
  null;
  a;
  return {assets: {amount: undefined}, liabilities: w(c, true)};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// closure: y
function {
  return y(n.account);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=111B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
function {
  if (!((n.account.balances == null))) goto L_4c;
  n.account.balances;
  goto L_6d;
  return (undefined === undefined.net);
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=173B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n, e
// locals: c
// closure: t
function {
  let c;
  if (!((e.account.balances == null))) goto L_4e;
  e.account.balances;
  goto L_6f;
  if (!((undefined.net == null))) goto L_75;
  undefined.net;
  c = 0;
  if (!(t)) goto L_a8;
  goto L_ab;
  // [栈深重同步 2 -> 1]
  return (n + c);
}

// fn w  args=2 vars=4 closure=1 cpool=3 bc=328B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n, t
// locals: e, c
// closure: y
function {
  let c;
  let e;
  e = new Set(n.map(function <atom:0>));
  if (!((1 === e.size))) goto L_cd;
  goto L_ce;
  // [栈深重同步 1 -> 0]
  c = undefined;
  if (((undefined === c))) goto L_ff;
  if (!(n.some(function <atom:0>))) goto L_111;
  return {amount: undefined, currency: c};
  return {amount: n.reduce(function <atom:0>, 0), currency: c};
}

// fn O  args=2 vars=4 closure=0 cpool=0 bc=717B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n, t
// locals: e, c
function {
  let c;
  let e;
  if (!((n.account.balances == null))) goto L_51;
  n.account.balances;
  goto L_72;
  if (!((undefined.display == null))) goto L_157;
  undefined.display;
  if (!((n.account.balances == null))) goto L_c5;
  n.account.balances;
  goto L_e6;
  if (!((undefined.current == null))) goto L_157;
  undefined.current;
  if (!((n.account.balances == null))) goto L_136;
  n.account.balances;
  goto L_157;
  e = undefined.net;
  if (!((t.account.balances == null))) goto L_1a3;
  t.account.balances;
  goto L_1c4;
  if (!((undefined.display == null))) goto L_2a9;
  undefined.display;
  if (!((t.account.balances == null))) goto L_217;
  t.account.balances;
  goto L_238;
  if (!((undefined.current == null))) goto L_2a9;
  undefined.current;
  if (!((t.account.balances == null))) goto L_288;
  t.account.balances;
  goto L_2a9;
  c = undefined.net;
  if (!((undefined === e))) goto L_2bc;
  if (!((undefined === c))) goto L_2ba;
  return 0;
  return 1;
  if (!((undefined === c))) goto L_2c5;
  return -1;
  return (c - e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=5B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
function {
  return (n.length > 0);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=150B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
function {
  return (n.charAt(0).toUpperCase() + n.slice(1).toLowerCase());
}

// fn T  args=1 vars=3 closure=2 cpool=4 bc=415B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n
// locals: t, e
// closure: c, s
function {
  let e;
  let t;
  if (!((n.displayAccountType == null))) goto L_76;
  n.displayAccountType;
  if (!((n.subtype == null))) goto L_76;
  n.subtype;
  t = n.type;
  if (!((undefined === t))) goto L_c6;
  return c.default.financeAccountsAccountTypeFallback();   // tail call
  e = s[t.toLowerCase()];
  if (!((undefined !== e))) goto L_fd;
  return e;
  return t.split(new RegExp("[_\\s-]+")).filter(function <atom:0>).map(function <atom:0>).join(" ");
}

// fn k  args=3 vars=8 closure=1 cpool=0 bc=938B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n, t, e
// locals: a, o, n#1, n#2, i
// closure: c
function {
  let i;
  let o;
  let a;
  if (!((undefined === n))) goto L_10;
  return t;
  a = Date.parse(n);
  if (!(Number.isNaN(a))) goto L_6b;
  return t;
  o = Math.max(0, Math.floor(((e - a) / 1000)));
  if (!((o < 60))) goto L_118;
  return c.default.financeAccountsUpdatedJustNow();   // tail call
  if (!((o < 3600))) goto L_1f6;
  let n#1;
  n#1 = Math.floor((o / 60));
  if (!((1 === n#1))) goto L_1aa;
  return c.default.financeAccountsUpdatedOneMinuteAgo(n#1);
  return c.default.financeAccountsUpdatedMultipleMinutesAgo(n#1);
  if (!((o < 86400))) goto L_2d7;
  let n#2;
  n#2 = Math.floor((o / 3600));
  if (!((1 === n#2))) goto L_28b;
  return c.default.financeAccountsUpdatedOneHourAgo(n#2);
  return c.default.financeAccountsUpdatedMultipleHoursAgo(n#2);
  i = Math.floor((o / 86400));
  if (!((1 === i))) goto L_35e;
  return c.default.financeAccountsUpdatedOneDayAgo(i);
  return c.default.financeAccountsUpdatedMultipleDaysAgo(i);
}

// fn R  args=2 vars=4 closure=1 cpool=0 bc=256B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: n, t
// locals: e, c
// closure: u
function {
  let c;
  let e;
  e = 0;
  if (!((e < n.length))) goto L_31;
  if (!((e < t.length))) goto L_31;
  if (!((n[e] === t[e]))) goto L_31;
  e = (e + 1);
  (e + 1);
  goto L_8;
  if (((e === n.length))) goto L_41;
  if (!((e === t.length))) goto L_47;
  return u;
  c = 0;
  if (!((c < (n.length - e)))) goto L_84;
  if (!((c < (t.length - e)))) goto L_84;
  if (!((n[((n.length - 1) - c)] === t[((t.length - 1) - c)]))) goto L_84;
  c = (c + 1);
  (c + 1);
  goto L_49;
  return "".concat(n.slice(0, e), u, n.slice((n.length - c)));   // tail call
}

// fn <atom:0>  args=3 vars=38 closure=0 cpool=26 bc=1321B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// args: require, module, exports
// locals: n, t, e, c, a, o, i, s, u, r, d, l, f, A, S, p, F, y, m, g, h, v, x, b, I, C, N, M, U, L, w, O, T, k, R
function {
  l = function l;
  f = function f;
  A = function A;
  S = function S;
  p = function p;
  F = function F;
  y = function y;
  m = function m;
  g = function g;
  h = function h;
  v = function v;
  x = function x;
  b = function b;
  I = function I;
  C = function C;
  N = function N;
  M = function M;
  U = function U;
  L = function L;
  w = function w;
  O = function O;
  T = function T;
  k = function k;
  R = function R;
  let d;
  let r;
  let u;
  let s;
  let i;
  let o;
  let a;
  let c;
  let e;
  let t;
  let n;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.buildFinanceAccountSections = undefined;
  exports.getFinanceAccountSectionId = undefined;
  exports.getFinanceAccountSectionTitle = undefined;
  exports.getFinanceAccountRowTitle = undefined;
  exports.getFinanceAccountSubtitle = undefined;
  exports.getFinanceAccountDisplayBalance = undefined;
  exports.getFinanceAccountCurrency = undefined;
  exports.isFinanceAccountLinkBroken = undefined;
  exports.isFinanceAccountLinkPending = undefined;
  exports.getFinanceAccountStatus = undefined;
  exports.getFinanceAccountUpdatedLabel = undefined;
  exports.expandSectionsWithNewAccounts = undefined;
  exports.isActivelySyncing = undefined;
  exports.normalizeInstitutionLogo = undefined;
  exports.accountStatusColor = undefined;
  exports.formatFinanceAccountSharePercentage = undefined;
  exports.formatFinanceBalance = undefined;
  n = require("oai_core/src/OAITokens");
  t = require("valdi_core/src/utils/NumberUtils");
  e = require("./FinanceAccountListModels");
  c = require("./Strings");
  a = [e.FinanceAccountSectionId.Cash, e.FinanceAccountSectionId.Investments, e.FinanceAccountSectionId.RealEstate, e.FinanceAccountSectionId.OtherAssets, e.FinanceAccountSectionId.CreditCards, e.FinanceAccountSectionId.Loans, e.FinanceAccountSectionId.Payroll];
  o = new Set([e.FinanceAccountSectionId.CreditCards, e.FinanceAccountSectionId.Loans]);
  i = new Set(["syncing", "synced_30d"]);
  s = {cd: "CD", hsa: "HSA", ira: "IRA"};
  u = "••••";
  r = 0.1;
  d = 99.9;
  exports.buildFinanceAccountSections = l;
  exports.getFinanceAccountSectionId = f;
  exports.getFinanceAccountSectionTitle = A;
  exports.getFinanceAccountRowTitle = S;
  exports.getFinanceAccountSubtitle = p;
  exports.getFinanceAccountDisplayBalance = F;
  exports.getFinanceAccountCurrency = y;
  exports.isFinanceAccountLinkBroken = m;
  exports.isFinanceAccountLinkPending = g;
  exports.getFinanceAccountStatus = h;
  exports.getFinanceAccountUpdatedLabel = v;
  exports.expandSectionsWithNewAccounts = x;
  exports.isActivelySyncing = b;
  exports.normalizeInstitutionLogo = I;
  exports.accountStatusColor = C;
  exports.formatFinanceAccountSharePercentage = N;
  exports.formatFinanceBalance = M;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_accounts/src/FinanceAccountListUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
