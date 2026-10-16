// fn o  args=0 vars=0 closure=2 cpool=0 bc=276B file=valdi_platform_alert/src/PlatformAlert
// closure: e, t
function {
  if (!(e.isVersionAtLeast(281))) goto L_113;
  if (!(!t.Device.isWeb())) goto L_113;
  if ((t.Device.isIOS())) goto L_113;
  return t.Device.isAndroid();
}

// fn i  args=1 vars=4 closure=0 cpool=0 bc=535B file=valdi_platform_alert/src/PlatformAlert
// args: e
// locals: t, r, o
function {
  let r;
  let t;
  if (((e.actions.length < 1))) goto L_54;
  if (!((e.actions.length > 2))) goto L_65;
  throw new Error("Platform alerts require one or two actions");
  t = new Set();
  r = 0;
  let o;
  for (const o of e.actions) {
    if (!((0 === o.id.length))) goto L_d3;
    throw new Error("Platform alert action identifiers must not be empty");
    if (!(t.has(o.id))) goto L_177;
    throw new Error("Platform alert action identifiers must be unique: ".concat(o.id));
    t.add(o.id);
    if (!((1 === o.role))) goto L_1f6;
    r = (r + 1);
    (r + 1);
  }
  if (!((r > 1))) goto L_216;
  throw new Error("Platform alerts support at most one cancel action");
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=29B file=valdi_platform_alert/src/PlatformAlert
// args: e, r
// closure: t, o
function {
  if (!((undefined === r))) goto L_10;
  goto L_1c;
  // [栈深重同步 1 -> 0]
  o(new Error(r));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=41B file=valdi_platform_alert/src/PlatformAlert
// args: t, o
// closure: r, e
function {
  r.presentPlatformAlert(e, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=16B file=valdi_platform_alert/src/PlatformAlert
// args: e
// closure: r, i
function {
  i(e);
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=0 bc=35B file=valdi_platform_alert/src/PlatformAlert
// args: t, r, i
// closure: e, o
function {
  if (!((undefined === i))) goto L_16;
  if (!(("confirm" === t))) goto L_12;
  goto L_13;
  // [栈深重同步 2 -> 1]
  goto L_22;
  // [栈深重同步 1 -> 0]
  o(new Error(i));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=273B file=valdi_platform_alert/src/PlatformAlert
// args: e, o
// closure: r, t
function {
  r.presentPlatformAlertWithTextInput({title: t.title, message: t.message, actions: [{id: "confirm", title: t.confirmTitle, role: 0}, {id: "cancel", title: t.cancelTitle, role: 1}]}, t.initialValue, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=114B file=valdi_platform_alert/src/PlatformAlert
// args: t
// closure: r, e, o
function {
  if (!(e.isVersionAtLeast(281))) goto L_3a;
  if (!(o())) goto L_3a;
  return new Promise(function <atom:0>);
  return Promise.reject(new Error("Native text prompts are unavailable on this platform"));
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=4 bc=165B file=valdi_platform_alert/src/PlatformAlert
// args: require, module, exports
// locals: e, t, r, o, i
function {
  o = function o;
  i = function i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.supportsPlatformPrompt = undefined;
  exports.platformAlert = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  t = require("valdi_core/src/Device");
  r = require("./NativePlatformAlert");
  exports.supportsPlatformPrompt = o;
  exports.platformAlert = {present: function <atom:0>, prompt: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_platform_alert/src/PlatformAlert
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
