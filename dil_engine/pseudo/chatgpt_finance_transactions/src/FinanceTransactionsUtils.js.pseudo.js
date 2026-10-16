// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryFinancial();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryEntertainment();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryDiningDrinks();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryGroceries();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryShopping();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryGiftsDonations();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryPets();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryTransportation();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryFamilyKids();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryServices();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryEducation();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryHousing();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryIncome();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryTransfers();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryHealthWellness();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryOther();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryBillsUtilities();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: e
function {
  return e.default.financeTransactionsCategoryTravel();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
function {
  return t.id;
}

// fn l  args=1 vars=5 closure=3 cpool=0 bc=277B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
// locals: n, e, a, t#1
// closure: L, N, M
function {
  let e;
  let n;
  n = L(t, "transaction list");
  if (!(!Array.isArray(n.transactions))) goto L_6e;
  throw new Error("Invalid transaction list response");
  e = [];
  let a;
  for (const a of n.transactions) {
    let t#1;
    t#1 = N(a);
    if (!((undefined !== t#1))) goto L_d9;
    e.push(t#1);
  }
  return {transactions: e, nextCursor: M(n.next_cursor)};
}

// fn u  args=1 vars=7 closure=3 cpool=0 bc=960B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
// locals: n, e, a, t#1, n#1, a#1
// closure: L, E, M
function {
  let e;
  let n;
  n = L(t, "Finance profile");
  if (((null === n.institutions))) goto L_5f;
  if (!((undefined === n.institutions))) goto L_65;
  return [];
  if (!(!Array.isArray(n.institutions))) goto L_c4;
  throw new Error("Invalid Finance profile institutions");
  e = [];
  let a;
  for (const a of n.institutions) {
    let t#1;
    if ((!E(a))) goto L_14f;
    if ((!Array.isArray(a.accounts))) continue;
    if (!(E(a.institution))) goto L_1c5;
    goto L_1c6;
    // [栈深重同步 4 -> 3]
    t#1 = undefined;
    let n#1;
    for (const n#1 of a.accounts) {
      let a#1;
      if ((!E(n#1))) continue;
      if (!((M(n#1.account_id) == null))) goto L_230;
      M(n#1.account_id);
      goto L_254;
      a#1 = undefined.trim();
      if (!((undefined !== a#1))) goto L_3a9;
      if (!((0 !== a#1.length))) goto L_3a9;
      e.push({id: a#1, displayAccountType: M(n#1.display_account_type), institutionName: t#1, mask: M(n#1.mask), name: M(n#1.name), officialName: M(n#1.official_name), subtype: M(n#1.subtype), type: M(n#1.type)});
    }
    // [栈深重同步 0 -> 3]
  }
  return e;
}

// fn d  args=2 vars=5 closure=1 cpool=0 bc=571B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t, n
// locals: e, a, i
// closure: D
function {
  let i;
  let a;
  let e;
  e = [];
  a = t.search.trim();
  if (!((a.length > 0))) goto L_a2;
  e.push({field: "search", operator: "contains", value: a});
  i = D(t.dateRange, n);
  if (!((undefined !== i))) goto L_116;
  e.push({field: "date", operator: "between", value: i});
  if (!((t.categoryId.length > 0))) goto L_1a6;
  e.push({field: "category_primary", operator: "in", value: [t.categoryId]});
  if (!((t.accountId.length > 0))) goto L_236;
  e.push({field: "account_id", operator: "in", value: [t.accountId]});
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=83B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
function {
  return {id: t.id, label: t.label()};
}

// fn f  args=0 vars=0 closure=1 cpool=1 bc=41B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// closure: r
function {
  return r.map(function <atom:0>);   // tail call
}

// fn p  args=1 vars=1 closure=1 cpool=0 bc=16B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
// closure: s
function {
  if (!((s[t] == null))) goto L_f;
  s[t];
  return "compass";
}

// fn g  args=2 vars=10 closure=2 cpool=2 bc=1231B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t, n
// locals: a, i, r, t#1, o, s, c, l
// closure: e, I
function {
  let i;
  let a;
  a = new Set();
  i = [];
  let r;
  for (const r of t) {
    let l;
    let c;
    let s;
    let o;
    let t#1;
    if ((a.has(r.id))) continue;
    a.add(r.id);
    if (!(n)) goto L_176;
    i.push({id: r.id, label: e.default.financeTransactionsPrivateAccountLabel((i.length + 1))});
   continue;
    if (!((r.name == null))) goto L_1a2;
    r.name;
    goto L_1c6;
    if ((undefined.trim())) goto L_269;
    if (!((r.officialName == null))) goto L_1f9;
    r.officialName;
    goto L_21d;
    if ((undefined.trim())) goto L_269;
    t#1 = e.default.financeTransactionsAccountFallbackLabel();
    if (!((r.institutionName == null))) goto L_296;
    r.institutionName;
    goto L_2ba;
    o = undefined.trim();
    if (!((r.mask == null))) goto L_2e8;
    r.mask;
    goto L_338;
    if ((undefined.replace(new RegExp("[^0-9A-Za-z]"), "").slice(-4))) goto L_33d;
    s = undefined;
    if (!((o === t#1))) goto L_34b;
    goto L_34e;
    // [栈深重同步 4 -> 3]
    c = o;
    if (!((undefined !== c))) goto L_3b2;
    if (!((undefined !== s))) goto L_3b2;
    goto L_463;
    // [栈深重同步 4 -> 3]
    if (!((undefined !== c))) goto L_409;
    goto L_463;
    // [栈深重同步 4 -> 3]
    if (!((undefined !== s))) goto L_460;
    goto L_463;
    // [栈深重同步 4 -> 3]
    l = t#1;
    i.push({id: r.id, label: l});
  }
  return I(i);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=5B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
function {
  return (t.length > 0);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=150B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
function {
  return (t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
}

// fn m  args=1 vars=4 closure=2 cpool=6 bc=937B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
// locals: n, a, r
// closure: e, i
function {
  let r;
  let a;
  let n;
  if (!((t.displayAccountType == null))) goto L_33;
  t.displayAccountType;
  goto L_57;
  if ((undefined.trim())) goto L_1f7;
  if (!((t.subtype == null))) goto L_88;
  t.subtype;
  goto L_ac;
  if ((undefined.trim())) goto L_1f7;
  if (!((t.type == null))) goto L_dd;
  t.type;
  goto L_101;
  if ((undefined.trim())) goto L_1f7;
  if (!((t.name == null))) goto L_132;
  t.name;
  goto L_156;
  if ((undefined.trim())) goto L_1f7;
  if (!((t.officialName == null))) goto L_187;
  t.officialName;
  goto L_1ab;
  if ((undefined.trim())) goto L_1f7;
  n = e.default.financeTransactionsAccountFallbackLabel();
  if (!((i[n.toLowerCase()] == null))) goto L_2cc;
  i[n.toLowerCase()];
  a = n.split(new RegExp("[_\\s-]+")).filter(function <atom:0>).map(function <atom:0>).join(" ");
  if (!((t.mask == null))) goto L_2f7;
  t.mask;
  goto L_347;
  if (!((undefined.replace(new RegExp("[^0-9A-Za-z]"), "").slice(-4) == null))) goto L_34d;
  undefined.replace(new RegExp("[^0-9A-Za-z]"), "").slice(-4);
  r = "";
  if (!((0 === r.length))) goto L_35a;
  return a;
  return e.default.financeTransactionsAccountSubtitleWithLastFour(a, r);
}

// fn h  args=1 vars=1 closure=1 cpool=0 bc=282B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
// closure: b
function {
  if (!((t.transactionId.trim().length > 0))) goto L_119;
  if (!((t.displayName.trim().length > 0))) goto L_119;
  if (!((undefined !== t.amountValue))) goto L_119;
  if (!(Number.isFinite(t.amountValue))) goto L_119;
  return (undefined !== b(t));
}

// fn y  args=1 vars=5 closure=1 cpool=0 bc=249B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
// locals: n, e, t#1, a
// closure: b
function {
  let n;
  n = [];
  let e;
  for (const e of t) {
    let a;
    let t#1;
    t#1 = b(e);
    if (((undefined === t#1))) continue;
    a = n[(n.length - 1)];
    if (!((a == null))) goto L_3c;
    a;
    goto L_5d;
    if (!((undefined.date === t#1))) goto L_b0;
    goto L_eb;
    // [栈深重同步 4 -> 3]
    n.push({date: t#1, transactions: [e]});
  }
  return n;
}

// fn b  args=1 vars=3 closure=1 cpool=0 bc=245B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
// locals: n, e
// closure: $
function {
  let e;
  let n;
  if (!((t.date == null))) goto L_30;
  t.date;
  goto L_54;
  n = undefined.trim();
  if (!((undefined !== n))) goto L_69;
  if (!((undefined !== $(n)))) goto L_69;
  return n;
  if (!((t.datetime == null))) goto L_93;
  t.datetime;
  goto L_de;
  e = undefined.trim().slice(0, 10);
  if (!((undefined !== e))) goto L_f3;
  if (!((undefined !== $(e)))) goto L_f3;
  return e;
  return undefined;
}

// fn T  args=2 vars=2 closure=1 cpool=0 bc=11B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t, n
// closure: _
function {
  return _(t, "MEDIUM", n);   // tail call
}

// fn C  args=2 vars=2 closure=1 cpool=0 bc=11B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t, n
// closure: _
function {
  return _(t, "MEDIUM_NO_YEAR", n);   // tail call
}

// fn _  args=3 vars=5 closure=2 cpool=0 bc=191B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: n, e, a
// locals: i, r
// closure: $, t
function {
  let r;
  let i;
  i = $(n);
  if (!((undefined === i))) goto L_13;
  return n;
  r = new Date(i.year, (i.month - 1), i.day, 12);
  return t.formatDate(r, e, {localeIdentifier: a});   // tail call
}

// fn v  args=3 vars=9 closure=2 cpool=0 bc=695B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t, e, i
// locals: r, o, t#1, s, c, l
// closure: a, n
function {
  let l;
  let c;
  let s;
  let o;
  let r;
  if (!(i)) goto L_16;
  return a;
  r = t.amountValue;
  if (!((undefined === r))) goto L_98;
  if (!((t.amountLabel == null))) goto L_6a;
  t.amountLabel;
  goto L_8e;
  if ((undefined.trim())) goto L_97;
  return "—";
  if (!((t.isoCurrencyCode == null))) goto L_c2;
  t.isoCurrencyCode;
  goto L_e6;
  o = undefined.trim();
  if (!((undefined !== o))) goto L_193;
  if (!((o.length > 0))) goto L_193;
  let t#1;
  t#1 = n.formatNumberWithCurrency(Math.abs(r), o, {localeIdentifier: e});
  if (!((r > 0))) goto L_18f;
  return "+".concat(t#1);
  return t#1;
  s = n.formatNumber(Math.abs(r), 2, e);
  if (!((r > 0))) goto L_21c;
  goto L_21f;
  // [栈深重同步 1 -> 0]
  c = s;
  if (!((t.unofficialCurrencyCode == null))) goto L_24b;
  t.unofficialCurrencyCode;
  goto L_26f;
  l = undefined.trim();
  if (((undefined === l))) goto L_280;
  if (!((0 === l.length))) goto L_286;
  return c;
  return "".concat(c, " ", l);
}

// fn F  args=3 vars=6 closure=4 cpool=1 bc=380B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t, e, i
// locals: r, t#1, o
// closure: v, A, n, a
function {
  let o;
  let r;
  if (!(!i)) goto L_12;
  return v(t, e, false);   // tail call
  if (!((t.isoCurrencyCode == null))) goto L_3c;
  t.isoCurrencyCode;
  goto L_60;
  r = undefined.trim();
  if (!((undefined !== r))) goto L_e7;
  if (!((r.length > 0))) goto L_e7;
  let t#1;
  t#1 = {localeIdentifier: e, maximumFractionDigits: 0, minimumFractionDigits: 0};
  return A(n.formatNumberWithCurrency(0, r, t#1), n.formatNumberWithCurrency(1.111111111111, r, t#1));   // tail call
  if (!((t.unofficialCurrencyCode == null))) goto L_111;
  t.unofficialCurrencyCode;
  goto L_135;
  o = undefined.trim();
  if (((undefined === o))) goto L_145;
  if (!((0 === o.length))) goto L_14b;
  return a;
  return "".concat(a, " ", o);
}

// fn A  args=2 vars=4 closure=1 cpool=0 bc=256B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t, n
// locals: e, i
// closure: a
function {
  let i;
  let e;
  e = 0;
  if (!((e < t.length))) goto L_31;
  if (!((e < n.length))) goto L_31;
  if (!((t[e] === n[e]))) goto L_31;
  e = (e + 1);
  (e + 1);
  goto L_8;
  if (((e === t.length))) goto L_41;
  if (!((e === n.length))) goto L_47;
  return a;
  i = 0;
  if (!((i < (t.length - e)))) goto L_84;
  if (!((i < (n.length - e)))) goto L_84;
  if (!((t[((t.length - 1) - i)] === n[((n.length - 1) - i)]))) goto L_84;
  i = (i + 1);
  (i + 1);
  goto L_49;
  return "".concat(t.slice(0, e), a, t.slice((t.length - i)));   // tail call
}

// fn x  args=1 vars=1 closure=0 cpool=0 bc=170B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
function {
  if (!((t.isoCurrencyCode == null))) goto L_2a;
  t.isoCurrencyCode;
  goto L_4e;
  if ((undefined.trim())) goto L_a9;
  if (!((t.unofficialCurrencyCode == null))) goto L_7c;
  t.unofficialCurrencyCode;
  goto L_a0;
  if ((undefined.trim())) goto L_a9;
  return "USD";
}

// fn w  args=1 vars=7 closure=4 cpool=0 bc=770B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
// locals: n, a, i, r, n#1, t#1
// closure: o, k, e, p
function {
  let r;
  let i;
  let a;
  let n;
  if (!((t.categoryPrimary == null))) goto L_36;
  t.categoryPrimary;
  goto L_5a;
  n = undefined.trim();
  if (!((n == null))) goto L_66;
  n;
  goto L_8a;
  a = undefined.toLowerCase();
  if (!((undefined !== a))) goto L_c3;
  if (!(o.has(a))) goto L_c3;
  goto L_fc;
  // [栈深重同步 1 -> 0]
  if (!((n == null))) goto L_ce;
  n;
  goto L_f2;
  if (!((undefined.toUpperCase() == null))) goto L_fc;
  undefined.toUpperCase();
  i = "OTHER";
  r = "other";
  if (!((undefined !== a))) goto L_141;
  if (!(o.has(a))) goto L_141;
  r = a;
  a;
  goto L_230;
  let n#1;
  if (!((t.categoryDetailed == null))) goto L_16e;
  t.categoryDetailed;
  goto L_1b6;
  n#1 = undefined.trim().toLowerCase();
  if (!((undefined !== n#1))) goto L_230;
  let t#1;
  for (const t#1 of o) {
    if (!(n#1.startsWith("".concat(t#1, "_")))) continue;
    r = t#1;
    t#1;
    goto L_22f;
  }
  if (!((t.categoryLabel == null))) goto L_25b;
  t.categoryLabel;
  goto L_27f;
  if ((undefined.trim())) goto L_2d4;
  if ((k(n))) goto L_2d4;
  if (!((undefined === a))) goto L_2f7;
  goto L_2fc;
  // [栈深重同步 2 -> 1]
  return {label: e.default.financeTransactionsCategoryOther(), primaryCategoryId: r, primaryCategoryKey: i, sidebarIcon: p(a)};
}

// fn D  args=2 vars=4 closure=2 cpool=0 bc=511B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t, n
// locals: e, a
// closure: c, S
function {
  let a;
  let e;
  e = n.getFullYear();
  a = n.getMonth();
  if (!((t === c.ThisMonth))) goto L_ab;
  return {start: S(new Date(e, a, 1)), end: S(new Date(e, (a + 1), 0))};
  if (!((t === c.LastMonth))) goto L_103;
  return {start: S(new Date(e, (a - 1), 1)), end: S(new Date(e, a, 0))};
  if (!((t === c.ThisYear))) goto L_18f;
  return {start: "".concat(e, "-01-01"), end: "".concat(e, "-12-31")};
  if (!((t === c.LastYear))) goto L_1d7;
  return {start: ((e - 1) + "-01-01"), end: ((e - 1) + "-12-31")};
  if (!((t === c.All))) goto L_1fe;
  t;
  return;
  // [栈深重同步 0 -> 1]
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=402B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
// locals: i
// closure: n, a, e
function {
  let i;
  if (!((n.get(t.label) == null))) goto L_52;
  n.get(t.label);
  if (!((0 < 2))) goto L_58;
  return t;
  if (!((a.get(t.label) == null))) goto L_a7;
  a.get(t.label);
  i = (0 + 1);
  a.set(t.label, i);
  return {id: t.id, label: e.default.financeTransactionsAccountDisambiguation(t.label, i)};
}

// fn I  args=1 vars=4 closure=1 cpool=1 bc=242B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
// locals: n, e, a
// closure: e
function {
  let a;
  let n;
  n = new Map();
  let e;
  for (const e of t) {
    if (!((n.get(e.label) == null))) goto L_b2;
    n.get(e.label);
    n.set(e.label, (0 + 1));
  }
  a = new Map();
  return t.map(function <atom:0>);   // tail call
}

// fn N  args=1 vars=3 closure=3 cpool=0 bc=702B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
// locals: n, e
// closure: E, M, U
function {
  let e;
  let n;
  if (!(!E(t))) goto L_d;
  return;
  n = M(t.transaction_id);
  e = M(t.display_name);
  if (!((undefined !== n))) goto L_2bc;
  if (!((undefined !== e))) goto L_2bc;
  return {transactionId: n, date: M(t.date), datetime: M(t.datetime), displayName: e, merchantName: M(t.merchant_name), amountValue: U(t.amount_value), amountLabel: M(t.amount_label), isoCurrencyCode: M(t.iso_currency_code), unofficialCurrencyCode: M(t.unofficial_currency_code), pending: (true === t.pending), accountId: M(t.account_id), accountName: M(t.account_name), categoryPrimary: M(t.category_primary), categoryDetailed: M(t.category_detailed), categoryLabel: M(t.category_label), logoUrl: M(t.logo_url)};
  return undefined;
}

// fn L  args=2 vars=3 closure=1 cpool=0 bc=193B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t, n
// locals: e
// closure: E
function {
  let e;
  e = undefined;
  try { // catch -> L_3c
  e = JSON.parse(t);
  JSON.parse(t);
  <?>;
  goto L_7c;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_7b
  throw new Error("Invalid ".concat(n, " JSON"));
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(!E(e))) goto L_bd;
  throw new Error("Invalid ".concat(n, " response"));
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=159B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
function {
  if (!((0 === t.length))) goto L_8;
  return t;
  return "".concat(t[0].toUpperCase(), t.slice(1).toLowerCase());
}

// fn k  args=1 vars=1 closure=0 cpool=1 bc=136B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
function {
  if (!((undefined !== t))) goto L_87;
  if (!((0 !== t.length))) goto L_87;
  return t.split("_").map(function <atom:0>).join(" ");   // tail call
  return;
}

// fn S  args=1 vars=1 closure=0 cpool=2 bc=250B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
function {
  return "".concat(t.getFullYear(), "-", String((t.getMonth() + 1)).padStart(2, "0"), "-", String(t.getDate()).padStart(2, "0"));   // tail call
}

// fn $  args=1 vars=6 closure=0 cpool=2 bc=374B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
// locals: n, e, a, i, r
function {
  let r;
  let i;
  let a;
  let e;
  let n;
  n = new RegExp("^(\\d{4})-(\\d{2})-(\\d{2})$").exec(t);
  if (!((null === n))) goto L_42;
  return;
  e = Number(n[1]);
  a = Number(n[2]);
  i = Number(n[3]);
  r = new Date(0);
  r.setUTCHours(0, 0, 0, 0);
  r.setUTCFullYear(e, (a - 1), i);
  if (!((r.getUTCFullYear() === e))) goto L_174;
  if (!((r.getUTCMonth() === (a - 1)))) goto L_174;
  if (!((r.getUTCDate() === i))) goto L_174;
  return {day: i, month: a, year: e};
  return undefined;
}

// fn E  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
function {
  if (!(("object" == typeof t))) goto L_3e;
  if (!((null !== t))) goto L_3e;
  return !Array.isArray(t);
}

// fn M  args=1 vars=1 closure=0 cpool=0 bc=14B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
function {
  if (!(("string" == typeof t))) goto L_c;
  return t;
  return undefined;
}

// fn U  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
function {
  if (!(("number" == typeof t))) goto L_38;
  if (!(Number.isFinite(t))) goto L_38;
  return t;
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=76B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: t
function {
  t.All = "all";
  t.ThisMonth = "this_month";
  t.LastMonth = "last_month";
  t.ThisYear = "this_year";
  t.LastYear = "last_year";
  return;
}

// fn <atom:0>  args=3 vars=40 closure=0 cpool=48 bc=1484B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// args: require, module, exports
// locals: t, n, e, a, i, r, o, s, c, l, u, d, f, p, g, m, h, y, b, T, C, _, v, F, A, x, w, D, I, N, L, k, S, $, E, M, U
function {
  l = function l;
  u = function u;
  d = function d;
  f = function f;
  p = function p;
  g = function g;
  m = function m;
  h = function h;
  y = function y;
  b = function b;
  T = function T;
  C = function C;
  _ = function _;
  v = function v;
  F = function F;
  A = function A;
  x = function x;
  w = function w;
  D = function D;
  I = function I;
  N = function N;
  L = function L;
  k = function k;
  S = function S;
  $ = function $;
  E = function E;
  M = function M;
  U = function U;
  let s;
  let o;
  let r;
  let i;
  let a;
  let e;
  let n;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceTransactionDateRange = undefined;
  exports.EMPTY_FINANCE_TRANSACTION_FILTER_STATE = undefined;
  exports.parseFinanceTransactionsPageJson = undefined;
  exports.parseFinanceProfileJson = undefined;
  exports.buildFinanceTransactionFilters = undefined;
  exports.buildFinanceCategoryOptions = undefined;
  exports.getFinanceCategoryIcon = undefined;
  exports.buildFinanceAccountOptions = undefined;
  exports.getFinanceTransactionAccountSubtitle = undefined;
  exports.isCompleteFinanceTransaction = undefined;
  exports.groupFinanceTransactionsByDate = undefined;
  exports.getFinanceTransactionDate = undefined;
  exports.formatFinanceTransactionGroupDate = undefined;
  exports.formatFinanceTransactionDetailDate = undefined;
  exports.formatFinanceTransactionAmount = undefined;
  exports.formatFinanceTransactionListAmount = undefined;
  exports.getFinanceTransactionCurrencyCode = undefined;
  exports.getFinanceTransactionCategoryPresentation = undefined;
  t = require("valdi_core/src/utils/DateUtils");
  n = require("valdi_core/src/utils/NumberUtils");
  e = require("./Strings");
  a = "••••";
  i = {cd: "CD", hsa: "HSA", ira: "IRA"};
  r = [{id: "financial", label: function <atom:0>}, {id: "entertainment", label: function <atom:0>}, {id: "dining_drinks", label: function <atom:0>}, {id: "groceries", label: function <atom:0>}, {id: "shopping", label: function <atom:0>}, {id: "gifts_donations", label: function <atom:0>}, {id: "pets", label: function <atom:0>}, {id: "transportation", label: function <atom:0>}, {id: "family_kids", label: function <atom:0>}, {id: "services", label: function <atom:0>}, {id: "education", label: function <atom:0>}, {id: "housing", label: function <atom:0>}, {id: "income", label: function <atom:0>}, {id: "transfers", label: function <atom:0>}, {id: "health_wellness", label: function <atom:0>}, {id: "other", label: function <atom:0>}, {id: "bills_utilities", label: function <atom:0>}, {id: "travel", label: function <atom:0>}];
  o = new Set(r.map(function <atom:0>));
  s = {bank_fees: "bank", bills_utilities: "receipt-badge-bolt", dining_drinks: "wine-and-cloche", education: "book", entertainment: "popcorn", family_kids: "child-and-person", financial: "bank", food_and_drink: "wine-and-cloche", general_merchandise: "shopping-bag", general_services: "wrench", gifts_donations: "gift", groceries: "basket", health_wellness: "lotus", housing: "house", income: "banknote", loan_payments: "bank", medical: "lotus", other: "text-square", pets: "paw", rent_and_utilities: "receipt-badge-bolt", services: "wrench", shopping: "shopping-bag", transfers: "transfer-arrow-right-arrow-left", transfer_in: "transfer-arrow-right-arrow-left", transfer_out: "transfer-arrow-right-arrow-left", transportation: "car", travel: "plane-forward"};
  if ((c)) goto L_4c3;
  c = {};
  exports.FinanceTransactionDateRange = {};
  !function <atom:0>({});
  exports.EMPTY_FINANCE_TRANSACTION_FILTER_STATE = {accountId: "", categoryId: "", dateRange: c.All, search: ""};
  exports.parseFinanceTransactionsPageJson = l;
  exports.parseFinanceProfileJson = u;
  exports.buildFinanceTransactionFilters = d;
  exports.buildFinanceCategoryOptions = f;
  exports.getFinanceCategoryIcon = p;
  exports.buildFinanceAccountOptions = g;
  exports.getFinanceTransactionAccountSubtitle = m;
  exports.isCompleteFinanceTransaction = h;
  exports.groupFinanceTransactionsByDate = y;
  exports.getFinanceTransactionDate = b;
  exports.formatFinanceTransactionGroupDate = T;
  exports.formatFinanceTransactionDetailDate = C;
  exports.formatFinanceTransactionAmount = v;
  exports.formatFinanceTransactionListAmount = F;
  exports.getFinanceTransactionCurrencyCode = x;
  exports.getFinanceTransactionCategoryPresentation = w;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_transactions/src/FinanceTransactionsUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
