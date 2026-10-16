// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=347B file=custom_instructions_ui/src/CustomizationSaveAlert
// closure: i, o, t
function {
  return i.platformAlert.present({title: o.title, message: o.message, actions: [{id: "retry", title: t.default.commonRetry(), role: 0}, {id: "options", title: t.default.commonMoreOptions(), role: 1}]});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=347B file=custom_instructions_ui/src/CustomizationSaveAlert
// closure: i, o, r
function {
  return i.platformAlert.present({title: o.title, message: o.message, actions: [{id: "discard", title: r.default.customInstructionsDiscard(), role: 2}, {id: "keep-editing", title: r.default.customInstructionsKeepEditing(), role: 1}]});   // tail call
}

// fn o  args=1 vars=3 closure=5 cpool=2 bc=618B file=custom_instructions_ui/src/CustomizationSaveAlert
// args: o
// locals: n, a
// closure: i, t, r, s, e
function {
  let a;
  let n;
  if (!(!o.isCurrent())) goto L_51;
  return s.KeepEditing; // async
  n = (await e.withLocalNativeRefs(o.contextId, function <atom:0>));
  if (!(!o.isCurrent())) goto L_e7;
  return s.KeepEditing; // async
  if (!(("retry" === n.selectedActionId))) goto L_136;
  return s.Retry; // async
  if (!(("options" !== n.selectedActionId))) goto L_185;
  return s.KeepEditing; // async
  a = (await e.withLocalNativeRefs(o.contextId, function <atom:0>));
  if (!(o.isCurrent())) goto L_247;
  if (!(("discard" === a.selectedActionId))) goto L_247;
  goto L_269;
  // [栈深重同步 1 -> 0]
  return s.KeepEditing; // async
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=custom_instructions_ui/src/CustomizationSaveAlert
// args: e
function {
  e.KeepEditing = 0;
  e[0] = "KeepEditing";
  e.Retry = 1;
  e[1] = "Retry";
  e.Discard = 2;
  e[2] = "Discard";
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=164B file=custom_instructions_ui/src/CustomizationSaveAlert
// args: require, module, exports
// locals: e, t, i, r, s, o
function {
  o = function o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CustomizationSaveAlertAction = undefined;
  exports.presentCustomizationSaveAlert = undefined;
  e = require("valdi_core/src/NativeReferences");
  t = require("oai_ui/src/Strings");
  i = require("valdi_platform_alert/src/PlatformAlert");
  r = require("./Strings");
  if ((s)) goto L_94;
  s = {};
  exports.CustomizationSaveAlertAction = {};
  !function <atom:0>({});
  exports.presentCustomizationSaveAlert = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=custom_instructions_ui/src/CustomizationSaveAlert
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
