// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_services/src/conversations/ChatGPTStreamingProtocol
// args: e
function {
  e.StartPolling = 0;
  e[0] = "StartPolling";
  e.StartDirect = 1;
  e[1] = "StartDirect";
  e.Cancel = 2;
  e[2] = "Cancel";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=134B file=chatgpt_services/src/conversations/ChatGPTStreamingProtocol
// args: e
function {
  e.PreparedContent = 0;
  e[0] = "PreparedContent";
  e.ConversationState = 1;
  e[1] = "ConversationState";
  e.DILResult = 2;
  e[2] = "DILResult";
  e.Reasoning = 3;
  e[3] = "Reasoning";
  e.Complete = 4;
  e[4] = "Complete";
  e.Error = 5;
  e[5] = "Error";
  e.EntityReferences = 6;
  e[6] = "EntityReferences";
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=122B file=chatgpt_services/src/conversations/ChatGPTStreamingProtocol
// args: require, module, exports
// locals: e, t
function {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTStreamHostMessageKind = undefined;
  exports.ChatGPTStreamWorkerMessageKind = undefined;
  if ((e)) goto L_62;
  e = {};
  exports.ChatGPTStreamHostMessageKind = {};
  function <atom:0>({});
  if ((t)) goto L_78;
  t = {};
  exports.ChatGPTStreamWorkerMessageKind = {};
  function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/conversations/ChatGPTStreamingProtocol
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
