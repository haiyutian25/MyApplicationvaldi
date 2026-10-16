// fn i  args=1 vars=1 closure=1 cpool=0 bc=45B file=collaborative_editor/src/PersistentSynchronousEditor
// args: e
// closure: require
function {
  require("collaborative_editor/runtime_bundle/NativeEngine").validateDocumentUpdate(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=55B file=collaborative_editor/src/PersistentSynchronousEditor
// args: e
// closure: d, u, s
function {
  null;
  e;
  return d.createNativeEditor({debug: u}, s);   // tail call
}

// fn n  args=4 vars=12 closure=5 cpool=1 bc=622B file=collaborative_editor/src/PersistentSynchronousEditor
// args: i, n, a, u
// locals: i#1, n#1, a#1, u#1, d, s, c, o
// closure: r, require, o, t, e
function {
  let u#1;
  let a#1;
  let n#1;
  let i#1;
  i#1 = i;
  n#1 = n;
  a#1 = a;
  if (!((u === undefined))) goto L_83;
  u;
  u = r.createNativeEditorDebugCapture(i#1.stored.documentId);
  u#1 = r.createNativeEditorDebugCapture(i#1.stored.documentId);
  let c;
  let s;
  let d;
  d = require("collaborative_editor/runtime_bundle/NativeEngine");
  s = o.createDocumentRecoveryPreparation();
  c = false;
  try { // catch -> L_238
  let o;
  o = t.openPersistentSynchronousEditor({schema: i.stored.schema, initialState: {kind: e.EditorInitialStateKind.EMPTY}, onEvent: n}, function <atom:0>, i, a);
  if (!((o.status === e.EditorOpenStatus.OPENED))) goto L_229;
  c = (undefined !== o.engine);
  (undefined !== o.engine);
  // gosub (finally 块) 574
  return o;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 574
  throw <?>;
  if ((c)) goto L_26c;
  s.dispose();
  // ret (finally 块) 
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=155B file=collaborative_editor/src/PersistentSynchronousEditor
// args: require, module, exports
// locals: e, t, o, r, i, n
function {
  i = function i;
  n = function n;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.validateSynchronousDocumentUpdate = undefined;
  exports.openStoredSynchronousEditor = undefined;
  e = require("./EditorTypes");
  t = require("./SynchronousEditorSession");
  o = require("./worker/DocumentRecoveryPreparation");
  r = require("./NativeEditorDebugCapture");
  exports.validateSynchronousDocumentUpdate = i;
  exports.openStoredSynchronousEditor = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/PersistentSynchronousEditor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
