// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.client = e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// closure: r
function {
  r.cancel();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=150B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// locals: t
// closure: y, c
function {
  let t;
  t = y(e);
  if (!(t.requiresDeviceIntegrity)) goto L_5b;
  throw new c.ChatGPTConversationError("This ChatGPT account requires a first-party device integrity provider before sending messages.");
  return {headerNames: ["OpenAI-Sentinel-Chat-Requirements-Token"], headerValues: [t.token]};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: k
function {
  throw k(e, "conversation integrity");
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=3 bc=204B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, t
// locals: r, this
// closure: y, c, k
function {
  this = this;
  let r;
  r = this.client.getChatRequirements({});
  return {cancel: function <atom:0>, result: r.result.then(function <atom:0>).catch(function <atom:0>)};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.service = e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=62B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// closure: o, i, c
function {
  if (!(o)) goto L_3d;
  o = false;
  false;
  i(new c.ChatGPTConversationError("This device could not complete its first-party integrity check."));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=18B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: t
// closure: o, e
function {
  if (!(o)) goto L_11;
  o = false;
  false;
  e(t);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=6 cpool=2 bc=466B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, i
// locals: s, a
// closure: o, c, n, this, t, r
function {
  let s;
  s = {onFailure: function <atom:0>, onSuccess: function <atom:0>};
  try { // catch -> L_192
  if (!((undefined === r.conversationId))) goto L_12d;
  goto L_157;
  // [栈深重同步 4 -> 3]
  null;
  {conversationId: r.conversationId};
  n = this.service.prepare({accessToken: t.accessToken, accountId: t.activeAccount.id, baseUrl: t.baseUrl, parentMessageId: r.parentMessageId}, s);
  this.service.prepare({accessToken: t.accessToken, accountId: t.activeAccount.id, baseUrl: t.baseUrl, parentMessageId: r.parentMessageId}, s);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_1d1
  o = false;
  false;
  i(new c.ChatGPTConversationError("This device could not start its first-party integrity check."));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=167B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// locals: t
// closure: o, n, e
function {
  if (!(o)) goto L_a6;
  o = false;
  false;
  try { // catch -> L_46
  if (!((n == null))) goto L_1f;
  n;
  goto L_43;
  undefined.cancel();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_a5
  if (!(e.isLoggingEnabled)) goto L_a2;
  console.warn("The first-party integrity operation could not be cancelled.");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=2 bc=46B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: t, r
// locals: n, o, i, this
// closure: c, e
function {
  this = this;
  let i;
  let o;
  let n;
  n = undefined;
  o = true;
  i = new Promise(function <atom:0>);
  return {cancel: function <atom:0>, result: i};
}

// fn <atom:0>  args=2 vars=3 closure=9 cpool=0 bc=834B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, t
// locals: this
// closure: <class_fields_init>, v, ChatGPTConversationTransportAdapter, ChatGPTRequirementsIntegrityProvider, r, s, i, u, o
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.session = e;
  this.conversationApiClient = new v.ChatGPTConversationApiClient(new ChatGPTConversationTransportAdapter(e.apiService));
  if (!((t == null))) goto L_7f;
  t;
  goto L_a0;
  if (!((undefined.integrityProvider == null))) goto L_ce;
  undefined.integrityProvider;
  this.integrityProvider = new ChatGPTRequirementsIntegrityProvider(this.conversationApiClient);
  this.networkClient = new r.OAINetworkClient({apiService: e.apiService});
  if (!((t == null))) goto L_13b;
  t;
  goto L_15c;
  if (!((undefined.streamingClient == null))) goto L_1ab;
  undefined.streamingClient;
  this.rawStreamingClient = new s.StreamingHTTPClient(e.baseUrl);
  if (!((t == null))) goto L_1be;
  t;
  goto L_1df;
  this.streamWorker = undefined.streamWorker;
  if (((undefined === this.streamWorker))) goto L_23d;
  if (!((t == null))) goto L_21b;
  t;
  goto L_23c;
  if (!((undefined !== undefined.streamingClient))) goto L_28b;
  goto L_28c;
  // [栈深重同步 2 -> 1]
  this.foregroundStreamingClient = undefined;
  if (!((t == null))) goto L_2e7;
  t;
  goto L_308;
  if (!((undefined.uploadClient == null))) goto L_335;
  undefined.uploadClient;
  this.fileUploadService = new u.ChatGPTFileUploadService(e, this.networkClient, new o.HTTPClient());
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: a
function {
  return (e.role === a.AssistantMessageRole.User);
}

// fn <atom:0>  args=1 vars=1 closure=7 cpool=0 bc=287B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: u, o, i, s, l, t, q
function {
  if (!(u)) goto L_11e;
  u = false;
  false;
  if (!((o == null))) goto L_1c;
  o;
  goto L_40;
  undefined.cancel();
  o = undefined;
  undefined;
  if (!((i == null))) goto L_52;
  i;
  goto L_7f;
  if (!((undefined.cancel == null))) goto L_7c;
  undefined.cancel;
  undefined;
  goto L_7f;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  i = undefined;
  undefined;
  if (!((s == null))) goto L_91;
  s;
  goto L_b5;
  undefined.cancel();
  s = undefined;
  undefined;
  if (!((l == null))) goto L_c7;
  l;
  goto L_eb;
  undefined.close();
  l = undefined;
  undefined;
  t.onError(q(e));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=106B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// closure: u, l, t
function {
  if (!(u)) goto L_69;
  u = false;
  false;
  if (!((l == null))) goto L_19;
  l;
  goto L_3d;
  undefined.close();
  l = undefined;
  undefined;
  t.onComplete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: o
function {
  o = e;
  e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: o
function {
  o = e;
  e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// closure: u
function {
  return u;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: o
function {
  o = e;
  e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: i
function {
  i = e;
  e;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=12 cpool=0 bc=1083B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: n
// locals: o, t, o#1
// closure: u, p, e, c, l, r, h, G, t, v, T, g
function {
  if (!(u)) goto L_43a;
  try { // catch -> L_42b
  let o;
  o = p.consume(n);
  if (!((undefined !== o.continuation))) goto L_161;
  let t;
  e = (e ++);
  if (!(((e ++) > 3))) goto L_a1;
  throw new c.ChatGPTConversationError("ChatGPT exceeded the supported number of stream handoffs.");
  if (!((l == null))) goto L_ac;
  l;
  goto L_d0;
  undefined.close();
  l = undefined;
  undefined;
  t = r(h.resumeChatGPTDirectStream(G, o.continuation));
  if (!(u)) goto L_136;
  l = t;
  goto L_15d;
  // [栈深重同步 1 -> 0]
  t.close();
  return undefined;
  if (!((undefined !== o.conversationState))) goto L_1df;
  if (!((t.onConversationState == null))) goto L_1b8;
  t.onConversationState;
  t;
  goto L_1df;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, o.conversationState);
  if (!((undefined !== o.reasoning))) goto L_25e;
  if (!((t.onReasoning == null))) goto L_237;
  t.onReasoning;
  t;
  goto L_25e;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, o.reasoning);
  if (!((undefined !== o.delta))) goto L_306;
  if (!((o.delta.length > 0))) goto L_306;
  v = true;
  true;
  t.onTextDelta(o.delta);
  if (!((undefined !== o.dilResult))) goto L_37c;
  t.onDILResult(o.dilResult);
  if (!((undefined !== o.entityReferences))) goto L_3fb;
  if (!((t.onEntityReferences == null))) goto L_3d4;
  t.onEntityReferences;
  t;
  goto L_3fb;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, o.entityReferences);
  if (!(o.complete)) goto L_428;
  T();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o#1 = <?>;
  try { // catch -> L_439
  g(o#1);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=214B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: v, T, g, A, this
function {
  if (!(v)) goto L_36;
  if (!(("The SSE connection closed" === e.message))) goto L_36;
  goto L_d5;
  // [栈深重同步 1 -> 0]
  g(A(e));
  if (!(e.message.includes("HTTP status 401"))) goto L_d5;
  this.session.reportUnauthorized();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=15 cpool=2 bc=286B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: n
// closure: u, p, e, c, l, r, h, G, t, v, T, g, A, this, _
function {
  null;
  n.headers;
  return _.connect(n.path, {onEvent: function <atom:0>, onError: function <atom:0>}, {method: "POST", reconnect: false, headers: {}, body: new TextEncoder().encode(JSON.stringify(n.body))});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=47B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: t
function {
  if (!((t.onConversationState == null))) goto L_2a;
  t.onConversationState;
  t;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>, e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: t
function {
  return t.onDILResult(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=391B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// locals: t
// closure: h, g, c, A, this
function {
  let t;
  if (!((e instanceof h.ChatGPTBackgroundStreamError))) goto L_95;
  t = (e.kind === h.ChatGPTStreamErrorKind.Decode);
  if (!(t)) goto L_ea;
  goto L_ed;
  // [栈深重同步 2 -> 1]
  g(A(e));
  if (!(e.message.includes("HTTP status 401"))) goto L_186;
  this.session.reportUnauthorized();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=46B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: v, t
function {
  v = true;
  true;
  t.onTextDelta(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=47B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: t
function {
  if (!((t.onEntityReferences == null))) goto L_2a;
  t.onEntityReferences;
  t;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>, e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=47B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: t
function {
  if (!((t.onReasoning == null))) goto L_2a;
  t.onReasoning;
  t;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>, e);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=55B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: v, t
function {
  v = true;
  true;
  if (!((t.onPreparedContent == null))) goto L_32;
  t.onPreparedContent;
  t;
  goto L_36;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// closure: n
function {
  return n.cancel();   // tail call
}

// fn <atom:0>  args=0 vars=15 closure=21 cpool=14 bc=1569B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// locals: a, d, m, f, P, y, w, G, _, E, e, r, e#1, r#1, n
// closure: o, u, i, p, c, l, h, t, v, T, g, A, this, e, n, s, U, z, I, r, C
function {
  let E;
  let _;
  let G;
  let w;
  let y;
  let P;
  let f;
  let m;
  let d;
  let a;
  a = (await this.resolveModel(e, function <atom:0>));
  o = undefined;
  undefined;
  if (!(!u)) goto L_5a;
  return undefined; // async
  d = (await this.resolveParentMessageId(e, function <atom:0>));
  o = undefined;
  undefined;
  if (!(!u)) goto L_96;
  return undefined; // async
  m = [];
  if (!((n.length > 0))) goto L_12f;
  m = (await this.fileUploadService.upload(n, {isActive: function <atom:0>, trackAPIRequest: function <atom:0>, trackUploadRequest: function <atom:0>}));
  (await this.fileUploadService.upload(n, {isActive: function <atom:0>, trackAPIRequest: function <atom:0>, trackUploadRequest: function <atom:0>}));
  o = undefined;
  undefined;
  i = undefined;
  undefined;
  if (!(!u)) goto L_12f;
  return undefined; // async
  if (!((undefined === e.conversationId))) goto L_1c4;
  goto L_1ee;
  // [栈深重同步 5 -> 4]
  null;
  {conversationId: e.conversationId};
  s = this.integrityProvider.prepare(this.session, {parentMessageId: d});
  this.integrityProvider.prepare(this.session, {parentMessageId: d});
  f = (await s.result);
  s = undefined;
  undefined;
  if (!(!u)) goto L_237;
  return undefined; // async
  P = U(f);
  y = z(I(e, r.content, a, d, m), f.bodyPatchJson);
  null;
  P;
  w = {Authorization: "Bearer ".concat(this.session.accessToken), ChatGPT-Account-Id: this.session.activeAccount.id, Content-Type: "application/json"};
  G = {baseUrl: this.session.baseUrl, body: y, headers: w, path: C};
  _ = this.foregroundStreamingClient;
  E = undefined;
  if (!((undefined !== _))) goto L_44f;
  let r;
  let e;
  e = 0;
  r = function <atom:0>;
  E = r(G);
  r(G);
  // close_loc r
  // close_loc e
  goto L_5e9;
  let n;
  let r#1;
  let e#1;
  e#1 = this.streamWorker;
  if (!((undefined === e#1))) goto L_4b3;
  throw new c.ChatGPTConversationError("The ChatGPT response stream could not start.");
  if (!((undefined === t.onEntityReferences))) goto L_517;
  goto L_524;
  // [栈深重同步 2 -> 1]
  null;
  {onEntityReferences: function <atom:0>};
  if (!((undefined === t.onReasoning))) goto L_554;
  goto L_561;
  // [栈深重同步 2 -> 1]
  null;
  {onReasoning: function <atom:0>};
  if (!((undefined === t.onPreparedContent))) goto L_591;
  goto L_59e;
  // [栈深重同步 2 -> 1]
  null;
  {onPreparedContent: function <atom:0>};
  r#1 = {onComplete: T, onConversationState: function <atom:0>, onDILResult: function <atom:0>, onError: function <atom:0>, onTextDelta: function <atom:0>};
  n = e#1.startDirect(G, r#1);
  E = {close: function <atom:0>};
  {close: function <atom:0>};
  // close_loc n
  if (!(u)) goto L_5f7;
  l = E;
  goto L_61e;
  // [栈深重同步 1 -> 0]
  E.close();
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=242B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// closure: u, o, i, s, l
function {
  if (!(u)) goto L_f1;
  u = false;
  false;
  if (!((o == null))) goto L_1c;
  o;
  goto L_40;
  undefined.cancel();
  o = undefined;
  undefined;
  if (!((i == null))) goto L_52;
  i;
  goto L_7f;
  if (!((undefined.cancel == null))) goto L_7c;
  undefined.cancel;
  undefined;
  goto L_7f;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  i = undefined;
  undefined;
  if (!((s == null))) goto L_91;
  s;
  goto L_b5;
  undefined.cancel();
  s = undefined;
  undefined;
  if (!((l == null))) goto L_c7;
  l;
  goto L_eb;
  undefined.close();
  l = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=2 vars=14 closure=10 cpool=5 bc=503B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, t
// locals: r, n, o, i, s, l, u, v, p, g, T, this
// closure: a, q, c, h, A, U, z, I, C, d
function {
  this = this;
  let T;
  let g;
  let p;
  let v;
  let u;
  let l;
  let s;
  let i;
  let o;
  let n;
  let r;
  // append([], 0, e.messages)
  e.messages;
  r = [].reverse().find(function <atom:0>);
  if (((undefined === r))) goto L_eb;
  if (!((0 === r.content.trim().length))) goto L_fc;
  throw new Error("Enter a message before starting a ChatGPT conversation.");
  if (!((r.attachments == null))) goto L_128;
  r.attachments;
  n = [];
  this.fileUploadService.validate(n);
  o = undefined;
  i = undefined;
  s = undefined;
  l = undefined;
  u = true;
  v = false;
  p = new d.ChatGPTConversationEventDecoder();
  g = function <atom:0>;
  T = function <atom:0>;
  function <atom:0>().catch(g);
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=2 vars=6 closure=3 cpool=0 bc=237B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, t
// locals: r, n, o, this
// closure: G, w, k
function {
  this = this;
  let n;
  let r;
  r = this.modelCatalog;
  if (!((undefined !== r))) goto L_39;
  return G(e, r); // async
  n = this.conversationApiClient.getModels({iim: false, supports_model_picker_upgrade_presets: true});
  t(n);
  try { // catch -> L_c9
  r = w((await n.result));
  w((await n.result));
  <?>;
  goto L_d9;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_d8
  throw k(o, "model catalog");
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.modelCatalog = r;
  return G(e, r); // async
}

// fn <atom:0>  args=2 vars=5 closure=5 cpool=0 bc=612B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, t
// locals: n, o, this
// closure: l, p, S, r, R
function {
  this = this;
  let o;
  let n;
  if (!((undefined !== e.parentMessageId))) goto L_51;
  return e.parentMessageId; // async
  if (!((undefined === e.conversationId))) goto L_9d;
  return l.createChatGPTConversationMessageId(); // async
  n = this.networkClient.requestJson({request: {method: "GET", path: "".concat(p, "/", encodeURIComponent(e.conversationId))}, decode: S});
  t(n);
  o = (await n.result);
  if (!((o.kind !== r.OAINetworkResultKind.Success))) goto L_23f;
  throw R(o.kind, o.statusCode, "conversation context");
  return o.value; // async
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
function {
  if (!((e == null))) goto L_b;
  e;
  goto L_2c;
  return (true === undefined.required);
}

// fn y  args=1 vars=1 closure=1 cpool=1 bc=310B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: c
function {
  if (!((0 === e.token.trim().length))) goto L_79;
  throw new c.ChatGPTConversationError("ChatGPT returned invalid conversation integrity requirements.");
  return {requiresDeviceIntegrity: [e.turnstile, e.proofofwork, e.so].some(function <atom:0>), token: e.token};
}

// fn w  args=1 vars=7 closure=1 cpool=0 bc=831B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// locals: t, r, o, n, o#1, e#1
// closure: c
function {
  let n;
  let r;
  let t;
  if (!((0 === e.default_model_slug.trim().length))) goto L_82;
  throw new c.ChatGPTConversationError("ChatGPT did not return an available default model.");
  t = new Set([e.default_model_slug]);
  if (!((e.models == null))) goto L_db;
  e.models;
  r = [];
  let o;
  for (const o of r) {
    if (!(("string" == typeof o.slug))) goto L_1b3;
    if (!((o.slug.trim().length > 0))) goto L_1b3;
    t.add(o.slug);
  }
  if (!((e.versions == null))) goto L_1e7;
  e.versions;
  n = [];
  let o#1;
  for (const o#1 of n) {
    let e#1;
    if (!((o#1.intelligence_presets == null))) goto L_223;
    o#1.intelligence_presets;
    for (const e#1 of []) {
      if (!(("string" == typeof e#1.model_slug))) goto L_2f5;
      if (!((e#1.model_slug.trim().length > 0))) goto L_2f5;
      t.add(e#1.model_slug);
      // [栈深重同步 3 -> 6]
    }
  }
  // append([], 0, t)
  t;
  return {defaultModelSlug: e.default_model_slug, modelSlugs: []};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: t
// closure: E, e
function {
  return (E(t) === e);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=42B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: t
// closure: _, n, e
function {
  return _(t, n, e.model);   // tail call
}

// fn G  args=2 vars=7 closure=6 cpool=2 bc=792B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, t
// locals: r, e#1, n, n#1, o
// closure: E, _, g, T, c, a
function {
  let o;
  let n#1;
  let r;
  r = e.modelSlug;
  if (!((undefined !== r))) goto L_14e;
  let n;
  let e#1;
  e#1 = E(r);
  n = t.modelSlugs.find(function <atom:0>);
  if (!((undefined !== n))) goto L_96;
  return n;
  if ((g.test(r))) goto L_ee;
  if (!(T.test(r))) goto L_f4;
  return r;
  throw new c.ChatGPTConversationError("The selected model "".concat(r, "" is not available to this account."));
  n#1 = E(a.assistantResponseModelSlug(e.model));
  o = t.modelSlugs.find(function <atom:0>);
  if (!((undefined !== o))) goto L_1ed;
  return o;
  if (!((e.model === a.AssistantResponseModel.Sol))) goto L_27a;
  return t.defaultModelSlug;
  throw new c.ChatGPTConversationError("The selected model "".concat(a.assistantResponseModelSlug(e.model), "" is not available to this account."));
}

// fn _  args=3 vars=4 closure=2 cpool=0 bc=366B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, t, r
// locals: n
// closure: E, a
function {
  let n;
  n = E(e);
  if (!((n !== t))) goto L_63;
  if ((!!n.startsWith("".concat(t, "workmode")))) goto L_16d;
  if (!((r === a.AssistantResponseModel.Standard))) goto L_145;
  if (!(n.startsWith(t))) goto L_16d;
  if (!(!n.includes("sol"))) goto L_16d;
  return !n.includes("terra");
  return n.startsWith(t);
}

// fn E  args=1 vars=1 closure=0 cpool=2 bc=79B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
function {
  return e.toLocaleLowerCase().replace(new RegExp("[^a-z\\d]"), "");   // tail call
}

// fn S  args=1 vars=1 closure=2 cpool=0 bc=209B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: D, c
function {
  if ((!D(e))) goto L_7e;
  if ((("string" != typeof e.current_node))) goto L_7e;
  if (!((0 === e.current_node.trim().length))) goto L_ae;
  throw new c.ChatGPTConversationError("ChatGPT did not return the current conversation message.");
  return e.current_node;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=113B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: <atom:0>
// locals: e
function {
  e = <to_object>(<atom:0>).file;
  <to_object>(<atom:0>);
  return e.mimeType.startsWith("image/");   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=300B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: <atom:0>
// locals: e, t, r
function {
  e = <to_object>(<atom:0>).file;
  t = <to_object>(<atom:0>).fileId;
  r = <to_object>(<atom:0>).imageDimensions;
  <to_object>(<atom:0>);
  if (!((r == null))) goto L_af;
  r;
  goto L_d0;
  if (!((r == null))) goto L_105;
  r;
  goto L_126;
  return {asset_pointer: "file-service://".concat(t), content_type: "image_asset_pointer", height: undefined.height, size_bytes: e.size, width: undefined.width};
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=208B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: <atom:0>
// locals: e, t
function {
  e = <to_object>(<atom:0>).file;
  t = <to_object>(<atom:0>).fileId;
  <to_object>(<atom:0>);
  return {id: t, mime_type: e.mimeType, name: e.name, size: e.size, source: "local"};
}

// fn I  args=5 vars=6 closure=1 cpool=3 bc=534B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, t, r, n, o
// locals: i
// closure: l
function {
  let i;
  i = o.filter(function <atom:0>);
  if (!((undefined === e.conversationId))) goto L_61;
  goto L_89;
  // [栈深重同步 2 -> 1]
  null;
  {conversation_id: e.conversationId};
  if (!((0 === i.length))) goto L_d4;
  goto L_116;
  // [栈深重同步 3 -> 2]
  // append([], 0, i.map(function <atom:0>))
  [][i.map(function <atom:0>)] = t;
  (t ++);
  if (!((0 === o.length))) goto L_150;
  goto L_17f;
  // [栈深重同步 3 -> 2]
  if (!((true === e.enableModelWrittenDIL))) goto L_1d6;
  goto L_1d7;
  // [栈深重同步 2 -> 1]
  null;
  {};
  return {action: "next", conversation_mode: {kind: "primary_assistant"}, history_and_training_disabled: false, messages: [{author: {role: "user"}, content: {content_type: "multimodal_text", parts: []}, id: l.createChatGPTConversationMessageId(), metadata: {attachments: o.map(function <atom:0>)}}], model: r, parent_message_id: n, stream: true, timezone_offset_min: new Date().getTimezoneOffset()};
}

// fn R  args=3 vars=3 closure=2 cpool=0 bc=249B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, t, n
// closure: c, r
function {
  if (!((401 === t))) goto L_35;
  return new c.ChatGPTConversationError("Your ChatGPT session expired. Sign in again.");
  if (!((403 === t))) goto L_6a;
  return new c.ChatGPTConversationError("This ChatGPT account or device cannot complete the required integrity check.");
  if (!((t == null))) goto L_ec;
  t;
  return new c.ChatGPTConversationError("The ChatGPT ".concat(n, " request failed (", String(r.OAINetworkResultKind[e]), ")."));
}

// fn k  args=2 vars=2 closure=4 cpool=0 bc=326B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, t
// closure: v, R, r, c
function {
  if (!((e instanceof v.ClientApiHTTPError))) goto L_93;
  return R(r.OAINetworkResultKind.ServiceError, e.statusCode, t);
  if (!((e instanceof v.ClientApiHTTPTransportError))) goto L_105;
  return R(r.OAINetworkResultKind.NetworkError, undefined, t);
  if (!((e instanceof Error))) goto L_110;
  return e;
  return new c.ChatGPTConversationError((("The ChatGPT " + t) + " request failed."));
}

// fn A  args=1 vars=1 closure=1 cpool=0 bc=415B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: c
function {
  if (!(e.message.includes("HTTP status 401"))) goto L_7b;
  return new c.ChatGPTConversationError("Your ChatGPT session expired. Sign in again.");
  if (!(e.message.includes("HTTP status 403"))) goto L_f6;
  return new c.ChatGPTConversationError("This ChatGPT account or device needs a first-party integrity check before sending messages.");
  if (!(e.message.includes("HTTP status 429"))) goto L_171;
  return new c.ChatGPTConversationError("ChatGPT is temporarily rate limited. Try again shortly.");
  return new c.ChatGPTConversationError("The ChatGPT response stream could not start.");
}

// fn q  args=1 vars=1 closure=1 cpool=0 bc=88B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: c
function {
  if (!((e instanceof c.ChatGPTConversationError))) goto L_2a;
  return e;
  return new c.ChatGPTConversationError("The ChatGPT response could not be completed.");
}

// fn D  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.service = e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: t
function {
  return t.onResponse(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: t
function {
  return t.onFailure(e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=2 bc=264B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, t
// locals: this
// closure: b
function {
  this = this;
  if (!((undefined === e.bodyJson))) goto L_bf;
  goto L_e7;
  // [栈深重同步 4 -> 3]
  null;
  {bodyJson: e.bodyJson};
  return this.service.send({method: b(e.method), path: e.path}, {onResponse: function <atom:0>, onFailure: function <atom:0>});   // tail call
}

// fn b  args=1 vars=1 closure=0 cpool=0 bc=92B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
function {
  if (!((e === "GET"))) goto L_10;
  return "GET";
  if (!((e === "POST"))) goto L_1f;
  return "POST";
  if (!((e === "PUT"))) goto L_2e;
  return "PUT";
  if (!((e === "PATCH"))) goto L_3d;
  return "PATCH";
  if (!((e === "DELETE"))) goto L_4c;
  return "DELETE";
  e;
  throw new TypeError("Unsupported generated HTTP method");
}

// fn M  args=3 vars=4 closure=4 cpool=0 bc=132B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, r, o
// locals: n
// closure: n, t, ChatGPTDirectResponseClient, x
function {
  if (!(n.isVersionAtLeast(11))) goto L_74;
  let n;
  n = t.getDeviceIntegrityService(r);
  if (!((undefined !== n))) goto L_74;
  return new ChatGPTDirectResponseClient(e, {integrityProvider: x(n), streamWorker: o});
  return new ChatGPTDirectResponseClient(e, {streamWorker: o});
}

// fn x  args=1 vars=1 closure=1 cpool=0 bc=9B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// closure: ChatGPTDeviceIntegrityProvider
function {
  return new ChatGPTDeviceIntegrityProvider(e);
}

// fn <atom:0>  args=2 vars=4 closure=6 cpool=2 bc=445B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: n, o
// locals: i, s
// closure: e, m, f, r, c, t
function {
  let s;
  let i;
  i = e.headerValues[o];
  if (!(("string" == typeof n))) goto L_5c;
  goto L_5d;
  // [栈深重同步 1 -> 0]
  s = "";
  if ((!m.test(s))) goto L_158;
  if (!(!s.startsWith("openai-sentinel-"))) goto L_ec;
  if ((!f.has(s))) goto L_158;
  if ((r.has(s))) goto L_158;
  if ((("string" != typeof i))) goto L_158;
  if (!(new RegExp("[\\r\\n\\u0000]").test(i))) goto L_188;
  throw new c.ChatGPTConversationError("The first-party integrity provider returned invalid request headers.");
  r.add(s);
  t[n] = i;
  return;
}

// fn U  args=1 vars=3 closure=3 cpool=1 bc=377B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e
// locals: t, r
// closure: m, f, c
function {
  let r;
  let t;
  if ((!Array.isArray(e.headerNames))) goto L_f0;
  if ((!Array.isArray(e.headerValues))) goto L_f0;
  if (!((e.headerNames.length !== e.headerValues.length))) goto L_120;
  throw new c.ChatGPTConversationError("The first-party integrity provider returned invalid request headers.");
  t = {};
  r = new Set();
  e.headerNames.forEach(function <atom:0>);
  return t;
}

// fn z  args=2 vars=4 closure=2 cpool=0 bc=403B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: e, t
// locals: r, n
// closure: c, D
function {
  let r;
  if (!((undefined === t))) goto L_a;
  return e;
  r = undefined;
  try { // catch -> L_43
  r = JSON.parse(t);
  JSON.parse(t);
  <?>;
  goto L_78;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_77
  throw new c.ChatGPTConversationError("The first-party integrity provider returned an invalid request challenge.");
  // [栈深重同步 0 -> 1]
  throw <?>;
  if ((!D(r))) goto L_132;
  if (((1 !== Object.keys(r).length))) goto L_132;
  if ((("string" != typeof r.app_attest_challenge))) goto L_132;
  if (!((0 === r.app_attest_challenge.trim().length))) goto L_162;
  throw new c.ChatGPTConversationError("The first-party integrity provider returned an invalid request challenge.");
  null;
  e;
  return {app_attest_challenge: r.app_attest_challenge};
}

// fn <atom:0>  args=3 vars=53 closure=0 cpool=33 bc=677B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// args: require, module, exports
// locals: e, t, r, n, o, i, s, a, c, d, l, h, u, v, C, p, g, T, m, f, P, ChatGPTRequirementsIntegrityProvider, <class_fields_init>, ChatGPTRequirementsIntegrityProvider#1, ChatGPTDeviceIntegrityProvider, <class_fields_init>#1, ChatGPTDeviceIntegrityProvider#1, ChatGPTDirectResponseClient, <class_fields_init>#2, ChatGPTDirectResponseClient#1, y, w, G, _, E, S, I, R, k, A, q, D, ChatGPTConversationTransportAdapter, <class_fields_init>#3, ChatGPTConversationTransportAdapter#1, b, M, x, U, z
function {
  y = function y;
  w = function w;
  G = function G;
  _ = function _;
  E = function E;
  S = function S;
  I = function I;
  R = function R;
  k = function k;
  A = function A;
  q = function q;
  D = function D;
  b = function b;
  M = function M;
  x = function x;
  U = function U;
  z = function z;
  let ChatGPTConversationTransportAdapter#1;
  let ChatGPTDirectResponseClient#1;
  let ChatGPTDeviceIntegrityProvider#1;
  let ChatGPTRequirementsIntegrityProvider#1;
  let P;
  let f;
  let m;
  let T;
  let g;
  let p;
  let C;
  let v;
  let u;
  let h;
  let l;
  let d;
  let c;
  let a;
  let s;
  let i;
  let o;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTDirectResponseClient = undefined;
  exports.createChatGPTDirectResponseClient = undefined;
  exports.createChatGPTDeviceIntegrityProvider = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("oai_platform_services/src/OAIDeviceIntegrity");
  r = require("oai_platform_services/src/OAINetworkClient");
  n = require("valdi_core/src/CompilerIntrinsics");
  o = require("valdi_http/src/HTTPClient");
  i = require("valdi_http/src/ServerSentEventClient");
  s = require("valdi_http/src/StreamingHTTPClient");
  a = require("./AssistantResponseClient");
  c = require("./ChatGPTConversationError");
  d = require("./ChatGPTConversationEventDecoder");
  l = require("./ChatGPTConversationIdentifiers");
  h = require("./ChatGPTStreamingContracts");
  u = require("../files/ChatGPTFileUploadService");
  v = require("../generated/ChatGPTConversationApiClient");
  C = "/backend-api/f/conversation";
  p = "/backend-api/conversation";
  g = new RegExp("^alpha:[a-z\\d._-]+:[a-z\\d._-]+$");
  T = new RegExp("^do_not_start__dil_[a-z\\d._-]+:test:[a-z\\d._-]+:[a-z\\d._-]+$");
  m = new RegExp("^[!#$%&'*+.^_`|~\\da-z-]+$");
  f = new Set(["oai-android-play-integrity-token-failed", "oai-client-type", "oai-device-id", "oai-echo-logs", "oai-package-name", "oai-telemetry", "user-agent", "x-sentinel-dc", "x-sentinel-payload"]);
  P = 3;
  let ChatGPTRequirementsIntegrityProvider;
  let <class_fields_init>;
  class ChatGPTRequirementsIntegrityProvider extends undefined { ... }
  <proto:ChatGPTRequirementsIntegrityProvider>.prepare = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ChatGPTRequirementsIntegrityProvider>;
  ChatGPTRequirementsIntegrityProvider = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTRequirementsIntegrityProvider#1 = function <atom:0>;
  let ChatGPTDeviceIntegrityProvider;
  let <class_fields_init>#1;
  class ChatGPTDeviceIntegrityProvider extends undefined { ... }
  <proto:ChatGPTDeviceIntegrityProvider>.prepare = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ChatGPTDeviceIntegrityProvider>;
  ChatGPTDeviceIntegrityProvider = function <atom:0>;
  // close_loc <class_fields_init>#1
  ChatGPTDeviceIntegrityProvider#1 = function <atom:0>;
  let ChatGPTDirectResponseClient;
  let <class_fields_init>#2;
  class ChatGPTDirectResponseClient extends undefined { ... }
  <proto:ChatGPTDirectResponseClient>.streamResponse = function <atom:0>;
  <proto:ChatGPTDirectResponseClient>.resolveModel = function <atom:0>;
  <proto:ChatGPTDirectResponseClient>.resolveParentMessageId = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:ChatGPTDirectResponseClient>;
  ChatGPTDirectResponseClient = function <atom:0>;
  // close_loc <class_fields_init>#2
  ChatGPTDirectResponseClient#1 = function <atom:0>;
  exports.ChatGPTDirectResponseClient = ChatGPTDirectResponseClient#1;
  let ChatGPTConversationTransportAdapter;
  let <class_fields_init>#3;
  class ChatGPTConversationTransportAdapter extends undefined { ... }
  <proto:ChatGPTConversationTransportAdapter>.send = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:ChatGPTConversationTransportAdapter>;
  ChatGPTConversationTransportAdapter = function <atom:0>;
  // close_loc <class_fields_init>#3
  ChatGPTConversationTransportAdapter#1 = function <atom:0>;
  exports.createChatGPTDirectResponseClient = M;
  exports.createChatGPTDeviceIntegrityProvider = x;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/conversations/ChatGPTDirectResponseClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
