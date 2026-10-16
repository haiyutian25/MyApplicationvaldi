// fn n  args=1 vars=1 closure=1 cpool=0 bc=95B file=dil_widgets/src/DILWidgetVoiceAction
// args: n
// closure: e
function {
  if (!((n == null))) goto L_a;
  n;
  goto L_2b;
  if (((undefined !== undefined.widget_voice_session_id))) goto L_5e;
  if (!((n == null))) goto L_39;
  n;
  goto L_5a;
  return (undefined.voice_landing === e);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=46B file=dil_widgets/src/DILWidgetVoiceAction
// args: <atom:0>
// locals: e
// closure: s
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  e = <value(_it1)>;
  return (e === s.componentName);
}

// fn i  args=4 vars=8 closure=4 cpool=1 bc=449B file=dil_widgets/src/DILWidgetVoiceAction
// args: e, t, i, c
// locals: _, s, d, v
// closure: n, r, a, o
function {
  let v;
  let d;
  let s;
  let _;
  if ((("start_voice_mode" !== e))) goto L_71;
  if (!((t == null))) goto L_21;
  t;
  goto L_42;
  if (!((undefined !== undefined.action))) goto L_6b;
  if (((t.action !== e))) goto L_71;
  if (!(!t)) goto L_74;
  return;
  if (!(n(t))) goto L_a0;
  return r(t.widget_voice_session_id, c);   // tail call
  _ = t.component_key;
  if (!(("string" != typeof _))) goto L_d0;
  return;
  s = a(i, _);
  if (!(!s)) goto L_de;
  return;
  d = o.find(function <atom:0>);
  if (!((d == null))) goto L_113;
  d;
  goto L_15e;
  v = undefined[1].call(undefined, s.state, t.action_index);
  if (!(v)) goto L_1bf;
  if (!((t.voice_landing === v.voice_landing))) goto L_1bf;
  null;
  v;
  return {component_key: _};
  return undefined;
}

// fn r  args=2 vars=2 closure=1 cpool=0 bc=93B file=dil_widgets/src/DILWidgetVoiceAction
// args: n, o
// closure: e
function {
  if (!(("string" == typeof n))) goto L_5c;
  if (!((0 !== n.length))) goto L_5c;
  if (!(o)) goto L_5c;
  return {voice_landing: e, entrypoint_id: "genui-voice:".concat(o, ":", n), event_source: "genui_widget_voice_session"};
  return;
}

