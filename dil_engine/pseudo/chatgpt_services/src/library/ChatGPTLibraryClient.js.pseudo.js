// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=134B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
function {
  e.Suggested = 0;
  e[0] = "Suggested";
  e.Folders = 1;
  e[1] = "Folders";
  e.Favorites = 2;
  e[2] = "Favorites";
  e.Images = 3;
  e[3] = "Images";
  e.All = 4;
  e[4] = "All";
  e.Uploads = 5;
  e[5] = "Uploads";
  e.Bookmarks = 6;
  e[6] = "Bookmarks";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
function {
  e.File = 0;
  e[0] = "File";
  e.Directory = 1;
  e[1] = "Directory";
  e.SavedEntity = 2;
  e[2] = "SavedEntity";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
function {
  e.Ready = 0;
  e[0] = "Ready";
  e.Uploading = 1;
  e[1] = "Uploading";
  e.Failed = 2;
  e[2] = "Failed";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
function {
  e.Available = 0;
  e[0] = "Available";
  e.Unavailable = 1;
  e[1] = "Unavailable";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
function {
  e.GlobalFiles = 0;
  e[0] = "GlobalFiles";
  e.Nodes = 1;
  e[1] = "Nodes";
  e.Bookmarks = 2;
  e[2] = "Bookmarks";
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=78B file=chatgpt_services/src/library/ChatGPTLibraryClient
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("The Library request was cancelled.");
  if (!(<class_fields_init>)) goto L_26;
  <class_fields_init>.call(this);
  new new.target("The Library request was cancelled.");
  this.name = "ChatGPTLibraryCancelledError";
  this.message = "The Library request was cancelled.";
  return this;
}

// fn <atom:0>  args=3 vars=8 closure=2 cpool=0 bc=270B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r, i
// locals: t, o, this.active_func, new.target, this
// closure: a, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let o;
  let t;
  if (!((undefined === r))) goto L_18;
  goto L_4d;
  // [栈深重同步 1 -> 0]
  t = " (HTTP ".concat(String(r), ")");
  o = "ChatGPT Library request to ".concat(i, " failed: ", a.OAINetworkResultKind[e], t);
  this = new new.target(o);
  if (!(<class_fields_init>)) goto L_c1;
  <class_fields_init>.call(this);
  new new.target(o);
  this.resultKind = e;
  this.statusCode = r;
  this.endpoint = i;
  this.name = "ChatGPTLibraryRequestError";
  this.message = o;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=251B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: this
// closure: <class_fields_init>, a
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.options = e;
  this.activeRequests = new Set();
  this.activeRequestsByOwner = new Map();
  this.disposed = false;
  if (!((0 === e.accountId.trim().length))) goto L_a6;
  throw new TypeError("An authenticated account identifier is required for Library.");
  this.networkClient = new a.OAINetworkClient(e.platformServices);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=111B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: r
// closure: D, this, B, e, t
function {
  return D(r, this.options.accountId, B(e.surface, t));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
function {
  return (undefined !== e);
}

// fn <atom:0>  args=1 vars=4 closure=11 cpool=2 bc=578B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: a
// locals: n, d, r
// closure: D, this, B, e, t, U, s, r, i, o, $
function {
  let d;
  let n;
  if (!((undefined === t))) goto L_35;
  goto L_38;
  // [栈深重同步 1 -> 0]
  n = s;
  d = this.requestForLoad(e.surface, r, t, i, o);
  a.add(d);
  try { // catch -> L_210
  let r;
  r = (await $(d, n));
  if (!((undefined === r.cursor))) goto L_13e;
  goto L_168;
  // [栈深重同步 2 -> 1]
  null;
  {cursor: r.cursor};
  // gosub (finally 块) 534
  return {accountId: this.options.accountId, items: r.items.map(function <atom:0>).filter(function <atom:0>), surface: e.surface}; // async
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 534
  throw <?>;
  a.delete(d);
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=1 vars=8 closure=14 cpool=1 bc=906B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r, i, t, a, o, n, this
// closure: D, B, U, s, $, N, Ae, ge, Te, ke, we, Le, x, O
function {
  this = this;
  let o;
  let a;
  let t;
  let i;
  let r;
  if (!(!N(e.surface))) goto L_4f;
  return Ae(new TypeError("The Library surface is invalid."));   // tail call
  r = ge(e.cursor);
  i = Te(e.query);
  t = ke(e.directoryId);
  a = we(e.ownerId);
  o = undefined;
  try { // catch -> L_121
  o = Le(e.categories);
  Le(e.categories);
  <?>;
  goto L_14b;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_14a
  if (!((n instanceof Error))) goto L_139;
  goto L_147;
  // [栈深重同步 2 -> 1]
  return Ae(new TypeError("The Library categories are invalid."));
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((undefined !== e.cursor))) goto L_178;
  if (((undefined === r))) goto L_1f2;
  if (!((undefined !== e.query))) goto L_207;
  if (!((e.query.trim().length > 0))) goto L_207;
  if (!((undefined === i))) goto L_207;
  return Ae(new TypeError("The Library request contains an invalid cursor or query."));
  if (!((undefined !== e.directoryId))) goto L_247;
  if (!((undefined === t))) goto L_247;
  return Ae(new TypeError("The Library directory identifier is invalid."));
  if (!((undefined !== e.ownerId))) goto L_287;
  if (!((undefined === a))) goto L_287;
  return Ae(new TypeError("The Library request owner identifier is invalid."));
  if (!((undefined !== i))) goto L_2cc;
  if (!(x(e.surface, t))) goto L_2cc;
  return Ae(new TypeError("Folder Library requests do not accept a global search query."));
  if (!((undefined !== i))) goto L_315;
  if (!(O(e.surface))) goto L_315;
  if (!((undefined === t))) goto L_315;
  return Ae(new TypeError("Favorites Library requests do not accept a global search query."));
  if (!((undefined !== o))) goto L_35e;
  if (!(O(e.surface))) goto L_35e;
  if (!((undefined === t))) goto L_35e;
  return Ae(new TypeError("Favorites Library requests do not accept category filters."));
  return this.runTask(a, function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
function {
  return e;
}

// fn <atom:0>  args=1 vars=3 closure=8 cpool=1 bc=460B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r, e#1
// closure: this, l, i, t, D, Ie, $, P
function {
  let r;
  if (!((undefined === t))) goto L_6d;
  goto L_76;
  // [栈深重同步 6 -> 5]
  null;
  {parent_directory_id: t};
  r = this.networkClient.requestJson({request: {method: "POST", path: l, jsonBody: {name: i}}, decode: function <atom:0>});
  e.add(r);
  try { // catch -> L_19a
  let e#1;
  null;
  Ie((await $(r, l)));
  e#1 = D({kind: "directory"}, this.options.accountId);
  if (((undefined === e#1))) goto L_17f;
  if (!((e#1.kind !== P.Directory))) goto L_190;
  throw new TypeError("The Library create-folder response was invalid.");
  // gosub (finally 块) 416
  return e#1; // async
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 416
  throw <?>;
  e.delete(r);
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=2 vars=5 closure=8 cpool=1 bc=101B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i, t, this
// closure: l, D, Ie, $, P, qe, ke, Ae
function {
  this = this;
  let t;
  let i;
  i = qe(e);
  t = ke(r);
  if (((undefined === i))) goto L_27;
  if (!((undefined !== r))) goto L_3c;
  if (!((undefined === t))) goto L_3c;
  return Ae(new TypeError("Library folders require a valid name and parent identifier."));
  return this.runTask(undefined, function <atom:0>);
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=307B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: r
// locals: t
// closure: this, i, e, P, $
function {
  let t;
  if (!((e.kind === P.File))) goto L_b3;
  goto L_b4;
  // [栈深重同步 4 -> 3]
  null;
  {};
  t = this.networkClient.requestEmpty({method: "DELETE", path: i});
  r.add(t);
  try { // catch -> L_101
  (await $(t, i));
  <?>;
  // gosub (finally 块) 263
  undefined;
  goto L_131;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 263
  throw <?>;
  r.delete(t);
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=1 vars=4 closure=6 cpool=1 bc=526B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r, i, this
// closure: P, $, Ae, ke, l, n
function {
  this = this;
  let i;
  let r;
  if (((e.accountId !== this.options.accountId))) goto L_b7;
  if (!((e.kind === P.SavedEntity))) goto L_cb;
  return Ae(new TypeError("This Library item cannot be deleted through the file Library client."));   // tail call
  if (!((e.libraryFileId == null))) goto L_115;
  e.libraryFileId;
  r = ke(e.id);
  if (!((undefined === r))) goto L_130;
  return Ae(new TypeError("The Library item identifier is invalid."));   // tail call
  if (!((e.kind === P.Directory))) goto L_1af;
  goto L_1e5;
  // [栈深重同步 1 -> 0]
  i = "".concat(n, "/files/", encodeURIComponent(r));
  return this.runTask(undefined, function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
function {
  return e.cancel();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=270B file=chatgpt_services/src/library/ChatGPTLibraryClient
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_10d;
  this.disposed = true;
  this.activeRequests.forEach(function <atom:0>);
  this.activeRequests.clear();
  this.activeRequestsByOwner.clear();
  return;
}

// fn <atom:0>  args=5 vars=9 closure=8 cpool=0 bc=831B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r, i, t, a
// locals: e#1, e#2, o, this
// closure: x, s, j, O, u, d, I, n
function {
  this = this;
  let o;
  if (!(x(e, i))) goto L_13c;
  let e#1;
  e#1 = {};
  if (!(this.shouldHydrateFolderThumbnails())) goto L_4e;
  e#1.hydrate_folder_thumbnails = "true";
  "true";
  if (!((undefined !== i))) goto L_64;
  e#1.parent_directory_id = i;
  i;
  if (!((undefined !== r))) goto L_7a;
  e#1.cursor = r;
  r;
  if (!((undefined !== a))) goto L_94;
  e#1.categories = a;
  a;
  if (!((0 === Object.keys(e#1).length))) goto L_120;
  goto L_129;
  // [栈深重同步 5 -> 4]
  null;
  {query: e#1};
  return this.networkClient.requestJson({request: {method: "GET", path: s}, decode: j});   // tail call
  if (!(O(e))) goto L_1da;
  let e#2;
  e#2 = {limit: String(u)};
  if (!((undefined !== r))) goto L_16c;
  e#2.cursor = r;
  r;
  return this.networkClient.requestJson({request: {method: "GET", path: d, query: e#2}, decode: j});   // tail call
  if (!((undefined === r))) goto L_1eb;
  goto L_1f2;
  // [栈深重同步 2 -> 1]
  null;
  {cursor: r};
  if (!((undefined === t))) goto L_1ff;
  goto L_206;
  // [栈深重同步 2 -> 1]
  null;
  {q: t};
  if (!((e === I.Suggested))) goto L_240;
  goto L_241;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((e === I.Uploads))) goto L_27b;
  goto L_27c;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((e === I.Images))) goto L_2b9;
  goto L_2cc;
  // [栈深重同步 2 -> 1]
  if (!((undefined === a))) goto L_2c3;
  goto L_2cc;
  // [栈深重同步 2 -> 1]
  null;
  {categories: a};
  o = {limit: u};
  return this.networkClient.requestJson({request: {method: "POST", path: n, jsonBody: o}, decode: j});   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=266B file=chatgpt_services/src/library/ChatGPTLibraryClient
// locals: r, i, this
// closure: c, e
function {
  this = this;
  let r;
  r = this.options.platformServices.experimentService;
  if (!((undefined === r))) goto L_74;
  return false;
  try { // catch -> L_a8
  return (true === r.isFeatureFlagEnabled(c));
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_109
  if (!(e.isLoggingEnabled)) goto L_104;
  console.warn("The Library folder thumbnail feature gate could not be evaluated.");
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// closure: t
function {
  t = r;
  r;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=137B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: r
// closure: a, this, e, s, ChatGPTLibraryCancelledError
function {
  if ((a)) goto L_7d;
  if ((this.disposed)) goto L_7d;
  if (!((undefined !== e))) goto L_87;
  if (!((this.activeRequestsByOwner.get(e) !== s))) goto L_87;
  throw new ChatGPTLibraryCancelledError();
  return r;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=275B file=chatgpt_services/src/library/ChatGPTLibraryClient
// closure: i, this, s, e
function {
  i.clear();
  this.activeRequests.delete(s);
  if (!((undefined !== e))) goto L_112;
  if (!((this.activeRequestsByOwner.get(e) === s))) goto L_112;
  this.activeRequestsByOwner.delete(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
function {
  return e.cancel();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=1 bc=372B file=chatgpt_services/src/library/ChatGPTLibraryClient
// closure: a, i, t, ChatGPTLibraryCancelledError, this, s, e
function {
  if ((a)) goto L_173;
  a = true;
  true;
  i.forEach(function <atom:0>);
  i.clear();
  if (!((t == null))) goto L_6e;
  t;
  goto L_76;
  undefined(new ChatGPTLibraryCancelledError());
  t = undefined;
  undefined;
  this.activeRequests.delete(s);
  if (!((undefined !== e))) goto L_173;
  if (!((this.activeRequestsByOwner.get(e) === s))) goto L_173;
  this.activeRequestsByOwner.delete(e);
  return;
}

// fn <atom:0>  args=2 vars=9 closure=2 cpool=4 bc=535B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i, t, a, o, n, s, this
// closure: ChatGPTLibraryCancelledError, Ae
function {
  this = this;
  let s;
  let n;
  let o;
  let a;
  let t;
  let i;
  if (!(this.disposed)) goto L_45;
  return Ae(new ChatGPTLibraryCancelledError());   // tail call
  if (!((undefined !== e))) goto L_c0;
  if (!((this.activeRequestsByOwner.get(e) == null))) goto L_9c;
  this.activeRequestsByOwner.get(e);
  goto L_c0;
  undefined.cancel();
  i = new Set();
  t = undefined;
  a = false;
  o = new Promise(function <atom:0>);
  n = r(i).then(function <atom:0>).finally(function <atom:0>);
  s = {cancel: function <atom:0>, result: Promise.race([n, o])};
  this.activeRequests.add(s);
  if (!((undefined !== e))) goto L_212;
  this.activeRequestsByOwner.set(e, s);
  return s;
}

// fn F  args=1 vars=1 closure=1 cpool=0 bc=9B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// closure: AuthenticatedChatGPTLibraryClient
function {
  return new AuthenticatedChatGPTLibraryClient(e);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=2 bc=176B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r
// closure: i
function {
  let r;
  r = i.decode(e);
  if (!(!new RegExp("^[A-Za-z0-9_-]{1,512}$").test(r.id))) goto L_8b;
  throw new Error("The created document identity is invalid");
  return r.id;
}

// fn G  args=3 vars=3 closure=3 cpool=1 bc=210B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r, t
// closure: i, a, n
function {
  if (!((undefined === t))) goto L_9d;
  goto L_a4;
  // [栈深重同步 6 -> 5]
  null;
  {directory_id: t};
  return new a.OAINetworkClient(e).requestJson({request: {method: "POST", path: "".concat(n, "/files/inline-content"), jsonBody: {file_name: r, content: "", library_file_info: {library_artifact_type: "writing_block"}}}, decode: function <atom:0>});   // tail call
}

// fn U  args=1 vars=1 closure=4 cpool=0 bc=280B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// closure: I, s, d, n
function {
  if (!((e === I.Folders))) goto L_2b;
  return s;
  if (((e === I.Favorites))) goto L_77;
  if (!((e === I.Bookmarks))) goto L_7b;
  return d;
  if (((e === I.Suggested))) goto L_113;
  if (((e === I.Images))) goto L_113;
  if (((e === I.All))) goto L_113;
  if (!((e === I.Uploads))) goto L_117;
  return n;
  e;
  return;
}

// fn x  args=2 vars=2 closure=1 cpool=0 bc=44B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// closure: I
function {
  if (((undefined !== r))) goto L_2b;
  return (e === I.Folders);
}

// fn O  args=1 vars=1 closure=1 cpool=0 bc=77B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// closure: I
function {
  if (((e === I.Favorites))) goto L_4c;
  return (e === I.Bookmarks);
}

// fn B  args=2 vars=2 closure=3 cpool=0 bc=116B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// closure: x, R, O
function {
  if (!(x(e, r))) goto L_29;
  return R.Nodes;
  if (!(O(e))) goto L_51;
  return R.Bookmarks;
  return R.GlobalFiles;
}

// fn N  args=1 vars=1 closure=1 cpool=0 bc=282B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// closure: I
function {
  if (((e === I.Suggested))) goto L_114;
  if (((e === I.Folders))) goto L_114;
  if (((e === I.Favorites))) goto L_114;
  if (((e === I.Images))) goto L_114;
  if (((e === I.All))) goto L_114;
  if (((e === I.Uploads))) goto L_114;
  if (!((e === I.Bookmarks))) goto L_117;
  return true;
  return false;
}

// fn $  args=2 vars=3 closure=2 cpool=0 bc=265B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i
// closure: a, ChatGPTLibraryRequestError
function {
  let i;
  i = (await e.result);
  if (!((i.kind === a.OAINetworkResultKind.Success))) goto L_b8;
  return i.value; // async
  throw new ChatGPTLibraryRequestError(i.kind, i.statusCode, r);
}

// fn j  args=1 vars=4 closure=4 cpool=0 bc=324B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r, i, t
// closure: Ie, f, Ce, y
function {
  let t;
  let i;
  let r;
  r = Ie(e);
  if (!((undefined === r))) goto L_23;
  throw new TypeError("The Library response must be an object.");
  i = r.items;
  if ((!Array.isArray(i))) goto L_81;
  if (!((i.length > f))) goto L_92;
  throw new TypeError("The Library response must contain a bounded items array.");
  t = Ce(r.cursor, y);
  if (!((undefined !== r.cursor))) goto L_122;
  if (!((null !== r.cursor))) goto L_122;
  if (!((undefined === t))) goto L_122;
  throw new TypeError("The Library response cursor is invalid.");
  if (!((undefined === t))) goto L_12d;
  goto L_136;
  // [栈深重同步 2 -> 1]
  null;
  {cursor: t};
  return {items: i};
}

// fn D  args=3 vars=6 closure=4 cpool=0 bc=189B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r, i
// locals: e#1, r#1, i#1
// closure: R, J, z, K
function {
  let i#1;
  let r#1;
  let e#1;
  e#1 = e;
  r#1 = r;
  if (!((i === undefined))) goto L_36;
  i;
  i = R.Nodes;
  i#1 = R.Nodes;
  if (!((i === R.GlobalFiles))) goto L_64;
  return J(e, r);   // tail call
  if (!((i === R.Nodes))) goto L_90;
  return z(e, r);   // tail call
  if (!((i === R.Bookmarks))) goto L_bc;
  return K(e, r);   // tail call
  i;
  return;
}

// fn J  args=2 vars=4 closure=4 cpool=0 bc=133B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i, t
// closure: ie, ae, W, Ie
function {
  let t;
  let i;
  i = ie(e, "Library file");
  t = ae(i.kind, 40, "Library file kind");
  if (((undefined === t))) goto L_4f;
  if (!(("file" === t))) goto L_84;
  if (!((Ie(i.file) == null))) goto L_80;
  Ie(i.file);
  return W(i, r);   // tail call
  return;
}

// fn z  args=2 vars=3 closure=4 cpool=0 bc=92B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i
// closure: ie, oe, W, Z
function {
  let i;
  i = ie(e, "Library node");
  if (!((oe(i.kind, 40, "Library node kind") === "file"))) goto L_4a;
  return W(i, r);   // tail call
  if (!((oe(i.kind, 40, "Library node kind") === "directory"))) goto L_5b;
  return Z(i, r);   // tail call
  oe(i.kind, 40, "Library node kind");
  return;
}

// fn K  args=2 vars=5 closure=8 cpool=0 bc=297B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i, t, a
// closure: ie, oe, M, A, H, V, W, Q
function {
  let a;
  let t;
  let i;
  i = ie(e, "Library bookmark");
  t = oe(i.kind, 40, "Library bookmark kind");
  if (!(("file" !== t))) goto L_57;
  if (!(("saved_entity" !== t))) goto L_57;
  return;
  a = M(i);
  if (!((a.availability === A.Unavailable))) goto L_b2;
  return H(t, a, r);
  if (!(("file" === t))) goto L_f5;
  return V(W(ie(i.file, "Library bookmark file"), r), a);
  return Q(ie(i.saved_entity, "Library bookmark saved_entity"), a, r);
}

// fn M  args=1 vars=3 closure=5 cpool=0 bc=318B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r, i
// closure: oe, A, ue, se, ve
function {
  let i;
  let r;
  r = oe(e.availability, 40, "Library bookmark availability");
  if (!(("available" === r))) goto L_61;
  goto L_91;
  // [栈深重同步 1 -> 0]
  if (!(("unavailable" === r))) goto L_90;
  goto L_91;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!((undefined === i))) goto L_a8;
  throw new TypeError("The Library bookmark availability is invalid.");
  return {availability: i, createdAt: ue(e.created_at, "Library bookmark created_at"), id: se(e.favorite_id, "Library bookmark favorite_id"), retryable: ve(e.retryable, "Library bookmark retryable")};
}

// fn H  args=3 vars=3 closure=2 cpool=0 bc=349B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r, i
// closure: P, S
function {
  if (!(("file" === e))) goto L_b8;
  goto L_da;
  // [栈深重同步 2 -> 1]
  if (!(r.retryable)) goto L_138;
  goto L_13d;
  // [栈深重同步 2 -> 1]
  if (!(("file" === e))) goto L_152;
  goto L_157;
  // [栈深重同步 2 -> 1]
  return {accountId: i, availability: r.availability, bookmark: r, id: "bookmark:".concat(r.id), isShared: false, kind: P.SavedEntity, requiresAuthentication: false, state: S.Ready, subtitle: "Unavailable", title: "Unavailable bookmark"};
}

// fn V  args=2 vars=2 closure=0 cpool=0 bc=53B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
function {
  null;
  e;
  return {availability: r.availability, bookmark: r};
}

// fn W  args=2 vars=15 closure=13 cpool=0 bc=1593B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i, t, a, o, n, s, d, l, c, u, y, v, h
// closure: ne, se, de, he, ae, ce, X, Y, ee, re, b, P, _e
function {
  let h;
  let v;
  let y;
  let u;
  let c;
  let l;
  let d;
  let s;
  let n;
  let o;
  let a;
  let t;
  let i;
  if (!((ne(e.id, "Library file id") == null))) goto L_7e;
  ne(e.id, "Library file id");
  i = ne(e.library_file_id, "Library file library_file_id");
  if (!((undefined === i))) goto L_95;
  throw new TypeError("The Library file id is required.");
  t = se(e.file_id, "Library file file_id");
  if (!((de(e.file_name, "Library file file_name") == null))) goto L_144;
  de(e.file_name, "Library file file_name");
  if (!((de(e.name, "Library file name") == null))) goto L_144;
  de(e.name, "Library file name");
  a = de(e.title, "Library file title");
  if (!((undefined === a))) goto L_15b;
  throw new TypeError("The Library file name is required.");
  if (!((e.library_file_category == null))) goto L_1a5;
  e.library_file_category;
  o = he(e.category);
  if (!((ne(e.directory_id, "Library file directory_id") == null))) goto L_1fe;
  ne(e.directory_id, "Library file directory_id");
  n = ne(e.parent_directory_id, "Library file parent_directory_id");
  s = ae(e.mime_type, 240, "Library file mime_type");
  if (!((ce(e.updated_at, "Library file updated_at") == null))) goto L_2bb;
  ce(e.updated_at, "Library file updated_at");
  if (!((ce(e.file_processed_time, "Library file file_processed_time") == null))) goto L_2bb;
  ce(e.file_processed_time, "Library file file_processed_time");
  d = ce(e.file_upload_time, "Library file file_upload_time");
  l = ne(e.origination_thread_id, "Library file origination_thread_id");
  c = X(e);
  u = Y(c);
  y = ee(e);
  v = re(e);
  if (!((ae(e.subtitle, b, "Library file subtitle") == null))) goto L_36f;
  ae(e.subtitle, b, "Library file subtitle");
  if (!((ae(e.description, b, "Library file description") == null))) goto L_36f;
  ae(e.description, b, "Library file description");
  h = u;
  if (!((undefined === o))) goto L_382;
  goto L_38b;
  // [栈深重同步 2 -> 1]
  null;
  {category: o};
  if (!((undefined === o))) goto L_39b;
  goto L_3a4;
  // [栈深重同步 3 -> 2]
  null;
  {category: o};
  if (!((undefined === n))) goto L_3b3;
  goto L_3bc;
  // [栈深重同步 3 -> 2]
  null;
  {directoryId: n};
  if (!((undefined === s))) goto L_3db;
  goto L_3e4;
  // [栈深重同步 3 -> 2]
  null;
  {mimeType: s};
  if (!((undefined === c))) goto L_3fb;
  goto L_404;
  // [栈深重同步 3 -> 2]
  null;
  {provider: c};
  if (!((undefined === v))) goto L_41b;
  goto L_424;
  // [栈深重同步 3 -> 2]
  null;
  {thumbnail: v};
  if (!((undefined === s))) goto L_4a2;
  goto L_4ab;
  // [栈深重同步 2 -> 1]
  null;
  {mimeType: s};
  if (!((undefined === d))) goto L_4ba;
  goto L_4c3;
  // [栈深重同步 2 -> 1]
  null;
  {modifiedAt: d};
  if (!((undefined === l))) goto L_4d2;
  goto L_4db;
  // [栈深重同步 2 -> 1]
  null;
  {originationConversationId: l};
  if (!((undefined === n))) goto L_4ea;
  goto L_4f3;
  // [栈深重同步 2 -> 1]
  null;
  {parentDirectoryId: n};
  if (!((undefined === u))) goto L_502;
  goto L_50b;
  // [栈深重同步 2 -> 1]
  null;
  {provider: u};
  if (!((undefined === c))) goto L_51a;
  goto L_523;
  // [栈深重同步 2 -> 1]
  null;
  {providerMetadata: c};
  if (!((v == null))) goto L_533;
  v;
  goto L_554;
  if (!((undefined.requiresAuthentication == null))) goto L_55b;
  undefined.requiresAuthentication;
  if (!((undefined === h))) goto L_5a8;
  goto L_5b1;
  // [栈深重同步 2 -> 1]
  null;
  {subtitle: h};
  if (!((undefined === v))) goto L_5c0;
  goto L_5c9;
  // [栈深重同步 2 -> 1]
  null;
  {thumbnail: v};
  if (!((v == null))) goto L_5da;
  v;
  goto L_5fb;
  if (!((undefined === undefined.url))) goto L_601;
  goto L_62b;
  // [栈深重同步 2 -> 1]
  null;
  {thumbnailUrl: v.url};
  return {accountId: r, file: {fileId: t, id: i, name: a, sharing: y}, fileId: t, id: i, isShared: y.isShared, kind: P.File, libraryFileId: i, requiresAuthentication: false, sharing: y, state: _e(ae(e.state, 80, "Library file state")), title: a};
}

// fn Z  args=2 vars=13 closure=13 cpool=0 bc=1008B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i, t, a, o, n, s, d, l, c, u, y
// closure: se, de, ne, ae, b, fe, ye, X, Y, ee, re, P, S
function {
  let y;
  let u;
  let c;
  let l;
  let d;
  let s;
  let n;
  let o;
  let a;
  let t;
  let i;
  i = se(e.id, "Library directory id");
  if (!((de(e.name, "Library directory name") == null))) goto L_a2;
  de(e.name, "Library directory name");
  t = de(e.title, "Library directory title");
  if (!((undefined === t))) goto L_b9;
  throw new TypeError("The Library directory name is required.");
  a = ne(e.parent_directory_id, "Library directory parent_directory_id");
  o = ae(e.display_path, b, "Library directory display_path");
  n = fe(e.cloud_doc_url, "Library directory cloud_doc_url");
  s = ye(e.is_root, "Library directory is_root");
  d = X(e);
  l = Y(d);
  c = ee(e);
  u = re(e);
  if (!((o == null))) goto L_193;
  o;
  y = l;
  if (!((undefined === n))) goto L_1a7;
  goto L_1b0;
  // [栈深重同步 3 -> 2]
  null;
  {cloudDocumentUrl: n};
  if (!((undefined === o))) goto L_1bf;
  goto L_1c8;
  // [栈深重同步 3 -> 2]
  null;
  {displayPath: o};
  if (!((undefined === s))) goto L_1df;
  goto L_1e8;
  // [栈深重同步 3 -> 2]
  null;
  {isRoot: s};
  if (!((undefined === a))) goto L_1ff;
  goto L_208;
  // [栈深重同步 3 -> 2]
  null;
  {parentDirectoryId: a};
  if (!((undefined === d))) goto L_217;
  goto L_220;
  // [栈深重同步 3 -> 2]
  null;
  {provider: d};
  if (!((undefined === u))) goto L_237;
  goto L_240;
  // [栈深重同步 3 -> 2]
  null;
  {thumbnail: u};
  if (!((undefined === a))) goto L_2ae;
  goto L_2b7;
  // [栈深重同步 2 -> 1]
  null;
  {parentDirectoryId: a};
  if (!((undefined === l))) goto L_2c6;
  goto L_2cf;
  // [栈深重同步 2 -> 1]
  null;
  {provider: l};
  if (!((undefined === d))) goto L_2de;
  goto L_2e7;
  // [栈深重同步 2 -> 1]
  null;
  {providerMetadata: d};
  if (!((u == null))) goto L_2f7;
  u;
  goto L_318;
  if (!((undefined.requiresAuthentication == null))) goto L_31f;
  undefined.requiresAuthentication;
  if (!((undefined === y))) goto L_35f;
  goto L_368;
  // [栈深重同步 2 -> 1]
  null;
  {subtitle: y};
  if (!((undefined === u))) goto L_377;
  goto L_380;
  // [栈深重同步 2 -> 1]
  null;
  {thumbnail: u};
  if (!((u == null))) goto L_391;
  u;
  goto L_3b2;
  if (!((undefined === undefined.url))) goto L_3b8;
  goto L_3e2;
  // [栈深重同步 2 -> 1]
  null;
  {thumbnailUrl: u.url};
  return {accountId: r, directory: {id: i, name: t, sharing: c}, id: i, isShared: c.isShared, kind: P.Directory, requiresAuthentication: false, sharing: c, state: S.Ready, title: t};
}

// fn Q  args=3 vars=15 closure=12 cpool=0 bc=1455B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r, i
// locals: a, o, n, s, d, l, c, u, y, v, b, f
// closure: ie, te, oe, h, me, L, ve, le, be, t, P, S
function {
  let f;
  let b;
  let v;
  let y;
  let u;
  let c;
  let l;
  let d;
  let s;
  let n;
  let o;
  let a;
  a = ie(e.saved_target, "Library saved entity target");
  o = ie(a.sidebar_params, "Library saved entity sidebar_params");
  n = te(a.identity, "Library saved entity identity");
  if (!((undefined === n))) goto L_b0;
  goto L_117;
  // [栈深重同步 1 -> 0]
  s = {key: oe(n.key, h, "Library saved entity identity key"), namespace: oe(n.namespace, h, "Library saved entity identity namespace")};
  d = me(o.extra_params);
  if (!((undefined === d))) goto L_180;
  goto L_189;
  // [栈深重同步 2 -> 1]
  null;
  {extraParameters: d};
  l = {category: oe(o.category, L, "Library saved entity category"), multiMessageMode: ve(o.multi_message_mode, "Library saved entity multi_message_mode"), name: le(o.name, "Library saved entity sidebar name")};
  c = ie(e.display_data, "Library saved entity display_data");
  u = le(c.name, "Library saved entity display name");
  y = be(c.image_url, "Library saved entity image_url");
  if (!((undefined === y))) goto L_289;
  goto L_292;
  // [栈深重同步 3 -> 2]
  null;
  {imageUrl: y};
  if (!((undefined === s))) goto L_2af;
  goto L_2b8;
  // [栈深重同步 3 -> 2]
  null;
  {identity: s};
  v = {displayData: {name: u}, target: {sidebarParameters: l}};
  if (!((undefined === y))) goto L_2d6;
  goto L_30e;
  // [栈深重同步 1 -> 0]
  b = {requiresAuthentication: (undefined !== t.authenticatedImageRequestPath(y)), url: y};
  if (!((undefined === s))) goto L_364;
  goto L_3da;
  // [栈深重同步 1 -> 0]
  f = "saved_entity:".concat(s.namespace, ":", s.key);
  if (!((b == null))) goto L_4a5;
  b;
  goto L_4c6;
  if (!((undefined.requiresAuthentication == null))) goto L_4cd;
  undefined.requiresAuthentication;
  if (!((undefined === b))) goto L_536;
  goto L_53f;
  // [栈深重同步 2 -> 1]
  null;
  {thumbnail: b};
  if (!((b == null))) goto L_550;
  b;
  goto L_571;
  if (!((undefined === undefined.url))) goto L_577;
  goto L_5a1;
  // [栈深重同步 2 -> 1]
  null;
  {thumbnailUrl: b.url};
  return {accountId: i, availability: r.availability, bookmark: r, category: l.category, entityType: l.category, id: f, isShared: false, kind: P.SavedEntity, requiresAuthentication: false, savedEntity: v, state: S.Ready, subtitle: l.category, title: u};
}

// fn X  args=1 vars=7 closure=3 cpool=0 bc=529B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r, i, t, a, o, n
// closure: Ie, ae, L
function {
  let n;
  let o;
  let a;
  let t;
  let i;
  let r;
  r = Ie(e.provider);
  if (!((undefined === r))) goto L_6c;
  goto L_6d;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!((r == null))) goto L_77;
  r;
  t = e;
  if (!((t.id == null))) goto L_c4;
  t.id;
  a = ae(e.provider_id, L, "Library provider id");
  if (!((i == null))) goto L_12b;
  i;
  if (!((t.name == null))) goto L_122;
  t.name;
  o = ae(e.provider_name, L, "Library provider name");
  if (!((t.display_name == null))) goto L_1a2;
  t.display_name;
  if (!((t.displayName == null))) goto L_1a2;
  t.displayName;
  n = ae(e.provider_display_name, L, "Library provider display name");
  if (((undefined !== a))) goto L_1c4;
  if (((undefined !== o))) goto L_1c4;
  if (!((undefined !== n))) goto L_210;
  if (!((undefined === n))) goto L_1d1;
  goto L_1da;
  // [栈深重同步 2 -> 1]
  null;
  {displayName: n};
  if (!((undefined === a))) goto L_1e9;
  goto L_1f2;
  // [栈深重同步 2 -> 1]
  null;
  {id: a};
  if (!((undefined === o))) goto L_201;
  goto L_20a;
  // [栈深重同步 2 -> 1]
  null;
  {name: o};
  return {};
  return;
}

// fn Y  args=1 vars=1 closure=0 cpool=0 bc=136B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
function {
  if (!((e == null))) goto L_9;
  e;
  goto L_2a;
  if (!((undefined.displayName == null))) goto L_87;
  undefined.displayName;
  if (!((e == null))) goto L_38;
  e;
  goto L_59;
  if (!((undefined.name == null))) goto L_87;
  undefined.name;
  if (!((e == null))) goto L_66;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.id;
}

// fn ee  args=1 vars=8 closure=8 cpool=0 bc=531B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r, i, t, a, e#1, r#1, o
// closure: ye, ce, te, fe, ae, b, se, ne
function {
  let o;
  let a;
  let t;
  let i;
  let r;
  if (!((e.is_shared == null))) goto L_59;
  e.is_shared;
  if (!((ye(e.shared, "Library item is_shared") == null))) goto L_66;
  ye(e.shared, "Library item is_shared");
  r = false;
  i = ce(e.shared_at, "Library item shared_at");
  t = te(e.shared_by, "Library item shared_by");
  a = undefined;
  if (!((undefined !== t))) goto L_194;
  let r#1;
  let e#1;
  e#1 = fe(t.avatar_url, "Library shared_by avatar_url");
  r#1 = ae(t.name, b, "Library shared_by name");
  if (!((undefined === e#1))) goto L_137;
  goto L_140;
  // [栈深重同步 2 -> 1]
  null;
  {avatarUrl: e#1};
  if (!((undefined === r#1))) goto L_14f;
  goto L_158;
  // [栈深重同步 2 -> 1]
  null;
  {name: r#1};
  a = {userId: se(t.user_id, "Library shared_by user_id")};
  {userId: se(t.user_id, "Library shared_by user_id")};
  o = ne(e.direct_share_id, "Library item direct_share_id");
  if (!((undefined === o))) goto L_1cc;
  goto L_1d5;
  // [栈深重同步 2 -> 1]
  null;
  {directShareId: o};
  if (!((undefined === i))) goto L_1ec;
  goto L_1f5;
  // [栈深重同步 2 -> 1]
  null;
  {sharedAt: i};
  if (!((undefined === a))) goto L_204;
  goto L_20d;
  // [栈深重同步 2 -> 1]
  null;
  {sharedBy: a};
  return {isShared: r};
}

// fn re  args=1 vars=3 closure=2 cpool=0 bc=409B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r, i
// closure: be, t
function {
  let i;
  let r;
  if (!((be(e.thumbnail_url, "Library thumbnail_url") == null))) goto L_8b;
  be(e.thumbnail_url, "Library thumbnail_url");
  if (!((be(e.thumbnailUrl, "Library thumbnailUrl") == null))) goto L_8b;
  be(e.thumbnailUrl, "Library thumbnailUrl");
  r = be(e.image_url, "Library image_url");
  if (!((be(e.thumbnail_preview_url, "Library thumbnail_preview_url") == null))) goto L_e3;
  be(e.thumbnail_preview_url, "Library thumbnail_preview_url");
  i = be(e.thumbnailPreviewUrl, "Library thumbnailPreviewUrl");
  if (((undefined !== r))) goto L_f2;
  if (!((undefined !== i))) goto L_198;
  if (!((undefined === i))) goto L_102;
  goto L_10b;
  // [栈深重同步 2 -> 1]
  null;
  {previewUrl: i};
  if (!((undefined !== r))) goto L_143;
  if (((undefined !== t.authenticatedImageRequestPath(r)))) goto L_17a;
  if (!((undefined !== i))) goto L_17a;
  if (!((undefined === r))) goto L_189;
  goto L_192;
  // [栈深重同步 2 -> 1]
  null;
  {url: r};
  return {requiresAuthentication: (undefined !== t.authenticatedImageRequestPath(i))};
  return;
}

// fn ie  args=2 vars=3 closure=1 cpool=0 bc=41B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i
// closure: Ie
function {
  let i;
  i = Ie(e);
  if (!((undefined === i))) goto L_25;
  throw new TypeError((("The " + r) + " must be an object."));
  return i;
}

// fn te  args=2 vars=2 closure=1 cpool=0 bc=12B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// closure: ie
function {
  if (!((null != e))) goto L_b;
  return ie(e, r);   // tail call
  return;
}

// fn ae  args=3 vars=4 closure=1 cpool=0 bc=55B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r, i
// locals: t
// closure: Ce
function {
  let t;
  if (((null == e))) goto L_d;
  if (!(("" === e))) goto L_10;
  return;
  t = Ce(e, r);
  if (!((undefined === t))) goto L_33;
  throw new TypeError((("The " + i) + " is invalid."));
  return t;
}

// fn oe  args=3 vars=4 closure=1 cpool=0 bc=43B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r, i
// locals: t
// closure: ae
function {
  let t;
  t = ae(e, r, i);
  if (!((undefined === t))) goto L_27;
  throw new TypeError((("The " + i) + " is required."));
  return t;
}

// fn ne  args=2 vars=4 closure=3 cpool=0 bc=62B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i, t
// closure: ae, h, ke
function {
  let t;
  let i;
  i = ae(e, h, r);
  if (!((undefined === i))) goto L_16;
  return;
  t = ke(i);
  if (!((undefined === t))) goto L_3a;
  throw new TypeError((("The " + r) + " is invalid."));
  return t;
}

// fn se  args=2 vars=3 closure=1 cpool=0 bc=42B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i
// closure: ne
function {
  let i;
  i = ne(e, r);
  if (!((undefined === i))) goto L_26;
  throw new TypeError((("The " + r) + " is required."));
  return i;
}

// fn de  args=2 vars=3 closure=1 cpool=0 bc=54B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i
// closure: qe
function {
  let i;
  if (((null == e))) goto L_d;
  if (!(("" === e))) goto L_10;
  return;
  i = qe(e);
  if (!((undefined === i))) goto L_32;
  throw new TypeError((("The " + r) + " is invalid."));
  return i;
}

// fn le  args=2 vars=3 closure=1 cpool=0 bc=42B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i
// closure: de
function {
  let i;
  i = de(e, r);
  if (!((undefined === i))) goto L_26;
  throw new TypeError((("The " + r) + " is required."));
  return i;
}

// fn ce  args=2 vars=3 closure=1 cpool=0 bc=47B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i
// closure: Ee
function {
  let i;
  if (!((null == e))) goto L_9;
  return;
  i = Ee(e);
  if (!((undefined === i))) goto L_2b;
  throw new TypeError((("The " + r) + " is invalid."));
  return i;
}

// fn ue  args=2 vars=3 closure=1 cpool=0 bc=42B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i
// closure: ce
function {
  let i;
  i = ce(e, r);
  if (!((undefined === i))) goto L_26;
  throw new TypeError((("The " + r) + " is required."));
  return i;
}

// fn ye  args=2 vars=2 closure=0 cpool=0 bc=41B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
function {
  if (!((null != e))) goto L_28;
  if (!(("boolean" != typeof e))) goto L_26;
  throw new TypeError((("The " + r) + " is invalid."));
  return e;
  return;
}

// fn ve  args=2 vars=3 closure=1 cpool=0 bc=42B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i
// closure: ye
function {
  let i;
  i = ye(e, r);
  if (!((undefined === i))) goto L_26;
  throw new TypeError((("The " + r) + " is required."));
  return i;
}

// fn he  args=1 vars=2 closure=2 cpool=0 bc=86B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r
// closure: ae, k
function {
  let r;
  r = ae(e, 40, "Library file category");
  if (!((undefined !== r))) goto L_55;
  if (!(!k.test(r))) goto L_51;
  throw new TypeError("The Library file category is invalid.");
  return r;
  return;
}

// fn be  args=2 vars=3 closure=3 cpool=0 bc=31B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i
// closure: ae, p, Pe
function {
  let i;
  i = ae(e, p, r);
  if (!((undefined !== i))) goto L_1d;
  if (!(Pe(i))) goto L_1d;
  return i;
  return undefined;
}

// fn fe  args=2 vars=3 closure=3 cpool=0 bc=31B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i
// closure: ae, p, Se
function {
  let i;
  i = ae(e, p, r);
  if (!((undefined !== i))) goto L_1d;
  if (!(Se(i))) goto L_1d;
  return i;
  return undefined;
}

// fn me  args=1 vars=3 closure=4 cpool=0 bc=190B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r, i
// closure: Ie, g, Ce, pe
function {
  let r;
  if (!((null == e))) goto L_9;
  return;
  r = Ie(e);
  if (((undefined === r))) goto L_47;
  if (!((Object.keys(r).length > g))) goto L_58;
  throw new TypeError("The Library saved entity extra_params are invalid.");
  let i;
  for (const i of Object.keys(r)) {
    if (((undefined === Ce(i, 120)))) goto L_a3;
    if (!(!pe(r[i], 0))) continue;
    throw new TypeError("The Library saved entity extra_params are invalid.");
  }
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// closure: pe, r
function {
  return pe(e, (r + 1));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=22B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// closure: Ce, pe, i, r
function {
  if (!((undefined !== Ce(e, 120)))) goto L_15;
  return pe(i[e], (r + 1));
}

// fn pe  args=2 vars=3 closure=6 cpool=2 bc=348B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// locals: i
// closure: pe, Ce, b, _, Ie, g
function {
  let i;
  if (((null === e))) goto L_12;
  if (!(("boolean" == typeof e))) goto L_17;
  return true;
  if (!(("number" == typeof e))) goto L_4b;
  return Number.isFinite(e);   // tail call
  if (!(("string" == typeof e))) goto L_5e;
  return (undefined !== Ce(e, b));
  if (!((r >= 4))) goto L_66;
  return false;
  if (!(Array.isArray(e))) goto L_c4;
  if (!((e.length <= _))) goto L_c3;
  return e.every(function <atom:0>);
  i = Ie(e);
  if (((undefined === i))) goto L_104;
  if (!(!(Object.keys(i).length > g))) goto L_15b;
  return Object.keys(i).every(function <atom:0>);
}

// fn Le  args=1 vars=5 closure=2 cpool=0 bc=299B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r, i, t, e#1
// closure: Ce, C
function {
  let i;
  let r;
  if (((undefined === e))) goto L_11;
  if (!((0 === e.length))) goto L_14;
  return;
  if (!((e.length > 6))) goto L_29;
  throw new TypeError("The Library category filter is too large.");
  r = [];
  i = new Set();
  let t;
  for (const t of e) {
    let e#1;
    e#1 = Ce(t, 40);
    if (((undefined === e#1))) goto L_7f;
    if (!(!C.has(e#1))) goto L_90;
    throw new TypeError("The Library category filter contains an unsupported category.");
    if ((i.has(e#1))) goto L_113;
    i.add(e#1);
    r.push(e#1);
  }
  if (!((0 === r.length))) goto L_127;
  return undefined;
  return r;
}

// fn we  args=1 vars=2 closure=1 cpool=0 bc=101B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r
// closure: Ce
function {
  let r;
  r = Ce(e, 128);
  if (!((undefined !== r))) goto L_64;
  if (!((0 !== r.trim().length))) goto L_64;
  return r.trim();   // tail call
  return;
}

// fn _e  args=1 vars=1 closure=1 cpool=0 bc=160B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// closure: S
function {
  if (((e === "created"))) goto L_25;
  if (((e === "indexing"))) goto L_25;
  if (((e === "processing"))) goto L_25;
  if (!((e === "uploading"))) goto L_48;
  return S.Uploading;
  if (((e === "failed"))) goto L_5a;
  if (!((e === "error"))) goto L_7d;
  return S.Failed;
  return S.Ready;
}

// fn ge  args=1 vars=1 closure=2 cpool=0 bc=8B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// closure: Ce, y
function {
  return Ce(e, y);   // tail call
}

// fn Te  args=1 vars=2 closure=2 cpool=0 bc=66B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r
// closure: Ce, v
function {
  let r;
  r = Ce(e, v);
  if (!((undefined !== r))) goto L_41;
  if (!((0 !== r.trim().length))) goto L_41;
  return r;
  return;
}

// fn ke  args=1 vars=2 closure=1 cpool=0 bc=66B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r
// closure: Ce
function {
  let r;
  r = Ce(e, 300);
  if (!((undefined !== r))) goto L_41;
  if (!((0 !== r.trim().length))) goto L_41;
  return r;
  return;
}

// fn qe  args=1 vars=2 closure=2 cpool=0 bc=101B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r
// closure: Ce, b
function {
  let r;
  r = Ce(e, b);
  if (!((undefined !== r))) goto L_64;
  if (!((0 !== r.trim().length))) goto L_64;
  return r.trim();   // tail call
  return;
}

// fn Ee  args=1 vars=3 closure=1 cpool=2 bc=292B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r, i
// closure: Ce
function {
  let r;
  r = undefined;
  if (!(("number" == typeof e))) goto L_50;
  if (!(Number.isFinite(e))) goto L_50;
  if (!((e > 10000000000.0))) goto L_44;
  goto L_49;
  // [栈深重同步 1 -> 0]
  r = (1000 * e);
  (1000 * e);
  goto L_92;
  let i;
  i = Ce(e, 120);
  if (!((undefined === i))) goto L_61;
  return;
  r = Date.parse(i);
  Date.parse(i);
  if (!(Number.isFinite(r))) goto L_122;
  if (!((Math.abs(r) <= 8640000000000000.0))) goto L_122;
  return new Date(r).toISOString();
  return undefined;
}

// fn Ce  args=2 vars=2 closure=1 cpool=0 bc=69B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e, r
// closure: T
function {
  if (!(("string" == typeof e))) goto L_43;
  if (!((e.length > 0))) goto L_43;
  if (!((e.length <= r))) goto L_43;
  if (!(!T.test(e))) goto L_43;
  return e;
  return undefined;
}

// fn Ie  args=1 vars=1 closure=0 cpool=0 bc=67B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
function {
  if ((("object" != typeof e))) goto L_3d;
  if (((null === e))) goto L_3d;
  if (!(Array.isArray(e))) goto L_41;
  return undefined;
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=87B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// closure: i
function {
  if (((i === e.slice(1)))) goto L_56;
  return i.endsWith(e);
}

// fn Pe  args=1 vars=3 closure=3 cpool=1 bc=165B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// locals: r, i
// closure: Se, q, E
function {
  let i;
  let r;
  if (!(!Se(e))) goto L_f;
  return false;
  r = q.exec(e);
  if (!((r == null))) goto L_43;
  r;
  goto L_71;
  if (!((undefined[1] == null))) goto L_4d;
  undefined[1];
  goto L_71;
  i = undefined.toLocaleLowerCase();
  if (!((undefined !== i))) goto L_a4;
  return E.some(function <atom:0>);
}

// fn Se  args=1 vars=1 closure=2 cpool=2 bc=148B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
// closure: p, T
function {
  if (!((e.length <= p))) goto L_93;
  if (!(new RegExp("^https:\\/\\/[^\\s#\\\\]+$").test(e))) goto L_93;
  if (!(!e.includes("@"))) goto L_93;
  return !T.test(e);
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_services/src/library/ChatGPTLibraryClient
function {
  return;
}

// fn Ae  args=1 vars=1 closure=0 cpool=1 bc=57B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: e
function {
  return {result: Promise.reject(e), cancel: function <atom:0>};
}

// fn <atom:0>  args=3 vars=98 closure=0 cpool=74 bc=1270B file=chatgpt_services/src/library/ChatGPTLibraryClient
// args: require, module, exports
// locals: e, r, i, t, a, o, n, s, d, l, c, u, y, v, h, b, f, m, p, L, w, _, g, T, k, q, E, C, I, P, S, A, R, ChatGPTLibraryCancelledError, <class_fields_init>, ChatGPTLibraryCancelledError#1, ChatGPTLibraryRequestError, <class_fields_init>#1, ChatGPTLibraryRequestError#1, AuthenticatedChatGPTLibraryClient, <class_fields_init>#2, AuthenticatedChatGPTLibraryClient#1, F, G, U, x, O, B, N, $, j, D, J, z, K, M, H, V, W, Z, Q, X, Y, ee, re, ie, te, ae, oe, ne, se, de, le, ce, ue, ye, ve, he, be, fe, me, pe, Le, we, _e, ge, Te, ke, qe, Ee, Ce, Ie, Pe, Se, Ae
function {
  F = function F;
  G = function G;
  U = function U;
  x = function x;
  O = function O;
  B = function B;
  N = function N;
  $ = function $;
  j = function j;
  D = function D;
  J = function J;
  z = function z;
  K = function K;
  M = function M;
  H = function H;
  V = function V;
  W = function W;
  Z = function Z;
  Q = function Q;
  X = function X;
  Y = function Y;
  ee = function ee;
  re = function re;
  ie = function ie;
  te = function te;
  ae = function ae;
  oe = function oe;
  ne = function ne;
  se = function se;
  de = function de;
  le = function le;
  ce = function ce;
  ue = function ue;
  ye = function ye;
  ve = function ve;
  he = function he;
  be = function be;
  fe = function fe;
  me = function me;
  pe = function pe;
  Le = function Le;
  we = function we;
  _e = function _e;
  ge = function ge;
  Te = function Te;
  ke = function ke;
  qe = function qe;
  Ee = function Ee;
  Ce = function Ce;
  Ie = function Ie;
  Pe = function Pe;
  Se = function Se;
  Ae = function Ae;
  let AuthenticatedChatGPTLibraryClient#1;
  let ChatGPTLibraryRequestError#1;
  let ChatGPTLibraryCancelledError#1;
  let C;
  let E;
  let q;
  let k;
  let T;
  let g;
  let _;
  let w;
  let L;
  let p;
  let m;
  let f;
  let b;
  let h;
  let v;
  let y;
  let u;
  let c;
  let l;
  let d;
  let s;
  let n;
  let o;
  let a;
  let t;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTLibrarySurface = undefined;
  exports.ChatGPTLibraryItemKind = undefined;
  exports.ChatGPTLibraryItemState = undefined;
  exports.ChatGPTLibraryItemAvailability = undefined;
  exports.ChatGPTLibraryCancelledError = undefined;
  exports.ChatGPTLibraryRequestError = undefined;
  exports.createChatGPTLibraryClient = undefined;
  exports.createLibraryNote = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  r = require("valdi_core/src/JsonSerializationRuntime");
  i = r.createJsonSerializer({kind: r.JsonSchemaKind.Object, name: "CreatedLibraryNote", fields: [{name: "id", jsonName: "id", schema: {kind: r.JsonSchemaKind.String}, optional: false, resilient: false}]});
  t = require("oai_authentication_session/src/OAIBearerAPIService");
  a = require("oai_platform_services/src/OAINetworkClient");
  o = require("valdi_core/src/JsonSerialization");
  n = "/backend-api/files/library";
  s = "/backend-api/files/library/nodes";
  d = "/backend-api/files/library/bookmarks";
  l = "/backend-api/files/library/directories";
  c = {flagName: "chatgpt-recall-library-folder-thumbnails-enabled"};
  u = 30;
  y = 2048;
  v = 200;
  h = 300;
  b = 240;
  f = 100;
  m = 6;
  p = 4096;
  L = 120;
  w = 4;
  _ = 64;
  g = 32;
  T = new RegExp("[\\u0000-\\u001f\\u007f]");
  k = new RegExp("^[a-z][a-z0-9_-]{0,39}$");
  q = new RegExp("^https:\\/\\/([a-z\\d-]+(?:\\.[a-z\\d-]+)+)(\\/[^\\s#\\\\]*)?$");
  E = [".blob.core.windows.net", ".chatgpt-staging.com", ".chatgpt.com", ".oaiusercontent.com", ".openai-staging.com", ".openai.com"];
  C = new Set(["image", "video", "audio", "pdf", "text", "other"]);
  if ((I)) goto L_3dd;
  I = {};
  exports.ChatGPTLibrarySurface = {};
  !function <atom:0>({});
  if ((P)) goto L_3f6;
  P = {};
  exports.ChatGPTLibraryItemKind = {};
  function <atom:0>({});
  if ((S)) goto L_40e;
  S = {};
  exports.ChatGPTLibraryItemState = {};
  function <atom:0>({});
  if ((A)) goto L_426;
  A = {};
  exports.ChatGPTLibraryItemAvailability = {};
  function <atom:0>({});
  if ((R)) goto L_433;
  R = {};
  function <atom:0>({});
  let ChatGPTLibraryCancelledError;
  let <class_fields_init>;
  class ChatGPTLibraryCancelledError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:ChatGPTLibraryCancelledError>;
  ChatGPTLibraryCancelledError = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTLibraryCancelledError#1 = function <atom:0>;
  exports.ChatGPTLibraryCancelledError = ChatGPTLibraryCancelledError#1;
  let ChatGPTLibraryRequestError;
  let <class_fields_init>#1;
  class ChatGPTLibraryRequestError extends Error { ... }
  <class_fields_init>#1 = undefined;
  <proto:ChatGPTLibraryRequestError>;
  ChatGPTLibraryRequestError = function <atom:0>;
  // close_loc <class_fields_init>#1
  ChatGPTLibraryRequestError#1 = function <atom:0>;
  exports.ChatGPTLibraryRequestError = ChatGPTLibraryRequestError#1;
  let AuthenticatedChatGPTLibraryClient;
  let <class_fields_init>#2;
  class AuthenticatedChatGPTLibraryClient extends undefined { ... }
  <proto:AuthenticatedChatGPTLibraryClient>.load = function <atom:0>;
  <proto:AuthenticatedChatGPTLibraryClient>.createDirectory = function <atom:0>;
  <proto:AuthenticatedChatGPTLibraryClient>.deleteItem = function <atom:0>;
  <proto:AuthenticatedChatGPTLibraryClient>.dispose = function <atom:0>;
  <proto:AuthenticatedChatGPTLibraryClient>.requestForLoad = function <atom:0>;
  <proto:AuthenticatedChatGPTLibraryClient>.shouldHydrateFolderThumbnails = function <atom:0>;
  <proto:AuthenticatedChatGPTLibraryClient>.runTask = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:AuthenticatedChatGPTLibraryClient>;
  AuthenticatedChatGPTLibraryClient = function <atom:0>;
  // close_loc <class_fields_init>#2
  AuthenticatedChatGPTLibraryClient#1 = function <atom:0>;
  exports.createChatGPTLibraryClient = F;
  exports.createLibraryNote = G;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/library/ChatGPTLibraryClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
