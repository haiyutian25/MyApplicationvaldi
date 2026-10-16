// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
function {
  e.AccountLibrary = 0;
  e[0] = "AccountLibrary";
  e.ConversationHistory = 1;
  e[1] = "ConversationHistory";
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=61B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("The image gallery request was cancelled.");
  if (!(<class_fields_init>)) goto L_26;
  <class_fields_init>.call(this);
  new new.target("The image gallery request was cancelled.");
  this.message = "The image gallery request was cancelled.";
  return this;
}

// fn <atom:0>  args=3 vars=8 closure=2 cpool=0 bc=253B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e, t, i
// locals: o, a, this.active_func, new.target, this
// closure: r, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let a;
  let o;
  if (!((undefined === t))) goto L_18;
  goto L_4d;
  // [栈深重同步 1 -> 0]
  o = " (HTTP ".concat(String(t), ")");
  a = "ChatGPT image gallery request to ".concat(i, " failed: ", r.OAINetworkResultKind[e], o);
  this = new new.target(a);
  if (!(<class_fields_init>)) goto L_c1;
  <class_fields_init>.call(this);
  new new.target(a);
  this.resultKind = e;
  this.statusCode = t;
  this.endpoint = i;
  this.message = a;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=232B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
// locals: this
// closure: <class_fields_init>, r
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.options = e;
  this.activeRequests = new Set();
  this.disposed = false;
  if (!((0 === e.accountId.trim().length))) goto L_93;
  throw new TypeError("An authenticated account identifier is required for the image gallery.");
  this.networkClient = new r.OAINetworkClient(e.platformServices);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e, t
