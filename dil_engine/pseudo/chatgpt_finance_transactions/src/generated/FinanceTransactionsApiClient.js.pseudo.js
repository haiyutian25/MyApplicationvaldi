// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=82B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(((e + ": ") + t));
  if (!(<class_fields_init>)) goto L_2a;
  <class_fields_init>.call(this);
  new new.target(((e + ": ") + t));
  this.path = e;
  this.message = ((e + ": ") + t);
  return this;
}

// fn e  args=2 vars=2 closure=0 cpool=0 bc=10B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
function {
  return ((e + ".") + t);
}

// fn t  args=2 vars=2 closure=1 cpool=0 bc=79B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if ((("object" != typeof e))) goto L_3d;
  if (((null === e))) goto L_3d;
  if (!(Array.isArray(e))) goto L_4d;
  throw new ClientApiDecodeError(t, "expected object");
  return e;
}

// fn n  args=3 vars=6 closure=2 cpool=0 bc=97B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: n, o, r
// locals: i, c, t
// closure: t, e
function {
  let c;
  let i;
  i = t(n, o);
  c = {};
  let t;
  for (const t of Object.keys(i)) {
    c[t] = r(i[t], e(o, t));
  }
  return c;
}

// fn o  args=2 vars=2 closure=1 cpool=0 bc=26B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if (!(("string" != typeof e))) goto L_18;
  throw new ClientApiDecodeError(t, "expected string");
  return e;
}

// fn r  args=2 vars=2 closure=1 cpool=0 bc=73B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if ((("number" != typeof e))) goto L_37;
  if (!(!Number.isFinite(e))) goto L_47;
  throw new ClientApiDecodeError(t, "expected finite number");
  return e;
}

// fn i  args=2 vars=3 closure=2 cpool=0 bc=73B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// locals: n
// closure: r, ClientApiDecodeError
function {
  let n;
  n = r(e, t);
  if (!(!Number.isInteger(n))) goto L_45;
  throw new ClientApiDecodeError(t, "expected integer");
  return n;
}

// fn c  args=2 vars=2 closure=1 cpool=0 bc=26B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if (!(("boolean" != typeof e))) goto L_18;
  throw new ClientApiDecodeError(t, "expected boolean");
  return e;
}

// fn a  args=2 vars=2 closure=1 cpool=0 bc=21B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if (!((null !== e))) goto L_13;
  throw new ClientApiDecodeError(t, "expected null");
  return null;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=26B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, o
// closure: n, t
function {
  return n(e, (((t + "[") + String(o)) + "]"));   // tail call
}

// fn s  args=3 vars=3 closure=1 cpool=1 bc=98B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t, n
// closure: ClientApiDecodeError
function {
  if (!(!Array.isArray(e))) goto L_3b;
  throw new ClientApiDecodeError(t, "expected array");
  return e.map(function <atom:0>);   // tail call
}

