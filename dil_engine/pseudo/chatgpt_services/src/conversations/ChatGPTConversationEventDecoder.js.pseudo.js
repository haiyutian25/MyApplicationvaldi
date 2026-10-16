// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=91B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
function {
  e.Add = "add";
  e.Append = "append";
  e.Patch = "patch";
  e.Remove = "remove";
  e.Replace = "replace";
  e.Truncate = "truncate";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=113B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// locals: this
// closure: <class_fields_init>, ChatGPTDeltaEncodedPayloadDecoder, n
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.payloadDecoder = new ChatGPTDeltaEncodedPayloadDecoder();
  this.assistantTextById = new Map();
  this.reasoning = new n.AssistantReasoningAccumulator();
  this.eventOffset = 0;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=48B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
// closure: g
function {
  if (!(g(e))) goto L_2f;
  return ("resume_sse_endpoint" === e.type);
}

// fn <atom:0>  args=1 vars=21 closure=6 cpool=1 bc=3629B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
// locals: e#1, n, e#2, o, a, s, i, u, v, p, h, f, y, m, C, P, _, T, A, this
// closure: g, r, c, d, t, l
function {
  this = this;
  let A;
  let T;
  let _;
  let P;
  let C;
  let m;
  let y;
  let f;
  let h;
  let p;
  let v;
  let u;
  let i;
  let s;
  let a;
  let o;
  let n;
  if (!(("[DONE]" === e.data))) goto L_cc;
  let e#1;
  e#1 = this.reasoning.complete();
  if (!((undefined === e#1))) goto L_bd;
  goto L_c6;
  // [栈深重同步 2 -> 1]
  null;
  {reasoning: e#1};
  return {complete: true};
  this.eventOffset = (this.eventOffset ++);
  n = this.payloadDecoder.decode(e);
  if (!((undefined === n))) goto L_152;
  return {complete: false};
  if (!(!g(n))) goto L_163;
  return {complete: false};
  if (!(("resume_conversation_token" === n.type))) goto L_28a;
  if (!(("string" == typeof n.token))) goto L_280;
  if (!((n.token.length > 0))) goto L_280;
  if (!(("string" == typeof n.conversation_id))) goto L_280;
  this.resumeToken = n.token;
  this.resumeConversationId = n.conversation_id;
  n.conversation_id;
  return {complete: false};
  if (!(("stream_handoff" === n.type))) goto L_50d;
  if (!(Array.isArray(n.options))) goto L_32e;
  goto L_331;
  // [栈深重同步 1 -> 0]
  if (!(![].some(function <atom:0>))) goto L_363;
  return {complete: false};
  if (((undefined === this.resumeToken))) goto L_3b1;
  if (!((undefined === this.resumeConversationId))) goto L_3e1;
  throw new r.ChatGPTConversationError("ChatGPT requested a stream handoff without a valid resume token.");
  if (!(("string" == typeof n.conversation_id))) goto L_486;
  if (!((n.conversation_id !== this.resumeConversationId))) goto L_486;
  throw new r.ChatGPTConversationError("ChatGPT requested a stream handoff for a different conversation.");
  return {complete: false, continuation: {conversationId: this.resumeConversationId, eventOffset: this.eventOffset, token: this.resumeToken}};
  if (!(("message_stream_complete" === n.type))) goto L_5a5;
  let e#2;
  e#2 = this.reasoning.complete();
  if (!((undefined === e#2))) goto L_596;
  goto L_59f;
  // [栈深重同步 2 -> 1]
  null;
  {reasoning: e#2};
  return {complete: true};
  o = c(n);
  if (!((undefined === o))) goto L_5bb;
  return {complete: false};
  a = o.message.author;
  if ((!g(a))) goto L_662;
  if (!(("assistant" !== a.role))) goto L_66d;
  if (!(("tool" !== a.role))) goto L_66d;
  return {complete: false};
  s = o.message.id;
  if ((("string" != typeof s))) goto L_6c8;
  if (!((0 === s.length))) goto L_6d3;
  return {complete: false};
  if (!(g(o.message.metadata))) goto L_763;
  goto L_764;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!((i == null))) goto L_773;
  i;
  goto L_794;
  if (!((true === undefined.is_visually_hidden_from_conversation))) goto L_7a0;
  return {complete: false};
  u = this.reasoning.consume(o.message);
  if (!(g(o.message.content))) goto L_89d;
  goto L_89e;
  // [栈深重同步 1 -> 0]
  v = undefined;
  if ((("tool" === a.role))) goto L_a6c;
  if (!((v == null))) goto L_8e1;
  v;
  goto L_902;
  if ((("thoughts" === undefined.content_type))) goto L_a6c;
  if (!((v == null))) goto L_91a;
  v;
  goto L_93b;
  if ((("reasoning_recap" === undefined.content_type))) goto L_a6c;
  if (!((i == null))) goto L_950;
  i;
  goto L_971;
  if (((true === undefined.is_thinking_preamble_message))) goto L_a6c;
  if (!((undefined !== u))) goto L_a8f;
  if (!(("string" == typeof o.message.recipient))) goto L_a8f;
  if (!(("all" !== o.message.recipient))) goto L_a8f;
  if (!(("assistant" !== o.message.recipient))) goto L_a8f;
  if (!((undefined === u))) goto L_a80;
  goto L_a89;
  // [栈深重同步 2 -> 1]
  null;
  {reasoning: u};
  return {complete: false};
  p = d(o.message.content);
  if (!((this.assistantTextById.get(s) == null))) goto L_b28;
  this.assistantTextById.get(s);
  h = "";
  if (!(p.startsWith(h))) goto L_b83;
  goto L_b84;
  // [栈深重同步 1 -> 0]
  f = "";
  if (!((p.length >= h.length))) goto L_c0e;
  if (!(p.startsWith(h))) goto L_c0e;
  this.assistantTextById.set(s, p);
  if (!((undefined === o.conversationId))) goto L_c3a;
  goto L_c6c;
  // [栈深重同步 1 -> 0]
  y = {conversationId: o.conversationId, parentMessageId: s};
  m = t.decodeModelWrittenDILResult(i, p, "streamed conversation metadata");
  if (!((m == null))) goto L_cab;
  m;
  goto L_ccc;
  C = undefined.rawPayload;
  if (!((undefined !== C))) goto L_cfe;
  P = (C !== this.lastDILPayload);
  if (!(P)) goto L_d16;
  this.lastDILPayload = C;
  C;
  _ = l(i);
  if (!((undefined === _))) goto L_d2a;
  goto L_d56;
  // [栈深重同步 1 -> 0]
  T = JSON.stringify(_);
  if (!((undefined !== T))) goto L_d88;
  A = (T !== this.lastEntityReferencesSnapshot);
  if (!(A)) goto L_da0;
  this.lastEntityReferencesSnapshot = T;
  T;
  if (!((undefined === y))) goto L_db3;
  goto L_dbc;
  // [栈深重同步 2 -> 1]
  null;
  {conversationState: y};
  if (!((0 === f.length))) goto L_dcc;
  goto L_dd5;
  // [栈深重同步 2 -> 1]
  null;
  {delta: f};
  if (!(P)) goto L_df1;
  if (!((undefined !== m))) goto L_df1;
  goto L_df2;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!(A)) goto L_e0e;
  if (!((undefined !== _))) goto L_e0e;
  goto L_e0f;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((undefined === u))) goto L_e1e;
  goto L_e27;
  // [栈深重同步 2 -> 1]
  null;
  {reasoning: u};
  return {complete: false};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=103B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// locals: this
// closure: <class_fields_init>, i
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.previousByChannel = new Map();
  this.previousDelta = {channel: 0, operation: i.Add, path: "", value: undefined};
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=247B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
// locals: t, n, this
function {
  this = this;
  let t;
  if (!(("delta_encoding" === e.type))) goto L_30;
  return;
  t = undefined;
  try { // catch -> L_8a
  t = JSON.parse(e.data);
  JSON.parse(e.data);
  <?>;
  goto L_a0;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_9f
  throw new Error("ChatGPT returned an invalid conversation event.");
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(("delta" === e.type))) goto L_f3;
  return this.applyDelta(t);
  return t;
}

// fn <atom:0>  args=1 vars=7 closure=3 cpool=0 bc=770B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
// locals: t, n, r, o, a, this
// closure: g, f, y
function {
  this = this;
  let a;
  let o;
  let r;
  let n;
  let t;
  if (!(!g(e))) goto L_27;
  throw new Error("ChatGPT returned an invalid delta event.");
  if (!(("number" == typeof e.c))) goto L_76;
  goto L_ba;
  // [栈深重同步 1 -> 0]
  t = this.previousDelta.channel;
  if (!(("string" == typeof e.p))) goto L_10a;
  goto L_14e;
  // [栈深重同步 1 -> 0]
  n = this.previousDelta.path;
  if (!(("string" == typeof e.o))) goto L_1a9;
  goto L_1ed;
  // [栈深重同步 2 -> 1]
  r = {channel: t, operation: this.previousDelta.operation, path: n, value: e.v};
  this.previousDelta = r;
  o = {value: this.previousByChannel.get(t)};
  y(o, r);
  a = o.value;
  this.previousByChannel.set(t, a);
  return a;
}

// fn c  args=1 vars=2 closure=1 cpool=0 bc=616B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
// locals: t
// closure: g
function {
  if (!(g(e.message))) goto L_ad;
  if (!(("string" == typeof e.conversation_id))) goto L_7f;
  goto L_80;
  // [栈深重同步 2 -> 1]
  null;
  {};
  return {message: e.message};
  if (!(g(e.v))) goto L_267;
  if (!(g(e.v.message))) goto L_267;
  let t;
  if (!(("string" == typeof e.v.conversation_id))) goto L_1b4;
  goto L_204;
  // [栈深重同步 1 -> 0]
  if (!(("string" == typeof e.conversation_id))) goto L_203;
  goto L_204;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (!((undefined === t))) goto L_210;
  goto L_219;
  // [栈深重同步 2 -> 1]
  null;
  {conversationId: t};
  return {message: e.v.message};
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
function {
  return ("string" == typeof e);
}

// fn d  args=1 vars=1 closure=1 cpool=1 bc=281B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
// closure: g
function {
  if (!(g(e))) goto L_117;
  if (!(("string" == typeof e.text))) goto L_56;
  return e.text;
  if (!(Array.isArray(e.parts))) goto L_115;
  return e.parts.filter(function <atom:0>).join("
");
  return "";
  return "";
}

// fn l  args=1 vars=5 closure=1 cpool=0 bc=266B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
// locals: t, n, r, e#1
// closure: u
function {
  let n;
  let t;
  if (!((e == null))) goto L_f;
  e;
  goto L_30;
  t = undefined.content_references;
  if (!(!Array.isArray(t))) goto L_61;
  return;
  n = new Map();
  let r;
  for (const r of t) {
    let e#1;
    e#1 = u(r);
    if (!((undefined !== e#1))) goto L_d5;
    n.set(e#1.startIndex, e#1);
  }
  // append([], 0, n.values())
  n.values();
  return [];
}

// fn u  args=1 vars=7 closure=4 cpool=0 bc=428B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
// locals: t, n, r, o, a, s
// closure: g, p, v, h
function {
  let s;
  let a;
  let o;
  let r;
  let n;
  let t;
  if ((!g(e))) goto L_42;
  if (!(("entity" !== e.type))) goto L_45;
  return;
  t = p(e.name);
  n = v(e.start_idx);
  r = v(e.end_idx);
  if (((undefined === t))) goto L_d6;
  if (((undefined === n))) goto L_d6;
  if (((undefined === r))) goto L_d6;
  if (!((r <= n))) goto L_d9;
  return;
  o = p(e.category);
  a = p(e.notes);
  s = h(e.extra_params);
  if (!((undefined === o))) goto L_155;
  goto L_15e;
  // [栈深重同步 2 -> 1]
  null;
  {category: o};
  if (!((undefined === s))) goto L_175;
  goto L_17e;
  // [栈深重同步 2 -> 1]
  null;
  {extraParamsJson: s};
  if (!((undefined === a))) goto L_195;
  goto L_19e;
  // [栈深重同步 2 -> 1]
  null;
  {notes: a};
  return {endIndex: r, name: t, startIndex: n};
}

// fn v  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
function {
  if (!(("number" == typeof e))) goto L_3d;
  if (!(Number.isSafeInteger(e))) goto L_3d;
  if (!((e >= 0))) goto L_3d;
  return e;
  return undefined;
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=56B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
function {
  if (!(("string" == typeof e))) goto L_36;
  if (!((e.trim().length > 0))) goto L_36;
  return e;
  return undefined;
}

// fn h  args=1 vars=2 closure=2 cpool=0 bc=198B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: t
// locals: n
// closure: g, e
function {
  if (!(g(t))) goto L_c5;
  try { // catch -> L_39
  return JSON.stringify(t);
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_c4
  if (!(e.isLoggingEnabled)) goto L_c0;
  console.warn("Unable to encode ChatGPT entity reference parameters: ".concat(String(n)));
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=454B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
// closure: i
function {
  if (!((e === i.Add))) goto L_4a;
  return i.Add;
  if (!((e === i.Append))) goto L_93;
  return i.Append;
  if (!((e === i.Patch))) goto L_dc;
  return i.Patch;
  if (!((e === i.Remove))) goto L_125;
  return i.Remove;
  if (!((e === i.Replace))) goto L_16e;
  return i.Replace;
  if (!((e === i.Truncate))) goto L_1b7;
  return i.Truncate;
  throw new Error("ChatGPT returned an unsupported conversation delta.");
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=4 bc=278B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
// locals: t
// closure: r, n, o
function {
  let t;
  t = e.replace(new RegExp("~1"), "/").replace(new RegExp("~0"), "~");
  if ((("__proto__" === t))) goto L_84;
  if ((("constructor" === t))) goto L_84;
  if (!(("prototype" === t))) goto L_b4;
  throw new r.ChatGPTConversationError("ChatGPT returned an unsafe conversation delta path.");
  if (!(o.test(t))) goto L_10f;
  goto L_112;
  // [栈深重同步 3 -> 2]
  n.push(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=278B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: n
// closure: g, y, e, t, f
function {
  if ((!g(n))) goto L_5e;
  if ((("string" != typeof n.o))) goto L_5e;
  if (!(("string" != typeof n.p))) goto L_6f;
  throw new Error("ChatGPT returned an invalid nested conversation delta.");
  y(e, {channel: t.channel, operation: f(n.o), path: n.p, value: n.v});
  return;
}

// fn y  args=2 vars=12 closure=8 cpool=2 bc=2393B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e, t
// locals: n, c, r, e#1, t#1, d, l, e#2, e#3, e#4
// closure: r, o, g, y, f, a, s, i
function {
  let l;
  let d;
  let c;
  let n;
  n = ["value"];
  if (!((t.path.length > 0))) goto L_1d6;
  if (!((t.path.length > a))) goto L_96;
  throw new r.ChatGPTConversationError("ChatGPT returned an invalid conversation delta path.");
  if (!(t.path.startsWith("/"))) goto L_12c;
  goto L_14e;
  // [栈深重同步 1 -> 0]
  t.path.split("/").forEach(function <atom:0>);
  if (!((n.length > s))) goto L_1d6;
  throw new r.ChatGPTConversationError("ChatGPT returned an invalid conversation delta path.");
  c = e;
  let r;
  r = 0;
  if (!((r < (n.length - 1)))) goto L_27b;
  let t#1;
  let e#1;
  e#1 = String(n[r]);
  t#1 = c[e#1];
  if ((g(t#1))) goto L_263;
  if ((Array.isArray(t#1))) goto L_263;
  if (!(("number" == typeof n[(r + 1)]))) goto L_260;
  goto L_261;
  // [栈深重同步 3 -> 2]
  c[e#1] = {};
  {};
  c = c[e#1];
  c[e#1];
  r = <r_new>;
  (r++);
  goto L_1dd;
  d = n[(n.length - 1)];
  l = String(d);
  if (!((t.operation === i.Add))) goto L_395;
  if (!(Array.isArray(c))) goto L_368;
  if (!(("number" == typeof d))) goto L_368;
  goto L_393;
  // [栈深重同步 2 -> 1]
  c[l] = t.value;
  t.value;
  t.operation;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === i.Append))) goto L_5b2;
  let e#2;
  e#2 = c[l];
  if (!(("string" == typeof e#2))) goto L_410;
  c[l] = (e#2 + String(t.value));
  goto L_5b0;
  // [栈深重同步 2 -> 1]
  if (!(Array.isArray(e#2))) goto L_508;
  if (!(Array.isArray(t.value))) goto L_4da;
  goto L_4ff;
  // [栈深重同步 6 -> 5]
  // append([], 0, [t.value])
  [t.value];
  goto L_5b0;
  // [栈深重同步 2 -> 1]
  if (!(g(e#2))) goto L_585;
  if (!(g(t.value))) goto L_585;
  goto L_5b0;
  // [栈深重同步 2 -> 1]
  c[l] = t.value;
  t.value;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === i.Patch))) goto L_6c2;
  let e#3;
  if (!(!Array.isArray(t.value))) goto L_63d;
  throw new Error("ChatGPT returned an invalid nested conversation delta.");
  e#3 = {value: c[l]};
  t.value.forEach(function <atom:0>);
  c[l] = e#3.value;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === i.Remove))) goto L_75a;
  if (!(Array.isArray(c))) goto L_751;
  if (!(("number" == typeof d))) goto L_751;
  goto L_758;
  // [栈深重同步 2 -> 1]
  // [栈深重同步 3 -> 2]
  c;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === i.Replace))) goto L_7ad;
  c[l] = t.value;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === i.Truncate))) goto L_958;
  let e#4;
  e#4 = c[l];
  if ((("number" != typeof t.value))) goto L_885;
  if ((!Number.isInteger(t.value))) goto L_885;
  if (!((t.value < 0))) goto L_896;
  throw new Error("ChatGPT returned an invalid conversation truncation.");
  if (!(("string" == typeof e#4))) goto L_8f7;
  c[l] = e#4.slice(0, t.value);
  goto L_956;
  // [栈深重同步 2 -> 1]
  if (!(Array.isArray(e#4))) goto L_956;
  e#4.length = t.value;
  t.value;
  return;
  // [栈深重同步 0 -> 1]
  return;
}

// fn g  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=27 closure=0 cpool=18 bc=369B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// args: require, module, exports
// locals: e, t, n, r, o, a, s, i, ChatGPTConversationEventDecoder, <class_fields_init>, ChatGPTConversationEventDecoder#1, ChatGPTDeltaEncodedPayloadDecoder, <class_fields_init>#1, ChatGPTDeltaEncodedPayloadDecoder#1, c, d, l, u, v, p, h, f, y, g
function {
  c = function c;
  d = function d;
  l = function l;
  u = function u;
  v = function v;
  p = function p;
  h = function h;
  f = function f;
  y = function y;
  g = function g;
  let ChatGPTDeltaEncodedPayloadDecoder#1;
  let ChatGPTConversationEventDecoder#1;
  let s;
  let a;
  let o;
  let r;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTConversationEventDecoder = undefined;
  exports.ChatGPTDeltaEncodedPayloadDecoder = undefined;
  exports.decodeAssistantEntityReferences = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("../generated_ui/ModelWrittenDILDecoder");
  n = require("./AssistantReasoning");
  r = require("./ChatGPTConversationError");
  o = new RegExp("^(?:0|[1-9]\\d*)$");
  a = 2048;
  s = 64;
  if ((i)) goto L_fb;
  i = {};
  !function <atom:0>({});
  let ChatGPTConversationEventDecoder;
  let <class_fields_init>;
  class ChatGPTConversationEventDecoder extends undefined { ... }
  <proto:ChatGPTConversationEventDecoder>.consume = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ChatGPTConversationEventDecoder>;
  ChatGPTConversationEventDecoder = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTConversationEventDecoder#1 = function <atom:0>;
  exports.ChatGPTConversationEventDecoder = ChatGPTConversationEventDecoder#1;
  let ChatGPTDeltaEncodedPayloadDecoder;
  let <class_fields_init>#1;
  class ChatGPTDeltaEncodedPayloadDecoder extends undefined { ... }
  <proto:ChatGPTDeltaEncodedPayloadDecoder>.decode = function <atom:0>;
  <proto:ChatGPTDeltaEncodedPayloadDecoder>.applyDelta = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ChatGPTDeltaEncodedPayloadDecoder>;
  ChatGPTDeltaEncodedPayloadDecoder = function <atom:0>;
  // close_loc <class_fields_init>#1
  ChatGPTDeltaEncodedPayloadDecoder#1 = function <atom:0>;
  exports.ChatGPTDeltaEncodedPayloadDecoder = ChatGPTDeltaEncodedPayloadDecoder#1;
  exports.decodeAssistantEntityReferences = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/conversations/ChatGPTConversationEventDecoder
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