// closure: r
function {
  r = t;
  t;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// closure: i
function {
  return i;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=114B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// closure: t, this, n
function {
  t.clear();
  this.activeRequests.delete(n);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
function {
  return e.cancel();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=201B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// closure: i, t, r, ChatGPTImageGalleryCancelledError, this, n
function {
  if ((i)) goto L_c8;
  i = true;
  true;
  t.forEach(function <atom:0>);
  t.clear();
  if (!((r == null))) goto L_6e;
  r;
  goto L_76;
  undefined(new ChatGPTImageGalleryCancelledError());
  r = undefined;
  undefined;
  this.activeRequests.delete(n);
  return;
}

// fn <atom:0>  args=1 vars=8 closure=2 cpool=4 bc=404B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
// locals: t, r, i, o, a, n, this
// closure: ChatGPTImageGalleryCancelledError, q
function {
  this = this;
  let n;
  let a;
  let o;
  let i;
  let r;
  let t;
  if (!(this.disposed)) goto L_45;
  return q(new ChatGPTImageGalleryCancelledError());   // tail call
  if (!((undefined !== e))) goto L_90;
  if (((0 === e.trim().length))) goto L_7c;
  if (!((e.length > 1024))) goto L_90;
  return q(new TypeError("The image gallery pagination cursor is invalid."));   // tail call
  t = new Set();
  r = undefined;
  i = false;
  o = new Promise(function <atom:0>);
  a = this.loadPage(e, t, function <atom:0>).finally(function <atom:0>);
  n = {cancel: function <atom:0>, result: Promise.race([a, o])};
  this.activeRequests.add(n);
  return n;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
function {
  return e.cancel();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=199B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_c6;
  this.disposed = true;
  this.activeRequests.forEach(function <atom:0>);
  this.activeRequests.clear();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=683B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
// closure: this, t
function {
  if (!((undefined === e.conversationId))) goto L_99;
  goto L_c1;
  // [栈深重同步 2 -> 1]
  null;
  {conversationId: e.conversationId};
  if (!((undefined === e.createdAt))) goto L_ef;
  goto L_117;
  // [栈深重同步 2 -> 1]
  null;
  {createdAt: e.createdAt};
  if (!((undefined === e.prompt))) goto L_193;
  goto L_1bb;
  // [栈深重同步 2 -> 1]
  null;
  {prompt: e.prompt};
  return {accessibilityLabel: e.title, accountId: this.options.accountId, height: e.height, id: e.id, requiresAuthentication: (undefined !== t.authenticatedImageRequestPath(e.imageUrl)), tags: e.tags, title: e.title, url: e.imageUrl, width: e.width};
}

// fn <atom:0>  args=3 vars=11 closure=11 cpool=1 bc=1316B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: r, i, s
// locals: c, l, r#1, n, h, d, d#1, this
// closure: t, o, n, m, a, y, G, e, P, u, E
function {
  this = this;
  let l;
  let c;
  if (!((undefined === r))) goto L_77;
  goto L_8c;
  // [栈深重同步 5 -> 4]
  c = this.networkClient.requestJson({request: {method: "GET", path: o, query: {after: r, limit: String(n)}}, decode: m});
  i.add(c);
  if (!((undefined === r))) goto L_138;
  goto L_139;
  // [栈深重同步 1 -> 0]
  l = undefined;
  if (!((undefined !== l))) goto L_16b;
  i.add(l);
  try { // catch -> L_3ff
  let h;
  let n;
  let r#1;
  r#1 = (await G(c, o));
  i.delete(c);
  n = r#1.items.map(function <atom:0>);
  h = undefined;
  if (!((undefined !== l))) goto L_2e7;
  try { // catch -> L_248
  h = (await G(l, a)).imagesCount;
  (await G(l, a)).imagesCount;
  <?>;
  // gosub (finally 块) 701
  undefined;
  goto L_2e7;
  // [栈深重同步 0 -> 1]
  d = <?>;
  try { // catch -> L_2b7
  if (!(s())) goto L_256;
  throw d;
  if (!(e.isLoggingEnabled)) goto L_2ac;
  console.warn("The optional image gallery summary could not be loaded.");
  <?>;
  // gosub (finally 块) 701
  undefined;
  goto L_2e7;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 701
  throw <?>;
  i.delete(l);
  // ret (finally 块) 
  P(this.disposed, s);
  if (!((undefined === r#1.cursor))) goto L_385;
  goto L_3af;
  // [栈深重同步 2 -> 1]
  null;
  {cursor: r#1.cursor};
  if (!((undefined === h))) goto L_3ef;
  goto L_3f8;
  // [栈深重同步 2 -> 1]
  null;
  {totalCount: h};
  return {accountId: this.options.accountId, images: n, source: u.AccountLibrary}; // async
  // [栈深重同步 0 -> 1]
  d#1 = <?>;
  try { // catch -> L_523
  i.delete(c);
  if (!((undefined !== l))) goto L_488;
  l.cancel();
  i.delete(l);
  if (((undefined !== r))) goto L_49d;
  if ((!E(d#1))) goto L_49d;
  if (!(s())) goto L_4a2;
  throw d#1;
  if (!(e.isLoggingEnabled)) goto L_4f8;
  console.warn("The generated-image library is unavailable; inspecting recent account conversations instead.");
  return this.loadConversationFallback(i, s); // async
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=9 closure=6 cpool=0 bc=1094B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: t, r
// locals: i, o, a, l, i#1, c, this
// closure: s, n, P, g, e, u
function {
  this = this;
  let a;
  let o;
  let i;
  i = this.options.historyClient.loadConversations();
  o = undefined;
  t.add(i);
  try { // catch -> L_d9
  o = (await i.result);
  (await i.result);
  <?>;
  // gosub (finally 块) 223
  undefined;
  goto L_109;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 223
  throw <?>;
  t.delete(i);
  // ret (finally 块) 
  a = [];
  let l;
  for (const l of o.slice(0, s)) {
    let i#1;
    if (((a.length >= n))) goto L_37a;
    P(this.disposed, r);
    i#1 = this.options.historyClient.loadConversation(l.id);
    t.add(i#1);
    try { // catch -> L_2d3
    g(a, (await i#1.result), l.title, this.options.accountId);
    <catch>;
    // gosub (finally 块) 840
    undefined;
   continue;
    // [栈深重同步 2 -> 4]
    c = <?>;
    try { // catch -> L_342
    if (!(r())) goto L_2e1;
    throw c;
    if (!(e.isLoggingEnabled)) goto L_337;
    console.warn("A recent account conversation could not be inspected for generated images.");
    <?>;
    // gosub (finally 块) 840
    undefined;
   continue;
    // [栈深重同步 2 -> 4]
    // gosub (finally 块) 840
    throw <?>;
    t.delete(i#1);
    // ret (finally 块) 
    // [栈深重同步 3 -> 2]
  }
  P(this.disposed, r);
  return {accountId: this.options.accountId, images: a.slice(0, n), source: u.ConversationHistory}; // async
}

// fn h  args=1 vars=1 closure=1 cpool=0 bc=9B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
// closure: AuthenticatedChatGPTImageGalleryClient
function {
  return new AuthenticatedChatGPTImageGalleryClient(e);
}

// fn <atom:0>  args=2 vars=3 closure=10 cpool=0 bc=873B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: i, c
// locals: d
// closure: v, e, b, a, r, n, o, l, s, t
function {
  let d;
  if (!((undefined === i.asset))) goto L_ab;
  if (!(!v(i.url))) goto L_ab;
  if (!(e.isLoggingEnabled)) goto L_a9;
  console.warn("A conversation image contained no trusted HTTPS image URL and was omitted.");
  return;
  if (!((b(i.accessibilityLabel, 160) == null))) goto L_d8;
  b(i.accessibilityLabel, 160);
  d = a;
  if (!((undefined === i.asset))) goto L_137;
  goto L_15f;
  // [栈深重同步 4 -> 3]
  null;
  {asset: i.asset};
  if (!((undefined === s))) goto L_226;
  goto L_22f;
  // [栈深重同步 4 -> 3]
  null;
  {prompt: s};
  if (!((undefined === i.asset))) goto L_2ab;
  if (!((i.url == null))) goto L_2a9;
  i.url;
  if (((undefined === i.url))) goto L_30c;
  if (!((undefined !== i.asset))) goto L_311;
  goto L_339;
  // [栈深重同步 4 -> 3]
  null;
  {url: i.url};
  r.push({accessibilityLabel: d, accountId: n, conversationId: o.id, height: i.height, id: "".concat(o.id, ":", String(l), ":", String(c)), requiresAuthentication: (undefined !== t.authenticatedImageRequestPath("")), tags: [], title: d, width: i.width});
  return;
}

// fn <atom:0>  args=2 vars=2 closure=10 cpool=1 bc=232B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: c, l
// closure: v, e, b, a, r, n, o, s, t, i
function {
  if (!((c.role !== i.ChatGPTConversationMessageRole.User))) goto L_bc;
  if (!((c.images == null))) goto L_94;
  c.images;
  goto L_e7;
  goto L_e7;
  // [栈深重同步 1 -> 0]
  s = b(c.content, 1200);
  b(c.content, 1200);
  return;
}

// fn g  args=4 vars=5 closure=5 cpool=1 bc=78B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: r, o, a, n
// locals: s
// closure: v, e, b, t, i
function {
  let s;
  s = undefined;
  o.messages.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=218B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e, t
// locals: r
// closure: p, i, o
function {
  let r;
  r = p(e, t);
  if (((undefined === r))) goto L_d9;
  if ((i.has(r.id))) goto L_d9;
  i.add(r.id);
  o.push(r);
  return;
}

// fn m  args=1 vars=5 closure=3 cpool=1 bc=478B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
// locals: t, r, i, o
// closure: p, w, b
function {
  let o;
  let i;
  let r;
  let t;
  t = w(e, "image library response");
  if (!(!Array.isArray(t.items))) goto L_74;
  throw new TypeError("The image library response must contain an items array.");
  if (!((t.items.length > 36))) goto L_ad;
  throw new TypeError("The image library response exceeds the bounded page size.");
  if (!((undefined !== t.cursor))) goto L_139;
  if (!((null !== t.cursor))) goto L_139;
  if (!(("string" != typeof t.cursor))) goto L_139;
  throw new TypeError("The image library response cursor must be a string or null.");
  r = b(t.cursor, 1024);
  i = new Set();
  o = [];
  t.items.forEach(function <atom:0>);
  if (!((undefined === r))) goto L_1c7;
  goto L_1d0;
  // [栈深重同步 2 -> 1]
  null;
  {cursor: r};
  return {items: o};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=7B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
// closure: b
function {
  return b(e, 40);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
function {
  return (undefined !== e);
}

// fn p  args=2 vars=14 closure=8 cpool=2 bc=1420B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: t, r
// locals: i, o, a, n, s, c, l, d, u, h, g, m
// closure: b, w, C, I, f, v, e, T
function {
  let m;
  let g;
  let h;
  let u;
  let d;
  let l;
  let c;
  let s;
  let n;
  let a;
  let o;
  let i;
  i = w(t, "image library item ".concat(String(r)));
  o = i.kind;
  if (!(("image_share" !== o))) goto L_9f;
  if (!(("media_generation" !== o))) goto L_9f;
  if (!(("sora" !== o))) goto L_9f;
  return;
  if (((true === i.output_blocked))) goto L_f1;
  if (!((true === i.is_archived))) goto L_f4;
  return;
  a = C(i.id, "image library item ".concat(String(r), " identifier"));
  n = I(i.width, "width");
  s = I(i.height, "height");
  c = f(i.encodings);
  if (!((c == null))) goto L_1e1;
  c;
  goto L_202;
  l = f(undefined.thumbnail);
  if (!((l == null))) goto L_234;
  l;
  goto L_255;
  d = [i.thumbnail_url, undefined.path, i.url].find(v);
  if (!((undefined === d))) goto L_304;
  if (!(e.isLoggingEnabled)) goto L_302;
  console.warn("An image library item contained no trusted HTTPS image URL and was omitted.");
  return;
  if (!((b(i.prompt, 1200) == null))) goto L_35b;
  b(i.prompt, 1200);
  u = b(i.recreation_prompt, 1200);
  if (!((b(i.title, 160) == null))) goto L_3d0;
  b(i.title, 160);
  if (!((b(i.caption_summary, 160) == null))) goto L_3d0;
  b(i.caption_summary, 160);
  if (!(("image_share" === o))) goto L_3cb;
  goto L_3d0;
  // [栈深重同步 1 -> 0]
  h = "Generated image";
  g = b(i.conversation_id, 256);
  m = T(i.created_at);
  if (!((undefined === g))) goto L_432;
  goto L_43b;
  // [栈深重同步 2 -> 1]
  null;
  {conversationId: g};
  if (!((undefined === m))) goto L_44a;
  goto L_453;
  // [栈深重同步 2 -> 1]
  null;
  {createdAt: m};
  if (!((undefined === u))) goto L_47a;
  goto L_483;
  // [栈深重同步 2 -> 1]
  null;
  {prompt: u};
  if (!(Array.isArray(i.tags))) goto L_573;
  goto L_576;
  // [栈深重同步 2 -> 1]
  return {height: s, id: a, imageUrl: d, tags: [], title: h, width: n};
}

// fn y  args=1 vars=2 closure=1 cpool=0 bc=140B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
// locals: t
// closure: w
function {
  let t;
  t = w(e, "image bootstrap response").images_count;
  if ((("number" != typeof t))) goto L_71;
  if ((!Number.isSafeInteger(t))) goto L_71;
  if (!((t < 0))) goto L_82;
  throw new TypeError("The image bootstrap response must contain a non-negative images_count.");
  return {imagesCount: t};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=87B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
// closure: i
function {
  if (((i === e.slice(1)))) goto L_56;
  return i.endsWith(e);
}

// fn v  args=1 vars=3 closure=3 cpool=1 bc=302B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
// locals: r, i
// closure: l, d, t
function {
  let i;
  let r;
  if (!(("string" != typeof e))) goto L_13;
  return false;
  r = l.exec(e);
  if (!((null === r))) goto L_46;
  return false;
  i = r[1].toLowerCase();
  if (!(!!d.some(function <atom:0>))) goto L_12d;
  if (!(!i.endsWith(".blob.core.windows.net"))) goto L_100;
  if ((!!i.endsWith(".oaiusercontent.com"))) goto L_12d;
  return (undefined !== t.authenticatedImageRequestPath(e));
}

// fn f  args=1 vars=1 closure=0 cpool=0 bc=67B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
function {
  if ((("object" != typeof e))) goto L_3d;
  if (((null === e))) goto L_3d;
  if (!(Array.isArray(e))) goto L_41;
  return undefined;
  return e;
}

// fn w  args=2 vars=3 closure=1 cpool=0 bc=75B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e, t
// locals: r
// closure: f
function {
  let r;
  r = f(e);
  if (!((undefined === r))) goto L_47;
  throw new TypeError("Expected ".concat(t, " to be an object."));
  return r;
}

// fn C  args=2 vars=3 closure=1 cpool=0 bc=78B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e, t
// locals: r
// closure: b
function {
  let r;
  r = b(e, 512);
  if (!((undefined === r))) goto L_4a;
  throw new TypeError("Expected ".concat(t, " to be a non-empty string."));
  return r;
}

// fn b  args=2 vars=3 closure=0 cpool=0 bc=104B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e, t
// locals: r
function {
  let r;
  if (!(("string" != typeof e))) goto L_e;
  return;
  r = e.trim();
  if (!((0 === r.length))) goto L_3e;
  return undefined;
  return r.slice(0, t);
}

// fn T  args=1 vars=2 closure=1 cpool=2 bc=146B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
// locals: t
// closure: b
function {
  if (!(("number" == typeof e))) goto L_8b;
  if (!(Number.isFinite(e))) goto L_8b;
  if (!((e > 0))) goto L_8b;
  let t;
  if (!((e >= 1000000000000.0))) goto L_4a;
  goto L_4f;
  // [栈深重同步 1 -> 0]
  t = (1000 * e);
  if (!((t <= 8640000000000000.0))) goto L_89;
  return new Date(t).toISOString();
  return undefined;
  return b(e, 64);   // tail call
}

// fn I  args=2 vars=2 closure=1 cpool=0 bc=132B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e, t
// closure: c
function {
  if ((("number" != typeof e))) goto L_47;
  if ((!Number.isFinite(e))) goto L_47;
  if (((e <= 0))) goto L_47;
  if (!((e > c))) goto L_82;
  throw new TypeError("The generated image ".concat(t, " must be a positive bounded number."));
  return e;
}

// fn G  args=2 vars=3 closure=2 cpool=0 bc=265B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e, t
// locals: i
// closure: r, ChatGPTImageGalleryRequestError
function {
  let i;
  i = (await e.result);
  if (!((i.kind !== r.OAINetworkResultKind.Success))) goto L_e4;
  throw new ChatGPTImageGalleryRequestError(i.kind, i.statusCode, t);
  return i.value; // async
}

// fn E  args=1 vars=1 closure=2 cpool=0 bc=465B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
// closure: ChatGPTImageGalleryRequestError, r
function {
  if (!((e instanceof ChatGPTImageGalleryRequestError))) goto L_1d0;
  if (((e.resultKind === r.OAINetworkResultKind.HostRejected))) goto L_1d0;
  if (((e.resultKind === r.OAINetworkResultKind.Unavailable))) goto L_1d0;
  if (!((e.resultKind === r.OAINetworkResultKind.ServiceError))) goto L_1d0;
  if (((403 === e.statusCode))) goto L_1d0;
  if (((404 === e.statusCode))) goto L_1d0;
  return (405 === e.statusCode);
}

// fn P  args=2 vars=2 closure=1 cpool=0 bc=18B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e, t
// closure: ChatGPTImageGalleryCancelledError
function {
  if ((e)) goto L_7;
  if (!(t())) goto L_11;
  throw new ChatGPTImageGalleryCancelledError();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
function {
  return;
}

// fn q  args=1 vars=1 closure=0 cpool=1 bc=57B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: e
function {
  return {result: Promise.reject(e), cancel: function <atom:0>};
}

// fn <atom:0>  args=3 vars=40 closure=0 cpool=26 bc=525B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// args: require, module, exports
// locals: e, t, r, i, o, a, n, s, c, l, d, u, ChatGPTImageGalleryCancelledError, <class_fields_init>, ChatGPTImageGalleryCancelledError#1, ChatGPTImageGalleryRequestError, <class_fields_init>#1, ChatGPTImageGalleryRequestError#1, AuthenticatedChatGPTImageGalleryClient, <class_fields_init>#2, AuthenticatedChatGPTImageGalleryClient#1, h, g, m, p, y, v, f, w, C, b, T, I, G, E, P, q
function {
  h = function h;
  g = function g;
  m = function m;
  p = function p;
  y = function y;
  v = function v;
  f = function f;
  w = function w;
  C = function C;
  b = function b;
  T = function T;
  I = function I;
  G = function G;
  E = function E;
  P = function P;
  q = function q;
  let AuthenticatedChatGPTImageGalleryClient#1;
  let ChatGPTImageGalleryRequestError#1;
  let ChatGPTImageGalleryCancelledError#1;
  let d;
  let l;
  let c;
  let s;
  let n;
  let a;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTImageGallerySource = undefined;
  exports.ChatGPTImageGalleryCancelledError = undefined;
  exports.ChatGPTImageGalleryRequestError = undefined;
  exports.createChatGPTImageGalleryClient = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("oai_authentication_session/src/OAIBearerAPIService");
  r = require("oai_platform_services/src/OAINetworkClient");
  i = require("../conversations/ChatGPTConversationHistoryClient");
  o = "/backend-api/my/recent/image_gen";
  a = "/backend-api/images/bootstrap";
  n = 18;
  s = 10;
  c = 16384;
  l = new RegExp("^https:\\/\\/([a-z\\d-]+(?:\\.[a-z\\d-]+)+)(\\/[^\\s#\\\\]*)?$");
  d = [".blob.core.windows.net", ".chatgpt-staging.com", ".chatgpt.com", ".oaiusercontent.com", ".openai-staging.com", ".openai.com"];
  if ((u)) goto L_16d;
  u = {};
  exports.ChatGPTImageGallerySource = {};
  !function <atom:0>({});
  let ChatGPTImageGalleryCancelledError;
  let <class_fields_init>;
  class ChatGPTImageGalleryCancelledError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:ChatGPTImageGalleryCancelledError>;
  ChatGPTImageGalleryCancelledError = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTImageGalleryCancelledError#1 = function <atom:0>;
  exports.ChatGPTImageGalleryCancelledError = ChatGPTImageGalleryCancelledError#1;
  let ChatGPTImageGalleryRequestError;
  let <class_fields_init>#1;
  class ChatGPTImageGalleryRequestError extends Error { ... }
  <class_fields_init>#1 = undefined;
  <proto:ChatGPTImageGalleryRequestError>;
  ChatGPTImageGalleryRequestError = function <atom:0>;
  // close_loc <class_fields_init>#1
  ChatGPTImageGalleryRequestError#1 = function <atom:0>;
  exports.ChatGPTImageGalleryRequestError = ChatGPTImageGalleryRequestError#1;
  let AuthenticatedChatGPTImageGalleryClient;
  let <class_fields_init>#2;
  class AuthenticatedChatGPTImageGalleryClient extends undefined { ... }
  <proto:AuthenticatedChatGPTImageGalleryClient>.loadImages = function <atom:0>;
  <proto:AuthenticatedChatGPTImageGalleryClient>.dispose = function <atom:0>;
  <proto:AuthenticatedChatGPTImageGalleryClient>.loadPage = function <atom:0>;
  <proto:AuthenticatedChatGPTImageGalleryClient>.loadConversationFallback = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:AuthenticatedChatGPTImageGalleryClient>;
  AuthenticatedChatGPTImageGalleryClient = function <atom:0>;
  // close_loc <class_fields_init>#2
  AuthenticatedChatGPTImageGalleryClient#1 = function <atom:0>;
  exports.createChatGPTImageGalleryClient = h;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/images/ChatGPTImageGalleryClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
