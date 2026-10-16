// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=107B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
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

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=91B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
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

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=82B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
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

// fn e  args=2 vars=2 closure=0 cpool=0 bc=10B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
function {
  return ((e + ".") + t);
}

// fn t  args=2 vars=2 closure=1 cpool=0 bc=79B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if ((("object" != typeof e))) goto L_3d;
  if (((null === e))) goto L_3d;
  if (!(Array.isArray(e))) goto L_4d;
  throw new ClientApiDecodeError(t, "expected object");
  return e;
}

// fn r  args=3 vars=6 closure=2 cpool=0 bc=97B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: r, o, n
// locals: s, i, t
// closure: t, e
function {
  let i;
  let s;
  s = t(r, o);
  i = {};
  let t;
  for (const t of Object.keys(s)) {
    i[t] = n(s[t], e(o, t));
  }
  return i;
}

// fn o  args=2 vars=2 closure=1 cpool=0 bc=26B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if (!(("string" != typeof e))) goto L_18;
  throw new ClientApiDecodeError(t, "expected string");
  return e;
}

// fn n  args=2 vars=2 closure=1 cpool=0 bc=73B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if ((("number" != typeof e))) goto L_37;
  if (!(!Number.isFinite(e))) goto L_47;
  throw new ClientApiDecodeError(t, "expected finite number");
  return e;
}

// fn s  args=2 vars=3 closure=2 cpool=0 bc=73B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
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

// fn i  args=2 vars=2 closure=1 cpool=0 bc=26B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if (!(("boolean" != typeof e))) goto L_18;
  throw new ClientApiDecodeError(t, "expected boolean");
  return e;
}

