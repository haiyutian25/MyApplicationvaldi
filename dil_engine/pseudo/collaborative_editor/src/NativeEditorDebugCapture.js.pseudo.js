// fn a  args=1 vars=1 closure=1 cpool=0 bc=119B file=collaborative_editor/src/NativeEditorDebugCapture
// args: t
// closure: e
function {
  if (!(e.isDevBuild())) goto L_2a;
  return true;
  try { // catch -> L_6c
  if (!((t == null))) goto L_3a;
  t;
  goto L_69;
  return (true === undefined.isFeatureFlagEnabled({flagName: "chatgpt-multiplayer-writing-blocks-debug"}));
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_76
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=130B file=collaborative_editor/src/NativeEditorDebugCapture
// locals: t
// closure: s, l, e
function {
  let t;
  s.delete(l);
  t = e;
  e = undefined;
  undefined;
  try { // catch -> L_4c
  if (!((t == null))) goto L_48;
  t;
  goto L_49;
  undefined();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_81
  l.markIncomplete("The account diagnostic references could not be released.");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=5B file=collaborative_editor/src/NativeEditorDebugCapture
// closure: a, u
function {
  return a(u);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=94B file=collaborative_editor/src/NativeEditorDebugCapture
// args: t
// closure: e, s
function {
  if ((e.isDevBuild())) goto L_5d;
  if (!((s.get(t) == null))) goto L_5b;
  s.get(t);
  goto L_5c;
  return (true === undefined());
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=154B file=collaborative_editor/src/NativeEditorDebugCapture
// args: e
// locals: t, r
function {
  let r;
  let t;
  if (((undefined === undefined))) goto L_41;
  t = <to_object>(undefined).events;
  r = {};
  <to_object>(undefined);
  {events: null};
  goto L_69;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_b;
  // [栈深重同步 1 -> 0]
  null;
  r;
  return {sessionId: e.sessionId};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=72B file=collaborative_editor/src/NativeEditorDebugCapture
// args: e
// closure: i
function {
  return (e.sessionId === i.sessionId);
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=3 bc=699B file=collaborative_editor/src/NativeEditorDebugCapture
// locals: t, i, n
// closure: e, s, o, r
function {
  let n;
  let i;
  let t;
  t = o.getEditorDebugCaptures().filter(function <atom:0>);
  i = r;
  if (!((i == null))) goto L_63;
  i;
  goto L_84;
  if (((undefined === undefined.action))) goto L_b3;
  if (!(("captures" === i.action))) goto L_e5;
  return {captures: t.map(function <atom:0>)};
  n = t.find(function <atom:0>);
  if (!((undefined === n))) goto L_125;
  throw new Error("Unknown editor capture.");
  if (!(("history" === i.action))) goto L_1ee;
  if (!((i.beforeId == null))) goto L_1eb;
  i.beforeId;
  return n.readEvents((n.getState().eventCount + 1));   // tail call
  if (!(("export" === i.action))) goto L_2ac;
  return {filename: "multiplayer-".concat(n.sessionId, ".jsonl"), mimeType: "application/x-ndjson", content: n.exportJSONL()};
  throw new Error("Unknown editor diagnostic action.");
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=1 bc=89B file=collaborative_editor/src/NativeEditorDebugCapture
// args: t, r
// closure: e, s, o
function {
  if (!(("ValdiMultiplayer" === t))) goto L_58;
  return Promise.resolve().then(function <atom:0>);   // tail call
  return;
}

// fn c  args=3 vars=6 closure=8 cpool=3 bc=485B file=collaborative_editor/src/NativeEditorDebugCapture
// args: c, u, d
// locals: l, e, t
// closure: s, a, e, o, r, i, n, t
function {
  let l;
  if (!(!a(u))) goto L_a;
  return;
  if (!(!e.isDevBuild())) goto L_38;
  if (!((undefined === d))) goto L_38;
  return;
  l = new o.EditorDebugCapture(c);
  if (!((undefined !== d))) goto L_140;
  let t;
  let e;
  e = undefined;
  t = function <atom:0>;
  try { // catch -> L_106
  e = r.protectNativeRefsForCurrentContextId();
  r.protectNativeRefsForCurrentContextId();
  new i.ActiveDocumentAccount(d, t);
  s.set(l, function <atom:0>);
  <?>;
  goto L_13d;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_13c
  t();
  l.close();
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  // close_loc e
  if (!(!n)) goto L_1e1;
  try { // catch -> L_1aa
  t.jsx.addCustomMessageHandler({messageReceived: function <atom:0>});
  n = true;
  true;
  <?>;
  goto L_1e1;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_1e0
  l.markIncomplete("The native debugger could not attach to this capture.");
  <?>;
  goto L_1e1;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return l;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=188B file=collaborative_editor/src/NativeEditorDebugCapture
// args: require, module, exports
// locals: e, t, r, i, o, n, s, a, c
function {
  a = function a;
  c = function c;
  let s;
  let n;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isNativeEditorDebugEnabled = undefined;
  exports.createNativeEditorDebugCapture = undefined;
  e = require("valdi_core/src/BuildType");
  t = require("valdi_core/src/JSXBootstrap");
  r = require("valdi_core/src/NativeReferences");
  i = require("./worker/ActiveDocumentAccount");
  o = require("./EditorDebugCapture");
  n = false;
  s = new WeakMap();
  exports.isNativeEditorDebugEnabled = a;
  exports.createNativeEditorDebugCapture = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/NativeEditorDebugCapture
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
