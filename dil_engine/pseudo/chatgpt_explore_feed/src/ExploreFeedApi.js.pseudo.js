// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e, n
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.networkClient = e;
  this.imageBaseUrl = n;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e
// closure: s, this
function {
  return s(e, this.imageBaseUrl);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=1 bc=244B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e, n
// locals: r, i, this
// closure: s, t, o
function {
  this = this;
  let i;
  let r;
  r = {};
  i = t(e)[0];
  if ((("content_examples" === i))) goto L_26;
  if (!(("action_examples" === i))) goto L_3a;
  r.provider = i;
  goto L_53;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== i))) goto L_53;
  r.source = i;
  i;
  if (!((undefined !== n))) goto L_69;
  r.cursor = n;
  n;
  if (((undefined !== i))) goto L_d0;
  if (!((undefined !== n))) goto L_d7;
  goto L_d8;
  // [栈深重同步 6 -> 5]
  return o(this.networkClient.requestJson({request: {method: "GET", path: "/backend-api/explore/feed/dil", query: undefined}, decode: function <atom:0>}));   // tail call
}

// fn t  args=1 vars=2 closure=0 cpool=0 bc=100B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e
// locals: n
function {
  let n;
  for (const n of e) {
    if (((n === ""))) goto L_19;
    if (!((n === "habitat"))) goto L_21;
    return [];
    // [栈深重同步 1 -> 4]
    if (((<?> === "evergreen"))) goto L_4e;
    if (((<?> === "evergreen_demo"))) goto L_4e;
    if (((<?> === "task_suggestions"))) goto L_4e;
    if (((<?> === "content_examples"))) goto L_4e;
    if (!((<?> === "action_examples"))) goto L_59;
    return [n];
    // [栈深重同步 1 -> 4]
    <?>;
  }
  return [];
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=chatgpt_explore_feed/src/ExploreFeedApi
// closure: e
function {
  e.cancel();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=263B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e
// closure: r
function {
  if (!((e.kind !== r.OAINetworkResultKind.Success))) goto L_e4;
  throw new Error("Explore feed request failed: ".concat(r.OAINetworkResultKind[e.kind]));
  return e.value;
}

// fn o  args=1 vars=1 closure=1 cpool=2 bc=87B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e
// closure: r
function {
  return {cancel: function <atom:0>, result: e.result.then(function <atom:0>)};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=199B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e
function {
  return {id: e.id, name: e.name, candidateIds: e.candidateIds, dil: JSON.parse(e.dilJson)};
}

// fn s  args=2 vars=3 closure=2 cpool=1 bc=216B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e, r
// locals: i
// closure: n, a
function {
  let i;
  i = n.decode(a(e, r));
  if (!((i.nextCursor == null))) goto L_d2;
  i.nextCursor;
  return {id: i.id, items: i.items.map(function <atom:0>), nextCursor: undefined};
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=187B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e
// closure: l, r, d
function {
  if (!(l(e))) goto L_b9;
  if (!(l(e.dil))) goto L_b9;
  null;
  e;
  if (!((undefined === r))) goto L_89;
  goto L_b0;
  // [栈深重同步 4 -> 3]
  return {_dil_json: JSON.stringify(d(e.dil, r))};
  return e;
}

// fn a  args=2 vars=3 closure=2 cpool=3 bc=399B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e, n
// locals: r
// closure: l, d
function {
  let r;
  if (!(!l(e))) goto L_18;
  throw new Error("Explore feed response must be an object");
  if (!(!Array.isArray(e.items))) goto L_75;
  throw new Error("Explore feed response items must be an array");
  if (!((undefined !== e.next_cursor))) goto L_fb;
  if (!((null !== e.next_cursor))) goto L_fb;
  if (!(("string" != typeof e.next_cursor))) goto L_fb;
  throw new Error("Explore feed response next cursor must be a string");
  if (!((n == null))) goto L_106;
  n;
  if (!(("https://chatgpt.com".match(new RegExp("^https?:\\/\\/[^/?#]+")) == null))) goto L_137;
  "https://chatgpt.com".match(new RegExp("^https?:\\/\\/[^/?#]+"));
  goto L_139;
  r = undefined[0];
  null;
  e;
  return {items: e.items.map(function <atom:0>)};
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=12B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e
// closure: l, d, n
function {
  if (!(l(e))) goto L_a;
  return d(e, n);
  return e;
}

// fn d  args=2 vars=4 closure=3 cpool=1 bc=387B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e, n
// locals: r, i
// closure: l, d, c
function {
  let r;
  null;
  e;
  r = {};
  if (!(("Image" === e.type))) goto L_da;
  let i;
  i = e.src;
  if (!(l(i))) goto L_cb;
  null;
  i;
  goto L_d1;
  // [栈深重同步 2 -> 1]
  r.src = c(i, n);
  if (!(Array.isArray(e.children))) goto L_17e;
  r.children = e.children.map(function <atom:0>);
  e.children.map(function <atom:0>);
  return r;
}

// fn c  args=2 vars=2 closure=0 cpool=0 bc=105B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e, n
function {
  if (!(("string" == typeof e))) goto L_67;
  if (!(e.startsWith("/"))) goto L_67;
  if (!(!e.startsWith("//"))) goto L_67;
  return (n + e);
  return e;
}

// fn l  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=9 bc=1351B file=chatgpt_explore_feed/src/ExploreFeedApi
// args: require, module, exports
// locals: e, n, r, i, ExploreFeedApi, <class_fields_init>, ExploreFeedApi#1, t, o, s, a, d, c, l
function {
  t = function t;
  o = function o;
  s = function s;
  a = function a;
  d = function d;
  c = function c;
  l = function l;
  let ExploreFeedApi#1;
  let i;
  let r;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedApi = undefined;
  exports.normalizeExploreFeedSelection = undefined;
  exports.decodeExploreFeedPage = undefined;
  e = require("valdi_core/src/JsonSerializationRuntime");
  n = e.createJsonSerializer({kind: e.JsonSchemaKind.Object, name: "ExploreFeedPageWire", fields: [{name: "id", jsonName: "id", schema: {kind: e.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "items", jsonName: "items", schema: {kind: e.JsonSchemaKind.Array, element: {kind: e.JsonSchemaKind.Object, name: "ExploreFeedItemWire", fields: [{name: "id", jsonName: "id", schema: {kind: e.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "name", jsonName: "name", schema: {kind: e.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "candidateIds", jsonName: "candidate_ids", schema: {kind: e.JsonSchemaKind.Array, element: {kind: e.JsonSchemaKind.String}}, optional: false, resilient: false}, {name: "dilJson", jsonName: "_dil_json", schema: {kind: e.JsonSchemaKind.String}, optional: false, resilient: false}]}}, optional: false, resilient: true}, {name: "nextCursor", jsonName: "next_cursor", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}]});
  r = require("oai_platform_services/src/OAINetworkClient");
  i = require("valdi_core/src/JsonSerialization");
  let ExploreFeedApi;
  let <class_fields_init>;
  class ExploreFeedApi extends undefined { ... }
  <proto:ExploreFeedApi>.load = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExploreFeedApi>;
  ExploreFeedApi = function <atom:0>;
  // close_loc <class_fields_init>
  ExploreFeedApi#1 = function <atom:0>;
  exports.ExploreFeedApi = ExploreFeedApi#1;
  exports.normalizeExploreFeedSelection = t;
  exports.decodeExploreFeedPage = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedApi
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
