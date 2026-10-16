// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=107B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
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

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=91B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
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

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=82B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
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

// fn e  args=2 vars=2 closure=0 cpool=0 bc=10B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
function {
  return ((e + ".") + t);
}

// fn t  args=2 vars=2 closure=1 cpool=0 bc=79B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if ((("object" != typeof e))) goto L_3d;
  if (((null === e))) goto L_3d;
  if (!(Array.isArray(e))) goto L_4d;
  throw new ClientApiDecodeError(t, "expected object");
  return e;
}

// fn r  args=3 vars=6 closure=2 cpool=0 bc=97B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: r, o, n
// locals: c, i, t
// closure: t, e
function {
  let i;
  let c;
  c = t(r, o);
  i = {};
  let t;
  for (const t of Object.keys(c)) {
    i[t] = n(c[t], e(o, t));
  }
  return i;
}

// fn o  args=2 vars=2 closure=1 cpool=0 bc=26B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if (!(("string" != typeof e))) goto L_18;
  throw new ClientApiDecodeError(t, "expected string");
  return e;
}

// fn n  args=2 vars=2 closure=1 cpool=0 bc=73B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if ((("number" != typeof e))) goto L_37;
  if (!(!Number.isFinite(e))) goto L_47;
  throw new ClientApiDecodeError(t, "expected finite number");
  return e;
}

// fn c  args=2 vars=3 closure=2 cpool=0 bc=73B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
// locals: r
// closure: n, ClientApiDecodeError
function {
  let r;
  r = n(e, t);
  if (!(!Number.isInteger(r))) goto L_45;
  throw new ClientApiDecodeError(t, "expected integer");
  return r;
}

// fn i  args=2 vars=2 closure=1 cpool=0 bc=26B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if (!(("boolean" != typeof e))) goto L_18;
  throw new ClientApiDecodeError(t, "expected boolean");
  return e;
}

// fn s  args=2 vars=2 closure=1 cpool=0 bc=21B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if (!((null !== e))) goto L_13;
  throw new ClientApiDecodeError(t, "expected null");
  return null;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=26B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, o
// closure: r, t
function {
  return r(e, (((t + "[") + String(o)) + "]"));   // tail call
}

// fn a  args=3 vars=3 closure=1 cpool=1 bc=98B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t, r
// closure: ClientApiDecodeError
function {
  if (!(!Array.isArray(e))) goto L_3b;
  throw new ClientApiDecodeError(t, "expected array");
  return e.map(function <atom:0>);   // tail call
}

