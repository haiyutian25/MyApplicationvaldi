// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=107B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(((e + ": HTTP ") + String(t)));
  if (!(<class_fields_init>)) goto L_30;
  <class_fields_init>.call(this);
  new new.target(((e + ": HTTP ") + String(t)));
  this.operation = e;
  this.statusCode = t;
  this.message = ((e + ": HTTP ") + String(t));
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=91B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target((e + ": HTTP transport failed"));
  if (!(<class_fields_init>)) goto L_28;
  <class_fields_init>.call(this);
  new new.target((e + ": HTTP transport failed"));
  this.operation = e;
  this.failure = t;
  this.message = (e + ": HTTP transport failed");
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=82B file=chatgpt_finance/src/generated/FinanceSheepApiClient
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

// fn e  args=2 vars=2 closure=0 cpool=0 bc=10B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
function {
  return ((e + ".") + t);
}

// fn t  args=2 vars=2 closure=1 cpool=0 bc=79B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if ((("object" != typeof e))) goto L_3d;
  if (((null === e))) goto L_3d;
  if (!(Array.isArray(e))) goto L_4d;
  throw new ClientApiDecodeError(t, "expected object");
  return e;
}

// fn i  args=3 vars=6 closure=2 cpool=0 bc=97B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, n, o
// locals: r, s, t
// closure: t, e
function {
  let s;
  let r;
  r = t(i, n);
  s = {};
  let t;
  for (const t of Object.keys(r)) {
    s[t] = o(r[t], e(n, t));
  }
  return s;
}

// fn n  args=2 vars=2 closure=1 cpool=0 bc=26B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if (!(("string" != typeof e))) goto L_18;
  throw new ClientApiDecodeError(t, "expected string");
  return e;
}

// fn o  args=2 vars=2 closure=1 cpool=0 bc=73B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if ((("number" != typeof e))) goto L_37;
  if (!(!Number.isFinite(e))) goto L_47;
  throw new ClientApiDecodeError(t, "expected finite number");
  return e;
}

// fn r  args=2 vars=3 closure=2 cpool=0 bc=73B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// locals: i
// closure: o, ClientApiDecodeError
function {
  let i;
  i = o(e, t);
  if (!(!Number.isInteger(i))) goto L_45;
  throw new ClientApiDecodeError(t, "expected integer");
  return i;
}

// fn s  args=2 vars=2 closure=1 cpool=0 bc=26B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if (!(("boolean" != typeof e))) goto L_18;
  throw new ClientApiDecodeError(t, "expected boolean");
  return e;
}

// fn d  args=2 vars=2 closure=1 cpool=0 bc=21B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if (!((null !== e))) goto L_13;
  throw new ClientApiDecodeError(t, "expected null");
  return null;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=26B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, n
// closure: i, t
function {
  return i(e, (((t + "[") + String(n)) + "]"));   // tail call
}

// fn a  args=3 vars=3 closure=1 cpool=1 bc=98B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t, i
// closure: ClientApiDecodeError
function {
  if (!(!Array.isArray(e))) goto L_3b;
  throw new ClientApiDecodeError(t, "expected array");
  return e.map(function <atom:0>);   // tail call
}