// fn u  args=3 vars=5 closure=1 cpool=0 bc=65B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t, n
// locals: r, o
// closure: ClientApiDecodeError
function {
  let r;
  for (const r of n) {
    try { // catch -> L_19
    return r(e, t);
    // [栈深重同步 0 -> 4]
    o = <?>;
    try { // catch -> L_2c
    if (!(!(o instanceof ClientApiDecodeError))) goto L_29;
    throw o;
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  throw new ClientApiDecodeError(t, "did not match any supported schema");
}

// fn d  args=3 vars=3 closure=1 cpool=0 bc=100B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t, n
// closure: ClientApiDecodeError
function {
  if (!(!n.includes(e))) goto L_62;
  throw new ClientApiDecodeError(t, ("expected one of " + n.join(", ")));
  return e;
}

// fn l  args=2 vars=7 closure=3 cpool=0 bc=282B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, n
// locals: o, a, r, i, c
// closure: ClientApiDecodeError, t, p
function {
  let c;
  let i;
  let r;
  let o;
  o = undefined;
  try { // catch -> L_45
  o = JSON.parse(e);
  JSON.parse(e);
  <?>;
  goto L_5a;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_59
  throw new ClientApiDecodeError(n, "returned invalid JSON");
  // [栈深重同步 0 -> 1]
  throw <?>;
  r = t(o, n);
  i = p(r);
  if (((true === r.isError))) goto L_97;
  if (!((undefined !== i))) goto L_b2;
  if (!((i == null))) goto L_ae;
  i;
  throw new Error((n + " returned an error response"));
  if (!((r.structuredContent == null))) goto L_ff;
  r.structuredContent;
  c = r.structured_content;
  if (!((undefined === c))) goto L_116;
  throw new ClientApiDecodeError(n, "response is missing structured content");
  return c;
}

// fn p  args=1 vars=3 closure=0 cpool=0 bc=651B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e
// locals: t, e#1
function {
  if (!(("string" == typeof e.error))) goto L_bf;
  if (!((e.error.trim().length > 0))) goto L_bf;
  return e.error.trim();   // tail call
  if (!(Array.isArray(e.content))) goto L_28a;
  let t;
  for (const t of e.content) {
    let e#1;
    if ((("object" != typeof t))) goto L_17f;
    if (((null === t))) goto L_17f;
    if ((Array.isArray(t))) continue;
    e#1 = t;
    if (!(("text" === e#1.type))) continue;
    if (!(("string" == typeof e#1.text))) continue;
    if (!((e#1.text.trim().length > 0))) continue;
    return e#1.text.trim();
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn f  args=2 vars=4 closure=1 cpool=0 bc=28B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, n
// locals: e#1, n#1
// closure: t
function {
  let n#1;
  let e#1;
  e#1 = e;
  if (!((n === undefined))) goto L_14;
  n;
  n = "EmptyToolRequest";
  n#1 = "EmptyToolRequest";
  t(e, n);
  return {};
}

// fn _  args=2 vars=5 closure=3 cpool=0 bc=133B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: n, r
// locals: n#1, r#1, i
// closure: t, o, e
function {
  let r#1;
  let n#1;
  n#1 = n;
  if (!((r === undefined))) goto L_14;
  r;
  r = "FinanceDateInterval";
  r#1 = "FinanceDateInterval";
  let i;
  i = t(n, r);
  return {start: o(i.start, e(r, "start")), end: o(i.end, e(r, "end"))};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=8B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o, s
function {
  return s(e, t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: _
function {
  return _(e, t);   // tail call
}

// fn y  args=2 vars=5 closure=6 cpool=3 bc=201B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: n, r
// locals: n#1, r#1, i
// closure: o, s, _, t, e, u
function {
  let r#1;
  let n#1;
  n#1 = n;
  if (!((r === undefined))) goto L_14;
  r;
  r = "FinanceTransactionFilter";
  r#1 = "FinanceTransactionFilter";
  let i;
  i = t(n, r);
  return {field: o(i.field, e(r, "field")), operator: o(i.operator, e(r, "operator")), value: u(i.value, e(r, "value"), [function <atom:0>, function <atom:0>, function <atom:0>])};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: y
function {
  return y(e, t);   // tail call
}

// fn m  args=2 vars=5 closure=8 cpool=3 bc=205B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: n, r
// locals: n#1, r#1, c
// closure: o, a, y, t, u, e, s, i
function {
  let r#1;
  let n#1;
  n#1 = n;
  if (!((r === undefined))) goto L_14;
  r;
  r = "ListTransactionsRequest";
  r#1 = "ListTransactionsRequest";
  let c;
  c = t(n, r);
  return {cursor: u(c.cursor, e(r, "cursor"), [function <atom:0>, function <atom:0>]), filters: s(c.filters, e(r, "filters"), function <atom:0>), limit: i(c.limit, e(r, "limit"))};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: r
function {
  return r(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn x  args=2 vars=5 closure=7 cpool=26 bc=1635B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: n, i
// locals: n#1, i#1, s
// closure: o, a, r, t, e, u, c
function {
  let i#1;
  let n#1;
  n#1 = n;
  if (!((i === undefined))) goto L_14;
  i;
  i = "FinanceTransaction";
  i#1 = "FinanceTransaction";
  let s;
  s = t(n, i);
  if (!((undefined === s.date))) goto L_b3;
  goto L_f2;
  // [栈深重同步 2 -> 1]
  null;
  {date: u(s.date, e(i, "date"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.datetime))) goto L_122;
  goto L_161;
  // [栈深重同步 2 -> 1]
  null;
  {datetime: u(s.datetime, e(i, "datetime"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.merchant_name))) goto L_191;
  goto L_1d0;
  // [栈深重同步 2 -> 1]
  null;
  {merchant_name: u(s.merchant_name, e(i, "merchant_name"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.amount_value))) goto L_200;
  goto L_23f;
  // [栈深重同步 2 -> 1]
  null;
  {amount_value: u(s.amount_value, e(i, "amount_value"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.amount_label))) goto L_26f;
  goto L_2ae;
  // [栈深重同步 2 -> 1]
  null;
  {amount_label: u(s.amount_label, e(i, "amount_label"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.iso_currency_code))) goto L_2de;
  goto L_31d;
  // [栈深重同步 2 -> 1]
  null;
  {iso_currency_code: u(s.iso_currency_code, e(i, "iso_currency_code"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.unofficial_currency_code))) goto L_34d;
  goto L_38c;
  // [栈深重同步 2 -> 1]
  null;
  {unofficial_currency_code: u(s.unofficial_currency_code, e(i, "unofficial_currency_code"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.account_id))) goto L_3f3;
  goto L_432;
  // [栈深重同步 2 -> 1]
  null;
  {account_id: u(s.account_id, e(i, "account_id"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.account_name))) goto L_462;
  goto L_4a1;
  // [栈深重同步 2 -> 1]
  null;
  {account_name: u(s.account_name, e(i, "account_name"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.category_primary))) goto L_4d1;
  goto L_510;
  // [栈深重同步 2 -> 1]
  null;
  {category_primary: u(s.category_primary, e(i, "category_primary"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.category_detailed))) goto L_540;
  goto L_57f;
  // [栈深重同步 2 -> 1]
  null;
  {category_detailed: u(s.category_detailed, e(i, "category_detailed"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.category_label))) goto L_5af;
  goto L_5ee;
  // [栈深重同步 2 -> 1]
  null;
  {category_label: u(s.category_label, e(i, "category_label"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.logo_url))) goto L_61e;
  goto L_65d;
  // [栈深重同步 2 -> 1]
  null;
  {logo_url: u(s.logo_url, e(i, "logo_url"), [function <atom:0>, function <atom:0>])};
  return {transaction_id: o(s.transaction_id, e(i, "transaction_id")), display_name: o(s.display_name, e(i, "display_name")), pending: c(s.pending, e(i, "pending"))};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: x
function {
  return x(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn v  args=2 vars=5 closure=7 cpool=3 bc=199B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: n, r
// locals: n#1, r#1, i
// closure: x, o, a, t, s, e, u
function {
  let r#1;
  let n#1;
  n#1 = n;
  if (!((r === undefined))) goto L_14;
  r;
  r = "ListTransactionsResponse";
  r#1 = "ListTransactionsResponse";
  let i;
  i = t(n, r);
  if (!((undefined === i.next_cursor))) goto L_82;
  goto L_c1;
  // [栈深重同步 2 -> 1]
  null;
  {next_cursor: u(i.next_cursor, e(r, "next_cursor"), [function <atom:0>, function <atom:0>])};
  return {transactions: s(i.transactions, e(r, "transactions"), function <atom:0>)};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn g  args=2 vars=5 closure=5 cpool=12 bc=736B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: n, r
// locals: n#1, r#1, i
// closure: o, a, t, e, u
function {
  let r#1;
  let n#1;
  n#1 = n;
  if (!((r === undefined))) goto L_14;
  r;
  r = "FinanceProfileAccount";
  r#1 = "FinanceProfileAccount";
  let i;
  i = t(n, r);
  if (!((undefined === i.display_account_type))) goto L_7c;
  goto L_b9;
  // [栈深重同步 2 -> 1]
  null;
  {display_account_type: u(i.display_account_type, e(r, "display_account_type"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === i.mask))) goto L_e9;
  goto L_126;
  // [栈深重同步 2 -> 1]
  null;
  {mask: u(i.mask, e(r, "mask"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === i.name))) goto L_156;
  goto L_193;
  // [栈深重同步 2 -> 1]
  null;
  {name: u(i.name, e(r, "name"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === i.official_name))) goto L_1c3;
  goto L_200;
  // [栈深重同步 2 -> 1]
  null;
  {official_name: u(i.official_name, e(r, "official_name"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === i.subtype))) goto L_230;
  goto L_26d;
  // [栈深重同步 2 -> 1]
  null;
  {subtype: u(i.subtype, e(r, "subtype"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === i.type))) goto L_29d;
  goto L_2da;
  // [栈深重同步 2 -> 1]
  null;
  {type: u(i.type, e(r, "type"), [function <atom:0>, function <atom:0>])};
  return {account_id: o(i.account_id, e(r, "account_id"))};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn A  args=2 vars=5 closure=5 cpool=2 bc=140B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: n, r
// locals: n#1, r#1, i
// closure: o, a, t, u, e
function {
  let r#1;
  let n#1;
  n#1 = n;
  if (!((r === undefined))) goto L_14;
  r;
  r = "FinanceInstitutionMetadata";
  r#1 = "FinanceInstitutionMetadata";
  let i;
  i = t(n, r);
  if (!((undefined === i.name))) goto L_49;
  goto L_86;
  // [栈深重同步 2 -> 1]
  null;
  {name: u(i.name, e(r, "name"), [function <atom:0>, function <atom:0>])};
  return {};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: A
function {
  return A(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: g
function {
  return g(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=8B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: g, s
function {
  return s(e, t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn h  args=2 vars=5 closure=7 cpool=4 bc=206B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: n, o
// locals: n#1, o#1, r
// closure: A, a, g, s, t, u, e
function {
  let o#1;
  let n#1;
  n#1 = n;
  if (!((o === undefined))) goto L_14;
  o;
  o = "FinanceInstitution";
  o#1 = "FinanceInstitution";
  let r;
  r = t(n, o);
  if (!((undefined === r.institution))) goto L_4b;
  goto L_8a;
  // [栈深重同步 2 -> 1]
  null;
  {institution: u(r.institution, e(o, "institution"), [function <atom:0>, function <atom:0>])};
  return {accounts: u(r.accounts, e(o, "accounts"), [function <atom:0>, function <atom:0>])};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: h
function {
  return h(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=8B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: h, s
function {
  return s(e, t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e, t
// closure: a
function {
  return a(e, t);   // tail call
}

// fn w  args=2 vars=5 closure=6 cpool=2 bc=142B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: n, o
// locals: n#1, o#1, r
// closure: h, s, a, t, u, e
function {
  let o#1;
  let n#1;
  n#1 = n;
  if (!((o === undefined))) goto L_14;
  o;
  o = "GetUserProfileResponse";
  o#1 = "GetUserProfileResponse";
  let r;
  r = t(n, o);
  if (!((undefined === r.institutions))) goto L_49;
  goto L_88;
  // [栈深重同步 2 -> 1]
  null;
  {institutions: u(r.institutions, e(o, "institutions"), [function <atom:0>, function <atom:0>])};
  return {};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.transport = e;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=149B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e
// locals: t, this
// closure: f, w, l
function {
  this = this;
  let t;
  t = f(e, "getUserProfile.request");
  return w(l((await this.transport.callTool("get_user_profile", JSON.stringify(t))), "get_user_profile"), "getUserProfile.response"); // async
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=149B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: e
// locals: t, this
// closure: m, v, l
function {
  this = this;
  let t;
  t = m(e, "listTransactions.request");
  return v(l((await this.transport.callTool("list_transactions", JSON.stringify(t))), "list_transactions"), "listTransactions.response"); // async
}

// fn <atom:0>  args=3 vars=32 closure=0 cpool=27 bc=501B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// args: require, module, exports
// locals: ClientApiDecodeError, <class_fields_init>, ClientApiDecodeError#1, e, t, n, o, r, i, c, a, s, u, d, l, p, f, _, y, m, x, v, g, A, h, w, FinanceTransactionsApiClient, <class_fields_init>#1, FinanceTransactionsApiClient#1
function {
  e = function e;
  t = function t;
  n = function n;
  o = function o;
  r = function r;
  i = function i;
  c = function c;
  a = function a;
  s = function s;
  u = function u;
  d = function d;
  l = function l;
  p = function p;
  f = function f;
  _ = function _;
  y = function y;
  m = function m;
  x = function x;
  v = function v;
  g = function g;
  A = function A;
  h = function h;
  w = function w;
  let FinanceTransactionsApiClient#1;
  let ClientApiDecodeError#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ClientApiDecodeError = undefined;
  exports.decodeEmptyToolRequest = undefined;
  exports.decodeFinanceDateInterval = undefined;
  exports.decodeFinanceTransactionFilter = undefined;
  exports.decodeListTransactionsRequest = undefined;
  exports.decodeFinanceTransaction = undefined;
  exports.decodeListTransactionsResponse = undefined;
  exports.decodeFinanceProfileAccount = undefined;
  exports.decodeFinanceInstitutionMetadata = undefined;
  exports.decodeFinanceInstitution = undefined;
  exports.decodeGetUserProfileResponse = undefined;
  exports.FinanceTransactionsApiClient = undefined;
  let ClientApiDecodeError;
  let <class_fields_init>;
  class ClientApiDecodeError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:ClientApiDecodeError>;
  ClientApiDecodeError = function <atom:0>;
  // close_loc <class_fields_init>
  ClientApiDecodeError#1 = function <atom:0>;
  exports.ClientApiDecodeError = ClientApiDecodeError#1;
  exports.decodeEmptyToolRequest = f;
  exports.decodeFinanceDateInterval = _;
  exports.decodeFinanceTransactionFilter = y;
  exports.decodeListTransactionsRequest = m;
  exports.decodeFinanceTransaction = x;
  exports.decodeListTransactionsResponse = v;
  exports.decodeFinanceProfileAccount = g;
  exports.decodeFinanceInstitutionMetadata = A;
  exports.decodeFinanceInstitution = h;
  exports.decodeGetUserProfileResponse = w;
  let FinanceTransactionsApiClient;
  let <class_fields_init>#1;
  class FinanceTransactionsApiClient extends undefined { ... }
  <proto:FinanceTransactionsApiClient>.getUserProfile = function <atom:0>;
  <proto:FinanceTransactionsApiClient>.listTransactions = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:FinanceTransactionsApiClient>;
  FinanceTransactionsApiClient = function <atom:0>;
  // close_loc <class_fields_init>#1
  FinanceTransactionsApiClient#1 = function <atom:0>;
  exports.FinanceTransactionsApiClient = FinanceTransactionsApiClient#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance_transactions/src/generated/FinanceTransactionsApiClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
