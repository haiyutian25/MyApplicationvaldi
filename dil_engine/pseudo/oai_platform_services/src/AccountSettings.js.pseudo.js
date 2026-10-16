// fn s  args=1 vars=1 closure=1 cpool=0 bc=82B file=oai_platform_services/src/AccountSettings
// args: e
// closure: t
function {
  if (!((undefined !== e))) goto L_51;
  if (!(t.isVersionAtLeast(71))) goto L_51;
  return e.accountSettingsService;
  return;
}

// fn n  args=1 vars=1 closure=1 cpool=0 bc=82B file=oai_platform_services/src/AccountSettings
// args: e
// closure: t
function {
  if (!((undefined !== e))) goto L_51;
  if (!(t.isVersionAtLeast(109))) goto L_51;
  return e.accountSettingsService;
  return;
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=83B file=oai_platform_services/src/AccountSettings
// args: e
// closure: t
function {
  if (!((undefined !== e))) goto L_52;
  if (!(t.isVersionAtLeast(293))) goto L_52;
  return e.accountSettingsService;
  return;
}

// fn i  args=1 vars=1 closure=2 cpool=0 bc=133B file=oai_platform_services/src/AccountSettings
// args: r
// closure: t, e
function {
  if (!(t.isVersionAtLeast(293))) goto L_76;
  return e.convertBridgeObservableToObservable(r.observeRichResponses());   // tail call
  throw new Error("Rich response settings are unavailable");
}

// fn a  args=2 vars=2 closure=1 cpool=0 bc=137B file=oai_platform_services/src/AccountSettings
// args: e, r
// closure: t
function {
  if (!(t.isVersionAtLeast(293))) goto L_51;
  return e.setRichResponsesEnabled(r);
  return Promise.reject(new Error("Rich response settings are unavailable"));
}

// fn c  args=1 vars=2 closure=2 cpool=0 bc=139B file=oai_platform_services/src/AccountSettings
// args: r
// locals: t
// closure: t, e
function {
  if (!(t.isVersionAtLeast(71))) goto L_7c;
  let t;
  t = r;
  return e.convertBridgeObservableToObservable(t.observeSettings());   // tail call
  throw new Error("Account settings are unavailable");
}

// fn u  args=2 vars=2 closure=3 cpool=0 bc=135B file=oai_platform_services/src/AccountSettings
// args: r, s
// closure: t, e, l
function {
  if (!(t.isVersionAtLeast(109))) goto L_78;
  return e.convertBridgeObservableToObservable(r.observeSetting(l(s)));   // tail call
  throw new Error("Per-setting account observation is unavailable");
}

// fn g  args=1 vars=1 closure=1 cpool=0 bc=81B file=oai_platform_services/src/AccountSettings
// args: e
// closure: t
function {
  if (!(t.isVersionAtLeast(71))) goto L_50;
  e.refresh();
  return;
}

// fn b  args=3 vars=3 closure=2 cpool=0 bc=99B file=oai_platform_services/src/AccountSettings
// args: e, r, s
// closure: t, l
function {
  if (!(!t.isVersionAtLeast(71))) goto L_39;
  throw new Error("Account setting updates are unavailable");
  e.setBoolean(l(r), s);
  return;
}

// fn l  args=1 vars=1 closure=2 cpool=0 bc=367B file=oai_platform_services/src/AccountSettings
// args: e
// closure: r, t
function {
  if (!((e === r.ImprovedMemory))) goto L_2d;
  return "m3m";
  if (!((e === r.GoldenHour))) goto L_59;
  return "golden_hour";
  if (!((e === r.MemoryInSearch))) goto L_85;
  return "memory_in_search";
  if (!((e === r.InstantAnswers))) goto L_b1;
  return "instant_answers_enabled";
  if (!((e === r.TaskSuggestions))) goto L_dd;
  return "task_suggestions_enabled";
  if (!((e === r.FileLibraryAutoReference))) goto L_109;
  return "file_library_auto_reference";
  if (!((e === r.ImageGenHoldoutOptIn))) goto L_16e;
  if (!(t.isVersionAtLeast(208))) goto L_15f;
  return "image_gen_enabled";
  throw new Error("Image generation holdout settings are unavailable");
  e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=106B file=oai_platform_services/src/AccountSettings
// args: e
function {
  e.ImprovedMemory = "m3m";
  e.GoldenHour = "golden_hour";
  e.MemoryInSearch = "memory_in_search";
  e.InstantAnswers = "instant_answers_enabled";
  e.TaskSuggestions = "task_suggestions_enabled";
  e.FileLibraryAutoReference = "file_library_auto_reference";
  e.ImageGenHoldoutOptIn = "image_gen_enabled";
  return;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=11 bc=358B file=oai_platform_services/src/AccountSettings
// args: require, module, exports
// locals: e, t, r, s, n, o, i, a, c, u, g, b, l
function {
  s = function s;
  n = function n;
  o = function o;
  i = function i;
  a = function a;
  c = function c;
  u = function u;
  g = function g;
  b = function b;
  l = function l;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AccountSettingKey = undefined;
  exports.accountSettingsFor = undefined;
  exports.keyedAccountSettingsFor = undefined;
  exports.richResponseSettingsFor = undefined;
  exports.observeRichResponses = undefined;
  exports.setRichResponsesEnabled = undefined;
  exports.observeAccountSettings = undefined;
  exports.observeAccountSetting = undefined;
  exports.refreshAccountSettings = undefined;
  exports.updateAccountSetting = undefined;
  e = require("bridge_observables/src/utils/convertBridgeObservableToObservable");
  t = require("valdi_core/src/CompilerIntrinsics");
  if ((r)) goto L_f7;
  r = {};
  exports.AccountSettingKey = {};
  !function <atom:0>({});
  exports.accountSettingsFor = s;
  exports.keyedAccountSettingsFor = n;
  exports.richResponseSettingsFor = o;
  exports.observeRichResponses = i;
  exports.setRichResponsesEnabled = a;
  exports.observeAccountSettings = c;
  exports.observeAccountSetting = u;
  exports.refreshAccountSettings = g;
  exports.updateAccountSetting = b;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_platform_services/src/AccountSettings
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
