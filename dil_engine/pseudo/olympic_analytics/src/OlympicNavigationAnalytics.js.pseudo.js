// fn s  args=0 vars=0 closure=0 cpool=0 bc=203B file=olympic_analytics/src/OlympicNavigationAnalytics
function {
  return "olympic-view-".concat(Date.now(), "-", Math.random().toString(36).slice(2));   // tail call
}

// fn o  args=4 vars=4 closure=3 cpool=0 bc=69B file=olympic_analytics/src/OlympicNavigationAnalytics
// args: s, o, n, c
// closure: e, i, t
function {
  e.sendEcosystemEvent(s, i, {view_session_id: c, surface: t, page: o, ecosystem_view_slug: n});
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=138B file=olympic_analytics/src/OlympicNavigationAnalytics
// args: require, module, exports
// locals: e, i, t, s, o
function {
  s = function s;
  o = function o;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createOlympicViewSessionId = undefined;
  exports.trackOlympicNavigationPageViewed = undefined;
  e = require("ecosystem_instrumentation/src/EcosystemInstrumentation");
  i = "olympic.navigation.page_viewed";
  t = "olympic";
  exports.createOlympicViewSessionId = s;
  exports.trackOlympicNavigationPageViewed = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=olympic_analytics/src/OlympicNavigationAnalytics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
