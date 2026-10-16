// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=43B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// closure: this, h
function {
  this.presentAlert(h);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=43B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// closure: this, m
function {
  this.presentAlert(m);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=101B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// args: e
// closure: s, this
function {
  s = true;
  true;
  if ((this.isDestroyed())) goto L_64;
  this.setState({status: "failure:second-alert-resolved"});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=94B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// args: e
// closure: this
function {
  if ((this.isDestroyed())) goto L_5d;
  this.setState({status: "single-flight:second-rejected"});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=187B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// args: e
// closure: this, s
function {
  if ((this.isDestroyed())) goto L_ba;
  if ((s)) goto L_ba;
  if (!((e.selectedActionId == null))) goto L_af;
  e.selectedActionId;
  this.setState({status: "single-flight:first-selected:".concat("dismissed")});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=101B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// args: e
// closure: this, s
function {
  if ((this.isDestroyed())) goto L_64;
  if ((s)) goto L_64;
  this.setState({status: "failure:first-alert-rejected"});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=4 bc=384B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// locals: e, t, i, s
// closure: this, y, h, m
function {
  let s;
  let t;
  let e;
  e = undefined;
  t = undefined;
  this.setState({status: "single-flight:waiting"});
  try { // catch -> L_e8
  e = y.platformAlert.present(h);
  y.platformAlert.present(h);
  t = y.platformAlert.present(m);
  y.platformAlert.present(m);
  <?>;
  goto L_125;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_124
  this.setState({status: "failure:unavailable"});
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  s = false;
  t.then(function <atom:0>, function <atom:0>);
  e.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=185B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// args: e
// closure: this, s
function {
  if ((this.isDestroyed())) goto L_b8;
  if (!((e.selectedActionId == null))) goto L_ad;
  e.selectedActionId;
  this.setState({status: "sequential:".concat(s, ":", "dismissed")});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=94B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// args: e
// closure: this
function {
  if ((this.isDestroyed())) goto L_5d;
  this.setState({status: "failure:second-alert-rejected"});
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=2 bc=383B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// args: e
// locals: s, i, t
// closure: this, y, m
function {
  let i;
  let s;
  if (!(this.isDestroyed())) goto L_30;
  return;
  if (!((e.selectedActionId == null))) goto L_5c;
  e.selectedActionId;
  s = "dismissed";
  i = undefined;
  this.setState({status: "sequential:".concat(s, ":second-waiting")});
  try { // catch -> L_116
  i = y.platformAlert.present(m);
  y.platformAlert.present(m);
  <?>;
  goto L_153;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_152
  this.setState({status: "failure:second-alert-unavailable"});
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  i.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=94B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// args: e
// closure: this
function {
  if ((this.isDestroyed())) goto L_5d;
  this.setState({status: "failure:first-alert-rejected"});
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=2 bc=249B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// locals: e, t
// closure: this, y, m, h
function {
  let e;
  e = undefined;
  this.setState({status: "sequential:first-waiting"});
  try { // catch -> L_90
  e = y.platformAlert.present(h);
  y.platformAlert.present(h);
  <?>;
  goto L_cd;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_cc
  this.setState({status: "failure:unavailable"});
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  e.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=4 bc=128B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// locals: this, this.active_func, new.target, arguments
// closure: h, m, y, <class_fields_init>
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
  this.presentRetryCancelAlert = function <atom:0>;
  this.presentDestructiveAlert = function <atom:0>;
  this.verifySingleFlight = function <atom:0>;
  this.verifySequentialAlerts = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=114B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// locals: this
function {
  this = this;
  if (!((true === this.viewModel.automaticallyRun))) goto L_71;
  this.presentRetryCancelAlert();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=12 cpool=0 bc=2571B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// locals: this
// closure: e, t, f, d, s, n, i, r, o, l, u, a
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", f.root);
  e.beginComponent(d.Button, s, undefined, undefined);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("onPress", this.presentRetryCancelAlert);
  e.setViewModelProperty("size", n.OAIControlSize.Sm);
  e.endComponent();
  e.beginComponent(d.Button, i, undefined, undefined);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("onPress", this.presentDestructiveAlert);
  e.setViewModelProperty("size", n.OAIControlSize.Sm);
  e.endComponent();
  e.beginComponent(d.Button, r, undefined, undefined);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("onPress", this.verifySingleFlight);
  e.setViewModelProperty("size", n.OAIControlSize.Sm);
  e.endComponent();
  e.beginComponent(d.Button, o, undefined, undefined);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("onPress", this.verifySequentialAlerts);
  e.setViewModelProperty("size", n.OAIControlSize.Sm);
  e.endComponent();
  e.beginRender(l, undefined);
  e.setAttributeString("accessibilityLabel", "Integration fixture platform.alert status: ".concat(this.state.status));
  e.setAttributeStyle("style", f.status);
  e.beginComponent(u.Text, a, undefined, undefined);
  e.setViewModelProperty("size", n.OAITextSize.Body);
  if (!(this.state.status.startsWith("failure:"))) goto L_8da;
  goto L_91f;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("tone", u.TextTone.Secondary);
  e.setViewModelProperty("value", this.state.status);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=173B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// args: e
// closure: this
function {
  if ((this.isDestroyed())) goto L_ac;
  if (!((e.selectedActionId == null))) goto L_a1;
  e.selectedActionId;
  this.setState({status: "selected:".concat("dismissed")});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=90B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// args: e
// closure: this
function {
  if ((this.isDestroyed())) goto L_59;
  this.setState({status: "failure:unavailable"});
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=2 bc=245B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// args: e
// locals: t, s, this
// closure: y
function {
  this = this;
  let t;
  t = undefined;
  this.setState({status: "waiting"});
  try { // catch -> L_8e
  t = y.platformAlert.present(e);
  y.platformAlert.present(e);
  <?>;
  goto L_c9;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_c8
  this.setState({status: "failure:unavailable"});
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  t.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=4 bc=1066B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// args: require, module, exports
// locals: e, t, s, i, r, o, l, a, n, d, u, c, p, y, h, m, OAIPlatformAlertFixture, <class_fields_init>, OAIPlatformAlertFixture#1, f
function {
  let f;
  let OAIPlatformAlertFixture#1;
  let m;
  let h;
  let y;
  let p;
  let c;
  let u;
  let d;
  let n;
  let a;
  let l;
  let o;
  let r;
  let i;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAIPlatformAlertFixture = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "TdZ9SUNTRC0cxhsE");
  s = e.makeComponentPrototype(["accessibilityId", "oai_integration_fixture.platform_alert.retry_cancel.run", "label", "Present retry/cancel alert"], "zi3DTSf0QsLNNmj2");
  i = e.makeComponentPrototype(["accessibilityId", "oai_integration_fixture.platform_alert.destructive.run", "label", "Present destructive alert"], "Dv5F0W-k8zQNeMUV");
  r = e.makeComponentPrototype(["accessibilityId", "oai_integration_fixture.platform_alert.single_flight.run", "label", "Verify single-flight alert"], "zuqkrGw-ZGkkKaod");
  o = e.makeComponentPrototype(["accessibilityId", "oai_integration_fixture.platform_alert.sequential.run", "label", "Verify sequential alerts"], "lbUbrX60QcWKyrqe");
  l = e.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.platform_alert.status"], "qls2qtO33ytfTKr6");
  a = e.makeComponentPrototype(undefined, "Io9Q6Yoerjhsf_9_");
  n = require("oai_core/src/OAITokens");
  d = require("oai_ui/src/components/Button");
  u = require("oai_ui/src/components/Text");
  c = require("valdi_core/src/Component");
  p = require("valdi_core/src/Style");
  y = require("valdi_platform_alert/src/PlatformAlert");
  h = {title: "Could not update Memory", message: "Something went wrong while updating your setting.", actions: [{id: "retry", title: "Retry", role: 0}, {id: "cancel", title: "Cancel", role: 1}]};
  m = {title: "Delete saved memory?", message: "This action cannot be undone.", actions: [{id: "delete", title: "Delete", role: 2}, {id: "cancel", title: "Cancel", role: 1}]};
  let OAIPlatformAlertFixture;
  let <class_fields_init>;
  class OAIPlatformAlertFixture extends c.StatefulComponent { ... }
  <proto:OAIPlatformAlertFixture>.onCreate = function <atom:0>;
  <proto:OAIPlatformAlertFixture>.onRender = function <atom:0>;
  <proto:OAIPlatformAlertFixture>.presentAlert = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OAIPlatformAlertFixture>;
  OAIPlatformAlertFixture = function <atom:0>;
  // close_loc <class_fields_init>
  OAIPlatformAlertFixture#1 = function <atom:0>;
  exports.OAIPlatformAlertFixture = OAIPlatformAlertFixture#1;
  f = {root: new p.Style({flexDirection: "column", gap: 8, width: "100%"}), status: new p.Style({marginTop: 4, minHeight: 24, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_integration_fixtures/src/fixtures/OAIPlatformAlertFixture
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
