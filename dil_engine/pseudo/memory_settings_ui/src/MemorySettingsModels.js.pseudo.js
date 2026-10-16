// fn r  args=2 vars=3 closure=2 cpool=0 bc=196B file=memory_settings_ui/src/MemorySettingsModels
// args: r, i
// locals: o
// closure: t, e
function {
  if (!((undefined !== r))) goto L_c3;
  if (!(t.isVersionAtLeast(73))) goto L_c3;
  try { // catch -> L_62
  r.onMemorySettingChanged(i);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_c2
  if (!(e.isLoggingEnabled)) goto L_bf;
  console.warn("Memory Settings host could not refresh Memory Summary", o);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=78B file=memory_settings_ui/src/MemorySettingsModels
// args: e
// closure: t
function {
  if (!(t.isVersionAtLeast(192))) goto L_4d;
  return e.initialSearchTarget;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=165B file=memory_settings_ui/src/MemorySettingsModels
// args: require, module, exports
// locals: e, t, r, i
function {
  r = function r;
  i = function i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.notifyMemorySettingChanged = undefined;
  exports.memorySettingsSearchTarget = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/CompilerIntrinsics");
  exports.notifyMemorySettingChanged = r;
  exports.memorySettingsSearchTarget = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=memory_settings_ui/src/MemorySettingsModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
