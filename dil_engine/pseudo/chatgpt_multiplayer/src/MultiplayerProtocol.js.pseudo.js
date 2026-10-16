// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=226B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: e
function {
  e.DOCUMENT_OPEN = "document_open";
  e.DOCUMENT_INITIALIZE = "document_initialize";
  e.DOCUMENT_SYNC = "document_sync";
  e.DOCUMENT_UPDATE = "document_update";
  e.DOCUMENT_UPDATE_ACK = "document_update_ack";
  e.DOCUMENT_CHECKPOINT = "document_checkpoint";
  e.DOCUMENT_CHECKPOINT_ACK = "document_checkpoint_ack";
  e.DOCUMENT_CHECKPOINT_ERROR = "document_checkpoint_error";
  e.DOCUMENT_ERROR = "document_error";
  e.DOCUMENT_UNAVAILABLE = "document_unavailable";
  e.AWARENESS = "awareness";
  e.AWARENESS_REMOVE = "awareness_remove";
  e.PRESENCE = "presence";
  e.ACTIVITY = "activity";
  e.REAUTHORIZE = "reauthorize";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: e
function {
  e.VIEW = "view";
  e.EDIT = "edit";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: e
function {
  e.UNAVAILABLE = "unavailable";
  e.CHECKPOINT_INCOMPLETE = "checkpoint_incomplete";
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=57B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: e
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
  this.name = "MultiplayerProtocolError";
  return this;
}

// fn a  args=1 vars=4 closure=11 cpool=0 bc=1734B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: t
// locals: r, a, e
// closure: MultiplayerProtocolError, y, e, n, d, _, i, s, l, p, u
function {
  let r;
  r = undefined;
  try { // catch -> L_3c
  r = JSON.parse(t);
  JSON.parse(t);
  <?>;
  goto L_af;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_ae
  let e;
  if (!((a instanceof Error))) goto L_72;
  goto L_79;
  // [栈深重同步 1 -> 0]
  e = String(a);
  throw new MultiplayerProtocolError("Invalid multiplayer message JSON: ".concat(e));
  // [栈深重同步 0 -> 1]
  throw <?>;
  if ((!y(r))) goto L_e4;
  if (!(("string" != typeof r.type))) goto L_f3;
  throw new MultiplayerProtocolError("Invalid multiplayer message envelope: expected an object with a string type.");
  if (!((r.type === e.DOCUMENT_SYNC))) goto L_144;
  return n(r);   // tail call
  if (!((r.type === e.DOCUMENT_UPDATE))) goto L_230;
  if (!((undefined === r.client_id))) goto L_1f7;
  goto L_22a;
  // [栈深重同步 3 -> 2]
  null;
  {client_id: _(r.client_id, "document update")};
  return {type: e.DOCUMENT_UPDATE, update: d(r.update, "document update", "update")};
  if (!((r.type === e.DOCUMENT_UPDATE_ACK))) goto L_2b6;
  return {type: e.DOCUMENT_UPDATE_ACK, snapshot: d(r.snapshot, "document acknowledgment", "snapshot")};
  if (!((r.type === e.DOCUMENT_CHECKPOINT_ACK))) goto L_36c;
  return {type: e.DOCUMENT_CHECKPOINT_ACK, request_id: i(r.request_id), snapshot: d(r.snapshot, "checkpoint", "snapshot")};
  if (!((r.type === e.DOCUMENT_CHECKPOINT_ERROR))) goto L_418;
  return {type: e.DOCUMENT_CHECKPOINT_ERROR, request_id: i(r.request_id), code: s(r.code)};
  if (!((r.type === e.DOCUMENT_ERROR))) goto L_447;
  return l(r);   // tail call
  if (!((r.type === e.DOCUMENT_UNAVAILABLE))) goto L_4cd;
  return {type: e.DOCUMENT_UNAVAILABLE, message: d(r.message, "unavailable document", "message")};
  if (!((r.type === e.AWARENESS))) goto L_4fc;
  return p(r);   // tail call
  if (!((r.type === e.AWARENESS_REMOVE))) goto L_57d;
  return {type: e.AWARENESS_REMOVE, client_id: _(r.client_id, "awareness removal")};
  if (!((r.type === e.PRESENCE))) goto L_5ac;
  return u(r);   // tail call
  if (!((r.type === e.REAUTHORIZE))) goto L_5d3;
  r.type;
  return;
  // [栈深重同步 0 -> 1]
  if (((<?> === e.DOCUMENT_OPEN))) goto L_66b;
  if (((<?> === e.DOCUMENT_INITIALIZE))) goto L_66b;
  if (((<?> === e.DOCUMENT_CHECKPOINT))) goto L_66b;
  if (!((<?> === e.ACTIVITY))) goto L_6c5;
  throw new MultiplayerProtocolError("Unexpected multiplayer server message type "".concat(r.type, ""."));
  return;
}

// fn o  args=1 vars=3 closure=5 cpool=0 bc=994B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: t
// locals: r, e
// closure: e, d, i, _, MultiplayerProtocolError
function {
  let r;
  r = undefined;
  if (!((t.type === e.DOCUMENT_OPEN))) goto L_b0;
  r = {type: e.DOCUMENT_OPEN, state_vector: d(t.state_vector, "document open", "state_vector")};
  {type: e.DOCUMENT_OPEN, state_vector: d(t.state_vector, "document open", "state_vector")};
  goto L_3b5;
  if (!((t.type === e.DOCUMENT_INITIALIZE))) goto L_139;
  r = {type: e.DOCUMENT_INITIALIZE, update: d(t.update, "document initialization", "update")};
  {type: e.DOCUMENT_INITIALIZE, update: d(t.update, "document initialization", "update")};
  goto L_3b5;
  if (!((t.type === e.DOCUMENT_UPDATE))) goto L_1c2;
  r = {type: e.DOCUMENT_UPDATE, update: d(t.update, "document update", "update")};
  {type: e.DOCUMENT_UPDATE, update: d(t.update, "document update", "update")};
  goto L_3b5;
  if (!((t.type === e.DOCUMENT_CHECKPOINT))) goto L_241;
  r = {type: e.DOCUMENT_CHECKPOINT, request_id: i(t.request_id)};
  {type: e.DOCUMENT_CHECKPOINT, request_id: i(t.request_id)};
  goto L_3b5;
  if (!((t.type === e.AWARENESS))) goto L_2fb;
  r = {type: e.AWARENESS, client_id: _(t.client_id, "awareness update"), update: d(t.update, "awareness update", "update")};
  {type: e.AWARENESS, client_id: _(t.client_id, "awareness update"), update: d(t.update, "awareness update", "update")};
  goto L_3b5;
  if (!((t.type === e.ACTIVITY))) goto L_350;
  r = {type: e.ACTIVITY};
  {type: e.ACTIVITY};
  goto L_3b5;
  let e;
  e = t.type;
  throw new MultiplayerProtocolError("Unsupported multiplayer client message type "".concat(String(e), ""."));
  t.type;
  return JSON.stringify(r);   // tail call
}

// fn n  args=1 vars=2 closure=4 cpool=0 bc=349B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: t
// locals: r
// closure: MultiplayerProtocolError, E, e, d
function {
  let r;
  if (!(("boolean" != typeof t.initialized))) goto L_3b;
  throw new MultiplayerProtocolError("Invalid multiplayer document snapshot: initialized must be a boolean.");
  r = E(t.access);
  if (!(t.initialized)) goto L_125;
  return {type: e.DOCUMENT_SYNC, initialized: true, access: r, update: d(t.update, "document snapshot", "update"), state_vector: d(t.state_vector, "document snapshot", "state_vector")};
  return {type: e.DOCUMENT_SYNC, initialized: false, access: r};
}

// fn i  args=1 vars=2 closure=2 cpool=0 bc=63B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: e
// locals: t
// closure: d, MultiplayerProtocolError
function {
  let t;
  t = d(e, "checkpoint", "request_id");
  if (!(!t)) goto L_24;
  throw new MultiplayerProtocolError("Invalid multiplayer checkpoint: request_id must not be empty.");
  if (!((t.length > 128))) goto L_3b;
  throw new MultiplayerProtocolError("Invalid multiplayer checkpoint: request_id is too long.");
  return t;
}

// fn s  args=1 vars=1 closure=2 cpool=0 bc=91B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: e
// closure: r, MultiplayerProtocolError
function {
  if (!((e !== r.UNAVAILABLE))) goto L_59;
  if (!((e !== r.CHECKPOINT_INCOMPLETE))) goto L_59;
  throw new MultiplayerProtocolError("Invalid multiplayer checkpoint error code.");
  return e;
}

// fn l  args=1 vars=2 closure=3 cpool=0 bc=403B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: t
// locals: r
// closure: d, e, MultiplayerProtocolError
function {
  let r;
  r = d(t.message, "document error", "message");
  if (!((undefined === t.reason))) goto L_af;
  if (!((undefined === t.retryable))) goto L_af;
  return {type: e.DOCUMENT_ERROR, message: r};
  if ((("string" != typeof t.reason))) goto L_105;
  if (!(("boolean" != typeof t.retryable))) goto L_114;
  throw new MultiplayerProtocolError("Invalid multiplayer document error: reason and retryable must be supplied together as a string and boolean.");
  return {type: e.DOCUMENT_ERROR, message: r, reason: t.reason, retryable: t.retryable};
}

// fn p  args=1 vars=1 closure=3 cpool=0 bc=138B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: t
// closure: e, _, d
function {
  return {type: e.AWARENESS, client_id: _(t.client_id, "awareness update"), update: d(t.update, "awareness update", "update")};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: e, t
// closure: c
function {
  return c(e, t);   // tail call
}

// fn u  args=1 vars=1 closure=3 cpool=1 bc=209B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: t
// closure: c, MultiplayerProtocolError, e
function {
  if (!(!Array.isArray(t.participants))) goto L_5b;
  throw new MultiplayerProtocolError("Invalid multiplayer presence: participants must be an array.");
  return {type: e.PRESENCE, participants: t.participants.map(function <atom:0>)};
}

// fn c  args=2 vars=5 closure=3 cpool=0 bc=502B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: e, t
// locals: r, a, o
// closure: y, MultiplayerProtocolError, d
function {
  let o;
  let a;
  let r;
  if (!(!y(e))) goto L_46;
  throw new MultiplayerProtocolError("Invalid multiplayer presence participant ".concat(t, ": expected an object."));
  r = "presence participant ".concat(t);
  a = e.profile_picture_url;
  if (!((null !== a))) goto L_e0;
  if (!(("string" != typeof a))) goto L_e0;
  throw new MultiplayerProtocolError("Invalid multiplayer ".concat(r, ": profile_picture_url must be a string or null."));
  o = e.last_activity_at;
  if ((("number" != typeof o))) goto L_147;
  if ((!Number.isSafeInteger(o))) goto L_147;
  if (!((o < 0))) goto L_182;
  throw new MultiplayerProtocolError("Invalid multiplayer ".concat(r, ": last_activity_at must be a non-negative safe integer."));
  return {user_id: d(e.user_id, r, "user_id"), display_name: d(e.display_name, r, "display_name"), profile_picture_url: a, last_activity_at: o};
}

// fn E  args=1 vars=1 closure=2 cpool=0 bc=91B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: e
// closure: t, MultiplayerProtocolError
function {
  if (!((e !== t.VIEW))) goto L_59;
  if (!((e !== t.EDIT))) goto L_59;
  throw new MultiplayerProtocolError("Invalid multiplayer document snapshot: access must be "view" or "edit".");
  return e;
}

// fn d  args=3 vars=3 closure=1 cpool=0 bc=73B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: e, t, r
// closure: MultiplayerProtocolError
function {
  if (!(("string" != typeof e))) goto L_47;
  throw new MultiplayerProtocolError("Invalid multiplayer ".concat(t, ": ", r, " must be a string."));
  return e;
}

// fn _  args=2 vars=2 closure=1 cpool=0 bc=121B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: e, t
// closure: MultiplayerProtocolError
function {
  if ((("number" != typeof e))) goto L_3e;
  if ((!Number.isSafeInteger(e))) goto L_3e;
  if (!((e < 0))) goto L_77;
  throw new MultiplayerProtocolError("Invalid multiplayer ".concat(t, ": client_id must be a non-negative safe integer."));
  return e;
}

// fn y  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=17 bc=310B file=chatgpt_multiplayer/src/MultiplayerProtocol
// args: require, module, exports
// locals: e, t, r, MultiplayerProtocolError, <class_fields_init>, MultiplayerProtocolError#1, a, o, n, i, s, l, p, u, c, E, d, _, y
function {
  a = function a;
  o = function o;
  n = function n;
  i = function i;
  s = function s;
  l = function l;
  p = function p;
  u = function u;
  c = function c;
  E = function E;
  d = function d;
  _ = function _;
  y = function y;
  let MultiplayerProtocolError#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MultiplayerMessageType = undefined;
  exports.MultiplayerDocumentAccess = undefined;
  exports.MultiplayerCheckpointErrorCode = undefined;
  exports.MultiplayerProtocolError = undefined;
  exports.parseMultiplayerServerMessage = undefined;
  exports.encodeMultiplayerClientMessage = undefined;
  if ((e)) goto L_c5;
  e = {};
  exports.MultiplayerMessageType = {};
  function <atom:0>({});
  if ((t)) goto L_db;
  t = {};
  exports.MultiplayerDocumentAccess = {};
  function <atom:0>({});
  if ((r)) goto L_f1;
  r = {};
  exports.MultiplayerCheckpointErrorCode = {};
  function <atom:0>({});
  let MultiplayerProtocolError;
  let <class_fields_init>;
  class MultiplayerProtocolError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:MultiplayerProtocolError>;
  MultiplayerProtocolError = function <atom:0>;
  // close_loc <class_fields_init>
  MultiplayerProtocolError#1 = function <atom:0>;
  exports.MultiplayerProtocolError = MultiplayerProtocolError#1;
  exports.parseMultiplayerServerMessage = a;
  exports.encodeMultiplayerClientMessage = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/MultiplayerProtocol
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
