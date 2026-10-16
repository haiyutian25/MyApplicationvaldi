// fn e  args=2 vars=3 closure=0 cpool=2 bc=472B file=chatgpt_services/src/conversations/ChatGPTStreamingContracts
// args: r, e
// locals: t
function {
  let t;
  t = r.body;
  if (!(("string" == typeof t.model))) goto L_cf;
  goto L_d0;
  // [栈深重同步 3 -> 2]
  null;
  {};
  null;
  r.headers;
  return {baseUrl: r.baseUrl, body: {conversation_id: e.conversationId, offset: e.eventOffset, stream: true}, headers: {x-conduit-token: e.token}, path: "".concat(r.path.replace(new RegExp("\\/+$"), ""), "/resume")};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_services/src/conversations/ChatGPTStreamingContracts
// args: r
function {
  r.Bridge = 0;
  r[0] = "Bridge";
  r.Decode = 1;
  r[1] = "Decode";
  r.Transport = 2;
  r[2] = "Transport";
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=83B file=chatgpt_services/src/conversations/ChatGPTStreamingContracts
// args: r, e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.kind = r;
  this.name = "ChatGPTBackgroundStreamError";
  this.message = e;
  return this;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=170B file=chatgpt_services/src/conversations/ChatGPTStreamingContracts
// args: require, module, exports
// locals: r, e, ChatGPTBackgroundStreamError, <class_fields_init>, ChatGPTBackgroundStreamError#1
function {
  e = function e;
  let ChatGPTBackgroundStreamError#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTStreamErrorKind = undefined;
  exports.resumeChatGPTDirectStream = undefined;
  exports.ChatGPTBackgroundStreamError = undefined;
  if ((r)) goto L_73;
  r = {};
  exports.ChatGPTStreamErrorKind = {};
  function <atom:0>({});
  exports.resumeChatGPTDirectStream = e;
  let ChatGPTBackgroundStreamError;
  let <class_fields_init>;
  class ChatGPTBackgroundStreamError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:ChatGPTBackgroundStreamError>;
  ChatGPTBackgroundStreamError = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTBackgroundStreamError#1 = function <atom:0>;
  exports.ChatGPTBackgroundStreamError = ChatGPTBackgroundStreamError#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/conversations/ChatGPTStreamingContracts
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
