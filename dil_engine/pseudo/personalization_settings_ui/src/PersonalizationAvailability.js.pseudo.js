// fn s  args=1 vars=4 closure=4 cpool=1 bc=368B file=personalization_settings_ui/src/PersonalizationAvailability
// args: i
// locals: s, n, o
// closure: r, t, c, e
function {
  let n;
  let s;
  if (!(!r.Device.isWeb())) goto L_9c;
  if (!(r.Device.isAndroid())) goto L_9c;
  return;
  s = t.richResponseSettingsFor(i);
  n = i.experimentService;
  if (!((undefined !== s))) goto L_16f;
  if (!((undefined !== n))) goto L_16f;
  try { // catch -> L_10d
  if (!(c(n, "890187595"))) goto L_10a;
  goto L_10b;
  // [栈深重同步 1 -> 0]
  return undefined;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_16e
  if (!(e.isLoggingEnabled)) goto L_16a;
  console.warn("Rich responses could not evaluate eligibility", o);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn n  args=2 vars=6 closure=5 cpool=0 bc=644B file=personalization_settings_ui/src/PersonalizationAvailability
// args: s, n
// locals: o, a, e, l
// closure: t, i, c, r, e
function {
  let a;
  let o;
  if (!((s == null))) goto L_f;
  s;
  goto L_30;
  o = undefined.experimentService;
  if (((undefined === o))) goto L_62;
  if (!((undefined === t.accountSettingsFor(s)))) goto L_82;
  return {showsFastAnswers: false, showsSuggestedPrompts: false, showsLibrarySearch: false, usesImprovedMemory: false};
  null;
  n;
  a = {};
  try { // catch -> L_21e
  let e;
  e = i.experimentLayer(o, "chatgpt-instant-answers");
  if (!((e == null))) goto L_ce;
  e;
  goto L_f9;
  if (!(!undefined.getBoolean("block_instant_answer", false))) goto L_149;
  if ((c(o, "chatgpt-instant-answers-enabled"))) goto L_149;
  if (!((e == null))) goto L_117;
  e;
  goto L_142;
  if (!((undefined.getBoolean("enable_instant_answers", false) == null))) goto L_149;
  undefined.getBoolean("enable_instant_answers", false);
  a.showsFastAnswers = false;
  if (!(r.Device.isAndroid())) goto L_1aa;
  goto L_1af;
  // [栈深重同步 4 -> 3]
  a.showsSuggestedPrompts = c(o, "chatgpt-ios-task-suggestions");
  if (!(c(o, "chatgpt-recall-enabled"))) goto L_1d4;
  a.showsLibrarySearch = c(o, "chatgpt-library-search-setting");
  if (!(a.showsLibrarySearch)) goto L_212;
  a.usesImprovedMemory = c(o, "chatgpt_m3m_enabled");
  <?>;
  goto L_280;
  // [栈深重同步 0 -> 1]
  l = <?>;
  try { // catch -> L_27f
  if (!(e.isLoggingEnabled)) goto L_27b;
  console.warn("Personalization could not evaluate feature availability", l);
  <?>;
  goto L_280;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return a;
}

// fn o  args=1 vars=3 closure=4 cpool=0 bc=676B file=personalization_settings_ui/src/PersonalizationAvailability
// args: t
// locals: e, s
// closure: r, c, i, e
function {
  if (!((undefined === t))) goto L_8;
  return false;
  try { // catch -> L_241
  if (!(!r.Device.isWeb())) goto L_b4;
  if (!(r.Device.isAndroid())) goto L_b4;
  if (!(!c(t, "chatgpt_enable_tpp"))) goto L_1e6;
  return false;
  if (!(!r.Device.isWeb())) goto L_1e6;
  if (!(r.Device.isIOS())) goto L_1e6;
  let e;
  if (!((i.experimentLayer(t, "chatgpt_ios_model_selection_experience") == null))) goto L_185;
  i.experimentLayer(t, "chatgpt_ios_model_selection_experience");
  goto L_1b3;
  e = undefined.getString("experience", "existing_controls");
  if (((e === "assistant_mode"))) goto L_1e5;
  if (((e === "fast_tools"))) goto L_1d2;
  if (!((e === "legacy"))) goto L_1d6;
  return false;
  // [栈深重同步 0 -> 1]
  if (!(!c(t, "chatgpt-ios-jesse-mode-enabled"))) goto L_1e5;
  return false;
  // [栈深重同步 0 -> 1]
  <?>;
  if (!(r.Device.isAndroid())) goto L_239;
  goto L_23e;
  // [栈深重同步 3 -> 2]
  return c(t, "chatgpt-ios-work-mode-pets-enabled");
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_2a3
  if (!(e.isLoggingEnabled)) goto L_29e;
  console.warn("Pets entry could not evaluate its experiment gate", s);
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn a  args=1 vars=2 closure=3 cpool=0 bc=458B file=personalization_settings_ui/src/PersonalizationAvailability
// args: t
// locals: s
// closure: i, r, e
function {
  if (!((undefined === t))) goto L_8;
  return false;
  try { // catch -> L_167
  if (!((i.experimentLayer(t, "chatgpt-janus") == null))) goto L_40;
  i.experimentLayer(t, "chatgpt-janus");
  goto L_6b;
  if (!((undefined.getBoolean("enabled", false) == null))) goto L_72;
  undefined.getBoolean("enabled", false);
  if ((!!false)) goto L_165;
  if (!(r.Device.isAndroid())) goto L_ef;
  goto L_f4;
  // [栈深重同步 4 -> 3]
  if (!(t.isFeatureFlagEnabled({flagName: "chatgpt-ios-commerce-vto"}))) goto L_165;
  if (!((i.experimentLayer(t, "shopping_fe_safe") == null))) goto L_133;
  i.experimentLayer(t, "shopping_fe_safe");
  goto L_15e;
  if (!((undefined.getBoolean("vto_enabled", false) == null))) goto L_165;
  undefined.getBoolean("vto_enabled", false);
  return false;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_1c9
  if (!(e.isLoggingEnabled)) goto L_1c4;
  console.warn("Reference Photos could not evaluate eligibility", s);
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn c  args=2 vars=2 closure=0 cpool=0 bc=44B file=personalization_settings_ui/src/PersonalizationAvailability
// args: e, t
function {
  return e.isFeatureFlagEnabled({flagName: t});   // tail call
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=5 bc=249B file=personalization_settings_ui/src/PersonalizationAvailability
// args: require, module, exports
// locals: e, t, i, r, s, n, o, a, c
function {
  s = function s;
  n = function n;
  o = function o;
  a = function a;
  c = function c;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.eligibleRichResponseSettingsFor = undefined;
  exports.readPersonalizationAvailability = undefined;
  exports.isPersonalizationPetsEnabled = undefined;
  exports.readReferencePhotosEligibility = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("oai_platform_services/src/AccountSettings");
  i = require("oai_platform_services/src/OAIExperimentService");
  r = require("valdi_core/src/Device");
  exports.eligibleRichResponseSettingsFor = s;
  exports.readPersonalizationAvailability = n;
  exports.isPersonalizationPetsEnabled = o;
  exports.readReferencePhotosEligibility = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=personalization_settings_ui/src/PersonalizationAvailability
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
