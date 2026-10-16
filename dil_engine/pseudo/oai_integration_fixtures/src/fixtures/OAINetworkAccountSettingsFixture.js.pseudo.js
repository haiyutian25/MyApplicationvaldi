// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=149B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// args: t
// closure: this, e, y
function {
  if ((this.isDestroyed())) goto L_94;
  if (((e !== this.requestGeneration))) goto L_94;
  this.activeTask = undefined;
  this.setState({status: y(t)});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=1 bc=483B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// locals: e, t, r
// closure: this, y, o, d
function {
  let r;
  let t;
  let e;
  this.requestGeneration = (this.requestGeneration ++);
  e = (this.requestGeneration ++);
  t = this.activeTask;
  this.activeTask = undefined;
  if (!((t == null))) goto L_76;
  t;
  goto L_9a;
  undefined.cancel();
  this.setState({status: "loading"});
  if (!((this.context == null))) goto L_11f;
  this.context;
  goto L_140;
  r = new o.OAINetworkClient(undefined.platformServices).requestJson({request: {method: "GET", path: "/backend-api/settings/user"}, decode: d});
  this.activeTask = r;
  r.result.then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=1 bc=99B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// locals: this, this.active_func, new.target, arguments
// closure: y, o, d, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.state = {status: "idle"};
  this.requestGeneration = 0;
  this.run = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=114B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// locals: this
function {
  this = this;
  if (!((true === this.viewModel.automaticallyRun))) goto L_71;
  this.run();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=143B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// locals: e, this
function {
  this = this;
  let e;
  this.requestGeneration = (this.requestGeneration ++);
  e = this.activeTask;
  this.activeTask = undefined;
  if (!((e == null))) goto L_6a;
  e;
  goto L_8e;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=10 cpool=0 bc=1195B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// locals: this
// closure: e, t, p, a, r, s, u, i, n, v
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", p.root);
  e.beginComponent(a.Button, r, undefined, undefined);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("onPress", this.run);
  e.endComponent();
  e.beginRender(s, undefined);
  e.setAttributeString("accessibilityLabel", "Integration fixture network.account_settings status: ".concat(this.state.status));
  e.setAttributeStyle("style", p.status);
  e.beginComponent(u.Text, i, undefined, undefined);
  e.setViewModelProperty("size", n.OAITextSize.Body);
  e.setViewModelProperty("tone", v(this.state.status));
  e.setViewModelProperty("value", this.state.status);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn d  args=1 vars=1 closure=1 cpool=0 bc=23B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// args: e
// closure: w
function {
  if (!(!w(e))) goto L_15;
  throw new TypeError("Expected an account settings JSON object");
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=9B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// args: e
// closure: k, t
function {
  return k(t[e]);   // tail call
}

// fn w  args=1 vars=2 closure=1 cpool=1 bc=153B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// args: e
// locals: t
// closure: k
function {
  let t;
  if (((null === e))) goto L_40;
  if ((("object" != typeof e))) goto L_40;
  if (!(Array.isArray(e))) goto L_45;
  return false;
  t = e;
  return Object.keys(t).every(function <atom:0>);   // tail call
}

// fn k  args=1 vars=1 closure=2 cpool=0 bc=180B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// args: e
// closure: k, w
function {
  if (((null === e))) goto L_b3;
  if ((("string" == typeof e))) goto L_b3;
  if ((("boolean" == typeof e))) goto L_b3;
  if (!(("number" == typeof e))) goto L_5d;
  return Number.isFinite(e);
  if (!(Array.isArray(e))) goto L_b0;
  return e.every(k);
  return w(e);
}

// fn y  args=1 vars=1 closure=1 cpool=0 bc=971B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// args: e
// closure: o
function {
  if (!((e.kind === o.OAINetworkResultKind.Success))) goto L_b6;
  return "success:".concat(e.statusCode);   // tail call
  if (!((e.kind === o.OAINetworkResultKind.Unavailable))) goto L_105;
  return "failure:unavailable";
  if (!((e.kind === o.OAINetworkResultKind.InvalidRequest))) goto L_154;
  return "failure:invalid-request";
  if (!((e.kind === o.OAINetworkResultKind.NetworkError))) goto L_1a3;
  return "failure:network";
  if (!((e.kind === o.OAINetworkResultKind.Timeout))) goto L_1f2;
  return "failure:timeout";
  if (!((e.kind === o.OAINetworkResultKind.Cancelled))) goto L_241;
  return "failure:cancelled";
  if (!((e.kind === o.OAINetworkResultKind.HostRejected))) goto L_290;
  return "failure:host-rejected";
  if (!((e.kind === o.OAINetworkResultKind.ServiceError))) goto L_32e;
  if (!((e.statusCode == null))) goto L_32b;
  e.statusCode;
  return "failure:service:".concat("unknown");   // tail call
  if (!((e.kind === o.OAINetworkResultKind.SerializationError))) goto L_37d;
  return "failure:serialization";
  (e.kind === o.OAINetworkResultKind.UnknownError);
  return "failure:unknown";
}

// fn v  args=1 vars=1 closure=1 cpool=0 bc=298B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// args: e
// closure: u
function {
  if (!(e.startsWith("success:"))) goto L_72;
  return u.TextTone.Success;
  if (!(e.startsWith("failure:"))) goto L_e4;
  return u.TextTone.Danger;
  return u.TextTone.Secondary;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=9 bc=688B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// args: require, module, exports
// locals: e, t, r, s, i, n, o, a, u, c, l, OAINetworkAccountSettingsFixture, <class_fields_init>, OAINetworkAccountSettingsFixture#1, d, w, k, y, v, p
function {
  d = function d;
  w = function w;
  k = function k;
  y = function y;
  v = function v;
  let p;
  let OAINetworkAccountSettingsFixture#1;
  let l;
  let c;
  let u;
  let a;
  let o;
  let n;
  let i;
  let s;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAINetworkAccountSettingsFixture = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "LG3gtIR0gGAGDNP0");
  r = e.makeComponentPrototype(["accessibilityId", "oai_integration_fixture.network.account_settings.run", "label", "Load account settings"], "uUwUsSFFPv9NN6_q");
  s = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.network.account_settings.status"], "tHP_q3rglHF86wFq");
  i = e.makeComponentPrototype(undefined, "Gy4xbMlU4dJNrUUt");
  n = require("oai_core/src/OAITokens");
  o = require("oai_platform_services/src/OAINetworkClient");
  a = require("oai_ui/src/components/Button");
  u = require("oai_ui/src/components/Text");
  c = require("valdi_core/src/Component");
  l = require("valdi_core/src/Style");
  let OAINetworkAccountSettingsFixture;
  let <class_fields_init>;
  class OAINetworkAccountSettingsFixture extends c.StatefulComponent { ... }
  <proto:OAINetworkAccountSettingsFixture>.onCreate = function <atom:0>;
  <proto:OAINetworkAccountSettingsFixture>.onDestroy = function <atom:0>;
  <proto:OAINetworkAccountSettingsFixture>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OAINetworkAccountSettingsFixture>;
  OAINetworkAccountSettingsFixture = function <atom:0>;
  // close_loc <class_fields_init>
  OAINetworkAccountSettingsFixture#1 = function <atom:0>;
  exports.OAINetworkAccountSettingsFixture = OAINetworkAccountSettingsFixture#1;
  p = {root: new l.Style({flexDirection: "column", width: "100%"}), status: new l.Style({marginTop: 12, minHeight: 24, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_integration_fixtures/src/fixtures/OAINetworkAccountSettingsFixture
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
