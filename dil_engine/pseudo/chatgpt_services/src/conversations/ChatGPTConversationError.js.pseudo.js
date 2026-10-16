// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=70B file=chatgpt_services/src/conversations/ChatGPTConversationError
// args: r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(r);
  this.name = "ChatGPTConversationError";
  this.message = r;
  return this;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=111B file=chatgpt_services/src/conversations/ChatGPTConversationError
// args: require, module, exports
// locals: ChatGPTConversationError, <class_fields_init>, ChatGPTConversationError#1
function {
  let ChatGPTConversationError#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTConversationError = undefined;
  let ChatGPTConversationError;
  let <class_fields_init>;
  class ChatGPTConversationError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:ChatGPTConversationError>;
  ChatGPTConversationError = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTConversationError#1 = function <atom:0>;
  exports.ChatGPTConversationError = ChatGPTConversationError#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/conversations/ChatGPTConversationError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
