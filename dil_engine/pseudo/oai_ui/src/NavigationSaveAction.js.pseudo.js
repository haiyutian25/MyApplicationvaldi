// fn a  args=0 vars=0 closure=2 cpool=0 bc=200B file=oai_ui/src/NavigationSaveAction
// closure: i, e
function {
  if ((i.Device.isAndroid())) goto L_c0;
  if ((i.Device.isWeb())) goto L_c0;
  if (!((undefined === e.navigationActionStateForHost(2)))) goto L_c4;
  return 0;
  return 1500;
}

// fn n  args=2 vars=3 closure=3 cpool=0 bc=413B file=oai_ui/src/NavigationSaveAction
// args: a, n
// locals: o
// closure: e, i, t
function {
  let o;
  if (!((0 === n))) goto L_b;
  goto L_31;
  // [栈深重同步 1 -> 0]
  o = e.navigationActionStateForHost(n);
  null;
  a;
  if (!(i.Device.isAndroid())) goto L_e1;
  if (!(!i.Device.isWeb())) goto L_e1;
  goto L_e2;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((undefined === o))) goto L_f2;
  goto L_197;
  // [栈深重同步 2 -> 1]
  if (!((1 === n))) goto L_14a;
  goto L_192;
  // [栈深重同步 3 -> 2]
  null;
  {presentationState: o, accessibilityLabel: t.default.navigationSaved()};
  return {};
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=142B file=oai_ui/src/NavigationSaveAction
// args: require, module, exports
// locals: i, e, t, a, n
function {
  a = function a;
  n = function n;
  let t;
  let e;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.navigationSaveFeedbackDurationMs = undefined;
  exports.navigationSaveAction = undefined;
  i = require("valdi_core/src/Device");
  e = require("valdi_navigation/src/PlatformNavigation");
  t = require("./Strings");
  exports.navigationSaveFeedbackDurationMs = a;
  exports.navigationSaveAction = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/NavigationSaveAction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
