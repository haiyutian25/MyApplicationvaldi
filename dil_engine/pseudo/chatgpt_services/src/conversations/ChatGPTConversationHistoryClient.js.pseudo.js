// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
function {
  e.Assistant = 0;
  e[0] = "Assistant";
  e.User = 1;
  e[1] = "User";
  return;
}

// fn <atom:0>  args=3 vars=8 closure=2 cpool=0 bc=253B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, n, o
// locals: r, s, this.active_func, new.target, this
// closure: t, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let s;
  let r;
  if (!((undefined === n))) goto L_18;
  goto L_4d;
  // [栈深重同步 1 -> 0]
  r = " (HTTP ".concat(String(n), ")");
  s = "ChatGPT conversation history request to ".concat(o, " failed: ", t.OAINetworkResultKind[e], r);
  this = new new.target(s);
  if (!(<class_fields_init>)) goto L_c1;
  <class_fields_init>.call(this);
  new new.target(s);
  this.resultKind = e;
  this.statusCode = n;
  this.endpoint = o;
  this.message = s;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=67B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
// locals: this
// closure: <class_fields_init>, t
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.networkClient = new t.OAINetworkClient(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=130B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// locals: this
// closure: a, l, C
function {
  this = this;
  return this.request(a, {request: {method: "GET", path: a, query: {offset: "0", limit: String(l), order: "updated", expand: "false", is_archived: "false"}}, decode: C});   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=89B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// locals: this
// closure: d, E
function {
  this = this;
  return this.request(d, {request: {method: "GET", path: d, query: {item_type: "conversation"}}, decode: E});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=6B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: t
// closure: g, e
function {
  return g(t, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
function {
  return e.cancel();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
function {
  return e.cancel();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=2 bc=221B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// closure: s, n, o, r
function {
  if ((s)) goto L_dc;
  s = true;
  true;
  n.cancel();
  o.forEach(function <atom:0>);
  o.clear();
  r.forEach(function <atom:0>);
  r.clear();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// closure: s
function {
  return s;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=46B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
// closure: s, this, o, r
function {
  return this.resolveConversationImages(e, o, r, function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=7 closure=2 cpool=3 bc=263B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
// locals: t, n, o, r, s, this
// closure: g, c
function {
  this = this;
  let s;
  let r;
  let o;
  let n;
  let t;
  t = "".concat(c, "/", encodeURIComponent(e));
  n = this.request(t, {request: {method: "GET", path: t}, decode: function <atom:0>});
  o = new Set();
  r = new Set();
  s = false;
  return {cancel: function <atom:0>, result: n.result.then(function <atom:0>)};
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=47B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, t
// locals: this
function {
  this = this;
  return this.updateConversation(e, {title: t});   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=48B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
// locals: this
function {
  this = this;
  return this.updateConversation(e, {is_visible: false});   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=127B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, t
// locals: n, this
// closure: d
function {
  this = this;
  let n;
  n = "".concat(d, "/conversation/", encodeURIComponent(e));
  if (!(t)) goto L_6a;
  goto L_6f;
  // [栈深重同步 5 -> 4]
  return this.requestEmpty(n, {method: "DELETE", path: n});   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=123B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, t
// locals: n, this
// closure: c
function {
  this = this;
  let n;
  n = "".concat(c, "/", encodeURIComponent(e));
  return this.requestEmpty(n, {jsonBody: t, method: "PATCH", path: n});   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=188B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: t
// locals: n
// closure: a, e
function {
  let n;
  if (!(a())) goto L_9;
  throw t;
  if (!((t instanceof Error))) goto L_36;
  goto L_3d;
  // [栈深重同步 1 -> 0]
  n = String(t);
  if (!(e.isLoggingEnabled)) goto L_bb;
  console.warn("Unable to resolve a ChatGPT conversation image: ".concat(n));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// closure: s, n
function {
  s.delete(n);
  return;
}

// fn <atom:0>  args=1 vars=9 closure=10 cpool=2 bc=1428B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: d
// locals: u, t, n, l, n#1, e, p, t#1
// closure: a, e, s, c, this, r, n, i, t, o
function {
  let l;
  let u;
  u = d.url;
  if (!((undefined === u))) goto L_1f2;
  let t;
  t = c.get(d.assetPointer);
  if (!((undefined === t))) goto L_1e9;
  let n;
  n = this.loadImageDownloadURL(d.assetPointer, r.id);
  s.add(n);
  t = n.result.catch(function <atom:0>).finally(function <atom:0>);
  n.result.catch(function <atom:0>).finally(function <atom:0>);
  c.set(d.assetPointer, t);
  // close_loc n
  u = (await t);
  (await t);
  if (!((undefined === u))) goto L_1fb;
  return undefined; // async
  l = n.authenticatedImageRequestPath(u);
  if (!((undefined !== l))) goto L_584;
  let n#1;
  n#1 = this.networkClient.requestBytes({method: "GET", path: l});
  i.add(n#1);
  try { // catch -> L_482
  let e;
  e = (await n#1.result);
  if (((e.kind !== t.OAINetworkResultKind.Success))) goto L_3ec;
  if (!(!e.value.contentType.toLowerCase().startsWith("image/"))) goto L_3fd;
  throw new Error("The authenticated image response did not contain a supported image.");
  null;
  d;
  // gosub (finally 块) 1368
  return {asset: o.makeAssetFromBytes(e.value.bytes), url: u}; // async
  // [栈深重同步 0 -> 1]
  p = <?>;
  try { // catch -> L_552
  let t#1;
  if (!(a())) goto L_493;
  throw p;
  if (!((p instanceof Error))) goto L_4c2;
  goto L_4ca;
  // [栈深重同步 1 -> 0]
  t#1 = String(p);
  if (!(e.isLoggingEnabled)) goto L_549;
  console.warn("Unable to load an authenticated ChatGPT conversation image: ".concat(t#1));
  // gosub (finally 块) 1368
  return undefined; // async
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1368
  throw <?>;
  i.delete(n#1);
  // ret (finally 块) 
  null;
  d;
  return {url: u}; // async
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
function {
  return (undefined !== e);
}

// fn <atom:0>  args=1 vars=4 closure=10 cpool=2 bc=228B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: d
// locals: u, l, p
// closure: a, e, s, c, this, r, n, i, t, o
function {
  let p;
  let l;
  let u;
  u = d.images;
  if (((undefined === u))) goto L_3b;
  if (!((0 === u.length))) goto L_3f;
  return d; // async
  l = (await Promise.all(u.map(function <atom:0>)));
  p = l.filter(function <atom:0>);
  if (!((0 === p.length))) goto L_d4;
  null;
  d;
  goto L_e3;
  // [栈深重同步 1 -> 0]
  null;
  d;
  return {images: p}; // async
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=169B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
function {
  if (((e.content.trim().length > 0))) goto L_a8;
  if (((undefined !== e.dilResult))) goto L_a8;
  if (!((e.images == null))) goto L_9f;
  e.images;
  goto L_a0;
  if (!((undefined.length == null))) goto L_a6;
  undefined.length;
  return (0 > 0);
}

// fn <atom:0>  args=4 vars=7 closure=4 cpool=2 bc=187B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: r, s, i, a
// locals: c, d, this
// closure: e, n, t, o
function {
  this = this;
  let d;
  let c;
  c = new Map();
  d = (await Promise.all(r.messages.map(function <atom:0>)));
  null;
  r;
  return {messages: d.filter(function <atom:0>)}; // async
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=271B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, t
// locals: n, o, this
// closure: u, w
function {
  this = this;
  let o;
  let n;
  n = e.slice((e.indexOf("://") + 3)).split("?")[0];
  o = "".concat(u, "/", encodeURIComponent(n));
  return this.request(o, {request: {method: "GET", path: o, query: {conversation_id: t}}, decode: w});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// closure: o
function {
  o.cancel();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=218B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: n
// closure: t, ChatGPTConversationHistoryRequestError, e
function {
  if (!((n.kind !== t.OAINetworkResultKind.Success))) goto L_b7;
  throw new ChatGPTConversationHistoryRequestError(n.kind, n.statusCode, e);
  return n.value;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=2 bc=166B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, n
// locals: o, this
// closure: t, ChatGPTConversationHistoryRequestError
function {
  this = this;
  let o;
  o = this.networkClient.requestJson(n);
  return {cancel: function <atom:0>, result: o.result.then(function <atom:0>)};
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// closure: o
function {
  o.cancel();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=184B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: n
// closure: t, ChatGPTConversationHistoryRequestError, e
function {
  if (!((n.kind !== t.OAINetworkResultKind.Success))) goto L_b7;
  throw new ChatGPTConversationHistoryRequestError(n.kind, n.statusCode, e);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=2 bc=166B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, n
// locals: o, this
// closure: t, ChatGPTConversationHistoryRequestError
function {
  this = this;
  let o;
  o = this.networkClient.requestEmpty(n);
  return {cancel: function <atom:0>, result: o.result.then(function <atom:0>)};
}

// fn v  args=1 vars=1 closure=1 cpool=0 bc=9B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
// closure: AuthenticatedChatGPTConversationHistoryClient
function {
  return new AuthenticatedChatGPTConversationHistoryClient(e);
}

// fn <atom:0>  args=1 vars=5 closure=7 cpool=0 bc=1082B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
// locals: t, n, o, e#1
// closure: $, T, l, r, f, m, u
function {
  let o;
  let n;
  let t;
  t = $(e.value, e.description);
  if (!(("user" === T($(t.author, "".concat(e.description, ".author")), "role", "".concat(e.description, ".author"))))) goto L_14b;
  l = new r.AssistantReasoningAccumulator();
  new r.AssistantReasoningAccumulator();
  if (((undefined === t.metadata))) goto L_19c;
  if (!((null === t.metadata))) goto L_1a1;
  goto L_213;
  // [栈深重同步 1 -> 0]
  n = $(t.metadata, "".concat(e.description, ".metadata"));
  if (!((n == null))) goto L_221;
  n;
  goto L_242;
  if (!((true !== undefined.is_visually_hidden_from_conversation))) goto L_271;
  l.consume(t);
  if (!((n == null))) goto L_27f;
  n;
  goto L_2a0;
  if (!((true === undefined.is_thinking_preamble_message))) goto L_2a4;
  return;
  o = f(t, e.description, e.nodeId);
  if (!((undefined !== o))) goto L_439;
  if (!((o.role === m.Assistant))) goto L_40e;
  let e#1;
  l.complete();
  e#1 = l.snapshot();
  if (!((undefined === e#1))) goto L_3cb;
  goto L_3dc;
  // [栈深重同步 3 -> 2]
  null;
  o;
  u.push({reasoning: e#1});
  l = new r.AssistantReasoningAccumulator();
  new r.AssistantReasoningAccumulator();
  return;
  u.push(o);
  return;
}

// fn g  args=2 vars=14 closure=5 cpool=1 bc=910B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, t
// locals: n, o, s, i, a, c, d, e#1, t#1, n#1, u, l
// closure: $, T, r, f, m
function {
  let l;
  let u;
  let d;
  let c;
  let a;
  let i;
  let s;
  let o;
  let n;
  n = $(e, "conversation detail response");
  o = T(n, "conversation_id", "conversation detail response");
  if (!((o !== t))) goto L_4a;
  throw new TypeError("Conversation detail response.conversation_id does not match the requested conversation");
  s = $(n.mapping, "conversation detail response.mapping");
  i = T(n, "current_node", "conversation detail response");
  a = i;
  c = new Set();
  d = [];
  if (!((undefined !== a))) goto L_2f7;
  let n#1;
  let t#1;
  let e#1;
  if (!(c.has(a))) goto L_e9;
  throw new TypeError("Conversation detail response.mapping contains a parent cycle");
  c.add(a);
  e#1 = "conversation detail response.mapping[".concat(a, "]");
  t#1 = $(s[a], e#1);
  if (!((undefined !== t#1.message))) goto L_23a;
  if (!((null !== t#1.message))) goto L_23a;
  d.push({description: "".concat(e#1, ".message"), nodeId: a, value: t#1.message});
  n#1 = t#1.parent;
  if (!((null != n#1))) goto L_2dd;
  if ((("string" != typeof n#1))) goto L_2a0;
  if (!((0 === n#1.trim().length))) goto L_2dd;
  throw new TypeError("Expected ".concat(e#1, ".parent to be a non-empty string or null"));
  if (!(("string" == typeof n#1))) goto L_2ee;
  goto L_2ef;
  // [栈深重同步 1 -> 0]
  a = undefined;
  undefined;
  goto L_9b;
  u = [];
  l = new r.AssistantReasoningAccumulator();
  d.reverse().forEach(function <atom:0>);
  return {id: o, messages: u, parentMessageId: i};
}

// fn <atom:0>  args=2 vars=5 closure=7 cpool=0 bc=414B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, n
// locals: o, e#1, r
// closure: h, $, t, y, d, a, v
function {
  let r;
  let o;
  if (!(("string" == typeof e))) goto L_3a;
  h.push(e);
  return;
  o = $(e, "".concat(t, ".content.parts[", String(n), "]"));
  if (!(("image_asset_pointer" === o.content_type))) goto L_e8;
  let e#1;
  e#1 = y(o, d, a, t, n);
  if (!((undefined !== e#1))) goto L_e7;
  v.push(e#1);
  r = o.text;
  if (!((undefined !== r))) goto L_165;
  if (!(("string" != typeof r))) goto L_165;
  throw new TypeError("Expected ".concat(t, ".content.parts[", String(n), "].text to be a string"));
  if (!(("string" == typeof r))) goto L_19d;
  h.push(r);
  return;
}

// fn f  args=3 vars=15 closure=7 cpool=1 bc=1408B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, t, n
// locals: o, r, a, c, d, u, l, h, v, g, f, w
// closure: $, y, T, p, i, s, m
function {
  let w;
  let f;
  let g;
  let v;
  let h;
  let l;
  let u;
  let d;
  let c;
  let a;
  let r;
  let o;
  o = $(e, t);
  r = $(o.author, "".concat(t, ".author"));
  a = T(r, "role", "".concat(t, ".author"));
  if (!(("tool" === a))) goto L_e6;
  c = (r.name === p);
  if (!(("user" !== a))) goto L_104;
  if (!(("assistant" !== a))) goto L_104;
  if (!(!c)) goto L_104;
  return;
  d = undefined;
  if (!((undefined !== o.metadata))) goto L_208;
  if (!((null !== o.metadata))) goto L_208;
  d = $(o.metadata, "".concat(t, ".metadata"));
  $(o.metadata, "".concat(t, ".metadata"));
  if (((true === d.is_visually_hidden_from_conversation))) goto L_205;
  if (!((true === d.is_user_system_message))) goto L_208;
  return;
  u = $(o.content, "".concat(t, ".content"));
  l = T(u, "content_type", "".concat(t, ".content"));
  if (!(("text" !== l))) goto L_2a9;
  if (!(("multimodal_text" !== l))) goto L_2a9;
  return;
  if (!(!Array.isArray(u.parts))) goto L_332;
  throw new TypeError("Expected ".concat(t, ".content.parts to be an array"));
  h = [];
  v = [];
  u.parts.forEach(function <atom:0>);
  g = h.join("
");
  if (!(("assistant" === a))) goto L_41f;
  if (!((undefined !== d))) goto L_41f;
  goto L_420;
  // [栈深重同步 1 -> 0]
  f = undefined;
  if (!(("assistant" === a))) goto L_45e;
  if (!((undefined !== d))) goto L_45e;
  goto L_45f;
  // [栈深重同步 1 -> 0]
  w = undefined;
  if (!(c)) goto L_46e;
  if (((0 === v.length))) goto L_4ab;
  if (!((0 === g.trim().length))) goto L_4af;
  if (!((undefined === f))) goto L_4af;
  if (!((0 === v.length))) goto L_4af;
  return undefined;
  if (!((undefined === f))) goto L_4c2;
  goto L_4cb;
  // [栈深重同步 2 -> 1]
  null;
  {dilResult: f};
  if (((undefined === w))) goto L_4df;
  if (!((0 === w.length))) goto L_4e4;
  goto L_4ed;
  // [栈深重同步 2 -> 1]
  null;
  {entityReferences: w};
  if (!((0 === v.length))) goto L_4fd;
  goto L_506;
  // [栈深重同步 2 -> 1]
  null;
  {images: v};
  if (!(("user" === a))) goto L_519;
  goto L_520;
  // [栈深重同步 2 -> 1]
  null;
  {remoteMessageId: n};
  if (!(("user" === a))) goto L_556;
  goto L_57a;
  // [栈深重同步 2 -> 1]
  return {content: g, role: m.Assistant};
}

// fn y  args=5 vars=12 closure=2 cpool=0 bc=1105B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: t, n, o, r, s
// locals: i, a, c, d, u, l, p
// closure: h, e
function {
  let p;
  let l;
  let u;
  let d;
  let c;
  let a;
  let i;
  i = t.asset_pointer;
  if (!(("string" != typeof i))) goto L_45;
  return;
  if ((i.startsWith("file-service://"))) goto L_a1;
  a = i.startsWith("sediment://");
  c = i.startsWith("https://");
  if (!(!a)) goto L_dc;
  if (!(!c)) goto L_dc;
  return;
  if (!(a)) goto L_166;
  goto L_167;
  // [栈深重同步 1 -> 0]
  d = undefined;
  if (!((undefined !== d))) goto L_232;
  if (!(!h.test(d))) goto L_232;
  if (!(e.isLoggingEnabled)) goto L_230;
  console.warn("Ignoring an invalid image asset pointer in ".concat(r, ".content.parts[", String(s), "]"));
  return;
  u = t.width;
  l = t.height;
  if ((("number" != typeof u))) goto L_309;
  if ((!Number.isFinite(u))) goto L_309;
  if (((u <= 0))) goto L_309;
  if ((("number" != typeof l))) goto L_309;
  if ((!Number.isFinite(l))) goto L_309;
  if (!((l <= 0))) goto L_39e;
  if (!(e.isLoggingEnabled)) goto L_39c;
  console.warn("Ignoring an image with invalid dimensions in ".concat(r, ".content.parts[", String(s), "]"));
  return;
  if (!((n == null))) goto L_3a7;
  n;
  goto L_3c8;
  p = undefined.image_gen_title;
  if (!(("string" == typeof p))) goto L_408;
  if (!((p.trim().length > 0))) goto L_408;
  goto L_41d;
  // [栈深重同步 2 -> 1]
  if (!(("user" === o))) goto L_418;
  goto L_41d;
  // [栈深重同步 2 -> 1]
  if (!(c)) goto L_442;
  goto L_443;
  // [栈深重同步 2 -> 1]
  null;
  {};
  return {accessibilityLabel: "Generated image", assetPointer: i, height: l, width: u};
}

// fn w  args=1 vars=3 closure=2 cpool=0 bc=135B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
// locals: t, n
// closure: $, T
function {
  let n;
  let t;
  t = $(e, "conversation image download response");
  if (!(("success" !== T(t, "status", "conversation image download response")))) goto L_35;
  throw new TypeError("Conversation image download response.status must be success");
  n = T(t, "download_url", "conversation image download response");
  if (!(!n.startsWith("https://"))) goto L_83;
  throw new TypeError("Conversation image download response.download_url must be an HTTPS URL");
  return n;
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=0 bc=125B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, t
// locals: o, r
// closure: _, $, n
function {
  let r;
  let o;
  o = "conversation history response.items[".concat(String(t), "]");
  r = _($(e, o), o, undefined);
  if (!((undefined !== r))) goto L_7c;
  n.push(r);
  return;
}

// fn C  args=1 vars=3 closure=2 cpool=1 bc=160B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
// locals: t, n
// closure: _, $
function {
  let n;
  let t;
  t = $(e, "conversation history response").items;
  if (!(!Array.isArray(t))) goto L_6e;
  throw new TypeError("Expected conversation history response.items to be an array");
  n = [];
  t.forEach(function <atom:0>);
  return n;
}

// fn <atom:0>  args=2 vars=5 closure=5 cpool=0 bc=288B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, n
// locals: o, r, s
// closure: $, T, _, q, t
function {
  let s;
  let r;
  let o;
  o = "pinned conversation response[".concat(String(n), "]");
  r = $(e, o);
  if (!(("conversation" !== T(r, "item_type", o)))) goto L_5c;
  return;
  s = _($(r.item, "".concat(o, ".item")), "".concat(o, ".item"), q(r, "pinned_at", o));
  if (!((undefined !== s))) goto L_11f;
  t.push(s);
  return;
}

// fn E  args=1 vars=2 closure=4 cpool=1 bc=111B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e
// locals: t
// closure: $, T, _, q
function {
  let t;
  if (!(!Array.isArray(e))) goto L_3f;
  throw new TypeError("Expected pinned conversation response to be an array");
  t = [];
  e.forEach(function <atom:0>);
  return t;
}

// fn _  args=3 vars=6 closure=4 cpool=0 bc=156B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, t, n
// locals: o, r, s
// closure: A, q, T, b
function {
  let s;
  let r;
  let o;
  o = A(e, "is_archived", t);
  r = A(e, "is_temporary", t);
  s = A(e, "is_temporary_chat", t);
  if (!((true !== o))) goto L_9b;
  if (!((true !== r))) goto L_9b;
  if (!((true !== s))) goto L_9b;
  if (!((undefined === n))) goto L_64;
  goto L_6b;
  // [栈深重同步 2 -> 1]
  null;
  {pinnedAt: n};
  return {createdAt: q(e, "create_time", t), id: T(e, "id", t), snippet: b(e, "snippet", t), title: T(e, "title", t), updatedAt: q(e, "update_time", t)};
  return;
}

// fn $  args=2 vars=2 closure=0 cpool=0 bc=122B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, t
function {
  if ((("object" != typeof e))) goto L_3d;
  if (((null === e))) goto L_3d;
  if (!(Array.isArray(e))) goto L_78;
  throw new TypeError("Expected ".concat(t, " to be an object"));
  return e;
}

// fn T  args=3 vars=4 closure=0 cpool=0 bc=132B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, t, n
// locals: o
function {
  let o;
  o = e[t];
  if ((("string" != typeof o))) goto L_3f;
  if (!((0 === o.trim().length))) goto L_80;
  throw new TypeError("Expected ".concat(n, ".", t, " to be a non-empty string"));
  return o;
}

// fn b  args=3 vars=4 closure=0 cpool=0 bc=101B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, t, n
// locals: o
function {
  let o;
  o = e[t];
  if (!((null != o))) goto L_64;
  if (!(("" !== o))) goto L_64;
  if (!(("string" != typeof o))) goto L_60;
  throw new TypeError("Expected ".concat(n, ".", t, " to be a string"));
  return o;
  return;
}

// fn A  args=3 vars=4 closure=0 cpool=0 bc=94B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, t, n
// locals: o
function {
  let o;
  o = e[t];
  if (!((null != o))) goto L_5d;
  if (!(("boolean" != typeof o))) goto L_59;
  throw new TypeError("Expected ".concat(n, ".", t, " to be a boolean"));
  return o;
  return;
}

// fn q  args=3 vars=4 closure=0 cpool=0 bc=167B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: e, t, n
// locals: o
function {
  let o;
  o = e[t];
  if (!((null != o))) goto L_a6;
  if (!(("number" == typeof o))) goto L_4b;
  if ((Number.isFinite(o))) goto L_61;
  if (!(("string" == typeof o))) goto L_67;
  if (!((o.length > 0))) goto L_67;
  return o;
  throw new TypeError("Expected ".concat(n, ".", t, " to be a finite number or a non-empty string"));
  return;
}

// fn <atom:0>  args=3 vars=37 closure=0 cpool=29 bc=525B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// args: require, module, exports
// locals: e, t, n, o, r, s, i, a, c, d, u, l, p, h, m, ChatGPTConversationHistoryRequestError, <class_fields_init>, ChatGPTConversationHistoryRequestError#1, AuthenticatedChatGPTConversationHistoryClient, <class_fields_init>#1, AuthenticatedChatGPTConversationHistoryClient#1, v, g, f, y, w, C, E, _, $, T, b, A, q
function {
  v = function v;
  g = function g;
  f = function f;
  y = function y;
  w = function w;
  C = function C;
  E = function E;
  _ = function _;
  $ = function $;
  T = function T;
  b = function b;
  A = function A;
  q = function q;
  let AuthenticatedChatGPTConversationHistoryClient#1;
  let ChatGPTConversationHistoryRequestError#1;
  let h;
  let p;
  let l;
  let u;
  let d;
  let c;
  let a;
  let i;
  let s;
  let r;
  let o;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTConversationMessageRole = undefined;
  exports.ChatGPTConversationHistoryRequestError = undefined;
  exports.createChatGPTConversationHistoryClient = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("oai_platform_services/src/OAINetworkClient");
  n = require("oai_authentication_session/src/OAIBearerAPIService");
  o = require("valdi_core/src/Asset");
  r = require("./AssistantReasoning");
  s = require("./ChatGPTConversationEventDecoder");
  i = require("../generated_ui/ModelWrittenDILDecoder");
  a = "/backend-api/conversations";
  c = "/backend-api/conversation";
  d = "/backend-api/pins";
  u = "/backend-api/files/download";
  l = 100;
  p = "t2uay3k.sj1i4kz";
  h = new RegExp("^(?:file-|file_)[A-Za-z0-9_-]{1,255}$");
  if ((m)) goto L_160;
  m = {};
  exports.ChatGPTConversationMessageRole = {};
  !function <atom:0>({});
  let ChatGPTConversationHistoryRequestError;
  let <class_fields_init>;
  class ChatGPTConversationHistoryRequestError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:ChatGPTConversationHistoryRequestError>;
  ChatGPTConversationHistoryRequestError = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTConversationHistoryRequestError#1 = function <atom:0>;
  exports.ChatGPTConversationHistoryRequestError = ChatGPTConversationHistoryRequestError#1;
  let AuthenticatedChatGPTConversationHistoryClient;
  let <class_fields_init>#1;
  class AuthenticatedChatGPTConversationHistoryClient extends undefined { ... }
  <proto:AuthenticatedChatGPTConversationHistoryClient>.loadConversations = function <atom:0>;
  <proto:AuthenticatedChatGPTConversationHistoryClient>.loadPinnedConversations = function <atom:0>;
  <proto:AuthenticatedChatGPTConversationHistoryClient>.loadConversation = function <atom:0>;
  <proto:AuthenticatedChatGPTConversationHistoryClient>.renameConversation = function <atom:0>;
  <proto:AuthenticatedChatGPTConversationHistoryClient>.deleteConversation = function <atom:0>;
  <proto:AuthenticatedChatGPTConversationHistoryClient>.setConversationPinned = function <atom:0>;
  <proto:AuthenticatedChatGPTConversationHistoryClient>.updateConversation = function <atom:0>;
  <proto:AuthenticatedChatGPTConversationHistoryClient>.resolveConversationImages = function <atom:0>;
  <proto:AuthenticatedChatGPTConversationHistoryClient>.loadImageDownloadURL = function <atom:0>;
  <proto:AuthenticatedChatGPTConversationHistoryClient>.request = function <atom:0>;
  <proto:AuthenticatedChatGPTConversationHistoryClient>.requestEmpty = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AuthenticatedChatGPTConversationHistoryClient>;
  AuthenticatedChatGPTConversationHistoryClient = function <atom:0>;
  // close_loc <class_fields_init>#1
  AuthenticatedChatGPTConversationHistoryClient#1 = function <atom:0>;
  exports.createChatGPTConversationHistoryClient = v;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/conversations/ChatGPTConversationHistoryClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
