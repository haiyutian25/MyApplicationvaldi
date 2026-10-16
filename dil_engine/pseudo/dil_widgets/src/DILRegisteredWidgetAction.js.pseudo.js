// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=28B file=dil_widgets/src/DILRegisteredWidgetAction
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.active = true;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=15B file=dil_widgets/src/DILRegisteredWidgetAction
// locals: this
function {
  this = this;
  this.active = false;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=8B file=dil_widgets/src/DILRegisteredWidgetAction
// closure: DILWidgetPublicationLifetime
function {
  return new DILWidgetPublicationLifetime();
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=79B file=dil_widgets/src/DILRegisteredWidgetAction
// closure: DILWidgetPublicationLifetime, n, e
function {
  return n.accountContainerFor(e).resolve(DILWidgetPublicationLifetime, function <atom:0>);   // tail call
}

// fn r  args=1 vars=1 closure=3 cpool=1 bc=41B file=dil_widgets/src/DILRegisteredWidgetAction
// args: e
// closure: DILWidgetPublicationLifetime, n, s
function {
  return s.withGlobalNativeRefs(function <atom:0>);   // tail call
}

// fn a  args=2 vars=5 closure=1 cpool=0 bc=516B file=dil_widgets/src/DILRegisteredWidgetAction
// args: e, t
// locals: i, o, s
// closure: u
function {
  let s;
  let o;
  let i;
  if (!(e.type)) goto L_7e;
  if (!(e.nativeWidgetResolutionId)) goto L_7e;
  if (!(e.componentName)) goto L_7e;
  if (!(!u(t))) goto L_84;
  return false;
  i = t.opGenui;
  if (!(u(i))) goto L_d4;
  goto L_d5;
  // [栈深重同步 1 -> 0]
  o = undefined;
  if (!(u(o))) goto L_156;
  if (!((Object.getOwnPropertyDescriptor(o, e.nativeWidgetResolutionId) == null))) goto L_133;
  Object.getOwnPropertyDescriptor(o, e.nativeWidgetResolutionId);
  goto L_157;
  goto L_157;
  // [栈深重同步 1 -> 0]
  s = undefined;
  if (!(u(s))) goto L_203;
  if (!(("resolved" === s.status))) goto L_203;
  if (!((s.componentName === e.componentName))) goto L_203;
  return u(s.state);
}

// fn d  args=3 vars=5 closure=2 cpool=0 bc=789B file=dil_widgets/src/DILRegisteredWidgetAction
// args: e, t, o
// locals: s, n
// closure: i, c
function {
  let n;
  let s;
  if (!((o.payload == null))) goto L_7a;
  o.payload;
  s = JSON.parse(JSON.stringify({}));
  if (!((t.conversationId == null))) goto L_10a;
  t.conversationId;
  if (!((t.messageId == null))) goto L_137;
  t.messageId;
  if (!((o.nativeWidgetResolutionId == null))) goto L_164;
  o.nativeWidgetResolutionId;
  if (!((o.type == null))) goto L_191;
  o.type;
  n = (await new i.OAINetworkClient(e).requestJson({request: {method: "POST", path: "/backend-api/widget_server_action", jsonBody: {conversation_id: null, message_id: null, native_widget_resolution_id: null, action_type: null, payload: s}}, decode: c}).result);
  if (!((n.kind !== i.OAINetworkResultKind.Success))) goto L_24f;
  throw new Error("Could not complete widget action.");
  if (!(!n.value.success)) goto L_2f0;
  if (!((n.value.statusMessage == null))) goto L_2ec;
  n.value.statusMessage;
  throw new Error("Could not complete widget action.");
  return n.value; // async
}

// fn c  args=1 vars=3 closure=2 cpool=0 bc=343B file=dil_widgets/src/DILRegisteredWidgetAction
// args: e
// locals: i, o
// closure: t, u
function {
  let o;
  let i;
  i = t.decode(e);
  if (!(("success" !== i.status))) goto L_96;
  if (!(("error" !== i.status))) goto L_96;
  throw new Error("Invalid widget action response.");
  if (!(u(e))) goto L_bf;
  goto L_c0;
  // [栈深重同步 1 -> 0]
  o = undefined;
  if (!((null != o))) goto L_df;
  if (!(!u(o))) goto L_df;
  throw new Error("Invalid widget action state.");
  if (!((i.statusMessage == null))) goto L_139;
  i.statusMessage;
  if (!(u(o))) goto L_150;
  goto L_151;
  // [栈深重同步 2 -> 1]
  return {success: ("success" === i.status), statusMessage: undefined, response: {}};
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/DILRegisteredWidgetAction
// args: e
function {
  if (!((null !== e))) goto L_3e;
  if (!(("object" == typeof e))) goto L_3e;
  return !Array.isArray(e);
}

// fn l  args=1 vars=4 closure=1 cpool=0 bc=608B file=dil_widgets/src/DILRegisteredWidgetAction
// args: e
// locals: t, i, o
// closure: u
function {
  let o;
  let i;
  let t;
  if (!(("share" === e.type))) goto L_80;
  if (!((e.payload == null))) goto L_5d;
  e.payload;
  goto L_81;
  goto L_81;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (!((undefined === t))) goto L_8a;
  return;
  if ((("client" !== e.handler))) goto L_140;
  if ((!u(t))) goto L_140;
  if ((("personality_quiz" !== t.kind))) goto L_140;
  if ((("PersonalityQuizWidget" !== e.componentName))) goto L_140;
  if (!(!e.nativeWidgetResolutionId)) goto L_151;
  throw new Error("Invalid widget sharing intent.");
  i = t.mode;
  o = t.expected_revision;
  if (!(("quiz" !== i))) goto L_1b1;
  if ((("result" !== i))) goto L_216;
  if (!((undefined !== o))) goto L_202;
  if ((("number" != typeof o))) goto L_202;
  if ((!Number.isSafeInteger(o))) goto L_202;
  if (((o < 0))) goto L_216;
  if (!(("result" === i))) goto L_227;
  if (!((undefined === o))) goto L_227;
  throw new Error("Invalid widget sharing intent.");
  return {nativeWidgetResolutionId: e.nativeWidgetResolutionId, mode: i, expectedRevision: o};
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=8 bc=687B file=dil_widgets/src/DILRegisteredWidgetAction
// args: require, module, exports
// locals: e, t, i, o, s, n, DILWidgetPublicationLifetime, <class_fields_init>, DILWidgetPublicationLifetime#1, r, a, d, c, u, l
function {
  r = function r;
  a = function a;
  d = function d;
  c = function c;
  u = function u;
  l = function l;
  let DILWidgetPublicationLifetime#1;
  let n;
  let s;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILWidgetPublicationLifetime = undefined;
  exports.widgetPublicationLifetimeFor = undefined;
  exports.isRegisteredWidgetAction = undefined;
  exports.dispatchRegisteredWidgetAction = undefined;
  exports.decodeRegisteredWidgetActionResult = undefined;
  exports.registeredWidgetShareRequest = undefined;
  e = require("valdi_core/src/JsonSerializationRuntime");
  t = e.createJsonSerializer({kind: e.JsonSchemaKind.Object, name: "RegisteredWidgetResponseWire", fields: [{name: "status", jsonName: "status", schema: {kind: e.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "statusMessage", jsonName: "status_message", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}]});
  i = require("oai_platform_services/src/OAINetworkClient");
  o = require("valdi_core/src/JsonSerialization");
  s = require("valdi_core/src/NativeReferences");
  n = require("oai_platform_services/src/AccountContainer");
  let DILWidgetPublicationLifetime;
  let <class_fields_init>;
  class DILWidgetPublicationLifetime extends undefined { ... }
  <proto:DILWidgetPublicationLifetime>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILWidgetPublicationLifetime>;
  DILWidgetPublicationLifetime = function <atom:0>;
  // close_loc <class_fields_init>
  DILWidgetPublicationLifetime#1 = function <atom:0>;
  exports.DILWidgetPublicationLifetime = DILWidgetPublicationLifetime#1;
  exports.widgetPublicationLifetimeFor = r;
  exports.isRegisteredWidgetAction = a;
  exports.dispatchRegisteredWidgetAction = d;
  exports.decodeRegisteredWidgetActionResult = c;
  exports.registeredWidgetShareRequest = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILRegisteredWidgetAction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
