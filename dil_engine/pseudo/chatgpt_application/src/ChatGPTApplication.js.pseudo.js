// fn o  args=0 vars=0 closure=4 cpool=0 bc=101B file=chatgpt_application/src/ChatGPTApplication
// closure: n, i, a, r
function {
  if (!(!n)) goto L_64;
  if (!(i.isVersionAtLeast(134))) goto L_64;
  n = true;
  true;
  a(r.getChatGPTApplicationInfo());
  return;
}

// fn a  args=1 vars=1 closure=3 cpool=0 bc=124B file=chatgpt_application/src/ChatGPTApplication
// args: i
// closure: c, e, t
function {
  if (!((undefined !== i))) goto L_7b;
  if (!((c(i) !== e.ChatGPTApplicationDistribution.ConsumerProduction))) goto L_7b;
  t.setRendererTracingEnabledByDefault(true);
  return;
}

// fn c  args=1 vars=1 closure=1 cpool=0 bc=698B file=chatgpt_application/src/ChatGPTApplication
// args: i
// closure: e
function {
  if (!((i.applicationIdentifier === "com.openai.chatgpt"))) goto L_71;
  return e.ChatGPTApplicationDistribution.ConsumerProduction;
  if (((i.applicationIdentifier === "com.openai.chatgpt.debug"))) goto L_83;
  if (!((i.applicationIdentifier === "com.openai.chat.tuistpreview"))) goto L_c9;
  return e.ChatGPTApplicationDistribution.Development;
  if (!((i.applicationIdentifier === "com.openai.chatgpt.internal"))) goto L_118;
  return e.ChatGPTApplicationDistribution.Internal;
  if (!((i.applicationIdentifier === "com.openai.chat"))) goto L_1d6;
  if (!((undefined === i.commitHash))) goto L_190;
  return e.ChatGPTApplicationDistribution.ConsumerProduction;
  return e.ChatGPTApplicationDistribution.ConsumerPreproduction;
  if (!((i.applicationIdentifier === "com.openai.chat.enterprise"))) goto L_225;
  return e.ChatGPTApplicationDistribution.Enterprise;
  if (!((i.applicationIdentifier === "com.openai.chat.intune"))) goto L_274;
  return e.ChatGPTApplicationDistribution.Intune;
  return e.ChatGPTApplicationDistribution.Other;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=3 bc=189B file=chatgpt_application/src/ChatGPTApplication
// args: require, module, exports
// locals: i, t, e, r, n, o, a, c
function {
  o = function o;
  a = function a;
  c = function c;
  let n;
  let r;
  let e;
  let t;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.configureRendererTracingForChatGPT = undefined;
  exports.configureRendererTracingForChatGPTApplication = undefined;
  exports.getChatGPTApplicationDistribution = undefined;
  i = require("valdi_core/src/CompilerIntrinsics");
  t = require("valdi_core/src/utils/Trace");
  e = require("./ChatGPTApplicationTypes");
  r = require("./NativeChatGPTApplication");
  n = false;
  exports.configureRendererTracingForChatGPT = o;
  exports.configureRendererTracingForChatGPTApplication = a;
  exports.getChatGPTApplicationDistribution = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_application/src/ChatGPTApplication
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
