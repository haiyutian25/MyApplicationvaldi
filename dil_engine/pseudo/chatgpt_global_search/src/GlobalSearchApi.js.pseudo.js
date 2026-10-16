// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=131B file=chatgpt_global_search/src/GlobalSearchApi
// args: r
// locals: this.active_func, new.target, this
// closure: e, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("Global search request failed: ".concat(e.OAINetworkResultKind[r]));
  if (!(<class_fields_init>)) goto L_70;
  <class_fields_init>.call(this);
  new new.target("Global search request failed: ".concat(e.OAINetworkResultKind[r]));
  this.resultKind = r;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=16B file=chatgpt_global_search/src/GlobalSearchApi
// args: e
function {
  e.Demo = "demo";
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_global_search/src/GlobalSearchApi
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.networkClient = e;
  return;
}

// fn <atom:0>  args=3 vars=5 closure=3 cpool=1 bc=258B file=chatgpt_global_search/src/GlobalSearchApi
// args: e, t, a
// locals: o, this
// closure: r, i, l
function {
  this = this;
  let o;
  o = r.configurationForFilter(t);
  return i(this.networkClient.requestJson({request: {method: "GET", path: "/backend-api/global/search", query: {query: e, limit: "30", query_id: a, sources: o.sources, library_lanes: o.libraryLanes}}, decode: l}));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=chatgpt_global_search/src/GlobalSearchApi
// closure: i
function {
  i.cancel();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=708B file=chatgpt_global_search/src/GlobalSearchApi
// args: i
// closure: e, GlobalSearchRequestError, t, r, o, a
function {
  if (!((i.kind !== e.OAINetworkResultKind.Success))) goto L_94;
  throw new GlobalSearchRequestError(i.kind);
  if (!((i.value.backend === t.Demo))) goto L_144;
  goto L_189;
  // [栈深重同步 2 -> 1]
  if (!((i.value.partial_results == null))) goto L_220;
  i.value.partial_results;
  if (!((i.value.items == null))) goto L_270;
  i.value.items;
  return {backend: r.GlobalSearchBackend.Live, cursor: i.value.cursor, partialResults: false, results: [].map(o).filter(a)};
}

// fn i  args=1 vars=1 closure=6 cpool=2 bc=87B file=chatgpt_global_search/src/GlobalSearchApi
// args: i
// closure: e, GlobalSearchRequestError, t, r, o, a
function {
  return {cancel: function <atom:0>, result: i.result.then(function <atom:0>)};
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=44B file=chatgpt_global_search/src/GlobalSearchApi
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("Global search request cancelled");
  if (!(<class_fields_init>)) goto L_26;
  <class_fields_init>.call(this);
  new new.target("Global search request cancelled");
  return this;
}

// fn l  args=1 vars=2 closure=0 cpool=0 bc=222B file=chatgpt_global_search/src/GlobalSearchApi
// args: e
// locals: r
function {
  let r;
  if ((("object" != typeof e))) goto L_40;
  if (((null === e))) goto L_40;
  if (!(Array.isArray(e))) goto L_51;
  throw new Error("Global search response must be an object");
  r = e;
  if (!((undefined !== r.items))) goto L_da;
  if (!(!Array.isArray(r.items))) goto L_da;
  throw new Error("Global search response items must be an array");
  return r;
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=4B file=chatgpt_global_search/src/GlobalSearchApi
// args: e
function {
  return (undefined !== e);
}

// fn o  args=1 vars=2 closure=3 cpool=0 bc=2013B file=chatgpt_global_search/src/GlobalSearchApi
// args: e
// locals: t
// closure: r, s, n
function {
  let t;
  t = e.payload;
  if (!(e.id)) goto L_7dc;
  if (!(e.title)) goto L_7dc;
  if (!((t == null))) goto L_7f;
  t;
  goto L_a0;
  if (!(undefined.kind)) goto L_7dc;
  if (!((t.kind === "conversation"))) goto L_242;
  if (!(!t.conversation_id)) goto L_fd;
  t.kind;
  return;
  // [栈深重同步 0 -> 1]
  if (!((t.is_archived == null))) goto L_23c;
  t.is_archived;
  return {id: e.id, kind: r.GlobalSearchResultKind.Conversation, title: e.title, snippet: s(e.snippet), destinationId: t.conversation_id, messageId: t.message_id, archived: false};
  if (!((<?> === "library_file"))) goto L_59b;
  if (!(!t.file_id)) goto L_276;
  return;
  // [栈深重同步 0 -> 1]
  if (!(("library" === e.source_type))) goto L_316;
  if (!(n(t))) goto L_316;
  goto L_35b;
  // [栈深重同步 3 -> 2]
  if (!((t.library_item_id == null))) goto L_3fd;
  t.library_item_id;
  if (!((t.file_name == null))) goto L_49f;
  t.file_name;
  return {id: e.id, kind: r.GlobalSearchResultKind.Document, title: e.title, snippet: s(e.snippet), destinationId: t.file_id, libraryItemId: t.library_item_id, fileId: t.file_id, fileName: e.title, fileExtension: t.file_extension, mimeType: t.mime_type, libraryFileCategory: t.library_file_category, libraryArtifactType: t.library_artifact_type, gizmoId: t.gizmo_id, thumbnailUrl: t.thumbnail_url};
  if (!((<?> === "project"))) goto L_6e4;
  if (!(!t.project_id)) goto L_5cf;
  return;
  // [栈深重同步 0 -> 1]
  return {id: e.id, kind: r.GlobalSearchResultKind.Project, title: e.title, destinationId: t.project_id, emoji: t.emoji, theme: t.theme};
  if (!((<?> === "library_folder"))) goto L_7db;
  if (!(!t.directory_id)) goto L_718;
  return;
  // [栈深重同步 0 -> 1]
  return {id: e.id, kind: r.GlobalSearchResultKind.Folder, title: e.title, destinationId: t.directory_id};
  return;
  return;
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=234B file=chatgpt_global_search/src/GlobalSearchApi
// args: e
function {
  if (!((e.mime_type == null))) goto L_2c;
  e.mime_type;
  goto L_55;
  if (((true === undefined.startsWith("image/")))) goto L_e9;
  if (!((e.file_extension == null))) goto L_c2;
  e.file_extension;
  return ["png", "jpg", "jpeg", "gif", "webp"].includes("".toLowerCase());
}

// fn s  args=1 vars=2 closure=0 cpool=18 bc=570B file=chatgpt_global_search/src/GlobalSearchApi
// args: e
// locals: r
function {
  let r;
  if (!(!e)) goto L_8;
  return;
  r = e.replace(new RegExp("<[^>]*>"), " ").replace(new RegExp("!\\[[^\\]]*\\]\\([^)]*\\)"), " ").replace(new RegExp("\\}\\s*\\/>"), " ").replace(new RegExp("&lt;"), "<").replace(new RegExp("&gt;"), ">").replace(new RegExp("&amp;"), "&").replace(new RegExp("[▹▸]"), " ").replace(new RegExp("(^|\\s)[A-Za-z]?>"), "$1").replace(new RegExp("\\s+"), " ").trim();
  if (!((0 !== r.length))) goto L_238;
  if (!((r.length <= 280))) goto L_1e2;
  return r;
  return "".concat(r.slice(0, 279), "…");
  return undefined;
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=11 bc=289B file=chatgpt_global_search/src/GlobalSearchApi
// args: require, module, exports
// locals: e, r, GlobalSearchRequestError, <class_fields_init>, GlobalSearchRequestError#1, t, AuthenticatedGlobalSearchApi, <class_fields_init>#1, AuthenticatedGlobalSearchApi#1, i, GlobalSearchCancelledError, <class_fields_init>#2, GlobalSearchCancelledError#1, l, a, o, n, s
function {
  i = function i;
  l = function l;
  a = function a;
  o = function o;
  n = function n;
  s = function s;
  let GlobalSearchCancelledError#1;
  let AuthenticatedGlobalSearchApi#1;
  let GlobalSearchRequestError#1;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.GlobalSearchRequestError = undefined;
  exports.AuthenticatedGlobalSearchApi = undefined;
  exports.GlobalSearchCancelledError = undefined;
  e = require("oai_platform_services/src/OAINetworkClient");
  r = require("./GlobalSearchModels");
  let GlobalSearchRequestError;
  let <class_fields_init>;
  class GlobalSearchRequestError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:GlobalSearchRequestError>;
  GlobalSearchRequestError = function <atom:0>;
  // close_loc <class_fields_init>
  GlobalSearchRequestError#1 = function <atom:0>;
  exports.GlobalSearchRequestError = GlobalSearchRequestError#1;
  if ((t)) goto L_c4;
  t = {};
  function <atom:0>({});
  let AuthenticatedGlobalSearchApi;
  let <class_fields_init>#1;
  class AuthenticatedGlobalSearchApi extends undefined { ... }
  <proto:AuthenticatedGlobalSearchApi>.search = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AuthenticatedGlobalSearchApi>;
  AuthenticatedGlobalSearchApi = function <atom:0>;
  // close_loc <class_fields_init>#1
  AuthenticatedGlobalSearchApi#1 = function <atom:0>;
  exports.AuthenticatedGlobalSearchApi = AuthenticatedGlobalSearchApi#1;
  let GlobalSearchCancelledError;
  let <class_fields_init>#2;
  class GlobalSearchCancelledError extends Error { ... }
  <class_fields_init>#2 = undefined;
  <proto:GlobalSearchCancelledError>;
  GlobalSearchCancelledError = function <atom:0>;
  // close_loc <class_fields_init>#2
  GlobalSearchCancelledError#1 = function <atom:0>;
  exports.GlobalSearchCancelledError = GlobalSearchCancelledError#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_global_search/src/GlobalSearchApi
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
