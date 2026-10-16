// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=310B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// locals: t
// closure: this, o, a
function {
  try { // catch -> L_2e
  this.receive(e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_135
  if (!((this.streams.get(e.requestId) == null))) goto L_a5;
  this.streams.get(e.requestId);
  goto L_132;
  undefined.processor.fail(o.ChatGPTStreamErrorKind.Decode, a(t));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=118B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// locals: this
// closure: o, a, <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.options = e;
  this.streams = new Map();
  e.host.setReceiver(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=580B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// locals: this
// closure: s
function {
  this = this;
  if (!((e.kind === s.ChatGPTStreamHostMessageKind.StartPolling))) goto L_fd;
  this.startPolling(e.requestId, e.configuration, e.input);
  e.kind;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === s.ChatGPTStreamHostMessageKind.StartDirect))) goto L_1b1;
  this.startDirect(e.requestId, e.configuration);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === s.ChatGPTStreamHostMessageKind.Cancel))) goto L_243;
  this.cancel(e.requestId);
  return;
  // [栈深重同步 0 -> 1]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// closure: s
function {
  return s.processor.complete();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// closure: s
function {
  return s.processor.conversationState(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// closure: s
function {
  return s.processor.dilResult(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// closure: s
function {
  return s.processor.entityReferences(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=142B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// closure: s, o
function {
  return s.processor.fail(o.ChatGPTStreamErrorKind.Bridge, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// closure: s
function {
  return s.processor.reasoning(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// closure: s
function {
  return s.processor.append(e);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=7 bc=427B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e, t, r
// locals: s, n, this
// closure: o
function {
  this = this;
  let n;
  let s;
  s = this.createStream(e, false, undefined);
  n = this.options.createPollingResponseClient;
  if (!((undefined !== n))) goto L_10f;
  s.request = n(t).streamResponse(r, {onComplete: function <atom:0>, onConversationState: function <atom:0>, onDILResult: function <atom:0>, onEntityReferences: function <atom:0>, onError: function <atom:0>, onReasoning: function <atom:0>, onTextDelta: function <atom:0>});
  goto L_1aa;
  // [栈深重同步 1 -> 0]
  s.processor.fail(o.ChatGPTStreamErrorKind.Bridge, new Error("This ChatGPT worker does not provide a development polling transport."));
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=90B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  r = this.createStream(e, true, t);
  this.connectDirect(e, r, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// closure: this, r
function {
  return this.receiveEvent(r, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// closure: this, r
function {
  return this.finishTransport(r, e);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=2 cpool=2 bc=417B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: r, o, s
// locals: n, this
// closure: e, t
function {
  this = this;
  let n;
  n = new e.ServerSentEventClient(new t.StreamingHTTPClient(s.baseUrl));
  null;
  s.headers;
  o.request = n.connect(s.path, {onEvent: function <atom:0>, onError: function <atom:0>}, {method: "POST", reconnect: false, headers: {}, body: new TextEncoder().encode(JSON.stringify(s.body))});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=158B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// closure: this, e, s
function {
  this.removeStream(e);
  this.post({kind: s.ChatGPTStreamWorkerMessageKind.Complete, requestId: e});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=125B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: t
// closure: this, s, e
function {
  this.post({kind: s.ChatGPTStreamWorkerMessageKind.ConversationState, requestId: e, state: t});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=125B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: t
// closure: this, s, e
function {
  this.post({kind: s.ChatGPTStreamWorkerMessageKind.DILResult, requestId: e, result: t});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=125B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: t
// closure: this, s, e
function {
  this.post({kind: s.ChatGPTStreamWorkerMessageKind.EntityReferences, requestId: e, references: t});
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=203B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: t, r
// closure: this, e, s
function {
  this.removeStream(e);
  this.post({kind: s.ChatGPTStreamWorkerMessageKind.Error, requestId: e, errorKind: t, message: r.message});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=125B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: t
// closure: this, s, e
function {
  this.post({kind: s.ChatGPTStreamWorkerMessageKind.PreparedContent, requestId: e, content: t});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=125B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: t
// closure: this, s, e
function {
  this.post({kind: s.ChatGPTStreamWorkerMessageKind.Reasoning, requestId: e, reasoning: t});
  return;
}

// fn <atom:0>  args=3 vars=6 closure=3 cpool=7 bc=428B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e, t, o
// locals: i, a, this
// closure: s, n, r
function {
  this = this;
  let a;
  let i;
  if (!(this.streams.has(e))) goto L_90;
  throw new Error("ChatGPT background stream ".concat(String(e), " already exists."));
  i = new n.ChatGPTStreamingResponseProcessor({onComplete: function <atom:0>, onConversationState: function <atom:0>, onDILResult: function <atom:0>, onEntityReferences: function <atom:0>, onError: function <atom:0>, onPreparedContent: function <atom:0>, onReasoning: function <atom:0>});
  if (!(t)) goto L_142;
  goto L_143;
  // [栈深重同步 2 -> 1]
  a = {configuration: o, decoder: undefined, handoffCount: 0, processor: i, request: undefined};
  this.streams.set(e, a);
  return a;
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=1358B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e, t
// locals: r, o, s, this
// closure: o, a
function {
  this = this;
  let r;
  r = this.streams.get(e);
  if (!((undefined !== r))) goto L_54d;
  if (!((undefined !== r.decoder))) goto L_54d;
  try { // catch -> L_4b3
  let o;
  o = r.decoder.consume(t);
  if (!((undefined !== o.continuation))) goto L_14d;
  this.resumeDirect(e, r, o.continuation);
  return undefined;
  if (!((undefined !== o.conversationState))) goto L_1e3;
  r.processor.conversationState(o.conversationState);
  if (!((undefined !== o.delta))) goto L_27a;
  r.processor.append(o.delta);
  if (!((undefined !== o.reasoning))) goto L_311;
  r.processor.reasoning(o.reasoning);
  if (!((undefined !== o.dilResult))) goto L_3a8;
  r.processor.dilResult(o.dilResult);
  if (!((undefined !== o.entityReferences))) goto L_43f;
  r.processor.entityReferences(o.entityReferences);
  if (!(o.complete)) goto L_4b0;
  r.processor.complete();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_54c
  r.processor.fail(o.ChatGPTStreamErrorKind.Decode, a(s));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=357B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e, t, r
// locals: s, n, this
// closure: o
function {
  this = this;
  let n;
  let s;
  s = t.configuration;
  if (!((undefined === s))) goto L_41;
  throw new Error("ChatGPT could not resume a non-direct conversation stream.");
  t.handoffCount = (t.handoffCount ++);
  if (!(((t.handoffCount ++) > 3))) goto L_81;
  throw new Error("ChatGPT exceeded the supported number of stream handoffs.");
  n = t.request;
  t.request = undefined;
  if (!((undefined !== n))) goto L_113;
  if (!(("close" in n))) goto L_ec;
  goto L_113;
  // [栈深重同步 1 -> 0]
  n.cancel();
  this.connectDirect(e, t, o.resumeChatGPTDirectStream(s, r));
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=423B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e, t
// locals: r, this
// closure: o
function {
  this = this;
  let r;
  r = this.streams.get(e);
  if (!((undefined !== r))) goto L_1a6;
  if (!(r.processor.hasReceivedText())) goto L_118;
  if (!(("The SSE connection closed" === t.message))) goto L_118;
  goto L_1a6;
  // [栈深重同步 1 -> 0]
  r.processor.fail(o.ChatGPTStreamErrorKind.Transport, t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=198B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.streams.get(e);
  if (!((undefined !== t))) goto L_c5;
  t.processor.cancel();
  this.removeStream(e);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=298B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// locals: t, r, this
function {
  this = this;
  let r;
  let t;
  t = this.streams.get(e);
  if (!((undefined === t))) goto L_58;
  return;
  this.streams.delete(e);
  r = t.request;
  if (!((undefined !== r))) goto L_129;
  if (!(("close" in r))) goto L_102;
  goto L_129;
  // [栈深重同步 1 -> 0]
  r.cancel();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=107B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
// locals: this
function {
  this = this;
  this.options.host.post(e);
  return;
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=28B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: e
function {
  if (!((e instanceof Error))) goto L_b;
  return e;
  return new Error(String(e));
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=13 bc=276B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// args: require, module, exports
// locals: e, t, r, o, s, n, i, ChatGPTStreamingWorkerRuntime, <class_fields_init>, ChatGPTStreamingWorkerRuntime#1, a
function {
  a = function a;
  let ChatGPTStreamingWorkerRuntime#1;
  let i;
  let n;
  let s;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTStreamingWorkerRuntime = undefined;
  e = require("valdi_http/src/ServerSentEventClient");
  t = require("valdi_http/src/StreamingHTTPClient");
  r = require("./ChatGPTConversationEventDecoder");
  o = require("./ChatGPTStreamingContracts");
  s = require("./ChatGPTStreamingProtocol");
  n = require("./ChatGPTStreamingResponseProcessor");
  i = 3;
  let ChatGPTStreamingWorkerRuntime;
  let <class_fields_init>;
  class ChatGPTStreamingWorkerRuntime extends undefined { ... }
  <proto:ChatGPTStreamingWorkerRuntime>.receive = function <atom:0>;
  <proto:ChatGPTStreamingWorkerRuntime>.startPolling = function <atom:0>;
  <proto:ChatGPTStreamingWorkerRuntime>.startDirect = function <atom:0>;
  <proto:ChatGPTStreamingWorkerRuntime>.connectDirect = function <atom:0>;
  <proto:ChatGPTStreamingWorkerRuntime>.createStream = function <atom:0>;
  <proto:ChatGPTStreamingWorkerRuntime>.receiveEvent = function <atom:0>;
  <proto:ChatGPTStreamingWorkerRuntime>.resumeDirect = function <atom:0>;
  <proto:ChatGPTStreamingWorkerRuntime>.finishTransport = function <atom:0>;
  <proto:ChatGPTStreamingWorkerRuntime>.cancel = function <atom:0>;
  <proto:ChatGPTStreamingWorkerRuntime>.removeStream = function <atom:0>;
  <proto:ChatGPTStreamingWorkerRuntime>.post = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ChatGPTStreamingWorkerRuntime>;
  ChatGPTStreamingWorkerRuntime = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTStreamingWorkerRuntime#1 = function <atom:0>;
  exports.ChatGPTStreamingWorkerRuntime = ChatGPTStreamingWorkerRuntime#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/conversations/ChatGPTStreamingWorkerRuntime
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