// fn a  args=2 vars=7 closure=1 cpool=0 bc=614B file=dil_widgets/src/DILWidgetVoiceAction
// args: e, n
// locals: o, t, i, r, e#1
// closure: l
function {
  let r;
  let i;
  let t;
  let o;
  if ((!n)) goto L_22;
  if (((n.length > 32768))) goto L_22;
  if (!(!l(e))) goto L_25;
  return;
  o = e.opGenui;
  if (!(l(o))) goto L_75;
  goto L_76;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (!(l(t))) goto L_d6;
  if (!((Object.getOwnPropertyDescriptor(t, n) == null))) goto L_b3;
  Object.getOwnPropertyDescriptor(t, n);
  goto L_d7;
  goto L_d7;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if ((!l(i))) goto L_10c;
  if (!(("resolved" !== i.status))) goto L_10f;
  return;
  if (!(("string" == typeof i.componentName))) goto L_162;
  goto L_163;
  // [栈深重同步 1 -> 0]
  r = undefined;
  if (!((undefined === r))) goto L_209;
  let e#1;
  e#1 = undefined;
  try { // catch -> L_1ab
  e#1 = JSON.parse(n);
  JSON.parse(n);
  <?>;
  goto L_1b5;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_1b4
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if ((!Array.isArray(e#1))) goto L_1fc;
  if (((2 !== e#1.length))) goto L_1fc;
  if (!(("string" != typeof e#1[0]))) goto L_1ff;
  return;
  r = e#1[0];
  e#1[0];
  if (!(l(i.state))) goto L_264;
  return {componentName: r, state: i.state};
  return undefined;
}

// fn c  args=2 vars=3 closure=1 cpool=0 bc=118B file=dil_widgets/src/DILWidgetVoiceAction
// args: e, n
// locals: o
// closure: g
function {
  let o;
  o = g(e, n);
  if (!((o == null))) goto L_18;
  o;
  goto L_39;
  if (!(("voice" === undefined.kind))) goto L_74;
  if (!(("start_voice_mode" === o.action_id))) goto L_74;
  return {event_source: "conversation_followup_suggestions_v1"};
  return undefined;
}

// fn _  args=2 vars=3 closure=3 cpool=0 bc=109B file=dil_widgets/src/DILWidgetVoiceAction
// args: e, n
// locals: o
// closure: g, t, d
function {
  let o;
  o = g(e, n);
  if (!((o == null))) goto L_18;
  o;
  goto L_39;
  if (!(("start_voice_mode" === undefined.onboarding_client_action))) goto L_6c;
  return {event_source: "conversational_onboarding", voice_landing: "conversational_onboarding_voice_v1", event_name: t, statsig_event_name: t, event_data: d(o)};
  return;
}

// fn s  args=2 vars=3 closure=3 cpool=0 bc=191B file=dil_widgets/src/DILWidgetVoiceAction
// args: e, n
// locals: o
// closure: g, t, d
function {
  let o;
  o = g(e, n);
  if (!((o == null))) goto L_18;
  o;
  goto L_39;
  if (!(("start_voice_mode" === undefined.onboarding_client_action))) goto L_be;
  if (!(("wrapped_pills" === e.presentation))) goto L_be;
  if (!(o.onboarding_action_id)) goto L_ad;
  goto L_ae;
  // [栈深重同步 2 -> 1]
  null;
  {};
  return {event_source: "conversational_onboarding", event_data: d(o)};
  return;
}

// fn d  args=1 vars=1 closure=0 cpool=0 bc=197B file=dil_widgets/src/DILWidgetVoiceAction
// args: e
function {
  return {renderer: e.onboarding_renderer, level: e.onboarding_level, use_case: e.onboarding_use_case, action_id: e.onboarding_action_id, source: e.source};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=48B file=dil_widgets/src/DILWidgetVoiceAction
// args: e
// closure: l
function {
  if (!(l(e))) goto L_2f;
  return ("voice" === e.value);
}

// fn v  args=1 vars=1 closure=1 cpool=1 bc=275B file=dil_widgets/src/DILWidgetVoiceAction
// args: e
// closure: l
function {
  if (!((true !== e.submitted))) goto L_112;
  if (!(Array.isArray(e.options))) goto L_112;
  if (!(e.options.some(function <atom:0>))) goto L_112;
  return {event_source: "homework_helper_v2_widget", event_name: "chatgpt_widget_action", event_data: {widget_affordance: "OPTION", widget_action_target: "learning_mode_submit", widget_action_value: "voice", surface_location: "RESPONSE", content_reference_type: "homework_helper_v2"}};
  return;
}

// fn u  args=0 vars=0 closure=0 cpool=0 bc=78B file=dil_widgets/src/DILWidgetVoiceAction
function {
  return {event_source: "offer_voice_conversation_widget", event_name: "chatgpt_widget_action", event_data: {widget_affordance: "OPTION", widget_action_target: "start_voice_mode", widget_action_value: "voice", surface_location: "RESPONSE", content_reference_type: "offer_voice_conversation"}};
}

// fn g  args=2 vars=3 closure=1 cpool=0 bc=191B file=dil_widgets/src/DILWidgetVoiceAction
// args: e, n
// locals: o
// closure: l
function {
  let o;
  if ((("number" != typeof n))) goto L_8a;
  if ((!Number.isInteger(n))) goto L_8a;
  if (!(!Array.isArray(e.actions))) goto L_8d;
  return;
  o = e.actions[n];
  if (!(l(o))) goto L_bd;
  return o;
  return undefined;
}

// fn l  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/DILWidgetVoiceAction
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null != e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=12 bc=224B file=dil_widgets/src/DILWidgetVoiceAction
// args: require, module, exports
// locals: e, n, o, t, i, r, a, c, _, s, d, v, u, g, l
function {
  n = function n;
  i = function i;
  r = function r;
  a = function a;
  c = function c;
  _ = function _;
  s = function s;
  d = function d;
  v = function v;
  u = function u;
  g = function g;
  l = function l;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isWidgetVoiceSessionPayload = undefined;
  exports.getValidatedWidgetVoicePayload = undefined;
  e = "genui_widget_voice_session_v1";
  exports.isWidgetVoiceSessionPayload = n;
  o = [["HomeworkHelperV2", v], ["OfferVoiceConversation", u], ["ConversationFollowUpActionList", c], ["ConversationalOnboardingFollowUpPills", _], ["FollowUpActionBar", s]];
  t = "chatgpt_conversational_onboarding_action_clicked";
  exports.getValidatedWidgetVoicePayload = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILWidgetVoiceAction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
