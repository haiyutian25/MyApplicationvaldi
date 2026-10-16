// fn n  args=2 vars=3 closure=2 cpool=0 bc=71B file=memory_settings_ui/src/MemoryAnalytics
// args: n, o
// locals: s
// closure: r, e
function {
  let s;
  s = r(o);
  e.trackAnalyticsEvent(n, {category: "Memory", name: s, key: o});
  return;
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=62B file=memory_settings_ui/src/MemoryAnalytics
// args: e
function {
  if (!((e === "memory_enabled"))) goto L_10;
  return "Memory Enabled";
  if (!((e === "memory_disabled"))) goto L_1f;
  return "Memory Disabled";
  if (!((e === "moonshine_enabled"))) goto L_2e;
  return "Moonshine Enabled";
  if (!((e === "moonshine_disabled"))) goto L_3d;
  return "Moonshine Disabled";
  e;
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=96B file=memory_settings_ui/src/MemoryAnalytics
// args: require, module, exports
// locals: e, n, r
function {
  n = function n;
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.trackMemoryAnalyticsEvent = undefined;
  e = require("oai_platform_services/src/OAIAnalyticsService");
  exports.trackMemoryAnalyticsEvent = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=memory_settings_ui/src/MemoryAnalytics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
