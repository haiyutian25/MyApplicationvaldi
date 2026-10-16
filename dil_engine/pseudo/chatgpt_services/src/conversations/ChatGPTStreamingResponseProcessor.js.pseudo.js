// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=74B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.listener = t;
  this.content = "";
  this.dirty = false;
  this.finished = false;
  this.hasDILResult = false;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=51B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// closure: this
function {
  this.renderTimer = undefined;
  this.flush(true);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=212B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// args: t
// locals: this
// closure: e
function {
  this = this;
  if ((this.finished)) goto L_d3;
  if (((0 === t.length))) goto L_d3;
  this.content = (this.content + t);
  if ((this.hasDILResult)) goto L_d3;
  this.dirty = true;
  if (!((undefined === this.renderTimer))) goto L_d3;
  this.renderTimer = setTimeout(function <atom:0>, e);
  setTimeout(function <atom:0>, e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=112B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// args: t
// locals: this
function {
  this = this;
  if ((this.finished)) goto L_6f;
  this.listener.onConversationState(t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=164B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// args: t
// locals: this
function {
  this = this;
  if ((this.finished)) goto L_a3;
  this.flush(true);
  this.hasDILResult = true;
  this.listener.onDILResult(t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=121B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// args: t
// locals: this
function {
  this = this;
  if ((this.finished)) goto L_78;
  if (!((this.listener.onEntityReferences == null))) goto L_74;
  this.listener.onEntityReferences;
  this.listener;
  goto L_78;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=121B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// args: t
// locals: this
function {
  this = this;
  if ((this.finished)) goto L_78;
  if (!((this.listener.onReasoning == null))) goto L_74;
  this.listener.onReasoning;
  this.listener;
  goto L_78;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=82B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// closure: this
function {
  this.completionTimer = undefined;
  this.listener.onComplete();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=409B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// locals: this
// closure: e
function {
  this = this;
  if (!(!this.finished)) goto L_198;
  if (!(!this.hasDILResult)) goto L_a1;
  if (!((this.content.length > 0))) goto L_a1;
  this.emitPreparedContent(false);
  if (((this.content.length > 0))) goto L_ed;
  if (!(this.hasDILResult)) goto L_12b;
  this.stop();
  this.completionTimer = setTimeout(function <atom:0>, e);
  return;
  this.stop();
  this.listener.onComplete();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=274B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// args: t, e
// locals: this
function {
  this = this;
  if ((this.finished)) goto L_111;
  if (!(!this.hasDILResult)) goto L_a2;
  if (!((this.content.length > 0))) goto L_a2;
  this.emitPreparedContent(false);
  this.stop();
  this.listener.onError(t, e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// locals: this
function {
  this = this;
  this.stop();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// locals: this
function {
  this = this;
  return (this.content.length > 0);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=156B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// args: t
// locals: this
function {
  this = this;
  if ((!this.dirty)) goto L_9b;
  if ((this.finished)) goto L_9b;
  if ((this.hasDILResult)) goto L_9b;
  this.emitPreparedContent(t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=275B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// args: e
// locals: this
// closure: t
function {
  this = this;
  this.dirty = false;
  this.listener.onPreparedContent({content: this.content, markdownBlocks: t.Markdown.parse(this.content).blocks, streaming: e});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=214B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// locals: this
function {
  this = this;
  this.finished = true;
  this.dirty = false;
  if (!((undefined !== this.completionTimer))) goto L_77;
  clearTimeout(this.completionTimer);
  this.completionTimer = undefined;
  undefined;
  if (!((undefined !== this.renderTimer))) goto L_d5;
  clearTimeout(this.renderTimer);
  this.renderTimer = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=13 bc=221B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// args: require, module, exports
// locals: t, e, ChatGPTStreamingResponseProcessor, <class_fields_init>, ChatGPTStreamingResponseProcessor#1
function {
  let ChatGPTStreamingResponseProcessor#1;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTStreamingResponseProcessor = undefined;
  t = require("markdown/src/Markdown");
  e = 16;
  let ChatGPTStreamingResponseProcessor;
  let <class_fields_init>;
  class ChatGPTStreamingResponseProcessor extends undefined { ... }
  <proto:ChatGPTStreamingResponseProcessor>.append = function <atom:0>;
  <proto:ChatGPTStreamingResponseProcessor>.conversationState = function <atom:0>;
  <proto:ChatGPTStreamingResponseProcessor>.dilResult = function <atom:0>;
  <proto:ChatGPTStreamingResponseProcessor>.entityReferences = function <atom:0>;
  <proto:ChatGPTStreamingResponseProcessor>.reasoning = function <atom:0>;
  <proto:ChatGPTStreamingResponseProcessor>.complete = function <atom:0>;
  <proto:ChatGPTStreamingResponseProcessor>.fail = function <atom:0>;
  <proto:ChatGPTStreamingResponseProcessor>.cancel = function <atom:0>;
  <proto:ChatGPTStreamingResponseProcessor>.hasReceivedText = function <atom:0>;
  <proto:ChatGPTStreamingResponseProcessor>.flush = function <atom:0>;
  <proto:ChatGPTStreamingResponseProcessor>.emitPreparedContent = function <atom:0>;
  <proto:ChatGPTStreamingResponseProcessor>.stop = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ChatGPTStreamingResponseProcessor>;
  ChatGPTStreamingResponseProcessor = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTStreamingResponseProcessor#1 = function <atom:0>;
  exports.ChatGPTStreamingResponseProcessor = ChatGPTStreamingResponseProcessor#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/conversations/ChatGPTStreamingResponseProcessor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
