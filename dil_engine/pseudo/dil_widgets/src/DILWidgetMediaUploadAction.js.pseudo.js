// fn e  args=2 vars=7 closure=1 cpool=0 bc=811B file=dil_widgets/src/DILWidgetMediaUploadAction
// args: e, o
// locals: a, i, n, d, s
// closure: t
function {
  let s;
  let d;
  let n;
  let i;
  let a;
  if ((("request_media_upload" !== e.type))) goto L_92;
  if ((("AskUserFiles" !== e.componentName))) goto L_92;
  if ((!e.nativeWidgetResolutionId)) goto L_92;
  if (!(!t(o))) goto L_95;
  return;
  a = o.opGenui;
  if (!(t(a))) goto L_e5;
  goto L_e6;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!(t(i))) goto L_167;
  if (!((Object.getOwnPropertyDescriptor(i, e.nativeWidgetResolutionId) == null))) goto L_144;
  Object.getOwnPropertyDescriptor(i, e.nativeWidgetResolutionId);
  goto L_168;
  goto L_168;
  // [栈深重同步 1 -> 0]
  n = undefined;
  if ((!t(n))) goto L_216;
  if ((("resolved" !== n.status))) goto L_216;
  if (((n.componentName !== e.componentName))) goto L_216;
  if (!(!t(n.state))) goto L_219;
  return;
  d = n.state;
  s = d.kind;
  if (((true !== d.show_upload_cta))) goto L_2ae;
  if (!(("photo" !== s))) goto L_2b2;
  if (!(("video" !== s))) goto L_2b2;
  if (!(("media" !== s))) goto L_2b2;
  return undefined;
  return {component_key: e.nativeWidgetResolutionId, event_name: "ChatgptWebPhotoUploadActionClicked", statsig_event_name: "chatgpt_web_photo_upload_action_clicked", event_data: {requested_kind: s, impression_event: "chatgpt_web_photo_upload_action_enabled_impression", elicitation_metadata: {elicitation_type: "file_upload", stage: "interacted", action: "accept"}}};
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/DILWidgetMediaUploadAction
// args: e
function {
  if (!((null !== e))) goto L_3e;
  if (!(("object" == typeof e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=85B file=dil_widgets/src/DILWidgetMediaUploadAction
// args: require, module, exports
// locals: e, t
function {
  e = function e;
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getValidatedWidgetMediaUploadPayload = undefined;
  exports.getValidatedWidgetMediaUploadPayload = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILWidgetMediaUploadAction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