// fn u  args=3 vars=5 closure=1 cpool=0 bc=65B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t, r
// locals: n, o
// closure: ClientApiDecodeError
function {
  let n;
  for (const n of r) {
    try { // catch -> L_19
    return n(e, t);
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

// fn p  args=3 vars=3 closure=1 cpool=0 bc=100B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t, r
// closure: ClientApiDecodeError
function {
  if (!(!r.includes(e))) goto L_62;
  throw new ClientApiDecodeError(t, ("expected one of " + r.join(", ")));
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=18B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e
// closure: c, s
function {
  if ((c)) goto L_11;
  c = true;
  true;
  s(e);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=7 cpool=0 bc=586B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e
// locals: s, n, p, t
// closure: ClientApiDecodeError, o, ClientApiHTTPError, r, c, i, a
function {
  try { // catch -> L_223
  let s;
  if ((!Number.isInteger(e.statusCode))) goto L_a7;
  if (((e.statusCode < 100))) goto L_a7;
  if (!((e.statusCode > 599))) goto L_b7;
  throw new ClientApiDecodeError(o, "response has invalid HTTP status");
  if (((e.statusCode < 200))) goto L_107;
  if (!((e.statusCode >= 300))) goto L_134;
  throw new ClientApiHTTPError(o, e.statusCode);
  if (((undefined === e.bodyText))) goto L_181;
  if (!((0 === e.bodyText.length))) goto L_191;
  throw new ClientApiDecodeError(o, "response body is empty");
  s = undefined;
  try { // catch -> L_1eb
  s = JSON.parse(e.bodyText);
  JSON.parse(e.bodyText);
  <?>;
  goto L_200;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_1ff
  throw new ClientApiDecodeError(o, "response body is invalid JSON");
  // [栈深重同步 0 -> 1]
  throw <?>;
  t = r(s, (o + ".response"));
  if ((c)) goto L_220;
  c = true;
  true;
  i(t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  p = <?>;
  try { // catch -> L_249
  if (!((p instanceof Error))) goto L_238;
  goto L_245;
  // [栈深重同步 2 -> 1]
  a(new ClientApiDecodeError(o, "response failed"));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=14B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e
// closure: a, ClientApiHTTPTransportError, o
function {
  a(new ClientApiHTTPTransportError(o, e));
  return;
}

// fn <atom:0>  args=2 vars=6 closure=9 cpool=3 bc=167B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: i, s
// locals: a, u, p, d
// closure: c, ClientApiDecodeError, o, ClientApiHTTPError, r, ClientApiHTTPTransportError, t, n, e
function {
  let u;
  let a;
  a = function <atom:0>;
  u = undefined;
  try { // catch -> L_21
  u = t();
  t();
  <?>;
  goto L_49;
  // [栈深重同步 0 -> 1]
  p = <?>;
  try { // catch -> L_48
  if (!((p instanceof Error))) goto L_36;
  goto L_43;
  // [栈深重同步 2 -> 1]
  a(new ClientApiDecodeError(o, "request failed"));
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  try { // catch -> L_90
  n = e.send(u, {onResponse: function <atom:0>, onFailure: function <atom:0>});
  e.send(u, {onResponse: function <atom:0>, onFailure: function <atom:0>});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  d = <?>;
  try { // catch -> L_a6
  a(new ClientApiHTTPTransportError(o, undefined));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=55B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// closure: c, n
function {
  if ((c)) goto L_36;
  if (!((n == null))) goto L_12;
  n;
  goto L_36;
  undefined.cancel();
  return;
}

// fn d  args=4 vars=6 closure=3 cpool=2 bc=37B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t, r, o
// locals: n, c
// closure: ClientApiDecodeError, ClientApiHTTPError, ClientApiHTTPTransportError
function {
  let c;
  let n;
  n = undefined;
  c = false;
  return {result: new Promise(function <atom:0>), cancel: function <atom:0>};
}

// fn l  args=2 vars=8 closure=1 cpool=0 bc=369B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
// locals: r, o, n, e#1, t#1, r#1
// closure: ClientApiDecodeError
function {
  let o;
  let r;
  r = t;
  o = [];
  let n;
  for (const n of Object.keys(r)) {
    let t#1;
    let e#1;
    e#1 = r[n];
    if (((null == e#1))) continue;
    if (!(Array.isArray(e#1))) goto L_8b;
    goto L_91;
    // [栈深重同步 4 -> 3]
    t#1 = [e#1];
    let r#1;
    for (const r#1 of t#1) {
      if (!(("string" != typeof r#1))) goto L_d9;
      if (!(("number" != typeof r#1))) goto L_d9;
      if (!(("boolean" != typeof r#1))) goto L_d9;
      throw new ClientApiDecodeError(("query." + n), "expected scalar query value");
      o.push(((encodeURIComponent(n) + "=") + encodeURIComponent(String(r#1))));
      // [栈深重同步 3 -> 6]
    }
  }
  if (!((0 === o.length))) goto L_13c;
  return e;
  return ((e + "?") + o.join("&"));
}

// fn h  args=2 vars=4 closure=1 cpool=0 bc=28B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, r
// locals: e#1, r#1
// closure: t
function {
  let r#1;
  let e#1;
  e#1 = e;
  if (!((r === undefined))) goto L_14;
  r;
  r = "EmptyRequest";
  r#1 = "EmptyRequest";
  t(e, r);
  return {};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
// closure: s
function {
  return s(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
// closure: s
function {
  return s(e, t);   // tail call
}

// fn A  args=2 vars=5 closure=6 cpool=4 bc=551B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: r, n
// locals: r#1, n#1, c
// closure: o, s, t, e, u, i
function {
  let n#1;
  let r#1;
  r#1 = r;
  if (!((n === undefined))) goto L_14;
  n;
  n = "AccountCheckAccount";
  n#1 = "AccountCheckAccount";
  let c;
  c = t(r, n);
  if (!((undefined === c.account_id))) goto L_49;
  goto L_7d;
  // [栈深重同步 2 -> 1]
  null;
  {account_id: o(c.account_id, e(n, "account_id"))};
  if (!((undefined === c.account_user_id))) goto L_ad;
  goto L_ea;
  // [栈深重同步 2 -> 1]
  null;
  {account_user_id: u(c.account_user_id, e(n, "account_user_id"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === c.is_deactivated))) goto L_11a;
  goto L_150;
  // [栈深重同步 2 -> 1]
  null;
  {is_deactivated: i(c.is_deactivated, e(n, "is_deactivated"))};
  if (!((undefined === c.name))) goto L_180;
  goto L_1bd;
  // [栈深重同步 2 -> 1]
  null;
  {name: u(c.name, e(n, "name"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === c.plan_type))) goto L_1ed;
  goto L_221;
  // [栈深重同步 2 -> 1]
  null;
  {plan_type: o(c.plan_type, e(n, "plan_type"))};
  return {};
}

// fn f  args=2 vars=5 closure=4 cpool=0 bc=231B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: r, o
// locals: r#1, o#1, n
// closure: t, A, e, i
function {
  let o#1;
  let r#1;
  r#1 = r;
  if (!((o === undefined))) goto L_14;
  o;
  o = "AccountCheckRecord";
  o#1 = "AccountCheckRecord";
  let n;
  n = t(r, o);
  if (!((undefined === n.account))) goto L_49;
  goto L_7d;
  // [栈深重同步 2 -> 1]
  null;
  {account: A(n.account, e(o, "account"))};
  if (!((undefined === n.can_access_with_session))) goto L_ad;
  goto L_e1;
  // [栈深重同步 2 -> 1]
  null;
  {can_access_with_session: i(n.can_access_with_session, e(o, "can_access_with_session"))};
  return {};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
// closure: f
function {
  return f(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn C  args=2 vars=5 closure=6 cpool=2 bc=192B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: n, c
// locals: n#1, c#1, i
// closure: f, o, t, r, e, a
function {
  let c#1;
  let n#1;
  n#1 = n;
  if (!((c === undefined))) goto L_14;
  c;
  c = "AccountCheckResponse";
  c#1 = "AccountCheckResponse";
  let i;
  i = t(n, c);
  if (!((undefined === i.account_ordering))) goto L_80;
  goto L_ba;
  // [栈深重同步 2 -> 1]
  null;
  {account_ordering: a(i.account_ordering, e(c, "account_ordering"), function <atom:0>)};
  return {accounts: r(i.accounts, e(c, "accounts"), function <atom:0>)};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=22B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
function {
  return {method: "GET", path: "/backend-api/accounts/check/v4-2023-04-27"};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=48B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// locals: this
// closure: d, C
function {
  this = this;
  return d(this.transport, function <atom:0>, C, "checkAccounts");   // tail call
}

// fn <atom:0>  args=3 vars=32 closure=0 cpool=22 bc=445B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// args: require, module, exports
// locals: ClientApiHTTPError, <class_fields_init>, ClientApiHTTPError#1, ClientApiHTTPTransportError, <class_fields_init>#1, ClientApiHTTPTransportError#1, ClientApiDecodeError, <class_fields_init>#2, ClientApiDecodeError#1, e, t, r, o, n, c, i, s, a, u, p, d, l, h, A, f, C, ChatGPTAuthenticationApiClient, <class_fields_init>#3, ChatGPTAuthenticationApiClient#1
function {
  e = function e;
  t = function t;
  r = function r;
  o = function o;
  n = function n;
  c = function c;
  i = function i;
  s = function s;
  a = function a;
  u = function u;
  p = function p;
  d = function d;
  l = function l;
  h = function h;
  A = function A;
  f = function f;
  C = function C;
  let ChatGPTAuthenticationApiClient#1;
  let ClientApiDecodeError#1;
  let ClientApiHTTPTransportError#1;
  let ClientApiHTTPError#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ClientApiHTTPError = undefined;
  exports.ClientApiHTTPTransportError = undefined;
  exports.ClientApiDecodeError = undefined;
  exports.decodeEmptyRequest = undefined;
  exports.decodeAccountCheckAccount = undefined;
  exports.decodeAccountCheckRecord = undefined;
  exports.decodeAccountCheckResponse = undefined;
  exports.ChatGPTAuthenticationApiClient = undefined;
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
  exports.decodeEmptyRequest = h;
  exports.decodeAccountCheckAccount = A;
  exports.decodeAccountCheckRecord = f;
  exports.decodeAccountCheckResponse = C;
  let ChatGPTAuthenticationApiClient;
  let <class_fields_init>#3;
  class ChatGPTAuthenticationApiClient extends undefined { ... }
  <proto:ChatGPTAuthenticationApiClient>.checkAccounts = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:ChatGPTAuthenticationApiClient>;
  ChatGPTAuthenticationApiClient = function <atom:0>;
  // close_loc <class_fields_init>#3
  ChatGPTAuthenticationApiClient#1 = function <atom:0>;
  exports.ChatGPTAuthenticationApiClient = ChatGPTAuthenticationApiClient#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_authentication_session/src/generated/ChatGPTAuthenticationApiClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
