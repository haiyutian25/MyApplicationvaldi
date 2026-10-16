// fn t  args=1 vars=1 closure=3 cpool=0 bc=97B file=collaborative_editor/src/CreateSynchronousCollaborativeEditorEngine
// args: r
// closure: e, i, o
function {
  if (!(e.isVersionAtLeast(89))) goto L_52;
  return i(r, o.createNativeEditorDebugCapture()); // async
  throw new Error("This app version does not support synchronous editing.");
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=136B file=collaborative_editor/src/CreateSynchronousCollaborativeEditorEngine
// args: r
// closure: i, t, e
function {
  null;
  r;
  if (!(e.isVersionAtLeast(108))) goto L_7e;
  goto L_7f;
  // [栈深重同步 4 -> 3]
  return i.createNativeEditor({debug: t, onSynchronizationChange: undefined}, undefined);   // tail call
}

// fn i  args=2 vars=3 closure=3 cpool=1 bc=53B file=collaborative_editor/src/CreateSynchronousCollaborativeEditorEngine
// args: o, t
// locals: i
// closure: e, require, r
function {
  let i;
  i = require("collaborative_editor/runtime_bundle/NativeEngine");
  return r.openSynchronousEditor(o, function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=142B file=collaborative_editor/src/CreateSynchronousCollaborativeEditorEngine
// args: require, module, exports
// locals: e, r, o, t, i
function {
  t = function t;
  i = function i;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createSynchronousCollaborativeEditorEngine = undefined;
  exports.createSynchronousEditorWithDebug = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  r = require("./SynchronousEditorSession");
  o = require("./NativeEditorDebugCapture");
  exports.createSynchronousCollaborativeEditorEngine = t;
  exports.createSynchronousEditorWithDebug = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/CreateSynchronousCollaborativeEditorEngine
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