// fn l  args=2 vars=2 closure=1 cpool=0 bc=21B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: ClientApiDecodeError
function {
  if (!((null !== e))) goto L_13;
  throw new ClientApiDecodeError(t, "expected null");
  return null;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=26B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, o
// closure: r, t
function {
  return r(e, (((t + "[") + String(o)) + "]"));   // tail call
}

// fn d  args=3 vars=3 closure=1 cpool=1 bc=98B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t, r
// closure: ClientApiDecodeError
function {
  if (!(!Array.isArray(e))) goto L_3b;
  throw new ClientApiDecodeError(t, "expected array");
  return e.map(function <atom:0>);   // tail call
}

// fn p  args=3 vars=5 closure=1 cpool=0 bc=65B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
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

// fn c  args=3 vars=3 closure=1 cpool=0 bc=100B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t, r
// closure: ClientApiDecodeError
function {
  if (!(!r.includes(e))) goto L_62;
  throw new ClientApiDecodeError(t, ("expected one of " + r.join(", ")));
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=18B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e
// closure: s, l
function {
  if ((s)) goto L_11;
  s = true;
  true;
  l(e);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=7 cpool=0 bc=586B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e
// locals: l, n, c, t
// closure: ClientApiDecodeError, o, ClientApiHTTPError, r, s, i, d
function {
  try { // catch -> L_223
  let l;
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
  l = undefined;
  try { // catch -> L_1eb
  l = JSON.parse(e.bodyText);
  JSON.parse(e.bodyText);
  <?>;
  goto L_200;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_1ff
  throw new ClientApiDecodeError(o, "response body is invalid JSON");
  // [栈深重同步 0 -> 1]
  throw <?>;
  t = r(l, (o + ".response"));
  if ((s)) goto L_220;
  s = true;
  true;
  i(t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_249
  if (!((c instanceof Error))) goto L_238;
  goto L_245;
  // [栈深重同步 2 -> 1]
  d(new ClientApiDecodeError(o, "response failed"));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=14B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e
// closure: d, ClientApiHTTPTransportError, o
function {
  d(new ClientApiHTTPTransportError(o, e));
  return;
}

// fn <atom:0>  args=2 vars=6 closure=9 cpool=3 bc=167B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: i, l
// locals: d, p, c, a
// closure: s, ClientApiDecodeError, o, ClientApiHTTPError, r, ClientApiHTTPTransportError, t, n, e
function {
  let p;
  let d;
  d = function <atom:0>;
  p = undefined;
  try { // catch -> L_21
  p = t();
  t();
  <?>;
  goto L_49;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_48
  if (!((c instanceof Error))) goto L_36;
  goto L_43;
  // [栈深重同步 2 -> 1]
  d(new ClientApiDecodeError(o, "request failed"));
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  try { // catch -> L_90
  n = e.send(p, {onResponse: function <atom:0>, onFailure: function <atom:0>});
  e.send(p, {onResponse: function <atom:0>, onFailure: function <atom:0>});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_a6
  d(new ClientApiHTTPTransportError(o, undefined));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=55B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// closure: s, n
function {
  if ((s)) goto L_36;
  if (!((n == null))) goto L_12;
  n;
  goto L_36;
  undefined.cancel();
  return;
}

// fn a  args=4 vars=6 closure=3 cpool=2 bc=37B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t, r, o
// locals: n, s
// closure: ClientApiDecodeError, ClientApiHTTPError, ClientApiHTTPTransportError
function {
  let s;
  let n;
  n = undefined;
  s = false;
  return {result: new Promise(function <atom:0>), cancel: function <atom:0>};
}

// fn u  args=2 vars=8 closure=1 cpool=0 bc=369B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
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

// fn C  args=2 vars=4 closure=1 cpool=0 bc=28B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
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

// fn f  args=2 vars=5 closure=3 cpool=0 bc=133B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: r, o
// locals: r#1, o#1, n
// closure: t, i, e
function {
  let o#1;
  let r#1;
  r#1 = r;
  if (!((o === undefined))) goto L_14;
  o;
  o = "ModelCatalogRequest";
  o#1 = "ModelCatalogRequest";
  let n;
  n = t(r, o);
  return {iim: i(n.iim, e(o, "iim")), supports_model_picker_upgrade_presets: i(n.supports_model_picker_upgrade_presets, e(o, "supports_model_picker_upgrade_presets"))};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: l
function {
  return l(e, t);   // tail call
}

// fn h  args=2 vars=5 closure=5 cpool=2 bc=140B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: r, n
// locals: r#1, n#1, s
// closure: o, l, t, p, e
function {
  let n#1;
  let r#1;
  r#1 = r;
  if (!((n === undefined))) goto L_14;
  n;
  n = "ModelCatalogModel";
  n#1 = "ModelCatalogModel";
  let s;
  s = t(r, n);
  if (!((undefined === s.slug))) goto L_49;
  goto L_86;
  // [栈深重同步 2 -> 1]
  null;
  {slug: p(s.slug, e(n, "slug"), [function <atom:0>, function <atom:0>])};
  return {};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: o
function {
  return o(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: l
function {
  return l(e, t);   // tail call
}

// fn g  args=2 vars=5 closure=5 cpool=2 bc=140B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: r, n
// locals: r#1, n#1, s
// closure: o, l, t, p, e
function {
  let n#1;
  let r#1;
  r#1 = r;
  if (!((n === undefined))) goto L_14;
  n;
  n = "ModelCatalogPreset";
  n#1 = "ModelCatalogPreset";
  let s;
  s = t(r, n);
  if (!((undefined === s.model_slug))) goto L_49;
  goto L_86;
  // [栈深重同步 2 -> 1]
  null;
  {model_slug: p(s.model_slug, e(n, "model_slug"), [function <atom:0>, function <atom:0>])};
  return {};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: g
function {
  return g(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=8B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: g, d
function {
  return d(e, t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: l
function {
  return l(e, t);   // tail call
}

// fn m  args=2 vars=5 closure=6 cpool=2 bc=142B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: r, o
// locals: r#1, o#1, n
// closure: g, d, l, t, p, e
function {
  let o#1;
  let r#1;
  r#1 = r;
  if (!((o === undefined))) goto L_14;
  o;
  o = "ModelCatalogVersion";
  o#1 = "ModelCatalogVersion";
  let n;
  n = t(r, o);
  if (!((undefined === n.intelligence_presets))) goto L_49;
  goto L_88;
  // [栈深重同步 2 -> 1]
  null;
  {intelligence_presets: p(n.intelligence_presets, e(o, "intelligence_presets"), [function <atom:0>, function <atom:0>])};
  return {};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: h
function {
  return h(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=8B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: h, d
function {
  return d(e, t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: l
function {
  return l(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: m
function {
  return m(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=8B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: m, d
function {
  return d(e, t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: l
function {
  return l(e, t);   // tail call
}

// fn T  args=2 vars=5 closure=8 cpool=4 bc=310B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: r, n
// locals: r#1, n#1, s
// closure: h, d, l, m, t, o, e, p
function {
  let n#1;
  let r#1;
  r#1 = r;
  if (!((n === undefined))) goto L_14;
  n;
  n = "ModelCatalogResponse";
  n#1 = "ModelCatalogResponse";
  let s;
  s = t(r, n);
  if (!((undefined === s.models))) goto L_82;
  goto L_c1;
  // [栈深重同步 2 -> 1]
  null;
  {models: p(s.models, e(n, "models"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.versions))) goto L_f1;
  goto L_130;
  // [栈深重同步 2 -> 1]
  null;
  {versions: p(s.versions, e(n, "versions"), [function <atom:0>, function <atom:0>])};
  return {default_model_slug: o(s.default_model_slug, e(n, "default_model_slug"))};
}

// fn A  args=2 vars=5 closure=3 cpool=0 bc=131B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: r, o
// locals: r#1, o#1, n
// closure: t, i, e
function {
  let o#1;
  let r#1;
  r#1 = r;
  if (!((o === undefined))) goto L_14;
  o;
  o = "ChatRequirementChallenge";
  o#1 = "ChatRequirementChallenge";
  let n;
  n = t(r, o);
  if (!((undefined === n.required))) goto L_49;
  goto L_7d;
  // [栈深重同步 2 -> 1]
  null;
  {required: i(n.required, e(o, "required"))};
  return {};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: A
function {
  return A(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: l
function {
  return l(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: A
function {
  return A(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: l
function {
  return l(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: A
function {
  return A(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e, t
// closure: l
function {
  return l(e, t);   // tail call
}

// fn x  args=2 vars=5 closure=6 cpool=6 bc=417B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: r, n
// locals: r#1, n#1, s
// closure: A, l, t, o, e, p
function {
  let n#1;
  let r#1;
  r#1 = r;
  if (!((n === undefined))) goto L_14;
  n;
  n = "ChatRequirementsResponse";
  n#1 = "ChatRequirementsResponse";
  let s;
  s = t(r, n);
  if (!((undefined === s.turnstile))) goto L_7e;
  goto L_bd;
  // [栈深重同步 2 -> 1]
  null;
  {turnstile: p(s.turnstile, e(n, "turnstile"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.proofofwork))) goto L_ed;
  goto L_12c;
  // [栈深重同步 2 -> 1]
  null;
  {proofofwork: p(s.proofofwork, e(n, "proofofwork"), [function <atom:0>, function <atom:0>])};
  if (!((undefined === s.so))) goto L_15c;
  goto L_19b;
  // [栈深重同步 2 -> 1]
  null;
  {so: p(s.so, e(n, "so"), [function <atom:0>, function <atom:0>])};
  return {token: o(s.token, e(n, "token"))};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
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

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=32B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// closure: u, f, e
function {
  return {method: "GET", path: u("/backend-api/models", f(e, "getModels.request"))};
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=1 bc=48B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e
// locals: this
// closure: u, f, a, T
function {
  this = this;
  return a(this.transport, function <atom:0>, T, "getModels");   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=83B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// locals: t
// closure: C, e
function {
  let t;
  t = C(e, "getChatRequirements.request");
  return {method: "POST", path: "/backend-api/sentinel/chat-requirements", bodyJson: JSON.stringify(t)};
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=48B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: e
// locals: this
// closure: C, a, x
function {
  this = this;
  return a(this.transport, function <atom:0>, x, "getChatRequirements");   // tail call
}

// fn <atom:0>  args=3 vars=36 closure=0 cpool=27 bc=561B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// args: require, module, exports
// locals: ClientApiHTTPError, <class_fields_init>, ClientApiHTTPError#1, ClientApiHTTPTransportError, <class_fields_init>#1, ClientApiHTTPTransportError#1, ClientApiDecodeError, <class_fields_init>#2, ClientApiDecodeError#1, e, t, r, o, n, s, i, l, d, p, c, a, u, C, f, h, g, m, T, A, x, ChatGPTConversationApiClient, <class_fields_init>#3, ChatGPTConversationApiClient#1
function {
  e = function e;
  t = function t;
  r = function r;
  o = function o;
  n = function n;
  s = function s;
  i = function i;
  l = function l;
  d = function d;
  p = function p;
  c = function c;
  a = function a;
  u = function u;
  C = function C;
  f = function f;
  h = function h;
  g = function g;
  m = function m;
  T = function T;
  A = function A;
  x = function x;
  let ChatGPTConversationApiClient#1;
  let ClientApiDecodeError#1;
  let ClientApiHTTPTransportError#1;
  let ClientApiHTTPError#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ClientApiHTTPError = undefined;
  exports.ClientApiHTTPTransportError = undefined;
  exports.ClientApiDecodeError = undefined;
  exports.decodeEmptyRequest = undefined;
  exports.decodeModelCatalogRequest = undefined;
  exports.decodeModelCatalogModel = undefined;
  exports.decodeModelCatalogPreset = undefined;
  exports.decodeModelCatalogVersion = undefined;
  exports.decodeModelCatalogResponse = undefined;
  exports.decodeChatRequirementChallenge = undefined;
  exports.decodeChatRequirementsResponse = undefined;
  exports.ChatGPTConversationApiClient = undefined;
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
  exports.decodeEmptyRequest = C;
  exports.decodeModelCatalogRequest = f;
  exports.decodeModelCatalogModel = h;
  exports.decodeModelCatalogPreset = g;
  exports.decodeModelCatalogVersion = m;
  exports.decodeModelCatalogResponse = T;
  exports.decodeChatRequirementChallenge = A;
  exports.decodeChatRequirementsResponse = x;
  let ChatGPTConversationApiClient;
  let <class_fields_init>#3;
  class ChatGPTConversationApiClient extends undefined { ... }
  <proto:ChatGPTConversationApiClient>.getModels = function <atom:0>;
  <proto:ChatGPTConversationApiClient>.getChatRequirements = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:ChatGPTConversationApiClient>;
  ChatGPTConversationApiClient = function <atom:0>;
  // close_loc <class_fields_init>#3
  ChatGPTConversationApiClient#1 = function <atom:0>;
  exports.ChatGPTConversationApiClient = ChatGPTConversationApiClient#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/generated/ChatGPTConversationApiClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
