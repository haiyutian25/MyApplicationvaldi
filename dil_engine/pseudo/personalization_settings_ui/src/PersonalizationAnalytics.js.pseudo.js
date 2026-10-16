// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=378B file=personalization_settings_ui/src/PersonalizationAnalytics
// args: r
// closure: i, e, n
function {
  if (!((r.kind !== i.OAINetworkResultKind.Success))) goto L_153;
  if (!((r.kind !== i.OAINetworkResultKind.Cancelled))) goto L_153;
  if (!(e.isLoggingEnabled)) goto L_153;
  console.warn("Could not record Personalization impression", r.kind);
  n.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=126B file=personalization_settings_ui/src/PersonalizationAnalytics
// args: r
// closure: e, n
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Could not record Personalization impression", r);
  n.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=personalization_settings_ui/src/PersonalizationAnalytics
// closure: s
function {
  return s.cancel();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=3 bc=252B file=personalization_settings_ui/src/PersonalizationAnalytics
// args: n
// locals: s
// closure: i, e, r, o
function {
  let s;
  r.trackAnalyticsEvent(o, {category: "Navigation", name: "Personalization", key: "personalization"});
  s = new i.OAINetworkClient(o).requestEmpty({method: "POST", path: "/backend-api/personality_settings_impression"});
  s.result.then(function <atom:0>, function <atom:0>);
  return function <atom:0>;
}

// fn o  args=1 vars=1 closure=4 cpool=1 bc=43B file=personalization_settings_ui/src/PersonalizationAnalytics
// args: o
// closure: i, e, r, n
function {
  return new n.Observable(function <atom:0>);
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=164B file=personalization_settings_ui/src/PersonalizationAnalytics
// args: require, module, exports
// locals: e, r, i, n, o
function {
  o = function o;
  let n;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.recordPersonalizationImpression = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  r = require("oai_platform_services/src/OAIAnalyticsService");
  i = require("oai_platform_services/src/OAINetworkClient");
  n = require("valdi_rxjs/src/Observable");
  exports.recordPersonalizationImpression = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=personalization_settings_ui/src/PersonalizationAnalytics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
