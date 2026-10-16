// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=57B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerClient
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.createEndpoint = e;
  this.streams = new Map();
  this.nextRequestId = 1;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=94B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerClient
// args: s
// closure: t, e, r
function {
  return {kind: t.ChatGPTStreamHostMessageKind.StartPolling, requestId: s, configuration: e, input: r};
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=1 bc=42B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerClient
// args: e, r, s
// locals: this
// closure: t
function {
  this = this;
  return this.start(s, function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=88B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerClient
// args: r
// closure: t, e
function {
  return {kind: t.ChatGPTStreamHostMessageKind.StartDirect, requestId: r, configuration: e};
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=42B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerClient
// args: e, r
// locals: this
// closure: t
function {
  this = this;
  return this.start(r, function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerClient
// closure: this, r
function {
  return this.cancel(r);   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=1 bc=329B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerClient
// args: e, t
// locals: r, s, n, this
function {
  this = this;
  let s;
  let r;
  this.nextRequestId = <this.nextRequestId_new>;
  r = (this.nextRequestId++);
  s = this.getEndpoint();
  this.streams.set(r, {callbacks: e, deliveredContent: ""});
  try { // catch -> L_e8
  s.post(t(r));
  <?>;
  goto L_13b;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_13a
  this.streams.delete(r);
  throw n;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerClient
// args: e
// closure: this
function {
  return this.receive(e);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=171B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerClient
// locals: e, this
function {
  this = this;
  if (!((undefined === this.endpoint))) goto L_88;
  let e;
  e = this.createEndpoint();
  e.setReceiver(function <atom:0>);
  this.endpoint = e;
  return this.endpoint;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=314B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerClient
// args: e
// locals: this
// closure: t
function {
  this = this;
  if (!((undefined !== this.streams.get(e)))) goto L_139;
  this.streams.delete(e);
  if (!((this.endpoint == null))) goto L_c4;
  this.endpoint;
  goto L_139;
  undefined.post({kind: t.ChatGPTStreamHostMessageKind.Cancel, requestId: e});
  return;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=2152B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerClient
// args: r
// locals: s, e, t, this
// closure: t, e
function {
  this = this;
  let s;
  s = this.streams.get(r.requestId);
  if (!((undefined !== s))) goto L_867;
  if (!((r.kind === t.ChatGPTStreamWorkerMessageKind.PreparedContent))) goto L_30d;
  let e;
  e = r.content;
  if (!((undefined !== s.callbacks.onPreparedContent))) goto L_1a4;
  s.callbacks.onPreparedContent(e);
  goto L_2dc;
  if (!(e.content.startsWith(s.deliveredContent))) goto L_2dc;
  let t;
  t = e.content.slice(s.deliveredContent.length);
  if (!((t.length > 0))) goto L_2db;
  s.callbacks.onTextDelta(t);
  s.deliveredContent = e.content;
  r.kind;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === t.ChatGPTStreamWorkerMessageKind.ConversationState))) goto L_3cb;
  if (!((s.callbacks.onConversationState == null))) goto L_3a4;
  s.callbacks.onConversationState;
  s.callbacks;
  goto L_3c9;
  // [栈深重同步 2 -> 3]
  <?>.call(undefined, r.state);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === t.ChatGPTStreamWorkerMessageKind.DILResult))) goto L_480;
  s.callbacks.onDILResult(r.result);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === t.ChatGPTStreamWorkerMessageKind.EntityReferences))) goto L_53e;
  if (!((s.callbacks.onEntityReferences == null))) goto L_517;
  s.callbacks.onEntityReferences;
  s.callbacks;
  goto L_53c;
  // [栈深重同步 2 -> 3]
  <?>.call(undefined, r.references);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === t.ChatGPTStreamWorkerMessageKind.Reasoning))) goto L_5fc;
  if (!((s.callbacks.onReasoning == null))) goto L_5d5;
  s.callbacks.onReasoning;
  s.callbacks;
  goto L_5fa;
  // [栈深重同步 2 -> 3]
  <?>.call(undefined, r.reasoning);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === t.ChatGPTStreamWorkerMessageKind.Complete))) goto L_6fb;
  this.streams.delete(r.requestId);
  s.callbacks.onComplete();
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === t.ChatGPTStreamWorkerMessageKind.Error))) goto L_866;
  this.streams.delete(r.requestId);
  s.callbacks.onError(new e.ChatGPTBackgroundStreamError(r.errorKind, r.message));
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=7 bc=178B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerClient
// args: require, module, exports
// locals: e, t, ChatGPTStreamingWorkerClient, <class_fields_init>, ChatGPTStreamingWorkerClient#1
function {
  let ChatGPTStreamingWorkerClient#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTStreamingWorkerClient = undefined;
  e = require("./ChatGPTStreamingContracts");
  t = require("./ChatGPTStreamingProtocol");
  let ChatGPTStreamingWorkerClient;
  let <class_fields_init>;
  class ChatGPTStreamingWorkerClient extends undefined { ... }
  <proto:ChatGPTStreamingWorkerClient>.startPolling = function <atom:0>;
  <proto:ChatGPTStreamingWorkerClient>.startDirect = function <atom:0>;
  <proto:ChatGPTStreamingWorkerClient>.start = function <atom:0>;
  <proto:ChatGPTStreamingWorkerClient>.getEndpoint = function <atom:0>;
  <proto:ChatGPTStreamingWorkerClient>.cancel = function <atom:0>;
  <proto:ChatGPTStreamingWorkerClient>.receive = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ChatGPTStreamingWorkerClient>;
  ChatGPTStreamingWorkerClient = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTStreamingWorkerClient#1 = function <atom:0>;
  exports.ChatGPTStreamingWorkerClient = ChatGPTStreamingWorkerClient#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