// fn c  args=3 vars=5 closure=1 cpool=0 bc=65B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t, i
// locals: o, n
// closure: ClientApiDecodeError
function {
  let o;
  for (const o of i) {
    try { // catch -> L_19
    return o(e, t);
    // [栈深重同步 0 -> 4]
    n = <?>;
    try { // catch -> L_2c
    if (!(!(n instanceof ClientApiDecodeError))) goto L_29;
    throw n;
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  throw new ClientApiDecodeError(t, "did not match any supported schema");
}

// fn u  args=3 vars=3 closure=1 cpool=0 bc=100B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t, i
// closure: ClientApiDecodeError
function {
  if (!(!i.includes(e))) goto L_62;
  throw new ClientApiDecodeError(t, ("expected one of " + i.join(", ")));
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=18B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e
// closure: r, d
function {
  if ((r)) goto L_11;
  r = true;
  true;
  d(e);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=7 cpool=0 bc=586B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e
// locals: d, o, u, t
// closure: ClientApiDecodeError, n, ClientApiHTTPError, i, r, s, a
function {
  try { // catch -> L_223
  let d;
  if ((!Number.isInteger(e.statusCode))) goto L_a7;
  if (((e.statusCode < 100))) goto L_a7;
  if (!((e.statusCode > 599))) goto L_b7;
  throw new ClientApiDecodeError(n, "response has invalid HTTP status");
  if (((e.statusCode < 200))) goto L_107;
  if (!((e.statusCode >= 300))) goto L_134;
  throw new ClientApiHTTPError(n, e.statusCode);
  if (((undefined === e.bodyText))) goto L_181;
  if (!((0 === e.bodyText.length))) goto L_191;
  throw new ClientApiDecodeError(n, "response body is empty");
  d = undefined;
  try { // catch -> L_1eb
  d = JSON.parse(e.bodyText);
  JSON.parse(e.bodyText);
  <?>;
  goto L_200;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_1ff
  throw new ClientApiDecodeError(n, "response body is invalid JSON");
  // [栈深重同步 0 -> 1]
  throw <?>;
  t = i(d, (n + ".response"));
  if ((r)) goto L_220;
  r = true;
  true;
  s(t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  u = <?>;
  try { // catch -> L_249
  if (!((u instanceof Error))) goto L_238;
  goto L_245;
  // [栈深重同步 2 -> 1]
  a(new ClientApiDecodeError(n, "response failed"));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=14B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e
// closure: a, ClientApiHTTPTransportError, n
function {
  a(new ClientApiHTTPTransportError(n, e));
  return;
}

// fn <atom:0>  args=2 vars=6 closure=9 cpool=3 bc=167B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: s, d
// locals: a, c, u, _
// closure: r, ClientApiDecodeError, n, ClientApiHTTPError, i, ClientApiHTTPTransportError, t, o, e
function {
  let c;
  let a;
  a = function <atom:0>;
  c = undefined;
  try { // catch -> L_21
  c = t();
  t();
  <?>;
  goto L_49;
  // [栈深重同步 0 -> 1]
  u = <?>;
  try { // catch -> L_48
  if (!((u instanceof Error))) goto L_36;
  goto L_43;
  // [栈深重同步 2 -> 1]
  a(new ClientApiDecodeError(n, "request failed"));
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  try { // catch -> L_90
  o = e.send(c, {onResponse: function <atom:0>, onFailure: function <atom:0>});
  e.send(c, {onResponse: function <atom:0>, onFailure: function <atom:0>});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  _ = <?>;
  try { // catch -> L_a6
  a(new ClientApiHTTPTransportError(n, undefined));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=55B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// closure: r, o
function {
  if ((r)) goto L_36;
  if (!((o == null))) goto L_12;
  o;
  goto L_36;
  undefined.cancel();
  return;
}

// fn _  args=4 vars=6 closure=3 cpool=2 bc=37B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t, i, n
// locals: o, r
// closure: ClientApiDecodeError, ClientApiHTTPError, ClientApiHTTPTransportError
function {
  let r;
  let o;
  o = undefined;
  r = false;
  return {result: new Promise(function <atom:0>), cancel: function <atom:0>};
}

// fn p  args=2 vars=8 closure=1 cpool=0 bc=369B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// locals: i, n, o, e#1, t#1, i#1
// closure: ClientApiDecodeError
function {
  let n;
  let i;
  i = t;
  n = [];
  let o;
  for (const o of Object.keys(i)) {
    let t#1;
    let e#1;
    e#1 = i[o];
    if (((null == e#1))) continue;
    if (!(Array.isArray(e#1))) goto L_8b;
    goto L_91;
    // [栈深重同步 4 -> 3]
    t#1 = [e#1];
    let i#1;
    for (const i#1 of t#1) {
      if (!(("string" != typeof i#1))) goto L_d9;
      if (!(("number" != typeof i#1))) goto L_d9;
      if (!(("boolean" != typeof i#1))) goto L_d9;
      throw new ClientApiDecodeError(("query." + o), "expected scalar query value");
      n.push(((encodeURIComponent(o) + "=") + encodeURIComponent(String(i#1))));
      // [栈深重同步 3 -> 6]
    }
  }
  if (!((0 === n.length))) goto L_13c;
  return e;
  return ((e + "?") + n.join("&"));
}

// fn l  args=2 vars=4 closure=3 cpool=0 bc=75B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, o
// locals: i#1, o#1
// closure: n, t, e
function {
  let o#1;
  let i#1;
  i#1 = i;
  if (!((o === undefined))) goto L_14;
  o;
  o = "AccountLinkingStateRequest";
  o#1 = "AccountLinkingStateRequest";
  return {oauth_state_id: n(t(i, o).oauth_state_id, e(o, "oauth_state_id"))};
}

// fn f  args=2 vars=4 closure=1 cpool=0 bc=28B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, i
// locals: e#1, i#1
// closure: t
function {
  let i#1;
  let e#1;
  e#1 = e;
  if (!((i === undefined))) goto L_14;
  i;
  i = "AccountLinksRequest";
  i#1 = "AccountLinksRequest";
  t(e, i);
  return {};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: r
function {
  return r(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn g  args=2 vars=5 closure=6 cpool=2 bc=444B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, n
// locals: i#1, n#1, o
// closure: r, d, t, e, c, s
function {
  let n#1;
  let i#1;
  i#1 = i;
  if (!((n === undefined))) goto L_14;
  n;
  n = "DashboardWidgetsRequest";
  n#1 = "DashboardWidgetsRequest";
  let o;
  o = t(i, n);
  if (!((undefined === o.dashboard_offset))) goto L_49;
  goto L_7d;
  // [栈深重同步 2 -> 1]
  null;
  {dashboard_offset: r(o.dashboard_offset, e(n, "dashboard_offset"))};
  if (!((undefined === o.dashboard_limit))) goto L_ad;
  goto L_ea;
  // [栈深重同步 2 -> 1]
  null;
  {dashboard_limit: c(o.dashboard_limit, e(n, "dashboard_limit"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === o.include_dashboard))) goto L_11a;
  goto L_150;
  // [栈深重同步 2 -> 1]
  null;
  {include_dashboard: s(o.include_dashboard, e(n, "include_dashboard"))};
  if (!((undefined === o.include_onboarding))) goto L_180;
  goto L_1b6;
  // [栈深重同步 2 -> 1]
  null;
  {include_onboarding: s(o.include_onboarding, e(n, "include_onboarding"))};
  return {};
}

// fn b  args=2 vars=4 closure=0 cpool=0 bc=23B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// locals: e#1, t#1
function {
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_14;
  t;
  t = "JsonValue";
  t#1 = "JsonValue";
  return e;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: m
function {
  return m(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn h  args=2 vars=5 closure=6 cpool=16 bc=1025B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, o
// locals: i#1, o#1, r
// closure: n, d, m, t, c, e
function {
  let o#1;
  let i#1;
  i#1 = i;
  if (!((o === undefined))) goto L_14;
  o;
  o = "LedgerAccountResponse";
  o#1 = "LedgerAccountResponse";
  let r;
  r = t(i, o);
  if (!((undefined === r.account_id))) goto L_49;
  goto L_88;
  // [栈深重同步 2 -> 1]
  null;
  {account_id: c(r.account_id, e(o, "account_id"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === r.balances))) goto L_b8;
  goto L_f7;
  // [栈深重同步 2 -> 1]
  null;
  {balances: c(r.balances, e(o, "balances"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === r.institution_id))) goto L_15c;
  goto L_19b;
  // [栈深重同步 2 -> 1]
  null;
  {institution_id: c(r.institution_id, e(o, "institution_id"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === r.item_id))) goto L_1cb;
  goto L_20a;
  // [栈深重同步 2 -> 1]
  null;
  {item_id: c(r.item_id, e(o, "item_id"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === r.mask))) goto L_23a;
  goto L_279;
  // [栈深重同步 2 -> 1]
  null;
  {mask: c(r.mask, e(o, "mask"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === r.official_name))) goto L_2de;
  goto L_31d;
  // [栈深重同步 2 -> 1]
  null;
  {official_name: c(r.official_name, e(o, "official_name"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === r.subtype))) goto L_34d;
  goto L_38c;
  // [栈深重同步 2 -> 1]
  null;
  {subtype: c(r.subtype, e(o, "subtype"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === r.type))) goto L_3bc;
  goto L_3fb;
  // [栈深重同步 2 -> 1]
  null;
  {type: c(r.type, e(o, "type"), [function <atom:0>, function <atom:0>])};
  return {display_account_type: n(r.display_account_type, e(o, "display_account_type")), name: n(r.name, e(o, "name"))};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn m  args=2 vars=5 closure=6 cpool=14 bc=861B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, r
// locals: i#1, r#1, s
// closure: o, d, n, t, c, e
function {
  let r#1;
  let i#1;
  i#1 = i;
  if (!((r === undefined))) goto L_14;
  r;
  r = "LedgerBalanceResponse";
  r#1 = "LedgerBalanceResponse";
  let s;
  s = t(i, r);
  if (!((undefined === s.available))) goto L_49;
  goto L_88;
  // [栈深重同步 2 -> 1]
  null;
  {available: c(s.available, e(r, "available"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.current))) goto L_b8;
  goto L_f7;
  // [栈深重同步 2 -> 1]
  null;
  {current: c(s.current, e(r, "current"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.iso_currency_code))) goto L_15c;
  goto L_19b;
  // [栈深重同步 2 -> 1]
  null;
  {iso_currency_code: c(s.iso_currency_code, e(r, "iso_currency_code"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.last_updated_datetime))) goto L_1cb;
  goto L_20a;
  // [栈深重同步 2 -> 1]
  null;
  {last_updated_datetime: c(s.last_updated_datetime, e(r, "last_updated_datetime"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.limit))) goto L_23a;
  goto L_279;
  // [栈深重同步 2 -> 1]
  null;
  {limit: c(s.limit, e(r, "limit"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.net))) goto L_2a9;
  goto L_2e8;
  // [栈深重同步 2 -> 1]
  null;
  {net: c(s.net, e(r, "net"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.unofficial_currency_code))) goto L_318;
  goto L_357;
  // [栈深重同步 2 -> 1]
  null;
  {unofficial_currency_code: c(s.unofficial_currency_code, e(r, "unofficial_currency_code"), [function <atom:0>, function <atom:0>])};
  return {display: o(s.display, e(r, "display"))};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: h
function {
  return h(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn k  args=2 vars=5 closure=9 cpool=7 bc=743B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, o
// locals: i#1, o#1, u
// closure: h, n, d, t, a, e, r, c, s
function {
  let o#1;
  let i#1;
  i#1 = i;
  if (!((o === undefined))) goto L_14;
  o;
  o = "LedgerLinkResponse";
  o#1 = "LedgerLinkResponse";
  let u;
  u = t(i, o);
  if (!((undefined === u.institution_logo))) goto L_ee;
  goto L_12d;
  // [栈深重同步 2 -> 1]
  null;
  {institution_logo: c(u.institution_logo, e(o, "institution_logo"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === u.institution_name))) goto L_15d;
  goto L_19c;
  // [栈深重同步 2 -> 1]
  null;
  {institution_name: c(u.institution_name, e(o, "institution_name"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === u.item_id))) goto L_203;
  goto L_242;
  // [栈深重同步 2 -> 1]
  null;
  {item_id: c(u.item_id, e(o, "item_id"), [function <atom:0>, function <atom:0>])};
  return {accounts: a(u.accounts, e(o, "accounts"), function <atom:0>), accounts_num: r(u.accounts_num, e(o, "accounts_num")), id: n(u.id, e(o, "id")), is_financekit_link: s(u.is_financekit_link, e(o, "is_financekit_link")), last_update: n(u.last_update, e(o, "last_update")), status: n(u.status, e(o, "status")), sync_status: n(u.sync_status, e(o, "sync_status"))};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn y  args=2 vars=5 closure=6 cpool=4 bc=261B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, o
// locals: i#1, o#1, s
// closure: n, d, t, r, e, c
function {
  let o#1;
  let i#1;
  i#1 = i;
  if (!((o === undefined))) goto L_14;
  o;
  o = "LedgerOAuthLinkedInstitutionResponse";
  o#1 = "LedgerOAuthLinkedInstitutionResponse";
  let s;
  s = t(i, o);
  return {account_count: r(s.account_count, e(o, "account_count")), institution_id: n(s.institution_id, e(o, "institution_id")), logo: c(s.logo, e(o, "logo"), [function <atom:0>, function <atom:0>]), name: c(s.name, e(o, "name"), [function <atom:0>, function <atom:0>])};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: y
function {
  return y(e, t);   // tail call
}

// fn L  args=2 vars=5 closure=7 cpool=1 bc=368B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, n
// locals: i#1, n#1, o
// closure: y, t, r, e, s, a, u
function {
  let n#1;
  let i#1;
  i#1 = i;
  if (!((n === undefined))) goto L_14;
  n;
  n = "LedgerOAuthStateResponse";
  n#1 = "LedgerOAuthStateResponse";
  let o;
  o = t(i, n);
  if (!((undefined === o.linked_institutions))) goto L_e6;
  goto L_11e;
  // [栈深重同步 2 -> 1]
  null;
  {linked_institutions: a(o.linked_institutions, e(n, "linked_institutions"), function <atom:0>)};
  return {connected_accounts: r(o.connected_accounts, e(n, "connected_accounts")), finished: s(o.finished, e(n, "finished")), is_prod: s(o.is_prod, e(n, "is_prod")), status: u(o.status, e(n, "status"), ["initializing", "linked", "error", "disconnected"])};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: x
function {
  return x(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn v  args=2 vars=5 closure=6 cpool=26 bc=996B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, o
// locals: i#1, o#1, r
// closure: n, d, x, t, e, c
function {
  let o#1;
  let i#1;
  i#1 = i;
  if (!((o === undefined))) goto L_14;
  o;
  o = "LedgerProfileAccountResponse";
  o#1 = "LedgerProfileAccountResponse";
  let r;
  r = t(i, o);
  return {account_created_at: n(r.account_created_at, e(o, "account_created_at")), account_id: c(r.account_id, e(o, "account_id"), [function <atom:0>, function <atom:0>]), account_updated_at: n(r.account_updated_at, e(o, "account_updated_at")), balances: c(r.balances, e(o, "balances"), [function <atom:0>, function <atom:0>]), balances_updated_at: c(r.balances_updated_at, e(o, "balances_updated_at"), [function <atom:0>, function <atom:0>]), holder_category: c(r.holder_category, e(o, "holder_category"), [function <atom:0>, function <atom:0>]), institution_id: c(r.institution_id, e(o, "institution_id"), [function <atom:0>, function <atom:0>]), item_id: c(r.item_id, e(o, "item_id"), [function <atom:0>, function <atom:0>]), last_successful_update: c(r.last_successful_update, e(o, "last_successful_update"), [function <atom:0>, function <atom:0>]), mask: c(r.mask, e(o, "mask"), [function <atom:0>, function <atom:0>]), name: c(r.name, e(o, "name"), [function <atom:0>, function <atom:0>]), official_name: c(r.official_name, e(o, "official_name"), [function <atom:0>, function <atom:0>]), persistent_account_id: c(r.persistent_account_id, e(o, "persistent_account_id"), [function <atom:0>, function <atom:0>]), provider: n(r.provider, e(o, "provider")), subtype: c(r.subtype, e(o, "subtype"), [function <atom:0>, function <atom:0>]), type: c(r.type, e(o, "type"), [function <atom:0>, function <atom:0>])};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn x  args=2 vars=5 closure=6 cpool=16 bc=527B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, r
// locals: i#1, r#1, s
// closure: o, d, n, t, c, e
function {
  let r#1;
  let i#1;
  i#1 = i;
  if (!((r === undefined))) goto L_14;
  r;
  r = "LedgerProfileBalanceResponse";
  r#1 = "LedgerProfileBalanceResponse";
  let s;
  s = t(i, r);
  return {available: c(s.available, e(r, "available"), [function <atom:0>, function <atom:0>]), current: c(s.current, e(r, "current"), [function <atom:0>, function <atom:0>]), display_balance: c(s.display_balance, e(r, "display_balance"), [function <atom:0>, function <atom:0>]), iso_currency_code: c(s.iso_currency_code, e(r, "iso_currency_code"), [function <atom:0>, function <atom:0>]), last_updated_datetime: c(s.last_updated_datetime, e(r, "last_updated_datetime"), [function <atom:0>, function <atom:0>]), limit: c(s.limit, e(r, "limit"), [function <atom:0>, function <atom:0>]), net_balance: c(s.net_balance, e(r, "net_balance"), [function <atom:0>, function <atom:0>]), unofficial_currency_code: c(s.unofficial_currency_code, e(r, "unofficial_currency_code"), [function <atom:0>, function <atom:0>])};
}

// fn R  args=2 vars=5 closure=3 cpool=0 bc=286B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, n
// locals: i#1, n#1, o
// closure: t, s, e
function {
  let n#1;
  let i#1;
  i#1 = i;
  if (!((n === undefined))) goto L_14;
  n;
  n = "LedgerProfileCapabilitiesResponse";
  n#1 = "LedgerProfileCapabilitiesResponse";
  let o;
  o = t(i, n);
  return {credit_score: s(o.credit_score, e(n, "credit_score")), linked_accounts: s(o.linked_accounts, e(n, "linked_accounts")), manual_accounts: s(o.manual_accounts, e(n, "manual_accounts")), stock_watchlist: s(o.stock_watchlist, e(n, "stock_watchlist")), taxes: s(o.taxes, e(n, "taxes"))};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=8B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n, a
function {
  return a(e, t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=8B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n, a
function {
  return a(e, t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: s
function {
  return s(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=8B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n, a
function {
  return a(e, t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=8B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n, a
function {
  return a(e, t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn A  args=2 vars=5 closure=7 cpool=18 bc=803B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, o
// locals: i#1, o#1, r
// closure: n, a, d, s, t, c, e
function {
  let o#1;
  let i#1;
  i#1 = i;
  if (!((o === undefined))) goto L_14;
  o;
  o = "LedgerProfileInstitutionResponse";
  o#1 = "LedgerProfileInstitutionResponse";
  let r;
  r = t(i, o);
  return {country_codes: c(r.country_codes, e(o, "country_codes"), [function <atom:0>, function <atom:0>]), dtc_numbers: c(r.dtc_numbers, e(o, "dtc_numbers"), [function <atom:0>, function <atom:0>]), has_oauth: c(r.has_oauth, e(o, "has_oauth"), [function <atom:0>, function <atom:0>]), id: n(r.id, e(o, "id")), institution_created_at: n(r.institution_created_at, e(o, "institution_created_at")), institution_updated_at: n(r.institution_updated_at, e(o, "institution_updated_at")), logo: c(r.logo, e(o, "logo"), [function <atom:0>, function <atom:0>]), name: c(r.name, e(o, "name"), [function <atom:0>, function <atom:0>]), primary_color: c(r.primary_color, e(o, "primary_color"), [function <atom:0>, function <atom:0>]), products: c(r.products, e(o, "products"), [function <atom:0>, function <atom:0>]), provider: n(r.provider, e(o, "provider")), routing_numbers: c(r.routing_numbers, e(o, "routing_numbers"), [function <atom:0>, function <atom:0>]), url: c(r.url, e(o, "url"), [function <atom:0>, function <atom:0>])};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: v
function {
  return v(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: A
function {
  return A(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn P  args=2 vars=5 closure=9 cpool=10 bc=821B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, o
// locals: i#1, o#1, r
// closure: v, n, d, A, t, a, e, c, s
function {
  let o#1;
  let i#1;
  i#1 = i;
  if (!((o === undefined))) goto L_14;
  o;
  o = "LedgerProfileLinkResponse";
  o#1 = "LedgerProfileLinkResponse";
  let r;
  r = t(i, o);
  return {accounts: a(r.accounts, e(o, "accounts"), function <atom:0>), connection_error_code: c(r.connection_error_code, e(o, "connection_error_code"), [function <atom:0>, function <atom:0>]), connection_error_detected_at: c(r.connection_error_detected_at, e(o, "connection_error_detected_at"), [function <atom:0>, function <atom:0>]), connection_error_type: c(r.connection_error_type, e(o, "connection_error_type"), [function <atom:0>, function <atom:0>]), created_at: n(r.created_at, e(o, "created_at")), data_products: a(r.data_products, e(o, "data_products"), function <atom:0>), id: n(r.id, e(o, "id")), institution: c(r.institution, e(o, "institution"), [function <atom:0>, function <atom:0>]), is_financekit_link: s(r.is_financekit_link, e(o, "is_financekit_link")), item_id: n(r.item_id, e(o, "item_id")), provider: n(r.provider, e(o, "provider")), status: n(r.status, e(o, "status")), sync_status: n(r.sync_status, e(o, "sync_status")), updated_at: n(r.updated_at, e(o, "updated_at"))};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn T  args=2 vars=5 closure=6 cpool=8 bc=675B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, o
// locals: i#1, o#1, r
// closure: n, d, t, c, e, s
function {
  let o#1;
  let i#1;
  i#1 = i;
  if (!((o === undefined))) goto L_14;
  o;
  o = "LedgerStartOAuthFlowRequest";
  o#1 = "LedgerStartOAuthFlowRequest";
  let r;
  r = t(i, o);
  if (!((undefined === r.android_package_name))) goto L_49;
  goto L_86;
  // [栈深重同步 2 -> 1]
  null;
  {android_package_name: c(r.android_package_name, e(o, "android_package_name"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === r.flow_id))) goto L_b6;
  goto L_f3;
  // [栈深重同步 2 -> 1]
  null;
  {flow_id: c(r.flow_id, e(o, "flow_id"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === r.institution_id))) goto L_123;
  goto L_160;
  // [栈深重同步 2 -> 1]
  null;
  {institution_id: c(r.institution_id, e(o, "institution_id"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === r.link_id))) goto L_190;
  goto L_1cd;
  // [栈深重同步 2 -> 1]
  null;
  {link_id: c(r.link_id, e(o, "link_id"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === r.native_android))) goto L_1fd;
  goto L_235;
  // [栈深重同步 2 -> 1]
  null;
  {native_android: s(r.native_android, e(o, "native_android"))};
  if (!((undefined === r.native_ios))) goto L_265;
  goto L_29d;
  // [栈深重同步 2 -> 1]
  null;
  {native_ios: s(r.native_ios, e(o, "native_ios"))};
  return {};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=19B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: u
function {
  return u(e, t, ["live", "simulated"]);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: n
function {
  return n(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn w  args=2 vars=5 closure=6 cpool=6 bc=519B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, o
// locals: i#1, o#1, r
// closure: u, d, n, t, c, e
function {
  let o#1;
  let i#1;
  i#1 = i;
  if (!((o === undefined))) goto L_14;
  o;
  o = "LedgerStartOAuthFlowResponse";
  o#1 = "LedgerStartOAuthFlowResponse";
  let r;
  r = t(i, o);
  if (!((undefined === r.finance_kit_sync_behavior))) goto L_49;
  goto L_88;
  // [栈深重同步 2 -> 1]
  null;
  {finance_kit_sync_behavior: c(r.finance_kit_sync_behavior, e(o, "finance_kit_sync_behavior"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === r.plaid_user_id))) goto L_ed;
  goto L_12c;
  // [栈深重同步 2 -> 1]
  null;
  {plaid_user_id: c(r.plaid_user_id, e(o, "plaid_user_id"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === r.provider))) goto L_15c;
  goto L_192;
  // [栈深重同步 2 -> 1]
  null;
  {provider: n(r.provider, e(o, "provider"))};
  if (!((undefined === r.token))) goto L_1c2;
  goto L_201;
  // [栈深重同步 2 -> 1]
  null;
  {token: c(r.token, e(o, "token"), [function <atom:0>, function <atom:0>])};
  return {oauth_state_id: n(r.oauth_state_id, e(o, "oauth_state_id"))};
}

// fn C  args=2 vars=5 closure=3 cpool=0 bc=133B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, o
// locals: i#1, o#1, r
// closure: t, n, e
function {
  let o#1;
  let i#1;
  i#1 = i;
  if (!((o === undefined))) goto L_14;
  o;
  o = "LedgerSubmitPlaidPublicTokenRequest";
  o#1 = "LedgerSubmitPlaidPublicTokenRequest";
  let r;
  r = t(i, o);
  return {link_token: n(r.link_token, e(o, "link_token")), public_token: n(r.public_token, e(o, "public_token"))};
}

// fn E  args=2 vars=5 closure=3 cpool=0 bc=131B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, o
// locals: i#1, o#1, r
// closure: t, n, e
function {
  let o#1;
  let i#1;
  i#1 = i;
  if (!((o === undefined))) goto L_14;
  o;
  o = "LedgerSubmitPlaidPublicTokenResponse";
  o#1 = "LedgerSubmitPlaidPublicTokenResponse";
  let r;
  r = t(i, o);
  if (!((undefined === r.status))) goto L_49;
  goto L_7d;
  // [栈深重同步 2 -> 1]
  null;
  {status: n(r.status, e(o, "status"))};
  return {};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: P
function {
  return P(e, t);   // tail call
}

// fn S  args=2 vars=5 closure=5 cpool=1 bc=137B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, n
// locals: i#1, n#1, o
// closure: P, t, R, e, a
function {
  let n#1;
  let i#1;
  i#1 = i;
  if (!((n === undefined))) goto L_14;
  n;
  n = "LedgerUserProfileResponse";
  n#1 = "LedgerUserProfileResponse";
  let o;
  o = t(i, n);
  return {capabilities: R(o.capabilities, e(n, "capabilities")), institutions: a(o.institutions, e(n, "institutions"), function <atom:0>)};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=19B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: u
function {
  return u(e, t, ["full", "half"]);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: r
function {
  return r(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: b
function {
  return b(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=8B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: b, i
function {
  return i(e, t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=11B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: u
function {
  return u(e, t, [1, 2]);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: b
function {
  return b(e, t);   // tail call
}

// fn q  args=2 vars=5 closure=9 cpool=9 bc=589B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: o, s
// locals: o#1, s#1, a
// closure: u, d, r, b, i, t, c, e, n
function {
  let s#1;
  let o#1;
  o#1 = o;
  if (!((s === undefined))) goto L_14;
  s;
  s = "LedgerWidgetItemResponse";
  s#1 = "LedgerWidgetItemResponse";
  let a;
  a = t(o, s);
  if (!((undefined === a.dashboard_placement))) goto L_4b;
  goto L_8a;
  // [栈深重同步 2 -> 1]
  null;
  {dashboard_placement: c(a.dashboard_placement, e(s, "dashboard_placement"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === a.dashboard_rank))) goto L_ba;
  goto L_f9;
  // [栈深重同步 2 -> 1]
  null;
  {dashboard_rank: c(a.dashboard_rank, e(s, "dashboard_rank"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === a.initial_state))) goto L_160;
  goto L_19f;
  // [栈深重同步 2 -> 1]
  null;
  {initial_state: c(a.initial_state, e(s, "initial_state"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === a.span))) goto L_1cf;
  goto L_20e;
  // [栈深重同步 2 -> 1]
  null;
  {span: c(a.span, e(s, "span"), [function <atom:0>, function <atom:0>])};
  return {id: n(a.id, e(s, "id")), widget: i(a.widget, e(s, "widget"), function <atom:0>)};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: r
function {
  return r(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: d
function {
  return d(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: q
function {
  return q(e, t);   // tail call
}

// fn D  args=2 vars=5 closure=7 cpool=3 bc=199B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, n
// locals: i#1, n#1, o
// closure: r, d, q, t, c, e, a
function {
  let n#1;
  let i#1;
  i#1 = i;
  if (!((n === undefined))) goto L_14;
  n;
  n = "LedgerWidgetResponse";
  n#1 = "LedgerWidgetResponse";
  let o;
  o = t(i, n);
  if (!((undefined === o.dashboard_next_offset))) goto L_49;
  goto L_88;
  // [栈深重同步 2 -> 1]
  null;
  {dashboard_next_offset: c(o.dashboard_next_offset, e(n, "dashboard_next_offset"), [function <atom:0>, function <atom:0>])};
  return {widgets: a(o.widgets, e(n, "widgets"), function <atom:0>)};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, t
// closure: k
function {
  return k(e, t);   // tail call
}

// fn O  args=2 vars=4 closure=4 cpool=1 bc=77B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: i, n
// locals: i#1, n#1
// closure: k, a, t, e
function {
  let n#1;
  let i#1;
  i#1 = i;
  if (!((n === undefined))) goto L_14;
  n;
  n = "ListLedgerLinksResponse";
  n#1 = "ListLedgerLinksResponse";
  return {links: a(t(i, n).links, e(n, "links"), function <atom:0>)};
}

// fn H  args=2 vars=4 closure=1 cpool=0 bc=28B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e, i
// locals: e#1, i#1
// closure: t
function {
  let i#1;
  let e#1;
  e#1 = e;
  if (!((i === undefined))) goto L_14;
  i;
  i = "UserProfileRequest";
  i#1 = "UserProfileRequest";
  t(e, i);
  return {};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_finance/src/generated/FinanceSheepApiClient
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=22B file=chatgpt_finance/src/generated/FinanceSheepApiClient
function {
  return {method: "GET", path: "/backend-api/aip/ledger/profile"};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=48B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// locals: this
// closure: _, S
function {
  this = this;
  return _(this.transport, function <atom:0>, S, "userProfile");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=32B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// closure: p, g, e
function {
  return {method: "GET", path: p("/backend-api/aip/ledger/widgets", g(e, "dashboardWidgets.request"))};
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=1 bc=48B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e
// locals: this
// closure: p, g, _, D
function {
  this = this;
  return _(this.transport, function <atom:0>, D, "dashboardWidgets");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=22B file=chatgpt_finance/src/generated/FinanceSheepApiClient
function {
  return {method: "GET", path: "/backend-api/aip/ledger/links"};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=48B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// locals: this
// closure: _, O
function {
  this = this;
  return _(this.transport, function <atom:0>, O, "accountLinks");   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=83B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// locals: t
// closure: T, e
function {
  let t;
  t = T(e, "startAccountLinking.request");
  return {method: "POST", path: "/backend-api/aip/ledger/oauth/start", bodyJson: JSON.stringify(t)};
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=48B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e
// locals: this
// closure: T, _, w
function {
  this = this;
  return _(this.transport, function <atom:0>, w, "startAccountLinking");   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=83B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// locals: t
// closure: C, e
function {
  let t;
  t = C(e, "submitPlaidPublicToken.request");
  return {method: "POST", path: "/backend-api/aip/ledger/oauth/submit-public-token", bodyJson: JSON.stringify(t)};
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=48B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e
// locals: this
// closure: C, _, E
function {
  this = this;
  return _(this.transport, function <atom:0>, E, "submitPlaidPublicToken");   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=83B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// locals: t
// closure: l, e
function {
  let t;
  t = l(e, "accountLinkingState.request");
  return {method: "GET", path: ("/backend-api/aip/ledger/oauth/state/" + encodeURIComponent(String(t.oauth_state_id)))};
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=48B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: e
// locals: this
// closure: l, _, L
function {
  this = this;
  return _(this.transport, function <atom:0>, L, "accountLinkingState");   // tail call
}

// fn <atom:0>  args=3 vars=51 closure=0 cpool=46 bc=998B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// args: require, module, exports
// locals: ClientApiHTTPError, <class_fields_init>, ClientApiHTTPError#1, ClientApiHTTPTransportError, <class_fields_init>#1, ClientApiHTTPTransportError#1, ClientApiDecodeError, <class_fields_init>#2, ClientApiDecodeError#1, e, t, i, n, o, r, s, d, a, c, u, _, p, l, f, g, b, h, m, k, y, L, v, x, R, A, P, T, w, C, E, S, q, D, O, H, FinanceSheepApiClient, <class_fields_init>#3, FinanceSheepApiClient#1
function {
  e = function e;
  t = function t;
  i = function i;
  n = function n;
  o = function o;
  r = function r;
  s = function s;
  d = function d;
  a = function a;
  c = function c;
  u = function u;
  _ = function _;
  p = function p;
  l = function l;
  f = function f;
  g = function g;
  b = function b;
  h = function h;
  m = function m;
  k = function k;
  y = function y;
  L = function L;
  v = function v;
  x = function x;
  R = function R;
  A = function A;
  P = function P;
  T = function T;
  w = function w;
  C = function C;
  E = function E;
  S = function S;
  q = function q;
  D = function D;
  O = function O;
  H = function H;
  let FinanceSheepApiClient#1;
  let ClientApiDecodeError#1;
  let ClientApiHTTPTransportError#1;
  let ClientApiHTTPError#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ClientApiHTTPError = undefined;
  exports.ClientApiHTTPTransportError = undefined;
  exports.ClientApiDecodeError = undefined;
  exports.decodeAccountLinkingStateRequest = undefined;
  exports.decodeAccountLinksRequest = undefined;
  exports.decodeDashboardWidgetsRequest = undefined;
  exports.decodeJsonValue = undefined;
  exports.decodeLedgerAccountResponse = undefined;
  exports.decodeLedgerBalanceResponse = undefined;
  exports.decodeLedgerLinkResponse = undefined;
  exports.decodeLedgerOAuthLinkedInstitutionResponse = undefined;
  exports.decodeLedgerOAuthStateResponse = undefined;
  exports.decodeLedgerProfileAccountResponse = undefined;
  exports.decodeLedgerProfileBalanceResponse = undefined;
  exports.decodeLedgerProfileCapabilitiesResponse = undefined;
  exports.decodeLedgerProfileInstitutionResponse = undefined;
  exports.decodeLedgerProfileLinkResponse = undefined;
  exports.decodeLedgerStartOAuthFlowRequest = undefined;
  exports.decodeLedgerStartOAuthFlowResponse = undefined;
  exports.decodeLedgerSubmitPlaidPublicTokenRequest = undefined;
  exports.decodeLedgerSubmitPlaidPublicTokenResponse = undefined;
  exports.decodeLedgerUserProfileResponse = undefined;
  exports.decodeLedgerWidgetItemResponse = undefined;
  exports.decodeLedgerWidgetResponse = undefined;
  exports.decodeListLedgerLinksResponse = undefined;
  exports.decodeUserProfileRequest = undefined;
  exports.FinanceSheepApiClient = undefined;
  let ClientApiHTTPError;
  let <class_fields_init>;
  class ClientApiHTTPError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:ClientApiHTTPError>;
  ClientApiHTTPError = function <atom:0>;
  // close_loc <class_fields_init>
  ClientApiHTTPError#1 = function <atom:0>;
  exports.ClientApiHTTPError = ClientApiHTTPError#1;
  let ClientApiHTTPTransportError;
  let <class_fields_init>#1;
  class ClientApiHTTPTransportError extends Error { ... }
  <class_fields_init>#1 = undefined;
  <proto:ClientApiHTTPTransportError>;
  ClientApiHTTPTransportError = function <atom:0>;
  // close_loc <class_fields_init>#1
  ClientApiHTTPTransportError#1 = function <atom:0>;
  exports.ClientApiHTTPTransportError = ClientApiHTTPTransportError#1;
  let ClientApiDecodeError;
  let <class_fields_init>#2;
  class ClientApiDecodeError extends Error { ... }
  <class_fields_init>#2 = undefined;
  <proto:ClientApiDecodeError>;
  ClientApiDecodeError = function <atom:0>;
  // close_loc <class_fields_init>#2
  ClientApiDecodeError#1 = function <atom:0>;
  exports.ClientApiDecodeError = ClientApiDecodeError#1;
  exports.decodeAccountLinkingStateRequest = l;
  exports.decodeAccountLinksRequest = f;
  exports.decodeDashboardWidgetsRequest = g;
  exports.decodeJsonValue = b;
  exports.decodeLedgerAccountResponse = h;
  exports.decodeLedgerBalanceResponse = m;
  exports.decodeLedgerLinkResponse = k;
  exports.decodeLedgerOAuthLinkedInstitutionResponse = y;
  exports.decodeLedgerOAuthStateResponse = L;
  exports.decodeLedgerProfileAccountResponse = v;
  exports.decodeLedgerProfileBalanceResponse = x;
  exports.decodeLedgerProfileCapabilitiesResponse = R;
  exports.decodeLedgerProfileInstitutionResponse = A;
  exports.decodeLedgerProfileLinkResponse = P;
  exports.decodeLedgerStartOAuthFlowRequest = T;
  exports.decodeLedgerStartOAuthFlowResponse = w;
  exports.decodeLedgerSubmitPlaidPublicTokenRequest = C;
  exports.decodeLedgerSubmitPlaidPublicTokenResponse = E;
  exports.decodeLedgerUserProfileResponse = S;
  exports.decodeLedgerWidgetItemResponse = q;
  exports.decodeLedgerWidgetResponse = D;
  exports.decodeListLedgerLinksResponse = O;
  exports.decodeUserProfileRequest = H;
  let FinanceSheepApiClient;
  let <class_fields_init>#3;
  class FinanceSheepApiClient extends undefined { ... }
  <proto:FinanceSheepApiClient>.userProfile = function <atom:0>;
  <proto:FinanceSheepApiClient>.dashboardWidgets = function <atom:0>;
  <proto:FinanceSheepApiClient>.accountLinks = function <atom:0>;
  <proto:FinanceSheepApiClient>.startAccountLinking = function <atom:0>;
  <proto:FinanceSheepApiClient>.submitPlaidPublicToken = function <atom:0>;
  <proto:FinanceSheepApiClient>.accountLinkingState = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:FinanceSheepApiClient>;
  FinanceSheepApiClient = function <atom:0>;
  // close_loc <class_fields_init>#3
  FinanceSheepApiClient#1 = function <atom:0>;
  exports.FinanceSheepApiClient = FinanceSheepApiClient#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/generated/FinanceSheepApiClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
