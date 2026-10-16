// fn e  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/DILClientActionCapabilities
// args: e
function {
  if ((("personality_quiz_shared_progress" === e))) goto L_3e;
  if ((("personality_quiz_complete_shared" === e))) goto L_3e;
  if ((("personality_quiz_share" === e))) goto L_3e;
  if ((("share" === e))) goto L_3e;
  if ((("copy" === e))) goto L_3e;
  return ("prefill_composer" === e);
}

// fn _  args=1 vars=1 closure=0 cpool=0 bc=41B file=dil_widgets/src/DILClientActionCapabilities
// args: e
function {
  if ((("copy" === e))) goto L_28;
  if ((("copy_node" === e))) goto L_28;
  if ((("issue_new_turn" === e))) goto L_28;
  return ("open_entity_detail" === e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=83B file=dil_widgets/src/DILClientActionCapabilities
// args: e
function {
  if (!(("copy_node" === e.actionType))) goto L_30;
  return "copy";
  return e.actionType;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=240B file=dil_widgets/src/DILClientActionCapabilities
// args: _
// closure: e, exports
function {
  if ((e.includes(_.requiredHostActionType))) goto L_ef;
  if (!(("start_voice_mode" === _.actionType))) goto L_ef;
  if (!(e.includes("start_voice_mode"))) goto L_ef;
  return e.includes(exports.DIL_WIDGET_VOICE_SESSION_CAPABILITY);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=dil_widgets/src/DILClientActionCapabilities
// args: e
function {
  return e.actionType;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=dil_widgets/src/DILClientActionCapabilities
// args: _
// closure: e
function {
  return (_.actionType === e);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=464B file=dil_widgets/src/DILClientActionCapabilities
// args: e
// closure: exports, I
function {
  if (!((e !== exports.DIL_RESOLVED_WIDGET_VOICE_CAPABILITY))) goto L_1cf;
  if (!((e !== exports.DIL_WIDGET_VOICE_SESSION_CAPABILITY))) goto L_1cf;
  if (!((e !== exports.DIL_RESOLVED_WIDGET_MEDIA_UPLOAD_CAPABILITY))) goto L_1cf;
  if (!((e !== exports.DIL_ENTITY_PINNED_IMAGE_CAPABILITY))) goto L_1cf;
  if (!((e !== exports.DIL_SHARED_CONVERSATION_ACTIONS_CAPABILITY))) goto L_1cf;
  if (!((e !== exports.DIL_SHARED_PERSONALITY_QUIZ_ACTIONS_CAPABILITY))) goto L_1cf;
  if (!((e !== exports.DIL_READ_ONLY_ENTITY_REFERENCE_CAPABILITY))) goto L_1cf;
  if (!((e !== exports.DIL_ENTITY_REFERENCE_READY_CAPABILITY))) goto L_1cf;
  if (!((e !== exports.DIL_LITERAL_SANDBOX_PATH_CAPABILITY))) goto L_1cf;
  if (!((e !== exports.DIL_READ_ONLY_SANDBOX_DOWNLOAD_CAPABILITY))) goto L_1cf;
  return !I.some(function <atom:0>);
}

// fn r  args=2 vars=5 closure=3 cpool=3 bc=477B file=dil_widgets/src/DILClientActionCapabilities
// args: e, _
// locals: _#1, o, t
// closure: exports, I, t
function {
  let o;
  if (!(_)) goto L_fe;
  let _#1;
  if (!((undefined === e))) goto L_15;
  return [];
  _#1 = t.filter(function <atom:0>).map(function <atom:0>);
  if (!(e.includes(exports.DIL_ENTITY_REFERENCE_CAPABILITY))) goto L_f9;
  _#1.push(exports.DIL_ENTITY_REFERENCE_CAPABILITY);
  return _#1;
  if (!((undefined === e))) goto L_104;
  return;
  o = e.filter(function <atom:0>);
  let t;
  for (const t of I) {
    if (!(e.includes(t.requiredHostActionType))) goto L_1cf;
    o.push(t.actionType);
  }
  return o;
}

// fn A  args=1 vars=1 closure=1 cpool=0 bc=48B file=dil_widgets/src/DILClientActionCapabilities
// args: e
// closure: o
function {
  if (!((undefined !== e))) goto L_2f;
  return o.has(e);
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=5 bc=826B file=dil_widgets/src/DILClientActionCapabilities
// args: require, module, exports
// locals: e, _, t, o, I, r, A
function {
  e = function e;
  _ = function _;
  r = function r;
  A = function A;
  let I;
  let o;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_RESOLVED_WIDGET_VOICE_CAPABILITY = undefined;
  exports.DIL_WIDGET_VOICE_SESSION_CAPABILITY = undefined;
  exports.DIL_RESOLVED_WIDGET_MEDIA_UPLOAD_CAPABILITY = undefined;
  exports.DIL_ENTITY_PINNED_IMAGE_CAPABILITY = undefined;
  exports.DIL_ENTITY_REFERENCE_CAPABILITY = undefined;
  exports.DIL_READ_ONLY_ENTITY_REFERENCE_CAPABILITY = undefined;
  exports.DIL_ENTITY_REFERENCE_READY_CAPABILITY = undefined;
  exports.DIL_LITERAL_SANDBOX_PATH_CAPABILITY = undefined;
  exports.DIL_READ_ONLY_SANDBOX_DOWNLOAD_CAPABILITY = undefined;
  exports.DIL_SHARED_CONVERSATION_ACTIONS_CAPABILITY = undefined;
  exports.DIL_SHARED_PERSONALITY_QUIZ_ACTIONS_CAPABILITY = undefined;
  exports.isDILSharedPersonalityQuizAction = undefined;
  exports.isDILSharedConversationAction = undefined;
  exports.getEffectiveDILSupportedClientActions = undefined;
  exports.isAllowedModelWrittenDILHostActionType = undefined;
  exports.DIL_RESOLVED_WIDGET_VOICE_CAPABILITY = "start_voice_mode_resolved_widget";
  exports.DIL_WIDGET_VOICE_SESSION_CAPABILITY = "start_voice_mode_widget_session";
  exports.DIL_RESOLVED_WIDGET_MEDIA_UPLOAD_CAPABILITY = "request_media_upload_resolved_widget";
  exports.DIL_ENTITY_PINNED_IMAGE_CAPABILITY = "open_entity_detail_pinned_image";
  exports.DIL_ENTITY_REFERENCE_CAPABILITY = "open_entity_detail_reference";
  exports.DIL_READ_ONLY_ENTITY_REFERENCE_CAPABILITY = "open_entity_detail_reference_read_only";
  exports.DIL_ENTITY_REFERENCE_READY_CAPABILITY = "open_entity_detail_reference_ready";
  exports.DIL_LITERAL_SANDBOX_PATH_CAPABILITY = "open_url_sandbox_literal_path";
  exports.DIL_READ_ONLY_SANDBOX_DOWNLOAD_CAPABILITY = "open_url_sandbox_read_only";
  exports.DIL_SHARED_CONVERSATION_ACTIONS_CAPABILITY = "shared_conversation_actions";
  exports.DIL_SHARED_PERSONALITY_QUIZ_ACTIONS_CAPABILITY = "personality_quiz_shared_actions";
  exports.isDILSharedPersonalityQuizAction = e;
  exports.isDILSharedConversationAction = _;
  t = [{actionType: "start_voice_mode", requiredHostActionType: exports.DIL_RESOLVED_WIDGET_VOICE_CAPABILITY}, {actionType: "request_media_upload", requiredHostActionType: exports.DIL_RESOLVED_WIDGET_MEDIA_UPLOAD_CAPABILITY}, {actionType: "log_event", requiredHostActionType: "log_event"}, {actionType: "copy", requiredHostActionType: "copy"}, {actionType: "copy_node", requiredHostActionType: "copy"}, {actionType: "issue_new_turn", requiredHostActionType: "issue_new_turn"}, {actionType: "request_user_input", requiredHostActionType: "request_user_input"}, {actionType: "open_url", requiredHostActionType: "open_url"}, {actionType: "open_entity_detail", requiredHostActionType: "open_entity_detail"}, {actionType: "open_image_lightbox", requiredHostActionType: "open_image_lightbox"}, {actionType: "open_file_citation", requiredHostActionType: "open_file_citation"}];
  o = new Set(t.map(function <atom:0>));
  I = [{actionType: "copy_node", requiredHostActionType: "copy"}];
  exports.getEffectiveDILSupportedClientActions = r;
  exports.isAllowedModelWrittenDILHostActionType = A;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILClientActionCapabilities
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
