// fn a  args=2 vars=2 closure=2 cpool=0 bc=679B file=oai_platform_services/src/OAIAnalyticsService
// args: a, r
// closure: t, e
function {
  if (!((undefined !== a))) goto L_2a6;
  if (!(t.isVersionAtLeast(17))) goto L_2a6;
  try { // catch -> L_246
  if (!(t.isVersionAtLeast(265))) goto L_17e;
  if (!((undefined !== r.metadata))) goto L_17e;
  if (!((a.analyticsService == null))) goto L_ba;
  a.analyticsService;
  goto L_243;
  goto L_243;
  // [栈深重同步 1 -> 0]
  if (!((a.analyticsService == null))) goto L_1a9;
  a.analyticsService;
  goto L_243;
  undefined.track({category: r.category, name: r.name, key: r.key});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_2a5
  if (!(e.isLoggingEnabled)) goto L_2a2;
  console.warn("Native product analytics could not record an event");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=140B file=oai_platform_services/src/OAIAnalyticsService
// args: require, module, exports
// locals: e, t, a
function {
  a = function a;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.trackAnalyticsEvent = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/CompilerIntrinsics");
  exports.trackAnalyticsEvent = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_platform_services/src/OAIAnalyticsService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
