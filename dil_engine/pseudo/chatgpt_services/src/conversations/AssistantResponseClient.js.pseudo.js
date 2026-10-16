// fn a  args=1 vars=1 closure=1 cpool=0 bc=132B file=chatgpt_services/src/conversations/AssistantResponseClient
// args: s
// closure: o
function {
  if (!((s === o.Terra))) goto L_2d;
  return "gpt-5.6-terra";
  if (!((s === o.Standard))) goto L_59;
  return "gpt-5.6";
  (s === o.Sol);
  return "gpt-5.6-sol";
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_services/src/conversations/AssistantResponseClient
// args: s
function {
  s.Assistant = 0;
  s[0] = "Assistant";
  s.User = 1;
  s[1] = "User";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_services/src/conversations/AssistantResponseClient
// args: s
function {
  s.Chat = 0;
  s[0] = "Chat";
  s.Work = 1;
  s[1] = "Work";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_services/src/conversations/AssistantResponseClient
// args: s
function {
  s.Fast = 0;
  s[0] = "Fast";
  s.Balanced = 1;
  s[1] = "Balanced";
  s.Deep = 2;
  s[2] = "Deep";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_services/src/conversations/AssistantResponseClient
// args: s
function {
  s.Sol = 0;
  s[0] = "Sol";
  s.Terra = 1;
  s[1] = "Terra";
  s.Standard = 2;
  s[2] = "Standard";
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=5 bc=216B file=chatgpt_services/src/conversations/AssistantResponseClient
// args: require, module, exports
// locals: s, e, t, o, a
function {
  a = function a;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AssistantMessageRole = undefined;
  exports.AssistantResponseMode = undefined;
  exports.AssistantResponseEffort = undefined;
  exports.AssistantResponseModel = undefined;
  exports.assistantResponseModelSlug = undefined;
  if ((s)) goto L_87;
  s = {};
  exports.AssistantMessageRole = {};
  function <atom:0>({});
  if ((e)) goto L_9d;
  e = {};
  exports.AssistantResponseMode = {};
  function <atom:0>({});
  if ((t)) goto L_b3;
  t = {};
  exports.AssistantResponseEffort = {};
  function <atom:0>({});
  if ((o)) goto L_c9;
  o = {};
  exports.AssistantResponseModel = {};
  function <atom:0>({});
  exports.assistantResponseModelSlug = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/conversations/AssistantResponseClient
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
