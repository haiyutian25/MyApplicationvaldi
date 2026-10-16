// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=67B file=memory_settings_ui/src/MemoryStorageService
// args: e
// locals: this
// closure: <class_fields_init>, o
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.networkClient = new o.OAINetworkClient(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=121B file=memory_settings_ui/src/MemoryStorageService
// locals: this
// closure: i
function {
  this = this;
  return this.networkClient.requestJson({request: {method: "GET", path: "/backend-api/memories", query: {include_memory_entries: "false"}}, decode: i});   // tail call
}

// fn i  args=1 vars=2 closure=1 cpool=0 bc=145B file=memory_settings_ui/src/MemoryStorageService
// args: e
// locals: o
// closure: r
function {
  let o;
  o = r.decode(e);
  if (((o.usedTokens < 0))) goto L_7c;
  if (!((o.maximumTokens <= 0))) goto L_8d;
  throw new Error("Memory storage response must include a valid token usage and capacity");
  return o;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=3 bc=521B file=memory_settings_ui/src/MemoryStorageService
// args: require, module, exports
// locals: e, r, o, n, MemoryStorageService, <class_fields_init>, MemoryStorageService#1, i
function {
  i = function i;
  let MemoryStorageService#1;
  let n;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MemoryStorageService = undefined;
  e = require("valdi_core/src/JsonSerializationRuntime");
  r = e.createJsonSerializer({kind: e.JsonSchemaKind.Object, name: "MemoryStorageUsage", fields: [{name: "usedTokens", jsonName: "memory_num_tokens", schema: {kind: e.JsonSchemaKind.Number}, optional: false, resilient: false}, {name: "maximumTokens", jsonName: "memory_max_tokens", schema: {kind: e.JsonSchemaKind.Number}, optional: false, resilient: false}]});
  o = require("oai_platform_services/src/OAINetworkClient");
  n = require("valdi_core/src/JsonSerialization");
  let MemoryStorageService;
  let <class_fields_init>;
  class MemoryStorageService extends undefined { ... }
  <proto:MemoryStorageService>.fetchMemoryStorage = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MemoryStorageService>;
  MemoryStorageService = function <atom:0>;
  // close_loc <class_fields_init>
  MemoryStorageService#1 = function <atom:0>;
  exports.MemoryStorageService = MemoryStorageService#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=memory_settings_ui/src/MemoryStorageService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
