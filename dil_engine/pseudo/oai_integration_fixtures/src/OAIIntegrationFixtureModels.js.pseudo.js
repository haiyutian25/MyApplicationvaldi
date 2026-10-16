// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=91B file=oai_integration_fixtures/src/OAIIntegrationFixtureModels
// args: e
function {
  e.DeviceClipboard = "device.clipboard";
  e.ExperimentService = "experiment.service";
  e.Navigation = "navigation";
  e.NetworkAccountSettings = "network.account_settings";
  e.PlatformAlert = "platform.alert";
  e.WebLauncherOpenURL = "web_launcher.open_url";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=oai_integration_fixtures/src/OAIIntegrationFixtureModels
// args: t
// closure: e
function {
  return (t.id === e);
}

// fn s  args=1 vars=2 closure=2 cpool=1 bc=96B file=oai_integration_fixtures/src/OAIIntegrationFixtureModels
// args: e
// locals: t
// closure: exports, t
function {
  if (!((undefined !== e))) goto L_5c;
  let t;
  t = exports.OAI_INTEGRATION_FIXTURES.find(function <atom:0>);
  if (!((undefined !== t))) goto L_5c;
  return t;
  return t;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=546B file=oai_integration_fixtures/src/OAIIntegrationFixtureModels
// args: require, module, exports
// locals: e, t, i, r, o, n, a, s
function {
  s = function s;
  let a;
  let n;
  let o;
  let r;
  let i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAIIntegrationFixtureId = undefined;
  exports.OAI_INTEGRATION_FIXTURES = undefined;
  exports.resolveIntegrationFixture = undefined;
  if ((e)) goto L_83;
  e = {};
  exports.OAIIntegrationFixtureId = {};
  function <atom:0>({});
  t = {id: e.NetworkAccountSettings, subtitle: "Authenticated GET /backend-api/settings/user", title: "Network: account settings"};
  i = {id: e.DeviceClipboard, subtitle: "Copies text and an encoded image through the Valdi device clipboard", title: "Device clipboard"};
  r = {id: e.ExperimentService, subtitle: "Exercises every supported experiment value type", title: "Experiment service"};
  o = {id: e.Navigation, subtitle: "Exercises host-owned and page-scoped pushes", title: "Native navigation"};
  n = {id: e.WebLauncherOpenURL, subtitle: "Opens a platform browser by default or an embedded Valdi WebPage", title: "Open URL: Memory FAQ"};
  a = {id: e.PlatformAlert, subtitle: "Presents native platform alerts directly from Valdi", title: "Platform alert"};
  exports.OAI_INTEGRATION_FIXTURES = [t, i, r, o, a, n];
  exports.resolveIntegrationFixture = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_integration_fixtures/src/OAIIntegrationFixtureModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
