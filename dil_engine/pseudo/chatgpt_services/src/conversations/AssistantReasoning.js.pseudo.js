// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=58B file=chatgpt_services/src/conversations/AssistantReasoning
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.messages = new Map();
  this.completed = false;
  this.sectionId = "";
  return;
}

// fn <atom:0>  args=1 vars=8 closure=3 cpool=0 bc=901B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t
// locals: n, s, o, r, a, c, this
// closure: d, i, e
function {
  this = this;
  let c;
  let a;
  let r;
  let o;
  let s;
  let n;
  n = d(t.author);
  s = d(t.content);
  if (!((d(t.metadata) == null))) goto L_89;
  d(t.metadata);
  o = {};
  r = t.id;
  if (((undefined === n))) goto L_d3;
  if (((undefined === s))) goto L_d3;
  if ((("string" != typeof r))) goto L_d3;
  if (!((0 === r.length))) goto L_d6;
  return;
  a = n.role;
  if ((("string" != typeof a))) goto L_13a;
  if (!(!i(s, o, a, t.recipient))) goto L_13d;
  return;
  c = this.messages.has(r);
  if (!(this.completed)) goto L_1d2;
  if (!(!c)) goto L_1d2;
  if (!(e(s, o))) goto L_1d2;
  this.completed = false;
  false;
  if (!((0 === this.messages.size))) goto L_22c;
  this.sectionId = r;
  r;
  if (!(("string" == typeof t.recipient))) goto L_2ea;
  goto L_2eb;
  // [栈深重同步 5 -> 4]
  null;
  {};
  this.messages.set(r, {authorRole: a, content: s, id: r, metadata: o});
  if (!(("reasoning_recap" !== s.content_type))) goto L_34c;
  if ((("reasoning_ended" !== o.reasoning_status))) goto L_35e;
  this.completed = true;
  true;
  return this.publish();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=160B file=chatgpt_services/src/conversations/AssistantReasoning
// locals: this
function {
  this = this;
  if (!((0 !== this.messages.size))) goto L_9f;
  if (!(!this.completed)) goto L_9f;
  this.completed = true;
  return this.publish();   // tail call
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=113B file=chatgpt_services/src/conversations/AssistantReasoning
// locals: this
function {
  this = this;
  if (!((0 === this.messages.size))) goto L_4b;
  return undefined;
  return this.build();
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=149B file=chatgpt_services/src/conversations/AssistantReasoning
// locals: t, n, this
function {
  this = this;
  let n;
  let t;
  t = this.build();
  n = JSON.stringify(t);
  if (!((n !== this.previousSnapshot))) goto L_94;
  this.previousSnapshot = n;
  return t;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=0 bc=512B file=chatgpt_services/src/conversations/AssistantReasoning
// args: e, s
// locals: o
// closure: n, l, t, p, i
function {
  let o;
  if (!((undefined === l.tool_summary_type))) goto L_cb;
  goto L_110;
  // [栈深重同步 2 -> 1]
  if (!((0 === p.length))) goto L_176;
  if (!((undefined === l.tool_summary_type))) goto L_176;
  goto L_179;
  // [栈深重同步 2 -> 1]
  if (!((undefined === e.detail))) goto L_1a7;
  goto L_1cf;
  // [栈深重同步 2 -> 1]
  null;
  {detail: e.detail};
  o = {id: "".concat(n.id, ".", String(s)), kind: t.ReasoningItemKind.Activity, text: e.text, toolIcons: p};
  i.push(o);
  return;
}

// fn <atom:0>  args=1 vars=10 closure=11 cpool=1 bc=1989B file=chatgpt_services/src/conversations/AssistantReasoning
// args: n
// locals: g, l, p, f, s, s#1, r, s#2, o
// closure: t, i, c, s, h, d, u, e, r, o, a
function {
  let f;
  let p;
  let l;
  let g;
  if (((undefined === undefined))) goto L_5b;
  g = <to_object>(undefined).content;
  l = <to_object>(undefined).metadata;
  <to_object>(undefined);
  goto L_5f;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_11;
  // [栈深重同步 1 -> 0]
  p = c(l.tool_icons);
  f = s(l);
  if (!(("number" == typeof l.finished_duration_sec))) goto L_e3;
  h = l.finished_duration_sec;
  l.finished_duration_sec;
  if (!(("reasoning_recap" === g.content_type))) goto L_171;
  if (!((u(g.content) == null))) goto L_165;
  u(g.content);
  d = u(g.text);
  u(g.text);
  e = undefined;
  undefined;
  return;
  if (!((true === l.is_thinking_preamble_message))) goto L_311;
  let s;
  s = r(g);
  if (!((undefined !== s))) goto L_25e;
  i.push({id: n.id, kind: t.ReasoningItemKind.Preamble, text: s, toolIcons: []});
  e = {id: "".concat(n.id, ".thinking"), kind: t.ReasoningActiveKind.Placeholder, texts: [], toolIcons: []};
  {id: "".concat(n.id, ".thinking"), kind: t.ReasoningActiveKind.Placeholder, texts: [], toolIcons: []};
  return;
  if (!(("thoughts" === g.content_type))) goto L_4a6;
  let r;
  let s#1;
  s#1 = o(g.thoughts);
  s#1.forEach(function <atom:0>);
  r = s#1[(s#1.length - 1)];
  if (!((undefined !== r))) goto L_4a4;
  if (!((0 === p.length))) goto L_498;
  goto L_49b;
  // [栈深重同步 2 -> 1]
  e = {id: "".concat(n.id, ".", String((s#1.length - 1))), kind: t.ReasoningActiveKind.Thought, texts: [r.text], toolIcons: p};
  {id: "".concat(n.id, ".", String((s#1.length - 1))), kind: t.ReasoningActiveKind.Thought, texts: [r.text], toolIcons: p};
  return;
  if (!((f.length > 0))) goto L_70b;
  let o;
  let s#2;
  s#2 = {id: n.id, kind: t.ReasoningItemKind.Activity, text: f[(f.length - 1)], toolIcons: a(p, n.recipient)};
  o = i[(i.length - 1)];
  if (!((o == null))) goto L_57f;
  o;
  goto L_5a0;
  if (!((undefined.kind === t.ReasoningItemKind.Activity))) goto L_633;
  if (((o.text === s#2.text))) goto L_661;
  i.push(s#2);
  e = {id: n.id, kind: t.ReasoningActiveKind.Activity, texts: f, toolIcons: s#2.toolIcons};
  {id: n.id, kind: t.ReasoningActiveKind.Activity, texts: f, toolIcons: s#2.toolIcons};
  return;
  if (!((true === l.is_finalizing))) goto L_7c4;
  e = {id: n.id, kind: t.ReasoningActiveKind.Activity, texts: ["Finalizing answer"], toolIcons: []};
  {id: n.id, kind: t.ReasoningActiveKind.Activity, texts: ["Finalizing answer"], toolIcons: []};
  return;
}

// fn <atom:0>  args=0 vars=6 closure=8 cpool=1 bc=458B file=chatgpt_services/src/conversations/AssistantReasoning
// locals: i, e, d, h, g, this
// closure: t, c, s, u, r, o, a, n
function {
  this = this;
  let g;
  let h;
  let d;
  let e;
  let i;
  i = [];
  e = undefined;
  d = undefined;
  h = undefined;
  this.messages.forEach(function <atom:0>);
  if (!(this.completed)) goto L_d2;
  goto L_117;
  // [栈深重同步 1 -> 0]
  g = t.ReasoningStatus.InProgress;
  if (!((g === t.ReasoningStatus.Complete))) goto L_17f;
  if (!((d == null))) goto L_175;
  d;
  d = n(h);
  n(h);
  e = undefined;
  undefined;
  return {id: this.sectionId, activeItem: e, items: i, status: g, summaryTitle: d};
}

// fn n  args=1 vars=3 closure=0 cpool=0 bc=336B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t
// locals: n, i
function {
  let i;
  let n;
  if (((undefined === t))) goto L_3f;
  if ((!Number.isFinite(t))) goto L_3f;
  if (!((t < 1))) goto L_47;
  return "Thought for a moment";
  n = Math.round(t);
  if (!((n <= 1))) goto L_7f;
  return "Thought for a second";
  if (!((2 === n))) goto L_8c;
  return "Thought for a couple of seconds";
  if (!((3 === n))) goto L_99;
  return "Thought for a few seconds";
  if (!((n < 60))) goto L_d8;
  return "Thought for ".concat(String(n), "s");   // tail call
  i = Math.floor((n / 60));
  return "Thought for ".concat(String(i), "m ", String((n % 60)), "s");   // tail call
}

// fn i  args=4 vars=4 closure=1 cpool=0 bc=318B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t, n, i, e
// closure: s
function {
  if ((("thoughts" === t.content_type))) goto L_13d;
  if ((("reasoning_recap" === t.content_type))) goto L_13d;
  if (((true === n.is_thinking_preamble_message))) goto L_13d;
  if (((true === n.is_finalizing))) goto L_13d;
  if (((undefined !== n.reasoning_status))) goto L_13d;
  if (((s(n).length > 0))) goto L_13d;
  if (!(("v5" === n.cot_version))) goto L_13d;
  if ((("tool" === i))) goto L_13d;
  if (!(("string" == typeof e))) goto L_13d;
  if (!(("all" !== e))) goto L_13d;
  return ("assistant" !== e);
}

// fn e  args=2 vars=2 closure=1 cpool=0 bc=274B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t, n
// closure: s
function {
  if (!(("reasoning_recap" !== t.content_type))) goto L_111;
  if (!(("reasoning_ended" !== n.reasoning_status))) goto L_111;
  if ((("thoughts" === t.content_type))) goto L_111;
  if (((true === n.is_thinking_preamble_message))) goto L_111;
  if (((true === n.is_finalizing))) goto L_111;
  if ((("is_reasoning" === n.reasoning_status))) goto L_111;
  return (s(n).length > 0);
}

// fn s  args=1 vars=3 closure=2 cpool=0 bc=110B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t
// locals: n, i
// closure: c, u
function {
  let i;
  let n;
  n = c(t.reasoning_titles);
  if (!((n.length > 0))) goto L_37;
  return n;
  i = u(t.reasoning_title);
  if (!((undefined === i))) goto L_67;
  return [];
  return [i];
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=204B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t, n
// locals: i, e, s, o
// closure: d, u
function {
  let o;
  let s;
  let e;
  let i;
  i = d(n);
  if (!((undefined === i))) goto L_19;
  return t;
  e = u(i.summary);
  s = u(i.content);
  if (!((e == null))) goto L_72;
  e;
  o = s;
  if (!((undefined !== o))) goto L_c9;
  if (!((undefined !== e))) goto L_c0;
  if (!((undefined !== s))) goto L_c0;
  goto L_c1;
  // [栈深重同步 4 -> 3]
  null;
  {};
  t.push({text: o});
  return t;
}

// fn o  args=1 vars=1 closure=2 cpool=1 bc=91B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t
// closure: d, u
function {
  if (!(Array.isArray(t))) goto L_57;
  return t.reduce(function <atom:0>, []);
  return [];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t
function {
  return ("string" == typeof t);
}

// fn r  args=1 vars=2 closure=1 cpool=1 bc=287B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t
// locals: n
// closure: u
function {
  let n;
  if (!((u(t.text) == null))) goto L_50;
  u(t.text);
  n = u(t.content);
  if (!((undefined !== n))) goto L_5c;
  return n;
  if (!(Array.isArray(t.parts))) goto L_11d;
  return u(t.parts.filter(function <atom:0>).join("
"));
  return undefined;
}

// fn a  args=2 vars=2 closure=0 cpool=0 bc=275B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t, n
function {
  if (((t.length > 0))) goto L_b;
  if (!((undefined === n))) goto L_f;
  return t;
  if ((n.startsWith("web"))) goto L_67;
  if (!(n.startsWith("browser"))) goto L_72;
  return ["globe"];
  if ((n.startsWith("python"))) goto L_ca;
  if (!(n.startsWith("container"))) goto L_d5;
  return ["code"];
  if (!(n.startsWith("file_search"))) goto L_10a;
  return ["library"];
  return ["api_tool"];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=53B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t
function {
  if (!(("string" == typeof t))) goto L_34;
  return (t.trim().length > 0);
}

// fn c  args=1 vars=1 closure=0 cpool=1 bc=88B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t
function {
  if (!(Array.isArray(t))) goto L_54;
  return t.filter(function <atom:0>);
  return [];
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=92B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t
function {
  if (!(("string" == typeof t))) goto L_5a;
  if (!((t.trim().length > 0))) goto L_5a;
  return t.trim();
  return undefined;
}

// fn d  args=1 vars=1 closure=0 cpool=0 bc=67B file=chatgpt_services/src/conversations/AssistantReasoning
// args: t
function {
  if ((("object" != typeof t))) goto L_3d;
  if (((null === t))) goto L_3d;
  if (!(Array.isArray(t))) goto L_41;
  return undefined;
  return t;
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=16 bc=221B file=chatgpt_services/src/conversations/AssistantReasoning
// args: require, module, exports
// locals: t, AssistantReasoningAccumulator, <class_fields_init>, AssistantReasoningAccumulator#1, n, i, e, s, o, r, a, c, u, d
function {
  n = function n;
  i = function i;
  e = function e;
  s = function s;
  o = function o;
  r = function r;
  a = function a;
  c = function c;
  u = function u;
  d = function d;
  let AssistantReasoningAccumulator#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AssistantReasoningAccumulator = undefined;
  exports.formatReasoningDuration = undefined;
  t = require("oai_reasoning_api/src/ReasoningTypes");
  let AssistantReasoningAccumulator;
  let <class_fields_init>;
  class AssistantReasoningAccumulator extends undefined { ... }
  <proto:AssistantReasoningAccumulator>.consume = function <atom:0>;
  <proto:AssistantReasoningAccumulator>.complete = function <atom:0>;
  <proto:AssistantReasoningAccumulator>.snapshot = function <atom:0>;
  <proto:AssistantReasoningAccumulator>.publish = function <atom:0>;
  <proto:AssistantReasoningAccumulator>.build = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AssistantReasoningAccumulator>;
  AssistantReasoningAccumulator = function <atom:0>;
  // close_loc <class_fields_init>
  AssistantReasoningAccumulator#1 = function <atom:0>;
  exports.AssistantReasoningAccumulator = AssistantReasoningAccumulator#1;
  exports.formatReasoningDuration = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/conversations/AssistantReasoning
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
